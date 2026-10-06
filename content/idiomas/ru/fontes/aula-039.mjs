import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 39, titulo: 'Cidade e direções', nivel: 'a2',
  objetivo: 'Perguntar e dar direções (Как пройти…?, идите прямо, поверните налево), usar до, мимо, напротив e через, e dizer a distância e o tempo a pé.',
  nota: 'Você pergunta e dá direções na cidade. Próxima aula: clima e estações.',
  sessoes: [
    sessao('S1', 'Perguntar o caminho', [
      revisao(5, 'Escreva 5 frases sobre uma viagem de trem.'),
      palavras(8, [['улица', 'úlitsa', 'rua', 'street'], ['площадь', 'plóshchat', 'praça', 'square'], ['перекрёсток', 'pirikryóstak', 'cruzamento', 'crossroads'], ['светофор', 'svitafór', 'semáforo', 'traffic light'], ['мост', 'most', 'ponte', 'bridge'], ['угол', 'úgal', 'esquina', 'corner'], ['поворот', 'pavarót', 'curva, entrada à esquerda ou direita', 'turn'], ['переход', 'pirikhót', 'faixa de pedestres', 'crossing']]),
      gramatica(12, 'Como perguntar o caminho', 'PASSO 1: para chegar a um lugar a pé, pergunte «КАК ПРОЙТИ» + «в» ou «на» + ACUSATIVO: «Как пройти в музей?», «Как пройти на площадь?». PASSO 2: para chegar de veículo, «КАК ДОЕХАТЬ ДО» + genitivo: «Как доехать до вокзала?». PASSO 3: para perguntar onde fica, «ГДЕ НАХОДИТСЯ» + nominativo: «Где находится аптека?». PASSO 4: comece com «Извините» (com licença) e termine com «спасибо». PASSO 5: «здесь» (aqui) e «рядом» (perto) ajudam: «Есть здесь рядом банк?».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Извините, как пройти в музей?', traducao: 'Com licença, como chego ao museu?' }, { frase: 'Как пройти на площадь?', traducao: 'Como chego à praça?' }, { frase: 'Как доехать до вокзала?', traducao: 'Como chego à estação (de veículo)?' }, { frase: 'Где находится аптека?', traducao: 'Onde fica a farmácia?' }, { frase: 'Есть здесь рядом банк?', traducao: 'Há um banco aqui perto?' },
        ],
        erros: [['Как пройти музей?', 'Как пройти в музей?', 'Falta a preposição: «в музей».'], ['Как доехать в вокзал?', 'Как доехать до вокзала?', 'De veículo: «до» + genitivo.']],
      }),
      producao(5, 'Pergunte o caminho em voz alta: «Извините, как пройти в … ? Как доехать до … ? Где находится … ?»'),
    ]),
    sessao('S2', 'Dar o caminho', [
      revisao(5, 'Escreva 5 perguntas para chegar a lugares diferentes.'),
      palavras(8, [['прямо', 'pryáma', 'em frente', 'straight'], ['налево', 'nalyéva', 'à esquerda (movimento)', 'left'], ['направо', 'napráva', 'à direita (movimento)', 'right'], ['слева / справа', 'slyéva / správa', 'à esquerda / à direita (posição)', 'on the left / right'], ['мимо', 'míma', 'passando por', 'past'], ['напротив', 'naprótif', 'em frente de', 'opposite'], ['за углом', 'za uglóm', 'dobrando a esquina', 'round the corner'], ['перейти', 'piriyti', 'atravessar', 'to cross']]),
      gramatica(12, 'Instruções com o imperativo e as preposições', 'PASSO 1: use o IMPERATIVO de «вы» (aula 32): «Идите прямо», «Поверните налево», «Перейдите улицу». PASSO 2: «ДО» + genitivo marca o limite: «Идите прямо до светофора». PASSO 3: «МИМО» + genitivo = passando por: «Идите мимо банка». PASSO 4: «ЧЕРЕЗ» + acusativo = atravessando: «через дорогу, через мост». PASSO 5: «НАПРОТИВ» + genitivo = em frente de: «напротив банка». PASSO 6: «слева / справа» dizem onde algo está; «налево / направо» dizem para onde virar. PASSO 7: ordem: «первая улица направо», «второй поворот налево».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Идите прямо до светофора.', traducao: 'Siga em frente até o semáforo.' }, { frase: 'Поверните налево.', traducao: 'Vire à esquerda.' }, { frase: 'Идите мимо банка.', traducao: 'Passe pelo banco.' }, { frase: 'Перейдите через дорогу.', traducao: 'Atravesse a rua.' }, { frase: 'Музей справа, напротив банка.', traducao: 'O museu fica à direita, em frente ao banco.' }, { frase: 'Первая улица направо.', traducao: 'A primeira rua à direita.' },
        ],
        erros: [['Поверните слева.', 'Поверните налево.', 'Virar: налево/направо; posição: слева/справа.'], ['Идите до светофору.', 'Идите до светофора.', '«до» + genitivo.']],
      }),
      producao(5, 'Dê um caminho em voz alta, com «Идите прямо до … Поверните налево … Музей будет справа.»'),
    ]),
    sessao('S3', 'Distância e tempo', [
      revisao(5, 'Escreva um caminho de 4 instruções de casa até o mercado.'),
      gramatica(10, 'Longe, perto e quantos minutos', 'PASSO 1: «ДАЛЕКО» (longe) e «БЛИЗКО» (perto) não mudam: «Это далеко? — Нет, близко». PASSO 2: «ОТ» + genitivo: «далеко от центра, близко от дома». PASSO 3: o tempo a pé: «пять минут пешком»; de veículo: «десять минут на автобусе». PASSO 4: «ЧЕРЕЗ» + acusativo = daqui a: «через пять минут». PASSO 5: «ЗА» + acusativo = em (no prazo de): «Я дойду за десять минут».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Это далеко?', traducao: 'É longe?' }, { frase: 'Нет, это близко.', traducao: 'Não, é perto.' }, { frase: 'Пять минут пешком.', traducao: 'Cinco minutos a pé.' }, { frase: 'Десять минут на автобусе.', traducao: 'Dez minutos de ônibus.' }, { frase: 'Через пять минут будет остановка.', traducao: 'Daqui a cinco minutos haverá um ponto.' },
        ],
      }),
      dialogo(8, 'Как пройти в музей? / Como chego ao museu?', 'Max pergunta o caminho a uma moça.', [
        ['Макс', 'Извините, как пройти в музей?', 'Com licença, como chego ao museu?'], ['Прохожая', 'Идите прямо до светофора, потом поверните налево.', 'Siga em frente até o semáforo e depois vire à esquerda.'], ['Макс', 'Это далеко?', 'É longe?'],
        ['Прохожая', 'Нет, пять минут пешком. Музей будет справа, напротив банка.', 'Não, cinco minutos a pé. O museu fica à direita, em frente ao banco.'], ['Макс', 'Спасибо! А там есть остановка автобуса?', 'Obrigado! E lá tem ponto de ônibus?'], ['Прохожая', 'Да, за углом, рядом с аптекой.', 'Sim, dobrando a esquina, ao lado da farmácia.'],
        ['Макс', 'Большое спасибо!', 'Muito obrigado!'], ['Прохожая', 'Пожалуйста! Удачи!', 'De nada! Boa sorte!'],
      ]),
      producao(7, 'Pergunte e responda em voz alta: o caminho, a distância e o tempo a pé até um lugar da sua cidade.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um diálogo de 6 falas pedindo um caminho.'),
      exercicios(20, [
        lacuna('Как пройти ___ музей?', ['в', 'на', 'до'], 'в', '«в музей» (acusativo).'), lacuna('Как доехать ___ вокзала?', ['до', 'в', 'на'], 'до', '«до» + genitivo.'), lacuna('Идите прямо ___ светофора.', ['до', 'в', 'у'], 'до', 'Limite: «до» + genitivo.'),
        lacuna('Идите ___ банка. (passando por)', ['мимо', 'через', 'за'], 'мимо', '«мимо» + genitivo.'), lacuna('Перейдите ___ дорогу.', ['через', 'мимо', 'до'], 'через', '«через» + acusativo.'), lacuna('Музей ___, напротив банка. (à direita, posição)', ['справа', 'направо', 'вправо'], 'справа', 'Posição: справа/слева.'),
        mc('Para «vire à esquerda» diga:', ['Поверните налево', 'Поверните слева', 'Идите налева'], 'Поверните налево', 'Movimento: налево.'), mc('«Напротив» significa:', ['em frente de', 'ao lado de', 'atrás de'], 'em frente de', 'напротив = em frente.'), mc('«Через пять минут» significa:', ['daqui a cinco minutos', 'há cinco minutos', 'em cinco metros'], 'daqui a cinco minutos', '«через» + tempo = daqui a.'),
        ordem('Ordene: «Идите прямо до светофора.»', ['Идите', 'прямо', 'до', 'светофора'], 'Идите прямо до светофора.', '«до» + genitivo.'), ouvir('Музей будет справа, напротив банка', ['Музей будет справа, напротив банка', 'Музей будет слева, рядом с банком', 'Банк будет справа'], 'Музей будет справа, напротив банка', '«напротив» + genitivo.'), ditado('Как пройти в музей', '«в» + acusativo.'),
        livre('Escreva 5 frases: uma pergunta de caminho, duas instruções, uma distância e um agradecimento.', 'Извините, как пройти в музей? Идите прямо до светофора. Поверните налево. Это близко, пять минут пешком. Спасибо!'),
      ]),
      producao(5, 'Grave-se dando direções a um turista.'),
    ]),
  ],
});
