import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 72, titulo: 'Discurso indireto 1: dass, ob, sollen e o Konjunktiv I', nivel: 'b2',
  objetivo: 'Relatar o que outra pessoa disse com «dass» e com a ordem normal, transformar perguntas e ordens (ob, W-Fragen, sollen) e reconhecer o Konjunktiv I (er sei, er habe, er komme) nas notícias.',
  nota: 'Você relata o que os outros dizem. Próxima aula: o discurso indireto, parte 2 (tempos e formas substitutas).',
  sessoes: [
    sessao('S1', 'Relatar com dass e com a ordem normal', [
      revisao(5, 'Escreva 6 frases com Futur II e partículas modais.'),
      palavras(8, [
        ['sagen', 'zá-guen', 'dizer', 'to say'], ['fragen', 'frá-guen', 'perguntar', 'to ask'], ['behaupten', 'be-háup-ten', 'afirmar', 'to claim'], ['berichten', 'be-ríç-ten', 'relatar', 'to report'],
        ['mitteilen', 'mít-tái-len', 'comunicar', 'to inform'], ['meinen', 'mái-nen', 'achar, opinar', 'to think'], ['erwidern', 'er-ví-dern', 'replicar', 'to reply'], ['zugeben', 'tsú-gué-ben', 'admitir', 'to admit'],
      ]),
      gramatica(14, 'O discurso indireto, passo a passo', 'PASSO 1: no DISCURSO DIRETO, você repete as palavras de alguém entre aspas: «Er sagt: „Ich bin müde."» No DISCURSO INDIRETO, você RELATA o que a pessoa disse: «Er sagt, dass er müde ist.» PASSO 2: com «DASS» + verbo no fim, ou com a ORDEM NORMAL (sem «dass»): «Er sagt, er ist müde.» PASSO 3: os PRONOMES mudam conforme quem fala e quem ouve: «ich» → «er»: «Ich bin müde» → «Er sagt, dass er müde ist.» PASSO 4: o TEMPO fica igual na conversa: o presente continua no presente, o Perfekt no Perfekt: «Er sagt: „Ich habe gearbeitet." → Er sagt, dass er gearbeitet hat.» PASSO 5: PERGUNTAS de sim ou não: «ob»: «Er fragt: „Hast du Zeit?" → Er fragt, ob ich Zeit habe.» PASSO 6: PERGUNTAS com palavra interrogativa: a própria palavra: «Er fragt: „Wo wohnst du?" → Er fragt, wo ich wohne.» PASSO 7: ORDENS: «sollen»: «Er sagt: „Komm!" → Er sagt, ich soll kommen.»', {
        tag: 'Frase',
        comparacao: 'o português usa «que» («ele disse que está cansado») e «se» nas perguntas. O alemão usa «dass» e «ob», com o verbo no fim, ou a ordem normal.',
        tabela: [
          { direto: 'Er sagt: „Ich bin müde."', indireto: 'Er sagt, dass er müde ist. / Er sagt, er ist müde.' }, { direto: 'Sie sagt: „Ich habe gearbeitet."', indireto: 'Sie sagt, dass sie gearbeitet hat.' }, { direto: 'Er fragt: „Hast du Zeit?"', indireto: 'Er fragt, ob ich Zeit habe.' }, { direto: 'Er fragt: „Wo wohnst du?"', indireto: 'Er fragt, wo ich wohne.' },
          { direto: 'Er sagt: „Komm!"', indireto: 'Er sagt, ich soll kommen.' }, { direto: 'Sie sagt: „Ich komme morgen."', indireto: 'Sie sagt, dass sie morgen kommt.' },
        ],
        erros: [['Er sagt, dass ich bin müde.', 'Er sagt, dass er müde ist.', 'O pronome muda e o verbo vai ao fim.'], ['Er fragt, hast du Zeit.', 'Er fragt, ob ich Zeit habe.', 'Pergunta de sim ou não: «ob».'], ['Er sagt, komm!', 'Er sagt, ich soll kommen.', 'Ordem indireta: «sollen».']],
      }),
      producao(3, 'Relate 6 frases de outras pessoas em voz alta: «Er sagt, dass … Sie fragt, ob … Er sagt, ich soll …»'),
    ]),
    sessao('S2', 'O Konjunktiv I (para reconhecer)', [
      revisao(5, 'Escreva 6 frases no discurso indireto, com dass, ob e sollen.'),
      palavras(8, [
        ['er sei', 'er zai', 'ele seja/esteja (Konj. I)', 'he is (reported)'], ['er habe', 'er há-be', 'ele tenha (Konj. I)', 'he has (reported)'], ['er komme', 'er kó-me', 'ele venha (Konj. I)', 'he comes (reported)'], ['er gehe', 'er gué-e', 'ele vá (Konj. I)', 'he goes (reported)'],
        ['er könne', 'er kö-ne', 'ele possa (Konj. I)', 'he can (reported)'], ['er müsse', 'er mü-se', 'ele precise (Konj. I)', 'he must (reported)'], ['er wolle', 'er vó-le', 'ele queira (Konj. I)', 'he wants (reported)'], ['die Zeitung', 'di tsái-tung', 'jornal', 'newspaper'],
      ]),
      gramatica(12, 'O Konjunktiv I, passo a passo', 'PASSO 1: o KONJUNKTIV I é a forma usada em NOTÍCIAS e textos formais para relatar o que alguém disse, sem dizer se é verdade: «Der Minister sagte, er sei krank.» PASSO 2: na CONVERSA, a pessoa comum usa o indicativo («dass er krank ist») ou o Konjunktiv II («er wäre krank»); o Konjunktiv I é para RECONHECER na leitura. PASSO 3: forma: RAIZ + «-e» no singular da 3ª pessoa: er komme, er gehe, er habe, er könne, er müsse, er wolle. PASSO 4: «SEIN» é o único com forma própria completa: ich sei, du seist, er sei, wir seien, ihr seiet, sie seien. PASSO 5: quando o Konjunktiv I é igual ao indicativo (ex.: «sie haben», plural), usa-se o Konjunktiv II: «sie hätten». PASSO 6: o sentido é «segundo ele, … ».', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'sein', konjI: 'er sei', frase: 'Er sagte, er sei krank.' }, { infinitivo: 'haben', konjI: 'er habe', frase: 'Er sagte, er habe keine Zeit.' }, { infinitivo: 'kommen', konjI: 'er komme', frase: 'Sie sagte, sie komme morgen.' }, { infinitivo: 'gehen', konjI: 'er gehe', frase: 'Er sagte, er gehe nach Hause.' },
          { infinitivo: 'können', konjI: 'er könne', frase: 'Er sagte, er könne nicht kommen.' }, { infinitivo: 'müssen', konjI: 'er müsse', frase: 'Er sagte, er müsse arbeiten.' }, { infinitivo: 'wollen', konjI: 'er wolle', frase: 'Er sagte, er wolle reisen.' },
        ],
        erros: [['Er sagte, dass er sei krank.', 'Er sagte, er sei krank. / Er sagte, dass er krank sei.', 'Konjunktiv I: ou sem «dass», ou com «dass» e verbo no fim.'], ['Er sagte, er kommt. (em texto formal)', 'Er sagte, er komme.', 'Na imprensa, prefira o Konjunktiv I.']],
      }),
      producao(5, 'Leia em voz alta 6 frases de notícia no Konjunktiv I e diga o que elas significam: «Er sagte, er sei krank → segundo ele, ele está doente.»'),
    ]),
    sessao('S3', 'Contar o que foi dito', [
      revisao(5, 'Escreva 6 frases de notícia no discurso indireto.'),
      gramatica(10, 'Contar a um terceiro o que foi dito', 'PASSO 1: na conversa, relate com «Er hat gesagt, dass …» ou «Sie meint, dass …». PASSO 2: ao relatar um pedido: «Sie hat gefragt, ob du kommst.» PASSO 3: ao relatar uma ordem: «Er hat gesagt, ich soll warten.» PASSO 4: ao relatar uma dúvida: «Er weiß nicht, ob es klappt.» PASSO 5: combine com palavras como «angeblich» (supostamente), «laut» (segundo): «Laut Zeitung ist er krank.»', {
        tag: 'Frase',
        tabela: [
          { funcao: 'relatar um fato', frase: 'Er hat gesagt, dass er keine Zeit hat.' }, { funcao: 'relatar um pedido', frase: 'Sie hat gefragt, ob du kommst.' }, { funcao: 'relatar uma ordem', frase: 'Er hat gesagt, ich soll warten.' }, { funcao: 'segundo uma fonte', frase: 'Laut Zeitung ist er krank.' }, { funcao: 'supostamente', frase: 'Er ist angeblich krank.' },
        ],
      }),
      dialogo(10, 'Was hat er gesagt? / O que ele disse?', 'Duas colegas conversam sobre o que o chefe disse.', [
        ['Mia', 'Was hat der Chef in der Besprechung gesagt?', 'O que o chefe disse na reunião?'], ['Lea', 'Er hat gesagt, dass wir nächste Woche ein neues Projekt beginnen.', 'Disse que começaremos um novo projeto na semana que vem.'], ['Mia', 'Hat er gefragt, ob wir Zeit haben?', 'Ele perguntou se temos tempo?'],
        ['Lea', 'Ja, er hat gefragt, ob wir Überstunden machen können.', 'Sim, perguntou se podemos fazer hora extra.'], ['Mia', 'Und was hast du geantwortet?', 'E o que você respondeu?'], ['Lea', 'Ich habe gesagt, dass ich nur am Freitag Zeit habe.', 'Respondi que só tenho tempo na sexta.'],
        ['Mia', 'Er hat noch gesagt, ich soll die Unterlagen vorbereiten.', 'Ele disse ainda que eu devo preparar os documentos.'], ['Lea', 'Laut Chef ist das Projekt sehr wichtig.', 'Segundo o chefe, o projeto é muito importante.'],
      ]),
      producao(5, 'Conte em voz alta o que um colega ou um chefe disse, com «dass», «ob» e «soll».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases relatando uma conversa, no discurso indireto.'),
      exercicios(20, [
        lacuna('Er sagt, ___ er müde ist.', ['dass', 'ob', 'wenn'], 'dass', '«dass» + verbo no fim.'), lacuna('Er fragt, ___ ich Zeit habe.', ['ob', 'dass', 'wenn'], 'ob', 'Sim ou não: ob.'), lacuna('Er fragt, ___ ich wohne.', ['wo', 'ob', 'dass'], 'wo', 'Palavra interrogativa.'),
        lacuna('Er sagt, ich ___ kommen. (ordem)', ['soll', 'sollst', 'sollen'], 'soll', 'sollen para ordem indireta.'), lacuna('Er sagte, er ___ krank. (Konjunktiv I)', ['sei', 'ist', 'wäre'], 'sei', 'Konjunktiv I de sein.'), lacuna('Er sagte, er ___ keine Zeit. (Konjunktiv I)', ['habe', 'hat', 'hätte'], 'habe', 'Konjunktiv I de haben.'),
        lacuna('___ Zeitung ist er krank. (segundo)', ['Laut', 'Mit', 'Von'], 'Laut', 'Segundo uma fonte.'), mc('Em «Er sagt: „Ich bin müde"», no discurso indireto o «ich» vira:', ['er', 'ich', 'wir'], 'er', 'O pronome muda.'), mc('Perguntas de sim ou não no discurso indireto usam:', ['ob', 'dass', 'wenn'], 'ob', 'Er fragt, ob …'),
        mc('O Konjunktiv I é usado principalmente:', ['em notícias e textos formais', 'em conversas informais', 'em e-mails a amigos'], 'em notícias e textos formais', 'Para reconhecer.'), ordem('Ordene: «Ele diz que está cansado.»', ['Er', 'sagt', 'dass', 'er', 'müde', 'ist'], 'Er sagt, dass er müde ist.', 'dass + verbo no fim.'), ouvir('Er hat gesagt, ich soll warten', ['Er hat gesagt, ich soll warten', 'Er hat gesagt, dass ich warte', 'Er sagt: Warte!'], 'Er hat gesagt, ich soll warten', 'sollen.'),
        ditado('Sie hat gefragt, ob du kommst', 'ob + verbo no fim.'), livre('Escreva 5 frases relatando: um fato, uma pergunta de sim ou não, uma com palavra interrogativa, uma ordem e uma com Konjunktiv I.', 'Er sagt, dass er müde ist. Sie fragt, ob ich Zeit habe. Er fragt, wo ich wohne. Er sagt, ich soll kommen. Er sagte, er sei krank.'),
      ]),
      producao(5, 'Grave-se relatando uma conversa de trabalho, usando o discurso indireto.'),
    ]),
  ],
});
