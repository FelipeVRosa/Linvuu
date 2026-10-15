import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 22, titulo: 'O futuro simples e os planos', nivel: 'a2',
  objetivo: 'Formar e usar o futur simple, falar de planos e previsões e usar «quand» e «si» com o futuro.',
  nota: 'Você fala do que vai acontecer e do que fará. Próxima aula: «venir de», «être en train de» e a duração.',
  sessoes: [
    sessao('S1', 'Formar o futur simple', [
      revisao(5, 'Diga o que você vai fazer amanhã com «aller» + infinitivo.'),
      palavras(8, [
        ['demain', 'dömẽ', 'amanhã', ''], ['après-demain', 'aprê-dömẽ', 'depois de amanhã', ''], ['la semaine prochaine', 'la sömén proxén', 'semana que vem', ''], ['l\'année prochaine', 'lané proxén', 'ano que vem', ''], ['dans deux jours', 'dã dö jur', 'daqui a dois dias', ''], ['bientôt', 'biẽtô', 'em breve', ''], ['plus tard', 'plü tar', 'mais tarde', ''], ['un jour', 'ẽ jur', 'um dia', ''],
      ]),
      gramatica(12, 'Je parlerai, tu finiras', 'PASSO 1: o futur simple fala do que acontecerá. Para os verbos regulares, junte as terminações ao INFINITIVO: «parler → je parlerai», «finir → je finirai». PASSO 2: terminações: «-ai, -as, -a, -ons, -ez, -ont»: «je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront». PASSO 3: verbos em «-re» perdem o «e»: «prendre → je prendrai», «vendre → je vendrai». PASSO 4: radicais irregulares (as terminações são as mesmas): «être → je serai», «avoir → j\'aurai», «aller → j\'irai», «faire → je ferai», «venir → je viendrai», «pouvoir → je pourrai», «vouloir → je voudrai», «voir → je verrai», «devoir → je devrai», «savoir → je saurai». PASSO 5: verbos com «e» no radical mudam a grafia: «acheter → j\'achèterai», «appeler → j\'appellerai». PASSO 6: o futur simple soa como o condicional no radical, mas as terminações são diferentes (veja a aula 24). PASSO 7: «aller + infinitivo» é o futuro próximo, mais usado na fala: «Je vais manger.» O futur simple é mais formal, usado para planos distantes e promessas. PASSO 8: com «demain», «la semaine prochaine»: «Demain, il fera beau.»', {
        tag: 'Futuro',
        comparacao: 'em português o futuro do presente (falarei) quase não se usa na fala; dizemos «vou falar». O francês usa mais o futur simple do que nós usamos o «falarei», sobretudo na escrita e em promessas. As terminações («-ai, -as, -a, -ons, -ez, -ont») vêm do verbo «avoir» e são regulares.',
        tabela: [
          { pessoa: 'je', parler: 'parlerai', finir: 'finirai', etre: 'serai', aller: 'irai' }, { pessoa: 'tu', parler: 'parleras', finir: 'finiras', etre: 'seras', aller: 'iras' }, { pessoa: 'il / elle', parler: 'parlera', finir: 'finira', etre: 'sera', aller: 'ira' }, { pessoa: 'nous', parler: 'parlerons', finir: 'finirons', etre: 'serons', aller: 'irons' }, { pessoa: 'vous', parler: 'parlerez', finir: 'finirez', etre: 'serez', aller: 'irez' }, { pessoa: 'ils / elles', parler: 'parleront', finir: 'finiront', etre: 'seront', aller: 'iront' },
        ],
        erros: [['Je parlé demain.', 'Je parlerai demain.', 'Futuro: radical do infinitivo + «-ai».'], ['Je prendrerai.', 'Je prendrai.', 'Verbos em -re perdem o «e».'], ['J\'avoirai.', 'J\'aurai.', 'Radical irregular.'], ['Je allerai.', 'J\'irai.', 'Radical irregular: «ir-».']],
      }),
      producao(5, 'Diga em voz alta cinco planos para o ano que vem com o futur simple.'),
    ]),
    sessao('S2', 'Irregulares e usos do futuro', [
      revisao(4, 'Conjugue em voz alta «être, avoir, aller, faire» no futur simple com «je».'),
      palavras(6, [
        ['voyager', 'vuaiajé', 'viajar', ''], ['visiter', 'vizité', 'visitar', ''], ['rencontrer', 'rãkõtré', 'encontrar', ''], ['commencer', 'komãsé', 'começar', ''], ['finir', 'finir', 'terminar', ''], ['réussir', 'reüssir', 'ter sucesso', ''],
      ]),
      gramatica(12, 'Quando usar o futur simple', 'PASSO 1: planos e previsões: «L\'année prochaine, je voyagerai en Europe.» «Il fera beau demain.» PASSO 2: promessas e decisões na hora: «Je t\'aiderai.» «Je le ferai.» PASSO 3: ordens suaves, mais polidas que o imperativo: «Vous ferez ce travail demain.» PASSO 4: depois de «quand», «dès que», «aussitôt que», o francês usa o futur simple (o português usa o subjuntivo): «Quand j\'arriverai, je t\'appellerai.» (Quando eu chegar, te ligo.) PASSO 5: com «si» (se) + presente, o resultado vai ao futuro: «Si tu viens, nous irons au cinéma.» (Se você vier, iremos ao cinema.) PASSO 6: NUNCA use futur simple depois de «si»: «Si tu viendras» é erro. PASSO 7: «dans» + tempo marca o tempo até o futuro: «Je pars dans deux jours.» PASSO 8: pergunta: «Qu\'est-ce que tu feras demain ?» «Où iras-tu l\'été prochain ?»', {
        tag: 'Futuro',
        comparacao: 'em português dizemos «quando eu chegar, ligo» (subjuntivo). Em francês, depois de «quand», o verbo vai ao futuro: «quand j\'arriverai». Depois de «si», o presente: «si tu viens». Estes dois pontos são os erros mais típicos dos brasileiros.',
        tabela: [
          { uso: 'plano', exemplo: 'L\'année prochaine, je voyagerai.' }, { uso: 'previsão', exemplo: 'Il fera beau demain.' }, { uso: 'promessa', exemplo: 'Je t\'aiderai.' }, { uso: 'quand + futuro', exemplo: 'Quand j\'arriverai, je t\'appellerai.' }, { uso: 'si + presente + futuro', exemplo: 'Si tu viens, nous irons au cinéma.' }, { uso: 'dans + tempo', exemplo: 'Je pars dans deux jours.' },
        ],
        erros: [['Quand j\'arrive, je t\'appellerai.', 'Quand j\'arriverai, je t\'appellerai.', 'Depois de «quand», futuro.'], ['Si tu viendras, je serai content.', 'Si tu viens, je serai content.', 'Depois de «si», presente.'], ['Il fera beau dans demain.', 'Il fera beau demain.', 'Sem «dans».'], ['Je te appellerai.', 'Je t\'appellerai.', 'Elisão.']],
      }),
      producao(8, 'Diga em voz alta oito frases: «Quand je… , je… » e «Si… , … » sobre o seu futuro.'),
    ]),
    sessao('S3', 'Planos e pedidos', [
      revisao(4, 'Complete: «Quand je (finir) mon travail, je (sortir). Si tu (venir), nous (aller) au cinéma.»'),
      palavras(5, [
        ['le projet', 'lö projé', 'o projeto', ''], ['le rêve', 'lö rêv', 'o sonho', ''], ['espérer', 'espéré', 'esperar', ''], ['le voyage', 'lö vuaiaj', 'a viagem', ''], ['le rendez-vous', 'lö rãdê-vu', 'o encontro, compromisso', ''],
      ]),
      gramatica(8, 'Falar de projetos', 'PASSO 1: «espérer» + infinitivo ou «que» + futuro: «J\'espère voyager.» «J\'espère que tu viendras.» PASSO 2: «avoir envie de» + infinitivo (ter vontade): «J\'ai envie de partir.» PASSO 3: «compter» + infinitivo (pretender): «Je compte finir demain.» PASSO 4: «il faut» + infinitivo (é preciso): «Il faut travailler.» PASSO 5: «pendant» e «dans» para duração e prazo: «Je travaillerai pendant trois mois.» «Je finirai dans trois mois.»', {
        tag: 'Futuro',
        comparacao: 'em português dizemos «espero que você venha» (subjuntivo). Em francês, depois de «espérer que», o futuro: «j\'espère que tu viendras». O subjuntivo francês fica para B1.',
        tabela: [
          { expressao: 'j\'espère que + futuro', sentido: 'espero que', exemplo: 'J\'espère que tu viendras.' }, { expressao: 'avoir envie de', sentido: 'ter vontade de', exemplo: 'J\'ai envie de partir.' }, { expressao: 'compter + infinitivo', sentido: 'pretender', exemplo: 'Je compte finir demain.' }, { expressao: 'il faut + infinitivo', sentido: 'é preciso', exemplo: 'Il faut travailler.' },
        ],
        erros: [['J\'espère que tu viennes.', 'J\'espère que tu viendras.', 'Depois de «espérer», futuro.'], ['J\'ai envie partir.', 'J\'ai envie de partir.', 'Falta o «de».'], ['Je compte de finir demain.', 'Je compte finir demain.', 'Sem «de».'], ['Il faut que travailler.', 'Il faut travailler.', 'Sem «que» com infinitivo.']],
      }),
      dialogo(8, 'Projets de vacances / Planos de férias', 'Manon e Antoine falam das férias.', [
        ['Manon', 'Qu\'est-ce que tu feras cet été ?', 'O que você fará neste verão?'], ['Antoine', 'J\'irai en Italie avec ma famille. Nous visiterons Rome et Florence.', 'Irei à Itália com minha família. Visitaremos Roma e Florença.'], ['Manon', 'Super ! Quand partirez-vous ?', 'Ótimo! Quando partirão?'], ['Antoine', 'Nous partirons le quinze juillet et nous rentrerons à la fin du mois. Et toi ?', 'Partiremos no dia quinze de julho e voltaremos no fim do mês. E você?'], ['Manon', 'Moi, je resterai ici. Je travaillerai pendant deux semaines, puis je me reposerai.', 'Eu ficarei aqui. Trabalharei durante duas semanas, depois descansarei.'], ['Antoine', 'Si tu veux, tu pourras venir avec nous !', 'Se quiser, poderá vir conosco!'],
      ]),
      producao(5, 'Diga em voz alta os seus planos para as próximas férias, usando o futur simple.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 22', [
      revisao(5, 'Diga o que você fará nos próximos dias, com futur simple e «aller».'),
      exercicios(20, [
        ouvir('Demain, il fera beau', ['Demain, il fera beau', 'Demain, il fait beau', 'Hier, il faisait beau'], 'Demain, il fera beau', 'Ouça «fera».'), ouvir('Quand j\'arriverai, je t\'appellerai', ['Quand j\'arriverai, je t\'appellerai', 'Quand j\'arrive, je t\'appelle', 'Quand je suis arrivé, je t\'ai appelé'], 'Quand j\'arriverai, je t\'appellerai', 'Ouça «arriverai».'), ouvir('Si tu viens, nous irons au cinéma', ['Si tu viens, nous irons au cinéma', 'Si tu viendras, nous irons au cinéma', 'Si tu venais, nous irions au cinéma'], 'Si tu viens, nous irons au cinéma', 'Ouça «viens».'),
        ditado('Je voyagerai l\'année prochaine', 'Escreva: Je voyagerai l\'année prochaine.'), ditado('J\'irai en Italie', 'Escreva: J\'irai en Italie.'), ditado('Il fera beau demain', 'Escreva: Il fera beau demain.'),
        mc('Futur simple de «je parle»:', ['je parlerai', 'je parlais', 'je vais parlé'], 'je parlerai', 'Infinitivo + -ai.'), mc('Qual frase está correta?', ['Quand j\'arriverai, je t\'appellerai.', 'Quand j\'arrive, je t\'appellerai.', 'Quand j\'arrivais, je t\'appellerai.'], 'Quand j\'arriverai, je t\'appellerai.', 'Depois de «quand»: futuro.'), mc('Qual frase está correta?', ['Si tu viens, j\'irai.', 'Si tu viendras, j\'irai.', 'Si tu viennes, j\'irai.'], 'Si tu viens, j\'irai.', 'Depois de «si»: presente.'), mc('Radical do futuro de «aller»:', ['ir-', 'all-', 'aller-'], 'ir-', 'J\'irai.'),
        lacuna('Demain, nous ___ au marché. (aller)', ['irons', 'allons', 'allerons'], 'irons', 'Radical «ir-».'), lacuna('Elle ___ médecin. (être)', ['sera', 'serait', 'est'], 'sera', 'Radical «ser-».'), lacuna('Je ___ le faire. (pouvoir)', ['pourrai', 'pouvrai', 'peuvrai'], 'pourrai', 'Radical «pourr-».'), lacuna('Quand il ___ , nous mangerons. (arriver)', ['arrivera', 'arrive', 'arrivait'], 'arrivera', 'Depois de «quand».'),
        ordem('Ordene: «Je voyagerai en Europe l\'année prochaine.»', ['Je', 'voyagerai', 'en', 'Europe', 'l\'année', 'prochaine'], 'Je voyagerai en Europe l\'année prochaine.', 'Futur simple.'), ordem('Ordene: «Si tu viens, nous irons au cinéma.»', ['Si', 'tu', 'viens,', 'nous', 'irons', 'au', 'cinéma'], 'Si tu viens, nous irons au cinéma.', 'si + presente + futuro.'),
        livre('Escreva em francês: Amanhã vai fazer sol. Quando eu chegar, eu te ligo. Se você vier, nós iremos ao cinema.', 'Demain, il fera du soleil. Quand j\'arriverai, je t\'appellerai. Si tu viens, nous irons au cinéma.'),
        lacuna('Nous ___ en Europe l\'année prochaine. (voyager)', ['voyagerions', 'voyagerons', 'voyageons'], 'voyagerons', 'Futuro: infinitivo + «-ons».'),
        lacuna('Tu ___ ce travail demain. (faire)', ['fera', 'ferai', 'feras'], 'feras', 'Radical «fer-» + «-as».'),
        lacuna('Un jour, j\'___ une maison. (avoir)', ['aurai', 'avrai', 'aurais'], 'aurai', 'Radical irregular de «avoir»: «aur-».'),
        lacuna('Si tu ___ en retard, je partirai. (arriver)', ['arriveras', 'arrives', 'arriverais'], 'arrives', 'Depois de «si», usa-se o presente, não o futuro.'),
        lacuna('Vous ___ le directeur demain. (voir)', ['voirez', 'verrons', 'verrez'], 'verrez', 'Radical irregular de «voir»: «verr-».'),
        mc('Qual é o futur simple de «je prends»?', ['je prendrai', 'je prendrerai', 'je prenderai'], 'je prendrai', 'Os verbos em «-re» perdem o «e»: «prendr-».'),
        mc('Qual frase está correta?', ['Quand il arrive, nous mangerons.', 'Quand il arrivera, nous mangerons.', 'Quand il arriverait, nous mangerons.'], 'Quand il arrivera, nous mangerons.', 'Depois de «quand», usa-se o futur simple.'),
        mc('Qual é o futuro de «venir» com «je»?', ['je venirai', 'je viendrais', 'je viendrai'], 'je viendrai', 'Radical irregular: «viendr-».'),
        mc('Qual expressão marca o prazo «daqui a dois dias»?', ['dans deux jours', 'il y a deux jours', 'depuis deux jours'], 'dans deux jours', '«Dans» + período olha para o futuro.'),
        ordem('Ordene: «Nós iremos a Roma em julho.»', ['Nous', 'irons', 'à', 'Rome', 'en', 'juillet'], 'Nous irons à Rome en juillet.', 'Radical de «aller» no futuro: «ir-».'),
        ordem('Ordene: «Um dia, ela será médica.»', ['Un', 'jour,', 'elle', 'sera', 'médecin'], 'Un jour, elle sera médecin.', '«Être» no futuro: «sera»; profissão sem artigo.'),
        livre('Escreva em francês: Eu viajarei no ano que vem. Eu irei à Itália.', 'Je voyagerai l\'année prochaine. J\'irai en Italie.'),
        livre('Escreva em francês: Se você vier, nós comeremos juntos. Quando ele chegar, nós partiremos.', 'Si tu viens, nous mangerons ensemble. Quand il arrivera, nous partirons.'),
      ]),
      producao(5, 'Fale 1 minuto sobre os seus planos de vida para os próximos cinco anos.'),
    ]),
  ],
});
