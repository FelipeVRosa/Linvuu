import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 44, titulo: 'Весь, сам, каждый, другой', nivel: 'a2',
  objetivo: 'Usar весь / вся / всё / все, сам, каждый e другой nos casos mais comuns, para dizer «todo o dia», «cada semana», «outra cidade» e «eu mesmo».',
  nota: 'Você usa os pronomes determinativos mais comuns. Próxima aula: verbos de movimento com prefixo.',
  sessoes: [
    sessao('S1', 'Весь: todo, toda', [
      revisao(5, 'Escreva 5 frases com «друг друга», «себя» e «сам/сама».'),
      palavras(8, [['весь день', 'vyes dyen', 'o dia inteiro', 'all day'], ['всю неделю', 'fsyu nidyélyu', 'a semana inteira', 'all week'], ['всё время', 'fsyo vryémya', 'o tempo todo', 'all the time'], ['все люди', 'fsye lyúdi', 'todas as pessoas', 'everyone'], ['всё', 'fsyo', 'tudo', 'everything'], ['всегда', 'fsigdá', 'sempre', 'always'], ['везде', 'vizdyé', 'em todo lugar', 'everywhere'], ['целый', 'tsélyy', 'inteiro', 'whole']]),
      gramatica(12, 'Весь: forma e uso', 'PASSO 1: «ВЕСЬ» significa «todo, inteiro» e concorda com o substantivo: «весь» (m), «вся» (f), «всё» (n), «все» (plural). PASSO 2: no acusativo, só o feminino muda: «всю неделю, всю ночь»; os demais ficam iguais ao nominativo (para coisas): «весь день, всё утро». PASSO 3: o genitivo e o dativo seguem o modelo de «этот»: «всего», «всей», «всех»; «всему», «всей», «всем». PASSO 4: como pronome, «ВСЁ» = «tudo» («Всё хорошо») e «ВСЕ» = «todos» («Все студенты дома»); para pessoas no acusativo, «всех»: «Я знаю всех». PASSO 5: para o tempo, use o acusativo sem preposição: «Я работал весь день».', {
        tag: 'Pronomes',
        tabela: [
          { caso: 'nominativo', masculino: 'весь', feminino: 'вся', neutro: 'всё', plural: 'все' }, { caso: 'acusativo (coisas)', masculino: 'весь', feminino: 'всю', neutro: 'всё', plural: 'все' }, { caso: 'genitivo', masculino: 'всего', feminino: 'всей', neutro: 'всего', plural: 'всех' }, { caso: 'dativo', masculino: 'всему', feminino: 'всей', neutro: 'всему', plural: 'всем' },
        ],
        erros: [['Я работал всю день.', 'Я работал весь день.', '«день» é masculino: «весь».'], ['Все хорошо.', 'Всё хорошо.', 'Para «tudo» (neutro), escreva «всё».']],
      }),
      producao(5, 'Diga: «Я работал весь день. Она читала всю ночь. Всё хорошо. Все студенты дома.»'),
    ]),
    sessao('S2', 'Сам, каждый, другой', [
      revisao(5, 'Escreva a tabela de «весь» no nominativo e no acusativo.'),
      palavras(8, [['каждый день', 'kázhdyy dyen', 'todo dia', 'every day'], ['каждую неделю', 'kázhduyu nidyélyu', 'toda semana', 'every week'], ['каждое утро', 'kázhdaye útra', 'toda manhã', 'every morning'], ['другой', 'drugóy', 'outro', 'other'], ['другая', 'drugáya', 'outra', 'other (f)'], ['другие', 'drugíye', 'outros', 'others'], ['сам / сама', 'sam / samá', 'eu mesmo / mesma', 'myself'], ['любой', 'lyubóy', 'qualquer', 'any']]),
      gramatica(12, 'Каждый, другой e сам', 'PASSO 1: «КАЖДЫЙ» (cada) e «ДРУГОЙ» (outro) declinam como adjetivos: «каждый день, каждая неделя, каждое утро»; «другой город, другая квартира, другое место». PASSO 2: acusativo: o feminino muda («каждую неделю, другую квартиру»); o masculino inanimado e o neutro ficam iguais ao nominativo. PASSO 3: prepositivo: «в другом городе, в другой стране, в каждом доме». PASSO 4: plural: «другие люди», «другие города». PASSO 5: «САМ, САМА, САМО, САМИ» reforça o sujeito: «Я сам это сделал», «Она сама это знает». PASSO 6: «ЛЮБОЙ» = «qualquer», declina como adjetivo: «в любой день».', {
        tag: 'Pronomes',
        tabela: [
          { frase: 'Я читаю каждый день.', traducao: 'Leio todo dia.' }, { frase: 'Она звонит каждую неделю.', traducao: 'Ela liga toda semana.' }, { frase: 'Я хочу другой город.', traducao: 'Quero outra cidade (masc.).' }, { frase: 'Мы живём в другой стране.', traducao: 'Vivemos em outro país.' }, { frase: 'Я сам это сделал.', traducao: 'Eu mesmo fiz isso.' }, { frase: 'Приходи в любой день.', traducao: 'Venha em qualquer dia.' },
        ],
        erros: [['Я звоню каждая неделя.', 'Я звоню каждую неделю.', 'Acusativo feminino: -ую.'], ['Мы живём в другая страна.', 'Мы живём в другой стране.', 'Prepositivo feminino: -ой.']],
      }),
      producao(5, 'Diga: «Я учу русский каждый день. Я живу в другой стране. Я сам готовлю обед.»'),
    ]),
    sessao('S3', 'Весь день дома', [
      revisao(5, 'Escreva 5 frases com «каждый», «другой» e «сам».'),
      gramatica(10, 'Usar os pronomes numa conversa', 'PASSO 1: para o tempo todo, use «весь день, всю неделю, всё утро». PASSO 2: para a repetição, «каждый день, каждое утро». PASSO 3: para a alternativa, «другой фильм, другое место, другую куртку». PASSO 4: para a ênfase, «Я сам куплю билеты». PASSO 5: para a totalidade, «все мои друзья», «всё готово».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Я весь день дома.', traducao: 'Fico em casa o dia inteiro.' }, { frase: 'Каждое утро я гуляю.', traducao: 'Toda manhã passeio.' }, { frase: 'Давай купим другой билет.', traducao: 'Vamos comprar outro bilhete.' }, { frase: 'Все мои друзья здесь.', traducao: 'Todos os meus amigos estão aqui.' },
        ],
      }),
      dialogo(8, 'Весь день дома / O dia todo em casa', 'Dois amigos combinam de sair.', [
        ['Аня', 'Привет! Где ты был весь день?', 'Oi! Onde você esteve o dia todo?'], ['Паша', 'Я работал дома всё утро, а потом гулял.', 'Trabalhei em casa a manhã toda e depois passeei.'], ['Аня', 'Каждый день дома? Давай пойдём в другое место, в кино!', 'Todo dia em casa? Vamos a outro lugar, ao cinema!'],
        ['Паша', 'Хорошо. Все мои друзья уже видели этот фильм.', 'Está bem. Todos os meus amigos já viram este filme.'], ['Аня', 'Я сама ещё не видела. Давай купим билеты на другой фильм?', 'Eu mesma ainda não vi. Vamos comprar bilhetes para outro filme?'], ['Паша', 'Давай. Я сам куплю билеты.', 'Vamos. Eu mesmo compro os bilhetes.'],
        ['Аня', 'Отлично! Всё готово. Встретимся в шесть.', 'Ótimo! Tudo pronto. Nos encontramos às seis.'], ['Паша', 'Договорились!', 'Combinado!'],
      ]),
      producao(7, 'Conte em voz alta o seu dia: o que faz o dia todo, o que faz todo dia e o que gostaria de fazer em outro lugar.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre a sua semana.'),
      exercicios(20, [
        lacuna('Я работал ___ день.', ['весь', 'вся', 'всё'], 'весь', '«день» é masculino.'), lacuna('Она читала ___ ночь.', ['всю', 'вся', 'весь'], 'всю', 'Acusativo feminino: всю.'), lacuna('___ хорошо. (tudo)', ['Всё', 'Все', 'Весь'], 'Всё', '«tudo»: всё.'),
        lacuna('Я знаю ___. (todos)', ['всех', 'все', 'всего'], 'всех', 'Acusativo de pessoas no plural: всех.'), lacuna('Я звоню ___ неделю. (toda)', ['каждую', 'каждая', 'каждый'], 'каждую', 'Acusativo feminino: -ую.'), lacuna('Мы живём в ___ стране. (outro)', ['другой', 'другая', 'другую'], 'другой', 'Prepositivo feminino: -ой.'),
        mc('«Я сам это сделал» enfatiza:', ['quem fez', 'quando fez', 'onde fez'], 'quem fez', '«сам» reforça o sujeito.'), mc('«Любой» significa:', ['qualquer', 'todo', 'outro'], 'qualquer', 'Любой = qualquer.'), mc('«Все студенты дома» usa:', ['все (plural)', 'всё (neutro)', 'весь (masculino)'], 'все (plural)', 'Plural: все.'),
        ordem('Ordene: «Я работал весь день.»', ['Я', 'работал', 'весь', 'день'], 'Я работал весь день.', '«весь день» (acusativo).'), ouvir('Каждое утро я гуляю', ['Каждое утро я гуляю', 'Каждый день я гуляю', 'Всё утро я гуляю'], 'Каждое утро я гуляю', '«утро» é neutro: каждое.'), ditado('Все мои друзья здесь', 'Plural: все.'),
        livre('Escreva 5 frases: com весь, всё, каждый, другой e сам/сама.', 'Я работаю весь день. Всё хорошо. Каждое утро я гуляю. Я живу в другой стране. Я сама готовлю обед.'),
      ]),
      producao(5, 'Grave-se contando o seu dia com «весь», «каждый» e «сам».'),
    ]),
  ],
});
