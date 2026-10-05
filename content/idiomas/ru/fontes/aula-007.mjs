import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 7, titulo: 'Quem sou eu', nivel: 'a1',
  objetivo: 'Dizer sua profissão e nacionalidade, negar com «не» e dizer o que você não tem com «У меня нет».',
  nota: 'Você já se apresenta, diz de onde é e fala do que tem e do que não tem. Próxima aula: onde você mora e trabalha.',
  sessoes: [
    sessao('S1', 'Profissões', [
      revisao(5, 'Escreva 5 frases com «У меня есть» sobre a sua família.'),
      palavras(12, [
        ['врач', 'vratch', 'médico(a)', 'doctor'], ['учитель', 'uchítiel', 'professor', 'teacher (m)'], ['учительница', 'uchítielnitsa', 'professora', 'teacher (f)'],
        ['студент', 'studiént', 'estudante (homem)', 'student (m)'], ['студентка', 'studiéntka', 'estudante (mulher)', 'student (f)'], ['инженер', 'inzhenér', 'engenheiro(a)', 'engineer'],
        ['повар', 'póvar', 'cozinheiro(a)', 'cook'], ['юрист', 'iuríst', 'advogado(a)', 'lawyer'], ['журналист', 'zhurnalíst', 'jornalista', 'journalist'],
        ['художник', 'khudózhnik', 'artista, pintor', 'artist'], ['программист', 'programmíst', 'programador(a)', 'programmer'], ['актёр', 'aktyór', 'ator', 'actor'],
      ]),
      gramatica(8, 'Profissão sem «é»', 'Como no presente não há «é», diz-se «Я врач». Muitos nomes de profissão não têm forma feminina: «Она врач», «Она инженер». Alguns têm: студент → студентка, учитель → учительница.', {
        exemplos: [['Я студент.', 'Eu sou estudante (homem).'], ['Я студентка.', 'Eu sou estudante (mulher).'], ['Она врач.', 'Ela é médica.'], ['Он инженер.', 'Ele é engenheiro.']],
      }),
      producao(5, 'Diga em voz alta a sua profissão («Я …») e a de dois conhecidos («Он …», «Она …»).'),
    ]),
    sessao('S2', 'Nacionalidades e «не»', [
      revisao(5, 'Escreva as profissões da sessão anterior com «Я», «Он» e «Она».'),
      palavras(10, [
        ['бразилец', 'brazílets', 'brasileiro', 'Brazilian (m)'], ['бразильянка', 'brazilyánka', 'brasileira', 'Brazilian (f)'], ['русский', 'rússkiy', 'russo', 'Russian (m)'],
        ['русская', 'rússkaya', 'russa', 'Russian (f)'], ['немец', 'niémets', 'alemão', 'German (m)'], ['немка', 'niémka', 'alemã', 'German (f)'],
        ['американец', 'amerikánets', 'americano', 'American (m)'], ['американка', 'amerikánka', 'americana', 'American (f)'], ['из', 'iz', 'de (origem)', 'from'], ['откуда', 'atkúda', 'de onde', 'where from'],
      ]),
      gramatica(10, 'Negar com «не» e dizer de onde você é', 'Coloque «не» antes da palavra que você nega: «Я не врач». Para dizer a origem, use «Я из» + país. A forma do país muda depois de «из»; por enquanto, aprenda como frase pronta.', {
        exemplos: [['Я не русский.', 'Eu não sou russo.'], ['Она не врач.', 'Ela não é médica.'], ['Он бразилец, а не русский.', 'Ele é brasileiro, não russo.'], ['Я из Бразилии.', 'Sou do Brasil.']],
        tabela: [
          { pais: 'Бразилия', forma: 'из Бразилии', pt: 'do Brasil' }, { pais: 'Россия', forma: 'из России', pt: 'da Rússia' }, { pais: 'Германия', forma: 'из Германии', pt: 'da Alemanha' },
          { pais: 'Испания', forma: 'из Испании', pt: 'da Espanha' }, { pais: 'Франция', forma: 'из Франции', pt: 'da França' }, { pais: 'Португалия', forma: 'из Португалии', pt: 'de Portugal' },
        ],
      }),
      producao(5, 'Diga: «Я бразилец» ou «Я бразильянка», «Я не русский» ou «Я не русская», «Я из Бразилии».'),
    ]),
    sessao('S3', 'Diálogo e «У меня нет»', [
      revisao(5, 'Escreva 3 frases: «Я …», «Я не …», «Я из …».'),
      dialogo(12, 'Знакомство / Conhecendo-se', 'Dois estudantes se conhecem num curso.', [
        ['Лена', 'Привет! Я Лена. Я студентка. А ты?', 'Oi! Eu sou Lena. Sou estudante. E você?'], ['Марк', 'Привет, Лена! Меня зовут Марк. Я инженер.', 'Oi, Lena! Eu me chamo Marc. Sou engenheiro.'],
        ['Лена', 'Очень приятно! Ты русский?', 'Muito prazer! Você é russo?'], ['Марк', 'Нет, я не русский. Я бразилец.', 'Não, não sou russo. Sou brasileiro.'],
        ['Лена', 'Откуда ты?', 'De onde você é?'], ['Марк', 'Я из Бразилии. А ты?', 'Sou do Brasil. E você?'], ['Лена', 'Я из России. Я русская.', 'Sou da Rússia. Sou russa.'],
      ]),
      gramatica(8, 'Não tenho: «У меня нет»', 'Para dizer que você NÃO tem algo, use «нет» e a palavra muda de forma: «У меня есть сестра» → «У меня нет сестры». Regra prática: -а vira -ы; consoante final ganha -а; depois de г, к, х, ж, ч, ш, щ escreve-se -и, nunca -ы. Com «нет» não se usa «есть».', {
        exemplos: [['У меня нет сестры.', 'Eu não tenho irmã.'], ['У него нет машины.', 'Ele não tem carro.'], ['У нас нет дома.', 'Nós não temos casa.'], ['У неё нет собаки.', 'Ela não tem cachorro.']],
        tabela: [
          { nominativo: 'брат', genitivo: 'брата', pt: 'sem irmão' }, { nominativo: 'сестра', genitivo: 'сестры', pt: 'sem irmã' }, { nominativo: 'друг', genitivo: 'друга', pt: 'sem amigo' },
          { nominativo: 'подруга', genitivo: 'подруги', pt: 'sem amiga' }, { nominativo: 'мама', genitivo: 'мамы', pt: 'sem mãe' }, { nominativo: 'собака', genitivo: 'собаки', pt: 'sem cachorro' },
          { nominativo: 'книга', genitivo: 'книги', pt: 'sem livro' }, { nominativo: 'машина', genitivo: 'машины', pt: 'sem carro' }, { nominativo: 'дом', genitivo: 'дома', pt: 'sem casa' },
        ],
      }),
      producao(5, 'Diga: «У меня есть брат. У меня нет сестры.» Depois troque por a sua realidade.'),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva 3 frases com «У меня нет» (um amigo, um carro, um cachorro).'),
      texto(7, 'Моя подруга / Minha amiga', 'Это моя подруга. Её зовут Анна. Она не русская, она немка. Она из Германии. Анна врач. У неё есть брат. Он студент. У неё нет сестры.',
        'Esta é minha amiga. Ela se chama Anna. Ela não é russa, é alemã. Ela é da Alemanha. Anna é médica. Ela tem um irmão. Ele é estudante. Ela não tem irmã.',
        [['Кто Анна по профессии?', 'Врач'], ['Анна русская?', 'Нет, она немка'], ['Есть ли у Анны сестра?', 'Нет, у неё нет сестры']]),
      exercicios(13, [
        mc('«Я врач» significa:', ['Eu sou médico(a)', 'Eu tenho médico', 'Eu não sou médico(a)'], 'Eu sou médico(a)', 'Sem «é» no presente: Я + profissão.'),
        mc('Como se diz «Ela é estudante»?', ['Она студентка', 'Она есть студентка', 'Она студент'], 'Она студентка', 'студент → студентка (feminino).'),
        lacuna('Я ___ русский. (não)', ['не', 'нет', 'ни'], 'не', '«не» nega a palavra seguinte; «нет» é «não» sozinho ou «não há».'),
        ouvir('Откуда ты?', ['Откуда ты?', 'Кто ты?', 'Как дела?'], 'Откуда ты?', '«Откуда» = de onde.'),
        ordem('Ordene: «Eu sou do Brasil.»', ['Я', 'из', 'Бразилии'], 'Я из Бразилии.', 'Я + из + país.'),
        mc('«Я бразильянка» é dito por:', ['uma mulher', 'um homem', 'qualquer pessoa'], 'uma mulher', 'Terminação -ка: feminino.'),
        lacuna('У меня есть сестра. → У меня нет ___.', ['сестры', 'сестра', 'сестру'], 'сестры', '-а vira -ы depois de «нет».'),
        mc('«Нет» + «брат» fica:', ['брата', 'брату', 'братом'], 'брата', 'Consoante final ganha -а.'),
        ditado('У меня нет машины', 'Negação de posse.'),
        ordem('Ordene: «Ele não é russo.»', ['не', 'Он', 'русский'], 'Он не русский.', '«не» antes da palavra negada.'),
        mc('Qual frase está correta?', ['У меня нет собаки', 'У меня нет собака', 'У меня не собаки'], 'У меня нет собаки', 'собака → собаки (г/к pedem -и).'),
        livre('Escreva 4 frases: sua profissão, sua nacionalidade, algo que você tem e algo que não tem.', 'Я учитель. Я бразилец. У меня есть брат. У меня нет сестры.'),
      ]),
      producao(5, 'Grave-se: «Привет! Меня зовут… Я … Я из Бразилии. У меня нет…»'),
    ]),
  ],
});
