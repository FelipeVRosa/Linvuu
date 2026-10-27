// Cobrança da Linvuu: Stripe (site) e Google Play via RevenueCat (app) são as fontes da verdade (sem banco próprio). O navegador manda o token de login (Firebase);
// o servidor confere o token, acha o cliente no Stripe pelo uid e responde se a assinatura está ativa.
import fs from 'node:fs';
import path from 'node:path';
import type { Express, Request, Response } from 'express';
import Stripe from 'stripe';
import { getAuth } from 'firebase-admin/auth';
import { firebaseAdmin } from './firebase-admin';
import { consultarPlay, playConfigurado } from './play';
import { registrarWebhookCobranca } from './billing-webhook';

const chave = process.env.STRIPE_SECRET_KEY;
const projeto = process.env.FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID;
const stripe = chave ? new Stripe(chave) : null;
let precoCache: string | null = process.env.STRIPE_PRICE_ID || null;

const PRECO_CENTAVOS = 13900;
const PRECO_TRIMESTRAL = 41700; // 3 x R$ 139, pagamento único (cartão ou boleto), sem renovação automática
const PRECO_TRIMESTRAL_PIX = 29190; // 30% de desconto sobre R$ 417 (41700 x 0,7), só no Pix, pagamento único
const PRECO_ANUAL = 99900; // 12 meses, pagamento único (cartão ou boleto), sem renovação automática
const PLANOS_PACOTE = ['trimestral', 'trimestral-pix', 'anual'];
const somaMeses = (t: number, m: number) => { const d = new Date(t * 1000); d.setMonth(d.getMonth() + m); return Math.floor(d.getTime() / 1000); };

/** Alguma origem de cobrança pronta: Stripe (site) ou Google Play (app, via RevenueCat). */
export const cobrancaConfigurada = () => !!((stripe || playConfigurado()) && projeto);

export async function usuario(req: Request): Promise<{ uid: string; email?: string } | null> {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ') || !projeto) return null;
  try {
    // Revogação e conta desativada também invalidam tokens ainda não expirados.
    const t = await getAuth(firebaseAdmin()).verifyIdToken(h.slice(7), true);
    return { uid: t.uid, email: t.email };
  } catch (e) {
    if (e instanceof Error && /sem credencial/.test(e.message) && !avisouCredencial) { avisouCredencial = true; console.error('[Linvuu]', e.message); }
    return null;
  }
}
let avisouCredencial = false;

async function preco(): Promise<string> {
  if (precoCache) return precoCache;
  const achados = await stripe!.prices.search({ query: "active:'true' AND metadata['linvuu']:'mensal'" });
  if (achados.data[0]) return (precoCache = achados.data[0].id);
  const produto = await stripe!.products.create({ name: 'Linvuu Mensal', metadata: { linvuu: 'mensal' } });
  const p = await stripe!.prices.create({ product: produto.id, currency: 'brl', unit_amount: PRECO_CENTAVOS, recurring: { interval: 'month' }, metadata: { linvuu: 'mensal' } });
  return (precoCache = p.id);
}

// A busca de clientes do Stripe é «eventualmente consistente»: um cliente recém-criado pode levar até um minuto para
// aparecer. Sem memória, dois cliques seguidos em «Assinar» criavam dois clientes para a mesma pessoa. O id fica guardado
// por uid (e o pedido em andamento é compartilhado), e a busca só acontece uma vez por processo.
const clientes = new Map<string, Promise<string>>();
const usuarioPorCliente = new Map<string, string>();
function cliente(u: { uid: string; email?: string }): Promise<string> {
  const guardado = clientes.get(u.uid);
  if (guardado) return guardado;
  const p = (async () => {
    const r = await stripe!.customers.search({ query: `metadata['uid']:'${u.uid}'` });
    const id = r.data[0]?.id ?? (await stripe!.customers.create({ email: u.email, metadata: { uid: u.uid } }, { idempotencyKey: `linvuu-cliente-${u.uid}` })).id;
    usuarioPorCliente.set(id, u.uid);
    return id;
  })();
  clientes.set(u.uid, p);
  p.catch(() => clientes.delete(u.uid));
  return p;
}

