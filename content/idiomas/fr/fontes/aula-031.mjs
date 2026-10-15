import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 31, titulo: 'Banco, correio e serviços', nivel: 'a2',
  objetivo: 'Resolver tarefas práticas em francês: abrir uma conta, trocar dinheiro, enviar uma encomenda, pedir informações e reclamar com educação.',
  nota: 'Você resolve a vida prática em um país francófono. Próxima aula: cultura, lazer e opinião.',
  sessoes: [
    sessao('S1', 'No banco', [
      revisao(5, 'Descreva a sua casa e o seu bairro em voz alta.'),
      palavras(8, [
        ['le compte', 'lö kõt', 'a conta', ''], ['la carte bancaire', 'la kart bãkér', 'o cartão bancário', ''], ['retirer', 'retirê', 'sacar', ''], ['déposer', 'depozé', 'depositar', ''], ['le virement', 'lö virömã', 'a transferência', ''], ['le distributeur', 'lö distribütör', 'o caixa eletrônico', ''], ['le solde', 'lö sold', 'o saldo', ''], ['les frais', 'lê fré', 'as taxas', ''],
      ]),
      gramatica(12, 'Parler à son banquier', 'PASSO 1: abrir uma conta: «Je voudrais ouvrir un compte, s\'il vous plaît.» «Quels documents faut-il ?» PASSO 2: operações: «Je voudrais retirer cinq cents euros.» «Je voudrais faire un virement.» «Je voudrais déposer un chèque.» PASSO 3: problemas: «Ma carte ne marche pas.» «J\'ai perdu ma carte bancaire.» «Il y a une erreur sur mon relevé.» PASSO 4: perguntar sobre custos: «Quels sont les frais ?» «Est-ce qu\'il y a des frais mensuels ?» PASSO 5: «pouvoir» + «me» no condicional: «Pourriez-vous me donner mon solde ?» PASSO 6: dados pessoais: «Mon numéro de compte est…», «Mon adresse est…», «Je suis étudiant / salarié.» PASSO 7: números grandes: «mille cinq cents euros», «deux mille», «dix mille». PASSO 8: pronomes: «Je la bloque.» «Je le dépose demain.»', {
        tag: 'Serviços',
        comparacao: 'em português dizemos «sacar dinheiro» e «fazer uma transferência». O francês usa «retirer de l\'argent» (sacar) e «faire un virement» (transferir), nunca «sacar» ou «transferir» com o mesmo sentido do banco. «Les frais» são as taxas, sempre no plural.',
        tabela: [
          { operacao: 'abrir conta', frase: 'Je voudrais ouvrir un compte.' }, { operacao: 'sacar', frase: 'Je voudrais retirer cinq cents euros.' }, { operacao: 'transferir', frase: 'Je voudrais faire un virement.' }, { operacao: 'cartão perdido', frase: 'J\'ai perdu ma carte bancaire.' }, { operacao: 'taxas', frase: 'Quels sont les frais ?' }, { operacao: 'saldo', frase: 'Pourriez-vous me donner mon solde ?' },
        ],
        erros: [['Je veux sacar de l\'argent.', 'Je voudrais retirer de l\'argent.', 'Vocabulário e educação.'], ['Je voudrais faire une transferência.', 'Je voudrais faire un virement.', '«Virement» é masculino.'], ['Quel sont les frais ?', 'Quels sont les frais ?', '«Quels» concorda com o plural.'], ['J\'ai perdu mon carte.', 'J\'ai perdu ma carte.', '«Carte» é feminino.']],
      }),
      producao(5, 'Faça em voz alta três operações no banco: abrir uma conta, sacar e transferir.'),
    ]),
    sessao('S2', 'No correio e em serviços', [
      revisao(4, 'Peça ao banco três coisas diferentes com educação.'),
      palavras(6, [
        ['le colis', 'lö koli', 'a encomenda', ''], ['la lettre', 'la létr', 'a carta', ''], ['le timbre', 'lö tẽbr', 'o selo', ''], ['envoyer', 'ãvuaié', 'enviar', ''], ['recommandé', 'rekomãdê', 'registrado', ''], ['la boîte aux lettres', 'la buat o létr', 'a caixa de correio', ''],
      ]),
      gramatica(12, 'Enviar uma carta ou uma encomenda', 'PASSO 1: pedir o serviço: «Je voudrais envoyer ce colis au Brésil.» «Combien coûte l\'envoi ?» PASSO 2: tipos de envio: «en recommandé» (registrado), «en urgence» (urgente), «en lettre normale» (carta simples). PASSO 3: prazo: «Il arrivera dans combien de jours ?» «Il arrivera dans une semaine.» PASSO 4: preencher: «Écrivez l\'adresse ici.» «Votre nom et votre signature, s\'il vous plaît.» PASSO 5: problemas: «Mon colis n\'est pas arrivé.» «Il est perdu ?» «Je voudrais faire une réclamation.» PASSO 6: pronomes: «Je l\'envoie.» «Je le lui envoie.» PASSO 7: «combien de temps» e «combien de jours»: «Ça prend combien de temps ?» PASSO 8: frases de cortesia: «Merci, bonne journée.» «Vous pouvez signer ici ?»', {
        tag: 'Serviços',
        comparacao: 'em português dizemos «enviar uma carta registrada». O francês diz «en recommandé» (com «en»). «Un colis» é a encomenda; «un paquet» é um pacote qualquer.',
        tabela: [
          { pedido: 'enviar encomenda', frase: 'Je voudrais envoyer ce colis au Brésil.' }, { pedido: 'carta registrada', frase: 'Je voudrais l\'envoyer en recommandé.' }, { pedido: 'prazo', frase: 'Il arrivera dans combien de jours ?' }, { pedido: 'reclamar', frase: 'Mon colis n\'est pas arrivé.' }, { pedido: 'assinar', frase: 'Vous pouvez signer ici ?' },
        ],
        erros: [['Je voudrais envoyer ce colis à le Brésil.', 'Je voudrais envoyer ce colis au Brésil.', 'à + le = au.'], ['Il arrivera en trois jours.', 'Il arrivera dans trois jours.', 'Prazo futuro: «dans».'], ['Mon colis n\'a pas arrivé.', 'Mon colis n\'est pas arrivé.', '«Arriver» usa «être».'], ['Je veux faire une réclamation.', 'Je voudrais faire une réclamation.', 'Pedido educado.']],
      }),
      producao(8, 'Faça em voz alta uma ida ao correio: envie uma carta registrada, uma encomenda e reclame de uma que não chegou.'),
    ]),
    sessao('S3', 'Informações e reclamações', [
      revisao(4, 'Peça um serviço no correio e uma informação no banco.'),
      palavras(5, [
        ['la réclamation', 'la reklamasiõ', 'a reclamação', ''], ['le remboursement', 'lö rãburssömã', 'o reembolso', ''], ['le reçu', 'lö resü', 'o recibo', ''], ['le formulaire', 'lö formülér', 'o formulário', ''], ['le guichet', 'lö xixé', 'o guichê', ''],
      ]),
      gramatica(8, 'Reclamar com educação', 'PASSO 1: começar com cortesia: «Excusez-moi, j\'ai un problème.» PASSO 2: descrever o fato: «J\'ai acheté ce produit hier et il ne marche pas.» PASSO 3: dizer o que quer: «Je voudrais un remboursement.» «Pourriez-vous l\'échanger ?» PASSO 4: pedir o responsável: «Pourrais-je parler au responsable ?» PASSO 5: pedir documentos: «Avez-vous votre reçu ?» «Il faut remplir ce formulaire.» PASSO 6: fechar bem: «Je vous remercie de votre aide.»', {
        tag: 'Serviços',
        comparacao: 'em português reclamamos com «eu quero falar com o gerente». O francês suaviza: «pourrais-je parler au responsable ?». Uma reclamação educada tem mais chance de ser atendida.',
        tabela: [
          { fase: 'abertura', frase: 'Excusez-moi, j\'ai un problème.' }, { fase: 'fato', frase: 'J\'ai acheté ce produit hier et il ne marche pas.' }, { fase: 'pedido', frase: 'Je voudrais un remboursement.' }, { fase: 'responsável', frase: 'Pourrais-je parler au responsable ?' }, { fase: 'fecho', frase: 'Je vous remercie de votre aide.' },
        ],
        erros: [['Je veux le gérant.', 'Pourrais-je parler au responsable ?', 'Pedido educado.'], ['J\'ai acheté hier ce produit qui ne marche pas depuis.', 'J\'ai acheté ce produit hier et il ne marche pas.', 'Frase clara, em duas partes.'], ['Je veux un remboursement tout de suite !', 'Je voudrais un remboursement, s\'il vous plaît.', 'Educação.'], ['Je vous remercie à votre aide.', 'Je vous remercie de votre aide.', '«Remercier de».']],
      }),
      dialogo(8, 'À la banque / No banco', 'Pedro abre uma conta bancária.', [
        ['Pedro', 'Bonjour. Je voudrais ouvrir un compte, s\'il vous plaît.', 'Bom dia. Gostaria de abrir uma conta, por favor.'], ['Le conseiller', 'Bien sûr. Vous avez un justificatif de domicile et une pièce d\'identité ?', 'Claro. O senhor tem um comprovante de residência e um documento de identidade?'], ['Pedro', 'Oui, voici mon passeport et un contrat de location.', 'Sim, aqui estão meu passaporte e um contrato de aluguel.'], ['Le conseiller', 'Parfait. Vous voulez aussi une carte bancaire ?', 'Perfeito. O senhor quer também um cartão bancário?'], ['Pedro', 'Oui. Est-ce qu\'il y a des frais mensuels ?', 'Sim. Há taxas mensais?'], ['Le conseiller', 'Deux euros par mois. Vous recevrez votre carte dans cinq jours.', 'Dois euros por mês. O senhor receberá o cartão em cinco dias.'],
      ]),
      producao(5, 'Reclame em voz alta de um produto com defeito e peça o reembolso de forma educada.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 31', [
      revisao(5, 'Abra uma conta e envie uma encomenda, em voz alta.'),
      exercicios(20, [
        ouvir('Je voudrais retirer cinq cents euros', ['Je voudrais retirer cinq cents euros', 'Je voudrais déposer cinq cents euros', 'Je voudrais retirer cinquante euros'], 'Je voudrais retirer cinq cents euros', 'Ouça «retirer».'), ouvir('Mon colis n\'est pas arrivé', ['Mon colis n\'est pas arrivé', 'Mon colis est arrivé', 'Ma lettre n\'est pas arrivée'], 'Mon colis n\'est pas arrivé', 'Ouça «colis».'), ouvir('Pourrais-je parler au responsable ?', ['Pourrais-je parler au responsable ?', 'Je veux parler au responsable', 'Où est le responsable ?'], 'Pourrais-je parler au responsable ?', 'Ouça «pourrais-je».'),
        ditado('Je voudrais ouvrir un compte', 'Escreva: Je voudrais ouvrir un compte.'), ditado('J\'ai perdu ma carte bancaire', 'Escreva: J\'ai perdu ma carte bancaire.'), ditado('Je voudrais un remboursement', 'Escreva: Je voudrais un remboursement.'),
        mc('«Sacar dinheiro» em francês:', ['retirer de l\'argent', 'sacar de l\'argent', 'prendre l\'argent'], 'retirer de l\'argent', 'Vocabulário do banco.'), mc('«Transferência» em francês:', ['un virement', 'une transférence', 'un transfert bancaire'], 'un virement', 'Masculino.'), mc('Qual frase está correta?', ['Il arrivera dans trois jours.', 'Il arrivera en trois jours.', 'Il arrivera depuis trois jours.'], 'Il arrivera dans trois jours.', 'Futuro: «dans».'), mc('Qual frase está correta?', ['Mon colis n\'est pas arrivé.', 'Mon colis n\'a pas arrivé.', 'Mon colis ne arrive pas.'], 'Mon colis n\'est pas arrivé.', 'Arriver usa «être».'),
        lacuna('J\'ai perdu ___ carte. (minha)', ['ma', 'mon', 'mes'], 'ma', 'Carte é feminino.'), lacuna('Quels ___ les frais ? (são)', ['sont', 'est', 'sommes'], 'sont', 'Plural.'), lacuna('Je voudrais l\'envoyer ___ recommandé.', ['en', 'à', 'dans'], 'en', '«En recommandé».'), lacuna('Pourrais-___ parler au responsable ?', ['je', 'tu', 'il'], 'je', 'Inversão.'),
        ordem('Ordene: «Je voudrais faire un virement.»', ['Je', 'voudrais', 'faire', 'un', 'virement'], 'Je voudrais faire un virement.', 'Pedido educado.'), ordem('Ordene: «Mon colis n\'est pas arrivé.»', ['Mon', 'colis', 'n\'est', 'pas', 'arrivé'], 'Mon colis n\'est pas arrivé.', 'Negação.'),
        livre('Escreva em francês: Gostaria de abrir uma conta. Quero enviar esta encomenda ao Brasil. Meu pacote não chegou.', 'Je voudrais ouvrir un compte. Je voudrais envoyer ce colis au Brésil. Mon colis n\'est pas arrivé.'),
        lacuna('Je voudrais ___ un chèque. (depositar)', ['retirer', 'déposer', 'envoyer'], 'déposer', '«Déposer» = depositar.'),
        lacuna('Il y a une erreur ___ mon relevé. (em)', ['dans', 'à', 'sur'], 'sur', '«Sur le relevé» = no extrato.'),
        lacuna('Il arrivera ___ cinq jours. (daqui a)', ['dans', 'en', 'pendant'], 'dans', '«Dans» + período olha para o futuro.'),
        lacuna('Je voudrais faire une ___ . (reclamação)', ['remboursement', 'réclamation', 'signature'], 'réclamation', '«Réclamation» = reclamação.'),
        lacuna('Je ___ remercie de votre aide. (agradeço ao senhor)', ['te', 'nous', 'vous'], 'vous', 'Registro formal: «Je vous remercie».'),
        mc('Qual pedido de reembolso é o mais educado?', ['Je voudrais un remboursement, s\'il vous plaît.', 'Je veux un remboursement tout de suite !', 'Donnez-moi mon argent.'], 'Je voudrais un remboursement, s\'il vous plaît.', '«Je voudrais» e «s\'il vous plaît» dão cortesia.'),
        mc('O que significa «en recommandé»?', ['urgente', 'registrado', 'grátis'], 'registrado', '«Recommandé» = com registro.'),
        mc('Como se diz «o saldo»?', ['le reçu', 'le guichet', 'le solde'], 'le solde', '«Solde» = saldo.'),
        mc('Qual frase está correta?', ['Quels sont les frais mensuels ?', 'Quel sont les frais mensuels ?', 'Quelles sont le frais mensuels ?'], 'Quels sont les frais mensuels ?', '«Frais» é masculino plural: «quels».'),
        ordem('Ordene: «Eu gostaria de depositar um cheque.»', ['Je', 'voudrais', 'déposer', 'un', 'chèque'], 'Je voudrais déposer un chèque.', '«Je voudrais» + infinitivo.'),
        ordem('Ordene: «Ele chegará daqui a uma semana.»', ['Il', 'arrivera', 'dans', 'une', 'semaine'], 'Il arrivera dans une semaine.', '«Dans» + período.'),
        livre('Escreva em francês: Eu gostaria de retirar duzentos euros. Meu cartão não funciona.', 'Je voudrais retirer deux cents euros. Ma carte ne marche pas.'),
        livre('Escreva em francês: Comprei este produto ontem e ele não funciona. Eu gostaria de um reembolso.', 'J\'ai acheté ce produit hier et il ne marche pas. Je voudrais un remboursement.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma tarefa prática que você teve de resolver recentemente.'),
    ]),
  ],
});
