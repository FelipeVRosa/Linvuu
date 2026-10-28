/** Textos editoriais derivados dos cursos e dos capítulos gratuitos publicados. */
export const APRESENTACOES_CURSO: Record<string, { titulo: string; paragrafos: string[] }> = {
  de: {
    titulo: 'Por onde começar no alemão',
    paragrafos: [
      'O curso começa pelos sons e avança em etapas, com explicações em português e exemplos de erros comuns. A trilha reúne gramática, diálogos e exercícios ao longo dos níveis A1, A2 e B1.',
      'As duas primeiras aulas são gratuitas. Para complementar o estudo, o livro de alemão abre com sons e letras e segue para pronomes e presente.',
    ],
  },
  ru: {
    titulo: 'Por onde começar no russo',
    paragrafos: [
      'O primeiro passo é conhecer o alfabeto cirílico e seus sons. A trilha segue com exemplos, diálogos e explicações dos casos gramaticais, organizados do A1 ao B1.',
      'As duas primeiras aulas são gratuitas. Você pode conhecer o material antes de escolher uma assinatura e voltar à trilha para continuar estudando.',
    ],
  },
};

export const APRESENTACOES_LIVRO: Record<string, { titulo: string; paragrafos: string[] }> = {
  de: {
    titulo: 'O que você encontra nos primeiros capítulos',
    paragrafos: [
      'O primeiro capítulo apresenta sons e letras a partir de uma cena na recepção. O segundo aborda pronomes e presente, em uma cena na cozinha de um albergue.',
      'As explicações partem de dificuldades de quem fala português. Os dois capítulos estão disponíveis para leitura gratuita, com recursos de áudio.',
    ],
  },
  es: {
    titulo: 'O que você encontra nos primeiros capítulos',
    paragrafos: [
      'O primeiro capítulo apresenta sons e ortografia a partir de uma cena na recepção. O segundo aborda pronomes, ser e estar e artigos, em uma cena no primeiro dia de trabalho.',
      'As explicações partem de dificuldades de quem fala português. Os dois capítulos estão disponíveis para leitura gratuita, com recursos de áudio.',
    ],
  },
};
