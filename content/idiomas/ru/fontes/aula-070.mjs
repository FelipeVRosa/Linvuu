import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 70, titulo: 'Trabalho: entrevista, contrato e reunião', nivel: 'b1',
  objetivo: 'Falar da sua experiência numa entrevista, entender as condições de um contrato (должен, обязан, имеет право, в течение, не позднее) e participar de uma reunião de trabalho.',
  nota: 'Você se apresenta, entende um contrato e participa de reuniões. Próxima aula: mídia e internet.',
  sessoes: [
    sessao('S1', 'A entrevista de emprego', [
      revisao(5, 'Escreva 5 frases: uma opinião, um acordo, um desacordo, uma saudação formal e uma despedida formal.'),
      palavras(8, [['опыт работы', 'ópyt rabóty', 'experiência profissional', 'work experience'], ['образование', 'abrazavániye', 'formação', 'education'], ['навык', 'navýk', 'habilidade', 'skill'], ['должность', 'dólzhnast', 'cargo', 'position'], ['зарплата', 'zárplata', 'salário', 'salary'], ['график', 'gráfik', 'horário, escala', 'schedule'], ['собеседование', 'sabisyedávaniye', 'entrevista', 'interview'], ['окончить', 'akónchit', 'formar-se, concluir', 'to graduate']]),
      gramatica(12, 'Falar da experiência e responder ao entrevistador', 'PASSO 1: para falar do passado profissional, use o PASSADO com o aspecto certo: «Я работал пять лет в строительной компании» (imperfectivo, duração), «Я окончил университет в 2018 году» (perfectivo, fato concluído). PASSO 2: para a formação: «Я окончил / окончила» + acusativo («университет, школу»). PASSO 3: para as habilidades: «Я владею английским» (владеть + instrumental), «Я умею работать в команде», «У меня есть опыт в продажах». PASSO 4: para o desejo: «Я хотел бы работать в вашей компании», «Меня интересует эта должность» (интересовать + acusativo). PASSO 5: o entrevistador pergunta: «Почему вы хотите работать у нас?», «Каковы ваши сильные стороны?», «Когда вы можете начать?». PASSO 6: use «вы» e evite gírias.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'experiência', exemplo: 'Я работал пять лет в строительной компании.' }, { funcao: 'formação', exemplo: 'Я окончила университет в 2018 году.' }, { funcao: 'habilidades', exemplo: 'Я владею английским. Я умею работать в команде.' }, { funcao: 'interesse', exemplo: 'Меня интересует эта должность.' }, { funcao: 'pergunta do entrevistador', exemplo: 'Почему вы хотите работать у нас? Когда вы можете начать?' },
        ],
        erros: [['Я владею английский.', 'Я владею английским.', '«владеть» + instrumental.'], ['Меня интересуют эта должность.', 'Меня интересует эта должность.', '«должность» é singular.'], ['Я окончил в университет.', 'Я окончил университет.', '«окончить» + acusativo, sem preposição.']],
      }),
      producao(5, 'Apresente-se em 6 frases como numa entrevista: formação, experiência, habilidades e por que quer a vaga.'),
    ]),
    sessao('S2', 'O contrato e as condições', [
      revisao(5, 'Escreva 5 frases sobre a sua experiência profissional.'),
      palavras(8, [['договор', 'dagavór', 'contrato', 'contract'], ['оклад', 'aklát', 'salário-base', 'basic salary'], ['отпуск', 'ótpusk', 'férias', 'holiday'], ['больничный', 'balnichny', 'licença médica', 'sick leave'], ['обязанности', 'abyázannasti', 'atribuições', 'duties'], ['срок', 'srok', 'prazo', 'term'], ['подписать', 'patpisát', 'assinar', 'to sign'], ['условия', 'uslóviya', 'condições', 'conditions']]),
      gramatica(12, 'Linguagem de contrato', 'PASSO 1: o contrato usa a linguagem da obrigação e do direito: «РАБОТНИК ДОЛЖЕН / ОБЯЗАН» + infinitivo («обязан» é mais formal): «Работник обязан приходить вовремя». PASSO 2: «ИМЕЕТ ПРАВО» + infinitivo: «Работник имеет право на отпуск» (direito a). PASSO 3: prazos: «В ТЕЧЕНИЕ» + genitivo (ao longo de), «НЕ ПОЗДНЕЕ» + genitivo (o mais tardar): «в течение двух недель», «не позднее пятницы». PASSO 4: «В СЛУЧАЕ» + genitivo (em caso de): «в случае болезни». PASSO 5: o estado do documento usa o particípio curto: «Договор подписан», «Договор подписан обеими сторонами». PASSO 6: «ЗАРАБОТНАЯ ПЛАТА» e «ОКЛАД» se pagam «раз в месяц».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Работник обязан приходить вовремя.', traducao: 'O empregado é obrigado a chegar na hora.' }, { frase: 'Работник имеет право на отпуск.', traducao: 'O empregado tem direito a férias.' }, { frase: 'В течение двух недель.', traducao: 'No prazo de duas semanas.' }, { frase: 'Не позднее пятницы.', traducao: 'O mais tardar na sexta.' }, { frase: 'В случае болезни.', traducao: 'Em caso de doença.' }, { frase: 'Договор подписан.', traducao: 'O contrato está assinado.' },
        ],
        erros: [['Работник имеет право отпуск.', 'Работник имеет право на отпуск.', '«право на» + acusativo.'], ['Не позднее в пятницу.', 'Не позднее пятницы.', '«не позднее» + genitivo.'], ['В течение две недели.', 'В течение двух недель.', '«в течение» + genitivo plural.']],
      }),
      producao(5, 'Diga: «Работник обязан … Работник имеет право на … в течение … не позднее … в случае …»'),
    ]),
    sessao('S3', 'A reunião de trabalho', [
      revisao(5, 'Escreva 5 frases de contrato: obrigação, direito, prazo e caso.'),
      gramatica(10, 'Falar numa reunião', 'PASSO 1: abra: «Коллеги, начнём собрание». PASSO 2: proponha: «Предлагаю обсудить сроки проекта». PASSO 3: peça a palavra: «Позвольте мне сказать» ou «Прошу слова». PASSO 4: assuma uma tarefa: «Я возьму это на себя». PASSO 5: proponha uma divisão: «Предлагаю разделить работу между отделами». PASSO 6: conclua: «Подведём итоги», «Решено». PASSO 7: feche: «Протокол отправлю всем до конца дня».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Коллеги, начнём собрание.', traducao: 'Colegas, vamos começar a reunião.' }, { frase: 'Предлагаю обсудить сроки.', traducao: 'Proponho discutir os prazos.' }, { frase: 'Позвольте мне сказать.', traducao: 'Permitam-me falar.' }, { frase: 'Я возьму это на себя.', traducao: 'Eu assumo isso.' }, { frase: 'Подведём итоги. Решено.', traducao: 'Façamos o balanço. Decidido.' },
        ],
      }),
      dialogo(8, 'Собрание / A reunião', 'Boris, Anna e Igor decidem os prazos de um projeto.', [
        ['Борис', 'Коллеги, начнём собрание. Предлагаю обсудить сроки проекта.', 'Colegas, vamos começar a reunião. Proponho discutir os prazos do projeto.'], ['Анна', 'Позвольте мне сказать. Нам нужно ещё две недели.', 'Permitam-me falar. Precisamos de mais duas semanas.'], ['Игорь', 'Я не согласен: клиент ждёт к пятнице.', 'Não concordo: o cliente espera até sexta.'],
        ['Анна', 'Тогда предлагаю разделить работу между отделами.', 'Então proponho dividir o trabalho entre os departamentos.'], ['Борис', 'Хорошо. Кто возьмёт на себя отчёт?', 'Está bem. Quem assume o relatório?'], ['Игорь', 'Я возьму, если мне помогут с цифрами.', 'Eu assumo, se me ajudarem com os números.'],
        ['Борис', 'Решено: Анна поможет вам. Подведём итоги.', 'Decidido: a Anna o ajudará. Façamos o balanço.'], ['Анна', 'Протокол отправлю всем до конца дня.', 'Envio a ata a todos até o fim do dia.'],
      ]),
      producao(7, 'Simule em voz alta uma reunião: abra, proponha, peça a palavra, assuma uma tarefa e feche.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre uma reunião de trabalho.'),
      exercicios(20, [
        lacuna('Я ___ английским. (domino)', ['владею', 'владеть', 'владел'], 'владею', '«владеть» + instrumental.'), lacuna('Я окончил ___. (a universidade)', ['университет', 'в университет', 'университета'], 'университет', '«окончить» + acusativo.'), lacuna('Меня ___ эта должность. (interessa)', ['интересует', 'интересуюсь', 'интересуют'], 'интересует', '«интересовать» + acusativo.'),
        lacuna('Работник ___ приходить вовремя.', ['обязан', 'обязана', 'имеет'], 'обязан', 'Obrigação formal.'), lacuna('Он имеет право ___ отпуск.', ['на', 'в', 'о'], 'на', '«право на».'), lacuna('Не ___ пятницы. (o mais tardar)', ['позднее', 'раньше', 'после'], 'позднее', '«не позднее» + genitivo.'),
        mc('«Подписан» significa:', ['assinado', 'proposto', 'perdido'], 'assinado', 'Particípio curto.'), mc('«В случае болезни» significa:', ['em caso de doença', 'depois da doença', 'durante a doença'], 'em caso de doença', '«в случае» + genitivo.'), mc('Para assumir uma tarefa, diga:', ['Я возьму это на себя', 'Я не знаю', 'Я ушёл'], 'Я возьму это на себя', 'Frase de reunião.'),
        ordem('Ordene: «Позвольте мне сказать.»', ['Позвольте', 'мне', 'сказать'], 'Позвольте мне сказать.', 'Pedido de palavra.'), ouvir('Предлагаю обсудить сроки проекта', ['Предлагаю обсудить сроки проекта', 'Я обсудил сроки', 'Сроки проекта закончились'], 'Предлагаю обсудить сроки проекта', 'Proposta.'), ditado('Подведём итоги', 'Fechamento de reunião.'),
        livre('Escreva 5 frases: formação, experiência, uma obrigação do contrato, um prazo e uma frase de reunião.', 'Я окончила университет. Я работала пять лет в компании. Работник обязан приходить вовремя. Не позднее пятницы. Предлагаю обсудить сроки.'),
      ]),
      producao(5, 'Grave-se numa entrevista de emprego e numa reunião.'),
    ]),
  ],
});
