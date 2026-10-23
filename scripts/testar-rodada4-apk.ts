import assert from 'node:assert/strict';
import { listarReforco } from '../src/plataforma/apk/reforcoModelo';
import { destinoEstudo } from '../src/plataforma/apk/navegacaoModelo';
import { chavesDeEstudo } from '../src/plataforma/apk/apagarLocal';
import { iniciarRevisao } from '../src/plataforma/apk/revisaoModelo';
import { agendaReforco } from '../src/plataforma/apk/reforcoModelo';
import { registrarVolta, validarEspacado, DIA_MS } from '../src/plataforma/apk/espacadoModelo';
import { valorValido } from '../src/plataforma/apk/recuperacao';
import type { Exercicio } from '../src/lib/aulas';

// Storage em memória com a mesma interface lida pelo app.
const memoria = (dados: Record<string, string>) => ({ get length() { return Object.keys(dados).length; }, key: (i: number) => Object.keys(dados)[i] ?? null, getItem: (k: string) => dados[k] ?? null });
const P = 'linvuu:pratica-apk:v1:';
const pr = (acertos: number, total: number, em: string) => JSON.stringify({ acertos, total, em });
const diaDe = (aula: number, sessao: number) => aula >= 1 && sessao >= 1 && sessao <= 4 ? (aula - 1) * 4 + sessao : null;

// 1. Reforço: só erros reais, do dono certo, do idioma certo, mais antigo primeiro.
const dados: Record<string, string> = {
  [`${P}visitante:en:1:S3:bloco:4`]: pr(5, 8, '2026-10-20T10:00:00Z'),
  [`${P}visitante:en:1:S4:bloco:1`]: pr(2, 6, '2026-10-19T10:00:00Z'),
  [`${P}visitante:en:2:S1:bloco:2`]: pr(6, 6, '2026-10-18T10:00:00Z'),      // sem erros: fora
  [`${P}visitante:es:1:S3:bloco:4`]: pr(0, 5, '2026-10-17T10:00:00Z'),      // outro idioma: fora
  [`${P}uidX:en:1:S2:bloco:3`]: pr(0, 4, '2026-10-16T10:00:00Z'),           // outra conta: fora
  [`${P}visitante:en:1:S3:bloco:4:tentativa`]: '{}',                         // rascunho: fora
  [`${P}visitante:en:9:S9:bloco:1`]: pr(0, 3, '2026-10-15T10:00:00Z'),      // sessão inexistente: fora
  [`${P}visitante:en:3:S1:bloco:0`]: '{quebrado',                            // JSON inválido: ignorado
};
const r = listarReforco('en', 'visitante', memoria(dados), diaDe);
assert.deepEqual(r.map((x) => [x.dia, x.bloco, x.pendentes]), [[4, 1, 4], [3, 4, 3]]);

// 2. Revisão salva reduz os pendentes ao que ainda está errado; revisão completa remove o item.
const itens: Exercicio[] = [0, 1, 2].map((n) => ({ id: `en-001-m0${n}`, tipo: 'multiple-choice', enunciado: 'x', opcoes: ['a', 'b'], gabarito: 'a' } as Exercicio));
const rev = { ...iniciarRevisao(itens, [0, 1, 2]), respostas: { 0: true, 1: false } };
dados[`${P}visitante:en:1:S4:bloco:1:revisao-erros`] = JSON.stringify(rev);
assert.equal(listarReforco('en', 'visitante', memoria(dados), diaDe).find((x) => x.dia === 4)?.pendentes, 2);
dados[`${P}visitante:en:1:S4:bloco:1:revisao-erros`] = JSON.stringify({ ...rev, respostas: { 0: true, 1: true, 2: true } });
assert.equal(listarReforco('en', 'visitante', memoria(dados), diaDe).some((x) => x.dia === 4), false);

