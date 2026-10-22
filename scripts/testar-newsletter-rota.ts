// Teste de ponta a ponta de POST /api/newsletter contra o emulador do Firestore (sem credencial real, sem dados reais).
// Rodar: npm run testar:newsletter:rota
process.env.VITE_FIREBASE_PROJECT_ID = 'demo-linvuu-newsletter';
process.env.FIRESTORE_EMULATOR_HOST ??= '127.0.0.1:8089';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import express from 'express';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({ projectId: 'demo-linvuu-newsletter' }); // o emulador dispensa credencial; firebaseAdmin() reaproveita este app
const { registrarNewsletter, idDoEmail, VERSAO_CONSENTIMENTO } = await import('../server/newsletter');
const { registrarSeguranca, registrarErros } = await import('../server/seguranca');

// Dois servidores: um SEM limite de requisições (casos funcionais) e outro com o limite REAL de produção (seguranca.ts).
async function subir(comLimite: boolean) {
  const a = express();
  if (comLimite) registrarSeguranca(a, false);
  a.use(express.json({ limit: '10kb' }));
  registrarNewsletter(a);
  registrarErros(a);
  const s = a.listen(0, '127.0.0.1'); await once(s, 'listening');
  const url = `http://127.0.0.1:${(s.address() as { port: number }).port}`;
  return { s, url, post: (corpo: unknown, bruto = false) => fetch(`${url}/api/newsletter`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: bruto ? String(corpo) : JSON.stringify(corpo) }) };
}
const livre = await subir(false);
const limitado = await subir(true);
const base = livre.url; const post = livre.post;
const db = getFirestore();
const lista = async () => (await db.collection('newsletter').get()).docs;
const valido = { email: 'Inscrita@Exemplo.invalid', origem: 'rodape', idioma: 'pt', aceite: true };

// 1. inscrição válida grava com consentimento
assert.equal((await post(valido)).status, 204);
const d = (await db.collection('newsletter').doc(idDoEmail('inscrita@exemplo.invalid')).get()).data()!;
assert.equal(d.email, 'inscrita@exemplo.invalid'); assert.equal(d.origem, 'rodape'); assert.equal(d.idioma, 'pt');
assert.equal(d.consentimento, true); assert.equal(d.consentimentoVersao, VERSAO_CONSENTIMENTO);
assert.ok(d.criadoEm?.toDate() instanceof Date && d.consentimentoEm?.toDate() instanceof Date, 'timestamps do servidor');
assert.deepEqual(Object.keys(d).sort(), ['consentimento', 'consentimentoEm', 'consentimentoVersao', 'criadoEm', 'email', 'idioma', 'origem']);

// 2. repetida: mesma resposta, sem duplicar e sem sobrescrever o consentimento original
const antes = d.consentimentoEm.toMillis();
assert.equal((await post({ ...valido, email: 'INSCRITA@exemplo.invalid' })).status, 204);
assert.equal((await lista()).length, 1, 'não duplica');
assert.equal((await db.collection('newsletter').doc(idDoEmail('inscrita@exemplo.invalid')).get()).data()!.consentimentoEm.toMillis(), antes, 'consentimento original preservado');

// 3. inválidos: 400 e nada gravado
for (const c of [{ ...valido, aceite: false }, { ...valido, email: 'sem-arroba' }, { ...valido, idioma: 'xx' }, { ...valido, origem: 'A B' }, { ...valido, extra: 1 }, {}, []]) {
  assert.equal((await post(c)).status, 400, JSON.stringify(c));
}
assert.equal((await post('{json quebrado', true)).status, 400, 'JSON inválido');
assert.equal((await post({ ...valido, email: 'x'.repeat(11_000) + '@e.com' })).status, 413, 'corpo grande demais');
assert.equal((await lista()).length, 1, 'inválidos não gravam');

// 4. campo-isca: parece sucesso, mas não grava
assert.equal((await post({ ...valido, email: 'robo@exemplo.invalid', ref_extra_nl: 'http://spam.invalid' })).status, 204);
assert.equal((await lista()).length, 1, 'robô não grava');

// 5. rota é só POST; leitura pública da lista não existe
assert.notEqual((await fetch(`${base}/api/newsletter`)).status, 200);

// 6. limite por IP (configuração real de produção): 5 por minuto passam, o 6º recebe 429 e nada além disso é gravado
const antesLimite = (await lista()).length;
const codigos: number[] = [];
for (let i = 0; i < 7; i++) codigos.push((await limitado.post({ ...valido, email: `lim${i}@exemplo.invalid` })).status);
assert.deepEqual(codigos, [204, 204, 204, 204, 204, 429, 429], 'limite de 5 por minuto por IP');
assert.equal((await lista()).length, antesLimite + 5, 'pedidos barrados não gravam');

livre.s.close(); limitado.s.close();
console.log('ok: rota /api/newsletter (válida, repetida, inválidos, isca, tamanho, método, limite por IP, consentimento gravado)');
process.exit(0);
