import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 10, titulo: 'Estar, location and contractions (no, na)', nivel: 'a1',
  objetivo: 'Use «estar» to say how you feel and where people and things are, choose between «ser» and «estar», and use the contractions «no, na, nos, nas, do, da, dos, das» with places.',
  nota: 'You can say how you are, where you are and where things are, and you can tell «ser» from «estar». Next lesson: the city, asking for directions with «onde fica…?» and giving simple directions.',
  sessoes: [
    sessao('S1', 'The verb «estar»: how you are and how you feel', [
      revisao(5, 'Tell the time and the date out loud: «São… Hoje é dia… de…». Then say the days of the week in order and ask a friend «Que dia é hoje?».'),
      palavras(8, [
        ['estar', 'ehs-TAR', 'to be (state, feeling, location)', ''], ['como você está?', 'KOH-moo voh-SEH ehs-TAH', 'how are you? (right now)', ''], ['bem', 'BEH~ee', 'well, fine', ''], ['mal', 'MAH-oo', 'badly, not well', ''],
        ['cansado, cansada', 'kah~-SAH-doo, kah~-SAH-dah', 'tired', ''], ['ocupado, ocupada', 'oh-koo-PAH-doo, oh-koo-PAH-dah', 'busy', ''], ['doente', 'doh-EH~-tchee', 'sick, ill', ''], ['feliz', 'feh-LEESS', 'happy', ''],
        ['triste', 'TREES-tchee', 'sad', ''], ['contente', 'koh~-TEH~-tchee', 'glad, pleased', ''],
      ]),
      gramatica(12, 'The present of «estar» and the first uses', "STEP 1: Portuguese has two verbs for «to be»: «ser» (lesson 2) and «estar». Today you learn «estar». It is used for states (how someone is at this moment), feelings and the place where a person or a thing is. STEP 2: the present of «estar» is irregular only in the first person. Eu estou, você está, ele está, ela está, nós estamos, a gente está, vocês estão, eles estão, elas estão. Notice the accent on «está» and the nasal «estão». STEP 3: to ask how someone is right now say «Como você está?». The answer is «Estou bem» (I am fine), «Estou cansado» (I am tired), «Estou ocupada» (I am busy). Adjectives agree with the person: a man says «cansado», a woman says «cansada»; for a group of men or a mixed group: «cansados». STEP 4: «tudo bem?» (lesson 1) is the most common greeting; «como você está?» asks a bit more about the moment. STEP 5: in fast speech the forms shorten a lot: «estou» becomes «tô», «está» becomes «tá», «estamos» is often «tamo» or «a gente tá», and «estão» becomes «tão». So you will hear «Tô cansado», «Tá bem», «A gente tá aqui». «Tá» is also the all-purpose «OK»: «Tá bom!». In writing, and in class, learn «estou, está, estamos, estão» first. STEP 6: negation goes before the verb, as always: «Eu não estou cansado.» STEP 7: pronunciation: the stress of «está» is on the last syllable (eh-STAH) and «estou» (eh-STOH); «estamos» has the stress on the second syllable (eh-STAH-moos).", {
        tag: 'Verbs',
        comparacao: "In English one verb does everything: «I am tired», «I am a teacher», «I am in São Paulo». Portuguese splits it: «estou cansado» (state), «sou professor» (identity), «estou em São Paulo» (place). Think of «estar» as «to be, right now», and of «ser» as «to be, in essence».",
        tabela: [
          { person: 'eu', form: 'estou', example: 'Eu estou bem.' },
          { person: 'você, ele, ela', form: 'está', example: 'Ela está cansada.' },
          { person: 'nós / a gente', form: 'estamos / está', example: 'Nós estamos felizes. A gente está feliz.' },
          { person: 'vocês, eles, elas', form: 'estão', example: 'Eles estão ocupados.' },
          { person: 'spoken form', form: 'tô, tá, tamo, tão', example: 'Tô cansado. Tá bom.' },
        ],
        erros: [['Eu sou cansado.', 'Eu estou cansado.', 'A temporary state takes «estar», not «ser».'], ['Ela é doente hoje.', 'Ela está doente hoje.', 'Being sick now is a state: «está doente».'], ['Eu esto bem.', 'Eu estou bem.', 'The first person is «estou».'], ['Ela esta cansada.', 'Ela está cansada.', 'The accent on «está» is part of the spelling. Without it, «esta» means «this» (feminine).']],
      }),
      producao(5, 'Answer out loud for yourself: «Como você está?» Then say how you are with three different words, for example «Estou bem, estou ocupado e estou cansado», and ask the question back: «E você?».'),
    ]),
    sessao('S2', 'Where things are: places and contractions', [
      revisao(4, 'Conjugate «estar» without looking: eu estou, você está, nós estamos, vocês estão. Say two sentences with a feeling and the name of the person: «Marina está cansada».'),
      palavras(6, [
        ['aqui', 'ah-KEE', 'here', ''], ['ali', 'ah-LEE', 'there (a short distance)', ''], ['lá', 'LAH', 'over there (far)', ''], ['perto de', 'PEHR-too djee', 'near', ''], ['longe de', 'LOH~-zhee djee', 'far from', ''], ['ao lado de', 'ow LAH-doo djee', 'next to', ''],
        ['em frente a', 'eh~ FREH~-tchee ah', 'in front of, opposite', ''], ['atrás de', 'ah-TRAHZ djee', 'behind', ''], ['em cima de', 'eh~ SEE-mah djee', 'on top of, above', ''], ['embaixo de', 'eh~-BY-shoo djee', 'under', ''], ['dentro de', 'DEH~-troo djee', 'inside', ''], ['entre', 'EH~-tree', 'between', ''],
      ]),
      gramatica(12, 'The contractions «no, na, nos, nas» and «do, da, dos, das»', "STEP 1: the little word «em» means in, on or at. The word «de» means of or from. When they meet a definite article (o, a, os, as), they merge into one word. This is not optional: in Portuguese, you must write and say the merged form. STEP 2: em + o = no, em + a = na, em + os = nos, em + as = nas. «O livro está no carro.» «Estou na padaria.» «As chaves estão nas bolsas.» (O livro is the book, as chaves the keys, a bolsa the bag.) STEP 3: de + o = do, de + a = da, de + os = dos, de + as = das. «O banco é do Marcos.» «Sou da Inglaterra.» «Estou perto do hotel.» STEP 4: with «um» and «uma» the merged forms are «num» and «numa» (em + um/uma): «Estou numa festa.» You will hear them in speech; «em um/em uma» is also correct. STEP 5: the prepositions of place (perto de, longe de, ao lado de, atrás de, em cima de, embaixo de, dentro de) all end in «de», so they merge with the article: «perto do hotel», «ao lado da escola», «atrás da casa», «em cima da mesa», «embaixo do carro». For «em frente a» the merged forms are «ao» and «à»: «em frente ao banco», «em frente à escola». STEP 6: cities and some countries take no article: «Estou em São Paulo», «em Portugal», «em Cuba». Most countries do: «no Brasil», «nos Estados Unidos», «na Argentina», «na Inglaterra». The same pattern applies to origin: «Sou de São Paulo», «Sou do Brasil», «Sou da Alemanha». STEP 7: «em casa» (at home) and «em casa de alguém» take no article: «Estou em casa.» «Estou em casa de Ana.» Also: «Estou no trabalho» and «Estou na escola», with article. STEP 8: «aqui» is near me, «ali» is near you or visible, «lá» is far: «O café está ali.» «O Rio é lá.»", {
        tag: 'Contractions',
        comparacao: "English also contracts («don't», «I'm»), but only informally and never forced. In Portuguese the merge «em + o = no» is obligatory in writing and in speech. Think of «no» as one single word, a small «in the», and not as the word «no». Like «in the» and «of the», each has 4 forms: masculine and feminine, singular and plural.",
        tabelas: [
          { titulo: 'em + article', linhas: [
            { article: 'o (masculine)', form: 'no', example: 'Estou no banco.' },
            { article: 'a (feminine)', form: 'na', example: 'Estou na escola.' },
            { article: 'os (masculine plural)', form: 'nos', example: 'Os livros estão nos carros.' },
            { article: 'as (feminine plural)', form: 'nas', example: 'As chaves estão nas bolsas.' },
            { article: 'um / uma', form: 'num / numa', example: 'Estou numa festa.' },
          ] },
          { titulo: 'de + article', linhas: [
            { article: 'o (masculine)', form: 'do', example: 'Sou do Brasil.' },
            { article: 'a (feminine)', form: 'da', example: 'Sou da Alemanha.' },
            { article: 'os (masculine plural)', form: 'dos', example: 'Sou dos Estados Unidos.' },
            { article: 'as (feminine plural)', form: 'das', example: 'As chaves das amigas.' },
          ] },
        ],
        erros: [['Estou em o banco.', 'Estou no banco.', '«Em» + «o» always merges into «no».'], ['Estou perto de a escola.', 'Estou perto da escola.', '«De» + «a» merges into «da».'], ['Sou de o Brasil.', 'Sou do Brasil.', 'Brazil takes an article, so «de o» becomes «do».'], ['Estou no São Paulo.', 'Estou em São Paulo.', 'Most cities take no article, so «em» stays alone.']],
      }),
      producao(8, 'Describe where five things are in the room where you are, using «está» or «estão» and a place word: for example «O telefone está em cima da mesa». Then say where you are now: «Estou em casa» or «Estou no trabalho».'),
    ]),
    sessao('S3', 'Ser or estar? Where is everybody?', [
      revisao(4, 'Say aloud the four forms of «em» + article (no, na, nos, nas) and the four forms of «de» + article (do, da, dos, das), each with a short example. Say where you are with «Estou em…» and «Estou no…».'),
      palavras(5, [
        ['o banco', 'oo BAH~-koo', 'bank (also bench)', ''], ['a rua', 'ah HOO-ah', 'street', ''], ['a mesa', 'ah MEH-zah', 'table', ''], ['a janela', 'ah zhah-NEH-lah', 'window', ''], ['ótimo', 'OH-tchee-moo', 'great, excellent', ''], ['o trabalho', 'oo trah-BAH-lyoo', 'work, workplace', ''], ['a escola', 'ah ehs-KOH-lah', 'school', ''],
      ]),
      gramatica(8, 'Ser or estar? A decision guide', "STEP 1: use «ser» for what something is in essence: identity («Eu sou a Ana»), origin («Sou do Brasil»), profession and nationality («Ele é médico»), characteristics («Ela é simpática»), time and date («São duas horas», «Hoje é terça»), and the place of an event («A festa é no clube»: a festa is the party, o clube the club). STEP 2: use «estar» for states and feelings at the moment («Estou cansado»), for the place where a person or thing is («Ana está no banco», «O livro está na mesa») and for temporary conditions. STEP 3: some adjectives change meaning with the verb: «Ele é feliz» (he is a happy person in general) and «Ele está feliz» (he is happy now). «A sopa é boa» (it is a good soup) and «A sopa está boa» (it tastes good today). STEP 4: ask for the place of something with «Onde está…?» (where is a person or thing) and ask for the place of an event with «Onde é…?»: «Onde está a Ana?», «Onde é a festa?». STEP 5: a short test: if you can replace the verb by «right now» or «at the moment», use «estar»; if you can replace it by «by nature» or «in essence», use «ser». STEP 6: in speech the pronoun is often dropped and «estar» shortens: «Tô no banco» (I am at the bank), «Sou da Bahia» (I am from Bahia).", {
        tag: 'Verbs',
        comparacao: "English «The party is at the club» and «Ana is at the club» use the same «is». In Portuguese the event takes «ser» (A festa é no clube) and the person takes «estar» (Ana está no clube). English also needs context to tell «he is bored» (he feels it) from «he is boring» (he is like that). Portuguese marks the difference with the verb.",
        tabela: [
          { use: 'identity, name', verb: 'ser', example: 'Eu sou a Ana.' },
          { use: 'origin, nationality', verb: 'ser', example: 'Ele é do Brasil.' },
          { use: 'profession', verb: 'ser', example: 'Ela é professora.' },
          { use: 'time and date', verb: 'ser', example: 'São três horas.' },
          { use: 'place of an event', verb: 'ser', example: 'A festa é no clube.' },
          { use: 'state, feeling now', verb: 'estar', example: 'Estou cansada.' },
          { use: 'place of a person or thing', verb: 'estar', example: 'Ana está no banco.' },
        ],
        erros: [['Onde é a Ana?', 'Onde está a Ana?', 'The place of a person takes «estar».'], ['A festa está no clube.', 'A festa é no clube.', 'The place of an event takes «ser».'], ['Ele está médico.', 'Ele é médico.', 'A profession is identity: «ser».'], ['Estou do Brasil.', 'Sou do Brasil.', 'Origin takes «ser».']],
      }),
      dialogo(8, 'On the phone', 'Pedro calls Ana. She is at a café with a friend. Pedro is on his way.', [
        ['Pedro', 'Oi, Ana! Onde você está?', 'Hi, Ana! Where are you?'], ['Ana', 'Oi, Pedro! Estou no café, em frente ao banco. E você?', 'Hi, Pedro! I am at the café, opposite the bank. And you?'], ['Pedro', 'Estou na rua, perto da padaria. A Marina está com você?', 'I am on the street, near the bakery. Is Marina with you?'],
        ['Ana', 'Está, sim. A gente está na mesa perto da janela.', 'She is. We are at the table near the window.'], ['Pedro', 'Ótimo! Estou aí em cinco minutos.', "Great! I'll be there in five minutes."], ['Ana', 'Tá bom! Até logo!', 'OK! See you soon!'], ['Pedro', 'Até logo!', 'See you soon!'],
      ]),
      producao(5, 'Make five sentences that show the difference between the two verbs: two with «ser» (who you are, where you are from) and three with «estar» (how you feel, where you are, where an object is).'),
    ]),
    sessao('S4', 'Review and practice of lesson 10', [
      revisao(5, 'Conjugate «estar», then say how you feel and where you are. Say three sentences with «no», «na», «do» or «da».'),
      exercicios(20, [
        ouvir('Eu estou cansada.', ['Eu estou cansada.', 'Eu estou cansado.', 'Eu sou cansada.'], 'Eu estou cansada.', 'The speaker is a woman: «cansada».'),
        ouvir('Ele está no banco.', ['Ele está no banco.', 'Ele está na banca.', 'Ele é no banco.'], 'Ele está no banco.', '«No» is the contraction of «em» + «o».'),
        ouvir('Onde você está?', ['Onde você está?', 'Onde você é?', 'Como você está?'], 'Onde você está?', 'Place of a person: «onde… está».'),
        ouvir('A casa está perto da escola.', ['A casa está perto da escola.', 'A casa está perto do hotel.', 'A casa está longe da escola.'], 'A casa está perto da escola.', 'Listen for «perto» and «da escola».'),
        ouvir('Eles estão ocupados.', ['Eles estão ocupados.', 'Eles estão cansados.', 'Eles são ocupados.'], 'Eles estão ocupados.', '«Estão» is nasal.'),
        ouvir('Tô bem, e você?', ['Tô bem, e você?', 'Tô mal, e você?', 'Tá bom, e você?'], 'Tô bem, e você?', '«Tô» is the spoken form of «estou».'),
        ditado('Estou em casa.', 'Write: Estou em casa.'), ditado('A mesa está perto da janela.', 'Write: A mesa está perto da janela.'), ditado('Ela é do Brasil.', 'Write: Ela é do Brasil.'), ditado('Nós estamos felizes.', 'Write: Nós estamos felizes.'),
        mc('A woman says she is tired. What does she say?', ['Estou cansada.', 'Sou cansada.', 'Estou cansado.'], 'Estou cansada.', 'State: «estar»; feminine speaker: «cansada».'),
        mc('Which verb do you use for the place of a person?', ['estar', 'ser', 'ter'], 'estar', '«Ana está no banco.»'),
        mc('Which verb do you use for the place of an event?', ['ser', 'estar', 'ter'], 'ser', '«A festa é no clube.»'),
        mc('What does «em + as» become?', ['nas', 'das', 'nos'], 'nas', 'em + as = nas.'),
        mc('How do you say «behind the school»?', ['atrás da escola', 'atrás de a escola', 'atrás na escola'], 'atrás da escola', '«De» + «a» = «da».'),
        lacuna('Eu ___ cansado.', ['estou', 'sou', 'está'], 'estou', 'State, first person: «estou».'),
        lacuna('Ana ___ no café.', ['está', 'é', 'estou'], 'está', 'Place of a person: «está».'),
        lacuna('Estou ___ banco. (in the)', ['no', 'na', 'em o'], 'no', '«Banco» is masculine: «no banco».'),
        lacuna('Ela é ___ Alemanha. (from the)', ['da', 'do', 'de a'], 'da', 'Origin: «de» + «a» = «da».'),
        ordem('Put in order: «O livro está em cima da mesa.»', ['O', 'livro', 'está', 'em', 'cima', 'da', 'mesa.'], 'O livro está em cima da mesa.', 'Subject, está, place word, contraction, noun.'),
        ordem('Put in order: «Onde você está agora?»', ['Onde', 'você', 'está', 'agora?'], 'Onde você está agora?', 'Where + you + are + now.'),
        livre('Write in Portuguese: I am at home. Marina is at the bank. We are tired.', 'Estou em casa. A Marina está no banco. Nós estamos cansados.'),
        livre('Write in Portuguese: The party is at the club. The keys are on the table.', 'A festa é no clube. As chaves estão em cima da mesa.'),
      ]),
      producao(5, 'Phone an imaginary friend: ask where they are, say where you are, say how you feel and what is next to you.'),
    ]),
  ],
});
