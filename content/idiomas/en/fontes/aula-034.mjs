import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 34, titulo: 'Phrasal verbs de uso diário (1)', nivel: 'a2',
  objetivo: 'Entender e usar 20 phrasal verbs mais comuns do dia a dia, saber onde o objeto vai (separáveis e inseparáveis), e distinguir significados literais e figurados.',
  nota: 'Você entende e usa os phrasal verbs do dia a dia. Próxima aula: mais phrasal verbs.',
  sessoes: [
    sessao('S1', 'O que são phrasal verbs', [
      revisao(5, 'Conte uma experiência sua usando o present perfect e o passado simples.'),
      palavras(8, [
        ['wake up', 'uêik âp', 'acordar', ''], ['get up', 'guét âp', 'levantar-se', ''], ['turn on', 'tãrn ón', 'ligar', ''], ['turn off', 'tãrn óf', 'desligar', ''], ['put on', 'pút ón', 'vestir', ''], ['take off', 'têik óf', 'tirar, decolar', ''], ['sit down', 'sít dáun', 'sentar', ''], ['stand up', 'sténd âp', 'levantar', ''],
      ]),
      gramatica(12, 'Phrasal verbs: verbo + partícula', 'PASSO 1: um phrasal verb é um VERBO + uma PARTÍCULA (up, down, on, off, out, in, away) que juntos têm um significado próprio: «turn on» (ligar). PASSO 2: o sentido muda com a partícula: «turn on» (ligar), «turn off» (desligar), «turn up» (aumentar), «turn down» (diminuir ou recusar). PASSO 3: SEPARÁVEIS: o objeto pode ir entre o verbo e a partícula: «Turn the TV on» ou «Turn on the TV». PASSO 4: se o objeto for um PRONOME, ele DEVE ficar no meio: «Turn it on», nunca «Turn on it». PASSO 5: INSEPARÁVEIS: o verbo e a partícula ficam juntos: «look after the children», «look after them». PASSO 6: sem objeto, o phrasal verb é intransitivo: «Wake up!», «Sit down.»', {
        tag: 'Phrasal verbs',
        comparacao: 'em português «ligar a TV» e «desligar a TV» são verbos diferentes. Em inglês o mesmo verbo muda com a partícula: «turn on» e «turn off». Aprenda o conjunto, não o verbo sozinho.',
        tabela: [
          { tipo: 'separável', exemplo: 'Turn the light on. / Turn on the light.', pronome: 'Turn it on.' }, { tipo: 'separável', exemplo: 'Put your coat on.', pronome: 'Put it on.' }, { tipo: 'inseparável', exemplo: 'Look after the children.', pronome: 'Look after them.' }, { tipo: 'sem objeto', exemplo: 'Wake up!', pronome: '—' },
        ],
        erros: [['Turn on it.', 'Turn it on.', 'Pronome no meio.'], ['Look the children after.', 'Look after the children.', 'Inseparável.'], ['I wake up him at 7.', 'I wake him up at 7.', 'Pronome no meio.'], ['Turn the TV of.', 'Turn the TV off.', '«off» (desligar), não «of».']],
      }),
      producao(5, 'Diga 8 ações da sua manhã usando phrasal verbs: wake up, get up, put on, turn off…'),
    ]),
    sessao('S2', 'Phrasal verbs do cotidiano', [
      revisao(4, 'Complete: «Turn ___ the lights. Put ___ your shoes. Take ___ your coat.»'),
      palavras(6, [
        ['look for', 'lúk fór', 'procurar', ''], ['look at', 'lúk ét', 'olhar para', ''], ['pick up', 'pik âp', 'pegar, buscar', ''], ['give up', 'guív âp', 'desistir', ''], ['find out', 'fáind áut', 'descobrir', ''], ['go out', 'gôu áut', 'sair', ''],
      ]),
      gramatica(12, 'Mais phrasal verbs de todo dia', 'PASSO 1: «look for» = procurar (algo que perdeu); «look at» = olhar; «look after» = cuidar de; «look up» = pesquisar. PASSO 2: «pick up» = pegar do chão, buscar alguém: «I\'ll pick you up at six.» PASSO 3: «give up» = desistir: «Don\'t give up!» PASSO 4: «find out» = descobrir uma informação: «I found out the answer.» PASSO 5: «go out» = sair (para se divertir): «We go out on Fridays.» PASSO 6: «come in» = entrar, «come back» = voltar, «come over» = aparecer em casa. PASSO 7: o mesmo phrasal verb pode ter vários sentidos: «pick up» = pegar do chão OU aprender algo rápido («pick up a language»).', {
        tag: 'Uso diário',
        comparacao: 'em português «descobrir», «desistir» e «procurar» são verbos únicos. Em inglês são frases fixas de duas palavras: «find out», «give up», «look for».',
        tabela: [
          { phrasal: 'look for', sentido: 'procurar', exemplo: 'I\'m looking for my keys.' }, { phrasal: 'give up', sentido: 'desistir', exemplo: 'Don\'t give up.' }, { phrasal: 'find out', sentido: 'descobrir', exemplo: 'I found out the truth.' }, { phrasal: 'go out', sentido: 'sair', exemplo: 'We go out on Fridays.' }, { phrasal: 'pick up', sentido: 'buscar', exemplo: 'I\'ll pick you up.' },
        ],
        erros: [['I\'m searching my keys.', 'I\'m looking for my keys.', 'Natural: look for.'], ['She gave up it.', 'She gave it up.', 'Pronome no meio.'], ['I found the answer out it.', 'I found out the answer.', 'Verbo + particula + objeto.'], ['He looked the word.', 'He looked up the word.', 'Faltou a partícula.']],
      }),
      producao(8, 'Use 6 phrasal verbs em frases suas: look for, look at, pick up, give up, find out, go out.'),
    ]),
    sessao('S3', 'Phrasal verbs em situações reais', [
      revisao(4, 'Substitua pelo phrasal verb: «desistir», «descobrir», «procurar», «buscar alguém».'),
      palavras(5, [
        ['come in', 'câm in', 'entrar', ''], ['come back', 'câm bék', 'voltar', ''], ['hurry up', 'rãri âp', 'apressar-se', ''], ['slow down', 'slôu dáun', 'diminuir o ritmo', ''], ['calm down', 'cárm dáun', 'acalmar-se', ''],
      ]),
      gramatica(8, 'Reagir e pedir com phrasal verbs', 'PASSO 1: imperativos com phrasal verbs são muito comuns: «Come in!», «Sit down!», «Hurry up!», «Calm down!» PASSO 2: para soar educado, acrescente «please» ou use «Could you…?»: «Could you turn the music down, please?» PASSO 3: respostas: «Sure, I\'ll turn it down.» PASSO 4: perguntas: «Can you pick me up?», «Did you find out?»', {
        tag: 'Phrasal verbs em ação',
        comparacao: 'em português «calma» e «vamos logo» são expressões curtas. Em inglês, «calm down» e «hurry up» fazem o mesmo papel, mas podem soar bruscos se faltar educação.',
        tabela: [
          { informal: 'Hurry up!', educado: 'Could you hurry up, please?' }, { informal: 'Calm down!', educado: 'Please try to calm down.' }, { informal: 'Turn it down!', educado: 'Could you turn it down, please?' },
        ],
        erros: [['Please to sit down.', 'Please sit down.', 'Sem «to».'], ['Turn down it.', 'Turn it down.', 'Pronome no meio.']],
      }),
      dialogo(8, 'Getting ready / Preparando-se para sair', 'Lara e Tom se arrumam.', [
        ['Lara', 'Tom, wake up! It\'s seven o\'clock.', 'Tom, acorda! São sete horas.'], ['Tom', 'Five more minutes, please.', 'Mais cinco minutos, por favor.'], ['Lara', 'No, get up now! I\'ll pick you up at eight.', 'Não, levante agora! Passo para te buscar às oito.'], ['Tom', 'OK, OK. I\'m looking for my keys. Have you seen them?', 'Está bem. Estou procurando as chaves. Você viu?'], ['Lara', 'Look on the table. And turn off the TV, please.', 'Olhe na mesa. E desligue a TV, por favor.'], ['Tom', 'I\'ll turn it off. Don\'t give up on me!', 'Eu desligo. Não desista de mim!'],
      ]),
      producao(5, 'Escreva um diálogo de 6 falas entre duas pessoas se preparando para sair, usando 5 phrasal verbs.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 34', [
      revisao(5, 'Conte a sua manhã de hoje usando 6 phrasal verbs.'),
      exercicios(20, [
        ouvir('Turn it off, please', ['Turn it off, please', 'Turn off it, please', 'Turn it on, please'], 'Turn it off, please', 'Ouça «turn it off».'), ouvir('I\'m looking for my keys', ['I\'m looking for my keys', 'I\'m looking at my keys', 'I\'m looking after my keys'], 'I\'m looking for my keys', 'Ouça «for».'), ditado('Don\'t give up', 'Escreva: don\'t give up.'), ditado('Come in and sit down', 'Escreva: come in and sit down.'),
        mc('Qual frase está correta?', ['Turn it on.', 'Turn on it.', 'Turn it up on.'], 'Turn it on.', 'Pronome no meio.'), mc('Qual é o significado de «give up»?', ['desistir', 'dar', 'acordar'], 'desistir', 'give up = desistir.'), mc('Qual é o significado de «look for»?', ['procurar', 'olhar', 'cuidar de'], 'procurar', 'look for.'), mc('Qual frase está correta?', ['She gave it up.', 'She gave up it.', 'She gave it to up.'], 'She gave it up.', 'Pronome no meio.'),
        lacuna('Please turn ___ the lights. (desligue)', ['off', 'of', 'out of'], 'off', 'turn off.'), lacuna('I\'ll ___ you up at six. (buscar)', ['pick', 'take', 'bring'], 'pick', 'pick up.'), lacuna('Don\'t ___ up! (desista)', ['give', 'make', 'get'], 'give', 'give up.'), lacuna('I\'m looking ___ my keys.', ['for', 'at', 'after'], 'for', 'look for.'),
        ordem('Ordene: «Could you turn it down, please?»', ['Could', 'you', 'turn', 'it', 'down,', 'please'], 'Could you turn it down, please?', 'turn + it + down.'), ordem('Ordene: «I woke up late today.»', ['I', 'woke', 'up', 'late', 'today'], 'I woke up late today.', 'woke up + advérbio.'),
        livre('Escreva 5 frases com phrasal verbs sobre a sua manhã.', 'I wake up at six. I get up at six thirty. I put on my clothes. I turn off the TV. I go out at eight.'),
      ]),
      producao(5, 'Descreva em 1 minuto um dia comum usando 8 phrasal verbs diferentes.'),
    ]),
  ],
});
