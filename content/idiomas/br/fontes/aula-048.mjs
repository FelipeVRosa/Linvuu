import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 48, titulo: 'Indirect speech', nivel: 'b1',
  objetivo: 'Report what someone said, asked or requested («ela disse que estava cansada», «ele perguntou se eu morava aqui», «pediu que eu esperasse»), adjusting tenses, pronouns and time words.',
  nota: 'You can now retell a conversation in the past: statements, questions and requests, with the right tense shifts and with the everyday spoken shortcuts. Next lesson: the passive voice and the constructions with «se».',
  sessoes: [
    sessao('S1', 'Reporting what someone said', [
      revisao(5, 'Say the imperfect of «estar», «ter», «morar» and «ir» for «eu» and «ele»: estava, tinha, morava, ia. Then say the futuro do pretérito of «chegar», «fazer» and «ir»: chegaria, faria, iria.'),
      palavras(8, [
        ['contar', 'kohn-TAR', 'to tell (a story), to say', ''], ['explicar', '', 'to explain', ''], ['avisar', '', 'to let know, to warn', ''], ['responder', '', 'to answer', ''],
        ['naquele dia', '', 'on that day', ''], ['no dia seguinte', '', 'the next day', ''], ['no dia anterior, na véspera', '', 'the day before', ''], ['naquele momento', '', 'at that moment', ''],
      ]),
      gramatica(12, 'Ele disse que estava cansado', "STEP 1: direct speech repeats the exact words: «Ana disse: \"Estou cansada.\"» Indirect speech reports the content without quotation marks, joined by «que»: «Ana disse que estava cansada.» STEP 2: the most common reporting verbs are «dizer», «falar», «contar», «explicar», «avisar» and «responder». «Dizer que» and «falar que» are the everyday pair. STEP 3: when the reporting verb is in the past, the tenses move one step back: present becomes imperfect («estou» to «estava»); «vou + infinitive» becomes «ia + infinitive»; the future becomes the futuro do pretérito («chegarei» to «chegaria»); the preterite becomes «tinha + participle» (in speech the preterite often stays: «disse que chegou»); the imperfect stays the imperfect. STEP 4: pronouns and possessives follow the new point of view: Ana says «Eu moro aqui», and you report «Ana disse que morava lá». Time and place words change too: «hoje» becomes «naquele dia», «ontem» becomes «no dia anterior» or «na véspera», «amanhã» becomes «no dia seguinte», «agora» becomes «naquele momento», «aqui» becomes «lá» or «ali», «este» becomes «aquele». STEP 5: honest rule of thumb: if you report something right away, or it is still true, Brazilians keep the original tense: «Ana disse que está cansada», «Ele disse que chega amanhã». The tense shift is the rule when you narrate a story that is finished. STEP 6: there is no comma, no colon and no quotation mark before «que», and «que» cannot be dropped as «that» can in English.", {
        tag: 'Indirect speech',
        comparacao: "English backshifts in the same way: «I am tired» becomes «she said she was tired», and «I will come» becomes «he said he would come». The differences: English can drop «that» («she said she was tired»), but Portuguese needs «que». Portuguese also has the very common «ia + infinitive» («ia viajar») for «was going to travel», where English would use «was going to» or «would». And English keeps the simple past for «I arrived» more often than Portuguese keeps the preterite after «disse que»: both are acceptable in Brazil.",
        tabelas: [
          { titulo: 'Tense shifts after a past reporting verb', linhas: [
            { 'direct speech': 'Estou cansada.', 'indirect speech': 'Ela disse que estava cansada.', tense: 'present becomes imperfect' },
            { 'direct speech': 'Moro no Rio.', 'indirect speech': 'Ele disse que morava no Rio.', tense: 'present becomes imperfect' },
            { 'direct speech': 'Saí cedo.', 'indirect speech': 'Ela disse que tinha saído cedo (or: que saiu cedo).', tense: 'preterite becomes tinha + participle' },
            { 'direct speech': 'Vou viajar.', 'indirect speech': 'Ele disse que ia viajar.', tense: 'ir + infinitive becomes ia + infinitive' },
            { 'direct speech': 'Chegarei às oito.', 'indirect speech': 'Ela disse que chegaria às oito.', tense: 'future becomes futuro do pretérito' },
            { 'direct speech': 'Eu morava aqui.', 'indirect speech': 'Ele disse que morava lá.', tense: 'imperfect stays' },
          ] },
          { titulo: 'Time and place words', linhas: [
            { direct: 'hoje', indirect: 'naquele dia' }, { direct: 'ontem', indirect: 'no dia anterior, na véspera' }, { direct: 'amanhã', indirect: 'no dia seguinte' },
            { direct: 'agora', indirect: 'naquele momento, então' }, { direct: 'aqui', indirect: 'lá, ali' }, { direct: 'esta semana', indirect: 'naquela semana' },
          ] },
        ],
        exemplos: [['Ana disse que estava cansada.', 'Ana said she was tired.'], ['Ele disse que ia viajar no dia seguinte.', 'He said he was going to travel the next day.'], ['Ela contou que tinha chegado na véspera.', 'She said she had arrived the day before.'], ['Ele explicou que chegaria às oito.', 'He explained that he would arrive at eight.'], ['Ela avisou que o voo estava atrasado.', 'She let us know that the flight was delayed.']],
        erros: [['Ele disse que ia viajar amanhã. (told a week later)', 'Ele disse que ia viajar no dia seguinte.', 'When the story is told later, «amanhã» becomes «no dia seguinte»; otherwise the listener cannot tell which day you mean.'], ['Ela disse: que estava cansada.', 'Ela disse que estava cansada.', 'No colon and no quotation marks in indirect speech; «que» joins the clauses directly.'], ['Ana disse que eu estava cansada. (Ana said «estou cansada»)', 'Ana disse que estava cansada.', 'The person follows the new point of view: Ana\'s «eu» becomes «ela» (or no pronoun).'], ['Ela disse que tem chegado cedo.', 'Ela disse que tinha chegado cedo.', 'To report «cheguei cedo» use «tinha chegado» (or «chegou»); «tem chegado» means a repeated action up to now.']],
      }),
      producao(5, 'Think of three things a friend told you this week. Retell each one aloud with «Ele disse que…» or «Ela contou que…». Change at least one time word: «no dia seguinte», «naquele dia».'),
    ]),
    sessao('S2', 'Reporting questions and requests', [
      revisao(4, 'Report these aloud: «Estou com fome» (Ele disse que…), «Vou sair» (Ela disse que…), «Cheguei tarde» (Ela contou que…).'),
      palavras(6, [
        ['pedir', '', 'to ask for, to request', ''], ['mandar', '', 'to order, to tell someone to', ''], ['aconselhar', '', 'to advise', ''], ['proibir', '', 'to forbid', ''], ['sugerir', 'soo-zheh-REER', 'to suggest', ''], ['prometer', '', 'to promise', ''],
      ]),
      gramatica(12, 'Ela perguntou se eu estava cansado', "STEP 1: to report a yes/no question use «perguntar se» and the same tense shifts as before: «Você está cansada?» becomes «Ele perguntou se eu estava cansada.» Never use «que» here. STEP 2: to report a question with a question word, keep the question word and drop the inversion: «Onde você mora?» becomes «Ela perguntou onde eu morava.» «Quando você chega?» becomes «Ele perguntou quando eu chegaria.» There is no question mark. STEP 3: to report a command or a request, use a verb like «pedir», «mandar», «dizer», «aconselhar», «sugerir» plus «que» and the imperfect subjunctive (lesson 45): «Feche a porta!» becomes «Ela pediu que eu fechasse a porta.» STEP 4: a shorter option, very common in speech, is «pedir / mandar / dizer / aconselhar + para (spoken: pra) + infinitive»: «Ela me pediu para fechar a porta.» If the person who will act is named, the infinitive stays the same, and Portuguese may add the subject: «Ela pediu pra eu fechar a porta.» (Lesson 50 explains this «personal infinitive».) You will often hear «pra mim fechar» in speech, but it is considered incorrect; use «pra eu fechar». STEP 5: a negative request keeps the «não»: «Não entre!» becomes «Ela pediu que eu não entrasse» or «Ela disse pra eu não entrar». STEP 6: other useful patterns: «sugerir que» + imperfect subjunctive («Ele sugeriu que a gente fosse ao cinema»), «prometer que» + futuro do pretérito or imperfect («Ela prometeu que viria»), «proibir alguém de» + infinitive («Ele proibiu os filhos de usar o celular à mesa»).", {
        tag: 'Indirect speech',
        comparacao: "English also uses «if» or «whether» for yes/no questions («she asked if I was tired») and drops the inversion in reported questions («she asked where I lived»). Portuguese is the same, with «se». The difference is in requests: English says «she asked me to close the door» (infinitive), while Portuguese has two options: the infinitive with «para» or a clause with «que» and the imperfect subjunctive. The second is more formal and usual in writing.",
        tabela: [
          { direct: 'Você mora aqui?', indirect: 'Ele perguntou se eu morava lá.', type: 'yes/no question: perguntar se' },
          { direct: 'Onde você mora?', indirect: 'Ele perguntou onde eu morava.', type: 'question word: no inversion' },
          { direct: 'Feche a porta.', indirect: 'Ela pediu que eu fechasse a porta. / Ela pediu para eu fechar a porta.', type: 'request: que + imperfect subjunctive, or para + infinitive' },
          { direct: 'Venha cedo.', indirect: 'Ela pediu que eu viesse cedo.', type: 'request: vir becomes viesse' },
          { direct: 'Não entre.', indirect: 'Ela disse para eu não entrar.', type: 'negative: não before the verb' },
        ],
        exemplos: [['Ela perguntou se eu já tinha almoçado.', 'She asked if I had already had lunch.'], ['Ele perguntou quando eu chegaria.', 'He asked when I would arrive.'], ['Ela pediu que eu viesse cedo.', 'She asked me to come early.'], ['Pedi a ele que falasse mais devagar.', 'I asked him to speak more slowly.'], ['Ele sugeriu que a gente fosse ao cinema.', 'He suggested that we go to the cinema.']],
        erros: [['Ela perguntou que eu estava cansado.', 'Ela perguntou se eu estava cansado.', 'A yes/no question is reported with «se», not «que».'], ['Ela perguntou onde estava eu.', 'Ela perguntou onde eu estava.', 'In reported questions use the normal order, subject before verb.'], ['Ele pediu que eu fecho a porta.', 'Ele pediu que eu fechasse a porta.', 'After a request in the past, use the imperfect subjunctive.'], ['Ele pediu pra mim fechar a porta.', 'Ele pediu pra eu fechar a porta.', '«Eu» is the subject of «fechar», so use «eu»; «pra mim fechar» is common in speech but considered incorrect.']],
      }),
      producao(8, 'Remember a conversation with a doctor, a teacher or a landlord, real or imagined. Report three things they asked you («Ele perguntou se…», «Ela perguntou onde…») and two things they asked you to do («Ela pediu que eu…»).'),
    ]),
    sessao('S3', 'Reporting verbs and the spoken style', [
      revisao(4, 'Say aloud: «Ela perguntou se eu estava cansada», «Ele pediu que eu esperasse», «Ela disse que ia sair». Then change each sentence to a different person.'),
      palavras(5, [
        ['dizem que', '', 'they say that', ''], ['ouvi dizer que', '', 'I heard that', ''], ['segundo', 'seh-GOON~-doo', 'according to', ''], ['o boato', 'oh boh-AH-too', 'the rumor', ''], ['a fofoca', 'ah foh-FOH-kah', 'gossip', ''], ['aí', 'ah-EE', 'then, so (storytelling)', ''],
      ]),
      gramatica(8, 'Reporting verbs, pronouns and storytelling', "STEP 1: beyond «dizer», you can choose a verb that shows what the person did: «contar» (tell a story), «explicar», «responder», «reclamar» (complain), «prometer», «admitir», «negar». In news and formal texts you will also see «afirmar», «declarar» and «informar». STEP 2: object pronouns go before the verb in speech: «Ele me disse que…», «Ela nos avisou que…». With a name, use «a» or, in speech, «pra»: «Contei a ele que…» or «Contei pra ele que…». STEP 3: «segundo» and «de acordo com» report a source without «que»: «Segundo a Ana, a reunião foi cancelada.» STEP 4: to report something you did not hear first-hand, use «dizem que», «ouvi dizer que» or «falaram que»: «Dizem que vai chover o fim de semana inteiro.» STEP 5: storytelling in speech is lively: «aí ele falou que não vinha», «aí eu falei: então tá». Brazilians often drop to direct speech in a story and use the present tense: «Aí ela chega e fala: cadê o meu café?». STEP 6: reporting an order or a plan, speech likes «era pra» and «ia»: «Ele disse que era pra gente esperar» (he said we were supposed to wait). To report a short answer, use «disse que sim» or «disse que não».", {
        tag: 'Indirect speech',
        comparacao: "English also tells stories with «he goes» or «she's like», and it uses «apparently» and «they say» for second-hand information. Portuguese has «aí» (then) as a constant story link, and «segundo» and «dizem que» for sources. A formal report (a news article, an e-mail) prefers «afirmou que», «informou que» and «de acordo com», while a chat with a friend prefers «falou que» and «aí».",
        tabela: [
          { verb: 'dizer, falar', use: 'neutral, everyday', example: 'Ele disse que ia chegar tarde.' },
          { verb: 'contar', use: 'tell a story or news', example: 'Ela contou que tinha mudado de emprego.' },
          { verb: 'explicar, responder', use: 'give a reason, an answer', example: 'Ele respondeu que não podia.' },
          { verb: 'reclamar', use: 'complain', example: 'Ela reclamou que o café estava frio.' },
          { verb: 'afirmar, informar, declarar', use: 'news and formal texts', example: 'A empresa informou que o preço vai subir.' },
        ],
        exemplos: [['Ele me disse que não ia mais trabalhar lá.', 'He told me that he was not going to work there anymore.'], ['Segundo a Ana, a reunião foi cancelada.', 'According to Ana, the meeting was cancelled.'], ['Dizem que vai chover o fim de semana inteiro.', 'They say it will rain the whole weekend.'], ['Ele disse que era pra gente esperar.', 'He said we were supposed to wait.']],
        erros: [['Ele disse a mim que...', 'Ele me disse que...', 'In speech the pronoun goes before the verb: «me disse».'], ['Segundo a Ana, que a reunião foi cancelada.', 'Segundo a Ana, a reunião foi cancelada.', '«Segundo» introduces the source directly; do not add «que».'], ['Ele respondeu sim.', 'Ele respondeu que sim.', 'To report a short answer use «que sim» or «que não».']],
      }),
      dialogo(8, 'What the landlord said', 'Carolina spoke to the landlord about the apartment. Rafael wants to know what he said.', [
        ['Rafael', 'E aí, você falou com o dono do apartamento?', 'So, did you talk to the owner of the apartment?'],
        ['Carolina', 'Falei. Ele disse que o aluguel ia subir no mês que vem.', 'I did. He said the rent was going to go up next month.'],
        ['Rafael', 'Sério? E ele explicou por quê?', 'Really? And did he explain why?'],
        ['Carolina', 'Explicou. Disse que o condomínio tinha aumentado e que precisava cobrir os gastos.', 'He did. He said the building fees had gone up and that he needed to cover the costs.'],
        ['Rafael', 'E você perguntou se a gente podia ficar mais um ano?', 'And did you ask if we could stay one more year?'],
        ['Carolina', 'Perguntei. Ele respondeu que sim, mas pediu que a gente assinasse o contrato até sexta.', 'I did. He answered yes, but he asked us to sign the contract by Friday.'],
        ['Rafael', 'Então vamos assinar. Você disse a ele que a gente queria pintar a sala?', 'Then let us sign. Did you tell him we wanted to paint the living room?'],
        ['Carolina', 'Disse. Ele falou que tudo bem, mas pediu que a gente deixasse a parede branca na hora de sair.', 'I did. He said that was fine, but he asked us to leave the wall white when we leave.'],
        ['Rafael', 'Justo. Aí está resolvido.', 'Fair. So that is settled.'],
      ]),
      producao(5, 'Tell a short story aloud, about three sentences, of something someone told you. Use «aí», one reporting verb that is not «dizer», and one request with «pediu que».'),
    ]),
    sessao('S4', 'Review and practice of lesson 48', [
      revisao(5, 'Report these aloud: «Vou viajar amanhã» (Ele disse que…), «Onde você mora?» (Ela perguntou…), «Venha cedo» (Ela pediu que…).'),
      exercicios(20, [
        ouvir('Ela disse que estava cansada.', ['Ela disse que estava cansada.', 'Ela disse que está cansada.', 'Ela disse que ficará cansada.'], 'Ela disse que estava cansada.', 'Present becomes imperfect after a past reporting verb.'),
        ouvir('Ele disse que ia viajar no dia seguinte.', ['Ele disse que ia viajar no dia seguinte.', 'Ele disse que vai viajar amanhã.', 'Ele disse que viajou no dia anterior.'], 'Ele disse que ia viajar no dia seguinte.', '«Ia + infinitive» and «no dia seguinte».'),
        ouvir('Ela perguntou se eu já tinha almoçado.', ['Ela perguntou se eu já tinha almoçado.', 'Ela perguntou que eu já almocei.', 'Ela perguntou onde eu já tinha almoçado.'], 'Ela perguntou se eu já tinha almoçado.', 'A yes/no question is reported with «se».'),
        ouvir('Ele pediu que eu fechasse a porta.', ['Ele pediu que eu fechasse a porta.', 'Ele pediu que eu fecho a porta.', 'Ele pediu que eu fechei a porta.'], 'Ele pediu que eu fechasse a porta.', 'A request needs the imperfect subjunctive.'),
        ditado('Ana disse que estava cansada.', 'Imperfect «estava» after «disse que».'), ditado('Ele perguntou onde eu morava.', 'Reported wh-question: no inversion.'), ditado('Ela pediu para eu esperar.', '«Para eu» + infinitive.'),
        mc('How do you report «Estou cansado» in a story in the past?', ['Ele disse que estava cansado.', 'Ele disse que estou cansado.', 'Ele disse que estaria cansado.'], 'Ele disse que estava cansado.', 'Present becomes imperfect.'),
        mc('What replaces «amanhã» in a story told later?', ['no dia seguinte', 'na véspera', 'naquele momento'], 'no dia seguinte', '«Amanhã» becomes «no dia seguinte».'),
        mc('Which word introduces a reported yes/no question?', ['se', 'que', 'como'], 'se', '«Perguntar se».'),
        mc('Which form follows «pediu que» in the past?', ['the imperfect subjunctive', 'the present indicative', 'the preterite'], 'the imperfect subjunctive', '«Pediu que eu fechasse».'),
        mc('What does «Segundo a Ana, o filme é bom» mean?', ['According to Ana, the film is good.', 'Ana said she liked the film.', 'Ana asked if the film is good.'], 'According to Ana, the film is good.', '«Segundo» introduces a source.'),
        lacuna('«Vou viajar.» → Ele disse que ___ viajar.', ['ia', 'vai', 'irá'], 'ia', '«Vou» becomes «ia».'), lacuna('«Cheguei cedo.» → Ela disse que ___ cedo.', ['tinha chegado', 'chegaria', 'chega'], 'tinha chegado', 'Preterite becomes «tinha + participle».'),
        lacuna('«Onde você mora?» → Ele perguntou onde eu ___.', ['morava', 'moro', 'morei'], 'morava', 'Present becomes imperfect.'), lacuna('«Venha cedo.» → Ela pediu que eu ___ cedo.', ['viesse', 'venho', 'vir'], 'viesse', 'Request: imperfect subjunctive of «vir».'),
        lacuna('«Você gosta de café?» → Ela perguntou ___ eu gostava de café.', ['se', 'que', 'o que'], 'se', 'Yes/no question: «se».'),
        ordem('Put in order: «Ele disse que estava cansado.»', ['Ele', 'disse', 'que', 'estava', 'cansado.'], 'Ele disse que estava cansado.', 'Reporting verb + «que» + imperfect.'), ordem('Put in order: «Ela perguntou se eu já tinha almoçado.»', ['Ela', 'perguntou', 'se', 'eu', 'já', 'tinha', 'almoçado.'], 'Ela perguntou se eu já tinha almoçado.', '«Perguntou se» + normal order.'), ordem('Put in order: «Ele pediu que eu fechasse a porta.»', ['Ele', 'pediu', 'que', 'eu', 'fechasse', 'a', 'porta.'], 'Ele pediu que eu fechasse a porta.', '«Pediu que» + imperfect subjunctive.'),
        livre('Write in Portuguese: Ana said she was tired.', 'Ana disse que estava cansada.'), livre('Write in Portuguese: She asked me where I lived.', 'Ela perguntou onde eu morava.'),
      ]),
      producao(5, 'Retell a short real or imagined phone call aloud: say what the other person said, asked and requested. Use at least three of the verbs from this lesson.'),
    ]),
  ],
});
