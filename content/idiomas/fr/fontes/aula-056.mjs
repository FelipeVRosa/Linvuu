import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 56, titulo: 'Destaque e articuladores do discurso', nivel: 'b1',
  objetivo: 'Colocar ênfase no que importa (c\'est… qui/que, ce qui/ce que) e organizar uma fala ou um texto com articuladores de sequência, oposição e conclusão.',
  nota: 'Você sabe destacar uma ideia e conduzir quem ouve do começo ao fim. Próxima aula: cultura e arte.',
  sessoes: [
    sessao('S1', 'Pôr em destaque', [
      revisao(5, 'Explique em voz alta por que você estuda francês, com «parce que», «grâce à» e «pour».'),
      palavras(8, [
        ['c\'est… qui', 'sé… ki', 'é… que (sujeito)', ''], ['c\'est… que', 'sé… kö', 'é… que (objeto)', ''], ['ce qui', 'sö ki', 'o que (sujeito)', ''], ['ce que', 'sö kö', 'o que (objeto)', ''], ['ce dont', 'sö dõ', 'do que', ''], ['ce à quoi', 'sö a kuá', 'a que', ''], ['voilà', 'vuala', 'eis', ''], ['justement', 'jüstömã', 'justamente', ''],
      ]),
      gramatica(12, 'C\'est moi qui… / Ce qui m\'intéresse…', 'PASSO 1: «c\'est… qui» destaca o sujeito: «C\'est Paul qui a gagné.» (e não outra pessoa) PASSO 2: «c\'est… que» destaca qualquer outro elemento: «C\'est demain que je pars.» «C\'est ce livre que je veux.» PASSO 3: com pronome tônico: «C\'est moi qui ai fait ça.» (verbo concorda com «moi»: «ai») PASSO 4: «ce qui» (sujeito) e «ce que» (objeto) significam «o que» e abrem a frase: «Ce qui m\'intéresse, c\'est la musique.» «Ce que je veux, c\'est du calme.» PASSO 5: «ce dont» com verbos que pedem «de»: «Ce dont j\'ai besoin, c\'est de repos.» PASSO 6: a segunda parte começa com «c\'est» + substantivo ou «c\'est de» + infinitivo: «Ce que j\'aime, c\'est de voyager.»', {
        tag: 'Destaque',
        comparacao: 'em português «foi o Paulo que ganhou» e «o que me interessa é a música» funcionam igual. Cuidado: depois de «c\'est… qui» o verbo concorda com a pessoa destacada: «C\'est moi qui suis arrivé», nunca «qui est arrivé».',
        tabela: [
          { expressao: 'c\'est… qui', funcao: 'destaca o sujeito', exemplo: 'C\'est Paul qui a gagné.' }, { expressao: 'c\'est… que', funcao: 'destaca objeto, lugar, tempo', exemplo: 'C\'est demain que je pars.' }, { expressao: 'ce qui', funcao: 'o que (sujeito)', exemplo: 'Ce qui m\'intéresse, c\'est la musique.' }, { expressao: 'ce que', funcao: 'o que (objeto)', exemplo: 'Ce que je veux, c\'est du calme.' }, { expressao: 'ce dont', funcao: 'o que, com «de»', exemplo: 'Ce dont j\'ai besoin, c\'est de repos.' }, { expressao: 'c\'est moi qui', funcao: 'verbo concorda com moi', exemplo: 'C\'est moi qui ai fait ça.' },
        ],
        erros: [['C\'est moi qui est arrivé.', 'C\'est moi qui suis arrivé.', 'O verbo concorda com «moi».'], ['Ce que m\'intéresse, c\'est la musique.', 'Ce qui m\'intéresse, c\'est la musique.', 'Sujeito: «ce qui».'], ['Ce qui je veux, c\'est du calme.', 'Ce que je veux, c\'est du calme.', 'Objeto: «ce que».'], ['Ce que j\'ai besoin, c\'est de repos.', 'Ce dont j\'ai besoin, c\'est de repos.', '«Avoir besoin de»: «ce dont».']],
      }),
      producao(5, 'Responda em voz alta: «Qu\'est-ce qui t\'intéresse ? Qu\'est-ce que tu veux ?» com «ce qui» e «ce que».'),
    ]),
    sessao('S2', 'Organizar o discurso', [
      revisao(4, 'Faça duas frases com «c\'est… qui» e «c\'est… que».'),
      palavras(6, [
        ['d\'abord', 'dabor', 'primeiro', ''], ['ensuite', 'ãsüit', 'depois', ''], ['enfin', 'ãfẽ', 'por fim', ''], ['en revanche', 'ã rövãx', 'em compensação', ''], ['cependant', 'söpãdã', 'no entanto', ''], ['en effet', 'ã néfé', 'de fato', ''],
      ]),
      gramatica(12, 'Do começo ao fim', 'PASSO 1: sequência: «d\'abord, ensuite (puis), enfin»: «D\'abord, je lis. Ensuite, j\'écris. Enfin, je relis.» PASSO 2: dois lados: «d\'une part… d\'autre part»: «D\'une part, c\'est cher; d\'autre part, c\'est loin.» PASSO 3: oposição: «mais» (neutro), «cependant, pourtant, néanmoins» (formais), «en revanche» (compensação): «Le prix est élevé; en revanche, la qualité est excellente.» PASSO 4: confirmar e explicar: «en effet» (de fato), «c\'est-à-dire» (isto é), «par exemple» (por exemplo): «En effet, les prix ont augmenté.» PASSO 5: concluir: «en conclusion», «pour conclure», «bref»: «Bref, c\'est une bonne idée.» PASSO 6: pontuação: o articulador no início leva vírgula depois: «Cependant, je ne suis pas d\'accord.»', {
        tag: 'Articuladores',
        comparacao: 'em português «no entanto» e «em compensação» se confundem; em francês, «cependant» só opõe, enquanto «en revanche» compensa um ponto negativo com um positivo. «Enfin» no início de lista = «por fim», mas sozinho, no fim de uma frase falada, pode significar «bom, enfim».',
        tabela: [
          { conector: 'd\'abord / ensuite / enfin', funcao: 'sequência', exemplo: 'D\'abord je lis, ensuite j\'écris.' }, { conector: 'd\'une part… d\'autre part', funcao: 'dois aspectos', exemplo: 'D\'une part c\'est cher, d\'autre part c\'est loin.' }, { conector: 'cependant, pourtant', funcao: 'oposição', exemplo: 'Cependant, je ne suis pas d\'accord.' }, { conector: 'en revanche', funcao: 'compensação', exemplo: 'C\'est cher; en revanche, c\'est excellent.' }, { conector: 'en effet', funcao: 'confirma', exemplo: 'En effet, les prix ont augmenté.' }, { conector: 'en conclusion, bref', funcao: 'conclui', exemplo: 'Bref, c\'est une bonne idée.' },
        ],
        erros: [['D\'une part, c\'est cher. D\'autre part, c\'est cher aussi.', 'D\'une part, c\'est cher. D\'autre part, c\'est loin.', 'Os dois aspectos devem ser diferentes.'], ['Cependant je ne suis pas d\'accord, mais bien.', 'Cependant, je ne suis pas d\'accord.', 'Um conector de oposição basta.'], ['En revanche, c\'est cher et c\'est cher aussi.', 'C\'est cher; en revanche, c\'est excellent.', '«En revanche» traz um ponto positivo.'], ['Premièrement, ensuite, après.', 'D\'abord, ensuite, enfin.', 'Sequência natural.']],
      }),
      producao(8, 'Fale 1 minuto sobre os prós e contras de morar numa cidade grande, com «d\'une part… d\'autre part», «cependant» e «en revanche».'),
    ]),
    sessao('S3', 'Dislocação e fala natural', [
      revisao(4, 'Diga a sequência de uma receita com «d\'abord, ensuite, enfin».'),
      palavras(5, [
        ['moi, je', 'muá, jö', 'eu, quanto a mim', ''], ['quant à', 'kã ta', 'quanto a', ''], ['en ce qui concerne', 'ã sö ki kõsérn', 'no que diz respeito a', ''], ['à mon avis', 'a mõ navi', 'na minha opinião', ''], ['d\'ailleurs', 'dailör', 'aliás', ''],
      ]),
      gramatica(8, 'Ênfase na fala', 'PASSO 1: dislocação à esquerda: o tema vem primeiro e um pronome o retoma: «Ce film, je l\'ai vu trois fois.» PASSO 2: dislocação à direita: «Je l\'ai vu trois fois, ce film.» PASSO 3: «moi, je…» e «toi, tu…» marcam contraste: «Moi, je préfère le thé.» PASSO 4: «quant à» e «en ce qui concerne» mudam de assunto: «Quant au prix, il est correct.» PASSO 5: «à mon avis» e «d\'ailleurs» ligam opinião e acréscimo.', {
        tag: 'Ênfase',
        comparacao: 'em português também dizemos «esse filme, eu já vi». O francês faz isso o tempo todo, mas repete o objeto com um pronome: «Ce film, je l\'ai vu». Sem o pronome a frase fica estranha.',
        tabela: [
          { expressao: 'Ce film, je l\'ai vu.', funcao: 'tema à esquerda', exemplo: 'Ce film, je l\'ai vu trois fois.' }, { expressao: 'Je l\'ai vu, ce film.', funcao: 'tema à direita', exemplo: 'Je l\'ai vu trois fois, ce film.' }, { expressao: 'Moi, je…', funcao: 'contraste', exemplo: 'Moi, je préfère le thé.' }, { expressao: 'quant à', funcao: 'muda de assunto', exemplo: 'Quant au prix, il est correct.' }, { expressao: 'en ce qui concerne', funcao: 'assunto, formal', exemplo: 'En ce qui concerne le prix…' }, { expressao: 'd\'ailleurs', funcao: 'acréscimo', exemplo: 'D\'ailleurs, il est parti.' },
        ],
        erros: [['Ce film, j\'ai vu trois fois.', 'Ce film, je l\'ai vu trois fois.', 'Falta o pronome de retomada.'], ['Moi je préfère moi le thé.', 'Moi, je préfère le thé.', 'Um «moi» basta.'], ['Quant le prix, il est correct.', 'Quant au prix, il est correct.', '«Quant à» + artigo contraído.'], ['A mon avis que c\'est bien.', 'À mon avis, c\'est bien.', '«À mon avis», sem «que».']],
      }),
      dialogo(8, 'Au café / No café', 'Sophie e Julien debatem um filme.', [
        ['Sophie', 'Ce film, tu l\'as vu ? Moi, je l\'ai adoré.', 'Esse filme, você viu? Eu adorei.'], ['Julien', 'Oui. Ce qui m\'a plu, c\'est la musique. En revanche, l\'histoire est un peu lente.', 'Vi. O que me agradou foi a música. Em compensação, a história é um pouco lenta.'], ['Sophie', 'D\'abord, il faut dire que c\'est un premier film. Ensuite, les acteurs sont excellents.', 'Primeiro, é preciso dizer que é um primeiro filme. Depois, os atores são excelentes.'], ['Julien', 'C\'est vrai. Cependant, quant à la fin, je suis déçu.', 'É verdade. No entanto, quanto ao final, fiquei decepcionado.'], ['Sophie', 'À mon avis, c\'est justement ce qui la rend intéressante.', 'Na minha opinião, é justamente isso que a torna interessante.'], ['Julien', 'Bref, on n\'est pas d\'accord, mais c\'est un bon film.', 'Enfim, não concordamos, mas é um bom filme.'],
      ]),
      producao(5, 'Dê sua opinião em voz alta sobre um filme ou livro, com «ce qui m\'a plu», «en revanche» e «bref».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 56', [
      revisao(5, 'Explique em voz alta, em três etapas, como você prepara o café da manhã.'),
      exercicios(20, [
        ouvir('C\'est moi qui suis arrivé', ['C\'est moi qui suis arrivé', 'C\'est moi qui est arrivé', 'C\'est moi que suis arrivé'], 'C\'est moi qui suis arrivé', 'Verbo concorda com «moi».'), ouvir('Ce qui m\'intéresse, c\'est la musique', ['Ce qui m\'intéresse, c\'est la musique', 'Ce que m\'intéresse, c\'est la musique', 'Ce qui je veux, c\'est la musique'], 'Ce qui m\'intéresse, c\'est la musique', 'Sujeito: «ce qui».'), ouvir('Ce film, je l\'ai vu trois fois', ['Ce film, je l\'ai vu trois fois', 'Ce film, j\'ai vu trois fois', 'Ce film, je lui ai vu trois fois'], 'Ce film, je l\'ai vu trois fois', 'Retomada com «l\'».'),
        ditado('Ce dont j\'ai besoin, c\'est de repos', 'Escreva: Ce dont j\'ai besoin, c\'est de repos.'), ditado('C\'est cher; en revanche, c\'est excellent', 'Escreva: C\'est cher; en revanche, c\'est excellent.'), ditado('Quant au prix, il est correct', 'Escreva: Quant au prix, il est correct.'),
        mc('Destaca o sujeito:', ['c\'est… qui', 'c\'est… que', 'ce dont'], 'c\'est… qui', 'Sujeito.'), mc('«O que eu quero é calma»:', ['Ce que je veux, c\'est du calme.', 'Ce qui je veux, c\'est du calme.', 'Ce dont je veux, c\'est du calme.'], 'Ce que je veux, c\'est du calme.', 'Objeto direto.'), mc('Compensação de um ponto negativo:', ['en revanche', 'enfin', 'd\'abord'], 'en revanche', 'Compensa.'), mc('Sequência correta:', ['d\'abord, ensuite, enfin', 'enfin, d\'abord, ensuite', 'ensuite, enfin, d\'abord'], 'd\'abord, ensuite, enfin', 'Ordem lógica.'),
        lacuna('C\'est Paul ___ a gagné.', ['qui', 'que', 'dont'], 'qui', 'Sujeito.'), lacuna('C\'est demain ___ je pars.', ['que', 'qui', 'dont'], 'que', 'Tempo: «que».'), lacuna('Ce ___ j\'ai besoin, c\'est de repos.', ['dont', 'que', 'qui'], 'dont', '«Avoir besoin de».'), lacuna('___ au prix, il est correct.', ['Quant', 'Quand', 'Qu\'en'], 'Quant', '«Quant à».'),
        ordem('Ordene: «Ce film, je l\'ai vu trois fois.»', ['Ce', 'film,', 'je', 'l\'ai', 'vu', 'trois', 'fois'], 'Ce film, je l\'ai vu trois fois.', 'Dislocação.'), ordem('Ordene: «D\'abord, je lis; ensuite, j\'écris.»', ['D\'abord,', 'je', 'lis;', 'ensuite,', 'j\'écris'], 'D\'abord, je lis; ensuite, j\'écris.', 'Sequência.'),
        livre('Escreva em francês: Foi ele quem ganhou. O que me interessa é a música. Primeiro leio, depois escrevo, por fim releio.', 'C\'est lui qui a gagné. Ce qui m\'intéresse, c\'est la musique. D\'abord je lis, ensuite j\'écris, enfin je relis.'),
      ]),
      producao(5, 'Fale 1 minuto sobre um tema de que você gosta, usando pelo menos quatro articuladores.'),
    ]),
  ],
});
