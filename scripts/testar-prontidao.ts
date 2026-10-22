import assert from 'node:assert/strict';
import { criarVerificadorProntidao } from '../server/prontidao';

let chamadas = 0;
let agora = 1000;
const verificar = criarVerificadorProntidao([{ nome: 'fake', verificar: async () => { chamadas++; } }], { agora: () => agora, cacheMs: 100 });
const paralelas = await Promise.all(Array.from({ length: 30 }, () => verificar()));
assert(paralelas.every((r) => r.ok));
assert.equal(chamadas, 1, 'consultas simultaneas compartilham o trabalho');
paralelas[0].ok = false;
assert((await verificar()).ok, 'a resposta nao permite alterar o resultado em cache');
assert.equal(chamadas, 1);
agora += 101;
assert((await verificar()).ok);
assert.equal(chamadas, 2, 'cache expira');

const nomes: string[] = [];
const falha = criarVerificadorProntidao([{ nome: 'dependencia', verificar: async () => { throw new Error('segredo-nao-publicar'); } }], { falhou: (n) => nomes.push(n) });
const resultado = await falha();
assert.equal(resultado.ok, false);
assert.deepEqual(nomes, ['dependencia']);
assert.deepEqual(Object.keys(resultado).sort(), ['checkedAt', 'ok']);
assert(!JSON.stringify(resultado).includes('segredo'));
assert.equal((await criarVerificadorProntidao([])()).ok, false, 'lista vazia nao aprova prontidao');

let iniciou = 0;
let abortou = false;
let liberar!: () => void;
let tempo = 1000;
const lento = criarVerificadorProntidao([{ nome: 'travada', verificar: async (signal) => {
  iniciou++;
  signal.addEventListener('abort', () => { abortou = true; }, { once: true });
  await new Promise<void>((resolve) => { liberar = resolve; });
} }], { timeoutMs: 20, cacheMs: 10, agora: () => tempo });
assert.equal((await lento()).ok, false, 'timeout retorna indisponibilidade');
assert(abortou);
tempo += 11;
assert.equal((await lento()).ok, false);
assert.equal(iniciou, 1, 'dependencia que ignora cancelamento nao acumula trabalho');
liberar();
await new Promise((resolve) => setTimeout(resolve, 0));
console.log('prontidao: cache, concorrencia, timeout e redacao verificados sem servicos reais.');
