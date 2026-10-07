import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 25, titulo: 'Pronomes relativos: qui, que, où, dont', nivel: 'a2',
  objetivo: 'Ligar frases com «qui», «que», «où» e «dont» para descrever pessoas, coisas e lugares sem repetir palavras.',
  nota: 'Você liga ideias em uma frase só. Próxima aula: corpo, saúde e farmácia.',
  sessoes: [
    sessao('S1', 'Qui e que', [
      revisao(5, 'Dê um conselho e faça um pedido educado em voz alta.'),
      palavras(8, [
        ['qui', 'ki', 'que, quem (sujeito)', ''], ['que', 'kö', 'que (objeto)', ''], ['où', 'u', 'onde', ''], ['dont', 'dõ', 'de que, cujo', ''], ['celui qui', 'sölüi ki', 'aquele que', ''], ['ce qui', 'sö ki', 'o que (sujeito)', ''], ['ce que', 'sö kö', 'o que (objeto)', ''], ['une personne qui', 'ün persón ki', 'uma pessoa que', ''],
      ]),
      gramatica(12, 'L\'homme qui parle, le livre que je lis', 'PASSO 1: o relativo liga duas frases: «J\'ai un ami. Il habite à Paris.» → «J\'ai un ami qui habite à Paris.» PASSO 2: «qui» substitui o SUJEITO e vem antes do verbo: «L\'homme qui parle est mon père.» PASSO 3: «que» substitui o OBJETO DIRETO e vem antes de um sujeito: «Le livre que je lis est intéressant.» PASSO 4: «que» vira «qu\'» diante de vogal; «qui» nunca elide: «Le film qu\'il regarde.» «L\'ami qui arrive.» PASSO 5: no passé composé, o particípio concorda com o objeto direto que vem antes: «La robe que j\'ai achetée.» «Les livres que j\'ai lus.» PASSO 6: teste prático: depois de «qui» vem um verbo; depois de «que» vem um sujeito (pronome ou substantivo). PASSO 7: «ce qui» e «ce que» significam «o que» quando não há palavra antes: «Je ne sais pas ce qui se passe.» «Dis-moi ce que tu veux.» PASSO 8: pessoas e coisas usam os mesmos relativos: «Le garçon qui joue», «Le jeu qui est cassé».', {
        tag: 'Relativos',
        comparacao: 'em português «que» serve para sujeito e objeto («o homem que fala», «o livro que leio»). O francês separa: «qui» (sujeito) e «que» (objeto). O truque: depois de «qui» vem verbo; depois de «que» vem sujeito.',
        tabela: [
          { pronome: 'qui', funcao: 'sujeito', exemplo: 'L\'homme qui parle est mon père.' }, { pronome: 'que / qu\'', funcao: 'objeto direto', exemplo: 'Le livre que je lis est bon.' }, { pronome: 'où', funcao: 'lugar ou tempo', exemplo: 'La ville où j\'habite est petite.' }, { pronome: 'dont', funcao: 'com «de»', exemplo: 'Le livre dont je parle est cher.' }, { pronome: 'ce qui', funcao: 'o que (sujeito)', exemplo: 'Je sais ce qui se passe.' }, { pronome: 'ce que', funcao: 'o que (objeto)', exemplo: 'Dis-moi ce que tu veux.' },
        ],
        erros: [['L\'homme que parle est mon père.', 'L\'homme qui parle est mon père.', 'Sujeito: «qui».'], ['Le livre qui je lis.', 'Le livre que je lis.', 'Objeto: «que».'], ['Le film que il regarde.', 'Le film qu\'il regarde.', 'Elisão: «qu\'il».'], ['La robe que j\'ai acheté.', 'La robe que j\'ai achetée.', 'Concordância com o objeto antes.']],
      }),
      producao(5, 'Descreva em voz alta cinco pessoas ou coisas com «qui» e «que»: «L\'ami qui… Le livre que…»'),
    ]),
    sessao('S2', 'Où e dont', [
      revisao(4, 'Una em voz alta: «J\'ai un frère. Il habite à Paris.» «Voici le livre. Je lis ce livre.»'),
      palavras(6, [
        ['la ville où', 'la vil u', 'a cidade onde', ''], ['le jour où', 'lö jur u', 'o dia em que', ''], ['le restaurant où', 'lö restorã u', 'o restaurante onde', ''], ['parler de', 'parlé dö', 'falar de', ''], ['avoir besoin de', 'avuár bözuẽ dö', 'precisar de', ''], ['avoir peur de', 'avuár pör dö', 'ter medo de', ''],
      ]),
      gramatica(12, 'La ville où j\'habite, le livre dont je parle', 'PASSO 1: «où» substitui lugar e tempo: «La ville où j\'habite est petite.» «Le jour où je suis arrivé, il pleuvait.» PASSO 2: «où» pode vir depois de preposição: «La ville d\'où je viens.» «Le pays où je vais.» PASSO 3: «dont» substitui «de + algo», quando o verbo ou o adjetivo pede «de»: «Le livre dont je parle» (parler de), «L\'ami dont j\'ai besoin» (avoir besoin de), «Le chien dont j\'ai peur» (avoir peur de). PASSO 4: «dont» também significa «cujo» (de quem): «La femme dont le fils est médecin» (cujo filho). PASSO 5: depois de «dont» vem sujeito + verbo, sem repetir o «de»: «Le livre dont je parle», nunca «dont je parle de». PASSO 6: para escolher entre «que» e «dont», veja o verbo: se ele pede «de», use «dont»: «Le film que j\'aime» (aimer, sem «de»), «Le film dont je parle» (parler de). PASSO 7: «où» tem o mesmo sentido para o tempo: «Le moment où il est arrivé.» PASSO 8: com pessoas, «à qui» e «de qui» também existem, mas são raros no A2.', {
        tag: 'Relativos',
        comparacao: 'em português dizemos «o livro de que falo», «o livro do qual falo» (formal) ou «o livro que eu falo» (informal, errado em francês). O francês não aceita a versão informal: «dont» é obrigatório quando o verbo pede «de».',
        tabela: [
          { verbo: 'parler de', frase: 'Le livre dont je parle est cher.' }, { verbo: 'avoir besoin de', frase: 'L\'outil dont j\'ai besoin est ici.' }, { verbo: 'avoir peur de', frase: 'L\'animal dont j\'ai peur est ici.' }, { verbo: 'se souvenir de', frase: 'Le jour dont je me souviens.' }, { verbo: 'lieu', frase: 'La ville où j\'habite est petite.' },
        ],
        erros: [['Le livre que je parle est cher.', 'Le livre dont je parle est cher.', '«Parler de» → «dont».'], ['Le livre dont je parle de.', 'Le livre dont je parle.', 'Não repita o «de».'], ['La ville que j\'habite.', 'La ville où j\'habite.', 'Lugar: «où».'], ['Le jour que je suis arrivé.', 'Le jour où je suis arrivé.', 'Tempo: «où».']],
      }),
      producao(8, 'Descreva em voz alta oito lugares e coisas com «où» e «dont»: «La ville où… Le livre dont…»'),
    ]),
    sessao('S3', 'Descrever com relativos', [
      revisao(4, 'Una: «C\'est un restaurant. J\'ai mangé dans ce restaurant. Il est cher.»'),
      palavras(5, [
        ['une personne qui', 'ün persón ki', 'uma pessoa que', ''], ['quelqu\'un qui', 'kelkẽ ki', 'alguém que', ''], ['quelque chose que', 'kelkö xôz kö', 'algo que', ''], ['l\'endroit où', 'lãdruá u', 'o lugar onde', ''], ['la façon dont', 'la fasõ dõ', 'a maneira como', ''],
      ]),
      gramatica(8, 'Definir pessoas, coisas e lugares', 'PASSO 1: para definir: «C\'est une personne qui aime voyager.» «C\'est un endroit où on peut manger.» PASSO 2: para descrever com mais detalhe: «Voici la maison où j\'ai grandi.» PASSO 3: «quelqu\'un qui» e «quelque chose que»: «Je cherche quelqu\'un qui parle français.» «J\'ai trouvé quelque chose que j\'aime.» PASSO 4: no singular, depois de «qui» sujeito, o verbo concorda com o antecedente: «Les gens qui parlent», «L\'homme qui parle». PASSO 5: não ponha «il», «elle» depois de «qui»: «Le garçon qui il joue» é erro.', {
        tag: 'Relativos',
        comparacao: 'em português a definição usa «que» («uma pessoa que gosta de viajar»). O francês usa «qui». E «onde» vira «où», que também serve para tempo.',
        tabela: [
          { definicao: 'uma pessoa', frase: 'C\'est une personne qui aime voyager.' }, { definicao: 'um lugar', frase: 'C\'est un endroit où on peut manger.' }, { definicao: 'uma coisa', frase: 'C\'est une chose que j\'adore.' }, { definicao: 'procurar', frase: 'Je cherche quelqu\'un qui parle français.' },
        ],
        erros: [['Le garçon qui il joue est mon fils.', 'Le garçon qui joue est mon fils.', 'Não repita o sujeito.'], ['C\'est un endroit que on mange.', 'C\'est un endroit où on mange.', 'Lugar: «où».'], ['Je cherche quelqu\'un que parle français.', 'Je cherche quelqu\'un qui parle français.', 'Sujeito: «qui».'], ['C\'est la chose dont j\'adore.', 'C\'est la chose que j\'adore.', '«Adorer» não usa «de».']],
      }),
      texto(8, 'La maison où j\'ai grandi / A casa onde cresci', 'La maison où j\'ai grandi est dans un petit village. C\'est une grande maison qui a un jardin avec beaucoup de fleurs. Mes grands-parents, qui vivaient là, m\'ont appris à cuisiner. Le gâteau que ma grand-mère préparait était le meilleur du monde. Le jour où j\'ai quitté le village, j\'ai pleuré. C\'est un endroit dont je me souviens toujours avec plaisir.', 'A casa onde cresci fica numa pequena vila. É uma casa grande que tem um jardim com muitas flores. Meus avós, que viviam lá, me ensinaram a cozinhar. O bolo que minha avó preparava era o melhor do mundo. No dia em que deixei a vila, chorei. É um lugar de que me lembro sempre com prazer.', [['Où est la maison de l\'auteur ?', 'Dans un petit village.'], ['Qui a appris à cuisiner à l\'auteur ?', 'Ses grands-parents.'], ['Quel gâteau était le meilleur du monde ?', 'Le gâteau que sa grand-mère préparait.'], ['Comment se souvient-il de cet endroit ?', 'Avec plaisir.']]),
      producao(5, 'Descreva em voz alta a casa onde você cresceu, com «où», «qui», «que» e «dont».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 25', [
      revisao(5, 'Una duas frases em uma, três vezes, com «qui», «que» e «où».'),
      exercicios(20, [
        ouvir('L\'homme qui parle est mon père', ['L\'homme qui parle est mon père', 'L\'homme que parle est mon père', 'L\'homme où parle est mon père'], 'L\'homme qui parle est mon père', 'Ouça «qui».'), ouvir('Le livre que je lis', ['Le livre que je lis', 'Le livre qui je lis', 'Le livre dont je lis'], 'Le livre que je lis', 'Ouça «que».'), ouvir('La ville où j\'habite', ['La ville où j\'habite', 'La ville que j\'habite', 'La ville dont j\'habite'], 'La ville où j\'habite', 'Ouça «où».'),
        ditado('Le livre dont je parle est cher', 'Escreva: Le livre dont je parle est cher.'), ditado('J\'ai un ami qui habite à Paris', 'Escreva: J\'ai un ami qui habite à Paris.'), ditado('Dis-moi ce que tu veux', 'Escreva: Dis-moi ce que tu veux.'),
        mc('Sujeito: qual está correto?', ['L\'ami qui arrive', 'L\'ami que arrive', 'L\'ami où arrive'], 'L\'ami qui arrive', 'Sujeito: «qui».'), mc('Objeto: qual está correto?', ['Le film que je regarde', 'Le film qui je regarde', 'Le film dont je regarde'], 'Le film que je regarde', 'Objeto: «que».'), mc('«Parler de»: qual está correto?', ['Le livre dont je parle', 'Le livre que je parle', 'Le livre où je parle'], 'Le livre dont je parle', '«De» → «dont».'), mc('Lugar: qual está correto?', ['La ville où j\'habite', 'La ville que j\'habite', 'La ville qui j\'habite'], 'La ville où j\'habite', 'Lugar: «où».'),
        lacuna('Le garçon ___ joue est mon fils.', ['qui', 'que', 'dont'], 'qui', 'Sujeito.'), lacuna('La robe ___ j\'ai achetée est belle.', ['que', 'qui', 'où'], 'que', 'Objeto.'), lacuna('Le jour ___ je suis arrivé, il pleuvait.', ['où', 'que', 'dont'], 'où', 'Tempo: «où».'), lacuna('L\'outil ___ j\'ai besoin est ici.', ['dont', 'que', 'où'], 'dont', '«Avoir besoin de».'),
        ordem('Ordene: «Le livre que je lis est intéressant.»', ['Le', 'livre', 'que', 'je', 'lis', 'est', 'intéressant'], 'Le livre que je lis est intéressant.', 'que + sujeito + verbo.'), ordem('Ordene: «La ville où j\'habite est petite.»', ['La', 'ville', 'où', 'j\'habite', 'est', 'petite'], 'La ville où j\'habite est petite.', 'où + sujeito + verbo.'),
        livre('Escreva em francês: Tenho um amigo que mora em Paris. O livro que eu leio é bom. A cidade onde eu moro é pequena.', 'J\'ai un ami qui habite à Paris. Le livre que je lis est bon. La ville où j\'habite est petite.'),
      ]),
      producao(5, 'Fale 1 minuto descrevendo uma pessoa, um lugar e uma coisa de que você gosta, com relativos.'),
    ]),
  ],
});
