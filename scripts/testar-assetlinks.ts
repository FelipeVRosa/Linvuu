// Garante que /.well-known/assetlinks.json só publica a impressão digital configurada e nunca inventa uma.
import assert from 'node:assert/strict';
import http from 'node:http';
import express from 'express';
import { assetLinks, registrarAssetLinks } from '../server/assetlinks';

const FP = Array.from({ length: 32 }, (_, i) => i.toString(16).padStart(2, '0').toUpperCase()).join(':');

assert.equal(assetLinks(''), null, 'sem configuração não há arquivo');
assert.equal(assetLinks('abc'), null, 'formato inválido é recusado');
assert.equal(assetLinks(`${FP},xx`), null, 'uma entrada inválida invalida o conjunto');
const ok = assetLinks(` ${FP.toLowerCase()} , ${FP} `);
assert(ok, 'impressão válida (minúsculas aceitas)');
assert.deepEqual(ok[0].relation, ['delegate_permission/common.handle_all_urls']);
assert.equal(ok[0].target.namespace, 'android_app');
assert.equal(ok[0].target.package_name, 'com.linvuu.app');
assert.deepEqual(ok[0].target.sha256_cert_fingerprints, [FP], 'duplicadas são removidas');

const pedir = (porta: number) => new Promise<{ status: number; corpo: string; tipo: string }>((resolve, reject) => {
  http.get({ port: porta, path: '/.well-known/assetlinks.json', host: '127.0.0.1' }, (res) => {
    let corpo = ''; res.on('data', (c) => (corpo += c));
    res.on('end', () => resolve({ status: res.statusCode ?? 0, corpo, tipo: String(res.headers['content-type']) }));
  }).on('error', reject);
});
const app = express(); registrarAssetLinks(app);
const server = app.listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));
const porta = (server.address() as { port: number }).port;
try {
  delete process.env.ANDROID_PLAY_SHA256;
  const sem = await pedir(porta);
  assert.equal(sem.status, 503, 'sem certificado: 503, nunca 200 com dado inventado');
  process.env.ANDROID_PLAY_SHA256 = FP;
  const com = await pedir(porta);
  assert.equal(com.status, 200);
  assert.match(com.tipo, /^application\/json/);
  assert.equal(JSON.parse(com.corpo)[0].target.sha256_cert_fingerprints[0], FP);
} finally { server.close(); delete process.env.ANDROID_PLAY_SHA256; }
console.log('assetlinks: conforme');
