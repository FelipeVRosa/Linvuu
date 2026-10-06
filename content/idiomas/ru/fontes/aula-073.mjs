import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 73, titulo: 'Cultura e tradições', nivel: 'b1',
  objetivo: 'Falar de festas e costumes (отмечать, принято, в честь, по традиции, считается, что), comparar tradições do Brasil e da Rússia e ler um texto curto sobre uma festa.',
  nota: 'Você fala de festas, costumes e tradições. Próxima aula: leitura de textos adaptados.',
  sessoes: [
    sessao('S1', 'Festas e costumes', [
      revisao(5, 'Escreva 5 frases de propostas para o bairro: necessário, preciso que, vamos e se.'),
      palavras(8, [['праздник', 'práznik', 'festa, feriado', 'holiday'], ['традиция', 'tradítsiya', 'tradição', 'tradition'], ['обычай', 'abýchay', 'costume', 'custom'], ['отмечать', 'atmichát', 'comemorar', 'to celebrate'], ['подарок', 'padárak', 'presente', 'gift'], ['гости', 'góstyi', 'convidados', 'guests'], ['угощать', 'ugashchát', 'oferecer comida', 'to treat'], ['стол', 'stol', 'mesa', 'table']]),
      gramatica(12, 'Falar de costumes', 'PASSO 1: «ОТМЕЧАТЬ» + acusativo = comemorar: «Мы отмечаем Новый год». PASSO 2: «В ЧЕСТЬ» + genitivo = em honra de: «в честь победы». PASSO 3: «ПРИНЯТО» + infinitivo = é costume: «В России принято дарить цветы». PASSO 4: «ПО ТРАДИЦИИ» = por tradição: «По традиции мы собираемся вместе». PASSO 5: «СЧИТАЕТСЯ, ЧТО» = considera-se que: «Считается, что блины — символ солнца». PASSO 6: «ОБЫЧНО» e «ТРАДИЦИОННО»: «Обычно мы встречаем гостей дома». PASSO 7: para contrastar países: «В России принято…, а в Бразилии принято…». PASSO 8: «УГОЩАТЬ» + acusativo + instrumental: «угощать гостей пирогом».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Мы отмечаем Новый год дома.', traducao: 'Comemoramos o Ano Novo em casa.' }, { frase: 'В России принято дарить цветы.', traducao: 'Na Rússia é costume dar flores.' }, { frase: 'По традиции мы собираемся вместе.', traducao: 'Por tradição nos reunimos.' }, { frase: 'Считается, что блины — символ солнца.', traducao: 'Considera-se que as panquecas são símbolo do sol.' }, { frase: 'Он угощает гостей пирогом.', traducao: 'Ele oferece torta aos convidados.' },
        ],
        erros: [['Мы отмечаем в Новый год.', 'Мы отмечаем Новый год.', '«отмечать» + acusativo, sem preposição.'], ['В России принято дарим цветы.', 'В России принято дарить цветы.', '«принято» + infinitivo.'], ['Считается что блины — символ солнца.', 'Считается, что блины — символ солнца.', 'Vírgula antes de «что».']],
      }),
      producao(5, 'Diga: «Мы отмечаем … В России принято … В Бразилии принято … По традиции … Считается, что …»'),
    ]),
    sessao('S2', 'Масленица e outras tradições', [
      revisao(5, 'Escreva 5 frases sobre costumes do seu país.'),
      palavras(8, [['Масленица', 'Maslyénitsa', 'Maslenitsa (festa)', 'Maslenitsa'], ['блины', 'blíny', 'panquecas russas', 'pancakes'], ['зима', 'zimá', 'inverno', 'winter'], ['проводы', 'pravódy', 'despedida', 'send-off'], ['Новый год', 'Nóvy got', 'Ano Novo', 'New Year'], ['Рождество', 'Razhdyestvó', 'Natal ortodoxo', 'Christmas'], ['символ', 'símval', 'símbolo', 'symbol'], ['сжигать', 'szhigát', 'queimar', 'to burn']]),
      texto(10, 'Масленица / Maslenitsa', 'Масленица — старинный русский праздник проводов зимы. Его отмечают в последнюю неделю перед Великим постом, обычно в феврале или в марте. По традиции в эти дни пекут блины, потому что они круглые и золотые, как солнце. Считается, что блины приносят в дом тепло. Гости собираются за одним столом, угощают друг друга, поют песни и играют. В конце праздника принято сжигать чучело зимы. Так люди прощаются с холодами и радуются весне.',
        'Maslenitsa é uma antiga festa russa da despedida do inverno. É comemorada na última semana antes da Grande Quaresma, geralmente em fevereiro ou março. Por tradição, nesses dias fazem-se panquecas, porque são redondas e douradas como o sol. Considera-se que as panquecas trazem calor à casa. Os convidados reúnem-se à mesma mesa, oferecem comida uns aos outros, cantam e brincam. No fim da festa é costume queimar o boneco do inverno. Assim as pessoas se despedem do frio e se alegram com a primavera.',
        [['Что провожают на Масленицу?', 'Зиму'], ['Что пекут по традиции?', 'Блины'], ['Почему блины похожи на солнце?', 'Они круглые и золотые'], ['Что принято сжигать в конце?', 'Чучело зимы']]),
      gramatica(4, 'Comparar tradições', 'PASSO 1: para comparar: «В России принято…, а в Бразилии…». PASSO 2: para contrastar: «Зато», «Наоборот», «С одной стороны… С другой…». PASSO 3: para pedir informação: «Как у вас принято отмечать…?». PASSO 4: para explicar: «Это связано с…» (isto está ligado a), «Это символ…».', {
        tag: 'Frase',
        tabela: [
          { frase: 'В России принято дарить цветы, а в Бразилии часто дарят шоколад.', traducao: 'Na Rússia é costume dar flores e no Brasil muitas vezes dá-se chocolate.' }, { frase: 'Как у вас принято отмечать Новый год?', traducao: 'Como se costuma comemorar o Ano Novo aí?' }, { frase: 'Это связано с традицией.', traducao: 'Isso está ligado à tradição.' },
        ],
      }),
      producao(3, 'Conte em voz alta uma festa do seu país: quando é, o que se come e o que simboliza.'),
    ]),
    sessao('S3', 'Brasil e Rússia', [
      revisao(5, 'Escreva 5 frases comparando uma tradição brasileira com uma russa.'),
      gramatica(10, 'Conversar sobre festas', 'PASSO 1: pergunte: «Как вы отмечаете…?». PASSO 2: conte: «У нас принято…». PASSO 3: compare: «В Бразилии, например, …». PASSO 4: convide: «Приходите к нам на Масленицу!». PASSO 5: agradeça: «Спасибо за приглашение».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Как вы отмечаете Новый год?', traducao: 'Como vocês comemoram o Ano Novo?' }, { frase: 'У нас принято собираться вместе.', traducao: 'Entre nós é costume reunir-se.' }, { frase: 'Приходите к нам на Масленицу!', traducao: 'Venham à nossa Maslenitsa!' }, { frase: 'Спасибо за приглашение.', traducao: 'Obrigado pelo convite.' },
        ],
      }),
      dialogo(8, 'Праздники / As festas', 'Max, que é brasileiro, e Nina falam das festas.', [
        ['Нина', 'Макс, как вы отмечаете Новый год в Бразилии?', 'Max, como vocês comemoram o Ano Novo no Brasil?'], ['Макс', 'Обычно мы собираемся на пляже и смотрим салют. А у вас?', 'Normalmente nos reunimos na praia e vemos os fogos. E vocês?'], ['Нина', 'В России принято встречать Новый год дома, за большим столом.', 'Na Rússia é costume receber o Ano Novo em casa, à mesa farta.'],
        ['Макс', 'А что принято дарить?', 'E o que é costume dar de presente?'], ['Нина', 'Подарки, конфеты и, конечно, цветы. А ещё мы печём блины на Масленицу.', 'Presentes, doces e, claro, flores. E ainda fazemos panquecas na Maslenitsa.'], ['Макс', 'Блины? Считается, что они приносят тепло?', 'Panquecas? Considera-se que elas trazem calor?'],
        ['Нина', 'Да, и приходи к нам на Масленицу!', 'Sim, e venha à nossa Maslenitsa!'], ['Макс', 'С удовольствием! Спасибо за приглашение.', 'Com prazer! Obrigado pelo convite.'],
      ]),
      producao(7, 'Converse em voz alta sobre as festas do seu país e as da Rússia, com «принято», «считается» e «по традиции».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre uma festa.'),
      exercicios(20, [
        lacuna('Мы ___ Новый год дома. (comemoramos)', ['отмечаем', 'отмечать', 'отмечал'], 'отмечаем', '«мы отмечаем».'), lacuna('В России принято ___ цветы.', ['дарить', 'дарим', 'дарил'], 'дарить', '«принято» + infinitivo.'), lacuna('___ традиции мы собираемся вместе. (por)', ['По', 'В', 'К'], 'По', '«по традиции».'),
        lacuna('Считается, ___ блины приносят тепло.', ['что', 'чтобы', 'если'], 'что', '«считается, что».'), lacuna('Мы празднуем в ___ победы. (em honra)', ['честь', 'чести', 'честью'], 'честь', '«в честь» + genitivo.'), lacuna('Он угощает гостей ___. (com torta)', ['пирогом', 'пирог', 'пирога'], 'пирогом', '«угощать» + instrumental.'),
        mc('«Принято» significa:', ['é costume', 'está proibido', 'foi pago'], 'é costume', '«принято» + infinitivo.'), mc('«Масленица» é a festa da:', ['despedida do inverno', 'chegada do outono', 'colheita'], 'despedida do inverno', 'Проводы зимы.'), mc('«Блины» simbolizam:', ['o sol', 'a chuva', 'a neve'], 'o sol', 'Redondos e dourados.'),
        ordem('Ordene: «В России принято дарить цветы.»', ['В', 'России', 'принято', 'дарить', 'цветы'], 'В России принято дарить цветы.', '«принято» + infinitivo.'), ouvir('Считается, что блины приносят тепло', ['Считается, что блины приносят тепло', 'Блины приносят в дом холод', 'Считается блины'], 'Считается, что блины приносят тепло', '«считается, что».'), ditado('Мы отмечаем Новый год дома', '«отмечать» + acusativo.'),
        livre('Escreva 5 frases: uma festa que você comemora, um costume, uma tradição, uma comparação Brasil e Rússia e um convite.', 'Мы отмечаем Новый год. В России принято дарить цветы. По традиции мы собираемся вместе. В Бразилии мы смотрим салют. Приходите к нам в гости!'),
      ]),
      producao(5, 'Grave-se falando de uma festa e comparando com a Rússia.'),
    ]),
  ],
});
