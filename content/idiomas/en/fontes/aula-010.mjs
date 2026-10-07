import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 10, titulo: 'A cidade: imperativo e direções', nivel: 'a1',
  objetivo: 'Dar e entender ordens e instruções com o imperativo, pedir e dar direções na rua e falar de lugares da cidade.',
  nota: 'Você pergunta e entende direções na rua. Próxima aula: horas, dias e meses.',
  sessoes: [
    sessao('S1', 'Lugares da cidade', [
      revisao(5, 'Diga o que você sabe e o que não sabe fazer. Depois faça 2 pedidos com «Can you…?»'),
      palavras(8, [
        ['bank', 'bénk', 'banco', ''], ['pharmacy', 'fármassi', 'farmácia', ''], ['supermarket', 'súpermarkit', 'supermercado', ''], ['hospital', 'rospital', 'hospital', ''], ['station', 'stêixon', 'estação', ''], ['street', 'striit', 'rua', ''], ['park', 'párk', 'parque', ''], ['restaurant', 'réstorent', 'restaurante', ''],
      ]),
      gramatica(12, 'Where is…? e as palavras da cidade', 'PASSO 1: para perguntar onde fica um lugar: «Where is the bank?» (singular) e «Where are the toilets?» (plural). PASSO 2: respostas curtas: «It\'s next to the park.», «It\'s on Main Street.» PASSO 3: combine com as preposições da aula 6: «The pharmacy is between the bank and the supermarket.» PASSO 4: «near» (perto), «far from» (longe de): «The station is near here.», «The park is far from my house.» PASSO 5: ruas levam «on»: «on Oak Street»; endereços com número levam «at»: «at 25 Oak Street.»', {
        tag: 'Onde fica',
        comparacao: 'em português dizemos «fica ao lado», «fica perto». O inglês usa só «to be»: «It is next to…», «It is near…». Não existe «it stays» nem «it has».',
        tabela: [
          { portugues: 'Onde fica o banco?', ingles: 'Where is the bank?', nota: 'to be, não «stay»' }, { portugues: 'Fica perto daqui.', ingles: 'It\'s near here.', nota: 'near' }, { portugues: 'Fica na Rua Oak.', ingles: 'It\'s on Oak Street.', nota: 'rua → on' }, { portugues: 'Fica longe da estação.', ingles: 'It\'s far from the station.', nota: 'far from' },
        ],
        erros: [['Where stays the bank?', 'Where is the bank?', 'Use «to be».'], ['It is in Oak Street.', 'It is on Oak Street.', 'Rua pede «on».'], ['It\'s far of here.', 'It\'s far from here.', '«far from».']],
      }),
      producao(5, 'Diga onde ficam 5 lugares perto da sua casa: «The bank is next to…»'),
    ]),
    sessao('S2', 'O imperativo', [
      revisao(4, 'Diga onde ficam: o banco, a farmácia, a estação e o parque do seu bairro.'),
      palavras(6, [
        ['turn', 'tãrn', 'virar', ''], ['go', 'gôu', 'ir', ''], ['stop', 'stóp', 'parar', ''], ['cross', 'cróss', 'atravessar', ''], ['walk', 'uók', 'andar', ''], ['look', 'lúk', 'olhar', ''],
      ]),
      gramatica(12, 'O imperativo', 'PASSO 1: o imperativo usa o verbo SEM sujeito e SEM «to»: «Open the door.» «Sit down.» PASSO 2: serve para o singular e o plural («you» fica implícito). PASSO 3: negativa: «Don\'t» + verbo: «Don\'t run.» «Don\'t open the window.» PASSO 4: educação: acrescente «please»: «Please sit down.» ou «Sit down, please.» PASSO 5: «Let\'s» = vamos (convite): «Let\'s go!» PASSO 6: não use «you» para ordenar, a não ser para ênfase ou raiva: «You go first!» é cortante.', {
        tag: 'Imperativo',
        comparacao: 'em português o imperativo muda de forma («abra», «abre», «abram»). O inglês usa SEMPRE a forma básica do verbo: «open», para tu, você ou vocês.',
        tabela: [
          { afirmativa: 'Open the door.', negativa: 'Don\'t open the door.', convite: 'Let\'s open the door.' }, { afirmativa: 'Wait here.', negativa: 'Don\'t wait here.', convite: 'Let\'s wait here.' }, { afirmativa: 'Look.', negativa: 'Don\'t look.', convite: 'Let\'s look.' },
        ],
        erros: [['You open the door.', 'Open the door.', 'Ordem sem sujeito.'], ['Not run.', 'Don\'t run.', 'Negativa: don\'t.'], ['Opens the door.', 'Open the door.', 'Sem -s.'], ['Let\'s to go.', 'Let\'s go.', 'Sem «to».']],
      }),
      producao(8, 'Dê 5 ordens a um amigo, 3 afirmativas e 2 negativas, com «please» em 2 delas.'),
    ]),
    sessao('S3', 'Pedir e dar direções', [
      revisao(4, 'Diga em inglês: «vire à esquerda», «não corra», «vamos andar».'),
      palavras(5, [
        ['left', 'léft', 'esquerda', ''], ['right', 'ráit', 'direita', ''], ['straight', 'strêit', 'reto', ''], ['corner', 'córner', 'esquina', ''], ['traffic light', 'tréfic láit', 'semáforo', ''],
      ]),
      gramatica(8, 'Direções passo a passo', 'PASSO 1: pergunte: «Excuse me, where is the station?» ou «How do I get to the station?» PASSO 2: «Go straight.», «Turn left.», «Turn right.» PASSO 3: marque os pontos: «at the traffic light», «at the corner», «on the left/right». PASSO 4: «It\'s on your left.» (fica à sua esquerda). PASSO 5: «It\'s about five minutes on foot.» (cerca de cinco minutos a pé).', {
        tag: 'Direções',
        comparacao: 'em português «siga reto» e «vire à direita» são ordens. O inglês faz o mesmo com o imperativo: «Go straight», «Turn right». Cuidado: «on the left» (à esquerda) usa «on».',
        tabela: [
          { portugues: 'Siga reto.', ingles: 'Go straight.', nota: 'imperativo' }, { portugues: 'Vire à esquerda no semáforo.', ingles: 'Turn left at the traffic light.', nota: 'at + marco' }, { portugues: 'Fica à direita.', ingles: 'It\'s on the right.', nota: 'on the right' },
        ],
        erros: [['Turn to left.', 'Turn left.', 'Sem preposição depois de «turn».'], ['It is in the right.', 'It is on the right.', 'Lado pede «on».']],
      }),
      dialogo(8, 'How do I get to the station? / Como chego à estação?', 'Chris (turista) pede direções a Sarah na rua.', [
        ['Chris', 'Excuse me, where is the station?', 'Com licença, onde fica a estação?'], ['Sarah', 'Go straight and turn left at the traffic light.', 'Siga reto e vire à esquerda no semáforo.'], ['Chris', 'Is it far?', 'É longe?'], ['Sarah', 'No, it\'s about five minutes on foot. It\'s next to the bank.', 'Não, são uns cinco minutos a pé. Fica ao lado do banco.'], ['Chris', 'Thank you very much.', 'Muito obrigado.'], ['Sarah', 'You\'re welcome.', 'De nada.'],
      ]),
      producao(5, 'Explique em voz alta o caminho da sua casa até um lugar próximo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 10', [
      revisao(5, 'Dê 3 ordens e 2 proibições. Depois explique como chegar a um lugar da cidade.'),
      exercicios(20, [
        ouvir('Turn left at the traffic light', ['Turn left at the traffic light', 'Turn right at the traffic light', 'Turn left at the corner'], 'Turn left at the traffic light', 'Ouça «left» e «traffic light».'), ouvir('Don\'t run here', ['Don\'t run here', 'Don\'t walk here', 'Don\'t run there'], 'Don\'t run here', 'Ouça «don\'t run».'), ditado('Go straight', 'Escreva: go straight.'), ditado('Where is the bank', 'Escreva: where is the bank.'),
        mc('Qual é a ordem negativa correta?', ['Don\'t open the door.', 'Not open the door.', 'No opens the door.'], 'Don\'t open the door.', 'Don\'t + verbo.'), mc('Como se diz «Siga reto»?', ['Go straight.', 'Go for straight.', 'Goes straight.'], 'Go straight.', 'Imperativo sem -s.'), mc('Qual é o certo para «à direita»?', ['on the right', 'in the right', 'at right'], 'on the right', 'Lado: on.'), mc('Qual pergunta está correta?', ['Where is the bank?', 'Where stays the bank?', 'Where the bank is?'], 'Where is the bank?', 'Where + is + sujeito.'),
        lacuna('___ left at the corner. (vire)', ['Turn', 'Turns', 'Turning'], 'Turn', 'Imperativo.'), lacuna('The bank is ___ the park. (ao lado do)', ['next to', 'between', 'at'], 'next to', 'Ao lado de.'), lacuna('It is ___ Oak Street. (na rua)', ['on', 'in', 'at'], 'on', 'Rua: on.'), lacuna('___ go! (vamos)', ['Let\'s', 'Lets to', 'Let'], 'Let\'s', 'Let\'s + verbo.'),
        ordem('Ordene: «Turn left at the corner.»', ['Turn', 'left', 'at', 'the', 'corner'], 'Turn left at the corner.', 'Imperativo + direção + marco.'), ordem('Ordene: «Please don\'t run.»', ['Please', 'don\'t', 'run'], 'Please don\'t run.', 'Please + don\'t + verbo.'),
        livre('Explique em 3 frases como ir da sua casa a um lugar próximo.', 'Go straight. Turn left at the traffic light. The bank is on the right.'),
      ]),
      producao(5, 'Encene com voz alta: um turista pergunta o caminho e você responde. Troque os papéis.'),
    ]),
  ],
});
