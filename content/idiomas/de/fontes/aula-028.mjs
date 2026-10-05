import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 28, titulo: 'Dativo 3: as preposições que pedem dativo', nivel: 'a2',
  objetivo: 'Usar aus, bei, mit, nach, seit, von e zu (e gegenüber) com o dativo, as contrações (beim, vom, zum, zur) e as expressões de origem, companhia, meio, tempo e destino.',
  nota: 'Você domina as sete preposições do dativo. Próxima aula: o acusativo e as preposições de lugar.',
  sessoes: [
    sessao('S1', 'Aus, bei, mit', [
      revisao(5, 'Escreva 6 frases com verbos que pedem dativo e 2 com sensações.'),
      palavras(8, [
        ['der Arzt', 'der artst', 'médico', 'doctor'], ['der Chef', 'der xéf', 'chefe', 'boss'], ['der Zug', 'der tsuk', 'trem', 'train'], ['die Arbeit', 'di árbait', 'trabalho', 'work'],
        ['der Urlaub', 'der úrlaup', 'férias', 'holiday'], ['die Straßenbahn', 'di xtrásen-ban', 'bonde, VLT', 'tram'], ['das Flugzeug', 'das flúk-tsoik', 'avião', 'plane'], ['das Schiff', 'das xif', 'navio', 'ship'],
      ]),
      gramatica(14, 'Aus, bei, mit: sempre dativo, passo a passo', 'PASSO 1: sete preposições pedem SEMPRE o dativo: aus, bei, mit, nach, seit, von, zu. Decore-as em fila, como uma canção. PASSO 2: «aus» = de (origem) ou feito de: «Ich komme aus Brasilien», «aus dem Haus», «aus Holz». PASSO 3: «bei» = na casa de, no local de, perto de: «bei Anna», «beim Arzt» (bei dem), «bei der Arbeit». PASSO 4: «mit» = com (companhia) e por meio de (transporte, instrumento): «mit meiner Mutter», «mit dem Zug», «mit dem Bus». PASSO 5: depois delas, o artigo vai SEMPRE para o dativo: dem (m), der (f), dem (n), den+n (pl). PASSO 6: contração: bei dem = «beim».', {
        tag: 'Preposições',
        comparacao: 'o português usa «de», «em casa de», «com» sem mudar a palavra. Em alemão, depois dessas preposições, o artigo muda de forma (dem, der, den).',
        tabela: [
          { preposicao: 'aus', significado: 'de (origem, material)', exemplo: 'Ich komme aus dem Haus. / aus Brasilien.' }, { preposicao: 'bei', significado: 'na casa de, no local de', exemplo: 'Ich bin beim Arzt. Ich wohne bei meiner Oma.' }, { preposicao: 'mit', significado: 'com; por meio de', exemplo: 'Ich fahre mit dem Zug. Ich gehe mit meiner Freundin.' },
        ],
        erros: [['Ich fahre mit der Bus.', 'Ich fahre mit dem Bus.', '«mit» pede dativo; «Bus» é masculino: dem.'], ['Ich wohne bei meine Oma.', 'Ich wohne bei meiner Oma.', '«bei» pede dativo; feminino: «meiner».'], ['Ich bin bei dem Arzt.', 'Ich bin beim Arzt.', 'Na fala, «bei dem» vira «beim».']],
      }),
      producao(3, 'Diga 6 frases com aus, bei e mit: «Ich komme aus … Ich bin beim … Ich fahre mit dem …»'),
    ]),
    sessao('S2', 'Nach, seit, von, zu', [
      revisao(5, 'Escreva as 3 primeiras preposições do dativo e 2 frases com cada uma.'),
      palavras(8, [
        ['nach', 'narr', 'depois de; para (cidade, país)', 'after; to'], ['seit', 'zait', 'desde, há (tempo)', 'since'], ['von', 'fon', 'de, por (autor)', 'from, by'], ['zu', 'tsu', 'para, até (pessoa, lugar)', 'to'],
        ['gegenüber', 'gueguen-über', 'em frente a', 'opposite'], ['der Monat', 'der mônat', 'mês', 'month'], ['das Jahr', 'das iár', 'ano', 'year'], ['die Woche', 'di vórre', 'semana', 'week'],
      ]),
      gramatica(12, 'Nach, seit, von, zu: sempre dativo, passo a passo', 'PASSO 1: «nach» tem dois usos: DEPOIS DE (tempo): «nach der Arbeit», «nach dem Essen»; e PARA com cidades e países (sem artigo): «nach Berlin», «nach Brasilien». PASSO 2: «seit» diz desde quando algo dura e usa o PRESENTE: «Ich wohne seit zwei Jahren in Berlin» (moro há dois anos). No dativo plural, o substantivo ganha -n («Jahren»). PASSO 3: «von» = de (origem, posse, autor): «ein Brief von meiner Mutter», «vom Chef» (von dem). PASSO 4: «zu» = para, até pessoas e lugares: «zum Arzt» (zu dem), «zur Schule» (zu der), «zu meiner Oma». PASSO 5: contrações: «zu dem» = «zum»; «zu der» = «zur»; «von dem» = «vom». PASSO 6: «gegenüber» vem depois do substantivo: «dem Bahnhof gegenüber» ou «gegenüber dem Bahnhof».', {
        tag: 'Preposições',
        tabela: [
          { preposicao: 'nach', significado: 'depois de; para cidades e países', exemplo: 'Nach der Arbeit fahre ich nach Berlin.' }, { preposicao: 'seit', significado: 'desde, há (tempo)', exemplo: 'Ich wohne seit zwei Jahren hier.' }, { preposicao: 'von', significado: 'de, por', exemplo: 'Das Geschenk ist von meinem Chef.' }, { preposicao: 'zu', significado: 'para, até', exemplo: 'Ich gehe zum Arzt. / zur Schule.' }, { preposicao: 'gegenüber', significado: 'em frente a', exemplo: 'Die Bank ist dem Bahnhof gegenüber.' },
        ],
        exemplos: [['Nach dem Essen trinke ich Kaffee.', 'Depois da refeição eu tomo café.'], ['Ich arbeite seit einem Jahr bei Siemens.', 'Trabalho há um ano na Siemens.'], ['Ich bekomme einen Brief von meiner Mutter.', 'Recebo uma carta da minha mãe.'], ['Ich gehe zur Post und dann zum Supermarkt.', 'Vou ao correio e depois ao supermercado.']],
        erros: [['Ich wohne seit drei Jahre hier.', 'Ich wohne seit drei Jahren hier.', 'Dativo plural: +n.'], ['Ich bin seit drei Jahren hier gewesen.', 'Ich bin seit drei Jahren hier.', '«seit» usa o PRESENTE.'], ['Ich fahre zu Berlin.', 'Ich fahre nach Berlin.', 'Cidade: «nach».']],
      }),
      producao(5, 'Diga 6 frases com nach, seit, von e zu: «Nach der Arbeit … Ich wohne seit … Ein Brief von … Ich gehe zum …»'),
    ]),
    sessao('S3', 'Contrações e diálogo', [
      revisao(5, 'Escreva as sete preposições do dativo em ordem e uma frase com cada uma.'),
      gramatica(10, 'As contrações: beim, vom, zum, zur', 'PASSO 1: na fala e na escrita corrente, a preposição e o artigo se juntam: bei dem → beim; von dem → vom; zu dem → zum; zu der → zur. PASSO 2: não há contração com «dem» de «mit» na fala comum (diz-se «mit dem»). PASSO 3: use a forma contraída sempre que o artigo for «dem» (masculino e neutro) ou «der» (só com «zu»): «beim Arzt», «vom Bahnhof», «zum Supermarkt», «zur Schule».', {
        tag: 'Preposições',
        tabela: [
          { forma: 'bei dem', contraido: 'beim', exemplo: 'Ich bin beim Arzt.' }, { forma: 'von dem', contraido: 'vom', exemplo: 'Ich komme vom Bahnhof.' }, { forma: 'zu dem', contraido: 'zum', exemplo: 'Ich gehe zum Supermarkt.' }, { forma: 'zu der', contraido: 'zur', exemplo: 'Ich gehe zur Schule.' },
        ],
      }),
      dialogo(10, 'Woher kommst du? Wohin gehst du? / De onde você vem? Para onde vai?', 'Dois amigos se encontram na rua.', [
        ['Mia', 'Woher kommst du gerade?', 'De onde você está vindo agora?'], ['Jonas', 'Ich komme vom Arzt. Ich war seit acht Uhr dort.', 'Estou vindo do médico. Estive lá desde as oito.'], ['Mia', 'Und wie bist du dorthin gekommen?', 'E como você chegou lá?'],
        ['Jonas', 'Mit dem Bus. Und du? Wohin gehst du jetzt?', 'De ônibus. E você? Para onde vai agora?'], ['Mia', 'Ich gehe zur Post und dann zum Supermarkt.', 'Vou ao correio e depois ao supermercado.'], ['Jonas', 'Gehst du zu Fuß?', 'Vai a pé?'],
        ['Mia', 'Ja, nach der Arbeit gehe ich gern zu Fuß.', 'Sim, depois do trabalho gosto de ir a pé.'], ['Jonas', 'Ich wohne seit zwei Jahren hier und kenne die Stadt noch nicht gut.', 'Moro aqui há dois anos e ainda não conheço bem a cidade.'], ['Mia', 'Dann komm mit! Ich zeige dir die Stadt.', 'Então venha comigo! Eu mostro a cidade a você.'], ['Jonas', 'Gern, danke!', 'Com prazer, obrigado!'],
      ]),
      producao(5, 'Diga de onde você vem e para onde vai agora, e como se desloca: «Ich komme vom … Ich gehe zum … Ich fahre mit dem …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 7 frases, uma com cada preposição do dativo.'),
      exercicios(20, [
        lacuna('Ich fahre mit ___ Bus. (o)', ['dem', 'den', 'der'], 'dem', 'Masculino dativo.'), lacuna('Ich komme aus ___ Schule. (da)', ['der', 'die', 'dem'], 'der', 'Feminino dativo.'), lacuna('Ich bin ___ Arzt. (no)', ['beim', 'bei den', 'bei der'], 'beim', 'bei + dem = beim.'),
        lacuna('Nach ___ Arbeit fahre ich nach Hause. (da)', ['der', 'die', 'den'], 'der', 'Feminino dativo.'), lacuna('Ich wohne seit zwei ___ hier. (anos)', ['Jahren', 'Jahre', 'Jahr'], 'Jahren', 'Dativo plural: +n.'), lacuna('Ich gehe ___ Arzt. (ao)', ['zum', 'zur', 'ins'], 'zum', 'zu + dem = zum.'),
        lacuna('Ich gehe ___ Schule. (à)', ['zur', 'zum', 'ins'], 'zur', 'zu + der = zur.'), lacuna('Der Brief ist ___ meiner Mutter. (de)', ['von', 'aus', 'bei'], 'von', 'von = de (origem do autor).'), lacuna('Ich fahre ___ Berlin. (para)', ['nach', 'zu', 'in'], 'nach', 'Cidade: nach.'),
        mc('Qual preposição NÃO pede dativo?', ['für', 'mit', 'bei'], 'für', '«für» pede acusativo.'), mc('«beim» é a contração de:', ['bei dem', 'bei den', 'bei der'], 'bei dem', 'bei + dem = beim.'), mc('«seit» usa:', ['o presente', 'o Perfekt', 'o futuro'], 'o presente', 'Algo que continua.'),
        ordem('Ordene: «Eu moro aqui há dois anos.»', ['Ich', 'wohne', 'seit', 'zwei', 'Jahren', 'hier'], 'Ich wohne seit zwei Jahren hier.', 'seit + presente.'), ouvir('Ich komme vom Bahnhof', ['Ich komme vom Bahnhof', 'Ich gehe zum Bahnhof', 'Ich fahre mit dem Zug'], 'Ich komme vom Bahnhof', '«vom» = von dem.'), ditado('Nach der Arbeit gehe ich zum Supermarkt', 'nach + dativo; zum = zu dem.'),
        livre('Escreva 5 frases com aus, bei, mit, nach, seit, von e zu (use pelo menos 5 delas).', 'Ich komme aus Brasilien. Ich bin beim Arzt. Ich fahre mit dem Zug. Ich wohne seit zwei Jahren hier. Ich gehe zur Schule.'),
      ]),
      producao(5, 'Grave-se contando o seu dia: de onde você veio, com quem ou como foi, para onde vai e desde quando mora na sua cidade.'),
    ]),
  ],
});
