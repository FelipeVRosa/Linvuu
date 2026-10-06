import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 71, titulo: 'Apresentação oral, gráficos e discussão', nivel: 'b1',
  objetivo: 'Estruturar e fazer uma apresentação oral curta (abertura, partes, conclusão), descrever gráficos e números, e conduzir uma discussão com perguntas, respostas e pedidos de esclarecimento.',
  nota: 'Você faz uma apresentação e discute com segurança. Próxima aula: revisão e simulado do B1.',
  sessoes: [
    sessao('S1', 'A estrutura de uma apresentação', [
      revisao(5, 'Escreva 6 frases sobre mídia e meio ambiente.'),
      palavras(8, [
        ['begrüßen', 'be-grü-sen', 'cumprimentar, dar as boas-vindas', 'to welcome'], ['das Thema', 'das té-ma', 'tema', 'topic'], ['die Gliederung', 'di glí-de-rung', 'estrutura, roteiro', 'outline'], ['die Folie', 'di fô-lie', 'slide', 'slide'],
        ['der Vortrag', 'der fôr-trak', 'palestra, apresentação', 'talk'], ['die Aufmerksamkeit', 'di áuf-merk-zam-kait', 'atenção', 'attention'], ['vorstellen', 'fôr-xté-len', 'apresentar', 'to present'], ['zusammenfassen', 'tsu-zá-men-fá-sen', 'resumir', 'to summarise'],
      ]),
      gramatica(14, 'Uma apresentação, passo a passo', 'PASSO 1: ABERTURA: «Guten Morgen, meine Damen und Herren. Ich begrüße Sie zu meiner Präsentation.» PASSO 2: TEMA: «Heute spreche ich über …», «Das Thema meines Vortrags ist …». PASSO 3: ROTEIRO: «Mein Vortrag besteht aus drei Teilen: Erstens …, zweitens …, drittens …». PASSO 4: CORPO: «Auf dieser Folie sehen Sie …», «Wie Sie sehen, …», «Ein wichtiger Punkt ist …». PASSO 5: TRANSIÇÃO: «Kommen wir nun zum zweiten Punkt», «Damit komme ich zum Schluss». PASSO 6: CONCLUSÃO: «Zusammenfassend kann man sagen, dass …». PASSO 7: ENCERRAMENTO: «Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?»', {
        tag: 'Frase',
        tabela: [
          { parte: 'abertura', frase: 'Guten Morgen, meine Damen und Herren. Ich begrüße Sie zu meiner Präsentation.' }, { parte: 'tema', frase: 'Heute spreche ich über das Thema Umwelt.' }, { parte: 'roteiro', frase: 'Mein Vortrag besteht aus drei Teilen.' }, { parte: 'corpo', frase: 'Auf dieser Folie sehen Sie die Zahlen. Wie Sie sehen, …' }, { parte: 'transição', frase: 'Kommen wir nun zum zweiten Punkt.' }, { parte: 'conclusão', frase: 'Zusammenfassend kann man sagen, dass …' }, { parte: 'encerramento', frase: 'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?' },
        ],
        erros: [['Heute ich spreche über Umwelt.', 'Heute spreche ich über Umwelt.', 'Verbo na 2ª posição depois de «heute».'], ['Ich begrüße Sie für meine Präsentation.', 'Ich begrüße Sie zu meiner Präsentation.', '«begrüßen zu» + dativo.'], ['Kommen wir jetzt zu die zweite Punkt.', 'Kommen wir nun zum zweiten Punkt.', 'zu + dativo: «zum zweiten Punkt».']],
      }),
      producao(3, 'Faça em voz alta a abertura de uma apresentação de 1 minuto: boas-vindas, tema e roteiro.'),
    ]),
    sessao('S2', 'Descrever gráficos e números', [
      revisao(5, 'Escreva as 7 partes de uma apresentação com uma frase cada.'),
      palavras(8, [
        ['die Grafik', 'di grá-fik', 'gráfico', 'graph'], ['das Diagramm', 'das di-a-grám', 'diagrama', 'chart'], ['das Prozent', 'das pro-tsént', 'por cento', 'percent'], ['die Mehrheit', 'di mér-hait', 'maioria', 'majority'],
        ['die Hälfte', 'di hél-fte', 'metade', 'half'], ['das Drittel', 'das drí-tel', 'um terço', 'a third'], ['steigen / sinken', 'xtái-guen / zín-ken', 'subir / cair', 'to rise / to fall'], ['im Vergleich zu', 'im fer-gláiç tsu', 'em comparação com', 'compared to'],
      ]),
      gramatica(12, 'Falar de gráficos, passo a passo', 'PASSO 1: para apresentar: «Die Grafik zeigt …», «Das Diagramm stellt … dar». PASSO 2: para as PROPORÇÕES: «die Mehrheit» (maioria), «die Minderheit», «die Hälfte» (metade), «ein Drittel» (um terço), «ein Viertel» (um quarto), «zehn Prozent» (10%). PASSO 3: para a TENDÊNCIA: «Die Zahl STEIGT» (sobe), «SINKT» (cai), «BLEIBT GLEICH» (fica igual); no passado: «Die Zahl ist gestiegen / gesunken» (Perfekt com «sein»). PASSO 4: para a QUANTIDADE da mudança: «um zehn Prozent» (em 10%): «Die Zahl ist um zehn Prozent gestiegen.» PASSO 5: para COMPARAR: «im Vergleich zum Vorjahr» (em comparação com o ano anterior), «im Jahr 2020 … im Jahr 2023 …». PASSO 6: para a CONCLUSÃO: «Daraus kann man schließen, dass …» (disso se pode concluir que …).', {
        tag: 'Frase',
        tabela: [
          { funcao: 'apresentar', frase: 'Die Grafik zeigt die Zahl der Radfahrer.' }, { funcao: 'proporção', frase: 'Die Mehrheit fährt mit dem Rad. Ein Drittel geht zu Fuß.' }, { funcao: 'tendência', frase: 'Die Zahl steigt. / ist gestiegen. / bleibt gleich.' }, { funcao: 'quantidade', frase: 'Die Zahl ist um zehn Prozent gestiegen.' }, { funcao: 'comparação', frase: 'Im Vergleich zum Vorjahr ist die Zahl gestiegen.' }, { funcao: 'conclusão', frase: 'Daraus kann man schließen, dass das Rad beliebter wird.' },
        ],
        erros: [['Die Zahl hat gestiegen.', 'Die Zahl ist gestiegen.', '«steigen» usa «sein».'], ['Die Zahl ist von zehn Prozent gestiegen.', 'Die Zahl ist um zehn Prozent gestiegen.', 'Quantidade da mudança: «um».'], ['Im Vergleich zu dem Vorjahr', 'Im Vergleich zum Vorjahr', 'Contração: zu dem → zum.']],
      }),
      producao(5, 'Descreva em voz alta um gráfico imaginário em 6 frases, com proporções, tendência e comparação.'),
    ]),
    sessao('S3', 'Perguntas e discussão', [
      revisao(5, 'Escreva 6 frases para descrever um gráfico.'),
      gramatica(10, 'Conduzir uma discussão, passo a passo', 'PASSO 1: para TOMAR A PALAVRA: «Darf ich etwas sagen?», «Ich möchte kurz ergänzen …». PASSO 2: para PEDIR ESCLARECIMENTO: «Könnten Sie das bitte noch einmal erklären?», «Was meinen Sie damit?». PASSO 3: para RESPONDER: «Das ist eine gute Frage», «Wie ich schon gesagt habe …», «Dazu möchte ich sagen, dass …». PASSO 4: para DISCORDAR com educação: «Das sehe ich etwas anders», «Das stimmt zwar, aber …». PASSO 5: para MUDAR DE ASSUNTO: «Das bringt mich zu einem anderen Punkt». PASSO 6: para ENCERRAR: «Wenn es keine weiteren Fragen gibt, möchte ich mich bedanken».', {
        tag: 'Frase',
        tabela: [
          { funcao: 'tomar a palavra', frase: 'Darf ich etwas sagen? / Ich möchte kurz ergänzen …' }, { funcao: 'pedir esclarecimento', frase: 'Könnten Sie das bitte noch einmal erklären?' }, { funcao: 'responder', frase: 'Das ist eine gute Frage. Dazu möchte ich sagen, dass …' }, { funcao: 'discordar', frase: 'Das stimmt zwar, aber ich sehe das etwas anders.' }, { funcao: 'encerrar', frase: 'Wenn es keine weiteren Fragen gibt, möchte ich mich bedanken.' },
        ],
      }),
      dialogo(10, 'Fragen nach der Präsentation / Perguntas depois da apresentação', 'Depois de uma apresentação, o público faz perguntas.', [
        ['Tom', 'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?', 'Muito obrigado pela atenção. Há perguntas?'], ['Lea', 'Ja, darf ich etwas fragen? Wie viele Personen haben an der Umfrage teilgenommen?', 'Sim, posso perguntar? Quantas pessoas participaram da pesquisa?'], ['Tom', 'Es haben hundert Personen teilgenommen, die Hälfte davon Frauen.', 'Cem pessoas participaram, metade delas mulheres.'],
        ['Lea', 'Danke. Können Sie die Grafik noch einmal erklären?', 'Obrigada. O senhor pode explicar o gráfico mais uma vez?'], ['Tom', 'Gern. Sie zeigt, dass die Zahl im Vergleich zum Vorjahr um zehn Prozent gestiegen ist.', 'Com prazer. Ela mostra que o número subiu dez por cento em relação ao ano anterior.'], ['Anna', 'Ich habe eine Frage zum Schluss: Was empfehlen Sie?', 'Tenho uma pergunta sobre a conclusão: o que o senhor recomenda?'],
        ['Tom', 'Ich empfehle, mehr in öffentliche Verkehrsmittel zu investieren.', 'Recomendo investir mais em transporte público.'], ['Anna', 'Das ist ein interessanter Vorschlag. Vielen Dank!', 'Essa é uma proposta interessante. Muito obrigada!'],
      ]),
      producao(5, 'Responda em voz alta a 4 perguntas depois de uma apresentação imaginária, com as fórmulas da sessão.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um roteiro de apresentação de 8 frases sobre um tema à sua escolha.'),
      exercicios(20, [
        lacuna('Ich ___ Sie zu meiner Präsentation. (begrüßen)', ['begrüße', 'begrüßt', 'begrüßen'], 'begrüße', 'ich → begrüße.'), lacuna('Heute ___ ich über das Thema Umwelt. (sprechen)', ['spreche', 'sprecht', 'sprichst'], 'spreche', 'Verbo na 2ª posição.'), lacuna('Kommen wir nun ___ zweiten Punkt.', ['zum', 'zur', 'zu'], 'zum', 'zu dem → zum.'),
        lacuna('Die Zahl ___ gestiegen. (sein)', ['ist', 'hat', 'wird'], 'ist', '«steigen» usa «sein».'), lacuna('Die Zahl ist ___ zehn Prozent gestiegen.', ['um', 'von', 'auf'], 'um', 'Quantidade da mudança.'), lacuna('Im ___ zum Vorjahr ist die Zahl gestiegen.', ['Vergleich', 'Ergebnis', 'Gegenteil'], 'Vergleich', 'im Vergleich zu.'),
        mc('«Die Mehrheit» é:', ['a maioria', 'a metade', 'a minoria'], 'a maioria', 'Mais da metade.'), mc('«Ein Drittel» é:', ['um terço', 'um quarto', 'a metade'], 'um terço', '1/3.'), mc('Para pedir esclarecimento, diga:', ['Könnten Sie das bitte noch einmal erklären?', 'Das ist falsch!', 'Ich habe keine Frage.'], 'Könnten Sie das bitte noch einmal erklären?', 'Pedido educado.'),
        ordem('Ordene: «O gráfico mostra o número de ciclistas.»', ['Die', 'Grafik', 'zeigt', 'die', 'Zahl', 'der', 'Radfahrer'], 'Die Grafik zeigt die Zahl der Radfahrer.', 'zeigen + Akk.'), ouvir('Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen', ['Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen', 'Willkommen zu meiner Präsentation', 'Heute spreche ich über Umwelt'], 'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen', 'Encerramento.'), ditado('Die Zahl ist um zehn Prozent gestiegen', 'um + quantidade.'),
        livre('Escreva 5 frases de uma apresentação: abertura, tema, roteiro, um dado de gráfico e conclusão.', 'Ich begrüße Sie zu meiner Präsentation. Heute spreche ich über das Thema Umwelt. Mein Vortrag besteht aus drei Teilen. Die Zahl ist um zehn Prozent gestiegen. Zusammenfassend kann man sagen, dass das Rad beliebter wird.'),
      ]),
      producao(5, 'Grave-se fazendo uma apresentação de 2 minutos e respondendo a duas perguntas.'),
    ]),
  ],
});
