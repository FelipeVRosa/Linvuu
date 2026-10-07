import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 24, titulo: 'O condicional: pedidos, conselhos e hipóteses', nivel: 'a2',
  objetivo: 'Formar o condicional, fazer pedidos educados, dar conselhos e falar de hipóteses com «si» + imparfait.',
  nota: 'Você pede com educação e imagina situações. Próxima aula: «qui», «que» e «où».',
  sessoes: [
    sessao('S1', 'Formar o condicional', [
      revisao(5, 'Diga há quanto tempo você faz cinco coisas, com «depuis».'),
      palavras(8, [
        ['je voudrais', 'jö vudré', 'eu gostaria', ''], ['je pourrais', 'jö purré', 'eu poderia', ''], ['il faudrait', 'il fodré', 'seria preciso', ''], ['à ta place', 'a ta plas', 'no seu lugar', ''], ['je ferais', 'jö förê', 'eu faria', ''], ['j\'aimerais', 'jémörê', 'eu gostaria', ''], ['si j\'avais', 'si javé', 'se eu tivesse', ''], ['ce serait', 'sö sörê', 'seria', ''],
      ]),
      gramatica(12, 'Je voudrais, je pourrais: o conditionnel', 'PASSO 1: o condicional é formado como o futur simple: radical do futuro + terminações do imparfait: «-ais, -ais, -ait, -ions, -iez, -aient». Assim: «je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient». PASSO 2: os radicais irregulares são os mesmos do futuro: «être → je serais», «avoir → j\'aurais», «aller → j\'irais», «faire → je ferais», «pouvoir → je pourrais», «vouloir → je voudrais», «devoir → je devrais», «savoir → je saurais». PASSO 3: pedido educado: «Je voudrais un café.» «Pourriez-vous m\'aider ?» «Auriez-vous l\'heure ?» PASSO 4: conselho: «Tu devrais dormir.» «À ta place, je partirais.» «Vous pourriez essayer.» PASSO 5: desejo suave: «J\'aimerais voyager.» «Je voudrais être riche.» PASSO 6: «il faudrait» (seria preciso) e «il vaudrait mieux» (seria melhor): «Il vaudrait mieux partir.» PASSO 7: notícia não confirmada: «Il y aurait un accident.» (parece que há) PASSO 8: com pronome «vous»: «Pourriez-vous me dire où est la gare ?»', {
        tag: 'Condicional',
        comparacao: 'em português o condicional é «eu falaria», «eu gostaria»; na fala dizemos mais «eu queria» ou «eu poderia». O francês usa muito «je voudrais» e «pourriez-vous» para ser educado. «Je veux» soa seco e mal-educado em um pedido a um desconhecido.',
        tabela: [
          { pessoa: 'je', parler: 'parlerais', etre: 'serais', aller: 'irais', vouloir: 'voudrais' }, { pessoa: 'tu', parler: 'parlerais', etre: 'serais', aller: 'irais', vouloir: 'voudrais' }, { pessoa: 'il / elle', parler: 'parlerait', etre: 'serait', aller: 'irait', vouloir: 'voudrait' }, { pessoa: 'nous', parler: 'parlerions', etre: 'serions', aller: 'irions', vouloir: 'voudrions' }, { pessoa: 'vous', parler: 'parleriez', etre: 'seriez', aller: 'iriez', vouloir: 'voudriez' }, { pessoa: 'ils / elles', parler: 'parleraient', etre: 'seraient', aller: 'iraient', vouloir: 'voudraient' },
        ],
        erros: [['Je veux un café, s\'il vous plaît.', 'Je voudrais un café, s\'il vous plaît.', 'Pedido educado.'], ['Tu devoir dormir.', 'Tu devrais dormir.', 'Conselho: condicional.'], ['Je parlerai si j\'avais le temps.', 'Je parlerais si j\'avais le temps.', 'Hipótese: condicional.'], ['J\'aimerai voyager.', 'J\'aimerais voyager.', 'Condicional: «-ais».']],
      }),
      producao(5, 'Faça cinco pedidos educados em voz alta: no café, no hotel, na rua, na loja e no escritório.'),
    ]),
    sessao('S2', 'Conselhos e hipóteses', [
      revisao(4, 'Conjugue em voz alta «aller, faire, pouvoir, vouloir» no condicional com «je».'),
      palavras(6, [
        ['conseiller', 'kõseiié', 'aconselhar', ''], ['essayer', 'eséié', 'tentar', ''], ['gagner', 'gañé', 'ganhar', ''], ['changer', 'xãjé', 'mudar', ''], ['si j\'étais riche', 'si jetê rix', 'se eu fosse rico', ''], ['à ta place', 'a ta plas', 'no seu lugar', ''],
      ]),
      gramatica(12, 'Si + imparfait, condicional', 'PASSO 1: para imaginar uma situação irreal ou improvável: «si» + imparfait, resultado no condicional: «Si j\'avais de l\'argent, je voyagerais.» (Se eu tivesse dinheiro, viajaria.) PASSO 2: a ordem pode inverter: «Je voyagerais si j\'avais de l\'argent.» PASSO 3: NUNCA use condicional depois de «si»: «Si j\'aurais» é erro. PASSO 4: «si» + imparfait, no sentido de sugestão: «Si on allait au cinéma ?» (e se a gente fosse?) PASSO 5: para dar conselho, «à ta place, je + condicional»: «À ta place, je dormirais plus.» PASSO 6: para falar de um sonho: «Je voudrais habiter à la mer.» «J\'aimerais parler français.» PASSO 7: três tipos de «si»: «Si tu viens, nous irons» (provável: presente + futuro). «Si tu venais, nous irions» (improvável: imparfait + condicional). «Si tu étais venu, nous serions allés» (passado: B1). PASSO 8: pergunta: «Que ferais-tu si tu gagnais au loto ?»', {
        tag: 'Condicional',
        comparacao: 'em português: «se eu tivesse, eu faria» (imperfeito do subjuntivo + condicional). O francês faz o mesmo com «si» + imparfait + condicional. O erro típico é pôr o condicional também depois de «si».',
        tabela: [
          { tipo: 'provável', estrutura: 'si + presente, futuro', exemplo: 'Si tu viens, nous irons au cinéma.' }, { tipo: 'improvável', estrutura: 'si + imparfait, condicional', exemplo: 'Si j\'avais de l\'argent, je voyagerais.' }, { tipo: 'conselho', estrutura: 'à ta place, condicional', exemplo: 'À ta place, je dormirais.' }, { tipo: 'sugestão', estrutura: 'si + imparfait ?', exemplo: 'Si on allait au cinéma ?' },
        ],
        erros: [['Si j\'aurais de l\'argent, je voyagerais.', 'Si j\'avais de l\'argent, je voyagerais.', 'Depois de «si», imparfait.'], ['Si j\'avais de l\'argent, je voyagerai.', 'Si j\'avais de l\'argent, je voyagerais.', 'Resultado: condicional.'], ['À ta place, je dors plus.', 'À ta place, je dormirais plus.', 'Conselho: condicional.'], ['Si tu viennes, nous irions.', 'Si tu venais, nous irions.', 'Imparfait depois de «si».']],
      }),
      producao(8, 'Diga em voz alta oito frases: «Si j\'avais… , je… » sobre o que você faria se ganhasse na loteria.'),
    ]),
    sessao('S3', 'Pedir e aconselhar em situações reais', [
      revisao(4, 'Complete: «Si j\'avais du temps, je ___ (voyager). À ta place, je ___ (partir).»'),
      palavras(5, [
        ['la réunion', 'la reünió̃', 'a reunião', ''], ['le conseil', 'lö kõsei', 'o conselho', ''], ['le médecin', 'lö médsẽ', 'o médico', ''], ['la fatigue', 'la fatig', 'o cansaço', ''], ['se reposer', 'sö repozé', 'descansar', ''],
      ]),
      gramatica(8, 'Aconselhar com delicadeza', 'PASSO 1: para um conselho amigo: «À ta place, je me reposerais.» PASSO 2: para um conselho formal: «Vous devriez consulter un médecin.» PASSO 3: para uma sugestão leve: «Tu pourrais essayer.» PASSO 4: para uma opinião educada: «Je pense que ce serait mieux.» PASSO 5: para recusar com gentileza: «Je voudrais bien, mais je ne peux pas.» PASSO 6: para aceitar: «Avec plaisir.» «Ce serait super.»', {
        tag: 'Condicional',
        comparacao: 'em português suavizamos o pedido com «poderia», «gostaria». O francês suaviza da mesma forma com o condicional. Sem ele, a frase soa como uma ordem.',
        tabela: [
          { situacao: 'pedido', frase: 'Pourriez-vous m\'aider, s\'il vous plaît ?' }, { situacao: 'conselho amigo', frase: 'À ta place, je me reposerais.' }, { situacao: 'conselho formal', frase: 'Vous devriez consulter un médecin.' }, { situacao: 'sugestão', frase: 'Tu pourrais essayer.' }, { situacao: 'recusa educada', frase: 'Je voudrais bien, mais je ne peux pas.' },
        ],
        erros: [['Aidez-moi !', 'Pourriez-vous m\'aider, s\'il vous plaît ?', 'O condicional suaviza o pedido.'], ['Tu devais dormir. (conselho)', 'Tu devrais dormir.', '«Devais» é imparfait; conselho pede «devrais».'], ['Je pourrai venir si je pouvais.', 'Je pourrais venir si je pouvais.', 'Hipótese.'], ['Vous devriez de consulter.', 'Vous devriez consulter.', 'Sem preposição.']],
      }),
      dialogo(8, 'Chez le médecin / No médico', 'Sophie conversa com o médico sobre o cansaço.', [
        ['Sophie', 'Bonjour, docteur. Je suis très fatiguée en ce moment.', 'Bom dia, doutor. Estou muito cansada ultimamente.'], ['Le médecin', 'Vous dormez combien d\'heures par nuit ?', 'Quantas horas a senhora dorme por noite?'], ['Sophie', 'Je dors environ cinq heures. Je travaille beaucoup.', 'Durmo cerca de cinco horas. Trabalho muito.'], ['Le médecin', 'Vous devriez dormir plus. À votre place, je me coucherais plus tôt.', 'A senhora deveria dormir mais. No seu lugar, eu me deitaria mais cedo.'], ['Sophie', 'Vous pensez que je pourrais prendre des vitamines ?', 'O senhor acha que eu poderia tomar vitaminas?'], ['Le médecin', 'Oui, ce serait une bonne idée. Revenez me voir dans deux semaines.', 'Sim, seria uma boa ideia. Volte a me ver em duas semanas.'],
      ]),
      producao(5, 'Dê um conselho em voz alta a um amigo que está cansado, estressado e sem dinheiro.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 24', [
      revisao(5, 'Faça um pedido educado, dê um conselho e conte um sonho.'),
      exercicios(20, [
        ouvir('Je voudrais un café', ['Je voudrais un café', 'Je veux un café', 'Je voulais un café'], 'Je voudrais un café', 'Ouça «voudrais».'), ouvir('Si j\'avais de l\'argent, je voyagerais', ['Si j\'avais de l\'argent, je voyagerais', 'Si j\'ai de l\'argent, je voyagerai', 'Si j\'aurais de l\'argent, je voyagerais'], 'Si j\'avais de l\'argent, je voyagerais', 'Ouça «avais» e «voyagerais».'), ouvir('À ta place, je dormirais', ['À ta place, je dormirais', 'À ta place, je dormais', 'À ta place, je dormirai'], 'À ta place, je dormirais', 'Ouça «dormirais».'),
        ditado('Pourriez-vous m\'aider', 'Escreva: Pourriez-vous m\'aider.'), ditado('Tu devrais dormir', 'Escreva: Tu devrais dormir.'), ditado('J\'aimerais voyager', 'Escreva: J\'aimerais voyager.'),
        mc('Qual pedido é mais educado?', ['Je voudrais un café.', 'Je veux un café.', 'Donne-moi un café.'], 'Je voudrais un café.', 'Condicional.'), mc('Qual frase está correta?', ['Si j\'avais du temps, je voyagerais.', 'Si j\'aurais du temps, je voyagerais.', 'Si j\'ai du temps, je voyagerais.'], 'Si j\'avais du temps, je voyagerais.', 'si + imparfait.'), mc('Qual frase dá um conselho?', ['À ta place, je dormirais.', 'À ta place, je dors.', 'À ta place, j\'ai dormi.'], 'À ta place, je dormirais.', 'Conselho: condicional.'), mc('Condicional de «aller» com «je»:', ['j\'irais', 'j\'allerais', 'j\'irai'], 'j\'irais', 'Radical «ir-».'),
        lacuna('Tu ___ dormir plus. (devoir)', ['devrais', 'devais', 'dois'], 'devrais', 'Condicional.'), lacuna('Si nous avions le temps, nous ___ . (voyager)', ['voyagerions', 'voyageons', 'voyagerons'], 'voyagerions', 'Nous: -ions.'), lacuna('___-vous m\'aider ? (poder, educado)', ['Pourriez', 'Pouvez', 'Pourrez'], 'Pourriez', 'Condicional educado.'), lacuna('Elle ___ venir. (poder, condicional)', ['pourrait', 'pourra', 'peut'], 'pourrait', 'Pourrait.'),
        ordem('Ordene: «Si j\'étais riche, je voyagerais.»', ['Si', 'j\'étais', 'riche,', 'je', 'voyagerais'], 'Si j\'étais riche, je voyagerais.', 'si + imparfait, condicional.'), ordem('Ordene: «Pourriez-vous m\'aider, s\'il vous plaît ?»', ['Pourriez-vous', 'm\'aider,', 's\'il', 'vous', 'plaît'], 'Pourriez-vous m\'aider, s\'il vous plaît ?', 'Pedido educado.'),
        livre('Escreva em francês: Eu gostaria de um café. Se eu tivesse dinheiro, eu viajaria. No seu lugar, eu dormiria mais.', 'Je voudrais un café. Si j\'avais de l\'argent, je voyagerais. À ta place, je dormirais plus.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você faria se pudesse mudar uma coisa na sua vida.'),
    ]),
  ],
});
