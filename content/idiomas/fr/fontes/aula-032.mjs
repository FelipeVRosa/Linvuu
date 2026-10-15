import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 32, titulo: 'Lazer, convites e cultura', nivel: 'a2',
  objetivo: 'Convidar, aceitar e recusar, falar de esportes, cinema, música e leitura, e dar uma opinião curta sobre um filme ou um livro.',
  nota: 'Você combina programas e conversa sobre o que gosta. Próxima aula: negações e indefinidos.',
  sessoes: [
    sessao('S1', 'Convidar e responder', [
      revisao(5, 'Reclame com educação de um produto e peça um reembolso.'),
      palavras(8, [
        ['inviter', 'ẽvité', 'convidar', ''], ['accepter', 'aksepté', 'aceitar', ''], ['refuser', 'refüzé', 'recusar', ''], ['sortir', 'sortir', 'sair', ''], ['le spectacle', 'lö spektakl', 'o espetáculo', ''], ['le concert', 'lö kõsér', 'o show', ''], ['la soirée', 'la suaré', 'a festa, a noite', ''], ['libre', 'libr', 'livre', ''],
      ]),
      gramatica(12, 'Tu es libre samedi ?', 'PASSO 1: convidar: «Tu veux venir au cinéma avec moi ?» «Ça te dirait d\'aller au concert ?» «On pourrait sortir samedi.» PASSO 2: perguntar a disponibilidade: «Tu es libre samedi soir ?» «Qu\'est-ce que tu fais ce week-end ?» PASSO 3: aceitar: «Avec plaisir !» «Super idée !» «Pourquoi pas ?» «Je veux bien.» PASSO 4: recusar com gentileza: «Désolé, je ne peux pas.» «Je suis pris samedi.» «Ce sera pour une autre fois.» PASSO 5: dar uma razão: «Je dois travailler.» «J\'ai un rendez-vous.» «Je suis fatigué.» PASSO 6: combinar: «On se retrouve à huit heures devant le cinéma ?» «À quelle heure ?» «Où on se retrouve ?» PASSO 7: «on» na fala é «nós»: «On y va ?» «On se voit samedi.» PASSO 8: confirmar: «C\'est d\'accord.» «À samedi !»', {
        tag: 'Lazer',
        comparacao: 'em português dizemos «vamos ao cinema?» e «a gente se vê sábado». O francês usa «on» no lugar de «nous»: «on y va ?», «on se voit samedi». «Ça te dirait de…» é uma forma natural de convidar sem forçar.',
        tabela: [
          { funcao: 'convidar', frase: 'Ça te dirait d\'aller au cinéma ?' }, { funcao: 'perguntar', frase: 'Tu es libre samedi soir ?' }, { funcao: 'aceitar', frase: 'Avec plaisir !' }, { funcao: 'recusar', frase: 'Désolé, je ne peux pas.' }, { funcao: 'combinar', frase: 'On se retrouve à huit heures ?' },
        ],
        erros: [['Tu veux venir à le cinéma ?', 'Tu veux venir au cinéma ?', 'à + le = au.'], ['Désolé, je peux pas.', 'Désolé, je ne peux pas.', 'Na escrita, a negação leva «ne».'], ['On se retrouvons à huit heures.', 'On se retrouve à huit heures.', '«On» pede 3ª pessoa do singular.'], ['Tu es libre le samedi soir ?', 'Tu es libre samedi soir ?', 'Sem artigo: este sábado. Com «le»: todo sábado.']],
      }),
      producao(5, 'Convide um amigo em voz alta, responda aceitando e depois recusando com uma razão.'),
    ]),
    sessao('S2', 'Esportes, cinema e música', [
      revisao(4, 'Faça um convite e combine o horário em voz alta.'),
      palavras(6, [
        ['faire du sport', 'fér dü spór', 'praticar esporte', ''], ['jouer au football', 'juê o futbol', 'jogar futebol', ''], ['jouer de la guitare', 'juê dö la gitar', 'tocar violão', ''], ['regarder un film', 'rögardé ẽ film', 'assistir a um filme', ''], ['écouter de la musique', 'ekuté dö la müzik', 'ouvir música', ''], ['lire un livre', 'lir ẽ livr', 'ler um livro', ''],
      ]),
      gramatica(12, 'Faire, jouer, regarder', 'PASSO 1: «faire du» + esporte individual: «faire du sport, faire du vélo, faire de la natation, faire de la danse». PASSO 2: «jouer au» + esporte coletivo ou jogo: «jouer au football, jouer au tennis, jouer aux cartes». PASSO 3: «jouer du / de la» + instrumento: «jouer de la guitare, jouer du piano». PASSO 4: «regarder» + imagem: «regarder un film, regarder la télé». PASSO 5: «écouter» + som: «écouter de la musique, écouter la radio». PASSO 6: opinião sobre um filme: «J\'ai aimé ce film.» «Il m\'a plu.» «C\'est un film intéressant.» PASSO 7: perguntar: «Quel genre de films tu aimes ?» «Quel est ton livre préféré ?» PASSO 8: gêneros: «un film d\'action, une comédie, un drame, un roman, un policier, un documentaire».', {
        tag: 'Lazer',
        comparacao: 'em português dizemos «jogar futebol» e «tocar violão» com verbos diferentes. O francês usa «jouer au» para jogos e esportes (jouer AU football) e «jouer de» para instrumentos (jouer DE la guitare). «Faire du» é para atividades, como «faire du vélo».',
        tabela: [
          { verbo: 'faire du / de la', tipo: 'atividade', exemplo: 'Je fais du vélo.' }, { verbo: 'jouer au / aux', tipo: 'jogo ou esporte', exemplo: 'Il joue au football.' }, { verbo: 'jouer du / de la', tipo: 'instrumento', exemplo: 'Elle joue de la guitare.' }, { verbo: 'regarder', tipo: 'imagem', exemplo: 'Je regarde un film.' }, { verbo: 'écouter', tipo: 'som', exemplo: 'J\'écoute de la musique.' },
        ],
        erros: [['Je joue le football.', 'Je joue au football.', '«Jouer à» + jogo.'], ['Elle joue la guitare.', 'Elle joue de la guitare.', '«Jouer de» + instrumento.'], ['Je fais le vélo.', 'Je fais du vélo.', '«Faire du».'], ['Je regarde de la musique.', 'J\'écoute de la musique.', '«Écouter» para som.']],
      }),
      producao(8, 'Diga em voz alta oito frases sobre o que você faz no tempo livre: esporte, música, filmes e leitura.'),
    ]),
    sessao('S3', 'Dar a sua opinião sobre um filme', [
      revisao(4, 'Diga o seu esporte, o seu filme e a sua música favoritos.'),
      palavras(5, [
        ['le film', 'lö film', 'o filme', ''], ['l\'histoire', 'listuár', 'a história', ''], ['l\'acteur', 'laktör', 'o ator', ''], ['la fin', 'la fẽ', 'o final', ''], ['émouvant', 'emuvã', 'comovente', ''],
      ]),
      gramatica(8, 'Falar de um filme', 'PASSO 1: apresentar: «J\'ai vu un film hier soir.» «C\'est un film d\'action.» PASSO 2: resumir: «L\'histoire se passe à Paris.» «Ça raconte l\'histoire d\'un homme qui…» PASSO 3: opinar: «J\'ai adoré.» «Je l\'ai trouvé trop long.» «La fin était surprenante.» PASSO 4: recomendar: «Je te le recommande.» «Ça vaut la peine de le voir.» PASSO 5: comparar: «C\'est mieux que le premier.» «Le livre est meilleur que le film.»', {
        tag: 'Lazer',
        comparacao: 'em português dizemos «eu achei o filme muito longo». O francês diz «je l\'ai trouvé trop long», com o pronome «l\'» antes do auxiliar. «Ça vaut la peine» é «vale a pena».',
        tabela: [
          { etapa: 'apresentar', frase: 'J\'ai vu un film hier soir.' }, { etapa: 'resumir', frase: 'Ça raconte l\'histoire d\'un homme qui…' }, { etapa: 'opinar', frase: 'Je l\'ai trouvé trop long.' }, { etapa: 'recomendar', frase: 'Je te le recommande.' }, { etapa: 'comparar', frase: 'Le livre est meilleur que le film.' },
        ],
        erros: [['J\'ai trouvé le film trop long lui.', 'Je l\'ai trouvé trop long.', 'Pronome antes do auxiliar.'], ['Le film est plus bon que le livre.', 'Le film est meilleur que le livre.', '«Meilleur».'], ['Ça vaut la peine de voir lui.', 'Ça vaut la peine de le voir.', 'Pronome antes do infinitivo.'], ['Je te recommande lui.', 'Je te le recommande.', 'Dois pronomes.']],
      }),
      texto(8, 'Un film que j\'ai adoré / Um filme que adorei', 'Hier soir, j\'ai vu un film français au cinéma avec une amie. C\'est l\'histoire d\'un jeune homme qui quitte son village pour travailler à Paris. Au début, il se sent seul, mais il rencontre des gens très gentils. J\'ai trouvé le film émouvant et drôle. La fin est surprenante : je ne l\'attendais pas ! Je te le recommande : ça vaut vraiment la peine.', 'Ontem à noite, vi um filme francês no cinema com uma amiga. É a história de um jovem que deixa a sua vila para trabalhar em Paris. No começo, ele se sente sozinho, mas conhece pessoas muito simpáticas. Achei o filme comovente e engraçado. O final é surpreendente: eu não o esperava! Recomendo a você: vale mesmo a pena.', [['Où l\'auteur a-t-il vu le film ?', 'Au cinéma.'], ['De quoi parle le film ?', 'D\'un jeune homme qui quitte son village pour travailler à Paris.'], ['Comment l\'auteur a-t-il trouvé le film ?', 'Émouvant et drôle.'], ['Comment est la fin ?', 'Surprenante.']]),
      producao(5, 'Conte em voz alta um filme ou livro que você gostou e recomende a um amigo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 32', [
      revisao(5, 'Convide alguém para um programa e dê a sua opinião sobre um filme.'),
      exercicios(20, [
        ouvir('Ça te dirait d\'aller au cinéma ?', ['Ça te dirait d\'aller au cinéma ?', 'Tu veux aller au cinéma ?', 'Tu es libre au cinéma ?'], 'Ça te dirait d\'aller au cinéma ?', 'Ouça «ça te dirait».'), ouvir('Je joue de la guitare', ['Je joue de la guitare', 'Je joue à la guitare', 'Je fais de la guitare'], 'Je joue de la guitare', 'Ouça «joue de».'), ouvir('Je l\'ai trouvé trop long', ['Je l\'ai trouvé trop long', 'Je l\'ai trouvé très long', 'Je l\'ai trouvée trop longue'], 'Je l\'ai trouvé trop long', 'Ouça «trop».'),
        ditado('Tu es libre samedi soir', 'Escreva: Tu es libre samedi soir.'), ditado('Je joue au football', 'Escreva: Je joue au football.'), ditado('Ça vaut la peine', 'Escreva: Ça vaut la peine.'),
        mc('Qual frase está correta?', ['Je joue au football.', 'Je joue le football.', 'Je joue du football.'], 'Je joue au football.', '«Jouer à».'), mc('Qual frase está correta?', ['Elle joue du piano.', 'Elle joue au piano.', 'Elle fait du piano.'], 'Elle joue du piano.', '«Jouer de» + instrumento.'), mc('Qual frase está correta?', ['Je fais du vélo.', 'Je fais le vélo.', 'Je joue du vélo.'], 'Je fais du vélo.', '«Faire du».'), mc('Recusar com gentileza:', ['Désolé, je ne peux pas.', 'Non, je veux pas.', 'Pas question.'], 'Désolé, je ne peux pas.', 'Educação.'),
        lacuna('Tu veux venir ___ cinéma ? (ao)', ['au', 'à le', 'en'], 'au', 'à + le = au.'), lacuna('On ___ retrouve à huit heures. (se)', ['se', 'me', 'te'], 'se', 'Pronominal com «on».'), lacuna('Il joue ___ guitare. (tocar)', ['de la', 'à la', 'la'], 'de la', 'Instrumento.'), lacuna('Le livre est ___ que le film. (melhor)', ['meilleur', 'mieux', 'plus bon'], 'meilleur', 'Adjetivo.'),
        ordem('Ordene: «Tu es libre samedi soir ?»', ['Tu', 'es', 'libre', 'samedi', 'soir'], 'Tu es libre samedi soir ?', 'Pergunta simples.'), ordem('Ordene: «Je te le recommande.»', ['Je', 'te', 'le', 'recommande'], 'Je te le recommande.', 'Dois pronomes.'),
        livre('Escreva em francês: Quer ir ao cinema comigo? Eu toco violão. Eu achei o filme muito bom.', 'Tu veux aller au cinéma avec moi ? Je joue de la guitare. J\'ai trouvé le film très bon.'),
        lacuna('Elle fait ___ natation. (praticar)', ['du', 'de l\'', 'de la'], 'de la', 'Esportes individuais: «faire de la natation».'),
        lacuna('Nous jouons ___ tennis. (ao)', ['au', 'du', 'à la'], 'au', 'Esporte coletivo: «jouer au».'),
        lacuna('Tu ___ libre samedi ? (és)', ['as', 'es', 'est'], 'es', 'Com «tu», «être» faz «es».'),
        lacuna('Ça te ___ d\'aller au concert ? (diria)', ['dit', 'dira', 'dirait'], 'dirait', 'A fórmula do convite é «Ça te dirait de…».'),
        lacuna('Désolé, je ___ pas venir. (não posso)', ['ne peux', 'ne peut', 'n\'ai'], 'ne peux', '«Ne… pas» envolve «peux».'),
        mc('Qual frase está correta?', ['Il joue des cartes.', 'Il joue aux cartes.', 'Il joue à les cartes.'], 'Il joue aux cartes.', '«À + les» vira «aux»: «jouer aux cartes».'),
        mc('Como aceitar um convite?', ['Ce sera pour une autre fois.', 'Désolé, je suis pris.', 'Avec plaisir !'], 'Avec plaisir !', '«Avec plaisir» aceita; os outros recusam.'),
        mc('O que significa «Ça vaut la peine»?', ['Vale a pena', 'É caro', 'Dá pena'], 'Vale a pena', '«Valoir la peine» = valer a pena.'),
        mc('Como se diz «policial» (gênero)?', ['un drame', 'un policier', 'une comédie'], 'un policier', '«Un policier» é o gênero policial.'),
        ordem('Ordene: «Ele toca piano todas as noites.»', ['Il', 'joue', 'du', 'piano', 'tous', 'les', 'soirs'], 'Il joue du piano tous les soirs.', 'Instrumento: «jouer du».'),
        ordem('Ordene: «A gente se encontra em frente ao cinema.»', ['On', 'se', 'retrouve', 'devant', 'le', 'cinéma'], 'On se retrouve devant le cinéma.', '«On» = a gente.'),
        livre('Escreva em francês: Eu faço natação. Ela joga tênis.', 'Je fais de la natation. Elle joue au tennis.'),
        livre('Escreva em francês: Desculpe, eu não posso. Eu tenho um compromisso.', 'Désolé, je ne peux pas. J\'ai un rendez-vous.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você faz no tempo livre e o que gostaria de fazer.'),
    ]),
  ],
});
