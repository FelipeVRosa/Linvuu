import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 37, titulo: 'Casa, aluguel e vizinhos', nivel: 'a2',
  objetivo: "Descrever a casa e o andar (cômodos, ordinais, preposições de lugar), procurar e alugar um imóvel (affitto, spese, contratto, «mi serve») e falar com a proprietária e os vizinhos com educação.",
  nota: "Você descreve onde mora, procura casa e resolve problemas com o proprietário e os vizinhos. Próxima aula: revisão e simulado do A2.",
  sessoes: [
    sessao('S1', 'A casa e os andares', [
      revisao(5, 'Ligue em voz alta para um amigo, convide-o para algo e combine o lugar e a hora (aula 36).'),
      palavras(8, [
        ['il soggiorno', 'il sodjórno', 'a sala de estar', ''], ['la cucina', 'la kutchína', 'a cozinha', ''], ['la camera da letto', 'la kámera da létto', 'o quarto', ''], ['il bagno', 'il bánho', 'o banheiro', ''],
        ['il balcone', 'il balkône', 'a varanda', ''], ['il piano', 'il piáno', 'o andar', ''], ['il piano terra', 'il piáno térra', 'o térreo', ''], ["l'ascensore", 'laxensôre', 'o elevador', ''],
      ]),
      gramatica(12, 'Descrever a casa e o andar', "PASSO 1: dizer o que há na casa: «In casa c'è una cucina e ci sono due camere.» PASSO 2: os ordinais de 1 a 10: primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo. Concordam com o substantivo: «il primo piano», «la seconda camera». PASSO 3: o andar: «piano terra» é o térreo; «primo piano» é o primeiro andar acima: «Abito al terzo piano.» (a + il = al) PASSO 4: elevador: «C'è l'ascensore?» «Senza ascensore.» PASSO 5: tamanho: «monolocale» (um único cômodo), «bilocale» (dois cômodos, sem contar cozinha e banheiro), «trilocale» (três). Área: «sessanta metri quadrati» (60 m²). PASSO 6: preposições de lugar: davanti a, dietro, accanto a, sopra, sotto, vicino a, lontano da, in mezzo a, tra. «Il bagno è accanto alla cucina.» PASSO 7: «arredato» (mobiliado) e «non arredato». PASSO 8: descrever: «È luminoso, tranquillo, grande.» «Dà sulla strada / sul cortile.»", {
        tag: 'Casa',
        comparacao: "o português «sala» é a sala de estar; o italiano «sala» costuma ser um salão, um espaço amplo (sala da pranzo, sala d'attesa). A sala de estar é «soggiorno» (ou «salotto», mais formal). Outros pares: «quarto» = «camera da letto»; «banheiro» = «bagno»; «térreo» = «piano terra». E o português «quarto» é ordinal e cômodo; em italiano «quarto» só é ordinal.",
        tabela: [
          { numero: '1º', ordinal: 'primo', exemplo: 'Abito al primo piano.' },
          { numero: '2º', ordinal: 'secondo', exemplo: 'La seconda camera è piccola.' },
          { numero: '3º', ordinal: 'terzo', exemplo: 'Abito al terzo piano.' },
          { numero: '4º', ordinal: 'quarto', exemplo: 'Il quarto piano non ha ascensore.' },
          { numero: '5º', ordinal: 'quinto', exemplo: 'Il quinto piano è luminoso.' },
          { numero: '10º', ordinal: 'decimo', exemplo: 'Vive al decimo piano.' },
        ],
        erros: [
          ['Abito in terzo piano.', 'Abito al terzo piano.', 'Andar: «a» + artigo, «al terzo piano».'],
          ['Il soggiorno è piccola.', 'Il soggiorno è piccolo.', '«Soggiorno» é masculino.'],
          ["Ci sono un balcone.", "C'è un balcone.", 'Singular: «c\'è».'],
          ['Il bagno è accanto la cucina.', 'Il bagno è accanto alla cucina.', '«Accanto a» + artigo: «alla».'],
        ],
      }),
      producao(5, 'Descreva em voz alta a sua casa: andar, cômodos, o que fica ao lado do quê, e se tem elevador.', 'Abito al secondo piano. Il bagno è accanto alla camera da letto. Non c\'è l\'ascensore.'),
    ]),
    sessao('S2', 'Alugar uma casa', [
      revisao(4, 'Diga em voz alta cinco frases com ordinais e preposições de lugar sobre a sua casa.'),
      palavras(6, [
        ["l'affitto", 'laffítto', 'o aluguel', ''], ["l'inquilino", 'linkuilíno', 'o inquilino', ''], ['il proprietario', 'il proprietário', 'o proprietário', ''], ['il contratto', 'il kontrátto', 'o contrato', ''], ['la cauzione', 'la kapárra', 'o depósito caução', ''], ['le spese', 'le spése', 'as despesas', ''],
      ]),
      gramatica(12, 'Procurar e alugar', "PASSO 1: procurar: «Cerco un appartamento in affitto.» «Cerco un bilocale in centro.» PASSO 2: perguntar o preço: «Quanto costa l'affitto al mese?» «Le spese sono incluse?» («spese condominiali» são as despesas do prédio). PASSO 3: verbos: «prendere in affitto» é alugar como inquilino; «dare in affitto» é alugar a outra pessoa; «affittare» pode significar os dois. Nas placas, «Affittasi» significa «aluga-se». PASSO 4: contas: «le bollette» (luce, gas, acqua). PASSO 5: obrigações e regras: «Devo pagare l'affitto entro il cinque.» «Bisogna pagare la cauzione.» «È vietato fumare.» PASSO 6: «servire»: «Mi serve un contratto scritto.» «Mi servono due mesi di cauzione.» O verbo concorda com o que se precisa e não leva «di». PASSO 7: visitar: «Posso vedere l'appartamento?» «Quando posso visitarlo?» «È disponibile da quando?» PASSO 8: a «cauzione» é um valor entregue ao proprietário como garantia; os valores e as regras variam, por isso leia o contrato com atenção e peça que expliquem o que não estiver claro.", {
        tag: 'Casa',
        comparacao: "em português «alugar» também é ambíguo (alugo para você / alugo de você), e o italiano «affittare» tem o mesmo problema; por isso se usa «prendere in affitto» e «dare in affitto». «Condominio» em italiano é o prédio e também o conjunto dos moradores; «spese condominiali» é o equivalente à taxa de condomínio. «Inquilino» é quem aluga (não é o proprietário).",
        tabela: [
          { termo: "l'affitto", sentido: 'o aluguel', exemplo: "Quanto costa l'affitto al mese?" },
          { termo: 'le spese', sentido: 'as despesas', exemplo: 'Le spese sono incluse?' },
          { termo: 'la cauzione', sentido: 'o depósito caução', exemplo: 'Bisogna pagare la cauzione.' },
          { termo: 'prendere in affitto', sentido: 'alugar (como inquilino)', exemplo: 'Prendo in affitto un bilocale.' },
          { termo: 'dare in affitto', sentido: 'alugar a outro', exemplo: 'Do in affitto la mia casa.' },
          { termo: 'le bollette', sentido: 'as contas de luz, gás e água', exemplo: 'Le bollette sono a parte.' },
        ],
        erros: [
          ['Cerco un appartamento a affitto.', 'Cerco un appartamento in affitto.', 'Locução fixa: «in affitto».'],
          ['Mi serve due mesi.', 'Mi servono due mesi.', 'Plural: «servono».'],
          ['Le spese sono inclusi?', 'Le spese sono incluse?', '«Spese» é feminino plural: «incluse».'],
          ['È vietato di fumare.', 'È vietato fumare.', 'Depois de «vietato» não há «di».'],
        ],
      }),
      producao(8, 'Ligue em voz alta para um proprietário: diga o que procura, pergunte o aluguel, as despesas, a cauzione e quando pode visitar.', 'Cerco un bilocale in centro. Quanto costa l\'affitto? Le spese sono incluse?'),
    ]),
    sessao('S3', 'Vizinhos e pequenos problemas', [
      revisao(4, 'Faça em voz alta três perguntas a um proprietário sobre um apartamento.'),
      palavras(5, [
        ['il vicino', 'il vitchíno', 'o vizinho', ''], ['il rumore', 'il rumôre', 'o barulho', ''], ['il condominio', 'il kondomínio', 'o condomínio', ''], ['abbassare', 'abbassáre', 'baixar (o volume)', ''], ['disturbare', 'disturbáre', 'incomodar', ''],
      ]),
      gramatica(8, 'Falar com os vizinhos e com o proprietário', "PASSO 1: abrir com «Mi scusi» e suavizar: «Mi scusi, la musica è un po' alta.» PASSO 2: pedir com o condizionale (aula 29): «Potrebbe abbassare il volume?» PASSO 3: pedir licença: «Le dispiace se lascio la bici nel corridoio?» (depois de «se», presente) PASSO 4: avisar com o futuro (aula 27): «Domani ci sono i lavori: faremo un po' di rumore.» PASSO 5: oferecer ajuda: «Se ha bisogno di qualcosa, mi dica pure.» (dica: Lei, de dire) PASSO 6: regras do prédio: «Dopo le dieci bisogna fare silenzio.» «È vietato lasciare la bici nel corridoio.» PASSO 7: reclamar: «Il riscaldamento non funziona.» «Potrebbe mandare qualcuno?» PASSO 8: agradecer: «La ringrazio.» «Non si preoccupi.»", {
        tag: 'Casa',
        comparacao: "em português «poderia baixar o som?» corresponde a «potrebbe abbassare il volume?». Falso amigo: «rumore» é barulho, e não o boato (que é «voce» ou «diceria» em italiano). Com os vizinhos, o italiano prefere o condizionale e o tratamento Lei, e só passa a «tu» se a outra pessoa propuser.",
        tabela: [
          { situacao: 'abrir', frase: "Mi scusi, la musica è un po' alta." },
          { situacao: 'pedir', frase: 'Potrebbe abbassare il volume?' },
          { situacao: 'licença', frase: 'Le dispiace se lascio la bici nel corridoio?' },
          { situacao: 'avisar', frase: 'Domani faremo un po\' di rumore.' },
          { situacao: 'regra', frase: 'Dopo le dieci bisogna fare silenzio.' },
          { situacao: 'agradecer', frase: 'La ringrazio. Non si preoccupi.' },
        ],
        erros: [
          ['Fate molto rumori.', 'Fate molto rumore.', '«Rumore» é singular.'],
          ['Le dispiace se lascerei la bici qui?', 'Le dispiace se lascio la bici qui?', 'Depois de «se», presente.'],
          ['Potrebbe tu abbassare il volume?', 'Potresti abbassare il volume?', 'Com «tu»: «potresti».'],
          ['Il rumore mi disturbano.', 'Il rumore mi disturba.', 'O verbo concorda com «il rumore», singular.'],
        ],
      }),
      dialogo(8, 'Dalla padrona di casa / Com a proprietária', 'Marta fala com a proprietária sobre o aquecimento e o barulho dos vizinhos.', [
        ['Marta', 'Buonasera, signora. Posso parlarle un momento?', 'Boa noite, senhora. Posso falar com a senhora um momento?'],
        ['La padrona di casa', 'Certo, mi dica. C\'è qualche problema?', 'Claro, diga. Há algum problema?'],
        ['Marta', 'Il riscaldamento non funziona da due giorni. Potrebbe mandare qualcuno?', 'O aquecimento não funciona há dois dias. A senhora poderia mandar alguém?'],
        ['La padrona di casa', 'Mi dispiace. Chiamo subito il tecnico: verrà domani mattina. Le va bene alle nove?', 'Sinto muito. Chamo já o técnico: virá amanhã de manhã. Serve para a senhora às nove?'],
        ['Marta', 'Va bene. Un\'altra cosa: i vicini del piano di sopra fanno molto rumore la sera. Sarebbe meglio parlarne con loro?', 'Está bem. Outra coisa: os vizinhos do andar de cima fazem muito barulho à noite. Seria melhor falar com eles?'],
        ['La padrona di casa', 'Ha ragione. Parlo io con loro, non si preoccupi.', 'A senhora tem razão. Eu mesma falo com eles, não se preocupe.'],
      ]),
      producao(5, 'Simule em voz alta um problema em casa: o que não funciona, há quanto tempo e o que você pede, com educação.', 'La lavatrice non funziona da ieri. Potrebbe mandare qualcuno?'),
    ]),
    sessao('S4', 'Revisão e prática da aula 37', [
      revisao(5, 'Descreva em voz alta uma casa: andar, cômodos, tamanho, aluguel e um problema.'),
      exercicios(20, [
        ouvir('Abito al terzo piano', ['Abito al terzo piano', 'Abito al quarto piano', 'Abito al piano terra'], 'Abito al terzo piano', 'Ouça o ordinal «terzo».'),
        ouvir('Cerco un bilocale in affitto', ['Cerco un bilocale in affitto', 'Cerco un monolocale in affitto', 'Cerco un bilocale da comprare'], 'Cerco un bilocale in affitto', 'Ouça «bilocale».'),
        ouvir('Potrebbe abbassare il volume?', ['Potrebbe abbassare il volume?', 'Potresti abbassare il volume?', 'Può alzare il volume?'], 'Potrebbe abbassare il volume?', 'Ouça «abbassare».'),
        ditado('Le spese sono incluse', 'Escreva: Le spese sono incluse.'),
        ditado('Il bagno è accanto alla cucina', 'Escreva: Il bagno è accanto alla cucina.'),
        ditado('Mi servono due mesi di cauzione', 'Escreva: Mi servono due mesi di cauzione.'),
        mc('A sala de estar de uma casa italiana é:', ['il soggiorno', 'la sala', 'il balcone'], 'il soggiorno', '«Sala» é um salão; sala de estar: soggiorno.'),
        mc('«Piano terra» significa:', ['térreo', 'primeiro andar', 'cobertura'], 'térreo', 'Piano terra = térreo.'),
        mc('Qual frase está correta?', ['Mi servono due mesi.', 'Mi serve due mesi.', 'Mi servono di due mesi.'], 'Mi servono due mesi.', 'Plural, sem «di».'),
        mc('«Bilocale» é:', ['apartamento com dois cômodos', 'apartamento de dois andares', 'casa com dois banheiros'], 'apartamento com dois cômodos', 'Bilocale = dois cômodos.'),
        lacuna('Abito ___ quinto piano.', ['al', 'in', 'a'], 'al', 'a + il = al.'),
        lacuna('Cerco un appartamento ___ affitto.', ['in', 'a', 'per'], 'in', 'In affitto.'),
        lacuna('Il rumore mi ___ . (disturbare)', ['disturba', 'disturbano', 'disturbo'], 'disturba', 'Singular.'),
        lacuna('Le dispiace ___ lascio la bici qui?', ['se', 'che', 'di'], 'se', 'Le dispiace se + presente.'),
        ordem('Ordene: «Potrebbe mandare qualcuno domani?»', ['Potrebbe', 'mandare', 'qualcuno', 'domani'], 'Potrebbe mandare qualcuno domani?', 'Pedido educado.'),
        ordem('Ordene: «Le spese sono incluse nell\'affitto?»', ['Le', 'spese', 'sono', 'incluse', "nell'affitto"], "Le spese sono incluse nell'affitto?", 'Pergunta ao proprietário.'),
        livre('Escreva em italiano: Moro no terceiro andar. Procuro um apartamento de dois cômodos para alugar. As despesas estão incluídas? O senhor poderia baixar o volume?', 'Abito al terzo piano. Cerco un bilocale in affitto. Le spese sono incluse? Potrebbe abbassare il volume?'),
      ]),
      producao(5, 'Fale 1 minuto: você visita um apartamento. Pergunte o que quiser (aluguel, despesas, andar, elevador) e peça algo ao proprietário.'),
    ]),
  ],
});
