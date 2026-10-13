// Gera public/sitemap.xml e public/robots.txt nos três idiomas do site (/, /en, /es), com as versões alternativas (hreflang).
// Fora do sitemap: o curso escrito para o próprio público de cada idioma (inglês em /en, espanhol em /es, português para
// estrangeiros em /) e, em /en e /es, as sessões ainda não traduzidas (o servidor as marca com noindex).
import fs from 'node:fs';
import path from 'node:path';

const raiz = path.resolve(import.meta.dirname, '..');
const SITE = 'https://linvuu.com.br';
const LOCALES = [{ c: 'pt-BR', p: '', l: 'pt', oculto: 'br' }, { c: 'en', p: '/en', l: 'en', oculto: 'en' }, { c: 'es', p: '/es', l: 'es', oculto: 'es' }];
const { cursos } = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'cursos.json'), 'utf8'));
const indice = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'indice.json'), 'utf8')).cursos;
const tr = Object.fromEntries(['en', 'es'].map((l) => { const f = path.join(raiz, 'content', `indice.${l}.json`); return [l, fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {}]; }));
const fonte = (id) => indice[id]?.fonte ?? 'pt';

/** Caminhos (sem prefixo) e em quais idiomas cada um entra. */
const grupos = [];
const todos = (c) => LOCALES.map((l) => l.c);
for (const p of ['/', '/cursos', '/portugues', '/privacidade', '/termos']) grupos.push({ p, em: todos() });
for (const c of cursos.filter((x) => x.area === 'idiomas' && x.status !== 'em-breve')) {
  const em = LOCALES.filter((l) => l.oculto !== c.id).map((l) => l.c);
  grupos.push({ p: `/curso/${c.id}`, em }, { p: `/gramatica/${c.id}`, em });
  for (const g of indice[c.id]?.grupos ?? []) for (let d = g.dias[0]; d <= g.dias[1]; d++) {
    // a sessão entra no idioma quando a explicação está nele: o original, ou a tradução daquela aula
    const emDia = LOCALES.filter((l) => l.oculto !== c.id && (fonte(c.id) === l.l || tr[l.l]?.[c.id]?.aulas?.includes(g.aula))).map((l) => l.c);
    if (emDia.length) grupos.push({ p: `/curso/${c.id}/dia/${d}`, em: emDia });
  }
}
const url = (c, p) => { const l = LOCALES.find((x) => x.c === c); return `${SITE}${l.p ? (p === '/' ? l.p : l.p + p) : p}`; };
const linhas = [];
for (const g of grupos) for (const c of g.em) {
  const alt = g.em.length > 1 ? g.em.map((x) => `\n    <xhtml:link rel="alternate" hreflang="${x}" href="${url(x, g.p)}"/>`).join('') + (g.em.includes('pt-BR') ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${url('pt-BR', g.p)}"/>` : '') : '';
  linhas.push(`  <url><loc>${url(c, g.p)}</loc>${alt}\n  </url>`);
}
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${linhas.join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(raiz, 'public', 'sitemap.xml'), xml);
fs.writeFileSync(path.join(raiz, 'public', 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /entrar\nDisallow: /cadastro\nDisallow: /assinatura\nDisallow: /livro/\nDisallow: /api/\nDisallow: /en/entrar\nDisallow: /en/cadastro\nDisallow: /en/assinatura\nDisallow: /es/entrar\nDisallow: /es/cadastro\nDisallow: /es/assinatura\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`sitemap: ${linhas.length} endereços em 3 idiomas`);
