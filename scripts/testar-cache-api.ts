// Sem credenciais e sem dependências externas: testa o middleware real.
// node --import tsx scripts/testar-cache-api.ts
import assert from 'node:assert/strict';
import express from 'express';
import { cabecalhos } from '../server/seguranca.ts';

for (const producao of [false, true]) {
  for (const path of ['/api', '/api/billing/status', '/api/audio/de/12345678.mp3', '/api/inexistente', '/healthz', '/readyz']) {
    const headers = new Map<string, string>();
    let prosseguiu = false;
    cabecalhos(producao)({ path } as any, {
      setHeader: (k: string, v: string) => headers.set(k, v),
    } as any, () => { prosseguiu = true; });
    assert.equal(headers.get('Cache-Control'), 'private, no-store', path);
    assert.equal(headers.get('X-Robots-Tag'), 'noindex', path);
    assert.equal(prosseguiu, true);
  }
  for (const path of ['/', '/curso/de', '/apiario', '/assets/app-hash.js', '/audio/v2/de/12345678.mp3']) {
    const headers = new Map<string, string>();
    cabecalhos(producao)({ path } as any, {
      setHeader: (k: string, v: string) => headers.set(k, v),
    } as any, () => {});
    assert.equal(headers.has('Cache-Control'), false, path);
    assert.equal(headers.has('X-Robots-Tag'), false, path);
  }
}
console.log('cache da API: 12 rotas protegidas; 10 controles públicos preservados');

const app = express();
app.use(cabecalhos(true));
app.get('/api/status', (_req, res) => { res.status(401).json({ error: 'login' }); });
app.get('/api/audio/de/12345678.mp3', (_req, res) => { res.status(403).end(); });
app.use('/api', (_req, res) => { res.status(404).json({ error: 'ausente' }); });
const server = app.listen(0, '127.0.0.1');
await new Promise<void>((resolve) => server.once('listening', resolve));
const address = server.address();
assert(address && typeof address !== 'string');
try {
  for (const [path, status] of [['/api/status', 401], ['/api/audio/de/12345678.mp3', 403], ['/api/ausente', 404]] as const) {
    const response = await fetch(`http://127.0.0.1:${address.port}${path}`);
    await response.arrayBuffer();
    assert.equal(response.status, status);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
    assert.equal(response.headers.get('x-robots-tag'), 'noindex');
  }
} finally {
  await new Promise<void>((resolve, reject) => server.close(e => e ? reject(e) : resolve()));
}
console.log('HTTP real: 401, 403 e 404 preservam no-store/noindex');
