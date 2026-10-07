import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 48, titulo: 'Discurso indireto: perguntas, pedidos e ordens', nivel: 'b1',
  objetivo: 'Relatar perguntas (com «if/whether» e palavras interrogativas), pedidos e ordens («asked me to», «told me not to»), e perguntar de forma indireta e educada.',
  nota: 'Você relata perguntas e ordens. Próxima aula: gerúndio e infinitivo.',
  sessoes: [
    sessao('S1', 'Perguntas no indireto', [
      revisao(5, 'Conte o que as últimas pessoas que falaram com você disseram.'),
      palavras(8, [
        ['ask', 'ésk', 'perguntar, pedir', ''], ['asked', 'éskt', 'perguntou', ''], ['wonder', 'uânder', 'perguntar-se', ''], ['if', 'íf', 'se', ''], ['whether', 'uéder', 'se (ou não)', ''], ['want to know', 'uónt tu nôu', 'querer saber', ''], ['reply', 'riplái', 'responder', ''], ['answer', 'ánser', 'resposta', ''],
      ]),
      gramatica(12, 'Perguntas no discurso indireto', 'PASSO 1: pergunta de SIM/NÃO: use «if» ou «whether»: «Are you tired?» → She asked if I was tired. PASSO 2: pergunta com palavra interrogativa: mantenha a palavra: «Where do you live?» → She asked where I lived. PASSO 3: a ORDEM volta à de afirmação (sujeito antes do verbo) e SEM «do/does/did»: «She asked where I lived», não «where did I live». PASSO 4: o tempo recua um passo: do → did vira «lived»; did → had + particípio. PASSO 5: sem ponto de interrogação: é uma afirmação sobre uma pergunta. PASSO 6: verbos: ask, wonder, want to know: «He wanted to know what time it was.»', {
        tag: 'Perguntas indiretas',
        comparacao: 'em português também mantemos a ordem direta («ela perguntou onde eu morava»). Em inglês, o erro típico é manter a inversão: «she asked where did I live».',
        tabela: [
          { direta: '«Are you tired?»', indireta: 'She asked if I was tired.' }, { direta: '«Where do you live?»', indireta: 'She asked where I lived.' }, { direta: '«What time is it?»', indireta: 'He wanted to know what time it was.' }, { direta: '«Did you call him?»', indireta: 'She asked whether I had called him.' },
        ],
        erros: [['She asked where did I live.', 'She asked where I lived.', 'Ordem de afirmação.'], ['She asked if was I tired.', 'She asked if I was tired.', 'Sem inversão.'], ['She asked me where do I live?', 'She asked me where I lived.', 'Sem do e sem «?».'], ['She asked that I was tired.', 'She asked if I was tired.', 'Sim/não: if.']],
      }),
      producao(5, 'Relate 5 perguntas que alguém lhe fez recentemente: «She asked me where I…»'),
    ]),
    sessao('S2', 'Pedidos e ordens no indireto', [
      revisao(4, 'Passe para o indireto: «Where do you work?», «Are you busy?», «Did you see him?»'),
      palavras(6, [
        ['tell someone to', 'tél sâmuân tu', 'mandar alguém', ''], ['ask someone to', 'ésk sâmuân tu', 'pedir a alguém que', ''], ['advise', 'adváiz', 'aconselhar', ''], ['warn', 'uórn', 'avisar', ''], ['remind', 'rimáind', 'lembrar', ''], ['order', 'órder', 'ordenar', ''],
      ]),
      gramatica(12, 'Ordens e pedidos', 'PASSO 1: ordem afirmativa: «tell + pessoa + to + verbo»: «Close the door!» → She told me to close the door. PASSO 2: ordem negativa: «tell + pessoa + not to + verbo»: «Don\'t be late!» → She told me not to be late. PASSO 3: pedido educado: «ask + pessoa + to + verbo»: «Could you help me?» → He asked me to help him. PASSO 4: outros verbos: advise (aconselhar), warn (avisar), remind (lembrar), order (ordenar) + pessoa + to: «She reminded me to call him.» PASSO 5: o verbo depois do «to» fica no infinitivo, sem recuo de tempo. PASSO 6: use «not to», e não «to not», na escrita formal.', {
        tag: 'Ordens e pedidos',
        comparacao: 'em português «mandou fechar a porta» e «pediu que eu ajudasse» usam o infinitivo ou o subjuntivo. Em inglês, é sempre «pessoa + to + verbo».',
        tabela: [
          { direta: '«Close the door.»', indireta: 'She told me to close the door.' }, { direta: '«Don\'t be late.»', indireta: 'She told me not to be late.' }, { direta: '«Could you help me?»', indireta: 'He asked me to help him.' }, { direta: '«Remember to call him.»', indireta: 'She reminded me to call him.' },
        ],
        erros: [['She told me that I close the door.', 'She told me to close the door.', 'tell + pessoa + to.'], ['She told me to not be late.', 'She told me not to be late.', 'not to.'], ['He asked me help him.', 'He asked me to help him.', 'Faltou to.'], ['She said me to close the door.', 'She told me to close the door.', 'tell, não say.']],
      }),
      producao(8, 'Relate 6 ordens ou pedidos que você recebeu hoje ou na semana passada.'),
    ]),
    sessao('S3', 'Perguntas indiretas educadas', [
      revisao(4, 'Passe para o indireto: «Close the window.», «Don\'t worry.», «Could you wait?»'),
      palavras(5, [
        ['I wonder', 'ái uânder', 'eu me pergunto', ''], ['could you tell me', 'cúd iu tél mi', 'você poderia me dizer', ''], ['do you know', 'du iu nôu', 'você sabe', ''], ['I was wondering', 'ái uóz uânderin', 'eu estava pensando se', ''], ['possible', 'pósibl', 'possível', ''],
      ]),
      gramatica(8, 'Soar educado: perguntas indiretas', 'PASSO 1: para pedir informação com educação, use uma pergunta indireta: «Could you tell me where the station is?» PASSO 2: a ordem na segunda parte é de AFIRMAÇÃO: «where the station is». PASSO 3: «Do you know what time it starts?» PASSO 4: «I was wondering if you could help me.» (muito educado). PASSO 5: use «if» para sim/não: «Could you tell me if the bank is open?» PASSO 6: esse padrão é comum em serviços e no trabalho.', {
        tag: 'Educação',
        comparacao: 'em português «você poderia me dizer onde fica a estação?» já é educado, e a segunda parte mantém a ordem direta. Em inglês, é o mesmo: «where the station IS», não «where IS the station».',
        tabela: [
          { direta: 'Where is the station?', educada: 'Could you tell me where the station is?' }, { direta: 'What time does it start?', educada: 'Do you know what time it starts?' }, { direta: 'Is the bank open?', educada: 'I was wondering if the bank is open.' },
        ],
        erros: [['Could you tell me where is the station?', 'Could you tell me where the station is?', 'Ordem de afirmação.'], ['Do you know what time does it start?', 'Do you know what time it starts?', 'Sem does.']],
      }),
      texto(8, 'A call to the hotel / Uma ligação para o hotel', 'Yesterday I called a hotel to book a room. The receptionist asked me what dates I needed and how many people were coming. I told her that we would arrive on Friday and that we were three people. She asked if we wanted breakfast, and I said yes. I asked her whether there was parking, and she told me that it was free. Before I hung up, she reminded me to bring my passport and asked me not to arrive after ten p.m.',
        'Ontem liguei para um hotel para reservar um quarto. A recepcionista perguntou quais datas eu precisava e quantas pessoas viriam. Eu disse que chegaríamos na sexta e que éramos três pessoas. Ela perguntou se queríamos café da manhã e eu disse que sim. Perguntei se havia estacionamento, e ela disse que era gratuito. Antes de eu desligar, ela me lembrou de levar o passaporte e pediu que eu não chegasse depois das dez da noite.',
        [['What did the receptionist ask first?', 'What dates the person needed and how many people were coming.'], ['What did the person say about the arrival?', 'They would arrive on Friday.'], ['What did she say about parking?', 'It was free.'], ['What did she remind the person to do?', 'To bring a passport.']]),
      producao(5, 'Escreva em 6 frases uma conversa recente com um atendente, relatando o que cada um disse.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 48', [
      revisao(5, 'Relate uma conversa curta, com perguntas, pedidos e ordens.'),
      exercicios(20, [
        ouvir('She asked where I lived', ['She asked where I lived', 'She asked where did I live', 'She asked me where I live'], 'She asked where I lived', 'Ouça a ordem direta.'), ouvir('He told me not to be late', ['He told me not to be late', 'He told me to not be late', 'He said me not to be late'], 'He told me not to be late', 'Ouça «not to».'), ditado('She asked if I was tired', 'Escreva: she asked if I was tired.'), ditado('Could you tell me where the station is', 'Escreva: could you tell me where the station is.'),
        mc('Qual frase está correta?', ['She asked where I lived.', 'She asked where did I live.', 'She asked where I do live.'], 'She asked where I lived.', 'Ordem de afirmação.'), mc('Qual frase relata uma ordem negativa?', ['She told me not to be late.', 'She told me don\'t be late.', 'She said me not be late.'], 'She told me not to be late.', 'not to.'), mc('Qual palavra liga uma pergunta de sim/não?', ['if', 'what', 'who'], 'if', 'if/whether.'), mc('Qual é a pergunta educada correta?', ['Could you tell me where the station is?', 'Could you tell me where is the station?', 'Could you tell me where does the station?'], 'Could you tell me where the station is?', 'Ordem de afirmação.'),
        lacuna('She asked ___ I was tired. (se)', ['if', 'what', 'that'], 'if', 'if.'), lacuna('He told me ___ close the door. (para)', ['to', 'that', 'for'], 'to', 'tell + to.'), lacuna('She asked me where I ___ . (morava)', ['lived', 'live', 'did live'], 'lived', 'Recuo.'), lacuna('She told me ___ to be late. (não)', ['not', 'don\'t', 'no'], 'not', 'not to.'),
        ordem('Ordene: «She asked me where I worked.»', ['She', 'asked', 'me', 'where', 'I', 'worked'], 'She asked me where I worked.', 'asked + palavra + sujeito + verbo.'), ordem('Ordene: «He told me to close the door.»', ['He', 'told', 'me', 'to', 'close', 'the', 'door'], 'He told me to close the door.', 'told + pessoa + to.'),
        livre('Escreva 4 frases no indireto: uma pergunta sim/não, uma com palavra interrogativa, uma ordem afirmativa e uma ordem negativa.', 'She asked if I was tired. She asked where I lived. He told me to close the door. She told me not to be late.'),
      ]),
      producao(5, 'Conte em 1 minuto uma conversa recente com perguntas, ordens e pedidos no indireto.'),
    ]),
  ],
});
