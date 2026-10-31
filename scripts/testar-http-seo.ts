import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { carregarDadosMeta, metaDaRota } from '../src/lib/metaRota.ts';
import { LOCALES, caminhoEm } from '../src/i18n/locales.ts';

// Servidor local sem credenciais de produção. Somente GET de páginas, nunca pagamento ou gravação.
const port = '3937';
const origin = `http://127.0.0.1:${port}`;
const child = spawn(process.execPath, ['--import', 'tsx', 'server.ts'], {
  env: { ...process.env, NODE_ENV: 'production', PORT: port }, stdio: ['ignore', 'ignore', 'pipe'],
});
let log = '';
child.stderr.on('data', b => { log = (log + String(b)).slice(-2000); });
const d = carregarDadosMeta(process.cwd());
assert.ok(d);
let verificados = 0, redirecionados = 0;
try {
  let pronto = false;
  for (let i = 0; i < 100; i++) {
    try { if ((await fetch(origin + '/healthz')).ok) { pronto = true; break; } } catch { /* servidor iniciando */ }
    await new Promise(r => setTimeout(r, 100));
  }
  assert.ok(pronto, log);
  const paths: string[] = [];
  for (const loc of LOCALES) {
    for (const c of d.cursos) {
      paths.push(caminhoEm(loc.codigo, `/curso/${c.id}`));
      for (let n = 1; n <= d.indice[c.id].total; n++) paths.push(caminhoEm(loc.codigo, `/curso/${c.id}/dia/${n}`));
      paths.push(caminhoEm(loc.codigo, `/curso/${c.id}/dia/0`), caminhoEm(loc.codigo, `/curso/${c.id}/dia/${d.indice[c.id].total + 1}`));
    }
    for (const p of ['/', '/cursos', '/assinatura', '/entrar', '/cadastro', '/livros', '/sobre', '/contato', '/ex-alunos-udemy', '/privacidade', '/termos', '/livro/gramatica-ru', '/nao-existe-auditoria']) paths.push(caminhoEm(loc.codigo, p));
    for (const [id, book] of Object.entries(d.livros)) {
      paths.push(caminhoEm(loc.codigo, `/livros/${id}`));
      for (const n of Object.keys(book.caps)) paths.push(caminhoEm(loc.codigo, `/livros/${id}/capitulo/${n}`));
    }
  }
  let cursor = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (cursor < paths.length) {
      const p = paths[cursor++];
      const r = await fetch(origin + p, { redirect: 'manual' });
      if (/^\/curso\/br(?:\/|$)/.test(p)) {
        assert.equal(r.status, 301, p);
        assert.equal(r.headers.get('location'), '/en' + p, p);
        await r.arrayBuffer();
        redirecionados++;
      } else {
        const m = metaDaRota(p, d);
        assert.equal(r.status, m.status, p);
        assert.ok(r.headers.get('content-type')?.includes('text/html'), p);
        const body = await r.text();
        assert.equal(body.includes('name="robots" content="noindex"'), !!m.semIndice, p);
        assert.ok(body.includes(`rel="canonical" href="https://linvuu.com.br${m.caminho}"`), p);
      }
      verificados++;
    }
  }));
  for (const [p, target] of [['/brazilian-portuguese', '/en/portugues'], ['/preco', '/assinatura'], ['/metodo', '/#metodo']]) {
    const r = await fetch(origin + p, { redirect: 'manual' });
    assert.equal(r.status, 301, p);
    assert.equal(r.headers.get('location'), target, p);
    await r.arrayBuffer();
  }
  console.log(JSON.stringify({ paginasHttp: verificados, redirecionados, aliases: 3, resultado: 'conforme' }));
} finally {
  child.kill();
}
