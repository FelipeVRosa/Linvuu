import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 63, titulo: 'Formação de palavras: compostos, prefixos e sufixos', nivel: 'b1',
  objetivo: 'Entender e formar palavras alemãs por composição (Haustürschlüssel), prefixos verbais (be-, ent-, er-, ver-, zer-; separáveis e inseparáveis) e sufixos (-ung, -heit, -keit, -schaft, -lich, -ig, -bar, -los), para deduzir o sentido de palavras novas.',
  nota: 'Você deduz o sentido de palavras novas. Próxima aula: dar opinião e escrever um texto de opinião.',
  sessoes: [
    sessao('S1', 'Palavras compostas', [
      revisao(5, 'Escreva 6 frases no discurso indireto.'),
      palavras(8, [
        ['das Wort', 'das vort', 'palavra', 'word'], ['zusammengesetzt', 'tsu-zá-men-gue-zétst', 'composto', 'compound'], ['die Haustür', 'di háus-tür', 'porta da casa', 'front door'], ['der Wohnungsschlüssel', 'der vô-nungs-xlü-sel', 'chave do apartamento', 'flat key'],
        ['das Handtuch', 'das hánt-turr', 'toalha', 'towel'], ['die Zahnbürste', 'di tsán-bür-ste', 'escova de dentes', 'toothbrush'], ['der Kühlschrank', 'der kül-xrank', 'geladeira', 'fridge'], ['das Fugen-s', 'das fú-guen-ess', 'o -s de ligação', 'linking -s'],
      ]),
      gramatica(14, 'Palavras compostas, passo a passo', 'PASSO 1: o alemão forma palavras NOVAS juntando duas ou mais: «Haus» + «Tür» → «Haustür» (porta da casa). A primeira palavra diz o TIPO, a última diz O QUE É: «die Tür» é a base. PASSO 2: o GÊNERO e o PLURAL do composto são os da ÚLTIMA palavra: «das Haus» + «die Tür» → «DIE Haustür» (feminino); «die Hand» + «das Tuch» → «DAS Handtuch». PASSO 3: às vezes entra um ELEMENTO DE LIGAÇÃO: «-s», «-n», «-en», «-e»: «Wohnung-s-schlüssel», «Hunde-hütte». Regra prática: depois de palavras em «-ung», «-heit», «-keit», «-schaft», «-tion», usa-se «-s». PASSO 4: para LER um composto longo, divida de TRÁS PARA A FRENTE: «Haustürschlüssel» = a chave (Schlüssel) da porta (Tür) da casa (Haus). PASSO 5: os compostos são escritos juntos, em uma só palavra.', {
        tag: 'Substantivos',
        comparacao: 'o português junta palavras com «de» («chave da porta»). O alemão as cola numa palavra só, e o gênero é o da última.',
        tabela: [
          { composto: 'die Haustür', partes: 'das Haus + die Tür', genero: 'die (da última: Tür)' }, { composto: 'das Handtuch', partes: 'die Hand + das Tuch', genero: 'das (da última: Tuch)' }, { composto: 'der Wohnungsschlüssel', partes: 'die Wohnung + -s + der Schlüssel', genero: 'der (da última: Schlüssel)' }, { composto: 'der Haustürschlüssel', partes: 'das Haus + die Tür + der Schlüssel', genero: 'der (da última: Schlüssel)' },
          { composto: 'die Zahnbürste', partes: 'der Zahn + die Bürste', genero: 'die (da última: Bürste)' },
        ],
        erros: [['das Haustür', 'die Haustür', 'O gênero é o da última palavra: «die Tür».'], ['Haus Tür', 'Haustür', 'Escreve-se junto.'], ['die Wohnungschlüssel', 'der Wohnungsschlüssel', 'Gênero da última palavra e o «-s» de ligação.']],
      }),
      producao(3, 'Forme 6 compostos e diga o artigo de cada um: «Haus + Tür → die Haustür …»'),
    ]),
    sessao('S2', 'Prefixos verbais', [
      revisao(5, 'Escreva 6 compostos com artigo e as partes.'),
      palavras(8, [
        ['be-', 'be', 'torna o verbo transitivo', 'transitive prefix'], ['ent-', 'ent', 'separação, início', 'away, start'], ['er-', 'er', 'resultado, alcance', 'result'], ['ver-', 'fer', 'mudança, erro, afastamento', 'change, error'],
        ['zer-', 'tser', 'destruição', 'destruction'], ['ge-', 'gue', 'conclusão', 'completion'], ['miss-', 'mis', 'erro, mal', 'wrongly'], ['trennbar', 'trén-bar', 'separável', 'separable'],
      ]),
      gramatica(12, 'Prefixos verbais, passo a passo', 'PASSO 1: um PREFIXO muda o sentido de um verbo. PASSO 2: os prefixos INSEPARÁVEIS são «BE-, ENT-, ER-, VER-, ZER-, GE-, MISS-»; ficam colados ao verbo, não levam acento e o Partizip II NÃO leva «ge-»: «verkaufen → verkauft», «besuchen → besucht». PASSO 3: os SEPARÁVEIS são, por exemplo, «AB-, AN-, AUF-, AUS-, EIN-, MIT-, NACH-, VOR-, ZU-, ZURÜCK-, WEG-»; levam o acento e o Partizip II tem «ge-» no meio: «einkaufen → eingekauft». PASSO 4: sentidos úteis: «ver-» muda ou errado («verstehen», «verkaufen», «vergessen»); «er-» resultado («erkennen», «erreichen»); «ent-» começo ou afastamento («entdecken», «entfernen»); «zer-» destruir («zerstören», «zerbrechen»); «be-» objeto direto («besuchen», «bezahlen»). PASSO 5: use a lógica para deduzir: «kaufen» = comprar, «verkaufen» = vender.', {
        tag: 'Verbos',
        tabela: [
          { prefixo: 'ver-', infinitivo: 'kaufen → verkaufen', sentido: 'comprar → vender' }, { prefixo: 'er-', infinitivo: 'kennen → erkennen', sentido: 'conhecer → reconhecer' }, { prefixo: 'ent-', infinitivo: 'decken → entdecken', sentido: 'cobrir → descobrir' }, { prefixo: 'zer-', infinitivo: 'brechen → zerbrechen', sentido: 'quebrar → despedaçar' },
          { prefixo: 'be-', infinitivo: 'suchen → besuchen', sentido: 'procurar → visitar' }, { prefixo: 'ab-/an-/auf-/aus-/ein- (separáveis)', infinitivo: 'kaufen → einkaufen', sentido: 'comprar → fazer compras' },
        ],
        erros: [['Ich habe geverkauft.', 'Ich habe verkauft.', 'Prefixo inseparável: sem «ge-».'], ['Ich habe geeinkauft.', 'Ich habe eingekauft.', 'Separável: o «ge-» entra entre o prefixo e o verbo, uma só vez.'], ['Ich verkaufe ein.', 'Ich kaufe ein.', '«ver-» é inseparável e é outro verbo.']],
      }),
      producao(5, 'Explique em voz alta 6 verbos com prefixo: «kaufen → verkaufen, kennen → erkennen …»'),
    ]),
    sessao('S3', 'Sufixos', [
      revisao(5, 'Escreva 8 verbos com prefixo e o Partizip II de cada um.'),
      gramatica(10, 'Sufixos de substantivos e adjetivos', 'PASSO 1: os SUFIXOS indicam o tipo de palavra e o gênero. PASSO 2: substantivos FEMININOS: «-UNG» (die Wohnung, die Meinung), «-HEIT» e «-KEIT» (die Freiheit, die Möglichkeit), «-SCHAFT» (die Freundschaft), «-TION» (die Information). PASSO 3: substantivos de PESSOAS: «-ER» (der Lehrer), «-IN» (die Lehrerin). PASSO 4: DIMINUTIVOS: «-CHEN» e «-LEIN» (sempre neutros): «das Mädchen», «das Büchlein». PASSO 5: ADJETIVOS: «-LICH» (freundlich), «-IG» (ruhig), «-BAR» (lösbar), «-LOS» (arbeitslos), «-VOLL» (sinnvoll), «-ISCH» (typisch), e o prefixo «UN-» (negação): «unmöglich». PASSO 6: com essas regras, você deduz o gênero e o sentido de palavras novas.', {
        tag: 'Substantivos',
        tabela: [
          { sufixo: '-ung', genero: 'die', exemplo: 'die Wohnung, die Meinung' }, { sufixo: '-heit / -keit', genero: 'die', exemplo: 'die Freiheit, die Möglichkeit' }, { sufixo: '-schaft', genero: 'die', exemplo: 'die Freundschaft' }, { sufixo: '-er / -in', genero: 'der / die', exemplo: 'der Lehrer, die Lehrerin' }, { sufixo: '-chen / -lein', genero: 'das', exemplo: 'das Mädchen, das Büchlein' },
          { sufixo: 'adjetivos: -lich, -ig, -bar, -los, -voll, -isch, un-', genero: '—', exemplo: 'freundlich, ruhig, lösbar, arbeitslos, sinnvoll, typisch, unmöglich' },
        ],
      }),
      dialogo(10, 'Wortbildung im Deutschkurs / Formação de palavras no curso', 'Uma professora e dois alunos brincam com palavras.', [
        ['Lehrerin', 'Heute sprechen wir über Wortbildung. Wer kennt ein langes Wort?', 'Hoje falamos de formação de palavras. Quem conhece uma palavra longa?'], ['Tom', 'Das Wort „Haustürschlüssel" ist ziemlich lang.', 'A palavra «Haustürschlüssel» é bem longa.'], ['Lehrerin', 'Richtig. Was bedeutet es?', 'Correto. O que significa?'],
        ['Tom', 'Der Schlüssel, der zur Haustür gehört.', 'A chave que pertence à porta de casa.'], ['Lehrerin', 'Und welchen Artikel hat das Wort?', 'E que artigo tem a palavra?'], ['Anna', 'Den Artikel vom letzten Wort: „der Schlüssel", also „der Haustürschlüssel".', 'O artigo da última palavra: «der Schlüssel», portanto «der Haustürschlüssel».'],
        ['Lehrerin', 'Sehr gut! Und das Substantiv zu „möglich"?', 'Muito bem! E o substantivo de «möglich»?'], ['Anna', '„Die Möglichkeit". Man bildet es mit „-keit".', '«Die Möglichkeit». Forma-se com «-keit».'],
      ]),
      producao(5, 'Forme 6 palavras novas com sufixos e diga o artigo de cada: «die Freundschaft, die Möglichkeit, die Wohnung …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 10 palavras de formação diferente (composto, prefixo, sufixo) e explique cada uma.'),
      exercicios(20, [
        mc('O gênero de um composto vem:', ['da última palavra', 'da primeira palavra', 'sempre «der»'], 'da última palavra', 'die Haustür.'), mc('«Handtuch» é:', ['das Handtuch', 'die Handtuch', 'der Handtuch'], 'das Handtuch', '«das Tuch» é a última.'), mc('Os compostos escrevem-se:', ['juntos', 'separados', 'com hífen sempre'], 'juntos', 'Haustür.'),
        mc('Prefixo inseparável: Partizip II de «verkaufen»:', ['verkauft', 'geverkauft', 'verkaufen'], 'verkauft', 'Sem ge-.'), mc('Prefixo separável: Partizip II de «einkaufen»:', ['eingekauft', 'geeinkauft', 'einkauft'], 'eingekauft', 'ge- no meio.'), mc('«-ung» forma substantivos:', ['femininos', 'masculinos', 'neutros'], 'femininos', 'die Wohnung.'),
        mc('«-chen» forma substantivos:', ['neutros', 'femininos', 'masculinos'], 'neutros', 'das Mädchen.'), mc('«-los» significa:', ['sem', 'com', 'muito'], 'sem', 'arbeitslos = sem trabalho.'), mc('«un-» antes de um adjetivo expressa:', ['negação', 'intensidade', 'passado'], 'negação', 'unmöglich.'),
        lacuna('Der Schlüssel zur Haustür: der ___.', ['Haustürschlüssel', 'Schlüsselhaustür', 'Haus Türschlüssel'], 'Haustürschlüssel', 'Determinante antes da base.'), lacuna('Der Wohnungsschlüssel leva o «-s» de ligação depois de «-___».', ['ung', 'er', 'chen'], 'ung', 'Wohnung + s.'), lacuna('freund + lich = ___', ['freundlich', 'freundlig', 'freundbar'], 'freundlich', '-lich.'),
        ordem('Ordene: «a possibilidade»', ['die', 'Möglichkeit'], 'die Möglichkeit', '-keit = feminino.'), ouvir('Der Haustürschlüssel ist lang', ['Der Haustürschlüssel ist lang', 'Die Haustürschlüssel ist lang', 'Das Haustürschlüssel ist lang'], 'Der Haustürschlüssel ist lang', 'Gênero da última palavra.'), ditado('Die Möglichkeit ist klein', '-keit.'),
        livre('Escreva 5 frases com palavras de formação diferente: um composto, um verbo com prefixo, um substantivo em -ung, um em -keit e um adjetivo em -lich ou -los.', 'Der Haustürschlüssel liegt auf dem Tisch. Ich verkaufe mein Auto. Die Wohnung ist schön. Die Möglichkeit ist klein. Er ist arbeitslos.'),
      ]),
      producao(5, 'Grave-se explicando como se formam 6 palavras alemãs que você acabou de aprender.'),
    ]),
  ],
});
