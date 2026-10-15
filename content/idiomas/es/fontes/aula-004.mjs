import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 4, titulo: 'Presente em -ar, negação e perguntas', nivel: 'a1',
  objetivo: 'Conjugar os verbos regulares em -ar no presente, negar com «no», fazer perguntas de sim ou não e com «qué, dónde, cuándo, por qué, cómo, cuánto», e distinguir «muy» de «mucho» e «por qué» de «porque».',
  nota: 'Você fala do que faz, nega, pergunta e responde com os verbos em -ar. Próxima aula: artigos, gênero e plural dos substantivos e o uso de «hay».',
  sessoes: [
    sessao('S1', 'Os verbos regulares em -ar', [
      revisao(5, 'Diga a sua idade com «tener» e conjugue «ser» de memória. Depois apresente um amigo: nome, país e profissão.'),
      palavras(8, [
        ['hablar', 'ablár', 'falar', ''], ['trabajar', 'trabahár', 'trabalhar', ''], ['estudiar', 'estudiár', 'estudar', ''], ['comprar', 'komprár', 'comprar', ''],
        ['cocinar', 'kothinár', 'cozinhar', ''], ['escuchar', 'eskutchár', 'escutar', ''], ['viajar', 'biahár', 'viajar', ''], ['bailar', 'bailár', 'dançar', ''],
      ]),
      gramatica(12, 'O presente dos verbos em -ar', 'PASSO 1: o infinitivo dos verbos deste grupo termina em «-ar»: «hablar», «trabajar». Tire o «-ar» e fica o radical: «habl-», «trabaj-». PASSO 2: acrescente ao radical as terminações do presente: -o, -as, -a, -amos, -áis, -an. «Hablo, hablas, habla, hablamos, habláis, hablan.» PASSO 3: a sílaba forte está no radical, menos em «nosotros» e «vosotros», onde cai na terminação: «HAblo», mas «haBLAmos», «haBLÁis». PASSO 4: o pronome sujeito quase sempre se omite: «Hablo español», e não «Yo hablo español», salvo para contraste. PASSO 5: «usted» usa a forma de «él», e «ustedes» a de «ellos»: «Usted trabaja», «Ustedes trabajan». «Vosotros» (Espanha) tem o til: «habláis». PASSO 6: o presente serve para o hábito e para o que acontece agora, e também para um futuro próximo: «Trabajo en Madrid», «Mañana viajo a Sevilla». PASSO 7: atenção à pronúncia: o «n» de «hablan» soa por inteiro, sem o nasal do português «falam»; o «j» de «trabajo» é um «h» áspero (trabáho). PASSO 8: alguns verbos em -ar mudam a vogal do radical (pensar → pienso, contar → cuento). Eles aparecem nas próximas aulas; os desta aula são todos regulares.', {
        tag: 'Verbos',
        comparacao: 'a conjugação é muito parecida com a do português: «falo, falas, fala, falamos, falais, falam» corresponde a «hablo, hablas, habla, hablamos, habláis, hablan». As armadilhas são a terminação «-an», que não é nasal como o «-am» de «falam», e o «-áis» de «habláis», que não existe em português.',
        tabelas: [
          { titulo: 'hablar (falar)', linhas: [
            { pronome: 'yo', forma: 'hablo', exemplo: 'Hablo español.' },
            { pronome: 'tú', forma: 'hablas', exemplo: '¿Hablas portugués?' },
            { pronome: 'él / ella / usted', forma: 'habla', exemplo: 'Usted habla muy bien.' },
            { pronome: 'nosotros, nosotras', forma: 'hablamos', exemplo: 'Hablamos mucho.' },
            { pronome: 'vosotros, vosotras', forma: 'habláis', exemplo: '¿Habláis inglés?' },
            { pronome: 'ellos, ellas, ustedes', forma: 'hablan', exemplo: 'Ellos hablan francés.' },
          ] },
          { titulo: 'Outros verbos regulares em -ar', linhas: [
            { infinitivo: 'trabajar', yo: 'trabajo', tu: 'trabajas', el_ella_usted: 'trabaja', nosotros: 'trabajamos', vosotros: 'trabajáis', ellos_ustedes: 'trabajan' },
            { infinitivo: 'estudiar', yo: 'estudio', tu: 'estudias', el_ella_usted: 'estudia', nosotros: 'estudiamos', vosotros: 'estudiáis', ellos_ustedes: 'estudian' },
            { infinitivo: 'comprar', yo: 'compro', tu: 'compras', el_ella_usted: 'compra', nosotros: 'compramos', vosotros: 'compráis', ellos_ustedes: 'compran' },
            { infinitivo: 'cocinar', yo: 'cocino', tu: 'cocinas', el_ella_usted: 'cocina', nosotros: 'cocinamos', vosotros: 'cocináis', ellos_ustedes: 'cocinan' },
          ] },
        ],
        erros: [['Tú habla español.', 'Tú hablas español.', 'Com «tú», a terminação é «-as».'], ['Nosotros trabajan en Madrid.', 'Nosotros trabajamos en Madrid.', 'Com «nosotros», a terminação é «-amos».'], ['Ellos estudia.', 'Ellos estudian.', 'Com «ellos», a terminação é «-an».'], ['Vosotros hablais.', 'Vosotros habláis.', 'A forma de «vosotros» leva til na terminação.']],
      }),
      producao(5, 'Diga cinco frases sobre você com verbos desta aula: «Hablo… Trabajo… Estudio… Cocino… Viajo…» Depois diga o que um amigo faz, com a forma de «él, ella».'),
    ]),
    sessao('S2', 'Negação e perguntas', [
      revisao(4, 'Conjugue «hablar» e «trabajar» de memória, de «yo» a «ellos». Diga uma frase com cada forma.'),
      palavras(6, [
        ['¿qué?', 'ké', 'o que?', ''], ['¿dónde?', 'dónde', 'onde?', ''], ['¿cuándo?', 'kuándo', 'quando?', ''], ['¿por qué?', 'por ké', 'por quê?', ''], ['¿cómo?', 'cómo', 'como?', ''], ['¿cuánto, cuánta?', 'kuánto, kuánta', 'quanto, quanta?', ''],
      ]),
      gramatica(12, 'Negar, perguntar e responder', 'PASSO 1: a negação é «no», sempre antes do verbo: «No hablo alemán.» Se há pronome, ele vem antes do «no»: «Yo no hablo alemán.» PASSO 2: na resposta curta repete-se o «no»: «¿Hablas inglés? — No, no hablo inglés.» O primeiro é a resposta; o segundo nega o verbo. PASSO 3: com «nunca» e «nada», a negação funciona como em português: «No trabajo nunca» ou, com a palavra no início, «Nunca trabajo». Os dois significam o mesmo. PASSO 4: a pergunta de sim ou não tem a mesma ordem da afirmação, com entonação ascendente e o sinal «¿ ?»: «¿Trabajas en Madrid?» Também se pode pôr o sujeito depois do verbo: «¿Trabaja Ana en Madrid?» PASSO 5: as perguntas com interrogativo começam com a palavra interrogativa, e o verbo vem logo depois: «¿Dónde trabajas?», «¿Qué estudias?», «¿Cuándo viajas?» PASSO 6: «por qué» (duas palavras, com til) pergunta; «porque» (uma palavra, sem til) responde: «¿Por qué estudias español? — Porque viajo mucho.» PASSO 7: «cuánto» concorda com o substantivo: «cuánto», «cuánta», «cuántos», «cuántas». PASSO 8: para pedir confirmação, acrescenta-se «¿verdad?» ou «¿no?»: «Trabajas en Madrid, ¿verdad?»', {
        tag: 'Perguntas',
        comparacao: 'o «no» antes do verbo corresponde ao nosso «não». As diferenças são o sinal «¿» de abertura, o til nos interrogativos («qué», «dónde») e o par «por qué» (pergunta) × «porque» (resposta), que se escrevem como em português, mas sem o «por que» e o «por quê» finais.',
        tabelas: [
          { titulo: 'Palavras interrogativas', linhas: [
            { interrogativo: '¿Qué?', significado: 'o que', exemplo: '¿Qué estudias?' }, { interrogativo: '¿Dónde?', significado: 'onde', exemplo: '¿Dónde trabajas?' }, { interrogativo: '¿Cuándo?', significado: 'quando', exemplo: '¿Cuándo viajas?' },
            { interrogativo: '¿Cómo?', significado: 'como', exemplo: '¿Cómo cocinas?' }, { interrogativo: '¿Cuánto?', significado: 'quanto', exemplo: '¿Cuántos idiomas hablas?' }, { interrogativo: '¿Por qué?', significado: 'por quê', exemplo: '¿Por qué estudias?' },
          ] },
          { titulo: 'por qué, porque, porqué', linhas: [
            { forma: 'por qué', uso: 'pergunta', exemplo: '¿Por qué trabajas aquí?' }, { forma: 'porque', uso: 'resposta, causa', exemplo: 'Porque vivo aquí.' }, { forma: 'porqué', uso: 'substantivo: o motivo', exemplo: 'Este es el porqué.' },
          ] },
        ],
        erros: [['Hablo no inglés.', 'No hablo inglés.', 'O «no» vem antes do verbo.'], ['Trabajas dónde?', '¿Dónde trabajas?', 'O interrogativo vem primeiro, e a pergunta abre com «¿».'], ['¿Por que estudias español?', '¿Por qué estudias español?', 'Na pergunta, são duas palavras e «qué» leva til.'], ['Por qué trabajo en Madrid. (resposta)', 'Porque trabajo en Madrid.', 'Na resposta, é uma palavra só, sem til.']],
      }),
      producao(8, 'Responda em voz alta: «¿Hablas inglés? ¿Dónde trabajas? ¿Qué estudias? ¿Por qué estudias español? ¿Viajas mucho?» Depois faça as mesmas perguntas a um amigo imaginário, com «usted».'),
    ]),
    sessao('S3', 'Verbos em contexto', [
      revisao(4, 'Faça três perguntas com interrogativos e três respostas negativas com «no».'),
      palavras(5, [
        ['siempre', 'siémpre', 'sempre', ''], ['a veces', 'a béthes', 'às vezes', ''], ['nunca', 'núnka', 'nunca', ''], ['mucho', 'mútcho', 'muito (com verbo)', ''], ['poco', 'póko', 'pouco', ''], ['muy', 'mui', 'muito (antes de adjetivo ou advérbio)', ''],
      ]),
      gramatica(8, 'Advérbios, muy × mucho e o a pessoal', 'PASSO 1: os advérbios de frequência ficam perto do verbo: «Siempre trabajo aquí», «A veces cocino», «No viajo nunca». PASSO 2: «mucho» e «poco» depois do verbo são invariáveis: «Hablo mucho», «Estudio poco». PASSO 3: «muy» só vem antes de adjetivo ou advérbio: «muy simpático», «muy bien». Com verbo, use «mucho»: «Trabajo mucho», nunca «trabajo muy». PASSO 4: o «a pessoal»: antes de um complemento de pessoa conhecida, acrescenta-se «a»: «Escucho a Ana», mas «Escucho música». PASSO 5: falsos amigos de verbos em -ar: «pegar» é bater, colar, e não pegar; para pegar um ônibus diz-se «tomar el autobús» (na Espanha também «coger», que em boa parte da América Latina é ofensivo e deve ser evitado). «Llamar» é chamar e também telefonar.', {
        tag: 'Verbos',
        comparacao: 'em português «muito» serve para o verbo e para o adjetivo; em espanhol são duas palavras, «mucho» e «muy». O «a pessoal» não tem equivalente: em português podemos dizer «vejo Ana» ou «vejo a Ana», mas em espanhol o «a» é obrigatório diante de pessoa conhecida.',
        tabela: [
          { palavra: 'muy', usa_se: 'antes de adjetivo ou advérbio', exemplo: 'Es muy simpática.' },
          { palavra: 'mucho', usa_se: 'depois do verbo', exemplo: 'Trabajo mucho.' },
          { palavra: 'siempre, a veces, nunca', usa_se: 'perto do verbo', exemplo: 'Siempre estudio.' },
          { palavra: 'a (pessoal)', usa_se: 'antes de pessoa que é complemento', exemplo: 'Escucho a Ana.' },
          { palavra: 'pegar', usa_se: 'significa bater, colar; não é «pegar»', exemplo: 'Tomo el autobús.' },
        ],
        erros: [['Hablo muy.', 'Hablo mucho.', '«Muy» só vem antes de adjetivo ou advérbio.'], ['Ella es mucho simpática.', 'Ella es muy simpática.', 'Antes de adjetivo, use «muy».'], ['Escucho Ana.', 'Escucho a Ana.', 'Pessoa como complemento pede «a».'], ['Pego el autobús.', 'Tomo el autobús.', '«Pegar» é bater ou colar; para o ônibus, use «tomar».']],
      }),
      texto(8, 'Un día normal / Um dia comum', 'Me llamo Clara y soy de Sevilla, pero vivo en Madrid. Trabajo en un hotel y estudio inglés. Mi amigo Pablo no trabaja en el hotel: canta y baila en un bar. Siempre escuchamos música y a veces cocinamos juntos. Los dos hablamos mucho, pero no hablamos de trabajo.', 'Eu me chamo Clara e sou de Sevilha, mas moro em Madri. Trabalho em um hotel e estudo inglês. Meu amigo Pablo não trabalha no hotel: canta e dança em um bar. Sempre escutamos música e às vezes cozinhamos juntos. Nós dois falamos muito, mas não falamos de trabalho.', [
        ['¿De dónde es Clara?', 'De Sevilla.'], ['¿Dónde vive?', 'En Madrid.'], ['¿Dónde trabaja Clara?', 'En un hotel.'], ['¿Quién canta y baila?', 'Pablo.'], ['¿Qué escuchan siempre?', 'Música.'],
      ]),
      producao(5, 'Escreva e diga em voz alta cinco frases sobre a sua rotina, com «siempre», «a veces», «nunca», «mucho» e «muy».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 4', [
      revisao(5, 'Diga o que você faz e o que não faz, com seis verbos em -ar. Depois faça duas perguntas a um amigo.'),
      exercicios(20, [
        ouvir('Hablamos español', ['Hablamos español', 'Hablan español', 'Habláis español'], 'Hablamos español', 'Ouça o «mos» de «hablamos».'), ouvir('Trabajo en Madrid', ['Trabajo en Madrid', 'Trabaja en Madrid', 'Trabajan en Madrid'], 'Trabajo en Madrid', 'Ouça o «o» final de «trabajo».'), ouvir('¿Dónde estudias?', ['¿Dónde estudias?', '¿Dónde estudia?', '¿Cuándo estudias?'], '¿Dónde estudias?', 'Ouça «dónde» e o «s» final de «estudias».'),
        ditado('Estudio español', 'Escreva: Estudio español.'), ditado('No bailo mucho', 'Escreva: No bailo mucho.'), ditado('¿Por qué estudias español?', 'Escreva: ¿Por qué estudias español?'),
        mc('Qual é a forma de «tú» de «cantar»?', ['cantas', 'canta', 'cantáis'], 'cantas', 'Com «tú», a terminação é «-as».'),
        mc('Qual é a forma de «nosotros» de «trabajar»?', ['trabajamos', 'trabajáis', 'trabajan'], 'trabajamos', 'Com «nosotros», a terminação é «-amos».'),
        mc('Como se diz «Eu não falo alemão»?', ['No hablo alemán.', 'Hablo no alemán.', 'No hablas alemán.'], 'No hablo alemán.', 'O «no» vem antes do verbo.'),
        mc('Como se responde a «¿Por qué estudias español?»', ['Porque viajo mucho.', 'Por qué viajo mucho.', 'Porqué viajo mucho.'], 'Porque viajo mucho.', 'A resposta usa «porque», uma palavra, sem til.'),
        mc('Qual frase está correta?', ['Hablo mucho.', 'Hablo muy.', 'Hablo muy mucho.'], 'Hablo mucho.', 'Com verbo, usa-se «mucho»; «muy» só antes de adjetivo ou advérbio.'),
        mc('Como se diz «pegar o ônibus» de forma segura em toda a América Latina e na Espanha?', ['tomar el autobús', 'pegar el autobús', 'bajar el autobús'], 'tomar el autobús', '«Pegar» é bater ou colar; «coger» é evitado em boa parte da América Latina.'),
        lacuna('Yo ___ español. (hablar)', ['hablo', 'hablas', 'habla'], 'hablo', 'Com «yo», a terminação é «-o».'), lacuna('Ellos ___ en un hotel. (trabajar)', ['trabajan', 'trabaja', 'trabajamos'], 'trabajan', 'Com «ellos», a terminação é «-an».'),
        lacuna('___ trabajas? (onde)', ['¿Dónde', '¿Cuándo', '¿Qué'], '¿Dónde', '«Dónde» pergunta o lugar.'), lacuna('Escucho ___ Ana.', ['a', 'con', 'de'], 'a', 'O «a pessoal» vem antes de pessoa.'), lacuna('Ella es ___ simpática. (muito)', ['muy', 'mucho', 'mucha'], 'muy', 'Antes de adjetivo, use «muy».'),
        ordem('Ordene: «No hablo alemán.»', ['No', 'hablo', 'alemán.'], 'No hablo alemán.', 'O «no» vem antes do verbo.'), ordem('Ordene: «¿Dónde trabajas?»', ['¿Dónde', 'trabajas?'], '¿Dónde trabajas?', 'O interrogativo abre a pergunta.'),
        livre('Escreva em espanhol: Eu falo português e estudo espanhol.', 'Hablo portugués y estudio español.'),
        lacuna('Nosotros ___ español. (estudiar)', ['estudian', 'estudio', 'estudiamos'], 'estudiamos', '«Nosotros» pede a terminação «-amos».'),
        lacuna('Tú ___ música. (escutar)', ['escuchas', 'escucha', 'escucho'], 'escuchas', 'Com «tú», os verbos em -ar terminam em «-as».'),
        lacuna('¿___ viajas? — En agosto. (quando)', ['Dónde', 'Cómo', 'Cuándo'], 'Cuándo', 'A resposta indica tempo, então a pergunta é «cuándo».'),
        lacuna('Ella trabaja ___ . (muito)', ['muy', 'poco', 'mucho'], 'mucho', 'Depois de um verbo usa-se «mucho»; «muy» só vem antes de adjetivo ou advérbio.'),
        mc('Qual é a forma de «ellos» de «comprar»?', ['compran', 'compra', 'compráis'], 'compran', 'Ellos: radical + «-an».'),
        mc('Qual resposta combina com «¿Cuándo viajas?»', ['En Madrid.', 'Porque sí.', 'En agosto.'], 'En agosto.', '«Cuándo» pergunta pelo tempo.'),
        mc('Qual é a negação correta de «Bailo mucho»?', ['No bailo mucho.', 'Bailo no mucho.', 'No yo bailo mucho.'], 'No bailo mucho.', 'O «no» vem logo antes do verbo.'),
        ordem('Ordene: «A veces cocino en casa.»', ['A', 'veces', 'cocino', 'en', 'casa.'], 'A veces cocino en casa.', 'O advérbio de frequência fica perto do verbo.'),
        ordem('Ordene: «Ella habla español y portugués.»', ['Ella', 'habla', 'español', 'y', 'portugués.'], 'Ella habla español y portugués.', 'Ella usa a forma «habla».'),
        livre('Escreva em espanhol: Nós trabalhamos em Madri e viajamos muito.', 'Trabajamos en Madrid y viajamos mucho.'),
        livre('Escreva em espanhol: Onde você estuda, Ana? (informal)', '¿Dónde estudias, Ana?'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, o que você faz durante a semana, e faça três perguntas a ele sobre o dia dele.'),
    ]),
  ],
});
