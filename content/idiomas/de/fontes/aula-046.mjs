import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 46, titulo: 'Revisão e simulado do A2', nivel: 'a2',
  objetivo: 'Rever todo o A2 em um mapa, treinar leitura, escuta, escrita e fala no formato de provas de A2, corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou o A2 do alemão: 46 aulas. Repita o simulado até acertar quase tudo antes de seguir para o B1.',
  sessoes: [
    sessao('S1', 'O mapa do A2', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 21 a 45 que você acha difíceis.'),
      gramatica(15, 'O A2 inteiro em uma tabela', 'Esta tabela resume as aulas 21 a 45. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Perfekt', regra: 'haben/sein + Partizip II no fim; sem ge-: -ieren, be-, er-, ver-, ent-; separáveis: ge- no meio; sein: movimento e mudança de estado.', aula: '21 a 23' },
          { tema: 'Präteritum', regra: 'war, hatte, konnte, musste, wollte, durfte, sollte; formas dos textos (ging, kam, sah…).', aula: '24' },
          { tema: 'Casos e dativo', regra: 'dem, der, dem, den+n; mir, dir, ihm…; verbos com dativo; dois objetos; aus, bei, mit, nach, seit, von, zu.', aula: '25 a 28' },
          { tema: 'Acusativo e duas vias', regra: 'durch, für, gegen, ohne, um; an, auf, hinter, in, neben, über, unter, vor, zwischen: Wo? dativo, Wohin? acusativo.', aula: '29' },
          { tema: 'Verbos de posição, Declinação-N', regra: 'stehen/stellen, liegen/legen, sitzen/setzen, hängen; der Student → den Studenten.', aula: '30' },
          { tema: 'Adjetivos', regra: 'der große Mann, ein großer Mann, kalter Kaffee: o caso aparece uma vez, no artigo ou no adjetivo.', aula: '32 a 34' },
          { tema: 'Comparação', regra: '-er … als, so … wie, am -sten, der -ste; gut/besser/am besten; gern/lieber/am liebsten.', aula: '35' },
          { tema: 'Subordinadas', regra: 'weil, dass, wenn, ob: verbo conjugado no fim; vírgula; inversão quando a subordinada abre a frase.', aula: '36, 37' },
          { tema: 'Perguntas indiretas', regra: 'Ich weiß nicht, ob er kommt. Können Sie mir sagen, wann der Zug abfährt?', aula: '37' },
          { tema: 'Reflexivos', regra: 'mich, dich, sich, uns, euch, sich; sich freuen auf; Ich wasche mir die Hände.', aula: '38' },
          { tema: 'Konjunktiv II básico', regra: 'würde + infinitivo; hätte gern; wäre; könnte; sollte; Wie wäre es mit …?', aula: '39' },
          { tema: 'Futur I', regra: 'werden + infinitivo no fim; presente com marcador de tempo; «Er wird wohl krank sein».', aula: '40' },
          { tema: 'Genitivo', regra: 'des Mannes, der Frau; Annas Auto; wegen, während, trotz + genitivo.', aula: '41' },
          { tema: 'Perguntas e indefinidos', regra: 'welcher, was für ein, wer/wen/wem/wessen; man, jemand, niemand, etwas, nichts, alles.', aula: '42' },
          { tema: 'Saúde', regra: 'Der Kopf tut mir weh. Ich habe Fieber. Nehmen Sie die Tabletten dreimal täglich.', aula: '43' },
          { tema: 'E-mails e formulários', regra: 'Sehr geehrte Damen und Herren … Mit freundlichen Grüßen; Liebe … Liebe Grüße.', aula: '44' },
          { tema: 'Moradia e orientação', regra: 'Kaltmiete, Warmmiete; Gehen Sie geradeaus bis zur Ampel; Der Vorteil ist, dass …', aula: '45' },
        ],
      }),
      producao(10, 'Conte em 10 frases, em voz alta, um dia importante da sua vida: o que aconteceu (Perfekt e Präteritum), com quem, por quê (weil), o que você achou e o que fará depois (werden).'),
    ]),
    sessao('S2', 'Leitura e escuta (formato A2, original)', [
      revisao(5, 'Releia o e-mail e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Eine E-Mail an eine Sprachschule / Um e-mail a uma escola de idiomas', 'Sehr geehrte Damen und Herren, ich heiße Tom Weber und wohne seit einem Jahr in München. Ich möchte mich für den Deutschkurs im Oktober anmelden, weil ich bald in Deutschland arbeiten werde. Könnten Sie mir bitte sagen, wann der Kurs beginnt und was er kostet? Ich würde gern abends lernen, weil ich tagsüber arbeiten muss. Vielen Dank für Ihre Antwort. Mit freundlichen Grüßen, Tom Weber',
        'Prezados senhores, meu nome é Tom Weber e moro há um ano em Munique. Gostaria de me inscrever no curso de alemão de outubro, porque logo vou trabalhar na Alemanha. Os senhores poderiam me dizer quando o curso começa e quanto custa? Gostaria de estudar à noite, porque preciso trabalhar durante o dia. Muito obrigado pela resposta. Atenciosamente, Tom Weber',
        [['Seit wann wohnt Tom in München?', 'Seit einem Jahr'], ['Warum möchte er den Kurs machen?', 'Weil er bald in Deutschland arbeiten wird'], ['Wann möchte er lernen?', 'Abends'], ['Was möchte er wissen?', 'Wann der Kurs beginnt und was er kostet']]),
      dialogo(10, 'Im Büro / No escritório', 'Dois colegas conversam sobre o fim de semana.', [
        ['Lea', 'Hallo Paul! Wie war dein Wochenende?', 'Oi, Paul! Como foi o seu fim de semana?'], ['Paul', 'Sehr schön! Ich bin mit meiner Familie nach Hamburg gefahren.', 'Muito bom! Fui com a minha família a Hamburgo.'], ['Lea', 'Seid ihr mit dem Zug gefahren?', 'Vocês foram de trem?'],
        ['Paul', 'Ja, und wir haben meine Tante besucht. Sie wohnt seit zwei Jahren dort.', 'Sim, e visitamos a minha tia. Ela mora lá há dois anos.'], ['Lea', 'Und das Wetter?', 'E o tempo?'], ['Paul', 'Trotz des Regens haben wir einen langen Spaziergang gemacht.', 'Apesar da chuva fizemos uma longa caminhada.'],
      ]),
      producao(5, 'Responda em voz alta: onde Paul esteve, como foi, quem visitou e como estava o tempo.'),
    ]),
    sessao('S3', 'Os erros mais comuns do A2 e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete no A2 e a forma certa.'),
      gramatica(15, 'Os 14 erros mais comuns do A2 (parte 2)', 'Leia cada par em voz alta: primeiro o errado, depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Movimento: «sein».'], ['Ich bleibe zu Hause, weil ich bin krank.', 'Ich bleibe zu Hause, weil ich krank bin.', 'Verbo no fim depois de «weil».'], ['Wenn es regnet, ich bleibe zu Hause.', 'Wenn es regnet, bleibe ich zu Hause.', 'Depois da subordinada, o verbo.'], ['Ich weiß nicht, ob kommt er.', 'Ich weiß nicht, ob er kommt.', 'Pergunta indireta: verbo no fim.'], ['Ich helfe dich.', 'Ich helfe dir.', '«helfen» pede dativo.'],
          ['Ich gebe den Ball ihm.', 'Ich gebe ihm den Ball.', 'Pronome antes do substantivo.'], ['Ich wasche mich die Hände.', 'Ich wasche mir die Hände.', 'Objeto direto: reflexivo no dativo.'], ['Das Buch liegt auf den Tisch.', 'Das Buch liegt auf dem Tisch.', 'Wo? dativo.'], ['Ich stehe die Vase auf den Tisch.', 'Ich stelle die Vase auf den Tisch.', 'Movimento: stellen.'], ['Ich habe einen neue Mantel.', 'Ich habe einen neuen Mantel.', 'Adjetivo no acusativo masculino.'],
          ['Er ist mehr groß als ich.', 'Er ist größer als ich.', 'Comparativo: -er.'], ['Das ist das Auto mein Vater.', 'Das ist das Auto meines Vaters.', 'Posse: genitivo.'], ['Ich würde gehen gern ins Kino.', 'Ich würde gern ins Kino gehen.', 'Infinitivo no fim.'], ['Ich habe Kopf Schmerzen.', 'Ich habe Kopfschmerzen.', 'Palavra composta.'],
        ],
      }),
      producao(10, 'Escreva um e-mail de cerca de 60 palavras a uma escola ou empresa: apresente-se, peça informações, dê um motivo com «weil» e agradeça. Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do A2', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('Ich werde nächstes Jahr in Berlin arbeiten', ['Ich werde nächstes Jahr in Berlin arbeiten', 'Ich habe letztes Jahr in Berlin gearbeitet', 'Ich arbeite in Berlin'], 'Ich werde nächstes Jahr in Berlin arbeiten', 'Hören: Futur I.'), ouvir('Ich weiß nicht, ob er kommt', ['Ich weiß nicht, ob er kommt', 'Ich weiß, dass er kommt', 'Ich weiß nicht, wo er wohnt'], 'Ich weiß nicht, ob er kommt', 'Hören: pergunta indireta.'),
        ouvir('Könnten Sie mir bitte helfen?', ['Könnten Sie mir bitte helfen?', 'Können Sie mich bitte hören?', 'Könnten Sie bitte kommen?'], 'Könnten Sie mir bitte helfen?', 'Hören: pedido educado.'), ditado('Wegen des Wetters bleiben wir zu Hause', 'Schreiben: genitivo.'),
        mc('Leia: «Nehmen Sie die Tabletten dreimal täglich nach dem Essen.» O que a pessoa deve fazer?', ['Tomar os comprimidos três vezes ao dia, depois das refeições', 'Comer três vezes ao dia', 'Tomar um comprimido por semana'], 'Tomar os comprimidos três vezes ao dia, depois das refeições', 'Lesen: instrução do médico.'),
        mc('Leia: «Gehen Sie geradeaus bis zur Ampel und dann links.» A pessoa deve:', ['seguir em frente até o semáforo e virar à esquerda', 'virar à esquerda e seguir em frente', 'parar no semáforo'], 'seguir em frente até o semáforo e virar à esquerda', 'Lesen: orientação.'), mc('Leia: «Die Wohnung hat 60 m², 650 € Warmmiete, Aufzug, ab sofort frei.» O que é verdade?', ['Há elevador e está livre já', 'Não há elevador', 'O aluguel não inclui despesas'], 'Há elevador e está livre já', 'Lesen: anúncio.'),
        lacuna('Ich ___ gestern nach Berlin gefahren.', ['bin', 'habe', 'hat'], 'bin', 'fahren: sein.'), lacuna('Ich kann nicht kommen, ___ ich arbeiten muss.', ['weil', 'dass', 'ob'], 'weil', 'Motivo.'), lacuna('Ich gebe ___ Frau ein Buch. (à)', ['der', 'die', 'dem'], 'der', 'Feminino dativo.'),
        lacuna('Ich fahre mit dem ___ Auto. (novo)', ['neuen', 'neue', 'neues'], 'neuen', 'Dativo: -en.'), lacuna('Das ist das Auto ___ Vaters. (do meu)', ['meines', 'meinem', 'meinen'], 'meines', 'Genitivo masculino.'), lacuna('Er ist ___ als ich. (mais velho)', ['älter', 'alter', 'mehr alt'], 'älter', 'Comparativo com trema.'),
        ordem('Ordene: «Eu gostaria de um café.»', ['Ich', 'hätte', 'gern', 'einen', 'Kaffee'], 'Ich hätte gern einen Kaffee.', 'Konjunktiv II.'), ordem('Ordene: «Se chover, fico em casa.»', ['Wenn', 'es', 'regnet', 'bleibe', 'ich', 'zu', 'Hause'], 'Wenn es regnet, bleibe ich zu Hause.', 'Inversão na principal.'),
        livre('Schreiben: escreva 5 frases sobre o seu último fim de semana (Perfekt), com «weil» e uma frase no futuro.', 'Ich bin nach Berlin gefahren. Ich habe meine Tante besucht. Wir haben zusammen gekocht, weil sie gern isst. Es hat geregnet. Nächstes Wochenende werde ich zu Hause bleiben.'),
      ]),
      producao(5, 'Sprechen, em 3 partes: (1) conte um acontecimento do passado; (2) faça e responda perguntas a partir de palavras-chave (Wohnung, Arzt, Reise, Arbeit, Wetter); (3) peça uma informação com educação («Können Sie mir sagen, wann …? Ich hätte gern …»).'),
    ]),
  ],
});
