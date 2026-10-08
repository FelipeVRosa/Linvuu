import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 13, titulo: 'Wanting, being able to, needing and having to', nivel: 'a1',
  objetivo: 'Say what you want, what you can or may do, what you need and what you have to do, ask for permission and ask politely for help or for a repetition.',
  nota: 'You can now express wishes, permission, need and obligation, and handle a simple conversation at a service desk, including asking someone to repeat more slowly. Next lesson: your daily routine and reflexive verbs.',
  sessoes: [
    sessao('S1', 'Wanting and being able to: querer and poder', [
      revisao(5, 'Say aloud the present of «ir» and «fazer» from lesson 12 (vou, vai, vamos, vão; faço, faz, fazemos, fazem). Then make one sentence with each verb, for example «A gente vai agora» and «Eu faço café».'),
      palavras(8, [
        ['querer', 'keh-REHR', 'to want', ''], ['poder', 'poh-DEHR', 'can, may, to be able to', ''], ['dever', 'deh-VEHR', 'should, ought to; to owe', ''], ['precisar de', 'preh-see-ZAR djee', 'to need', ''],
        ['ter que', 'TEHR kee', 'to have to', ''], ['agora', 'ah-GOH-rah', 'now', ''], ['depois', 'deh-POYSS', 'afterwards, later', ''], ['ainda não', 'ah-EE~-dah NOW~', 'not yet', ''],
      ]),
      gramatica(12, 'Querer and poder followed by an infinitive', "STEP 1: «querer» (to want) and «poder» (can, may) are irregular only in «eu»: «eu quero», «eu posso». All the other forms are regular: «você quer», «você pode». With «a gente» use the same form as «você». STEP 2: after both verbs, the next verb stays in the infinitive. There is no «to» and no preposition: «Quero comer», «Posso entrar?», «Você pode esperar?». STEP 3: «querer» + noun says what you want: «Quero um café». In a shop or café «queria» (lesson 8) is more polite; «quero» is direct but perfectly normal with friends and family. STEP 4: «poder» covers three English ideas. Ability: «Eu posso ajudar» (I can help). Permission: «Posso entrar?» (May I come in?). Possibility: «Pode ser» (It could be / maybe / OK). STEP 5: to ask someone to do something, put «poder» in the «você» form: «Você pode esperar?». The short answer «Pode!» means «Go ahead, it is fine».", {
        tag: 'Modal verbs',
        comparacao: "In English «want» needs «to» before the next verb («I want to eat») and «can» does not («I can eat»). In Portuguese neither needs a word: «Quero comer», «Posso comer». English modals never take endings («he can», «she may»); Portuguese «querer» and «poder» are ordinary verbs with endings: «ela quer», «ela pode».",
        tabela: [
          { person: 'eu', querer: 'quero', poder: 'posso' },
          { person: 'você, ele, ela, a gente', querer: 'quer', poder: 'pode' },
          { person: 'nós', querer: 'queremos', poder: 'podemos' },
          { person: 'vocês, eles, elas', querer: 'querem', poder: 'podem' },
        ],
        exemplos: [['Eu quero estudar português.', 'I want to study Portuguese.'], ['A gente quer comer agora.', 'We want to eat now.'], ['Nós queremos um café, por favor.', 'We would like a coffee, please.'], ['Posso entrar?', 'May I come in?'], ['Vocês podem esperar aqui?', 'Can you wait here?'], ['Ele não pode ir hoje.', "He can't go today."]],
        erros: [['Quero a comer.', 'Quero comer.', 'There is no preposition between «querer» and the infinitive.'], ['Eu poso entrar?', 'Posso entrar?', 'The «eu» form of «poder» is irregular: «posso», with two s.'], ['Você quere um café?', 'Você quer um café?', 'The «você» form of «querer» is «quer», without a final -e.'], ['Posso eu entrar?', 'Posso entrar?', 'Portuguese does not invert subject and verb in a question, and the subject is usually dropped.']],
      }),
      producao(5, 'Say three things you want to do and three things you cannot do today, using «agora», «depois» and «ainda não». For example: «Agora eu quero um café. Depois posso estudar. Ainda não posso ir.»'),
    ]),
    sessao('S2', 'Needing and should: precisar and dever', [
      revisao(4, 'Conjugate «querer» and «poder» aloud with eu, você, nós and vocês. Then ask permission with «Posso…?» in three different ways.'),
      palavras(6, [
        ['ajudar', 'ah-zhoo-DAR', 'to help', ''], ['esperar', 'ees-peh-RAR', 'to wait; to hope', ''], ['descansar', 'djees-kah~-SAR', 'to rest', ''], ['pagar', 'pah-GAR', 'to pay', ''],
        ['dinheiro', 'djee-NYAY-roo', 'money', ''], ['tempo', 'TEH~-poo', 'time; weather', ''], ['água', 'AH-gwah', 'water', ''],
      ]),
      gramatica(12, 'Precisar and dever: need and should', "STEP 1: «precisar» (to need) is regular: «preciso, precisa, precisamos, precisam». With a noun it takes «de»: «Preciso de ajuda», «Você precisa de dinheiro?». STEP 2: with another verb there is no «de» in Brazil: «Preciso estudar», «Precisamos esperar». STEP 3: «de» joins the article: de + o = do, de + a = da. So: «Preciso do documento», «Preciso da água». STEP 4: «dever» is regular too: «devo, deve, devemos, devem». It gives advice or a mild duty (should, ought to): «Você deve descansar». It can also guess (must be, probably): «Ele deve estar em casa». The same verb means «to owe»: «Quanto eu devo?» (How much do I owe?). STEP 5: watch the negatives. «Não precisa» means you do not have to; «não pode» means it is not allowed or not possible; «não deve» means you should not. They are not interchangeable.", {
        tag: 'Modal verbs',
        comparacao: "English «must», «should» and «need to» are close to each other; Portuguese separates them clearly. «Dever» is advice («you should»), «precisar» is need, and (next block) «ter que» is obligation. Also remember: English says «I need help» without a preposition, Portuguese needs «de» before a noun: «preciso de ajuda».",
        tabelas: [
          { titulo: 'Present of precisar and dever', linhas: [
            { person: 'eu', precisar: 'preciso', dever: 'devo' },
            { person: 'você, ele, ela, a gente', precisar: 'precisa', dever: 'deve' },
            { person: 'nós', precisar: 'precisamos', dever: 'devemos' },
            { person: 'vocês, eles, elas', precisar: 'precisam', dever: 'devem' },
          ] },
          { titulo: 'Three negatives, three meanings', linhas: [
            { phrase: 'não precisa', meaning: 'you do not have to, no need', example: 'Não precisa pagar agora.' },
            { phrase: 'não pode', meaning: 'it is not allowed, not possible', example: 'Não pode entrar aqui.' },
            { phrase: 'não deve', meaning: 'you should not', example: 'Você não deve esperar.' },
          ] },
        ],
        exemplos: [['Preciso de ajuda.', 'I need help.'], ['Precisamos do dinheiro hoje.', 'We need the money today.'], ['Eu preciso descansar.', 'I need to rest.'], ['Você deve beber água.', 'You should drink water.'], ['Ele deve estar em casa.', 'He must be at home.']],
        erros: [['Preciso ajuda.', 'Preciso de ajuda.', 'With a noun, «precisar» always takes «de».'], ['Preciso de estudar.', 'Preciso estudar.', 'In Brazil there is no «de» before an infinitive. (In Portugal «preciso de estudar» is also heard.)'], ['Você deve de descansar.', 'Você deve descansar.', 'No preposition after «dever».'], ['Não pode pagar agora. (meaning: no need)', 'Não precisa pagar agora.', '«Não pode» means not allowed; «no need» is «não precisa».']],
      }),
      producao(8, 'Say five sentences about what you need this week («Preciso de…») and what you should do («Devo…»). Then say two sentences that begin with «Não precisa…» and «Não pode…» about rules in a place you know, such as a school or a gym.', 'Preciso de tempo. Preciso estudar mais. Devo descansar. Não precisa pagar hoje. Não pode entrar com água.'),
    ]),
    sessao('S3', 'Having to: ter que, and fome, sede, sono, pressa', [
      revisao(4, 'Say three things you need with «Preciso de…» and two things you should do with «Devo…». Then say what «não pode» and «não precisa» mean, in English, from memory.'),
      palavras(5, [
        ['fome', 'FOH-mee', 'hunger', ''], ['sede', 'SEH-djee', 'thirst', ''], ['sono', 'SOH-noo', 'sleepiness', ''], ['pressa', 'PREH-sah', 'hurry', ''],
        ['um pouco', 'oo~ POH-koo', 'a little, a moment', ''], ['mais devagar', 'MYSS djee-vah-GAR', 'more slowly', ''], ['repetir', 'heh-peh-TCHEER', 'to repeat', ''], ['cadastro', 'kah-DAHS-troo', 'registration (the form that puts you in a system)', ''],
        ['documento', 'doh-koo-MEH~-too', 'ID document; document', ''], ['passaporte', 'pah-sah-POR-tchee', 'passport', ''],
      ]),
      gramatica(8, 'Ter que, and «ter» for hunger, thirst, sleep and hurry', "STEP 1: «ter» (to have) is «tenho, tem, temos, têm». The plural «têm» carries a circumflex, but in speech it sounds the same as the singular «tem». STEP 2: «ter que» + infinitive means «have to». It is stronger than «dever»: «Tenho que trabalhar hoje». Careful writing also has «ter de», but in speech Brazilians say «ter que». STEP 3: «tem que» can have no clear subject and states a rule: «Tem que pagar antes» (You have to pay first). STEP 4: for body states Portuguese uses «ter» where English uses «to be»: «Tenho fome» (I am hungry), «tenho sede», «tenho sono», «tenho pressa». «Estou com fome» is equally common. Never use «ser». STEP 5: «muito» agrees with these nouns: «muita fome, muita sede, muita pressa» (feminine) and «muito sono» (masculine).", {
        tag: 'Modal verbs',
        comparacao: "In English «I am hungry» uses the verb «to be» and an adjective. In Portuguese hunger is something you have: «tenho fome», literally «I have hunger». Learn «ter que» as one block, like «have to»: «tenho que» = I have to.",
        tabelas: [
          { titulo: 'Present of ter', linhas: [
            { person: 'eu', form: 'tenho', example: 'Tenho que ir.' },
            { person: 'você, ele, ela, a gente', form: 'tem', example: 'Ela tem que estudar.' },
            { person: 'nós', form: 'temos', example: 'Temos que esperar.' },
            { person: 'vocês, eles, elas', form: 'têm', example: 'Eles têm que pagar.' },
          ] },
          { titulo: 'Body states with ter', linhas: [
            { say: 'Tenho fome.', meaning: 'I am hungry.' }, { say: 'Tenho sede.', meaning: 'I am thirsty.' }, { say: 'Tenho sono.', meaning: 'I am sleepy.' }, { say: 'Tenho pressa.', meaning: 'I am in a hurry.' },
          ] },
        ],
        erros: [['Eu estou fome.', 'Eu tenho fome. / Eu estou com fome.', 'Use «ter», or «estar» with «com». Never «ser», and never «estar» without «com».'], ['Eu tenho ir.', 'Eu tenho que ir.', 'To say «have to» you need «que» after «ter».'], ['Eles tem que esperar.', 'Eles têm que esperar.', 'The plural of «tem» is written «têm».'], ['Tenho muito fome.', 'Tenho muita fome.', '«Muito» agrees with the noun, and «fome» is feminine.']],
      }),
      dialogo(8, 'At the school office', 'Tom wants to register for a Portuguese course. He speaks to the receptionist.', [
        ['The receptionist', 'Bom dia! Em que posso ajudar?', 'Good morning! How can I help?'],
        ['Tom', 'Desculpe, não entendo. Pode repetir mais devagar?', "Sorry, I don't understand. Can you repeat more slowly?"],
        ['The receptionist', 'Claro. Você quer fazer o cadastro?', 'Of course. Do you want to do the registration?'],
        ['Tom', 'Quero, sim. Preciso de um documento?', 'Yes, I do. Do I need a document?'],
        ['The receptionist', 'Precisa, sim. Você tem o passaporte?', 'Yes, you do. Do you have your passport?'],
        ['Tom', 'Tenho, sim. Aqui está.', 'Yes, I do. Here it is.'],
        ['The receptionist', 'Obrigada. Você pode esperar um pouco?', 'Thank you. Can you wait a moment?'],
        ['Tom', 'Posso, sim. Eu não tenho pressa. Mas tenho muita sede. Posso tomar uma água?', "I can, yes. I'm not in a hurry. But I'm very thirsty. May I have some water?"],
        ['The receptionist', 'Pode, sim!', 'Of course you may!'],
      ]),
      producao(5, 'Act out the dialogue with yourself: be Tom, then the receptionist. Change the details: another document, another thing you need, and ask to repeat once more with «Pode repetir?».'),
    ]),
    sessao('S4', 'Review and practice of lesson 13', [
      revisao(5, 'Say aloud one sentence each with «quero», «posso», «preciso de», «devo» and «tenho que». Then say «tenho fome», «tenho sede» and «tenho sono».'),
      exercicios(20, [
        ouvir('Eu quero um café', ['Eu quero um café', 'Eu posso um café', 'Eu preciso de um café'], 'Eu quero um café', 'Listen for «quero»: the verb of wanting.'),
        ouvir('Posso entrar?', ['Posso entrar?', 'Pode entrar?', 'Posso esperar?'], 'Posso entrar?', 'The question asks for permission with «posso».'),
        ouvir('Eles têm que esperar', ['Eles têm que esperar', 'Ele tem que esperar', 'Eles têm que pagar'], 'Eles têm que esperar', '«Tem» and «têm» sound the same; listen for «eles» (plural) and for «esperar».'),
        ouvir('Você precisa de ajuda?', ['Você precisa de ajuda?', 'Você pode ajudar?', 'Você precisa de água?'], 'Você precisa de ajuda?', '«Precisa de» + noun: «ajuda».'),
        ditado('Pode repetir, por favor?', 'Write: Pode repetir, por favor? A polite request with «pode» and an infinitive.'),
        ditado('Eu preciso de um documento', 'Write: Eu preciso de um documento. «Precisar» takes «de» before a noun.'),
        ditado('Tenho muita sede', 'Write: Tenho muita sede. «Sede» is feminine, so «muita».'),
        mc('How do you say «I need help»?', ['Preciso de ajuda.', 'Preciso ajuda.', 'Preciso a ajuda.'], 'Preciso de ajuda.', 'With a noun, «precisar» takes «de».'),
        mc('What does «Não pode entrar» mean?', ['It is not allowed to enter', 'You do not need to enter', 'You should not enter'], 'It is not allowed to enter', '«Não pode» is about permission or possibility.'),
        mc('What does «Não precisa pagar agora» mean?', ['You do not have to pay now', 'You cannot pay now', 'You must not pay now'], 'You do not have to pay now', '«Não precisa» means no need.'),
        mc('How do you say «I am hungry» with the verb «ter»?', ['Tenho fome.', 'Sou fome.', 'Tenho com fome.'], 'Tenho fome.', 'Hunger is something you have: «ter fome».'),
        mc('What is the «eu» form of «poder»?', ['posso', 'pode', 'poso'], 'posso', 'The «eu» form is irregular: «posso».'),
        mc('Which sentence is correct?', ['Tenho muito sono.', 'Tenho muita sono.', 'Tenho muitos sono.'], 'Tenho muito sono.', '«Sono» is masculine singular: «muito sono».'),
        lacuna('Nós ___ um café. (querer)', ['queremos', 'quer', 'querem'], 'queremos', 'Present of «querer» with «nós»: «queremos».'),
        lacuna('Eles ___ esperar aqui. (poder)', ['podem', 'pode', 'podemos'], 'podem', 'Third person plural: «podem».'),
        lacuna('Eu preciso ___ ajuda.', ['de', 'em', 'por'], 'de', '«Precisar de» + noun.'),
        lacuna('Você ___ descansar. (advice: dever)', ['deve', 'devo', 'devem'], 'deve', '«Você» takes «deve».'),
        lacuna('Eles ___ que pagar agora.', ['têm', 'tem', 'tenho'], 'têm', 'Plural of «ter» is written «têm».'),
        ordem('Put in order: «Você pode esperar um pouco?»', ['Você', 'pode', 'esperar', 'um', 'pouco?'], 'Você pode esperar um pouco?', '«Poder» + infinitive for a polite request.'),
        ordem('Put in order: «Eu tenho que estudar agora.»', ['Eu', 'tenho', 'que', 'estudar', 'agora.'], 'Eu tenho que estudar agora.', '«Ter que» + infinitive.'),
        livre('Write in Portuguese: I want a coffee. I have to study now.', 'Quero um café. Tenho que estudar agora.'),
        livre('Write in Portuguese: Sorry, I do not understand. Can you repeat more slowly?', 'Desculpe, não entendo. Pode repetir mais devagar?'),
      ]),
      producao(5, 'Speak for one minute about a normal day: what you want to do, what you can do, what you need and what you have to do. Use at least one sentence with «tenho fome», «tenho sede» or «tenho sono».'),
    ]),
  ],
});
