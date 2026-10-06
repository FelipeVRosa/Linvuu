import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 66, titulo: 'Partículas do discurso: же, ведь, даже, только, разве, неужели', nivel: 'b1',
  objetivo: 'Entender e usar as partículas mais comuns da fala (даже, только, именно, же, ведь, вот, ну, разве, неужели), que dão ênfase, surpresa e tom à frase.',
  nota: 'Você dá tom e ênfase à fala com as partículas. Próxima aula: conectores do discurso.',
  sessoes: [
    sessao('S1', 'Ênfase: даже, только, именно, как раз', [
      revisao(5, 'Escreva 5 frases com pronomes indefinidos e negativos.'),
      palavras(8, [['даже', 'dázhe', 'até, mesmo', 'even'], ['только', 'tólka', 'só, apenas', 'only'], ['именно', 'iménna', 'justamente', 'precisely'], ['как раз', 'kak ras', 'justamente, na hora', 'just'], ['просто', 'prósta', 'simplesmente', 'simply'], ['почти', 'pachtí', 'quase', 'almost'], ['всего', 'fsivó', 'apenas, no total', 'only'], ['совсем', 'safsyém', 'completamente', 'completely']]),
      gramatica(12, 'Partículas de ênfase', 'PASSO 1: as PARTÍCULAS são palavrinhas que não mudam e dão TOM à frase; não têm tradução exata. PASSO 2: «ДАЖЕ» = até, mesmo; enfatiza o inesperado: «Даже он не знает» (até ele não sabe). PASSO 3: «ТОЛЬКО» = só, apenas; limita: «Только я знаю» (só eu sei), «Я знаю только это». PASSO 4: a posição importa: a partícula vem ANTES da palavra que ela enfatiza: «Только я пришёл» × «Я пришёл только вчера». PASSO 5: «ИМЕННО» e «КАК РАЗ» = justamente: «Именно это я хотел сказать», «Это как раз то, что мне нужно». PASSO 6: «ПРОСТО» = simplesmente: «Я просто устал». PASSO 7: «ПОЧТИ» = quase: «Я почти готов». PASSO 8: as partículas não mudam o caso nem o gênero: o verbo e os substantivos continuam como sempre.', {
        tag: 'Frase',
        comparacao: 'o português tem partículas parecidas («até», «só», «justamente»), mas o russo as usa muito mais na fala, para dar tom e emoção.',
        tabela: [
          { particula: 'даже', funcao: 'inesperado', exemplo: 'Даже он не знает.' }, { particula: 'только', funcao: 'limita', exemplo: 'Только я знаю. Я знаю только это.' }, { particula: 'именно / как раз', funcao: 'justamente', exemplo: 'Именно это я хотел сказать.' }, { particula: 'просто', funcao: 'simplesmente', exemplo: 'Я просто устал.' }, { particula: 'почти', funcao: 'quase', exemplo: 'Я почти готов.' },
        ],
        erros: [['Я пришёл только. (queria dizer «só eu»)', 'Только я пришёл.', 'A partícula vem antes da palavra enfatizada.'], ['Даже не он знает.', 'Даже он не знает.', '«даже» vem antes da palavra em foco.']],
      }),
      producao(5, 'Diga: «Даже он не знает. Только я знаю. Именно это я хотел сказать. Я просто устал. Я почти готов.»'),
    ]),
    sessao('S2', 'Tom e emoção: же, ведь, вот, ну, разве, неужели', [
      revisao(5, 'Escreva 5 frases com «даже», «только», «именно», «просто» e «почти».'),
      palavras(8, [['же', 'zhe', 'ora (lembrança, ênfase)', 'after all'], ['ведь', 'vyet', 'afinal, pois', 'after all'], ['вот', 'vot', 'eis, aqui está', 'here'], ['ну', 'nu', 'bem, então', 'well'], ['разве', 'razvyé', 'será que? (dúvida)', 'really?'], ['неужели', 'niuzhéli', 'será possível?', 'is it possible?'], ['ладно', 'ládna', 'tudo bem', 'okay'], ['наверное', 'navyérnaye', 'provavelmente', 'probably']]),
      gramatica(12, 'Partículas de atitude', 'PASSO 1: «ЖЕ» lembra ao ouvinte algo que ele já sabe e reforça: «Ты же знаешь!» (você sabe, ora!), «Мы же друзья!». PASSO 2: «ВЕДЬ» introduz uma razão óbvia: «Ведь это правда» (afinal, é verdade), «Не волнуйся, ведь всё хорошо». PASSO 3: «ВОТ» aponta: «Вот он!», «Вот и всё!», «Вот так!». PASSO 4: «НУ» abre ou fecha uma fala: «Ну, давай!», «Ну и что?». PASSO 5: «РАЗВЕ» é uma pergunta de surpresa ou de dúvida: «Разве ты не знал?» (você não sabia? Será?). PASSO 6: «НЕУЖЕЛИ» mostra espanto: «Неужели он пришёл?» (será possível que ele veio?). PASSO 7: «ЛАДНО» = tudo bem, está bem: «Ладно, согласен».', {
        tag: 'Frase',
        tabela: [
          { particula: 'же', funcao: 'lembra e reforça', exemplo: 'Ты же знаешь! Мы же друзья!' }, { particula: 'ведь', funcao: 'razão óbvia', exemplo: 'Ведь это правда.' }, { particula: 'вот', funcao: 'aponta, conclui', exemplo: 'Вот он! Вот и всё!' }, { particula: 'ну', funcao: 'abre ou fecha', exemplo: 'Ну, давай! Ну и что?' }, { particula: 'разве', funcao: 'dúvida', exemplo: 'Разве ты не знал?' }, { particula: 'неужели', funcao: 'espanto', exemplo: 'Неужели он пришёл?' },
        ],
        erros: [['Ты знаешь же!', 'Ты же знаешь!', '«же» vem logo depois da palavra que ele reforça.'], ['Ведь потому что это правда.', 'Ведь это правда. / Потому что это правда.', 'Não junte «ведь» e «потому что».']],
      }),
      producao(5, 'Diga: «Ты же знаешь! Ведь это правда. Вот он! Ну и что? Разве ты не знал? Неужели он пришёл?»'),
    ]),
    sessao('S3', 'Uma notícia surpreendente', [
      revisao(5, 'Escreva 5 frases com «же», «ведь», «вот», «ну», «разве» e «неужели».'),
      gramatica(10, 'Partículas numa conversa', 'PASSO 1: para dar uma notícia: «Ты же знаешь, что…». PASSO 2: para reagir com espanto: «Неужели?», «Разве?». PASSO 3: para justificar: «Ведь он…». PASSO 4: para concluir: «Вот так всегда!». PASSO 5: para fechar: «Ладно».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Ты же знаешь, что Олег переехал?', traducao: 'Você sabe, não é, que o Oleg se mudou?' }, { frase: 'Неужели? Я даже не слышал.', traducao: 'Será possível? Eu nem ouvi falar.' }, { frase: 'Вот так всегда!', traducao: 'É sempre assim!' }, { frase: 'Ладно. Уже звоню.', traducao: 'Tudo bem. Já estou ligando.' },
        ],
      }),
      dialogo(8, 'Неужели? / Será possível?', 'Dois amigos falam de um amigo que se mudou.', [
        ['Лена', 'Ты же знаешь, что Олег переехал в Москву?', 'Você sabe, não é, que o Oleg se mudou para Moscou?'], ['Олег', 'Неужели? Я даже не слышал об этом.', 'Será possível? Nem ouvi falar disso.'], ['Лена', 'Ведь он только вчера уехал.', 'Afinal, ele só partiu ontem.'],
        ['Олег', 'Разве он не сказал мне? Мы же друзья!', 'Ele não me disse? Somos amigos!'], ['Лена', 'Ну, он, наверное, просто забыл.', 'Bem, ele provavelmente simplesmente esqueceu.'], ['Олег', 'Вот так всегда! Даже открытку не прислал.', 'É sempre assim! Nem um cartão mandou.'],
        ['Лена', 'Позвони ему, только не очень поздно.', 'Ligue para ele, só que não muito tarde.'], ['Олег', 'Ладно. Уже звоню.', 'Tudo bem. Já estou ligando.'],
      ]),
      producao(7, 'Converse em voz alta sobre uma notícia surpreendente, usando 5 partículas diferentes.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno diálogo de 6 falas com partículas.'),
      exercicios(20, [
        lacuna('___ он не знает. (até)', ['Даже', 'Только', 'Ведь'], 'Даже', 'Inesperado: «даже».'), lacuna('___ я знаю. (só)', ['Только', 'Даже', 'Ведь'], 'Только', 'Limita: «только».'), lacuna('Ты ___ знаешь! (ora)', ['же', 'ведь', 'даже'], 'же', '«же» lembra e reforça.'),
        lacuna('___ ты не знал? (será que)', ['Разве', 'Ведь', 'Вот'], 'Разве', 'Dúvida: «разве».'), lacuna('___ он пришёл? (será possível)', ['Неужели', 'Ведь', 'Только'], 'Неужели', 'Espanto: «неужели».'), lacuna('___ и всё! (eis tudo)', ['Вот', 'Даже', 'Ведь'], 'Вот', '«вот» aponta ou conclui.'),
        mc('«Ведь» introduz:', ['uma razão óbvia', 'uma pergunta de dúvida', 'uma ordem'], 'uma razão óbvia', 'Afinal, pois.'), mc('«Разве» exprime:', ['dúvida ou surpresa', 'certeza', 'ordem'], 'dúvida ou surpresa', 'Pergunta retórica.'), mc('A partícula vem:', ['antes da palavra enfatizada', 'sempre no fim', 'sempre no começo'], 'antes da palavra enfatizada', 'Posição importa.'),
        ordem('Ordene: «Ты же знаешь!»', ['Ты', 'же', 'знаешь'], 'Ты же знаешь!', '«же» depois do pronome.'), ouvir('Неужели он пришёл', ['Неужели он пришёл', 'Разве он пришёл', 'Он даже не пришёл'], 'Неужели он пришёл', 'Espanto: «неужели».'), ditado('Вот так всегда', 'Expressão com «вот».'),
        livre('Escreva 5 frases com partículas: даже, только, же, разве e неужели.', 'Даже он не знает. Только я знаю. Ты же знаешь! Разве ты не знал? Неужели он пришёл?'),
      ]),
      producao(5, 'Grave-se reagindo com surpresa a uma notícia, com partículas.'),
    ]),
  ],
});
