import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 49, titulo: 'Carta e e-mail formais', nivel: 'b1',
  objetivo: 'Escrever e-mails e cartas formais em francês: saudação, pedido, reclamação, agradecimento e despedida no registro correto.',
  nota: 'Você já escreve com o registro que o trabalho e a administração francesa esperam. Próxima aula: emprego, currículo e entrevista.',
  sessoes: [
    sessao('S1', 'Abrir e fechar', [
      revisao(5, 'Dê a sua opinião sobre um tema, com um argumento e uma concessão.'),
      palavras(8, [
        ['Madame, Monsieur', 'madam, mösiö', 'Prezados senhores', ''], ['Cher Monsieur', 'chér mösiö', 'Caro senhor', ''], ['je vous écris pour', 'jö vu zekri pur', 'escrevo-lhe para', ''], ['suite à', 'süit a', 'em seguida a', ''], ['veuillez', 'vöiê', 'queira', ''], ['cordialement', 'kordialmã', 'cordialmente', ''], ['sincères salutations', 'sẽsér salütasiõ', 'atenciosamente', ''], ['pièce jointe', 'piés jõnt', 'anexo', ''],
      ]),
      gramatica(12, 'Je me permets de vous écrire', 'PASSO 1: abertura sem nome: «Madame, Monsieur,». Com nome: «Madame Dupont,» ou «Cher Monsieur Martin,». Não use «Bonjour» em carta muito formal. PASSO 2: motivo: «Je vous écris pour…», «Je me permets de vous contacter au sujet de…», «Suite à notre conversation téléphonique…» PASSO 3: pedido: «Pourriez-vous m\'envoyer…», «Je voudrais savoir si…», «Auriez-vous l\'amabilité de…» (condicional = educado). PASSO 4: anexo: «Veuillez trouver ci-joint…», «Vous trouverez en pièce jointe…» PASSO 5: espera de resposta: «Dans l\'attente de votre réponse», «Je reste à votre disposition». PASSO 6: fechamento formal: «Veuillez agréer, Madame, Monsieur, l\'expression de mes salutations distinguées.» PASSO 7: fechamento menos rígido: «Cordialement», «Bien cordialement», «Sincères salutations». PASSO 8: use «vous» sempre e evite contrações informais («j\'sais pas»).', {
        tag: 'Registro formal',
        comparacao: 'em português, o e-mail formal termina com «atenciosamente». Em francês, a fórmula «Veuillez agréer…» é tradicional em cartas; em e-mails de trabalho do dia a dia, «Cordialement» é o padrão. Nunca use «Bisous» ou «À+» em contexto formal.',
        tabela: [
          { situacao: 'abrir (sem nome)', formal: 'Madame, Monsieur,', informal: 'Salut,' }, { situacao: 'motivo', formal: 'Je vous écris pour…', informal: 'Je t\'écris pour…' }, { situacao: 'pedido', formal: 'Pourriez-vous m\'envoyer…', informal: 'Tu peux m\'envoyer…' }, { situacao: 'anexo', formal: 'Veuillez trouver ci-joint…', informal: 'Voilà le fichier.' }, { situacao: 'esperar resposta', formal: 'Dans l\'attente de votre réponse', informal: 'Réponds-moi vite.' }, { situacao: 'fechar', formal: 'Cordialement', informal: 'Bises' },
        ],
        erros: [['Salut Madame,', 'Madame,', 'Formal: sem «salut».'], ['Tu peux m\'envoyer le document ?', 'Pourriez-vous m\'envoyer le document ?', 'Formal: condicional e «vous».'], ['Bisous, Pierre', 'Cordialement, Pierre', 'Formal: «cordialement».'], ['Je vous écris à propos de le dossier.', 'Je vous écris à propos du dossier.', '«À propos du».']],
      }),
      producao(5, 'Diga em voz alta como você abriria e fecharia um e-mail para uma empresa.'),
    ]),
    sessao('S2', 'Pedir informação e reclamar', [
      revisao(4, 'Reescreva em tom formal: «Tu peux m\'envoyer le prix ?»'),
      palavras(6, [
        ['un renseignement', 'ẽ rãsenhömã', 'uma informação', ''], ['une réclamation', 'ün reklamasiõ', 'uma reclamação', ''], ['un remboursement', 'ẽ rãbursömã', 'um reembolso', ''], ['une commande', 'ün komãd', 'um pedido', ''], ['en retard', 'ã rötar', 'atrasado', ''], ['défectueux', 'defektüö', 'defeituoso', ''],
      ]),
      gramatica(12, 'Je vous écris pour réclamer', 'PASSO 1: pedir informação: «Je voudrais obtenir des renseignements sur…», «Pourriez-vous m\'indiquer…», «Je souhaiterais savoir si…» PASSO 2: descrever o problema com passé composé: «J\'ai commandé un produit le 5 mars, mais je ne l\'ai pas encore reçu.» PASSO 3: descrever o estado atual com presente: «Le produit est défectueux.» PASSO 4: exigir com educação: «Je vous demande de bien vouloir me rembourser.» PASSO 5: prazo: «Dans un délai de huit jours», «au plus tard le…» PASSO 6: consequência: «Sans réponse de votre part, je devrai saisir…» (formal). PASSO 7: agradecer antecipadamente: «Je vous remercie par avance.» PASSO 8: tom: firme, sem insultos, com fatos e datas.', {
        tag: 'Registro formal',
        comparacao: 'a reclamação francesa é feita com fatos, datas e pedido claro. Evite adjetivos emocionais. Em português, é comum começar com «infelizmente…»; em francês, vá direto ao fato: «J\'ai commandé… mais…»',
        tabela: [
          { situacao: 'pedir informação', formal: 'Je souhaiterais savoir si…', informal: 'Je veux savoir si…' }, { situacao: 'descrever o fato', formal: 'J\'ai commandé le 5 mars.', informal: 'J\'ai commandé hier.' }, { situacao: 'descrever o problema', formal: 'Le produit est défectueux.', informal: 'Ça marche pas.' }, { situacao: 'pedir solução', formal: 'Je vous demande de me rembourser.', informal: 'Rembourse-moi.' }, { situacao: 'prazo', formal: 'Dans un délai de huit jours', informal: 'Vite.' }, { situacao: 'agradecer', formal: 'Je vous remercie par avance.', informal: 'Merci d\'avance.' },
        ],
        erros: [['Je veux un remboursement tout de suite !', 'Je vous demande de bien vouloir me rembourser.', 'Formal: tom educado.'], ['Je n\'ai pas reçu le produit. Je suis très en colère.', 'Je n\'ai pas encore reçu le produit commandé le 5 mars.', 'Fatos, não emoções.'], ['Je souhaiterais de savoir si…', 'Je souhaiterais savoir si…', 'Sem «de».'], ['Je vous remercie d\'avance de votre réponse.', 'Je vous remercie par avance.', 'Fórmula fixa.']],
      }),
      producao(8, 'Faça em voz alta uma reclamação sobre um pedido atrasado, com fato, pedido e prazo.'),
    ]),
    sessao('S3', 'Ler e entender um e-mail', [
      revisao(4, 'Peça em tom formal uma informação sobre um curso.'),
      palavras(5, [
        ['un rendez-vous', 'ẽ rãdevu', 'um compromisso', ''], ['confirmer', 'kõfirmê', 'confirmar', ''], ['annuler', 'anülê', 'cancelar', ''], ['reporter', 'rörportê', 'adiar', ''], ['disponible', 'disponibl', 'disponível', ''],
      ]),
      gramatica(8, 'Combinar, confirmar e adiar', 'PASSO 1: propor: «Seriez-vous disponible mardi à 10 h ?» PASSO 2: confirmar: «Je vous confirme notre rendez-vous.» PASSO 3: adiar: «Je suis dans l\'obligation de reporter…» PASSO 4: cancelar: «Je me vois contraint d\'annuler…» PASSO 5: pedir desculpas: «Je vous prie de m\'excuser pour la gêne occasionnée.»', {
        tag: 'Registro formal',
        comparacao: 'o condicional é o seu melhor amigo nos e-mails franceses: «seriez-vous», «pourriez-vous», «je souhaiterais». Ele suaviza todos os pedidos e é esperado em contextos profissionais.',
        tabela: [
          { situacao: 'propor', formal: 'Seriez-vous disponible mardi ?', informal: 'T\'es libre mardi ?' }, { situacao: 'confirmar', formal: 'Je vous confirme notre rendez-vous.', informal: 'C\'est bon pour mardi.' }, { situacao: 'adiar', formal: 'Je dois reporter notre rendez-vous.', informal: 'On décale ?' }, { situacao: 'cancelar', formal: 'Je me vois contraint d\'annuler.', informal: 'J\'annule.' }, { situacao: 'desculpar-se', formal: 'Je vous prie de m\'excuser.', informal: 'Désolé.' }, { situacao: 'pedir resposta', formal: 'Pourriez-vous me confirmer ?', informal: 'Dis-moi si ça va.' },
        ],
        erros: [['Êtes-vous disponible mardi ?', 'Seriez-vous disponible mardi ?', 'Condicional: mais educado.'], ['Je vous prie d\'excuser moi.', 'Je vous prie de m\'excuser.', 'Pronome antes do verbo.'], ['Je reporte le rendez-vous à demain, désolé.', 'Je dois reporter notre rendez-vous. Je vous prie de m\'excuser.', 'Tom formal.'], ['Merci pour votre compréhension, salut.', 'Je vous remercie pour votre compréhension. Cordialement.', 'Fechamento formal.']],
      }),
      texto(8, 'Un e-mail à lire', 'Madame, Monsieur, Je vous écris au sujet de ma commande n° 4521, passée le 5 mars. À ce jour, je n\'ai pas reçu mon colis, alors que la livraison était prévue le 12 mars. Pourriez-vous m\'indiquer où il se trouve ? Si le colis est perdu, je vous demande de bien vouloir me rembourser dans un délai de huit jours. Je vous remercie par avance. Cordialement, Julien Moreau.', 'Prezados senhores, escrevo a respeito do meu pedido nº 4521, feito em 5 de março. Até hoje não recebi minha encomenda, embora a entrega estivesse prevista para 12 de março. Poderiam me indicar onde ela está? Se a encomenda estiver perdida, peço que me reembolsem em até oito dias. Agradeço desde já. Atenciosamente, Julien Moreau.', [['Quando Julien fez o pedido?', 'Em 5 de março.'], ['O que ele pede, se o pacote estiver perdido?', 'Um reembolso em oito dias.'], ['Qual é o tom do e-mail?', 'Formal e educado.']]),
      producao(5, 'Responda em voz alta a esse e-mail, como se fosse a empresa, pedindo desculpas.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 49', [
      revisao(5, 'Escreva em voz alta, mentalmente, um e-mail curto de pedido formal.'),
      exercicios(20, [
        ouvir('Madame, Monsieur', ['Madame, Monsieur', 'Salut, Madame', 'Bonjour, Monsieur'], 'Madame, Monsieur', 'Abertura formal.'), ouvir('Je vous remercie par avance', ['Je vous remercie par avance', 'Je te remercie d\'avance', 'Je vous remercie beaucoup'], 'Je vous remercie par avance', 'Formal.'), ouvir('Pourriez-vous m\'envoyer le document', ['Pourriez-vous m\'envoyer le document', 'Tu peux m\'envoyer le document', 'Pouvez-vous envoyer le document'], 'Pourriez-vous m\'envoyer le document', 'Condicional.'),
        ditado('Je vous écris au sujet de ma commande', 'Escreva: Je vous écris au sujet de ma commande.'), ditado('Je souhaiterais savoir si le produit est disponible', 'Escreva: Je souhaiterais savoir si le produit est disponible.'), ditado('Dans l\'attente de votre réponse, cordialement', 'Escreva: Dans l\'attente de votre réponse, cordialement.'),
        mc('Fechamento mais usado em e-mails de trabalho:', ['Cordialement', 'Bisous', 'À+'], 'Cordialement', 'Formal.'), mc('Abertura sem nome:', ['Madame, Monsieur,', 'Salut,', 'Coucou,'], 'Madame, Monsieur,', 'Formal.'), mc('Qual pedido é mais educado?', ['Pourriez-vous m\'envoyer le prix ?', 'Tu peux m\'envoyer le prix ?', 'Envoie-moi le prix.'], 'Pourriez-vous m\'envoyer le prix ?', 'Condicional + vous.'), mc('Como dizer «anexo»?', ['pièce jointe', 'pièce perdue', 'pièce neuve'], 'pièce jointe', 'Anexo.'),
        lacuna('Je ___ écris au sujet de ma commande.', ['vous', 'te', 'lui'], 'vous', 'Formal.'), lacuna('Je vous demande de ___ rembourser. (queira)', ['bien vouloir me', 'veuillez me', 'voulez me'], 'bien vouloir me', 'Fórmula formal.'), lacuna('Je vous ___ de m\'excuser. (peço)', ['prie', 'demande', 'dis'], 'prie', 'Fórmula.'), lacuna('Dans un ___ de huit jours.', ['délai', 'retard', 'temps'], 'délai', 'Prazo.'),
        ordem('Ordene: «Pourriez-vous me confirmer le rendez-vous ?»', ['Pourriez-vous', 'me', 'confirmer', 'le', 'rendez-vous'], 'Pourriez-vous me confirmer le rendez-vous', 'Pedido formal.'), ordem('Ordene: «Je vous remercie par avance.»', ['Je', 'vous', 'remercie', 'par', 'avance'], 'Je vous remercie par avance.', 'Fórmula.'),
        livre('Escreva em francês: Prezados senhores, escrevo a respeito do meu pedido. Poderiam me enviar a fatura? Agradeço desde já. Atenciosamente.', 'Madame, Monsieur, Je vous écris au sujet de ma commande. Pourriez-vous m\'envoyer la facture ? Je vous remercie par avance. Cordialement.'),
        lacuna('Je me ___ de vous contacter au sujet de ma commande. (permito)', ['permet', 'permets', 'a permis'], 'permets', '«Se permettre de» com «je»: «je me permets».'),
        lacuna('Suite ___ notre conversation, je confirme. (a)', ['de', 'avec', 'à'], 'à', '«Suite à» = em seguida a.'),
        lacuna('Veuillez trouver ___ le document. (em anexo)', ['ci-joint', 'ci-contre', 'ci-dessus'], 'ci-joint', '«Ci-joint» = em anexo.'),
        lacuna('Seriez-vous ___ mardi ? (disponível)', ['disponibles', 'disponible', 'disposé'], 'disponible', '«Disponible» concorda com «vous» singular.'),
        lacuna('Je reste à votre ___ . (disposição)', ['position', 'proposition', 'disposition'], 'disposition', '«À votre disposition» = à sua disposição.'),
        mc('Qual despedida é a mais formal?', ['Veuillez agréer, Madame, Monsieur, l\'expression de mes salutations distinguées.', 'Cordialement', 'À plus'], 'Veuillez agréer, Madame, Monsieur, l\'expression de mes salutations distinguées.', 'É o fecho tradicional das cartas formais.'),
        mc('Qual abertura é correta numa carta formal sem nome?', ['Salut tout le monde,', 'Madame, Monsieur,', 'Coucou,'], 'Madame, Monsieur,', 'Registro formal.'),
        mc('Como pedir um reembolso com educação?', ['Rendez-moi mon argent.', 'Je veux mon argent maintenant.', 'Je vous demande de bien vouloir me rembourser.'], 'Je vous demande de bien vouloir me rembourser.', 'Registro formal e educado.'),
        mc('Qual verbo significa «adiar»?', ['reporter', 'annuler', 'confirmer'], 'reporter', '«Reporter» = adiar.'),
        ordem('Ordene: «Peço que me desculpe pelo incômodo.»', ['Je', 'vous', 'prie', 'de', 'm\'excuser', 'pour', 'la', 'gêne'], 'Je vous prie de m\'excuser pour la gêne.', '«Prier de» + infinitivo.'),
        ordem('Ordene: «Confirmo nosso compromisso.»', ['Je', 'vous', 'confirme', 'notre', 'rendez-vous'], 'Je vous confirme notre rendez-vous.', 'Verbo + pronome + objeto.'),
        livre('Escreva em francês: Escrevo a respeito do meu pedido. Poderiam me indicar onde está o pacote?', 'Je vous écris au sujet de ma commande. Pourriez-vous m\'indiquer où se trouve le colis ?'),
        livre('Escreva em francês: O produto está com defeito. Peço que me reembolsem em um prazo de oito dias.', 'Le produit est défectueux. Je vous demande de bien vouloir me rembourser dans un délai de huit jours.'),
      ]),
      producao(5, 'Fale em voz alta um pedido formal de informação sobre um curso.'),
    ]),
  ],
});
