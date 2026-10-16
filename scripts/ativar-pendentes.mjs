// Move os diálogos e leituras de `pendentes/` (já escritos, ainda sem áudio) para `complementos/`, sem tocar no `repita` que já existe.
// Quando a voz estiver definida: node scripts/ativar-pendentes.mjs <idioma> && node scripts/aplicar-complementos.mjs <idioma> && node scripts/aulas.mjs <idioma>
// e então gerar só os áudios que faltam (workflow audio.yml com so_gratis=true ou limite; veja docs/PENDENTE-AUDIO.md).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const idioma = process.argv[2];
if (!idioma) { console.error('uso: node scripts/ativar-pendentes.mjs <idioma>'); process.exit(1); }
const dirP = path.join(raiz, 'content/idiomas', idioma, 'pendentes'); const dirC = path.join(raiz, 'content/idiomas', idioma, 'complementos');
if (!fs.existsSync(dirP)) { console.log(`sem pendentes para ${idioma}`); process.exit(0); }
fs.mkdirSync(dirC, { recursive: true });
let n = 0;
for (const f of fs.readdirSync(dirP).filter((x) => /^aula-\d+\.json$/.test(x)).sort()) {
  const p = JSON.parse(fs.readFileSync(path.join(dirP, f), 'utf8'));
  const arq = path.join(dirC, f);
  const c = fs.existsSync(arq) ? JSON.parse(fs.readFileSync(arq, 'utf8')) : {};
  fs.writeFileSync(arq, JSON.stringify({ ...c, ...p }, null, 2) + '\n');
  fs.unlinkSync(path.join(dirP, f)); n++;
}
console.log(`${idioma}: ${n} aula(s) ativada(s)`);
