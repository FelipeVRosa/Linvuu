import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 54, titulo: 'Konjunktiv II 1: situações irreais e desejos', nivel: 'b1',
  objetivo: 'Formar condicionais irreais com «wenn» + Konjunktiv II («Wenn ich Zeit hätte, würde ich reisen»), expressar desejos («Ich wünschte, …»), dar conselhos hipotéticos e perguntar «Was würdest du tun, wenn …?».',
  nota: 'Você fala do que não é real: sonhos, hipóteses e desejos. Próxima aula: o infinitivo com «zu».',
  sessoes: [
    sessao('S1', 'Wenn + Konjunktiv II', [
      revisao(5, 'Escreva 6 frases com würde, hätte, wäre e könnte do A2.'),
      palavras(8, [
        ['die Million', 'di miliôn', 'milhão', 'million'], ['der Lottogewinn', 'der lóto-guevin', 'prêmio da loteria', 'lottery win'], ['reich', 'raiç', 'rico', 'rich'], ['arm', 'arm', 'pobre', 'poor'],
        ['die Welt', 'di velt', 'mundo', 'world'], ['träumen', 'tróimen', 'sonhar', 'to dream'], ['der Traum', 'der traum', 'sonho', 'dream'], ['unmöglich', 'un-möglich', 'impossível', 'impossible'],
      ]),
      gramatica(14, 'Condicionais irreais, passo a passo', 'PASSO 1: uma CONDICIONAL IRREAL fala de algo improvável ou impossível no presente: «Wenn ich mehr Zeit hätte, würde ich reisen» (se eu tivesse mais tempo, viajaria). PASSO 2: na frase com «WENN», o verbo vai para o FIM e está no KONJUNKTIV II: «hätte», «wäre», «könnte», «würde» + infinitivo. PASSO 3: na PRINCIPAL, use «WÜRDE» + infinitivo no fim (ou «hätte», «wäre», «könnte» diretos): «…, würde ich reisen.» PASSO 4: formas curtas que você precisa: hätte (haben), wäre (sein), könnte (können), würde + infinitivo (todos os outros verbos). PASSO 5: «Wenn ich du wäre, würde ich …» (no seu lugar, eu …). PASSO 6: compare: condição REAL: «Wenn ich Zeit habe, reise ich» (talvez aconteça); IRREAL: «Wenn ich Zeit hätte, würde ich reisen» (não tenho).', {
        tag: 'Verbos',
        comparacao: 'o português tem o imperfeito do subjuntivo («se eu tivesse») e o futuro do pretérito («eu viajaria»). O alemão usa o Konjunktiv II nas duas partes: «hätte … würde».',
        tabela: [
          { tipo: 'real', frase: 'Wenn ich Zeit habe, reise ich.' }, { tipo: 'irreal (presente)', frase: 'Wenn ich Zeit hätte, würde ich reisen.' }, { tipo: 'irreal (com wäre)', frase: 'Wenn ich reich wäre, würde ich um die Welt reisen.' }, { tipo: 'no seu lugar', frase: 'Wenn ich du wäre, würde ich mehr schlafen.' }, { tipo: 'pergunta', frase: 'Was würdest du tun, wenn du eine Million hättest?' },
        ],
        erros: [['Wenn ich Zeit habe, würde ich reisen. (e não tenho)', 'Wenn ich Zeit hätte, würde ich reisen.', 'Irreal: Konjunktiv II nos dois lados.'], ['Wenn ich würde Zeit haben, würde ich reisen.', 'Wenn ich Zeit hätte, würde ich reisen.', 'Depois de «wenn», evite «würde»: use «hätte», «wäre».'], ['Wenn ich Zeit hätte, ich würde reisen.', 'Wenn ich Zeit hätte, würde ich reisen.', 'Principal: verbo na 2ª posição.']],
      }),
      producao(3, 'Diga 6 sonhos em voz alta: «Wenn ich eine Million hätte, würde ich … Wenn ich reich wäre, würde ich …»'),
    ]),
    sessao('S2', 'Desejos', [
      revisao(5, 'Escreva 6 frases irreais com «wenn» + Konjunktiv II.'),
      palavras(8, [
        ['der Wunsch', 'der vunx', 'desejo', 'wish'], ['wünschen', 'vünxen', 'desejar', 'to wish'], ['hoffentlich', 'hófent-liç', 'tomara, esperançosamente', 'hopefully'], ['doch', 'dorr', '(reforça o desejo)', '(particle)'],
        ['nur', 'nur', 'só, apenas', 'only'], ['leider', 'láider', 'infelizmente', 'unfortunately'], ['schade', 'xáde', 'pena', 'pity'], ['gern', 'guérn', 'com prazer', 'gladly'],
      ]),
      gramatica(12, 'Expressar desejos, passo a passo', 'PASSO 1: para um DESEJO irreal, use «ICH WÜNSCHTE, …» + Konjunktiv II: «Ich wünschte, ich hätte mehr Zeit» (eu queria ter mais tempo). PASSO 2: outra forma: «WENN … DOCH / NUR …!»: «Wenn ich doch nur mehr Zeit hätte!» «Hätte ich doch mehr Zeit!» (o verbo vai para o começo). PASSO 3: com «wäre»: «Ich wäre gern reich», «Ich wünschte, es wäre schon Freitag.» PASSO 4: a palavra «gern» no Konjunktiv II expressa desejo suave: «Ich würde gern reisen.» PASSO 5: lembre da diferença para o desejo REAL: «Ich hoffe, dass du kommst» (real) × «Ich wünschte, du kämest» (irreal; use «würdest kommen»).', {
        tag: 'Verbos',
        tabela: [
          { forma: 'Ich wünschte, …', frase: 'Ich wünschte, ich hätte mehr Zeit.' }, { forma: 'Wenn … doch nur …!', frase: 'Wenn ich doch nur mehr Zeit hätte!' }, { forma: 'Hätte/Wäre … doch!', frase: 'Hätte ich doch mehr Zeit! Wäre es doch schon Freitag!' }, { forma: 'Ich wäre gern …', frase: 'Ich wäre gern reich.' }, { forma: 'desejo real', frase: 'Ich hoffe, dass du kommst.' },
        ],
        erros: [['Ich wünsche, ich habe mehr Zeit.', 'Ich wünschte, ich hätte mehr Zeit.', 'Desejo irreal: Konjunktiv II.'], ['Wenn ich doch nur mehr Zeit habe!', 'Wenn ich doch nur mehr Zeit hätte!', 'Konjunktiv II.']],
      }),
      producao(5, 'Diga 6 desejos irreais: «Ich wünschte, ich hätte … Wenn ich doch nur … hätte! Ich wäre gern …»'),
    ]),
    sessao('S3', 'Hipóteses e conselhos', [
      revisao(5, 'Escreva 6 desejos irreais.'),
      gramatica(10, 'Hipóteses na conversa', 'PASSO 1: para perguntar sobre uma hipótese: «Was würdest du machen, wenn …?» PASSO 2: para responder: «Wenn ich …, würde ich …» PASSO 3: para aconselhar: «An deiner Stelle würde ich …» ou «Wenn ich du wäre, würde ich …» PASSO 4: para comparar o real e o irreal: «Ich habe leider keine Zeit. Wenn ich Zeit hätte, würde ich mitkommen.» PASSO 5: para ser educado, a cortesia reaparece: «Wenn Sie so freundlich wären, würde ich Sie bitten, …»', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'perguntar', frase: 'Was würdest du machen, wenn du im Lotto gewinnen würdest?' }, { funcao: 'responder', frase: 'Wenn ich eine Million hätte, würde ich um die Welt reisen.' }, { funcao: 'aconselhar', frase: 'Wenn ich du wäre, würde ich mehr schlafen.' }, { funcao: 'real × irreal', frase: 'Ich habe keine Zeit. Wenn ich Zeit hätte, würde ich mitkommen.' },
        ],
      }),
      dialogo(10, 'Was wäre, wenn …? / E se …?', 'Dois amigos fantasiam sobre ganhar na loteria.', [
        ['Lea', 'Was würdest du machen, wenn du im Lotto gewinnen würdest?', 'O que você faria se ganhasse na loteria?'], ['Paul', 'Wenn ich eine Million hätte, würde ich um die Welt reisen.', 'Se eu tivesse um milhão, viajaria pelo mundo.'], ['Lea', 'Und wenn du reich wärst, würdest du dann noch arbeiten?', 'E se você fosse rico, ainda trabalharia?'],
        ['Paul', 'Wahrscheinlich ja, aber nur halbtags.', 'Provavelmente sim, mas só meio período.'], ['Lea', 'Ich würde ein Haus am Meer kaufen, wenn ich das Geld hätte.', 'Eu compraria uma casa na praia se tivesse o dinheiro.'], ['Paul', 'Wenn du ein Haus am Meer hättest, würde ich dich oft besuchen.', 'Se você tivesse uma casa na praia, eu visitaria você com frequência.'],
        ['Lea', 'Dann hoffen wir, dass wir bald gewinnen!', 'Então vamos torcer para ganhar logo!'], ['Paul', 'Ich wünschte, das wäre schon morgen!', 'Eu queria que fosse amanhã!'],
      ]),
      producao(5, 'Pergunte e responda em voz alta: «Was würdest du machen, wenn du … hättest? Wenn ich … wäre, würde ich …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases sobre o que você faria se a sua vida fosse diferente.'),
      exercicios(20, [
        lacuna('Wenn ich Zeit ___, würde ich reisen. (haben)', ['hätte', 'habe', 'hatte'], 'hätte', 'Konjunktiv II.'), lacuna('Wenn ich reich ___, würde ich reisen. (sein)', ['wäre', 'bin', 'war'], 'wäre', 'Konjunktiv II.'), lacuna('Wenn ich Zeit hätte, ___ ich reisen. (würde)', ['würde', 'werde', 'wurde'], 'würde', 'würde + infinitivo.'),
        lacuna('Ich ___, ich hätte mehr Zeit. (wünschen)', ['wünschte', 'wünsche', 'wünscht'], 'wünschte', 'Desejo irreal.'), lacuna('Wenn ich doch nur mehr Zeit ___! (haben)', ['hätte', 'habe', 'hatte'], 'hätte', 'Konjunktiv II.'), lacuna('Wenn ich du ___, würde ich mehr schlafen. (sein)', ['wäre', 'bin', 'war'], 'wäre', 'Conselho hipotético.'),
        mc('A condicional irreal fala de:', ['algo improvável ou impossível', 'algo certo', 'algo passado'], 'algo improvável ou impossível', 'Konjunktiv II.'), mc('Depois de «wenn» irreal, o verbo vai:', ['para o fim, no Konjunktiv II', 'para a 2ª posição', 'para o começo'], 'para o fim, no Konjunktiv II', 'Subordinada.'), mc('«Ich wünschte, ich hätte mehr Zeit» expressa:', ['um desejo irreal', 'um fato', 'uma ordem'], 'um desejo irreal', 'Desejo.'),
        ordem('Ordene: «Se eu tivesse tempo, viajaria.»', ['Wenn', 'ich', 'Zeit', 'hätte', 'würde', 'ich', 'reisen'], 'Wenn ich Zeit hätte, würde ich reisen.', 'Konjunktiv II nos dois lados.'), ordem('Ordene: «No seu lugar, eu dormiria mais.»', ['Wenn', 'ich', 'du', 'wäre', 'würde', 'ich', 'mehr', 'schlafen'], 'Wenn ich du wäre, würde ich mehr schlafen.', 'Conselho hipotético.'), ouvir('Was würdest du machen, wenn du eine Million hättest', ['Was würdest du machen, wenn du eine Million hättest', 'Was machst du, wenn du eine Million hast', 'Was hast du mit der Million gemacht'], 'Was würdest du machen, wenn du eine Million hättest', 'Pergunta hipotética.'),
        ditado('Ich wünschte, das wäre schon morgen', 'Desejo irreal.'), livre('Escreva 5 frases: duas condicionais irreais, um desejo com «wünschte», um conselho com «Wenn ich du wäre» e uma pergunta hipotética.', 'Wenn ich Zeit hätte, würde ich reisen. Wenn ich reich wäre, würde ich ein Haus kaufen. Ich wünschte, ich hätte mehr Zeit. Wenn ich du wäre, würde ich mehr schlafen. Was würdest du machen, wenn du eine Million hättest?'),
      ]),
      producao(5, 'Grave-se descrevendo o que você faria se tivesse mais tempo, dinheiro ou coragem.'),
    ]),
  ],
});
