import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 36, titulo: 'Frases subordinadas 1: weil e dass', nivel: 'a2',
  objetivo: 'Montar frases com «weil» (porque) e «dass» (que), com o verbo conjugado no FIM da subordinada, a vírgula, a inversão quando a subordinada abre a frase e a diferença entre «weil» e «denn».',
  nota: 'Você monta frases com weil e dass. Próxima aula: wenn, ob e as perguntas indiretas.',
  sessoes: [
    sessao('S1', 'Weil: porque', [
      revisao(5, 'Escreva 6 frases com os modais e o verbo principal no fim da frase.'),
      palavras(8, [
        ['weil', 'vail', 'porque', 'because'], ['denn', 'den', 'pois, porque (outra conjunção)', 'because'], ['warum', 'varúm', 'por que', 'why'], ['der Grund', 'der grunt', 'motivo, razão', 'reason'],
        ['deshalb', 'dés-halp', 'por isso', 'therefore'], ['also', 'ál-zo', 'então, portanto', 'so'], ['deswegen', 'dés-vêguen', 'por isso', 'that is why'], ['leider', 'láider', 'infelizmente', 'unfortunately'],
      ]),
      gramatica(14, 'Weil: o verbo vai para o fim, passo a passo', 'PASSO 1: «weil» (porque) abre uma frase SUBORDINADA: ela depende de outra. PASSO 2: REGRA PRINCIPAL: na frase subordinada, o verbo CONJUGADO vai para o FIM: «Ich bleibe zu Hause, weil ich krank bin.» PASSO 3: a VÍRGULA antes de «weil» é obrigatória. PASSO 4: se houver verbo separável, o prefixo se junta ao verbo no fim: «weil ich früh aufstehe». Com Perfekt, o auxiliar fica no fim absoluto: «weil ich Fieber gehabt habe». Com modal: «weil ich arbeiten muss.» PASSO 5: se a subordinada ABRE a frase, a principal começa pelo VERBO (porque a subordinada inteira conta como a primeira posição): «Weil ich krank bin, bleibe ich zu Hause.» PASSO 6: diferença para «denn»: «denn» (pois) é uma conjunção normal e não muda a ordem: «Ich bleibe zu Hause, denn ich bin krank.»', {
        tag: 'Frase',
        comparacao: 'em português a ordem das palavras não muda depois de «porque» («porque eu estou doente»). Em alemão, depois de «weil», o verbo conjugado vai para o FIM.',
        tabela: [
          { tipo: 'principal + weil', frase: 'Ich bleibe zu Hause, weil ich krank bin.' }, { tipo: 'weil + principal', frase: 'Weil ich krank bin, bleibe ich zu Hause.' }, { tipo: 'denn (ordem normal)', frase: 'Ich bleibe zu Hause, denn ich bin krank.' }, { tipo: 'separável no fim', frase: 'Ich bin müde, weil ich früh aufstehe.' },
          { tipo: 'modal no fim', frase: 'Ich komme nicht, weil ich arbeiten muss.' }, { tipo: 'Perfekt no fim', frase: 'Ich war müde, weil ich schlecht geschlafen habe.' },
        ],
        erros: [['Ich bleibe zu Hause, weil ich bin krank.', 'Ich bleibe zu Hause, weil ich krank bin.', 'Depois de «weil», o verbo conjugado vai para o fim.'], ['Weil ich bin krank, bleibe ich zu Hause.', 'Weil ich krank bin, bleibe ich zu Hause.', 'Verbo no fim da subordinada e, depois, a principal começa pelo verbo.'], ['Ich bin müde, weil ich stehe früh auf.', 'Ich bin müde, weil ich früh aufstehe.', 'O prefixo separável se junta ao verbo no fim.']],
      }),
      producao(3, 'Dê 6 motivos em voz alta com «weil»: «Ich lerne Deutsch, weil … Ich bin müde, weil …»'),
    ]),
    sessao('S2', 'Dass: que', [
      revisao(5, 'Escreva 6 frases com «weil», três com a subordinada no fim e três com a subordinada no começo.'),
      palavras(8, [
        ['sagen', 'zágen', 'dizer', 'to say'], ['glauben', 'gláuben', 'acreditar', 'to believe'], ['denken', 'dénken', 'pensar', 'to think'], ['wissen', 'víssen', 'saber', 'to know'],
        ['hoffen', 'hófen', 'esperar (ter esperança)', 'to hope'], ['meinen', 'máinen', 'achar, opinar', 'to think'], ['schade', 'xáde', 'pena', 'pity'], ['sicher', 'zíçer', 'certo, seguro', 'sure'],
      ]),
      gramatica(12, 'Dass: o «que» da frase subordinada, passo a passo', 'PASSO 1: «dass» (que) liga verbos de pensar, dizer, saber e esperar a uma frase subordinada: «Ich glaube, dass er kommt.» PASSO 2: a REGRA é a mesma de «weil»: verbo conjugado no FIM e vírgula antes. PASSO 3: verbos que costumam vir antes de «dass»: sagen, glauben, denken, meinen, wissen, hoffen. PASSO 4: «wissen» é irregular: ich weiß, du weißt, er weiß, wir wissen. PASSO 5: depois de adjetivos e expressões: «Es ist schade, dass …», «Ich bin sicher, dass …», «Ich freue mich, dass …». PASSO 6: ATENÇÃO À GRAFIA: «dass» (conjunção, com «ss») não é «das» (artigo ou pronome): «Das Buch, das ich lese, ist gut» × «Ich glaube, dass er kommt».', {
        tag: 'Frase',
        tabela: [
          { verbo: 'sagen', frase: 'Er sagt, dass er keine Zeit hat.' }, { verbo: 'glauben / denken', frase: 'Ich glaube, dass es regnet.' }, { verbo: 'wissen', frase: 'Ich weiß, dass du müde bist.' }, { verbo: 'hoffen', frase: 'Ich hoffe, dass du kommst.' },
          { verbo: 'meinen', frase: 'Ich meine, dass das eine gute Idee ist.' }, { verbo: 'es ist schade', frase: 'Es ist schade, dass du nicht kommst.' },
        ],
        erros: [['Ich glaube, dass er kommt nicht.', 'Ich glaube, dass er nicht kommt.', 'O verbo conjugado fica no fim, depois de «nicht».'], ['Ich glaube, das er kommt.', 'Ich glaube, dass er kommt.', '«dass» (conjunção) leva «ss»; «das» é artigo ou pronome.'], ['Er sagt, dass hat er keine Zeit.', 'Er sagt, dass er keine Zeit hat.', 'Verbo no fim.']],
      }),
      producao(5, 'Diga 6 frases com «dass»: «Ich glaube, dass … Ich hoffe, dass … Ich weiß, dass …»'),
    ]),
    sessao('S3', 'Weil e dass no diálogo', [
      revisao(5, 'Escreva 4 frases com «weil» e 4 com «dass», cada uma com o verbo no fim.'),
      gramatica(10, 'Juntando weil e dass', 'PASSO 1: as duas conjunções seguem a mesma ordem: sujeito, complementos e, no FIM, o verbo conjugado. PASSO 2: com mais de um verbo, o conjugado fica por último: «weil ich nicht kommen kann» (modal por último), «dass ich ihn gesehen habe» (auxiliar por último). PASSO 3: perguntas «Warum …?» pedem resposta com «weil»: «Warum kommst du nicht? — Weil ich arbeiten muss.» PASSO 4: a resposta curta «Weil …» pode ficar sem a frase principal.', {
        tag: 'Frase',
        tabela: [
          { situacao: 'pergunta e resposta', frase: 'Warum lernst du Deutsch? — Weil ich in Berlin arbeite.' }, { situacao: 'dois verbos', frase: 'Ich komme nicht, weil ich arbeiten muss.' }, { situacao: 'Perfekt', frase: 'Ich glaube, dass er den Film gesehen hat.' }, { situacao: 'com negação', frase: 'Ich weiß, dass er nicht kommt.' },
        ],
      }),
      dialogo(10, 'Warum kommst du nicht? / Por que você não vem?', 'Dois amigos falam de uma festa.', [
        ['Lea', 'Warum kommst du heute nicht zur Party?', 'Por que você não vem à festa hoje?'], ['Paul', 'Weil ich arbeiten muss. Ich glaube, dass ich bis zehn Uhr arbeite.', 'Porque preciso trabalhar. Acho que trabalho até as dez.'], ['Lea', 'Schade! Ich hoffe, dass du morgen Zeit hast.', 'Que pena! Espero que você tenha tempo amanhã.'],
        ['Paul', 'Ja, morgen habe ich frei, weil ich Urlaub habe.', 'Sim, amanhã estou de folga, porque estou de férias.'], ['Lea', 'Dann sage ich dir, dass wir morgen ins Kino gehen!', 'Então eu digo a você que vamos ao cinema amanhã!'], ['Paul', 'Gern! Ich weiß, dass es einen guten Film gibt.', 'Com prazer! Sei que há um bom filme.'],
        ['Lea', 'Prima! Ich komme um sieben Uhr, weil der Film um acht Uhr beginnt.', 'Ótimo! Eu chego às sete, porque o filme começa às oito.'], ['Paul', 'Gut, dann bis morgen!', 'Ótimo, então até amanhã!'],
      ]),
      producao(5, 'Responda em voz alta com «weil»: «Warum lernst du Deutsch? Warum bist du müde? Warum kommst du (nicht)?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com «weil» e «dass».'),
      exercicios(20, [
        lacuna('Ich bleibe zu Hause, ___ ich krank bin.', ['weil', 'denn', 'dass'], 'weil', 'Motivo: «weil».'), lacuna('Ich bleibe zu Hause, ___ ich bin krank.', ['denn', 'weil', 'dass'], 'denn', '«denn» mantém a ordem normal.'), lacuna('Ich glaube, ___ er kommt.', ['dass', 'weil', 'das'], 'dass', 'Conjunção «dass» (com ss).'),
        lacuna('Ich weiß, dass du müde ___. (sein)', ['bist', 'sind', 'warst'], 'bist', 'Verbo no fim.'), mc('Depois de «weil», o verbo conjugado vai:', ['para o fim', 'para a 2ª posição', 'para o começo'], 'para o fim', 'Regra da subordinada.'), mc('Qual frase está certa?', ['Ich komme nicht, weil ich arbeiten muss.', 'Ich komme nicht, weil ich muss arbeiten.', 'Ich komme nicht, weil muss ich arbeiten.'], 'Ich komme nicht, weil ich arbeiten muss.', 'Modal conjugado por último.'),
        mc('Se a subordinada abre a frase, a principal começa:', ['pelo verbo', 'pelo sujeito', 'por «weil»'], 'pelo verbo', 'Weil ich krank bin, bleibe ich…'), mc('«dass» é:', ['conjunção (que)', 'artigo', 'pronome relativo'], 'conjunção (que)', 'Com «ss».'), mc('Qual é o verbo irregular de «wissen» no «ich»?', ['weiß', 'wisse', 'weißt'], 'weiß', 'ich weiß.'),
        ordem('Ordene: «Eu fico em casa porque estou doente.»', ['Ich', 'bleibe', 'zu', 'Hause', 'weil', 'ich', 'krank', 'bin'], 'Ich bleibe zu Hause, weil ich krank bin.', 'Verbo conjugado no fim da subordinada.'), ordem('Ordene: «Eu espero que você venha.»', ['Ich', 'hoffe', 'dass', 'du', 'kommst'], 'Ich hoffe, dass du kommst.', '«dass» + verbo no fim.'),
        ouvir('Ich bin müde, weil ich früh aufstehe', ['Ich bin müde, weil ich früh aufstehe', 'Ich bin müde, weil ich stehe früh auf', 'Ich bin müde, denn ich stehe früh auf'], 'Ich bin müde, weil ich früh aufstehe', 'Separável junto, no fim.'), ditado('Ich glaube, dass er nicht kommt', 'dass + verbo no fim.'),
        livre('Escreva 5 frases: duas com «weil», duas com «dass» e uma com a subordinada no começo.', 'Ich lerne Deutsch, weil ich in Berlin arbeite. Ich bin müde, weil ich schlecht geschlafen habe. Ich glaube, dass er kommt. Ich hoffe, dass du Zeit hast. Weil ich krank bin, bleibe ich zu Hause.'),
      ]),
      producao(5, 'Grave-se explicando em voz alta por que você estuda alemão, por que está cansado ou feliz, e o que você acha e espera.'),
    ]),
  ],
});
