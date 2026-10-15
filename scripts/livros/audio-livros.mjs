// Lista os textos dos livros que ganham áudio (falas da Cena, "Frases de ouro" e "Glossário") e grava
// content/audio/<idioma>-livro-gravar.csv, no mesmo formato de <idioma>-gravar.csv. O scripts/gerar-audios.mjs lê os dois.
//
//   node scripts/livros/audio-livros.mjs            todos os idiomas em content/livros/
//   node scripts/livros/audio-livros.mjs --idioma=en
//
// A regra do que vira áudio é a de src/lib/livros.ts (itensDeAudio): o site toca exatamente estes textos.
import fs from 'node:fs';
import path from 'node:path';
import { itensDeAudio } from '../../src/lib/livros.ts';

const raiz = path.resolve(import.meta.dirname, '..', '..');
const args = Object.fromEntries(process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => { const [k, v = 'true'] = a.slice(2).split('='); return [k, v]; }));
// Mesmo hash de src/lib/audio.ts (FNV-1a de 32 bits sobre o texto sem acento tônico).
const textoParaAudio = (t) => t.normalize('NFC').replace(/́/g, '').trim();
const hashTexto = (t) => { let h = 0x811c9dc5; for (const c of new TextEncoder().encode(textoParaAudio(t))) { h ^= c; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const csv = (v) => `"${String(v).replace(/"/g, '""')}"`;

// --privado: capítulos 3 em diante (content/livros-privado). Vão para <idioma>-livro-privado-gravar.csv e NÃO entram em
// gerar-audios.mjs, porque o áudio deles só pode sair do servidor para assinantes (server/audio-privado), nunca de public/.
const privado = args.privado === 'true';
const dir = path.join(raiz, 'content', privado ? 'livros-privado' : 'livros');
for (const id of fs.readdirSync(dir).sort()) {
  if (args.idioma && args.idioma !== id) continue;
  if (!fs.statSync(path.join(dir, id)).isDirectory()) continue;
  const caps = fs.readdirSync(path.join(dir, id)).filter((f) => /^cap-\d+\.json$/.test(f) && (!privado || Number(f.match(/\d+/)[0]) > 2)).sort();
  if (!caps.length) continue;
  const vistos = new Map();
  for (const f of caps) {
    const c = JSON.parse(fs.readFileSync(path.join(dir, id, f), 'utf8'));
    for (const it of itensDeAudio(c)) {
      const arq = `${hashTexto(it.texto)}.mp3`;
      const v = vistos.get(arq);
      if (v) v.vezes++; else vistos.set(arq, { arq, texto: it.texto, voz: it.voz, onde: `livro ${it.onde}`, vezes: 1 });
    }
  }
  const linhas = ['arquivo,texto,voz,primeiro_uso,vezes_usado', ...[...vistos.values()].map((v) => [v.arq, csv(v.texto), v.voz, csv(v.onde), v.vezes].join(','))];
  fs.mkdirSync(path.join(raiz, 'content', 'audio'), { recursive: true });
  fs.writeFileSync(path.join(raiz, 'content', 'audio', `${id}-livro${privado ? '-privado' : ''}-gravar.csv`), linhas.join('\n') + '\n');
  const car = [...vistos.values()].reduce((x, v) => x + v.texto.length, 0);
  console.log(`${id}: ${vistos.size} frases para gravar (${car} caracteres) em ${caps.length} capítulos`);
}
