import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 41, titulo: 'Segundo condicional: situações imaginárias', nivel: 'b1',
  objetivo: 'Usar o segundo condicional («If I had…, I would…») para situações irreais ou improváveis, dar conselhos com «If I were you», e usar «wish» para desejos no presente.',
  nota: 'Você imagina situações e dá conselhos. Próxima aula: terceiro condicional e arrependimentos.',
  sessoes: [
    sessao('S1', 'If + passado, would + verbo', [
      revisao(5, 'Conte uma história com past perfect: algo que já tinha acontecido antes.'),
      palavras(8, [
        ['would', 'úd', 'faria', ''], ['wouldn\'t', 'údnt', 'não faria', ''], ['imagine', 'imédjin', 'imaginar', ''], ['win the lottery', 'uín dâ lótari', 'ganhar na loteria', ''], ['billionaire', 'bíliônér', 'bilionário', ''], ['unlikely', 'ânláikli', 'improvável', ''], ['dream', 'driim', 'sonho', ''], ['if only', 'íf ôunli', 'se ao menos', ''],
      ]),
      gramatica(12, 'O segundo condicional', 'PASSO 1: o segundo condicional fala de situações IRREAIS ou muito IMPROVÁVEIS no presente ou no futuro: «If I won the lottery, I would travel the world.» PASSO 2: a estrutura: «If + passado simples, would + verbo simples». PASSO 3: o «passado» depois do «if» não é passado de tempo: é uma marca de irrealidade. PASSO 4: com o verbo «be», use «were» para todas as pessoas (formal): «If I were rich…», «If she were here…» No dia a dia, «was» também aparece. PASSO 5: «If I were you, I would…» dá conselho: «If I were you, I would talk to him.» PASSO 6: negativa: «wouldn\'t»: «I wouldn\'t do that.» PASSO 7: pergunta: «What would you do if you won the lottery?» PASSO 8: compare com o primeiro condicional (real): «If I win, I will travel.» (possível) × «If I won, I would travel.» (improvável).', {
        tag: 'Segundo condicional',
        comparacao: 'em português usamos o imperfeito do subjuntivo e o futuro do pretérito: «se eu ganhasse, viajaria». O inglês faz o mesmo com «If + passado, would + verbo». O que muda é a forma, não a ideia.',
        tabela: [
          { se: 'If I won the lottery,', entao: 'I would travel the world.' }, { se: 'If she were here,', entao: 'she would help us.' }, { se: 'If I were you,', entao: 'I would call him.' }, { se: 'If we had more time,', entao: 'we would visit the museum.' },
        ],
        erros: [['If I would win, I would travel.', 'If I won, I would travel.', 'Sem «would» depois do «if».'], ['If I will have money, I would buy it.', 'If I had money, I would buy it.', 'Passado depois do if.'], ['If I was you, I will go.', 'If I were you, I would go.', 'were + would.'], ['What you would do?', 'What would you do?', 'Inverta.']],
      }),
      producao(5, 'Complete 5 frases: «If I won the lottery, I would…»'),
    ]),
    sessao('S2', 'Primeiro ou segundo condicional?', [
      revisao(4, 'Dê 2 conselhos com «If I were you, I would…»'),
      palavras(6, [
        ['real', 'riil', 'real', ''], ['imaginary', 'imédjineri', 'imaginário', ''], ['possible', 'pósibl', 'possível', ''], ['impossible', 'impósibl', 'impossível', ''], ['advice', 'adváis', 'conselho', ''], ['decision', 'disíjon', 'decisão', ''],
      ]),
      gramatica(12, 'Real × imaginário', 'PASSO 1: pergunte-se: a situação é POSSÍVEL de acontecer? Se sim, primeiro condicional («If it rains, I will stay home»). PASSO 2: se for IMPROVÁVEL, IMPOSSÍVEL ou só um sonho, use o segundo («If I were a bird, I would fly»). PASSO 3: o mesmo assunto muda de tom: «If I have time, I will help you.» (talvez eu tenha) × «If I had time, I would help you.» (eu não tenho, mas gostaria). PASSO 4: «unless» e «as long as» seguem a regra do primeiro: presente depois deles. PASSO 5: para dar conselho, use «If I were you, I would…» ou «Why don\'t you…?» PASSO 6: pergunta típica de entrevista: «Where would you like to be in five years?»', {
        tag: 'Condicionais',
        comparacao: 'em português a mesma estrutura serve para os dois («se eu tiver», «se eu tivesse»). Em inglês, escolha o tempo pelo grau de realidade: presente (real) ou passado (irreal).',
        tabela: [
          { tipo: 'real', frase: 'If I have time, I will help you.' }, { tipo: 'irreal', frase: 'If I had time, I would help you.' }, { tipo: 'conselho', frase: 'If I were you, I would apologize.' }, { tipo: 'sonho', frase: 'If I were rich, I would buy a house.' },
        ],
        erros: [['If I am rich, I would buy a house.', 'If I were rich, I would buy a house.', 'Sonho: segundo condicional.'], ['If I had time, I will help you.', 'If I had time, I would help you.', 'would no resultado.']],
      }),
      producao(8, 'Escreva 3 pares: uma frase real e uma imaginária sobre o mesmo assunto.'),
    ]),
    sessao('S3', 'Wish: desejos no presente', [
      revisao(4, 'Dê um conselho a um amigo que está sem tempo para estudar, com «If I were you».'),
      palavras(5, [
        ['wish', 'uích', 'desejar (algo irreal)', ''], ['tall', 'tól', 'alto', ''], ['free', 'frii', 'livre', ''], ['speak', 'spiik', 'falar', ''], ['live', 'liv', 'morar', ''],
      ]),
      gramatica(8, 'Wish + passado', 'PASSO 1: «I wish + passado simples» expressa um desejo sobre algo que não é verdade agora: «I wish I had more time.» (não tenho). PASSO 2: com «be», use «were»: «I wish I were taller.» PASSO 3: «I wish I could…» fala de uma habilidade que não tem: «I wish I could speak French.» PASSO 4: «If only» é mais forte: «If only I had more money!» PASSO 5: não use «will» nem «would» para si próprio depois de «wish»: «I wish I would» está errado.', {
        tag: 'Wish',
        comparacao: 'em português «queria ter mais tempo» e «quem me dera ter mais tempo» expressam o mesmo. Em inglês, «I wish I had more time» ou «If only I had more time».',
        tabela: [
          { frase: 'I wish I had more time.', realidade: 'não tenho tempo' }, { frase: 'I wish I were taller.', realidade: 'não sou alto' }, { frase: 'I wish I could speak French.', realidade: 'não falo francês' },
        ],
        erros: [['I wish I will have more time.', 'I wish I had more time.', 'Passado depois de wish.'], ['I wish I was taller. (formal)', 'I wish I were taller.', '«were» é a forma formal.'], ['I wish I can speak French.', 'I wish I could speak French.', 'Could depois de wish.']],
      }),
      dialogo(8, 'If I were you / Se eu fosse você', 'Mia pede conselho a Chris.', [
        ['Mia', 'Chris, I have a problem. I got a job offer in another city, but I don\'t want to leave my friends.', 'Chris, tenho um problema. Recebi uma proposta de emprego em outra cidade, mas não quero deixar meus amigos.'], ['Chris', 'What would you do if you didn\'t have to decide today?', 'O que você faria se não precisasse decidir hoje?'], ['Mia', 'I would take the job. I wish I had more time to think.', 'Eu aceitaria o emprego. Queria ter mais tempo para pensar.'], ['Chris', 'If I were you, I would talk to the company and ask for one more week.', 'Se eu fosse você, falaria com a empresa e pediria mais uma semana.'], ['Mia', 'That\'s a good idea. If they said yes, I would feel much better.', 'Boa ideia. Se eles dissessem sim, eu me sentiria muito melhor.'], ['Chris', 'And you can visit your friends often. It wouldn\'t be so difficult.', 'E você pode visitar seus amigos com frequência. Não seria tão difícil.'],
      ]),
      producao(5, 'Escreva 5 desejos seus com «I wish» e 3 conselhos com «If I were you».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 41', [
      revisao(5, 'Diga o que você faria se ganhasse na loteria e dê um conselho a um amigo.'),
      exercicios(20, [
        ouvir('If I won the lottery, I would travel the world', ['If I won the lottery, I would travel the world', 'If I win the lottery, I will travel the world', 'If I would win the lottery, I travel the world'], 'If I won the lottery, I would travel the world', 'Ouça «won… would».'), ouvir('If I were you, I would call him', ['If I were you, I would call him', 'If I was you, I will call him', 'If I am you, I would call him'], 'If I were you, I would call him', 'Ouça «were… would».'), ditado('I wish I had more time', 'Escreva: I wish I had more time.'), ditado('What would you do', 'Escreva: what would you do.'),
        mc('Qual frase está correta?', ['If I had money, I would buy a house.', 'If I would have money, I would buy a house.', 'If I have money, I would buy a house.'], 'If I had money, I would buy a house.', 'if + passado, would.'), mc('Qual frase é segundo condicional?', ['If I were rich, I would travel.', 'If it rains, I will stay home.', 'If I see her, I will say hello.'], 'If I were rich, I would travel.', 'Irreal.'), mc('Qual frase dá um conselho?', ['If I were you, I would apologize.', 'If I was you, I apologize.', 'If I am you, I would apologize.'], 'If I were you, I would apologize.', 'If I were you.'), mc('Qual frase está correta?', ['I wish I could speak French.', 'I wish I can speak French.', 'I wish I will speak French.'], 'I wish I could speak French.', 'wish + could.'),
        lacuna('If she ___ here, she would help us. (estivesse)', ['were', 'is', 'will be'], 'were', 'were.'), lacuna('What ___ you do if you won?', ['would', 'will', 'did'], 'would', 'would.'), lacuna('I wish I ___ more time. (tivesse)', ['had', 'have', 'would have'], 'had', 'wish + passado.'), lacuna('If we had more time, we ___ visit the museum.', ['would', 'will', 'can'], 'would', 'would.'),
        ordem('Ordene: «If I were rich, I would travel.»', ['If', 'I', 'were', 'rich,', 'I', 'would', 'travel'], 'If I were rich, I would travel.', 'if + were, would + verbo.'), ordem('Ordene: «What would you do if you won?»', ['What', 'would', 'you', 'do', 'if', 'you', 'won'], 'What would you do if you won?', 'What + would + sujeito + verbo.'),
        livre('Escreva 4 frases: uma com «If I won…», um conselho com «If I were you», um desejo com «I wish» e uma pergunta com «What would you do…?»', 'If I won the lottery, I would travel. If I were you, I would talk to him. I wish I had more time. What would you do if you were rich?'),
      ]),
      producao(5, 'Fale 1 minuto sobre a vida que você teria se pudesse mudar uma coisa.'),
    ]),
  ],
});
