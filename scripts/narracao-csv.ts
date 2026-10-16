// Lista os trechos da «Ouvir explicação» das aulas grátis (aulas 1 e 2 de cada curso) para gravar:
//   content/audio/pt-gravar.csv                  trechos em português (voz pt-BR)
//   content/audio/<idioma>-narracao-gravar.csv   trechos na língua estudada (voz do idioma), sempre públicos
// Rode: npx tsx scripts/narracao-csv.ts
import fs from 'node:fs';
import path from 'node:path';
import { trechos } from '../src/lib/narracao.ts';
// Mesmo hash de src/lib/audio.ts (não importo o módulo: ele depende do navegador). Mantenha igual.
const hashTexto = (t: string) => { let h = 0x811c9dc5; for (const c of new TextEncoder().encode(t.normalize('NFC').replace(/\u0301/g, '').trim())) { h ^= c; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };

const raiz = path.resolve(import.meta.dirname, '..');
const IDIOMAS = ['en', 'es', 'de', 'fr', 'it', 'ru'];
const esc = (t: string) => `"${t.replace(/"/g, '""')}"`;
const pt = new Map<string, string>();
for (const id of IDIOMAS) {
  const alvo = new Map<string, string>();
  for (const n of [1, 2]) {
    const a = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'idiomas', id, 'aulas', `aula-00${n}.json`), 'utf8'));
    for (const s of a.sessoes) for (const b of s.blocos) {
      const textos: string[] = [];
      if (b.tipo === 'gramatica') textos.push(b.explicacao, ...(b.comparacao ? [`Em português: ${b.comparacao}`] : []));
      if (b.tipo === 'intro') textos.push(b.texto);
      for (const x of textos) for (const t of trechos(x, id)) (t.idioma === 'pt' ? pt : alvo).set(hashTexto(t.texto), t.texto);
    }
  }
  const f = path.join(raiz, 'content', 'audio', `${id}-narracao-gravar.csv`);
  fs.writeFileSync(f, 'arquivo,texto,voz,primeiro_uso,vezes_usado\n' + [...alvo].map(([h, t]) => `${h}.mp3,${esc(t)},f,narração,1`).join('\n') + '\n');
  console.log(`${id}: ${alvo.size} trechos`);
}
fs.writeFileSync(path.join(raiz, 'content', 'audio', 'pt-gravar.csv'), 'arquivo,texto,voz,primeiro_uso,vezes_usado\n' + [...pt].map(([h, t]) => `${h}.mp3,${esc(t)},f,narração,1`).join('\n') + '\n');
console.log(`pt: ${pt.size} trechos, ${[...pt.values()].reduce((x, t) => x + t.length, 0)} caracteres`);
