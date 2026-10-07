import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 11, titulo: 'O tempo: horas, dias e meses', nivel: 'a1',
  objetivo: 'Dizer e entender as horas, os dias da semana, os meses e as datas, e combinar um horário.',
  nota: 'Você diz as horas e marca um encontro. Próxima aula: rotina e preposições de tempo.',
  sessoes: [
    sessao('S1', 'As horas', [
      revisao(5, 'Explique em voz alta como chegar a um lugar da cidade usando «Turn left» e «Go straight».'),
      palavras(8, [
        ['o\'clock', 'oclók', 'em ponto', ''], ['half past', 'hárf pést', 'e meia', ''], ['quarter past', 'cuórter pést', 'e quinze', ''], ['quarter to', 'cuórter tu', 'quinze para', ''], ['past', 'pést', 'depois de', ''], ['to', 'tu', 'para', ''], ['noon', 'nun', 'meio-dia', ''], ['midnight', 'mídnait', 'meia-noite', ''],
      ]),
      gramatica(12, 'Dizer as horas', 'PASSO 1: pergunte: «What time is it?» ou «What\'s the time?» PASSO 2: hora cheia: «It\'s three o\'clock.» PASSO 3: até 30 minutos, use «past» (depois de): «It\'s ten past three» (3h10), «It\'s quarter past three» (3h15), «It\'s half past three» (3h30). PASSO 4: depois de 30, use «to» (para): «It\'s ten to four» (3h50), «It\'s quarter to four» (3h45). PASSO 5: forma digital, comum e simples: «three ten», «three fifteen», «three forty-five». PASSO 6: «a.m.» é manhã e «p.m.» é tarde e noite: «7 a.m.», «7 p.m.» PASSO 7: o sujeito é sempre «it»: «It\'s five o\'clock», nunca «They are five o\'clock».', {
        tag: 'Horas',
        comparacao: 'em português dizemos «são três horas» (plural) e «é uma hora». O inglês usa sempre «it is»: «It\'s three o\'clock», «It\'s one o\'clock».',
        tabela: [
          { hora: '3:00', ingles: 'It\'s three o\'clock.' }, { hora: '3:15', ingles: 'It\'s quarter past three.' }, { hora: '3:30', ingles: 'It\'s half past three.' }, { hora: '3:45', ingles: 'It\'s quarter to four.' }, { hora: '3:50', ingles: 'It\'s ten to four.' },
        ],
        erros: [['They are three o\'clock.', 'It\'s three o\'clock.', 'Hora = «it is».'], ['It\'s half to three.', 'It\'s half past two.', '«Half» é sempre «past».'], ['It\'s ten for four.', 'It\'s ten to four.', '«to» = para.']],
      }),
      producao(5, 'Diga a hora de 6 relógios diferentes, usando «past» e «to».'),
    ]),
    sessao('S2', 'Dias da semana e meses', [
      revisao(4, 'Diga em inglês: 7:30, 8:15, 9:45, 12:00, 6:10.'),
      palavras(6, [
        ['Monday', 'mândei', 'segunda-feira', ''], ['Tuesday', 'tiuzdei', 'terça-feira', ''], ['Wednesday', 'uénzdei', 'quarta-feira', ''], ['Thursday', 'thãrzdei', 'quinta-feira', ''], ['Friday', 'fráidei', 'sexta-feira', ''], ['Saturday', 'sérurdei', 'sábado', ''],
      ]),
      palavras(6, [
        ['Sunday', 'sândei', 'domingo', ''], ['January', 'djénhiueri', 'janeiro', ''], ['March', 'márch', 'março', ''], ['June', 'djun', 'junho', ''], ['September', 'septémber', 'setembro', ''], ['December', 'disémber', 'dezembro', ''],
      ]),
      gramatica(8, 'Dias e meses levam letra maiúscula', 'PASSO 1: em inglês, dias da semana e meses SEMPRE começam com letra maiúscula: «Monday», «June». PASSO 2: para um dia, use «on»: «on Monday», «on Fridays» (todas as sextas). PASSO 3: para um mês, use «in»: «in June». PASSO 4: ano: «in 2026». PASSO 5: para uma data com dia, use «on»: «on June 5th». PASSO 6: ordinais: first (1st), second (2nd), third (3rd), fourth (4th)… fifth, sixth, seventh, eighth, ninth, tenth.', {
        tag: 'Datas',
        comparacao: 'em português, dias e meses vão em letra minúscula («segunda», «junho»). O inglês exige maiúscula, e «em» vira «on» (dia) ou «in» (mês).',
        tabela: [
          { portugues: 'na segunda-feira', ingles: 'on Monday', nota: 'dia → on' }, { portugues: 'em junho', ingles: 'in June', nota: 'mês → in' }, { portugues: 'em 5 de junho', ingles: 'on June 5th', nota: 'data → on' }, { portugues: 'em 2026', ingles: 'in 2026', nota: 'ano → in' },
        ],
        erros: [['monday', 'Monday', 'Maiúscula.'], ['in Monday', 'on Monday', 'Dia pede «on».'], ['on June', 'in June', 'Mês pede «in».'], ['at Friday', 'on Friday', '«at» não vai com dia.']],
      }),
      producao(6, 'Diga o dia, o mês e o ano de hoje e o aniversário de 3 pessoas: «My birthday is in…»'),
    ]),
    sessao('S3', 'Marcar um encontro', [
      revisao(4, 'Complete: «The class is ___ Monday. My birthday is ___ June. The film is ___ 8 o\'clock.»'),
      palavras(5, [
        ['today', 'tudêi', 'hoje', ''], ['tomorrow', 'tumórou', 'amanhã', ''], ['yesterday', 'iésterdei', 'ontem', ''], ['morning', 'mórnin', 'manhã', ''], ['evening', 'ívnin', 'noite (começo)', ''],
      ]),
      gramatica(8, 'At, on, in com o tempo', 'PASSO 1: «at» é para HORA exata: «at 8 o\'clock», «at noon», «at night». PASSO 2: «on» é para DIA e DATA: «on Monday». PASSO 3: «in» é para PARTES DO DIA, MESES e ANOS: «in the morning», «in the evening», «in June». PASSO 4: exceção que vale decorar: «at night» (e não «in the night»). PASSO 5: «today», «tomorrow» e «yesterday» NÃO levam preposição: «I work today.», «See you tomorrow.»', {
        tag: 'Preposições de tempo',
        comparacao: 'em português «às 8 horas», «na segunda», «em junho», «de manhã» usam preposições diferentes, mas parecidas. O inglês escolhe por tamanho do tempo: hora (at), dia (on), período longo (in).',
        tabela: [
          { preposicao: 'at', uso: 'hora', exemplo: 'at 8 o\'clock' }, { preposicao: 'on', uso: 'dia e data', exemplo: 'on Friday' }, { preposicao: 'in', uso: 'parte do dia, mês, ano', exemplo: 'in the morning' }, { preposicao: 'sem preposição', uso: 'today, tomorrow, yesterday', exemplo: 'tomorrow' },
        ],
        erros: [['I work in Monday.', 'I work on Monday.', 'Dia: on.'], ['See you at tomorrow.', 'See you tomorrow.', 'Sem preposição.'], ['I study at the morning.', 'I study in the morning.', 'Parte do dia: in.']],
      }),
      dialogo(8, 'Let\'s meet! / Vamos nos encontrar!', 'Dois amigos marcam um encontro.', [
        ['Lucy', 'Are you free on Saturday?', 'Você está livre no sábado?'], ['Ben', 'Yes, I am. What time?', 'Estou. Que horas?'], ['Lucy', 'Let\'s meet at half past six in the evening.', 'Vamos nos encontrar às seis e meia da tarde.'], ['Ben', 'Sorry, I can\'t. I work until seven. What about quarter past seven?', 'Desculpe, não posso. Trabalho até as sete. Que tal sete e quinze?'], ['Lucy', 'Perfect. See you on Saturday!', 'Perfeito. Até sábado!'], ['Ben', 'See you!', 'Até lá!'],
      ]),
      producao(5, 'Marque em voz alta um encontro: dia, hora e lugar.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 11', [
      revisao(5, 'Diga a hora agora, o dia de hoje e o mês do seu aniversário.'),
      exercicios(20, [
        ouvir('It\'s quarter past three', ['It\'s quarter past three', 'It\'s quarter to three', 'It\'s half past three'], 'It\'s quarter past three', 'Ouça «past».'), ouvir('See you on Friday', ['See you on Friday', 'See you in Friday', 'See you on Sunday'], 'See you on Friday', 'Ouça «Friday».'), ditado('What time is it', 'Escreva: what time is it.'), ditado('My birthday is in June', 'Escreva: my birthday is in June.'),
        mc('Como se diz 3:30?', ['It\'s half past three.', 'It\'s half to three.', 'It\'s three half.'], 'It\'s half past three.', 'Half past.'), mc('Qual frase está correta?', ['I work on Monday.', 'I work in Monday.', 'I work at Monday.'], 'I work on Monday.', 'Dia: on.'), mc('Qual preposição vai com «the morning»?', ['in', 'on', 'at'], 'in', 'Parte do dia: in.'), mc('Qual está correto?', ['See you tomorrow.', 'See you at tomorrow.', 'See you in tomorrow.'], 'See you tomorrow.', 'Sem preposição.'),
        lacuna('It\'s ___ to four. (quinze para)', ['quarter', 'half', 'ten'], 'quarter', '3:45 = quarter to four.'), lacuna('The class is ___ 8 o\'clock.', ['at', 'on', 'in'], 'at', 'Hora: at.'), lacuna('My birthday is ___ June.', ['in', 'on', 'at'], 'in', 'Mês: in.'), lacuna('I study ___ Fridays.', ['on', 'in', 'at'], 'on', 'Dia: on.'),
        ordem('Ordene: «What time is it?»', ['What', 'time', 'is', 'it'], 'What time is it?', 'What time + is it.'), ordem('Ordene: «The class is at nine o\'clock.»', ['The', 'class', 'is', 'at', 'nine', 'o\'clock'], 'The class is at nine o\'clock.', 'at + hora.'),
        livre('Escreva 4 frases: a hora de uma aula, um dia, um mês e um encontro marcado.', 'The class is at eight o\'clock. I study on Mondays. My birthday is in June. See you tomorrow.'),
      ]),
      producao(5, 'Diga em voz alta a sua agenda de amanhã com horas e dias.'),
    ]),
  ],
});
