import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 5, titulo: 'Articles, gender, plural and «tem»', nivel: 'a1',
  objetivo: 'Use the articles «o, a, os, as, um, uma, uns, umas», guess and learn the gender of nouns, form the plural of nouns and adjectives, and say that something exists or that you have it with «tem».',
  nota: 'You can name things with the right article, make them plural, describe them with agreeing adjectives and ask whether a place or an object exists with «tem». Next lesson: the present tense of the regular «-er» and «-ir» verbs.',
  sessoes: [
    sessao('S1', 'Articles and gender', [
      revisao(5, 'Conjugate «falar», «morar» and «estudar» aloud. Then say what you do every day with «sempre», «nunca» and «todo dia», and ask a friend two questions with «onde» and «o que».'),
      palavras(8, [
        ['o livro', 'oo LEE-vroo', 'the book', ''], ['a casa', 'ah KAH-zah', 'the house, the home', ''], ['o celular', 'oo seh-loo-LAR', 'the cell phone (Portugal: o telemóvel)', ''], ['a mesa', 'ah MEH-zah', 'the table', ''],
        ['a cadeira', 'ah kah-DAY-rah', 'the chair', ''], ['o caderno', 'oo kah-DEHR-noo', 'the notebook', ''], ['a caneta', 'ah kah-NEH-tah', 'the pen', ''], ['a chave', 'ah SHAH-vee', 'the key', ''],
        ['a mala', 'ah MAH-lah', 'the suitcase', ''], ['a bolsa', 'ah BOH-oo-sah', 'the bag, the purse', ''],
      ]),
      gramatica(12, 'Gender and the four articles', "STEP 1: in Portuguese every noun is masculine or feminine, even objects. The article tells you which: «o livro» (masculine), «a casa» (feminine). The gender has nothing to do with the meaning: «a mesa» (table) is feminine, «o sol» (sun) is masculine. Always learn a new noun together with its article. STEP 2: the definite article («the») has four forms: «o» (masculine singular), «a» (feminine singular), «os» (masculine plural), «as» (feminine plural). The indefinite article («a, an, some») also has four forms: «um, uma, uns, umas». «Uns» and «umas» mean «some», «a few». STEP 3: a simple rule for gender: nouns in «-o» are usually masculine («o livro, o carro») and nouns in «-a» are usually feminine («a casa, a mesa»). Nouns in «-ção», «-são», «-dade» and «-gem» are feminine («a lição, a cidade, a viagem»). Nouns in «-or» are usually masculine («o amor, o professor», but «a flor»). STEP 4: the exceptions you must memorize: «o dia, o mapa, o problema, o sistema, o programa, o tema, o planeta, o idioma» are masculine even though they end in «-a», and «a mão» (hand) is feminine even though it ends in «-o». STEP 5: Portuguese uses «the» more than English. You use it with names of countries («o Brasil, a Alemanha»), with a general subject («O café é bom» = coffee is good) and, in speech, often with first names («a Ana, o Pedro»). It is not wrong to say just «Ana». You still do not use «um/uma» before a bare profession («Sou professor»). STEP 6: adjectives agree with the noun: «um livro novo», «uma casa nova», «o carro caro», «a mala cara». The adjective usually comes after the noun.", {
        tag: 'Articles',
        comparacao: "English has one «the» and no gender, and «a/an» is only a matter of sound. In Portuguese the article is the key to the gender of the noun and it changes with the number. Tip: when you learn «mesa», learn «a mesa». There is no way to guess every gender, but the endings above work most of the time.",
        tabela: [
          { gender_and_number: 'masculine singular', the: 'o', a_some: 'um', example: 'o livro, um livro' },
          { gender_and_number: 'feminine singular', the: 'a', a_some: 'uma', example: 'a casa, uma casa' },
          { gender_and_number: 'masculine plural', the: 'os', a_some: 'uns', example: 'os livros, uns livros' },
          { gender_and_number: 'feminine plural', the: 'as', a_some: 'umas', example: 'as casas, umas casas' },
        ],
        exemplos: [
          ['O livro é novo.', 'The book is new.'], ['A casa é grande.', 'The house is big.'], ['Eu tenho um celular novo.', 'I have a new cell phone.'], ['Ela tem uma mala grande.', 'She has a big suitcase.'], ['O Brasil é grande.', 'Brazil is big.'],
        ],
        erros: [['o casa', 'a casa', '«Casa» is feminine, so the article is «a».'], ['a problema', 'o problema', '«Problema» ends in «-a», but it is masculine: «o problema».'], ['um viagem', 'uma viagem', 'Nouns in «-gem» are feminine: «uma viagem».'], ['um mão', 'uma mão', '«Mão» ends in «-o» but is feminine: «a mão, uma mão».']],
      }),
      producao(5, 'Look around you and name ten things with the article: «o…, a…». Then say a sentence with each one: «O livro é novo», «A mala é grande».'),
    ]),
    sessao('S2', 'The plural', [
      revisao(4, 'Say the four forms of «the» and the four forms of «a, some». Name five masculine and five feminine nouns with their articles.'),
      palavras(6, [
        ['o homem', 'oo OH~-meh~ee', 'the man (plural: os homens)', ''], ['a mulher', 'ah moo-LYEHR', 'the woman (plural: as mulheres)', ''], ['o hotel', 'oo oh-TEH-oo', 'the hotel (plural: os hotéis)', ''], ['a mão', 'ah MOW~', 'the hand (plural: as mãos)', ''],
        ['o jornal', 'oo zhor-NAH-oo', 'the newspaper (plural: os jornais)', ''], ['o país', 'oo pah-EES', 'the country (plural: os países)', ''], ['o lápis', 'oo LAH-pees', 'the pencil (plural: os lápis)', ''], ['a cidade', 'ah see-DAH-djee', 'the city (plural: as cidades)', ''],
        ['o animal', 'oo ah-nee-MAH-oo', 'the animal (plural: os animais)', ''], ['a lição', 'ah lee-SOW~', 'the lesson (plural: as lições)', ''],
      ]),
      gramatica(12, 'How to make the plural', "STEP 1: the basic rule is to add «-s» to nouns that end in a vowel: «casa → casas», «livro → livros», «cidade → cidades». STEP 2: nouns ending in «-m» change it to «-ns»: «homem → homens». STEP 3: nouns ending in «-r» or «-z» add «-es»: «mulher → mulheres», «lugar → lugares», «luz → luzes». STEP 4: nouns ending in «-al, -el, -ol, -ul» lose the «l» and add «-is» (with an accent in «-el»): «jornal → jornais», «hotel → hotéis», «animal → animais». STEP 5: nouns ending in an unstressed «-s» do not change: «o lápis → os lápis», «o ônibus → os ônibus». If the stress is on the last syllable, add «-es» and drop the written accent: «país → países», «mês → meses». STEP 6: nouns ending in «-ão» have three possible plurals; learn them one by one. Most take «-ões» («lição → lições», «coração → corações», «limão → limões»). A few take «-ães» («pão → pães», «cão → cães») and a few «-ãos» («mão → mãos», «irmão → irmãos»). STEP 7: in a noun phrase everything agrees: the article, the noun and the adjective all take the plural: «os livros novos», «as casas grandes», «uns hotéis caros». The verb also agrees: «Os livros são novos». STEP 8: in very informal speech you may hear the plural marked only once («os livro», «as casa»). This is not standard, so in writing and in class mark the plural on every word.", {
        tag: 'Plural',
        comparacao: "English makes most plurals with «-s», like Portuguese, with some irregular ones («man, men»). In Portuguese the rules are more regular but depend on the last letter. The big difference is agreement: in English only the noun is plural («the new books»), while in Portuguese the article and the adjective also take the plural: «os livros novos».",
        tabela: [
          { ending: 'vowel', rule: 'add -s', singular: 'casa, livro', plural: 'casas, livros' },
          { ending: '-m', rule: '-m becomes -ns', singular: 'homem', plural: 'homens' },
          { ending: '-r, -z', rule: 'add -es', singular: 'mulher, luz', plural: 'mulheres, luzes' },
          { ending: '-al, -el, -ol, -ul', rule: 'drop -l, add -is', singular: 'jornal, hotel', plural: 'jornais, hotéis' },
          { ending: 'unstressed -s', rule: 'no change', singular: 'lápis, ônibus', plural: 'lápis, ônibus' },
          { ending: 'stressed -s', rule: 'add -es, no accent', singular: 'país, mês', plural: 'países, meses' },
          { ending: '-ão', rule: '-ões, -ães or -ãos', singular: 'lição, pão, mão', plural: 'lições, pães, mãos' },
        ],
        erros: [['os homems', 'os homens', 'The ending «-m» changes to «-ns».'], ['os jornals', 'os jornais', 'The ending «-al» changes to «-ais».'], ['os pãos', 'os pães', 'The plural of «pão» is «pães». For each «-ão» noun, learn the plural.'], ['os lápises', 'os lápis', 'An unstressed «-s» does not change.']],
      }),
      dialogo(4, 'At the stationery shop', 'Mariana and Rodrigo talk about the school supplies they want.', [
        ['Rodrigo', 'Oi, Mariana! Os livros novos são caros?', 'Hi, Mariana! Are the new books expensive?'], ['Mariana', 'São, sim. Os livros e os cadernos são caros.', 'Yes, they are. The books and the notebooks are expensive.'], ['Rodrigo', 'E as canetas?', 'And the pens?'],
        ['Mariana', 'As canetas não são caras.', 'The pens are not expensive.'], ['Rodrigo', 'Legal! Eu compro duas canetas e um caderno.', 'Cool! I buy two pens and a notebook.'], ['Mariana', 'E o livro?', 'And the book?'], ['Rodrigo', 'Não, os livros são muito caros!', 'No, the books are very expensive!'],
      ]),
      producao(4, 'Take the objects of session 1 and say them in the plural with the article: «os livros, as casas…». Then say three sentences with adjectives: «As cadeiras são novas», «Os hotéis são caros».'),
    ]),
    sessao('S3', 'Saying what exists: «tem»', [
      revisao(4, 'Say the plural of: livro, mulher, hotel, país, lápis, lição, mão, homem. Then add an adjective to three of them.'),
      palavras(5, [
        ['tem', 'TEH~ee', 'there is, there are (also: has)', ''], ['não tem', 'NOW~ TEH~ee', 'there is no, there are no', ''], ['o banheiro', 'oo bah-NYAY-roo', 'the bathroom, the restroom', ''], ['o banco', 'oo BAH~-koo', 'the bank', ''],
        ['o mercado', 'oo mehr-KAH-doo', 'the market, the grocery store', ''], ['a farmácia', 'ah far-MAH-see-ah', 'the pharmacy', ''], ['o ônibus', 'oo OH~-nee-boos', 'the bus', ''], ['a escola', 'ah ees-KOH-lah', 'the school', ''],
      ]),
      gramatica(8, '«Tem»: there is, there are, he has', "STEP 1: the verb «ter» means «to have»: «Eu tenho um celular», «Ela tem duas amigas». Remember from lesson 3 that you use «tenho» for «eu» and «tem» for «você, ele, ela, a gente». For «eles» and «vocês» the form is «têm», with a circumflex accent: «Eles têm dois carros». The accent only changes the spelling. STEP 2: in everyday Brazilian Portuguese, the third person «tem» is also the normal way to say «there is» and «there are»: «Tem um banco aqui», «Tem dois bancos aqui». In this meaning it never changes: it does not become «têm» even when the thing is plural. STEP 3: to ask if something exists, say «Tem…?»: «Tem banheiro aqui?», «Tem uma farmácia?». The answer is the verb alone: «Tem, sim.» or «Não tem.». STEP 4: the formal or written version is «há» («Há um banco aqui»). You will read it in signs and news, but in conversation Brazilians say «tem». STEP 5: after «tem» you can use «um/uma» or no article. Use no article for things in general: «Tem café?» (is there any coffee?), «Tem ônibus?». Do not use «o» or «a» after «tem», because they would mean you already know which one. STEP 6: a very useful phrase: «Não tem problema.» It means «no problem» or «it's fine», and you will hear it all the time. Note the regional words: in Brazil it is «o banheiro», «o ônibus» and «o celular»; in Portugal «a casa de banho», «o autocarro» and «o telemóvel».", {
        tag: 'Verbs',
        comparacao: "English uses two different verbs: «to have» (I have a phone) and «there is/are» (there is a bank). Portuguese uses the same verb «ter» for both in speech: «Eu tenho um celular», «Tem um banco aqui». English changes «there is/there are» for the number; the Portuguese «tem» does not change.",
        tabela: [
          { use: 'to have', example: 'Eu tenho um celular.', meaning: 'I have a cell phone.' },
          { use: 'to have (they)', example: 'Eles têm dois carros.', meaning: 'They have two cars.' },
          { use: 'there is', example: 'Tem um banco aqui.', meaning: 'There is a bank here.' },
          { use: 'there are', example: 'Tem dois bancos aqui.', meaning: 'There are two banks here.' },
          { use: 'question', example: 'Tem banheiro?', meaning: 'Is there a bathroom?' },
          { use: 'no', example: 'Não tem.', meaning: 'There is not.' },
        ],
        erros: [['Têm dois bancos aqui.', 'Tem dois bancos aqui.', 'In the sense of «there are», «tem» never takes the plural.'], ['Eles tem dois carros.', 'Eles têm dois carros.', 'With «eles» and «vocês» the verb «ter» takes the circumflex: «têm».'], ['Eu tem um celular.', 'Eu tenho um celular.', 'The form for «eu» is «tenho».'], ['Tem o banco aqui?', 'Tem um banco aqui?', 'After «tem» we use «um/uma» or nothing, not «o/a».']],
      }),
      dialogo(8, 'A new building', 'Mateus has just moved in and asks his neighbor, Dona Marta, what there is nearby.', [
        ['Mateus', 'Boa tarde, Dona Marta! Tudo bem?', 'Good afternoon, Dona Marta! How are you?'], ['Dona Marta', 'Tudo bem, Mateus. E você?', 'Fine, Mateus. And you?'], ['Mateus', 'Tudo bem. Tem um mercado aqui?', 'Fine. Is there a market here?'],
        ['Dona Marta', 'Tem, sim. Tem um mercado e uma farmácia.', 'Yes, there is. There is a market and a pharmacy.'], ['Mateus', 'E tem banco?', 'And is there a bank?'], ['Dona Marta', 'Não tem banco aqui, mas tem dois bancos em Campinas.', 'There is no bank here, but there are two banks in Campinas.'],
        ['Mateus', 'E tem ônibus?', 'And is there a bus?'], ['Dona Marta', 'Tem ônibus todo dia. Não tem problema!', 'There is a bus every day. No problem!'], ['Mateus', 'Obrigado, Dona Marta!', 'Thank you, Dona Marta!'], ['Dona Marta', 'De nada, Mateus!', "You're welcome, Mateus!"],
      ]),
      producao(5, 'Describe your neighborhood or your house with «tem», «não tem» and numbers: «Tem uma escola. Tem dois bancos. Não tem farmácia». Then ask a friend three questions with «Tem…?».'),
    ]),
    sessao('S4', 'Review and practice of lesson 5', [
      revisao(5, 'Say the articles, make five nouns plural and say what exists in your home or neighborhood with «tem». Say one thing that you have and one that you do not have.'),
      exercicios(20, [
        ouvir('o livro novo', ['o livro novo', 'a livro nova', 'os livros novos'], 'o livro novo', '«Livro» is masculine singular.'), ouvir('as casas grandes', ['as casas grandes', 'a casa grande', 'os casos grandes'], 'as casas grandes', 'Feminine plural: «as … -s».'),
        ouvir('Tem um banco aqui?', ['Tem um banco aqui?', 'Tem o banco aqui?', 'Têm dois bancos aqui?'], 'Tem um banco aqui?', '«Tem» + «um».'), ouvir('os hotéis', ['os hotéis', 'os hotel', 'os hotels'], 'os hotéis', 'The plural of «hotel» is «hotéis».'),
        ouvir('as lições', ['as lições', 'as lição', 'os lições'], 'as lições', 'The plural ends in «-ões».'), ouvir('Eles têm dois carros', ['Eles têm dois carros', 'Ele tem dois carros', 'Eles tem um carro'], 'Eles têm dois carros', 'Plural: «têm».'),
        ditado('Tem uma farmácia aqui', 'Write: Tem uma farmácia aqui.'), ditado('Os livros são caros', 'Write: Os livros são caros.'), ditado('Não tem problema', 'Write: Não tem problema.'),
        mc('What is the article of «problema»?', ['o', 'a', 'os'], 'o', '«Problema» ends in «-a», but it is masculine.'), mc('What is the plural of «mulher»?', ['mulheres', 'mulhers', 'mulheris'], 'mulheres', 'Add «-es» after «-r».'),
        mc('What is the plural of «pão»?', ['pães', 'pãos', 'pões'], 'pães', 'Learn each «-ão» plural: pão → pães.'), mc('Which sentence is correct?', ['Tem dois bancos aqui.', 'Têm dois bancos aqui.', 'Há dois bancos aqui, tem.'], 'Tem dois bancos aqui.', 'In the sense of «there are», «tem» does not change.'),
        mc('Which noun is feminine?', ['a cidade', 'o dia', 'o mapa'], 'a cidade', 'Nouns in «-dade» are feminine.'), mc('How do you say «a pen» (feminine)?', ['uma caneta', 'um caneta', 'a caneta'], 'uma caneta', '«Caneta» is feminine.'),
        lacuna('___ casa é grande. (the)', ['A', 'O', 'As'], 'A', '«Casa» is feminine singular.'), lacuna('Os livros são ___ . (new)', ['novos', 'novo', 'nova'], 'novos', 'Masculine plural.'),
        lacuna('Eles ___ dois carros. (ter)', ['têm', 'tem', 'tenho'], 'têm', 'Plural with accent.'), lacuna('___ um mercado aqui?', ['Tem', 'Têm', 'Tenho'], 'Tem', '«Tem» for existence.'),
        ordem('Put in order: «Tem uma farmácia aqui?»', ['Tem', 'uma', 'farmácia', 'aqui?'], 'Tem uma farmácia aqui?', 'Verb first, then the thing.'), ordem('Put in order: «As cadeiras são novas.»', ['As', 'cadeiras', 'são', 'novas.'], 'As cadeiras são novas.', 'Article, noun, verb, adjective, all in the plural.'),
        livre('Write in Portuguese: There is a bank and two pharmacies here. There is no market.', 'Tem um banco e duas farmácias aqui. Não tem mercado.'),
        livre('Write in Portuguese: I have a new cell phone and two notebooks.', 'Eu tenho um celular novo e dois cadernos.'),
      ]),
      producao(5, 'Describe your room or desk to an imaginary friend: what there is, how many, and what they are like. Use «o, a, um, uma, os, as» and at least three plurals with adjectives.'),
    ]),
  ],
});
