import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 28, titulo: 'Conselhos e obrigações: should, must e have to', nivel: 'a2',
  objetivo: 'Dar conselhos com «should», falar de obrigação com «must» e «have to», proibir com «mustn\'t» e dizer o que não é necessário com «don\'t have to».',
  nota: 'Você aconselha e fala de regras. Próxima aula: possibilidade e permissão.',
  sessoes: [
    sessao('S1', 'Should: conselhos', [
      revisao(5, 'Diga 3 frases com «much/many» e 3 com «a few/a little».'),
      palavras(8, [
        ['should', 'chúd', 'deveria', ''], ['shouldn\'t', 'chúdnt', 'não deveria', ''], ['advice', 'adváis', 'conselho', ''], ['headache', 'rédeik', 'dor de cabeça', ''], ['sleep', 'sliip', 'dormir', ''], ['exercise', 'éksersaiz', 'exercício', ''], ['healthy', 'rélthi', 'saudável', ''], ['rest', 'rést', 'descansar', ''],
      ]),
      gramatica(12, 'Should e shouldn\'t', 'PASSO 1: «should» dá CONSELHO: «You should sleep more.» PASSO 2: igual para todas as pessoas, sem -s e sem «to»: «She should rest.» PASSO 3: negativa: «shouldn\'t»: «You shouldn\'t eat so much sugar.» PASSO 4: pergunta: «Should I call him?» → «Yes, you should.» PASSO 5: «I think you should…» suaviza: «I think you should see a doctor.» PASSO 6: «ought to» é parecido, mas mais formal; use «should» no dia a dia.', {
        tag: 'Should',
        comparacao: 'em português «deveria» e «devia» dão conselho («você deveria dormir»). O inglês usa «should» para o mesmo tom, mais suave do que «must».',
        tabela: [
          { afirmativa: 'You should sleep more.', negativa: 'You shouldn\'t drink coffee at night.', pergunta: 'Should I call him?' }, { afirmativa: 'She should rest.', negativa: 'She shouldn\'t work today.', pergunta: 'Should she rest?' },
        ],
        erros: [['You should to sleep.', 'You should sleep.', 'Sem «to».'], ['She shoulds rest.', 'She should rest.', 'Sem -s.'], ['Do I should call him?', 'Should I call him?', 'should não usa do.'], ['You should not to eat.', 'You shouldn\'t eat.', 'Sem «to».']],
      }),
      producao(5, 'Dê 5 conselhos a um amigo que está cansado e estressado.'),
    ]),
    sessao('S2', 'Must e have to', [
      revisao(4, 'Dê 3 conselhos com «should» e 2 com «shouldn\'t».'),
      palavras(6, [
        ['must', 'mâst', 'deve (obrigação forte)', ''], ['have to', 'hév tu', 'ter que', ''], ['has to', 'héz tu', 'tem que', ''], ['rule', 'rul', 'regra', ''], ['wear', 'uér', 'usar, vestir', ''], ['seat belt', 'siit bélt', 'cinto de segurança', ''],
      ]),
      gramatica(12, 'Must e have to', 'PASSO 1: «have to» = ter que, obrigação por regra ou situação: «I have to work tomorrow.» PASSO 2: com he/she/it, «has to»: «She has to wear a uniform.» PASSO 3: negativa e pergunta usam do/does: «I don\'t have to go.», «Do you have to work?» PASSO 4: «must» é obrigação mais forte e vem de quem fala: «You must wear a seat belt.» Também aparece em regras escritas: «Visitors must sign in.» PASSO 5: «must» não muda e não leva «to»: «She must go», nunca «She musts to go». PASSO 6: «mustn\'t» PROÍBE: «You mustn\'t smoke here.» PASSO 7: «don\'t have to» NÃO PROÍBE: apenas diz que não é necessário. «You don\'t have to come» (você não precisa vir). Essa diferença é um dos erros mais comuns do aluno brasileiro.', {
        tag: 'Obrigação',
        comparacao: 'em português «não precisa» e «não pode» são bem distintos. Em inglês, «don\'t have to» é «não precisa», e «mustn\'t» é «é proibido». Não troque.',
        tabela: [
          { forma: 'have to', sentido: 'é preciso', exemplo: 'I have to work.' }, { forma: 'must', sentido: 'dever forte', exemplo: 'You must stop.' }, { forma: 'mustn\'t', sentido: 'proibido', exemplo: 'You mustn\'t park here.' }, { forma: 'don\'t have to', sentido: 'não precisa', exemplo: 'You don\'t have to come.' },
        ],
        erros: [['She have to work.', 'She has to work.', 'she → has to.'], ['You don\'t have to smoke here. (proibido)', 'You mustn\'t smoke here.', 'Proibição: mustn\'t.'], ['You mustn\'t come. (não é necessário)', 'You don\'t have to come.', 'Não precisa: don\'t have to.'], ['He musts go.', 'He must go.', 'Sem -s.']],
      }),
      producao(8, 'Diga 3 coisas que você tem que fazer esta semana, 2 que não precisa e 2 que são proibidas na sua cidade.'),
    ]),
    sessao('S3', 'Regras e avisos', [
      revisao(4, 'Explique em voz alta a diferença entre «mustn\'t» e «don\'t have to».'),
      palavras(5, [
        ['allowed', 'aláud', 'permitido', ''], ['forbidden', 'forbíden', 'proibido', ''], ['sign', 'sáin', 'placa, aviso', ''], ['smoke', 'smôuk', 'fumar', ''], ['park', 'párk', 'estacionar', ''],
      ]),
      gramatica(8, 'Regras e avisos em placas', 'PASSO 1: placas usam formas curtas: «No smoking», «No parking», «Keep off the grass». PASSO 2: «You are not allowed to + verbo» = você não tem permissão: «You are not allowed to park here.» PASSO 3: «You can\'t + verbo» também proíbe em fala informal: «You can\'t park here.» PASSO 4: «Please do not + verbo» é a placa educada: «Please do not touch.» PASSO 5: «Employees must wash their hands.» (regra de empresa).', {
        tag: 'Avisos',
        comparacao: 'em português a placa «proibido fumar» é uma frase curta. O inglês usa «No smoking» (sem verbo auxiliar) ou «You mustn\'t smoke».',
        tabela: [
          { placa: 'No smoking', sentido: 'proibido fumar' }, { placa: 'No parking', sentido: 'proibido estacionar' }, { placa: 'Please do not touch', sentido: 'por favor, não toque' }, { placa: 'Staff only', sentido: 'só funcionários' },
        ],
        erros: [['Forbidden to smoke.', 'No smoking.', 'Forma natural da placa.'], ['You are not allowed park here.', 'You are not allowed to park here.', 'allowed to + verbo.']],
      }),
      dialogo(8, 'At the doctor\'s / No médico', 'A paciente fala com a médica.', [
        ['Sarah', 'What\'s the problem?', 'Qual é o problema?'], ['Maria', 'I have a headache every day and I feel tired.', 'Tenho dor de cabeça todo dia e me sinto cansada.'], ['Sarah', 'How many hours do you sleep?', 'Quantas horas você dorme?'], ['Maria', 'Only five. I have to work late every night.', 'Só cinco. Tenho que trabalhar até tarde toda noite.'], ['Sarah', 'You should sleep at least seven hours. And you shouldn\'t drink coffee at night.', 'Você deveria dormir pelo menos sete horas. E não deveria tomar café à noite.'], ['Maria', 'Do I have to take medicine?', 'Preciso tomar remédio?'], ['Sarah', 'No, you don\'t have to. But you must rest.', 'Não precisa. Mas tem que descansar.'],
      ]),
      producao(5, 'Dê 5 conselhos e 3 regras a um colega novo no seu trabalho ou na sua escola.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 28', [
      revisao(5, 'Dê conselhos a uma pessoa que está doente e diga o que ela não precisa fazer.'),
      exercicios(20, [
        ouvir('You should sleep more', ['You should sleep more', 'You must sleep more', 'You should sleep less'], 'You should sleep more', 'Ouça «should».'), ouvir('You mustn\'t smoke here', ['You mustn\'t smoke here', 'You don\'t have to smoke here', 'You can smoke here'], 'You mustn\'t smoke here', 'Ouça «mustn\'t».'), ditado('She has to work tomorrow', 'Escreva: she has to work tomorrow.'), ditado('You don\'t have to come', 'Escreva: you don\'t have to come.'),
        mc('Qual frase significa «não precisa»?', ['You don\'t have to come.', 'You mustn\'t come.', 'You can\'t come.'], 'You don\'t have to come.', 'don\'t have to.'), mc('Qual frase significa «é proibido»?', ['You mustn\'t park here.', 'You don\'t have to park here.', 'You should park here.'], 'You mustn\'t park here.', 'mustn\'t.'), mc('Qual frase está correta?', ['She should rest.', 'She shoulds rest.', 'She should to rest.'], 'She should rest.', 'Sem -s, sem to.'), mc('Qual é a pergunta correta?', ['Do you have to work?', 'Have you to work?', 'Do you must work?'], 'Do you have to work?', 'do + have to.'),
        lacuna('She ___ to wear a uniform. (tem que)', ['has', 'have', 'must'], 'has', 'she → has to.'), lacuna('You ___ drink coffee at night. (não deveria)', ['shouldn\'t', 'don\'t', 'doesn\'t'], 'shouldn\'t', 'Conselho negativo.'), lacuna('I ___ to work tomorrow. (tenho que)', ['have', 'has', 'should'], 'have', 'I → have to.'), lacuna('You ___ wear a seat belt. (deve, regra)', ['must', 'musts', 'must to'], 'must', 'Obrigação forte.'),
        ordem('Ordene: «You should see a doctor.»', ['You', 'should', 'see', 'a', 'doctor'], 'You should see a doctor.', 'should + verbo.'), ordem('Ordene: «I don\'t have to work today.»', ['I', 'don\'t', 'have', 'to', 'work', 'today'], 'I don\'t have to work today.', 'don\'t have to + verbo.'),
        livre('Escreva 4 frases: um conselho, uma obrigação, uma proibição e algo que não é necessário.', 'You should sleep more. I have to work tomorrow. You mustn\'t smoke here. You don\'t have to come.'),
      ]),
      producao(5, 'Fale 1 minuto sobre as regras da sua casa e do seu trabalho.'),
    ]),
  ],
});
