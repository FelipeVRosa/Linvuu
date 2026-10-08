import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 59, titulo: 'Estratégias: parafrasear, pedir ajuda e ganhar tempo', nivel: 'b1',
  objetivo: 'Continuar a conversa quando falta uma palavra: explicar com outras palavras (parafrasear), pedir repetição e esclarecimento com educação, confirmar o que foi entendido e ganhar tempo para pensar sem ficar em silêncio.',
  nota: 'Você já sabe o que fazer quando falta uma palavra, quando não entendeu ou quando precisa de um instante para pensar. Isso vale mais do que saber muitas palavras: mantém a conversa viva. Próxima aula: pronomes e preposições difíceis.',
  sessoes: [
    sessao('S1', 'Parafrasear: dizer com outras palavras', [
      revisao(5, 'Reveja a aula 58. Diga em voz alta três frases para uma operadora ou um banco, com «quisiera», «llevo… sin» e «se puede».'),
      palavras(8, [
        ['Es una cosa que sirve para…', 'es úna kósa ke sírbe pára', 'é uma coisa que serve para…', ''], ['Se parece a…', 'se paréthe a', 'parece com…', ''], ['Es lo contrario de…', 'es lo kontrário de', 'é o contrário de…', ''], ['una especie de…', 'úna espéthie de', 'uma espécie de…', ''],
        ['o sea', 'o séa', 'ou seja', ''], ['es decir', 'es dethír', 'isto é', ''], ['mejor dicho', 'mehór dítcho', 'melhor dizendo', ''], ['No me sale la palabra.', 'no me sále la palábra', 'a palavra não me vem.', ''],
      ]),
      gramatica(12, 'Quando falta uma palavra: explique em vez de parar', 'PASSO 1: se não souber uma palavra, não pare nem fale em português: descreva. A fórmula mais útil é «Es una cosa que sirve para…» + infinitivo: «Es una cosa que sirve para abrir botellas.» PASSO 2: para uma pessoa, use «Es la persona que…»: «Es la persona que arregla los coches». Para um lugar, «Es un sitio donde…»: «Es un sitio donde se compra pan». PASSO 3: para comparar, use «se parece a», «es parecido a» ou «una especie de»: «Es parecido a una silla, pero más cómodo». PASSO 4: para dar o contrário, use «lo contrario de»: «Es lo contrario de barato». Repare na preposição: «de», e nunca «que». PASSO 5: para dizer a categoria, use «es un tipo de…»: «Es un tipo de fruta». PASSO 6: para avisar que falta a palavra, diga «No me sale la palabra» ou «No recuerdo cómo se dice»; depois explique. PASSO 7: para reformular, use «o sea», «es decir», «mejor dicho» e «en otras palabras»: «Llegué tarde; o sea, perdí el tren», «Fui el martes, mejor dicho, el miércoles». PASSO 8: «cosa» é a palavra coringa («una cosa»), e na linguagem falada também se ouve «cacharro» (aparelho) e «trasto» (objeto velho); em registro formal prefira «objeto» ou «aparato». PASSO 9: não invente palavras juntando espanhol e português («portunhol»): se tiver dúvida, explique com palavras simples que você conhece bem.', {
        tag: 'Estratégias',
        comparacao: 'em português dizemos «é uma coisa que serve para…», «parece com…» e «ou seja», e o espanhol usa as mesmas ideias: «es una cosa que sirve para…», «se parece a…» e «o sea». As armadilhas são a preposição de «se parece a» (e não «com») e «lo contrario de» (e não «que»). Também: «o sea» é muito frequente na fala, mas não deve abrir toda frase.',
        exemplos: [
          ['Es una cosa que sirve para abrir botellas.', 'É uma coisa que serve para abrir garrafas.'],
          ['Es un sitio donde se compra pan.', 'É um lugar onde se compra pão.'],
          ['Es la persona que arregla los coches.', 'É a pessoa que conserta os carros.'],
          ['Es parecido a una silla, pero más cómodo.', 'É parecido com uma cadeira, mas mais confortável.'],
          ['Es lo contrario de «barato».', 'É o contrário de «barato».'],
          ['No me sale la palabra. Es lo que se pone en la cama para dormir.', 'A palavra não me vem. É o que se põe na cama para dormir.'],
          ['Llegué tarde; es decir, perdí el tren.', 'Cheguei tarde; isto é, perdi o trem.'],
          ['Fui el martes, mejor dicho, el miércoles.', 'Fui na terça, melhor dizendo, na quarta.'],
        ],
        tabela: [
          { estrategia: 'objeto', frase: 'Es una cosa que sirve para…', exemplo: 'Es una cosa que sirve para cortar papel.' },
          { estrategia: 'pessoa', frase: 'Es la persona que…', exemplo: 'Es la persona que cuida a los enfermos.' },
          { estrategia: 'lugar', frase: 'Es un sitio donde…', exemplo: 'Es un sitio donde se compran medicinas.' },
          { estrategia: 'comparação', frase: 'Se parece a… / es parecido a…', exemplo: 'Se parece a una taza, pero es más grande.' },
          { estrategia: 'contrário', frase: 'Es lo contrario de…', exemplo: 'Es lo contrario de «subir».' },
          { estrategia: 'reformular', frase: 'o sea / es decir / mejor dicho', exemplo: 'Vivo cerca; es decir, voy a pie.' },
        ],
        erros: [['Es una cosa que sirve de abrir botellas.', 'Es una cosa que sirve para abrir botellas.', '«Servir para» indica a finalidade; «servir de» significa «fazer o papel de».'], ['Es un sitio que se compra pan.', 'Es un sitio donde se compra pan.', 'Para lugar, use «donde».'], ['Es lo contrario que grande.', 'Es lo contrario de grande.', 'Depois de «lo contrario», vem «de».'], ['Es parecido que una silla.', 'Es parecido a una silla.', '«Parecido» e «parecerse» pedem «a».']],
      }),
      producao(5, 'Escolha cinco objetos da sua casa e explique cada um em espanhol, sem dizer o nome: «Es una cosa que sirve para… Se parece a…». Peça a um amigo que adivinhe.'),
    ]),
    sessao('S2', 'Pedir ajuda, repetição e esclarecimento', [
      revisao(4, 'Descreva em voz alta uma palavra que você esqueceu, usando «sirve para», «es lo contrario de» e «se parece a».'),
      palavras(6, [
        ['¿Puede repetirlo, por favor?', 'puéde repetírlo por fabór', 'o senhor, a senhora pode repetir?', ''], ['¿Podría hablar más despacio?', 'podría ablár más despáthio', 'poderia falar mais devagar?', ''], ['No lo he entendido.', 'no lo e entendído', 'eu não entendi.', ''],
        ['¿Qué significa…?', 'ké signifíka', 'o que significa…?', ''], ['¿Cómo se escribe?', 'cómo se eskríbe', 'como se escreve?', ''], ['¿Quiere decir que…?', 'kiére dethír ke', 'quer dizer que…?', ''],
      ]),
      gramatica(12, 'Pedir repetição, pedir ajuda e confirmar', 'PASSO 1: para pedir que repitam, use «¿Puedes repetirlo?» (tú) ou «¿Puede repetirlo, por favor?» (usted). Também se diz «¿Cómo dices?» e «¿Cómo dice?»; na linguagem falada basta «¿Perdón?» ou «¿Cómo?». Em alguns países, como o México, ouve-se «¿Mande?» em lugar de «¿Cómo?». PASSO 2: para pedir que falem devagar, use «más despacio», nunca «devagar»: «¿Podría hablar más despacio?». Também: «más alto» (mais alto, com mais volume) e «más claro». PASSO 3: para dizer que não entendeu, use «No lo he entendido» ou «No he entendido la última parte». Para dizer que não ouviu bem, diga «No te he oído bien»: «oír» é perceber o som; «escuchar» é prestar atenção; «entender» é compreender. PASSO 4: para perguntar um significado ou uma forma, use «¿Qué significa «cronograma»?», «¿Cómo se escribe?», «¿Cómo se pronuncia?» e «¿Cómo se dice «cronograma» en inglés?». Não há «de» depois de «significa». PASSO 5: para confirmar o que entendeu, use «¿Quiere decir que…?», «Entonces, ¿…?», «A ver si lo he entendido: …» e «Si no me equivoco, …». Depois de «a ver si», use o indicativo. PASSO 6: para pedir ajuda, use «¿Me podría ayudar con…?», «Necesito ayuda con…» e «¿Le importa repetirlo?». «Importar» aqui funciona como em «¿Le importa?»: pergunta se a pessoa se incomoda. PASSO 7: os pronomes: «¿Puede explicármelo?» e «¿Me lo puede explicar?» significam o mesmo (aula 60 mostra a regra completa). PASSO 8: termine com «Gracias, ahora lo entiendo» ou «Perfecto, ya lo tengo». Isso sinaliza que a conversa pode continuar.', {
        tag: 'Estratégias',
        comparacao: 'em português dizemos «pode repetir?», «mais devagar» e «ou seja». O espanhol diz «¿puede repetir?», «más despacio» e «o sea». Cuidado: «devagar» não existe em espanhol, e «oír», «escuchar» e «entender» são três verbos diferentes.',
        tabelas: [
          { titulo: 'Pedidos úteis', linhas: [
            { pedido: 'repetir', informal: '¿Puedes repetirlo?', formal: '¿Puede repetirlo, por favor?' },
            { pedido: 'falar devagar', informal: '¿Puedes hablar más despacio?', formal: '¿Podría hablar más despacio?' },
            { pedido: 'significado', informal: '¿Qué significa…?', formal: '¿Qué quiere decir…?' },
            { pedido: 'confirmar', informal: '¿Quieres decir que…?', formal: '¿Quiere decir que…?' },
            { pedido: 'ajuda', informal: '¿Me puedes ayudar?', formal: '¿Me podría ayudar?' },
          ] },
          { titulo: 'oír, escuchar, entender', linhas: [
            { verbo: 'oír', ideia: 'perceber o som', exemplo: 'No te oigo bien.' }, { verbo: 'escuchar', ideia: 'ouvir com atenção', exemplo: 'Escucho música.' }, { verbo: 'entender', ideia: 'compreender', exemplo: 'No lo entiendo.' },
          ] },
        ],
        erros: [['Hable más devagar, por favor.', 'Hable más despacio, por favor.', '«Devagar» não existe em espanhol: use «despacio».'], ['¿Puedes me explicar?', '¿Puedes explicarme? / ¿Me puedes explicar?', 'O pronome vai antes do verbo conjugado ou colado ao infinitivo, não no meio.'], ['¿Qué significa de «cronograma»?', '¿Qué significa «cronograma»?', '«Significar» não leva «de».'], ['Entiendo nada.', 'No entiendo nada.', 'Com «nada» depois do verbo, é preciso o «no» antes.']],
      }),
      producao(8, 'Faça um diálogo curto: alguém fala depressa e você (1) pede que repita, (2) pede que fale mais devagar, (3) pergunta o que significa uma palavra e (4) confirma o que entendeu com «Entonces, ¿quiere decir que…?». Faça os dois papéis em voz alta.'),
    ]),
    sessao('S3', 'Ganhar tempo para pensar', [
      revisao(4, 'Peça em voz alta cinco coisas: repetir, falar devagar, explicar uma palavra, confirmar e pedir ajuda.'),
      palavras(5, [
        ['a ver', 'a bér', 'vamos ver', ''], ['pues', 'puéss', 'bem, então', ''], ['es que…', 'es ke', 'é que…', ''], ['la verdad es que…', 'la berdád es ke', 'a verdade é que…', ''], ['Déjame pensar un momento.', 'déhame pensár un moménto', 'deixe-me pensar um momento.', ''],
      ]),
      gramatica(8, 'Ganhar tempo sem ficar em silêncio', 'PASSO 1: use um marcador curto no início da resposta: «A ver…», «Pues…», «Bueno…», «Veamos…». São naturais em espanhol. PASSO 2: peça tempo de forma clara: «Déjame pensar un momento» (tú), «Déjeme pensar un momento» (usted), «Un momento, que lo pienso». O verbo «pensar» muda a vogal: «pienso», não «penso». PASSO 3: repita a pergunta com as suas palavras: «¿Que qué pienso del tema? Pues…». Isso dá tempo e mostra que você entendeu. PASSO 4: comece pelo que sabe: «La verdad es que no lo sé con seguridad, pero creo que…». Atenção: «la verdad es que» não leva «de». PASSO 5: elogie a pergunta: «Es una buena pregunta». PASSO 6: se errar, corrija-se: «Perdón, quería decir…» ou «Mejor dicho, …». PASSO 7: não encha todo silêncio com «eh…»; um «pues…» e uma pausa curta bastam. No México e em outros lugares ouve-se «este…» como marcador.', {
        tag: 'Estratégias',
        comparacao: 'em português dizemos «bem…», «então…» e «é que…», e o espanhol faz o mesmo com «pues…», «a ver…» e «es que…». A diferença é que «es que» introduz uma explicação ou desculpa («Es que no tengo tiempo»), e não é traduzido por «é porque».',
        tabela: [
          { funcao: 'começar a resposta', frase: 'A ver… / Pues… / Bueno…' },
          { funcao: 'pedir tempo', frase: 'Déjame pensar un momento.' },
          { funcao: 'elogiar a pergunta', frase: 'Es una buena pregunta.' },
          { funcao: 'repetir a pergunta', frase: '¿Que qué pienso? Pues…' },
          { funcao: 'admitir limite', frase: 'La verdad es que no lo sé con seguridad.' },
          { funcao: 'corrigir-se', frase: 'Perdón, quería decir…' },
        ],
        erros: [['Un momento, yo penso.', 'Un momento, que lo pienso.', '«Pensar» tem a forma «pienso» (e → ie).'], ['La verdad es de que no lo sé.', 'La verdad es que no lo sé.', 'Nesta fórmula, não se usa «de».'], ['Deja-me pensar.', 'Déjame pensar.', 'O pronome vai colado ao imperativo, sem hífen e com acento escrito.']],
      }),
      texto(8, 'Una comida complicada / Um almoço complicado', 'El jueves pasado tuve una comida de trabajo con unos clientes de Chile, y fue más difícil de lo que esperaba. Cuando me preguntaron por el calendario del proyecto, no me salía la palabra «cronograma», así que dije: «Es el papel donde se ve qué se hace cada mes». Mi jefa sonrió y me ayudó. Después un cliente habló muy deprisa y no entendí una frase, de modo que le pedí: «Perdone, ¿podría repetirlo más despacio?». Para ganar tiempo antes de responder a una pregunta difícil, dije: «A ver, déjeme pensar un momento». Al final todos se rieron y la conversación fue más tranquila. Aprendí que no hace falta conocer todas las palabras: basta con explicarse y no quedarse callado.', 'Na quinta-feira passada tive um almoço de trabalho com uns clientes do Chile, e foi mais difícil do que eu esperava. Quando me perguntaram pelo calendário do projeto, a palavra «cronograma» não me vinha, então eu disse: «É o papel onde se vê o que se faz a cada mês». Minha chefe sorriu e me ajudou. Depois um cliente falou muito depressa e não entendi uma frase, então pedi: «Desculpe, poderia repetir mais devagar?». Para ganhar tempo antes de responder a uma pergunta difícil, eu disse: «Vejamos, deixe-me pensar um momento». No fim todos riram e a conversa ficou mais tranquila. Aprendi que não é preciso conhecer todas as palavras: basta se explicar e não ficar calado.', [
        ['¿Con quién tuvo la comida de trabajo?', 'Con clientes de Chile.'], ['¿Qué palabra no le salía?', '«Cronograma».'], ['¿Cómo la explicó?', 'Dijo que es el papel donde se ve qué se hace cada mes.'], ['¿Qué hizo cuando no entendió una frase?', 'Pidió que lo repitieran más despacio.'], ['¿Qué aprendió?', 'Que no hace falta conocer todas las palabras si uno sabe explicarse.'],
      ]),
      producao(5, 'Responda em voz alta a uma pergunta difícil («¿Qué piensas del trabajo a distancia?») usando um marcador, um pedido de tempo e uma explicação com «la verdad es que…».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 59', [
      revisao(5, 'Diga em voz alta uma frase para cada função: explicar uma palavra, pedir repetição, pedir que falem devagar, confirmar o que entendeu e ganhar tempo.'),
      exercicios(20, [
        ouvir('Es una cosa que sirve para abrir botellas', ['Es una cosa que sirve para abrir botellas', 'Es una cosa que sirve de abrir botellas', 'Es una cosa que se sirve para botellas'], 'Es una cosa que sirve para abrir botellas', 'Ouça «sirve para» e o infinitivo «abrir».'),
        ouvir('¿Podría hablar más despacio?', ['¿Podría hablar más despacio?', '¿Podría hablar más devagar?', '¿Podrías hablar más alto?'], '¿Podría hablar más despacio?', 'A palavra é «despacio».'),
        ouvir('Déjame pensar un momento', ['Déjame pensar un momento', 'Dejo pensar un momento', 'Déjame pesar un momento'], 'Déjame pensar un momento', '«Déjame» é o imperativo de «dejar» com «me».'),
        ditado('No me sale la palabra', 'Escreva: No me sale la palabra.'), ditado('¿Qué significa «cronograma»?', 'Escreva: ¿Qué significa «cronograma»?'), ditado('A ver si lo he entendido', 'Escreva: A ver si lo he entendido.'),
        mc('Como se diz «É o contrário de grande»?', ['Es lo contrario de grande.', 'Es lo contrario que grande.', 'Es contrario a grande.'], 'Es lo contrario de grande.', 'A fórmula é «lo contrario de».'),
        mc('Como se explica um lugar sem dizer o nome?', ['Es un sitio donde se compra pan.', 'Es un sitio que se compra pan.', 'Es un sitio cuando se compra pan.'], 'Es un sitio donde se compra pan.', 'Para lugar, use «donde».'),
        mc('Qual pedido é adequado em situação formal?', ['¿Podría repetirlo, por favor?', '¿Repites eso?', '¿Qué dices?'], '¿Podría repetirlo, por favor?', 'O condicional e «usted» soam corteses.'),
        mc('Qual palavra é própria do espanhol para «devagar»?', ['despacio', 'devagar', 'lentamento'], 'despacio', '«Devagar» é português; em espanhol diz-se «despacio».'),
        mc('Qual verbo significa «perceber o som»?', ['oír', 'escuchar', 'entender'], 'oír', '«Oír» é perceber o som; «escuchar» é ouvir com atenção.'),
        mc('Qual frase está correta?', ['La verdad es que no lo sé.', 'La verdad es de que no lo sé.', 'La verdad que es no lo sé.'], 'La verdad es que no lo sé.', 'Sem «de».'),
        mc('Para pedir ajuda com cortesia a um desconhecido, você diz:', ['¿Me podría ayudar con esto?', '¿Ayuda esto?', '¡Ayúdame con eso ya!'], '¿Me podría ayudar con esto?', 'Condicional de cortesia com «usted».'),
        lacuna('Es una cosa que sirve ___ cortar papel.', ['para', 'de', 'en'], 'para', '«Servir para» + infinitivo.'),
        lacuna('Se ___ a una taza, pero es más grande.', ['parece', 'parecen', 'pareces'], 'parece', 'Sujeito singular: «se parece a».'),
        lacuna('Un momento, que lo ___. (pensar)', ['pienso', 'penso', 'pensar'], 'pienso', '«Pensar» muda a vogal: pienso.'),
        lacuna('Llegué tarde; ___ decir, perdí el tren.', ['es', 'está', 'son'], 'es', '«Es decir» é uma expressão fixa de reformulação.'),
        lacuna('¿Puedes ___? (explicar + me)', ['explicarme', 'me explicar', 'explicame'], 'explicarme', 'O pronome vai colado ao infinitivo.'),
        ordem('Ordene: «¿Podría hablar más despacio?»', ['¿Podría', 'hablar', 'más', 'despacio?'], '¿Podría hablar más despacio?', 'Condicional de cortesia + infinitivo + «más despacio».'),
        ordem('Ordene: «Es una cosa que sirve para cortar papel.»', ['Es', 'una', 'cosa', 'que', 'sirve', 'para', 'cortar', 'papel.'], 'Es una cosa que sirve para cortar papel.', 'Fórmula de descrição.'),
        livre('Escreva em espanhol: A palavra não me vem. É uma coisa que serve para abrir portas.', 'No me sale la palabra. Es una cosa que sirve para abrir puertas.'),
      ]),
      producao(5, 'Conte em voz alta uma situação em que você não sabia uma palavra e diga, em espanhol, o que faria agora para continuar a conversa.'),
    ]),
  ],
});
