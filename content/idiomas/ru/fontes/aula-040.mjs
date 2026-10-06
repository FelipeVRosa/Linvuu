import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 40, titulo: 'Clima e estações', nivel: 'a2',
  objetivo: 'Falar do tempo (Идёт дождь, Сегодня холодно, минус пять), das estações e do ano (зимой, в этом году) e fazer previsões com o futuro.',
  nota: 'Você fala do tempo e das estações. Próxima aula: tempo livre e hobbies.',
  sessoes: [
    sessao('S1', 'Que tempo faz?', [
      revisao(5, 'Escreva um caminho com 5 instruções e a distância.'),
      palavras(8, [['погода', 'pagóda', 'tempo (clima)', 'weather'], ['дождь', 'dozht', 'chuva', 'rain'], ['снег', 'snyek', 'neve', 'snow'], ['ветер', 'vyétir', 'vento', 'wind'], ['солнце', 'sóntse', 'sol', 'sun'], ['облако', 'óblaka', 'nuvem', 'cloud'], ['градус', 'grádus', 'grau', 'degree'], ['прогноз', 'pragnós', 'previsão', 'forecast']]),
      gramatica(12, 'Falar do tempo sem sujeito', 'PASSO 1: para o tempo, o russo usa frases sem sujeito: «Какая сегодня погода?» — «Сегодня тепло». PASSO 2: com advérbios que não mudam: «тепло, холодно, жарко, прохладно, ветрено, солнечно, пасмурно». PASSO 3: chuva e neve «vão»: «Идёт дождь», «Идёт снег». PASSO 4: o sol e o vento «brilham» e «sopram»: «Светит солнце», «Дует ветер». PASSO 5: a temperatura: «Сегодня плюс двадцать градусов», «Сегодня минус пять». PASSO 6: depois de 5 ou mais, «градусов»; 2, 3 e 4: «градуса»; 1: «градус». PASSO 7: o futuro: «Завтра будет дождь», «Завтра будет холодно».', {
        tag: 'Frase',
        comparacao: 'em português diz-se «está frio» e «está chovendo». O russo diz «холодно» (frio), sem verbo, e «идёт дождь» (a chuva vai).',
        tabela: [
          { frase: 'Сегодня тепло. Сегодня холодно.', traducao: 'Hoje está quente. Hoje está frio.' }, { frase: 'Идёт дождь. Идёт снег.', traducao: 'Está chovendo. Está nevando.' }, { frase: 'Светит солнце. Дует ветер.', traducao: 'O sol brilha. O vento sopra.' }, { frase: 'Сегодня плюс двадцать градусов.', traducao: 'Hoje está 20 graus.' }, { frase: 'Сегодня минус пять.', traducao: 'Hoje está −5.' }, { frase: 'Завтра будет дождь.', traducao: 'Amanhã vai chover.' },
        ],
        erros: [['Сегодня есть холодно.', 'Сегодня холодно.', 'Sem «есть»: o advérbio basta.'], ['Дождь ходит.', 'Идёт дождь.', 'Chuva e neve «идут».']],
      }),
      producao(5, 'Descreva o tempo de hoje: «Сегодня … Идёт … Светит … Плюс … градусов. Завтра будет …»'),
    ]),
    sessao('S2', 'As estações e o ano', [
      revisao(5, 'Escreva 5 frases sobre o tempo.'),
      palavras(8, [['зима', 'zimá', 'inverno', 'winter'], ['весна', 'visná', 'primavera', 'spring'], ['лето', 'lyéta', 'verão', 'summer'], ['осень', 'ósin', 'outono', 'autumn'], ['сезон', 'sizón', 'estação do ano', 'season'], ['год', 'got', 'ano', 'year'], ['этот год', 'état got', 'este ano', 'this year'], ['прошлый год', 'próshlyy got', 'ano passado', 'last year']]),
      gramatica(12, 'Estações, meses e anos', 'PASSO 1: para dizer «no inverno», use o ADVÉRBIO em -ой / -ей / -ом: «зимой» (inverno), «весной» (primavera), «летом» (verão), «осенью» (outono). PASSO 2: para os meses, «в» + prepositivo: «в январе, в июле, в декабре». PASSO 3: para o ano, «в этом году» (este ano), «в прошлом году» (ano passado), «в следующем году» (ano que vem): «в» + prepositivo. PASSO 4: «год» tem prepositivo irregular: «в году»; com adjetivo: «в этом году». PASSO 5: para comparar: «Зимой холодно, а летом жарко».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Зимой холодно, а летом жарко.', traducao: 'No inverno faz frio e no verão faz calor.' }, { frase: 'Весной идёт дождь.', traducao: 'Na primavera chove.' }, { frase: 'Я люблю осень.', traducao: 'Gosto do outono.' }, { frase: 'В июле мы едем на море.', traducao: 'Em julho vamos ao mar.' }, { frase: 'В этом году я учу русский.', traducao: 'Este ano estou aprendendo russo.' }, { frase: 'В прошлом году я был в Москве.', traducao: 'No ano passado estive em Moscou.' },
        ],
        erros: [['В зима холодно.', 'Зимой холодно.', 'Estação: advérbio «зимой», sem «в».'], ['В этот год я учу русский.', 'В этом году я учу русский.', '«в» + prepositivo: в этом году.']],
      }),
      producao(5, 'Fale das estações do seu país: «Зимой … Летом … Весной … Осенью …»'),
    ]),
    sessao('S3', 'Previsão do tempo', [
      revisao(5, 'Escreva 5 frases sobre as estações e os meses.'),
      gramatica(10, 'Fazer planos conforme o tempo', 'PASSO 1: combine o tempo com «если» (aula 33): «Если будет дождь, мы останемся дома». PASSO 2: «хорошая погода» (bom tempo) e «плохая погода» (mau tempo). PASSO 3: para sugerir: «Если тепло, пойдём гулять». PASSO 4: para a previsão: «По прогнозу завтра будет солнечно» (segundo a previsão). PASSO 5: «Какая погода будет завтра?» (como será o tempo amanhã?).', {
        tag: 'Frase',
        tabela: [
          { frase: 'Какая погода будет завтра?', traducao: 'Como estará o tempo amanhã?' }, { frase: 'По прогнозу завтра будет солнечно.', traducao: 'Segundo a previsão, amanhã fará sol.' }, { frase: 'Если будет дождь, мы останемся дома.', traducao: 'Se chover, ficaremos em casa.' }, { frase: 'Если тепло, пойдём гулять.', traducao: 'Se estiver quente, vamos passear.' },
        ],
      }),
      dialogo(8, 'Какая погода? / Como está o tempo?', 'Dois amigos falam do tempo e dos planos.', [
        ['Маша', 'Влад, какая сегодня погода?', 'Vlad, como está o tempo hoje?'], ['Влад', 'Холодно и идёт дождь. Только плюс пять.', 'Está frio e chovendo. Só cinco graus.'], ['Маша', 'А какая погода будет завтра?', 'E como estará o tempo amanhã?'],
        ['Влад', 'По прогнозу будет солнечно, плюс десять.', 'Segundo a previsão, fará sol, dez graus.'], ['Маша', 'Отлично! Если будет солнечно, пойдём гулять в парк.', 'Ótimo! Se fizer sol, vamos passear no parque.'], ['Влад', 'Давай! Я люблю осень.', 'Vamos! Eu gosto do outono.'],
        ['Маша', 'А я люблю зиму. Зимой красиво.', 'E eu gosto do inverno. No inverno é bonito.'], ['Влад', 'Но летом в Бразилии жарко, да?', 'Mas no verão no Brasil faz calor, não é?'],
      ]),
      producao(7, 'Converse em voz alta sobre o tempo de hoje e de amanhã, e o que você faz conforme o tempo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre o tempo e as estações.'),
      exercicios(20, [
        lacuna('Сегодня ___. (frio)', ['холодно', 'холодный', 'холод'], 'холодно', 'Advérbio de estado: холодно.'), lacuna('___ дождь. (está chovendo)', ['Идёт', 'Ходит', 'Есть'], 'Идёт', 'Chuva: идёт.'), lacuna('Светит ___. (o sol)', ['солнце', 'солнца', 'солнцу'], 'солнце', 'Sujeito: nominativo.'),
        lacuna('Сегодня плюс двадцать ___. (graus)', ['градусов', 'градуса', 'градус'], 'градусов', 'Depois de 5 ou mais: градусов.'), lacuna('___ холодно, а летом жарко. (no inverno)', ['Зимой', 'В зима', 'Зима'], 'Зимой', 'Advérbio: зимой.'), lacuna('В ___ году я учу русский. (este)', ['этом', 'этот', 'это'], 'этом', '«в» + prepositivo.'),
        mc('«Завтра будет дождь» significa:', ['Amanhã vai chover', 'Hoje chove', 'Ontem choveu'], 'Amanhã vai chover', '«будет» = futuro.'), mc('Para «Está nevando»:', ['Идёт снег', 'Ходит снег', 'Есть снег'], 'Идёт снег', 'Neve: идёт.'), mc('«Прогноз» é:', ['previsão', 'tempo', 'estação'], 'previsão', 'Прогноз = previsão.'),
        ordem('Ordene: «Завтра будет холодно.»', ['Завтра', 'будет', 'холодно'], 'Завтра будет холодно.', 'Futuro: будет + advérbio.'), ouvir('Если будет дождь, мы останемся дома', ['Если будет дождь, мы останемся дома', 'Если идёт дождь, мы идём домой', 'Завтра будет солнечно'], 'Если будет дождь, мы останемся дома', '«если» + futuro.'), ditado('Зимой холодно, а летом жарко', 'Estações: зимой, летом.'),
        livre('Escreva 5 frases: o tempo de hoje, a previsão de amanhã, a sua estação favorita, uma frase com «если» e um mês.', 'Сегодня холодно. Завтра будет солнечно. Я люблю осень. Если будет дождь, я останусь дома. В июле жарко.'),
      ]),
      producao(5, 'Grave-se falando do tempo e da sua estação favorita.'),
    ]),
  ],
});
