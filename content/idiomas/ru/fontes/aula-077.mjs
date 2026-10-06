import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 77, titulo: 'Formação de palavras', nivel: 'b1',
  objetivo: 'Reconhecer a raiz, os prefixos e os sufixos mais produtivos (-тель, -ник, -ость, -ство, -ение, -ский, -ный), formar famílias de palavras e deduzir o sentido de palavras novas.',
  nota: 'Você deduz palavras novas pela raiz, pelo prefixo e pelo sufixo. Próxima aula: revisão e simulado do B1.',
  sessoes: [
    sessao('S1', 'A raiz e as famílias de palavras', [
      revisao(5, 'Escreva uma apresentação curta de 5 frases sobre um tema seu.'),
      palavras(8, [['корень', 'kóryen', 'raiz', 'root'], ['приставка', 'pristáfka', 'prefixo', 'prefix'], ['суффикс', 'súffiks', 'sufixo', 'suffix'], ['окончание', 'akanchániye', 'terminação', 'ending'], ['слово', 'slóva', 'palavra', 'word'], ['однокоренные слова', 'adnakarénnyye slavá', 'palavras da mesma raiz', 'related words'], ['образовать', 'abrazavát', 'formar', 'to form'], ['значение', 'znachéniye', 'significado', 'meaning']]),
      gramatica(12, 'As famílias de palavras', 'PASSO 1: as palavras russas se formam a partir de uma RAIZ, que traz o sentido central: «раб-» (trabalho), «уч-» (aprendizado), «пис-» (escrita). PASSO 2: sobre a raiz se juntam PREFIXOS (antes) e SUFIXOS (depois): «пере-пис-ать», «пис-атель». PASSO 3: família de «раб-»: «работа, работать, работник, рабочий, работодатель». PASSO 4: família de «уч-»: «учить, учиться, ученик, учитель, учебник, учёба, изучать». PASSO 5: família de «пис-»: «писать, письмо, писатель, письменный, записка». PASSO 6: família de «дел-»: «делать, дело, деловой, сделать, переделать». PASSO 7: ao ler uma palavra nova, ISOLE a raiz: se a raiz é conhecida, o sentido vem. PASSO 8: aprenda palavras em FAMÍLIAS, não isoladas: cada raiz conhecida abre dezenas de palavras.', {
        tag: 'Frase',
        tabela: [
          { raiz: 'раб-', familia: 'работа, работать, работник, рабочий, работодатель', sentido: 'trabalho' }, { raiz: 'уч-', familia: 'учить, учиться, ученик, учитель, учебник, учёба, изучать', sentido: 'aprender, ensinar' }, { raiz: 'пис-', familia: 'писать, письмо, писатель, письменный, записка', sentido: 'escrita' }, { raiz: 'дел-', familia: 'делать, дело, деловой, сделать, переделать', sentido: 'fazer, assunto' },
        ],
        erros: [['Работодатель — это тот, кто работает.', 'Работодатель — это тот, кто даёт работу.', 'O sufixo «-датель» vem de «давать» (dar).']],
      }),
      producao(5, 'Diga 5 palavras da família de «раб-» e 5 da família de «уч-», com o significado.'),
    ]),
    sessao('S2', 'Sufixos e prefixos produtivos', [
      revisao(5, 'Escreva as 4 famílias de palavras da aula anterior.'),
      palavras(8, [['учитель', 'uchítil', 'professor', 'teacher'], ['писатель', 'pisátil', 'escritor', 'writer'], ['работник', 'rabótnik', 'trabalhador', 'worker'], ['радость', 'rádast', 'alegria', 'joy'], ['общество', 'óbshchestvo', 'sociedade', 'society'], ['чтение', 'chtyéniye', 'leitura', 'reading'], ['городской', 'garatskóy', 'urbano', 'urban'], ['дружный', 'drúzhny', 'unido, amigável', 'friendly']]),
      gramatica(12, 'Sufixos e prefixos que mais rendem', 'PASSO 1: «-ТЕЛЬ» forma o AGENTE (quem faz): «учить → учитель», «писать → писатель», «читать → читатель». PASSO 2: «-НИК» forma pessoas ligadas a algo: «работа → работник», «школа → школьник». PASSO 3: «-ОСТЬ» forma substantivos abstratos (qualidade): «радостный → радость», «молодой → молодость». PASSO 4: «-СТВО» forma conceitos coletivos: «общество, искусство, производство». PASSO 5: «-ЕНИЕ / -АНИЕ» forma a AÇÃO como substantivo: «читать → чтение», «знать → знание». PASSO 6: «-СКИЙ» forma adjetivos de lugar ou grupo: «город → городской», «школа → школьный». PASSO 7: «-НЫЙ» forma adjetivos de qualidade: «дружба → дружный». PASSO 8: prefixos de sentido: «НЕ-» (negação: «неправда»), «БЕЗ-» (sem: «безработный»), «ПЕРЕ-» (de novo, através: «переписать»), «ПРЕД-» (antes: «предсказать»).', {
        tag: 'Frase',
        tabela: [
          { sufixo: '-тель', funcao: 'agente', exemplo: 'учить → учитель; писать → писатель' }, { sufixo: '-ник', funcao: 'pessoa ligada a', exemplo: 'работа → работник; школа → школьник' }, { sufixo: '-ость', funcao: 'qualidade abstrata', exemplo: 'радостный → радость; молодой → молодость' }, { sufixo: '-ство', funcao: 'conceito coletivo', exemplo: 'общество; искусство' }, { sufixo: '-ение / -ание', funcao: 'ação', exemplo: 'читать → чтение; знать → знание' }, { sufixo: '-ский / -ный', funcao: 'adjetivo', exemplo: 'город → городской; дружба → дружный' },
        ],
        erros: [['Безработ — человек без работы.', 'Безработный — человек без работы.', 'Adjetivo/substantivo: «безработный».']],
      }),
      producao(5, 'Forme em voz alta: «учить → учитель, писать → писатель, читать → читатель, работа → работник, радостный → радость.»'),
    ]),
    sessao('S3', 'Adivinhar o sentido', [
      revisao(5, 'Escreva 5 palavras formadas com sufixos e o significado de cada uma.'),
      gramatica(10, 'Treinar a dedução', 'PASSO 1: isole a RAIZ: «безработный» → «без-работ-н-ый». PASSO 2: identifique o PREFIXO: «без-» = sem. PASSO 3: identifique o SUFIXO: «-ный» = adjetivo. PASSO 4: junte: «sem trabalho». PASSO 5: confirme no contexto. PASSO 6: o mesmo método vale para «переписка» (пере- + пис- + -ка = troca de cartas).', {
        tag: 'Frase',
        tabela: [
          { palavra: 'безработный', partes: 'без-работ-н-ый', sentido: 'desempregado' }, { palavra: 'переписка', partes: 'пере-пис-ка', sentido: 'troca de cartas' }, { palavra: 'учебник', partes: 'уч-б-ник', sentido: 'livro didático' }, { palavra: 'работодатель', partes: 'работо-датель', sentido: 'empregador' },
        ],
      }),
      dialogo(8, 'Угадай слово / Adivinhe a palavra', 'Max e Nina brincam de adivinhar palavras.', [
        ['Макс', 'Нина, как называется человек, который учит?', 'Nina, como se chama a pessoa que ensina?'], ['Нина', 'Учитель. Это от слова «учить» с суффиксом «-тель».', 'Professor. Vem da palavra «учить» com o sufixo «-тель».'], ['Макс', 'А человек, который пишет книги?', 'E a pessoa que escreve livros?'],
        ['Нина', 'Писатель. А тот, кто читает, — читатель.', 'Escritor. E quem lê é leitor.'], ['Макс', 'Понятно. А тот, кто работает на заводе?', 'Entendi. E quem trabalha na fábrica?'], ['Нина', 'Это рабочий или работник. Корень один — «раб-».', 'É operário ou trabalhador. A raiz é uma só: «раб-».'],
        ['Макс', 'Значит, зная корень, я могу понять много слов!', 'Então, conhecendo a raiz, posso entender muitas palavras!'], ['Нина', 'Конечно! Чем больше слов с одним корнем ты знаешь, тем легче читать.', 'Claro! Quanto mais palavras da mesma raiz você conhece, mais fácil é ler.'],
      ]),
      producao(7, 'Brinque em voz alta de adivinhar 5 palavras novas a partir da raiz, do prefixo e do sufixo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma família de 6 palavras da mesma raiz, com o significado.'),
      exercicios(20, [
        lacuna('Человек, который учит, — ___.', ['учитель', 'ученик', 'учебник'], 'учитель', '«-тель» = agente.'), lacuna('Человек, который пишет книги, — ___.', ['писатель', 'письмо', 'писать'], 'писатель', '«-тель».'), lacuna('Человек, который читает, — ___.', ['читатель', 'чтение', 'читать'], 'читатель', '«-тель».'),
        lacuna('Человек без работы — ___.', ['безработный', 'работник', 'рабочий'], 'безработный', '«без-» = sem.'), lacuna('Школьный учебник — это книга для ___.', ['обучения', 'обучение', 'обучением'], 'обучения', '«для» + genitivo.'), lacuna('Радостный → ___.', ['радость', 'радоваться', 'радио'], 'радость', '«-ость» = qualidade.'),
        mc('O sufixo «-тель» forma:', ['agente', 'adjetivo', 'diminutivo'], 'agente', 'Quem faz.'), mc('O prefixo «без-» significa:', ['sem', 'de novo', 'antes'], 'sem', 'без-.'), mc('A raiz de «писатель» é:', ['пис-', 'тель', 'атель'], 'пис-', 'Raiz da escrita.'),
        ordem('Ordene: «Корень один — раб.»', ['Корень', 'один', 'раб'], 'Корень один раб.', 'Raiz única.'), ouvir('Чем больше слов с одним корнем, тем легче читать', ['Чем больше слов с одним корнем, тем легче читать', 'Чем больше слов, тем трудно', 'Слов с одним корнем нет'], 'Чем больше слов с одним корнем, тем легче читать', '«чем … тем …».'), ditado('Писатель пишет книги', 'Família de «пис-».'),
        livre('Escreva 5 palavras formadas com sufixos (-тель, -ник, -ость, -ство, -ение) e o significado de cada uma.', 'учитель — professor. работник — trabalhador. радость — alegria. общество — sociedade. чтение — leitura.'),
      ]),
      producao(5, 'Grave-se dizendo 8 palavras de uma mesma raiz e explicando cada sufixo.'),
    ]),
  ],
});
