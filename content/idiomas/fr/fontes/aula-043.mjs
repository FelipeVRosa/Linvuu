import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 43, titulo: 'Relativos compostos e o pronome «ce»', nivel: 'b1',
  objetivo: 'Usar «lequel», «auquel», «duquel», «ce que», «ce dont», «ce à quoi» e «dont» com precisão para ligar ideias complexas.',
  nota: 'Você liga frases longas com precisão. Próxima aula: o condicional passado e as hipóteses.',
  sessoes: [
    sessao('S1', 'Preposição + lequel', [
      revisao(5, 'Dê um conselho com gérondif em voz alta.'),
      palavras(8, [
        ['avec lequel', 'avék lökél', 'com o qual', ''], ['pour laquelle', 'pur lakél', 'para a qual', ''], ['dans lesquels', 'dã lekél', 'nos quais', ''], ['auquel', 'ôkél', 'ao qual', ''], ['à laquelle', 'a lakél', 'à qual', ''], ['auxquels', 'ôkél', 'aos quais', ''], ['duquel', 'düké', 'do qual', ''], ['sur lequel', 'sür lökél', 'sobre o qual', ''],
      ]),
      gramatica(12, 'Le livre auquel je pense', 'PASSO 1: depois de uma preposição (avec, pour, dans, sur, sans, chez…), o relativo para COISAS é «lequel»: «Le stylo avec lequel j\'écris.» «La table sur laquelle je travaille.» PASSO 2: «lequel» concorda: «lequel» (m. sing.), «laquelle» (f. sing.), «lesquels» (m. pl.), «lesquelles» (f. pl.). PASSO 3: com «à» há contrações: «auquel» (à + lequel), «à laquelle», «auxquels» (à + lesquels), «auxquelles». PASSO 4: com «de» contrai-se: «duquel» (de + lequel), «de laquelle», «desquels», «desquelles»; mas se o verbo pede «de», prefira «dont». PASSO 5: para PESSOAS, depois de preposição, use «qui»: «L\'ami avec qui je voyage.» «La personne à qui je parle.» PASSO 6: com «parmi, entre» e pessoas, use «lesquels»: «Les amis parmi lesquels il y a Paul.» PASSO 7: com verbos que pedem «à» + coisa: «Le projet auquel je pense.» (penser à) «La réunion à laquelle j\'assiste.» PASSO 8: com verbos que pedem «de»: «Le projet dont je parle.» (parler de)', {
        tag: 'Relativos',
        comparacao: 'em português dizemos «o lápis com o qual escrevo» ou «o lápis que eu uso para escrever». O francês só aceita a primeira forma depois de preposição: «le stylo avec lequel j\'écris». A regra: coisas pedem «lequel», pessoas pedem «qui».',
        tabela: [
          { forma: 'lequel / laquelle', uso: 'coisas depois de preposição', exemplo: 'La table sur laquelle je travaille.' }, { forma: 'lesquels / lesquelles', uso: 'plural', exemplo: 'Les raisons pour lesquelles je pars.' }, { forma: 'auquel, à laquelle', uso: 'à + coisa', exemplo: 'Le projet auquel je pense.' }, { forma: 'qui', uso: 'pessoas depois de preposição', exemplo: 'L\'ami avec qui je voyage.' }, { forma: 'dont', uso: 'de + coisa/pessoa', exemplo: 'Le livre dont je parle.' },
        ],
        erros: [['Le stylo avec que j\'écris.', 'Le stylo avec lequel j\'écris.', '«Que» não vale depois de preposição.'], ['La table sur lequel je travaille.', 'La table sur laquelle je travaille.', 'Feminino.'], ['L\'ami avec lequel je voyage.', 'L\'ami avec qui je voyage.', 'Pessoa: «qui».'], ['Le projet à quel je pense.', 'Le projet auquel je pense.', 'Contração: «auquel».']],
      }),
      producao(5, 'Descreva em voz alta cinco coisas do seu dia a dia com «avec lequel», «sur laquelle» e «dans lequel».'),
    ]),
    sessao('S2', 'Dont e ce dont', [
      revisao(4, 'Una em voz alta: «C\'est le livre. J\'ai besoin de ce livre.»'),
      palavras(6, [
        ['ce que', 'sö kö', 'o que (objeto)', ''], ['ce qui', 'sö ki', 'o que (sujeito)', ''], ['ce dont', 'sö dõ', 'do que, aquilo de que', ''], ['ce à quoi', 'sö a kuá', 'aquilo a que', ''], ['tout ce que', 'tu sö kö', 'tudo o que', ''], ['rien de ce que', 'riã dö sö kö', 'nada do que', ''],
      ]),
      gramatica(12, 'Ce que, ce qui, ce dont, ce à quoi', 'PASSO 1: «ce» + relativo = «o que» (sem palavra antes). «Ce qui» é sujeito: «Ce qui me plaît, c\'est le calme.» PASSO 2: «ce que» é objeto direto: «Ce que je veux, c\'est du calme.» PASSO 3: «ce dont» é «de» + objeto: «Ce dont j\'ai besoin, c\'est du repos.» «Je ne sais pas ce dont tu parles.» PASSO 4: «ce à quoi» é «à» + objeto: «Ce à quoi je pense, c\'est mon voyage.» PASSO 5: «tout ce qui», «tout ce que», «tout ce dont»: «Tout ce que tu dis est vrai.» PASSO 6: «dont» também expressa posse: «La femme dont le fils est médecin.» «L\'entreprise dont le directeur est brésilien.» PASSO 7: com verbos de «de»: «se souvenir de», «avoir besoin de», «avoir envie de», «parler de», «s\'occuper de», «avoir peur de», «se servir de», «rêver de». PASSO 8: com verbos de «à»: «penser à», «s\'intéresser à», «tenir à», «faire attention à».', {
        tag: 'Relativos',
        comparacao: 'em português dizemos «o que me agrada é o silêncio» e «do que preciso é descanso». O francês exige o «ce» antes do relativo quando falta o substantivo: «ce qui me plaît», «ce dont j\'ai besoin». E «dont» não se separa do verbo: «ce dont je parle», jamais «ce de quoi je parle» na língua comum.',
        tabela: [
          { forma: 'ce qui', funcao: 'o que (sujeito)', exemplo: 'Ce qui me plaît, c\'est le calme.' }, { forma: 'ce que', funcao: 'o que (objeto)', exemplo: 'Ce que je veux, c\'est du calme.' }, { forma: 'ce dont', funcao: 'de que', exemplo: 'Ce dont j\'ai besoin, c\'est du repos.' }, { forma: 'ce à quoi', funcao: 'a que', exemplo: 'Ce à quoi je pense, c\'est mon voyage.' }, { forma: 'dont (posse)', funcao: 'cujo', exemplo: 'La femme dont le fils est médecin.' },
        ],
        erros: [['Ce que me plaît, c\'est le calme.', 'Ce qui me plaît, c\'est le calme.', 'Sujeito: «ce qui».'], ['Ce que j\'ai besoin, c\'est du repos.', 'Ce dont j\'ai besoin, c\'est du repos.', '«Avoir besoin de».'], ['Je ne sais pas ce que tu parles.', 'Je ne sais pas ce dont tu parles.', '«Parler de».'], ['La femme que le fils est médecin.', 'La femme dont le fils est médecin.', '«Dont» para posse.']],
      }),
      producao(8, 'Diga em voz alta oito frases: «Ce qui me plaît… Ce que je veux… Ce dont j\'ai besoin… Ce à quoi je pense…»'),
    ]),
    sessao('S3', 'Frases longas e precisas', [
      revisao(4, 'Complete: «Voici la raison pour ___ je pars. Ce ___ je veux, c\'est du calme.»'),
      palavras(5, [
        ['la raison', 'la rézõ', 'a razão', ''], ['la façon', 'la fasõ', 'a maneira', ''], ['le moment', 'lö momã', 'o momento', ''], ['l\'endroit', 'lãdruá', 'o lugar', ''], ['la personne', 'la persón', 'a pessoa', ''],
      ]),
      gramatica(8, 'Combinar vários relativos', 'PASSO 1: um relativo pode estar dentro de outro: «Voici le livre que tu m\'as offert et dont je t\'ai parlé.» PASSO 2: «la raison pour laquelle», «la façon dont», «le moment où», «l\'endroit où»: «La façon dont il parle m\'agace.» PASSO 3: «celui qui / celle qui / ceux qui / celles qui» (aquele que): «Celui qui travaille réussit.» «Ceux dont je parle sont partis.» PASSO 4: «celui-ci» (este), «celui-là» (aquele): «Je prends celui-ci.» PASSO 5: «ce qui» + «c\'est»: «Ce qui compte, c\'est de participer.»', {
        tag: 'Relativos',
        comparacao: 'em português dizemos «a maneira como ele fala». O francês diz «la façon dont il parle» (com «dont»). E «aquele que» é «celui qui», com concordância de gênero e número.',
        tabela: [
          { expressao: 'la raison pour laquelle', exemplo: 'La raison pour laquelle je pars.' }, { expressao: 'la façon dont', exemplo: 'La façon dont il parle m\'agace.' }, { expressao: 'celui qui', exemplo: 'Celui qui travaille réussit.' }, { expressao: 'celle dont', exemplo: 'Celle dont je parle est partie.' }, { expressao: 'ce qui compte', exemplo: 'Ce qui compte, c\'est de participer.' },
        ],
        erros: [['La façon comme il parle m\'agace.', 'La façon dont il parle m\'agace.', '«Dont».'], ['Celui que travaille réussit.', 'Celui qui travaille réussit.', 'Sujeito: «qui».'], ['La raison que je pars.', 'La raison pour laquelle je pars.', 'Preposição + lequel.'], ['Ce qui compte, c\'est participer.', 'Ce qui compte, c\'est de participer.', '«C\'est de» + infinitivo.']],
      }),
      texto(8, 'Une lettre de motivation / Uma carta de motivação', 'Madame, Monsieur, Je vous écris au sujet du poste que vous avez publié. Ce qui m\'intéresse dans votre entreprise, c\'est la façon dont elle forme ses équipes. J\'ai travaillé trois ans dans une société pour laquelle j\'ai développé un projet auquel je suis très attaché. Ce dont je suis le plus fier, c\'est d\'avoir réussi à travailler avec des personnes avec lesquelles je ne partageais pas la même culture. Je reste à votre disposition pour tout entretien.', 'Senhora, Senhor, Escrevo-lhes a respeito do cargo que vocês publicaram. O que me interessa na sua empresa é a maneira como ela forma as suas equipes. Trabalhei três anos numa empresa para a qual desenvolvi um projeto ao qual sou muito ligado. Do que mais me orgulho é de ter conseguido trabalhar com pessoas com as quais eu não partilhava a mesma cultura. Fico à disposição para qualquer entrevista.', [['Quel poste intéresse l\'auteur ?', 'Celui que l\'entreprise a publié.'], ['Qu\'est-ce qui l\'intéresse dans l\'entreprise ?', 'La façon dont elle forme ses équipes.'], ['Combien de temps a-t-il travaillé dans sa société précédente ?', 'Trois ans.'], ['De quoi est-il le plus fier ?', 'D\'avoir travaillé avec des personnes d\'une autre culture.']]),
      producao(5, 'Explique em voz alta o que mais lhe interessa em um trabalho, com «ce qui», «ce que» e «ce dont».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 43', [
      revisao(5, 'Una duas frases com «dont», duas com «lequel» e duas com «ce qui».'),
      exercicios(20, [
        ouvir('Le stylo avec lequel j\'écris', ['Le stylo avec lequel j\'écris', 'Le stylo dont j\'écris', 'Le stylo que j\'écris'], 'Le stylo avec lequel j\'écris', 'Ouça «avec lequel».'), ouvir('Ce dont j\'ai besoin, c\'est du repos', ['Ce dont j\'ai besoin, c\'est du repos', 'Ce que j\'ai besoin, c\'est du repos', 'Ce qui j\'ai besoin, c\'est du repos'], 'Ce dont j\'ai besoin, c\'est du repos', 'Ouça «ce dont».'), ouvir('La façon dont il parle m\'agace', ['La façon dont il parle m\'agace', 'La façon qu\'il parle m\'agace', 'La façon où il parle m\'agace'], 'La façon dont il parle m\'agace', 'Ouça «dont».'),
        ditado('Le projet auquel je pense', 'Escreva: Le projet auquel je pense.'), ditado('Ce qui me plaît, c\'est le calme', 'Escreva: Ce qui me plaît, c\'est le calme.'), ditado('La raison pour laquelle je pars', 'Escreva: La raison pour laquelle je pars.'),
        mc('Qual frase está correta?', ['La table sur laquelle je travaille.', 'La table sur lequel je travaille.', 'La table sur que je travaille.'], 'La table sur laquelle je travaille.', 'Feminino.'), mc('Qual frase está correta?', ['L\'ami avec qui je voyage.', 'L\'ami avec lequel je voyage.', 'L\'ami avec que je voyage.'], 'L\'ami avec qui je voyage.', 'Pessoa: «qui».'), mc('«Penser à» → relativo:', ['auquel', 'duquel', 'dont'], 'auquel', '«À» + lequel.'), mc('«Avoir besoin de» → relativo:', ['dont', 'auquel', 'lequel'], 'dont', '«De» → «dont».'),
        lacuna('Ce ___ me plaît, c\'est le calme.', ['qui', 'que', 'dont'], 'qui', 'Sujeito.'), lacuna('Ce ___ je veux, c\'est du calme.', ['que', 'qui', 'dont'], 'que', 'Objeto.'), lacuna('La façon ___ il parle m\'agace.', ['dont', 'que', 'où'], 'dont', '«La façon dont».'), lacuna('Les raisons pour ___ je pars.', ['lesquelles', 'lesquels', 'laquelle'], 'lesquelles', 'Feminino plural.'),
        ordem('Ordene: «Ce dont j\'ai besoin, c\'est du repos.»', ['Ce', 'dont', 'j\'ai', 'besoin,', 'c\'est', 'du', 'repos'], 'Ce dont j\'ai besoin, c\'est du repos.', 'Ce dont.'), ordem('Ordene: «La table sur laquelle je travaille.»', ['La', 'table', 'sur', 'laquelle', 'je', 'travaille'], 'La table sur laquelle je travaille.', 'Preposição + laquelle.'),
        livre('Escreva em francês: O que me agrada é o silêncio. Do que preciso é descanso. A mesa na qual trabalho é grande.', 'Ce qui me plaît, c\'est le silence. Ce dont j\'ai besoin, c\'est du repos. La table sur laquelle je travaille est grande.'),
      ]),
      producao(5, 'Fale 1 minuto descrevendo o seu trabalho ou estudo ideal, com relativos compostos.'),
    ]),
  ],
});
