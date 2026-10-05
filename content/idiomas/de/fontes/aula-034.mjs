import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 34, titulo: 'Adjetivos 3: sem artigo (kalter Kaffee, gute Freunde)', nivel: 'a2',
  objetivo: 'Dar terminação ao adjetivo quando não há artigo (substantivos não contáveis, plurais, pedidos e preços), usando as terminações de der, die, das, e juntar as três famílias de adjetivos em um só quadro.',
  nota: 'Você declina o adjetivo com e sem artigo. Próxima aula: comparativo e superlativo.',
  sessoes: [
    sessao('S1', 'Sem artigo: nominativo e acusativo', [
      revisao(5, 'Escreva os adjetivos declinados depois de der/die/das e de ein/mein/kein, em nominativo e acusativo.'),
      palavras(8, [
        ['das Getränk', 'das guetrénk', 'bebida', 'drink'], ['der Salat', 'der zalát', 'salada', 'salad'], ['das Obst', 'das opst', 'fruta (coletivo)', 'fruit'], ['das Gemüse', 'das guemüze', 'legumes, verduras', 'vegetables'],
        ['das Öl', 'das öl', 'óleo, azeite', 'oil'], ['der Reis', 'der rais', 'arroz', 'rice'], ['kalt', 'kalt', 'frio', 'cold'], ['heiß', 'hais', 'quente', 'hot'],
      ]),
      gramatica(14, 'Adjetivo sem artigo, passo a passo', 'PASSO 1: sem artigo (nem der, nem ein), o ADJETIVO precisa mostrar o caso SOZINHO. PASSO 2: ele usa as terminações do artigo definido: «der» → -er, «die» → -e, «das» → -es, «die» (plural) → -e. PASSO 3: nominativo: kalter Kaffee (m), kalte Milch (f), kaltes Wasser (n), kalte Getränke (plural). PASSO 4: acusativo: só o masculino muda, como sempre: kalten Kaffee (-en); o resto é igual ao nominativo. PASSO 5: aparece sem artigo com substantivos NÃO CONTÁVEIS (Kaffee, Milch, Wasser, Brot, Obst), com PLURAIS sem artigo (gute Freunde) e em pedidos e preços: «Ich möchte kalten Kaffee», «Wir haben frisches Brot».', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'o português diz «café frio», «água gelada», «bons amigos» sem se preocupar com o caso. Em alemão, sem artigo, o adjetivo carrega o caso com as terminações de «der, die, das».',
        tabela: [
          { genero: 'masculino', nominativo: 'kalter Kaffee', acusativo: 'kalten Kaffee' }, { genero: 'feminino', nominativo: 'kalte Milch', acusativo: 'kalte Milch' }, { genero: 'neutro', nominativo: 'kaltes Wasser', acusativo: 'kaltes Wasser' }, { genero: 'plural', nominativo: 'kalte Getränke', acusativo: 'kalte Getränke' },
        ],
        exemplos: [['Kalter Kaffee schmeckt nicht gut.', 'Café frio não é gostoso.'], ['Ich möchte kalten Kaffee.', 'Eu quero café gelado.'], ['Wir haben frisches Brot.', 'Temos pão fresco.'], ['Ich habe gute Freunde.', 'Eu tenho bons amigos.']],
        erros: [['Ich möchte kalter Kaffee.', 'Ich möchte kalten Kaffee.', 'Acusativo masculino: «-en».'], ['Wir haben frisch Brot.', 'Wir haben frisches Brot.', 'Sem artigo, o adjetivo carrega a terminação (-es).'], ['Ich habe gut Freunde.', 'Ich habe gute Freunde.', 'Plural sem artigo: «-e».']],
      }),
      producao(3, 'Diga 6 frases sobre comida e bebida sem artigo: «Ich möchte kalten Kaffee. Wir haben frisches Brot. Ich esse gern frisches Obst.»'),
    ]),
    sessao('S2', 'Sem artigo: dativo e quantidades', [
      revisao(5, 'Escreva o quadro do adjetivo sem artigo em nominativo e acusativo.'),
      palavras(8, [
        ['viele', 'fíle', 'muitos', 'many'], ['wenige', 'vénige', 'poucos', 'few'], ['einige', 'áinige', 'alguns', 'some'], ['mehrere', 'mérere', 'vários', 'several'],
        ['genug', 'guenúk', 'bastante, suficiente', 'enough'], ['etwas', 'étvas', 'algo, um pouco de', 'something'], ['nichts', 'niçts', 'nada', 'nothing'], ['alles', 'áles', 'tudo', 'everything'],
      ]),
      gramatica(12, 'Sem artigo no dativo e depois de viele, wenige, einige', 'PASSO 1: no DATIVO, sem artigo, as terminações são: -em (m), -er (f), -em (n), -en (plural): «mit kaltem Kaffee», «mit kalter Milch», «mit kaltem Wasser», «mit kalten Getränken». PASSO 2: depois de «viele», «wenige», «einige», «mehrere», o adjetivo também leva a terminação sem artigo: «viele neue Bücher», «einige gute Freunde». PASSO 3: depois de «alle», o adjetivo leva «-en»: «alle neuen Bücher». PASSO 4: use sem artigo para falar de pessoas ou coisas em geral: «Ich esse gern frisches Obst.»', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { caso: 'Nominativ', masculino: 'kalter Kaffee', feminino: 'kalte Milch', neutro: 'kaltes Wasser', plural: 'kalte Getränke' }, { caso: 'Akkusativ', masculino: 'kalten Kaffee', feminino: 'kalte Milch', neutro: 'kaltes Wasser', plural: 'kalte Getränke' }, { caso: 'Dativ', masculino: 'kaltem Kaffee', feminino: 'kalter Milch', neutro: 'kaltem Wasser', plural: 'kalten Getränken' },
        ],
        erros: [['Ich trinke mit kalten Kaffee.', 'Ich trinke mit kaltem Kaffee.', 'Dativo masculino sem artigo: «-em».'], ['Ich habe viele neuen Bücher.', 'Ich habe viele neue Bücher.', 'Depois de «viele», o adjetivo leva «-e».']],
      }),
      producao(5, 'Diga 6 frases com «viele», «einige» e adjetivos: «Ich habe viele gute Freunde. Wir haben einige neue Bücher …»'),
    ]),
    sessao('S3', 'As três famílias e o restaurante', [
      revisao(5, 'Escreva uma frase para cada família de adjetivos: depois de der, depois de ein e sem artigo.'),
      gramatica(10, 'As três famílias em um só quadro', 'PASSO 1: o alemão quer o caso UMA vez só: no artigo ou no adjetivo. PASSO 2: com DER/DIE/DAS (o artigo mostra o caso): o adjetivo leva «-e» ou «-en». PASSO 3: com EIN/MEIN/KEIN (o artigo não mostra o caso no nominativo masculino e no neutro): o adjetivo leva «-er» e «-es» nesses lugares e «-e/-en» no resto. PASSO 4: SEM artigo: o adjetivo mostra o caso com as terminações de «der, die, das». PASSO 5: truque de memória: «Se o artigo falha, o adjetivo assume.»', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { familia: 'der / die / das + adjetivo', nominativo: 'der große Mann', acusativo: 'den großen Mann', dativo: 'dem großen Mann' }, { familia: 'ein / mein / kein + adjetivo', nominativo: 'ein großer Mann', acusativo: 'einen großen Mann', dativo: 'einem großen Mann' }, { familia: 'sem artigo + adjetivo', nominativo: 'großer Mann', acusativo: 'großen Mann', dativo: 'großem Mann' },
        ],
      }),
      dialogo(10, 'Im Restaurant / No restaurante', 'Um casal faz o pedido a um garçom.', [
        ['Kellner', 'Guten Abend! Was möchten Sie trinken?', 'Boa noite! O que desejam beber?'], ['Anna', 'Ich möchte kaltes Wasser und einen heißen Tee.', 'Eu quero água gelada e um chá quente.'], ['Ben', 'Für mich einen frischen Orangensaft, bitte.', 'Para mim, um suco de laranja fresco, por favor.'],
        ['Kellner', 'Gern. Und zum Essen? Wir haben frischen Fisch und frisches Gemüse.', 'Com prazer. E para comer? Temos peixe fresco e legumes frescos.'], ['Anna', 'Ich nehme gebratenen Fisch mit frischem Gemüse.', 'Eu levo peixe frito com legumes frescos.'], ['Ben', 'Ich möchte gute Suppe und frisches Brot.', 'Eu quero uma boa sopa e pão fresco.'],
        ['Kellner', 'Sehr gern. Möchten Sie auch einen gemischten Salat?', 'Com prazer. Querem também uma salada mista?'], ['Anna', 'Nein, danke. Wir haben genug Essen.', 'Não, obrigada. Temos comida suficiente.'], ['Ben', 'Und viele Grüße an den Koch!', 'E muitos cumprimentos ao cozinheiro!'], ['Kellner', 'Das mache ich gern. Guten Appetit!', 'Com prazer. Bom apetite!'],
      ]),
      producao(5, 'Faça o pedido de um restaurante em voz alta com bebidas, pratos e adjetivos, com e sem artigo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases: duas depois de der/die/das, duas depois de ein/mein e duas sem artigo.'),
      exercicios(20, [
        lacuna('Ich möchte ___ Kaffee. (frio)', ['kalten', 'kalter', 'kalte'], 'kalten', 'Acusativo masculino sem artigo: -en.'), lacuna('___ Kaffee schmeckt nicht gut. (frio)', ['Kalter', 'Kalten', 'Kalte'], 'Kalter', 'Nominativo masculino sem artigo: -er.'), lacuna('Wir haben ___ Brot. (fresco)', ['frisches', 'frische', 'frischen'], 'frisches', 'Neutro sem artigo: -es.'),
        lacuna('Ich trinke ___ Milch. (fria)', ['kalte', 'kalter', 'kaltes'], 'kalte', 'Feminino sem artigo: -e.'), lacuna('Ich habe ___ Freunde. (bons)', ['gute', 'guten', 'guter'], 'gute', 'Plural sem artigo: -e.'), lacuna('Ich trinke mit ___ Kaffee. (frio)', ['kaltem', 'kalten', 'kalter'], 'kaltem', 'Dativo masculino sem artigo: -em.'),
        lacuna('Ich esse mit ___ Gemüse. (fresco)', ['frischem', 'frischen', 'frischer'], 'frischem', 'Dativo neutro sem artigo: -em.'), lacuna('Ich habe viele ___ Bücher. (novos)', ['neue', 'neuen', 'neuer'], 'neue', 'Depois de «viele»: -e.'), mc('Sem artigo, o adjetivo usa as terminações de:', ['der, die, das', 'ein, eine, ein', 'dem, der, den'], 'der, die, das', 'Terminações fortes.'),
        mc('Sem artigo, no acusativo masculino, o adjetivo leva:', ['-en', '-er', '-e'], '-en', 'Acusativo masculino: -en.'), mc('Com «der/die/das», o adjetivo leva:', ['-e ou -en', '-er, -es, -e', '-em, -er, -en'], '-e ou -en', 'Terminações fracas.'), mc('Com «ein/mein/kein», o nominativo masculino leva:', ['-er', '-e', '-en'], '-er', 'ein não tem terminação.'),
        ordem('Ordene: «Eu quero café gelado.»', ['Ich', 'möchte', 'kalten', 'Kaffee'], 'Ich möchte kalten Kaffee.', 'Acusativo masculino sem artigo.'), ouvir('Wir haben frisches Brot', ['Wir haben frisches Brot', 'Wir haben das frische Brot', 'Wir haben ein frisches Brot'], 'Wir haben frisches Brot', 'Neutro sem artigo: -es.'), ditado('Ich habe gute Freunde', 'Plural sem artigo.'),
        livre('Escreva 5 frases com adjetivos sem artigo: nominativo, acusativo, dativo e plural.', 'Kalter Kaffee schmeckt nicht gut. Ich möchte kaltes Wasser. Ich trinke mit kaltem Wasser. Ich habe gute Freunde. Wir essen frisches Obst.'),
      ]),
      producao(5, 'Grave-se pedindo comida e bebida num restaurante, com adjetivos sem artigo.'),
    ]),
  ],
});
