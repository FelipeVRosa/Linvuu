import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 14, titulo: 'Rotina e verbos reflexivos', nivel: 'a1',
  objetivo: 'Descrever a rotina do dia com os verbos reflexivos (levantarse, ducharse, acostarse…), colocar os pronomes me, te, se, nos, os, se no lugar certo e usar as refeições, os horários e os marcadores de sequência e de frequência.',
  nota: 'Você conta o seu dia do despertar ao deitar. Próxima aula: compras, roupas, cores e os demonstrativos «este» e «ese».',
  sessoes: [
    sessao('S1', 'Os verbos reflexivos', [
      revisao(5, 'Diga as horas de cinco momentos do seu dia («a las siete», «a las ocho y media») e conjugue «poder» e «querer» de memória.'),
      palavras(8, [
        ['despertarse', 'despertárse', 'acordar', ''], ['levantarse', 'levantárse', 'levantar-se', ''], ['ducharse', 'dutchárse', 'tomar banho (de chuveiro)', ''], ['vestirse', 'bestírse', 'vestir-se', ''],
        ['lavarse', 'labárse', 'lavar-se', ''], ['peinarse', 'peinárse', 'pentear-se', ''], ['acostarse', 'akostárse', 'ir para a cama, deitar-se', ''], ['dormirse', 'dormírse', 'adormecer', ''],
      ]),
      gramatica(12, 'Os verbos reflexivos e os pronomes me, te, se, nos, os, se', 'PASSO 1: um verbo reflexivo é aquele em que a ação volta para quem a faz: eu lavo a mim mesmo, eu me levanto. No infinitivo, ele termina em «-se»: «levantarse», «ducharse». PASSO 2: na frase, cada pessoa tem o seu pronome, que fica ANTES do verbo conjugado: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. PASSO 3: o pronome concorda com o sujeito: «Yo me levanto», «Nosotros nos levantamos». Não se pode dizer «yo se levanta». PASSO 4: «ducharse» e «lavarse» são regulares. Mas alguns reflexivos mudam a vogal, como vimos na aula 13: acostarse (me acuesto), despertarse (me despierto), dormirse (me duermo) e, com e → i, vestirse (me visto, te vistes, se viste, nos vestimos, os vestís, se visten). PASSO 5: com outro verbo, o pronome pode ficar antes do verbo conjugado ou grudado no infinitivo, sem hífen: «Me quiero levantar» ou «Quiero levantarme»; «Tengo que ducharme» ou «Me tengo que duchar». Escolha a que soar mais natural a você. PASSO 6: com negação, o «no» vem antes do pronome: «No me levanto temprano». PASSO 7: partes do corpo e roupas levam o artigo, e não o possessivo: «Me lavo las manos», «Me peino el pelo». PASSO 8: muitos verbos mudam de sentido com o pronome: «lavar» (lavar uma coisa) e «lavarse» (lavar-se); «acostar» (deitar outra pessoa) e «acostarse» (ir para a cama); «dormir» (dormir) e «dormirse» (pegar no sono).', {
        tag: 'Reflexivos',
        comparacao: 'em português também há verbos pronominais («levantar-se», «deitar-se»), mas na fala é comum omitir o pronome («eu levanto às sete»). Quando ele aparece, costuma ficar antes do verbo na fala («eu me levanto») e depois dele com hífen na escrita formal. Em espanhol o pronome é obrigatório e vem antes do verbo conjugado: «me levanto», nunca «levanto». Sem ele, a frase fica errada ou muda de sentido.',
        tabelas: [
          { titulo: 'levantarse (regular)', linhas: [
            { pronome: 'yo', forma: 'me levanto', exemplo: 'Me levanto a las siete.' }, { pronome: 'tú', forma: 'te levantas', exemplo: '¿A qué hora te levantas?' }, { pronome: 'él / ella / usted', forma: 'se levanta', exemplo: 'Ella se levanta pronto.' },
            { pronome: 'nosotros', forma: 'nos levantamos', exemplo: 'Nos levantamos tarde.' }, { pronome: 'vosotros', forma: 'os levantáis', exemplo: '¿Os levantáis temprano?' }, { pronome: 'ellos, ustedes', forma: 'se levantan', exemplo: 'Se levantan a las ocho.' },
          ] },
          { titulo: 'Três reflexivos com mudança na vogal', linhas: [
            { pronome: 'yo', acostarse: 'me acuesto', vestirse: 'me visto', despertarse: 'me despierto' }, { pronome: 'tú', acostarse: 'te acuestas', vestirse: 'te vistes', despertarse: 'te despiertas' }, { pronome: 'él / ella', acostarse: 'se acuesta', vestirse: 'se viste', despertarse: 'se despierta' },
            { pronome: 'nosotros', acostarse: 'nos acostamos', vestirse: 'nos vestimos', despertarse: 'nos despertamos' }, { pronome: 'vosotros', acostarse: 'os acostáis', vestirse: 'os vestís', despertarse: 'os despertáis' }, { pronome: 'ellos', acostarse: 'se acuestan', vestirse: 'se visten', despertarse: 'se despiertan' },
          ] },
        ],
        exemplos: [['Me despierto a las siete y media.', 'Acordo às sete e meia.'], ['Me ducho antes de desayunar.', 'Tomo banho antes de tomar o café da manhã.'], ['Mi hermano se acuesta muy tarde.', 'Meu irmão vai dormir muito tarde.'], ['No me levanto temprano los domingos.', 'Não me levanto cedo aos domingos.']],
        erros: [['Yo levanto a las siete.', 'Yo me levanto a las siete.', 'O pronome «me» é obrigatório em espanhol.'], ['Levanto me a las siete.', 'Me levanto a las siete.', 'O pronome vem antes do verbo conjugado.'], ['Nosotros me acostamos tarde.', 'Nosotros nos acostamos tarde.', 'O pronome concorda com o sujeito: «nosotros» pede «nos».'], ['Me lavo mis manos.', 'Me lavo las manos.', 'Com partes do corpo, usa-se o artigo.'], ['Nosotros nos acuestamos.', 'Nosotros nos acostamos.', 'Em «nosotros» o radical não muda.']],
      }),
      producao(5, 'Diga em voz alta, em ordem, seis ações da sua manhã: «Me despierto a las… Me levanto… Me ducho… Me visto… Desayuno… Salgo de casa…»'),
    ]),
    sessao('S2', 'A rotina do dia', [
      revisao(4, 'Conjugue «acostarse» e «vestirse» de memória. Diga duas frases reflexivas com «nosotros».'),
      palavras(6, [
        ['desayunar', 'desaiunár', 'tomar o café da manhã', ''], ['almorzar', 'almorthár', 'almoçar', ''], ['cenar', 'thenár', 'jantar', ''], ['la siesta', 'la siésta', 'a soneca depois do almoço', ''], ['entre semana', 'éntre semána', 'durante a semana, de segunda a sexta', ''], ['el fin de semana', 'el fin de semána', 'o fim de semana', ''],
      ]),
      gramatica(12, 'Contar o dia: sequência, horas e frequência', 'PASSO 1: para ordenar as ações, use «primero» (primeiro), «luego» ou «después» (depois), «por último» (por fim). Depois de «antes de» e de «después de» o verbo fica no infinitivo: «Antes de salir, desayuno», «Después de cenar, veo la tele». PASSO 2: as horas seguem a aula 9: «a las ocho». Com a hora exata, diga «de la mañana», «de la tarde» ou «de la noche»: «a las ocho de la mañana». Sem a hora, use «por la mañana», «por la tarde», «por la noche»: «Estudio por la tarde». PASSO 3: a armadilha: «la mañana» é a manhã e «mañana» (sem artigo) é amanhã. «Mañana por la mañana» quer dizer «amanhã de manhã». PASSO 4: frequência: «todos los días», «casi siempre», «normalmente», «a menudo», «de vez en cuando», «nunca». Os dias fixos se dizem com artigo: «los lunes» (às segundas-feiras), «los fines de semana». PASSO 5: as refeições. Na Espanha, a refeição principal do meio-dia costuma ser mais tarde que no Brasil, e se diz muito «comer» (la comida); «almorzar» também se ouve. Na América Latina «almorzar» e «el almuerzo» são o normal. «Desayunar» é o café da manhã e «cenar» o jantar. «Merendar» é o lanche da tarde. PASSO 6: «almorzar» muda o → ue (almuerzo, almuerzas…) e o «z» vira «c» só antes de «e». «Empezar» muda e → ie: «Empiezo a trabajar a las nueve». «Volver» muda o → ue: «Vuelvo a casa a las seis». PASSO 7: falso amigo: «la cena» é o jantar. A cena de um filme é «la escena», e a «ceia» de Natal, «la cena de Nochebuena».', {
        tag: 'Rotina',
        comparacao: 'em português «manhã» e «amanhã» são palavras diferentes, mas em espanhol a diferença está só no artigo e no sentido: «la mañana» e «mañana». «Cena» em português é, em geral, uma cena de filme ou de teatro; em espanhol «la cena» é o jantar. O horário das refeições na Espanha tende a ser mais tardio, o que ajuda a entender convites para «cenar a las diez».',
        tabelas: [
          { titulo: 'Marcadores de tempo', linhas: [
            { expressao: 'primero', sentido: 'primeiro', exemplo: 'Primero me ducho.' }, { expressao: 'luego, después', sentido: 'depois', exemplo: 'Luego desayuno.' }, { expressao: 'por último', sentido: 'por fim', exemplo: 'Por último, salgo de casa.' },
            { expressao: 'antes de + infinitivo', sentido: 'antes de', exemplo: 'Antes de cenar, paseo.' }, { expressao: 'después de + infinitivo', sentido: 'depois de', exemplo: 'Después de comer, descanso.' },
          ] },
          { titulo: 'Frequência', linhas: [
            { expressao: 'todos los días', sentido: 'todos os dias', exemplo: 'Todos los días me levanto a las siete.' }, { expressao: 'los lunes', sentido: 'às segundas', exemplo: 'Los lunes trabajo en casa.' }, { expressao: 'a menudo', sentido: 'com frequência', exemplo: 'A menudo ceno tarde.' },
            { expressao: 'de vez en cuando', sentido: 'de vez em quando', exemplo: 'De vez en cuando duermo la siesta.' }, { expressao: 'nunca', sentido: 'nunca', exemplo: 'Nunca desayuno fuera.' },
          ] },
        ],
        exemplos: [['Almuerzo a las dos de la tarde.', 'Almoço às duas da tarde.'], ['Mañana por la mañana tengo clase.', 'Amanhã de manhã tenho aula.'], ['Después de cenar, veo la tele.', 'Depois de jantar, vejo TV.'], ['Los sábados me acuesto tarde.', 'Aos sábados vou dormir tarde.']],
        erros: [['Almorzo a las dos.', 'Almuerzo a las dos.', '«Almorzar» muda o → ue em «yo».'], ['Desayuno a las ocho a la mañana.', 'Desayuno a las ocho de la mañana.', 'Com a hora exata, usa-se «de la mañana».'], ['Después de salgo, cierro la puerta.', 'Después de salir, cierro la puerta.', 'Depois de «antes de» e de «después de», o verbo vai no infinitivo.'], ['Todo los días trabajo.', 'Todos los días trabajo.', '«Todos» concorda com «días» (plural).'], ['Tengo clase la mañana. (amanhã)', 'Tengo clase mañana.', '«Mañana» sem artigo é amanhã; «la mañana» é a parte do dia.']],
      }),
      producao(8, 'Conte o seu dia de ontem ou de um dia comum em voz alta, em seis ou oito frases, com horários e marcadores: «Primero… Luego… Después de… Por último…»'),
    ]),
    sessao('S3', 'Outros usos do pronome', [
      revisao(4, 'Diga a ordem do dia de um amigo (sem ele), com «se»: «Se levanta… Se ducha… Se acuesta…».'),
      palavras(5, [
        ['ponerse', 'ponérse', 'vestir, colocar em si (roupa); ficar (ao mudar de estado)', ''], ['quedarse', 'kedárse', 'ficar, permanecer', ''], ['irse', 'írse', 'ir embora', ''], ['sentirse', 'sentírse', 'sentir-se', ''], ['cansado, cansada', 'kansádo, kansáda', 'cansado, cansada', ''],
      ]),
      gramatica(8, 'Ponerse, quedarse, irse, sentirse e a ação recíproca', 'PASSO 1: «ponerse» significa colocar algo em si: «Me pongo el abrigo» (visto o casaco). Para tirar, «quitarse»: «Me quito los zapatos». PASSO 2: «quedarse» é ficar num lugar: «Me quedo en casa». Atenção: «quedar» sem pronome pode significar marcar um encontro («Quedamos a las ocho»); com «se», é permanecer. PASSO 3: «irse» é ir embora, sair de onde se está: «Me voy» (estou indo embora), «Nos vamos a casa» (vamos embora para casa). Sem o pronome, «ir» só indica destino: «Voy a casa». PASSO 4: «sentirse» + bien/mal/cansado: «Me siento bien», «Se siente cansada». O verbo muda e → ie: me siento, te sientes, se siente, nos sentimos, os sentís, se sienten. PASSO 5: quando duas ou mais pessoas fazem a ação uma à outra, usa-se o pronome plural no sentido «um ao outro»: «Nos llamamos todos los días» (nós nos ligamos todo dia), «Se escriben mucho». PASSO 6: se a frase pode ficar ambígua (por exemplo, «se miran» pode ser «olham-se» ou «olham um ao outro»), o contexto decide; para deixar claro o sentido recíproco, acrescenta-se «el uno al otro».', {
        tag: 'Reflexivos',
        comparacao: 'em português, «ir» e «ir-se» se distinguem pouco no dia a dia, mas em espanhol «me voy» é «estou indo embora» e «voy» é só «vou». O sentido recíproco, «nos vemos» (nos vemos, a gente se vê), corresponde ao nosso «a gente se vê» ou «nos vemos».',
        tabela: [
          { verbo: 'ponerse', sentido: 'vestir, pôr em si', exemplo: 'Me pongo el abrigo.' },
          { verbo: 'quitarse', sentido: 'tirar (roupa)', exemplo: 'Me quito los zapatos.' },
          { verbo: 'quedarse', sentido: 'ficar, permanecer', exemplo: 'Hoy me quedo en casa.' },
          { verbo: 'irse', sentido: 'ir embora', exemplo: 'Nos vamos a las seis.' },
          { verbo: 'sentirse', sentido: 'sentir-se', exemplo: 'Me siento muy cansado.' },
          { verbo: 'verbos recíprocos', sentido: 'um ao outro', exemplo: 'Nos llamamos todos los días.' },
        ],
        erros: [['Voy de casa a las seis. (ir embora)', 'Me voy de casa a las seis.', '«Irse de» é ir embora de um lugar.'], ['Yo siento bien.', 'Yo me siento bien.', '«Sentirse» é reflexivo e pede o pronome.'], ['Me quedo a casa.', 'Me quedo en casa.', 'O lugar onde se fica pede «en».'], ['Me quito mis zapatos.', 'Me quito los zapatos.', 'Com roupas, usa-se o artigo.']],
      }),
      dialogo(8, 'Una mañana de lunes / Uma manhã de segunda-feira', 'Elena e Javier conversam sobre a manhã antes do trabalho.', [
        ['Elena', 'Buenos días, Javier. ¿A qué hora te levantas los lunes?', 'Bom dia, Javier. A que horas você se levanta às segundas?'],
        ['Javier', 'Me levanto a las siete, me ducho y desayuno. ¿Y tú?', 'Levanto às sete, tomo banho e tomo café. E você?'],
        ['Elena', 'Yo me despierto a las seis y media, pero me quedo en la cama diez minutos.', 'Eu acordo às seis e meia, mas fico na cama dez minutos.'],
        ['Javier', '¿Y a qué hora sales de casa?', 'E a que horas você sai de casa?'],
        ['Elena', 'Salgo a las ocho. Primero me visto y luego preparo un café.', 'Saio às oito. Primeiro me visto e depois preparo um café.'],
        ['Javier', 'Yo tomo el metro a las ocho y cuarto.', 'Eu pego o metrô às oito e quinze.'],
        ['Elena', 'Entonces nos vemos en la oficina a las nueve.', 'Então a gente se vê no escritório às nove.'],
        ['Javier', 'Vale, hasta luego.', 'Combinado, até logo.'],
      ]),
      producao(5, 'Escreva e diga em voz alta cinco frases sobre como você se sente hoje e o que você faz depois do trabalho ou da escola, com «me siento», «me quedo» ou «me voy».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 14', [
      revisao(5, 'Conte sua manhã em cinco frases com pronomes reflexivos. Depois conte a manhã de um amigo com «se».'),
      exercicios(20, [
        ouvir('Me levanto a las siete', ['Me levanto a las siete', 'Se levanta a las siete', 'Nos levantamos a las siete'], 'Me levanto a las siete', 'Ouça o pronome «me» e a terminação «-o».'),
        ouvir('Mi hermano se acuesta tarde', ['Mi hermano se acuesta tarde', 'Mi hermano me acuesta tarde', 'Mis hermanos se acuestan tarde'], 'Mi hermano se acuesta tarde', 'Ouça «se» e a forma singular «acuesta».'),
        ouvir('Después de cenar, veo la tele', ['Después de cenar, veo la tele', 'Después de cenamos, veo la tele', 'Antes de cenar, veo la tele'], 'Después de cenar, veo la tele', 'Ouça «después de» e o infinitivo «cenar».'),
        ditado('Me ducho por la mañana', 'Escreva: Me ducho por la mañana.'),
        ditado('Nos acostamos a las once', 'Escreva: Nos acostamos a las once.'),
        ditado('Mañana tengo clase', 'Escreva: Mañana tengo clase. Sem artigo, é «amanhã».'),
        mc('Qual é o pronome certo? «Nosotros ___ levantamos temprano.»', ['nos', 'me', 'se'], 'nos', 'O pronome concorda com «nosotros».'),
        mc('Qual frase está correta?', ['Me lavo las manos.', 'Me lavo mis manos.', 'Lavo me las manos.'], 'Me lavo las manos.', 'Com partes do corpo, usa-se o artigo.'),
        mc('Qual é a forma de «yo» de «acostarse»?', ['me acuesto', 'me acosto', 'se acuesta'], 'me acuesto', '«Acostarse» muda o → ue em «yo».'),
        mc('Qual é a forma de «yo» de «vestirse»?', ['me visto', 'me vestio', 'me vieste'], 'me visto', '«Vestirse» muda e → i em «yo».'),
        mc('O que quer dizer «Mañana por la mañana»?', ['Amanhã de manhã', 'Hoje à tarde', 'Ontem de manhã'], 'Amanhã de manhã', '«Mañana» sem artigo é amanhã; «la mañana» é a manhã.'),
        mc('Como se diz «Depois de jantar, vejo TV»?', ['Después de cenar, veo la tele.', 'Después de ceno, veo la tele.', 'Después cenar, veo la tele.'], 'Después de cenar, veo la tele.', 'Depois de «después de» o verbo vai no infinitivo.'),
        lacuna('Yo ___ levanto a las siete. (pronome)', ['me', 'te', 'se'], 'me', 'Com «yo», o pronome é «me».'),
        lacuna('Ellos ___ acuestan tarde. (pronome)', ['se', 'me', 'nos'], 'se', 'Com «ellos», o pronome é «se».'),
        lacuna('Ella ___ a las seis y media. (despertarse)', ['se despierta', 'se despiertan', 'despierta se'], 'se despierta', 'Terceira pessoa do singular, com a mudança e → ie.'),
        lacuna('Voy a casa. ___ voy a las seis. (ir embora)', ['Me', 'Se', 'Os'], 'Me', '«Me voy» é ir embora; o pronome concorda com «yo».'),
        lacuna('Siempre me ___ ocho horas. (dormir)', ['duermo', 'dormo', 'duerme'], 'duermo', '«Dormir» muda o → ue em «yo».'),
        ordem('Ordene: «Me levanto a las siete y media.»', ['Me', 'levanto', 'a', 'las', 'siete', 'y', 'media.'], 'Me levanto a las siete y media.', 'O pronome vem antes do verbo conjugado.'),
        ordem('Ordene: «Primero me ducho y luego desayuno.»', ['Primero', 'me', 'ducho', 'y', 'luego', 'desayuno.'], 'Primero me ducho y luego desayuno.', '«Primero… luego…» ordenam as ações.'),
        livre('Escreva em espanhol: Eu me levanto às sete, tomo banho e tomo o café da manhã.', 'Me levanto a las siete, me ducho y desayuno.'),
      ]),
      producao(5, 'Descreva em voz alta uma manhã do seu fim de semana e uma manhã de dia útil, com pelo menos quatro verbos reflexivos.'),
    ]),
  ],
});
