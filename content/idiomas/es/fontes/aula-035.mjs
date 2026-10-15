import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 35, titulo: 'Trabalho e apresentação profissional', nivel: 'a2',
  objetivo: 'Dizer a profissão no masculino e no feminino, dizer onde e como se trabalha («en», «de», «como», «para»), descrever tarefas e experiência com «llevo», «desde hace», «he trabajado» e «trabajé», e se apresentar profissionalmente em poucas frases.',
  nota: 'Você fala da sua profissão, da sua experiência e se apresenta profissionalmente, com «tú» ou «usted». Próxima aula: telefone, convites e como marcar um encontro.',
  sessoes: [
    sessao('S1', 'Profissões e local de trabalho', [
      revisao(5, 'Reserve um quarto de hotel em voz alta e peça uma informação sobre o trem, em «usted» (aula 34).'),
      palavras(8, [
        ['el ingeniero, la ingeniera', 'el inheniéro, la inheniéra', 'o engenheiro, a engenheira', ''], ['el abogado, la abogada', 'el abogádo, la abogáda', 'o advogado, a advogada', ''], ['el camarero, la camarera', 'el kamaréro, la kamaréra', 'o garçom, a garçonete', ''], ['el enfermero, la enfermera', 'el enferméro, la enferméra', 'o enfermeiro, a enfermeira', ''],
        ['el dependiente, la dependienta', 'el dependiénte, la dependiénta', 'o vendedor, a vendedora (de loja)', ''], ['el periodista, la periodista', '', 'o jornalista, a jornalista', ''], ['el jefe, la jefa', 'el héfe, la héfa', 'o chefe, a chefe', ''], ['la empresa', '', 'a empresa', ''],
      ]),
      gramatica(12, 'Dizer a profissão e onde se trabalha', 'PASSO 1: para perguntar a profissão, use «¿A qué te dedicas?» (tú) ou «¿A qué se dedica usted?» (usted). Também se ouve «¿En qué trabajas?». PASSO 2: para responder, use «ser» e a profissão, sem artigo: «Soy ingeniera», «Soy camarero». O artigo só aparece quando há um adjetivo: «Soy una buena médica». PASSO 3: o feminino de quase todas as profissões em «-o» troca por «-a» (abogado → abogada, médico → médica). As em «-or» ganham «-a» (profesor → profesora). Algumas não mudam: «el periodista, la periodista», «el estudiante, la estudiante», «el dentista, la dentista». Há também formas irregulares: «el actor, la actriz» e «el jefe, la jefa». PASSO 4: o lugar de trabalho leva «en»: «trabajo en una empresa», «en un banco», «en un hospital». A função leva «de» ou «como»: «trabajo de camarero» e «trabajo como camarero». O empregador leva «para»: «trabajo para una empresa alemana». O contato leva «con»: «trabajo con niños». PASSO 5: «me dedico a» + substantivo ou infinitivo: «Me dedico a la enseñanza», «Me dedico a vender seguros». PASSO 6: para dizer pelo que você responde, use «soy responsable de» e «me encargo de»: «Soy responsable de las ventas», «Me encargo de los clientes». PASSO 7: o horário se diz com «de… a…»: «Trabajo de lunes a viernes, de nueve a cinco». PASSO 8: falsos amigos: «oficina» é o escritório (e a oficina de conserto é «taller»), «carrera» é o curso de graduação (e também corrida) e «colegio» é escola de ensino fundamental e médio, e não faculdade (que é «universidad» ou «facultad»). Na Espanha, «paro» é desemprego (estar en paro).', {
        tag: 'Trabalho',
        comparacao: 'em português também dizemos «sou médico» sem artigo, e o espanhol faz o mesmo. A novidade é o feminino (abogada, ingeniera), os verbos de lugar («en la empresa», sem «na») e os falsos amigos: «oficina» não é oficina de conserto, mas escritório; «taller» é a oficina de carros.',
        tabela: [
          { masculino: 'el ingeniero', feminino: 'la ingeniera', frase: 'Soy ingeniera de software.' },
          { masculino: 'el abogado', feminino: 'la abogada', frase: 'Mi hermana es abogada.' },
          { masculino: 'el camarero', feminino: 'la camarera', frase: 'Trabajo de camarero en un bar.' },
          { masculino: 'el enfermero', feminino: 'la enfermera', frase: 'Es enfermera en un hospital.' },
          { masculino: 'el dependiente', feminino: 'la dependienta', frase: 'Trabajo como dependienta en una tienda.' },
          { masculino: 'el periodista', feminino: 'la periodista', frase: 'Mi vecino es periodista.' },
          { masculino: 'el actor', feminino: 'la actriz', frase: 'Ella es actriz.' },
        ],
        erros: [['Soy un médico.', 'Soy médico.', 'Sem adjetivo, a profissão não leva artigo.'], ['Ella es abogado.', 'Ella es abogada.', 'A profissão concorda com o gênero de quem é.'], ['Trabajo en camarero.', 'Trabajo de camarero. / Trabajo como camarero.', 'A função usa «de» ou «como»; «en» é o lugar.'], ['Trabajo na oficina.', 'Trabajo en la oficina.', 'Em espanhol não há «no, na»; usa-se «en la».']],
      }),
      producao(5, 'Diga em voz alta a profissão de cinco pessoas que você conhece e onde elas trabalham: «Mi tío es…, trabaja en…»'),
    ]),
    sessao('S2', 'Tarefas e experiência', [
      revisao(4, 'Diga a sua profissão e a de um amigo, com «soy» e «es», e onde trabalham, com «en».'),
      palavras(6, [
        ['el sueldo, el salario', 'el suéldo, el salário', 'o salário', ''], ['el contrato', 'el kontráto', 'o contrato', ''], ['la experiencia', 'la eksperiénthia', 'a experiência', ''], ['el currículum', 'el kurríkulum', 'o currículo (CV)', ''], ['la entrevista', 'la entrebísta', 'a entrevista', ''], ['el puesto', 'el puésto', 'o cargo, a vaga', ''],
      ]),
      gramatica(12, 'Falar do que você faz e da sua experiência', 'PASSO 1: para dizer o que se faz, use o presente: «Atiendo a los clientes», «Preparo informes», «Respondo correos», «Organizo reuniones». PASSO 2: para dizer há quanto tempo, use «llevo» + tempo + gerúndio: «Llevo tres años trabajando aquí», ou «desde hace»: «Trabajo aquí desde hace tres años». PASSO 3: para experiência até hoje, use o pretérito perfecto (aula 17): «He trabajado en tres empresas.» Para um período fechado e datado, use o indefinido (aulas 19 e 20): «Trabajé en un banco de 2018 a 2021.» Para o hábito de antes, use o imperfecto (aula 21): «Antes trabajaba en una tienda.» PASSO 4: para a experiência, diga «tengo experiencia en ventas» ou «tengo cinco años de experiencia como programador». PASSO 5: para as habilidades, use «sé» + infinitivo: «Sé usar Excel», «Hablo portugués, español e inglés». PASSO 6: para os estudos, o verbo é «estudiar» sem preposição: «Estudié ingeniería en São Paulo», «Estudié Derecho». PASSO 7: para dizer que você procura trabalho, use «estoy buscando» (aula 30) e «busco un puesto de…»: «Estoy buscando un puesto de camarero.» PASSO 8: para um desejo, use o condicional de cortesia (aula 29): «Me gustaría trabajar en una empresa internacional.» PASSO 9: «el puesto» pode ser a vaga ou o cargo: «un puesto de trabajo». «Empleo» é emprego e «trabajo» é o trabalho ou o emprego.', {
        tag: 'Trabalho',
        comparacao: 'em português dizemos «moro aqui há três anos» e «faz três anos que trabalho aqui». Em espanhol, a pergunta «há quanto tempo» se responde com «desde hace» ou «llevo… + gerúndio», sempre no presente, porque a ação continua. Os tempos do passado funcionam como nas aulas 17 a 22: perfecto para a experiência aberta, indefinido para o período fechado e imperfecto para o hábito antigo.',
        tabela: [
          { tempo: 'presente (agora)', frase: 'Atiendo a los clientes.', traducao: 'Atendo os clientes.' },
          { tempo: 'llevo + gerúndio', frase: 'Llevo tres años trabajando aquí.', traducao: 'Faz três anos que trabalho aqui.' },
          { tempo: 'desde hace', frase: 'Trabajo aquí desde hace tres años.', traducao: 'Trabalho aqui há três anos.' },
          { tempo: 'perfecto', frase: 'He trabajado en tres empresas.', traducao: 'Trabalhei em três empresas (até hoje).' },
          { tempo: 'indefinido', frase: 'Trabajé en un banco de 2018 a 2021.', traducao: 'Trabalhei num banco de 2018 a 2021.' },
          { tempo: 'imperfecto', frase: 'Antes trabajaba en una tienda.', traducao: 'Antes eu trabalhava numa loja.' },
        ],
        erros: [['Trabajo aquí hace tres años.', 'Trabajo aquí desde hace tres años.', 'Falta o «desde»: «desde hace» + período.'], ['Llevo tres años a trabajar aquí.', 'Llevo tres años trabajando aquí.', 'Depois de «llevo» + tempo, vem o gerúndio.'], ['Estudié en ingeniería.', 'Estudié ingeniería.', '«Estudiar» não leva preposição antes da matéria.'], ['He trabajado en un banco de 2018 a 2021.', 'Trabajé en un banco de 2018 a 2021.', 'Período fechado e datado: indefinido.']],
      }),
      producao(8, 'Fale 1 minuto em voz alta sobre a sua experiência profissional ou a de um conhecido: onde trabalha, desde quando, o que fazia antes e o que gostaria de fazer.'),
    ]),
    sessao('S3', 'Apresentar-se profissionalmente', [
      revisao(4, 'Responda em voz alta: «¿A qué se dedica usted? ¿Desde cuándo? ¿Qué hacía antes?»'),
      palavras(5, [
        ['Quisiera presentarme.', 'kisiéra presentárme', 'Gostaria de me apresentar.', ''], ['Me encargo de…', 'me enkárgo de', 'Eu cuido de…, eu sou responsável por…', ''], ['Soy responsable de…', '', 'Sou responsável por…', ''], ['Tengo experiencia en…', '', 'Tenho experiência em…', ''], ['trabajo en equipo', '', 'trabalho em equipe', ''],
      ]),
      gramatica(8, 'Apresentar-se em cinco frases', 'PASSO 1: uma apresentação profissional curta tem cinco partes: quem sou, o que faço, onde trabalho, a minha experiência e o que busco. PASSO 2: para abrir, diga «Buenos días, me llamo… y soy…» ou «Quisiera presentarme.» PASSO 3: para o presente, diga «Actualmente trabajo en…» e para o passado, «Antes trabajaba en…». PASSO 4: para a experiência, diga «Tengo experiencia en…» e «Llevo… años trabajando en…». PASSO 5: para o que busca, use «Estoy buscando…» ou «Me gustaría…». PASSO 6: na entrevista, o entrevistador usa «usted»: «¿A qué se dedica?», «¿Cuánto tiempo lleva en su puesto?», «¿Qué idiomas habla?», «¿Por qué quiere trabajar con nosotros?». PASSO 7: ao falar de idiomas, o «y» vira «e» antes de um som «i»: «español e inglés», mas «español y portugués». PASSO 8: em alguns países da América Latina, o CV também se chama «hoja de vida».', {
        tag: 'Trabalho',
        comparacao: 'em português a mesma estrutura funciona: «eu sou…, trabalho na…, tenho experiência em…, busco…». Em espanhol, a diferença é a troca de «y» por «e» antes de «i» (e de «o» por «u» antes de «o»: «siete u ocho»), e as preposições: «responsable de», «trabajar en» e «experiencia en».',
        erros: [['Hablo español y inglés.', 'Hablo español e inglés.', 'O «y» vira «e» antes de som «i».'], ['Soy responsable por las ventas.', 'Soy responsable de las ventas.', '«Responsable de».'], ['Trabajo con un banco.', 'Trabajo en un banco.', 'A empresa onde se trabalha pede «en».'], ['Tengo cinco años experiencia.', 'Tengo cinco años de experiencia.', 'Falta o «de» entre o tempo e a experiência.']],
      }),
      texto(8, 'Mi presentación / Minha apresentação', 'Me llamo Sofía Castro y soy brasileña. Vivo en Valencia desde hace tres años y soy ingeniera de software. Trabajo en una empresa pequeña, pero antes trabajaba en una tienda de ordenadores. Estudié ingeniería en Brasil, de 2013 a 2018, y he trabajado en tres ciudades. En mi puesto me encargo de revisar los programas y de hablar con los clientes. Hablo portugués, español e inglés. Ahora estoy buscando un puesto con más responsabilidad, porque me gustaría dirigir un equipo.', 'Eu me chamo Sofía Castro e sou brasileira. Moro em Valência há três anos e sou engenheira de software. Trabalho numa empresa pequena, mas antes trabalhava numa loja de computadores. Estudei engenharia no Brasil, de 2013 a 2018, e trabalhei em três cidades. No meu cargo, cuido de revisar os programas e de falar com os clientes. Falo português, espanhol e inglês. Agora estou procurando um cargo com mais responsabilidade, porque eu gostaria de dirigir uma equipe.', [
        ['¿De dónde es Sofía y dónde vive?', 'Es brasileña y vive en Valencia desde hace tres años.'], ['¿Dónde trabajaba antes?', 'En una tienda de ordenadores.'], ['¿Qué estudió y cuándo?', 'Ingeniería, de 2013 a 2018.'], ['¿Qué idiomas habla?', 'Portugués, español e inglés.'],
      ]),
      producao(5, 'Escreva e diga em voz alta a sua própria apresentação profissional em cinco frases, copiando a estrutura do texto.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 35', [
      revisao(5, 'Diga em voz alta, em «usted», uma apresentação profissional de 30 segundos.'),
      exercicios(20, [
        ouvir('Soy ingeniera de software', ['Soy ingeniera de software', 'Soy una ingeniera de software', 'Soy ingeniero de software'], 'Soy ingeniera de software', 'Ouça o feminino «ingeniera» e a ausência de artigo.'),
        ouvir('Llevo tres años trabajando aquí', ['Llevo tres años trabajando aquí', 'Llevo tres años a trabajar aquí', 'Trabajo hace tres años aquí'], 'Llevo tres años trabajando aquí', '«Llevo» + tempo + gerúndio.'),
        ouvir('Antes trabajaba en una tienda', ['Antes trabajaba en una tienda', 'Antes trabajé en una tienda', 'Antes trabajo en una tienda'], 'Antes trabajaba en una tienda', 'Hábito antigo: imperfecto.'),
        ditado('Trabajo como dependienta', 'Escreva: Trabajo como dependienta.'), ditado('Hablo español e inglés', 'Escreva: Hablo español e inglés. O «y» vira «e» antes de «i».'), ditado('Me encargo de los clientes', 'Escreva: Me encargo de los clientes.'),
        mc('Como se diz «Sou advogada»?', ['Soy abogada.', 'Soy una abogada.', 'Soy abogado.'], 'Soy abogada.', 'Feminino sem artigo.'),
        mc('Qual frase indica a função, e não o lugar?', ['Trabajo de camarero.', 'Trabajo en un bar.', 'Trabajo para una empresa.'], 'Trabajo de camarero.', '«De» ou «como» para a função; «en» para o lugar.'),
        mc('O que significa «oficina» em espanhol?', ['escritório', 'oficina de conserto', 'fábrica'], 'escritório', 'Falso amigo: a oficina de conserto é «taller».'),
        mc('Qual forma é correta?', ['Hablo portugués e inglés.', 'Hablo portugués y inglés.', 'Hablo portugués u inglés.'], 'Hablo portugués e inglés.', 'Antes de som «i», o «y» vira «e».'),
        mc('Qual frase usa o período fechado e datado?', ['Trabajé en un banco de 2018 a 2021.', 'He trabajado en un banco desde 2018.', 'Trabajaba en un banco en 2018.'], 'Trabajé en un banco de 2018 a 2021.', 'Período fechado: indefinido.'),
        lacuna('Trabajo ___ una empresa pequeña. (em)', ['en', 'de', 'con'], 'en', 'O lugar pede «en».'), lacuna('Trabajo aquí ___ hace tres años.', ['desde', 'por', 'en'], 'desde', '«Desde hace» + período.'), lacuna('Soy responsable ___ las ventas.', ['de', 'por', 'a'], 'de', '«Responsable de».'), lacuna('Antes ___ en una tienda. (eu trabalhava)', ['trabajaba', 'trabajé', 'trabajo'], 'trabajaba', 'Hábito no passado: imperfecto.'), lacuna('Ella es ___ . (enfermeira)', ['enfermera', 'enfermero', 'enfermeira'], 'enfermera', 'Feminino de «enfermero».'),
        ordem('Ordene: «Llevo tres años trabajando en esta empresa.»', ['Llevo', 'tres', 'años', 'trabajando', 'en', 'esta', 'empresa.'], 'Llevo tres años trabajando en esta empresa.', 'Llevo + tempo + gerúndio.'), ordem('Ordene: «¿A qué se dedica usted?»', ['¿A', 'qué', 'se', 'dedica', 'usted?'], '¿A qué se dedica usted?', 'Pergunta formal sobre a profissão.'),
        livre('Escreva em espanhol: Sou engenheiro. Trabalho numa empresa pequena há dois anos. Antes trabalhava numa loja.', 'Soy ingeniero. Trabajo en una empresa pequeña desde hace dos años. Antes trabajaba en una tienda.'),
        lacuna('Ellos son ___ . (garçons)', ['camareras', 'camarero', 'camareros'], 'camareros', 'Masculino plural: «-o» + «-s».'),
        lacuna('Llevo tres años ___ aquí. (trabalhando)', ['trabajar', 'trabajado', 'trabajando'], 'trabajando', '«Llevo» + tempo + gerúndio.'),
        lacuna('Trabajo aquí ___ hace dos años.', ['desde', 'de', 'a'], 'desde', '«Desde hace» + período indica há quanto tempo.'),
        lacuna('Tengo experiencia ___ ventas. (em)', ['de', 'en', 'con'], 'en', '«Tener experiencia en» + área.'),
        mc('Como se pergunta a profissão a um senhor?', ['¿A qué te dedicas usted?', '¿A qué se dedica usted?', '¿Qué dedica usted?'], '¿A qué se dedica usted?', 'Com «usted», o verbo é «se dedica».'),
        mc('Qual é o feminino de «el jefe»?', ['la jefa', 'la jefe', 'la jefea'], 'la jefa', 'O feminino de «jefe» é «jefa».'),
        mc('O que significa «el currículum»?', ['a entrevista', 'o cargo', 'o currículo'], 'o currículo', '«Currículum» é o CV.'),
        ordem('Ordene: «Llevo tres años trabajando en una empresa.»', ['Llevo', 'tres', 'años', 'trabajando', 'en', 'una', 'empresa.'], 'Llevo tres años trabajando en una empresa.', '«Llevo» + tempo + gerúndio.'),
        ordem('Ordene: «Soy responsable de las ventas.»', ['Soy', 'responsable', 'de', 'las', 'ventas.'], 'Soy responsable de las ventas.', '«Responsable de» + área.'),
        livre('Escreva em espanhol: Sou engenheiro e trabalho em uma empresa grande.', 'Soy ingeniero y trabajo en una empresa grande.'),
        livre('Escreva em espanhol: Antes eu trabalhava como vendedora.', 'Antes trabajaba como dependienta.'),
      ]),
      producao(5, 'Responda em voz alta, como numa entrevista: «¿A qué se dedica? ¿Desde cuándo? ¿Qué idiomas habla? ¿Qué busca?»'),
    ]),
  ],
});
