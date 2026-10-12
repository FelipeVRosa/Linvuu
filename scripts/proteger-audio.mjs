// Separa os áudios em públicos (de aulas gratuitas e da gramática gratuita) e privados (o resto).
//   node scripts/proteger-audio.mjs          → move os privados e reescreve o index.json público
//   node scripts/proteger-audio.mjs --dry    → só mostra a contagem
//
// Regra: um MP3 é público só se o TEXTO dele (lido do CSV de gravação) aparece num campo dos dias 1–8
// ou na gramática gratuita. Compara por texto, não por hash, para não haver colisão de 32 bits.
// Arquivo sem correspondência exata = privado (o padrão é fechar).
// Privados vão para server/audio-privado/<idioma>/ e só saem pela rota /api/audio (com plano ativo).
import fs from 'node:fs';
import path from 'node:path';

const dry = process.argv.includes('--dry');
const raiz = path.resolve(import.meta.dirname, '..');
const DIAS_GRATIS = 8;

// Mesma normalização de src/lib/audio.ts (textoParaAudio). Mantenha igual.
const textoParaAudio = (t) => t.normalize('NFC').replace(/́/g, '').trim();
const hashTexto = (t) => {
  let h = 0x811c9dc5;
  for (const c of Buffer.from(textoParaAudio(t), 'utf8')) { h ^= c; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
};

// Todas as strings de um JSON, com e sem o trecho entre parênteses (a gramática fala sem ele).
const strings = (v, saida = new Set()) => {
  if (typeof v === 'string') {
    if (v.trim()) { saida.add(textoParaAudio(v)); saida.add(textoParaAudio(v.replace(/\s*\(.*?\)\s*$/, ''))); }
  } else if (Array.isArray(v)) v.forEach((x) => strings(x, saida));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, saida));
  return saida;
};

// Textos podem ter quebra de linha: lê o arquivo inteiro, não linha a linha.
const lerCsv = (arquivo) => {
  const conteudo = fs.readFileSync(arquivo, 'utf8');
  const out = [];
  for (const m of conteudo.matchAll(/(?:^|\n)([0-9a-f]{8}\.mp3),"((?:[^"]|"")*)",[^\n]*/g)) {
    out.push({ arquivo: m[1], texto: m[2].replace(/""/g, '"') });
  }
  return out;
};

const idiomas = fs.readdirSync(path.join(raiz, 'content', 'idiomas')).filter((d) => fs.statSync(path.join(raiz, 'content', 'idiomas', d)).isDirectory());
const totais = { publicos: 0, privados: 0, semCsv: 0, erros: 0 };

for (const id of idiomas) {
  const pasta = path.join(raiz, 'public', 'audio', id);
  const csv = path.join(raiz, 'content', 'audio', `${id}-gravar.csv`);
  if (!fs.existsSync(pasta)) continue;

  // 1) strings gratuitas: dias 1–8 + gramática gratuita deste idioma
  const livres = new Set();
  for (let n = 1; n <= DIAS_GRATIS; n++) {
    const arq = path.join(raiz, 'content', 'idiomas', id, `dia-${String(n).padStart(3, '0')}.json`);
    if (fs.existsSync(arq)) strings(JSON.parse(fs.readFileSync(arq, 'utf8')), livres);
  }
  const gram = path.join(raiz, 'content', 'gramatica', `${id}.json`);
  if (fs.existsSync(gram)) strings(JSON.parse(fs.readFileSync(gram, 'utf8')), livres);

  // 2) quais arquivos têm texto gratuito (pelo CSV)
  const publicos = new Set();
  const noCsv = new Set();
  const doCsv = new Map();
  if (fs.existsSync(csv)) {
    for (const r of lerCsv(csv)) {
      if (hashTexto(r.texto) !== r.arquivo.replace('.mp3', '')) { totais.erros++; console.error(`hash não bate: ${id} ${r.arquivo}`); continue; }
      doCsv.set(r.arquivo, r.texto);
      if (livres.has(textoParaAudio(r.texto))) publicos.add(r.arquivo);
    }
  }

  // 3) arquivos em disco fora do CSV: públicos só se o nome é o hash exato de um texto gratuito (não há outro texto para comparar);
  //    os demais ficam privados (padrão fechado).
  const emDisco = fs.readdirSync(pasta).filter((f) => f.endsWith('.mp3'));
  for (const f of emDisco) {
    if (doCsv.has(f)) continue;
    noCsv.add(f); totais.semCsv++;
    for (const t of livres) if (hashTexto(t) + '.mp3' === f) { publicos.add(f); break; }
  }

  const privados = emDisco.filter((f) => !publicos.has(f));
  totais.publicos += publicos.size;
  totais.privados += privados.length;
  console.log(`${id}: ${emDisco.length} arquivos → ${publicos.size} públicos, ${privados.length} privados (${noCsv.size} sem texto no CSV)`);

  if (dry) continue;

  // 4) move os privados e reescreve o índice público (só públicos)
  const destino = path.join(raiz, 'server', 'audio-privado', id);
  fs.mkdirSync(destino, { recursive: true });
  for (const f of privados) fs.renameSync(path.join(pasta, f), path.join(destino, f));
  fs.writeFileSync(path.join(pasta, 'index.json'), JSON.stringify([...publicos].map((f) => f.replace('.mp3', '')).sort()) + '\n');
}

console.log(`\ntotal: ${totais.publicos} públicos, ${totais.privados} privados, ${totais.semCsv} sem texto no CSV, ${totais.erros} erros de hash${dry ? ' (--dry: nada foi movido)' : ''}`);
if (totais.erros) process.exit(1);
