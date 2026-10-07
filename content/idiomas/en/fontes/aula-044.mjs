import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 44, titulo: 'Passiva com modais, perfect e «have something done»', nivel: 'b1',
  objetivo: 'Usar a passiva com modais (can, must, should), com o present perfect («has been done»), e a construção «have something done» para serviços que outras pessoas fazem para você.',
  nota: 'Você fala de regras, resultados e serviços na passiva. Próxima aula: orações relativas.',
  sessoes: [
    sessao('S1', 'Passiva com modais e perfect', [
      revisao(5, 'Descreva um processo na passiva com first, then e finally.'),
      palavras(8, [
        ['can be done', 'kén bi dân', 'pode ser feito', ''], ['must be done', 'mâst bi dân', 'deve ser feito', ''], ['should be done', 'chúd bi dân', 'deveria ser feito', ''], ['has been done', 'héz bin dân', 'foi feito (agora)', ''], ['have been sent', 'hév bin sént', 'foram enviados', ''], ['needs to be done', 'niidz tu bi dân', 'precisa ser feito', ''], ['report', 'ripórt', 'relatório', ''], ['submit', 'submít', 'entregar', ''],
      ]),
      gramatica(12, 'Modais e perfect na passiva', 'PASSO 1: com modais, use «modal + be + particípio»: «The report must be submitted by Friday.», «This can be done online.» PASSO 2: negativa: «The door mustn\'t be left open.» PASSO 3: com o present perfect, use «has/have been + particípio»: «The package has been delivered.», «All the tickets have been sold.» PASSO 4: pergunta: «Has the package been delivered?», «Can it be fixed?» PASSO 5: o resultado importa agora: «The window has been broken» (e continua quebrada). PASSO 6: regra e aviso: «Visitors must be accompanied by staff.»', {
        tag: 'Passiva composta',
        comparacao: 'em português «tem que ser entregue», «já foi enviado» também usam «ser + particípio». Em inglês, o «be» fica depois do modal ou do auxiliar: «must BE submitted», «has BEEN sent».',
        tabela: [
          { tipo: 'modal', frase: 'The report must be submitted by Friday.' }, { tipo: 'modal', frase: 'This can be done online.' }, { tipo: 'perfect', frase: 'The package has been delivered.' }, { tipo: 'perfect pergunta', frase: 'Has the email been sent?' },
        ],
        erros: [['The report must submit by Friday.', 'The report must be submitted by Friday.', 'Faltou be + particípio.'], ['The package has delivered.', 'The package has been delivered.', 'has been.'], ['It can fix.', 'It can be fixed.', 'can be + particípio.'], ['Has been the email sent?', 'Has the email been sent?', 'Ordem da pergunta.']],
      }),
      producao(5, 'Transforme em passiva: «You must pay the bill.», «Someone has cleaned the room.», «They can repair it.»'),
    ]),
    sessao('S2', 'Have something done', [
      revisao(4, 'Faça 3 frases com «must be», «can be» e «has been» + particípio.'),
      palavras(6, [
        ['haircut', 'hérkât', 'corte de cabelo', ''], ['repair', 'ripér', 'consertar', ''], ['service', 'sãrvis', 'revisar (carro), serviço', ''], ['install', 'instól', 'instalar', ''], ['deliver', 'delíver', 'entregar', ''], ['paint', 'pêint', 'pintar', ''],
      ]),
      gramatica(12, 'Have something done', 'PASSO 1: a estrutura «have + objeto + particípio» diz que OUTRA pessoa faz algo para você: «I had my hair cut.» (cortei o cabelo, no salão). PASSO 2: compare: «I cut my hair» (eu mesmo cortei) × «I had my hair cut» (alguém cortou). PASSO 3: presente: «I have my car serviced every year.» PASSO 4: pergunta: «Where do you have your hair cut?» PASSO 5: futuro: «I\'m going to have the kitchen painted.» PASSO 6: também se usa «get»: «I got my phone repaired.» PASSO 7: pode indicar um azar: «She had her wallet stolen.» (roubaram a carteira dela).', {
        tag: 'Have something done',
        comparacao: 'em português «cortei o cabelo» não diz quem cortou. Em inglês, «I cut my hair» significa que você mesmo cortou; «I had my hair cut» significa que alguém cortou para você.',
        tabela: [
          { portugues: 'Cortei o cabelo (no salão).', ingles: 'I had my hair cut.' }, { portugues: 'Vou pintar a cozinha (contratar).', ingles: 'I\'m going to have the kitchen painted.' }, { portugues: 'Levo o carro para revisão.', ingles: 'I have my car serviced.' }, { portugues: 'Roubaram a carteira dela.', ingles: 'She had her wallet stolen.' },
        ],
        erros: [['I cut my hair at the salon.', 'I had my hair cut at the salon.', 'Outra pessoa faz: have + particípio.'], ['I had cut my hair.', 'I had my hair cut.', 'Ordem: have + objeto + particípio.'], ['I have my car repair.', 'I have my car repaired.', 'Particípio.'], ['I have painted the kitchen. (contratei)', 'I have had the kitchen painted.', 'Quem pintou foi outra pessoa.']],
      }),
      producao(8, 'Diga 6 coisas que você faz «have done» (cabelo, carro, unhas, roupas, casa).'),
    ]),
    sessao('S3', 'Serviços e reclamações', [
      revisao(4, 'Diga 3 coisas que você mesmo faz e 3 que outras pessoas fazem por você.'),
      palavras(5, [
        ['complaint', 'complêint', 'reclamação', ''], ['refund', 'rífând', 'reembolso', ''], ['broken', 'brôuken', 'quebrado', ''], ['fix', 'fíks', 'consertar', ''], ['warranty', 'uórenti', 'garantia', ''],
      ]),
      gramatica(8, 'Reclamar e pedir solução', 'PASSO 1: descreva o problema na passiva: «My order hasn\'t been delivered.», «The screen was broken when I received it.» PASSO 2: peça solução: «Could this be fixed?», «Can it be replaced?» PASSO 3: «I\'d like a refund.» PASSO 4: use a passiva para soar menos direto e mais educado: «The wrong item was sent.» em vez de «You sent the wrong item.»', {
        tag: 'Reclamar',
        comparacao: 'em português «mandaram o item errado» tira a culpa do vendedor sem usar o «se». Em inglês, «the wrong item was sent» faz o mesmo.',
        tabela: [
          { direta: 'You sent the wrong item.', educada: 'The wrong item was sent.' }, { direta: 'You didn\'t deliver my order.', educada: 'My order hasn\'t been delivered.' }, { direta: 'Fix it.', educada: 'Could it be fixed, please?' },
        ],
        erros: [['My order didn\'t delivered.', 'My order hasn\'t been delivered.', 'Passiva no perfect.'], ['Can you fix it be?', 'Can it be fixed?', 'can + be + particípio.']],
      }),
      dialogo(8, 'A complaint / Uma reclamação', 'Ana liga para a loja e fala com Carlos.', [
        ['Ana', 'Hello, I\'m calling about an order. It hasn\'t been delivered yet.', 'Olá, estou ligando por causa de um pedido. Ainda não foi entregue.'], ['Carlos', 'I\'m sorry. When was it ordered?', 'Sinto muito. Quando foi feito o pedido?'], ['Ana', 'Ten days ago. And the last time I called, I was told it would be sent in two days.', 'Há dez dias. E da última vez que liguei me disseram que seria enviado em dois dias.'], ['Carlos', 'Let me check. Yes, I see. The wrong address was entered.', 'Vou verificar. Sim, estou vendo. O endereço errado foi digitado.'], ['Ana', 'Can it be fixed today? I\'d like to have it delivered tomorrow.', 'Dá para corrigir hoje? Gostaria que fosse entregue amanhã.'], ['Carlos', 'Yes, it will be sent today, and you will receive a refund for the shipping.', 'Sim, será enviado hoje e a senhora receberá reembolso do frete.'],
      ]),
      producao(5, 'Escreva uma reclamação de 6 frases usando a passiva e «I\'d like to have it…».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 44', [
      revisao(5, 'Reclame de um serviço em voz alta com educação e peça uma solução.'),
      exercicios(20, [
        ouvir('The package has been delivered', ['The package has been delivered', 'The package has delivered', 'The package was delivering'], 'The package has been delivered', 'Ouça «has been delivered».'), ouvir('I had my hair cut', ['I had my hair cut', 'I cut my hair', 'I have cut my hair'], 'I had my hair cut', 'Ouça «had… cut».'), ditado('This can be done online', 'Escreva: this can be done online.'), ditado('Has the email been sent', 'Escreva: has the email been sent.'),
        mc('Qual frase significa que OUTRA pessoa cortou o cabelo?', ['I had my hair cut.', 'I cut my hair.', 'I have cut my hair.'], 'I had my hair cut.', 'have + objeto + particípio.'), mc('Qual frase está correta?', ['The report must be submitted by Friday.', 'The report must submit by Friday.', 'The report must be submit by Friday.'], 'The report must be submitted by Friday.', 'must be + particípio.'), mc('Qual é a pergunta correta?', ['Has the package been delivered?', 'Has been the package delivered?', 'Did the package been delivered?'], 'Has the package been delivered?', 'Has + sujeito + been + particípio.'), mc('Qual frase está correta?', ['I have my car repaired every year.', 'I have my car repair every year.', 'I have repaired my car by mechanic every year.'], 'I have my car repaired every year.', 'have + objeto + particípio.'),
        lacuna('The package has ___ delivered.', ['been', 'be', 'being'], 'been', 'has been.'), lacuna('This can ___ fixed. (ser)', ['be', 'been', 'being'], 'be', 'can be.'), lacuna('I had my phone ___ . (consertado)', ['repaired', 'repair', 'repairing'], 'repaired', 'Particípio.'), lacuna('Where do you ___ your hair cut?', ['have', 'make', 'do'], 'have', 'have + objeto + particípio.'),
        ordem('Ordene: «The report must be submitted by Friday.»', ['The', 'report', 'must', 'be', 'submitted', 'by', 'Friday'], 'The report must be submitted by Friday.', 'must be + particípio.'), ordem('Ordene: «I\'m going to have the kitchen painted.»', ['I\'m', 'going', 'to', 'have', 'the', 'kitchen', 'painted'], 'I\'m going to have the kitchen painted.', 'have + objeto + particípio.'),
        livre('Escreva 4 frases: uma com modal na passiva, uma com present perfect passivo, uma com «have something done» e uma reclamação.', 'The report must be submitted. The package has been delivered. I had my hair cut. My order hasn\'t been delivered yet.'),
      ]),
      producao(5, 'Fale 1 minuto sobre os serviços que você contrata e os que faz sozinho.'),
    ]),
  ],
});
