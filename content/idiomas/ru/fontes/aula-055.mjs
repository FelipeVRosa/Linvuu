import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 55, titulo: 'O condicional: бы e если бы', nivel: 'b1',
  objetivo: 'Formar o condicional com «бы» (verbo no passado + бы), fazer pedidos educados, dar conselhos, exprimir desejos e falar de condições irreais («Если бы у меня было время, я бы поехал»).',
  nota: 'Você fala do que seria, do que gostaria e do que poderia ter sido. Próxima aula: «чтобы» e desejos.',
  sessoes: [
    sessao('S1', 'Como se forma o condicional', [
      revisao(5, 'Escreva 5 frases com «который» no prepositivo e com preposição.'),
      palavras(8, [['бы', 'by', 'partícula do condicional', 'would'], ['если бы', 'yésli by', 'se (irreal)', 'if (unreal)'], ['хотел бы', 'khatyél by', 'gostaria', 'would like'], ['мог бы', 'mok by', 'poderia', 'could'], ['на твоём месте', 'na tvaióm myéste', 'no seu lugar', 'in your place'], ['с удовольствием', 's udavólstviyem', 'com prazer', 'with pleasure'], ['жаль', 'zhal', 'pena', 'pity'], ['было бы хорошо', 'býla by kharashó', 'seria bom', 'it would be good']]),
      gramatica(12, 'Passado + бы', 'PASSO 1: o CONDICIONAL russo se forma com o verbo no PASSADO e a partícula «БЫ»: «я пошёл бы» (eu iria), «она пошла бы», «мы пошли бы». PASSO 2: o verbo concorda em GÊNERO e NÚMERO, como no passado: «я бы пошёл» (homem), «я бы пошла» (mulher). PASSO 3: «бы» pode ficar logo depois da palavra que se quer destacar: «Я бы хотел чай» = «Я хотел бы чай». PASSO 4: a CONDIÇÃO IRREAL usa «ЕСЛИ БЫ» + passado, e a consequência leva «бы» + passado: «Если бы у меня было время, я бы поехал в Москву» (se eu tivesse tempo, iria a Moscou). PASSO 5: compare com a condição REAL (aula 33): «Если у меня будет время, я поеду» (talvez tenha) × «Если бы у меня было время, я бы поехал» (não tenho). PASSO 6: o passado de «есть» na posse é «было»: «у меня было время».', {
        tag: 'Verbos',
        comparacao: 'o português tem o imperfeito do subjuntivo («se eu tivesse») e o futuro do pretérito («eu iria»). O russo usa só uma forma, o passado + «бы», nas duas partes.',
        tabela: [
          { pronome: 'я (m / f)', forma: 'пошёл бы / пошла бы' }, { pronome: 'ты (m / f)', forma: 'пошёл бы / пошла бы' }, { pronome: 'он / она / оно', forma: 'пошёл бы / пошла бы / пошло бы' }, { pronome: 'мы, вы, они', forma: 'пошли бы' },
        ],
        erros: [['Если у меня будет время, я бы поехал. (irreal)', 'Если бы у меня было время, я бы поехал.', 'Condição irreal: «если бы» + passado.'], ['Я бы пойду.', 'Я бы пошёл.', '«бы» pede o passado, não o presente.'], ['Если бы я знаю, я бы сказал.', 'Если бы я знал, я бы сказал.', 'Depois de «если бы»: passado.']],
      }),
      producao(5, 'Diga: «Я пошёл бы в кино. Она пошла бы домой. Мы пошли бы в парк. Если бы у меня было время, я бы поехал.»'),
    ]),
    sessao('S2', 'Pedidos, conselhos e desejos', [
      revisao(5, 'Escreva as formas de «пойти» + бы para я, она e мы.'),
      palavras(8, [['не могли бы вы', 'ni maglí by vy', 'o senhor poderia', 'could you'], ['я хотел бы', 'ya khatyél by', 'eu gostaria', 'I would like'], ['было бы хорошо', 'býla by kharashó', 'seria bom', 'it would be good'], ['хорошо бы', 'kharashó by', 'seria bom', 'it would be nice'], ['посоветовать', 'pasavyétavat', 'aconselhar', 'to advise'], ['я бы на твоём месте', 'ya by na tvaióm myéste', 'eu, no seu lugar', 'if I were you'], ['пригласить', 'priglasít', 'convidar', 'to invite'], ['помочь', 'pamóch', 'ajudar', 'to help']]),
      gramatica(12, 'Educação, conselho e desejo', 'PASSO 1: para um PEDIDO EDUCADO, use «Не могли бы вы…?» (formal) ou «Не мог бы ты…?» (informal) + infinitivo: «Не могли бы вы мне помочь?» (o senhor poderia me ajudar?). PASSO 2: para um DESEJO educado, use «Я хотел бы…» ou «Я бы хотел…»: «Я хотел бы чай». PASSO 3: para um CONSELHO, use «Я бы на твоём месте» + passado: «Я бы на твоём месте позвонил» (eu, no seu lugar, ligaria). PASSO 4: para uma SUGESTÃO, «Хорошо бы» ou «Было бы хорошо» + infinitivo: «Хорошо бы поехать в отпуск». PASSO 5: para uma condição desejada, «Было бы хорошо, если бы ты пришёл». PASSO 6: «Если бы я мог!» = «quem me dera!» (se eu pudesse).', {
        tag: 'Frase',
        tabela: [
          { funcao: 'pedido educado (formal)', frase: 'Не могли бы вы мне помочь?' }, { funcao: 'pedido educado (informal)', frase: 'Не мог бы ты закрыть окно?' }, { funcao: 'desejo educado', frase: 'Я хотел бы чай.' }, { funcao: 'conselho', frase: 'Я бы на твоём месте позвонил.' }, { funcao: 'sugestão', frase: 'Хорошо бы поехать в отпуск.' }, { funcao: 'desejo', frase: 'Было бы хорошо, если бы ты пришёл.' },
        ],
        erros: [['Я хочу бы чай.', 'Я хотел бы чай.', 'Depois de «бы»: passado («хотел»).'], ['Не могли бы вы помогаете мне?', 'Не могли бы вы помочь мне?', 'Depois de «мочь»: infinitivo.']],
      }),
      producao(5, 'Faça pedidos e dê conselhos: «Не могли бы вы мне помочь? Я хотел бы чай. Я бы на твоём месте позвонил.»'),
    ]),
    sessao('S3', 'Se eu tivesse…', [
      revisao(5, 'Escreva 5 frases com pedidos, conselhos e desejos com «бы».'),
      gramatica(10, 'Hipóteses irreais', 'PASSO 1: para o PRESENTE irreal: «Если бы у меня было больше денег, я бы купил машину». PASSO 2: para o PASSADO irreal, a forma é a mesma, e um marcador de tempo esclarece: «Если бы я знал вчера, я бы пришёл». PASSO 3: pode-se inverter: «Я бы поехал, если бы у меня было время». PASSO 4: use «бы» nas duas partes: «если бы» + passado, «бы» + passado. PASSO 5: para o desejo: «Если бы я мог!» e «Если бы я знал!»', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Если бы у меня было время, я бы поехал в Москву.', traducao: 'Se eu tivesse tempo, iria a Moscou.' }, { frase: 'Если бы я знал вчера, я бы пришёл.', traducao: 'Se eu soubesse ontem, teria vindo.' }, { frase: 'Я бы поехал, если бы у меня было время.', traducao: 'Eu iria, se tivesse tempo.' }, { frase: 'Если бы я мог!', traducao: 'Quem me dera poder!' },
        ],
      }),
      dialogo(8, 'Если бы… / Se…', 'Dois amigos sonham com uma viagem.', [
        ['Аня', 'Если бы у меня было больше времени, я бы поехала в Москву.', 'Se eu tivesse mais tempo, iria a Moscou.'], ['Паша', 'А если бы у тебя были деньги, что бы ты сделала?', 'E se você tivesse dinheiro, o que faria?'], ['Аня', 'Я бы купила билет и жила бы там месяц.', 'Compraria uma passagem e moraria lá um mês.'],
        ['Паша', 'Я бы на твоём месте поехал сейчас, пока тепло.', 'Eu, no seu lugar, iria agora, enquanto está quente.'], ['Аня', 'Не мог бы ты помочь мне выбрать маршрут?', 'Você poderia me ajudar a escolher o roteiro?'], ['Паша', 'С удовольствием бы помог, но я не знаю Москву.', 'Ajudaria com prazer, mas não conheço Moscou.'],
        ['Аня', 'Тогда, если бы ты поехал со мной, мы бы нашли маршрут вместе.', 'Então, se você viajasse comigo, acharíamos o roteiro juntos.'], ['Паша', 'Было бы здорово, если бы мы поехали вместе!', 'Seria ótimo se fôssemos juntos!'],
      ]),
      producao(7, 'Fale em voz alta de três sonhos seus com «Если бы … я бы …» e dê um conselho a um amigo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com «если бы» e «бы».'),
      exercicios(20, [
        lacuna('Я ___ бы в кино. (iria, homem)', ['пошёл', 'иду', 'пойду'], 'пошёл', 'Passado + бы.'), lacuna('Я ___ бы в кино. (iria, mulher)', ['пошла', 'пошёл', 'пойду'], 'пошла', 'Feminino: пошла.'), lacuna('Если ___ у меня было время, я бы поехал.', ['бы', 'будет', 'как'], 'бы', '«если бы» + passado.'),
        lacuna('Если бы я ___, я бы сказал. (soubesse)', ['знал', 'знаю', 'буду знать'], 'знал', 'Depois de «если бы»: passado.'), lacuna('Не ___ бы вы мне помочь?', ['могли', 'можете', 'смогу'], 'могли', '«Не могли бы вы…?»'), lacuna('Я ___ бы чай. (gostaria)', ['хотел', 'хочу', 'хотеть'], 'хотел', 'Passado + бы.'),
        mc('«Если бы у меня было время» expressa:', ['condição irreal', 'condição real', 'ordem'], 'condição irreal', '«если бы» + passado.'), mc('«Я бы на твоём месте позвонил» é:', ['um conselho', 'uma ordem', 'uma pergunta'], 'um conselho', 'Condicional como conselho.'), mc('Depois de «бы», o verbo fica no:', ['passado', 'presente', 'infinitivo'], 'passado', 'Passado + бы.'),
        ordem('Ordene: «Я бы поехал в Москву.»', ['Я', 'бы', 'поехал', 'в', 'Москву'], 'Я бы поехал в Москву.', 'бы + passado.'), ouvir('Не могли бы вы мне помочь', ['Не могли бы вы мне помочь', 'Вы можете мне помочь', 'Я хотел бы вам помочь'], 'Не могли бы вы мне помочь', 'Pedido educado.'), ditado('Если бы я мог', '«Quem me dera».'),
        livre('Escreva 5 frases: um pedido educado, um desejo, um conselho e duas condições irreais.', 'Не могли бы вы мне помочь? Я хотел бы чай. Я бы на твоём месте позвонил. Если бы у меня было время, я бы поехал. Если бы я знал, я бы сказал.'),
      ]),
      producao(5, 'Grave-se pedindo algo com educação e dizendo o que faria se tivesse mais tempo.'),
    ]),
  ],
});
