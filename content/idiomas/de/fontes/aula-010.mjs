import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 10, titulo: 'Revisão e prova do primeiro bloco', nivel: 'a1',
  objetivo: 'Revisar pronúncia, artigos, presente, acusativo, verbos separáveis, horas e direções, corrigir os erros mais comuns de quem fala português e fazer a prova do primeiro bloco.',
  nota: 'Você fechou o primeiro bloco do alemão: 10 aulas, 20 horas. Revise por alguns dias antes de seguir para os casos.',
  sessoes: [
    sessao('S1', 'Mapa de revisão', [
      revisao(5, 'Leia em voz alta o alfabeto e as combinações ei, ie, eu, au, sch, ch, sp, st.'),
      gramatica(15, 'Tudo o que você já sabe, em uma tabela', 'Esta tabela resume as aulas 1 a 9 em uma linha por ponto. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Pronúncia', regra: 'ei = «ai», ie = «i» longo, sch = «x», ch = «ç» ou «rr», w = «v», v = «f», z = «ts», s + vogal = «z».', aula: '1' },
          { tema: 'Verbo na 2ª posição', regra: 'O verbo conjugado fica na 2ª posição; a pergunta de sim ou não começa pelo verbo.', aula: '2, 4' },
          { tema: 'sein e haben', regra: 'ich bin, du bist, er ist...; ich habe, du hast, er hat...', aula: '2, 5' },
          { tema: 'du, ihr, Sie', regra: 'du (um amigo), ihr (vários amigos), Sie (formal, um ou vários).', aula: '2' },
          { tema: 'Gênero e artigos', regra: 'der, die, das; todo substantivo com maiúscula; aprenda o artigo com a palavra.', aula: '3' },
          { tema: 'Plural', regra: 'Cinco tipos: -e, -(e)n, -er, sem terminação, -s (muitas vezes com trema).', aula: '3' },
          { tema: 'ein, eine, kein', regra: 'ein Tisch, eine Lampe, kein Buch; no plural, keine.', aula: '3' },
          { tema: 'Presente regular', regra: '-e, -st, -t, -en, -t, -en; raiz em -t ou -d: du arbeitest.', aula: '4' },
          { tema: 'Possessivos', regra: 'mein, meine...: concordam com a coisa possuída.', aula: '5' },
          { tema: 'Números', regra: '21 = einundzwanzig (unidade + und + dezena).', aula: '5, 6' },
          { tema: 'Horas', regra: '«halb neun» = 8h30; Viertel vor / nach.', aula: '6' },
          { tema: 'Dias, meses, data', regra: 'am Montag, im Mai, der 5. Oktober.', aula: '6' },
          { tema: 'Acusativo', regra: 'Só o masculino muda: der → den, ein → einen, kein → keinen.', aula: '5, 7' },
          { tema: 'Verbos e → i', regra: 'du isst, er liest, du nimmst.', aula: '7' },
          { tema: 'möchten', regra: 'ich möchte … + segundo verbo no infinitivo, no fim.', aula: '7' },
          { tema: 'Verbos separáveis', regra: 'Ich stehe um sieben Uhr auf.', aula: '8' },
          { tema: 'a → ä', regra: 'du fährst, er schläft.', aula: '8' },
          { tema: 'Wo? × Wohin?', regra: 'im Park (dativo) × in den Park (acusativo).', aula: '9' },
          { tema: 'Imperativo formal', regra: 'Gehen Sie geradeaus!', aula: '9' },
        ],
      }),
      producao(10, 'Apresente-se em 8 frases, em voz alta: nome, origem, idade, família, onde mora, o que come, a hora em que se levanta e como vai ao trabalho.'),
    ]),
    sessao('S2', 'Leitura final do bloco', [
      revisao(5, 'Releia o texto e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Ana in Berlin / Ana em Berlim', 'Ich heiße Ana. Ich komme aus Brasilien und wohne jetzt in Berlin. Ich bin fünfundzwanzig Jahre alt. Ich habe einen Bruder und eine Schwester. Morgens stehe ich um sieben Uhr auf und frühstücke: Ich esse ein Brot mit Käse und trinke einen Kaffee. Um acht Uhr fahre ich zur Arbeit. Am Abend gehe ich oft ins Kino. Am Wochenende lerne ich Deutsch.',
        'Eu me chamo Ana. Venho do Brasil e agora moro em Berlim. Tenho vinte e cinco anos. Tenho um irmão e uma irmã. De manhã me levanto às sete e tomo café da manhã: como um pão com queijo e bebo um café. Às oito vou para o trabalho. À noite vou com frequência ao cinema. No fim de semana estudo alemão.',
        [['Woher kommt Ana?', 'Aus Brasilien'], ['Wie alt ist Ana?', 'Fünfundzwanzig'], ['Was trinkt Ana morgens?', 'Einen Kaffee'], ['Wann fährt Ana zur Arbeit?', 'Um acht Uhr'], ['Wohin geht Ana am Abend oft?', 'Ins Kino']]),
      dialogo(10, 'Im Café / No café', 'Dois amigos tomam um café.', [
        ['Lea', 'Hallo, Paul! Wie geht’s?', 'Oi, Paul! Como vai?'], ['Paul', 'Gut, danke! Und dir?', 'Bem, obrigado! E você?'], ['Lea', 'Auch gut. Was möchtest du trinken?', 'Também bem. O que você quer beber?'], ['Paul', 'Ich möchte einen Kaffee. Und du?', 'Eu quero um café. E você?'],
        ['Lea', 'Ich nehme einen Tee und ein Stück Kuchen.', 'Eu pego um chá e um pedaço de bolo.'], ['Paul', 'Wie spät ist es? Ich arbeite um halb drei.', 'Que horas são? Eu trabalho às duas e meia.'], ['Lea', 'Es ist zehn nach zwei. Du hast noch Zeit.', 'São duas e dez. Você ainda tem tempo.'],
        ['Paul', 'Gut! Am Samstag gehe ich ins Kino. Kommst du mit?', 'Ótimo! No sábado vou ao cinema. Você vem junto?'], ['Lea', 'Ja, gern! Um wie viel Uhr?', 'Sim, com prazer! A que horas?'], ['Paul', 'Um acht Uhr. Tschüs!', 'Às oito. Tchau!'],
      ]),
      producao(5, 'Responda em voz alta às perguntas do texto e do diálogo, como se fosse você.'),
    ]),
    sessao('S3', 'Os erros mais comuns', [
      revisao(5, 'Escreva 3 erros que você já cometeu em alemão e a forma certa.'),
      gramatica(15, 'Os 10 erros mais comuns de quem fala português', 'Estes dez erros aparecem com mais frequência em quem fala português. Corrigir só esses já deixa o seu alemão muito mais natural. Leia cada par em voz alta: primeiro o errado (para reconhecer o som estranho), depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['Ich habe 20 Jahre.', 'Ich bin 20 Jahre alt.', 'Idade: «sein» + alt.'], ['Ich heute arbeite.', 'Heute arbeite ich.', 'Verbo na 2ª posição.'], ['das Frau', 'die Frau', 'Aprenda o artigo junto com a palavra.'], ['ich bin brasilianer', 'Ich bin Brasilianer.', 'Maiúscula no começo da frase e em todo substantivo.'],
          ['Ich möchte essen einen Fisch.', 'Ich möchte einen Fisch essen.', 'O segundo verbo vai para o fim.'], ['Ich esse der Käse.', 'Ich esse den Käse.', 'Objeto direto masculino: den.'], ['Du esst Brot.', 'Du isst Brot.', 'e → i no «du».'], ['Ich aufstehe um sieben Uhr.', 'Ich stehe um sieben Uhr auf.', 'Prefixo separável no fim.'],
          ['Ich gehe in dem Park.', 'Ich gehe in den Park.', 'Movimento: acusativo.'], ['halb drei = 3:30', 'halb drei = 2:30', '«halb» é meia hora ANTES.'],
        ],
      }),
      producao(10, 'Leia cada erro em voz alta e diga a forma certa. Depois grave 5 frases suas, sem nenhum desses erros.'),
    ]),
    sessao('S4', 'Prova do primeiro bloco', [
      revisao(5, 'Releia o mapa de revisão e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        mc('Como se lê «ei» em «Eis»?', ['«ai»', '«ei»', '«i»'], '«ai»', '«ei» soa «ai».'), mc('Artigo de «Frau»:', ['die', 'der', 'das'], 'die', 'Frau é feminino.'), mc('Plural de «Haus»:', ['Häuser', 'Hause', 'Haus'], 'Häuser', 'Plural em -er com trema.'),
        lacuna('Ich ___ Brasilianer. (sein)', ['bin', 'bist', 'ist'], 'bin', 'ich → bin.'), lacuna('Er ___ einen Bruder. (haben)', ['hat', 'hast', 'habt'], 'hat', 'er → hat.'), lacuna('Wir ___ in Berlin. (wohnen)', ['wohnen', 'wohnt', 'wohne'], 'wohnen', 'wir → -en.'),
        lacuna('Ich esse ___ Käse. (o)', ['den', 'der', 'dem'], 'den', 'Acusativo masculino.'), lacuna('Du ___ ein Brot. (essen)', ['isst', 'esst', 'isse'], 'isst', 'e → i no «du».'), lacuna('Ich ___ einen Tee. (möchten)', ['möchte', 'möchtest', 'möchten'], 'möchte', 'ich → möchte.'),
        mc('21 em alemão:', ['einundzwanzig', 'zwanzigeins', 'einsundzwanzig'], 'einundzwanzig', 'unidade + und + dezena.'), mc('«halb drei» é:', ['2:30', '3:30', '3:00'], '2:30', 'Meia hora antes das três.'), lacuna('Ich arbeite ___ Montag.', ['am', 'im', 'um'], 'am', 'Dia da semana: am.'),
        ordem('Ordene: «Eu me levanto às sete horas.»', ['Ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf'], 'Ich stehe um sieben Uhr auf.', 'O prefixo separável vai para o fim.'), lacuna('Ich gehe ___ Kino. (Wohin?)', ['ins', 'im', 'in den'], 'ins', 'Movimento, neutro: ins.'),
        ouvir('Gehen Sie geradeaus', ['Gehen Sie geradeaus', 'Biegen Sie links ab', 'Es ist nicht weit'], 'Gehen Sie geradeaus', 'Imperativo formal.'), ditado('Ich komme aus Brasilien und wohne in Berlin', 'Verbo na 2ª posição.'),
        livre('Escreva 6 frases: nome, origem, idade, o que você come, a hora em que se levanta e para onde você vai à noite.', 'Ich heiße Ana. Ich komme aus Brasilien. Ich bin fünfundzwanzig Jahre alt. Ich esse ein Brot. Ich stehe um sieben Uhr auf. Am Abend gehe ich ins Kino.'),
      ]),
      producao(5, 'Grave-se: apresentação completa de 1 minuto, com tudo o que você aprendeu no bloco.'),
    ]),
  ],
});
