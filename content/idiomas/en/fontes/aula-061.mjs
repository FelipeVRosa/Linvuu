import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 61, titulo: 'Estratégias: escutar, ler e apresentar', nivel: 'b1',
  objetivo: 'Entender o essencial ao ouvir e ler, e organizar uma apresentação oral curta, com início, desenvolvimento e fim.',
  nota: 'Você tem estratégias para entender e se expressar mesmo sem saber todas as palavras. Próxima aula: revisão e simulado do B1.',
  sessoes: [
    sessao('S1', 'Estratégias de escuta', [
      revisao(5, 'Conte um dia seu usando collocations de make, do, take e have.'),
      palavras(8, [
        ['main idea', 'mêin aidía', 'ideia principal', ''], ['detail', 'diitêil', 'detalhe', ''], ['guess', 'gés', 'adivinhar, deduzir', ''], ['context', 'cóntekst', 'contexto', ''], ['keyword', 'kiiuôrd', 'palavra-chave', ''], ['take notes', 'têik nôuts', 'tomar notas', ''], ['repeat', 'ripiit', 'repetir', ''], ['speaker', 'spiikar', 'quem fala', ''],
      ]),
      gramatica(12, 'Como entender sem entender tudo', 'PASSO 1: antes de ouvir, leia a pergunta e prediga o assunto. PASSO 2: na primeira escuta, procure a IDEIA PRINCIPAL, não cada palavra. PASSO 3: na segunda escuta, procure DETALHES: números, nomes, horas, lugares. PASSO 4: use o contexto para adivinhar uma palavra nova: «It was freezing outside» → freezing = muito frio. PASSO 5: escute as palavras-chave, que são mais fortes e claras: substantivos, verbos principais. PASSO 6: não pare em uma palavra que você não entendeu; siga adiante. PASSO 7: peça repetição com educação: «Could you repeat that, please?» «Could you speak more slowly?» «What does … mean?»', {
        tag: 'Escuta',
        comparacao: 'em português ouvimos e entendemos o sentido mesmo perdendo palavras. Em inglês, faça igual: confie na ideia principal e no contexto.',
        tabela: [
          { etapa: '1. antes', acao: 'Leia a pergunta e prediga o assunto.' }, { etapa: '2. primeira vez', acao: 'Ideia principal.' }, { etapa: '3. segunda vez', acao: 'Detalhes: números, nomes, lugares.' }, { etapa: '4. dúvida', acao: 'Could you repeat that, please?' },
        ],
        erros: [['Repeat, please.', 'Could you repeat that, please?', 'Pedido educado.'], ['I no understand.', 'I don\'t understand.', 'Negativa com don\'t.'], ['What means «freezing»?', 'What does «freezing» mean?', 'Pergunta com does.']],
      }),
      producao(5, 'Escute um áudio da plataforma e escreva a ideia principal em 1 frase e 3 detalhes.'),
    ]),
    sessao('S2', 'Estratégias de leitura', [
      revisao(4, 'Peça de forma educada: repetir, falar mais devagar e explicar uma palavra.'),
      palavras(6, [
        ['skim', 'skím', 'ler rapidamente para a ideia geral', ''], ['scan', 'skén', 'procurar informação específica', ''], ['title', 'táitl', 'título', ''], ['paragraph', 'párgraf', 'parágrafo', ''], ['summary', 'sâmari', 'resumo', ''], ['topic sentence', 'tópik séntns', 'frase-tópico', ''],
      ]),
      gramatica(12, 'Skimming, scanning e inferência', 'PASSO 1: «skim» = leia o título, a primeira frase de cada parágrafo e a última frase, para a ideia geral. PASSO 2: «scan» = procure uma informação específica (número, nome, data) sem ler tudo. PASSO 3: leia as perguntas ANTES do texto. PASSO 4: a frase-tópico geralmente está no começo do parágrafo. PASSO 5: palavras de ligação ajudam: «however» (vem contraste), «for example» (vem exemplo), «therefore» (vem consequência). PASSO 6: deduza o sentido pelas partes: «unhappy» = un + happy. PASSO 7: depois, resuma com suas palavras: «The text is about…».', {
        tag: 'Leitura',
        comparacao: 'em português também passamos os olhos antes de ler com atenção. Em inglês, nomeamos isso: skimming (geral) e scanning (específico).',
        tabela: [
          { tecnica: 'skim', uso: 'Ideia geral', como: 'Título, primeira e última frase.' }, { tecnica: 'scan', uso: 'Informação específica', como: 'Procure números e nomes.' }, { tecnica: 'inferir', uso: 'Palavra nova', como: 'Contexto e partes da palavra.' }, { tecnica: 'resumir', uso: 'Compreensão', como: 'The text is about…' },
        ],
        erros: [['The text talks about to…', 'The text is about…', 'is about.'], ['I read all the words.', 'I read for the main idea first.', 'Estratégia.']],
      }),
      producao(8, 'Leia um texto da plataforma: faça skim (1 min), scan (1 informação) e um resumo de 2 frases.'),
    ]),
    sessao('S3', 'Apresentação oral', [
      revisao(4, 'Explique a diferença entre skim e scan em português ou inglês simples.'),
      palavras(5, [
        ['introduce', 'intrôdius', 'apresentar', ''], ['topic', 'tópik', 'tema', ''], ['first of all', 'fârst óv ól', 'antes de tudo', ''], ['finally', 'fáinali', 'por fim', ''], ['any questions', 'éni kuéschnz', 'alguma pergunta', ''],
      ]),
      gramatica(8, 'Estrutura de uma apresentação', 'PASSO 1: comece com cumprimento e tema: «Good morning. Today I\'m going to talk about…» PASSO 2: anuncie os pontos: «I\'ll talk about three things.» PASSO 3: organize: «First of all… Next… Finally…» PASSO 4: use exemplos: «For example…» PASSO 5: conclua: «To sum up…» PASSO 6: encerre: «Thank you for listening. Any questions?»', {
        tag: 'Apresentação',
        comparacao: 'em português dizemos «hoje vou falar sobre…». Em inglês: «Today I\'m going to talk about…».',
        tabela: [
          { etapa: 'abrir', frase: 'Today I\'m going to talk about…' }, { etapa: 'organizar', frase: 'First of all… Next… Finally…' }, { etapa: 'concluir', frase: 'To sum up…' }, { etapa: 'encerrar', frase: 'Thank you. Any questions?' },
        ],
        erros: [['Today I go to talk about…', 'Today I\'m going to talk about…', 'going to.'], ['At the final…', 'Finally, …', 'Finally.']],
      }),
      texto(8, 'A short presentation / Uma apresentação curta', 'Good morning, everyone. Today I\'m going to talk about learning English. I\'ll talk about three things. First of all, listening: try to understand the main idea. Next, reading: skim first, then scan. Finally, speaking: don\'t be afraid of mistakes. To sum up, you learn better when you practice every day. Thank you for listening. Any questions?',
        'Bom dia a todos. Hoje vou falar sobre aprender inglês. Vou falar de três coisas. Antes de tudo, escuta: tente entender a ideia principal. Depois, leitura: primeiro skim, depois scan. Por fim, fala: não tenha medo de errar. Em resumo, você aprende melhor praticando todo dia. Obrigado por ouvir. Alguma pergunta?',
        [['What is the topic?', 'Learning English.'], ['How many things will he talk about?', 'Three.'], ['What should you do first when reading?', 'Skim.'], ['How does the speaker end?', 'Thank you for listening. Any questions?']]),
      producao(5, 'Escreva o roteiro de uma apresentação de 1 minuto sobre um tema que você conhece.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 61', [
      revisao(5, 'Apresente seu roteiro em voz alta, 1 minuto, com abertura, 3 pontos e conclusão.'),
      exercicios(20, [
        ouvir('Could you repeat that please', ['Could you repeat that please', 'Repeat please', 'Could you repeating that'], 'Could you repeat that please', 'Ouça o pedido educado.'), ouvir('Today I am going to talk about English', ['Today I am going to talk about English', 'Today I go to talk about English', 'Today I am going talk English'], 'Today I am going to talk about English', 'Ouça «going to talk».'), ditado('The text is about learning English', 'Escreva: the text is about learning English.'), ditado('First of all, listening', 'Escreva: first of all, listening.'),
        mc('Para achar um número específico, você usa…', ['scan', 'skim', 'repeat'], 'scan', 'scan = específico.'), mc('Para a ideia geral, você usa…', ['skim', 'scan', 'translate'], 'skim', 'skim = geral.'), mc('Qual frase está correta?', ['What does «freezing» mean?', 'What means «freezing»?', 'What does «freezing» means?'], 'What does «freezing» mean?', 'does + mean.'), mc('Qual frase abre uma apresentação?', ['Today I\'m going to talk about…', 'Today I go talk…', 'I talk today of…'], 'Today I\'m going to talk about…', 'going to.'),
        lacuna('The text is ___ learning English. (sobre)', ['about', 'on of', 'to'], 'about', 'is about.'), lacuna('___ of all, listening. (antes de tudo)', ['First', 'Final', 'One'], 'First', 'First of all.'), lacuna('___, thank you for listening. (por fim)', ['Finally', 'Final', 'At last of'], 'Finally', 'Finally.'), lacuna('To ___ up, practice every day. (resumir)', ['sum', 'add', 'say'], 'sum', 'To sum up.'),
        ordem('Ordene: «Could you speak more slowly, please?»', ['Could', 'you', 'speak', 'more', 'slowly,', 'please'], 'Could you speak more slowly, please?', 'Pedido educado.'), ordem('Ordene: «Today I am going to talk about travel.»', ['Today', 'I', 'am', 'going', 'to', 'talk', 'about', 'travel'], 'Today I am going to talk about travel.', 'going to talk about.'),
        livre('Escreva a abertura e o encerramento de uma apresentação de 4 linhas.', 'Good morning. Today I am going to talk about travel. To sum up, travel is good. Thank you. Any questions?'),
      ]),
      producao(5, 'Faça sua apresentação de 1 minuto sem ler, só com tópicos.'),
    ]),
  ],
});
