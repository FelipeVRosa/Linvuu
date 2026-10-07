import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 23, titulo: 'Duração e momento: depuis, il y a, pendant, venir de', nivel: 'a2',
  objetivo: 'Falar de duração e de tempo com «depuis», «il y a», «pendant», «dans», e usar «venir de» e «être en train de».',
  nota: 'Você situa as ações no tempo. Próxima aula: o condicional, os conselhos e os pedidos educados.',
  sessoes: [
    sessao('S1', 'Depuis, il y a, pendant, dans', [
      revisao(5, 'Diga os seus planos para as férias com o futur simple.'),
      palavras(8, [
        ['depuis', 'döpüi', 'desde, há (que continua)', ''], ['il y a', 'il i a', 'há (tempo atrás)', ''], ['pendant', 'pãdã', 'durante', ''], ['dans', 'dã', 'daqui a', ''], ['en', 'ã', 'em (prazo)', ''], ['jusqu\'à', 'jüska', 'até', ''], ['à partir de', 'a partir dö', 'a partir de', ''], ['il y a longtemps', 'il i a lõtã', 'há muito tempo', ''],
      ]),
      gramatica(12, 'Quatro palavras de tempo', 'PASSO 1: «depuis» + presente: algo começou no passado e CONTINUA: «J\'habite à Paris depuis deux ans.» (moro há dois anos, e ainda moro) PASSO 2: «il y a» + passé composé: algo aconteceu há certo tempo e acabou: «Je suis arrivé il y a deux ans.» PASSO 3: «pendant» + período: duração de uma ação: «J\'ai travaillé pendant trois heures.» PASSO 4: «dans» + período: daqui a certo tempo: «Je pars dans deux jours.» PASSO 5: «en» + período: o tempo que leva para fazer algo: «Je fais le trajet en vingt minutes.» PASSO 6: «depuis quand» e «depuis combien de temps» perguntam sobre a duração que continua: «Tu habites ici depuis combien de temps ?» PASSO 7: a pergunta «il y a combien de temps que» fala do passado: «Il y a combien de temps que tu es arrivé ?» PASSO 8: para o ponto de partida use «depuis» + data: «Depuis 2020, j\'habite à Lyon.»', {
        tag: 'Tempo',
        comparacao: 'em português usamos «há» para duas ideias diferentes: «moro aqui há dois anos» (continua) e «cheguei há dois anos» (já passou). O francês separa: «depuis» + presente para o que continua e «il y a» + passé composé para o que acabou.',
        tabela: [
          { palavra: 'depuis', tempo: 'presente', exemplo: 'J\'habite ici depuis deux ans.' }, { palavra: 'il y a', tempo: 'passé composé', exemplo: 'Je suis arrivé il y a deux ans.' }, { palavra: 'pendant', tempo: 'qualquer', exemplo: 'J\'ai dormi pendant huit heures.' }, { palavra: 'dans', tempo: 'futuro', exemplo: 'Je pars dans deux jours.' }, { palavra: 'en', tempo: 'prazo', exemplo: 'Je lis ce livre en deux jours.' },
        ],
        erros: [['J\'habite ici il y a deux ans.', 'J\'habite ici depuis deux ans.', 'Continua: «depuis» + presente.'], ['J\'ai arrivé depuis deux ans.', 'Je suis arrivé il y a deux ans.', 'Acabou: «il y a».'], ['J\'ai habité ici depuis deux ans.', 'J\'habite ici depuis deux ans.', '«Depuis» pede presente.'], ['Je pars en deux jours.', 'Je pars dans deux jours.', 'Futuro: «dans».']],
      }),
      producao(5, 'Responda em voz alta: «Tu habites ici depuis combien de temps ? Tu es arrivé il y a combien de temps ? Tu apprends le français depuis quand ?»'),
    ]),
    sessao('S2', 'Venir de e être en train de', [
      revisao(4, 'Diga três frases com «depuis» e três com «il y a».'),
      palavras(6, [
        ['venir de', 'vönir dö', 'acabar de', ''], ['être en train de', 'étr ã trẽ dö', 'estar (fazendo)', ''], ['aller', 'alé', 'ir, ir fazer', ''], ['en ce moment', 'ã sö momã', 'neste momento', ''], ['tout de suite', 'tu dö süit', 'já, imediatamente', ''], ['déjà', 'dejá', 'já', ''],
      ]),
      gramatica(12, 'O passado recente, o presente em curso e o futuro próximo', 'PASSO 1: «venir de» + infinitivo = acabou de fazer (passado muito recente): «Je viens de manger.» «Il vient d\'arriver.» PASSO 2: conjugação de «venir»: je viens, tu viens, il vient, nous venons, vous venez, ils viennent. PASSO 3: «être en train de» + infinitivo = estar fazendo (ação em curso): «Je suis en train de manger.» «Elle est en train de travailler.» PASSO 4: «aller» + infinitivo = vai fazer (futuro próximo): «Je vais manger.» PASSO 5: os três formam uma linha: «Je viens de manger» (passado) → «Je suis en train de manger» (agora) → «Je vais manger» (depois). PASSO 6: no imparfait: «Je venais de manger quand il a téléphoné.» «J\'étais en train de manger quand il est arrivé.» PASSO 7: pronomes antes do verbo conjugado: «Je viens de le voir.» «Je suis en train de le faire.» PASSO 8: negação: «Je ne viens pas de manger.» (raro) «Je ne suis pas en train de dormir.»', {
        tag: 'Tempo',
        comparacao: 'em português dizemos «acabei de comer», «estou comendo», «vou comer». O francês tem o mesmo trio: «je viens de manger», «je suis en train de manger», «je vais manger». O «venir de» é o que mais confunde, porque «venir» sozinho é «vir».',
        tabela: [
          { tempo: 'passado recente', formula: 'venir de + infinitivo', exemplo: 'Je viens de manger.' }, { tempo: 'presente em curso', formula: 'être en train de + infinitivo', exemplo: 'Je suis en train de manger.' }, { tempo: 'futuro próximo', formula: 'aller + infinitivo', exemplo: 'Je vais manger.' }, { tempo: 'passado recente (imparfait)', formula: 'venir de no imparfait', exemplo: 'Je venais de manger.' },
        ],
        erros: [['Je viens manger. (acabei de comer)', 'Je viens de manger.', 'Falta o «de».'], ['Je suis en train manger.', 'Je suis en train de manger.', 'Falta o «de».'], ['Je viens de mangé.', 'Je viens de manger.', 'Infinitivo, não particípio.'], ['Je suis en train de mangé.', 'Je suis en train de manger.', 'Infinitivo.']],
      }),
      producao(8, 'Diga em voz alta o que você acabou de fazer, o que está fazendo agora e o que vai fazer em seguida.'),
    ]),
    sessao('S3', 'Contar a duração de uma vida', [
      revisao(4, 'Complete: «Je ___ de manger. Je suis en ___ de travailler. Je ___ partir.»'),
      palavras(5, [
        ['naître', 'nétr', 'nascer', ''], ['grandir', 'grãdir', 'crescer', ''], ['déménager', 'deménajé', 'mudar de casa', ''], ['se marier', 'sö mariê', 'casar-se', ''], ['prendre sa retraite', 'prãdr sa retrét', 'aposentar-se', ''],
      ]),
      gramatica(8, 'Contar a própria história', 'PASSO 1: use o passé composé para os fatos e «en» + ano para a data: «Je suis né en 1990.» PASSO 2: «à l\'âge de» + idade: «J\'ai commencé à travailler à l\'âge de vingt ans.» PASSO 3: «il y a» + tempo para dizer há quanto tempo: «Je suis arrivé il y a cinq ans.» PASSO 4: «depuis» + presente para dizer o que continua: «Je travaille ici depuis cinq ans.» PASSO 5: «d\'abord, puis, ensuite, enfin» continuam servindo para organizar a história.', {
        tag: 'Tempo',
        comparacao: 'em português contamos a vida com «nasci em 1990», «mudei-me há cinco anos», «trabalho aqui há cinco anos». O francês exige a escolha entre «il y a» e «depuis» e entre passado e presente.',
        tabela: [
          { fato: 'nascimento', frase: 'Je suis né en 1990.' }, { fato: 'mudança', frase: 'J\'ai déménagé il y a cinq ans.' }, { fato: 'trabalho atual', frase: 'Je travaille ici depuis cinq ans.' }, { fato: 'idade', frase: 'J\'ai commencé à l\'âge de vingt ans.' },
        ],
        erros: [['Je suis né il y a 1990.', 'Je suis né en 1990.', 'Ano: «en».'], ['Je travaille ici il y a cinq ans.', 'Je travaille ici depuis cinq ans.', 'Continua: «depuis».'], ['J\'ai déménagé depuis cinq ans.', 'J\'ai déménagé il y a cinq ans.', 'Acabou: «il y a».'], ['À l\'âge vingt ans, j\'ai commencé.', 'À l\'âge de vingt ans, j\'ai commencé.', '«De» obrigatório.']],
      }),
      texto(8, 'La vie de Sophie / A vida de Sophie', 'Sophie est née en 1995 à Marseille. Elle a grandi dans un petit appartement avec ses parents. À l\'âge de dix-huit ans, elle a déménagé à Paris pour étudier. Elle a fini ses études il y a cinq ans. Elle travaille dans une banque depuis quatre ans. En ce moment, elle est en train de chercher un nouvel appartement. Elle vient de signer un contrat de travail et elle va déménager dans deux mois.', 'Sophie nasceu em 1995 em Marselha. Ela cresceu num pequeno apartamento com os pais. Aos dezoito anos, mudou-se para Paris para estudar. Terminou os estudos há cinco anos. Trabalha num banco há quatro anos. Neste momento, está procurando um novo apartamento. Acaba de assinar um contrato de trabalho e vai se mudar daqui a dois meses.', [['Où Sophie est-elle née ?', 'À Marseille.'], ['Depuis combien de temps travaille-t-elle dans une banque ?', 'Depuis quatre ans.'], ['Que fait-elle en ce moment ?', 'Elle est en train de chercher un nouvel appartement.'], ['Quand va-t-elle déménager ?', 'Dans deux mois.']]),
      producao(5, 'Conte a sua vida em seis frases, com «en», «il y a», «depuis» e «dans».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 23', [
      revisao(5, 'Conte em voz alta o que você acabou de fazer, o que faz agora e o que fará.'),
      exercicios(20, [
        ouvir('J\'habite ici depuis deux ans', ['J\'habite ici depuis deux ans', 'J\'ai habité ici il y a deux ans', 'J\'habite ici dans deux ans'], 'J\'habite ici depuis deux ans', 'Ouça «depuis».'), ouvir('Je viens de manger', ['Je viens de manger', 'Je vais manger', 'Je suis en train de manger'], 'Je viens de manger', 'Ouça «viens de».'), ouvir('Je suis arrivé il y a deux ans', ['Je suis arrivé il y a deux ans', 'Je suis arrivé depuis deux ans', 'Je suis arrivé dans deux ans'], 'Je suis arrivé il y a deux ans', 'Ouça «il y a».'),
        ditado('Je pars dans deux jours', 'Escreva: Je pars dans deux jours.'), ditado('Elle est en train de travailler', 'Escreva: Elle est en train de travailler.'), ditado('Il vient d\'arriver', 'Escreva: Il vient d\'arriver.'),
        mc('Continua até hoje:', ['J\'habite ici depuis deux ans.', 'J\'habite ici il y a deux ans.', 'J\'habite ici dans deux ans.'], 'J\'habite ici depuis deux ans.', '«Depuis» + presente.'), mc('Já acabou:', ['Je suis arrivé il y a deux ans.', 'Je suis arrivé depuis deux ans.', 'J\'arrive il y a deux ans.'], 'Je suis arrivé il y a deux ans.', '«Il y a» + passé composé.'), mc('«Acabei de comer» em francês:', ['Je viens de manger.', 'Je viens manger.', 'J\'ai de manger.'], 'Je viens de manger.', 'Passado recente.'), mc('«Estou comendo agora» em francês:', ['Je suis en train de manger.', 'Je mange en train.', 'Je suis manger.'], 'Je suis en train de manger.', 'Ação em curso.'),
        lacuna('Je pars ___ trois jours. (daqui a)', ['dans', 'il y a', 'depuis'], 'dans', 'Futuro: «dans».'), lacuna('J\'ai dormi ___ huit heures.', ['pendant', 'dans', 'depuis'], 'pendant', 'Duração.'), lacuna('Elle vient ___ téléphoner.', ['de', 'à', 'd\''], 'de', '«Venir de».'), lacuna('Je suis en train ___ lire.', ['de', 'à', 'd\''], 'de', '«Être en train de».'),
        ordem('Ordene: «Je travaille ici depuis cinq ans.»', ['Je', 'travaille', 'ici', 'depuis', 'cinq', 'ans'], 'Je travaille ici depuis cinq ans.', 'Presente + depuis.'), ordem('Ordene: «Elle vient de partir.»', ['Elle', 'vient', 'de', 'partir'], 'Elle vient de partir.', 'Venir de + infinitivo.'),
        livre('Escreva em francês: Moro aqui há três anos. Cheguei há três anos. Estou trabalhando agora.', 'J\'habite ici depuis trois ans. Je suis arrivé il y a trois ans. Je suis en train de travailler.'),
      ]),
      producao(5, 'Fale 1 minuto sobre a sua vida: onde mora desde quando e o que faz agora.'),
    ]),
  ],
});
