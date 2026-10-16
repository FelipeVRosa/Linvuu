// Testa a validação dos eventos e as contas do relatório de métricas (sem Firestore). Uso: npx tsx scripts/testar-medicao.ts
import assert from 'node:assert/strict';
import { agregar, validar } from '../server/medicao.ts';

const id = 'a'.repeat(32);
assert.ok(validar({ id, eventos: [{ t: 'ex', idioma: 'en', ex: 'en-018-e01', tp: 'multiple-choice', ok: 1 }, { t: 'fim', idioma: 'en', aula: 18, ac: 30, tot: 40 }] }));
assert.equal(validar({ id: 'curto', eventos: [] }), null);
assert.equal(validar({ id, eventos: [{ t: 'ex', idioma: 'en', ex: '../../x', tp: 'a', ok: 1 }] }), null, 'id de exercício fora do padrão');
assert.equal(validar({ id, eventos: [{ t: 'fim', idioma: 'en', aula: 1, ac: 9, tot: 3 }] }), null, 'acertos maiores que o total');
assert.equal(validar({ id, eventos: [{ t: 'ex', idioma: 'en', ex: 'en-001-e01', tp: 'fill-gap', ok: 1, email: 'a@b.c' }] })?.eventos[0].hasOwnProperty('email'), false, 'campos extras são descartados');
assert.equal(validar({ id, eventos: Array(61).fill({ t: 'fim', idioma: 'en', aula: 1, ac: 1, tot: 1 }) }), null, 'lote grande demais');

const L = (u: string, d: string, t: string, extra = {}) => ({ u, d, t, idioma: 'en', ...extra });
const r = agregar([
  ...Array.from({ length: 5 }, (_, i) => L('a', '2026-11-05', 'ex', { ex: `en-001-e0${i}`, tp: 'multiple-choice', ok: i < 2 ? 1 : 0 })),
  L('a', '2026-11-05', 'fim', { aula: 1, ac: 2, tot: 5 }),
  ...Array.from({ length: 5 }, (_, i) => L('a', '2026-11-06', 'ex', { ex: `en-002-e0${i}`, tp: 'multiple-choice', ok: i < 4 ? 1 : 0 })),
  L('b', '2026-11-05', 'ex', { ex: 'en-001-e00', tp: 'fill-gap', ok: 0 }),
], '2026-11-20');
assert.equal(r.usuarios, 2);
assert.equal(r.comSessaoCompleta.n, 1);
assert.equal(r.retornoDia1.pct, 50);
assert.equal(r.retornoSemana.pct, 50);
assert.equal(r.acertoPrimeiroVsUltimoDia.melhoraram, 1);
assert.equal(r.ativosPorDia['2026-11-05'], 2);
console.log('ok: medição');
