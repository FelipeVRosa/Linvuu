import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 51, titulo: 'Dedução: must be, can\'t be e might be', nivel: 'b1',
  objetivo: 'Fazer deduções sobre o presente e o passado com «must», «can\'t», «might», «could» e «may», distinguindo certeza, impossibilidade e possibilidade.',
  nota: 'Você deduz o que é e o que foi, com graus de certeza. Próxima aula: futuro contínuo e orações de tempo.',
  sessoes: [
    sessao('S1', 'Deduções no presente', [
      revisao(5, 'Fale do que você teme, no que é bom e o que lhe interessa.'),
      palavras(8, [
        ['must be', 'mâst bi', 'deve ser (quase certeza)', ''], ['can\'t be', 'ként bi', 'não pode ser', ''], ['might be', 'máit bi', 'pode ser (talvez)', ''], ['could be', 'cúd bi', 'pode ser', ''], ['evidence', 'évidens', 'evidência', ''], ['clue', 'klu', 'pista', ''], ['certain', 'sãrtn', 'certo', ''], ['obviously', 'óbviusli', 'obviamente', ''],
      ]),
      gramatica(12, 'Deduzir com os modais', 'PASSO 1: use «must» quando você tem QUASE CERTEZA, por causa de evidências: «She is crying. She must be sad.» PASSO 2: use «can\'t» quando você tem QUASE CERTEZA de que NÃO é verdade: «He can\'t be at home. His car isn\'t here.» PASSO 3: use «might/may/could» quando é apenas POSSÍVEL: «He might be at work.» PASSO 4: estrutura: «modal + be + adjetivo/substantivo» ou «modal + verbo»: «She must know the answer.» PASSO 5: a negativa de «must» NÃO é «mustn\'t» (proibição); para dedução, use «can\'t»: «He can\'t be 40» (ele não pode ter 40). PASSO 6: para ação em andamento: «modal + be + -ing»: «They must be sleeping.»', {
        tag: 'Dedução',
        comparacao: 'em português «deve ser» (quase certo) e «não pode ser» (impossível) têm uso parecido. Em inglês, a negativa de «must be» é «can\'t be», nunca «mustn\'t be».',
        tabela: [
          { grau: 'quase certeza (sim)', forma: 'must be', exemplo: 'She must be tired.' }, { grau: 'quase certeza (não)', forma: 'can\'t be', exemplo: 'He can\'t be 40.' }, { grau: 'possível', forma: 'might / may / could be', exemplo: 'He might be at work.' }, { grau: 'em andamento', forma: 'must be + -ing', exemplo: 'They must be sleeping.' },
        ],
        erros: [['He mustn\'t be at home.', 'He can\'t be at home.', 'Dedução negativa: can\'t.'], ['She must to be tired.', 'She must be tired.', 'Sem «to».'], ['He maybe at home.', 'He might be at home. / Maybe he is at home.', 'Use might be ou maybe + sujeito.'], ['She must sleeping.', 'She must be sleeping.', 'Faltou be.']],
      }),
      producao(5, 'Veja 5 situações imaginárias (alguém chorando, uma casa escura, um carro na garagem) e deduza com must, can\'t e might.'),
    ]),
    sessao('S2', 'Deduções no passado', [
      revisao(4, 'Faça 3 deduções com «must be», 2 com «can\'t be» e 2 com «might be».'),
      palavras(6, [
        ['must have', 'mâst rév', 'deve ter', ''], ['can\'t have', 'ként rév', 'não pode ter', ''], ['might have', 'máit rév', 'talvez tenha', ''], ['could have', 'cúd rév', 'pode ter', ''], ['left', 'léft', 'saiu', ''], ['forgotten', 'forgótn', 'esquecido', ''],
      ]),
      gramatica(12, 'Deduzir sobre o passado', 'PASSO 1: use «modal + have + particípio» para deduzir o passado: «The lights are off. They must have gone to bed.» PASSO 2: «can\'t have» = quase impossível ter acontecido: «He can\'t have known. Nobody told him.» PASSO 3: «might/may/could have» = talvez tenha acontecido: «She might have forgotten.» PASSO 4: ação em andamento no passado: «must have been + -ing»: «They must have been sleeping.» PASSO 5: compare com a aula 42: «should have» é arrependimento; aqui o foco é a dedução. PASSO 6: a evidência vem primeiro: descreva o que você vê, e depois conclua.', {
        tag: 'Dedução no passado',
        comparacao: 'em português «deve ter saído» e «não pode ter sido» fazem o mesmo trabalho. Em inglês: «must have left», «can\'t have been».',
        tabela: [
          { forma: 'must have + particípio', exemplo: 'She must have left early.', sentido: 'quase certeza' }, { forma: 'can\'t have + particípio', exemplo: 'He can\'t have known.', sentido: 'impossível' }, { forma: 'might have + particípio', exemplo: 'She might have forgotten.', sentido: 'possível' }, { forma: 'must have been + -ing', exemplo: 'They must have been sleeping.', sentido: 'processo' },
        ],
        erros: [['She must left early.', 'She must have left early.', 'Faltou have.'], ['He mustn\'t have known.', 'He can\'t have known.', 'Dedução: can\'t have.'], ['She might forgot.', 'She might have forgotten.', 'might have + particípio.'], ['They must have sleeping.', 'They must have been sleeping.', 'must have been + -ing.']],
      }),
      producao(8, 'Faça 6 deduções sobre o passado olhando evidências: uma xícara vazia, uma janela quebrada, um bilhete na mesa.'),
    ]),
    sessao('S3', 'Resolver um mistério', [
      revisao(4, 'Deduza: «O chão está molhado. As luzes estão acesas. A porta está aberta.»'),
      palavras(5, [
        ['mystery', 'místeri', 'mistério', ''], ['footprints', 'fútprints', 'pegadas', ''], ['window', 'uíndou', 'janela', ''], ['broken', 'brôuken', 'quebrado', ''], ['thief', 'thiif', 'ladrão', ''],
      ]),
      gramatica(8, 'Argumentar com evidências', 'PASSO 1: use «must», «can\'t» e «might» em sequência para construir o raciocínio. PASSO 2: «It can\'t have been a stranger, because the dog didn\'t bark.» PASSO 3: «It must have been someone who knew the house.» PASSO 4: «It might have been the neighbor, but we can\'t be sure.» PASSO 5: conclua: «So the thief must be someone we know.»', {
        tag: 'Raciocínio',
        comparacao: 'em português encadeamos «deve», «não pode» e «talvez» sem pensar. Em inglês, cada um tem forma própria: must (certeza), can\'t (impossível), might (possível).',
        tabela: [
          { evidencia: 'The window is broken.', conclusao: 'Someone must have broken in.' }, { evidencia: 'The dog didn\'t bark.', conclusao: 'It can\'t have been a stranger.' }, { evidencia: 'There are muddy footprints.', conclusao: 'It might have been someone from the garden.' },
        ],
        erros: [['It maybe have been the neighbor.', 'It might have been the neighbor.', 'might have been.'], ['It mustn\'t have been a stranger.', 'It can\'t have been a stranger.', 'Dedução negativa.']],
      }),
      texto(8, 'The mystery of the missing cake / O mistério do bolo sumido', 'When I came home, the cake that I had made was gone. The kitchen window was open, and there were small footprints on the floor. It can\'t have been a thief, because nothing else was missing. It might have been a neighbor, but the door was locked. The footprints were small, so it must have been a child or an animal. My dog was sleeping in the garden, so it can\'t have been him. Then I saw my little nephew, with chocolate on his face. He must have eaten it!',
        'Quando cheguei em casa, o bolo que eu tinha feito tinha sumido. A janela da cozinha estava aberta e havia pequenas pegadas no chão. Não pode ter sido um ladrão, porque nada mais faltava. Pode ter sido um vizinho, mas a porta estava trancada. As pegadas eram pequenas, então deve ter sido uma criança ou um animal. Meu cachorro dormia no jardim, então não pode ter sido ele. Então vi o meu sobrinho com chocolate no rosto. Ele deve ter comido!',
        [['What was missing?', 'The cake.'], ['Why can\'t it have been a thief?', 'Nothing else was missing.'], ['Why can\'t it have been the dog?', 'He was sleeping in the garden.'], ['Who must have eaten it?', 'The nephew.']]),
      producao(5, 'Escreva um mistério de 6 frases e resolva-o com must have, can\'t have e might have.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 51', [
      revisao(5, 'Faça deduções sobre 3 situações imaginárias, no presente e no passado.'),
      exercicios(20, [
        ouvir('She must be tired', ['She must be tired', 'She can\'t be tired', 'She might be tired'], 'She must be tired', 'Ouça «must».'), ouvir('He can\'t have known', ['He can\'t have known', 'He must have known', 'He might have known'], 'He can\'t have known', 'Ouça «can\'t have».'), ditado('They must have gone to bed', 'Escreva: they must have gone to bed.'), ditado('She might have forgotten', 'Escreva: she might have forgotten.'),
        mc('Qual forma expressa quase certeza?', ['must be', 'might be', 'can\'t be'], 'must be', 'must.'), mc('Qual é a dedução negativa de «must be»?', ['can\'t be', 'mustn\'t be', 'don\'t be'], 'can\'t be', 'can\'t be.'), mc('Qual frase está correta?', ['She must have left early.', 'She must left early.', 'She must has left early.'], 'She must have left early.', 'must have + particípio.'), mc('Qual forma expressa apenas possibilidade?', ['might', 'must', 'can\'t'], 'might', 'might.'),
        lacuna('He ___ be at home. His car isn\'t here. (não pode)', ['can\'t', 'mustn\'t', 'shouldn\'t'], 'can\'t', 'can\'t.'), lacuna('She ___ have forgotten. (talvez)', ['might', 'must to', 'can'], 'might', 'might have.'), lacuna('They must ___ sleeping. (estar)', ['be', 'been', 'being'], 'be', 'must be + -ing.'), lacuna('It can\'t have ___ a thief. (sido)', ['been', 'be', 'being'], 'been', 'have been.'),
        ordem('Ordene: «She must be very tired.»', ['She', 'must', 'be', 'very', 'tired'], 'She must be very tired.', 'must be + adjetivo.'), ordem('Ordene: «He can\'t have known the answer.»', ['He', 'can\'t', 'have', 'known', 'the', 'answer'], 'He can\'t have known the answer.', 'can\'t have + particípio.'),
        livre('Escreva 4 deduções: uma com must be, uma com can\'t be, uma com might have e uma com must have.', 'She must be tired. He can\'t be at home. She might have forgotten. They must have left.'),
      ]),
      producao(5, 'Fale 1 minuto de um mistério que você viveu e como deduziu a resposta.'),
    ]),
  ],
});
