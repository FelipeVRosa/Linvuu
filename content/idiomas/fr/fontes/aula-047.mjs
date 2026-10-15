import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 47, titulo: 'Conectores lógicos: causa, consequência, oposição', nivel: 'b1',
  objetivo: 'Ligar ideias com conectores de causa, consequência, oposição e concessão, escolhendo o modo (indicativo ou subjuntivo) que cada um pede.',
  nota: 'Seu francês agora tem estrutura de argumento. Próxima aula: dar opinião e debater.',
  sessoes: [
    sessao('S1', 'Causa e consequência', [
      revisao(5, 'Diga três frases com «bien que», «avant que» e «sans que».'),
      palavras(8, [
        ['parce que', 'pars kö', 'porque', ''], ['puisque', 'püisk', 'já que', ''], ['car', 'car', 'pois', ''], ['grâce à', 'grass a', 'graças a', ''], ['à cause de', 'a coz dö', 'por causa de', ''], ['donc', 'dõk', 'portanto', ''], ['alors', 'alor', 'então', ''], ['c\'est pourquoi', 'sé purkuá', 'por isso', ''],
      ]),
      gramatica(12, 'Parce que, puisque, donc, c\'est pourquoi', 'PASSO 1: causa com verbo: «parce que» (resposta a «pourquoi»): «Je reste parce qu\'il pleut.» PASSO 2: «puisque» apresenta uma causa já conhecida pelos dois: «Puisque tu es là, aide-moi.» PASSO 3: «car» é escrito e formal: «Il est absent, car il est malade.» PASSO 4: causa com substantivo: «à cause de» (negativa ou neutra) e «grâce à» (positiva): «À cause de la pluie, le match est annulé.» «Grâce à toi, j\'ai réussi.» PASSO 5: consequência: «donc», «alors», «c\'est pourquoi», «par conséquent» (formal): «Il pleut, donc je reste.» PASSO 6: «si… que» e «tellement… que» (intensidade): «Il est si fatigué qu\'il dort.» PASSO 7: «de sorte que» + indicativo (resultado) ou + subjuntivo (objetivo): «Il parle fort de sorte que tout le monde l\'entend.» PASSO 8: «donc» pode vir depois do verbo: «Je pense, donc je suis.»', {
        tag: 'Conectores',
        comparacao: 'em português «porque» serve para tudo. Em francês, escolha: «parce que» responde a «pourquoi», «puisque» retoma algo já sabido, «car» é escrito. Com substantivos use «à cause de» ou «grâce à», nunca «parce que».',
        tabela: [
          { conector: 'parce que', funcao: 'causa nova', exemplo: 'Je reste parce qu\'il pleut.' }, { conector: 'puisque', funcao: 'causa conhecida', exemplo: 'Puisque tu es là, aide-moi.' }, { conector: 'à cause de', funcao: 'causa negativa + substantivo', exemplo: 'À cause de la pluie…' }, { conector: 'grâce à', funcao: 'causa positiva + substantivo', exemplo: 'Grâce à toi, j\'ai réussi.' }, { conector: 'donc', funcao: 'consequência', exemplo: 'Il pleut, donc je reste.' }, { conector: 'c\'est pourquoi', funcao: 'consequência formal', exemplo: 'C\'est pourquoi je reste.' },
        ],
        erros: [['Parce que la pluie, je reste.', 'À cause de la pluie, je reste.', 'Com substantivo: «à cause de».'], ['Grâce à la pluie, le match est annulé.', 'À cause de la pluie, le match est annulé.', '«Grâce à» é positivo.'], ['Parce qu\'il pleut ? Non, parce que…', 'Pourquoi ? Parce qu\'il pleut.', '«Parce que» responde a «pourquoi».'], ['Il est si fatigué qu\'il dort pas.', 'Il est si fatigué qu\'il ne dort pas.', 'Escreva «ne».']],
      }),
      producao(5, 'Explique em voz alta por que você estuda francês, com três conectores diferentes.'),
    ]),
    sessao('S2', 'Oposição e concessão', [
      revisao(4, 'Dê três causas e três consequências em frases ligadas.'),
      palavras(6, [
        ['mais', 'mé', 'mas', ''], ['pourtant', 'purtã', 'no entanto', ''], ['cependant', 'sövandã', 'contudo', ''], ['en revanche', 'ã rövãch', 'em compensação', ''], ['au contraire', 'o kõtrér', 'ao contrário', ''], ['alors que', 'alor kö', 'enquanto / ao passo que', ''],
      ]),
      gramatica(12, 'Mais, pourtant, en revanche, bien que', 'PASSO 1: oposição simples: «mais»: «Il est petit, mais fort.» PASSO 2: oposição forte: «pourtant», «cependant», «néanmoins» (formal): «Il a étudié, pourtant il a échoué.» PASSO 3: compensação: «en revanche»: «La ville est chère, en revanche elle est belle.» PASSO 4: contraste: «alors que» e «tandis que» (indicativo): «Il aime le café, alors que sa femme préfère le thé.» PASSO 5: «au contraire» nega e inverte: «Il n\'est pas triste, au contraire, il est heureux.» PASSO 6: concessão com subjuntivo: «bien que», «quoique»; com indicativo: «même si»: «Même s\'il pleut, je sors.» PASSO 7: concessão com substantivo: «malgré» e «en dépit de»: «Malgré la pluie, je sors.» PASSO 8: «malgré que» é comum na fala, mas evite na escrita.', {
        tag: 'Conectores',
        comparacao: 'em português «embora» e «mesmo que» também mudam o modo. Em francês: «bien que» + subjuntivo e «même si» + indicativo. «Même si» nunca leva futuro nem condicional na parte do «si».',
        tabela: [
          { conector: 'mais', funcao: 'oposição simples', exemplo: 'Il est petit, mais fort.' }, { conector: 'pourtant', funcao: 'oposição forte', exemplo: 'Il a étudié, pourtant il a échoué.' }, { conector: 'en revanche', funcao: 'compensação', exemplo: 'Cher, mais en revanche très beau.' }, { conector: 'alors que', funcao: 'contraste', exemplo: 'Il aime le thé, alors que je préfère le café.' }, { conector: 'même si', funcao: 'concessão + indicativo', exemplo: 'Même s\'il pleut, je sors.' }, { conector: 'malgré', funcao: 'concessão + substantivo', exemplo: 'Malgré la pluie, je sors.' },
        ],
        erros: [['Même s\'il pleuve, je sors.', 'Même s\'il pleut, je sors.', '«Même si» + indicativo.'], ['Bien qu\'il pleut, je sors.', 'Bien qu\'il pleuve, je sors.', '«Bien que» + subjuntivo.'], ['Malgré il pleut, je sors.', 'Malgré la pluie, je sors.', '«Malgré» + substantivo.'], ['Même s\'il pleuvrait, je sors.', 'Même s\'il pleut, je sors.', 'Sem futuro depois de «si».']],
      }),
      producao(8, 'Descreva em voz alta uma cidade com vantagens e desvantagens, usando oito conectores de oposição.'),
    ]),
    sessao('S3', 'Organizar um texto', [
      revisao(4, 'Ligue duas ideias opostas com «pourtant» e «en revanche».'),
      palavras(5, [
        ['d\'abord', 'dabor', 'primeiro', ''], ['ensuite', 'ãsüit', 'depois', ''], ['enfin', 'ãfẽ', 'por fim', ''], ['en conclusion', 'ã kõklüziõ', 'em conclusão', ''], ['de plus', 'dö plüs', 'além disso', ''],
      ]),
      gramatica(8, 'Os conectores de organização', 'PASSO 1: abrir: «d\'abord», «tout d\'abord», «premièrement». PASSO 2: continuar: «ensuite», «puis», «de plus», «en outre», «par ailleurs». PASSO 3: concluir: «enfin», «en conclusion», «pour conclure». PASSO 4: exemplificar: «par exemple», «c\'est-à-dire». PASSO 5: usar cada conector com vírgula: «D\'abord, je prépare. Ensuite, je cuisine. Enfin, je mange.»', {
        tag: 'Conectores',
        comparacao: 'os conectores franceses seguem a mesma lógica do português: «primeiro, depois, por fim». A diferença é a pontuação: em francês, sempre há uma vírgula depois do conector no início da frase.',
        tabela: [
          { conector: 'd\'abord', funcao: 'abrir', exemplo: 'D\'abord, je prépare.' }, { conector: 'ensuite', funcao: 'continuar', exemplo: 'Ensuite, je cuisine.' }, { conector: 'de plus', funcao: 'acrescentar', exemplo: 'De plus, c\'est bon marché.' }, { conector: 'enfin', funcao: 'concluir', exemplo: 'Enfin, je mange.' }, { conector: 'par exemple', funcao: 'exemplificar', exemplo: 'Par exemple, une salade.' }, { conector: 'en conclusion', funcao: 'fechar', exemplo: 'En conclusion, c\'est facile.' },
        ],
        erros: [['D\'abord je prépare.', 'D\'abord, je prépare.', 'Vírgula depois do conector.'], ['Enfin de plus, je mange.', 'Enfin, je mange.', 'Um conector por frase.'], ['En conclusion que c\'est facile.', 'En conclusion, c\'est facile.', 'Sem «que».'], ['Par example, une salade.', 'Par exemple, une salade.', 'Escrita: exemple.']],
      }),
      texto(8, 'Pourquoi apprendre le français ?', 'D\'abord, le français est parlé sur cinq continents, donc il ouvre beaucoup de portes. Ensuite, c\'est une langue de culture : la cuisine, le cinéma, la littérature. De plus, parce que beaucoup de mots sont proches du portugais, un Brésilien apprend vite. Pourtant, la prononciation est difficile, mais avec de la pratique, on progresse. En conclusion, malgré les difficultés, apprendre le français est un excellent choix.', 'Primeiro, o francês é falado em cinco continentes, portanto abre muitas portas. Depois, é uma língua de cultura: a cozinha, o cinema, a literatura. Além disso, como muitas palavras são próximas do português, um brasileiro aprende rápido. No entanto, a pronúncia é difícil, mas com prática, progride-se. Em conclusão, apesar das dificuldades, aprender francês é uma excelente escolha.', [['Em quantos continentes se fala francês?', 'Em cinco.'], ['Por que um brasileiro aprende rápido?', 'Muitas palavras são próximas do português.'], ['O que é difícil?', 'A pronúncia.']]),
      producao(5, 'Explique em voz alta por que alguém deveria aprender português, com quatro conectores de organização.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 47', [
      revisao(5, 'Argumente em voz alta a favor de aprender uma língua, com conectores variados.'),
      exercicios(20, [
        ouvir('Il pleut, donc je reste', ['Il pleut, donc je reste', 'Il pleut, pourtant je reste', 'Il pleut, alors que je reste'], 'Il pleut, donc je reste', 'Ouça «donc».'), ouvir('Grâce à toi, j\'ai réussi', ['Grâce à toi, j\'ai réussi', 'À cause de toi, j\'ai réussi', 'Puisque tu es là, j\'ai réussi'], 'Grâce à toi, j\'ai réussi', 'Ouça «grâce».'), ouvir('Même s\'il pleut, je sors', ['Même s\'il pleut, je sors', 'Bien qu\'il pleuve, je sors', 'Malgré la pluie, je sors'], 'Même s\'il pleut, je sors', 'Ouça «même si».'),
        ditado('Il a étudié, pourtant il a échoué', 'Escreva: Il a étudié, pourtant il a échoué.'), ditado('La ville est chère, en revanche elle est belle', 'Escreva: La ville est chère, en revanche elle est belle.'), ditado('D\'abord, je prépare, ensuite je mange', 'Escreva: D\'abord, je prépare, ensuite je mange.'),
        mc('Causa positiva com substantivo:', ['grâce à', 'à cause de', 'parce que'], 'grâce à', 'Grâce à toi.'), mc('«Même si» pede:', ['indicativo', 'subjuntivo', 'condicional'], 'indicativo', 'Même s\'il pleut.'), mc('Qual frase está correta?', ['Malgré la pluie, je sors.', 'Malgré il pleut, je sors.', 'Malgré qu\'il pleut, je sors.'], 'Malgré la pluie, je sors.', '«Malgré» + substantivo.'), mc('Qual conector exprime compensação?', ['en revanche', 'donc', 'car'], 'en revanche', 'Cher, mais en revanche beau.'),
        lacuna('Il est fatigué, ___ il dort. (portanto)', ['donc', 'pourtant', 'malgré'], 'donc', 'Consequência.'), lacuna('___ la pluie, le match est annulé. (por causa de)', ['À cause de', 'Grâce à', 'Parce que'], 'À cause de', 'Causa negativa.'), lacuna('Il aime le thé, ___ je préfère le café.', ['alors que', 'donc', 'car'], 'alors que', 'Contraste.'), lacuna('___ tu es là, aide-moi. (já que)', ['Puisque', 'Parce que', 'Malgré'], 'Puisque', 'Causa conhecida.'),
        ordem('Ordene: «Il pleut, donc je reste.»', ['Il', 'pleut,', 'donc', 'je', 'reste'], 'Il pleut, donc je reste.', 'Consequência.'), ordem('Ordene: «Malgré la pluie, je sors.»', ['Malgré', 'la', 'pluie,', 'je', 'sors'], 'Malgré la pluie, je sors.', 'Concessão.'),
        livre('Escreva em francês: Primeiro, estudo. Depois, eu descanso. Por fim, eu como. Embora esteja cansado, eu continuo.', 'D\'abord, j\'étudie. Ensuite, je me repose. Enfin, je mange. Bien que je sois fatigué, je continue.'),
        lacuna('Il est absent, ___ il est malade. (pois)', ['donc', 'mais', 'car'], 'car', '«Car» é a causa, em registro formal.'),
        lacuna('Il travaille beaucoup ; ___ , il a échoué. (no entanto)', ['pourtant', 'donc', 'car'], 'pourtant', '«Pourtant» marca oposição forte.'),
        lacuna('Même ___ il pleut, je sors. (se)', ['que', 'si', 'qu\''], 'si', '«Même si» + indicativo.'),
        lacuna('Bien qu\'il ___ riche, il est triste. (être)', ['est', 'sera', 'soit'], 'soit', '«Bien que» pede subjuntivo.'),
        lacuna('La ville est chère ; ___ , elle est belle. (em compensação)', ['en revanche', 'c\'est pourquoi', 'par exemple'], 'en revanche', '«En revanche» marca compensação.'),
        mc('Qual conector introduz um exemplo?', ['donc', 'par exemple', 'pourtant'], 'par exemple', '«Par exemple» = por exemplo.'),
        mc('Qual conector exprime consequência?', ['malgré', 'en revanche', 'c\'est pourquoi'], 'c\'est pourquoi', '«C\'est pourquoi» = por isso.'),
        mc('Qual frase está correta?', ['Il pleut ; c\'est pourquoi je reste.', 'Il pleut ; c\'est pourquoi que je reste.', 'Il pleut ; c\'est pourquoi pour je reste.'], 'Il pleut ; c\'est pourquoi je reste.', '«C\'est pourquoi» é seguido direto da frase.'),
        mc('Qual conector marca a conclusão?', ['d\'abord', 'en conclusion', 'de plus'], 'en conclusion', '«En conclusion» fecha o texto.'),
        ordem('Ordene: «Ele é pequeno, mas é forte.»', ['Il', 'est', 'petit,', 'mais', 'il', 'est', 'fort'], 'Il est petit, mais il est fort.', '«Mais» marca a oposição simples.'),
        ordem('Ordene: «Mesmo que eu tenha medo, eu continuo.»', ['Même', 'si', 'j\'ai', 'peur,', 'je', 'continue'], 'Même si j\'ai peur, je continue.', '«Même si» + indicativo.'),
        livre('Escreva em francês: Ele é pequeno, mas forte. Mesmo se chover, nós saímos.', 'Il est petit, mais fort. Même s\'il pleut, nous sortons.'),
        livre('Escreva em francês (use «alors que» e «de plus»): Ele ama o chá, ao passo que ela prefere o café. Além disso, ele estuda muito.', 'Il aime le thé, alors qu\'elle préfère le café. De plus, il étudie beaucoup.'),
      ]),
      producao(5, 'Fale 1 minuto sobre os prós e contras de uma cidade grande, com conectores.'),
    ]),
  ],
});
