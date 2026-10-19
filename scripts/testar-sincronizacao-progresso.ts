import assert from 'node:assert/strict';
const dados = new Map<string, string>();
const janela = Object.assign(new EventTarget(), { location: { pathname: '/' } });
Object.assign(globalThis, { window: janela, localStorage: { getItem: (k: string) => dados.get(k) ?? null, setItem: (k: string, v: string) => dados.set(k, v) } });
const { definirUsuarioProgresso, marcarDia, diasConcluidos, pendenciasDias } = await import('../src/lib/progresso');
const { criarSincronizadorProgresso } = await import('../src/lib/progressoConta');
let uid = 'aluno-a';
let rede = true;
const remoto = new Set(['en:12']);
const posts: Array<{ idioma: string; dia: number; feito: boolean }> = [];
const transporte: typeof fetch = async (_url, init) => {
  if (!rede) throw new TypeError('sem rede');
  if (init?.method === 'POST') {
    const p = JSON.parse(String(init.body)); posts.push(p);
    if (p.feito) remoto.add(`${p.idioma}:${p.dia}`); else remoto.delete(`${p.idioma}:${p.dia}`);
    return new Response(JSON.stringify({ ok: true }));
  }
  return new Response(JSON.stringify({ licoes: [...remoto, null, 'en:0', 'en:abc', 'ru:3', 'en:1:errado'] }));
};
const sync = criarSincronizadorProgresso(async () => ({ uid, token: 'token-ficticio-de-teste' }), transporte);
definirUsuarioProgresso(uid);
assert.equal(await sync.sincronizar('en'), true);
assert.deepEqual(diasConcluidos('en'), [12], 'lê sessão com dois dígitos e ignora dados inválidos/outro curso');
assert.deepEqual(pendenciasDias(), {}, 'leitura remota não cria pendência');
rede = false;
marcarDia('en', 12, false);
assert.equal(await sync.salvar('en', 12, false), false);
assert.equal(sync.estado(), 'pendente');
assert.equal(pendenciasDias()['en:12'].feito, false, 'desmarcação sem rede fica registrada');
rede = true;
assert.equal(await sync.sincronizar('en'), true);
assert.deepEqual(diasConcluidos('en'), [], 'cópia antiga da conta não ressuscita desmarcação pendente');
assert.equal(remoto.has('en:12'), false);
assert.deepEqual(pendenciasDias(), {});
assert.equal(sync.estado(), 'salvo');
// Duas alterações rápidas: o ACK da primeira não pode apagar a segunda.
let liberar!: () => void;
let iniciou!: () => void;
const primeiraIniciou = new Promise<void>(r => { iniciou = r; });
const espera = new Promise<void>(r => { liberar = r; });
let primeira = true;
const corrida = criarSincronizadorProgresso(async () => ({ uid, token: 'teste' }), async (url, init) => {
  if (primeira && init?.method === 'POST') { primeira = false; iniciou(); await espera; }
  return transporte(url, init);
});
marcarDia('en', 3, true);
const a = corrida.salvar('en', 3, true);
await primeiraIniciou;
marcarDia('en', 3, false);
const b = corrida.salvar('en', 3, false);
liberar();
await Promise.all([a, b]);
assert.equal(remoto.has('en:3'), false);
assert.deepEqual(pendenciasDias(), {});
assert.deepEqual(posts.slice(-2).map(p => p.feito), [true, false], 'gravações em ordem');
// Troca de conta enquanto a leitura antiga ainda está na rede.
let liberarLeitura!: () => void;
let iniciouLeitura!: () => void;
const leu = new Promise<void>(r => { iniciouLeitura = r; });
const aguarda = new Promise<void>(r => { liberarLeitura = r; });
const troca = criarSincronizadorProgresso(async () => ({ uid, token: 'teste' }), async () => {
  iniciouLeitura(); await aguarda; return new Response(JSON.stringify({ licoes: ['en:99'] }));
});
const leitura = troca.sincronizar('en');
await leu;
uid = 'aluno-b'; definirUsuarioProgresso(uid);
liberarLeitura();
assert.equal(await leitura, false);
assert.deepEqual(diasConcluidos('en'), [], 'resposta de outra conta nunca é importada');
assert.deepEqual(pendenciasDias(), {});
definirUsuarioProgresso(null);
assert.equal(sync.estado(), 'local');
console.log('ok: leitura remota, perda de rede, reenvio, desmarcação, ordem das gravações e troca de conta');
