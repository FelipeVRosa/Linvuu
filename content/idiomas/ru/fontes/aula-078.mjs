import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 78, titulo: 'Revisão e simulado do B1', nivel: 'b1',
  objetivo: 'Rever todo o B1 em um mapa, treinar leitura, escuta, escrita e fala no formato de provas de B1, corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou o B1 do russo. Repita o simulado até acertar quase tudo. Para um certificado oficial, treine também com provas reais e, se possível, com um professor nativo.',
  sessoes: [
    sessao('S1', 'O mapa do B1', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 50 a 77 que você acha difíceis.'),
      gramatica(15, 'O B1 inteiro em uma tabela', 'Esta tabela resume as aulas 50 a 77. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Aspecto e verbos de levar e trazer', regra: 'processo × resultado: «Я читал книгу» × «Я прочитал книгу»; носить/нести, возить/везти, водить/вести.', aula: '50 a 52' },
          { tema: 'Orações com «который»', regra: 'gênero e número do antecedente; o caso vem da função dentro da oração: «Книга, которую я читаю».', aula: '53, 54' },
          { tema: 'Condicional e «чтобы»', regra: '«Если бы я знал, я бы сказал»; «чтобы» + infinitivo (mesmo sujeito) ou passado (sujeitos diferentes).', aula: '55, 56' },
          { tema: 'Discurso indireto e «ли»', regra: '«Он сказал, что придёт»; «Я спросил, придёт ли он».', aula: '57' },
          { tema: 'Gerúndio, passiva e impessoais', regra: 'читая / прочитав; «Дом построен в 1990 году»; «Здесь не курят», «Мне холодно».', aula: '58, 59' },
          { tema: 'Regência dos verbos', regra: 'интересоваться + instrumental; бояться + genitivo; думать о + prepositivo.', aula: '60' },
          { tema: 'Causa, consequência e concessão', regra: 'из-за + genitivo; благодаря + dativo; хотя; несмотря на + acusativo.', aula: '61' },
          { tema: 'Plural, forma curta, numerais', regra: 'у моих друзей, с моими друзьями; рад, должен; с двумя друзьями, около пятидесяти человек.', aula: '62 a 64' },
          { tema: 'Indefinidos, negativos e partículas', regra: 'кто-то, что-нибудь; никто, ничего + «не»; же, ведь, даже, только, неужели.', aula: '65, 66' },
          { tema: 'Conectores, opinião e escrita', regra: 'во-первых, кроме того; по-моему, я не согласен; Уважаемый… / Привет!', aula: '67 a 69' },
          { tema: 'Trabalho, mídia, cidade e cultura', regra: 'собеседование, договор; новости, интернет; экология; традиции e праздники.', aula: '70 a 73' },
          { tema: 'Leitura, escuta, apresentação e palavras', regra: 'ler por blocos; vogais reduzidas; estrutura da apresentação; prefixos e sufixos.', aula: '74 a 77' },
        ],
      }),
      producao(10, 'Fale 3 minutos em russo: um fato do seu passado, um plano com «если бы», a sua opinião sobre um tema e um pedido educado.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato B1, original)', [
      revisao(5, 'Releia o texto e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'Выбор Анны / A escolha da Anna', 'Анна работает в туристическом агентстве уже пять лет. Раньше она хотела стать журналистом, но после университета не нашла такую работу. Хотя зарплата в агентстве небольшая, Анне нравится общаться с людьми и помогать им выбирать путешествия. Благодаря этой работе она побывала в десяти странах. Если бы у неё было больше свободного времени, она бы написала книгу о своих поездках. На прошлой неделе начальник сказал, что скоро откроется новый офис и что ей предложат должность руководителя. Анна пока не решила, согласиться ли ей. С одной стороны, это интересно и денег будет больше; с другой стороны, придётся много работать, и времени на книгу совсем не останется.',
        'Anna trabalha numa agência de turismo há cinco anos. Antes, queria ser jornalista, mas depois da universidade não encontrou esse tipo de trabalho. Embora o salário na agência seja pequeno, Anna gosta de conversar com as pessoas e de ajudá-las a escolher viagens. Graças a esse trabalho, ela já esteve em dez países. Se tivesse mais tempo livre, escreveria um livro sobre as suas viagens. Na semana passada o chefe disse que logo abrirá um novo escritório e que lhe oferecerão o cargo de gerente. Anna ainda não decidiu se deve aceitar. Por um lado, é interessante e haverá mais dinheiro; por outro lado, terá de trabalhar muito e não sobrará tempo para o livro.',
        [['Сколько лет Анна работает в агентстве?', 'Пять лет'], ['Почему она не стала журналистом?', 'После университета она не нашла такую работу'], ['В скольких странах она побывала?', 'В десяти'], ['Что сказал начальник?', 'Что откроется новый офис и что ей предложат должность руководителя']]),
      dialogo(8, 'Дома или в офисе? / Em casa ou no escritório?', 'Dois colegas discutem o trabalho remoto.', [
        ['Олег', 'Как ты думаешь, удалённая работа лучше, чем работа в офисе?', 'O que você acha: o trabalho remoto é melhor do que o trabalho no escritório?'],
        ['Вера', 'По-моему, она удобнее, потому что не нужно тратить время на дорогу.', 'Na minha opinião é mais cômodo, porque não é preciso perder tempo no trajeto.'],
        ['Олег', 'Это правда, но мне кажется, что дома трудно сосредоточиться.', 'É verdade, mas me parece que em casa é difícil se concentrar.'],
        ['Вера', 'Отчасти ты прав. Однако если бы у меня был отдельный кабинет, я бы работала дома каждый день.', 'Em parte você tem razão. Porém, se eu tivesse um escritório separado, trabalharia em casa todos os dias.'],
        ['Олег', 'Я не совсем согласен. Мне нужно общаться с коллегами, иначе я устаю от одиночества.', 'Não concordo totalmente. Preciso conversar com os colegas, senão me canso da solidão.'],
        ['Вера', 'Тогда лучше работать дома два дня в неделю, а остальные дни в офисе.', 'Então é melhor trabalhar em casa dois dias por semana e, nos outros dias, no escritório.'],
      ]),
      producao(7, 'Responda em voz alta: o que a Anna vai decidir e o que você faria no lugar dela. Depois dê a sua opinião sobre o trabalho remoto, com «по-моему» e «потому что».'),
    ]),
    sessao('S3', 'Os erros mais comuns do B1 e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete no B1 e a forma certa.'),
      gramatica(15, 'Os 15 erros mais comuns do B1', 'Leia cada par em voz alta: primeiro o errado, depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['Я спросил, что ты придёшь.', 'Я спросил, придёшь ли ты.', 'Pergunta indireta: «ли».'], ['Если бы я знаю, я бы сказал.', 'Если бы я знал, я бы сказал.', '«бы» pede o passado.'], ['Я вышел раньше, чтобы не опоздаю.', 'Я вышел раньше, чтобы не опоздать.', 'Mesmo sujeito: «чтобы» + infinitivo.'], ['Читая книгу, у меня болит голова.', 'Когда я читаю, у меня болит голова.', 'O gerúndio exige o mesmo sujeito.'], ['Я интересуюсь музыку.', 'Я интересуюсь музыкой.', '«интересоваться» + instrumental.'],
          ['Я думаю о твой проблеме.', 'Я думаю о твоей проблеме.', '«о» + prepositivo, e o adjetivo concorda.'], ['Я никого вижу.', 'Я никого не вижу.', 'Negação dupla em russo: «никого не».'], ['Позвони мне когда-то.', 'Позвони мне когда-нибудь.', '«-нибудь» para o que é incerto.'], ['Мы не пошли гулять благодаря дождю.', 'Мы не пошли гулять из-за дождя.', '«благодаря» = efeito bom; «из-за» = efeito ruim.'], ['Несмотря на дождём, мы пошли гулять.', 'Несмотря на дождь, мы пошли гулять.', '«несмотря на» + acusativo.'],
          ['Я иду с двое друзьями.', 'Я иду с двумя друзьями.', 'O numeral também vai ao instrumental.'], ['Это дом построил в 1990 году.', 'Этот дом построен в 1990 году.', 'Passiva: particípio curto concorda.'], ['Он больше умный, чем я.', 'Он умнее меня.', 'Comparativo simples em «-ее».'], ['Я прочитал книгу два часа.', 'Я читал книгу два часа.', 'Duração pede o imperfectivo.'], ['Он ушёл, не сказать ни слова.', 'Он ушёл, не сказав ни слова.', 'Gerúndio perfectivo em «-в».'],
        ],
      }),
      producao(10, 'Escreva um e-mail formal de cerca de 100 palavras a um chefe ou a uma escola: apresente-se, explique um problema, dê um motivo (потому что / из-за) e peça uma solução com «Не могли бы вы…?». Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do B1', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('Если бы я знал, я бы сказал', ['Если бы я знал, я бы сказал', 'Я знаю, что он сказал', 'Я не знал, что делать'], 'Если бы я знал, я бы сказал', 'Hören: бы + passado.'), ouvir('Он сказал, что скоро придёт', ['Он сказал, что скоро придёт', 'Он спросил, придёт ли она', 'Он не знает, когда придёт'], 'Он сказал, что скоро придёт', 'Hören: discurso indireto.'), ouvir('Несмотря на дождь, мы пошли гулять', ['Несмотря на дождь, мы пошли гулять', 'Из-за дождя мы остались дома', 'Мы хотим пойти гулять'], 'Несмотря на дождь, мы пошли гулять', 'Hören: concessão.'), ditado('Прочитав письмо, он ушёл', 'Schreiben: gerúndio perfectivo.'),
        mc('Leia: «Мне кажется, что вы не совсем правы.» Qual é a atitude de quem fala?', ['discorda com educação', 'concorda totalmente', 'faz uma pergunta'], 'discorda com educação', 'Lesen: opinião e desacordo.'), mc('Leia: «Благодаря помощи друзей я сдал экзамен.» O que isso significa?', ['passei no exame com a ajuda dos amigos', 'não passei por causa dos amigos', 'os meus amigos passaram no exame'], 'passei no exame com a ajuda dos amigos', 'Lesen: благодаря = efeito bom.'), mc('Leia: «Здесь не курят.» O que isso significa?', ['aqui não se fuma', 'eu não fumo', 'ele fuma aqui'], 'aqui não se fuma', 'Lesen: impessoal.'), mc('Leia: «Хотя было холодно, мы долго гуляли.» A ideia é:', ['embora fizesse frio, passeamos muito', 'como fazia frio, ficamos em casa', 'passeamos pouco porque fazia frio'], 'embora fizesse frio, passeamos muito', 'Lesen: хотя = embora.'),
        lacuna('Я интересуюсь ___. (música)', ['музыкой', 'музыку', 'музыки'], 'музыкой', '«интересоваться» + instrumental.'), lacuna('Я ___ не знаю. (nada)', ['ничего', 'что-то', 'что-нибудь'], 'ничего', 'Negação dupla.'), lacuna('Мы пошли гулять, ___ шёл дождь. (embora)', ['хотя', 'потому что', 'поэтому'], 'хотя', 'Concessão.'), lacuna('Он ушёл, не ___ ни слова. (dizendo)', ['сказав', 'сказать', 'сказал'], 'сказав', 'Gerúndio perfectivo.'), lacuna('Я иду в кино с ___ друзьями. (dois)', ['двумя', 'два', 'двух'], 'двумя', 'Numeral no instrumental.'), lacuna('Дом ___ в 1990 году. (foi construído)', ['построен', 'построил', 'строит'], 'построен', 'Passiva com particípio curto.'),
        ordem('Ordene: «Я спросил, придёшь ли ты.»', ['Я', 'спросил', 'придёшь', 'ли', 'ты'], 'Я спросил, придёшь ли ты.', 'Pergunta indireta com «ли».'), ordem('Ordene: «Он умнее меня.»', ['Он', 'умнее', 'меня'], 'Он умнее меня.', 'Comparativo + genitivo.'),
        livre('Schreiben: escreva 6 frases sobre o seu trabalho ou estudo: uma opinião (по-моему), um desejo irreal (если бы), uma causa (из-за / благодаря), uma concessão (хотя), um discurso indireto (он сказал, что) e um plano (чтобы).', 'По-моему, моя работа интересная. Если бы у меня было больше времени, я бы изучал русский каждый день. Благодаря коллегам я быстро всё понял. Хотя работы много, я не устаю. Начальник сказал, что у нас будет новый проект. Я учу русский, чтобы читать книги в оригинале.'),
      ]),
      producao(5, 'Sprechen, em 3 partes: (1) apresente um tema e dê a sua opinião com dois argumentos; (2) responda a uma objeção com «отчасти» ou «я не согласен»; (3) peça algo por escrito ou por telefone, com educação.'),
    ]),
  ],
});
