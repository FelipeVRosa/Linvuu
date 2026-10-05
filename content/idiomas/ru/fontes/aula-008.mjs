import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 8, titulo: 'Onde eu moro e trabalho', nivel: 'a1',
  objetivo: 'Dizer onde você mora e trabalha com «жить» e «работать», e usar «в» e «на» com o caso preposicional.',
  nota: 'Agora você diz onde mora, onde trabalha e o que faz. Próxima aula: verbos do dia a dia e o que você gosta de fazer.',
  sessoes: [
    sessao('S1', 'Os verbos «жить» e «работать»', [
      revisao(5, 'Escreva: Я из Бразилии. У меня нет сестры. Я врач.'),
      palavras(12, [
        ['жить', 'zhit', 'morar, viver', 'to live'], ['работать', 'rabótat', 'trabalhar', 'to work'], ['изучать', 'izuchát', 'estudar (uma matéria), aprender', 'to study'],
        ['язык', 'yazýk', 'língua, idioma', 'language'], ['школа', 'shkóla', 'escola', 'school'], ['университет', 'universitét', 'universidade', 'university'],
        ['офис', 'ófis', 'escritório', 'office'], ['квартира', 'kvartíra', 'apartamento', 'apartment'], ['улица', 'úlitsa', 'rua', 'street'],
        ['страна', 'straná', 'país', 'country'], ['Москва', 'Moskvá', 'Moscou', 'Moscow'], ['Бразилия', 'Brazília', 'Brasil', 'Brazil'],
      ]),
      gramatica(8, 'Presente dos verbos em -ть', 'Tire o -ть e acrescente as terminações -ю, -ешь, -ет, -ем, -ете, -ют. O verbo «жить» é um pouco diferente (живу, живёшь...), mas usa as mesmas terminações.', {
        tabela: [
          { pronome: 'я', работать: 'работаю', жить: 'живу' }, { pronome: 'ты', работать: 'работаешь', жить: 'живёшь' }, { pronome: 'он / она', работать: 'работает', жить: 'живёт' },
          { pronome: 'мы', работать: 'работаем', жить: 'живём' }, { pronome: 'вы', работать: 'работаете', жить: 'живёте' }, { pronome: 'они', работать: 'работают', жить: 'живут' },
        ],
      }),
      producao(5, 'Diga: «Я живу. Я работаю. Я изучаю русский язык.»'),
    ]),
    sessao('S2', 'Onde? «в» e «на»', [
      revisao(5, 'Escreva a conjugação de «работать» (6 formas) de memória.'),
      palavras(8, [
        ['где', 'gdie', 'onde', 'where'], ['дома', 'dóma', 'em casa', 'at home'], ['далеко', 'daliekó', 'longe', 'far'], ['рядом', 'riádom', 'perto', 'nearby'],
        ['урок', 'urók', 'aula, lição', 'lesson'], ['магазин', 'magazín', 'loja', 'shop'], ['кафе', 'kafé', 'café (lugar)', 'café'], ['работа', 'rabóta', 'trabalho', 'work, job'],
      ]),
      gramatica(12, 'Preposicional: dizer onde', 'Para dizer onde, use «в» (dentro de) ou «на» (em cima de; também em eventos e alguns lugares) e a palavra ganha -е: дом → в доме. Palavras em -ия fazem -ии: в Бразилии, в России. Com «работа», «улица» e «урок» usa-se «на»: на работе, на улице, на уроке. «Кафе» não muda: в кафе.', {
        tabela: [
          { nominativo: 'дом', preposicional: 'в доме', pt: 'na casa' }, { nominativo: 'город', preposicional: 'в городе', pt: 'na cidade' }, { nominativo: 'школа', preposicional: 'в школе', pt: 'na escola' },
          { nominativo: 'офис', preposicional: 'в офисе', pt: 'no escritório' }, { nominativo: 'Москва', preposicional: 'в Москве', pt: 'em Moscou' }, { nominativo: 'Бразилия', preposicional: 'в Бразилии', pt: 'no Brasil' },
          { nominativo: 'улица', preposicional: 'на улице', pt: 'na rua' }, { nominativo: 'работа', preposicional: 'на работе', pt: 'no trabalho' },
        ],
      }),
      producao(5, 'Diga onde você mora e onde trabalha ou estuda: «Я живу в … Я работаю в …»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 3 frases: «Я живу в …», «Я работаю в …», «Где ты живёшь?»'),
      dialogo(12, 'Где ты живёшь? / Onde você mora?', 'Dois colegas conversam no intervalo.', [
        ['Антон', 'Где ты живёшь?', 'Onde você mora?'], ['Света', 'Я живу в Москве. А ты?', 'Eu moro em Moscou. E você?'], ['Антон', 'Я живу в Бразилии, в Сан-Паулу.', 'Eu moro no Brasil, em São Paulo.'],
        ['Света', 'Ты работаешь?', 'Você trabalha?'], ['Антон', 'Да, я работаю в офисе. А ты?', 'Sim, trabalho num escritório. E você?'], ['Света', 'Я работаю в школе. Я учитель. Это рядом.', 'Trabalho numa escola. Sou professora. Fica perto.'],
        ['Антон', 'Хорошо! А я работаю далеко.', 'Que bom! Eu trabalho longe.'],
      ]),
      texto(8, 'Мой город / Minha cidade', 'Меня зовут Антон. Я живу в Бразилии, в городе Сан-Паулу. Я работаю в офисе. Мой офис большой и новый. Там работают мои друзья.',
        'Eu me chamo Antón. Moro no Brasil, na cidade de São Paulo. Trabalho num escritório. Meu escritório é grande e novo. Meus amigos trabalham lá.',
        [['Где живёт Антон?', 'В Бразилии, в Сан-Паулу'], ['Где он работает?', 'В офисе'], ['Кто там работает?', 'Его друзья']]),
      producao(5, 'Repita o diálogo e depois responda em voz alta: «Где ты живёшь? Ты работаешь?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 3 frases com «в» e 2 com «на».'),
      exercicios(20, [
        mc('«Я живу в Москве» significa:', ['Moro em Moscou', 'Trabalho em Moscou', 'Sou de Moscou'], 'Moro em Moscou', '«в» + preposicional = onde.'),
        lacuna('Он ___ в школе. (trabalha)', ['работает', 'работаю', 'работаешь'], 'работает', 'он → -ет.'),
        lacuna('Мы ___ в Бразилии. (moramos)', ['живём', 'живу', 'живёте'], 'живём', 'мы → -ём.'),
        mc('Preposicional de «дом»:', ['в доме', 'в дом', 'в дому'], 'в доме', 'Acrescente -е.'),
        ouvir('Где ты живёшь?', ['Где ты живёшь?', 'Где ты работаешь?', 'Откуда ты?'], 'Где ты живёшь?', '«живёшь» = você mora.'),
        ordem('Ordene: «Eu trabalho num escritório.»', ['офисе', 'в', 'Я', 'работаю'], 'Я работаю в офисе.', 'Sujeito + verbo + в + lugar.'),
        mc('Qual está correto?', ['Я живу в Бразилии', 'Я живу в Бразилия', 'Я живу из Бразилии'], 'Я живу в Бразилии', '-ия vira -ии.'),
        lacuna('Я сейчас на ___. (trabalho)', ['работе', 'работа', 'работу'], 'работе', '«на работе» = no trabalho.'),
        ditado('Я живу в Москве', 'Preposicional de Москва: в Москве.'),
        mc('«Они работают» significa:', ['Eles trabalham', 'Eles moram', 'Nós trabalhamos'], 'Eles trabalham', 'они → -ют.'),
        ordem('Ordene: «Nós moramos na cidade.»', ['городе', 'живём', 'Мы', 'в'], 'Мы живём в городе.', 'Mesmo padrão de «в» + -е.'),
        livre('Escreva 3 frases: onde você mora, onde trabalha ou estuda, e a pergunta «Onde você mora?».', 'Я живу в Бразилии. Я работаю в офисе. Где ты живёшь?'),
      ]),
      producao(5, 'Grave-se: «Меня зовут… Я живу в … Я работаю в …»'),
    ]),
  ],
});
