import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 29, titulo: 'Possibilidade e permissão: may, might e could', nivel: 'a2',
  objetivo: 'Falar de possibilidade com «may/might/could», pedir permissão e fazer pedidos educados, e usar «maybe/perhaps» corretamente.',
  nota: 'Você fala do que talvez aconteça e faz pedidos educados. Próxima aula: o present perfect.',
  sessoes: [
    sessao('S1', 'Might e may: talvez', [
      revisao(5, 'Dê 3 conselhos com «should» e diga uma coisa que é proibida e uma que não é necessária.'),
      palavras(8, [
        ['might', 'máit', 'talvez (possível)', ''], ['may', 'mêi', 'pode ser', ''], ['maybe', 'mêibi', 'talvez', ''], ['perhaps', 'perréps', 'talvez (formal)', ''], ['possible', 'pósibl', 'possível', ''], ['sure', 'chúr', 'certo, seguro', ''], ['probably', 'próbabli', 'provavelmente', ''], ['weather', 'uéder', 'tempo (clima)', ''],
      ]),
      gramatica(12, 'Might, may e maybe', 'PASSO 1: «might» e «may» dizem POSSIBILIDADE, sem certeza: «It might rain.», «She may come.» PASSO 2: eles não mudam e não levam «to»: «He might be late.» PASSO 3: negativa: «might not», «may not»: «I might not go.» PASSO 4: «maybe» é um advérbio (vem no começo da frase): «Maybe it will rain.» PASSO 5: «may be» em duas palavras é o verbo: «It may be true.» PASSO 6: «might» e «may» são parecidos; no dia a dia o «might» é um pouco mais comum no inglês americano para possibilidade.', {
        tag: 'Possibilidade',
        comparacao: 'em português «pode ser que chova» e «talvez chova» cobrem tudo. O inglês usa «it might rain», «it may rain» ou «maybe it will rain».',
        tabela: [
          { forma: 'might', exemplo: 'It might rain tomorrow.', sentido: 'possível' }, { forma: 'may', exemplo: 'She may come late.', sentido: 'possível' }, { forma: 'maybe', exemplo: 'Maybe he is sick.', sentido: 'advérbio' }, { forma: 'may be', exemplo: 'It may be true.', sentido: 'verbo' },
        ],
        erros: [['It mights rain.', 'It might rain.', 'Sem -s.'], ['She may to come.', 'She may come.', 'Sem «to».'], ['It maybe rain.', 'It may rain. / Maybe it will rain.', '«maybe» não vem depois do sujeito como verbo.'], ['Do you might come?', 'Might you come? / Will you maybe come?', '«might» não usa do.']],
      }),
      producao(5, 'Faça 5 previsões sobre o seu fim de semana com «might» e «may».'),
    ]),
    sessao('S2', 'Could: possibilidade e pedido', [
      revisao(4, 'Faça 3 previsões com «might» e 2 com «maybe».'),
      palavras(6, [
        ['could', 'cúd', 'poderia', ''], ['couldn\'t', 'cúdnt', 'não poderia', ''], ['borrow', 'bórou', 'pegar emprestado', ''], ['lend', 'lénd', 'emprestar', ''], ['pen', 'pén', 'caneta', ''], ['favor', 'fêivor', 'favor', ''],
      ]),
      gramatica(12, 'Could para pedir e para possibilidade', 'PASSO 1: «Could you…?» é um PEDIDO educado: «Could you open the window, please?» PASSO 2: «Could I…?» pede PERMISSÃO educada: «Could I borrow your pen?» PASSO 3: respostas: «Of course.», «Sure.», «Sorry, I need it.» PASSO 4: «could» também indica POSSIBILIDADE: «It could be a mistake.» PASSO 5: «could» era também o passado de «can» para habilidade: «I could swim when I was five.» Mas para um fato único, use «was able to»: «I was able to finish the work yesterday.» PASSO 6: «may I» é mais formal: «May I come in?»', {
        tag: 'Could',
        comparacao: 'em português «você poderia…?» e «posso…?» têm graus de formalidade parecidos. O inglês gradua: «Can I…?» (comum), «Could I…?» (educado), «May I…?» (formal).',
        tabela: [
          { forma: 'Can I…?', tom: 'comum', exemplo: 'Can I use your phone?' }, { forma: 'Could I…?', tom: 'educado', exemplo: 'Could I borrow your pen?' }, { forma: 'May I…?', tom: 'formal', exemplo: 'May I come in?' }, { forma: 'Could you…?', tom: 'educado', exemplo: 'Could you help me?' },
        ],
        erros: [['Could you to help me?', 'Could you help me?', 'Sem «to».'], ['I could finish the work yesterday. (fato único)', 'I was able to finish the work yesterday.', 'Fato único passado: was able to.'], ['Do you could help me?', 'Could you help me?', '«could» não usa do.']],
      }),
      producao(8, 'Faça 6 pedidos educados a pessoas diferentes: um colega, um professor, um garçom, um vizinho, um desconhecido e um chefe.'),
    ]),
    sessao('S3', 'Pedidos e respostas na vida real', [
      revisao(4, 'Faça um pedido com «could» e uma pergunta de permissão com «may».'),
      palavras(5, [
        ['borrow', 'bórou', 'pegar emprestado', ''], ['lend', 'lénd', 'emprestar', ''], ['charger', 'tchárdjer', 'carregador', ''], ['seat', 'siit', 'assento', ''], ['of course', 'óv córs', 'claro', ''],
      ]),
      gramatica(8, 'Borrow ou lend?', 'PASSO 1: «borrow» = pegar emprestado (você recebe): «Can I borrow your charger?» PASSO 2: «lend» = emprestar (você dá): «Can you lend me your charger?» PASSO 3: não troque: «Can you borrow me…» está errado. PASSO 4: respostas gentis: «Sure, here you go.», «Of course, no problem.», «Sorry, I\'m using it right now.»', {
        tag: 'Borrow x lend',
        comparacao: 'em português «emprestar» serve para os dois lados («me empresta» e «peguei emprestado»). Em inglês, borrow e lend são verbos diferentes.',
        tabela: [
          { verbo: 'borrow', sentido: 'pegar emprestado', exemplo: 'Can I borrow your pen?' }, { verbo: 'lend', sentido: 'emprestar a alguém', exemplo: 'Can you lend me your pen?' },
        ],
        erros: [['Can you borrow me your pen?', 'Can you lend me your pen?', 'Quem dá usa lend.'], ['Can I lend your pen?', 'Can I borrow your pen?', 'Quem pega usa borrow.']],
      }),
      dialogo(8, 'On the train / No trem', 'Julia e um passageiro no trem.', [
        ['Julia', 'Excuse me, could I sit here?', 'Com licença, posso sentar aqui?'], ['Paul', 'Of course. The seat is free.', 'Claro. O assento está livre.'], ['Julia', 'Thanks. Could you also help me with my bag? It\'s very heavy.', 'Obrigada. O senhor também poderia me ajudar com a bolsa? É muito pesada.'], ['Paul', 'Sure, here you go.', 'Claro, aqui está.'], ['Julia', 'My phone might die soon. May I borrow your charger?', 'Meu celular pode descarregar logo. Posso pegar o seu carregador emprestado?'], ['Paul', 'I\'m sorry, I don\'t have one. Maybe the conductor has one.', 'Sinto muito, não tenho. Talvez o condutor tenha.'],
      ]),
      producao(5, 'Escreva um diálogo de 6 falas com 3 pedidos educados usando «could», «may» e «can».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 29', [
      revisao(5, 'Faça pedidos educados e dê respostas gentis em voz alta.'),
      exercicios(20, [
        ouvir('It might rain tomorrow', ['It might rain tomorrow', 'It will rain tomorrow', 'It rained tomorrow'], 'It might rain tomorrow', 'Ouça «might».'), ouvir('Could you open the window, please', ['Could you open the window, please', 'Can you open the window', 'Could you close the window, please'], 'Could you open the window, please', 'Ouça «could you».'), ditado('May I come in', 'Escreva: may I come in.'), ditado('Can I borrow your pen', 'Escreva: can I borrow your pen.'),
        mc('Qual frase indica possibilidade?', ['She might come.', 'She comes.', 'She came.'], 'She might come.', 'might = possibilidade.'), mc('Qual é o pedido mais educado?', ['Could you help me, please?', 'Help me.', 'You help me?'], 'Could you help me, please?', 'Could + please.'), mc('Qual verbo vai com «pegar emprestado»?', ['borrow', 'lend', 'give'], 'borrow', 'borrow = pegar.'), mc('Qual frase está correta?', ['It might rain.', 'It mights rain.', 'It might to rain.'], 'It might rain.', 'Sem -s, sem to.'),
        lacuna('___ it will rain. (talvez)', ['Maybe', 'May be', 'Might'], 'Maybe', 'Advérbio no começo.'), lacuna('Can you ___ me your pen? (emprestar)', ['lend', 'borrow', 'lending'], 'lend', 'lend = dar.'), lacuna('___ I come in? (formal)', ['May', 'Do', 'Am'], 'May', 'May I.'), lacuna('She ___ be late. (talvez seja)', ['might', 'mights', 'is'], 'might', 'Sem -s.'),
        ordem('Ordene: «Could you help me, please?»', ['Could', 'you', 'help', 'me,', 'please'], 'Could you help me, please?', 'Could + sujeito + verbo.'), ordem('Ordene: «It might rain tomorrow.»', ['It', 'might', 'rain', 'tomorrow'], 'It might rain tomorrow.', 'might + verbo.'),
        livre('Escreva 4 frases: uma previsão com might, um pedido com could, uma permissão com may e uma com borrow.', 'It might rain tomorrow. Could you help me, please? May I come in? Can I borrow your pen?'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que talvez aconteça na sua semana, com might e maybe.'),
    ]),
  ],
});
