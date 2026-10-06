import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 56, titulo: 'Чтобы: desejo, pedido, finalidade e «чтобы не»', nivel: 'b1',
  objetivo: 'Usar «чтобы» com pedidos e desejos (хочу, чтобы…; прошу, чтобы…), com a finalidade («чтобы не забыть», «для того чтобы») e escolher entre infinitivo (mesmo sujeito) e passado (sujeitos diferentes).',
  nota: 'Você pede, deseja e explica a finalidade com «чтобы». Próxima aula: discurso indireto e «ли».',
  sessoes: [
    sessao('S1', 'Чтобы com pedidos e desejos', [
      revisao(5, 'Escreva 5 frases com «бы»: pedido, conselho, desejo e duas condições irreais.'),
      palavras(8, [['просить / попросить', 'prasít / paprasít', 'pedir', 'to ask'], ['требовать', 'trébavat', 'exigir', 'to demand'], ['советовать / посоветовать', 'savyétavat / pasavyétavat', 'aconselhar', 'to advise'], ['важно', 'vázhna', 'é importante', 'important'], ['нужно', 'núzhna', 'é preciso', 'necessary'], ['надо', 'nada', 'é preciso', 'must'], ['мешать / помешать', 'mishát / pamishát', 'atrapalhar', 'to disturb'], ['вовремя', 'vóvrimya', 'na hora', 'on time']]),
      gramatica(12, 'Чтобы + passado quando os sujeitos são diferentes', 'PASSO 1: depois de verbos de VONTADE, PEDIDO e ORDEM («хотеть, просить, требовать, советовать»), e depois de «важно, нужно, надо», usa-se «ЧТОБЫ» + a forma do PASSADO quando o sujeito da segunda parte é DIFERENTE: «Я хочу, чтобы ты пришёл». PASSO 2: essa forma do passado NÃO marca tempo, só liga o desejo ao outro sujeito. PASSO 3: com o MESMO sujeito, use o infinitivo sem «чтобы»: «Я хочу позвонить» (e não «я хочу, чтобы я позвонил»). PASSO 4: exemplos: «Мама просит, чтобы я позвонил», «Он требует, чтобы мы пришли вовремя», «Я советую, чтобы вы отдыхали», «Мне важно, чтобы вы поняли», «Надо, чтобы он помог». PASSO 5: com «чтобы», o verbo concorda em gênero e número: «Я хочу, чтобы она пришла».', {
        tag: 'Frase',
        comparacao: 'o português usa o subjuntivo («quero que você venha»). O russo usa «чтобы» + passado, que funciona como o subjuntivo do português.',
        tabela: [
          { sujeitos: 'diferentes', frase: 'Я хочу, чтобы ты пришёл.', traducao: 'Quero que você venha.' }, { sujeitos: 'diferentes', frase: 'Мама просит, чтобы я позвонил.', traducao: 'Mamãe pede que eu ligue.' }, { sujeitos: 'diferentes', frase: 'Он требует, чтобы мы пришли вовремя.', traducao: 'Ele exige que cheguemos na hora.' }, { sujeitos: 'diferentes', frase: 'Мне важно, чтобы вы поняли.', traducao: 'É importante para mim que o senhor entenda.' }, { sujeitos: 'mesmo', frase: 'Я хочу позвонить.', traducao: 'Quero ligar.' },
        ],
        erros: [['Я хочу, чтобы ты придёшь.', 'Я хочу, чтобы ты пришёл.', 'Depois de «чтобы»: passado.'], ['Я хочу, чтобы я позвонил.', 'Я хочу позвонить.', 'Mesmo sujeito: infinitivo.'], ['Он требует, чтобы мы приходим вовремя.', 'Он требует, чтобы мы пришли вовремя.', '«чтобы» + passado no plural: пришли.']],
      }),
      producao(5, 'Diga: «Я хочу, чтобы ты пришёл. Мама просит, чтобы я позвонил. Мне важно, чтобы вы поняли. Я хочу позвонить.»'),
    ]),
    sessao('S2', 'Finalidade: чтобы, для того чтобы e чтобы не', [
      revisao(5, 'Escreva 5 frases com «хочу, чтобы», «прошу, чтобы» e «важно, чтобы».'),
      palavras(8, [['для того чтобы', 'dlya tavó shtóby', 'a fim de', 'in order to'], ['чтобы не', 'shtóby nye', 'para não', 'so as not to'], ['забыть', 'zabýt', 'esquecer', 'to forget'], ['опоздать', 'apazdát', 'atrasar-se', 'to be late'], ['заболеть', 'zabalyét', 'adoecer', 'to fall ill'], ['записать', 'zapisát', 'anotar', 'to write down'], ['закрыть', 'zakrýt', 'fechar', 'to close'], ['мешать', 'mishát', 'atrapalhar', 'to disturb']]),
      gramatica(12, 'A finalidade com чтобы', 'PASSO 1: a FINALIDADE («para») usa «чтобы» + infinitivo quando o sujeito é o mesmo: «Я учу русский, чтобы работать в России». PASSO 2: em textos mais formais, «ДЛЯ ТОГО, ЧТОБЫ» + infinitivo: «Для того чтобы получить визу, нужны документы». PASSO 3: «ЧТОБЫ НЕ» expressa «para não»: «Я пишу, чтобы не забыть», «Вставай рано, чтобы не опоздать». PASSO 4: com sujeitos diferentes, passado: «Я закрыл дверь, чтобы никто не мешал». PASSO 5: com verbos impessoais, passado neutro: «Закрой окно, чтобы не было холодно». PASSO 6: «ЧТОБЫ» + infinitivo também vem depois de «слишком + adjetivo»: «Он слишком молод, чтобы водить машину».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я учу русский, чтобы работать в России.', traducao: 'Estudo russo para trabalhar na Rússia.' }, { frase: 'Для того чтобы получить визу, нужны документы.', traducao: 'Para obter o visto são necessários documentos.' }, { frase: 'Я пишу, чтобы не забыть.', traducao: 'Escrevo para não esquecer.' }, { frase: 'Вставай рано, чтобы не опоздать.', traducao: 'Acorde cedo para não se atrasar.' }, { frase: 'Закрой окно, чтобы не было холодно.', traducao: 'Feche a janela para não ficar frio.' }, { frase: 'Я закрыл дверь, чтобы никто не мешал.', traducao: 'Fechei a porta para ninguém atrapalhar.' },
        ],
        erros: [['Я пишу, чтобы не забываю.', 'Я пишу, чтобы не забыть.', 'Mesmo sujeito: infinitivo.'], ['Закрой окно, чтобы не холодно.', 'Закрой окно, чтобы не было холодно.', 'Com «чтобы», use o passado: «было».']],
      }),
      producao(5, 'Diga a finalidade de 4 ações: «Я учу русский, чтобы … Я пишу, чтобы не … Я закрыл дверь, чтобы …»'),
    ]),
    sessao('S3', 'No escritório', [
      revisao(5, 'Escreva 5 frases com «чтобы не» e «для того чтобы».'),
      gramatica(10, 'Pedidos no trabalho', 'PASSO 1: para pedir algo a um colega: «Я прошу, чтобы вы отправили отчёт». PASSO 2: para exprimir importância: «Мне важно, чтобы клиент увидел его вовремя». PASSO 3: para pedir ajuda a terceiros: «Я попрошу Игоря, чтобы он помог». PASSO 4: para evitar um problema: «Я запишу всё, чтобы ничего не забыть». PASSO 5: para fixar prazo: «Я хочу, чтобы мы закончили к шести».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я хочу, чтобы вы отправили отчёт сегодня.', traducao: 'Quero que o senhor envie o relatório hoje.' }, { frase: 'Мне важно, чтобы клиент увидел его вовремя.', traducao: 'É importante que o cliente o veja a tempo.' }, { frase: 'Я запишу всё, чтобы ничего не забыть.', traducao: 'Vou anotar tudo para não esquecer nada.' }, { frase: 'Я хочу, чтобы мы закончили к шести.', traducao: 'Quero que terminemos até as seis.' },
        ],
      }),
      dialogo(8, 'В офисе / No escritório', 'Boris e Anna combinam o trabalho do dia.', [
        ['Борис', 'Анна, я хочу, чтобы вы отправили отчёт сегодня.', 'Anna, quero que a senhora envie o relatório hoje.'], ['Анна', 'Хорошо. Я напишу его, чтобы вы получили его до вечера.', 'Está bem. Vou escrevê-lo para que o senhor o receba até a noite.'], ['Борис', 'Мне важно, чтобы клиент увидел его вовремя.', 'É importante para mim que o cliente o veja a tempo.'],
        ['Анна', 'Я попрошу Игоря, чтобы он помог мне проверить цифры.', 'Vou pedir ao Igor que me ajude a conferir os números.'], ['Борис', 'Хорошо. И закройте дверь, чтобы нам никто не мешал.', 'Está bem. E feche a porta para ninguém nos atrapalhar.'], ['Анна', 'Конечно. Я также запишу всё, чтобы ничего не забыть.', 'Claro. Vou também anotar tudo para não esquecer nada.'],
        ['Борис', 'Отлично. Я хочу, чтобы мы закончили к шести.', 'Ótimo. Quero que terminemos até as seis.'], ['Анна', 'Мы закончим, если ничего не случится.', 'Terminaremos, se nada acontecer.'],
      ]),
      producao(7, 'Faça em voz alta pedidos de trabalho a um colega, com «хочу, чтобы», «важно, чтобы» e «чтобы не».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com pedidos e finalidades.'),
      exercicios(20, [
        lacuna('Я хочу, чтобы ты ___. (viesse)', ['пришёл', 'придёшь', 'приходить'], 'пришёл', 'Depois de «чтобы»: passado.'), lacuna('Мама просит, чтобы я ___. (ligasse)', ['позвонил', 'позвоню', 'звонить'], 'позвонил', '«чтобы» + passado.'), lacuna('Я хочу ___. (ligar, mesmo sujeito)', ['позвонить', 'чтобы позвонил', 'позвоню'], 'позвонить', 'Mesmo sujeito: infinitivo.'),
        lacuna('Я пишу, чтобы не ___. (esquecer)', ['забыть', 'забыл', 'забуду'], 'забыть', '«чтобы не» + infinitivo (mesmo sujeito).'), lacuna('Закрой окно, чтобы не ___ холодно.', ['было', 'будет', 'бы'], 'было', 'Impessoal: passado neutro.'), lacuna('___ того чтобы получить визу, нужны документы.', ['Для', 'С', 'От'], 'Для', '«для того чтобы».'),
        mc('«Я хочу, чтобы ты пришёл» usa:', ['чтобы + passado', 'чтобы + infinitivo', 'чтобы + futuro'], 'чтобы + passado', 'Sujeitos diferentes.'), mc('Com o mesmo sujeito, use:', ['infinitivo', 'passado', 'futuro'], 'infinitivo', '«Я хочу позвонить».'), mc('«Чтобы не» significa:', ['para não', 'para que', 'embora'], 'para não', '«чтобы не» = para não.'),
        ordem('Ordene: «Я хочу, чтобы ты пришёл.»', ['Я', 'хочу', 'чтобы', 'ты', 'пришёл'], 'Я хочу, чтобы ты пришёл.', '«чтобы» + passado.'), ouvir('Я запишу всё, чтобы ничего не забыть', ['Я запишу всё, чтобы ничего не забыть', 'Я пишу, чтобы не опоздать', 'Я хочу, чтобы ты пришёл'], 'Я запишу всё, чтобы ничего не забыть', '«чтобы не» + infinitivo.'), ditado('Мне важно, чтобы вы поняли', '«чтобы» + passado.'),
        livre('Escreva 5 frases: um desejo, um pedido, uma finalidade, um «чтобы не» e uma com o mesmo sujeito (infinitivo).', 'Я хочу, чтобы ты пришёл. Мама просит, чтобы я позвонил. Я учу русский, чтобы работать в России. Я пишу, чтобы не забыть. Я хочу отдохнуть.'),
      ]),
      producao(5, 'Grave-se pedindo algo a um colega e explicando a finalidade.'),
    ]),
  ],
});
