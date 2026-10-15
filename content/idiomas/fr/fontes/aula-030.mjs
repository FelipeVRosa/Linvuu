import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 30, titulo: 'Casa, aluguel e vida na cidade', nivel: 'a2',
  objetivo: 'Descrever uma casa, procurar e alugar um apartamento, falar do bairro e dos serviços e usar «il y a», «chez» e as preposições de lugar com mais precisão.',
  nota: 'Você se vira para morar e viver numa cidade francófona. Próxima aula: banco, correio e serviços.',
  sessoes: [
    sessao('S1', 'A casa e os cômodos', [
      revisao(5, 'Dê uma ordem, uma instrução e um aviso em voz alta.'),
      palavras(8, [
        ['l\'appartement', 'lapartömã', 'o apartamento', ''], ['la pièce', 'la piés', 'o cômodo', ''], ['le salon', 'lö salõ', 'a sala de estar', ''], ['la cuisine', 'la küizin', 'a cozinha', ''], ['la chambre', 'la xãbr', 'o quarto', ''], ['la salle de bains', 'la sal dö bẽ', 'o banheiro', ''], ['le balcon', 'lö balkõ', 'a varanda', ''], ['le loyer', 'lö luaié', 'o aluguel', ''],
      ]),
      gramatica(12, 'Décrire un logement', 'PASSO 1: descrever o tamanho: «C\'est un appartement de deux pièces.» «Il fait cinquante mètres carrés.» PASSO 2: descrever o que há: «Il y a un salon, une cuisine, deux chambres et une salle de bains.» PASSO 3: andar: «Il est au deuxième étage.» «Il y a un ascenseur.» «C\'est au rez-de-chaussée.» PASSO 4: dizer o que tem: «Il a un balcon.» «Il est très lumineux.» «Il est calme.» PASSO 5: dizer o preço: «Le loyer est de mille euros par mois.» «Les charges sont comprises.» PASSO 6: perguntar: «Quelle est la surface ?» «Il y a combien de pièces ?» «Il est meublé ?» PASSO 7: adjetivos de casa: «grand, petit, clair, sombre, moderne, ancien, neuf, bruyant, calme». PASSO 8: «chez» + pessoa: «Je suis chez moi.» «Elle habite chez ses parents.»', {
        tag: 'Moradia',
        comparacao: 'em português dizemos «o apartamento tem dois quartos». Em francês, conta-se pelos cômodos («deux pièces») e não só pelos quartos: um «F2» tem sala e um quarto. «Au rez-de-chaussée» é o térreo; o «premier étage» é o primeiro andar acima do térreo.',
        tabela: [
          { termo: 'rez-de-chaussée', sentido: 'térreo' }, { termo: 'premier étage', sentido: '1º andar acima do térreo' }, { termo: 'deux pièces', sentido: 'sala + 1 quarto' }, { termo: 'meublé', sentido: 'mobiliado' }, { termo: 'charges comprises', sentido: 'taxas incluídas' }, { termo: 'loyer', sentido: 'aluguel' },
        ],
        erros: [['Il a trois salles.', 'Il a trois chambres.', '«Salle» é sala; quarto é «chambre».'], ['J\'habite en un appartement.', 'J\'habite dans un appartement.', '«Dans».'], ['Il est à le deuxième étage.', 'Il est au deuxième étage.', 'à + le = au.'], ['Je suis à chez moi.', 'Je suis chez moi.', '«Chez» não leva «à».']],
      }),
      producao(5, 'Descreva em voz alta a sua casa: cômodos, andar, tamanho e o que mais gosta nela.'),
    ]),
    sessao('S2', 'Procurar e alugar', [
      revisao(4, 'Descreva em voz alta uma casa que você acha ideal.'),
      palavras(6, [
        ['louer', 'luê', 'alugar', ''], ['visiter', 'vizité', 'visitar', ''], ['le propriétaire', 'lö propriétér', 'o proprietário', ''], ['le locataire', 'lö lokatér', 'o inquilino', ''], ['la caution', 'la kôsiõ', 'a caução', ''], ['l\'annonce', 'lanõs', 'o anúncio', ''],
      ]),
      gramatica(12, 'Parler d\'un appartement à louer', 'PASSO 1: ao ligar para um anúncio: «Bonjour, je vous appelle au sujet de l\'annonce pour l\'appartement.» PASSO 2: perguntar: «Il est encore disponible ?» «Quand puis-je le visiter ?» «Le loyer est de combien ?» PASSO 3: visitar: «Il y a combien de chambres ?» «Il est meublé ?» «Quels sont les transports à proximité ?» PASSO 4: negociar: «Pourriez-vous baisser le loyer ?» «Est-ce que les animaux sont acceptés ?» PASSO 5: contrato: «Je voudrais louer cet appartement.» «Combien de mois de caution ?» PASSO 6: ao mudar: «Je déménage le premier du mois.» «Je dois changer d\'adresse.» PASSO 7: pronomes: «Je le visite demain.» «Je le loue pour un an.» PASSO 8: «à proximité de» (perto de): «L\'appartement est à proximité du métro.»', {
        tag: 'Moradia',
        comparacao: 'em português dizemos «alugar um apartamento» tanto para quem aluga como para quem recebe. O francês também usa «louer» para os dois lados: «louer à quelqu\'un» (alugar a alguém) e «louer chez quelqu\'un» (alugar de alguém). O contexto decide.',
        tabela: [
          { situacao: 'ligar', frase: 'Je vous appelle au sujet de l\'annonce.' }, { situacao: 'disponibilidade', frase: 'Il est encore disponible ?' }, { situacao: 'visita', frase: 'Quand puis-je le visiter ?' }, { situacao: 'preço', frase: 'Le loyer est de combien ?' }, { situacao: 'caução', frase: 'Combien de mois de caution ?' }, { situacao: 'mudança', frase: 'Je déménage le premier du mois.' },
        ],
        erros: [['Je veux louer un appartement.', 'Je voudrais louer un appartement.', 'Pedido educado.'], ['Il est encore libre le appartement ?', 'Il est encore disponible ?', 'Pergunta simples e natural.'], ['Je déménage à premier du mois.', 'Je déménage le premier du mois.', 'Sem preposição.'], ['Quando je peux visiter ?', 'Quand puis-je visiter ?', 'Pergunta em francês.']],
      }),
      producao(8, 'Faça em voz alta uma ligação a um proprietário: pergunte preço, tamanho, caução e marque a visita.'),
    ]),
    sessao('S3', 'O bairro e os serviços', [
      revisao(4, 'Descreva o seu bairro: o que há perto da sua casa.'),
      palavras(5, [
        ['le quartier', 'lö kartiê', 'o bairro', ''], ['le voisin', 'lö vuazẽ', 'o vizinho', ''], ['le métro', 'lö metrô', 'o metrô', ''], ['le supermarché', 'lö süpermarxé', 'o supermercado', ''], ['le parc', 'lö park', 'o parque', ''],
      ]),
      gramatica(8, 'Falar do bairro', 'PASSO 1: para descrever o bairro: «Mon quartier est calme et agréable.» «Il y a un supermarché, une pharmacie et un parc.» PASSO 2: distâncias: «C\'est à cinq minutes à pied.» «La station est à deux kilomètres.» PASSO 3: perguntar: «Il y a une boulangerie près d\'ici ?» «Où est la station de métro la plus proche ?» PASSO 4: dar o endereço: «J\'habite 12, rue de la Paix.» «C\'est au troisième étage, porte gauche.» PASSO 5: «le plus proche» (o mais próximo): «Le supermarché le plus proche est à dix minutes.»', {
        tag: 'Moradia',
        comparacao: 'em português dizemos «moro na rua da Paz, 12». O francês põe o número antes da rua: «J\'habite 12, rue de la Paix». Para a distância, «à cinq minutes à pied» (a pé) ou «en voiture» (de carro).',
        tabela: [
          { pergunta: 'Il y a une boulangerie près d\'ici ?', resposta: 'Oui, à cinq minutes à pied.' }, { pergunta: 'Où est le métro ?', resposta: 'À deux cents mètres.' }, { pergunta: 'Vous habitez où ?', resposta: '12, rue de la Paix.' }, { pergunta: 'C\'est loin ?', resposta: 'Non, c\'est tout près.' },
        ],
        erros: [['J\'habite rue de la Paix, 12.', 'J\'habite 12, rue de la Paix.', 'Número antes da rua.'], ['C\'est à cinq minutes par pied.', 'C\'est à cinq minutes à pied.', '«À pied».'], ['La station la plus proche est à deux kilomètres de pied.', 'La station la plus proche est à deux kilomètres.', 'Sem «de pied».'], ['Il a un supermarché près.', 'Il y a un supermarché près d\'ici.', '«Il y a».']],
      }),
      texto(8, 'Mon nouveau quartier / Meu novo bairro', 'J\'ai déménagé le mois dernier dans un nouvel appartement. Il est au troisième étage d\'un immeuble ancien, dans un quartier calme. Il y a deux pièces, une petite cuisine et un balcon. Le loyer est de neuf cents euros par mois, charges comprises. Dans la rue, il y a une boulangerie, une pharmacie et un petit supermarché. Le métro est à cinq minutes à pied. Mes voisins sont très gentils et je me sens bien ici.', 'Mudei-me no mês passado para um apartamento novo. Fica no terceiro andar de um prédio antigo, num bairro tranquilo. Há dois cômodos, uma cozinha pequena e uma varanda. O aluguel é de novecentos euros por mês, taxas incluídas. Na rua há uma padaria, uma farmácia e um pequeno supermercado. O metrô fica a cinco minutos a pé. Meus vizinhos são muito simpáticos e me sinto bem aqui.', [['Quand l\'auteur a-t-il déménagé ?', 'Le mois dernier.'], ['Combien coûte le loyer ?', 'Neuf cents euros par mois, charges comprises.'], ['Qu\'est-ce qu\'il y a dans la rue ?', 'Une boulangerie, une pharmacie et un petit supermarché.'], ['Comment sont les voisins ?', 'Très gentils.']]),
      producao(5, 'Descreva em voz alta o bairro onde você mora e diga o que mais falta nele.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 30', [
      revisao(5, 'Descreva uma casa e ligue para um anúncio de aluguel.'),
      exercicios(20, [
        ouvir('Il y a deux pièces et un balcon', ['Il y a deux pièces et un balcon', 'Il y a deux chambres et un balcon', 'Il y a trois pièces et un balcon'], 'Il y a deux pièces et un balcon', 'Ouça «pièces».'), ouvir('Le loyer est de neuf cents euros', ['Le loyer est de neuf cents euros', 'Le loyer est de neuf euros', 'Le loyer est de cinq cents euros'], 'Le loyer est de neuf cents euros', 'Ouça «neuf cents».'), ouvir('Le métro est à cinq minutes à pied', ['Le métro est à cinq minutes à pied', 'Le métro est à cinq minutes en voiture', 'Le métro est à dix minutes à pied'], 'Le métro est à cinq minutes à pied', 'Ouça «à pied».'),
        ditado('J\'habite 12, rue de la Paix', 'Escreva: J\'habite 12, rue de la Paix.'), ditado('Il est au troisième étage', 'Escreva: Il est au troisième étage.'), ditado('Je voudrais louer un appartement', 'Escreva: Je voudrais louer un appartement.'),
        mc('Qual frase está correta?', ['Il est au deuxième étage.', 'Il est à le deuxième étage.', 'Il est en deuxième étage.'], 'Il est au deuxième étage.', 'à + le = au.'), mc('Qual frase está correta?', ['J\'habite dans un appartement.', 'J\'habite en un appartement.', 'J\'habite au un appartement.'], 'J\'habite dans un appartement.', '«Dans».'), mc('Qual frase está correta?', ['Je suis chez moi.', 'Je suis à chez moi.', 'Je suis chez à moi.'], 'Je suis chez moi.', '«Chez» sem «à».'), mc('Endereço em francês:', ['J\'habite 12, rue de la Paix.', 'J\'habite rue de la Paix, 12.', 'J\'habite en 12 rue la Paix.'], 'J\'habite 12, rue de la Paix.', 'Número antes.'),
        lacuna('Le loyer est ___ mille euros. (de)', ['de', 'à', 'en'], 'de', 'Valor.'), lacuna('C\'est à cinq minutes ___ pied.', ['à', 'en', 'de'], 'à', '«À pied».'), lacuna('Il y a ___ boulangerie près d\'ici.', ['une', 'un', 'des'], 'une', 'Feminino.'), lacuna('Il est ___ au rez-de-chaussée. (térreo)', ['situé', 'situer', 'situe'], 'situé', 'Particípio.'),
        ordem('Ordene: «Il y a deux chambres et un salon.»', ['Il', 'y', 'a', 'deux', 'chambres', 'et', 'un', 'salon'], 'Il y a deux chambres et un salon.', 'Descrição.'), ordem('Ordene: «Je voudrais visiter cet appartement.»', ['Je', 'voudrais', 'visiter', 'cet', 'appartement'], 'Je voudrais visiter cet appartement.', 'Pedido educado.'),
        livre('Escreva em francês: Moro num apartamento de dois cômodos. O aluguel é de oitocentos euros. O metrô fica a cinco minutos a pé.', 'J\'habite dans un appartement de deux pièces. Le loyer est de huit cents euros. Le métro est à cinq minutes à pied.'),
        lacuna('Il y a ___ ascenseur dans l\'immeuble. (um)', ['un', 'une', 'du'], 'un', '«Ascenseur» é masculino: «un ascenseur».'),
        lacuna('Il est au deuxième ___ . (andar)', ['pièce', 'étage', 'salon'], 'étage', '«Étage» = andar.'),
        lacuna('Les charges sont ___ . (incluídas)', ['compris', 'comprise', 'comprises'], 'comprises', 'Concorda com «charges»: feminino plural.'),
        lacuna('Elle habite ___ ses parents. (na casa de)', ['chez', 'à', 'dans'], 'chez', '«Chez» + pessoa.'),
        lacuna('Quand puis-je ___ l\'appartement ? (visitar)', ['visité', 'visiter', 'visites'], 'visiter', 'Depois de «pouvoir», usa-se o infinitivo.'),
        mc('Como se diz «térreo»?', ['le premier étage', 'le balcon', 'le rez-de-chaussée'], 'le rez-de-chaussée', '«Rez-de-chaussée» é o térreo.'),
        mc('O que significa «meublé»?', ['mobiliado', 'barulhento', 'luminoso'], 'mobiliado', '«Meublé» = mobiliado.'),
        mc('Qual frase é a mais educada para querer alugar?', ['Je veux louer cet appartement.', 'Je voudrais louer cet appartement.', 'Je loue cet appartement maintenant.'], 'Je voudrais louer cet appartement.', '«Je voudrais» é o pedido educado.'),
        mc('Qual frase está correta?', ['Le supermarché plus proche est à dix minutes.', 'Le supermarché la plus proche est à dix minutes.', 'Le supermarché le plus proche est à dix minutes.'], 'Le supermarché le plus proche est à dix minutes.', 'Superlativo: «le plus proche», concordando com «supermarché».'),
        ordem('Ordene: «Meu bairro é calmo e agradável.»', ['Mon', 'quartier', 'est', 'calme', 'et', 'agréable'], 'Mon quartier est calme et agréable.', 'Possessivo + adjetivos.'),
        ordem('Ordene: «Ela mora na casa dos pais.»', ['Elle', 'habite', 'chez', 'ses', 'parents'], 'Elle habite chez ses parents.', '«Chez» + pessoa.'),
        livre('Escreva em francês: O apartamento tem uma varanda. Ele está no segundo andar.', 'L\'appartement a un balcon. Il est au deuxième étage.'),
        livre('Escreva em francês: Os encargos estão incluídos. Ele é mobiliado?', 'Les charges sont comprises. Il est meublé ?'),
      ]),
      producao(5, 'Fale 1 minuto sobre a casa e o bairro onde você gostaria de morar.'),
    ]),
  ],
});
