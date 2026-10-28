// Executa o parser C++ oficial do Google sobre as regras publicadas pelo build.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const bin = process.env.GOOGLE_ROBOTS_BIN;
assert(bin, 'Defina GOOGLE_ROBOTS_BIN com o caminho do executável oficial compilado.');
const robots = resolve('public/robots.txt');
const xml = readFileSync('public/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert(urls.length > 0, 'O sitemap precisa conter URLs.');
const casos = [
  ...urls.map(url => [url, true]),
  ['https://linvuu.com.br/livro/gramatica-ru', true], // Google precisa ler o noindex.
  ['https://linvuu.com.br/api/gramatica/ru', true],
  ['https://linvuu.com.br/api/gramatica/ru?l=en', true],
  ['https://linvuu.com.br/api/billing/checkout', false],
  ['https://linvuu.com.br/api/audio/ru/teste.mp3', false],
  ['https://linvuu.com.br/admin/painel', false],
];
for (const [url, permitido] of casos) {
  const r = spawnSync(bin, [robots, 'Googlebot', url], { encoding: 'utf8', timeout: 10000 });
  assert.ifError(r.error);
  assert.equal(r.status, permitido ? 0 : 1, `${url}: parser retornou ${r.status}; ${r.stderr || r.stdout}`);
}
console.log(`Parser oficial: ${urls.length} URLs do sitemap e regras específicas verificadas para Googlebot.`);
