import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 12, titulo: 'Verbos irregulares essenciais', nivel: 'a1',
  objetivo: 'Usar no presente os verbos mais frequentes que fogem do padrão: ir, hacer, poner, salir, venir, decir, dar, ver e saber, e distinguir ver de mirar, decir de hablar e saber + infinitivo.',
  nota: 'Você já fala do seu dia com os verbos que mais aparecem no espanhol real. Próxima aula: querer, poder, deber e tener que, para dizer o que você quer, pode e precisa fazer.',
  sessoes: [
    sessao('S1', 'Ir, hacer, poner e salir', [
      revisao(5, 'Conjugue «tener» e «ser» de memória, de «yo» a «ellos». Depois diga a sua idade e a sua profissão em uma frase só.'),
      palavras(8, [
        ['ir', 'ir', 'ir', ''], ['hacer', 'athér', 'fazer', ''], ['poner', 'ponér', 'pôr, colocar', ''], ['salir', 'salír', 'sair', ''],
        ['la compra', 'la kómpra', 'as compras do dia a dia (mercado)', ''], ['el deporte', 'el depórte', 'o esporte', ''], ['los deberes', 'los debéres', 'a lição de casa (Espanha; na América Latina, «la tarea»)', ''], ['la mesa', 'la mésa', 'a mesa', ''],
      ]),
      gramatica(12, 'Ir, hacer, poner e salir no presente', 'PASSO 1: até aqui você conjugou verbos que seguem um padrão. Alguns dos verbos mais usados fogem dele. Eles não são «difíceis»: são poucos, e você vai ouvi-los o tempo todo. PASSO 2: «ir» (ir) é completamente diferente do infinitivo: voy, vas, va, vamos, vais, van. PASSO 3: depois de «ir» o lugar vem com «a»: «Voy a Madrid», «Vamos a la playa». Se o artigo é «el», a junção é obrigatória: a + el = «al»: «Voy al cine», não «a el cine». PASSO 4: para perguntar o destino, use «¿Adónde vas?» («para onde você vai?»). Para o meio de transporte, use «en»: «Voy en metro», «Voy en coche»; e «a pie» para ir andando. PASSO 5: «hacer», «poner» e «salir» são regulares em todas as pessoas, menos em «yo», que ganha um «g»: hago, pongo, salgo. Os outros: haces, hace, hacemos, hacéis, hacen; pones, pone, ponemos, ponéis, ponen; sales, sale, salimos, salís, salen. PASSO 6: use «hacer» para atividades: «hacer la compra», «hacer deporte», «hacer los deberes», «hacer una pregunta». Para o tempo, «hace calor», «hace frío». PASSO 7: «poner» é pôr ou colocar: «poner la mesa» é pôr a mesa. Já «salir» pede «de» para o lugar de onde se sai («Salgo de casa»), e «con» para a companhia («Salgo con Ana»). PASSO 8: pronúncia: o «h» de «hago» e «hacer» não soa, o «g» de «hago» é duro (ágo), e o «c» de «hacer» é o «th» da Espanha (athér). Na América Latina, «hacer» soa «asér».', {
        tag: 'Verbos',
        comparacao: 'o português também tem formas irregulares na primeira pessoa: «faço, ponho, saio». O espanhol faz o mesmo, mas com «g»: «hago, pongo, salgo». Como o «g» não existe em «faço», «ponho» e «saio», é fácil esquecê-lo. O verbo «ir» também muda de raiz, como em «vou, vais, vai», mas as formas espanholas são «voy, vas, va».',
        tabelas: [
          { titulo: 'ir (ir)', linhas: [
            { pronome: 'yo', forma: 'voy', exemplo: 'Voy al trabajo en metro.' },
            { pronome: 'tú', forma: 'vas', exemplo: '¿Adónde vas?' },
            { pronome: 'él / ella / usted', forma: 'va', exemplo: 'Usted va a casa.' },
            { pronome: 'nosotros, nosotras', forma: 'vamos', exemplo: 'Vamos a la playa.' },
            { pronome: 'vosotros, vosotras', forma: 'vais', exemplo: '¿Vais al cine?' },
            { pronome: 'ellos, ellas, ustedes', forma: 'van', exemplo: 'Mis padres van a Valencia.' },
          ] },
          { titulo: 'hacer, poner, salir: só o «yo» é irregular', linhas: [
            { pronome: 'yo', hacer: 'hago', poner: 'pongo', salir: 'salgo' },
            { pronome: 'tú', hacer: 'haces', poner: 'pones', salir: 'sales' },
            { pronome: 'él / ella / usted', hacer: 'hace', poner: 'pone', salir: 'sale' },
            { pronome: 'nosotros', hacer: 'hacemos', poner: 'ponemos', salir: 'salimos' },
            { pronome: 'vosotros', hacer: 'hacéis', poner: 'ponéis', salir: 'salís' },
            { pronome: 'ellos, ustedes', hacer: 'hacen', poner: 'ponen', salir: 'salen' },
          ] },
        ],
        exemplos: [['Hago la compra los sábados.', 'Faço as compras aos sábados.'], ['Pongo la mesa para la cena.', 'Ponho a mesa para o jantar.'], ['Salgo de casa a las ocho.', 'Saio de casa às oito.'], ['Vamos al cine el viernes.', 'Vamos ao cinema na sexta-feira.']],
        erros: [['Yo hazo deporte.', 'Yo hago deporte.', 'Em «yo», o «c» vira «g»: hago, nunca «hazo».'], ['Yo pono la mesa.', 'Yo pongo la mesa.', 'A forma de «yo» de «poner» é «pongo».'], ['Yo salo a las ocho.', 'Yo salgo a las ocho.', 'A forma de «yo» de «salir» é «salgo».'], ['Voy en Madrid.', 'Voy a Madrid.', 'O destino pede «a»; «en» indica onde se está.'], ['Vamos a el cine.', 'Vamos al cine.', 'a + el se junta em «al».']],
      }),
      producao(5, 'Diga em voz alta o que você faz em três dias da semana: «El lunes voy a… Hago… Salgo…» Use «ir», «hacer» e «salir» em cada dia.'),
    ]),
    sessao('S2', 'Venir, decir, dar, ver e saber', [
      revisao(4, 'Conjugue «ir» de memória e diga uma frase com «hago», uma com «pongo» e uma com «salgo».'),
      palavras(6, [
        ['venir', 'benír', 'vir', ''], ['decir', 'dethír', 'dizer', ''], ['dar', 'dar', 'dar', ''], ['ver', 'ber', 'ver', ''], ['saber', 'sabér', 'saber', ''], ['el regalo', 'el regálo', 'o presente, o presente de aniversário', ''],
      ]),
      gramatica(12, 'Cinco verbos que você usa todo dia', 'PASSO 1: «venir» (vir) segue dois movimentos ao mesmo tempo: em «yo» ganha o «g» (vengo) e, em tú, él e ellos, o «e» do radical vira «ie»: vengo, vienes, viene, venimos, venís, vienen. A mudança «e → ie» será explicada com calma na aula 13. PASSO 2: «decir» (dizer) tem «yo digo» e muda «e → i» nas formas fortes: digo, dices, dice, decimos, decís, dicen. PASSO 3: «dar» (dar) é regular, menos em «yo»: doy, das, da, damos, dais, dan. Repare no «-oy», igual a «voy» e «estoy». PASSO 4: «ver» (ver): veo, ves, ve, vemos, veis, ven. Só o «yo» é irregular, e as demais formas não têm acento. PASSO 5: «saber» (saber): sé, sabes, sabe, sabemos, sabéis, saben. O «sé» leva acento para não ser confundido com o pronome «se» («Se llama Ana»). PASSO 6: «saber» + infinitivo quer dizer «saber fazer algo» (uma habilidade aprendida): «Sé cocinar», «No sé nadar». Com um fato: «Sé que vives en Sevilla». PASSO 7: para fixar, memorize a primeira pessoa destes verbos como uma lista: voy, hago, pongo, salgo, vengo, digo, doy, veo, sé, e também tengo e estoy, que você já conhece. PASSO 8: pronúncia: «vengo» soa «bénggo», com «g» duro; «digo» soa «dígo»; «veo» tem duas vogais separadas (bé-o).', {
        tag: 'Verbos',
        comparacao: 'em português dizemos «venho, digo, dou, vejo, sei». As formas espanholas «vengo, digo, doy, veo, sé» são bem próximas, o que ajuda, mas atenção ao «g» de «vengo» e ao acento de «sé». Em português o verbo «vir» não leva «g»: «venho», com «nh»; em espanhol a forma é «vengo».',
        tabelas: [
          { titulo: 'venir e decir', linhas: [
            { pronome: 'yo', venir: 'vengo', decir: 'digo' }, { pronome: 'tú', venir: 'vienes', decir: 'dices' }, { pronome: 'él / ella / usted', venir: 'viene', decir: 'dice' },
            { pronome: 'nosotros', venir: 'venimos', decir: 'decimos' }, { pronome: 'vosotros', venir: 'venís', decir: 'decís' }, { pronome: 'ellos, ustedes', venir: 'vienen', decir: 'dicen' },
          ] },
          { titulo: 'dar, ver e saber', linhas: [
            { pronome: 'yo', dar: 'doy', ver: 'veo', saber: 'sé' }, { pronome: 'tú', dar: 'das', ver: 'ves', saber: 'sabes' }, { pronome: 'él / ella / usted', dar: 'da', ver: 've', saber: 'sabe' },
            { pronome: 'nosotros', dar: 'damos', ver: 'vemos', saber: 'sabemos' }, { pronome: 'vosotros', dar: 'dais', ver: 'veis', saber: 'sabéis' }, { pronome: 'ellos, ustedes', dar: 'dan', ver: 'ven', saber: 'saben' },
          ] },
        ],
        exemplos: [['¿Vienes a mi casa el sábado?', 'Você vem à minha casa no sábado?'], ['Digo la verdad.', 'Digo a verdade.'], ['Doy un regalo a mi hermana.', 'Dou um presente à minha irmã.'], ['No veo bien sin gafas.', 'Não vejo bem sem óculos.'], ['Sé cocinar paella.', 'Sei cozinhar paella.']],
        erros: [['Yo sabo cocinar.', 'Yo sé cocinar.', '«Saber» tem a forma irregular «sé» em «yo».'], ['Tú viene hoy.', 'Tú vienes hoy.', 'Com «tú», a forma é «vienes».'], ['Yo da un regalo.', 'Yo doy un regalo.', 'A forma de «yo» de «dar» é «doy».'], ['Tú dis la verdad.', 'Tú dices la verdad.', 'Com «tú», a forma é «dices».'], ['Yo se la respuesta.', 'Yo sé la respuesta.', '«Sé» (saber) leva acento; «se» sem acento é outro pronome.']],
      }),
      producao(8, 'Diga seis frases, uma com cada verbo: «Vengo de… Digo que… Doy… Veo… Sé…» Use fatos verdadeiros sobre você, por exemplo «Sé cocinar», «Veo series por la noche».'),
    ]),
    sessao('S3', 'Usos e armadilhas', [
      revisao(4, 'Diga a primeira pessoa («yo») de cada um dos verbos: ir, hacer, poner, salir, venir, decir, dar, ver, saber.'),
      palavras(5, [
        ['la película', 'la pelíkula', 'o filme', ''], ['la tele', 'la téle', 'a TV', ''], ['la verdad', 'la berdád', 'a verdade', ''], ['la mentira', 'la mentíra', 'a mentira', ''], ['un paseo', 'un paséo', 'um passeio', ''],
      ]),
      gramatica(8, 'Ver × mirar, decir × hablar e saber + infinitivo', 'PASSO 1: «ver» é perceber com os olhos ou assistir: «Veo una película», «Veo la tele». «Mirar» é olhar com atenção, dirigir os olhos para algo: «Miro el mapa», «Miro por la ventana». PASSO 2: «decir» é dizer algo a alguém: «Digo la verdad». «Hablar» é falar um idioma ou conversar: «Hablo español», «Hablamos de música». Não troque os dois: «Digo español» não existe. PASSO 3: «saber + infinitivo» é habilidade aprendida: «Sé conducir». Para dizer que algo é possível naquele momento, use «poder» (aula 13). PASSO 4: expressões fixas com «dar»: «dar un paseo» (passear), «dar las gracias» (agradecer), «dar la mano» (cumprimentar com a mão). PASSO 5: para dizer que conhece uma pessoa ou um lugar, não se usa «saber»; use «conocer» (conhecer), que você verá mais adiante. Para fatos e informações, «saber»: «Sé tu nombre». PASSO 6: falso amigo importante: «asistir» em espanhol é «estar presente»: «asistir a clase», «asistir a un concierto». Para «assistir a um filme», use «ver una película».', {
        tag: 'Verbos',
        comparacao: 'em português «ver» e «olhar» também se distinguem, mas «assistir» é muito usado para filme e série. Em espanhol, «asistir» é estar presente num evento («asisto a la reunión»), e o filme se «vê» («veo una película»). A mesma ideia vale para «dizer» e «falar»: em português se diz «falar a verdade», mas em espanhol dizemos «decir la verdad».',
        tabela: [
          { verbo: 'ver', sentido: 'perceber, assistir (TV, filme)', exemplo: 'Veo una serie.' },
          { verbo: 'mirar', sentido: 'olhar com atenção', exemplo: 'Miro la hora.' },
          { verbo: 'decir', sentido: 'dizer algo a alguém', exemplo: 'Digo la verdad.' },
          { verbo: 'hablar', sentido: 'falar um idioma, conversar', exemplo: 'Hablo con Ana.' },
          { verbo: 'saber + infinitivo', sentido: 'saber fazer algo', exemplo: 'Sé nadar.' },
          { verbo: 'asistir a', sentido: 'estar presente (aula, reunião)', exemplo: 'Asisto a clase.' },
        ],
        erros: [['Hablo la verdad.', 'Digo la verdad.', 'Para dizer um fato, use «decir».'], ['Asisto una película.', 'Veo una película.', '«Asistir a» é estar presente em um evento; o filme se «vê».'], ['Veo por la ventana.', 'Miro por la ventana.', 'Para dirigir o olhar com atenção, use «mirar».'], ['No puedo nadar. (não aprendi)', 'No sé nadar.', 'Habilidade que se aprende pede «saber».']],
      }),
      dialogo(8, 'Planes para esta tarde / Planos para esta tarde', 'Lucía e Pablo falam do que vão fazer hoje.', [
        ['Lucía', 'Hola, Pablo. ¿Qué haces hoy?', 'Oi, Pablo. O que você faz hoje?'],
        ['Pablo', 'Hola, Lucía. Hago la compra y después voy al gimnasio. ¿Y tú?', 'Oi, Lucía. Faço as compras e depois vou à academia. E você?'],
        ['Lucía', 'Salgo del trabajo a las seis. ¿Vienes al cine con nosotros?', 'Saio do trabalho às seis. Você vem ao cinema com a gente?'],
        ['Pablo', '¿Qué película ponen?', 'Que filme estão passando?'],
        ['Lucía', 'Una película española. Carmen dice que es muy buena.', 'Um filme espanhol. A Carmen diz que é muito bom.'],
        ['Pablo', '¿A qué hora es?', 'A que horas é?'],
        ['Lucía', 'A las ocho. Yo voy en metro.', 'Às oito. Eu vou de metrô.'],
        ['Pablo', 'Vale, voy también. Hasta luego.', 'Está bem, eu também vou. Até logo.'],
      ]),
      producao(5, 'Convide um amigo para um plano em voz alta: «¿Vienes a…? Salgo a las… Veo… Voy en…» Depois responda ao convite com «Vale, voy» ou diga que não pode.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 12', [
      revisao(5, 'Diga a primeira pessoa de nove verbos irregulares sem olhar a tabela. Depois diga a forma de «nosotros» de três deles.'),
      exercicios(20, [
        ouvir('Voy al cine con Ana', ['Voy al cine con Ana', 'Vas al cine con Ana', 'Van al cine con Ana'], 'Voy al cine con Ana', 'Ouça o «voy» do começo: é a primeira pessoa.'),
        ouvir('Salgo de casa a las ocho', ['Salgo de casa a las ocho', 'Sale de casa a las ocho', 'Salimos de casa a las ocho'], 'Salgo de casa a las ocho', 'Ouça o «g» de «salgo».'),
        ouvir('¿Vienes con nosotros?', ['¿Vienes con nosotros?', '¿Vienen con nosotros?', '¿Venís con nosotros?'], '¿Vienes con nosotros?', 'Ouça o «s» final de «vienes».'),
        ditado('Hago la compra los sábados', 'Escreva: Hago la compra los sábados.'),
        ditado('No sé nadar', 'Escreva: No sé nadar. O «sé» leva acento.'),
        ditado('Digo la verdad', 'Escreva: Digo la verdad.'),
        mc('Qual é a forma de «yo» de «poner»?', ['pongo', 'pono', 'pone'], 'pongo', 'Em «yo», ganha o «g»: pongo.'),
        mc('Qual é a forma de «nosotros» de «ir»?', ['vamos', 'vais', 'van'], 'vamos', 'Com «nosotros», a forma é «vamos».'),
        mc('Como se diz «Eu sei cozinhar»?', ['Sé cocinar.', 'Sabo cocinar.', 'Se cocinar.'], 'Sé cocinar.', '«Sé» é a forma de «yo» de «saber» e leva acento.'),
        mc('Qual frase está correta?', ['Voy al cine.', 'Voy a el cine.', 'Voy en el cine.'], 'Voy al cine.', 'a + el = al.'),
        mc('Como se diz «Assisto a um filme»?', ['Veo una película.', 'Asisto una película.', 'Miro a una película.'], 'Veo una película.', 'Filme se «vê»; «asistir a» é estar presente em um evento.'),
        mc('Qual verbo se usa em «___ la verdad»?', ['Digo', 'Hablo', 'Veo'], 'Digo', 'Para dizer um fato, use «decir».'),
        lacuna('Yo ___ un regalo a mi hermana. (dar)', ['doy', 'da', 'das'], 'doy', 'A forma de «yo» de «dar» é «doy».'),
        lacuna('¿Tú ___ a mi casa? (venir)', ['vienes', 'viene', 'vengo'], 'vienes', 'Com «tú», a forma é «vienes».'),
        lacuna('Ellos ___ la mesa. (poner)', ['ponen', 'pone', 'pongo'], 'ponen', 'Com «ellos», a terminação é «-en».'),
        lacuna('Nosotros ___ de casa a las siete. (salir)', ['salimos', 'salgo', 'salen'], 'salimos', 'Com «nosotros», a forma é «salimos».'),
        lacuna('¿___ vas? (para onde)', ['Adónde', 'Dónde', 'Cuándo'], 'Adónde', '«Adónde» pergunta o destino.'),
        ordem('Ordene: «Hago la compra los sábados.»', ['Hago', 'la', 'compra', 'los', 'sábados.'], 'Hago la compra los sábados.', 'Verbo, complemento e tempo, como em português.'),
        ordem('Ordene: «¿Adónde vas hoy?»', ['¿Adónde', 'vas', 'hoy?'], '¿Adónde vas hoy?', 'O interrogativo abre a pergunta.'),
        livre('Escreva em espanhol: Eu vou ao cinema e depois saio com Ana.', 'Voy al cine y después salgo con Ana.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, o que você faz, para onde vai e o que vê em um dia comum, com cinco verbos desta aula.'),
    ]),
  ],
});
