import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 72, titulo: 'Cidade e meio ambiente', nivel: 'b1',
  objetivo: 'Falar de problemas e soluções da cidade e do meio ambiente (загрязнение, мусор, транспорт), com «нужно, чтобы…», «необходимо / следует» + infinitivo, imperativo e hipóteses com «если бы».',
  nota: 'Você discute problemas urbanos e propõe soluções. Próxima aula: cultura e tradições.',
  sessoes: [
    sessao('S1', 'Os problemas da cidade', [
      revisao(5, 'Escreva 5 frases sobre uma notícia, citando a fonte e usando verbos da rede.'),
      palavras(8, [['экология', 'ikalógiya', 'ecologia', 'ecology'], ['воздух', 'vózdukh', 'ar', 'air'], ['мусор', 'músar', 'lixo', 'rubbish'], ['загрязнение', 'zagryaznyéniye', 'poluição', 'pollution'], ['пробка', 'própka', 'engarrafamento', 'traffic jam'], ['шум', 'shum', 'barulho', 'noise'], ['транспорт', 'tránspart', 'transporte', 'transport'], ['переработка', 'pirirabótka', 'reciclagem', 'recycling']]),
      gramatica(12, 'Descrever problemas e causas', 'PASSO 1: para descrever o estado: «Воздух загрязнён» (particípio curto: o ar está poluído), «Река загрязнена», «Улицы заполнены машинами». PASSO 2: para a causa: «из-за» + genitivo: «из-за пробок», «из-за мусора». PASSO 3: para a quantidade: «слишком много машин», «мало парков». PASSO 4: para a consequência: «поэтому» ou «так что». PASSO 5: para comparar: «В городе воздух хуже, чем за городом». PASSO 6: «ЗАГРЯЗНЕНИЕ ВОЗДУХА» e «ПЕРЕРАБОТКА МУСОРА» usam o genitivo para o complemento. PASSO 7: «БОЛЬШИНСТВО» + genitivo plural (a maioria): «большинство жителей».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Воздух загрязнён из-за машин.', traducao: 'O ar está poluído por causa dos carros.' }, { frase: 'Слишком много машин и мало парков.', traducao: 'Há carros demais e poucos parques.' }, { frase: 'В городе воздух хуже, чем за городом.', traducao: 'Na cidade o ar é pior do que fora dela.' }, { frase: 'Большинство жителей недовольно шумом.', traducao: 'A maioria dos moradores está descontente com o barulho.' }, { frase: 'Загрязнение воздуха — большая проблема.', traducao: 'A poluição do ar é um grande problema.' },
        ],
        erros: [['Воздух загрязнены.', 'Воздух загрязнён.', 'Particípio curto concorda com «воздух» (m).'], ['Много машины.', 'Много машин.', '«много» + genitivo plural.'], ['Загрязнение воздух.', 'Загрязнение воздуха.', 'Complemento no genitivo.']],
      }),
      producao(5, 'Descreva 4 problemas da sua cidade: «Воздух … Слишком много … Мало … Из-за … »'),
    ]),
    sessao('S2', 'Soluções e propostas', [
      revisao(5, 'Escreva 5 frases de problemas urbanos com causa.'),
      palavras(8, [['необходимо', 'nibkhadíma', 'é necessário', 'it is necessary'], ['следует', 'slyédyet', 'convém', 'one should'], ['сортировать', 'sartiravát', 'separar, classificar', 'to sort'], ['беречь', 'birétch', 'preservar', 'to protect'], ['сохранять', 'sakhranyát', 'conservar', 'to preserve'], ['велосипед', 'vilasipyét', 'bicicleta', 'bicycle'], ['общественный транспорт', 'óbshchistvyennyy tránspart', 'transporte público', 'public transport'], ['экономить', 'ikanómit', 'economizar', 'to save']]),
      gramatica(12, 'Propor soluções', 'PASSO 1: para propor, use «НЕОБХОДИМО» (é necessário), «СЛЕДУЕТ» (convém), «НУЖНО» ou «НАДО» + infinitivo: «Необходимо сортировать мусор», «Следует беречь воздух». PASSO 2: com sujeito diferente: «НУЖНО, ЧТОБЫ» + passado: «Нужно, чтобы люди меньше ездили на машинах». PASSO 3: para chamar à ação: «Давайте» + infinitivo ou 1ª pessoa do plural perfectiva: «Давайте сортировать мусор», «Давайте посадим деревья». PASSO 4: imperativo: «Пользуйтесь общественным транспортом», «Берегите воду». PASSO 5: hipótese: «Если бы все ездили на велосипедах, воздух был бы чище» (se todos andassem de bicicleta, o ar seria mais limpo). PASSO 6: comparativo: «чище, тише, лучше».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Необходимо сортировать мусор.', traducao: 'É necessário separar o lixo.' }, { frase: 'Нужно, чтобы люди меньше ездили на машинах.', traducao: 'É preciso que as pessoas andem menos de carro.' }, { frase: 'Давайте посадим деревья!', traducao: 'Vamos plantar árvores!' }, { frase: 'Пользуйтесь общественным транспортом.', traducao: 'Usem o transporte público.' }, { frase: 'Если бы все ездили на велосипедах, воздух был бы чище.', traducao: 'Se todos andassem de bicicleta, o ar seria mais limpo.' },
        ],
        erros: [['Нужно, чтобы люди меньше ездят.', 'Нужно, чтобы люди меньше ездили.', '«чтобы» + passado.'], ['Необходимо сортирую мусор.', 'Необходимо сортировать мусор.', '«необходимо» + infinitivo.'], ['Если бы все ездят на велосипедах…', 'Если бы все ездили на велосипедах…', '«если бы» + passado.']],
      }),
      producao(5, 'Proponha 4 soluções: «Необходимо … Нужно, чтобы … Давайте … Пользуйтесь …»'),
    ]),
    sessao('S3', 'Uma ação ecológica', [
      revisao(5, 'Escreva 5 frases de proposta com «необходимо», «нужно, чтобы», «давайте» e «если бы».'),
      gramatica(10, 'Organizar uma ação', 'PASSO 1: convoque: «Приглашаем всех жителей». PASSO 2: dê o local e a hora: «Мы встретимся в парке в десять часов». PASSO 3: divida tarefas: «Кто возьмёт на себя…?». PASSO 4: peça material: «Нужно, чтобы каждый принёс перчатки и мешки». PASSO 5: resuma: «Итак, мы собираем мусор и сортируем его».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Приглашаем всех жителей.', traducao: 'Convidamos todos os moradores.' }, { frase: 'Мы встретимся в парке в десять часов.', traducao: 'Nos encontraremos no parque às dez.' }, { frase: 'Нужно, чтобы каждый принёс перчатки.', traducao: 'É preciso que cada um traga luvas.' }, { frase: 'Мы собираем мусор и сортируем его.', traducao: 'Recolhemos o lixo e o separamos.' },
        ],
      }),
      dialogo(8, 'Эко-акция / Ação ecológica', 'Nina e Max organizam uma limpeza no parque.', [
        ['Нина', 'Макс, давай организуем уборку в парке.', 'Max, vamos organizar uma limpeza no parque.'], ['Макс', 'Отличная идея! Когда мы встретимся?', 'Ótima ideia! Quando nos encontraremos?'], ['Нина', 'В субботу в десять часов. Нужно, чтобы каждый принёс перчатки.', 'No sábado às dez. É preciso que cada um traga luvas.'],
        ['Макс', 'Кто возьмёт на себя мусорные мешки?', 'Quem assume os sacos de lixo?'], ['Нина', 'Я возьму. А ты, пожалуйста, пригласи соседей.', 'Eu assumo. E você, por favor, convide os vizinhos.'], ['Макс', 'Хорошо. Если бы все жители пришли, мы бы убрали парк за час.', 'Está bem. Se todos os moradores viessem, limparíamos o parque em uma hora.'],
        ['Нина', 'Итак, мы собираем мусор и сортируем его.', 'Então, recolhemos o lixo e o separamos.'], ['Макс', 'Договорились! Давай сделаем афишу.', 'Combinado! Vamos fazer um cartaz.'],
      ]),
      producao(7, 'Organize em voz alta uma ação no seu bairro: quando, onde, o que trazer e quem faz o quê.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases com problemas e soluções da sua cidade.'),
      exercicios(20, [
        lacuna('Воздух ___ из-за машин. (poluído)', ['загрязнён', 'загрязнены', 'загрязнена'], 'загрязнён', '«воздух» é masculino.'), lacuna('Слишком много ___. (carros)', ['машин', 'машины', 'машинам'], 'машин', '«много» + genitivo plural.'), lacuna('Необходимо ___ мусор.', ['сортировать', 'сортирую', 'сортировал'], 'сортировать', '«необходимо» + infinitivo.'),
        lacuna('Нужно, ___ люди меньше ездили на машинах.', ['чтобы', 'что', 'если'], 'чтобы', '«чтобы» + passado.'), lacuna('Давайте ___ деревья! (plantemos)', ['посадим', 'посадить', 'сажаю'], 'посадим', '1ª pessoa do plural perfectiva.'), lacuna('___ бы все ездили на велосипедах, воздух был бы чище.', ['Если', 'Когда', 'Чтобы'], 'Если', '«если бы».'),
        mc('«Необходимо» exprime:', ['necessidade', 'dúvida', 'passado'], 'necessidade', 'É necessário.'), mc('«Переработка» é:', ['reciclagem', 'poluição', 'barulho'], 'reciclagem', 'Переработка = reciclagem.'), mc('«Большинство жителей» usa:', ['genitivo plural', 'nominativo', 'dativo'], 'genitivo plural', '«большинство» + genitivo plural.'),
        ordem('Ordene: «Необходимо сортировать мусор.»', ['Необходимо', 'сортировать', 'мусор'], 'Необходимо сортировать мусор.', '«необходимо» + infinitivo.'), ouvir('Нужно, чтобы каждый принёс перчатки', ['Нужно, чтобы каждый принёс перчатки', 'Нужно принести перчатки', 'Каждый принёс перчатки'], 'Нужно, чтобы каждый принёс перчатки', '«чтобы» + passado.'), ditado('Давайте сортировать мусор', 'Chamado à ação.'),
        livre('Escreva 5 frases: um problema, uma causa, uma proposta com «необходимо», uma com «нужно, чтобы» e uma hipótese com «если бы».', 'Воздух загрязнён. Это из-за машин. Необходимо сортировать мусор. Нужно, чтобы люди ездили меньше. Если бы все ездили на велосипедах, воздух был бы чище.'),
      ]),
      producao(5, 'Grave-se propondo soluções para um problema do seu bairro.'),
    ]),
  ],
});
