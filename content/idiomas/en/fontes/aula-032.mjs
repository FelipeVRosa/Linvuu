import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 32, titulo: 'Present perfect: for e since', nivel: 'a2',
  objetivo: 'Dizer há quanto tempo algo continua com «for» e «since», perguntar «How long…?», e não confundir o present perfect com o passado simples.',
  nota: 'Você diz há quanto tempo mora, trabalha ou conhece alguém. Próxima aula: present perfect e passado juntos.',
  sessoes: [
    sessao('S1', 'For e since', [
      revisao(5, 'Diga 3 coisas que acabaram de acontecer e 3 que você já fez hoje.'),
      palavras(8, [
        ['for', 'fór', 'por, durante', ''], ['since', 'síns', 'desde', ''], ['how long', 'háu lóng', 'há quanto tempo', ''], ['live', 'liv', 'morar', ''], ['know', 'nôu', 'conhecer, saber', ''], ['work', 'uãrk', 'trabalhar', ''], ['married', 'mérid', 'casado', ''], ['years', 'iírz', 'anos', ''],
      ]),
      gramatica(12, 'For e since', 'PASSO 1: para algo que COMEÇOU no passado e CONTINUA agora, use o present perfect: «I have lived here for five years.» PASSO 2: «for» + DURAÇÃO (quanto tempo): «for two weeks», «for a long time». PASSO 3: «since» + PONTO DE INÍCIO (quando começou): «since 2020», «since Monday», «since I was a child». PASSO 4: pergunta: «How long have you lived here?» PASSO 5: verbos de estado (live, know, work, be, have) funcionam bem aqui: «I have known her for ten years.» PASSO 6: o português usa o PRESENTE: «moro aqui há cinco anos». O inglês exige o present perfect: «I have lived here for five years», não «I live here for five years».', {
        tag: 'For e since',
        comparacao: 'em português dizemos «moro aqui há cinco anos» (presente). Em inglês, o presente seria errado: «I have lived here for five years». É um dos erros mais comuns do brasileiro.',
        tabela: [
          { palavra: 'for', usa_com: 'duração', exemplo: 'for three years, for a week' }, { palavra: 'since', usa_com: 'ponto de início', exemplo: 'since 2020, since Monday' }, { palavra: 'How long…?', usa_com: 'pergunta', exemplo: 'How long have you worked here?' },
        ],
        erros: [['I live here for five years.', 'I have lived here for five years.', 'Continua agora: present perfect.'], ['I have lived here since five years.', 'I have lived here for five years.', 'Duração: for.'], ['I have lived here for 2020.', 'I have lived here since 2020.', 'Ano: since.'], ['How long do you live here?', 'How long have you lived here?', 'Pergunta de duração.']],
      }),
      producao(5, 'Diga há quanto tempo você mora na sua cidade, estuda inglês, conhece o seu melhor amigo e trabalha no seu emprego.'),
    ]),
    sessao('S2', 'Escolher entre for e since', [
      revisao(4, 'Complete: «I have lived here ___ 2019. I have worked here ___ three years.»'),
      palavras(6, [
        ['all my life', 'ól mái láif', 'a minha vida toda', ''], ['a long time', 'a lóng táim', 'muito tempo', ''], ['a few days', 'a fiu dêiz', 'alguns dias', ''], ['last year', 'lést iír', 'o ano passado', ''], ['since I was a child', 'síns ái uóz a tcháild', 'desde criança', ''], ['this morning', 'dís mórnin', 'esta manhã', ''],
      ]),
      gramatica(12, 'Quando for, quando since', 'PASSO 1: se você consegue contar «quanto tempo» (um número + unidade), é «for»: «for ten minutes», «for six months». PASSO 2: se você aponta «quando começou» (data, dia, hora, evento), é «since»: «since 8 o\'clock», «since last year», «since I moved here». PASSO 3: «all my life», «a long time» e «ages» são durações: «for a long time», «all my life» (sem for). PASSO 4: o tempo de espera: «I have waited for an hour.» ou «I have waited since 3 o\'clock.» PASSO 5: «for» pode ser omitido com «all»: «I have lived here all my life.»', {
        tag: 'For × since',
        comparacao: 'em português «há» e «desde» também se alternam: «há dois anos» (duração) e «desde 2022» (ponto). O inglês os separa com «for» e «since».',
        tabela: [
          { duracao: 'for two hours', ponto: 'since 3 o\'clock' }, { duracao: 'for three years', ponto: 'since 2023' }, { duracao: 'for a long time', ponto: 'since Monday' }, { duracao: 'for six months', ponto: 'since I was a child' },
        ],
        erros: [['I have waited since two hours.', 'I have waited for two hours.', 'Duração: for.'], ['I have waited for 3 o\'clock.', 'I have waited since 3 o\'clock.', 'Hora de início: since.'], ['for all my life', 'all my life', 'Sem «for» antes de «all my life».']],
      }),
      producao(8, 'Faça 6 frases sobre você com «for» e «since» (morar, estudar, trabalhar, conhecer, ter, esperar).'),
    ]),
    sessao('S3', 'Conhecer alguém e contar a sua história', [
      revisao(4, 'Faça a pergunta «How long have you…?» para 3 verbos diferentes.'),
      palavras(5, [
        ['move', 'muv', 'mudar-se', ''], ['moved', 'muvd', 'mudou-se', ''], ['neighbor', 'nêibor', 'vizinho', ''], ['colleague', 'cólig', 'colega de trabalho', ''], ['retire', 'ritáier', 'aposentar-se', ''],
      ]),
      gramatica(8, 'Do passado para o presente', 'PASSO 1: combine os dois tempos para contar uma história: «I moved here in 2019. I have lived here for five years.» PASSO 2: o simples diz QUANDO começou; o present perfect diz que CONTINUA. PASSO 3: «I came to Brazil in 2010 and I have worked here since then.» PASSO 4: «since then» = desde então. PASSO 5: pergunte: «When did you move here?» (simples) e «How long have you lived here?» (present perfect).', {
        tag: 'Simples e perfect',
        comparacao: 'em português a mesma frase diz «mudei em 2019 e moro aqui há cinco anos». Em inglês os dois tempos aparecem: simples (quando) e present perfect (há quanto tempo).',
        tabela: [
          { pergunta: 'When did you move here?', resposta: 'I moved here in 2019.' }, { pergunta: 'How long have you lived here?', resposta: 'I have lived here for five years.' },
        ],
        erros: [['When have you moved here?', 'When did you move here?', 'Pergunta com quando: simples.'], ['How long did you live here? (e ainda mora)', 'How long have you lived here?', 'Ainda mora: present perfect.']],
      }),
      texto(8, 'My life in the city / A minha vida na cidade', 'My name is Paul. I moved to this city in 2018, so I have lived here for about six years. I have worked at the same company since 2019. My colleague Sam has been my friend since the first day. I have known my neighbor for three years, and we have played football together every Sunday since last spring. I love this city, but I haven\'t been back to my hometown since last Christmas.',
        'Meu nome é Paul. Mudei para esta cidade em 2018, então moro aqui há cerca de seis anos. Trabalho na mesma empresa desde 2019. O meu colega Sam é meu amigo desde o primeiro dia. Conheço o meu vizinho há três anos e jogamos futebol juntos todo domingo desde a primavera passada. Adoro esta cidade, mas não volto à minha cidade natal desde o último Natal.',
        [['How long has Paul lived in the city?', 'About six years.'], ['Since when has he worked at the company?', 'Since 2019.'], ['How long has he known his neighbor?', 'For three years.'], ['When was he last in his hometown?', 'Last Christmas.']]),
      producao(5, 'Escreva 6 frases sobre a sua vida usando 3 vezes o passado simples e 3 vezes o present perfect com for/since.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 32', [
      revisao(5, 'Conte a sua história: quando chegou, quando começou a estudar, e há quanto tempo faz cada coisa.'),
      exercicios(20, [
        ouvir('I have lived here for five years', ['I have lived here for five years', 'I have lived here since five years', 'I live here for five years'], 'I have lived here for five years', 'Ouça «for».'), ouvir('She has worked here since 2019', ['She has worked here since 2019', 'She has worked here for 2019', 'She worked here since 2019'], 'She has worked here since 2019', 'Ouça «since».'), ditado('How long have you lived here', 'Escreva: how long have you lived here.'), ditado('I have known him for ten years', 'Escreva: I have known him for ten years.'),
        mc('Qual preposição vai com «three years»?', ['for', 'since', 'during'], 'for', 'Duração: for.'), mc('Qual preposição vai com «2020»?', ['since', 'for', 'from'], 'since', 'Ponto: since.'), mc('Qual frase está correta?', ['I have lived here for five years.', 'I live here for five years.', 'I am living here since five years.'], 'I have lived here for five years.', 'Continua: perfect.'), mc('Qual pergunta está correta?', ['How long have you lived here?', 'How long do you live here?', 'How long are you living here?'], 'How long have you lived here?', 'Present perfect.'),
        lacuna('I have worked here ___ 2019.', ['since', 'for', 'from'], 'since', 'Ponto de início.'), lacuna('She has known him ___ ten years.', ['for', 'since', 'in'], 'for', 'Duração.'), lacuna('They have ___ here since 2020. (morado)', ['lived', 'live', 'living'], 'lived', 'Particípio.'), lacuna('I have waited ___ an hour.', ['for', 'since', 'at'], 'for', 'Duração.'),
        ordem('Ordene: «I have lived here since 2019.»', ['I', 'have', 'lived', 'here', 'since', '2019'], 'I have lived here since 2019.', 'have + particípio + since.'), ordem('Ordene: «How long has she worked here?»', ['How', 'long', 'has', 'she', 'worked', 'here'], 'How long has she worked here?', 'How long + has + sujeito.'),
        livre('Escreva 4 frases sobre há quanto tempo você faz coisas, com for e since.', 'I have lived here for six years. I have studied English since March. I have known my friend for ten years. I have worked here since 2022.'),
      ]),
      producao(5, 'Fale 1 minuto sobre a sua vida: de onde veio, quando mudou e há quanto tempo faz o que faz.'),
    ]),
  ],
});
