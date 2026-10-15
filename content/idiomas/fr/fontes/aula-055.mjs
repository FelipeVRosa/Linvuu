import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 55, titulo: 'Causa, consequência, finalidade e nominalização', nivel: 'b1',
  objetivo: 'Explicar por que algo acontece, qual é o resultado e para que serve, e transformar verbos em substantivos para escrever de forma mais formal.',
  nota: 'Você agora liga ideias com precisão: causa, consequência e objetivo. Próxima aula: destacar o que importa e organizar o discurso.',
  sessoes: [
    sessao('S1', 'A causa', [
      revisao(5, 'Responda em voz alta: «Tu me le donnes ? Je te le donne.» Troque os pronomes por outros nomes e repita três vezes.'),
      palavras(8, [
        ['parce que', 'pars kö', 'porque', ''], ['car', 'kar', 'pois (escrita)', ''], ['puisque', 'püisk', 'já que', ''], ['comme', 'kom', 'como (causa)', ''], ['grâce à', 'grás a', 'graças a', ''], ['à cause de', 'a kóz dö', 'por causa de', ''], ['en raison de', 'ã rézõ dö', 'em razão de', ''], ['étant donné que', 'étã doné kö', 'dado que', ''],
      ]),
      gramatica(12, 'Dizer por quê', 'PASSO 1: «parce que» responde a «pourquoi» e traz a causa nova: «Je reste à la maison parce que je suis malade.» PASSO 2: «puisque» e «comme» trazem uma causa que o outro já conhece; «comme» vem no início: «Comme il pleut, je reste.» PASSO 3: «car» é escrito e fica no meio da frase, nunca no início: «Il est parti, car il était fatigué.» PASSO 4: com substantivo, use «à cause de» (causa negativa ou neutra) e «grâce à» (causa positiva): «À cause du trafic, je suis en retard.» «Grâce à toi, j\'ai réussi.» PASSO 5: «en raison de» é formal: «Le vol est annulé en raison de la grève.» PASSO 6: depois de «parce que», «puisque», «comme» vem um verbo; depois de «à cause de», «grâce à», «en raison de» vem um substantivo.', {
        tag: 'Causa',
        comparacao: 'em português «porque» faz tudo. Em francês, a escolha depende de a causa ser nova (parce que), já conhecida (puisque, comme) ou escrita formal (car, étant donné que). E «par que» não existe: «parce que» se escreve junto.',
        tabela: [
          { conector: 'parce que', funcao: 'causa nova, com verbo', exemplo: 'Je reste parce que je suis malade.' }, { conector: 'puisque', funcao: 'causa já conhecida', exemplo: 'Puisque tu es là, aide-moi.' }, { conector: 'comme', funcao: 'causa no início', exemplo: 'Comme il pleut, je reste.' }, { conector: 'car', funcao: 'escrita, no meio', exemplo: 'Il est parti, car il était fatigué.' }, { conector: 'à cause de', funcao: 'substantivo, negativo', exemplo: 'À cause du trafic, je suis en retard.' }, { conector: 'grâce à', funcao: 'substantivo, positivo', exemplo: 'Grâce à toi, j\'ai réussi.' },
        ],
        erros: [['Car il pleut, je reste.', 'Comme il pleut, je reste.', '«Car» não abre a frase.'], ['À cause de tu, j\'ai perdu.', 'À cause de toi, j\'ai perdu.', 'Pronome tônico depois de preposição.'], ['Grâce à la grève, je suis en retard.', 'À cause de la grève, je suis en retard.', 'Causa negativa: «à cause de».'], ['Je reste à cause que je suis malade.', 'Je reste parce que je suis malade.', '«À cause que» não existe.']],
      }),
      producao(5, 'Responda em voz alta: «Pourquoi tu apprends le français ?» com «parce que», «grâce à» e «comme», três respostas diferentes.'),
    ]),
    sessao('S2', 'A consequência', [
      revisao(4, 'Dê duas causas: uma com «parce que» e outra com «à cause de».'),
      palavras(6, [
        ['donc', 'dõk', 'portanto', ''], ['alors', 'alor', 'então', ''], ['c\'est pourquoi', 'sé purkuá', 'é por isso que', ''], ['par conséquent', 'par kõsékã', 'por conseguinte', ''], ['si bien que', 'si bién kö', 'de modo que', ''], ['tellement… que', 'télmã… kö', 'tão… que', ''],
      ]),
      gramatica(12, 'Dizer o resultado', 'PASSO 1: «donc» e «alors» ligam causa e resultado em frases curtas: «Il pleut, donc je reste.» PASSO 2: «c\'est pourquoi» e «par conséquent» são mais formais e abrem a frase seguinte: «Le prix a augmenté. C\'est pourquoi les ventes baissent.» PASSO 3: «si bien que» liga duas orações: «Il a beaucoup travaillé, si bien qu\'il a réussi.» PASSO 4: intensidade + resultado: «tellement / si + adjetivo + que»: «Il est tellement fatigué qu\'il dort.» PASSO 5: «tant de / tellement de + substantivo + que»: «Il y avait tant de monde que nous sommes partis.» PASSO 6: «de sorte que» e «si bien que» com fato real usam indicativo: «Il a parlé fort, de sorte que tout le monde a entendu.» PASSO 7: depois de «aussi» no início, a frase inverte o sujeito (muito formal): «Aussi a-t-il refusé.»', {
        tag: 'Consequência',
        comparacao: 'em português «tão… que» e «tanto… que» têm paralelo exato: «tellement… que», «tant de… que». A armadilha é usar «donc» no início de um parágrafo formal; prefira «par conséquent» ou «c\'est pourquoi».',
        tabela: [
          { conector: 'donc', funcao: 'resultado simples', exemplo: 'Il pleut, donc je reste.' }, { conector: 'alors', funcao: 'resultado, falado', exemplo: 'Il est tard, alors on part.' }, { conector: 'c\'est pourquoi', funcao: 'resultado formal', exemplo: 'C\'est pourquoi les ventes baissent.' }, { conector: 'par conséquent', funcao: 'resultado formal', exemplo: 'Par conséquent, nous refusons.' }, { conector: 'si bien que', funcao: 'resultado de um fato', exemplo: 'Il a travaillé, si bien qu\'il a réussi.' }, { conector: 'tellement… que', funcao: 'intensidade + resultado', exemplo: 'Il est tellement fatigué qu\'il dort.' },
        ],
        erros: [['Il est tellement fatigué qu\'il dormir.', 'Il est tellement fatigué qu\'il dort.', 'Depois de «que», verbo conjugado.'], ['Il y avait tellement monde que nous sommes partis.', 'Il y avait tellement de monde que nous sommes partis.', '«Tellement de» + substantivo.'], ['Il a travaillé donc il a réussi, c\'est pourquoi donc.', 'Il a travaillé, donc il a réussi.', 'Um conector basta.'], ['Il était si fatigué de sorte qu\'il dormait.', 'Il était si fatigué qu\'il dormait.', '«Si… que», sem «de sorte».']],
      }),
      producao(8, 'Fale 1 minuto: conte um dia ruim usando «à cause de», «tellement… que», «donc» e «c\'est pourquoi».'),
    ]),
    sessao('S3', 'Finalidade e nominalização', [
      revisao(4, 'Diga duas frases com «tellement… que».'),
      palavras(5, [
        ['pour', 'pur', 'para', ''], ['afin de', 'afẽ dö', 'a fim de', ''], ['afin que', 'afẽ kö', 'a fim de que', ''], ['dans le but de', 'dã lö büt dö', 'com o objetivo de', ''], ['la décision', 'la désizió', 'a decisão', ''],
      ]),
      gramatica(8, 'Para que e substantivos', 'PASSO 1: mesmo sujeito: «pour» ou «afin de» + infinitivo: «Je travaille pour gagner de l\'argent.» PASSO 2: sujeitos diferentes: «pour que» ou «afin que» + subjuntivo: «Je t\'explique pour que tu comprennes.» PASSO 3: «dans le but de» + infinitivo é formal: «Dans le but de réduire les coûts, l\'entreprise ferme.» PASSO 4: nominalização transforma verbo em substantivo e deixa o texto formal: «décider → la décision», «arriver → l\'arrivée», «augmenter → l\'augmentation», «réussir → la réussite». PASSO 5: «Il a décidé de partir» vira «Sa décision de partir» ou «Son départ».', {
        tag: 'Finalidade',
        comparacao: 'em português «para que» também pede subjuntivo («para que você entenda»). A diferença é que, quando o sujeito é o mesmo, o francês exige o infinitivo: «pour comprendre», nunca «pour que je comprenne».',
        tabela: [
          { conector: 'pour + infinitivo', funcao: 'mesmo sujeito', exemplo: 'Je travaille pour gagner de l\'argent.' }, { conector: 'afin de + infinitivo', funcao: 'mesmo sujeito, formal', exemplo: 'Afin de réussir, il étudie.' }, { conector: 'pour que + subjuntivo', funcao: 'sujeitos diferentes', exemplo: 'Je t\'explique pour que tu comprennes.' }, { conector: 'afin que + subjuntivo', funcao: 'sujeitos diferentes, formal', exemplo: 'Afin que tout soit clair…' }, { conector: 'décider → décision', funcao: 'nominalização', exemplo: 'Sa décision est claire.' }, { conector: 'arriver → arrivée', funcao: 'nominalização', exemplo: 'Son arrivée est prévue lundi.' },
        ],
        erros: [['Je travaille pour que je gagne de l\'argent.', 'Je travaille pour gagner de l\'argent.', 'Mesmo sujeito: infinitivo.'], ['Je t\'explique pour que tu comprends.', 'Je t\'explique pour que tu comprennes.', 'Subjuntivo.'], ['Afin de que tout soit clair.', 'Afin que tout soit clair.', '«Afin que», sem «de».'], ['L\'arriver du train est prévu.', 'L\'arrivée du train est prévue.', 'Substantivo: «arrivée».']],
      }),
      dialogo(8, 'À la réunion / Na reunião', 'Claire e Nicolas discutem um atraso.', [
        ['Claire', 'Nicolas, pourquoi le projet a-t-il du retard ?', 'Nicolas, por que o projeto está atrasado?'], ['Nicolas', 'À cause d\'un problème technique. Comme le serveur est tombé, nous avons perdu deux jours.', 'Por causa de um problema técnico. Como o servidor caiu, perdemos dois dias.'], ['Claire', 'C\'est pourquoi la livraison est repoussée ?', 'É por isso que a entrega foi adiada?'], ['Nicolas', 'Oui. Nous avons tellement de travail que nous ne pouvons pas finir à temps.', 'Sim. Temos tanto trabalho que não conseguimos terminar a tempo.'], ['Claire', 'Que faire pour que le client ne s\'inquiète pas ?', 'O que fazer para que o cliente não se preocupe?'], ['Nicolas', 'Je lui écris aujourd\'hui afin de tout expliquer.', 'Escrevo a ele hoje a fim de explicar tudo.'],
      ]),
      producao(5, 'Responda em voz alta: «Pourquoi est-ce que tu étudies ?» usando «pour», «afin de» e «pour que».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 55', [
      revisao(5, 'Explique em voz alta uma decisão sua, usando causa e finalidade.'),
      exercicios(20, [
        ouvir('Comme il pleut, je reste', ['Comme il pleut, je reste', 'Car il pleut, je reste', 'Parce qu\'il pleut, je reste pas'], 'Comme il pleut, je reste', 'Escuta: «comme» no início.'), ouvir('Il est tellement fatigué qu\'il dort', ['Il est tellement fatigué qu\'il dort', 'Il est tellement fatigué qu\'il dormir', 'Il est tellement fatigué il dort'], 'Il est tellement fatigué qu\'il dort', 'Escuta: «tellement… que».'), ouvir('Je t\'explique pour que tu comprennes', ['Je t\'explique pour que tu comprennes', 'Je t\'explique pour comprendre', 'Je t\'explique pour que tu comprends'], 'Je t\'explique pour que tu comprennes', 'Subjuntivo.'),
        ditado('Grâce à toi, j\'ai réussi', 'Escreva: Grâce à toi, j\'ai réussi.'), ditado('Par conséquent, nous refusons', 'Escreva: Par conséquent, nous refusons.'), ditado('Son arrivée est prévue lundi', 'Escreva: Son arrivée est prévue lundi.'),
        mc('Causa positiva com substantivo:', ['grâce à', 'à cause de', 'puisque'], 'grâce à', 'Positiva.'), mc('Qual conector NÃO abre a frase?', ['car', 'comme', 'puisque'], 'car', 'Escrito, no meio.'), mc('Mesmo sujeito, finalidade:', ['Je travaille pour gagner de l\'argent.', 'Je travaille pour que je gagne de l\'argent.', 'Je travaille pour gagné.'], 'Je travaille pour gagner de l\'argent.', 'Infinitivo.'), mc('Nominalização de «décider»:', ['la décision', 'le décidé', 'la décidance'], 'la décision', 'Substantivo.'),
        lacuna('Je reste ___ je suis malade.', ['parce que', 'à cause de', 'grâce à'], 'parce que', 'Verbo depois.'), lacuna('___ du trafic, je suis en retard.', ['À cause', 'Parce', 'Donc'], 'À cause', '«À cause de» + substantivo.'), lacuna('Il y avait ___ de monde que nous sommes partis.', ['tant', 'si', 'aussi'], 'tant', '«Tant de».'), lacuna('Je t\'explique pour que tu ___ . (comprendre)', ['comprennes', 'comprends', 'comprendre'], 'comprennes', 'Subjuntivo.'),
        ordem('Ordene: «Il pleut, donc je reste.»', ['Il', 'pleut,', 'donc', 'je', 'reste'], 'Il pleut, donc je reste.', 'Causa, resultado.'), ordem('Ordene: «Afin de réussir, il étudie.»', ['Afin', 'de', 'réussir,', 'il', 'étudie'], 'Afin de réussir, il étudie.', 'Finalidade.'),
        livre('Escreva em francês: Como choveu, ficamos em casa. Ele trabalhou tanto que conseguiu. Explico para que você entenda.', 'Comme il a plu, nous sommes restés à la maison. Il a tellement travaillé qu\'il a réussi. Je t\'explique pour que tu comprennes.'),
        lacuna('___ il pleut, je reste. (Como)', ['Car', 'Comme', 'Parce'], 'Comme', '«Comme» abre a frase com a causa.'),
        lacuna('Le vol est annulé ___ de la grève. (em razão)', ['grâce', 'parce que', 'en raison'], 'en raison', '«En raison de» + substantivo, formal.'),
        lacuna('Il a beaucoup travaillé, si bien ___ il a réussi. (que)', ['qu\'', 'que', 'de'], 'qu\'', '«Si bien que», com elisão diante de vogal.'),
        lacuna('Je travaille ___ gagner de l\'argent. (para)', ['pour que', 'pour', 'afin que'], 'pour', 'Mesmo sujeito: «pour» + infinitivo.'),
        lacuna('L\'___ du train est prévue à midi. (chegada)', ['arriver', 'arrivé', 'arrivée'], 'arrivée', 'Nominalização de «arriver»: «l\'arrivée».'),
        mc('Qual frase está correta?', ['Il est parti, car il était fatigué.', 'Car il était fatigué, il est parti.', 'Il est parti car que fatigué.'], 'Il est parti, car il était fatigué.', '«Car» fica no meio da frase.'),
        mc('Qual é a nominalização de «augmenter»?', ['l\'augmenter', 'l\'augmentation', 'l\'augmentant'], 'l\'augmentation', '«Augmenter» → «l\'augmentation».'),
        mc('Com sujeitos diferentes, qual frase está correta?', ['Je parle lentement pour tu comprendre.', 'Je parle lentement afin de tu comprennes.', 'Je parle lentement pour que tu comprennes.'], 'Je parle lentement pour que tu comprennes.', '«Pour que» + subjuntivo.'),
        mc('Qual conector é o mais formal?', ['par conséquent', 'alors', 'donc'], 'par conséquent', '«Par conséquent» é o mais formal.'),
        ordem('Ordene: «Como está doente, ele fica em casa.»', ['Comme', 'il', 'est', 'malade,', 'il', 'reste', 'à', 'la', 'maison'], 'Comme il est malade, il reste à la maison.', '«Comme» abre a frase.'),
        ordem('Ordene: «Havia tanto barulho que eu saí.»', ['Il', 'y', 'avait', 'tant', 'de', 'bruit', 'que', 'je', 'suis', 'parti'], 'Il y avait tant de bruit que je suis parti.', '«Tant de» + substantivo + «que».'),
        livre('Escreva em francês: Por causa da greve, o voo foi cancelado. Eu trabalho para ganhar dinheiro.', 'À cause de la grève, le vol a été annulé. Je travaille pour gagner de l\'argent.'),
        livre('Escreva em francês (use «tellement»): Ele estava tão cansado que dormiu. Eu te explico a fim de que tudo fique claro.', 'Il était tellement fatigué qu\'il a dormi. Je t\'explique afin que tout soit clair.'),
      ]),
      producao(5, 'Fale 1 minuto sobre por que você estuda francês e para que vai usá-lo.'),
    ]),
  ],
});
