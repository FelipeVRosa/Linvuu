import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 56, titulo: 'Notícias e mídia', nivel: 'b1',
  objetivo: 'Ler e entender o estilo de uma notícia e de um titular, contar o que outras pessoas disseram, e conversar sobre notícias, redes sociais e boatos com vocabulário e estruturas adequadas.',
  nota: 'Você consegue ler uma notícia curta, relatar o que alguém disse e conversar sobre como verificar uma informação. Próxima aula: cultura, festas e tradições.',
  sessoes: [
    sessao('S1', 'A linguagem da notícia', [
      revisao(5, 'Diga em voz alta como contar algo que você fez ontem e algo que você fez hoje (indefinido e perfecto) e explique por que a segunda forma muda com o marcador de tempo.'),
      palavras(8, [
        ['la noticia', 'la notítia', 'a notícia', ''], ['el titular', 'el titulár', 'a manchete', ''], ['el periódico, el diario', 'el periódiko, el diário', 'o jornal', ''], ['el reportaje', 'el rreportáje', 'a reportagem', ''],
        ['los medios de comunicación', 'los médios de komunikathión', 'os meios de comunicação', ''], ['las redes sociales', 'las rrédes sothiáles', 'as redes sociais', ''], ['la fuente', 'la fuénte', 'a fonte', ''], ['el bulo', 'el búlo', 'o boato, a notícia falsa', ''],
      ]),
      gramatica(12, 'Como é escrita uma notícia', 'PASSO 1: uma notícia tem partes fixas: o titular (a manchete), o subtítulo, a entradilla (o primeiro parágrafo, que resume tudo) e o cuerpo (o desenvolvimento). PASSO 2: a entradilla responde a cinco perguntas: ¿qué ocurrió?, ¿quién?, ¿dónde?, ¿cuándo? e ¿por qué? Se você responde às cinco, entendeu o essencial. PASSO 3: o titular tem um estilo próprio. Usa o presente para fatos passados e omite artigos e verbos auxiliares: «Un incendio destruye una nave industrial» (forma mais comum nos titulares do que «Un incendio ha destruido…»). PASSO 4: no corpo da notícia, o fato principal costuma vir no indefinido (aula 19): «El fuego comenzó a las ocho.» Para algo muito recente, com ligação com o presente, aparece o perfecto: «Los bomberos han controlado el incendio.» PASSO 5: com marcadores de tempo passado terminado (ayer, el lunes, la semana pasada) use o indefinido: «Ayer inauguraron la biblioteca.» PASSO 6: passiva e «se» (aula 49) são frequentes: «La biblioteca fue inaugurada ayer.», «Se investigan las causas.» PASSO 7: falsos amigos: «periódico» e «diario» são o jornal (e «diario» também é o diário pessoal); «jornal» não existe em espanhol com esse sentido. E «telediario» é o noticiário de televisão na Espanha.', {
        tag: 'Mídia',
        comparacao: 'em português a manchete costuma usar o presente («Incêndio destrói galpão»), e o espanhol faz o mesmo. A novidade são o artigo «el/la» que se omite e as palavras: «jornal» é «periódico» ou «diario», e «bulo» (Espanha) ou «noticia falsa» (comum também na América Latina) é o que costumamos chamar de «fake news».',
        tabela: [
          { parte: 'titular', funcao: 'resumo em poucas palavras', exemplo: 'Abre una nueva biblioteca pública' },
          { parte: 'entradilla', funcao: 'responde: quê, quem, onde, quando, por quê', exemplo: 'El ayuntamiento inauguró ayer una biblioteca…' },
          { parte: 'cuerpo', funcao: 'detalhes, citações, contexto', exemplo: 'Según la concejala,…' },
          { parte: 'fuente', funcao: 'de onde vem a informação', exemplo: 'Según fuentes municipales,…' },
        ],
        erros: [['Un incendio ha destruido ayer una nave.', 'Un incendio destruyó ayer una nave.', 'Com «ayer» (passado terminado), o indefinido é o tempo certo.'], ['Leí la notícia en el jornal.', 'Leí la noticia en el periódico.', '«Noticia» sem acento e «periódico» no lugar de «jornal».'], ['Un incendio destruiría una nave. (titular de um fato confirmado)', 'Un incendio destruye una nave.', 'O condicional em titular indica rumor, não fato confirmado.']],
      }),
      producao(5, 'Invente um titular curto sobre um evento do bairro (uma feira, uma obra, um jogo). Depois diga, em três frases, o que, onde e quando aconteceu.'),
    ]),
    sessao('S2', 'Contar o que outros disseram', [
      revisao(4, 'Transforme em voz alta em discurso indireto: «Voy a llegar tarde» (dijo que…) e «Hemos terminado» (dijo que…).'),
      palavras(6, [
        ['según', 'según', 'segundo, de acordo com', ''], ['afirmar, asegurar', 'afirmár, asegurár', 'afirmar, assegurar', ''], ['anunciar', 'anunthiár', 'anunciar', ''], ['negar, desmentir', 'negár, desmentír', 'negar, desmentir', ''],
        ['al parecer', 'al paréther', 'ao que parece', ''], ['la fuente', 'la fuénte', 'a fonte', ''],
      ]),
      gramatica(12, 'Citar fontes e relatar o que se disse', 'PASSO 1: para dizer de onde vem a informação, use «según» sem preposição depois: «Según la policía, no hay heridos.», «Según fuentes municipales, el proyecto costó dos millones.» PASSO 2: os verbos de relato mais comuns são «afirmar», «asegurar», «anunciar», «explicar», «declarar» e «añadir». Todos levam «que» e verbo no indicativo: «La alcaldesa anunció que abriría la biblioteca en octubre.» PASSO 3: a concordância de tempos que você viu na aula 48 continua: presente vira imperfecto, indefinido vira pluscuamperfecto, futuro vira condicional: «Dijo: Llegaremos pronto → Dijo que llegarían pronto.» PASSO 4: quando alguém nega ou desmente algo, o verbo seguinte vai para o subjuntivo, porque você não afirma o fato: «El club negó que el entrenador se fuera.» PASSO 5: para informação ainda não confirmada: «Dicen que…», «Se dice que…», «Al parecer…», «Parece ser que…». PASSO 6: na imprensa aparece o condicional de rumor: «El accidente habría ocurrido de madrugada.» Significa que a fonte afirma, mas que o jornal não confirma. Você precisa reconhecê-lo; não precisa usá-lo ao falar.', {
        tag: 'Discurso indireto',
        comparacao: 'o português também tem esses recursos: «segundo a polícia», «afirmou que», «teria ocorrido» (condicional de rumor). Um cuidado: depois de «afirmar», «asegurar» e «anunciar» não se usa «de que»: «afirmó que», não «afirmó de que».',
        tabela: [
          { funcao: 'citar a fonte', estrutura: 'Según + fonte', exemplo: 'Según la policía, no hay heridos.' },
          { funcao: 'relatar uma declaração', estrutura: 'verbo + que + indicativo', exemplo: 'Anunció que cerraría el viernes.' },
          { funcao: 'relatar uma negação', estrutura: 'negar / desmentir + que + subjuntivo', exemplo: 'Negó que fuera cierto.' },
          { funcao: 'dado não confirmado', estrutura: 'Dicen que / Al parecer', exemplo: 'Al parecer, el tren llegará tarde.' },
          { funcao: 'rumor jornalístico', estrutura: 'condicional', exemplo: 'El suceso habría ocurrido de noche.' },
        ],
        erros: [['Afirmó de que no había daños.', 'Afirmó que no había daños.', 'Com verbos de relato não se usa «de que» (dequeísmo).'], ['Según a la policía, no hay heridos.', 'Según la policía, no hay heridos.', '«Según» não leva preposição depois.'], ['El portavoz negó que es cierto.', 'El portavoz negó que fuera cierto.', 'Quem nega não afirma: subjuntivo.']],
      }),
      producao(8, 'Escolha uma notícia que você leu hoje e conte em voz alta com «Según…», «afirmó que…» e «al parecer…». Use pelo menos três verbos de relato diferentes.'),
    ]),
    sessao('S3', 'Conversar sobre notícias e boatos', [
      revisao(4, 'Diga três formas de apresentar uma informação que você não pode confirmar (por exemplo, «Dicen que…»).'),
      palavras(5, [
        ['compartir', 'kompartír', 'compartilhar', ''], ['comprobar', 'komprobár', 'verificar, conferir', ''], ['fiarse de', 'fiárse de', 'confiar em', ''], ['desconfiar de', 'deskonfiár de', 'desconfiar de', ''],
        ['Me suena.', 'me suéna', 'me soa familiar.', ''],
      ]),
      gramatica(8, 'Falar de notícias, redes sociais e verificação', 'PASSO 1: para puxar assunto: «¿Has visto la noticia de…?», «He leído que…», «Me suena que…». PASSO 2: para duvidar: «No me fío de esa página.», «Desconfío de ese titular.», «No sé si es verdad.» O verbo «fiarse de» e «confiar en» são parecidos, mas com preposições diferentes. PASSO 3: para aconselhar, use o imperativo negativo, que usa o subjuntivo (aula 28): «No compartas una noticia sin comprobar la fuente.» e o afirmativo: «Comprueba la fuente.» PASSO 4: para generalizar: «Hay que comprobar la fuente», «Conviene leer más de un periódico.» PASSO 5: use o «se» impersonal para falar de hábitos coletivos: «Se comparte mucha información falsa por las redes.»', {
        tag: 'Mídia',
        comparacao: 'em português «confiar em» e «desconfiar de» têm preposições diferentes. Em espanhol, é parecido: «confiar en» e «desconfiar de». O verbo «fiarse» também usa «de»: «me fío de él». A armadilha é copiar o «em» do português e dizer «fiarse en».',
        tabela: [
          { objetivo: 'perguntar', frase: '¿Has visto la noticia del concierto?' },
          { objetivo: 'duvidar', frase: 'No me fío de esa página.' },
          { objetivo: 'aconselhar', frase: 'No compartas nada sin comprobar la fuente.' },
          { objetivo: 'dizer que é falso', frase: 'Eso es un bulo.' },
          { objetivo: 'generalizar', frase: 'Hay que leer más de un periódico.' },
        ],
        erros: [['Me fío en esa página.', 'Me fío de esa página.', '«Fiarse» leva «de».'], ['No compartes esa noticia.', 'No compartas esa noticia.', 'O imperativo negativo usa o subjuntivo: «compartas».'], ['Confío de él.', 'Confío en él.', 'Com «confiar», a preposição é «en».']],
      }),
      dialogo(4, 'Un mensaje en las redes / Uma mensagem nas redes', 'Isabel e Marcos conversam sobre uma mensagem que circula pela internet.', [
        ['Isabel', 'Marcos, ¿has visto lo que circula por las redes? Dicen que mañana cierran todas las tiendas del centro.', 'Marcos, você viu o que circula pelas redes? Dizem que amanhã fecham todas as lojas do centro.'],
        ['Marcos', '¿Quién lo dice? ¿Hay alguna fuente?', 'Quem diz isso? Tem alguma fonte?'],
        ['Isabel', 'Lo ha compartido mucha gente, pero no pone de dónde sale.', 'Muita gente compartilhou, mas não diz de onde vem.'],
        ['Marcos', 'Entonces yo no me fiaría. Seguro que es un bulo.', 'Então eu não confiaria. Com certeza é um boato.'],
        ['Isabel', 'Tienes razón. Voy a mirar la página del ayuntamiento.', 'Você tem razão. Vou olhar o site da prefeitura.'],
        ['Marcos', 'Buena idea. Y no lo compartas hasta comprobarlo.', 'Boa ideia. E não compartilhe até verificar.'],
        ['Isabel', 'Ya lo he comprobado: no han anunciado nada. Es falso.', 'Já verifiquei: não anunciaram nada. É falso.'],
        ['Marcos', 'Pues entonces mejor avisar a los demás.', 'Então é melhor avisar os outros.'],
      ]),
      texto(4, 'Abre una nueva biblioteca / Abre uma nova biblioteca (notícia inventada)', 'El ayuntamiento inauguró ayer una biblioteca pública en el barrio de Los Almendros, una zona que hasta ahora no tenía ninguna. El edificio, que antes fue una fábrica de tejidos, cuenta con tres plantas, una sala infantil y un espacio para estudiar. Según la concejala de Cultura, el proyecto ha necesitado dos años de obras. «Queríamos un lugar abierto a todos», aseguró durante la ceremonia. La biblioteca abrirá de lunes a sábado, de nueve de la mañana a nueve de la noche. Los vecinos celebraron la apertura con una pequeña fiesta en la plaza. Al parecer, ya se han apuntado más de trescientas personas para hacerse el carné.', 'A prefeitura inaugurou ontem uma biblioteca pública no bairro de Los Almendros, uma região que até agora não tinha nenhuma. O edifício, que antes foi uma fábrica de tecidos, conta com três andares, uma sala infantil e um espaço para estudar. Segundo a vereadora de Cultura, o projeto precisou de dois anos de obras. «Queríamos um lugar aberto a todos», assegurou durante a cerimônia. A biblioteca abrirá de segunda a sábado, das nove da manhã às nove da noite. Os moradores comemoraram a abertura com uma pequena festa na praça. Ao que parece, já se inscreveram mais de trezentas pessoas para fazer a carteirinha. (Notícia inventada para a aula.)', [
        ['¿Qué se inauguró y cuándo?', 'Una biblioteca pública, ayer.'], ['¿Qué había antes en el edificio?', 'Una fábrica de tejidos.'], ['¿Qué dijo la concejala?', 'Aseguró: «Queríamos un lugar abierto a todos».'],
      ]),
      producao(5, 'Explique em voz alta, em quatro frases, como você verifica se uma notícia é verdadeira antes de compartilhá-la. Use «hay que…», «comprobar la fuente» e «no compartas…».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 56', [
      revisao(5, 'Conte uma notícia curta usando «Según…», um verbo de relato e «al parecer». Depois invente um titular no estilo jornalístico.'),
      exercicios(20, [
        ouvir('Según la policía, no hay heridos', ['Según la policía, no hay heridos', 'Según la policía, no hubo heridos', 'Según a la policía, no hay heridos'], 'Según la policía, no hay heridos', 'Ouça «según» e o presente «hay».'),
        ouvir('Negó que fuera cierto', ['Negó que fuera cierto', 'Negó que es cierto', 'Dijo que es cierto'], 'Negó que fuera cierto', 'Negar + que + subjuntivo.'),
        ouvir('No compartas esa noticia', ['No compartas esa noticia', 'No compartes esa noticia', 'No comparta esa noticia'], 'No compartas esa noticia', 'Imperativo negativo de tú: «compartas».'),
        ditado('Eso es un bulo', 'Escreva: Eso es un bulo. («Bulo» = boato, notícia falsa.)'),
        ditado('He leído que cierran la biblioteca', 'Escreva: He leído que cierran la biblioteca. (perfecto «he leído»)'),
        ditado('Hay que comprobar la fuente', 'Escreva: Hay que comprobar la fuente. («Hay que» + infinitivo)'),
        mc('Como é o titular de um fato confirmado?', ['Un incendio destruye una nave industrial', 'Un incendio había destruido una nave industrial', 'Un incendio destruiría una nave industrial'], 'Un incendio destruye una nave industrial', 'O presente é o tempo típico dos titulares.'),
        mc('Qual é o equivalente a «jornal» no sentido de publicação?', ['el periódico', 'el jornal', 'el diálogo'], 'el periódico', '«Jornal» não existe em espanhol com esse sentido.'),
        mc('Qual frase está correta?', ['La alcaldesa afirmó que había terminado.', 'La alcaldesa afirmó de que había terminado.', 'La alcaldesa afirmó que había terminar.'], 'La alcaldesa afirmó que había terminado.', 'Sem «de» depois de «afirmar».'),
        mc('Para dizer «não confio nesse site», qual está certa?', ['No me fío de esa página.', 'No me fío en esa página.', 'No fío esa página.'], 'No me fío de esa página.', '«Fiarse de».'),
        mc('Qual expressão introduz uma informação não confirmada?', ['Al parecer', 'Con certeza', 'Sin duda'], 'Al parecer', 'Indica que o dado não está confirmado.'),
        lacuna('El club negó que el entrenador ___ (irse).', ['se fuera', 'se va', 'se irá'], 'se fuera', 'Negar + que + subjuntivo (imperfecto).'),
        lacuna('___ fuentes municipales, el proyecto costó dos millones.', ['Según', 'Para', 'Con'], 'Según', '«Según» introduz a fonte.'),
        lacuna('Ayer el ayuntamiento ___ una biblioteca. (inaugurar)', ['inauguró', 'ha inaugurado', 'inaugura'], 'inauguró', 'Com «ayer» use o indefinido.'),
        lacuna('No ___ nada sin comprobarlo. (compartir, tú)', ['compartas', 'compartes', 'compartir'], 'compartas', 'Imperativo negativo: subjuntivo.'),
        lacuna('La alcaldesa anunció que la biblioteca ___ en octubre. (abrir)', ['abriría', 'abrirá', 'abre'], 'abriría', 'Futuro do discurso direto vira condicional.'),
        ordem('Ordene: «Según la policía, no hay heridos.»', ['Según', 'la', 'policía,', 'no', 'hay', 'heridos.'], 'Según la policía, no hay heridos.', 'Fonte + informação.'),
        ordem('Ordene: «Hay que comprobar la fuente antes de compartir.»', ['Hay', 'que', 'comprobar', 'la', 'fuente', 'antes', 'de', 'compartir.'], 'Hay que comprobar la fuente antes de compartir.', 'Hay que + infinitivo.'),
        livre('Escreva em espanhol: Segundo a prefeitura, a biblioteca abrirá em outubro.', 'Según el ayuntamiento, la biblioteca abrirá en octubre.'),
      ]),
      producao(5, 'Escreva três linhas de uma notícia inventada sobre um evento da sua cidade: titular, uma frase de entradilla e uma citação com «aseguró que…».'),
    ]),
  ],
});
