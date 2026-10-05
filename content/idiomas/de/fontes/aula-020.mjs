import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 20, titulo: 'Revisão e simulado do A1', nivel: 'a1',
  objetivo: 'Rever todo o A1 em um mapa, treinar leitura, escuta, escrita e fala no formato das provas de A1 (Hören, Lesen, Schreiben, Sprechen), corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou o A1 do alemão: 20 aulas, 40 horas. Antes de seguir para o A2, repita o simulado até acertar quase tudo.',
  sessoes: [
    sessao('S1', 'O mapa do A1', [
      revisao(5, 'Leia em voz alta as 5 frases que você acha mais difíceis do A1.'),
      gramatica(15, 'Tudo do A1 em uma tabela', 'Esta tabela resume as aulas 1 a 19. Releia uma linha por vez e diga um exemplo seu em voz alta. Se uma linha parecer estranha, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Pronúncia', regra: 'ei = «ai», ie = «i» longo, sch = «x», ch = «ç» ou «rr», w = «v», v = «f», z = «ts».', aula: '1' },
          { tema: 'Verbo na 2ª posição', regra: 'O verbo conjugado fica na 2ª posição; a pergunta de sim ou não começa pelo verbo.', aula: '2, 4' },
          { tema: 'sein e haben', regra: 'ich bin, du bist, er ist…; ich habe, du hast, er hat…', aula: '2, 5' },
          { tema: 'du, ihr, Sie', regra: 'du (um amigo), ihr (vários), Sie (formal).', aula: '2' },
          { tema: 'Gênero, artigos e plural', regra: 'der, die, das; maiúscula em todo substantivo; cinco tipos de plural.', aula: '3' },
          { tema: 'Presente regular', regra: '-e, -st, -t, -en, -t, -en; raiz em -t ou -d: du arbeitest.', aula: '4' },
          { tema: 'Números, horas e datas', regra: '21 = einundzwanzig; halb neun = 8h30; am Montag, im Mai.', aula: '5, 6' },
          { tema: 'Acusativo', regra: 'Só o masculino muda: den, einen, keinen.', aula: '7' },
          { tema: 'Verbos e → i, a → ä', regra: 'du isst, er liest; du fährst, er schläft.', aula: '7, 8' },
          { tema: 'Verbos separáveis', regra: 'Ich stehe um sieben Uhr auf.', aula: '8' },
          { tema: 'Wo? × Wohin?', regra: 'im Park × in den Park; in der Schule × in die Schule; im Kino × ins Kino.', aula: '9' },
          { tema: 'Modais', regra: 'können, müssen, wollen, dürfen, möchten + infinitivo no fim; «nicht dürfen» = proibido.', aula: '11, 12' },
          { tema: 'Imperativo', regra: 'Öffnen Sie! · Komm! · Nimm! · Seid leise!', aula: '13' },
          { tema: 'Pronomes no acusativo', regra: 'mich, dich, ihn, sie, es, uns, euch, sie, Sie.', aula: '14' },
          { tema: 'kein e nicht', regra: '«kein» nega substantivos; «nicht» nega o resto; «doch» contradiz uma negação.', aula: '14' },
          { tema: 'Cores e preços', regra: 'Adjetivo depois de «sein» não muda; 2,50 € = zwei Euro fünfzig.', aula: '15' },
          { tema: 'Profissões', regra: 'Sem artigo (Ich bin Lehrer); feminino em -in; im Büro, in der Schule, bei Siemens.', aula: '16' },
          { tema: 'es gibt', regra: 'es gibt + acusativo: Es gibt einen Balkon.', aula: '17' },
          { tema: 'gern, lieber, am liebsten; o tempo', regra: 'Ich schwimme gern. Es regnet. Im Sommer ist es heiß.', aula: '18' },
          { tema: 'Transporte', regra: 'mit dem Zug, mit der U-Bahn, zu Fuß; nach Berlin, zum Bahnhof.', aula: '19' },
        ],
      }),
      producao(10, 'Apresente-se em 10 frases, em voz alta: nome, origem, idade, família, profissão, onde mora, hobbies, o que come, como vai ao trabalho e o que faz no fim de semana.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato A1, original)', [
      revisao(5, 'Releia o e-mail e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Eine E-Mail / Um e-mail', 'Liebe Mia, wie geht es dir? Ich wohne jetzt in München. Meine Wohnung hat zwei Zimmer und einen Balkon. Am Samstag habe ich Geburtstag. Ich mache eine Party. Sie beginnt um 18 Uhr. Kannst du kommen? Bitte bring Musik mit. Viele Grüße, Anna',
        'Querida Mia, como você está? Agora moro em Munique. Meu apartamento tem dois cômodos e uma varanda. No sábado é o meu aniversário. Vou fazer uma festa. Ela começa às 18 horas. Você pode vir? Por favor, traga música. Um abraço, Anna',
        [['Wo wohnt Anna jetzt?', 'In München'], ['Wann hat Anna Geburtstag?', 'Am Samstag'], ['Um wie viel Uhr beginnt die Party?', 'Um 18 Uhr'], ['Was soll Mia mitbringen?', 'Musik']]),
      dialogo(10, 'Am Telefon / Ao telefone', 'Dois amigos combinam um programa.', [
        ['Paul', 'Hallo Lea, hier ist Paul. Hast du morgen Zeit?', 'Oi, Lea, aqui é o Paul. Você tem tempo amanhã?'], ['Lea', 'Morgen? Nein, leider nicht. Ich muss arbeiten. Aber am Freitag habe ich Zeit.', 'Amanhã? Não, infelizmente. Preciso trabalhar. Mas na sexta tenho tempo.'], ['Paul', 'Gut. Möchtest du ins Kino gehen?', 'Ótimo. Você quer ir ao cinema?'],
        ['Lea', 'Ja, gern! Um wie viel Uhr?', 'Sim, com prazer! A que horas?'], ['Paul', 'Um halb acht. Ich hole dich ab.', 'Às sete e meia. Eu busco você.'], ['Lea', 'Prima! Dann bis Freitag.', 'Ótimo! Então até sexta.'],
      ]),
      producao(5, 'Responda em voz alta, como se fosse você: onde você mora, quando faz aniversário e o que você faz na sexta à noite.'),
    ]),
    sessao('S3', 'Os erros mais comuns e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete em alemão e a forma certa.'),
      gramatica(15, 'Os 14 erros mais comuns do A1', 'Leia cada par em voz alta: primeiro o errado (para reconhecer o som estranho), depois o certo. Corrigir só esses 14 deixa o seu alemão muito mais natural.', {
        tag: 'Revisão',
        erros: [
          ['Ich habe 20 Jahre.', 'Ich bin 20 Jahre alt.', 'Idade: «sein» + alt.'], ['Ich heute arbeite.', 'Heute arbeite ich.', 'Verbo na 2ª posição.'], ['Ich möchte essen einen Fisch.', 'Ich möchte einen Fisch essen.', 'O segundo verbo vai para o FIM.'], ['Ich esse der Käse.', 'Ich esse den Käse.', 'Objeto direto masculino: den.'], ['Du esst Brot.', 'Du isst Brot.', 'e → i no «du».'],
          ['Ich aufstehe um sieben Uhr.', 'Ich stehe um sieben Uhr auf.', 'Prefixo separável no fim.'], ['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Substantivo: «kein».'], ['Ich sehe er.', 'Ich sehe ihn.', 'Acusativo do pronome.'], ['Er kannt schwimmen.', 'Er kann schwimmen.', 'No «er», o modal não leva -t.'], ['Sie öffnen das Buch!', 'Öffnen Sie das Buch!', 'Imperativo: verbo antes de «Sie».'],
          ['Ich gehe im Kino.', 'Ich gehe ins Kino.', 'Movimento: acusativo.'], ['Es gibt ein Balkon.', 'Es gibt einen Balkon.', '«es gibt» pede acusativo.'], ['halb drei = 3:30', 'halb drei = 2:30', '«halb» é meia hora ANTES.'], ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Profissão sem artigo.'],
        ],
      }),
      producao(10, 'Escreva um e-mail de cerca de 30 palavras para um amigo, convidando-o para um programa: diga o dia, a hora, o lugar e peça uma resposta. Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do A1', [
      revisao(5, 'Releia o mapa do A1 e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('Ich möchte ein Zimmer reservieren', ['Ich möchte ein Zimmer reservieren', 'Ich habe ein Zimmer gebucht', 'Ich suche ein Zimmer'], 'Ich möchte ein Zimmer reservieren', 'Hören: o que a pessoa quer?'), ouvir('Der Zug fährt um vierzehn Uhr fünfzehn ab', ['Der Zug fährt um vierzehn Uhr fünfzehn ab', 'Der Zug kommt um vierzehn Uhr fünfzehn an', 'Der Zug fährt um vier Uhr fünfzehn ab'], 'Der Zug fährt um vierzehn Uhr fünfzehn ab', 'Hören: partida às 14h15.'),
        ouvir('Hier darf man nicht parken', ['Hier darf man nicht parken', 'Hier muss man parken', 'Hier will man parken'], 'Hier darf man nicht parken', 'Hören: proibição.'), ditado('Die Wohnung hat zwei Zimmer und einen Balkon', 'Schreiben: es gibt / haben + acusativo.'),
        mc('Leia: «Der Supermarkt ist von Montag bis Samstag von 8 bis 20 Uhr geöffnet.» Quando ele está aberto?', ['De segunda a sábado, das 8 às 20 horas', 'Todos os dias, das 8 às 20 horas', 'De segunda a sexta, das 8 às 18 horas'], 'De segunda a sábado, das 8 às 20 horas', 'Lesen: «geöffnet» = aberto.'),
        mc('Leia: «Einzelzimmer: 45 € pro Nacht. Frühstück: 5 €.» Quanto custa uma noite com café da manhã?', ['50 euros', '45 euros', '40 euros'], '50 euros', 'Lesen: 45 + 5.'), mc('Leia: «Liebe Anna, ich komme um 14 Uhr am Bahnhof an. Holst du mich ab? Gruß, Paul.» O que Paul quer?', ['Que Anna o busque na estação', 'Que Anna venha ao hotel', 'Que Anna ligue às 14 horas'], 'Que Anna o busque na estação', 'Lesen: «abholen» = buscar.'),
        mc('Leia o aviso: «Rauchen verboten.» Isso quer dizer:', ['Proibido fumar', 'Permitido fumar', 'Fumar só aqui'], 'Proibido fumar', 'Lesen: placas.'), mc('Leia: «Ich bin Köchin und arbeite im Restaurant.» A pessoa:', ['é cozinheira', 'é garçonete', 'é cliente'], 'é cozinheira', 'Lesen: profissão.'),
        lacuna('Ich ___ 25 Jahre alt. (sein)', ['bin', 'habe', 'bist'], 'bin', 'Idade com «sein».'), lacuna('Ich esse ___ Käse. (o)', ['den', 'der', 'dem'], 'den', 'Acusativo masculino.'), lacuna('Ich habe ___ Zeit. (nenhuma)', ['keine', 'kein', 'nicht'], 'keine', '«Zeit» é feminino.'),
        lacuna('Ich fahre ___ Zug nach Berlin.', ['mit dem', 'mit der', 'in dem'], 'mit dem', '«Zug» é «der».'), lacuna('___ Sie bitte Platz! (nehmen)', ['Nehmen', 'Nimm', 'Nehmt'], 'Nehmen', 'Imperativo formal.'), ordem('Ordene: «Hoje eu não trabalho.»', ['Heute', 'arbeite', 'ich', 'nicht'], 'Heute arbeite ich nicht.', 'Verbo na 2ª posição; «nicht» no fim.'),
        ordem('Ordene: «O senhor pode falar mais devagar, por favor?»', ['Können', 'Sie', 'bitte', 'langsamer', 'sprechen'], 'Können Sie bitte langsamer sprechen?', 'Modal primeiro; infinitivo no fim.'),
        livre('Schreiben: escreva 5 frases sobre você (nome, origem, profissão, onde mora, um hobby).', 'Ich heiße Ana. Ich komme aus Brasilien. Ich bin Lehrerin. Ich wohne in Berlin. Ich schwimme gern.'),
      ]),
      producao(5, 'Sprechen, em 3 partes: (1) apresente-se; (2) faça e responda perguntas a partir de palavras-chave (Familie, Beruf, Wohnung, Hobby, Essen); (3) formule 3 pedidos educados («Machen Sie bitte das Fenster zu. Können Sie mir helfen?»).'),
    ]),
  ],
});
