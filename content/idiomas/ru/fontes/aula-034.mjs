import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 34, titulo: 'Saúde e corpo: no médico e na farmácia', nivel: 'a2',
  objetivo: 'Dizer o que dói («У меня болит…»), descrever sintomas, entender uma consulta e as instruções do médico, e comprar remédio na farmácia.',
  nota: 'Você se explica no médico e na farmácia. Próxima aula: trabalho e profissões.',
  sessoes: [
    sessao('S1', 'O corpo e «болит»', [
      revisao(5, 'Escreva 5 frases com «чтобы» e 5 com «если».'),
      palavras(10, [
        ['голова', 'galavá', 'cabeça', 'head'], ['горло', 'górla', 'garganta', 'throat'], ['живот', 'zhivót', 'barriga', 'stomach'], ['спина', 'spiná', 'costas', 'back'], ['рука', 'ruká', 'mão, braço', 'hand, arm'],
        ['нога', 'nagá', 'perna, pé', 'leg, foot'], ['зуб', 'zup', 'dente', 'tooth'], ['глаз', 'glas', 'olho', 'eye'], ['ухо', 'úkha', 'ouvido, orelha', 'ear'], ['нос', 'nos', 'nariz', 'nose'],
      ]),
      gramatica(10, 'Dizer o que dói', 'PASSO 1: para dizer que algo dói, use «У МЕНЯ БОЛИТ» + a parte do corpo: «У меня болит голова» (a minha cabeça dói). PASSO 2: o verbo concorda com a PARTE DO CORPO: no singular, «болит» (голова, горло, спина, рука, нога, зуб); no plural, «БОЛЯТ» (зубы, глаза, уши, ноги). PASSO 3: «У меня болят зубы» (os meus dentes doem). PASSO 4: para outras pessoas, troque o pronome: «У него болит горло», «У неё болят ноги». PASSO 5: «Мне больно» = «dói» (em geral). PASSO 6: «Я болею» = «estou doente» (outro uso do verbo). PASSO 7: plurais irregulares: «рука → руки, нога → ноги, глаз → глаза, ухо → уши, зуб → зубы».', {
        tag: 'Frase',
        comparacao: 'em português: «dói a minha cabeça». Em russo: «у меня болит голова», literalmente «junto de mim dói a cabeça». O verbo sempre concorda com a parte do corpo, não com «я».',
        tabela: [
          { frase: 'У меня болит голова.', traducao: 'Estou com dor de cabeça.' }, { frase: 'У меня болит горло.', traducao: 'Estou com dor de garganta.' }, { frase: 'У меня болит спина.', traducao: 'Estou com dor nas costas.' }, { frase: 'У меня болят зубы.', traducao: 'Estou com dor de dente.' },
          { frase: 'У него болят глаза.', traducao: 'Os olhos dele doem.' }, { frase: 'У неё болят ноги.', traducao: 'As pernas dela doem.' },
        ],
        erros: [['У меня болит зубы.', 'У меня болят зубы.', 'Plural: «болят».'], ['Я болит голова.', 'У меня болит голова.', 'Use «у меня» + verbo concordando com a parte do corpo.'], ['Я болею голова.', 'У меня болит голова.', '«Я болею» significa «estou doente».']],
      }),
      producao(5, 'Diga: «У меня болит голова. У меня болит горло. У меня болят зубы.»'),
    ]),
    sessao('S2', 'Sintomas e como se sente', [
      revisao(5, 'Escreva 6 frases: o que dói em você, nele e nela.'),
      palavras(8, [
        ['температура', 'timpiratúra', 'febre, temperatura', 'temperature'], ['кашель', 'káshel', 'tosse', 'cough'], ['насморк', 'násmark', 'coriza', 'runny nose'], ['простуда', 'prastúda', 'resfriado', 'cold'],
        ['грипп', 'grip', 'gripe', 'flu'], ['аллергия', 'allérguiya', 'alergia', 'allergy'], ['слабость', 'sláhost', 'fraqueza', 'weakness'], ['головокружение', 'galavakruzhéniye', 'tontura', 'dizziness'],
      ]),
      gramatica(12, 'Sintomas e estado de saúde', 'PASSO 1: para ter um sintoma, use «У МЕНЯ ЕСТЬ» (ou só «У меня»): «У меня температура», «У меня кашель», «У меня насморк». PASSO 2: «Я простудился» (homem) / «Я простудилась» (mulher) = «estou resfriado(a)». PASSO 3: para dizer como se sente, use «Я ЧУВСТВУЮ СЕБЯ» + advérbio: «Я чувствую себя плохо / хорошо». PASSO 4: a forma impessoal com o dativo é muito comum: «Мне плохо» (estou mal), «Мне лучше» (estou melhor). PASSO 5: perguntas do médico: «Как вы себя чувствуете?», «Что у вас болит?», «Давно?», «Какая температура?». PASSO 6: para a temperatura: «У меня температура тридцать восемь» (tenho 38 de febre).', {
        tag: 'Frase',
        tabela: [
          { frase: 'У меня температура.', traducao: 'Estou com febre.' }, { frase: 'У меня кашель и насморк.', traducao: 'Estou com tosse e coriza.' }, { frase: 'Я простудился. / Я простудилась.', traducao: 'Estou resfriado. / Estou resfriada.' }, { frase: 'Я чувствую себя плохо.', traducao: 'Estou me sentindo mal.' },
          { frase: 'Мне лучше.', traducao: 'Estou melhor.' }, { frase: 'Как вы себя чувствуете?', traducao: 'Como o senhor/a senhora está se sentindo?' },
        ],
        erros: [['Я имею кашель.', 'У меня кашель.', 'Para sintomas, use «у меня».'], ['Я чувствую плохо.', 'Я чувствую себя плохо.', 'Falta «себя»: «чувствовать себя».']],
      }),
      producao(5, 'Diga: «У меня температура. У меня кашель. Я чувствую себя плохо. Мне лучше.»'),
    ]),
    sessao('S3', 'No médico e na farmácia', [
      revisao(5, 'Escreva 5 frases sobre os seus sintomas e como se sente.'),
      gramatica(10, 'Instruções do médico', 'PASSO 1: o médico usa o IMPERATIVO (aula 32) e o «вы»: «Откройте рот», «Принимайте эти таблетки», «Пейте много воды», «Отдыхайте». PASSO 2: para dizer quantas vezes: «ДВА РАЗА В ДЕНЬ» (duas vezes ao dia), «три раза в день». Depois de 2, 3 e 4, use «раза»; com 5 em diante, «раз». PASSO 3: «до еды» = antes de comer; «после еды» = depois de comer. PASSO 4: o que é permitido ou proibido: «Вам нужно / нельзя» + infinitivo: «Вам нужно отдыхать», «Вам нельзя пить холодное». PASSO 5: na farmácia: «Дайте, пожалуйста, таблетки от кашля» (me dê, por favor, comprimidos para tosse); «от» + genitivo = «contra». PASSO 6: «Выздоравливайте!» = «melhoras!».', {
        tag: 'Frase',
        tabela: [
          { situacao: 'abrir a boca', frase: 'Откройте рот и скажите «а».' }, { situacao: 'remédio e frequência', frase: 'Принимайте таблетки два раза в день после еды.' }, { situacao: 'conselho', frase: 'Пейте много воды и отдыхайте.' }, { situacao: 'proibição', frase: 'Вам нельзя пить холодное.' }, { situacao: 'farmácia', frase: 'Дайте, пожалуйста, таблетки от кашля.' }, { situacao: 'despedida', frase: 'Выздоравливайте!' },
        ],
      }),
      dialogo(9, 'У врача / No médico', 'Anton está resfriado e vai ao médico.', [
        ['Врач', 'Здравствуйте. Что у вас болит?', 'Olá. O que o senhor está sentindo?'], ['Антон', 'Здравствуйте, доктор. У меня болит горло и голова.', 'Olá, doutora. Estou com dor de garganta e de cabeça.'], ['Врач', 'Давно?', 'Há muito tempo?'],
        ['Антон', 'Три дня. Ещё у меня кашель и температура.', 'Três dias. Também tenho tosse e febre.'], ['Врач', 'Какая температура?', 'Qual é a temperatura?'], ['Антон', 'Вчера было тридцать восемь.', 'Ontem estava em trinta e oito.'],
        ['Врач', 'Откройте рот и скажите «а». У вас простуда.', 'Abra a boca e diga «a». O senhor está resfriado.'], ['Антон', 'Что мне делать?', 'O que devo fazer?'], ['Врач', 'Пейте много тёплого чая, принимайте эти таблетки два раза в день и отдыхайте.', 'Beba muito chá quente, tome estes comprimidos duas vezes ao dia e descanse.'],
      ]),
      producao(6, 'Faça o papel do paciente em voz alta: diga o que dói, há quanto tempo e o que o médico manda fazer.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno diálogo de 6 falas no médico.'),
      exercicios(20, [
        lacuna('У меня ___ голова. (dói)', ['болит', 'болят', 'болею'], 'болит', 'голова é singular: болит.'), lacuna('У меня ___ зубы. (doem)', ['болят', 'болит', 'болеют'], 'болят', 'зубы é plural: болят.'), lacuna('У ___ болит горло. (nele)', ['него', 'его', 'он'], 'него', 'Depois de «у»: него.'),
        lacuna('Я ___ себя плохо. (sinto)', ['чувствую', 'чувствовать', 'чувствуешь'], 'чувствую', '«я чувствую себя»…'), lacuna('Пейте много ___. (água)', ['воды', 'вода', 'воду'], 'воды', 'много + genitivo: воды.'), lacuna('Принимайте таблетки два ___ в день.', ['раза', 'раз', 'разов'], 'раза', 'Com 2, 3, 4: раза.'),
        mc('«У меня температура» significa:', ['Estou com febre', 'Estou com frio', 'Estou com tosse'], 'Estou com febre', 'температура = febre.'), mc('«Я болею» significa:', ['Estou doente', 'Dói-me a cabeça', 'Estou com pressa'], 'Estou doente', '«болеть» = estar doente.'), mc('«Выздоравливайте!» é:', ['«Melhoras!»', '«Cuidado!»', '«Obrigado!»'], '«Melhoras!»', 'Desejo de melhoras.'),
        ordem('Ordene: «У меня болит голова.»', ['У', 'меня', 'болит', 'голова'], 'У меня болит голова.', '«у меня» + verbo + parte do corpo.'), ouvir('У меня болят зубы', ['У меня болят зубы', 'У меня болит зуб', 'У меня болит голова'], 'У меня болят зубы', 'Plural: болят.'), ditado('Пейте много воды', 'Imperativo com «вы».'),
        livre('Escreva 5 frases: o que dói, um sintoma, como você se sente, um conselho do médico e quantas vezes tomar um remédio.', 'У меня болит голова. У меня температура. Я чувствую себя плохо. Пейте много воды. Принимайте таблетки три раза в день.'),
      ]),
      producao(5, 'Grave-se no médico: diga os sintomas e pergunte o que fazer.'),
    ]),
  ],
});
