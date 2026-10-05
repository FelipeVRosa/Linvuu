import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 8, titulo: 'A minha rotina', nivel: 'a1',
  objetivo: 'Contar a rotina com verbos separáveis, verbos que trocam a por ä e as expressões de tempo (um, am, von … bis, jeden Tag).',
  nota: 'Você conta o seu dia. Próxima aula: a cidade e como chegar a um lugar.',
  sessoes: [
    sessao('S1', 'Verbos separáveis', [
      revisao(5, 'Escreva as 6 formas de «sein» e de «haben» de memória.'),
      palavras(10, [
        ['aufstehen', 'áuf-xtéen', 'levantar-se', 'to get up'], ['frühstücken', 'frúxtüken', 'tomar café da manhã', 'to have breakfast'], ['duschen', 'dúxen', 'tomar banho', 'to shower'], ['anrufen', 'án-rufen', 'ligar (telefone)', 'to call'], ['einkaufen', 'áin-kaufen', 'fazer compras', 'to shop'],
        ['fernsehen', 'férn-zeen', 'ver televisão', 'to watch TV'], ['aufräumen', 'áuf-roimen', 'arrumar', 'to tidy up'], ['ankommen', 'án-kómen', 'chegar', 'to arrive'], ['abfahren', 'áp-fáren', 'partir (de transporte)', 'to depart'], ['mitkommen', 'mít-kómen', 'vir junto', 'to come along'],
      ]),
      gramatica(12, 'Verbos separáveis: o prefixo vai para o fim', 'Muitos verbos alemães têm um prefixo que se separa: «aufstehen» (levantar-se). No presente, o verbo conjugado fica na 2ª posição e o PREFIXO vai para o FIM da frase: «Ich stehe um sieben Uhr auf.» No infinitivo, ou com um verbo modal, o verbo fica inteiro: «Ich möchte um sieben Uhr aufstehen.» Prefixos separáveis comuns: auf-, an-, ein-, mit-, ab-, fern-, aus-, zurück-. Outros prefixos NÃO se separam: be-, ge-, er-, ver-, zer-, ent-, emp-: «Ich besuche meine Oma» (besuchen).', {
        tag: 'Verbos',
        comparacao: 'em português o verbo não se parte. Em alemão o prefixo vai para o fim da frase e a frase fica «emoldurada» entre o verbo e o prefixo.',
        tabela: [
          { infinitivo: 'aufstehen', exemplo: 'Ich stehe um sieben Uhr auf.', pt: 'Eu me levanto às sete.' }, { infinitivo: 'anrufen', exemplo: 'Er ruft seine Mutter an.', pt: 'Ele liga para a mãe.' }, { infinitivo: 'einkaufen', exemplo: 'Wir kaufen heute ein.', pt: 'Hoje fazemos compras.' },
          { infinitivo: 'fernsehen', exemplo: 'Sie sieht abends fern.', pt: 'Ela vê TV à noite.' }, { infinitivo: 'ankommen', exemplo: 'Der Zug kommt um acht Uhr an.', pt: 'O trem chega às oito.' }, { infinitivo: 'mitkommen', exemplo: 'Kommst du mit?', pt: 'Você vem junto?' },
          { infinitivo: 'besuchen (inseparável)', exemplo: 'Ich besuche meine Oma.', pt: 'Visito minha avó.' },
        ],
        erros: [['Ich aufstehe um sieben Uhr.', 'Ich stehe um sieben Uhr auf.', 'O prefixo separável vai para o fim da frase.']],
      }),
      producao(3, 'Diga: «Ich stehe um sieben Uhr auf. Ich rufe meine Mutter an. Wir kaufen ein.»'),
    ]),
    sessao('S2', 'Quando? e verbos com a → ä', [
      revisao(5, 'Escreva 4 frases com um verbo separável.'),
      palavras(8, [
        ['der Morgen', 'der mórguen', 'manhã', 'morning'], ['der Mittag', 'der mítak', 'meio-dia', 'noon'], ['der Nachmittag', 'der nárrmitak', 'tarde', 'afternoon'], ['der Abend', 'der ábent', 'noite (começo)', 'evening'], ['die Nacht', 'di narrt', 'noite, madrugada', 'night'], ['morgens', 'mórguens', 'de manhã (sempre)', 'in the morning'], ['abends', 'ábents', 'à noite (sempre)', 'in the evening'], ['jeden Tag', 'iéden tak', 'todo dia', 'every day'],
      ]),
      gramatica(12, 'Verbos com a → ä e como dizer quando', 'Alguns verbos trocam «a» por «ä» no «du» e no «er / sie / es»: fahren (du fährst), schlafen (du schläfst), laufen (du läufst), waschen (du wäschst), tragen (du trägst). Para dizer QUANDO: «um» + hora (um sieben Uhr), «am» + parte do dia (am Morgen, am Mittag, am Abend; mas «in der Nacht»), «von … bis» (von neun bis siebzehn Uhr), «jeden Tag» e os advérbios «morgens, mittags, abends, nachts» (para o que se repete).', {
        tag: 'Verbos',
        tabelas: [
          { titulo: 'a → ä no «du» e no «er»', linhas: [
            { pronome: 'ich', fahren: 'fahre', schlafen: 'schlafe', laufen: 'laufe' }, { pronome: 'du', fahren: 'fährst', schlafen: 'schläfst', laufen: 'läufst' }, { pronome: 'er / sie / es', fahren: 'fährt', schlafen: 'schläft', laufen: 'läuft' },
            { pronome: 'wir', fahren: 'fahren', schlafen: 'schlafen', laufen: 'laufen' }, { pronome: 'ihr', fahren: 'fahrt', schlafen: 'schlaft', laufen: 'lauft' }, { pronome: 'sie / Sie', fahren: 'fahren', schlafen: 'schlafen', laufen: 'laufen' },
          ] },
          { titulo: 'Como dizer quando', linhas: [
            { forma: 'um + hora', exemplo: 'Ich stehe um sieben Uhr auf.' }, { forma: 'am + parte do dia', exemplo: 'Am Abend sehe ich fern.' }, { forma: 'in der Nacht', exemplo: 'In der Nacht schlafe ich.' }, { forma: 'von … bis', exemplo: 'Ich arbeite von neun bis siebzehn Uhr.' },
            { forma: 'jeden Tag', exemplo: 'Ich lerne jeden Tag Deutsch.' }, { forma: 'morgens, abends', exemplo: 'Morgens trinke ich Kaffee.' },
          ] },
        ],
        erros: [['Du fahrst nach Berlin.', 'Du fährst nach Berlin.', 'No «du», «fahren» vira «fährst».']],
      }),
      producao(5, 'Diga: «Morgens trinke ich Kaffee. Um acht Uhr fahre ich zur Arbeit. Abends sehe ich fern. In der Nacht schlafe ich.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva a sua rotina em 5 frases, com horas.'),
      dialogo(10, 'Mein Tag / Meu dia', 'Dois colegas falam da rotina.', [
        ['Mia', 'Wann stehst du auf, Jonas?', 'Quando você se levanta, Jonas?'], ['Jonas', 'Ich stehe um sechs Uhr auf. Und du?', 'Eu me levanto às seis. E você?'], ['Mia', 'Ich stehe um sieben Uhr auf. Dann dusche ich und frühstücke.', 'Eu me levanto às sete. Depois tomo banho e café da manhã.'],
        ['Jonas', 'Wann fährst du zur Arbeit?', 'Quando você vai para o trabalho?'], ['Mia', 'Um acht Uhr. Ich arbeite von neun bis siebzehn Uhr.', 'Às oito. Eu trabalho das nove às dezessete.'], ['Jonas', 'Und abends? Siehst du fern?', 'E à noite? Você vê televisão?'],
        ['Mia', 'Ja, manchmal. Dann rufe ich auch meine Eltern an.', 'Sim, às vezes. Aí também ligo para os meus pais.'], ['Jonas', 'Ich kaufe abends oft ein.', 'Eu faço compras à noite com frequência.'], ['Mia', 'Und wann schläfst du?', 'E quando você dorme?'], ['Jonas', 'Um zehn Uhr. Ich schlafe gern früh.', 'Às dez. Gosto de dormir cedo.'],
      ]),
      texto(10, 'Ein Tag von Mia / Um dia da Mia', 'Mia steht um sieben Uhr auf. Dann duscht sie und frühstückt. Um acht Uhr fährt sie zur Arbeit. Sie arbeitet von neun bis siebzehn Uhr. Am Abend kauft sie ein und sieht fern. Sie ruft oft ihre Eltern an. In der Nacht schläft sie gut.',
        'Mia se levanta às sete horas. Depois toma banho e café da manhã. Às oito vai para o trabalho. Ela trabalha das nove às dezessete. À noite faz compras e vê televisão. Ela liga com frequência para os pais. À noite dorme bem.',
        [['Wann steht Mia auf?', 'Um sieben Uhr'], ['Wann arbeitet Mia?', 'Von neun bis siebzehn Uhr'], ['Was macht Mia am Abend?', 'Sie kauft ein und sieht fern']]),
      producao(5, 'Conte em voz alta o seu dia, da hora em que você se levanta até a hora em que dorme.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases com verbos separáveis e uma hora.'),
      exercicios(20, [
        mc('Qual frase está certa?', ['Ich stehe um sieben Uhr auf.', 'Ich aufstehe um sieben Uhr.', 'Ich stehe auf um sieben Uhr.'], 'Ich stehe um sieben Uhr auf.', 'O prefixo vai para o fim.'),
        ordem('Ordene: «Ele liga para a mãe.»', ['Er', 'ruft', 'seine', 'Mutter', 'an'], 'Er ruft seine Mutter an.', 'Verbo na 2ª posição, prefixo no fim.'), ordem('Ordene: «Hoje fazemos compras.»', ['Wir', 'kaufen', 'heute', 'ein'], 'Wir kaufen heute ein.', 'einkaufen: o prefixo «ein» vai para o fim.'),
        lacuna('Du ___ nach Berlin. (fahren)', ['fährst', 'fahrst', 'fährt'], 'fährst', 'a → ä no «du».'), lacuna('Er ___ gern lange. (schlafen)', ['schläft', 'schlaft', 'schläfst'], 'schläft', 'a → ä no «er».'), lacuna('Sie ___ jeden Tag. (laufen)', ['läuft', 'lauft', 'läufst'], 'läuft', 'au → äu no «sie».'),
        lacuna('___ Abend sehe ich fern.', ['Am', 'Um', 'Im'], 'Am', 'Parte do dia: am.'), lacuna('Ich arbeite ___ neun bis siebzehn Uhr.', ['von', 'um', 'am'], 'von', 'von … bis.'), lacuna('Ich stehe ___ sieben Uhr auf.', ['um', 'am', 'im'], 'um', 'Hora: um.'),
        mc('«besuchen» é um verbo:', ['inseparável (be-)', 'separável', 'irregular'], 'inseparável (be-)', 'be- não se separa.'), ouvir('Ich stehe um sechs Uhr auf', ['Ich stehe um sechs Uhr auf', 'Ich stehe um sieben Uhr auf', 'Ich fahre um sechs Uhr'], 'Ich stehe um sechs Uhr auf', 'aufstehen separado.'),
        ditado('Er ruft seine Mutter an', 'anrufen: o prefixo «an» vai para o fim.'), mc('Com «möchten», o verbo separável fica:', ['inteiro, no fim (aufstehen)', 'separado', 'no começo'], 'inteiro, no fim (aufstehen)', 'Infinitivo inteiro.'),
        livre('Escreva 4 frases sobre o seu dia, com um verbo separável.', 'Ich stehe um sieben Uhr auf. Ich frühstücke um halb acht. Ich fahre um acht Uhr zur Arbeit. Abends sehe ich fern.'),
      ]),
      producao(5, 'Grave-se contando o seu dia inteiro.'),
    ]),
  ],
});
