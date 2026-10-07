import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 7, titulo: 'Números até 100, horas, dias e meses', nivel: 'a1',
  objetivo: 'Contar até 100, dizer as horas, e falar de dias, meses, datas e estações.',
  nota: 'Você conta, diz que horas são e marca compromissos. Próxima aula: lugares da cidade, «il y a» e demonstrativos.',
  sessoes: [
    sessao('S1', 'Os números de 21 a 100', [
      revisao(5, 'Conte de 0 a 20 em voz alta e diga a sua idade e a de duas pessoas.'),
      palavras(8, [
        ['vingt et un', 'vẽ-té-ẽ', 'vinte e um', ''], ['trente', 'trãt', 'trinta', ''], ['quarante', 'karãt', 'quarenta', ''], ['cinquante', 'sẽkãt', 'cinquenta', ''], ['soixante', 'suassãt', 'sessenta', ''], ['soixante-dix', 'suassãt-dis', 'setenta (sessenta e dez)', ''], ['quatre-vingts', 'katr-vẽ', 'oitenta (quatro vintes)', ''], ['cent', 'sã', 'cem', ''],
      ]),
      gramatica(12, 'De 21 a 100: a lógica francesa', 'PASSO 1: as dezenas até 60 são regulares: vingt (20), trente (30), quarante (40), cinquante (50), soixante (60). Some a unidade com hífen: «vingt-deux», «trente-cinq», «quarante-huit». PASSO 2: o «un» pede «et» sem hífen em 21, 31, 41, 51 e 61: «vingt et un», «trente et un», «soixante et un». Nos demais, só hífen: «vingt-deux». PASSO 3: de 70 a 79 some-se à dezena de 60: «soixante-dix» (60 + 10), «soixante et onze» (60 + 11), «soixante-douze», … «soixante-dix-neuf». PASSO 4: 80 é «quatre-vingts» (4 × 20): com «s» quando está sozinho; sem «s» quando vem seguido de outro número: «quatre-vingt-un» (81, sem «et»). De 90 a 99 some-se a «quatre-vingt»: «quatre-vingt-dix» (90), «quatre-vingt-onze» (91), … «quatre-vingt-dix-neuf» (99). PASSO 5: 100 é «cent». PASSO 6: na Bélgica e em parte da Suíça se diz «septante» (70) e «nonante» (90); na França, não. PASSO 7: pronúncia: «vingt» soa «vẽ» no número isolado; em «vingt et un», ouve-se o «t» na ligação (vẽ-té-ẽ).', {
        tag: 'Números',
        comparacao: 'o português tem palavras próprias de 20 a 100 («setenta», «oitenta», «noventa»). O francês usa contas: 70 é «sessenta e dez» e 90 é «quatro vintes e dez». Treine até as contas virarem hábito.',
        tabela: [
          { numero: '21', escrita: 'vingt et un', conta: '20 + 1' }, { numero: '35', escrita: 'trente-cinq', conta: '30 + 5' }, { numero: '60', escrita: 'soixante', conta: '60' }, { numero: '71', escrita: 'soixante et onze', conta: '60 + 11' },
          { numero: '80', escrita: 'quatre-vingts', conta: '4 × 20' }, { numero: '81', escrita: 'quatre-vingt-un', conta: '4 × 20 + 1' }, { numero: '90', escrita: 'quatre-vingt-dix', conta: '4 × 20 + 10' }, { numero: '99', escrita: 'quatre-vingt-dix-neuf', conta: '4 × 20 + 19' }, { numero: '100', escrita: 'cent', conta: '100' },
        ],
        erros: [['vingt-un', 'vingt et un', '21, 31, 41, 51, 61 e 71 levam «et».'], ['quatre-vingt-et-un', 'quatre-vingt-un', '81 e 91 não levam «et».'], ['quatre-vingt (80)', 'quatre-vingts', '80 sozinho leva «s».'], ['septante-cinq (na França)', 'soixante-quinze', '«Septante» é belga e suíço.']],
      }),
      producao(5, 'Conte de 20 em 20 até 100, e diga em voz alta: 21, 35, 48, 62, 71, 80, 91, 99.'),
    ]),
    sessao('S2', 'As horas', [
      revisao(4, 'Diga em voz alta: 31, 52, 77, 84, 96.'),
      palavras(6, [
        ['Quelle heure est-il ?', 'kél ör é til', 'que horas são?', ''], ['Il est trois heures', 'il é truá zör', 'são três horas', ''], ['et quart', 'é kar', 'e quinze', ''], ['et demie', 'é demi', 'e meia', ''], ['moins le quart', 'muẽ lê kar', 'quinze para', ''], ['midi, minuit', 'midi, minüi', 'meio-dia, meia-noite', ''],
      ]),
      gramatica(12, 'Dizer as horas', 'PASSO 1: para perguntar, «Quelle heure est-il ?» ou, mais informal, «Il est quelle heure ?» ou «Vous avez l\'heure ?». PASSO 2: para responder, use «Il est» + hora + «heure(s)»: «Il est trois heures.» «Il est une heure» (singular). PASSO 3: somar minutos: «Il est trois heures dix.» PASSO 4: «et quart» (15), «et demie» (30): «Il est trois heures et quart.» «Il est trois heures et demie.» PASSO 5: para os minutos finais, subtraia: «moins cinq», «moins dix», «moins le quart»: «Il est quatre heures moins le quart» (3h45). PASSO 6: meio-dia é «midi» e meia-noite é «minuit», sem «heures». «Midi et demi» e «minuit et demi» (masculino). PASSO 7: para marcar compromisso, use «à + hora»: «Le film commence à huit heures.» PASSO 8: no dia a dia, use o relógio de 12 horas com «du matin», «de l\'après-midi», «du soir». Em horários oficiais, usa-se de 0 a 23: «dix-sept heures trente».', {
        tag: 'Tempo',
        comparacao: 'em português dizemos «três e meia» e «quinze para as quatro». O francês também subtrai: «quatre heures moins le quart». A diferença é que «heure» sempre aparece, menos em «midi» e «minuit».',
        tabela: [
          { hora: '3h00', fala: 'Il est trois heures.', exemplo: '3 horas' }, { hora: '1h00', fala: 'Il est une heure.', exemplo: 'singular' }, { hora: '3h15', fala: 'Il est trois heures et quart.', exemplo: 'e quinze' }, { hora: '3h30', fala: 'Il est trois heures et demie.', exemplo: 'e meia' },
          { hora: '3h45', fala: 'Il est quatre heures moins le quart.', exemplo: 'quinze para' }, { hora: '12h00', fala: 'Il est midi.', exemplo: 'sem «heures»' }, { hora: '17h30', fala: 'Il est dix-sept heures trente.', exemplo: 'horário oficial' },
        ],
        erros: [['Il est une heures.', 'Il est une heure.', 'Uma hora é singular.'], ['Il est midi heures.', 'Il est midi.', 'Sem «heures» com midi.'], ['Il est trois et demi.', 'Il est trois heures et demie.', '«Heures» sempre aparece.'], ['à les huit heures', 'à huit heures', 'A preposição «à» + hora, sem artigo.']],
      }),
      producao(8, 'Diga em voz alta oito horas diferentes: 7h, 8h15, 9h30, 11h45, 12h, 14h30, 18h10, 21h50.'),
    ]),
    sessao('S3', 'Dias, meses, datas e estações', [
      revisao(4, 'Diga as horas: 2h30, 4h15, 6h45, 12h00.'),
      palavras(5, [
        ['lundi, mardi', 'lẽdi, mardi', 'segunda, terça', ''], ['mercredi, jeudi', 'mérkredi, jödi', 'quarta, quinta', ''], ['vendredi', 'vãdrdi', 'sexta', ''], ['samedi, dimanche', 'samdi, dimãx', 'sábado, domingo', ''], ['aujourd\'hui, demain', 'ojurdüi, demẽ', 'hoje, amanhã', ''],
      ]),
      gramatica(8, 'Dias, meses e datas', 'PASSO 1: os dias e meses escrevem-se em minúscula: «lundi», «mardi», «janvier», «février». PASSO 2: meses: janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre. PASSO 3: «lundi» sem artigo = nesta segunda; «le lundi» = toda segunda: «Le lundi, je travaille.» «Lundi, je vais à Paris.» PASSO 4: data: «Nous sommes le 12 mars» ou «C\'est le 12 mars». Pergunte: «Quelle est la date ?» ou «Quel jour sommes-nous ?» PASSO 5: o primeiro dia é «le premier» (1er); os outros usam o número: «le deux mai». PASSO 6: para os meses, use «en» ou «au mois de»: «en mars», «au mois de mars». Para estações, «au printemps», «en été», «en automne», «en hiver».', {
        tag: 'Tempo',
        comparacao: 'o português também usa minúscula para dias e meses, mas dizemos «dia 12 de março»; o francês diz «le 12 mars», sem «de» e sem «dia».',
        tabela: [
          { uso: 'dia único', frase: 'Lundi, je vais à Paris.' }, { uso: 'todos os dias iguais', frase: 'Le lundi, je travaille.' }, { uso: 'data', frase: 'Nous sommes le douze mars.' }, { uso: 'primeiro do mês', frase: 'C\'est le premier mai.' }, { uso: 'mês', frase: 'Mon anniversaire est en mars.' }, { uso: 'estação', frase: 'J\'aime l\'été, mais pas l\'hiver.' },
        ],
        erros: [['Lundi, je travaille (toda segunda)', 'Le lundi, je travaille.', 'Hábito semanal leva «le».'], ['le un mai', 'le premier mai', 'O dia 1 é «premier».'], ['Je suis né en le mars', 'Je suis né en mars.', '«En» + mês, sem artigo.'], ['Lundi 12 Mars (maiúscula)', 'lundi 12 mars', 'Dias e meses em minúscula.']],
      }),
      dialogo(8, 'Un rendez-vous / Um compromisso', 'Manon e Louis marcam um jantar.', [
        ['Manon', 'Louis, quel jour sommes-nous ?', 'Louis, que dia é hoje?'], ['Louis', 'Nous sommes jeudi, le douze mars.', 'Hoje é quinta, 12 de março.'], ['Manon', 'Ah ! Mon anniversaire est le vingt mars.', 'Ah! Meu aniversário é dia 20 de março.'], ['Louis', 'C\'est vendredi, non ?', 'É sexta, não é?'], ['Manon', 'Oui ! On dîne ensemble à vingt heures ?', 'Sim! Jantamos juntos às vinte horas?'], ['Louis', 'D\'accord, à vingt heures, chez toi.', 'Combinado, às vinte horas, na sua casa.'],
      ]),
      producao(5, 'Diga a data de hoje, o dia do seu aniversário e o que você faz toda segunda e toda sexta.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 7', [
      revisao(5, 'Conte de 60 a 100 em voz alta e diga as horas de cinco relógios imaginários.'),
      exercicios(20, [
        ouvir('quatre-vingts', ['quatre-vingts', 'soixante-dix', 'quatre-vingt-dix'], 'quatre-vingts', 'Ouça a conta 4 × 20.'), ouvir('Il est trois heures et demie', ['Il est trois heures et demie', 'Il est trois heures et quart', 'Il est quatre heures moins le quart'], 'Il est trois heures et demie', 'Ouça «et demie».'), ouvir('Nous sommes le douze mars', ['Nous sommes le douze mars', 'Nous sommes le premier mai', 'Nous sommes le vingt mars'], 'Nous sommes le douze mars', 'Ouça o número.'),
        ditado('soixante et onze', 'Escreva: soixante et onze.'), ditado('Il est midi', 'Escreva: Il est midi.'), ditado('Le lundi, je travaille', 'Escreva: Le lundi, je travaille.'),
        mc('Como se escreve 21?', ['vingt et un', 'vingt-un', 'vingt un'], 'vingt et un', '21 leva «et».'), mc('Quanto é «quatre-vingt-dix»?', ['90', '80', '99'], '90', '4 × 20 + 10.'), mc('Como se diz 3h45?', ['quatre heures moins le quart', 'trois heures et quart', 'trois heures moins le quart'], 'quatre heures moins le quart', 'Faltam 15 minutos para as 4.'), mc('«Le lundi, je travaille» significa…', ['toda segunda eu trabalho', 'nesta segunda eu trabalho', 'segunda passada eu trabalhei'], 'toda segunda eu trabalho', 'Artigo = hábito.'),
        lacuna('Il est ___ heure. (uma)', ['une', 'un', 'le'], 'une', '«Heure» é feminino.'), lacuna('Il est trois heures et ___ . (meia)', ['demie', 'demi', 'moitié'], 'demie', '«Heure» é feminino, «demie» concorda.'), lacuna('Nous sommes le ___ mai. (1º)', ['premier', 'un', 'première'], 'premier', 'O dia 1 é «premier».'), lacuna('Mon anniversaire est ___ mars.', ['en', 'à', 'dans'], 'en', '«En» + mês.'),
        ordem('Ordene: «Il est quatre heures moins le quart.»', ['Il', 'est', 'quatre', 'heures', 'moins', 'le', 'quart'], 'Il est quatre heures moins le quart.', 'Subtração com «moins».'), ordem('Ordene: «Le film commence à huit heures.»', ['Le', 'film', 'commence', 'à', 'huit', 'heures'], 'Le film commence à huit heures.', '«À» + hora.'),
        livre('Escreva em francês: Hoje é quinta, 12 de março. São duas e meia.', 'Nous sommes jeudi, le douze mars. Il est deux heures et demie.'),
      ]),
      producao(5, 'Descreva em voz alta a sua agenda de amanhã com horas: levantar, trabalhar, almoçar, jantar.'),
    ]),
  ],
});
