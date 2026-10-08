import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 16, titulo: 'Likes and preferences: gostar and preferir', nivel: 'a1',
  objetivo: 'Say what you like, love, dislike and prefer, ask other people about their tastes, and agree or disagree with «eu também» and «eu também não».',
  nota: 'You can now talk about tastes and hobbies and have a short getting-to-know-you conversation. Next lesson: the near future with «ir + infinitive» and the action in progress with «estar + gerund».',
  sessoes: [
    sessao('S1', 'Gostar de: what you like and dislike', [
      revisao(5, 'Say aloud four sentences with the verbs of lesson 13 («quero, posso, preciso, tenho que») and two sentences about your morning with a reflexive verb from lesson 14.'),
      palavras(8, [
        ['gostar de', 'gohs-TAR djee', 'to like', ''], ['adorar', 'ah-doh-RAR', 'to love, to adore', ''], ['detestar', 'deh-tehs-TAR', 'to hate, to dislike strongly', ''], ['muito', 'MWEE~-too', 'very much, a lot', ''],
        ['música', 'MOO-zee-kah', 'music', ''], ['filme', 'FEEL-mee', 'film, movie', ''], ['futebol', 'foo-tchee-BOH-oo', 'football, soccer', ''], ['praia', 'PRY-ah', 'beach', ''],
        ['comida', 'koh-MEE-dah', 'food', ''], ['viagem', 'vee-AH-zheh~ee', 'trip, journey', ''],
      ]),
      gramatica(12, 'Gostar de: likes and dislikes', "STEP 1: «gostar» is a regular -ar verb and the subject is the person who likes: «eu gosto, você gosta, nós gostamos, vocês gostam». STEP 2: «gostar» always needs «de» before what you like: «Gosto de música». English «I like music» has no preposition; Portuguese does. STEP 3: «de» joins the article: de + o = do, de + a = da, de + os = dos, de + as = das. So: «Gosto do café brasileiro», «Gosto da praia», «Gosto dos meus amigos». With a person pronoun: de + ele = dele, de + ela = dela: «Gosto muito dela». STEP 4: there is a scale. «Adorar» (love) and «detestar» (hate) are the strongest and take NO «de»: «Adoro música», «Detesto filmes de terror». Then «gostar muito de», «gostar de», «gostar um pouco de», «não gostar de». Put «muito» straight after the verb: «Gosto muito de futebol». STEP 5: questions and short answers: «Você gosta de futebol?» can be answered «Gosto, sim.» or «Não gosto, não.» (the double «não» is natural in speech) or «Não, não gosto.». To ask what someone likes: «Do que você gosta?». Culture note: many Brazilians follow football, but many do not, so ask «Você gosta de futebol?» instead of assuming.", {
        tag: 'Likes',
        comparacao: "English «I like music» has no preposition; Portuguese says «gosto de música», literally «I like of music». Never drop the «de». Verbs of strong feeling work like English: «adoro música» and «detesto trânsito» have no preposition. And English puts the degree before the noun («I like it a lot»); Portuguese puts «muito» after the verb: «gosto muito».",
        tabelas: [
          { titulo: 'Present of gostar', linhas: [
            { person: 'eu', form: 'gosto', example: 'Eu gosto de música.' },
            { person: 'você, ele, ela, a gente', form: 'gosta', example: 'Ela gosta do café brasileiro.' },
            { person: 'nós', form: 'gostamos', example: 'Nós gostamos da praia.' },
            { person: 'vocês, eles, elas', form: 'gostam', example: 'Eles gostam de viajar.' },
          ] },
          { titulo: 'From love to hate', linhas: [
            { say: 'Eu adoro comida brasileira.', strength: 'love (no «de»)' }, { say: 'Eu gosto muito de filmes.', strength: 'like a lot' }, { say: 'Eu gosto de música.', strength: 'like' }, { say: 'Eu gosto um pouco de futebol.', strength: 'like a little' },
            { say: 'Eu não gosto de praia.', strength: 'do not like' }, { say: 'Eu detesto acordar cedo.', strength: 'hate (no «de»)' },
          ] },
        ],
        exemplos: [['Eu gosto de música.', 'I like music.'], ['Ela gosta muito do café brasileiro.', 'She likes Brazilian coffee a lot.'], ['A gente gosta de praia.', 'We like the beach.'], ['Eles não gostam de futebol.', 'They do not like football.'], ['Eu gosto muito dela.', 'I like her a lot.']],
        erros: [['Eu gosto música.', 'Eu gosto de música.', '«Gostar» always needs «de» before what you like.'], ['Eu adoro de café.', 'Eu adoro café.', '«Adorar» and «detestar» take no preposition.'], ['Gosto de o café.', 'Gosto do café.', 'de + o contracts to «do».'], ['Eu gosto muito ela.', 'Eu gosto muito dela.', 'de + ela = «dela».']],
      }),
      producao(5, 'Say what you like and dislike, using the whole scale: one with «adoro», two with «gosto», one with «não gosto de» and one with «detesto». For example: «Adoro comida brasileira. Gosto de música. Não gosto de praia.»'),
    ]),
    sessao('S2', 'Hobbies: gostar de + infinitive', [
      revisao(4, 'Conjugate «gostar» aloud (gosto, gosta, gostamos, gostam). Then ask a friend four questions with «Você gosta de…?» and answer them with «Gosto, sim» or «Não gosto, não».'),
      palavras(6, [
        ['cozinhar', 'koh-zee-NYAR', 'to cook', ''], ['viajar', 'vee-ah-ZHAR', 'to travel', ''], ['dançar', 'dah~-SAR', 'to dance', ''], ['cantar', 'kah~-TAR', 'to sing', ''],
        ['caminhar', 'kah-mee-NYAR', 'to walk', ''], ['jogar', 'zhoh-GAR', 'to play (a game or sport)', ''], ['assistir a', 'ah-sees-TCHEER ah', 'to watch (film, TV, match)', ''], ['legal', 'leh-GAH-oo', 'cool, nice, great', ''],
        ['chato', 'SHAH-too', 'boring; annoying', ''],
      ]),
      gramatica(12, 'Gostar de + infinitive, and the false friend «assistir»', "STEP 1: to say what activity you like, put the verb in the infinitive after «de»: «Gosto de cozinhar», «Ela gosta de viajar», «Eles gostam de dançar». The verb stays in the infinitive, never in an «-ing» form. STEP 2: «adorar» and «detestar» take the infinitive directly: «Adoro cantar», «Detesto acordar cedo». STEP 3: «assistir» is a false friend. It does not mean «to assist» (that is «ajudar»). In Brazil it means to watch something with a screen or an audience: «assistir a um filme», «assistir ao jogo». In careful writing it takes «a»; in speech people say «assistir um filme» or «ver um filme». STEP 4: «legal» (cool, nice) and «chato» (boring, annoying) are the most common opinion words in Brazilian speech: «O filme é muito legal», «A reunião é chata». «Que legal!» means «How nice!». STEP 5: to ask about hobbies say «O que você gosta de fazer?» (very common) or, in the careful form, «Do que você gosta?». Time words from lesson 14 fit here: «Gosto de caminhar de manhã», «Às vezes gosto de ficar em casa» (ficar = to stay).", {
        tag: 'Likes',
        comparacao: "English uses «-ing» after «like» («I like cooking»); Portuguese uses the infinitive («gosto de cozinhar»). Watch out for «assistir»: English speakers see «assist» and use it for helping people. In Brazil «assistir» is watching, and «ajudar» is helping.",
        tabela: [
          { verb: 'cozinhar', meaning: 'to cook', example: 'Gosto de cozinhar em casa.' },
          { verb: 'viajar', meaning: 'to travel', example: 'Ela adora viajar.' },
          { verb: 'dançar', meaning: 'to dance', example: 'Nós gostamos de dançar.' },
          { verb: 'cantar', meaning: 'to sing', example: 'Ele gosta de cantar.' },
          { verb: 'caminhar', meaning: 'to walk', example: 'Gosto de caminhar de manhã.' },
          { verb: 'jogar futebol', meaning: 'to play football', example: 'Eles jogam futebol aos sábados.' },
          { verb: 'assistir a um filme', meaning: 'to watch a film', example: 'A gente gosta de assistir a filmes.' },
        ],
        erros: [['Gosto cozinhar.', 'Gosto de cozinhar.', '«Gostar» keeps its «de» before an infinitive too.'], ['Gosto de cozinhando.', 'Gosto de cozinhar.', 'After «de» use the infinitive, not a form in «-ando».'], ['Eu assisto minha mãe na cozinha. (to help her)', 'Eu ajudo minha mãe na cozinha.', '«Assistir» means to watch; to help is «ajudar».'], ['Eu gosto de muito viajar.', 'Eu gosto muito de viajar.', '«Muito» comes right after «gosto»: «gosto muito de…».']],
      }),
      dialogo(5, 'Meeting at a party', 'Lucas and Juliana meet at a friend\'s party and talk about what they like.', [
        ['Lucas', 'Oi! Eu sou o Lucas. Qual é o seu nome?', "Hi! I'm Lucas. What's your name?"],
        ['Juliana', 'Oi, Lucas! Eu sou a Juliana.', "Hi, Lucas! I'm Juliana."],
        ['Lucas', 'Prazer! Você gosta de música?', 'Nice to meet you! Do you like music?'],
        ['Juliana', 'Gosto muito! Eu adoro dançar. E você?', 'I like it a lot! I love dancing. And you?'],
        ['Lucas', 'Eu gosto de música, mas não danço. Prefiro cantar.', "I like music, but I don't dance. I prefer singing."],
        ['Juliana', 'Que legal! Você gosta de assistir a filmes?', 'How cool! Do you like watching films?'],
        ['Lucas', 'Gosto, sim. Mas detesto filmes de terror.', 'I do. But I hate horror films.'],
        ['Juliana', 'Eu também! Prefiro comédia.', 'Me too! I prefer comedy.'],
        ['Lucas', 'Então a gente pode ver um filme no sábado?', 'So, can we watch a film on Saturday?'],
        ['Juliana', 'Pode ser!', 'Maybe! / Sounds good!'],
      ]),
      producao(3, 'Ask an imaginary new friend four questions about hobbies with «Você gosta de…?». Answer each one yourself in a full sentence.'),
    ]),
    sessao('S3', 'Preferir, agreeing and disagreeing', [
      revisao(4, 'Say three sentences with «gosto de» + infinitive, and one with «adoro» and one with «detesto». Then say what «assistir» means in Brazil.'),
      palavras(5, [
        ['preferir', 'preh-feh-REER', 'to prefer', ''], ['também', 'tah~-BEH~ee', 'also, too', ''], ['também não', 'tah~-BEH~ee NOW~', 'neither, not either', ''], ['ou', 'OH', 'or', ''],
        ['tanto faz', 'TAH~-too FAHSS', 'I don\'t mind, it makes no difference', ''], ['depende', 'deh-PEH~-djee', 'it depends', ''],
      ]),
      gramatica(8, 'Preferir, «eu também» and «eu também não»', "STEP 1: «preferir» is regular in spelling: «prefiro, prefere, preferimos, preferem». Ask «Você prefere café ou chá?» and answer «Prefiro café.». It takes no preposition before a noun: «Prefiro café», not «prefiro de café». STEP 2: with an infinitive, also no preposition: «Prefiro ficar em casa». To say «prefer X to Y» careful style uses «a»: «Prefiro café a chá». In speech people say «Prefiro café, e não chá». Do not add «mais»: «preferir» already means «like more». STEP 3: when you agree with something positive say «Eu também.» («Gosto de música.» — «Eu também.»). When you agree with something negative say «Eu também não.» («Não gosto de chá.» — «Eu também não.»). STEP 4: to disagree, put the opposite after «eu»: «Eu, não.» (I don't) or «Eu, sim.» (I do): «Gosto de futebol.» — «Eu, não.» STEP 5: when you have no strong preference say «Tanto faz». When the answer is not simple say «Depende».", {
        tag: 'Likes',
        comparacao: "English changes the helper verb in short answers («So do I», «Neither do I»). Portuguese keeps it simple and short: «Eu também» for positive, «Eu também não» for negative. And English «I prefer coffee to tea» uses «to»; the careful Portuguese uses «a»: «prefiro café a chá».",
        tabelas: [
          { titulo: 'Present of preferir', linhas: [
            { person: 'eu', form: 'prefiro' }, { person: 'você, ele, ela, a gente', form: 'prefere' }, { person: 'nós', form: 'preferimos' }, { person: 'vocês, eles, elas', form: 'preferem' },
          ] },
          { titulo: 'Agreeing and disagreeing', linhas: [
            { they_say: 'Gosto de música.', you_agree: 'Eu também.', you_disagree: 'Eu, não.' },
            { they_say: 'Não gosto de chá.', you_agree: 'Eu também não.', you_disagree: 'Eu gosto.' },
            { they_say: 'Prefiro café.', you_agree: 'Eu também.', you_disagree: 'Eu prefiro chá.' },
          ] },
        ],
        erros: [['Eu prefiro de café.', 'Eu prefiro café.', '«Preferir» takes no preposition before a noun.'], ['Eu prefiro mais café.', 'Eu prefiro café.', '«Preferir» already means «to like more».'], ['— Não gosto de chá. — Eu também.', '— Não gosto de chá. — Eu também não.', 'After a negative, agree with «eu também não».'], ['Prefiro café do que chá.', 'Prefiro café a chá.', 'The careful form is «preferir X a Y». «Do que» is heard in speech but avoid it in writing.']],
      }),
      texto(8, 'Two friends, two tastes', 'Rafael e Camila são amigos, mas eles gostam de coisas diferentes. Rafael adora futebol e joga todos os sábados. Ele também gosta de assistir a filmes de ação e de comer pizza. Ele detesta acordar cedo e prefere dormir até tarde. Camila gosta muito de música e de dançar. Ela canta num grupo e caminha no parque de manhã. Ela não gosta de futebol, mas gosta de viajar e de conhecer lugares novos. Ela prefere café a chá. Aos domingos, os dois cozinham em casa. Rafael prefere fazer pizza; Camila prefere fazer pão de queijo.', 'Rafael and Camila are friends, but they like different things. Rafael loves football and plays every Saturday. He also likes watching action films and eating pizza. He hates waking up early and prefers to sleep late. Camila likes music a lot and dancing. She sings in a group and walks in the park in the morning. She does not like football, but she likes to travel and to get to know new places. She prefers coffee to tea. On Sundays, the two of them cook at home. Rafael prefers to make pizza; Camila prefers to make pão de queijo (cheese bread).', [
        ['What does Rafael love?', 'Football.'], ['What does Rafael hate?', 'Waking up early.'], ['What does Camila do in the morning?', 'She walks in the park.'], ['Does Camila like football?', 'No, she does not. She likes music, dancing and traveling.'], ['What do they both do on Sundays?', 'They cook at home.'], ['What does Camila prefer to make?', 'Pão de queijo (cheese bread).'],
      ]),
      producao(5, 'Write six sentences about the tastes of two people you know, in the style of the text. Use «gosta de», «adora», «detesta», «prefere» and «não gosta de». Then read them aloud.'),
    ]),
    sessao('S4', 'Review and practice of lesson 16', [
      revisao(5, 'Say aloud five sentences about yourself with «gosto de», «adoro», «detesto», «prefiro» and one with «eu também não» as an answer to a negative sentence.'),
      exercicios(20, [
        ouvir('Eu gosto de música', ['Eu gosto de música', 'Eu gosto da música', 'Eu adoro música'], 'Eu gosto de música', 'Listen for «gosto de» without an article.'),
        ouvir('Ela adora dançar', ['Ela adora dançar', 'Ela gosta de dançar', 'Ela detesta dançar'], 'Ela adora dançar', '«Adorar» takes the infinitive directly.'),
        ouvir('Nós preferimos café', ['Nós preferimos café', 'Nós preferimos chá', 'Eu prefiro café'], 'Nós preferimos café', 'The «nós» form is «preferimos».'),
        ouvir('Eu também não', ['Eu também não', 'Eu também', 'Eu, não'], 'Eu também não', 'The negative agreement is «eu também não».'),
        ditado('Você gosta de futebol?', 'Write: Você gosta de futebol? Remember the «de».'),
        ditado('Prefiro café a chá', 'Write: Prefiro café a chá. Careful style: preferir X a Y.'),
        ditado('Eles gostam de cozinhar', 'Write: Eles gostam de cozinhar. Plural «gostam», then «de» + infinitive.'),
        mc('Which sentence is correct?', ['Eu gosto de música.', 'Eu gosto música.', 'Eu gosto a música.'], 'Eu gosto de música.', '«Gostar» needs «de».'),
        mc('Which verb is followed by «de» before a noun?', ['gostar', 'adorar', 'detestar'], 'gostar', '«Adorar» and «detestar» take no preposition.'),
        mc('Someone says «Não gosto de chá.» How do you agree?', ['Eu também não.', 'Eu também.', 'Eu gosto.'], 'Eu também não.', 'Agree with a negative with «também não».'),
        mc('What does «assistir» mean in Brazil?', ['to watch', 'to help', 'to wait'], 'to watch', '«Assistir» is a false friend: to help is «ajudar».'),
        mc('How do you say «I like music a lot»?', ['Gosto muito de música.', 'Gosto de muito música.', 'Gosto muito música.'], 'Gosto muito de música.', '«Muito» comes right after the verb, and «de» stays.'),
        mc('Which phrase means «I don\'t mind, it makes no difference»?', ['Tanto faz.', 'Depende.', 'Eu também não.'], 'Tanto faz.', '«Depende» means «it depends».'),
        lacuna('Ela gosta ___ praia.', ['da', 'de', 'do'], 'da', 'de + a = da (praia is feminine).'),
        lacuna('Eles ___ de cozinhar. (gostar)', ['gostam', 'gosta', 'gostamos'], 'gostam', 'Plural subject, plural verb.'),
        lacuna('Eu ___ café a chá. (preferir)', ['prefiro', 'prefere', 'preferimos'], 'prefiro', 'Present of «preferir» with «eu».'),
        lacuna('Nós ___ filmes. (adorar)', ['adoramos', 'adoram', 'adoro'], 'adoramos', 'Present of «adorar» with «nós».'),
        lacuna('Eu gosto muito ___. (about her)', ['dela', 'de ela', 'da ela'], 'dela', 'de + ela = dela.'),
        ordem('Put in order: «Eu gosto muito de viajar.»', ['Eu', 'gosto', 'muito', 'de', 'viajar.'], 'Eu gosto muito de viajar.', '«Gosto muito de» + infinitive.'),
        ordem('Put in order: «Você prefere café ou chá?»', ['Você', 'prefere', 'café', 'ou', 'chá?'], 'Você prefere café ou chá?', 'A choice question with «ou».'),
        livre('Write in Portuguese: I love music, but I do not like football.', 'Eu adoro música, mas não gosto de futebol.'),
        livre('Write in Portuguese: She prefers to stay at home.', 'Ela prefere ficar em casa.'),
      ]),
      producao(5, 'Have a short conversation with an imaginary new colleague: ask three questions about tastes («Você gosta de…?», «Você prefere… ou…?»), answer with full sentences and agree or disagree twice with «Eu também» and «Eu também não».'),
    ]),
  ],
});
