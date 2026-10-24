// Testes do pedido de exclusão de conta (validação do corpo e prazo de retenção). Sem rede e sem Firebase.
import assert from 'node:assert/strict';
import { apagarApos, validarPedido, MESES_RETENCAO } from '../server/exclusao';

assert.equal(MESES_RETENCAO, 6);
assert.deepEqual(validarPedido(undefined), { origem: 'site' });
assert.deepEqual(validarPedido({}), { origem: 'site' });
assert.deepEqual(validarPedido({ origem: 'app' }), { origem: 'app' });
assert.deepEqual(validarPedido({ origem: 'site' }), { origem: 'site' });
for (const ruim of [{ origem: 'outro' }, { origem: 1 }, { origem: 'app', uid: 'x' }, { uid: 'outra-pessoa' }, [], 'texto', 5]) {
  assert.equal(validarPedido(ruim as unknown), null, JSON.stringify(ruim));
}
// 6 meses a partir de 31/08 cai em fevereiro (o JS ajusta para março); o importante é nunca ficar antes de 5 meses nem depois de 7.
const base = new Date('2026-10-24T12:00:00Z');
const fim = apagarApos(base);
const dias = (fim.getTime() - base.getTime()) / 86_400_000;
assert.ok(dias >= 180 && dias <= 185, `prazo de ${dias} dias`);
assert.equal(fim.getUTCFullYear(), 2027); assert.equal(fim.getUTCMonth(), 3);
console.log('ok: pedido de exclusão (validação e prazo de 6 meses).');