// 2b. Reforço espaçado: erro corrigido volta em 1, 3 e 7 dias; errar na volta traz de volta em 1 dia; 3 voltas certas encerram.
const K = `${P}visitante:en:1:S4:bloco:1`;
const fimEm = '2026-10-20T12:00:00.000Z', t0 = Date.parse(fimEm);
dados[`${K}:revisao-erros`] = JSON.stringify({ ...rev, respostas: { 0: true, 1: true, 2: true }, fim: true, indice: 2, em: fimEm });
const ag = (agora: number) => agendaReforco('en', 'visitante', memoria(dados), diaDe, agora);
assert.equal(ag(t0 + DIA_MS - 1).itens.some((x) => x.dia === 4), false, 'antes de 1 dia não volta');
assert.equal(ag(t0 + DIA_MS - 1).proxima, new Date(t0 + DIA_MS).toISOString(), 'informa quando volta');
const volta1 = ag(t0 + DIA_MS).itens.find((x) => x.dia === 4);
assert.deepEqual([volta1?.tipo, volta1?.passo, volta1?.pendentes], ['espacado', 0, 3], 'volta no 1º dia com as 3 questões corrigidas');
let esp = registrarVolta(null, true, t0 + DIA_MS);
assert.deepEqual([esp.passo, Date.parse(esp.proxima) - (t0 + DIA_MS)], [1, 3 * DIA_MS], 'acertou: próxima em 3 dias');
dados[`${K}:espacado`] = JSON.stringify(esp);
assert.equal(ag(t0 + 2 * DIA_MS).itens.some((x) => x.dia === 4), false);
assert.equal(ag(t0 + 4 * DIA_MS).itens.find((x) => x.dia === 4)?.passo, 1);
esp = registrarVolta(esp, false, t0 + 4 * DIA_MS);
assert.deepEqual([esp.passo, Date.parse(esp.proxima) - (t0 + 4 * DIA_MS)], [1, DIA_MS], 'errou na volta: mesmo passo, volta em 1 dia');
esp = registrarVolta(esp, true, t0 + 5 * DIA_MS); assert.equal(Date.parse(esp.proxima) - (t0 + 5 * DIA_MS), 7 * DIA_MS, 'passo 2: 7 dias');
esp = registrarVolta(esp, true, t0 + 12 * DIA_MS); assert.equal(esp.passo, 3);
dados[`${K}:espacado`] = JSON.stringify(esp);
assert.equal(ag(t0 + 400 * DIA_MS).itens.some((x) => x.dia === 4), false, 'três voltas certas: encerrado');
assert.ok(validarEspacado(esp) && !validarEspacado({ ...esp, passo: 9 }) && !validarEspacado({ ...esp, proxima: 'x' }));
assert.ok(valorValido(`${K}:espacado`, JSON.stringify(esp)), 'journal aceita o registro espaçado');
assert.equal(valorValido(`${K}:espacado`, '{"tipo":"espacado"}'), false, 'journal recusa registro inválido');
delete dados[`${K}:espacado`]; delete dados[`${K}:revisao-erros`];

// 3. Aba de estudo nunca aponta para sessão bloqueada.
assert.equal(destinoEstudo(undefined, false), '/cursos');
assert.equal(destinoEstudo({ idioma: 'en', dia: 3 }, false), '/curso/en/dia/3');
assert.equal(destinoEstudo({ idioma: 'en', dia: 9 }, false), '/curso/en');
assert.equal(destinoEstudo({ idioma: 'en', dia: 9 }, true), '/curso/en/dia/9');

// 4. Apagar local: só estudo de quem está usando; preferências e outras contas ficam.
const chaves = ['linvuu:tema-app', 'linvuu:leitura-app', 'linvuu:dias-concluidos:v1', 'linvuu:dias-concluidos:v1:uid:A', 'linvuu:progresso:v1', 'linvuu:progresso:v1:uid:B',
  `${P}visitante:en:1:S3:bloco:4`, `${P}A:en:1:S3:bloco:4`, `${P}B:en:1:S3:bloco:4`, 'linvuu:outra-coisa', 'firebase:authUser:x'];
assert.deepEqual(chavesDeEstudo(null, chaves), ['linvuu:dias-concluidos:v1', 'linvuu:progresso:v1', `${P}visitante:en:1:S3:bloco:4`]);
assert.deepEqual(chavesDeEstudo('A', chaves), ['linvuu:dias-concluidos:v1:uid:A', `${P}A:en:1:S3:bloco:4`]);

console.log('Rodada 4 APK: reforço entre sessões e espaçado (1/3/7 dias), destino da aba de estudo e limpeza local aprovados.');
