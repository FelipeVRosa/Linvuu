import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 3, titulo: 'Apresentações, países e números', nivel: 'a1',
  objetivo: 'Apresentar-se e apresentar alguém, usar os possessivos, dizer país e nacionalidade e contar de 0 a 20, incluindo a idade.',
  nota: 'Você se apresenta, fala de onde é e diz a sua idade. Próxima aula: o presente simples (rotina).',
  sessoes: [
    sessao('S1', 'Cumprimentos e apresentações', [
      revisao(5, 'Responda em voz alta: What is your name? Where are you from? Are you tired?'),
      palavras(6, [
        ['Nice to meet you', 'náis tu miit iú', 'prazer em conhecê-lo(a)', ''], ['How are you?', 'hau ár iú', 'como você está?', ''], ['I\'m fine, thanks', 'aim fáin thénks', 'estou bem, obrigado', ''], ['And you?', 'ând iú', 'e você?', ''], ['my', 'mai', 'meu, minha', ''], ['your', 'iór', 'seu, sua (de você)', ''], ['this is', 'dhis iz', 'este é, esta é', ''], ['friend', 'frénd', 'amigo, amiga', ''],
      ]),
      gramatica(10, 'Apresentar-se e apresentar alguém; os possessivos', 'PASSO 1: para se apresentar: «I\'m Anna» ou «My name is Anna». PASSO 2: para apresentar outra pessoa: «This is my friend Tom.» (use «this is» para uma pessoa; no plural, «these are»). PASSO 3: «How are you?» é uma saudação, não uma pergunta médica. A resposta normal é curta: «I\'m fine, thanks. And you?». PASSO 4: os possessivos ficam ANTES do substantivo e não têm artigo antes: my, your, his, her, its, our, their. PASSO 5: a escolha entre «his» e «her» depende de QUEM é o dono, não da coisa possuída: «his book» (o livro dele) e «her book» (o livro dela). Em português, «seu livro» pode ser de ele, ela ou você; em inglês isso nunca fica ambíguo.', {
        tag: 'Pronomes',
        comparacao: 'em português o possessivo concorda com a coisa («minha casa», «meu carro») e leva artigo («a minha casa»). Em inglês, my, your, his, her, our e their não mudam com a coisa e vêm sem artigo: my house, my car.',
        tabela: [
          { sujeito: 'I', possessivo: 'my', exemplo: 'My name is Ana.' }, { sujeito: 'you', possessivo: 'your', exemplo: 'Your name is Paul.' }, { sujeito: 'he', possessivo: 'his', exemplo: 'His name is Tom.' }, { sujeito: 'she', possessivo: 'her', exemplo: 'Her name is Sarah.' },
          { sujeito: 'it', possessivo: 'its', exemplo: 'Its name is Max (o cachorro).' }, { sujeito: 'we', possessivo: 'our', exemplo: 'Our teacher is here.' }, { sujeito: 'they', possessivo: 'their', exemplo: 'Their house is big.' },
        ],
        erros: [['Me name is Ana.', 'My name is Ana.', '«me» é objeto; antes do substantivo use «my».'], ['This is the my friend.', 'This is my friend.', 'Possessivo não leva artigo.'], ['This is Tom. Her name is Tom.', 'This is Tom. His name is Tom.', 'O possessivo segue o dono, não a coisa.']],
      }),
      dialogo(5, 'This is my friend / Este é meu amigo', 'Lucy apresenta Tom a Mia.', [
        ['Lucy', 'Mia, this is my friend Tom. Tom, this is Mia.', 'Mia, este é meu amigo Tom. Tom, esta é a Mia.'], ['Tom', 'Hi, Mia. Nice to meet you.', 'Oi, Mia. Prazer em conhecê-la.'], ['Mia', 'Nice to meet you, too. How are you?', 'Prazer também. Como você está?'], ['Tom', 'I\'m fine, thanks. And you?', 'Estou bem, obrigado. E você?'], ['Mia', 'I\'m fine, thank you.', 'Estou bem, obrigada.'],
      ]),
      producao(4, 'Apresente em voz alta um amigo (real ou inventado): «This is my friend… His/Her name is… He/She is from…»'),
    ]),
    sessao('S2', 'Países e nacionalidades', [
      revisao(5, 'Diga em voz alta: «I\'m from Brazil. I\'m Brazilian. My friend is from…».'),
      palavras(10, [
        ['Brazil, Brazilian', 'brazíl, brazílian', 'Brasil, brasileiro', ''], ['the United States, American', 'dhi iunáitid stêits, amérikan', 'Estados Unidos, americano', ''], ['the United Kingdom, British', 'dhi iunáitid kíngdam, brítish', 'Reino Unido, britânico', ''], ['Canada, Canadian', 'kánada, kenêidian', 'Canadá, canadense', ''], ['Portugal, Portuguese', 'pórtchugal, portchuguíiz', 'Portugal, português', ''], ['Spain, Spanish', 'spêin, spánish', 'Espanha, espanhol', ''],
        ['France, French', 'frâns, frénch', 'França, francês', ''], ['Germany, German', 'djérmani, djérman', 'Alemanha, alemão', ''], ['Italy, Italian', 'ítali, itálian', 'Itália, italiano', ''], ['Japan, Japanese', 'djapán, djapaníiz', 'Japão, japonês', ''], ['Russia, Russian', 'râsha, râshan', 'Rússia, russo', ''], ['Mexico, Mexican', 'méksikou, méksikan', 'México, mexicano', ''],
      ]),
      gramatica(10, 'País, nacionalidade e idioma', 'PASSO 1: para o país, use «from»: «I\'m from Brazil.» Para a nacionalidade, use «to be» + adjetivo: «I\'m Brazilian.» Para as duas ideias juntas: «I\'m Brazilian. I\'m from Brazil.» PASSO 2: países, nacionalidades e idiomas SEMPRE têm letra maiúscula em inglês, ao contrário do português: Brazilian, Portuguese, English. PASSO 3: a nacionalidade não muda com gênero nem número: «He is Brazilian», «She is Brazilian», «They are Brazilian». PASSO 4: alguns países levam «the»: the United States, the United Kingdom, the Netherlands. Os outros não: Brazil, Canada, Japan. PASSO 5: antes de nacionalidades que começam com som de vogal, use «an»: an American, an Italian, an Englishman; antes das outras, «a»: a Brazilian, a German.', {
        tag: 'Substantivos',
        comparacao: 'em português escrevemos «brasileiro», «inglês» e «português» com letra minúscula; em inglês, tudo isso é maiúsculo. E a nacionalidade tem uma forma só, para ele, ela e eles.',
        tabela: [
          { pergunta: 'Where are you from?', resposta: 'I\'m from Brazil.', pt: 'De onde você é? Sou do Brasil.' }, { pergunta: 'What\'s your nationality?', resposta: 'I\'m Brazilian.', pt: 'Qual é a sua nacionalidade? Sou brasileiro.' }, { pergunta: 'Is she Italian?', resposta: 'No, she isn\'t. She\'s French.', pt: 'Ela é italiana? Não. Ela é francesa.' },
        ],
        erros: [['I am from brazilian.', 'I am from Brazil. / I am Brazilian.', '«from» pede o país; a nacionalidade vem sem «from».'], ['He is brazilian.', 'He is Brazilian.', 'Nacionalidades levam maiúscula.'], ['She is a American.', 'She is an American.', '«an» antes de som de vogal.']],
      }),
      producao(5, 'Responda por você e por um amigo: «Where are you from? What\'s your nationality? Where is your friend from?»'),
    ]),
    sessao('S3', 'Números de 0 a 20 e a idade', [
      revisao(4, 'Diga os países da sessão anterior com a nacionalidade correspondente: Brazil, Brazilian; Spain, Spanish…'),
      palavras(8, [
        ['zero', 'zíirou', 'zero', ''], ['one', 'uân', 'um', ''], ['two', 'tuu', 'dois', ''], ['three', 'thrii', 'três', ''], ['four', 'fór', 'quatro', ''], ['five', 'fáiv', 'cinco', ''], ['six', 'síks', 'seis', ''], ['seven', 'sévn', 'sete', ''], ['eight', 'êit', 'oito', ''], ['nine', 'náin', 'nove', ''], ['ten', 'tén', 'dez', ''],
      ]),
      gramatica(13, 'Números de 11 a 20 e a idade', 'PASSO 1: de 13 a 19 os números terminam em «-teen», e a sílaba forte é a ÚLTIMA: thirTEEN, fourTEEN, fifTEEN. PASSO 2: os números das dezenas terminam em «-ty», e a sílaba forte é a PRIMEIRA: THIRty, FORty, FIFty. Esse é o erro de escuta mais comum: thirTEEN (13) × THIRty (30). PASSO 3: para a idade, o inglês usa «to be», não «ter»: «I am 20» ou «I am 20 years old». NUNCA «I have 20 years». PASSO 4: a pergunta é «How old are you?» (literalmente «quão velho você é?»).', {
        tag: 'Números',
        comparacao: 'em português a idade usa «ter» («tenho 20 anos»); em inglês, o verbo é «to be» («I am 20»). «I have 20 years» é o erro típico do brasileiro.',
        tabela: [
          { numero: '11', ingles: 'eleven', pronuncia: 'ilévn' }, { numero: '12', ingles: 'twelve', pronuncia: 'tuélv' }, { numero: '13', ingles: 'thirteen', pronuncia: 'thertíin' }, { numero: '14', ingles: 'fourteen', pronuncia: 'fortíin' }, { numero: '15', ingles: 'fifteen', pronuncia: 'fiftíin' },
          { numero: '16', ingles: 'sixteen', pronuncia: 'sikstíin' }, { numero: '17', ingles: 'seventeen', pronuncia: 'sevntíin' }, { numero: '18', ingles: 'eighteen', pronuncia: 'eitíin' }, { numero: '19', ingles: 'nineteen', pronuncia: 'naintíin' }, { numero: '20', ingles: 'twenty', pronuncia: 'tuénti' },
          { numero: '13 × 30', ingles: 'thirTEEN × THIRty', pronuncia: 'thertíin × thérti' },
        ],
        erros: [['I have 20 years.', 'I am 20. / I am 20 years old.', 'Idade usa «to be» em inglês.'], ['How many years do you have?', 'How old are you?', 'A pergunta correta é «How old are you?».'], ['I am twenty years.', 'I am twenty years old. / I am twenty.', 'Com «years», acrescente «old».']],
      }),
      producao(5, 'Conte de 0 a 20 em voz alta, depois de trás para frente. Diga a sua idade e a de três pessoas conhecidas: «My mother is…, my friend is…».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 3', [
      revisao(5, 'Releia os possessivos (my, your, his, her, our, their) e diga uma frase com cada um.'),
      texto(6, 'Maria and Tom / Maria e Tom', 'Maria is from Brazil. She is twenty-five years old. She is a teacher. Her friend Tom is from the United States. He is twenty-seven. They are in London today. They are happy.',
        'Maria é do Brasil. Ela tem vinte e cinco anos. Ela é professora. O amigo dela, Tom, é dos Estados Unidos. Ele tem vinte e sete anos. Eles estão em Londres hoje. Eles estão felizes.',
        [['Where is Maria from?', 'She is from Brazil.'], ['How old is Tom?', 'He is twenty-seven.'], ['Is Maria a teacher?', 'Yes, she is.'], ['Where are they today?', 'They are in London.']]),
      exercicios(14, [
        ouvir('This is my friend Tom', ['This is my friend Tom', 'This is her friend Tom', 'This is your friend Tom'], 'This is my friend Tom', 'Ouça o possessivo: «my».'), ouvir('I am from Canada', ['I am from Canada', 'I am Canadian', 'I am from China'], 'I am from Canada', 'Ouça «from» e o país.'), ditado('How old are you', 'Escreva a pergunta da idade.'),
        mc('Como se pergunta a idade em inglês?', ['How old are you?', 'How many years do you have?', 'What age have you?'], 'How old are you?', '«How old are you?» é a forma correta.'), mc('Qual frase está correta?', ['I am 20.', 'I have 20.', 'I am having 20.'], 'I am 20.', 'Idade usa «to be».'), mc('Qual número é «13»?', ['thirteen', 'thirty', 'three'], 'thirteen', '13 = thirteen (-teen no final).'), mc('Qual frase está correta?', ['He is Brazilian.', 'He is brazilian.', 'He is from Brazilian.'], 'He is Brazilian.', 'Nacionalidade tem maiúscula.'),
        lacuna('This is ___ friend Anna. (minha)', ['my', 'me', 'I'], 'my', 'Possessivo: «my» antes do substantivo.'), lacuna('Tom is American. ___ name is Tom. (o nome dele)', ['His', 'Her', 'Their'], 'His', 'Dono masculino: «his».'), lacuna('She is ___ American. (uma)', ['an', 'a', 'the'], 'an', '«American» começa com som de vogal.'),
        ordem('Ordene: «How old are you?»', ['How', 'old', 'are', 'you'], 'How old are you?', 'Pergunta da idade.'), ordem('Ordene: «Nice to meet you.»', ['Nice', 'to', 'meet', 'you'], 'Nice to meet you.', 'Cumprimento ao conhecer alguém.'),
        livre('Escreva 4 frases em inglês: seu nome, sua idade, seu país e a nacionalidade de um amigo.', 'My name is Felipe. I am 35. I am from Brazil. My friend Tom is American.'),
      ]),
      producao(5, 'Fale por 1 minuto: apresente-se e apresente um amigo. Diga nome, idade, país, nacionalidade e como cada um está hoje.'),
    ]),
  ],
});
