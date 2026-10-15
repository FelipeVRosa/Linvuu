import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 16, titulo: 'Gustar e preferências', nivel: 'a1',
  objetivo: 'Falar do que você gosta e do que não gosta com gustar e encantar, concordar e discordar com «a mí también / tampoco / sí / no», dar uma opinião simples, perguntar «¿qué te gusta?» e falar do tempo livre.',
  nota: 'Você já sabe dizer o que gosta e o que prefere, e entende que «gustar» funciona de trás para frente. Próxima aula: o pretérito perfecto («he comido», «hemos visto»), para contar o que você fez hoje.',
  sessoes: [
    sessao('S1', 'Gustar: o que agrada a quem', [
      revisao(5, 'Conte ao seu amigo, em voz alta, o que você veste e que cor tem cada peça. Depois diga o que você prefere entre «este» e «ese».'),
      palavras(8, [
        ['gustar', 'gustár', 'agradar, gostar', ''], ['encantar', 'enkantár', 'encantar, adorar', ''], ['preferir', 'preferír', 'preferir', ''], ['odiar', 'odiár', 'odiar', ''],
        ['pasear', 'paseár', 'passear', ''], ['correr', 'korrér', 'correr', ''], ['leer', 'leér', 'ler', ''], ['nadar', 'nadár', 'nadar', ''],
      ]),
      gramatica(12, 'Gustar funciona ao contrário', 'PASSO 1: em português dizemos «eu gosto de café»: eu é quem gosta. Em espanhol a lógica é outra: «o café me agrada». A coisa de que se gosta é o sujeito do verbo, e quem gosta é o pronome: «Me gusta el café». PASSO 2: os pronomes são «me, te, le, nos, os, les»: me gusta (a mim), te gusta (a ti), le gusta (a ele, ela, usted), nos gusta (a nós), os gusta (a vós, Espanha), les gusta (a eles, ustedes). PASSO 3: o verbo concorda com o que agrada, e não com quem gosta: se for uma coisa, «gusta»; se forem várias, «gustan»: «Me gusta el cine», «Me gustan los gatos». PASSO 4: se o que agrada é uma ação, o verbo vai no infinitivo e «gustar» fica no singular: «Me gusta cantar», «Me gusta cantar y bailar». PASSO 5: o artigo é obrigatório diante do substantivo: «Me gusta el café», e não «Me gusta café». PASSO 6: para negar, o «no» vem antes do pronome: «No me gusta el café». PASSO 7: a intensidade fica depois do verbo: «Me gusta mucho», «Me gusta bastante», «No me gusta nada». Para gostar muito, «Me encanta» (singular) e «Me encantan» (plural) são comuns. Para detestar, «Odio» (regular, sujeito eu) ou «No soporto». PASSO 8: com pessoas, «Me gusta Pablo» sugere atração. Para dizer que gosta de uma pessoa como amigo, diga «Pablo me cae bien» (Pablo me cai bem). Para família e amigos, use «Quiero mucho a mi abuela».', {
        tag: 'Gustar',
        comparacao: 'o sentido de «gostar» está em português, mas a estrutura é outra. «Eu gosto de música» (sujeito: eu) corresponde a «Me gusta la música» (sujeito: a música). Os dois caminhos errados mais comuns, «Yo gusto la música» e «Me gusta de música», não existem em espanhol: não há «de» depois de «gustar».',
        tabelas: [
          { titulo: 'Os pronomes de gustar', linhas: [
            { pessoa: 'a mí', pronome: 'me', exemplo: 'Me gusta el té.' }, { pessoa: 'a ti', pronome: 'te', exemplo: '¿Te gusta el café?' }, { pessoa: 'a él, ella, usted', pronome: 'le', exemplo: 'Le gusta cantar.' },
            { pessoa: 'a nosotros', pronome: 'nos', exemplo: 'Nos gustan las series.' }, { pessoa: 'a vosotros', pronome: 'os', exemplo: '¿Os gusta el mar?' }, { pessoa: 'a ellos, ustedes', pronome: 'les', exemplo: 'Les gustan los museos.' },
          ] },
          { titulo: 'Singular e plural', linhas: [
            { forma: 'gusta', quando: 'uma coisa ou uma ação', exemplo: 'Me gusta el cine. / Me gusta leer.' },
            { forma: 'gustan', quando: 'várias coisas', exemplo: 'Me gustan los libros.' },
            { forma: 'encanta, encantan', quando: 'adorar', exemplo: 'Me encanta bailar. / Me encantan las playas.' },
          ] },
        ],
        erros: [['Yo gusto el café.', 'Me gusta el café.', 'Quem gosta é o pronome «me»; o café é o sujeito.'], ['Me gusta los gatos.', 'Me gustan los gatos.', 'O verbo concorda com «los gatos»: plural.'], ['Me gusta café.', 'Me gusta el café.', 'O artigo é obrigatório em espanhol.'], ['Me gusta de cantar.', 'Me gusta cantar.', 'Depois de «gustar» não há «de»; vem o infinitivo.'], ['No gusto el fútbol.', 'No me gusta el fútbol.', 'A negação fica antes do pronome.']],
      }),
      producao(5, 'Diga em voz alta seis frases sobre o que você gosta e não gosta: três com «me gusta» e três com «me gustan». Inclua uma com «me encanta» e uma com «no me gusta nada».'),
    ]),
    sessao('S2', 'Concordar, discordar e opinar', [
      revisao(4, 'Diga o que gosta e o que não gosta de comida. Use «me gusta», «me gustan» e «no me gusta».'),
      palavras(6, [
        ['también', 'tambiém', 'também', ''], ['tampoco', 'tampóko', 'também não', ''], ['bastante', 'bastánte', 'bastante', ''], ['sobre todo', 'sóbre tódo', 'principalmente', ''], ['divertido, divertida', 'dibertído, dibertída', 'divertido, engraçado', ''], ['aburrido, aburrida', 'aburrído, aburrída', 'chato, entediante', ''],
      ]),
      gramatica(12, 'Gustar com nome, concordar e dar opinião', 'PASSO 1: para dizer de quem se trata, acrescente «a» e a pessoa, e repita o pronome: «A Pablo le gusta el cine», «A mis padres les gustan los museos». O «le» e o «les» não podem faltar. PASSO 2: para destacar ou comparar, use «a mí, a ti, a él, a ella, a usted, a nosotros, a vosotros, a ellos, a ustedes» + o pronome: «A mí me gusta, ¿y a ti?» PASSO 3: para concordar com algo positivo, diga «A mí también» ou «Yo también». Para concordar com algo negativo, diga «A mí tampoco» ou «Yo tampoco». PASSO 4: para discordar: «A mí sí» (quando o outro disse não) e «A mí no» (quando o outro disse sim). Exemplos: «—Me gusta el té. —A mí también.», «—No me gusta la lluvia. —A mí tampoco.», «—No me gusta el cine. —A mí sí.». PASSO 5: «también» nunca se usa com negação: não se diz «a mí también no». Para negação, use «tampoco». PASSO 6: para preferir, diga «Prefiero X a Y»: «Prefiero el té al café» (a + el = al). Com verbo: «Prefiero leer a ver la tele». PASSO 7: para opinar, use «Me parece + adjetivo»: «Me parece interesante», «Me parecen caros» (plural). Também «Creo que + frase» e «Para mí…». PASSO 8: para dizer o grau de interesse, «Me interesa(n)» funciona como «gustar»: «Me interesan los idiomas».', {
        tag: 'Gustar',
        comparacao: 'em português, «eu também» e «eu também não» são as respostas. Em espanhol, «yo también» e «yo tampoco» funcionam do mesmo jeito, mas com «gustar» é mais natural dizer «a mí también» e «a mí tampoco», porque o «a mí» corresponde ao «me». Para discordar, usamos «a mí sí» e «a mí no», que em português seria algo como «eu gosto» e «eu não gosto».',
        tabela: [
          { situacao: 'o outro gosta, você também', resposta: 'A mí también.', exemplo: '—Me gusta bailar. —A mí también.' },
          { situacao: 'o outro não gosta, você também não', resposta: 'A mí tampoco.', exemplo: '—No me gusta madrugar. —A mí tampoco.' },
          { situacao: 'o outro não gosta, você gosta', resposta: 'A mí sí.', exemplo: '—No me gusta el pescado. —A mí sí.' },
          { situacao: 'o outro gosta, você não gosta', resposta: 'A mí no.', exemplo: '—Me gusta correr. —A mí no.' },
          { situacao: 'comparar', resposta: 'Prefiero X a Y.', exemplo: 'Prefiero el té al café.' },
          { situacao: 'opinar', resposta: 'Me parece + adjetivo.', exemplo: 'Me parece muy divertido.' },
        ],
        exemplos: [['A Pablo le gusta el cine.', 'O Pablo gosta de cinema.'], ['A mis padres les gustan los museos.', 'Meus pais gostam de museus.'], ['A mí me gusta correr, ¿y a ti?', 'Eu gosto de correr, e você?'], ['Me parece muy aburrido.', 'Acho muito chato.']],
        erros: [['A Pablo gusta el cine.', 'A Pablo le gusta el cine.', 'Com «a + pessoa», o pronome «le» é obrigatório.'], ['A mis padres le gustan los museos.', 'A mis padres les gustan los museos.', 'O pronome concorda com «mis padres»: «les».'], ['—No me gusta el té. —A mí también.', '—No me gusta el té. —A mí tampoco.', 'Para concordar com uma negação, use «tampoco».'], ['Prefiero café que té.', 'Prefiero el café al té.', 'Em espanhol, compara-se com «a»: «preferir X a Y».'], ['Me parecen interesante los libros.', 'Me parecen interesantes los libros.', '«Parecer» concorda com o que se opina, no plural.']],
      }),
      producao(8, 'Faça um diálogo em voz alta com você mesmo: uma pessoa diz de quatro coisas que gosta, a outra responde com «a mí también», «a mí tampoco», «a mí sí» ou «a mí no». Depois compare duas coisas com «prefiero… a…».'),
    ]),
    sessao('S3', 'Tempo livre e conversa', [
      revisao(4, 'Faça três perguntas a um amigo com «¿Te gusta…?» ou «¿Te gustan…?» e responda você mesmo.'),
      palavras(5, [
        ['el tiempo libre', 'el tiémpo líbre', 'o tempo livre', ''], ['la guitarra', 'la gitárra', 'o violão, a guitarra', ''], ['la serie', 'la série', 'a série', ''], ['exquisito, exquisita', 'ekskisíto, ekskisíta', 'delicioso (falso amigo: não é «esquisito»)', ''], ['raro, rara', 'ráro, rára', 'esquisito, estranho', ''],
      ]),
      gramatica(8, 'Perguntar gostos, jogar e tocar', 'PASSO 1: para perguntar a um amigo: «¿Qué te gusta hacer?», «¿Te gusta el cine?», «¿Qué música te gusta?». Com «usted»: «¿Qué le gusta hacer?». PASSO 2: para escolher entre duas ou mais coisas, use «¿Cuál?» («qual») e «¿Cuáles?» («quais»): «¿Cuál prefieres?», «¿Cuáles te gustan?». Antes de substantivo, use «qué»: «¿Qué color prefieres?» PASSO 3: «jugar a» + jogo ou esporte: «Juego al fútbol», «Jugamos a las cartas». «Tocar» + instrumento: «Toco la guitarra», «Toca el piano». Não se diz «jugar la guitarra». PASSO 4: «leer, ver series, salir con amigos, viajar, cocinar, ir al gimnasio, pasear» são atividades de tempo livre. PASSO 5: falsos amigos: «exquisito» é delicioso, e a tarta pode estar «exquisita»; para dizer esquisito, use «raro» ou «extraño». Cuidado também com «divertido»: significa tanto divertido quanto engraçado. PASSO 6: respostas completas ajudam o diálogo: «Me gusta mucho porque es relajante». Acrescente o motivo com «porque».', {
        tag: 'Gustar',
        comparacao: 'em português também se «toca» um instrumento e se «joga» um jogo. A diferença está na preposição: dizemos «jogar futebol», e o espanhol diz «jugar al fútbol», com «a». O falso amigo mais traiçoeiro é «exquisito», que não é «esquisito», e sim «delicioso».',
        tabela: [
          { verbo: 'jugar a + jogo', exemplo: 'Juego al tenis.', sentido: 'praticar esporte ou jogo' },
          { verbo: 'tocar + instrumento', exemplo: 'Toco la guitarra.', sentido: 'tocar instrumento' },
          { verbo: '¿Cuál?, ¿Cuáles?', exemplo: '¿Cuál prefieres?', sentido: 'qual, quais' },
          { verbo: '¿Qué + substantivo?', exemplo: '¿Qué color prefieres?', sentido: 'que, qual (antes de substantivo)' },
          { verbo: 'exquisito', exemplo: 'La tarta está exquisita.', sentido: 'delicioso' },
          { verbo: 'raro', exemplo: 'Es una película rara.', sentido: 'esquisito, estranho' },
        ],
        erros: [['Juego la guitarra.', 'Toco la guitarra.', 'Instrumentos se «tocan».'], ['Toco al fútbol.', 'Juego al fútbol.', 'Esportes e jogos se «jogan», com «a».'], ['La película es exquisita. (estranha)', 'La película es rara.', '«Exquisito» é delicioso; para estranho, use «raro».'], ['¿Cuál color prefieres?', '¿Qué color prefieres?', 'Antes de substantivo, usa-se «qué».']],
      }),
      texto(8, 'Mi tiempo libre / Meu tempo livre', 'Me llamo Daniel y tengo veintiocho años. Entre semana trabajo mucho y casi no tengo tiempo libre, pero los fines de semana me gusta salir con mis amigos. Me encanta jugar al fútbol, y a mi amiga Clara le gusta tocar la guitarra. A mí no me gustan las series largas; prefiero ver una película y cocinar después. Los domingos nos gusta comer en un restaurante pequeño donde la comida es exquisita. A Clara le parece un lugar raro, pero a mí me parece muy divertido.', 'Eu me chamo Daniel e tenho vinte e oito anos. Durante a semana trabalho muito e quase não tenho tempo livre, mas nos fins de semana gosto de sair com meus amigos. Adoro jogar futebol, e minha amiga Clara gosta de tocar violão. Eu não gosto de séries longas; prefiro ver um filme e cozinhar depois. Aos domingos gostamos de comer num restaurante pequeno onde a comida é deliciosa. Para a Clara é um lugar esquisito, mas para mim é muito divertido.', [
        ['¿Cuántos años tiene Daniel?', 'Veintiocho.'], ['¿Qué le encanta a Daniel?', 'Jugar al fútbol.'], ['¿Qué le gusta hacer a Clara?', 'Tocar la guitarra.'], ['¿Qué prefiere Daniel: series o películas?', 'Prefiere las películas.'], ['¿Cómo es la comida del restaurante?', 'Exquisita.'],
      ]),
      producao(5, 'Escreva e diga em voz alta cinco frases sobre o seu tempo livre: o que você gosta, o que prefere, o que seus amigos gostam e o que acha chato. Use um «porque».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 16', [
      revisao(5, 'Diga cinco coisas de que você gosta e duas de que não gosta. Depois pergunte a um amigo imaginário e responda com «a mí también» ou «a mí tampoco».'),
      exercicios(20, [
        ouvir('Me gustan los gatos', ['Me gustan los gatos', 'Me gusta el gato', 'Le gustan los gatos'], 'Me gustan los gatos', 'Ouça «gustan» no plural e «me».'),
        ouvir('A Pablo le gusta cantar', ['A Pablo le gusta cantar', 'A Pablo le gustan cantar', 'A Pablo me gusta cantar'], 'A Pablo le gusta cantar', 'Ouça «le gusta»: singular com infinitivo.'),
        ouvir('A mí tampoco', ['A mí tampoco', 'A mí también', 'A mí sí'], 'A mí tampoco', 'Ouça o final «-poco» de «tampoco».'),
        ditado('Me encanta bailar', 'Escreva: Me encanta bailar.'),
        ditado('No me gusta nada', 'Escreva: No me gusta nada.'),
        ditado('¿Qué te gusta hacer?', 'Escreva: ¿Qué te gusta hacer?'),
        mc('Qual frase está correta?', ['Me gusta el café.', 'Yo gusto el café.', 'Me gusto el café.'], 'Me gusta el café.', 'O café é o sujeito: «gusta».'),
        mc('Qual frase está correta?', ['Me gustan las series.', 'Me gusta las series.', 'Me gustas las series.'], 'Me gustan las series.', 'O verbo concorda com «las series».'),
        mc('Como se diz «Eu gosto de cantar»?', ['Me gusta cantar.', 'Me gusto cantar.', 'Me gusta de cantar.'], 'Me gusta cantar.', 'Depois de «gustar» vem o infinitivo, sem «de».'),
        mc('O outro diz «No me gusta el frío». Como você concorda?', ['A mí tampoco.', 'A mí también.', 'A mí sí.'], 'A mí tampoco.', 'Concordar com uma negação pede «tampoco».'),
        mc('O outro diz «Me gusta correr». Como você discorda?', ['A mí no.', 'A mí tampoco.', 'A mí también.'], 'A mí no.', 'Para discordar de algo positivo, diga «a mí no».'),
        mc('Como se diz «Eu toco violão»?', ['Toco la guitarra.', 'Juego la guitarra.', 'Juego a la guitarra.'], 'Toco la guitarra.', 'Instrumentos se «tocan».'),
        lacuna('A mis padres ___ gustan los museos.', ['les', 'le', 'los'], 'les', 'O pronome concorda com «mis padres»: «les».'),
        lacuna('A ella ___ gusta cocinar.', ['le', 'les', 'me'], 'le', 'Com «ella», o pronome é «le».'),
        lacuna('Prefiero el té ___ café.', ['al', 'que el', 'a el'], 'al', 'Preferir X «a» Y: a + el = al.'),
        lacuna('Juego ___ fútbol los domingos.', ['al', 'el', 'en'], 'al', 'Jugar «a» + esporte: a + el = al.'),
        lacuna('Esta tarta está ___. (deliciosa)', ['exquisita', 'esquisita', 'rara'], 'exquisita', 'Falso amigo: «exquisito» é delicioso.'),
        ordem('Ordene: «A mí me gusta bailar.»', ['A', 'mí', 'me', 'gusta', 'bailar.'], 'A mí me gusta bailar.', '«A mí» antes do pronome.'),
        ordem('Ordene: «No me gustan las series largas.»', ['No', 'me', 'gustan', 'las', 'series', 'largas.'], 'No me gustan las series largas.', '«No» antes do pronome.'),
        livre('Escreva em espanhol: Eu gosto de cozinhar, mas não gosto de lavar a louça.', 'Me gusta cocinar, pero no me gusta lavar los platos.'),
        lacuna('A mí me ___ los gatos. (gustar)', ['gusta', 'gusto', 'gustan'], 'gustan', 'O verbo concorda com o que agrada: «los gatos» é plural.'),
        lacuna('A nosotros ___ gusta el cine. (pronome)', ['les', 'nos', 'os'], 'nos', 'O pronome de «nosotros» é «nos».'),
        lacuna('Toco ___ piano. (o)', ['el', 'la', 'al'], 'el', 'Com «tocar» + instrumento usa-se o artigo: «el piano».'),
        lacuna('Juego ___ las cartas. (a)', ['en', 'con', 'a'], 'a', 'Com «jugar», o jogo vem depois de «a».'),
        mc('O outro diz «Me gusta el cine». Como você concorda?', ['A mí también.', 'A mí tampoco.', 'A mí no.'], 'A mí también.', 'Concordar com algo positivo: «A mí también».'),
        mc('Qual frase usa o pronome certo?', ['A Pablo gusta el cine.', 'Le Pablo gusta el cine.', 'A Pablo le gusta el cine.'], 'A Pablo le gusta el cine.', 'Com «a + pessoa», o pronome «le» é obrigatório.'),
        mc('Como se pergunta «Qual cor você prefere?»', ['¿Cuál color prefieres?', '¿Qué color prefieres?', '¿Cuáles color prefieres?'], '¿Qué color prefieres?', 'Antes de substantivo, usa-se «qué».'),
        ordem('Ordene: «Me gusta leer en mi tiempo libre.»', ['Me', 'gusta', 'leer', 'en', 'mi', 'tiempo', 'libre.'], 'Me gusta leer en mi tiempo libre.', 'Com infinitivo, «gustar» fica no singular.'),
        livre('Escreva em espanhol: Eu adoro cozinhar, e você? (informal)', 'Me encanta cocinar, ¿y a ti?'),
        livre('Escreva em espanhol: Ela toca piano e eu jogo futebol.', 'Ella toca el piano y yo juego al fútbol.'),
      ]),
      producao(5, 'Apresente-se em voz alta falando só de gostos e preferências, em oito frases: o que você gosta, o que você adora, o que você prefere e o que você não gosta.'),
    ]),
  ],
});
