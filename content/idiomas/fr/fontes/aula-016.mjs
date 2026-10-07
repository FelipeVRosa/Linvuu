import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 16, titulo: 'O passado com «être» e os verbos pronominais', nivel: 'a1',
  objetivo: 'Usar o passé composé com «être» (verbos de movimento e pronominais), fazer a concordância do particípio e contar uma viagem.',
  nota: 'Você já conta o passado com os dois auxiliares. Próxima aula: clima, estações e comparações.',
  sessoes: [
    sessao('S1', 'Verbos que usam «être»', [
      revisao(5, 'Conte em voz alta o que você fez ontem com «j\'ai» + particípio.'),
      palavras(8, [
        ['aller', 'alé', 'ir (allé = ido)', ''], ['venir', 'vönir', 'vir (venu = vindo)', ''], ['arriver', 'arivé', 'chegar', ''], ['partir', 'partir', 'partir, sair (parti)', ''], ['entrer', 'ãtré', 'entrar', ''], ['sortir', 'sortir', 'sair', ''], ['rester', 'resté', 'ficar', ''], ['rentrer', 'rãtré', 'voltar para casa', ''],
      ]),
      gramatica(12, 'Je suis allé: être + particípio', 'PASSO 1: alguns verbos, principalmente de movimento e de mudança, usam «être» no passé composé: «Je suis allé à Paris.» PASSO 2: lista básica: «aller (allé), venir (venu), arriver (arrivé), partir (parti), entrer (entré), sortir (sorti), rester (resté), rentrer (rentré), monter (monté), descendre (descendu), tomber (tombé), naître (né), mourir (mort)». PASSO 3: conjugação de «être»: je suis, tu es, il est, nous sommes, vous êtes, ils sont. Assim: «Je suis arrivé.» «Nous sommes partis.» PASSO 4: o particípio concorda com o sujeito: feminino «+e», plural «+s»: «Elle est allée.» «Ils sont allés.» «Elles sont allées.» PASSO 5: «je» e «tu» concordam com quem fala: homem «Je suis allé», mulher «Je suis allée». PASSO 6: «vous» pode ser «allé» (um), «allée» (uma), «allés» (vários): «Vous êtes allés.» PASSO 7: negação envolve o auxiliar: «Je ne suis pas allé.» «Elle n\'est pas arrivée.» PASSO 8: truque de memória: os verbos de movimento «ir e vir, subir e descer, entrar e sair, chegar e partir, ficar, nascer e morrer, cair».', {
        tag: 'Passado',
        comparacao: 'em português nunca trocamos o auxiliar: «tenho ido», mas dizemos «fui». O francês escolhe entre «avoir» e «être»; e com «être» o particípio varia como um adjetivo: «elle est allée».',
        tabela: [
          { infinitivo: 'aller', participio: 'allé', exemplo: 'Je suis allé à Paris.' }, { infinitivo: 'venir', participio: 'venu', exemplo: 'Elle est venue hier.' }, { infinitivo: 'arriver', participio: 'arrivé', exemplo: 'Nous sommes arrivés tard.' }, { infinitivo: 'partir', participio: 'parti', exemplo: 'Ils sont partis.' }, { infinitivo: 'rester', participio: 'resté', exemplo: 'Je suis resté chez moi.' }, { infinitivo: 'naître', participio: 'né', exemplo: 'Elle est née en 1990.' },
        ],
        erros: [['J\'ai allé à Paris.', 'Je suis allé à Paris.', '«Aller» usa «être».'], ['Elle est allé.', 'Elle est allée.', 'Concordância no feminino.'], ['Ils sont arrivé.', 'Ils sont arrivés.', 'Concordância no plural.'], ['Je suis parti pas.', 'Je ne suis pas parti.', 'Negação em volta do auxiliar.']],
      }),
      producao(5, 'Diga em voz alta: «Hier, je suis allé… Je suis resté… Je suis rentré…» com o seu dia.'),
    ]),
    sessao('S2', 'Verbos pronominais no passado', [
      revisao(4, 'Faça a concordância: «Elle est (allé). Ils sont (arrivé). Elles sont (parti).»'),
      palavras(6, [
        ['se lever', 'sö levé', 'levantar-se', ''], ['se coucher', 'sö kuxé', 'deitar-se', ''], ['se réveiller', 'sö revéié', 'acordar', ''], ['se promener', 'sö promené', 'passear', ''], ['s\'habiller', 'sabiié', 'vestir-se', ''], ['se dépêcher', 'sö depexé', 'apressar-se', ''],
      ]),
      gramatica(12, 'Je me suis levé: pronominais no passado', 'PASSO 1: todos os verbos pronominais usam «être»: «Je me suis levé.» «Tu t\'es couché.» PASSO 2: o pronome («me, te, se, nous, vous, se») fica antes do auxiliar: «Il s\'est réveillé.» PASSO 3: o particípio concorda com o sujeito (quando o pronome é objeto direto): «Elle s\'est levée.» «Nous nous sommes promenés.» «Elles se sont dépêchées.» PASSO 4: negação em volta de pronome + auxiliar: «Je ne me suis pas levé.» «Elle ne s\'est pas couchée.» PASSO 5: pergunta: «Est-ce que tu t\'es levé tôt ?» PASSO 6: «se laver les mains» e outras partes do corpo: o particípio NÃO concorda (o objeto é a parte do corpo): «Elle s\'est lavé les mains.» PASSO 7: na dúvida, na prática, use a concordância normal com o sujeito. PASSO 8: ordem completa: «Ce matin, je me suis réveillé à sept heures, je me suis levé et je me suis habillé.»', {
        tag: 'Passado',
        comparacao: 'em português dizemos «eu me levantei». O francês também: «je me suis levé», mas com o auxiliar «être» entre o pronome e o particípio, que concorda. É mais um motivo para «être» ser a chave dos pronominais.',
        tabela: [
          { pessoa: 'je', frase: 'Je me suis levé(e).' }, { pessoa: 'tu', frase: 'Tu t\'es couché(e).' }, { pessoa: 'il / elle', frase: 'Il s\'est réveillé. / Elle s\'est réveillée.' }, { pessoa: 'nous', frase: 'Nous nous sommes promenés.' }, { pessoa: 'vous', frase: 'Vous vous êtes dépêchés.' }, { pessoa: 'ils / elles', frase: 'Ils se sont habillés. / Elles se sont habillées.' },
        ],
        erros: [['Je me ai levé.', 'Je me suis levé.', 'Pronominal usa «être».'], ['Elle s\'est levé.', 'Elle s\'est levée.', 'Concordância no feminino.'], ['Je me suis pas levé.', 'Je ne me suis pas levé.', 'Negação completa.'], ['Je suis me levé.', 'Je me suis levé.', 'Pronome antes do auxiliar.']],
      }),
      producao(8, 'Conte a sua manhã de ontem em oito frases: «Je me suis réveillé… Je me suis levé… Je me suis habillé…»'),
    ]),
    sessao('S3', 'Contar uma viagem', [
      revisao(4, 'Diga: «Elle s\'est levée à sept heures. Nous nous sommes couchés tard.»'),
      palavras(5, [
        ['le voyage', 'lö vuaiaj', 'a viagem', ''], ['la gare', 'la gar', 'a estação', ''], ['l\'aéroport', 'laeropór', 'o aeroporto', ''], ['le train', 'lö trẽ', 'o trem', ''], ['la valise', 'la valiz', 'a mala', ''],
      ]),
      gramatica(8, 'Avoir ou être? Regra prática', 'PASSO 1: use «être» com os verbos de movimento e de mudança da lista e com todos os pronominais. PASSO 2: use «avoir» com todos os outros, e com verbos que têm objeto direto: «J\'ai pris le train.» «J\'ai visité Paris.» PASSO 3: alguns verbos mudam de auxiliar quando têm objeto: «Je suis sorti» (sem objeto) mas «J\'ai sorti la voiture» (com objeto). PASSO 4: «descendre», «monter», «rentrer», «sortir»: com objeto, usam «avoir». PASSO 5: na dúvida, pergunte: «tem objeto direto?» Se sim, «avoir».', {
        tag: 'Passado',
        comparacao: 'em português o auxiliar «ter» serve para tudo. O francês pede escolha: «être» para o movimento e para os pronominais, «avoir» para o resto. A maioria dos verbos usa «avoir».',
        tabela: [
          { frase: 'Je suis allé à Lyon.', auxiliar: 'être', motivo: 'movimento' }, { frase: 'J\'ai pris le train.', auxiliar: 'avoir', motivo: 'tem objeto' }, { frase: 'Je me suis levé.', auxiliar: 'être', motivo: 'pronominal' }, { frase: 'J\'ai visité Paris.', auxiliar: 'avoir', motivo: 'tem objeto' }, { frase: 'Elle est sortie.', auxiliar: 'être', motivo: 'sem objeto' }, { frase: 'Elle a sorti son téléphone.', auxiliar: 'avoir', motivo: 'tem objeto' },
        ],
        erros: [['J\'ai sorti hier soir.', 'Je suis sorti hier soir.', 'Sem objeto: «être».'], ['Je suis visité Paris.', 'J\'ai visité Paris.', 'Com objeto: «avoir».'], ['Je suis pris le train.', 'J\'ai pris le train.', 'Com objeto: «avoir».'], ['Nous avons restés.', 'Nous sommes restés.', '«Rester» usa «être».']],
      }),
      texto(8, 'Un voyage à Lyon / Uma viagem a Lyon', 'Samedi dernier, je suis allé à Lyon avec ma sœur. Nous sommes partis à sept heures et nous sommes arrivés à neuf heures. Nous avons pris un café à la gare. Puis nous avons visité la ville. Le soir, nous sommes rentrés fatigués mais très contents.', 'No sábado passado, fui a Lyon com minha irmã. Partimos às sete horas e chegamos às nove. Tomamos um café na estação. Depois visitamos a cidade. À noite, voltamos cansados mas muito contentes.', [['Où est allé l\'auteur ?', 'À Lyon.'], ['Avec qui est-il allé ?', 'Avec sa sœur.'], ['À quelle heure sont-ils arrivés ?', 'À neuf heures.'], ['Comment sont-ils rentrés ?', 'Fatigués mais très contents.']]),
      producao(5, 'Conte uma viagem real ou inventada, usando «être» e «avoir» no passado.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 16', [
      revisao(5, 'Conte o seu dia de ontem com os dois auxiliares.'),
      exercicios(20, [
        ouvir('Je suis allé à Paris', ['Je suis allé à Paris', 'J\'ai allé à Paris', 'Je vais à Paris'], 'Je suis allé à Paris', 'Ouça «suis allé».'), ouvir('Elle s\'est levée', ['Elle s\'est levée', 'Elle se lève', 'Elle est levé'], 'Elle s\'est levée', 'Ouça «s\'est».'), ouvir('Nous sommes arrivés', ['Nous sommes arrivés', 'Nous avons arrivé', 'Nous arrivons'], 'Nous sommes arrivés', 'Ouça «sommes».'),
        ditado('Je suis resté chez moi', 'Escreva: Je suis resté chez moi.'), ditado('Elle est partie hier', 'Escreva: Elle est partie hier.'), ditado('Je ne me suis pas levé', 'Escreva: Je ne me suis pas levé.'),
        mc('Qual frase está correta?', ['Je suis allé à Paris.', 'J\'ai allé à Paris.', 'Je ai allé à Paris.'], 'Je suis allé à Paris.', '«Aller» usa «être».'), mc('Qual frase está correta (mulher)?', ['Elle est allée.', 'Elle est allé.', 'Elle a allée.'], 'Elle est allée.', 'Concordância.'), mc('Qual frase está correta?', ['J\'ai pris le train.', 'Je suis pris le train.', 'J\'ai pris le train, parti.'], 'J\'ai pris le train.', 'Com objeto: «avoir».'), mc('Qual frase está correta?', ['Nous nous sommes levés.', 'Nous avons levé.', 'Nous sommes levé.'], 'Nous nous sommes levés.', 'Pronominal usa «être».'),
        lacuna('Elle est ___ à Lyon. (allée)', ['allée', 'allé', 'allés'], 'allée', 'Feminino singular.'), lacuna('Ils sont ___ . (partis)', ['partis', 'parti', 'parties'], 'partis', 'Masculino plural.'), lacuna('J\'___ visité Paris.', ['ai', 'suis', 'a'], 'ai', 'Com objeto: «avoir».'), lacuna('Nous ___ rentrés tard.', ['sommes', 'avons', 'sont'], 'sommes', '«Rentrer» usa «être».'),
        ordem('Ordene: «Elle s\'est levée à sept heures.»', ['Elle', 's\'est', 'levée', 'à', 'sept', 'heures'], 'Elle s\'est levée à sept heures.', 'Pronome + auxiliar + particípio.'), ordem('Ordene: «Je ne suis pas allé.»', ['Je', 'ne', 'suis', 'pas', 'allé'], 'Je ne suis pas allé.', 'ne + auxiliar + pas + particípio.'),
        livre('Escreva em francês: Ontem eu acordei às sete. Eu fui ao trabalho. Eu não voltei tarde.', 'Hier, je me suis réveillé à sept heures. Je suis allé au travail. Je ne suis pas rentré tard.'),
      ]),
      producao(5, 'Fale 1 minuto sobre a sua última viagem ou passeio.'),
    ]),
  ],
});
