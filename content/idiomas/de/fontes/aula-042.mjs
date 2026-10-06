import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 42, titulo: 'Perguntas e pronomes indefinidos', nivel: 'a2',
  objetivo: 'Fazer perguntas com welcher/welche/welches, was für ein e wer/wen/wem/wessen, e usar os pronomes indefinidos man, jemand, niemand, etwas, nichts, alles, alle e viele.',
  nota: 'Você pergunta e fala de pessoas e coisas de forma geral. Próxima aula: saúde e corpo.',
  sessoes: [
    sessao('S1', 'Welcher e was für ein', [
      revisao(5, 'Escreva o genitivo (posse) em 6 frases e as três preposições com genitivo.'),
      palavras(8, [
        ['der Typ', 'der tüp', 'tipo', 'type'], ['die Sorte', 'di zórte', 'tipo, variedade', 'sort'], ['die Wahl', 'di val', 'escolha', 'choice'], ['wählen', 'vélen', 'escolher', 'to choose'],
        ['aussuchen', 'áus-zurren', 'escolher, selecionar', 'to select'], ['der Unterschied', 'der únter-xit', 'diferença', 'difference'], ['gleich', 'glaiç', 'igual', 'same'], ['anders', 'ánders', 'diferente', 'different'],
      ]),
      gramatica(14, 'Welcher? e Was für ein?, passo a passo', 'PASSO 1: «welcher, welche, welches» significa «QUAL, QUAIS» e escolhe dentre as opções conhecidas: «Welcher Pullover gefällt dir?» PASSO 2: ele se declina como «der, die, das» e como «dieser»: nominativo: welcher Mann, welche Frau, welches Kind, welche Kinder; acusativo: welchen Mann, welche Frau, welches Kind, welche Kinder; dativo: welchem Mann, welcher Frau, welchem Kind, welchen Kindern. PASSO 3: o substantivo depois dele leva o adjetivo com as terminações do artigo definido: «Welchen blauen Pullover?» PASSO 4: «was für ein» significa «QUE TIPO DE»: «Was für ein Film ist das?» (que tipo de filme é?). Aqui «ein» se declina como o artigo indefinido e «was für» fica fixo: «Was für einen Film möchtest du sehen?» (acusativo masculino). PASSO 5: para o plural, sem artigo: «Was für Filme magst du?»', {
        tag: 'Pronomes',
        comparacao: 'o português usa «qual» para escolher («qual suéter?») e «que tipo de» para a categoria. O alemão distingue igualmente: welcher (escolha) × was für ein (tipo).',
        tabela: [
          { caso: 'Nominativ', masculino: 'welcher Mann', feminino: 'welche Frau', neutro: 'welches Kind', plural: 'welche Kinder' }, { caso: 'Akkusativ', masculino: 'welchen Mann', feminino: 'welche Frau', neutro: 'welches Kind', plural: 'welche Kinder' }, { caso: 'Dativ', masculino: 'welchem Mann', feminino: 'welcher Frau', neutro: 'welchem Kind', plural: 'welchen Kindern' },
        ],
        exemplos: [['Welcher Pullover gefällt dir?', 'Qual suéter agrada a você?'], ['Welchen Film möchtest du sehen?', 'Qual filme você quer ver?'], ['Was für ein Film ist das?', 'Que tipo de filme é este?'], ['Was für Filme magst du?', 'De que tipo de filmes você gosta?']],
        erros: [['Welcher Film möchtest du sehen?', 'Welchen Film möchtest du sehen?', 'Objeto direto masculino: «welchen».'], ['Was für ein Filme magst du?', 'Was für Filme magst du?', 'Plural: sem «ein».']],
      }),
      producao(3, 'Faça 6 perguntas em voz alta: «Welchen … möchtest du? Welche … gefällt dir? Was für ein … ist das?»'),
    ]),
    sessao('S2', 'Wer, wen, wem, wessen', [
      revisao(5, 'Escreva o quadro de «welcher» nos quatro gêneros em nominativo, acusativo e dativo.'),
      palavras(8, [
        ['wer', 'ver', 'quem (sujeito)', 'who'], ['wen', 'ven', 'quem (objeto direto)', 'whom'], ['wem', 'vem', 'a quem (dativo)', 'to whom'], ['wessen', 'véssen', 'de quem', 'whose'],
        ['mit wem', 'mit vem', 'com quem', 'with whom'], ['für wen', 'für ven', 'para quem', 'for whom'], ['von wem', 'fon vem', 'de quem (autor)', 'from whom'], ['zu wem', 'tsu vem', 'a quem (pessoa)', 'to whom'],
      ]),
      gramatica(12, 'As quatro formas de «quem», passo a passo', 'PASSO 1: «quem?» muda com o CASO, como os pronomes: «wer» (nominativo, sujeito): «Wer kommt?»; «wen» (acusativo, objeto direto): «Wen siehst du?»; «wem» (dativo): «Wem hilfst du?»; «wessen» (genitivo, de quem): «Wessen Auto ist das?». PASSO 2: com PREPOSIÇÃO, a preposição vem antes e rege o caso: «Mit wem sprichst du?» (mit + dativo), «Für wen ist das?» (für + acusativo), «Von wem ist der Brief?» (von + dativo), «Zu wem gehst du?» (zu + dativo). PASSO 3: a resposta usa o mesmo caso: «Mit wem sprichst du? — Mit meinem Chef.» PASSO 4: lembre das preposições e dos casos que elas pedem (aula 28 e 29).', {
        tag: 'Pronomes',
        tabela: [
          { caso: 'wer? (Nom.)', pergunta: 'Wer kommt heute?', resposta: 'Mein Bruder kommt.' }, { caso: 'wen? (Akk.)', pergunta: 'Wen siehst du?', resposta: 'Ich sehe meinen Bruder.' }, { caso: 'wem? (Dat.)', pergunta: 'Wem hilfst du?', resposta: 'Ich helfe meinem Bruder.' }, { caso: 'wessen? (Gen.)', pergunta: 'Wessen Auto ist das?', resposta: 'Das ist das Auto meines Bruders.' },
          { caso: 'mit wem?', pergunta: 'Mit wem sprichst du?', resposta: 'Mit meinem Chef.' }, { caso: 'für wen?', pergunta: 'Für wen ist das Geschenk?', resposta: 'Für meine Mutter.' },
        ],
        erros: [['Wer siehst du?', 'Wen siehst du?', 'Objeto direto: «wen».'], ['Wen hilfst du?', 'Wem hilfst du?', '«helfen» pede dativo: «wem».'], ['Mit wen sprichst du?', 'Mit wem sprichst du?', '«mit» pede dativo.']],
      }),
      producao(5, 'Faça e responda 6 perguntas em voz alta: «Wer … ? Wen … ? Wem … ? Mit wem … ? Für wen … ?»'),
    ]),
    sessao('S3', 'Man, jemand, niemand, etwas, nichts, alles', [
      revisao(5, 'Escreva 4 perguntas com «wer, wen, wem, wessen» e as respostas.'),
      gramatica(10, 'Pronomes indefinidos, passo a passo', 'PASSO 1: «man» (a gente, se, uma pessoa em geral) leva o verbo na forma de «er»: «Man darf hier nicht rauchen.» PASSO 2: «jemand» (alguém) e «niemand» (ninguém) mudam no acusativo e no dativo: «jemanden», «niemanden»; «jemandem», «niemandem»: «Ich sehe niemanden», «Ich helfe niemandem.» PASSO 3: «etwas» (algo), «nichts» (nada), «alles» (tudo) não mudam: «Ich brauche etwas», «Er sagt nichts», «Sie weiß alles.» PASSO 4: o adjetivo depois deles fica neutro, com inicial maiúscula e terminação -es (etwas Neues, nichts Gutes): «Hast du etwas Neues?» PASSO 5: «alle» (todos) e «viele» (muitos) fazem plural: «Alle Kinder spielen», «Viele Leute kommen.»', {
        tag: 'Pronomes',
        tabela: [
          { pronome: 'man', significado: 'a gente, se', exemplo: 'Hier darf man nicht rauchen.' }, { pronome: 'jemand / niemand', significado: 'alguém / ninguém', exemplo: 'Ist jemand da? — Nein, niemand.' }, { pronome: 'jemanden / niemanden (Akk.)', significado: 'alguém / ninguém (objeto)', exemplo: 'Ich sehe niemanden.' }, { pronome: 'etwas / nichts / alles', significado: 'algo / nada / tudo', exemplo: 'Er sagt nichts. Sie weiß alles.' },
          { pronome: 'etwas / nichts + adjetivo', significado: 'algo novo / nada bom', exemplo: 'Hast du etwas Neues? Ich habe nichts Gutes gehört.' }, { pronome: 'alle / viele', significado: 'todos / muitos', exemplo: 'Alle Kinder spielen. Viele Leute kommen.' },
        ],
        erros: [['Ich sehe niemand.', 'Ich sehe niemanden.', 'Acusativo: «niemanden».'], ['Hast du etwas neues?', 'Hast du etwas Neues?', 'O adjetivo vira substantivo: maiúscula e -es.'], ['Man dürfen hier rauchen.', 'Man darf hier rauchen.', '«man» leva a forma de «er».']],
      }),
      dialogo(10, 'Ist jemand da? / Há alguém aí?', 'Dois colegas procuram alguém no escritório.', [
        ['Lea', 'Ist jemand im Büro?', 'Há alguém no escritório?'], ['Paul', 'Nein, niemand. Alle sind in der Besprechung.', 'Não, ninguém. Todos estão na reunião.'], ['Lea', 'Wann kommt man aus der Besprechung zurück?', 'Quando se volta da reunião?'],
        ['Paul', 'Ich weiß nichts Genaues. Vielleicht um zehn Uhr.', 'Não sei nada de preciso. Talvez às dez.'], ['Lea', 'Hast du etwas Neues von der Chefin gehört?', 'Você ouviu alguma novidade da chefe?'], ['Paul', 'Nein, ich habe niemanden gesehen.', 'Não, não vi ninguém.'],
        ['Lea', 'Dann warten wir. Viele Leute kommen erst später.', 'Então esperamos. Muita gente só vem mais tarde.'], ['Paul', 'Gute Idee. Ich hole uns einen Kaffee.', 'Boa ideia. Vou buscar um café para nós.'],
      ]),
      producao(5, 'Faça 6 frases com «man», «jemand», «niemand», «etwas», «nichts» e «alles».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 8 perguntas com welcher, was für ein, wer, wen, wem e wessen.'),
      exercicios(20, [
        lacuna('___ Pullover gefällt dir? (qual)', ['Welcher', 'Welchen', 'Welche'], 'Welcher', 'Nominativo masculino.'), lacuna('___ Film möchtest du sehen? (qual)', ['Welchen', 'Welcher', 'Welches'], 'Welchen', 'Acusativo masculino.'), lacuna('Was für ___ Film ist das?', ['ein', 'einen', 'eine'], 'ein', 'Nominativo masculino.'),
        lacuna('Was für ___ Film möchtest du sehen?', ['einen', 'ein', 'einem'], 'einen', 'Acusativo masculino.'), lacuna('___ siehst du? (quem)', ['Wen', 'Wer', 'Wem'], 'Wen', 'Objeto direto.'), lacuna('___ hilfst du? (a quem)', ['Wem', 'Wen', 'Wer'], 'Wem', '«helfen» pede dativo.'),
        lacuna('Mit ___ sprichst du? (quem)', ['wem', 'wen', 'wer'], 'wem', '«mit» pede dativo.'), lacuna('Für ___ ist das Geschenk? (quem)', ['wen', 'wem', 'wer'], 'wen', '«für» pede acusativo.'), lacuna('Ich sehe ___. (ninguém)', ['niemanden', 'niemand', 'niemandem'], 'niemanden', 'Acusativo.'),
        mc('«Was für ein» pergunta por:', ['o tipo', 'a quantidade', 'a posse'], 'o tipo', 'Que tipo de.'), mc('«Man» leva o verbo na forma de:', ['er', 'wir', 'sie (plural)'], 'er', 'man darf.'), mc('Depois de «etwas» ou «nichts», o adjetivo:', ['vira substantivo (Neues, Gutes)', 'fica igual', 'vai para o plural'], 'vira substantivo (Neues, Gutes)', 'Maiúscula e -es.'),
        ordem('Ordene: «Com quem você fala?»', ['Mit', 'wem', 'sprichst', 'du'], 'Mit wem sprichst du?', 'Preposição + wem.'), ouvir('Ich habe niemanden gesehen', ['Ich habe niemanden gesehen', 'Ich habe niemand gesehen', 'Ich habe jemanden gesehen'], 'Ich habe niemanden gesehen', 'Acusativo de niemand.'), ditado('Hast du etwas Neues gehört', 'etwas + adjetivo.'),
        livre('Escreva 5 frases: uma com welcher, uma com was für ein, uma com wen ou wem, uma com man e uma com niemand ou nichts.', 'Welchen Film möchtest du sehen? Was für ein Film ist das? Mit wem sprichst du? Hier darf man nicht rauchen. Ich habe nichts gehört.'),
      ]),
      producao(5, 'Grave-se fazendo perguntas a um amigo (welcher, was für ein, wer, wen, wem) e respondendo com pronomes indefinidos.'),
    ]),
  ],
});
