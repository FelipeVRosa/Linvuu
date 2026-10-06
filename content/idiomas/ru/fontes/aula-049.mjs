import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 49, titulo: 'Revisão e simulado do A2', nivel: 'a2',
  objetivo: 'Rever todo o A2 em um mapa, treinar leitura, escuta, escrita e fala no formato de provas de A2, corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou o A2 do russo. Repita o simulado até acertar quase tudo antes de seguir para o B1.',
  sessoes: [
    sessao('S1', 'O mapa do A2', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 22 a 48 que você acha difíceis.'),
      gramatica(15, 'O A2 inteiro em uma tabela', 'Esta tabela resume as aulas 22 a 48. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Aspecto, futuro e verbos de movimento', regra: 'imperfectivo = processo e hábito; perfectivo = resultado; буду + infinitivo; идти/ходить, ехать/ездить.', aula: '22 a 24' },
          { tema: 'Dativo, instrumental, genitivo', regra: 'кому? (маме); с кем? (с другом); у кого? нет чего?; mais as preposições de cada caso.', aula: '25 a 27' },
          { tema: 'Numerais, datas e o quadro dos casos', regra: 'numerais se somam; dia e mês (первое мая); seis casos para substantivos, adjetivos e pronomes.', aula: '28, 29' },
          { tema: 'Comparativo e superlativo', regra: 'более/менее, -ее, самый; «чем» + nominativo, «» + genitivo.', aula: '30' },
          { tema: 'Pronomes nos casos', regra: 'меня, мне, мной; depois de preposição, н-: у него, с ней, о них.', aula: '31' },
          { tema: 'Imperativo', regra: '-й, -и, -ь; -те para «вы»; negação com imperfectivo; давай + 1ª pessoa do plural.', aula: '32' },
          { tema: 'Conjunções', regra: 'что, потому что, поэтому; когда/если + futuro; пока не; чтобы + infinitivo ou passado.', aula: '33' },
          { tema: 'Saúde, trabalho, casa, compras', regra: 'У меня болит…; работать врачом; на/в + prepositivo; нужен/нужна; велик/мал.', aula: '34 a 37' },
          { tema: 'Viagens, cidade, clima, hobbies', regra: 'на автобусе; до + genitivo; мимо, через; идёт дождь; играть в / на; увлекаться + instrumental.', aula: '38 a 41' },
          { tema: 'Telefone e e-mail', regra: 'Можно позвать…?; Передайте, что…; Уважаемый…; С уважением.', aula: '42' },
          { tema: 'Reflexivos e pronomes determinativos', regra: '-ся / -сь; друг друга; себя; весь, сам, каждый, другой.', aula: '43, 44' },
          { tema: 'Movimento com prefixo', regra: 'при-, у-, в-, вы-, про-, пере-, под-, от-, за-, до- e as preposições de cada um.', aula: '45, 46' },
          { tema: 'Quantidade e tempo', regra: 'много + genitivo; стакан воды; через неделю, неделю назад, на / за + tempo; уже, ещё не.', aula: '47, 48' },
        ],
      }),
      producao(10, 'Fale 2 minutos em russo sobre o seu dia a dia: trabalho, casa, o que você fez na semana passada e o que fará nas férias.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato A2, original)', [
      revisao(5, 'Releia a carta e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Письмо другу / Uma carta a um amigo', 'Привет, Антон! Как дела? Я сейчас в Москве. Я приехал неделю назад и буду здесь ещё две недели. Я живу в маленькой квартире на третьем этаже. Рядом есть парк и метро. Каждое утро я пью чай и гуляю в парке. Вчера было холодно, поэтому я купил тёплую куртку. Если завтра будет солнечно, мы с Ниной пойдём в музей. Напиши мне, пожалуйста, как твои дела! Пока! Макс',
        'Oi, Anton! Como vai? Estou em Moscou agora. Cheguei há uma semana e ficarei aqui mais duas semanas. Moro num apartamento pequeno no terceiro andar. Perto há um parque e o metrô. Toda manhã tomo chá e passeio no parque. Ontem fez frio, por isso comprei uma jaqueta quente. Se amanhã fizer sol, a Nina e eu iremos ao museu. Escreva-me, por favor, como você está! Tchau! Max',
        [['Где сейчас Макс?', 'В Москве'], ['Сколько времени он будет там ещё?', 'Ещё две недели'], ['Что он купил и почему?', 'Тёплую куртку, потому что было холодно'], ['Что они сделают завтра, если будет солнечно?', 'Пойдут в музей']]),
      dialogo(8, 'В аптеке / Na farmácia', 'Um cliente compra remédio.', [
        ['Клиент', 'Здравствуйте. У меня болит горло. Что вы посоветуете?', 'Olá. Estou com dor de garganta. O que a senhora recomenda?'], ['Продавщица', 'Вот таблетки от боли в горле. Принимайте их три раза в день после еды.', 'Aqui estão comprimidos para dor de garganta. Tome-os três vezes ao dia, depois das refeições.'], ['Клиент', 'Сколько они стоят?', 'Quanto custam?'],
        ['Продавщица', 'Двести рублей.', 'Duzentos rublos.'], ['Клиент', 'Хорошо, я беру. Мне ещё нужен стакан воды.', 'Está bem, levo. Preciso também de um copo de água.'], ['Продавщица', 'Пожалуйста. Выздоравливайте!', 'Aqui está. Melhoras!'],
      ]),
      producao(7, 'Responda em voz alta: onde está o Max, o que ele faz todo dia e o que comprou, e o que você faria no lugar dele.'),
    ]),
    sessao('S3', 'Os erros mais comuns do A2 e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete no A2 e a forma certa.'),
      gramatica(15, 'Os 14 erros mais comuns do A2', 'Leia cada par em voz alta: primeiro o errado, depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['Я работаю врач.', 'Я работаю врачом.', 'Profissão: instrumental.'], ['Мне нравится фильмы.', 'Мне нравятся фильмы.', 'O verbo concorda com a coisa.'], ['Я иду к друг.', 'Я иду к другу.', '«к» + dativo.'], ['Я вижу ты.', 'Я вижу тебя.', 'Pronome no acusativo.'], ['Когда я приезжаю, я позвоню.', 'Когда я приеду, я позвоню.', 'Futuro depois de «когда».'],
          ['Я хочу, чтобы ты придёшь.', 'Я хочу, чтобы ты пришёл.', '«чтобы» + passado.'], ['Я не иду, поэтому я болею.', 'Я не иду, потому что я болею.', 'Causa × consequência.'], ['У меня болит зубы.', 'У меня болят зубы.', 'Plural: болят.'], ['Один билет в Москву до.', 'Один билет до Москвы.', '«до» + genitivo.'], ['Я играю гитару.', 'Я играю на гитаре.', '«играть на» + instrumento.'],
          ['Я пришёл на работе.', 'Я пришёл на работу.', 'Onde chego: acusativo.'], ['Я буду ждать, пока он придёт.', 'Я буду ждать, пока он не придёт.', '«até que» = «пока не».'], ['Сколько стоит брюки?', 'Сколько стоят брюки?', 'Plural: стоят.'], ['У меня много друг.', 'У меня много друзей.', '«много» + genitivo plural.'],
        ],
      }),
      producao(10, 'Escreva uma mensagem de cerca de 60 palavras a um amigo: onde você está, o que faz, o tempo, um plano e um pedido. Depois leia-a em voz alta.'),
    ]),
    sessao('S4', 'Simulado do A2', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('Через неделю я еду в Москву', ['Через неделю я еду в Москву', 'Неделю назад я был в Москве', 'Я живу в Москве'], 'Через неделю я еду в Москву', 'Hören: через = daqui a.'), ouvir('Принимайте таблетки два раза в день', ['Принимайте таблетки два раза в день', 'Купите таблетки в аптеке', 'Пейте много воды'], 'Принимайте таблетки два раза в день', 'Hören: instruções do médico.'), ouvir('Идите прямо до светофора', ['Идите прямо до светофора', 'Поверните налево', 'Музей справа'], 'Идите прямо до светофора', 'Hören: direções.'), ditado('Я хочу, чтобы ты пришёл', 'Schreiben: чтобы + passado.'),
        mc('Leia: «Магазин не работает по воскресеньям.» O que isso significa?', ['A loja não abre aos domingos', 'A loja abre só aos domingos', 'A loja fecha às cinco'], 'A loja não abre aos domingos', 'Lesen: по + dativo plural.'), mc('Leia: «Сдаётся двухкомнатная квартира, 35 000 руб. в месяц, с мебелью.» O que se oferece?', ['Apartamento de dois cômodos mobiliado', 'Casa sem móveis', 'Quarto por dia'], 'Apartamento de dois cômodos mobiliado', 'Lesen: anúncio.'), mc('Leia: «Поезд отправляется в 9:15 с третьей платформы.»', ['O trem parte às 9h15 da plataforma 3', 'O trem chega às 9h15 à plataforma 3', 'O trem parte às 3h'], 'O trem parte às 9h15 da plataforma 3', 'Lesen: horários.'),
        mc('Leia: «Если будет дождь, мы останемся дома.» A ideia é:', ['se chover, ficamos em casa', 'choveu e ficamos em casa', 'não vamos ficar em casa'], 'se chover, ficamos em casa', 'Lesen: если + futuro.'),
        lacuna('Я работаю ___. (como engenheiro)', ['инженером', 'инженер', 'инженера'], 'инженером', 'Instrumental.'), lacuna('Мне нужна ___ куртка. (quente)', ['тёплая', 'тёплый', 'тёплую'], 'тёплая', '«нужна» + nominativo feminino.'), lacuna('Он звонит ___. (a mim)', ['мне', 'меня', 'мной'], 'мне', '«звонить» + dativo.'), lacuna('У меня мало ___. (tempo)', ['времени', 'время', 'временем'], 'времени', '«мало» + genitivo.'), lacuna('Я приехал неделю ___. (há)', ['назад', 'через', 'за'], 'назад', '«назад» depois do tempo.'),
        ordem('Ordene: «Я играю на гитаре.»', ['Я', 'играю', 'на', 'гитаре'], 'Я играю на гитаре.', '«на» + prepositivo.'), ordem('Ordene: «Мы помогаем друг другу.»', ['Мы', 'помогаем', 'друг', 'другу'], 'Мы помогаем друг другу.', '«друг другу» (dativo).'),
        livre('Schreiben: escreva 5 frases sobre o seu fim de semana, com um plano (если), uma causa (потому что), um pedido (imperativo), um horário e um hobby.', 'В субботу я играю в футбол. Если будет дождь, я останусь дома. Я не иду в кино, потому что я устал. Позвони мне завтра! Фильм начинается в семь часов.'),
      ]),
      producao(5, 'Sprechen, em 3 partes: (1) fale de você e do seu dia a dia; (2) pergunte e responda sobre um trajeto e um horário; (3) peça e agradeça numa loja ou numa farmácia.'),
    ]),
  ],
});
