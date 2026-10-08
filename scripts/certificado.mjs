// Gera o certificado em PDF e PNG a partir de design/certificado/certificado.html.
// Uso: node scripts/certificado.mjs --nome "Maria Silva" --idioma francês --nivel a1 --aulas 18 --horas 36 [--saida pasta]
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const a = Object.fromEntries(process.argv.slice(2).reduce((r, v, i, l) => (v.startsWith('--') ? [...r, [v.slice(2), l[i + 1]]] : r), []));
const saida = path.resolve(a.saida || path.join(raiz, 'design', 'certificado', 'saida'));
fs.mkdirSync(saida, { recursive: true });
const q = new URLSearchParams(Object.fromEntries(['nome', 'idioma', 'nivel', 'aulas', 'horas', 'data'].filter((k) => a[k]).map((k) => [k, a[k]])));
const url = pathToFileURL(path.join(raiz, 'design', 'certificado', 'certificado.html')).href + '?' + q;
const base = `certificado-${(a.idioma || 'frances').normalize('NFD').replace(/[^\w]/g, '')}-${(a.nivel || 'a1').toLowerCase()}`;
const b = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined });
const pg = await b.newPage({ viewport: { width: 1123, height: 794 }, deviceScaleFactor: 3 });
await pg.goto(url);
await pg.waitForSelector('body[data-pronto="1"]');
await pg.pdf({ path: path.join(saida, base + '.pdf'), width: '297mm', height: '210mm', printBackground: true });
await pg.screenshot({ path: path.join(saida, base + '.png') });
await b.close();
console.log(path.join(saida, base + '.pdf'));
