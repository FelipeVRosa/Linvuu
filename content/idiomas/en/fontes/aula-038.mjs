import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 38, titulo: 'Revisão e simulado do A2', nivel: 'a2',
  objetivo: 'Rever todo o A2 em um mapa, treinar leitura, escuta, escrita e fala, corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou o A2 do inglês. Repita o simulado até acertar quase tudo. Para um certificado oficial, treine também com provas reais e, se possível, com um professor nativo.',
  sessoes: [
    sessao('S1', 'O mapa do A2', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 19 a 37 que você acha difíceis.'),
      gramatica(15, 'O A2 inteiro em uma tabela', 'Esta tabela resume as aulas 19 a 37. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Passado do to be e datas', regra: '«I was», «they were»; ordinais (first, second, third, fifth); data americana: mês + dia.', aula: '19' },
          { tema: 'Passado simples', regra: 'regulares com -ed (pronúncia /t/ /d/ /id/); irregulares por famílias; negativa e pergunta com «did» + verbo simples.', aula: '20, 21' },
          { tema: 'Histórias e used to', regra: 'first, then, after that, finally; «I used to play football.», «didn\'t use to».', aula: '22' },
          { tema: 'Passado contínuo', regra: '«was/were + -ing» para a cena; «while» e «when»; cena (contínuo) + evento (simples).', aula: '23, 24' },
          { tema: 'Futuro', regra: '«will» para decisão e promessa; «going to» para plano e evidência; depois de «if», presente.', aula: '25, 36' },
          { tema: 'Comparativos e superlativos', regra: '-er / more … than; the -est / the most; as … as.', aula: '26' },
          { tema: 'Quantidade', regra: 'much / many / a lot of; a few / a little; enough; medidas para incontáveis.', aula: '27' },
          { tema: 'Modais', regra: 'should (conselho), must / have to (obrigação), mustn\'t (proibido), don\'t have to (não precisa); might, may, could.', aula: '28, 29' },
          { tema: 'Present perfect', regra: 'have/has + particípio; ever, never, already, yet, just; for e since; contra o passado simples.', aula: '30 a 33' },
          { tema: 'Phrasal verbs', regra: 'separáveis (turn it on) e inseparáveis (look after them); sentidos múltiplos.', aula: '34, 35' },
          { tema: 'Viagem e saúde', regra: 'check in, reservation; «Could you tell me where the station is?»; «I have a headache», «My back hurts».', aula: '36, 37' },
        ],
      }),
      producao(10, 'Fale 3 minutos em inglês: conte uma experiência de vida, um dia no passado, os seus planos, um conselho e uma comparação.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato A2, original)', [
      revisao(5, 'Releia o texto e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'A trip to Canada / Uma viagem ao Canadá', 'Last summer, I went to Canada for the first time. I had never been abroad before, so I was very nervous. I arrived in Toronto on a rainy Monday, and my luggage was lost at the airport. Luckily, the airline found it two days later. I stayed with a friend who has lived there for ten years. We visited the CN Tower, ate a lot of good food and took a train to Niagara Falls. The falls were bigger than I expected. If I have enough money next year, I will go back. I think it is the most beautiful country I have ever visited.',
        'No verão passado, fui ao Canadá pela primeira vez. Eu nunca tinha ido ao exterior, então estava muito nervoso. Cheguei a Toronto numa segunda-feira chuvosa, e a minha bagagem se perdeu no aeroporto. Felizmente, a companhia a encontrou dois dias depois. Fiquei com um amigo que mora lá há dez anos. Visitamos a CN Tower, comemos muita comida boa e pegamos um trem para as Cataratas do Niágara. As cataratas eram maiores do que eu esperava. Se eu tiver dinheiro suficiente no ano que vem, voltarei. Acho que é o país mais bonito que já visitei.',
        [['When did the person go to Canada?', 'Last summer.'], ['What happened at the airport?', 'The luggage was lost.'], ['How long has the friend lived there?', 'For ten years.'], ['What will the person do if there is enough money?', 'Go back next year.']]),
      dialogo(8, 'Planning a weekend / Planejando um fim de semana', 'Dois amigos combinam um passeio.', [
        ['Lucy', 'What are you going to do this weekend, Ben?', 'O que você vai fazer neste fim de semana, Ben?'], ['Ben', 'I\'m not sure. If it is sunny, I will go to the beach. And you?', 'Não sei. Se fizer sol, vou à praia. E você?'], ['Lucy', 'I have to study because I have an exam on Monday. I haven\'t finished yet.', 'Tenho que estudar porque tenho uma prova na segunda. Ainda não terminei.'], ['Ben', 'You should take a break. Last weekend, you studied all day!', 'Você deveria fazer uma pausa. No fim de semana passado, você estudou o dia todo!'], ['Lucy', 'You\'re right. Maybe I will go with you on Sunday.', 'Você tem razão. Talvez eu vá com você no domingo.'], ['Ben', 'Great! I\'ll pick you up at nine.', 'Ótimo! Passo para te buscar às nove.'],
      ]),
      producao(7, 'Responda em voz alta: o que a Lucy vai fazer e por quê. Depois diga o que você faria no lugar dela.'),
    ]),
    sessao('S3', 'Os erros mais comuns do A2 e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete no A2 e a forma certa.'),
      gramatica(15, 'Os 15 erros mais comuns do A2', 'Leia cada par em voz alta: primeiro o errado, depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['I goed to school yesterday.', 'I went to school yesterday.', '«go» é irregular.'], ['Did you went there?', 'Did you go there?', 'Depois de did, verbo simples.'], ['I live here for five years.', 'I have lived here for five years.', 'Continua agora: present perfect.'], ['I have seen her yesterday.', 'I saw her yesterday.', 'yesterday: simples.'],
          ['She is taller that me.', 'She is taller than me.', '«than».'], ['He is more tall.', 'He is taller.', 'Curto: -er.'], ['I have much friends.', 'I have a lot of friends.', 'Afirmativa: a lot of.'], ['You mustn\'t come. (não precisa)', 'You don\'t have to come.', 'Não precisa ≠ proibido.'],
          ['If it will rain, we stay.', 'If it rains, we will stay.', 'Depois de if, presente.'], ['Turn on it.', 'Turn it on.', 'Pronome no meio.'], ['I\'m looking forward to see you.', 'I\'m looking forward to seeing you.', 'to + -ing.'], ['While I cooked, the phone was ringing.', 'While I was cooking, the phone rang.', 'Cena e evento.'],
          ['My luggages are heavy.', 'My luggage is heavy.', 'Incontável.'], ['I am cold. (resfriado)', 'I have a cold.', 'Doença: a cold.'], ['Where did she went?', 'Where did she go?', 'Pergunta com did.'],
        ],
      }),
      producao(10, 'Escreva um texto de cerca de 100 palavras: conte uma viagem ou um fim de semana marcante, com passado, present perfect e um plano com «if». Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do A2', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('I have lived here since 2019', ['I have lived here since 2019', 'I lived here since 2019', 'I have lived here for 2019'], 'I have lived here since 2019', 'Escuta: since.'), ouvir('If it rains, I will stay at home', ['If it rains, I will stay at home', 'If it will rain, I stay at home', 'If it rained, I stayed at home'], 'If it rains, I will stay at home', 'Escuta: primeiro condicional.'), ditado('She was cooking when the phone rang', 'Escreva: she was cooking when the phone rang.'), ditado('I have never been to Canada', 'Escreva: I have never been to Canada.'),
        mc('Leia: «She has just left.» O que aconteceu?', ['Ela acabou de sair.', 'Ela vai sair.', 'Ela nunca sai.'], 'Ela acabou de sair.', 'Leitura: have just.'), mc('Qual frase está correta?', ['You should rest.', 'You shoulds rest.', 'You should to rest.'], 'You should rest.', 'Sem -s, sem to.'), mc('Qual frase está correta?', ['I saw him last week.', 'I have seen him last week.', 'I see him last week.'], 'I saw him last week.', 'last week: simples.'), mc('Qual frase está correta?', ['This bag is cheaper than that one.', 'This bag is more cheap that that one.', 'This bag is cheaper that that one.'], 'This bag is cheaper than that one.', 'cheaper than.'),
        lacuna('I ___ been to Rio twice. (já estive)', ['have', 'did', 'was'], 'have', 'present perfect.'), lacuna('She ___ to wear a uniform. (tem que)', ['has', 'have', 'must'], 'has', 'has to.'), lacuna('I was cooking ___ the phone rang.', ['when', 'while', 'during'], 'when', 'Evento: when.'), lacuna('How ___ money do you have?', ['much', 'many', 'few'], 'much', 'Incontável.'),
        ordem('Ordene: «Have you ever been to Japan?»', ['Have', 'you', 'ever', 'been', 'to', 'Japan'], 'Have you ever been to Japan?', 'Have + sujeito + ever + particípio.'), ordem('Ordene: «If I have time, I will call you.»', ['If', 'I', 'have', 'time,', 'I', 'will', 'call', 'you'], 'If I have time, I will call you.', 'if + presente, will + verbo.'),
        livre('Escreva 5 frases: uma experiência (present perfect), um dia passado (simples), um conselho, um plano e uma comparação.', 'I have visited Japan. Last year I went to Canada. You should rest. I will call you tomorrow. This city is bigger than mine.'),
      ]),
      producao(5, 'Conte em 1 minuto o que você já sabe dizer em inglês agora e o que quer aprender no B1.'),
    ]),
  ],
});
