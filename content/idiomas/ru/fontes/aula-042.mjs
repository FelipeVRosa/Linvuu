import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 42, titulo: 'Telefone, mensagens e e-mails', nivel: 'a2',
  objetivo: 'Conduzir uma ligação (Алло, Можно позвать…?, Передайте, что…), escrever mensagens informais e e-mails formais com as fórmulas de abertura e despedida.',
  nota: 'Você liga, deixa recado e escreve e-mails. Próxima aula: verbos reflexivos e recíprocos.',
  sessoes: [
    sessao('S1', 'Ao telefone', [
      revisao(5, 'Escreva 5 frases sobre o seu fim de semana.'),
      palavras(8, [['телефон', 'tilifón', 'telefone', 'phone'], ['звонить / позвонить', 'zvanít / pazvanít', 'ligar', 'to call'], ['номер', 'nómir', 'número', 'number'], ['позвать', 'pazvát', 'chamar (ao telefone)', 'to call to the phone'], ['передать', 'piridát', 'transmitir, passar', 'to pass on'], ['перезвонить', 'pirizvanít', 'ligar de volta', 'to call back'], ['слышать', 'slýshat', 'ouvir', 'to hear'], ['занято', 'zányata', 'ocupado (linha)', 'busy']]),
      gramatica(12, 'Frases de uma ligação', 'PASSO 1: ao atender: «Алло!» ou «Слушаю вас» (formal). PASSO 2: para se identificar: «Это Олег» (é o Oleg). PASSO 3: para pedir alguém: «Можно позвать Анну?» (posso falar com a Anna?), com acusativo. PASSO 4: se a pessoa não está: «Её нет дома» (genitivo depois de «нет»), «Его нет на работе». PASSO 5: para deixar recado: «Передайте, пожалуйста, что я звонил» (imperativo + «что»). PASSO 6: «Перезвоните позже» = ligue mais tarde; «Я вас плохо слышу» = ouço mal. PASSO 7: para o futuro: «Я перезвоню в восемь».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Алло! Это Олег.', traducao: 'Alô! É o Oleg.' }, { frase: 'Можно позвать Анну?', traducao: 'Posso falar com a Anna?' }, { frase: 'Её сейчас нет дома.', traducao: 'Ela não está em casa agora.' }, { frase: 'Передайте, пожалуйста, что я звонил.', traducao: 'Diga, por favor, que eu liguei.' }, { frase: 'Я вас плохо слышу.', traducao: 'Estou ouvindo mal.' }, { frase: 'Перезвоните позже.', traducao: 'Ligue mais tarde.' },
        ],
        erros: [['Можно позвать Анна?', 'Можно позвать Анну?', '«позвать» pede acusativo: Анну.'], ['Она нет дома.', 'Её нет дома.', '«нет» + genitivo: её.']],
      }),
      producao(5, 'Faça uma ligação em voz alta: «Алло! Это … Можно позвать …? Передайте, что я звонил.»'),
    ]),
    sessao('S2', 'Mensagens informais', [
      revisao(5, 'Escreva um diálogo de 6 falas ao telefone.'),
      palavras(8, [['сообщение', 'sapshchéniye', 'mensagem', 'message'], ['писать / написать', 'pisát / napisát', 'escrever', 'to write'], ['отвечать / ответить', 'atvichát / atvétit', 'responder', 'to answer'], ['привет', 'privyét', 'oi', 'hi'], ['пока', 'paká', 'tchau', 'bye'], ['спасибо', 'spasíba', 'obrigado', 'thanks'], ['до завтра', 'da záftra', 'até amanhã', 'see you tomorrow'], ['скоро', 'skóra', 'em breve', 'soon']]),
      gramatica(12, 'Mensagens a amigos', 'PASSO 1: com amigos, use «ты» e frases curtas: «Привет! Как дела?», «Спасибо!», «Пока!». PASSO 2: para combinar: «Давай встретимся в шесть», «Я буду в семь», «Жду тебя». PASSO 3: para pedir: «Напиши мне, пожалуйста», «Позвони мне». PASSO 4: para agradecer: «Спасибо большое!», «Спасибо за помощь» («за» + acusativo). PASSO 5: despedidas: «Пока!», «До завтра!», «До скорой встречи!» (até breve). PASSO 6: «Как дела?» responde-se com «Хорошо», «Нормально», «Отлично».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Привет! Как дела?', traducao: 'Oi! Como vai?' }, { frase: 'Давай встретимся в шесть.', traducao: 'Vamos nos encontrar às seis.' }, { frase: 'Напиши мне, пожалуйста.', traducao: 'Me escreva, por favor.' }, { frase: 'Спасибо за помощь!', traducao: 'Obrigado pela ajuda!' }, { frase: 'До завтра! Пока!', traducao: 'Até amanhã! Tchau!' },
        ],
        erros: [['Спасибо для помощь.', 'Спасибо за помощь.', 'Agradecer por algo: «за» + acusativo.'], ['Напиши мне, пожалуйста вы.', 'Напишите мне, пожалуйста.', 'Ou «ты» (напиши) ou «вы» (напишите).']],
      }),
      producao(5, 'Escreva e leia uma mensagem a um amigo: «Привет! … Давай встретимся … Напиши мне. Пока!»'),
    ]),
    sessao('S3', 'O e-mail formal', [
      revisao(5, 'Escreva uma mensagem curta a um amigo, combinando um encontro.'),
      gramatica(10, 'Estrutura de um e-mail formal', 'PASSO 1: a abertura formal: «Здравствуйте!» ou «Уважаемый господин Иванов!» (Prezado senhor Ivanov); para mulheres: «Уважаемая госпожа Иванова!». PASSO 2: o motivo: «Я пишу вам, чтобы узнать…» (escrevo para saber), «Прошу вас…» (peço-lhe que…). PASSO 3: use «вы» sempre, com letra maiúscula opcional: «Вы» ou «вы». PASSO 4: agradecimento: «Заранее благодарю вас» (agradeço antecipadamente). PASSO 5: despedida: «С уважением,» + nome. PASSO 6: o assunto vai na linha «Тема:».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Уважаемый господин Иванов!', traducao: 'Prezado senhor Ivanov!' }, { frase: 'Я пишу вам, чтобы узнать о курсе.', traducao: 'Escrevo para saber sobre o curso.' }, { frase: 'Прошу вас ответить мне.', traducao: 'Peço-lhe que me responda.' }, { frase: 'Заранее благодарю вас.', traducao: 'Agradeço antecipadamente.' }, { frase: 'С уважением, Анна Лопес.', traducao: 'Atenciosamente, Anna Lopes.' },
        ],
      }),
      dialogo(8, 'Звонок / Uma ligação', 'Oleg liga para a casa da colega Anna e fala com a mãe dela.', [
        ['Олег', 'Алло, добрый день. Можно позвать Анну?', 'Alô, bom dia. Posso falar com a Anna?'], ['Мама', 'Её сейчас нет дома. Что передать?', 'Ela não está em casa agora. O que devo dizer?'], ['Олег', 'Передайте, пожалуйста, что я звонил.', 'Diga, por favor, que eu liguei.'],
        ['Мама', 'Хорошо. Как вас зовут?', 'Está bem. Como o senhor se chama?'], ['Олег', 'Олег. Я её коллега.', 'Oleg. Sou colega dela.'], ['Мама', 'Она придёт в семь часов. Перезвоните позже.', 'Ela chega às sete horas. Ligue mais tarde.'],
        ['Олег', 'Спасибо. Я позвоню в восемь.', 'Obrigado. Ligo às oito.'], ['Мама', 'Хорошо. До свидания!', 'Está bem. Até logo!'],
      ]),
      producao(7, 'Leia em voz alta um e-mail formal de 5 linhas: abertura, motivo, pedido, agradecimento e despedida.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um e-mail formal curto pedindo informação.'),
      exercicios(20, [
        lacuna('Можно позвать ___? (a Anna)', ['Анну', 'Анна', 'Анне'], 'Анну', '«позвать» + acusativo.'), lacuna('___ нет дома. (dela)', ['Её', 'Она', 'Ей'], 'Её', '«нет» + genitivo.'), lacuna('Передайте, ___ я звонил.', ['что', 'чтобы', 'потому'], 'что', '«что» introduz o recado.'),
        lacuna('Спасибо ___ помощь!', ['за', 'для', 'от'], 'за', 'Agradecer por algo: «за».'), lacuna('Я ___ вам, чтобы узнать о курсе. (escrevo)', ['пишу', 'писать', 'пишешь'], 'пишу', 'я пишу.'), lacuna('___ уважением, Анна. (atenciosamente)', ['С', 'В', 'Для'], 'С', '«С уважением».'),
        mc('«Перезвоните позже» significa:', ['Ligue mais tarde', 'Ligue agora', 'Não ligue'], 'Ligue mais tarde', 'Позже = mais tarde.'), mc('Abertura formal:', ['Уважаемый господин Иванов!', 'Привет, Иванов!', 'Пока!'], 'Уважаемый господин Иванов!', 'Formal.'), mc('«Я вас плохо слышу» significa:', ['Estou ouvindo mal', 'Estou ouvindo bem', 'Estou ocupado'], 'Estou ouvindo mal', 'плохо = mal.'),
        ordem('Ordene: «Можно позвать Анну?»', ['Можно', 'позвать', 'Анну'], 'Можно позвать Анну?', 'Acusativo: Анну.'), ouvir('Передайте, пожалуйста, что я звонил', ['Передайте, пожалуйста, что я звонил', 'Перезвоните позже', 'Её нет дома'], 'Передайте, пожалуйста, что я звонил', 'Recado.'), ditado('Её сейчас нет дома', '«нет» + genitivo.'),
        livre('Escreva 5 frases: uma ligação (pedir alguém), um recado, uma mensagem informal, uma abertura formal e uma despedida formal.', 'Алло! Можно позвать Анну? Передайте, пожалуйста, что я звонил. Привет! Давай встретимся в шесть. Уважаемый господин Иванов! С уважением, Анна.'),
      ]),
      producao(5, 'Grave-se fazendo uma ligação e deixando um recado.'),
    ]),
  ],
});
