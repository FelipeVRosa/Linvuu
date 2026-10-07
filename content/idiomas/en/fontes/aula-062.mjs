import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 62, titulo: 'Revisão e simulado do B1', nivel: 'b1',
  objetivo: 'Rever os tempos verbais, os modais, as estruturas e as habilidades do B1, e fazer o simulado final do nível.',
  nota: 'Você fecha o B1. O certificado do nível é da Linvuu e não substitui exame oficial.',
  sessoes: [
    sessao('S1', 'Revisão: tempos e estruturas', [
      revisao(5, 'Fale 1 minuto sobre você: passado, presente e planos, com present perfect e futuro.'),
      palavras(8, [
        ['tense', 'téns', 'tempo verbal', ''], ['structure', 'strâktchar', 'estrutura', ''], ['review', 'riviu', 'revisão', ''], ['mistake', 'mistêik', 'erro', ''], ['correct', 'korékt', 'corrigir / correto', ''], ['fluent', 'fluunt', 'fluente', ''], ['achieve', 'atchiiv', 'alcançar', ''], ['improve', 'imprúuv', 'melhorar', ''],
      ]),
      gramatica(12, 'Mapa do B1', 'PASSO 1: tempos: present perfect contínuo («I have been studying for two hours»), past perfect («She had left before I arrived»). PASSO 2: condicionais: segundo («If I were rich, I would travel») e terceiro («If I had studied, I would have passed»). PASSO 3: passiva: simples, com modais e com «have something done» («I had my car repaired»). PASSO 4: relativas: who, which, that, whose, where; com vírgulas quando explicam. PASSO 5: discurso indireto: «She said (that) she was tired», «He asked if I knew». PASSO 6: gerúndio e infinitivo («enjoy doing», «want to do»), e preposições dependentes («good at», «interested in»). PASSO 7: dedução («must be», «can\'t have been»), futuro («will be doing», «will have done»), so/such, too/enough, conectores (although, despite, however, therefore).', {
        tag: 'Revisão B1',
        comparacao: 'em português muitas dessas estruturas existem, mas com outros recursos (subjuntivo, mais-que-perfeito). Em inglês, cada uma tem forma própria.',
        tabela: [
          { area: 'present perfect contínuo', exemplo: 'I have been studying for two hours.' }, { area: 'past perfect', exemplo: 'She had left before I arrived.' }, { area: '2º condicional', exemplo: 'If I were rich, I would travel.' }, { area: '3º condicional', exemplo: 'If I had studied, I would have passed.' }, { area: 'passiva', exemplo: 'The house was built in 1990.' }, { area: 'discurso indireto', exemplo: 'She said she was tired.' },
        ],
        erros: [['I am studying for two hours.', 'I have been studying for two hours.', 'Duração: present perfect contínuo.'], ['If I was rich, I will travel.', 'If I were rich, I would travel.', '2º condicional.'], ['If I had studied, I would passed.', 'If I had studied, I would have passed.', '3º condicional.'], ['She said me she was tired.', 'She told me she was tired. / She said she was tired.', 'say × tell.'], ['I enjoy to swim.', 'I enjoy swimming.', 'enjoy + -ing.'], ['The man who he lives here is kind.', 'The man who lives here is kind.', 'Sem pronome extra.'], ['The house built in 1990.', 'The house was built in 1990.', 'Passiva.']],
      }),
      producao(5, 'Escreva 8 frases, uma para cada estrutura acima, sobre a sua vida.'),
    ]),
    sessao('S2', 'Revisão: erros mais comuns do B1', [
      revisao(4, 'Corrija: «I am studying for two hours.» e «If I was rich, I will travel.»'),
      palavras(6, [
        ['although', 'olôu', 'embora', ''], ['despite', 'dispáit', 'apesar de', ''], ['therefore', 'dérfór', 'portanto', ''], ['must have', 'mâst rév', 'deve ter', ''], ['by the time', 'bái dâ táim', 'quando já', ''], ['used to', 'iuust tu', 'costumava', ''],
      ]),
      gramatica(12, 'Mais 8 erros para evitar', 'PASSO 1: leia cada erro, diga em voz alta a forma certa e crie sua própria frase. PASSO 2: este é o seu checklist final de B1, junto com os erros da aula anterior. PASSO 3: no teste, desconfie de frases que soam como português traduzido. PASSO 4: sempre releia seus textos procurando: tempo verbal, preposição, artigo e concordância.', {
        tag: 'Erros B1',
        comparacao: 'muitos erros de brasileiros vêm de traduzir do português: «despite of», «I am agree», «since 2 years». Reconhecer o padrão é metade da correção.',
        tabela: [
          { erro: 'despite of', certo: 'despite' }, { erro: 'I am agree', certo: 'I agree' }, { erro: 'since two years', certo: 'for two years' }, { erro: 'mustn\'t be (dedução)', certo: 'can\'t be' }, { erro: 'when I will arrive', certo: 'when I arrive' },
        ],
        erros: [['Despite of the rain, we went.', 'Despite the rain, we went.', 'Sem «of».'], ['I am agree with you.', 'I agree with you.', 'agree é verbo.'], ['I live here since 2020.', 'I have lived here since 2020.', 'since + present perfect.'], ['He mustn\'t be at home.', 'He can\'t be at home.', 'Dedução negativa.'], ['When I will arrive, I\'ll call.', 'When I arrive, I\'ll call.', 'Presente depois de when.'], ['She is such nice.', 'She is so nice.', 'so + adjetivo.'], ['It is enough big.', 'It is big enough.', 'adj + enough.'], ['I look forward to hear.', 'I look forward to hearing.', 'to + -ing.']],
      }),
      producao(8, 'Escreva 8 frases corrigidas, em ordem, e leia-as em voz alta.'),
    ]),
    sessao('S3', 'Simulado de leitura e conversa', [
      revisao(4, 'Diga em voz alta 3 erros comuns e suas formas certas.'),
      palavras(5, [
        ['simulation', 'simiuleichn', 'simulado', ''], ['score', 'skór', 'pontuação', ''], ['level', 'lévl', 'nível', ''], ['progress', 'prógres', 'progresso', ''], ['goal', 'gôul', 'meta', ''],
      ]),
      gramatica(8, 'Como fazer um bom simulado', 'PASSO 1: leia a pergunta inteira antes de responder. PASSO 2: elimine as opções claramente erradas. PASSO 3: confira o tempo verbal e a preposição. PASSO 4: não deixe em branco: escolha a melhor. PASSO 5: depois, releia os erros e escreva a regra de cada um.', {
        tag: 'Estratégia de prova',
        comparacao: 'em português eliminamos alternativas no teste; faça o mesmo em inglês: descarte o que soa como tradução.',
        tabela: [
          { passo: 'ler tudo', dica: 'Leia a pergunta inteira.' }, { passo: 'eliminar', dica: 'Descarte o que está claramente errado.' }, { passo: 'conferir', dica: 'Tempo verbal, preposição, artigo.' }, { passo: 'revisar', dica: 'Escreva a regra dos seus erros.' },
        ],
        erros: [['Deixar em branco.', 'Escolher a melhor opção.', 'Sempre responda.']],
      }),
      dialogo(8, 'Looking back / Olhando para trás', 'Nina e Paul conversam sobre o fim do B1.', [
        ['Nina', 'Paul, you have been studying English for more than a year now.', 'Paul, você estuda inglês há mais de um ano agora.'], ['Paul', 'Yes. If I hadn\'t started, I wouldn\'t be able to talk like this.', 'Sim. Se eu não tivesse começado, não conseguiria falar assim.'], ['Nina', 'You must be proud. Your English has improved a lot.', 'Você deve estar orgulhoso. Seu inglês melhorou muito.'], ['Paul', 'Thanks. Although it was hard, I learned a lot, so I\'m happy.', 'Obrigado. Embora tenha sido difícil, aprendi muito, então estou feliz.'], ['Nina', 'What will you be doing next year?', 'O que você estará fazendo ano que vem?'], ['Paul', 'By then, I will have started the B2 level!', 'Até lá, terei começado o nível B2!'],
      ]),
      producao(5, 'Escreva um parágrafo de 6 frases sobre o seu progresso e suas metas, com conectores e pelo menos 3 tempos verbais diferentes.'),
    ]),
    sessao('S4', 'Simulado do B1', [
      revisao(5, 'Respire e releia as regras que mais erra. Depois, comece o simulado.'),
      exercicios(20, [
        ouvir('I have been studying for two hours', ['I have been studying for two hours', 'I am studying for two hours', 'I studied since two hours'], 'I have been studying for two hours', 'Ouça «have been studying».'), ouvir('If I had studied, I would have passed', ['If I had studied, I would have passed', 'If I studied, I would have passed', 'If I had studied, I would pass'], 'If I had studied, I would have passed', 'Ouça «had studied».'), ditado('She said that she was tired', 'Escreva: she said that she was tired.'), ditado('Although it was cold, we went out', 'Escreva: although it was cold, we went out.'),
        mc('Qual frase está correta?', ['The house was built in 1990.', 'The house built in 1990.', 'The house is build in 1990.'], 'The house was built in 1990.', 'Passiva.'), mc('Qual frase está correta?', ['She had left before I arrived.', 'She has left before I arrived.', 'She leaved before I arrived.'], 'She had left before I arrived.', 'Past perfect.'), mc('Qual frase está correta?', ['He can\'t be at home.', 'He mustn\'t be at home.', 'He don\'t be at home.'], 'He can\'t be at home.', 'Dedução.'), mc('Qual frase está correta?', ['I enjoy swimming.', 'I enjoy to swim.', 'I enjoy swim.'], 'I enjoy swimming.', 'enjoy + -ing.'),
        mc('Qual frase está correta?', ['When I arrive, I will call you.', 'When I will arrive, I call you.', 'When I arrived, I will call you.'], 'When I arrive, I will call you.', 'Presente depois de when.'), mc('Qual frase está correta?', ['It was such a good film.', 'It was so a good film.', 'It was such good a film.'], 'It was such a good film.', 'such a.'), mc('Qual frase está correta?', ['Despite the rain, we played.', 'Despite of the rain, we played.', 'Despite it rained, we played.'], 'Despite the rain, we played.', 'Sem of.'), mc('Qual frase está correta?', ['The man who lives here is kind.', 'The man who he lives here is kind.', 'The man which lives here is kind.'], 'The man who lives here is kind.', 'who.'),
        lacuna('If I ___ rich, I would travel.', ['were', 'was', 'am'], 'were', '2º condicional.'), lacuna('She ___ me she was tired. (disse)', ['told', 'said', 'spoke'], 'told', 'told me.'), lacuna('By Friday, I will ___ finished.', ['have', 'be', 'had'], 'have', 'Futuro perfeito.'), lacuna('I look forward to ___ from you.', ['hearing', 'hear', 'heard'], 'hearing', 'to + -ing.'),
        ordem('Ordene: «If I had studied, I would have passed.»', ['If', 'I', 'had', 'studied,', 'I', 'would', 'have', 'passed'], 'If I had studied, I would have passed.', '3º condicional.'), ordem('Ordene: «She said that she was tired.»', ['She', 'said', 'that', 'she', 'was', 'tired'], 'She said that she was tired.', 'Discurso indireto.'),
        livre('Escreva 5 frases sobre você, usando: present perfect, passado simples, futuro, um condicional e um conector.', 'I have lived here for five years. I studied English last year. I will travel next year. If I had money, I would buy a house. Although it is hard, I enjoy studying.'),
      ]),
      producao(5, 'Anote seus erros no simulado e a regra de cada um. Parabéns por fechar o B1!'),
    ]),
  ],
});
