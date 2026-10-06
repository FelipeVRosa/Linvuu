import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 58, titulo: 'O gerúndio (деепричастие)', nivel: 'b1',
  objetivo: 'Formar e usar o gerúndio imperfectivo (читая, говоря) e perfectivo (прочитав, придя, вернувшись) para ações simultâneas ou anteriores do mesmo sujeito, com as vírgulas certas.',
  nota: 'Você usa o gerúndio para ligar ações do mesmo sujeito. Próxima aula: passiva e impessoais.',
  sessoes: [
    sessao('S1', 'O gerúndio imperfectivo: ao mesmo tempo', [
      revisao(5, 'Escreva 5 frases em discurso indireto: com «что», com palavra interrogativa, com «ли» e com «чтобы».'),
      palavras(8, [['читая', 'chitáya', 'lendo', 'reading'], ['говоря', 'gavaryá', 'falando', 'speaking'], ['слушая', 'slúshaya', 'ouvindo', 'listening'], ['гуляя', 'gulyáya', 'passeando', 'strolling'], ['сидя', 'sidyá', 'sentado', 'sitting'], ['смеясь', 'smiyás', 'rindo', 'laughing'], ['возвращаясь', 'vazvrashcháyas', 'voltando', 'returning'], ['одновременно', 'adnavrimyénna', 'ao mesmo tempo', 'simultaneously']]),
      gramatica(12, 'Gerúndio imperfectivo, passo a passo', 'PASSO 1: o GERÚNDIO (деепричастие) é uma forma que não muda e descreve uma ação SECUNDÁRIA do MESMO sujeito do verbo principal: «Он шёл, читая газету» (ele andava lendo o jornal). PASSO 2: o gerúndio IMPERFECTIVO indica ação SIMULTÂNEA. PASSO 3: formação: parta da forma «они» do presente, tire «-ут / -ют / -ат / -ят» e junte «-я»: «читают → читая», «говорят → говоря», «слушают → слушая», «гуляют → гуляя». PASSO 4: depois de «ж, ш, ч, щ», escreva «-а» em vez de «-я»: «слышат → слыша», «лежат → лёжа». PASSO 5: verbos reflexivos: «-ясь / -ась»: «возвращаясь, смеясь». PASSO 6: verbos em «-вать» mantêm o «-ва-»: «вставать → вставая». PASSO 7: alguns verbos não têm gerúndio imperfectivo («писать», «мочь», «бежать»); use outra construção. PASSO 8: o gerúndio vem entre VÍRGULAS: «Читая книгу, он пил чай».', {
        tag: 'Verbos',
        comparacao: 'o português usa o gerúndio («lendo», «falando») do mesmo jeito: ação simultânea do mesmo sujeito. A diferença: o russo tem formas separadas para ação simultânea (читая) e ação anterior (прочитав).',
        tabela: [
          { infinitivo: 'читать', они: 'читают', gerundio: 'читая' }, { infinitivo: 'говорить', они: 'говорят', gerundio: 'говоря' }, { infinitivo: 'слушать', они: 'слушают', gerundio: 'слушая' }, { infinitivo: 'гулять', они: 'гуляют', gerundio: 'гуляя' }, { infinitivo: 'сидеть', они: 'сидят', gerundio: 'сидя' }, { infinitivo: 'возвращаться', они: 'возвращаются', gerundio: 'возвращаясь' }, { infinitivo: 'вставать', они: 'встают', gerundio: 'вставая' },
        ],
        erros: [['Читая книгу, она позвонил. (outro sujeito)', 'Читая книгу, он пил чай.', 'O gerúndio e o verbo principal têm o MESMO sujeito.'], ['Он шёл читая газету.', 'Он шёл, читая газету.', 'O gerúndio vem entre vírgulas.'], ['Возвращаюсь домой, я купил хлеб.', 'Возвращаясь домой, я купил хлеб.', 'Gerúndio de «возвращаться»: возвращаясь.']],
      }),
      producao(5, 'Diga: «Я иду, слушая музыку. Он пьёт чай, читая газету. Она гуляет, говоря по телефону.»'),
    ]),
    sessao('S2', 'O gerúndio perfectivo: depois de', [
      revisao(5, 'Escreva o gerúndio imperfectivo de «читать», «слушать», «возвращаться» e «сидеть».'),
      palavras(8, [['прочитав', 'prachitáf', 'tendo lido', 'having read'], ['написав', 'napisáf', 'tendo escrito', 'having written'], ['сказав', 'skazáf', 'tendo dito', 'having said'], ['купив', 'kupíf', 'tendo comprado', 'having bought'], ['увидев', 'uvídif', 'tendo visto', 'having seen'], ['придя', 'pridyá', 'tendo chegado', 'having arrived'], ['вернувшись', 'virnúfshis', 'tendo voltado', 'having returned'], ['сначала', 'snachála', 'primeiro', 'at first']]),
      gramatica(12, 'Gerúndio perfectivo, passo a passo', 'PASSO 1: o gerúndio PERFECTIVO indica uma ação CONCLUÍDA ANTES da ação principal: «Прочитав письмо, он позвонил» (tendo lido a carta, ele ligou). PASSO 2: formação: do infinitivo perfectivo em «-ть», tire o «-ть» e junte «-в»: «прочитать → прочитав», «написать → написав», «сказать → сказав», «купить → купив», «увидеть → увидев». PASSO 3: verbos em «-ся» usam «-вшись»: «вернуться → вернувшись», «проснуться → проснувшись», «одеться → одевшись». PASSO 4: verbos de movimento em «-ти» são irregulares: «прийти → придя», «выйти → выйдя», «принести → принеся». PASSO 5: o gerúndio perfectivo não se usa com sujeitos diferentes. PASSO 6: compare: «Читая газету, он пил чай» (ao mesmo tempo) × «Прочитав газету, он пил чай» (primeiro leu, depois bebeu). PASSO 7: a negação usa «не» antes do gerúndio: «не зная», «не прочитав».', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'прочитать', gerundio: 'прочитав', exemplo: 'Прочитав письмо, он позвонил.' }, { infinitivo: 'написать', gerundio: 'написав', exemplo: 'Написав отчёт, я пошёл домой.' }, { infinitivo: 'купить', gerundio: 'купив', exemplo: 'Купив билет, она вошла.' }, { infinitivo: 'вернуться', gerundio: 'вернувшись', exemplo: 'Вернувшись домой, я лёг спать.' }, { infinitivo: 'прийти', gerundio: 'придя', exemplo: 'Придя домой, я позвонил маме.' }, { infinitivo: 'выйти', gerundio: 'выйдя', exemplo: 'Выйдя из дома, я взял зонт.' },
        ],
        erros: [['Прочитая письмо, он позвонил.', 'Прочитав письмо, он позвонил.', 'Perfectivo: «-в», não «-я».'], ['Вернувшися домой, я лёг.', 'Вернувшись домой, я лёг.', 'Verbo reflexivo: «-вшись».'], ['Придав домой, я позвонил.', 'Придя домой, я позвонил.', '«прийти» é irregular: придя.']],
      }),
      producao(5, 'Diga: «Прочитав письмо, я позвонил. Купив билет, она вошла. Придя домой, я лёг спать.»'),
    ]),
    sessao('S3', 'Usar o gerúndio em histórias', [
      revisao(5, 'Escreva 5 frases com gerúndios perfectivos de verbos diferentes.'),
      gramatica(10, 'Regras de uso e conversa', 'PASSO 1: o gerúndio liga ações do MESMO sujeito: «Возвращаясь с работы, я зашёл в магазин». PASSO 2: o sujeito do gerúndio é o mesmo da oração principal; se for outro, use uma oração com «когда» ou «пока». PASSO 3: o gerúndio pode vir no início, no meio ou no fim da frase, sempre entre vírgulas. PASSO 4: para a sequência de ações: «Купив подарок, пошёл домой». PASSO 5: para o modo: «Он вошёл, улыбаясь» (entrou sorrindo). PASSO 6: em fala cotidiana, as orações com «когда» são mais comuns; o gerúndio é típico de textos e de narração.', {
        tag: 'Frase',
        tabela: [
          { frase: 'Возвращаясь с работы, я зашёл в магазин.', traducao: 'Voltando do trabalho, passei na loja.' }, { frase: 'Купив подарок, я пошёл домой.', traducao: 'Tendo comprado o presente, fui para casa.' }, { frase: 'Он вошёл, улыбаясь.', traducao: 'Ele entrou sorrindo.' }, { frase: 'Когда он вернулся, я позвонил.', traducao: 'Quando ele voltou, eu liguei. (sujeitos diferentes)' },
        ],
      }),
      dialogo(8, 'Вчера вечером / Ontem à noite', 'Lena pergunta a Oleg o que ele fez ontem.', [
        ['Лена', 'Олег, где ты был вчера вечером?', 'Oleg, onde você estava ontem à noite?'], ['Олег', 'Возвращаясь с работы, я зашёл в магазин.', 'Voltando do trabalho, passei na loja.'], ['Лена', 'Что ты там делал?', 'O que você fazia lá?'],
        ['Олег', 'Выбирая подарок для мамы, я встретил Антона.', 'Escolhendo um presente para a mamãe, encontrei o Anton.'], ['Лена', 'Он, наверное, рассказывал новости, смеясь, как всегда.', 'Ele deve ter contado as novidades rindo, como sempre.'], ['Олег', 'Да, смеясь, он рассказал, что купил машину.', 'Sim, rindo, ele contou que comprou um carro.'],
        ['Лена', 'А ты, купив подарок, пошёл домой?', 'E você, tendo comprado o presente, foi para casa?'], ['Олег', 'Да, придя домой, я сразу позвонил маме.', 'Sim, ao chegar em casa, liguei logo para a mamãe.'],
      ]),
      producao(7, 'Conte em voz alta o seu dia de ontem com 4 gerúndios: dois imperfectivos e dois perfectivos.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com gerúndios.'),
      exercicios(20, [
        lacuna('Он шёл, ___ газету. (lendo)', ['читая', 'читав', 'читает'], 'читая', 'Imperfectivo: -я.'), lacuna('___ письмо, он позвонил. (tendo lido)', ['Прочитав', 'Читая', 'Прочитая'], 'Прочитав', 'Perfectivo: -в.'), lacuna('___ домой, я лёг спать. (tendo voltado)', ['Вернувшись', 'Вернувшися', 'Возвращаясь'], 'Вернувшись', 'Reflexivo perfectivo: -вшись.'),
        lacuna('___ домой, я позвонил маме. (tendo chegado)', ['Придя', 'Прийдя', 'Приходя'], 'Придя', '«прийти» → придя.'), lacuna('Она гуляет, ___ по телефону. (falando)', ['говоря', 'говорив', 'говорит'], 'говоря', 'говорят → говоря.'), lacuna('Он вошёл, ___. (sorrindo)', ['улыбаясь', 'улыбнувшись', 'улыбается'], 'улыбаясь', 'Simultâneo, reflexivo: -ясь.'),
        mc('O gerúndio liga ações do:', ['mesmo sujeito', 'sujeitos diferentes', 'qualquer sujeito'], 'mesmo sujeito', 'Mesmo sujeito.'), mc('O gerúndio perfectivo indica:', ['ação anterior concluída', 'ação simultânea', 'ação futura'], 'ação anterior concluída', 'Perfectivo = depois de.'), mc('O gerúndio vem:', ['entre vírgulas', 'sem vírgulas', 'só no fim'], 'entre vírgulas', 'Vírgulas obrigatórias.'),
        ordem('Ordene: «Возвращаясь с работы, я зашёл в магазин.»', ['Возвращаясь', 'с', 'работы', 'я', 'зашёл', 'в', 'магазин'], 'Возвращаясь с работы, я зашёл в магазин.', 'Gerúndio no começo.'), ouvir('Придя домой, я сразу позвонил маме', ['Придя домой, я сразу позвонил маме', 'Когда я пришёл домой, я позвонил', 'Идя домой, я позвонил'], 'Придя домой, я сразу позвонил маме', 'Perfectivo: придя.'), ditado('Купив билет, она вошла', 'Perfectivo: купив.'),
        livre('Escreva 5 frases com gerúndio: dois imperfectivos, dois perfectivos e um reflexivo.', 'Он шёл, читая газету. Она гуляет, слушая музыку. Прочитав письмо, я позвонил. Купив билет, она вошла. Вернувшись домой, я лёг спать.'),
      ]),
      producao(5, 'Grave-se contando como foi o seu dia, com gerúndios.'),
    ]),
  ],
});
