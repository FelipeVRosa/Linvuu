// Compila só uma aula: node scripts/compilar-uma.mjs <idioma> <número>
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const [id, n] = process.argv.slice(2);
const p = String(n).padStart(3, '0');
const raiz = path.resolve(import.meta.dirname, '..');
const { default: a } = await import(pathToFileURL(path.join(raiz, 'content', 'idiomas', id, 'fontes', `aula-${p}.mjs`)).href);
fs.mkdirSync(path.join(raiz, 'content', 'idiomas', id, 'aulas'), { recursive: true });
fs.writeFileSync(path.join(raiz, 'content', 'idiomas', id, 'aulas', `aula-${p}.json`), JSON.stringify(a, null, 2) + '\n');
console.log(`aula ${n} (${id}) compilada: ${a.sessoes.length} sessões, ${a.duracaoTotalMin} min`);
