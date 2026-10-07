import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 15, titulo: 'Compras: roupas, preços e números grandes', nivel: 'a1',
  objetivo: 'Nomear roupas e cores, perguntar preços com «How much», usar números até 1000, e comprar numa loja com «this one», «that one» e «I\'ll take it».',
  nota: 'Você compra uma peça de roupa e entende o preço. Próxima aula: presente contínuo.',
  sessoes: [
    sessao('S1', 'Roupas e cores', [
      revisao(5, 'Descreva uma pessoa: idade, físico e jeito de ser.'),
      palavras(8, [
        ['shirt', 'chãrt', 'camisa', ''], ['pants', 'pénts', 'calça', ''], ['dress', 'dréss', 'vestido', ''], ['shoes', 'chuz', 'sapatos', ''], ['jacket', 'djékit', 'jaqueta', ''], ['red', 'réd', 'vermelho', ''], ['blue', 'blu', 'azul', ''], ['black', 'blék', 'preto', ''],
      ]),
      gramatica(12, 'Roupas no plural e cores', 'PASSO 1: algumas roupas têm DUAS partes e ficam sempre no plural: «pants» (calça), «jeans», «shorts», «glasses» (óculos). PASSO 2: o verbo vai ao plural: «My pants are new.» PASSO 3: para contar, use «a pair of»: «a pair of jeans», «two pairs of shoes». PASSO 4: a cor vem ANTES do substantivo, sem plural: «a red shirt», «two red shirts». PASSO 5: com «to be», a cor fica depois: «The shirt is red.» PASSO 6: «wear» = vestir/usar: «She is wearing a blue dress.» (você verá mais na próxima aula).', {
        tag: 'Roupas',
        comparacao: 'em português «uma calça» é singular. Em inglês, «pants» é plural: «a pair of pants». O mesmo vale para «jeans», «shorts» e «glasses».',
        tabela: [
          { portugues: 'uma calça', ingles: 'a pair of pants', nota: 'sempre plural' }, { portugues: 'duas camisas vermelhas', ingles: 'two red shirts', nota: 'cor antes, sem plural' }, { portugues: 'Os sapatos são pretos.', ingles: 'The shoes are black.', nota: 'cor depois do be' }, { portugues: 'meus óculos', ingles: 'my glasses', nota: 'plural' },
        ],
        erros: [['a jeans', 'a pair of jeans', 'jeans é plural.'], ['My pants is new.', 'My pants are new.', 'Verbo no plural.'], ['two reds shirts', 'two red shirts', 'A cor não vai ao plural.'], ['a shirt red', 'a red shirt', 'Cor antes.']],
      }),
      producao(5, 'Descreva em voz alta 5 peças de roupa que você tem, com a cor.'),
    ]),
    sessao('S2', 'Números grandes e preços', [
      revisao(4, 'Diga em inglês: uma camisa azul, duas calças pretas, um vestido vermelho.'),
      palavras(6, [
        ['twenty', 'tuéni', 'vinte', ''], ['thirty', 'thãrti', 'trinta', ''], ['fifty', 'fífti', 'cinquenta', ''], ['one hundred', 'uân rândred', 'cem', ''], ['one thousand', 'uân tháuzend', 'mil', ''], ['dollar', 'dóler', 'dólar', ''],
      ]),
      gramatica(12, 'Números e How much', 'PASSO 1: dezenas: twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90). PASSO 2: dezenas + unidade com hífen: 21 = twenty-one, 45 = forty-five. PASSO 3: centenas: 100 = one hundred, 250 = two hundred and fifty (os americanos às vezes omitem o «and»). PASSO 4: milhar: 1,000 = one thousand. O inglês usa vírgula para milhar: 1,000. PASSO 5: preço: «How much is this shirt?» (singular), «How much are these shoes?» (plural). PASSO 6: resposta: «It\'s twenty dollars.», «They\'re fifty dollars.» Cuidado: «thirteen» (13) x «thirty» (30) soam parecidos: no 13 a força está no final («thir-TEEN»); no 30, no começo («THIR-ty»).', {
        tag: 'Números',
        comparacao: 'em português escrevemos 1.000 e 10,50. O inglês inverte: 1,000 (vírgula no milhar) e 10.50 (ponto no decimal).',
        tabela: [
          { numero: '13 / 30', ingles: 'thirteen / thirty', nota: 'tônica muda' }, { numero: '45', ingles: 'forty-five', nota: 'hífen' }, { numero: '250', ingles: 'two hundred and fifty', nota: '' }, { numero: '1,000', ingles: 'one thousand', nota: 'vírgula no milhar' },
        ],
        erros: [['How much is these shoes?', 'How much are these shoes?', 'Plural: are.'], ['one hundreds', 'one hundred', 'hundred não vai ao plural depois de número.'], ['fourty', 'forty', 'Sem o «u».']],
      }),
      producao(8, 'Diga em inglês 8 preços e números: 14, 40, 67, 100, 250, 1,000, 3.50 e 19.99.'),
    ]),
    sessao('S3', 'Na loja', [
      revisao(4, 'Diga o preço de: a camisa (20), os sapatos (65), a jaqueta (110).'),
      palavras(5, [
        ['size', 'sáiz', 'tamanho', ''], ['try on', 'trái ón', 'provar', ''], ['expensive', 'ikspénsiv', 'caro', ''], ['cheap', 'tchiip', 'barato', ''], ['I\'ll take it', 'áil têik it', 'vou levar', ''],
      ]),
      gramatica(8, 'Comprar com educação', 'PASSO 1: «Can I help you?» (o vendedor). Resposta: «I\'m looking for a jacket.» (estou procurando). PASSO 2: «this one» (este, perto) e «that one» (aquele, longe). PASSO 3: «What size?» → «I\'m a medium.», «Size 40.» PASSO 4: «Can I try it on?» PASSO 5: preço: «How much is it?» PASSO 6: decida: «It\'s too expensive.» (caro demais), «I\'ll take it.» (vou levar). PASSO 7: «too» + adjetivo significa DEMAIS: «too big», «too small».', {
        tag: 'Compras',
        comparacao: 'em português «caro demais» e «grande demais» usam «demais» no final. O inglês coloca «too» ANTES do adjetivo: «too expensive», «too big».',
        tabela: [
          { portugues: 'Estou procurando uma jaqueta.', ingles: 'I\'m looking for a jacket.', nota: '' }, { portugues: 'Posso provar?', ingles: 'Can I try it on?', nota: 'try on' }, { portugues: 'É caro demais.', ingles: 'It\'s too expensive.', nota: 'too antes' }, { portugues: 'Vou levar.', ingles: 'I\'ll take it.', nota: '' },
        ],
        erros: [['It\'s expensive too much.', 'It\'s too expensive.', 'too antes do adjetivo.'], ['I look for a jacket.', 'I\'m looking for a jacket.', 'Procurando agora: presente contínuo.'], ['How much cost this?', 'How much is this?', 'Pergunta de preço com «is/are».']],
      }),
      dialogo(8, 'In a clothes shop / Numa loja de roupas', 'Ana compra uma jaqueta.', [
        ['Sarah', 'Hello. Can I help you?', 'Olá. Posso ajudar?'], ['Ana', 'Yes, I\'m looking for a black jacket.', 'Sim, estou procurando uma jaqueta preta.'], ['Sarah', 'What size are you?', 'Qual é o seu tamanho?'], ['Ana', 'I\'m a medium. Can I try this one on?', 'Sou M. Posso provar esta?'], ['Sarah', 'Of course. The fitting room is over there.', 'Claro. O provador é ali.'], ['Ana', 'It\'s nice. How much is it?', 'É bonita. Quanto custa?'], ['Sarah', 'It\'s sixty-five dollars.', 'São sessenta e cinco dólares.'], ['Ana', 'OK, I\'ll take it.', 'Certo, vou levar.'],
      ]),
      producao(5, 'Encene em voz alta uma compra de roupa: peça, tamanho, preço e decisão.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 15', [
      revisao(5, 'Descreva as roupas que você está usando e diga um preço em dólares.'),
      exercicios(20, [
        ouvir('How much are these shoes', ['How much are these shoes', 'How much is this shoe', 'How many are these shoes'], 'How much are these shoes', 'Ouça «are these».'), ouvir('It\'s sixty-five dollars', ['It\'s sixty-five dollars', 'It\'s fifty-six dollars', 'It\'s sixty-five pounds'], 'It\'s sixty-five dollars', 'Ouça «sixty-five».'), ditado('I\'ll take it', 'Escreva: I\'ll take it.'), ditado('It\'s too expensive', 'Escreva: it\'s too expensive.'),
        mc('Qual frase está correta?', ['These pants are new.', 'This pants is new.', 'These pants is new.'], 'These pants are new.', 'pants = plural.'), mc('Como se diz «uma camisa azul»?', ['a blue shirt', 'a shirt blue', 'a blues shirt'], 'a blue shirt', 'Cor antes.'), mc('Qual é a ordem de número correta para 45?', ['forty-five', 'fourty-five', 'forty five-ty'], 'forty-five', 'Sem «u».'), mc('Como se diz «É caro demais»?', ['It\'s too expensive.', 'It\'s expensive too much.', 'It\'s very much expensive.'], 'It\'s too expensive.', 'too + adjetivo.'),
        lacuna('How ___ is this jacket?', ['much', 'many', 'long'], 'much', 'Preço: how much.'), lacuna('How much ___ these shoes?', ['are', 'is', 'do'], 'are', 'Plural: are.'), lacuna('I\'m looking ___ a jacket.', ['for', 'at', 'to'], 'for', 'look for = procurar.'), lacuna('Can I ___ it on? (provar)', ['try', 'put', 'make'], 'try', 'try on.'),
        ordem('Ordene: «I\'m looking for a red dress.»', ['I\'m', 'looking', 'for', 'a', 'red', 'dress'], 'I\'m looking for a red dress.', 'looking for + a + cor + roupa.'), ordem('Ordene: «How much is this shirt?»', ['How', 'much', 'is', 'this', 'shirt'], 'How much is this shirt?', 'How much + is + this + nome.'),
        livre('Escreva 4 frases: uma roupa que você quer comprar, a cor, o preço e a sua decisão.', 'I\'m looking for a black jacket. It is sixty dollars. It is a bit expensive. I\'ll take it.'),
      ]),
      producao(5, 'Conte em 1 minuto a última roupa que você comprou ou quer comprar.'),
    ]),
  ],
});
