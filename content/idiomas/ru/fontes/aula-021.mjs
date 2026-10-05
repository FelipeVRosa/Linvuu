import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 21, titulo: 'Gramática: o futuro', nivel: 'a1',
  objetivo: 'Formar o futuro com «буду» + infinitivo e com o verbo perfectivo, e escolher entre os dois.',
  nota: 'Você fala do futuro de duas formas. Próxima aula: os verbos de movimento mais usados.',
  sessoes: [
    sessao('S1', 'Futuro com «буду»', [
      revisao(5, 'Escreva 5 pares de verbos (imperfectivo / perfectivo).'),
      gramatica(12, 'Futuro composto: «буду» + infinitivo', 'Em português o futuro muda a terminação («falarei») ou usa «vou falar». O russo tem DUAS formas de futuro, conforme o aspecto. A primeira é o futuro composto, do imperfectivo: «буду» + infinitivo imperfectivo = vou fazer / farei (processo, hábito, duração). O verbo «быть» no futuro: я буду, ты будешь, он будет, мы будем, вы будете, они будут. O verbo que vem depois fica sempre no infinitivo.', {
        tag: 'Aspecto e futuro',
        comparacao: 'o português diz «vou ler» ou «lerei». «Буду читать» equivale a «vou ler / vou ficar lendo (durante um tempo, regularmente)».',
        tabela: [
          { pronome: 'я', futuro: 'буду', exemplo: 'Я буду дома.' }, { pronome: 'ты', futuro: 'будешь', exemplo: 'Ты будешь работать.' }, { pronome: 'он / она', futuro: 'будет', exemplo: 'Он будет читать.' },
          { pronome: 'мы', futuro: 'будем', exemplo: 'Мы будем обедать.' }, { pronome: 'вы', futuro: 'будете', exemplo: 'Вы будете в кафе?' }, { pronome: 'они', futuro: 'будут', exemplo: 'Они будут гулять.' },
        ],
        erros: [['Я буду читаю.', 'Я буду читать.', 'Depois de «буду» vem o infinitivo.'], ['Я буду прочитать.', 'Я прочитаю.', '«Буду» não se usa com verbo perfectivo.']],
      }),
      palavras(8, [
        ['послезавтра', 'poslezáftra', 'depois de amanhã', 'the day after tomorrow'], ['скоро', 'skóra', 'em breve', 'soon'], ['через час', 'chiéris chas', 'daqui a uma hora', 'in an hour'], ['через неделю', 'chiéris nidiélyu', 'daqui a uma semana', 'in a week'],
        ['на следующей неделе', 'na sliéduyushchei nidiélie', 'na semana que vem', 'next week'], ['обязательно', 'abizátilna', 'com certeza, sem falta', 'definitely'], ['может быть', 'mózhit byt', 'talvez', 'maybe'], ['наверное', 'navérnaye', 'provavelmente', 'probably'],
      ]),
      producao(5, 'Diga: «Завтра я буду работать. Я буду дома. Мы будем обедать в кафе.»'),
    ]),
    sessao('S2', 'Futuro perfectivo', [
      revisao(5, 'Escreva as 6 formas de «быть» no futuro.'),
      gramatica(12, 'O futuro dos verbos perfectivos', 'O perfectivo se conjuga com as mesmas terminações do presente (1ª ou 2ª conjugação), mas o sentido é de FUTURO: a ação ainda não foi feita e será concluída. Прочитать → я прочитаю, ты прочитаешь, он прочитает, мы прочитаем, вы прочитаете, они прочитают. Verbos com prefixo seguem o padrão do verbo base: писать → напишу (с → ш), смотреть → посмотрю. Alguns pares trocam a raiz e mudam a consoante: купить → куплю (п → пл), ответить → отвечу (т → ч), сказать → скажу. E «дать» é irregular: дам, дашь, даст, дадим, дадите, дадут. Nunca se usa «буду» com o perfectivo.', {
        tag: 'Aspecto e futuro',
        comparacao: 'em português o futuro dos verbos de ação concluída é «lerei» ou «vou ler». O russo usa o perfectivo conjugado como se fosse presente.',
        tabela: [
          { infinitivo: 'прочитать', 'я': 'прочитаю', 'ты': 'прочитаешь', 'они': 'прочитают' }, { infinitivo: 'сделать', 'я': 'сделаю', 'ты': 'сделаешь', 'они': 'сделают' }, { infinitivo: 'написать', 'я': 'напишу', 'ты': 'напишешь', 'они': 'напишут' },
          { infinitivo: 'посмотреть', 'я': 'посмотрю', 'ты': 'посмотришь', 'они': 'посмотрят' }, { infinitivo: 'купить', 'я': 'куплю', 'ты': 'купишь', 'они': 'купят' }, { infinitivo: 'ответить', 'я': 'отвечу', 'ты': 'ответишь', 'они': 'ответят' },
          { infinitivo: 'сказать', 'я': 'скажу', 'ты': 'скажешь', 'они': 'скажут' }, { infinitivo: 'дать', 'я': 'дам', 'ты': 'дашь', 'они': 'дадут' },
        ],
        exemplos: [['Завтра я прочитаю книгу.', 'Amanhã eu vou ler o livro (até o fim).'], ['Я напишу письмо.', 'Vou escrever a carta.'], ['Я куплю хлеб.', 'Vou comprar pão.']],
      }),
      palavras(8, [
        ['позвонить', 'pazvanít', 'ligar (perfectivo)', 'to call'], ['увидеть', 'uvídit', 'ver, avistar (perfectivo)', 'to see'], ['встретить', 'vstrétit', 'encontrar (perfectivo)', 'to meet'], ['начать', 'nachát', 'começar (perfectivo: начну)', 'to begin'],
        ['решить', 'rishít', 'decidir (perfectivo)', 'to decide'], ['забыть', 'zabýt', 'esquecer (perfectivo: забуду)', 'to forget'], ['взять', 'vziat', 'pegar (perfectivo: возьму)', 'to take'], ['помочь', 'pamóch', 'ajudar (perfectivo: помогу)', 'to help'],
      ]),
      producao(5, 'Diga o que você vai fazer amanhã: «Завтра я прочитаю … Я напишу … Я куплю …»'),
    ]),
    sessao('S3', 'Qual futuro escolher', [
      revisao(5, 'Escreva 3 frases com «буду» e 3 com futuro perfectivo.'),
      gramatica(10, 'буду × perfectivo: processo ou resultado', 'A escolha segue a mesma lógica do passado. Quer falar de processo, hábito ou duração? Use «буду» + infinitivo imperfectivo. Quer falar de resultado, de ação única concluída? Use o futuro perfectivo.', {
        tag: 'Aspecto e futuro',
        tabela: [
          { situacao: 'hábito', forma: 'буду + imperfectivo', exemplo: 'Каждый день я буду писать.' }, { situacao: 'duração', forma: 'буду + imperfectivo', exemplo: 'Завтра я буду работать весь день.' },
          { situacao: 'ação única concluída', forma: 'perfectivo', exemplo: 'Завтра я напишу письмо.' }, { situacao: 'resultado imediato', forma: 'perfectivo', exemplo: 'Я куплю хлеб.' },
        ],
      }),
      dialogo(8, 'Планы / Planos', 'Duas amigas falam do dia seguinte.', [
        ['Оля', 'Что ты будешь делать завтра?', 'O que você vai fazer amanhã?'], ['Дима', 'Утром я буду работать. Вечером я позвоню маме.', 'De manhã vou trabalhar. À noite vou ligar para a minha mãe.'], ['Оля', 'А в субботу?', 'E no sábado?'],
        ['Дима', 'В субботу я буду отдыхать. Мы будем гулять в парке.', 'No sábado vou descansar. Vamos passear no parque.'], ['Оля', 'Хорошо! Ты купишь хлеб?', 'Que bom! Você vai comprar pão?'], ['Дима', 'Да, куплю. Я обязательно куплю хлеб и молоко.', 'Sim, vou comprar. Com certeza vou comprar pão e leite.'],
        ['Оля', 'Отлично! До завтра!', 'Ótimo! Até amanhã!'], ['Дима', 'До завтра!', 'Até amanhã!'],
      ]),
      texto(5, 'Мой план / Meu plano', 'Завтра я буду дома. Утром я прочитаю книгу и напишу письмо. Днём я буду готовить обед. Вечером я позвоню другу, и мы будем смотреть фильм.',
        'Amanhã vou estar em casa. De manhã vou ler um livro e escrever uma carta. Durante o dia vou preparar o almoço. À noite vou ligar para um amigo e vamos assistir a um filme.',
        [['Что он прочитает утром?', 'Книгу'], ['Что он будет делать днём?', 'Готовить обед'], ['Что они будут делать вечером?', 'Смотреть фильм']]),
      producao(2, 'Diga o seu plano de amanhã, com «буду» e com perfectivo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases sobre amanhã.'),
      exercicios(20, [
        lacuna('Завтра я ___ работать.', ['буду', 'будет', 'будут'], 'буду', 'я → буду.'),
        lacuna('Он ___ дома.', ['будет', 'буду', 'будешь'], 'будет', 'он → будет.'),
        lacuna('Мы ___ гулять.', ['будем', 'будете', 'будут'], 'будем', 'мы → будем.'),
        mc('Qual está correto?', ['Я буду читать', 'Я буду читаю', 'Я буду прочитать'], 'Я буду читать', '«буду» + infinitivo imperfectivo.'),
        mc('Futuro perfectivo de «прочитать» (я):', ['прочитаю', 'прочитал', 'буду читать'], 'прочитаю', 'Perfectivo conjugado como presente = futuro.'),
        mc('«Я напишу письмо» significa:', ['Vou escrever a carta (e concluir)', 'Estou escrevendo a carta', 'Eu escrevia cartas'], 'Vou escrever a carta (e concluir)', 'Futuro perfectivo.'),
        lacuna('Завтра я ___ хлеб. (купить)', ['куплю', 'покупаю', 'куплил'], 'куплю', 'п vira пл na forma «я».'),
        lacuna('Я ___ маме. (позвонить)', ['позвоню', 'звоню', 'позвонил'], 'позвоню', 'Perfectivo: я позвоню.'),
        mc('«Буду» pode ser usado com verbo perfectivo?', ['Não', 'Sim', 'Só com «уже»'], 'Não', 'Perfectivo tem futuro simples.'),
        ouvir('Завтра я буду работать', ['Завтра я буду работать', 'Вчера я работал', 'Сегодня я работаю'], 'Завтра я буду работать', '«буду» + infinitivo.'),
        ordem('Ordene: «Amanhã eu vou comprar pão.»', ['хлеб', 'куплю', 'я', 'Завтра'], 'Завтра я куплю хлеб.', 'Завтра + sujeito + perfectivo + objeto.'),
        ditado('Завтра мы будем дома', 'мы → будем.'),
        mc('Para dizer «todos os dias vou escrever»:', ['Каждый день я буду писать', 'Каждый день я напишу', 'Каждый день я написал'], 'Каждый день я буду писать', 'Hábito: «буду» + imperfectivo.'),
        livre('Escreva 4 frases sobre amanhã: 2 com «буду» e 2 com futuro perfectivo.', 'Завтра я буду работать. Я буду дома. Я напишу письмо. Я куплю хлеб.'),
      ]),
      producao(5, 'Grave-se contando o seu plano de amanhã e o da semana que vem.'),
    ]),
  ],
});
