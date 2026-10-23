import assert from 'node:assert/strict';
import fs from 'node:fs';
import { aplicarMeta, carregarDadosMeta, metaDaRota } from '../src/lib/metaRota.ts';
import { destinoSessao } from '../src/lib/destinoSessao.ts';
import { LOCALES, caminhoEm } from '../src/i18n/locales.ts';
import { SESSOES_GRATIS } from '../src/config/planos.ts';

const d = carregarDadosMeta(process.cwd());
assert.ok(d, 'metadados carregados');
const base = fs.readFileSync('index.html', 'utf8');
let sessoes = 0, pagas = 0, gratuitas = 0;
const inventario: { url: string; status: number; noindex: boolean; tipo: string }[] = [];
for (const loc of LOCALES) {
  for (const c of d.cursos) {
    const ind = d.indice[c.id];
    assert.ok(ind, `índice de ${c.id}`);
    const titulos = new Set<string>();
    for (let n = 1; n <= ind.total; n++) {
      const p = caminhoEm(loc.codigo, `/curso/${c.id}/dia/${n}`);
      const m = metaDaRota(p, d);
      const g = ind.grupos?.find(x => n >= x.dias[0] && n <= x.dias[1]);
      assert.ok(g, `sessão ${p} pertence a uma aula`);
      const traduzida = (ind.fonte ?? 'pt') === loc.explicacao || !!ind.tr?.[loc.explicacao]?.aulas?.includes(g.aula);
      const excluir = n > SESSOES_GRATIS || c.id === loc.cursoOculto || !traduzida;
      assert.equal(m.status, 200, p);
      assert.equal(!!m.semIndice, excluir, p);
      assert.equal(m.caminho, p);
      assert.ok(!titulos.has(m.titulo!), `título único para cada sessão: ${p}`);
      titulos.add(m.titulo!);
      const h = aplicarMeta(base, m, 'https://linvuu.com.br', d);
      assert.ok(h.includes(`rel="canonical" href="https://linvuu.com.br${p}"`), p);
      if (excluir) {
        assert.ok(h.includes('name="robots" content="noindex"'), p);
        assert.ok(!h.includes('<main data-prerender>'), `conteúdo restrito não pré-renderizado: ${p}`);
        assert.ok(!h.includes('hreflang='), `noindex não anuncia alternativas: ${p}`);
      } else {
        assert.ok(!h.includes('name="robots"'), p);
        assert.ok(h.includes('<main data-prerender>'), p);
      }
      const anonimo = destinoSessao(c.id, n, false);
      assert.equal(anonimo, n > SESSOES_GRATIS ? '/assinatura' : `/curso/${c.id}/dia/${n}`);
      assert.equal(destinoSessao(c.id, n, true), `/curso/${c.id}/dia/${n}`, 'conta conserva navegação; autorização continua no backend');
      assert.equal(destinoSessao(c.id, n, false, true), `/curso/${c.id}/dia/${n}`, 'app conserva navegação');
      inventario.push({ url: p, status: m.status, noindex: !!m.semIndice, tipo: n > SESSOES_GRATIS ? 'paga' : 'amostra' });
      sessoes++;
      if (n > SESSOES_GRATIS) pagas++; else gratuitas++;
    }
    for (const n of [0, ind.total + 1, -1, 1.5]) {
      const p = caminhoEm(loc.codigo, `/curso/${c.id}/dia/${n}`);
      assert.equal(metaDaRota(p, d).status, 404, p);
    }
  }
  for (const p of ['/entrar', '/cadastro', '/livro/gramatica-ru', '/pagina-inexistente-auditoria']) {
    const m = metaDaRota(caminhoEm(loc.codigo, p), d);
    assert.ok(m.semIndice, p);
  }
}

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'sitemap sem duplicatas');
for (const u of urls) {
  const p = new URL(u).pathname;
  const m = metaDaRota(p, d);
  assert.equal(m.status, 200, u);
  assert.ok(!m.semIndice, u);
  assert.equal(u, 'https://linvuu.com.br' + m.caminho, u);
}
for (const p of ['/curso/en', '/curso/en/dia/1', '/gramatica/en', '/desconhecida']) {
  const m = metaDaRota(p, null);
  assert.equal(m.status, 503, 'falha dos metadados não vira soft 404/200');
  assert.ok(m.semIndice);
}
const incompleto = { ...d, indice: { ...d.indice, en: { ...d.indice.en, grupos: [] } } };
assert.equal(metaDaRota('/curso/en/dia/1', incompleto).status, 503);
const out = process.argv.indexOf('--json');
if (out >= 0) fs.writeFileSync(process.argv[out + 1], JSON.stringify({ sessoes, pagas, gratuitas, sitemap: urls.length, inventario }, null, 2));
console.log(JSON.stringify({ sessoes, pagas, gratuitas, sitemap: urls.length, resultado: 'conforme' }));
