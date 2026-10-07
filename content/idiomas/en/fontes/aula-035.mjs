import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 35, titulo: 'Phrasal verbs de uso diário (2)', nivel: 'a2',
  objetivo: 'Dominar mais 20 phrasal verbs úteis no trabalho, em casa e em viagens, usando-os em frases completas e entendendo quando o mesmo verbo muda de sentido.',
  nota: 'Você amplia o seu repertório de phrasal verbs. Próxima aula: viagens e o primeiro condicional.',
  sessoes: [
    sessao('S1', 'Trabalho e rotina', [
      revisao(5, 'Descreva a sua manhã com 5 phrasal verbs.'),
      palavras(8, [
        ['set up', 'sét âp', 'configurar, montar', ''], ['fill out', 'fíl áut', 'preencher', ''], ['sign up', 'sáin âp', 'inscrever-se', ''], ['run out of', 'rân áut óv', 'ficar sem', ''], ['carry on', 'kéri ón', 'continuar', ''], ['check in', 'tchék ín', 'fazer check-in', ''], ['check out', 'tchék áut', 'fazer check-out', ''], ['work out', 'uãrk áut', 'malhar; dar certo', ''],
      ]),
      gramatica(12, 'Phrasal verbs úteis no dia a dia', 'PASSO 1: no trabalho: «set up a meeting» (marcar uma reunião), «fill out a form» (preencher um formulário), «sign up for a course» (se inscrever num curso). PASSO 2: em casa: «run out of milk» (acabar o leite): «We have run out of milk.» PASSO 3: «carry on» = continuar: «Carry on working.» PASSO 4: em viagem: «check in» (hotel, aeroporto), «check out» (sair do hotel). PASSO 5: «work out» tem dois sentidos: exercitar-se («I work out three times a week») e dar certo («It didn\'t work out»). PASSO 6: «run out of» é inseparável: o objeto vem depois.', {
        tag: 'Phrasal verbs',
        comparacao: 'em português «acabar o leite» e «ficar sem leite» exprimem a mesma coisa. Em inglês, «run out of milk» é o jeito natural. Tente aprender cada phrasal verb dentro de uma frase inteira.',
        tabela: [
          { phrasal: 'fill out', sentido: 'preencher', exemplo: 'Please fill out this form.' }, { phrasal: 'sign up', sentido: 'inscrever-se', exemplo: 'I signed up for English classes.' }, { phrasal: 'run out of', sentido: 'ficar sem', exemplo: 'We ran out of sugar.' }, { phrasal: 'check in', sentido: 'fazer check-in', exemplo: 'We checked in at 3 p.m.' },
        ],
        erros: [['Please fill the form.', 'Please fill out the form.', 'fill out = preencher.'], ['We finished the milk.', 'We ran out of milk.', 'Mais natural em inglês.'], ['I signed up in a course.', 'I signed up for a course.', 'sign up for.'], ['I work out it.', 'I work out. / It worked out.', 'Verbo sem objeto nos dois sentidos.']],
      }),
      producao(5, 'Use 5 phrasal verbs desta aula para falar do seu trabalho ou estudo.'),
    ]),
    sessao('S2', 'Mais verbos e mais sentidos', [
      revisao(4, 'Diga o phrasal verb: preencher, inscrever-se, ficar sem, continuar.'),
      palavras(6, [
        ['take care of', 'têik kér óv', 'cuidar de', ''], ['get along with', 'guét alóng uíth', 'dar-se bem com', ''], ['grow up', 'grôu âp', 'crescer', ''], ['bring up', 'bring âp', 'criar (filhos); mencionar', ''], ['break down', 'brêik dáun', 'quebrar (máquina)', ''], ['call back', 'kól bék', 'ligar de volta', ''],
      ]),
      gramatica(12, 'Phrasal verbs com mais de um sentido', 'PASSO 1: um phrasal verb pode ter vários sentidos. «Pick up» = pegar do chão, buscar alguém, aprender rápido. «Take off» = tirar a roupa, decolar. «Get up» = levantar da cama. PASSO 2: o contexto decide: «The plane took off.» (decolou), «Take off your shoes.» (tire os sapatos). PASSO 3: «get along with» = dar-se bem: «I get along with my colleagues.» PASSO 4: «grow up» = crescer (pessoa), «bring up» = criar: «She was brought up in Rio.» PASSO 5: «break down» = quebrar (carro, máquina) ou desabar emocionalmente. PASSO 6: «call back» = ligar de volta: «I\'ll call you back.» PASSO 7: três partículas: «get along with», «look forward to», «run out of». Mantenha as três juntas.', {
        tag: 'Sentidos',
        comparacao: 'em português um verbo costuma ter um núcleo de sentido. Em inglês, o mesmo phrasal verb pode dizer coisas bem diferentes. Pergunte-se: o que está acontecendo nesta frase?',
        tabela: [
          { phrasal: 'take off', sentido_1: 'tirar a roupa', sentido_2: 'decolar' }, { phrasal: 'pick up', sentido_1: 'pegar do chão', sentido_2: 'buscar alguém' }, { phrasal: 'get along with', sentido_1: 'dar-se bem', sentido_2: '—' }, { phrasal: 'break down', sentido_1: 'quebrar (máquina)', sentido_2: 'desabar' },
        ],
        erros: [['I get along my boss.', 'I get along with my boss.', 'with é parte do phrasal verb.'], ['She grew in Rio.', 'She grew up in Rio.', 'grow up.'], ['I\'ll return you the call.', 'I\'ll call you back.', 'Natural: call back.'], ['The car broke.', 'The car broke down.', 'break down = quebrar (pane).']],
      }),
      producao(8, 'Escreva 6 frases com get along with, grow up, call back, take care of, break down e bring up.'),
    ]),
    sessao('S3', 'Phrasal verbs numa história', [
      revisao(4, 'Dê dois sentidos de «pick up» e dois de «take off».'),
      palavras(5, [
        ['look forward to', 'lúk fórward tu', 'esperar ansiosamente', ''], ['put off', 'pút óf', 'adiar', ''], ['cut down on', 'câ dáun ón', 'reduzir', ''], ['catch up', 'kétch âp', 'pôr em dia', ''], ['hang out', 'héng áut', 'sair juntos, passar tempo', ''],
      ]),
      gramatica(8, 'Look forward to e outros com -ing', 'PASSO 1: «look forward to» leva -ing, porque o «to» é preposição: «I\'m looking forward to seeing you.» PASSO 2: «put off» = adiar: «Don\'t put off your homework.» PASSO 3: «cut down on» = reduzir: «I\'m cutting down on sugar.» PASSO 4: «catch up» = pôr em dia, conversar depois de um tempo: «Let\'s catch up soon.» PASSO 5: «hang out» = passar tempo juntos de modo casual: «We hang out on weekends.»', {
        tag: 'Phrasal verbs com -ing',
        comparacao: 'em português «espero te ver» usa o infinitivo. Em inglês, «I look forward to seeing you» usa o -ing, porque «to» faz parte do phrasal verb.',
        tabela: [
          { phrasal: 'look forward to', exemplo: 'I\'m looking forward to seeing you.' }, { phrasal: 'cut down on', exemplo: 'I\'m cutting down on coffee.' }, { phrasal: 'catch up', exemplo: 'Let\'s catch up soon.' }, { phrasal: 'hang out', exemplo: 'We hang out on weekends.' },
        ],
        erros: [['I look forward to see you.', 'I look forward to seeing you.', '-ing depois de «to».'], ['I cut down sugar.', 'I cut down on sugar.', 'Faltou «on».']],
      }),
      texto(8, 'Catching up with a friend / Pondo a conversa em dia', 'Hi Ana! I\'m looking forward to seeing you next week. We haven\'t caught up for months. I grew up in a small town, but now I live in a big city. I get along with my neighbors, and we hang out on weekends. I signed up for a gym because I want to work out more. I\'m also cutting down on sugar. Last week my car broke down, so I took the bus. Call me back when you can!',
        'Oi, Ana! Estou ansioso para te ver na semana que vem. Faz meses que não colocamos a conversa em dia. Cresci numa cidade pequena, mas agora moro numa cidade grande. Me dou bem com os vizinhos, e saímos juntos no fim de semana. Me inscrevi numa academia porque quero malhar mais. Também estou reduzindo o açúcar. Na semana passada o meu carro quebrou, então fui de ônibus. Me ligue de volta quando puder!',
        [['What is the person looking forward to?', 'Seeing Ana next week.'], ['Where did the person grow up?', 'In a small town.'], ['Why did the person sign up for a gym?', 'To work out more.'], ['What happened to the car?', 'It broke down.']]),
      producao(5, 'Escreva uma mensagem de 6 frases a um amigo, usando 5 phrasal verbs desta aula.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 35', [
      revisao(5, 'Conte em voz alta a sua semana com 6 phrasal verbs.'),
      exercicios(20, [
        ouvir('I\'m looking forward to seeing you', ['I\'m looking forward to seeing you', 'I\'m looking forward to see you', 'I\'m looking forward seeing you'], 'I\'m looking forward to seeing you', 'Ouça «to seeing».'), ouvir('We ran out of milk', ['We ran out of milk', 'We run out of milk', 'We ran out the milk'], 'We ran out of milk', 'Ouça «ran out of».'), ditado('Please fill out this form', 'Escreva: please fill out this form.'), ditado('I\'ll call you back', 'Escreva: I\'ll call you back.'),
        mc('Qual é o significado de «run out of»?', ['ficar sem', 'correr', 'sair'], 'ficar sem', 'run out of.'), mc('Qual frase está correta?', ['I\'m looking forward to seeing you.', 'I\'m looking forward to see you.', 'I look forward see you.'], 'I\'m looking forward to seeing you.', '-ing depois de to.'), mc('Qual é o phrasal verb para «preencher»?', ['fill out', 'fill in on', 'fill away'], 'fill out', 'fill out.'), mc('Qual frase usa «take off» com o sentido de decolar?', ['The plane took off.', 'Take off your shoes.', 'He took off his coat.'], 'The plane took off.', 'Avião: decolar.'),
        lacuna('Please ___ out this form. (preencher)', ['fill', 'put', 'make'], 'fill', 'fill out.'), lacuna('I get along ___ my boss.', ['with', 'to', 'for'], 'with', 'get along with.'), lacuna('She grew ___ in Rio.', ['up', 'down', 'on'], 'up', 'grow up.'), lacuna('I\'m cutting ___ on sugar. (reduzindo)', ['down', 'up', 'off'], 'down', 'cut down on.'),
        ordem('Ordene: «I\'ll call you back later.»', ['I\'ll', 'call', 'you', 'back', 'later'], 'I\'ll call you back later.', 'call + pronome + back.'), ordem('Ordene: «We ran out of sugar.»', ['We', 'ran', 'out', 'of', 'sugar'], 'We ran out of sugar.', 'ran out of + nome.'),
        livre('Escreva 4 frases usando 4 phrasal verbs diferentes desta aula.', 'I signed up for a course. We ran out of milk. I get along with my boss. I\'m looking forward to seeing you.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o seu fim de semana usando 8 phrasal verbs.'),
    ]),
  ],
});
