import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 24, titulo: 'Gramática: verbos de movimento', nivel: 'a2',
  objetivo: 'Usar os verbos de movimento mais frequentes: идти/ходить, ехать/ездить, лететь/летать, бежать/бегать e os prefixos при-, у-, в-, вы- e по-.',
  nota: 'Você escolhe os verbos de movimento certos. Próxima aula: o dativo.',
  sessoes: [
    sessao('S1', 'Duas formas de «ir»', [
      revisao(5, 'Escreva as 6 formas de «идти» e de «ехать».'),
      gramatica(12, 'Determinado × indeterminado', 'Em português «ir» serve para tudo. Em russo, os verbos de movimento têm DOIS verbos para cada ideia. O verbo determinado descreve uma ação que acontece agora, numa única direção: «идти», «ехать». O verbo indeterminado descreve hábito, ida e volta ou capacidade: «ходить», «ездить». Além disso, o russo separa o MEIO: a pé (идти / ходить) × de transporte (ехать / ездить). Pergunta-guia: estou indo agora, numa direção (идти / ехать)? Ou é costume, ida e volta, ou capacidade (ходить / ездить)? No passado, «ходил» pode significar «fui e voltei». Com meios de transporte usa-se «на» + preposicional: на автобусе, на метро, на машине.', {
        tag: 'Verbos de movimento',
        comparacao: 'em português o mesmo «ir» serve para a pé, de ônibus, agora ou todos os dias. O russo escolhe o verbo pelo meio e pela situação.',
        tabelas: [
          { titulo: 'Os dois pares', linhas: [
            { significado: 'a pé', determinado: 'идти', indeterminado: 'ходить', pt: 'ir a pé' }, { significado: 'de transporte', determinado: 'ехать', indeterminado: 'ездить', pt: 'ir de transporte' },
          ] },
          { titulo: 'Conjugação dos indeterminados', linhas: [
            { pronome: 'я', ходить: 'хожу', ездить: 'езжу' }, { pronome: 'ты', ходить: 'ходишь', ездить: 'ездишь' }, { pronome: 'он / она', ходить: 'ходит', ездить: 'ездит' },
            { pronome: 'мы', ходить: 'ходим', ездить: 'ездим' }, { pronome: 'вы', ходить: 'ходите', ездить: 'ездите' }, { pronome: 'они', ходить: 'ходят', ездить: 'ездят' },
          ] },
        ],
        exemplos: [['Я иду в магазин.', 'Eu estou indo à loja (agora).'], ['Я хожу в магазин каждый день.', 'Eu vou à loja todo dia (hábito).'], ['Он едет на работу.', 'Ele está indo ao trabalho (agora).'], ['Он ездит на работу на автобусе.', 'Ele vai ao trabalho de ônibus (sempre).']],
        erros: [['Я иду на работу на автобусе.', 'Я еду на работу на автобусе.', 'Com transporte use «ехать», não «идти».'], ['Я иду в магазин каждый день.', 'Я хожу в магазин каждый день.', 'Hábito pede o indeterminado: ходить.']],
      }),
      palavras(8, [
        ['автобус', 'aftóbus', 'ônibus', 'bus'], ['метро', 'mitró', 'metrô (não muda)', 'metro'], ['поезд', 'póist', 'trem', 'train'], ['самолёт', 'samaliót', 'avião', 'plane'],
        ['машина', 'mashína', 'carro', 'car'], ['велосипед', 'vilasipiét', 'bicicleta', 'bicycle'], ['пешком', 'pishkóm', 'a pé', 'on foot'], ['такси', 'taksí', 'táxi (não muda)', 'taxi'],
      ]),
      producao(5, 'Diga: «Я иду в магазин. Я хожу в магазин каждый день. Я еду на работу. Я езжу на работу на автобусе.»'),
    ]),
    sessao('S2', 'Voar, correr, chegar e sair', [
      revisao(5, 'Escreva 4 frases com «идти / ходить» e 4 com «ехать / ездить».'),
      palavras(8, [
        ['лететь', 'litiét', 'voar (determinado: лечу, летишь)', 'to fly'], ['летать', 'litát', 'voar (indeterminado)', 'to fly (habitually)'], ['бежать', 'bizhát', 'correr (determinado: бегу, бежишь)', 'to run'], ['бегать', 'biégat', 'correr (indeterminado)', 'to run (habitually)'],
        ['приходить', 'prikhadít', 'chegar a pé', 'to arrive'], ['уходить', 'ukhadít', 'sair, ir embora a pé', 'to leave'], ['приезжать', 'priyezzhát', 'chegar de transporte', 'to arrive by vehicle'], ['уезжать', 'uyezzhát', 'partir de transporte', 'to leave by vehicle'],
      ]),
      gramatica(12, 'Prefixos de direção e o futuro com по-', 'Os verbos de movimento aceitam prefixos que dizem a direção: при- (chegar), у- (ir embora), в- (entrar), вы- (sair de dentro). Exemplos a pé: приходить, уходить, входить, выходить. Com transporte: приезжать, уезжать, въезжать, выезжать. O prefixo «по-» forma o perfectivo de «идти» e «ехать»: «пойти» e «поехать». Eles servem para o futuro («Завтра я пойду в магазин» = amanhã vou à loja) e para dizer que alguém partiu («Я поехал на работу» = saí para o trabalho). No passado: пошёл, пошла, пошли; поехал, поехала, поехали.', {
        tag: 'Verbos de movimento',
        tabelas: [
          { titulo: 'Direção', linhas: [
            { ideia: 'chegar', a_pe: 'приходить / прийти', transporte: 'приезжать / приехать' }, { ideia: 'ir embora', a_pe: 'уходить / уйти', transporte: 'уезжать / уехать' },
            { ideia: 'entrar', a_pe: 'входить / войти', transporte: 'въезжать / въехать' }, { ideia: 'sair de dentro', a_pe: 'выходить / выйти', transporte: 'выезжать / выехать' },
          ] },
          { titulo: 'Futuro de «пойти» e «поехать»', linhas: [
            { pronome: 'я', пойти: 'пойду', поехать: 'поеду' }, { pronome: 'ты', пойти: 'пойдёшь', поехать: 'поедешь' }, { pronome: 'он / она', пойти: 'пойдёт', поехать: 'поедет' },
            { pronome: 'мы', пойти: 'пойдём', поехать: 'поедем' }, { pronome: 'вы', пойти: 'пойдёте', поехать: 'поедете' }, { pronome: 'они', пойти: 'пойдут', поехать: 'поедут' },
          ] },
        ],
        erros: [['Я идти завтра в магазин.', 'Завтра я пойду в магазин.', 'Para o futuro use «по-» + forma conjugada (пойду), nunca o infinitivo sozinho.'], ['Я прихожу на работу на автобусе.', 'Я приезжаю на работу на автобусе.', 'Com transporte use «приезжать» (приходить é a pé).']],
      }),
      producao(5, 'Diga: «Я прихожу на работу в девять часов. Я ухожу в пять. Завтра я поеду в Москву.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 4 frases sobre como você vai ao trabalho ou à escola.'),
      dialogo(12, 'Как ты ездишь на работу? / Como você vai ao trabalho?', 'Dois colegas comparam o caminho.', [
        ['Борис', 'Как ты ездишь на работу?', 'Como você vai ao trabalho?'], ['Нина', 'Я езжу на метро. А ты?', 'Eu vou de metrô. E você?'], ['Борис', 'Я хожу пешком. Моя работа рядом.', 'Eu vou a pé. Meu trabalho é perto.'],
        ['Нина', 'Ты всегда ходишь пешком?', 'Você sempre vai a pé?'], ['Борис', 'Нет, иногда я езжу на автобусе.', 'Não, às vezes vou de ônibus.'], ['Нина', 'А завтра ты пойдёшь на работу пешком?', 'E amanhã você vai a pé para o trabalho?'],
        ['Борис', 'Да, завтра я пойду пешком. А ты поедешь на метро?', 'Sim, amanhã vou a pé. E você vai de metrô?'], ['Нина', 'Да, как всегда!', 'Sim, como sempre!'],
      ]),
      texto(8, 'Мой путь на работу / Meu caminho para o trabalho', 'Я живу в Москве. Каждый день я хожу на работу пешком, потому что мой офис рядом. Иногда я езжу на автобусе. Мой друг живёт далеко. Он ездит на работу на метро. Он выходит из дома в семь часов и приезжает на работу в восемь. Завтра я пойду на работу пешком, а он поедет на метро.',
        'Eu moro em Moscou. Todo dia vou a pé para o trabalho, porque meu escritório é perto. Às vezes vou de ônibus. Meu amigo mora longe. Ele vai ao trabalho de metrô. Ele sai de casa às sete horas e chega ao trabalho às oito. Amanhã vou a pé para o trabalho, e ele vai de metrô.',
        [['Как автор ходит на работу?', 'Пешком'], ['Как ездит друг?', 'На метро'], ['Когда друг приезжает на работу?', 'В восемь часов']]),
      producao(5, 'Conte como você vai ao trabalho ou à escola todos os dias e como irá amanhã.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases com verbos de movimento: agora, hábito, futuro e passado.'),
      exercicios(20, [
        mc('Agora, numa direção, a pé:', ['идти', 'ходить', 'ехать'], 'идти', 'Determinado: agora, numa direção.'),
        mc('Hábito, a pé:', ['ходить', 'идти', 'ехать'], 'ходить', 'Indeterminado: hábito.'),
        lacuna('Каждый день я ___ в магазин. (a pé; hábito)', ['хожу', 'иду', 'еду'], 'хожу', 'Hábito: ходить.'),
        lacuna('Сейчас я ___ на работу. (de transporte)', ['еду', 'езжу', 'иду'], 'еду', 'Agora, de transporte: ехать.'),
        lacuna('Он всегда ___ на автобусе.', ['ездит', 'едет', 'ходит'], 'ездит', 'Hábito, de transporte: ездить.'),
        lacuna('Завтра я ___ в магазин. (a pé)', ['пойду', 'иду', 'хожу'], 'пойду', 'Futuro: по- + forma conjugada.'),
        lacuna('Завтра мы ___ в Москву. (de transporte)', ['поедем', 'едем', 'ездим'], 'поедем', 'Futuro: поехать.'),
        mc('«Я приезжаю на работу на метро» significa:', ['Eu chego ao trabalho de metrô', 'Eu saio de metrô', 'Eu moro no metrô'], 'Eu chego ao trabalho de metrô', 'приезжать = chegar de transporte.'),
        mc('«Уходить» significa:', ['ir embora, sair', 'chegar', 'entrar'], 'ir embora, sair', 'Prefixo у-: sair, ir embora.'),
        mc('Passado de «пойти» (ela):', ['пошла', 'пошёл', 'пошли'], 'пошла', 'Feminino: пошла.'),
        ouvir('Я хожу на работу пешком', ['Я хожу на работу пешком', 'Я иду на работу пешком', 'Я езжу на работу'], 'Я хожу на работу пешком', 'ходить = hábito a pé.'),
        ordem('Ordene: «Eu vou ao trabalho de ônibus todos os dias.»', ['автобусе', 'на', 'езжу', 'работу', 'Я', 'на'], 'Я езжу на работу на автобусе.', 'на + acusativo (destino); на + preposicional (meio).'),
        ditado('Завтра я поеду в Москву', 'поехать: я поеду.'),
        livre('Escreva 4 frases: como você vai ao trabalho, um hábito, o que fará amanhã e de onde você sai.', 'Я хожу на работу пешком. Иногда я езжу на метро. Завтра я пойду в магазин. Я ухожу из дома в семь часов.'),
      ]),
      producao(5, 'Grave-se contando como você se desloca todos os dias e o que fará amanhã.'),
    ]),
  ],
});
