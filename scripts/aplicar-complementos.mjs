// Aplica os complementos (diálogo, leitura, "Repita") por cima das aulas já geradas, inclusive as vindas dos livros.
// Rode de novo depois de qualquer sincronização com os livros: o script é idempotente (remove o que ele mesmo pôs e recoloca).
// Uso: node scripts/aplicar-complementos.mjs <idioma>   (npm run complementos)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const idioma = process.argv[2];
if (!idioma) { console.error('uso: node scripts/aplicar-complementos.mjs <idioma>'); process.exit(1); }
const dirC = path.join(raiz, 'content/idiomas', idioma, 'complementos');
const dirA = path.join(raiz, 'content/idiomas', idioma, 'aulas');
if (!fs.existsSync(dirC)) { console.log(`sem complementos para ${idioma}`); process.exit(0); }

const antesDe = (blocos, tipos) => { const i = blocos.findIndex((b) => tipos.includes(b.tipo)); return i < 0 ? blocos.length : i; };
let n = 0;
for (const f of fs.readdirSync(dirC).filter((x) => /^aula-\d+\.json$/.test(x)).sort()) {
  const c = JSON.parse(fs.readFileSync(path.join(dirC, f), 'utf8'));
  const arq = path.join(dirA, f);
  if (!fs.existsSync(arq)) { console.warn(`aviso: ${f} sem aula correspondente`); continue; }
  const a = JSON.parse(fs.readFileSync(arq, 'utf8'));
  const num = String(a.aula).padStart(3, '0');
  // 1) limpa o que o script colocou antes
  for (const s of a.sessoes) {
    s.blocos = s.blocos.filter((b) => !b.complemento);
    for (const b of s.blocos) if (b.tipo === 'exercicios') b.itens = b.itens.filter((i) => !i.complemento);
  }
  // 2) diálogo e leitura entram antes da produção/revisão da sessão indicada
  for (const k of ['dialogo', 'texto']) {
    const d = c[k]; if (!d) continue;
    const s = a.sessoes[(d.sessao ?? 3) - 1];
    if (!s) throw new Error(`${f}: sessão ${d.sessao} não existe`);
    const bloco = k === 'dialogo'
      ? { tipo: 'dialogo', min: d.min ?? 8, titulo: d.titulo, contexto: d.contexto, linhas: d.linhas.map(([personagem, ru, pt]) => ({ personagem, ru: `— ${ru}`, pt: `— ${pt}`, audio: ru })), complemento: true }
      : { tipo: 'texto', min: d.min ?? 6, titulo: d.titulo, ru: d.ru, pt: d.pt, perguntas: d.perguntas, complemento: true };
    s.blocos.splice(antesDe(s.blocos, ['producao', 'revisao']), 0, bloco);
  }
  // 3) "Repita": [frase mostrada, tradução, áudio (opcional: usa o de um exercício que já existe, sem pontuação)].
  const alvo = a.sessoes[a.sessoes.length - 1];
  const bEx = alvo.blocos.find((x) => x.tipo === 'exercicios');
  if (!bEx) throw new Error(`${f}: sem bloco de exercícios`);
  // mistura "extras" entre os exercícios que já existem, espalhados por igual
  const misturar = (base, extras) => {
    if (!extras.length) return base;
    const out = []; const passo = base.length / (extras.length + 1); let k = 0;
    base.forEach((x, i) => { out.push(x); while (k < extras.length && Math.round((k + 1) * passo) <= i + 1) out.push(extras[k++]); });
    while (k < extras.length) out.push(extras[k++]);
    return out;
  };
  if (c.repita?.length) {
    const itens = c.repita.map(([frase, trad, audio], i) => ({ tipo: 'repeat', enunciado: 'Ouça, repita em voz alta e depois mostre a resposta.', audio: audio ?? frase, respostaEsperada: frase, explicacao: trad, id: `${idioma}-${num}-r${String(i + 1).padStart(2, '0')}`, complemento: true }));
    bEx.itens = misturar(bEx.itens, itens);
  }
  // 4) reforço automático até a meta de exercícios por aula (sem áudio novo: usa as falas e palavras da própria aula)
  const meta = c.meta ?? 40;
  const todos = a.sessoes.flatMap((x) => x.blocos);
  const contar = () => a.sessoes.reduce((t, x) => t + x.blocos.filter((b) => b.tipo === 'exercicios').reduce((u, b) => u + b.itens.length, 0), 0);
  let falta = meta - contar();
  if (falta > 0) {
    const semente = (txt) => { let h = 2166136261; for (const ch of txt) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; };
    const emb = (arr, rnd) => { const r = [...arr]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
    const usados = new Set(a.sessoes.flatMap((x) => x.blocos.filter((b) => b.tipo === 'exercicios').flatMap((b) => b.itens.map((i) => (i.audio ?? '').toLowerCase()))));
    const limpa = (t) => t.replace(/^[—–-]\s*/, '').trim();
    const linhas = todos.filter((b) => b.tipo === 'dialogo').flatMap((b) => b.linhas).map((l) => ({ en: limpa(l.ru), pt: limpa(l.pt), audio: l.audio })).filter((l) => { const n = l.en.split(/\s+/).length; return n >= 3 && n <= 11 && !usados.has((l.audio ?? '').toLowerCase()); });
    const vistos = new Set(); const unicas = linhas.filter((l) => !vistos.has(l.audio) && vistos.add(l.audio));
    const extras = []; let n = 0;
    const id = () => `${idioma}-${num}-x${String(++n).padStart(2, '0')}`;
    for (const l of unicas) {
      if (extras.length >= falta) break;
      const rnd = semente(l.en); const pal = l.en.split(/\s+/);
      let emb1 = emb(pal, rnd); for (let t = 0; t < 5 && emb1.join(' ') === pal.join(' '); t++) emb1 = emb(pal, rnd);
      extras.push({ tipo: 'sentence-ordering', enunciado: `Monte a frase: «${l.pt}»`, opcoes: emb1, gabarito: l.en, explicacao: `Escreva: ${l.en}`, id: id(), complemento: true });
      if (extras.length >= falta) break;
      extras.push({ tipo: 'audio-recognition', enunciado: 'Ouça e escreva.', audio: l.audio, respostaEsperada: l.audio, explicacao: l.pt, id: id(), complemento: true });
    }
    const palavras = todos.filter((b) => b.tipo === 'palavras').flatMap((b) => b.itens).filter((p) => p.ru && p.pt && p.ru.split(/\s+/).length <= 3 && !/[;/]/.test(p.pt));
    const pts = [...new Set(palavras.map((p) => p.pt))];
    let nMc = 0;
    for (const p of emb(palavras, semente(`${idioma}${num}`))) {
      if (extras.length >= falta || nMc >= 6) break; // poucos de vocabulário: sinônimos podem confundir
      const rnd = semente(p.ru); const outras = emb(pts.filter((x) => x !== p.pt && Math.abs(x.length - p.pt.length) < 14), rnd).slice(0, 3);
      if (outras.length < 3) continue;
      extras.push({ tipo: 'multiple-choice', enunciado: `O que significa «${p.ru}»?`, audio: p.audio ?? p.ru, opcoes: emb([p.pt, ...outras], rnd), gabarito: p.pt, explicacao: `«${p.ru}» = ${p.pt}.`, id: id(), complemento: true }); nMc++;
    }
    bEx.itens = misturar(bEx.itens, extras);
  }
  fs.writeFileSync(arq, JSON.stringify(a, null, 2) + '\n');
  n++;
}
console.log(`${n} aula(s) com complementos em ${idioma}`);
