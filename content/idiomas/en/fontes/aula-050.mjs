import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 50, titulo: 'Preposições dependentes: verbos, adjetivos e substantivos', nivel: 'b1',
  objetivo: 'Usar as preposições que acompanham verbos, adjetivos e substantivos de uso comum («depend on», «afraid of», «reason for»), evitando as traduções diretas do português.',
  nota: 'Você escolhe a preposição certa em vez de traduzir do português. Próxima aula: dedução com modais.',
  sessoes: [
    sessao('S1', 'Verbos + preposição', [
      revisao(5, 'Fale de hábitos que você quer mudar, usando stop, try e remember.'),
      palavras(8, [
        ['depend on', 'dipénd ón', 'depender de', ''], ['listen to', 'lísen tu', 'ouvir', ''], ['wait for', 'uêit fór', 'esperar', ''], ['look at', 'lúk ét', 'olhar para', ''], ['pay for', 'pêi fór', 'pagar por', ''], ['believe in', 'bilív ín', 'acreditar em', ''], ['talk about', 'tók abáut', 'falar sobre', ''], ['think of', 'think óv', 'pensar em', ''],
      ]),
      gramatica(12, 'Verbos com preposição fixa', 'PASSO 1: muitos verbos ingleses pedem uma preposição que nem sempre coincide com o português. PASSO 2: aprenda o par: «depend ON», «listen TO», «wait FOR», «look AT», «pay FOR», «believe IN», «talk ABOUT». PASSO 3: alguns verbos que em português levam preposição, em inglês NÃO levam: «ask something», «enter a room», «discuss a topic», «marry someone», «answer a question». PASSO 4: depois da preposição, use -ing: «I\'m thinking about moving.», «Thanks for helping.» PASSO 5: «think of» (lembrar, ter uma ideia) × «think about» (refletir): «What do you think of it?» × «I\'m thinking about it.» PASSO 6: não precisa decorar a lista inteira: aprenda os pares dentro de frases.', {
        tag: 'Preposições',
        comparacao: 'em português «esperar» não pede preposição, «pagar» e «assistir» pedem outras. Em inglês, «wait FOR», «pay FOR», e «watch» (sem preposição). Aprender o par evita erros previsíveis.',
        tabela: [
          { verbo: 'depend on', exemplo: 'It depends on the weather.' }, { verbo: 'listen to', exemplo: 'I listen to music every day.' }, { verbo: 'wait for', exemplo: 'I\'m waiting for the bus.' }, { verbo: 'enter (sem preposição)', exemplo: 'She entered the room.' }, { verbo: 'discuss (sem preposição)', exemplo: 'We discussed the problem.' },
        ],
        erros: [['I listen music.', 'I listen to music.', 'listen TO.'], ['I\'m waiting the bus.', 'I\'m waiting for the bus.', 'wait FOR.'], ['She entered in the room.', 'She entered the room.', 'enter sem preposição.'], ['We discussed about the problem.', 'We discussed the problem.', 'discuss sem preposição.']],
      }),
      producao(5, 'Faça 8 frases com os verbos desta sessão, cada um com a preposição certa.'),
    ]),
    sessao('S2', 'Adjetivos + preposição', [
      revisao(4, 'Complete: «I\'m waiting ___ the bus. She listens ___ music. It depends ___ you.»'),
      palavras(6, [
        ['afraid of', 'afrêid óv', 'com medo de', ''], ['interested in', 'íntrestid ín', 'interessado em', ''], ['good at', 'gúd ét', 'bom em', ''], ['proud of', 'práud óv', 'orgulhoso de', ''], ['worried about', 'uãrid abáut', 'preocupado com', ''], ['different from', 'difrent frâm', 'diferente de', ''],
      ]),
      gramatica(12, 'Adjetivos com preposição', 'PASSO 1: «afraid OF», «proud OF», «tired OF» (cansado de, enjoado): «I\'m afraid of spiders.» PASSO 2: «interested IN», «good AT», «bad AT», «keen ON»: «She is good at math.» PASSO 3: «worried ABOUT», «excited ABOUT», «angry ABOUT» (a coisa), «angry WITH» (a pessoa): «I\'m angry with him about it.» PASSO 4: «different FROM» (americano), «similar TO», «married TO», «surprised AT/BY»: «She is married to a doctor.» PASSO 5: depois da preposição, -ing ou substantivo: «I\'m good at cooking.» PASSO 6: «tired of» = farto de; «tired from» = cansado por causa de: «I\'m tired from working.» (cansaço físico).', {
        tag: 'Adjetivos + preposição',
        comparacao: 'em português «bom em», «interessado em» e «cansado de» também levam preposição, mas nem sempre a mesma. Em inglês, «good AT» (não «good in»), «interested IN», «tired OF».',
        tabela: [
          { adjetivo: 'afraid of', exemplo: 'I\'m afraid of spiders.' }, { adjetivo: 'good at', exemplo: 'She is good at math.' }, { adjetivo: 'interested in', exemplo: 'He is interested in music.' }, { adjetivo: 'married to', exemplo: 'She is married to a doctor.' }, { adjetivo: 'different from', exemplo: 'This is different from that.' },
        ],
        erros: [['She is good in math.', 'She is good at math.', 'good AT.'], ['I\'m interested on music.', 'I\'m interested in music.', 'interested IN.'], ['She is married with a doctor.', 'She is married to a doctor.', 'married TO.'], ['I\'m afraid from spiders.', 'I\'m afraid of spiders.', 'afraid OF.']],
      }),
      producao(8, 'Faça 8 frases sobre você com adjetivos + preposição: afraid of, good at, interested in, proud of.'),
    ]),
    sessao('S3', 'Substantivos + preposição', [
      revisao(4, 'Diga 5 frases sobre você com adjetivos + preposição.'),
      palavras(5, [
        ['reason for', 'rízon fór', 'razão de', ''], ['answer to', 'ánser tu', 'resposta a', ''], ['problem with', 'próblem uíth', 'problema com', ''], ['increase in', 'íncriis ín', 'aumento de', ''], ['key to', 'kii tu', 'chave para', ''],
      ]),
      gramatica(8, 'Substantivos com preposição', 'PASSO 1: «reason FOR»: «What is the reason for the delay?» PASSO 2: «answer TO», «solution TO», «key TO»: «The key to success is practice.» PASSO 3: «problem WITH», «trouble WITH»: «I have a problem with my phone.» PASSO 4: «increase IN», «decrease IN», «change IN»: «There was an increase in prices.» PASSO 5: «cause OF», «effect ON»: «The effect of stress on health.» PASSO 6: «difference BETWEEN»: «the difference between A and B.»', {
        tag: 'Substantivos + preposição',
        comparacao: 'em português «razão para», «resposta a», «problema com» também levam preposição, mas «aumento de/em» e «chave para» variam. Em inglês, aprenda cada par como uma unidade.',
        tabela: [
          { substantivo: 'reason for', exemplo: 'the reason for the delay' }, { substantivo: 'key to', exemplo: 'the key to success' }, { substantivo: 'problem with', exemplo: 'a problem with my phone' }, { substantivo: 'increase in', exemplo: 'an increase in prices' }, { substantivo: 'difference between', exemplo: 'the difference between A and B' },
        ],
        erros: [['the reason of the delay', 'the reason for the delay', 'reason FOR.'], ['the key of success', 'the key to success', 'key TO.'], ['a problem in my phone', 'a problem with my phone', 'problem WITH.'], ['the difference of A and B', 'the difference between A and B', 'difference BETWEEN.']],
      }),
      texto(8, 'My new job / O meu novo emprego', 'I am very excited about my new job. I\'m good at working with people, and I\'m interested in learning new things. I was afraid of changing companies, but I believe in taking risks. My boss is proud of my work, and she depends on me to solve problems. I\'m thinking about taking an English course because I need to talk to clients. There is only one problem with the job: the commute is long, so I listen to music on the bus.',
        'Estou muito animado com o meu novo emprego. Sou bom em trabalhar com pessoas e tenho interesse em aprender coisas novas. Tinha medo de mudar de empresa, mas acredito em correr riscos. Minha chefe tem orgulho do meu trabalho e conta comigo para resolver problemas. Estou pensando em fazer um curso de inglês porque preciso falar com clientes. Só há um problema no emprego: o trajeto é longo, então ouço música no ônibus.',
        [['What is the person excited about?', 'The new job.'], ['What was the person afraid of?', 'Changing companies.'], ['Who is proud of the person\'s work?', 'The boss.'], ['What does the person do on the bus?', 'Listens to music.']]),
      producao(5, 'Escreva um texto de 6 frases sobre o seu trabalho ou estudo, usando 5 preposições dependentes.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 50', [
      revisao(5, 'Descreva o que você faz, o que teme e no que é bom, usando as preposições certas.'),
      exercicios(20, [
        ouvir('I\'m waiting for the bus', ['I\'m waiting for the bus', 'I\'m waiting the bus', 'I\'m waiting to the bus'], 'I\'m waiting for the bus', 'Ouça «waiting for».'), ouvir('She is good at math', ['She is good at math', 'She is good in math', 'She is good on math'], 'She is good at math', 'Ouça «good at».'), ditado('I listen to music every day', 'Escreva: I listen to music every day.'), ditado('She is married to a doctor', 'Escreva: she is married to a doctor.'),
        mc('Qual frase está correta?', ['I listen to music.', 'I listen music.', 'I listen at music.'], 'I listen to music.', 'listen TO.'), mc('Qual frase está correta?', ['We discussed the problem.', 'We discussed about the problem.', 'We discussed on the problem.'], 'We discussed the problem.', 'Sem preposição.'), mc('Qual frase está correta?', ['She is married to a doctor.', 'She is married with a doctor.', 'She is married at a doctor.'], 'She is married to a doctor.', 'married TO.'), mc('Qual frase está correta?', ['the reason for the delay', 'the reason of the delay', 'the reason to the delay'], 'the reason for the delay', 'reason FOR.'),
        lacuna('It depends ___ the weather.', ['on', 'of', 'from'], 'on', 'depend ON.'), lacuna('I\'m afraid ___ spiders.', ['of', 'from', 'at'], 'of', 'afraid OF.'), lacuna('I\'m interested ___ music.', ['in', 'on', 'at'], 'in', 'interested IN.'), lacuna('She entered ___ room. (sem preposição)', ['the', 'in the', 'at the'], 'the', 'enter + objeto.'),
        ordem('Ordene: «I\'m interested in learning English.»', ['I\'m', 'interested', 'in', 'learning', 'English'], 'I\'m interested in learning English.', 'interested in + -ing.'), ordem('Ordene: «She is good at cooking.»', ['She', 'is', 'good', 'at', 'cooking'], 'She is good at cooking.', 'good at + -ing.'),
        livre('Escreva 4 frases usando uma preposição dependente de cada tipo: verbo, adjetivo e substantivo.', 'It depends on the weather. I\'m afraid of spiders. She is good at math. What is the reason for the delay?'),
      ]),
      producao(5, 'Fale 1 minuto sobre as suas habilidades, os seus medos e os seus interesses.'),
    ]),
  ],
});