type Acesso = { ativa: boolean; via: 'assinatura' | 'trimestral' | 'play' | null; status: string | null; cancelaEm: number | null; ate: number | null };

// Cada sessão paga e cada áudio pago perguntam se o acesso está ativo. Sem memória, eram 3 chamadas ao Stripe por arquivo
// de áudio (dezenas por sessão), o que estoura o limite da API e deixa o site lento. A resposta vale 60 segundos por pessoa.
const ACESSO_MS = 60_000;
const acessos = new Map<string, { ate: number; p: Promise<Acesso> }>();
const renovou = new Map<string, number>();
/** Registra antes de express.json: a assinatura Stripe depende dos bytes originais. */
export function registrarNotificacoesCobranca(app: Express) {
  registrarWebhookCobranca(app, {
    stripe,
    segredo: () => process.env.STRIPE_WEBHOOK_SECRET,
    invalidar: (clienteId) => {
      const uid = usuarioPorCliente.get(clienteId);
      if (uid) { acessos.delete(uid); renovou.delete(uid); }
    },
  });
}
setInterval(() => { const t = Date.now(); for (const [k, v] of acessos) if (v.ate < t) acessos.delete(k); for (const [k, v] of renovou) if (t - v > 60_000) renovou.delete(k); }, 5 * 60_000).unref();
/** Acesso com memória curta; `renovar` ignora a memória (tela de assinatura e volta do pagamento). */
function acesso(u: { uid: string; email?: string }, renovar = false): Promise<Acesso> {
  const t = Date.now();
  const m = acessos.get(u.uid);
  // «renovar» ignora a memória, mas no máximo uma vez a cada 10 s por pessoa (cada renovação custa 2 chamadas ao Stripe).
  const pode = renovar && t - (renovou.get(u.uid) ?? 0) > 10_000;
  if (m && m.ate > t && !pode) return m.p;
  if (pode) renovou.set(u.uid, t);
  const p = consultarAcesso(u);
  acessos.set(u.uid, { ate: t + ACESSO_MS, p });
  p.catch(() => acessos.delete(u.uid));
  return p;
}

/** Pacote reembolsado (total ou parcial) ou em disputa não dá mais acesso: o status «pago» da sessão não muda depois do reembolso. */
function cobrancaDevolvida(x: Stripe.Checkout.Session): boolean {
  const pi = x.payment_intent;
  if (!pi || typeof pi === 'string') return false;
  const ch = pi.latest_charge;
  if (!ch || typeof ch === 'string') return false;
  return ch.refunded || ch.amount_refunded > 0 || ch.disputed;
}

/** Acesso = assinatura mensal ativa OU pacote de 3 meses pago (Pix e boleto só contam depois de pagos). Stripe é a fonte da verdade. */
async function consultarAcesso(u: { uid: string; email?: string }): Promise<Acesso> {
  // Duas origens, um acesso: assinatura do site (Stripe) OU do app (Google Play). Qualquer erro de consulta vira erro, nunca acesso.
  // Se uma origem falhar e a outra confirmar acesso, vale a confirmação; se nenhuma confirmar e alguma falhar, é erro.
  const [rs, rp] = await Promise.allSettled([stripe ? consultarStripe(u) : Promise.resolve(null), consultarPlay(u.uid)]);
  const site = rs.status === 'fulfilled' ? rs.value : null, play = rp.status === 'fulfilled' ? rp.value : null;
  if (site?.ativa) return site;
  if (play?.ativa) return { ativa: true, via: 'play', status: 'active', cancelaEm: play.cancelaEm, ate: play.ate };
  if (rs.status === 'rejected') throw rs.reason;
  if (rp.status === 'rejected') throw rp.reason;
  return site ?? { ativa: false, via: null, status: null, cancelaEm: null, ate: null };
}

