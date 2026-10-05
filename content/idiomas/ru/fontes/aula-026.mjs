import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 26, titulo: 'Gramática: o instrumental', nivel: 'a2',
  objetivo: 'Formar o instrumental no singular e no plural e usá-lo para «com», instrumento, profissão, estações do ano e as preposições de lugar.',
  nota: 'Você domina o instrumental. Próxima aula: o genitivo completo.',
  sessoes: [
    sessao('S1', 'As formas do instrumental', [
      revisao(5, 'Escreva o dativo de 5 palavras e os pronomes no dativo.'),
      gramatica(14, 'Instrumental: com quem, com o quê?', 'O instrumental responde a «кем? чем?». Em português usamos «com» e «por meio de». Singular: masculino duro: -ом (брат → братом); masculino suave (-й, -ь): -ем (учитель → учителем, музей → музеем). Depois de ж, ч, ш, щ e ц: -ем se o final não tem acento (муж → мужем) e -ом se tem (врач → врачом). Feminino: -а → -ой (мама → мамой); -я → -ей (неделя → неделей); -ь → -ью (ночь → ночью, дочь → дочерью). Neutro: -о → -ом (окно → окном); -е → -ем (море → морем). Plural, todos os gêneros: -ами ou -ями (книги → книгами, студенты → студентами). Irregulares: друзья → друзьями, дети → детьми, люди → людьми.', {
        tag: 'Casos',
        comparacao: 'em português «com meu irmão» não muda a palavra «irmão». Em russo o nome muda: «с братом».',
        tabelas: [
          { titulo: 'Singular', linhas: [
            { nominativo: 'брат', instrumental: 'братом', exemplo: 'с братом' }, { nominativo: 'друг', instrumental: 'другом', exemplo: 'с другом' }, { nominativo: 'учитель', instrumental: 'учителем', exemplo: 'с учителем' },
            { nominativo: 'врач', instrumental: 'врачом', exemplo: 'работать врачом' }, { nominativo: 'муж', instrumental: 'мужем', exemplo: 'с мужем' }, { nominativo: 'мама', instrumental: 'мамой', exemplo: 'с мамой' },
            { nominativo: 'подруга', instrumental: 'подругой', exemplo: 'с подругой' }, { nominativo: 'дочь', instrumental: 'дочерью', exemplo: 'с дочерью' }, { nominativo: 'окно', instrumental: 'окном', exemplo: 'перед окном' }, { nominativo: 'море', instrumental: 'морем', exemplo: 'рядом с морем' },
          ] },
          { titulo: 'Plural', linhas: [
            { nominativo: 'студенты', instrumental: 'студентами', exemplo: 'со студентами' }, { nominativo: 'книги', instrumental: 'книгами', exemplo: 'с книгами' }, { nominativo: 'друзья', instrumental: 'друзьями', exemplo: 'с друзьями' },
            { nominativo: 'дети', instrumental: 'детьми', exemplo: 'с детьми' }, { nominativo: 'люди', instrumental: 'людьми', exemplo: 'с людьми' }, { nominativo: 'родители', instrumental: 'родителями', exemplo: 'с родителями' },
          ] },
          { titulo: 'Pronomes (depois de «с» ganham -н- na 3ª pessoa)', linhas: [
            { nominativo: 'я', instrumental: 'мной', exemplo: 'со мной' }, { nominativo: 'ты', instrumental: 'тобой', exemplo: 'с тобой' }, { nominativo: 'он / оно', instrumental: 'им', exemplo: 'с ним' }, { nominativo: 'она', instrumental: 'ей', exemplo: 'с ней' },
            { nominativo: 'мы', instrumental: 'нами', exemplo: 'с нами' }, { nominativo: 'вы', instrumental: 'вами', exemplo: 'с вами' }, { nominativo: 'они', instrumental: 'ими', exemplo: 'с ними' },
          ] },
        ],
        erros: [['Я иду с брат.', 'Я иду с братом.', '«с» pede instrumental.'], ['Я говорю с он.', 'Я говорю с ним.', 'Pronome no instrumental: с ним.']],
      }),
      palavras(6, [
        ['карандаш', 'karandásh', 'lápis', 'pencil'], ['нож', 'nozh', 'faca', 'knife'], ['вилка', 'vílka', 'garfo', 'fork'], ['ложка', 'lóshka', 'colher', 'spoon'], ['тарелка', 'tarélka', 'prato', 'plate'], ['стакан', 'stakán', 'copo', 'glass'],
      ]),
      producao(5, 'Diga: «Я работаю с братом. Я говорю с другом. Я ем ложкой.»'),
    ]),
    sessao('S2', 'Usos do instrumental', [
      revisao(5, 'Escreva o instrumental de: брат, мама, друг, подруга, дети.'),
      palavras(8, [
        ['зима', 'zimá', 'inverno', 'winter'], ['весна', 'visná', 'primavera', 'spring'], ['лето', 'liéta', 'verão', 'summer'], ['осень', 'ósien', 'outono', 'autumn'],
        ['зимой', 'zimói', 'no inverno', 'in winter'], ['весной', 'visnói', 'na primavera', 'in spring'], ['летом', 'liétam', 'no verão', 'in summer'], ['осенью', 'ósienyu', 'no outono', 'in autumn'],
      ]),
      gramatica(12, 'Quando usar o instrumental', 'Cinco usos principais. (1) Companhia, com «с»: «с другом». (2) Instrumento ou meio, SEM preposição: «писать ручкой», «есть ложкой». (3) Profissão com «работать» e «быть»: «Я работаю врачом», «Он хочет быть учителем». (4) Tempo: «утром, днём, вечером, ночью» e as estações «зимой, весной, летом, осенью». (5) Lugar, com as preposições «над» (acima), «под» (embaixo), «перед» (diante), «за» (atrás) e «между» (entre), e também «рядом с» (ao lado de): «Лампа стоит над столом».', {
        tag: 'Casos',
        tabelas: [
          { titulo: 'Os usos', linhas: [
            { uso: 'companhia', exemplo: 'Я иду с другом.' }, { uso: 'instrumento', exemplo: 'Я пишу ручкой. Я ем вилкой.' }, { uso: 'profissão', exemplo: 'Я работаю врачом.' }, { uso: 'tempo', exemplo: 'Зимой я читаю. Вечером я дома.' },
          ] },
          { titulo: 'Preposições de lugar com instrumental', linhas: [
            { preposicao: 'над', significado: 'acima de', exemplo: 'над столом' }, { preposicao: 'под', significado: 'embaixo de', exemplo: 'под столом' }, { preposicao: 'перед', significado: 'diante de', exemplo: 'перед домом' },
            { preposicao: 'за', significado: 'atrás de', exemplo: 'за домом' }, { preposicao: 'между', significado: 'entre', exemplo: 'между столом и стулом' }, { preposicao: 'рядом с', significado: 'ao lado de', exemplo: 'рядом с домом' },
          ] },
        ],
        erros: [['Я работаю врач.', 'Я работаю врачом.', 'Com «работать», a profissão vai para o instrumental.'], ['Я пишу с ручкой.', 'Я пишу ручкой.', 'Instrumento: sem preposição.']],
      }),
      producao(5, 'Diga: «Зимой я читаю. Летом я гуляю. Я работаю учителем. Лампа стоит над столом.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases com «с» + instrumental.'),
      dialogo(12, 'С кем ты работаешь? / Com quem você trabalha?', 'Dois colegas conversam.', [
        ['Ира', 'Кем ты работаешь, Андрей?', 'Em que você trabalha, Andrei?'], ['Андрей', 'Я работаю инженером. А ты?', 'Trabalho como engenheiro. E você?'], ['Ира', 'Я работаю врачом. Я работаю с детьми.', 'Trabalho como médica. Trabalho com crianças.'],
        ['Андрей', 'Тебе нравится твоя работа?', 'Você gosta do seu trabalho?'], ['Ира', 'Да, очень! А летом я езжу с семьёй на море.', 'Sim, muito! E no verão vou com a família à praia.'],
        ['Андрей', 'Хорошо! А я зимой хожу с друзьями в горы.', 'Que bom! E eu no inverno vou com amigos às montanhas.'], ['Ира', 'Отлично! Зимой холодно, но это интересно!', 'Ótimo! No inverno faz frio, mas é interessante!'], ['Андрей', 'Да, мне нравится!', 'Sim, eu gosto!'],
      ]),
      texto(8, 'Лето с семьёй / O verão com a família', 'Летом мы с семьёй едем на море. Я еду с мамой, с папой и с братом. Мы живём рядом с морем. Утром мы гуляем с собакой, днём отдыхаем, а вечером ужинаем с друзьями. Мне очень нравится лето!',
        'No verão vamos com a família à praia. Eu vou com a mãe, com o pai e com o irmão. Moramos perto do mar. De manhã passeamos com o cachorro, durante o dia descansamos e à noite jantamos com amigos. Eu gosto muito do verão!',
        [['С кем автор едет на море?', 'С мамой, с папой и с братом'], ['Где они живут?', 'Рядом с морем'], ['С кем они ужинают?', 'С друзьями']]),
      producao(5, 'Conte o que você faz no verão e com quem.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: com quem vai, o que faz no verão, onde fica uma lâmpada e a sua profissão.'),
      exercicios(20, [
        lacuna('Я иду с ___. (irmão)', ['братом', 'брат', 'брату'], 'братом', '«с» + instrumental.'),
        lacuna('Я говорю с ___. (mãe)', ['мамой', 'мама', 'маме'], 'мамой', 'Feminino: -а → -ой.'),
        lacuna('Я работаю ___. (como médico)', ['врачом', 'врач', 'врача'], 'врачом', 'Profissão com «работать»: instrumental.'),
        lacuna('Я пишу ___. (com caneta)', ['ручкой', 'ручка', 'ручку'], 'ручкой', 'Instrumento: sem preposição.'),
        lacuna('Я ем ___. (com colher)', ['ложкой', 'ложка', 'ложку'], 'ложкой', 'Instrumento: sem preposição.'),
        mc('Instrumental de «друзья»:', ['друзьями', 'друзьям', 'друзей'], 'друзьями', 'Irregular, mas termina em -ями.'),
        mc('Instrumental de «дети»:', ['детьми', 'детям', 'детей'], 'детьми', 'Irregular: детьми.'),
        lacuna('Я иду с ___. (com ele)', ['ним', 'его', 'он'], 'ним', 'Depois de «с», o pronome ganha н-.'),
        mc('«Lâmpada acima da mesa»:', ['над столом', 'над стол', 'над столе'], 'над столом', '«над» pede instrumental.'),
        mc('Qual está correto?', ['перед домом', 'перед дома', 'перед доме'], 'перед домом', '«перед» pede instrumental.'),
        lacuna('___ я люблю читать. (no inverno)', ['Зимой', 'Зима', 'Зиму'], 'Зимой', 'Estação do ano: instrumental.'),
        lacuna('Летом мы едем ___ море.', ['на', 'в', 'из'], 'на', '«на море».'),
        ouvir('Я работаю врачом', ['Я работаю врачом', 'Я работаю с врачом', 'Я работаю врач'], 'Я работаю врачом', 'Profissão: instrumental.'),
        ditado('Я иду с другом', '«с» + instrumental.'),
        livre('Escreva 4 frases: com quem você vai, o que faz no verão, onde está uma lâmpada e a sua profissão.', 'Я иду с другом. Летом я гуляю. Лампа стоит над столом. Я работаю учителем.'),
      ]),
      producao(5, 'Grave-se contando o que você faz em cada estação do ano e com quem.'),
    ]),
  ],
});
