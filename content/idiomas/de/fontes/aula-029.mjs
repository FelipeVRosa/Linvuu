import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 29, titulo: 'Acusativo e preposições de lugar: Wo? × Wohin?', nivel: 'a2',
  objetivo: 'Usar as preposições que pedem acusativo (durch, für, gegen, ohne, um) e as nove preposições de duas vias, escolhendo dativo (Wo?, sem movimento) ou acusativo (Wohin?, com movimento).',
  nota: 'Você escolhe o caso certo depois das preposições de lugar. Próxima aula: os verbos de posição e a Declinação-N.',
  sessoes: [
    sessao('S1', 'Durch, für, gegen, ohne, um', [
      revisao(5, 'Escreva as sete preposições do dativo e uma frase com cada uma.'),
      palavras(8, [
        ['der Fluss', 'der flus', 'rio', 'river'], ['der Wald', 'der valt', 'floresta', 'forest'], ['die Brücke', 'di brüke', 'ponte', 'bridge'], ['der Tunnel', 'der túnel', 'túnel', 'tunnel'], ['der Strand', 'der xtrant', 'praia', 'beach'], ['der Berg', 'der berk', 'montanha', 'mountain'], ['der See', 'der ze', 'lago', 'lake'], ['das Meer', 'das mér', 'mar', 'sea'],
      ]),
      gramatica(12, 'Durch, für, gegen, ohne, um: sempre acusativo', 'PASSO 1: cinco preposições pedem SEMPRE o acusativo: durch (através de), für (para, por), gegen (contra; por volta de), ohne (sem) e um (em volta de; às, nas horas). Decore-as em fila: durch, für, gegen, ohne, um. PASSO 2: lembre que no acusativo só o masculino muda (den, einen, keinen). PASSO 3: contrações comuns: durch das = durchs, für das = fürs, um das = ums. PASSO 4: «gegen» também aproxima horas: «Wir kommen gegen acht Uhr» (por volta das oito).', {
        tag: 'Preposições',
        tabela: [
          { preposicao: 'durch', significado: 'através de', exemplo: 'Wir gehen durch den Wald.' }, { preposicao: 'für', significado: 'para, por', exemplo: 'Das Geschenk ist für meinen Bruder.' }, { preposicao: 'gegen', significado: 'contra; por volta de', exemplo: 'Ich bin gegen den Plan. Wir kommen gegen acht Uhr.' },
          { preposicao: 'ohne', significado: 'sem', exemplo: 'Ich trinke Kaffee ohne Zucker.' }, { preposicao: 'um', significado: 'em volta de; às (horas)', exemplo: 'Die Kinder laufen um den Tisch. Der Zug fährt um acht Uhr.' },
        ],
        erros: [['Das Geschenk ist für meinem Bruder.', 'Das Geschenk ist für meinen Bruder.', '«für» pede acusativo.'], ['Ich trinke Kaffee ohne dem Zucker.', 'Ich trinke Kaffee ohne Zucker.', '«ohne» pede acusativo (e aqui nem leva artigo).']],
      }),
      producao(5, 'Diga: «Wir gehen durch den Wald. Das Geschenk ist für meine Mutter. Ich trinke Kaffee ohne Zucker.»'),
    ]),
    sessao('S2', 'In, an, auf: onde e para onde', [
      revisao(5, 'Escreva «im Park, in den Park, in der Schule, in die Schule, im Kino, ins Kino» e uma frase com cada.'),
      palavras(8, [
        ['das Dach', 'das darr', 'telhado', 'roof'], ['die Wand', 'di vant', 'parede', 'wall'], ['der Boden', 'der bôden', 'chão', 'floor'], ['die Ecke', 'di éke', 'canto, esquina', 'corner'],
        ['die Tür', 'di tür', 'porta', 'door'], ['das Fenster', 'das fénster', 'janela', 'window'], ['die Decke', 'di déke', 'teto; cobertor', 'ceiling; blanket'], ['der Tisch', 'der tix', 'mesa', 'table'],
      ]),
      gramatica(12, 'As nove preposições de duas vias: a regra de ouro', 'PASSO 1: nove preposições mudam de caso conforme a pergunta: an, auf, hinter, in, neben, über, unter, vor, zwischen. PASSO 2: REGRA DE OURO: se a pergunta é WO? (onde, SEM movimento), use o DATIVO; se é WOHIN? (para onde, COM movimento), use o ACUSATIVO. PASSO 3: nesta sessão, as três mais comuns: «in» (dentro de), «an» (junto de, encostado em), «auf» (sobre, em cima de). PASSO 4: contrações: in dem = im; an dem = am; in das = ins; an das = ans; auf das = aufs. PASSO 5: só o masculino muda entre os dois casos: Wo? «dem», Wohin? «den»; feminino: Wo? «der», Wohin? «die»; neutro: Wo? «dem», Wohin? «das». PASSO 6: cuidado: «Ich bin im Garten» (estado) × «Ich gehe in den Garten» (movimento).', {
        tag: 'Preposições',
        comparacao: 'o português usa preposições diferentes («no jardim» × «ao jardim»). O alemão usa a MESMA preposição («in») e deixa o caso mostrar se há movimento.',
        tabela: [
          { genero: 'masculino', wo: 'im Garten / am Tisch / auf dem Tisch', wohin: 'in den Garten / an den Tisch / auf den Tisch' }, { genero: 'feminino', wo: 'in der Küche / an der Wand / auf der Straße', wohin: 'in die Küche / an die Wand / auf die Straße' },
          { genero: 'neutro', wo: 'im Haus / am Fenster / auf dem Dach', wohin: 'ins Haus / ans Fenster / aufs Dach' }, { genero: 'plural', wo: 'in den Zimmern / auf den Straßen', wohin: 'in die Zimmer / auf die Straßen' },
        ],
        exemplos: [['Das Buch liegt auf dem Tisch.', 'O livro está sobre a mesa.'], ['Ich lege das Buch auf den Tisch.', 'Eu ponho o livro sobre a mesa.'], ['Die Jacke hängt an der Tür.', 'A jaqueta está pendurada na porta.'], ['Ich hänge die Jacke an die Tür.', 'Eu penduro a jaqueta na porta.']],
        erros: [['Das Buch liegt auf den Tisch.', 'Das Buch liegt auf dem Tisch.', 'Sem movimento (Wo?): dativo.'], ['Ich lege das Buch auf dem Tisch.', 'Ich lege das Buch auf den Tisch.', 'Com movimento (Wohin?): acusativo.']],
      }),
      producao(5, 'Descreva uma sala em voz alta, primeiro onde as coisas estão (Wo?) e depois para onde você as leva (Wohin?).'),
    ]),
    sessao('S3', 'Hinter, neben, über, unter, vor, zwischen', [
      revisao(5, 'Escreva as nove preposições de duas vias e a regra de ouro (Wo? × Wohin?).'),
      gramatica(10, 'As outras seis preposições de duas vias', 'PASSO 1: as seis restantes seguem a mesma regra: hinter (atrás de), neben (ao lado de), über (acima de, sobre), unter (embaixo de), vor (na frente de), zwischen (entre). PASSO 2: «Wo?» pede dativo: «Die Tasche steht vor der Tür.» PASSO 3: «Wohin?» pede acusativo: «Ich stelle die Tasche vor die Tür.» PASSO 4: «zwischen» pede um plural ou dois itens: «zwischen den Büchern» (Wo?), «zwischen die Bücher» (Wohin?).', {
        tag: 'Preposições',
        tabela: [
          { preposicao: 'hinter', significado: 'atrás de', exemplo: 'Die Jacke hängt hinter der Tür.' }, { preposicao: 'neben', significado: 'ao lado de', exemplo: 'Der Schlüssel liegt neben dem Handy.' }, { preposicao: 'über', significado: 'acima de, sobre', exemplo: 'Die Lampe hängt über dem Tisch.' }, { preposicao: 'unter', significado: 'embaixo de', exemplo: 'Die Katze liegt unter dem Tisch.' },
          { preposicao: 'vor', significado: 'na frente de', exemplo: 'Die Tasche steht vor der Tür.' }, { preposicao: 'zwischen', significado: 'entre', exemplo: 'Ich lege es zwischen die Bücher.' },
        ],
      }),
      dialogo(10, 'Wo ist …? / Onde está …?', 'Dois colegas arrumam a sala.', [
        ['Mia', 'Wo ist mein Schlüssel?', 'Onde está a minha chave?'], ['Jonas', 'Er liegt auf dem Tisch, neben dem Handy.', 'Está sobre a mesa, ao lado do celular.'], ['Mia', 'Und meine Tasche?', 'E a minha bolsa?'],
        ['Jonas', 'Sie steht vor der Tür.', 'Está na frente da porta.'], ['Mia', 'Ich stelle sie auf den Stuhl.', 'Vou colocá-la na cadeira.'], ['Jonas', 'Und die Jacke hängt hinter der Tür.', 'E a jaqueta está pendurada atrás da porta.'],
        ['Mia', 'Ich hänge sie an die Wand.', 'Vou pendurá-la na parede.'], ['Jonas', 'Gut. Wohin legst du die Zeitung?', 'Ótimo. Para onde você põe o jornal?'], ['Mia', 'Ich lege sie zwischen die Bücher.', 'Vou colocá-lo entre os livros.'], ['Jonas', 'Perfekt. Jetzt sieht das Zimmer schön aus.', 'Perfeito. Agora a sala está bonita.'],
      ]),
      producao(5, 'Diga onde 6 objetos da sua casa estão e para onde você os leva, com as seis preposições.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases: 3 com Wo? (dativo) e 3 com Wohin? (acusativo).'),
      exercicios(20, [
        lacuna('Das Geschenk ist für ___ Bruder. (meu)', ['meinen', 'meinem', 'mein'], 'meinen', 'für + acusativo.'), lacuna('Wir gehen durch ___ Wald.', ['den', 'dem', 'der'], 'den', 'durch + acusativo.'), lacuna('Ich trinke Kaffee ___ Zucker.', ['ohne', 'mit', 'von'], 'ohne', 'ohne = sem.'),
        lacuna('Das Buch liegt auf ___ Tisch. (Wo?)', ['dem', 'den', 'das'], 'dem', 'Wo? dativo.'), lacuna('Ich lege das Buch auf ___ Tisch. (Wohin?)', ['den', 'dem', 'der'], 'den', 'Wohin? acusativo.'), lacuna('Die Jacke hängt an ___ Tür. (Wo?)', ['der', 'die', 'dem'], 'der', 'Wo? dativo feminino.'),
        lacuna('Ich hänge die Jacke an ___ Tür. (Wohin?)', ['die', 'der', 'den'], 'die', 'Wohin? acusativo feminino.'), lacuna('Ich gehe ___ Haus. (Wohin?)', ['ins', 'im', 'in dem'], 'ins', 'in das = ins.'), lacuna('Er ist ___ Garten. (Wo?)', ['im', 'ins', 'in den'], 'im', 'in dem = im.'),
        mc('Wo? pede:', ['dativo', 'acusativo', 'genitivo'], 'dativo', 'Sem movimento.'), mc('Wohin? pede:', ['acusativo', 'dativo', 'genitivo'], 'acusativo', 'Com movimento.'), mc('Qual preposição pede dativo SEMPRE?', ['mit', 'für', 'durch'], 'mit', 'mit está no grupo do dativo.'),
        ordem('Ordene: «Eu ponho o livro sobre a mesa.»', ['Ich', 'lege', 'das', 'Buch', 'auf', 'den', 'Tisch'], 'Ich lege das Buch auf den Tisch.', 'Wohin? acusativo.'), ouvir('Die Jacke hängt an der Tür', ['Die Jacke hängt an der Tür', 'Ich hänge die Jacke an die Tür', 'Die Jacke liegt auf dem Stuhl'], 'Die Jacke hängt an der Tür', 'Wo? dativo.'), ditado('Die Tasche steht vor der Tür', 'vor + dativo (Wo?).'),
        livre('Escreva 5 frases: uma com «für», uma com «ohne», duas com Wo? e uma com Wohin?', 'Das Geschenk ist für meine Mutter. Ich trinke Kaffee ohne Zucker. Das Buch liegt auf dem Tisch. Die Lampe hängt über dem Tisch. Ich lege das Buch auf den Stuhl.'),
      ]),
      producao(5, 'Grave-se descrevendo a sua casa: onde as coisas estão e para onde você as leva.'),
    ]),
  ],
});