async function consultarStripe(u: { uid: string; email?: string }): Promise<Acesso> {
  const c = await cliente(u);
  const [subs, sessoes] = await Promise.all([
    stripe!.subscriptions.list({ customer: c, status: 'all', limit: 10 }),
    stripe!.checkout.sessions.list({ customer: c, status: 'complete', limit: 100, expand: ['data.payment_intent.latest_charge'] }),
  ]);
  const s = subs.data.find((x) => x.status === 'active' || x.status === 'trialing');
  const agora = Math.floor(Date.now() / 1000);
  const pacotes = sessoes.data.filter((x) => x.mode === 'payment' && PLANOS_PACOTE.includes(String(x.metadata?.plano)) && x.payment_status === 'paid' && !cobrancaDevolvida(x)).map((x) => somaMeses(x.created, x.metadata?.plano === 'anual' ? 12 : 3));
  const ate = pacotes.length ? Math.max(...pacotes) : null;
  if (s) return { ativa: true, via: 'assinatura', status: s.status, cancelaEm: s.cancel_at_period_end ? s.items.data[0]?.current_period_end ?? null : null, ate: null };
  if (ate && ate > agora) return { ativa: true, via: 'trimestral', status: 'paid', cancelaEm: null, ate };
  return { ativa: false, via: null, status: null, cancelaEm: null, ate };
}

