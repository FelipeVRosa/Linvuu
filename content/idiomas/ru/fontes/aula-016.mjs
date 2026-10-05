import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 16, titulo: 'Meu dia', nivel: 'a1',
  objetivo: 'Contar a sua rotina com verbos em -ся, horas, advérbios de tempo e os verbos de movimento «идти» e «ехать».',
  nota: 'Você conta o seu dia inteiro. Próxima aula: o passado.',
  sessoes: [
    sessao('S1', 'Verbos em -ся', [
      revisao(5, 'Escreva as 6 formas de «читать» no presente.'),
      palavras(12, [
        ['вставать', 'fstavát', 'levantar-se', 'to get up'], ['просыпаться', 'prasypátsa', 'acordar', 'to wake up'], ['умываться', 'umyvátsa', 'lavar-se', 'to wash'], ['одеваться', 'adevátsa', 'vestir-se', 'to get dressed'],
        ['завтракать', 'záftrakat', 'tomar café da manhã', 'to have breakfast'], ['обедать', 'abiédat', 'almoçar', 'to have lunch'], ['ужинать', 'úzhynat', 'jantar', 'to have dinner'],
        ['завтрак', 'záftrak', 'café da manhã', 'breakfast'], ['обед', 'abiéd', 'almoço', 'lunch'], ['ужин', 'úzhyn', 'jantar (refeição)', 'dinner'], ['рано', 'rána', 'cedo', 'early'], ['поздно', 'pózna', 'tarde (hora)', 'late'],
      ]),
      gramatica(8, 'Verbos com -ся: a ação volta para quem faz', 'Alguns verbos terminam em -ся, como «просыпаться» (acordar) e «умываться» (lavar-se). A ação volta para quem a faz, como em «levantar-se». Conjugue normalmente e acrescente -сь se a forma terminar em vogal (я просыпаюсь, вы просыпаетесь) ou -ся se terminar em consoante (он просыпается, они просыпаются). «Вставать» segue o mesmo padrão sem -ся: я встаю.', {
        tag: 'Verbos',
        tabela: [
          { pronome: 'я', просыпаться: 'просыпаюсь' }, { pronome: 'ты', просыпаться: 'просыпаешься' }, { pronome: 'он / она', просыпаться: 'просыпается' },
          { pronome: 'мы', просыпаться: 'просыпаемся' }, { pronome: 'вы', просыпаться: 'просыпаетесь' }, { pronome: 'они', просыпаться: 'просыпаются' },
        ],
        exemplos: [['Я встаю в семь часов.', 'Eu me levanto às sete horas.'], ['Я завтракаю дома.', 'Eu tomo café da manhã em casa.'], ['Мы обедаем в кафе.', 'Nós almoçamos no café.']],
        erros: [['Я просыпаюся.', 'Я просыпаюсь.', 'Depois de vogal usa-se -сь.']],
      }),
      producao(5, 'Diga: «Я просыпаюсь рано. Я встаю в семь часов. Я завтракаю дома.»'),
    ]),
    sessao('S2', 'Ir e voltar: «идти» e «ехать»', [
      revisao(5, 'Escreva uma frase com cada verbo da sessão anterior.'),
      palavras(8, [
        ['идти', 'itti', 'ir a pé', 'to go (on foot)'], ['ехать', 'yékhat', 'ir de transporte', 'to go (by vehicle)'], ['на работу', 'na rabótu', 'para o trabalho', 'to work'], ['домой', 'damói', 'para casa', 'home (direction)'],
        ['в магазин', 'v magazín', 'à loja', 'to the shop'], ['до', 'do', 'até, antes de', 'until'], ['каждый день', 'kázhdyi dien', 'todo dia', 'every day'], ['обычно', 'abýchna', 'normalmente', 'usually'],
      ]),
      gramatica(12, 'Para onde? «в» e «на» + acusativo', 'Já vimos «Где?» (onde): «в» + preposicional («в магазине»). Para perguntar «Куда?» (para onde, com movimento), usa-se o ACUSATIVO: «Я иду в магазин», «Я еду на работу». Em resumo: parado → preposicional; em movimento → acusativo. Para «para casa» existe uma palavra própria, sem preposição: «домой»; «em casa» é «дома». Os verbos «идти» (a pé) e «ехать» (de ônibus, carro, trem) são irregulares: aprenda as formas.', {
        tag: 'Casos',
        comparacao: 'em português usamos «à loja» para o movimento e «na loja» para o lugar. O russo troca a terminação da palavra.',
        tabelas: [
          { titulo: 'Onde? × para onde?', linhas: [
            { parado: 'в магазине', movimento: 'в магазин', pt: 'na loja / à loja' }, { parado: 'на работе', movimento: 'на работу', pt: 'no trabalho / ao trabalho' }, { parado: 'в школе', movimento: 'в школу', pt: 'na escola / à escola' },
            { parado: 'в офисе', movimento: 'в офис', pt: 'no escritório / ao escritório' }, { parado: 'дома', movimento: 'домой', pt: 'em casa / para casa' },
          ] },
          { titulo: 'Os verbos de movimento', linhas: [
            { pronome: 'я', идти: 'иду', ехать: 'еду' }, { pronome: 'ты', идти: 'идёшь', ехать: 'едешь' }, { pronome: 'он / она', идти: 'идёт', ехать: 'едет' },
            { pronome: 'мы', идти: 'идём', ехать: 'едем' }, { pronome: 'вы', идти: 'идёте', ехать: 'едете' }, { pronome: 'они', идти: 'идут', ехать: 'едут' },
          ] },
        ],
        erros: [['Я иду в магазине.', 'Я иду в магазин.', 'Com movimento (куда?) use o acusativo.'], ['Я иду в дома.', 'Я иду домой.', 'Para «para casa» use «домой».']],
      }),
      producao(5, 'Diga: «Я иду на работу. Я еду домой. Я иду в магазин.»'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva 3 frases: «Я иду …», «Я еду …», «Я завтракаю …».'),
      dialogo(12, 'Мой день / Meu dia', 'Dois colegas falam da rotina.', [
        ['Олег', 'В котором часу ты встаёшь?', 'A que horas você se levanta?'], ['Вера', 'Я встаю в семь часов. А ты?', 'Eu me levanto às sete. E você?'], ['Олег', 'Я встаю рано, в шесть. Я завтракаю дома.', 'Eu me levanto cedo, às seis. Tomo café em casa.'],
        ['Вера', 'Потом ты идёшь на работу?', 'Depois você vai ao trabalho?'], ['Олег', 'Да, я еду на работу. Я работаю до пяти часов.', 'Sim, vou de transporte ao trabalho. Trabalho até as cinco.'],
        ['Вера', 'А после работы?', 'E depois do trabalho?'], ['Олег', 'Я иду в магазин и еду домой. Вечером я ужинаю и отдыхаю.', 'Vou à loja e volto para casa. À noite eu janto e descanso.'], ['Вера', 'Хороший день!', 'Que dia bom!'],
      ]),
      texto(8, 'Мой день / Meu dia', 'Меня зовут Таня. Я обычно просыпаюсь в семь часов. Сначала я умываюсь и одеваюсь, потом завтракаю. В восемь часов я еду на работу. Я работаю в школе. Днём я обедаю в кафе. После работы я иду домой. Вечером я ужинаю, смотрю фильм и отдыхаю.',
        'Eu me chamo Tanya. Normalmente eu acordo às sete horas. Primeiro eu me lavo e me visto, depois tomo café da manhã. Às oito horas vou ao trabalho. Eu trabalho numa escola. Durante o dia almoço no café. Depois do trabalho vou para casa. À noite janto, assisto a um filme e descanso.',
        [['Когда Таня просыпается?', 'В семь часов'], ['Где она обедает?', 'В кафе'], ['Что она делает вечером?', 'Ужинает, смотрит фильм и отдыхает']]),
      producao(5, 'Conte o seu dia: «Я просыпаюсь в … Потом я … После работы я …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 5 frases sobre o seu dia de ontem ou de hoje.'),
      exercicios(20, [
        mc('«Я встаю в семь часов» significa:', ['Eu me levanto às sete horas', 'Eu durmo às sete horas', 'Eu trabalho às sete horas'], 'Eu me levanto às sete horas', 'вставать = levantar-se.'),
        lacuna('Я ___ рано. (acordo)', ['просыпаюсь', 'просыпаюся', 'просыпаю'], 'просыпаюсь', 'Depois de vogal: -сь.'),
        lacuna('Он ___ дома. (almoça)', ['обедает', 'обедаю', 'обедаешь'], 'обедает', 'он → -ет.'),
        lacuna('Мы ___ в кафе. (jantamos)', ['ужинаем', 'ужинаю', 'ужинают'], 'ужинаем', 'мы → -ем.'),
        mc('Qual está correto?', ['Я иду в магазин', 'Я иду в магазине', 'Я иду в магазина'], 'Я иду в магазин', 'Movimento: acusativo.'),
        lacuna('Я еду ___ работу. (para o)', ['на', 'в', 'из'], 'на', '«на работу» = para o trabalho.'),
        lacuna('Я иду ___. (para casa)', ['домой', 'дома', 'дом'], 'домой', '«домой» = para casa.'),
        mc('«Дома» e «домой» são diferentes porque:', ['«дома» = em casa (parado); «домой» = para casa (movimento)', 'são sinônimos', '«домой» é plural'], '«дома» = em casa (parado); «домой» = para casa (movimento)', 'Parado × movimento.'),
        ouvir('Я иду на работу', ['Я иду на работу', 'Я еду домой', 'Я работаю дома'], 'Я иду на работу', 'идти = ir a pé.'),
        lacuna('Ты ___ в школу? (vai a pé)', ['идёшь', 'иду', 'идут'], 'идёшь', 'ты → -ёшь.'),
        ordem('Ordene: «Eu tomo café da manhã em casa.»', ['дома', 'завтракаю', 'Я'], 'Я завтракаю дома.', 'Sujeito + verbo + lugar.'),
        ditado('Я еду домой', 'ехать + домой.'),
        mc('«Рано» e «поздно» são:', ['advérbios (não mudam)', 'adjetivos', 'verbos'], 'advérbios (não mudam)', 'Advérbios nunca mudam.'),
        livre('Escreva 5 frases sobre o seu dia, do acordar ao jantar.', 'Я просыпаюсь в семь часов. Я завтракаю дома. Я еду на работу. После работы я иду домой. Вечером я ужинаю.'),
      ]),
      producao(5, 'Grave-se contando o seu dia, do acordar ao jantar.'),
    ]),
  ],
});
