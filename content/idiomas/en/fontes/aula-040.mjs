import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 40, titulo: 'Past perfect: o passado do passado', nivel: 'b1',
  objetivo: 'Usar o past perfect («had + particípio») para uma ação anterior a outra no passado, contar histórias em duas camadas e usar «by the time», «before», «after» e «already».',
  nota: 'Você conta o que tinha acontecido antes. Próxima aula: segundo condicional.',
  sessoes: [
    sessao('S1', 'Had + particípio', [
      revisao(5, 'Explique o que você tem feito ultimamente e há quanto tempo.'),
      palavras(8, [
        ['had finished', 'héd fínicht', 'tinha terminado', ''], ['had left', 'héd léft', 'tinha saído', ''], ['by the time', 'bái dâ táim', 'quando (já tinha)', ''], ['before', 'bifór', 'antes (de)', ''], ['after', 'éfter', 'depois (de)', ''], ['already', 'olrédi', 'já', ''], ['never… before', 'néver bifór', 'nunca antes', ''], ['earlier', 'ãrlier', 'mais cedo', ''],
      ]),
      gramatica(12, 'Past perfect', 'PASSO 1: o past perfect = «had + particípio». É igual para todas as pessoas: «I had finished», «she had finished». PASSO 2: serve para uma ação que aconteceu ANTES de outra ação passada: «When I arrived, the film had started.» (primeiro o filme começou, depois eu cheguei). PASSO 3: a ação mais ANTIGA vai no past perfect; a mais recente vai no passado simples. PASSO 4: negativa: «hadn\'t»: «I hadn\'t eaten, so I was hungry.» PASSO 5: pergunta: «Had you seen it before?» PASSO 6: conectores: «before», «after», «by the time», «when», «already», «just»: «By the time we arrived, they had left.» PASSO 7: se a ordem já está clara por «before/after», o passado simples costuma bastar: «After I ate, I left.»', {
        tag: 'Past perfect',
        comparacao: 'em português o mais-que-perfeito («tinha saído») existe, mas quase não se usa: dizemos «quando cheguei, ele já tinha saído» com «tinha + particípio», que é o mesmo caminho do inglês: «had left».',
        tabela: [
          { afirmativa: 'I had finished.', negativa: 'I hadn\'t finished.', pergunta: 'Had I finished?' }, { afirmativa: 'She had left.', negativa: 'She hadn\'t left.', pergunta: 'Had she left?' }, { afirmativa: 'They had arrived.', negativa: 'They hadn\'t arrived.', pergunta: 'Had they arrived?' },
        ],
        erros: [['When I arrived, the film started.', 'When I arrived, the film had started.', 'O filme começou antes: past perfect.'], ['I had went home.', 'I had gone home.', 'Particípio de go: gone.'], ['She has left before I arrived.', 'She had left before I arrived.', 'Dois fatos no passado: had.'], ['Had you saw it?', 'Had you seen it?', 'Particípio: seen.']],
      }),
      producao(5, 'Diga 5 frases com «When I arrived, ... had already...»'),
    ]),
    sessao('S2', 'Duas ações, duas camadas', [
      revisao(4, 'Dê o particípio de: go, see, eat, write, take, break, speak, begin.'),
      palavras(6, [
        ['by the time', 'bái dâ táim', 'quando já', ''], ['realize', 'rialáiz', 'perceber', ''], ['forget', 'forguét', 'esquecer', ''], ['forgot', 'forgót', 'esqueceu', ''], ['missed', 'mist', 'perdeu', ''], ['luckily', 'lâkili', 'felizmente', ''],
      ]),
      gramatica(12, 'Contar com o past perfect', 'PASSO 1: use o past perfect para EXPLICAR por que algo aconteceu: «I was late because I had missed the bus.» PASSO 2: para dar o contexto antes de uma história: «She was sad. Her friend had moved away.» PASSO 3: com «by the time»: «By the time I found my keys, the bus had left.» PASSO 4: com «realize/discover» + past perfect: «I realized I had forgotten my passport.» PASSO 5: não use o past perfect só porque a ação é antiga: use apenas se há OUTRA ação passada com a qual comparar. PASSO 6: sequência de ações em ordem: use o passado simples: «I woke up, ate breakfast and left.»', {
        tag: 'Duas camadas',
        comparacao: 'em português contamos em ordem cronológica e o contexto indica a ordem. Em inglês, quando a ordem é invertida (primeiro o resultado, depois a causa), o past perfect avisa o ouvinte.',
        tabela: [
          { efeito: 'I was late.', causa: 'I had missed the bus.' }, { efeito: 'She was sad.', causa: 'Her friend had moved away.' }, { efeito: 'I couldn\'t get in.', causa: 'I had forgotten my key.' },
        ],
        erros: [['I woke up, had eaten and left.', 'I woke up, ate and left.', 'Em ordem: simples.'], ['I realized I forgot my passport.', 'I realized I had forgotten my passport.', 'Causa anterior: past perfect.'], ['By the time I arrived, he left.', 'By the time I arrived, he had left.', 'by the time → past perfect.']],
      }),
      producao(8, 'Explique 5 situações com causa anterior: «I was late because I had…»'),
    ]),
    sessao('S3', 'Uma história com surpresa', [
      revisao(4, 'Complete: «When I got home, my brother ___ (eat) all the food.»'),
      palavras(5, [
        ['surprise', 'sarpráiz', 'surpresa', ''], ['mistake', 'mistêik', 'erro', ''], ['lock', 'lók', 'trancar', ''], ['neighbor', 'nêibor', 'vizinho', ''], ['spare key', 'spér kii', 'chave reserva', ''],
      ]),
      gramatica(8, 'Past perfect contínuo (introdução)', 'PASSO 1: «had been + -ing» mostra uma ação que ESTAVA EM ANDAMENTO antes de outra: «I had been waiting for an hour when the bus arrived.» PASSO 2: use para duração antes de um momento passado. PASSO 3: pergunta: «How long had you been waiting?» PASSO 4: compare: «I had waited» (esperei, terminou) × «I had been waiting» (esperava, durou).', {
        tag: 'Past perfect contínuo',
        comparacao: 'em português «eu esperava há uma hora quando o ônibus chegou» usa o imperfeito. Em inglês, «had been waiting» faz o mesmo e mostra duração anterior.',
        tabela: [
          { frase: 'I had been waiting for an hour when the bus arrived.', sentido: 'esperava havia uma hora' }, { frase: 'She had been working all day, so she was tired.', sentido: 'trabalhava o dia todo' },
        ],
        erros: [['I was waiting for an hour when the bus arrived.', 'I had been waiting for an hour when the bus arrived.', 'Duração anterior: had been.'], ['How long have you been waiting when he came?', 'How long had you been waiting when he came?', 'Passado: had.']],
      }),
      texto(8, 'The wrong day / O dia errado', 'Last Friday, I woke up early because I had an important meeting. I took a shower, had breakfast and left home at seven. By the time I arrived at the office, the doors were closed. I had been waiting for ten minutes when my boss called. He said that the meeting had been on Thursday! I had made a mistake. I had read the wrong date in the email. I laughed, went home and had a quiet day. Now I always check the calendar twice.',
        'Na sexta passada, acordei cedo porque tinha uma reunião importante. Tomei banho, tomei café e saí de casa às sete. Quando cheguei ao escritório, as portas estavam fechadas. Esperava havia dez minutos quando o meu chefe ligou. Ele disse que a reunião tinha sido na quinta! Eu tinha cometido um erro. Tinha lido a data errada no e-mail. Ri, voltei para casa e tive um dia tranquilo. Agora sempre confiro o calendário duas vezes.',
        [['Why did the person wake up early?', 'Because of an important meeting.'], ['What had happened by the time the person arrived?', 'The doors were closed.'], ['When was the meeting?', 'On Thursday.'], ['What mistake had the person made?', 'They had read the wrong date.']]),
      producao(5, 'Conte em 6 frases um erro seu, usando 2 vezes o past perfect.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 40', [
      revisao(5, 'Conte uma história em que algo já tinha acontecido antes da sua chegada.'),
      exercicios(20, [
        ouvir('When I arrived, the film had started', ['When I arrived, the film had started', 'When I arrived, the film started', 'When I arrived, the film has started'], 'When I arrived, the film had started', 'Ouça «had started».'), ouvir('She had already left', ['She had already left', 'She has already left', 'She already left'], 'She had already left', 'Ouça «had».'), ditado('I had forgotten my passport', 'Escreva: I had forgotten my passport.'), ditado('By the time we arrived, they had gone', 'Escreva: by the time we arrived, they had gone.'),
        mc('Qual frase está correta?', ['When I arrived, he had left.', 'When I arrived, he has left.', 'When I arrived, he leaves.'], 'When I arrived, he had left.', 'Ação anterior.'), mc('Qual é o particípio de «go»?', ['gone', 'went', 'goed'], 'gone', 'had gone.'), mc('Qual frase mostra duração antes de outro momento?', ['I had been waiting for an hour.', 'I waited an hour.', 'I am waiting an hour.'], 'I had been waiting for an hour.', 'had been + -ing.'), mc('Qual frase está correta?', ['I was late because I had missed the bus.', 'I was late because I missed had the bus.', 'I was late because I have missed the bus.'], 'I was late because I had missed the bus.', 'Causa anterior.'),
        lacuna('By the time I arrived, she ___ left.', ['had', 'has', 'was'], 'had', 'past perfect.'), lacuna('I realized I ___ forgotten my keys.', ['had', 'have', 'has'], 'had', 'past perfect.'), lacuna('How long ___ you been waiting?', ['had', 'have', 'did'], 'had', 'Passado: had.'), lacuna('She ___ eaten, so she was hungry. (não tinha)', ['hadn\'t', 'wasn\'t', 'didn\'t'], 'hadn\'t', 'hadn\'t eaten.'),
        ordem('Ordene: «I had already eaten when he called.»', ['I', 'had', 'already', 'eaten', 'when', 'he', 'called'], 'I had already eaten when he called.', 'had + already + particípio.'), ordem('Ordene: «She hadn\'t seen the movie before.»', ['She', 'hadn\'t', 'seen', 'the', 'movie', 'before'], 'She hadn\'t seen the movie before.', 'hadn\'t + particípio.'),
        livre('Escreva 4 frases explicando uma situação com causa anterior, usando «had».', 'I was late because I had missed the bus. She was sad because her friend had moved. By the time I arrived, they had left. I realized I had forgotten my keys.'),
      ]),
      producao(5, 'Conte em 1 minuto um dia em que tudo deu errado e por quê, usando o past perfect.'),
    ]),
  ],
});
