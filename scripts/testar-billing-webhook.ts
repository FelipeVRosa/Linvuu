import assert from 'node:assert/strict';
import express from 'express';
import Stripe from 'stripe';
import { registrarWebhookCobranca, EVENTOS_COBRANCA } from '../server/billing-webhook';
import { registrarSeguranca, registrarErros } from '../server/seguranca';

// Nenhuma chamada ao Stripe nem pagamento real: assinaturas HMAC oficiais, transporte HTTP local.
const stripe = new Stripe('sk_test_apenas_teste_local');
const segredo = 'whsec_apenas_teste_local';
const cache = new Map([['cus_A', true], ['cus_B', true]]);
const invalidados: string[] = [];
let falharCharge = false;
let consultasCharge = 0;
stripe.charges.retrieve = (async (id: string) => {
  consultasCharge++;
  assert.equal(id, 'ch_A');
  if (falharCharge) throw new Error('Falha temporária simulada');
  return { id, customer: 'cus_A' };
}) as typeof stripe.charges.retrieve;
let configurado = true;
const app = express();
registrarSeguranca(app, true);
registrarWebhookCobranca(app, { stripe, segredo: () => configurado ? segredo : undefined, invalidar: (c) => { invalidados.push(c); cache.delete(c); } });
app.use(express.json({ limit: '10kb' }));
registrarErros(app);
const server = app.listen(0, '127.0.0.1');
await new Promise<void>((resolve) => server.once('listening', resolve));
const addr = server.address();
assert.ok(addr && typeof addr !== 'string');
const base = `http://127.0.0.1:${addr.port}/api/stripe/webhook`;
let sequencia = 0;
const payload = (type = 'checkout.session.completed', object: object = { customer: 'cus_A', payment_status: 'paid' }, id = `evt_${++sequencia}`) => JSON.stringify({ id, object: 'event', type, data: { object } });
async function enviar(body: string, opts: { assinatura?: string; timestamp?: number; tipo?: string } = {}) {
  const assinatura = opts.assinatura ?? stripe.webhooks.generateTestHeaderString({ payload: body, secret: segredo, ...(opts.timestamp === undefined ? {} : { timestamp: opts.timestamp }) });
  return fetch(base, { method: 'POST', headers: { 'Content-Type': opts.tipo ?? 'application/json', 'Stripe-Signature': assinatura }, body });
}
try {
  assert.equal((await enviar(payload(), { assinatura: 't=0,v1=invalida' })).status, 400);
  assert.deepEqual(invalidados, []);
  assert.equal((await enviar(payload(), { timestamp: Math.floor(Date.now() / 1000) - 400 })).status, 400);
  const original = payload();
  const header = stripe.webhooks.generateTestHeaderString({ payload: original, secret: segredo });
  assert.equal((await enviar(original.replace('cus_A', 'cus_B'), { assinatura: header })).status, 400);
  assert.deepEqual(invalidados, []);
  assert.equal((await enviar(original)).status, 200);
  assert.deepEqual(invalidados, ['cus_A']);
  assert.equal(cache.has('cus_A'), false);
  assert.equal(cache.has('cus_B'), true, 'não invalida outro cliente');
  assert.equal((await enviar(original)).status, 200);
  assert.equal(invalidados.length, 1, 'entrega duplicada é idempotente');
  for (const type of EVENTOS_COBRANCA) assert.equal((await enviar(payload(type))).status, 200, type);
  const antes = invalidados.length;
  assert.equal((await enviar(payload('product.created'))).status, 200);
  assert.equal(invalidados.length, antes, 'evento irrelevante não altera acesso');
  const disputa = payload('charge.dispute.created', { charge: 'ch_A' });
  falharCharge = true;
  assert.equal((await enviar(disputa)).status, 500);
  falharCharge = false;
  assert.equal((await enviar(disputa)).status, 200, 'Stripe pode repetir a entrega após falha');
  assert.equal(consultasCharge, 2);
  assert.equal(invalidados.at(-1), 'cus_A');
  assert.equal((await enviar(disputa)).status, 200);
  assert.equal(consultasCharge, 2, 'duplicata não repete consulta ao Stripe');
  assert.equal((await enviar(payload(), { tipo: 'text/plain' })).status, 400);
  assert.equal((await enviar('x'.repeat(102_401))).status, 413);
  configurado = false;
  assert.equal((await enviar(payload())).status, 503);
  console.log('OK: assinatura válida/inválida/expirada, payload adulterado, todos os eventos, duplicatas, isolamento por cliente, disputa, retry, tipo e tamanho, ausência de segredo.');
} finally {
  await new Promise<void>((resolve, reject) => server.close((err) => err ? reject(err) : resolve()));
}
