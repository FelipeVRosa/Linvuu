import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 12, titulo: 'Essential irregular verbs', nivel: 'a1',
  objetivo: 'Use the present tense of ir, fazer, poder, ver, vir, dizer, pôr, saber and conhecer to say where you go, what you do, what you can do, what you see and say, and to tell «saber» from «conhecer».',
  nota: 'You can use nine of the most common irregular verbs in the present tense, say where you are going and ask for permission with «posso…?». Next lesson: «querer, poder, dever, precisar» and «ter que» with an infinitive.',
  sessoes: [
    sessao('S1', 'The verbs «ir» and «fazer»', [
      revisao(5, 'Ask for directions with «Com licença, onde fica…?» and give two directions with «você segue reto» and «você vira à direita». Say how you get to a place: «de ônibus», «de metrô», «a pé».'),
      palavras(8, [
        ['ir', 'EER', 'to go', ''], ['fazer', 'fah-ZEHR', 'to do, to make', ''], ['o que você faz?', 'oo kee voh-SEH FAHSS', 'what do you do? (job or activity)', ''], ['para onde você vai?', 'PAH-rah OH~-djee voh-SEH VY', 'where are you going?', ''],
        ['o cinema', 'oo see-NEH-mah', 'cinema, movie theater', ''], ['a praia', 'ah PRY-ah', 'beach', ''], ['o parque', 'oo PAR-kee', 'park', ''], ['o exercício', 'oo eh-zehr-SEE-see-oo', 'exercise', ''], ['a lição', 'ah lee-SOW~', 'lesson, homework exercise', ''],
      ]),
      gramatica(12, '«Ir» (to go) and «fazer» (to do, to make)', "STEP 1: until now you met regular verbs. Now come the verbs that change shape. «Ir» is the most irregular of all: eu vou, você vai, ele vai, ela vai, nós vamos, a gente vai, vocês vão, eles vão, elas vão. Learn these six forms by heart. STEP 2: after «ir» the place has a preposition. In careful writing, use «a» for a short visit: «Vou ao banco», «Vou à padaria», «Vou aos Estados Unidos» (the contraction of «a» + o, a, os, as: ao, à, aos, às). Use «para» for a destination where you will stay or go back: «Vou para casa», «Vou para o trabalho». STEP 3: in speech, «para» is «pra» and it merges with the article: para + o = pro, para + a = pra: «Vou pro trabalho», «Vou pra casa», «Vou pra escola». And many Brazilians simply say «Vou no banco», «Vou na padaria» with «em»; it is very common in speech, but write «ao» and «à» in formal writing. STEP 4: to say how you go use «de» + vehicle: «Vou de ônibus» and «Vou a pé». «Ir embora» means to leave: «Eu vou embora às seis». STEP 5: «Vamos» also means «let's go» and it is used to propose a plan: «Vamos ao cinema?». STEP 6: to ask where, say «Para onde você vai?», or «Aonde você vai?» in careful style. In speech people often say just «Onde você vai?». STEP 7: «fazer» is irregular only in the first person (faço). Eu faço, você faz, ele faz, ela faz, nós fazemos, a gente faz, vocês fazem. Remember the spelling: «faço» with ç. STEP 8: «fazer» means to do and to make: «fazer exercício», «fazer a lição», «fazer o café», «fazer compras» (to go shopping). Asking «O que você faz?» usually means «What is your job?», and «O que você está fazendo?» (later) means «What are you doing now?». STEP 9: «fazer» is also used for weather: «Faz frio» (it is cold), «Faz calor» (it is hot), «Faz sol» (it is sunny).", {
        tag: 'Verbs',
        comparacao: "English uses the same «go» for any destination and the preposition «to». Portuguese has several: «ao banco», «para casa», «pro trabalho». English «do» and «make» are different verbs; Portuguese «fazer» covers both («fazer a lição», «fazer um café»). English weather uses «it is» («it is cold»); Portuguese uses «faz» («faz frio»).",
        tabelas: [
          { titulo: 'ir', linhas: [
            { person: 'eu', form: 'vou', example: 'Eu vou ao cinema.' },
            { person: 'você, ele, ela, a gente', form: 'vai', example: 'Ela vai para casa.' },
            { person: 'nós', form: 'vamos', example: 'Nós vamos à praia.' },
            { person: 'vocês, eles, elas', form: 'vão', example: 'Eles vão ao parque.' },
          ] },
          { titulo: 'fazer', linhas: [
            { person: 'eu', form: 'faço', example: 'Eu faço exercício.' },
            { person: 'você, ele, ela, a gente', form: 'faz', example: 'Você faz a lição?' },
            { person: 'nós', form: 'fazemos', example: 'Nós fazemos compras.' },
            { person: 'vocês, eles, elas', form: 'fazem', example: 'Eles fazem café.' },
          ] },
        ],
        erros: [['Eu vai ao cinema.', 'Eu vou ao cinema.', 'With «eu» the form is «vou».'], ['Eu fazo exercício.', 'Eu faço exercício.', 'The first person of «fazer» is «faço», with ç.'], ['Eu vou a o cinema.', 'Eu vou ao cinema.', '«A» + «o» must be written «ao».'], ['Vou em casa.', 'Vou para casa. / Vou pra casa.', 'After «ir» use «para» (or «pra»), not «em», for «home».']],
      }),
      producao(5, 'Tell out loud where you go during the week: «Eu vou ao trabalho… Eu vou à escola… Nós vamos ao cinema…». Then say three things you do: «Eu faço exercício», «Eu faço a lição».'),
    ]),
    sessao('S2', 'The verbs «poder, ver, vir, dizer»', [
      revisao(4, 'Conjugate «ir» and «fazer» without looking: vou, vai, vamos, vão and faço, faz, fazemos, fazem. Say where you are going tonight with «Vou ao…».'),
      palavras(6, [
        ['poder', 'poh-DEHR', 'to be able to, can; may', ''], ['ver', 'VEHR', 'to see; to watch', ''], ['vir', 'VEER', 'to come', ''], ['dizer', 'djee-ZEHR', 'to say, to tell', ''],
        ['repetir', 'heh-peh-TCHEER', 'to repeat', ''], ['de novo', 'djee NOH-voo', 'again', ''], ['o filme', 'oo FEE-oo-mee', 'movie, film', ''], ['o cardápio', 'oo kar-DAH-pee-oo', 'menu', ''],
      ]),
      gramatica(12, '«Poder», «ver», «vir» and «dizer»', "STEP 1: «poder» (can, may): eu posso, você pode, ele pode, ela pode, nós podemos, a gente pode, vocês podem, eles podem. The first person has «ss»: «posso». It is followed by an infinitive: «Posso entrar?» (May I come in?), «Você pode repetir, por favor?» (Can you repeat, please?). It is used for ability («Eu posso ir hoje»), for permission («Posso ver o cardápio?») and for polite requests. «Pode ser» means «that's fine» or «maybe». The modals have their own lesson next. STEP 2: «ver» (to see): eu vejo, você vê, nós vemos, vocês veem. The third person singular «vê» has a circumflex, and the plural «veem» has no accent. «Ver» is also used for movies: «Vamos ver um filme?». In Brazil people say, too, «assistir a um filme»: «assistir» means to watch and never to help. STEP 3: «vir» (to come): eu venho, você vem, nós vimos, vocês vêm. The singular «vem» has no accent; the plural «vêm» has a circumflex, which is the only way to tell «ele vem» from «eles vêm» in writing. You say «vir» when the movement is toward the speaker or the place you are talking about: «Você vem aqui?», «Eu venho de ônibus». You say «ir» when it goes away: «Eu vou aí». Also «Venho do Canadá» means «I come from Canada». STEP 4: «dizer» (to say, to tell): eu digo, você diz, nós dizemos, vocês dizem. «Como você diz «please» em português?» means «How do you say please in Portuguese?». «Ele diz que sim» means «He says yes». STEP 5: all four verbs are irregular in the «eu» form (posso, vejo, venho, digo), but in the other persons they follow the normal -er and -ir pattern, with the small exceptions above. STEP 6: useful for the classroom: «Pode repetir, por favor?», «Pode falar de novo?», «Como se diz…?» (how do you say…?), «O que você diz?».", {
        tag: 'Verbs',
        comparacao: "English «can» never changes («I can», «she can»). Portuguese «poder» does: «posso», «pode», «podem». English uses «come» and «go» from the point of view of the speaker, and so does Portuguese: «vir» is toward here, «ir» is away from here. The accent on «vê/veem» and «vem/vêm» is a spelling detail that English does not have.",
        tabelas: [
          { titulo: 'poder and ver', linhas: [
            { person: 'eu', poder: 'posso', ver: 'vejo' },
            { person: 'você, ele, ela, a gente', poder: 'pode', ver: 'vê' },
            { person: 'nós', poder: 'podemos', ver: 'vemos' },
            { person: 'vocês, eles, elas', poder: 'podem', ver: 'veem' },
          ] },
          { titulo: 'vir and dizer', linhas: [
            { person: 'eu', vir: 'venho', dizer: 'digo' },
            { person: 'você, ele, ela, a gente', vir: 'vem', dizer: 'diz' },
            { person: 'nós', vir: 'vimos', dizer: 'dizemos' },
            { person: 'vocês, eles, elas', vir: 'vêm', dizer: 'dizem' },
          ] },
        ],
        erros: [['Eu poso ir.', 'Eu posso ir.', 'The first person is «posso», with double s.'], ['Ela ve o filme.', 'Ela vê o filme.', 'The third person singular of «ver» is «vê», with a circumflex.'], ['Eles vem hoje.', 'Eles vêm hoje.', 'The plural of «vem» takes the circumflex: «vêm».'], ['Eu dizo que sim.', 'Eu digo que sim.', 'The first person of «dizer» is «digo».']],
      }),
      producao(8, 'Make eight sentences, one with each form: «Eu posso…», «Você pode…», «Eu vejo…», «Eles veem…», «Eu venho de…», «Eles vêm…», «Eu digo…», «Ela diz…». Then ask your imaginary teacher to repeat something: «Você pode repetir, por favor?»'),
    ]),
    sessao('S3', 'Pôr, saber, conhecer', [
      revisao(4, 'Conjugate «poder», «ver», «vir» and «dizer» in the singular and plural of «você / vocês». Say «Posso ver o cardápio?» and «Pode repetir?»'),
      palavras(5, [
        ['pôr', 'POHR', 'to put, to place', ''], ['saber', 'sah-BEHR', 'to know (a fact), to know how to', ''], ['conhecer', 'koh-nyeh-SEHR', 'to know (a person or a place), to meet', ''], ['o açúcar', 'oo ah-SOO-kar', 'sugar', ''], ['o endereço', 'oo eh~-deh-REH-soo', 'address', ''], ['o shopping', 'oo SHOH-peeng', 'shopping mall', ''],
      ]),
      gramatica(8, '«Pôr», «saber» and «conhecer»; «saber» or «conhecer»?', "STEP 1: «pôr» (to put): eu ponho, você põe, nós pomos, vocês põem. The circumflex on «pôr» separates it from the preposition «por»; the third person takes a tilde: «põe». Examples: «Eu ponho açúcar no café», «Ela põe a mesa» (she sets the table). «Pomos» is formal; in speech people say «a gente põe». STEP 2: «saber» (to know): eu sei, você sabe, nós sabemos, vocês sabem. It is irregular only in the first person (sei). It means to know a fact or a skill: «Eu sei o endereço», «Você sabe onde fica o banco?», «Ela sabe falar português» (she can speak Portuguese). «Não sei» means «I don't know». STEP 3: «conhecer» (to know a person or a place, to meet): eu conheço, você conhece, nós conhecemos, vocês conhecem. The first person has «ç» to keep the soft sound: «conheço». Examples: «Eu conheço a Ana», «Você conhece São Paulo?», «Prazer em conhecer você» (nice to meet you). STEP 4: the difference: use «saber» for information and for knowing how to do something («Eu sei o nome», «Ele sabe nadar» (he can swim)), and use «conhecer» to be acquainted with someone or somewhere («Eu conheço o Pedro», «Conheço o shopping»). Think: facts are «saber»; people and places are «conhecer». STEP 5: with a person you can use both for different meanings: «Eu sei quem é Ana» (I know who Ana is) and «Eu conheço a Ana» (I know Ana, I have met her).", {
        tag: 'Verbs',
        comparacao: "English has one verb, «know», for facts, people and places. Portuguese has two: «saber» for facts and skills, «conhecer» for people and places. English «can swim» is «sabe nadar» («knows how to swim») in Portuguese. And English «put» is a short regular-sounding verb, while «pôr» has a circumflex and the irregular forms «ponho» and «põe».",
        tabela: [
          { person: 'eu', pôr: 'ponho', saber: 'sei', conhecer: 'conheço' },
          { person: 'você, ele, ela, a gente', pôr: 'põe', saber: 'sabe', conhecer: 'conhece' },
          { person: 'nós', pôr: 'pomos', saber: 'sabemos', conhecer: 'conhecemos' },
          { person: 'vocês, eles, elas', pôr: 'põem', saber: 'sabem', conhecer: 'conhecem' },
        ],
        erros: [['Eu sei a Ana.', 'Eu conheço a Ana.', 'To know a person is «conhecer».'], ['Eu conheço o endereço.', 'Eu sei o endereço.', 'A fact such as an address is «saber».'], ['Eu pono açúcar no café.', 'Eu ponho açúcar no café.', 'The first person is «ponho», with nh.'], ['Ela por a mesa.', 'Ela põe a mesa.', 'Conjugate the verb: «põe». «Por» is only the preposition.']],
      }),
      dialogo(8, 'Plans for tonight', 'Rafael meets Bianca on the street. She is going to the cinema.', [
        ['Rafael', 'Oi, Bianca! O que você faz hoje?', 'Hi, Bianca! What are you doing today?'], ['Bianca', 'Oi, Rafael! Hoje eu vou ao cinema com a Camila. Você pode vir?', 'Hi, Rafael! Today I am going to the cinema with Camila. Can you come?'], ['Rafael', 'Posso, sim. Que filme é?', 'Yes, I can. What film is it?'],
        ['Bianca', 'Eu não sei o nome. A Camila diz que é bom.', "I don't know the name. Camila says it is good."], ['Rafael', 'Tudo bem. A que horas é?', 'Fine. What time is it?'], ['Bianca', 'É às sete. O cinema fica no shopping, perto da praça. Você sabe onde fica?', 'It is at seven. The cinema is in the shopping mall, near the square. Do you know where it is?'],
        ['Rafael', 'Sei, sim. Conheço o shopping. Eu venho de ônibus.', 'Yes, I do. I know the mall. I will come by bus.'], ['Bianca', 'Ótimo! Até logo!', 'Great! See you soon!'],
      ]),
      producao(5, 'Say aloud five sentences with the verbs of the lesson: where you go, what you do, what you can do, who you know (conhecer) and what you know (saber).'),
    ]),
    sessao('S4', 'Review and practice of lesson 12', [
      revisao(5, 'Conjugate in the singular and plural the verbs ir, fazer, poder, ver, vir, dizer, pôr, saber and conhecer, at least the forms «eu», «você» and «vocês».'),
      exercicios(20, [
        ouvir('Eu vou ao cinema.', ['Eu vou ao cinema.', 'Eu vou à praia.', 'Eu vou ao parque.'], 'Eu vou ao cinema.', 'Listen for «cinema».'),
        ouvir('Eles vão para casa.', ['Eles vão para casa.', 'Eles vêm para casa.', 'Ele vai para casa.'], 'Eles vão para casa.', '«Vão» is the plural of «ir» and is nasal.'),
        ouvir('Eu faço exercício.', ['Eu faço exercício.', 'Eu faço a lição.', 'Eu faço o café.'], 'Eu faço exercício.', 'The «ç» sounds like «s».'),
        ouvir('Você pode repetir, por favor?', ['Você pode repetir, por favor?', 'Você pode falar, por favor?', 'Você sabe repetir, por favor?'], 'Você pode repetir, por favor?', 'A polite request with «poder».'),
        ouvir('Eu sei o endereço.', ['Eu sei o endereço.', 'Eu conheço o endereço.', 'Eu vejo o endereço.'], 'Eu sei o endereço.', 'A fact: «saber».'),
        ouvir('Eles vêm de ônibus.', ['Eles vêm de ônibus.', 'Ele vem de ônibus.', 'Eles vão de ônibus.'], 'Eles vêm de ônibus.', 'The plural «vêm» sounds like a nasal diphthong.'),
        ditado('Posso ver o cardápio?', 'Write: Posso ver o cardápio?'), ditado('Ela põe a mesa.', 'Write: Ela põe a mesa.'), ditado('Você conhece São Paulo?', 'Write: Você conhece São Paulo?'), ditado('Vamos ao cinema?', 'Write: Vamos ao cinema?'),
        mc('Which verb do you use to say «I know Ana» (the person)?', ['conheço', 'sei', 'ponho'], 'conheço', 'People and places take «conhecer».'),
        mc('Which verb do you use to say «I know the address»?', ['sei', 'conheço', 'vejo'], 'sei', 'Facts take «saber».'),
        mc('What is «eu» + «ir»?', ['vou', 'vai', 'vamos'], 'vou', 'eu vou.'),
        mc('How do you write «they come»?', ['eles vêm', 'eles vem', 'eles venham'], 'eles vêm', 'The plural has a circumflex.'),
        mc('What does «Pode repetir?» mean?', ['Can you repeat?', 'Can you speak?', 'Can you help?'], 'Can you repeat?', '«Pode» + infinitive is a polite request.'),
        lacuna('Eu ___ ao banco. (ir)', ['vou', 'vai', 'vão'], 'vou', 'First person singular of «ir».'),
        lacuna('Nós ___ compras. (fazer)', ['fazemos', 'fazem', 'faço'], 'fazemos', 'First person plural of «fazer».'),
        lacuna('Ela ___ falar português. (saber)', ['sabe', 'conhece', 'sei'], 'sabe', '«Saber» + infinitive means know how to.'),
        lacuna('Eu ___ açúcar no café. (pôr)', ['ponho', 'põe', 'pomos'], 'ponho', 'First person of «pôr».'),
        ordem('Put in order: «Hoje eu vou ao cinema com a Camila.»', ['Hoje', 'eu', 'vou', 'ao', 'cinema', 'com', 'a', 'Camila.'], 'Hoje eu vou ao cinema com a Camila.', 'Time, subject, verb, destination, company.'),
        ordem('Put in order: «Você sabe onde fica o banco?»', ['Você', 'sabe', 'onde', 'fica', 'o', 'banco?'], 'Você sabe onde fica o banco?', '«Saber» + question word + clause.'),
        livre('Write in Portuguese: I go to work by bus. What do you do? I can come tomorrow.', 'Eu vou ao trabalho de ônibus. O que você faz? Eu posso vir amanhã.'),
        livre('Write in Portuguese: Do you know Pedro? I know the address, but I don\'t know the name of the street.', 'Você conhece o Pedro? Eu sei o endereço, mas não sei o nome da rua.'),
      ]),
      producao(5, 'Have a short conversation with an imaginary friend: ask what they do today, where they go, whether they can come, what they say and whether they know a place or a person.'),
    ]),
  ],
});
