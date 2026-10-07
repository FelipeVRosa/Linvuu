import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 5, titulo: 'Artigos, plural e c\'è / ci sono', nivel: 'a1',
  objetivo: 'Escolher o artigo definido e indefinido certo (il, lo, l\', la, un, uno, una, un\'), formar o plural dos substantivos e dizer o que existe num lugar com «c\'è» e «ci sono».',
  nota: 'Você nomeia objetos, pessoas e lugares com o artigo certo, usa o plural e diz o que há num lugar. Próxima aula: «avere» em uso e os verbos em -ere e -ire.',
  sessoes: [
    sessao('S1', 'Gênero e artigos no singular', [
      revisao(5, 'Retome a aula 4: diga em voz alta cinco frases com verbos em -are, duas negativas. Faça uma pergunta com «dove» e uma com «perché».'),
      palavras(8, [
        ['il libro', 'il líbro', 'o livro', ''], ['la penna', 'la pénna', 'a caneta', ''], ['lo zaino', 'lo dzáino', 'a mochila', ''], ['lo studente', 'lo studénte', 'o estudante', ''], ['l\'amico', 'lamíko', 'o amigo', ''], ['l\'amica', 'lamíka', 'a amiga', ''], ['la finestra', 'la finéstra', 'a janela', ''], ['la camera', 'la kámera', 'o quarto (não é câmera)', ''],
      ]),
      gramatica(12, 'Gênero e artigos: il, lo, l\', la, un, uno, una, un\'', 'PASSO 1: todo substantivo italiano é masculino ou feminino. Em geral, os terminados em «-o» são masculinos («libro») e os em «-a» são femininos («penna»); os terminados em «-e» podem ser de um ou do outro («studente» é masculino; «notte» é feminino). Aprenda cada palavra com o artigo. PASSO 2: há exceções comuns: palavras em «-ma» de origem grega são masculinas («il problema», «il programma»), e «turista» e «collega» servem para os dois gêneros, só o artigo muda: «il turista» e «la turista». PASSO 3: o artigo definido (o, a) tem quatro formas no singular: «il» (masculino antes de consoante: «il libro»); «lo» (masculino antes de «z», «s» + consoante, «gn», «ps», «x», «y»: «lo zaino», «lo studente»); «l\'» (antes de vogal, masculino ou feminino: «l\'amico», «l\'amica»); «la» (feminino antes de consoante: «la penna»). PASSO 4: o artigo indefinido (um, uma) segue a mesma lógica: «un» (masculino: «un libro», «un amico»); «uno» (masculino antes de «z», «s» + consoante: «uno zaino», «uno studente»); «una» (feminino: «una penna»); «un\'» (feminino antes de vogal: «un\'amica»). PASSO 5: o artigo concorda com a primeira palavra depois dele, mesmo se for adjetivo: «un bravo studente», «uno studente bravo». PASSO 6: sem artigo depois de «essere» com profissão ou nacionalidade: «Sono studente», «Lei è insegnante». Com artigo, entra uma descrição: «Lei è un\'insegnante molto brava».', {
        tag: 'Artigos',
        comparacao: 'o português tem «o, a, um, uma». O italiano tem mais formas, porque o artigo masculino muda com a primeira letra da palavra seguinte (por isso «il libro», mas «lo zaino» e «l\'amico»). O gênero costuma coincidir com o do português, mas não sempre. Note que «un\'amica» (com apóstrofo) é feminino, enquanto «un amico» (sem apóstrofo) é masculino.',
        tabela: [
          { situacao: 'masculino + consoante', definido: 'il', indefinido: 'un', exemplo: 'il libro, un libro' }, { situacao: 'masculino + z, s + consoante, gn, ps', definido: 'lo', indefinido: 'uno', exemplo: 'lo zaino, uno studente' }, { situacao: 'masculino + vogal', definido: 'l\'', indefinido: 'un', exemplo: 'l\'amico, un amico' },
          { situacao: 'feminino + consoante', definido: 'la', indefinido: 'una', exemplo: 'la penna, una penna' }, { situacao: 'feminino + vogal', definido: 'l\'', indefinido: 'un\'', exemplo: 'l\'amica, un\'amica' },
        ],
        erros: [['il zaino', 'lo zaino', 'Antes de «z», o artigo masculino é «lo».'], ['il studente', 'lo studente', 'Antes de «s» + consoante, o artigo masculino é «lo».'], ['un amica', 'un\'amica', 'Feminino pede «un\'» (ou «una»); «un» é masculino.'], ['la problema', 'il problema', 'Palavras em «-ma» de origem grega são masculinas.']],
      }),
      producao(5, 'Diga em voz alta o artigo definido e o indefinido de cada palavra: libro, penna, zaino, studente, amico, amica, finestra, camera.'),
    ]),
    sessao('S2', 'O plural dos substantivos', [
      revisao(4, 'Diga o artigo definido e o indefinido de cinco palavras. Qual artigo se usa antes de «zaino»? E antes de «amica»?'),
      palavras(6, [
        ['i libri', 'i líbri', 'os livros', ''], ['le penne', 'le pénne', 'as canetas', ''], ['gli zaini', 'lhi dzáini', 'as mochilas', ''], ['gli studenti', 'lhi studénti', 'os estudantes', ''], ['le amiche', 'le amíke', 'as amigas', ''], ['i caffè', 'i kaffé', 'os cafés', ''],
      ]),
      gramatica(12, 'Plural: -o → -i, -a → -e, -e → -i', 'PASSO 1: o plural italiano troca a vogal final, sem acrescentar «s». Substantivos em «-o» fazem plural em «-i»: «libro» vira «libri». Os em «-a» fazem plural em «-e»: «penna» vira «penne». Os em «-e» fazem plural em «-i»: «studente» vira «studenti». PASSO 2: os artigos também têm plural. O de «il» é «i» («i libri»). O de «lo» e de «l\'» masculino é «gli» («gli zaini», «gli amici»). O de «la» e de «l\'» feminino é «le» («le penne», «le amiche»). PASSO 3: «-ca» e «-ga» vão para «-che» e «-ghe», mantendo o som duro: «amica» vira «amiche», «riga» vira «righe». PASSO 4: em «-co» e «-go» varia: «amico» vira «amici»; «lago» vira «laghi». Ouça o áudio e aprenda palavra por palavra. PASSO 5: ficam iguais no plural as palavras com acento final («il caffè» e «i caffè», «la città» e «le città», «l\'università» e «le università»), as que terminam em consoante («il bar» e «i bar», «il film» e «i film») e as abreviadas («la foto» e «le foto»). PASSO 6: algumas palavras em «-ma» fazem plural em «-i»: «il problema» vira «i problemi». Mudam de forma: «l\'uomo» vira «gli uomini». PASSO 7: depois de um número, o substantivo vai ao plural: «due libri», «tre penne», «dieci studenti». PASSO 8: o adjetivo também concorda: «gli amici simpatici», «le amiche simpatiche».', {
        tag: 'Plural',
        comparacao: 'em português, o plural quase sempre acrescenta um «s» («livro, livros»). Em italiano, o «s» não faz plural: troca-se a vogal final («libro, libri»). Por isso «i libris» ou «le penns» estão errados.',
        tabela: [
          { tipo: '-o → -i', singular: 'il libro', plural: 'i libri' }, { tipo: '-a → -e', singular: 'la penna', plural: 'le penne' }, { tipo: '-e → -i', singular: 'lo studente', plural: 'gli studenti' },
          { tipo: '-ca → -che', singular: 'l\'amica', plural: 'le amiche' }, { tipo: '-co → -ci (varia)', singular: 'l\'amico', plural: 'gli amici' }, { tipo: 'com acento', singular: 'il caffè', plural: 'i caffè' },
          { tipo: 'consoante', singular: 'il bar', plural: 'i bar' }, { tipo: '-ma → -mi', singular: 'il problema', plural: 'i problemi' },
        ],
        erros: [['le amice', 'le amiche', '«-ca» vira «-che» para manter o som duro de «c».'], ['i caffès', 'i caffè', 'Palavras com acento final não mudam no plural.'], ['i penne', 'le penne', '«Penna» é feminina; o plural do artigo é «le».'], ['i zaini', 'gli zaini', '«Lo zaino» faz plural com «gli».']],
      }),
      dialogo(8, 'Una penna per Marco / Uma caneta para o Marco', 'Marco esqueceu a caneta, e Giulia o ajuda.', [
        ['Marco', 'Giulia, ho un problema: non ho la penna!', 'Giulia, tenho um problema: não tenho a caneta!'], ['Giulia', 'Nessun problema. Ho due penne.', 'Sem problema. Tenho duas canetas.'], ['Marco', 'Davvero? Grazie! Sei un\'amica fantastica.', 'Sério? Obrigado! Você é uma amiga fantástica.'], ['Giulia', 'Ecco, una penna blu. Hai anche i libri?', 'Tome, uma caneta azul. Você tem os livros também?'], ['Marco', 'Sì, ho i libri e un quaderno.', 'Sim, tenho os livros e um caderno.'], ['Giulia', 'Allora siamo pronti per la lezione!', 'Então estamos prontos para a aula!'],
      ]),
    ]),
    sessao('S3', 'C\'è e ci sono', [
      revisao(4, 'Passe para o plural, com o artigo: il libro, la penna, lo studente, l\'amica, il caffè, il problema.'),
      palavras(5, [
        ['c\'è', 'tché', 'há, tem (um só)', ''], ['ci sono', 'tchi sôno', 'há, tem (vários)', ''], ['non c\'è', 'non tché', 'não há', ''], ['vicino', 'vitchíno', 'perto', ''], ['lontano', 'lontáno', 'longe', ''],
      ]),
      gramatica(8, 'C\'è e ci sono: dizer o que existe num lugar', 'PASSO 1: para dizer que algo existe ou está presente num lugar, use «c\'è» no singular e «ci sono» no plural. «C\'è un bar qui» (tem um bar aqui). «Ci sono due bar qui» (tem dois bares aqui). PASSO 2: «c\'è» é a união de «ci» e «è». O som é «tché». PASSO 3: a pergunta mantém a ordem e sobe a entonação: «C\'è un bar qui?» «Ci sono due bar?» PASSO 4: a negação põe «non» antes: «Non c\'è un bar», «Non ci sono bar». PASSO 5: depois de «c\'è» e «ci sono», o substantivo vem com artigo indefinido, número ou sem artigo, porque se apresenta algo novo: «C\'è una banca», «Ci sono tre studenti». Quando o item é conhecido, usa-se «essere»: «La banca è qui», «Dov\'è la banca?», «Dove sono i libri?» PASSO 6: respostas curtas: «Sì, c\'è.» «No, non c\'è.» «Sì, ci sono.»', {
        tag: 'C\'è / ci sono',
        comparacao: 'em português coloquial usamos «tem um bar aqui» ou, mais formal, «há um bar aqui». O italiano usa «c\'è» para os dois. ',
        tabela: [
          { situacao: 'afirmar', singular: 'C\'è un bar.', plural: 'Ci sono due bar.' }, { situacao: 'negar', singular: 'Non c\'è un bar.', plural: 'Non ci sono bar.' }, { situacao: 'perguntar', singular: 'C\'è una banca qui?', plural: 'Ci sono due banche qui?' }, { situacao: 'responder', singular: 'Sì, c\'è.', plural: 'No, non ci sono.' }, { situacao: 'perguntar onde', singular: 'Dov\'è la banca?', plural: 'Dove sono le banche?' },
        ],
        erros: [['Ci è un bar.', 'C\'è un bar.', 'A forma singular é «c\'è».'], ['C\'è due bar.', 'Ci sono due bar.', 'Plural pede «ci sono».'], ['Ci sono una banca.', 'C\'è una banca.', 'Um só item pede «c\'è».'], ['Dov\'è i libri?', 'Dove sono i libri?', 'Plural pede «dove sono».']],
      }),
      texto(8, 'A casa di Giulia', 'A casa di Giulia c\'è una cucina piccola, un salotto e due camere. In salotto ci sono un tavolo, quattro sedie e una finestra grande. Non c\'è un balcone, ma c\'è un giardino piccolo. Vicino a casa ci sono due bar e una farmacia. La banca non è vicina: è lontana.', 'Na casa da Giulia há uma cozinha pequena, uma sala e dois quartos. Na sala há uma mesa, quatro cadeiras e uma janela grande. Não há varanda, mas há um jardim pequeno. Perto de casa há dois bares e uma farmácia. O banco não é perto: é longe.', [['Che cosa c\'è in salotto?', 'Ci sono un tavolo, quattro sedie e una finestra.'], ['Quante camere ci sono?', 'Ci sono due camere.'], ['C\'è un balcone?', 'No, non c\'è.'], ['Dov\'è la banca?', 'È lontana.']]),
      producao(5, 'Descreva em voz alta o seu quarto ou a sua cozinha com «c\'è» e «ci sono». Depois diga o que não há: «Non c\'è…, non ci sono…»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 5', [
      revisao(5, 'Descreva em voz alta uma sala de aula: o que há, quantos são e onde está cada coisa. Use artigos e plural.'),
      exercicios(20, [
        ouvir('lo zaino', ['lo zaino', 'il zaino', 'la zaino'], 'lo zaino', 'Ouça o artigo «lo» antes de «z».'), ouvir('Ci sono due bar', ['Ci sono due bar', 'C\'è un bar', 'Non ci sono bar'], 'Ci sono due bar', 'Ouça «ci sono» e «due».'), ouvir('le amiche', ['le amiche', 'le amici', 'gli amici'], 'le amiche', 'Ouça o «-che» do plural feminino.'),
        ditado('l\'amica', 'Escreva: l\'amica.'), ditado('Ci sono tre libri', 'Escreva: Ci sono tre libri.'), ditado('Non c\'è una banca', 'Escreva: Non c\'è una banca.'),
        mc('Qual é o artigo definido de «studente»?', ['lo', 'il', 'la'], 'lo', 'Antes de «s» + consoante, o artigo masculino é «lo».'), mc('Qual é o plural de «penna»?', ['penne', 'penni', 'penna'], 'penne', '«-a» vira «-e».'), mc('Qual é o plural de «caffè»?', ['caffè', 'caffei', 'caffeni'], 'caffè', 'Palavras com acento final não mudam.'), mc('Como se diz «tem um bar aqui?»', ['C\'è un bar qui?', 'Ci sono un bar qui?', 'Ha un bar qui?'], 'C\'è un bar qui?', 'Singular com «c\'è».'),
        lacuna('___ amica è simpatica. (a)', ['L\'', 'La', 'Lo'], 'L\'', 'Antes de vogal, o artigo é «l\'».'), lacuna('Ho ___ zaino. (um)', ['uno', 'un', 'una'], 'uno', 'Antes de «z», o indefinido masculino é «uno».'), lacuna('Ci ___ tre studenti. (há)', ['sono', 'è', 'siamo'], 'sono', 'Plural pede «ci sono».'), lacuna('___ è la banca? (onde)', ['Dov\'', 'Chi', 'Com\''], 'Dov\'', '«Dov\'è la banca?».'),
        ordem('Ordene: «Ci sono due bar vicino a casa.»', ['Ci', 'sono', 'due', 'bar', 'vicino', 'a', 'casa'], 'Ci sono due bar vicino a casa.', 'Existência em um lugar.'), ordem('Ordene: «Non c\'è un balcone.»', ['Non', 'c\'è', 'un', 'balcone'], 'Non c\'è un balcone.', 'Negação com «non».'),
        livre('Escreva em italiano: Na minha cidade não há um cinema, mas há dois bares.', 'Non c\'è un cinema, ma ci sono due bar.'),
      ]),
      producao(5, 'Descreva em voz alta a rua onde você mora: o que há (bares, lojas, farmácia) e o que não há.'),
    ]),
  ],
});
