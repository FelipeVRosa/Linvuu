import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 31, titulo: 'Revisão e simulado do A2 (parte 1)', nivel: 'a2',
  objetivo: 'Rever o Perfekt, o Präteritum, o dativo, o acusativo e as preposições de lugar em um mapa, treinar leitura, escuta e escrita no formato de provas de A2, corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou a primeira metade do A2. Repita o simulado até acertar quase tudo antes de seguir para os adjetivos.',
  sessoes: [
    sessao('S1', 'O mapa do A2 (parte 1)', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 21 a 30 que você acha difíceis.'),
      gramatica(15, 'As aulas 21 a 30 em uma tabela', 'Esta tabela resume a primeira metade do A2. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Perfekt regular', regra: 'haben + ge-…-t no fim: Ich habe gemacht. Sem ge-: -ieren, be-, er-, ver-, ent-. Separáveis: ge- no meio (eingekauft).', aula: '21' },
          { tema: 'Particípios irregulares', regra: 'Grupo 1 (mesma vogal): geschlafen. Grupo 2 (muda): getrunken. Mistos: gebracht, gewusst.', aula: '22' },
          { tema: 'haben ou sein', regra: 'sein: movimento, mudança de estado, sein e bleiben (Ich bin gefahren). O resto: haben.', aula: '23' },
          { tema: 'schon, noch nicht, noch nie', regra: 'Hast du schon gegessen? — Nein, noch nicht. Ich habe noch nie Sushi gegessen.', aula: '23' },
          { tema: 'Präteritum', regra: 'war, hatte, konnte, musste, wollte, durfte, sollte; formas dos textos (ging, kam, sah…).', aula: '24' },
          { tema: 'Os quatro casos', regra: 'Nominativ (wer?), Akkusativ (wen?), Dativ (wem?), Genitiv (wessen?).', aula: '25' },
          { tema: 'Dativo: artigos e pronomes', regra: 'dem, der, dem, den+n; mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.', aula: '26' },
          { tema: 'Dois objetos', regra: 'Dois substantivos: dativo antes. Pronome antes de substantivo. Dois pronomes: acusativo antes.', aula: '26' },
          { tema: 'Verbos com dativo', regra: 'helfen, danken, gehören, gefallen, schmecken, passen, fehlen, antworten.', aula: '27' },
          { tema: 'Sensações com dativo', regra: 'Mir ist kalt. Wie geht es dir? Es tut mir leid.', aula: '27' },
          { tema: 'Preposições do dativo', regra: 'aus, bei, mit, nach, seit, von, zu (+ gegenüber); beim, vom, zum, zur.', aula: '28' },
          { tema: 'Preposições do acusativo', regra: 'durch, für, gegen, ohne, um.', aula: '29' },
          { tema: 'Duas vias', regra: 'an, auf, hinter, in, neben, über, unter, vor, zwischen: Wo? dativo, Wohin? acusativo.', aula: '29' },
          { tema: 'Verbos de posição', regra: 'stehen/stellen, liegen/legen, sitzen/setzen, hängen.', aula: '30' },
          { tema: 'Declinação-N', regra: 'der Student → den Studenten (todos os casos menos o nominativo).', aula: '30' },
        ],
      }),
      producao(10, 'Conte em voz alta, em 10 frases, a sua última semana: o que você fez (Perfekt), como estava (Präteritum), a quem deu algo (dativo) e onde as coisas estavam (Wo? × Wohin?).'),
    ]),
    sessao('S2', 'Leitura e escuta (formato A2, original)', [
      revisao(5, 'Releia a mensagem e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Eine Nachricht / Uma mensagem', 'Hallo Lea, wie geht es dir? Ich war am Wochenende in Hamburg. Ich bin mit dem Zug gefahren und habe meine Tante besucht. Sie wohnt seit zwei Jahren dort. Wir haben zusammen gekocht und viel gesprochen. Am Sonntag habe ich ihr ein Buch geschenkt. Es hat ihr gut gefallen. Ich komme am Freitag mit dem Bus zu dir. Kannst du mich am Bahnhof abholen? Viele Grüße, Mia',
        'Oi, Lea, como vai? No fim de semana estive em Hamburgo. Fui de trem e visitei a minha tia. Ela mora lá há dois anos. Cozinhamos juntas e conversamos bastante. No domingo dei um livro de presente a ela. Ela gostou muito. Na sexta-feira vou de ônibus até você. Você pode me buscar na estação? Um abraço, Mia',
        [['Wo war Mia am Wochenende?', 'In Hamburg'], ['Wie ist sie gefahren?', 'Mit dem Zug'], ['Seit wann wohnt die Tante dort?', 'Seit zwei Jahren'], ['Was hat Mia ihrer Tante geschenkt?', 'Ein Buch'], ['Was soll Lea am Freitag tun?', 'Mia am Bahnhof abholen']]),
      dialogo(10, 'Beim Arzt / No médico', 'Uma paciente fala com o médico.', [
        ['Ärztin', 'Guten Tag! Was fehlt Ihnen?', 'Bom dia! O que a senhora tem?'], ['Anna', 'Mir ist schlecht, und der Kopf tut mir weh.', 'Estou enjoada e a minha cabeça dói.'], ['Ärztin', 'Seit wann haben Sie das?', 'Desde quando a senhora tem isso?'],
        ['Anna', 'Seit gestern Abend. Ich habe nicht gut geschlafen.', 'Desde ontem à noite. Não dormi bem.'], ['Ärztin', 'Haben Sie Fieber gehabt?', 'A senhora teve febre?'], ['Anna', 'Ja, ich hatte ein bisschen Fieber.', 'Sim, tive um pouco de febre.'],
      ]),
      producao(5, 'Responda em voz alta, como se fosse você: onde você esteve no último fim de semana, como foi e a quem você deu ou mostrou algo.'),
    ]),
    sessao('S3', 'Os erros mais comuns da primeira metade do A2', [
      revisao(5, 'Escreva 3 erros que você ainda comete no Perfekt e no dativo, e a forma certa.'),
      gramatica(15, 'Os 14 erros mais comuns do A2 (parte 1)', 'Leia cada par em voz alta: primeiro o errado (para reconhecer o som estranho), depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Movimento: «sein».'], ['Ich habe gegessen Pasta.', 'Ich habe Pasta gegessen.', 'O particípio vai para o fim.'], ['Ich habe gestudiert.', 'Ich habe studiert.', '-ieren: sem «ge-».'], ['Ich habe eingekaufen.', 'Ich habe eingekauft.', 'Separável regular: -t.'], ['Ich bin müde gewesen.', 'Ich war müde.', '«sein» usa o Präteritum na conversa.'],
          ['Ich helfe dich.', 'Ich helfe dir.', '«helfen» pede dativo.'], ['Das Kleid gefällt ich.', 'Das Kleid gefällt mir.', 'Quem gosta vai para o dativo.'], ['Ich gebe den Mann das Buch.', 'Ich gebe dem Mann das Buch.', 'Quem recebe: dativo.'], ['Ich gebe den Ball ihm.', 'Ich gebe ihm den Ball.', 'Pronome antes do substantivo.'], ['Ich fahre mit der Bus.', 'Ich fahre mit dem Bus.', 'mit + dativo.'],
          ['Ich wohne seit drei Jahre hier.', 'Ich wohne seit drei Jahren hier.', 'Dativo plural: -n.'], ['Das Buch liegt auf den Tisch.', 'Das Buch liegt auf dem Tisch.', 'Wo? dativo.'], ['Ich lege das Buch auf dem Tisch.', 'Ich lege das Buch auf den Tisch.', 'Wohin? acusativo.'], ['Ich kenne den Student.', 'Ich kenne den Studenten.', 'Declinação-N.'],
        ],
      }),
      producao(10, 'Escreva um e-mail de cerca de 50 palavras a um amigo, contando o fim de semana (Perfekt), como você estava (Präteritum) e a quem você ajudou ou deu algo. Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do A2 (parte 1)', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('Ich bin letztes Jahr nach Berlin geflogen', ['Ich bin letztes Jahr nach Berlin geflogen', 'Ich habe letztes Jahr Berlin gesehen', 'Ich fliege nächstes Jahr nach Berlin'], 'Ich bin letztes Jahr nach Berlin geflogen', 'Hören: Perfekt com «sein».'), ouvir('Ich wollte kommen, aber ich musste arbeiten', ['Ich wollte kommen, aber ich musste arbeiten', 'Ich will kommen, aber ich muss arbeiten', 'Ich habe gearbeitet'], 'Ich wollte kommen, aber ich musste arbeiten', 'Hören: Präteritum dos modais.'),
        ouvir('Das Buch gehört mir', ['Das Buch gehört mir', 'Das Buch gehört mich', 'Das Buch gehört ihm'], 'Das Buch gehört mir', 'Hören: dativo.'), ditado('Ich habe meiner Mutter ein Buch geschenkt', 'Schreiben: dativo + Perfekt.'),
        mc('Leia: «Ich habe gestern lange gearbeitet und bin dann nach Hause gefahren.» O que a pessoa fez?', ['Trabalhou muito e foi para casa', 'Ficou em casa o dia todo', 'Viajou para outra cidade'], 'Trabalhou muito e foi para casa', 'Lesen: Perfekt.'),
        mc('Leia: «Die Apotheke ist gegenüber dem Bahnhof, neben der Bank.» Onde fica a farmácia?', ['Em frente à estação, ao lado do banco', 'Atrás da estação', 'Dentro do banco'], 'Em frente à estação, ao lado do banco', 'Lesen: preposições de lugar.'), mc('Leia: «Ich wohne seit drei Jahren in Wien.» A pessoa:', ['mora em Viena há três anos', 'morou em Viena por três anos', 'vai morar em Viena'], 'mora em Viena há três anos', 'Lesen: «seit» + presente.'),
        lacuna('Ich ___ gestern Fußball gespielt.', ['habe', 'bin', 'hat'], 'habe', 'spielen: haben.'), lacuna('Er ___ nach Rom geflogen.', ['ist', 'hat', 'wird'], 'ist', 'fliegen: sein.'), lacuna('Ich gebe ___ Frau ein Buch. (à)', ['der', 'die', 'dem'], 'der', 'Feminino dativo.'),
        lacuna('Ich helfe ___. (a ele)', ['ihm', 'ihn', 'er'], 'ihm', 'helfen: dativo.'), lacuna('Ich fahre ___ Zug. (de)', ['mit dem', 'mit der', 'in dem'], 'mit dem', '«Zug» é «der».'), lacuna('Die Lampe hängt ___ Tisch. (acima da mesa)', ['über dem', 'über den', 'über die'], 'über dem', 'Wo? dativo.'),
        lacuna('Ich lege das Buch ___ Tisch. (sobre a)', ['auf den', 'auf dem', 'auf der'], 'auf den', 'Wohin? acusativo.'), ordem('Ordene: «Ontem eu fui ao cinema.»', ['Gestern', 'bin', 'ich', 'ins', 'Kino', 'gegangen'], 'Gestern bin ich ins Kino gegangen.', 'Auxiliar na 2ª posição, particípio no fim.'),
        livre('Schreiben: escreva 5 frases sobre o seu fim de semana (Perfekt), com «haben» e «sein», e uma com dativo.', 'Ich bin nach Berlin gefahren. Ich habe meine Tante besucht. Wir haben zusammen gekocht. Ich habe ihr ein Buch geschenkt. Ich bin am Sonntag nach Hause gekommen.'),
      ]),
      producao(5, 'Sprechen, em 3 partes: (1) conte o seu último fim de semana; (2) faça e responda perguntas a partir de palavras-chave (Reise, Arzt, Wohnung, Geschenk, Wetter); (3) formule 3 pedidos educados («Können Sie mir helfen? Können Sie das wiederholen?»).'),
    ]),
  ],
});
