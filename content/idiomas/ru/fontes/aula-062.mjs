import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 62, titulo: 'O plural nos casos: genitivo, dativo, instrumental e prepositivo', nivel: 'b1',
  objetivo: 'Formar o plural nos casos oblíquos (столов, врачей, книг, окон; -ам/-ям, -ами/-ями, -ах/-ях) e conhecer os plurais irregulares mais usados (люди, дети, друзья).',
  nota: 'Você declina o plural em todos os casos. Próxima aula: forma curta do adjetivo e comparativos.',
  sessoes: [
    sessao('S1', 'O genitivo plural', [
      revisao(5, 'Escreva 5 frases com causa, consequência e concessão.'),
      palavras(8, [['студент', 'studyént', 'estudante', 'student'], ['девушка', 'dyévushka', 'moça', 'girl'], ['юноша', 'yúnasha', 'rapaz', 'youth'], ['неделя', 'nidyélya', 'semana', 'week'], ['станция', 'stántsiya', 'estação', 'station'], ['здание', 'zdániye', 'edifício', 'building'], ['слово', 'slóva', 'palavra', 'word'], ['музей', 'muzyéy', 'museu', 'museum']]),
      gramatica(12, 'Como formar o genitivo plural', 'PASSO 1: o GENITIVO PLURAL aparece depois de «много, мало, сколько, несколько, пять…» e de «нет»: «много студентов», «нет книг». PASSO 2: MASCULINO terminado em consoante dura: «-ОВ»: «стол → столов, студент → студентов». PASSO 3: masculino em «-ж, -ч, -ш, -щ» ou «-ь»: «-ЕЙ»: «врач → врачей, учитель → учителей, нож → ножей». PASSO 4: masculino em «-й»: «-ЕВ»: «музей → музеев». PASSO 5: FEMININO em «-а»: sem terminação (zero): «книга → книг, школа → школ»; entra uma vogal quando há dois consoantes: «девушка → девушек, сестра → сестёр». PASSO 6: feminino em «-я»: «-Ь»: «неделя → недель»; em «-ия»: «-ИЙ»: «станция → станций»; em «-ь»: «-ЕЙ»: «площадь → площадей». PASSO 7: NEUTRO em «-о»: zero: «окно → окон, слово → слов»; em «-е»: «-ЕЙ» ou «-ИЙ»: «море → морей, здание → зданий». PASSO 8: irregulares: «человек → людей» (pessoas) e «человек» depois de números; «друг → друзей», «ребёнок → детей», «год → лет», «день → дней».', {
        tag: 'Casos',
        tabela: [
          { genero: 'masculino duro', singular: 'стол, студент', genitivoPlural: 'столов, студентов' }, { genero: 'masculino em ж ч ш щ ь', singular: 'врач, учитель', genitivoPlural: 'врачей, учителей' }, { genero: 'masculino em -й', singular: 'музей', genitivoPlural: 'музеев' }, { genero: 'feminino em -а', singular: 'книга, школа, девушка', genitivoPlural: 'книг, школ, девушек' }, { genero: 'feminino em -я / -ия / -ь', singular: 'неделя, станция, площадь', genitivoPlural: 'недель, станций, площадей' }, { genero: 'neutro', singular: 'окно, слово, море, здание', genitivoPlural: 'окон, слов, морей, зданий' }, { genero: 'irregulares', singular: 'друг, ребёнок, человек, год, день', genitivoPlural: 'друзей, детей, людей, лет, дней' },
        ],
        erros: [['Много студенты.', 'Много студентов.', '«много» + genitivo plural.'], ['Нет книги.', 'Нет книг. (vários livros)', 'Para vários, o genitivo plural.'], ['Много человек пришло.', 'Много людей пришло.', '«людей» para pessoas em geral.']],
      }),
      producao(5, 'Diga: «У меня много друзей. В классе много девушек. Нет книг. Много недель. Много людей.»'),
    ]),
    sessao('S2', 'Dativo, instrumental e prepositivo no plural', [
      revisao(5, 'Escreva o genitivo plural de: врач, книга, окно, неделя, студент e друг.'),
      palavras(8, [['друг', 'druk', 'amigo', 'friend'], ['ребёнок', 'ribyónak', 'criança', 'child'], ['человек', 'chilavyék', 'pessoa', 'person'], ['преподаватель', 'prepadavátil', 'professor', 'teacher'], ['способный', 'spasóbny', 'capaz, talentoso', 'capable'], ['рад', 'rat', 'contente', 'glad'], ['доволен', 'davólen', 'satisfeito', 'satisfied'], ['занятие', 'zanyátiye', 'aula, atividade', 'class']]),
      gramatica(12, 'Os outros três casos do plural são regulares', 'PASSO 1: DATIVO plural: «-АМ / -ЯМ»: «студентам, друзьям, книгам». PASSO 2: INSTRUMENTAL plural: «-АМИ / -ЯМИ»: «студентами, друзьями, книгами». PASSO 3: PREPOSITIVO plural: «-АХ / -ЯХ»: «о студентах, о друзьях, о книгах». PASSO 4: as terminações são IGUAIS para os três gêneros: só é preciso escolher «а» ou «я» conforme o radical. PASSO 5: IRREGULARES: «люди → людям, людьми, о людях»; «дети → детям, детьми, о детях». PASSO 6: depois de «с», o instrumental plural: «с друзьями, с детьми»; depois de «о», o prepositivo: «о друзьях, о детях». PASSO 7: o adjetivo acompanha: «хорошим студентам» (dativo), «хорошими студентами» (instrumental), «о хороших студентах» (prepositivo).', {
        tag: 'Casos',
        tabela: [
          { singular: 'студент', dativo: 'студентам', instrumental: 'студентами', prepositivo: 'о студентах' }, { singular: 'книга', dativo: 'книгам', instrumental: 'книгами', prepositivo: 'о книгах' }, { singular: 'друг', dativo: 'друзьям', instrumental: 'друзьями', prepositivo: 'о друзьях' }, { singular: 'человек / люди', dativo: 'людям', instrumental: 'людьми', prepositivo: 'о людях' }, { singular: 'ребёнок / дети', dativo: 'детям', instrumental: 'детьми', prepositivo: 'о детях' },
        ],
        erros: [['Я иду с друзья.', 'Я иду с друзьями.', 'Depois de «с»: instrumental plural.'], ['Я говорю о друзья.', 'Я говорю о друзьях.', 'Depois de «о»: prepositivo plural.'], ['Я иду с людями.', 'Я иду с людьми.', 'Irregular: людьми.']],
      }),
      producao(5, 'Diga: «Я помогаю студентам. Я иду с друзьями. Я говорю о друзьях. Я играю с детьми. Я говорю о людях.»'),
    ]),
    sessao('S3', 'Conversa sobre pessoas', [
      revisao(5, 'Escreva 5 frases com instrumental plural depois de «с» e com prepositivo plural depois de «о».'),
      gramatica(10, 'Usar o plural na fala', 'PASSO 1: quantidade: «много студентов, мало девушек». PASSO 2: ajuda: «Я помогаю студентам». PASSO 3: companhia: «Я иду с друзьями». PASSO 4: assunto: «Я говорю о людях». PASSO 5: satisfação: «Преподаватели довольны студентами». PASSO 6: alegria: «Они рады способным людям» («рад» + dativo).', {
        tag: 'Frase',
        tabela: [
          { frase: 'Много студентов, мало юношей.', traducao: 'Muitos estudantes, poucos rapazes.' }, { frase: 'Я помогаю студентам.', traducao: 'Ajudo os estudantes.' }, { frase: 'Я иду с друзьями.', traducao: 'Vou com os amigos.' }, { frase: 'Преподаватели довольны студентами.', traducao: 'Os professores estão satisfeitos com os estudantes.' }, { frase: 'Они рады способным людям.', traducao: 'Eles ficam contentes com pessoas talentosas.' },
        ],
      }),
      dialogo(8, 'Студенты / Estudantes', 'Dois amigos falam do grupo da universidade.', [
        ['Аня', 'Паша, сколько студентов в вашей группе?', 'Pasha, quantos estudantes há no seu grupo?'], ['Паша', 'Двадцать студентов: много девушек и мало юношей.', 'Vinte estudantes: muitas moças e poucos rapazes.'], ['Аня', 'Ты помогаешь студентам с уроками?', 'Você ajuda os estudantes com as lições?'],
        ['Паша', 'Да, и я часто говорю с друзьями о занятиях.', 'Sim, e falo muitas vezes com os amigos sobre as aulas.'], ['Аня', 'А преподаватели довольны студентами?', 'E os professores estão satisfeitos com os estudantes?'], ['Паша', 'Очень. Они всегда рады способным людям.', 'Muito. Eles sempre ficam contentes com pessoas capazes.'],
        ['Аня', 'Приятно слышать о таких людях.', 'É bom ouvir falar de pessoas assim.'], ['Паша', 'Да, у нас уже много недель нет опозданий.', 'Sim, já faz muitas semanas que não há atrasos.'],
      ]),
      producao(7, 'Fale em voz alta do seu grupo de estudo ou de trabalho: quantos são, com quem fala, de quem fala e quem ajuda.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre pessoas, com o plural em casos diferentes.'),
      exercicios(20, [
        lacuna('Много ___. (estudantes)', ['студентов', 'студенты', 'студентам'], 'студентов', 'Genitivo plural masculino: -ов.'), lacuna('Нет ___. (livros)', ['книг', 'книги', 'книгам'], 'книг', 'Genitivo plural feminino em -а: zero.'), lacuna('Много ___. (semanas)', ['недель', 'недели', 'неделям'], 'недель', 'Feminino em -я: -ь.'),
        lacuna('Много ___. (pessoas)', ['людей', 'людям', 'людьми'], 'людей', 'Irregular.'), lacuna('Я помогаю ___. (estudantes)', ['студентам', 'студентов', 'студентами'], 'студентам', 'Dativo plural: -ам.'), lacuna('Я иду с ___. (amigos)', ['друзьями', 'друзей', 'друзьям'], 'друзьями', 'Instrumental plural.'),
        lacuna('Я говорю о ___. (amigos)', ['друзьях', 'друзьями', 'друзей'], 'друзьях', 'Prepositivo plural: -ях.'), lacuna('Я играю с ___. (crianças)', ['детьми', 'детям', 'детей'], 'детьми', 'Irregular.'), mc('Genitivo plural de «окно»:', ['окон', 'окна', 'окнов'], 'окон', 'Neutro em -о: zero.'),
        mc('Genitivo plural de «врач»:', ['врачей', 'врачов', 'врачи'], 'врачей', 'Masculino em -ч: -ей.'), ordem('Ordene: «Я иду с друзьями.»', ['Я', 'иду', 'с', 'друзьями'], 'Я иду с друзьями.', 'Instrumental plural.'), ouvir('Я говорю о друзьях', ['Я говорю о друзьях', 'Я говорю с друзьями', 'Я помогаю друзьям'], 'Я говорю о друзьях', 'Prepositivo plural.'),
        ditado('Они рады способным людям', '«рад» + dativo plural.'), livre('Escreva 5 frases com o plural em casos diferentes: genitivo, dativo, instrumental, prepositivo e um irregular.', 'У меня много друзей. Я помогаю студентам. Я иду с друзьями. Я говорю о людях. Я играю с детьми.'),
      ]),
      producao(5, 'Grave-se falando do seu grupo de amigos com o plural em casos diferentes.'),
    ]),
  ],
});
