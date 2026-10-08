import { aula, sessao, revisao, producao, palavras, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 27, titulo: 'The future: ir + infinitive and the simple future', nivel: 'a2',
  objetivo: "Talk about plans, promises and predictions with «vou falar» and with the simple future («falarei», «fará», «choverá»), and know when each one is used in speech and in writing.",
  nota: "You can use the near future («vou viajar»), the present for fixed plans («amanhã eu viajo») and the simple future in formal texts, forecasts and promises, including the irregular «farei», «direi» and «trarei». Next lesson: the imperative, for instructions and directions.",
  sessoes: [
    sessao('S1', 'Two futures: «vou falar» and «falarei»', [
      revisao(5, "Say five comparisons from lesson 26, for example «O metrô é mais rápido do que o ônibus.» Then say what you are going to do tomorrow with «vou» + infinitive (lesson 17)."),
      palavras(8, [
        ['amanhã', 'ah-mah-NYAH~', 'tomorrow', ''], ['semana que vem', 'seh-MAH-nah kee VEH~ee~', 'next week', ''], ['mês que vem', 'MEHS kee VEH~ee~', 'next month', ''], ['ano que vem', 'AH-noo kee VEH~ee~', 'next year', ''],
        ['daqui a', 'dah-KEE ah', 'in (a period of time from now)', ''], ['em breve', 'eh~ BREH-vee', 'soon', ''], ['próximo', 'PROH-see-moo', 'next', ''], ['plano', 'PLAH-noo', 'plan', ''],
        ['prometer', 'proh-meh-TEHR', 'to promise', ''], ['promessa', 'proh-MEH-sah', 'promise', ''],
      ]),
      gramatica(12, "The simple future: infinitive + -ei, -á, -emos, -ão", "STEP 1: you already know the near future with «ir» + infinitive (lesson 17): «Eu vou falar», «Ela vai comer». It is the normal way of talking about the future in conversation. STEP 2: Portuguese also has a one-word future, the simple future. To form it, keep the whole infinitive and add the endings: «-ei» (eu), «-á» (você, ele, ela, a gente), «-emos» (nós), «-ão» (vocês, eles, elas). The endings are the same for -ar, -er and -ir verbs: «falar → falarei», «comer → comerei», «abrir → abrirei». STEP 3: stress. The stress falls on the ending: «falarei» (fah-lah-RAY), «falará» (fah-lah-RAH), «falarão» (fah-lah-ROW~). The written accent on «-á» matters: «falará» is the future; «falara» (no accent) is a rare written past form. STEP 4: the simple future sounds formal. You will see and hear it in news, forecasts, announcements, contracts, speeches, written promises, and in some set phrases. In ordinary conversation people say «vou falar», «vou comer». STEP 5: Portuguese often uses the present tense for plans that are already fixed, with a time word: «Amanhã eu viajo», «A reunião começa às nove». STEP 6: time words that go with the future: «amanhã, depois de amanhã, semana que vem, mês que vem, ano que vem, daqui a duas semanas, em breve, mais tarde, no próximo mês».", {
        tag: 'Future',
        comparacao: "English builds the future with an auxiliary, «will» or «going to»: «I will speak», «I am going to speak». Portuguese has the same two ideas, but the one-word future («falarei») sounds more formal than «will» does in English. The spoken equivalent of both «will» and «going to» is usually «vou falar». The present is also common, as in English («I leave tomorrow»).",
        tabela: [
          { person: 'eu', falar: 'falarei', comer: 'comerei', abrir: 'abrirei' },
          { person: 'você, ele, ela, a gente', falar: 'falará', comer: 'comerá', abrir: 'abrirá' },
          { person: 'nós', falar: 'falaremos', comer: 'comeremos', abrir: 'abriremos' },
          { person: 'vocês, eles, elas', falar: 'falarão', comer: 'comerão', abrir: 'abrirão' },
        ],
        exemplos: [
          ['Amanhã eu vou chegar mais cedo.', 'Tomorrow I will arrive earlier. (spoken)'], ['A loja abrirá às nove horas.', 'The shop will open at nine o\'clock. (written, formal)'], ['Eles comerão em casa hoje.', 'They will eat at home today. (more formal)'], ['Daqui a duas semanas eu viajo.', 'In two weeks I am traveling. (present for a fixed plan)'],
        ],
        erros: [["Amanhã eu vou ir ao mercado.", "Amanhã eu vou ao mercado. / Amanhã eu irei ao mercado.", "«Vou» is already a form of «ir». Do not put «ir» after it when «ir» is the main verb."], ["Eu vou falarei com ele.", "Eu vou falar com ele. / Eu falarei com ele.", "Do not combine «ir» with the future endings: choose one future."], ["Eles falarám amanhã.", "Eles falarão amanhã.", "The 3rd person plural of the future ends in -ão, not in -am."], ["Ele falara amanhã. (no accent)", "Ele falará amanhã.", "The accent in «-á» marks the future. «Falara» is a different, older past form."]],
      }),
      producao(5, "Say six sentences about next week with «vou» + infinitive, and then repeat two of them with the simple future in a formal voice: «Eu viajarei…», «A reunião começará…»."),
    ]),
    sessao('S2', 'Irregular futures and «será que»', [
      revisao(4, "Conjugate aloud in the simple future: «falar», «comer» and «abrir» in the persons eu, ele and eles."),
      palavras(6, [
        ['chover', 'shoh-VEHR', 'to rain', ''], ['previsão do tempo', 'preh-vee-ZOW~ doo TEH~-poo', 'weather forecast', ''], ['temperatura', 'teh~-peh-rah-TOO-rah', 'temperature', ''], ['graus', 'GROWS', 'degrees', ''],
        ['céu', 'SEH-oo', 'sky', ''], ['vento', 'VEH~-too', 'wind', ''],
      ]),
      gramatica(12, "Three irregular futures, ser, ter, ir, and «será que»", "STEP 1: only three verbs change the stem of the simple future. They lose the syllable before the final -r: «fazer → farei», «dizer → direi», «trazer → trarei». The endings are the regular ones. STEP 2: every other verb, including the irregular ones in the present, uses the full infinitive: «ser → serei», «estar → estarei», «ter → terei», «ir → irei», «ver → verei», «vir → virei», «poder → poderei», «querer → quererei», «saber → saberei». «Pôr» has the stem «por-»: «porei». STEP 3: weather and forecasts use the third person: «Amanhã fará calor», «Choverá no fim de semana», «O céu ficará nublado». In conversation: «Amanhã vai fazer calor», «Vai chover». STEP 4: «Será que…?» is a very common way to wonder about something. It is the future of «ser» followed by «que» and a clause in the present: «Será que ele vem?» (I wonder if he is coming), «Será que vai chover?». STEP 5: do not confuse «irei» (future of ir, formal) with «vou» (present of ir used as a near future). In speech people say «vou ao banco amanhã», not «irei ao banco amanhã». STEP 6: pronouns. The written future can take the pronoun before the verb: «Eu lhe mandarei o documento», «Nós te ligaremos». A third form, with the pronoun inside the verb («dar-lhe-ei»), is only literary, so you do not need to use it.", {
        tag: 'Future',
        comparacao: "English has one irregular-looking future (the same «will + verb» for everyone). Portuguese has regular endings and only three irregular stems: «farei, direi, trarei». The question «Will he come?» is said as a plain question («Ele vem?») or with wonder: «Será que ele vem?». Note that «será» also exists as a plain future of «ser»: «Ela será professora.»",
        tabela: [
          { person: 'eu', fazer: 'farei', dizer: 'direi', trazer: 'trarei' },
          { person: 'você, ele, ela, a gente', fazer: 'fará', dizer: 'dirá', trazer: 'trará' },
          { person: 'nós', fazer: 'faremos', dizer: 'diremos', trazer: 'traremos' },
          { person: 'vocês, eles, elas', fazer: 'farão', dizer: 'dirão', trazer: 'trarão' },
        ],
        exemplos: [
          ['Amanhã fará calor em todo o país.', 'Tomorrow it will be hot throughout the country.'], ['Eu direi a verdade ao professor.', 'I will tell the truth to the teacher.'], ['Será que ela vem à festa?', 'I wonder whether she is coming to the party.'], ['Eles serão os primeiros a chegar.', 'They will be the first to arrive.'],
        ],
        erros: [["Eu fazerei o trabalho amanhã.", "Eu farei o trabalho amanhã.", "«Fazer» has the irregular stem «far-»."], ["Ele dizerá a verdade.", "Ele dirá a verdade.", "«Dizer» becomes «dir-»."], ["Ela trazerá o livro.", "Ela trará o livro.", "«Trazer» becomes «trar-»."], ["Será que vai chovendo?", "Será que vai chover?", "After «será que» the clause is a normal sentence: «vai chover», «chove», «ele vem»."]],
      }),
      producao(8, "Make a short weather forecast aloud for tomorrow, first in speech («Amanhã vai fazer calor, vai chover à tarde») and then in the formal future («Amanhã fará calor, choverá…»)."),
    ]),
    sessao('S3', 'Which future, where? The weather forecast', [
      revisao(4, "Say: «Eu farei», «ela dirá», «nós traremos», «eles serão», «eu irei». Then say them in the spoken form with «vou»."),
      palavras(5, [
        ['nublado', 'noo-BLAH-doo', 'cloudy', ''], ['voltar', 'vool-TAR', 'to come back, to return', ''], ['passear', 'pah-see-AR', 'to go for a walk or a ride, to stroll', ''], ['guarda-chuva', 'GWAR-dah SHOO-vah', 'umbrella', ''], ['fim de semana', 'FEE~ djee seh-MAH-nah', 'weekend', ''],
      ]),
      gramatica(8, "Which future in which situation?", "STEP 1: for plans and arrangements in conversation use «ir» + infinitive or the present with a time word: «Vou ligar pra ela», «Amanhã eu trabalho de casa». STEP 2: for predictions in speech use «vai» too: «Vai chover», «Vai dar certo» (it will work out). STEP 3: for official texts, formal e-mails, news, forecasts, instructions in writing, and for promises made with some seriousness, use the simple future: «A reunião acontecerá na sexta-feira», «Informaremos o resultado em breve», «Chegarei às duas». STEP 4: in a written promise you may also choose the present: «Eu te ligo!» (I will call you). It is warm and typical of Brazil. STEP 5: for wondering, use «será que»: «Será que o ônibus vai atrasar?». STEP 6: for «in X time», use «daqui a»: «Daqui a duas horas eu saio.» Do not use «em duas horas» for a future starting from now: «em duas horas» means «within two hours» or «the time it will take».", {
        tag: 'Future',
        comparacao: "English uses «will» in all the situations below. Portuguese lets you choose by context: speech and plans, «vou»; writing and forecasts, the simple future; fixed schedules, the present. Using «farei» in a casual chat sounds like reading from a script.",
        tabela: [
          { situation: 'casual plan with a friend', usual_choice: 'ir + infinitive or present', example: 'Vou te mandar a foto. / Amanhã eu te mando.' },
          { situation: 'prediction in conversation', usual_choice: 'vai + infinitive', example: 'Vai chover hoje à tarde.' },
          { situation: 'weather forecast, news, announcement', usual_choice: 'simple future', example: 'A temperatura chegará a trinta graus.' },
          { situation: 'formal e-mail or contract', usual_choice: 'simple future', example: 'Mandaremos o documento até sexta-feira.' },
          { situation: 'wondering', usual_choice: 'será que', example: 'Será que ela chega cedo?' },
          { situation: 'in X time from now', usual_choice: 'daqui a', example: 'Daqui a dez minutos eu saio.' },
        ],
        erros: [["Em duas horas eu saio. (to mean: two hours from now)", "Daqui a duas horas eu saio.", "«Daqui a» marks a point in the future from now. «Em duas horas» means the time something takes."], ["Eu farei o jantar. (said to a friend in the kitchen, as a casual offer)", "Eu faço o jantar. / Vou fazer o jantar.", "The simple future is too formal for a casual offer."], ["Eu vou chove amanhã.", "Vai chover amanhã.", "Weather verbs have no «eu»: say «vai chover» or «choverá»."]],
      }),
      texto(8, 'Forecast for the week', "Previsão do tempo para a semana.\nNa segunda-feira, o dia será de sol e fará calor em quase toda a cidade. A temperatura chegará a trinta e dois graus durante a tarde.\nNa terça-feira, o céu ficará nublado e a chuva começará no fim da tarde.\nNa quarta-feira, choverá o dia todo e o vento será forte. Será preciso levar um guarda-chuva.\nNa quinta-feira, o sol voltará, mas fará frio de manhã.\nNa sexta-feira não choverá e será um bom dia para passear.\nNo fim de semana, o calor voltará e muita gente irá para a praia.",
        "Weather forecast for the week.\nOn Monday the day will be sunny and it will be hot in almost the whole city. The temperature will reach thirty-two degrees during the afternoon.\nOn Tuesday the sky will be cloudy and the rain will start at the end of the afternoon.\nOn Wednesday it will rain all day and the wind will be strong. It will be necessary to take an umbrella.\nOn Thursday the sun will come back, but it will be cold in the morning.\nOn Friday it will not rain and it will be a good day for a stroll.\nOn the weekend the heat will come back and many people will go to the beach.",
        [["What will the weather be like on Monday?", "O dia será de sol e fará calor."], ["When will the rain start on Tuesday?", "No fim da tarde."], ["What will happen on Wednesday?", "Choverá o dia todo e o vento será forte."], ["Will it rain on Friday?", "Não, não choverá."], ["Where will many people go at the weekend?", "Para a praia."]]),
      producao(5, "Read the forecast aloud, slowly, with the stress on the endings («será, fará, choverá, voltará»). Then say tomorrow's weather in your city in the simple future."),
    ]),
    sessao('S4', 'Review and practice of lesson 27', [
      revisao(5, "Say the simple future of «falar», «fazer», «dizer» and «trazer» in all persons. Then say what the weather will be like on Saturday."),
      exercicios(20, [
        ouvir('Eu falarei com ele amanhã.', ['Eu falarei com ele amanhã.', 'Eu falei com ele ontem.', 'Eu falo com ele amanhã.'], 'Eu falarei com ele amanhã.', 'The ending «-ei» is stressed.'),
        ouvir('Ela fará o trabalho.', ['Ela fará o trabalho.', 'Ela faz o trabalho.', 'Ela fez o trabalho.'], 'Ela fará o trabalho.', '«Fará» is the future of «fazer».'),
        ouvir('Choverá no fim de semana.', ['Choverá no fim de semana.', 'Choveu no fim de semana.', 'Chove no fim de semana.'], 'Choverá no fim de semana.', 'The stress is on «-rá».'),
        ouvir('Vai chover amanhã.', ['Vai chover amanhã.', 'Vai chover ontem.', 'Choveu amanhã.'], 'Vai chover amanhã.', 'The spoken future with «vai».'),
        ouvir('Eles virão à festa.', ['Eles virão à festa.', 'Eles vieram à festa.', 'Eles vêm à festa.'], 'Eles virão à festa.', '«Virão» is the future of «vir».'),
        ouvir('Será que ela vem?', ['Será que ela vem?', 'Ela será que vem?', 'Será ela que vem?'], 'Será que ela vem?', '«Será que» introduces a wondering question.'),
        ditado('Amanhã fará calor.', 'Write: Amanhã fará calor.'),
        ditado('Daqui a duas semanas eu viajo.', 'Write: Daqui a duas semanas eu viajo.'),
        ditado('Nós traremos o bolo.', 'Write: Nós traremos o bolo.'),
        mc('Which is the future of «dizer» for «eu»?', ['direi', 'dizerei', 'dizei'], 'direi', '«Dizer» becomes «dir-».'),
        mc('How does a casual conversation express «I will call you»?', ['Eu te ligo. / Vou te ligar.', 'Ligarei-te.', 'Eu te ligarei, sem dúvida.'], 'Eu te ligo. / Vou te ligar.', 'In casual speech use the present or «ir» + infinitive.'),
        mc('Which sentence would you find in a forecast?', ['O céu ficará nublado.', 'O céu vai ficando nublado.', 'O céu ficou nublado.'], 'O céu ficará nublado.', 'Forecasts use the simple future.'),
        mc('How do you say «in two weeks (from now)»?', ['daqui a duas semanas', 'em duas semanas atrás', 'dentro duas semanas'], 'daqui a duas semanas', '«Daqui a» marks a future point from now.'),
        mc('What does «Será que vai chover?» express?', ['I wonder if it is going to rain.', 'It will certainly rain.', 'It rained.'], 'I wonder if it is going to rain.', '«Será que» expresses wondering.'),
        lacuna('Eles ___ amanhã. (falar, simple future)', ['falarão', 'falaram', 'falam'], 'falarão', 'The 3rd person plural ends in -ão.'),
        lacuna('Eu ___ a verdade. (dizer, simple future)', ['direi', 'dizerei', 'disse'], 'direi', 'Irregular stem: dir-.'),
        lacuna('Amanhã ___ frio. (fazer, simple future)', ['fará', 'faz', 'fez'], 'fará', 'The weather: «fará frio».'),
        lacuna('___ a dez minutos eu saio. (in ten minutes)', ['Daqui', 'Em', 'Depois'], 'Daqui', '«Daqui a dez minutos».'),
        ordem('Put in order: «Amanhã fará calor em toda a cidade.»', ['Amanhã', 'fará', 'calor', 'em', 'toda', 'a', 'cidade.'], 'Amanhã fará calor em toda a cidade.', 'Time, verb, weather word, place.'),
        livre('Write in Portuguese (spoken): I am going to call you tomorrow.', 'Vou te ligar amanhã.'),
        livre('Write in Portuguese (formal): We will send the document next week.', 'Mandaremos o documento na semana que vem.'),
      ]),
      producao(5, "Make a short announcement aloud, in the formal future: say what will happen at a school or a company next month, what time it will start and who will be there."),
    ]),
  ],
});
