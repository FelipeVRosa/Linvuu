import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 4, titulo: 'Present of -ar verbs, negation and questions', nivel: 'a1',
  objetivo: 'Conjugate regular verbs in «-ar» in the present, say what you do, where you live, work and study, make negative sentences and ask questions with «onde, o que, quem, quando» and «por que».',
  nota: 'You can talk about what you do every day with regular «-ar» verbs, say what you do not do, and ask and answer basic questions. Next lesson: articles (o, a, um, uma), gender, plurals and «tem» (there is/are).',
  sessoes: [
    sessao('S1', 'Regular verbs in -ar', [
      revisao(5, 'Say aloud: your name, where you are from, your nationality and your age. Then ask a friend the same four questions with «você» and then with «o senhor».'),
      palavras(8, [
        ['falar', 'fah-LAR', 'to speak, to talk', ''], ['morar', 'moh-RAR', 'to live (in a place)', ''], ['trabalhar', 'trah-bah-LYAR', 'to work', ''], ['estudar', 'ees-too-DAR', 'to study', ''],
        ['comprar', 'koh~-PRAR', 'to buy', ''], ['cozinhar', 'koh-zee-NYAR', 'to cook', ''], ['viajar', 'vee-ah-ZHAR', 'to travel', ''], ['tomar', 'toh-MAR', 'to take; to drink (tomar café)', ''],
        ['em', 'EH~ee', 'in, at (before a place)', ''], ['aqui', 'ah-KEE', 'here', ''],
      ]),
      gramatica(12, 'The present of regular «-ar» verbs', "STEP 1: Portuguese verbs are listed in the infinitive, and the infinitive tells you the family. Verbs ending in «-ar» (falar, morar, trabalhar…) are the largest family, and almost all of them are regular. STEP 2: to conjugate, remove «-ar» and add the ending for the person: eu fal-o, você fal-a, ele/ela fal-a, a gente fal-a, nós fal-amos, vocês fal-am, eles/elas fal-am. STEP 3: three forms are always the same: «você», «ele/ela» and «a gente» all take «-a». Only «nós» has «-amos». STEP 4: stress. In «falo, fala, falamos» the stress is on the stem («FA-lo»); in «falam» the ending «-am» is a weak nasal sound, like «FAH-lah~oo», and the stress stays on «FA». Do not stress the last syllable. STEP 5: the Portuguese present covers both the English simple present («I work here») and the English «-ing» form («I am working now»), so «Eu trabalho» can mean either. In lesson 17 you will meet «estar + gerund» for the «now» meaning. STEP 6: in many regions of Brazil, speakers who say «tu» use the form of «você»: «tu fala». Portugal uses «tu falas». The form «vós» is not used in everyday speech. STEP 7: the final «r» of infinitives is often very light in everyday speech, so «falar» can sound like «fala-ah». Write it correctly, though.", {
        tag: 'Verbs',
        comparacao: "In English the verb hardly changes: «I speak, you speak, we speak, they speak», only «he speaks» is different. In Portuguese each person has a different ending, so the subject is less necessary, although Brazilians use it more than speakers of Spanish. A big plus: English needs the helper «do/does» for questions and negatives («Do you speak? I don't speak»); Portuguese does not.",
        tabela: [
          { person: 'eu', falar: 'falo', morar: 'moro', trabalhar: 'trabalho' },
          { person: 'você, ele, ela, a gente', falar: 'fala', morar: 'mora', trabalhar: 'trabalha' },
          { person: 'nós', falar: 'falamos', morar: 'moramos', trabalhar: 'trabalhamos' },
          { person: 'vocês, eles, elas', falar: 'falam', morar: 'moram', trabalhar: 'trabalham' },
        ],
        exemplos: [
          ['Eu falo inglês e um pouco de português.', 'I speak English and a little Portuguese.'], ['Você mora em São Paulo?', 'Do you live in São Paulo?'], ['A gente trabalha aqui.', 'We work here.'], ['Nós estudamos português.', 'We study Portuguese.'], ['Eles viajam muito.', 'They travel a lot.'],
        ],
        erros: [['Eu falar português.', 'Eu falo português.', 'Do not use the infinitive after a subject: conjugate the verb.'], ['Ele falo inglês.', 'Ele fala inglês.', '«-o» is only for «eu». Ele/ela take «-a».'], ['Vocês fala inglês.', 'Vocês falam inglês.', '«Vocês» is plural, so the ending is «-am».'], ['A gente falamos português.', 'A gente fala português. / Nós falamos português.', '«A gente» takes the «-a» form, like «ele/ela». You may hear «a gente falamos», but it is not standard.']],
      }),
      producao(5, 'Say six sentences about yourself and people you know, with a different verb each time: «Eu moro em… Eu trabalho… Eu estudo… Ela cozinha… Nós viajamos… Eles falam…».'),
    ]),
    sessao('S2', 'Negation and questions', [
      revisao(4, 'Conjugate «falar» and «morar» aloud for all persons. Say three sentences about people you know.'),
      palavras(6, [
        ['inglês', 'ee~-GLEHS', 'English (the language)', ''], ['português', 'por-too-GEHS', 'Portuguese (the language)', ''], ['espanhol', 'ees-pah-NYOH-oo', 'Spanish (the language)', ''], ['onde', 'OH~-djee', 'where', ''],
        ['o que', 'oo KEE', 'what', ''], ['quem', 'KEH~ee', 'who', ''], ['quando', 'KWAH~-doo', 'when', ''], ['por que', 'poor KEE', 'why', ''], ['porque', 'poor-KEE', 'because', ''],
      ]),
      gramatica(12, 'Saying «no» and asking questions', "STEP 1: to make a sentence negative, put «não» right before the verb: «Eu não falo alemão», «Ela não mora aqui», «A gente não trabalha hoje». There is no helper verb like English «don't». STEP 2: a short answer repeats the verb. To say yes: «Você fala inglês? — Falo.» or «Sim, falo.». To say no: «Não, não falo.». The first «não» is the answer, the second belongs to the verb. A very natural answer in Brazil is the verb alone: «Mora aqui? — Moro.» STEP 3: a yes/no question has the same order as a statement, with a rising voice: «Você mora aqui?». You can add «né?» (right?) when you expect «yes»: «Vocês trabalham aqui, né?». STEP 4: question words go at the beginning: «Onde você mora?», «O que você estuda?», «Quem fala espanhol?», «Quando vocês viajam?», «Por que você estuda português?». In everyday speech the question word often goes to the end: «Você mora onde?», «Você estuda o quê?». Both are natural. STEP 5: «quem» is singular and takes the verb in the third person singular: «Quem trabalha aqui?». STEP 6: write «por que» in two words for the question, and «porque» in one word for the answer: «Por que você estuda português? — Porque viajo muito.» At the end of a sentence it is «por quê?», with an accent. STEP 7: the negative of the language answer: «Você fala espanhol? — Falo um pouco, mas não falo muito bem.»", {
        tag: 'Questions',
        comparacao: "English uses «do/does» in questions and negatives: «Where do you live? I don't live here». Portuguese has no such word: «Onde você mora? Eu não moro aqui.» In English the question word stays at the beginning, while Portuguese also allows it at the end in informal speech, like English «You live where?», but without any surprise: it is simply normal.",
        tabela: [
          { word: 'onde', question: 'Onde você trabalha?', answer: 'Trabalho em São Paulo.' },
          { word: 'o que', question: 'O que você estuda?', answer: 'Estudo português.' },
          { word: 'quem', question: 'Quem fala inglês?', answer: 'Ana fala inglês.' },
          { word: 'quando', question: 'Quando vocês viajam?', answer: 'Nós viajamos hoje.' },
          { word: 'por que', question: 'Por que você estuda?', answer: 'Porque viajo muito.' },
        ],
        erros: [['Eu falo não alemão.', 'Eu não falo alemão.', '«Não» goes before the verb.'], ['Onde você mora? — Sim.', 'Onde você mora? — Moro em Curitiba.', '«Onde» asks for a place, so do not answer yes or no.'], ['Porque você estuda?', 'Por que você estuda?', 'The question needs «por que» in two words.'], ['Quem falam inglês?', 'Quem fala inglês?', '«Quem» takes the singular verb.']],
      }),
      dialogo(4, 'Where do you live?', 'Marina and Thiago meet at a language event in São Paulo.', [
        ['Marina', 'Onde você mora, Thiago?', 'Where do you live, Thiago?'], ['Thiago', 'Moro aqui em São Paulo. E você?', 'I live here in São Paulo. And you?'], ['Marina', 'Eu moro em Curitiba, mas trabalho aqui.', 'I live in Curitiba, but I work here.'],
        ['Thiago', 'Legal! O que você estuda?', 'Cool! What do you study?'], ['Marina', 'Estudo inglês. Você fala inglês?', 'I study English. Do you speak English?'], ['Thiago', 'Falo um pouco, mas não falo muito bem.', 'I speak a little, but not very well.'],
      ]),
      producao(4, 'Ask a friend five questions with «onde, o que, quem, quando, por que» (invent the situation) and answer them yourself. Use «não» in at least one answer.'),
    ]),
    sessao('S3', 'Talking about your routine', [
      revisao(4, 'Ask and answer aloud: «Onde você mora? O que você estuda? Você fala espanhol? Por que você estuda português?». Use a negative in one answer.'),
      palavras(5, [
        ['chegar', 'sheh-GAR', 'to arrive', ''], ['esperar', 'ees-peh-RAR', 'to wait; to hope', ''], ['ajudar', 'ah-zhoo-DAR', 'to help', ''], ['pagar', 'pah-GAR', 'to pay', ''], ['ensinar', 'eh~-see-NAR', 'to teach', ''],
        ['sempre', 'SEH~-pree', 'always', ''], ['nunca', 'NOO~-kah', 'never', ''], ['devagar', 'deh-vah-GAR', 'slowly', ''], ['bem', 'BEH~ee', 'well', ''], ['todo dia', 'TOH-doo DJEE-ah', 'every day', ''],
      ]),
      gramatica(8, 'How often and how well: «sempre», «nunca», «bem»', "STEP 1: «sempre» (always) goes before the verb: «Eu sempre estudo de manhã». «Todo dia» (every day) usually goes at the end: «Eu trabalho todo dia». STEP 2: «nunca» (never) goes before the verb and already makes the sentence negative, so you do not add «não»: «Eu nunca viajo». You can also say «Eu não viajo nunca», which is just as correct. STEP 3: to say how well you do something, put «bem» (well) or «mal» (badly) after the verb: «Ela fala bem», «Eu falo devagar». With «um pouco» (a little) the message is softer: «Falo um pouco de português». STEP 4: parts of the day: «de manhã» (in the morning), «de tarde» (in the afternoon), «de noite» (at night). You will often hear them with «a» («à tarde, à noite»), a form you will study later. STEP 5: «falar com» means to speak with someone and «ajudar» takes a person directly: «Eu ajudo Ana». «Esperar» means both «to wait» and «to hope»: «Eu espero Pedro aqui» (wait for). STEP 6: culture: in Brazil «tomar café» is a ritual. A small strong coffee, the «cafezinho», is offered at the office, at the shop and at home as a sign of welcome, and refusing it politely is easy: «Não, obrigado».", {
        tag: 'Adverbs',
        comparacao: "English puts «always» and «never» between the subject and the verb, and so does Portuguese: «I always study» = «Eu sempre estudo». The trap is «nunca»: English allows only one negative («I never travel» or «I don't ever travel»), but Portuguese also accepts «não… nunca», with two negative words, and it is perfectly correct.",
        tabela: [
          { adverb: 'sempre', position: 'before the verb', example: 'Ela sempre chega de manhã.' },
          { adverb: 'nunca', position: 'before the verb (no «não»), or «não… nunca»', example: 'Eu nunca viajo. / Eu não viajo nunca.' },
          { adverb: 'todo dia', position: 'at the end', example: 'Eles trabalham todo dia.' },
          { adverb: 'bem, mal', position: 'after the verb', example: 'Você fala bem.' },
          { adverb: 'devagar', position: 'after the verb', example: 'Você fala devagar.' },
        ],
        erros: [['Eu não nunca viajo.', 'Eu nunca viajo. / Eu não viajo nunca.', 'Use one negative before the verb: either «nunca» alone or «não… nunca».'], ['Eu falo bom.', 'Eu falo bem.', '«Bom» is an adjective (a good book). To say how you do something use the adverb «bem».'], ['Eu estudo sempre de manhã.', 'Eu sempre estudo de manhã.', 'Put «sempre» before the verb.'], ['Eu espero Pedro por.', 'Eu espero Pedro.', 'In Portuguese «esperar» takes the person directly (not «wait for»).']],
      }),
      texto(8, 'A day in Curitiba', 'Eu sou Marina e moro em Curitiba. Trabalho de manhã e estudo de tarde. Estudo inglês e espanhol. Falo inglês bem, mas falo espanhol um pouco. Nunca viajo de noite. Todo dia cozinho em casa e tomo café com Ana.', "I am Marina and I live in Curitiba. I work in the morning and study in the afternoon. I study English and Spanish. I speak English well, but I speak Spanish a little. I never travel at night. Every day I cook at home and drink coffee with Ana.", [
        ['Where does Marina live?', 'Ela mora em Curitiba.'], ['When does Marina study?', 'Ela estuda de tarde.'], ['Which language does Marina speak well?', 'Ela fala inglês bem.'], ['Does Marina travel at night?', 'Não, ela nunca viaja de noite.'],
      ]),
      producao(5, 'Describe your day out loud with five sentences using «sempre», «nunca», «todo dia», «de manhã» and «bem». For example: «De manhã eu estudo. Eu nunca trabalho de noite».'),
    ]),
    sessao('S4', 'Review and practice of lesson 4', [
      revisao(5, 'Conjugate «trabalhar» and «estudar» aloud. Then ask and answer three questions with «onde, o que, quando». Say what you never do.'),
      exercicios(20, [
        ouvir('Eu moro em São Paulo', ['Eu moro em São Paulo', 'Eu mora em São Paulo', 'Eu moramos em São Paulo'], 'Eu moro em São Paulo', '«Eu» takes «-o».'), ouvir('Nós estudamos português', ['Nós estudamos português', 'Nós estudam português', 'Nós estudo português'], 'Nós estudamos português', '«Nós» takes «-amos».'),
        ouvir('Elas trabalham aqui', ['Elas trabalham aqui', 'Ela trabalha aqui', 'Elas trabalhamos aqui'], 'Elas trabalham aqui', 'Plural «-am».'), ouvir('Onde você trabalha?', ['Onde você trabalha?', 'Quando você trabalha?', 'Quem trabalha aqui?'], 'Onde você trabalha?', '«Onde» asks about the place.'),
        ouvir('Eu nunca viajo', ['Eu nunca viajo', 'Eu sempre viajo', 'Eu não viajo'], 'Eu nunca viajo', '«Nunca» means never.'), ouvir('Por que você estuda?', ['Por que você estuda?', 'O que você estuda?', 'Quando você estuda?'], 'Por que você estuda?', '«Por que» means why.'),
        ditado('Eu falo português', 'Write: Eu falo português.'), ditado('Ela não mora aqui', 'Write: Ela não mora aqui.'), ditado('Vocês trabalham todo dia', 'Write: Vocês trabalham todo dia.'),
        mc('Which sentence is correct?', ['Ele fala inglês.', 'Ele falo inglês.', 'Ele falamos inglês.'], 'Ele fala inglês.', '«Ele» takes «-a».'), mc('How do you say «We speak» in everyday speech?', ['A gente fala', 'A gente falamos', 'A gente falam'], 'A gente fala', '«A gente» takes the «ele/ela» form.'),
        mc('Where does «não» go?', ['Before the verb', 'After the verb', 'At the end of the sentence'], 'Before the verb', 'Eu não falo alemão.'), mc('Which is the correct short answer for «Você mora aqui?» (no)?', ['Não, não moro.', 'Não, moro não.', 'Não, mora não.'], 'Não, não moro.', 'Repeat the verb with «não» in front.'),
        mc('How do you ask «Why do you study Portuguese?»', ['Por que você estuda português?', 'Porque você estuda português?', 'Por quê você estuda português?'], 'Por que você estuda português?', 'Question: «por que» in two words.'), mc('Which word means «always»?', ['sempre', 'nunca', 'devagar'], 'sempre', '«Sempre» means always.'),
        lacuna('Eu ___ em Curitiba. (morar)', ['moro', 'mora', 'moramos'], 'moro', '«Eu» takes «-o».'), lacuna('Vocês ___ aqui? (trabalhar)', ['trabalham', 'trabalha', 'trabalhamos'], 'trabalham', '«Vocês» takes «-am».'),
        lacuna('Ela ___ inglês bem. (falar)', ['fala', 'falo', 'falam'], 'fala', '«Ela» takes «-a».'), lacuna('Eu ___ viajo. (never)', ['nunca', 'sempre', 'bem'], 'nunca', 'Never = «nunca».'),
        ordem('Put in order: «Onde você mora?»', ['Onde', 'você', 'mora?'], 'Onde você mora?', 'Question word first.'), ordem('Put in order: «Eu não falo alemão.»', ['Eu', 'não', 'falo', 'alemão.'], 'Eu não falo alemão.', '«Não» before the verb.'),
        livre('Write in Portuguese: I live in São Paulo and I work every day. I study Portuguese.', 'Eu moro em São Paulo e trabalho todo dia. Estudo português.'),
        livre('Write in Portuguese: Do you speak English? I speak a little, but not very well.', 'Você fala inglês? Falo um pouco, mas não falo muito bem.'),
      ]),
      producao(5, 'Have a short conversation with an imaginary classmate: ask where they live, what they study, whether they speak Spanish and when they travel. Answer your own questions in the negative too.'),
    ]),
  ],
});
