import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 43, titulo: 'Verbos reflexivos e recíprocos', nivel: 'a2',
  objetivo: 'Reconhecer e conjugar os verbos em -ся / -сь, distinguir o reflexivo, o recíproco e o intransitivo, usar «друг друга» e os pronomes «себя» e «сам».',
  nota: 'Você usa os verbos em -ся e «друг друга». Próxima aula: весь, сам, каждый, другой.',
  sessoes: [
    sessao('S1', 'Os verbos em -ся', [
      revisao(5, 'Escreva 5 frases sobre uma ligação: pedir alguém, deixar recado e despedir-se.'),
      palavras(8, [['учиться', 'uchítsya', 'estudar (numa escola)', 'to study'], ['мыться', 'mýtsya', 'lavar-se, tomar banho', 'to wash'], ['умываться', 'umyvátsya', 'lavar o rosto', 'to wash up'], ['одеваться', 'adivátsya', 'vestir-se', 'to get dressed'], ['встречаться', 'fstrichátsya', 'encontrar-se', 'to meet'], ['знакомиться', 'znakómitsya', 'conhecer alguém', 'to get acquainted'], ['находиться', 'nakhadítsya', 'ficar, estar situado', 'to be located'], ['начинаться', 'nachinátsya', 'começar (sozinho)', 'to begin']]),
      gramatica(12, 'O que o -ся faz com o verbo', 'PASSO 1: muitos verbos russos terminam em «-ся» (ou «-сь»): «учиться, мыться, встречаться». PASSO 2: conjugue o verbo normalmente e junte «-ся» depois de CONSOANTE e «-сь» depois de VOGAL: «я учусь» (vogal: -сь), «ты учишься», «он учится», «мы учимся», «вы учитесь», «они учатся» (consoante: -ся). PASSO 3: no passado: «он учился, она училась, оно училось, они учились». PASSO 4: o «-ся» tem três sentidos: REFLEXIVO (a ação volta a quem faz: «Я умываюсь»), RECÍPROCO (um ao outro: «Мы встречаемся»), e INTRANSITIVO (a coisa age sozinha: «Урок начинается», «Дверь открывается»). PASSO 5: verbos em «-ся» NÃO levam objeto direto: compare «Я учу русский» (ensino/estudo o russo, acusativo) e «Я учусь в университете» (estudo na universidade). PASSO 6: «Я учусь русскому языку» também existe (dativo): estudar como aluno.', {
        tag: 'Verbos',
        comparacao: 'o português usa «se» (me lavo, nos encontramos) separado do verbo. O russo cola o «-ся» no fim do verbo e ele nunca muda de lugar.',
        tabela: [
          { pronome: 'я', presente: 'учусь', passado: 'учился / училась' }, { pronome: 'ты', presente: 'учишься', passado: 'учился / училась' }, { pronome: 'он / она', presente: 'учится', passado: 'учился / училась' }, { pronome: 'мы', presente: 'учимся', passado: 'учились' }, { pronome: 'вы', presente: 'учитесь', passado: 'учились' }, { pronome: 'они', presente: 'учатся', passado: 'учились' },
        ],
        erros: [['Я учу в университете.', 'Я учусь в университете.', 'Sem objeto direto, use «учиться».'], ['Я умываю.', 'Я умываюсь.', 'A ação volta para mim: «умываться».'], ['Урок начинает в девять.', 'Урок начинается в девять.', 'A aula começa sozinha: «начинается».']],
      }),
      producao(5, 'Conjugue em voz alta «учиться» (я учусь … они учатся) e diga «Урок начинается в девять».'),
    ]),
    sessao('S2', 'Друг друга: um ao outro', [
      revisao(5, 'Escreva as seis formas de «встречаться» no presente.'),
      palavras(8, [['друг друга', 'druk drúga', 'um ao outro', 'each other'], ['вместе', 'vmyéste', 'juntos', 'together'], ['оба', 'óba', 'ambos', 'both'], ['пара', 'pára', 'casal, par', 'couple'], ['свидание', 'svidániye', 'encontro (amoroso)', 'date'], ['помогать друг другу', 'pamagát druk drugú', 'ajudar-se', 'to help each other'], ['дружить', 'druzhít', 'ser amigo', 'to be friends'], ['ссориться', 'ssórítsya', 'brigar', 'to quarrel']]),
      gramatica(12, '«Друг друга» muda de caso', 'PASSO 1: «друг друга» = «um ao outro». A primeira palavra não muda; a SEGUNDA recebe o caso que o verbo pede. PASSO 2: acusativo: «Они любят друг друга». PASSO 3: dativo: «Мы помогаем друг другу». PASSO 4: com preposição, a preposição fica entre as duas palavras: «Они говорят друг с другом» (instrumental), «Мы думаем друг о друге» (prepositivo), «Мы живём рядом друг с другом». PASSO 5: verbos recíprocos em «-ся» não levam «друг друга» quando o sentido já é de reciprocidade: «Мы часто видимся» (nos vemos).', {
        tag: 'Pronomes',
        tabela: [
          { caso: 'acusativo', frase: 'Они любят друг друга.' }, { caso: 'dativo', frase: 'Мы помогаем друг другу.' }, { caso: 'instrumental', frase: 'Они говорят друг с другом.' }, { caso: 'prepositivo', frase: 'Мы думаем друг о друге.' }, { caso: 'genitivo', frase: 'Они не знают друг друга.' },
        ],
        erros: [['Они любят друг друг.', 'Они любят друг друга.', 'Acusativo: «друга» (segunda palavra).'], ['Мы помогаем друг друга.', 'Мы помогаем друг другу.', '«помогать» pede dativo.']],
      }),
      producao(5, 'Diga: «Мы помогаем друг другу. Они любят друг друга. Мы часто звоним друг другу.»'),
    ]),
    sessao('S3', 'Себя e сам', [
      revisao(5, 'Escreva 5 frases com «друг друга» em casos diferentes.'),
      gramatica(10, 'Себя e сам', 'PASSO 1: «СЕБЯ» é o pronome reflexivo («a si mesmo»); não tem nominativo e muda de caso: acusativo/genitivo «себя», dativo «себе», instrumental «собой», prepositivo «(о) себе». PASSO 2: frases úteis: «Я чувствую себя хорошо», «Расскажи о себе», «Возьми с собой зонт» (leve consigo o guarda-chuva), «Он думает только о себе». PASSO 3: «САМ / САМА / САМО / САМИ» reforça quem faz: «Я сама приготовила обед» (eu mesma preparei o almoço). PASSO 4: «сам» concorda com o sujeito em gênero e número: «он сам», «она сама», «они сами».', {
        tag: 'Pronomes',
        tabela: [
          { frase: 'Я чувствую себя хорошо.', traducao: 'Estou me sentindo bem.' }, { frase: 'Расскажи о себе.', traducao: 'Fale de você.' }, { frase: 'Возьми с собой зонт.', traducao: 'Leve o guarda-chuva com você.' }, { frase: 'Я сама приготовила обед.', traducao: 'Eu mesma preparei o almoço.' }, { frase: 'Он сам сделал это.', traducao: 'Ele mesmo fez isso.' },
        ],
      }),
      dialogo(8, 'Знакомство / Conhecer alguém', 'Anna e Boris falam de como se conheceram.', [
        ['Анна', 'Борис, где вы познакомились с Ольгой?', 'Boris, onde você conheceu a Olga?'], ['Борис', 'Мы познакомились в университете. Мы учились вместе.', 'Nós nos conhecemos na universidade. Estudávamos juntos.'], ['Анна', 'Вы часто встречаетесь?', 'Vocês se encontram com frequência?'],
        ['Борис', 'Да, по субботам. Мы помогаем друг другу.', 'Sim, aos sábados. Nós nos ajudamos.'], ['Анна', 'А где вы обычно встречаетесь?', 'E onde vocês costumam se encontrar?'], ['Борис', 'В кафе рядом с метро. Оно находится недалеко от дома.', 'Num café perto do metrô. Fica perto de casa.'],
        ['Анна', 'Расскажи о себе. Чем ты занимаешься?', 'Fale de você. O que você faz?'], ['Борис', 'Я работаю инженером и сам готовлю обед.', 'Trabalho como engenheiro e eu mesmo preparo o almoço.'],
      ]),
      producao(7, 'Conte em voz alta como você conheceu um amigo: «Мы познакомились … Мы часто встречаемся … Мы помогаем друг другу.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre um amigo, com verbos em -ся.'),
      exercicios(20, [
        lacuna('Я ___ в университете. (estudo)', ['учусь', 'учу', 'учится'], 'учусь', '«учиться»: я учусь.'), lacuna('Урок ___ в девять. (começa)', ['начинается', 'начинает', 'начинаю'], 'начинается', 'A aula começa sozinha.'), lacuna('Они любят друг ___.', ['друга', 'другу', 'друге'], 'друга', 'Acusativo: друга.'),
        lacuna('Мы помогаем друг ___.', ['другу', 'друга', 'другом'], 'другу', '«помогать» + dativo.'), lacuna('Я чувствую ___ хорошо.', ['себя', 'себе', 'собой'], 'себя', '«чувствовать себя».'), lacuna('Она ___ приготовила обед. (ela mesma)', ['сама', 'сам', 'само'], 'сама', 'Concorda com «она».'),
        mc('A forma de «они» de «учиться» é:', ['учатся', 'учутся', 'учатсь'], 'учатся', '«-ся» depois de consoante.'), mc('«Мы встречаемся» tem sentido:', ['recíproco', 'passivo', 'futuro'], 'recíproco', 'Nós nos encontramos.'), mc('Em «Я учу русский» o objeto é:', ['direto (acusativo)', 'indireto', 'nenhum'], 'direto (acusativo)', 'Sem «-ся» há objeto direto.'),
        ordem('Ordene: «Мы помогаем друг другу.»', ['Мы', 'помогаем', 'друг', 'другу'], 'Мы помогаем друг другу.', '«друг другу» (dativo).'), ouvir('Они говорят друг с другом', ['Они говорят друг с другом', 'Они думают друг о друге', 'Они любят друг друга'], 'Они говорят друг с другом', '«с» + instrumental.'), ditado('Я учусь в университете', 'Sem objeto direto: учусь.'),
        livre('Escreva 5 frases com: учиться, встречаться, друг друга, себя e сам/сама.', 'Я учусь в университете. Мы часто встречаемся. Мы помогаем друг другу. Расскажи о себе. Я сама приготовила обед.'),
      ]),
      producao(5, 'Grave-se falando de você e de um amigo: como se conheceram e como se ajudam.'),
    ]),
  ],
});
