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
  // 3) "Repita": [frase mostrada, tradução, áudio (opcional: usa o de um exercício que já existe, sem pontuação)]. Abre o primeiro bloco de exercícios da última sessão
  if (c.repita?.length) {
    const s = a.sessoes[a.sessoes.length - 1];
    const b = s.blocos.find((x) => x.tipo === 'exercicios');
    if (!b) throw new Error(`${f}: sem bloco de exercícios`);
    const itens = c.repita.map(([frase, trad, audio], i) => ({ tipo: 'repeat', enunciado: 'Ouça, repita em voz alta e depois mostre a resposta.', audio: audio ?? frase, respostaEsperada: frase, explicacao: trad, id: `${idioma}-${num}-r${String(i + 1).padStart(2, '0')}`, complemento: true }));
    // espalha: um "Repita" a cada 3 exercícios, para variar o ritmo
    const base = b.itens; const out = []; let r = 0;
    for (let i = 0; i < base.length || r < itens.length; i++) {
      if (i < base.length) out.push(base[i]);
      if ((i + 1) % 3 === 0 && r < itens.length) out.push(itens[r++]);
      if (i >= base.length && r < itens.length) out.push(itens[r++]);
    }
    b.itens = out;
  }
  fs.writeFileSync(arq, JSON.stringify(a, null, 2) + '\n');
  n++;
}
console.log(`${n} aula(s) com complementos em ${idioma}`);
