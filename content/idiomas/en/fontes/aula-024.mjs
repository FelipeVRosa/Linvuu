import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 24, titulo: 'Passado simples e contínuo juntos', nivel: 'a2',
  objetivo: 'Combinar passado contínuo (a cena) e passado simples (o evento) com «when» e «while», e contar uma história com cena e acontecimento.',
  nota: 'Você conta uma história com fundo e ação. Próxima aula: will e going to.',
  sessoes: [
    sessao('S1', 'Cena e evento', [
      revisao(5, 'Diga o que você estava fazendo em 3 horários de ontem.'),
      palavras(8, [
        ['when', 'uén', 'quando', ''], ['while', 'uáil', 'enquanto', ''], ['ring', 'ring', 'tocar', ''], ['arrive', 'aráiv', 'chegar', ''], ['fall', 'fól', 'cair', ''], ['break', 'brêik', 'quebrar', ''], ['leave', 'liiv', 'sair, deixar', ''], ['notice', 'nôutis', 'perceber', ''],
      ]),
      gramatica(12, 'Quando uma ação interrompe a outra', 'PASSO 1: o CONTÍNUO descreve a cena em andamento; o SIMPLES descreve o evento que interrompe. PASSO 2: «I was cooking when the phone rang.» (cozinhava / telefone tocou). PASSO 3: «while» costuma ir com o contínuo: «While I was cooking, the phone rang.» PASSO 4: «when» costuma ir com o simples: «When the phone rang, I was cooking.» PASSO 5: duas ações SEGUIDAS usam só o simples: «When I arrived, he left.» (primeiro cheguei, depois ele saiu). Compare com «When I arrived, he was leaving» (ele já estava saindo). PASSO 6: duas ações simultâneas de fundo usam o contínuo nas duas.', {
        tag: 'Simples e contínuo',
        comparacao: 'em português o imperfeito marca a cena («cozinhava») e o perfeito marca o evento («tocou»). Em inglês, contínuo = cena, simples = evento.',
        tabela: [
          { cena: 'I was cooking', evento: 'when the phone rang.' }, { cena: 'She was walking home', evento: 'when it started to rain.' }, { cena: 'They were sleeping', evento: 'when the alarm went off.' },
        ],
        erros: [['I cooked when the phone was ringing.', 'I was cooking when the phone rang.', 'A cena é o contínuo.'], ['While I was cooking, the phone was ringing.', 'While I was cooking, the phone rang.', 'O evento é simples.'], ['When I was arriving, he left.', 'When I arrived, he left.', 'Ações seguidas: simples.']],
      }),
      producao(5, 'Diga 5 frases com «was/were -ing when + simples».'),
    ]),
    sessao('S2', 'While e when: a ordem das ideias', [
      revisao(4, 'Complete: «I was ___ (walk) when it ___ (start) to rain.»'),
      palavras(6, [
        ['suddenly', 'sâdenli', 'de repente', ''], ['accident', 'éksident', 'acidente', ''], ['hurt', 'hãrt', 'machucar', ''], ['luckily', 'lâkili', 'felizmente', ''], ['notice', 'nôutis', 'perceber', ''], ['lose', 'luz', 'perder', ''],
      ]),
      gramatica(12, 'Montar frases com while e when', 'PASSO 1: duas ordens são possíveis, com a mesma ideia: «While I was walking, I saw an accident.» ou «I saw an accident while I was walking.» PASSO 2: se a oração com «while/when» abrir a frase, use VÍRGULA. PASSO 3: se vier no fim, sem vírgula. PASSO 4: «while» + contínuo, «when» + simples (a regra mais comum). PASSO 5: «As» também pode substituir «while» em narrativas: «As I was leaving, I noticed the door was open.»', {
        tag: 'While/when',
        comparacao: 'em português a vírgula não é regra tão rígida. Em inglês, quando a oração subordinada abre a frase, use a vírgula; no final, não.',
        tabela: [
          { ordem: 'While no começo', exemplo: 'While I was walking, I saw an accident.' }, { ordem: 'While no fim', exemplo: 'I saw an accident while I was walking.' }, { ordem: 'When no começo', exemplo: 'When the phone rang, I was cooking.' },
        ],
        erros: [['While I was walking I saw an accident.', 'While I was walking, I saw an accident.', 'Vírgula depois da oração inicial.'], ['I saw an accident, while I was walking.', 'I saw an accident while I was walking.', 'Sem vírgula no fim.']],
      }),
      producao(8, 'Escreva 4 frases combinando cena e evento, 2 com while no começo e 2 com when no fim.'),
    ]),
    sessao('S3', 'Uma história completa', [
      revisao(4, 'Diga 3 coisas que aconteceram quando você estava fazendo outra coisa.'),
      palavras(5, [
        ['wallet', 'uólit', 'carteira', ''], ['stranger', 'strêindjer', 'desconhecido', ''], ['run after', 'rân éfter', 'correr atrás de', ''], ['police', 'polís', 'polícia', ''], ['safe', 'sêif', 'seguro', ''],
      ]),
      gramatica(8, 'Boas histórias têm fundo e ação', 'PASSO 1: comece com o CENÁRIO no contínuo: «It was a sunny day and I was walking in the park.» PASSO 2: introduza o evento no simples: «Suddenly, a dog ran toward me.» PASSO 3: narre as consequências no simples em sequência: «I stopped, I jumped and I fell.» PASSO 4: termine com o resultado: «Luckily, I wasn\'t hurt.» PASSO 5: evite misturar o presente no meio da história passada.', {
        tag: 'Narrativa',
        comparacao: 'em português costumamos misturar presente e pretérito ao contar («aí ele chega e diz...»). Em inglês escrito, mantenha o passado do início ao fim.',
        tabela: [
          { parte: 'Cenário', tempo: 'passado contínuo', exemplo: 'It was raining.' }, { parte: 'Evento', tempo: 'passado simples', exemplo: 'A man ran past me.' }, { parte: 'Consequência', tempo: 'passado simples', exemplo: 'I called the police.' },
        ],
        erros: [['I was walking and suddenly a dog runs.', 'I was walking and suddenly a dog ran.', 'Não mude para o presente.'], ['It rained and I walked.', 'It was raining and I was walking.', 'Cenário: contínuo.']],
      }),
      texto(8, 'The stolen wallet / A carteira roubada', 'It was a busy morning and I was waiting for the bus. While I was reading a message on my phone, a stranger took my wallet. I noticed it when I wanted to pay. I ran after him, but he was too fast. Luckily, a police officer was standing at the corner. He stopped the man and I got my wallet back. After that, I was very careful with my bag.',
        'Era uma manhã movimentada e eu esperava o ônibus. Enquanto lia uma mensagem no celular, um desconhecido pegou a minha carteira. Percebi quando quis pagar. Corri atrás dele, mas ele era rápido demais. Felizmente, um policial estava na esquina. Ele parou o homem e eu recuperei a carteira. Depois disso, fiquei muito atento com a minha bolsa.',
        [['What was the person doing when the stranger took the wallet?', 'Reading a message on the phone.'], ['When did the person notice it?', 'When they wanted to pay.'], ['Who stopped the man?', 'A police officer.'], ['How was the person after that?', 'Very careful with the bag.']]),
      producao(5, 'Escreva uma história de 6 frases com cenário no contínuo e dois eventos no simples.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 24', [
      revisao(5, 'Conte em voz alta uma história com cena e evento.'),
      exercicios(20, [
        ouvir('I was cooking when the phone rang', ['I was cooking when the phone rang', 'I cooked when the phone rang', 'I was cooking when the phone was ringing'], 'I was cooking when the phone rang', 'Ouça cena e evento.'), ouvir('While she was walking, it started to rain', ['While she was walking, it started to rain', 'While she walked, it was starting to rain', 'While she was walking, it was raining'], 'While she was walking, it started to rain', 'Ouça «while».'), ditado('I saw an accident while I was walking', 'Escreva: I saw an accident while I was walking.'), ditado('When I arrived, he left', 'Escreva: when I arrived, he left.'),
        mc('Qual é a frase correta?', ['I was reading when he arrived.', 'I read when he was arriving.', 'I was reading when he was arriving.'], 'I was reading when he arrived.', 'Cena + evento.'), mc('Qual frase indica ações seguidas (não simultâneas)?', ['When I arrived, he left.', 'When I arrived, he was leaving.', 'While I arrived, he left.'], 'When I arrived, he left.', 'Simples + simples.'), mc('Qual pontuação está correta?', ['While I was walking, I saw him.', 'While I was walking I saw him.', 'While, I was walking I saw him.'], 'While I was walking, I saw him.', 'Vírgula no começo.'), mc('Qual tempo descreve o cenário?', ['passado contínuo', 'passado simples', 'presente'], 'passado contínuo', 'Cenário: contínuo.'),
        lacuna('I was ___ when you called. (dormindo)', ['sleeping', 'slept', 'sleep'], 'sleeping', 'Contínuo.'), lacuna('She ___ the door when I arrived. (abriu)', ['opened', 'was opening', 'opens'], 'opened', 'Evento: simples.'), lacuna('___ I was cooking, he was cleaning.', ['While', 'When', 'After'], 'While', 'Ações simultâneas.'), lacuna('It was raining ___ I left. (quando)', ['when', 'while', 'then'], 'when', 'Evento: when.'),
        ordem('Ordene: «I was walking when I saw him.»', ['I', 'was', 'walking', 'when', 'I', 'saw', 'him'], 'I was walking when I saw him.', 'Cena + when + evento.'), ordem('Ordene: «While she was sleeping, the phone rang.»', ['While', 'she', 'was', 'sleeping,', 'the', 'phone', 'rang'], 'While she was sleeping, the phone rang.', 'While + contínuo, + simples.'),
        livre('Escreva 4 frases com cena e evento: «I was… when…»', 'I was cooking when the phone rang. She was walking when it started to rain. They were sleeping when the alarm went off. I was reading when you arrived.'),
      ]),
      producao(5, 'Conte em 1 minuto uma história real sua com cena, evento e resultado.'),
    ]),
  ],
});
