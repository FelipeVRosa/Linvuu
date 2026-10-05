import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 12, titulo: 'Gramática: o dativo', nivel: 'a1',
  objetivo: 'Usar o dativo com os verbos que o pedem, com as preposições fixas (aus, bei, mit, nach, seit, von, zu) e na ordem certa quando há dativo e acusativo na mesma frase.',
  nota: 'Você usa o dativo com verbos e preposições. Próxima aula: o acusativo, as preposições de lugar e a Declinação-N.',
  sessoes: [
    sessao('S1', 'Verbos que pedem dativo', [
      revisao(5, 'Escreva o quadro dos artigos no dativo: masculino, feminino, neutro e plural.'),
      palavras(10, [
        ['helfen', 'hélfen', 'ajudar', 'to help'], ['danken', 'dánken', 'agradecer', 'to thank'], ['gehören', 'guehörren', 'pertencer', 'to belong'], ['gefallen', 'guefálen', 'agradar, gostar', 'to like'], ['schmecken', 'xmécken', 'ter gosto, agradar ao paladar', 'to taste'],
        ['antworten', 'ántvorten', 'responder', 'to answer'], ['gratulieren', 'gratulíren', 'parabenizar', 'to congratulate'], ['passen', 'pássen', 'servir, combinar', 'to fit'], ['fehlen', 'félen', 'faltar', 'to be missing'], ['glauben', 'gláuben', 'acreditar (em alguém)', 'to believe'],
      ]),
      gramatica(12, 'Verbos que pedem dativo', 'Alguns verbos alemães pedem dativo para a pessoa, mesmo quando em português o complemento é direto: «Ich helfe dir» (eu ajudo você), «Das Kleid gefällt mir» (o vestido agrada a mim = eu gosto do vestido), «Ich danke dir» (agradeço a você). Aprenda cada verbo junto com o dativo. «Helfen» troca e por i (du hilfst, er hilft); «gefallen» troca a por ä (es gefällt). O dativo também aparece em frases de sensação: «Mir ist kalt», «Wie geht es dir?», «Mir ist schlecht».', {
        tag: 'Casos',
        comparacao: 'em português dizemos «eu ajudo você» (objeto direto) e «eu gosto do vestido». Em alemão a pessoa de «helfen» e a coisa de «gefallen» vão para o dativo: «dir», «mir».',
        tabela: [
          { verbo: 'helfen', exemplo: 'Ich helfe dir.', pt: 'Eu ajudo você.' }, { verbo: 'danken', exemplo: 'Er dankt der Lehrerin.', pt: 'Ele agradece à professora.' }, { verbo: 'gehören', exemplo: 'Das Buch gehört mir.', pt: 'O livro é meu.' },
          { verbo: 'gefallen', exemplo: 'Das Kleid gefällt mir.', pt: 'Eu gosto do vestido.' }, { verbo: 'schmecken', exemplo: 'Die Suppe schmeckt mir.', pt: 'Eu gosto da sopa (do sabor).' }, { verbo: 'antworten', exemplo: 'Er antwortet dem Chef.', pt: 'Ele responde ao chefe.' },
          { verbo: 'gratulieren', exemplo: 'Wir gratulieren dir zum Geburtstag.', pt: 'Parabenizamos você pelo aniversário.' }, { verbo: 'passen', exemplo: 'Die Jacke passt mir.', pt: 'A jaqueta serve em mim.' }, { verbo: 'fehlen', exemplo: 'Mir fehlt Zeit.', pt: 'Falta-me tempo.' },
        ],
        erros: [['Ich helfe dich.', 'Ich helfe dir.', '«helfen» pede dativo.'], ['Das Kleid gefällt ich.', 'Das Kleid gefällt mir.', 'Quem gosta vai para o dativo.']],
      }),
      producao(3, 'Diga: «Ich helfe dir. Das Buch gehört mir. Das Kleid gefällt mir. Mir ist kalt.»'),
    ]),
    sessao('S2', 'Preposições que pedem dativo', [
      revisao(5, 'Escreva 5 frases com verbos que pedem dativo.'),
      palavras(8, [
        ['der Arzt', 'der artst', 'médico', 'doctor'], ['der Chef', 'der xéf', 'chefe', 'boss'], ['der Zug', 'der tsuk', 'trem', 'train'], ['die Arbeit', 'di árbait', 'trabalho', 'work'], ['der Urlaub', 'der úrlaup', 'férias', 'holiday'], ['die Straßenbahn', 'di xtrásen-ban', 'bonde, VLT', 'tram'], ['das Flugzeug', 'das flúk-tsoik', 'avião', 'plane'], ['das Schiff', 'das xif', 'navio', 'ship'],
      ]),
      gramatica(12, 'aus, bei, mit, nach, seit, von, zu: sempre dativo', 'Sete preposições pedem SEMPRE o dativo (decore-as em fila: aus, bei, mit, nach, seit, von, zu; «gegenüber» também). Usos: «aus» = de (origem, material): aus Brasilien. «Bei» = na casa de, no local de: bei Anna, beim Arzt. «Mit» = com, e meio de transporte: mit dem Bus. «Nach» = depois de; para cidades e países: nach dem Essen, nach Berlin. «Seit» = desde: seit zwei Jahren. «Von» = de, por: vom Chef. «Zu» = para, até (pessoas e lugares): zum Arzt, zur Schule. Contrações: bei dem = beim, von dem = vom, zu dem = zum, zu der = zur.', {
        tag: 'Preposições',
        tabela: [
          { preposicao: 'aus', significado: 'de (origem, material)', exemplo: 'Ich komme aus dem Haus.' }, { preposicao: 'bei', significado: 'na casa de, no local de', exemplo: 'Ich bin beim Arzt. Ich wohne bei meiner Oma.' }, { preposicao: 'mit', significado: 'com; meio de transporte', exemplo: 'Ich fahre mit dem Zug.' },
          { preposicao: 'nach', significado: 'depois de; para cidades e países', exemplo: 'Nach der Arbeit fahre ich nach Berlin.' }, { preposicao: 'seit', significado: 'desde, há (tempo)', exemplo: 'Ich wohne seit zwei Jahren hier.' }, { preposicao: 'von', significado: 'de, por', exemplo: 'Das Geschenk ist von meinem Chef.' },
          { preposicao: 'zu', significado: 'para, até (pessoas, lugares)', exemplo: 'Ich gehe zum Arzt.' },
        ],
        erros: [['Ich fahre mit der Bus.', 'Ich fahre mit dem Bus.', '«mit» pede dativo; «Bus» é masculino: dem.'], ['Ich wohne seit drei Jahre hier.', 'Ich wohne seit drei Jahren hier.', 'No dativo plural, o substantivo ganha -n.']],
      }),
      producao(5, 'Diga: «Ich fahre mit dem Zug zur Arbeit. Ich wohne seit zwei Jahren in Berlin. Nach der Arbeit gehe ich zum Arzt.»'),
    ]),
    sessao('S3', 'Dois objetos e diálogo', [
      revisao(5, 'Escreva as 7 preposições do dativo, em ordem, de memória.'),
      gramatica(10, 'Dativo e acusativo na mesma frase: a ordem', 'Quando uma frase tem dativo (a quem) e acusativo (o quê), a ordem é: (1) com DOIS SUBSTANTIVOS, o dativo vem antes: «Ich gebe dem Kind den Ball». (2) PRONOME antes de SUBSTANTIVO: «Ich gebe ihm den Ball», «Ich gebe ihn dem Kind». (3) Com DOIS PRONOMES, o acusativo vem antes: «Ich gebe ihn ihm». Lembrete: no dativo plural o substantivo ganha -n («den Kindern»).', {
        tag: 'Casos',
        tabela: [
          { padrao: 'substantivo + substantivo', exemplo: 'Ich gebe dem Kind den Ball.' }, { padrao: 'pronome dativo + substantivo', exemplo: 'Ich gebe ihm den Ball.' }, { padrao: 'pronome acusativo + substantivo dativo', exemplo: 'Ich gebe ihn dem Kind.' }, { padrao: 'dois pronomes (acusativo primeiro)', exemplo: 'Ich gebe ihn ihm.' },
        ],
        erros: [['Ich gebe den Ball dem Kind.', 'Ich gebe dem Kind den Ball.', 'Com dois substantivos, o dativo vem antes (o mais comum).']],
      }),
      dialogo(10, 'Geschenke / Presentes', 'Dois amigos falam dos presentes de aniversário.', [
        ['Mia', 'Was schenkst du deiner Mutter zum Geburtstag?', 'O que você dá de presente de aniversário para a sua mãe?'], ['Jonas', 'Ich schenke ihr einen Schal. Und du?', 'Eu dou um cachecol para ela. E você?'], ['Mia', 'Ich schenke meinem Vater ein Buch.', 'Eu dou um livro para o meu pai.'],
        ['Jonas', 'Gefällt ihm das Buch?', 'O livro agrada a ele?'], ['Mia', 'Ja, ich glaube schon. Er liest gern Krimis.', 'Sim, acho que sim. Ele gosta de ler romances policiais.'], ['Jonas', 'Und deinen Eltern? Kaufst du ihnen auch etwas?', 'E para os seus pais? Você também compra alguma coisa?'],
        ['Mia', 'Ich koche ihnen am Samstag ein Essen.', 'No sábado eu cozinho uma refeição para eles.'], ['Jonas', 'Das ist eine schöne Idee. Ich helfe dir gern.', 'É uma bela ideia. Ajudo você com prazer.'], ['Mia', 'Danke! Mit dem Auto holen wir den Kuchen.', 'Obrigada! De carro, buscamos o bolo.'], ['Jonas', 'Perfekt! Bis Samstag!', 'Perfeito! Até sábado!'],
      ]),
      producao(5, 'Diga a quem você dá presente em aniversários: «Ich schenke meiner Mutter … Ich schenke meinem Vater …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: um verbo com dativo, uma preposição do dativo, dois objetos e uma sensação com «mir».'),
      exercicios(20, [
        lacuna('Ich helfe ___. (a você)', ['dir', 'dich', 'du'], 'dir', 'helfen pede dativo.'), lacuna('Das Kleid gefällt ___. (a mim)', ['mir', 'mich', 'ich'], 'mir', 'gefallen pede dativo.'), lacuna('Ich fahre mit ___ Bus.', ['dem', 'den', 'der'], 'dem', 'mit + dativo; Bus é masculino.'),
        lacuna('Ich komme aus ___ Schule.', ['der', 'die', 'dem'], 'der', 'aus + dativo; Schule é feminino.'), lacuna('Ich bin bei ___ Arzt. (no)', ['dem', 'den', 'der'], 'dem', 'bei + dativo (beim).'), lacuna('Ich wohne seit zwei ___ hier. (anos)', ['Jahren', 'Jahre', 'Jahr'], 'Jahren', 'Dativo plural: +n.'),
        lacuna('Ich gehe ___ Arzt. (ao)', ['zum', 'zur', 'ins'], 'zum', 'zu + dem = zum.'), lacuna('Nach ___ Arbeit fahre ich nach Hause.', ['der', 'die', 'den'], 'der', 'nach + dativo; Arbeit é feminino.'),
        mc('Qual preposição NÃO pede dativo?', ['für', 'mit', 'bei'], 'für', 'für pede acusativo.'), mc('«beim» é a contração de:', ['bei dem', 'bei den', 'bei der'], 'bei dem', 'bei + dem = beim.'), mc('Qual ordem está certa?', ['Ich gebe ihm den Ball.', 'Ich gebe den Ball ihm.', 'Ich gebe ihn ihm Ball.'], 'Ich gebe ihm den Ball.', 'Pronome antes do substantivo.'),
        ordem('Ordene: «Eu dou um livro ao meu pai.»', ['Ich', 'gebe', 'meinem', 'Vater', 'ein', 'Buch'], 'Ich gebe meinem Vater ein Buch.', 'Dativo antes do acusativo.'), ouvir('Ich fahre mit dem Zug', ['Ich fahre mit dem Zug', 'Ich fahre für den Zug', 'Ich fahre mit den Zug'], 'Ich fahre mit dem Zug', 'mit + dativo.'),
        ditado('Ich wohne seit zwei Jahren hier', 'seit + dativo plural.'), mc('«Mir ist kalt» significa:', ['Estou com frio', 'Eu sou frio', 'Eu fico frio'], 'Estou com frio', 'Sensação: dativo.'),
        livre('Escreva 4 frases: um verbo com dativo, uma preposição com dativo, um presente e uma sensação.', 'Ich helfe meiner Mutter. Ich fahre mit dem Zug. Ich schenke meinem Bruder ein Buch. Mir ist kalt.'),
      ]),
      producao(5, 'Grave-se contando como você chega ao trabalho, desde quando mora na sua cidade e a quem você dá presente.'),
    ]),
  ],
});
