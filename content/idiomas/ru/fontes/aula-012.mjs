import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 12, titulo: 'Gramática: adjetivos e possessivos', nivel: 'a1',
  objetivo: 'Fazer o adjetivo e o possessivo concordarem com o substantivo em gênero e número, usando a tabela de terminações.',
  nota: 'Você já combina substantivo, adjetivo e possessivo corretamente. Próxima aula: advérbios e perguntas.',
  sessoes: [
    sessao('S1', 'Adjetivos: a tabela', [
      revisao(5, 'Escreva o gênero e o plural de: книга, стол, окно, ручка.'),
      palavras(12, [
        ['плохой', 'plakhói', 'ruim', 'bad'], ['интересный', 'interiésnyi', 'interessante', 'interesting'], ['трудный', 'trúdnyi', 'difícil', 'difficult'], ['лёгкий', 'lókhkii', 'fácil, leve', 'easy'],
        ['дорогой', 'dagói', 'caro', 'expensive'], ['дешёвый', 'dishóvyi', 'barato', 'cheap'], ['тёплый', 'tióply', 'quente, morno', 'warm'], ['холодный', 'khalódnyi', 'frio', 'cold'],
        ['вкусный', 'fkúsnyi', 'gostoso', 'tasty'], ['чистый', 'chístyi', 'limpo', 'clean'], ['высокий', 'vysókii', 'alto', 'tall'], ['молодой', 'maladói', 'jovem', 'young'],
      ]),
      gramatica(8, 'O adjetivo muda com o substantivo', 'O adjetivo vem antes do substantivo e imita o gênero e o número dele. Para achar a forma, parta do masculino (-ый, -ий ou -ой) e troque a terminação: feminino -ая (ou -яя), neutro -ое (ou -ее), plural -ые (ou -ие). Depois de г, к, х, ж, ч, ш, щ aparece -ий / -ие (маленький, маленькие, хороший, хорошие). O plural é igual para os três gêneros. Os adjetivos têm quatro tipos, que só mudam o jeito de escrever a mesma ideia: duro (-ый), com acento no final (-ой), depois de г/к/х/ж/ч/ш/щ (-ий, e o neutro -ое com acento ou -ее sem acento) e suave (-ий, -яя, -ее).', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'o adjetivo português também concorda («casa nova», «livros novos»), mas o russo tem uma forma para cada um dos três gêneros e outra para o plural.',
        tabelas: [
          { titulo: 'Cinco adjetivos nos quatro formatos', linhas: [
          { adjetivo: 'новый', masculino: 'новый дом', feminino: 'новая книга', neutro: 'новое окно', plural: 'новые книги' },
          { adjetivo: 'старый', masculino: 'старый стол', feminino: 'старая машина', neutro: 'старое кафе', plural: 'старые друзья' },
          { adjetivo: 'большой', masculino: 'большой город', feminino: 'большая семья', neutro: 'большое окно', plural: 'большие столы' },
          { adjetivo: 'маленький', masculino: 'маленький кот', feminino: 'маленькая собака', neutro: 'маленькое море', plural: 'маленькие коты' },
          { adjetivo: 'хороший', masculino: 'хороший друг', feminino: 'хорошая подруга', neutro: 'хорошее кино', plural: 'хорошие друзья' },
                  ] },
          { titulo: 'Os quatro tipos de adjetivo (o masculino mostra o tipo)', linhas: [
            { tipo: 'duro: -ый', masculino: 'новый', feminino: 'новая', neutro: 'новое', plural: 'новые' }, { tipo: 'duro com acento no final: -ой', masculino: 'молодой', feminino: 'молодая', neutro: 'молодое', plural: 'молодые' },
            { tipo: 'depois de г, к, х: -ий', masculino: 'маленький', feminino: 'маленькая', neutro: 'маленькое', plural: 'маленькие' }, { tipo: 'depois de ж, ч, ш, щ (sem acento)', masculino: 'хороший', feminino: 'хорошая', neutro: 'хорошее', plural: 'хорошие' },
            { tipo: 'depois de ж, ч, ш, щ (com acento)', masculino: 'большой', feminino: 'большая', neutro: 'большое', plural: 'большие' }, { tipo: 'suave: -ий', masculino: 'синий (azul)', feminino: 'синяя', neutro: 'синее', plural: 'синие' },
          ] },
        ],
        erros: [['новый книга', 'новая книга', '«Книга» é feminino: o adjetivo também.'], ['красивая дом', 'красивый дом', '«Дом» é masculino.']],
      }),
      producao(5, 'Diga: «новый дом, новая книга, новое окно, новые столы».'),
    ]),
    sessao('S2', 'Possessivos e «этот»', [
      revisao(5, 'Escreva as 4 formas de «новый» (masculino, feminino, neutro, plural).'),
      palavras(8, [
        ['комната', 'kómnata', 'quarto, cômodo', 'room'], ['компьютер', 'kampiúter', 'computador', 'computer'], ['телефон', 'tilifón', 'telefone', 'phone'], ['сумка', 'súmka', 'bolsa', 'bag'],
        ['ключ', 'kliuch', 'chave', 'key'], ['документ', 'dakumiént', 'documento', 'document'], ['деньги', 'diéngi', 'dinheiro (só plural)', 'money'], ['чей / чья / чьё / чьи', 'chei / chia / chió / chi', 'de quem (m / f / n / pl)', 'whose'],
      ]),
      gramatica(12, 'Possessivos, «этот» e o dono', 'O possessivo concorda com a coisa possuída, não com o dono: «моя книга» vale para um homem e para uma mulher falando. As formas «его» (dele), «её» (dela) e «их» (deles) nunca mudam. Para dizer o dono de uma coisa, ponha o nome do dono no genitivo (a forma do «нет»): «сумка Лены» = a bolsa da Lena.', {
        tag: 'Adjetivos e possessivos',
        tabelas: [
          { titulo: 'Possessivos que mudam', linhas: [
            { possessivo: 'мой (meu)', masculino: 'мой дом', feminino: 'моя книга', neutro: 'моё окно', plural: 'мои друзья' },
            { possessivo: 'твой (teu)', masculino: 'твой дом', feminino: 'твоя книга', neutro: 'твоё окно', plural: 'твои друзья' },
            { possessivo: 'наш (nosso)', masculino: 'наш дом', feminino: 'наша книга', neutro: 'наше окно', plural: 'наши друзья' },
            { possessivo: 'ваш (vosso, seu)', masculino: 'ваш дом', feminino: 'ваша книга', neutro: 'ваше окно', plural: 'ваши друзья' },
          ] },
          { titulo: 'Possessivos que nunca mudam', linhas: [
            { possessivo: 'его (dele)', exemplo: 'его дом, его книга, его окно, его друзья' }, { possessivo: 'её (dela)', exemplo: 'её дом, её книга, её окно, её друзья' }, { possessivo: 'их (deles)', exemplo: 'их дом, их книга, их окно, их друзья' },
          ] },
          { titulo: '«Este» concorda com o gênero', linhas: [{ masculino: 'этот дом', feminino: 'эта книга', neutro: 'это окно', plural: 'эти книги' }] },
        ],
        exemplos: [['Это сумка Лены.', 'Esta é a bolsa da Lena.'], ['Это ключи Антона.', 'Estas são as chaves do Antón.']],
      }),
      producao(5, 'Diga: «Это его дом. Это её книга. Это наши друзья. Это ваш телефон.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases com possessivos diferentes (мой, твоя, наше, его).'),
      dialogo(12, 'Чья это сумка? / De quem é esta bolsa?', 'Dois colegas encontram objetos esquecidos na sala.', [
        ['Ира', 'Смотри! Чья это сумка?', 'Olha! De quem é esta bolsa?'], ['Паша', 'Это не моя сумка. Это сумка Лены.', 'Não é minha. É a bolsa da Lena.'], ['Ира', 'Хорошо. А чей это телефон?', 'Certo. E de quem é este telefone?'],
        ['Паша', 'Это мой телефон! Спасибо!', 'É o meu telefone! Obrigado!'], ['Ира', 'Не за что. А чьи это ключи?', 'De nada. E de quem são estas chaves?'], ['Паша', 'Это ключи Антона. Он дома.', 'São as chaves do Antón. Ele está em casa.'],
        ['Ира', 'Хорошо, спасибо!', 'Certo, obrigada!'], ['Паша', 'Пожалуйста!', 'De nada!'],
      ]),
      texto(8, 'Мой друг / Meu amigo', 'Это мой друг Антон. У него новая квартира. Его квартира небольшая, но красивая. В квартире большие окна и новый стол. Его друзья любят эту квартиру.',
        'Este é meu amigo Antón. Ele tem um apartamento novo. O apartamento dele não é grande, mas é bonito. No apartamento há janelas grandes e uma mesa nova. Os amigos dele gostam deste apartamento.',
        [['Какая у Антона квартира?', 'Новая, небольшая, красивая'], ['Какие там окна?', 'Большие'], ['Кто любит эту квартиру?', 'Его друзья']]),
      producao(5, 'Descreva uma coisa sua com possessivo e dois adjetivos, por exemplo: «Это моя новая сумка. Она красивая.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases com adjetivo + substantivo nos três gêneros e no plural.'),
      exercicios(20, [
        mc('«Это ___ книга.» (nova)', ['новая', 'новый', 'новое'], 'новая', 'книга é feminino.'),
        mc('«Это ___ окно.» (grande)', ['большое', 'большой', 'большая'], 'большое', 'окно é neutro.'),
        lacuna('Это ___ дом. (bonito)', ['красивый', 'красивая', 'красивое'], 'красивый', 'дом é masculino.'),
        lacuna('У меня есть ___ друзья. (bons)', ['хорошие', 'хороший', 'хорошая'], 'хорошие', 'Plural: -ие depois de ш.'),
        mc('Qual está correto?', ['новая машина', 'новый машина', 'новое машина'], 'новая машина', 'машина é feminino.'),
        lacuna('Это ___ собака. (minha)', ['моя', 'мой', 'моё'], 'моя', 'собака é feminino.'),
        lacuna('Это ___ окно. (meu)', ['моё', 'мой', 'моя'], 'моё', 'окно é neutro.'),
        mc('Em «его книга» e «её книга», o que muda?', ['só o dono (dele ou dela); «его» e «её» nunca mudam de forma', 'o gênero de «книга»', 'a terminação de «его»'], 'só o dono (dele ou dela); «его» e «её» nunca mudam de forma', 'Esses possessivos são invariáveis.'),
        mc('Plural de «новый»:', ['новые', 'новыи', 'новы'], 'новые', 'O plural é igual para os três gêneros.'),
        lacuna('Это ___ книга. (esta)', ['эта', 'этот', 'это'], 'эта', 'книга é feminino.'),
        ouvir('красивая подруга', ['красивый друг', 'красивая подруга', 'красивое окно'], 'красивая подруга', 'Adjetivo feminino com substantivo feminino.'),
        ditado('новые столы', 'Adjetivo plural + plural de стол.'),
        mc('«Чья это сумка?»: «чья» concorda com:', ['сумка (feminino)', 'Лена', 'я'], 'сумка (feminino)', 'чей / чья / чьё / чьи seguem o gênero da coisa.'),
        livre('Escreva 4 frases com adjetivo + substantivo nos 3 gêneros e no plural.', 'Это новый дом. Это новая книга. Это новое окно. Это новые столы.'),
      ]),
      producao(5, 'Grave-se: descreva 4 coisas suas com possessivo e adjetivo.'),
    ]),
  ],
});
