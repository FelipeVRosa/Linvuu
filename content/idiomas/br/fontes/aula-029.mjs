import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 29, titulo: 'Polite requests and the conditional', nivel: 'a2',
  objetivo: "Ask for things, information and help politely («eu queria», «gostaria de», «você poderia me ajudar?»), give advice with «deveria», and accept or refuse a request kindly.",
  nota: "You can order, ask for information and make requests in shops, hotels and offices with «queria», «gostaria de» and «poderia», offer help, give advice and answer politely («com prazer», «infelizmente não posso»). Next lesson: continuing actions and the verbs «acabar de», «continuar» and «ficar».",
  sessoes: [
    sessao('S1', 'Queria and gostaria de: asking politely', [
      revisao(5, "Give five instructions aloud with the imperative (lesson 28): «Entre.» «Sente-se.» «Siga reto.» «Não se preocupe.» «Seja bem-vindo.» Then ask a stranger for directions."),
      palavras(8, [
        ['queria', 'keh-REE-ah', 'I would like (polite, lit. I wanted)', ''], ['gostaria de', 'goos-tah-REE-ah djee', 'I would like to (more formal)', ''], ['informação', 'eh~-for-mah-SOW~', 'information', ''], ['repetir', 'heh-peh-TCHEER', 'to repeat', ''],
        ['incomodar', 'eh~-koh-moh-DAR', 'to bother, to disturb', ''], ['um favor', 'oo~ fah-VOR', 'a favor', ''], ['pedido', 'peh-DJEE-doo', 'order; request', ''], ['desculpa', 'djees-KOOL-pah', 'sorry; excuse', ''],
      ]),
      gramatica(12, "Softening a wish: queria, gostaria de, precisava", "STEP 1: to ask for something politely, Brazilians use the imperfect (lesson 21) instead of the present: «Eu queria um café» (I would like a coffee) sounds kinder than «Eu quero um café», which is not rude among friends but can sound abrupt to a stranger. The imperfect creates a little distance and means «I would like». STEP 2: «gostaria de» is the more formal version, followed by an infinitive or a noun: «Eu gostaria de saber o preço», «Eu gostaria de uma mesa para dois». Note that «gostar» always needs «de». STEP 3: after «queria» you do not need «de»: «Queria saber», «Queria reservar uma mesa», «Queria um quilo de arroz.» STEP 4: other verbs also soften with the imperfect: «Eu precisava de uma informação», «Eu ia perguntar uma coisa». These are common in shops and offices. STEP 5: add «por favor», say «com licença» before you start, and keep a friendly tone: «Com licença, eu queria uma informação, por favor.» STEP 6: «Desculpe incomodar, mas…» (sorry to bother you, but…) is a polite way to start with a stranger.", {
        tag: 'Politeness',
        comparacao: "English also softens with a past form: «I wanted to ask you something», «I was wondering if…», «I'd like…» (from «I would like»). Portuguese «queria» does the same job as «I'd like». The big difference: the Portuguese form is a plain imperfect of «querer», and you do not need an auxiliary like «would».",
        tabela: [
          { direct: 'Quero um café.', polite: 'Queria um café.', very_polite: 'Gostaria de um café.' },
          { direct: 'Quero saber o preço.', polite: 'Queria saber o preço.', very_polite: 'Gostaria de saber o preço.' },
          { direct: 'Quero falar com o gerente.', polite: 'Queria falar com o gerente.', very_polite: 'Gostaria de falar com o gerente.' },
          { direct: 'Preciso de uma informação.', polite: 'Eu precisava de uma informação.', very_polite: 'Eu gostaria de uma informação.' },
          { direct: 'Quero fazer uma reserva.', polite: 'Queria fazer uma reserva.', very_polite: 'Gostaria de fazer uma reserva.' },
        ],
        exemplos: [
          ['Com licença, eu queria uma informação, por favor.', 'Excuse me, I would like some information, please.'], ['Eu gostaria de falar com a gerente.', 'I would like to speak to the manager.'], ['Desculpe incomodar, mas eu queria perguntar uma coisa.', 'Sorry to bother you, but I wanted to ask something.'], ['Queria um pedaço de bolo, por favor.', 'I would like a piece of cake, please.'],
        ],
        erros: [["Eu quero um café. (to a stranger, with no «por favor»)", "Eu queria um café, por favor.", "«Quero» is not wrong, but «queria» plus «por favor» is the polite default."], ["Eu gostaria um café.", "Eu gostaria de um café.", "«Gostar» always takes «de» before the thing you want."], ["Eu queria de saber o preço.", "Eu queria saber o preço.", "After «queria» + infinitive there is no «de»."]],
      }),
      producao(5, "Order aloud at a café, a bakery and a shop, using «queria» each time: «Eu queria um café com leite, por favor.» Then ask for information with «gostaria de»."),
    ]),
    sessao('S2', 'Poderia: the polite request', [
      revisao(4, "Say: «Eu queria uma informação.» «Eu gostaria de saber o preço.» «Desculpe incomodar, mas…» Then ask for an item at a shop with «queria»."),
      palavras(6, [
        ['cardápio', 'kar-DAH-pyoo', 'menu', ''], ['reserva', 'heh-ZEHR-vah', 'reservation, booking', ''], ['conta', 'KOH~-tah', 'the bill, check', ''], ['troco', 'TROH-koo', 'change (money back)', ''], ['sacola', 'sah-KOH-lah', 'shopping bag', ''], ['desconto', 'djees-KOH~-too', 'discount', ''],
      ]),
      gramatica(12, "Poderia, deveria, gostaria: the conditional of a few common verbs", "STEP 1: to make a request, Brazilians have a scale. «Pode me ajudar?» is neutral. «Você pode…?» is also neutral. «Você poderia…?» is more polite. «Será que você poderia…?» (lesson 27) is extra polite. In informal contexts you also hear «Dá pra…?» («Dá pra abrir a janela?»). STEP 2: «poderia» is the conditional of «poder». The conditional is formed with the infinitive + the endings «-ia, -ia, -íamos, -iam» (the same endings as the imperfect of -er verbs: «comia, comíamos»). For now you only need it for a few verbs: «poderia, gostaria, deveria, seria, teria». STEP 3: «deveria» + infinitive gives advice: «Você deveria descansar» (you should rest). «Poderia» also gives a suggestion: «Você poderia tentar de novo». STEP 4: «seria» is the conditional of «ser»: «Seria possível…?» (would it be possible…?), «Seria ótimo!» (that would be great!). STEP 5: three verbs have irregular stems, like the future of lesson 27: «fazer → faria», «dizer → diria», «trazer → traria». The full conditional is the subject of lesson 41; here learn just the verbs in the table. STEP 6: pronouns: in speech «Você poderia me ajudar?», «Poderia me dar uma informação?» The pronoun goes before the second verb. Written and formal: «Poderia ajudar-me?» or «Poderia ajudá-lo?». STEP 7: to offer help, use the present: «Posso te ajudar?», «Em que posso ajudar?», «Quer ajuda?».", {
        tag: 'Politeness',
        comparacao: "English uses «could» and «would» («Could you help me?», «You should rest»). Portuguese uses the conditional endings on the infinitive: «poderia», «deveria». The English «would» and «could» are single words that you add; Portuguese puts the ending on the verb. There is no inversion: not «Poderia você me ajudar?» as in English «Could you…».",
        tabela: [
          { person: 'eu', poder: 'poderia', gostar: 'gostaria', dever: 'deveria' },
          { person: 'você, ele, ela, a gente', poder: 'poderia', gostar: 'gostaria', dever: 'deveria' },
          { person: 'nós', poder: 'poderíamos', gostar: 'gostaríamos', dever: 'deveríamos' },
          { person: 'vocês, eles, elas', poder: 'poderiam', gostar: 'gostariam', dever: 'deveriam' },
        ],
        exemplos: [
          ['Você poderia me trazer o cardápio, por favor?', 'Could you bring me the menu, please?'], ['Você poderia repetir, por favor?', 'Could you repeat that, please?'], ['Você deveria descansar um pouco.', 'You should rest a little.'], ['Seria possível ter uma mesa perto da janela?', 'Would it be possible to have a table near the window?'],
        ],
        erros: [["Poderia você me ajudar?", "Você poderia me ajudar? / Poderia me ajudar?", "Portuguese does not invert the subject in questions. The subject is before the verb or dropped."], ["Você poderia me ajudando?", "Você poderia me ajudar?", "After «poderia» the second verb is an infinitive."], ["Você deveria descansaria.", "Você deveria descansar.", "Only the first verb takes the conditional ending."], ["Eu poderia me ajudar?", "Você poderia me ajudar?", "To ask someone else for help, the subject is «você». «Eu poderia…?» means «could I…?»."]],
      }),
      producao(8, "Make six polite requests aloud for a restaurant and a hotel: «Você poderia me trazer a conta?» «Poderia repetir, por favor?» «Seria possível ter um desconto?» Then give two pieces of advice with «deveria»."),
    ]),
    sessao('S3', 'Saying yes, saying no, and a hotel check-in', [
      revisao(4, "Say the polite versions: «Quero uma mesa.» «Preciso de ajuda.» «Pode repetir?» «Me traz a conta.» Then say two pieces of advice with «deveria»."),
      palavras(5, [
        ['preencher', 'preh-eh~-SHEHR', 'to fill in (a form)', ''], ['formulário', 'for-moo-LAH-ryoo', 'form', ''], ['toalha', 'TWAH-lyah', 'towel', ''], ['com prazer', 'koh~ prah-ZEHR', 'with pleasure, gladly', ''], ['infelizmente', 'eh~-feh-leez-MEH~-tchee', 'unfortunately', ''], ['adoraria', 'ah-doh-rah-REE-ah', 'I would love to', ''],
      ]),
      gramatica(8, "Accepting, refusing, thanking, apologizing", "STEP 1: to say yes to a request, use short warm answers: «Claro!», «Com prazer», «Sem problema», «Pois não» (the last one is typical of shop assistants and waiters: «Pois não?» = «How can I help you?» and «Pois não!» = «Of course»). STEP 2: to say no, soften the answer and give a reason: «Infelizmente não posso», «Sinto muito, mas não dá», «Que pena, mas hoje não vai dar» (what a pity, but today it will not work out). «Não dá» is the most spoken way to say «I cannot / it's not possible». STEP 3: for invitations, «Adoraria!» (I would love to) is a warm yes: «Adoraria, mas já tenho um compromisso» (I already have an appointment). A kind refusal can add «Fica pra próxima» (let's do it next time). STEP 4: thank properly: «Muito obrigado pela ajuda» (thank you for the help), «Obrigada de novo», «Agradeço muito». STEP 5: apologize: «Desculpa o incômodo» (sorry for the trouble), «Desculpe a demora» (sorry for the delay). STEP 6: culture note: in Brazil people soften refusals and rarely say a bare «não». If someone says «Vamos marcar» (let's arrange it) without a date, it can be a polite way of closing the subject, not a firm plan.", {
        tag: 'Politeness',
        comparacao: "English also says «I'd love to, but…» and «Unfortunately…». The Portuguese «adoraria» works like «I'd love to». But a direct «No, I can't» is less common in Portuguese: a reason or a regret («infelizmente», «que pena») is almost always added.",
        tabela: [
          { function: 'accept a request', phrase: 'Claro! / Com prazer. / Sem problema.', example: 'Você poderia me ajudar? — Claro!' },
          { function: 'shop assistant: how can I help?', phrase: 'Pois não?', example: 'Boa tarde! Pois não?' },
          { function: 'refuse politely', phrase: 'Infelizmente não posso. / Não dá.', example: 'Infelizmente não posso hoje, mas amanhã sim.' },
          { function: 'accept an invitation warmly', phrase: 'Adoraria!', example: 'Quer jantar com a gente? — Adoraria!' },
          { function: 'thank', phrase: 'Muito obrigado(a) pela ajuda.', example: 'Muito obrigada pela ajuda!' },
          { function: 'apologize', phrase: 'Desculpe o incômodo. / Desculpe a demora.', example: 'Desculpe a demora, tive um problema.' },
        ],
        erros: [["Não. (alone, as an answer to an invitation)", "Infelizmente não posso. / Que pena, mas não dá.", "A bare «não» can sound blunt. Add a regret or a reason."], ["Eu amaria ir.", "Eu adoraria ir.", "«Adoraria» is the usual conditional for «I would love to»."], ["Obrigado por a ajuda.", "Obrigado pela ajuda.", "«Por» + «a» contracts to «pela» (lesson 31 explains this)."]],
      }),
      dialogo(8, 'Checking in at a hotel', "Carlos arrives at a hotel in the afternoon. The receptionist helps him.", [
        ['The receptionist', 'Boa tarde! Pois não?', 'Good afternoon! How can I help you?'],
        ['Carlos', 'Boa tarde. Eu queria fazer o check-in, por favor. Tenho uma reserva para três noites.', 'Good afternoon. I would like to check in, please. I have a reservation for three nights.'],
        ['The receptionist', 'Claro. Pode me dar o seu nome?', 'Of course. Could you give me your name?'],
        ['Carlos', 'Carlos Mendes.', 'Carlos Mendes.'],
        ['The receptionist', 'Encontrei. O senhor poderia preencher este formulário?', 'Found it. Could you fill in this form?'],
        ['Carlos', 'Claro. Também gostaria de saber se o café da manhã está incluído.', 'Of course. I would also like to know if breakfast is included.'],
        ['The receptionist', 'Está, sim. É das sete às dez.', 'Yes, it is. It is from seven to ten.'],
        ['Carlos', 'Perfeito. E você poderia me mandar mais uma toalha no quarto?', 'Perfect. And could you send me one more towel to the room?'],
        ['The receptionist', 'Com prazer. Mando agora mesmo.', "Gladly. I'll send it right now."],
        ['Carlos', 'Muito obrigado.', 'Thank you very much.'],
      ]),
      producao(5, "Roleplay: you are at a hotel desk. Ask politely for a towel, for information about breakfast and for a late checkout. Then accept an offer with «Claro, obrigado», and refuse one with «Infelizmente não posso»."),
    ]),
    sessao('S4', 'Review and practice of lesson 29', [
      revisao(5, "Say a polite request for each of these: a menu, the bill, a discount, a repetition, a table by the window. Use «queria», «gostaria de» and «poderia»."),
      exercicios(20, [
        ouvir('Eu queria um café, por favor.', ['Eu queria um café, por favor.', 'Eu quero um café.', 'Eu tinha um café.'], 'Eu queria um café, por favor.', '«Queria» is the polite default in shops.'),
        ouvir('Eu gostaria de uma mesa para dois.', ['Eu gostaria de uma mesa para dois.', 'Eu gostaria uma mesa para dois.', 'Eu gosto de uma mesa para dois.'], 'Eu gostaria de uma mesa para dois.', '«Gostaria de» + noun.'),
        ouvir('Você poderia repetir, por favor?', ['Você poderia repetir, por favor?', 'Você pode repetir, por favor?', 'Você repetiu, por favor?'], 'Você poderia repetir, por favor?', '«Poderia» is more polite than «pode».'),
        ouvir('Seria possível ter um desconto?', ['Seria possível ter um desconto?', 'É possível ter um desconto?', 'Será possível ter um desconto?'], 'Seria possível ter um desconto?', '«Seria possível» is a very polite opener.'),
        ouvir('Infelizmente não posso.', ['Infelizmente não posso.', 'Felizmente posso.', 'Infelizmente não quis.'], 'Infelizmente não posso.', 'A soft refusal.'),
        ouvir('Adoraria, mas hoje não dá.', ['Adoraria, mas hoje não dá.', 'Adorei, mas hoje não dá.', 'Adoraria, e hoje dá.'], 'Adoraria, mas hoje não dá.', '«Não dá» = it is not possible.'),
        ditado('Eu queria uma informação.', 'Write: Eu queria uma informação.'),
        ditado('Você poderia me ajudar?', 'Write: Você poderia me ajudar?'),
        ditado('Com prazer.', 'Write: Com prazer.'),
        mc('Which sentence is the most polite way to ask for the bill?', ['Você poderia me trazer a conta?', 'Me traz a conta.', 'Traz a conta.'], 'Você poderia me trazer a conta?', '«Você poderia» is the polite form.'),
        mc('Which means «I would like to know the price»?', ['Eu gostaria de saber o preço.', 'Eu gostaria saber o preço.', 'Eu gosto de saber o preço.'], 'Eu gostaria de saber o preço.', '«Gostaria de» + infinitive.'),
        mc('What does a shop assistant mean by «Pois não?»', ['How can I help you?', 'Why not?', 'No, thank you.'], 'How can I help you?', 'A common service phrase.'),
        mc('How do you give advice «You should rest»?', ['Você deveria descansar.', 'Você devia descansaria.', 'Você deve descansando.'], 'Você deveria descansar.', '«Deveria» + infinitive.'),
        mc('Which is a polite refusal?', ['Infelizmente não posso.', 'Não.', 'Não quero.'], 'Infelizmente não posso.', 'Add regret or a reason.'),
        mc('What does «Desculpe a demora» mean?', ['Sorry for the delay.', 'Sorry for the noise.', 'Sorry for the price.'], 'Sorry for the delay.', '«Demora» = delay, wait.'),
        lacuna('Eu ___ um café, por favor. (polite)', ['queria', 'quero', 'querer'], 'queria', 'The imperfect softens the request.'),
        lacuna('Eu gostaria ___ saber o preço.', ['de', 'a', 'que'], 'de', '«Gostaria de» + infinitive.'),
        lacuna('Você ___ me ajudar? (could)', ['poderia', 'poderá', 'podia ajudar'], 'poderia', 'Conditional of «poder».'),
        lacuna('Muito obrigado ___ ajuda. (for the)', ['pela', 'por a', 'para'], 'pela', '«Por + a» = «pela».'),
        ordem('Put in order: «Você poderia me mandar uma toalha?»', ['Você', 'poderia', 'me', 'mandar', 'uma', 'toalha?'], 'Você poderia me mandar uma toalha?', 'Subject, conditional, pronoun, infinitive.'),
        livre('Write in Portuguese: Excuse me, I would like some information, please.', 'Com licença, eu queria uma informação, por favor.'),
        livre('Write in Portuguese: Unfortunately I cannot, but thank you for the help.', 'Infelizmente não posso, mas obrigado pela ajuda.'),
      ]),
      producao(5, "Make a short polite phone call aloud: ask a restaurant for a table for four on Saturday, ask if they have a menu for vegetarians, and thank them politely."),
    ]),
  ],
});
