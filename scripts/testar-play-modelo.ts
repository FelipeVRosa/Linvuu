// Regras puras da cobrança pelo Google Play: leitura do RevenueCat no servidor, textos da oferta e guardas do build.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { lerAcessoPlay, consultarPlay } from '../server/play';
import { configuracaoPlay, duracao, frequencia, resumoOferta, linkGerenciarPlay } from '../src/plataforma/apk/comprasPlayModelo';

const agora = Date.parse('2026-10-21T12:00:00Z');
const futuro = '2026-11-21T12:00:00Z', passado = '2026-10-01T12:00:00Z';
const sub = (e: object, s: object = {}) => ({ subscriber: { entitlements: { Premium: { product_identifier: 'linvuu_mensal:mensal', ...e } }, subscriptions: { 'linvuu_mensal:mensal': { is_sandbox: false, ...s } } } });

// 1. Servidor: só entitlement certo, dentro do prazo, sem reembolso; sandbox só quando permitido.
assert.equal(lerAcessoPlay({}, 'Premium', agora, false).ativa, false, 'sem assinante');
assert.equal(lerAcessoPlay(sub({ expires_date: futuro }), 'Outro', agora, false).ativa, false, 'outro entitlement');
assert.deepEqual(lerAcessoPlay(sub({ expires_date: futuro }), 'Premium', agora, false), { ativa: true, ate: Date.parse(futuro) / 1000, cancelaEm: null, sandbox: false, produto: 'linvuu_mensal:mensal' });
assert.equal(lerAcessoPlay(sub({ expires_date: passado }), 'Premium', agora, false).ativa, false, 'expirada');
assert.equal(lerAcessoPlay(sub({ expires_date: passado, grace_period_expires_date: futuro }), 'Premium', agora, false).ativa, true, 'carência da Play mantém acesso');
assert.equal(lerAcessoPlay(sub({ expires_date: futuro }, { refunded_at: passado }), 'Premium', agora, false).ativa, false, 'reembolsada');
assert.equal(lerAcessoPlay(sub({ expires_date: futuro }, { is_sandbox: true }), 'Premium', agora, false).ativa, false, 'testador não libera em produção');
assert.equal(lerAcessoPlay(sub({ expires_date: futuro }, { is_sandbox: true }), 'Premium', agora, true).ativa, true, 'testador libera com sandbox permitido');
assert.equal(lerAcessoPlay(sub({ expires_date: futuro }, { unsubscribe_detected_at: passado }), 'Premium', agora, false).cancelaEm, Date.parse(futuro) / 1000, 'cancelada: acesso até o fim do período');
assert.equal(lerAcessoPlay(sub({ expires_date: 'lixo' }), 'Premium', agora, false).ativa, false, 'data inválida não libera');

// 2. Servidor: sem chave secreta não consulta; chave pública no lugar da secreta é recusada; erro HTTP vira erro, nunca acesso.
const chamadas: string[] = [];
const falso = (status: number, corpo: unknown) => (async (url: string, init?: RequestInit) => { chamadas.push(`${url} ${(init?.headers as Record<string, string>).Authorization}`); return new Response(JSON.stringify(corpo), { status }); }) as typeof fetch;
delete process.env.REVENUECAT_SECRET_KEY;
assert.equal((await consultarPlay('u1', falso(200, sub({ expires_date: futuro })))).ativa, false); assert.equal(chamadas.length, 0, 'desligado sem chave');
process.env.REVENUECAT_SECRET_KEY = 'goog_publica';
assert.equal((await consultarPlay('u1', falso(200, sub({ expires_date: futuro })))).ativa, false); assert.equal(chamadas.length, 0, 'chave pública não serve no servidor');
process.env.REVENUECAT_SECRET_KEY = 'sk_teste';
assert.equal((await consultarPlay('u/1', falso(200, sub({ expires_date: '2099-01-01T00:00:00Z' })))).ativa, true);
assert.equal(chamadas.at(-1), 'https://api.revenuecat.com/v1/subscribers/u%2F1 Bearer sk_teste', 'uid codificado e chave secreta só no cabeçalho');
await assert.rejects(consultarPlay('u1', falso(500, {})), /revenuecat 500/);
assert.equal((await consultarPlay('u1', falso(404, {}))).ativa, false);
delete process.env.REVENUECAT_SECRET_KEY;

// 3. App: modo de produção só com goog_ no Android; textos da oferta vêm da loja.
assert.equal(configuracaoPlay('google-play', 'goog_x', true), true);
for (const [m, k, n] of [['google-play', 'test_x', true], ['google-play', 'sk_x', true], ['google-play', 'goog_x', false], ['revenuecat-test-store', 'goog_x', true], [undefined, undefined, true]] as const) assert.equal(configuracaoPlay(m, k, n), false, `${m} ${k} ${n}`);
assert.equal(duracao('P1M', 'pt-BR'), '1 mês'); assert.equal(duracao('P3M', 'pt-BR'), '3 meses'); assert.equal(duracao('P1Y', 'en'), '1 year'); assert.equal(duracao('1M', 'pt-BR'), null);
assert.equal(frequencia('P1M', 'pt-BR'), 'por mês'); assert.equal(frequencia('P3M', 'pt-BR'), 'a cada 3 meses'); assert.equal(frequencia('P1Y', 'es'), 'por año');
assert.deepEqual(resumoOferta({ priceString: 'R$ 139,00', subscriptionPeriod: 'P1M', defaultOption: { freePhase: null, introPhase: null } }, 'pt-BR'), { preco: 'R$ 139,00', frequencia: 'por mês', inicial: null });
assert.equal(resumoOferta({ priceString: 'R$ 139,00', subscriptionPeriod: 'P1M', defaultOption: { freePhase: null, introPhase: { billingPeriod: { iso8601: 'P1M' }, billingCycleCount: 3, price: { formatted: 'R$ 79,00', amountMicros: 79e6 } } } }, 'pt-BR')?.inicial, 'R$ 79,00 por 1 mês (3 vezes); depois, R$ 139,00 por mês.');
assert.equal(resumoOferta({ priceString: 'R$ 139,00', subscriptionPeriod: null }, 'pt-BR'), null, 'sem período não vende');
assert.equal(linkGerenciarPlay('com.linvuu.app', 'linvuu_mensal:mensal'), 'https://play.google.com/store/account/subscriptions?package=com.linvuu.app&sku=linvuu_mensal');

// 4. Build: Google Play só com goog_ e autorização escrita; padrão continua sem compra real.
const vite = (env: Record<string, string>) => spawnSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build', '--outDir', 'node_modules/.cache/guarda-play'], { env: { ...process.env, VITE_ALVO: 'apk', ...env }, encoding: 'utf8' });
assert.match(vite({ VITE_BILLING_MODE: 'google-play', VITE_REVENUECAT_ANDROID_KEY: 'goog_x' }).stderr + '', /LINVUU_COBRANCA_PLAY_AUTORIZADA=sim/, 'sem autorização, falha');
assert.match(vite({ VITE_BILLING_MODE: 'google-play', VITE_REVENUECAT_ANDROID_KEY: 'test_x', LINVUU_COBRANCA_PLAY_AUTORIZADA: 'sim' }).stderr + '', /goog_/, 'chave errada, falha');
assert.match(vite({ VITE_BILLING_MODE: 'stripe' }).stderr + '', /não autorizado/, 'outro modo, falha');

console.log('Google Play Billing: leitura do servidor, oferta do app e guardas do build aprovadas (sem rede, sem loja real).');
