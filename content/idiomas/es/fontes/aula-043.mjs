import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 43, titulo: 'Subjuntivo: deseo, duda y emoción', nivel: 'b1',
  objetivo: 'Usar o presente de subjuntivo depois de verbos de desejo, pedido e conselho («quiero que vengas»), de dúvida e negação («no creo que venga», «dudo que…») e de emoção e valoração («me alegra que…», «es importante que…»), distinguindo-o do indicativo.',
  nota: 'Você pede, deseja, duvida e reage com o subjuntivo: «Quiero que vengas», «No creo que sea verdad», «Me alegra que estés aquí». Próxima aula: o subjuntivo com tempo e finalidade.',
  sessoes: [
    sessao('S1', 'Desejo, pedido e conselho', [
      revisao(5, 'Diga em voz alta o subjuntivo de tener, hacer, ir, ser, estar e saber para «tú». Depois conjugue «hablar» e «comer» para «yo» e «nosotros».'),
      palavras(8, [
        ['te pido que', '', 'peço a você que', ''], ['te aconsejo que', '', 'aconselho você a', ''], ['te sugiero que', '', 'sugiro a você que', ''], ['deseo que', '', 'desejo que', ''],
        ['permito que', '', 'permito que', ''], ['prohíbo que', '', 'proíbo que', ''], ['exijo que', '', 'exijo que', ''], ['ojalá que', '', 'tomara que', ''],
      ]),
      gramatica(12, 'Quiero que vengas: desejar que outra pessoa faça', 'PASSO 1: veja primeiro quando usar. Se você quer que OUTRA pessoa faça algo, a frase tem dois sujeitos. O espanhol liga os dois com «que» e coloca o segundo verbo no subjuntivo: «Quiero que vengas». PASSO 2: quando o sujeito é o MESMO, não há «que» e o segundo verbo fica no infinitivo: «Quiero venir» (eu quero, eu venho). PASSO 3: os verbos de desejo, pedido, conselho e influência que pedem essa estrutura são: querer, desear, esperar, preferir, necesitar, pedir, aconsejar, recomendar, sugerir, exigir, permitir, prohibir, mandar, dejar. PASSO 4: «ojalá (que)» + subjuntivo exprime desejo: «Ojalá llueva» (tomara que chova). PASSO 5: com «aconsejar, permitir, prohibir, recomendar, dejar, pedir», quando existe um objeto indireto, o espanhol aceita também o infinitivo: «Te aconsejo descansar» ou «Te aconsejo que descanses». Os dois são corretos. PASSO 6: «esperar que» tem o sentido de ter esperança: «Espero que vengas» (espero que você venha). PASSO 7: para o presente de subjuntivo, use as formas da aula 42. PASSO 8: na América Latina, «ustedes» substitui «vosotros»: «Quiero que vengan», e em algumas regiões o «vos» tem formas próprias.', {
        tag: 'Subjuntivo',
        comparacao: 'o português também usa o subjuntivo depois de verbos de desejo: «quero que você venha», «espero que ele chegue», «peço que espere». A regra é a mesma: dois sujeitos, «que» e subjuntivo; um só sujeito, infinitivo («quero ir»). Uma diferença: com verbos como «mandar» e «dejar», o espanhol aceita o infinitivo quando há objeto indireto («me mandó salir», «me dejó salir») e também «que» + subjuntivo («mandó que saliera», com outro tempo, na aula 46).',
        tabela: [
          { ideia: 'desejo', verbos: 'querer, desear, esperar, preferir, ojalá', exemplo: 'Prefiero que me llames mañana.' },
          { ideia: 'pedido e ordem', verbos: 'pedir, exigir, mandar', exemplo: 'Te pido que esperes un momento.' },
          { ideia: 'conselho', verbos: 'aconsejar, recomendar, sugerir', exemplo: 'Te recomiendo que reserves con tiempo.' },
          { ideia: 'permissão e proibição', verbos: 'permitir, dejar, prohibir', exemplo: 'No permito que me hables así.' },
          { ideia: 'mesmo sujeito', verbos: 'qualquer um deles + infinitivo', exemplo: 'Quiero descansar un rato.' },
        ],
        erros: [['Quiero que vienes.', 'Quiero que vengas.', 'Depois de «querer que», o segundo verbo fica no subjuntivo.'], ['Quiero que yo vaya.', 'Quiero ir.', 'Com o mesmo sujeito, use o infinitivo, sem «que».'], ['Espero que viene pronto.', 'Espero que venga pronto.', '«Esperar que» pede subjuntivo.'], ['Te aconsejo que descansar.', 'Te aconsejo que descanses.', 'Depois de «que», o verbo precisa estar conjugado.'], ['Ojalá llueve mañana.', 'Ojalá llueva mañana.', '«Ojalá» sempre vem com subjuntivo.']],
      }),
      producao(5, 'Diga cinco frases com «quiero que… espero que… te pido que… te aconsejo que… ojalá…» sobre o que você quer de alguém da sua família ou do seu trabalho.'),
    ]),
    sessao('S2', 'Dúvida, negação e probabilidade', [
      revisao(4, 'Complete em voz alta: «Quiero que tú… (venir). Te aconsejo que… (descansar). Ojalá… (llover).»'),
      palavras(6, [
        ['dudo que', '', 'duvido que', ''], ['no creo que', '', 'não acho que', ''], ['es posible que', '', 'é possível que', ''], ['es probable que', '', 'é provável que', ''], ['puede que', '', 'pode ser que', ''], ['quizá, quizás, tal vez', '', 'talvez', ''],
      ]),
      gramatica(12, 'Certeza e dúvida: indicativo ou subjuntivo?', 'PASSO 1: a regra é simples. Se você afirma algo com certeza, use o indicativo. Se você duvida, nega ou fala de algo apenas possível, use o subjuntivo. PASSO 2: «creer que» e «pensar que», na forma afirmativa, afirmam algo: «Creo que viene» (acho que ele vem). Na forma negativa, passam a duvidar: «No creo que venga» (não acho que ele venha). PASSO 3: o mesmo vale para «parecer»: «Me parece que es difícil» e «No me parece que sea difícil». PASSO 4: «dudar que» sempre pede subjuntivo: «Dudo que llegue a tiempo». Mas «no dudar que» afirma e pede indicativo: «No dudo que vendrá». PASSO 5: expressões de certeza pedem indicativo: «es verdad que, es cierto que, es evidente que, está claro que, estoy seguro de que». Com «no», passam a pedir subjuntivo: «No es verdad que sea tarde». PASSO 6: expressões de possibilidade pedem subjuntivo: «es posible que, es probable que, puede que»: «Es posible que llueva». PASSO 7: «quizá, quizás» e «tal vez» pedem subjuntivo quando você duvida mais, e podem ficar no indicativo quando está mais convencido. No B1, use o subjuntivo: «Quizá tenga razón». PASSO 8: «a lo mejor» (já visto) usa o indicativo: «A lo mejor tiene razón». PASSO 9: uma pergunta como «¿Crees que viene?» costuma ficar no indicativo, porque você espera uma resposta e não nega a ideia.', {
        tag: 'Subjuntivo',
        comparacao: 'o português segue o mesmo raciocínio: «acho que ele vem» (indicativo) e «não acho que ele venha» (subjuntivo); «duvido que chegue»; «talvez tenha razão». O espanhol, porém, usa o subjuntivo em «es posible que» e «puede que» com a mesma lógica de «é possível que» e «pode ser que». O cuidado é com «talvez»: em português ele pede subjuntivo, mas em espanhol «a lo mejor» (talvez) pede indicativo, e «quizá» e «tal vez» admitem os dois modos.',
        tabela: [
          { certeza: 'Creo que viene.', duvida: 'No creo que venga.' },
          { certeza: 'Pienso que es verdad.', duvida: 'No pienso que sea verdad.' },
          { certeza: 'Estoy seguro de que llega hoy.', duvida: 'No estoy seguro de que llegue hoy.' },
          { certeza: 'Es verdad que tiene razón.', duvida: 'No es verdad que tenga razón.' },
          { certeza: 'Está claro que sabe mucho.', duvida: 'No está claro que sepa tanto.' },
          { certeza: 'No dudo que vendrá.', duvida: 'Dudo que venga.' },
        ],
        erros: [['No creo que viene.', 'No creo que venga.', 'Com «no creo que», o verbo seguinte fica no subjuntivo.'], ['Creo que venga.', 'Creo que viene.', '«Creo que» afirma; o verbo seguinte fica no indicativo.'], ['Dudo que viene.', 'Dudo que venga.', '«Dudar que» pede subjuntivo.'], ['Es posible que viene.', 'Es posible que venga.', '«Es posible que» exprime possibilidade, não certeza.'], ['Es verdad que sea difícil.', 'Es verdad que es difícil.', '«Es verdad que» afirma; use o indicativo.']],
      }),
      producao(8, 'Imagine que alguém lhe pergunta se vai chover amanhã. Responda seis vezes, com graus de dúvida: «Creo que… Es probable que… Puede que… Dudo que… No creo que… Quizá…»'),
    ]),
    sessao('S3', 'Emoção e valoração', [
      revisao(4, 'Diga em voz alta duas frases com «creo que», duas com «no creo que» e duas com «dudo que». Preste atenção ao modo do verbo.'),
      palavras(5, [
        ['me alegra que', '', 'fico contente que', ''], ['me da pena que', '', 'lamento que, tenho pena de que', ''], ['me sorprende que', '', 'me surpreende que', ''], ['es una pena que', '', 'é uma pena que', ''], ['me molesta que', '', 'me incomoda que', ''],
      ]),
      gramatica(8, 'Sentimentos e opiniões pedem subjuntivo', 'PASSO 1: quando você reage a algo, sente alegria, pena, surpresa, incômodo ou dá um juízo, o verbo seguinte vai para o subjuntivo, mesmo que o fato seja verdade: «Me alegra que estés aquí» (você está aqui, e eu me alegro com isso). PASSO 2: as expressões de emoção são «me alegra que, me gusta que, me encanta que, me molesta que, me sorprende que, me da pena que, me da rabia que, siento que, tengo miedo de que». PASSO 3: as valorações impessoais são «es bueno, es malo, es importante, es necesario, es normal, es raro, es mejor, es increíble, es una pena» + «que» + subjuntivo: «Es importante que descanses». PASSO 4: se o sujeito é o mesmo, use o infinitivo: «Me alegra verte» ou «Me alegro de verte». Se os sujeitos mudam, use «que» e subjuntivo: «Me alegro de que vengas». PASSO 5: cuidado com «siento que». Com o sentido de lamentar, pede subjuntivo («Siento que no puedas venir»). Com o sentido de perceber, pede indicativo («Siento que estás cansado»). PASSO 6: lembre do contraste com a certeza: «Es verdad que» e «es evidente que» pedem indicativo, enquanto «es raro que» e «es una pena que» pedem subjuntivo. PASSO 7: na América Latina, diga «Me alegra que vengan» no lugar de «que vengáis».', {
        tag: 'Subjuntivo',
        comparacao: 'o português também usa o subjuntivo: «fico feliz que você tenha vindo», «é importante que você descanse». O que muda é que o português aceita com frequência o infinitivo pessoal («fico feliz de você ter vindo»), e o espanhol exige o subjuntivo: «me alegra que hayas venido» (esse tempo você vê na aula 45). Em português, se diz também «é uma pena você não vir»; em espanhol, «es una pena que no vengas».',
        exemplos: [['Me alegra que estés aquí.', 'Fico contente que você esteja aqui.'], ['Es importante que descanses.', 'É importante que você descanse.'], ['Me molesta que llegues tarde.', 'Me incomoda que você chegue tarde.'], ['Es una pena que no puedas venir.', 'É uma pena que você não possa vir.'], ['Me sorprende que sepa tanto.', 'Me surpreende que ele saiba tanto.'], ['Me alegro de verte.', 'Fico contente de ver você.']],
        erros: [['Me alegra que estás aquí.', 'Me alegra que estés aquí.', 'Depois de verbos de emoção, o verbo vai para o subjuntivo.'], ['Es importante que descansas.', 'Es importante que descanses.', 'Valoração com «es importante que» pede subjuntivo.'], ['Me alegra que yo estar aquí.', 'Me alegra estar aquí.', 'Com o mesmo sujeito, use o infinitivo.'], ['Es evidente que sea tarde.', 'Es evidente que es tarde.', '«Es evidente que» afirma, então o verbo fica no indicativo.']],
      }),
      texto(8, 'Una carta a una amiga / Uma carta a uma amiga', 'Querida Sofía: Me alegra mucho que por fin te mudes a Madrid. Sé que estabas nerviosa y es normal que tengas un poco de miedo, pero no creo que tengas problemas para adaptarte: eres una persona abierta, y a la gente le encanta que hables con ella. Es importante que busques un piso cerca del metro, y te aconsejo que lo veas en persona antes de firmar. Mi hermano dice que conoce a un casero muy amable y quiere que lo llames. Dudo que encuentres algo barato en el centro, pero es posible que en Lavapiés haya buenas opciones. Ojalá puedas venir a cenar a casa el sábado. Me da pena que ahora vivas tan lejos de tu familia, pero creo que te va a ir muy bien. Un abrazo, Lucía.', 'Querida Sofía: Fico muito contente que você finalmente se mude para Madri. Sei que estava nervosa e é normal que tenha um pouco de medo, mas não acho que vá ter problemas para se adaptar: você é uma pessoa aberta, e as pessoas adoram que você converse com elas. É importante que procure um apartamento perto do metrô, e aconselho que o veja pessoalmente antes de assinar. Meu irmão diz que conhece um proprietário muito simpático e quer que você ligue para ele. Duvido que encontre algo barato no centro, mas é possível que em Lavapiés haja boas opções. Tomara que possa vir jantar em casa no sábado. Tenho pena que agora você viva tão longe da sua família, mas acho que vai dar tudo muito certo. Um abraço, Lucía.', [
        ['¿Qué le alegra a Lucía?', 'Que Sofía se mude a Madrid.'], ['¿Qué le aconseja a Sofía sobre el piso?', 'Que lo vea en persona antes de firmar.'], ['¿Qué duda Lucía?', 'Que Sofía encuentre algo barato en el centro.'], ['¿Qué espera Lucía para el sábado?', 'Que Sofía pueda ir a cenar a su casa.'],
      ]),
      producao(5, 'Escreva um bilhete curto a um amigo com quatro frases: uma de emoção («me alegra que…»), uma de conselho («te aconsejo que…»), uma de dúvida («dudo que…») e uma de desejo («ojalá…»).'),
    ]),
    sessao('S4', 'Revisão e prática da aula 43', [
      revisao(5, 'Diga em voz alta três frases com «quiero que», duas com «no creo que» e duas com «me alegra que». Troque de pessoa a cada frase (tú, él, nosotros).'),
      exercicios(20, [
        ouvir('Quiero que vengas', ['Quiero que vengas', 'Quiero que vienes', 'Quiero venir'], 'Quiero que vengas', 'Depois de «quiero que» ouve-se a forma de subjuntivo «vengas».'),
        ouvir('No creo que sea verdad', ['No creo que sea verdad', 'Creo que es verdad', 'No creo que sean verdad'], 'No creo que sea verdad', 'A negação «no creo que» vem com «sea».'),
        ouvir('Me alegra que estés aquí', ['Me alegra que estés aquí', 'Me alegra que estéis aquí', 'Me alegra estar aquí'], 'Me alegra que estés aquí', '«Estés» é a forma de «tú»; «estéis» seria a de «vosotros».'),
        ditado('Ojalá que tengas suerte', 'Escreva: Ojalá que tengas suerte. «Ojalá» leva acento.'),
        ditado('Dudo que llegue a tiempo', 'Escreva: Dudo que llegue a tiempo. «Llegue» tem «gu».'),
        mc('Qual frase está correta?', ['Quiero que vengas.', 'Quiero que vienes.', 'Quiero que venir.'], 'Quiero que vengas.', 'Dois sujeitos diferentes: «que» + subjuntivo.'),
        mc('Quando o sujeito é o mesmo, o espanhol usa…', ['infinitivo (Quiero comer)', 'que + subjuntivo (Quiero que coma)', 'indicativo (Quiero que como)'], 'infinitivo (Quiero comer)', 'Com um só sujeito, o segundo verbo fica no infinitivo.'),
        mc('Qual é o modo depois de «creo que» afirmativo?', ['indicativo: Creo que viene.', 'subjuntivo: Creo que venga.', 'infinitivo: Creo que venir.'], 'indicativo: Creo que viene.', '«Creo que» afirma, por isso o verbo seguinte fica no indicativo.'),
        mc('Qual frase está correta?', ['No creo que venga.', 'No creo que viene.', 'No creo que venir.'], 'No creo que venga.', 'A negação de «creer» abre a dúvida e pede subjuntivo.'),
        mc('Qual frase está correta?', ['Es verdad que está cansado.', 'Es verdad que esté cansado.', 'Es verdad que estar cansado.'], 'Es verdad que está cansado.', '«Es verdad que» afirma e pede indicativo.'),
        mc('Qual expressão é seguida de indicativo?', ['Está claro que', 'Es posible que', 'Dudo que'], 'Está claro que', '«Está claro que» afirma; as outras duas pedem subjuntivo.'),
        mc('Como se diz «tomara que chova»?', ['Ojalá llueva.', 'Ojalá llueve.', 'Ojalá lloverá.'], 'Ojalá llueva.', '«Ojalá» pede subjuntivo.'),
        lacuna('Quiero que tú me ___. (ayudar)', ['ayudes', 'ayudas', 'ayudar'], 'ayudes', 'Subjuntivo de «ayudar» para «tú»: ayudes.'),
        lacuna('Es importante que nosotros ___ la verdad. (decir)', ['digamos', 'decimos', 'diremos'], 'digamos', 'Subjuntivo de «decir» para «nosotros»: digamos.'),
        lacuna('No creo que ella ___ cansada. (estar)', ['esté', 'está', 'estar'], 'esté', 'A negação de «creer» pede subjuntivo: «esté».'),
        lacuna('Dudo que ellos ___ venir. (poder)', ['puedan', 'pueden', 'podrán'], 'puedan', '«Dudar que» pede subjuntivo: «puedan».'),
        lacuna('Me alegra que vosotros ___ aquí. (estar)', ['estéis', 'estáis', 'estarán'], 'estéis', 'Emoção + subjuntivo: «estéis».'),
        lacuna('Creo que Pablo ___ en casa. (estar)', ['está', 'esté', 'estar'], 'está', '«Creo que» afirmativo: indicativo.'),
        ordem('Ordene: «Te aconsejo que descanses un poco.»', ['Te', 'aconsejo', 'que', 'descanses', 'un', 'poco.'], 'Te aconsejo que descanses un poco.', 'Conselho + que + subjuntivo.'),
        ordem('Ordene: «No creo que tenga tiempo.»', ['No', 'creo', 'que', 'tenga', 'tiempo.'], 'No creo que tenga tiempo.', 'A negação de «creer» pede «tenga».'),
        ordem('Ordene: «Me da pena que te vayas.»', ['Me', 'da', 'pena', 'que', 'te', 'vayas.'], 'Me da pena que te vayas.', 'Emoção + subjuntivo de «irse».'),
        livre('Escreva em espanhol: Quero que você venha amanhã.', 'Quiero que vengas mañana.'),
        livre('Escreva em espanhol: Não acho que ele saiba a resposta.', 'No creo que sepa la respuesta.'),
      ]),
      producao(5, 'Responda em voz alta, com as suas palavras: «¿Qué esperas de este curso? ¿Qué dudas tienes? ¿Qué te alegra de aprender español?» Use subjuntivo em pelo menos três frases.'),
    ]),
  ],
});
