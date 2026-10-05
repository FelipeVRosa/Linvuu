import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 9, titulo: 'O que eu faço', nivel: 'a1',
  objetivo: 'Falar das suas atividades com verbos do dia a dia e usar o acusativo com «читать», «любить» e «смотреть».',
  nota: 'Você já fala do que faz e do que gosta. Próxima aula: números, preços e pedidos no café e no mercado.',
  sessoes: [
    sessao('S1', 'Verbos do dia a dia', [
      revisao(5, 'Escreva: Я живу в Бразилии. Я работаю в офисе. Мы живём в городе.'),
      palavras(12, [
        ['делать', 'diélat', 'fazer', 'to do'], ['читать', 'chitát', 'ler', 'to read'], ['слушать', 'slúshat', 'ouvir, escutar', 'to listen'], ['играть', 'igrát', 'jogar, tocar', 'to play'],
        ['понимать', 'panimát', 'entender', 'to understand'], ['отдыхать', 'atdykhát', 'descansar', 'to rest'], ['гулять', 'gulyát', 'passear, caminhar', 'to walk'], ['думать', 'dúmat', 'pensar', 'to think'],
        ['музыка', 'múzyka', 'música', 'music'], ['фильм', 'film', 'filme', 'film'], ['кино', 'kinó', 'cinema', 'cinema'], ['спорт', 'sport', 'esporte', 'sport'],
      ]),
      gramatica(8, 'O mesmo padrão: verbos em -ать', 'Os verbos em -ать seguem o padrão de «работать»: -ю, -ешь, -ет, -ем, -ете, -ют.', {
        tabela: [
          { pronome: 'я', делать: 'делаю', читать: 'читаю' }, { pronome: 'ты', делать: 'делаешь', читать: 'читаешь' }, { pronome: 'он / она', делать: 'делает', читать: 'читает' },
          { pronome: 'мы', делать: 'делаем', читать: 'читаем' }, { pronome: 'вы', делать: 'делаете', читать: 'читаете' }, { pronome: 'они', делать: 'делают', читать: 'читают' },
        ],
      }),
      producao(5, 'Diga: «Я читаю. Я слушаю. Я гуляю. Я отдыхаю.»'),
    ]),
    sessao('S2', 'O objeto: acusativo', [
      revisao(5, 'Escreva a conjugação de «делать» e de «читать».'),
      palavras(8, [
        ['любить', 'liubít', 'amar, gostar de', 'to love, to like'], ['смотреть', 'smatriét', 'assistir, olhar', 'to watch'], ['говорить', 'gavarít', 'falar', 'to speak'], ['кофе', 'kófie', 'café (bebida)', 'coffee'],
        ['вода', 'vadá', 'água', 'water'], ['хлеб', 'khliep', 'pão', 'bread'], ['суп', 'sup', 'sopa', 'soup'], ['молоко', 'malakó', 'leite', 'milk'],
      ]),
      gramatica(12, 'Acusativo: o objeto direto', 'O que você lê, ouve ou ama vai para o acusativo. Só mudam as palavras femininas em -а e -я: -а → -у, -я → -ю. Masculinos e neutros que não são pessoas ou animais não mudam. Pessoas e animais masculinos usam a forma do «нет»: Я люблю брата. Os verbos «любить», «смотреть» e «говорить» têm outro padrão: люблю, любишь, любит, любим, любите, любят.', {
        exemplos: [['Я люблю маму.', 'Eu amo a minha mãe.'], ['Я люблю брата.', 'Eu amo o meu irmão.'], ['Я смотрю кино.', 'Eu assisto a filmes.']],
        tabela: [
          { nominativo: 'книга', acusativo: 'книгу', exemplo: 'Я читаю книгу.' }, { nominativo: 'музыка', acusativo: 'музыку', exemplo: 'Я слушаю музыку.' }, { nominativo: 'вода', acusativo: 'воду', exemplo: 'Я люблю воду.' },
          { nominativo: 'машина', acusativo: 'машину', exemplo: 'Я люблю машину.' }, { nominativo: 'фильм', acusativo: 'фильм', exemplo: 'Я смотрю фильм.' }, { nominativo: 'кофе', acusativo: 'кофе', exemplo: 'Я люблю кофе.' },
          { nominativo: 'хлеб', acusativo: 'хлеб', exemplo: 'Я люблю хлеб.' }, { nominativo: 'молоко', acusativo: 'молоко', exemplo: 'Я люблю молоко.' },
        ],
      }),
      producao(5, 'Diga: «Я читаю книгу. Я слушаю музыку. Я люблю кофе.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases com «Я люблю …» usando objetos diferentes.'),
      dialogo(12, 'Что ты делаешь? / O que você está fazendo?', 'Dois amigos conversam por mensagem de voz.', [
        ['Аня', 'Привет! Что ты делаешь?', 'Oi! O que você está fazendo?'], ['Влад', 'Привет! Я читаю книгу. А ты?', 'Oi! Estou lendo um livro. E você?'], ['Аня', 'Я слушаю музыку и отдыхаю.', 'Estou ouvindo música e descansando.'],
        ['Влад', 'Ты любишь музыку?', 'Você gosta de música?'], ['Аня', 'Да, очень! А ты любишь кино?', 'Sim, muito! E você, gosta de cinema?'], ['Влад', 'Да, я люблю смотреть фильмы.', 'Sim, gosto de assistir a filmes.'],
        ['Аня', 'Отлично! Пока!', 'Ótimo! Tchau!'], ['Влад', 'Пока!', 'Tchau!'],
      ]),
      texto(8, 'Моя семья / Minha família', 'Меня зовут Оля. Я студентка. Я живу в Москве. Я люблю читать книги и слушать музыку. Мой брат любит смотреть фильмы. Мои родители работают в школе. Они учителя.',
        'Eu me chamo Olya. Sou estudante. Moro em Moscou. Gosto de ler livros e de ouvir música. Meu irmão gosta de assistir a filmes. Meus pais trabalham numa escola. Eles são professores.',
        [['Что любит Оля?', 'Читать книги и слушать музыку'], ['Где работают родители?', 'В школе'], ['Что любит брат?', 'Смотреть фильмы']]),
      producao(5, 'Repita o diálogo. Depois responda em voz alta: «Что ты делаешь? Ты любишь музыку?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases sobre o que você faz hoje.'),
      exercicios(20, [
        mc('Em «Я читаю книгу», por que «книгу»?', ['-а vira -у no acusativo', 'Porque é plural', 'Porque é masculino'], '-а vira -у no acusativo', 'Femininas em -а mudam para -у.'),
        lacuna('Я слушаю ___. (música)', ['музыка', 'музыку', 'музыки'], 'музыку', 'музыка → музыку.'),
        lacuna('Она ___ фильм. (assiste)', ['смотрит', 'смотрю', 'смотришь'], 'смотрит', 'она → -ит (padrão de «смотреть»).'),
        lacuna('Мы ___ русский язык. (estudamos)', ['изучаем', 'изучаю', 'изучают'], 'изучаем', 'мы → -ем.'),
        ouvir('Что ты делаешь?', ['Что ты делаешь?', 'Что это?', 'Кто это?'], 'Что ты делаешь?', '«делаешь» = você faz.'),
        ordem('Ordene: «Eu gosto de café.»', ['кофе', 'люблю', 'Я'], 'Я люблю кофе.', '«Кофе» não muda.'),
        mc('Acusativo de «вода»:', ['воду', 'воды', 'водой'], 'воду', '-а → -у.'),
        mc('Qual frase está correta?', ['Я люблю маму', 'Я люблю мама', 'Я люблю маме'], 'Я люблю маму', 'мама → маму.'),
        ditado('Я слушаю музыку', 'Verbo + acusativo.'),
        mc('«Они делают» significa:', ['Eles fazem', 'Eles dizem', 'Nós fazemos'], 'Eles fazem', 'они → -ют.'),
        ordem('Ordene: «Ela lê um livro.»', ['книгу', 'читает', 'Она'], 'Она читает книгу.', 'Sujeito + verbo + objeto.'),
        livre('Escreva 4 frases sobre o que você gosta de fazer, com «Я люблю…», «Я слушаю…» e «Я читаю…».', 'Я люблю кофе. Я слушаю музыку. Я читаю книгу. Я люблю кино.'),
      ]),
      producao(5, 'Grave-se: «Я … Я люблю … Я слушаю … Я читаю …»'),
    ]),
  ],
});
