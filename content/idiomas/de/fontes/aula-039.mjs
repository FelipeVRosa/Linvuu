import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 39, titulo: 'Konjunktiv II básico: würde, hätte, wäre, könnte', nivel: 'a2',
  objetivo: 'Usar as formas básicas do Konjunktiv II (würde + infinitivo, hätte, wäre, könnte) para pedidos educados, desejos, sugestões e conselhos.',
  nota: 'Você pede, deseja e aconselha com educação. Próxima aula: o futuro com «werden».',
  sessoes: [
    sessao('S1', 'Würde + infinitivo', [
      revisao(5, 'Escreva 6 frases com «reflexivos» e 4 com «wenn».'),
      palavras(8, [
        ['höflich', 'hö-fliç', 'educado, cortês', 'polite'], ['bitten', 'bíten', 'pedir', 'to ask for'], ['der Wunsch', 'der vunx', 'desejo', 'wish'], ['die Bitte', 'di bíte', 'pedido', 'request'],
        ['eigentlich', 'áiguen-tliç', 'na verdade, de fato', 'actually'], ['an deiner Stelle', 'an dáiner xtéle', 'no seu lugar', 'in your place'], ['der Rat', 'der rat', 'conselho', 'advice'], ['der Vorschlag', 'der fôr-xlak', 'sugestão', 'suggestion'],
      ]),
      gramatica(14, 'Würde + infinitivo, passo a passo', 'PASSO 1: o Konjunktiv II serve para ser EDUCADO e para falar de DESEJOS e do que não é real. No A2 você usa só poucas formas. PASSO 2: a forma mais útil é «würde» + infinitivo no FIM: «Ich würde gern ins Kino gehen» (eu gostaria de ir ao cinema). PASSO 3: conjugue «würde»: ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden. PASSO 4: para PEDIR com educação: «Würdest du mir helfen?» (informal), «Würden Sie bitte das Fenster schließen?» (formal). PASSO 5: «gern» reforça o desejo: «Ich würde gern …». PASSO 6: compare os graus de cortesia: «Kannst du mir helfen?» (normal) < «Könntest du mir helfen?» (educado) < «Würdest du mir helfen?» (muito educado).', {
        tag: 'Verbos',
        comparacao: 'o português usa o futuro do pretérito («eu gostaria», «você poderia»). O alemão faz o mesmo com «würde» + infinitivo e com poucas formas curtas (hätte, wäre, könnte).',
        tabela: [
          { pronome: 'ich', würde: 'würde', exemplo: 'Ich würde gern reisen.' }, { pronome: 'du', würde: 'würdest', exemplo: 'Würdest du mir helfen?' }, { pronome: 'er / sie / es', würde: 'würde', exemplo: 'Er würde gern schlafen.' }, { pronome: 'wir', würde: 'würden', exemplo: 'Wir würden gern kommen.' },
          { pronome: 'ihr', würde: 'würdet', exemplo: 'Würdet ihr mitkommen?' }, { pronome: 'sie / Sie', würde: 'würden', exemplo: 'Würden Sie bitte warten?' },
        ],
        erros: [['Ich würde gehen gern ins Kino.', 'Ich würde gern ins Kino gehen.', 'O infinitivo vai para o fim.'], ['Ich würde gerne gehe.', 'Ich würde gern gehen.', 'Depois de «würde», o infinitivo.'], ['Würden du mir helfen?', 'Würdest du mir helfen?', '«du» → würdest.']],
      }),
      producao(3, 'Diga 6 desejos e pedidos educados: «Ich würde gern … Würdest du mir …? Würden Sie bitte …?»'),
    ]),
    sessao('S2', 'Hätte, wäre, könnte', [
      revisao(5, 'Escreva as 6 formas de «würde» e 4 frases com ela.'),
      palavras(8, [
        ['hätte gern', 'héte guérn', 'gostaria de ter', 'would like'], ['wäre', 'vére', 'seria, estaria', 'would be'], ['könnte', 'kön-te', 'poderia', 'could'], ['sollte', 'zólte', 'deveria', 'should'],
        ['das Ticket', 'das tíket', 'ingresso, bilhete', 'ticket'], ['das Zimmer', 'das tsímer', 'quarto', 'room'], ['die Zeit', 'di tsait', 'tempo', 'time'], ['schön', 'xön', 'bonito, bom', 'nice'],
      ]),
      gramatica(12, 'Hätte, wäre, könnte, sollte, passo a passo', 'PASSO 1: «hätte» é o Konjunktiv II de «haben»: ich hätte, du hättest, er hätte, wir hätten, ihr hättet, sie hätten. Sua frase mais usada: «Ich hätte gern einen Kaffee» (eu gostaria de um café) e «Wir hätten gern zwei Tickets.» PASSO 2: «wäre» é o de «sein»: ich wäre, du wärst, er wäre, wir wären, ihr wärt, sie wären: «Das wäre schön», «Ich wäre gern Arzt.» PASSO 3: «könnte» (poderia) e «sollte» (deveria) vêm de «können» e «sollen»; ganham o trema em «könnte» e não em «sollte»: «Könnten Sie mir helfen?» «Du solltest mehr schlafen.» PASSO 4: «möchte» você já conhece: é o Konjunktiv II de «mögen». PASSO 5: com um modal, o infinitivo vai ao fim: «Ich könnte morgen kommen.»', {
        tag: 'Verbos',
        tabela: [
          { verbo: 'hätte', ich: 'hätte', du: 'hättest', wir: 'hätten', exemplo: 'Ich hätte gern einen Kaffee.' }, { verbo: 'wäre', ich: 'wäre', du: 'wärst', wir: 'wären', exemplo: 'Das wäre schön.' }, { verbo: 'könnte', ich: 'könnte', du: 'könntest', wir: 'könnten', exemplo: 'Könntest du mir helfen?' }, { verbo: 'sollte', ich: 'sollte', du: 'solltest', wir: 'sollten', exemplo: 'Du solltest mehr schlafen.' },
        ],
        exemplos: [['Wir hätten gern zwei Tickets.', 'Gostaríamos de dois ingressos.'], ['Das wäre schön!', 'Seria ótimo!'], ['Könnten Sie mir helfen?', 'O senhor poderia me ajudar?'], ['Ich könnte morgen kommen.', 'Eu poderia vir amanhã.']],
        erros: [['Ich habe gern einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'Para pedir com educação: «hätte gern».'], ['Das ist schön. (quero dizer: seria)', 'Das wäre schön.', 'Para o que seria: «wäre».'], ['Du sollst mehr schlafen. (conselho suave)', 'Du solltest mehr schlafen.', '«sollte» = deveria.']],
      }),
      producao(5, 'Faça 6 pedidos e desejos educados: «Ich hätte gern … Das wäre … Könnten Sie …? Du solltest …»'),
    ]),
    sessao('S3', 'Conselhos e sugestões', [
      revisao(5, 'Escreva uma frase com cada forma: würde, hätte, wäre, könnte e sollte.'),
      gramatica(10, 'Dar conselhos e sugestões com educação', 'PASSO 1: para aconselhar: «An deiner Stelle würde ich …» (no seu lugar eu …) ou «Du solltest …» (você deveria …). PASSO 2: para sugerir: «Wie wäre es mit …?» (que tal …?) + dativo: «Wie wäre es mit einem Kaffee?»; ou «Wir könnten …» (poderíamos …). PASSO 3: para aceitar: «Das wäre schön!», «Gute Idee!». PASSO 4: para recusar com educação: «Ich würde gern, aber …» (eu gostaria, mas …).', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'conselho', frase: 'An deiner Stelle würde ich mehr schlafen.' }, { funcao: 'conselho', frase: 'Du solltest einen Tag Urlaub nehmen.' }, { funcao: 'sugestão', frase: 'Wie wäre es mit einem Wochenende am Meer?' }, { funcao: 'sugestão', frase: 'Wir könnten am Freitag fahren.' }, { funcao: 'recusa educada', frase: 'Ich würde gern, aber ich muss arbeiten.' },
        ],
      }),
      dialogo(10, 'Ein Rat / Um conselho', 'Dois amigos conversam sobre o cansaço.', [
        ['Paul', 'Ich bin so müde. Ich habe keine Energie.', 'Estou tão cansado. Não tenho energia.'], ['Lea', 'An deiner Stelle würde ich mehr schlafen.', 'No seu lugar eu dormiria mais.'], ['Paul', 'Ich würde gern, aber ich muss viel arbeiten.', 'Eu gostaria, mas preciso trabalhar muito.'],
        ['Lea', 'Du solltest einen Tag Urlaub nehmen.', 'Você deveria tirar um dia de folga.'], ['Paul', 'Das wäre schön! Ich hätte gern eine Woche frei.', 'Seria ótimo! Eu gostaria de ter uma semana de folga.'], ['Lea', 'Wie wäre es mit einem Wochenende am Meer?', 'Que tal um fim de semana na praia?'],
        ['Paul', 'Gute Idee! Könntest du mitkommen?', 'Boa ideia! Você poderia vir junto?'], ['Lea', 'Ja, ich würde gern mitkommen. Wir könnten am Freitag fahren.', 'Sim, eu gostaria de ir junto. Poderíamos viajar na sexta.'], ['Paul', 'Super! Dann wäre ich bald nicht mehr so müde.', 'Ótimo! Então logo eu não estaria mais tão cansado.'],
      ]),
      producao(5, 'Dê 3 conselhos a um amigo e faça 3 sugestões de programa, com «würde», «solltest» e «Wie wäre es mit …?».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 8 frases educadas: pedidos, desejos, conselhos e sugestões.'),
      exercicios(20, [
        lacuna('Ich ___ gern einen Kaffee. (hätte)', ['hätte', 'habe', 'hatte'], 'hätte', 'Pedido educado.'), lacuna('Das ___ schön. (wäre)', ['wäre', 'ist', 'war'], 'wäre', 'Konjunktiv II de sein.'), lacuna('Ich ___ gern ins Kino gehen.', ['würde', 'wurde', 'werde'], 'würde', 'würde + infinitivo.'),
        lacuna('___ du mir helfen? (poderia)', ['Könntest', 'Konntest', 'Kannst'], 'Könntest', 'Educado.'), lacuna('Du ___ mehr schlafen. (deveria)', ['solltest', 'sollst', 'sollte'], 'solltest', 'Conselho: «solltest».'), lacuna('Wie ___ es mit einem Kaffee?', ['wäre', 'ist', 'war'], 'wäre', '«Wie wäre es mit …?»'),
        mc('O Konjunktiv II serve para:', ['cortesia, desejo e conselho', 'contar o passado', 'dar ordens'], 'cortesia, desejo e conselho', 'Forma educada.'), mc('Qual é a mais educada?', ['Würden Sie mir helfen?', 'Können Sie mir helfen?', 'Helfen Sie mir!'], 'Würden Sie mir helfen?', 'Konjunktiv II.'), mc('«Ich hätte gern» significa:', ['Eu gostaria de', 'Eu tenho', 'Eu tinha'], 'Eu gostaria de', 'Pedido educado.'),
        ordem('Ordene: «Eu gostaria de um café.»', ['Ich', 'hätte', 'gern', 'einen', 'Kaffee'], 'Ich hätte gern einen Kaffee.', 'hätte + gern.'), ordem('Ordene: «No seu lugar eu dormiria mais.»', ['An', 'deiner', 'Stelle', 'würde', 'ich', 'mehr', 'schlafen'], 'An deiner Stelle würde ich mehr schlafen.', 'würde + infinitivo no fim.'), ouvir('Wie wäre es mit einem Wochenende am Meer', ['Wie wäre es mit einem Wochenende am Meer', 'Wie ist es mit einem Wochenende am Meer', 'Wann fahren wir ans Meer'], 'Wie wäre es mit einem Wochenende am Meer', 'Sugestão.'),
        ditado('Ich würde gern, aber ich muss arbeiten', 'Recusa educada.'), livre('Escreva 5 frases: um pedido educado, um desejo, um conselho, uma sugestão e uma recusa educada.', 'Könnten Sie mir helfen? Ich hätte gern einen Kaffee. Du solltest mehr schlafen. Wie wäre es mit einem Kaffee? Ich würde gern, aber ich muss arbeiten.'),
      ]),
      producao(5, 'Grave-se fazendo pedidos educados num restaurante e numa loja, e dando conselhos a um amigo.'),
    ]),
  ],
});
