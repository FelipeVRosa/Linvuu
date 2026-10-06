import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 41, titulo: 'Tempo livre e hobbies', nivel: 'a2',
  objetivo: 'Falar dos seus hobbies com увлекаться e заниматься (instrumental), distinguir играть в e играть на, dizer a frequência e fazer, aceitar ou recusar um convite.',
  nota: 'Você fala dos seus hobbies e convida um amigo. Próxima aula: telefone, mensagens e e-mails.',
  sessoes: [
    sessao('S1', 'Hobbies e esportes', [
      revisao(5, 'Escreva 5 frases sobre o tempo de amanhã com «если».'),
      palavras(8, [['хобби', 'khóbi', 'hobby', 'hobby'], ['спорт', 'sport', 'esporte', 'sport'], ['музыка', 'múzika', 'música', 'music'], ['фильм', 'film', 'filme', 'film'], ['книга', 'kníga', 'livro', 'book'], ['шахматы', 'shákhmaty', 'xadrez', 'chess'], ['гитара', 'gitára', 'violão, guitarra', 'guitar'], ['танцы', 'tántsy', 'dança', 'dancing']]),
      gramatica(12, 'Увлекаться, заниматься e играть', 'PASSO 1: para dizer que um hobby é a sua paixão, use «УВЛЕКАТЬСЯ» + INSTRUMENTAL: «Я увлекаюсь музыкой» (sou apaixonado por música). PASSO 2: para praticar uma atividade, use «ЗАНИМАТЬСЯ» + instrumental: «Я занимаюсь спортом», «Она занимается танцами». PASSO 3: o instrumental de «спорт» é «спортом», de «музыка» é «музыкой», de «танцы» (plural) é «танцами». PASSO 4: «ИГРАТЬ В» + ACUSATIVO é para jogos e esportes: «играть в футбол, в шахматы». PASSO 5: «ИГРАТЬ НА» + PREPOSITIVO é para instrumentos: «играть на гитаре, на пианино». PASSO 6: «ЛЮБИТЬ» + infinitivo ou acusativo: «Я люблю читать», «Я люблю музыку».', {
        tag: 'Casos',
        tabela: [
          { frase: 'Я увлекаюсь музыкой.', traducao: 'Sou apaixonado por música.' }, { frase: 'Он занимается спортом.', traducao: 'Ele pratica esporte.' }, { frase: 'Мы играем в футбол.', traducao: 'Jogamos futebol.' }, { frase: 'Она играет в шахматы.', traducao: 'Ela joga xadrez.' }, { frase: 'Я играю на гитаре.', traducao: 'Toco violão.' }, { frase: 'Я люблю читать.', traducao: 'Gosto de ler.' },
        ],
        erros: [['Я играю гитару.', 'Я играю на гитаре.', 'Instrumento: «на» + prepositivo.'], ['Он играет на футбол.', 'Он играет в футбол.', 'Jogo ou esporte: «в» + acusativo.'], ['Я увлекаюсь музыка.', 'Я увлекаюсь музыкой.', '«увлекаться» + instrumental.']],
      }),
      producao(5, 'Fale dos seus hobbies: «Я увлекаюсь … Я занимаюсь … Я играю в … Я играю на …»'),
    ]),
    sessao('S2', 'Frequência e convites', [
      revisao(5, 'Escreva 5 frases sobre os seus hobbies.'),
      palavras(8, [['каждый день', 'kázhdyy dyen', 'todo dia', 'every day'], ['по выходным', 'pa vykhadným', 'nos fins de semana', 'at weekends'], ['часто', 'chásta', 'com frequência', 'often'], ['иногда', 'inagdá', 'às vezes', 'sometimes'], ['редко', 'ryétka', 'raramente', 'rarely'], ['никогда не', 'nikagdá nye', 'nunca', 'never'], ['с удовольствием', 's udavólstviyem', 'com prazer', 'with pleasure'], ['к сожалению', 'k sazhalyéniyu', 'infelizmente', 'unfortunately']]),
      gramatica(12, 'Convidar, aceitar e recusar', 'PASSO 1: a frequência vai antes ou depois do verbo: «Я часто хожу в кино», «Я иногда играю в футбол», «Я никогда не курю» (com «никогда», o «не» é obrigatório). PASSO 2: para convidar: «Хочешь пойти в кино?», «Давай пойдём в театр!», «Пойдём гулять?». PASSO 3: para aceitar: «С удовольствием!», «Хорошо!», «Давай!». PASSO 4: para recusar com educação: «К сожалению, не могу», «Я занят(а)» (estou ocupado). PASSO 5: combine o dia: «в субботу», «по выходным», «в воскресенье». PASSO 6: «ходить» (hábito) × «идти» (agora): «Я хожу в кино по субботам», «Я иду в кино сейчас».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Хочешь пойти в кино?', traducao: 'Quer ir ao cinema?' }, { frase: 'Давай пойдём в театр!', traducao: 'Vamos ao teatro!' }, { frase: 'С удовольствием!', traducao: 'Com prazer!' }, { frase: 'К сожалению, не могу. Я занят.', traducao: 'Infelizmente não posso. Estou ocupado.' }, { frase: 'Я никогда не курю.', traducao: 'Eu nunca fumo.' }, { frase: 'По выходным я хожу в парк.', traducao: 'Nos fins de semana vou ao parque.' },
        ],
        erros: [['Я никогда курю.', 'Я никогда не курю.', 'Com «никогда», o «не» é obrigatório (dupla negação).'], ['Пойдём в кино по субботу.', 'Пойдём в кино в субботу.', '«в субботу» (um dia); «по субботам» (todos os sábados).']],
      }),
      producao(5, 'Convide um amigo e responda: «Хочешь пойти в кино? — С удовольствием! / К сожалению, не могу.»'),
    ]),
    sessao('S3', 'O que você faz no fim de semana?', [
      revisao(5, 'Escreva um convite e uma resposta (aceitando e recusando).'),
      gramatica(10, 'Contar o fim de semana', 'PASSO 1: use o passado para contar: «В субботу я ходил в кино» (homem), «ходила» (mulher). PASSO 2: use o futuro com «буду» ou o perfectivo: «В воскресенье я буду отдыхать», «В субботу я пойду в парк». PASSO 3: para opinião: «Мне понравился фильм» (o filme me agradou). PASSO 4: para comparar: «Мне больше нравится футбол, чем шахматы». PASSO 5: para o gosto: «Я люблю» + infinitivo, «Мне нравится» + nominativo.', {
        tag: 'Frase',
        tabela: [
          { frase: 'В субботу я ходил в кино.', traducao: 'No sábado fui ao cinema.' }, { frase: 'В воскресенье я буду отдыхать.', traducao: 'No domingo vou descansar.' }, { frase: 'Мне понравился фильм.', traducao: 'Gostei do filme.' }, { frase: 'Мне больше нравится футбол, чем шахматы.', traducao: 'Gosto mais de futebol do que de xadrez.' },
        ],
      }),
      dialogo(8, 'Что ты делаешь на выходных? / O que você faz no fim de semana?', 'Dois amigos falam do fim de semana.', [
        ['Маша', 'Влад, что ты делаешь на выходных?', 'Vlad, o que você faz no fim de semana?'], ['Влад', 'В субботу я играю в футбол, а в воскресенье отдыхаю. А ты?', 'No sábado jogo futebol e no domingo descanso. E você?'], ['Маша', 'Я увлекаюсь танцами. По субботам я хожу на занятия.', 'Sou apaixonada por dança. Aos sábados vou às aulas.'],
        ['Влад', 'Интересно! А ты играешь на гитаре?', 'Interessante! E você toca violão?'], ['Маша', 'Нет, но я люблю слушать музыку. Хочешь пойти в воскресенье в кино?', 'Não, mas gosto de ouvir música. Quer ir ao cinema no domingo?'], ['Влад', 'С удовольствием! Какой фильм?', 'Com prazer! Que filme?'],
        ['Маша', 'Новый русский фильм. Мне говорили, что он очень хороший.', 'Um filme russo novo. Disseram-me que é muito bom.'], ['Влад', 'Отлично! Давай встретимся в шесть часов.', 'Ótimo! Vamos nos encontrar às seis horas.'],
      ]),
      producao(7, 'Conte em voz alta o seu fim de semana e convide um amigo para fazer algo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre o seu tempo livre.'),
      exercicios(20, [
        lacuna('Я увлекаюсь ___. (música)', ['музыкой', 'музыка', 'музыку'], 'музыкой', '«увлекаться» + instrumental.'), lacuna('Он занимается ___. (esporte)', ['спортом', 'спорт', 'спорта'], 'спортом', '«заниматься» + instrumental.'), lacuna('Мы играем ___ футбол.', ['в', 'на', 'с'], 'в', 'Jogo: «в» + acusativo.'),
        lacuna('Я играю ___ гитаре.', ['на', 'в', 'с'], 'на', 'Instrumento: «на» + prepositivo.'), lacuna('Я ___ не курю. (nunca)', ['никогда', 'иногда', 'часто'], 'никогда', 'Com «никогда», «не» obrigatório.'), lacuna('___ пойти в кино? (quer)', ['Хочешь', 'Хочу', 'Хотеть'], 'Хочешь', '«ты»: хочешь.'),
        mc('«С удовольствием!» significa:', ['Com prazer!', 'Infelizmente!', 'Com licença!'], 'Com prazer!', 'Resposta positiva a um convite.'), mc('Instrumento musical usa:', ['играть на', 'играть в', 'играть с'], 'играть на', '«на» + prepositivo.'), mc('«К сожалению, не могу» é:', ['uma recusa educada', 'um convite', 'um agradecimento'], 'uma recusa educada', 'Infelizmente não posso.'),
        ordem('Ordene: «Я играю на гитаре.»', ['Я', 'играю', 'на', 'гитаре'], 'Я играю на гитаре.', '«на» + prepositivo.'), ouvir('Хочешь пойти в кино?', ['Хочешь пойти в кино?', 'Давай пойдём в театр!', 'Я иду в кино.'], 'Хочешь пойти в кино?', 'Convite.'), ditado('Я увлекаюсь музыкой', '«увлекаться» + instrumental.'),
        livre('Escreva 5 frases: um hobby, um esporte, um instrumento, a frequência e um convite.', 'Я увлекаюсь музыкой. Я занимаюсь спортом. Я играю на гитаре. По выходным я хожу в парк. Хочешь пойти в кино?'),
      ]),
      producao(5, 'Grave-se falando do seu tempo livre e convidando um amigo.'),
    ]),
  ],
});
