import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 38, titulo: 'Viagens e transporte', nivel: 'a2',
  objetivo: 'Dizer como você viaja (на автобусе, пешком, самолётом), comprar um bilhete (до + genitivo, туда и обратно), perguntar horários e plataformas.',
  nota: 'Você viaja de ônibus, metrô e trem e compra bilhete. Próxima aula: cidade e direções.',
  sessoes: [
    sessao('S1', 'Meios de transporte', [
      revisao(5, 'Escreva 5 frases sobre roupas: o que precisa, a cor e o preço.'),
      palavras(8, [['транспорт', 'tránsport', 'transporte', 'transport'], ['автобус', 'aftóbus', 'ônibus', 'bus'], ['метро', 'mitró', 'metrô', 'metro'], ['поезд', 'póyezd', 'trem', 'train'], ['самолёт', 'samalyót', 'avião', 'plane'], ['такси', 'taksí', 'táxi', 'taxi'], ['билет', 'bilyét', 'bilhete', 'ticket'], ['остановка', 'astanófka', 'ponto de ônibus', 'stop']]),
      gramatica(12, 'Como você vai: на + prepositivo, пешком e instrumental', 'PASSO 1: para dizer o meio de transporte, use «НА» + PREPOSITIVO: «Я еду на автобусе», «на поезде», «на машине», «на такси». PASSO 2: «метро» e «такси» não mudam: «на метро», «на такси». PASSO 3: a pé: «ПЕШКОМ»: «Я иду пешком». PASSO 4: com «лететь» (ir de avião), usa-se o INSTRUMENTAL sem preposição: «лететь самолётом». PASSO 5: «ехать» é para quem vai de veículo; «идти» para quem vai a pé. PASSO 6: o destino usa «в» ou «на» + acusativo; a origem e o limite usam o genitivo: «от дома до вокзала» (de casa até a estação).', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Я еду на автобусе.', traducao: 'Vou de ônibus.' }, { frase: 'Мы едем на метро.', traducao: 'Vamos de metrô.' }, { frase: 'Он едет на поезде.', traducao: 'Ele vai de trem.' }, { frase: 'Я иду пешком.', traducao: 'Vou a pé.' }, { frase: 'Мы летим самолётом.', traducao: 'Vamos de avião.' }, { frase: 'От дома до вокзала десять минут.', traducao: 'De casa à estação são dez minutos.' },
        ],
        erros: [['Я еду в автобусе.', 'Я еду на автобусе.', 'Meio de transporte: «на».'], ['Я еду пешком.', 'Я иду пешком.', 'A pé: «идти», não «ехать».']],
      }),
      producao(5, 'Diga como você vai ao trabalho, à escola e ao mercado: «Я еду на … Я иду пешком …»'),
    ]),
    sessao('S2', 'Bilhetes, plataforma e horários', [
      revisao(5, 'Escreva 5 frases com os meios de transporte.'),
      palavras(8, [['вокзал', 'vagzál', 'estação ferroviária', 'station'], ['платформа', 'platfórma', 'plataforma', 'platform'], ['расписание', 'raspisániye', 'horários', 'timetable'], ['отправление', 'atpravlyéniye', 'partida', 'departure'], ['прибытие', 'pribýtiye', 'chegada', 'arrival'], ['пересадка', 'pirisátka', 'baldeação', 'transfer'], ['туда и обратно', 'tudá i abrátna', 'ida e volta', 'return'], ['в одну сторону', 'v adnú stóronu', 'só ida', 'one way']]),
      gramatica(12, 'Comprar bilhete e perguntar horário', 'PASSO 1: o destino com «до» + genitivo: «Один билет ДО Москвы, пожалуйста». PASSO 2: «туда и обратно» = ida e volta; «в одну сторону» = só ida. PASSO 3: a data: «на пятнадцатое мая» (ordinal neutro + mês no genitivo; «на» + acusativo marca o dia da viagem). PASSO 4: o horário: «Поезд отправляется в девять часов» e «прибывает в двенадцать сорок пять». PASSO 5: a plataforma: «С какой платформы?» — «С третьей платформы» (с + genitivo). PASSO 6: «Не опаздывайте!» = não se atrase (imperativo negativo imperfectivo).', {
        tag: 'Frase',
        tabela: [
          { frase: 'Один билет до Москвы, пожалуйста.', traducao: 'Um bilhete para Moscou, por favor.' }, { frase: 'Туда и обратно.', traducao: 'Ida e volta.' }, { frase: 'Поезд отправляется в девять часов.', traducao: 'O trem parte às nove horas.' }, { frase: 'Он прибывает в двенадцать сорок пять.', traducao: 'Ele chega às doze e quarenta e cinco.' }, { frase: 'С какой платформы отправляется поезд?', traducao: 'De que plataforma parte o trem?' },
        ],
        erros: [['Один билет в Москву до.', 'Один билет до Москвы.', 'Destino do bilhete: «до» + genitivo.'], ['Поезд отправляется из третьей платформы.', 'Поезд отправляется с третьей платформы.', 'Plataforma: «с» + genitivo.']],
      }),
      producao(5, 'Compre um bilhete em voz alta: «Один билет до … Туда и обратно. С какой платформы? Когда отправляется поезд?»'),
    ]),
    sessao('S3', 'Viagem de trem', [
      revisao(5, 'Escreva 5 frases sobre bilhete, horário e plataforma.'),
      gramatica(10, 'Planejar a viagem', 'PASSO 1: para perguntar a duração: «Сколько времени ехать?» — «Три часа». PASSO 2: para perguntar a data: «На какое число?» PASSO 3: para a hora: «в 8:30» = «в восемь тридцать». PASSO 4: para o preço: «Сколько стоит билет?» PASSO 5: para o aviso: «Не опаздывайте!»', {
        tag: 'Frase',
        tabela: [
          { frase: 'Сколько времени ехать?', traducao: 'Quanto tempo leva a viagem?' }, { frase: 'На какое число?', traducao: 'Para que dia?' }, { frase: 'Поезд в восемь тридцать.', traducao: 'O trem é às oito e meia.' }, { frase: 'Сколько стоит билет?', traducao: 'Quanto custa o bilhete?' },
        ],
      }),
      dialogo(8, 'На вокзале / Na estação', 'Max compra um bilhete para São Petersburgo.', [
        ['Кассир', 'Здравствуйте. Куда вы хотите ехать?', 'Olá. Para onde o senhor quer ir?'], ['Макс', 'В Санкт-Петербург. Один билет, пожалуйста.', 'Para São Petersburgo. Um bilhete, por favor.'], ['Кассир', 'На какое число?', 'Para que dia?'],
        ['Макс', 'На пятнадцатое мая, туда и обратно.', 'Para 15 de maio, ida e volta.'], ['Кассир', 'Есть поезд в восемь тридцать. Он прибывает в двенадцать сорок пять.', 'Há um trem às oito e meia. Chega às doze e quarenta e cinco.'], ['Макс', 'Сколько стоит билет?', 'Quanto custa o bilhete?'],
        ['Кассир', 'Туда и обратно шесть тысяч рублей.', 'Ida e volta, seis mil rublos.'], ['Макс', 'Хорошо. С какой платформы отправляется поезд?', 'Está bem. De que plataforma parte o trem?'], ['Кассир', 'С третьей платформы. Не опаздывайте!', 'Da plataforma três. Não se atrase!'],
      ]),
      producao(7, 'Faça o papel do viajante em voz alta: destino, data, ida e volta, preço e plataforma.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre uma viagem.'),
      exercicios(20, [
        lacuna('Я еду ___ автобусе.', ['на', 'в', 'с'], 'на', 'Transporte: «на».'), lacuna('Мы едем ___ метро.', ['на', 'в', 'к'], 'на', '«на метро».'), lacuna('Один билет ___ Москвы.', ['до', 'из', 'от'], 'до', '«до» + genitivo.'),
        lacuna('Поезд отправляется ___ третьей платформы.', ['с', 'из', 'от'], 'с', '«с» + genitivo.'), lacuna('Поезд прибывает ___ 12:45.', ['в', 'на', 'к'], 'в', '«в» + horas.'), lacuna('Я хочу билет ___ и обратно.', ['туда', 'там', 'здесь'], 'туда', '«туда и обратно».'),
        mc('«Пешком» significa:', ['a pé', 'de avião', 'de ônibus'], 'a pé', 'Пешком = a pé.'), mc('«Остановка» é:', ['ponto de ônibus', 'estação de trem', 'aeroporto'], 'ponto de ônibus', 'Остановка = ponto.'), mc('«Лететь самолётом» usa o:', ['instrumental', 'genitivo', 'prepositivo'], 'instrumental', 'самолётом = instrumental.'),
        ordem('Ordene: «Поезд отправляется в девять часов.»', ['Поезд', 'отправляется', 'в', 'девять', 'часов'], 'Поезд отправляется в девять часов.', '«в» + horas.'), ouvir('Туда и обратно, пожалуйста', ['Туда и обратно, пожалуйста', 'В одну сторону, пожалуйста', 'Один билет, пожалуйста'], 'Туда и обратно, пожалуйста', 'Ida e volta.'), ditado('Один билет до Москвы', '«до» + genitivo.'),
        livre('Escreva 5 frases: como você viaja, o destino do bilhete, ida e volta, o horário do trem e a plataforma.', 'Я еду на поезде. Один билет до Москвы. Туда и обратно. Поезд отправляется в девять часов. Он идёт с третьей платформы.'),
      ]),
      producao(5, 'Grave-se pedindo um bilhete e perguntando o horário.'),
    ]),
  ],
});