export function registrarCobranca(app: Express, urlBase: () => string) {
  const nao = (res: Response) => res.status(503).json({ error: 'Pagamento ainda não configurado.' });
  const guarda = async (req: Request, res: Response) => {
    if (!cobrancaConfigurada()) { nao(res); return null; }
    const u = await usuario(req);
    if (!u) { res.status(401).json({ error: 'Entre na sua conta.' }); return null; }
    return u;
  };

  // Sessões depois da 8ª (as 2 primeiras aulas são grátis): só saem do servidor para quem tem assinatura ativa.
  app.get('/api/aula/:idioma/:n', async (req: Request, res: Response) => {
    const idioma = String(req.params.idioma), n = Number(req.params.n);
    if (!/^[a-z]{2}$/.test(idioma) || !Number.isInteger(n) || n < 1 || n > 999) { res.status(404).json({ error: 'Aula não encontrada.' }); return; }
    // ?l=en|es: a mesma sessão com a explicação traduzida (content/idiomas/<id>/<l>/dia-NNN.json), quando existir.
    const l = String(req.query.l ?? '');
    const nome = `dia-${String(n).padStart(3, '0')}.json`;
    const traduzido = /^(en|es)$/.test(l) ? path.join(process.cwd(), 'content', 'idiomas', idioma, l, nome) : '';
    const arq = traduzido && fs.existsSync(traduzido) ? traduzido : path.join(process.cwd(), 'content', 'idiomas', idioma, nome);
    if (!fs.existsSync(arq)) { res.status(404).json({ error: 'Aula não encontrada.' }); return; }
    const livre = n <= 8 || (process.env.NODE_ENV !== 'production' && !cobrancaConfigurada());
    if (!livre) {
      const u = await guarda(req, res); if (!u) return;
      try {
        if (!(await acesso(u)).ativa) { res.status(403).json({ error: 'Assinatura necessária.' }); return; }
      } catch (e) { console.error('aula', e); res.status(500).json({ error: 'Não foi possível verificar a assinatura.' }); return; }
    }
    try { res.set('Cache-Control', 'private, no-store').type('json').send(fs.readFileSync(arq, 'utf8')); } catch (e) { console.error('aula/leitura', e); res.status(500).json({ error: 'Não foi possível abrir a aula.' }); }
  });

  // Gramática por tópico: os tópicos das 2 primeiras aulas (sessões 1 a 8) são abertos; os demais só saem para quem tem assinatura ativa.
  app.get('/api/gramatica/:idioma', async (req: Request, res: Response) => {
    const idioma = String(req.params.idioma);
    if (!/^[a-z]{2}$/.test(idioma)) { res.status(404).json({ error: 'Não encontrado.' }); return; }
    const l = String(req.query.l ?? '');
    const traduzida = /^(en|es)$/.test(l) ? path.join(process.cwd(), 'content', 'gramatica', `${idioma}.${l}.json`) : '';
    const arq = traduzida && fs.existsSync(traduzida) ? traduzida : path.join(process.cwd(), 'content', 'gramatica', `${idioma}.json`);
    if (!fs.existsSync(arq)) { res.status(404).json({ error: 'Não encontrado.' }); return; }
    let pacote: { categorias: string[]; topicos: { dia: number; categoria: string }[] };
    try { pacote = JSON.parse(fs.readFileSync(arq, 'utf8')); } catch (e) { console.error('gramatica/leitura', e); res.status(500).json({ error: 'Não foi possível abrir a gramática.' }); return; }
    let completo = process.env.NODE_ENV !== 'production' && !cobrancaConfigurada();
    if (!completo) {
      const u = await usuario(req);
      if (u) {
        try { completo = (await acesso(u)).ativa; } catch (e) { console.error('gramatica', e); }
      }
    }
    const abertos = pacote.topicos.filter((t) => t.dia <= 8);
    const topicos = completo ? pacote.topicos : abertos;
    const categorias = pacote.categorias.filter((c) => topicos.some((t) => t.categoria === c));
    res.set('Cache-Control', 'private, no-store').json({ ...pacote, categorias, topicos, completo, bloqueados: pacote.topicos.length - topicos.length });
  });

  // Áudio das sessões depois da 8ª: arquivos em server/audio-privado (fora de public/). Mesma regra do texto:
  // só sai para quem tem assinatura ativa. Em desenvolvimento sem cobrança configurada, libera para testar.
  app.get('/api/audio/:idioma/:arquivo', async (req: Request, res: Response) => {
    const idioma = String(req.params.idioma), arquivo = String(req.params.arquivo);
    if (!/^[a-z]{2}$/.test(idioma) || !/^[0-9a-f]{8}\.mp3$/.test(arquivo)) { res.status(404).end(); return; }
    // Voz nova (ElevenLabs) em audio-privado-v2; o que ainda não foi regravado cai no áudio antigo (Edge).
    const novo = path.resolve(process.cwd(), 'server', 'audio-privado-v2', idioma, arquivo);
    const arq = fs.existsSync(novo) ? novo : path.resolve(process.cwd(), 'server', 'audio-privado', idioma, arquivo);
    if (!fs.existsSync(arq)) { res.status(404).end(); return; }
    const livre = process.env.NODE_ENV !== 'production' && !cobrancaConfigurada();
    if (!livre) {
      const u = await guarda(req, res); if (!u) return;
      try {
        if (!(await acesso(u)).ativa) { res.status(403).json({ error: 'Assinatura necessária.' }); return; }
      } catch (e) { console.error('audio', e); res.status(500).json({ error: 'Não foi possível verificar a assinatura.' }); return; }
    }
    res.set('Cache-Control', 'private, no-store').type('audio/mpeg').sendFile(arq);
  });

  app.get('/api/billing/status', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    try {
      res.set('Cache-Control', 'private, no-store').json(await acesso(u, true));
    } catch (e) { console.error('billing/status', e); res.status(500).json({ error: 'Não foi possível consultar a assinatura.' }); }
  });

  app.post('/api/billing/checkout', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    if (!stripe) { nao(res); return; }
    try {
      const base = urlBase();
      const plano = req.body?.plano;
      if (!['mensal', 'trimestral', 'trimestral-pix', 'anual'].includes(plano)) { res.status(400).json({ error: 'Plano inválido.' }); return; }
      const pix = plano === 'trimestral-pix';
      const anual = plano === 'anual';
      const pacote = plano === 'trimestral' || pix || anual;
      const c = await cliente(u);
      // idioma do site (pt, en, es): o checkout do Stripe e a volta para o site ficam no mesmo idioma
      const idioma = ['en', 'es'].includes(req.body?.idioma) ? (req.body.idioma as 'en' | 'es') : null;
      const prefixo = idioma ? `/${idioma}` : '';
      const comum = { customer: c, locale: (idioma ?? 'pt-BR') as 'pt-BR' | 'en' | 'es', success_url: `${base}${prefixo}/assinatura?ok=1`, cancel_url: `${base}${prefixo}/assinatura`, client_reference_id: u.uid, allow_promotion_codes: true };
      const s = pix
        ? await stripe!.checkout.sessions.create({
            ...comum, mode: 'payment', allowed_payment_method_types: ['pix'],
            payment_method_options: { pix: { expires_after_seconds: 86400 } },
            line_items: [{ quantity: 1, price_data: { currency: 'brl', unit_amount: PRECO_TRIMESTRAL_PIX, product_data: { name: 'Linvuu: 3 meses de acesso (Pix, 30% de desconto)' } } }],
            metadata: { plano, uid: u.uid },
            custom_text: { submit: { message: 'Pagamento único por Pix, sem renovação automática. O QR code aparece na tela seguinte. Reembolso integral em até 7 dias.' } },
          })
        : pacote
        ? await stripe!.checkout.sessions.create({
            ...comum, mode: 'payment', allowed_payment_method_types: ['card', 'boleto'],
            payment_method_options: { boleto: { expires_after_days: 3 } },
            line_items: [{ quantity: 1, price_data: { currency: 'brl', unit_amount: anual ? PRECO_ANUAL : PRECO_TRIMESTRAL, product_data: { name: anual ? 'Linvuu: 12 meses de acesso' : 'Linvuu: 3 meses de acesso' } } }],
            metadata: { plano: anual ? 'anual' : 'trimestral', uid: u.uid },
            custom_text: { submit: { message: 'Pagamento único, sem renovação automática, com reembolso integral em até 7 dias.' } },
          })
        : await stripe!.checkout.sessions.create({
            ...comum, mode: 'subscription',
            custom_text: { submit: { message: 'Reembolso integral em até 7 dias. Cancele quando quiser, sem multa.' } },
            line_items: [{ price: await preco(), quantity: 1 }],
          });
      res.json({ url: s.url });
    } catch (e) { console.error('billing/checkout', e); res.status(500).json({ error: 'Não foi possível abrir o pagamento.' }); }
  });

  app.post('/api/billing/portal', async (req: Request, res: Response) => {
    const u = await guarda(req, res); if (!u) return;
    if (!stripe) { nao(res); return; }
    try {
      const idioma = ['en', 'es'].includes(req.body?.idioma) ? (req.body.idioma as 'en' | 'es') : null;
      const s = await stripe!.billingPortal.sessions.create({ customer: await cliente(u), locale: idioma ?? 'pt-BR', return_url: `${urlBase()}${idioma ? `/${idioma}` : ''}/assinatura` });
      res.json({ url: s.url });
    } catch (e) { console.error('billing/portal', e); res.status(500).json({ error: 'Não foi possível abrir o portal.' }); }
  });
}

/** Livro de gramática: só entrega o HTML para quem tem acesso ativo (assinatura ou pacote pago). Nunca fica em public/. */
export function registrarLivroProtegido(app: Express) {
  app.get('/api/livros/gramatica-ru', async (req: Request, res: Response) => {
    if (!cobrancaConfigurada()) { res.status(503).json({ error: 'Indisponível no momento.' }); return; }
    const u = await usuario(req);
    if (!u) { res.status(401).json({ error: 'Entre na sua conta.' }); return; }
    let a: Acesso;
    try { a = await acesso(u); } catch (e) { console.error('livro', e); res.status(503).json({ error: 'Indisponível no momento.' }); return; }
    if (!a.ativa) { res.status(402).json({ error: 'Assinatura necessária.' }); return; }
    res.setHeader('Cache-Control', 'private, no-store');
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    try { res.type('html').send(fs.readFileSync(path.resolve(import.meta.dirname, 'conteudo', 'gramatica-ru.html'), 'utf8')); } catch (e) { console.error('livro/leitura', e); res.status(500).json({ error: 'Indisponível no momento.' }); }
  });
}


