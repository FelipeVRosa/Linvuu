import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 52, titulo: 'Meio ambiente e sociedade', nivel: 'b1',
  objetivo: 'Falar de ecologia, clima e problemas sociais, dar soluções e usar o imperativo e o subjuntivo para propor ações.',
  nota: 'Você consegue discutir temas atuais com vocabulário preciso. Próxima aula: cidadania e instituições.',
  sessoes: [
    sessao('S1', 'O ambiente', [
      revisao(5, 'Dê a sua opinião sobre uma publicidade, com um argumento.'),
      palavras(8, [
        ['l\'environnement', 'lãvironömã', 'o meio ambiente', ''], ['le réchauffement', 'lö rechofmã', 'o aquecimento', ''], ['la pollution', 'la polüsiõ', 'a poluição', ''], ['les déchets', 'lé déché', 'o lixo', ''], ['recycler', 'rösiklê', 'reciclar', ''], ['économiser', 'ekonomisê', 'economizar', ''], ['gaspiller', 'gaspiê', 'desperdiçar', ''], ['durable', 'dürabl', 'sustentável', ''],
      ]),
      gramatica(12, 'Il faut protéger la planète', 'PASSO 1: obrigação: «Il faut que nous recyclions.», «On doit économiser l\'eau.», «Il est nécessaire que…» PASSO 2: proibição: «Il ne faut pas gaspiller.», «Il est interdit de jeter…» PASSO 3: sugestão: «On pourrait prendre le vélo.», «Pourquoi ne pas utiliser les transports en commun ?» PASSO 4: causa e consequência (aula 47): «À cause de la pollution, la santé se dégrade.» PASSO 5: futuro hipotético: «Si nous ne faisons rien, la température augmentera.» PASSO 6: «de plus en plus de» e «de moins en moins de»: «De plus en plus de gens trient leurs déchets.» PASSO 7: «ne… que» (só): «Il ne reste que dix ans.» PASSO 8: quantidade: «beaucoup de», «trop de», «assez de», «peu de».', {
        tag: 'Meio ambiente',
        comparacao: 'em português, «lixo» tem várias palavras. Em francês, «déchets» é o lixo em geral, «ordures» o lixo doméstico e «poubelle» a lixeira. «Durable» é «sustentável» em contextos ecológicos, mas também «duradouro».',
        tabela: [
          { expressao: 'il faut que + subj.', uso: 'obrigação', exemplo: 'Il faut que nous recyclions.' }, { expressao: 'on pourrait', uso: 'sugestão', exemplo: 'On pourrait prendre le vélo.' }, { expressao: 'si + présent, futur', uso: 'hipótese real', exemplo: 'Si on ne fait rien, ça empirera.' }, { expressao: 'de plus en plus de', uso: 'aumento', exemplo: 'De plus en plus de gens trient.' }, { expressao: 'de moins en moins de', uso: 'diminuição', exemplo: 'De moins en moins de forêts.' }, { expressao: 'ne… que', uso: 'só', exemplo: 'Il ne reste que dix ans.' },
        ],
        erros: [['Il faut que nous recyclons.', 'Il faut que nous recyclions.', 'Subjuntivo.'], ['De plus en plus des gens trient.', 'De plus en plus de gens trient.', '«De» sem artigo.'], ['Si nous ne ferons rien, ça empirera.', 'Si nous ne faisons rien, ça empirera.', 'Sem futuro após «si».'], ['Il reste seulement que dix ans.', 'Il ne reste que dix ans.', '«Ne… que».']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que todos devem fazer pelo planeta, com «il faut que…».'),
    ]),
    sessao('S2', 'Problemas e soluções', [
      revisao(4, 'Use «si + presente, futuro» para três hipóteses sobre o clima.'),
      palavras(6, [
        ['la pauvreté', 'la povröté', 'a pobreza', ''], ['le chômage', 'lö chomaj', 'o desemprego', ''], ['l\'inégalité', 'linegalité', 'a desigualdade', ''], ['le logement', 'lö lojmã', 'a moradia', ''], ['une solution', 'ün solüsiõ', 'uma solução', ''], ['améliorer', 'améliorê', 'melhorar', ''],
      ]),
      gramatica(12, 'Le problème, c\'est que', 'PASSO 1: apresentar o problema: «Le problème, c\'est que…», «Le plus grave, c\'est que…», «Ce qui pose problème, c\'est…» PASSO 2: causa: «Cela s\'explique par…», «La cause principale, c\'est…» PASSO 3: efeito: «Cela entraîne…», «Cela provoque…», «Il en résulte que…» PASSO 4: solução: «Pour résoudre ce problème, il faut…», «Une solution serait de…» PASSO 5: pedir mudanças: «Il faudrait que le gouvernement construise plus de logements.» (condicional + subjuntivo) PASSO 6: ênfase: «C\'est… qui / que» (aula 56): «C\'est le chômage qui inquiète les jeunes.» PASSO 7: números: «Plus de 10 % de la population…» PASSO 8: tom: sem culpar pessoas, focar em fatos.', {
        tag: 'Sociedade',
        comparacao: 'o francês é muito organizado nos debates: problema → causa → efeito → solução. Em português costumamos misturar; em francês, siga a sequência. «Il faudrait que» + subjuntivo é a forma mais natural de pedir uma mudança.',
        tabela: [
          { expressao: 'le problème, c\'est que', uso: 'problema', exemplo: 'Le problème, c\'est que les loyers montent.' }, { expressao: 'cela s\'explique par', uso: 'causa', exemplo: 'Cela s\'explique par le chômage.' }, { expressao: 'cela entraîne', uso: 'efeito', exemplo: 'Cela entraîne des inégalités.' }, { expressao: 'une solution serait de', uso: 'solução', exemplo: 'Une solution serait de construire.' }, { expressao: 'il faudrait que', uso: 'pedir mudança', exemplo: 'Il faudrait que l\'État agisse.' }, { expressao: 'améliorer', uso: 'melhorar', exemplo: 'Améliorer les transports.' },
        ],
        erros: [['Le problème, c\'est que les loyers monte.', 'Le problème, c\'est que les loyers montent.', 'Verbo no plural.'], ['Il faudrait que l\'État agit.', 'Il faudrait que l\'État agisse.', 'Subjuntivo.'], ['Cela entraîne à des inégalités.', 'Cela entraîne des inégalités.', 'Verbo transitivo.'], ['Cela s\'explique de le chômage.', 'Cela s\'explique par le chômage.', '«Par».']],
      }),
      producao(8, 'Analise em voz alta um problema social: problema, causa, efeito e solução.'),
    ]),
    sessao('S3', 'Ler sobre o clima', [
      revisao(4, 'Dê um conselho ecológico com «on pourrait» e outro com «il faut que».'),
      palavras(5, [
        ['la température', 'la tãperatür', 'a temperatura', ''], ['une catastrophe', 'ün katastrof', 'uma catástrofe', ''], ['les énergies renouvelables', 'lé zenerji rönuvlabl', 'as energias renováveis', ''], ['le covoiturage', 'lö kuvuaturaj', 'a carona solidária', ''], ['l\'avenir', 'lavnir', 'o futuro', ''],
      ]),
      gramatica(8, 'O futuro do planeta', 'PASSO 1: hipóteses (aula 44): «Si nous avions agi plus tôt, la situation serait meilleure.» PASSO 2: previsões: «La température augmentera de deux degrés.» PASSO 3: expressar preocupação: «Je m\'inquiète pour l\'avenir.» PASSO 4: ação individual: «Chacun doit faire un effort.» PASSO 5: pronome «chacun» e «tout le monde»: «Tout le monde peut agir.»', {
        tag: 'Meio ambiente',
        comparacao: 'em francês, «chacun» (cada um) e «tout le monde» (todo mundo) sempre levam o verbo no singular: «Chacun doit», «Tout le monde peut». Em português acontece o mesmo.',
        tabela: [
          { expressao: 'chacun doit', uso: 'responsabilidade', exemplo: 'Chacun doit faire un effort.' }, { expressao: 'tout le monde peut', uso: 'inclusão', exemplo: 'Tout le monde peut agir.' }, { expressao: 'je m\'inquiète pour', uso: 'preocupação', exemplo: 'Je m\'inquiète pour l\'avenir.' }, { expressao: 'augmenter', uso: 'subir', exemplo: 'La température augmente.' }, { expressao: 'diminuer', uso: 'descer', exemplo: 'Les déchets diminuent.' }, { expressao: 'si + plus-que-parfait', uso: 'arrependimento', exemplo: 'Si nous avions agi…' },
        ],
        erros: [['Tout le monde peuvent agir.', 'Tout le monde peut agir.', 'Singular.'], ['Chacun doivent faire un effort.', 'Chacun doit faire un effort.', 'Singular.'], ['Je m\'inquiète l\'avenir.', 'Je m\'inquiète pour l\'avenir.', 'Verbo pronominal pede «pour» ou «de».'], ['La température va augmenter à deux degrés.', 'La température va augmenter de deux degrés.', 'Aumento: «de».']],
      }),
      texto(8, 'Agir pour le climat', 'Chaque année, la planète se réchauffe un peu plus. À cause de la pollution, les glaciers fondent et les océans montent. Pourtant, de plus en plus de gens agissent : ils trient leurs déchets, utilisent le vélo et pratiquent le covoiturage. Il faudrait aussi que les gouvernements investissent dans les énergies renouvelables. Si chacun fait un petit effort, l\'avenir sera meilleur.', 'A cada ano, o planeta esquenta um pouco mais. Por causa da poluição, as geleiras derretem e os oceanos sobem. No entanto, cada vez mais pessoas agem: separam o lixo, usam a bicicleta e praticam a carona solidária. Seria preciso também que os governos investissem em energias renováveis. Se cada um fizer um pequeno esforço, o futuro será melhor.', [['O que acontece com os glaciares?', 'Eles derretem.'], ['O que as pessoas fazem?', 'Separam o lixo, usam bicicleta e carona solidária.'], ['O que os governos deveriam fazer?', 'Investir em energias renováveis.']]),
      producao(5, 'Dê em voz alta duas ações que você faz e duas que gostaria de fazer pelo planeta.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 52', [
      revisao(5, 'Fale em voz alta do problema do lixo, causa, efeito e solução.'),
      exercicios(20, [
        ouvir('Il faut que nous recyclions', ['Il faut que nous recyclions', 'Il faut que nous recyclons', 'Il faut recycler'], 'Il faut que nous recyclions', 'Ouça «recyclions».'), ouvir('De plus en plus de gens trient', ['De plus en plus de gens trient', 'De moins en moins de gens trient', 'Beaucoup de gens trient'], 'De plus en plus de gens trient', 'Ouça «plus en plus».'), ouvir('Une solution serait de construire', ['Une solution serait de construire', 'Le problème est de construire', 'Une solution est de construire'], 'Une solution serait de construire', 'Condicional.'),
        ditado('Le problème, c\'est que les loyers montent', 'Escreva: Le problème, c\'est que les loyers montent.'), ditado('Il faudrait que l\'État agisse', 'Escreva: Il faudrait que l\'État agisse.'), ditado('Tout le monde peut agir', 'Escreva: Tout le monde peut agir.'),
        mc('«Il ne reste que dix ans» significa:', ['restam só dez anos', 'não restam dez anos', 'restam muitos anos'], 'restam só dez anos', '«Ne… que» = só.'), mc('«Il faudrait que» pede:', ['subjuntivo', 'indicativo', 'infinitivo'], 'subjuntivo', 'Pedido de mudança.'), mc('Qual frase está correta?', ['Si nous ne faisons rien, ça empirera.', 'Si nous ne ferons rien, ça empirera.', 'Si nous ne ferions rien, ça empirera.'], 'Si nous ne faisons rien, ça empirera.', 'Sem futuro após si.'), mc('«Déchets» são:', ['lixo', 'dinheiro', 'energia'], 'lixo', 'Lixo.'),
        lacuna('De plus en plus ___ gens trient. (de)', ['de', 'des', 'les'], 'de', 'Sem artigo.'), lacuna('Tout le monde ___ agir. (pode)', ['peut', 'peuvent', 'pouvoir'], 'peut', 'Singular.'), lacuna('Cela ___ des inégalités. (causa)', ['entraîne', 'entraîne à', 'entraîner de'], 'entraîne', 'Transitivo.'), lacuna('Il faut que nous ___ . (recycler)', ['recyclions', 'recyclons', 'recyclerons'], 'recyclions', 'Subjuntivo.'),
        ordem('Ordene: «Il faut que nous recyclions.»', ['Il', 'faut', 'que', 'nous', 'recyclions'], 'Il faut que nous recyclions.', 'Obrigação.'), ordem('Ordene: «Le problème, c\'est le chômage.»', ['Le', 'problème,', 'c\'est', 'le', 'chômage'], 'Le problème, c\'est le chômage.', 'Problema.'),
        livre('Escreva em francês: Seria preciso que o governo construísse mais moradias. Se cada um fizer um esforço, o futuro será melhor.', 'Il faudrait que le gouvernement construise plus de logements. Si chacun fait un effort, l\'avenir sera meilleur.'),
        lacuna('Il faut que nous ___ l\'eau. (economizar)', ['économisons', 'économisions', 'économiserons'], 'économisions', '«Il faut que» pede subjuntivo.'),
        lacuna('Il est interdit ___ jeter des papiers. (de)', ['à', 'que', 'de'], 'de', '«Il est interdit de» + infinitivo.'),
        lacuna('Pour résoudre ce problème, il ___ agir. (é preciso)', ['faut', 'fait', 'faille'], 'faut', '«Il faut» + infinitivo.'),
        lacuna('Cela s\'explique ___ le chômage. (por)', ['de', 'par', 'avec'], 'par', '«S\'expliquer par».'),
        lacuna('La température va augmenter ___ deux degrés. (em)', ['à', 'en', 'de'], 'de', 'Diferença de valor: «de».'),
        mc('Qual frase está correta?', ['Chacun doit faire un effort.', 'Chacun doivent faire un effort.', 'Chacun doit de faire un effort.'], 'Chacun doit faire un effort.', '«Chacun» é singular.'),
        mc('O que significa «gaspiller»?', ['economizar', 'desperdiçar', 'reciclar'], 'desperdiçar', '«Gaspiller» = desperdiçar.'),
        mc('Qual expressão apresenta o problema?', ['Pour conclure…', 'Par exemple…', 'Le problème, c\'est que…'], 'Le problème, c\'est que…', 'Abre a exposição do problema.'),
        mc('Qual frase está correta?', ['Il ne reste que dix ans.', 'Il ne reste pas que dix ans.', 'Il reste seulement que dix ans.'], 'Il ne reste que dix ans.', '«Ne… que» = só.'),
        ordem('Ordene: «A gente poderia pegar a bicicleta.»', ['On', 'pourrait', 'prendre', 'le', 'vélo'], 'On pourrait prendre le vélo.', 'Sugestão com o condicional.'),
        ordem('Ordene: «Não se deve desperdiçar a água.»', ['Il', 'ne', 'faut', 'pas', 'gaspiller', 'l\'eau'], 'Il ne faut pas gaspiller l\'eau.', '«Il ne faut pas» = não se deve.'),
        livre('Escreva em francês: Cada vez mais pessoas reciclam. É proibido jogar lixo na rua.', 'De plus en plus de gens recyclent. Il est interdit de jeter des déchets dans la rue.'),
        livre('Escreva em francês: O problema é que o lixo aumenta. É preciso que cada um economize a água.', 'Le problème, c\'est que les déchets augmentent. Il faut que chacun économise l\'eau.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma solução social ou ambiental que você defende.'),
    ]),
  ],
});
