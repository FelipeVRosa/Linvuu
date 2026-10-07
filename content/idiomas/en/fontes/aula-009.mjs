import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 9, titulo: 'Habilidades: can e can\'t', nivel: 'a1',
  objetivo: 'Dizer o que você sabe e consegue fazer, o que não consegue, pedir e dar permissão com «can», e falar de habilidades e de idiomas.',
  nota: 'Você fala do que sabe fazer e faz pedidos com «can». Próxima aula: imperativo e direções.',
  sessoes: [
    sessao('S1', 'Can e can\'t: o que eu consigo fazer', [
      revisao(5, 'Faça um pedido num café em voz alta, com «I\'d like», «some» e «any».'),
      palavras(8, [
        ['swim', 'suím', 'nadar', ''], ['cook', 'cúk', 'cozinhar', ''], ['drive', 'dráiv', 'dirigir', ''], ['sing', 'síng', 'cantar', ''], ['dance', 'dénss', 'dançar', ''], ['play', 'plêi', 'jogar, tocar', ''], ['speak', 'spiik', 'falar', ''], ['run', 'rân', 'correr', ''],
      ]),
      gramatica(12, 'Can e can\'t', 'PASSO 1: «can» expressa habilidade: «I can swim.» (sei nadar / consigo nadar). PASSO 2: «can» é igual para TODAS as pessoas, sem «-s»: «He can swim», nunca «He cans». PASSO 3: depois de «can», o verbo fica na forma simples, sem «to»: «She can cook», nunca «She can to cook». PASSO 4: negativa: «can\'t» (cannot): «I can\'t drive.» PASSO 5: pergunta: inverta, sem «do»: «Can you swim?» Resposta curta: «Yes, I can.» / «No, I can\'t.» PASSO 6: na fala, «can» é fraco («kn»), e «can\'t» é forte e longo («cént»). Ouça a diferença nos exemplos.', {
        tag: 'Modal can',
        comparacao: 'em português usamos «saber» (sei nadar) ou «conseguir» (consigo abrir). O inglês usa um só verbo, «can», para os dois.',
        tabela: [
          { afirmativa: 'I can swim.', negativa: 'I can\'t swim.', pergunta: 'Can you swim?' }, { afirmativa: 'She can cook.', negativa: 'She can\'t cook.', pergunta: 'Can she cook?' }, { afirmativa: 'They can dance.', negativa: 'They can\'t dance.', pergunta: 'Can they dance?' },
        ],
        erros: [['He cans swim.', 'He can swim.', '«can» não leva -s.'], ['She can to cook.', 'She can cook.', 'Sem «to» depois de «can».'], ['Do you can swim?', 'Can you swim?', '«can» não usa «do».'], ['I no can drive.', 'I can\'t drive.', 'Negativa: can\'t.']],
      }),
      producao(5, 'Diga 4 coisas que você sabe fazer e 2 que não sabe: «I can cook. I can\'t drive.»'),
    ]),
    sessao('S2', 'Pedidos e permissão com can', [
      revisao(4, 'Diga 3 frases com «can» e 3 com «can\'t» sobre pessoas que você conhece.'),
      palavras(6, [
        ['open', 'ôupen', 'abrir', ''], ['close', 'clôuz', 'fechar', ''], ['help', 'hélp', 'ajudar; ajuda', ''], ['use', 'iuz', 'usar', ''], ['sit', 'sít', 'sentar', ''], ['wait', 'uêit', 'esperar', ''],
      ]),
      gramatica(12, 'Can para pedir e para pedir permissão', 'PASSO 1: «Can you…?» pede algo a OUTRA pessoa: «Can you help me?» PASSO 2: «Can I…?» pede PERMISSÃO para você mesmo: «Can I sit here?» PASSO 3: resposta: «Sure.», «Of course.» (claro), «Sorry, I can\'t.» PASSO 4: para ser mais educado, «Could you…?» e «Could I…?» (mais formal). PASSO 5: «please» no fim suaviza: «Can you open the window, please?» PASSO 6: não confunda «Can you help me?» (pedido) com «Can you help?» (você consegue ajudar?). O contexto decide.', {
        tag: 'Pedidos',
        comparacao: 'em português «pode abrir a janela?» e «posso sentar?» usam «poder». O inglês usa «can» (e «could» para soar mais educado).',
        tabela: [
          { portugues: 'Você pode me ajudar?', ingles: 'Can you help me?', nota: 'pedido a alguém' }, { portugues: 'Posso sentar aqui?', ingles: 'Can I sit here?', nota: 'permissão' }, { portugues: 'Poderia abrir a porta, por favor?', ingles: 'Could you open the door, please?', nota: 'mais formal' },
        ],
        erros: [['Can I to sit here?', 'Can I sit here?', 'Sem «to».'], ['You can help me?', 'Can you help me?', 'Pergunta inverte: can + sujeito.'], ['Can you to open the door?', 'Can you open the door?', 'Sem «to».']],
      }),
      producao(8, 'Faça 5 pedidos em voz alta, usando «Can you…?», «Can I…?» e «Could you…?»'),
    ]),
    sessao('S3', 'Habilidades e idiomas', [
      revisao(4, 'Complete: «She ___ swim. He ___ drive. ___ you cook?»'),
      palavras(5, [
        ['well', 'uél', 'bem', ''], ['very well', 'véri uél', 'muito bem', ''], ['a little', 'a lítl', 'um pouco', ''], ['language', 'lénguidj', 'idioma', ''], ['guitar', 'guitár', 'violão, guitarra', ''],
      ]),
      gramatica(8, 'Como dizer o quanto você sabe', 'PASSO 1: «well» vem DEPOIS do verbo: «I can swim well.» PASSO 2: «very well» = muito bem. «a little» = um pouco: «I can speak a little English.» PASSO 3: «I can speak Portuguese and English.», sem artigo antes do idioma. PASSO 4: pergunta: «Can you speak Spanish?» → «Yes, a little.» PASSO 5: «good» é adjetivo (She is a good cook); «well» é advérbio (She cooks well). Não troque.', {
        tag: 'Habilidade',
        comparacao: 'em português «cozinha bem» e «é boa cozinheira» são duas ideias; o inglês as separa: «cooks well» (advérbio) e «a good cook» (adjetivo).',
        tabela: [
          { portugues: 'Ele canta bem.', ingles: 'He sings well.', nota: 'advérbio depois do verbo' }, { portugues: 'Ele é um bom cantor.', ingles: 'He is a good singer.', nota: 'adjetivo antes do nome' }, { portugues: 'Falo um pouco de inglês.', ingles: 'I can speak a little English.', nota: 'a little' },
        ],
        erros: [['She cooks good.', 'She cooks well.', '«well» é o advérbio.'], ['I can speak the English.', 'I can speak English.', 'Sem artigo antes do idioma.']],
      }),
      texto(8, 'What can Kate do? / O que a Kate sabe fazer?', 'Kate is my cousin. She can speak three languages: Portuguese, English and a little Spanish. She can play the guitar very well and she can sing. She can\'t drive, but she can ride a bike. Her brother Dan can cook and he can swim, but he can\'t dance. I can\'t play the guitar, but I can dance.',
        'Kate é minha prima. Ela fala três idiomas: português, inglês e um pouco de espanhol. Toca violão muito bem e canta. Não sabe dirigir, mas anda de bicicleta. O irmão dela, Dan, cozinha e nada, mas não dança. Eu não toco violão, mas danço.',
        [['How many languages can Kate speak?', 'Three.'], ['Can Kate drive?', 'No, she can\'t.'], ['What can Dan do?', 'He can cook and swim.'], ['Can Dan dance?', 'No, he can\'t.']]),
      producao(5, 'Escreva 5 frases sobre o que você e uma pessoa que conhece sabem e não sabem fazer.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 9', [
      revisao(5, 'Diga o que você sabe fazer bem, o que sabe um pouco e o que não sabe.'),
      exercicios(20, [
        ouvir('She can swim very well', ['She can swim very well', 'She can\'t swim very well', 'He can swim very well'], 'She can swim very well', 'Ouça «can» fraco.'), ouvir('I can\'t drive', ['I can\'t drive', 'I can drive', 'I can\'t dive'], 'I can\'t drive', 'Ouça o «can\'t» forte.'), ditado('Can you help me', 'Escreva: can you help me.'), ditado('He can cook', 'Escreva: he can cook.'),
        mc('Qual frase está correta?', ['She can swim.', 'She cans swim.', 'She can to swim.'], 'She can swim.', 'Sem -s e sem «to».'), mc('Como se faz a pergunta «Você sabe cozinhar?»', ['Can you cook?', 'Do you can cook?', 'You can cook?'], 'Can you cook?', '«can» não usa «do».'), mc('Qual é a forma correta?', ['He sings well.', 'He sings good.', 'He sing well.'], 'He sings well.', 'well = advérbio.'), mc('Qual é o pedido educado?', ['Could you open the window, please?', 'Open the window.', 'You open window?'], 'Could you open the window, please?', 'Could + please.'),
        lacuna('I ___ drive. (não consigo)', ['can\'t', 'can', 'don\'t'], 'can\'t', 'Negativa: can\'t.'), lacuna('___ you speak Spanish?', ['Can', 'Do', 'Are'], 'Can', 'Can + sujeito.'), lacuna('She plays the guitar ___. (bem)', ['well', 'good', 'goods'], 'well', 'Advérbio.'), lacuna('I can speak a ___ English. (um pouco)', ['little', 'few', 'lot'], 'little', 'a little.'),
        ordem('Ordene: «Can you speak English?»', ['Can', 'you', 'speak', 'English'], 'Can you speak English?', 'Can + sujeito + verbo.'), ordem('Ordene: «She can\'t drive a car.»', ['She', 'can\'t', 'drive', 'a', 'car'], 'She can\'t drive a car.', 'can\'t + verbo simples.'),
        livre('Escreva 4 frases: duas com «can», uma com «can\'t» e uma pergunta com «Can you…?»', 'I can cook. I can swim a little. I can\'t drive. Can you play the guitar?'),
      ]),
      producao(5, 'Descreva em 1 minuto o que você sabe fazer e o que gostaria de aprender.'),
    ]),
  ],
});
