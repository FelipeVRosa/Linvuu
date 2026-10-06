import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 70, titulo: 'Mídia, sociedade e meio ambiente', nivel: 'b1',
  objetivo: 'Falar de notícias, redes sociais, meio ambiente e hábitos sustentáveis, entender textos jornalísticos curtos e dar opinião sobre temas da sociedade com o vocabulário e as estruturas do B1.',
  nota: 'Você fala de mídia, sociedade e ambiente. Próxima aula: apresentação oral e discussão.',
  sessoes: [
    sessao('S1', 'Mídia e redes sociais', [
      revisao(5, 'Escreva 6 frases de uma entrevista de emprego, de memória.'),
      palavras(8, [
        ['die Nachrichten', 'di náárr-riç-ten', 'notícias', 'news'], ['die Zeitung', 'di tsái-tung', 'jornal', 'newspaper'], ['das Fernsehen', 'das férn-zé-en', 'televisão', 'television'], ['die sozialen Medien', 'di zo-tsiá-len mé-dien', 'redes sociais', 'social media'],
        ['der Artikel', 'der ar-tí-kel', 'artigo, matéria', 'article'], ['die Schlagzeile', 'di xlák-tsái-le', 'manchete', 'headline'], ['die Meldung', 'di mél-dung', 'notícia curta, aviso', 'report'], ['sich informieren', 'zich in-for-mí-ren', 'informar-se', 'to get informed'],
      ]),
      gramatica(14, 'Falar de mídia, passo a passo', 'PASSO 1: para dizer ONDE você se informa: «Ich informiere mich im Internet / in der Zeitung / im Fernsehen.» PASSO 2: «sich informieren über + Akk»: «Ich informiere mich über das Wetter.» PASSO 3: para falar das notícias: «In den Nachrichten wird über … berichtet» (passivo!). PASSO 4: para opinar sobre as redes: «Soziale Medien haben Vor- und Nachteile.» PASSO 5: use os conectores: «Einerseits kann man schnell Informationen finden, andererseits gibt es viele Falschmeldungen.» PASSO 6: «Falschmeldung» (notícia falsa) e «Quelle» (fonte) são palavras-chave para falar da confiabilidade.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'onde se informa', frase: 'Ich informiere mich im Internet und in der Zeitung.' }, { funcao: 'sobre o quê', frase: 'Ich informiere mich über das Wetter.' }, { funcao: 'passivo', frase: 'In den Nachrichten wird über das Wetter berichtet.' }, { funcao: 'opinião', frase: 'Soziale Medien haben Vor- und Nachteile.' }, { funcao: 'contraste', frase: 'Einerseits findet man schnell Informationen, andererseits gibt es viele Falschmeldungen.' },
        ],
        erros: [['Ich informiere mich von das Wetter.', 'Ich informiere mich über das Wetter.', '«sich informieren über + Akk».'], ['Ich informiere mich in Internet.', 'Ich informiere mich im Internet.', '«in dem» → «im».'], ['In den Nachrichten berichtet über das Wetter.', 'In den Nachrichten wird über das Wetter berichtet.', 'Passivo: werden + Partizip II.']],
      }),
      producao(3, 'Diga em voz alta como você se informa e o que acha das redes sociais.'),
    ]),
    sessao('S2', 'Meio ambiente e hábitos sustentáveis', [
      revisao(5, 'Escreva 6 frases sobre como você se informa.'),
      palavras(8, [
        ['die Umwelt', 'di úm-velt', 'meio ambiente', 'environment'], ['der Klimawandel', 'der klí-ma-ván-del', 'mudança climática', 'climate change'], ['der Müll', 'der mül', 'lixo', 'rubbish'], ['recyceln', 're-sí-keln', 'reciclar', 'to recycle'],
        ['Energie sparen', 'e-nér-gui xpá-ren', 'economizar energia', 'to save energy'], ['der öffentliche Verkehr', 'der ö-fent-li-çe fer-kér', 'transporte público', 'public transport'], ['die Verschmutzung', 'di fer-xmú-tsung', 'poluição', 'pollution'], ['nachhaltig', 'nárr-hál-tiç', 'sustentável', 'sustainable'],
      ]),
      gramatica(12, 'Falar de meio ambiente, passo a passo', 'PASSO 1: para HÁBITOS: «Ich trenne den Müll», «Ich spare Energie», «Ich fahre mit öffentlichen Verkehrsmitteln.» PASSO 2: para a FINALIDADE (aula 57): «Ich recycle, um die Umwelt zu schützen» e «damit die Umwelt sauberer wird». PASSO 3: para a CONSEQUÊNCIA: «Das Klima wird wärmer. Deshalb müssen wir handeln.» PASSO 4: para HIPÓTESES (Konjunktiv II): «Wenn alle weniger Auto fahren würden, wäre die Luft sauberer.» PASSO 5: para o PASSIVO: «Der Müll wird getrennt», «Viele Flaschen werden recycelt.» PASSO 6: para a OPINIÃO: «Ich finde, dass jeder Verantwortung übernehmen sollte.»', {
        tag: 'Frase',
        tabela: [
          { funcao: 'hábito', frase: 'Ich trenne den Müll und spare Energie.' }, { funcao: 'finalidade', frase: 'Ich recycle, um die Umwelt zu schützen.' }, { funcao: 'consequência', frase: 'Das Klima wird wärmer. Deshalb müssen wir handeln.' }, { funcao: 'hipótese', frase: 'Wenn alle weniger Auto fahren würden, wäre die Luft sauberer.' }, { funcao: 'passivo', frase: 'Viele Flaschen werden recycelt.' }, { funcao: 'opinião', frase: 'Ich finde, dass jeder Verantwortung übernehmen sollte.' },
        ],
        erros: [['Ich recycle, damit ich schütze die Umwelt.', 'Ich recycle, um die Umwelt zu schützen.', 'Mesmo sujeito: «um … zu».'], ['Wenn alle weniger Auto fahren, ist die Luft sauberer. (hipótese)', 'Wenn alle weniger Auto fahren würden, wäre die Luft sauberer.', 'Irreal: Konjunktiv II.'], ['Der Müll trennt.', 'Der Müll wird getrennt.', 'Passivo: werden + Partizip II.']],
      }),
      producao(5, 'Diga em voz alta o que você faz pelo meio ambiente e o que as pessoas deveriam fazer.'),
    ]),
    sessao('S3', 'Debate: o futuro do planeta', [
      revisao(5, 'Escreva 6 frases sobre meio ambiente, com finalidade, consequência e hipótese.'),
      gramatica(10, 'Debater um tema da sociedade', 'PASSO 1: para introduzir: «Ich möchte über … sprechen.» PASSO 2: para dar o ponto de vista: «Meiner Meinung nach …», «Ich bin der Meinung, dass …». PASSO 3: para contrapor: «Einerseits … andererseits …», «Obwohl …, …», «Trotzdem …». PASSO 4: para dar exemplo: «Zum Beispiel …». PASSO 5: para propor soluções: «Man sollte …», «Wir könnten …», «Es wäre gut, wenn …». PASSO 6: para concluir: «Zusammenfassend kann man sagen, dass …».', {
        tag: 'Frase',
        tabela: [
          { funcao: 'introduzir', frase: 'Ich möchte über das Thema Umwelt sprechen.' }, { funcao: 'ponto de vista', frase: 'Meiner Meinung nach müssen wir mehr tun.' }, { funcao: 'contrapor', frase: 'Obwohl viele recyceln, gibt es immer noch zu viel Müll.' }, { funcao: 'exemplo', frase: 'Zum Beispiel können wir öfter mit dem Rad fahren.' }, { funcao: 'solução', frase: 'Es wäre gut, wenn mehr Menschen öffentliche Verkehrsmittel benutzen würden.' }, { funcao: 'conclusão', frase: 'Zusammenfassend kann man sagen, dass jeder etwas tun kann.' },
        ],
      }),
      dialogo(10, 'Umwelt im Alltag / Meio ambiente no dia a dia', 'Dois colegas debatem hábitos sustentáveis.', [
        ['Mia', 'Ich finde, dass jeder Verantwortung für die Umwelt übernehmen sollte.', 'Acho que cada um deveria assumir a responsabilidade pelo meio ambiente.'], ['Jonas', 'Da stimme ich dir zu. Ich trenne den Müll, um die Umwelt zu schützen.', 'Concordo. Separo o lixo para proteger o meio ambiente.'], ['Mia', 'Obwohl ich recycle, produziere ich noch zu viel Müll.', 'Embora eu recicle, ainda produzo lixo demais.'],
        ['Jonas', 'Wir könnten weniger Plastik kaufen. Zum Beispiel Obst ohne Verpackung.', 'Poderíamos comprar menos plástico. Por exemplo, frutas sem embalagem.'], ['Mia', 'Und wir sollten öfter mit dem Rad fahren, statt das Auto zu nehmen.', 'E deveríamos andar mais de bicicleta, em vez de pegar o carro.'], ['Jonas', 'Wenn alle weniger Auto fahren würden, wäre die Luft sauberer.', 'Se todos andassem menos de carro, o ar seria mais limpo.'],
        ['Mia', 'Einerseits kostet das Zeit, andererseits tut es der Gesundheit gut.', 'Por um lado custa tempo, por outro faz bem à saúde.'], ['Jonas', 'Zusammenfassend: Jeder kann mit kleinen Schritten etwas bewirken.', 'Resumindo: cada um pode fazer a diferença com pequenos passos.'],
      ]),
      producao(5, 'Debata em voz alta um tema de meio ambiente em 8 frases, com opinião, contraste, exemplo, solução e conclusão.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 80 palavras sobre um tema de sociedade ou meio ambiente.'),
      exercicios(20, [
        lacuna('Ich informiere mich ___ das Wetter.', ['über', 'von', 'für'], 'über', 'sich informieren über + Akk.'), lacuna('Ich informiere mich ___ Internet.', ['im', 'in', 'am'], 'im', 'in dem → im.'), lacuna('Ich recycle, ___ die Umwelt zu schützen.', ['um', 'damit', 'weil'], 'um', 'Mesmo sujeito: um … zu.'),
        lacuna('Wenn alle weniger Auto fahren ___, wäre die Luft sauberer.', ['würden', 'werden', 'wurden'], 'würden', 'Konjunktiv II.'), lacuna('Der Müll ___ getrennt. (werden)', ['wird', 'wurde', 'ist'], 'wird', 'Passivo do presente.'), lacuna('Es ___ gut, wenn mehr Menschen öffentliche Verkehrsmittel benutzen würden.', ['wäre', 'ist', 'war'], 'wäre', 'Konjunktiv II.'),
        mc('«Der Klimawandel» é:', ['a mudança climática', 'o clima da região', 'o tempo de hoje'], 'a mudança climática', 'Mudança do clima.'), mc('«Nachhaltig» significa:', ['sustentável', 'rápido', 'barulhento'], 'sustentável', 'Que dura.'), mc('Para dizer «em vez de fazer», usa-se:', ['statt … zu', 'um … zu', 'ohne … zu'], 'statt … zu', 'Statt das Auto zu nehmen.'),
        ordem('Ordene: «Eu separo o lixo para proteger o meio ambiente.»', ['Ich', 'trenne', 'den', 'Müll', 'um', 'die', 'Umwelt', 'zu', 'schützen'], 'Ich trenne den Müll, um die Umwelt zu schützen.', 'um … zu.'), ouvir('Jeder kann mit kleinen Schritten etwas bewirken', ['Jeder kann mit kleinen Schritten etwas bewirken', 'Niemand kann etwas bewirken', 'Alle machen kleine Schritte'], 'Jeder kann mit kleinen Schritten etwas bewirken', 'Conclusão.'), ditado('Wenn alle weniger Auto fahren würden, wäre die Luft sauberer', 'Hipótese irreal.'),
        livre('Escreva 5 frases sobre meio ambiente: um hábito, uma finalidade com «um … zu», uma consequência, uma hipótese com Konjunktiv II e uma conclusão.', 'Ich trenne den Müll. Ich recycle, um die Umwelt zu schützen. Das Klima wird wärmer. Deshalb müssen wir handeln. Zusammenfassend kann man sagen, dass jeder etwas tun kann.'),
      ]),
      producao(5, 'Grave-se debatendo um tema da sociedade com opinião, contraste, exemplo e conclusão.'),
    ]),
  ],
});
