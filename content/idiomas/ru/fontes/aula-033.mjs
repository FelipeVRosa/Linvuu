import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 33, titulo: 'Gramática: что, потому что, когда, если, чтобы', nivel: 'a2',
  objetivo: 'Ligar frases com что, потому что, поэтому, когда, если, пока, хотя e чтобы, sempre com a vírgula e com o tempo verbal certo (o futuro depois de «когда» e «если»).',
  nota: 'Você liga ideias em frases completas. Próxima aula: saúde e corpo.',
  sessoes: [
    sessao('S1', 'Que, porque, por isso', [
      revisao(5, 'Escreva o imperativo (ты e вы) de «смотреть», «пить» e «позвонить».'),
      palavras(8, [
        ['думать', 'dúmat', 'pensar', 'to think'], ['считать', 'schitát', 'achar, considerar', 'to consider'], ['сказать', 'skazát', 'dizer (uma vez)', 'to say'], ['спрашивать', 'spráshivat', 'perguntar', 'to ask'],
        ['надеяться', 'nadyéyatsya', 'ter esperança', 'to hope'], ['обещать', 'abishchát', 'prometer', 'to promise'], ['почему', 'pachimú', 'por quê', 'why'], ['причина', 'prichína', 'motivo', 'reason'],
      ]),
      gramatica(14, 'Ligar frases: что, потому что, поэтому', 'PASSO 1: em russo, quem liga duas frases SEMPRE coloca uma VÍRGULA antes da conjunção: «Я знаю, что он дома.» PASSO 2: «ЧТО» = «que» e introduz o conteúdo de «saber, pensar, dizer, ver»: «Я думаю, что это хорошо», «Он сказал, что придёт». PASSO 3: no discurso indireto o russo mantém o tempo da fala original: «Он сказал: «Я приду» → Он сказал, что придёт». PASSO 4: «ПОТОМУ ЧТО» = «porque» e responde a «ПОЧЕМУ?» (por quê?): «Почему ты не идёшь? — Потому что я болею.» PASSO 5: «ПОЭТОМУ» = «por isso» e liga a consequência: «Я болею, поэтому я не иду». PASSO 6: compare: causa → «потому что»; consequência → «поэтому».', {
        tag: 'Frase',
        comparacao: 'o português usa «que» e «porque» como o russo usa «что» e «потому что». A diferença: no russo a vírgula antes da conjunção é obrigatória, e o tempo do discurso indireto não muda.',
        tabela: [
          { conjuncao: 'что (que)', exemplo: 'Я знаю, что он дома. Я думаю, что это хорошо.' }, { conjuncao: 'потому что (porque)', exemplo: 'Я не иду, потому что я болею.' }, { conjuncao: 'поэтому (por isso)', exemplo: 'Я болею, поэтому я не иду.' }, { conjuncao: 'почему? (por quê?)', exemplo: 'Почему ты не пришёл? — Потому что я работал.' },
        ],
        erros: [['Я знаю что он дома.', 'Я знаю, что он дома.', 'Vírgula obrigatória antes de «что».'], ['Я не иду, поэтому я болею.', 'Я не иду, потому что я болею.', 'A causa vem com «потому что».'], ['Потому что ты не пришёл?', 'Почему ты не пришёл?', 'Pergunta: «почему»; resposta: «потому что».']],
      }),
      producao(3, 'Diga: «Я знаю, что он дома. Я не иду, потому что я болею. Я болею, поэтому я не иду.»'),
    ]),
    sessao('S2', 'Quando, se, enquanto, embora', [
      revisao(5, 'Escreva 4 frases com «что», «потому что» e «поэтому».'),
      palavras(8, [
        ['когда', 'kagdá', 'quando', 'when'], ['если', 'yésli', 'se', 'if'], ['пока', 'paká', 'enquanto', 'while'], ['пока не', 'paká nye', 'até que', 'until'],
        ['хотя', 'khatyá', 'embora', 'although'], ['как только', 'kak tólka', 'assim que', 'as soon as'], ['после того как', 'pósle tavó kak', 'depois que', 'after'], ['перед тем как', 'périd tyem kak', 'antes de', 'before'],
      ]),
      gramatica(12, 'Tempo e condição: o futuro vem depois de «когда» e «если»', 'PASSO 1: «КОГДА» (quando) e «ЕСЛИ» (se) ligam tempo e condição. PASSO 2: O PORTUGUÊS usa o SUBJUNTIVO («quando eu chegar», «se chover»). O RUSSO usa o FUTURO, nas duas partes: «Когда я приеду, я позвоню» e «Если будет дождь, мы останемся дома». PASSO 3: «ПОКА» = «enquanto» (duas ações ao mesmo tempo): «Пока ты работаешь, я читаю». PASSO 4: «ПОКА НЕ» = «até que»: «Я буду ждать, пока он не придёт» (o verbo fica no perfectivo). PASSO 5: «ХОТЯ» = «embora»: «Хотя было холодно, мы гуляли». PASSO 6: «КАК ТОЛЬКО» = «assim que»: «Как только я приеду, я позвоню».', {
        tag: 'Frase',
        comparacao: 'onde o português diz «quando eu chegar» e «se chover» (subjuntivo), o russo diz «когда я приеду» e «если будет дождь» (futuro). Pense: «quando eu vou chegar, se vai chover».',
        tabela: [
          { portugues: 'Quando eu chegar, ligo.', russo: 'Когда я приеду, я позвоню.' }, { portugues: 'Se chover, ficamos em casa.', russo: 'Если будет дождь, мы останемся дома.' }, { portugues: 'Enquanto você trabalha, eu leio.', russo: 'Пока ты работаешь, я читаю.' }, { portugues: 'Espero até que ele chegue.', russo: 'Я буду ждать, пока он не придёт.' },
          { portugues: 'Embora fizesse frio, passeamos.', russo: 'Хотя было холодно, мы гуляли.' }, { portugues: 'Assim que eu chegar, ligo.', russo: 'Как только я приеду, я позвоню.' },
        ],
        erros: [['Когда я приезжаю, я позвоню.', 'Когда я приеду, я позвоню.', 'Para o futuro, use o futuro nas duas partes.'], ['Если идёт дождь завтра, мы останемся дома.', 'Если завтра будет дождь, мы останемся дома.', '«Если» + futuro, quando falamos do que ainda vai acontecer.'], ['Я буду ждать, пока он придёт.', 'Я буду ждать, пока он не придёт.', '«até que» = «пока не».']],
      }),
      producao(5, 'Diga: «Когда я приеду, я позвоню. Если будет дождь, я останусь дома. Пока ты работаешь, я читаю.»'),
    ]),
    sessao('S3', 'Para que: чтобы', [
      revisao(5, 'Escreva 4 frases com «когда», «если», «пока не» e «хотя».'),
      gramatica(10, 'Чтобы: finalidade e desejo', 'PASSO 1: «ЧТОБЫ» = «para», «para que». PASSO 2: com o MESMO sujeito nas duas partes, use «чтобы» + INFINITIVO: «Я учу русский, чтобы работать в России». PASSO 3: com sujeitos DIFERENTES, use «чтобы» + a forma do PASSADO (que aqui não indica tempo, só liga os sujeitos): «Я хочу, чтобы ты пришёл». PASSO 4: o mesmo vale depois de «просить, хотеть, надо, нужно, советовать»: «Мама просит, чтобы я позвонил», «Мне надо, чтобы ты помог». PASSO 5: não use «чтобы» + presente nem + futuro.', {
        tag: 'Frase',
        tabela: [
          { uso: 'mesmo sujeito: infinitivo', exemplo: 'Я иду в магазин, чтобы купить хлеб.' }, { uso: 'sujeitos diferentes: passado', exemplo: 'Я хочу, чтобы ты пришёл. Мама просит, чтобы я позвонил.' }, { uso: 'necessidade', exemplo: 'Мне надо, чтобы ты помог мне.' },
        ],
        erros: [['Я хочу, чтобы ты придёшь.', 'Я хочу, чтобы ты пришёл.', 'Depois de «чтобы» com outro sujeito: forma do passado.'], ['Я иду в магазин, чтобы я купить хлеб.', 'Я иду в магазин, чтобы купить хлеб.', 'Mesmo sujeito: «чтобы» + infinitivo, sem repetir «я».']],
      }),
      dialogo(9, 'Планы на субботу / Planos para o sábado', 'Dois amigos combinam o fim de semana.', [
        ['Света', 'Игорь, что ты делаешь в субботу?', 'Igor, o que você faz no sábado?'], ['Игорь', 'Не знаю. Если будет хорошая погода, я пойду в парк.', 'Não sei. Se fizer bom tempo, vou ao parque.'], ['Света', 'А если пойдёт дождь?', 'E se chover?'],
        ['Игорь', 'Тогда я останусь дома, потому что не люблю дождь.', 'Então fico em casa, porque não gosto de chuva.'], ['Света', 'Я хочу, чтобы ты пришёл к нам. Мы готовим обед.', 'Quero que você venha à nossa casa. Estamos preparando o almoço.'], ['Игорь', 'Спасибо! Когда мне прийти?', 'Obrigado! Quando devo chegar?'],
        ['Света', 'Приходи в два часа.', 'Venha às duas horas.'], ['Игорь', 'Хорошо. Хотя я плохо готовлю, я постараюсь помочь.', 'Está bem. Embora eu cozinhe mal, vou tentar ajudar.'], ['Света', 'Не волнуйся! Мы будем ждать, пока ты не придёшь.', 'Não se preocupe! Vamos esperar até você chegar.'],
      ]),
      producao(6, 'Combine algo com um amigo em voz alta, usando «если», «потому что» e «чтобы».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com что, потому что, когда, если e чтобы.'),
      exercicios(20, [
        lacuna('Я знаю, ___ он дома.', ['что', 'чтобы', 'потому'], 'что', '«что» = que (conteúdo).'), lacuna('Я не иду, ___ я болею.', ['потому что', 'поэтому', 'чтобы'], 'потому что', 'Causa: потому что.'), lacuna('Я болею, ___ не иду.', ['поэтому', 'потому что', 'хотя'], 'поэтому', 'Consequência: поэтому.'),
        lacuna('___ я приеду, я позвоню.', ['Когда', 'Если', 'Хотя'], 'Когда', '«quando»: когда.'), lacuna('___ будет дождь, мы останемся дома.', ['Если', 'Когда', 'Пока'], 'Если', 'Condição: если.'), lacuna('Я хочу, чтобы ты ___. (viesse)', ['пришёл', 'придёшь', 'приходить'], 'пришёл', 'Depois de «чтобы» com outro sujeito: passado.'),
        lacuna('Я учу русский, чтобы ___ в России. (trabalhar)', ['работать', 'работаю', 'работал'], 'работать', 'Mesmo sujeito: infinitivo.'), mc('«Хотя» significa:', ['embora', 'porque', 'enquanto'], 'embora', '«хотя» = embora.'), mc('Para «até que» use:', ['пока не', 'пока', 'хотя'], 'пока не', '«пока не» = até que.'),
        mc('Depois de «когда» e «если», falando do futuro, o verbo fica:', ['no futuro', 'num subjuntivo', 'no infinitivo'], 'no futuro', 'Не há subjuntivo: «когда я приеду».'), ordem('Ordene: «Я знаю, что он дома.»', ['Я', 'знаю', 'что', 'он', 'дома'], 'Я знаю, что он дома.', 'Vírgula antes de «что».'), ouvir('Если будет дождь, мы останемся дома', ['Если будет дождь, мы останемся дома', 'Когда будет дождь, мы останемся дома', 'Если был дождь, мы остались дома'], 'Если будет дождь, мы останемся дома', '«если» + futuro.'),
        ditado('Я хочу, чтобы ты пришёл', 'После «чтобы»: passado.'), livre('Escreva 5 frases: com что, потому что, когда, если e чтобы.', 'Я знаю, что он дома. Я не иду, потому что я болею. Когда я приеду, я позвоню. Если будет дождь, мы останемся дома. Я хочу, чтобы ты пришёл.'),
      ]),
      producao(5, 'Grave-se contando o que você vai fazer no fim de semana, com «если» e «когда».'),
    ]),
  ],
});
