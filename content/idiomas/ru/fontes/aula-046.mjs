import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 46, titulo: 'Verbos de movimento com prefixo 2: passar, atravessar, aproximar-se', nivel: 'a2',
  objetivo: 'Usar пройти, перейти, подойти, отойти, зайти e дойти (e os imperfectivos) com as preposições мимо, через, к, от, в e до, para descrever trajetos.',
  nota: 'Você descreve trajetos com verbos de movimento prefixados. Próxima aula: quantidade, много, мало, несколько.',
  sessoes: [
    sessao('S1', 'Passar e atravessar', [
      revisao(5, 'Escreva 5 frases com «прийти», «уйти», «войти» e «выйти».'),
      palavras(8, [['проходить / пройти', 'prakhadít / prayti', 'passar, atravessar', 'to pass'], ['переходить / перейти', 'pirikhadít / pireyti', 'atravessar', 'to cross'], ['подходить / подойти', 'padkhadít / padayti', 'aproximar-se', 'to approach'], ['отходить / отойти', 'atkhadít / ataytí', 'afastar-se', 'to move away'], ['заходить / зайти', 'zakhadít / zayti', 'passar (para uma visita)', 'to drop in'], ['доходить / дойти', 'dakhadít / dayti', 'chegar até', 'to reach'], ['дорога', 'daróga', 'estrada, rua', 'road'], ['парк', 'park', 'parque', 'park']]),
      gramatica(12, 'Mais prefixos e as preposições que os acompanham', 'PASSO 1: cada prefixo traz uma ideia de trajeto: «про-» (passar por, através), «пере-» (atravessar de um lado a outro), «под-» (aproximar-se), «от-» (afastar-se), «за-» (passar rapidamente, parar numa visita), «до-» (chegar até o fim). PASSO 2: passado: «прошёл, перешёл, подошёл, отошёл, зашёл, дошёл». PASSO 3: futuro com «пойду» → «пройду, перейду, подойду, отойду, зайду, дойду». PASSO 4: preposições: «пройти МИМО + genitivo» (passar por), «перейти ЧЕРЕЗ + acusativo» (atravessar), «подойти К + dativo» (aproximar-se de), «отойти ОТ + genitivo» (afastar-se de), «зайти В + acusativo» (entrar rapidamente) ou «К + dativo» (visitar), «дойти ДО + genitivo» (chegar até). PASSO 5: os imperfectivos são «проходить, переходить, подходить, отходить, заходить, доходить» e servem para hábito e processo.', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Идите мимо банка и перейдите через дорогу.', traducao: 'Passe pelo banco e atravesse a rua.' }, { frase: 'Он подошёл к окну.', traducao: 'Ele se aproximou da janela.' }, { frase: 'Она отошла от двери.', traducao: 'Ela se afastou da porta.' }, { frase: 'Я зайду к другу.', traducao: 'Vou passar na casa do amigo.' }, { frase: 'Мы дошли до парка.', traducao: 'Chegamos até o parque.' }, { frase: 'Я прошёл мимо магазина.', traducao: 'Passei pela loja.' },
        ],
        erros: [['Я перешёл дорога.', 'Я перешёл дорогу.', 'Objeto direto: acusativo (дорогу).'], ['Он подошёл на окно.', 'Он подошёл к окну.', '«подойти» pede «к» + dativo.'], ['Мы дошли в парк.', 'Мы дошли до парка.', '«дойти» pede «до» + genitivo.']],
      }),
      producao(5, 'Diga um trajeto: «Я прошёл мимо банка, перешёл через дорогу, подошёл к парку и дошёл до музея.»'),
    ]),
    sessao('S2', 'Imperfectivo e perfectivo nos trajetos', [
      revisao(5, 'Escreva o passado de «пройти», «перейти», «подойти» e «зайти».'),
      palavras(8, [['сначала', 'snachála', 'primeiro', 'first'], ['потом', 'patóm', 'depois', 'then'], ['затем', 'zatém', 'em seguida', 'next'], ['наконец', 'nakanyéts', 'por fim', 'finally'], ['рядом', 'ryádam', 'perto, ao lado', 'nearby'], ['ближе', 'blízhe', 'mais perto', 'closer'], ['дальше', 'dálshe', 'mais longe, adiante', 'further'], ['обратно', 'abrátna', 'de volta', 'back']]),
      gramatica(12, 'Contar um trajeto em ordem', 'PASSO 1: para contar um trajeto passado, use o PERFECTIVO em sequência: «Сначала я прошёл мимо банка, потом перешёл через дорогу». PASSO 2: para o hábito, use o IMPERFECTIVO: «Я каждый день прохожу мимо банка». PASSO 3: para o que está acontecendo, use o imperfectivo no presente: «Мы переходим дорогу». PASSO 4: para instruções, use o imperativo: «Перейдите через дорогу», «Подойдите к кассе», «Не отходите далеко». PASSO 5: as palavras de ordem ajudam: «сначала, потом, затем, наконец».', {
        tag: 'Verbos',
        tabela: [
          { tipo: 'sequência (perfectivo)', frase: 'Сначала я прошёл мимо банка, потом перешёл через дорогу.' }, { tipo: 'hábito (imperfectivo)', frase: 'Каждый день я прохожу мимо банка.' }, { tipo: 'processo (imperfectivo)', frase: 'Мы переходим дорогу.' }, { tipo: 'instrução (imperativo)', frase: 'Подойдите к кассе. Не отходите далеко.' },
        ],
        erros: [['Каждый день я прошёл мимо банка.', 'Каждый день я прохожу мимо банка.', 'Hábito: imperfectivo.'], ['Мы перейдём дорогу сейчас (processo).', 'Мы переходим дорогу сейчас.', 'Ação em curso: imperfectivo.']],
      }),
      producao(5, 'Conte um trajeto em ordem: «Сначала я … потом … затем … наконец …»'),
    ]),
    sessao('S3', 'Passeio pela cidade', [
      revisao(5, 'Escreva um trajeto de 5 passos, de casa até o parque.'),
      gramatica(10, 'Conversar durante um passeio', 'PASSO 1: para sugerir: «Давай зайдём в кафе!» (perfectivo, 1ª pessoa do plural). PASSO 2: para avisar: «Не отходи далеко!» (imperativo imperfectivo negativo). PASSO 3: para calcular: «Мы дойдём за десять минут». PASSO 4: para perguntar: «Как мы дойдём до музея?» PASSO 5: para mostrar: «Смотри, подойдём ближе!»', {
        tag: 'Frase',
        tabela: [
          { frase: 'Давай зайдём в кафе!', traducao: 'Vamos entrar no café!' }, { frase: 'Не отходи далеко!', traducao: 'Não se afaste!' }, { frase: 'Мы дойдём за десять минут.', traducao: 'Chegaremos em dez minutos.' }, { frase: 'Как мы дойдём до музея?', traducao: 'Como chegaremos ao museu?' },
        ],
      }),
      dialogo(8, 'Прогулка по городу / Passeio pela cidade', 'Max e Nina passeiam pela cidade.', [
        ['Макс', 'Нина, как мы дойдём до музея?', 'Nina, como chegaremos ao museu?'], ['Нина', 'Сначала пройдём через парк, потом перейдём через дорогу.', 'Primeiro atravessamos o parque, depois cruzamos a rua.'], ['Макс', 'А где мы зайдём поесть?', 'E onde vamos entrar para comer?'],
        ['Нина', 'Мы зайдём в кафе возле моста.', 'Vamos entrar no café perto da ponte.'], ['Макс', 'Смотри, какой красивый дом! Давай подойдём ближе.', 'Olhe, que casa bonita! Vamos nos aproximar.'], ['Нина', 'Хорошо. Но не отходи далеко, мы не должны опоздать.', 'Está bem. Mas não se afaste, não podemos nos atrasar.'],
        ['Макс', 'Не волнуйся. Мы дойдём за десять минут.', 'Não se preocupe. Chegaremos em dez minutos.'], ['Нина', 'Тогда пойдём!', 'Então vamos!'],
      ]),
      producao(7, 'Descreva em voz alta um passeio: por onde passou, o que atravessou e onde entrou.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre um passeio.'),
      exercicios(20, [
        lacuna('Я прошёл ___ банка. (passando por)', ['мимо', 'через', 'до'], 'мимо', '«мимо» + genitivo.'), lacuna('Мы перешли ___ дорогу. (atravessando)', ['через', 'мимо', 'к'], 'через', '«через» + acusativo.'), lacuna('Он подошёл ___ окну.', ['к', 'от', 'до'], 'к', '«к» + dativo.'),
        lacuna('Она отошла ___ двери.', ['от', 'к', 'в'], 'от', '«от» + genitivo.'), lacuna('Мы дошли ___ парка.', ['до', 'в', 'на'], 'до', '«до» + genitivo.'), lacuna('Я ___ к другу. (vou passar na casa)', ['зайду', 'зашёл', 'захожу'], 'зайду', 'Futuro perfectivo.'),
        mc('Passado de «пройти» (ele):', ['прошёл', 'прошел', 'пройл'], 'прошёл', 'Com «ё».'), mc('«Не отходи далеко» é:', ['uma proibição', 'um convite', 'uma pergunta'], 'uma proibição', 'Imperativo negativo.'), mc('Hábito pede:', ['o imperfectivo', 'o perfectivo', 'o infinitivo'], 'o imperfectivo', '«Каждый день я прохожу…»'),
        ordem('Ordene: «Давай зайдём в кафе.»', ['Давай', 'зайдём', 'в', 'кафе'], 'Давай зайдём в кафе.', '«давай» + 1ª pessoa do plural.'), ouvir('Мы дойдём за десять минут', ['Мы дойдём за десять минут', 'Мы дошли за десять минут', 'Мы идём десять минут'], 'Мы дойдём за десять минут', 'Futuro perfectivo.'), ditado('Мы перешли через дорогу', '«через» + acusativo.'),
        livre('Escreva 5 frases sobre um trajeto: passar, atravessar, aproximar-se, entrar e chegar.', 'Я прошёл мимо банка. Мы перешли через дорогу. Он подошёл к окну. Мы зашли в кафе. Мы дошли до парка.'),
      ]),
      producao(5, 'Grave-se descrevendo o caminho de casa até um lugar da cidade.'),
    ]),
  ],
});
