import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 65, titulo: 'Pronomes indefinidos e negativos', nivel: 'b1',
  objetivo: 'Usar os pronomes e advérbios indefinidos (кто-то, что-нибудь, кое-что, где-то), os negativos (никто, ничего, нигде) com «не», e as construções «некому / нечего».',
  nota: 'Você fala de algo, alguém, nada e ninguém. Próxima aula: partículas do discurso.',
  sessoes: [
    sessao('S1', 'Indefinidos: кто-то, кто-нибудь, кое-кто', [
      revisao(5, 'Escreva 5 frases com numerais: dativo, genitivo, instrumental, coletivo e aproximação.'),
      palavras(8, [['кто-то', 'kto-ta', 'alguém (existe, não sei quem)', 'someone'], ['что-то', 'shto-ta', 'algo', 'something'], ['где-то', 'gdye-ta', 'em algum lugar', 'somewhere'], ['куда-то', 'kudá-ta', 'para algum lugar', 'to somewhere'], ['кто-нибудь', 'kto-nibut', 'alguém (qualquer)', 'anyone'], ['что-нибудь', 'shto-nibut', 'alguma coisa', 'anything'], ['кое-кто', 'kóye-kto', 'certa pessoa', 'someone (specific)'], ['кое-что', 'kóye-shto', 'certa coisa', 'something (specific)']]),
      gramatica(12, 'Três famílias de indefinidos', 'PASSO 1: junte «-ТО», «-НИБУДЬ» ou «КОЕ-» a «кто, что, какой, где, куда, когда, почему, как» para formar os INDEFINIDOS. PASSO 2: «-ТО» = existe, mas não sei qual ou quem (fato real): «Кто-то звонил» (alguém ligou), «Я что-то слышал», «Он где-то живёт». PASSO 3: «-НИБУДЬ» = qualquer um, ainda não definido (pergunta, futuro, imperativo): «Позвони кому-нибудь», «Ты что-нибудь знаешь?», «Купи что-нибудь поесть». PASSO 4: «КОЕ-» = alguém ou algo que eu conheço mas não digo: «Я кое-что нашёл» (achei uma coisa), «Кое-кто здесь знает». PASSO 5: declinam como «кто» e «что»: «кого-то, кому-то, кем-то, о ком-то», «чего-то, чему-то, чем-то, о чём-то». PASSO 6: a preposição vai no meio: «с кем-то», «о чём-нибудь», «у кого-то». PASSO 7: com «какой»: «какой-то человек» (certo homem), «какую-то записку» (acusativo).', {
        tag: 'Pronomes',
        tabela: [
          { sufixo: '-то (fato)', exemplo: 'Кто-то звонил. Я что-то слышал. Он где-то живёт.' }, { sufixo: '-нибудь (qualquer)', exemplo: 'Ты что-нибудь знаешь? Позвони кому-нибудь.' }, { sufixo: 'кое- (conhecido, não dito)', exemplo: 'Я кое-что нашёл. Кое-кто знает.' }, { sufixo: 'casos', exemplo: 'кого-то, кому-то, с кем-то, о чём-нибудь, у кого-то' },
        ],
        erros: [['Кто-нибудь звонил мне вчера.', 'Кто-то звонил мне вчера.', 'Fato real: «-то».'], ['Ты кто-то знаешь?', 'Ты кого-нибудь знаешь?', 'Pergunta: «-нибудь», com o caso certo.'], ['Я говорил с кто-то.', 'Я говорил с кем-то.', 'Depois de «с»: instrumental.']],
      }),
      producao(5, 'Diga: «Кто-то звонил. Я что-то слышал. Ты что-нибудь знаешь? Я кое-что нашёл. Он где-то живёт.»'),
    ]),
    sessao('S2', 'Negativos: никто, ничего, нигде', [
      revisao(5, 'Escreva 5 frases com «-то», «-нибудь» e «кое-».'),
      palavras(8, [['никто', 'nikto', 'ninguém', 'nobody'], ['ничто / ничего', 'nichtó / nichivó', 'nada', 'nothing'], ['никакой', 'nikakóy', 'nenhum', 'no (adj.)'], ['нигде', 'nigdyé', 'em lugar nenhum', 'nowhere'], ['никуда', 'nikudá', 'para lugar nenhum', 'nowhere (to)'], ['никогда', 'nikagdá', 'nunca', 'never'], ['ни … ни …', 'ni … ni …', 'nem … nem …', 'neither … nor'], ['некому / нечего', 'nyékamu / nyéchiva', 'não há a quem / o que', 'no one to / nothing to']]),
      gramatica(12, 'Dupla negação e «некому / нечего»', 'PASSO 1: os NEGATIVOS começam por «НИ-»: «никто, ничто, никакой, нигде, никуда, никогда, никак». PASSO 2: o russo exige DUPLA NEGAÇÃO: o verbo leva «НЕ» além do pronome negativo: «Никто не пришёл», «Я ничего не знаю», «Я нигде не был». PASSO 3: declinam como «кто» e «что» com «ни-» colado: «никого, никому, ни с кем, ни о ком»; «ничего, ничему, ничем, ни о чём». PASSO 4: a preposição separa o «ни»: «Я ни с кем не говорил» (não falei com ninguém). PASSO 5: «НИ … НИ …» = nem … nem: «Я не пью ни чай, ни кофе». PASSO 6: «НЕКОМУ / НЕЧЕГО / НЕГДЕ / НЕКУДА» = não há a quem, o que, onde, para onde: «Мне некому позвонить», «Мне нечего делать», «Мне некуда идти». PASSO 7: com «некому / нечего», o verbo vai ao infinitivo, e a pessoa vai ao dativo.', {
        tag: 'Pronomes',
        comparacao: 'o português também duplica a negação («não vi ninguém»). O russo faz o mesmo, sempre: «Я никого не видел».',
        tabela: [
          { negativo: 'никто → никого, никому, ни с кем', exemplo: 'Никто не пришёл. Я никого не видел. Я ни с кем не говорил.' }, { negativo: 'ничто → ничего, ничему, ничем', exemplo: 'Я ничего не знаю. Он ничем не интересуется.' }, { negativo: 'нигде / никуда / никогда', exemplo: 'Я нигде не был. Я никуда не иду. Я никогда не курю.' }, { negativo: 'ни … ни …', exemplo: 'Я не пью ни чай, ни кофе.' }, { negativo: 'некому / нечего / некуда', exemplo: 'Мне некому позвонить. Мне нечего делать. Мне некуда идти.' },
        ],
        erros: [['Никто пришёл.', 'Никто не пришёл.', 'Dupla negação obrigatória.'], ['Я видел никого.', 'Я никого не видел.', '«никого» antes de «не» + verbo.'], ['Я не пью ни чай ни кофе.', 'Я не пью ни чай, ни кофе.', 'Vírgula entre os dois «ни».']],
      }),
      producao(5, 'Diga: «Никто не пришёл. Я ничего не знаю. Я нигде не был. Я никуда не иду. Мне нечего делать.»'),
    ]),
    sessao('S3', 'Um mistério', [
      revisao(5, 'Escreva 5 frases com negativos e com «некому / нечего».'),
      gramatica(10, 'Contar o que se viu, ouviu e não viu', 'PASSO 1: para dizer que há algo, mas não se sabe o quê, use «что-то»: «Что-то случилось». PASSO 2: para perguntar sobre alguma coisa, use «что-нибудь»: «Ты что-нибудь слышал?». PASSO 3: para dizer que algo foi achado, use «кое-что»: «Я кое-что нашёл». PASSO 4: para negar totalmente, use «ничего не» e «никого не». PASSO 5: para dizer que não há a quem recorrer, use «некому»: «Мне некому позвонить».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Что-то случилось.', traducao: 'Algo aconteceu.' }, { frase: 'Ты что-нибудь слышал?', traducao: 'Você ouviu alguma coisa?' }, { frase: 'Я кое-что нашёл.', traducao: 'Achei uma coisa.' }, { frase: 'Я никого не видел и ничего не слышал.', traducao: 'Não vi ninguém e não ouvi nada.' }, { frase: 'Мне некому позвонить.', traducao: 'Não tenho a quem ligar.' },
        ],
      }),
      dialogo(8, 'Пропали ключи / As chaves sumiram', 'Anya e Pasha procuram as chaves do vizinho.', [
        ['Аня', 'Паша, кто-то звонил мне?', 'Pasha, alguém me ligou?'], ['Паша', 'Не знаю, я никого не видел.', 'Não sei, não vi ninguém.'], ['Аня', 'Может, ты что-нибудь слышал?', 'Talvez você tenha ouvido alguma coisa?'],
        ['Паша', 'Нет, ничего. Но я кое-что нашёл у двери.', 'Não, nada. Mas achei uma coisa perto da porta.'], ['Аня', 'Что ты нашёл?', 'O que você achou?'], ['Паша', 'Какую-то записку. В ней сказано: «Мне некому позвонить, и я нигде не нашёл ключи».', 'Um bilhete. Nele está escrito: «Não tenho a quem ligar e não achei as chaves em lugar nenhum».'],
        ['Аня', 'Кто-то потерял ключи? Хорошо, что мы нигде не оставили свои.', 'Alguém perdeu as chaves? Ainda bem que não deixamos as nossas em lugar nenhum.'], ['Паша', 'Давай поищем где-нибудь ещё. Может быть, кто-нибудь знает.', 'Vamos procurar em outro lugar. Talvez alguém saiba.'],
      ]),
      producao(7, 'Conte em voz alta um pequeno mistério: o que alguém fez, o que você viu e ouviu, e o que não encontrou.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre algo que você procurou e não achou.'),
      exercicios(20, [
        lacuna('___ звонил мне. (alguém, fato)', ['Кто-то', 'Кто-нибудь', 'Никто'], 'Кто-то', 'Fato real: «-то».'), lacuna('Ты ___ знаешь? (alguma coisa)', ['что-нибудь', 'что-то', 'ничего'], 'что-нибудь', 'Pergunta: «-нибудь».'), lacuna('Я ___ нашёл. (achei uma coisa)', ['кое-что', 'что-нибудь', 'ничего'], 'кое-что', 'Coisa conhecida e não dita.'),
        lacuna('Никто ___ пришёл.', ['не', 'ни', 'нет'], 'не', 'Dupla negação.'), lacuna('Я ___ не знаю. (nada)', ['ничего', 'что-то', 'ничто'], 'ничего', '«ничего не».'), lacuna('Я ___ не был. (em lugar nenhum)', ['нигде', 'где-то', 'никуда'], 'нигде', 'Onde? «нигде».'),
        lacuna('Я ни ___ не говорил. (com ninguém)', ['с кем', 'с кого', 'с кому'], 'с кем', 'Preposição + «ни» + caso.'), lacuna('Мне ___ позвонить. (a quem)', ['некому', 'никому', 'нечего'], 'некому', '«некому» + infinitivo.'), lacuna('Мне ___ делать. (o que)', ['нечего', 'некому', 'ничего'], 'нечего', '«нечего» + infinitivo.'),
        mc('A dupla negação em russo é:', ['obrigatória', 'opcional', 'proibida'], 'obrigatória', 'Sempre «не» + negativo.'), mc('«-нибудь» é usado em:', ['pergunta, imperativo, futuro', 'fato real', 'sempre'], 'pergunta, imperativo, futuro', 'Qualquer um.'), ordem('Ordene: «Я ничего не знаю.»', ['Я', 'ничего', 'не', 'знаю'], 'Я ничего не знаю.', 'Dupla negação.'),
        ouvir('Мне некому позвонить', ['Мне некому позвонить', 'Я никому не звонил', 'Я позвоню кому-нибудь'], 'Мне некому позвонить', '«некому».'), ditado('Я никого не видел', '«никого не».'), livre('Escreva 5 frases: «-то», «-нибудь», «кое-», um negativo com «не» e um com «некому / нечего».', 'Кто-то звонил. Ты что-нибудь знаешь? Я кое-что нашёл. Я ничего не знаю. Мне нечего делать.'),
      ]),
      producao(5, 'Grave-se contando o que você procurou, achou e não achou.'),
    ]),
  ],
});
