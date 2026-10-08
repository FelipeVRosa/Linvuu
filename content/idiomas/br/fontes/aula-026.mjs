import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 26, titulo: 'Comparatives and superlatives', nivel: 'a2',
  objetivo: "Compare people, places, prices and options («mais barato do que», «tão rápido quanto», «melhor», «pior») and say which one is the best or the cheapest («o mais barato da cidade», «baratíssimo»).",
  nota: "You can compare two things with «mais», «menos», «tão… quanto» and the irregular forms «melhor», «pior», «maior», «menor», and you can name the best or the most with «o mais… de». Next lesson: the future, with «ir» + infinitive and the simple future.",
  sessoes: [
    sessao('S1', 'More, less, as: mais, menos, tão', [
      revisao(5, "Say aloud, using the pronouns from the last lessons: «Ele me ligou ontem.» «Vou te mandar o endereço.» «Me dá um minuto.» Then say two things that you want to do tomorrow."),
      palavras(8, [
        ['rápido', 'HAH-pee-doo', 'fast, quick', ''], ['lento', 'LEH~-too', 'slow', ''], ['alto', 'AH-oo-too', 'tall; high; loud', ''], ['baixo', 'BAI-shoo', 'short; low; quiet', ''],
        ['fácil', 'FAH-see-oo', 'easy', ''], ['difícil', 'djee-FEE-see-oo', 'difficult, hard', ''], ['tranquilo', 'trah~-KWEE-loo', 'calm, quiet', ''], ['barulhento', 'bah-roo-LYEH~-too', 'noisy', ''], ['cheio', 'SHAY-oo', 'full, crowded', ''],
      ]),
      gramatica(12, "Comparing two things: mais… (do) que, menos… (do) que, tão… quanto", "STEP 1: to say that something has more of a quality, put «mais» before the adjective and «que» or «do que» before the second thing: «O trem é mais rápido do que o ônibus.» To say less, use «menos»: «O ônibus é menos caro do que o táxi.» STEP 2: «que» and «do que» both mean «than». «Do que» is a bit more careful and is required when a verb or a whole clause follows, or with a number: «Ele fala mais do que pensa», «Isso custa mais do que cem reais». Before a simple noun or pronoun both are fine: «Ela é mais alta que eu.» STEP 3: the second term is a subject pronoun: «mais alto que eu», «mais rápida do que ele», not «que mim». STEP 4: to say that two things are equal use «tão + adjective + quanto» or «tão + adjective + como»: «Meu irmão é tão alto quanto eu.» In speech «igual» is also used: «Ela é alta igual ao pai.» STEP 5: the adjective agrees with the first noun in gender and number, not with the second: «As ruas são mais tranquilas do que a avenida.» STEP 6: do not use «mais» with the adjectives «bom», «ruim», «grande», «pequeno». They have their own forms (next session).", {
        tag: 'Comparison',
        comparacao: "English changes short adjectives («taller», «faster») and uses «more» for long ones («more expensive»). Portuguese always uses «mais» or «menos» before the adjective: «mais alto», «mais caro», «mais interessante». There is no ending to learn. «Than» is «que» or «do que», and «as… as» is «tão… quanto».",
        tabela: [
          { structure: 'mais + adjective + que / do que', pattern: 'more … than', example: 'O metrô é mais rápido do que o ônibus.' },
          { structure: 'menos + adjective + que / do que', pattern: 'less … than', example: 'A rua é menos barulhenta que a avenida.' },
          { structure: 'tão + adjective + quanto / como', pattern: 'as … as', example: 'O bairro é tão tranquilo quanto a praça.' },
          { structure: 'não é tão + adjective + quanto', pattern: 'not as … as', example: 'O ônibus não é tão rápido quanto o trem.' },
          { structure: 'mais + noun / verb + do que', pattern: 'more … than (quantity)', example: 'Ele trabalha mais do que eu.' },
        ],
        exemplos: [
          ['O avião é mais rápido do que o ônibus.', 'The plane is faster than the bus.'], ['A prova de hoje foi menos difícil do que a de ontem.', "Today's test was less difficult than yesterday's."], ['Meu irmão é tão alto quanto o meu pai.', 'My brother is as tall as my father.'], ['Esta rua é mais barulhenta do que aquela.', 'This street is noisier than that one.'],
        ],
        erros: [["Ele é mais alto do que mim.", "Ele é mais alto do que eu.", "After «que» and «do que» use the subject pronoun, not «mim»."], ["Ela é tão alta que eu.", "Ela é tão alta quanto eu.", "«Tão… que» means «so… that»; use «quanto» or «como» for «as… as»."], ["Ela é mais alta como eu.", "Ela é mais alta do que eu. / Ela é tão alta quanto eu.", "«Mais» goes with «que» or «do que»; «como» and «quanto» go with «tão»."], ["As casas são mais caro do que o apartamento.", "As casas são mais caras do que o apartamento.", "The adjective agrees with the first noun, «casas»."]],
      }),
      producao(5, "Compare out loud your city with another city, or two kinds of transport, in five sentences, using «mais… do que», «menos… do que» and «tão… quanto»."),
    ]),
    sessao('S2', 'Irregular forms: melhor, pior, maior, menor', [
      revisao(4, "Say five comparisons with «mais» and «menos»: «O metrô é mais rápido do que o ônibus.» Then say one with «tão… quanto» and one with a negative."),
      palavras(6, [
        ['melhor', 'meh-LYOR', 'better; best', ''], ['pior', 'PYOR', 'worse; worst', ''], ['maior', 'mah-YOR', 'bigger; biggest', ''], ['menor', 'meh-NOR', 'smaller; smallest', ''], ['igual', 'ee-GWAH-oo', 'equal, the same', ''], ['diferente', 'djee-feh-REH~-tchee', 'different', ''],
      ]),
      gramatica(12, "Irregular comparatives and «tanto… quanto»", "STEP 1: four adjectives have their own comparative and you do not use «mais» with them: «bom → melhor», «ruim (or mau) → pior», «grande → maior», «pequeno → menor». «Este café é melhor do que aquele», not «mais bom». STEP 2: the same words work as adverbs for «bem → melhor» and «mal → pior»: «Ela fala português melhor do que eu», «Hoje eu me sinto pior». For quantity: «muito → mais» and «pouco → menos»: «Eu durmo menos do que ela.» STEP 3: for age we usually say «mais velho» and «mais novo»: «Meu irmão é mais novo do que eu.» «Maior» and «menor» refer to size or amount, but in family talk you also hear «meu irmão mais velho». STEP 4: «tanto… quanto» compares quantity. Before a noun, «tanto» agrees with it: «tanto dinheiro quanto», «tanta água quanto», «tantos amigos quanto», «tantas casas quanto». After a verb it does not change: «Eu como tanto quanto você.» STEP 5: «cada vez mais / menos / melhor / pior» means «more and more…»: «A cidade está cada vez mais cheia.» STEP 6: «mais de» and «menos de» are used with numbers: «mais de dez reais», «menos de uma hora».", {
        tag: 'Comparison',
        comparacao: "English also has irregular pairs: «good → better», «bad → worse». Portuguese has the same idea, and the forms «melhor» and «pior» are used for both adjectives and adverbs («melhor» also means «better» after «bem»). The English rule «the same as» becomes «igual a» or «o mesmo que» («é igual ao meu»).",
        tabela: [
          { positive: 'bom (good)', comparative: 'melhor', example: 'Este restaurante é melhor do que o outro.' },
          { positive: 'ruim, mau (bad)', comparative: 'pior', example: 'O trânsito hoje está pior do que ontem.' },
          { positive: 'grande (big)', comparative: 'maior', example: 'São Paulo é maior do que muitas cidades do mundo.' },
          { positive: 'pequeno (small)', comparative: 'menor', example: 'Meu quarto é menor do que o seu.' },
          { positive: 'bem (well)', comparative: 'melhor', example: 'Ele cozinha melhor do que eu.' },
          { positive: 'mal (badly)', comparative: 'pior', example: 'Eu canto pior do que ela.' },
          { positive: 'muito (much)', comparative: 'mais', example: 'Ela trabalha mais do que eu.' },
          { positive: 'pouco (little)', comparative: 'menos', example: 'Eu como menos do que ele.' },
        ],
        exemplos: [
          ['Esta pizza é melhor do que aquela.', 'This pizza is better than that one.'], ['Eu tenho tantos amigos quanto você.', 'I have as many friends as you.'], ['A cidade está cada vez mais cheia.', 'The city is getting more and more crowded.'], ['Isso custa mais de cinquenta reais.', 'This costs more than fifty reais.'],
        ],
        erros: [["Este café é mais bom do que aquele.", "Este café é melhor do que aquele.", "«Bom» has the irregular comparative «melhor»."], ["A casa é mais grande do que o apartamento.", "A casa é maior do que o apartamento.", "«Grande» becomes «maior»."], ["Ela fala mais bem português.", "Ela fala português melhor.", "The comparative of «bem» is «melhor»."], ["Eu tenho tanto amigas quanto você.", "Eu tenho tantas amigas quanto você.", "«Tanto» agrees in gender and number with the noun: tanta, tantos, tantas."]],
      }),
      producao(8, "Compare two restaurants, two hotels or two apps you know. Say seven sentences with «melhor», «pior», «maior», «menor», «tanto… quanto» and «cada vez mais»."),
    ]),
    sessao('S3', 'The best and the cheapest: superlatives', [
      revisao(4, "Say: «O ônibus é mais barato do que o táxi, mas é mais lento.» «Meu quarto é menor do que o seu.» «Este café é melhor do que aquele.»"),
      palavras(5, [
        ['aeroporto', 'ah-eh-roh-POR-too', 'airport', ''], ['metrô', 'meh-TROH', 'subway, metro', ''], ['bairro', 'BAI-hoo', 'neighborhood', ''], ['turma', 'TOOR-mah', 'class (group of students)', ''], ['ótimo', 'OH-tchee-moo', 'great, excellent', ''], ['péssimo', 'PEH-see-moo', 'terrible, very bad', ''],
      ]),
      gramatica(8, "The superlative: o mais… de, and -íssimo", "STEP 1: to say «the most» or «the -est» among a group, put the article before «mais» or «menos»: «Ela é a mais alta da turma», «Este é o restaurante mais barato do bairro», «Estes são os melhores filmes do ano». With a noun, the article is repeated: «o restaurante mais barato», not «restaurante o mais barato». STEP 2: «of» or «in» the group is «de»: «da turma», «do bairro», «do mundo», «de todos». STEP 3: with «melhor», «pior», «maior» and «menor» the pattern is the same: «o melhor café da cidade», «o maior problema». STEP 4: «um dos mais… » plus a plural noun means «one of the most…»: «É um dos bairros mais tranquilos da cidade.» STEP 5: the absolute superlative says «very, extremely» without a comparison. You can use «muito + adjective» («muito caro»), or add «-íssimo»: drop the last vowel and add «-íssimo/-íssima»: «caro → caríssimo», «barato → baratíssimo», «lindo → lindíssimo». It agrees: «lindíssima», «caríssimos». Two irregular absolute forms are very frequent: «ótimo» (very good) and «péssimo» (very bad). STEP 6: in spoken Portuguese «bem» and «super» are also common intensifiers: «bem caro», «super legal».", {
        tag: 'Comparison',
        comparacao: "English uses «the -est» («the tallest») or «the most» («the most expensive»), and the preposition «in» («in the class»). Portuguese uses «o mais + adjective» and the preposition «de» («da turma»), not «em». English has no equivalent of «-íssimo»: you would say «extremely cheap».",
        tabela: [
          { type: 'relative superlative', structure: 'o / a / os / as + mais + adjective + de', example: 'É a rua mais tranquila do bairro.' },
          { type: 'relative superlative (less)', structure: 'o / a + menos + adjective + de', example: 'É o hotel menos caro da cidade.' },
          { type: 'irregular', structure: 'o melhor / o pior / o maior / o menor', example: 'É o melhor café do Brasil, dizem.' },
          { type: 'one of the', structure: 'um dos + mais + plural', example: 'É um dos lugares mais bonitos do estado.' },
          { type: 'absolute', structure: 'muito + adjective / adjective + -íssimo', example: 'O quarto é caríssimo. / A vista é lindíssima.' },
          { type: 'irregular absolute', structure: 'ótimo, péssimo', example: 'O serviço foi ótimo. / O trânsito está péssimo.' },
        ],
        erros: [["Ela é a mais alta na turma.", "Ela é a mais alta da turma.", "After a superlative the group is introduced by «de», not «em»."], ["Este é o restaurante o mais barato.", "Este é o restaurante mais barato.", "Do not repeat the article after the noun."], ["O hotel é muito baratíssimo.", "O hotel é baratíssimo. / O hotel é muito barato.", "«-íssimo» already means «very». Do not add «muito»."], ["É o mais melhor café do bairro.", "É o melhor café do bairro.", "«Melhor» is already a comparative form; do not add «mais»."]],
      }),
      dialogo(8, 'How do we get to the airport?', "Patrícia and Diego travel tomorrow. They compare ways to get to the airport.", [
        ['Patrícia', 'Como a gente vai pro aeroporto amanhã? De táxi ou de ônibus?', 'How are we getting to the airport tomorrow? By taxi or by bus?'],
        ['Diego', 'O táxi é mais rápido, mas é muito mais caro do que o ônibus.', 'The taxi is faster, but it is much more expensive than the bus.'],
        ['Patrícia', 'E o metrô?', 'And the subway?'],
        ['Diego', 'O metrô é tão rápido quanto o táxi, e é baratíssimo.', 'The subway is as fast as the taxi, and it is very cheap.'],
        ['Patrícia', 'Então é a melhor opção. Mas o metrô fica mais cheio de manhã do que de tarde.', 'Then it is the best option. But the subway is more crowded in the morning than in the afternoon.'],
        ['Diego', 'Verdade. Nosso voo é às dez, então a gente vai sair às sete. Aí o metrô vai estar menos cheio.', 'True. Our flight is at ten, so we will leave at seven. Then the subway will be less crowded.'],
        ['Patrícia', 'Perfeito. É a opção mais tranquila de todas.', 'Perfect. It is the calmest option of all.'],
        ['Diego', 'Vou ver o horário do primeiro metrô agora.', 'I will check the time of the first subway now.'],
      ]),
      producao(5, "Name, aloud, the best, the cheapest and the most crowded place in your neighborhood or city: «O melhor café do meu bairro é…», «O supermercado mais barato é…»."),
    ]),
    sessao('S4', 'Review and practice of lesson 26', [
      revisao(5, "Compare three things with each of these: «mais… do que», «menos… do que», «tão… quanto», «melhor», «pior». Then say what is the best and the worst thing about your day."),
      exercicios(20, [
        ouvir('O trem é mais rápido do que o ônibus.', ['O trem é mais rápido do que o ônibus.', 'O trem é menos rápido do que o ônibus.', 'O trem é tão rápido quanto o ônibus.'], 'O trem é mais rápido do que o ônibus.', 'Listen for «mais… do que».'),
        ouvir('Ela é a mais alta da turma.', ['Ela é a mais alta da turma.', 'Ela é mais alta que a turma.', 'Ela é tão alta quanto a turma.'], 'Ela é a mais alta da turma.', '«A mais alta da turma» is a superlative.'),
        ouvir('Este café é melhor do que aquele.', ['Este café é melhor do que aquele.', 'Este café é pior do que aquele.', 'Este café é maior do que aquele.'], 'Este café é melhor do que aquele.', '«Melhor» is the comparative of «bom».'),
        ouvir('O hotel é baratíssimo.', ['O hotel é baratíssimo.', 'O hotel é caríssimo.', 'O hotel é barato.'], 'O hotel é baratíssimo.', 'The ending «-íssimo» means very.'),
        ouvir('Eu tenho tantos amigos quanto você.', ['Eu tenho tantos amigos quanto você.', 'Eu tenho tantas amigas quanto você.', 'Eu tenho mais amigos do que você.'], 'Eu tenho tantos amigos quanto você.', '«Tantos» agrees with «amigos».'),
        ouvir('A cidade está cada vez mais cheia.', ['A cidade está cada vez mais cheia.', 'A cidade está cada vez menos cheia.', 'A cidade está tão cheia quanto ontem.'], 'A cidade está cada vez mais cheia.', '«Cada vez mais» = more and more.'),
        ditado('O ônibus é mais lento do que o trem.', 'Write: O ônibus é mais lento do que o trem.'),
        ditado('Meu irmão é tão alto quanto eu.', 'Write: Meu irmão é tão alto quanto eu.'),
        ditado('É o melhor restaurante do bairro.', 'Write: É o melhor restaurante do bairro.'),
        mc('Choose the correct sentence.', ['Este filme é melhor do que aquele.', 'Este filme é mais bom do que aquele.', 'Este filme é mais melhor do que aquele.'], 'Este filme é melhor do que aquele.', '«Melhor» is the comparative of «bom».'),
        mc('Which means «as tall as me»?', ['tão alto quanto eu', 'mais alto do que eu', 'tão alto que eu'], 'tão alto quanto eu', '«Tão… quanto» is the equal comparison.'),
        mc('How do you say «the biggest city in Brazil»?', ['a maior cidade do Brasil', 'a mais grande cidade no Brasil', 'a cidade maior no Brasil'], 'a maior cidade do Brasil', 'Use «maior» and «de» (do = de + o).'),
        mc('What does «péssimo» mean?', ['terrible', 'excellent', 'average'], 'terrible', '«Péssimo» is the absolute form of «mau»; the opposite is «ótimo».'),
        mc('Which sentence means «He works more than I do»?', ['Ele trabalha mais do que eu.', 'Ele trabalha tão quanto eu.', 'Ele trabalha menos do que eu.'], 'Ele trabalha mais do que eu.', '«Mais do que» + subject pronoun.'),
        lacuna('O metrô é ___ barato do que o táxi. (less)', ['menos', 'mais', 'tão'], 'menos', '«Menos» expresses less.'),
        lacuna('Ela é a ___ simpática da turma. (the most)', ['mais', 'maior', 'muito'], 'mais', 'Superlative: a mais + adjective.'),
        lacuna('O serviço foi ___ . (excellent)', ['ótimo', 'melhor', 'bom ótimo'], 'ótimo', '«Ótimo» is the absolute form of «bom».'),
        lacuna('Este quarto é ___ do que o outro. (smaller)', ['menor', 'mais pequeno', 'pior'], 'menor', '«Menor» is the comparative of «pequeno».'),
        ordem('Put in order: «O avião é mais rápido do que o trem.»', ['O', 'avião', 'é', 'mais', 'rápido', 'do', 'que', 'o', 'trem.'], 'O avião é mais rápido do que o trem.', 'Subject, verb, comparative, second term.'),
        livre('Write in Portuguese: This restaurant is cheaper than that one, but it is not as good.', 'Este restaurante é mais barato do que aquele, mas não é tão bom.'),
        livre('Write in Portuguese: She is the tallest student in the class.', 'Ela é a aluna mais alta da turma.'),
      ]),
      producao(5, "Describe your favorite place in your city: say why it is better, bigger or calmer than the others. Use at least one superlative and one «-íssimo» word."),
    ]),
  ],
});
