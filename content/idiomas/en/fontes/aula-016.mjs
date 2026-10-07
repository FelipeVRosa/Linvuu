import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 16, titulo: 'Agora: o presente contínuo', nivel: 'a1',
  objetivo: 'Dizer o que está acontecendo agora com «be + verbo-ing», fazer perguntas e negativas, e distinguir o presente simples do presente contínuo.',
  nota: 'Você diz o que está fazendo agora. Próxima aula: tempo e clima.',
  sessoes: [
    sessao('S1', 'Be + verbo-ing', [
      revisao(5, 'Compre uma roupa em voz alta: peça, tamanho, preço e decisão.'),
      palavras(8, [
        ['now', 'náu', 'agora', ''], ['right now', 'ráit náu', 'neste momento', ''], ['at the moment', 'ét dâ môument', 'no momento', ''], ['eat', 'iit', 'comer', ''], ['write', 'ráit', 'escrever', ''], ['sleep', 'sliip', 'dormir', ''], ['talk', 'tók', 'conversar', ''], ['study', 'stâdi', 'estudar', ''],
      ]),
      gramatica(12, 'O presente contínuo', 'PASSO 1: usamos o presente contínuo para o que acontece AGORA: «I am studying.», «She is eating.» PASSO 2: a estrutura é «to be» (am/is/are) + verbo com -ing. PASSO 3: as regras do -ing da aula 13: study → studying, make → making, run → running. PASSO 4: contrações: «I\'m studying», «She\'s eating», «They\'re sleeping». PASSO 5: palavras que indicam o momento: now, right now, at the moment, today. PASSO 6: não esqueça o «to be»: «She eating» está errado em inglês, mesmo que em português «ela comendo» soe natural na fala. PASSO 7: o contínuo mostra algo em andamento, que vai acabar.', {
        tag: 'Presente contínuo',
        comparacao: 'em português usamos «estar + -ndo» («estou estudando»). O inglês faz idêntico: «to be + -ing». Isso é um acerto direto: «estou estudando» = «I am studying».',
        tabela: [
          { pessoa: 'I', forma: 'I am studying', curta: 'I\'m studying' }, { pessoa: 'he / she / it', forma: 'She is eating', curta: 'She\'s eating' }, { pessoa: 'you / we / they', forma: 'They are sleeping', curta: 'They\'re sleeping' },
        ],
        erros: [['She eating now.', 'She is eating now.', 'Falta o «to be».'], ['I am study.', 'I am studying.', 'Precisa de -ing.'], ['He is runing.', 'He is running.', 'Dobra o n.'], ['We is talking.', 'We are talking.', 'we → are.']],
      }),
      producao(5, 'Diga 5 coisas que está fazendo agora ou que as pessoas ao seu redor estão fazendo.'),
    ]),
    sessao('S2', 'Negativa e pergunta', [
      revisao(4, 'Dê o -ing de: write, sit, sleep, make, play, run.'),
      palavras(6, [
        ['wait', 'uêit', 'esperar', ''], ['watch', 'uótch', 'assistir', ''], ['drink', 'drínk', 'beber', ''], ['clean', 'kliin', 'limpar', ''], ['call', 'kól', 'ligar', ''], ['work', 'uãrk', 'trabalhar', ''],
      ]),
      gramatica(12, 'Negativa, pergunta e resposta curta', 'PASSO 1: negativa: «am/is/are + not + verbo-ing»: «I\'m not working.», «She isn\'t eating.», «They aren\'t waiting.» PASSO 2: pergunta: inverta o «to be»: «Are you working?», «Is she eating?» PASSO 3: com palavra de pergunta: «What are you doing?» → «I\'m studying.» PASSO 4: resposta curta: «Yes, I am.» / «No, I\'m not.» / «Yes, she is.» / «No, they aren\'t.» PASSO 5: não use «do/does» nesse tempo. PASSO 6: pergunta típica ao telefone: «What are you doing?» (o que você está fazendo?).', {
        tag: 'Contínuo',
        comparacao: 'em português «Você está trabalhando?» usa «estar». Em inglês, o «to be» vai ao começo: «Are you working?».',
        tabela: [
          { afirmativa: 'I\'m working.', negativa: 'I\'m not working.', pergunta: 'Am I working?' }, { afirmativa: 'She\'s eating.', negativa: 'She isn\'t eating.', pergunta: 'Is she eating?' }, { afirmativa: 'They\'re waiting.', negativa: 'They aren\'t waiting.', pergunta: 'Are they waiting?' },
        ],
        erros: [['Do you working now?', 'Are you working now?', 'Use «to be», não «do».'], ['She doesn\'t eating.', 'She isn\'t eating.', 'Negativa com «to be».'], ['What you are doing?', 'What are you doing?', 'Inverta.'], ['Is she eat?', 'Is she eating?', 'Precisa de -ing.']],
      }),
      producao(8, 'Faça 4 perguntas com «What are you doing?» e «Is she…?» e responda com resposta curta.'),
    ]),
    sessao('S3', 'Simples ou contínuo?', [
      revisao(4, 'Diga o que 3 pessoas estão fazendo agora e o que NÃO estão fazendo.'),
      palavras(5, [
        ['usually', 'iujuali', 'geralmente', ''], ['today', 'tudêi', 'hoje', ''], ['this week', 'dis uíik', 'esta semana', ''], ['every day', 'évri dêi', 'todo dia', ''], ['at the moment', 'ét dâ môument', 'no momento', ''],
      ]),
      gramatica(8, 'Presente simples x presente contínuo', 'PASSO 1: o PRESENTE SIMPLES é para rotina e fatos: «I work every day.», «She plays football on Saturdays.» PASSO 2: o PRESENTE CONTÍNUO é para o que acontece agora ou nesta fase: «I\'m working now.», «She\'s playing football today.» PASSO 3: pistas do simples: always, usually, every day, on Mondays. PASSO 4: pistas do contínuo: now, right now, at the moment, today, this week. PASSO 5: verbos de estado normalmente NÃO usam o contínuo: «I know», «I like», «I want», «I have» (posse). Diga «I know her», não «I am knowing her»; «I like it», não «I am liking it».', {
        tag: 'Simples x contínuo',
        comparacao: 'em português o presente («eu trabalho») cobre rotina e agora, e «estou trabalhando» cobre o momento. Em inglês, as duas formas são mais separadas: rotina = simples, agora = contínuo.',
        tabela: [
          { tempo: 'Simples', quando: 'rotina, fato', exemplo: 'I work every day.' }, { tempo: 'Contínuo', quando: 'agora', exemplo: 'I\'m working now.' }, { tempo: 'Simples', quando: 'estado', exemplo: 'I like coffee.' }, { tempo: 'Contínuo', quando: 'fase atual', exemplo: 'I\'m learning English this year.' },
        ],
        erros: [['I\'m knowing her.', 'I know her.', '«know» é estado.'], ['I\'m liking this song.', 'I like this song.', '«like» é estado.'], ['She works now.', 'She is working now.', '«now» pede contínuo.'], ['He is playing football every Sunday.', 'He plays football every Sunday.', '«every» pede simples.']],
      }),
      texto(8, 'A phone call / Um telefonema', 'Hello Tom, it\'s Ana. What are you doing? I\'m not working today. I\'m at home. I\'m cooking dinner and my brother is watching TV. It\'s raining now, so we aren\'t going out. I usually go out on Fridays, but today is different. Are you free? Come and eat with us!',
        'Olá Tom, é a Ana. O que você está fazendo? Hoje não estou trabalhando. Estou em casa. Estou fazendo o jantar e meu irmão está assistindo TV. Está chovendo agora, então não vamos sair. Geralmente saio às sextas, mas hoje é diferente. Você está livre? Venha comer com a gente!',
        [['What is Ana doing?', 'She is cooking dinner.'], ['What is her brother doing?', 'He is watching TV.'], ['Why aren\'t they going out?', 'Because it is raining.'], ['What does Ana usually do on Fridays?', 'She usually goes out.']]),
      producao(5, 'Escreva 5 frases: 3 do que você está fazendo agora e 2 da sua rotina, sem misturar os tempos.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 16', [
      revisao(5, 'Diga o que você faz todo dia e o que você está fazendo agora.'),
      exercicios(20, [
        ouvir('She is cooking dinner now', ['She is cooking dinner now', 'She cooks dinner now', 'He is cooking dinner now'], 'She is cooking dinner now', 'Ouça «is cooking».'), ouvir('What are you doing', ['What are you doing', 'What do you do', 'What are you eating'], 'What are you doing', 'Ouça «are you doing».'), ditado('They are watching TV', 'Escreva: they are watching TV.'), ditado('I\'m not working today', 'Escreva: I\'m not working today.'),
        mc('Qual frase está correta?', ['She is eating.', 'She eating.', 'She is eat.'], 'She is eating.', 'be + -ing.'), mc('Qual é a pergunta correta?', ['Are you working?', 'Do you working?', 'You are working?'], 'Are you working?', 'to be + sujeito.'), mc('Qual frase é de rotina?', ['I work every day.', 'I\'m working now.', 'I\'m working at the moment.'], 'I work every day.', 'Rotina: simples.'), mc('Qual é a correta?', ['I know her.', 'I\'m knowing her.', 'I am know her.'], 'I know her.', '«know» é estado.'),
        lacuna('She ___ eating now.', ['is', 'are', 'does'], 'is', 'she → is.'), lacuna('They ___ waiting. (não estão)', ['aren\'t', 'don\'t', 'doesn\'t'], 'aren\'t', 'Negativa de to be.'), lacuna('He is ___ . (dormindo)', ['sleeping', 'sleep', 'sleeps'], 'sleeping', '-ing.'), lacuna('What ___ you doing?', ['are', 'do', 'is'], 'are', 'are you.'),
        ordem('Ordene: «She is not working today.»', ['She', 'is', 'not', 'working', 'today'], 'She is not working today.', 'is + not + -ing.'), ordem('Ordene: «Are they watching TV?»', ['Are', 'they', 'watching', 'TV'], 'Are they watching TV?', 'Are + sujeito + -ing.'),
        livre('Escreva 4 frases: uma do que você faz todo dia e três do que as pessoas ao redor estão fazendo agora.', 'I work every day. My mother is cooking. My brother is watching TV. I am studying English.'),
      ]),
      producao(5, 'Descreva em 1 minuto o que acontece ao seu redor agora, pessoa por pessoa.'),
    ]),
  ],
});
