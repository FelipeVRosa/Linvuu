import type { Exercicio } from './aulas';

/** Tolera pontuação de ditado sem apagar acentos que distinguem palavras. */
export const normalizarResposta = (s: string) => s.normalize('NFC').toLowerCase()
  .replace(/ё/g, 'е').replace(/[.,!?¿¡«»—…:;"'()]/g, '').replace(/\s+/g, ' ').trim();

export function corrigirResposta(
  ex: Exercicio,
  resposta: { escolha: string | null; ordem: number[]; texto: string },
): boolean {
  if (ex.tipo === 'sentence-ordering') {
    return normalizarResposta(resposta.ordem.map((k) => ex.opcoes?.[k] ?? '').join(' ')) === normalizarResposta(ex.gabarito ?? '');
  }
  // Escolhas de ortografia/capitalização continuam exatas; não usar normalização aqui.
  if (ex.opcoes && ex.gabarito !== undefined) return resposta.escolha === ex.gabarito;
  return normalizarResposta(resposta.texto) === normalizarResposta(ex.respostaEsperada ?? '');
}

/** A posição identifica a resposta da sessão, mesmo se uma fonte repetir um ID. */
export function resumirExercicios(itens: Exercicio[], respostas: Record<number, boolean>) {
  const corrigiveis = itens.map((ex, indice) => ({ ex, indice }))
    .filter(({ ex }) => ex.tipo !== 'producao' && ex.tipo !== 'repeat');
  return {
    total: corrigiveis.length,
    acertos: corrigiveis.filter(({ indice }) => respostas[indice] === true).length,
    erros: corrigiveis.filter(({ indice }) => respostas[indice] === false).map(({ ex }) => ex),
  };
}
