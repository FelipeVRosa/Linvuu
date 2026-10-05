import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 29, titulo: 'Gramática: o quadro geral dos casos', nivel: 'a2',
  objetivo: 'Usar o quadro completo dos seis casos para substantivos, adjetivos, possessivos e pronomes, no singular e no plural, e reconhecer o caso de cada palavra.',
  nota: 'Você tem o quadro completo dos casos e sabe consultá-lo. O resto é prática.',
  sessoes: [
    sessao('S1', 'Quadro dos substantivos', [
      revisao(5, 'Escreva de memória as seis perguntas dos casos (кто? кого? кому? кого? кем? о ком?).'),
      gramatica(20, 'Os seis casos: substantivos', 'Este é o quadro que organiza tudo: seis casos × três gêneros × singular e plural. Leia por colunas: cada coluna (masculino, feminino, neutro, plural) tem o seu padrão. Regra de ouro do acusativo: se é inanimado (coisa), o acusativo é igual ao nominativo no masculino, no neutro e no plural; no feminino, -а vira -у. Se é animado (pessoa ou animal), o acusativo é igual ao genitivo no masculino e no plural. O preposicional vem sempre com preposição (в, на, о, при) e, no plural, termina em -ах ou -ях. Exemplos: стол (m), книга (f), окно (n).', {
        tag: 'Quadro dos casos',
        tabelas: [
          { titulo: 'Singular (стол · книга · окно)', linhas: [
            { caso: 'Nominativo (кто? что?)', masculino: 'стол', feminino: 'книга', neutro: 'окно' }, { caso: 'Genitivo (кого? чего?)', masculino: 'стола', feminino: 'книги', neutro: 'окна' },
            { caso: 'Dativo (кому? чему?)', masculino: 'столу', feminino: 'книге', neutro: 'окну' }, { caso: 'Acusativo (кого? что?)', masculino: 'стол', feminino: 'книгу', neutro: 'окно' },
            { caso: 'Instrumental (кем? чем?)', masculino: 'столом', feminino: 'книгой', neutro: 'окном' }, { caso: 'Preposicional (о ком? о чём?)', masculino: 'о столе', feminino: 'о книге', neutro: 'об окне' },
          ] },
          { titulo: 'Plural', linhas: [
            { caso: 'Nominativo', masculino: 'столы', feminino: 'книги', neutro: 'окна' }, { caso: 'Genitivo', masculino: 'столов', feminino: 'книг', neutro: 'окон' }, { caso: 'Dativo', masculino: 'столам', feminino: 'книгам', neutro: 'окнам' },
            { caso: 'Acusativo (inanimado)', masculino: 'столы', feminino: 'книги', neutro: 'окна' }, { caso: 'Instrumental', masculino: 'столами', feminino: 'книгами', neutro: 'окнами' }, { caso: 'Preposicional', masculino: 'о столах', feminino: 'о книгах', neutro: 'об окнах' },
          ] },
        ],
        erros: [['Я вижу брат.', 'Я вижу брата.', 'Animado masculino: acusativo = genitivo.'], ['Я вижу стола.', 'Я вижу стол.', 'Inanimado masculino: acusativo = nominativo.']],
      }),
      producao(5, 'Decline em voz alta, nos seis casos, a palavra «книга» no singular e no plural.'),
    ]),
    sessao('S2', 'Quadro dos adjetivos e possessivos', [
      revisao(5, 'Escreva os seis casos de «стол» no singular.'),
      gramatica(20, 'Os seis casos: adjetivos e possessivos', 'O adjetivo e o possessivo mudam junto com o substantivo e sempre concordam com ele em gênero, número e caso. Um truque: as terminações do adjetivo são parecidas com a pergunta do caso («какой? какого? какому? каким? о каком?»). O acusativo segue a mesma regra dos substantivos: inanimado = nominativo; animado masculino e plural animado = genitivo. Preposicional: -ом / -ой / -ом / -ых.', {
        tag: 'Quadro dos casos',
        tabelas: [
          { titulo: 'Adjetivo «новый»', linhas: [
            { caso: 'Nominativo', masculino: 'новый', feminino: 'новая', neutro: 'новое', plural: 'новые' }, { caso: 'Genitivo', masculino: 'нового', feminino: 'новой', neutro: 'нового', plural: 'новых' },
            { caso: 'Dativo', masculino: 'новому', feminino: 'новой', neutro: 'новому', plural: 'новым' }, { caso: 'Acusativo (inanimado)', masculino: 'новый', feminino: 'новую', neutro: 'новое', plural: 'новые' },
            { caso: 'Acusativo (animado)', masculino: 'нового', feminino: 'новую', neutro: 'новое', plural: 'новых' }, { caso: 'Instrumental', masculino: 'новым', feminino: 'новой', neutro: 'новым', plural: 'новыми' },
            { caso: 'Preposicional', masculino: 'о новом', feminino: 'о новой', neutro: 'о новом', plural: 'о новых' },
          ] },
          { titulo: 'Possessivo «мой»', linhas: [
            { caso: 'Nominativo', masculino: 'мой', feminino: 'моя', neutro: 'моё', plural: 'мои' }, { caso: 'Genitivo', masculino: 'моего', feminino: 'моей', neutro: 'моего', plural: 'моих' },
            { caso: 'Dativo', masculino: 'моему', feminino: 'моей', neutro: 'моему', plural: 'моим' }, { caso: 'Acusativo (inanimado)', masculino: 'мой', feminino: 'мою', neutro: 'моё', plural: 'мои' },
            { caso: 'Instrumental', masculino: 'моим', feminino: 'моей', neutro: 'моим', plural: 'моими' }, { caso: 'Preposicional', masculino: 'о моём', feminino: 'о моей', neutro: 'о моём', plural: 'о моих' },
          ] },
        ],
        exemplos: [['Я читаю новую книгу.', 'Eu leio um livro novo.'], ['Я иду с моим другом.', 'Eu vou com o meu amigo.'], ['Я звоню моей маме.', 'Eu ligo para a minha mãe.'], ['Я живу в большом городе.', 'Eu moro numa cidade grande.']],
        erros: [['Я читаю новая книга.', 'Я читаю новую книгу.', 'O adjetivo também vai para o acusativo.'], ['Я иду с мой друг.', 'Я иду с моим другом.', 'Possessivo e substantivo mudam juntos.']],
      }),
      producao(5, 'Diga: «Я читаю новую книгу. Я иду с моим другом. Я звоню моей маме. Я живу в большом городе.»'),
    ]),
    sessao('S3', 'Pronomes e preposições', [
      revisao(5, 'Escreva os pronomes pessoais no dativo e no instrumental.'),
      gramatica(12, 'Pronomes e preposições com cada caso', 'Os pronomes pessoais mudam nos seis casos; depois de preposição, os de 3ª pessoa ganham н-: «у него», «к ней», «с ними». Cada preposição pede um caso fixo (ou dois, conforme a pergunta): lembre da regra das perguntas «где?» (parado) e «куда?» (movimento). Em, no, na com movimento: acusativo; parado: preposicional.', {
        tag: 'Quadro dos casos',
        tabelas: [
          { titulo: 'Pronomes pessoais', linhas: [
            { caso: 'Nominativo', 'я': 'я', 'ты': 'ты', 'он': 'он', 'она': 'она', 'мы': 'мы', 'вы': 'вы', 'они': 'они' }, { caso: 'Genitivo / Acusativo', 'я': 'меня', 'ты': 'тебя', 'он': 'его', 'она': 'её', 'мы': 'нас', 'вы': 'вас', 'они': 'их' },
            { caso: 'Dativo', 'я': 'мне', 'ты': 'тебе', 'он': 'ему', 'она': 'ей', 'мы': 'нам', 'вы': 'вам', 'они': 'им' }, { caso: 'Instrumental', 'я': 'мной', 'ты': 'тобой', 'он': 'им', 'она': 'ей', 'мы': 'нами', 'вы': 'вами', 'они': 'ими' },
            { caso: 'Preposicional', 'я': 'обо мне', 'ты': 'о тебе', 'он': 'о нём', 'она': 'о ней', 'мы': 'о нас', 'вы': 'о вас', 'они': 'о них' },
          ] },
          { titulo: 'Preposições por caso', linhas: [
            { caso: 'Genitivo', preposicao: 'у, из, от, до, после, для, без, около, вокруг, с (de)', exemplo: 'у меня, из школы, без сахара' }, { caso: 'Dativo', preposicao: 'к, по', exemplo: 'к другу, по телефону' },
            { caso: 'Acusativo', preposicao: 'в, на (куда?), за (por), про (sobre), через (através)', exemplo: 'в школу, на работу, за маму' }, { caso: 'Instrumental', preposicao: 'с, над, под, перед, за (atrás), между, рядом с', exemplo: 'с другом, над столом' },
            { caso: 'Preposicional', preposicao: 'в, на (где?), о / об, при', exemplo: 'в школе, на работе, о нём' },
          ] },
        ],
      }),
      texto(8, 'Мой друг Игорь / Meu amigo Igor', 'Это мой друг Игорь. У Игоря есть сестра. Он часто звонит сестре. Они вместе ходят в кино. Игорь работает с братом. Я часто думаю о нём. Я очень люблю моего друга.',
        'Este é meu amigo Igor. O Igor tem uma irmã. Ele liga com frequência para a irmã. Eles vão juntos ao cinema. Igor trabalha com o irmão. Eu penso muito nele. Eu gosto muito do meu amigo.',
        [['У кого есть сестра?', 'У Игоря'], ['С кем работает Игорь?', 'С братом'], ['О ком часто думает автор?', 'О нём (об Игоре)']]),
      producao(5, 'Diga 5 frases, cada uma com um caso diferente e uma preposição diferente.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma frase para cada um dos seis casos.'),
      exercicios(20, [
        lacuna('Я читаю ___. (livro)', ['книгу', 'книга', 'книги'], 'книгу', 'Acusativo: -а → -у.'),
        lacuna('У него нет ___. (irmã)', ['сестры', 'сестра', 'сестру'], 'сестры', 'Genitivo: -а → -ы.'),
        lacuna('Я звоню ___. (ao amigo)', ['другу', 'друг', 'друга'], 'другу', 'Dativo masculino.'),
        lacuna('Я иду с ___. (com a amiga)', ['подругой', 'подруга', 'подруге'], 'подругой', 'Instrumental feminino.'),
        lacuna('Мы говорим о ___. (dele)', ['нём', 'него', 'ним'], 'нём', 'Preposicional do pronome «он».'),
        lacuna('Он живёт в ___. (cidade)', ['городе', 'город', 'города'], 'городе', 'Preposicional: -е.'),
        lacuna('Это книга ___. (do irmão)', ['брата', 'брат', 'брату'], 'брата', 'Genitivo de posse.'),
        lacuna('Это ___ окно. (novo)', ['новое', 'новый', 'новая'], 'новое', 'окно é neutro.'),
        lacuna('Я вижу ___ собаку. (a nova)', ['новую', 'новая', 'новой'], 'новую', 'Acusativo feminino do adjetivo.'),
        lacuna('Я иду к ___. (a ele)', ['нему', 'ему', 'него'], 'нему', 'Dativo do pronome com н- depois de «к».'),
        mc('Acusativo de «брат» (animado):', ['брата', 'брат', 'брату'], 'брата', 'Animado masculino: acusativo = genitivo.'),
        mc('Acusativo de «стол» (inanimado):', ['стол', 'стола', 'столу'], 'стол', 'Inanimado masculino: acusativo = nominativo.'),
        mc('Instrumental feminino de «новый»:', ['новой', 'новую', 'новым'], 'новой', 'Instrumental feminino: -ой.'),
        mc('Preposicional plural de «книга»:', ['книгах', 'книгам', 'книгами'], 'книгах', 'Preposicional plural: -ах.'),
        ouvir('Мы говорим о нём', ['Мы говорим о нём', 'Мы говорим с ним', 'Мы говорим ему'], 'Мы говорим о нём', 'о + preposicional.'),
        livre('Escreva 5 frases, cada uma com um caso diferente.', 'Я читаю книгу. У меня нет сестры. Я звоню маме. Я иду с другом. Я живу в Москве.'),
      ]),
      producao(5, 'Grave-se dizendo 6 frases, cada uma com um caso diferente.'),
    ]),
  ],
});
