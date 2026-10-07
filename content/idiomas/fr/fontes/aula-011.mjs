import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 11, titulo: 'A rotina: verbos pronominais, frequência e verbos em -ir', nivel: 'a1',
  objetivo: 'Falar da rotina diária com os verbos pronominais, dizer com que frequência você faz as coisas e conjugar os verbos regulares em -ir.',
  nota: 'Você conta um dia inteiro em francês. Próxima aula: descrever pessoas, roupas e fazer compras.',
  sessoes: [
    sessao('S1', 'Os verbos pronominais', [
      revisao(5, 'Diga em voz alta o que você vai fazer amanhã e como vai chegar ao trabalho ou à escola.'),
      palavras(8, [
        ['se réveiller', 'se reveié', 'acordar', ''], ['se lever', 'se levé', 'levantar-se', ''], ['se laver', 'se lavé', 'lavar-se', ''], ['s\'habiller', 'sabié', 'vestir-se', ''], ['se coucher', 'se kuxé', 'deitar-se', ''], ['se reposer', 'se repozé', 'descansar', ''], ['se promener', 'se promné', 'passear', ''], ['s\'appeler', 'sapelé', 'chamar-se', ''],
      ]),
      gramatica(12, 'Se lever, se coucher: os verbos pronominais', 'PASSO 1: os verbos pronominais levam um pronome que repete o sujeito: «je me lève», «tu te lèves», «il/elle/on se lève», «nous nous levons», «vous vous levez», «ils/elles se lèvent». PASSO 2: diante de vogal ou «h» mudo, «me», «te» e «se» viram «m\'», «t\'» e «s\'»: «je m\'habille», «il s\'appelle». PASSO 3: «se lever» muda a grafia: «je lève, tu lèves, il lève, ils lèvent», mas «nous levons, vous levez» (o «è» some). «Se promener» faz o mesmo: «je me promène». PASSO 4: na negação, o pronome fica depois de «ne»: «Je ne me lève pas tôt.» PASSO 5: na pergunta informal: «Tu te lèves à quelle heure ?» PASSO 6: no futuro próximo, o pronome vai antes do infinitivo: «Je vais me coucher.» PASSO 7: muitos verbos pronominais são ações no próprio corpo (se laver, s\'habiller) ou mudanças de estado (se lever, se coucher). O português tem formas parecidas («levantar-se»), mas usa menos o pronome: «eu me levanto» mas «lavo as mãos».', {
        tag: 'Verbos',
        comparacao: 'o português também tem verbos reflexivos («levantar-se», «deitar-se»), mas usa o pronome de modo mais livre. Em francês, esses verbos exigem sempre o pronome («se lever»), mesmo quando o português dispensa («acordar» = «se réveiller»).',
        tabelas: [
          { titulo: 'se lever (levantar-se)', linhas: [
            { pronome: 'je', forma: 'me lève', exemplo: 'Je me lève à sept heures.' }, { pronome: 'tu', forma: 'te lèves', exemplo: 'Tu te lèves tôt.' }, { pronome: 'il / elle / on', forma: 'se lève', exemplo: 'Elle se lève tard.' },
            { pronome: 'nous', forma: 'nous levons', exemplo: 'Nous nous levons ensemble.' }, { pronome: 'vous', forma: 'vous levez', exemplo: 'Vous vous levez à huit heures.' }, { pronome: 'ils / elles', forma: 'se lèvent', exemplo: 'Ils se lèvent à six heures.' },
          ] },
        ],
        erros: [['Je lève à sept heures.', 'Je me lève à sept heures.', 'Falta o pronome «me».'], ['Je me habille.', 'Je m\'habille.', 'Elisão diante de «h» mudo.'], ['Je ne lève pas me tôt.', 'Je ne me lève pas tôt.', 'O pronome vem depois de «ne».'], ['Nous nous lèvons.', 'Nous nous levons.', 'Sem «è» em «nous» e «vous».']],
      }),
      producao(5, 'Diga a sua rotina de manhã com seis verbos pronominais: «Je me réveille à… Je me lève à… Je me lave… Je m\'habille…»'),
    ]),
    sessao('S2', 'Frequência e partes do dia', [
      revisao(4, 'Conjugue «se lever» de memória, com os seis pronomes.'),
      palavras(6, [
        ['toujours', 'tujur', 'sempre', ''], ['souvent', 'suvã', 'muitas vezes', ''], ['quelquefois, parfois', 'kélkefuá, parfuá', 'às vezes', ''], ['rarement', 'rarmã', 'raramente', ''], ['ne… jamais', 'ne… jamé', 'nunca', ''], ['tous les jours', 'tu lê jur', 'todos os dias', ''],
      ]),
      gramatica(12, 'Dizer com que frequência', 'PASSO 1: os advérbios de frequência vão depois do verbo conjugado: «Je me lève toujours à sept heures.» «Elle mange souvent du pain.» PASSO 2: «ne… jamais» é uma negação: «Je ne me lève jamais tôt.» Não use «pas» junto: «Je ne… jamais», nunca «Je ne… jamais pas». PASSO 3: para a resposta curta, «Jamais !» sozinho já nega: «Tu manges de la viande ? — Jamais.» PASSO 4: expressões de tempo: «tous les jours» (todos os dias), «tous les matins», «toutes les semaines», «une fois par semaine», «deux fois par mois». PASSO 5: partes do dia: «le matin», «l\'après-midi», «le soir», «la nuit». Para um hábito, use o artigo definido: «Le matin, je prends un café.» Para algo específico, use «ce»: «Ce matin, j\'ai un rendez-vous.» PASSO 6: refeições: «le petit-déjeuner» (café da manhã), «le déjeuner» (almoço), «le dîner» (jantar). Os verbos: «déjeuner», «dîner». «Prendre le petit-déjeuner» também é usado.', {
        tag: 'Frequência',
        comparacao: 'o português diz «nunca» e «não… nunca» («eu nunca me levanto» ou «eu não me levanto nunca»). Em francês, «ne… jamais» envolve o verbo: «je ne me lève jamais». Não existe «je jamais me lève».',
        tabela: [
          { frequencia: 'toujours', exemplo: 'Je me lève toujours à sept heures.' }, { frequencia: 'souvent', exemplo: 'Elle mange souvent du pain.' }, { frequencia: 'quelquefois / parfois', exemplo: 'Nous allons parfois au cinéma.' }, { frequencia: 'rarement', exemplo: 'Ils voyagent rarement.' }, { frequencia: 'ne… jamais', exemplo: 'Je ne me couche jamais tôt.' },
        ],
        erros: [['Je jamais me lève tôt.', 'Je ne me lève jamais tôt.', '«Ne… jamais» envolve o verbo.'], ['Je ne me lève jamais pas.', 'Je ne me lève jamais.', 'Não use «pas» com «jamais».'], ['Je toujours me lève à sept heures.', 'Je me lève toujours à sept heures.', 'O advérbio vem depois do verbo conjugado.'], ['Je prends le petit-déjeuner ce matin tous les jours.', 'Le matin, je prends le petit-déjeuner.', 'Hábito: «le matin».']],
      }),
      producao(8, 'Descreva em voz alta oito hábitos seus, com «toujours», «souvent», «parfois», «rarement» e «ne… jamais».'),
    ]),
    sessao('S3', 'Os verbos em -ir e um dia de rotina', [
      revisao(4, 'Diga quatro hábitos seus com advérbios de frequência.'),
      palavras(5, [
        ['finir', 'finir', 'terminar', ''], ['choisir', 'xuazir', 'escolher', ''], ['réussir', 'reüsir', 'ter sucesso, conseguir', ''], ['grandir', 'grãdir', 'crescer', ''], ['obéir', 'obeir', 'obedecer', ''],
      ]),
      gramatica(8, 'Os verbos regulares em -ir', 'PASSO 1: os verbos em «-ir» regulares perdem o «-ir» e ganham «-is, -is, -it, -issons, -issez, -issent»: «finir → je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent». PASSO 2: notou o «-iss-» no plural? Ele distingue este grupo dos irregulares. PASSO 3: pronúncia: «je finis», «tu finis» e «il finit» soam igual («fini»). Só no plural aparece o som «finis» (fini-sõ). PASSO 4: use para ações com resultado: «Je finis à six heures.» «Elle choisit un livre.» PASSO 5: atenção: «partir», «dormir», «sortir» terminam em «-ir», mas são irregulares e não têm «-iss-»; eles aparecem mais adiante.', {
        tag: 'Verbos',
        comparacao: 'em português, os verbos em «-ir» mudam o final de outro jeito («parto», «partes»). Em francês, os regulares ganham «-iss-» no plural, um traço que identifica o grupo.',
        tabelas: [
          { titulo: 'finir (terminar)', linhas: [
            { pronome: 'je', forma: 'finis', exemplo: 'Je finis à six heures.' }, { pronome: 'tu', forma: 'finis', exemplo: 'Tu finis le travail.' }, { pronome: 'il / elle / on', forma: 'finit', exemplo: 'Elle finit tard.' },
            { pronome: 'nous', forma: 'finissons', exemplo: 'Nous finissons ensemble.' }, { pronome: 'vous', forma: 'finissez', exemplo: 'Vous finissez à midi.' }, { pronome: 'ils / elles', forma: 'finissent', exemplo: 'Ils finissent le repas.' },
          ] },
        ],
        erros: [['Je finit à six heures.', 'Je finis à six heures.', '«Je» pede «-is».'], ['Nous finions.', 'Nous finissons.', 'O plural leva «-iss-».'], ['Il finis.', 'Il finit.', '«Il» pede «-it».'], ['Ils finent.', 'Ils finissent.', 'O plural leva «-iss-» e «-ent».']],
      }),
      texto(8, 'Ma journée / Meu dia', 'Je m\'appelle Julien et je suis ingénieur. Je me réveille à six heures et demie et je me lève à sept heures. Je me lave, je m\'habille et je prends le petit-déjeuner. Je prends toujours un café avec du pain. Je vais au travail en métro. Je finis à six heures. Le soir, je dîne avec ma famille et je ne me couche jamais très tard. Le week-end, je me promène souvent avec mes amis.',
        'Me chamo Julien e sou engenheiro. Acordo às seis e meia e me levanto às sete. Eu me lavo, me visto e tomo o café da manhã. Sempre tomo um café com pão. Vou ao trabalho de metrô. Termino às seis. À noite, janto com a minha família e nunca me deito muito tarde. No fim de semana, passeio muitas vezes com meus amigos.',
        [['À quelle heure se lève Julien ?', 'À sept heures.'], ['Qu\'est-ce qu\'il prend au petit-déjeuner ?', 'Un café avec du pain.'], ['Comment va-t-il au travail ?', 'En métro.'], ['Que fait-il le week-end ?', 'Il se promène avec ses amis.']]),
      producao(5, 'Escreva e leia em voz alta um texto de seis frases sobre o seu dia, usando verbos pronominais, «toujours» e «finir».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 11', [
      revisao(5, 'Descreva uma rotina completa do acordar ao deitar, em voz alta.'),
      exercicios(20, [
        ouvir('Je me lève à sept heures', ['Je me lève à sept heures', 'Je me lave à sept heures', 'Je me couche à sept heures'], 'Je me lève à sept heures', 'Ouça «lève».'), ouvir('Nous finissons à six heures', ['Nous finissons à six heures', 'Je finis à six heures', 'Ils finissent à six heures'], 'Nous finissons à six heures', 'Ouça «-ons».'), ouvir('Je ne me couche jamais tôt', ['Je ne me couche jamais tôt', 'Je me couche toujours tôt', 'Je me couche souvent tard'], 'Je ne me couche jamais tôt', 'Ouça «jamais».'),
        ditado('Je m\'habille le matin', 'Escreva: Je m\'habille le matin.'), ditado('Elle choisit un livre', 'Escreva: Elle choisit un livre.'), ditado('Il se promène souvent', 'Escreva: Il se promène souvent.'),
        mc('Qual frase está correta?', ['Je me lève tôt.', 'Je lève tôt.', 'Je me lèves tôt.'], 'Je me lève tôt.', 'Verbo pronominal.'), mc('Como dizer «nunca me deito cedo»?', ['Je ne me couche jamais tôt.', 'Je jamais me couche tôt.', 'Je ne me couche pas jamais tôt.'], 'Je ne me couche jamais tôt.', '«Ne… jamais».'), mc('Qual é a forma de «finir» para «ils»?', ['finissent', 'finient', 'finit'], 'finissent', '«Iss» + «ent».'), mc('Qual é a posição do advérbio de frequência?', ['depois do verbo conjugado', 'antes do sujeito', 'no fim da frase sempre'], 'depois do verbo conjugado', '«Je me lève toujours».'),
        lacuna('Je ___ habille à huit heures. (me)', ['m\'', 'me', 'se'], 'm\'', 'Elisão: «m\'habille».'), lacuna('Tu ___ lèves tôt. (te)', ['te', 't\'', 'se'], 'te', '«tu te lèves».'), lacuna('Nous ___ à six heures. (terminamos)', ['finissons', 'finis', 'finit'], 'finissons', '«nous finissons».'), lacuna('Je me lève ___ à sept heures. (sempre)', ['toujours', 'jamais', 'rarement'], 'toujours', 'Advérbio depois do verbo.'),
        ordem('Ordene: «Je ne me lève jamais très tôt.»', ['Je', 'ne', 'me', 'lève', 'jamais', 'très', 'tôt'], 'Je ne me lève jamais très tôt.', '«Ne… jamais» envolve o verbo.'), ordem('Ordene: «Elle se couche à dix heures.»', ['Elle', 'se', 'couche', 'à', 'dix', 'heures'], 'Elle se couche à dix heures.', 'Pronome antes do verbo.'),
        livre('Escreva em francês: Eu me levanto às sete horas. Eu sempre tomo um café. Eu nunca me deito tarde.', 'Je me lève à sept heures. Je prends toujours un café. Je ne me couche jamais tard.'),
      ]),
      producao(5, 'Conte em voz alta como é o seu domingo ideal: horários, refeições e atividades.'),
    ]),
  ],
});
