import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 13, titulo: 'Querer, poder, deber e tener que', nivel: 'a1',
  objetivo: 'Dizer o que você quer, pode e deve fazer com querer, poder, deber, tener que e hay que; entender os verbos em que a vogal do radical muda (e → ie, o → ue); pedir permissão, fazer pedidos e recusar com educação.',
  nota: 'Agora você pede, oferece, aceita e recusa em espanhol. Próxima aula: a rotina do dia e os verbos reflexivos («me levanto», «me acuesto»).',
  sessoes: [
    sessao('S1', 'Querer e poder', [
      revisao(5, 'Diga a primeira pessoa de seis verbos irregulares da aula 12. Depois diga uma frase com «voy a», uma com «salgo de» e uma com «veo».'),
      palavras(8, [
        ['querer', 'kerér', 'querer', ''], ['poder', 'podér', 'poder', ''], ['deber', 'debér', 'dever', ''], ['tener que', 'tenér ke', 'ter que, precisar', ''],
        ['necesitar', 'nethesitár', 'precisar', ''], ['ayudar', 'aiudár', 'ajudar', ''], ['el permiso', 'el permíso', 'a permissão', ''], ['el favor', 'el fabór', 'o favor', ''],
      ]),
      gramatica(12, 'Querer e poder: a vogal que muda', 'PASSO 1: você já usou «quiero» e «quisiera» na aula 8. Agora vai ver o verbo inteiro. Em «querer», quando a sílaba forte cai no radical, o «e» vira «ie»: quiero, quieres, quiere, quieren. PASSO 2: em «poder» acontece o mesmo com o «o», que vira «ue»: puedo, puedes, puede, pueden. PASSO 3: a mudança vale para yo, tú, él/ella/usted e ellos/ustedes. Em «nosotros» e «vosotros» a sílaba forte cai na terminação, e então o radical fica como está: queremos, queréis; podemos, podéis. Imagine uma bota que cobre quatro formas e deixa duas de fora. PASSO 4: «ie» e «ue» são ditongos: soam como uma só sílaba, «quiéro» e «puédo», sem separar as vogais. PASSO 5: depois de «querer» e «poder» vem o infinitivo, sem preposição: «Quiero comer», «Puedo ayudar». PASSO 6: «querer» + substantivo é desejar algo: «Quiero un café». Com pessoa, leva «a» (o a pessoal): «Quiero a mi abuela» quer dizer que você gosta muito dela. PASSO 7: «poder» expressa possibilidade, capacidade e permissão. Para pedir permissão: «¿Puedo entrar?». Para pedir um favor: «¿Puedes repetir?» (tú) ou «¿Puede repetir, por favor?» (usted). PASSO 8: «poder» não é o mesmo que «saber»: «Sé nadar» (aprendi a nadar) e «Hoy no puedo nadar» (hoje, por algum motivo, não consigo ou não posso).', {
        tag: 'Verbos',
        comparacao: 'em português dizemos «posso» e «quero» sem mudar a vogal em quase nenhuma forma: «posso, podes, pode, podemos, podeis, podem». Em espanhol quatro das seis formas mudam («puedo, puedes, puede, pueden»). É a parte nova, e é regular: as outras duas formas ficam como o infinitivo.',
        tabelas: [
          { titulo: 'querer e poder (quatro formas com mudança)', linhas: [
            { pronome: 'yo', querer: 'quiero', poder: 'puedo' }, { pronome: 'tú', querer: 'quieres', poder: 'puedes' }, { pronome: 'él / ella / usted', querer: 'quiere', poder: 'puede' },
            { pronome: 'nosotros', querer: 'queremos', poder: 'podemos' }, { pronome: 'vosotros', querer: 'queréis', poder: 'podéis' }, { pronome: 'ellos, ustedes', querer: 'quieren', poder: 'pueden' },
          ] },
        ],
        exemplos: [['Quiero aprender español.', 'Quero aprender espanhol.'], ['¿Quieres un café?', 'Você quer um café?'], ['No puedo venir hoy.', 'Não posso vir hoje.'], ['¿Puedo entrar?', 'Posso entrar?'], ['¿Puede repetir, por favor?', 'O senhor pode repetir, por favor?'], ['Queremos viajar en verano.', 'Queremos viajar no verão.']],
        erros: [['Yo quero un café.', 'Yo quiero un café.', 'O «e» do radical vira «ie» em «yo».'], ['Yo podo venir.', 'Yo puedo venir.', 'O «o» do radical vira «ue» em «yo».'], ['Nosotros puedemos ir.', 'Nosotros podemos ir.', 'Em «nosotros» o radical não muda.'], ['Quiero a comer.', 'Quiero comer.', 'Depois de «querer» vem o infinitivo, sem preposição.'], ['No puedo a venir.', 'No puedo venir.', 'Depois de «poder» vem o infinitivo, sem preposição.']],
      }),
      producao(5, 'Diga em voz alta o que você quer fazer no próximo fim de semana e o que você não pode fazer: «Quiero… No puedo… porque…» Use pelo menos duas formas de «querer» e duas de «poder».'),
    ]),
    sessao('S2', 'Deber, tener que, hay que e outros verbos com mudança', [
      revisao(4, 'Conjugue «querer» e «poder» de memória. Depois peça, em voz alta, três coisas a um amigo com «¿Puedes…?» e a um desconhecido com «¿Puede…?».'),
      palavras(6, [
        ['empezar', 'empethár', 'começar', ''], ['pensar', 'pensár', 'pensar, planejar', ''], ['preferir', 'preferír', 'preferir', ''], ['volver', 'bolbér', 'voltar', ''], ['dormir', 'dormír', 'dormir', ''], ['jugar', 'hugár', 'jogar, brincar', ''],
      ]),
      gramatica(12, 'Deber, tener que, hay que e a «bota» em outros verbos', 'PASSO 1: «deber» (dever) é regular: debo, debes, debe, debemos, debéis, deben. Depois dele vem o infinitivo: «Debes dormir más» (é aconselhável). PASSO 2: «tener que» + infinitivo é obrigação ou necessidade concreta: «Tengo que trabajar hoy». «Tener» tem «tengo» e muda e → ie: tengo, tienes, tiene, tenemos, tenéis, tienen. Escreve-se sempre «que»; não existe «tener de». PASSO 3: «hay que» + infinitivo é obrigação geral, sem sujeito: «Hay que pagar en la caja». A forma «hay» não muda. PASSO 4: uma regra prática: «debo» para dever moral ou conselho, «tengo que» para o que as circunstâncias exigem, «hay que» para o que vale para todos. PASSO 5: a mudança de vogal de «querer» e «poder» aparece em muitos outros verbos, com a mesma bota: e → ie (empezar: empiezo; pensar: pienso; preferir: prefiero; entender: entiendo), o → ue (volver: vuelvo; dormir: duermo; encontrar: encuentro; costar: cuesta) e u → ue (jugar: juego, juegas, juega, jugamos, jugáis, juegan). PASSO 6: use-os com as estruturas: «empezar a + infinitivo» (começar a fazer algo), «pensar + infinitivo» (ter a intenção de), «volver a + infinitivo» (fazer de novo), «preferir + infinitivo», «jugar al + esporte» (jugar al fútbol, al tenis). PASSO 7: nem todo verbo muda a vogal. «Comer», «vivir», «hablar» e «salir» não mudam; a lista dos que mudam você vai aprendendo aos poucos. Quando em dúvida, ouça: é o que o dicionário indica com «(ie)» ou «(ue)».', {
        tag: 'Verbos',
        comparacao: 'o português também tem verbos que alternam a vogal («durmo, dormes»). Em espanhol a mudança é mais frequente e segue sempre o mesmo desenho. «Tener que» corresponde a «ter que» ou «ter de», mas só se usa «que». «Hay que» corresponde a «é preciso» ou «tem que».',
        tabelas: [
          { titulo: 'Verbos com mudança de vogal (yo, tú, nosotros)', linhas: [
            { infinitivo: 'empezar (e → ie)', yo: 'empiezo', tu: 'empiezas', nosotros: 'empezamos' },
            { infinitivo: 'pensar (e → ie)', yo: 'pienso', tu: 'piensas', nosotros: 'pensamos' },
            { infinitivo: 'preferir (e → ie)', yo: 'prefiero', tu: 'prefieres', nosotros: 'preferimos' },
            { infinitivo: 'volver (o → ue)', yo: 'vuelvo', tu: 'vuelves', nosotros: 'volvemos' },
            { infinitivo: 'dormir (o → ue)', yo: 'duermo', tu: 'duermes', nosotros: 'dormimos' },
            { infinitivo: 'jugar (u → ue)', yo: 'juego', tu: 'juegas', nosotros: 'jugamos' },
          ] },
          { titulo: 'Obrigação e conselho', linhas: [
            { estrutura: 'tener que + infinitivo', sentido: 'obrigação concreta', exemplo: 'Tengo que estudiar.' },
            { estrutura: 'deber + infinitivo', sentido: 'dever, conselho', exemplo: 'Debes descansar.' },
            { estrutura: 'hay que + infinitivo', sentido: 'obrigação geral', exemplo: 'Hay que llegar pronto.' },
          ] },
        ],
        exemplos: [['La clase empieza a las nueve.', 'A aula começa às nove.'], ['Pienso viajar en agosto.', 'Penso em viajar em agosto.'], ['Prefiero el té.', 'Prefiero o chá.'], ['Duermo ocho horas.', 'Durmo oito horas.'], ['Juego al tenis los domingos.', 'Jogo tênis aos domingos.']],
        erros: [['Tengo de trabajar.', 'Tengo que trabajar.', 'A obrigação se faz com «tener que».'], ['Empezo a trabajar a las ocho.', 'Empiezo a trabajar a las ocho.', 'O «e» do radical vira «ie» em «yo».'], ['Nosotros duermimos ocho horas.', 'Nosotros dormimos ocho horas.', 'Em «nosotros» o radical não muda.'], ['Jugo al fútbol.', 'Juego al fútbol.', '«Jugar» muda u → ue.'], ['Hay que yo estudiar.', 'Hay que estudiar.', '«Hay que» é impessoal e não tem sujeito.']],
      }),
      producao(8, 'Diga em voz alta o que você tem que fazer esta semana (três frases com «tengo que»), o que você deve fazer pela saúde (duas com «debo») e o que você prefere fazer no tempo livre (duas com «prefiero»).'),
    ]),
    sessao('S3', 'Pedir, oferecer, aceitar e recusar', [
      revisao(4, 'Diga a diferença entre «tengo que», «debo» e «hay que» com uma frase para cada.'),
      palavras(5, [
        ['claro', 'kláro', 'claro, é claro', ''], ['vale', 'bále', 'está bem, combinado (Espanha)', ''], ['lo siento', 'lo siénto', 'sinto muito, desculpe', ''], ['de acuerdo', 'de akuérdo', 'de acordo', ''], ['ahora mismo', 'aóra mísmo', 'agora mesmo', ''],
      ]),
      gramatica(8, 'Fórmulas de cortesia com querer e poder', 'PASSO 1: para pedir permissão, use «¿Puedo + infinitivo?»: «¿Puedo pasar?», «¿Puedo sentarme aquí?». PASSO 2: para pedir um favor a alguém: «¿Puedes + infinitivo?» (tú), «¿Puede + infinitivo?» (usted), «¿Podéis + infinitivo?» (vosotros, Espanha). PASSO 3: para oferecer: «¿Quieres un café?», «¿Quiere agua?» (usted). PASSO 4: para aceitar: «Sí, claro», «Vale» (muito usado na Espanha; na América Latina, «dale», «bueno» ou «de acuerdo» aparecem mais). PASSO 5: para recusar com delicadeza: «Lo siento, no puedo. Tengo que trabajar». Dê o motivo. PASSO 6: para pedir algo no tom mais suave, use «quisiera» (aula 8) ou «me gustaría», que você verá em A2: «Quisiera un café, por favor». PASSO 7: atenção a «esperar»: serve para aguardar («Espero el autobús») e também para ter esperança. Frases como «Espero que vengas» pedem o subjuntivo e ficam para o B1.', {
        tag: 'Pedidos',
        comparacao: 'em português dizemos «posso entrar?» e «você pode repetir?» com a mesma estrutura. A diferença é que, em espanhol, o tratamento («tú» ou «usted») muda a forma do verbo: «¿Puedes ayudar?» (tú) e «¿Puede ayudar?» (usted).',
        tabela: [
          { situacao: 'pedir permissão', formula: '¿Puedo + infinitivo?', exemplo: '¿Puedo abrir la ventana?' },
          { situacao: 'pedir um favor (tú)', formula: '¿Puedes + infinitivo?', exemplo: '¿Puedes ayudar a mi hermano?' },
          { situacao: 'pedir um favor (usted)', formula: '¿Puede + infinitivo?', exemplo: '¿Puede repetir, por favor?' },
          { situacao: 'oferecer', formula: '¿Quieres / Quiere + substantivo?', exemplo: '¿Quieres un café?' },
          { situacao: 'aceitar', formula: 'Sí, claro. / Vale. / De acuerdo.', exemplo: 'Vale, ahora mismo.' },
          { situacao: 'recusar', formula: 'Lo siento, no puedo. Tengo que…', exemplo: 'Lo siento, no puedo. Tengo que estudiar.' },
        ],
        erros: [['Puedo abrir la ventana?', '¿Puedo abrir la ventana?', 'A pergunta abre com «¿».'], ['¿Puedo abrir la ventana? (pedindo ao outro que abra)', '¿Puedes abrir la ventana?', '«Puedo» é você quem pode; para pedir ao outro, use «puedes» ou «puede».'], ['No quiero ir porque tengo que de trabajar.', 'No quiero ir porque tengo que trabajar.', 'Sem «de» depois de «tener que».'], ['Vale, lo siento.', 'Lo siento, no puedo.', '«Vale» aceita; para recusar, desculpe-se e explique.']],
      }),
      texto(8, 'Un sábado difícil / Um sábado difícil', 'Los sábados quiero descansar, pero casi nunca puedo. Esta semana tengo que preparar una clase y mi hermana quiere ir al cine. Prefiero descansar en casa, pero debo ayudar a mi madre con la compra. Por la tarde pienso volver pronto y dormir un poco. Mi amigo Daniel dice que hay que salir más, y tiene razón. El domingo, por fin, puedo descansar.', 'Aos sábados quero descansar, mas quase nunca posso. Esta semana tenho que preparar uma aula e minha irmã quer ir ao cinema. Prefiro descansar em casa, mas devo ajudar minha mãe com as compras. À tarde pretendo voltar cedo e dormir um pouco. Meu amigo Daniel diz que é preciso sair mais, e tem razão. No domingo, finalmente, posso descansar.', [
        ['¿Qué quiere hacer la persona los sábados?', 'Descansar.'], ['¿Qué tiene que preparar esta semana?', 'Una clase.'], ['¿Qué quiere hacer su hermana?', 'Ir al cine.'], ['¿A quién debe ayudar?', 'A su madre.'], ['¿Qué dice Daniel?', 'Que hay que salir más.'],
      ]),
      producao(5, 'Escreva e diga em voz alta cinco frases sobre o seu sábado: o que você quer, o que você pode e o que você tem que fazer. Use «pero» ao menos uma vez.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 13', [
      revisao(5, 'Diga a forma de «yo» de seis verbos com mudança de vogal: querer, poder, empezar, volver, dormir e jugar. Depois recuse um convite com educação e dê o motivo.'),
      exercicios(20, [
        ouvir('Quiero un café, por favor', ['Quiero un café, por favor', 'Quieres un café, por favor', 'Queremos un café, por favor'], 'Quiero un café, por favor', 'Ouça o «ie» de «quiero» e a terminação «-o».'),
        ouvir('No puedo venir hoy', ['No puedo venir hoy', 'No puedes venir hoy', 'No podemos venir hoy'], 'No puedo venir hoy', 'Ouça o «ue» de «puedo».'),
        ouvir('Tengo que estudiar', ['Tengo que estudiar', 'Tienes que estudiar', 'Tenemos que estudiar'], 'Tengo que estudiar', 'Ouça «tengo»: é a forma de «yo».'),
        ditado('¿Puedo entrar?', 'Escreva: ¿Puedo entrar? Com os dois sinais de pergunta.'),
        ditado('Prefiero el té', 'Escreva: Prefiero el té.'),
        ditado('Hay que llegar pronto', 'Escreva: Hay que llegar pronto.'),
        mc('Qual é a forma de «tú» de «querer»?', ['quieres', 'queres', 'quiere'], 'quieres', 'Com «tú», o «e» vira «ie» e a terminação é «-es».'),
        mc('Qual é a forma de «nosotros» de «poder»?', ['podemos', 'puedemos', 'pueden'], 'podemos', 'Em «nosotros» o radical não muda.'),
        mc('Como se diz «Tenho que trabalhar»?', ['Tengo que trabajar.', 'Tengo de trabajar.', 'Tengo trabajar.'], 'Tengo que trabajar.', 'A estrutura é sempre «tener que + infinitivo».'),
        mc('Qual frase usa «hay que» corretamente?', ['Hay que llegar pronto.', 'Hay que yo llegar pronto.', 'Hay que llego pronto.'], 'Hay que llegar pronto.', '«Hay que» é impessoal e pede o infinitivo.'),
        mc('Como se pede a um desconhecido (usted) que repita?', ['¿Puede repetir, por favor?', '¿Puedes repetir, por favor?', '¿Puedo repetir, por favor?'], '¿Puede repetir, por favor?', 'Com «usted», o verbo vai na terceira pessoa: «puede».'),
        mc('Qual frase está correta?', ['Duermo ocho horas.', 'Dormo ocho horas.', 'Duermimos ocho horas.'], 'Duermo ocho horas.', '«Dormir» muda o → ue em «yo».'),
        lacuna('Yo ___ viajar en agosto. (querer)', ['quiero', 'quero', 'quiere'], 'quiero', '«Querer» muda e → ie em «yo».'),
        lacuna('La clase ___ a las nueve. (empezar)', ['empieza', 'empeza', 'empezamos'], 'empieza', '«Empezar» muda e → ie na terceira pessoa.'),
        lacuna('Ellos ___ al fútbol los domingos. (jugar)', ['juegan', 'jugamos', 'juga'], 'juegan', '«Jugar» muda u → ue; o «al» vem na frase.'),
        lacuna('Hoy no ___ venir. (yo, poder)', ['puedo', 'podo', 'puede'], 'puedo', '«Poder» muda o → ue em «yo».'),
        lacuna('¿___ un café? (tú, querer)', ['Quieres', 'Quieren', 'Queres'], 'Quieres', 'Com «tú», a forma é «quieres».'),
        ordem('Ordene: «Tengo que estudiar esta tarde.»', ['Tengo', 'que', 'estudiar', 'esta', 'tarde.'], 'Tengo que estudiar esta tarde.', '«Tener que» e depois o infinitivo.'),
        ordem('Ordene: «Lo siento, no puedo venir.»', ['Lo', 'siento,', 'no', 'puedo', 'venir.'], 'Lo siento, no puedo venir.', 'O «no» vem antes do verbo conjugado.'),
        livre('Escreva em espanhol: Quero descansar, mas hoje tenho que trabalhar.', 'Quiero descansar, pero hoy tengo que trabajar.'),
        lacuna('Nosotros ___ ir al cine. (querer)', ['quieren', 'quieremos', 'queremos'], 'queremos', 'Em «nosotros» não há mudança de vogal: «queremos».'),
        lacuna('Ella ___ estudiar más. (deber)', ['debe', 'deben', 'debes'], 'debe', '«Deber» é regular; com «ella», «debe».'),
        lacuna('Tú ___ a casa a las seis. (volver)', ['volves', 'vuelves', 'vueles'], 'vuelves', 'O «o» vira «ue» com «tú»: «vuelves».'),
        lacuna('Tengo ___ llamar a mi madre. (que)', ['de', 'a', 'que'], 'que', 'A obrigação se diz «tener que» + infinitivo.'),
        mc('Como se pede a um amigo que abra a janela?', ['¿Puedo abrir la ventana?', '¿Abres puedes la ventana?', '¿Puedes abrir la ventana?'], '¿Puedes abrir la ventana?', '«¿Puedes + infinitivo?» pede um favor ao outro.'),
        mc('Qual é a forma de «ellos» de «dormir»?', ['duermen', 'dormen', 'duermían'], 'duermen', 'O «o» vira «ue» em «ellos».'),
        mc('Qual expressão indica obrigação geral, sem sujeito?', ['tengo que', 'debo', 'hay que'], 'hay que', '«Hay que» + infinitivo vale para todos.'),
        ordem('Ordene: «Lo siento, no puedo, tengo que trabajar.»', ['Lo', 'siento,', 'no', 'puedo,', 'tengo', 'que', 'trabajar.'], 'Lo siento, no puedo, tengo que trabajar.', 'Recusa educada com o motivo.'),
        livre('Escreva em espanhol: Quero dormir, mas tenho que estudar.', 'Quiero dormir, pero tengo que estudiar.'),
        livre('Escreva em espanhol: Podemos jogar futebol no domingo.', 'Podemos jugar al fútbol el domingo.'),
      ]),
      producao(5, 'Convide um amigo, em voz alta, para um programa e responda ao convite dele: aceite o primeiro e recuse o segundo, explicando o motivo.'),
    ]),
  ],
});
