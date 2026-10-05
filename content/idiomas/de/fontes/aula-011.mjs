import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 11, titulo: 'Können e möchten: saber, poder, pedir e convidar', nivel: 'a1',
  objetivo: 'Dizer o que você sabe fazer com «können», pedir ajuda e esclarecimentos com educação e convidar, aceitar ou recusar com «möchten» e «können», sempre com o segundo verbo no fim da frase.',
  nota: 'Você sabe dizer o que consegue fazer, pedir ajuda e convidar. Próxima aula: müssen, wollen e dürfen.',
  sessoes: [
    sessao('S1', 'Können: o que eu sei fazer', [
      revisao(5, 'Escreva as 6 formas de «möchten» e 3 frases com «Ich möchte … + verbo no fim».'),
      palavras(8, [
        ['schwimmen', 'xvímen', 'nadar', 'to swim'], ['tanzen', 'tántsen', 'dançar', 'to dance'], ['singen', 'zíngen', 'cantar', 'to sing'], ['malen', 'málen', 'pintar, desenhar', 'to paint'],
        ['das Klavier', 'das klavír', 'piano', 'piano'], ['die Gitarre', 'di guitáre', 'violão, guitarra', 'guitar'], ['der Fußball', 'der fús-bal', 'futebol', 'football'], ['schlecht', 'xleçt', 'mal, ruim', 'bad'],
      ]),
      gramatica(14, 'Können: o primeiro verbo modal, passo a passo', 'Um verbo MODAL ajuda outro verbo a dizer «poder», «saber», «dever», «querer». Vamos montar o primeiro, «können». PASSO 1: «können» diz o que você sabe ou consegue fazer: «Ich kann schwimmen» = eu sei nadar. PASSO 2: conjugue «können»; ele é irregular no singular: ich kann, du kannst, er kann, wir können, ihr könnt, sie können. PASSO 3: o segundo verbo vai para o FIM da frase, no infinitivo: «Ich kann gut schwimmen.» A frase fica «emoldurada»: o modal na 2ª posição e o infinitivo no fim. PASSO 4: para perguntar, o modal vai para o começo: «Kannst du schwimmen?» PASSO 5: para negar, «nicht» vem antes do verbo que está no fim: «Ich kann nicht schwimmen.» REGRA DE BOLSO: «ich» e «er» são IGUAIS (kann) e nunca levam -t.', {
        tag: 'Verbos',
        comparacao: 'o português também usa «saber» ou «poder» + infinitivo («eu sei nadar»). A diferença é só a posição: em alemão o infinitivo vai sempre para o FIM da frase, não fica ao lado do modal.',
        tabela: [
          { pronome: 'ich', können: 'kann', exemplo: 'Ich kann schwimmen.' }, { pronome: 'du', können: 'kannst', exemplo: 'Kannst du tanzen?' }, { pronome: 'er / sie / es', können: 'kann', exemplo: 'Er kann gut singen.' },
          { pronome: 'wir', können: 'können', exemplo: 'Wir können Gitarre spielen.' }, { pronome: 'ihr', können: 'könnt', exemplo: 'Könnt ihr malen?' }, { pronome: 'sie / Sie', können: 'können', exemplo: 'Können Sie Klavier spielen?' },
        ],
        exemplos: [['Ich kann gut schwimmen.', 'Eu sei nadar bem.'], ['Kannst du Klavier spielen? — Ja, ein bisschen.', 'Você sabe tocar piano? — Sim, um pouco.'], ['Ich kann nicht tanzen.', 'Eu não sei dançar.']],
        erros: [['Ich können schwimmen.', 'Ich kann schwimmen.', '«ich» pede «kann», não «können».'], ['Er kannt singen.', 'Er kann singen.', 'No «er», o modal não leva -t.'], ['Ich kann schwimmen gut.', 'Ich kann gut schwimmen.', 'O verbo principal fica no FIM da frase.']],
      }),
      producao(3, 'Diga 5 coisas que você sabe fazer e 2 que não sabe: «Ich kann … / Ich kann nicht …».'),
    ]),
    sessao('S2', 'Können: pedir e entender', [
      revisao(5, 'Escreva uma frase com cada pessoa de «können» (ich, du, er, wir, ihr, sie).'),
      palavras(8, [
        ['wiederholen', 'vi-derhólen', 'repetir', 'to repeat'], ['langsam', 'lángzam', 'devagar', 'slowly'], ['laut', 'laut', 'alto (volume)', 'loud'], ['bedeuten', 'bedóiten', 'significar', 'to mean'],
        ['buchstabieren', 'burrxtabíren', 'soletrar', 'to spell'], ['die Frage', 'di frága', 'pergunta', 'question'], ['die Antwort', 'di ántvort', 'resposta', 'answer'], ['verstehen', 'fersxtéen', 'entender', 'to understand'],
      ]),
      gramatica(12, 'Pedir ajuda e esclarecimentos', '«Kannst du …?» (informal) e «Können Sie …?» (formal) são o jeito mais comum de pedir alguma coisa. O verbo principal vai para o FIM, no infinitivo. Aprenda estas frases de sala de aula: elas servem em qualquer conversa com um alemão e já aparecem nas provas de A1. Lembre-se de que «langsamer» quer dizer «mais devagar».', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Wie bitte?', pt: 'Como? (não ouvi)' }, { frase: 'Können Sie das bitte wiederholen?', pt: 'O senhor pode repetir isso, por favor?' }, { frase: 'Können Sie bitte langsamer sprechen?', pt: 'O senhor pode falar mais devagar, por favor?' },
          { frase: 'Ich verstehe das nicht.', pt: 'Eu não entendo isso.' }, { frase: 'Was bedeutet «Bahnhof»?', pt: 'O que significa «Bahnhof»?' }, { frase: 'Wie schreibt man das?', pt: 'Como se escreve isso?' },
          { frase: 'Können Sie das buchstabieren?', pt: 'O senhor pode soletrar isso?' }, { frase: 'Wie sagt man «obrigado» auf Deutsch?', pt: 'Como se diz «obrigado» em alemão?' }, { frase: 'Können Sie mir helfen?', pt: 'O senhor pode me ajudar?' },
        ],
        erros: [['Können Sie sprechen langsam?', 'Können Sie langsam sprechen?', 'O verbo principal vai para o fim.'], ['Kannst Sie mir helfen?', 'Können Sie mir helfen?', 'Com «Sie» (formal) o modal é «können».']],
      }),
      producao(5, 'Finja que você não entendeu e peça ajuda em voz alta: «Wie bitte? Können Sie das wiederholen? Können Sie bitte langsamer sprechen?»'),
    ]),
    sessao('S3', 'Convidar, aceitar e recusar', [
      revisao(5, 'Escreva as frases de sala de aula da sessão anterior de memória.'),
      gramatica(10, 'Convidar com «möchten» e «können»', 'Para convidar alguém, use «Möchtest du …?» (informal) ou «Möchten Sie …?» (formal), ou «Kannst du …?» quando é um pedido («Kannst du um acht Uhr kommen?»). Para ACEITAR: «Ja, gern!», «Gute Idee!», «Ja, das kann ich.» Para RECUSAR com educação, diga «leider» (infelizmente) e dê o motivo: «Nein, leider nicht. Ich muss arbeiten.» Comece sempre pela palavra que responde: «Ja» ou «Nein».', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'convidar', exemplo: 'Möchtest du am Samstag ins Kino gehen?' }, { funcao: 'convidar (formal)', exemplo: 'Möchten Sie einen Kaffee trinken?' }, { funcao: 'aceitar', exemplo: 'Ja, gern! / Gute Idee! / Ja, das kann ich.' },
          { funcao: 'recusar', exemplo: 'Nein, leider nicht. / Tut mir leid, ich kann nicht.' }, { funcao: 'dar o motivo', exemplo: 'Ich habe keine Zeit. / Ich muss arbeiten.' },
        ],
      }),
      dialogo(10, 'Eine Einladung / Um convite', 'Dois amigos combinam de ir ao cinema.', [
        ['Mia', 'Hallo Jonas! Möchtest du am Samstag mit mir ins Kino gehen?', 'Oi, Jonas! Você quer ir ao cinema comigo no sábado?'], ['Jonas', 'Am Samstag? Ja, gern! Um wie viel Uhr?', 'No sábado? Sim, com prazer! A que horas?'], ['Mia', 'Um acht Uhr. Kannst du um halb acht am Bahnhof sein?', 'Às oito. Você pode estar na estação às sete e meia?'],
        ['Jonas', 'Ja, das kann ich. Möchtest du vorher etwas essen?', 'Sim, posso. Você quer comer alguma coisa antes?'], ['Mia', 'Gute Idee! Ich kann eine Pizza essen. Und du?', 'Boa ideia! Eu posso comer uma pizza. E você?'], ['Jonas', 'Ich möchte lieber einen Salat.', 'Eu prefiro uma salada.'],
        ['Mia', 'Okay. Dann bis Samstag!', 'Certo. Então até sábado!'], ['Jonas', 'Bis Samstag! Tschüs!', 'Até sábado! Tchau!'],
      ]),
      producao(5, 'Convide alguém em voz alta, aceite um convite e recuse outro com um motivo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: uma habilidade, um pedido de ajuda, um convite e uma recusa com motivo.'),
      exercicios(20, [
        lacuna('Ich ___ schwimmen. (können)', ['kann', 'kannst', 'können'], 'kann', 'ich → kann.'), lacuna('Du ___ gut tanzen. (können)', ['kannst', 'kann', 'könnt'], 'kannst', 'du → kannst.'), lacuna('Er ___ Klavier spielen. (können)', ['kann', 'kannt', 'können'], 'kann', 'er → kann, sem -t.'),
        lacuna('Wir ___ Gitarre spielen. (können)', ['können', 'kann', 'könnt'], 'können', 'wir → können.'), lacuna('Ihr ___ gut singen. (können)', ['könnt', 'können', 'kannst'], 'könnt', 'ihr → könnt.'),
        mc('Onde vai o segundo verbo com «können»?', ['no fim da frase', 'logo depois de «können»', 'no começo'], 'no fim da frase', 'Moldura da frase.'), mc('Qual frase está certa?', ['Ich kann gut schwimmen.', 'Ich kann schwimmen gut.', 'Ich können gut schwimmen.'], 'Ich kann gut schwimmen.', 'Modal na 2ª posição, infinitivo no fim.'),
        ordem('Ordene: «Você pode me ajudar?»', ['Kannst', 'du', 'mir', 'helfen'], 'Kannst du mir helfen?', 'Pergunta de sim ou não: modal primeiro.'), ordem('Ordene: «Eu não sei dançar.»', ['Ich', 'kann', 'nicht', 'tanzen'], 'Ich kann nicht tanzen.', '«nicht» antes do verbo no fim.'),
        mc('«Wie bitte?» serve para:', ['pedir que repitam', 'agradecer', 'despedir-se'], 'pedir que repitam', 'Quando você não ouviu.'), mc('Como recusar um convite com educação?', ['Nein, leider nicht.', 'Nein, gern!', 'Ja, leider nicht.'], 'Nein, leider nicht.', '«leider» = infelizmente.'),
        mc('«Können Sie bitte langsamer sprechen?» significa:', ['O senhor pode falar mais devagar?', 'O senhor sabe falar devagar?', 'O senhor quer falar mais alto?'], 'O senhor pode falar mais devagar?', 'langsamer = mais devagar.'),
        ouvir('Kannst du um halb acht am Bahnhof sein?', ['Kannst du um halb acht am Bahnhof sein?', 'Kannst du um acht Uhr kommen?', 'Möchtest du am Bahnhof essen?'], 'Kannst du um halb acht am Bahnhof sein?', '«halb acht» = 7h30.'), ditado('Können Sie das bitte wiederholen', 'Pedido educado com «können».'),
        livre('Escreva 5 frases: duas habilidades, um pedido, um convite e uma recusa com motivo.', 'Ich kann gut schwimmen. Ich kann nicht tanzen. Können Sie das bitte wiederholen? Möchtest du ins Kino gehen? Nein, leider nicht. Ich muss arbeiten.'),
      ]),
      producao(5, 'Grave-se: diga o que sabe e não sabe fazer, peça ajuda e faça um convite.'),
    ]),
  ],
});
