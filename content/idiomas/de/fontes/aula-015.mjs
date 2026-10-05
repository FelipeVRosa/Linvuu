import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 15, titulo: 'Gramática: o Perfekt', nivel: 'a1',
  objetivo: 'Contar o que aconteceu com o Perfekt (haben ou sein + Partizip II), formar o Partizip II regular e irregular e escolher o auxiliar certo.',
  nota: 'Você conta o que aconteceu. Próximo passo: Präteritum de sein e haben, adjetivos e comparativo.',
  sessoes: [
    sessao('S1', 'Partizip II regular', [
      revisao(5, 'Escreva 4 frases sobre o seu dia, no presente.'),
      palavras(10, [
        ['kaufen', 'káufen', 'comprar (gekauft)', 'to buy'], ['wohnen', 'vônen', 'morar (gewohnt)', 'to live'], ['spielen', 'xpílen', 'jogar (gespielt)', 'to play'], ['kochen', 'kórren', 'cozinhar (gekocht)', 'to cook'], ['hören', 'hörren', 'ouvir (gehört)', 'to hear'],
        ['studieren', 'xtudíren', 'estudar na universidade (studiert)', 'to study'], ['besuchen', 'bezúrren', 'visitar (besucht)', 'to visit'], ['bestellen', 'bextélen', 'pedir (bestellt)', 'to order'], ['bezahlen', 'betsálen', 'pagar (bezahlt)', 'to pay'], ['arbeiten', 'árbaiten', 'trabalhar (gearbeitet)', 'to work'],
      ]),
      gramatica(12, 'Perfekt: haben + Partizip II', 'O Perfekt é o passado da fala do dia a dia. Forma-se com o auxiliar «haben» (ou «sein») no presente, na 2ª posição, e o PARTIZIP II no FIM da frase: «Ich habe Deutsch gelernt». O Partizip II regular é ge- + raiz + -t: machen → gemacht, wohnen → gewohnt; raiz em -t/-d: arbeiten → gearbeitet. Sem «ge-» nos verbos em -ieren (studieren → studiert) e com prefixos inseparáveis (be-, ver-, er-, ent-, zer-, emp-: besuchen → besucht). Nos separáveis, «ge» fica NO MEIO: einkaufen → eingekauft, aufstehen → aufgestanden.', {
        tag: 'Verbos',
        comparacao: 'o pretérito perfeito português também usa um auxiliar («eu tenho falado»), mas o alemão usa o Perfekt para o passado comum («eu fiz»). O particípio vai para o fim.',
        tabela: [
          { infinitivo: 'machen', participio: 'gemacht', exemplo: 'Ich habe Hausaufgaben gemacht.' }, { infinitivo: 'lernen', participio: 'gelernt', exemplo: 'Wir haben Deutsch gelernt.' }, { infinitivo: 'arbeiten', participio: 'gearbeitet', exemplo: 'Er hat gestern gearbeitet.' },
          { infinitivo: 'studieren', participio: 'studiert', exemplo: 'Sie hat in Berlin studiert.' }, { infinitivo: 'besuchen', participio: 'besucht', exemplo: 'Ich habe meine Oma besucht.' }, { infinitivo: 'einkaufen (separável)', participio: 'eingekauft', exemplo: 'Wir haben heute eingekauft.' },
        ],
        erros: [['Ich habe gearbeit.', 'Ich habe gearbeitet.', 'Raiz em -t: o particípio leva -et.'], ['Ich habe geStudiert.', 'Ich habe studiert.', 'Verbos em -ieren não levam «ge-».']],
      }),
      producao(3, 'Diga: «Ich habe Deutsch gelernt. Ich habe gearbeitet. Ich habe meine Oma besucht. Wir haben eingekauft.»'),
    ]),
    sessao('S2', 'Partizip II irregular e o auxiliar sein', [
      revisao(5, 'Escreva o Partizip II de 6 verbos regulares.'),
      palavras(6, [
        ['gestern', 'guéstern', 'ontem', 'yesterday'], ['vorgestern', 'fôr-guestern', 'anteontem', 'the day before yesterday'], ['letzte Woche', 'létste vórre', 'semana passada', 'last week'], ['letztes Jahr', 'létstes iár', 'ano passado', 'last year'], ['schon', 'xôn', 'já', 'already'], ['noch nicht', 'norr niçt', 'ainda não', 'not yet'],
      ]),
      gramatica(14, 'Particípios irregulares e quando usar «sein»', 'Os verbos «fortes» formam o Partizip II com ge- + (vogal que muda) + -en: essen → gegessen. Não há regra segura: aprenda a lista com cada verbo. Use «sein» (em vez de «haben») com (1) verbos de MOVIMENTO de um lugar a outro (gehen, fahren, kommen, fliegen, reisen), (2) verbos de MUDANÇA de estado (aufstehen, einschlafen, werden) e (3) «sein» e «bleiben». Todos os outros usam «haben». Exemplos: «Ich bin nach Berlin gefahren», «Ich bin um sieben Uhr aufgestanden», «Ich bin zu Hause geblieben», «Ich bin müde gewesen».', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'gehen', participio: 'gegangen', auxiliar: 'sein' }, { infinitivo: 'kommen', participio: 'gekommen', auxiliar: 'sein' }, { infinitivo: 'fahren', participio: 'gefahren', auxiliar: 'sein' }, { infinitivo: 'bleiben', participio: 'geblieben', auxiliar: 'sein' }, { infinitivo: 'aufstehen', participio: 'aufgestanden', auxiliar: 'sein' }, { infinitivo: 'sein', participio: 'gewesen', auxiliar: 'sein' },
          { infinitivo: 'essen', participio: 'gegessen', auxiliar: 'haben' }, { infinitivo: 'trinken', participio: 'getrunken', auxiliar: 'haben' }, { infinitivo: 'sehen', participio: 'gesehen', auxiliar: 'haben' }, { infinitivo: 'lesen', participio: 'gelesen', auxiliar: 'haben' }, { infinitivo: 'schreiben', participio: 'geschrieben', auxiliar: 'haben' }, { infinitivo: 'nehmen', participio: 'genommen', auxiliar: 'haben' },
          { infinitivo: 'sprechen', participio: 'gesprochen', auxiliar: 'haben' }, { infinitivo: 'schlafen', participio: 'geschlafen', auxiliar: 'haben' }, { infinitivo: 'finden', participio: 'gefunden', auxiliar: 'haben' }, { infinitivo: 'haben', participio: 'gehabt', auxiliar: 'haben' },
        ],
        erros: [['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Movimento de um lugar a outro: «sein».'], ['Ich bin Kaffee getrunken.', 'Ich habe Kaffee getrunken.', 'A maioria dos verbos usa «haben».']],
      }),
      producao(5, 'Diga: «Ich bin nach Berlin gefahren. Ich habe einen Kaffee getrunken. Ich bin um sieben Uhr aufgestanden. Ich habe ein Buch gelesen.»'),
    ]),
    sessao('S3', 'Perguntas, negação e diálogo', [
      revisao(5, 'Escreva 5 frases no Perfekt sobre o fim de semana passado.'),
      gramatica(10, 'Perfekt: pergunta, negação e war / hatte', 'A pergunta de sim ou não começa pelo auxiliar: «Hast du schon gegessen?». Resposta curta: «Ja, schon» ou «Nein, noch nicht». A negação «nicht» vai antes do particípio: «Ich habe nicht gearbeitet». Com «sein», «haben» e os modais, a fala usa o Präteritum em vez do Perfekt: «Ich war gestern müde», «Ich hatte keine Zeit», «Ich musste arbeiten». Para o resto dos verbos, use o Perfekt.', {
        tag: 'Verbos',
        tabela: [
          { pronome: 'ich', sein: 'war', haben: 'hatte' }, { pronome: 'du', sein: 'warst', haben: 'hattest' }, { pronome: 'er / sie / es', sein: 'war', haben: 'hatte' }, { pronome: 'wir', sein: 'waren', haben: 'hatten' }, { pronome: 'ihr', sein: 'wart', haben: 'hattet' }, { pronome: 'sie / Sie', sein: 'waren', haben: 'hatten' },
        ],
        exemplos: [['Hast du schon gegessen?', 'Você já comeu?'], ['Nein, noch nicht.', 'Não, ainda não.'], ['Ich war gestern müde.', 'Ontem eu estava cansado.'], ['Ich hatte keine Zeit.', 'Eu não tinha tempo.']],
      }),
      dialogo(10, 'Was hast du am Wochenende gemacht? / O que você fez no fim de semana?', 'Dois amigos conversam na segunda-feira.', [
        ['Mia', 'Hallo Jonas! Was hast du am Wochenende gemacht?', 'Oi, Jonas! O que você fez no fim de semana?'], ['Jonas', 'Am Samstag bin ich lange im Bett geblieben. Dann habe ich gefrühstückt.', 'No sábado fiquei muito tempo na cama. Depois tomei café da manhã.'], ['Mia', 'Und am Nachmittag?', 'E à tarde?'],
        ['Jonas', 'Ich bin mit dem Fahrrad in den Park gefahren und habe ein Buch gelesen.', 'Fui de bicicleta ao parque e li um livro.'], ['Mia', 'Hast du auch jemanden getroffen?', 'Você também encontrou alguém?'], ['Jonas', 'Ja, ich habe Paul getroffen. Wir sind zusammen ins Kino gegangen.', 'Sim, encontrei o Paul. Fomos juntos ao cinema.'],
        ['Mia', 'Was habt ihr gesehen?', 'O que vocês viram?'], ['Jonas', 'Einen Krimi. Er war sehr spannend. Und du?', 'Um filme policial. Foi muito emocionante. E você?'], ['Mia', 'Ich habe Wäsche gewaschen und meine Oma besucht.', 'Eu lavei roupa e visitei a minha avó.'], ['Jonas', 'Das klingt auch schön!', 'Isso também parece bom!'],
      ]),
      producao(5, 'Conte em voz alta o seu último fim de semana, no Perfekt, com pelo menos um verbo com «sein».'),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva 5 frases sobre ontem, no Perfekt.'),
      texto(5, 'Mein Wochenende / Meu fim de semana', 'Am Samstag bin ich um neun Uhr aufgestanden. Ich habe gefrühstückt und die Zeitung gelesen. Dann bin ich mit dem Bus in die Stadt gefahren und habe eingekauft. Am Abend habe ich mit meiner Freundin gekocht. Wir haben Fisch gegessen und Wein getrunken. Am Sonntag bin ich zu Hause geblieben und habe viel geschlafen.',
        'No sábado me levantei às nove horas. Tomei café da manhã e li o jornal. Depois fui de ônibus à cidade e fiz compras. À noite cozinhei com a minha amiga. Comemos peixe e bebemos vinho. No domingo fiquei em casa e dormi muito.',
        [['Wann ist der Autor aufgestanden?', 'Um neun Uhr'], ['Was haben sie am Abend gegessen?', 'Fisch'], ['Was hat der Autor am Sonntag gemacht?', 'Er ist zu Hause geblieben und hat viel geschlafen']]),
      exercicios(15, [
        lacuna('Ich ___ Deutsch gelernt. (haben)', ['habe', 'bin', 'hat'], 'habe', 'lernen usa haben.'), lacuna('Ich ___ nach Berlin gefahren. (sein)', ['bin', 'habe', 'hat'], 'bin', 'fahren (movimento) usa sein.'), lacuna('Er ___ zu Hause geblieben.', ['ist', 'hat', 'wird'], 'ist', 'bleiben usa sein.'),
        lacuna('Wir haben Fisch ___. (essen)', ['gegessen', 'geessen', 'gegesst'], 'gegessen', 'Particípio irregular.'), lacuna('Sie hat in Berlin ___. (studieren)', ['studiert', 'gestudiert', 'studieret'], 'studiert', 'Verbos em -ieren: sem «ge-».'), lacuna('Wir haben heute ___. (einkaufen)', ['eingekauft', 'geeinkauft', 'einkauft'], 'eingekauft', 'Separável: «ge» no meio.'),
        lacuna('Er ist um sieben Uhr ___. (aufstehen)', ['aufgestanden', 'geaufstanden', 'aufgestehen'], 'aufgestanden', 'aufstehen: aufgestanden.'), mc('O Partizip II vai para:', ['o fim da frase', 'a 2ª posição', 'o começo'], 'o fim da frase', 'Moldura da frase.'), mc('Com verbos de movimento usa-se:', ['sein', 'haben', 'werden'], 'sein', 'gehen, fahren, kommen: sein.'),
        mc('«Noch nicht» significa:', ['ainda não', 'já', 'nunca'], 'ainda não', 'Resposta a «schon?».'), ordem('Ordene: «Ontem eu li um livro.»', ['Gestern', 'habe', 'ich', 'ein', 'Buch', 'gelesen'], 'Gestern habe ich ein Buch gelesen.', 'Auxiliar na 2ª posição, particípio no fim.'), ordem('Ordene: «Você já comeu?»', ['Hast', 'du', 'schon', 'gegessen'], 'Hast du schon gegessen?', 'Auxiliar primeiro.'),
        ouvir('Ich bin nach Berlin gefahren', ['Ich bin nach Berlin gefahren', 'Ich habe Berlin gesehen', 'Ich fahre nach Berlin'], 'Ich bin nach Berlin gefahren', 'sein + gefahren.'), ditado('Ich habe ein Buch gelesen', 'haben + gelesen.'),
        livre('Escreva 5 frases no Perfekt sobre o seu último fim de semana, com «haben» e «sein».', 'Ich bin um neun Uhr aufgestanden. Ich habe gefrühstückt. Ich bin in die Stadt gefahren. Ich habe eingekauft. Ich bin zu Hause geblieben.'),
      ]),
      producao(5, 'Grave-se contando o que você fez ontem, no Perfekt.'),
    ]),
  ],
});
