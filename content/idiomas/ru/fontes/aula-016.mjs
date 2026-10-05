import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 16, titulo: 'Gramática: в e на', nivel: 'a1',
  objetivo: 'Escolher entre «в» (dentro) e «на» (em cima, lugar aberto, evento), usar os verbos de posição e aplicar a escolha ao movimento.',
  nota: 'Você escolhe entre «в» e «на» com segurança e descreve onde as coisas estão. Próxima aula: dias da semana e horas.',
  sessoes: [
    sessao('S1', 'в = dentro, на = em cima', [
      revisao(5, 'Escreva 4 frases com «в» + lugar, como «Я живу в …».'),
      gramatica(12, 'в e на: escolher pela imagem do lugar', 'Os dois significam «em», mas o russo escolhe pela imagem. «В» = dentro de um espaço fechado ou delimitado: в доме, в комнате, в сумке, и também países e cidades (в России, в Москве). «На» = sobre uma superfície (на столе, на полу, на стене), em um lugar visto como espaço aberto (на улице, на площади, на море) ou em um evento e atividade (на работе, на уроке, на концерте). A palavra depois de в/на vai para o preposicional (-е, -и): в доме, на столе. Alguns masculinos curtos têm preposicional em -у quando respondem «где?»: в шкафу, в саду, в лесу, на полу, на мосту.', {
        tag: 'Preposições',
        comparacao: 'em português usamos «em / na / no» para tudo. Em russo, a escolha entre в e на depende da imagem do lugar: dentro, em cima, espaço aberto ou evento.',
        tabela: [
          { situacao: 'dentro de um espaço fechado', preposicao: 'в', exemplo: 'в доме, в комнате, в сумке, в шкафу' }, { situacao: 'países e cidades', preposicao: 'в', exemplo: 'в России, в Бразилии, в Москве' },
          { situacao: 'em cima de uma superfície', preposicao: 'на', exemplo: 'на столе, на полу, на стене' }, { situacao: 'espaço aberto', preposicao: 'на', exemplo: 'на улице, на площади, на море' },
          { situacao: 'evento ou atividade', preposicao: 'на', exemplo: 'на работе, на уроке, на концерте, на вечеринке' }, { situacao: 'masculinos em -у (exceção)', preposicao: 'в / на', exemplo: 'в саду, в лесу, на полу, на мосту' },
        ],
        erros: [['Я на России.', 'Я в России.', 'País e cidade: в.'], ['Книга в столе.', 'Книга на столе.', 'Em cima de uma superfície: на.'], ['Он в уроке.', 'Он на уроке.', 'Aula é um evento: на.']],
      }),
      palavras(8, [
        ['пол', 'pol', 'chão', 'floor'], ['стена', 'stiná', 'parede', 'wall'], ['шкаф', 'shkaf', 'armário', 'wardrobe'], ['сад', 'sad', 'jardim', 'garden'],
        ['лес', 'lies', 'floresta', 'forest'], ['площадь', 'plóshchat', 'praça', 'square'], ['концерт', 'kantsért', 'show, concerto', 'concert'], ['вечеринка', 'vichirínka', 'festa', 'party'],
      ]),
      producao(5, 'Diga: «Книга на столе. Я в России. Деньги в сумке. Я на работе.»'),
    ]),
    sessao('S2', 'Onde está? Os verbos de posição', [
      revisao(5, 'Escreva 4 frases com «на» e 4 com «в».'),
      palavras(8, [
        ['картина', 'kartína', 'quadro', 'picture'], ['кровать', 'kravát', 'cama', 'bed'], ['диван', 'divan', 'sofá', 'sofa'], ['кресло', 'krésla', 'poltrona', 'armchair'],
        ['стул', 'stul', 'cadeira', 'chair'], ['газета', 'gazéta', 'jornal', 'newspaper'], ['лампа', 'lámpa', 'abajur, lâmpada', 'lamp'], ['телевизор', 'tilivízar', 'televisão', 'TV'],
      ]),
      gramatica(12, 'Onde está? лежать, стоять, сидеть, висеть', 'Em português dizemos «está» para tudo: «o livro está na mesa». Em russo o verbo escolhe a posição do objeto: «лежать» (deitado, na horizontal), «стоять» (de pé), «сидеть» (sentado), «висеть» (pendurado). Para soar natural, evite «есть» e use o verbo certo: «Книга лежит на столе», «Лампа стоит на столе», «Кот сидит на диване», «Картина висит на стене». Estes verbos são da 2ª conjugação: лежу, лежишь, лежит, лежим, лежите, лежат; сижу, сидишь...; стою, стоишь...; вишу, висишь...', {
        tag: 'Preposições',
        comparacao: 'o português usa «estar» para todas as posições. O russo diz se o objeto está deitado, de pé, sentado ou pendurado.',
        tabela: [
          { posicao: 'horizontal', verbo: 'лежать → лежит', exemplo: 'Книга лежит на столе.' }, { posicao: 'de pé', verbo: 'стоять → стоит', exemplo: 'Лампа стоит на столе.' },
          { posicao: 'sentado', verbo: 'сидеть → сидит', exemplo: 'Кот сидит на диване.' }, { posicao: 'pendurado', verbo: 'висеть → висит', exemplo: 'Картина висит на стене.' },
        ],
      }),
      producao(5, 'Descreva uma sala em voz alta: «На столе лежит книга. На диване сидит кот. На стене висит картина.» Troque as palavras.'),
    ]),
    sessao('S3', 'Parado × movimento e idiomas', [
      revisao(5, 'Escreva 4 frases com verbos de posição.'),
      gramatica(12, 'Где? e Куда? com в e на; на + idiomas', 'A escolha entre в e на continua no movimento: se com «где?» você usa в, com «куда?» também usa в (в школе → в школу). Se usa на, usa на nos dois (на работе → на работу). No movimento a palavra vai para o acusativo (-а vira -у). Português: «na escola» e «à escola»; russo: muda só a terminação. Também se usa «на» para idiomas: «Я говорю на русском языке», «Я читаю на португальском».', {
        tag: 'Preposições',
        tabelas: [
          { titulo: 'Parado (где?) × movimento (куда?)', linhas: [
            { parado: 'в школе', movimento: 'в школу', pt: 'na escola / à escola' }, { parado: 'на работе', movimento: 'на работу', pt: 'no trabalho / ao trabalho' }, { parado: 'в городе', movimento: 'в город', pt: 'na cidade / à cidade' },
            { parado: 'в парке', movimento: 'в парк', pt: 'no parque / ao parque' }, { parado: 'на улице', movimento: 'на улицу', pt: 'na rua / para a rua' }, { parado: 'на концерте', movimento: 'на концерт', pt: 'no show / ao show' }, { parado: 'на уроке', movimento: 'на урок', pt: 'na aula / à aula' },
          ] },
          { titulo: 'на + idiomas', linhas: [{ russo: 'на русском (языке)', pt: 'em russo' }, { russo: 'на португальском', pt: 'em português' }, { russo: 'на английском', pt: 'em inglês' }] },
        ],
        erros: [['Я иду на школу.', 'Я иду в школу.', '«Школа» usa в nos dois casos.'], ['Я говорю в русском.', 'Я говорю на русском.', 'Para idiomas usa-se «на».']],
      }),
      dialogo(10, 'Где ты? / Onde você está?', 'Dois amigos falam por telefone.', [
        ['Антон', 'Алло, Аня! Где ты?', 'Alô, Anya! Onde você está?'], ['Аня', 'Я на работе. А ты?', 'Estou no trabalho. E você?'], ['Антон', 'Я в кафе. Я сижу на улице.', 'Estou num café. Estou sentado na rua.'],
        ['Аня', 'Хорошо! Куда ты идёшь потом?', 'Que bom! Para onde você vai depois?'], ['Антон', 'Я иду в магазин, потом домой. А ты?', 'Vou à loja, depois para casa. E você?'], ['Аня', 'Я еду на концерт.', 'Eu vou a um show.'],
        ['Антон', 'Отлично! Пока!', 'Ótimo! Tchau!'], ['Аня', 'Пока!', 'Tchau!'],
      ]),
      producao(3, 'Diga: «Я иду в школу. Я еду на работу. Я говорю на русском.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: uma com в, uma com на, uma de posição e uma de movimento.'),
      exercicios(20, [
        mc('«Книга ___ столе.»', ['на', 'в', 'из'], 'на', 'Em cima de uma superfície: на.'),
        mc('«Деньги ___ сумке.»', ['в', 'на', 'с'], 'в', 'Dentro de algo: в.'),
        lacuna('Я ___ России.', ['в', 'на', 'из'], 'в', 'Países: в.'),
        lacuna('Он ___ уроке.', ['на', 'в', 'из'], 'на', 'Evento: на.'),
        mc('Qual está correto?', ['Я на работе', 'Я в работе', 'Я на работа'], 'Я на работе', 'на + preposicional.'),
        lacuna('Лампа ___ на столе. (está de pé)', ['стоит', 'лежит', 'сидит'], 'стоит', 'Objeto de pé: стоять.'),
        lacuna('Картина ___ на стене.', ['висит', 'стоит', 'сидит'], 'висит', 'Pendurado: висеть.'),
        lacuna('Книга ___ на столе.', ['лежит', 'сидит', 'висит'], 'лежит', 'Horizontal: лежать.'),
        mc('Movimento: «Я иду ___ школу.»', ['в', 'на', 'из'], 'в', 'школа usa в nos dois casos.'),
        mc('Movimento: «Я еду ___ работу.»', ['на', 'в', 'из'], 'на', 'работа usa на nos dois casos.'),
        lacuna('Я говорю ___ русском.', ['на', 'в', 'по'], 'на', 'Idiomas: на.'),
        ouvir('Книга лежит на столе', ['Книга лежит на столе', 'Книга стоит в столе', 'Книга висит на стене'], 'Книга лежит на столе', 'лежать + на + preposicional.'),
        ordem('Ordene: «A lâmpada está de pé na mesa.»', ['столе', 'на', 'стоит', 'Лампа'], 'Лампа стоит на столе.', 'Sujeito + verbo de posição + на + lugar.'),
        ditado('Я иду на работу', 'на + acusativo no movimento.'),
        livre('Escreva 4 frases: uma com «в», uma com «на», uma com verbo de posição e uma de movimento.', 'Я живу в России. Я на работе. Книга лежит на столе. Я иду в магазин.'),
      ]),
      producao(5, 'Grave-se descrevendo onde estão 5 coisas da sua casa.'),
    ]),
  ],
});
