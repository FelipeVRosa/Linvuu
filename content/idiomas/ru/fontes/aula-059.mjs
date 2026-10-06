import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 59, titulo: 'Passiva e construções impessoais', nivel: 'b1',
  objetivo: 'Usar a passiva com «-ся» e com o particípio curto (закрыт, написано, построен), a 3ª pessoa do plural indefinida (говорят, откроют) e as construções impessoais (мне кажется, мне хочется, нельзя, не спится).',
  nota: 'Você fala do que acontece sem dizer quem faz. Próxima aula: a regência dos verbos.',
  sessoes: [
    sessao('S1', 'A passiva com -ся e com particípio curto', [
      revisao(5, 'Escreva 5 frases com gerúndio imperfectivo e perfectivo.'),
      palavras(8, [['строиться', 'stróitsya', 'ser construído', 'to be built'], ['читаться', 'chitátsya', 'ler-se', 'to be read'], ['закрыт', 'zakrýt', 'fechado', 'closed'], ['открыт', 'atkrýt', 'aberto', 'open'], ['написан', 'napisán', 'escrito', 'written'], ['построен', 'pastróyen', 'construído', 'built'], ['сделан', 'zdyélan', 'feito', 'made'], ['куплен', 'kúplen', 'comprado', 'bought']]),
      gramatica(12, 'Dois jeitos de dizer «foi feito»', 'PASSO 1: a PASSIVA põe em foco o resultado, não quem fez. PASSO 2: com verbos imperfectivos usa-se o «-СЯ»: «Дом строится» (a casa está sendo construída), «Книга читается легко» (o livro se lê facilmente). PASSO 3: com verbos perfectivos usa-se o PARTICÍPIO CURTO (terminado em «-н», «-ен» ou «-т»): «закрыт, открыт, написан, построен, сделан, куплен». PASSO 4: o particípio curto concorda com o sujeito em gênero e número: «магазин закрыт», «дверь закрыта», «окно закрыто», «двери закрыты». PASSO 5: o agente, quando aparece, vai ao INSTRUMENTAL: «Дом построен рабочими», «Письмо написано мной». PASSO 6: o tempo passado exige «был»: «Дом был построен в 1990 году». PASSO 7: o particípio curto descreve o ESTADO resultante: «Магазин закрыт» (está fechado agora).', {
        tag: 'Verbos',
        comparacao: 'o português usa «ser/estar + particípio» («foi construído», «está fechado»). O russo usa o particípio curto sem verbo no presente («закрыт»), e «был» no passado.',
        tabela: [
          { masculino: 'магазин закрыт', feminino: 'дверь закрыта', neutro: 'окно закрыто', plural: 'двери закрыты' }, { masculino: 'дом построен', feminino: 'книга написана', neutro: 'письмо написано', plural: 'дома построены' },
        ],
        erros: [['Магазин закрытый.', 'Магазин закрыт.', 'Estado resultante: particípio curto.'], ['Дверь закрыт.', 'Дверь закрыта.', 'Concorda com «дверь» (f).'], ['Дом построен в 1990 году рабочие.', 'Дом построен рабочими.', 'Agente no instrumental.']],
      }),
      producao(5, 'Diga: «Дом строится. Магазин закрыт. Дверь закрыта. Письмо написано. Дом был построен в 1990 году.»'),
    ]),
    sessao('S2', 'Quando não se diz quem faz', [
      revisao(5, 'Escreva a tabela do particípio curto: закрыт, закрыта, закрыто, закрыты.'),
      palavras(8, [['говорят', 'gavaryát', 'dizem', 'they say'], ['откроют', 'atkróyut', 'abrirão', 'they will open'], ['стучат', 'stuchát', 'batem', 'someone knocks'], ['здесь не курят', 'zdyes nye kúryat', 'aqui não se fuma', 'no smoking here'], ['мне кажется', 'mnye kázhetsya', 'parece-me', 'it seems to me'], ['мне хочется', 'mnye khóchetsya', 'tenho vontade', 'I feel like'], ['мне не спится', 'mnye nye spítsya', 'não consigo dormir', "I can't sleep"], ['нельзя', 'nilzyá', 'é proibido', 'one must not']]),
      gramatica(12, 'O sujeito indeterminado e o impessoal', 'PASSO 1: para falar de «alguém» ou «as pessoas» sem dizer quem, o russo usa a 3ª PESSOA DO PLURAL sem sujeito: «Говорят, что…» (dizem que…), «Здесь не курят» (aqui não se fuma), «Мне позвонили» (me ligaram), «Стучат в дверь» (batem à porta). PASSO 2: para o futuro: «Магазин откроют в мае» (vão abrir a loja em maio). PASSO 3: os verbos impessoais usam o DATIVO da pessoa e não têm sujeito: «Мне кажется», «Мне хочется», «Мне не спится» (não consigo dormir), «Мне нужно». PASSO 4: as palavras de estado: «НЕЛЬЗЯ» (é proibido), «МОЖНО» (é permitido), «НАДО / НУЖНО» (é preciso) + infinitivo: «Здесь нельзя курить». PASSO 5: «Его зовут Андрей» (ele se chama Andrei) usa a 3ª pessoa do plural «зовут» sem sujeito. PASSO 6: no passado, os impessoais ficam no neutro: «Мне хотелось пить», «Нам повезло».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Говорят, что завтра будет дождь.', traducao: 'Dizem que amanhã vai chover.' }, { frase: 'Здесь не курят.', traducao: 'Aqui não se fuma.' }, { frase: 'Магазин откроют в мае.', traducao: 'A loja será aberta em maio.' }, { frase: 'Мне кажется, что он прав.', traducao: 'Parece-me que ele tem razão.' }, { frase: 'Мне хочется спать.', traducao: 'Tenho vontade de dormir.' }, { frase: 'Мне не спится.', traducao: 'Não consigo dormir.' }, { frase: 'Здесь нельзя курить.', traducao: 'Aqui é proibido fumar.' },
        ],
        erros: [['Они говорят, что завтра дождь. (impessoal)', 'Говорят, что завтра будет дождь.', 'Sem «они»: indefinido.'], ['Я не сплю.', 'Мне не спится.', 'Para «não consigo dormir», use o impessoal.'], ['Здесь нельзя курю.', 'Здесь нельзя курить.', '«нельзя» + infinitivo.']],
      }),
      producao(5, 'Diga: «Говорят, что … Здесь не курят. Мне кажется, что … Мне хочется … Мне не спится.»'),
    ]),
    sessao('S3', 'Um prédio novo', [
      revisao(5, 'Escreva 5 frases com «говорят», «мне кажется», «мне хочется», «нельзя» e «не спится».'),
      gramatica(10, 'Descrever sem dizer quem faz', 'PASSO 1: para notícias: «Говорят, что дом построен немецкой фирмой». PASSO 2: para regras: «Здесь нельзя шуметь после десяти». PASSO 3: para opiniões: «Мне кажется, что здесь будет хороший район». PASSO 4: para estados: «Магазин пока закрыт». PASSO 5: para planos de terceiros: «Его откроют в мае».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Дом построен немецкой фирмой.', traducao: 'A casa foi construída por uma firma alemã.' }, { frase: 'Здесь нельзя шуметь после десяти.', traducao: 'Aqui não se pode fazer barulho depois das dez.' }, { frase: 'Магазин пока закрыт.', traducao: 'A loja ainda está fechada.' }, { frase: 'Его откроют в мае.', traducao: 'Vão abri-la em maio.' },
        ],
      }),
      dialogo(8, 'Новый дом / A casa nova', 'Anya e Pasha conversam diante de um prédio novo.', [
        ['Аня', 'Смотри, этот дом построен в прошлом году.', 'Olhe, esta casa foi construída no ano passado.'], ['Паша', 'Он красивый. Говорят, что он построен немецкой фирмой.', 'É bonita. Dizem que foi construída por uma firma alemã.'], ['Аня', 'А магазин рядом уже открыт?', 'E a loja ao lado já está aberta?'],
        ['Паша', 'Нет, он ещё закрыт. Говорят, что его откроют в мае.', 'Não, ainda está fechada. Dizem que vão abri-la em maio.'], ['Аня', 'Мне кажется, что здесь будет хороший район.', 'Parece-me que aqui será um bom bairro.'], ['Паша', 'Да. Здесь нельзя шуметь после десяти, так сказано в правилах.', 'Sim. Aqui não se pode fazer barulho depois das dez, está dito nas regras.'],
        ['Аня', 'Отлично. Тогда мне хочется переехать сюда.', 'Ótimo. Então tenho vontade de me mudar para cá.'], ['Паша', 'Мне тоже! Письмо с заявкой уже написано.', 'Eu também! A carta com o pedido já está escrita.'],
      ]),
      producao(7, 'Descreva em voz alta um lugar da sua cidade usando passiva, «говорят» e «нельзя».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre um lugar, com passiva e impessoais.'),
      exercicios(20, [
        lacuna('Магазин ___. (está fechado)', ['закрыт', 'закрыта', 'закрыто'], 'закрыт', '«магазин» é masculino.'), lacuna('Дверь ___. (está fechada)', ['закрыта', 'закрыт', 'закрыто'], 'закрыта', '«дверь» é feminino.'), lacuna('Письмо ___. (está escrito)', ['написано', 'написан', 'написана'], 'написано', '«письмо» é neutro.'),
        lacuna('Дом ___ рабочими. (construído)', ['построен', 'строится', 'построил'], 'построен', 'Particípio curto + instrumental.'), lacuna('Дом ___. (está sendo construída)', ['строится', 'построен', 'строит'], 'строится', 'Imperfectivo: -ся.'), lacuna('___, что завтра будет дождь. (dizem)', ['Говорят', 'Говорит', 'Говорил'], 'Говорят', '3ª pessoa do plural indefinida.'),
        mc('«Здесь не курят» significa:', ['aqui não se fuma', 'ele não fuma', 'eu não fumo'], 'aqui não se fuma', 'Indefinido.'), mc('«Мне не спится» significa:', ['não consigo dormir', 'não durmo nunca', 'durmo muito'], 'não consigo dormir', 'Impessoal.'), mc('O agente da passiva vai ao:', ['instrumental', 'genitivo', 'dativo'], 'instrumental', '«построен рабочими».'),
        ordem('Ordene: «Магазин пока закрыт.»', ['Магазин', 'пока', 'закрыт'], 'Магазин пока закрыт.', 'Particípio curto.'), ouvir('Здесь нельзя шуметь после десяти', ['Здесь нельзя шуметь после десяти', 'Здесь можно шуметь', 'Здесь не курят'], 'Здесь нельзя шуметь после десяти', '«нельзя» + infinitivo.'), ditado('Мне кажется, что он прав', 'Impessoal.'),
        livre('Escreva 5 frases: uma passiva com particípio curto, uma com -ся, uma com «говорят», uma com «нельзя» e uma com «мне хочется».', 'Магазин закрыт. Дом строится. Говорят, что завтра будет дождь. Здесь нельзя курить. Мне хочется спать.'),
      ]),
      producao(5, 'Grave-se descrevendo uma rua com passiva e impessoais.'),
    ]),
  ],
});
