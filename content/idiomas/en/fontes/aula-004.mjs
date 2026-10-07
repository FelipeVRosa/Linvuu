import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 4, titulo: 'Presente simples: rotina e hábitos', nivel: 'a1',
  objetivo: 'Falar de rotina, hábitos e fatos com o presente simples: afirmativa (com o -s de he, she e it), negativa e perguntas com do e does, e os advérbios de frequência.',
  nota: 'Você fala da sua rotina e faz perguntas sobre a rotina dos outros. Próxima aula: artigos, plural e as coisas ao redor (this, that, there is).',
  sessoes: [
    sessao('S1', 'Presente simples: I, you, we, they', [
      revisao(5, 'Diga a sua idade, o seu país e a sua nacionalidade em inglês, sem olhar.'),
      palavras(8, [
        ['work', 'uérk', 'trabalhar', ''], ['live', 'liv', 'morar, viver', ''], ['study', 'stâdi', 'estudar', ''], ['speak', 'spiik', 'falar', ''], ['eat', 'iit', 'comer', ''], ['drink', 'drínk', 'beber', ''], ['like', 'láik', 'gostar de', ''], ['watch', 'uótch', 'assistir, observar', ''],
      ]),
      gramatica(12, 'O presente simples: rotina, hábitos e fatos', 'PASSO 1: o presente simples serve para rotina («I work every day»), hábito («I drink coffee in the morning») e fatos permanentes («They live in Rio»). PASSO 2: com «I», «you», «we» e «they» o verbo fica na forma básica, sem nada acrescentado: I work, you work, we work, they work. PASSO 3: o verbo principal NÃO leva «to be» junto. Não diga «I am work», nem «we are live». PASSO 4: idiomas vêm sem artigo: «I speak English», não «I speak the English». PASSO 5: expressões de tempo que acompanham esse tempo verbal: every day, every week, on Mondays, in the morning, at night.', {
        tag: 'Verbos',
        comparacao: 'em português o presente também descreve rotina («eu trabalho todo dia»), mas o inglês reserva o presente simples para rotinas, hábitos e fatos. Para o que acontece AGORA, usa outro tempo (você verá mais adiante).',
        tabela: [
          { sujeito: 'I', exemplo: 'I work in São Paulo.', pt: 'Eu trabalho em São Paulo.' }, { sujeito: 'you', exemplo: 'You speak English well.', pt: 'Você fala inglês bem.' }, { sujeito: 'we', exemplo: 'We study every day.', pt: 'Nós estudamos todo dia.' }, { sujeito: 'they', exemplo: 'They live in Brazil.', pt: 'Eles moram no Brasil.' },
        ],
        erros: [['I am work in Rio.', 'I work in Rio.', 'O verbo principal não leva «to be».'], ['I speak the English.', 'I speak English.', 'Idiomas não levam artigo.'], ['We are live in Brazil.', 'We live in Brazil.', 'Verbo no presente simples, sem «are».']],
      }),
      producao(5, 'Diga 5 frases sobre a sua rotina com I ou we: «I work… I study… I drink… I speak… I live…»'),
    ]),
    sessao('S2', 'He, she, it: o -s do presente', [
      revisao(5, 'Escreva 4 frases da sessão anterior e troque «I» por «they».'),
      palavras(5, [
        ['wake up', 'uêik âp', 'acordar', ''], ['get up', 'guét âp', 'levantar-se', ''], ['breakfast', 'brékfast', 'café da manhã', ''], ['lunch', 'lântch', 'almoço', ''], ['dinner', 'díner', 'jantar', ''],
      ]),
      gramatica(15, 'O -s da terceira pessoa', 'PASSO 1: com «he», «she» e «it», o verbo recebe -s: I work → he works; you live → she lives. PASSO 2: a ortografia muda em alguns casos. Depois de s, sh, ch, x, z e na maioria dos verbos em o, acrescente -es: watch → watches, wash → washes, go → goes, do → does. Consoante + y vira -ies: study → studies. Vogal + y só ganha -s: play → plays. O verbo «have» é irregular: he HAS. PASSO 3: o -s soa de três jeitos. Depois de som sem voz: /s/ (works, eats). Depois de som com voz: /z/ (lives, plays). Depois de s, sh, ch, x, z: /ɪz/, uma sílaba a mais (watches, washes). PASSO 4: esquecer o -s é o erro mais comum de quem fala português, porque no português o verbo muda em todas as pessoas. Em inglês, a única mudança é essa.', {
        tag: 'Verbos',
        comparacao: 'o português conjuga todas as pessoas («trabalho, trabalhas, trabalha…»). O inglês deixou quase tudo para trás: sobra só o -s de he, she e it.',
        tabela: [
          { verbo: 'work', ele: 'works', regra: '+ s', som: '/s/', exemplo: 'He works in a bank.' }, { verbo: 'live', ele: 'lives', regra: '+ s', som: '/z/', exemplo: 'She lives here.' }, { verbo: 'watch', ele: 'watches', regra: '+ es', som: '/ɪz/', exemplo: 'He watches TV.' },
          { verbo: 'go', ele: 'goes', regra: '+ es', som: '/z/', exemplo: 'She goes to work.' }, { verbo: 'study', ele: 'studies', regra: 'y → ies', som: '/z/', exemplo: 'He studies English.' }, { verbo: 'play', ele: 'plays', regra: '+ s', som: '/z/', exemplo: 'She plays tennis.' }, { verbo: 'have', ele: 'has', regra: 'irregular', som: '/z/', exemplo: 'It has two doors.' },
        ],
        erros: [['She work in a bank.', 'She works in a bank.', 'he, she e it: acrescente -s.'], ['He studys English.', 'He studies English.', 'Consoante + y vira -ies.'], ['He haves a car.', 'He has a car.', '«have» fica «has» com he, she e it.'], ['She watchs TV.', 'She watches TV.', 'Depois de ch, use -es.']],
      }),
      producao(5, 'Descreva a rotina de uma pessoa da sua família com «he» ou «she»: «She wakes up at… She works… He eats… He goes…» (pelo menos 5 frases).'),
    ]),
    sessao('S3', 'Negativa e perguntas com do e does', [
      revisao(4, 'Escreva 3 frases com «he» ou «she», cuidando do -s.'),
      gramatica(14, 'Don\'t, doesn\'t, do e does', 'PASSO 1: a negativa usa «don\'t» (do not) com I, you, we, they e «doesn\'t» (does not) com he, she, it, seguidos do verbo na forma BÁSICA: «I don\'t work», «She doesn\'t work». PASSO 2: o -s passa a ficar no «does»; por isso o verbo principal volta à forma básica: NUNCA «She doesn\'t works». PASSO 3: a pergunta de sim ou não começa com «do» ou «does»: «Do you work here?», «Does he live in Rio?». O verbo principal também fica na forma básica. PASSO 4: respostas curtas: «Yes, I do.» / «No, I don\'t.» / «Yes, she does.» / «No, he doesn\'t.» PASSO 5: perguntas com palavra interrogativa: palavra + do/does + sujeito + verbo. «Where do you live?», «What does she do?» («What do you do?» pergunta a profissão.) PASSO 6: com «to be» NÃO se usa do/does: «Are you tired?», não «Do you are tired?».', {
        tag: 'Verbos',
        comparacao: 'em português basta colocar «não» antes do verbo e mudar a entonação para perguntar. Em inglês, entra um verbo auxiliar (do/does) que faz a negativa e a pergunta, e o verbo principal fica na forma básica.',
        tabela: [
          { afirmativa: 'I work here.', negativa: 'I don\'t work here.', pergunta: 'Do you work here?' }, { afirmativa: 'They live in Rio.', negativa: 'They don\'t live in Rio.', pergunta: 'Do they live in Rio?' },
          { afirmativa: 'He works in a bank.', negativa: 'He doesn\'t work in a bank.', pergunta: 'Does he work in a bank?' }, { afirmativa: 'She studies English.', negativa: 'She doesn\'t study English.', pergunta: 'Does she study English?' },
        ],
        erros: [['She doesn\'t works.', 'She doesn\'t work.', '«does» já leva o -s; o verbo principal fica básico.'], ['Does she works here?', 'Does she work here?', 'Depois de «does», verbo básico.'], ['I no work on Sundays.', 'I don\'t work on Sundays.', 'Para negar o verbo, use don\'t/doesn\'t.'], ['Do you are tired?', 'Are you tired?', 'Com «to be» não se usa do/does.']],
      }),
      dialogo(7, 'Where do you live? / Onde você mora?', 'Sarah e Ben conversam num evento.', [
        ['Sarah', 'Where do you live, Ben?', 'Onde você mora, Ben?'], ['Ben', 'I live in Boston. Do you live here?', 'Moro em Boston. Você mora aqui?'], ['Sarah', 'No, I don\'t. I live in Chicago, but I work here.', 'Não. Moro em Chicago, mas trabalho aqui.'],
        ['Ben', 'What do you do?', 'O que você faz? (Qual é a sua profissão?)'], ['Sarah', 'I\'m a nurse. And you?', 'Sou enfermeira. E você?'], ['Ben', 'I work in a bank. I don\'t like my job very much.', 'Trabalho num banco. Não gosto muito do meu emprego.'],
      ]),
      producao(5, 'Responda em voz alta: Where do you live? What do you do? Do you speak English? Do you study every day? Does your friend work?'),
    ]),
    sessao('S4', 'Frequência e revisão da aula 4', [
      revisao(5, 'Diga a negativa e a pergunta de: «She works in a bank.»'),
      gramatica(8, 'Advérbios de frequência', 'PASSO 1: os advérbios dizem com que frequência algo acontece: always (sempre), usually (geralmente), often (frequentemente), sometimes (às vezes), never (nunca). PASSO 2: eles ficam ANTES do verbo principal: «I always eat breakfast», «She never drinks coffee». PASSO 3: mas ficam DEPOIS do verbo «to be»: «He is always late», «We are never tired». PASSO 4: «never» já é negativo; não use outro «not»: «I never work on Sundays», nunca «I don\'t never work».', {
        tag: 'Advérbios',
        comparacao: 'em português o advérbio é flexível («sempre como…» ou «como sempre…»). Em inglês, a posição é bem mais fixa.',
        tabela: [
          { adverbio: 'always', pronuncia: 'ólueiz', exemplo: 'I always eat breakfast.', pt: 'Eu sempre tomo café da manhã.' }, { adverbio: 'usually', pronuncia: 'iúzhuali', exemplo: 'She usually works at home.', pt: 'Ela geralmente trabalha em casa.' }, { adverbio: 'often', pronuncia: 'ófen', exemplo: 'We often watch TV.', pt: 'Nós frequentemente assistimos TV.' },
          { adverbio: 'sometimes', pronuncia: 'sâmtaimz', exemplo: 'He sometimes drinks tea.', pt: 'Ele às vezes bebe chá.' }, { adverbio: 'never', pronuncia: 'néver', exemplo: 'They never eat meat.', pt: 'Eles nunca comem carne.' },
        ],
        erros: [['I eat always breakfast.', 'I always eat breakfast.', 'O advérbio vem antes do verbo principal.'], ['He always is late.', 'He is always late.', 'Com «to be», o advérbio vem depois.'], ['I don\'t never work on Sundays.', 'I never work on Sundays.', '«never» já nega; não acrescente «don\'t».']],
      }),
      exercicios(12, [
        ouvir('She works in a bank', ['She works in a bank', 'She walks in a park', 'They work in a bank'], 'She works in a bank', 'Ouça o -s e o lugar.'), ouvir('I do not like coffee', ['I do not like coffee', 'I like coffee', 'He does not like coffee'], 'I do not like coffee', 'Ouça «do not» (negativa).'), ditado('We speak English', 'Escreva: we speak English, sem «the».'),
        mc('Qual frase está correta?', ['She works here.', 'She work here.', 'She is work here.'], 'She works here.', 'she + verbo com -s.'), mc('Qual frase está correta?', ['He doesn\'t work.', 'He doesn\'t works.', 'He don\'t work.'], 'He doesn\'t work.', '«doesn\'t» + verbo básico.'), mc('Qual é a pergunta correta?', ['Does she live here?', 'Does she lives here?', 'Do she live here?'], 'Does she live here?', '«does» + verbo básico.'),
        lacuna('He ___ English. (estuda)', ['studies', 'studys', 'study'], 'studies', 'Consoante + y → ies.'), lacuna('They ___ in Rio. (moram)', ['live', 'lives', 'are live'], 'live', 'they + verbo básico.'), lacuna('She ___ eat meat. (não come)', ['doesn\'t', 'don\'t', 'isn\'t'], 'doesn\'t', 'she + doesn\'t.'), lacuna('I ___ drink coffee. (nunca bebo)', ['never', 'don\'t never', 'not'], 'never', '«never» já é negativo.'),
        ordem('Ordene: «He always eats breakfast.»', ['He', 'always', 'eats', 'breakfast'], 'He always eats breakfast.', 'O advérbio vem antes do verbo principal.'), ordem('Ordene: «Do you live here?»', ['Do', 'you', 'live', 'here'], 'Do you live here?', 'Do + sujeito + verbo básico.'),
      ]),
      producao(5, 'Fale por 1 minuto sobre a sua rotina, com pelo menos 3 advérbios de frequência. Depois faça duas perguntas com «do» ou «does» a alguém.'),
    ]),
  ],
});
