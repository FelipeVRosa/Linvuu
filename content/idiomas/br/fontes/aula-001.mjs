import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 1, titulo: 'Sounds, alphabet and greetings', nivel: 'a1',
  objetivo: 'Greet people and say goodbye in Brazilian Portuguese, spell your name with the Portuguese letter names, read the sounds that surprise English speakers (nasal vowels, r, lh, nh, t and d before i, final l) and put the stress in the right place.',
  nota: 'You can greet, thank, say goodbye, spell your name and read new words with confidence. Next lesson: the verb «ser», the pronouns and the first adjectives.',
  sessoes: [
    sessao('S1', 'First words and greetings', [
      intro(3, "You already know more Portuguese than you think: banana, chocolate, samba, favela, capoeira, açaí, carnaval, Brasil. This course teaches the Portuguese of Brazil: how people really speak in São Paulo, Rio, Salvador or Porto Alegre, with enough formal language to be polite everywhere. Today you learn to greet people, to thank them and to say goodbye. Listen first, then repeat out loud: your mouth has to learn the new sounds, not only your eyes."),
      palavras(8, [
        ['oi', 'OY', 'hi (the everyday greeting)', ''], ['olá', 'oh-LAH', 'hello (a little more formal)', ''], ['bom dia', 'BOH~ DJEE-ah', 'good morning', ''], ['boa tarde', 'BOH-ah TAR-djee', 'good afternoon', ''],
        ['boa noite', 'BOH-ah NOY-tchee', 'good evening, good night', ''], ['tchau', 'TCHOW', 'bye', ''], ['até logo', 'ah-TEH LOH-goo', 'see you soon', ''], ['até amanhã', 'ah-TEH ah-mah-NYAH~', 'see you tomorrow', ''],
        ['tudo bem?', 'TOO-doo BEH~ee', 'how are you? (literally: all well?)', ''], ['tudo bem', 'TOO-doo BEH~ee', 'fine, good (the usual answer)', ''], ['e você?', 'ee voh-SEH', 'and you?', ''], ['obrigado, obrigada', 'oh-bree-GAH-doo, oh-bree-GAH-dah', 'thank you (a man says -o, a woman says -a)', ''],
        ['de nada', 'djee NAH-dah', "you're welcome", ''], ['por favor', 'poor fah-VOR', 'please', ''], ['desculpe', 'djees-KOOL-pee', 'sorry, excuse me', ''], ['com licença', 'koh~ lee-SEH~-sah', 'excuse me (to pass or to enter)', ''],
      ]),
      gramatica(8, 'Greeting people: which word, when', "STEP 1: «Oi» is the everyday hello, for friends, strangers and shop assistants alike. «Olá» sounds a little more careful, like in a message or when you meet someone formally. STEP 2: use «bom dia» until about noon, «boa tarde» from noon until it gets dark and «boa noite» after that. Unlike in English, «boa noite» is both «good evening» when you arrive and «good night» when you leave. STEP 3: «tudo bem?» is the question everybody asks. The answer is «tudo bem» or «tudo bem, e você?». It is not a medical question: the answer is almost always «tudo bem». STEP 4: to say thank you, men say «obrigado» and women say «obrigada», because the word agrees with the person speaking. Nobody checks who you are thanking.", {
        tag: 'Greetings',
        comparacao: "In English «How are you?» is a greeting, and so is «tudo bem?» in Portuguese. English has one «you» for everybody; Portuguese uses «você» for people you do not know well and for most situations. You do not need «sir» or «madam» in a shop: «bom dia» is enough.",
        tabelas: [
          { titulo: 'Which greeting for which moment', linhas: [
            { moment: 'Arriving, until about 12:00', say: 'bom dia', meaning: 'good morning' },
            { moment: 'Arriving, from noon until dusk', say: 'boa tarde', meaning: 'good afternoon' },
            { moment: 'Arriving or leaving, after dark', say: 'boa noite', meaning: 'good evening / good night' },
            { moment: 'Meeting friends at any time', say: 'oi, tudo bem?', meaning: 'hi, how are you?' },
            { moment: 'Leaving', say: 'tchau / até logo', meaning: 'bye / see you soon' },
          ] },
        ],
        erros: [['«Obrigado» said by a woman about herself', 'obrigada', 'A woman says «obrigada»; the ending follows the person who speaks.'], ['«Boa dia»', 'bom dia', '«Dia» is masculine: «bom dia». «Tarde» and «noite» are feminine: «boa tarde», «boa noite».'], ['answering «tudo bem?» with a long story', 'tudo bem, e você?', 'It is a greeting, not a question about your health. Keep it short.']],
      }),
      dialogo(6, 'Good morning at the café', 'Marina walks into a café in the morning. João works at the counter.', [
        ['Marina', 'Bom dia!', 'Good morning!'], ['João', 'Bom dia! Tudo bem?', 'Good morning! How are you?'], ['Marina', 'Tudo bem, e você?', "I'm fine, and you?"],
        ['João', 'Tudo bem, obrigado. Um café?', "I'm fine, thanks. A coffee?"], ['Marina', 'Sim, por favor.', 'Yes, please.'], ['João', 'Aqui está.', "Here you go."], ['Marina', 'Obrigada! Tchau!', 'Thank you! Bye!'], ['João', 'De nada. Até logo!', "You're welcome. See you soon!"],
      ]),
      producao(5, 'Greet an imaginary neighbor in three different ways, out loud: with «oi», with «bom dia» and with «boa tarde». Then thank them and say goodbye.'),
    ]),
    sessao('S2', 'The Portuguese alphabet', [
      revisao(4, 'Say aloud: oi, bom dia, boa tarde, boa noite, tudo bem, obrigado or obrigada, de nada, tchau.'),
      alfabeto(10, [
        ['Part 1 — A to G', [
          ['A', 'a', 'name: «á» (like «ah»)', '/a/', 'amigo', 'friend', 'á'], ['B', 'b', 'name: «bê» (like «bay»)', '/be/', 'bom', 'good', 'bê'], ['C', 'c', 'name: «cê» (like «say»)', '/se/', 'casa', 'house', 'cê'],
          ['D', 'd', 'name: «dê» (like «day»)', '/de/', 'dia', 'day', 'dê'], ['E', 'e', 'name: «é» (like «eh»)', '/ɛ/', 'escola', 'school', 'é'], ['F', 'f', 'name: «éfe» (EH-fee)', '/ˈɛfi/', 'família', 'family', 'éfe'],
          ['G', 'g', 'name: «gê» (like «zhay»)', '/ʒe/', 'gato', 'cat', 'gê'],
        ]],
        ['Part 2 — H to N', [
          ['H', 'h', 'name: «agá» (ah-GAH); the letter is silent', '/aˈga/', 'hotel', 'hotel', 'agá'], ['I', 'i', 'name: «i» (like «ee»)', '/i/', 'ilha', 'island', 'i'], ['J', 'j', 'name: «jota» (ZHOH-tah)', '/ˈʒɔta/', 'janeiro', 'January', 'jota'],
          ['K', 'k', 'name: «cá» (kah); only in foreign words', '/ka/', 'quilo', 'kilo (written with qu)', 'cá'], ['L', 'l', 'name: «éle» (EH-lee)', '/ˈɛli/', 'livro', 'book', 'éle'], ['M', 'm', 'name: «ême» (EH~-mee)', '/ˈẽmi/', 'mãe', 'mother', 'ême'],
          ['N', 'n', 'name: «ene» (EH-nee)', '/ˈɛni/', 'nome', 'name', 'ene'],
        ]],
        ['Part 3 — O to V', [
          ['O', 'o', 'name: «ó» (like «aw»)', '/ɔ/', 'obrigado', 'thank you (man)', 'ó'], ['P', 'p', 'name: «pê» (like «pay»)', '/pe/', 'pão', 'bread', 'pê'], ['Q', 'q', 'name: «quê» (like «kay»); always followed by u', '/ke/', 'queijo', 'cheese', 'quê'],
          ['R', 'r', 'name: «érre» (EH-hee)', '/ˈɛʁi/', 'rua', 'street', 'érre'], ['S', 's', 'name: «ésse» (EH-see)', '/ˈɛsi/', 'sol', 'sun', 'ésse'], ['T', 't', 'name: «tê» (like «tay»)', '/te/', 'tarde', 'afternoon', 'tê'],
          ['U', 'u', 'name: «u» (like «oo»)', '/u/', 'uva', 'grape', 'u'], ['V', 'v', 'name: «vê» (like «vay»)', '/ve/', 'vinho', 'wine', 'vê'],
        ]],
        ['Part 4 — W, X, Y, Z', [
          ['W', 'w', 'name: «dáblio» (DAH-blee-oo); foreign words', '/ˈdablju/', 'web', 'web', 'dáblio'], ['X', 'x', 'name: «xis» (like «sheess»)', '/ʃis/', 'xícara', 'cup', 'xis'],
          ['Y', 'y', 'name: «ípsilon» (EEP-see-lon); foreign words', '/ˈipsilõ/', 'yoga', 'yoga', 'ípsilon'], ['Z', 'z', 'name: «zê» (like «zay»)', '/ze/', 'zero', 'zero', 'zê'],
        ]],
      ]),
      gramatica(8, 'Spelling out loud and the accented letters', "STEP 1: in Brazil people spell names constantly: on the phone, at the bank, at a hotel, for a delivery. You say the letter names above, in order. STEP 2: a few letters have a different name from English: «e» is «é», «g» is «gê» (ZHAY), «h» is «agá», «j» is «jota», «r» is «érre», «x» is «xis» and «y» is «ípsilon». STEP 3: Portuguese also writes letters with marks, and each mark has a job: «á é í ó ú» show the stressed syllable; «â ê ô» show the stressed syllable and a closed sound; «ã õ» show a nasal vowel; «à» appears only in a contraction (you will see it later); «ç» (cê cedilha) is the sound «s» before a, o, u: «obrigado» is no help, but «açaí» is. STEP 4: to give your e-mail you say «arroba» for @ and «ponto» for the dot: «ana ponto silva arroba exemplo ponto com».", {
        tag: 'Pronunciation',
        comparacao: "English spelling often hides the sound; Portuguese spelling is far more regular. Once you know the rules (next sessions), you can read almost any word aloud correctly. Mind the letter names, which you will hear all the time: «g» is not «gee», «e» is not «ee», «i» is not «eye».",
        tabela: [
          { letter: 'ç', name: 'cê cedilha', sound: 's', example: 'açaí, coração' },
          { letter: 'ã, õ', name: 'a til, o til', sound: 'nasal vowel', example: 'mãe, pão, limões' },
          { letter: 'á é í ó ú', name: 'acento agudo', sound: 'stress, open vowel', example: 'café, avó, último' },
          { letter: 'â ê ô', name: 'acento circunflexo', sound: 'stress, closed vowel', example: 'você, avô, bebê' },
          { letter: '@ and .', name: 'arroba, ponto', sound: 'e-mail address', example: 'ana.silva@exemplo.com' },
        ],
        erros: [['saying «jee» for the letter g', 'gê', 'The Portuguese «g» is named «zhay»: «gê».'], ['reading «h» as in «hotel» in English', '(silent)', '«Hotel» and «hoje» start with a silent h. Say «oh-TEH-oo» and «OH-zhee».'], ['saying «ee» for the letter e', 'é', 'The name of the letter e is «é» (eh).']],
      }),
      producao(8, 'Spell your first name and your last name aloud with the Portuguese letter names. Then spell the word «Brasil» (bê, érre, á, ésse, i, éle). Finish with: «Meu nome é… (your name). Obrigado/Obrigada.»'),
    ]),
    sessao('S3', 'Vowels, nasal sounds and stress', [
      revisao(3, 'Spell your name again, then spell «obrigado», «tchau» and «bom dia» with the Portuguese letter names.'),
      palavras(5, [
        ['mãe', 'MAH~ee', 'mother', ''], ['pão', 'POW~', 'bread', ''], ['bom', 'BOH~', 'good', ''], ['sim', 'SEE~', 'yes', ''],
        ['não', 'NOW~', 'no', ''], ['limão', 'lee-MOW~', 'lemon, lime', ''], ['coração', 'koh-rah-SOW~', 'heart', ''], ['café', 'kah-FEH', 'coffee', ''],
        ['rua', 'HOO-ah', 'street', ''], ['carro', 'KAH-hoo', 'car', ''], ['caro', 'KAH-roo', 'expensive; dear', ''], ['filho', 'FEE-lyoo', 'son', ''],
        ['nenhum', 'neh-NYOO~', 'none, not any', ''], ['dia', 'DJEE-ah', 'day', ''], ['noite', 'NOY-tchee', 'night', ''], ['Brasil', 'brah-ZEE-oo', 'Brazil', ''],
        ['hoje', 'OH-zhee', 'today', ''], ['xícara', 'SHEE-kah-rah', 'cup', ''],
      ]),
      gramatica(9, 'The nasal vowels and where the stress falls', "STEP 1: Portuguese has five oral vowels (a, e, i, o, u), pronounced clearly and without the English «glide»: «a» as in «father», «i» as in «see». STEP 2: the vowels also come in a nasal version. The air goes through the nose and the vowel gets a «nasal» color, without a clear «n» or «m» sound afterwards. You write them with a tilde («ã», «õ») or with «m» or «n» after the vowel: «mãe, pão, bom, sim, bem, um, onde». STEP 3: stress. If a word has an accent mark, stress that syllable: «café, você, último». Without a mark, the stress is on the last syllable when the word ends in «r, l, z, i, u» (or a nasal ending): «falar, Brasil, feliz, aqui». In all other words it is on the second to last syllable: «casa, amigo, obrigado, tarde». STEP 4: unstressed vowels at the end of a word are weak: the final «e» sounds like a short «ee» («noite» = NOY-tchee) and the final «o» sounds like «oo» («obrigado» ends in «doo»).", {
        tag: 'Pronunciation',
        comparacao: "English has nasal vowels only as a side effect of an «n» or «m» in words like «sing» or «can't». Portuguese uses them to tell words apart: «mama» (she breastfeeds) is not «mamã» (mom, oral variant), «pão» (bread) is not «pau» (stick). Do not add an «n» sound at the end of «bom», «sim» and «não»: just nasalize the vowel.",
        tabela: [
          { spelling: 'ã, õ', how_to_say: 'nasal vowel (the tilde is the nasal mark)', examples: 'maçã, limões, mãe' },
          { spelling: 'ão', how_to_say: 'a nasal «ow»', examples: 'pão, coração, não' },
          { spelling: 'vowel + m or n (before a consonant) or final m', how_to_say: 'nasal vowel', examples: 'bom, sim, um, onde, tempo' },
          { spelling: 'final e', how_to_say: 'weak «ee»', examples: 'noite, tarde, desculpe' },
          { spelling: 'final o', how_to_say: 'weak «oo»', examples: 'tudo, obrigado, logo' },
        ],
        erros: [['saying «NOW-n» or «NOWN» for «não»', 'NOW~', 'Nasalize the vowel; no clear «n» at the end.'], ['saying «POW-oh» for «pão»', 'POW~', 'The word has one syllable.'], ['saying «BOHM» for «bom» with a clear «m»', 'BOH~', 'Close the vowel with the nose, not with the lips.']],
      }),
      gramatica(9, 'Consonants: r, lh, nh, t and d before i, final l, j and x', "STEP 1: the letter «r» has two sounds. At the beginning of a word, after «n», «l» or «s», and when it is written «rr», it is an «h»-like sound, a little rough in some regions: «rua» (HOO-ah), «carro» (KAH-hoo). Between vowels, it is a quick tap, like the «tt» in American «butter»: «caro» (KAH-roo), «hora» (OH-rah). STEP 2: «lh» sounds like «ly» («filho»), «nh» like «ny» («nenhum», «amanhã»). STEP 3: in most of Brazil «t» before «i» and «d» before «i» become «tch» and «dj»: «tia» (TCHEE-ah), «dia» (DJEE-ah), «noite» (NOY-tchee), «grande» (GRAH~-djee). The same happens before a final unstressed «e» that sounds like «i». STEP 4: a final «l» sounds like «oo»: «Brasil» (brah-ZEE-oo), «hotel» (oh-TEH-oo). STEP 5: «j» and «g» before «e» or «i» are «zh» as in «measure»: «hoje», «gente». «x» and «ch» are «sh»: «xícara», «chá». «s» between vowels is «z»: «casa» (KAH-zah). «c» before e or i is «s»: «cedo».", {
        tag: 'Pronunciation',
        comparacao: "You already make most of these sounds in English: «zh» in «measure», «sh», the tap in «butter», the «tch» in «church». The surprises are the rough «h» for the «r», the «dj» and «tch» before «i», and the «oo» at the end of «Brasil». These are not regional accents: you will hear them in São Paulo, Rio, Belo Horizonte and Salvador.",
        tabela: [
          { spelling: 'r at the start, rr', sound: 'h-like', example: 'rua, carro, Rio' },
          { spelling: 'r between vowels', sound: 'quick tap', example: 'caro, hora, obrigado' },
          { spelling: 'lh', sound: 'ly', example: 'filho, trabalho, olho' },
          { spelling: 'nh', sound: 'ny', example: 'amanhã, nenhum, vinho' },
          { spelling: 'ti, di (and final -te, -de as «i»)', sound: 'tchi, dji', example: 'tia, dia, noite, grande' },
          { spelling: 'final l', sound: 'oo', example: 'Brasil, hotel, total' },
          { spelling: 'j; g before e, i', sound: 'zh', example: 'hoje, gente, gelado' },
          { spelling: 'x, ch', sound: 'sh', example: 'xícara, chá, chuva' },
          { spelling: 's between vowels', sound: 'z', example: 'casa, mesa, rosa' },
        ],
        erros: [['saying «ROO-ah» with an English «r» for «rua»', 'HOO-ah', 'The initial «r» is closer to an English «h».'], ['saying «FEE-lee-oh» for «filho»', 'FEE-lyoo', '«lh» is one sound, «ly».'], ['saying «brah-ZEEL» with a clear «l» for «Brasil»', 'brah-ZEE-oo', 'The final «l» sounds like «oo».']],
      }),
      producao(4, 'Read aloud, slowly: «A rua é grande. O filho de Marina trabalha hoje no hotel. A xícara é cara.» Check the «r», the «lh», the «dj» in «grande» and the final «l» in «hotel».'),
    ]),
    sessao('S4', 'Review and practice of lesson 1', [
      revisao(5, 'Say three greetings, thank someone, spell your name, and read aloud: «não, pão, mãe, rua, carro, filho, dia, Brasil».'),
      exercicios(20, [
        ouvir('Bom dia', ['Bom dia', 'Boa tarde', 'Boa noite'], 'Bom dia', 'Listen to the nasal «bom» and the «dj» in «dia».'), ouvir('Boa noite', ['Boa noite', 'Bom dia', 'Boa tarde'], 'Boa noite', 'The final «te» sounds like «tchee».'), ouvir('Tudo bem?', ['Tudo bem?', 'Tudo bom?', 'Tudo mal?'], 'Tudo bem?', 'The nasal «bem» ends the question.'), ouvir('Obrigada', ['Obrigada', 'Obrigado', 'De nada'], 'Obrigada', 'A woman says «obrigada».'),
        ouvir('pão', ['pão', 'pau', 'mão'], 'pão', 'Nasal «ão»: one syllable.'), ouvir('filho', ['filho', 'fio', 'filha'], 'filho', 'The «lh» sounds like «ly».'), ouvir('Brasil', ['Brasil', 'Brasa', 'Brasília'], 'Brasil', 'The final «l» sounds like «oo».'),
        ditado('Boa tarde', 'Write: Boa tarde.'), ditado('Tudo bem', 'Write: Tudo bem.'), ditado('Até logo', 'Write: Até logo.'),
        mc('You arrive at a shop at 3 p.m. What do you say?', ['Boa tarde', 'Bom dia', 'Boa noite'], 'Boa tarde', '«Boa tarde» is used from noon until dusk.'),
        mc('A woman thanks someone. What does she say?', ['Obrigada', 'Obrigado', 'Obrigadas'], 'Obrigada', 'The ending follows the person who speaks.'),
        mc('Which word means «please»?', ['por favor', 'de nada', 'desculpe'], 'por favor', '«De nada» is «you\'re welcome» and «desculpe» is «sorry».'),
        mc('What is the name of the letter «g» in Portuguese?', ['gê', 'jota', 'agá'], 'gê', '«Gê» sounds like «zhay».'),
        mc('Which sound does the final «l» of «Brasil» make?', ['oo', 'l as in English', 'silent'], 'oo', 'The final «l» sounds like «oo».'),
        mc('Which is the stressed syllable in «obrigado»?', ['ga', 'o', 'do'], 'ga', 'Without an accent mark, words ending in a vowel are stressed on the second to last syllable.'),
        lacuna('___ dia! (good, with dia)', ['Bom', 'Boa', 'Bem'], 'Bom', '«Dia» is masculine: «bom dia».'), lacuna('___ noite! (good, with noite)', ['Boa', 'Bom', 'Bem'], 'Boa', '«Noite» is feminine: «boa noite».'),
        lacuna('Tudo ___ , e você?', ['bem', 'bom', 'boa'], 'bem', 'The fixed answer is «tudo bem».'), lacuna('A woman says: ___ !', ['Obrigada', 'Obrigado', 'Obrigados'], 'Obrigada', 'A woman thanks with «obrigada».'),
        ordem('Put in order: «Tudo bem, e você?»', ['Tudo', 'bem,', 'e', 'você?'], 'Tudo bem, e você?', 'The usual answer plus a question back.'), ordem('Put in order: «Até logo!»', ['Até', 'logo!'], 'Até logo!', 'A set phrase for «see you soon».'),
        livre('Write in Portuguese: Good morning! How are you? Thank you. Bye.', 'Bom dia! Tudo bem? Obrigado. Tchau.'),
      ]),
      producao(5, 'Have a short conversation with an imaginary person: greet them, ask «tudo bem?», answer, thank them and say goodbye. Spell your name at the end.'),
    ]),
  ],
});
