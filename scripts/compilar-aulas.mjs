// Compila content/idiomas/<id>/fontes/aula-NNN.mjs (formato compacto) em content/idiomas/<id>/aulas/aula-NNN.json.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const id = process.argv[2] ?? 'ru';
const raiz = path.resolve(import.meta.dirname, '..');
const fontes = path.join(raiz, 'content', 'idiomas', id, 'fontes');
const saida = path.join(raiz, 'content', 'idiomas', id, 'aulas');
if (!fs.existsSync(fontes)) process.exit(0);
fs.mkdirSync(saida, { recursive: true });
let n = 0, puladas = 0;
for (const f of fs.readdirSync(fontes).filter((x) => /^aula-\d+\.mjs$/.test(x)).sort()) {
  const destino = path.join(saida, f.replace('.mjs', '.json'));
  // aulas geradas a partir do livro (scripts/livros/sincronizar_aulas.py) passam a ser editadas direto no JSON
  if (fs.existsSync(destino) && JSON.parse(fs.readFileSync(destino, 'utf8')).geradaDoLivro) { puladas++; continue; }
  const { default: a } = await import(pathToFileURL(path.join(fontes, f)).href);
  fs.writeFileSync(path.join(saida, f.replace('.mjs', '.json')), JSON.stringify(a, null, 2) + '\n');
  n++;
}
console.log(`${n} aulas compiladas (${id})${puladas ? `, ${puladas} geradas do livro mantidas` : ''}`);
