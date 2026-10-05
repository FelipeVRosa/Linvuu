import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 15, titulo: 'Compras e roupas', nivel: 'a1',
  objetivo: 'Nomear roupas e cores, perguntar e entender preços e tamanhos, apontar com «dieser, diese, dieses» e fazer uma compra completa numa loja.',
  nota: 'Você compra roupas em alemão do começo ao fim. Próxima aula: profissões e local de trabalho.',
  sessoes: [
    sessao('S1', 'Roupas e cores', [
      revisao(5, 'Escreva 5 frases com «kein», «keine» ou «keinen» e 3 com «nicht».'),
      palavras(12, [
        ['die Kleidung', 'di kláidung', 'roupa', 'clothes'], ['die Hose', 'di hôze', 'calça', 'trousers'], ['das Hemd', 'das hemt', 'camisa', 'shirt'], ['das T-Shirt', 'das tí-xört', 'camiseta', 'T-shirt'],
        ['der Pullover', 'der pulôver', 'suéter', 'sweater'], ['die Jacke', 'di iáke', 'jaqueta', 'jacket'], ['der Mantel', 'der mántel', 'casaco', 'coat'], ['das Kleid', 'das klait', 'vestido', 'dress'],
        ['der Rock', 'der rok', 'saia', 'skirt'], ['die Schuhe', 'di xúe', 'sapatos (plural)', 'shoes'], ['die Socken', 'di zócken', 'meias (plural)', 'socks'], ['die Mütze', 'di müttse', 'gorro, boné', 'cap'],
      ]),
      gramatica(10, 'As cores e o adjetivo depois de «sein»', 'PASSO 1: para descrever uma coisa com «sein», o adjetivo vem DEPOIS do verbo e NÃO muda: «Die Jacke ist blau», «Die Schuhe sind schwarz». Nada de -o, -a ou -e no final, como no português («azul / azuis»). PASSO 2: pergunte «Welche Farbe hat …?» (qual cor tem …?) ou «Wie ist …?». PASSO 3: as cores aparecem sempre em minúscula, por serem adjetivos. PASSO 4: o adjetivo pode ganhar «zu» (demais): «Die Hose ist zu groß.» A mudança do final do adjetivo (um blaues Hemd) só vem no A2; por enquanto, use o adjetivo SOZINHO, depois de «sein».', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'em português o adjetivo concorda («a jaqueta azul», «os sapatos azuis»). Em alemão, depois de «sein», ele é invariável: «ist blau», «sind blau».',
        tabela: [
          { cor: 'rot', pt: 'vermelho', exemplo: 'Das Kleid ist rot.' }, { cor: 'blau', pt: 'azul', exemplo: 'Die Jacke ist blau.' }, { cor: 'grün', pt: 'verde', exemplo: 'Der Pullover ist grün.' }, { cor: 'gelb', pt: 'amarelo', exemplo: 'Das T-Shirt ist gelb.' },
          { cor: 'schwarz', pt: 'preto', exemplo: 'Die Schuhe sind schwarz.' }, { cor: 'weiß', pt: 'branco', exemplo: 'Das Hemd ist weiß.' }, { cor: 'grau', pt: 'cinza', exemplo: 'Der Mantel ist grau.' }, { cor: 'braun', pt: 'marrom', exemplo: 'Der Rock ist braun.' }, { cor: 'rosa / lila / orange', pt: 'rosa / lilás / laranja', exemplo: 'Die Mütze ist rosa.' },
        ],
        erros: [['Die Schuhe sind schwarze.', 'Die Schuhe sind schwarz.', 'Depois de «sein» o adjetivo não muda.']],
      }),
      producao(3, 'Descreva as roupas que você está usando agora: «Die Hose ist … Das T-Shirt ist …»'),
    ]),
    sessao('S2', 'Preços e tamanhos', [
      revisao(5, 'Escreva as cores em alemão e uma peça de roupa de cada cor.'),
      palavras(8, [
        ['der Preis', 'der prais', 'preço', 'price'], ['teuer', 'tóier', 'caro', 'expensive'], ['billig', 'bíliç', 'barato', 'cheap'], ['günstig', 'günstiç', 'em conta', 'good value'],
        ['die Größe', 'di grö-se', 'tamanho', 'size'], ['zu groß', 'tsu grôs', 'grande demais', 'too big'], ['zu klein', 'tsu klain', 'pequeno demais', 'too small'], ['anprobieren', 'án-probíren', 'experimentar (roupa)', 'to try on'],
      ]),
      gramatica(12, 'Perguntar o preço, ler os valores e dizer «demais»', 'PASSO 1: para o preço, pergunte «Was kostet …?» ou «Wie viel kostet …?» com UMA coisa; com várias, «Was kosten …?»: «Was kostet die Jacke?», «Was kosten die Schuhe?» PASSO 2: leia o valor assim: «25 €» = «fünfundzwanzig Euro»; «2,50 €» = «zwei Euro fünfzig»; «0,99 €» = «neunundneunzig Cent». PASSO 3: «zu» + adjetivo = demais: «Die Hose ist zu groß.» PASSO 4: o tamanho: «Größe 38», «Größe M». PASSO 5: três frases de loja: «Kann ich das anprobieren?», «Haben Sie das in Größe M?», «Ich nehme das.» PASSO 6: «passen» pede o DATIVO da pessoa: «Die Jacke passt mir» = a jaqueta serve em mim; trate-a como frase pronta por enquanto.', {
        tag: 'Números',
        tabela: [
          { valor: '25 €', leitura: 'fünfundzwanzig Euro' }, { valor: '2,50 €', leitura: 'zwei Euro fünfzig' }, { valor: '0,99 €', leitura: 'neunundneunzig Cent' }, { valor: '99,90 €', leitura: 'neunundneunzig Euro neunzig' }, { valor: '120 €', leitura: 'hundertzwanzig Euro' },
        ],
        exemplos: [['Was kostet die Jacke? — Sie kostet neunzig Euro.', 'Quanto custa a jaqueta? — Ela custa noventa euros.'], ['Was kosten die Schuhe? — Sie kosten achtzig Euro.', 'Quanto custam os sapatos? — Eles custam oitenta euros.'], ['Die Hose ist zu groß. Haben Sie sie in Größe 38?', 'A calça está grande demais. A senhora tem no tamanho 38?']],
        erros: [['Was kostet die Schuhe?', 'Was kosten die Schuhe?', 'Plural: «kosten».'], ['Die Hose ist groß zu.', 'Die Hose ist zu groß.', '«zu» vem antes do adjetivo.']],
      }),
      producao(5, 'Pergunte o preço de 5 coisas e responda em voz alta: «Was kostet …? Es kostet …»'),
    ]),
    sessao('S3', 'Dieser, diese, dieses e o diálogo', [
      revisao(5, 'Escreva 4 preços por extenso em alemão.'),
      palavras(5, [['dieser / diese / dieses', 'dízer / díze / díses', 'este / esta / este', 'this'], ['welche', 'vélçe', 'qual (cor, f.)', 'which'], ['die Umkleidekabine', 'di úm-klaide-kabíne', 'provador', 'fitting room'], ['die Kasse', 'di kásse', 'caixa', 'checkout'], ['bar', 'bar', 'em dinheiro', 'cash']]),
      gramatica(10, 'Apontar: dieser, diese, dieses', 'PASSO 1: «dieser, diese, dieses» (este, esta) seguem o gênero, como «der, die, das»: «dieser Pullover» (m), «diese Jacke» (f), «dieses Hemd» (n), «diese Schuhe» (plural). PASSO 2: o objeto direto masculino muda, como já aprendeu: «Ich nehme diesen Pullover» (acusativo: dieser → diesen). Feminino, neutro e plural ficam iguais. PASSO 3: use para apontar numa loja: «Wie finden Sie diese Jacke?», «Ich nehme dieses Hemd.»', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { genero: 'masculino', nominativo: 'dieser Pullover', acusativo: 'diesen Pullover' }, { genero: 'feminino', nominativo: 'diese Jacke', acusativo: 'diese Jacke' }, { genero: 'neutro', nominativo: 'dieses Hemd', acusativo: 'dieses Hemd' }, { genero: 'plural', nominativo: 'diese Schuhe', acusativo: 'diese Schuhe' },
        ],
        erros: [['Ich nehme dieser Pullover.', 'Ich nehme diesen Pullover.', 'Objeto direto masculino: diesen.']],
      }),
      dialogo(10, 'Im Kaufhaus / Na loja de departamentos', 'Uma cliente compra uma jaqueta.', [
        ['Verkäuferin', 'Guten Tag! Kann ich Ihnen helfen?', 'Bom dia! Posso ajudar?'], ['Lea', 'Ja, ich suche eine Jacke.', 'Sim, estou procurando uma jaqueta.'], ['Verkäuferin', 'Welche Farbe möchten Sie?', 'Que cor a senhora quer?'], ['Lea', 'Blau oder schwarz. Was kostet diese Jacke hier?', 'Azul ou preta. Quanto custa esta jaqueta aqui?'],
        ['Verkäuferin', 'Diese Jacke kostet neunzig Euro.', 'Esta jaqueta custa noventa euros.'], ['Lea', 'Das ist ein bisschen teuer. Haben Sie die Jacke in Größe M?', 'Isso é um pouco caro. A senhora tem a jaqueta no tamanho M?'], ['Verkäuferin', 'Ja, hier. Sie können sie anprobieren. Die Umkleidekabine ist dort.', 'Sim, aqui. A senhora pode experimentá-la. O provador é ali.'],
        ['Lea', 'Sie passt mir gut. Ich nehme sie.', 'Ela serve bem em mim. Eu levo.'], ['Verkäuferin', 'Zahlen Sie bar oder mit Karte?', 'A senhora paga em dinheiro ou com cartão?'], ['Lea', 'Mit Karte, bitte.', 'Com cartão, por favor.'],
      ]),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva um diálogo de loja com 6 falas, usando preço, tamanho e «Ich nehme …».'),
      texto(5, 'Mein Einkauf / Minha compra', 'Heute gehe ich einkaufen. Ich brauche eine Hose und einen Pullover. Die Hose kostet vierzig Euro. Der Pullover ist blau und kostet fünfundzwanzig Euro. Das ist nicht teuer. Ich nehme beide. Ich bezahle mit Karte.',
        'Hoje vou fazer compras. Preciso de uma calça e de um suéter. A calça custa quarenta euros. O suéter é azul e custa vinte e cinco euros. Isso não é caro. Levo os dois. Pago com cartão.',
        [['Was braucht der Autor?', 'Eine Hose und einen Pullover'], ['Was kostet die Hose?', 'Vierzig Euro'], ['Wie bezahlt der Autor?', 'Mit Karte']]),
      exercicios(15, [
        lacuna('Die Jacke ___ blau. (sein)', ['ist', 'sind', 'bist'], 'ist', '«Jacke» é singular.'), lacuna('Die Schuhe sind ___. (preto)', ['schwarz', 'schwarze', 'schwarzen'], 'schwarz', 'Depois de «sein» o adjetivo não muda.'), lacuna('Was ___ die Jacke?', ['kostet', 'kosten', 'kostest'], 'kostet', 'Uma coisa: kostet.'),
        lacuna('Was ___ die Schuhe?', ['kosten', 'kostet', 'koste'], 'kosten', 'Plural: kosten.'), lacuna('Die Hose ist ___ groß. (demais)', ['zu', 'sehr', 'so'], 'zu', '«zu» + adjetivo = demais.'), lacuna('Ich nehme ___ Pullover. (este)', ['diesen', 'dieser', 'dieses'], 'diesen', 'Objeto direto masculino.'),
        mc('2,50 € se lê:', ['zwei Euro fünfzig', 'fünfzig Euro zwei', 'zwei fünfzig Cent'], 'zwei Euro fünfzig', 'Euro primeiro, depois os centavos.'), mc('«Kann ich das anprobieren?» significa:', ['Posso experimentar isto?', 'Posso comprar isto?', 'Posso devolver isto?'], 'Posso experimentar isto?', 'anprobieren = experimentar.'),
        mc('«Die Jacke passt mir» significa:', ['A jaqueta serve em mim', 'A jaqueta é minha', 'Eu gosto da jaqueta'], 'A jaqueta serve em mim', '«passen» + dativo.'), ordem('Ordene: «Eu levo esta jaqueta.»', ['Ich', 'nehme', 'diese', 'Jacke'], 'Ich nehme diese Jacke.', 'Feminino: diese.'),
        ordem('Ordene: «Quanto custa a jaqueta?»', ['Was', 'kostet', 'die', 'Jacke'], 'Was kostet die Jacke?', 'Pergunta com palavra interrogativa.'), ouvir('Zahlen Sie bar oder mit Karte?', ['Zahlen Sie bar oder mit Karte?', 'Möchten Sie die Jacke anprobieren?', 'Haben Sie die Jacke in Größe M?'], 'Zahlen Sie bar oder mit Karte?', '«bar» = em dinheiro.'),
        ditado('Haben Sie die Jacke in Größe M', 'Pedido de tamanho.'), mc('«teuer» é o contrário de:', ['billig', 'groß', 'klein'], 'billig', 'caro × barato.'),
        livre('Escreva 5 frases sobre uma compra: o que você procura, a cor, o preço, o tamanho e como paga.', 'Ich suche eine Jacke. Sie ist blau. Sie kostet neunzig Euro. Sie ist zu groß. Ich bezahle mit Karte.'),
      ]),
      producao(5, 'Grave-se fazendo uma compra completa numa loja: pedir, perguntar o preço, experimentar, escolher e pagar.'),
    ]),
  ],
});
