import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 22, titulo: 'Perfekt 2: os particípios irregulares', nivel: 'a2',
  objetivo: 'Formar o Partizip II dos verbos fortes e mistos mais comuns, em três grupos pequenos (mesma vogal, vogal que muda, verbos mistos) e usá-los no Perfekt.',
  nota: 'Você domina os particípios irregulares mais comuns. Próxima aula: haben ou sein?',
  sessoes: [
    sessao('S1', 'Grupo 1: a vogal fica igual', [
      revisao(5, 'Escreva o Partizip II de 8 verbos regulares, incluindo os com «ge-» no meio e os sem «ge-».'),
      palavras(8, [
        ['schlafen / geschlafen', 'xláfen / guexláfen', 'dormir / dormido', 'to sleep'], ['laufen / gelaufen', 'láufen / guelaufen', 'correr, andar / corrido', 'to run'], ['fahren / gefahren', 'fáren / guefáren', 'ir (de veículo) / ido', 'to drive'], ['tragen / getragen', 'trágen / guetrágen', 'carregar, vestir', 'to carry, wear'],
        ['geben / gegeben', 'guében / gueguében', 'dar / dado', 'to give'], ['essen / gegessen', 'ésen / gueguésen', 'comer / comido', 'to eat'], ['lesen / gelesen', 'lézen / guelézen', 'ler / lido', 'to read'], ['sehen / gesehen', 'zéen / guezéen', 'ver / visto', 'to see'],
      ]),
      gramatica(14, 'Particípios fortes do grupo 1, passo a passo', 'PASSO 1: os verbos FORTES (irregulares) formam o Partizip II com «ge-» + raiz + «-EN» (e não «-t»). PASSO 2: no GRUPO 1, a vogal da raiz continua a MESMA do infinitivo: schlafen → geschlafen; laufen → gelaufen; fahren → gefahren; tragen → getragen; geben → gegeben; essen → gegessen; lesen → gelesen; sehen → gesehen; kommen → gekommen. PASSO 3: não há trema no particípio: «du fährst», mas «gefahren». PASSO 4: atenção: «fahren», «laufen» e «kommen» usam «sein» no Perfekt (veja a aula 23); por enquanto, aprenda só a forma do particípio. PASSO 5: use sempre o infinitivo junto com o particípio: «sehen — gesehen». Decorar os pares é o caminho.', {
        tag: 'Verbos',
        comparacao: 'o português também tem particípios irregulares («feito», «dito», «visto»). Em alemão a regra é: regulares em -t, fortes em -en.',
        tabela: [
          { infinitivo: 'schlafen', participio: 'geschlafen', exemplo: 'Ich habe gut geschlafen.' }, { infinitivo: 'tragen', participio: 'getragen', exemplo: 'Sie hat eine Jacke getragen.' }, { infinitivo: 'geben', participio: 'gegeben', exemplo: 'Er hat mir ein Buch gegeben.' }, { infinitivo: 'essen', participio: 'gegessen', exemplo: 'Wir haben Fisch gegessen.' },
          { infinitivo: 'lesen', participio: 'gelesen', exemplo: 'Ich habe einen Roman gelesen.' }, { infinitivo: 'sehen', participio: 'gesehen', exemplo: 'Hast du den Film gesehen?' }, { infinitivo: 'fahren (sein)', participio: 'gefahren', exemplo: 'Ich bin nach Berlin gefahren.' }, { infinitivo: 'kommen (sein)', participio: 'gekommen', exemplo: 'Er ist spät gekommen.' },
        ],
        erros: [['Ich habe geschlaft.', 'Ich habe geschlafen.', 'Verbos fortes terminam em -en.'], ['Ich habe gefährt.', 'Ich bin gefahren.', 'Sem trema e com «sein».'], ['Ich habe gegesst.', 'Ich habe gegessen.', 'O particípio de «essen» é «gegessen».']],
      }),
      producao(3, 'Diga 6 frases no Perfekt com os verbos do grupo 1: «Ich habe … geschlafen / gegessen / gelesen / gesehen …»'),
    ]),
    sessao('S2', 'Grupo 2: a vogal muda', [
      revisao(5, 'Escreva o Partizip II de schlafen, tragen, geben, essen, lesen e sehen, de memória.'),
      palavras(8, [
        ['trinken / getrunken', 'trínken / guetrúnken', 'beber / bebido', 'to drink'], ['finden / gefunden', 'fínden / guefúnden', 'achar / achado', 'to find'], ['schreiben / geschrieben', 'xráiben / guexríben', 'escrever / escrito', 'to write'], ['sprechen / gesprochen', 'xpréçen / guexpróren', 'falar / falado', 'to speak'],
        ['helfen / geholfen', 'hélfen / gueholfen', 'ajudar / ajudado', 'to help'], ['nehmen / genommen', 'némen / guenómen', 'pegar / pegado', 'to take'], ['treffen / getroffen', 'tréfen / guetróffen', 'encontrar / encontrado', 'to meet'], ['beginnen / begonnen', 'beguínen / begónen', 'começar / começado', 'to begin'],
      ]),
      gramatica(12, 'Particípios fortes do grupo 2: a vogal muda', 'PASSO 1: no GRUPO 2, a vogal da raiz MUDA no particípio, que continua terminando em «-en». PASSO 2: há padrões que ajudam: i → u (trinken → getrunken, finden → gefunden, singen → gesungen); ei → ie (schreiben → geschrieben, bleiben → geblieben); e → o (sprechen → gesprochen, helfen → geholfen, nehmen → genommen, treffen → getroffen, beginnen → begonnen). PASSO 3: «beginnen» tem prefixo inseparável (be-): sem «ge-»: begonnen. PASSO 4: não há regra absoluta: use os padrões como ajuda e decore os pares com o infinitivo. PASSO 5: todos estes usam «haben».', {
        tag: 'Verbos',
        tabela: [
          { padrao: 'i → u', infinitivo: 'trinken', participio: 'getrunken' }, { padrao: 'i → u', infinitivo: 'finden', participio: 'gefunden' }, { padrao: 'ei → ie', infinitivo: 'schreiben', participio: 'geschrieben' }, { padrao: 'e → o', infinitivo: 'sprechen', participio: 'gesprochen' },
          { padrao: 'e → o', infinitivo: 'helfen', participio: 'geholfen' }, { padrao: 'e → o', infinitivo: 'nehmen', participio: 'genommen' }, { padrao: 'e → o', infinitivo: 'treffen', participio: 'getroffen' }, { padrao: 'sem ge-', infinitivo: 'beginnen', participio: 'begonnen' },
        ],
        erros: [['Ich habe getrinkt.', 'Ich habe getrunken.', 'i → u no particípio.'], ['Ich habe gesprechen.', 'Ich habe gesprochen.', 'e → o no particípio.'], ['Ich habe gebeginnen.', 'Ich habe begonnen.', 'be-: sem ge-.']],
      }),
      producao(5, 'Diga 6 frases no Perfekt com os verbos do grupo 2: «Ich habe … getrunken / gefunden / geschrieben / gesprochen …»'),
    ]),
    sessao('S3', 'Grupo 3: verbos mistos e especiais, e diálogo', [
      revisao(5, 'Escreva o Partizip II de trinken, finden, schreiben, sprechen, helfen, nehmen, treffen e beginnen.'),
      palavras(6, [
        ['bringen / gebracht', 'bríngen / guebráxt', 'trazer / trazido', 'to bring'], ['denken / gedacht', 'dénken / guedárt', 'pensar / pensado', 'to think'], ['wissen / gewusst', 'víssen / guevúst', 'saber / sabido', 'to know'], ['kennen / gekannt', 'kénen / guekánt', 'conhecer / conhecido', 'to know (a person)'], ['tun / getan', 'tun / guetán', 'fazer / feito', 'to do'], ['werden / geworden', 'vérden / gueyórden', 'tornar-se / tornado', 'to become'],
      ]),
      gramatica(10, 'Verbos mistos e formas especiais', 'PASSO 1: os verbos MISTOS têm a vogal diferente (como os fortes), mas terminam em «-t» (como os regulares): bringen → gebracht; denken → gedacht; wissen → gewusst; kennen → gekannt. PASSO 2: «haben» faz «gehabt» e «sein» faz «gewesen»; «tun» faz «getan»; «werden» faz «geworden» (com «sein»). PASSO 3: com «sein» e «haben», a conversa usa mais o Präteritum (war, hatte), mas o particípio aparece em frases como «Ich bin in Berlin gewesen». PASSO 4: para «wissen» e «kennen», use «Ich habe das nicht gewusst» e «Ich habe ihn gekannt».', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'bringen', participio: 'gebracht', exemplo: 'Er hat Brot gebracht.' }, { infinitivo: 'denken', participio: 'gedacht', exemplo: 'Ich habe an dich gedacht.' }, { infinitivo: 'wissen', participio: 'gewusst', exemplo: 'Das habe ich nicht gewusst.' }, { infinitivo: 'kennen', participio: 'gekannt', exemplo: 'Ich habe ihn nicht gekannt.' },
          { infinitivo: 'tun', participio: 'getan', exemplo: 'Was hast du getan?' }, { infinitivo: 'haben', participio: 'gehabt', exemplo: 'Ich habe Glück gehabt.' }, { infinitivo: 'sein (sein)', participio: 'gewesen', exemplo: 'Ich bin in Berlin gewesen.' }, { infinitivo: 'werden (sein)', participio: 'geworden', exemplo: 'Es ist kalt geworden.' },
        ],
      }),
      dialogo(9, 'Was ist passiert? / O que aconteceu?', 'Dois amigos falam do dia anterior.', [
        ['Mia', 'Hallo Jonas! Hast du Paul gestern gesehen?', 'Oi, Jonas! Você viu o Paul ontem?'], ['Jonas', 'Ja, wir haben zusammen gegessen und viel gesprochen.', 'Sim, comemos juntos e conversamos bastante.'], ['Mia', 'Was habt ihr getrunken?', 'O que vocês beberam?'],
        ['Jonas', 'Wir haben Tee getrunken. Paul hat mir ein Buch gegeben.', 'Tomamos chá. O Paul me deu um livro.'], ['Mia', 'Hast du das Buch schon gelesen?', 'Você já leu o livro?'], ['Jonas', 'Nein, noch nicht. Ich habe es gestern nur angesehen.', 'Não, ainda não. Ontem só olhei.'],
        ['Mia', 'Hast du auch Fotos gemacht?', 'Você também tirou fotos?'], ['Jonas', 'Ja, ich habe viele Fotos gemacht. Ich habe sie dir geschickt.', 'Sim, tirei muitas fotos. Eu as enviei para você.'], ['Mia', 'Danke! Ich habe sie noch nicht gesehen.', 'Obrigada! Ainda não as vi.'],
      ]),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma lista de 12 particípios irregulares de memória, com o infinitivo.'),
      exercicios(20, [
        mc('Partizip II de «schlafen»:', ['geschlafen', 'geschlaft', 'schlafen'], 'geschlafen', 'Grupo 1: mesma vogal, -en.'), mc('Partizip II de «essen»:', ['gegessen', 'gegesst', 'geessen'], 'gegessen', 'Grupo 1.'), mc('Partizip II de «lesen»:', ['gelesen', 'gelest', 'gelasen'], 'gelesen', 'Grupo 1.'),
        mc('Partizip II de «trinken»:', ['getrunken', 'getrinkt', 'getrinken'], 'getrunken', 'Grupo 2: i → u.'), mc('Partizip II de «schreiben»:', ['geschrieben', 'geschreibt', 'geschreiben'], 'geschrieben', 'Grupo 2: ei → ie.'), mc('Partizip II de «sprechen»:', ['gesprochen', 'gesprecht', 'gesprechen'], 'gesprochen', 'Grupo 2: e → o.'),
        mc('Partizip II de «nehmen»:', ['genommen', 'genehmt', 'genommt'], 'genommen', 'Grupo 2: e → o e consoante dobrada.'), mc('Partizip II de «beginnen»:', ['begonnen', 'gebeginnen', 'begonnt'], 'begonnen', 'be-: sem ge-.'), mc('Partizip II de «bringen»:', ['gebracht', 'gebringt', 'gebrungen'], 'gebracht', 'Misto: vogal muda + -t.'),
        mc('Partizip II de «wissen»:', ['gewusst', 'gewisst', 'gewissen'], 'gewusst', 'Misto.'), lacuna('Ich habe einen Roman ___. (ler)', ['gelesen', 'gelest', 'lesen'], 'gelesen', 'Grupo 1.'), lacuna('Wir haben Tee ___. (beber)', ['getrunken', 'getrinkt', 'trinken'], 'getrunken', 'Grupo 2.'),
        lacuna('Sie hat mir ein Buch ___. (dar)', ['gegeben', 'gegibt', 'gegebt'], 'gegeben', 'Grupo 1.'), ordem('Ordene: «Eu vi o filme.»', ['Ich', 'habe', 'den', 'Film', 'gesehen'], 'Ich habe den Film gesehen.', 'Auxiliar na 2ª posição, particípio no fim.'), ouvir('Ich habe viele Fotos gemacht', ['Ich habe viele Fotos gemacht', 'Ich habe viele Fotos gesehen', 'Ich habe viele Bücher gelesen'], 'Ich habe viele Fotos gemacht', 'gemacht = regular.'),
        ditado('Wir haben zusammen gegessen und viel gesprochen', 'Dois particípios fortes na mesma frase.'), livre('Escreva 5 frases no Perfekt com particípios irregulares: um do grupo 1, um do grupo 2, um misto, uma pergunta e uma negação.', 'Ich habe gut geschlafen. Ich habe Tee getrunken. Ich habe an dich gedacht. Hast du den Film gesehen? Ich habe das nicht gewusst.'),
      ]),
      producao(5, 'Grave-se contando o seu dia de ontem com pelo menos 6 particípios irregulares.'),
    ]),
  ],
});
