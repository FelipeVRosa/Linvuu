import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 59, titulo: 'Reuniões, negociação e relato oral', nivel: 'b1',
  objetivo: 'Participar de uma reunião, negociar com concessões e condições, e relatar com precisão o que foi dito ou decidido.',
  nota: 'Você consegue defender uma posição, ceder e relatar uma reunião. Próxima aula: estratégias para entender e para se fazer entender.',
  sessoes: [
    sessao('S1', 'Participar de uma reunião', [
      revisao(5, 'Conte em voz alta um imprevisto de viagem usando a voz passiva e «on».'),
      palavras(8, [
        ['une réunion', 'ün réünió', 'uma reunião', ''], ['l\'ordre du jour', 'lordr dü jur', 'a pauta', ''], ['un compte rendu', 'ẽ kõt rãdü', 'uma ata, um relato', ''], ['proposer', 'propozé', 'propor', ''], ['soutenir', 'sutnir', 'apoiar, defender', ''], ['objecter', 'objéktê', 'objetar', ''], ['trancher', 'trãxé', 'decidir (cortar a dúvida)', ''], ['un échéancier', 'ẽ néxéãsié', 'um cronograma', ''],
      ]),
      gramatica(12, 'Tomar a palavra', 'PASSO 1: pedir a palavra: «Puis-je intervenir ?» «Je voudrais ajouter quelque chose.» PASSO 2: apresentar uma proposta: «Je propose que nous commencions par le budget.» (subjuntivo depois de «proposer que») PASSO 3: apoiar: «Je suis d\'accord avec Marie sur ce point.» PASSO 4: objetar com educação: «Je comprends votre point de vue, mais je crains que ce ne soit pas réaliste.» PASSO 5: pedir esclarecimento: «Pourriez-vous préciser ce que vous entendez par là ?» PASSO 6: resumir: «Pour résumer, nous avons décidé de…» PASSO 7: encerrar: «Si personne n\'a d\'autres remarques, je propose de clore la réunion.»', {
        tag: 'Reunião',
        comparacao: 'em português «eu acho que não vai dar» soa direto. Em francês, uma objeção costuma começar reconhecendo o outro: «je comprends, mais…». Sem essa abertura, a frase parece brusca em reunião.',
        tabela: [
          { situacao: 'pedir a palavra', formal: 'Puis-je intervenir ?', informal: 'Je peux dire un truc ?' }, { situacao: 'propor', formal: 'Je propose que nous commencions.', informal: 'On commence ?' }, { situacao: 'apoiar', formal: 'Je suis d\'accord avec vous sur ce point.', informal: 'Ouais, d\'accord.' }, { situacao: 'objetar', formal: 'Je crains que ce ne soit pas réaliste.', informal: 'Je pense pas que ça marche.' }, { situacao: 'esclarecer', formal: 'Pourriez-vous préciser ?', informal: 'Tu veux dire quoi ?' }, { situacao: 'resumir', formal: 'Pour résumer, nous avons décidé…', informal: 'Bon, on a décidé…' },
        ],
        erros: [['Je propose que nous commençons.', 'Je propose que nous commencions.', '«Proposer que» + subjuntivo.'], ['Je suis d\'accord de vous.', 'Je suis d\'accord avec vous.', '«D\'accord avec».'], ['Je crains que ce n\'est pas réaliste.', 'Je crains que ce ne soit pas réaliste.', '«Craindre que» + subjuntivo.'], ['Je peux intervenir ?', 'Puis-je intervenir ?', 'Inversão formal com «puis».']],
      }),
      producao(5, 'Simule em voz alta: você pede a palavra, apoia uma colega e objeta educadamente a uma proposta.'),
    ]),
    sessao('S2', 'Negociar', [
      revisao(4, 'Diga duas frases com «je propose que» e «je crains que».'),
      palavras(6, [
        ['à condition que', 'a kõdisió kö', 'desde que', ''], ['à moins que', 'a muẽ kö', 'a menos que', ''], ['sauf si', 'sôf si', 'a não ser que', ''], ['un compromis', 'ẽ kõpromi', 'um acordo', ''], ['accepter', 'aksépté', 'aceitar', ''], ['refuser', 'röfüzé', 'recusar', ''],
      ]),
      gramatica(12, 'Ceder sem perder', 'PASSO 1: condição: «à condition que» + subjuntivo: «J\'accepte à condition que vous payiez avant.» PASSO 2: exceção: «à moins que» + subjuntivo (com «ne» expletivo opcional): «Nous signons, à moins que le prix n\'augmente.» PASSO 3: «sauf si» + indicativo é mais simples e falado: «Nous signons, sauf si le prix augmente.» PASSO 4: concessão: «Je veux bien…, mais…», «D\'accord, mais seulement si…» PASSO 5: contraproposta no condicional: «Nous pourrions vous proposer un rabais de dix pour cent.» PASSO 6: fechar o acordo: «Marché conclu !» «Nous sommes parvenus à un accord.» PASSO 7: recusar com firmeza e cortesia: «Je regrette, mais nous ne pouvons pas accepter ces conditions.»', {
        tag: 'Negociação',
        comparacao: 'em português «desde que» e «a menos que» pedem subjuntivo, igual ao francês («à condition que», «à moins que»). A saída fácil é «sauf si» + indicativo, que evita o subjuntivo e é perfeitamente natural.',
        tabela: [
          { conjuncao: 'à condition que', modo: 'subjuntivo', exemplo: 'J\'accepte à condition que vous payiez avant.' }, { conjuncao: 'à moins que', modo: 'subjuntivo', exemplo: 'Nous signons, à moins que le prix n\'augmente.' }, { conjuncao: 'sauf si', modo: 'indicativo', exemplo: 'Nous signons, sauf si le prix augmente.' }, { conjuncao: 'pourvu que', modo: 'subjuntivo', exemplo: 'Pourvu que tout soit prêt à temps.' }, { conjuncao: 'bien que', modo: 'subjuntivo', exemplo: 'Bien que ce soit cher, j\'accepte.' }, { conjuncao: 'au cas où', modo: 'condicional', exemplo: 'Au cas où il refuserait, appelez-moi.' },
        ],
        erros: [['J\'accepte à condition que vous payez.', 'J\'accepte à condition que vous payiez.', 'Subjuntivo.'], ['Nous signons sauf si le prix augmentait.', 'Nous signons sauf si le prix augmente.', '«Sauf si» + presente.'], ['Au cas où il refuse, appelez-moi.', 'Au cas où il refuserait, appelez-moi.', '«Au cas où» + condicional.'], ['Je regrette mais nous pouvons pas.', 'Je regrette, mais nous ne pouvons pas.', 'Negação completa.']],
      }),
      producao(8, 'Simule em voz alta uma negociação de preço de um serviço, com «à condition que», «sauf si» e uma contraproposta.'),
    ]),
    sessao('S3', 'Relatar o que foi dito', [
      revisao(4, 'Diga duas condições para aceitar uma proposta.'),
      palavras(5, [
        ['annoncer', 'anõsé', 'anunciar', ''], ['confirmer', 'kõfirmé', 'confirmar', ''], ['suggérer', 'sügjéré', 'sugerir', ''], ['insister', 'ẽsisté', 'insistir', ''], ['reconnaître', 'rökonétr', 'reconhecer', ''],
      ]),
      gramatica(8, 'Verbos de relato', 'PASSO 1: no relato escrito, prefira verbos mais precisos que «dire»: «Il a annoncé que…», «Elle a confirmé que…», «Il a suggéré de…», «Elle a insisté sur…», «Il a reconnu que…» PASSO 2: o tempo recua depois de verbo no passado: «Il a dit : "Je viendrai" → Il a dit qu\'il viendrait.» PASSO 3: perguntas: «Elle a demandé si nous étions prêts.» PASSO 4: ordens: «Il nous a demandé de partir.» PASSO 5: fórmulas de ata: «Il a été décidé que…», «Il a été convenu de…»', {
        tag: 'Relato',
        comparacao: 'em português «ele disse que viria» também recua o tempo. A novidade é a riqueza de verbos: no francês profissional, «dire» é pouco usado numa ata; «annoncer», «confirmer» e «souligner» dão precisão.',
        tabela: [
          { verbo: 'annoncer que', exemplo: 'Il a annoncé que la réunion était reportée.' }, { verbo: 'confirmer que', exemplo: 'Elle a confirmé que le contrat était signé.' }, { verbo: 'suggérer de', exemplo: 'Il a suggéré de changer le planning.' }, { verbo: 'insister sur', exemplo: 'Elle a insisté sur la qualité.' }, { verbo: 'reconnaître que', exemplo: 'Il a reconnu que c\'était une erreur.' }, { verbo: 'il a été décidé que', exemplo: 'Il a été décidé que nous commencerions lundi.' },
        ],
        erros: [['Il a dit qu\'il viendra.', 'Il a dit qu\'il viendrait.', 'Recuo: condicional.'], ['Elle a demandé si étions-nous prêts.', 'Elle a demandé si nous étions prêts.', 'Sem inversão no discurso indireto.'], ['Il a suggéré que de changer.', 'Il a suggéré de changer.', 'Sem «que».'], ['Il a insisté de la qualité.', 'Il a insisté sur la qualité.', '«Insister sur».']],
      }),
      dialogo(8, 'Après la réunion / Depois da reunião', 'Pierre e Inès relatam a reunião.', [
        ['Inès', 'Alors, qu\'est-ce qui a été décidé ?', 'Então, o que foi decidido?'], ['Pierre', 'Le directeur a annoncé que le projet serait reporté d\'un mois.', 'O diretor anunciou que o projeto seria adiado por um mês.'], ['Inès', 'Et le budget ? A-t-il confirmé qu\'il restait le même ?', 'E o orçamento? Ele confirmou que continuava o mesmo?'], ['Pierre', 'Oui, à condition que nous respections le nouvel échéancier.', 'Sim, desde que respeitemos o novo cronograma.'], ['Inès', 'Et Marie, qu\'a-t-elle dit ?', 'E a Marie, o que ela disse?'], ['Pierre', 'Elle a insisté sur la qualité. Elle a demandé si nous pouvions embaucher quelqu\'un.', 'Ela insistiu na qualidade. Perguntou se podíamos contratar alguém.'],
      ]),
      producao(5, 'Relate em voz alta uma conversa recente com três verbos de relato diferentes.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 59', [
      revisao(5, 'Resuma em voz alta uma reunião ou aula de que você participou em três frases.'),
      exercicios(20, [
        ouvir('Je propose que nous commencions', ['Je propose que nous commencions', 'Je propose que nous commençons', 'Je propose nous commencer'], 'Je propose que nous commencions', 'Subjuntivo.'), ouvir('Nous signons, sauf si le prix augmente', ['Nous signons, sauf si le prix augmente', 'Nous signons, sauf si le prix augmentait', 'Nous signons, sauf que le prix augmente'], 'Nous signons, sauf si le prix augmente', '«Sauf si» + presente.'), ouvir('Il a dit qu\'il viendrait', ['Il a dit qu\'il viendrait', 'Il a dit qu\'il viendra', 'Il a dit qu\'il vient'], 'Il a dit qu\'il viendrait', 'Recuo de tempo.'),
        ditado('Puis-je intervenir', 'Escreva: Puis-je intervenir.'), ditado('Il a été décidé que nous commencerions lundi', 'Escreva: Il a été décidé que nous commencerions lundi.'), ditado('Marché conclu', 'Escreva: Marché conclu.'),
        mc('«Desde que» (condição):', ['à condition que', 'bien que', 'parce que'], 'à condition que', 'Subjuntivo.'), mc('Exceção com indicativo:', ['sauf si', 'à moins que', 'pourvu que'], 'sauf si', 'Indicativo.'), mc('Verbo preciso para «dar a notícia»:', ['annoncer', 'dire', 'parler'], 'annoncer', 'Relato.'), mc('Objeção educada:', ['Je comprends, mais je crains que ce ne soit pas réaliste.', 'Non, ce n\'est pas possible.', 'Vous avez tort.'], 'Je comprends, mais je crains que ce ne soit pas réaliste.', 'Reconhece e objeta.'),
        lacuna('J\'accepte à condition que vous ___ avant. (payer)', ['payiez', 'payez', 'payer'], 'payiez', 'Subjuntivo.'), lacuna('Elle a demandé ___ nous étions prêts.', ['si', 'que', 'qui'], 'si', 'Pergunta indireta.'), lacuna('Il a insisté ___ la qualité.', ['sur', 'de', 'à'], 'sur', '«Insister sur».'), lacuna('Au cas ___ il refuserait, appelez-moi.', ['où', 'que', 'si'], 'où', '«Au cas où».'),
        ordem('Ordene: «Je propose que nous commencions par le budget.»', ['Je', 'propose', 'que', 'nous', 'commencions', 'par', 'le', 'budget'], 'Je propose que nous commencions par le budget.', 'Proposta.'), ordem('Ordene: «Il a annoncé que le projet était reporté.»', ['Il', 'a', 'annoncé', 'que', 'le', 'projet', 'était', 'reporté'], 'Il a annoncé que le projet était reporté.', 'Relato.'),
        livre('Escreva em francês: Proponho começarmos pelo orçamento. Aceito, desde que vocês paguem antes. Ele anunciou que o projeto seria adiado.', 'Je propose que nous commencions par le budget. J\'accepte à condition que vous payiez avant. Il a annoncé que le projet serait reporté.'),
        lacuna('Nous signons, ___ si le prix augmente. (a não ser)', ['sans', 'pour', 'sauf'], 'sauf', '«Sauf si» + indicativo.'),
        lacuna('Je regrette, mais nous ne ___ pas accepter. (podemos)', ['pouvons', 'pouvez', 'peuvent'], 'pouvons', 'Com «nous», «pouvoir» faz «pouvons».'),
        lacuna('Il a ___ de changer la date. (sugeriu)', ['suggérer', 'suggéré', 'suggère'], 'suggéré', 'Passé composé: «a» + particípio.'),
        lacuna('___-je intervenir ? (Posso)', ['Peux', 'Pouvoir', 'Puis'], 'Puis', 'Na inversão, usa-se «puis-je».'),
        lacuna('Nous sommes ___ à un accord. (chegamos)', ['parvenus', 'parvenu', 'parvenue'], 'parvenus', '«Parvenir» usa «être» e concorda com «nous».'),
        mc('Como encerrar a reunião com educação?', ['Taisez-vous, c\'est fini.', 'Si personne n\'a d\'autres remarques, je propose de clore la réunion.', 'On arrête, salut.'], 'Si personne n\'a d\'autres remarques, je propose de clore la réunion.', 'Registro formal e cortês.'),
        mc('O que significa «trancher»?', ['adiar', 'objetar', 'decidir'], 'decidir', '«Trancher» = decidir.'),
        mc('Qual é a contraproposta educada?', ['Nous pourrions vous proposer un rabais.', 'Nous vous proposons un rabais ou rien.', 'Proposez un rabais.'], 'Nous pourrions vous proposer un rabais.', 'O condicional suaviza a proposta.'),
        mc('Qual conjunção pede subjuntivo?', ['sauf si', 'à condition que', 'parce que'], 'à condition que', '«À condition que» + subjuntivo.'),
        ordem('Ordene: «Ele insistiu no orçamento.»', ['Il', 'a', 'insisté', 'sur', 'le', 'budget'], 'Il a insisté sur le budget.', '«Insister sur».'),
        ordem('Ordene: «Ela confirmou que a reunião aconteceria na segunda.»', ['Elle', 'a', 'confirmé', 'que', 'la', 'réunion', 'aurait', 'lieu', 'lundi'], 'Elle a confirmé que la réunion aurait lieu lundi.', 'Futuro no passado: condicional.'),
        livre('Escreva em francês: Posso intervir? Concordo com Marie neste ponto.', 'Puis-je intervenir ? Je suis d\'accord avec Marie sur ce point.'),
        livre('Escreva em francês: Ele perguntou se estávamos prontos. Ela confirmou que viria.', 'Il a demandé si nous étions prêts. Elle a confirmé qu\'elle viendrait.'),
      ]),
      producao(5, 'Fale 1 minuto: você lidera uma reunião curta, propõe uma decisão e resume o que ficou combinado.'),
    ]),
  ],
});
