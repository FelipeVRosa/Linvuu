import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 9, titulo: 'Comida: partitivos, quantidades e restaurante', nivel: 'a1',
  objetivo: 'Falar do que se come e bebe com os artigos partitivos («du», «de la», «de l\'», «des»), expressar quantidades, e pedir em um café ou restaurante com «je voudrais» e «prendre».',
  nota: 'Você fala de comida, faz compras e pede no restaurante. Próxima aula: o verbo «aller», o futuro próximo e as direções.',
  sessoes: [
    sessao('S1', 'Comida e os partitivos', [
      revisao(5, 'Dê o caminho de um lugar a outro da sua cidade, com preposições e direções.'),
      palavras(8, [
        ['le pain', 'lê pẽ', 'o pão', ''], ['le fromage', 'lê fromaj', 'o queijo', ''], ['la viande', 'la viãd', 'a carne', ''], ['le poisson', 'lê puasõ', 'o peixe', ''], ['les légumes', 'lê legüm', 'os legumes', ''], ['le fruit', 'lê früi', 'a fruta', ''], ['l\'eau', 'lô', 'a água', ''], ['le lait', 'lê lé', 'o leite', ''],
      ]),
      gramatica(12, 'Du, de la, de l\', des: uma parte de algo', 'PASSO 1: para falar de uma quantidade indeterminada de algo que se come ou bebe, use o artigo partitivo: «du» (masculino), «de la» (feminino), «de l\'» (vogal), «des» (plural). «Je mange du pain.» «Je bois de la limonade.» «Je bois de l\'eau.» «Je mange des légumes.» PASSO 2: o partitivo equivale a «um pouco de» ou «algum», que em português quase sempre desaparece: «como pão». PASSO 3: com «aimer», «adorer» e «détester», use o artigo definido: «J\'aime le pain.» (gosto em geral) × «Je mange du pain.» (como um pouco). PASSO 4: na negação, o partitivo vira «de» (ou «d\'»): «Je ne mange pas de viande.» «Il n\'y a pas d\'eau.» PASSO 5: depois de uma expressão de quantidade, também se usa «de» sem artigo: «beaucoup de pain», «un peu d\'eau», «trop de sel». PASSO 6: o verbo «manger» muda na grafia em «nous»: «nous mangeons». O verbo «boire» é irregular: «je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent».', {
        tag: 'Artigos',
        comparacao: 'em português dizemos «como pão» e «bebo água», sem artigo. Em francês o artigo é obrigatório: «je mange du pain», «je bois de l\'eau». É o ponto que mais diferencia os dois idiomas à mesa.',
        tabela: [
          { tipo: 'masculino', partitivo: 'du', exemplo: 'Je mange du pain.' }, { tipo: 'feminino', partitivo: 'de la', exemplo: 'Je mange de la viande.' }, { tipo: 'vogal (m. ou f.)', partitivo: 'de l\'', exemplo: 'Je bois de l\'eau.' }, { tipo: 'plural', partitivo: 'des', exemplo: 'Je mange des légumes.' }, { tipo: 'negação', partitivo: 'de / d\'', exemplo: 'Je ne mange pas de viande.' },
        ],
        erros: [['Je mange pain.', 'Je mange du pain.', 'O partitivo é obrigatório.'], ['Je ne mange pas du pain.', 'Je ne mange pas de pain.', 'Na negação, o partitivo vira «de».'], ['J\'aime du fromage.', 'J\'aime le fromage.', 'Depois de «aimer», artigo definido.'], ['Je bois la eau.', 'Je bois de l\'eau.', 'Partitivo, não definido.']],
      }),
      producao(5, 'Diga o que você come e bebe no café da manhã e no almoço, e o que você não come: «Je mange du… Je bois de l\'… Je ne mange pas de…»'),
    ]),
    sessao('S2', 'Quantidades e compras', [
      revisao(4, 'Complete: «Je mange ___ pain. Je bois ___ eau. Je ne mange pas ___ viande.»'),
      palavras(6, [
        ['beaucoup de', 'boku de', 'muito(s)', ''], ['un peu de', 'ẽ pö de', 'um pouco de', ''], ['assez de', 'asé de', 'bastante, suficiente', ''], ['trop de', 'trô de', 'demais', ''], ['un kilo de', 'ẽ kilô de', 'um quilo de', ''], ['une bouteille de', 'ün butéy de', 'uma garrafa de', ''],
      ]),
      gramatica(12, 'Quantidades e frases de compra', 'PASSO 1: depois de uma quantidade, use «de» sem artigo: «un kilo de pommes», «une bouteille d\'eau», «un verre de lait», «un morceau de fromage», «un paquet de sucre». PASSO 2: advérbios de quantidade também pedem «de»: «beaucoup de légumes», «peu de viande», «assez de pain», «trop de sucre». PASSO 3: para pedir em uma loja: «Je voudrais un kilo de pommes, s\'il vous plaît.» («Je voudrais» é uma forma educada de «je veux».) PASSO 4: o vendedor pergunta: «Vous désirez ?» ou «Qu\'est-ce que je vous sers ?» e depois «Et avec ça ?» ou «C\'est tout ?». PASSO 5: para o preço, «Ça fait cinq euros.» ou «C\'est cinq euros.» Pergunte: «C\'est combien ?» ou «Ça coûte combien ?». PASSO 6: não use o partitivo depois de uma quantidade: «un kilo de pommes», nunca «un kilo des pommes».', {
        tag: 'Quantidade',
        comparacao: 'em português, «um quilo de maçãs» e «uma garrafa de água» têm a mesma estrutura. Em francês, depois da quantidade vem sempre «de» (ou «d\'») e o artigo some.',
        tabela: [
          { quantidade: 'beaucoup de', exemplo: 'beaucoup de légumes' }, { quantidade: 'un peu de', exemplo: 'un peu de sel' }, { quantidade: 'un kilo de', exemplo: 'un kilo de pommes' }, { quantidade: 'une bouteille de', exemplo: 'une bouteille d\'eau' }, { quantidade: 'un verre de', exemplo: 'un verre de lait' }, { quantidade: 'un paquet de', exemplo: 'un paquet de pâtes' },
        ],
        erros: [['un kilo des pommes', 'un kilo de pommes', 'Depois da quantidade, «de» sem artigo.'], ['beaucoup du pain', 'beaucoup de pain', 'Depois de «beaucoup», «de».'], ['Je veux un kilo de pommes. (ao pedir)', 'Je voudrais un kilo de pommes.', '«Je voudrais» é mais educado.'], ['Ça coûtent cinq euros.', 'Ça coûte cinq euros.', '«Ça» pede o verbo no singular.']],
      }),
      producao(8, 'Faça um pedido de compras em voz alta, com oito itens e quantidades: «Je voudrais un kilo de… une bouteille de… un peu de…»'),
    ]),
    sessao('S3', 'Au café et au restaurant', [
      revisao(4, 'Diga quatro quantidades diferentes com «de»: «un verre de…, une bouteille de…, un kilo de…, beaucoup de…»'),
      palavras(5, [
        ['la carte', 'la kart', 'o cardápio', ''], ['l\'addition', 'ladisiõ', 'a conta', ''], ['un café', 'ẽ kafé', 'um café', ''], ['une table', 'ün tabl', 'uma mesa', ''], ['Vous désirez ?', 'vu dezirê', 'o que deseja?', ''],
      ]),
      gramatica(8, 'Pedir e pagar', 'PASSO 1: ao entrar: «Bonjour, une table pour deux, s\'il vous plaît.» PASSO 2: o garçom pergunta: «Qu\'est-ce que vous prenez ?» ou «Vous désirez ?». PASSO 3: você responde: «Je voudrais un café.» ou «Je prends un café.» PASSO 4: o verbo «prendre» é irregular: «je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent». Serve para comer, beber e tomar transportes. PASSO 5: para pedir a conta: «L\'addition, s\'il vous plaît.» Para pagar: «Je peux payer par carte ?» PASSO 6: «Bon appétit !» é dito antes de comer, e a resposta é «Merci, vous aussi.»', {
        tag: 'Verbos',
        comparacao: 'em português dizemos «vou tomar um café». O francês usa «prendre» com o mesmo sentido: «je prends un café». «Prendre» é um dos verbos mais úteis: «prendre le métro», «prendre une douche».',
        tabelas: [
          { titulo: 'prendre (tomar, pegar)', linhas: [
            { pronome: 'je', forma: 'prends', exemplo: 'Je prends un café.' }, { pronome: 'tu', forma: 'prends', exemplo: 'Tu prends du thé.' }, { pronome: 'il / elle / on', forma: 'prend', exemplo: 'Elle prend le menu.' },
            { pronome: 'nous', forma: 'prenons', exemplo: 'Nous prenons une table.' }, { pronome: 'vous', forma: 'prenez', exemplo: 'Vous prenez quoi ?' }, { pronome: 'ils / elles', forma: 'prennent', exemplo: 'Ils prennent un dessert.' },
          ] },
        ],
        erros: [['Je prend un café.', 'Je prends un café.', '«Je» e «tu» pedem «prends».'], ['Nous prendons un café.', 'Nous prenons un café.', 'Um só «d» em «prenons».'], ['Je veux un café, donne-moi l\'addition.', 'Je voudrais un café. L\'addition, s\'il vous plaît.', 'Mais educado.']],
      }),
      dialogo(8, 'Au restaurant / No restaurante', 'Sophie e Julien pedem a refeição.', [
        ['Le serveur', 'Bonjour. Vous désirez ?', 'Bom dia. O que desejam?'], ['Sophie', 'Je voudrais du poisson, s\'il vous plaît. Et de l\'eau.', 'Eu gostaria de peixe, por favor. E água.'], ['Julien', 'Moi, je prends de la viande avec des légumes.', 'Eu tomo carne com legumes.'], ['Le serveur', 'Très bien. Et comme dessert ?', 'Muito bem. E de sobremesa?'], ['Sophie', 'Nous prenons un peu de fromage, merci.', 'Tomamos um pouco de queijo, obrigada.'], ['Julien', 'L\'addition, s\'il vous plaît. Bon appétit, Sophie !', 'A conta, por favor. Bom apetite, Sophie!'],
      ]),
      producao(5, 'Encene um pedido em um café com um colega imaginário: cumprimentar, pedir duas coisas, pedir a conta.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 9', [
      revisao(5, 'Descreva o que você come em um dia: café da manhã, almoço e jantar.'),
      exercicios(20, [
        ouvir('Je mange du pain', ['Je mange du pain', 'Je mange de la viande', 'Je mange des légumes'], 'Je mange du pain', 'Ouça «du».'), ouvir('Je bois de l\'eau', ['Je bois de l\'eau', 'Je bois du lait', 'Je bois de la limonade'], 'Je bois de l\'eau', 'Ouça «de l\'».'), ouvir('Je voudrais un kilo de pommes', ['Je voudrais un kilo de pommes', 'Je veux un kilo de pommes', 'J\'ai un kilo de pommes'], 'Je voudrais un kilo de pommes', 'Ouça «voudrais».'),
        ditado('Je ne mange pas de viande', 'Escreva: Je ne mange pas de viande.'), ditado('Une bouteille d\'eau', 'Escreva: Une bouteille d\'eau.'), ditado('L\'addition, s\'il vous plaît', 'Escreva: L\'addition, s\'il vous plaît.'),
        mc('Qual frase está correta?', ['Je mange du pain.', 'Je mange pain.', 'Je mange le pain.'], 'Je mange du pain.', 'Partitivo.'), mc('Qual frase está correta na negação?', ['Je ne mange pas de viande.', 'Je ne mange pas de la viande.', 'Je ne mange pas viande.'], 'Je ne mange pas de viande.', 'Negação: «de».'), mc('Qual frase está correta?', ['un kilo de pommes', 'un kilo des pommes', 'un kilo les pommes'], 'un kilo de pommes', 'Quantidade + «de».'), mc('Qual é a forma de «prendre» para «nous»?', ['prenons', 'prendons', 'prennent'], 'prenons', '«nous prenons».'),
        lacuna('Je bois ___ café. (partitivo)', ['du', 'de la', 'des'], 'du', '«Café» é masculino.'), lacuna('Il y a ___ eau. (partitivo)', ['de l\'', 'du', 'des'], 'de l\'', 'Diante de vogal: «de l\'».'), lacuna('Elle prend ___ café. (um)', ['un', 'une', 'des'], 'un', '«Café» é masculino.'), lacuna('Nous ___ un dessert. (tomamos)', ['prenons', 'prends', 'prennent'], 'prenons', '«nous prenons».'),
        ordem('Ordene: «Je voudrais un café, s\'il vous plaît.»', ['Je', 'voudrais', 'un', 'café,', 's\'il', 'vous', 'plaît'], 'Je voudrais un café, s\'il vous plaît.', 'Pedido educado.'), ordem('Ordene: «Elle mange beaucoup de légumes.»', ['Elle', 'mange', 'beaucoup', 'de', 'légumes'], 'Elle mange beaucoup de légumes.', 'beaucoup de + substantivo.'),
        livre('Escreva em francês: Eu como pão. Eu não bebo leite. Eu gostaria de uma água.', 'Je mange du pain. Je ne bois pas de lait. Je voudrais de l\'eau.'),
      ]),
      producao(5, 'Descreva em voz alta uma refeição em um restaurante: o que você pede, o que você bebe e o que você paga.'),
    ]),
  ],
});
