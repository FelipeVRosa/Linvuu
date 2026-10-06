import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 43, titulo: 'Saúde e corpo: no médico e na farmácia', nivel: 'a2',
  objetivo: 'Nomear as partes do corpo, dizer o que dói e quais são os sintomas, marcar uma consulta, entender as instruções do médico (imperativo) e comprar um remédio na farmácia.',
  nota: 'Você consegue ir ao médico e à farmácia em alemão. Próxima aula: trabalho, formulários e e-mails formais.',
  sessoes: [
    sessao('S1', 'O corpo e «Mir tut … weh»', [
      revisao(5, 'Escreva 8 frases com «welcher», «was für ein», «wer, wen, wem» e pronomes indefinidos.'),
      palavras(12, [
        ['der Kopf', 'der kopf', 'cabeça', 'head'], ['der Hals', 'der hals', 'garganta, pescoço', 'throat'], ['der Arm', 'der arm', 'braço', 'arm'], ['die Hand', 'di hant', 'mão', 'hand'],
        ['der Finger', 'der fínguer', 'dedo (da mão)', 'finger'], ['der Bauch', 'der baurr', 'barriga', 'stomach'], ['der Rücken', 'der rüken', 'costas', 'back'], ['das Bein', 'das bain', 'perna', 'leg'],
        ['der Fuß', 'der fus', 'pé', 'foot'], ['das Auge', 'das áuge', 'olho', 'eye'], ['das Ohr', 'das ôr', 'orelha', 'ear'], ['der Zahn', 'der tsan', 'dente', 'tooth'],
      ]),
      gramatica(10, 'Dizer o que dói, passo a passo', 'PASSO 1: para dizer o que DÓI, use «wehtun» (separável) com o DATIVO da pessoa: «Der Kopf tut mir weh» (a minha cabeça dói). PASSO 2: plural: «Die Füße tun mir weh.» PASSO 3: pergunte «Was tut Ihnen weh?» ou «Wo tut es weh?» PASSO 4: outra forma, com «-schmerzen» (dores): «Ich habe Kopfschmerzen / Bauchschmerzen / Halsschmerzen / Rückenschmerzen.» PASSO 5: «weh» também forma «Es tut weh» (dói) sem a pessoa. PASSO 6: lembre do dativo reflexivo da aula 38: «Ich habe mir die Hand verletzt» (eu machuquei a mão), forma muito usada no Perfekt.', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Der Kopf tut mir weh.', pt: 'A minha cabeça dói.' }, { frase: 'Die Füße tun mir weh.', pt: 'Os meus pés doem.' }, { frase: 'Wo tut es weh?', pt: 'Onde dói?' }, { frase: 'Ich habe Kopfschmerzen.', pt: 'Estou com dor de cabeça.' },
          { frase: 'Ich habe Bauchschmerzen.', pt: 'Estou com dor de barriga.' }, { frase: 'Ich habe mir die Hand verletzt.', pt: 'Eu machuquei a mão.' },
        ],
        erros: [['Mein Kopf tut weh mir.', 'Mein Kopf tut mir weh.', 'O dativo vem logo depois de «tut»; «weh» vai para o fim.'], ['Ich habe Kopf Schmerzen.', 'Ich habe Kopfschmerzen.', 'Palavra composta, junta.']],
      }),
      producao(3, 'Diga onde dói em 6 partes do corpo: «Der Kopf tut mir weh. Ich habe Bauchschmerzen. Die Füße tun mir weh.»'),
    ]),
    sessao('S2', 'Sintomas, remédios e a farmácia', [
      revisao(5, 'Escreva as 12 partes do corpo com artigo.'),
      palavras(8, [
        ['das Fieber', 'das fíber', 'febre', 'fever'], ['der Husten', 'der rústen', 'tosse', 'cough'], ['der Schnupfen', 'der xnúpfen', 'resfriado, coriza', 'cold'], ['die Erkältung', 'di erkéltung', 'resfriado', 'cold'],
        ['die Tablette', 'di tabléte', 'comprimido', 'tablet'], ['das Medikament', 'das medikamént', 'remédio', 'medicine'], ['das Rezept', 'das retsépt', 'receita', 'prescription'], ['die Apotheke', 'di apotéke', 'farmácia', 'pharmacy'],
      ]),
      gramatica(12, 'Sintomas, instruções e remédios', 'PASSO 1: para os sintomas, use «haben»: «Ich habe Fieber», «Ich habe Husten», «Ich habe eine Erkältung». PASSO 2: o médico dá instruções no IMPERATIVO formal (aula 13): «Trinken Sie viel Tee», «Bleiben Sie im Bett», «Nehmen Sie die Tabletten dreimal täglich.» PASSO 3: a posologia: «einmal / zweimal / dreimal täglich» (uma, duas, três vezes ao dia), «vor dem Essen» (antes da refeição), «nach dem Essen» (depois). PASSO 4: na farmácia: «Ich hätte gern etwas gegen Kopfschmerzen» (eu gostaria de algo para dor de cabeça): «gegen» + acusativo. PASSO 5: «Ich brauche ein Rezept» (preciso de uma receita) e «Haben Sie ein Rezept?» (a senhora tem uma receita?).', {
        tag: 'Verbos',
        tabela: [
          { situacao: 'sintoma', frase: 'Ich habe Fieber und Husten.' }, { situacao: 'instrução do médico', frase: 'Bleiben Sie drei Tage im Bett.' }, { situacao: 'posologia', frase: 'Nehmen Sie die Tablette dreimal täglich nach dem Essen.' }, { situacao: 'na farmácia', frase: 'Ich hätte gern etwas gegen Kopfschmerzen.' },
          { situacao: 'receita', frase: 'Haben Sie ein Rezept?' }, { situacao: 'conselho', frase: 'Trinken Sie viel Wasser.' },
        ],
        erros: [['Ich hätte gern etwas für Kopfschmerzen.', 'Ich hätte gern etwas gegen Kopfschmerzen.', 'Remédio «contra»: gegen.'], ['Nehmen Sie dreimal täglich die Tablette.', 'Nehmen Sie die Tablette dreimal täglich.', 'Ordem natural: objeto antes da frequência (ambas existem; a primeira soa pior).']],
      }),
      producao(5, 'Descreva em voz alta sintomas, o que o médico diz e o que você pede na farmácia.'),
    ]),
    sessao('S3', 'Marcar uma consulta e ir ao médico', [
      revisao(5, 'Escreva 6 sintomas e 4 instruções de médico no imperativo formal.'),
      gramatica(10, 'Marcar uma consulta, passo a passo', 'PASSO 1: para marcar: «Ich möchte einen Termin vereinbaren» (eu gostaria de marcar uma consulta). PASSO 2: a atendente propõe: «Haben Sie am Dienstag um zehn Uhr Zeit?» PASSO 3: você aceita ou propõe outro horário: «Ja, das passt mir gut» (serve bem) ou «Leider nicht. Geht es am Mittwoch?» PASSO 4: confirme: «Dann sehen wir uns am Dienstag um zehn Uhr.» PASSO 5: se precisar cancelar: «Ich muss meinen Termin leider absagen» (preciso cancelar a minha consulta).', {
        tag: 'Frase',
        tabela: [
          { funcao: 'pedir', frase: 'Ich möchte einen Termin vereinbaren.' }, { funcao: 'propor', frase: 'Haben Sie am Dienstag um zehn Uhr Zeit?' }, { funcao: 'aceitar', frase: 'Ja, das passt mir gut.' }, { funcao: 'propor outra', frase: 'Leider nicht. Geht es am Mittwoch?' }, { funcao: 'cancelar', frase: 'Ich muss meinen Termin leider absagen.' },
        ],
      }),
      dialogo(10, 'Beim Arzt / No médico', 'Uma paciente é atendida pela médica.', [
        ['Ärztin', 'Guten Tag! Was fehlt Ihnen?', 'Bom dia! O que a senhora tem?'], ['Anna', 'Mir ist schlecht, und der Kopf tut mir weh.', 'Estou enjoada e a minha cabeça dói.'], ['Ärztin', 'Seit wann haben Sie das?', 'Desde quando a senhora tem isso?'],
        ['Anna', 'Seit gestern Abend. Ich habe nicht gut geschlafen.', 'Desde ontem à noite. Não dormi bem.'], ['Ärztin', 'Haben Sie Fieber?', 'A senhora tem febre?'], ['Anna', 'Ja, ein bisschen. Ich habe auch Husten.', 'Sim, um pouco. Também estou com tosse.'],
        ['Ärztin', 'Sie haben eine Erkältung. Bleiben Sie drei Tage im Bett und trinken Sie viel Tee.', 'A senhora está resfriada. Fique três dias na cama e beba bastante chá.'], ['Anna', 'Muss ich Tabletten nehmen?', 'Preciso tomar comprimidos?'], ['Ärztin', 'Ja, nehmen Sie die Tabletten dreimal täglich nach dem Essen. Hier ist das Rezept.', 'Sim, tome os comprimidos três vezes ao dia depois das refeições. Aqui está a receita.'], ['Anna', 'Vielen Dank! Auf Wiedersehen.', 'Muito obrigada! Até logo.'],
      ]),
      producao(5, 'Marque uma consulta em voz alta e descreva os seus sintomas ao médico.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um diálogo de 8 falas entre paciente e médico.'),
      exercicios(20, [
        lacuna('Der Kopf tut ___ weh. (a mim)', ['mir', 'mich', 'ich'], 'mir', '«wehtun» pede dativo.'), lacuna('Die Füße ___ mir weh. (tun)', ['tun', 'tut', 'tust'], 'tun', 'Plural: «tun».'), lacuna('Ich habe ___. (dor de barriga)', ['Bauchschmerzen', 'Bauch Schmerzen', 'Schmerzbauch'], 'Bauchschmerzen', 'Palavra composta.'),
        lacuna('Ich hätte gern etwas ___ Kopfschmerzen. (contra)', ['gegen', 'für', 'mit'], 'gegen', 'Remédio contra: gegen.'), lacuna('___ Sie viel Tee! (trinken)', ['Trinken', 'Trinke', 'Trinkt'], 'Trinken', 'Imperativo formal.'), lacuna('Nehmen Sie die Tabletten ___ täglich. (três vezes)', ['dreimal', 'dritte', 'dreiten'], 'dreimal', 'Número + mal.'),
        mc('«Fieber» significa:', ['febre', 'tosse', 'receita'], 'febre', 'Sintoma.'), mc('«Die Apotheke» é:', ['a farmácia', 'o consultório', 'o hospital'], 'a farmácia', 'Onde se compram remédios.'), mc('«Ich habe mir die Hand verletzt» significa:', ['Eu machuquei a mão', 'Eu lavei a mão', 'Eu perdi a mão'], 'Eu machuquei a mão', 'Dativo reflexivo.'),
        ordem('Ordene: «A minha cabeça dói.»', ['Der', 'Kopf', 'tut', 'mir', 'weh'], 'Der Kopf tut mir weh.', 'wehtun: «weh» no fim.'), ordem('Ordene: «Gostaria de marcar uma consulta.»', ['Ich', 'möchte', 'einen', 'Termin', 'vereinbaren'], 'Ich möchte einen Termin vereinbaren.', 'Modal + infinitivo no fim.'), ouvir('Bleiben Sie drei Tage im Bett', ['Bleiben Sie drei Tage im Bett', 'Ich bleibe drei Tage im Bett', 'Bleibe drei Tage im Bett'], 'Bleiben Sie drei Tage im Bett', 'Imperativo formal.'),
        ditado('Nehmen Sie die Tabletten dreimal täglich', 'Instrução de médico.'), livre('Escreva 5 frases: um sintoma, onde dói, uma instrução do médico, um pedido na farmácia e um pedido de consulta.', 'Ich habe Fieber. Der Kopf tut mir weh. Bleiben Sie im Bett. Ich hätte gern etwas gegen Husten. Ich möchte einen Termin vereinbaren.'),
      ]),
      producao(5, 'Grave-se fazendo toda a consulta: marcar, descrever os sintomas, entender as instruções e comprar o remédio.'),
    ]),
  ],
});
