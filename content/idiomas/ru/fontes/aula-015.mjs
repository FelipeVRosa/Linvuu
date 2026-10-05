import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 15, titulo: 'Gramática: as duas conjugações', nivel: 'a1',
  objetivo: 'Reconhecer a 1ª e a 2ª conjugação, conjugar os verbos no presente sem errar as terminações e conhecer os verbos irregulares mais usados.',
  nota: 'Você sabe conjugar qualquer verbo regular e os seis irregulares mais usados. Próxima aula: «в» e «на».',
  sessoes: [
    sessao('S1', 'O que é conjugar', [
      revisao(5, 'Escreva as 6 formas de «работать» e de «читать» de memória.'),
      gramatica(12, 'Conjugar: as duas conjugações do presente', 'Conjugar é mudar o final do verbo para mostrar QUEM faz a ação: eu falo, tu falas, ele fala. Em português há três grupos (-ar, -er, -ir). O presente russo tem só DUAS conjugações, e cada uma tem as suas terminações. Passo a passo: (1) tire o -ть do infinitivo para achar a raiz; (2) descubra a conjugação do verbo; (3) acrescente as seis terminações. 1ª conjugação: -ю, -ешь, -ет, -ем, -ете, -ют (depois de consoante, -у e -ут). 2ª conjugação: -ю, -ишь, -ит, -им, -ите, -ят (depois de ж, ч, ш, щ, -у e -ат). A diferença está na vogal: е na 1ª, и na 2ª.', {
        tag: 'Verbos',
        comparacao: 'o infinitivo português já mostra o grupo (-ar, -er, -ir). O infinitivo russo -ть sozinho não basta: o grupo precisa ser aprendido junto com o verbo; a sessão seguinte dá as regras práticas.',
        tabelas: [
          { titulo: 'As terminações', linhas: [
            { pronome: 'я', conj1: '-ю / -у', conj2: '-ю / -у' }, { pronome: 'ты', conj1: '-ешь', conj2: '-ишь' }, { pronome: 'он / она', conj1: '-ет', conj2: '-ит' },
            { pronome: 'мы', conj1: '-ем', conj2: '-им' }, { pronome: 'вы', conj1: '-ете', conj2: '-ите' }, { pronome: 'они', conj1: '-ют / -ут', conj2: '-ят / -ат' },
          ] },
          { titulo: 'Um exemplo de cada', linhas: [
            { pronome: 'я', conj1: 'читаю', conj2: 'говорю' }, { pronome: 'ты', conj1: 'читаешь', conj2: 'говоришь' }, { pronome: 'он / она', conj1: 'читает', conj2: 'говорит' },
            { pronome: 'мы', conj1: 'читаем', conj2: 'говорим' }, { pronome: 'вы', conj1: 'читаете', conj2: 'говорите' }, { pronome: 'они', conj1: 'читают', conj2: 'говорят' },
          ] },
        ],
        erros: [['Мы говорем.', 'Мы говорим.', '«говорить» é da 2ª conjugação: -им.'], ['Ты читаишь.', 'Ты читаешь.', '«читать» é da 1ª conjugação: -ешь.']],
      }),
      palavras(8, [
        ['танцевать', 'tantsevát', 'dançar', 'to dance'], ['рисовать', 'risavát', 'desenhar', 'to draw'], ['путешествовать', 'putishéstvavat', 'viajar', 'to travel'], ['видеть', 'vídit', 'ver', 'to see'],
        ['слышать', 'slýshat', 'ouvir (perceber o som)', 'to hear'], ['просить', 'prasít', 'pedir', 'to ask for'], ['платить', 'platít', 'pagar', 'to pay'], ['ходить', 'khadít', 'andar, ir (habitual)', 'to walk, to go'],
      ]),
      producao(5, 'Conjugue em voz alta, de memória, «танцевать» (1ª conjugação) e «видеть» (2ª): as seis formas de cada.'),
    ]),
    sessao('S2', 'Como saber a conjugação', [
      revisao(5, 'Escreva as terminações da 1ª e da 2ª conjugação lado a lado.'),
      gramatica(12, 'Como reconhecer a conjugação pelo infinitivo', 'Regras práticas: verbos em -ить são da 2ª conjugação (говорить, любить, платить). Verbos em -еть são quase todos da 2ª (смотреть, видеть, сидеть), com exceções como «уметь» (умею) e «хотеть» (misto). Verbos em -ать e -ять são quase todos da 1ª (читать, делать, гулять), menos poucas exceções da 2ª: слышать, держать, дышать, лежать, стоять. Verbos em -овать e -евать são da 1ª e trocam por -ую (рисовать → рисую). Verbos em -авать são da 1ª (вставать → встаю). Na 2ª conjugação, algumas consoantes mudam SÓ na forma «я»: б → бл (любить → люблю), в → вл (готовить → готовлю), д → ж (видеть → вижу), т → ч (платить → плачу), с → ш (просить → прошу). As outras formas ficam normais: любишь, видишь.', {
        tag: 'Verbos',
        tabelas: [
          { titulo: 'Infinitivo → conjugação', linhas: [
            { terminacao: '-ать, -ять', conjugacao: '1ª', exemplo: 'читать, делать, гулять, работать' }, { terminacao: '-овать, -евать', conjugacao: '1ª (-ую)', exemplo: 'рисовать → рисую, танцевать → танцую' },
            { terminacao: '-авать', conjugacao: '1ª (-аю)', exemplo: 'вставать → встаю' }, { terminacao: '-ить', conjugacao: '2ª', exemplo: 'говорить, любить, платить, просить' },
            { terminacao: '-еть', conjugacao: '2ª', exemplo: 'смотреть, видеть, сидеть (exceção: уметь, хотеть)' }, { terminacao: 'exceções em -ать/-ять', conjugacao: '2ª', exemplo: 'слышать, держать, дышать, лежать, стоять' },
          ] },
          { titulo: 'Mudança da consoante só na forma «я» (2ª conjugação)', linhas: [
            { troca: 'б → бл', exemplo: 'любить → я люблю, ты любишь' }, { troca: 'в → вл', exemplo: 'готовить → я готовлю, ты готовишь' }, { troca: 'д → ж', exemplo: 'видеть → я вижу, ты видишь; ходить → я хожу, ты ходишь' },
            { troca: 'т → ч', exemplo: 'платить → я плачу, ты платишь' }, { troca: 'с → ш', exemplo: 'просить → я прошу, ты просишь' },
          ] },
        ],
        erros: [['Я любю.', 'Я люблю.', 'Na 2ª conjugação, б vira бл na forma «я».'], ['Я видю.', 'Я вижу.', 'д vira ж na forma «я».']],
      }),
      palavras(8, [
        ['пить', 'pit', 'beber', 'to drink'], ['есть (comer)', 'yest', 'comer (diferente de «есть» = há)', 'to eat'], ['мочь', 'moch', 'poder', 'can'], ['спать', 'spat', 'dormir', 'to sleep'],
        ['уметь', 'umiét', 'saber (fazer algo)', 'to know how'], ['помнить', 'pómnit', 'lembrar', 'to remember'], ['сидеть', 'sidiét', 'estar sentado', 'to sit'], ['лежать', 'lezhát', 'estar deitado', 'to lie'],
      ]),
      producao(5, 'Diga em voz alta: «Я люблю. Я вижу. Я хожу. Я плачу. Я прошу.» e as seis formas de «любить».'),
    ]),
    sessao('S3', 'Os irregulares mais usados', [
      revisao(5, 'Escreva as 6 formas de «видеть» e de «просить».'),
      gramatica(10, 'Os verbos irregulares que você mais vai usar', 'Poucos verbos fogem da regra, mas aparecem todo dia. Decore estas formas. Atenção: o verbo «есть» (comer) é diferente do «есть» de «У меня есть» (há, existe): «Я ем суп» × «У меня есть суп». «Идти» e «хотеть» já apareceram em aulas anteriores.', {
        tag: 'Verbos',
        tabela: [
          { pronome: 'я', пить: 'пью', есть: 'ем', мочь: 'могу', спать: 'сплю' }, { pronome: 'ты', пить: 'пьёшь', есть: 'ешь', мочь: 'можешь', спать: 'спишь' }, { pronome: 'он / она', пить: 'пьёт', есть: 'ест', мочь: 'может', спать: 'спит' },
          { pronome: 'мы', пить: 'пьём', есть: 'едим', мочь: 'можем', спать: 'спим' }, { pronome: 'вы', пить: 'пьёте', есть: 'едите', мочь: 'можете', спать: 'спите' }, { pronome: 'они', пить: 'пьют', есть: 'едят', мочь: 'могут', спать: 'спят' },
        ],
      }),
      dialogo(10, 'Что ты пьёшь? / O que você bebe?', 'Dois amigos conversam por mensagem de voz.', [
        ['Лена', 'Привет, Макс! Что ты пьёшь?', 'Oi, Max! O que você está bebendo?'], ['Макс', 'Я пью чай. А ты?', 'Estou bebendo chá. E você?'], ['Лена', 'Я пью кофе. Ты ешь утром?', 'Eu bebo café. Você come de manhã?'],
        ['Макс', 'Нет, утром я не ем. Я пью чай.', 'Não, de manhã eu não como. Eu bebo chá.'], ['Лена', 'Ты можешь работать вечером?', 'Você pode trabalhar à noite?'], ['Макс', 'Да, могу. Вечером я дома.', 'Posso, sim. À noite estou em casa.'],
        ['Лена', 'Отлично! Пока!', 'Ótimo! Tchau!'], ['Макс', 'Пока!', 'Tchau!'],
      ]),
      producao(5, 'Diga: «Я пью воду. Я не ем утром. Я могу работать. Я сплю поздно.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Conjugue de memória: «пить», «мочь» e «спать».'),
      exercicios(20, [
        mc('A conjugação de «читать» é:', ['1ª', '2ª', 'irregular'], '1ª', 'Verbos em -ать são da 1ª conjugação.'),
        mc('A conjugação de «говорить» é:', ['2ª', '1ª', 'irregular'], '2ª', 'Verbos em -ить são da 2ª conjugação.'),
        lacuna('Ты ___ книгу. (читать)', ['читаешь', 'читаишь', 'читает'], 'читаешь', '1ª conjugação: ты → -ешь.'),
        lacuna('Он ___ быстро. (говорить)', ['говорит', 'говорет', 'говорить'], 'говорит', '2ª conjugação: он → -ит.'),
        lacuna('Мы ___ в кафе. (сидеть)', ['сидим', 'сидем', 'сидят'], 'сидим', '2ª conjugação: мы → -им.'),
        lacuna('Я ___ музыку. (любить)', ['люблю', 'любю', 'любить'], 'люблю', 'б vira бл na forma «я».'),
        lacuna('Я ___ фильм. (видеть)', ['вижу', 'видю', 'видеть'], 'вижу', 'д vira ж na forma «я».'),
        lacuna('Они ___ воду. (пить)', ['пьют', 'пьёт', 'пьёшь'], 'пьют', 'пить é irregular: они → пьют.'),
        mc('«Слышать» é da 2ª conjugação porque:', ['é uma das exceções em -ать', 'termina em -ать', 'é irregular'], 'é uma das exceções em -ать', 'Exceções da 2ª em -ать: слышать, держать, дышать, лежать, стоять.'),
        lacuna('Я ___ работать вечером. (мочь)', ['могу', 'можу', 'мога'], 'могу', 'мочь é irregular: я → могу.'),
        ouvir('Что ты пьёшь?', ['Что ты пьёшь?', 'Что ты ешь?', 'Что ты видишь?'], 'Что ты пьёшь?', '«пьёшь» = você bebe.'),
        ditado('Я не ем утром', 'есть (comer): я ем.'),
        ordem('Ordene: «Eu bebo chá.»', ['чай', 'пью', 'Я'], 'Я пью чай.', 'Sujeito + verbo + objeto.'),
        mc('«Есть» em «Я ем суп» e em «У меня есть суп» é:', ['duas palavras diferentes: comer (ем) × há (есть)', 'a mesma palavra', 'o mesmo significado'], 'duas palavras diferentes: comer (ем) × há (есть)', 'Comer: ем, ешь, ест... Há: есть, sempre igual.'),
        livre('Conjugue «любить» e «читать» (6 formas cada) e escreva 2 frases.', 'Я люблю, ты любишь, он любит, мы любим, вы любите, они любят. Я читаю, ты читаешь, он читает, мы читаем, вы читаете, они читают.'),
      ]),
      producao(5, 'Grave-se conjugando 5 verbos de memória, com as seis formas.'),
    ]),
  ],
});
