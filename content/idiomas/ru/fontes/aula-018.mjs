import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 18, titulo: 'Comida e restaurante', nivel: 'a1',
  objetivo: 'Pedir comida e bebida, dizer o que você quer, precisa e gosta, e usar «мне нужно», «можно» e «нельзя».',
  nota: 'Você pede comida, diz o que precisa e conversa num restaurante. Próxima aula: revisão e prova final do nível inicial.',
  sessoes: [
    sessao('S1', 'Comidas e bebidas', [
      revisao(5, 'Escreva 5 frases com «Я люблю …» e «Я хочу …».'),
      palavras(12, [
        ['мясо', 'miássa', 'carne', 'meat'], ['рыба', 'rýba', 'peixe', 'fish'], ['курица', 'kúritsa', 'frango', 'chicken'], ['рис', 'ris', 'arroz', 'rice'], ['картошка', 'kartóshka', 'batata', 'potato'], ['салат', 'saláht', 'salada', 'salad'],
        ['яблоко', 'iáblaka', 'maçã', 'apple'], ['сыр', 'syr', 'queijo', 'cheese'], ['яйцо', 'yitsó', 'ovo', 'egg'], ['масло', 'máslo', 'manteiga', 'butter'], ['пирог', 'piróg', 'torta', 'pie'], ['каша', 'kásha', 'mingau', 'porridge'],
      ]),
      gramatica(8, 'Pedir comida: o acusativo em ação', 'Quando você pede ou diz o que come, o alimento vai para o acusativo (o objeto direto). Só mudam as palavras femininas em -а: -а vira -у. Masculinos e neutros que não são seres vivos ficam iguais: «Я хочу рис», «Я хочу мясо», «Я хочу салат».', {
        tag: 'Casos',
        tabela: [
          { palavra: 'рыба', acusativo: 'рыбу', exemplo: 'Я хочу рыбу.' }, { palavra: 'курица', acusativo: 'курицу', exemplo: 'Я люблю курицу.' }, { palavra: 'картошка', acusativo: 'картошку', exemplo: 'Я хочу картошку.' },
          { palavra: 'каша', acusativo: 'кашу', exemplo: 'Я не люблю кашу.' }, { palavra: 'мясо', acusativo: 'мясо', exemplo: 'Я хочу мясо.' }, { palavra: 'рис', acusativo: 'рис', exemplo: 'Я люблю рис.' },
          { palavra: 'салат', acusativo: 'салат', exemplo: 'Я хочу салат.' }, { palavra: 'яблоко', acusativo: 'яблоко', exemplo: 'Я хочу яблоко.' },
        ],
      }),
      producao(5, 'Diga: «Я хочу рыбу и рис. Я люблю курицу. Я не люблю кашу.»'),
    ]),
    sessao('S2', 'Precisar, poder, não poder', [
      revisao(5, 'Escreva os pronomes no dativo: мне, тебе, ему, ей, нам, вам, им.'),
      palavras(8, [
        ['нужно', 'núzhna', 'é preciso', 'it is necessary'], ['можно', 'mózhna', 'pode-se, é permitido', 'may'], ['нельзя', 'nilziá', 'não pode, é proibido', 'must not'], ['надо', 'náda', 'é preciso (coloquial)', 'must'],
        ['лучше', 'lúchshe', 'melhor', 'better'], ['больше', 'bólshe', 'mais', 'more'], ['вкусно', 'fkúsna', 'gostoso', 'tasty'], ['пить', 'pit', 'beber', 'to drink'],
      ]),
      gramatica(12, 'Мне нужно, можно, нельзя', 'Em russo, muitas ideias de necessidade e permissão não têm um sujeito como «eu». Quem precisa vai para o dativo (мне, тебе, ему...) e a palavra «нужно» vem depois. Depois dela pode vir um verbo no infinitivo: «Мне нужно работать». Se vem um substantivo, a forma de «нужно» concorda com ele: «нужен» (masculino), «нужна» (feminino), «нужно» (neutro), «нужны» (plural). Já «можно» (pode-se) e «нельзя» (não se pode) nunca mudam: são advérbios.', {
        tag: 'Verbos',
        comparacao: 'em português dizemos «eu preciso de água» (sujeito eu). Em russo: «a mim é necessária água» (Мне нужна вода), e «нужна» concorda com a água.',
        tabela: [
          { coisa: 'хлеб (masculino)', forma: 'нужен', exemplo: 'Мне нужен хлеб.' }, { coisa: 'вода (feminino)', forma: 'нужна', exemplo: 'Мне нужна вода.' }, { coisa: 'молоко (neutro)', forma: 'нужно', exemplo: 'Мне нужно молоко.' },
          { coisa: 'деньги (plural)', forma: 'нужны', exemplo: 'Мне нужны деньги.' },
        ],
        exemplos: [['Мне нужно работать.', 'Eu preciso trabalhar.'], ['Можно воду, пожалуйста?', 'Posso pedir água, por favor?'], ['Здесь нельзя громко говорить.', 'Aqui não se pode falar alto.']],
        erros: [['Я нужно воду.', 'Мне нужна вода.', 'Quem precisa vai para o dativo (мне); o que se precisa concorda com «нужна».']],
      }),
      producao(5, 'Diga: «Мне нужен хлеб. Мне нужна вода. Мне нужно молоко. Можно воду, пожалуйста?»'),
    ]),
    sessao('S3', 'No restaurante', [
      revisao(5, 'Escreva um pedido de restaurante com 3 itens.'),
      dialogo(12, 'В ресторане / No restaurante', 'Dois clientes e um garçom.', [
        ['Официант', 'Добрый вечер! Что вы хотите?', 'Boa noite! O que desejam?'], ['Игорь', 'Добрый вечер! Мне, пожалуйста, суп и рыбу.', 'Boa noite! Para mim, por favor, sopa e peixe.'],
        ['Анна', 'А мне — курицу с рисом, пожалуйста.', 'E para mim, frango com arroz, por favor.'], ['Официант', 'Что вы хотите пить?', 'O que desejam beber?'],
        ['Игорь', 'Воду, пожалуйста. А Анне — чай.', 'Água, por favor. E para a Anna, chá.'], ['Анна', 'Да, чай с молоком.', 'Isso, chá com leite.'], ['Официант', 'Хорошо. Это всё?', 'Certo. É tudo?'], ['Игорь', 'Да, это всё. Спасибо!', 'Sim, é tudo. Obrigado!'],
      ]),
      texto(8, 'Мой любимый ресторан / Meu restaurante favorito', 'Мой любимый ресторан рядом с домом. Там вкусно и недорого. Я люблю рыбу и салат. Моя подруга любит мясо и картошку. Мы часто обедаем там в субботу. Нам нужно два часа, потому что мы любим говорить.',
        'Meu restaurante favorito fica perto de casa. Lá é gostoso e barato. Eu gosto de peixe e salada. Minha amiga gosta de carne e batata. Nós almoçamos lá com frequência no sábado. Precisamos de duas horas, porque gostamos de conversar.',
        [['Где ресторан?', 'Рядом с домом'], ['Что любит подруга?', 'Мясо и картошку'], ['Когда они обедают там?', 'В субботу']]),
      producao(5, 'Faça em voz alta um pedido completo: prato, bebida e «Это всё. Спасибо!»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases com «Мне нужен / нужна / нужно / нужны».'),
      exercicios(20, [
        lacuna('Я хочу ___. (peixe)', ['рыба', 'рыбу', 'рыбы'], 'рыбу', 'Acusativo: -а → -у.'),
        lacuna('Мне ___ хлеб. (preciso de)', ['нужен', 'нужна', 'нужно'], 'нужен', 'хлеб é masculino.'),
        lacuna('Мне ___ вода.', ['нужна', 'нужен', 'нужно'], 'нужна', 'вода é feminino.'),
        lacuna('Мне ___ молоко.', ['нужно', 'нужна', 'нужны'], 'нужно', 'молоко é neutro.'),
        lacuna('Мне ___ деньги.', ['нужны', 'нужна', 'нужно'], 'нужны', 'деньги é plural.'),
        mc('«Можно воду?» significa:', ['Posso pedir água?', 'Eu bebo água', 'A água é boa'], 'Posso pedir água?', '«можно» = pode-se, é permitido.'),
        mc('«Здесь нельзя громко говорить» significa:', ['Aqui não se pode falar alto', 'Aqui se pode falar alto', 'Aqui ninguém fala'], 'Aqui não se pode falar alto', '«нельзя» = não pode.'),
        mc('«Мне нужно работать» significa:', ['Eu preciso trabalhar', 'Eu quero trabalhar', 'Eu trabalho'], 'Eu preciso trabalhar', '«нужно» + infinitivo.'),
        ouvir('Что вы хотите?', ['Что вы хотите?', 'Что вы делаете?', 'Где вы живёте?'], 'Что вы хотите?', '«хотите» = o senhor quer.'),
        ordem('Ordene: «Eu quero sopa e peixe.»', ['суп', 'и', 'рыбу', 'хочу', 'Я'], 'Я хочу суп и рыбу.', 'Я + хочу + objetos (рыба → рыбу).'),
        ditado('Мне нужна вода', 'нужна concorda com «вода».'),
        mc('«Я нужно воду» está errado porque:', ['quem precisa vai para o dativo: Мне нужна вода', 'falta o verbo «ser»', '«вода» é masculino'], 'quem precisa vai para o dativo: Мне нужна вода', 'Dativo para quem precisa.'),
        mc('«Вкусно» é:', ['advérbio (não muda)', 'adjetivo', 'verbo'], 'advérbio (não muda)', 'Advérbios nunca mudam.'),
        livre('Escreva um pedido de restaurante com 4 frases.', 'Добрый вечер! Я хочу суп и рыбу. Можно воду, пожалуйста? Это всё. Спасибо!'),
      ]),
      producao(5, 'Grave-se: faça um pedido de restaurante completo, com bebida.'),
    ]),
  ],
});
