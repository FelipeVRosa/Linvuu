import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 38, titulo: 'Revisão e simulado do A2', nivel: 'a2',
  objetivo: 'Rever todo o A2 em um mapa, treinar leitura, escuta, escrita e fala, corrigir os erros mais comuns dos brasileiros neste nível e fazer um simulado original.',
  nota: 'Você fechou o A2 do francês. Repita o simulado até acertar quase tudo. Para um certificado oficial, treine também com provas reais (como o DELF A2) e, se possível, com um professor nativo.',
  sessoes: [
    sessao('S1', 'O mapa do A2', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 19 a 37 que você acha difíceis.'),
      gramatica(15, 'O A2 inteiro em uma tabela', 'Esta tabela resume as aulas 19 a 37. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Imparfait', regra: 'radical do «nous» + «-ais, -ais, -ait, -ions, -iez, -aient»; hábitos, cenário, idade e hora no passado; «être» → «ét-».', aula: '19' },
          { tema: 'Passé composé × imparfait', regra: 'imparfait = cenário; passé composé = acontecimento; ação em curso interrompida: «Je mangeais quand tu as appelé».', aula: '20' },
          { tema: 'Pronomes indiretos e dois pronomes', regra: '«lui, leur»; «écouter/attendre» = direto; «le lui», «me le»; imperativo afirmativo: «donne-le-moi».', aula: '21, 29' },
          { tema: 'Futur simple', regra: 'infinitivo + «-ai, -as, -a, -ons, -ez, -ont»; irregulares: «ser-, aur-, ir-, fer-, pourr-»; «quand» + futuro; «si» + presente.', aula: '22' },
          { tema: 'Tempo: depuis, il y a, pendant, dans, venir de', regra: '«depuis» + presente (continua); «il y a» + passé composé (acabou); «venir de» (acabou de); «être en train de».', aula: '23' },
          { tema: 'Condicional', regra: 'radical do futuro + «-ais…»; pedidos educados; «si» + imparfait + condicional; conselho: «à ta place, je…».', aula: '24' },
          { tema: 'Pronomes relativos', regra: '«qui» (sujeito), «que» (objeto), «où» (lugar e tempo), «dont» (de + algo).', aula: '25' },
          { tema: 'Saúde', regra: '«avoir mal à», «au/aux», «depuis», «contre» + problema; «il faut» + infinitivo.', aula: '26' },
          { tema: 'Viagem, trabalho, moradia, serviços', regra: 'pedidos educados em hotel, aeroporto, telefone, e-mail, aluguel, banco e correio.', aula: '27, 28, 30, 31' },
          { tema: 'Lazer e opinião', regra: '«faire du», «jouer au / de la»; «ça te dirait de…»; «je l\'ai trouvé trop long».', aula: '32' },
          { tema: 'Negações e indefinidos', regra: '«ne… jamais / rien / personne / plus / aucun / ni… ni…»; «tout», «chaque», «plusieurs», «quelqu\'un de».', aula: '33' },
          { tema: 'Perguntas e conectores', regra: 'entonação, «est-ce que», inversão; «qu\'est-ce qui/que»; «parce que», «donc», «pourtant», «grâce à», «à cause de».', aula: '34' },
          { tema: 'Tecnologia e cultura', regra: '«télécharger», «se connecter»; «au Brésil, on…»; «tu/vous»; «être habitué à».', aula: '35, 36' },
          { tema: 'Verbos irregulares e concordância', regra: '«voir, croire, connaître, mettre, écrire, lire, dire»; «connaître» × «savoir»; particípio concorda com objeto direto antes.', aula: '37' },
        ],
      }),
      producao(10, 'Fale 3 minutos em francês: conte a sua infância, o que você fez ontem, o que vai fazer no ano que vem e um conselho que você daria a um amigo.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato A2, original)', [
      revisao(5, 'Releia o texto e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Mon premier mois à Lyon / Meu primeiro mês em Lyon', 'Il y a un mois, j\'ai quitté le Brésil pour travailler à Lyon. Quand je suis arrivé, il pleuvait et j\'étais très fatigué, mais mon collègue m\'attendait à la gare. Depuis, je travaille dans une banque et j\'habite dans un petit appartement près du métro. Au début, je ne connaissais personne. Maintenant, j\'ai plusieurs amis et nous sortons tous les week-ends. Hier, nous sommes allés au cinéma. Le film que nous avons vu était très drôle. Si tout va bien, je resterai ici deux ans et j\'apprendrai à cuisiner des plats français.', 'Há um mês, deixei o Brasil para trabalhar em Lyon. Quando cheguei, estava chovendo e eu estava muito cansado, mas meu colega me esperava na estação. Desde então, trabalho num banco e moro num pequeno apartamento perto do metrô. No começo, eu não conhecia ninguém. Agora tenho vários amigos e saímos todo fim de semana. Ontem fomos ao cinema. O filme que vimos era muito engraçado. Se tudo correr bem, ficarei aqui dois anos e aprenderei a cozinhar pratos franceses.', [['Quand l\'auteur a-t-il quitté le Brésil ?', 'Il y a un mois.'], ['Qui l\'attendait à la gare ?', 'Son collègue.'], ['Depuis quand travaille-t-il dans une banque ?', 'Depuis son arrivée, il y a un mois.'], ['Qu\'est-ce qu\'il a fait hier ?', 'Il est allé au cinéma avec ses amis.'], ['Combien de temps compte-t-il rester ?', 'Deux ans.']]),
      dialogo(8, 'Un rendez-vous / Um encontro', 'Carlos e Julie combinam de se ver.', [
        ['Carlos', 'Allô, Julie ? C\'est Carlos. Tu es libre samedi soir ?', 'Alô, Julie? É o Carlos. Você está livre sábado à noite?'], ['Julie', 'Oui, je crois. Pourquoi ?', 'Sim, acho que sim. Por quê?'], ['Carlos', 'Ça te dirait d\'aller dîner ? Je connais un bon restaurant près de chez moi.', 'Que tal jantar? Conheço um bom restaurante perto de casa.'], ['Julie', 'Avec plaisir ! À quelle heure ?', 'Com prazer! A que horas?'], ['Carlos', 'Vers vingt heures. Je viens de réserver une table. Tu ne seras pas en retard ?', 'Por volta das vinte horas. Acabei de reservar uma mesa. Você não vai se atrasar?'], ['Julie', 'Non, je serai à l\'heure. Si j\'avais ton adresse, je viendrais te chercher.', 'Não, estarei na hora. Se eu tivesse o seu endereço, iria buscá-lo.'],
      ]),
      producao(7, 'Responda em voz alta: quem é o autor, o que ele fez e o que vai fazer. Depois diga o que você faria no lugar dele.'),
    ]),
    sessao('S3', 'Os erros mais comuns do A2 e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete no A2 e a forma certa.'),
      gramatica(15, 'Os 16 erros mais comuns do A2', 'Leia cada par em voz alta: primeiro o errado, depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['Quand j\'ai été petit, je jouais.', 'Quand j\'étais petit, je jouais.', 'Fase longa: imparfait.'], ['J\'habite ici il y a deux ans.', 'J\'habite ici depuis deux ans.', 'Continua: «depuis».'], ['Quand j\'arrive, je t\'appellerai.', 'Quand j\'arriverai, je t\'appellerai.', 'Depois de «quand», futuro.'], ['Si j\'aurais de l\'argent, je voyagerais.', 'Si j\'avais de l\'argent, je voyagerais.', 'Depois de «si», imparfait.'],
          ['Je lui attends.', 'Je l\'attends.', '«Attendre» = objeto direto.'], ['Je parle à lui.', 'Je lui parle.', 'Pronome antes do verbo.'], ['L\'homme que parle est mon père.', 'L\'homme qui parle est mon père.', 'Sujeito: «qui».'], ['Le livre que je parle.', 'Le livre dont je parle.', '«Parler de»: «dont».'],
          ['Je ne vois pas rien.', 'Je ne vois rien.', 'Sem «pas» com «rien».'], ['Je n\'ai vu rien.', 'Je n\'ai rien vu.', '«Rien» entre o auxiliar e o particípio.'], ['Je sais Paul.', 'Je connais Paul.', 'Pessoa: «connaître».'], ['Il est plus grand de moi.', 'Il est plus grand que moi.', 'Comparar: «que».'],
          ['Je viens manger. (acabei de)', 'Je viens de manger.', 'Falta o «de».'], ['Je veux un café, s\'il vous plaît.', 'Je voudrais un café, s\'il vous plaît.', 'Pedido educado.'], ['Pourquoi tu pars ? — Pourquoi je suis fatigué.', 'Pourquoi tu pars ? — Parce que je suis fatigué.', 'Resposta: «parce que».'], ['La robe que j\'ai acheté.', 'La robe que j\'ai achetée.', 'Concorda com o objeto antes.'],
        ],
      }),
      producao(10, 'Escreva um e-mail curto (cerca de 80 palavras) para um amigo francês: conte o que você fez no fim de semana passado, onde você mora desde quando, e convide-o para visitar o Brasil. Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do A2', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('Quand je suis arrivé, il pleuvait', ['Quand je suis arrivé, il pleuvait', 'Quand j\'arrivais, il a plu', 'Quand j\'arriverai, il pleuvra'], 'Quand je suis arrivé, il pleuvait', 'Escuta: passé composé + imparfait.'), ouvir('J\'habite ici depuis deux ans', ['J\'habite ici depuis deux ans', 'J\'ai habité ici il y a deux ans', 'J\'habiterai ici dans deux ans'], 'J\'habite ici depuis deux ans', 'Escuta: «depuis».'),
        mc('Leia: «Il y a un mois, j\'ai quitté le Brésil.» Quando a pessoa saiu do Brasil?', ['há um mês', 'daqui a um mês', 'durante um mês'], 'há um mês', 'Leitura: «il y a» + tempo = há.'), mc('Qual frase está correta?', ['Si j\'avais le temps, je voyagerais.', 'Si j\'aurais le temps, je voyagerais.', 'Si j\'ai le temps, je voyagerais.'], 'Si j\'avais le temps, je voyagerais.', 'si + imparfait + condicional.'),
        lacuna('Quand il ___ , nous mangerons. (arriver)', ['arrivera', 'arrive', 'arrivait'], 'arrivera', 'Depois de «quand», futuro.'), lacuna('Le livre ___ je parle est cher.', ['dont', 'que', 'où'], 'dont', '«Parler de».'), lacuna('Je n\'ai ___ vu. (ninguém)', ['personne', 'rien', 'jamais'], 'personne', '«Personne» depois do particípio.'), lacuna('Elle ___ à Lyon hier. (aller)', ['est allée', 'a allé', 'allait'], 'est allée', '«Aller» usa «être», feminino.'),
        mc('Passado muito recente:', ['Je viens de manger.', 'Je vais manger.', 'Je mange en train.'], 'Je viens de manger.', '«Venir de».'), mc('Qual frase está correta?', ['J\'ai mal au dos.', 'J\'ai mal à le dos.', 'Je suis mal au dos.'], 'J\'ai mal au dos.', 'à + le = au.'), mc('Qual frase está correta?', ['Je lui ai téléphoné.', 'Je l\'ai téléphoné.', 'Je lui ai téléphonée.'], 'Je lui ai téléphoné.', '«Téléphoner à».'), mc('Qual frase está correta?', ['Je le lui donne.', 'Je lui le donne.', 'Je donne le lui.'], 'Je le lui donne.', 'Direto antes de «lui».'),
        ordem('Ordene: «Quand j\'étais petit, j\'habitais à la campagne.»', ['Quand', 'j\'étais', 'petit,', 'j\'habitais', 'à', 'la', 'campagne'], 'Quand j\'étais petit, j\'habitais à la campagne.', 'Imparfait.'), ordem('Ordene: «Il pleut, donc je reste à la maison.»', ['Il', 'pleut,', 'donc', 'je', 'reste', 'à', 'la', 'maison'], 'Il pleut, donc je reste à la maison.', 'Consequência.'),
        ditado('Je voudrais réserver une chambre', 'Escreva: Je voudrais réserver une chambre.'), ditado('Je ne mange jamais de viande', 'Escreva: Je ne mange jamais de viande.'),
        livre('Escreva em francês: Quando eu era criança, eu morava no campo. Ontem eu fui ao cinema. Se eu tivesse dinheiro, eu viajaria. Moro aqui há dois anos.', 'Quand j\'étais enfant, j\'habitais à la campagne. Hier, je suis allé au cinéma. Si j\'avais de l\'argent, je voyagerais. J\'habite ici depuis deux ans.'),
        lacuna('Si tu ___ , nous irons au cinéma. (venir)', ['viendras', 'viendrais', 'viens'], 'viens', 'Depois de «si», usa-se o presente.'),
        lacuna('Tu ___ dormir plus. (devoir — conselho)', ['devrais', 'devais', 'devras'], 'devrais', 'Conselho: condicional «devrais».'),
        lacuna('La ville ___ j\'habite est petite. (onde)', ['que', 'où', 'dont'], 'où', 'Lugar: «où».'),
        lacuna('Je ___ ai téléphoné hier. (a ela)', ['la', 'leur', 'lui'], 'lui', '«Téléphoner à» pede objeto indireto: «lui».'),
        lacuna('Il a mal ___ pieds. (aos)', ['aux', 'au', 'à la'], 'aux', '«À + les» vira «aux».'),
        mc('Qual frase está correta?', ['Je suis arrivé depuis deux ans.', 'Je suis arrivé il y a deux ans.', 'J\'arrive il y a deux ans.'], 'Je suis arrivé il y a deux ans.', 'Fato terminado: «il y a» + passé composé.'),
        mc('Qual é o futuro de «faire» com «nous»?', ['nous faisons', 'nous ferions', 'nous ferons'], 'nous ferons', 'Radical irregular «fer-» + «-ons».'),
        mc('Qual frase está correta?', ['Le film que je regarde', 'Le film qui je regarde', 'Le film dont je regarde'], 'Le film que je regarde', 'Objeto direto: «que».'),
        mc('Qual frase está correta?', ['Il parle meilleur que moi.', 'Il parle mieux que moi.', 'Il parle plus bon que moi.'], 'Il parle mieux que moi.', '«Bien» → «mieux» (advérbio).'),
        ordem('Ordene: «Ontem, nós fomos ao cinema.»', ['Hier,', 'nous', 'sommes', 'allés', 'au', 'cinéma'], 'Hier, nous sommes allés au cinéma.', '«Aller» usa «être» e concorda.'),
        ordem('Ordene: «Eu gostaria de alugar um apartamento perto do metrô.»', ['Je', 'voudrais', 'louer', 'un', 'appartement', 'près', 'du', 'métro'], 'Je voudrais louer un appartement près du métro.', '«Je voudrais» + infinitivo.'),
        livre('Escreva em francês: Quando eu cheguei, chovia. Eu acabei de reservar uma mesa.', 'Quand je suis arrivé, il pleuvait. Je viens de réserver une table.'),
        livre('Escreva em francês: O livro de que eu falo é caro. Eu não vi nada.', 'Le livre dont je parle est cher. Je n\'ai rien vu.'),
      ]),
      producao(5, 'Releia os itens que você errou e diga a regra de cada um em voz alta.'),
    ]),
  ],
});
