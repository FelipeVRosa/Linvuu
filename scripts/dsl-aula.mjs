// Formato compacto para escrever aulas (gasta ~40% menos texto que o JSON). Veja content/idiomas/ru/fontes/aula-007.mjs.
// Cada arquivo de fonte exporta `aula(...)`. `npm run aulas` compila para content/idiomas/<id>/aulas/aula-NNN.json.
const soma = (blocos) => blocos.reduce((x, b) => x + (b.min ?? 0), 0);

export const revisao = (min, enunciado) => ({ tipo: 'revisao', min, enunciado });
export const producao = (min, enunciado, exemplo) => ({ tipo: 'producao', min, enunciado, ...(exemplo ? { exemplo } : {}) });
/** itens: [ru, transliteração, pt, en] */
export const palavras = (min, itens) => ({ tipo: 'palavras', min, itens: itens.map(([ru, translit, pt, en]) => ({ ru, translit, pt, en, audio: ru })) });
/** linhas: [personagem, ru, pt] (o travessão é acrescentado) */
export const dialogo = (min, titulo, contexto, linhas) => ({ tipo: 'dialogo', min, titulo, contexto, linhas: linhas.map(([personagem, ru, pt]) => ({ personagem, ru: `— ${ru}`, pt: `— ${pt}`, audio: ru })) });
/** perguntas: [pergunta, resposta] */
export const texto = (min, titulo, ru, pt, perguntas) => ({ tipo: 'texto', min, titulo, ru, pt, perguntas: perguntas.map(([pergunta, resposta]) => ({ pergunta, resposta })) });
/**
 * Gramática. explicacao: explique em português ANTES de usar termos em russo.
 * Opções: exemplos [[ru, pt]]; tabela (lista de objetos, as chaves viram colunas); tabelas [{titulo, linhas}];
 * comparacao (como é em português); erros [[errado, certo, motivo]]; tag (categoria na aba Gramática).
 */
export const gramatica = (min, titulo, explicacao, { exemplos, tabela, tabelas, comparacao, erros, tag } = {}) => ({
  tipo: 'gramatica', min, titulo, explicacao,
  ...(comparacao ? { comparacao } : {}),
  ...(exemplos ? { exemplos: exemplos.map(([ru, pt]) => ({ ru, pt })) } : {}),
  ...(tabela ? { tabela } : {}),
  ...(tabelas ? { tabelas } : {}),
  ...(erros ? { erros: erros.map(([errado, certo, motivo]) => ({ errado, certo, motivo })) } : {}),
  ...(tag ? { tag } : {}),
});

// Exercícios (o id é gerado por exercicios()).
export const mc = (enunciado, opcoes, gabarito, explicacao) => ({ tipo: 'multiple-choice', enunciado, opcoes, gabarito, explicacao });
export const lacuna = (enunciado, opcoes, gabarito, explicacao) => ({ tipo: 'fill-gap', enunciado, opcoes, gabarito, explicacao });
export const ordem = (enunciado, opcoes, gabarito, explicacao) => ({ tipo: 'sentence-ordering', enunciado, opcoes, gabarito, explicacao });
export const ouvir = (audio, opcoes, gabarito, explicacao) => ({ tipo: 'audio-recognition', enunciado: 'Ouça e escolha.', audio, opcoes, gabarito, explicacao });
export const ditado = (audio, explicacao) => ({ tipo: 'audio-recognition', enunciado: 'Ouça e escreva em cirílico.', audio, respostaEsperada: audio, explicacao });
export const livre = (enunciado, respostaEsperada) => ({ tipo: 'producao', enunciado, respostaEsperada });
export const exercicios = (min, itens) => ({ tipo: 'exercicios', min, itens });

export const sessao = (id, titulo, blocos) => ({ sessao: id, titulo, duracaoMin: soma(blocos), blocos });

export function aula({ idioma, numero, titulo, nivel, objetivo, sessoes, nota, status = 'publicada' }) {
  const p = String(numero).padStart(3, '0');
  let n = 0;
  for (const s of sessoes) for (const b of s.blocos) if (b.tipo === 'exercicios') b.itens.forEach((i) => { i.id = `${idioma}-${p}-e${String(++n).padStart(2, '0')}`; });
  const total = sessoes.reduce((x, s) => x + s.duracaoMin, 0);
  const avisos = sessoes.filter((s) => s.duracaoMin !== 30).map((s) => `${s.sessao}: ${s.duracaoMin} min`);
  if (avisos.length) console.warn(`aviso aula ${numero}: sessões fora de 30 min (${avisos.join(', ')})`);
  return { idioma, aula: numero, modulo: 1, ciclo: 1, nivel, status, titulo, objetivo, duracaoTotalMin: total, sessoes, ...(nota ? { notasParaOAluno: nota } : {}) };
}
