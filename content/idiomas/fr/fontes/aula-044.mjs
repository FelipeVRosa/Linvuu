import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 44, titulo: 'Condicional passado: arrependimentos e hipóteses', nivel: 'b1',
  objetivo: 'Formar o conditionnel passé e usar «si» + plus-que-parfait para falar do que poderia ter sido, expressar arrependimento e fazer reprovações educadas.',
  nota: 'Você imagina o passado que não aconteceu. Próxima aula: o subjuntivo.',
  sessoes: [
    sessao('S1', 'Formar o condicional passado', [
      revisao(5, 'Una frases em voz alta com «ce qui», «ce que» e «ce dont».'),
      palavras(8, [
        ['j\'aurais voulu', 'jôré vulü', 'eu teria querido', ''], ['j\'aurais pu', 'jôré pü', 'eu poderia ter', ''], ['j\'aurais dû', 'jôré dü', 'eu deveria ter', ''], ['je serais allé', 'jö sörê alê', 'eu teria ido', ''], ['il aurait fallu', 'il orê falü', 'teria sido preciso', ''], ['regretter', 'regretê', 'lamentar', ''], ['dommage', 'domaj', 'pena', ''], ['si seulement', 'si sölmã', 'se ao menos', ''],
      ]),
      gramatica(12, 'J\'aurais dû, il aurait pu', 'PASSO 1: o conditionnel passé forma-se com o CONDICIONAL de «avoir» ou «être» + particípio passado: «j\'aurais mangé», «tu serais parti», «nous aurions fini». PASSO 2: o auxiliar segue a mesma regra do passé composé: «aller, venir, arriver, partir, rester, naître, mourir» e pronominais usam «être». PASSO 3: o particípio concorda como no passé composé: «Elle serait venue.» «Ils seraient partis.» PASSO 4: usos: arrependimento («J\'aurais dû étudier.»), reprovação («Tu aurais pu m\'appeler.»), desejo não realizado («J\'aurais voulu voyager.»), informação não confirmada («Il y aurait eu un accident.»). PASSO 5: «j\'aurais dû» + infinitivo = eu deveria ter; «j\'aurais pu» = eu poderia ter; «j\'aurais voulu» = eu gostaria de ter. PASSO 6: pergunta educada sobre o passado: «Auriez-vous pu m\'aider ?» PASSO 7: «si seulement» + plus-que-parfait expressa um lamento: «Si seulement j\'avais su !» PASSO 8: negação: «Je n\'aurais pas dû.» «Il n\'aurait pas pu venir.»', {
        tag: 'Condicional',
        comparacao: 'em português dizemos «eu deveria ter estudado» e «eu poderia ter ido». O francês usa o mesmo mecanismo: «j\'aurais dû étudier», «j\'aurais pu aller». O verbo seguinte fica no infinitivo, sem preposição.',
        tabela: [
          { pessoa: 'je', avoir: 'j\'aurais mangé', etre: 'je serais parti(e)' }, { pessoa: 'tu', avoir: 'tu aurais mangé', etre: 'tu serais parti(e)' }, { pessoa: 'il / elle', avoir: 'il aurait mangé', etre: 'il serait parti / elle serait partie' }, { pessoa: 'nous', avoir: 'nous aurions mangé', etre: 'nous serions partis' }, { pessoa: 'vous', avoir: 'vous auriez mangé', etre: 'vous seriez parti(s)' }, { pessoa: 'ils / elles', avoir: 'ils auraient mangé', etre: 'ils seraient partis / elles seraient parties' },
        ],
        erros: [['J\'aurais dû de étudier.', 'J\'aurais dû étudier.', 'Sem preposição.'], ['Je serais mangé.', 'J\'aurais mangé.', '«Manger» usa «avoir».'], ['Elle serait venu.', 'Elle serait venue.', 'Concordância.'], ['J\'avais dû étudier.', 'J\'aurais dû étudier.', 'Reprovação: condicional passado.']],
      }),
      producao(5, 'Diga em voz alta cinco arrependimentos: «J\'aurais dû… J\'aurais pu… J\'aurais voulu…»'),
    ]),
    sessao('S2', 'Si + plus-que-parfait', [
      revisao(4, 'Conjugue em voz alta «aller, faire, dire, pouvoir» no condicional passado com «je».'),
      palavras(6, [
        ['si j\'avais su', 'si javé sü', 'se eu soubesse', ''], ['si j\'avais étudié', 'si javé etüdié', 'se eu tivesse estudado', ''], ['j\'aurais réussi', 'jôré reüssi', 'eu teria conseguido', ''], ['ça aurait pu', 'sa orê pü', 'poderia ter', ''], ['heureusement que', 'örözmã kö', 'ainda bem que', ''], ['malheureusement', 'malörözmã', 'infelizmente', ''],
      ]),
      gramatica(12, 'Si j\'avais su, je serais venu', 'PASSO 1: a hipótese do passado que não aconteceu: «si» + plus-que-parfait, resultado no condicional passado. PASSO 2: «Si j\'avais étudié, j\'aurais réussi.» (Se eu tivesse estudado, teria passado.) PASSO 3: «Si tu m\'avais appelé, je serais venu.» PASSO 4: a ordem pode inverter: «J\'aurais réussi si j\'avais étudié.» PASSO 5: NUNCA use o condicional depois de «si»: «Si j\'aurais su» é erro frequente. PASSO 6: as três hipóteses juntas: presente («Si tu viens, nous irons.»), improvável («Si tu venais, nous irions.»), passada («Si tu étais venu, nous serions allés.»). PASSO 7: misturas: «Si j\'avais étudié (passado), je serais médecin (hoje).» PASSO 8: expressões de lamento: «Dommage !» «Quel dommage que…» «Malheureusement…»', {
        tag: 'Condicional',
        comparacao: 'em português: «se eu tivesse estudado, teria passado». O francês é igual: «si j\'avais étudié, j\'aurais réussi». O erro típico é copiar o condicional depois de «si»: «si j\'aurais étudié» é incorreto em francês, como em português.',
        tabela: [
          { tipo: 'provável', estrutura: 'si + presente, futuro', exemplo: 'Si tu viens, nous irons.' }, { tipo: 'improvável', estrutura: 'si + imparfait, condicional', exemplo: 'Si tu venais, nous irions.' }, { tipo: 'passada', estrutura: 'si + plus-que-parfait, condicional passado', exemplo: 'Si tu étais venu, nous serions allés.' }, { tipo: 'mista', estrutura: 'si + plus-que-parfait, condicional', exemplo: 'Si j\'avais étudié, je serais médecin.' },
        ],
        erros: [['Si j\'aurais su, je serais venu.', 'Si j\'avais su, je serais venu.', 'Depois de «si», plus-que-parfait.'], ['Si j\'avais étudié, j\'ai réussi.', 'Si j\'avais étudié, j\'aurais réussi.', 'Resultado: condicional passado.'], ['Si tu venais, nous serions allés.', 'Si tu étais venu, nous serions allés.', 'Passado: plus-que-parfait.'], ['Si j\'étais su, je viendrais.', 'Si j\'avais su, je serais venu.', '«Savoir» usa «avoir».']],
      }),
      producao(8, 'Diga em voz alta oito hipóteses do passado: «Si j\'avais… , j\'aurais… »'),
    ]),
    sessao('S3', 'Reprovar com educação, lamentar e agradecer', [
      revisao(4, 'Complete: «Si j\'___ (avoir) su, je ___ (venir).»'),
      palavras(5, [
        ['reprocher', 'reproxé', 'repreender', ''], ['excuser', 'ekskuzê', 'desculpar', ''], ['pardonner', 'pardoné', 'perdoar', ''], ['remercier', 'remersié', 'agradecer', ''], ['content', 'kõtã', 'contente', ''],
      ]),
      gramatica(8, 'Falar do que poderia ter sido', 'PASSO 1: reprovar sem agredir: «Tu aurais pu me prévenir.» «Vous auriez dû m\'appeler.» PASSO 2: lamentar: «Si seulement j\'avais su !» «Quel dommage !» PASSO 3: agradecer o que foi feito: «Je vous remercie d\'être venu.» «Merci d\'avoir pensé à moi.» PASSO 4: «merci de» + infinitivo (presente) ou «merci d\'avoir» + particípio. PASSO 5: pedir desculpas: «Excusez-moi d\'être en retard.» «Je suis désolé d\'avoir oublié.»', {
        tag: 'Condicional',
        comparacao: 'em português dizemos «obrigado por ter vindo». O francês usa «merci d\'être venu», com «être» no infinitivo passado, porque «venir» usa «être». O infinitivo passado é natural depois de «merci de», «désolé de» e «content de».',
        tabela: [
          { funcao: 'reprovar', frase: 'Tu aurais pu me prévenir.' }, { funcao: 'lamentar', frase: 'Si seulement j\'avais su !' }, { funcao: 'agradecer', frase: 'Merci d\'être venu.' }, { funcao: 'desculpar-se', frase: 'Je suis désolé d\'avoir oublié.' }, { funcao: 'cumprimentar', frase: 'Félicitations d\'avoir réussi !' },
        ],
        erros: [['Merci pour venir.', 'Merci d\'être venu.', 'Infinitivo passado.'], ['Je suis désolé de avoir oublié.', 'Je suis désolé d\'avoir oublié.', 'Elisão.'], ['Tu pourrais me prévenir. (reprovação do passado)', 'Tu aurais pu me prévenir.', 'Passado: condicional passado.'], ['Merci d\'avoir venu.', 'Merci d\'être venu.', '«Venir» usa «être».']],
      }),
      dialogo(8, 'Un regret / Um arrependimento', 'Julien e Marie falam de um erro do passado.', [
        ['Julien', 'Si seulement j\'avais écouté ton conseil !', 'Se ao menos eu tivesse ouvido o seu conselho!'], ['Marie', 'Je t\'avais dit de ne pas vendre ta voiture.', 'Eu tinha dito para você não vender o seu carro.'], ['Julien', 'Tu avais raison. J\'aurais dû attendre un peu.', 'Você tinha razão. Eu deveria ter esperado um pouco.'], ['Marie', 'Tu aurais pu en parler avec ta famille avant.', 'Você poderia ter conversado com a sua família antes.'], ['Julien', 'Oui, j\'aurais dû. Si j\'avais attendu, j\'aurais eu un meilleur prix.', 'Sim, eu deveria. Se eu tivesse esperado, teria tido um preço melhor.'], ['Marie', 'Ne t\'en fais pas, ça arrive. Merci d\'avoir été honnête avec moi.', 'Não se preocupe, acontece. Obrigada por ter sido honesto comigo.'],
      ]),
      producao(5, 'Conte em voz alta um arrependimento seu e o que você teria feito diferente.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 44', [
      revisao(5, 'Conte em voz alta um arrependimento e uma coisa que poderia ter sido diferente.'),
      exercicios(20, [
        ouvir('J\'aurais dû étudier', ['J\'aurais dû étudier', 'J\'avais dû étudier', 'Je devrais étudier'], 'J\'aurais dû étudier', 'Ouça «aurais dû».'), ouvir('Si j\'avais su, je serais venu', ['Si j\'avais su, je serais venu', 'Si j\'aurais su, je serais venu', 'Si je savais, je viendrais'], 'Si j\'avais su, je serais venu', 'Ouça «avais su».'), ouvir('Merci d\'être venu', ['Merci d\'être venu', 'Merci de venir', 'Merci d\'avoir venu'], 'Merci d\'être venu', 'Ouça «d\'être venu».'),
        ditado('Tu aurais pu me prévenir', 'Escreva: Tu aurais pu me prévenir.'), ditado('Si seulement j\'avais su', 'Escreva: Si seulement j\'avais su.'), ditado('Nous serions partis plus tôt', 'Escreva: Nous serions partis plus tôt.'),
        mc('Qual frase está correta?', ['Si j\'avais su, je serais venu.', 'Si j\'aurais su, je serais venu.', 'Si j\'avais su, je viendrais venu.'], 'Si j\'avais su, je serais venu.', 'si + plus-que-parfait.'), mc('«Eu deveria ter estudado»:', ['J\'aurais dû étudier.', 'J\'avais dû étudier.', 'Je devais étudier.'], 'J\'aurais dû étudier.', 'Condicional passado.'), mc('Qual frase está correta?', ['Elle serait venue.', 'Elle serait venu.', 'Elle aurait venue.'], 'Elle serait venue.', 'Concordância e auxiliar.'), mc('Qual frase está correta?', ['Merci d\'avoir pensé à moi.', 'Merci pour penser à moi.', 'Merci d\'avoir pensé de moi.'], 'Merci d\'avoir pensé à moi.', 'Infinitivo passado.'),
        lacuna('Si j\'___ su, je serais venu.', ['avais', 'aurais', 'étais'], 'avais', 'Plus-que-parfait.'), lacuna('J\'___ réussi si j\'avais étudié.', ['aurais', 'avais', 'ai'], 'aurais', 'Condicional passado.'), lacuna('Nous ___ allés au cinéma. (teríamos)', ['serions', 'aurions', 'sommes'], 'serions', '«Aller» usa «être».'), lacuna('Tu ___ pu m\'appeler. (poderia ter)', ['aurais', 'avais', 'serais'], 'aurais', 'Condicional passado.'),
        ordem('Ordene: «Si j\'avais étudié, j\'aurais réussi.»', ['Si', 'j\'avais', 'étudié,', 'j\'aurais', 'réussi'], 'Si j\'avais étudié, j\'aurais réussi.', 'Hipótese passada.'), ordem('Ordene: «Tu aurais pu me prévenir.»', ['Tu', 'aurais', 'pu', 'me', 'prévenir'], 'Tu aurais pu me prévenir.', 'Condicional passado.'),
        livre('Escreva em francês: Se eu tivesse estudado, teria passado. Você poderia ter me avisado. Obrigado por ter vindo.', 'Si j\'avais étudié, j\'aurais réussi. Tu aurais pu me prévenir. Merci d\'être venu.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma decisão do passado e como a sua vida seria diferente se você tivesse escolhido outro caminho.'),
    ]),
  ],
});
