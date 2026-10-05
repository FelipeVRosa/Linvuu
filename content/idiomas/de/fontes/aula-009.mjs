import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 9, titulo: 'Cidade e direções', nivel: 'a1',
  objetivo: 'Nomear lugares da cidade, distinguir Wo? (onde) de Wohin? (para onde) com «in», usar «zu» e dar e pedir direções.',
  nota: 'Você se orienta na cidade. Próxima aula: revisão e prova do primeiro bloco.',
  sessoes: [
    sessao('S1', 'Lugares: onde e para onde', [
      revisao(5, 'Escreva 4 frases sobre o que você faz de manhã e à noite.'),
      palavras(10, [
        ['der Bahnhof', 'der bán-hôf', 'estação de trem', 'station'], ['die Post', 'di post', 'correio', 'post office'], ['die Bank', 'di bank', 'banco', 'bank'], ['der Supermarkt', 'der zúper-markt', 'supermercado', 'supermarket'], ['die Apotheke', 'di apotéke', 'farmácia', 'pharmacy'], ['das Kino', 'das kíno', 'cinema', 'cinema'],
        ['das Museum', 'das muzéum', 'museu', 'museum'], ['der Park', 'der park', 'parque', 'park'], ['die Schule', 'di xúle', 'escola', 'school'], ['das Krankenhaus', 'das kránken-haus', 'hospital', 'hospital'], ['die Haltestelle', 'di hálte-xtéle', 'ponto de ônibus', 'bus stop'], ['das Restaurant', 'das restorán', 'restaurante', 'restaurant'],
      ]),
      gramatica(10, 'Wo? e Wohin?: «em» e «para»', 'Com «in», o alemão distingue ONDE você está (Wo?) de PARA ONDE você vai (Wohin?). Wo? usa o DATIVO: masculino e neutro «im» (in dem), feminino «in der». Wohin? usa o ACUSATIVO: masculino «in den», feminino «in die», neutro «ins» (in das). Para ir até um lugar existe também «zu» (sempre dativo): zum (zu dem) Bahnhof, zur (zu der) Post; e «nach» para cidades e países: nach Berlin. Os casos completos vêm nas aulas 11 a 13; por enquanto, memorize o quadro.', {
        tag: 'Preposições',
        comparacao: 'em português a preposição muda («no parque», «ao parque»). Em alemão a preposição é a mesma («in»), e quem muda é o artigo.',
        tabela: [
          { genero: 'masculino', wo: 'im Park', wohin: 'in den Park', zu: 'zum Park' }, { genero: 'feminino', wo: 'in der Schule', wohin: 'in die Schule', zu: 'zur Schule' }, { genero: 'neutro', wo: 'im Kino', wohin: 'ins Kino', zu: 'zum Kino' },
        ],
        erros: [['Ich gehe im Kino.', 'Ich gehe ins Kino.', 'Com movimento (Wohin?): acusativo, «ins».'], ['Ich bin in den Park.', 'Ich bin im Park.', 'Parado (Wo?): dativo, «im».']],
      }),
      producao(5, 'Diga: «Ich bin im Park. Ich gehe in den Park. Ich bin in der Schule. Ich gehe in die Schule. Ich gehe ins Kino.»'),
    ]),
    sessao('S2', 'Pedir e dar direções', [
      revisao(5, 'Escreva os artigos «im, in der, ins, in den, in die» e um exemplo de cada.'),
      palavras(8, [
        ['links', 'links', 'à esquerda', 'left'], ['rechts', 'reçts', 'à direita', 'right'], ['geradeaus', 'gueráde-áus', 'em frente', 'straight ahead'], ['die Ampel', 'di ámpel', 'semáforo', 'traffic light'], ['die Kreuzung', 'di króitsung', 'cruzamento', 'crossing'], ['die Straße', 'di xtráse', 'rua', 'street'], ['weit', 'vait', 'longe', 'far'], ['nah', 'na', 'perto', 'near'],
      ]),
      gramatica(12, 'Pedir e dar direções (imperativo formal)', 'Para pedir: «Entschuldigung, wo ist die Post?» ou «Wie komme ich zum Bahnhof?». Para responder, usa-se o imperativo formal: o verbo vem em PRIMEIRO lugar, seguido de «Sie»: «Gehen Sie geradeaus.» «Biegen Sie links ab.» («abbiegen» é separável: o prefixo vai para o fim.) «Nehmen Sie die zweite Straße rechts.» Outras expressões úteis: an der Ampel (no semáforo), an der Kreuzung (no cruzamento), neben (ao lado de), gegenüber (em frente a), in der Nähe (por perto).', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Gehen Sie geradeaus.', pt: 'Siga em frente.' }, { frase: 'Biegen Sie links ab.', pt: 'Vire à esquerda.' }, { frase: 'Biegen Sie rechts ab.', pt: 'Vire à direita.' }, { frase: 'Nehmen Sie die zweite Straße links.', pt: 'Pegue a segunda rua à esquerda.' },
          { frase: 'An der Ampel links.', pt: 'No semáforo, à esquerda.' }, { frase: 'Das ist nicht weit.', pt: 'Não é longe.' }, { frase: 'Es ist neben der Bank.', pt: 'Fica ao lado do banco.' },
        ],
        erros: [['Sie gehen geradeaus!', 'Gehen Sie geradeaus!', 'Imperativo formal: verbo primeiro, depois «Sie».']],
      }),
      producao(5, 'Diga: «Entschuldigung, wo ist die Post? — Gehen Sie geradeaus. Biegen Sie links ab.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases explicando como chegar a um lugar que você conhece.'),
      dialogo(10, 'Wie komme ich zum Bahnhof? / Como chego à estação?', 'Uma turista pede informação na rua.', [
        ['Touristin', 'Entschuldigung, wo ist der Bahnhof?', 'Com licença, onde fica a estação?'], ['Passant', 'Der Bahnhof? Gehen Sie geradeaus bis zur Ampel.', 'A estação? Siga em frente até o semáforo.'], ['Touristin', 'Und dann?', 'E depois?'],
        ['Passant', 'Dann biegen Sie links ab. Der Bahnhof ist neben der Post.', 'Depois vire à esquerda. A estação fica ao lado do correio.'], ['Touristin', 'Ist das weit?', 'É longe?'], ['Passant', 'Nein, es ist nicht weit. Zu Fuß sind es zehn Minuten.', 'Não, não é longe. A pé são dez minutos.'],
        ['Touristin', 'Gibt es hier eine Apotheke?', 'Há uma farmácia por aqui?'], ['Passant', 'Ja, die Apotheke ist gegenüber der Bank.', 'Sim, a farmácia fica em frente ao banco.'], ['Touristin', 'Vielen Dank!', 'Muito obrigada!'], ['Passant', 'Gern geschehen! Auf Wiedersehen!', 'De nada! Até logo!'],
      ]),
      texto(10, 'Meine Stadt / Minha cidade', 'Ich wohne in Berlin. Im Zentrum gibt es einen Bahnhof, eine Post und einen Supermarkt. Das Kino ist neben dem Park. Ich gehe oft ins Kino. Ich fahre mit dem Bus zur Arbeit. Die Schule ist nicht weit.',
        'Eu moro em Berlim. No centro há uma estação, um correio e um supermercado. O cinema fica ao lado do parque. Vou com frequência ao cinema. Vou de ônibus para o trabalho. A escola não é longe.',
        [['Was gibt es im Zentrum?', 'Einen Bahnhof, eine Post und einen Supermarkt'], ['Wo ist das Kino?', 'Neben dem Park'], ['Wie fährt der Autor zur Arbeit?', 'Mit dem Bus']]),
      producao(5, 'Descreva a sua cidade em voz alta: onde você mora e o que há perto da sua casa.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: onde você está, para onde você vai, como chegar à estação e onde fica a farmácia.'),
      exercicios(20, [
        lacuna('Ich bin ___ Park. (Wo?)', ['im', 'in den', 'ins'], 'im', 'Parado: dativo.'), lacuna('Ich gehe ___ Park. (Wohin?)', ['in den', 'im', 'in dem'], 'in den', 'Movimento: acusativo.'), lacuna('Wir sind ___ Schule. (Wo?)', ['in der', 'in die', 'im'], 'in der', 'Feminino, parado.'),
        lacuna('Er geht ___ Schule. (Wohin?)', ['in die', 'in der', 'ins'], 'in die', 'Feminino, movimento.'), lacuna('Sie geht ___ Kino. (Wohin?)', ['ins', 'im', 'in den'], 'ins', 'Neutro, movimento: in das = ins.'),
        lacuna('Ich fahre ___ Bahnhof.', ['zum', 'zur', 'ins'], 'zum', 'zu + dem = zum.'), lacuna('Ich gehe ___ Post.', ['zur', 'zum', 'ins'], 'zur', 'zu + der = zur.'),
        mc('«Gehen Sie geradeaus» é:', ['imperativo formal', 'pergunta', 'passado'], 'imperativo formal', 'Verbo primeiro, depois «Sie».'), mc('«rechts» significa:', ['à direita', 'à esquerda', 'em frente'], 'à direita', 'rechts = direita.'),
        ordem('Ordene: «Vire à esquerda.»', ['Biegen', 'Sie', 'links', 'ab'], 'Biegen Sie links ab.', 'abbiegen: o prefixo vai para o fim.'), ouvir('Wo ist die Post?', ['Wo ist die Post?', 'Wo ist der Bahnhof?', 'Wo ist die Bank?'], 'Wo ist die Post?', '«wo» = onde.'),
        ditado('Gehen Sie geradeaus', 'Imperativo formal.'), mc('Para pedir uma direção, você diz:', ['Entschuldigung, wo ist die Post?', 'Ich bin die Post.', 'Die Post ist ein Bahnhof.'], 'Entschuldigung, wo ist die Post?', 'Pergunta educada.'),
        livre('Escreva 4 frases: onde fica um lugar, como chegar lá, para onde você vai e onde você mora.', 'Die Post ist neben der Bank. Gehen Sie geradeaus. Ich gehe ins Kino. Ich wohne in Berlin.'),
      ]),
      producao(5, 'Grave-se pedindo e dando direções.'),
    ]),
  ],
});
