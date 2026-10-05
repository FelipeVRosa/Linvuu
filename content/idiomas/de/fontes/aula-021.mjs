import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 21, titulo: 'Perfekt 1: o passado com haben (verbos regulares)', nivel: 'a2',
  objetivo: 'Contar o que aconteceu com o Perfekt dos verbos regulares: haben + Partizip II (ge-…-t), incluindo os casos sem «ge-» (-ieren, be-, er-, ver-, ent-) e os verbos separáveis.',
  nota: 'Você conta o passado com verbos regulares. Próxima aula: os particípios irregulares.',
  sessoes: [
    sessao('S1', 'O Perfekt: haben + Partizip II', [
      revisao(5, 'Escreva as 6 formas de «haben» no presente e 4 frases com «Ich habe …» no presente.'),
      palavras(8, [
        ['gestern', 'guéstern', 'ontem', 'yesterday'], ['vorgestern', 'fôr-guestern', 'anteontem', 'the day before yesterday'], ['letzte Woche', 'létste vórre', 'semana passada', 'last week'], ['letzten Monat', 'létsten mônat', 'mês passado', 'last month'],
        ['letztes Jahr', 'létstes iár', 'ano passado', 'last year'], ['schon', 'xôn', 'já', 'already'], ['noch nicht', 'norr niçt', 'ainda não', 'not yet'], ['gerade', 'gueráde', 'agora mesmo, há pouco', 'just now'],
      ]),
      gramatica(14, 'O Perfekt, passo a passo', 'PASSO 1: o Perfekt é o passado da CONVERSA e das mensagens: «Ich habe Deutsch gelernt» (eu estudei alemão). PASSO 2: ele tem DOIS elementos: o auxiliar «haben», conjugado, na 2ª posição, e o PARTIZIP II, no FIM da frase (a moldura que você já conhece dos modais). PASSO 3: o Partizip II dos verbos regulares é «ge-» + raiz + «-t»: machen → gemacht; lernen → gelernt; spielen → gespielt; kaufen → gekauft; kochen → gekocht; hören → gehört (sem o «ge-» extra: «hören» já começa com h, e o «ge» entra: ge-hör-t). PASSO 4: conjugue «haben»: ich habe, du hast, er hat, wir haben, ihr habt, sie haben. PASSO 5: pergunta de sim ou não: «Hast du schon gegessen?» e resposta: «Ja, schon» ou «Nein, noch nicht». PASSO 6: use as palavras de tempo do passado: gestern, letzte Woche, letztes Jahr.', {
        tag: 'Verbos',
        comparacao: 'o português tem «eu tenho feito» (que não é o passado comum) e «eu fiz». O Perfekt alemão faz o trabalho do «eu fiz»: auxiliar + particípio no fim.',
        tabela: [
          { infinitivo: 'machen', participio: 'gemacht', exemplo: 'Ich habe Hausaufgaben gemacht.' }, { infinitivo: 'lernen', participio: 'gelernt', exemplo: 'Wir haben Deutsch gelernt.' }, { infinitivo: 'spielen', participio: 'gespielt', exemplo: 'Er hat gestern Fußball gespielt.' }, { infinitivo: 'kaufen', participio: 'gekauft', exemplo: 'Sie hat ein Kleid gekauft.' },
          { infinitivo: 'kochen', participio: 'gekocht', exemplo: 'Ich habe Pasta gekocht.' }, { infinitivo: 'hören', participio: 'gehört', exemplo: 'Wir haben Musik gehört.' }, { infinitivo: 'wohnen', participio: 'gewohnt', exemplo: 'Ich habe in Berlin gewohnt.' },
        ],
        erros: [['Ich habe machen Hausaufgaben.', 'Ich habe Hausaufgaben gemacht.', 'O Partizip II vai para o FIM da frase.'], ['Ich habe gespielen.', 'Ich habe gespielt.', 'Verbos regulares terminam em -t, não em -en.'], ['Ich gemacht habe.', 'Ich habe gemacht.', 'O auxiliar fica na 2ª posição.']],
      }),
      producao(3, 'Diga 5 coisas que você fez ontem: «Gestern habe ich … gemacht / gekocht / gehört …»'),
    ]),
    sessao('S2', 'Quando o Partizip II não leva «ge-»', [
      revisao(5, 'Escreva o Partizip II de 8 verbos regulares: machen, lernen, spielen, kaufen, kochen, hören, wohnen, tanzen.'),
      palavras(8, [
        ['studieren', 'xtudíren', 'estudar (na universidade)', 'to study'], ['besuchen', 'bezúrren', 'visitar', 'to visit'], ['bestellen', 'bextélen', 'pedir (num restaurante)', 'to order'], ['bezahlen', 'betsálen', 'pagar', 'to pay'],
        ['verkaufen', 'ferkáufen', 'vender', 'to sell'], ['erklären', 'erklérren', 'explicar', 'to explain'], ['telefonieren', 'telefoníren', 'telefonar', 'to phone'], ['reparieren', 'reparíren', 'consertar', 'to repair'],
      ]),
      gramatica(12, 'Casos especiais do Partizip II regular', 'PASSO 1: se a raiz termina em -t ou -d, o particípio ganha «-et» para ficar pronunciável: arbeiten → gearbeitet; warten → gewartet. PASSO 2: os verbos em «-ieren» NÃO levam «ge-»: studieren → studiert; telefonieren → telefoniert; reparieren → repariert. PASSO 3: os verbos com prefixo INSEPARÁVEL (be-, ge-, er-, ver-, ent-, emp-, zer-) também NÃO levam «ge-»: besuchen → besucht; bezahlen → bezahlt; verkaufen → verkauft; erklären → erklärt. PASSO 4: regra de bolso: se o verbo começa por be-, er-, ver-, ent- ou ge-, ou termina em -ieren, ele não leva «ge-» no particípio.', {
        tag: 'Verbos',
        tabela: [
          { regra: 'raiz em -t / -d', infinitivo: 'arbeiten', participio: 'gearbeitet' }, { regra: 'raiz em -t / -d', infinitivo: 'warten', participio: 'gewartet' }, { regra: '-ieren: sem ge-', infinitivo: 'studieren', participio: 'studiert' }, { regra: '-ieren: sem ge-', infinitivo: 'telefonieren', participio: 'telefoniert' },
          { regra: 'be-: sem ge-', infinitivo: 'besuchen', participio: 'besucht' }, { regra: 'be-: sem ge-', infinitivo: 'bezahlen', participio: 'bezahlt' }, { regra: 'ver-: sem ge-', infinitivo: 'verkaufen', participio: 'verkauft' }, { regra: 'er-: sem ge-', infinitivo: 'erklären', participio: 'erklärt' },
        ],
        erros: [['Ich habe gestudiert.', 'Ich habe studiert.', 'Verbos em -ieren não levam «ge-».'], ['Ich habe gearbeit.', 'Ich habe gearbeitet.', 'Raiz em -t: o particípio leva «-et».'], ['Ich habe gebesucht.', 'Ich habe besucht.', 'O prefixo be- já ocupa o lugar do «ge-».']],
      }),
      producao(5, 'Diga 6 frases sobre a última semana, com um verbo de cada grupo: -ieren, be-, ver-, er- e raiz em -t.'),
    ]),
    sessao('S3', 'Separáveis no Perfekt e diálogo', [
      revisao(5, 'Escreva o Partizip II de studieren, besuchen, bezahlen, arbeiten e warten.'),
      palavras(6, [
        ['einkaufen', 'áin-kaufen', 'fazer compras', 'to shop'], ['aufräumen', 'áuf-roimen', 'arrumar', 'to tidy up'], ['abholen', 'áp-hôlen', 'buscar (alguém)', 'to pick up'], ['anmelden', 'án-mélden', 'inscrever', 'to register'], ['einpacken', 'áin-packen', 'embalar, pôr na mala', 'to pack'], ['aufmachen', 'áuf-marren', 'abrir', 'to open'],
      ]),
      gramatica(10, 'Verbos separáveis regulares: o «ge-» vai para o meio', 'PASSO 1: o verbo separável tem prefixo + raiz: «einkaufen» = ein + kaufen. PASSO 2: no Partizip II, o «ge-» entra ENTRE o prefixo e a raiz: ein + ge + kauft → «eingekauft»; auf + ge + räumt → «aufgeräumt»; ab + ge + holt → «abgeholt»; an + ge + meldet → «angemeldet» (raiz em -d: +et). PASSO 3: na frase, o particípio inteiro vai para o fim: «Ich habe heute eingekauft.» PASSO 4: compare com o presente: «Ich kaufe heute ein» (prefixo no fim) × «Ich habe heute eingekauft» (particípio no fim).', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'einkaufen', participio: 'eingekauft', exemplo: 'Wir haben heute eingekauft.' }, { infinitivo: 'aufräumen', participio: 'aufgeräumt', exemplo: 'Ich habe die Wohnung aufgeräumt.' }, { infinitivo: 'abholen', participio: 'abgeholt', exemplo: 'Er hat mich abgeholt.' }, { infinitivo: 'anmelden', participio: 'angemeldet', exemplo: 'Sie hat das Kind angemeldet.' },
          { infinitivo: 'aufmachen', participio: 'aufgemacht', exemplo: 'Ich habe das Fenster aufgemacht.' }, { infinitivo: 'einpacken', participio: 'eingepackt', exemplo: 'Wir haben die Koffer eingepackt.' },
        ],
        erros: [['Ich habe geeingekauft.', 'Ich habe eingekauft.', 'O «ge-» entra no meio, só uma vez.'], ['Ich habe eingekaufen.', 'Ich habe eingekauft.', 'Regular: termina em -t.']],
      }),
      dialogo(9, 'Was hast du gestern gemacht? / O que você fez ontem?', 'Dois amigos contam o dia anterior.', [
        ['Lea', 'Hallo Paul! Was hast du gestern gemacht?', 'Oi, Paul! O que você fez ontem?'], ['Paul', 'Ich habe lange gearbeitet. Dann habe ich eingekauft.', 'Trabalhei bastante. Depois fiz compras.'], ['Lea', 'Hast du auch gekocht?', 'Você também cozinhou?'],
        ['Paul', 'Ja, ich habe Pasta gekocht und Musik gehört.', 'Sim, cozinhei macarrão e ouvi música.'], ['Lea', 'Und hast du schon die Wohnung aufgeräumt?', 'E você já arrumou o apartamento?'], ['Paul', 'Nein, noch nicht. Das mache ich morgen.', 'Não, ainda não. Faço isso amanhã.'],
        ['Lea', 'Ich habe gestern meine Oma besucht.', 'Eu visitei a minha avó ontem.'], ['Paul', 'Wie schön! Hast du sie abgeholt?', 'Que bom! Você a buscou?'], ['Lea', 'Ja, ich habe sie vom Bahnhof abgeholt.', 'Sim, busquei-a na estação.'],
      ]),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva 5 frases no Perfekt sobre o seu último fim de semana, só com verbos regulares.'),
      texto(5, 'Mein Samstag / O meu sábado', 'Gestern habe ich Hausaufgaben gemacht. Ich habe Musik gehört und Pasta gekocht. Am Nachmittag habe ich eingekauft und meine Oma besucht. Am Abend habe ich lange telefoniert. Ich habe nicht gearbeitet.',
        'Ontem fiz a lição de casa. Ouvi música e cozinhei macarrão. À tarde fiz compras e visitei a minha avó. À noite telefonei por muito tempo. Não trabalhei.',
        [['Was hat der Autor gekocht?', 'Pasta'], ['Wen hat er besucht?', 'Seine Oma'], ['Hat er gearbeitet?', 'Nein, er hat nicht gearbeitet']]),
      exercicios(15, [
        lacuna('Ich ___ gestern Fußball gespielt.', ['habe', 'bin', 'hat'], 'habe', 'Auxiliar «haben» no «ich».'), lacuna('Er ___ Deutsch gelernt.', ['hat', 'hast', 'habt'], 'hat', 'er → hat.'), lacuna('Wir ___ Pasta gekocht.', ['haben', 'hat', 'habe'], 'haben', 'wir → haben.'),
        mc('Partizip II de «machen»:', ['gemacht', 'gemachen', 'macht'], 'gemacht', 'ge- + raiz + -t.'), mc('Partizip II de «arbeiten»:', ['gearbeitet', 'gearbeit', 'arbeitet'], 'gearbeitet', 'Raiz em -t: -et.'), mc('Partizip II de «studieren»:', ['studiert', 'gestudiert', 'studieren'], 'studiert', '-ieren: sem ge-.'),
        mc('Partizip II de «besuchen»:', ['besucht', 'gebesucht', 'besuchen'], 'besucht', 'be-: sem ge-.'), mc('Partizip II de «einkaufen»:', ['eingekauft', 'geeinkauft', 'einkauft'], 'eingekauft', 'Separável: ge- no meio.'), mc('Partizip II de «aufräumen»:', ['aufgeräumt', 'geaufräumt', 'aufräumt'], 'aufgeräumt', 'Separável: ge- no meio.'),
        mc('Onde vai o Partizip II na frase?', ['no fim', 'logo depois de «haben»', 'no começo'], 'no fim', 'Moldura da frase.'), ordem('Ordene: «Ontem eu fiz compras.»', ['Gestern', 'habe', 'ich', 'eingekauft'], 'Gestern habe ich eingekauft.', 'Auxiliar na 2ª posição.'), ordem('Ordene: «Você já comeu?» (use «gegessen»)', ['Hast', 'du', 'schon', 'gegessen'], 'Hast du schon gegessen?', 'Auxiliar primeiro na pergunta.'),
        ouvir('Ich habe gestern Pasta gekocht', ['Ich habe gestern Pasta gekocht', 'Ich koche gestern Pasta', 'Ich habe Pasta gegessen'], 'Ich habe gestern Pasta gekocht', 'haben + gekocht.'), ditado('Wir haben heute eingekauft', 'Separável: eingekauft.'),
        livre('Escreva 5 frases no Perfekt sobre ontem: dois verbos regulares simples, um em -ieren ou be-, um separável e uma negação.', 'Ich habe Musik gehört. Ich habe Pasta gekocht. Ich habe meine Oma besucht. Ich habe eingekauft. Ich habe nicht gearbeitet.'),
      ]),
      producao(5, 'Grave-se contando o que você fez ontem, no Perfekt, só com verbos regulares.'),
    ]),
  ],
});
