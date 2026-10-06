import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 50, titulo: 'Aspecto verbal 1: processo e resultado', nivel: 'b1',
  objetivo: 'Escolher entre o imperfectivo e o perfectivo para falar de processo, duração e fato (imperfectivo) ou de resultado concluído (perfectivo), no passado e no futuro, e formar os pares de aspecto mais comuns.',
  nota: 'Você escolhe o aspecto pela ideia que quer passar. Próxima aula: aspecto verbal 2.',
  sessoes: [
    sessao('S1', 'A ideia central e os pares', [
      revisao(5, 'Escreva 5 frases com expressões de tempo: через, назад, на, за e уже.'),
      palavras(8, [['делать / сделать', 'dyélat / zdyélat', 'fazer', 'to do'], ['писать / написать', 'pisát / napisát', 'escrever', 'to write'], ['читать / прочитать', 'chitát / prachitát', 'ler', 'to read'], ['смотреть / посмотреть', 'smatryét / pasmatryét', 'olhar, assistir', 'to watch'], ['есть / съесть', 'yest / syest', 'comer', 'to eat'], ['пить / выпить', 'pit / výpit', 'beber', 'to drink'], ['решать / решить', 'rishát / rishít', 'resolver, decidir', 'to solve'], ['получать / получить', 'paluchát / paluchít', 'receber', 'to receive']]),
      gramatica(12, 'Imperfectivo e perfectivo: a ideia central', 'PASSO 1: quase todo verbo russo tem DOIS aspectos: o IMPERFECTIVO (о que acontece, o processo) e o PERFECTIVO (o resultado). PASSO 2: o IMPERFECTIVO responde a «Что делал?» (o que fazia?) e fala de processo, duração, repetição ou do simples fato: «Я читал книгу» (estava lendo, ou li, sem dizer se terminei). PASSO 3: o PERFECTIVO responde a «Что сделал?» (o que fez?) e fala de uma ação ÚNICA e CONCLUÍDA, com resultado: «Я прочитал книгу» (li até o fim). PASSO 4: o perfectivo não tem presente: a forma conjugada («прочитаю») já significa FUTURO. PASSO 5: os pares se formam de várias maneiras: com PREFIXO («делать → сделать, писать → написать, читать → прочитать»), com mudança de SUFIXO («решать → решить, получать → получить, открывать → открыть») e, às vezes, com raízes diferentes («брать → взять», «говорить → сказать»). PASSO 6: no futuro: imperfectivo = «буду + infinitivo» (processo): «Я буду читать»; perfectivo = verbo conjugado (resultado): «Я прочитаю».', {
        tag: 'Verbos',
        comparacao: 'o português mistura as duas ideias em «li» e «lia». O russo obriga a escolher: «читал» (processo/fato) ou «прочитал» (resultado concluído).',
        tabela: [
          { imperfectivo: 'делать', perfectivo: 'сделать', exemplo: 'Я делал уроки. / Я сделал уроки.' }, { imperfectivo: 'писать', perfectivo: 'написать', exemplo: 'Я писал письмо. / Я написал письмо.' }, { imperfectivo: 'читать', perfectivo: 'прочитать', exemplo: 'Я читал книгу. / Я прочитал книгу.' }, { imperfectivo: 'решать', perfectivo: 'решить', exemplo: 'Я решал задачу. / Я решил задачу.' },
          { imperfectivo: 'открывать', perfectivo: 'открыть', exemplo: 'Он открывал окно. / Он открыл окно.' }, { imperfectivo: 'брать', perfectivo: 'взять', exemplo: 'Я брал книгу. / Я взял книгу.' }, { imperfectivo: 'говорить', perfectivo: 'сказать', exemplo: 'Он говорил. / Он сказал.' },
        ],
        erros: [['Я прочитаю книгу вчера.', 'Я прочитал книгу вчера.', 'Passado: «прочитал»; «прочитаю» é futuro.'], ['Я буду прочитать книгу.', 'Я прочитаю книгу. / Я буду читать книгу.', '«буду» só vai com imperfectivo.'], ['Я читаю книгу до конца.', 'Я прочитаю книгу до конца.', 'Resultado completo: perfectivo.']],
      }),
      producao(5, 'Diga os pares: «делать — сделать, писать — написать, читать — прочитать, решать — решить, брать — взять».'),
    ]),
    sessao('S2', 'Como escolher o aspecto', [
      revisao(5, 'Escreva o futuro de «читать» com «буду» e o de «прочитать».'),
      palavras(8, [['долго', 'dólga', 'por muito tempo', 'for a long time'], ['каждый день', 'kázhdyy dyen', 'todo dia', 'every day'], ['обычно', 'óbychna', 'normalmente', 'usually'], ['сразу', 'srázu', 'imediatamente', 'at once'], ['вдруг', 'vdruk', 'de repente', 'suddenly'], ['наконец', 'nakanyéts', 'por fim', 'finally'], ['уже', 'uzhé', 'já', 'already'], ['за час', 'za chas', 'em uma hora', 'in an hour']]),
      gramatica(12, 'Palavras-pista e perguntas', 'PASSO 1: as PALAVRAS-PISTA ajudam. Com «долго, каждый день, обычно, часто, всегда, весь день, как долго?» use o IMPERFECTIVO: «Я долго читал», «Он обычно пишет письма». PASSO 2: com «сразу, вдруг, наконец, за + tempo» use o PERFECTIVO: «Я сразу написал», «Он вдруг открыл дверь», «Я прочитал книгу за час». PASSO 3: as perguntas mostram o aspecto: «Что ты делал?» (processo) e «Что ты сделал?» (resultado). PASSO 4: a PERGUNTA DE EXPERIÊNCIA usa o imperfectivo: «Ты читал эту книгу?» (já leu alguma vez?); a pergunta de RESULTADO usa o perfectivo: «Ты уже прочитал эту книгу?» (já terminou de ler?). PASSO 5: uma sequência de ações concluídas usa o perfectivo: «Я встал, умылся, позавтракал и ушёл». PASSO 6: ações simultâneas ou de fundo usam o imperfectivo: «Я читал, а он смотрел телевизор».', {
        tag: 'Verbos',
        tabela: [
          { aspecto: 'imperfectivo', pista: 'долго, каждый день, обычно, часто, весь день', exemplo: 'Я долго читал. Он обычно пишет письма.' }, { aspecto: 'perfectivo', pista: 'сразу, вдруг, наконец, за + tempo', exemplo: 'Я сразу написал. Я прочитал книгу за час.' }, { aspecto: 'imperfectivo (experiência)', pista: 'Ты читал…?', exemplo: 'Ты читал эту книгу? (alguma vez)' }, { aspecto: 'perfectivo (resultado)', pista: 'Ты уже прочитал…?', exemplo: 'Ты уже прочитал эту книгу? (terminou?)' }, { aspecto: 'sequência de ações', pista: 'perfectivos em fila', exemplo: 'Я встал, умылся, позавтракал и ушёл.' },
        ],
        erros: [['Я прочитал книгу каждый день.', 'Я читал книгу каждый день.', '«каждый день» = repetição: imperfectivo.'], ['Вдруг он открывал дверь.', 'Вдруг он открыл дверь.', '«вдруг» = fato súbito: perfectivo.']],
      }),
      producao(5, 'Conte o seu dia de ontem em ordem, só com perfectivos: «Я встал, умылся, позавтракал и ушёл.»'),
    ]),
    sessao('S3', 'Aspecto na conversa', [
      revisao(5, 'Escreva 5 frases: três com imperfectivo e duas com perfectivo.'),
      gramatica(10, 'Perguntar e responder pelo aspecto', 'PASSO 1: para saber o que alguém FAZIA: «Что ты делал вчера?» — «Я писал отчёт». PASSO 2: para saber se TERMINOU: «Ты уже написал отчёт?» — «Да, я его написал». PASSO 3: com «ещё не», o imperfectivo é o mais comum: «Я ещё не ужинал». PASSO 4: para prometer um resultado futuro: «Я приготовлю ужин» (perfectivo); para contar o que vai estar fazendo: «Я буду готовить ужин» (imperfectivo). PASSO 5: ao pedir algo concreto: «Напиши мне» (perfectivo); ao pedir um hábito: «Пиши мне каждый день» (imperfectivo).', {
        tag: 'Verbos',
        tabela: [
          { pergunta: 'Что ты делал вчера?', resposta: 'Я писал отчёт.' }, { pergunta: 'Ты уже написал отчёт?', resposta: 'Да, я его написал.' }, { pergunta: 'Ты ужинал?', resposta: 'Ещё не ужинал.' }, { pergunta: 'Что ты будешь делать?', resposta: 'Я буду готовить ужин.' }, { pergunta: 'Что ты приготовишь?', resposta: 'Я приготовлю ужин.' },
        ],
      }),
      dialogo(8, 'Что ты делал вчера? / O que você fez ontem?', 'Dois amigos falam do dia anterior.', [
        ['Аня', 'Паша, что ты делал вчера?', 'Pasha, o que você fez ontem?'], ['Паша', 'Весь день писал отчёт. А ты?', 'Escrevi um relatório o dia todo. E você?'], ['Аня', 'Я читала книгу и смотрела фильм. Ты уже написал отчёт?', 'Eu li um livro e vi um filme. Você já terminou o relatório?'],
        ['Паша', 'Да, я наконец написал его и отправил начальнику.', 'Sim, finalmente o terminei e o enviei ao chefe.'], ['Аня', 'Молодец! А ты ужинал?', 'Parabéns! E você jantou?'], ['Паша', 'Нет, ещё не ужинал. Я приготовлю ужин и съем его вместе с тобой.', 'Não, ainda não jantei. Vou preparar o jantar e comê-lo com você.'],
        ['Аня', 'Отлично! Я пока выпью чай.', 'Ótimo! Enquanto isso, vou tomar um chá.'], ['Паша', 'Хорошо, я скоро закончу.', 'Está bem, termino logo.'],
      ]),
      producao(7, 'Converse em voz alta sobre o seu dia de ontem: o que fazia, o que concluiu e o que ainda não fez.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre o seu dia, com os dois aspectos.'),
      exercicios(20, [
        lacuna('Вчера я ___ книгу до конца. (li)', ['прочитал', 'читал', 'прочитаю'], 'прочитал', 'Resultado concluído: perfectivo.'), lacuna('Вчера весь день я ___ книгу. (lia)', ['читал', 'прочитал', 'прочитаю'], 'читал', '«весь день»: imperfectivo.'), lacuna('Завтра я ___ книгу. (vou terminar de ler)', ['прочитаю', 'буду прочитать', 'читаю'], 'прочитаю', 'Futuro perfectivo.'),
        lacuna('Завтра весь день я ___ читать. (vou ficar)', ['буду', 'прочитаю', 'будет'], 'буду', '«буду» + infinitivo imperfectivo.'), lacuna('Он ___ открыл дверь. (de repente)', ['вдруг', 'долго', 'обычно'], 'вдруг', '«вдруг» pede perfectivo.'), lacuna('Я ___ не ужинал. (ainda)', ['ещё', 'уже', 'сразу'], 'ещё', '«ещё не» = ainda não.'),
        mc('«Что ты сделал?» pergunta por:', ['resultado', 'processo', 'hábito'], 'resultado', 'Pergunta do perfectivo.'), mc('«Ты читал эту книгу?» pergunta se:', ['já leu alguma vez', 'terminou de ler hoje', 'vai ler'], 'já leu alguma vez', 'Pergunta de experiência: imperfectivo.'), mc('O perfectivo conjugado tem sentido de:', ['futuro', 'presente', 'passado habitual'], 'futuro', '«прочитаю» = lerei.'),
        ordem('Ordene: «Я прочитал книгу за час.»', ['Я', 'прочитал', 'книгу', 'за', 'час'], 'Я прочитал книгу за час.', '«за час» = em uma hora (perfectivo).'), ouvir('Ты уже написал отчёт', ['Ты уже написал отчёт', 'Ты писал отчёт', 'Ты будешь писать отчёт'], 'Ты уже написал отчёт', 'Resultado: perfectivo.'), ditado('Я встал, умылся и ушёл', 'Sequência de ações concluídas.'),
        livre('Escreva 5 frases: processo (imperfectivo), resultado (perfectivo), uma pergunta de experiência, uma de resultado e um futuro perfectivo.', 'Я долго читал. Я прочитал книгу. Ты читал эту книгу? Ты уже прочитал эту книгу? Завтра я прочитаю её.'),
      ]),
      producao(5, 'Grave-se contando o que você fez ontem e o que vai concluir amanhã.'),
    ]),
  ],
});
