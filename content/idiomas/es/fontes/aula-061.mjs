import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 61, titulo: 'Revisão dos tempos', nivel: 'b1',
  objetivo: 'Rever e comparar os tempos do B1: passado (perfecto, indefinido, imperfecto, pluscuamperfecto), futuro, probabilidade, condicional, hipóteses com «si» e subjuntivo, escolhendo o tempo pela ideia que se quer dizer.',
  nota: 'Você agora escolhe o tempo pela ideia, e não de memória: terminou e tem data (indefinido), é fundo ou hábito (imperfecto), liga ao presente (perfecto), vem antes de outro passado (pluscuamperfecto), é plano ou suposição (futuro), é cortesia ou hipótese (condicional, subjuntivo). Próxima aula: o simulado do B1.',
  sessoes: [
    sessao('S1', 'Os tempos do passado', [
      revisao(5, 'Reveja a aula 60. Diga uma frase com «a» pessoal, uma com verbo e preposição e uma com pronome colado.'),
      palavras(8, [
        ['ayer', 'aiér', 'ontem', ''], ['anoche', 'anótche', 'ontem à noite', ''], ['hace dos años', 'áthe dos ánhos', 'há dois anos', ''], ['esta mañana', 'ésta manhána', 'esta manhã', ''],
        ['todavía no', 'todabía no', 'ainda não', ''], ['ya', 'lhá', 'já', ''], ['mientras', 'miéntras', 'enquanto', ''], ['de repente', 'de repénte', 'de repente', ''],
      ]),
      gramatica(12, 'Qual tempo do passado usar', 'PASSO 1: pergunte primeiro: a ação terminou e eu a coloco num momento definido (ayer, el año pasado, en 2019)? Então use o pretérito indefinido: «Ayer compré pan», «Nació en 2001». PASSO 2: a ação é um hábito do passado, uma descrição, um cenário ou uma ação em curso? Use o imperfecto: «Cuando era niño, iba a la playa cada verano», «Llovía y hacía frío». PASSO 3: a ação está ligada ao presente ou ao período que ainda não terminou (hoy, esta semana, este año, nunca, ya, todavía)? Na Espanha, use o pretérito perfecto: «Hoy he trabajado mucho», «Nunca he estado en Perú». PASSO 4: a ação aconteceu antes de outro momento do passado? Use o pluscuamperfecto: «Cuando llegué, el tren ya había salido». PASSO 5: numa história, o imperfecto descreve o fundo e o indefinido narra os fatos: «Mientras caminaba por la calle, vi a un amigo». Os dois cabem na mesma frase: o imperfecto é o que estava acontecendo; o indefinido é o que interrompeu. PASSO 6: IMPORTANTE, variedades: na maior parte da América Latina o indefinido substitui o perfecto para ações recentes: «Hoy comí temprano», e o perfecto é menos frequente. Na Espanha, a diferença é mais marcada. Em ambas as variedades, «ayer», «anoche» e «el año pasado» pedem o indefinido. PASSO 7: lembre dos irregulares do indefinido: fui (ir e ser), hice, dije, tuve, estuve, pude, puse, supe, quise, vine, di, vi, traje. E o imperfecto tem só três irregulares: ser (era), ir (iba) e ver (veía).', {
        tag: 'Tempos',
        comparacao: 'em português, o pretérito perfeito simples («comi», «fui») faz o papel do indefinido e muitas vezes do perfecto: «hoje trabalhei muito». O «tenho trabalhado» do português não equivale ao «he trabajado»: significa uma ação repetida até agora, e não uma ação concluída ligada ao presente. O imperfeito do português («comia», «ia») corresponde bem ao imperfecto do espanhol.',
        exemplos: [
          ['Ayer compré pan en la panadería.', 'Ontem comprei pão na padaria.'],
          ['Cuando era niño, iba a la playa cada verano.', 'Quando eu era criança, ia à praia todo verão.'],
          ['Hoy he trabajado mucho.', 'Hoje trabalhei muito.'],
          ['Nunca he estado en Perú.', 'Nunca estive no Peru.'],
          ['Cuando llegué, el tren ya había salido.', 'Quando cheguei, o trem já tinha saído.'],
          ['Mientras caminaba por la calle, vi a un amigo.', 'Enquanto caminhava pela rua, vi um amigo.'],
          ['Llovía y hacía frío cuando salimos.', 'Chovia e fazia frio quando saímos.'],
        ],
        tabela: [
          { tempo: 'pretérito indefinido', forma: 'hablé, comí, viví', uso: 'ação terminada, momento definido', marcadores: 'ayer, anoche, hace dos años' },
          { tempo: 'pretérito imperfecto', forma: 'hablaba, comía, vivía', uso: 'hábito, descrição, fundo', marcadores: 'siempre, cuando era niño, mientras' },
          { tempo: 'pretérito perfecto', forma: 'he hablado, has comido', uso: 'ligado ao presente (Espanha)', marcadores: 'hoy, esta semana, nunca, ya, todavía' },
          { tempo: 'pluscuamperfecto', forma: 'había hablado, habías comido', uso: 'anterior a outro passado', marcadores: 'ya, antes de, cuando llegué' },
        ],
        erros: [['Ayer he comprado pan.', 'Ayer compré pan.', 'Com «ayer», um tempo já terminado, usa-se o indefinido.'], ['Cuando era niño, fui a la playa cada verano.', 'Cuando era niño, iba a la playa cada verano.', 'Hábito no passado pede o imperfecto.'], ['Cuando llegué, el tren ya salió.', 'Cuando llegué, el tren ya había salido.', 'Uma ação anterior a outra passada pede o pluscuamperfecto.'], ['Mientras comí, sonó el teléfono.', 'Mientras comía, sonó el teléfono.', 'A ação em curso, interrompida, vai ao imperfecto.']],
      }),
      producao(5, 'Conte em voz alta, em 6 frases, o que você fez ontem à noite (indefinido), como era a sua rotina na infância (imperfecto), o que fez hoje (perfecto) e o que já tinha feito antes de dormir (pluscuamperfecto).'),
    ]),
    sessao('S2', 'Futuro, condicional e hipóteses', [
      revisao(4, 'Conte em voz alta uma história curta no passado com «mientras», «de repente» e «ya había».'),
      palavras(6, [
        ['seguramente', 'seguraménte', 'provavelmente, com certeza', ''], ['quizá, quizás', 'kithá, kithás', 'talvez', ''], ['probablemente', 'probablemente', 'provavelmente', ''], ['a lo mejor', 'a lo mehór', 'talvez (com indicativo)', ''],
        ['supongo que', 'supóngo ke', 'suponho que', ''], ['si tuviera…', 'si tubiéra', 'se eu tivesse…', ''],
      ]),
      gramatica(12, 'Futuro, probabilidade, condicional e hipóteses', 'PASSO 1: o futuro simples (-é, -ás, -á, -emos, -éis, -án) acrescenta-se ao infinitivo: «hablaré», «comerás», «vivirá». Irregulares comuns: tendré, podré, haré, diré, pondré, saldré, vendré, querré, sabré, habré. PASSO 2: o futuro também expressa probabilidade no presente: «Ahora estará en casa» (suponho que está). E o futuro perfecto expressa probabilidade no passado: «Habrá salido ya» (suponho que já saiu). PASSO 3: o condicional (-ía, -ías, -ía, -íamos, -íais, -ían) usa os mesmos radicais irregulares: «tendría», «podría», «haría». Serve para cortesia («¿Podría ayudarme?»), para conselhos («Deberías descansar»), para o futuro visto do passado («Dijo que vendría») e para hipóteses. PASSO 4: o condicional compuesto (haría + particípio) expressa o que teria acontecido: «Habría ido, pero estaba enfermo». PASSO 5: as hipóteses com «si» têm três tipos. Se for possível: «Si llueve, me quedo en casa» ou «me quedaré» (si + presente, sem futuro depois de «si»). Se for improvável ou irreal no presente: «Si tuviera dinero, viajaría» (si + imperfecto de subjuntivo + condicional). Se for irreal no passado: «Si hubiera sabido, habría venido» (si + pluscuamperfecto de subjuntivo + condicional compuesto). PASSO 6: nunca use condicional nem futuro logo depois de «si» nas hipóteses. PASSO 7: «quizá», «tal vez» e «posiblemente» levam subjuntivo quando há dúvida: «Quizá venga»; «a lo mejor» leva sempre indicativo: «A lo mejor viene».', {
        tag: 'Tempos',
        comparacao: 'em português, o futuro do pretérito («faria») corresponde ao condicional. A diferença está nas hipóteses: dizemos «se eu tivesse dinheiro, viajaria», e o espanhol é igual: «si tuviera dinero, viajaría». O erro típico é usar o condicional depois de «si» («si tendría»), que é incorreto em espanhol. E «a lo mejor» (indicativo) corresponde a «talvez» no português coloquial.',
        exemplos: [
          ['Mañana iré a Valencia.', 'Amanhã irei a Valência.'],
          ['Ahora estará en casa.', 'Agora deve estar em casa.'],
          ['Habrá salido ya.', 'Já deve ter saído.'],
          ['¿Podría ayudarme, por favor?', 'Poderia me ajudar, por favor?'],
          ['Dijo que vendría el lunes.', 'Disse que viria na segunda.'],
          ['Si llueve, me quedo en casa.', 'Se chover, fico em casa.'],
          ['Si tuviera dinero, viajaría.', 'Se eu tivesse dinheiro, viajaria.'],
          ['Si hubiera sabido, habría venido.', 'Se eu tivesse sabido, teria vindo.'],
        ],
        tabelas: [
          { titulo: 'Os três tipos de hipótese com «si»', linhas: [
            { tipo: 'possível', condicao: 'si + presente', resultado: 'presente ou futuro', exemplo: 'Si estudio, aprobaré.' },
            { tipo: 'irreal no presente', condicao: 'si + imperfecto de subjuntivo', resultado: 'condicional', exemplo: 'Si estudiara más, aprobaría.' },
            { tipo: 'irreal no passado', condicao: 'si + pluscuamperfecto de subjuntivo', resultado: 'condicional compuesto', exemplo: 'Si hubiera estudiado, habría aprobado.' },
          ] },
          { titulo: 'Futuro e condicional: radicais irregulares', linhas: [
            { infinitivo: 'tener', futuro: 'tendré', condicional: 'tendría' }, { infinitivo: 'poder', futuro: 'podré', condicional: 'podría' }, { infinitivo: 'hacer', futuro: 'haré', condicional: 'haría' },
            { infinitivo: 'decir', futuro: 'diré', condicional: 'diría' }, { infinitivo: 'salir', futuro: 'saldré', condicional: 'saldría' }, { infinitivo: 'venir', futuro: 'vendré', condicional: 'vendría' },
          ] },
        ],
        erros: [['Si tendría dinero, viajaría.', 'Si tuviera dinero, viajaría.', 'Depois de «si», o verbo vai ao imperfecto de subjuntivo, e não ao condicional.'], ['Si habría sabido, habría venido.', 'Si hubiera sabido, habría venido.', 'Na hipótese irreal do passado, use o pluscuamperfecto de subjuntivo depois de «si».'], ['Si lloverá, me quedo en casa.', 'Si llueve, me quedo en casa.', 'Depois de «si», não se usa o futuro.'], ['Si tuviera tiempo, vendré.', 'Si tuviera tiempo, vendría.', 'Imperfecto de subjuntivo pede condicional na outra parte.']],
      }),
      producao(8, 'Complete em voz alta com o seu caso: «Si tuviera más tiempo, … Si hubiera nacido en otro país, … Si mañana hace buen tiempo, … Ahora mi mejor amigo estará …». Depois diga três frases com cortesia: «¿Podría…? Me gustaría… Habría preferido…».'),
    ]),
    sessao('S3', 'Subjuntivo e conectores', [
      revisao(4, 'Faça duas hipóteses de cada tipo (possível, irreal no presente e irreal no passado).'),
      palavras(5, [
        ['aunque', 'áunke', 'embora, mesmo que', ''], ['para que', 'pára ke', 'para que', ''], ['cuando', 'kuándo', 'quando', ''], ['ojalá', 'ohalá', 'tomara, oxalá', ''], ['es posible que', 'es posíble ke', 'é possível que', ''],
      ]),
      gramatica(8, 'Quando o subjuntivo é necessário', 'PASSO 1: use o subjuntivo depois de desejo, ordem ou pedido («quiero que vengas»), de dúvida («dudo que sea verdad»), de emoção («me alegro de que estés aquí») e de opinião negativa («no creo que llueva»). PASSO 2: use o subjuntivo depois de «cuando» quando falamos do futuro: «Cuando llegues, llámame». Para fatos habituais ou passados, use o indicativo: «Cuando llego, saludo». PASSO 3: «para que», «antes de que», «sin que» e «a no ser que» pedem sempre subjuntivo: «Te lo explico para que lo entiendas». PASSO 4: «aunque» + indicativo dá um fato: «Aunque hace calor, salgo»; + subjuntivo dá uma hipótese ou algo indiferente: «Aunque haga calor, saldré». PASSO 5: a correspondência dos tempos: com um verbo principal no presente ou no futuro, o subjuntivo vai ao presente ou ao perfecto: «Quiero que vengas», «Espero que hayas llegado bien». Com um verbo principal no passado, o subjuntivo vai ao imperfecto: «Quería que vinieras», «Me pidió que le ayudara». PASSO 6: «ojalá» + presente de subjuntivo = desejo possível («Ojalá venga»); «ojalá» + imperfecto = desejo improvável («Ojalá tuviera más tiempo»).', {
        tag: 'Subjuntivo',
        comparacao: 'em português também usamos o subjuntivo depois de «quero que», «embora», «para que» e «quando» com futuro: «quando você chegar». O espanhol faz o mesmo. O erro típico é usar o futuro depois de «cuando» («quando você chegará»), que não existe em espanhol: «cuando llegues». Também, «a lo mejor» e «quizá» têm regras diferentes.',
        tabela: [
          { gatilho: 'quiero que, espero que', modo: 'subjuntivo', exemplo: 'Quiero que vengas.' },
          { gatilho: 'dudo que, no creo que', modo: 'subjuntivo', exemplo: 'No creo que sea verdad.' },
          { gatilho: 'cuando (futuro)', modo: 'subjuntivo', exemplo: 'Cuando llegues, llámame.' },
          { gatilho: 'para que, antes de que', modo: 'subjuntivo', exemplo: 'Te lo explico para que lo entiendas.' },
          { gatilho: 'aunque (fato)', modo: 'indicativo', exemplo: 'Aunque hace frío, salgo.' },
          { gatilho: 'aunque (hipótese)', modo: 'subjuntivo', exemplo: 'Aunque haga frío, saldré.' },
        ],
        erros: [['Cuando llegaré, te llamo.', 'Cuando llegue, te llamo.', 'Para o futuro depois de «cuando», o espanhol usa o subjuntivo.'], ['Quiero que vienes.', 'Quiero que vengas.', 'Depois de «quiero que», subjuntivo.'], ['Dudo que es verdad.', 'Dudo que sea verdad.', 'Dúvida pede subjuntivo.'], ['Quería que vengas.', 'Quería que vinieras.', 'Verbo principal no passado pede imperfecto de subjuntivo.'], ['Espero que llegó bien.', 'Espero que haya llegado bien.', 'Espero que + perfecto de subjuntivo.']],
      }),
      texto(8, 'Una carta desde Valencia / Uma carta de Valência', 'Querida Marta: Te escribo desde Valencia, donde llegué el lunes. Cuando era pequeña, siempre soñaba con vivir junto al mar, y ahora lo estoy haciendo. Antes de venir, había buscado piso durante semanas, pero no encontraba nada barato. Por fin he encontrado uno cerca de la playa. Si hubiera esperado un mes más, seguramente lo habría perdido. El casero me ha dicho que cuando termine el curso podré quedarme otro año. Ojalá vengas a verme en verano; te enseñaré la ciudad y, aunque haga calor, iremos a la playa. Dudo que mi piso sea muy grande, pero habrá una cama para ti. Escríbeme pronto. Un abrazo, Lucía.', 'Querida Marta: Escrevo de Valência, onde cheguei na segunda-feira. Quando era pequena, sempre sonhava em viver perto do mar, e agora estou fazendo isso. Antes de vir, tinha procurado apartamento durante semanas, mas não encontrava nada barato. Finalmente encontrei um perto da praia. Se eu tivesse esperado mais um mês, provavelmente o teria perdido. O proprietário me disse que, quando o curso terminar, poderei ficar mais um ano. Tomara que você venha me ver no verão; vou lhe mostrar a cidade e, mesmo que faça calor, iremos à praia. Duvido que meu apartamento seja muito grande, mas haverá uma cama para você. Escreva-me logo. Um abraço, Lucía.', [
        ['¿Desde dónde escribe Lucía?', 'Desde Valencia.'], ['¿Con qué soñaba de pequeña?', 'Con vivir junto al mar.'], ['¿Qué había hecho antes de venir?', 'Había buscado piso durante semanas.'], ['¿Qué habría pasado si hubiera esperado un mes más?', 'Seguramente habría perdido el piso.'], ['¿Qué espera de Marta?', 'Que vaya a verla en verano.'],
      ]),
      producao(5, 'Escreva e leia em voz alta 6 frases para um amigo: um desejo («Ojalá…»), um plano («Cuando…, …»), uma dúvida («Dudo que…»), uma hipótese irreal («Si…, …») e um fato passado («Antes de…, había…»).'),
    ]),
    sessao('S4', 'Revisão e prática da aula 61', [
      revisao(5, 'Diga em voz alta uma frase para cada tempo: indefinido, imperfecto, perfecto, pluscuamperfecto, futuro, condicional e subjuntivo.'),
      exercicios(20, [
        ouvir('Cuando llegué, el tren ya había salido', ['Cuando llegué, el tren ya había salido', 'Cuando llegué, el tren ya salió', 'Cuando llegaba, el tren ya salía'], 'Cuando llegué, el tren ya había salido', 'Pluscuamperfecto: ação anterior a outro momento passado.'),
        ouvir('Si tuviera dinero, viajaría', ['Si tuviera dinero, viajaría', 'Si tendría dinero, viajaría', 'Si tengo dinero, viajaría'], 'Si tuviera dinero, viajaría', 'Hipótese irreal no presente: imperfecto de subjuntivo + condicional.'),
        ouvir('Cuando llegues, llámame', ['Cuando llegues, llámame', 'Cuando llegarás, llámame', 'Cuando llegas, llámame'], 'Cuando llegues, llámame', '«Cuando» + subjuntivo para o futuro.'),
        ditado('Nunca he estado en Perú', 'Escreva: Nunca he estado en Perú.'), ditado('Ojalá venga mañana', 'Escreva: Ojalá venga mañana.'), ditado('Si hubiera sabido, habría venido', 'Escreva: Si hubiera sabido, habría venido.'),
        mc('Qual frase usa o tempo certo?', ['Ayer compré pan.', 'Ayer he comprado pan.', 'Ayer compraba pan.'], 'Ayer compré pan.', '«Ayer» é um tempo terminado: indefinido.'),
        mc('Qual frase descreve um hábito no passado?', ['Cuando era niño, iba a la playa cada verano.', 'Cuando era niño, fui a la playa cada verano.', 'Cuando era niño, he ido a la playa.'], 'Cuando era niño, iba a la playa cada verano.', 'Hábito: imperfecto.'),
        mc('Como se expressa suposição sobre o presente?', ['Ahora estará en casa.', 'Ahora estuvo en casa.', 'Ahora estaba en casa.'], 'Ahora estará en casa.', 'O futuro expressa probabilidade no presente.'),
        mc('Qual frase é correta?', ['Si estudiara más, aprobaría.', 'Si estudiaría más, aprobaría.', 'Si estudio más, aprobaría.'], 'Si estudiara más, aprobaría.', 'Si + imperfecto de subjuntivo + condicional.'),
        mc('Qual frase é correta?', ['Si hubiera estudiado, habría aprobado.', 'Si habría estudiado, habría aprobado.', 'Si había estudiado, aprobaría.'], 'Si hubiera estudiado, habría aprobado.', 'Irreal no passado.'),
        mc('Faz calor agora e você sai mesmo assim. Qual frase é correta?', ['Aunque hace calor, salgo.', 'Aunque hacía calor, salgo.', 'Aunque hará calor, salgo.'], 'Aunque hace calor, salgo.', 'Fato real: indicativo.'),
        mc('Qual frase é correta?', ['Quería que vinieras.', 'Quería que vengas.', 'Quería que vienes.'], 'Quería que vinieras.', 'Verbo principal no passado: imperfecto de subjuntivo.'),
        mc('Qual forma é irregular no futuro?', ['tendré', 'hablaré', 'comeré'], 'tendré', '«Tener» muda o radical: tendr-.'),
        lacuna('Mientras ___ por la calle, vi a un amigo. (caminar)', ['caminaba', 'caminé', 'he caminado'], 'caminaba', 'Ação em curso: imperfecto.'),
        lacuna('Hoy ___ mucho. (trabajar)', ['he trabajado', 'trabajé', 'trabajaba'], 'he trabajado', 'Período ainda não terminado (Espanha): perfecto.'),
        lacuna('Dijo que ___ el lunes. (venir)', ['vendría', 'vendrá', 'vino'], 'vendría', 'Futuro visto do passado: condicional.'),
        lacuna('Espero que ___ bien. (llegar)', ['llegues', 'llegas', 'llegarás'], 'llegues', '«Espero que» + subjuntivo.'),
        lacuna('Te lo explico ___ que lo entiendas.', ['para', 'por', 'porque'], 'para', '«Para que» + subjuntivo.'),
        ordem('Ordene: «Si llueve, me quedo en casa.»', ['Si', 'llueve,', 'me', 'quedo', 'en', 'casa.'], 'Si llueve, me quedo en casa.', 'Si + presente, sem futuro.'),
        livre('Escreva em espanhol: Quando você chegar, me ligue. Se eu tivesse sabido, teria vindo.', 'Cuando llegues, llámame. Si hubiera sabido, habría venido.'),
      ]),
      producao(5, 'Conte em voz alta um fato do seu passado em 5 frases, usando pelo menos quatro dos tempos desta aula, e termine com um desejo com «ojalá».'),
    ]),
  ],
});
