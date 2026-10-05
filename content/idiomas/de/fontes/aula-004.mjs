import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 4, titulo: 'Verbos no presente e ordem da frase', nivel: 'a1',
  objetivo: 'Conjugar os verbos regulares no presente, colocar o verbo na segunda posição e fazer perguntas e negações simples.',
  nota: 'Você conjuga os verbos regulares e monta frases e perguntas. Próxima aula: família, «haben» e possessivos.',
  sessoes: [
    sessao('S1', 'O presente regular', [
      revisao(5, 'Escreva as 6 formas de «sein» de memória.'),
      palavras(10, [
        ['wohnen', 'vônen', 'morar', 'to live'], ['arbeiten', 'árbaiten', 'trabalhar', 'to work'], ['lernen', 'lérnen', 'aprender, estudar', 'to learn'], ['machen', 'márren', 'fazer', 'to do, to make'], ['spielen', 'xpílen', 'jogar, brincar, tocar', 'to play'],
        ['kommen', 'kómen', 'vir', 'to come'], ['trinken', 'trínken', 'beber', 'to drink'], ['hören', 'hören', 'ouvir', 'to hear'], ['kaufen', 'káufen', 'comprar', 'to buy'], ['reisen', 'ráisen', 'viajar', 'to travel'],
      ]),
      gramatica(10, 'O presente regular: raiz + terminação', 'Quase todos os verbos alemães terminam em -en no infinitivo. Tire o -en para achar a raiz e acrescente as terminações: -e, -st, -t, -en, -t, -en. Se a raiz termina em -t ou -d (arbeiten, finden), entra um -e- antes de -st e de -t, para facilitar a pronúncia: du arbeitest, er arbeitet. Se a raiz termina em -s, -ß ou -z (heißen, reisen), o «du» perde o -s da terminação: du heißt, du reist. As formas «wir», «sie» e «Sie» são iguais ao infinitivo.', {
        tag: 'Verbos',
        comparacao: 'em português cada pessoa tem uma terminação própria (falo, falas, fala...). Em alemão, são só cinco terminações, e «wir», «sie» e «Sie» repetem o infinitivo.',
        tabela: [
          { pronome: 'ich', terminacao: '-e', wohnen: 'wohne', arbeiten: 'arbeite' }, { pronome: 'du', terminacao: '-st', wohnen: 'wohnst', arbeiten: 'arbeitest' }, { pronome: 'er / sie / es', terminacao: '-t', wohnen: 'wohnt', arbeiten: 'arbeitet' },
          { pronome: 'wir', terminacao: '-en', wohnen: 'wohnen', arbeiten: 'arbeiten' }, { pronome: 'ihr', terminacao: '-t', wohnen: 'wohnt', arbeiten: 'arbeitet' }, { pronome: 'sie / Sie', terminacao: '-en', wohnen: 'wohnen', arbeiten: 'arbeiten' },
        ],
        erros: [['Du arbeitst.', 'Du arbeitest.', 'Raiz em -t: entra um -e- antes do -st.'], ['Du reisst.', 'Du reist.', 'Raiz em -s: o «du» perde o -s da terminação.']],
      }),
      producao(5, 'Diga: «Ich wohne in … Ich arbeite … Ich lerne Deutsch. Du lernst auch Deutsch.»'),
    ]),
    sessao('S2', 'A ordem da frase e as perguntas', [
      revisao(5, 'Conjugue em voz alta «wohnen» e «arbeiten» nas seis formas.'),
      palavras(8, [
        ['heute', 'hóite', 'hoje', 'today'], ['morgen', 'mórguen', 'amanhã', 'tomorrow'], ['jetzt', 'iétst', 'agora', 'now'], ['oft', 'oft', 'com frequência', 'often'], ['immer', 'ímer', 'sempre', 'always'], ['nie', 'ni', 'nunca', 'never'], ['manchmal', 'mánçmal', 'às vezes', 'sometimes'], ['gern', 'guérn', 'com prazer, gostar de', 'gladly'],
      ]),
      gramatica(12, 'O verbo na segunda posição, perguntas e negação', 'O verbo conjugado fica sempre na 2ª posição. Se a frase começa por outro termo (hoje, amanhã), o sujeito vai para depois do verbo: «Heute arbeite ich.» Nas perguntas de sim ou não, o verbo vem em 1º lugar: «Wohnst du in Berlin?» Nas perguntas com palavra interrogativa, a palavra vem em 1º e o verbo em 2º: «Wo wohnst du?» A negação «nicht» vai depois do verbo («Ich arbeite nicht») ou antes do que se nega («Ich wohne nicht in Berlin»). Para dizer que gosta de fazer algo, use «gern» depois do verbo: «Ich lerne gern Deutsch».', {
        tag: 'Frase',
        tabelas: [
          { titulo: 'As posições da frase', linhas: [
            { pos1: 'Ich', pos2: 'wohne', resto: 'in Berlin.' }, { pos1: 'Heute', pos2: 'arbeite', resto: 'ich nicht.' }, { pos1: 'Wo', pos2: 'wohnst', resto: 'du?' }, { pos1: 'Wohnst', pos2: 'du', resto: 'in Berlin?' },
          ] },
          { titulo: 'As palavras interrogativas', linhas: [
            { pergunta: 'wer', pt: 'quem', exemplo: 'Wer ist das?' }, { pergunta: 'was', pt: 'o quê', exemplo: 'Was machst du?' }, { pergunta: 'wo', pt: 'onde', exemplo: 'Wo wohnst du?' }, { pergunta: 'woher', pt: 'de onde', exemplo: 'Woher kommst du?' },
            { pergunta: 'wohin', pt: 'para onde', exemplo: 'Wohin reist du?' }, { pergunta: 'wann', pt: 'quando', exemplo: 'Wann arbeitest du?' }, { pergunta: 'wie', pt: 'como', exemplo: 'Wie heißt du?' }, { pergunta: 'warum', pt: 'por que', exemplo: 'Warum lernst du Deutsch?' },
          ] },
        ],
        erros: [['Ich heute arbeite.', 'Heute arbeite ich.', 'O verbo conjugado fica na 2ª posição.'], ['Wo du wohnst?', 'Wo wohnst du?', 'Palavra interrogativa + verbo + sujeito.']],
      }),
      producao(5, 'Diga: «Heute arbeite ich. Wo wohnst du? Ich lerne gern Deutsch.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 perguntas em alemão com palavras interrogativas diferentes.'),
      dialogo(10, 'Wo wohnst du? / Onde você mora?', 'Dois colegas conversam no intervalo.', [
        ['Mia', 'Wo wohnst du, Jonas?', 'Onde você mora, Jonas?'], ['Jonas', 'Ich wohne in Hamburg. Und du?', 'Moro em Hamburgo. E você?'], ['Mia', 'Ich wohne in München. Arbeitest du in Hamburg?', 'Moro em Munique. Você trabalha em Hamburgo?'],
        ['Jonas', 'Ja, ich arbeite hier. Ich lerne auch Portugiesisch.', 'Sim, trabalho aqui. Também aprendo português.'], ['Mia', 'Wirklich? Ich lerne gern Sprachen!', 'Sério? Eu gosto de aprender idiomas!'], ['Jonas', 'Wir lernen zusammen!', 'Vamos aprender juntos!'],
        ['Mia', 'Gern! Wann lernen wir?', 'Com prazer! Quando estudamos?'], ['Jonas', 'Morgen! Tschüs!', 'Amanhã! Tchau!'], ['Mia', 'Tschüs!', 'Tchau!'],
      ]),
      texto(10, 'Mia und Jonas / Mia e Jonas', 'Ich heiße Mia. Ich wohne in München. Ich arbeite hier und ich lerne gern Sprachen. Heute lerne ich Portugiesisch. Jonas arbeitet in Hamburg. Er wohnt dort und spielt oft Musik. Wir lernen zusammen.',
        'Eu me chamo Mia. Moro em Munique. Trabalho aqui e gosto de aprender idiomas. Hoje aprendo português. Jonas trabalha em Hamburgo. Ele mora lá e toca música com frequência. Nós aprendemos juntos.',
        [['Wo wohnt Mia?', 'In München'], ['Was lernt Mia heute?', 'Portugiesisch'], ['Wo arbeitet Jonas?', 'In Hamburg']]),
      producao(5, 'Conte em voz alta onde você mora, onde trabalha e o que você aprende.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: onde mora, onde trabalha, o que aprende e uma pergunta.'),
      exercicios(20, [
        lacuna('Ich ___ in Berlin. (wohnen)', ['wohne', 'wohnst', 'wohnt'], 'wohne', 'ich → -e.'), lacuna('Du ___ Deutsch. (lernen)', ['lernst', 'lerne', 'lernt'], 'lernst', 'du → -st.'), lacuna('Er ___ hier. (arbeiten)', ['arbeitet', 'arbeitt', 'arbeiten'], 'arbeitet', 'Raiz em -t: entra o -e-.'),
        lacuna('Wir ___ Kaffee. (trinken)', ['trinken', 'trinkt', 'trinke'], 'trinken', 'wir → -en.'), lacuna('Ihr ___ Musik. (hören)', ['hört', 'hören', 'höre'], 'hört', 'ihr → -t.'), lacuna('Du ___ nach Berlin. (reisen)', ['reist', 'reisst', 'reisest'], 'reist', 'Raiz em -s: o «du» perde o -s.'),
        ordem('Ordene: «Hoje eu trabalho.»', ['Heute', 'arbeite', 'ich'], 'Heute arbeite ich.', 'O verbo fica na 2ª posição.'), ordem('Ordene: «Onde você mora?»', ['Wo', 'wohnst', 'du'], 'Wo wohnst du?', 'Palavra interrogativa + verbo + sujeito.'),
        mc('Em alemão, o verbo conjugado fica:', ['na 2ª posição', 'no fim', 'na 1ª posição sempre'], 'na 2ª posição', 'Segunda posição na frase afirmativa.'), mc('A pergunta de sim ou não começa:', ['pelo verbo', 'pelo sujeito', 'pela palavra «ob»'], 'pelo verbo', 'Verbo em 1º lugar.'),
        mc('«Wann» significa:', ['quando', 'onde', 'por que'], 'quando', '«wann» = quando.'), ouvir('Wo wohnst du?', ['Wo wohnst du?', 'Wie heißt du?', 'Woher kommst du?'], 'Wo wohnst du?', '«wo» = onde.'), ditado('Ich lerne gern Deutsch', 'gern = com prazer.'),
        livre('Escreva 4 frases: onde mora, onde trabalha, o que aprende e uma pergunta.', 'Ich wohne in Berlin. Ich arbeite hier. Ich lerne Deutsch. Wo wohnst du?'),
      ]),
      producao(5, 'Grave-se contando onde você mora, onde trabalha e o que você aprende, e faça duas perguntas.'),
    ]),
  ],
});
