import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 23, titulo: 'Perfekt 3: haben ou sein?', nivel: 'a2',
  objetivo: 'Escolher o auxiliar certo do Perfekt (haben ou sein), usar os verbos de movimento e de mudança de estado e montar frases completas, com pergunta, negação e as palavras schon, noch nicht e noch nie.',
  nota: 'Você escolhe o auxiliar certo e conta o passado completo. Próxima aula: o Präteritum de sein, haben e dos modais.',
  sessoes: [
    sessao('S1', 'Quando usar sein', [
      revisao(5, 'Escreva 8 frases no Perfekt com «haben», usando particípios regulares e irregulares.'),
      palavras(8, [
        ['gehen / gegangen', 'géen / gueguángen', 'ir (a pé) / ido', 'to go'], ['fahren / gefahren', 'fáren / guefáren', 'ir (de veículo) / ido', 'to drive'], ['kommen / gekommen', 'kómen / guekómen', 'vir / vindo', 'to come'], ['fliegen / geflogen', 'flígen / gueflôguen', 'voar / voado', 'to fly'],
        ['laufen / gelaufen', 'láufen / guelaufen', 'correr / corrido', 'to run'], ['bleiben / geblieben', 'bláiben / gueblíben', 'ficar / ficado', 'to stay'], ['aufstehen / aufgestanden', 'áuf-xtéen / áuf-guexténden', 'levantar-se', 'to get up'], ['einschlafen / eingeschlafen', 'áin-xláfen / áin-guexláfen', 'adormecer', 'to fall asleep'],
      ]),
      gramatica(14, 'Haben ou sein? Passo a passo', 'PASSO 1: a maioria dos verbos faz o Perfekt com «haben». PASSO 2: três grupos fazem com «SEIN»: (1) verbos de MOVIMENTO de um lugar a outro: gehen, fahren, kommen, fliegen, laufen, reisen, ankommen; (2) verbos de MUDANÇA de estado: aufstehen, einschlafen, aufwachen, werden; (3) os verbos «sein» e «bleiben». PASSO 3: regra de bolso: se dá para dizer «de A para B» ou «mudou de estado», use «sein»; se não, «haben». PASSO 4: o auxiliar «sein» conjuga no presente: ich bin, du bist, er ist, wir sind, ihr seid, sie sind. PASSO 5: a frase continua emoldurada: «Ich bin nach Berlin gefahren.» «Er ist um sieben Uhr aufgestanden.» «Wir sind zu Hause geblieben.»', {
        tag: 'Verbos',
        comparacao: 'o português usa «ter» para tudo: «eu tenho ido», «eu tinha ficado». O alemão separa: «haben» para a maioria e «sein» para ir, vir e mudar.',
        tabela: [
          { grupo: 'movimento', infinitivo: 'gehen', frase: 'Ich bin ins Kino gegangen.' }, { grupo: 'movimento', infinitivo: 'fahren', frase: 'Wir sind nach Berlin gefahren.' }, { grupo: 'movimento', infinitivo: 'kommen', frase: 'Er ist spät gekommen.' }, { grupo: 'movimento', infinitivo: 'fliegen', frase: 'Sie ist nach Rom geflogen.' },
          { grupo: 'mudança de estado', infinitivo: 'aufstehen', frase: 'Ich bin um sechs Uhr aufgestanden.' }, { grupo: 'mudança de estado', infinitivo: 'einschlafen', frase: 'Das Kind ist früh eingeschlafen.' }, { grupo: 'sein / bleiben', infinitivo: 'bleiben', frase: 'Wir sind zu Hause geblieben.' }, { grupo: 'sein / bleiben', infinitivo: 'sein', frase: 'Ich bin in Berlin gewesen.' },
        ],
        erros: [['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Movimento de um lugar a outro: «sein».'], ['Ich habe zu Hause geblieben.', 'Ich bin zu Hause geblieben.', '«bleiben» usa «sein».'], ['Ich bin Kaffee getrunken.', 'Ich habe Kaffee getrunken.', 'A maioria dos verbos usa «haben».']],
      }),
      producao(3, 'Conte uma viagem ou um passeio em 6 frases no Perfekt, com «sein» e os verbos de movimento.'),
    ]),
    sessao('S2', 'Mais verbos e as exceções que confundem', [
      revisao(5, 'Escreva o auxiliar e o Partizip II de 10 verbos: 5 com «sein» e 5 com «haben».'),
      palavras(8, [
        ['passieren', 'pasíren', 'acontecer', 'to happen'], ['aufwachen', 'áuf-vârren', 'acordar', 'to wake up'], ['der Unfall', 'der ún-fal', 'acidente', 'accident'], ['verlieren', 'ferlíren', 'perder', 'to lose'],
        ['gewinnen', 'guevínen', 'ganhar', 'to win'], ['vergessen', 'fergésen', 'esquecer', 'to forget'], ['sterben', 'xtérben', 'morrer', 'to die'], ['wachsen', 'váksen', 'crescer', 'to grow'],
      ]),
      gramatica(12, 'Mais verbos com sein e as confusões frequentes', 'PASSO 1: mais verbos de «mudança de estado» que pedem «sein»: passieren → passiert («Was ist passiert?»); aufwachen → aufgewacht; sterben → gestorben; wachsen → gewachsen; werden → geworden. PASSO 2: verbos parecidos que pedem «haben» porque NÃO mudam o lugar nem o estado: verlieren → verloren; gewinnen → gewonnen; vergessen → vergessen. PASSO 3: cuidado com «fahren»: com objeto direto usa «haben»: «Ich habe das Auto gefahren» (eu dirigi o carro); sem objeto, de um lugar a outro, «sein»: «Ich bin nach Berlin gefahren». PASSO 4: a pergunta mais comum: «Was ist passiert?» (O que aconteceu?). PASSO 5: se tiver dúvida, pergunte: «muda de lugar ou de estado?»', {
        tag: 'Verbos',
        tabela: [
          { auxiliar: 'sein', infinitivo: 'passieren', participio: 'passiert' }, { auxiliar: 'sein', infinitivo: 'aufwachen', participio: 'aufgewacht' }, { auxiliar: 'sein', infinitivo: 'sterben', participio: 'gestorben' }, { auxiliar: 'sein', infinitivo: 'werden', participio: 'geworden' },
          { auxiliar: 'haben', infinitivo: 'verlieren', participio: 'verloren' }, { auxiliar: 'haben', infinitivo: 'gewinnen', participio: 'gewonnen' }, { auxiliar: 'haben', infinitivo: 'vergessen', participio: 'vergessen' }, { auxiliar: 'haben (com objeto)', infinitivo: 'fahren', participio: 'gefahren' },
        ],
        exemplos: [['Was ist passiert?', 'O que aconteceu?'], ['Ich habe meinen Schlüssel verloren.', 'Eu perdi a minha chave.'], ['Ich habe das Auto gefahren.', 'Eu dirigi o carro.'], ['Ich bin nach Berlin gefahren.', 'Eu fui a Berlim.']],
        erros: [['Ich bin meinen Schlüssel verloren.', 'Ich habe meinen Schlüssel verloren.', '«verlieren» usa «haben».'], ['Es hat passiert.', 'Es ist passiert.', '«passieren» usa «sein».']],
      }),
      producao(5, 'Conte um dia em que algo aconteceu («Was ist passiert?»), com 6 frases no Perfekt, usando «haben» e «sein».'),
    ]),
    sessao('S3', 'O Perfekt completo', [
      revisao(5, 'Escreva uma regra de bolso para escolher entre «haben» e «sein» e 3 exemplos de cada.'),
      gramatica(10, 'Pergunta, negação e as palavras schon, noch nicht, noch nie', 'PASSO 1: a pergunta de sim ou não começa pelo auxiliar: «Hast du schon gegessen?», «Bist du nach Berlin gefahren?» PASSO 2: a negação «nicht» vem ANTES do Partizip II: «Ich habe nicht gearbeitet.» PASSO 3: «schon» (já) e «noch nicht» (ainda não): «Hast du schon gegessen? — Nein, noch nicht.» PASSO 4: «schon einmal» (já uma vez) e «noch nie» (nunca): «Hast du schon einmal Sushi gegessen? — Nein, noch nie.» PASSO 5: contagem das vezes: einmal, zweimal, dreimal. PASSO 6: com «sein», «haben» e os modais, a conversa usa o Präteritum (aula 24): «Ich war schon einmal in Berlin.»', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'pergunta', exemplo: 'Hast du schon gegessen? / Bist du schon gegangen?' }, { funcao: 'negação', exemplo: 'Ich habe nicht gearbeitet.' }, { funcao: 'já / ainda não', exemplo: 'Ja, schon. / Nein, noch nicht.' }, { funcao: 'já uma vez', exemplo: 'Hast du schon einmal Sushi gegessen?' },
          { funcao: 'nunca', exemplo: 'Nein, noch nie.' }, { funcao: 'quantas vezes', exemplo: 'Ich bin dreimal dort gewesen.' },
        ],
        erros: [['Ich nicht habe gearbeitet.', 'Ich habe nicht gearbeitet.', '«nicht» antes do particípio.'], ['Ich habe nie Sushi gegessen.', 'Ich habe noch nie Sushi gegessen.', 'Experiência de vida: «noch nie».']],
      }),
      dialogo(10, 'Hast du schon einmal …? / Você já … alguma vez?', 'Dois amigos falam de experiências.', [
        ['Lea', 'Hast du schon einmal Sushi gegessen?', 'Você já comeu sushi alguma vez?'], ['Tom', 'Nein, noch nie. Und du?', 'Não, nunca. E você?'], ['Lea', 'Ja, ich habe letztes Jahr in Berlin Sushi gegessen.', 'Sim, comi sushi em Berlim ano passado.'],
        ['Tom', 'Bist du oft in Berlin gewesen?', 'Você esteve muitas vezes em Berlim?'], ['Lea', 'Ja, ich bin dreimal dort gewesen.', 'Sim, estive lá três vezes.'], ['Tom', 'Bist du mit dem Zug gefahren?', 'Você foi de trem?'],
        ['Lea', 'Einmal mit dem Zug und zweimal bin ich geflogen.', 'Uma vez de trem e duas vezes eu voei.'], ['Tom', 'Ich bin noch nie nach Berlin geflogen.', 'Eu nunca voei para Berlim.'], ['Lea', 'Dann musst du bald mitkommen!', 'Então você precisa vir junto em breve!'], ['Tom', 'Gern! Ich habe im August Urlaub.', 'Com prazer! Tenho férias em agosto.'],
      ]),
      producao(5, 'Pergunte e responda em voz alta: «Hast du schon einmal …? Nein, noch nie. Ja, ich bin einmal / zweimal … gewesen.»'),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre uma viagem que você fez, no Perfekt.'),
      texto(5, 'Mein Wochenende / O meu fim de semana', 'Am Samstag bin ich um neun Uhr aufgestanden. Ich habe gefrühstückt und die Zeitung gelesen. Dann bin ich mit dem Bus in die Stadt gefahren und habe eingekauft. Am Abend habe ich mit meiner Freundin gekocht. Wir haben Fisch gegessen und Wein getrunken. Am Sonntag bin ich zu Hause geblieben und habe viel geschlafen.',
        'No sábado me levantei às nove horas. Tomei café da manhã e li o jornal. Depois fui de ônibus à cidade e fiz compras. À noite cozinhei com a minha amiga. Comemos peixe e bebemos vinho. No domingo fiquei em casa e dormi muito.',
        [['Wann ist der Autor aufgestanden?', 'Um neun Uhr'], ['Was haben sie am Abend gegessen?', 'Fisch'], ['Was hat der Autor am Sonntag gemacht?', 'Er ist zu Hause geblieben und hat viel geschlafen']]),
      exercicios(15, [
        lacuna('Ich ___ nach Berlin gefahren.', ['bin', 'habe', 'hat'], 'bin', 'Movimento: sein.'), lacuna('Er ___ zu Hause geblieben.', ['ist', 'hat', 'wird'], 'ist', '«bleiben» usa «sein».'), lacuna('Wir ___ Fisch gegessen.', ['haben', 'sind', 'hat'], 'haben', '«essen» usa «haben».'),
        lacuna('Ich ___ meinen Schlüssel verloren.', ['habe', 'bin', 'ist'], 'habe', '«verlieren» usa «haben».'), lacuna('Was ___ passiert?', ['ist', 'hat', 'wird'], 'ist', '«passieren» usa «sein».'), lacuna('Er ist um sieben Uhr ___. (aufstehen)', ['aufgestanden', 'geaufstanden', 'aufgestehen'], 'aufgestanden', 'Separável irregular.'),
        mc('Quando se usa «sein» no Perfekt?', ['movimento ou mudança de estado, e sein/bleiben', 'sempre com verbos irregulares', 'com todos os separáveis'], 'movimento ou mudança de estado, e sein/bleiben', 'Regra de bolso.'), mc('«Noch nie» significa:', ['nunca (até hoje)', 'ainda não', 'só uma vez'], 'nunca (até hoje)', 'Experiência de vida.'), mc('«dreimal» significa:', ['três vezes', 'três dias', 'o terceiro'], 'três vezes', 'Número + mal.'),
        ordem('Ordene: «Eu ainda não comi.»', ['Ich', 'habe', 'noch', 'nicht', 'gegessen'], 'Ich habe noch nicht gegessen.', '«noch nicht» antes do particípio.'), ordem('Ordene: «Você foi a Berlim?»', ['Bist', 'du', 'nach', 'Berlin', 'gefahren'], 'Bist du nach Berlin gefahren?', 'Auxiliar primeiro na pergunta.'),
        ouvir('Ich bin noch nie nach Berlin geflogen', ['Ich bin noch nie nach Berlin geflogen', 'Ich habe noch nie Berlin gesehen', 'Ich bin schon einmal geflogen'], 'Ich bin noch nie nach Berlin geflogen', '«noch nie» = nunca.'), ditado('Wir sind zu Hause geblieben', 'bleiben + sein.'),
        livre('Escreva 5 frases no Perfekt sobre uma viagem: um verbo com «sein», um com «haben», uma pergunta, uma negação e «noch nie».', 'Ich bin nach Berlin gefahren. Ich habe viel gesehen. Bist du auch dort gewesen? Ich habe nicht geschlafen. Ich bin noch nie geflogen.'),
      ]),
      producao(5, 'Grave-se contando o seu último fim de semana, no Perfekt, com «haben» e «sein».'),
    ]),
  ],
});
