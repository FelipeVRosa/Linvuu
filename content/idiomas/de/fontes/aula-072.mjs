import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 72, titulo: 'Revisão e simulado do B1', nivel: 'b1',
  objetivo: 'Rever todo o B1 em um mapa, treinar leitura, escuta, escrita e fala no formato de provas de B1, corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou o B1 do alemão: 72 aulas, 144 horas. Repita o simulado até acertar quase tudo e, antes de uma prova oficial, procure um professor nativo.',
  sessoes: [
    sessao('S1', 'O mapa do B1', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 47 a 71 que você acha difíceis.'),
      gramatica(15, 'O B1 inteiro em uma tabela', 'Esta tabela resume as aulas 47 a 71. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Orações relativas', regra: 'der/die/das/die; den; dem/der/denen; dessen/deren; preposição antes do relativo; «was» depois de alles, nichts, etwas, superlativo.', aula: '47 a 49' },
          { tema: 'Passivo', regra: 'werden + Partizip II; wurde + Partizip II; ist … worden; com modais; sem sujeito; estado: sein + Partizip II; man, sich lassen.', aula: '50, 51' },
          { tema: 'Plusquamperfekt', regra: 'hatte/war + Partizip II; nachdem (Plusquamperfekt) e bevor.', aula: '52' },
          { tema: 'Conjunções de tempo', regra: 'als (fato único) × wenn (repetição, presente, futuro); während, seitdem, bis, sobald, solange.', aula: '53' },
          { tema: 'Konjunktiv II', regra: 'hätte, wäre, würde + infinitivo; wenn + Konjunktiv II; passado: hätte/wäre + Partizip II; hätte … können/sollen.', aula: '54, 55' },
          { tema: 'Infinitivo com zu', regra: 'zu antes do infinitivo; anzurufen; sem zu depois de modais, werden, lassen, gehen, bleiben.', aula: '56' },
          { tema: 'Finalidade e contraste', regra: 'um … zu (mesmo sujeito), damit (sujeitos diferentes), ohne … zu, (an)statt … zu.', aula: '57' },
          { tema: 'Conectores', regra: 'obwohl (verbo no fim) × trotzdem (verbo na 2ª posição); deshalb, deswegen, außerdem, sonst; pares: entweder … oder, weder … noch, sowohl … als auch, einerseits … andererseits, je … desto.', aula: '58, 59' },
          { tema: 'Verbos, adjetivos e substantivos com preposição', regra: 'warten auf, denken an, stolz auf, Angst vor; da(r)- e wo(r)-: darauf, worauf; darauf, dass.', aula: '60 a 62' },
          { tema: 'Particípios e substantivados', regra: 'das gekochte Ei, die spielenden Kinder; das Gute, etwas Neues, der Deutsche.', aula: '63, 64' },
          { tema: 'Futur II e partículas modais', regra: 'werden + Partizip II + haben/sein; doch, mal, ja, eben, halt, denn, eigentlich, wohl, schon, aber, ruhig.', aula: '65' },
          { tema: 'Discurso indireto', regra: 'dass, ob, W-Fragen, sollen; Konjunktiv I (er sei, er habe).', aula: '66' },
          { tema: 'Formação de palavras', regra: 'compostos (gênero da última palavra), prefixos inseparáveis e separáveis, sufixos -ung, -keit, -heit, -schaft, -lich, -los.', aula: '67' },
          { tema: 'Opinião, trabalho, mídia, apresentação', regra: 'meiner Meinung nach; Da stimme ich dir zu; Lebenslauf; Umwelt; Die Grafik zeigt …', aula: '68 a 71' },
        ],
      }),
      producao(10, 'Fale 2 minutos em alemão sobre um tema à sua escolha: abertura, opinião com dois argumentos, um exemplo, uma hipótese (Konjunktiv II) e a conclusão.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato B1, original)', [
      revisao(5, 'Releia a carta e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Ein Leserbrief / Uma carta de leitor', 'Sehr geehrte Redaktion, in Ihrer Zeitung wurde letzte Woche berichtet, dass die Stadt weniger Geld für Fahrradwege ausgeben will. Ich bin der Meinung, dass das ein Fehler wäre. Erstens fahren immer mehr Menschen mit dem Rad zur Arbeit, um Zeit und Geld zu sparen. Zweitens ist das Rad gut für die Umwelt und für die Gesundheit. Obwohl Autos in der Stadt wichtig sind, brauchen wir sichere Wege für Radfahrer. Wenn die Stadt mehr investieren würde, könnten mehr Menschen auf das Auto verzichten. Mit freundlichen Grüßen, Maria Becker',
        'Prezada redação, no seu jornal foi noticiado na semana passada que a cidade quer gastar menos dinheiro com ciclovias. Sou da opinião de que isso seria um erro. Primeiro, cada vez mais pessoas vão de bicicleta ao trabalho para economizar tempo e dinheiro. Segundo, a bicicleta faz bem ao meio ambiente e à saúde. Embora os carros sejam importantes na cidade, precisamos de caminhos seguros para ciclistas. Se a cidade investisse mais, mais pessoas poderiam abrir mão do carro. Atenciosamente, Maria Becker',
        [['Worüber wurde berichtet?', 'Dass die Stadt weniger Geld für Fahrradwege ausgeben will'], ['Was ist die Meinung der Autorin?', 'Weniger Geld für Fahrradwege wäre ein Fehler'], ['Welche zwei Argumente nennt sie?', 'Zeit und Geld sparen; Umwelt und Gesundheit'], ['Was würde passieren, wenn die Stadt mehr investieren würde?', 'Mehr Menschen könnten auf das Auto verzichten']]),
      dialogo(10, 'Am Telefon / Ao telefone', 'Um cliente remarca uma consulta.', [
        ['Tom', 'Guten Tag, hier ist Tom Weber. Ich möchte meinen Termin am Dienstag verschieben.', 'Bom dia, aqui é Tom Weber. Gostaria de remarcar a minha consulta de terça.'], ['Sekretärin', 'Das ist kein Problem. Wann würde es Ihnen passen?', 'Não há problema. Quando seria bom para o senhor?'], ['Tom', 'Wenn möglich, am Donnerstag. Am Dienstag muss ich leider zu einer wichtigen Besprechung.', 'Se possível, na quinta. Na terça preciso ir a uma reunião importante.'],
        ['Sekretärin', 'Am Donnerstag um zehn Uhr hätten wir noch einen Termin frei.', 'Na quinta às dez ainda teríamos um horário livre.'], ['Tom', 'Das passt mir sehr gut. Könnten Sie mir bitte eine Bestätigung schicken?', 'Serve muito bem. A senhora poderia me enviar uma confirmação, por favor?'], ['Sekretärin', 'Selbstverständlich. Die E-Mail wird noch heute verschickt.', 'Naturalmente. O e-mail será enviado ainda hoje.'],
      ]),
      producao(5, 'Responda em voz alta: o que a autora da carta defende, quais são os seus argumentos e o que você pensa sobre o tema.'),
    ]),
    sessao('S3', 'Os erros mais comuns do B1 e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete no B1 e a forma certa.'),
      gramatica(15, 'Os 14 erros mais comuns do B1', 'Leia cada par em voz alta: primeiro o errado, depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['Obwohl es regnet, ich gehe spazieren.', 'Obwohl es regnet, gehe ich spazieren.', 'Depois da subordinada, a principal começa pelo verbo.'], ['Es regnet. Trotzdem ich gehe spazieren.', 'Es regnet. Trotzdem gehe ich spazieren.', 'Depois de «trotzdem», o verbo na 2ª posição.'], ['Wenn ich Zeit gehabt hätte, hätte ich bin gekommen.', 'Wenn ich Zeit gehabt hätte, wäre ich gekommen.', '«kommen» usa «sein».'], ['Ich habe vergessen, dich zu anrufen.', 'Ich habe vergessen, dich anzurufen.', '«zu» entre prefixo e verbo.'],
          ['Ich lerne Deutsch, um ich in Berlin zu arbeiten.', 'Ich lerne Deutsch, um in Berlin zu arbeiten.', 'No «um … zu», não se repete o sujeito.'], ['Ich warte für den Bus.', 'Ich warte auf den Bus.', 'Preposição fixa.'], ['Die Frau, der dort steht, ist meine Chefin.', 'Die Frau, die dort steht, ist meine Chefin.', 'Relativo concorda em gênero.'], ['Das Auto wird reparieren.', 'Das Auto wird repariert.', 'Passivo: Partizip II.'],
          ['Das Auto ist repariert geworden.', 'Das Auto ist repariert worden.', 'Passivo: «worden».'], ['Alles, das ich weiß, habe ich gelernt.', 'Alles, was ich weiß, habe ich gelernt.', 'Depois de «alles»: «was».'], ['Als ich Zeit habe, rufe ich an.', 'Wenn ich Zeit habe, rufe ich an.', 'Presente: «wenn».'], ['Er sagt, dass ich bin müde.', 'Er sagt, dass er müde ist.', 'Pronome e verbo no fim.'],
          ['Ich habe etwas neues gehört.', 'Ich habe etwas Neues gehört.', 'Substantivado: maiúscula.'], ['Ich bin stolz von meiner Familie.', 'Ich bin stolz auf meine Familie.', 'Preposição fixa.'],
        ],
      }),
      producao(10, 'Escreva um texto de opinião de cerca de 100 palavras (tema à escolha) com introdução, dois argumentos, um exemplo, um contra-argumento e conclusão. Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do B1', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('Wenn ich mehr Zeit hätte, würde ich reisen', ['Wenn ich mehr Zeit hätte, würde ich reisen', 'Wenn ich Zeit habe, reise ich', 'Ich habe keine Zeit zum Reisen'], 'Wenn ich mehr Zeit hätte, würde ich reisen', 'Hören: irreal no presente.'), ouvir('Das Rathaus wurde 1450 gebaut', ['Das Rathaus wurde 1450 gebaut', 'Das Rathaus wird 1450 gebaut', 'Man baut das Rathaus'], 'Das Rathaus wurde 1450 gebaut', 'Hören: passivo no passado.'),
        ouvir('Ich freue mich darauf, dich zu sehen', ['Ich freue mich darauf, dich zu sehen', 'Ich freue mich über dich', 'Ich sehe dich darauf'], 'Ich freue mich darauf, dich zu sehen', 'Hören: darauf + zu.'), ditado('Zusammenfassend kann man sagen, dass es sinnvoll ist', 'Schreiben: conclusão.'),
        mc('Leia: «Das Geschäft bleibt wegen Renovierung bis zum 15. Mai geschlossen.» Isso significa:', ['a loja está fechada para reforma até 15 de maio', 'a loja abre em 15 de maio sem reforma', 'a loja fecha em 15 de maio'], 'a loja está fechada para reforma até 15 de maio', 'Lesen: aviso.'),
        mc('Leia: «Mitarbeiter gesucht: Wir bieten flexible Arbeitszeiten und suchen Erfahrung im Verkauf.» O que a empresa procura?', ['funcionário com experiência em vendas', 'cliente para vendas', 'estagiário sem experiência'], 'funcionário com experiência em vendas', 'Lesen: anúncio.'), mc('Leia: «Je mehr man übt, desto besser wird man.» A ideia é:', ['praticar mais melhora o resultado', 'praticar menos melhora', 'praticar não importa'], 'praticar mais melhora o resultado', 'Lesen: je … desto.'),
        mc('Leia: «Er sagte, er sei krank.» Isso é:', ['discurso indireto (Konjunktiv I)', 'uma pergunta', 'uma ordem'], 'discurso indireto (Konjunktiv I)', 'Lesen: Konjunktiv I.'),
        lacuna('Die Frau, ___ ich kenne, arbeitet hier.', ['die', 'der', 'den'], 'die', 'Relativo acusativo feminino.'), lacuna('Ich warte ___ den Bus.', ['auf', 'für', 'an'], 'auf', 'warten auf.'), lacuna('Wenn ich Zeit ___, würde ich reisen.', ['hätte', 'habe', 'hatte'], 'hätte', 'Konjunktiv II.'),
        lacuna('Ich lerne Deutsch, ___ in Berlin zu arbeiten.', ['um', 'damit', 'weil'], 'um', 'Mesmo sujeito.'), lacuna('Das Auto ___ repariert. (passivo, presente)', ['wird', 'wurde', 'ist'], 'wird', 'Passivo.'),
        ordem('Ordene: «Se eu soubesse, não teria vindo.»', ['Wenn', 'ich', 'das', 'gewusst', 'hätte', 'wäre', 'ich', 'nicht', 'gekommen'], 'Wenn ich das gewusst hätte, wäre ich nicht gekommen.', 'Irreal do passado.'), ordem('Ordene: «Embora chova, vou passear.»', ['Obwohl', 'es', 'regnet', 'gehe', 'ich', 'spazieren'], 'Obwohl es regnet, gehe ich spazieren.', 'obwohl + verbo no fim.'),
        livre('Schreiben: escreva 5 frases de um texto de opinião sobre um tema à sua escolha, com opinião, argumento, exemplo, uma frase com Konjunktiv II e conclusão.', 'Meiner Meinung nach ist Homeoffice praktisch. Erstens spart man Zeit. Zum Beispiel muss man nicht pendeln. Wenn alle zu Hause arbeiten würden, wären die Straßen leerer. Zusammenfassend kann man sagen, dass es sinnvoll ist.'),
      ]),
      producao(5, 'Sprechen, em 3 partes: (1) faça uma apresentação de 1 minuto sobre um tema; (2) responda a 2 perguntas e dê uma opinião com um argumento; (3) planeje algo junto com um parceiro, com propostas e concordâncias.'),
    ]),
  ],
});
