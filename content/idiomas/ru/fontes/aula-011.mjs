import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 11, titulo: 'Gramática: gênero e plural', nivel: 'a1',
  objetivo: 'Entender que o russo não tem artigos, descobrir o gênero de um substantivo pela terminação e formar o plural regular.',
  nota: 'Agora você descobre o gênero de quase qualquer palavra e forma o plural. Próxima aula: o adjetivo e a concordância.',
  sessoes: [
    sessao('S1', 'Sem artigo, com gênero', [
      revisao(5, 'Escreva 5 substantivos que você já conhece e diga se cada um é masculino, feminino ou neutro.'),
      gramatica(10, 'O russo não tem artigos', 'Em português dizemos «o livro» e «um livro». Em russo não existe «o», «a», «um» nem «uma»: a palavra «книга» pode significar «o livro» ou «um livro», e o contexto decide. Por isso, de cada substantivo você precisa guardar o gênero (masculino, feminino ou neutro). É o gênero que manda no adjetivo, no possessivo e no verbo no passado.', {
        tag: 'Substantivos',
        comparacao: 'o/a/um/uma + substantivo. Em russo só aparece o substantivo.',
        exemplos: [['Это книга.', 'Isto é um livro / o livro.'], ['Это дом.', 'Isto é uma casa / a casa.'], ['Это окно.', 'Isto é uma janela / a janela.']],
        erros: [['Я хочу один кофе.', 'Я хочу кофе.', '«один» só aparece quando você quer dizer o número 1, nunca como artigo «um».']],
      }),
      palavras(10, [
        ['день', 'dien', 'dia (masculino)', 'day'], ['ночь', 'notch', 'noite (feminino)', 'night'], ['словарь', 'slavár', 'dicionário (masculino)', 'dictionary'],
        ['тетрадь', 'tietrát', 'caderno (feminino)', 'notebook'], ['имя', 'ímia', 'nome (neutro)', 'name'], ['время', 'vrémia', 'tempo (neutro)', 'time'],
        ['дядя', 'diádia', 'tio (masculino)', 'uncle'], ['письмо', 'pismó', 'carta (neutro)', 'letter'], ['такси', 'taksí', 'táxi (neutro, não muda)', 'taxi'], ['пальто', 'paltó', 'casaco (neutro, não muda)', 'coat'],
      ]),
      producao(5, 'Diga em voz alta o gênero de 10 palavras que você já conhece: «дом — masculino», «книга — feminino», «окно — neutro».'),
    ]),
    sessao('S2', 'Como descobrir o gênero', [
      revisao(5, 'Escreva o gênero de: дом, книга, окно, день, ночь, имя.'),
      gramatica(12, 'O gênero pela terminação', 'Olhe a última letra do substantivo no singular. Masculino: termina em consoante (стол, дом), em -й (музей) ou em -ь (день, словарь). Feminino: termina em -а ou -я (книга, неделя), ou em -ь (ночь, тетрадь). Neutro: termina em -о, -е ou -мя (окно, море, имя, время). Passo a passo: (1) olhe a última letra; (2) se ela for -ь, consulte a lista ou o dicionário; (3) confira se há um sufixo que denuncia o gênero (-тель, -ость, -ие...). Dois cuidados: (1) palavras em -ь podem ser masculinas ou femininas e não há regra, então decore o gênero junto com a palavra; (2) homens com final em -а ou -я são masculinos: папа, дедушка, дядя, мужчина.', {
        tag: 'Substantivos',
        comparacao: 'o gênero português também se decora («o dia», «a noite»), mas o russo quase sempre mostra o gênero na terminação. Cuidado: o gênero russo nem sempre bate com o português (книга é feminino, «livro» é masculino; письмо é neutro, «carta» é feminina).',
        tabelas: [
          { titulo: 'Pela última letra', linhas: [
          { genero: 'masculino', terminacao: 'consoante, -й, -ь', exemplos: 'стол, дом, музей, день' }, { genero: 'feminino', terminacao: '-а, -я, -ь', exemplos: 'книга, неделя, ночь, тетрадь' },
          { genero: 'neutro', terminacao: '-о, -е, -мя', exemplos: 'окно, море, имя, время' }, { genero: 'exceção: masculino', terminacao: '-а, -я (homens)', exemplos: 'папа, дедушка, дядя, мужчина' },
          { genero: 'exceção: neutro', terminacao: 'vogal de palavra estrangeira', exemplos: 'кафе, такси, пальто, кино (não mudam)' },
                  ] },
          { titulo: 'Palavras em -ь: decore o gênero junto com a palavra', linhas: [
            { genero: 'masculino', terminacao: '-ь', exemplos: 'день (dia), словарь (dicionário), учитель (professor), гость (convidado), дождь (chuva), корабль (navio)' },
            { genero: 'feminino', terminacao: '-ь', exemplos: 'ночь (noite), дверь (porta), тетрадь (caderno), мать (mãe), дочь (filha), соль (sal), жизнь (vida), любовь (amor)' },
          ] },
          { titulo: 'Sufixos que denunciam o gênero', linhas: [
            { genero: 'masculino', terminacao: '-тель, -ник, -ист', exemplos: 'учитель, художник, журналист' }, { genero: 'feminino', terminacao: '-ость, -ция, -ия, -ка', exemplos: 'радость (alegria), станция (estação), фамилия, ручка' },
            { genero: 'neutro', terminacao: '-ие, -ние, -мя', exemplos: 'здание, занятие (atividade), имя, время' },
          ] },
        ],
        erros: [['Папа — feminino, porque termina em -а.', 'Папа é masculino.', 'Homens são masculinos, mesmo com -а/-я.'], ['мой книга', 'моя книга', 'O possessivo concorda com o gênero de «книга» (feminino).']],
      }),
      palavras(8, [
        ['неделя', 'niediélia', 'semana (feminino)', 'week'], ['музей', 'muziéi', 'museu (masculino)', 'museum'], ['море', 'móre', 'mar (neutro)', 'sea'], ['гость', 'gost', 'convidado (masculino)', 'guest'],
        ['дверь', 'dvier', 'porta (feminino)', 'door'], ['здание', 'zdánie', 'prédio (neutro)', 'building'], ['месяц', 'miésiats', 'mês (masculino)', 'month'], ['фамилия', 'famíliia', 'sobrenome (feminino)', 'surname'],
      ]),
      producao(5, 'Diga com o possessivo certo: «мой дом», «моя неделя», «моё море», «мой день», «моя ночь».'),
    ]),
    sessao('S3', 'O plural', [
      revisao(5, 'Escreva o plural que você já sabe: друг, брат, сестра, ребёнок, человек.'),
      gramatica(12, 'O plural regular', 'Masculino: consoante + -ы (стол → столы); -й e -ь viram -и (музей → музеи, словарь → словари). Feminino: -а vira -ы; -я e -ь viram -и (книга → книги, неделя → недели, ночь → ночи). Neutro: -о vira -а e -е vira -я (окно → окна, море → моря). Regra de ortografia: depois de г, к, х, ж, ч, ш, щ nunca se escreve -ы, e sim -и (книга → книги, ручка → ручки). Você já viu irregulares: друг → друзья, брат → братья, ребёнок → дети, человек → люди.', {
        tag: 'Substantivos',
        comparacao: 'em português o plural quase sempre é um -s. Em russo a terminação muda e depende do gênero.',
        tabela: [
          { singular: 'стол', plural: 'столы', pt: 'mesas' }, { singular: 'музей', plural: 'музеи', pt: 'museus' }, { singular: 'словарь', plural: 'словари', pt: 'dicionários' },
          { singular: 'книга', plural: 'книги', pt: 'livros (г pede -и)' }, { singular: 'ручка', plural: 'ручки', pt: 'canetas (к pede -и)' }, { singular: 'неделя', plural: 'недели', pt: 'semanas' },
          { singular: 'окно', plural: 'окна', pt: 'janelas' }, { singular: 'море', plural: 'моря', pt: 'mares' },
        ],
        erros: [['книгы', 'книги', 'Depois de г, к, х, ж, ч, ш, щ escreve-se -и, nunca -ы.']],
      }),
      texto(8, 'Моя комната / Meu quarto', 'Это моя комната. Здесь есть окна, столы и книги. Окна большие, а столы маленькие. Я люблю читать здесь.',
        'Este é o meu quarto. Aqui há janelas, mesas e livros. As janelas são grandes e as mesas são pequenas. Eu gosto de ler aqui.',
        [['Что есть в комнате?', 'Окна, столы и книги'], ['Какие окна?', 'Большие'], ['Какие столы?', 'Маленькие']]),
      producao(5, 'Diga o plural de «книга, стол, окно, ручка, неделя» e a frase «У меня есть книги и ручки.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 3 palavras de cada gênero com o possessivo: мой …, моя …, моё …'),
      exercicios(20, [
        mc('O russo tem artigos («o», «a», «um», «uma»)?', ['Não', 'Sim, só o masculino', 'Sim, só o feminino'], 'Não', 'A palavra aparece sozinha; o contexto diz se é «o» ou «um».'),
        mc('Gênero de «окно»:', ['neutro', 'feminino', 'masculino'], 'neutro', 'Terminação -о: neutro.'),
        mc('«Папа» é:', ['masculino', 'feminino', 'neutro'], 'masculino', 'Homens são masculinos, mesmo com -а.'),
        mc('«Ночь» é:', ['feminino', 'masculino', 'neutro'], 'feminino', 'Palavras em -ь não têm regra: decore (ночь é feminino).'),
        lacuna('___ дом (meu)', ['мой', 'моя', 'моё'], 'мой', 'дом é masculino.'),
        lacuna('___ неделя (minha)', ['мой', 'моя', 'моё'], 'моя', 'неделя é feminino.'),
        lacuna('___ море (meu)', ['мой', 'моя', 'моё'], 'моё', 'море é neutro.'),
        mc('Plural de «книга»:', ['книги', 'книгы', 'книга'], 'книги', 'Depois de г: -и.'),
        mc('Plural de «окно»:', ['окна', 'окны', 'окни'], 'окна', 'Neutro: -о vira -а.'),
        mc('Plural de «музей»:', ['музеи', 'музеы', 'музея'], 'музеи', '-й vira -и.'),
        ouvir('окна', ['окно', 'окна', 'окне'], 'окна', 'Plural de окно.'),
        ditado('мои книги', 'Possessivo plural + plural de книга.'),
        mc('Qual frase está correta?', ['Это моя книга', 'Это мой книга', 'Это моё книга'], 'Это моя книга', 'книга é feminino.'),
        livre('Escreva 3 substantivos de cada gênero com o possessivo: мой …, моя …, моё …', 'мой дом, мой стол, моя книга, моя семья, моё окно, моё письмо'),
      ]),
      producao(5, 'Grave-se: diga 6 palavras com o possessivo certo e depois as mesmas no plural.'),
    ]),
  ],
});
