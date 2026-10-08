// Gera capa e contracapa (PNG) de uma apostila da Coleção Linvuu a partir de design/capa/capa.html.
// Uso: node scripts/capa.mjs --idioma Francês --saudacao Bonjour --lang fr --nivel A1 --vol 1 --de 1 --ate 18 --foto fotos/fr.jpg --pos "50% 40%" --credito "Nome" [--saida pasta]
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const a = Object.fromEntries(process.argv.slice(2).reduce((r, v, i, l) => (v.startsWith('--') ? [...r, [v.slice(2), l[i + 1]]] : r), []));
const saida = path.resolve(a.saida || path.join(raiz, 'design', 'capa', 'saida'));
fs.mkdirSync(saida, { recursive: true });
const chaves = ['idioma', 'saudacao', 'lang', 'nivel', 'vol', 'de', 'ate', 'prog', 'titulo2', 'foto', 'pos', 'credito', 'vitrine'];
const q = new URLSearchParams(Object.fromEntries(chaves.filter((k) => a[k]).map((k) => [k, a[k]])));
const url = pathToFileURL(path.join(raiz, 'design', 'capa', 'capa.html')).href + '?' + q;
const sufixo = a.vitrine ? '-vitrine' : '';
const base = `apostila-${(a.lang || 'fr')}-${(a.nivel || 'a1').toLowerCase()}-vol${a.vol || 1}${sufixo}`;
const b = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined });
const pg = await b.newPage({ viewport: { width: 817, height: 1145 }, deviceScaleFactor: 2.5 });
await pg.goto(url);
await pg.waitForSelector('body[data-pronto="1"]');
await pg.waitForTimeout(400);
for (const id of ['capa', 'contracapa']) await pg.locator('#' + id).screenshot({ path: path.join(saida, `${base}-${id}.png`) });
if (!a.vitrine) await pg.pdf({ path: path.join(saida, base + '.pdf'), width: '216mm', height: '303mm', printBackground: true });
await b.close();
console.log(saida);
