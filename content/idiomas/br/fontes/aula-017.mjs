import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 17, titulo: 'Plans and actions in progress: ir + infinitive and estar + gerund', nivel: 'a1',
  objetivo: 'Talk about your plans with «ir + infinitive», say what you are doing right now with «estar + gerund», and handle a short phone call to say where you are and when you arrive.',
  nota: 'You can now talk about the near future and about what is happening now, in speech and in simple messages. Next lesson: the A1 mock test, a review of lessons 1 to 17.',
  sessoes: [
    sessao('S1', 'Plans: ir + infinitive', [
      revisao(5, 'Say aloud the present of «ir»: vou, vai, vamos, vão. Then say where you go on a normal day: «Eu vou à escola», «A gente vai ao mercado». Finally say three things you want to do and three you have to do (lesson 13).'),
      palavras(8, [
        ['fim de semana', 'FEE~ djee seh-MAH-nah', 'weekend', ''], ['hoje à noite', 'OH-zhee ah NOY-tchee', 'tonight, this evening', ''], ['daqui a pouco', 'dah-KEE ah POH-koo', 'in a little while, soon', ''], ['semana que vem', 'seh-MAH-nah kee VEH~ee', 'next week', ''],
        ['mês que vem', 'MEHSS kee VEH~ee', 'next month', ''], ['ano que vem', 'AH-noo kee VEH~ee', 'next year', ''], ['festa', 'FEHS-tah', 'party', ''], ['plano', 'PLAH-noo', 'plan', ''], ['passear', 'pah-see-AR', 'to go for a walk, to go out for fun', ''],
      ]),
      gramatica(12, 'The near future: ir + infinitive', "STEP 1: put «ir» in the present and the main verb in the infinitive: «eu vou estudar, você vai estudar, nós vamos estudar, vocês vão estudar». With «a gente» use «vai»: «A gente vai estudar». STEP 2: this is the normal way to talk about the future in speech: plans, intentions, things that are about to happen. The one-word future («estudarei») is mostly written and comes later in the course. STEP 3: add a time expression: «amanhã, hoje à noite, daqui a pouco, no sábado, no fim de semana, semana que vem, mês que vem, ano que vem». It can come at the start or at the end: «Amanhã vou trabalhar» or «Vou trabalhar amanhã». STEP 4: for the negative put «não» before «ir»: «Não vou trabalhar amanhã». For questions: «O que você vai fazer no fim de semana?», «Você vai viajar?». STEP 5: do not repeat «ir». To say you will go somewhere, use «ir» alone with «a» + article: «Amanhã eu vou ao cinema», «Sábado a gente vai à praia». For a suggestion use «vamos» + infinitive: «Vamos comer?» (Shall we eat? / Let's eat). And «vai ter» + noun says «there will be»: «Vai ter festa no sábado». Remember «vou levar» from lesson 15: it was already this structure.", {
        tag: 'Near future',
        comparacao: "English has «going to» («I'm going to study») and so does Portuguese: «vou estudar». Unlike English, Portuguese never says «I'm going to go»: you just say «vou». Also, English can use «will» for every future; Portuguese speech prefers «ir + infinitive» and uses the present tense for fixed plans: «Amanhã eu trabalho» is correct too.",
        tabela: [
          { person: 'eu', ir: 'vou', example: 'Vou estudar amanhã.' },
          { person: 'você, ele, ela, a gente', ir: 'vai', example: 'Ela vai viajar semana que vem.' },
          { person: 'nós', ir: 'vamos', example: 'Vamos jantar fora hoje à noite.' },
          { person: 'vocês, eles, elas', ir: 'vão', example: 'Eles vão chegar tarde.' },
        ],
        exemplos: [['O que você vai fazer no fim de semana?', 'What are you going to do at the weekend?'], ['Eu vou passear com meus amigos.', 'I am going out with my friends.'], ['Não vou trabalhar amanhã.', 'I am not going to work tomorrow.'], ['Vai ter festa no sábado.', 'There will be a party on Saturday.'], ['Amanhã a gente vai à praia.', 'Tomorrow we are going to the beach.'], ['Vamos comer?', 'Shall we eat?']],
        erros: [['Eu vou ir ao cinema amanhã.', 'Eu vou ao cinema amanhã.', 'When «ir» means to go somewhere, do not repeat it: just conjugate «ir».'], ['Eu vou viajo semana que vem.', 'Eu vou viajar semana que vem.', 'After «ir», the main verb must be in the infinitive.'], ['Eu vou a estudar amanhã.', 'Eu vou estudar amanhã.', 'No preposition between «ir» and the infinitive.'], ['Eu vou não trabalhar.', 'Eu não vou trabalhar.', '«Não» goes before «ir».']],
      }),
      producao(5, 'Tell your plans for tomorrow, for the weekend and for next month with «ir + infinitive». For example: «Amanhã eu vou estudar. No fim de semana vou passear. Mês que vem vou viajar.»'),
    ]),
    sessao('S2', 'What is happening now: estar + gerund', [
      revisao(4, 'Ask and answer aloud: «O que você vai fazer hoje à noite?», «Você vai ao cinema no fim de semana?». Give two answers for each, positive and negative.'),
      palavras(6, [
        ['conversar', 'kon-vehr-SAR', 'to chat, to talk', ''], ['procurar', 'proh-koo-RAR', 'to look for', ''], ['lavar', 'lah-VAR', 'to wash', ''], ['arrumar', 'ah-hoo-MAR', 'to tidy up; to get ready', ''],
        ['neste momento', 'NEHS-tchee moh-MEH~-too', 'right now', ''], ['enquanto', 'eh~-KWAH~-too', 'while', ''], ['ainda', 'ah-EE~-dah', 'still; yet', ''],
      ]),
      gramatica(12, 'Estar + gerund: the action in progress', "STEP 1: conjugate «estar» (estou, está, estamos, estão) and add the gerund of the main verb. STEP 2: the gerund is formed from the infinitive: -ar becomes -ando («falar → falando»), -er becomes -endo («comer → comendo»), -ir becomes -indo («abrir → abrindo»). It never changes for gender or number: «ela está falando», «elas estão falando». STEP 3: even irregular verbs follow the rule: «fazer → fazendo, dizer → dizendo, ver → vendo, ter → tendo, vir → vindo, ir → indo». The only irregular one in this list is «pôr → pondo». STEP 4: use it for what is happening now or around now: «Estou estudando português agora», «O que você está fazendo?». In Brazil this is the usual form; «estar a + infinitive» (estou a estudar) is European Portuguese. With reflexive verbs the pronoun goes before the verb or between the verbs in speech: «Ele está se vestindo». STEP 5: in speech «estou» becomes «tô», «está» becomes «tá», «estão» becomes «tão»: «Tô estudando», «A gente tá esperando», «Eles tão chegando». Write the full forms in formal texts. Two very common phrases: «Estou chegando» (I am nearly there) and «Estou indo» (I am on my way).", {
        tag: 'Gerund',
        comparacao: "English «I am studying» is almost the same as «estou estudando»: «-ing» is the Portuguese «-ando / -endo / -indo». But English uses «-ing» in many other places where Portuguese uses the infinitive («I like cooking» is «gosto de cozinhar», «before sleeping» is «antes de dormir»). Use the gerund in Portuguese only after «estar» (and a few other verbs later).",
        tabelas: [
          { titulo: 'From infinitive to gerund', linhas: [
            { infinitive: 'falar', gerund: 'falando', example: 'Ela está falando.' }, { infinitive: 'comer', gerund: 'comendo', example: 'Estou comendo.' }, { infinitive: 'abrir', gerund: 'abrindo', example: 'Estou abrindo o e-mail.' },
            { infinitive: 'fazer', gerund: 'fazendo', example: 'O que você está fazendo?' }, { infinitive: 'dormir', gerund: 'dormindo', example: 'Ela está dormindo.' }, { infinitive: 'ver', gerund: 'vendo', example: 'Estamos vendo um filme.' }, { infinitive: 'pôr', gerund: 'pondo', example: 'Ela está pondo o casaco.' },
          ] },
          { titulo: 'Estar, written and spoken', linhas: [
            { person: 'eu', written: 'estou', spoken: 'tô' }, { person: 'você, ele, ela, a gente', written: 'está', spoken: 'tá' }, { person: 'nós', written: 'estamos', spoken: 'estamos' }, { person: 'vocês, eles, elas', written: 'estão', spoken: 'tão' },
          ] },
        ],
        exemplos: [['Estou estudando português agora.', 'I am studying Portuguese now.'], ['O que você está fazendo?', 'What are you doing?'], ['Ela está cozinhando.', 'She is cooking.'], ['A gente tá esperando o ônibus.', 'We are waiting for the bus.'], ['Ele está se vestindo.', 'He is getting dressed.'], ['Eles estão conversando enquanto lavam o carro.', 'They are chatting while they wash the dishes.']],
        erros: [['Estou estudo agora.', 'Estou estudando agora.', 'After «estar» the verb takes the gerund ending, not the present form.'], ['Estou a estudar.', 'Estou estudando.', '«Estar a + infinitive» is European Portuguese; in Brazil use the gerund.'], ['Elas estão fazendas.', 'Elas estão fazendo.', 'The gerund never changes for gender or number.'], ['Ele está vestindo-se.', 'Ele está se vestindo.', 'In Brazilian speech the pronoun goes before the main verb.']],
      }),
      producao(8, 'Imagine you are on the phone with a friend. Say what you are doing now, what the people around you are doing and what you are still doing. Make at least six sentences. For example: «Estou estudando. Minha irmã está cozinhando. Meus pais estão assistindo a um filme.»'),
    ]),
    sessao('S3', 'Phone call: where are you, what are you doing, what will you do', [
      revisao(4, 'Change five infinitives into gerunds aloud (falar, comer, abrir, fazer, ver). Then say the same action with «ir + infinitive» and with «estar + gerund»: «Vou comer» and «Estou comendo».'),
      palavras(5, [
        ['alô', 'ah-LOH', 'hello (on the phone)', ''], ['ligar', 'lee-GAR', 'to call; to turn on', ''], ['mensagem', 'meh~-SAH-zheh~ee', 'message', ''], ['a caminho', 'ah kah-MEE-nyoo', 'on the way', ''],
        ['demorar', 'deh-moh-RAR', 'to take time, to be late', ''], ['já', 'ZHAH', 'already; right away', ''], ['trânsito', 'TRAH~-zee-too', 'traffic', ''],
      ]),
      gramatica(8, 'Now or later: choosing between the two forms', "STEP 1: «estar + gerund» is for what is happening now («Estou estudando») and «ir + infinitive» for what will happen soon or later («Vou estudar»). If the action is already in progress, do not use «ir». STEP 2: «estar + gerund» can also describe a situation that is temporary: «Estou morando em São Paulo» (for now), «Estou trabalhando num café». For a permanent fact use the present: «Moro em São Paulo». STEP 3: «já» before a verb means right away: «Já vou!» (I'm coming!), «Já estou chegando». STEP 4: phone phrases: «Alô?», «Oi, é a Ana», «Onde você está?», «Estou a caminho», «Vou demorar um pouco», «Tem muito trânsito», «Vou ligar para você daqui a pouco». With a person, «ligar» needs «para»: «ligar para a Ana». STEP 5: culture note. Brazilians use WhatsApp for almost everything, from family chats to appointments and work, and voice messages (áudios) are very common.", {
        tag: 'Near future',
        comparacao: "English also separates «I am calling» from «I am going to call», and so does Portuguese. English says «I'll call you» with no preposition; Portuguese needs «para»: «ligar para você». And where English uses «I'm coming!» for «I'm on my way», Brazilians often say «Já vou!» or «Estou indo!».",
        tabela: [
          { situation: 'Happening right now', use: 'estar + gerund', example: 'Estou estudando agora.' },
          { situation: 'Soon or later, a plan', use: 'ir + infinitive', example: 'Vou estudar depois.' },
          { situation: 'A habit or fact', use: 'present', example: 'Estudo todos os dias.' },
          { situation: 'A temporary situation', use: 'estar + gerund', example: 'Estou morando aqui agora.' },
        ],
        erros: [['Vou ligando para você depois.', 'Vou ligar para você depois.', 'After «ir», use the infinitive; the gerund goes after «estar».'], ['Eu ligo você.', 'Eu ligo para você.', '«Ligar» needs «para» before the person.'], ['Estou chegar agora.', 'Estou chegando agora.', 'After «estar», use the gerund.'], ['Eu vou estudando agora.', 'Eu estou estudando agora.', 'For an action in progress use «estar» + gerund, not «ir».']],
      }),
      dialogo(8, 'A phone call before dinner', 'Marina is waiting at a restaurant with friends. Pedro calls: he is late.', [
        ['Marina', 'Alô? Oi, Pedro! Onde você está?', 'Hello? Hi, Pedro! Where are you?'],
        ['Pedro', 'Oi, Marina! Estou a caminho. Estou chegando.', "Hi, Marina! I'm on the way. I'm almost there."],
        ['Marina', 'Que bom! A gente está esperando você.', 'Great! We are waiting for you.'],
        ['Pedro', 'Vou demorar um pouco. Tem muito trânsito.', "I'm going to be a bit late. There is a lot of traffic."],
        ['Marina', 'Tudo bem. Não tem pressa.', "That's fine. There's no hurry."],
        ['Pedro', 'Quem está aí com você?', "Who is there with you?"],
        ['Marina', 'A Ana e o Lucas. Eles estão conversando e eu estou tomando um suco.', "Ana and Lucas. They are chatting and I'm having a juice."],
        ['Pedro', 'Que legal! Daqui a pouco eu chego.', "Great! I'll be there in a little while."],
        ['Marina', 'Depois do jantar, a gente vai passear na praia?', 'After dinner, are we going for a walk on the beach?'],
        ['Pedro', 'Boa ideia! Mas amanhã eu tenho que acordar cedo.', 'Good idea! But tomorrow I have to wake up early.'],
        ['Marina', 'Então a gente volta cedo.', "Then we'll come back early."],
        ['Pedro', 'Perfeito! Já estou entrando no restaurante. Tchau!', "Perfect! I'm already coming into the restaurant. Bye!"],
      ]),
      producao(5, 'Role-play the phone call with a friend: say where you are, what you are doing, why you are late and what you are going to do afterwards. Use at least two sentences with «estar + gerund» and two with «ir + infinitive».'),
    ]),
    sessao('S4', 'Review and practice of lesson 17', [
      revisao(5, 'Say aloud five sentences with «ir + infinitive» (plans) and five with «estar + gerund» (now). Then change one sentence from each into the negative.'),
      exercicios(20, [
        ouvir('Eu vou estudar amanhã', ['Eu vou estudar amanhã', 'Eu estou estudando agora', 'Eu estudo amanhã'], 'Eu vou estudar amanhã', 'Listen for «vou estudar»: a plan for tomorrow.'),
        ouvir('Ela está cozinhando agora', ['Ela está cozinhando agora', 'Ela vai cozinhar agora', 'Ela cozinha agora'], 'Ela está cozinhando agora', '«Está cozinhando»: the action is in progress.'),
        ouvir('Nós vamos viajar semana que vem', ['Nós vamos viajar semana que vem', 'Nós estamos viajando semana que vem', 'Nós vamos viajar mês que vem'], 'Nós vamos viajar semana que vem', 'Listen for «semana que vem» and «vamos viajar».'),
        ouvir('Eles estão esperando o ônibus', ['Eles estão esperando o ônibus', 'Eles vão esperar o ônibus', 'Ele está esperando o ônibus'], 'Eles estão esperando o ônibus', 'Plural «eles estão» and the gerund «esperando».'),
        ditado('O que você vai fazer no fim de semana?', 'Write: O que você vai fazer no fim de semana? «Vai fazer»: ir + infinitive.'),
        ditado('Estou chegando, tem muito trânsito', 'Write: Estou chegando, tem muito trânsito. Note the accent in «trânsito».'),
        ditado('Vamos passear na praia?', 'Write: Vamos passear na praia? A suggestion with «vamos».'),
        mc('Which sentence means «I am going to study tomorrow»?', ['Vou estudar amanhã.', 'Estou estudando amanhã.', 'Vou estudando amanhã.'], 'Vou estudar amanhã.', '«Ir» in the present + infinitive.'),
        mc('How do you say «Tomorrow I am going to the cinema»?', ['Amanhã eu vou ao cinema.', 'Amanhã eu vou ir ao cinema.', 'Amanhã eu vou a ir cinema.'], 'Amanhã eu vou ao cinema.', 'Do not repeat «ir». Use «vou» + «a» + article.'),
        mc('What is the gerund of «comer»?', ['comendo', 'comindo', 'comando'], 'comendo', '-er verbs form the gerund in -endo.'),
        mc('What is the gerund of «pôr»?', ['pondo', 'pôrindo', 'ponendo'], 'pondo', '«Pôr» is the irregular one: «pondo».'),
        mc('How do you say «I am studying» in Brazil?', ['Estou estudando.', 'Estou a estudar.', 'Estou estudo.'], 'Estou estudando.', 'Brazil uses the gerund; «estar a + infinitive» is European.'),
        mc('What does «Estou chegando» often mean on the phone?', ['I am almost there', 'I have not left yet', 'I am going to leave tomorrow'], 'I am almost there', 'It means you are on your way and nearly there.'),
        lacuna('Eu ___ viajar amanhã. (ir)', ['vou', 'vai', 'vão'], 'vou', 'Present of «ir» with «eu».'),
        lacuna('Eles ___ estudando. (estar)', ['estão', 'está', 'estamos'], 'estão', 'Third person plural of «estar».'),
        lacuna('Ela está ___ café. (fazer)', ['fazendo', 'fazando', 'fazindo'], 'fazendo', '-er verbs: gerund in -endo.'),
        lacuna('Nós estamos ___. (esperar)', ['esperando', 'esperendo', 'esperindo'], 'esperando', '-ar verbs: gerund in -ando.'),
        lacuna('Vai ___ uma festa no sábado.', ['ter', 'tem', 'tendo'], 'ter', '«Vai ter» = there will be: ir + infinitive.'),
        ordem('Put in order: «O que você está fazendo?»', ['O', 'que', 'você', 'está', 'fazendo?'], 'O que você está fazendo?', 'The question about the present moment.'),
        ordem('Put in order: «Nós vamos viajar semana que vem.»', ['Nós', 'vamos', 'viajar', 'semana', 'que', 'vem.'], 'Nós vamos viajar semana que vem.', 'Subject, «ir», infinitive, time expression.'),
        livre('Write in Portuguese: Tomorrow I am going to work early and on Saturday I am going to rest.', 'Amanhã vou trabalhar cedo e no sábado vou descansar.'),
        livre('Write in Portuguese: Where are you? I am arriving.', 'Onde você está? Estou chegando.'),
      ]),
      producao(5, 'Leave a voice message for a friend: say what you are doing right now, where you are, and what you are going to do tonight and tomorrow. Speak for about thirty seconds.'),
    ]),
  ],
});
