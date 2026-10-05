import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 40, titulo: 'O futuro: werden e Futur I', nivel: 'a2',
  objetivo: 'Conjugar «werden», usá-lo como verbo («tornar-se») e como auxiliar do futuro (werden + infinitivo), e saber quando o presente com marcador de tempo basta para falar do futuro.',
  nota: 'Você fala do futuro. Próxima aula: o genitivo.',
  sessoes: [
    sessao('S1', 'Werden como verbo', [
      revisao(5, 'Escreva 8 pedidos e conselhos educados com würde, hätte, wäre e könnte.'),
      palavras(8, [
        ['werden', 'vérden', 'tornar-se; (auxiliar do futuro)', 'to become'], ['nächste Woche', 'néçste vórre', 'semana que vem', 'next week'], ['nächstes Jahr', 'néçstes iár', 'ano que vem', 'next year'], ['bald', 'balt', 'em breve', 'soon'],
        ['später', 'xpéter', 'mais tarde', 'later'], ['irgendwann', 'írguent-van', 'um dia, em algum momento', 'someday'], ['die Zukunft', 'di tsúkunft', 'futuro', 'future'], ['der Plan', 'der plan', 'plano', 'plan'],
      ]),
      gramatica(14, 'Werden: tornar-se e futuro, passo a passo', 'PASSO 1: «werden» é irregular: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden. PASSO 2: como VERBO PRINCIPAL, «werden» significa TORNAR-SE, FICAR: «Es wird kalt» (está ficando frio), «Ich werde Lehrer» (vou ser professor), «Er wird müde.» PASSO 3: como AUXILIAR do futuro, «werden» + infinitivo no FIM forma o FUTUR I: «Ich werde morgen arbeiten.» PASSO 4: a frase continua emoldurada: «werden» na 2ª posição e o infinitivo no fim. PASSO 5: pergunta: «Wirst du kommen?»; negação: «Ich werde nicht kommen.» PASSO 6: com verbo separável, o infinitivo inteiro vai ao fim: «Ich werde früh aufstehen.»', {
        tag: 'Verbos',
        comparacao: 'o português usa o futuro simples («eu trabalharei») ou «vou + infinitivo» («vou trabalhar»). O alemão usa «werden + infinitivo», parecido com o segundo.',
        tabela: [
          { pronome: 'ich', werden: 'werde', exemplo: 'Ich werde morgen arbeiten.' }, { pronome: 'du', werden: 'wirst', exemplo: 'Wirst du kommen?' }, { pronome: 'er / sie / es', werden: 'wird', exemplo: 'Es wird kalt. / Er wird kommen.' }, { pronome: 'wir', werden: 'werden', exemplo: 'Wir werden reisen.' },
          { pronome: 'ihr', werden: 'werdet', exemplo: 'Ihr werdet sehen.' }, { pronome: 'sie / Sie', werden: 'werden', exemplo: 'Sie werden warten.' },
        ],
        erros: [['Ich werde arbeiten morgen.', 'Ich werde morgen arbeiten.', 'O infinitivo vai para o fim.'], ['Er werdet kommen.', 'Er wird kommen.', '«er» → wird.']],
      }),
      producao(3, 'Diga 6 frases com «werden»: «Es wird kalt. Ich werde Lehrer. Ich werde morgen … arbeiten.»'),
    ]),
    sessao('S2', 'Futur I ou presente?', [
      revisao(5, 'Escreva as 6 formas de «werden» e 4 frases no Futur I.'),
      palavras(8, [
        ['wahrscheinlich', 'var-xáin-liç', 'provavelmente', 'probably'], ['bestimmt', 'bextímt', 'com certeza', 'certainly'], ['wohl', 'vôl', 'provavelmente, suponho', 'probably'], ['vielleicht', 'filáiçt', 'talvez', 'maybe'],
        ['versprechen', 'ferxpréçen', 'prometer', 'to promise'], ['schaffen', 'xáfen', 'conseguir, dar conta', 'to manage'], ['sehen', 'zéen', 'ver', 'to see'], ['abwarten', 'áp-vârten', 'esperar para ver', 'to wait and see'],
      ]),
      gramatica(12, 'Quando usar o Futur I', 'PASSO 1: na CONVERSA, o alemão usa muitas vezes o PRESENTE com um marcador de tempo para o futuro: «Morgen fahre ich nach Berlin.» Isso é totalmente natural. PASSO 2: o «Futur I» aparece para: (a) PROMESSAS e INTENÇÕES firmes: «Ich werde dir helfen.»; (b) PREVISÕES: «Es wird morgen regnen.»; (c) SUPOSIÇÕES sobre o presente, com «wohl», «wahrscheinlich»: «Er wird wohl krank sein» (ele deve estar doente); (d) quando faltar um marcador de tempo e o sentido pedir: «Wir werden sehen» (veremos). PASSO 3: se há marcador de tempo (morgen, nächste Woche, bald), use o presente. PASSO 4: o Futur I combina com «bestimmt», «wahrscheinlich», «wohl».', {
        tag: 'Verbos',
        tabela: [
          { uso: 'futuro com marcador de tempo (presente)', frase: 'Morgen fahre ich nach Berlin.' }, { uso: 'promessa', frase: 'Ich werde dir helfen.' }, { uso: 'previsão', frase: 'Morgen wird es regnen.' }, { uso: 'suposição sobre o presente', frase: 'Er wird wohl krank sein.' }, { uso: 'expressão fixa', frase: 'Wir werden sehen.' },
        ],
        erros: [['Morgen werde ich nach Berlin fahre.', 'Morgen fahre ich nach Berlin.', 'Com «morgen», o presente basta.'], ['Er wird wohl kranken.', 'Er wird wohl krank sein.', 'Suposição: werden + infinitivo (sein).']],
      }),
      producao(5, 'Faça uma promessa, uma previsão e uma suposição em voz alta: «Ich werde … Morgen wird es … Er wird wohl …»'),
    ]),
    sessao('S3', 'Planos para o futuro', [
      revisao(5, 'Escreva 6 frases sobre o seu futuro: três no presente com marcador de tempo e três no Futur I.'),
      gramatica(10, 'Falar de planos', 'PASSO 1: para planos, use o presente com marcador de tempo: «Nächste Woche fange ich einen Sprachkurs an.» PASSO 2: «wollen» expressa a vontade: «Ich will Arzt werden.» PASSO 3: «werden» confirma o resultado esperado: «Ich werde Arzt.» PASSO 4: «hoffen» e «glauben» ajudam: «Ich hoffe, dass ich eine Stelle finde.» PASSO 5: use «bald», «später», «irgendwann» para suavizar o prazo.', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'plano com data', frase: 'Nächste Woche fange ich einen Sprachkurs an.' }, { funcao: 'vontade', frase: 'Ich will Arzt werden.' }, { funcao: 'resultado esperado', frase: 'Ich werde bald Arzt.' }, { funcao: 'esperança', frase: 'Ich hoffe, dass ich eine Stelle finde.' },
        ],
      }),
      dialogo(10, 'Pläne für die Zukunft / Planos para o futuro', 'Dois amigos falam do que vão fazer depois do curso.', [
        ['Mia', 'Was wirst du nach dem Sprachkurs machen?', 'O que você vai fazer depois do curso de idiomas?'], ['Jonas', 'Ich werde in Berlin arbeiten. Ich glaube, dass ich dort bald eine Stelle finde.', 'Vou trabalhar em Berlim. Acho que logo encontro uma vaga lá.'], ['Mia', 'Wirst du allein wohnen?', 'Você vai morar sozinho?'],
        ['Jonas', 'Nein, ich werde mit einem Freund wohnen. Wir werden eine Wohnung suchen.', 'Não, vou morar com um amigo. Vamos procurar um apartamento.'], ['Mia', 'Wann werdet ihr umziehen?', 'Quando vocês vão se mudar?'], ['Jonas', 'Im Frühling. Es wird bestimmt nicht leicht sein, aber wir werden es schaffen.', 'Na primavera. Com certeza não será fácil, mas vamos conseguir.'],
        ['Mia', 'Ich werde dich besuchen, wenn du dort wohnst.', 'Vou visitar você quando você morar lá.'], ['Jonas', 'Du wirst mir fehlen, aber wir werden oft telefonieren.', 'Você vai me fazer falta, mas vamos telefonar com frequência.'], ['Mia', 'Das wird schön! Wir werden sehen.', 'Vai ser bonito! Veremos.'],
      ]),
      producao(5, 'Conte os seus planos para o próximo ano em 8 frases, com «werden», «wollen» e o presente com marcador de tempo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre o seu futuro.'),
      exercicios(20, [
        lacuna('Ich ___ morgen arbeiten. (werden)', ['werde', 'wirst', 'wird'], 'werde', 'ich → werde.'), lacuna('Du ___ kommen. (werden)', ['wirst', 'wird', 'werdet'], 'wirst', 'du → wirst.'), lacuna('Es ___ kalt. (werden)', ['wird', 'werde', 'wirst'], 'wird', 'es → wird.'),
        lacuna('Wir ___ reisen. (werden)', ['werden', 'wird', 'werdet'], 'werden', 'wir → werden.'), lacuna('Ihr ___ sehen. (werden)', ['werdet', 'werden', 'wirst'], 'werdet', 'ihr → werdet.'), lacuna('Er wird wohl krank ___.', ['sein', 'ist', 'wäre'], 'sein', 'Suposição: infinitivo no fim.'),
        mc('Onde vai o infinitivo no Futur I?', ['no fim da frase', 'logo depois de «werden»', 'no começo'], 'no fim da frase', 'Moldura da frase.'), mc('Com marcador de tempo (morgen), o alemão usa:', ['o presente', 'sempre o Futur I', 'o Perfekt'], 'o presente', 'Morgen fahre ich …'), mc('«Wir werden sehen» significa:', ['Veremos', 'Estamos vendo', 'Vimos'], 'Veremos', 'Expressão fixa.'),
        mc('«Es wird kalt» significa:', ['Está ficando frio', 'Estará frio', 'Estava frio'], 'Está ficando frio', '«werden» = tornar-se.'), ordem('Ordene: «Eu vou trabalhar amanhã.»', ['Ich', 'werde', 'morgen', 'arbeiten'], 'Ich werde morgen arbeiten.', 'werden + infinitivo no fim.'), ordem('Ordene: «Você virá?»', ['Wirst', 'du', 'kommen'], 'Wirst du kommen?', 'Pergunta com «werden».'),
        ouvir('Wir werden eine Wohnung suchen', ['Wir werden eine Wohnung suchen', 'Wir suchen eine Wohnung', 'Wir haben eine Wohnung gesucht'], 'Wir werden eine Wohnung suchen', 'Futur I.'), ditado('Das wird schön', 'Previsão.'), livre('Escreva 5 frases sobre o futuro: uma com «werden» como verbo principal, duas no Futur I, uma com presente e marcador de tempo e uma suposição.', 'Es wird kalt. Ich werde Lehrer. Ich werde dir helfen. Morgen fahre ich nach Berlin. Er wird wohl krank sein.'),
      ]),
      producao(5, 'Grave-se falando dos seus planos, promessas e previsões para o próximo ano.'),
    ]),
  ],
});
