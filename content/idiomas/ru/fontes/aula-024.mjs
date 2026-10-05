import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 24, titulo: 'Revisão e prova final', nivel: 'a1',
  objetivo: 'Revisar o alfabeto, o gênero, a concordância, os casos básicos, o presente e o passado, e fazer a prova final do nível inicial.',
  nota: 'Você concluiu o nível inicial de russo: 24 aulas, 48 horas de estudo guiado. Revise as aulas por alguns dias e continue praticando com a leitura e a fala.',
  sessoes: [
    sessao('S1', 'Mapa de revisão', [
      revisao(5, 'Leia em voz alta o alfabeto, de А a Я, sem olhar.'),
      gramatica(12, 'Tudo o que você já sabe, em uma tabela', 'Esta tabela resume cada ponto de gramática das aulas anteriores em uma linha. Releia uma linha por vez e diga um exemplo seu em voz alta. Se alguma linha parecer estranha, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Sem artigos', regra: 'Não existe «o/a/um/uma»; o contexto decide.', aula: '11' }, { tema: 'Frase com «é»', regra: 'Sem «есть» no presente: «Это дом», «Я врач».', aula: '1, 4, 7' },
          { tema: 'Formal e informal', regra: 'ты (amigos) × вы (formal ou plural).', aula: '2, 3' }, { tema: 'Gênero', regra: 'Consoante, -й, -ь: masculino; -а, -я: feminino; -о, -е, -мя: neutro.', aula: '11' },
          { tema: 'Plural', regra: '-ы / -и / -а / -я; depois de г к х ж ч ш щ escreve-se -и.', aula: '11' }, { tema: 'Adjetivo e possessivo', regra: 'Concordam com o gênero e o número do substantivo.', aula: '5, 12' },
          { tema: 'Ter / não ter', regra: 'У меня есть + nominativo; У меня нет + genitivo.', aula: '6, 7' }, { tema: 'Negação', regra: '«не» antes da palavra negada; «никогда не».', aula: '7, 13' },
          { tema: 'Conjugações', regra: '1ª: -ю, -ешь, -ет, -ем, -ете, -ют; 2ª: -ю, -ишь, -ит, -им, -ите, -ят; irregulares: пить, есть, мочь, спать.', aula: '8, 9, 15' }, { tema: 'в e на', regra: 'в = dentro, país, cidade; на = em cima, espaço aberto, evento; verbos de posição.', aula: '8, 16' },
          { tema: 'Onde? / Para onde?', regra: 'Parado: preposicional; movimento: acusativo (в школе → в школу).', aula: '16, 18' }, { tema: 'Objeto direto', regra: 'Acusativo: -а → -у; masculino e neutro inanimados não mudam.', aula: '9' },
          { tema: 'Números e preço', regra: '1 рубль, 2–4 рубля, 5+ рублей.', aula: '10' }, { tema: 'Advérbios', regra: 'Nunca mudam; vêm do adjetivo trocando o final por -о.', aula: '13' },
          { tema: 'Perguntas', regra: 'Sim/não pela entonação; palavra interrogativa no começo.', aula: '13' }, { tema: 'Casos', regra: 'Seis casos; cada terminação mostra a função da palavra.', aula: '14' },
          { tema: 'Dias e horas', regra: 'в + dia (в пятницу); в + hora (в пять часов).', aula: '17' }, { tema: 'Verbos em -ся', regra: 'Depois de vogal -сь, depois de consoante -ся.', aula: '18' },
          { tema: 'Passado', regra: '-л, -ла, -ло, -ли; был/была/было/были.', aula: '19' }, { tema: 'Aspecto', regra: 'Imperfectivo = processo ou hábito; perfectivo = resultado concluído; estude os pares.', aula: '20' },
          { tema: 'Futuro', regra: 'буду + infinitivo (imperfectivo); verbo perfectivo conjugado (напишу).', aula: '21' }, { tema: 'Movimento', regra: 'идти / ходить, ехать / ездить; по- + forma = futuro (пойду, поеду).', aula: '22' },
          { tema: 'Precisar e poder', regra: 'Мне нужно/нужен/нужна/нужны; можно; нельзя.', aula: '23' },
        ],
      }),
      palavras(8, [
        ['много', 'mnóga', 'muito (Я много читаю)', 'a lot'], ['мало', 'mála', 'pouco (Я мало работаю)', 'little'], ['только', 'tólka', 'só, apenas', 'only'], ['если', 'iésli', 'se', 'if'], ['поэтому', 'payétamu', 'por isso', 'therefore'],
      ]),
      producao(5, 'Apresente-se em 6 frases, em voz alta: nome, origem, profissão, onde mora, o que gosta e o que fez ontem.'),
    ]),
    sessao('S2', 'Leitura final', [
      revisao(5, 'Releia o diálogo e o texto abaixo em voz alta antes de começar.'),
      texto(10, 'Меня зовут Лена / Eu me chamo Lena', 'Меня зовут Лена. Я из Бразилии, но сейчас я живу в Москве. Я работаю в школе. Я учитель. У меня есть брат и сестра. Мой брат живёт в Сан-Паулу. Он инженер. Моя сестра студентка. Вчера я была дома. Я читала книгу и слушала музыку. Сегодня я работаю до пяти часов. После работы я иду в магазин. Мне нужен хлеб и молоко. Я люблю читать и гулять. Я очень люблю Москву.',
        'Eu me chamo Lena. Sou do Brasil, mas agora moro em Moscou. Trabalho numa escola. Sou professora. Tenho um irmão e uma irmã. Meu irmão mora em São Paulo. Ele é engenheiro. Minha irmã é estudante. Ontem estive em casa. Li um livro e ouvi música. Hoje trabalho até as cinco. Depois do trabalho vou à loja. Preciso de pão e leite. Gosto de ler e passear. Gosto muito de Moscou.',
        [['Откуда Лена?', 'Из Бразилии'], ['Где она живёт и работает?', 'Живёт в Москве, работает в школе'], ['Кто её брат?', 'Инженер'], ['Что она делала вчера?', 'Читала книгу и слушала музыку'], ['Что ей нужно в магазине?', 'Хлеб и молоко']]),
      dialogo(10, 'Знакомство / Conhecendo-se', 'Dois adultos se conhecem num evento.', [
        ['Анна', 'Здравствуйте! Как вас зовут?', 'Olá! Como o senhor se chama?'], ['Паоло', 'Здравствуйте! Меня зовут Паоло. А вас?', 'Olá! Eu me chamo Paolo. E a senhora?'], ['Анна', 'Меня зовут Анна. Откуда вы?', 'Eu me chamo Anna. De onde o senhor é?'],
        ['Паоло', 'Я из Италии. Я живу в Москве. А вы?', 'Sou da Itália. Moro em Moscou. E a senhora?'], ['Анна', 'Я русская. Я живу в Москве. Вы работаете?', 'Sou russa. Moro em Moscou. O senhor trabalha?'],
        ['Паоло', 'Да, я работаю в офисе. Я инженер.', 'Sim, trabalho num escritório. Sou engenheiro.'], ['Анна', 'Вы любите Москву?', 'O senhor gosta de Moscou?'], ['Паоло', 'Да, очень! Мне нравится этот город.', 'Sim, muito! Eu gosto desta cidade.'],
      ]),
      producao(5, 'Responda em voz alta às perguntas do texto e do diálogo, como se fosse você.'),
    ]),
    sessao('S3', 'Os erros mais comuns', [
      revisao(5, 'Escreva 3 erros que você já cometeu em russo e a forma certa.'),
      gramatica(15, 'Os 10 erros mais comuns de quem fala português', 'Estes dez erros aparecem com mais frequência em quem fala português. Corrigir só esses já deixa a sua fala muito mais natural. Leia cada par em voz alta: primeiro o errado (para reconhecer o som estranho), depois o certo (para fixar).', {
        tag: 'Revisão',
        erros: [
          ['Это есть книга.', 'Это книга.', 'Sem «есть» no presente para dizer «é».'], ['Мой книга.', 'Моя книга.', 'O possessivo concorda com o gênero.'], ['Я читаю книга.', 'Я читаю книгу.', 'Objeto direto no acusativo.'],
          ['Я живу в Бразилия.', 'Я живу в Бразилии.', '«в» pede o preposicional.'], ['Я иду в магазине.', 'Я иду в магазин.', 'Movimento pede o acusativo.'], ['Я никогда читаю.', 'Я никогда не читаю.', 'Dupla negação obrigatória.'],
          ['У меня нет сестра.', 'У меня нет сестры.', '«нет» pede o genitivo.'], ['Вчера я есть дома.', 'Вчера я был дома.', 'No passado: был/была.'], ['Я нужно воду.', 'Мне нужна вода.', 'Quem precisa vai para o dativo.'], ['Ты есть студент?', 'Ты студент?', 'Pergunta pela entonação, sem «есть».'],
        ],
      }),
      producao(10, 'Leia cada erro em voz alta e diga a forma certa. Depois grave 5 frases suas, sem nenhum desses erros.'),
    ]),
    sessao('S4', 'Prova final do nível inicial', [
      revisao(5, 'Releia o mapa de revisão e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        mc('Gênero de «окно»:', ['neutro', 'feminino', 'masculino'], 'neutro', 'Terminação -о: neutro.'),
        lacuna('Это ___ книга. (nova)', ['новая', 'новый', 'новое'], 'новая', 'книга é feminino.'),
        mc('Plural de «книга»:', ['книги', 'книгы', 'книга'], 'книги', 'Depois de г: -и.'),
        lacuna('У меня нет ___. (irmã)', ['сестры', 'сестра', 'сестру'], 'сестры', '«нет» + genitivo.'),
        lacuna('Я живу в ___. (Moscou)', ['Москве', 'Москва', 'Москву'], 'Москве', 'в + preposicional.'),
        lacuna('Я читаю ___. (livro)', ['книгу', 'книга', 'книги'], 'книгу', 'Acusativo: -а → -у.'),
        lacuna('Я иду ___. (para casa)', ['домой', 'дома', 'дом'], 'домой', 'Movimento: «домой».'),
        mc('Passado de «работать» (ela):', ['работала', 'работал', 'работает'], 'работала', 'Feminino: -ла.'),
        lacuna('Вчера я ___ дома. (estive; homem)', ['был', 'была', 'есть'], 'был', 'Homem: был.'),
        lacuna('Мне ___ вода. (preciso de)', ['нужна', 'нужен', 'нужно'], 'нужна', 'вода é feminino.'),
        mc('Advérbio de «хороший»:', ['хорошо', 'хорошая', 'хорошие'], 'хорошо', 'Advérbio: troque o final por -о.'),
        mc('«Во вторник» = ', ['na terça', 'na quarta', 'na quinta'], 'na terça', '«вторник» pede «во».'),
        lacuna('Сейчас пять ___. (horas)', ['часов', 'часа', 'час'], 'часов', 'De 5 a 12: часов.'),
        ordem('Ordene: «Eu nunca leio.»', ['никогда', 'не', 'читаю', 'Я'], 'Я никогда не читаю.', 'Dupla negação.'),
        lacuna('Мы ___ быстро. (говорить)', ['говорим', 'говорем', 'говорят'], 'говорим', '2ª conjugação: мы → -им.'),
        lacuna('Завтра я ___ работать. (буду)', ['буду', 'будет', 'будем'], 'буду', 'Futuro composto: я буду + infinitivo.'),
        mc('«Я прочитал книгу» sugere:', ['ação concluída com resultado', 'processo sem fim', 'hábito'], 'ação concluída com resultado', 'Perfectivo: resultado.'),
        ditado('Я живу в Москве и работаю в школе', 'preposicional + verbos -ть.'),
        livre('Escreva 6 frases: nome, origem, profissão, onde mora, o que gosta e o que fez ontem.', 'Меня зовут Анна. Я из Бразилии. Я врач. Я живу в Москве. Я люблю читать книги. Вчера я была дома.'),
      ]),
      producao(5, 'Grave-se: apresentação completa de 1 minuto, com tudo o que você aprendeu.'),
    ]),
  ],
});
