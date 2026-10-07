import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 8, titulo: 'Comida: some, any e pedir num café', nivel: 'a1',
  objetivo: 'Nomear comidas e bebidas, separar o que se conta do que não se conta, usar some, any e a lot of, e fazer um pedido com «I\'d like».',
  nota: 'Você pede comida e bebida num café em inglês. Próxima aula: can e can\'t.',
  sessoes: [
    sessao('S1', 'Comidas e bebidas: contáveis e incontáveis', [
      revisao(5, 'Fale 4 frases sobre a sua família: o que cada pessoa tem e de quem são as coisas.'),
      palavras(8, [
        ['bread', 'bréd', 'pão', ''], ['water', 'uóter', 'água', ''], ['coffee', 'cófi', 'café', ''], ['milk', 'mílk', 'leite', ''], ['egg', 'ég', 'ovo', ''], ['rice', 'ráis', 'arroz', ''], ['sandwich', 'sénduitch', 'sanduíche', ''], ['juice', 'djus', 'suco', ''],
      ]),
      gramatica(12, 'Contáveis e incontáveis', 'PASSO 1: CONTÁVEIS você conta um a um: «an egg, two eggs», «a sandwich, three sandwiches». Eles têm plural e aceitam «a/an». PASSO 2: INCONTÁVEIS são massa ou líquido, sem plural: water, milk, coffee, bread, rice, juice. Nunca «a water» nem «waters» para a coisa em si. PASSO 3: para contar um incontável, use uma medida: «a glass of water», «a cup of coffee», «a slice of bread», «a bowl of rice». PASSO 4: o verbo de incontável é singular: «The milk is cold.» PASSO 5: «a lot of» serve para os dois: «a lot of eggs», «a lot of water». PASSO 6: «much» e «many»: «many» com contáveis, «much» com incontáveis, mais em frases negativas e perguntas: «How many eggs?», «How much milk?»', {
        tag: 'Substantivos',
        comparacao: 'em português quase tudo tem plural («pães», «águas», «cafés»). Em inglês, «bread», «water», «milk» e «rice» não se contam: não existe «breads» para o alimento.',
        tabela: [
          { tipo: 'Contável', exemplo: 'an egg / two eggs', pergunta: 'How many eggs?' }, { tipo: 'Contável', exemplo: 'a sandwich / three sandwiches', pergunta: 'How many sandwiches?' }, { tipo: 'Incontável', exemplo: 'water / a glass of water', pergunta: 'How much water?' }, { tipo: 'Incontável', exemplo: 'bread / a slice of bread', pergunta: 'How much bread?' },
        ],
        erros: [['I want a water.', 'I want some water. / I want a glass of water.', '«water» é incontável.'], ['I like breads.', 'I like bread.', 'Incontável não tem plural.'], ['How many milk?', 'How much milk?', 'Incontável pede «much».'], ['The rice are good.', 'The rice is good.', 'Incontável: verbo no singular.']],
      }),
      producao(5, 'Diga 4 coisas que você come ou bebe e quais são contáveis: «I eat eggs. I drink coffee.»'),
    ]),
    sessao('S2', 'Some, any e a lot of', [
      revisao(4, 'Diga se é contável ou incontável: egg, milk, sandwich, rice, juice, apple.'),
      palavras(6, [
        ['some', 'sâm', 'algum, um pouco de', ''], ['any', 'éni', 'nenhum, algum', ''], ['a lot of', 'a lót óv', 'muito(s)', ''], ['cheese', 'tchiz', 'queijo', ''], ['fruit', 'frut', 'fruta', ''], ['meat', 'miit', 'carne', ''],
      ]),
      gramatica(12, 'Some, any e a lot of', 'PASSO 1: «some» em frases AFIRMATIVAS, com incontáveis e contáveis no plural: «I have some milk.», «She has some eggs.» PASSO 2: «any» em NEGATIVAS e PERGUNTAS: «I don\'t have any milk.», «Do you have any eggs?» PASSO 3: nas negativas, «any» = nenhum: «There isn\'t any bread.» PASSO 4: exceção: em ofertas e pedidos, use «some»: «Would you like some coffee?» PASSO 5: «a lot of» = muito: «I drink a lot of water.» Em frases negativas, prefira «much/many»: «I don\'t eat much meat.» PASSO 6: não use «some/any» com singular contável: «a sandwich» (nunca «some sandwich»).', {
        tag: 'Quantidade',
        comparacao: 'em português «algum/nenhum» muda de forma. O inglês usa «some» para o positivo e «any» para negativa e pergunta; a palavra muda, o sentido de quantidade vem junto.',
        tabela: [
          { tipo: 'Afirmativa', exemplo: 'I have some milk.' }, { tipo: 'Negativa', exemplo: 'I don\'t have any milk.' }, { tipo: 'Pergunta', exemplo: 'Do you have any milk?' }, { tipo: 'Oferta', exemplo: 'Would you like some coffee?' },
        ],
        erros: [['I don\'t have some bread.', 'I don\'t have any bread.', 'Negativa pede «any».'], ['Do you have some eggs?', 'Do you have any eggs?', 'Pergunta comum pede «any».'], ['I want some sandwich.', 'I want a sandwich.', 'Singular contável leva «a/an».'], ['I eat much rice every day.', 'I eat a lot of rice every day.', 'Em frases afirmativas, use «a lot of».']],
      }),
      producao(8, 'Diga o que há e o que não há na sua geladeira: «There is some milk. There aren\'t any eggs.»'),
    ]),
    sessao('S3', 'Pedir num café', [
      revisao(4, 'Complete: «I have ___ bread. I don\'t have ___ milk. Do you have ___ eggs?»'),
      palavras(5, [
        ['menu', 'mêniu', 'cardápio', ''], ['order', 'órder', 'pedir; pedido', ''], ['bill', 'bíl', 'conta', ''], ['please', 'pliiz', 'por favor', ''], ['thanks', 'thénks', 'obrigado', ''],
      ]),
      gramatica(8, 'I\'d like: o pedido educado', 'PASSO 1: «I\'d like» = «eu gostaria». É o jeito educado de pedir: «I\'d like a coffee, please.» PASSO 2: «I want» existe, mas soa seco num restaurante. Prefira «I\'d like». PASSO 3: a pergunta do garçom: «What would you like?» ou «Can I get you something?» PASSO 4: peça a conta: «Can I have the bill, please?» PASSO 5: sempre feche com «please» e «thank you».', {
        tag: 'Pedidos',
        comparacao: 'em português dizemos «queria um café». O inglês traduz com «I\'d like», nunca «I want» em atendimento.',
        tabela: [
          { portugues: 'Queria um café, por favor.', ingles: 'I\'d like a coffee, please.', nota: 'pedido educado' }, { portugues: 'O que o senhor deseja?', ingles: 'What would you like?', nota: 'fala do garçom' }, { portugues: 'A conta, por favor.', ingles: 'Can I have the bill, please?', nota: 'pedido de conta' },
        ],
        erros: [['I want a coffee.', 'I\'d like a coffee, please.', 'Mais educado em atendimento.'], ['I\'d like a coffees.', 'I\'d like a coffee.', 'Depois de «a», singular.']],
      }),
      dialogo(8, 'At the café / No café', 'Um cliente pede o café da manhã.', [
        ['Waiter', 'Good morning. What would you like?', 'Bom dia. O que o senhor deseja?'], ['Customer', 'I\'d like a coffee and a sandwich, please.', 'Queria um café e um sanduíche, por favor.'], ['Waiter', 'Would you like some milk in your coffee?', 'O senhor quer um pouco de leite no café?'], ['Customer', 'Yes, please. And a glass of water.', 'Sim, por favor. E um copo de água.'], ['Waiter', 'Anything else?', 'Mais alguma coisa?'], ['Customer', 'No, thanks. Can I have the bill, please?', 'Não, obrigado. Pode trazer a conta, por favor?'],
      ]),
      producao(5, 'Faça o seu pedido num café em voz alta, do cumprimento à conta.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 8', [
      revisao(5, 'Diga 3 coisas que você tem, 2 que você não tem e faça 1 pergunta com «Do you have any…?»'),
      exercicios(20, [
        ouvir('I\'d like a coffee, please', ['I\'d like a coffee, please', 'I like a coffee, please', 'I\'d like a tea, please'], 'I\'d like a coffee, please', 'Ouça «I\'d like».'), ouvir('Do you have any milk', ['Do you have any milk', 'Do you have some milk', 'Do you have any eggs'], 'Do you have any milk', 'Ouça «any» e «milk».'), ditado('I don\'t have any bread', 'Escreva: I don\'t have any bread.'), ditado('Can I have the bill, please', 'Escreva: can I have the bill, please.'),
        mc('Qual palavra é incontável?', ['water', 'sandwich', 'egg'], 'water', 'Líquido não se conta um a um.'), mc('Qual frase está correta?', ['I don\'t have any milk.', 'I don\'t have some milk.', 'I don\'t have a milks.'], 'I don\'t have any milk.', 'Negativa pede «any».'), mc('Qual é o pedido mais educado?', ['I\'d like a coffee, please.', 'I want coffee.', 'Give me coffee.'], 'I\'d like a coffee, please.', '«I\'d like» + please.'), mc('Qual pergunta está correta?', ['How much milk?', 'How many milk?', 'How much eggs?'], 'How much milk?', 'Incontável: much.'),
        lacuna('I have ___ eggs. (alguns)', ['some', 'any', 'a'], 'some', 'Afirmativa: some.'), lacuna('Do you have ___ bread? (algum)', ['any', 'some', 'a'], 'any', 'Pergunta: any.'), lacuna('I drink ___ water. (muita)', ['a lot of', 'much of', 'many'], 'a lot of', 'Afirmativa: a lot of.'), lacuna('I\'d ___ a sandwich, please.', ['like', 'want', 'likes'], 'like', 'I\'d like.'),
        ordem('Ordene: «I\'d like a glass of water, please.»', ['I\'d', 'like', 'a', 'glass', 'of', 'water,', 'please'], 'I\'d like a glass of water, please.', 'I\'d like + a glass of + incontável.'), ordem('Ordene: «Do you have any eggs?»', ['Do', 'you', 'have', 'any', 'eggs'], 'Do you have any eggs?', 'Do + sujeito + have + any.'),
        livre('Escreva um pedido de 3 frases num café: o que quer, uma pergunta com «any» e a conta.', 'I\'d like a coffee and a sandwich, please. Do you have any milk? Can I have the bill, please?'),
      ]),
      producao(5, 'Encene com voz alta um pedido completo: garçom e cliente. Troque os papéis.'),
    ]),
  ],
});
