import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 31, titulo: 'Gramática: os pronomes pessoais nos seis casos', nivel: 'a2',
  objetivo: 'Usar os pronomes pessoais em todos os casos (меня, мне, мной, о нём…), o «н-» que aparece depois de preposição e os pronomes com os verbos mais comuns.',
  nota: 'Você declina os pronomes pessoais e sabe quando o «н-» aparece. Próxima aula: o imperativo.',
  sessoes: [
    sessao('S1', 'Os pronomes nos seis casos', [
      revisao(5, 'Escreva o dativo de: брат, мама, друг, подруга, дети.'),
      palavras(8, [
        ['ждать', 'zhdat', 'esperar', 'to wait'], ['помнить', 'pómnit', 'lembrar', 'to remember'], ['знать', 'znat', 'saber, conhecer', 'to know'], ['понимать', 'panimát', 'entender', 'to understand'],
        ['слушать', 'slúshat', 'escutar', 'to listen to'], ['приглашать', 'priglashát', 'convidar', 'to invite'], ['скучать', 'skuchát', 'sentir saudade', 'to miss'], ['встречать', 'fstrichát', 'encontrar, receber', 'to meet'],
      ]),
      gramatica(14, 'Os pronomes pessoais mudam como os substantivos', 'PASSO 1: em português, «eu» vira «me, mim, comigo»; em russo, os pronomes também mudam conforme a função, nos mesmos SEIS casos dos substantivos. PASSO 2: o nominativo é o que você já conhece (я, ты, он, она, мы, вы, они). PASSO 3: o ACUSATIVO e o GENITIVO têm a mesma forma nos pronomes: «меня, тебя, его, её, нас, вас, их». PASSO 4: o DATIVO responde a «кому?»: «мне, тебе, ему, ей, нам, вам, им». PASSO 5: o INSTRUMENTAL responde a «с кем?»: «мной, тобой, им, ей, нами, вами, ими». PASSO 6: o PREPOSITIVO vem sempre depois de uma preposição («о», «в», «на»): «обо мне, о тебе, о нём, о ней, о нас, о вас, о них». PASSO 7: «его» lê-se «ievó» e «её» lê-se «ieiô»: o «г» de «его» soa como «v».', {
        tag: 'Pronomes',
        comparacao: 'o português tem formas diferentes para «eu», «me», «mim» e «comigo». O russo faz o mesmo com um único mecanismo: o caso. Aprenda a tabela uma vez e use-a com qualquer verbo ou preposição.',
        tabela: [
          { nominativo: 'я', genitivo: 'меня', dativo: 'мне', acusativo: 'меня', instrumental: 'мной', prepositivo: '(обо) мне' },
          { nominativo: 'ты', genitivo: 'тебя', dativo: 'тебе', acusativo: 'тебя', instrumental: 'тобой', prepositivo: '(о) тебе' },
          { nominativo: 'он / оно', genitivo: 'его', dativo: 'ему', acusativo: 'его', instrumental: 'им', prepositivo: '(о) нём' },
          { nominativo: 'она', genitivo: 'её', dativo: 'ей', acusativo: 'её', instrumental: 'ей', prepositivo: '(о) ней' },
          { nominativo: 'мы', genitivo: 'нас', dativo: 'нам', acusativo: 'нас', instrumental: 'нами', prepositivo: '(о) нас' },
          { nominativo: 'вы', genitivo: 'вас', dativo: 'вам', acusativo: 'вас', instrumental: 'вами', prepositivo: '(о) вас' },
          { nominativo: 'они', genitivo: 'их', dativo: 'им', acusativo: 'их', instrumental: 'ими', prepositivo: '(о) них' },
        ],
        erros: [['Я вижу ты.', 'Я вижу тебя.', 'O objeto direto vai para o acusativo: тебя.'], ['Он звонит я.', 'Он звонит мне.', '«звонить» pede dativo: мне.'], ['Я иду с ты.', 'Я иду с тобой.', 'Depois de «с» (com), instrumental: тобой.']],
      }),
      producao(3, 'Diga em voz alta: «Я вижу тебя. Ты видишь меня. Он знает нас. Мы знаем его.»'),
    ]),
    sessao('S2', 'O «н-» depois de preposição', [
      revisao(5, 'Escreva a tabela dos pronomes no dativo e no instrumental, de memória.'),
      palavras(8, [
        ['для', 'dlya', 'para (+ genitivo)', 'for'], ['без', 'byes', 'sem (+ genitivo)', 'without'], ['от', 'at', 'de, da parte de (+ genitivo)', 'from'], ['у', 'u', 'junto de; «ter» (+ genitivo)', 'at, by'],
        ['к', 'k', 'em direção a (+ dativo)', 'to, towards'], ['с', 's', 'com (+ instrumental)', 'with'], ['о', 'o / a', 'sobre (+ prepositivo)', 'about'], ['про', 'pro', 'sobre (+ acusativo)', 'about'],
      ]),
      gramatica(12, 'Preposição + pronome: o «н-» na frente', 'PASSO 1: os pronomes «он, она, они» (e «оно») começam por «и» ou «е» («его, ему, им, её, ей, их, ими»). PASSO 2: DEPOIS DE UMA PREPOSIÇÃO, eles ganham um «н-» na frente, por eufonia: «его» vira «него», «ей» vira «ней», «им» vira «ним», «ими» vira «ними». PASSO 3: exemplos: «у него есть брат» (ele tem um irmão), «я иду к ней» (vou ao encontro dela), «мы говорим с ними» (falamos com eles), «это подарок для неё» (é um presente para ela), «без него» (sem ele). PASSO 4: o «н-» NÃO aparece com os pronomes «я, ты, мы, вы», que não começam por vogal: «у меня», «к тебе», «с нами», «без вас». PASSO 5: depois de «о», o pronome «он» vira «нём»: «мы говорим о нём»; «я» vira «мне» com «обо»: «обо мне».', {
        tag: 'Pronomes',
        tabela: [
          { preposicao: 'у (+ gen.)', exemplo: 'У него есть сестра. У неё есть брат. У них есть дом.' }, { preposicao: 'к (+ dat.)', exemplo: 'Я иду к ней. Он идёт к ним.' }, { preposicao: 'с (+ instr.)', exemplo: 'Я иду с ним. Мы говорим с ними.' },
          { preposicao: 'для (+ gen.)', exemplo: 'Это подарок для неё. Это для них.' }, { preposicao: 'без (+ gen.)', exemplo: 'Без него скучно. Без вас скучно.' }, { preposicao: 'о (+ prep.)', exemplo: 'Мы говорим о нём. Я думаю о ней.' },
        ],
        erros: [['У он есть брат.', 'У него есть брат.', 'Depois de preposição, «он» vira «него».'], ['Это для она.', 'Это для неё.', 'для + genitivo, com «н-»: неё.'], ['Я иду к ему.', 'Я иду к нему.', 'Depois de «к», o dativo «ему» ganha o «н-»: нему.']],
      }),
      producao(5, 'Diga: «У меня есть брат. У него есть дом. Я иду к нему. Мы говорим о нём. Это подарок для неё.»'),
    ]),
    sessao('S3', 'Pronomes com verbos comuns', [
      revisao(5, 'Escreva 6 frases com «у него», «с ней», «о них», «для нас», «без вас» e «к тебе».'),
      gramatica(10, 'Verbos e o caso que pedem', 'PASSO 1: para usar o pronome certo, descubra o caso que o verbo pede. PASSO 2: pedem ACUSATIVO: «видеть, знать, любить, ждать, слушать, понимать, приглашать» — «Я люблю тебя», «Ты знаешь его?». PASSO 3: pedem DATIVO: «звонить, помогать, отвечать, нравиться» — «Он помогает мне», «Она звонит ему». PASSO 4: pedem INSTRUMENTAL (com «с»): «говорить с кем?» — «Я говорю с ней». PASSO 5: pedem PREPOSITIVO: «думать о ком?», «говорить о ком?» — «Я думаю о тебе». PASSO 6: «скучать по» pede dativo: «Я скучаю по тебе» (tenho saudade de você).', {
        tag: 'Pronomes',
        tabela: [
          { caso: 'acusativo', frase: 'Я люблю тебя. Ты знаешь его? Мы ждём вас.' }, { caso: 'dativo', frase: 'Он помогает мне. Она звонит ему. Он отвечает нам.' }, { caso: 'instrumental', frase: 'Я говорю с ней. Мы идём с ними.' }, { caso: 'prepositivo', frase: 'Я думаю о тебе. Мы говорим о нём.' }, { caso: 'dativo (скучать по)', frase: 'Я скучаю по тебе. Мы скучаем по вам.' },
        ],
      }),
      dialogo(8, 'Ты знаешь её? / Você a conhece?', 'Dois amigos falam de uma amiga.', [
        ['Катя', 'Антон, ты знаешь Ольгу?', 'Anton, você conhece a Olga?'], ['Антон', 'Да, я знаю её. Мы учились вместе.', 'Sim, eu a conheço. Estudamos juntos.'], ['Катя', 'Ты часто видишь её?', 'Você a vê com frequência?'],
        ['Антон', 'Нет, но я иногда звоню ей.', 'Não, mas às vezes ligo para ela.'], ['Катя', 'Она говорит, что скучает по тебе.', 'Ela diz que sente saudade de você.'], ['Антон', 'Правда? Я тоже думаю о ней.', 'É mesmo? Eu também penso nela.'],
        ['Катя', 'Давай пригласим её к нам в субботу!', 'Vamos convidá-la para vir à nossa casa no sábado!'], ['Антон', 'Отличная идея! Я позвоню ей сегодня.', 'Ótima ideia! Vou ligar para ela hoje.'],
      ]),
      producao(7, 'Fale de uma pessoa que você conhece: «Я знаю … Я часто вижу … Я звоню … Я думаю о …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases sobre uma pessoa, usando um pronome diferente em cada caso.'),
      exercicios(20, [
        lacuna('Я вижу ___. (você, ты)', ['тебя', 'тебе', 'ты'], 'тебя', 'Acusativo de «ты»: тебя.'), lacuna('Он звонит ___. (a mim)', ['мне', 'меня', 'мной'], 'мне', '«звонить» pede dativo: мне.'), lacuna('Мы идём с ___. (com eles)', ['ними', 'ним', 'их'], 'ними', 'Depois de «с», instrumental com «н-»: ними.'),
        lacuna('У ___ есть сестра. (dele)', ['него', 'его', 'он'], 'него', 'Depois de preposição: «н-».'), lacuna('Это подарок для ___. (para ela)', ['неё', 'её', 'она'], 'неё', 'для + genitivo, com «н-»: неё.'), lacuna('Я думаю о ___. (nele)', ['нём', 'нем', 'него'], 'нём', '«о» + prepositivo: нём.'),
        mc('Instrumental de «я»:', ['мной', 'мне', 'меня'], 'мной', 'Instrumental: мной.'), mc('Dativo de «мы»:', ['нам', 'нас', 'нами'], 'нам', 'Dativo: нам.'), mc('Acusativo de «они»:', ['их', 'им', 'ими'], 'их', 'Acusativo: их.'),
        mc('«Я скучаю по тебе» significa:', ['Tenho saudade de você', 'Eu a vejo', 'Vou com você'], 'Tenho saudade de você', '«скучать по» + dativo.'), ordem('Ordene: «Я часто думаю о тебе.»', ['Я', 'часто', 'думаю', 'о', 'тебе'], 'Я часто думаю о тебе.', '«о» + prepositivo: тебе.'), ouvir('Я звоню ей каждый день', ['Я звоню ей каждый день', 'Я звоню им каждый день', 'Я звоню ему каждый день'], 'Я звоню ей каждый день', '«ей» = dativo de «она».'),
        ditado('Мы говорим о нём', 'Depois de «о»: нём.'), livre('Escreva 5 frases com pronomes em casos diferentes: acusativo, dativo, instrumental, prepositivo e uma com «у него/неё».', 'Я вижу тебя. Он звонит мне. Я иду с ней. Мы говорим о нём. У неё есть брат.'),
      ]),
      producao(5, 'Grave-se falando de duas pessoas: o que você faz com elas, para elas e sobre elas.'),
    ]),
  ],
});
