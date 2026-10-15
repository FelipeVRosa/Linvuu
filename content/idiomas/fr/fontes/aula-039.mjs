import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 39, titulo: 'O plus-que-parfait: o passado do passado', nivel: 'b1',
  objetivo: 'Formar e usar o plus-que-parfait para contar o que já tinha acontecido antes de outro fato no passado e ordenar os acontecimentos de uma história.',
  nota: 'Você organiza o tempo de uma história em três camadas. Próxima aula: discurso indireto.',
  sessoes: [
    sessao('S1', 'Formar o plus-que-parfait', [
      revisao(5, 'Conte em voz alta um fato passado com cenário e acontecimento.'),
      palavras(8, [
        ['déjà', 'dejá', 'já', ''], ['avant', 'avã', 'antes', ''], ['déjà parti', 'dejá parti', 'já tinha saído', ''], ['pas encore', 'pa zãkór', 'ainda não', ''], ['quand', 'kã', 'quando', ''], ['lorsque', 'lorsk', 'quando (formal)', ''], ['dès que', 'dé kö', 'assim que', ''], ['après que', 'aprê kö', 'depois que', ''],
      ]),
      gramatica(12, 'J\'avais mangé, j\'étais parti', 'PASSO 1: o plus-que-parfait forma-se com o IMPARFAIT de «avoir» ou «être» + particípio passado: «j\'avais mangé», «tu avais fini», «il était parti», «nous étions arrivés». PASSO 2: a escolha do auxiliar é a mesma do passé composé: «aller, venir, arriver, partir, entrer, sortir, rester, naître, mourir» e os pronominais usam «être». PASSO 3: com «être», o particípio concorda: «elle était partie», «ils étaient arrivés». PASSO 4: o plus-que-parfait marca o que aconteceu ANTES de outro fato do passado: «Quand je suis arrivé, il était déjà parti.» PASSO 5: advérbios que ajudam: «déjà, pas encore, enfin, finalement». PASSO 6: negação: «Je n\'avais pas mangé.» «Il n\'était pas encore arrivé.» PASSO 7: pronomes antes do auxiliar: «Je l\'avais vu.» «Je ne l\'avais jamais vu.» PASSO 8: pergunta: «Avais-tu déjà mangé ?» «Est-ce qu\'il était déjà parti ?»', {
        tag: 'Passado',
        comparacao: 'em português o pretérito mais-que-perfeito composto é «eu tinha comido» e o simples «eu comera» (literário). O francês só tem a forma composta, e ela se usa muito: «j\'avais mangé». É o equivalente direto de «eu tinha comido».',
        tabela: [
          { pessoa: 'je', avoir: 'j\'avais mangé', etre: 'j\'étais parti(e)' }, { pessoa: 'tu', avoir: 'tu avais mangé', etre: 'tu étais parti(e)' }, { pessoa: 'il / elle', avoir: 'il avait mangé', etre: 'il était parti / elle était partie' }, { pessoa: 'nous', avoir: 'nous avions mangé', etre: 'nous étions partis' }, { pessoa: 'vous', avoir: 'vous aviez mangé', etre: 'vous étiez parti(s)' }, { pessoa: 'ils / elles', avoir: 'ils avaient mangé', etre: 'ils étaient partis / elles étaient parties' },
        ],
        erros: [['Quand je suis arrivé, il est déjà parti.', 'Quand je suis arrivé, il était déjà parti.', 'Antes de outro passado: plus-que-parfait.'], ['J\'avais allé à Paris.', 'J\'étais allé à Paris.', '«Aller» usa «être».'], ['Elle était parti.', 'Elle était partie.', 'Concordância.'], ['J\'ai avais mangé.', 'J\'avais mangé.', 'Um só auxiliar.']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que você já tinha feito antes de começar o dia hoje.'),
    ]),
    sessao('S2', 'Ordenar os fatos de uma história', [
      revisao(4, 'Conjugue em voz alta «finir, partir, voir, se lever» no plus-que-parfait com «je».'),
      palavras(6, [
        ['au début', 'o debü', 'no começo', ''], ['ensuite', 'ãsüit', 'em seguida', ''], ['finalement', 'finalmã', 'finalmente', ''], ['la veille', 'la véi', 'na véspera', ''], ['le lendemain', 'lö lãdömẽ', 'no dia seguinte', ''], ['l\'année précédente', 'lané presedãt', 'no ano anterior', ''],
      ]),
      gramatica(12, 'Três tempos em uma história', 'PASSO 1: uma história no passado usa três camadas: plus-que-parfait (o que já tinha acontecido), passé composé (os acontecimentos) e imparfait (o cenário e os hábitos). PASSO 2: exemplo: «La veille, j\'avais perdu mes clés (plus-que-parfait). Le lendemain, je suis arrivé en retard (passé composé). Il pleuvait (imparfait) et j\'étais fatigué.» PASSO 3: referências de tempo no passado: «la veille» (na véspera), «le lendemain» (no dia seguinte), «l\'année précédente» (no ano anterior), «deux jours avant» (dois dias antes), «une semaine plus tard» (uma semana depois). PASSO 4: «dès que» e «après que» com plus-que-parfait: «Dès qu\'il avait fini, il partait.» PASSO 5: «avant de» + infinitivo: «Avant de partir, j\'avais fermé la porte.» PASSO 6: «après» + infinitivo passado: «Après avoir mangé, je suis sorti.» «Après être arrivé, il a appelé.» PASSO 7: o infinitivo passado forma-se com «avoir» ou «être» no infinitivo + particípio: «avoir mangé», «être parti». PASSO 8: «après avoir» + particípio só é possível se o sujeito for o mesmo nos dois verbos: «Après avoir mangé, je suis sorti.»', {
        tag: 'Passado',
        comparacao: 'em português dizemos «depois de comer, saí». O francês faz «après avoir mangé, je suis sorti», com o infinitivo passado. Não se pode dizer «après manger». O sujeito deve ser o mesmo nas duas partes da frase.',
        tabela: [
          { tempo: 'plus-que-parfait', uso: 'o que já tinha acontecido', exemplo: 'La veille, j\'avais perdu mes clés.' }, { tempo: 'passé composé', uso: 'o acontecimento', exemplo: 'Le lendemain, je suis arrivé en retard.' }, { tempo: 'imparfait', uso: 'o cenário', exemplo: 'Il pleuvait.' }, { tempo: 'infinitivo passado', uso: 'depois de fazer', exemplo: 'Après avoir mangé, je suis sorti.' },
        ],
        erros: [['Après manger, je suis sorti.', 'Après avoir mangé, je suis sorti.', 'Infinitivo passado.'], ['Après être arrivé, elle a appelé.', 'Après être arrivée, elle a appelé.', 'O particípio concorda com «elle».'], ['La veille, j\'ai perdu mes clés. (já tinha perdido)', 'La veille, j\'avais perdu mes clés.', 'Anterior: plus-que-parfait.'], ['Avant de je partir, j\'avais fermé la porte.', 'Avant de partir, j\'avais fermé la porte.', 'Infinitivo depois de «avant de».']],
      }),
      producao(8, 'Conte em voz alta uma história de oito frases usando plus-que-parfait, passé composé e imparfait.'),
    ]),
    sessao('S3', 'Um dia ruim', [
      revisao(4, 'Diga três frases com «après avoir» + particípio.'),
      palavras(5, [
        ['la panne', 'la pan', 'o defeito, a pane', ''], ['le retard', 'lö retar', 'o atraso', ''], ['rater', 'raté', 'perder (trem, aula)', ''], ['s\'énerver', 'sênervé', 'irritar-se', ''], ['heureusement', 'örözmã', 'felizmente', ''],
      ]),
      gramatica(8, 'Contar uma sequência de infortúnios', 'PASSO 1: para um dia ruim: «Ce jour-là, tout allait mal.» PASSO 2: causas anteriores: «Je m\'étais couché tard.» «Mon réveil n\'avait pas sonné.» PASSO 3: consequências: «J\'ai raté mon train.» «Je suis arrivé en retard.» PASSO 4: reações: «Mon chef s\'est énervé.» «Heureusement, il m\'a pardonné.» PASSO 5: palavras de ligação: «à cause de», «parce que», «du coup» (por isso), «résultat» (resultado).', {
        tag: 'Passado',
        comparacao: 'em português dizemos «eu tinha dormido tarde, então perdi o trem». O francês faz o mesmo com «du coup» ou «alors»: «je m\'étais couché tard, du coup j\'ai raté mon train». «Du coup» é muito comum na fala e marca consequência.',
        tabela: [
          { fato: 'causa anterior', frase: 'Je m\'étais couché tard.' }, { fato: 'consequência', frase: 'Du coup, j\'ai raté mon train.' }, { fato: 'resultado', frase: 'Je suis arrivé en retard.' }, { fato: 'reação', frase: 'Mon chef s\'est énervé.' }, { fato: 'final feliz', frase: 'Heureusement, il m\'a pardonné.' },
        ],
        erros: [['Je me suis couché tard, du coup j\'avais raté mon train.', 'Je m\'étais couché tard, du coup j\'ai raté mon train.', 'A causa vem antes: plus-que-parfait.'], ['Mon réveil n\'a pas sonné quand je me suis réveillé.', 'Mon réveil n\'avait pas sonné quand je me suis réveillé.', 'Causa anterior.'], ['Heureux, il m\'a pardonné.', 'Heureusement, il m\'a pardonné.', 'Advérbio.'], ['J\'ai raté le train à cause de je me suis levé tard.', 'J\'ai raté le train parce que je m\'étais levé tard.', '«Parce que» + frase.']],
      }),
      texto(8, 'Une journée difficile / Um dia difícil', 'Ce jour-là, tout a mal commencé. La veille, je m\'étais couché très tard et mon réveil n\'avait pas sonné. Quand je me suis réveillé, il était déjà huit heures. Je me suis habillé rapidement, mais j\'ai raté mon bus. Après avoir attendu vingt minutes, j\'ai pris un taxi. En arrivant au bureau, j\'ai découvert que mon patron était déjà parti en réunion. Heureusement, ma collègue m\'avait gardé des notes. Le soir, j\'étais épuisé, mais content : le pire était derrière moi.', 'Naquele dia, tudo começou mal. Na véspera, eu havia me deitado muito tarde e meu despertador não tinha tocado. Quando acordei, já eram oito horas. Vesti-me rapidamente, mas perdi o ônibus. Depois de esperar vinte minutos, peguei um táxi. Ao chegar ao escritório, descobri que meu chefe já tinha saído para uma reunião. Felizmente, minha colega havia guardado anotações para mim. À noite, eu estava exausto, mas contente: o pior tinha ficado para trás.', [['Pourquoi le réveil n\'a-t-il pas sonné ?', 'On ne sait pas, il n\'avait pas sonné.'], ['Qu\'est-ce que l\'auteur a fait après avoir attendu vingt minutes ?', 'Il a pris un taxi.'], ['Où était le patron en arrivant ?', 'Il était déjà parti en réunion.'], ['Que lui avait gardé sa collègue ?', 'Des notes.']]),
      producao(5, 'Conte em voz alta um dia em que tudo deu errado, com plus-que-parfait.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 39', [
      revisao(5, 'Conte em voz alta o que já tinha acontecido antes de você acordar.'),
      exercicios(20, [
        ouvir('Quand je suis arrivé, il était déjà parti', ['Quand je suis arrivé, il était déjà parti', 'Quand je suis arrivé, il est déjà parti', 'Quand j\'arrivais, il était déjà parti'], 'Quand je suis arrivé, il était déjà parti', 'Ouça «était déjà parti».'), ouvir('J\'avais déjà mangé', ['J\'avais déjà mangé', 'J\'ai déjà mangé', 'Je mangeais déjà'], 'J\'avais déjà mangé', 'Ouça «avais».'), ouvir('Après avoir mangé, je suis sorti', ['Après avoir mangé, je suis sorti', 'Après manger, je suis sorti', 'Après avoir mangé, je sors'], 'Après avoir mangé, je suis sorti', 'Ouça «après avoir».'),
        ditado('La veille, j\'avais perdu mes clés', 'Escreva: La veille, j\'avais perdu mes clés.'), ditado('Elle était déjà partie', 'Escreva: Elle était déjà partie.'), ditado('Heureusement, il m\'a pardonné', 'Escreva: Heureusement, il m\'a pardonné.'),
        mc('«Eu tinha comido» em francês:', ['J\'avais mangé.', 'J\'ai mangé.', 'Je mangeais.'], 'J\'avais mangé.', 'Plus-que-parfait.'), mc('Qual frase está correta?', ['Elle était partie.', 'Elle était parti.', 'Elle avait partie.'], 'Elle était partie.', 'Concordância.'), mc('Qual frase está correta?', ['Après avoir mangé, je suis sorti.', 'Après manger, je suis sorti.', 'Après avoir manger, je suis sorti.'], 'Après avoir mangé, je suis sorti.', 'Infinitivo passado.'), mc('«No dia seguinte» em francês:', ['le lendemain', 'la veille', 'hier'], 'le lendemain', 'Marcador de tempo.'),
        lacuna('Quand je suis arrivé, il ___ déjà parti.', ['était', 'est', 'avait'], 'était', 'Plus-que-parfait com «être».'), lacuna('J\'___ perdu mes clés la veille.', ['avais', 'ai', 'étais'], 'avais', 'Plus-que-parfait com «avoir».'), lacuna('Nous ___ arrivés trop tard. (tínhamos)', ['étions', 'avions', 'sommes'], 'étions', '«Arriver» usa «être».'), lacuna('Après ___ mangé, je suis sorti.', ['avoir', 'être', 'avais'], 'avoir', 'Infinitivo passado.'),
        ordem('Ordene: «La veille, je m\'étais couché tard.»', ['La', 'veille,', 'je', 'm\'étais', 'couché', 'tard'], 'La veille, je m\'étais couché tard.', 'Plus-que-parfait pronominal.'), ordem('Ordene: «Il n\'était pas encore arrivé.»', ['Il', 'n\'était', 'pas', 'encore', 'arrivé'], 'Il n\'était pas encore arrivé.', 'Negação.'),
        livre('Escreva em francês: Quando cheguei, ele já tinha saído. Na véspera, eu tinha perdido as minhas chaves. Depois de comer, eu saí.', 'Quand je suis arrivé, il était déjà parti. La veille, j\'avais perdu mes clés. Après avoir mangé, je suis sorti.'),
        lacuna('Quand je suis arrivé, elle ___ déjà partie. (tinha)', ['était', 'avait', 'est'], 'était', '«Partir» usa «être»: «elle était partie».'),
        lacuna('Nous ___ déjà mangé. (tínhamos)', ['étions', 'avions', 'avons'], 'avions', '«Manger» usa «avoir»: imparfait «avions».'),
        lacuna('Elle était ___ avant moi. (partir)', ['parti', 'partis', 'partie'], 'partie', 'O particípio concorda com o sujeito feminino.'),
        lacuna('Je n\'avais ___ encore mangé. (ainda não)', ['pas', 'jamais', 'plus'], 'pas', '«Ne… pas encore» = ainda não.'),
        lacuna('___ de partir, j\'avais fermé la porte. (antes)', ['Après', 'Avant', 'Pendant'], 'Avant', '«Avant de» + infinitivo.'),
        mc('Qual frase está correta?', ['Ils avaient arrivés avant nous.', 'Ils étaient arrivé avant nous.', 'Ils étaient arrivés avant nous.'], 'Ils étaient arrivés avant nous.', '«Arriver» usa «être» e o particípio concorda.'),
        mc('Como dizer «Depois de chegar» (ele)?', ['Après être arrivé', 'Après arriver', 'Après avoir arrivé'], 'Après être arrivé', 'Infinitivo passado de «arriver»: «être arrivé».'),
        mc('Em «Quand je suis arrivé, il avait déjà mangé», qual fato veio primeiro?', ['Eu chegar', 'Ele comer', 'Os dois ao mesmo tempo'], 'Ele comer', 'O plus-que-parfait marca o fato mais antigo.'),
        mc('Qual expressão significa «na véspera»?', ['le lendemain', 'avant-hier', 'la veille'], 'la veille', '«La veille» = na véspera.'),
        ordem('Ordene: «Ela já tinha terminado o trabalho.»', ['Elle', 'avait', 'déjà', 'fini', 'son', 'travail'], 'Elle avait déjà fini son travail.', '«Avoir» no imparfait + particípio.'),
        ordem('Ordene: «Nós tínhamos chegado antes da chuva.»', ['Nous', 'étions', 'arrivés', 'avant', 'la', 'pluie'], 'Nous étions arrivés avant la pluie.', '«Arriver» usa «être».'),
        livre('Escreva em francês: Eu não tinha comido. Ela ainda não tinha chegado.', 'Je n\'avais pas mangé. Elle n\'était pas encore arrivée.'),
        livre('Escreva em francês: Depois de jantar, nós saímos. No dia seguinte, eu estava cansado.', 'Après avoir dîné, nous sommes sortis. Le lendemain, j\'étais fatigué.'),
      ]),
      producao(5, 'Fale 1 minuto sobre um acontecimento que mudou um dia seu, mostrando o que já tinha acontecido antes.'),
    ]),
  ],
});
