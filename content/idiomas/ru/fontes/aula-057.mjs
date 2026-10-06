import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 57, titulo: 'Discurso indireto e perguntas com «ли»', nivel: 'b1',
  objetivo: 'Relatar o que alguém disse com «что», transformar perguntas em discurso indireto (с «ли» e palavras interrogativas) e ordens com «чтобы», mantendo o tempo verbal da fala original.',
  nota: 'Você conta o que os outros disseram, perguntaram e pediram. Próxima aula: gerúndio.',
  sessoes: [
    sessao('S1', 'Relatar o que se disse', [
      revisao(5, 'Escreva 5 frases com «чтобы»: desejo, pedido, finalidade e «чтобы не».'),
      palavras(8, [['сказать', 'skazát', 'dizer', 'to say'], ['ответить', 'atvétit', 'responder', 'to answer'], ['сообщить', 'sapashchít', 'comunicar', 'to report'], ['рассказать', 'raskazát', 'contar', 'to tell'], ['объяснить', 'abyasnít', 'explicar', 'to explain'], ['думать', 'dúmat', 'pensar', 'to think'], ['считать', 'schitát', 'achar', 'to consider'], ['обещать', 'abishchát', 'prometer', 'to promise']]),
      gramatica(12, 'O tempo do discurso indireto não muda', 'PASSO 1: no DISCURSO DIRETO, você repete as palavras entre aspas: «Он сказал: «Я приду»». No INDIRETO, você relata com «ЧТО»: «Он сказал, что придёт». PASSO 2: o russo MANTÉM o tempo da fala original, mesmo que «сказал» esteja no passado: presente → presente («Она сказала, что живёт в Москве»); passado → passado («Он сказал, что был дома»); futuro → futuro («Он сказал, что придёт»). PASSO 3: os PRONOMES mudam conforme quem fala: «Он сказал: «Я устал»» → «Он сказал, что (он) устал». PASSO 4: a VÍRGULA antes de «что» é obrigatória. PASSO 5: verbos de relato: «сказать, ответить, сообщить, рассказать, объяснить, обещать» + «что». PASSO 6: «думать, считать» também usam «что»: «Я думаю, что он дома».', {
        tag: 'Frase',
        comparacao: 'o português muda o tempo («ele disse que estava cansado», e não «está»). O russo NÃO muda: «он сказал, что устал» pode ser lido como «ele disse que está cansado», conforme o contexto.',
        tabela: [
          { direto: 'Он сказал: «Я приду».', indireto: 'Он сказал, что придёт.' }, { direto: 'Она сказала: «Я живу в Москве».', indireto: 'Она сказала, что живёт в Москве.' }, { direto: 'Он сказал: «Я был дома».', indireto: 'Он сказал, что был дома.' }, { direto: 'Анна ответила: «Я занята».', indireto: 'Анна ответила, что она занята.' }, { direto: 'Он пообещал: «Я позвоню».', indireto: 'Он пообещал, что позвонит.' },
        ],
        erros: [['Он сказал что придёт.', 'Он сказал, что придёт.', 'A vírgula antes de «что» é obrigatória.'], ['Она сказала, что жила в Москве. (ela vive lá)', 'Она сказала, что живёт в Москве.', 'O tempo da fala original se mantém: presente.'], ['Он сказал, что я приду. (ele virá)', 'Он сказал, что придёт.', 'O pronome muda com quem fala: «он».']],
      }),
      producao(5, 'Relate 5 falas: «Он сказал, что придёт. Она сказала, что живёт в Москве. Он ответил, что занят.»'),
    ]),
    sessao('S2', 'Relatar perguntas: ли e palavras interrogativas', [
      revisao(5, 'Transforme 5 falas diretas em indiretas com «что».'),
      palavras(8, [['спросить', 'sprasít', 'perguntar', 'to ask'], ['интересно', 'intirésna', 'curioso, interessante', 'curious'], ['узнать', 'uznát', 'descobrir, saber', 'to find out'], ['не знаю', 'nye znáyu', 'não sei', "I don't know"], ['ли', 'li', 'se (pergunta indireta)', 'whether'], ['когда', 'kagdá', 'quando', 'when'], ['где', 'gdye', 'onde', 'where'], ['сколько', 'skólka', 'quanto', 'how much']]),
      gramatica(12, 'Perguntas no discurso indireto', 'PASSO 1: pergunta COM palavra interrogativa: a própria palavra introduz a oração: «Он спросил: «Где ты живёшь?»» → «Он спросил, где я живу». PASSO 2: pergunta de SIM OU NÃO: use «ЛИ» depois da palavra que se questiona: «Он спросил: «Ты придёшь?»» → «Он спросил, придёшь ли ты». PASSO 3: «ли» vem logo depois do verbo ou da palavra em foco, nunca no início: «Не знаю, есть ли здесь банк» (e não «ли есть здесь банк»). PASSO 4: use «ли» depois de «не знаю, интересно, узнать, спросить»: «Интересно, придёт ли он». PASSO 5: o tempo se mantém: «Он спросил, когда я приеду» (futuro). PASSO 6: «ЕСЛИ» é «se» condicional; «ЛИ» é «se» da pergunta indireta: «Если придёшь, позвони» × «Не знаю, придёшь ли ты».', {
        tag: 'Frase',
        tabela: [
          { direto: 'Он спросил: «Где ты живёшь?»', indireto: 'Он спросил, где я живу.' }, { direto: 'Она спросила: «Когда ты приедешь?»', indireto: 'Она спросила, когда я приеду.' }, { direto: 'Он спросил: «Ты придёшь?»', indireto: 'Он спросил, приду ли я.' }, { direto: 'Я не знаю: «Здесь есть банк?»', indireto: 'Я не знаю, есть ли здесь банк.' }, { direto: 'Мне интересно: «Он придёт?»', indireto: 'Мне интересно, придёт ли он.' },
        ],
        erros: [['Он спросил, ты придёшь.', 'Он спросил, придёшь ли ты.', 'Pergunta de sim ou não: «ли».'], ['Я не знаю, ли есть здесь банк.', 'Я не знаю, есть ли здесь банк.', '«ли» vem depois da palavra em foco.'], ['Не знаю, если он придёт.', 'Не знаю, придёт ли он.', '«если» é condicional; pergunta indireta usa «ли».']],
      }),
      producao(5, 'Relate perguntas: «Он спросил, где я живу. Она спросила, приду ли я. Я не знаю, есть ли здесь банк.»'),
    ]),
    sessao('S3', 'Relatar pedidos e conversas', [
      revisao(5, 'Escreva 5 perguntas indiretas: 3 com palavra interrogativa e 2 com «ли».'),
      gramatica(10, 'Ordens e conselhos no discurso indireto', 'PASSO 1: uma ORDEM ou um PEDIDO vira «чтобы» + passado: «Он сказал: «Позвони мне»» → «Он сказал, чтобы я позвонил ему». PASSO 2: com «просить, советовать, требовать»: «Врач посоветовал, чтобы я отдыхал». PASSO 3: o pronome muda: «мне» → «ему / ей», «я» → «он / она». PASSO 4: o prazo e o tempo seguem a fala: «Он сказал, чтобы я пришёл через неделю». PASSO 5: ao relatar uma conversa inteira, alterne «что», «ли» e «чтобы».', {
        tag: 'Frase',
        tabela: [
          { direto: 'Он сказал: «Позвони мне».', indireto: 'Он сказал, чтобы я позвонил ему.' }, { direto: 'Врач сказал: «Отдыхайте».', indireto: 'Врач посоветовал, чтобы я отдыхал.' }, { direto: 'Мама попросила: «Купи хлеб».', indireto: 'Мама попросила, чтобы я купил хлеб.' }, { direto: 'Он сказал: «Приходи через неделю».', indireto: 'Он сказал, чтобы я пришёл через неделю.' },
        ],
      }),
      dialogo(8, 'Что сказал врач? / O que disse o médico?', 'Lena pergunta a Max como foi a consulta.', [
        ['Лена', 'Что сказал врач?', 'O que o médico disse?'], ['Макс', 'Он сказал, что я простудился и мне нужно отдыхать.', 'Disse que estou resfriado e preciso descansar.'], ['Лена', 'Он спросил, давно ли ты болеешь?', 'Ele perguntou se faz tempo que você está doente?'],
        ['Макс', 'Да, он спросил, когда у меня начала болеть голова.', 'Sim, perguntou quando a minha cabeça começou a doer.'], ['Лена', 'А что он посоветовал?', 'E o que ele aconselhou?'], ['Макс', 'Он посоветовал, чтобы я пил много чая и не ходил на работу.', 'Aconselhou que eu beba muito chá e não vá ao trabalho.'],
        ['Лена', 'Он не сказал, когда ты придёшь снова?', 'Ele não disse quando você volta?'], ['Макс', 'Он сказал, чтобы я пришёл через неделю.', 'Disse que eu volte daqui a uma semana.'],
      ]),
      producao(7, 'Relate em voz alta uma conversa que você teve ontem: o que disseram, o que perguntaram e o que pediram.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases relatando uma conversa.'),
      exercicios(20, [
        lacuna('Он сказал, ___ придёт.', ['что', 'чтобы', 'ли'], 'что', '«что» introduz a fala indireta.'), lacuna('Она спросила, ___ я живу.', ['где', 'ли', 'что'], 'где', 'Palavra interrogativa mantida.'), lacuna('Он спросил, придёшь ___ ты.', ['ли', 'если', 'что'], 'ли', 'Pergunta de sim ou não: «ли».'),
        lacuna('Я не знаю, есть ___ здесь банк.', ['ли', 'если', 'что'], 'ли', '«ли» depois da palavra em foco.'), lacuna('Мама попросила, ___ я купил хлеб.', ['чтобы', 'что', 'ли'], 'чтобы', 'Pedido: «чтобы» + passado.'), lacuna('Она сказала, что ___ в Москве. (ela vive)', ['живёт', 'жила', 'будет жить'], 'живёт', 'O tempo da fala original se mantém.'),
        mc('«Он сказал, что придёт» mantém:', ['o futuro da fala original', 'o passado', 'o presente'], 'o futuro da fala original', 'Sem mudança de tempo.'), mc('Para pergunta de sim ou não indireta, use:', ['ли', 'если', 'чтобы'], 'ли', '«ли» = se.'), mc('«Если» e «ли» diferem porque:', ['«если» é condicional e «ли» é pergunta', 'são iguais', '«ли» é condicional'], '«если» é condicional e «ли» é pergunta', 'Dois «se».'),
        ordem('Ordene: «Он спросил, где я живу.»', ['Он', 'спросил', 'где', 'я', 'живу'], 'Он спросил, где я живу.', 'Palavra interrogativa mantida.'), ouvir('Я не знаю, есть ли здесь банк', ['Я не знаю, есть ли здесь банк', 'Я знаю, что здесь есть банк', 'Если здесь есть банк'], 'Я не знаю, есть ли здесь банк', '«ли» após o verbo.'), ditado('Он сказал, чтобы я позвонил ему', 'Ordem: «чтобы» + passado.'),
        livre('Escreva 5 frases em discurso indireto: uma com «что», uma com palavra interrogativa, uma com «ли», uma com «чтобы» e uma com «не знаю, ли».', 'Он сказал, что придёт. Она спросила, где я живу. Он спросил, приду ли я. Мама попросила, чтобы я позвонил. Не знаю, есть ли здесь банк.'),
      ]),
      producao(5, 'Grave-se contando o que uma pessoa disse, perguntou e pediu.'),
    ]),
  ],
});
