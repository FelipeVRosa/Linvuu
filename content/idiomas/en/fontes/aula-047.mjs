import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 47, titulo: 'Discurso indireto: contar o que alguém disse', nivel: 'b1',
  objetivo: 'Relatar o que alguém disse (discurso indireto) recuando os tempos verbais, ajustando pronomes e marcadores de tempo, e usar «say» e «tell» corretamente.',
  nota: 'Você conta o que outras pessoas disseram. Próxima aula: perguntas e ordens no discurso indireto.',
  sessoes: [
    sessao('S1', 'Say, tell e o recuo dos tempos', [
      revisao(5, 'Descreva a sua família com relativas explicativas e comentários com «which».'),
      palavras(8, [
        ['say', 'sêi', 'dizer', ''], ['said', 'séd', 'disse', ''], ['tell', 'tél', 'contar, dizer a alguém', ''], ['told', 'tôuld', 'disse a alguém', ''], ['explain', 'ikspléin', 'explicar', ''], ['announce', 'anáuns', 'anunciar', ''], ['promise', 'prómis', 'prometer', ''], ['admit', 'admít', 'admitir', ''],
      ]),
      gramatica(12, 'Discurso indireto: recuar um tempo', 'PASSO 1: no discurso DIRETO você repete as palavras: «I am tired,» she said. No INDIRETO, você conta com suas palavras: «She said (that) she was tired.» PASSO 2: o verbo recua um passo no tempo: presente → passado («am → was»), passado → past perfect («went → had gone»), will → would, can → could. PASSO 3: ajuste os pronomes: «I» muda para «she/he» conforme quem falou. PASSO 4: ajuste os marcadores: «today → that day», «tomorrow → the next day», «yesterday → the day before», «here → there», «now → then». PASSO 5: «say» não leva pessoa direta: «She said that…», «She said to me that…». PASSO 6: «tell» leva a pessoa: «She told me that…» PASSO 7: se o fato continua verdadeiro, o recuo é opcional: «She said she is tired» (e ainda está).', {
        tag: 'Discurso indireto',
        comparacao: 'em português também recuamos: «ele disse que estava cansado» (de «estou»). Em inglês, o mesmo ajuste é regra: «He said he was tired». A diferença mais importante é «say» (sem pessoa) × «tell» (com pessoa).',
        tabela: [
          { direto: '«I am tired.»', indireto: 'She said (that) she was tired.' }, { direto: '«I went home.»', indireto: 'She said she had gone home.' }, { direto: '«I will call you.»', indireto: 'She said she would call me.' }, { direto: '«I can swim.»', indireto: 'She said she could swim.' },
        ],
        erros: [['She said me that she was tired.', 'She told me that she was tired.', 'say sem pessoa; tell com pessoa.'], ['She told that she was tired.', 'She said that she was tired.', 'tell exige pessoa.'], ['She said she is tired yesterday.', 'She said she was tired.', 'Recue o tempo.'], ['He said he will call me.', 'He said he would call me.', 'will → would.']],
      }),
      producao(5, 'Conte em voz alta o que 5 pessoas disseram a você hoje, com «said» e «told me».'),
    ]),
    sessao('S2', 'Marcadores de tempo e lugar', [
      revisao(4, 'Passe para o indireto: «I am happy», «I will go», «I saw him».'),
      palavras(6, [
        ['that day', 'dét dêi', 'naquele dia', ''], ['the next day', 'dâ nékst dêi', 'no dia seguinte', ''], ['the day before', 'dâ dêi bifór', 'no dia anterior', ''], ['there', 'dér', 'lá', ''], ['then', 'dén', 'então', ''], ['a week earlier', 'a uíik ãrlier', 'uma semana antes', ''],
      ]),
      gramatica(12, 'Ajustar tempo, lugar e pronomes', 'PASSO 1: marcadores: today → that day; tomorrow → the next day / the following day; yesterday → the day before; now → then; here → there; this → that; next week → the following week; last year → the year before; ago → before. PASSO 2: exemplo completo: «I\'ll see you here tomorrow,» he said. → He said he would see me there the next day. PASSO 3: «I → he/she», «my → his/her», «you → me/him/her» conforme quem conta. PASSO 4: o contexto manda: se você está no mesmo lugar e dia quando conta, pode manter «here» e «today»: «She said she would call me today.» (hoje ainda). PASSO 5: verbos modais: must → had to, may → might, should e would e could e might não mudam.', {
        tag: 'Ajustes',
        comparacao: 'em português também mudamos «amanhã» para «no dia seguinte» e «aqui» para «lá», mas muitas vezes sem pensar. Em inglês, faça isso conscientemente, sobretudo na escrita.',
        tabela: [
          { direto: 'today', indireto: 'that day' }, { direto: 'tomorrow', indireto: 'the next day' }, { direto: 'yesterday', indireto: 'the day before' }, { direto: 'here', indireto: 'there' }, { direto: 'now', indireto: 'then' },
        ],
        erros: [['She said she would come tomorrow. (relato dias depois)', 'She said she would come the next day.', 'Ajuste o marcador.'], ['He said he must go.', 'He said he had to go.', 'must → had to.'], ['She said I was late. (ela disse que ela estava)', 'She said she was late.', 'Pronome: quem falou.']],
      }),
      producao(8, 'Passe para o indireto 6 frases que alguém disse: «I\'m tired today.», «I\'ll call you tomorrow.», «I went there yesterday.»'),
    ]),
    sessao('S3', 'Mensagens e recados', [
      revisao(4, 'Passe para o indireto: «We will arrive tomorrow», «I can\'t come now».'),
      palavras(5, [
        ['message', 'méssidj', 'recado', ''], ['phone call', 'fôun kól', 'ligação', ''], ['announce', 'anáuns', 'anunciar', ''], ['agree', 'agrii', 'concordar', ''], ['refuse', 'rifiuz', 'recusar', ''],
      ]),
      gramatica(8, 'Verbos de relato', 'PASSO 1: além de say/tell, há verbos que já indicam a intenção: «She promised to call.», «He admitted that he was wrong.», «They refused to help.», «She agreed to come.» PASSO 2: «promise/agree/refuse + to + verbo»: «He refused to pay.» PASSO 3: «admit/explain/announce + that»: «She explained that the office was closed.» PASSO 4: use-os para soar natural e variado, em vez de repetir «said» o tempo todo.', {
        tag: 'Verbos de relato',
        comparacao: 'em português «prometeu que ligaria» e «prometeu ligar» são ambos possíveis. Em inglês, «promised to call» é a forma mais curta e natural.',
        tabela: [
          { verbo: 'promise', estrutura: 'promised to call', sentido: 'prometeu ligar' }, { verbo: 'refuse', estrutura: 'refused to help', sentido: 'recusou-se a ajudar' }, { verbo: 'admit', estrutura: 'admitted that he was wrong', sentido: 'admitiu que errou' }, { verbo: 'explain', estrutura: 'explained that…', sentido: 'explicou que…' },
        ],
        erros: [['She promised that she calls.', 'She promised to call.', 'promise + to.'], ['He refused helping.', 'He refused to help.', 'refuse + to.']],
      }),
      dialogo(8, 'Passing a message / Passando um recado', 'Sarah conta a Ben o que Maria disse ao telefone.', [
        ['Sarah', 'Ben, Maria called while you were out.', 'Ben, a Maria ligou enquanto você estava fora.'], ['Ben', 'What did she say?', 'O que ela disse?'], ['Sarah', 'She said she was sorry, but she couldn\'t come to the meeting.', 'Disse que sentia muito, mas não poderia vir à reunião.'], ['Ben', 'Did she say why?', 'Disse por quê?'], ['Sarah', 'She told me that her son was sick, and she promised to send the report by email.', 'Ela me disse que o filho estava doente e prometeu enviar o relatório por e-mail.'], ['Ben', 'OK. Did she say she would call again?', 'Certo. Ela disse que ligaria de novo?'], ['Sarah', 'Yes, she said she would call tomorrow.', 'Sim, disse que ligaria amanhã.'],
      ]),
      producao(5, 'Conte a um colega o recado que alguém deixou, com 5 frases no indireto.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 47', [
      revisao(5, 'Conte em voz alta o que as últimas 3 pessoas que falaram com você disseram.'),
      exercicios(20, [
        ouvir('She said she was tired', ['She said she was tired', 'She said she is tired', 'She told she was tired'], 'She said she was tired', 'Ouça «said… was».'), ouvir('He told me he would call', ['He told me he would call', 'He said me he would call', 'He told he would call'], 'He told me he would call', 'Ouça «told me».'), ditado('She promised to send the report', 'Escreva: she promised to send the report.'), ditado('He said he had gone home', 'Escreva: he said he had gone home.'),
        mc('Qual frase está correta?', ['She told me that she was tired.', 'She said me that she was tired.', 'She told that she was tired.'], 'She told me that she was tired.', 'tell + pessoa.'), mc('Como fica «will» no indireto?', ['would', 'will', 'wills'], 'would', 'will → would.'), mc('Como fica «tomorrow» no indireto (dias depois)?', ['the next day', 'tomorrow', 'next today'], 'the next day', 'Ajuste.'), mc('Qual frase está correta?', ['He refused to help.', 'He refused helping.', 'He refused that help.'], 'He refused to help.', 'refuse + to.'),
        lacuna('She said she ___ tired. (estava)', ['was', 'is', 'will be'], 'was', 'am → was.'), lacuna('He ___ me he would call. (disse)', ['told', 'said', 'spoke'], 'told', 'tell + pessoa.'), lacuna('She said she ___ gone home. (tinha)', ['had', 'has', 'was'], 'had', 'past → past perfect.'), lacuna('They ___ to help us. (recusaram)', ['refused', 'said', 'told'], 'refused', 'refuse + to.'),
        ordem('Ordene: «She said she would call tomorrow.»', ['She', 'said', 'she', 'would', 'call', 'tomorrow'], 'She said she would call tomorrow.', 'said + would.'), ordem('Ordene: «He told me that he was tired.»', ['He', 'told', 'me', 'that', 'he', 'was', 'tired'], 'He told me that he was tired.', 'told + pessoa.'),
        livre('Passe 4 frases para o indireto: «I am tired», «I will call», «I went home», «I can swim».', 'She said she was tired. He said he would call. She said she had gone home. He said he could swim.'),
      ]),
      producao(5, 'Conte em 1 minuto uma conversa recente que você teve, usando o discurso indireto.'),
    ]),
  ],
});
