import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 12, titulo: 'A rotina: o dia a dia', nivel: 'a1',
  objetivo: 'Descrever a sua rotina com verbos de ação, usar «always, usually, often, sometimes, never», perguntar com «When/What time» e escrever um texto sobre o seu dia.',
  nota: 'Você conta a sua rotina do acordar ao dormir. Próxima aula: gostos.',
  sessoes: [
    sessao('S1', 'Verbos da rotina', [
      revisao(5, 'Diga a hora, o dia e o mês em que você está. Marque um encontro com um amigo.'),
      palavras(8, [
        ['get up', 'gét âp', 'levantar-se', ''], ['have breakfast', 'hév brékfast', 'tomar café da manhã', ''], ['go to work', 'gôu tu uãrk', 'ir ao trabalho', ''], ['start', 'stárt', 'começar', ''], ['finish', 'fíniche', 'terminar', ''], ['have lunch', 'hév lântch', 'almoçar', ''], ['go home', 'gôu hôum', 'ir para casa', ''], ['go to bed', 'gôu tu béd', 'ir dormir', ''],
      ]),
      gramatica(12, 'Descrever a rotina com o presente simples', 'PASSO 1: a rotina usa o presente simples da aula 4: «I get up at six.», «She goes to work at eight.» PASSO 2: lembre da regra do -s para he/she/it: «He gets up», «She has breakfast», «He goes to work» (go → goes), «She finishes at five» (-sh → -es). PASSO 3: «have» vira «has»: «She has lunch at noon.» PASSO 4: negativa com «don\'t/doesn\'t»: «I don\'t get up early.», «He doesn\'t work on Sundays.» PASSO 5: pergunta: «What time do you get up?», «What time does she start work?» PASSO 6: depois de «does», o verbo volta a ser simples: «What time does she go home?»', {
        tag: 'Rotina',
        comparacao: 'em português «acordo às seis» e «ela acorda às seis» mudam o final do verbo. Em inglês, só he/she/it mudam: acrescente -s ou -es.',
        tabela: [
          { pessoa: 'I / you / we / they', afirmativa: 'I get up at six.', negativa: 'I don\'t get up at six.' }, { pessoa: 'he / she / it', afirmativa: 'She gets up at six.', negativa: 'She doesn\'t get up at six.' }, { pessoa: 'pergunta', afirmativa: 'What time do you get up?', negativa: 'What time does she get up?' },
        ],
        erros: [['She get up at six.', 'She gets up at six.', 'she → -s.'], ['He go to work.', 'He goes to work.', 'go → goes.'], ['She doesn\'t gets up early.', 'She doesn\'t get up early.', 'Depois de doesn\'t, forma simples.'], ['What time she starts?', 'What time does she start?', 'Pergunta pede does.']],
      }),
      producao(5, 'Descreva a sua manhã em 5 frases: «I get up at… I have breakfast…»'),
    ]),
    sessao('S2', 'Advérbios de frequência', [
      revisao(4, 'Diga a rotina de uma pessoa da sua família, da manhã à noite.'),
      palavras(6, [
        ['always', 'ólueiz', 'sempre', ''], ['usually', 'iujuali', 'geralmente', ''], ['often', 'ófen', 'frequentemente', ''], ['sometimes', 'sâmtaimz', 'às vezes', ''], ['rarely', 'rérli', 'raramente', ''], ['never', 'néver', 'nunca', ''],
      ]),
      gramatica(12, 'Advérbios de frequência: sempre antes do verbo', 'PASSO 1: os advérbios dizem a frequência: always (100%), usually, often, sometimes, rarely, never (0%). PASSO 2: eles vêm ANTES do verbo principal: «I always get up early.», «She never eats meat.» PASSO 3: mas DEPOIS do «to be»: «He is always late.», «I am never tired.» PASSO 4: «never» já é negativo, não use «don\'t» junto: «I never drink coffee» (não «I don\'t never drink»). PASSO 5: «sometimes» também pode ir no começo ou no fim: «Sometimes I walk.», «I walk sometimes.» PASSO 6: pergunta: «How often do you…?» → «Twice a week.», «Every day.»', {
        tag: 'Frequência',
        comparacao: 'em português colocamos o advérbio onde queremos («eu sempre acordo cedo», «eu acordo sempre cedo»). O inglês é mais rígido: antes do verbo, depois do «to be».',
        tabela: [
          { advérbio: 'always', posição: 'antes do verbo', exemplo: 'I always get up early.' }, { advérbio: 'usually', posição: 'antes do verbo', exemplo: 'She usually has lunch at noon.' }, { advérbio: 'never', posição: 'antes do verbo', exemplo: 'He never works on Sundays.' }, { advérbio: 'always', posição: 'depois do to be', exemplo: 'They are always happy.' },
        ],
        erros: [['I get up always early.', 'I always get up early.', 'Antes do verbo.'], ['I don\'t never drink coffee.', 'I never drink coffee.', '«never» já é negativo.'], ['She always is late.', 'She is always late.', 'Depois do to be.'], ['She never eats not meat.', 'She never eats meat.', 'Sem segunda negação.']],
      }),
      producao(8, 'Diga 6 frases sobre você com: always, usually, often, sometimes, rarely, never.'),
    ]),
    sessao('S3', 'Um dia na vida', [
      revisao(4, 'Complete: «I ___ get up early. She is ___ late. He ___ works on Sundays. (nunca)»'),
      palavras(5, [
        ['early', 'ãrli', 'cedo', ''], ['late', 'lêit', 'tarde (atrasado)', ''], ['every day', 'évri dêi', 'todo dia', ''], ['weekend', 'uíkend', 'fim de semana', ''], ['at night', 'ét náit', 'à noite', ''],
      ]),
      gramatica(8, 'Every, e como contar a rotina em sequência', 'PASSO 1: «every» = todo(a): «every day», «every morning», «every Monday». NÃO leva preposição: «I run every morning.» PASSO 2: «at the weekend» (EUA: «on the weekend»): «I rest on the weekend.» PASSO 3: conecte as ações com «then» (depois), «after that» (depois disso), «and» e «but»: «I get up, then I have breakfast.» PASSO 4: «before» e «after» + ação com -ing: «after having breakfast», «before going to bed». PASSO 5: evite «I go to the bed»: use «I go to bed» sem artigo.', {
        tag: 'Conectar a rotina',
        comparacao: 'em português «todo dia» e «todos os dias» são equivalentes. O inglês usa «every day» (singular!), nunca «every days».',
        tabela: [
          { portugues: 'todo dia', ingles: 'every day', nota: 'singular' }, { portugues: 'depois, ...', ingles: 'then, ...', nota: 'sequência' }, { portugues: 'no fim de semana', ingles: 'on the weekend', nota: 'EUA' }, { portugues: 'vou dormir', ingles: 'I go to bed', nota: 'sem artigo' },
        ],
        erros: [['every days', 'every day', 'every é singular.'], ['I go to the bed at ten.', 'I go to bed at ten.', 'Sem artigo.'], ['in every morning', 'every morning', 'Sem preposição.']],
      }),
      texto(8, 'Mark\'s day / O dia do Mark', 'Mark gets up at six every day. He has breakfast at half past six, and then he goes to work. He usually starts work at eight and finishes at five. He has lunch at noon. After work, he goes home and cooks dinner. He never watches TV at night. He reads a book and goes to bed at ten. On the weekend, he gets up late and plays football with his friends.',
        'Mark acorda às seis todos os dias. Toma café às seis e meia e depois vai ao trabalho. Geralmente começa às oito e termina às cinco. Almoça ao meio-dia. Depois do trabalho, vai para casa e prepara o jantar. Nunca assiste à TV à noite. Lê um livro e vai dormir às dez. No fim de semana, acorda tarde e joga futebol com os amigos.',
        [['What time does Mark get up?', 'At six.'], ['What does he do at noon?', 'He has lunch.'], ['Does he watch TV at night?', 'No, he never does.'], ['What does he do on the weekend?', 'He gets up late and plays football.']]),
      producao(5, 'Escreva um texto de 6 frases sobre o seu dia, com «then», um advérbio de frequência e «every».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 12', [
      revisao(5, 'Conte a sua rotina de um dia comum, com horas.'),
      exercicios(20, [
        ouvir('She gets up at six every day', ['She gets up at six every day', 'She get up at six every day', 'He gets up at six every day'], 'She gets up at six every day', 'Ouça o -s em «gets».'), ouvir('I never drink coffee at night', ['I never drink coffee at night', 'I always drink coffee at night', 'I never drink tea at night'], 'I never drink coffee at night', 'Ouça «never».'), ditado('What time does she start work', 'Escreva: what time does she start work.'), ditado('He is always late', 'Escreva: he is always late.'),
        mc('Qual frase está correta?', ['I always get up early.', 'I get up always early.', 'I always am early.'], 'I always get up early.', 'Antes do verbo.'), mc('Qual frase usa o «to be» corretamente?', ['She is always late.', 'She always is late.', 'She is late always.'], 'She is always late.', 'Depois do to be.'), mc('Como se diz «Ele vai dormir às dez»?', ['He goes to bed at ten.', 'He goes to the bed at ten.', 'He go to bed at ten.'], 'He goes to bed at ten.', 'goes + sem artigo.'), mc('Qual está correto?', ['I never drink coffee.', 'I don\'t never drink coffee.', 'I never don\'t drink coffee.'], 'I never drink coffee.', 'Uma negação só.'),
        lacuna('She ___ up at six. (acorda)', ['gets', 'get', 'getting'], 'gets', 'she → -s.'), lacuna('What time ___ he start work?', ['does', 'do', 'is'], 'does', 'he → does.'), lacuna('I ___ watch TV at night. (nunca)', ['never', 'don\'t never', 'no'], 'never', '«never» já nega.'), lacuna('I run ___ morning. (toda)', ['every', 'every in', 'all'], 'every', 'every sem preposição.'),
        ordem('Ordene: «She usually has lunch at noon.»', ['She', 'usually', 'has', 'lunch', 'at', 'noon'], 'She usually has lunch at noon.', 'Advérbio antes do verbo.'), ordem('Ordene: «What time do you get up?»', ['What', 'time', 'do', 'you', 'get', 'up'], 'What time do you get up?', 'What time + do + sujeito + verbo.'),
        livre('Escreva 5 frases sobre a rotina de alguém, com horas, um advérbio de frequência e «then».', 'He gets up at six. Then he has breakfast. He usually works until five. He never watches TV. He goes to bed at ten.'),
      ]),
      producao(5, 'Conte em 1 minuto o seu dia ideal, do acordar ao dormir.'),
    ]),
  ],
});
