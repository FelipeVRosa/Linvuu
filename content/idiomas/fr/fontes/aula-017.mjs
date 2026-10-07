import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 17, titulo: 'Clima, estações e comparações', nivel: 'a1',
  objetivo: 'Falar do tempo e das estações, comparar pessoas e coisas com «plus… que», «moins… que», «aussi… que» e usar «meilleur» e «mieux».',
  nota: 'Você já descreve o clima e compara. Próxima aula: revisão e simulado do A1.',
  sessoes: [
    sessao('S1', 'O tempo e as estações', [
      revisao(5, 'Conte em voz alta uma viagem, com «être» e «avoir» no passado.'),
      palavras(8, [
        ['il fait beau', 'il fé bô', 'está bom tempo', ''], ['il fait chaud', 'il fé xô', 'está calor', ''], ['il fait froid', 'il fé fruá', 'está frio', ''], ['il pleut', 'il plö', 'está chovendo', ''], ['il neige', 'il néj', 'está nevando', ''], ['le soleil', 'lö solé', 'o sol', ''], ['le vent', 'lö vã', 'o vento', ''], ['le nuage', 'lö nüaj', 'a nuvem', ''],
      ]),
      gramatica(12, 'Il fait chaud: o clima em francês', 'PASSO 1: para o clima, o francês usa «il» impessoal, como o «it» do inglês: «Il pleut.» «Il neige.» PASSO 2: com «faire»: «Il fait beau.» «Il fait chaud.» «Il fait froid.» «Il fait du vent.» «Il fait du soleil.» PASSO 3: pergunta: «Quel temps fait-il ?» ou «Il fait quel temps ?» PASSO 4: as estações: «le printemps, l\'été, l\'automne, l\'hiver». PASSO 5: «au printemps» mas «en été, en automne, en hiver»: «Je voyage en été.» «Il pleut au printemps.» PASSO 6: temperatura: «Il fait vingt degrés.» «Il fait moins cinq.» PASSO 7: para dizer que algo está nublado: «Le ciel est couvert.» «Il y a des nuages.» PASSO 8: no passado: «Hier, il a plu.» «Il a fait chaud.»', {
        tag: 'Clima',
        comparacao: 'em português dizemos «está calor», «chove», «está frio». O francês usa «il fait» + substantivo ou adjetivo fixo, e «il» não significa uma pessoa. Não use «est» para o clima: «il est chaud» fala de uma coisa quente.',
        tabela: [
          { frase: 'Il fait beau.', sentido: 'está bom tempo' }, { frase: 'Il fait chaud.', sentido: 'está calor' }, { frase: 'Il fait froid.', sentido: 'está frio' }, { frase: 'Il pleut.', sentido: 'chove' }, { frase: 'Il neige.', sentido: 'neva' }, { frase: 'Il fait du vent.', sentido: 'ventando' }, { frase: 'au printemps', sentido: 'na primavera' }, { frase: 'en été / en hiver', sentido: 'no verão / no inverno' },
        ],
        erros: [['Il est chaud aujourd\'hui.', 'Il fait chaud aujourd\'hui.', 'Clima: «faire».'], ['Il a pluie.', 'Il pleut.', 'Verbo «pleuvoir».'], ['Je voyage au été.', 'Je voyage en été.', 'Verão: «en».'], ['Il fait un froid.', 'Il fait froid.', 'Sem artigo.']],
      }),
      producao(5, 'Diga o tempo de hoje e como é cada estação no lugar onde você vive.'),
    ]),
    sessao('S2', 'Comparar: plus, moins, aussi', [
      revisao(4, 'Diga o tempo em cinco situações: calor, frio, chuva, vento e sol.'),
      palavras(6, [
        ['plus', 'plüs', 'mais', ''], ['moins', 'muã', 'menos', ''], ['aussi', 'ôsi', 'tão, também', ''], ['que', 'kö', 'do que, quanto', ''], ['grand', 'grã', 'grande', ''], ['petit', 'pöti', 'pequeno', ''],
      ]),
      gramatica(12, 'Plus grand que, moins cher que', 'PASSO 1: superioridade: «plus» + adjetivo + «que»: «Paul est plus grand que Marc.» PASSO 2: inferioridade: «moins» + adjetivo + «que»: «Cette robe est moins chère que celle-là.» PASSO 3: igualdade: «aussi» + adjetivo + «que»: «Elle est aussi grande que lui.» PASSO 4: com pronomes, use o tônico: «Elle est plus grande que moi.» «Il est aussi gentil que toi.» PASSO 5: o adjetivo concorda com o sujeito: «Marie est plus grande que Paul.» «Les filles sont plus grandes.» PASSO 6: com verbos: «Je travaille plus que toi.» «Il mange moins que moi.» PASSO 7: com substantivos, «plus de», «moins de», «autant de»: «Il a plus de livres que moi.» PASSO 8: pergunta: «Qui est plus grand ?»', {
        tag: 'Comparativos',
        comparacao: 'em português dizemos «mais alto do que», «menos caro do que». O francês usa «que»: «plus grand que». Depois de «que», com pessoas, use o pronome tônico: «que moi», nunca «que je».',
        tabela: [
          { tipo: 'mais', formula: 'plus + adj. + que', exemplo: 'Il est plus grand que moi.' }, { tipo: 'menos', formula: 'moins + adj. + que', exemplo: 'Elle est moins âgée que lui.' }, { tipo: 'igual', formula: 'aussi + adj. + que', exemplo: 'Je suis aussi fatigué que toi.' }, { tipo: 'verbo', formula: 'verbo + plus que', exemplo: 'Je travaille plus que lui.' }, { tipo: 'substantivo', formula: 'plus de + subst. + que', exemplo: 'Il a plus de livres que moi.' },
        ],
        erros: [['Il est plus grand de moi.', 'Il est plus grand que moi.', 'Comparar usa «que».'], ['Il est plus grand que je.', 'Il est plus grand que moi.', 'Tônico depois de «que».'], ['Elle est plus grand que lui.', 'Elle est plus grande que lui.', 'Concordância.'], ['Il a plus livres que moi.', 'Il a plus de livres que moi.', '«De» antes do substantivo.']],
      }),
      producao(8, 'Compare em voz alta oito pares: você e um amigo, duas cidades, dois carros, duas comidas.'),
    ]),
    sessao('S3', 'Meilleur, mieux e o superlativo', [
      revisao(4, 'Compare duas coisas com «plus… que», «moins… que», «aussi… que».'),
      palavras(5, [
        ['bon', 'bõ', 'bom', ''], ['meilleur', 'meiiör', 'melhor (adjetivo)', ''], ['bien', 'biẽ', 'bem', ''], ['mieux', 'miö', 'melhor (advérbio)', ''], ['le plus', 'lö plüs', 'o mais', ''],
      ]),
      gramatica(8, 'Meilleur, mieux e «le plus»', 'PASSO 1: «bon» → «meilleur»; não existe «plus bon»: «Ce gâteau est meilleur que l\'autre.» PASSO 2: «bien» → «mieux»: «Il parle mieux que moi.» PASSO 3: «meilleur» concorda: «meilleure, meilleurs, meilleures». PASSO 4: superlativo: «le/la/les plus» + adjetivo: «Paris est la plus grande ville de France.» PASSO 5: «le meilleur»: «C\'est le meilleur restaurant de la ville.» PASSO 6: «le mieux»: «C\'est elle qui chante le mieux.» PASSO 7: depois de superlativo, o francês usa «de» (não «em»): «le plus grand de la classe».', {
        tag: 'Comparativos',
        comparacao: 'em português «melhor» serve para tudo. O francês separa: «meilleur» (adjetivo, qualifica um substantivo) e «mieux» (advérbio, qualifica um verbo). «Bom» → «meilleur», «bem» → «mieux».',
        tabela: [
          { base: 'bon (adj.)', comparativo: 'meilleur', exemplo: 'Ce café est meilleur.' }, { base: 'bien (adv.)', comparativo: 'mieux', exemplo: 'Elle chante mieux.' }, { base: 'superlativo adj.', comparativo: 'le/la plus + adj.', exemplo: 'La plus grande ville.' }, { base: 'superlativo de bon', comparativo: 'le meilleur', exemplo: 'Le meilleur gâteau.' }, { base: 'superlativo de bien', comparativo: 'le mieux', exemplo: 'Il joue le mieux.' },
        ],
        erros: [['Ce gâteau est plus bon.', 'Ce gâteau est meilleur.', '«Meilleur» é o comparativo de «bon».'], ['Il parle meilleur.', 'Il parle mieux.', 'Verbo pede advérbio.'], ['La plus grande ville du France.', 'La plus grande ville de France.', 'Sem artigo antes de França.'], ['C\'est le plus bon restaurant.', 'C\'est le meilleur restaurant.', 'Superlativo de «bon».']],
      }),
      dialogo(8, 'Quel temps fait-il ? / Como está o tempo?', 'Lucas e Camille falam do tempo e das estações.', [
        ['Lucas', 'Quel temps fait-il chez toi en ce moment ?', 'Como está o tempo na sua casa agora?'], ['Camille', 'Il fait froid et il pleut. L\'hiver est plus long qu\'au Brésil.', 'Está frio e chove. O inverno é mais longo do que no Brasil.'], ['Lucas', 'Chez moi, il fait chaud toute l\'année. Mais j\'aime mieux l\'automne.', 'Na minha casa, faz calor o ano todo. Mas eu prefiro o outono.'], ['Camille', 'Moi aussi ! C\'est la meilleure saison pour se promener.', 'Eu também! É a melhor estação para passear.'], ['Lucas', 'Tu veux visiter Paris en automne ?', 'Quer visitar Paris no outono?'], ['Camille', 'Oui, avec plaisir. Il y a moins de touristes qu\'en été.', 'Sim, com prazer. Há menos turistas do que no verão.'],
      ]),
      producao(5, 'Diga qual é a melhor estação e a melhor cidade para você, e por quê.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 17', [
      revisao(5, 'Descreva o tempo e compare duas estações.'),
      exercicios(20, [
        ouvir('Il fait froid', ['Il fait froid', 'Il fait chaud', 'Il pleut'], 'Il fait froid', 'Ouça «froid».'), ouvir('Il est plus grand que moi', ['Il est plus grand que moi', 'Il est moins grand que moi', 'Il est aussi grand que moi'], 'Il est plus grand que moi', 'Ouça «plus».'), ouvir('C\'est le meilleur restaurant', ['C\'est le meilleur restaurant', 'C\'est le moins cher restaurant', 'C\'est un bon restaurant'], 'C\'est le meilleur restaurant', 'Ouça «meilleur».'),
        ditado('Il pleut en automne', 'Escreva: Il pleut en automne.'), ditado('Elle est plus grande que lui', 'Escreva: Elle est plus grande que lui.'), ditado('Il parle mieux que moi', 'Escreva: Il parle mieux que moi.'),
        mc('«Está calor» em francês:', ['Il fait chaud.', 'Il est chaud.', 'Il a chaud.'], 'Il fait chaud.', 'Clima: «faire».'), mc('Qual frase está correta?', ['Je voyage en été.', 'Je voyage au été.', 'Je voyage à l\'été.'], 'Je voyage en été.', 'Verão: «en».'), mc('Qual frase está correta?', ['Il est plus grand que moi.', 'Il est plus grand de moi.', 'Il est plus grand que je.'], 'Il est plus grand que moi.', 'Tônico depois de «que».'), mc('Qual frase está correta?', ['Il parle mieux.', 'Il parle meilleur.', 'Il parle plus bien.'], 'Il parle mieux.', 'Advérbio: «mieux».'),
        lacuna('Ce gâteau est ___ que l\'autre. (melhor)', ['meilleur', 'mieux', 'plus bon'], 'meilleur', 'Adjetivo.'), lacuna('Elle est ___ grande que lui. (mais)', ['plus', 'moins', 'aussi'], 'plus', 'Superioridade.'), lacuna('Il a ___ livres que moi. (mais)', ['plus de', 'plus', 'plus des'], 'plus de', '«De» antes do substantivo.'), lacuna('Il ___ en hiver. (neva)', ['neige', 'neiger', 'neigé'], 'neige', 'Presente.'),
        ordem('Ordene: «Il fait beau aujourd\'hui.»', ['Il', 'fait', 'beau', 'aujourd\'hui'], 'Il fait beau aujourd\'hui.', 'Clima.'), ordem('Ordene: «Je suis aussi fatigué que toi.»', ['Je', 'suis', 'aussi', 'fatigué', 'que', 'toi'], 'Je suis aussi fatigué que toi.', 'aussi… que.'),
        livre('Escreva em francês: Hoje está frio e chove. Ele é mais alto do que eu. Este é o melhor restaurante.', 'Aujourd\'hui, il fait froid et il pleut. Il est plus grand que moi. C\'est le meilleur restaurant.'),
      ]),
      producao(5, 'Fale 1 minuto sobre a sua estação favorita e compare com outra.'),
    ]),
  ],
});
