import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 42, titulo: 'Gérondif e particípio presente', nivel: 'b1',
  objetivo: 'Usar o gérondif («en parlant») para ações simultâneas, meio e condição, e reconhecer o particípio presente («un homme parlant») e o infinitivo depois de preposições.',
  nota: 'Você liga duas ações em uma frase só. Próxima aula: relativos compostos.',
  sessoes: [
    sessao('S1', 'O gérondif', [
      revisao(5, 'Transforme em voz alta uma frase ativa em passiva e uma passiva em ativa.'),
      palavras(8, [
        ['en marchant', 'ã marxã', 'andando', ''], ['en mangeant', 'ã mãjã', 'comendo', ''], ['en parlant', 'ã parlã', 'falando', ''], ['en lisant', 'ã lizã', 'lendo', ''], ['en travaillant', 'ã travaiiã', 'trabalhando', ''], ['en conduisant', 'ã kõdüizã', 'dirigindo', ''], ['tout en', 'tu tã', 'ao mesmo tempo que', ''], ['en même temps', 'ã mém tã', 'ao mesmo tempo', ''],
      ]),
      gramatica(12, 'En marchant, en mangeant', 'PASSO 1: o gérondif forma-se com «en» + particípio presente. O particípio presente: radical de «nous» do presente + «-ant»: «nous parlons → parlant», «nous finissons → finissant», «nous prenons → prenant». PASSO 2: exceções: «être → étant», «avoir → ayant», «savoir → sachant». PASSO 3: o gérondif se refere ao SUJEITO da frase: «Je marche en écoutant de la musique.» (eu marcho e eu ouço) PASSO 4: usos: simultaneidade («Je mange en lisant.»), meio («On apprend en pratiquant.»), condição («En travaillant plus, tu réussiras.»), causa («En arrivant tard, il a raté le début.»). PASSO 5: «tout en» reforça a simultaneidade ou contraste: «Il travaille tout en écoutant la radio.» PASSO 6: o pronome vem antes do particípio: «En le voyant, j\'ai souri.» PASSO 7: negação: «En ne parlant pas, il évite les problèmes.» PASSO 8: diferença do português: o português usa o gerúndio («andando»), mas o francês só o usa com «en».', {
        tag: 'Gérondif',
        comparacao: 'em português o gerúndio é livre: «ele chegou correndo», «ela falou sorrindo». O francês exige «en»: «il est arrivé en courant», «elle a parlé en souriant». Sem o «en», o particípio presente em francês é quase só escrita.',
        tabela: [
          { infinitivo: 'parler', gerondio: 'en parlant', exemplo: 'Il marche en parlant.' }, { infinitivo: 'finir', gerondio: 'en finissant', exemplo: 'Elle sourit en finissant.' }, { infinitivo: 'prendre', gerondio: 'en prenant', exemplo: 'En prenant le bus, tu arrives plus vite.' }, { infinitivo: 'être', gerondio: 'en étant', exemplo: 'En étant malade, il reste chez lui.' }, { infinitivo: 'avoir', gerondio: 'en ayant', exemplo: 'En ayant faim, je mange.' },
        ],
        erros: [['Je marche écoutant de la musique.', 'Je marche en écoutant de la musique.', 'Sem «en» não vale.'], ['Il mange en ils parlent.', 'Il mange en parlant.', 'Mesmo sujeito.'], ['Je mange en lis.', 'Je mange en lisant.', 'Particípio presente.'], ['En mangeons, on parle.', 'En mangeant, on parle.', 'Gérondif: «-ant» invariável.']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que você faz ao mesmo tempo com «en» + gérondif.'),
    ]),
    sessao('S2', 'Meio, condição e causa', [
      revisao(4, 'Forme em voz alta o gérondif de: «écouter, finir, boire, faire, voir, venir».'),
      palavras(6, [
        ['en pratiquant', 'ã pratikã', 'praticando', ''], ['en étudiant', 'ã etüdiã', 'estudando', ''], ['en voyageant', 'ã vuaiajã', 'viajando', ''], ['en arrivant', 'ã arivã', 'ao chegar', ''], ['en sortant', 'ã sortã', 'ao sair', ''], ['en rentrant', 'ã rãtrã', 'ao voltar', ''],
      ]),
      gramatica(12, 'O que o gérondif expressa', 'PASSO 1: meio ou modo (como?): «Je progresse en lisant.» «On apprend en faisant.» PASSO 2: tempo (quando?): «En arrivant à la maison, j\'ai vu une lettre.» «En sortant du bureau, il a pris un taxi.» PASSO 3: condição (se): «En partant tôt, tu éviteras les bouchons.» (se você sair cedo…) PASSO 4: causa: «En perdant mes clés, j\'ai dû appeler un serrurier.» PASSO 5: oposição com «tout en»: «Tout en étant fatigué, il a continué.» PASSO 6: não use o gérondif quando os sujeitos são diferentes: «Je l\'ai vu qui sortait» (e não «en sortant»). PASSO 7: com verbos pronominais: «En se levant, il a vu la neige.» PASSO 8: com «aller» o gérondif marca progressão: «La situation va en s\'améliorant.» (vai melhorando)', {
        tag: 'Gérondif',
        comparacao: 'em português o gerúndio faz tudo isso, e às vezes mais («falando assim, ninguém entende»). Em francês, a lógica é a mesma, mas só vale quando o sujeito do gérondif é o mesmo da frase principal. «Je l\'ai vu en sortant» significa que EU saía, não ele.',
        tabela: [
          { valor: 'meio', exemplo: 'On apprend en faisant.' }, { valor: 'tempo', exemplo: 'En arrivant, j\'ai vu une lettre.' }, { valor: 'condição', exemplo: 'En partant tôt, tu éviteras les bouchons.' }, { valor: 'causa', exemplo: 'En perdant mes clés, j\'ai dû appeler un serrurier.' }, { valor: 'oposição', exemplo: 'Tout en étant fatigué, il a continué.' },
        ],
        erros: [['En arrivant, la lettre était sur la table.', 'En arrivant, j\'ai vu la lettre sur la table.', 'Sujeito do gérondif = sujeito principal.'], ['En partir tôt, tu éviteras les bouchons.', 'En partant tôt, tu éviteras les bouchons.', 'Particípio presente.'], ['Je l\'ai vu en sortant. (ele saía)', 'Je l\'ai vu qui sortait.', 'Sujeitos diferentes.'], ['Je progresse en lisent.', 'Je progresse en lisant.', 'Invariável.']],
      }),
      producao(8, 'Diga em voz alta oito frases com gérondif: meio, tempo, condição e causa.'),
    ]),
    sessao('S3', 'Particípio presente e infinitivo', [
      revisao(4, 'Complete: «En ___ (arriver), j\'ai vu… Je progresse en ___ (lire).»'),
      palavras(5, [
        ['une personne parlant français', 'ün persón parlã frãsé', 'uma pessoa que fala francês', ''], ['un produit contenant du sucre', 'ẽ prodüi kõtönã dü sükr', 'um produto que contém açúcar', ''], ['avant de', 'avã dö', 'antes de', ''], ['après avoir', 'aprê zavuár', 'depois de ter', ''], ['sans', 'sã', 'sem', ''],
      ]),
      gramatica(8, 'Particípio presente e preposições + infinitivo', 'PASSO 1: o particípio presente SEM «en» funciona como adjetivo ou como um «qui» condensado, quase só na escrita: «Un homme parlant français» (= qui parle français). «Les élèves ayant fini peuvent partir.» PASSO 2: adjetivos verbais (concordam): «une histoire intéressante», «des films amusants». PASSO 3: preposição + infinitivo: «avant de partir», «après avoir mangé», «pour réussir», «sans parler», «au lieu de rester». PASSO 4: «sans» + infinitivo: «Il est parti sans dire au revoir.» PASSO 5: «au lieu de» + infinitivo: «Au lieu de rester, il est parti.»', {
        tag: 'Gérondif',
        comparacao: 'em português dizemos «sem falar», «antes de sair», «depois de comer». O francês usa as mesmas preposições com o infinitivo: «sans parler», «avant de sortir», «après avoir mangé». A diferença é o infinitivo passado depois de «après».',
        tabela: [
          { estrutura: 'avant de + infinitivo', exemplo: 'Avant de partir, il a fermé la porte.' }, { estrutura: 'après avoir + particípio', exemplo: 'Après avoir mangé, il est sorti.' }, { estrutura: 'sans + infinitivo', exemplo: 'Il est parti sans dire au revoir.' }, { estrutura: 'au lieu de + infinitivo', exemplo: 'Au lieu de rester, il est parti.' }, { estrutura: 'pour + infinitivo', exemplo: 'Il travaille pour réussir.' },
        ],
        erros: [['Il est parti sans disant au revoir.', 'Il est parti sans dire au revoir.', '«Sans» + infinitivo.'], ['Avant partir, il a fermé la porte.', 'Avant de partir, il a fermé la porte.', '«Avant de».'], ['Au lieu rester, il est parti.', 'Au lieu de rester, il est parti.', '«Au lieu de».'], ['Après manger, il est sorti.', 'Après avoir mangé, il est sorti.', 'Infinitivo passado.']],
      }),
      dialogo(8, 'Un conseil / Um conselho', 'Thomas aconselha Anna a melhorar o francês.', [
        ['Anna', 'Je n\'arrive pas à progresser en français. Que me conseilles-tu ?', 'Não consigo progredir em francês. O que você me aconselha?'], ['Thomas', 'En lisant un peu chaque jour, tu vas vite progresser.', 'Lendo um pouco todo dia, você vai progredir rapidamente.'], ['Anna', 'Je lis déjà, mais je ne comprends pas tout.', 'Já leio, mas não entendo tudo.'], ['Thomas', 'Essaie de lire sans traduire chaque mot. Tu apprendras en devinant le sens.', 'Tente ler sem traduzir cada palavra. Você aprenderá adivinhando o sentido.'], ['Anna', 'Et pour parler ?', 'E para falar?'], ['Thomas', 'Parle avec des Français en écoutant bien leur façon de dire les choses. On apprend vraiment en pratiquant.', 'Fale com franceses, ouvindo bem a forma como dizem as coisas. Aprende-se de verdade praticando.'],
      ]),
      producao(5, 'Dê em voz alta um conselho a alguém que quer aprender uma língua, usando gérondif.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 42', [
      revisao(5, 'Dê três conselhos com gérondif em voz alta.'),
      exercicios(20, [
        ouvir('Je marche en écoutant de la musique', ['Je marche en écoutant de la musique', 'Je marche et j\'écoute de la musique', 'Je marchais en écoutant de la musique'], 'Je marche en écoutant de la musique', 'Ouça «en écoutant».'), ouvir('En arrivant, j\'ai vu une lettre', ['En arrivant, j\'ai vu une lettre', 'En arrivant, une lettre était là', 'Quand j\'arrive, je vois une lettre'], 'En arrivant, j\'ai vu une lettre', 'Ouça «en arrivant».'), ouvir('Il est parti sans dire au revoir', ['Il est parti sans dire au revoir', 'Il est parti en disant au revoir', 'Il est parti avant de dire au revoir'], 'Il est parti sans dire au revoir', 'Ouça «sans dire».'),
        ditado('On apprend en pratiquant', 'Escreva: On apprend en pratiquant.'), ditado('Avant de partir, il a fermé la porte', 'Escreva: Avant de partir, il a fermé la porte.'), ditado('Après avoir mangé, il est sorti', 'Escreva: Après avoir mangé, il est sorti.'),
        mc('Gérondif de «parler»:', ['en parlant', 'parlant', 'en parlent'], 'en parlant', '«En» + «-ant».'), mc('Gérondif de «avoir»:', ['en ayant', 'en avant', 'en aillant'], 'en ayant', 'Irregular.'), mc('Qual frase está correta?', ['Je mange en lisant.', 'Je mange lisant.', 'Je mange en lis.'], 'Je mange en lisant.', '«En» obrigatório.'), mc('Qual frase está correta?', ['Il est parti sans dire au revoir.', 'Il est parti sans disant au revoir.', 'Il est parti sans de dire au revoir.'], 'Il est parti sans dire au revoir.', '«Sans» + infinitivo.'),
        lacuna('Je progresse ___ lisant.', ['en', 'à', 'de'], 'en', 'Gérondif.'), lacuna('Avant ___ partir, il a mangé.', ['de', 'à', 'd\''], 'de', '«Avant de».'), lacuna('Au lieu ___ rester, il est parti.', ['de', 'à', 'du'], 'de', '«Au lieu de».'), lacuna('Tu progresseras en ___ . (praticar)', ['pratiquant', 'pratiquer', 'pratiqué'], 'pratiquant', 'Gérondif.'),
        ordem('Ordene: «En arrivant, j\'ai vu une lettre.»', ['En', 'arrivant,', 'j\'ai', 'vu', 'une', 'lettre'], 'En arrivant, j\'ai vu une lettre.', 'Gérondif no início.'), ordem('Ordene: «Il travaille tout en écoutant la radio.»', ['Il', 'travaille', 'tout', 'en', 'écoutant', 'la', 'radio'], 'Il travaille tout en écoutant la radio.', 'Simultaneidade.'),
        livre('Escreva em francês: Eu ando ouvindo música. Praticando, você vai progredir. Ele saiu sem dizer adeus.', 'Je marche en écoutant de la musique. En pratiquant, tu vas progresser. Il est parti sans dire au revoir.'),
        lacuna('Je mange en ___ la radio. (ouvir)', ['écoutant', 'écoutons', 'écouté'], 'écoutant', 'Gérondif: «en» + radical de «nous» + «-ant».'),
        lacuna('En ___ tôt, tu éviteras les bouchons. (partir)', ['partir', 'partant', 'parti'], 'partant', 'Condição: «en partant» = se você partir.'),
        lacuna('Ils apprennent en ___ . (jogar)', ['jouent', 'jouer', 'jouant'], 'jouant', 'Depois de «en», usa-se o particípio presente.'),
        lacuna('Il a quitté la salle ___ parler à personne. (sem)', ['sans', 'avant', 'pour'], 'sans', '«Sans» + infinitivo.'),
        lacuna('En ___ du bureau, il a pris un taxi. (sair)', ['sortir', 'sortant', 'sorti'], 'sortant', 'Tempo: «en sortant» = ao sair.'),
        mc('Qual é o gérondif de «finir»?', ['en finisant', 'en finissent', 'en finissant'], 'en finissant', 'Radical de «nous finissons»: «finiss-» + «-ant».'),
        mc('Qual frase está correta?', ['Avant de manger, je me lave les mains.', 'Avant manger, je me lave les mains.', 'Avant de mangeant, je me lave les mains.'], 'Avant de manger, je me lave les mains.', '«Avant de» + infinitivo.'),
        mc('Qual frase usa o gérondif para expressar condição?', ['Je mange en lisant.', 'En travaillant plus, tu réussiras.', 'Il est parti sans parler.'], 'En travaillant plus, tu réussiras.', '«En travaillant plus» = se você trabalhar mais.'),
        mc('Qual é o particípio presente de «savoir»?', ['savant', 'sayant', 'sachant'], 'sachant', '«Savoir» tem forma irregular: «sachant».'),
        ordem('Ordene: «Ele lê o jornal comendo.»', ['Il', 'lit', 'le', 'journal', 'en', 'mangeant'], 'Il lit le journal en mangeant.', 'Simultaneidade: «en» + particípio presente.'),
        ordem('Ordene: «Ela sorriu ao me ver.»', ['Elle', 'a', 'souri', 'en', 'me', 'voyant'], 'Elle a souri en me voyant.', 'O pronome vem antes do particípio.'),
        livre('Escreva em francês: Estudando todos os dias, você vai progredir. Ela saiu sem falar.', 'En étudiant tous les jours, tu vas progresser. Elle est partie sans parler.'),
        livre('Escreva em francês: Antes de sair, eu fecho a porta. Em vez de ficar, ele foi embora.', 'Avant de sortir, je ferme la porte. Au lieu de rester, il est parti.'),
      ]),
      producao(5, 'Fale 1 minuto sobre como você aprende melhor, com gérondif.'),
    ]),
  ],
});
