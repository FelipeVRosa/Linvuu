import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 64, titulo: 'Dar opinião, concordar, discordar e estruturar um texto', nivel: 'b1',
  objetivo: 'Expressar e justificar uma opinião, concordar e discordar com educação, e estruturar um texto de opinião (fórum ou carta de leitor) com introdução, argumentos, exemplo e conclusão.',
  nota: 'Você dá opinião e escreve um texto argumentativo. Próxima aula: vida profissional, currículo e entrevista.',
  sessoes: [
    sessao('S1', 'Dar opinião', [
      revisao(5, 'Escreva 8 palavras formadas por composição, prefixos e sufixos.'),
      palavras(8, [
        ['meiner Meinung nach', 'mái-ner mái-nung narr', 'na minha opinião', 'in my opinion'], ['ich bin der Meinung, dass', 'ich bin der mái-nung das', 'sou da opinião de que', 'I am of the opinion that'], ['ich finde, dass', 'ich fín-de das', 'acho que', 'I find that'], ['ich glaube / denke, dass', 'ich gláu-be dass', 'creio / penso que', 'I believe / think that'],
        ['das Argument', 'das ar-gu-mént', 'argumento', 'argument'], ['das Beispiel', 'das bái-xpil', 'exemplo', 'example'], ['der Grund', 'der grunt', 'motivo', 'reason'], ['die Begründung', 'di be-grún-dung', 'justificativa', 'justification'],
      ]),
      gramatica(14, 'Dar opinião, passo a passo', 'PASSO 1: para dar opinião, use um verbo de opinião + «dass»: «Ich finde, dass Homeoffice praktisch ist.» PASSO 2: com a ORDEM NORMAL (sem «dass»), a opinião soa mais direta: «Ich finde, Homeoffice ist praktisch.» PASSO 3: «MEINER MEINUNG NACH» (na minha opinião) abre a frase, e o verbo vem logo depois (2ª posição): «Meiner Meinung nach ist das richtig.» PASSO 4: «Ich bin der Meinung, dass …» é formal; «Ich finde / glaube / denke / meine» é de uso comum. PASSO 5: justifique SEMPRE com «weil», «denn», «deshalb» ou um exemplo: «Ich finde das gut, weil man Zeit spart.» PASSO 6: suavize quando preciso: «Ich glaube eher, dass …» (eu acho mais que …), «Es kommt darauf an» (depende).', {
        tag: 'Frase',
        tabela: [
          { forma: 'verbo de opinião + dass', frase: 'Ich finde, dass Homeoffice praktisch ist.' }, { forma: 'ordem normal', frase: 'Ich finde, Homeoffice ist praktisch.' }, { forma: 'meiner Meinung nach', frase: 'Meiner Meinung nach ist das richtig.' }, { forma: 'formal', frase: 'Ich bin der Meinung, dass das ein Vorteil ist.' }, { forma: 'com motivo', frase: 'Ich finde das gut, weil man Zeit spart.' },
        ],
        erros: [['Meiner Meinung nach das ist richtig.', 'Meiner Meinung nach ist das richtig.', 'Depois de «meiner Meinung nach», o verbo na 2ª posição.'], ['Ich finde, dass Homeoffice ist praktisch.', 'Ich finde, dass Homeoffice praktisch ist.', 'Depois de «dass», o verbo no fim.'], ['Ich bin der Meinung, ist das richtig.', 'Ich bin der Meinung, dass das richtig ist.', 'Falta o «dass».']],
      }),
      producao(3, 'Dê 6 opiniões sobre temas do dia a dia, com motivo: «Ich finde, dass … , weil …»'),
    ]),
    sessao('S2', 'Concordar e discordar', [
      revisao(5, 'Escreva 6 opiniões com justificativa.'),
      palavras(8, [
        ['zustimmen', 'tsú-xti-men', 'concordar', 'to agree'], ['widersprechen', 'ví-der-xpré-çen', 'contradizer, discordar', 'to contradict'], ['recht haben', 'réçt há-ben', 'ter razão', 'to be right'], ['teilweise', 'táil-vai-ze', 'em parte', 'partly'],
        ['genauso', 'gue-náu-zo', 'exatamente assim', 'exactly'], ['anders', 'án-ders', 'diferente', 'different'], ['sicher', 'zí-çer', 'seguro', 'sure'], ['dagegen sein', 'da-guê-guen zain', 'ser contra', 'to be against'],
      ]),
      gramatica(12, 'Concordar e discordar com educação, passo a passo', 'PASSO 1: para CONCORDAR: «Da stimme ich dir zu» (concordo com você), «Das sehe ich genauso», «Da hast du recht», «Das stimmt». PASSO 2: para concordar EM PARTE: «Da stimme ich dir teilweise zu», «Einerseits hast du recht, andererseits …». PASSO 3: para DISCORDAR com educação: «Das sehe ich anders», «Da bin ich nicht sicher», «Das stimmt nicht ganz». PASSO 4: para DISCORDAR com força: «Da bin ich anderer Meinung», «Das sehe ich überhaupt nicht so». PASSO 5: «zustimmen» pede DATIVO e é separável: «Ich stimme dir zu», «Ich habe ihm zugestimmt». PASSO 6: «dafür sein» (ser a favor) e «dagegen sein» (ser contra), com «dass» ou «zu»: «Ich bin dafür, dass wir früher anfangen.»', {
        tag: 'Frase',
        tabela: [
          { funcao: 'concordar', frase: 'Da stimme ich dir zu. / Das sehe ich genauso. / Da hast du recht.' }, { funcao: 'concordar em parte', frase: 'Da stimme ich dir teilweise zu.' }, { funcao: 'discordar com educação', frase: 'Das sehe ich anders. / Da bin ich nicht sicher.' }, { funcao: 'discordar com força', frase: 'Da bin ich anderer Meinung.' }, { funcao: 'a favor / contra', frase: 'Ich bin dafür, dass wir früher anfangen.' },
        ],
        erros: [['Ich stimme dich zu.', 'Ich stimme dir zu.', '«zustimmen» pede dativo.'], ['Ich zustimme dir.', 'Ich stimme dir zu.', 'Separável: o prefixo vai para o fim.'], ['Das sehe ich anderes.', 'Das sehe ich anders.', '«anders» é advérbio (invariável).']],
      }),
      producao(5, 'Reaja em voz alta a 6 opiniões: concorde, concorde em parte e discorde com educação.'),
    ]),
    sessao('S3', 'Estruturar um texto de opinião', [
      revisao(5, 'Escreva 6 fórmulas para concordar e discordar.'),
      gramatica(10, 'O texto de opinião, passo a passo', 'PASSO 1: um texto de opinião (fórum, carta de leitor) tem QUATRO partes: INTRODUÇÃO (o tema e a sua posição), ARGUMENTOS (dois ou três, com motivo), EXEMPLO (um caso concreto) e CONCLUSÃO. PASSO 2: introdução: «Ich möchte meine Meinung zum Thema … äußern.» PASSO 3: argumentos, com ordem: «ERSTENS …, ZWEITENS …, DRITTENS …», «AUSSERDEM …». PASSO 4: exemplo: «Zum Beispiel …», «Ein Beispiel dafür ist …». PASSO 5: contra-argumento: «Natürlich gibt es auch Nachteile, aber …». PASSO 6: conclusão: «Zusammenfassend kann man sagen, dass …», «Abschließend möchte ich sagen …». PASSO 7: use os conectores que você aprendeu (weil, denn, deshalb, obwohl, trotzdem, einerseits … andererseits).', {
        tag: 'Frase',
        tabela: [
          { parte: 'introdução', frase: 'Ich möchte meine Meinung zum Thema Homeoffice äußern.' }, { parte: 'argumentos', frase: 'Erstens spart man Zeit. Zweitens kann man ruhiger arbeiten.' }, { parte: 'exemplo', frase: 'Zum Beispiel muss man nicht pendeln.' }, { parte: 'contra-argumento', frase: 'Natürlich gibt es auch Nachteile, aber die Vorteile überwiegen.' }, { parte: 'conclusão', frase: 'Zusammenfassend kann man sagen, dass Homeoffice sinnvoll ist.' },
        ],
      }),
      dialogo(10, 'Eine Diskussion über Homeoffice / Uma discussão sobre home office', 'Dois colegas debatem o trabalho em casa.', [
        ['Mia', 'Ich bin der Meinung, dass Homeoffice die Arbeit verbessert.', 'Sou da opinião de que o home office melhora o trabalho.'], ['Jonas', 'Da stimme ich dir teilweise zu. Man spart Zeit, weil man nicht pendeln muss.', 'Concordo em parte. Economiza-se tempo, porque não é preciso se deslocar.'], ['Mia', 'Außerdem kann man ruhiger arbeiten.', 'Além disso, pode-se trabalhar com mais tranquilidade.'],
        ['Jonas', 'Das sehe ich anders. Zu Hause lenkt mich vieles ab.', 'Vejo diferente. Em casa muita coisa me distrai.'], ['Mia', 'Zum Beispiel?', 'Por exemplo?'], ['Jonas', 'Zum Beispiel die Wäsche, der Fernseher und die Nachbarn.', 'Por exemplo, a roupa, a TV e os vizinhos.'],
        ['Mia', 'Einerseits hast du recht, andererseits kann man sich gut organisieren.', 'Por um lado você tem razão, por outro dá para se organizar bem.'], ['Jonas', 'Zusammenfassend würde ich sagen: Eine Mischung aus beidem ist ideal.', 'Resumindo, eu diria: uma mistura dos dois é ideal.'],
      ]),
      producao(5, 'Defenda uma opinião em voz alta em 8 frases, com introdução, dois argumentos, um exemplo e a conclusão.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de opinião de cerca de 80 palavras sobre um tema à sua escolha.'),
      exercicios(20, [
        lacuna('Ich finde, ___ Homeoffice praktisch ist.', ['dass', 'ob', 'wenn'], 'dass', '«dass» + verbo no fim.'), lacuna('Meiner Meinung ___ ist das richtig.', ['nach', 'mit', 'zu'], 'nach', 'meiner Meinung nach.'), lacuna('Da stimme ich ___ zu. (a você)', ['dir', 'dich', 'du'], 'dir', '«zustimmen» pede dativo.'),
        lacuna('Das sehe ich ___. (diferente)', ['anders', 'anderes', 'andere'], 'anders', 'Advérbio.'), lacuna('___ spart man Zeit, zweitens ist es ruhiger.', ['Erstens', 'Einerseits', 'Außerdem'], 'Erstens', 'Primeiro argumento.'), lacuna('___ kann man sagen, dass es sinnvoll ist. (resumindo)', ['Zusammenfassend', 'Zum Beispiel', 'Erstens'], 'Zusammenfassend', 'Conclusão.'),
        mc('«Da hast du recht» expressa:', ['concordância', 'discordância', 'dúvida'], 'concordância', 'Você tem razão.'), mc('«Das sehe ich anders» expressa:', ['discordância educada', 'concordância', 'pergunta'], 'discordância educada', 'Vejo diferente.'), mc('Depois de «meiner Meinung nach», o verbo vai:', ['na 2ª posição', 'no fim', 'no começo'], 'na 2ª posição', 'Meiner Meinung nach ist das …'),
        mc('O texto de opinião termina com:', ['uma conclusão', 'uma pergunta', 'um exemplo'], 'uma conclusão', 'Zusammenfassend …'), ordem('Ordene: «Na minha opinião, isso é correto.»', ['Meiner', 'Meinung', 'nach', 'ist', 'das', 'richtig'], 'Meiner Meinung nach ist das richtig.', 'Verbo na 2ª posição.'), ouvir('Da stimme ich dir teilweise zu', ['Da stimme ich dir teilweise zu', 'Da stimme ich dir nicht zu', 'Da hast du unrecht'], 'Da stimme ich dir teilweise zu', 'Concordo em parte.'),
        ditado('Zusammenfassend kann man sagen, dass es sinnvoll ist', 'Conclusão.'), livre('Escreva 5 frases: uma opinião com «dass», uma com «meiner Meinung nach», uma de concordância, uma de discordância e uma conclusão.', 'Ich finde, dass Homeoffice praktisch ist. Meiner Meinung nach spart man Zeit. Da stimme ich dir zu. Das sehe ich anders. Zusammenfassend kann man sagen, dass es sinnvoll ist.'),
      ]),
      producao(5, 'Grave-se debatendo um tema com um amigo imaginário: opine, concorde e discorde.'),
    ]),
  ],
});
