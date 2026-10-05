// Transforma as aulas (content/idiomas/<id>/aulas/aula-NNN.json, 4 sessões cada) em dias do curso
// (content/idiomas/<id>/dia-NNN.json, 1 sessão por dia) e gera a lista de áudios a gravar.
//   node scripts/aulas.mjs ru
import fs from 'node:fs';
import path from 'node:path';

const id = process.argv[2] ?? 'ru';
const raiz = path.resolve(import.meta.dirname, '..');
const dirIdioma = path.join(raiz, 'content', 'idiomas', id);
const dirAulas = path.join(dirIdioma, 'aulas');
const trilha = JSON.parse(fs.readFileSync(path.join(raiz, 'content', 'trilha-100-dias.json'), 'utf8'));
const pad = (n) => String(n).padStart(3, '0');
const escrever = (f, o) => fs.writeFileSync(f, JSON.stringify(o, null, 2) + '\n');

const arquivos = fs.readdirSync(dirAulas).filter((f) => /^aula-\d+\.json$/.test(f)).sort();
const aulas = arquivos.map((f) => JSON.parse(fs.readFileSync(path.join(dirAulas, f), 'utf8')));

// 1) um dia por sessão. Cada palavra recebe `ainda`: letras que o aluno ainda não aprendeu naquele ponto do curso.
const ensinadas = new Set();
const letrasDe = (t) => [...t.matchAll(/[А-Яа-яЁё]/g)].map((m) => m[0].toLowerCase());
const anotar = (sessao) => {
  const copia = JSON.parse(JSON.stringify(sessao));
  copia.blocos = copia.blocos.map((b) => {
    if (b.tipo === 'vocabulario') b.tipo = 'palavras';
    if (b.tipo === 'alfabeto') b.grupos.forEach((g) => g.letras.forEach((l) => ensinadas.add(l.maiuscula.toLowerCase())));
    if (b.tipo === 'palavras') b.itens.forEach((i) => { const f = [...new Set(letrasDe(i.ru))].filter((c) => !ensinadas.has(c)); if (f.length) i.ainda = f.map((c) => c.toUpperCase()); });
    return b;
  });
  return copia;
};
let dia = 0;
const usados = new Set();
for (const a of aulas) {
  a.sessoes.forEach((s, i) => {
    dia = (a.aula - 1) * 4 + i + 1;
    const m = trilha.dias[dia - 1] ?? { fase: Math.ceil(dia / 10), nivel: a.nivel }; // depois do dia 100 o curso continua
    escrever(path.join(dirIdioma, `dia-${pad(dia)}.json`), {
      idioma: id, dia, fase: m.fase, nivel: m.nivel, status: a.status,
      titulo: `${a.titulo}: ${s.titulo}`,
      objetivo: `Aula ${a.aula}, sessão ${i + 1} de ${a.sessoes.length} · ${s.duracaoMin} min`,
      aula: { numero: a.aula, titulo: a.titulo, objetivo: a.objetivo, sessoes: a.sessoes.length, duracaoTotalMin: a.duracaoTotalMin, nivel: a.nivel },
      sessao: anotar(s),
      origem: `content/idiomas/${id}/aulas/${arquivos[a.aula - 1]}`,
      responsavel: null,
    });
    usados.add(dia);
  });
}

// 2) dias do material antigo que sobraram (mapeamento por aulas do roteiro antigo) voltam ao texto-mestre
let limpos = 0;
for (const f of fs.readdirSync(dirIdioma).filter((x) => /^dia-\d+\.json$/.test(x))) {
  const n = Number(f.match(/\d+/)[0]);
  if (usados.has(n)) continue;
  const d = JSON.parse(fs.readFileSync(path.join(dirIdioma, f), 'utf8'));
  if (!d.fonte || !String(d.fonte).includes('legado')) continue;
  const m = trilha.dias[n - 1];
  escrever(path.join(dirIdioma, f), {
    idioma: id, dia: n, fase: m.fase, nivel: m.nivel, status: 'planejada', titulo: m.titulo, objetivo: m.objetivo,
    comeceAqui: { status: 'pendente', audio: null, palavras: [] },
    imersao: { status: 'pendente', texto: null, audio: null, vocabulario: [] },
    pratica: { status: 'pendente', exercicios: [] },
    videoApoio: { status: 'nenhum', url: null, motivo: null },
    responsavel: null,
  });
  limpos++;
}

// 3) lista de áudios a gravar (texto único → arquivo nomeado pelo hash do texto)
const hash = (t) => { let h = 0x811c9dc5; for (const c of Buffer.from(t.normalize('NFC').trim(), 'utf8')) { h ^= c; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const textos = new Map();
const add = (t, onde) => { if (!t) return; const k = t.normalize('NFC').trim(); if (!textos.has(k)) textos.set(k, { onde, usos: 0 }); textos.get(k).usos++; };
for (const a of aulas) for (const s of a.sessoes) for (const b of s.blocos) {
  const onde = `aula ${a.aula} ${s.sessao} ${b.tipo}`;
  if (b.tipo === 'alfabeto') b.grupos.forEach((g) => g.letras.forEach((l) => add(l.exemplo, onde)));
  if (b.tipo === 'palavras' || b.tipo === 'vocabulario') b.itens.forEach((i) => add(i.audio ?? i.ru, onde));
  if (b.tipo === 'dialogo') b.linhas.forEach((l) => add(l.audio, onde));
  if (b.tipo === 'texto') add(b.ru, onde);
  if (b.tipo === 'gramatica') (b.exemplos ?? []).forEach((e) => add(e.ru.replace(/\s*\(.*?\)\s*$/, ''), onde));
  if (b.tipo === 'exercicios') b.itens.forEach((i) => add(i.audio, onde));
}
const colisoes = new Map();
for (const t of textos.keys()) { const h = hash(t); colisoes.set(h, [...(colisoes.get(h) ?? []), t]); }
if ([...colisoes.values()].some((v) => v.length > 1)) { console.error('colisão de hash entre textos'); process.exit(1); }
fs.mkdirSync(path.join(raiz, 'content', 'audio'), { recursive: true });
const csv = ['arquivo,texto,primeiro_uso,vezes_usado', ...[...textos].map(([t, v]) => `${hash(t)}.mp3,"${t.replace(/"/g, '""')}",${v.onde},${v.usos}`)].join('\n') + '\n';
fs.writeFileSync(path.join(raiz, 'content', 'audio', `${id}-gravar.csv`), csv);
console.log(`${aulas.length} aulas → ${usados.size} dias; ${limpos} dias do material antigo voltaram ao texto-mestre; ${textos.size} áudios a gravar`);
