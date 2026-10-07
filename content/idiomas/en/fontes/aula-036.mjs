import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 36, titulo: 'Viagem: aeroporto, hotel e o primeiro condicional', nivel: 'a2',
  objetivo: 'Resolver situações de viagem (aeroporto, hotel, transporte), pedir informações e reservar, e usar o primeiro condicional («If it rains, we will stay») para falar de possibilidades reais.',
  nota: 'Você viaja e resolve problemas em inglês. Próxima aula: saúde.',
  sessoes: [
    sessao('S1', 'No aeroporto e no hotel', [
      revisao(5, 'Use 5 phrasal verbs para contar o seu fim de semana.'),
      palavras(8, [
        ['flight', 'fláit', 'voo', ''], ['passport', 'pésport', 'passaporte', ''], ['luggage', 'lâguidj', 'bagagem', ''], ['boarding pass', 'bórdin pés', 'cartão de embarque', ''], ['gate', 'guêit', 'portão', ''], ['reservation', 'rezervêichon', 'reserva', ''], ['single room', 'síngl rum', 'quarto individual', ''], ['key card', 'kii kárd', 'cartão-chave', ''],
      ]),
      gramatica(12, 'Pedir e perguntar em viagem', 'PASSO 1: no balcão: «I\'d like to check in, please.», «Here is my passport.» PASSO 2: pergunte: «What time does the flight leave?», «Which gate is it?» PASSO 3: no hotel: «I have a reservation under the name Silva.» (reserva em nome de), «Is breakfast included?» PASSO 4: problemas: «There is a problem with my room.», «The air conditioning doesn\'t work.» PASSO 5: peça: «Could I have a late check-out?» PASSO 6: «luggage» e «baggage» são incontáveis: «my luggage», «a piece of luggage», nunca «luggages».', {
        tag: 'Viagem',
        comparacao: 'em português «bagagens» é plural comum. Em inglês, «luggage» é incontável: «My luggage is heavy», «two pieces of luggage».',
        tabela: [
          { portugues: 'Quero fazer check-in.', ingles: 'I\'d like to check in, please.' }, { portugues: 'Tenho uma reserva.', ingles: 'I have a reservation.' }, { portugues: 'O café da manhã está incluído?', ingles: 'Is breakfast included?' }, { portugues: 'A que horas sai o voo?', ingles: 'What time does the flight leave?' },
        ],
        erros: [['my luggages', 'my luggage', 'Incontável.'], ['The flight leaves at which hour?', 'What time does the flight leave?', 'Pergunta natural.'], ['I have a reserve.', 'I have a reservation.', '«reserve» é verbo.'], ['I want check-in.', 'I\'d like to check in.', 'Mais educado e natural.']],
      }),
      producao(5, 'Faça o check-in do aeroporto e depois o do hotel, em voz alta.'),
    ]),
    sessao('S2', 'Primeiro condicional', [
      revisao(4, 'Peça 3 coisas num hotel com «Could I have…?»'),
      palavras(6, [
        ['if', 'íf', 'se', ''], ['unless', 'anléss', 'a menos que', ''], ['miss the flight', 'mis dâ fláit', 'perder o voo', ''], ['delay', 'dilêi', 'atraso', ''], ['cancel', 'kénsel', 'cancelar', ''], ['refund', 'rífând', 'reembolso', ''],
      ]),
      gramatica(12, 'If + presente, will + verbo', 'PASSO 1: o primeiro condicional fala de possibilidade REAL no futuro: «If it rains tomorrow, we will stay at the hotel.» PASSO 2: a estrutura: «If + presente simples, will + verbo». PASSO 3: depois do «if» NUNCA use «will»: «If I will go» está errado. PASSO 4: pode inverter a ordem; se o «if» vier no fim, sem vírgula: «We will stay at the hotel if it rains.» PASSO 5: «unless» = a menos que (se não): «I won\'t go unless you come.» PASSO 6: pergunta: «What will you do if the flight is cancelled?» PASSO 7: no resultado, vale também o imperativo e «can/should»: «If you are lost, call me.», «If you feel sick, you should rest.»', {
        tag: 'Primeiro condicional',
        comparacao: 'em português usamos o futuro do subjuntivo: «se chover, ficaremos». O inglês usa o PRESENTE depois do «if»: «If it rains, we will stay». Não use «will» depois de «if».',
        tabela: [
          { se: 'If it rains,', entao: 'we will stay at the hotel.' }, { se: 'If I miss the flight,', entao: 'I will call you.' }, { se: 'If you need help,', entao: 'ask the receptionist.' }, { se: 'Unless you hurry,', entao: 'you will miss the train.' },
        ],
        erros: [['If it will rain, we stay.', 'If it rains, we will stay.', 'Depois do if, presente.'], ['If I will have time, I will call you.', 'If I have time, I will call you.', 'Sem will depois do if.'], ['I won\'t go unless you don\'t come.', 'I won\'t go unless you come.', '«unless» já é negativo.'], ['If it rains, we stayed.', 'If it rains, we will stay.', 'Futuro no resultado.']],
      }),
      producao(8, 'Complete 6 frases suas: «If it rains this weekend, I will…», «If I have money, I will…»'),
    ]),
    sessao('S3', 'Resolver problemas', [
      revisao(4, 'Complete: «If I ___ (miss) the bus, I ___ (take) a taxi.»'),
      palavras(5, [
        ['lost', 'lóst', 'perdido', ''], ['ask for help', 'ésk fór rélp', 'pedir ajuda', ''], ['map', 'mép', 'mapa', ''], ['taxi', 'téksi', 'táxi', ''], ['ticket', 'tíkit', 'passagem', ''],
      ]),
      gramatica(8, 'Pedir ajuda de forma educada', 'PASSO 1: comece com «Excuse me» e use «Could you tell me…?»: «Could you tell me where the station is?» PASSO 2: dentro da pergunta educada, a ordem é de AFIRMAÇÃO: «where the station is» (não «where is the station»). PASSO 3: «Do you know…?» também funciona: «Do you know what time the bus leaves?» PASSO 4: agradeça: «Thanks a lot.», «That\'s very helpful.»', {
        tag: 'Perguntas educadas',
        comparacao: 'em português «você sabe onde fica a estação?» mantém a ordem normal. Em inglês, a pergunta dentro de outra pergunta vira afirmação: «Do you know where the station IS?»',
        tabela: [
          { direta: 'Where is the station?', educada: 'Could you tell me where the station is?' }, { direta: 'What time does the bus leave?', educada: 'Do you know what time the bus leaves?' },
        ],
        erros: [['Could you tell me where is the station?', 'Could you tell me where the station is?', 'Ordem de afirmação.'], ['Do you know what time does the bus leave?', 'Do you know what time the bus leaves?', 'Sem does.']],
      }),
      dialogo(8, 'At the hotel / No hotel', 'Maria faz o check-in e pede ajuda.', [
        ['Receptionist', 'Good evening. Do you have a reservation?', 'Boa noite. A senhora tem reserva?'], ['Maria', 'Yes, I have a reservation under the name Silva.', 'Tenho, em nome de Silva.'], ['Receptionist', 'A single room for three nights. Is that correct?', 'Um quarto individual por três noites. Está correto?'], ['Maria', 'Yes. Is breakfast included?', 'Sim. O café da manhã está incluído?'], ['Receptionist', 'Yes, it is. It\'s from seven to ten. Here is your key card.', 'Está. É das sete às dez. Aqui está o seu cartão-chave.'], ['Maria', 'Thank you. Could you tell me where the station is? If I have time, I will visit the museum tomorrow.', 'Obrigada. A senhora poderia me dizer onde fica a estação? Se eu tiver tempo, vou visitar o museu amanhã.'],
      ]),
      producao(5, 'Escreva 5 frases sobre uma viagem que você quer fazer, com 2 condicionais.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 36', [
      revisao(5, 'Planeje uma viagem em voz alta: aeroporto, hotel e dois «if».'),
      exercicios(20, [
        ouvir('If it rains, we will stay at the hotel', ['If it rains, we will stay at the hotel', 'If it will rain, we stay at the hotel', 'If it rained, we stayed at the hotel'], 'If it rains, we will stay at the hotel', 'Ouça o presente depois de «if».'), ouvir('I have a reservation', ['I have a reservation', 'I have a reserve', 'I have a preservation'], 'I have a reservation', 'Ouça «reservation».'), ditado('Is breakfast included', 'Escreva: is breakfast included.'), ditado('Could you tell me where the station is', 'Escreva: could you tell me where the station is.'),
        mc('Qual frase está correta?', ['If it rains, we will stay.', 'If it will rain, we will stay.', 'If it rains, we stay will.'], 'If it rains, we will stay.', 'if + presente.'), mc('Qual frase está correta?', ['My luggage is heavy.', 'My luggages are heavy.', 'My luggage are heavy.'], 'My luggage is heavy.', 'luggage: incontável.'), mc('Qual é a pergunta educada correta?', ['Could you tell me where the station is?', 'Could you tell me where is the station?', 'Could you tell me where does the station is?'], 'Could you tell me where the station is?', 'Ordem de afirmação.'), mc('O que significa «unless»?', ['a menos que', 'porque', 'enquanto'], 'a menos que', 'unless = if not.'),
        lacuna('If I ___ time, I will call you. (tiver)', ['have', 'will have', 'had'], 'have', 'Presente.'), lacuna('I\'d like to ___ in, please. (check-in)', ['check', 'go', 'put'], 'check', 'check in.'), lacuna('I have a ___ under the name Silva.', ['reservation', 'reserve', 'booking in'], 'reservation', 'reservation.'), lacuna('I won\'t go ___ you come. (a menos que)', ['unless', 'if not', 'except'], 'unless', 'unless.'),
        ordem('Ordene: «If it rains, we will stay home.»', ['If', 'it', 'rains,', 'we', 'will', 'stay', 'home'], 'If it rains, we will stay home.', 'if + presente, will + verbo.'), ordem('Ordene: «Is breakfast included?»', ['Is', 'breakfast', 'included'], 'Is breakfast included?', 'Is + sujeito + particípio.'),
        livre('Escreva 4 frases sobre uma viagem: duas com «if», uma pergunta no hotel e um pedido educado.', 'If it rains, we will stay at the hotel. If I have time, I will visit the museum. Is breakfast included? Could you tell me where the station is?'),
      ]),
      producao(5, 'Conte em 1 minuto uma viagem dos sonhos e o que fará se algo der errado.'),
    ]),
  ],
});
