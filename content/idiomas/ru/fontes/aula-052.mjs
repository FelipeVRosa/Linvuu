import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'ru', numero: 52, titulo: 'Verbos de levar e trazer, e sentidos figurados', nivel: 'b1',
  objetivo: 'Usar нести / носить, везти / возить e вести / водить, os prefixos принести, отвезти, привести etc., e os sentidos figurados de идти, везти, водить e носить.',
  nota: 'Você leva, traz e conduz, e entende os sentidos figurados. Próxima aula: o pronome relativo «который».',
  sessoes: [
    sessao('S1', 'Нести, везти, вести', [
      revisao(5, 'Escreva 5 frases com alertas e proibições no imperativo, usando o aspecto certo.'),
      palavras(8, [['нести / носить', 'nistí / nasít', 'carregar (a pé); usar (roupa)', 'to carry; to wear'], ['везти / возить', 'vistí / vazít', 'transportar (veículo)', 'to transport'], ['вести / водить', 'vistí / vadít', 'conduzir, guiar', 'to lead'], ['сумка', 'súmka', 'bolsa', 'bag'], ['очки', 'ochkí', 'óculos', 'glasses'], ['пробка', 'própka', 'engarrafamento', 'traffic jam'], ['машина', 'mashína', 'carro', 'car'], ['документы', 'dakuménty', 'documentos', 'documents']]),
      gramatica(12, 'Os três pares de levar e conduzir', 'PASSO 1: além de «идти / ходить» e «ехать / ездить», há três pares de verbos de movimento COM OBJETO: «нести / носить» (levar nas mãos, carregar), «везти / возить» (transportar de veículo) e «вести / водить» (conduzir, guiar uma pessoa). PASSO 2: o primeiro de cada par (нести, везти, вести) é DETERMINADO: uma só direção, agora. O segundo (носить, возить, водить) é INDETERMINADO: ida e volta, hábito, várias direções. PASSO 3: «Я НЕСУ сумку» (levo a bolsa agora) × «Я часто НОШУ сумку» (costumo carregar). PASSO 4: «носить» também é USAR roupa: «Она носит очки, платье». PASSO 5: «водить машину» = dirigir; «вести ребёнка в школу» = levar a criança à escola (agora); «водить ребёнка в школу» = levar todos os dias. PASSO 6: conjugação: «несу, несёшь, несёт, несём, несёте, несут; нёс, несла»; «везу, везёшь… ; вёз, везла»; «веду, ведёшь… ; вёл, вела»; «ношу, носишь…», «вожу, возишь…», «вожу, водишь…».', {
        tag: 'Verbos',
        comparacao: 'o português usa «levar» e «trazer» para tudo. O russo escolhe o verbo conforme o MEIO (mãos, veículo, guiar uma pessoa) e conforme seja uma viagem única ou habitual.',
        tabela: [
          { determinado: 'нести: несу, несёшь, несёт', indeterminado: 'носить: ношу, носишь, носит', sentido: 'levar nas mãos / usar roupa' }, { determinado: 'везти: везу, везёшь, везёт', indeterminado: 'возить: вожу, возишь, возит', sentido: 'transportar de veículo' }, { determinado: 'вести: веду, ведёшь, ведёт', indeterminado: 'водить: вожу, водишь, водит', sentido: 'conduzir, guiar' },
        ],
        erros: [['Я иду сумку.', 'Я несу сумку.', 'Com objeto carregado nas mãos: «нести».'], ['Я часто несу очки.', 'Я часто ношу очки.', 'Hábito: indeterminado «носить».'], ['Я езжу машину.', 'Я вожу машину.', 'Dirigir um carro: «водить машину».']],
      }),
      producao(5, 'Diga: «Я несу сумку. Я часто ношу очки. Автобус везёт студентов. Я веду ребёнка в школу. Я вожу машину.»'),
    ]),
    sessao('S2', 'Trazer e levar com prefixo', [
      revisao(5, 'Escreva o presente de «нести», «везти» e «вести» (я, ты, они).'),
      palavras(8, [['принести / приносить', 'prinistí / prinasít', 'trazer (nas mãos)', 'to bring'], ['отнести / относить', 'atnistí / atnasít', 'levar até (nas mãos)', 'to take to'], ['привезти / привозить', 'privistí / privazít', 'trazer (de veículo)', 'to bring (by vehicle)'], ['отвезти / отвозить', 'atvistí / atvazít', 'levar até (de veículo)', 'to take (by vehicle)'], ['привести / приводить', 'privistí / privadít', 'trazer (uma pessoa)', 'to bring (a person)'], ['отвести / отводить', 'atvistí / atvadít', 'levar até (uma pessoa)', 'to take (a person)'], ['унести / увезти', 'unistí / uvistí', 'levar embora', 'to take away'], ['зал', 'zal', 'sala, salão', 'hall']]),
      gramatica(12, 'Принести ou отнести? Привезти ou отвезти?', 'PASSO 1: os prefixos dos aulas 45 e 46 valem aqui: «при-» = trazer (até quem fala), «от-» = levar até outro lugar, «у-» = levar embora. PASSO 2: três pares: «принести / отнести» (nas mãos), «привезти / отвезти» (de veículo), «привести / отвести» (pessoa). PASSO 3: o objeto vai ao acusativo: «Принеси документы». PASSO 4: o destino usa «в» ou «на» + acusativo, ou «к» + dativo (pessoa): «Отнеси письмо на почту», «Отвези меня к врачу». PASSO 5: a origem usa «из» ou «с» + genitivo, ou «от» + genitivo (pessoa): «Принеси книгу из офиса». PASSO 6: passado: «принёс, принесла», «отвёз, отвезла», «привёл, привела». PASSO 7: futuro: «принесу, отвезу, приведу, отнесу, привезу». PASSO 8: imperativos: «принеси(те), отнеси(те), привези(те), отвези(те), приведи(те)».', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Принеси, пожалуйста, документы.', traducao: 'Traga os documentos, por favor.' }, { frase: 'Я отнесу письмо на почту.', traducao: 'Vou levar a carta ao correio.' }, { frase: 'Он привёз клиента в офис.', traducao: 'Ele trouxe o cliente ao escritório (de veículo).' }, { frase: 'Отвези меня к врачу.', traducao: 'Leve-me ao médico (de veículo).' }, { frase: 'Я приведу друга на вечеринку.', traducao: 'Vou trazer um amigo à festa.' },
        ],
        erros: [['Принеси к врачу документы.', 'Отнеси документы к врачу.', 'Levar até outro lugar: «от-».'], ['Привези меня домой. (a pé)', 'Приведи меня домой.', 'Pessoa que vai a pé: «привести».']],
      }),
      producao(5, 'Dê instruções: «Принеси документы. Отнеси письмо на почту. Отвези меня к врачу. Приведи друга.»'),
    ]),
    sessao('S3', 'Sentidos figurados', [
      revisao(5, 'Escreva 5 frases com princípios dos prefixos: принести, отнести, привезти, отвезти e привести.'),
      gramatica(10, 'Идти, везти, водить e носить em sentido figurado', 'PASSO 1: «ИДТИ» também é «passar, transcorrer»: «Идёт дождь», «Идёт фильм» (está passando um filme), «Время идёт», «Часы идут». PASSO 2: «Как идут дела?» = como vão os negócios? «Дела идут хорошо». PASSO 3: «ИДТИ» + dativo = «cair bem»: «Этот цвет вам идёт» (esta cor lhe cai bem). PASSO 4: «ВЕЗТИ» + dativo = «ter sorte»: «Мне везёт» (tenho sorte), «Ему не везёт», e o perfectivo «Мне повезло» (tive sorte). PASSO 5: «ВЕСТИ» = «conduzir, levar a»: «Эта дорога ведёт в город», «вести машину», «вести себя» (comportar-se). PASSO 6: «НОСИТЬ» = «usar»: «носить очки, платье, имя».', {
        tag: 'Frase',
        tabela: [
          { frase: 'Идёт дождь. Идёт фильм.', traducao: 'Está chovendo. Está passando um filme.' }, { frase: 'Дела идут хорошо.', traducao: 'Os negócios vão bem.' }, { frase: 'Этот цвет вам идёт.', traducao: 'Esta cor lhe cai bem.' }, { frase: 'Мне везёт. Мне повезло.', traducao: 'Tenho sorte. Tive sorte.' }, { frase: 'Дорога ведёт в город.', traducao: 'A estrada leva à cidade.' }, { frase: 'Она носит очки.', traducao: 'Ela usa óculos.' },
        ],
      }),
      dialogo(8, 'Поручение / Uma tarefa', 'Anna pede ajuda a Boris no trabalho.', [
        ['Анна', 'Борис, принеси, пожалуйста, документы из офиса.', 'Boris, traga, por favor, os documentos do escritório.'], ['Борис', 'Хорошо. А потом я отвезу их клиенту.', 'Está bem. E depois eu os levo ao cliente.'], ['Анна', 'Ты едешь на машине? Ты ведь водишь машину.', 'Você vai de carro? Você dirige, não é?'],
        ['Борис', 'Да, вожу уже десять лет, но сегодня не везёт: на дороге пробка.', 'Sim, dirijo há dez anos, mas hoje não tenho sorte: há engarrafamento.'], ['Анна', 'Тогда возьми такси.', 'Então pegue um táxi.'], ['Борис', 'Так и сделаю. Я привезу клиента в офис к трём часам.', 'Farei isso. Trarei o cliente ao escritório às três horas.'],
        ['Анна', 'Отлично! Я пока отнесу чай в зал.', 'Ótimo! Enquanto isso, levo o chá à sala.'], ['Борис', 'Договорились. По дороге я позвоню тебе.', 'Combinado. No caminho ligo para você.'],
      ]),
      producao(7, 'Faça em voz alta um pedido de trabalho: o que trazer, o que levar, de que meio e o que está acontecendo no caminho.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno diálogo de 6 falas com pedidos de trazer e levar.'),
      exercicios(20, [
        lacuna('Я ___ сумку. (levo agora)', ['несу', 'ношу', 'иду'], 'несу', 'Determinado: «нести».'), lacuna('Она часто ___ очки. (usa)', ['носит', 'несёт', 'ведёт'], 'носит', '«носить» = usar, hábito.'), lacuna('Автобус ___ студентов. (leva agora)', ['везёт', 'возит', 'ведёт'], 'везёт', 'Veículo, agora: «везти».'),
        lacuna('Я ___ ребёнка в школу. (levo agora, a pé)', ['веду', 'вожу', 'несу'], 'веду', 'Guiar uma pessoa: «вести».'), lacuna('___, пожалуйста, документы. (traga)', ['Принеси', 'Отнеси', 'Унеси'], 'Принеси', '«при-» = trazer.'), lacuna('Я ___ письмо на почту. (vou levar)', ['отнесу', 'принесу', 'унесу'], 'отнесу', '«от-» = levar até outro lugar.'),
        mc('«Идёт фильм» significa:', ['está passando um filme', 'o filme anda', 'o filme sai'], 'está passando um filme', 'Sentido figurado de «идти».'), mc('«Мне повезло» significa:', ['tive sorte', 'estou doente', 'estou cansado'], 'tive sorte', 'везти + dativo = ter sorte.'), mc('«Этот цвет вам идёт» significa:', ['esta cor lhe cai bem', 'esta cor vai embora', 'esta cor passa'], 'esta cor lhe cai bem', '«идти» + dativo.'),
        ordem('Ordene: «Принеси, пожалуйста, документы.»', ['Принеси', 'пожалуйста', 'документы'], 'Принеси, пожалуйста, документы.', 'Imperativo perfectivo.'), ouvir('Я вожу машину уже десять лет', ['Я вожу машину уже десять лет', 'Я еду на машине', 'Я несу машину'], 'Я вожу машину уже десять лет', '«водить машину» = dirigir.'), ditado('Дела идут хорошо', 'Sentido figurado de «идти».'),
        livre('Escreva 5 frases: levar nas mãos, transportar de veículo, guiar uma pessoa, um prefixo (принести/отнести) e um sentido figurado.', 'Я несу сумку. Автобус везёт студентов. Я веду ребёнка в школу. Принеси документы. Дела идут хорошо.'),
      ]),
      producao(5, 'Grave-se pedindo a um colega que traga e leve coisas.'),
    ]),
  ],
});
