import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 6, titulo: 'Números, horas e dias', nivel: 'a1',
  objetivo: 'Contar até 100 e mais, dizer as horas, os dias da semana, os meses e a data.',
  nota: 'Você conta, diz as horas e marca dia e data. Próxima aula: comida, bebida e o acusativo.',
  sessoes: [
    sessao('S1', 'Os números até 100', [
      revisao(5, 'Conte de 0 a 20 em alemão, em voz alta, sem olhar.'),
      palavras(12, [
        ['zwanzig', 'tsvántsiç', 'vinte', 'twenty'], ['einundzwanzig', 'áin-unt-tsvántsiç', 'vinte e um', 'twenty-one'], ['dreißig', 'dráissiç', 'trinta', 'thirty'], ['vierzig', 'fírtsiç', 'quarenta', 'forty'], ['fünfzig', 'fünftsiç', 'cinquenta', 'fifty'], ['sechzig', 'zéçtsiç', 'sessenta', 'sixty'],
        ['siebzig', 'zíptsiç', 'setenta', 'seventy'], ['achtzig', 'árrtsiç', 'oitenta', 'eighty'], ['neunzig', 'nóintsiç', 'noventa', 'ninety'], ['hundert', 'húndert', 'cem', 'one hundred'], ['tausend', 'táuzent', 'mil', 'thousand'], ['die Telefonnummer', 'di telefón-nummer', 'número de telefone', 'phone number'],
      ]),
      gramatica(10, 'Números de 21 a 100', 'De 21 a 99 o alemão lê primeiro a unidade e depois a dezena, ligadas por «und»: 25 = fünfundzwanzig («cinco e vinte»). «Eins» vira «ein»: 21 = einundzwanzig. Cuidado com 16 e 60 (sechzehn, sechzig) e com 17 e 70 (siebzehn, siebzig): perdem letras. 30 é dreißig, com ß. As centenas somam-se: zweihundert (200), 101 = hunderteins. Mil é «tausend». Números de telefone costumam ser lidos dígito por dígito.', {
        tag: 'Números',
        comparacao: 'o português diz «vinte e cinco» (a dezena vem primeiro). O alemão diz «cinco e vinte».',
        tabela: [
          { numero: '21', alemao: 'einundzwanzig' }, { numero: '32', alemao: 'zweiunddreißig' }, { numero: '43', alemao: 'dreiundvierzig' }, { numero: '54', alemao: 'vierundfünfzig' }, { numero: '65', alemao: 'fünfundsechzig' }, { numero: '76', alemao: 'sechsundsiebzig' },
          { numero: '87', alemao: 'siebenundachtzig' }, { numero: '98', alemao: 'achtundneunzig' }, { numero: '100', alemao: 'hundert' }, { numero: '101', alemao: 'hunderteins' }, { numero: '1000', alemao: 'tausend' },
        ],
        erros: [['zwanzigfünf', 'fünfundzwanzig', 'A unidade vem primeiro, ligada por «und».'], ['sechszig', 'sechzig', '60 perde o -s de «sechs».']],
      }),
      producao(3, 'Conte de 10 em 10 até 100 e diga o seu número de telefone, dígito por dígito, em alemão.'),
    ]),
    sessao('S2', 'As horas', [
      revisao(5, 'Escreva os números de 21 a 30 por extenso, em alemão.'),
      palavras(8, [
        ['die Uhr', 'di ur', 'relógio; hora (no horário)', 'clock; o’clock'], ['die Stunde', 'di xtúnde', 'hora (duração)', 'hour'], ['die Minute', 'di minúte', 'minuto', 'minute'], ['halb', 'halp', 'meio, meia', 'half'], ['das Viertel', 'das fírtel', 'quarto', 'quarter'], ['vor', 'for', 'antes de, faltando', 'to, before'], ['nach', 'narr', 'depois de, passando', 'past, after'], ['Punkt', 'púnkt', 'em ponto', 'sharp'],
      ]),
      gramatica(12, 'As horas', 'Perguntas: «Wie spät ist es?» ou «Wie viel Uhr ist es?». Resposta: «Es ist acht Uhr.» Para a hora em que algo acontece: «Um wie viel Uhr?» — «Um acht Uhr.» Na fala do dia a dia: «fünf nach acht» (8h05), «Viertel nach acht» (8h15), «halb neun» (8h30), «Viertel vor neun» (8h45), «fünf vor neun» (8h55). Atenção: «halb neun» é MEIA HORA ANTES das nove, ou seja, 8h30. No registro oficial (trens, TV) usa-se o relógio de 24 horas: «acht Uhr dreißig», «vierzehn Uhr fünfzehn».', {
        tag: 'Tempo',
        comparacao: 'em português «oito e meia» olha para a hora que passou. Em alemão «halb neun» olha para a hora que vem, a das nove.',
        tabela: [
          { hora: '8:00', informal: 'acht Uhr', oficial: 'acht Uhr' }, { hora: '8:05', informal: 'fünf nach acht', oficial: 'acht Uhr fünf' }, { hora: '8:15', informal: 'Viertel nach acht', oficial: 'acht Uhr fünfzehn' }, { hora: '8:30', informal: 'halb neun', oficial: 'acht Uhr dreißig' },
          { hora: '8:45', informal: 'Viertel vor neun', oficial: 'acht Uhr fünfundvierzig' }, { hora: '14:30', informal: 'halb drei', oficial: 'vierzehn Uhr dreißig' },
        ],
        erros: [['halb drei = 3:30', 'halb drei = 2:30', '«halb drei» é meia hora antes das três.']],
      }),
      producao(5, 'Pergunte e responda: «Wie spät ist es? — Es ist halb drei.» Repita com 5 horas diferentes.'),
    ]),
    sessao('S3', 'Dias, meses e a data', [
      revisao(5, 'Diga as horas de 5 relógios imaginários, de manhã e de tarde.'),
      palavras(8, [
        ['Januar', 'iánuar', 'janeiro', 'January'], ['Februar', 'fébruar', 'fevereiro', 'February'], ['März', 'mérts', 'março', 'March'], ['April', 'apríl', 'abril', 'April'], ['Mai', 'mai', 'maio', 'May'], ['Juni', 'iúni', 'junho', 'June'],
        ['Juli', 'iúli', 'julho', 'July'], ['August', 'augúst', 'agosto', 'August'], ['September', 'zeptémber', 'setembro', 'September'], ['Oktober', 'október', 'outubro', 'October'], ['November', 'novémber', 'novembro', 'November'], ['Dezember', 'detsémber', 'dezembro', 'December'],
      ]),
      gramatica(12, 'Dias da semana, meses e a data', 'Os dias da semana e os meses são todos masculinos (der Montag, der Januar). «Am» + dia = na (segunda): «am Montag». «Im» + mês = em (janeiro): «im Mai». A data usa o ordinal com ponto: «der 5. Oktober» (der fünfte Oktober). Até 19, o ordinal é o número + -te (der vierte); 1, 3, 7 e 8 são especiais (erste, dritte, siebte, achte). A partir de 20, o número + -ste (der zwanzigste). Em «am 5. Oktober», lê-se «am fünften Oktober».', {
        tag: 'Tempo',
        tabelas: [
          { titulo: 'Dias da semana', linhas: [
            { dia: 'Montag', pt: 'segunda-feira', exemplo: 'am Montag' }, { dia: 'Dienstag', pt: 'terça-feira', exemplo: 'am Dienstag' }, { dia: 'Mittwoch', pt: 'quarta-feira', exemplo: 'am Mittwoch' }, { dia: 'Donnerstag', pt: 'quinta-feira', exemplo: 'am Donnerstag' },
            { dia: 'Freitag', pt: 'sexta-feira', exemplo: 'am Freitag' }, { dia: 'Samstag', pt: 'sábado', exemplo: 'am Samstag' }, { dia: 'Sonntag', pt: 'domingo', exemplo: 'am Sonntag' },
          ] },
          { titulo: 'Ordinais para a data', linhas: [
            { numero: '1.', alemao: 'der erste' }, { numero: '2.', alemao: 'der zweite' }, { numero: '3.', alemao: 'der dritte' }, { numero: '4.', alemao: 'der vierte' }, { numero: '5.', alemao: 'der fünfte' }, { numero: '7.', alemao: 'der siebte' }, { numero: '8.', alemao: 'der achte' }, { numero: '10.', alemao: 'der zehnte' }, { numero: '20.', alemao: 'der zwanzigste' }, { numero: '31.', alemao: 'der einunddreißigste' },
          ] },
        ],
        exemplos: [['Heute ist der 5. Oktober.', 'Hoje é 5 de outubro.'], ['Ich habe am 3. Mai Geburtstag.', 'Faço aniversário em 3 de maio.'], ['Im Juli ist es heiß.', 'Em julho faz calor.']],
      }),
      producao(5, 'Diga a data de hoje e a data do seu aniversário em alemão.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma frase com um dia da semana, um mês e uma hora.'),
      dialogo(9, 'Wann hast du Zeit? / Quando você tem tempo?', 'Dois amigos marcam um encontro.', [
        ['Lara', 'Hallo Tom! Hast du am Montag Zeit?', 'Oi, Tom! Você tem tempo na segunda?'], ['Tom', 'Am Montag? Nein, am Montag arbeite ich bis achtzehn Uhr.', 'Na segunda? Não, na segunda trabalho até as dezoito horas.'], ['Lara', 'Und am Dienstag?', 'E na terça?'],
        ['Tom', 'Am Dienstag habe ich um siebzehn Uhr Zeit.', 'Na terça tenho tempo às dezessete horas.'], ['Lara', 'Gut! Ich komme um halb sechs. Okay?', 'Ótimo! Eu chego às cinco e meia. Pode ser?'], ['Tom', 'Okay! Wie spät ist es jetzt?', 'Pode! Que horas são agora?'],
        ['Lara', 'Es ist zehn nach vier.', 'São quatro e dez.'], ['Tom', 'Dann bis Dienstag! Tschüs!', 'Então até terça! Tchau!'], ['Lara', 'Tschüs!', 'Tchau!'],
      ]),
      exercicios(11, [
        mc('45 em alemão:', ['fünfundvierzig', 'vierundfünfzig', 'vierzigfünf'], 'fünfundvierzig', 'A unidade vem primeiro.'), mc('21 em alemão:', ['einundzwanzig', 'zwanzigeins', 'einsundzwanzig'], 'einundzwanzig', 'eins vira ein.'), mc('60 em alemão:', ['sechzig', 'sechszig', 'sechszehn'], 'sechzig', '60 perde o -s.'),
        mc('«halb drei» é:', ['2:30', '3:30', '3:00'], '2:30', 'Meia hora antes das três.'), mc('«Viertel nach acht» é:', ['8:15', '7:45', '8:45'], '8:15', 'Quinze minutos depois das oito.'), lacuna('Es ist ___ neun. (8:45)', ['Viertel vor', 'Viertel nach', 'halb'], 'Viertel vor', 'Quinze minutos antes das nove.'),
        lacuna('Ich arbeite ___ Montag.', ['am', 'im', 'um'], 'am', 'Dia da semana: am.'), lacuna('Der Kurs beginnt ___ Mai.', ['im', 'am', 'um'], 'im', 'Mês: im.'), lacuna('Ich habe ___ 5. Oktober Geburtstag.', ['am', 'im', 'um'], 'am', 'Data: am.'),
        ordem('Ordene: «Na terça tenho tempo.»', ['Am', 'Dienstag', 'habe', 'ich', 'Zeit'], 'Am Dienstag habe ich Zeit.', 'O verbo fica na 2ª posição.'), ouvir('Es ist halb neun', ['Es ist halb neun', 'Es ist neun Uhr', 'Es ist Viertel nach neun'], 'Es ist halb neun', 'halb neun = 8:30.'),
        ditado('Um wie viel Uhr?', 'Pergunta pela hora de um evento.'), livre('Escreva 4 frases: a hora de agora, um dia da semana, um mês e a data de hoje.', 'Es ist halb drei. Am Montag arbeite ich. Im Mai habe ich Urlaub. Heute ist der 5. Oktober.'),
      ]),
      producao(5, 'Grave-se: diga a hora, o dia de hoje e a data do seu aniversário.'),
    ]),
  ],
});
