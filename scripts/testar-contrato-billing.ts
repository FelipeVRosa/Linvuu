import assert from 'node:assert/strict';
import fs from 'node:fs';
import { PLANOS_WEB, planoSiteValido, precoMensalObrigatorio } from '../server/billing-contrato';

assert.deepEqual(PLANOS_WEB, ['mensal', 'trimestral', 'trimestral-pix', 'anual']);
for (const plano of PLANOS_WEB) assert.equal(planoSiteValido(plano), true, plano);
for (const entrada of ['', 'gratis', 'premium', 'anual-desconto', null, undefined, 139, {}, [], false, ' mensal', 'mensal ']) {
  assert.equal(planoSiteValido(entrada), false, JSON.stringify(entrada));
}
for (const id of [undefined, '', 'price_', 'prod_abc', 'price_test+erro', 'price_test\n', 'price_abc/def']) {
  assert.throws(() => precoMensalObrigatorio(id), /STRIPE_PRICE_ID/);
}
assert.equal(precoMensalObrigatorio('price_1UO8OKA7XqBfDrgm15gMOYpe'), 'price_1UO8OKA7XqBfDrgm15gMOYpe');
const source = fs.readFileSync('server/billing.ts', 'utf8');
assert.ok(source.includes('precoMensalObrigatorio(process.env.STRIPE_PRICE_ID)'));
assert.ok(source.includes('planoSiteValido(plano)'));
assert.ok(!/stripe!?\.products\.create|stripe!?\.prices\.create|stripe!?\.prices\.search/.test(source), 'uma requisição de checkout não cria catálogo Stripe');
console.log('OK: contrato web valida planos, preço explícito e ausência de criação silenciosa de preços.');
