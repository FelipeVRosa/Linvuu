import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 60, titulo: 'Collocations, expressões e formação de palavras', nivel: 'b1',
  objetivo: 'Usar combinações naturais de palavras (collocations), expressões idiomáticas comuns e criar palavras com prefixos e sufixos.',
  nota: 'Você soa mais natural e aprende palavras novas sozinho. Próxima aula: estratégias de escuta, leitura e fala.',
  sessoes: [
    sessao('S1', 'Collocations com make, do, take e have', [
      revisao(5, 'Fale de um problema social e como resolvê-lo, com should e If I were.'),
      palavras(8, [
        ['make a decision', 'mêik a disijn', 'tomar uma decisão', ''], ['make a mistake', 'mêik a mistêik', 'cometer um erro', ''], ['do homework', 'du rôumuôrk', 'fazer a lição', ''], ['do the dishes', 'du dâ díchiz', 'lavar a louça', ''], ['take a break', 'têik a brêik', 'fazer uma pausa', ''], ['take a photo', 'têik a fôutou', 'tirar uma foto', ''], ['have a shower', 'rév a cháuar', 'tomar banho', ''], ['have fun', 'rév fân', 'divertir-se', ''],
      ]),
      gramatica(12, 'Make, do, take, have', 'PASSO 1: «make» é para criar ou produzir: «make a cake», «make a decision», «make a mistake», «make money», «make a phone call». PASSO 2: «do» é para tarefas e atividades: «do homework», «do the dishes», «do exercise», «do a job», «do business». PASSO 3: «take» é para tomar, levar ou gastar: «take a break», «take a photo», «take a bus», «take time». PASSO 4: «have» é para comer, beber, ter experiência: «have breakfast», «have a shower», «have fun», «have a problem». PASSO 5: não traduza palavra por palavra: «fazer uma pergunta» é «ask a question», não «make a question». PASSO 6: aprenda em blocos, não palavra solta.', {
        tag: 'Collocations',
        comparacao: 'em português usamos «fazer» para quase tudo: fazer a lição, fazer uma pausa, fazer uma decisão. Em inglês cada bloco pede um verbo: do homework, take a break, make a decision.',
        tabela: [
          { verbo: 'make', exemplo: 'make a decision, make a mistake, make money' }, { verbo: 'do', exemplo: 'do homework, do the dishes, do exercise' }, { verbo: 'take', exemplo: 'take a break, take a photo, take a bus' }, { verbo: 'have', exemplo: 'have a shower, have fun, have breakfast' },
        ],
        erros: [['I do a lot of mistakes.', 'I make a lot of mistakes.', 'make a mistake.'], ['I make my homework.', 'I do my homework.', 'do homework.'], ['I want to make a break.', 'I want to take a break.', 'take a break.'], ['Let\'s do a photo.', 'Let\'s take a photo.', 'take a photo.']],
      }),
      producao(5, 'Escreva 8 frases curtas sobre o seu dia usando make, do, take e have.'),
    ]),
    sessao('S2', 'Expressões idiomáticas comuns', [
      revisao(4, 'Corrija: «I do many mistakes.» e «Let\'s do a photo.»'),
      palavras(6, [
        ['a piece of cake', 'a piis óv kêik', 'moleza, muito fácil', ''], ['break a leg', 'brêik a lég', 'boa sorte', ''], ['it\'s raining cats and dogs', 'its rêinin kéts énd dógz', 'está chovendo muito', ''], ['once in a blue moon', 'uans in a blu muun', 'raramente', ''], ['hit the books', 'rit dâ búks', 'estudar muito', ''], ['under the weather', 'ândar dâ uédar', 'indisposto', ''],
      ]),
      gramatica(12, 'Expressões e quando usá-las', 'PASSO 1: expressões idiomáticas têm sentido diferente das palavras: «a piece of cake» não é um bolo, é «muito fácil». PASSO 2: use-as na fala informal e no cotidiano, com amigos e colegas. PASSO 3: evite em e-mails muito formais e em provas. PASSO 4: não mude a expressão: «a piece of cake», nunca «a slice of cake». PASSO 5: aprenda a situação junto: «I\'m feeling under the weather» (estou meio doente). PASSO 6: compare com o português: «chove a cântaros» é «rains cats and dogs».', {
        tag: 'Expressões',
        comparacao: 'em português dizemos «está chovendo canivete» e «é moleza». Cada língua tem imagens próprias; em inglês, «cats and dogs» e «a piece of cake».',
        tabela: [
          { expressao: 'a piece of cake', sentido: 'muito fácil' }, { expressao: 'break a leg', sentido: 'boa sorte' }, { expressao: 'once in a blue moon', sentido: 'raramente' }, { expressao: 'hit the books', sentido: 'estudar muito' }, { expressao: 'under the weather', sentido: 'indisposto' },
        ],
        erros: [['It\'s a slice of cake.', 'It\'s a piece of cake.', 'A expressão é fixa.'], ['It rains cats and dog.', 'It\'s raining cats and dogs.', 'Fixa e no plural.'], ['I\'m under the rain.', 'I\'m under the weather.', 'Expressão correta.']],
      }),
      producao(8, 'Escreva 6 situações e use uma expressão para cada uma.'),
    ]),
    sessao('S3', 'Prefixos, sufixos e família de palavras', [
      revisao(4, 'Explique em inglês o que significam: «a piece of cake» e «under the weather».'),
      palavras(5, [
        ['unhappy', 'ânrépi', 'infeliz', ''], ['impossible', 'impósibl', 'impossível', ''], ['careful', 'kérfl', 'cuidadoso', ''], ['careless', 'kérlis', 'descuidado', ''], ['teacher', 'tíchar', 'professor', ''],
      ]),
      gramatica(8, 'Criar palavras novas', 'PASSO 1: prefixos negativos: «un-» (unhappy), «in-/im-» (impossible), «dis-» (dislike). PASSO 2: sufixos de pessoa: «-er/-or» (teacher, actor), «-ist» (artist). PASSO 3: sufixos de adjetivo: «-ful» (careful, com), «-less» (careless, sem). PASSO 4: sufixos de substantivo: «-ment» (agreement), «-ness» (happiness), «-tion» (education). PASSO 5: sufixos de advérbio: «-ly» (quickly). PASSO 6: aprender a família ajuda a ler: «employ → employer → employee → employment».', {
        tag: 'Formação',
        comparacao: 'em português também usamos prefixos e sufixos: «in-» (impossível), «-ção» (educação). Muitas palavras são parecidas: «education» e «educação».',
        tabela: [
          { tipo: 'prefixo negativo', exemplo: 'unhappy, impossible, dislike' }, { tipo: 'pessoa', exemplo: 'teacher, actor, artist' }, { tipo: 'adjetivo', exemplo: 'careful (com), careless (sem)' }, { tipo: 'substantivo', exemplo: 'agreement, happiness, education' },
        ],
        erros: [['She is unpossible.', 'It is impossible.', 'impossible, com im-.'], ['He is a very care person.', 'He is a very careful person.', 'care + ful.'], ['It is a great agree.', 'It is a great agreement.', 'agree + ment.']],
      }),
      dialogo(8, 'Learning tips / Dicas de estudo', 'Teacher e Alex falam sobre estudar palavras.', [
        ['Teacher', 'Alex, how are you learning new words?', 'Alex, como você está aprendendo palavras novas?'], ['Alex', 'I take notes and I make flashcards every day.', 'Eu faço anotações e faço cartões todos os dias.'], ['Teacher', 'Good. Do you study collocations?', 'Bom. Você estuda collocations?'], ['Alex', 'Yes. For example, I learned «make a decision» and «take a break».', 'Sim. Por exemplo, aprendi «make a decision» e «take a break».'], ['Teacher', 'Great! And what does «careless» mean?', 'Ótimo! E o que significa «careless»?'], ['Alex', 'It means «without care». Learning is a piece of cake now!', 'Significa «sem cuidado». Aprender está uma moleza agora!'],
      ]),
      producao(5, 'Crie 6 palavras com prefixo ou sufixo e use cada uma numa frase.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 60', [
      revisao(5, 'Conte um dia seu usando 5 collocations.'),
      exercicios(20, [
        ouvir('I make a lot of mistakes', ['I make a lot of mistakes', 'I do a lot of mistakes', 'I take a lot of mistakes'], 'I make a lot of mistakes', 'Ouça «make».'), ouvir('Let\'s take a photo', ['Let\'s take a photo', 'Let\'s do a photo', 'Let\'s make a photo'], 'Let\'s take a photo', 'Ouça «take».'), ditado('It is a piece of cake', 'Escreva: it is a piece of cake.'), ditado('I need to make a decision', 'Escreva: I need to make a decision.'),
        mc('Qual verbo combina com «homework»?', ['do', 'make', 'take'], 'do', 'do homework.'), mc('Qual verbo combina com «a break»?', ['take', 'do', 'make'], 'take', 'take a break.'), mc('O que significa «a piece of cake»?', ['muito fácil', 'um bolo grande', 'um problema'], 'muito fácil', 'Expressão.'), mc('Qual palavra significa «sem cuidado»?', ['careless', 'careful', 'caring'], 'careless', '-less = sem.'),
        lacuna('I ___ my homework every day.', ['do', 'make', 'take'], 'do', 'do homework.'), lacuna('She wants to ___ a decision.', ['make', 'do', 'have'], 'make', 'make a decision.'), lacuna('Let\'s ___ a break. (fazer)', ['take', 'make', 'do'], 'take', 'take a break.'), lacuna('It is ___ possible. (impossível)', ['im', 'un', 'dis'], 'im', 'impossible.'),
        ordem('Ordene: «She made a big mistake.»', ['She', 'made', 'a', 'big', 'mistake'], 'She made a big mistake.', 'make a mistake.'), ordem('Ordene: «Let\'s take a break now.»', ['Let\'s', 'take', 'a', 'break', 'now'], 'Let\'s take a break now.', 'take a break.'),
        livre('Escreva 4 frases com make, do, take e have.', 'I make a cake. I do my homework. I take a break. I have fun.'),
      ]),
      producao(5, 'Fale 1 minuto sobre seu dia usando collocations e uma expressão idiomática.'),
    ]),
  ],
});
