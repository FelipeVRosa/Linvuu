import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 31, titulo: 'Present perfect: already, yet, just e recently', nivel: 'a2',
  objetivo: 'Usar o present perfect com «already», «yet», «just» e «recently» para falar de ações recentes e de resultados que importam agora.',
  nota: 'Você diz o que já fez, o que ainda não fez e o que acabou de fazer. Próxima aula: for e since.',
  sessoes: [
    sessao('S1', 'Already e yet', [
      revisao(5, 'Diga 5 experiências da sua vida com o present perfect, sem dizer quando.'),
      palavras(8, [
        ['already', 'olrédi', 'já', ''], ['yet', 'iét', 'ainda (em perguntas e negativas)', ''], ['finish', 'fíniche', 'terminar', ''], ['finished', 'fínicht', 'terminou', ''], ['do the dishes', 'du dâ díchiz', 'lavar a louça', ''], ['homework', 'rômuãrk', 'dever de casa', ''], ['report', 'ripórt', 'relatório', ''], ['email', 'íimeil', 'e-mail', ''],
      ]),
      gramatica(12, 'Already e yet', 'PASSO 1: «already» = JÁ, em frases afirmativas, antes do particípio: «I have already finished.» PASSO 2: também pode ir no fim: «I have finished already.» PASSO 3: «yet» = AINDA, só em negativas e perguntas, e vai NO FIM: «I haven\'t finished yet.», «Have you finished yet?» PASSO 4: «not yet» sozinho serve de resposta curta: «Have you eaten?» → «Not yet.» PASSO 5: não use «yet» em afirmativas: «I have yet finished» está errado. PASSO 6: o present perfect aqui liga o passado ao PRESENTE: o resultado importa agora (o relatório está pronto).', {
        tag: 'Already e yet',
        comparacao: 'em português «já» e «ainda» aparecem nos mesmos lugares («já terminei», «ainda não terminei»). Em inglês, «already» é afirmativo e «yet» é negativo ou pergunta, no fim da frase.',
        tabela: [
          { tipo: 'afirmativa', exemplo: 'I have already finished.' }, { tipo: 'negativa', exemplo: 'I haven\'t finished yet.' }, { tipo: 'pergunta', exemplo: 'Have you finished yet?' }, { tipo: 'resposta curta', exemplo: 'Not yet. / Yes, already.' },
        ],
        erros: [['I haven\'t finished already.', 'I haven\'t finished yet.', 'Negativa: yet.'], ['I have yet finished.', 'I have already finished.', 'Afirmativa: already.'], ['I have finished yet.', 'I have already finished.', '«yet» não vai em afirmativas.'], ['I didn\'t finish yet.', 'I haven\'t finished yet.', 'Com yet, present perfect.']],
      }),
      producao(5, 'Diga 4 coisas que você já fez hoje e 3 que ainda não fez.'),
    ]),
    sessao('S2', 'Just e recently', [
      revisao(4, 'Faça 3 frases com already e 3 com yet.'),
      palavras(6, [
        ['just', 'djâst', 'acabou de', ''], ['recently', 'riisentli', 'recentemente', ''], ['lately', 'lêitli', 'ultimamente', ''], ['arrive', 'aráiv', 'chegar', ''], ['leave', 'liiv', 'sair', ''], ['news', 'niuz', 'notícias', ''],
      ]),
      gramatica(12, 'Just, recently e lately', 'PASSO 1: «just» = ACABOU DE: «I have just arrived.», «She has just left.» PASSO 2: «just» vai entre o auxiliar e o particípio. PASSO 3: «recently» e «lately» = ultimamente, recentemente: «I have been tired lately.» PASSO 4: «recently» pode ir no começo, no fim ou antes do particípio. PASSO 5: nos EUA, o passado simples também aparece com «just»: «I just ate.», em fala informal. Mas na escrita e nas provas, use o present perfect: «I have just eaten.» PASSO 6: «just» não significa «apenas» aqui. Nesse outro sentido: «It\'s just a game.» (é só um jogo).', {
        tag: 'Just e recently',
        comparacao: 'em português «acabei de chegar» usa a forma «acabar de + infinitivo». Em inglês, «I have just arrived» — não existe «I finished to arrive».',
        tabela: [
          { portugues: 'Acabei de chegar.', ingles: 'I have just arrived.', nota: 'just antes do particípio' }, { portugues: 'Ela acabou de sair.', ingles: 'She has just left.', nota: '' }, { portugues: 'Tenho estado cansado ultimamente.', ingles: 'I have been tired lately.', nota: 'lately' },
        ],
        erros: [['I finished to arrive.', 'I have just arrived.', 'acabou de = have just.'], ['I have arrived just.', 'I have just arrived.', 'just antes do particípio.'], ['I have recent arrived.', 'I have recently arrived.', 'advérbio: recently.']],
      }),
      producao(8, 'Diga 5 coisas que acabaram de acontecer ao seu redor, com «have just» e «has just».'),
    ]),
    sessao('S3', 'Resultados que importam agora', [
      revisao(4, 'Complete: «She has ___ left. I haven\'t eaten ___. They have ___ finished.»'),
      palavras(5, [
        ['lost', 'lóst', 'perdido', ''], ['keys', 'kiiz', 'chaves', ''], ['broken', 'brôuken', 'quebrado', ''], ['fixed', 'fíkst', 'consertado', ''], ['search', 'sãrtch', 'procurar', ''],
      ]),
      gramatica(8, 'Present perfect: passado com efeito no presente', 'PASSO 1: use o present perfect quando a ação passada tem um RESULTADO agora: «I have lost my keys.» (e ainda não achei) PASSO 2: compare: «I lost my keys yesterday.» (informa só o passado) PASSO 3: perguntas típicas: «What has happened?», «Have you seen my keys?» PASSO 4: «has gone» e «has broken» descrevem estados: «The car has broken down.» (o carro quebrou e está parado) PASSO 5: sem marcador de tempo passado, o present perfect é a escolha natural para notícias: «The president has arrived.»', {
        tag: 'Resultado agora',
        comparacao: 'em português «perdi as chaves» não diz se você ainda as procura. Em inglês, «I have lost my keys» sugere que o problema continua; «I lost my keys» só informa o fato.',
        tabela: [
          { frase: 'I have lost my keys.', sentido: 'ainda estou sem elas' }, { frase: 'I lost my keys yesterday.', sentido: 'fato passado, tempo definido' }, { frase: 'The bus has arrived.', sentido: 'está aqui agora' },
        ],
        erros: [['I have lost my keys yesterday.', 'I lost my keys yesterday.', 'Com yesterday, simples.'], ['The president arrived. (notícia de agora)', 'The president has arrived.', 'Notícia recente: present perfect.']],
      }),
      dialogo(8, 'Where are my keys? / Onde estão as minhas chaves?', 'Ben procura as chaves com Lucy.', [
        ['Ben', 'Have you seen my keys, Lucy? I can\'t find them.', 'Você viu as minhas chaves, Lucy? Não consigo achá-las.'], ['Lucy', 'No, I haven\'t. Have you looked in your bag?', 'Não. Você olhou na bolsa?'], ['Ben', 'Yes, I have. I\'ve already searched everywhere.', 'Olhei. Já procurei em todo lugar.'], ['Lucy', 'Hmm. Have you checked your jacket yet?', 'Hmm. Você já olhou na jaqueta?'], ['Ben', 'Not yet. Wait… here they are! I\'ve just found them.', 'Ainda não. Espera… aqui estão! Acabei de achar.'], ['Lucy', 'Great! Now we can go. The bus has just arrived.', 'Ótimo! Agora podemos ir. O ônibus acabou de chegar.'],
      ]),
      producao(5, 'Escreva 5 frases sobre algo que você perdeu, quebrou ou achou, com present perfect.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 31', [
      revisao(5, 'Conte o que você já fez hoje e o que ainda falta fazer.'),
      exercicios(20, [
        ouvir('I have already finished my homework', ['I have already finished my homework', 'I haven\'t finished my homework yet', 'I finished my homework'], 'I have already finished my homework', 'Ouça «already».'), ouvir('Have you finished yet', ['Have you finished yet', 'Did you finish yet', 'Have you finished already'], 'Have you finished yet', 'Ouça «yet».'), ditado('She has just left', 'Escreva: she has just left.'), ditado('I haven\'t eaten yet', 'Escreva: I haven\'t eaten yet.'),
        mc('Qual palavra vai em perguntas e negativas?', ['yet', 'already', 'just'], 'yet', 'yet = ainda.'), mc('Qual frase significa «acabou de chegar»?', ['He has just arrived.', 'He has yet arrived.', 'He arrived already.'], 'He has just arrived.', 'have just.'), mc('Qual frase está correta?', ['I haven\'t finished yet.', 'I haven\'t finished already.', 'I didn\'t finish already.'], 'I haven\'t finished yet.', 'Negativa: yet.'), mc('Qual frase está correta?', ['I lost my keys yesterday.', 'I have lost my keys yesterday.', 'I\'ve lost my keys yesterday.'], 'I lost my keys yesterday.', 'yesterday: simples.'),
        lacuna('I have ___ eaten. (já)', ['already', 'yet', 'ever'], 'already', 'Afirmativa.'), lacuna('Have you finished ___ ?', ['yet', 'already', 'just'], 'yet', 'Pergunta.'), lacuna('She has ___ left. (acabou de)', ['just', 'yet', 'ever'], 'just', 'acabou de.'), lacuna('I have been tired ___ . (ultimamente)', ['lately', 'late', 'later'], 'lately', 'lately.'),
        ordem('Ordene: «I have already seen that movie.»', ['I', 'have', 'already', 'seen', 'that', 'movie'], 'I have already seen that movie.', 'have + already + particípio.'), ordem('Ordene: «Have you finished yet?»', ['Have', 'you', 'finished', 'yet'], 'Have you finished yet?', 'Have + sujeito + particípio + yet.'),
        livre('Escreva 4 frases: uma com already, uma com yet, uma com just e uma pergunta com yet.', 'I have already finished. I haven\'t eaten yet. She has just arrived. Have you called him yet?'),
      ]),
      producao(5, 'Descreva em 1 minuto o que você já fez e o que falta fazer esta semana.'),
    ]),
  ],
});
