import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 46, titulo: 'The future subjunctive', nivel: 'b1',
  objetivo: 'Form the future subjunctive (for, puder, tiver, quiser, fizer, vier, vir, houver…) and use it after «quando», «assim que», «depois que», «sempre que», «enquanto», «se» and «quem/o que/onde» to talk about future events and possibilities.',
  nota: 'You can now say «Quando eu chegar, ligo para você», «Se eu puder, vou», «Assim que ele chegar, a gente começa», «Faça o que você quiser». Next lesson: hypotheses with «se» (real, unlikely and past), which put together lessons 41, 45 and 46.',
  sessoes: [
    sessao('S1', 'Forming the future subjunctive', [
      revisao(5, 'Say the imperfect subjunctive for «ele» of: falar, ter, fazer, ser, vir, ver, saber, querer, poder. The future subjunctive is made from the same base.'),
      palavras(8, [
        ['for', 'FOR', '(when/if) I/he/she/you are or go', ''], ['puder', 'poo-DER', '(when/if) I/he/she/you can', ''], ['tiver', 'tchee-VER', '(when/if) I/he/she/you have', ''], ['quiser', 'kee-ZER', '(when/if) I/he/she/you want', ''],
        ['fizer', 'fee-ZER', '(when/if) I/he/she/you do or make', ''], ['vier', 'vee-ER', '(when/if) I/he/she/you come', ''], ['vir', 'VEER', '(when/if) I/he/she/you see', ''], ['der', 'DER', '(when/if) it is possible; (if) I/he/she/you give', ''],
      ]),
      gramatica(12, 'Forming the future subjunctive', "STEP 1: the future subjunctive (futuro do subjuntivo) refers to something that has not happened yet, usually after a word such as «quando» or «se». Its source is the same as the imperfect subjunctive: the «eles» form of the preterite. Take the form, drop the final «-ram» and add -r, -res, -r, -rmos, -rem. STEP 2: «falaram» gives «falar», «comeram» gives «comer», «partiram» gives «partir». For all regular verbs the future subjunctive is identical to the infinitive: «quando eu chegar», «se você sair». In the «nós» form it is «chegarmos» and in the «eles» form «chegarem». STEP 3: the irregular verbs use the same irregular stems as the imperfect subjunctive: «fizeram» gives «fizer», «tiveram» gives «tiver», «foram» gives «for», «puderam» gives «puder», «quiseram» gives «quiser», «vieram» gives «vier», «souberam» gives «souber», «deram» gives «der». STEP 4: watch the pair «ver» and «vir». «Ver» (to see) gives «vir», and «vir» (to come) gives «vier»: «Se você vir o João» (if you see João) and «Se você vier amanhã» (if you come tomorrow). STEP 5: «ser» and «ir» are identical again: «for». STEP 6: because regular forms look like infinitives, trust the meaning: «Quando eu chegar» means «when I arrive», and the subject («eu») tells you it is conjugated.", {
        tag: 'Subjunctive',
        comparacao: "English uses the present tense in these sentences: «When I arrive, I will call you», «If you can, come early». Portuguese needs a special future form after «quando», «se» and similar words. For regular verbs, the form is easy: just say the infinitive after the subject. The irregular ones are the same you learned in lesson 45.",
        tabelas: [
          { titulo: 'Regular verbs (identical to the infinitive)', linhas: [
            { person: 'eu, você, ele, ela, a gente', falar: 'falar', comer: 'comer', partir: 'partir' },
            { person: 'nós', falar: 'falarmos', comer: 'comermos', partir: 'partirmos' },
            { person: 'vocês, eles, elas', falar: 'falarem', comer: 'comerem', partir: 'partirem' },
          ] },
          { titulo: 'ser/ir, estar, ter, fazer', linhas: [
            { person: 'eu, você, ele, ela', ser_ir: 'for', estar: 'estiver', ter: 'tiver', fazer: 'fizer' },
            { person: 'nós', ser_ir: 'formos', estar: 'estivermos', ter: 'tivermos', fazer: 'fizermos' },
            { person: 'vocês, eles, elas', ser_ir: 'forem', estar: 'estiverem', ter: 'tiverem', fazer: 'fizerem' },
          ] },
          { titulo: 'ver, vir, dar, saber', linhas: [
            { person: 'eu, você, ele, ela', ver: 'vir', vir: 'vier', dar: 'der', saber: 'souber' },
            { person: 'nós', ver: 'virmos', vir: 'viermos', dar: 'dermos', saber: 'soubermos' },
            { person: 'vocês, eles, elas', ver: 'virem', vir: 'vierem', dar: 'derem', saber: 'souberem' },
          ] },
          { titulo: 'querer, poder, dizer, haver', linhas: [
            { person: 'eu, você, ele, ela', querer: 'quiser', poder: 'puder', dizer: 'disser', haver: 'houver' },
            { person: 'nós', querer: 'quisermos', poder: 'pudermos', dizer: 'dissermos', haver: 'houvermos' },
            { person: 'vocês, eles, elas', querer: 'quiserem', poder: 'puderem', dizer: 'disserem', haver: 'houverem' },
          ] },
        ],
        erros: [['Se eu poder, vou.', 'Se eu puder, vou.', 'The future subjunctive of «poder» is «puder», from the preterite «puderam».'], ['Se você ver o João, avise.', 'Se você vir o João, avise.', 'The future subjunctive of «ver» is «vir». Do not use the infinitive «ver».'], ['Se ele vir amanhã, me avise.', 'Se ele vier amanhã, me avise.', '«Vir» (to come) gives «vier». «Vir» as a future subjunctive belongs to «ver».'], ['Quando eu fazer o jantar, chamo você.', 'Quando eu fizer o jantar, chamo você.', 'The future subjunctive of «fazer» is «fizer», not the infinitive.']],
      }),
      producao(5, 'Say the future subjunctive of ten verbs for «eu» and for «eles», starting with the irregular ones (ser, ter, fazer, vir, ver, saber, querer, poder, dizer, dar).'),
    ]),
    sessao('S2', 'Time clauses with a future meaning', [
      revisao(4, 'Complete aloud: «Quando eu chegar…», «Assim que eu puder…», «Se você tiver tempo…». Use the future subjunctive and a main verb in the present or imperative.'),
      palavras(6, [
        ['assim que', 'ah-SEE~ kee', 'as soon as', ''], ['logo que', 'LOH-goo kee', 'as soon as', ''], ['depois que', 'deh-POYS kee', 'after, once', ''], ['sempre que', 'SEH~-pree kee', 'whenever', ''], ['enquanto', 'eh~-KWAH~-too', 'while, as long as', ''], ['quem', 'KEH~', 'whoever; who', ''],
      ]),
      gramatica(12, 'Quando, assim que, depois que, sempre que, enquanto', "STEP 1: when a time word introduces an event that has not happened yet, the verb goes into the future subjunctive: «Quando eu chegar, ligo para você», «Assim que ele chegar, a gente começa», «Depois que você sair, eu limpo a casa», «Sempre que você quiser, pode ligar», «Enquanto você estiver aqui, eu ajudo». STEP 2: the main verb is usually in the present, the simple future, the near future with «ir» or the imperative: «Quando eu chegar, ligo», «Quando eu chegar, vou ligar», «Quando chegar, ligue». STEP 3: for habits and for the past, use the indicative: «Quando chego em casa, tomo banho» (habit), «Quando cheguei, ele já tinha saído» (past). STEP 4: compare three moments in time: habit «Quando chego…», past «Quando cheguei…», future «Quando eu chegar…». Only the third has the future subjunctive. STEP 5: «quando der» (when it is possible) is a very common Brazilian phrase: «A gente se vê quando der». STEP 6: «antes que» and «até que» keep the present subjunctive (lesson 44) because they are not mere time words: they set a limit.", {
        tag: 'Subjunctive',
        comparacao: "English uses the present tense in the time clause and «will» or the present in the main clause: «When I arrive, I will call you». Portuguese uses the future subjunctive in the time clause. The main clause stays in the present, in the future or in the imperative, just as in English.",
        tabela: [
          { conjunction: 'quando', meaning: 'when', example: 'Quando eu chegar, ligo para você.', translation: 'When I arrive, I will call you.' },
          { conjunction: 'assim que / logo que', meaning: 'as soon as', example: 'Assim que ele chegar, a gente começa.', translation: 'As soon as he arrives, we start.' },
          { conjunction: 'depois que', meaning: 'after', example: 'Depois que você sair, eu limpo a casa.', translation: 'After you leave, I will clean the house.' },
          { conjunction: 'sempre que', meaning: 'whenever', example: 'Sempre que você quiser, pode ligar.', translation: 'Whenever you want, you can call.' },
          { conjunction: 'enquanto', meaning: 'while, as long as', example: 'Enquanto você estiver aqui, eu ajudo.', translation: 'As long as you are here, I will help.' },
          { conjunction: 'habit (indicative)', meaning: 'when (every time)', example: 'Quando chego em casa, tomo banho.', translation: 'When I get home, I take a shower.' },
        ],
        erros: [['Quando eu chego, ligo para você amanhã.', 'Quando eu chegar, ligo para você.', 'A single future event takes the future subjunctive.'], ['Assim que ele chega, a gente começa.', 'Assim que ele chegar, a gente começa.', 'Future event after «assim que»: future subjunctive.'], ['Quando eu vou chegar, ligo.', 'Quando eu chegar, ligo.', 'Do not put «ir» in the time clause: English «will» does not appear after «quando».'], ['Sempre que você quer, pode ligar.', 'Sempre que você quiser, pode ligar.', 'An open future possibility needs the future subjunctive.']],
      }),
      dialogo(8, 'A visit to São Paulo', 'Rodrigo is planning to visit his friend Fernanda in São Paulo.', [
        ['Rodrigo', 'Fernanda, quando eu chegar a São Paulo, posso ficar na sua casa?', 'Fernanda, when I get to São Paulo, can I stay at your place?'],
        ['Fernanda', 'Claro! Quando você souber a data, me avise.', 'Of course! When you know the date, let me know.'],
        ['Rodrigo', 'Assim que eu comprar a passagem, mando uma mensagem.', 'As soon as I buy the ticket, I will send a message.'],
        ['Fernanda', 'Se eu puder, vou buscar você no aeroporto. Se não, meu irmão vai.', 'If I can, I will pick you up at the airport. If not, my brother will.'],
        ['Rodrigo', 'Obrigado. Se você tiver tempo no sábado, a gente pode passear na Avenida Paulista.', 'Thank you. If you have time on Saturday, we can stroll along Avenida Paulista.'],
        ['Fernanda', 'Claro. Depois que você descansar, a gente sai. Onde você quiser ir, eu levo.', 'Sure. After you rest, we go out. Wherever you want to go, I will take you.'],
        ['Rodrigo', 'Tá bom. Sempre que eu for aí, quero comer pastel na feira.', 'Okay. Whenever I go there, I want to eat pastel at the street market.'],
        ['Fernanda', 'Então a gente vai ao pastel! Quando você vier, traga fotos da sua cidade.', 'Then we will go for pastel! When you come, bring photos of your city.'],
      ]),
    ]),
    sessao('S3', 'Conditions, «quem» and fixed expressions', [
      revisao(4, 'Say three sentences with «quando» and three with «assim que» or «depois que», each with a future meaning.'),
      palavras(5, [
        ['o feriado', 'oo feh-ree-AH-doo', 'the public holiday', ''], ['a passagem', 'ah pah-SAH-zhe~', 'the ticket (bus, plane)', ''], ['inesquecível', 'ee-nehs-keh-SEE-vel', 'unforgettable', ''], ['o roteiro', 'oo hoh-TEY-roo', 'the itinerary', ''], ['a folga', 'ah FOHL-gah', 'the day off', ''],
      ]),
      gramatica(8, 'Real conditions with «se», and «quem», «o que», «onde»', "STEP 1: «se» + future subjunctive is the way to say «if» for a real, open possibility in the future: «Se eu puder, vou», «Se chover, não vou», «Se você precisar, me liga». The main verb is in the present, the future or the imperative. STEP 2: compare it with the imagined situation of lesson 45: «Se eu pudesse, iria» (but I probably cannot). The future subjunctive keeps the door open; the imperfect subjunctive closes it. Lesson 47 puts both together. STEP 3: the future subjunctive is also used after the indefinite words «quem» (whoever), «o que» (whatever), «onde» (wherever), «como» (however) and «quanto» (as much as): «Quem chegar primeiro ganha», «Faça o que você quiser», «Vou aonde você for», «Pague quanto puder». STEP 4: it appears in fixed expressions you will hear all the time: «Se Deus quiser» (God willing), «Quando der» (when it is possible), «Seja como for» (however it may be), «Custe o que custar» (whatever it costs). STEP 5: a polite way to offer something: «Se você quiser, a gente pode sair mais cedo». It is softer than «Se você quer».", {
        tag: 'Subjunctive',
        comparacao: "English uses the present for these ideas: «If I can, I will go», «whoever arrives first wins», «do what you want». Portuguese marks the uncertainty in the verb: «Se eu puder, vou», «Quem chegar primeiro ganha», «Faça o que você quiser». The soft offer «Se você quiser…» is one of the most useful phrases of the course.",
        tabela: [
          { pattern: 'se + future subjunctive', example: 'Se eu puder, eu vou.', meaning: 'If I can, I will go.' },
          { pattern: 'se + future subjunctive', example: 'Se chover, a gente fica em casa.', meaning: 'If it rains, we stay home.' },
          { pattern: 'quem + future subjunctive', example: 'Quem chegar primeiro ganha.', meaning: 'Whoever arrives first wins.' },
          { pattern: 'o que + future subjunctive', example: 'Faça o que você quiser.', meaning: 'Do whatever you want.' },
          { pattern: 'onde + future subjunctive', example: 'Vou aonde você for.', meaning: 'I will go wherever you go.' },
          { pattern: 'fixed expression', example: 'Se Deus quiser, dá certo.', meaning: 'God willing, it will work out.' },
          { pattern: 'fixed expression', example: 'A gente se vê quando der.', meaning: 'We will see each other when we can.' },
        ],
        erros: [['Se eu posso, eu vou.', 'Se eu puder, eu vou.', 'A real future possibility after «se» takes the future subjunctive.'], ['Faça o que você quer.', 'Faça o que você quiser.', 'Whatever you may want: future subjunctive.'], ['Se chove, a gente fica em casa.', 'Se chover, a gente fica em casa.', 'A single future condition takes the future subjunctive.'], ['Quem chega primeiro ganha amanhã.', 'Quem chegar primeiro ganha.', 'For an open, future «whoever», use the future subjunctive.']],
      }),
      texto(8, 'A holiday plan', "No feriado de novembro, vou viajar para Salvador. Assim que eu receber o salário, compro a passagem. Se meu chefe der a sexta de folga, saio na quinta à noite. Quando eu chegar, a gente combina o roteiro com a minha prima. Se o tempo estiver bom, vamos à praia todos os dias. Se chover, vamos ao museu e ao mercado. Quem quiser pode ir com a gente. Depois que eu voltar, mando as fotos. Se Deus quiser, vai ser uma viagem inesquecível.", "On the November holiday, I am going to travel to Salvador. As soon as I receive my salary, I buy the ticket. If my boss gives me Friday off, I leave on Thursday night. When I arrive, we agree on the itinerary with my cousin. If the weather is good, we go to the beach every day. If it rains, we go to the museum and the market. Whoever wants to can come with us. After I come back, I will send the photos. God willing, it will be an unforgettable trip.", [
        ['Where is the writer going? (answer in Portuguese)', 'Para Salvador.'],
        ['When will he buy the ticket? (answer in Portuguese)', 'Assim que receber o salário.'],
        ['What will they do if it rains? (answer in Portuguese)', 'Vão ao museu e ao mercado.'],
        ['What will the writer do after coming back? (answer in Portuguese)', 'Manda as fotos.'],
      ]),
      producao(5, 'Write your own holiday or weekend plan with at least five sentences using «quando», «assim que», «se», «depois que» and «quem/o que».'),
    ]),
    sessao('S4', 'Review and practice of lesson 46', [
      revisao(5, 'Say the future subjunctive of ser, estar, ter, fazer, ver, vir, dar, saber, querer, poder for «você». Then say one sentence with «quando», one with «se» and one with «quem».'),
      exercicios(20, [
        ouvir('Quando eu chegar, ligo para você.', ['Quando eu chegar, ligo para você.', 'Quando eu chego, ligo para você.', 'Quando eu cheguei, liguei para você.'], 'Quando eu chegar, ligo para você.', 'Future event after «quando»: future subjunctive.'),
        ouvir('Se eu puder, eu vou.', ['Se eu puder, eu vou.', 'Se eu posso, eu vou.', 'Se eu pudesse, eu iria.'], 'Se eu puder, eu vou.', 'Real future possibility: «puder».'),
        ouvir('Assim que ele chegar, a gente começa.', ['Assim que ele chegar, a gente começa.', 'Assim que ele chega, a gente começa.', 'Assim que ele chegou, a gente começou.'], 'Assim que ele chegar, a gente começa.', 'Future event after «assim que».'),
        ouvir('Se você vir o João, avise.', ['Se você vir o João, avise.', 'Se você vier o João, avise.', 'Se você ver o João, avise.'], 'Se você vir o João, avise.', 'The future subjunctive of «ver» is «vir».'),
        ouvir('Se você vier amanhã, traga o livro.', ['Se você vier amanhã, traga o livro.', 'Se você vir amanhã, traga o livro.', 'Se você vem amanhã, traga o livro.'], 'Se você vier amanhã, traga o livro.', 'The future subjunctive of «vir» is «vier».'),
        ditado('Quando eu for ao Brasil, vou a Salvador.', 'Write: Quando eu for ao Brasil, vou a Salvador.'),
        ditado('Faça o que você quiser.', 'Write: Faça o que você quiser.'),
        ditado('Se Deus quiser, dá certo.', 'Write: Se Deus quiser, dá certo.'),
        mc('What is the future subjunctive of «falar» for «eu»?', ['falar', 'falo', 'falasse'], 'falar', 'For regular verbs, it is identical to the infinitive.'),
        mc('What is the future subjunctive of «poder» for «eu»?', ['puder', 'posso', 'pudesse'], 'puder', 'From the preterite «puderam».'),
        mc('Which sentence is correct for a future event?', ['Depois que você sair, eu limpo.', 'Depois que você sai amanhã, eu limpo.', 'Depois que você saiu amanhã, eu limpo.'], 'Depois que você sair, eu limpo.', 'A future event after «depois que»: future subjunctive.'),
        mc('Which sentence expresses a habit (indicative)?', ['Quando chego em casa, tomo banho.', 'Quando eu chegar em casa, tomo banho.', 'Quando eu chegasse em casa, tomaria banho.'], 'Quando chego em casa, tomo banho.', 'A habit takes the indicative.'),
        mc('What does «Se Deus quiser» mean in everyday speech?', ['hopefully, God willing', 'if God wants to speak', 'never'], 'hopefully, God willing', 'It is a common way of saying «hopefully».'),
        lacuna('Quando eu ___ em casa, ligo para você. (chegar)', ['chegar', 'chego', 'cheguei'], 'chegar', 'Future subjunctive: same as the infinitive.'),
        lacuna('Se eu ___, vou com você. (poder)', ['puder', 'posso', 'pudesse'], 'puder', 'Future subjunctive of «poder»: «puder».'),
        lacuna('Assim que ele ___, a gente começa. (vir)', ['vier', 'vir', 'vem'], 'vier', 'Future subjunctive of «vir»: «vier».'),
        lacuna('Se você ___ tempo, me liga. (ter)', ['tiver', 'tem', 'tivesse'], 'tiver', 'Future subjunctive of «ter»: «tiver».'),
        lacuna('Faça o que você ___. (querer)', ['quiser', 'quer', 'quisesse'], 'quiser', 'Future subjunctive of «querer»: «quiser».'),
        lacuna('Quando nós ___ ao Rio, vamos ver o Cristo. (ir)', ['formos', 'vamos', 'fomos'], 'formos', 'The «nós» form of the future subjunctive of «ir» is «formos».'),
        ordem('Put in order: «Quando eu chegar, ligo para você.»', ['Quando', 'eu', 'chegar,', 'ligo', 'para', 'você.'], 'Quando eu chegar, ligo para você.', 'Time clause with the future subjunctive, then the main clause.'),
        ordem('Put in order: «Se eu puder, vou.»', ['Se', 'eu', 'puder,', 'vou.'], 'Se eu puder, vou.', '«Se» + future subjunctive, then the main clause.'),
        livre('Write in Portuguese: When I arrive, I will call you.', 'Quando eu chegar, ligo para você.'),
        livre('Write in Portuguese: If I can, I will go.', 'Se eu puder, eu vou.'),
      ]),
      producao(5, 'Make three promises to a friend who is going to visit you («Quando você chegar…», «Assim que você puder…», «Se você quiser…») and one polite offer with «Se você quiser…».'),
    ]),
  ],
});
