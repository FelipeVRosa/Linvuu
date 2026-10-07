import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 58, titulo: 'Viagem avançada: imprevistos, reclamações e voz passiva', nivel: 'b1',
  objetivo: 'Resolver imprevistos em viagem (voo cancelado, bagagem perdida, quarto com problema), fazer uma reclamação educada e usar a voz passiva para falar de fatos.',
  nota: 'Você se vira quando a viagem não sai como planejado. Próxima aula: reuniões, negociação e relato.',
  sessoes: [
    sessao('S1', 'Reclamar com educação', [
      revisao(5, 'Recomende em voz alta um livro ou filme, dizendo o que gostou e o que não gostou.'),
      palavras(8, [
        ['un problème', 'ẽ problém', 'um problema', ''], ['se plaindre', 'sö plẽdr', 'reclamar', ''], ['un remboursement', 'ẽ rãbursömã', 'um reembolso', ''], ['une réclamation', 'ün réklamasió', 'uma reclamação', ''], ['annulé', 'anülé', 'cancelado', ''], ['un retard', 'ẽ rötar', 'um atraso', ''], ['les bagages', 'lé bagaj', 'a bagagem', ''], ['une correspondance', 'ün korespõdãs', 'uma conexão', ''],
      ]),
      gramatica(12, 'Je voudrais signaler un problème', 'PASSO 1: comece calmo e educado: «Excusez-moi, je voudrais signaler un problème.» PASSO 2: descreva o fato sem acusar: «La climatisation ne marche pas.» «Mes bagages ne sont pas arrivés.» PASSO 3: diga o que você quer, com o condicional: «Je voudrais être remboursé.» «Pourriez-vous changer ma chambre ?» PASSO 4: peça uma solução: «Que pouvez-vous faire pour moi ?» PASSO 5: fórmulas formais: «Je vous demande de bien vouloir…», «Je souhaiterais obtenir…» PASSO 6: se for preciso, insista sem agressividade: «Je comprends, mais ce n\'est pas acceptable.»', {
        tag: 'Reclamação',
        comparacao: 'em português «eu quero meu dinheiro de volta» soa firme, mas é aceitável. Em francês, o mesmo pedido com «je veux» soa agressivo; «je voudrais être remboursé» ou «pourriez-vous me rembourser» funcionam melhor e mais rápido.',
        tabela: [
          { situacao: 'abrir', formal: 'Je voudrais signaler un problème.', informal: 'Il y a un problème.' }, { situacao: 'descrever', formal: 'La climatisation ne fonctionne pas.', informal: 'La clim marche pas.' }, { situacao: 'pedir', formal: 'Pourriez-vous changer ma chambre ?', informal: 'Tu peux changer ma chambre ?' }, { situacao: 'reembolso', formal: 'Je souhaiterais être remboursé.', informal: 'Je veux mon argent.' }, { situacao: 'solução', formal: 'Que pouvez-vous faire pour moi ?', informal: 'Tu fais quoi ?' }, { situacao: 'firmeza', formal: 'Ce n\'est pas acceptable.', informal: 'C\'est nul.' },
        ],
        erros: [['Je veux un remboursement.', 'Je voudrais être remboursé.', 'Pedido educado: condicional.'], ['Mes bagages sont perdus.', 'Mes bagages ne sont pas arrivés.', 'Fato, sem culpar.'], ['Vous pouvez changer ma chambre ?', 'Pourriez-vous changer ma chambre ?', 'Mais formal.'], ['Je me plains de le service.', 'Je me plains du service.', 'de + le = du.']],
      }),
      producao(5, 'Faça em voz alta uma reclamação educada: o quarto do hotel está sujo e você quer trocar.'),
    ]),
    sessao('S2', 'A voz passiva', [
      revisao(4, 'Diga duas frases pedindo algo a um hotel com «pourriez-vous».'),
      palavras(6, [
        ['être annulé', 'étr anülé', 'ser cancelado', ''], ['être retardé', 'étr rötardé', 'ser atrasado', ''], ['être perdu', 'étr pérdü', 'ser perdido', ''], ['être remboursé', 'étr rãbursé', 'ser reembolsado', ''], ['par', 'par', 'por (agente)', ''], ['de', 'dö', 'por (sentimento)', ''],
      ]),
      gramatica(12, 'Le vol a été annulé', 'PASSO 1: voz passiva = «être» + particípio passado, que concorda com o sujeito: «Le vol est annulé.» «Les bagages sont perdus.» PASSO 2: o tempo vem do verbo «être»: «Le vol a été annulé» (passé composé), «Le vol sera annulé» (futuro), «Le vol était annulé» (imparfait). PASSO 3: o agente da ação vem com «par»: «Le vol a été annulé par la compagnie.» PASSO 4: com sentimento ou estado, «de»: «Il est aimé de tous.» PASSO 5: o francês prefere «on» e evita a passiva na fala: «On a annulé le vol.» PASSO 6: «se faire» + infinitivo é passiva informal: «Je me suis fait voler mon sac.»', {
        tag: 'Passiva',
        comparacao: 'em português «o voo foi cancelado» é igual. A diferença é o particípio, que concorda («les bagages sont perdus») e a preferência do francês por «on» na fala: «on a perdu mes bagages». «Je me suis fait voler mon sac» é muito frequente e não tem equivalente direto.',
        tabela: [
          { modo: 'presente', exemplo: 'Le vol est annulé.' }, { modo: 'passé composé', exemplo: 'Le vol a été annulé.' }, { modo: 'imparfait', exemplo: 'Le vol était annulé.' }, { modo: 'futuro', exemplo: 'Le vol sera annulé.' }, { modo: 'com agente', exemplo: 'Le vol a été annulé par la compagnie.' }, { modo: 'informal', exemplo: 'Je me suis fait voler mon sac.' },
        ],
        erros: [['Les bagages sont perdu.', 'Les bagages sont perdus.', 'Concordância.'], ['Le vol a été annulé de la compagnie.', 'Le vol a été annulé par la compagnie.', 'Agente: «par».'], ['Le vol a annulé.', 'Le vol a été annulé.', 'Falta «été».'], ['J\'ai fait voler mon sac.', 'Je me suis fait voler mon sac.', 'Estrutura «se faire».']],
      }),
      producao(8, 'Descreva em voz alta uma viagem em que tudo deu errado, usando pelo menos quatro frases na voz passiva ou com «on».'),
    ]),
    sessao('S3', 'No aeroporto', [
      revisao(4, 'Transforme em passiva: «La compagnie a annulé le vol.»'),
      palavras(5, [
        ['un vol', 'ẽ vol', 'um voo', ''], ['l\'embarquement', 'lãbarkömã', 'o embarque', ''], ['une carte d\'embarquement', 'ün kart dãbarkömã', 'um cartão de embarque', ''], ['le comptoir', 'lö kõtuar', 'o balcão', ''], ['une déclaration de perte', 'ün déklarasió dö pert', 'uma declaração de perda', ''],
      ]),
      gramatica(8, 'Falar com a companhia', 'PASSO 1: peça informação: «Pouvez-vous me dire pourquoi mon vol a été retardé ?» PASSO 2: peça alternativas: «Y a-t-il un autre vol aujourd\'hui ?» PASSO 3: diga os dados: «Mon numéro de vol est AF 123.» PASSO 4: declare a perda: «Je voudrais faire une déclaration de perte.» PASSO 5: guarde o protocolo: «Pouvez-vous me donner un justificatif ?»', {
        tag: 'Aeroporto',
        comparacao: 'em português «poderia me dizer…?» é cortês; em francês, «pouvez-vous me dire» ou «pourriez-vous me dire» funcionam. Atenção a «un justificatif», palavra essencial para pedir reembolso depois.',
        tabela: [
          { etapa: '1', pergunta: 'Pourquoi mon vol est-il retardé ?', resposta: 'À cause d\'un problème technique.' }, { etapa: '2', pergunta: 'Y a-t-il un autre vol ?', resposta: 'Oui, à 18 h.' }, { etapa: '3', pergunta: 'Où sont mes bagages ?', resposta: 'Ils ont été envoyés à Lyon.' }, { etapa: '4', pergunta: 'Je voudrais faire une déclaration de perte.', resposta: 'Remplissez ce formulaire.' }, { etapa: '5', pergunta: 'Pouvez-vous me donner un justificatif ?', resposta: 'Bien sûr.' }, { etapa: '6', pergunta: 'Serai-je remboursé ?', resposta: 'Oui, sous 30 jours.' },
        ],
        erros: [['Je veux faire une déclaration.', 'Je voudrais faire une déclaration de perte.', 'Educado e específico.'], ['Mon vol est retard.', 'Mon vol est retardé.', 'Particípio.'], ['Il y a un autre vol ?', 'Y a-t-il un autre vol ?', 'Forma formal.'], ['Pouvez vous me donner.', 'Pouvez-vous me donner.', 'Hífen na inversão.']],
      }),
      dialogo(8, 'À l\'aéroport / No aeroporto', 'Marie fala com a atendente da companhia aérea.', [
        ['Marie', 'Bonjour, mon vol pour Lyon a été annulé. Que puis-je faire ?', 'Bom dia, meu voo para Lyon foi cancelado. O que posso fazer?'], ['La réceptionniste', 'Je suis désolée. Il y a un autre vol à dix-huit heures.', 'Sinto muito. Há outro voo às dezoito horas.'], ['Marie', 'Très bien. Mais mes bagages ont été enregistrés pour le premier vol.', 'Muito bem. Mas minha bagagem foi despachada para o primeiro voo.'], ['La réceptionniste', 'Ne vous inquiétez pas, ils seront transférés automatiquement.', 'Não se preocupe, ela será transferida automaticamente.'], ['Marie', 'Pourriez-vous me donner un justificatif pour le remboursement du taxi ?', 'Poderia me dar um comprovante para o reembolso do táxi?'], ['La réceptionniste', 'Bien sûr, voici votre justificatif.', 'Claro, aqui está o seu comprovante.'],
      ]),
      producao(5, 'Responda em voz alta: «Que s\'est-il passé ?» contando um imprevisto de viagem em quatro frases.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 58', [
      revisao(5, 'Conte em voz alta um problema que você teve em viagem e como foi resolvido.'),
      exercicios(20, [
        ouvir('Le vol a été annulé', ['Le vol a été annulé', 'Le vol a annulé', 'Le vol est annulé par'], 'Le vol a été annulé', 'Passiva no passado.'), ouvir('Je voudrais être remboursé', ['Je voudrais être remboursé', 'Je veux être remboursé', 'Je voudrais rembourser'], 'Je voudrais être remboursé', 'Condicional.'), ouvir('Je me suis fait voler mon sac', ['Je me suis fait voler mon sac', 'J\'ai fait voler mon sac', 'Je suis volé mon sac'], 'Je me suis fait voler mon sac', '«Se faire».'),
        ditado('Pourriez-vous changer ma chambre', 'Escreva: Pourriez-vous changer ma chambre.'), ditado('Mes bagages ne sont pas arrivés', 'Escreva: Mes bagages ne sont pas arrivés.'), ditado('Je souhaiterais être remboursé', 'Escreva: Je souhaiterais être remboursé.'),
        mc('Passiva do presente:', ['Le vol est annulé.', 'Le vol a annulé.', 'Le vol annule.'], 'Le vol est annulé.', 'être + particípio.'), mc('Agente da passiva:', ['par', 'pour', 'avec'], 'par', 'Agente.'), mc('Pedido educado:', ['Pourriez-vous m\'aider ?', 'Vous devez m\'aider.', 'Aidez-moi maintenant.'], 'Pourriez-vous m\'aider ?', 'Condicional.'), mc('«Comprovante» em francês:', ['un justificatif', 'une réclamation', 'un retard'], 'un justificatif', 'Reembolso.'),
        lacuna('Les bagages sont ___ . (perdre)', ['perdus', 'perdu', 'perdre'], 'perdus', 'Concordância.'), lacuna('Le vol a été annulé ___ la compagnie.', ['par', 'de', 'à'], 'par', 'Agente.'), lacuna('Je me plains ___ service.', ['du', 'de le', 'au'], 'du', 'de + le.'), lacuna('___ -vous me donner un justificatif ?', ['Pouvez', 'Peuvent', 'Pouvons'], 'Pouvez', 'Vous.'),
        ordem('Ordene: «Le vol a été annulé par la compagnie.»', ['Le', 'vol', 'a', 'été', 'annulé', 'par', 'la', 'compagnie'], 'Le vol a été annulé par la compagnie.', 'Passiva.'), ordem('Ordene: «Je voudrais signaler un problème.»', ['Je', 'voudrais', 'signaler', 'un', 'problème'], 'Je voudrais signaler un problème.', 'Abertura.'),
        livre('Escreva em francês: Meu voo foi cancelado. Gostaria de ser reembolsado. Poderia me dar um comprovante?', 'Mon vol a été annulé. Je voudrais être remboursé. Pourriez-vous me donner un justificatif ?'),
      ]),
      producao(5, 'Faça 1 minuto de simulação: você está no balcão da companhia aérea e seu voo foi cancelado.'),
    ]),
  ],
});
