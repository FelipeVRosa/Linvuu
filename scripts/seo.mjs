// Gera public/sitemap.xml e public/robots.txt a partir dos cursos e das aulas publicadas ou em produção com conteúdo.
import fs from 'node:fs';
import path from 'node:path';

const raiz = path.resolve(import.meta.dirname, '..');
const SITE = 'https://linvuu.com.br';
const { cursos } = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'cursos.json'), 'utf8'));
const urls = ['/', '/cursos', '/gramatica/ru', '/privacidade', '/termos', ...cursos.map((c) => `/curso/${c.id}`)];
for (const c of cursos.filter((x) => x.area === 'idiomas')) {
  const dir = path.join(raiz, 'content', 'idiomas', c.id);
  for (const f of fs.readdirSync(dir).filter((x) => /^dia-\d+\.json$/.test(x)).sort()) {
    const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    if (d.sessao) urls.push(`/curso/${c.id}/dia/${d.dia}`); // só dias com conteúdo de verdade
  }
}
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(raiz, 'public', 'sitemap.xml'), xml);
fs.writeFileSync(path.join(raiz, 'public', 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /entrar\nDisallow: /cadastro\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`sitemap: ${urls.length} endereços`);
