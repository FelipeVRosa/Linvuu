// Cria os "Repita" (falar em voz alta) de um idioma a partir das falas e palavras que a aula já tem, com o áudio que já existe.
// Não sobrescreve o que foi escrito à mão: só preenche `repita` onde ainda não há. Uso: node scripts/gerar-repita.mjs <idioma> [quantos=4]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const idioma = process.argv[2]; const quantos = Number(process.argv[3] ?? 4);
if (!idioma || idioma === 'br') { console.error('uso: node scripts/gerar-repita.mjs <idioma> (br não se aplica)'); process.exit(1); }
const dirA = path.join(raiz, 'content/idiomas', idioma, 'aulas'); const dirC = path.join(raiz, 'content/idiomas', idioma, 'complementos');
fs.mkdirSync(dirC, { recursive: true });
const limpa = (t) => t.replace(/^[—–-]\s*/, '').trim();
let feitas = 0;
for (const f of fs.readdirSync(dirA).filter((x) => /^aula-\d+\.json$/.test(x)).sort()) {
  const arqC = path.join(dirC, f);
  const c = fs.existsSync(arqC) ? JSON.parse(fs.readFileSync(arqC, 'utf8')) : {};
  if (c.repita?.length) continue;
  const a = JSON.parse(fs.readFileSync(path.join(dirA, f), 'utf8'));
  const blocos = a.sessoes.flatMap((s) => s.blocos).filter((b) => !b.complemento);
  const frases = [];
  const vistos = new Set();
  const poe = (ru, pt, audio) => {
    const frase = limpa(ru ?? ''); const trad = limpa(pt ?? ''); const n = frase.split(/\s+/).length;
    if (!frase || !trad || n < 3 || n > 9 || vistos.has(frase.toLowerCase())) return;
    vistos.add(frase.toLowerCase()); frases.push([frase, trad, audio ?? frase]);
  };
  for (const b of blocos.filter((x) => x.tipo === 'dialogo')) for (const l of b.linhas) poe(l.ru, l.pt, l.audio);
  if (frases.length < quantos) for (const b of blocos.filter((x) => x.tipo === 'palavras')) for (const p of b.itens) poe(p.ru, p.pt, p.audio);
  if (!frases.length) continue;
  const passo = frases.length / Math.min(quantos, frases.length);
  c.repita = Array.from({ length: Math.min(quantos, frases.length) }, (_, i) => frases[Math.floor(i * passo)]);
  fs.writeFileSync(arqC, JSON.stringify(c, null, 2) + '\n'); feitas++;
}
console.log(`${idioma}: repita criado em ${feitas} aula(s)`);
