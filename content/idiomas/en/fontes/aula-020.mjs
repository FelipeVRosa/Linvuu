import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 20, titulo: 'Passado simples: verbos regulares', nivel: 'a2',
  objetivo: 'Contar o que aconteceu com os verbos regulares no passado (-ed), pronunciar o -ed em três sons, e fazer negativa e pergunta com «did».',
  nota: 'Você conta o que fez ontem, com a pronúncia certa do -ed. Próxima aula: verbos irregulares.',
  sessoes: [
    sessao('S1', 'O -ed e as suas regras', [
      revisao(5, 'Conte como foi o seu último fim de semana, com «was» e «were».'),
      palavras(8, [
        ['work', 'uãrk', 'trabalhar', ''], ['worked', 'uãrkt', 'trabalhou', ''], ['play', 'plêi', 'jogar', ''], ['played', 'plêid', 'jogou', ''], ['want', 'uónt', 'querer', ''], ['wanted', 'uóntid', 'quis', ''], ['study', 'stâdi', 'estudar', ''], ['studied', 'stâdid', 'estudou', ''],
      ]),
      gramatica(12, 'O passado simples regular', 'PASSO 1: para falar de algo terminado, acrescente -ed ao verbo: «work → worked». O passado é IGUAL para todas as pessoas: «I worked», «she worked», «they worked». PASSO 2: verbo terminado em -e, só -d: «live → lived», «like → liked». PASSO 3: consoante + y vira -ied: «study → studied», «try → tried». Mas vogal + y só -ed: «play → played». PASSO 4: verbo curto terminado em consoante-vogal-consoante dobra: «stop → stopped», «plan → planned». PASSO 5: use marcadores: yesterday, last year, in 2020, two days ago. PASSO 6: o passado simples fala de algo ACABADO: «I lived in Rio for five years» (e já não moro).', {
        tag: 'Passado simples',
        comparacao: 'em português o passado muda com a pessoa («trabalhei», «trabalhou», «trabalharam»). O inglês usa uma forma só, «worked», para todas.',
        tabela: [
          { regra: 'verbo + -ed', base: 'work', passado: 'worked' }, { regra: '-e + -d', base: 'live', passado: 'lived' }, { regra: 'consoante + y → -ied', base: 'study', passado: 'studied' }, { regra: 'vogal + y → -ed', base: 'play', passado: 'played' }, { regra: 'dobra a consoante', base: 'stop', passado: 'stopped' },
        ],
        erros: [['She worked-s yesterday.', 'She worked yesterday.', 'O passado não leva -s.'], ['I studyed.', 'I studied.', 'y → ied.'], ['I stoped.', 'I stopped.', 'Dobra o p.'], ['He playied.', 'He played.', 'vogal + y só -ed.']],
      }),
      producao(5, 'Diga 6 coisas que você fez ontem usando verbos regulares.'),
    ]),
    sessao('S2', 'Como se fala o -ed', [
      revisao(4, 'Dê o passado de: live, try, stop, play, want, open.'),
      palavras(6, [
        ['watched', 'uótcht', 'assistiu', ''], ['cooked', 'cúkt', 'cozinhou', ''], ['listened', 'lísend', 'ouviu', ''], ['cleaned', 'kliind', 'limpou', ''], ['needed', 'níidid', 'precisou', ''], ['visited', 'vízitid', 'visitou', ''],
      ]),
      gramatica(12, 'Os três sons do -ed', 'PASSO 1: o -ed NÃO se lê sempre igual. Há três sons. PASSO 2: som /t/: depois de sons surdos (p, k, f, s, ch, sh): «watched /uótcht/», «cooked /cúkt/», «stopped /stópt/». PASSO 3: som /d/: depois de sons sonoros (b, g, v, z, l, m, n, r e vogais): «cleaned /kliind/», «played /plêid/», «listened /lísend/». PASSO 4: som /id/: depois de t ou d: «wanted /uóntid/», «needed /níidid/». Aqui o -ed vira UMA sílaba nova. PASSO 5: erro de brasileiro: pronunciar sempre «ed» como sílaba: «walk-ed». Diga «walked /uókt/», uma sílaba só. PASSO 6: treino: ouça os exemplos e repita.', {
        tag: 'Pronúncia do -ed',
        comparacao: 'em português toda sílaba termina em vogal na fala natural, então o brasileiro tende a acrescentar um «i» no fim: «walki», «workedi». Segure a língua nos sons /t/ e /d/ sem soltar vogal.',
        tabela: [
          { som: '/t/', depois_de: 'p, k, f, s, ch, sh', exemplo: 'watched, cooked, stopped' }, { som: '/d/', depois_de: 'vogais e sons sonoros', exemplo: 'played, cleaned, listened' }, { som: '/id/', depois_de: 't, d', exemplo: 'wanted, needed, visited' },
        ],
        erros: [['walk-ed (duas sílabas)', 'walked /uókt/ (uma sílaba)', 'Depois de /k/, o -ed é /t/.'], ['play-ed', 'played /plêid/', 'Depois de vogal, /d/.'], ['want-t', 'wanted /uóntid/', 'Depois de t, sílaba extra.']],
      }),
      producao(8, 'Leia em voz alta 12 passados e classifique cada um em /t/, /d/ ou /id/.'),
    ]),
    sessao('S3', 'Did: negativa e pergunta', [
      revisao(4, 'Diga o som do -ed de: watched, played, wanted, cooked, cleaned, needed.'),
      palavras(5, [
        ['did', 'díd', 'auxiliar do passado', ''], ['didn\'t', 'dídnt', 'não (passado)', ''], ['last year', 'lést iír', 'ano passado', ''], ['in 2020', 'in tuéni tuéni', 'em 2020', ''], ['when', 'uén', 'quando', ''],
      ]),
      gramatica(8, 'Didn\'t e did: o verbo volta ao normal', 'PASSO 1: negativa: «didn\'t» + verbo SIMPLES: «I didn\'t work.» PASSO 2: pergunta: «Did» + sujeito + verbo SIMPLES: «Did you work yesterday?» PASSO 3: resposta curta: «Yes, I did.» / «No, I didn\'t.» PASSO 4: o passado fica só no «did/didn\'t»: depois dele o verbo NÃO leva -ed: «I didn\'t worked» está errado. PASSO 5: com perguntas: «What did you do?», «Where did she go?», «When did they arrive?»', {
        tag: 'Did',
        comparacao: 'em português a negativa e a pergunta mantêm o verbo no passado («não trabalhei», «você trabalhou?»). Em inglês o passado vai para o «did», e o verbo volta simples.',
        tabela: [
          { afirmativa: 'I worked.', negativa: 'I didn\'t work.', pergunta: 'Did you work?' }, { afirmativa: 'She played.', negativa: 'She didn\'t play.', pergunta: 'Did she play?' }, { afirmativa: 'They studied.', negativa: 'They didn\'t study.', pergunta: 'Did they study?' },
        ],
        erros: [['I didn\'t worked.', 'I didn\'t work.', 'Depois de didn\'t, verbo simples.'], ['Did you worked?', 'Did you work?', 'Depois de did, verbo simples.'], ['She not played.', 'She didn\'t play.', 'Negativa com didn\'t.'], ['Where you went?', 'Where did you go?', 'Pergunta pede did.']],
      }),
      texto(8, 'A busy Saturday / Um sábado cheio', 'Last Saturday, I woke up early. I cleaned my apartment and I cooked lunch. After lunch, I called my mother and we talked for an hour. Then I visited my friend Lara. We watched a movie and we laughed a lot. I didn\'t study, and I didn\'t go to the gym. At night, I was very tired, so I stayed at home and listened to music.',
        'No sábado passado, acordei cedo. Limpei o apartamento e cozinhei o almoço. Depois do almoço, liguei para a minha mãe e conversamos por uma hora. Depois visitei a minha amiga Lara. Assistimos a um filme e rimos muito. Não estudei e não fui à academia. À noite, estava muito cansado, então fiquei em casa e ouvi música.',
        [['What did the person cook?', 'Lunch.'], ['Who did the person call?', 'Their mother.'], ['What did they do with Lara?', 'They watched a movie and laughed a lot.'], ['Did the person study?', 'No, they didn\'t.']]),
      producao(5, 'Escreva 5 frases sobre o seu último sábado, incluindo uma negativa com «didn\'t».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 20', [
      revisao(5, 'Conte o seu dia de ontem, do acordar ao dormir.'),
      exercicios(20, [
        ouvir('She worked yesterday', ['She worked yesterday', 'She works yesterday', 'He worked yesterday'], 'She worked yesterday', 'Ouça o /t/ final.'), ouvir('Did you watch the movie', ['Did you watch the movie', 'Do you watch the movie', 'Did you wash the movie'], 'Did you watch the movie', 'Ouça «did».'), ditado('I didn\'t study last night', 'Escreva: I didn\'t study last night.'), ditado('We visited our friends', 'Escreva: we visited our friends.'),
        mc('Qual é o passado de «study»?', ['studied', 'studyed', 'studed'], 'studied', 'y → ied.'), mc('Qual é o som do -ed em «watched»?', ['/t/', '/d/', '/id/'], '/t/', 'Depois de /ch/, /t/.'), mc('Qual é o som do -ed em «wanted»?', ['/id/', '/t/', '/d/'], '/id/', 'Depois de t, /id/.'), mc('Qual frase está correta?', ['I didn\'t work.', 'I didn\'t worked.', 'I not worked.'], 'I didn\'t work.', 'didn\'t + simples.'),
        lacuna('She ___ English yesterday. (estudou)', ['studied', 'studies', 'studying'], 'studied', 'Passado.'), lacuna('___ you call him? (pergunta)', ['Did', 'Do', 'Were'], 'Did', 'Did + sujeito.'), lacuna('They didn\'t ___ . (jogar)', ['play', 'played', 'plays'], 'play', 'didn\'t + simples.'), lacuna('We ___ the car. (paramos)', ['stopped', 'stoped', 'stop'], 'stopped', 'Dobra o p.'),
        ordem('Ordene: «Did she play football yesterday?»', ['Did', 'she', 'play', 'football', 'yesterday'], 'Did she play football yesterday?', 'Did + sujeito + verbo.'), ordem('Ordene: «They didn\'t watch TV.»', ['They', 'didn\'t', 'watch', 'TV'], 'They didn\'t watch TV.', 'didn\'t + verbo.'),
        livre('Escreva 5 frases sobre o seu fim de semana passado: 3 afirmativas e 2 negativas, com verbos regulares.', 'I cleaned my room. I cooked lunch. I visited my friend. I didn\'t study. I didn\'t work.'),
      ]),
      producao(5, 'Conte em 1 minuto um dia que você nunca esqueceu, com 6 verbos regulares.'),
    ]),
  ],
});
