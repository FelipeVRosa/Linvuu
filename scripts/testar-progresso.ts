import assert from 'node:assert/strict';
import { definirUsuarioProgresso, diasConcluidos, marcarDia, salvarSessao, lerSessao } from '../src/lib/progresso';

const dados = new Map<string, string>();
Object.assign(globalThis, {
  localStorage: { getItem: (k: string) => dados.get(k) ?? null, setItem: (k: string, v: string) => dados.set(k, v) },
  window: new EventTarget(),
});
marcarDia('en', 1, true);
definirUsuarioProgresso('aluno-a');
assert.deepEqual(diasConcluidos('en'), [], 'visitante não é importado para a conta');
marcarDia('en', 2, true);
salvarSessao('en:1:S1', { bloco: 3, completa: false });
definirUsuarioProgresso('aluno-b');
assert.deepEqual(diasConcluidos('en'), [], 'segunda conta não herda dias');
assert.equal(lerSessao('en:1:S1'), undefined, 'segunda conta não herda posição');
marcarDia('en', 3, true);
definirUsuarioProgresso('aluno-a');
assert.deepEqual(diasConcluidos('en'), [2]);
assert.equal(lerSessao('en:1:S1')?.bloco, 3);
definirUsuarioProgresso(null);
assert.deepEqual(diasConcluidos('en'), [1], 'logout preserva apenas o progresso visitante');
console.log('ok: progresso isolado entre visitante e duas contas');
