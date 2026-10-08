import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 8, titulo: 'Café e comida: querer, quisiera, números até 100', nivel: 'a1',
  objetivo: 'Pedir comida e bebida num café ou restaurante com «querer» e «quisiera», contar de 20 a 100, dizer preços em euros, pedir a conta e evitar os falsos amigos «exquisito», «vaso», «cena» e «cola».',
  nota: 'Você pede no café, entende preços, pede a conta e conhece as armadilhas do vocabulário de comida. Próxima aula: horas, dias e meses.',
  sessoes: [
    sessao('S1', 'Pedir com querer e quisiera', [
      revisao(5, 'Apresente a sua família em quatro frases com «mi, mis, nuestro». Depois diga o plural de «hermano», «abuela» e «hijo».'),
      palavras(8, [
        ['el café', 'el kafé', 'o café', ''], ['el té', 'el té', 'o chá', ''], ['el zumo', 'el thúmo', 'o suco (Espanha)', ''], ['la cerveza', 'la thervétha', 'a cerveja', ''],
        ['el agua', 'el água', 'a água', ''], ['el bocadillo', 'el bokadílho', 'o sanduíche (de pão comprido)', ''], ['la tostada', 'la tostáda', 'a torrada', ''], ['la cuenta', 'la kuénta', 'a conta', ''],
      ]),
      gramatica(12, 'Querer e quisiera: pedir educadamente', 'PASSO 1: «querer» é querer. É um verbo irregular, mas com um padrão fácil: em quatro pessoas o «e» do radical vira «ie», e em «nosotros» e «vosotros» ele continua «e». «Quiero, quieres, quiere, queremos, queréis, quieren.» PASSO 2: para pedir, junte «querer» a um substantivo: «Quiero un café», «Queremos dos zumos». PASSO 3: «Quiero…» é direto e vale entre amigos, mas pode soar seco com desconhecidos. O melhor é «Quisiera…»: «Quisiera un café con leche, por favor». Aprenda «quisiera» como forma pronta: é mais educada, e a gramática dela virá bem depois. PASSO 4: acrescente sempre «por favor» e «gracias». PASSO 5: o garçom (na Espanha, «camarero») pergunta: «¿Qué desea?» (usted) ou «¿Qué quieres?» (tú). Outra pergunta é «¿Qué va a tomar?», e a resposta natural é «Para mí, un café». PASSO 6: «tomar» quer dizer comer ou beber, e por isso «¿Qué va a tomar?» não é só sobre bebida. PASSO 7: com «con» e «sin» você ajusta o pedido: «un café con leche», «un té sin azúcar», «un zumo con hielo». PASSO 8: a América Latina tem variantes: «jugo» no lugar de «zumo», «mesero» ou «mozo» no lugar de «camarero» e «torta» ou «sándwich» no lugar de «bocadillo», conforme o país. Estude as da Espanha e reconheça as outras. PASSO 9: a água é «el agua»: use «el» no singular por causa do som do «a» tônico (aula 5), mas «el agua fría» e «las aguas». Peça «un vaso de agua» ou «una botella de agua».', {
        tag: 'Pedidos',
        comparacao: 'em português dizemos «eu queria um café», e é exatamente o que o espanhol faz com «quisiera»: a forma é mais educada que «quero». Além disso, o garçom pergunta «o que o senhor deseja?», e em espanhol é «¿Qué desea?». O falso amigo mais comum da mesa é «exquisito», que significa delicioso, e não esquisito (que é «raro» ou «extraño»).',
        tabelas: [
          { titulo: 'querer (querer)', linhas: [
            { pronome: 'yo', forma: 'quiero', exemplo: 'Quiero un café.' },
            { pronome: 'tú', forma: 'quieres', exemplo: '¿Qué quieres tomar?' },
            { pronome: 'él / ella / usted', forma: 'quiere', exemplo: 'Ella quiere un té.' },
            { pronome: 'nosotros, nosotras', forma: 'queremos', exemplo: 'Queremos la cuenta.' },
            { pronome: 'vosotros, vosotras', forma: 'queréis', exemplo: '¿Qué queréis tomar?' },
            { pronome: 'ellos, ellas, ustedes', forma: 'quieren', exemplo: 'Ellos quieren agua.' },
          ] },
          { titulo: 'Fórmulas para pedir', linhas: [
            { situacao: 'pedir (cortês)', frase: 'Quisiera un café con leche, por favor.', traducao: 'Eu queria um café com leite, por favor.' },
            { situacao: 'pedir (amigos)', frase: 'Quiero una tostada.', traducao: 'Quero uma torrada.' },
            { situacao: 'garçom pergunta', frase: '¿Qué desea? / ¿Qué va a tomar?', traducao: 'O que deseja? / O que vai tomar?' },
            { situacao: 'resposta', frase: 'Para mí, un zumo.', traducao: 'Para mim, um suco.' },
            { situacao: 'pedir a conta', frase: 'La cuenta, por favor.', traducao: 'A conta, por favor.' },
          ] },
        ],
        exemplos: [['Quisiera un café solo y una tostada, por favor.', 'Eu queria um café puro e uma torrada, por favor.'], ['¿Qué quieres tomar?', 'O que você quer tomar?'], ['Nosotros queremos dos zumos.', 'Nós queremos dois sucos.'], ['Para mí, un té sin azúcar.', 'Para mim, um chá sem açúcar.']],
        erros: [['Quero un café.', 'Quiero un café.', '«Quero» é português; em espanhol é «quiero», com «ie».'], ['Quiero un café sin de azúcar.', 'Quiero un café sin azúcar.', 'Depois de «sin», não se usa «de».'], ['Tú quieres un té. (a um desconhecido)', 'Usted quiere un té. / ¿Qué desea?', 'Com desconhecidos, use «usted».'], ['Quiéremos la cuenta.', 'Queremos la cuenta.', 'Em «nosotros» o «e» não vira «ie».'], ['Esta sopa es esquisita. (querendo dizer estranha)', 'Esta sopa es rara.', '«Exquisito» é delicioso; para estranho, diga «raro» ou «extraño».']],
      }),
      producao(5, 'Peça em voz alta quatro coisas diferentes, de modo educado: «Quisiera… por favor.» Depois peça duas coisas para dois amigos, com «queremos».'),
    ]),
    sessao('S2', 'Os números de 20 a 100 e os preços', [
      revisao(4, 'Conte de 0 a 20 em voz alta. Depois diga cinco pedidos com «quiero» e «quisiera».'),
      palavras(6, [
        ['veintiuno', 'beintiúno', 'vinte e um', ''], ['treinta', 'tréinta', 'trinta', ''], ['cuarenta', 'kuarénta', 'quarenta', ''], ['cincuenta', 'thinkuénta', 'cinquenta', ''], ['ochenta', 'otchénta', 'oitenta', ''], ['cien', 'thién', 'cem', ''],
      ]),
      gramatica(12, 'Contar de 20 a 100 e dizer preços', 'PASSO 1: de 20 a 29, o espanhol escreve uma palavra só: «veinte, veintiuno, veintidós, veintitrés, veinticuatro, veinticinco, veintiséis, veintisiete, veintiocho, veintinueve». Cuidado com os tils em veintidós, veintitrés e veintiséis. PASSO 2: as dezenas são: treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien. PASSO 3: de 31 a 99, escreva dezena + «y» + unidade, em três palavras: «treinta y uno», «cuarenta y cinco», «noventa y nueve». PASSO 4: «uno» perde o «o» diante de substantivo masculino, vira «un»: «treinta y un euros»; diante de feminino, vira «una»: «veintiuna personas». E «veintiuno» vira «veintiún»: «veintiún euros». PASSO 5: «cien» é cem. Diante de substantivo e quando é exatamente 100, use «cien»: «cien euros». Para 101 a 199, o espanhol usa «ciento»: «ciento uno». PASSO 6: para dizer preços em euros, a Espanha usa «euros» e «céntimos»: «Son tres euros con cincuenta» (3,50 €). Fale a vírgula como «con». PASSO 7: perguntas úteis: «¿Cuánto es?» (a conta total), «¿Cuánto cuesta?» (preço de um produto) e «¿Cuánto cuestan?» (preço de vários). PASSO 8: a pronúncia do «c» e do «z» no som «th» (na Espanha) aparece em «cincuenta» (thinkuénta) e «cien» (thién). Na América Latina, o som é de «s». PASSO 9: para dizer a conta de forma natural, «Son…» e a quantia. Não use «Es» com mais de um euro: «Son tres euros».', {
        tag: 'Números',
        comparacao: 'os números em português e espanhol são muito parecidos, mas a escrita difere. De 21 a 29, o espanhol junta tudo («veintiuno»); de 31 a 99, escreve três palavras («treinta y uno»), como em português, sem hífen. O pequeno tropeço é o «y»: não pule o «y» entre a dezena e a unidade.',
        tabela: [
          { numero: '20', escrita: 'veinte (béinte)', exemplo: 'Veinte euros.' }, { numero: '21', escrita: 'veintiuno, veintiún, veintiuna', exemplo: 'Veintiún euros.' }, { numero: '22', escrita: 'veintidós', exemplo: 'Veintidós años.' }, { numero: '30', escrita: 'treinta (tréinta)', exemplo: 'Treinta euros.' },
          { numero: '31', escrita: 'treinta y uno', exemplo: 'Treinta y un euros.' }, { numero: '40', escrita: 'cuarenta (kuarénta)', exemplo: 'Cuarenta personas.' }, { numero: '50', escrita: 'cincuenta (thinkuénta)', exemplo: 'Cincuenta céntimos.' }, { numero: '60', escrita: 'sesenta (sesénta)', exemplo: 'Sesenta euros.' },
          { numero: '70', escrita: 'setenta (seténta)', exemplo: 'Setenta años.' }, { numero: '80', escrita: 'ochenta (otchénta)', exemplo: 'Ochenta euros.' }, { numero: '90', escrita: 'noventa (nobénta)', exemplo: 'Noventa personas.' }, { numero: '100', escrita: 'cien (thién)', exemplo: 'Cien euros.' },
        ],
        exemplos: [['Son tres euros con cincuenta.', 'São três euros e cinquenta.'], ['¿Cuánto cuesta el bocadillo?', 'Quanto custa o sanduíche?'], ['Treinta y cinco euros.', 'Trinta e cinco euros.'], ['Tengo veintiún años.', 'Tenho vinte e um anos.'], ['Hay noventa y nueve personas.', 'Há noventa e nove pessoas.']],
        erros: [['Treinta uno', 'Treinta y uno', 'Falta o «y» entre a dezena e a unidade.'], ['Veinte y cinco', 'Veinticinco', 'De 21 a 29, o número se escreve numa só palavra.'], ['Tengo veintiuno años.', 'Tengo veintiún años.', 'Diante de substantivo masculino, «veintiuno» vira «veintiún».'], ['Cien y uno', 'Ciento uno', 'De 101 a 199, usa-se «ciento», e não «cien».'], ['Son tres euro con cincuenta.', 'Son tres euros con cincuenta.', '«Euro» também vai ao plural: «tres euros».']],
      }),
      producao(8, 'Diga em voz alta cinco preços, em euros e céntimos, e depois leia estes números: 24, 37, 45, 58, 63, 71, 86, 92, 100. Peça a conta: «¿Cuánto es? — Son… euros con…»'),
    ]),
    sessao('S3', 'No café e no restaurante', [
      revisao(4, 'Conte de 20 a 100 de dez em dez, e depois de 21 a 29. Diga quatro preços em voz alta.'),
      palavras(5, [
        ['el vaso', 'el báso', 'o copo; não é «vaso»', ''], ['la taza', 'la tátha', 'a xícara', ''], ['la cena', 'la théna', 'o jantar', ''], ['la cola', 'la kóla', 'a fila (Espanha); também o rabo', ''], ['exquisito', 'ekskisíto', 'delicioso; não é «esquisito»', ''],
      ]),
      gramatica(8, 'Falsos amigos da mesa e frases de serviço', 'PASSO 1: o primeiro falso amigo da mesa é «vaso»: em espanhol é o copo para beber água («un vaso de agua»); para a planta, diz-se «maceta». PASSO 2: «taza» é a xícara; «copa» é a taça de vinho ou de sobremesa, e também o prêmio de um torneio. PASSO 3: «cena» é jantar: «la cena es a las nueve» (a hora será vista na próxima aula). Não é a cena de um filme, que se diz «escena». PASSO 4: «cola» é fila: «hacer cola» é entrar na fila. O mesmo «cola» é também o rabo de um animal e a cola de colar. PASSO 5: «exquisito» é delicioso ou refinado: «una paella exquisita». O que é estranho em espanhol é «raro» ou «extraño». PASSO 6: «propina» é gorjeta; na Espanha costuma ser pequena e opcional, e os costumes variam de país para país. PASSO 7: frases do serviço: «una mesa para dos, por favor», «la carta, por favor» (o cardápio, também «el menú»), «¿Qué recomienda?», «está muy rico» (está muito gostoso; a forma «rico» é muito usada), «¿Me trae la cuenta, por favor?». PASSO 8: no menu do dia, a Espanha tem «el menú del día»: um preço fixo com entrada, prato principal e sobremesa, sobretudo ao meio-dia. PASSO 9: «la cuenta» é a conta, e se pede ao garçom quando você terminar.', {
        tag: 'Vocabulário',
        comparacao: 'este quadro reúne os falsos amigos que mais enganam na mesa. «Vaso» não é «vaso», «cena» não é «cena», «cola» não é «cola», e «exquisito» não é «esquisito». Se você disser «una cena exquisita», fala de um jantar delicioso, e não de um jantar estranho.',
        tabela: [
          { espanhol: 'el vaso', parece: 'vaso', significa: 'copo' },
          { espanhol: 'la cena', parece: 'cena', significa: 'jantar' },
          { espanhol: 'la cola', parece: 'cola', significa: 'fila (e também rabo)' },
          { espanhol: 'exquisito', parece: 'esquisito', significa: 'delicioso, refinado' },
          { espanhol: 'la taza', parece: 'taça', significa: 'xícara' },
          { espanhol: 'la copa', parece: 'copa', significa: 'taça (de vinho, sobremesa)' },
        ],
        exemplos: [['Un vaso de agua, por favor.', 'Um copo de água, por favor.'], ['La cena está exquisita.', 'O jantar está delicioso.'], ['Hay mucha cola en el bar.', 'Há muita fila no bar.'], ['¿Me trae la cuenta, por favor?', 'O senhor me traz a conta, por favor?']],
        erros: [['Quiero un vaso de café.', 'Quiero una taza de café.', 'O café vai na «taza»; o «vaso» é para água ou suco.'], ['Quisiera una cena esquisita.', 'Quisiera una cena exquisita.', 'A palavra tem «x»: «exquisito», e significa delicioso.'], ['Hay mucha fila en el bar. (na Espanha)', 'Hay mucha cola en el bar.', 'Na Espanha, a fila de pessoas é «cola»; «fila» é uma linha (de cadeiras), embora na América Latina se diga «hacer fila».'], ['Quisiera un cena.', 'Quisiera una cena.', '«Cena» é feminino.']],
      }),
      dialogo(8, 'En el café / No café', 'A camareira atende Sergio e Elena num café. Eles pedem e pagam.', [
        ['La camarera', 'Buenos días. ¿Qué desean?', 'Bom dia. O que desejam?'], ['Sergio', 'Quisiera un café con leche y una tostada, por favor.', 'Eu queria um café com leite e uma torrada, por favor.'],
        ['Elena', 'Para mí, un té sin azúcar y un zumo de naranja.', 'Para mim, um chá sem açúcar e um suco de laranja.'], ['La camarera', 'Muy bien. ¿Algo más?', 'Muito bem. Algo mais?'],
        ['Sergio', 'No, nada más, gracias. ¿Nos trae la cuenta?', 'Não, mais nada, obrigado. A senhora nos traz a conta?'], ['La camarera', 'Son siete euros con cuarenta.', 'São sete euros e quarenta.'],
        ['Elena', 'Aquí tiene diez euros. Quédese con el cambio.', 'Aqui estão dez euros. Pode ficar com o troco.'],
      ]),
      producao(5, 'Encene com um amigo, em voz alta, uma cena de café: um cliente e um garçom. Use «Quisiera…», «¿Algo más?», «la cuenta» e um preço.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 8', [
      revisao(5, 'Conjugue «querer» de memória e faça três pedidos educados. Diga quatro preços com euros e céntimos.'),
      exercicios(20, [
        ouvir('Quisiera un café con leche', ['Quisiera un café con leche', 'Quiero un café solo', 'Quisiera un té con leche'], 'Quisiera un café con leche', 'Ouça «quisiera» e «con leche».'),
        ouvir('Son treinta y cinco euros', ['Son treinta y cinco euros', 'Son cuarenta y cinco euros', 'Son treinta y un euros'], 'Son treinta y cinco euros', 'Ouça a dezena «treinta» e a unidade «cinco».'),
        ouvir('La cena está exquisita', ['La cena está exquisita', 'La cola está exquisita', 'La cuenta está exquisita'], 'La cena está exquisita', 'Ouça «cena» e «exquisita».'),
        ditado('Quisiera la cuenta', 'Escreva: Quisiera la cuenta.'), ditado('Queremos dos zumos', 'Escreva: Queremos dos zumos.'), ditado('Veintiún euros', 'Escreva: Veintiún euros.'),
        mc('Qual forma de «querer» vai com «tú»?', ['quieres', 'quiere', 'queréis'], 'quieres', 'Com «tú», a terminação é «-es» e o «e» vira «ie».'),
        mc('Qual forma é correta com «nosotros»?', ['queremos', 'quieremos', 'quiremos'], 'queremos', 'Em «nosotros» e «vosotros», o «e» do radical não vira «ie».'),
        mc('Qual é a forma mais educada para pedir?', ['Quisiera un té.', 'Quiero un té.', 'Dame un té.'], 'Quisiera un té.', '«Quisiera» é mais educado que «quiero».'),
        mc('Como se escreve 45?', ['cuarenta y cinco', 'cuarenta cinco', 'cuarentaycinco'], 'cuarenta y cinco', 'De 31 a 99: dezena + y + unidade.'),
        mc('O que significa «exquisito»?', ['delicioso', 'esquisito', 'estranho'], 'delicioso', '«Exquisito» é gostoso; o estranho é «raro».'),
        mc('Como se pede água num copo?', ['un vaso de agua', 'un taza de agua', 'una copa de agua'], 'un vaso de agua', '«Vaso» é copo.'),
        lacuna('Yo ___ un café. (querer)', ['quiero', 'queremos', 'quieren'], 'quiero', 'Com «yo», «quiero».'), lacuna('Ellos ___ la cuenta. (querer)', ['quieren', 'quiere', 'queremos'], 'quieren', 'Com «ellos», «quieren».'),
        lacuna('Tengo ___ años. (vinte e um)', ['veintiún', 'veintiuno', 'veinte uno'], 'veintiún', 'Diante de substantivo masculino: «veintiún».'), lacuna('La ___ es a las nueve. (jantar)', ['cena', 'cola', 'escena'], 'cena', '«Cena» é jantar.'), lacuna('Hay mucha ___ en el bar. (fila, na Espanha)', ['cola', 'cena', 'cuenta'], 'cola', 'Na Espanha, fila de pessoas é «cola».'),
        ordem('Ordene: «Quisiera un café con leche, por favor.»', ['Quisiera', 'un', 'café', 'con', 'leche,', 'por', 'favor.'], 'Quisiera un café con leche, por favor.', 'Pedido educado completo.'), ordem('Ordene: «Son siete euros con cuarenta.»', ['Son', 'siete', 'euros', 'con', 'cuarenta.'], 'Son siete euros con cuarenta.', 'A vírgula se diz «con».'),
        livre('Escreva em espanhol: Eu queria um suco de laranja e a conta, por favor.', 'Quisiera un zumo de naranja y la cuenta, por favor.'),
      ]),
      producao(5, 'Monte, em voz alta, um pedido completo para dois amigos: duas bebidas, uma comida, o preço e a conta. Use «quisiera», «queremos» e «son… euros».'),
    ]),
  ],
});
