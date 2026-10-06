import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 54, titulo: 'Orações relativas 2: который em todos os casos e com preposições', nivel: 'b1',
  objetivo: 'Usar «который» no genitivo, dativo, instrumental e prepositivo, com as preposições (у которого, с которым, о которой, в котором) e com movimento (в который, на которую).',
  nota: 'Você usa «который» em todos os casos. Próxima aula: o condicional com «бы».',
  sessoes: [
    sessao('S1', 'Который no genitivo e no dativo', [
      revisao(5, 'Escreva 5 frases com «который» como sujeito e como objeto.'),
      palavras(8, [['машина', 'mashína', 'carro', 'car'], ['велосипед', 'vilasipyét', 'bicicleta', 'bicycle'], ['собака', 'sabáka', 'cachorro', 'dog'], ['дерево', 'dyérevo', 'árvore', 'tree'], ['помогать', 'pamagát', 'ajudar', 'to help'], ['писать', 'pisát', 'escrever', 'to write'], ['дарить', 'darít', 'presentear', 'to give a gift'], ['приехать', 'priyékhat', 'chegar (de veículo)', 'to arrive']]),
      gramatica(12, 'Который muda de caso com a função', 'PASSO 1: «который» declina como um adjetivo e o CASO vem da FUNÇÃO dentro da oração relativa; o gênero e o número vêm do antecedente. PASSO 2: GENITIVO: «КОТОРОГО» (m e n), «КОТОРОЙ» (f), «КОТОРЫХ» (plural): «Человек, у которого есть машина, мой сосед», «Девушка, у которой я живу, врач», «Друзья, у которых я был, живут рядом». PASSO 3: «у которого / у которой» = «que tem» ou «na casa de quem»: «Девушка, у которой есть собака». PASSO 4: outras preposições com o genitivo: «из которого» (de onde), «около которого» (perto do qual), «мимо которого» (passando pelo qual): «Город, из которого я приехал». PASSO 5: DATIVO: «КОТОРОМУ» (m e n), «КОТОРОЙ» (f), «КОТОРЫМ» (plural): «Человек, которому я помогаю», «Девушка, которой я звоню», «Друзья, которым я пишу». PASSO 6: o verbo da oração relativa decide o caso: «помогать» pede dativo, logo «которому».', {
        tag: 'Frase',
        tabela: [
          { caso: 'genitivo m / n', relativo: 'которого', exemplo: 'Человек, у которого есть машина, мой сосед.' }, { caso: 'genitivo f', relativo: 'которой', exemplo: 'Девушка, у которой я живу, врач.' }, { caso: 'genitivo plural', relativo: 'которых', exemplo: 'Друзья, у которых я был, живут рядом.' }, { caso: 'dativo m / n', relativo: 'которому', exemplo: 'Человек, которому я помогаю, мой сосед.' }, { caso: 'dativo f', relativo: 'которой', exemplo: 'Девушка, которой я звоню, моя подруга.' }, { caso: 'dativo plural', relativo: 'которым', exemplo: 'Друзья, которым я пишу, живут далеко.' },
        ],
        erros: [['Девушка, которая я звоню, моя подруга.', 'Девушка, которой я звоню, моя подруга.', '«звонить» + dativo: которой.'], ['Человек, у который есть машина, мой сосед.', 'Человек, у которого есть машина, мой сосед.', '«у» + genitivo: которого.']],
      }),
      producao(5, 'Diga: «Человек, у которого есть машина … Девушка, которой я звоню … Друзья, которым я пишу …»'),
    ]),
    sessao('S2', 'Который no instrumental e no prepositivo', [
      revisao(5, 'Escreva as formas de «который» no genitivo e no dativo (m, f, plural).'),
      palavras(8, [['работать с', 'rabótat s', 'trabalhar com', 'to work with'], ['говорить о', 'gavarít o', 'falar sobre', 'to talk about'], ['жить в', 'zhit v', 'morar em', 'to live in'], ['учиться в', 'uchítsya v', 'estudar em', 'to study at'], ['улица', 'úlitsa', 'rua', 'street'], ['школа', 'shkóla', 'escola', 'school'], ['путешествовать', 'putishéstvavat', 'viajar', 'to travel'], ['разговаривать', 'razgavárivat', 'conversar', 'to talk']]),
      gramatica(12, 'Preposição + который', 'PASSO 1: com preposição, a preposição vem ANTES de «который» e ele recebe o caso que ela pede. PASSO 2: INSTRUMENTAL: «КОТОРЫМ» (m e n), «КОТОРОЙ» (f), «КОТОРЫМИ» (plural): «Человек, с которым я работаю», «Девушка, с которой я говорила», «Друзья, с которыми я путешествую». PASSO 3: PREPOSITIVO: «(о, в, на) КОТОРОМ» (m e n), «КОТОРОЙ» (f), «КОТОРЫХ» (plural): «Город, о котором я говорю», «Школа, в которой я учусь», «Дом, в котором я живу», «Улица, на которой стоит наш дом». PASSO 4: a preposição nunca vai para o fim da frase, como em inglês: «Человек, с которым я работаю» (e não «который я работаю с»). PASSO 5: o verbo e a preposição vêm do verbo da oração relativa: «работать С кем?», «говорить О ком?», «жить В чём?».', {
        tag: 'Frase',
        tabela: [
          { caso: 'instrumental m / n', exemplo: 'Человек, с которым я работаю, мой друг.' }, { caso: 'instrumental f', exemplo: 'Девушка, с которой я говорила, врач.' }, { caso: 'instrumental plural', exemplo: 'Друзья, с которыми я путешествую, из Бразилии.' }, { caso: 'prepositivo m', exemplo: 'Город, о котором я говорю, далеко.' }, { caso: 'prepositivo f', exemplo: 'Школа, в которой я учусь, рядом.' }, { caso: 'prepositivo m', exemplo: 'Дом, в котором я живу, старый.' },
        ],
        erros: [['Человек, который я работаю с, мой друг.', 'Человек, с которым я работаю, мой друг.', 'A preposição fica antes de «который».'], ['Школа, в который я учусь, рядом.', 'Школа, в которой я учусь, рядом.', '«учиться в» + prepositivo feminino: которой.']],
      }),
      producao(5, 'Diga: «Человек, с которым я работаю … Школа, в которой я учусь … Город, о котором я говорю …»'),
    ]),
    sessao('S3', 'Movimento e conversa', [
      revisao(5, 'Escreva 5 frases com «с которым», «о которой», «в котором», «у которого» e «которому».'),
      gramatica(10, 'Que lugar, que rua: movimento e destino', 'PASSO 1: quando há MOVIMENTO (para onde?), depois de «в» e «на» vai o ACUSATIVO: «КОТОРЫЙ» (m inanimado), «КОТОРУЮ» (f), «КОТОРОЕ» (n), «КОТОРЫЕ» (plural): «Магазин, в который я иду», «Улица, на которую мы идём», «Город, в который я еду». PASSO 2: «К» + dativo: «Дом, к которому мы подошли». PASSO 3: «ПО» + dativo: «Улица, по которой я хожу на работу». PASSO 4: «МИМО» + genitivo: «Магазин, мимо которого ты проходишь». PASSO 5: «ОКОЛО» + genitivo: «Дом, около которого есть парк». PASSO 6: para onde, «куда?»: acusativo («в который»); para onde está, «где?»: prepositivo («в котором»).', {
        tag: 'Frase',
        tabela: [
          { frase: 'Магазин, в который я иду, рядом.', traducao: 'A loja aonde vou fica perto.' }, { frase: 'Улица, на которую мы идём, длинная.', traducao: 'A rua para a qual vamos é longa.' }, { frase: 'Дом, к которому мы подошли, красивый.', traducao: 'A casa da qual nos aproximamos é bonita.' }, { frase: 'Улица, по которой я хожу на работу, тихая.', traducao: 'A rua por onde vou ao trabalho é tranquila.' }, { frase: 'Магазин, мимо которого ты проходишь, открыт.', traducao: 'A loja pela qual você passa está aberta.' },
        ],
      }),
      dialogo(8, 'Новый район / O novo bairro', 'Max e Nina falam do bairro de Nina.', [
        ['Макс', 'Нина, ты знаешь улицу, на которой находится музей?', 'Nina, você conhece a rua em que fica o museu?'], ['Нина', 'Да, это улица, по которой я хожу на работу.', 'Sim, é a rua por onde vou ao trabalho.'], ['Макс', 'А магазин, в который ты ходишь за продуктами, далеко отсюда?', 'E a loja aonde você vai fazer compras, fica longe daqui?'],
        ['Нина', 'Нет, это магазин, мимо которого ты проходишь по дороге в музей.', 'Não, é a loja pela qual você passa no caminho ao museu.'], ['Макс', 'Понятно. А человек, с которым ты работаешь, живёт рядом?', 'Entendi. E a pessoa com quem você trabalha mora perto?'], ['Нина', 'Да, он живёт в доме, около которого есть парк.', 'Sim, ele mora numa casa perto da qual há um parque.'],
        ['Макс', 'Отлично! Там, наверное, живут люди, о которых все хорошо говорят.', 'Ótimo! Lá devem morar pessoas de quem todos falam bem.'], ['Нина', 'Конечно! Это район, в котором я хочу жить всегда.', 'Claro! É o bairro em que quero morar sempre.'],
      ]),
      producao(7, 'Descreva em voz alta o seu bairro com 4 orações relativas: rua, loja, vizinho e parque.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre o seu bairro, com «который» em casos diferentes.'),
      exercicios(20, [
        lacuna('Человек, у ___ есть машина, мой сосед.', ['которого', 'который', 'которому'], 'которого', '«у» + genitivo.'), lacuna('Девушка, ___ я звоню, моя подруга.', ['которой', 'которая', 'которую'], 'которой', '«звонить» + dativo feminino.'), lacuna('Человек, с ___ я работаю, мой друг.', ['которым', 'которого', 'который'], 'которым', '«с» + instrumental masculino.'),
        lacuna('Школа, в ___ я учусь, рядом.', ['которой', 'которая', 'которую'], 'которой', '«в» + prepositivo feminino.'), lacuna('Город, о ___ я говорю, далеко.', ['котором', 'который', 'которого'], 'котором', '«о» + prepositivo masculino.'), lacuna('Магазин, в ___ я иду, рядом. (movimento)', ['который', 'котором', 'которого'], 'который', 'Movimento: acusativo masculino inanimado.'),
        lacuna('Улица, на ___ мы идём, длинная.', ['которую', 'которой', 'которая'], 'которую', 'Movimento: acusativo feminino.'), mc('«Друзья, с которыми я путешествую» usa:', ['instrumental plural', 'genitivo plural', 'dativo plural'], 'instrumental plural', '«с» + instrumental.'), mc('A preposição, na oração relativa, fica:', ['antes de «который»', 'no fim da oração', 'depois do verbo'], 'antes de «который»', 'Preposição + который.'),
        ordem('Ordene: «Школа, в которой я учусь, рядом.»', ['Школа', 'в', 'которой', 'я', 'учусь', 'рядом'], 'Школа, в которой я учусь, рядом.', 'Preposição + relativo.'), ouvir('Человек, с которым я работаю, мой друг', ['Человек, с которым я работаю, мой друг', 'Человек, которого я знаю, мой друг', 'Человек, у которого есть машина'], 'Человек, с которым я работаю, мой друг', '«с которым».'), ditado('Дом, в котором я живу, старый', '«в котором».'),
        livre('Escreva 5 frases com «который»: у которого, которому, с которым, о которой e в который.', 'Человек, у которого есть машина, мой сосед. Человек, которому я помогаю, мой друг. Человек, с которым я работаю, врач. Город, о котором я говорю, далеко. Магазин, в который я иду, рядом.'),
      ]),
      producao(5, 'Grave-se descrevendo o seu bairro e as pessoas dele com «который».'),
    ]),
  ],
});
