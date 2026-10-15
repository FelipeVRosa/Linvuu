import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 14, titulo: 'Querer, poder, dever e os pronomes «y» e «en»', nivel: 'a1',
  objetivo: 'Usar «vouloir», «pouvoir», «devoir» e «savoir», e substituir lugares com «y» e quantidades com «en».',
  nota: 'Você pede, permite e obriga em francês, e evita repetir lugares e quantidades. Próxima aula: o passado com «avoir».',
  sessoes: [
    sessao('S1', 'Vouloir, pouvoir, devoir, savoir', [
      revisao(5, 'Diga cinco frases com «le, la, les» substituindo objetos.'),
      palavras(8, [
        ['vouloir', 'vuluár', 'querer', ''], ['pouvoir', 'puvuár', 'poder', ''], ['devoir', 'devuár', 'dever, ter de', ''], ['savoir', 'savuár', 'saber', ''], ['je veux', 'jö vö', 'eu quero', ''], ['je peux', 'jö pö', 'eu posso', ''], ['je dois', 'jö duá', 'eu devo', ''], ['je sais', 'jö sé', 'eu sei', ''],
      ]),
      gramatica(12, 'Quatro verbos irregulares muito úteis', 'PASSO 1: «vouloir»: je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent. PASSO 2: «pouvoir»: je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent. PASSO 3: «devoir»: je dois, tu dois, il doit, nous devons, vous devez, ils doivent. PASSO 4: «savoir»: je sais, tu sais, il sait, nous savons, vous savez, ils savent. PASSO 5: os três primeiros pedem outro verbo no infinitivo: «Je veux manger.» «Tu peux venir ?» «Nous devons partir.» PASSO 6: «savoir» + infinitivo é «saber fazer» (habilidade): «Je sais nager.» PASSO 7: pedido educado: «Je voudrais un café, s\'il vous plaît.» («voudrais» é mais gentil que «veux»). «Pouvez-vous m\'aider ?» PASSO 8: na negação, o infinitivo fica depois do «pas»: «Je ne peux pas venir.»', {
        tag: 'Verbos',
        comparacao: 'em português dizemos «eu quero», «eu posso», «eu devo». O francês é parecido, mas a escrita muda dentro do verbo (veux/voulons, peux/pouvons, dois/devons) e o «x» de «veux» e «peux» não se pronuncia.',
        tabela: [
          { pessoa: 'je', vouloir: 'veux', pouvoir: 'peux', devoir: 'dois', savoir: 'sais' }, { pessoa: 'tu', vouloir: 'veux', pouvoir: 'peux', devoir: 'dois', savoir: 'sais' }, { pessoa: 'il / elle', vouloir: 'veut', pouvoir: 'peut', devoir: 'doit', savoir: 'sait' }, { pessoa: 'nous', vouloir: 'voulons', pouvoir: 'pouvons', devoir: 'devons', savoir: 'savons' }, { pessoa: 'vous', vouloir: 'voulez', pouvoir: 'pouvez', devoir: 'devez', savoir: 'savez' }, { pessoa: 'ils / elles', vouloir: 'veulent', pouvoir: 'peuvent', devoir: 'doivent', savoir: 'savent' },
        ],
        erros: [['Je veux à manger.', 'Je veux manger.', 'Sem preposição antes do infinitivo.'], ['Je ne peux pas à venir.', 'Je ne peux pas venir.', 'Sem preposição.'], ['Je peut venir.', 'Je peux venir.', '«Je» pede «peux».'], ['Je sais à nager.', 'Je sais nager.', 'Sem preposição.']],
      }),
      producao(5, 'Diga em voz alta: o que você quer, pode, deve e sabe fazer, uma frase para cada verbo.'),
    ]),
    sessao('S2', 'O pronome «y»: lugares', [
      revisao(4, 'Faça pedidos educados com «je voudrais» e «pouvez-vous».'),
      palavras(6, [
        ['y', 'i', 'lá, nele', ''], ['là', 'la', 'lá', ''], ['ici', 'isi', 'aqui', ''], ['aller', 'alé', 'ir', ''], ['rester', 'resté', 'ficar', ''], ['arriver', 'arivé', 'chegar', ''],
      ]),
      gramatica(12, 'Substituir um lugar com «y»', 'PASSO 1: «y» substitui «à + lugar», «chez + pessoa» e outras preposições de lugar: «Tu vas à Paris ? — Oui, j\'y vais.» PASSO 2: o «y» fica antes do verbo, como os outros pronomes: «J\'y vais.» «Je n\'y vais pas.» «Je vais y aller.» PASSO 3: com «il y a» o «y» já está dentro: «Il y a un café ? — Oui, il y en a un.» (veja o «en» na próxima parte). PASSO 4: o imperativo afirmativo coloca «y» depois do verbo, com hífen: «Vas-y !» (com «s» extra) e «Allons-y !». PASSO 5: «y» também substitui «à» + coisa: «Je pense à ça. → J\'y pense.» PASSO 6: não use «y» para pessoas com «à»: «Je pense à Marie → Je pense à elle.» PASSO 7: «y» é uma palavra curtíssima que significa «lá»: sempre colada ao verbo: «J\'y vais», «On y va».', {
        tag: 'Pronomes',
        comparacao: 'em português não há uma palavrinha que substitua um lugar: dizemos «vou lá». O francês tem «y» e o usa sempre: «j\'y vais» é «eu vou lá». Sem «y», a frase sobra de lugar, e fica repetida.',
        tabela: [
          { pergunta: 'Tu vas à Paris ?', resposta: 'Oui, j\'y vais.' }, { pergunta: 'Tu restes à la maison ?', resposta: 'Non, je n\'y reste pas.' }, { pergunta: 'Vous allez au cinéma ?', resposta: 'Oui, nous y allons.' }, { pergunta: 'Tu vas chez Paul ?', resposta: 'Oui, j\'y vais.' }, { pergunta: 'Allons à la plage !', resposta: 'Allons-y !' },
        ],
        erros: [['Je vais à Paris, j\'y vais à Paris.', 'J\'y vais.', 'O «y» substitui o lugar; não repita.'], ['Je vais y.', 'J\'y vais.', 'Antes do verbo.'], ['Je ne vais pas y.', 'Je n\'y vais pas.', '«Ne» + «y» + verbo + «pas».'], ['Va-y !', 'Vas-y !', 'Imperativo com «y» pede o «s».']],
      }),
      producao(8, 'Responda em voz alta: «Tu vas à la banque ? Tu restes à la maison ? Tu vas au travail ?» com «y».'),
    ]),
    sessao('S3', 'O pronome «en»: quantidades', [
      revisao(4, 'Responda com «y»: «Tu vas à la boulangerie ? Tu arrives à l\'école ?»'),
      palavras(5, [
        ['en', 'ã', 'disso, deles', ''], ['beaucoup', 'boku', 'muito', ''], ['un peu', 'ẽ pö', 'um pouco', ''], ['plusieurs', 'plüziör', 'vários', ''], ['aucun', 'ôkẽ', 'nenhum', ''],
      ]),
      gramatica(8, 'Substituir quantidades com «en»', 'PASSO 1: «en» substitui «de + substantivo», partitivos e quantidades: «Tu veux du pain ? — Oui, j\'en veux.» PASSO 2: com número, o número fica: «Tu as deux enfants ? — Oui, j\'en ai deux.» PASSO 3: com «un/une», o pronome repete o número: «Tu as un frère ? — Oui, j\'en ai un.» PASSO 4: sem quantidade, o «en» sozinho serve para «disso»: «Tu veux du café ? — Non, je n\'en veux pas.» PASSO 5: a ordem é a mesma do «y»: antes do verbo, entre «ne» e verbo na negação: «Je n\'en veux pas.» PASSO 6: com «beaucoup» ou «un peu», eles ficam no fim: «J\'en veux beaucoup.»', {
        tag: 'Pronomes',
        comparacao: 'em português dizemos «quero» ou «quero disso». O francês pede «en» quando há uma quantidade implícita: «j\'en veux», «j\'en ai deux». Sem o «en», a frase fica incompleta.',
        tabela: [
          { pergunta: 'Tu veux du pain ?', resposta: 'Oui, j\'en veux.' }, { pergunta: 'Tu as des frères ?', resposta: 'Oui, j\'en ai deux.' }, { pergunta: 'Tu prends du sucre ?', resposta: 'Non, je n\'en prends pas.' }, { pergunta: 'Vous avez des enfants ?', resposta: 'Oui, nous en avons trois.' },
        ],
        erros: [['J\'ai deux.', 'J\'en ai deux.', 'O «en» é obrigatório.'], ['Je veux en.', 'J\'en veux.', 'Antes do verbo.'], ['Je ne veux pas en.', 'Je n\'en veux pas.', 'Entre «ne» e o verbo.'], ['J\'en ai un frère.', 'J\'en ai un.', 'Ou «J\'ai un frère.» Não repita o objeto.']],
      }),
      dialogo(8, 'Au marché / No mercado', 'Chloé compra frutas e conversa com a vendedora.', [
        ['Chloé', 'Bonjour. Je voudrais des pommes, s\'il vous plaît.', 'Bom dia. Eu gostaria de maçãs, por favor.'], ['La vendeuse', 'Combien en voulez-vous ?', 'Quantas a senhora quer?'], ['Chloé', 'J\'en veux un kilo. Et vous avez des fraises ?', 'Quero um quilo. E vocês têm morangos?'], ['La vendeuse', 'Oui, nous en avons. Vous en voulez combien ?', 'Sim, temos. Quanto a senhora quer?'], ['Chloé', 'J\'en prends deux cents grammes. Je peux payer par carte ?', 'Levo duzentos gramas. Posso pagar com cartão?'], ['La vendeuse', 'Oui, vous pouvez. Voilà, madame.', 'Sim, pode. Aqui está.'],
      ]),
      producao(5, 'Responda: «Tu as des frères ? Tu veux du café ? Tu manges des fruits ?» usando «en».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 14', [
      revisao(5, 'Responda: «Tu peux venir ? Tu dois travailler ? Tu veux du thé ?»'),
      exercicios(20, [
        ouvir('J\'y vais', ['J\'y vais', 'J\'en veux', 'Je le vois'], 'J\'y vais', 'Ouça «y».'), ouvir('J\'en ai deux', ['J\'en ai deux', 'J\'y ai deux', 'J\'ai deux'], 'J\'en ai deux', 'Ouça «en».'), ouvir('Je ne peux pas venir', ['Je ne peux pas venir', 'Je ne veux pas venir', 'Je ne dois pas venir'], 'Je ne peux pas venir', 'Ouça «peux».'),
        ditado('Je voudrais un café', 'Escreva: Je voudrais un café.'), ditado('Tu y vas ?', 'Escreva: Tu y vas ?'), ditado('Je n\'en veux pas', 'Escreva: Je n\'en veux pas.'),
        mc('Qual frase está correta?', ['Je veux manger.', 'Je veux à manger.', 'Je veux de manger.'], 'Je veux manger.', 'Sem preposição.'), mc('«Tu vas à Paris ?» Resposta com «y»:', ['Oui, j\'y vais.', 'Oui, je vais y.', 'Oui, je y vais.'], 'Oui, j\'y vais.', 'Elisão e antes do verbo.'), mc('«Tu as des frères ?» Resposta com «en»:', ['Oui, j\'en ai deux.', 'Oui, j\'ai deux.', 'Oui, je en ai deux.'], 'Oui, j\'en ai deux.', 'O «en» é obrigatório.'), mc('Como se diz «eu sei nadar»?', ['Je sais nager.', 'Je peux nager.', 'Je veux nager.'], 'Je sais nager.', '«Savoir» = habilidade.'),
        lacuna('Nous ___ partir. (devemos)', ['devons', 'devez', 'doit'], 'devons', 'Nous + -ons.'), lacuna('Vous ___ venir ? (podem)', ['pouvez', 'peux', 'peut'], 'pouvez', 'Vous + -ez.'), lacuna('Il ___ un café. (quer)', ['veut', 'veux', 'veulent'], 'veut', 'Il + -t.'), lacuna('Tu vas au cinéma ? — Oui, j\'___ vais.', ['y', 'en', 'le'], 'y', 'Lugar → y.'),
        ordem('Ordene: «Je n\'y vais pas.»', ['Je', 'n\'y', 'vais', 'pas'], 'Je n\'y vais pas.', 'ne + y + verbo + pas.'), ordem('Ordene: «J\'en veux beaucoup.»', ['J\'en', 'veux', 'beaucoup'], 'J\'en veux beaucoup.', 'en + verbo + quantidade.'),
        livre('Escreva em francês: Eu quero café. Posso ir lá? Eu tenho dois.', 'Je veux du café. Je peux y aller ? J\'en ai deux.'),
        lacuna('Tu ___ venir demain ? (podes)', ['peut', 'peuvent', 'peux'], 'peux', 'Com «tu», «pouvoir» faz «peux».'),
        lacuna('Ils ___ partir. (devem)', ['doivent', 'doit', 'devons'], 'doivent', 'Com «ils», «devoir» faz «doivent».'),
        lacuna('Je ___ nager. (sei)', ['sait', 'sais', 'savons'], 'sais', 'Com «je», «savoir» faz «sais».'),
        lacuna('Tu veux du pain ? — Oui, j\'___ veux.', ['y', 'le', 'en'], 'en', '«En» substitui o partitivo «du pain».'),
        lacuna('Elle ne ___ pas venir. (pode)', ['peut', 'peux', 'pouvoir'], 'peut', 'Com «elle», «pouvoir» faz «peut».'),
        mc('Como dizer que você não tem nenhum (resposta a «Tu as des frères ?»)?', ['Non, je n\'y ai pas.', 'Non, je n\'en ai pas.', 'Non, je ne en ai pas.'], 'Non, je n\'en ai pas.', '«En» fica entre «ne» e o verbo; «ne» vira «n\'».'),
        mc('Como se diz «Vamos lá!»?', ['Allons-en !', 'Y allons !', 'Allons-y !'], 'Allons-y !', 'No imperativo afirmativo, o «y» vem depois do verbo, com hífen.'),
        mc('Qual frase está correta?', ['Je ne peux pas venir.', 'Je ne peux pas à venir.', 'Je ne pas peux venir.'], 'Je ne peux pas venir.', '«Ne… pas» envolve «peux», e o infinitivo vem direto depois.'),
        mc('Qual é a forma de «vouloir» para «nous»?', ['voulez', 'voulons', 'veulent'], 'voulons', '«Nous voulons».'),
        ordem('Ordene: «Nós devemos partir amanhã.»', ['Nous', 'devons', 'partir', 'demain'], 'Nous devons partir demain.', '«Devoir» + infinitivo.'),
        ordem('Ordene: «Ele vai lá todos os dias.»', ['Il', 'y', 'va', 'tous', 'les', 'jours'], 'Il y va tous les jours.', 'O «y» vem antes do verbo.'),
        livre('Escreva em francês: Eu não posso vir. Eu devo ficar aqui.', 'Je ne peux pas venir. Je dois rester ici.'),
        livre('Escreva em francês (use «tu»): Você quer café? Sim, eu quero.', 'Tu veux du café ? Oui, j\'en veux.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você quer, pode e deve fazer esta semana.'),
    ]),
  ],
});
