import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 63, titulo: 'Forma curta do adjetivo e comparação avançada', nivel: 'b1',
  objetivo: 'Usar a forma curta do adjetivo (рад, должен, занят, согласен, готов), o comparativo composto (более), «чем … тем …», «как можно» + comparativo, «намного / гораздо» e o superlativo.',
  nota: 'Você usa os adjetivos curtos e compara com precisão. Próxima aula: numerais nos casos.',
  sessoes: [
    sessao('S1', 'A forma curta do adjetivo', [
      revisao(5, 'Escreva o genitivo, o dativo e o instrumental plural de «друг», «ребёнок» e «человек».'),
      palavras(8, [['рад', 'rat', 'contente', 'glad'], ['должен', 'dólzhen', 'deve, tem de', 'obliged'], ['занят', 'zanyát', 'ocupado', 'busy'], ['согласен', 'saglásen', 'de acordo', 'agree'], ['готов', 'gatóf', 'pronto', 'ready'], ['свободен', 'svabódyen', 'livre', 'free'], ['болен', 'bólyen', 'doente', 'ill'], ['прав', 'praf', 'com razão', 'right']]),
      gramatica(12, 'Forma curta: quando e como', 'PASSO 1: muitos adjetivos têm uma FORMA CURTA, que só aparece como PREDICADO (depois de «быть» ou sozinha): «Он занят», «Она готова». PASSO 2: formação: tire a terminação da forma longa: masculino sem terminação, feminino «-а», neutro «-о», plural «-ы»: «занятой → занят, занята, занято, заняты». PASSO 3: com «-ен» no masculino quando há dois consoantes: «свободный → свободен, свободна, свободно, свободны». PASSO 4: alguns adjetivos SÓ existem na forma curta: «рад, должен, прав, согласен, виноват». PASSO 5: use a forma curta quando o estado é TEMPORÁRIO ou circunstancial: «Он болен» (está doente agora); use a longa para a qualidade permanente: «больной человек». PASSO 6: o plural curto serve para vários sujeitos: «Мы рады», «Они согласны». PASSO 7: «рад» pede dativo ou «что»: «Я рад тебе», «Я рад, что ты пришёл». PASSO 8: «должен» pede infinitivo: «Я должен идти».', {
        tag: 'Frase',
        comparacao: 'o português usa «ser/estar + adjetivo» sem mudar a forma do adjetivo. O russo tem uma forma curta própria («занят, занята») para o predicado.',
        tabela: [
          { masculino: 'рад', feminino: 'рада', neutro: 'радо', plural: 'рады', sentido: 'contente' }, { masculino: 'должен', feminino: 'должна', neutro: 'должно', plural: 'должны', sentido: 'deve, tem de' }, { masculino: 'занят', feminino: 'занята', neutro: 'занято', plural: 'заняты', sentido: 'ocupado' }, { masculino: 'согласен', feminino: 'согласна', neutro: 'согласно', plural: 'согласны', sentido: 'de acordo' }, { masculino: 'готов', feminino: 'готова', neutro: 'готово', plural: 'готовы', sentido: 'pronto' }, { masculino: 'свободен', feminino: 'свободна', neutro: 'свободно', plural: 'свободны', sentido: 'livre' },
        ],
        erros: [['Она готов.', 'Она готова.', 'A forma curta concorda com o sujeito.'], ['Я рад ты.', 'Я рад тебе.', '«рад» + dativo.'], ['Он должна идти.', 'Он должен идти.', '«должен» concorda com «он».']],
      }),
      producao(5, 'Diga: «Я занят. Она свободна. Мы рады. Они готовы. Я должен идти. Он прав.»'),
    ]),
    sessao('S2', 'Comparar com precisão', [
      revisao(5, 'Escreva a tabela de «занят, занята, занято, заняты» e de «рад, рада, радо, рады».'),
      palavras(8, [['более', 'bólyeye', 'mais', 'more'], ['менее', 'ményeye', 'menos', 'less'], ['намного', 'namnóga', 'muito mais', 'much'], ['гораздо', 'garázda', 'bem mais', 'far'], ['чем … тем …', 'chem … tem …', 'quanto mais … mais …', 'the more … the more'], ['как можно', 'kak mózhna', 'o mais … possível', 'as … as possible'], ['самый', 'sámyy', 'o mais', 'the most'], ['лучший', 'lúchshiy', 'o melhor', 'the best']]),
      gramatica(12, 'Comparativos e superlativos avançados', 'PASSO 1: revise o comparativo SIMPLES (aula 30): «интереснее, лучше, быстрее». PASSO 2: o comparativo COMPOSTO usa «БОЛЕЕ / МЕНЕЕ» + adjetivo, e declina: «более интересный фильм», «менее интересные книги». PASSO 3: para intensificar, «НАМНОГО» e «ГОРАЗДО» antes do comparativo simples: «намного интереснее», «гораздо лучше». PASSO 4: «КАК МОЖНО» + comparativo = o mais … possível: «как можно быстрее», «как можно раньше». PASSO 5: «ЧЕМ … ТЕМ …» = quanto mais … mais …: «Чем больше я читаю, тем больше я понимаю». PASSO 6: superlativos: «САМЫЙ» + adjetivo («самый интересный»), «ЛУЧШИЙ» (o melhor), «ХУДШИЙ» (o pior), «НАИБОЛЕЕ» (formal). PASSO 7: «ВСЁ» + comparativo = cada vez mais: «Становится всё холоднее».', {
        tag: 'Frase',
        tabela: [
          { forma: 'comparativo composto', exemplo: 'Это более интересный фильм, чем тот.' }, { forma: 'намного / гораздо', exemplo: 'Этот город намного больше. Сегодня гораздо теплее.' }, { forma: 'как можно', exemplo: 'Приходи как можно раньше.' }, { forma: 'чем … тем …', exemplo: 'Чем больше читаю, тем больше понимаю.' }, { forma: 'самый / лучший', exemplo: 'Это самый интересный фильм. Это лучший город.' }, { forma: 'всё + comparativo', exemplo: 'Становится всё холоднее.' },
        ],
        erros: [['Это намного более интереснее.', 'Это намного интереснее.', 'Não misture «более» com comparativo simples.'], ['Чем больше читаю, чем больше понимаю.', 'Чем больше читаю, тем больше понимаю.', 'Segunda parte: «тем».'], ['Приходи как можно более рано.', 'Приходи как можно раньше.', '«как можно» + comparativo simples.']],
      }),
      producao(5, 'Diga: «Это более интересный фильм. Сегодня гораздо теплее. Приходи как можно раньше. Чем больше читаю, тем больше понимаю.»'),
    ]),
    sessao('S3', 'Conversa e comparação', [
      revisao(5, 'Escreva 5 frases com adjetivos curtos e 5 com comparativos avançados.'),
      gramatica(10, 'Usar tudo numa conversa', 'PASSO 1: para recusar convites: «Я занят», «Я не свободен». PASSO 2: para obrigação: «Я должен закончить проект». PASSO 3: para estado: «Я готов», «Она рада». PASSO 4: para comparação forte: «Он гораздо сложнее старого». PASSO 5: para gradação: «Чем больше я работаю, тем лучше понимаю». PASSO 6: para urgência: «как можно быстрее».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я не свободен: я должен закончить проект.', traducao: 'Não estou livre: tenho de terminar o projeto.' }, { frase: 'Он гораздо сложнее старого.', traducao: 'Ele é bem mais difícil que o antigo.' }, { frase: 'Чем больше я работаю, тем лучше понимаю.', traducao: 'Quanto mais trabalho, melhor entendo.' },
        ],
      }),
      dialogo(8, 'Занят или свободен? / Ocupado ou livre?', 'Lena e Oleg combinam uma conversa sobre um projeto.', [
        ['Лена', 'Олег, ты свободен сегодня вечером?', 'Oleg, você está livre hoje à noite?'], ['Олег', 'К сожалению, нет, я очень занят. Я должен закончить проект.', 'Infelizmente não, estou muito ocupado. Tenho de terminar o projeto.'], ['Лена', 'Ты уже готов к встрече?', 'Você já está pronto para a reunião?'],
        ['Олег', 'Почти. Чем больше я работаю, тем лучше понимаю задачу.', 'Quase. Quanto mais trabalho, melhor entendo a tarefa.'], ['Лена', 'Рада слышать! Проект намного интереснее, чем я думала.', 'Fico contente em ouvir! O projeto é muito mais interessante do que eu pensava.'], ['Олег', 'Да, он гораздо сложнее старого, но более интересный.', 'Sim, é bem mais difícil que o antigo, mas mais interessante.'],
        ['Лена', 'Ты согласен, что завтра свободнее?', 'Você concorda que amanhã é mais livre?'], ['Олег', 'Согласен. Завтра я буду свободен как можно раньше.', 'Concordo. Amanhã estarei livre o mais cedo possível.'],
      ]),
      producao(7, 'Converse em voz alta sobre o seu trabalho: está ocupado ou livre, o que deve fazer e como o projeto está comparado ao anterior.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases usando adjetivos curtos e comparação.'),
      exercicios(20, [
        lacuna('Она ___. (pronta)', ['готова', 'готов', 'готовы'], 'готова', 'Concorda com «она».'), lacuna('Мы ___. (contentes)', ['рады', 'рад', 'рада'], 'рады', 'Plural curto.'), lacuna('Я ___ идти. (devo, homem)', ['должен', 'должна', 'должны'], 'должен', 'Concorda com «я» masculino.'),
        lacuna('Я ___ тебе. (contente com você)', ['рад', 'радо', 'радов'], 'рад', '«рад» + dativo.'), lacuna('Это ___ интересный фильм. (mais)', ['более', 'самый', 'намного'], 'более', 'Comparativo composto.'), lacuna('Сегодня ___ теплее. (bem mais)', ['гораздо', 'более', 'самый'], 'гораздо', '«гораздо» + comparativo simples.'),
        lacuna('Приходи как можно ___. (mais cedo)', ['раньше', 'более рано', 'самый рано'], 'раньше', '«как можно» + comparativo simples.'), lacuna('___ больше читаю, тем больше понимаю.', ['Чем', 'Что', 'Тем'], 'Чем', '«чем … тем …».'), mc('«Занят» é:', ['forma curta', 'forma longa', 'advérbio'], 'forma curta', 'занятой → занят.'),
        mc('«Самый» forma:', ['o superlativo', 'o comparativo', 'o diminutivo'], 'o superlativo', 'самый + adjetivo.'), ordem('Ordene: «Я должен закончить проект.»', ['Я', 'должен', 'закончить', 'проект'], 'Я должен закончить проект.', '«должен» + infinitivo.'), ouvir('Чем больше я работаю, тем лучше понимаю', ['Чем больше я работаю, тем лучше понимаю', 'Я работаю больше', 'Чем лучше, тем больше'], 'Чем больше я работаю, тем лучше понимаю', '«чем … тем …».'),
        ditado('Приходи как можно раньше', '«как можно» + comparativo.'), livre('Escreva 5 frases: um adjetivo curto, «должен», «более», «гораздо» e «чем … тем …».', 'Я занят. Я должен идти. Это более интересный фильм. Сегодня гораздо теплее. Чем больше читаю, тем больше понимаю.'),
      ]),
      producao(5, 'Grave-se comparando duas coisas e dizendo o que você deve fazer.'),
    ]),
  ],
});
