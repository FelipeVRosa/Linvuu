import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 2, titulo: 'Quem sou eu: o verbo to be', nivel: 'a1',
  objetivo: 'Dizer quem você é, como está e de onde vem com «to be» (afirmativa, negativa, perguntas e respostas curtas) e usar as contrações.',
  nota: 'Você fala de si com o verbo mais importante do inglês. Próxima aula: apresentações, países, números e idade.',
  sessoes: [
    sessao('S1', 'I am, you are, he is', [
      revisao(5, 'Soletre o seu nome em inglês e diga as saudações da aula 1.'),
      palavras(8, [
        ['I', 'ai', 'eu', ''], ['you', 'iú', 'você, vocês (tu, vós)', ''], ['he', 'hii', 'ele', ''], ['she', 'shii', 'ela', ''], ['it', 'it', 'ele, ela (coisa ou animal)', ''], ['we', 'uii', 'nós', ''], ['they', 'dhêi', 'eles, elas', ''],
      ]),
      gramatica(12, 'To be: ser e estar', 'PASSO 1: «to be» é «ser» e também «estar». «I am a doctor» (sou médico) e «I am tired» (estou cansado) usam o mesmo verbo. PASSO 2: em inglês o sujeito é obrigatório. Em português você pode dizer «sou brasileiro»; em inglês é «I am Brazilian», nunca «am Brazilian». PASSO 3: o verbo muda com o sujeito: I am; you are; he, she, it is; we are; you are; they are. PASSO 4: «you» serve para uma pessoa ou várias, e para tratamento formal ou informal: não existe «tu», «você» e «o senhor» separados. PASSO 5: antes de uma profissão ou identidade no singular, use «a» (antes de som de consoante) ou «an» (antes de som de vogal): a doctor, a student, an engineer. PASSO 6: fale com a contração, como os nativos: I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re.', {
        tag: 'Verbos',
        comparacao: 'em português o verbo já mostra quem é o sujeito, então o pronome some («sou», «somos»). Em inglês o verbo muda pouco, e por isso o sujeito precisa aparecer.',
        tabelas: [
          { titulo: 'to be no presente', linhas: [
            { sujeito: 'I', verbo: 'am', contracao: 'I\'m', exemplo: 'I am Anna.' }, { sujeito: 'you', verbo: 'are', contracao: 'you\'re', exemplo: 'You are my friend.' }, { sujeito: 'he', verbo: 'is', contracao: 'he\'s', exemplo: 'He is a doctor.' },
            { sujeito: 'she', verbo: 'is', contracao: 'she\'s', exemplo: 'She is tired.' }, { sujeito: 'it', verbo: 'is', contracao: 'it\'s', exemplo: 'It is a cat.' }, { sujeito: 'we', verbo: 'are', contracao: 'we\'re', exemplo: 'We are in Brazil.' }, { sujeito: 'they', verbo: 'are', contracao: 'they\'re', exemplo: 'They are students.' },
          ] },
        ],
        erros: [['Am a student.', 'I am a student.', 'O sujeito é obrigatório em inglês.'], ['I are Brazilian.', 'I am Brazilian.', '«am» só combina com «I».'], ['He are tired.', 'He is tired.', 'he, she e it usam «is».'], ['I am doctor.', 'I am a doctor.', 'Profissão no singular leva «a» ou «an».']],
      }),
      producao(5, 'Diga em voz alta, trocando o sujeito: «I am Brazilian. You are my friend. He is a doctor. She is tired. We are here. They are students.»'),
    ]),
    sessao('S2', 'A forma negativa e as contrações', [
      revisao(5, 'Escreva as 7 formas de «to be» (I, you, he, she, it, we, they) e a contração de cada uma.'),
      palavras(8, [
        ['happy', 'rrépi', 'feliz', ''], ['tired', 'táierd', 'cansado', ''], ['hungry', 'hângri', 'com fome', ''], ['busy', 'bízi', 'ocupado', ''], ['ready', 'rédi', 'pronto', ''], ['late', 'lêit', 'atrasado, tarde', ''], ['here', 'híir', 'aqui', ''], ['not', 'nót', 'não (com verbos)', ''],
      ]),
      gramatica(12, 'Dizer «não»: am not, is not, are not', 'PASSO 1: para negar, coloque «not» depois do «to be»: «I am not tired», «She is not here», «They are not ready». PASSO 2: na fala e na escrita informal use a contração. Há duas maneiras para «he», «she», «it», «you», «we» e «they»: «He is not» → «He isn\'t» ou «He\'s not»; «You are not» → «You aren\'t» ou «You\'re not». As duas estão certas. PASSO 3: com «I» só se usa uma contração: «I\'m not». A forma «amn\'t» não faz parte do inglês padrão. PASSO 4: o «not» fica sempre depois do verbo. Não diga «He not is happy». PASSO 5: «no» (não, como resposta) e «not» (negação do verbo) são palavras diferentes: «No, I\'m not tired.»', {
        tag: 'Verbos',
        comparacao: 'em português a negação vem ANTES do verbo («não estou cansado»). Em inglês, com «to be», ela vem DEPOIS («I am not tired»).',
        tabela: [
          { afirmativa: 'I am happy.', negativa: 'I am not happy. / I\'m not happy.', pt: 'Eu não estou feliz.' }, { afirmativa: 'You are busy.', negativa: 'You aren\'t busy. / You\'re not busy.', pt: 'Você não está ocupado.' },
          { afirmativa: 'He is late.', negativa: 'He isn\'t late. / He\'s not late.', pt: 'Ele não está atrasado.' }, { afirmativa: 'She is ready.', negativa: 'She isn\'t ready. / She\'s not ready.', pt: 'Ela não está pronta.' },
          { afirmativa: 'We are hungry.', negativa: 'We aren\'t hungry. / We\'re not hungry.', pt: 'Nós não estamos com fome.' }, { afirmativa: 'They are here.', negativa: 'They aren\'t here. / They\'re not here.', pt: 'Eles não estão aqui.' },
        ],
        erros: [['He not is happy.', 'He is not happy. / He isn\'t happy.', '«not» vem depois do «to be».'], ['I amn\'t tired.', 'I\'m not tired.', 'Com «I», use «I\'m not».'], ['She no is here.', 'She isn\'t here.', 'Use «not» (ou «n\'t»), não «no», para negar o verbo.']],
      }),
      producao(5, 'Responda em voz alta, com frases inteiras: Você está cansado? Você está com fome? Você está atrasado? Use «I\'m» ou «I\'m not».'),
    ]),
    sessao('S3', 'Perguntas e respostas curtas', [
      revisao(4, 'Transforme em negativa: «I am happy. She is here. They are students.»'),
      palavras(4, [
        ['student', 'stiúdent', 'estudante', ''], ['teacher', 'tíitcher', 'professor, professora', ''], ['doctor', 'dóktor', 'médico, médica', ''], ['from', 'frâm', 'de (origem)', ''],
      ]),
      gramatica(10, 'Perguntas com to be e respostas curtas', 'PASSO 1: para perguntar «sim ou não», inverta: o verbo vem ANTES do sujeito. «You are tired» → «Are you tired?»; «He is a doctor» → «Is he a doctor?». PASSO 2: responda com uma resposta curta: «Yes, I am.» / «No, I\'m not.» / «Yes, he is.» / «No, they aren\'t.». Na resposta afirmativa NÃO se contrai: «Yes, I am», nunca «Yes, I\'m». PASSO 3: perguntas com palavra interrogativa: palavra + verbo + sujeito. «What is your name?» (qual é o seu nome?), «Where are you from?» (de onde você é?), «How are you?» (como você está?), «Who is she?» (quem é ela?). PASSO 4: na fala, «What\'s» e «Where\'s» são comuns.', {
        tag: 'Perguntas',
        comparacao: 'em português basta mudar a entonação («você está cansado?»). Em inglês, a ordem das palavras muda: o verbo sobe para o começo.',
        tabela: [
          { pergunta: 'Are you tired?', sim: 'Yes, I am.', nao: 'No, I\'m not.' }, { pergunta: 'Is he a doctor?', sim: 'Yes, he is.', nao: 'No, he isn\'t.' },
          { pergunta: 'Is she here?', sim: 'Yes, she is.', nao: 'No, she isn\'t.' }, { pergunta: 'Are they students?', sim: 'Yes, they are.', nao: 'No, they aren\'t.' },
        ],
        erros: [['Yes, I\'m.', 'Yes, I am.', 'A resposta curta afirmativa não se contrai.'], ['Where you are from?', 'Where are you from?', 'Depois da palavra interrogativa, vem o verbo.'], ['You are tired?', 'Are you tired?', 'A forma neutra inverte o verbo e o sujeito.']],
      }),
      dialogo(8, 'Nice to meet you / Prazer em conhecer', 'Emma e Jake se encontram numa sala de aula.', [
        ['Emma', 'Hi! I\'m Emma. What\'s your name?', 'Oi! Eu sou a Emma. Qual é o seu nome?'], ['Jake', 'Hi, Emma. I\'m Jake. Nice to meet you.', 'Oi, Emma. Eu sou o Jake. Prazer em conhecê-la.'], ['Emma', 'Nice to meet you, too. Are you a student?', 'Prazer em conhecê-lo também. Você é estudante?'],
        ['Jake', 'No, I\'m not. I\'m a teacher. Are you a student?', 'Não. Sou professor. Você é estudante?'], ['Emma', 'Yes, I am. Where are you from?', 'Sou. De onde você é?'], ['Jake', 'I\'m from Canada. And you?', 'Sou do Canadá. E você?'], ['Emma', 'I\'m from Brazil.', 'Sou do Brasil.'],
      ]),
      producao(4, 'Faça as perguntas em voz alta e responda por você: «What\'s your name? Where are you from? Are you a student? Are you tired?»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 2', [
      revisao(5, 'Escreva uma frase afirmativa, uma negativa e uma pergunta com «to be» sobre você.'),
      exercicios(20, [
        ouvir('I am from Brazil', ['I am from Brazil', 'You are from Brazil', 'He is from Brazil'], 'I am from Brazil', 'Ouça o sujeito: «I am».'), ouvir('She is not tired', ['She is not tired', 'She is tired', 'He is not tired'], 'She is not tired', 'Ouça «not» e o sujeito «she».'), ouvir('Are you a student', ['Are you a student', 'Is he a student', 'Are they students'], 'Are you a student', 'Ouça o verbo no começo e «you».'), ditado('We are happy', 'Escreva: we are happy.'), ditado('He is a doctor', 'Escreva: he is a doctor, com «a».'),
        mc('Qual forma de «to be» combina com «she»?', ['is', 'are', 'am'], 'is', 'he, she e it usam «is».'), mc('Como responder «Are you tired?» com «sim»?', ['Yes, I am.', 'Yes, I\'m.', 'Yes, I are.'], 'Yes, I am.', 'A resposta curta afirmativa não se contrai.'), mc('Qual frase está correta?', ['She is not a teacher.', 'She not is a teacher.', 'She no is a teacher.'], 'She is not a teacher.', '«not» fica depois do «to be».'), mc('Qual é a contração de «he is»?', ['he\'s', 'his', 'hes\''], 'he\'s', 'A contração usa apóstrofo: he\'s.'),
        lacuna('I ___ Brazilian. (sou)', ['am', 'is', 'are'], 'am', '«am» só com «I».'), lacuna('They ___ students. (são)', ['are', 'is', 'am'], 'are', '«they» usa «are».'), lacuna('He ___ not here. (não está)', ['is', 'are', 'am'], 'is', '«he» usa «is».'), lacuna('___ you from Brazil? (você é do Brasil?)', ['Are', 'Is', 'Am'], 'Are', 'Pergunta: o verbo vem antes do sujeito.'),
        ordem('Ordene: «Where are you from?»', ['Where', 'are', 'you', 'from'], 'Where are you from?', 'Palavra interrogativa + verbo + sujeito.'), ordem('Ordene: «She is not happy.»', ['She', 'is', 'not', 'happy'], 'She is not happy.', '«not» depois do verbo.'),
        livre('Escreva 4 frases em inglês: quem você é, de onde é, como está agora e uma frase negativa.', 'I am Felipe. I am from Brazil. I am tired. I am not a doctor.'),
      ]),
      producao(5, 'Fale: apresente-se em 5 frases (nome, origem, profissão ou estudo, como você está, uma frase negativa). Depois faça duas perguntas a um colega.'),
    ]),
  ],
});
