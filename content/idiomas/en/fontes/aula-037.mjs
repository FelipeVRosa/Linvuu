import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 37, titulo: 'Saúde: corpo, sintomas e farmácia', nivel: 'a2',
  objetivo: 'Nomear as partes do corpo, descrever sintomas, explicar o que dói, falar com um médico e comprar remédio na farmácia, com vocabulário e estruturas corretas.',
  nota: 'Você se explica num consultório e numa farmácia. Próxima aula: revisão e simulado do A2.',
  sessoes: [
    sessao('S1', 'O corpo e o que dói', [
      revisao(5, 'Planeje uma viagem em voz alta com dois «if».'),
      palavras(8, [
        ['head', 'héd', 'cabeça', ''], ['stomach', 'stâmak', 'estômago', ''], ['throat', 'thrôut', 'garganta', ''], ['back', 'bék', 'costas', ''], ['arm', 'árm', 'braço', ''], ['leg', 'lég', 'perna', ''], ['tooth', 'tuth', 'dente', ''], ['hurt', 'hãrt', 'doer', ''],
      ]),
      gramatica(12, 'Dizer o que dói', 'PASSO 1: use «have a/an + dor»: «I have a headache.», «She has a stomachache.», «He has a toothache.» PASSO 2: ou «my + parte do corpo + hurts»: «My back hurts.», «My legs hurt.» (plural: hurt, sem -s). PASSO 3: ou «I have a pain in my…»: «I have a pain in my chest.» PASSO 4: a palavra «ache» forma dores: headache, stomachache, toothache, backache. PASSO 5: pergunta do médico: «What\'s the matter?», «Where does it hurt?» PASSO 6: use «my», não «the»: «My head hurts», não «The head hurts». PASSO 7: «sore throat» = dor de garganta: «I have a sore throat.»', {
        tag: 'Saúde',
        comparacao: 'em português «tenho dor de cabeça» usa «dor de». Em inglês a dor é uma palavra: «headache». E a parte do corpo leva «my», não «the».',
        tabela: [
          { portugues: 'Tenho dor de cabeça.', ingles: 'I have a headache.' }, { portugues: 'Minhas costas doem.', ingles: 'My back hurts.' }, { portugues: 'Estou com dor de garganta.', ingles: 'I have a sore throat.' }, { portugues: 'Onde dói?', ingles: 'Where does it hurt?' },
        ],
        erros: [['I have pain of head.', 'I have a headache.', 'Palavra única.'], ['The head hurts.', 'My head hurts.', 'Use «my».'], ['My legs hurts.', 'My legs hurt.', 'Plural: hurt.'], ['I have a toothache in my tooth.', 'I have a toothache.', 'Redundante.']],
      }),
      producao(5, 'Diga 5 coisas que doem, usando «have a…» e «my … hurts».'),
    ]),
    sessao('S2', 'Sintomas e remédios', [
      revisao(4, 'Diga em inglês: dor de cabeça, dor de garganta, dor nas costas, dor de dente.'),
      palavras(6, [
        ['fever', 'fíiver', 'febre', ''], ['cough', 'cóf', 'tosse', ''], ['cold', 'côuld', 'resfriado', ''], ['medicine', 'médisin', 'remédio', ''], ['prescription', 'priskrípchon', 'receita médica', ''], ['pharmacy', 'fármassi', 'farmácia', ''],
      ]),
      gramatica(12, 'Dizer como você se sente', 'PASSO 1: «I feel + adjetivo»: «I feel sick.», «I feel tired.», «I feel dizzy.» PASSO 2: «I have + doença»: «I have a cold.», «I have a fever.», «I have the flu.» PASSO 3: «a cold» = resfriado (com artigo), mas «cold» (adjetivo) = frio: «I have a cold. I\'m cold.» PASSO 4: «catch a cold» = pegar um resfriado: «I caught a cold.» PASSO 5: peça remédio: «Do you have anything for a headache?», «I need something for a cough.» PASSO 6: «medicine» é incontável: «some medicine», «a bottle of cough medicine». PASSO 7: «take medicine» (tomar remédio) — o verbo é «take», não «drink»: «Take two pills twice a day.»', {
        tag: 'Sintomas',
        comparacao: 'em português «tomar remédio» usa «tomar». Em inglês, o verbo também é «take»: «take medicine». Cuidado com «drink» (só para líquido).',
        tabela: [
          { portugues: 'Estou resfriado.', ingles: 'I have a cold.' }, { portugues: 'Estou com febre.', ingles: 'I have a fever.' }, { portugues: 'Tomar remédio', ingles: 'take medicine' }, { portugues: 'Você tem algo para dor de cabeça?', ingles: 'Do you have anything for a headache?' },
        ],
        erros: [['I am cold. (resfriado)', 'I have a cold.', 'A doença é «a cold».'], ['I drink medicine.', 'I take medicine.', 'take.'], ['a medicine', 'some medicine', 'Incontável.'], ['I have a fever high.', 'I have a high fever.', 'Adjetivo antes.']],
      }),
      producao(8, 'Descreva em 6 frases como você se sente quando está doente.'),
    ]),
    sessao('S3', 'No médico e na farmácia', [
      revisao(4, 'Diga 3 sintomas e 2 remédios em inglês.'),
      palavras(5, [
        ['appointment', 'apôintment', 'consulta', ''], ['pill', 'píl', 'comprimido', ''], ['twice a day', 'tuáis a dêi', 'duas vezes ao dia', ''], ['rest', 'rést', 'descansar', ''], ['symptoms', 'símptomz', 'sintomas', ''],
      ]),
      gramatica(8, 'Instruções do médico', 'PASSO 1: o médico usa o imperativo: «Take two pills twice a day.», «Drink a lot of water.», «Get some rest.» PASSO 2: e «should/shouldn\'t»: «You should stay in bed.» PASSO 3: frequência: «once a day», «twice a day», «three times a day», «every eight hours». PASSO 4: «for + duração»: «for a week». PASSO 5: pergunte: «How often should I take it?», «Are there any side effects?»', {
        tag: 'Instruções',
        comparacao: 'em português «três vezes ao dia» e «de oito em oito horas» se repetem na receita. Em inglês: «three times a day», «every eight hours».',
        tabela: [
          { portugues: 'uma vez ao dia', ingles: 'once a day' }, { portugues: 'duas vezes ao dia', ingles: 'twice a day' }, { portugues: 'três vezes ao dia', ingles: 'three times a day' }, { portugues: 'de oito em oito horas', ingles: 'every eight hours' },
        ],
        erros: [['two times a day', 'twice a day', '«twice» é natural.'], ['three time a day', 'three times a day', 'times no plural.']],
      }),
      dialogo(8, 'At the doctor\'s / No médico', 'O paciente conversa com a médica.', [
        ['Sarah', 'Good morning. What\'s the matter?', 'Bom dia. Qual é o problema?'], ['Chris', 'I have a sore throat and a cough. I also have a fever.', 'Estou com dor de garganta e tosse. Também estou com febre.'], ['Sarah', 'How long have you felt like this?', 'Há quanto tempo você se sente assim?'], ['Chris', 'For three days. My head hurts, too.', 'Há três dias. A minha cabeça também dói.'], ['Sarah', 'You have a cold. Take this medicine twice a day, drink a lot of water and get some rest.', 'Você está resfriado. Tome este remédio duas vezes ao dia, beba muita água e descanse.'], ['Chris', 'Thank you, doctor. Will I be OK by the weekend?', 'Obrigado, doutora. Vou ficar bem até o fim de semana?'], ['Sarah', 'Yes, I think you will. If you aren\'t better, come back.', 'Sim, acho que vai. Se não melhorar, volte.'],
      ]),
      producao(5, 'Encene uma consulta: você é o paciente e o médico. Troque os papéis.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 37', [
      revisao(5, 'Descreva um problema de saúde e peça remédio na farmácia.'),
      exercicios(20, [
        ouvir('I have a sore throat and a cough', ['I have a sore throat and a cough', 'I have a sore foot and a cold', 'I have a headache and a fever'], 'I have a sore throat and a cough', 'Ouça «sore throat».'), ouvir('Take this medicine twice a day', ['Take this medicine twice a day', 'Take this medicine three times a day', 'Drink this medicine twice a day'], 'Take this medicine twice a day', 'Ouça «twice a day».'), ditado('My back hurts', 'Escreva: my back hurts.'), ditado('Where does it hurt', 'Escreva: where does it hurt.'),
        mc('Qual frase está correta?', ['My legs hurt.', 'My legs hurts.', 'The legs hurt.'], 'My legs hurt.', 'Plural: hurt.'), mc('Qual frase está correta?', ['I have a headache.', 'I have a head ache of.', 'I have pain of head.'], 'I have a headache.', 'headache.'), mc('Qual verbo vai com «medicine»?', ['take', 'drink', 'eat'], 'take', 'take medicine.'), mc('Qual frase significa «estou resfriado»?', ['I have a cold.', 'I am cold.', 'I make a cold.'], 'I have a cold.', 'a cold = resfriado.'),
        lacuna('I have a ___ throat. (dor de)', ['sore', 'pain', 'ache'], 'sore', 'sore throat.'), lacuna('Take two pills ___ a day. (duas vezes)', ['twice', 'two time', 'second'], 'twice', 'twice a day.'), lacuna('Where does it ___ ?', ['hurt', 'hurts', 'pain'], 'hurt', 'does + hurt.'), lacuna('I need some ___ for a cough.', ['medicine', 'a medicine', 'medicines'], 'medicine', 'Incontável.'),
        ordem('Ordene: «My head hurts and I have a fever.»', ['My', 'head', 'hurts', 'and', 'I', 'have', 'a', 'fever'], 'My head hurts and I have a fever.', 'my + parte + hurts.'), ordem('Ordene: «Take this medicine twice a day.»', ['Take', 'this', 'medicine', 'twice', 'a', 'day'], 'Take this medicine twice a day.', 'Imperativo + frequência.'),
        livre('Escreva 4 frases sobre um problema de saúde: o que dói, os sintomas, o remédio e o conselho.', 'I have a headache. I feel tired. I will take some medicine. I should rest.'),
      ]),
      producao(5, 'Explique em 1 minuto como você cuida da sua saúde no dia a dia.'),
    ]),
  ],
});
