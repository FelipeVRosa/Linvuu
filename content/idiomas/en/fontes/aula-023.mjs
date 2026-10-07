import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 23, titulo: 'Passado contínuo: o que estava acontecendo', nivel: 'a2',
  objetivo: 'Descrever o que estava em andamento no passado com «was/were + -ing», perguntar «What were you doing?» e descrever uma cena.',
  nota: 'Você descreve uma cena do passado. Próxima aula: passado simples e contínuo juntos.',
  sessoes: [
    sessao('S1', 'Was/were + -ing', [
      revisao(5, 'Conte uma história curta no passado com first, then e finally.'),
      palavras(8, [
        ['was doing', 'uóz dúin', 'estava fazendo', ''], ['were doing', 'uãr dúin', 'estavam fazendo', ''], ['at eight o\'clock', 'ét êit oclók', 'às oito horas', ''], ['all day', 'ól dêi', 'o dia todo', ''], ['at that time', 'ét dét táim', 'naquela hora', ''], ['rain', 'rêin', 'chover', ''], ['wait', 'uêit', 'esperar', ''], ['talk', 'tók', 'conversar', ''],
      ]),
      gramatica(12, 'O passado contínuo', 'PASSO 1: usamos o passado contínuo para algo EM ANDAMENTO num momento do passado: «At eight, I was having breakfast.» PASSO 2: estrutura: «was/were + verbo-ing». «was» com I/he/she/it; «were» com you/we/they. PASSO 3: negativa: «wasn\'t/weren\'t + -ing»: «I wasn\'t sleeping.» PASSO 4: pergunta: «Were you sleeping?», «What were you doing at nine?» PASSO 5: resposta curta: «Yes, I was.» / «No, I wasn\'t.» PASSO 6: o foco é o PROCESSO, não o fim: «I was reading a book» (não sei se terminei), «I read a book» (terminei).', {
        tag: 'Passado contínuo',
        comparacao: 'em português o pretérito imperfeito faz esse papel: «eu estava dormindo», «eu dormia». O inglês usa «was/were + -ing» para o que estava em andamento.',
        tabela: [
          { afirmativa: 'I was working.', negativa: 'I wasn\'t working.', pergunta: 'Was I working?' }, { afirmativa: 'She was cooking.', negativa: 'She wasn\'t cooking.', pergunta: 'Was she cooking?' }, { afirmativa: 'They were playing.', negativa: 'They weren\'t playing.', pergunta: 'Were they playing?' },
        ],
        erros: [['I was work.', 'I was working.', 'Falta o -ing.'], ['They was playing.', 'They were playing.', 'they → were.'], ['Did you sleeping?', 'Were you sleeping?', 'Sem «did» no contínuo.'], ['She were cooking.', 'She was cooking.', 'she → was.']],
      }),
      producao(5, 'Diga o que você estava fazendo ontem às 8h, às 12h e às 21h.'),
    ]),
    sessao('S2', 'Descrever uma cena', [
      revisao(4, 'Dê o -ing de: run, make, sit, write, study, plan.'),
      palavras(6, [
        ['at the party', 'ét dâ párti', 'na festa', ''], ['dance', 'dénss', 'dançar', ''], ['sing', 'síng', 'cantar', ''], ['laugh', 'léf', 'rir', ''], ['hold', 'rôuld', 'segurar', ''], ['stand', 'sténd', 'ficar de pé', ''],
      ]),
      gramatica(12, 'Cenas no passado', 'PASSO 1: para descrever uma cena, use várias ações contínuas ao mesmo tempo: «Some people were dancing, others were talking and a man was singing.» PASSO 2: «some… others…» ajuda a variar. PASSO 3: com «while» (enquanto), duas ações simultâneas: «I was cooking while my brother was watching TV.» PASSO 4: o que descreve o CENÁRIO (clima, lugar) também pode ir no contínuo: «It was raining.» PASSO 5: não use o contínuo com verbos de estado: «I knew the answer» (não «I was knowing»).', {
        tag: 'Cenas',
        comparacao: 'em português «enquanto» liga duas ações com o imperfeito. Em inglês, «while» faz o mesmo com o passado contínuo.',
        tabela: [
          { portugues: 'Chovia.', ingles: 'It was raining.', nota: 'cenário' }, { portugues: 'Eu cozinhava enquanto ele via TV.', ingles: 'I was cooking while he was watching TV.', nota: 'while + contínuo' }, { portugues: 'Uns dançavam, outros conversavam.', ingles: 'Some were dancing, others were talking.', nota: 'some… others' },
        ],
        erros: [['I was knowing the answer.', 'I knew the answer.', '«know» é estado.'], ['While I cooked, he was watching TV. (duas ações em andamento)', 'While I was cooking, he was watching TV.', 'Duas ações simultâneas: contínuo nas duas.'], ['It rained when I left. (cenário)', 'It was raining when I left.', 'Cenário: contínuo.']],
      }),
      producao(8, 'Descreva em voz alta uma festa ou um lugar movimentado do passado, com 6 ações contínuas.'),
    ]),
    sessao('S3', 'O que você estava fazendo?', [
      revisao(4, 'Diga o que 3 pessoas estavam fazendo ontem às 20h.'),
      palavras(5, [
        ['at that moment', 'ét dét môument', 'naquele momento', ''], ['phone rang', 'fôun réng', 'o telefone tocou', ''], ['all evening', 'ól ívnin', 'a noite toda', ''], ['busy', 'bízi', 'ocupado', ''], ['alone', 'alôun', 'sozinho', ''],
      ]),
      gramatica(8, 'What were you doing?', 'PASSO 1: pergunta aberta: «What were you doing at nine?» PASSO 2: resposta: «I was watching a movie.» PASSO 3: com «where», «who»: «Where were you going?», «Who were you talking to?» PASSO 4: a preposição vai para o fim: «Who were you talking TO?» PASSO 5: perguntas sobre o sujeito não invertem: «Who was calling?»', {
        tag: 'Perguntas',
        comparacao: 'em português «com quem você estava falando?» começa com a preposição. O inglês a joga para o fim da frase: «Who were you talking to?».',
        tabela: [
          { pergunta: 'What were you doing?', resposta: 'I was studying.' }, { pergunta: 'Where were you going?', resposta: 'I was going to work.' }, { pergunta: 'Who were you talking to?', resposta: 'I was talking to my sister.' },
        ],
        erros: [['To whom were you talking?', 'Who were you talking to?', 'Forma natural e comum.'], ['What you were doing?', 'What were you doing?', 'Inverta.']],
      }),
      dialogo(8, 'The call / A ligação', 'Mia liga para Chris à noite.', [
        ['Mia', 'Hi Chris! I called you at nine, but you didn\'t answer.', 'Oi, Chris! Liguei às nove, mas você não atendeu.'], ['Chris', 'Sorry! I was taking a shower.', 'Desculpe! Eu estava tomando banho.'], ['Mia', 'And at ten? I called again.', 'E às dez? Liguei de novo.'], ['Chris', 'At ten I was watching a movie with my brother.', 'Às dez eu estava vendo um filme com o meu irmão.'], ['Mia', 'What were you watching?', 'O que vocês estavam vendo?'], ['Chris', 'We were watching a comedy. It was very funny!', 'Estávamos vendo uma comédia. Era muito engraçada!'],
      ]),
      producao(5, 'Diga o que você estava fazendo em 4 horários de ontem, em frases completas.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 23', [
      revisao(5, 'Descreva o que você e a sua família estavam fazendo ontem à noite.'),
      exercicios(20, [
        ouvir('I was watching TV at nine', ['I was watching TV at nine', 'I watched TV at nine', 'We were watching TV at nine'], 'I was watching TV at nine', 'Ouça «was watching».'), ouvir('What were you doing', ['What were you doing', 'What did you do', 'What are you doing'], 'What were you doing', 'Ouça «were you doing».'), ditado('They were playing football', 'Escreva: they were playing football.'), ditado('She wasn\'t sleeping', 'Escreva: she wasn\'t sleeping.'),
        mc('Qual frase está correta?', ['They were playing.', 'They was playing.', 'They playing.'], 'They were playing.', 'they → were.'), mc('Qual é a pergunta correta?', ['Were you sleeping?', 'Did you sleeping?', 'Was you sleeping?'], 'Were you sleeping?', 'were + sujeito.'), mc('Qual frase tem duas ações simultâneas?', ['I was cooking while he was watching TV.', 'I cooked and he watched TV.', 'I cook while he watches TV.'], 'I was cooking while he was watching TV.', 'while + contínuo.'), mc('Qual é a forma natural?', ['Who were you talking to?', 'To who were you talking?', 'Who you were talking?'], 'Who were you talking to?', 'Preposição no fim.'),
        lacuna('She ___ cooking. (estava)', ['was', 'were', 'did'], 'was', 'she → was.'), lacuna('We ___ studying. (estávamos)', ['were', 'was', 'did'], 'were', 'we → were.'), lacuna('It ___ raining. (chovia)', ['was', 'were', 'is'], 'was', 'it → was.'), lacuna('I ___ sleeping. (não estava)', ['wasn\'t', 'weren\'t', 'didn\'t'], 'wasn\'t', 'I → wasn\'t.'),
        ordem('Ordene: «What were you doing at nine?»', ['What', 'were', 'you', 'doing', 'at', 'nine'], 'What were you doing at nine?', 'What + were + sujeito + -ing.'), ordem('Ordene: «She was reading a book.»', ['She', 'was', 'reading', 'a', 'book'], 'She was reading a book.', 'was + -ing.'),
        livre('Escreva 4 frases sobre o que você e outras pessoas estavam fazendo ontem às 20h.', 'I was cooking. My mother was watching TV. My brother was studying. We weren\'t sleeping.'),
      ]),
      producao(5, 'Descreva em 1 minuto uma cena do passado, como se o ouvinte estivesse lá.'),
    ]),
  ],
});
