import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 27, titulo: 'Viagens: hotel, aeroporto e reservas', nivel: 'a2',
  objetivo: 'Reservar um quarto, fazer check-in, resolver problemas no hotel e se virar no aeroporto, com perguntas e pedidos educados.',
  nota: 'Você consegue viajar e se hospedar em um país francófono. Próxima aula: trabalho, telefone e e-mail.',
  sessoes: [
    sessao('S1', 'Reservar e fazer check-in', [
      revisao(5, 'Faça uma consulta curta com o médico: dor, tempo e conselho.'),
      palavras(8, [
        ['une chambre', 'ün xãbr', 'um quarto', ''], ['une réservation', 'ün rezervasiõ', 'uma reserva', ''], ['la clé', 'la klê', 'a chave', ''], ['le petit-déjeuner', 'lö pöti-dejönê', 'o café da manhã', ''], ['la nuit', 'la nüi', 'a noite (diária)', ''], ['la réception', 'la resepsiõ', 'a recepção', ''], ['libre', 'libr', 'livre, disponível', ''], ['complet', 'kõplé', 'lotado', ''],
      ]),
      gramatica(12, 'Je voudrais réserver une chambre', 'PASSO 1: pedir uma reserva: «Je voudrais réserver une chambre pour deux personnes.» «Avez-vous une chambre libre ?» PASSO 2: dizer as datas: «du 12 au 15 juillet», «pour trois nuits», «à partir de vendredi». PASSO 3: tipos de quarto: «une chambre simple, une chambre double, une chambre avec salle de bains, une chambre avec vue». PASSO 4: perguntar o preço: «C\'est combien la nuit ?» «Le petit-déjeuner est compris ?» PASSO 5: no check-in: «J\'ai une réservation au nom de Silva.» «Voici mon passeport.» PASSO 6: perguntar os horários: «À quelle heure est le petit-déjeuner ?» «Le check-out est à quelle heure ?» PASSO 7: pedir algo: «Pourriez-vous me réveiller à sept heures ?» «Pourriez-vous appeler un taxi ?» PASSO 8: «compris» (incluído) e «en plus» (a mais): «Le petit-déjeuner est compris.» «La climatisation est en plus.»', {
        tag: 'Viagem',
        comparacao: 'em português dizemos «quero reservar um quarto» ou «queria um quarto». O francês soa mais natural com «je voudrais réserver» e termina com «s\'il vous plaît». «Compris» significa «incluído»; não confunda com «entendido».',
        tabela: [
          { situacao: 'reservar', frase: 'Je voudrais réserver une chambre double.' }, { situacao: 'datas', frase: 'Pour trois nuits, du 12 au 15 juillet.' }, { situacao: 'preço', frase: 'C\'est combien la nuit ?' }, { situacao: 'café da manhã', frase: 'Le petit-déjeuner est compris ?' }, { situacao: 'check-in', frase: 'J\'ai une réservation au nom de Silva.' }, { situacao: 'pedido', frase: 'Pourriez-vous appeler un taxi ?' },
        ],
        erros: [['Je veux reserver un chambre.', 'Je voudrais réserver une chambre.', '«Chambre» é feminino; pedido educado.'], ['Quel heure est le petit-déjeuner ?', 'À quelle heure est le petit-déjeuner ?', '«Heure» é feminino: «quelle».'], ['Pour trois nuit.', 'Pour trois nuits.', 'Plural.'], ['J\'ai une réservation à le nom de Silva.', 'J\'ai une réservation au nom de Silva.', 'à + le = au.']],
      }),
      producao(5, 'Reserve em voz alta um quarto para duas pessoas por três noites, perguntando preço e café da manhã.'),
    ]),
    sessao('S2', 'Problemas e pedidos no hotel', [
      revisao(4, 'Faça uma reserva de hotel em voz alta com datas, preço e café da manhã.'),
      palavras(6, [
        ['la douche', 'la dux', 'o chuveiro', ''], ['la climatisation', 'la klimatizasiõ', 'o ar-condicionado', ''], ['le wifi', 'lö uifi', 'o wi-fi', ''], ['une serviette', 'ün serviét', 'uma toalha', ''], ['propre', 'própr', 'limpo', ''], ['en panne', 'ã pan', 'com defeito', ''],
      ]),
      gramatica(12, 'Há um problema no meu quarto', 'PASSO 1: avisar de um problema: «Il y a un problème avec la douche.» «La climatisation ne marche pas.» «Il n\'y a plus de serviettes.» PASSO 2: pedir solução: «Pourriez-vous envoyer quelqu\'un ?» «Pourriez-vous changer ma chambre ?» PASSO 3: «ne… pas» com «marcher» (funcionar): «Le wifi ne marche pas.» PASSO 4: «ne… plus» (não há mais): «Il n\'y a plus d\'eau chaude.» PASSO 5: «être en panne» (estar quebrado): «L\'ascenseur est en panne.» PASSO 6: «trop» + adjetivo para reclamar: «La chambre est trop bruyante.» «C\'est trop chaud.» PASSO 7: pedir desculpa com educação: «Excusez-moi de vous déranger, mais…» PASSO 8: agradecer: «Merci beaucoup, c\'est très gentil.»', {
        tag: 'Viagem',
        comparacao: 'em português dizemos «o chuveiro não funciona». O francês usa «marcher» para aparelhos («ne marche pas») e «fonctionner» em registro mais formal. «Il n\'y a plus de» é «não há mais». O pedido educado com condicional («pourriez-vous») é tão importante quanto a reclamação.',
        tabela: [
          { problema: 'a internet não funciona', frase: 'Le wifi ne marche pas.' }, { problema: 'o elevador quebrou', frase: 'L\'ascenseur est en panne.' }, { problema: 'não há mais toalhas', frase: 'Il n\'y a plus de serviettes.' }, { problema: 'quarto barulhento', frase: 'La chambre est trop bruyante.' }, { problema: 'trocar de quarto', frase: 'Pourriez-vous changer ma chambre ?' },
        ],
        erros: [['Le wifi no marche pas.', 'Le wifi ne marche pas.', 'Negação em francês.'], ['Il n\'y a plus des serviettes.', 'Il n\'y a plus de serviettes.', 'Na negação: «de».'], ['L\'ascenseur est panne.', 'L\'ascenseur est en panne.', '«En panne».'], ['Je veux changer la chambre maintenant !', 'Pourriez-vous changer ma chambre, s\'il vous plaît ?', 'Pedido educado.']],
      }),
      producao(8, 'Reclame em voz alta de três problemas no hotel e peça uma solução educada para cada um.'),
    ]),
    sessao('S3', 'No aeroporto', [
      revisao(4, 'Diga três problemas de hotel com «ne… pas» e «ne… plus».'),
      palavras(5, [
        ['le vol', 'lö vol', 'o voo', ''], ['l\'embarquement', 'lãbarkömã', 'o embarque', ''], ['la porte', 'la pórt', 'o portão', ''], ['les bagages', 'lê bagaj', 'a bagagem', ''], ['en retard', 'ã retar', 'atrasado', ''],
      ]),
      gramatica(8, 'Frases úteis de aeroporto', 'PASSO 1: no balcão: «Je voudrais enregistrer mes bagages.» «Voici mon billet et mon passeport.» PASSO 2: perguntar: «À quelle heure est l\'embarquement ?» «Quelle est la porte d\'embarquement ?» PASSO 3: atraso: «Le vol est en retard.» «Il est retardé de deux heures.» PASSO 4: perda de bagagem: «Mes bagages sont perdus.» «Je n\'ai pas retrouvé ma valise.» PASSO 5: perguntar o caminho: «Où est la sortie ?» «Où puis-je trouver un taxi ?» PASSO 6: alfândega: «Rien à déclarer.» «Je suis ici pour le tourisme.»', {
        tag: 'Viagem',
        comparacao: 'em português dizemos «meu voo está atrasado». O francês diz «mon vol est en retard» (usa a preposição «en»). «Les bagages» é plural e masculino; a bagagem inteira.',
        tabela: [
          { situacao: 'balcão', frase: 'Je voudrais enregistrer mes bagages.' }, { situacao: 'embarque', frase: 'À quelle heure est l\'embarquement ?' }, { situacao: 'atraso', frase: 'Le vol est en retard.' }, { situacao: 'bagagem perdida', frase: 'Ma valise est perdue.' }, { situacao: 'alfândega', frase: 'Rien à déclarer.' },
        ],
        erros: [['Le vol est atrasé.', 'Le vol est en retard.', 'Palavra francesa.'], ['Où est la porte d\'embarquement ?', 'Quelle est la porte d\'embarquement ?', 'Para identificar, use «quelle».'], ['Mes bagages est perdu.', 'Mes bagages sont perdus.', 'Plural.'], ['Je voudrais enregistrer mon bagages.', 'Je voudrais enregistrer mes bagages.', 'Plural.']],
      }),
      dialogo(8, 'À l\'hôtel / No hotel', 'Carlos faz o check-in em um hotel de Lyon.', [
        ['Carlos', 'Bonjour. J\'ai une réservation au nom de Silva.', 'Bom dia. Tenho uma reserva em nome de Silva.'], ['La réceptionniste', 'Bonjour, monsieur. Oui, une chambre double pour trois nuits. Pouvez-vous me donner votre passeport ?', 'Bom dia, senhor. Sim, um quarto de casal por três noites. Pode me dar o seu passaporte?'], ['Carlos', 'Voilà. Le petit-déjeuner est compris ?', 'Aqui está. O café da manhã está incluído?'], ['La réceptionniste', 'Oui, de sept heures à dix heures, au rez-de-chaussée.', 'Sim, das sete às dez, no térreo.'], ['Carlos', 'Parfait. Pourriez-vous m\'appeler un taxi demain matin à huit heures ?', 'Perfeito. A senhora poderia chamar um táxi amanhã de manhã às oito?'], ['La réceptionniste', 'Bien sûr, monsieur. Voici votre clé, chambre trois cent douze. Bon séjour !', 'Claro, senhor. Aqui está a sua chave, quarto trezentos e doze. Boa estadia!'],
      ]),
      producao(5, 'Faça o check-in em voz alta: nome, reserva, passaporte, café da manhã e um pedido.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 27', [
      revisao(5, 'Reserve um quarto e peça um táxi, em voz alta.'),
      exercicios(20, [
        ouvir('J\'ai une réservation au nom de Silva', ['J\'ai une réservation au nom de Silva', 'Je voudrais une réservation au nom de Silva', 'J\'ai une chambre au nom de Silva'], 'J\'ai une réservation au nom de Silva', 'Ouça «réservation».'), ouvir('Le wifi ne marche pas', ['Le wifi ne marche pas', 'Le wifi marche bien', 'Le wifi est cher'], 'Le wifi ne marche pas', 'Ouça «ne marche pas».'), ouvir('À quelle heure est l\'embarquement ?', ['À quelle heure est l\'embarquement ?', 'À quelle heure est le petit-déjeuner ?', 'Quelle est la porte ?'], 'À quelle heure est l\'embarquement ?', 'Ouça «embarquement».'),
        ditado('Je voudrais réserver une chambre', 'Escreva: Je voudrais réserver une chambre.'), ditado('Il n\'y a plus de serviettes', 'Escreva: Il n\'y a plus de serviettes.'), ditado('Le vol est en retard', 'Escreva: Le vol est en retard.'),
        mc('Pedido educado de quarto:', ['Je voudrais réserver une chambre.', 'Je veux une chambre.', 'Donnez-moi une chambre.'], 'Je voudrais réserver une chambre.', 'Condicional.'), mc('«Compris» em hotel significa:', ['incluído', 'entendido', 'lotado'], 'incluído', 'Café da manhã compris.'), mc('Qual frase está correta?', ['L\'ascenseur est en panne.', 'L\'ascenseur est panne.', 'L\'ascenseur a panne.'], 'L\'ascenseur est en panne.', '«En panne».'), mc('Qual frase está correta?', ['À quelle heure est le petit-déjeuner ?', 'Quel heure est le petit-déjeuner ?', 'À quel heure est le petit-déjeuner ?'], 'À quelle heure est le petit-déjeuner ?', '«Heure» é feminino.'),
        lacuna('Il n\'y a plus ___ serviettes.', ['de', 'des', 'les'], 'de', 'Negação: «de».'), lacuna('Mes bagages ___ perdus.', ['sont', 'est', 'ont'], 'sont', 'Plural.'), lacuna('Je voudrais ___ mes bagages. (despachar)', ['enregistrer', 'enregistré', 'enregistre'], 'enregistrer', 'Infinitivo.'), lacuna('Pour trois ___ . (noites)', ['nuits', 'nuit', 'nuites'], 'nuits', 'Plural.'),
        ordem('Ordene: «Pourriez-vous appeler un taxi ?»', ['Pourriez-vous', 'appeler', 'un', 'taxi'], 'Pourriez-vous appeler un taxi ?', 'Pedido educado.'), ordem('Ordene: «Le wifi ne marche pas.»', ['Le', 'wifi', 'ne', 'marche', 'pas'], 'Le wifi ne marche pas.', 'ne + verbo + pas.'),
        livre('Escreva em francês: Eu gostaria de reservar um quarto para duas pessoas. O café da manhã está incluído? O elevador está quebrado.', 'Je voudrais réserver une chambre pour deux personnes. Le petit-déjeuner est compris ? L\'ascenseur est en panne.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma viagem que você gostaria de fazer, com hotel e aeroporto.'),
    ]),
  ],
});
