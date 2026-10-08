import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 2, titulo: 'Ser, pronouns and adjectives', nivel: 'a1',
  objetivo: 'Say who you and other people are with the verb «ser», use the subject pronouns (including «você» and «a gente»), describe people with adjectives that agree in gender and number, name a profession, say «no» and ask simple yes/no questions.',
  nota: 'You can say who someone is, describe a person, name a profession, deny something and ask a short question with «ser». Next lesson: introductions, countries and nationalities, the numbers 0 to 20 and how to say your age.',
  sessoes: [
    sessao('S1', 'The pronouns and the verb «ser»', [
      revisao(5, 'Say aloud: bom dia, boa tarde, boa noite, tudo bem, obrigado or obrigada, de nada, tchau. Then spell your first name with the Portuguese letter names and read: rua, carro, filho, noite, hoje, Brasil.'),
      palavras(8, [
        ['eu', 'EH-oo', 'I', ''], ['você', 'voh-SEH', 'you (singular, the everyday form)', ''], ['ele', 'EH-lee', 'he', ''], ['ela', 'EH-lah', 'she', ''],
        ['a gente', 'ah ZHEH~-tchee', 'we (everyday speech, literally «the people»)', ''], ['nós', 'NAWS', 'we', ''], ['vocês', 'voh-SEHS', 'you (plural)', ''], ['eles, elas', 'EH-leez, EH-lahz', 'they (masculine or mixed, feminine)', ''],
        ['sou', 'SOH', 'I am (from «ser»)', ''], ['é', 'EH', 'is; you are (from «ser»)', ''], ['somos', 'SOH-moos', 'we are (from «ser»)', ''], ['são', 'SOW~', 'they are; you (plural) are (from «ser»)', ''],
      ]),
      gramatica(12, 'The subject pronouns and the present of «ser»', "STEP 1: «ser» is the verb for saying who or what someone is: your name, your profession, your nationality and your permanent qualities. Its present tense is irregular and must be learned by heart: eu sou, você é, ele/ela é, a gente é, nós somos, vocês são, eles/elas são. STEP 2: in Brazil «você» is the normal word for «you», with friends, colleagues, shop assistants and strangers. It takes the same verb form as «ele» and «ela»: «você é». In some regions of the South and the Northeast people say «tu», and in Portugal «tu» is common too, but you can use «você» everywhere in Brazil and be understood. STEP 3: in everyday speech «a gente» (literally «the people») replaces «nós». It looks plural but it takes the verb of «ele/ela»: «a gente é», not «a gente somos». «Nós somos» sounds more careful and is common in writing. STEP 4: unlike Spanish or Italian, Brazilian speakers usually keep the subject pronoun, because «você é», «ele é» and «ela é» all use the same form «é». So say «Eu sou Marina», «Ela é Ana». Both «Sou Marina» and «Eu sou Marina» are correct. STEP 5: a name is introduced with «ser», never with «chamar» in this lesson: «Eu sou Pedro». Remember that «estar» also means «to be»; you will meet it in lesson 10. Today we use only «ser».", {
        tag: 'Verbs',
        comparacao: "In English «to be» does every job: «I am a teacher», «I am tired», «I am in Rio». Portuguese splits it into two verbs, «ser» and «estar». Today you learn «ser», for identity and lasting traits. English also has one «you» for all; Portuguese has «você» (singular) and «vocês» (plural), and «a gente» is a very frequent way to say «we».",
        tabela: [
          { person: 'eu', form: 'sou', example: 'Eu sou Marina.' },
          { person: 'você', form: 'é', example: 'Você é Pedro?' },
          { person: 'ele / ela', form: 'é', example: 'Ele é Lucas. Ela é Ana.' },
          { person: 'a gente', form: 'é', example: 'A gente é amigo.' },
          { person: 'nós', form: 'somos', example: 'Nós somos amigos.' },
          { person: 'vocês', form: 'são', example: 'Vocês são Rafael e Bianca?' },
          { person: 'eles / elas', form: 'são', example: 'Eles são Carlos e João.' },
        ],
        erros: [['Eu é Marina.', 'Eu sou Marina.', 'With «eu» the form is «sou». «É» is for «você, ele, ela, a gente».'], ['A gente somos amigos.', 'A gente é amigo. / Nós somos amigos.', '«A gente» takes the verb of «ele/ela»: «é». Use «somos» only with «nós».'], ['Vocês é Ana e Pedro?', 'Vocês são Ana e Pedro?', '«Vocês» is plural, so it takes «são».'], ['Eu estou Marina.', 'Eu sou Marina.', 'To say who you are, use «ser», not «estar».']],
      }),
      producao(5, 'Say aloud with the names of friends: «Eu sou… Você é… Ela é… Ele é… Nós somos… Vocês são… Eles são…». Then say two sentences with «a gente é».'),
    ]),
    sessao('S2', 'Adjectives, agreement and negation', [
      revisao(4, 'Say the present of «ser» from memory, from «eu sou» to «eles são». Say one sentence with «você é» and one with «a gente é».'),
      palavras(6, [
        ['alto, alta', 'AH-oo-too, AH-oo-tah', 'tall', ''], ['baixo, baixa', 'BYE-shoo, BYE-shah', 'short (not tall)', ''], ['simpático, simpática', 'seem~-PAH-tchee-koo, seem~-PAH-tchee-kah', 'nice, friendly', ''],
        ['bonito, bonita', 'boh-NEE-too, boh-NEE-tah', 'good-looking, pretty', ''], ['inteligente', 'ee~-teh-lee-ZHEH~-tchee', 'intelligent', ''], ['legal', 'leh-GAH-oo', 'nice, cool, great (very common)', ''],
        ['feliz', 'feh-LEEZ', 'happy', ''], ['novo, nova', 'NOH-voo, NAW-vah', 'new; young (for a person: recent)', ''], ['muito', 'MOY~-too', 'very', ''], ['um pouco', 'oo~ POH-koo', 'a little, a bit', ''],
      ]),
      gramatica(12, 'Adjectives: gender, number, «muito» and «não»', "STEP 1: an adjective agrees in gender and number with the person it describes. For a man: «Pedro é alto»; for a woman: «Ana é alta»; for several people: «Eles são altos», «Elas são altas». STEP 2: adjectives ending in «-o» change to «-a» for the feminine: «alto, alta», «bonito, bonita». Adjectives ending in «-e», «-l» or «-z» have the same form for both genders: «inteligente», «legal», «feliz». STEP 3: for the plural add «-s»: «altos, altas, inteligentes». If the adjective ends in «-l», change to «-is»: «legal» becomes «legais». If it ends in «-z», add «-es»: «feliz» becomes «felizes». STEP 4: «muito» in front of an adjective means «very» and does not change: «Ela é muito alta», «Eles são muito legais». «Um pouco» means «a bit»: «Ele é um pouco baixo». STEP 5: to make a sentence negative, put «não» before the verb: «Eu não sou alto», «Ela não é baixa». For a short answer you repeat the verb, usually with two «não»: «Você é alto? — Não, não sou.» Say «Sim, sou.» for yes. STEP 6: to connect ideas use «e» (and), «mas» (but) and «também» (also): «Ela é alta e simpática, mas não é muito feliz hoje.» Careful: «também» comes after the verb, «Eu também sou…», or at the end.", {
        tag: 'Adjectives',
        comparacao: "In English adjectives never change: «tall» is the same for a man, a woman and ten people. In Portuguese the adjective must match. The rule is mechanical and easy once you see it: «-o» becomes «-a», then add «-s» for the plural. In English you say «She is not tall» with the helper «do» in other verbs («I do not work»); with «ser» Portuguese just puts «não» before the verb, like English puts «not» after «am/is».",
        tabela: [
          { type: 'ends in -o', masculine_singular: 'alto', feminine_singular: 'alta', masculine_plural: 'altos', feminine_plural: 'altas' },
          { type: 'ends in -e', masculine_singular: 'inteligente', feminine_singular: 'inteligente', masculine_plural: 'inteligentes', feminine_plural: 'inteligentes' },
          { type: 'ends in -l', masculine_singular: 'legal', feminine_singular: 'legal', masculine_plural: 'legais', feminine_plural: 'legais' },
          { type: 'ends in -z', masculine_singular: 'feliz', feminine_singular: 'feliz', masculine_plural: 'felizes', feminine_plural: 'felizes' },
        ],
        erros: [['Ana é alto.', 'Ana é alta.', 'The adjective agrees with the person: a woman is «alta».'], ['Eles são legal.', 'Eles são legais.', 'Plural: «-l» becomes «-is», so «legais».'], ['Eu sou não alto.', 'Eu não sou alto.', '«Não» goes before the verb.'], ['Ela é muita alta.', 'Ela é muito alta.', 'In front of an adjective, «muito» (very) never changes.']],
      }),
      dialogo(4, 'The new colleagues', 'Camila and Lucas talk about two new people at work.', [
        ['Camila', 'Quem é ele?', 'Who is he?'], ['Lucas', 'Ele é Rafael. Ele é novo.', 'He is Rafael. He is new.'], ['Camila', 'Ele é simpático?', 'Is he nice?'],
        ['Lucas', 'Sim, é muito simpático. E ela é Bianca.', 'Yes, he is very nice. And she is Bianca.'], ['Camila', 'Ela é alta?', 'Is she tall?'], ['Lucas', 'Não, ela não é alta, mas é muito legal.', 'No, she is not tall, but she is very nice.'],
        ['Camila', 'E vocês são amigos?', 'And are you friends?'], ['Lucas', 'A gente é, sim!', 'We are, yes!'],
      ]),
      producao(4, 'Describe three people you know with «é muito…», «não é muito…» and «é um pouco…». Use «e» and «mas» at least once. Pay attention to «-o» and «-a».'),
    ]),
    sessao('S3', 'Professions and simple questions', [
      revisao(4, 'Say four sentences with adjectives, two for a man and two for a woman. Make one plural and one negative: «Ana não é baixa», «Eles são legais».'),
      palavras(5, [
        ['professor, professora', 'proh-feh-SOR, proh-feh-SOH-rah', 'teacher', ''], ['médico, médica', 'MEH-djee-koo, MEH-djee-kah', 'doctor', ''], ['estudante', 'ees-too-DAH~-tchee', 'student', ''], ['engenheiro, engenheira', 'eh~-zheh-NYAY-roo, eh~-zheh-NYAY-rah', 'engineer', ''],
        ['advogado, advogada', 'ah-djee-voh-GAH-doo, ah-djee-voh-GAH-dah', 'lawyer', ''], ['garçom, garçonete', 'gar-SOH~, gar-soh-NEH-tchee', 'waiter, waitress', ''], ['motorista', 'moh-toh-REES-tah', 'driver', ''], ['quem', 'KEH~ee', 'who', ''],
      ]),
      gramatica(8, 'Naming a profession and asking with «ser»', "STEP 1: to say a profession, use «ser» and do not put «a» or «an» before it: «Eu sou professora», «Ele é médico». English says «I am a teacher»; Portuguese says «I am teacher». STEP 2: the feminine of professions follows the same logic as adjectives: «-o» becomes «-a» («médico, médica»); «-or» takes «-a» («professor, professora»); some change completely («garçom, garçonete»); and words in «-e» or «-ista» stay the same for both («estudante, motorista, dentista»). STEP 3: a yes/no question has the same word order as a statement, only your voice goes up at the end: «Você é médico?». There is no «do» or «does» and no inversion. You can add «né?» (isn't it?) in speech: «Ela é professora, né?». STEP 4: «quem» means «who»: «Quem é ela?». For «what is he like?», use «como»: «Como ele é?» (literally «how is he?»). It asks for a description: «Ele é alto e simpático».", {
        tag: 'Questions',
        comparacao: "English builds questions with «do/does» or by inverting: «Are you a doctor?». Portuguese keeps the statement order and changes only the melody: «Você é médico?». Also, there is no article before the profession: «Sou engenheiro», not «Sou um engenheiro» (that sounds like you are introducing a type of person, and needs an adjective).",
        tabela: [
          { pattern: 'statement', portuguese: 'Você é médico.', meaning: 'You are a doctor.' },
          { pattern: 'yes/no question', portuguese: 'Você é médico?', meaning: 'Are you a doctor?' },
          { pattern: 'who?', portuguese: 'Quem é ela?', meaning: 'Who is she?' },
          { pattern: 'what is he like?', portuguese: 'Como ele é?', meaning: 'What is he like?' },
          { pattern: 'tag', portuguese: 'Ela é professora, né?', meaning: "She is a teacher, isn't she?" },
        ],
        erros: [['Eu sou um professor.', 'Eu sou professor.', 'Do not use «um» before a bare profession.'], ['É você médico?', 'Você é médico?', 'Do not invert. Keep the order and raise your voice.'], ['Ela é médico.', 'Ela é médica.', 'Use the feminine for a woman.'], ['Quem você é? (meaning «Who are you?» as a plain question)', 'Quem é você?', 'The verb comes right after «quem»: «Quem é você?».']],
      }),
      texto(8, 'Four friends', 'Eu sou Marina e sou professora. Pedro é médico. Ele é muito simpático, mas é um pouco baixo. Ana e Camila são estudantes. Elas são muito inteligentes. Nós somos amigos, e a gente é muito feliz!', "I am Marina and I am a teacher. Pedro is a doctor. He is very nice, but he is a bit short. Ana and Camila are students. They are very intelligent. We are friends, and we are very happy!", [
        ['What is Marina\'s profession?', 'Marina é professora.'], ['Is Pedro tall?', 'Não, ele é um pouco baixo.'], ['Who are the students?', 'Ana e Camila são estudantes.'], ['Are the four friends happy?', 'Sim, a gente é muito feliz.'],
      ]),
      producao(5, 'Introduce yourself with your profession (or a profession you like): «Eu sou… e sou…». Then ask an imaginary person «Você é…?» and answer for them: «Sim, sou.» or «Não, não sou.»'),
    ]),
    sessao('S4', 'Review and practice of lesson 2', [
      revisao(5, 'Say the present of «ser». Then describe a woman and a man you know, with a profession and two adjectives each. Use «não», «muito» and «mas».'),
      exercicios(20, [
        ouvir('Eu sou Marina', ['Eu sou Marina', 'Eu é Marina', 'Eu somos Marina'], 'Eu sou Marina', '«Sou» goes with «eu».'), ouvir('Ela é professora', ['Ela é professora', 'Ele é professor', 'Elas são professoras'], 'Ela é professora', 'Listen for «ela», «é» and the feminine ending.'),
        ouvir('Vocês são amigos', ['Vocês são amigos', 'Você é amigo', 'Nós somos amigos'], 'Vocês são amigos', '«Vocês» takes «são».'), ouvir('Ele não é alto', ['Ele não é alto', 'Ele é alto', 'Ela não é alta'], 'Ele não é alto', '«Não» comes before the verb.'),
        ouvir('Eles são legais', ['Eles são legais', 'Eles são legal', 'Ele é legal'], 'Eles são legais', 'Plural of «legal» is «legais».'),
        ditado('Você é médico?', 'Write: Você é médico? A question uses the same word order as a statement.'), ditado('Nós somos amigos', 'Write: Nós somos amigos.'), ditado('Ela é muito simpática', 'Write: Ela é muito simpática.'),
        mc('Which form of «ser» goes with «eu»?', ['sou', 'é', 'são'], 'sou', '«Eu sou».'), mc('Which sentence is correct for «a gente» (we)?', ['A gente é amigo.', 'A gente somos amigos.', 'A gente são amigos.'], 'A gente é amigo.', '«A gente» takes the verb of «ele/ela».'),
        mc('How do you say «She is a doctor»?', ['Ela é médica.', 'Ela é uma médica.', 'Ela é médico.'], 'Ela é médica.', 'No article before the profession, and a feminine ending.'),
        mc('What does «Como ele é?» ask for?', ['A description', 'A name', 'A profession'], 'A description', '«Como é?» asks what someone is like.'),
        mc('What is the plural of «feliz»?', ['felizes', 'felizs', 'felizis'], 'felizes', 'Words ending in «-z» add «-es».'), mc('Which one is a short answer to «Você é alto?» (no)?', ['Não, não sou.', 'Não, sou não.', 'Não, é não.'], 'Não, não sou.', 'Repeat the verb with «não» in front.'),
        lacuna('Eu ___ professor.', ['sou', 'é', 'somos'], 'sou', 'With «eu» use «sou».'), lacuna('Elas ___ estudantes.', ['são', 'é', 'somos'], 'são', 'With «elas» (plural) use «são».'),
        lacuna('Ana é muito ___ . (tall, feminine)', ['alta', 'alto', 'altas'], 'alta', 'Ana is a woman, so the adjective is feminine singular.'), lacuna('Nós ___ amigos.', ['somos', 'são', 'sou'], 'somos', '«Nós somos».'),
        ordem('Put in order: «Ela é muito inteligente.»', ['Ela', 'é', 'muito', 'inteligente.'], 'Ela é muito inteligente.', 'Subject, verb, «muito», adjective.'), ordem('Put in order: «Eu não sou médico.»', ['Eu', 'não', 'sou', 'médico.'], 'Eu não sou médico.', '«Não» goes before the verb.'),
        livre('Write in Portuguese: I am a teacher. She is not tall, but she is very nice.', 'Eu sou professor. Ela não é alta, mas é muito legal.'),
        livre('Write in Portuguese: Are you a student? Yes, I am.', 'Você é estudante? Sim, sou.'),
      ]),
      producao(5, 'Present yourself and two friends in a short speech: names, professions and two adjectives for each. Use «e», «mas», «muito» and at least one «não».'),
    ]),
  ],
});
