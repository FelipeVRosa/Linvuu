// Tipos das aulas em sessões (content/idiomas/<id>/aulas/aula-NNN.json). Cada sessão vira um dia do curso.
export interface Letra { maiuscula: string; minuscula: string; som: string; ipa: string; exemplo: string; exemploPt: string }
export interface Palavra { ru: string; translit: string; pt: string; en?: string; audio?: string }
export interface LinhaDialogo { personagem: string; ru: string; pt: string; audio?: string }
export interface ExemploGramatica { ru: string; pt: string }
export interface LinhaTabela { nominativo: string; acusativo: string; exemplo: string }
export interface Pergunta { pergunta: string; resposta: string }

export type TipoExercicio = 'multiple-choice' | 'audio-recognition' | 'fill-gap' | 'sentence-ordering' | 'producao';
export interface Exercicio {
  id: string; tipo: TipoExercicio; enunciado: string; opcoes?: string[]; gabarito?: string;
  respostaEsperada?: string; audio?: string; explicacao?: string;
}

export type Bloco =
  | { tipo: 'intro'; min: number; texto: string }
  | { tipo: 'revisao'; min: number; enunciado: string }
  | { tipo: 'producao'; min: number; enunciado: string; exemplo?: string }
  | { tipo: 'alfabeto'; min: number; grupos: { nome: string; letras: Letra[] }[] }
  | { tipo: 'palavras'; min: number; itens: Palavra[] }
  | { tipo: 'dialogo'; min: number; titulo: string; contexto?: string; linhas: LinhaDialogo[] }
  | { tipo: 'texto'; min: number; titulo: string; ru: string; pt: string; perguntas: Pergunta[] }
  | { tipo: 'gramatica'; min: number; titulo: string; explicacao: string; exemplos?: ExemploGramatica[]; tabela?: LinhaTabela[] }
  | { tipo: 'exercicios'; min: number; itens: Exercicio[] };

export interface SessaoAula { sessao: string; titulo: string; duracaoMin: number; blocos: Bloco[] }
export interface InfoAula { numero: number; titulo: string; objetivo: string; sessoes: number; duracaoTotalMin: number; nivel: string }

export const ROTULO_BLOCO: Record<Bloco['tipo'], string> = {
  intro: 'Introdução', revisao: 'Revisão', producao: 'Fale e escreva', alfabeto: 'Alfabeto', palavras: 'Palavras',
  dialogo: 'Diálogo', texto: 'Leitura', gramatica: 'Gramática', exercicios: 'Exercícios',
};
