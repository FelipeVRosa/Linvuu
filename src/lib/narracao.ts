// Narração da explicação: o texto em português vira trechos lidos em duas vozes.
// O que está entre «aspas angulares» é a língua estudada (voz dela); o resto é português (voz pt-BR).
// Usado pelo botão «Ouvir explicação» e por scripts/narracao-csv.ts, que lista os trechos a gravar (o texto de cada trecho é o hash do MP3).
export interface Trecho { texto: string; idioma: string }

const MARCAS_PT = /[ãõç]|\b(você|vocês|não|eu|ele|ela|nós|são|está|vou|vai|tem|um|uma|português|brasileiro)\b/i;

/** Texto corrido para ser falado: sem símbolos que a voz soletraria. */
const falavel = (t: string) => t
  .replace(/PASSO\s+(\d+)\s*:/g, (_m, n) => `Passo ${n}.`)
  .replace(/\s*→\s*/g, ', ').replace(/\s*\+\s*/g, ' mais ').replace(/\s*=\s*/g, ' é igual a ')
  .replace(/\s*\/\s*/g, ', ').replace(/…/g, ',').replace(/\s+/g, ' ').trim();

export function trechos(texto: string, idioma: string): Trecho[] {
  const out: Trecho[] = [];
  const pt = (s: string) => {
    for (const f of falavel(s).split(/(?<=[.!?:;])\s+/)) { const x = f.trim(); if (/[\p{L}\d]/u.test(x)) out.push({ texto: x, idioma: 'pt' }); }
  };
  for (const [i, parte] of texto.split(/«([^»]+)»/).entries()) {
    if (i % 2 === 0) { pt(parte); continue; }
    const t = falavel(parte).replace(/[.!?]+$/, (p) => p).trim();
    if (!/[\p{L}\d]/u.test(t)) continue;
    out.push({ texto: t, idioma: MARCAS_PT.test(t) ? 'pt' : idioma });
  }
  // junta pontuação solta (".", ",") ao trecho anterior e funde trechos de português vizinhos curtos
  const limpo: Trecho[] = [];
  for (const t of out) {
    const ant = limpo[limpo.length - 1];
    if (ant && t.idioma === 'pt' && ant.idioma === 'pt' && ant.texto.length + t.texto.length < 160) ant.texto += ` ${t.texto}`;
    else limpo.push({ ...t });
  }
  return limpo;
}
