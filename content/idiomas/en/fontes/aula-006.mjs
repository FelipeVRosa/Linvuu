import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 6, titulo: 'A casa: there is, there are e preposições de lugar', nivel: 'a1',
  objetivo: 'Dizer o que existe em um lugar com «there is / there are», situar as coisas com in, on, at, under, next to, between, behind e in front of, e descrever a sua casa.',
  nota: 'Você descreve a sua casa e diz onde as coisas estão. Próxima aula: família e posse.',
  sessoes: [
    sessao('S1', 'There is e there are', [
      revisao(5, 'Diga o plural de: box, city, child, knife. Depois diga «this», «that», «these» ou «those» para 4 objetos perto de você.'),
      palavras(8, [
        ['living room', 'lívin rum', 'sala de estar', ''], ['kitchen', 'kítchen', 'cozinha', ''], ['bedroom', 'bédrum', 'quarto', ''], ['bathroom', 'báthrum', 'banheiro', ''], ['sofa', 'sôufa', 'sofá', ''], ['bed', 'béd', 'cama', ''], ['window', 'uíndou', 'janela', ''], ['door', 'dór', 'porta', ''],
      ]),
      gramatica(12, 'There is e there are: dizer o que existe', 'PASSO 1: para dizer que algo EXISTE em um lugar, use «there is» (um só, ou incontável) e «there are» (mais de um): «There is a sofa in the living room.», «There are two beds in the bedroom.» PASSO 2: o verbo concorda com o que vem DEPOIS: «There is a book and two pens» (o verbo acompanha o primeiro item), mas «There are two pens and a book». PASSO 3: negativa: «There isn\'t a TV.», «There aren\'t any chairs.» PASSO 4: pergunta: «Is there a kitchen?», «Are there two bathrooms?» Resposta curta: «Yes, there is.» / «No, there isn\'t.» / «Yes, there are.» / «No, there aren\'t.» PASSO 5: na fala, «there is» vira «there\'s». PASSO 6: não existe «has» nem «have» com esse sentido. Não diga «Has a sofa in the room».', {
        tag: 'Frase',
        comparacao: 'em português usamos «tem» («tem um sofá na sala») ou «há». O inglês exige o «there» e muda entre singular e plural: «there is / there are». «Has» e «have» servem para posse, não para existência.',
        tabela: [
          { afirmativa: 'There is a sofa.', negativa: 'There isn\'t a sofa.', pergunta: 'Is there a sofa?' }, { afirmativa: 'There are two beds.', negativa: 'There aren\'t two beds.', pergunta: 'Are there two beds?' }, { afirmativa: 'There\'s a window.', negativa: 'There\'s no window.', pergunta: 'Is there a window?' },
        ],
        erros: [['Has a sofa in the room.', 'There is a sofa in the room.', '«has» é posse; existência é «there is».'], ['There is two beds.', 'There are two beds.', 'Plural pede «are».'], ['Is there two bathrooms?', 'Are there two bathrooms?', 'Plural pede «are».'], ['There are a TV.', 'There is a TV.', 'Singular pede «is».']],
      }),
      producao(5, 'Descreva a sua casa em voz alta com 5 frases: «There is a… There are two… There isn\'t a…»'),
    ]),
    sessao('S2', 'Preposições de lugar', [
      revisao(4, 'Faça 3 frases com «there is», 2 com «there are» e 1 pergunta com «Is there…?».'),
      palavras(6, [
        ['in', 'in', 'em, dentro de', ''], ['on', 'ón', 'sobre, em cima de', ''], ['at', 'ét', 'em (um ponto)', ''], ['under', 'ânder', 'embaixo de', ''], ['next to', 'nékst tu', 'ao lado de', ''], ['between', 'bituíin', 'entre', ''], ['behind', 'biráind', 'atrás de', ''], ['in front of', 'in frânt óv', 'na frente de', ''],
      ]),
      gramatica(14, 'In, on, at e as outras preposições de lugar', 'PASSO 1: «in» é DENTRO de um espaço: «in the kitchen», «in a box», «in Brazil», «in São Paulo». PASSO 2: «on» é SOBRE uma superfície: «on the table», «on the wall», «on the floor». PASSO 3: «at» é um PONTO ou um local de atividade: «at home», «at work», «at school», «at the door», «at the bus stop». PASSO 4: as outras ficam ao redor do objeto: «under the bed» (embaixo), «next to the sofa» (ao lado), «between the chair and the table» (entre), «behind the door» (atrás), «in front of the TV» (na frente). PASSO 5: expressões fixas que NÃO levam artigo: «at home», «at work», «at school», «in bed», «in class». PASSO 6: pergunta e resposta: «Where is the cat?» → «It\'s under the table.»', {
        tag: 'Preposições',
        comparacao: 'em português «em» serve para quase tudo («em casa», «na mesa», «no Brasil»). O inglês separa: «at home», «on the table», «in Brazil».',
        tabela: [
          { preposicao: 'in', ideia: 'dentro', exemplo: 'The keys are in the bag.' }, { preposicao: 'on', ideia: 'sobre uma superfície', exemplo: 'The phone is on the table.' }, { preposicao: 'at', ideia: 'ponto, lugar de atividade', exemplo: 'I am at home.' }, { preposicao: 'under', ideia: 'embaixo', exemplo: 'The cat is under the bed.' },
          { preposicao: 'next to', ideia: 'ao lado', exemplo: 'The lamp is next to the sofa.' }, { preposicao: 'between', ideia: 'entre dois', exemplo: 'The bed is between the window and the door.' }, { preposicao: 'behind', ideia: 'atrás', exemplo: 'The bag is behind the chair.' }, { preposicao: 'in front of', ideia: 'na frente', exemplo: 'The TV is in front of the sofa.' },
        ],
        erros: [['The phone is in the table.', 'The phone is on the table.', 'Superfície pede «on».'], ['I am in home.', 'I am at home.', '«at home» é a forma fixa.'], ['She is at the bed.', 'She is in bed. / She is on the bed.', '«in bed» (deitada, dormindo) ou «on the bed» (em cima da cama).'], ['I am at Brazil.', 'I am in Brazil.', 'País e cidade pedem «in».']],
      }),
      producao(6, 'Diga onde estão 6 coisas do cômodo onde você está: «The phone is on the table. The bag is next to the chair…»'),
    ]),
    sessao('S3', 'Descrever a sua casa', [
      revisao(4, 'Complete em voz alta: «The key is ___ the table. I am ___ home. The cat is ___ the bed.»'),
      palavras(5, [
        ['big', 'bíg', 'grande', ''], ['small', 'smól', 'pequeno', ''], ['old', 'ôuld', 'velho, antigo', ''], ['new', 'niu', 'novo', ''], ['nice', 'náis', 'agradável, bonito', ''],
      ]),
      gramatica(8, 'O adjetivo vem antes e não muda', 'PASSO 1: em inglês o adjetivo vem ANTES do substantivo: «a big kitchen», «a small bedroom». PASSO 2: ele NÃO muda no plural nem no gênero: «a big house», «two big houses» (nunca «bigs»). PASSO 3: com «to be», o adjetivo vem depois do verbo: «The kitchen is big.» PASSO 4: para descrever, junte tudo: «There is a big kitchen and a small bathroom.»', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'em português o adjetivo costuma vir DEPOIS («uma cozinha grande») e concorda em gênero e número («casas grandes»). O inglês coloca antes e nunca flexiona.',
        tabela: [
          { portugues: 'uma cozinha grande', ingles: 'a big kitchen', nota: 'adjetivo antes' }, { portugues: 'duas casas novas', ingles: 'two new houses', nota: 'sem plural no adjetivo' }, { portugues: 'A casa é velha.', ingles: 'The house is old.', nota: 'depois de «to be»' },
        ],
        erros: [['a kitchen big', 'a big kitchen', 'O adjetivo vem antes.'], ['two bigs rooms', 'two big rooms', 'O adjetivo não vai ao plural.']],
      }),
      texto(8, 'My apartment / O meu apartamento', 'I live in a small apartment in a big city. There is a living room, a kitchen, a bedroom and a bathroom. The living room is nice. There is a sofa and a table in the living room. The kitchen is small, but there is a window. There is a lamp next to my bed. I like my apartment.',
        'Moro num apartamento pequeno numa cidade grande. Há uma sala, uma cozinha, um quarto e um banheiro. A sala é agradável. Há um sofá e uma mesa na sala. A cozinha é pequena, mas há uma janela. Há uma lâmpada ao lado da minha cama. Eu gosto do meu apartamento.',
        [['Where does the person live?', 'In a small apartment in a big city.'], ['How many rooms are there?', 'Four: a living room, a kitchen, a bedroom and a bathroom.'], ['Is the kitchen big?', 'No, it isn\'t. It is small.'], ['What is next to the bed?', 'A lamp.']]),
      producao(5, 'Escreva 5 frases sobre a sua casa, com um adjetivo, um «there is/are» e uma preposição de lugar. Depois leia em voz alta.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 6', [
      revisao(5, 'Descreva em voz alta o cômodo onde você está: o que há, onde está cada coisa.'),
      exercicios(20, [
        ouvir('There are two beds in the bedroom', ['There are two beds in the bedroom', 'There is a bed in the bedroom', 'There are two bags in the bedroom'], 'There are two beds in the bedroom', 'Ouça «there are» e «two».'), ouvir('The phone is on the table', ['The phone is on the table', 'The phone is under the table', 'The key is on the table'], 'The phone is on the table', 'Ouça «on» e «phone».'), ditado('There is a sofa in the living room', 'Escreva: there is a sofa in the living room.'), ditado('I am at home', 'Escreva: I am at home.'),
        mc('Qual frase diz que EXISTE uma cama no quarto?', ['There is a bed in the bedroom.', 'Has a bed in the bedroom.', 'It is a bed in the bedroom.'], 'There is a bed in the bedroom.', 'Existência = «there is/are».'), mc('Qual preposição vai com «the table» (a mesa, em cima)?', ['on', 'in', 'at'], 'on', 'Superfície pede «on».'), mc('Qual frase está correta?', ['I am at home.', 'I am in home.', 'I am on home.'], 'I am at home.', '«at home» é fixo.'), mc('Como se diz «um quarto grande»?', ['a big bedroom', 'a bedroom big', 'a bigs bedroom'], 'a big bedroom', 'O adjetivo vem antes.'),
        lacuna('There ___ two chairs. (há)', ['are', 'is', 'has'], 'are', 'Plural: «there are».'), lacuna('The cat is ___ the bed. (embaixo da)', ['under', 'on', 'at'], 'under', '«under» = embaixo.'), lacuna('___ there a TV? (existe uma TV?)', ['Is', 'Are', 'Has'], 'Is', 'Singular: «Is there».'), lacuna('The bag is ___ the chair. (atrás da)', ['behind', 'between', 'at'], 'behind', '«behind» = atrás.'),
        ordem('Ordene: «There is a big kitchen.»', ['There', 'is', 'a', 'big', 'kitchen'], 'There is a big kitchen.', 'There is + a + adjetivo + substantivo.'), ordem('Ordene: «The key is on the table.»', ['The', 'key', 'is', 'on', 'the', 'table'], 'The key is on the table.', '«on» para superfície.'),
        livre('Escreva 4 frases sobre a sua casa: um «there is», um «there are», uma preposição de lugar e um adjetivo.', 'There is a big kitchen. There are two bedrooms. The sofa is in the living room. My apartment is small.'),
      ]),
      producao(5, 'Descreva em 1 minuto a sua casa ideal: cômodos, móveis e onde cada coisa fica.'),
    ]),
  ],
});
