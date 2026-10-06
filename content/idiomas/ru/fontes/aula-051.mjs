import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 51, titulo: 'Aspecto verbal 2: repetição, negação, início e fim', nivel: 'b1',
  objetivo: 'Usar o aspecto na repetição, na negação (не звонил × не позвонил, не открывай × не упади) e com os verbos de início, continuação e fim (начать, продолжать, перестать, закончить).',
  nota: 'Você domina os usos mais difíceis do aspecto. Próxima aula: verbos de levar e trazer.',
  sessoes: [
    sessao('S1', 'Repetição e hábito', [
      revisao(5, 'Escreva 5 frases: processo, resultado, experiência, sequência e futuro.'),
      palavras(8, [['часто', 'chásta', 'com frequência', 'often'], ['иногда', 'inagdá', 'às vezes', 'sometimes'], ['редко', 'ryétka', 'raramente', 'rarely'], ['всегда', 'fsigdá', 'sempre', 'always'], ['каждое утро', 'kázhdaye útra', 'toda manhã', 'every morning'], ['по субботам', 'pa subótam', 'aos sábados', 'on Saturdays'], ['раз', 'ras', 'vez', 'time'], ['привыкать / привыкнуть', 'privykát / privyknut', 'acostumar-se', 'to get used']]),
      gramatica(12, 'O imperfectivo conta o que se repete', 'PASSO 1: toda ação REPETIDA, habitual ou frequente pede o IMPERFECTIVO: «Я каждое утро пью кофе», «Он часто звонит маме». PASSO 2: também no passado: «Раньше я часто ходил в кино» (antes eu ia muito ao cinema). PASSO 3: no futuro, o hábito vai com «буду»: «Я буду звонить тебе каждый день». PASSO 4: contar VEZES com um resultado único: «Я прочитал эту книгу два раза» também aparece com o perfectivo, mas o imperfectivo («Я читал эту книгу два раза») é o mais natural. PASSO 5: «ПО» + dativo plural marca a repetição semanal: «по субботам, по утрам, по вечерам». PASSO 6: «обычно» e «всегда» sempre chamam o imperfectivo.', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Я каждое утро пью кофе.', traducao: 'Tomo café toda manhã.' }, { frase: 'Раньше я часто ходил в кино.', traducao: 'Antes eu ia muito ao cinema.' }, { frase: 'Я буду звонить тебе каждый день.', traducao: 'Vou ligar para você todo dia.' }, { frase: 'Я читал эту книгу два раза.', traducao: 'Li este livro duas vezes.' }, { frase: 'По субботам я играю в футбол.', traducao: 'Aos sábados jogo futebol.' },
        ],
        erros: [['Я каждое утро выпью кофе.', 'Я каждое утро пью кофе.', 'Hábito: imperfectivo.'], ['Раньше я часто сходил в кино.', 'Раньше я часто ходил в кино.', '«часто» = repetição: imperfectivo.']],
      }),
      producao(5, 'Descreva a sua rotina: «Каждое утро я … Обычно я … По субботам я … Раньше я часто …»'),
    ]),
    sessao('S2', 'Aspecto e negação', [
      revisao(5, 'Escreva 5 frases com «каждый день», «обычно», «по субботам» e «раньше».'),
      palavras(8, [['забывать / забыть', 'zabyvát / zabýt', 'esquecer', 'to forget'], ['опаздывать / опоздать', 'apázdyvat / apazdát', 'atrasar-se', 'to be late'], ['звонить / позвонить', 'zvanít / pazvanít', 'ligar', 'to call'], ['упасть', 'upást', 'cair', 'to fall'], ['потерять', 'patiryát', 'perder', 'to lose'], ['разбить', 'razbít', 'quebrar', 'to break'], ['не забудь', 'ni zabút', 'não se esqueça', "don't forget"], ['осторожно', 'astarózhna', 'com cuidado', 'carefully']]),
      gramatica(12, 'A negação e o aspecto', 'PASSO 1: «НЕ» + IMPERFECTIVO nega a ação em geral, sem esperar resultado: «Я не звонил» (não liguei, não houve ligação). PASSO 2: «НЕ» + PERFECTIVO diz que o resultado esperado NÃO veio: «Я не позвонил» (não consegui ligar, esqueci). PASSO 3: no imperativo negativo comum, use o imperfectivo: «Не открывай окно!», «Не говори так!». PASSO 4: para ALERTAR contra um acidente ou um esquecimento, use o PERFECTIVO: «Не упади!», «Не опоздай!», «Не забудь!», «Не потеряй ключи!». PASSO 5: compare: «Не открывай окно» (proibição; não faça) e «Не простудись!» (cuidado para não pegar um resfriado). PASSO 6: «ЕЩЁ НЕ» + imperfectivo: «Я ещё не обедал».', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Я не звонил.', traducao: 'Eu não liguei (fato geral).' }, { frase: 'Я не позвонил.', traducao: 'Eu não liguei (era para ligar e não liguei).' }, { frase: 'Не открывай окно!', traducao: 'Não abra a janela!' }, { frase: 'Не упади!', traducao: 'Cuidado para não cair!' }, { frase: 'Не опоздай!', traducao: 'Não se atrase!' }, { frase: 'Не забудь!', traducao: 'Não se esqueça!' },
        ],
        erros: [['Не забывай ключи! (alerta pontual)', 'Не забудь ключи!', 'Alerta contra um esquecimento: perfectivo.'], ['Не упадай!', 'Не упади!', 'Alerta de acidente: perfectivo.']],
      }),
      producao(5, 'Diga alertas: «Не опоздай! Не забудь! Не потеряй ключи! Не упади!» e proibições: «Не открывай! Не говори так!»'),
    ]),
    sessao('S3', 'Começar, continuar, parar', [
      revisao(5, 'Escreva 5 frases com negação e aspecto: duas com «не звонил/не позвонил» e três com alertas.'),
      gramatica(10, 'Verbos de início e fim pedem imperfectivo', 'PASSO 1: «начинать / начать» (começar), «продолжать / продолжить» (continuar), «кончать / кончить» e «заканчивать / закончить» (terminar), «переставать / перестать» (parar de) levam o INFINITIVO no IMPERFECTIVO: «Я начал читать», «Он продолжает работать», «Они перестали разговаривать». PASSO 2: o próprio verbo de início ou fim pode ser perfectivo ou imperfectivo, conforme o sentido: «Я начал писать» (comecei, fato concluído) e «Я начинаю писать» (estou começando). PASSO 3: «закончить» pode ter objeto: «Я закончил работу». PASSO 4: nunca use o perfectivo depois deles: «Я начал прочитать» está errado. PASSO 5: «привыкать» (acostumar-se) também usa o imperfectivo: «Я привык вставать рано».', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Я начал писать проект.', traducao: 'Comecei a escrever o projeto.' }, { frase: 'Он продолжает работать.', traducao: 'Ele continua trabalhando.' }, { frase: 'Они перестали разговаривать.', traducao: 'Eles pararam de conversar.' }, { frase: 'Я закончил писать.', traducao: 'Terminei de escrever.' }, { frase: 'Я привык вставать рано.', traducao: 'Acostumei-me a acordar cedo.' },
        ],
      }),
      dialogo(8, 'Проект / O projeto', 'Svetlana e Igor falam de um projeto de trabalho.', [
        ['Света', 'Игорь, ты уже начал писать проект?', 'Igor, você já começou a escrever o projeto?'], ['Игорь', 'Да, я начал неделю назад, но ещё не закончил.', 'Sim, comecei há uma semana, mas ainda não terminei.'], ['Света', 'Ты не забыл отправить письмо клиенту?', 'Você não esqueceu de enviar a carta ao cliente?'],
        ['Игорь', 'Нет, не забыл. Я его уже отправил.', 'Não, não esqueci. Já a enviei.'], ['Света', 'Не опоздай завтра на встречу!', 'Não se atrase amanhã para a reunião!'], ['Игорь', 'Не волнуйся, я не опоздаю. Я каждый день прихожу вовремя.', 'Não se preocupe, não vou me atrasar. Todo dia chego na hora.'],
        ['Света', 'Тогда продолжай работать, а я позвоню клиенту.', 'Então continue trabalhando, e eu ligo para o cliente.'], ['Игорь', 'Хорошо. Когда я закончу, я тебе позвоню.', 'Está bem. Quando eu terminar, ligo para você.'],
      ]),
      producao(7, 'Fale em voz alta de um projeto seu: o que começou, o que continua fazendo, o que ainda não terminou e o que não pode esquecer.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre um projeto ou uma tarefa.'),
      exercicios(20, [
        lacuna('Я каждое утро ___ кофе. (tomo)', ['пью', 'выпью', 'выпил'], 'пью', 'Hábito: imperfectivo.'), lacuna('Раньше я часто ___ в кино. (ia)', ['ходил', 'сходил', 'пойду'], 'ходил', '«часто»: imperfectivo.'), lacuna('Я забыл и не ___. (liguei, esperado)', ['позвонил', 'звонил', 'позвоню'], 'позвонил', 'Resultado esperado que não veio: perfectivo.'),
        lacuna('Не ___ окно! (proibição)', ['открывай', 'открой', 'открыть'], 'открывай', 'Proibição: imperfectivo.'), lacuna('Не ___! (alerta: atraso)', ['опоздай', 'опаздывай', 'опоздать'], 'опоздай', 'Alerta pontual: perfectivo.'), lacuna('Я начал ___. (a escrever)', ['писать', 'написать', 'пишу'], 'писать', 'Depois de «начать»: imperfectivo.'),
        mc('«Я не позвонил» sugere:', ['esqueci ou não consegui ligar', 'nunca ligo', 'liguei ontem'], 'esqueci ou não consegui ligar', 'Não + perfectivo: resultado esperado não veio.'), mc('Depois de «перестать» vem:', ['infinitivo imperfectivo', 'infinitivo perfectivo', 'gerúndio'], 'infinitivo imperfectivo', '«перестал читать».'), mc('«Не упади!» é:', ['um alerta', 'uma proibição geral', 'uma pergunta'], 'um alerta', 'Perfectivo: cuidado para não cair.'),
        ordem('Ordene: «Он продолжает работать.»', ['Он', 'продолжает', 'работать'], 'Он продолжает работать.', 'продолжать + imperfectivo.'), ouvir('Не забудь позвонить маме', ['Не забудь позвонить маме', 'Не забывай звонить маме', 'Я звоню маме'], 'Не забудь позвонить маме', 'Alerta: perfectivo.'), ditado('Я ещё не обедал', '«ещё не» + imperfectivo.'),
        livre('Escreva 5 frases: um hábito, uma negação geral, um alerta, um verbo de início e um de fim.', 'Я каждый день читаю. Я не звонил. Не опоздай! Я начал писать. Я закончил работать.'),
      ]),
      producao(5, 'Grave-se contando uma rotina e dando 3 alertas a um amigo.'),
    ]),
  ],
});
