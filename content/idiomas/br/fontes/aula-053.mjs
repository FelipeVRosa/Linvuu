import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 53, titulo: 'Opinion and debate', nivel: 'b1',
  objetivo: 'Give your opinion, agree and disagree politely, concede a point, structure an argument with examples and take part in a friendly debate in Brazilian Portuguese.',
  nota: 'You can now say what you think and why, disagree without sounding rude, use «embora» and «apesar de», and keep the floor in a conversation. Next lesson: formal style and e-mail («Prezado», «Atenciosamente», «o senhor» and «a senhora»).',
  sessoes: [
    sessao('S1', 'Giving and asking for opinions', [
      revisao(5, 'Say three sentences about your week using connectors from lesson 52 (for example «porque», «mas», «portanto»). Then say one sentence with «se» and a hypothesis from lesson 47.'),
      palavras(8, [
        ['a opinião', 'ah oh-pee-nee-OW~', 'opinion', ''], ['achar', 'ah-SHAR', 'to think, to find (an opinion): «acho que…»', ''], ['concordar (com)', 'koh~-kor-DAR', 'to agree (with)', ''], ['discordar (de)', 'djees-kor-DAR', 'to disagree (with)', ''],
        ['ter razão', 'tehr hah-ZOW~', 'to be right', ''], ['o ponto de vista', 'oo POH~-too djee VEES-tah', 'point of view', ''], ['na minha opinião', 'nah MEE-nyah oh-pee-nee-OW~', 'in my opinion', ''], ['depende', 'djee-PEH~-djee', 'it depends', ''],
        ['talvez', 'tow-VEHZ', 'maybe, perhaps (followed by the subjunctive)', ''], ['sinceramente', 'seen~-seh-rah-MEH~-tchee', 'honestly', ''],
      ]),
      gramatica(12, 'Giving an opinion: «acho que» + indicative, «não acho que» + subjunctive', "STEP 1: to give an opinion, start with a frame: «acho que», «penso que», «creio que», «na minha opinião», «para mim» or «sinceramente». After «acho que», «penso que» and «creio que» the verb is in the indicative, because you present your view as something you believe is true: «Acho que ele tem razão.» STEP 2: when you deny the opinion, the verb moves to the subjunctive: «Não acho que ele tenha razão.» «Não penso que seja caro.» The same happens with doubt («duvido que», «talvez», «é possível que»). The present subjunctive of the most useful verbs is: ser = «seja», estar = «esteja», ter = «tenha», ir = «vá», fazer = «faça», poder = «possa», haver = «haja». STEP 3: in casual speech many Brazilians keep the indicative after «não acho que» («não acho que ele tem razão»). You will hear it, but the subjunctive is the form expected in writing, in exams and in careful speech, so use it. STEP 4: to ask for an opinion say «O que você acha de…?» (about a thing or person), «Você acha que…?» (indicative after a plain question) or the more formal «Qual é a sua opinião sobre…?». Answer with a frame plus a reason: «Acho que sim, porque…» STEP 5: to soften an opinion use the conditional («Eu diria que…») or «Me parece que…». You sound modest and open to discussion.", {
        tag: 'Opinion',
        comparacao: "In English «I think he is right» and «I don't think he is right» use the same verb form («is»). In Portuguese the mood changes: «Acho que ele tem razão» (indicative) but «Não acho que ele tenha razão» (subjunctive). English has no such switch, so it is the first thing to train.",
        exemplos: [['Acho que o trânsito está pior hoje.', 'I think the traffic is worse today.'], ['Não acho que seja uma boa ideia.', "I don't think it is a good idea."], ['O que você acha de trabalhar em casa?', 'What do you think about working from home?'], ['Talvez ele tenha razão.', 'Maybe he is right.'], ['Eu diria que depende do caso.', 'I would say that it depends on the case.']],
        tabela: [
          { frame: 'acho que, penso que, creio que', mood: 'indicative', example: 'Acho que ela está certa.' },
          { frame: 'não acho que, não penso que, não creio que', mood: 'subjunctive', example: 'Não acho que ela esteja certa.' },
          { frame: 'duvido que, talvez, é possível que', mood: 'subjunctive', example: 'Talvez ela esteja certa.' },
          { frame: 'tenho certeza de que, é verdade que', mood: 'indicative', example: 'Tenho certeza de que ela está certa.' },
        ],
        erros: [['Eu acho que ele esteja certo.', 'Eu acho que ele está certo.', 'A positive «acho que» takes the indicative; the subjunctive appears only when the opinion is denied or doubted.'], ['Não acho que ele tem razão. (in writing)', 'Não acho que ele tenha razão.', 'The spoken language often keeps the indicative, but the careful norm uses the subjunctive after a negated opinion.'], ['Eu concordo você.', 'Eu concordo com você.', '«Concordar» takes «com» before a person: «concordo com você», «concordo com ele».'], ['Eu sou de acordo.', 'Eu estou de acordo. / Eu concordo.', 'English «I am agreed» does not work: the state «to be in agreement» uses «estar de acordo».']],
      }),
      producao(5, 'Choose three topics (for example city life, public transport, learning languages). For each, say one opinion with «acho que», then deny the opposite opinion with «não acho que» + subjunctive. Example: «Acho que a bicicleta é prática. Não acho que seja perigosa.»'),
    ]),
    sessao('S2', 'Agreeing, disagreeing and conceding', [
      revisao(4, 'Say aloud: «Acho que…», «Não acho que… (subjunctive)», «Na minha opinião…», «Depende.», «Talvez…». Give one opinion about your city.'),
      palavras(6, [
        ['embora', 'eh~-BOH-rah', 'although (followed by the subjunctive)', ''], ['apesar de', 'ah-peh-ZAR djee', 'despite, in spite of', ''], ['por um lado', 'poor oo~ LAH-doo', 'on the one hand', ''], ['por outro lado', 'poor OH-troo LAH-doo', 'on the other hand', ''],
        ['exatamente', 'eh-zah-tah-MEH~-tchee', 'exactly', ''], ['de jeito nenhum', 'djee ZHAY-too neh-NYOO~', 'no way, not at all', ''], ['mesmo assim', 'MEHZ-moo ah-SEE~', 'even so, still', ''], ['em parte', 'eh~ PAR-tchee', 'partly, in part', ''],
        ['vale a pena', 'VAH-lee ah PEH-nah', 'it is worth it', ''],
      ]),
      gramatica(12, 'Agreeing, disagreeing politely and conceding a point', "STEP 1: to agree, use «concordo», «com certeza», «exatamente», «você tem razão» or, in casual speech, «é isso aí» and «também acho». To agree only in part: «em parte, sim», «concordo, mas…». STEP 2: to disagree politely, first acknowledge the other person, then give your view: «Entendo o seu ponto de vista, mas…», «É verdade, mas…», «Não sei se concordo.» For a clear but friendly «no»: «Discordo de você nesse ponto.» The strongest forms («de jeito nenhum», «discordo totalmente») are fine among friends, but they can sound harsh in a meeting. STEP 3: to concede a point, use «embora» + subjunctive (a fact you accept, but it does not change your conclusion): «Embora seja caro, vale a pena.» With a past situation, use the imperfect subjunctive: «Embora estivesse cansado, ele ficou.» STEP 4: «apesar de» is followed by a noun or an infinitive: «Apesar do preço, comprei.» «Apesar de ser caro, vale a pena.» It does not take a conjugated verb directly (not «apesar que»). STEP 5: «por um lado… por outro lado…» shows two sides: «Por um lado, é barato; por outro lado, demora muito.» «Mesmo assim» means «even so»: «Chovia. Mesmo assim, saímos.»", {
        tag: 'Opinion',
        comparacao: "English «although» and «despite» work with an indicative verb or an «-ing» form: «although it is expensive», «despite being expensive». Portuguese «embora» demands the subjunctive («embora seja caro»), and «apesar de» works like «despite» with a noun or an infinitive.",
        exemplos: [['Concordo com você, mas só em parte.', 'I agree with you, but only partly.'], ['Entendo o seu ponto de vista, mas discordo.', 'I understand your point of view, but I disagree.'], ['Embora seja longe, gosto de ir de bicicleta.', 'Although it is far, I like to go by bike.'], ['Apesar da chuva, o jogo continuou.', 'Despite the rain, the match went on.'], ['Por um lado, é prático; por outro lado, é caro.', 'On the one hand it is practical; on the other it is expensive.']],
        tabela: [
          { function: 'full agreement', expression: 'concordo / exatamente / com certeza', example: 'Exatamente! É isso mesmo.' },
          { function: 'partial agreement', expression: 'em parte / concordo, mas', example: 'Em parte sim, mas depende.' },
          { function: 'polite disagreement', expression: 'entendo, mas / não sei se concordo', example: 'Entendo, mas não sei se concordo.' },
          { function: 'concession', expression: 'embora + subjunctive', example: 'Embora seja caro, vale a pena.' },
          { function: 'concession (noun or infinitive)', expression: 'apesar de', example: 'Apesar de ser caro, vale a pena.' },
        ],
        erros: [['Embora é caro, compro.', 'Embora seja caro, compro.', '«Embora» is always followed by the subjunctive.'], ['Apesar que está chovendo, fomos.', 'Apesar de estar chovendo, fomos. / Embora estivesse chovendo, fomos.', '«Apesar de» takes a noun or an infinitive; with a conjugated verb use «embora».'], ['Eu discordo você.', 'Eu discordo de você.', '«Discordar» takes «de» before a person, just as «concordar» takes «com».'], ['Você está errado!', 'Entendo o seu ponto, mas discordo.', 'Flatly contradicting someone sounds aggressive in a debate. Acknowledge first, then disagree.']],
      }),
      producao(8, 'Debate with yourself, out loud: «Is it better to live in a big city or in a small town?» Give two sides with «por um lado… por outro lado…», concede one point with «embora», and finish with your own conclusion: «Mesmo assim, acho que…»'),
    ]),
    sessao('S3', 'Building and defending an argument', [
      revisao(4, 'Say one sentence with «embora» + subjunctive and one with «apesar de» + infinitive about your own city or job.'),
      palavras(5, [
        ['em primeiro lugar', 'eh~ pree-MAY-roo loo-GAR', 'in the first place, first of all', ''], ['por exemplo', 'poor eh-ZEH~-ploo', 'for example', ''], ['portanto', 'poor-TAH~-too', 'therefore', ''], ['já que', 'zhah KEE', 'since, given that', ''],
        ['resumindo', 'heh-zoo-MEE~-doo', 'to sum up', ''], ['a vantagem', 'vah~-TAH-zhay~', 'advantage', ''], ['a desvantagem', 'djees-vah~-TAH-zhay~', 'disadvantage', ''], ['interromper', 'een~-teh-hoh~-PEHR', 'to interrupt', ''], ['convencer', 'koh~-veh~-SEHR', 'to convince', ''],
      ]),
      gramatica(8, 'Ordering an argument, giving reasons and holding the floor', "STEP 1: organize what you say with markers: «em primeiro lugar», «em segundo lugar», «além disso» (besides), «por fim» (finally), «resumindo» or «em conclusão». STEP 2: give reasons with «porque» (because, after the result), «já que» (since, when the reason is already known), «por isso» and «portanto» (so, therefore, before the result): «Já que todos concordam, vamos votar.» «Choveu muito; portanto, o jogo foi cancelado.» Give examples with «por exemplo» or «como» (such as). STEP 3: in a lively conversation people talk over each other. To ask for the floor: «Posso falar?», «Só um minuto.» To keep it: «Deixa eu terminar.», «Me deixa explicar.» To interrupt kindly: «Desculpe interromper, mas…». To give the floor back: «E você, o que acha?» STEP 4: close the argument with a clear sentence: «Resumindo, a vantagem é X e a desvantagem é Y; por isso, acho que…»", {
        tag: 'Opinion',
        comparacao: "In English «so», «therefore» and «because» are used loosely. In Portuguese, keep «porque» for the reason («Fiquei porque chovia») and «por isso» or «portanto» for the consequence («Chovia; por isso, fiquei»). Note the spelling: «por isso» is two words, «portanto» is one.",
        tabela: [
          { purpose: 'order the argument', phrase: 'em primeiro lugar / em segundo lugar / por fim', example: 'Em primeiro lugar, é mais barato.' },
          { purpose: 'add a point', phrase: 'além disso', example: 'Além disso, é mais rápido.' },
          { purpose: 'give an example', phrase: 'por exemplo / como', example: 'Muitas cidades, como Curitiba, têm ciclovias.' },
          { purpose: 'consequence', phrase: 'por isso / portanto', example: 'É barato; por isso, muita gente usa.' },
          { purpose: 'ask for / keep the floor', phrase: 'posso falar? / deixa eu terminar', example: 'Deixa eu terminar o raciocínio.' },
        ],
        erros: [['Choveu, porque isso o jogo foi cancelado.', 'Choveu; por isso, o jogo foi cancelado.', '«Porque» introduces the reason; for the consequence use «por isso».'], ['Por tanto, não vou.', 'Portanto, não vou.', '«Portanto» (therefore) is one word.'], ['Cale a boca, eu estou falando!', 'Deixa eu terminar, por favor.', 'The first sentence is very rude. Use a polite request to keep the floor.']],
      }),
      dialogo(8, 'Paper or screen?', 'Larissa and Pedro are chatting after class about the way they read.', [
        ['Larissa', 'Pedro, você ainda lê livros de papel?', 'Pedro, do you still read paper books?'], ['Pedro', 'Leio, sim. Na minha opinião, o papel é muito melhor.', 'I do. In my opinion, paper is much better.'],
        ['Larissa', 'Sério? Não acho que seja tão diferente. No celular, eu leio em qualquer lugar.', "Really? I don't think it is so different. On my phone I can read anywhere."], ['Pedro', 'Em primeiro lugar, a tela cansa os olhos. Em segundo lugar, no celular chega uma notificação a cada minuto.', 'First of all, the screen tires your eyes. Second, on the phone a notification arrives every minute.'],
        ['Larissa', 'É verdade, mas, por outro lado, posso carregar cem livros na bolsa.', 'True, but on the other hand I can carry a hundred books in my bag.'], ['Pedro', 'Concordo que é prático, embora eu me distraia com facilidade.', 'I agree that it is practical, although I get distracted easily.'],
        ['Larissa', 'Então o ideal é usar os dois, né?', 'So the ideal is to use both, right?'], ['Pedro', 'Pode ser. Resumindo, depende do momento.', 'Could be. To sum up, it depends on the moment.'],
        ['Larissa', 'Exatamente. Então me empresta um livro de papel?', 'Exactly. So, will you lend me a paper book?'], ['Pedro', 'Claro, vou adorar.', "Of course, I'll love that."],
      ]),
      producao(5, 'Choose one topic (cars or bikes in the city, reading on paper or on screen, studying alone or in a group). Give two advantages, one disadvantage and a conclusion, using «em primeiro lugar», «além disso», «por outro lado» and «resumindo».'),
    ]),
    sessao('S4', 'Review and practice of lesson 53', [
      revisao(5, 'Say aloud: one opinion with «acho que», one denied opinion with «não acho que» + subjunctive, one concession with «embora», and one polite way to interrupt.'),
      exercicios(20, [
        ouvir('Na minha opinião, você tem razão.', ['Na minha opinião, você tem razão.', 'Na minha opinião, você não tem razão.', 'Na sua opinião, eu tenho razão.'], 'Na minha opinião, você tem razão.', 'The speaker says «na minha opinião» and agrees: «você tem razão».'),
        ouvir('Não acho que ele tenha razão.', ['Não acho que ele tenha razão.', 'Acho que ele tem razão.', 'Não acho que eu tenha razão.'], 'Não acho que ele tenha razão.', 'Negated opinion about «ele», with the subjunctive «tenha».'),
        ouvir('Embora seja caro, vale a pena.', ['Embora seja caro, vale a pena.', 'Embora seja caro, não vale a pena.', 'Apesar de ser caro, é ruim.'], 'Embora seja caro, vale a pena.', 'Concession: it is expensive, but it is worth it.'),
        ouvir('Por um lado, é prático.', ['Por um lado, é prático.', 'Por outro lado, é prático.', 'Por um lado, é caro.'], 'Por um lado, é prático.', 'Listen for «um lado» and «prático».'),
        ouvir('Desculpe interromper, mas posso falar?', ['Desculpe interromper, mas posso falar?', 'Desculpe, mas posso ajudar?', 'Deixa eu terminar, por favor.'], 'Desculpe interromper, mas posso falar?', 'A polite interruption: «desculpe interromper».'),
        ditado('Eu concordo com você.', 'Write: Eu concordo com você. («Concordar» takes «com».)'), ditado('Em primeiro lugar, o preço.', 'Write: Em primeiro lugar, o preço.'), ditado('Depende do dia.', 'Write: Depende do dia.'),
        mc('Which sentence is the careful form of a negated opinion?', ['Não acho que ele tenha razão.', 'Não acho que ele ter razão.', 'Não acho que ele terá razão.'], 'Não acho que ele tenha razão.', 'After a negated opinion verb, use the present subjunctive: «tenha».'),
        mc('How do you say «I agree with you»?', ['Eu concordo com você.', 'Eu concordo você.', 'Eu sou de acordo você.'], 'Eu concordo com você.', '«Concordar com» + person.'),
        mc('What does «Depende.» mean?', ['It depends.', 'Of course.', 'No way.'], 'It depends.', '«Depende» is the short answer for «it depends».'),
        mc('Which word introduces a concession and takes the subjunctive?', ['embora', 'porque', 'portanto'], 'embora', '«Embora» means «although» and is always followed by the subjunctive.'),
        mc('You want to interrupt politely. What do you say?', ['Desculpe interromper, mas…', 'Você está errado!', 'Cale a boca!'], 'Desculpe interromper, mas…', 'The other two options are rude.'),
        lacuna('Acho que ele ___ razão. (ter)', ['tem', 'tenha', 'teria'], 'tem', 'A positive «acho que» takes the indicative.'), lacuna('Não acho que ela ___ certa. (estar)', ['esteja', 'está', 'estará'], 'esteja', 'After «não acho que», use the subjunctive: «esteja».'),
        lacuna('___ seja caro, vale a pena.', ['Embora', 'Porque', 'Portanto'], 'Embora', '«Embora» + subjunctive expresses concession.'), lacuna('___ de ser caro, eu gosto.', ['Apesar', 'Embora', 'Mesmo'], 'Apesar', '«Apesar de» + infinitive.'),
        ordem('Put in order: «Na minha opinião, o papel é melhor.»', ['Na', 'minha', 'opinião,', 'o', 'papel', 'é', 'melhor.'], 'Na minha opinião, o papel é melhor.', 'The frame «na minha opinião» comes first.'),
        ordem('Put in order: «Por um lado, é prático.»', ['Por', 'um', 'lado,', 'é', 'prático.'], 'Por um lado, é prático.', 'The first side of an argument.'),
        ordem('Put in order: «Não acho que ele tenha razão.»', ['Não', 'acho', 'que', 'ele', 'tenha', 'razão.'], 'Não acho que ele tenha razão.', 'A negated opinion with the subjunctive.'),
        livre('Write in Portuguese: In my opinion, you are right, but I do not think it is cheap.', 'Na minha opinião, você tem razão, mas não acho que seja barato.'),
        livre('Write in Portuguese: Although it is expensive, it is worth it.', 'Embora seja caro, vale a pena.'),
      ]),
      producao(5, 'Hold a short debate with an imaginary friend about working from home or in an office. Give your opinion, agree in part, concede one point with «embora», interrupt once politely and finish with «resumindo».'),
    ]),
  ],
});
