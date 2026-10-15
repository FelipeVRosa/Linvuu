import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 12, titulo: 'Descrever: adjetivos, cores, roupas e compras', nivel: 'a1',
  objetivo: 'Descrever pessoas e coisas com adjetivos na posição certa, falar de cores e roupas, e fazer compras com preços e números acima de 100.',
  nota: 'Você descreve o que vê e compra o que precisa. Próxima aula: gostos, pronomes tônicos e pronomes de objeto.',
  sessoes: [
    sessao('S1', 'Adjetivos: posição e cores', [
      revisao(5, 'Conte em voz alta a sua rotina de um dia, com «se lever», «toujours» e «finir».'),
      palavras(8, [
        ['rouge', 'ruj', 'vermelho', ''], ['bleu', 'blö', 'azul', ''], ['vert', 'vér', 'verde', ''], ['jaune', 'jôn', 'amarelo', ''], ['noir', 'nuár', 'preto', ''], ['blanc', 'blã', 'branco', ''], ['gris', 'gri', 'cinza', ''], ['rose', 'rôz', 'rosa', ''],
      ]),
      gramatica(12, 'Onde pôr o adjetivo', 'PASSO 1: em geral, o adjetivo vem depois do substantivo: «une voiture rouge», «un homme français», «une table ronde». Isso vale para cores, nacionalidades e formas. PASSO 2: um grupo de adjetivos curtos e comuns vem antes do substantivo. Lembre da sigla BAGS: Beleza (beau, joli), Idade (jeune, vieux, nouveau), Bondade (bon, mauvais), Tamanho (grand, petit, gros, long): «une belle maison», «un petit garçon», «un bon café». PASSO 3: as cores concordam com o substantivo: «une robe verte», «des robes vertes». Mas as cores que vêm de uma coisa (orange, marron) não mudam: «des chaussures marron». PASSO 4: «beau», «nouveau» e «vieux» têm uma forma especial antes de vogal: «un bel hôtel», «un nouvel ami», «un vieil homme». O feminino é «belle», «nouvelle», «vieille». PASSO 5: o plural é com «-s» (ou «-x» em «beaux», «nouveaux»): «de beaux jardins». PASSO 6: antes de um adjetivo plural, «des» costuma virar «de»: «de beaux jardins», «de grandes maisons». PASSO 7: o sentido muda com a posição em alguns: «un grand homme» (um grande homem) × «un homme grand» (um homem alto).', {
        tag: 'Adjetivos',
        comparacao: 'em português o adjetivo vem, na maior parte das vezes, depois do substantivo («casa bonita»), mas pode vir antes («bela casa»). O francês faz o mesmo, com uma regra: os curtos e comuns (BAGS) vêm antes.',
        tabela: [
          { regra: 'depois: cor', exemplo: 'une voiture rouge' }, { regra: 'depois: nacionalidade', exemplo: 'un homme français' }, { regra: 'antes: beleza', exemplo: 'une belle maison' }, { regra: 'antes: idade', exemplo: 'un vieil ami' }, { regra: 'antes: bondade', exemplo: 'un bon café' }, { regra: 'antes: tamanho', exemplo: 'un petit garçon' }, { regra: 'cor invariável', exemplo: 'des chaussures marron' },
        ],
        erros: [['une rouge voiture', 'une voiture rouge', 'Cores vêm depois do substantivo.'], ['une maison belle', 'une belle maison', 'Beleza vem antes.'], ['un beau hôtel', 'un bel hôtel', '«Bel» diante de vogal.'], ['des robes oranges', 'des robes orange', '«Orange» não varia.']],
      }),
      producao(5, 'Descreva, em voz alta, cinco coisas ao seu redor com cor e outro adjetivo, na ordem certa.'),
    ]),
    sessao('S2', 'Descrever pessoas e roupas', [
      revisao(4, 'Diga «uma bela casa», «um carro vermelho», «um bom amigo» e «uma pequena mesa» em francês.'),
      palavras(6, [
        ['les cheveux', 'lê xevö', 'os cabelos', ''], ['les yeux', 'lê zyö', 'os olhos', ''], ['le pantalon', 'lê pãtalõ', 'a calça', ''], ['la chemise', 'la xemiz', 'a camisa', ''], ['la robe', 'la rob', 'o vestido', ''], ['les chaussures', 'lê xôsür', 'os sapatos', ''],
      ]),
      gramatica(12, 'Dizer como alguém é e o que veste', 'PASSO 1: para descrever o corpo, o francês usa «avoir» + artigo definido: «Elle a les yeux bleus.» «Il a les cheveux courts.» «Elle a les cheveux longs et noirs.» PASSO 2: para a altura e o peso, use «être»: «Il est grand.» «Elle est mince.» PASSO 3: para o que alguém veste, use «porter»: «Il porte un pantalon noir.» «Elle porte une robe verte.» PASSO 4: o presente de «porter» é regular: «je porte, tu portes, il porte, nous portons, vous portez, ils portent». PASSO 5: para dizer como a roupa fica: «Cette robe te va bien.» (essa roupa te cai bem). PASSO 6: sequência de descrição: «Elle est grande et mince. Elle a les cheveux longs et noirs. Elle porte un pantalon bleu et une chemise blanche.»', {
        tag: 'Adjetivos',
        comparacao: 'em português dizemos «ela tem olhos azuis»; o francês fala «elle a les yeux bleus», com «les» definido. A descrição física pede «avoir» e «être» em contextos diferentes.',
        tabela: [
          { funcao: 'olhos e cabelos', estrutura: 'avoir + les yeux / les cheveux + adj', exemplo: 'Elle a les yeux bleus.' }, { funcao: 'altura e peso', estrutura: 'être + adj', exemplo: 'Il est grand et mince.' }, { funcao: 'roupa', estrutura: 'porter + artigo + substantivo', exemplo: 'Il porte un pantalon noir.' }, { funcao: 'comentar', estrutura: 'Ça te va bien', exemplo: 'Cette robe te va bien.' },
        ],
        erros: [['Elle a yeux bleus.', 'Elle a les yeux bleus.', 'Partes do corpo levam artigo definido.'], ['Elle est les cheveux longs.', 'Elle a les cheveux longs.', 'Cabelos e olhos: «avoir».'], ['Il porte une pantalon noir.', 'Il porte un pantalon noir.', '«Pantalon» é masculino.'], ['Elle a les yeux bleu.', 'Elle a les yeux bleus.', 'A cor concorda no plural.']],
      }),
      producao(8, 'Descreva em voz alta três pessoas (altura, cabelo, olhos, roupa), com «être», «avoir» e «porter».'),
    ]),
    sessao('S3', 'Compras e preços', [
      revisao(4, 'Descreva um amigo em quatro frases: altura, cabelo, olhos e roupa.'),
      palavras(5, [
        ['Combien ça coûte ?', 'kõbiẽ sa kut', 'quanto custa?', ''], ['Je cherche', 'je xérx', 'estou procurando', ''], ['Quelle taille ?', 'kél tai', 'que tamanho?', ''], ['trop cher', 'trô xér', 'caro demais', ''], ['Je le prends', 'je lê prã', 'eu levo (este)', ''],
      ]),
      gramatica(8, 'Pedir, perguntar o preço e decidir', 'PASSO 1: ao entrar em uma loja: «Bonjour, je cherche une chemise.» ou «Je voudrais essayer ce pantalon.» PASSO 2: pergunte o preço: «Combien ça coûte ?» ou «C\'est combien ?». PASSO 3: acima de 100: «cent» (100), «deux cents» (200), «mille» (1000), «deux mille» (2000). O «s» de «cents» some quando outro número vem depois: «deux cent trois». «Mille» nunca leva «s». PASSO 4: «C\'est cher» (é caro), «C\'est bon marché» (é barato), «C\'est trop cher» (caro demais). PASSO 5: para decidir: «Je le prends» (masculino), «Je la prends» (feminino), «Je les prends» (plural). Os pronomes «le/la/les» são tema da aula 13. PASSO 6: pague: «Je peux payer par carte ?» PASSO 7: tamanho: «Quelle taille faites-vous ?» «Je fais du 38.»', {
        tag: 'Compras',
        comparacao: 'em português os números acima de cem têm muitas formas («duzentos», «trezentos»); em francês é regular: «deux cents», «trois cents». A única complicação é o «s» de «cents», que some se houver outro número depois.',
        tabela: [
          { numero: '100', escrita: 'cent', exemplo: 'C\'est cent euros.' }, { numero: '200', escrita: 'deux cents', exemplo: 'Ça coûte deux cents euros.' }, { numero: '203', escrita: 'deux cent trois', exemplo: 'Ça fait deux cent trois euros.' }, { numero: '1 000', escrita: 'mille', exemplo: 'C\'est mille euros.' }, { numero: '2 500', escrita: 'deux mille cinq cents', exemplo: 'Ça fait deux mille cinq cents euros.' },
        ],
        erros: [['deux cent euros', 'deux cents euros', '«Cents» leva «s» quando está sozinho.'], ['deux cents trois', 'deux cent trois', 'Sem «s» quando outro número vem depois.'], ['deux milles euros', 'deux mille euros', '«Mille» nunca leva «s».'], ['Je veux cette chemise.', 'Je voudrais cette chemise. / Je la prends.', 'Mais educado e natural em uma loja.']],
      }),
      dialogo(8, 'Dans une boutique / Em uma loja', 'Chloé compra uma camisa.', [
        ['La vendeuse', 'Bonjour, vous désirez ?', 'Bom dia, o que deseja?'], ['Chloé', 'Bonjour. Je cherche une chemise blanche.', 'Bom dia. Estou procurando uma camisa branca.'], ['La vendeuse', 'Quelle taille faites-vous ?', 'Qual o seu tamanho?'], ['Chloé', 'Du trente-huit. Combien ça coûte ?', 'O trinta e oito. Quanto custa?'], ['La vendeuse', 'Elle coûte quarante-cinq euros.', 'Custa quarenta e cinco euros.'], ['Chloé', 'D\'accord, je la prends. Je peux payer par carte ?', 'Certo, eu levo. Posso pagar com cartão?'],
      ]),
      producao(5, 'Encene uma compra com um vendedor imaginário: pedir uma roupa, saber o preço e decidir levar.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 12', [
      revisao(5, 'Descreva em voz alta a roupa que você usa hoje e a de uma pessoa próxima.'),
      exercicios(20, [
        ouvir('Elle a les yeux bleus', ['Elle a les yeux bleus', 'Elle a les cheveux longs', 'Il a les yeux bleus'], 'Elle a les yeux bleus', 'Ouça «yeux».'), ouvir('Une belle maison', ['Une belle maison', 'Une maison belle', 'Un bel hôtel'], 'Une belle maison', 'Ouça «belle» antes do substantivo.'), ouvir('Ça coûte deux cents euros', ['Ça coûte deux cents euros', 'Ça coûte cent euros', 'Ça coûte deux mille euros'], 'Ça coûte deux cents euros', 'Ouça «deux cents».'),
        ditado('Il porte un pantalon noir', 'Escreva: Il porte un pantalon noir.'), ditado('Combien ça coûte', 'Escreva: Combien ça coûte.'), ditado('Je la prends', 'Escreva: Je la prends.'),
        mc('Qual frase está correta?', ['une voiture rouge', 'une rouge voiture', 'un voiture rouge'], 'une voiture rouge', 'Cores depois do substantivo.'), mc('Qual frase está correta?', ['un bel hôtel', 'un beau hôtel', 'un belle hôtel'], 'un bel hôtel', '«Bel» diante de vogal.'), mc('Como se escreve 200 euros?', ['deux cents euros', 'deux cent euros', 'deux centes euros'], 'deux cents euros', '«Cents» com «s» quando sozinho.'), mc('Qual verbo descreve o que alguém veste?', ['porter', 'avoir', 'être'], 'porter', '«Porter» = vestir, usar.'),
        lacuna('Elle a ___ yeux bleus. (os)', ['les', 'des', 'ses'], 'les', 'Partes do corpo: definido.'), lacuna('Il porte ___ pantalon noir. (um)', ['un', 'une', 'des'], 'un', '«Pantalon» é masculino.'), lacuna('Cette chemise est ___. (cara demais)', ['trop chère', 'trop cher', 'très cher'], 'trop chère', '«Chemise» é feminino.'), lacuna('Je ___ prends. (a camisa)', ['la', 'le', 'les'], 'la', '«Chemise» é feminino.'),
        ordem('Ordene: «Elle porte une robe verte.»', ['Elle', 'porte', 'une', 'robe', 'verte'], 'Elle porte une robe verte.', 'Cor depois do substantivo.'), ordem('Ordene: «Je cherche une belle chemise blanche.»', ['Je', 'cherche', 'une', 'belle', 'chemise', 'blanche'], 'Je cherche une belle chemise blanche.', 'Beleza antes, cor depois.'),
        livre('Escreva em francês: Ela tem os olhos azuis. Ele usa uma calça preta. Quanto custa?', 'Elle a les yeux bleus. Il porte un pantalon noir. Combien ça coûte ?'),
        lacuna('Elle porte une robe ___ . (verde)', ['verte', 'vert', 'verts'], 'verte', 'A cor concorda com «robe»: feminino singular.'),
        lacuna('Il a les cheveux ___ . (longos)', ['long', 'longs', 'longues'], 'longs', '«Cheveux» é plural e masculino: «longs».'),
        lacuna('C\'est un ___ hôtel. (belo)', ['beau', 'belle', 'bel'], 'bel', 'Diante de vogal, «beau» vira «bel».'),
        lacuna('Ça fait deux ___ euros. (2000)', ['mille', 'milles', 'cents'], 'mille', '«Mille» nunca leva «s».'),
        lacuna('Je ___ une chemise blanche. (procuro)', ['cherches', 'cherche', 'cherchent'], 'cherche', 'Com «je», os verbos em «-er» terminam em «-e».'),
        mc('Como dizer «um bom café»?', ['un café bonne', 'une bon café', 'un bon café'], 'un bon café', '«Bon» vem antes do substantivo e concorda com ele.'),
        mc('Como dizer «Eu levo» uma camisa (feminino)?', ['Je la prends.', 'Je le prends.', 'Je prends la.'], 'Je la prends.', '«Chemise» é feminino: pronome «la» antes do verbo.'),
        mc('Como descrever a cor dos olhos?', ['Elle est les yeux verts.', 'Elle a les yeux verts.', 'Elle porte les yeux verts.'], 'Elle a les yeux verts.', 'Partes do corpo usam «avoir» + artigo definido.'),
        mc('Qual é o plural de «une robe orange»?', ['des robes oranges', 'des robes orangées', 'des robes orange'], 'des robes orange', 'Cores que vêm de uma coisa não variam.'),
        ordem('Ordene: «Ela tem os cabelos longos e pretos.»', ['Elle', 'a', 'les', 'cheveux', 'longs', 'et', 'noirs'], 'Elle a les cheveux longs et noirs.', '«Avoir» + artigo definido para o corpo.'),
        ordem('Ordene: «Esta camisa é cara demais.»', ['Cette', 'chemise', 'est', 'trop', 'chère'], 'Cette chemise est trop chère.', '«Chère» concorda com «chemise».'),
        livre('Escreva em francês: Ele é alto e usa uma calça preta.', 'Il est grand et il porte un pantalon noir.'),
        livre('Escreva em francês: Ela tem os olhos verdes e usa uma camisa branca.', 'Elle a les yeux verts et elle porte une chemise blanche.'),
      ]),
      producao(5, 'Descreva, em voz alta, a roupa que você gostaria de comprar e quanto você pagaria.'),
    ]),
  ],
});
