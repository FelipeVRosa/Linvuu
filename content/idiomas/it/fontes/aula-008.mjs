import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 8, titulo: 'Bar e comida: vorrei, partitivo e números até 100', nivel: 'a1',
  objetivo: 'Pedir com educação no bar com «vorrei», perguntar preços e pagar, usar o partitivo (del, dello, della, dell\', dei, degli, delle) e contar de 21 a 100, incluindo preços em euros.',
  nota: 'Você pede um café e um cornetto, entende o preço e paga. Próxima aula: as horas, os dias da semana e os meses.',
  sessoes: [
    sessao('S1', 'Pedir no bar com educação', [
      revisao(5, 'Retome a aula 7: apresente em voz alta a sua família com possessivos e diga quem é cada pessoa, sem artigo para a família no singular.'),
      palavras(8, [
        ['un caffè', 'um kaffé', 'um café (expresso)', ''], ['un cappuccino', 'um kapputchíno', 'um cappuccino', ''], ['un tè', 'um té', 'um chá', ''], ['un\'acqua', 'un ákkua', 'uma água', ''], ['un cornetto', 'um kornêtto', 'um croissant', ''], ['un panino', 'um paníno', 'um sanduíche', ''], ['un gelato', 'um djeláto', 'um sorvete', ''], ['il conto', 'il kônto', 'a conta', ''],
      ]),
      gramatica(12, 'Vorrei e as frases do bar', 'PASSO 1: para pedir algo com educação, use «Vorrei» (eu gostaria) mais o que quer: «Vorrei un caffè, per favore.» Por enquanto, aprenda «vorrei» como forma pronta; a conjugação de «volere» vem na aula 13. PASSO 2: «Voglio un caffè» (quero um café) existe, mas soa seco numa loja ou num bar. Prefira «vorrei». PASSO 3: também se pode pedir com «Prendo» (tomo, levo): «Prendo un cappuccino.» PASSO 4: o atendente diz «Dica» ou «Desidera?» (pois não?), «Che cosa prende?» (o que vai tomar?) e «Altro?» (mais alguma coisa?). PASSO 5: para pagar: «Quanto costa?» ou «Quant\'è?» (quanto é?). «Il conto, per favore.» A resposta é «Sono due euro e cinquanta» (é 2,50). PASSO 6: «un caffè» é um expresso. «Un caffè lungo» é mais comprido; «un caffè macchiato», com um pouco de leite. O «cappuccino» é bebida de manhã, em geral, e pedir um depois do almoço soa diferente para muitos italianos. PASSO 7: no plural, «caffè» e outras palavras com acento final não mudam: «due caffè». PASSO 8: em muitos bares, paga-se no caixa antes e se mostra o recibo no balcão; em outros, paga-se no fim. Observe como as pessoas fazem. Costuma custar mais sentar à mesa do que ficar no balcão.', {
        tag: 'Bar',
        comparacao: 'em português dizemos «queria um café» ou «eu gostaria de um café». O italiano «vorrei» é o mesmo tipo de pedido educado. E o «caffè» no bar italiano é sempre o expresso, bem diferente do café com leite da padaria brasileira.',
        tabela: [
          { situacao: 'pedir', italiano: 'Vorrei un caffè, per favore.', significado: 'queria um café, por favor' }, { situacao: 'pedir (alternativa)', italiano: 'Prendo un cappuccino.', significado: 'tomo um cappuccino' }, { situacao: 'o atendente pergunta', italiano: 'Che cosa prende?', significado: 'o que o senhor vai tomar?' },
          { situacao: 'mais alguma coisa', italiano: 'Altro?', significado: 'mais alguma coisa?' }, { situacao: 'pedir a conta', italiano: 'Il conto, per favore.', significado: 'a conta, por favor' }, { situacao: 'perguntar o preço', italiano: 'Quant\'è?', significado: 'quanto é?' },
        ],
        erros: [['Voglio un caffè.', 'Vorrei un caffè, per favore.', '«Voglio» soa seco; «vorrei» é o pedido educado.'], ['Due caffès, per favore.', 'Due caffè, per favore.', 'Palavras com acento final não mudam no plural.'], ['Vorrei una caffè.', 'Vorrei un caffè.', '«Caffè» é masculino: «un caffè».'], ['Quanto è?', 'Quant\'è?', '«Quanto» + «è» se contraem.']],
      }),
      producao(5, 'Peça em voz alta, no bar: «Buongiorno! Vorrei… per favore.» Depois pergunte: «Quant\'è?» e peça a conta: «Il conto, per favore.»'),
    ]),
    sessao('S2', 'Comida e o partitivo', [
      revisao(4, 'Peça três coisas diferentes num bar com «vorrei» e «prendo». Pergunte o preço de cada uma.'),
      palavras(6, [
        ['il pane', 'il páne', 'o pão', ''], ['il burro', 'il búrro', 'a manteiga (não é burro)', ''], ['il latte', 'il látte', 'o leite', ''], ['lo zucchero', 'lo dzúkkero', 'o açúcar', ''], ['il formaggio', 'il formáddjo', 'o queijo', ''], ['il prosciutto', 'il proxútto', 'o presunto', ''],
      ]),
      gramatica(12, 'O partitivo: del, dello, della, dell\', dei, degli, delle', 'PASSO 1: o partitivo indica «um pouco de» ou «alguns»: «Vorrei del pane» (queria um pouco de pão), «Compro dei panini» (compro uns pãezinhos). PASSO 2: forma-se com «di» + artigo definido, que se funde numa só palavra: «di + il» vira «del», «di + lo» vira «dello», «di + l\'» vira «dell\'», «di + la» vira «della», «di + i» vira «dei», «di + gli» vira «degli», «di + le» vira «delle». PASSO 3: no singular, serve para coisas que não se contam: «del pane», «dello zucchero», «dell\'acqua», «della frutta». No plural, serve para coisas que se contam: «dei panini», «degli gnocchi», «delle olive». PASSO 4: o partitivo é opcional e muitas vezes omitido: «Compro pane e latte» é tão correto quanto «Compro del pane e del latte». PASSO 5: em frases negativas e depois de números, não se usa partitivo: «Non ho latte», «due panini». PASSO 6: para uma quantidade precisa, use «di» sem artigo: «un po\' di zucchero», «un chilo di pane», «un litro di latte», «una bottiglia d\'acqua». PASSO 7: falsos amigos de cozinha: «burro» é manteiga (o animal é «asino»); «caldo» é quente, e o caldo de sopa é «brodo». Cuidado ao pedir!', {
        tag: 'Partitivo',
        comparacao: 'o português não tem um artigo parcial: dizemos «quero pão» ou «quero um pouco de pão». O italiano usa «del pane» (o «di» + artigo) para esse sentido, mas também aceita «pane» sem nada. Em frases negativas, o português e o italiano concordam: sem artigo.',
        tabela: [
          { genero: 'masculino (il)', singular: 'del pane', plural: 'dei panini' }, { genero: 'masculino (lo)', singular: 'dello zucchero', plural: 'degli gnocchi' }, { genero: 'masculino ou feminino (vogal)', singular: 'dell\'acqua', plural: 'degli amici / delle amiche' }, { genero: 'feminino (la)', singular: 'della frutta', plural: 'delle olive' },
        ],
        erros: [['Vorrei il pane. (um pouco de pão)', 'Vorrei del pane.', 'O artigo definido pede algo específico; para «um pouco», o partitivo.'], ['Non ho del latte.', 'Non ho latte.', 'Em frases negativas, o partitivo cai.'], ['Compro dei due panini.', 'Compro due panini.', 'Depois de número, sem partitivo.'], ['Vorrei il zucchero.', 'Vorrei dello zucchero.', 'Antes de «z», o partitivo é «dello» (e o artigo, «lo»).']],
      }),
      dialogo(8, 'Al bar / No bar', 'Marco pede o café da manhã.', [
        ['Il barista', 'Buongiorno! Dica.', 'Bom dia! Pois não.'], ['Marco', 'Vorrei un cappuccino e un cornetto, per favore.', 'Queria um cappuccino e um croissant, por favor.'], ['Il barista', 'Altro?', 'Mais alguma coisa?'], ['Marco', 'Sì, vorrei anche dell\'acqua.', 'Sim, queria também um pouco de água.'], ['Il barista', 'Sono tre euro e cinquanta.', 'São três euros e cinquenta.'], ['Marco', 'Ecco. Grazie, buona giornata!', 'Aqui está. Obrigado, bom dia!'],
      ]),
    ]),
    sessao('S3', 'Números de 21 a 100 e preços', [
      revisao(4, 'Conte de 0 a 20 em voz alta, sem olhar. Depois diga a sua idade e a de três pessoas.'),
      palavras(5, [
        ['trenta', 'trênta', 'trinta', ''], ['quaranta', 'kuaránta', 'quarenta', ''], ['cinquanta', 'tchinkuánta', 'cinquenta', ''], ['sessanta', 'sessánta', 'sessenta', ''], ['settanta', 'settánta', 'setenta', ''], ['ottanta', 'ottánta', 'oitenta', ''], ['novanta', 'novánta', 'noventa', ''], ['cento', 'tchénto', 'cem', ''],
      ]),
      gramatica(8, 'Os números de 21 a 100 e os preços', 'PASSO 1: as dezenas são «venti» (20), «trenta», «quaranta», «cinquanta», «sessanta», «settanta», «ottanta», «novanta»; 100 é «cento». PASSO 2: para as unidades, junta-se o número à dezena, sem hífen e sem «e»: «ventuno», «ventidue», «trentacinque», «quarantasei». PASSO 3: a dezena perde a vogal final diante de «uno» e de «otto»: «ventuno», «ventotto», «trentuno», «trentotto» (nunca «ventiuno» nem «ventiotto»). PASSO 4: «tre» no fim de um número composto leva acento: «ventitré», «trentatré». PASSO 5: preços: «Costa un euro e cinquanta» (1,50), «Sono due euro e dieci» (2,10). Note que «euro» não muda no plural: «due euro», «tre euro e venti». PASSO 6: o centavo se diz «centesimo» (plural «centesimi»), mas na prática se diz só o número: «un euro e venti». PASSO 7: com os números terminados em «uno», o substantivo vai ao plural: «ho ventuno anni» (também se ouve «ventun anni»).', {
        tag: 'Números',
        comparacao: 'em português, as dezenas e unidades se ligam com «e» («vinte e um»). Em italiano, elas se juntam em uma só palavra, sem «e»: «ventuno». Para o preço, o português diz «um euro e cinquenta», e o italiano faz o mesmo, mas sem pluralizar o «euro».',
        tabela: [
          { numero: '21', forma: 'ventuno (ventúno)', exemplo: 'Ho ventuno anni.' }, { numero: '22', forma: 'ventidue (ventidúe)', exemplo: 'Sono ventidue euro.' }, { numero: '23', forma: 'ventitré (ventitrê)', exemplo: 'Ho ventitré anni.' }, { numero: '28', forma: 'ventotto (ventótto)', exemplo: 'Costa ventotto euro.' },
          { numero: '30', forma: 'trenta (trênta)', exemplo: 'Ho trenta euro.' }, { numero: '40', forma: 'quaranta (kuaránta)', exemplo: 'Ha quaranta anni.' }, { numero: '50', forma: 'cinquanta (tchinkuánta)', exemplo: 'Costa cinquanta centesimi.' }, { numero: '60', forma: 'sessanta (sessánta)', exemplo: 'Sono sessanta euro.' },
          { numero: '70', forma: 'settanta (settánta)', exemplo: 'Mia nonna ha settanta anni.' }, { numero: '80', forma: 'ottanta (ottánta)', exemplo: 'Mio nonno ha ottanta anni.' }, { numero: '90', forma: 'novanta (novánta)', exemplo: 'Costa novanta centesimi.' }, { numero: '100', forma: 'cento (tchénto)', exemplo: 'Sono cento euro.' },
        ],
        erros: [['ventiuno', 'ventuno', 'A dezena perde a vogal final diante de «uno».'], ['ventitre', 'ventitré', '«Tre» no fim de composto leva acento.'], ['trentaotto', 'trentotto', 'A dezena perde a vogal diante de «otto».'], ['Costa due euros.', 'Costa due euro.', '«Euro» não muda no plural.']],
      }),
      texto(8, 'Al bar di via Roma', 'Al bar di via Roma, un caffè costa un euro e venti. Un cappuccino costa un euro e cinquanta. Un cornetto costa un euro e trenta. Un\'acqua costa un euro. Marco prende un cappuccino e un cornetto: sono due euro e ottanta. Giulia prende un caffè e un\'acqua: sono due euro e venti. In totale pagano cinque euro.', 'No bar da via Roma, um café custa um euro e vinte. Um cappuccino custa um euro e cinquenta. Um croissant custa um euro e trinta. Uma água custa um euro. Marco toma um cappuccino e um croissant: são dois euros e oitenta. Giulia toma um café e uma água: são dois euros e vinte. No total pagam cinco euros.', [['Quanto costa un cappuccino?', 'Costa un euro e cinquanta.'], ['Che cosa prende Marco?', 'Prende un cappuccino e un cornetto.'], ['Quanto paga Marco?', 'Paga due euro e ottanta.'], ['Quanto pagano in totale?', 'Pagano cinque euro.']]),
      producao(5, 'Leia em voz alta cinco preços diferentes, como «tre euro e quaranta», e diga uma pequena conta de bar: dois cafés, um cornetto e uma água.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 8', [
      revisao(5, 'Faça em voz alta uma cena de bar completa: peça duas coisas, diga o que quer a mais, pergunte o preço, pague.'),
      exercicios(20, [
        ouvir('Vorrei un cappuccino', ['Vorrei un cappuccino', 'Vorrei un caffè', 'Prendo un cappuccino'], 'Vorrei un cappuccino', 'Ouça «vorrei» e «cappuccino».'), ouvir('trentotto', ['trentotto', 'trentuno', 'trentatré'], 'trentotto', 'Ouça a união de «trenta» com «otto».'), ouvir('Sono due euro e cinquanta', ['Sono due euro e cinquanta', 'Sono tre euro e cinquanta', 'Sono due euro e quaranta'], 'Sono due euro e cinquanta', 'Ouça o número antes de «euro».'),
        ditado('Il conto, per favore', 'Escreva: Il conto, per favore.'), ditado('Vorrei del pane', 'Escreva: Vorrei del pane.'), ditado('ventuno', 'Escreva: ventuno.'),
        mc('Qual é a forma educada de pedir um café?', ['Vorrei un caffè, per favore.', 'Voglio un caffè.', 'Dammi un caffè.'], 'Vorrei un caffè, per favore.', '«Vorrei» + «per favore».'), mc('O que é «il burro»?', ['a manteiga', 'o burro (animal)', 'o queijo'], 'a manteiga', 'Falso amigo.'), mc('Como se escreve 23?', ['ventitré', 'ventitre', 'venti tre'], 'ventitré', '«Tre» no fim de composto leva acento.'), mc('Qual é o plural de «un euro»?', ['due euro', 'due euros', 'due eure'], 'due euro', '«Euro» é invariável.'),
        lacuna('Vorrei ___ acqua. (um pouco de)', ['dell\'', 'del', 'della'], 'dell\'', 'Antes de vogal: «dell\'».'), lacuna('Compro ___ panini. (uns)', ['dei', 'del', 'delle'], 'dei', 'Plural masculino: «dei».'), lacuna('Non ho ___ . (leite)', ['latte', 'del latte', 'dello latte'], 'latte', 'Frase negativa: sem partitivo.'), lacuna('Quant\'___ ? (quanto é)', ['è', 'ha', 'sono'], 'è', '«Quant\'è?»'),
        ordem('Ordene: «Vorrei un cappuccino, per favore.»', ['Vorrei', 'un', 'cappuccino,', 'per', 'favore'], 'Vorrei un cappuccino, per favore.', 'Pedido educado.'), ordem('Ordene: «Sono tre euro e cinquanta.»', ['Sono', 'tre', 'euro', 'e', 'cinquanta'], 'Sono tre euro e cinquanta.', 'Preço com «e».'),
        livre('Escreva em italiano: Queria um café e um pouco de água, por favor. Quanto é?', 'Vorrei un caffè e dell\'acqua, per favore. Quant\'è?'),
        lacuna('Vorrei ___ caffè, per favore. (um)', ['uno', 'un', 'una'], 'un', 'Antes de «caffè» (masculino, consoante) usa-se «un».'),
        lacuna('Vorrei ___ zucchero. (um pouco de)', ['dello', 'del', 'della'], 'dello', '«Di + lo» vira «dello», antes de «z».'),
        lacuna('Compro ___ olive. (algumas)', ['dei', 'degli', 'delle'], 'delle', '«Olive» é feminino plural: «delle».'),
        lacuna('Un cappuccino costa un euro e ___. (trinta)', ['tredici', 'trenta', 'trentuno'], 'trenta', '«Trenta» é 30; «tredici» é 13.'),
        lacuna('Ho ___ anni. (28)', ['ventotto', 'ventiotto', 'ventoto'], 'ventotto', 'A dezena perde a vogal final diante de «otto».'),
        mc('O que significa «Altro?» no bar?', ['Quanto custa?', 'Mais alguma coisa?', 'A conta, por favor.'], 'Mais alguma coisa?', 'O atendente pergunta «Altro?» para saber se você quer mais algo.'),
        mc('Como se escreve 41?', ['quarantuno', 'quarantauno', 'quarantaeuno'], 'quarantuno', 'A dezena perde a vogal final diante de «uno».'),
        mc('Qual é o plural de «un tè»?', ['due tei', 'due tè', 'due tés'], 'due tè', 'Palavras com acento final não mudam no plural.'),
        mc('O que é «lo zucchero»?', ['o sal', 'a manteiga', 'o açúcar'], 'o açúcar', '«Zucchero» é açúcar; antes de «z» o artigo é «lo».'),
        ordem('Ordene: «Vorrei del formaggio e del pane.»', ['Vorrei', 'del', 'formaggio', 'e', 'del', 'pane.'], 'Vorrei del formaggio e del pane.', 'Partitivo: «del» antes de masculino que começa por consoante.'),
        ordem('Ordene: «Un cornetto costa un euro e trenta.»', ['Un', 'cornetto', 'costa', 'un', 'euro', 'e', 'trenta.'], 'Un cornetto costa un euro e trenta.', 'O preço se diz com «euro e» + centavos.'),
        livre('Escreva em italiano: Queria um chá e um croissant, por favor.', 'Vorrei un tè e un cornetto, per favore.'),
        livre('Escreva em italiano: Quanto é? São cinco euros e vinte.', 'Quant\'è? Sono cinque euro e venti.'),
      ]),
      producao(5, 'Conte em voz alta de 30 a 100, de dez em dez. Depois diga três preços: «un euro e venti», «quattro euro e cinquanta» e «diciotto euro».'),
    ]),
  ],
});
