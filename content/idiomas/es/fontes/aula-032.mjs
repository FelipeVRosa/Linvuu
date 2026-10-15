import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 32, titulo: 'Relativos: que, donde, quien', nivel: 'a2',
  objetivo: 'Juntar duas frases com «que», falar de lugares e de tempo com «donde», «en el que» e «el día en que», referir-se a pessoas com «con quien» e «con la que», e evitar o erro de repetir o pronome.',
  nota: 'Você descreve pessoas, coisas e lugares numa só frase, sem repetir palavras. Próxima aula: saúde, no médico e na farmácia.',
  sessoes: [
    sessao('S1', 'Que: o relativo mais usado', [
      revisao(5, 'Diga em voz alta três frases com «por» e três com «para» (aula 31). Depois diga três frases com «mucho», «poco» e «bastante».'),
      palavras(8, [
        ['que', 'ke', 'que (relativo; sem til)', ''], ['el libro que leo', 'el líbro ke léo', 'o livro que eu leio', ''], ['la chica que vive aquí', 'la tchíka ke bíbe akí', 'a moça que mora aqui', ''], ['la película que vimos', 'la pelíkula ke bímos', 'o filme que vimos', ''],
        ['la tienda que abre a las nueve', '', 'a loja que abre às nove', ''], ['el ordenador que compré', '', 'o computador que comprei (América Latina: la computadora)', ''], ['la oficina que está en el centro', 'la ofithína', 'o escritório que fica no centro (falso amigo: «oficina» é escritório, não oficina mecânica)', ''], ['el compañero que trabaja conmigo', '', 'o colega que trabalha comigo', ''],
      ]),
      gramatica(12, 'Que: um relativo para pessoas e coisas', 'PASSO 1: um relativo junta duas frases e evita repetir a mesma palavra. Duas frases: «Tengo un amigo. Mi amigo vive en Sevilla.» Uma frase só: «Tengo un amigo que vive en Sevilla.» PASSO 2: a palavra «que» serve para pessoa e para coisa, no singular e no plural, no masculino e no feminino. Ela nunca muda: «el libro que», «los libros que», «la chica que», «las chicas que». PASSO 3: «que» pode ser o sujeito (quem faz a ação: «la chica que vive aquí») ou o objeto (o que recebe a ação: «el libro que leo»). A forma é a mesma nos dois casos. PASSO 4: o relativo vem logo depois do nome que ele explica, e esse nome não se repete como pronome: não existe «el libro que lo leo». PASSO 5: «que» sem til é o relativo; «qué» com til é pergunta ou exclamação: «¿Qué lees?» mas «el libro que leo». PASSO 6: com um verbo no passado, o relativo funciona igual: «La película que vimos ayer era muy larga.» (Atenção ao falso amigo: aqui «larga» quer dizer longa, comprida. O «largo» do português, no sentido de largura, é «ancho» em espanhol.) PASSO 7: se a frase explica algo entre vírgulas, o relativo também é «que»: «Mi hermana, que vive en Lyon, viene mañana.» PASSO 8: o verbo depois de «que» fica no indicativo quando a pessoa ou a coisa é conhecida. O subjuntivo para coisas procuradas ou desejadas virá no B1.', {
        tag: 'Relativos',
        comparacao: 'em português também dizemos «o livro que eu leio» e «a moça que mora aqui», e o «que» funciona do mesmo jeito. A diferença é que, na fala, o brasileiro às vezes repete o pronome («o cara que eu falei com ele»), e em espanhol isso é erro. Em espanhol o «que» já representa a coisa ou a pessoa, e o pronome não volta.',
        tabela: [
          { funcao: 'sujeito (quem faz)', exemplo: 'La chica que vive aquí es médica.', traducao: 'A moça que mora aqui é médica.' },
          { funcao: 'objeto (o que recebe)', exemplo: 'El libro que leo es muy bueno.', traducao: 'O livro que eu leio é muito bom.' },
          { funcao: 'pessoa', exemplo: 'El compañero que trabaja conmigo es de Bilbao.', traducao: 'O colega que trabalha comigo é de Bilbao.' },
          { funcao: 'coisa no plural', exemplo: 'Las tiendas que abren tarde cierran a las diez.', traducao: 'As lojas que abrem tarde fecham às dez.' },
          { funcao: 'frase explicativa', exemplo: 'Mi hermana, que vive en Lyon, viene mañana.', traducao: 'Minha irmã, que mora em Lyon, vem amanhã.' },
        ],
        erros: [['El libro que lo leo es bueno.', 'El libro que leo es bueno.', 'O «que» já representa o livro; não repita o pronome «lo».'], ['La chica que ella vive aquí es mi amiga.', 'La chica que vive aquí es mi amiga.', 'O sujeito já está no «que»; «ella» sobra.'], ['El libro qué leo es bueno.', 'El libro que leo es bueno.', '«Qué» com til é só pergunta ou exclamação.'], ['Los vecinos que vive aquí son simpáticos.', 'Los vecinos que viven aquí son simpáticos.', 'O verbo concorda com o nome que o relativo substitui: «los vecinos viven».']],
      }),
      producao(5, 'Junte em voz alta, com «que», quatro pares de frases seus: «Tengo un vecino. Es músico.» → «Tengo un vecino que es músico.»'),
    ]),
    sessao('S2', 'Donde e as preposições', [
      revisao(4, 'Diga de memória três frases com «que» como sujeito e três com «que» como objeto (sessão anterior).'),
      palavras(6, [
        ['donde', 'donde', 'onde (relativo; sem til)', ''], ['la ciudad donde vivo', 'la thiudád donde bíbo', 'a cidade onde moro', ''], ['el restaurante donde cenamos', '', 'o restaurante onde jantamos (cenar é jantar; «cena» não é cena de filme, que é «escena»)', ''], ['la casa en la que vivo', '', 'a casa em que moro', ''],
        ['el día en que nos conocimos', '', 'o dia em que nos conhecemos', ''], ['la calle por la que paso', '', 'a rua por onde passo', ''], ['el cine al que vamos', '', 'o cinema aonde vamos', ''],
      ]),
      gramatica(12, 'Lugar e tempo: donde, en el que, el día en que', 'PASSO 1: para falar de um lugar, use «donde» (onde): «la ciudad donde vivo». No relativo, «donde» não leva til. Com til, «dónde» é pergunta: «¿Dónde vives?». PASSO 2: a alternativa é «en el que», «en la que», «en los que», «en las que». O artigo concorda com o lugar: «la casa en la que vivo» é o mesmo que «la casa donde vivo». PASSO 3: a preposição muda com o verbo: «vivir en», «ir a», «salir de», «pasar por», «hablar de», «trabajar con». Ela vem antes do relativo, nunca no fim da frase: «la casa en la que vivo». PASSO 4: com «a» e «de», o artigo se funde: «a + el = al», «de + el = del». Por isso, «el cine al que vamos» e «el libro del que hablo». No feminino não há fusão: «la tienda a la que voy». PASSO 5: para o tempo, use «en que» depois de «día», «año», «mes», «momento», «semana»: «el día en que nos conocimos», «el año en que llegué». Na fala cotidiana também se ouve «el día que nos conocimos». PASSO 6: «la vez que» (a vez que) e «cada vez que» (toda vez que) não levam preposição: «la última vez que te vi». PASSO 7: «donde» pode aparecer sem nome antes: «Vivo donde trabajo» (vivo onde trabalho). PASSO 8: para movimento, também se diz «adonde»: «la ciudad adonde vamos». Mas a combinação «a la que» é a mais natural.', {
        tag: 'Relativos',
        comparacao: 'em português o relativo de lugar é «onde», «em que», «no qual». Em espanhol vale o mesmo: «donde», «en el que», «en la que». O que o português informal faz e o espanhol não aceita é tirar a preposição: «a casa que eu moro» é erro em espanhol. É preciso «la casa donde vivo» ou «la casa en la que vivo».',
        tabela: [
          { verbo: 'vivir en', exemplo: 'La casa en la que vivo es pequeña.', traducao: 'A casa em que moro é pequena.' },
          { verbo: 'ir a', exemplo: 'El cine al que vamos está cerca.', traducao: 'O cinema aonde vamos fica perto.' },
          { verbo: 'hablar de', exemplo: 'El libro del que hablo es nuevo.', traducao: 'O livro de que falo é novo.' },
          { verbo: 'pasar por', exemplo: 'La calle por la que paso está cerrada.', traducao: 'A rua por onde passo está fechada.' },
          { verbo: 'salir de', exemplo: 'La estación de la que sale el tren es grande.', traducao: 'A estação de onde sai o trem é grande.' },
          { verbo: 'tempo', exemplo: 'El día en que nos conocimos llovía.', traducao: 'No dia em que nos conhecemos chovia.' },
        ],
        erros: [['La casa que vivo es pequeña.', 'La casa donde vivo es pequeña. / La casa en la que vivo es pequeña.', 'Falta a preposição «en»: o português informal a omite, o espanhol não.'], ['La ciudad dónde vivo es grande.', 'La ciudad donde vivo es grande.', 'Como relativo, «donde» não leva til.'], ['El cine que fuimos ayer es nuevo.', 'El cine al que fuimos ayer es nuevo.', '«Ir» pede «a»; com «el» vira «al que».'], ['El libro de el que hablo es bueno.', 'El libro del que hablo es bueno.', '«de + el» se funde em «del».']],
      }),
      producao(8, 'Descreva em voz alta, com «donde» e «en el que», cinco lugares da sua vida: a sua casa, o seu trabalho ou estudo, o seu café preferido, o lugar onde você nasceu e o lugar aonde gostaria de ir. Exemplo: «La ciudad donde nací se llama…»'),
    ]),
    sessao('S3', 'Quien, el que e as pessoas', [
      revisao(4, 'Diga três frases com «donde» e três com «en la que / en el que» (sessão anterior). Troque uma por outra.'),
      palavras(5, [
        ['quien, quienes', 'kién, kiénes', 'quem (relativo, só para pessoas)', ''], ['la persona con quien hablo', '', 'a pessoa com quem falo', ''], ['la amiga con la que viajo', '', 'a amiga com quem viajo', ''], ['los que llegan tarde', '', 'os que chegam tarde', ''], ['la chica a la que vi ayer', '', 'a moça que vi ontem (o «a» pessoal aparece)', ''],
      ]),
      gramatica(8, 'Quien, el que, la que: pessoas com preposição', 'PASSO 1: para pessoas depois de uma preposição, use «quien» (singular) e «quienes» (plural): «la persona con quien hablo», «los chicos con quienes trabajo». PASSO 2: a forma mais comum na fala é «con el que», «con la que», «con los que», «con las que»: «la amiga con la que viajo» é igual a «la amiga con quien viajo». PASSO 3: sem preposição e como sujeito, use «que», e não «quien»: «los chicos que llegan». O «quien» sem preposição só aparece, entre vírgulas, num estilo mais formal: «Mi hermana, quien vive en Lyon, viene mañana.» PASSO 4: «el que, la que, los que, las que» sem nome antes significam «aquele que, quem»: «Los que llegan tarde esperan.» PASSO 5: quando o relativo é objeto direto de pessoa, o espanhol põe o «a» pessoal: «la chica a la que vi ayer» ou «a quien vi ayer». PASSO 6: o relativo «cuyo» (cujo) fica para o B1.', {
        tag: 'Relativos',
        comparacao: 'em português dizemos «a pessoa com quem falo» e «a amiga com quem viajo», e o espanhol faz quase o mesmo: «con quien» e «con la que». O português diz «quem» sem concordar; o espanhol distingue «quien» (um) e «quienes» (vários). E, como em português, a preposição vem antes do relativo, nunca depois do verbo.',
        erros: [['La amiga que viajo con ella es de Cádiz.', 'La amiga con la que viajo es de Cádiz.', 'Preposição antes do relativo e sem o pronome «ella».'], ['El chico que hablo es mi primo.', 'El chico con quien hablo es mi primo.', 'Falta a preposição «con».'], ['Los chicos quien llegan tarde esperan.', 'Los chicos que llegan tarde esperan.', 'Como sujeito sem preposição, use «que».'], ['Las amigas con quien viajo son brasileñas.', 'Las amigas con quienes viajo son brasileñas.', 'O plural pede «quienes».']],
      }),
      texto(8, 'Mi barrio nuevo / Meu bairro novo', 'Me llamo Irene y vivo en un piso pequeño, en el barrio donde trabaja mi hermano. El piso que alquilé el año pasado está cerca de una plaza en la que hay un mercado los jueves. La vecina que vive en el piso de abajo se llama Pilar. Es una mujer con quien hablo casi todos los días, y siempre me cuenta cosas de la gente que vive en la calle. El otro día me presentó a un chico a quien yo no conocía. Trabaja en una librería que está al lado de mi casa. Ahora, los jueves, compro verdura en el mercado y, si tengo tiempo, tomo un café con las personas que ya conozco.', 'Eu me chamo Irene e moro num apartamento pequeno, no bairro onde meu irmão trabalha. O apartamento que aluguei no ano passado fica perto de uma praça em que há uma feira às quintas-feiras. A vizinha que mora no apartamento de baixo se chama Pilar. É uma mulher com quem falo quase todos os dias, e ela sempre me conta coisas sobre as pessoas que moram na rua. Outro dia me apresentou a um rapaz que eu não conhecia. Ele trabalha numa livraria que fica ao lado da minha casa. Agora, às quintas, compro verdura na feira e, se tenho tempo, tomo um café com as pessoas que já conheço.', [
        ['¿Dónde trabaja el hermano de Irene?', 'En el barrio donde vive Irene.'], ['¿Qué hay los jueves en la plaza?', 'Hay un mercado.'], ['¿Con quién habla Irene casi todos los días?', 'Con Pilar, la vecina de abajo.'], ['¿Dónde trabaja el chico que Pilar le presentó?', 'En una librería al lado de la casa de Irene.'],
      ]),
      producao(5, 'Conte em voz alta, com três relativos diferentes, quem mora perto de você: «Tengo un vecino que…, una vecina con la que…, un bar donde…»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 32', [
      revisao(5, 'Diga em voz alta uma frase com «que», uma com «donde», uma com «en la que» e uma com «con quien».'),
      exercicios(20, [
        ouvir('La casa donde vivo es pequeña', ['La casa donde vivo es pequeña', 'La casa que vivo es pequeña', 'La casa donde vive es pequeña'], 'La casa donde vivo es pequeña', 'Ouça «donde» e o verbo em primeira pessoa: «vivo».'),
        ouvir('La chica con la que viajo es de Cádiz', ['La chica con la que viajo es de Cádiz', 'La chica que viajo es de Cádiz', 'La chica con ella viajo es de Cádiz'], 'La chica con la que viajo es de Cádiz', 'Com preposição, o relativo é «con la que».'),
        ouvir('El libro que leo es muy bueno', ['El libro que leo es muy bueno', 'El libro que lo leo es muy bueno', 'El libro que leí es muy bueno'], 'El libro que leo es muy bueno', 'Não há pronome extra depois de «que».'),
        ditado('El día en que nos conocimos llovía', 'Escreva: El día en que nos conocimos llovía.'), ditado('La película que vimos ayer era larga', 'Escreva: La película que vimos ayer era larga.'), ditado('El cine al que vamos está cerca', 'Escreva: El cine al que vamos está cerca. «A + el» vira «al».'),
        mc('Qual frase une as duas frases «Tengo un vecino. Es músico.»?', ['Tengo un vecino que es músico.', 'Tengo un vecino que él es músico.', 'Tengo un vecino quien es músico.'], 'Tengo un vecino que es músico.', 'O «que» já faz o papel de sujeito.'),
        mc('Como se diz «a casa em que moro»?', ['La casa en la que vivo', 'La casa que vivo', 'La casa dónde vivo'], 'La casa en la que vivo', 'A preposição «en» vem antes do relativo.'),
        mc('Qual é o relativo correto em «La persona con ___ hablo es mi jefe»?', ['quien', 'que', 'cual'], 'quien', 'Depois de preposição, para pessoas, usa-se «quien» ou «la que».'),
        mc('Qual frase está correta?', ['El libro del que hablo es nuevo.', 'El libro de el que hablo es nuevo.', 'El libro que hablo es nuevo.'], 'El libro del que hablo es nuevo.', 'De + el = del; e «hablar de» pede a preposição.'),
        lacuna('La ciudad ___ vivo es grande.', ['donde', 'dónde', 'qué'], 'donde', 'Como relativo, «donde» não leva til.'), lacuna('El cine ___ que fuimos es nuevo.', ['al', 'del', 'en el'], 'al', '«Ir a» + «el» forma «al».'), lacuna('Los chicos ___ llegan tarde esperan.', ['que', 'quien', 'donde'], 'que', 'Sujeito plural sem preposição: «que».'), lacuna('Mi hermana, ___ vive en Lyon, viene mañana.', ['que', 'qué', 'donde'], 'que', 'Entre vírgulas, o relativo continua sendo «que».'), lacuna('El día ___ nos conocimos llovía.', ['en que', 'donde', 'al que'], 'en que', 'Para o tempo, usa-se «en que» depois de «día».'),
        ordem('Ordene: «La casa en la que vivo es pequeña.»', ['La', 'casa', 'en', 'la', 'que', 'vivo', 'es', 'pequeña.'], 'La casa en la que vivo es pequeña.', 'A preposição fica antes do relativo.'), ordem('Ordene: «Tengo un amigo que vive en Sevilla.»', ['Tengo', 'un', 'amigo', 'que', 'vive', 'en', 'Sevilla.'], 'Tengo un amigo que vive en Sevilla.', 'O «que» vem logo depois do nome.'),
        livre('Escreva em espanhol: A moça com quem trabalho mora no bairro onde eu nasci.', 'La chica con la que trabajo vive en el barrio donde nací.'),
        lacuna('Los amigos con ___ viajo son brasileños.', ['quien', 'que', 'quienes'], 'quienes', 'Depois de preposição, plural de pessoas: «quienes».'),
        lacuna('La calle por ___ paso es larga.', ['la que', 'el que', 'donde'], 'la que', '«Calle» é feminino: «por la que».'),
        lacuna('El año ___ llegué a Madrid fue 2019.', ['donde', 'en que', 'quien'], 'en que', 'Para tempo, usa-se «en que».'),
        lacuna('Los vecinos ___ viven aquí son simpáticos.', ['que', 'quienes', 'donde'], 'que', 'Como sujeito, usa-se «que», sem preposição.'),
        lacuna('El cine ___ vamos hoy es nuevo. (aonde)', ['que', 'al que', 'en que'], 'al que', '«Ir a» + el cine: «al que».'),
        mc('Como se diz «a cidade onde moro»?', ['la ciudad dónde vivo', 'la ciudad donde vivo', 'la ciudad que vivo'], 'la ciudad donde vivo', 'No relativo, «donde» não leva til.'),
        mc('Qual frase repete o pronome por engano?', ['El libro que leo es bueno.', 'El libro que leí es bueno.', 'El libro que lo leo es bueno.'], 'El libro que lo leo es bueno.', 'O «que» já substitui o objeto; não se repete com «lo».'),
        mc('Qual relativo se usa para pessoas no plural depois de preposição?', ['quienes', 'quien', 'donde'], 'quienes', 'O plural de «quien» é «quienes».'),
        ordem('Ordene: «La persona con quien hablo es mi jefe.»', ['La', 'persona', 'con', 'quien', 'hablo', 'es', 'mi', 'jefe.'], 'La persona con quien hablo es mi jefe.', 'Preposição + «quien» para pessoas.'),
        ordem('Ordene: «Tengo una amiga que vive en Cádiz.»', ['Tengo', 'una', 'amiga', 'que', 'vive', 'en', 'Cádiz.'], 'Tengo una amiga que vive en Cádiz.', '«Que» junta duas frases.'),
        livre('Escreva em espanhol: A moça que mora aqui é minha amiga.', 'La chica que vive aquí es mi amiga.'),
        livre('Escreva em espanhol: O restaurante onde jantamos era muito bom. (com «donde»)', 'El restaurante donde cenamos era muy bueno.'),
      ]),
      producao(5, 'Descreva em voz alta a sua rua com cinco relativos: «La tienda que…, la plaza donde…, el vecino con quien…»'),
    ]),
  ],
});
