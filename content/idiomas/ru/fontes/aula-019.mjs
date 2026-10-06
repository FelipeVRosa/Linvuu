import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 19, titulo: 'O passado', nivel: 'a1',
  objetivo: 'Contar o que aconteceu: «был, была, было, были» e o passado dos verbos com -л, -ла, -ло, -ли.',
  nota: 'Você conta o que fez ontem. Próxima aula: comida e restaurante.',
  sessoes: [
    sessao('S1', 'Ser e estar no passado', [
      revisao(5, 'Escreva 4 frases no presente sobre o que você faz hoje.'),
      palavras(6, [
        ['раньше', 'ránshe', 'antes, antigamente', 'before'], ['тогда', 'tagdá', 'então, naquela época', 'then'], ['давно', 'davnó', 'há muito tempo', 'long ago'], ['недавно', 'nidávna', 'há pouco', 'recently'],
        ['в прошлом году', 'f próshlam gadú', 'no ano passado', 'last year'], ['на прошлой неделе', 'na próshloi nidiélie', 'na semana passada', 'last week'],
      ]),
      gramatica(14, 'Был, была, было, были', 'No presente não há «ser/estar» («Я студент»). No passado ele aparece e muda com o gênero e o número de QUEM é o sujeito: «был» (masculino), «была» (feminino), «было» (neutro), «были» (plural). Quem fala também conta: um homem diz «Я был дома», uma mulher diz «Я была дома». Para dizer «eu tinha», troque «есть» por «был/была/было/были» e concorde com a coisa que se tinha: «У меня был брат», «У меня была сестра». A negação usa «не было» e o genitivo: «У меня не было сестры». Neste nível usamos o passado do dia a dia; a diferença entre os dois aspectos do verbo virá em aula própria.', {
        tag: 'Verbos',
        comparacao: 'em português «eu fui / estive» é igual para homem e mulher. Em russo o verbo muda conforme o gênero de quem fala: «я был» (homem), «я была» (mulher).',
        tabela: [
          { sujeito: 'я (homem)', passado: 'был', exemplo: 'Я был дома.' }, { sujeito: 'я (mulher)', passado: 'была', exemplo: 'Я была дома.' }, { sujeito: 'он', passado: 'был', exemplo: 'Он был в школе.' },
          { sujeito: 'она', passado: 'была', exemplo: 'Она была в офисе.' }, { sujeito: 'оно', passado: 'было', exemplo: 'Окно было новое.' }, { sujeito: 'мы, вы, они', passado: 'были', exemplo: 'Мы были в кафе.' },
        ],
        exemplos: [['У меня был брат.', 'Eu tinha um irmão.'], ['У меня была сестра.', 'Eu tinha uma irmã.'], ['У меня не было сестры.', 'Eu não tinha irmã.']],
        erros: [['Вчера я есть дома.', 'Вчера я был дома.', 'No passado «есть» não se usa: use был/была/было/были.']],
      }),
      producao(5, 'Diga: «Вчера я был(а) дома. У меня был брат. У меня не было сестры.»'),
    ]),
    sessao('S2', 'Verbos no passado', [
      revisao(5, 'Escreva «был, была, было, были» e uma frase com cada um.'),
      palavras(6, [
        ['писать', 'pissát', 'escrever', 'to write'], ['готовить', 'gatóvit', 'cozinhar, preparar', 'to cook'], ['покупать', 'pakupát', 'comprar', 'to buy'], ['отвечать', 'atvichát', 'responder', 'to answer'],
        ['спрашивать', 'spráshivat', 'perguntar', 'to ask'], ['учить', 'uchít', 'estudar, aprender (algo)', 'to learn'],
      ]),
      gramatica(14, 'O passado dos verbos', 'Para o passado de quase todo verbo, tire o -ть do infinitivo e acrescente -л (masculino), -ла (feminino), -ло (neutro) ou -ли (plural): работать → работал, работала, работало, работали. O passado não muda com a pessoa (я, ты, он...), só com o gênero e o número do sujeito. Um homem diz «я читал», uma mulher diz «я читала». Verbos em -ся mantêm o -ся: просыпался, просыпалась, просыпались. Há irregulares muito comuns, como «идти» → шёл, шла, шли.', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'работать', masculino: 'работал', feminino: 'работала', plural: 'работали' }, { infinitivo: 'читать', masculino: 'читал', feminino: 'читала', plural: 'читали' },
          { infinitivo: 'жить', masculino: 'жил', feminino: 'жила', plural: 'жили' }, { infinitivo: 'делать', masculino: 'делал', feminino: 'делала', plural: 'делали' },
          { infinitivo: 'слушать', masculino: 'слушал', feminino: 'слушала', plural: 'слушали' }, { infinitivo: 'смотреть', masculino: 'смотрел', feminino: 'смотрела', plural: 'смотрели' },
          { infinitivo: 'любить', masculino: 'любил', feminino: 'любила', plural: 'любили' }, { infinitivo: 'говорить', masculino: 'говорил', feminino: 'говорила', plural: 'говорили' },
          { infinitivo: 'просыпаться', masculino: 'просыпался', feminino: 'просыпалась', plural: 'просыпались' }, { infinitivo: 'идти (irregular)', masculino: 'шёл', feminino: 'шла', plural: 'шли' },
        ],
        erros: [['Вчера она работал.', 'Вчера она работала.', 'O passado concorda com o gênero de quem faz.'], ['Вчера я работаю.', 'Вчера я работал.', 'Com «вчера» o verbo vai para o passado.']],
      }),
      producao(5, 'Diga o que você fez ontem: «Вчера я работал(а). Я читал(а). Я слушал(а) музыку.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases sobre o que você fez ontem.'),
      dialogo(12, 'Что ты делал вчера? / O que você fez ontem?', 'Dois amigos conversam.', [
        ['Саша', 'Привет, Маша! Что ты делала вчера?', 'Oi, Masha! O que você fez ontem?'], ['Маша', 'Вчера я работала до пяти часов. А потом я была дома.', 'Ontem eu trabalhei até as cinco. Depois eu estive em casa.'],
        ['Саша', 'Ты читала?', 'Você leu?'], ['Маша', 'Да, я читала книгу и слушала музыку. А ты?', 'Sim, li um livro e ouvi música. E você?'],
        ['Саша', 'Я был в кафе с другом. Мы обедали и говорили.', 'Eu estive num café com um amigo. Nós almoçamos e conversamos.'], ['Маша', 'Хорошо! А где ты был в субботу?', 'Que bom! E onde você esteve no sábado?'],
        ['Саша', 'В субботу я гулял в парке.', 'No sábado eu passeei no parque.'], ['Маша', 'Хороший день!', 'Que dia bom!'],
      ]),
      texto(8, 'Мои выходные / Meu fim de semana', 'В субботу я просыпался поздно. Я завтракал дома и читал книгу. Потом я гулял в парке с другом. Вечером мы были в кафе. В воскресенье я отдыхал и смотрел фильм. Я не работал.',
        'No sábado eu acordei tarde. Tomei café em casa e li um livro. Depois passeei no parque com um amigo. À noite estivemos num café. No domingo eu descansei e assisti a um filme. Eu não trabalhei.',
        [['Когда он просыпался поздно?', 'В субботу'], ['С кем он гулял?', 'С другом'], ['Что он делал в воскресенье?', 'Отдыхал и смотрел фильм']]),
      producao(5, 'Conte o seu último fim de semana: «В субботу я … В воскресенье я …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva o passado de 5 verbos, no masculino e no feminino.'),
      exercicios(20, [
        mc('Passado de «работать» (ele):', ['работал', 'работает', 'работать'], 'работал', 'Tire -ть e acrescente -л.'),
        mc('Passado de «читать» (ela):', ['читала', 'читал', 'читали'], 'читала', 'Feminino: -ла.'),
        lacuna('Я ___ дома. (estive; mulher)', ['была', 'был', 'были'], 'была', 'Quem fala é mulher: была.'),
        lacuna('Мы ___ в кафе. (estivemos)', ['были', 'был', 'была'], 'были', 'Plural: были.'),
        lacuna('Вчера он ___ книгу. (leu)', ['читал', 'читала', 'читает'], 'читал', 'Masculino: -л.'),
        lacuna('Вчера она ___ музыку. (ouviu)', ['слушала', 'слушал', 'слушает'], 'слушала', 'Feminino: -ла.'),
        mc('Qual está correto? (um homem fala)', ['Я был дома', 'Я была дома', 'Я есть дома'], 'Я был дома', 'Homem: был.'),
        mc('«У меня была сестра» significa:', ['Eu tinha uma irmã', 'Eu tenho uma irmã', 'Eu não tenho irmã'], 'Eu tinha uma irmã', 'был/была substitui «есть» no passado.'),
        mc('«У меня не было брата» significa:', ['Eu não tinha irmão', 'Eu não tenho irmão', 'Eu tinha um irmão'], 'Eu não tinha irmão', '«не было» + genitivo.'),
        ouvir('Вчера я работала', ['Вчера я работала', 'Вчера я работал', 'Вчера я работаю'], 'Вчера я работала', 'Quem fala é mulher: -ла.'),
        ordem('Ordene: «Ontem eu estive em casa.» (homem)', ['дома', 'Вчера', 'был', 'я'], 'Вчера я был дома.', 'Вчера + sujeito + был + lugar.'),
        ditado('Мы жили в Москве', 'жить → жили.'),
        mc('Passado de «идти» (ele):', ['шёл', 'идёт', 'идти'], 'шёл', 'Irregular: шёл, шла, шли.'),
        livre('Escreva 4 frases sobre ontem, no passado.', 'Вчера я работал. Я был в кафе. Я читал книгу. Я слушал музыку.'),
      ]),
      producao(5, 'Grave-se contando o que você fez ontem, em 5 frases.'),
    ]),
  ],
});
