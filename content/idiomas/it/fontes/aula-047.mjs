import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 47, titulo: 'Periodo ipotetico', nivel: 'b1',
  objetivo: 'Construir os três tipos de periodo ipotetico (real, possível e impossível), combinar tempos nas hipóteses mistas e usar «se fossi in te», «purché», «a meno che non» para dar conselhos e fixar condições.',
  nota: 'O periodo ipotetico junta o que você já aprendeu: indicativo, condizionale e congiuntivo. Regra de ouro: na condição introduzida por «se» nunca vem o condizionale. Próxima aula: discurso indireto.',
  sessoes: [
    sessao('S1', 'Se piove / se avessi tempo', [
      revisao(5, 'Diga em voz alta o condizionale presente de «andare, fare, essere, avere» com «io» e o congiuntivo imperfetto das mesmas formas.'),
      palavras(8, [
        ['se', 'se', 'se', ''], ['altrimenti', 'altrimênti', 'senão, caso contrário', ''], ['se fossi in te', 'se fóssi in te', 'se eu fosse você', ''], ['se potessi', 'se potêssi', 'se eu pudesse', ''], ['se avessi saputo', 'se avêssi sapúto', 'se eu soubesse', ''], ['l\'ipotesi', 'lipótezi', 'a hipótese', ''], ['la possibilità', 'la possibilitá', 'a possibilidade', ''], ['nel caso che', 'nel káso ke', 'caso, na hipótese de', ''],
      ]),
      gramatica(12, 'Realtà e possibilità', 'PASSO 1: o periodo ipotetico tem duas partes: a condição (introduzida por «se») e a consequência. PASSO 2: tipo 1, realidade: «se» + presente do indicativo, e a consequência no presente, no futuro ou no imperativo: «Se piove, resto a casa.» «Se hai tempo, chiamami.» «Se avrò tempo, verrò.» PASSO 3: tipo 2, possibilidade ou hipótese improvável: «se» + congiuntivo imperfetto, e a consequência no condizionale presente: «Se avessi tempo, viaggerei di più.» «Se fossi in te, accetterei.» PASSO 4: a ordem das partes pode inverter-se sem mudar os tempos: «Viaggerei di più, se avessi tempo.» PASSO 5: na condição, nunca use o condizionale depois de «se»: «se avrei» e «se andrei» estão errados (em perguntas indiretas, como «Mi chiedo se sarebbe meglio…», o condizionale é possível). PASSO 6: «se fossi in te» (ou «al tuo posto») abre conselhos: «Se fossi in te, parlerei con lui». PASSO 7: o tipo 1 pode usar o futuro depois de «se» quando se fala de um plano distante: «Se un giorno avrò una casa grande, inviterò tutti.» PASSO 8: «altrimenti» introduz a consequência negativa: «Parti ora, altrimenti perdi il treno.»', {
        tag: 'Hipótese',
        comparacao: 'em português a hipótese possível usa o subjuntivo no futuro: «se eu tiver tempo, vou». O italiano usa o indicativo: «se ho tempo, vengo» ou «se avrò tempo, verrò». Para o irreal português e italiano coincidem: «se eu tivesse tempo, viajaria» = «se avessi tempo, viaggerei». Cuidado: não use o congiuntivo presente depois de «se» no tipo 1: «se abbia tempo» está errado.',
        tabela: [
          { tipo: 'realidade', se_clausola: 'presente (ou futuro)', consequencia: 'presente / futuro / imperativo', exemplo: 'Se hai tempo, vieni.' }, { tipo: 'possibilidade', se_clausola: 'congiuntivo imperfetto', consequencia: 'condizionale presente', exemplo: 'Se avessi tempo, verrei.' }, { tipo: 'impossibilidade', se_clausola: 'congiuntivo trapassato', consequencia: 'condizionale passato', exemplo: 'Se avessi avuto tempo, sarei venuto.' },
        ],
        erros: [['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', 'Depois de «se», congiuntivo imperfetto, não condizionale.'], ['Se abbia tempo, vengo.', 'Se ho tempo, vengo.', 'Realidade: indicativo.'], ['Se io sarei ricco, comprerei una casa.', 'Se fossi ricco, comprerei una casa.', '«Se» + imperfetto.'], ['Se fossi in te, andavo.', 'Se fossi in te, andrei.', 'Consequência no condizionale.']],
      }),
      producao(5, 'Diga em voz alta seis hipóteses: três reais («Se piove…») e três irreais («Se avessi più soldi…»).'),
    ]),
    sessao('S2', 'Se avessi studiato…', [
      revisao(4, 'Complete em voz alta: «Se fossi in te…», «Se avessi tempo…», «Se potessi viaggiare…».'),
      palavras(6, [
        ['l\'esame', 'lezáme', 'o exame', ''], ['bocciare', 'botcháre', 'reprovar', ''], ['superare', 'superáre', 'passar (um exame)', ''], ['guadagnare', 'guadanháre', 'ganhar', ''], ['il viaggio', 'il viáddjo', 'a viagem', ''], ['rimanere', 'rimanére', 'ficar', ''],
      ]),
      gramatica(12, 'Se avessi saputo, sarei venuto', 'PASSO 1: tipo 3, hipótese impossível (o passado não muda): «se» + congiuntivo trapassato, e a consequência no condizionale passato. PASSO 2: «Se avessi studiato, avrei superato l\'esame.» «Se fossi partito prima, non avrei perso il treno.» PASSO 3: concordância: «Se Maria fosse partita prima…» PASSO 4: tipo misto: causa no passado, efeito no presente: «Se avessi studiato di più, adesso avrei un lavoro migliore.» «Se non fossi stato malato, ora sarei in vacanza.» PASSO 5: ordem inversa: «Sarei venuto, se avessi saputo.» PASSO 6: na fala informal ouve-se «Se lo sapevo, non venivo» (imperfetto nas duas partes); você deve reconhecê-lo, mas na escrita e nos textos formais use as formas completas. PASSO 7: negação: «Se non avessi perso le chiavi, saremmo arrivati in tempo.» PASSO 8: a oração principal pode ser introduzida por «allora» sem mudar o tempo.', {
        tag: 'Hipótese',
        comparacao: 'o português diz «se eu tivesse estudado, teria passado», e o italiano segue a mesma lógica: «se avessi studiato, avrei superato». Aqui os dois idiomas são muito próximos. O maior perigo é o falso «se avrei studiato» (como se faz às vezes em português errado: «se eu teria estudado»).',
        tabela: [
          { tipo: 'passado impossível', se_clausola: 'se avessi studiato', consequencia: 'avrei superato l\'esame' }, { tipo: 'passado impossível', se_clausola: 'se fossi partito prima', consequencia: 'non avrei perso il treno' }, { tipo: 'misto (efeito agora)', se_clausola: 'se avessi studiato di più', consequencia: 'adesso avrei un lavoro migliore' }, { tipo: 'misto (efeito agora)', se_clausola: 'se non fossi stato malato', consequencia: 'ora sarei in vacanza' },
        ],
        erros: [['Se fossi partito prima, non perdo il treno.', 'Se fossi partito prima, non avrei perso il treno.', 'Passado impossível: condizionale passato.'], ['Se sarei stato lì, ti avrei aiutato.', 'Se fossi stato lì, ti avrei aiutato.', 'Depois de «se»: congiuntivo trapassato.'], ['Se Maria fosse partito prima, non avrebbe perso il treno.', 'Se Maria fosse partita prima, non avrebbe perso il treno.', 'Concordância do particípio.'], ['Se avessi saputo, venivo.', 'Se avessi saputo, sarei venuto.', 'Forma completa na escrita.']],
      }),
      producao(8, 'Conte em voz alta oito arrependimentos ou «e se» do passado: «Se avessi studiato di più…».'),
    ]),
    sessao('S3', 'Condições e conselhos', [
      revisao(4, 'Diga em voz alta três frases do tipo 3 sobre algo que poderia ter sido diferente na sua vida.'),
      palavras(5, [
        ['a patto che', 'a pátto ke', 'sob a condição de que', ''], ['a condizione che', 'a kondiziône ke', 'com a condição de que', ''], ['il consiglio', 'il konsílio', 'o conselho', ''], ['accettare', 'attchettáre', 'aceitar', ''], ['trasferirsi', 'trasferírsi', 'mudar-se', ''],
      ]),
      gramatica(8, 'Purché, a meno che non, nel caso che', 'PASSO 1: algumas conjunções fixam uma condição e pedem o congiuntivo presente: «purché, a patto che, a condizione che, a meno che non, nel caso che». PASSO 2: «Vengo, purché sia gratis.» «Ti aiuto a patto che tu mi spieghi tutto.» PASSO 3: «a meno che non» + congiuntivo presente exclui uma condição: «Esco, a meno che non piova.» PASSO 4: «nel caso che» + congiuntivo: «Nel caso che piova, restiamo a casa.» PASSO 5: para conselhos use o tipo 2 («Se fossi in te…») ou o condizionale simples («Dovresti…»).', {
        tag: 'Hipótese',
        comparacao: 'o português usa «contanto que, a menos que, caso» + subjuntivo (e o italiano também). A diferença: «a meno che non» tem o «non» expletivo, que não nega o sentido: «a menos que chova» = «a meno che non piova».',
        tabela: [
          { conjuncao: 'purché', sentido: 'contanto que', exemplo: 'Vengo purché sia gratis.' }, { conjuncao: 'a patto che', sentido: 'sob a condição de que', exemplo: 'Ti aiuto a patto che tu spieghi.' }, { conjuncao: 'a meno che non', sentido: 'a menos que', exemplo: 'Esco a meno che non piova.' }, { conjuncao: 'nel caso che', sentido: 'caso', exemplo: 'Nel caso che piova, restiamo.' },
        ],
        erros: [['Vengo purché è gratis.', 'Vengo purché sia gratis.', '«Purché» pede congiuntivo.'], ['Esco a meno che piove.', 'Esco a meno che non piova.', 'Faltou o «non» expletivo e o congiuntivo.'], ['Ti aiuto a patto che tu mi spiegherai tutto.', 'Ti aiuto a patto che tu mi spieghi tutto.', '«A patto che» pede congiuntivo presente.'], ['Nel caso che piove, restiamo.', 'Nel caso che piova, restiamo.', 'Congiuntivo presente.']],
      }),
      texto(8, 'Un consiglio a mio cugino', 'Quando mio cugino mi ha chiesto un consiglio sul lavoro, gli ho detto: «Se fossi in te, accetterei la proposta, purché lo stipendio sia chiaro fin dall\'inizio». Lui mi ha risposto che, se avesse accettato subito, avrebbe dovuto trasferirsi a Torino, e non era sicuro di volerlo. «A meno che non ci siano altre condizioni, resto dove sono», ha concluso. Io non ho insistito. Se avessi avuto la sua età, forse avrei fatto lo stesso. Se mi chiedesse ancora, gli direi di ascoltare se stesso: nel caso che cambi idea, ci sarà sempre un\'altra occasione.', 'Quando meu primo me pediu um conselho sobre trabalho, eu disse: «Se eu fosse você, aceitaria a proposta, contanto que o salário fosse claro desde o início». Ele me respondeu que, se tivesse aceitado de imediato, teria que se mudar para Turim, e não tinha certeza de querer isso. «A menos que haja outras condições, fico onde estou», concluiu. Não insisti. Se eu tivesse a idade dele, talvez teria feito o mesmo. Se ele me perguntasse de novo, eu lhe diria para ouvir a si mesmo: caso mude de ideia, sempre haverá outra oportunidade.', [['Che consiglio ha dato l\'autore a suo cugino?', 'Di accettare la proposta, purché lo stipendio sia chiaro.'], ['Perché il cugino esita?', 'Dovrebbe trasferirsi a Torino.'], ['Che cosa farebbe l\'autore alla sua età?', 'Forse lo stesso.'], ['Che consiglio darebbe se gli chiedessero ancora?', 'Di ascoltare se stesso.']]),
      producao(5, 'Dê em voz alta um conselho a um amigo que vai mudar de cidade, com «Se fossi in te…» e «purché».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 47', [
      revisao(5, 'Complete em voz alta três frases de cada tipo: «Se piove…», «Se avessi tempo…», «Se avessi saputo…».'),
      exercicios(20, [
        ouvir('Se avessi tempo, viaggerei di più', ['Se avessi tempo, viaggerei di più', 'Se avrei tempo, viaggerei di più', 'Se ho tempo, viaggerei di più'], 'Se avessi tempo, viaggerei di più', 'Ouça «avessi… viaggerei».'),
        ouvir('Se fossi partito prima, non avrei perso il treno', ['Se fossi partito prima, non avrei perso il treno', 'Se partivo prima, non perdevo il treno', 'Se sarei partito prima, non perdevo il treno'], 'Se fossi partito prima, non avrei perso il treno', 'Ouça «fossi partito… avrei perso».'),
        ouvir('Se piove, resto a casa', ['Se piove, resto a casa', 'Se piovesse, resto a casa', 'Se pioverebbe, resto a casa'], 'Se piove, resto a casa', 'Tipo 1.'),
        ditado('Se fossi in te, accetterei', 'Escreva: Se fossi in te, accetterei.'), ditado('Esco a meno che non piova', 'Escreva: Esco a meno che non piova.'), ditado('Se avessi studiato, avrei superato l\'esame', 'Escreva: Se avessi studiato, avrei superato l\'esame.'),
        mc('Qual frase está correta?', ['Se avessi tempo, verrei.', 'Se avrei tempo, verrei.', 'Se ho tempo, verrei.'], 'Se avessi tempo, verrei.', 'Tipo 2.'),
        mc('Qual frase está correta?', ['Se avessi studiato, avrei superato l\'esame.', 'Se ho studiato, avrei superato l\'esame.', 'Se avrei studiato, avessi superato l\'esame.'], 'Se avessi studiato, avrei superato l\'esame.', 'Tipo 3.'),
        mc('«Vou se tiver tempo» (real) em italiano:', ['Se ho tempo, vado.', 'Se abbia tempo, vado.', 'Se avrei tempo, vado.'], 'Se ho tempo, vado.', 'Realidade: indicativo.'),
        mc('«A menos que chova» em italiano:', ['a meno che non piova', 'a meno che piove', 'a meno che piovesse'], 'a meno che non piova', 'Congiuntivo + «non».'),
        lacuna('Se ___ ricco, comprerei una casa. (essere)', ['fossi', 'sarei', 'sono'], 'fossi', 'Congiuntivo imperfetto.'),
        lacuna('Se avessi saputo, ___ venuto. (eu)', ['sarei', 'avrei', 'ero'], 'sarei', 'Condizionale passato com «venire».'),
        lacuna('Vengo, ___ sia gratis.', ['purché', 'sebbene', 'affinché'], 'purché', 'Condição.'),
        lacuna('Se Maria ___ partita prima, non avrebbe perso il treno.', ['fosse', 'avesse', 'sia'], 'fosse', 'Congiuntivo trapassato com «essere».'),
        ordem('Ordene: «Se fossi in te, parlerei con lui.»', ['Se', 'fossi', 'in', 'te', 'parlerei', 'con', 'lui'], 'Se fossi in te, parlerei con lui.', 'Tipo 2.'),
        ordem('Ordene: «Se avessi studiato, avrei superato l\'esame.»', ['Se', 'avessi', 'studiato', 'avrei', 'superato', 'l\'esame'], 'Se avessi studiato, avrei superato l\'esame.', 'Tipo 3.'),
        livre('Escreva em italiano: Se eu tivesse mais tempo, viajaria mais. Se eu tivesse estudado, teria passado no exame.', 'Se avessi più tempo, viaggerei di più. Se avessi studiato, avrei superato l\'esame.'),
        lacuna('Se ___ tempo, ti chiamo. (eu tiver)', ['avessi', 'ho', 'avrei'], 'ho', 'Hipótese real: «se» + presente do indicativo.'),
        lacuna('Se avessi più soldi, ___ una casa. (compraria)', ['comprerò', 'comprerei', 'comprerebbe'], 'comprerei', 'Hipótese improvável: congiuntivo imperfetto + condizionale.'),
        lacuna('Se Anna ___ studiato, avrebbe superato l\'esame. (tivesse)', ['ha', 'avrebbe', 'avesse'], 'avesse', 'Hipótese impossível: «se» + congiuntivo trapassato.'),
        lacuna('Se noi ___ partiti prima, saremmo arrivati in tempo. (tivéssemos)', ['fossimo', 'siamo', 'saremmo'], 'fossimo', '«Partire» usa «essere»: congiuntivo trapassato «fossimo partiti».'),
        lacuna('Ti aiuto, a patto ___ tu mi spieghi tutto. (que)', ['di', 'che', 'se'], 'che', '«A patto che» pede congiuntivo.'),
        mc('Qual frase expressa uma hipótese impossível no passado?', ['Se so, vengo.', 'Se sapessi, verrei.', 'Se avessi saputo, sarei venuto.'], 'Se avessi saputo, sarei venuto.', 'Congiuntivo trapassato + condizionale passato.'),
        mc('O que a conjunção «a meno che non» pede?', ['congiuntivo presente', 'futuro', 'condizionale'], 'congiuntivo presente', 'Conjunções de condição pedem o congiuntivo.'),
        mc('Qual frase está correta?', ['Se sarebbe ricco, viaggerebbe molto.', 'Se fosse ricco, viaggerebbe molto.', 'Se è ricco, viaggerebbe molto.'], 'Se fosse ricco, viaggerebbe molto.', 'Hipótese irreal: congiuntivo imperfetto + condizionale.'),
        mc('Como se diz «Se eu estudar, passarei no exame» (real)?', ['Se studio, passerò l\'esame.', 'Se studiassi, passerò l\'esame.', 'Se studio, passerei l\'esame.'], 'Se studio, passerò l\'esame.', 'Hipótese real: presente + futuro.'),
        ordem('Ordene: «Se avessi tempo, verrei con voi.»', ['Se', 'avessi', 'tempo,', 'verrei', 'con', 'voi.'], 'Se avessi tempo, verrei con voi.', 'Tipo 2: congiuntivo imperfetto + condizionale presente.'),
        ordem('Ordene: «Se non fossi stato malato, ora sarei in vacanza.»', ['Se', 'non', 'fossi', 'stato', 'malato,', 'ora', 'sarei', 'in', 'vacanza.'], 'Se non fossi stato malato, ora sarei in vacanza.', 'Tipo misto: causa no passado e efeito no presente.'),
        livre('Escreva em italiano: Se eu fosse você, aceitaria a proposta.', 'Se fossi in te, accetterei la proposta.'),
        livre('Escreva em italiano: Se eu tivesse sabido, teria vindo. Ajudo você, contanto que me explique tudo.', 'Se avessi saputo, sarei venuto. Ti aiuto, purché tu mi spieghi tutto.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que mudaria na sua vida se fosse possível, usando os três tipos de hipótese.'),
    ]),
  ],
});
