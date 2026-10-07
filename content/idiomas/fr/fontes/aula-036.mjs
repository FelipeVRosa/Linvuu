import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 36, titulo: 'O Brasil e a França: costumes e diferenças', nivel: 'a2',
  objetivo: 'Falar do seu país, apresentar costumes, festas e comidas, comparar o Brasil e a França e conversar com cortesia sobre diferenças culturais.',
  nota: 'Você apresenta o seu país e entende o outro. Próxima aula: verbos irregulares do A2 e concordância do particípio.',
  sessoes: [
    sessao('S1', 'Apresentar o seu país', [
      revisao(5, 'Dê a sua opinião sobre a tecnologia com «d\'un côté… de l\'autre».'),
      palavras(8, [
        ['le pays', 'lö pei', 'o país', ''], ['la coutume', 'la kutüm', 'o costume', ''], ['la fête', 'la fét', 'a festa', ''], ['la tradition', 'la tradisiõ', 'a tradição', ''], ['le plat typique', 'lö pla tipik', 'o prato típico', ''], ['la langue', 'la lãg', 'a língua', ''], ['les habitants', 'lê zabitã', 'os habitantes', ''], ['la région', 'la rejiõ', 'a região', ''],
      ]),
      gramatica(12, 'Parler de son pays', 'PASSO 1: apresentar: «Je viens du Brésil.» «Le Brésil est un grand pays d\'Amérique du Sud.» PASSO 2: população e língua: «On y parle portugais.» «Il y a plus de deux cents millions d\'habitants.» PASSO 3: regiões: «Dans le nord, il fait chaud. Dans le sud, il fait plus frais.» PASSO 4: comidas: «Le plat typique, c\'est la feijoada.» «On mange du riz et des haricots tous les jours.» PASSO 5: festas: «Le carnaval est une grande fête en février.» «On fête les fêtes juninas en juin.» PASSO 6: pronome «on» (as pessoas em geral): «Au Brésil, on se fait la bise.» «En France, on mange tard.» PASSO 7: «y» (lá): «J\'y suis né.» «On y parle portugais.» PASSO 8: «Au Brésil» (país masculino: au), «en France» (país feminino: en), «aux États-Unis» (plural: aux).', {
        tag: 'Cultura',
        comparacao: 'em português dizemos «no Brasil, as pessoas…». O francês usa «on»: «au Brésil, on…». «On» fala de uma regra geral da cultura e vale para o falante também. Para a França: «en France, on…».',
        tabela: [
          { pais: 'Brésil (m.)', prep: 'au Brésil', exemplo: 'J\'habite au Brésil.' }, { pais: 'France (f.)', prep: 'en France', exemplo: 'Je vais en France.' }, { pais: 'États-Unis (pl.)', prep: 'aux États-Unis', exemplo: 'Il habite aux États-Unis.' }, { pais: 'on = as pessoas', prep: 'au Brésil, on…', exemplo: 'Au Brésil, on mange du riz.' },
        ],
        erros: [['Au Brésil, les gens mangent riz.', 'Au Brésil, on mange du riz.', '«On» + partitivo.'], ['Je viens de le Brésil.', 'Je viens du Brésil.', 'de + le = du.'], ['Il y a 200 millions habitants.', 'Il y a 200 millions d\'habitants.', '«De» antes do substantivo.'], ['On y parlons portugais.', 'On y parle portugais.', '«On» + 3ª pessoa.']],
      }),
      producao(5, 'Apresente em voz alta o seu país: onde fica, língua, uma comida e uma festa típicas.'),
    ]),
    sessao('S2', 'Costumes e diferenças', [
      revisao(4, 'Diga três costumes do seu país com «on».'),
      palavras(6, [
        ['se faire la bise', 'sö fér la biz', 'dar beijinhos no rosto', ''], ['serrer la main', 'seré la mẽ', 'apertar a mão', ''], ['tutoyer', 'tütuaié', 'tratar por «tu»', ''], ['vouvoyer', 'vuvuaié', 'tratar por «vous»', ''], ['être en retard', 'étr ã retar', 'atrasar-se', ''], ['arriver à l\'heure', 'ariué a lör', 'chegar na hora', ''],
      ]),
      gramatica(12, 'En France, on…', 'PASSO 1: cumprimento: «En France, on se fait la bise entre amis, mais on serre la main au travail.» PASSO 2: tratamento: «On vouvoie les inconnus et on tutoie les amis.» «On dit « vous » à un professeur.» PASSO 3: refeições: «On déjeune vers midi et on dîne vers vingt heures.» «Le dîner est plus tardif qu\'au Brésil.» PASSO 4: pontualidade: «En France, on arrive à l\'heure pour un rendez-vous professionnel.» «Pour une soirée, on peut arriver un peu en retard.» PASSO 5: comparar: «Au Brésil, on se fait plus souvent la bise qu\'en France.» «En France, on mange moins vite.» PASSO 6: cortesia: «En France, on dit toujours « bonjour » en entrant dans un magasin.» PASSO 7: a regra das duas bochechas varia por região: «En France, on se fait la bise deux ou trois fois selon la région.» PASSO 8: dar a sua opinião com respeito: «Je trouve que c\'est une différence intéressante.» «Je ne savais pas que…»', {
        tag: 'Cultura',
        comparacao: 'em português o «tu» e o «você» convivem. O francês tem uma divisão mais nítida: «vous» para desconhecidos, superiores e idosos; «tu» para amigos, família e crianças. Errar o «tu» com um chefe soa desrespeitoso; usar «vous» com um amigo pode soar frio.',
        tabela: [
          { situacao: 'amigos', costume: 'On se fait la bise.' }, { situacao: 'trabalho', costume: 'On serre la main.' }, { situacao: 'desconhecido', costume: 'On vouvoie.' }, { situacao: 'amigo', costume: 'On tutoie.' }, { situacao: 'loja', costume: 'On dit « bonjour » en entrant.' },
        ],
        erros: [['On tutoie le professeur.', 'On vouvoie le professeur.', 'Respeito: «vous».'], ['On dit pas bonjour dans un magasin.', 'On dit toujours « bonjour » dans un magasin.', 'Cortesia obrigatória.'], ['En France on arrive toujours en retard.', 'En France, on arrive à l\'heure.', 'Generalização sem fundamento.'], ['Au Brésil, on se fait la bise plus que de France.', 'Au Brésil, on se fait la bise plus souvent qu\'en France.', 'Comparar com «que».']],
      }),
      producao(8, 'Compare em voz alta o Brasil e a França em oito frases: cumprimentos, refeições, horários e cortesia.'),
    ]),
    sessao('S3', 'Conversar com respeito sobre diferenças', [
      revisao(4, 'Faça três comparações entre o Brasil e a França.'),
      palavras(5, [
        ['surprenant', 'sürprönã', 'surpreendente', ''], ['différent', 'diferã', 'diferente', ''], ['pareil', 'parei', 'igual', ''], ['plutôt', 'plütô', 'antes, bastante', ''], ['habitué', 'abitüê', 'acostumado', ''],
      ]),
      gramatica(8, 'Reagir a uma diferença cultural', 'PASSO 1: reagir: «C\'est surprenant !» «Ah bon ?» «Je ne savais pas.» PASSO 2: comparar sem julgar: «C\'est différent, mais c\'est intéressant.» «Chez nous, c\'est pareil.» PASSO 3: perguntar: «Comment ça se passe chez vous ?» «C\'est comme ça en France ?» PASSO 4: explicar: «Chez nous, on a l\'habitude de…» «Je suis habitué à…» PASSO 5: aceitar: «Je m\'y habitue petit à petit.» PASSO 6: «ne pas être habitué à» + infinitivo: «Je ne suis pas habitué à dîner si tard.»', {
        tag: 'Cultura',
        comparacao: 'em português dizemos «estou acostumado a…». O francês usa «être habitué à» + infinitivo, ou «avoir l\'habitude de» + infinitivo. As duas preposições são diferentes: «habitué à» e «l\'habitude de».',
        tabela: [
          { expressao: 'être habitué à', sentido: 'estar acostumado a', exemplo: 'Je suis habitué à dîner tôt.' }, { expressao: 'avoir l\'habitude de', sentido: 'ter o costume de', exemplo: 'J\'ai l\'habitude de dîner tôt.' }, { expressao: 'c\'est pareil', sentido: 'é igual', exemplo: 'Chez nous, c\'est pareil.' }, { expressao: 'je ne savais pas', sentido: 'eu não sabia', exemplo: 'Ah bon ? Je ne savais pas.' },
        ],
        erros: [['Je suis habitué de dîner tôt.', 'Je suis habitué à dîner tôt.', '«Habitué à».'], ['J\'ai l\'habitude à dîner tôt.', 'J\'ai l\'habitude de dîner tôt.', '«L\'habitude de».'], ['C\'est mauvais, c\'est différent.', 'C\'est différent, mais c\'est intéressant.', 'Sem julgamento.'], ['Je ne sais pas ça.', 'Je ne savais pas ça.', 'Passado de ignorância: imparfait.']],
      }),
      texto(8, 'Mes premières semaines en France / Minhas primeiras semanas na França', 'Quand je suis arrivé en France, tout était nouveau pour moi. Au Brésil, on se fait la bise quand on rencontre quelqu\'un, mais ici, on serre souvent la main au travail. On vouvoie aussi les inconnus, ce qui m\'a surpris au début. Les repas sont plus tardifs : on dîne vers vingt heures. Je ne suis pas encore habitué à manger si tard, mais je m\'y habitue petit à petit. J\'aime beaucoup dire « bonjour » en entrant dans un magasin : c\'est une habitude très agréable.', 'Quando cheguei à França, tudo era novo para mim. No Brasil, as pessoas se cumprimentam com beijinhos quando conhecem alguém, mas aqui, muitas vezes se aperta a mão no trabalho. Também se trata os desconhecidos por «vous», o que me surpreendeu no começo. As refeições são mais tardias: janta-se por volta das vinte horas. Ainda não estou acostumado a comer tão tarde, mas vou me acostumando aos poucos. Gosto muito de dizer «bom dia» ao entrar numa loja: é um hábito muito agradável.', [['Qu\'est-ce que l\'auteur fait au Brésil quand il rencontre quelqu\'un ?', 'On se fait la bise.'], ['Qu\'est-ce qu\'on fait souvent au travail en France ?', 'On serre la main.'], ['À quelle heure dîne-t-on en France ?', 'Vers vingt heures.'], ['Qu\'est-ce que l\'auteur aime faire en entrant dans un magasin ?', 'Dire « bonjour ».']]),
      producao(5, 'Conte em voz alta uma diferença cultural que você já notou ou imagina que vai notar.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 36', [
      revisao(5, 'Apresente o seu país e uma diferença entre o Brasil e a França.'),
      exercicios(20, [
        ouvir('Au Brésil, on mange du riz', ['Au Brésil, on mange du riz', 'En France, on mange du riz', 'Au Brésil, on mange du pain'], 'Au Brésil, on mange du riz', 'Ouça «au Brésil».'), ouvir('On vouvoie les inconnus', ['On vouvoie les inconnus', 'On tutoie les inconnus', 'On vouvoie les amis'], 'On vouvoie les inconnus', 'Ouça «vouvoie».'), ouvir('Je suis habitué à dîner tôt', ['Je suis habitué à dîner tôt', 'Je ne suis pas habitué à dîner tôt', 'J\'ai l\'habitude de dîner tard'], 'Je suis habitué à dîner tôt', 'Ouça «habitué».'),
        ditado('Au Brésil, on se fait la bise', 'Escreva: Au Brésil, on se fait la bise.'), ditado('En France, on serre la main', 'Escreva: En France, on serre la main.'), ditado('C\'est différent, mais intéressant', 'Escreva: C\'est différent, mais intéressant.'),
        mc('Qual frase está correta?', ['Je viens du Brésil.', 'Je viens de le Brésil.', 'Je viens en Brésil.'], 'Je viens du Brésil.', 'de + le = du.'), mc('Tratamento de um desconhecido:', ['On vouvoie.', 'On tutoie.', 'On se fait la bise.'], 'On vouvoie.', '«Vous».'), mc('Qual frase está correta?', ['J\'ai l\'habitude de dîner tard.', 'J\'ai l\'habitude à dîner tard.', 'J\'ai habitude dîner tard.'], 'J\'ai l\'habitude de dîner tard.', '«L\'habitude de».'), mc('Qual frase está correta?', ['Je suis habitué à manger tard.', 'Je suis habitué de manger tard.', 'Je suis habitué manger tard.'], 'Je suis habitué à manger tard.', '«Habitué à».'),
        lacuna('Il habite ___ États-Unis.', ['aux', 'au', 'en'], 'aux', 'Plural.'), lacuna('Je vais ___ France.', ['en', 'au', 'à'], 'en', 'País feminino.'), lacuna('On y ___ portugais. (falar)', ['parle', 'parlons', 'parlent'], 'parle', '«On» + 3ª pessoa.'), lacuna('Il y a deux cents millions ___ habitants.', ['d\'', 'de', 'des'], 'd\'', '«De» antes de vogal.'),
        ordem('Ordene: «Au Brésil, on mange du riz.»', ['Au', 'Brésil,', 'on', 'mange', 'du', 'riz'], 'Au Brésil, on mange du riz.', 'On + verbo.'), ordem('Ordene: «On dit bonjour en entrant.»', ['On', 'dit', 'bonjour', 'en', 'entrant'], 'On dit bonjour en entrant.', 'Gerúndio com «en».'),
        livre('Escreva em francês: No Brasil, as pessoas se cumprimentam com beijinhos. Na França, trata-se os desconhecidos por «vous». Não estou acostumado a jantar tão tarde.', 'Au Brésil, on se fait la bise. En France, on vouvoie les inconnus. Je ne suis pas habitué à dîner si tard.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você gostaria que um estrangeiro soubesse do seu país.'),
    ]),
  ],
});
