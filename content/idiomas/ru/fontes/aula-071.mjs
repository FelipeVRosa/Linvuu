import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 71, titulo: 'Mídia, notícias e internet', nivel: 'b1',
  objetivo: 'Falar de notícias e internet: citar fontes (по сообщению, как сообщает, по данным), usar verbos da mídia e da rede (подписаться, делиться, скачать), e ler uma notícia curta.',
  nota: 'Você lê e comenta notícias e fala de redes e aplicativos. Próxima aula: cidade e meio ambiente.',
  sessoes: [
    sessao('S1', 'Notícias e fontes', [
      revisao(5, 'Escreva 5 frases com conectores e opinião sobre um tema do trabalho.'),
      palavras(8, [['новости', 'nóvasti', 'notícias', 'news'], ['газета', 'gazyéta', 'jornal', 'newspaper'], ['журналист', 'zhurnalíst', 'jornalista', 'journalist'], ['статья', 'statyá', 'artigo', 'article'], ['сообщение', 'sapashchyéniye', 'comunicado, mensagem', 'report'], ['источник', 'istóchnik', 'fonte', 'source'], ['данные', 'dánnyye', 'dados', 'data'], ['пресс-служба', 'pres-slúzhba', 'assessoria de imprensa', 'press office']]),
      gramatica(12, 'Citar fontes e relatar notícias', 'PASSO 1: para citar uma FONTE, use «ПО СООБЩЕНИЮ» + genitivo («по сообщению пресс-службы»), «ПО ДАННЫМ» + genitivo («по данным опроса»), «СОГЛАСНО» + dativo («согласно прогнозу»). PASSO 2: «КАК СООБЩАЕТ» + nominativo: «Как сообщает пресс-служба, станцию откроют в мае». PASSO 3: o relato impessoal usa a 3ª pessoa do plural: «Сообщают, что…», «Говорят, что…», «Пишут, что…». PASSO 4: o texto escrito usa «ГОВОРИТСЯ, ЧТО» («diz-se que»): «В статье говорится, что…». PASSO 5: para dúvida: «По непроверенным данным…» (segundo dados não confirmados). PASSO 6: use o passado ou o presente conforme o fato.', {
        tag: 'Frase',
        tabela: [
          { frase: 'По сообщению пресс-службы, станцию откроют в мае.', traducao: 'Segundo a assessoria, a estação será aberta em maio.' }, { frase: 'По данным опроса, большинство довольно.', traducao: 'Segundo a pesquisa, a maioria está satisfeita.' }, { frase: 'Согласно прогнозу, завтра будет дождь.', traducao: 'Segundo a previsão, amanhã vai chover.' }, { frase: 'Как сообщает пресс-служба, …', traducao: 'Como informa a assessoria, …' }, { frase: 'В статье говорится, что …', traducao: 'No artigo se diz que …' }, { frase: 'Сообщают, что …', traducao: 'Informam que …' },
        ],
        erros: [['По сообщение пресс-службы…', 'По сообщению пресс-службы…', '«по» + dativo: сообщению.'], ['Как сообщает пресс-службе…', 'Как сообщает пресс-служба…', 'Sujeito no nominativo.'], ['Согласно прогноза…', 'Согласно прогнозу…', '«согласно» + dativo.']],
      }),
      producao(5, 'Cite 4 fontes: «По сообщению … По данным … Согласно … Как сообщает …»'),
    ]),
    sessao('S2', 'Internet, redes e aplicativos', [
      revisao(5, 'Escreva 5 frases citando fontes de uma notícia.'),
      palavras(8, [['сайт', 'sait', 'site', 'website'], ['приложение', 'prilazhyéniye', 'aplicativo', 'app'], ['социальные сети', 'satsiálnyye syeti', 'redes sociais', 'social networks'], ['пароль', 'paról', 'senha', 'password'], ['скачать', 'skachát', 'baixar', 'to download'], ['подписаться', 'patpisátsya', 'seguir, assinar', 'to subscribe'], ['делиться', 'dyelítsya', 'compartilhar', 'to share'], ['ссылка', 'ssýlka', 'link', 'link']]),
      gramatica(12, 'Verbos da rede e a regência', 'PASSO 1: «ПОЛЬЗОВАТЬСЯ» + instrumental: «пользоваться интернетом, приложением». PASSO 2: «ПОДПИСАТЬСЯ НА» + acusativo: «подписаться на канал, на новости». PASSO 3: «ДЕЛИТЬСЯ» + instrumental: «делиться фотографиями, ссылкой». PASSO 4: «СКАЧАТЬ» + acusativo: «скачать приложение». PASSO 5: «В ИНТЕРНЕТЕ» e «В СЕТИ»: «Я нашёл это в интернете». PASSO 6: «ПО ИНТЕРНЕТУ» ou «ЧЕРЕЗ ИНТЕРНЕТ» para o meio: «заказать по интернету». PASSO 7: «ОТПРАВИТЬ СООБЩЕНИЕ» + dativo: «отправить сообщение другу». PASSO 8: «ЗАЙТИ НА САЙТ» (entrar num site): «Зайди на сайт и скачай приложение».', {
        tag: 'Casos',
        tabela: [
          { frase: 'Я пользуюсь приложением.', traducao: 'Uso o aplicativo.' }, { frase: 'Я подписался на канал.', traducao: 'Segui o canal.' }, { frase: 'Он делится фотографиями.', traducao: 'Ele compartilha fotos.' }, { frase: 'Скачай приложение по ссылке.', traducao: 'Baixe o aplicativo pelo link.' }, { frase: 'Я нашёл это в интернете.', traducao: 'Achei isso na internet.' }, { frase: 'Зайди на сайт.', traducao: 'Entre no site.' },
        ],
        erros: [['Я подписался канал.', 'Я подписался на канал.', '«подписаться на» + acusativo.'], ['Он делится фотографии.', 'Он делится фотографиями.', '«делиться» + instrumental.'], ['Я пользуюсь приложение.', 'Я пользуюсь приложением.', '«пользоваться» + instrumental.']],
      }),
      producao(5, 'Diga: «Я пользуюсь … Я подписался на … Я делюсь … Я скачал … Я нашёл это в интернете.»'),
    ]),
    sessao('S3', 'Ler uma notícia', [
      revisao(5, 'Escreva 5 frases com verbos da rede e a regência certa.'),
      texto(10, 'Новости города / Notícias da cidade', 'Как сообщает пресс-служба мэрии, в Москве открыли новую станцию метро. Станция находится рядом с парком, поэтому ею будут пользоваться жители трёх районов. По данным опроса, большинство горожан довольно новой станцией. В статье говорится, что проезд будет стоить столько же, сколько на других станциях. Журналисты сообщают, что рядом откроют несколько магазинов.',
        'Como informa a assessoria da prefeitura, foi inaugurada em Moscou uma nova estação de metrô. A estação fica perto de um parque, por isso será usada pelos moradores de três bairros. Segundo uma pesquisa, a maioria dos moradores está satisfeita com a nova estação. No artigo diz-se que a passagem custará o mesmo que nas outras estações. Os jornalistas informam que nas proximidades abrirão algumas lojas.',
        [['Что открыли в Москве?', 'Новую станцию метро'], ['Где находится станция?', 'Рядом с парком'], ['Довольны ли горожане?', 'Да, большинство довольно'], ['Сколько будет стоить проезд?', 'Столько же, сколько на других станциях']]),
      gramatica(8, 'Entender uma notícia', 'PASSO 1: procure a FONTE: «как сообщает», «по данным». PASSO 2: procure o FATO principal: «открыли станцию». PASSO 3: procure a CAUSA: «поэтому». PASSO 4: procure o NÚMERO e a QUANTIDADE: «жители трёх районов», «столько же». PASSO 5: resuma em duas frases.', {
        tag: 'Frase',
        tabela: [
          { pergunta: 'Quem informa?', resposta: 'пресс-служба мэрии' }, { pergunta: 'O que aconteceu?', resposta: 'открыли станцию метро' }, { pergunta: 'Por quê?', resposta: 'станция рядом с парком' }, { pergunta: 'Quantos?', resposta: 'жители трёх районов' },
        ],
      }),
      producao(7, 'Resuma a notícia em voz alta, em duas frases, citando a fonte.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma pequena notícia de 5 frases, citando a fonte.'),
      exercicios(20, [
        lacuna('По ___ пресс-службы, станцию откроют в мае.', ['сообщению', 'сообщение', 'сообщения'], 'сообщению', '«по» + dativo.'), lacuna('Согласно ___, завтра будет дождь. (previsão)', ['прогнозу', 'прогноз', 'прогноза'], 'прогнозу', '«согласно» + dativo.'), lacuna('Я подписался ___ канал.', ['на', 'в', 'о'], 'на', '«подписаться на» + acusativo.'),
        lacuna('Он делится ___. (fotos)', ['фотографиями', 'фотографии', 'фотографий'], 'фотографиями', '«делиться» + instrumental.'), lacuna('Я пользуюсь ___. (aplicativo)', ['приложением', 'приложение', 'приложения'], 'приложением', '«пользоваться» + instrumental.'), lacuna('Я нашёл это ___ интернете.', ['в', 'на', 'по'], 'в', '«в интернете».'),
        mc('«Как сообщает пресс-служба» introduz:', ['uma fonte', 'uma pergunta', 'uma ordem'], 'uma fonte', 'Fonte.'), mc('«Скачать» significa:', ['baixar', 'subir', 'apagar'], 'baixar', 'скачать.'), mc('«Говорится, что» é típico de:', ['texto escrito', 'conversa', 'ordem'], 'texto escrito', 'Impessoal escrito.'),
        ordem('Ordene: «Я подписался на канал.»', ['Я', 'подписался', 'на', 'канал'], 'Я подписался на канал.', '«на» + acusativo.'), ouvir('По данным опроса, большинство довольно', ['По данным опроса, большинство довольно', 'Опрос закончился', 'Большинство ушло'], 'По данным опроса, большинство довольно', '«по данным».'), ditado('Как сообщает пресс-служба', 'Fonte.'),
        livre('Escreva 5 frases: uma fonte, um fato, uma causa, um verbo de rede e uma busca na internet.', 'По сообщению пресс-службы, станцию открыли. Станция рядом с парком. Поэтому ею пользуются многие. Я подписался на канал. Я нашёл это в интернете.'),
      ]),
      producao(5, 'Grave-se resumindo uma notícia e citando a fonte.'),
    ]),
  ],
});
