import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 10, titulo: 'Aller, futuro próximo, transportes e direções', nivel: 'a1',
  objetivo: 'Usar «aller» para ir a lugares e falar de planos com o futuro próximo, escolher o meio de transporte e dar e pedir direções com o imperativo.',
  nota: 'Você fala de aonde vai, de seus planos e de como chegar. Próxima aula: a rotina diária e os verbos pronominais.',
  sessoes: [
    sessao('S1', 'Aller e os meios de transporte', [
      revisao(5, 'Peça em voz alta, em um restaurante imaginário, duas comidas e uma bebida, e peça a conta.'),
      palavras(8, [
        ['aller', 'alé', 'ir', ''], ['le train', 'lê trẽ', 'o trem', ''], ['le bus', 'lê büs', 'o ônibus', ''], ['le métro', 'lê metrô', 'o metrô', ''], ['la voiture', 'la vuatür', 'o carro', ''], ['le vélo', 'lê velô', 'a bicicleta', ''], ['à pied', 'a pié', 'a pé', ''], ['l\'avion', 'lavyõ', 'o avião', ''],
      ]),
      gramatica(12, 'Le verbe aller', 'PASSO 1: «aller» (ir) é irregular: «je vais, tu vas, il/elle/on va, nous allons, vous allez, ils/elles vont». PASSO 2: para dizer aonde vai, use «aller à» + lugar: «Je vais à Paris.» «Je vais au café.» «Je vais à la gare.» «Je vais aux États-Unis.» PASSO 3: com países femininos e masculinos que começam por vogal, use «en»: «Je vais en France.» PASSO 4: para ir à casa ou ao lugar de alguém, use «chez»: «Je vais chez Paul.» «Je vais chez le médecin.» «Je vais chez moi.» PASSO 5: para o transporte, use «en» + veículo fechado: «en train», «en voiture», «en avion», «en bus», «en métro»; use «à» com os que se monta: «à vélo», «à moto»; e «à pied» para caminhar. PASSO 6: «Comment est-ce que tu vas au travail ?» → «J\'y vais en métro.» (o «y» fica para a aula 14). PASSO 7: não confunda «aller» (ir) com «être» (estar): «Je vais bien» = estou bem.', {
        tag: 'Verbos',
        comparacao: 'em português «vou à Paris», «vou de trem», «vou a pé». O francês diferencia «en» (veículos fechados) e «à» (que se monta): «en train», mas «à vélo».',
        tabelas: [
          { titulo: 'aller', linhas: [
            { pronome: 'je', forma: 'vais', exemplo: 'Je vais à Paris.' }, { pronome: 'tu', forma: 'vas', exemplo: 'Tu vas au café.' }, { pronome: 'il / elle / on', forma: 'va', exemplo: 'Elle va chez Paul.' },
            { pronome: 'nous', forma: 'allons', exemplo: 'Nous allons en France.' }, { pronome: 'vous', forma: 'allez', exemplo: 'Vous allez à la gare.' }, { pronome: 'ils / elles', forma: 'vont', exemplo: 'Ils vont au travail.' },
          ] },
          { titulo: 'Como ir', linhas: [
            { meio: 'en train, en bus, en métro, en voiture, en avion', regra: 'en + veículo fechado', exemplo: 'Je vais en train.' }, { meio: 'à vélo, à moto', regra: 'à + o que se monta', exemplo: 'Je vais à vélo.' }, { meio: 'à pied', regra: 'a pé', exemplo: 'Nous allons à pied.' },
          ] },
        ],
        erros: [['Je vais à le café.', 'Je vais au café.', '«à + le = au».'], ['Je vais à la France.', 'Je vais en France.', 'Países femininos: «en».'], ['Je vais à Paul.', 'Je vais chez Paul.', 'Para pessoas, use «chez».'], ['Je vais par train.', 'Je vais en train.', '«En» + veículo.']],
      }),
      producao(5, 'Diga aonde você vai hoje, amanhã e no fim de semana, e como vai: «Je vais… en/à…»'),
    ]),
    sessao('S2', 'O futuro próximo', [
      revisao(4, 'Conjugue «aller» de memória e diga como você vai ao trabalho ou à escola.'),
      palavras(6, [
        ['demain', 'demẽ', 'amanhã', ''], ['ce soir', 'se suár', 'esta noite', ''], ['ce week-end', 'se uikénd', 'neste fim de semana', ''], ['la semaine prochaine', 'la semén proxén', 'na semana que vem', ''], ['bientôt', 'biẽtô', 'em breve', ''], ['dans deux jours', 'dã dö jur', 'daqui a dois dias', ''],
      ]),
      gramatica(12, 'Aller + infinitivo: o futuro próximo', 'PASSO 1: para falar do futuro próximo, use «aller» conjugado + verbo no infinitivo: «Je vais manger.» «Nous allons partir.» PASSO 2: o verbo no infinitivo não muda: «je vais parler», «tu vas parler», «ils vont parler». PASSO 3: marcadores de tempo: «demain», «ce soir», «ce week-end», «la semaine prochaine», «dans deux jours», «bientôt». PASSO 4: negação em volta de «aller»: «Je ne vais pas partir.» PASSO 5: pergunta: «Qu\'est-ce que tu vas faire demain ?» PASSO 6: use o futuro próximo para planos, intenções e coisas quase certas: «Il va pleuvoir.» (vai chover). PASSO 7: com o verbo pronominal, o pronome fica antes do infinitivo: «Je vais me coucher» (aula 11).', {
        tag: 'Futuro',
        comparacao: 'o português também usa «ir + infinitivo» («vou comer»). O francês faz exatamente igual: «je vais manger». É um dos pontos mais fáceis para um brasileiro.',
        tabela: [
          { forma: 'afirmativa', frase: 'Je vais manger au restaurant.' }, { forma: 'negativa', frase: 'Je ne vais pas manger ici.' }, { forma: 'pergunta', frase: 'Tu vas manger avec nous ?' }, { forma: 'com tempo', frase: 'Demain, nous allons partir à huit heures.' }, { forma: 'previsão', frase: 'Il va pleuvoir ce soir.' },
        ],
        erros: [['Je vais mangé.', 'Je vais manger.', 'Depois de «aller», infinitivo.'], ['Je vais pas manger. (por escrito)', 'Je ne vais pas manger.', 'Por escrito, use «ne… pas».'], ['Je ne pas vais manger.', 'Je ne vais pas manger.', '«Ne» e «pas» envolvem «vais».'], ['Nous allons à manger.', 'Nous allons manger.', 'Sem preposição entre «aller» e o infinitivo.']],
      }),
      producao(8, 'Diga oito planos para esta semana, com «aller» + infinitivo e marcadores de tempo.'),
    ]),
    sessao('S3', 'Imperativo e direções', [
      revisao(4, 'Diga três planos para o fim de semana e um plano que você não vai fazer.'),
      palavras(5, [
        ['Tournez à gauche', 'turné a gôx', 'vire à esquerda', ''], ['Allez tout droit', 'alé tu drua', 'siga em frente', ''], ['Prenez la deuxième rue', 'prené la dözyém rü', 'pegue a segunda rua', ''], ['Traversez la place', 'traversé la plas', 'atravesse a praça', ''], ['C\'est à cinq minutes', 'sé a sẽk minüt', 'é a cinco minutos', ''],
      ]),
      gramatica(8, 'O imperativo e as direções', 'PASSO 1: o imperativo tem três formas: «tu», «nous» e «vous», sem o pronome: «Parle !», «Parlons !», «Parlez !». PASSO 2: nos verbos em «-er», a forma de «tu» perde o «-s»: «Tu parles → Parle !» PASSO 3: para negar, envolva o verbo: «Ne parle pas !», «Ne tournez pas à gauche.» PASSO 4: ordinais para as ruas: «la première», «la deuxième», «la troisième». PASSO 5: direções úteis: «Allez tout droit», «Tournez à droite/gauche», «Prenez la première rue», «Traversez le pont», «C\'est à cinq minutes à pied». PASSO 6: três imperativos irregulares: «être» → «sois, soyons, soyez»; «avoir» → «aie, ayons, ayez»; «aller» → «va, allons, allez».', {
        tag: 'Imperativo',
        comparacao: 'em português o imperativo também tem formas próprias («fala», «falemos», «falai»). A forma «tu» do francês perde o «s» nos verbos em -er: «parle», não «parles».',
        tabela: [
          { pronome: 'tu', forma: 'Parle !', negativa: 'Ne parle pas !' }, { pronome: 'nous', forma: 'Parlons !', negativa: 'Ne parlons pas !' }, { pronome: 'vous', forma: 'Parlez !', negativa: 'Ne parlez pas !' }, { pronome: 'direção', forma: 'Tournez à gauche.', negativa: 'Ne tournez pas à droite.' },
        ],
        erros: [['Parles !', 'Parle !', 'Em -er, o imperativo de «tu» perde o «s».'], ['Allez tout droite.', 'Allez tout droit.', '«Tout droit» é invariável.'], ['Tourne à la gauche.', 'Tourne à gauche.', 'Sem artigo.'], ['Ne tournez à gauche pas.', 'Ne tournez pas à gauche.', 'A negação envolve o verbo.']],
      }),
      dialogo(8, 'Pour aller à la gare / Para ir à estação', 'Inès pergunta a Pierre como chegar à estação.', [
        ['Inès', 'Excusez-moi, monsieur. Pour aller à la gare, s\'il vous plaît ?', 'Com licença, senhor. Para ir à estação, por favor?'], ['Pierre', 'C\'est facile. Allez tout droit, puis tournez à gauche.', 'É fácil. Siga em frente, depois vire à esquerda.'], ['Inès', 'Et après ?', 'E depois?'], ['Pierre', 'Prenez la deuxième rue à droite. La gare est en face de la poste.', 'Pegue a segunda rua à direita. A estação fica em frente ao correio.'], ['Inès', 'C\'est loin ?', 'É longe?'], ['Pierre', 'Non, c\'est à cinq minutes à pied. Bon voyage !', 'Não, é a cinco minutos a pé. Boa viagem!'],
      ]),
      producao(5, 'Dê, em voz alta, direções da sua casa até um lugar que você conhece, com cinco imperativos.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 10', [
      revisao(5, 'Conte, em voz alta, o que você vai fazer amanhã, com «aller» + infinitivo.'),
      exercicios(20, [
        ouvir('Nous allons en France', ['Nous allons en France', 'Je vais en France', 'Ils vont en France'], 'Nous allons en France', 'Ouça «allons».'), ouvir('Je vais manger', ['Je vais manger', 'Je mange', 'Je vais mangé'], 'Je vais manger', 'Ouça «vais» e o infinitivo.'), ouvir('Tournez à gauche', ['Tournez à gauche', 'Tournez à droite', 'Allez tout droit'], 'Tournez à gauche', 'Ouça «gauche».'),
        ditado('Je vais au travail en métro', 'Escreva: Je vais au travail en métro.'), ditado('Ne tournez pas à droite', 'Escreva: Ne tournez pas à droite.'), ditado('Elle va chez le médecin', 'Escreva: Elle va chez le médecin.'),
        mc('Qual é a forma de «aller» para «nous»?', ['allons', 'allez', 'vont'], 'allons', '«nous allons».'), mc('Como dizer «vou de trem»?', ['Je vais en train.', 'Je vais à train.', 'Je vais par train.'], 'Je vais en train.', '«En» + veículo fechado.'), mc('Qual é o imperativo de «tu parles»?', ['Parle !', 'Parles !', 'Parlez !'], 'Parle !', 'Perde o «s».'), mc('Como dizer «vou à casa do Paul»?', ['Je vais chez Paul.', 'Je vais à Paul.', 'Je vais au Paul.'], 'Je vais chez Paul.', '«Chez» + pessoa.'),
        lacuna('Je vais ___ vélo. (de)', ['à', 'en', 'par'], 'à', '«À vélo».'), lacuna('Nous ___ partir demain. (vamos)', ['allons', 'allez', 'vais'], 'allons', '«nous allons».'), lacuna('Prenez ___ deuxième rue. (a)', ['la', 'le', 'les'], 'la', '«Rue» é feminino.'), lacuna('Tu ___ au café. (vais)', ['vas', 'va', 'vais'], 'vas', '«tu vas».'),
        ordem('Ordene: «Nous allons manger au restaurant demain.»', ['Nous', 'allons', 'manger', 'au', 'restaurant', 'demain'], 'Nous allons manger au restaurant demain.', 'Futuro próximo.'), ordem('Ordene: «Allez tout droit, puis tournez à gauche.»', ['Allez', 'tout', 'droit,', 'puis', 'tournez', 'à', 'gauche'], 'Allez tout droit, puis tournez à gauche.', 'Direções com o imperativo.'),
        livre('Escreva em francês: Amanhã eu vou ao Brasil de avião. Vire à direita.', 'Demain, je vais au Brésil en avion. Tournez à droite.'),
        lacuna('Elle ___ à la gare. (vai)', ['vas', 'va', 'vont'], 'va', 'Com «elle», «aller» faz «va».'),
        lacuna('Ils ___ en France. (vão)', ['vais', 'allez', 'vont'], 'vont', 'Com «ils», «aller» faz «vont».'),
        lacuna('Je vais ___ le médecin. (ao)', ['chez', 'à', 'au'], 'chez', 'Para ir à casa ou ao consultório de alguém, usa-se «chez».'),
        lacuna('Nous allons ___ voiture. (de)', ['à', 'en', 'par'], 'en', 'Veículo fechado pede «en»: «en voiture».'),
        lacuna('___ à gauche ! (Vire — vous)', ['Tournes', 'Tourne', 'Tournez'], 'Tournez', 'O imperativo de «vous» termina em «-ez».'),
        mc('Qual meio de transporte usa «à»?', ['à vélo', 'en train', 'en avion'], 'à vélo', 'O que se monta usa «à»: «à vélo».'),
        mc('Como dizer «Vou à França»?', ['Je vais à France.', 'Je vais en France.', 'Je vais au France.'], 'Je vais en France.', 'País feminino pede «en».'),
        mc('Qual é a negação correta de «Je vais partir»?', ['Je ne pas vais partir.', 'Je vais ne pas partir.', 'Je ne vais pas partir.'], 'Je ne vais pas partir.', '«Ne» e «pas» envolvem «vais».'),
        mc('Qual é o imperativo de «aller» para «tu»?', ['va', 'vas', 'aille'], 'va', '«Va !», sem o «s» final.'),
        ordem('Ordene: «Eles vão à estação de ônibus.»', ['Ils', 'vont', 'à', 'la', 'gare', 'en', 'bus'], 'Ils vont à la gare en bus.', '«Aller à» + lugar; «en» + veículo.'),
        ordem('Ordene: «Pegue a primeira rua à esquerda.»', ['Prenez', 'la', 'première', 'rue', 'à', 'gauche'], 'Prenez la première rue à gauche.', 'Imperativo de «vous» com a rua no feminino.'),
        livre('Escreva em francês: Eu vou ao correio a pé. Amanhã vamos à França.', 'Je vais à la poste à pied. Demain, nous allons en France.'),
        livre('Escreva em francês (use «vous»): Vire à esquerda, depois siga em frente. Nós não vamos de carro.', 'Tournez à gauche, puis allez tout droit. Nous n\'allons pas en voiture.'),
      ]),
      producao(5, 'Planeje, em voz alta, uma viagem de fim de semana: aonde vai, como vai e o que vai fazer.'),
    ]),
  ],
});
