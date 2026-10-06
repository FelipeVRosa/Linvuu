import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 52, titulo: 'Plusquamperfekt: nachdem e bevor', nivel: 'b1',
  objetivo: 'Formar o Plusquamperfekt (hatte/war + Partizip II), usá-lo para um passado anterior a outro passado e combiná-lo com nachdem e bevor.',
  nota: 'Você conta o passado em duas camadas. Próxima aula: als × wenn e outras conjunções de tempo.',
  sessoes: [
    sessao('S1', 'O Plusquamperfekt', [
      revisao(5, 'Escreva 6 frases no passivo no Präteritum e no Perfekt.'),
      palavras(8, [
        ['vorher', 'fôr-her', 'antes', 'before'], ['nachher', 'narr-her', 'depois', 'afterwards'], ['danach', 'dá-narr', 'depois disso', 'after that'], ['davor', 'dá-fôr', 'antes disso', 'before that'],
        ['zuerst', 'tsu-érst', 'primeiro', 'first'], ['zuletzt', 'tsu-létst', 'por último', 'last'], ['schon', 'xôn', 'já', 'already'], ['bereits', 'berráits', 'já (mais formal)', 'already'],
      ]),
      gramatica(14, 'O Plusquamperfekt, passo a passo', 'PASSO 1: o PLUSQUAMPERFEKT é o passado de um passado: ele conta algo que aconteceu ANTES de outro fato passado. PASSO 2: forma: Präteritum de «haben» ou «sein» (hatte / war) + Partizip II no fim: «Ich hatte gegessen», «Er war gegangen». PASSO 3: a escolha haben/sein é a mesma do Perfekt: «ich hatte gearbeitet», «ich war gefahren». PASSO 4: conjugue: ich hatte / war, du hattest / warst, er hatte / war, wir hatten / waren, ihr hattet / wart, sie hatten / waren. PASSO 5: palavras que ajudam: schon, bereits, vorher, davor, zuerst: «Als ich ankam, hatte der Film schon begonnen.» PASSO 6: o português tem «eu tinha comido»; o alemão faz o mesmo com hatte + particípio.', {
        tag: 'Verbos',
        comparacao: 'o português tem o mais-que-perfeito composto («eu tinha comido»). O alemão faz igual: «hatte» ou «war» + particípio.',
        tabela: [
          { pronome: 'ich', haben: 'hatte gegessen', sein: 'war gegangen' }, { pronome: 'du', haben: 'hattest gegessen', sein: 'warst gegangen' }, { pronome: 'er / sie / es', haben: 'hatte gegessen', sein: 'war gegangen' }, { pronome: 'wir', haben: 'hatten gegessen', sein: 'waren gegangen' },
          { pronome: 'ihr', haben: 'hattet gegessen', sein: 'wart gegangen' }, { pronome: 'sie / Sie', haben: 'hatten gegessen', sein: 'waren gegangen' },
        ],
        exemplos: [['Als ich ankam, hatte der Film schon begonnen.', 'Quando cheguei, o filme já tinha começado.'], ['Ich hatte nichts gegessen und war sehr müde.', 'Eu não tinha comido nada e estava muito cansado.'], ['Er war schon gegangen, als ich kam.', 'Ele já tinha ido quando cheguei.']],
        erros: [['Ich habe gegessen gehabt.', 'Ich hatte gegessen.', 'Plusquamperfekt: hatte + Partizip II.'], ['Er hatte gegangen.', 'Er war gegangen.', '«gehen» usa «sein».'], ['Als ich ankam, der Film hatte schon begonnen.', 'Als ich ankam, hatte der Film schon begonnen.', 'Principal depois da subordinada: verbo primeiro.']],
      }),
      producao(3, 'Conte 6 coisas que você já tinha feito antes de um momento do passado: «Als ich ankam, hatte … schon …»'),
    ]),
    sessao('S2', 'Nachdem', [
      revisao(5, 'Escreva as formas do Plusquamperfekt com «hatte» e «war».'),
      palavras(8, [
        ['nachdem', 'narr-dêm', 'depois que', 'after'], ['sobald', 'zo-bált', 'assim que', 'as soon as'], ['sofort', 'zofórt', 'imediatamente', 'immediately'], ['plötzlich', 'plöts-liç', 'de repente', 'suddenly'],
        ['endlich', 'éndliç', 'finalmente', 'finally'], ['inzwischen', 'in-tsvíxen', 'entretanto', 'meanwhile'], ['später', 'xpéter', 'mais tarde', 'later'], ['anschließend', 'án-xlísent', 'em seguida', 'afterwards'],
      ]),
      gramatica(12, 'Nachdem + Plusquamperfekt, passo a passo', 'PASSO 1: «NACHDEM» (depois que) abre uma subordinada: o verbo conjugado vai para o FIM. PASSO 2: o fato da subordinada aconteceu ANTES, por isso vai no PLUSQUAMPERFEKT; o fato da principal vai no Präteritum ou Perfekt: «Nachdem ich gegessen hatte, bin ich spazieren gegangen.» PASSO 3: a mesma ideia no presente: «Nachdem ich gegessen habe, gehe ich spazieren» (Perfekt na subordinada, presente na principal). PASSO 4: se a subordinada abre a frase, a principal começa pelo VERBO. PASSO 5: sempre escolha o tempo de «nachdem» pela regra: UM TEMPO ANTES do da principal.', {
        tag: 'Frase',
        tabela: [
          { principal: 'Perfekt', nachdem: 'Plusquamperfekt', frase: 'Nachdem ich gegessen hatte, bin ich spazieren gegangen.' }, { principal: 'Präteritum', nachdem: 'Plusquamperfekt', frase: 'Nachdem er angekommen war, rief er mich an.' }, { principal: 'presente', nachdem: 'Perfekt', frase: 'Nachdem ich gegessen habe, gehe ich spazieren.' },
        ],
        erros: [['Nachdem ich aß, bin ich gegangen.', 'Nachdem ich gegessen hatte, bin ich gegangen.', '«nachdem» pede um tempo ANTES: Plusquamperfekt.'], ['Nachdem ich gegessen hatte, ich bin gegangen.', 'Nachdem ich gegessen hatte, bin ich gegangen.', 'A principal começa pelo verbo.']],
      }),
      producao(5, 'Conte o seu dia em 6 frases com «nachdem»: «Nachdem ich aufgestanden war, … Nachdem ich gefrühstückt hatte, …»'),
    ]),
    sessao('S3', 'Bevor e os advérbios de sequência', [
      revisao(5, 'Escreva 6 frases com «nachdem» e Plusquamperfekt.'),
      gramatica(10, 'Bevor e a sequência dos fatos', 'PASSO 1: «BEVOR» (antes que, antes de) abre uma subordinada: verbo no fim. PASSO 2: o tempo é o MESMO da principal: «Bevor ich ging, habe ich das Licht ausgemacht» ou, no presente, «Bevor ich gehe, mache ich das Licht aus.» PASSO 3: o contrário: «nachdem» pede o tempo anterior; «bevor», o mesmo tempo. PASSO 4: advérbios de sequência (verbo na 2ª posição): «zuerst … dann … danach … zuletzt»: «Zuerst habe ich gegessen, dann habe ich gearbeitet.» PASSO 5: «vorher / davor» (antes disso) e «nachher / danach» (depois disso) também são advérbios, com verbo na 2ª posição.', {
        tag: 'Frase',
        tabela: [
          { palavra: 'bevor', frase: 'Bevor ich ging, habe ich das Licht ausgemacht.' }, { palavra: 'nachdem', frase: 'Nachdem ich gegessen hatte, bin ich gegangen.' }, { palavra: 'zuerst … dann', frase: 'Zuerst habe ich gegessen, dann habe ich gearbeitet.' }, { palavra: 'danach / vorher', frase: 'Danach bin ich nach Hause gegangen.' },
        ],
      }),
      dialogo(10, 'Was war passiert? / O que tinha acontecido?', 'Dois amigos conversam sobre ontem à noite.', [
        ['Lea', 'Warum hast du gestern nicht angerufen?', 'Por que você não ligou ontem?'], ['Paul', 'Nachdem ich nach Hause gekommen war, bin ich sofort eingeschlafen.', 'Depois que cheguei em casa, adormeci imediatamente.'], ['Lea', 'Hattest du so viel gearbeitet?', 'Você tinha trabalhado tanto?'],
        ['Paul', 'Ja, ich hatte zehn Stunden gearbeitet und nichts gegessen.', 'Sim, eu tinha trabalhado dez horas e não tinha comido nada.'], ['Lea', 'Bevor du eingeschlafen bist, hast du nicht einmal eine Nachricht geschrieben.', 'Antes de adormecer, você nem escreveu uma mensagem.'], ['Paul', 'Stimmt. Ich hatte mein Handy schon im Büro vergessen.', 'É verdade. Eu já tinha esquecido o celular no escritório.'],
        ['Lea', 'Nachdem ich zwei Stunden gewartet hatte, bin ich ins Kino gegangen.', 'Depois de esperar duas horas, fui ao cinema.'], ['Paul', 'Es tut mir leid! Ich lade dich morgen ein.', 'Sinto muito! Eu convido você amanhã.'],
      ]),
      producao(5, 'Conte uma história em voz alta com «zuerst», «dann», «nachdem» e «bevor».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com Plusquamperfekt, nachdem e bevor.'),
      exercicios(20, [
        lacuna('Ich ___ gegessen. (haben, Plusquamperfekt)', ['hatte', 'habe', 'hätte'], 'hatte', 'hatte + Partizip II.'), lacuna('Er ___ gegangen. (sein, Plusquamperfekt)', ['war', 'ist', 'wäre'], 'war', 'war + Partizip II.'), lacuna('Als ich ankam, ___ der Film schon begonnen.', ['hatte', 'hat', 'wurde'], 'hatte', 'Plusquamperfekt.'),
        lacuna('Nachdem ich gegessen ___, bin ich gegangen.', ['hatte', 'habe', 'war'], 'hatte', 'Um tempo antes da principal.'), lacuna('___ ich ging, habe ich das Licht ausgemacht. (antes de)', ['Bevor', 'Nachdem', 'Während'], 'Bevor', 'bevor = antes que.'), mc('O Plusquamperfekt é o passado:', ['de um passado', 'do futuro', 'do presente'], 'de um passado', 'Fato anterior a outro fato passado.'),
        mc('Depois de «nachdem», com principal no Perfekt, usa-se:', ['Plusquamperfekt', 'Präteritum', 'futuro'], 'Plusquamperfekt', 'Um tempo antes.'), mc('Depois de «bevor», o tempo é:', ['o mesmo da principal', 'sempre Plusquamperfekt', 'sempre futuro'], 'o mesmo da principal', 'bevor ich ging, habe …'), mc('«Danach» é:', ['advérbio (verbo na 2ª posição)', 'conjunção (verbo no fim)', 'artigo'], 'advérbio (verbo na 2ª posição)', 'Danach bin ich gegangen.'),
        ordem('Ordene: «Depois que comi, fui passear.»', ['Nachdem', 'ich', 'gegessen', 'hatte', 'bin', 'ich', 'spazieren', 'gegangen'], 'Nachdem ich gegessen hatte, bin ich spazieren gegangen.', 'Subordinada primeiro.'), ordem('Ordene: «Ele já tinha ido embora.»', ['Er', 'war', 'schon', 'gegangen'], 'Er war schon gegangen.', 'war + Partizip II.'), ouvir('Nachdem ich nach Hause gekommen war, bin ich eingeschlafen', ['Nachdem ich nach Hause gekommen war, bin ich eingeschlafen', 'Nachdem ich nach Hause komme, schlafe ich ein', 'Ich bin nach Hause gekommen und eingeschlafen'], 'Nachdem ich nach Hause gekommen war, bin ich eingeschlafen', 'nachdem + Plusquamperfekt.'),
        ditado('Ich hatte zehn Stunden gearbeitet', 'Plusquamperfekt.'), livre('Escreva 5 frases: duas no Plusquamperfekt, duas com «nachdem» e uma com «bevor».', 'Ich hatte nichts gegessen. Er war schon gegangen. Nachdem ich gegessen hatte, bin ich gegangen. Nachdem er angekommen war, rief er mich an. Bevor ich ging, habe ich das Licht ausgemacht.'),
      ]),
      producao(5, 'Grave-se contando um dia em ordem, com Plusquamperfekt, nachdem e bevor.'),
    ]),
  ],
});
