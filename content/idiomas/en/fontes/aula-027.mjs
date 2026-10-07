import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 27, titulo: 'Quantidade: much, many, few, little e enough', nivel: 'a2',
  objetivo: 'Falar de quantidades com many/much, a few/a little, enough, too much/too many e how much/how many, escolhendo certo entre contável e incontável.',
  nota: 'Você fala de quantidades com precisão. Próxima aula: conselhos e obrigações.',
  sessoes: [
    sessao('S1', 'Many e much', [
      revisao(5, 'Compare duas cidades com comparativo e superlativo.'),
      palavras(8, [
        ['many', 'méni', 'muitos (contável)', ''], ['much', 'mâtch', 'muito (incontável)', ''], ['a lot of', 'a lót óv', 'muito(s)', ''], ['how many', 'háu méni', 'quantos', ''], ['how much', 'háu mâtch', 'quanto', ''], ['money', 'mâni', 'dinheiro', ''], ['time', 'táim', 'tempo', ''], ['people', 'píipl', 'pessoas', ''],
      ]),
      gramatica(12, 'Many, much e a lot of', 'PASSO 1: «many» vai com CONTÁVEIS no plural: «many books», «many people». PASSO 2: «much» vai com INCONTÁVEIS: «much money», «much time». PASSO 3: em frases AFIRMATIVAS, prefira «a lot of» para os dois: «I have a lot of books.», «She has a lot of money.» PASSO 4: «many» e «much» aparecem sobretudo em NEGATIVAS e PERGUNTAS: «I don\'t have much time.», «Do you have many friends?» PASSO 5: perguntas: «How many books?», «How much water?» PASSO 6: «too many» e «too much» = demais: «too many people» (gente demais), «too much sugar» (açúcar demais).', {
        tag: 'Quantidade',
        comparacao: 'em português «muito» serve para tudo («muito dinheiro», «muitos livros»), só com a concordância. O inglês escolhe a palavra pelo substantivo: many (conta) e much (não conta).',
        tabela: [
          { tipo: 'contável', forma: 'many / how many', exemplo: 'How many books do you have?' }, { tipo: 'incontável', forma: 'much / how much', exemplo: 'How much money do you have?' }, { tipo: 'afirmativa', forma: 'a lot of', exemplo: 'I have a lot of friends.' }, { tipo: 'demais', forma: 'too many / too much', exemplo: 'There are too many people.' },
        ],
        erros: [['How much books?', 'How many books?', 'Contável: many.'], ['I don\'t have many money.', 'I don\'t have much money.', 'Incontável: much.'], ['I have much friends.', 'I have a lot of friends.', 'Afirmativa: a lot of.'], ['too much people', 'too many people', 'people é contável.']],
      }),
      producao(5, 'Faça 4 perguntas com «How many…?» e «How much…?» e responda.'),
    ]),
    sessao('S2', 'A few, a little e enough', [
      revisao(4, 'Complete: «How ___ eggs? How ___ milk? I have a ___ of friends.»'),
      palavras(6, [
        ['a few', 'a fiu', 'alguns', ''], ['a little', 'a lítl', 'um pouco', ''], ['few', 'fiu', 'poucos (quase nenhum)', ''], ['little', 'lítl', 'pouco (quase nada)', ''], ['enough', 'inâf', 'suficiente', ''], ['not enough', 'nót inâf', 'insuficiente', ''],
      ]),
      gramatica(12, 'A few, a little, few, little e enough', 'PASSO 1: «a few» = alguns, com contáveis: «I have a few friends here.» PASSO 2: «a little» = um pouco, com incontáveis: «I have a little time.» PASSO 3: sem o «a», o sentido é negativo: «few friends» (quase nenhum amigo, pouco), «little time» (quase sem tempo). PASSO 4: «enough» = suficiente e vem ANTES do substantivo: «enough money», «enough chairs». PASSO 5: com adjetivo, vem DEPOIS: «The room is big enough.», «He is old enough to drive.» PASSO 6: «not enough» = insuficiente: «There aren\'t enough chairs.»', {
        tag: 'Quantidade',
        comparacao: 'em português «pouco» e «um pouco» também mudam o sentido: «tenho pouco tempo» (quase sem) × «tenho um pouco de tempo» (tenho algum). O inglês marca essa diferença com «a».',
        tabela: [
          { forma: 'a few', tipo: 'contável', exemplo: 'I have a few friends.' }, { forma: 'a little', tipo: 'incontável', exemplo: 'I have a little time.' }, { forma: 'few / little', tipo: 'quase nenhum', exemplo: 'Few people came.' }, { forma: 'enough', tipo: 'suficiente', exemplo: 'I have enough money.' },
        ],
        erros: [['I have a few money.', 'I have a little money.', 'Incontável: a little.'], ['I have a little friends.', 'I have a few friends.', 'Contável: a few.'], ['The room is enough big.', 'The room is big enough.', 'Com adjetivo, enough depois.'], ['I have money enough.', 'I have enough money.', 'Com nome, enough antes.']],
      }),
      producao(8, 'Diga 6 frases sobre quantidades na sua casa e na sua vida, com a few, a little, enough e too much.'),
    ]),
    sessao('S3', 'Na cozinha e na feira', [
      revisao(4, 'Diga a diferença entre «I have a few friends» e «I have few friends».'),
      palavras(5, [
        ['recipe', 'résipi', 'receita', ''], ['sugar', 'chúguer', 'açúcar', ''], ['salt', 'sólt', 'sal', ''], ['flour', 'fláuer', 'farinha', ''], ['bottle', 'bótl', 'garrafa', ''],
      ]),
      gramatica(8, 'Medidas para incontáveis', 'PASSO 1: para contar incontáveis, use uma medida: «a cup of coffee», «a glass of water», «a slice of bread», «a bottle of milk», «a piece of cake», «a bag of rice». PASSO 2: a medida vai ao plural, o incontável não: «two cups of coffee», «three bottles of water». PASSO 3: pergunta: «How many bottles of water?» (a medida é contável). PASSO 4: «a piece of advice» (um conselho), «a piece of news» (uma notícia): «advice» e «news» são incontáveis em inglês.', {
        tag: 'Medidas',
        comparacao: 'em português «uma notícia», «um conselho», «uma informação» são contáveis. Em inglês, «news», «advice» e «information» são incontáveis: «a piece of news».',
        tabela: [
          { portugues: 'duas xícaras de café', ingles: 'two cups of coffee', nota: 'medida no plural' }, { portugues: 'uma fatia de pão', ingles: 'a slice of bread', nota: '' }, { portugues: 'uma boa notícia', ingles: 'a piece of good news', nota: 'news = incontável' }, { portugues: 'um conselho', ingles: 'a piece of advice', nota: 'advice = incontável' },
        ],
        erros: [['two coffees of cup', 'two cups of coffee', 'Medida primeiro.'], ['an advice', 'a piece of advice', '«advice» é incontável.'], ['The news are good.', 'The news is good.', 'news: singular.'], ['informations', 'information', 'Sem plural.']],
      }),
      dialogo(8, 'At the market / Na feira', 'Anna compra ingredientes para um bolo.', [
        ['Anna', 'Excuse me, I need some flour and sugar. How much is a bag of flour?', 'Com licença, preciso de farinha e açúcar. Quanto custa um pacote de farinha?'], ['Carlos', 'Two dollars. How many bags do you want?', 'Dois dólares. Quantos pacotes a senhora quer?'], ['Anna', 'Just one. Do you have any eggs?', 'Só um. O senhor tem ovos?'], ['Carlos', 'Yes, but there are only a few left.', 'Tenho, mas sobraram só alguns.'], ['Anna', 'That\'s enough. I need six eggs and a little salt.', 'Basta. Preciso de seis ovos e um pouco de sal.'], ['Carlos', 'Here you are. Anything else?', 'Aqui está. Mais alguma coisa?'],
      ]),
      producao(5, 'Escreva uma lista de compras de 8 itens com medidas e quantidades.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 27', [
      revisao(5, 'Diga o que você tem de sobra e o que falta na sua casa.'),
      exercicios(20, [
        ouvir('How many bottles of water do you want', ['How many bottles of water do you want', 'How much bottles of water do you want', 'How many waters do you want'], 'How many bottles of water do you want', 'Ouça «how many».'), ouvir('I don\'t have much time', ['I don\'t have much time', 'I don\'t have many time', 'I have much time'], 'I don\'t have much time', 'Ouça «much».'), ditado('There are too many people', 'Escreva: there are too many people.'), ditado('I have enough money', 'Escreva: I have enough money.'),
        mc('Qual frase está correta?', ['How many books do you have?', 'How much books do you have?', 'How many book do you have?'], 'How many books do you have?', 'Contável: many.'), mc('Qual frase está correta?', ['I have a little time.', 'I have a few time.', 'I have a little times.'], 'I have a little time.', 'Incontável: a little.'), mc('Qual frase está correta?', ['The room is big enough.', 'The room is enough big.', 'The room enough is big.'], 'The room is big enough.', 'Adjetivo + enough.'), mc('Qual frase está correta?', ['The news is good.', 'The news are good.', 'The new is good.'], 'The news is good.', 'news: singular.'),
        lacuna('I don\'t have ___ money. (muito)', ['much', 'many', 'a few'], 'much', 'Incontável.'), lacuna('There are ___ people here. (gente demais)', ['too many', 'too much', 'much many'], 'too many', 'people: contável.'), lacuna('I need two ___ of coffee.', ['cups', 'cup', 'coffees'], 'cups', 'Medida no plural.'), lacuna('She has a ___ friends here. (alguns)', ['few', 'little', 'much'], 'few', 'Contável: a few.'),
        ordem('Ordene: «How much money do you have?»', ['How', 'much', 'money', 'do', 'you', 'have'], 'How much money do you have?', 'How much + incontável.'), ordem('Ordene: «There are not enough chairs.»', ['There', 'are', 'not', 'enough', 'chairs'], 'There are not enough chairs.', 'enough antes do nome.'),
        livre('Escreva 4 frases com much, many, a few e enough sobre a sua casa ou o seu trabalho.', 'I don\'t have much time. I have a few friends here. There are many people at work. I have enough money.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você tem em excesso e o que falta na sua vida.'),
    ]),
  ],
});
