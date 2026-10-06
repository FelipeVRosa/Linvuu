import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 53, titulo: 'Orações relativas 1: который (sujeito e objeto)', nivel: 'b1',
  objetivo: 'Formar orações relativas com «который»: o gênero e o número vêm do substantivo antecedente, o caso vem da função dentro da oração (nominativo como sujeito, acusativo como objeto).',
  nota: 'Você descreve pessoas e coisas com «который». Próxima aula: «который» em todos os casos e com preposições.',
  sessoes: [
    sessao('S1', 'Который como sujeito', [
      revisao(5, 'Escreva 5 frases com «нести», «везти», «вести» e um sentido figurado de «идти».'),
      palavras(8, [['человек', 'chilavyék', 'pessoa, homem', 'person'], ['женщина', 'zhényshchina', 'mulher', 'woman'], ['девушка', 'dyévushka', 'moça', 'girl'], ['парень', 'páryen', 'rapaz', 'guy'], ['тётя', 'tyótya', 'tia', 'aunt'], ['дядя', 'dyádya', 'tio', 'uncle'], ['сосед', 'sasyét', 'vizinho', 'neighbour'], ['соседка', 'sasyétka', 'vizinha', 'neighbour (f)']]),
      gramatica(12, 'Который: «que», «o qual»', 'PASSO 1: a ORAÇÃO RELATIVA descreve um substantivo e começa com «КОТОРЫЙ»: «Человек, который живёт рядом, мой друг» (o homem que mora perto é meu amigo). PASSO 2: «который» declina como um ADJETIVO: «который» (m), «которая» (f), «которое» (n), «которые» (plural). PASSO 3: o GÊNERO e o NÚMERO vêm do substantivo que ele descreve (o antecedente): «женщина» é feminino → «которая». PASSO 4: o CASO vem da FUNÇÃO de «который» dentro da oração relativa: como SUJEITO, nominativo. PASSO 5: a oração relativa SEMPRE fica entre VÍRGULAS e vem logo depois do antecedente. PASSO 6: o verbo concorda com «который»: «девушки, которые учатся» (plural). PASSO 7: pode-se trocar «который» por «кто» e «что» só em casos específicos; em geral, use «который».', {
        tag: 'Frase',
        comparacao: 'o português usa «que» para todos os gêneros («o homem que», «a mulher que»). O russo usa «который / которая / которое / которые», concordando com o antecedente.',
        tabela: [
          { antecedente: 'человек (m)', relativo: 'который', exemplo: 'Человек, который живёт рядом, мой друг.' }, { antecedente: 'женщина (f)', relativo: 'которая', exemplo: 'Женщина, которая работает здесь, моя тётя.' }, { antecedente: 'место (n)', relativo: 'которое', exemplo: 'Место, которое мне нравится, находится рядом.' }, { antecedente: 'девушки (pl)', relativo: 'которые', exemplo: 'Девушки, которые учатся со мной, из Бразилии.' },
        ],
        erros: [['Женщина, который работает здесь, моя тётя.', 'Женщина, которая работает здесь, моя тётя.', 'O relativo concorda com «женщина»: которая.'], ['Человек который живёт рядом мой друг.', 'Человек, который живёт рядом, мой друг.', 'A oração relativa leva vírgulas.'], ['Девушки, которая учатся со мной.', 'Девушки, которые учатся со мной.', 'Plural: которые.']],
      }),
      producao(5, 'Descreva 5 pessoas com «который»: «Человек, который … Женщина, которая … Девушки, которые …»'),
    ]),
    sessao('S2', 'Который como objeto direto', [
      revisao(5, 'Escreva a tabela de «который / которая / которое / которые» no nominativo.'),
      palavras(8, [['книга', 'kníga', 'livro', 'book'], ['фильм', 'film', 'filme', 'film'], ['роман', 'román', 'romance', 'novel'], ['платье', 'plátye', 'vestido', 'dress'], ['друзья', 'druzyá', 'amigos', 'friends'], ['люди', 'lyúdi', 'pessoas', 'people'], ['подарить', 'padarít', 'presentear', 'to give a present'], ['знать', 'znat', 'conhecer, saber', 'to know']]),
      gramatica(12, 'Который no acusativo', 'PASSO 1: quando «который» é o OBJETO DIRETO da oração relativa, vai ao ACUSATIVO. PASSO 2: no FEMININO, muda: «которая → КОТОРУЮ»: «Книга, которую я читаю, интересная». PASSO 3: no NEUTRO, fica «которое»: «Платье, которое я купила, красивое». PASSO 4: no MASCULINO e no PLURAL, depende de ser animado ou inanimado: INANIMADO fica igual ao nominativo («Фильм, КОТОРЫЙ я видел, хороший»; «Книги, КОТОРЫЕ я читаю»). PASSO 5: ANIMADO muda para a forma do genitivo: masculino «КОТОРОГО» («Человек, которого я знаю, врач») e plural «КОТОРЫХ» («Люди, которых я знаю, хорошие»). PASSO 6: o sujeito da oração relativa vem depois de «который»: «Книга, которую Я читаю».', {
        tag: 'Frase',
        tabela: [
          { tipo: 'feminino (acusativo)', relativo: 'которую', exemplo: 'Книга, которую я читаю, интересная.' }, { tipo: 'masculino inanimado', relativo: 'который', exemplo: 'Фильм, который я видел, хороший.' }, { tipo: 'masculino animado', relativo: 'которого', exemplo: 'Человек, которого я знаю, врач.' }, { tipo: 'neutro', relativo: 'которое', exemplo: 'Платье, которое я купила, красивое.' }, { tipo: 'plural inanimado', relativo: 'которые', exemplo: 'Книги, которые я читаю, интересные.' }, { tipo: 'plural animado', relativo: 'которых', exemplo: 'Люди, которых я знаю, хорошие.' },
        ],
        erros: [['Книга, которая я читаю, интересная.', 'Книга, которую я читаю, интересная.', '«который» é objeto: acusativo feminino «которую».'], ['Человек, который я знаю, врач.', 'Человек, которого я знаю, врач.', 'Masculino animado no acusativo: «которого».'], ['Люди, которые я знаю, хорошие.', 'Люди, которых я знаю, хорошие.', 'Plural animado no acusativo: «которых».']],
      }),
      producao(5, 'Diga: «Книга, которую я читаю … Фильм, который я видел … Человек, которого я знаю … Люди, которых я знаю …»'),
    ]),
    sessao('S3', 'Descrever vizinhos e objetos', [
      revisao(5, 'Escreva 5 frases com «которую», «которого», «который» e «которых».'),
      gramatica(10, 'Usar «который» para descrever', 'PASSO 1: para identificar uma pessoa: «Это человек, который живёт на третьем этаже». PASSO 2: para identificar um objeto: «Это книга, которую мне подарил Андрей». PASSO 3: com um pronome dativo na oração: «Роман, который мне подарил друг». PASSO 4: ao falar de várias pessoas: «Друзья, которых я знаю давно». PASSO 5: a oração relativa pode ficar no meio da frase principal, entre vírgulas.', {
        tag: 'Frase',
        tabela: [
          { frase: 'Это человек, который живёт на третьем этаже.', traducao: 'Este é o homem que mora no terceiro andar.' }, { frase: 'Это книга, которую мне подарил Андрей.', traducao: 'Este é o livro que o Andrei me deu.' }, { frase: 'Друзья, которых я знаю давно, живут далеко.', traducao: 'Os amigos que conheço há muito tempo moram longe.' },
        ],
      }),
      dialogo(8, 'Мои соседи / Meus vizinhos', 'Dois vizinhos falam de quem mora no prédio.', [
        ['Лена', 'Олег, ты знаешь человека, который живёт на третьем этаже?', 'Oleg, você conhece o homem que mora no terceiro andar?'], ['Олег', 'Да, это Андрей. Он врач, который работает в нашей больнице.', 'Sim, é o Andrei. Ele é médico e trabalha no nosso hospital.'], ['Лена', 'А женщина, которая живёт рядом с ним?', 'E a mulher que mora ao lado dele?'],
        ['Олег', 'Это его жена. Она учительница, которую все любят.', 'É a esposa dele. É uma professora de que todos gostam.'], ['Лена', 'Какие хорошие соседи! А книга, которую ты читаешь, интересная?', 'Que bons vizinhos! E o livro que você está lendo, é interessante?'], ['Олег', 'Очень. Это роман, который мне подарил Андрей.', 'Muito. É um romance que o Andrei me deu.'],
        ['Лена', 'Подаришь мне, когда прочитаешь?', 'Me empresta/dá quando terminar de ler?'], ['Олег', 'Конечно! Друзья, которых я знаю давно, всегда дарят хорошие книги.', 'Claro! Os amigos que conheço há tempo sempre dão bons livros.'],
      ]),
      producao(7, 'Descreva em voz alta os seus vizinhos e um objeto que você gosta, usando «который» em duas formas diferentes.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases descrevendo pessoas e coisas com «который».'),
      exercicios(20, [
        lacuna('Женщина, ___ работает здесь, моя тётя.', ['которая', 'который', 'которую'], 'которая', 'Sujeito feminino: которая.'), lacuna('Человек, ___ живёт рядом, мой друг.', ['который', 'которая', 'которого'], 'который', 'Sujeito masculino: который.'), lacuna('Девушки, ___ учатся со мной, из Бразилии.', ['которые', 'которая', 'которых'], 'которые', 'Sujeito plural: которые.'),
        lacuna('Книга, ___ я читаю, интересная.', ['которую', 'которая', 'который'], 'которую', 'Objeto feminino: которую.'), lacuna('Фильм, ___ я видел, хороший.', ['который', 'которого', 'которая'], 'который', 'Masculino inanimado: igual ao nominativo.'), lacuna('Человек, ___ я знаю, врач.', ['которого', 'который', 'которому'], 'которого', 'Masculino animado: которого.'),
        lacuna('Люди, ___ я знаю, хорошие.', ['которых', 'которые', 'которым'], 'которых', 'Plural animado: которых.'), mc('O gênero de «который» vem:', ['do antecedente', 'do verbo da principal', 'da posição'], 'do antecedente', 'Gênero e número: antecedente.'), mc('O caso de «который» vem:', ['da função na oração relativa', 'do antecedente', 'da preposição da principal'], 'da função na oração relativa', 'Função dentro da oração.'),
        ordem('Ordene: «Книга, которую я читаю, интересная.»', ['Книга', 'которую', 'я', 'читаю', 'интересная'], 'Книга, которую я читаю, интересная.', 'Vírgulas e objeto no acusativo.'), ouvir('Это человек, который живёт рядом', ['Это человек, который живёт рядом', 'Это человек, которого я знаю', 'Это женщина, которая живёт рядом'], 'Это человек, который живёт рядом', 'Sujeito masculino.'), ditado('Люди, которых я знаю, хорошие', 'Plural animado: которых.'),
        livre('Escreva 5 frases com «который» em formas diferentes: sujeito masculino, feminino, plural; objeto feminino e masculino animado.', 'Человек, который живёт рядом, мой друг. Женщина, которая работает здесь, моя тётя. Девушки, которые учатся со мной, из Бразилии. Книга, которую я читаю, интересная. Человек, которого я знаю, врач.'),
      ]),
      producao(5, 'Grave-se descrevendo três pessoas e dois objetos com «который».'),
    ]),
  ],
});
