import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 6, titulo: 'Present of -er and -ir verbs', nivel: 'a1',
  objetivo: 'Conjugate regular verbs in «-er» and «-ir» in the present, tell the three verb families apart, talk about what you eat, drink, learn, write and watch, and avoid the false friend «assistir».',
  nota: 'You can now use the three families of regular verbs (-ar, -er, -ir) in the present, in statements, negatives and questions. Next lesson: family and possessives (meu, minha, seu, sua, dele, dela).',
  sessoes: [
    sessao('S1', 'Regular verbs in -er', [
      revisao(5, 'Conjugate «falar», «morar» and «trabalhar» aloud with all the persons. Then make three sentences with «-ar» verbs and one negative: «Eu não falo alemão».'),
      palavras(8, [
        ['comer', 'koh-MEHR', 'to eat', ''], ['beber', 'beh-BEHR', 'to drink', ''], ['vender', 'veh~-DEHR', 'to sell', ''], ['aprender', 'ah-preh~-DEHR', 'to learn', ''],
        ['escrever', 'ees-kreh-VEHR', 'to write', ''], ['viver', 'vee-VEHR', 'to live (to be alive; also to live in a place)', ''], ['correr', 'koh-HEHR', 'to run', ''], ['responder', 'hees-poh~-DEHR', 'to answer', ''],
      ]),
      gramatica(12, 'The present of regular «-er» verbs', "STEP 1: the second family of verbs ends in «-er». The endings are almost the same as for «-ar» verbs, but with an «e» instead of an «a». STEP 2: remove «-er» and add: eu com-o, você com-e, ele/ela com-e, a gente com-e, nós com-emos, vocês com-em, eles/elas com-em. STEP 3: compare with the «-ar» endings from lesson 4 («-o, -a, -a, -a, -amos, -am»). The «eu» form always ends in «-o». In the third person singular the vowel changes: «-ar» → «-a», «-er» → «-e». STEP 4: stress. In «come» and «comem», the stress is on the stem: «KOH-meh», «KOH-meh~ee». The ending «-em» sounds like a weak nasal «eh~ee». Only «comemos» is stressed on the ending: «koh-MEH-moos». STEP 5: the negative and the questions work as in lesson 4: «Eu não bebo café», «Você come carne?», «O que vocês bebem?». STEP 6: when the infinitive has «rr» or the stem ends in «-c», the spelling is as it is: «correr → eu corro», «vender → eu vendo». Some very common «-er» verbs are irregular (for example «ser», «ter», «ver», «poder», «fazer»). You have already met «ser» and «ter». The others come in later lessons, so for now only use the regular verbs from this lesson.", {
        tag: 'Verbs',
        comparacao: "English uses the base verb for I, you, we, they and adds «-s» for he/she: «I eat, he eats». Portuguese changes the ending for each person: «como, come, comemos, comem». In spoken Brazilian Portuguese you will also hear «a gente come» instead of «nós comemos». The typical confusion for English speakers is mixing the vowels: in the third person singular, «-ar» verbs use «-a» and «-er» verbs use «-e».",
        tabela: [
          { person: 'eu', comer: 'como', beber: 'bebo', vender: 'vendo' },
          { person: 'você, ele, ela, a gente', comer: 'come', beber: 'bebe', vender: 'vende' },
          { person: 'nós', comer: 'comemos', beber: 'bebemos', vender: 'vendemos' },
          { person: 'vocês, eles, elas', comer: 'comem', beber: 'bebem', vender: 'vendem' },
        ],
        exemplos: [
          ['Eu como pão e bebo café.', 'I eat bread and drink coffee.'], ['Ela vende livros.', 'She sells books.'], ['A gente aprende português.', 'We learn Portuguese.'], ['Eles correm todo dia.', 'They run every day.'], ['Você escreve bem!', 'You write well!'],
        ],
        erros: [['Eu comer pão.', 'Eu como pão.', 'After a subject, conjugate: do not use the infinitive.'], ['Nós comem pão.', 'Nós comemos pão.', '«Nós» takes «-emos».'], ['Eles come pão.', 'Eles comem pão.', 'The plural takes «-em».'], ['Ela bebo água.', 'Ela bebe água.', '«-o» is only for «eu». For «ela» the ending is «-e».']],
      }),
      producao(5, 'Say what you eat and drink every day, using «como, bebo, aprendo, escrevo, corro, vendo» in six sentences. Then say what a friend does with «ele/ela» and what you do together with «a gente».'),
    ]),
    sessao('S2', 'Regular verbs in -ir', [
      revisao(4, 'Conjugate «comer» and «beber» aloud with all the persons. Say two negative sentences with «não» and one with «nunca».'),
      palavras(6, [
        ['abrir', 'ah-BREER', 'to open', ''], ['assistir', 'ah-sees-TCHEER', 'to watch (a movie, TV)', ''], ['decidir', 'deh-see-DJEER', 'to decide', ''], ['dividir', 'djee-vee-DJEER', 'to share, to divide', ''],
        ['subir', 'soo-BEER', 'to go up', ''], ['partir', 'par-TCHEER', 'to leave, to depart', ''], ['a porta', 'ah POR-tah', 'the door', ''], ['a janela', 'ah zhah-NEH-lah', 'the window', ''], ['o filme', 'oo FEE-oo-mee', 'the movie', ''],
      ]),
      gramatica(12, 'The present of regular «-ir» verbs and the false friend «assistir»', "STEP 1: the third family ends in «-ir». The endings are the same as «-er» except for «nós»: eu abr-o, você abr-e, ele/ela abr-e, a gente abr-e, nós abr-imos, vocês abr-em, eles/elas abr-em. STEP 2: so you only have to remember that «nós» ends in «-imos» in this family and «-emos» in the «-er» family. STEP 3: the three families side by side: «-ar» (-o, -a, -amos, -am), «-er» (-o, -e, -emos, -em) and «-ir» (-o, -e, -imos, -em). Look at the infinitive first. STEP 4: stress: «abre», «abrem» are stressed on the stem («AH-bree», «AH-breh~ee»); «abrimos» is stressed on «-ri». STEP 5: «assistir» is a false friend. It means «to watch» (a movie, a game, a series), not «to assist». To help someone you say «ajudar». «Eu assisto filmes» = I watch movies. In everyday speech you will hear «assistir a filme» less than «assistir filme». STEP 6: a few small spelling points. Verbs with «g» before the «o» ending change it to «j» to keep the sound: «dirigir → eu dirijo»; verbs with «c» in the same position may take «ç»: «esquecer → eu esqueço». You will see them later. STEP 7: not every verb in «-ir» is regular. Common ones like «ouvir, dormir, sair, vir, ir, pedir» have irregular «eu» forms and are taught in the next lessons, so use them only when a lesson introduces them. In this lesson, stay with the regular ones.", {
        tag: 'Verbs',
        comparacao: "English speakers can hear «assistir» as «assist». In Portuguese it means «watch»: «Eu assisto TV». The English «to assist» is «ajudar». Another false friend is «realizar» (to carry out, to accomplish), which does not mean «to realize». Both families «-er» and «-ir» are easy for English speakers: only «nós» differs.",
        tabela: [
          { person: 'eu', falar: 'falo', comer: 'como', abrir: 'abro' },
          { person: 'você, ele, ela, a gente', falar: 'fala', comer: 'come', abrir: 'abre' },
          { person: 'nós', falar: 'falamos', comer: 'comemos', abrir: 'abrimos' },
          { person: 'vocês, eles, elas', falar: 'falam', comer: 'comem', abrir: 'abrem' },
        ],
        erros: [['Eu assisto Pedro. (meaning: I help Pedro)', 'Eu ajudo Pedro.', '«Assistir» means «to watch». Use «ajudar» for «to help».'], ['Nós abremos a porta.', 'Nós abrimos a porta.', 'In the «-ir» family «nós» ends in «-imos».'], ['Eles abre a janela.', 'Eles abrem a janela.', 'The plural ends in «-em».'], ['Nós decidemos.', 'Nós decidimos.', 'Verb «decidir» is an «-ir» verb: «decidimos».']],
      }),
      dialogo(4, 'Movie night', 'Larissa and Gustavo decide what to do on Friday night.', [
        ['Larissa', 'Gustavo, você assiste filmes?', 'Gustavo, do you watch movies?'], ['Gustavo', 'Assisto, sim! Todo dia.', 'Yes, I do! Every day.'], ['Larissa', 'Hoje a gente assiste um filme com Pedro?', 'Today, shall we watch a movie with Pedro?'],
        ['Gustavo', 'Legal! Quem decide?', 'Cool! Who decides?'], ['Larissa', 'Você decide, e eu abro o computador.', 'You decide, and I open the computer.'], ['Gustavo', 'Tudo bem. Eu também divido a pipoca!', 'Fine. I also share the popcorn! (pipoca: popcorn, a movie-night classic in Brazil)'],
      ]),
      producao(4, 'Say what you open, watch, decide and share every week: «Eu abro…, eu assisto…, eu decido…, a gente divide…». Say two sentences with «nós».'),
    ]),
    sessao('S3', 'All three families together', [
      revisao(4, 'Conjugate «abrir» aloud. Then make three sentences, one with a verb of each family: «Eu falo…, eu como…, eu abro…».'),
      palavras(5, [
        ['o arroz', 'oo ah-HOHS', 'rice', ''], ['o feijão', 'oo fay-ZHOW~', 'beans', ''], ['a água', 'ah AH-gwah', 'water', ''], ['o suco', 'oo SOO-koo', 'juice', ''], ['a fruta', 'ah FROO-tah', 'fruit', ''],
        ['a carne', 'ah KAR-nee', 'meat', ''], ['o leite', 'oo LAY-tchee', 'milk', ''], ['ou', 'OH', 'or', ''], ['almoçar', 'ah-oo-moh-SAR', 'to have lunch', ''], ['jantar', 'zhah~-TAR', 'to have dinner', ''],
      ]),
      gramatica(8, 'Putting it together: eating and drinking in Brazil', "STEP 1: first look at the infinitive, then choose the endings. For «-ar» verbs the third person is «-a» (almoça, janta), for «-er» and «-ir» it is «-e» (come, bebe, abre). The verb «almoçar» (to have lunch) and «jantar» (to have dinner) are «-ar» verbs: «Eu almoço aqui», «Ela janta em casa». STEP 2: with food, use «comer» for solid food and «beber» or «tomar» for drinks: «Eu como pão», «Eu bebo suco», «Eu tomo café». In Brazil «tomar» is very common with coffee, juice and milk. STEP 3: «com» means with and «sem» means without: «café com leite», «pão com queijo», «café sem leite». «Ou» is the word for «or»: «Você bebe café ou suco?». STEP 4: «muito» and «pouco» go after the verb to say «a lot» and «little»: «Eu como muito», «Ela bebe pouco café». STEP 5: if you do not eat meat, say «Eu não como carne». It is a useful sentence in restaurants. STEP 6: culture. For many Brazilians the main meal of the day is lunch, often rice and beans with some meat, salad and a side dish. «Arroz com feijão» is the base of the plate in most regions, and in city centers there are many restaurants where you serve yourself and pay by the weight of the plate («comida por quilo»). Dinner is usually lighter. Breakfast is called «café da manhã», and in Portugal it is «pequeno-almoço».", {
        tag: 'Food',
        comparacao: "English has «to have» for meals («have lunch», «have a coffee»). Portuguese has real verbs: «almoçar» (to have lunch), «jantar» (to have dinner) and «tomar café». You can say «Eu almoço» without anything else. You cannot say «Eu tenho almoço» for the meal.",
        tabela: [
          { verb: 'comer', family: '-er', example: 'Eu como arroz e feijão.' },
          { verb: 'beber / tomar', family: '-er / -ar', example: 'Ela bebe suco. Eu tomo café.' },
          { verb: 'almoçar', family: '-ar', example: 'A gente almoça aqui.' },
          { verb: 'jantar', family: '-ar', example: 'Eles jantam em casa.' },
          { verb: 'abrir', family: '-ir', example: 'Nós abrimos a janela.' },
        ],
        erros: [['Eu como café.', 'Eu bebo café. / Eu tomo café.', 'Coffee is a drink: use «beber» or «tomar», not «comer».'], ['Ela almoçe em casa.', 'Ela almoça em casa.', '«Almoçar» is an «-ar» verb, so the third person ends in «-a».'], ['A gente comemos arroz.', 'A gente come arroz. / Nós comemos arroz.', '«A gente» takes the «ele/ela» form.'], ['Vocês bebe suco.', 'Vocês bebem suco.', '«Vocês» is plural: «bebem».']],
      }),
      texto(8, 'A day of eating and learning', 'Eu sou Lucas e moro em São Paulo. De manhã eu bebo café com leite e como pão com queijo. Eu almoço arroz, feijão e carne, e bebo suco. De noite eu janto fruta ou pão. Eu nunca como carne de noite. A gente aprende português todo dia: eu escrevo as palavras novas.', "I am Lucas and I live in São Paulo. In the morning I drink coffee with milk and eat bread with cheese. For lunch I have rice, beans and meat, and I drink juice. At night I have dinner with fruit or bread. I never eat meat at night. We learn Portuguese every day: I write the new words.", [
        ['What does Lucas drink in the morning?', 'Ele bebe café com leite.'], ['What does he eat for lunch?', 'Ele almoça arroz, feijão e carne.'], ['Does Lucas eat meat at night?', 'Não, ele nunca come carne de noite.'], ['What does he write every day?', 'Ele escreve as palavras novas.'],
      ]),
      producao(5, 'Describe your meals of one day out loud: what you eat and drink in the morning, at lunch and at night. Use «com», «sem», «ou», «nunca» and at least one verb of each family.'),
    ]),
    sessao('S4', 'Review and practice of lesson 6', [
      revisao(5, 'Conjugate «beber» and «abrir» aloud with all the persons. Then ask a friend what they eat and drink in the morning, answer, and say one thing you never do.'),
      exercicios(20, [
        ouvir('Eu como arroz e feijão', ['Eu como arroz e feijão', 'Eu como arroz e carne', 'Eu bebo arroz e feijão'], 'Eu como arroz e feijão', '«Como» is «I eat».'), ouvir('Nós abrimos a janela', ['Nós abrimos a janela', 'Nós abremos a janela', 'Nós abrem a janela'], 'Nós abrimos a janela', '«-imos» in the «-ir» family.'),
        ouvir('Eles bebem suco', ['Eles bebem suco', 'Ele bebe suco', 'Eles bebemos suco'], 'Eles bebem suco', 'Plural: «-em».'), ouvir('Você assiste filmes?', ['Você assiste filmes?', 'Você ajuda filmes?', 'Você assiste a Pedro?'], 'Você assiste filmes?', '«Assistir» means to watch.'),
        ouvir('A gente aprende todo dia', ['A gente aprende todo dia', 'A gente aprendemos todo dia', 'A gente aprendo todo dia'], 'A gente aprende todo dia', '«A gente» takes the third person.'), ouvir('Ela escreve bem', ['Ela escreve bem', 'Ela escrevo bem', 'Elas escrevem bem'], 'Ela escreve bem', 'Third person singular: «-e».'),
        ditado('Eu bebo água todo dia', 'Write: Eu bebo água todo dia.'), ditado('Vocês vendem frutas', 'Write: Vocês vendem frutas.'), ditado('Nós decidimos hoje', 'Write: Nós decidimos hoje.'),
        mc('What is the «eu» form of «beber»?', ['bebo', 'bebe', 'beber'], 'bebo', 'The «eu» form always ends in «-o».'), mc('What is the «nós» form of «abrir»?', ['abrimos', 'abremos', 'abramos'], 'abrimos', 'The «-ir» family has «-imos».'),
        mc('What does «assistir» mean?', ['to watch', 'to help', 'to answer'], 'to watch', '«Assistir» is a false friend: it does not mean to assist.'), mc('How do you say «to help»?', ['ajudar', 'assistir', 'responder'], 'ajudar', '«Ajudar» is to help.'),
        mc('Which verb goes with «café» in everyday speech?', ['tomar or beber', 'comer', 'vender'], 'tomar or beber', 'Coffee is a drink: tomar or beber.'), mc('What does «café com leite» mean?', ['coffee with milk', 'coffee without milk', 'milk or coffee'], 'coffee with milk', '«Com» is with, «sem» is without.'),
        lacuna('Eu ___ pão. (comer)', ['como', 'come', 'comem'], 'como', '«Eu» takes «-o».'), lacuna('Ela ___ a porta. (abrir)', ['abre', 'abro', 'abrem'], 'abre', 'Third person singular: «-e».'),
        lacuna('Vocês ___ filmes. (assistir)', ['assistem', 'assiste', 'assistimos'], 'assistem', 'Plural: «-em».'), lacuna('Nós ___ português todo dia. (aprender)', ['aprendemos', 'aprendimos', 'aprendem'], 'aprendemos', '«Aprender» is an «-er» verb: «-emos».'),
        ordem('Put in order: «Eu nunca como carne de noite.»', ['Eu', 'nunca', 'como', 'carne', 'de', 'noite.'], 'Eu nunca como carne de noite.', '«Nunca» goes before the verb.'), ordem('Put in order: «Você bebe café ou suco?»', ['Você', 'bebe', 'café', 'ou', 'suco?'], 'Você bebe café ou suco?', 'A question with «ou».'),
        livre('Write in Portuguese: I eat rice and beans and drink juice. I do not eat meat.', 'Eu como arroz e feijão e bebo suco. Eu não como carne.'),
        livre('Write in Portuguese: We open the door and watch a movie.', 'A gente abre a porta e assiste um filme. / Nós abrimos a porta e assistimos um filme.'),
      ]),
      producao(5, 'Tell an imaginary friend about your week: what you eat and drink, what you learn, what you watch, what you write and what you never do. Use verbs from the three families.'),
    ]),
  ],
});
