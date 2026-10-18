// Confere os MP3 entregues (pelo ChatGPT ou por qualquer outra voz) contra os lotes de docs/audio-chatgpt/ e instala.
//   node scripts/conferir-audios-chatgpt.mjs <idioma> <pasta>            só confere (não altera nada)
//   node scripts/conferir-audios-chatgpt.mjs <idioma> <pasta> --instalar copia para public/audio/<idioma>, reescreve o index.json
// Depois de instalar: node scripts/proteger-audio.mjs   (separa público e privado)
import fs from 'node:fs';
import path from 'node:path';

const raiz = path.resolve(import.meta.dirname, '..');
const [idioma, pasta] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const instalar = process.argv.includes('--instalar');
if (!idioma || !pasta) { console.error('uso: node scripts/conferir-audios-chatgpt.mjs <idioma> <pasta> [--instalar]'); process.exit(1); }
const dirLotes = path.join(raiz, 'docs', 'audio-chatgpt');
const esperados = new Map(); // arquivo → {voz, texto}
const lerLinha = (l) => { const r = []; let c = ''; let q = false; for (let i = 0; i < l.length; i++) { const ch = l[i]; if (q) { if (ch === '"') { if (l[i + 1] === '"') { c += '"'; i++; } else q = false; } else c += ch; } else if (ch === '"') q = true; else if (ch === ',') { r.push(c); c = ''; } else c += ch; } r.push(c); return r; };
for (const f of fs.readdirSync(dirLotes).filter((x) => x.startsWith(`${idioma}-lote-`) && x.endsWith('.csv'))) {
  const linhas = fs.readFileSync(path.join(dirLotes, f), 'utf8').split(/\r?\n/).filter(Boolean).slice(1);
  for (const l of linhas) { const c = lerLinha(l); esperados.set(c[1], { voz: c[2], texto: c[4] }); }
}
if (!esperados.size) { console.error(`sem lotes para ${idioma} em docs/audio-chatgpt/`); process.exit(1); }
const todos = fs.readdirSync(pasta).filter((f) => !f.startsWith('.'));
const mp3 = todos.filter((f) => f.toLowerCase().endsWith('.mp3'));
const faltam = [...esperados.keys()].filter((a) => !mp3.includes(a));
const sobram = mp3.filter((a) => !esperados.has(a));
const ruins = [];
for (const a of mp3.filter((x) => esperados.has(x))) {
  const b = fs.readFileSync(path.join(pasta, a));
  const cab = b.subarray(0, 3).toString('latin1') === 'ID3' || (b[0] === 0xff && (b[1] & 0xe0) === 0xe0);
  const max = Math.max(60000, esperados.get(a).texto.length * 4000); // ~4 KB por caractere, folga larga
  if (!cab) ruins.push(`${a}: não parece MP3`);
  else if (b.length < 2500) ruins.push(`${a}: pequeno demais (${b.length} bytes), provável áudio vazio`);
  else if (b.length > max) ruins.push(`${a}: grande demais (${b.length} bytes), provável áudio com texto extra`);
}
console.log(`${idioma}: esperados ${esperados.size} | entregues ${mp3.length} | faltam ${faltam.length} | de fora da lista ${sobram.length} | suspeitos ${ruins.length}`);
if (faltam.length) console.log('FALTAM:\n  ' + faltam.slice(0, 40).join('\n  ') + (faltam.length > 40 ? `\n  … e mais ${faltam.length - 40}` : ''));
if (sobram.length) console.log('FORA DA LISTA (nome errado?):\n  ' + sobram.slice(0, 40).join('\n  '));
if (ruins.length) console.log('SUSPEITOS:\n  ' + ruins.slice(0, 40).join('\n  '));
const ok = !faltam.length && !sobram.length && !ruins.length;
if (!instalar) { console.log(ok ? 'tudo certo; rode com --instalar' : 'corrija e rode de novo'); process.exit(ok ? 0 : 1); }
if (!ok) { console.error('não instalo com pendências; corrija e rode de novo'); process.exit(1); }
const destino = path.join(raiz, 'public', 'audio', idioma); fs.mkdirSync(destino, { recursive: true });
let n = 0; for (const a of mp3) { const d = path.join(destino, a); if (!fs.existsSync(d)) { fs.copyFileSync(path.join(pasta, a), d); n++; } }
const presentes = fs.readdirSync(destino).filter((f) => f.endsWith('.mp3')).map((f) => f.replace('.mp3', '')).sort();
fs.writeFileSync(path.join(destino, 'index.json'), JSON.stringify(presentes) + '\n');
console.log(`instalados ${n} arquivos em public/audio/${idioma}; index.json com ${presentes.length}. Agora: node scripts/proteger-audio.mjs`);
