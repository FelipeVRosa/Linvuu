import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 45, titulo: 'Verbos de movimento com prefixo 1: chegar, sair, entrar', nivel: 'a2',
  objetivo: 'Usar приходить / прийти, приезжать / приехать, уходить / уйти, уезжать / уехать, входить / войти e выходить / выйти, com as preposições certas, no passado, no presente e no futuro.',
  nota: 'Você diz quando chega, entra e sai. Próxima aula: verbos de movimento com prefixo, parte 2.',
  sessoes: [
    sessao('S1', 'Chegar e partir: при- e у-', [
      revisao(5, 'Escreva 5 frases com «весь», «каждый» e «другой».'),
      palavras(8, [['приходить / прийти', 'prikhadít / priytí', 'chegar (a pé), vir', 'to come, to arrive'], ['приезжать / приехать', 'priyezzhát / priyékhat', 'chegar (de veículo)', 'to arrive'], ['уходить / уйти', 'ukhadít / uytí', 'ir embora (a pé)', 'to leave'], ['уезжать / уехать', 'uyezzhát / uyékhat', 'partir (de veículo)', 'to depart'], ['обычно', 'óbychna', 'normalmente', 'usually'], ['вовремя', 'vóvrimya', 'na hora', 'on time'], ['рано', 'ráno', 'cedo', 'early'], ['поздно', 'pózdna', 'tarde', 'late']]),
      gramatica(12, 'Prefixos при- e у-', 'PASSO 1: um PREFIXO muda o sentido do verbo de movimento: «при-» = chegar, «у-» = ir embora. PASSO 2: com «идти» (a pé): «приходить / прийти» e «уходить / уйти»; com «ехать» (de veículo): «приезжать / приехать» e «уезжать / уехать». PASSO 3: o IMPERFECTIVO (приходить) fala de hábito ou de processo: «Я обычно прихожу в девять». PASSO 4: o PERFECTIVO (прийти) fala de um resultado: «Я пришёл в девять». PASSO 5: passado de «прийти»: «пришёл, пришла, пришли»; de «уйти»: «ушёл, ушла, ушли»; futuro: «приду, придёшь, придут» e «уйду, уйдёшь, уйдут». PASSO 6: a preposição: chegar a um lugar, «в» ou «на» + ACUSATIVO («прийти в школу, на работу»); a uma pessoa, «К» + DATIVO («прийти к другу»). PASSO 7: partir de um lugar, «ИЗ» ou «С» + GENITIVO («уйти из дома, с работы»); de uma pessoa, «ОТ» + genitivo («уйти от друга»).', {
        tag: 'Verbos',
        comparacao: 'o português usa «chegar», «vir», «ir embora». O russo escolhe o verbo conforme VOCÊ vai a pé ou de veículo e se a ação é repetida (imperfectivo) ou única e concluída (perfectivo).',
        tabela: [
          { verbo: 'прийти (pf.)', presenteFuturo: 'приду, придёшь, придёт, придём, придёте, придут', passado: 'пришёл, пришла, пришли' }, { verbo: 'приехать (pf.)', presenteFuturo: 'приеду, приедешь, приедет…', passado: 'приехал, приехала, приехали' }, { verbo: 'уйти (pf.)', presenteFuturo: 'уйду, уйдёшь, уйдёт…', passado: 'ушёл, ушла, ушли' }, { verbo: 'уехать (pf.)', presenteFuturo: 'уеду, уедешь, уедет…', passado: 'уехал, уехала, уехали' }, { verbo: 'приходить (impf.)', presenteFuturo: 'прихожу, приходишь, приходит…', passado: 'приходил, приходила' },
        ],
        erros: [['Я пришёл на работе.', 'Я пришёл на работу.', 'Chegar a um lugar: acusativo.'], ['Он ушёл от дома.', 'Он ушёл из дома.', 'Sair de um lugar fechado: «из» + genitivo.'], ['Я пришла к друг.', 'Я пришла к другу.', '«к» + dativo.']],
      }),
      producao(5, 'Diga: «Я обычно прихожу в девять. Вчера я пришёл поздно. Завтра я приду рано. Я ухожу в шесть.»'),
    ]),
    sessao('S2', 'Entrar e sair: в- e вы-', [
      revisao(5, 'Escreva o passado e o futuro de «прийти» e de «уйти».'),
      palavras(8, [['входить / войти', 'vkhadít / vaytí', 'entrar (a pé)', 'to enter'], ['выходить / выйти', 'vykhadít / vyytí', 'sair (a pé)', 'to exit'], ['въезжать / въехать', 'vyezzhát / vyékhat', 'entrar (de veículo)', 'to drive in'], ['выезжать / выехать', 'vyezzhát / výyekhat', 'sair (de veículo)', 'to drive out'], ['вход', 'vkhot', 'entrada', 'entrance'], ['выход', 'výkhat', 'saída', 'exit'], ['подъезд', 'padyést', 'entrada do prédio', 'entrance hall'], ['дверь', 'dvyer', 'porta', 'door']]),
      gramatica(12, 'Prefixos в- e вы-', 'PASSO 1: «в-» = entrar; «вы-» = sair (de dentro). PASSO 2: «входить / войти» (a pé), «выходить / выйти» (a pé). PASSO 3: passado: «вошёл, вошла, вошли» e «вышел, вышла, вышли». PASSO 4: futuro: «войду, войдёшь» e «выйду, выйдешь». PASSO 5: entrar: «в» + acusativo («войти в комнату»); sair: «из» + genitivo («выйти из комнаты»). PASSO 6: para lugares abertos, use «на» e «с»: «выйти на улицу, с работы». PASSO 7: o «вы-» sempre leva o acento: «вы́йти, вы́шел».', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Я вошёл в комнату.', traducao: 'Entrei no quarto.' }, { frase: 'Она вышла из дома.', traducao: 'Ela saiu de casa.' }, { frase: 'Мы выйдем на улицу.', traducao: 'Vamos sair para a rua.' }, { frase: 'Он выходит с работы в шесть.', traducao: 'Ele sai do trabalho às seis.' }, { frase: 'Войдите, пожалуйста!', traducao: 'Entre, por favor!' },
        ],
        erros: [['Я вышел в дом.', 'Я вошёл в дом.', 'Para entrar: «войти»; «выйти» é sair.'], ['Она вышла из улицу.', 'Она вышла на улицу.', 'Rua é lugar aberto: «на улицу».']],
      }),
      producao(5, 'Diga: «Я вошёл в комнату. Я вышел из дома. Мы выйдем на улицу. Войдите, пожалуйста!»'),
    ]),
    sessao('S3', 'Chegar atrasado', [
      revisao(5, 'Escreva 5 frases com «войти», «выйти», «из» e «в».'),
      gramatica(10, 'Hábito e fato único', 'PASSO 1: para a rotina, use o imperfectivo com «обычно, всегда, каждый день»: «Я обычно прихожу в девять». PASSO 2: para um fato concluído, use o perfectivo: «Я пришёл в девять тридцать». PASSO 3: para a pergunta de rotina, «Когда вы обычно приходите?»; para o fato, «Когда вы пришли?». PASSO 4: para o futuro, o perfectivo: «Я уйду в шесть, если всё будет готово». PASSO 5: o atraso: «Я опоздал на работу» (aula 35).', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Когда вы обычно приходите на работу?', traducao: 'Quando o senhor costuma chegar ao trabalho?' }, { frase: 'Я обычно прихожу в девять.', traducao: 'Costumo chegar às nove.' }, { frase: 'Когда вы пришли?', traducao: 'Quando o senhor chegou?' }, { frase: 'Я уйду в шесть.', traducao: 'Vou embora às seis.' },
        ],
      }),
      dialogo(8, 'На работе / No trabalho', 'Anna chega atrasada e conversa com o chefe, Boris.', [
        ['Борис', 'Анна, почему вы пришли так поздно?', 'Anna, por que a senhora chegou tão tarde?'], ['Анна', 'Извините! Я вышла из дома в восемь, но автобус не пришёл.', 'Desculpe! Saí de casa às oito, mas o ônibus não veio.'], ['Борис', 'Вы приехали на метро?', 'A senhora veio de metrô?'],
        ['Анна', 'Да, я вошла в метро в девять и приехала на работу в девять тридцать.', 'Sim, entrei no metrô às nove e cheguei ao trabalho às nove e meia.'], ['Борис', 'Когда вы обычно приходите на работу?', 'Quando a senhora costuma chegar ao trabalho?'], ['Анна', 'Обычно я прихожу в девять. Я никогда не опаздываю.', 'Normalmente chego às nove. Nunca me atraso.'],
        ['Борис', 'Хорошо. А когда вы уйдёте сегодня?', 'Está bem. E quando a senhora vai embora hoje?'], ['Анна', 'Если всё будет готово, я уйду в шесть.', 'Se tudo estiver pronto, vou embora às seis.'],
      ]),
      producao(7, 'Conte em voz alta como foi a sua manhã: quando saiu de casa, como chegou e quando vai embora.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre como você chega ao trabalho.'),
      exercicios(20, [
        lacuna('Я обычно ___ в девять. (chego a pé)', ['прихожу', 'пришёл', 'приду'], 'прихожу', 'Hábito: imperfectivo.'), lacuna('Вчера я ___ поздно. (cheguei a pé)', ['пришёл', 'прихожу', 'приду'], 'пришёл', 'Fato único: perfectivo.'), lacuna('Завтра я ___ рано. (chegarei a pé)', ['приду', 'пришёл', 'прихожу'], 'приду', 'Futuro perfectivo.'),
        lacuna('Она ___ из дома. (saiu, a pé)', ['вышла', 'вошла', 'пришла'], 'вышла', '«выйти» = sair.'), lacuna('Я вошёл ___ комнату.', ['в', 'из', 'на'], 'в', '«в» + acusativo.'), lacuna('Он ушёл ___ работы.', ['с', 'в', 'к'], 'с', '«с» + genitivo.'),
        mc('Passado de «уйти» (ela):', ['ушла', 'уйла', 'ушёла'], 'ушла', 'ушёл, ушла, ушли.'), mc('Para pessoa, chegar usa:', ['к + dativo', 'в + acusativo', 'из + genitivo'], 'к + dativo', '«прийти к другу».'), mc('«Выйти на улицу» usa «на» porque:', ['rua é lugar aberto', 'rua é feminina', 'rua é plural'], 'rua é lugar aberto', 'Lugares abertos: «на/с».'),
        ordem('Ordene: «Я обычно прихожу в девять.»', ['Я', 'обычно', 'прихожу', 'в', 'девять'], 'Я обычно прихожу в девять.', 'Hábito: imperfectivo.'), ouvir('Я вышла из дома в восемь', ['Я вышла из дома в восемь', 'Я вошла в дом в восемь', 'Я пришла домой в восемь'], 'Я вышла из дома в восемь', '«из» + genitivo.'), ditado('Когда вы обычно приходите на работу', 'Imperfectivo: приходите.'),
        livre('Escreva 5 frases: hábito de chegada, um fato único, o futuro, sair de casa e entrar no metrô.', 'Я обычно прихожу в девять. Вчера я пришёл поздно. Завтра я приду рано. Я вышел из дома в восемь. Я вошёл в метро.'),
      ]),
      producao(5, 'Grave-se contando a sua manhã de hoje.'),
    ]),
  ],
});
