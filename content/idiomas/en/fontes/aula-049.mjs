import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 49, titulo: 'Gerúndio ou infinitivo?', nivel: 'b1',
  objetivo: 'Escolher entre verbo + -ing e verbo + to + infinitivo depois de verbos comuns, e conhecer os verbos que mudam de sentido (stop, remember, forget, try).',
  nota: 'Você escolhe a forma certa depois de cada verbo. Próxima aula: preposições dependentes.',
  sessoes: [
    sessao('S1', 'Verbos + -ing e verbos + to', [
      revisao(5, 'Relate uma conversa curta, com pergunta, ordem e pedido.'),
      palavras(8, [
        ['enjoy', 'indjói', 'curtir', ''], ['avoid', 'avóid', 'evitar', ''], ['finish', 'fíniche', 'terminar', ''], ['mind', 'máind', 'importar-se', ''], ['want', 'uónt', 'querer', ''], ['decide', 'disáid', 'decidir', ''], ['hope', 'rôup', 'esperar', ''], ['plan', 'plén', 'planejar', ''],
      ]),
      gramatica(12, 'Dois grupos de verbos', 'PASSO 1: alguns verbos pedem o segundo verbo com -ing: enjoy, avoid, finish, mind, suggest, keep, practice, consider, miss: «I enjoy reading.», «She avoids driving.» PASSO 2: outros pedem «to + verbo»: want, decide, hope, plan, need, learn, promise, agree, refuse, manage: «I want to learn.», «They decided to leave.» PASSO 3: não existe regra simples: aprenda em grupos e use bastante. PASSO 4: depois de PREPOSIÇÃO, sempre -ing: «I\'m interested in learning.», «Thanks for coming.» PASSO 5: depois de «would like», «want», «need», use «to»: «I\'d like to go.» PASSO 6: depois de verbos de percepção, o verbo vem sem «to»: «I saw him leave.»', {
        tag: 'Gerúndio e infinitivo',
        comparacao: 'em português o infinitivo serve para quase tudo («gosto de ler», «quero ler»). Em inglês, cada verbo escolhe: «enjoy reading» (-ing), «want to read» (to + verbo).',
        tabela: [
          { grupo: '+ -ing', verbos: 'enjoy, avoid, finish, mind, suggest, keep, practice', exemplo: 'I enjoy reading.' }, { grupo: '+ to + verbo', verbos: 'want, decide, hope, plan, need, learn, promise', exemplo: 'I want to read.' }, { grupo: 'preposição + -ing', verbos: 'interested in, thanks for, good at', exemplo: 'I\'m good at cooking.' },
        ],
        erros: [['I enjoy to read.', 'I enjoy reading.', 'enjoy + -ing.'], ['I want reading.', 'I want to read.', 'want + to.'], ['I\'m interested in to learn.', 'I\'m interested in learning.', 'Preposição + -ing.'], ['She decided leaving.', 'She decided to leave.', 'decide + to.']],
      }),
      producao(5, 'Faça 6 frases com 3 verbos + -ing e 3 verbos + to.'),
    ]),
    sessao('S2', 'Verbos que mudam de sentido', [
      revisao(4, 'Complete: «I enjoy ___ (cook). I decided ___ (move). She avoids ___ (drive).»'),
      palavras(6, [
        ['stop', 'stóp', 'parar', ''], ['remember', 'rimémber', 'lembrar', ''], ['forget', 'forguét', 'esquecer', ''], ['try', 'trái', 'tentar, experimentar', ''], ['regret', 'rigrét', 'lamentar', ''], ['need', 'niid', 'precisar', ''],
      ]),
      gramatica(12, 'Mesmo verbo, sentidos diferentes', 'PASSO 1: «stop doing» = PARAR de fazer: «He stopped smoking.» (largou o cigarro). «stop to do» = PARAR PARA fazer: «He stopped to smoke.» (parou o que fazia para fumar). PASSO 2: «remember doing» = lembrar-se de ter feito: «I remember meeting her.» «remember to do» = lembrar de fazer (no futuro): «Remember to lock the door.» PASSO 3: «forget doing» = esquecer de algo que fez: «I\'ll never forget seeing him.» «forget to do» = esquecer de fazer: «I forgot to call you.» PASSO 4: «try doing» = experimentar: «Try adding salt.» «try to do» = tentar fazer, com esforço: «I tried to open the door.» PASSO 5: «regret doing» = lamentar ter feito, «regret to do» = lamentar informar: «We regret to inform you…» PASSO 6: «-ing» costuma olhar PARA TRÁS (algo que aconteceu); «to + verbo» olha PARA FRENTE (algo que ainda vai acontecer).', {
        tag: 'Mudança de sentido',
        comparacao: 'em português «parei de fumar» e «parei para fumar» diferem por uma preposição. Em inglês, a diferença é -ing × to: «stopped smoking» × «stopped to smoke».',
        tabela: [
          { verbo: 'stop', ing: 'stop smoking (parar de)', to: 'stop to smoke (parar para)' }, { verbo: 'remember', ing: 'remember meeting her (lembrar que fez)', to: 'remember to call (lembrar de fazer)' }, { verbo: 'forget', ing: 'forget seeing him (esquecer que viu)', to: 'forget to call (esquecer de fazer)' }, { verbo: 'try', ing: 'try adding salt (experimentar)', to: 'try to open it (tentar)' },
        ],
        erros: [['I forgot call you.', 'I forgot to call you.', 'forget to + verbo.'], ['I stopped to smoke last year. (largou)', 'I stopped smoking last year.', 'largou: -ing.'], ['Remember closing the door.', 'Remember to close the door.', 'Futuro: to.'], ['I tried open it.', 'I tried to open it.', 'try to.']],
      }),
      producao(8, 'Escreva 6 frases, uma com cada uso de stop, remember e forget (-ing e to).'),
    ]),
    sessao('S3', 'Nas situações do dia a dia', [
      revisao(4, 'Diga a diferença entre «I stopped smoking» e «I stopped to smoke».'),
      palavras(5, [
        ['used to', 'iuzd tu', 'costumava', ''], ['get used to', 'guét iuzd tu', 'acostumar-se a', ''], ['be used to', 'bi iuzd tu', 'estar acostumado a', ''], ['look forward to', 'lúk fórward tu', 'esperar ansiosamente', ''], ['accustomed', 'akâstomd', 'acostumado', ''],
      ]),
      gramatica(8, 'Be used to + -ing', 'PASSO 1: «used to + verbo» = costumava (passado): «I used to live in Rio.» PASSO 2: «be used to + -ing/substantivo» = estar acostumado: «I am used to getting up early.» PASSO 3: «get used to + -ing» = acostumar-se (processo): «I\'m getting used to living here.» PASSO 4: nas duas últimas, o «to» é preposição e leva -ing. PASSO 5: compare: «I used to get up early» (antes, e não mais) × «I am used to getting up early» (hoje, já estou habituado).', {
        tag: 'Used to × be used to',
        comparacao: 'em português «eu costumava acordar cedo» e «estou acostumado a acordar cedo» são frases diferentes. Em inglês, «used to» e «be used to» também diferem, e o segundo pede -ing.',
        tabela: [
          { forma: 'used to + verbo', sentido: 'costumava', exemplo: 'I used to live in Rio.' }, { forma: 'be used to + -ing', sentido: 'estar acostumado', exemplo: 'I am used to getting up early.' }, { forma: 'get used to + -ing', sentido: 'acostumar-se', exemplo: 'I am getting used to living here.' },
        ],
        erros: [['I am used to get up early.', 'I am used to getting up early.', 'be used to + -ing.'], ['I used to getting up early.', 'I used to get up early. / I am used to getting up early.', 'Duas formas diferentes.']],
      }),
      dialogo(8, 'A new city / Uma cidade nova', 'Carlos conversa com Julia sobre a mudança dele.', [
        ['Julia', 'How is your new life in New York, Carlos?', 'Como está a sua nova vida em Nova York, Carlos?'], ['Carlos', 'It\'s great, but I\'m still getting used to living here.', 'Está ótimo, mas ainda estou me acostumando a viver aqui.'], ['Julia', 'What\'s the hardest thing?', 'Qual é a parte mais difícil?'], ['Carlos', 'I\'m not used to eating dinner so early. In Brazil, I used to eat at nine.', 'Não estou acostumado a jantar tão cedo. No Brasil, eu costumava jantar às nove.'], ['Julia', 'You\'ll get used to it. Don\'t forget to try the pizza near my office!', 'Você vai se acostumar. Não se esqueça de experimentar a pizza perto do meu escritório!'], ['Carlos', 'I remember seeing it. I\'m looking forward to trying it.', 'Lembro de ter visto. Estou ansioso para experimentar.'],
      ]),
      producao(5, 'Escreva 6 frases sobre uma mudança na sua vida com used to, be used to e get used to.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 49', [
      revisao(5, 'Fale do que você gosta de fazer, quer fazer, evita fazer e se acostumou a fazer.'),
      exercicios(20, [
        ouvir('I enjoy reading books', ['I enjoy reading books', 'I enjoy to read books', 'I enjoy read books'], 'I enjoy reading books', 'Ouça «reading».'), ouvir('She decided to leave', ['She decided to leave', 'She decided leaving', 'She decided leave'], 'She decided to leave', 'Ouça «to leave».'), ditado('I forgot to call you', 'Escreva: I forgot to call you.'), ditado('He stopped smoking last year', 'Escreva: he stopped smoking last year.'),
        mc('Qual frase está correta?', ['I enjoy reading.', 'I enjoy to read.', 'I enjoy read.'], 'I enjoy reading.', 'enjoy + -ing.'), mc('Qual frase está correta?', ['I want to learn.', 'I want learning.', 'I want learn.'], 'I want to learn.', 'want + to.'), mc('Qual frase significa «largou o cigarro»?', ['He stopped smoking.', 'He stopped to smoke.', 'He stopped smoke.'], 'He stopped smoking.', 'stop + -ing.'), mc('Qual frase está correta?', ['I am used to getting up early.', 'I am used to get up early.', 'I used to getting up early.'], 'I am used to getting up early.', 'be used to + -ing.'),
        lacuna('She avoids ___ in the rain. (dirigir)', ['driving', 'to drive', 'drive'], 'driving', 'avoid + -ing.'), lacuna('They decided ___ the city. (deixar)', ['to leave', 'leaving', 'leave'], 'to leave', 'decide + to.'), lacuna('Remember ___ the door. (trancar, futuro)', ['to lock', 'locking', 'lock'], 'to lock', 'remember to.'), lacuna('I\'m interested in ___ English. (aprender)', ['learning', 'to learn', 'learn'], 'learning', 'preposição + -ing.'),
        ordem('Ordene: «I enjoy reading books.»', ['I', 'enjoy', 'reading', 'books'], 'I enjoy reading books.', 'enjoy + -ing.'), ordem('Ordene: «She decided to leave early.»', ['She', 'decided', 'to', 'leave', 'early'], 'She decided to leave early.', 'decide + to.'),
        livre('Escreva 4 frases: uma com enjoy + -ing, uma com want + to, uma com stop e uma com be used to.', 'I enjoy reading. I want to learn English. He stopped smoking. I am used to getting up early.'),
      ]),
      producao(5, 'Fale 1 minuto sobre hábitos que você quer mudar, usando stop, try e remember.'),
    ]),
  ],
});
