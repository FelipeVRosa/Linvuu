import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 41, titulo: 'A voz passiva e o «on»', nivel: 'b1',
  objetivo: 'Formar a voz passiva com «être» + particípio e «par», saber quando ela é preferida e usar alternativas naturais como «on» e a forma pronominal.',
  nota: 'Você muda o foco da frase quando precisa. Próxima aula: gérondif e particípio presente.',
  sessoes: [
    sessao('S1', 'Formar a passiva', [
      revisao(5, 'Relate uma conversa recente com discurso indireto.'),
      palavras(8, [
        ['être construit', 'étr kõstrüi', 'ser construído', ''], ['être écrit', 'étr ekri', 'ser escrito', ''], ['être fait', 'étr fé', 'ser feito', ''], ['être vendu', 'étr vãdü', 'ser vendido', ''], ['être invité', 'étr ẽvité', 'ser convidado', ''], ['par', 'par', 'por (agente)', ''], ['de', 'dö', 'de (sentimento)', ''], ['l\'auteur', 'lôtör', 'o autor', ''],
      ]),
      gramatica(12, 'Le livre est écrit par un auteur', 'PASSO 1: a ativa fala do sujeito que faz: «Un auteur écrit un livre.» A passiva fala do objeto que sofre a ação: «Un livre est écrit par un auteur.» PASSO 2: forma: «être» (no tempo da ativa) + particípio passado + «par» + agente. PASSO 3: o particípio concorda com o sujeito da passiva: «La maison est construite.» «Les livres sont vendus.» PASSO 4: o tempo do «être» é o tempo da ativa: presente «est écrit», passé composé «a été écrit», imparfait «était écrit», futur «sera écrit». PASSO 5: «par» indica o agente ativo: «Le livre a été écrit par Marie.» «De» é usado com sentimentos ou estado: «Il est aimé de tous.» «Elle est connue de tous.» PASSO 6: o agente pode ser omitido: «Le magasin est fermé.» «Le repas est servi.» PASSO 7: na ativa, o objeto direto vira sujeito da passiva: «Marie ouvre la porte.» → «La porte est ouverte par Marie.» PASSO 8: só verbos com objeto direto têm passiva: «dormir», «aller» e verbos com «à» (téléphoner à) não têm.', {
        tag: 'Passiva',
        comparacao: 'em português a passiva é «o livro foi escrito por Marie» e é mais rara na fala. O francês usa a passiva mais na escrita e no jornalismo. Na fala, prefere a ativa com «on»: «on a écrit ce livre», «on vend des fleurs ici».',
        tabela: [
          { tempo: 'présent', ativa: 'Marie écrit un livre.', passiva: 'Un livre est écrit par Marie.' }, { tempo: 'passé composé', ativa: 'Marie a écrit un livre.', passiva: 'Un livre a été écrit par Marie.' }, { tempo: 'imparfait', ativa: 'Marie écrivait un livre.', passiva: 'Un livre était écrit par Marie.' }, { tempo: 'futur', ativa: 'Marie écrira un livre.', passiva: 'Un livre sera écrit par Marie.' },
        ],
        erros: [['Le livre est écrit de Marie.', 'Le livre est écrit par Marie.', 'Agente ativo: «par».'], ['La maison est construit.', 'La maison est construite.', 'Concordância.'], ['Le livre a écrit par Marie.', 'Le livre a été écrit par Marie.', 'Falta «été».'], ['Il est téléphoné par Marie.', 'Marie lui téléphone.', '«Téléphoner à» não tem passiva.']],
      }),
      producao(5, 'Transforme em voz alta cinco frases ativas em passivas: «Marie ouvre la porte. Paul écrit une lettre.»'),
    ]),
    sessao('S2', 'Quando usar e alternativas', [
      revisao(4, 'Diga em voz alta cinco frases na voz passiva, em tempos diferentes.'),
      palavras(6, [
        ['on', 'õ', 'as pessoas, a gente', ''], ['se vendre', 'sö vãdr', 'vender-se', ''], ['se faire', 'sö fér', 'fazer-se', ''], ['se dire', 'sö dir', 'dizer-se', ''], ['se parler', 'sö parlé', 'falar-se', ''], ['se trouver', 'sö truvé', 'encontrar-se', ''],
      ]),
      gramatica(12, 'Como evitar a passiva', 'PASSO 1: na fala, use «on» quando o agente é indeterminado: «On parle français ici.» (em vez de «Le français est parlé ici»). PASSO 2: use a forma pronominal para coisas e hábitos: «Ça se dit.» «Le vin se vend ici.» «Ça ne se fait pas.» PASSO 3: «se faire» + infinitivo expressa que alguém sofre algo: «Il s\'est fait voler son portable.» (tiraram o celular dele) «Je me suis fait couper les cheveux.» (cortei o cabelo) PASSO 4: «se faire» é informal e muito comum; evita a passiva em contextos de infortúnio. PASSO 5: «il paraît que» e «on dit que» para atribuir sem dar fonte: «On dit que ce film est excellent.» PASSO 6: na imprensa, a passiva destaca o fato: «Le président a été élu hier.» PASSO 7: com «par», o agente aparece; sem «par», o foco é o resultado: «Le magasin est fermé.» PASSO 8: tempos: «est fermé» = estado; «a été fermé» = ação.', {
        tag: 'Passiva',
        comparacao: 'em português dizemos «vendem-se casas» e «fala-se francês aqui». O francês faz o mesmo com «on» e com a forma pronominal: «on parle français», «ça se vend». «Se faire» + infinitivo (tomar algo, sofrer algo) é muito natural e não tem equivalente direto: «se faire voler» é «ser roubado».',
        tabela: [
          { ideia: 'agente indeterminado', exemplo: 'On parle français ici.' }, { ideia: 'hábito ou regra', exemplo: 'Ça ne se fait pas.' }, { ideia: 'sofrer uma ação', exemplo: 'Il s\'est fait voler son portable.' }, { ideia: 'fazer algo por outro', exemplo: 'Je me suis fait couper les cheveux.' }, { ideia: 'imprensa', exemplo: 'Le président a été élu hier.' }, { ideia: 'estado', exemplo: 'Le magasin est fermé.' },
        ],
        erros: [['Il a été volé son portable.', 'Il s\'est fait voler son portable.', '«Se faire voler».'], ['Le vin est se vend ici.', 'Le vin se vend ici.', 'Forma pronominal.'], ['On parlent français.', 'On parle français.', '«On» + 3ª pessoa.'], ['Ça ne fait pas.', 'Ça ne se fait pas.', 'Forma pronominal.']],
      }),
      producao(8, 'Explique em voz alta oito coisas que «ça ne se fait pas» na sua cultura e na cultura francesa.'),
    ]),
    sessao('S3', 'Notícias e cenários', [
      revisao(4, 'Transforme em ativa: «Le pont a été construit par une entreprise.»'),
      palavras(5, [
        ['élire', 'elir', 'eleger', ''], ['publier', 'püblié', 'publicar', ''], ['découvrir', 'dekuvrir', 'descobrir', ''], ['détruire', 'detrüir', 'destruir', ''], ['inaugurer', 'inôgüré', 'inaugurar', ''],
      ]),
      gramatica(8, 'A linguagem das notícias', 'PASSO 1: títulos jornalísticos usam o particípio sem «être»: «Nouveau musée inauguré à Paris.» PASSO 2: relato com passiva: «Un tableau a été volé hier soir au musée.» PASSO 3: fonte: «selon la police» (segundo a polícia), «d\'après les experts» (segundo os especialistas). PASSO 4: resultado: «Le suspect a été arrêté ce matin.» PASSO 5: dado oficial: «Le musée sera ouvert au public lundi.»', {
        tag: 'Passiva',
        comparacao: 'em português escrevemos «o museu será inaugurado na segunda-feira». O francês faz o mesmo: «sera inauguré lundi». A passiva domina o estilo do jornal. Na fala, o mesmo fato vira «ils ont volé un tableau» (ativa com «ils» impessoal).',
        tabela: [
          { formula: 'título', exemplo: 'Nouveau musée inauguré à Paris' }, { formula: 'passiva do fato', exemplo: 'Un tableau a été volé hier soir.' }, { formula: 'fonte', exemplo: 'Selon la police, le suspect a été arrêté.' }, { formula: 'futuro oficial', exemplo: 'Le musée sera ouvert lundi.' },
        ],
        erros: [['Selon de la police, il est arrêté.', 'Selon la police, il a été arrêté.', 'Sem «de» e passiva no passado.'], ['Un tableau a été volée.', 'Un tableau a été volé.', 'Concordância: masculino.'], ['Le musée sera ouvre lundi.', 'Le musée sera ouvert lundi.', 'Particípio de «ouvrir»: «ouvert».'], ['Un tableau a été volé de un voleur.', 'Un tableau a été volé par un voleur.', 'Agente: «par».']],
      }),
      texto(8, 'Une nouvelle surprenante / Uma notícia surpreendente', 'Hier soir, un célèbre tableau a été volé au musée de la ville. Selon la police, le vol a été commis entre minuit et deux heures du matin. Le gardien a été retrouvé sain et sauf. Le tableau, qui avait été peint il y a trois cents ans, est évalué à plusieurs millions d\'euros. Deux suspects ont été arrêtés ce matin et le musée sera fermé jusqu\'à nouvel ordre. On espère que l\'œuvre sera retrouvée rapidement.', 'Ontem à noite, um famoso quadro foi roubado do museu da cidade. Segundo a polícia, o roubo foi cometido entre meia-noite e duas da manhã. O vigia foi encontrado são e salvo. O quadro, que havia sido pintado há trezentos anos, é avaliado em vários milhões de euros. Dois suspeitos foram presos esta manhã e o museu ficará fechado até nova ordem. Espera-se que a obra seja encontrada rapidamente.', [['Qu\'est-ce qui a été volé ?', 'Un célèbre tableau.'], ['Quand le vol a-t-il été commis ?', 'Entre minuit et deux heures du matin.'], ['Qu\'est-il arrivé au gardien ?', 'Il a été retrouvé sain et sauf.'], ['Combien de suspects ont été arrêtés ?', 'Deux.']]),
      producao(5, 'Conte em voz alta uma notícia recente como se fosse um jornalista, usando a passiva.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 41', [
      revisao(5, 'Transforme em voz alta três frases ativas em passivas e três passivas em ativas.'),
      exercicios(20, [
        ouvir('Le livre a été écrit par Marie', ['Le livre a été écrit par Marie', 'Le livre est écrit par Marie', 'Marie a écrit le livre'], 'Le livre a été écrit par Marie', 'Ouça «a été écrit».'), ouvir('Il s\'est fait voler son portable', ['Il s\'est fait voler son portable', 'Il a volé son portable', 'Il a été volé son portable'], 'Il s\'est fait voler son portable', 'Ouça «s\'est fait».'), ouvir('Le musée sera ouvert lundi', ['Le musée sera ouvert lundi', 'Le musée est ouvert lundi', 'Le musée a été ouvert lundi'], 'Le musée sera ouvert lundi', 'Ouça «sera».'),
        ditado('La porte est ouverte par Marie', 'Escreva: La porte est ouverte par Marie.'), ditado('Ça ne se fait pas', 'Escreva: Ça ne se fait pas.'), ditado('On parle français ici', 'Escreva: On parle français ici.'),
        mc('Passiva do passé composé:', ['a été écrit', 'est écrit', 'avait écrit'], 'a été écrit', '«Avoir été» + particípio.'), mc('Qual frase está correta?', ['La maison est construite.', 'La maison est construit.', 'La maison a construite.'], 'La maison est construite.', 'Concordância.'), mc('«Tiraram o celular dele»:', ['Il s\'est fait voler son portable.', 'Il a été volé son portable.', 'On a volé lui son portable.'], 'Il s\'est fait voler son portable.', '«Se faire» + infinitivo.'), mc('Agente da passiva:', ['par', 'de', 'avec'], 'par', '«Par» + agente.'),
        lacuna('Le livre ___ écrit par Marie. (foi)', ['a été', 'est', 'était'], 'a été', 'Passé composé.'), lacuna('Les livres ___ vendus ici. (são)', ['sont', 'est', 'ont'], 'sont', 'Plural.'), lacuna('Le magasin ___ fermé. (está)', ['est', 'a', 'sera'], 'est', 'Estado.'), lacuna('Il est aimé ___ tous.', ['de', 'par', 'à'], 'de', 'Sentimento: «de».'),
        ordem('Ordene: «Le tableau a été volé hier soir.»', ['Le', 'tableau', 'a', 'été', 'volé', 'hier', 'soir'], 'Le tableau a été volé hier soir.', 'Passiva no passado.'), ordem('Ordene: «Ça ne se fait pas.»', ['Ça', 'ne', 'se', 'fait', 'pas'], 'Ça ne se fait pas.', 'Forma pronominal.'),
        livre('Escreva em francês: O livro foi escrito por Marie. Fala-se francês aqui. Roubaram o meu celular.', 'Le livre a été écrit par Marie. On parle français ici. On m\'a volé mon portable.'),
        lacuna('La maison a été ___ en 1900. (construir)', ['construit', 'construire', 'construite'], 'construite', 'O particípio concorda com «maison».'),
        lacuna('Les lettres ont été ___ par Marie. (escrever)', ['écrites', 'écrits', 'écrit'], 'écrites', 'Feminino plural: «écrites».'),
        lacuna('Le président a été ___ hier. (eleger)', ['élire', 'élu', 'élit'], 'élu', 'Particípio de «élire»: «élu».'),
        lacuna('Il s\'est fait ___ son portable. (voler)', ['volé', 'vole', 'voler'], 'voler', '«Se faire» + infinitivo.'),
        lacuna('Elle est connue ___ tous. (de)', ['de', 'par', 'à'], 'de', 'Com estado e sentimento, usa-se «de».'),
        mc('Qual frase está correta?', ['Les clés ont été trouvé.', 'Les clés ont été trouvées.', 'Les clés sont été trouvées.'], 'Les clés ont été trouvées.', '«Ont été» + particípio concordando com «clés».'),
        mc('Qual alternativa evita a passiva em «Le français est parlé ici»?', ['On parlent français ici.', 'Se parle français ici.', 'On parle français ici.'], 'On parle français ici.', '«On» + verbo na forma de «il».'),
        mc('Como dizer «O livro será publicado»?', ['Le livre sera publié.', 'Le livre est publié.', 'Le livre sera publier.'], 'Le livre sera publié.', 'Passiva no futuro: «sera» + particípio.'),
        mc('Qual verbo NÃO tem voz passiva?', ['écrire', 'dormir', 'ouvrir'], 'dormir', 'Só verbos com objeto direto têm passiva.'),
        ordem('Ordene: «O suspeito foi preso esta manhã.»', ['Le', 'suspect', 'a', 'été', 'arrêté', 'ce', 'matin'], 'Le suspect a été arrêté ce matin.', '«A été» + particípio.'),
        ordem('Ordene: «O vinho se vende em toda a região.»', ['Le', 'vin', 'se', 'vend', 'dans', 'toute', 'la', 'région'], 'Le vin se vend dans toute la région.', 'Forma pronominal com sentido passivo.'),
        livre('Escreva em francês: A casa foi construída em 1900. O artigo foi publicado ontem.', 'La maison a été construite en 1900. L\'article a été publié hier.'),
        livre('Escreva em francês: Dizem que este filme é excelente. Eu cortei o cabelo ontem (use «se faire»).', 'On dit que ce film est excellent. Je me suis fait couper les cheveux hier.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma notícia importante, com passiva e «on».'),
    ]),
  ],
});
