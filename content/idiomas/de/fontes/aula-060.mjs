import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 60, titulo: 'Verbos com preposição 2: darauf, daran, worauf, woran', nivel: 'b1',
  objetivo: 'Usar os advérbios pronominais com «da(r)-» (darauf, daran, davon…) para retomar coisas e situações, as perguntas com «wo(r)-» (worauf, woran…), e a antecipação «darauf, dass …» / «darauf, … zu …».',
  nota: 'Você retoma e pergunta com advérbios pronominais. Próxima aula: adjetivos e substantivos com preposição.',
  sessoes: [
    sessao('S1', 'Da(r)- + preposição', [
      revisao(5, 'Escreva 8 verbos com preposição e o caso que pedem.'),
      palavras(8, [
        ['darauf', 'dá-rauf', 'nisso, por isso, a isso', 'for it'], ['daran', 'dá-ran', 'nisso, a isso (conexão)', 'of it'], ['davon', 'dá-fon', 'disso', 'of it'], ['dafür', 'da-für', 'para isso, a favor', 'for it'],
        ['darüber', 'da-rü-ber', 'sobre isso', 'about it'], ['damit', 'dá-mit', 'com isso', 'with it'], ['dazu', 'da-tsu', 'para isso, além disso', 'to it'], ['darum', 'da-rúm', 'por isso', 'for it'],
      ]),
      gramatica(14, 'O advérbio pronominal com da(r)-, passo a passo', 'PASSO 1: se o verbo pede uma preposição e o complemento é uma COISA ou uma SITUAÇÃO já mencionada, o alemão troca «preposição + substantivo» por «DA(R)- + preposição»: «Ich warte auf den Bus» → «Ich warte DARAUF.» PASSO 2: forma: «da-» + preposição que começa por consoante (damit, davon, dafür, dazu, danach) e «DAR-» + preposição que começa por vogal (darauf, daran, darüber, darum, darin). PASSO 3: serve APENAS para coisas e situações. Para PESSOAS, use a preposição + pronome: «Ich warte auf ihn» (e não «darauf»). PASSO 4: o advérbio pronominal pode vir no começo da frase para dar ênfase: «Darauf freue ich mich.» PASSO 5: lembre: «damit» também é conjunção (para que); aqui é advérbio («com isso»).', {
        tag: 'Pronomes',
        tabela: [
          { verbo: 'warten auf', completo: 'Ich warte auf den Bus.', retomada: 'Ich warte darauf.' }, { verbo: 'denken an', completo: 'Ich denke an die Reise.', retomada: 'Ich denke daran.' }, { verbo: 'sprechen über', completo: 'Wir sprechen über das Wetter.', retomada: 'Wir sprechen darüber.' }, { verbo: 'sich interessieren für', completo: 'Ich interessiere mich für Musik.', retomada: 'Ich interessiere mich dafür.' },
          { verbo: 'träumen von', completo: 'Ich träume von einem Haus.', retomada: 'Ich träume davon.' }, { verbo: 'sich beschäftigen mit', completo: 'Ich beschäftige mich mit dem Problem.', retomada: 'Ich beschäftige mich damit.' },
        ],
        erros: [['Ich warte auf es.', 'Ich warte darauf.', 'Coisa/situação: «darauf», não «auf es».'], ['Ich warte darauf ihn.', 'Ich warte auf ihn.', 'Pessoa: preposição + pronome.'], ['Ich denke dran die Reise.', 'Ich denke an die Reise. / Ich denke daran.', 'Ou o substantivo, ou o advérbio pronominal.']],
      }),
      producao(3, 'Retome 6 coisas em voz alta com «da(r)-»: «Ich warte auf den Bus → Ich warte darauf.»'),
    ]),
    sessao('S2', 'Wo(r)- + preposição', [
      revisao(5, 'Escreva 6 pares de frases: com substantivo e com advérbio pronominal.'),
      palavras(8, [
        ['worauf', 'vo-rauf', 'em que, por quê (coisa)', 'what … for'], ['woran', 'vo-ran', 'em que (coisa)', 'what … of'], ['wovon', 'vo-fon', 'de quê', 'what … of'], ['wofür', 'vo-für', 'para quê, por quê', 'what for'],
        ['worüber', 'vo-rü-ber', 'sobre o quê', 'what about'], ['womit', 'vo-mít', 'com quê', 'with what'], ['wozu', 'vo-tsu', 'para quê', 'what for'], ['worum', 'vo-rúm', 'sobre o quê', 'what about'],
      ]),
      gramatica(12, 'Perguntar por coisas com wo(r)-', 'PASSO 1: para perguntar por uma COISA ou SITUAÇÃO ligada ao verbo com preposição, use «WO(R)-» + preposição: «Ich warte auf den Bus» → «WORAUF wartest du?» PASSO 2: a mesma regra de «da(r)-»: «wo-» + consoante (womit, wovon, wofür, wozu) e «wor-» + vogal (worauf, woran, worüber, worum). PASSO 3: para PESSOAS, use a preposição + pronome interrogativo: «Auf WEN wartest du?» (acusativo), «Mit WEM sprichst du?» (dativo). PASSO 4: compare: «Worauf wartest du?» (coisa) × «Auf wen wartest du?» (pessoa). PASSO 5: responda com a preposição + substantivo ou «darauf»: «Ich warte auf den Bus» ou «Ich warte darauf.» PASSO 6: em conversa, «woran denkst du?», «worüber sprecht ihr?» e «wofür interessierst du dich?» são muito comuns.', {
        tag: 'Pronomes',
        tabela: [
          { coisa: 'Worauf wartest du?', pessoa: 'Auf wen wartest du?' }, { coisa: 'Woran denkst du?', pessoa: 'An wen denkst du?' }, { coisa: 'Worüber sprecht ihr?', pessoa: 'Über wen sprecht ihr?' }, { coisa: 'Wofür interessierst du dich?', pessoa: 'Für wen interessierst du dich?' },
          { coisa: 'Womit beschäftigst du dich?', pessoa: 'Mit wem beschäftigst du dich?' }, { coisa: 'Wovon träumst du?', pessoa: 'Von wem träumst du?' },
        ],
        erros: [['Auf was wartest du?', 'Worauf wartest du?', 'Em alemão correto: «worauf» para coisas.'], ['Worauf wartest du? (a pessoa)', 'Auf wen wartest du?', 'Pessoa: preposição + wen/wem.'], ['Wo denkst du an?', 'Woran denkst du?', 'A preposição se junta ao «wo(r)-».']],
      }),
      producao(5, 'Faça 6 perguntas em voz alta com «wo(r)-»: «Worauf wartest du? Woran denkst du? Worüber sprecht ihr?»'),
    ]),
    sessao('S3', 'Darauf, dass … e darauf, … zu …', [
      revisao(5, 'Escreva 6 perguntas com «wo(r)-» e 3 com «auf wen / mit wem».'),
      gramatica(10, 'O advérbio pronominal antecipa uma frase', 'PASSO 1: o advérbio pronominal também ANTECIPA uma oração com «DASS» ou um infinitivo com «ZU»: «Ich warte DARAUF, dass du kommst» (eu espero que você venha). PASSO 2: com o MESMO sujeito, prefira o infinitivo: «Ich freue mich DARAUF, dich zu sehen.» PASSO 3: com sujeitos DIFERENTES, use «dass»: «Ich freue mich darauf, dass du kommst.» PASSO 4: lembre da preposição do verbo: «sich freuen auf» → «darauf», «sich ärgern über» → «darüber», «denken an» → «daran». PASSO 5: o advérbio pronominal é obrigatório quando o verbo pede preposição: «Ich ärgere mich darüber, dass …» (e não «Ich ärgere mich, dass …»).', {
        tag: 'Frase',
        tabela: [
          { construcao: 'darauf + dass', frase: 'Ich warte darauf, dass du kommst.' }, { construcao: 'darauf + zu (mesmo sujeito)', frase: 'Ich freue mich darauf, dich zu sehen.' }, { construcao: 'darüber + dass', frase: 'Ich ärgere mich darüber, dass er nicht anruft.' }, { construcao: 'daran + zu', frase: 'Ich denke daran, im Sommer zu reisen.' }, { construcao: 'davon + dass', frase: 'Er träumt davon, dass er reich wird.' },
        ],
      }),
      dialogo(10, 'Worüber sprecht ihr? / Sobre o que vocês conversam?', 'Dois colegas conversam sobre expectativas.', [
        ['Mia', 'Worüber sprecht ihr?', 'Sobre o que vocês conversam?'], ['Jonas', 'Wir sprechen darüber, dass Paul nächstes Jahr nach Berlin zieht.', 'Falamos sobre o fato de o Paul se mudar para Berlim no ano que vem.'], ['Mia', 'Woran liegt das?', 'Por que isso acontece?'],
        ['Jonas', 'Er wartet darauf, dass er eine Stelle bekommt.', 'Ele espera conseguir uma vaga.'], ['Mia', 'Ich freue mich darauf, ihn dort zu besuchen.', 'Estou ansiosa por visitá-lo lá.'], ['Jonas', 'Ich freue mich auch darauf. Wir haben davon schon lange geträumt.', 'Também estou ansioso. Já sonhamos com isso há muito tempo.'],
        ['Mia', 'Und worauf freust du dich am meisten?', 'E pelo que você está mais ansioso?'], ['Jonas', 'Auf das Wiedersehen mit meinen Freunden.', 'Pelo reencontro com os meus amigos.'],
      ]),
      producao(5, 'Fale em voz alta do que você espera, sonha e teme, com «darauf, dass» e «darauf, … zu».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases com advérbios pronominais.'),
      exercicios(20, [
        lacuna('Ich warte ___. (auf den Bus)', ['darauf', 'davon', 'dafür'], 'darauf', 'warten auf → darauf.'), lacuna('Ich denke ___. (an die Reise)', ['daran', 'darauf', 'damit'], 'daran', 'denken an → daran.'), lacuna('Wir sprechen ___. (über das Wetter)', ['darüber', 'davon', 'dazu'], 'darüber', 'sprechen über → darüber.'),
        lacuna('___ wartest du? (coisa)', ['Worauf', 'Auf wen', 'Wofür'], 'Worauf', 'Pergunta por coisa.'), lacuna('___ wartest du? (pessoa)', ['Auf wen', 'Worauf', 'Wofür'], 'Auf wen', 'Pergunta por pessoa.'), lacuna('___ denkst du? (coisa)', ['Woran', 'An wen', 'Worauf'], 'Woran', 'denken an → woran.'),
        lacuna('Ich freue mich ___, dich zu sehen.', ['darauf', 'darüber', 'davon'], 'darauf', 'sich freuen auf → darauf.'), lacuna('Ich ärgere mich ___, dass er nicht anruft.', ['darüber', 'darauf', 'daran'], 'darüber', 'sich ärgern über → darüber.'), mc('O advérbio pronominal serve para:', ['coisas e situações', 'pessoas', 'lugares'], 'coisas e situações', 'Para pessoas: preposição + pronome.'),
        mc('«Wo(r)-» é usado para perguntar por:', ['coisas', 'pessoas', 'lugares'], 'coisas', 'Worauf, woran…'), mc('«Darauf» é formado por:', ['dar- + auf', 'da- + auf', 'wo- + auf'], 'dar- + auf', 'Preposição que começa por vogal: dar-.'), ordem('Ordene: «Eu espero que você venha.»', ['Ich', 'warte', 'darauf', 'dass', 'du', 'kommst'], 'Ich warte darauf, dass du kommst.', 'darauf + dass + verbo no fim.'),
        ouvir('Ich freue mich darauf, dich zu sehen', ['Ich freue mich darauf, dich zu sehen', 'Ich freue mich auf dich zu sehen', 'Ich sehe dich darauf'], 'Ich freue mich darauf, dich zu sehen', 'darauf + zu.'), ditado('Worüber sprecht ihr', 'Pergunta com wo(r)-.'), livre('Escreva 5 frases: duas com «da(r)-», uma pergunta com «wo(r)-», uma com «darauf, dass» e uma com «darauf, … zu».', 'Ich warte darauf. Ich denke daran. Worauf wartest du? Ich warte darauf, dass du kommst. Ich freue mich darauf, dich zu sehen.'),
      ]),
      producao(5, 'Grave-se perguntando e respondendo com «worauf», «woran», «darüber» e «darauf, dass».'),
    ]),
  ],
});
