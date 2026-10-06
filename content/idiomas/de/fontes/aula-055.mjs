import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 55, titulo: 'Konjunktiv II 2: o irreal no passado', nivel: 'b1',
  objetivo: 'Formar o Konjunktiv II do passado (hätte / wäre + Partizip II), expressar arrependimento e críticas («Ich hätte … sollen») e montar condicionais sobre o que não aconteceu.',
  nota: 'Você fala do que poderia ter sido. Próxima aula: o infinitivo com «zu».',
  sessoes: [
    sessao('S1', 'Hätte e wäre + Partizip II', [
      revisao(5, 'Escreva 6 condicionais irreais no presente, com wenn + Konjunktiv II.'),
      palavras(8, [
        ['bereuen', 'berói-en', 'arrepender-se', 'to regret'], ['verpassen', 'ferpássen', 'perder (um trem, uma chance)', 'to miss'], ['die Chance', 'di xánse', 'chance, oportunidade', 'chance'], ['entscheiden', 'entxáiden', 'decidir', 'to decide'],
        ['die Entscheidung', 'di entxáidung', 'decisão', 'decision'], ['der Fehler', 'der féler', 'erro', 'mistake'], ['leider', 'láider', 'infelizmente', 'unfortunately'], ['damals', 'dá-mals', 'naquela época', 'back then'],
      ]),
      gramatica(14, 'O irreal no passado, passo a passo', 'PASSO 1: para falar do que NÃO ACONTECEU no passado, use o KONJUNKTIV II DO PASSADO: «HÄTTE» ou «WÄRE» + Partizip II no fim: «Ich hätte gewusst» (eu teria sabido), «Ich wäre gekommen» (eu teria vindo). PASSO 2: a escolha entre «hätte» e «wäre» é a mesma de haben/sein no Perfekt: «ich hätte gegessen», «ich wäre gegangen». PASSO 3: a condicional completa: «Wenn ich das gewusst hätte, wäre ich nicht gekommen» (se eu tivesse sabido, não teria vindo). O «hätte» fica no FIM da subordinada. PASSO 4: a principal usa «hätte/wäre» + Partizip II (a forma com «würde … haben» soa pesada). PASSO 5: mesmas formas: ich hätte / wäre, du hättest / wärst, er hätte / wäre, wir hätten / wären, ihr hättet / wärt, sie hätten / wären.', {
        tag: 'Verbos',
        comparacao: 'o português tem o mais-que-perfeito do subjuntivo («se eu tivesse sabido») e o futuro do pretérito composto («teria vindo»). O alemão usa «hätte/wäre» + Partizip II nos dois.',
        tabela: [
          { pronome: 'ich', haben: 'hätte gewusst', sein: 'wäre gekommen' }, { pronome: 'du', haben: 'hättest gewusst', sein: 'wärst gekommen' }, { pronome: 'er / sie / es', haben: 'hätte gewusst', sein: 'wäre gekommen' }, { pronome: 'wir', haben: 'hätten gewusst', sein: 'wären gekommen' },
          { pronome: 'ihr', haben: 'hättet gewusst', sein: 'wärt gekommen' }, { pronome: 'sie / Sie', haben: 'hätten gewusst', sein: 'wären gekommen' },
        ],
        exemplos: [['Wenn ich das gewusst hätte, wäre ich nicht gekommen.', 'Se eu tivesse sabido, não teria vindo.'], ['Wenn ich Zeit gehabt hätte, hätte ich dich besucht.', 'Se eu tivesse tido tempo, teria visitado você.'], ['Wärst du früher gekommen, hättest du alle getroffen.', 'Se você tivesse vindo mais cedo, teria encontrado todos.']],
        erros: [['Wenn ich das wusste, wäre ich nicht gekommen.', 'Wenn ich das gewusst hätte, wäre ich nicht gekommen.', 'Irreal do passado: hätte + Partizip II.'], ['Wenn ich Zeit gehabt hätte, hätte ich bin gekommen.', 'Wenn ich Zeit gehabt hätte, wäre ich gekommen.', '«kommen» usa «sein»: «wäre gekommen».'], ['Wenn ich das gewusst habe, wäre ich nicht gekommen.', 'Wenn ich das gewusst hätte, wäre ich nicht gekommen.', 'Konjunktiv II: «hätte», não «habe».']],
      }),
      producao(3, 'Diga 6 coisas que teriam sido diferentes: «Wenn ich … gewusst hätte, wäre ich … gekommen.»'),
    ]),
    sessao('S2', 'Hätte + modal: críticas e arrependimentos', [
      revisao(5, 'Escreva 6 frases com «hätte/wäre + Partizip II».'),
      palavras(8, [
        ['Ich hätte … sollen', 'ich héte … zólen', 'eu deveria ter …', 'I should have …'], ['Ich hätte … können', 'ich héte … kö-nen', 'eu poderia ter …', 'I could have …'], ['Ich hätte … müssen', 'ich héte … müssen', 'eu teria que …', 'I would have had to …'], ['Du hättest … sollen', 'du hétest … zólen', 'você deveria ter …', 'you should have …'],
        ['der Vorwurf', 'der fôr-vurf', 'reprovação', 'reproach'], ['die Reue', 'di rói-e', 'arrependimento', 'regret'], ['wenigstens', 'vê-nigs-tens', 'pelo menos', 'at least'], ['rechtzeitig', 'réçt-tsai-tiç', 'a tempo', 'on time'],
      ]),
      gramatica(12, 'Hätte + infinitivo + modal, passo a passo', 'PASSO 1: para dizer «eu deveria ter…», «eu poderia ter…», use «HÄTTE» + infinitivo + MODAL NO INFINITIVO: «Ich hätte kommen können» (eu poderia ter vindo), «Ich hätte anrufen sollen» (eu deveria ter ligado). PASSO 2: aqui o modal fica no INFINITIVO (não no Partizip II): é o «duplo infinitivo»: «hätte … machen können». PASSO 3: com «du»: «Du hättest mich anrufen sollen» (você deveria ter me ligado): uma crítica suave. PASSO 4: use para pedir desculpas: «Ich hätte dir eine Nachricht schreiben sollen.» PASSO 5: com «wäre»: «Ich wäre gern gekommen» (eu teria vindo com prazer).', {
        tag: 'Verbos',
        tabela: [
          { forma: 'hätte + inf. + können', frase: 'Ich hätte kommen können.' }, { forma: 'hätte + inf. + sollen', frase: 'Du hättest mich anrufen sollen.' }, { forma: 'hätte + inf. + müssen', frase: 'Ich hätte arbeiten müssen.' }, { forma: 'pedir desculpas', frase: 'Ich hätte dir eine Nachricht schreiben sollen.' }, { forma: 'wäre + Partizip II', frase: 'Ich wäre gern gekommen.' },
        ],
        erros: [['Ich hätte kommen gekonnt.', 'Ich hätte kommen können.', 'Modal no infinitivo (duplo infinitivo).'], ['Du hättest mich angerufen sollen.', 'Du hättest mich anrufen sollen.', 'Verbo principal no infinitivo, depois o modal.']],
      }),
      producao(5, 'Diga 6 coisas que você deveria ou poderia ter feito: «Ich hätte … sollen / können. Du hättest … sollen.»'),
    ]),
    sessao('S3', 'Desculpas, críticas e arrependimentos', [
      revisao(5, 'Escreva 6 frases com «hätte + infinitivo + modal».'),
      gramatica(10, 'Usar o irreal do passado na conversa', 'PASSO 1: para lamentar: «Schade, dass … !» ou «Hätte ich das gewusst!» (verbo no começo). PASSO 2: para pedir desculpas com educação: «Ich hätte dir Bescheid sagen sollen.» PASSO 3: para criticar suavemente: «Du hättest wenigstens anrufen können.» PASSO 4: para lamentar com «wenn»: «Wenn ich das gewusst hätte, wäre ich früher gegangen.» PASSO 5: para consolar: «Das hätte jedem passieren können» (isso poderia ter acontecido com qualquer um).', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'lamentar', frase: 'Hätte ich das gewusst!' }, { funcao: 'pedir desculpas', frase: 'Ich hätte dir Bescheid sagen sollen.' }, { funcao: 'criticar com suavidade', frase: 'Du hättest wenigstens anrufen können.' }, { funcao: 'lamentar com wenn', frase: 'Wenn ich das gewusst hätte, wäre ich früher gegangen.' }, { funcao: 'consolar', frase: 'Das hätte jedem passieren können.' },
        ],
      }),
      dialogo(10, 'Verpasst! / Perdi!', 'Dois amigos falam de uma festa que um deles perdeu.', [
        ['Lea', 'Warum bist du nicht zur Party gekommen?', 'Por que você não veio à festa?'], ['Paul', 'Ich wäre gern gekommen, aber ich musste arbeiten.', 'Eu teria vindo com prazer, mas precisei trabalhar.'], ['Lea', 'Du hättest wenigstens anrufen können.', 'Você poderia pelo menos ter ligado.'],
        ['Paul', 'Du hast recht. Ich hätte dir eine Nachricht schreiben sollen.', 'Você tem razão. Eu deveria ter escrito uma mensagem a você.'], ['Lea', 'Wenn du gekommen wärst, hättest du alle getroffen.', 'Se você tivesse vindo, teria encontrado todos.'], ['Paul', 'Wenn ich das gewusst hätte, wäre ich früher gegangen.', 'Se eu soubesse, teria saído mais cedo.'],
        ['Lea', 'Schade! Wir hätten viel Spaß gehabt.', 'Que pena! Teríamos nos divertido muito.'], ['Paul', 'Nächstes Mal komme ich bestimmt, versprochen!', 'Da próxima vez eu venho com certeza, prometido!'],
      ]),
      producao(5, 'Peça desculpas e critique com suavidade em voz alta, com «hätte … sollen / können».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases sobre uma decisão que você tomou e como teria sido diferente.'),
      exercicios(20, [
        lacuna('Wenn ich das gewusst ___, wäre ich nicht gekommen.', ['hätte', 'habe', 'hatte'], 'hätte', 'Konjunktiv II do passado.'), lacuna('Wenn ich Zeit gehabt hätte, ___ ich gekommen. (sein)', ['wäre', 'war', 'bin'], 'wäre', '«kommen» usa «sein».'), lacuna('Ich ___ gern gekommen. (sein)', ['wäre', 'bin', 'hätte'], 'wäre', 'wäre + Partizip II.'),
        lacuna('Ich hätte kommen ___. (poderia)', ['können', 'gekonnt', 'kann'], 'können', 'Duplo infinitivo.'), lacuna('Du hättest mich anrufen ___. (deveria)', ['sollen', 'gesollt', 'sollst'], 'sollen', 'Duplo infinitivo.'), mc('O irreal do passado forma-se com:', ['hätte / wäre + Partizip II', 'würde + infinitivo', 'war + Partizip II'], 'hätte / wäre + Partizip II', 'Fato que não aconteceu.'),
        mc('Com modal, o irreal do passado usa:', ['duplo infinitivo', 'dois particípios', 'o presente'], 'duplo infinitivo', 'hätte … kommen können.'), mc('«Hätte ich das gewusst!» expressa:', ['arrependimento', 'ordem', 'pergunta'], 'arrependimento', 'Verbo no começo.'), mc('«Das hätte jedem passieren können» serve para:', ['consolar', 'criticar duramente', 'perguntar'], 'consolar', 'Poderia ter acontecido com qualquer um.'),
        ordem('Ordene: «Se eu soubesse, não teria vindo.»', ['Wenn', 'ich', 'das', 'gewusst', 'hätte', 'wäre', 'ich', 'nicht', 'gekommen'], 'Wenn ich das gewusst hätte, wäre ich nicht gekommen.', 'hätte no fim da subordinada.'), ordem('Ordene: «Você deveria ter ligado.»', ['Du', 'hättest', 'anrufen', 'sollen'], 'Du hättest anrufen sollen.', 'Duplo infinitivo no fim.'), ouvir('Ich hätte dir eine Nachricht schreiben sollen', ['Ich hätte dir eine Nachricht schreiben sollen', 'Ich habe dir eine Nachricht geschrieben', 'Ich schreibe dir eine Nachricht'], 'Ich hätte dir eine Nachricht schreiben sollen', 'Pedido de desculpas.'),
        ditado('Wenn du gekommen wärst, hättest du alle getroffen', 'wäre/hätte + Partizip II.'), livre('Escreva 5 frases: duas condicionais irreais do passado, uma crítica com «hättest … sollen», um pedido de desculpas e um arrependimento.', 'Wenn ich das gewusst hätte, wäre ich nicht gekommen. Wenn ich Zeit gehabt hätte, hätte ich dich besucht. Du hättest anrufen sollen. Ich hätte dir Bescheid sagen sollen. Hätte ich das gewusst!'),
      ]),
      producao(5, 'Grave-se contando uma oportunidade perdida e o que teria feito diferente.'),
    ]),
  ],
});
