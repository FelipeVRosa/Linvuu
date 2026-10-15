import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 2, titulo: 'Ser, pronomes e adjetivos', nivel: 'a1',
  objetivo: 'Usar os pronomes sujeito e o presente de «ser», fazer concordar o adjetivo em gênero e número, negar com «no», dizer a profissão e fazer perguntas simples com «ser».',
  nota: 'Você diz quem é, descreve pessoas, nega e pergunta com o verbo «ser». Próxima aula: apresentações, países, números de 0 a 20 e a idade com «tener».',
  sessoes: [
    sessao('S1', 'Os pronomes e o verbo ser', [
      revisao(5, 'Cumprimente em voz alta com «tú» e com «usted». Depois leia: jamón, gente, queso, zapato, calle, niño, perro, hotel.'),
      palavras(8, [
        ['yo', 'iô', 'eu', ''], ['tú', 'tú', 'você (informal)', ''], ['él, ella', 'él, élha', 'ele, ela', ''], ['usted', 'ustéd', 'o senhor, a senhora, você (formal)', ''],
        ['nosotros, nosotras', 'nosótros, nosótras', 'nós', ''], ['vosotros, vosotras', 'bosótros, bosótras', 'vocês (informal, Espanha)', ''], ['ellos, ellas', 'élhos, élhas', 'eles, elas', ''], ['ustedes', 'ustédes', 'vocês (formal; na América Latina, todos)', ''],
      ]),
      gramatica(12, 'Os pronomes sujeito e o presente de ser', 'PASSO 1: «ser» é o verbo para dizer quem alguém é, de onde vem, qual é a profissão e como é. O presente é irregular: soy, eres, es, somos, sois, son. PASSO 2: o verbo já mostra a pessoa, por isso o pronome sujeito quase sempre se omite: «Soy Ana», não «Yo soy Ana». Usa-se o pronome para contrastar ou enfatizar: «Yo soy Ana y ella es Marta.» PASSO 3: «tú» (informal) usa «eres»; «usted» (formal) usa a mesma forma de «él» e «ella»: «Usted es médico.» PASSO 4: no plural, «nosotros» usa «somos»; «ellos» e «ellas» usam «son»; «ustedes» também usa «son». PASSO 5: «vosotros» usa «sois» e é próprio da Espanha. Na América Latina não existe: diz-se «ustedes son», para todos. Na Argentina e em alguns países da América Central também se ouve «vos sos» no lugar de «tú eres». PASSO 6: existem formas femininas: «nosotras», «vosotras», «ellas». Um grupo misto usa o masculino. PASSO 7: não existe pronome neutro obrigatório: diz-se «Es tarde», sem sujeito. PASSO 8: o til importa: «él» (ele) tem til; «el» (o) não. «Tú» (você) tem til; «tu» (seu) não.', {
        tag: 'Verbos',
        comparacao: 'em português o verbo também mostra a pessoa, mas o pronome «eu» e «você» é muito usado; em espanhol ele é raro, só para destacar. As formas são parecidas, mas a ortografia engana: «sou» é «soy», «és» é «eres», «somos» é igual, «são» é «son». «Usted» corresponde a «o senhor, a senhora», e «tú» ao «tu» de quem usa essa forma em português.',
        tabela: [
          { pronome: 'yo', forma: 'soy', exemplo: 'Soy Pablo.' },
          { pronome: 'tú', forma: 'eres', exemplo: 'Tú eres Lucía.' },
          { pronome: 'él / ella / usted', forma: 'es', exemplo: 'Usted es médico.' },
          { pronome: 'nosotros, nosotras', forma: 'somos', exemplo: 'Somos amigos.' },
          { pronome: 'vosotros, vosotras', forma: 'sois', exemplo: 'Vosotros sois amigos.' },
          { pronome: 'ellos, ellas, ustedes', forma: 'son', exemplo: 'Ellos son amigos.' },
        ],
        erros: [['Yo es Ana.', 'Yo soy Ana.', 'Com «yo», o verbo é «soy».'], ['Usted eres Pablo.', 'Usted es Pablo.', '«Usted» usa a forma de «él» e «ella».'], ['Ellos sois amigos.', 'Ellos son amigos.', '«Sois» é só de «vosotros».'], ['Tu eres Ana.', 'Tú eres Ana.', 'Como pronome, «tú» leva til; sem til, «tu» é «seu».']],
      }),
      producao(5, 'Diga: «Yo soy… Tú eres… Ella es… Nosotros somos… Ellos son…» com nomes de amigos. Depois repita sem os pronomes onde for possível: «Soy… Eres…»'),
    ]),
    sessao('S2', 'Adjetivos: gênero, número e negação', [
      revisao(4, 'Conjugue «ser» de memória, de «yo» a «ellos», e diga duas frases sem o pronome.'),
      palavras(6, [
        ['alto, alta', 'álto, álta', 'alto, alta', ''], ['simpático, simpática', 'simpátiko, simpátika', 'simpático, simpática', ''], ['joven', 'hóben', 'jovem', ''], ['inteligente', 'intelihénte', 'inteligente', ''],
        ['largo, larga', 'lárgo, lárga', 'comprido (falso amigo: largo é «ancho»)', ''], ['exquisito, exquisita', 'ekskisíto, ekskisíta', 'delicioso (falso amigo: não é «esquisito»)', ''],
      ]),
      gramatica(12, 'Concordância do adjetivo, «muy» e a negação', 'PASSO 1: o adjetivo concorda em gênero e número com o substantivo ou o sujeito: «Pablo es alto», «Lucía es alta», «Ellos son altos», «Ellas son altas». PASSO 2: adjetivos em «-o» mudam para «-a» no feminino: «alto, alta». Adjetivos em «-e» ou em consoante não mudam: «inteligente», «joven», «fácil». Adjetivos em «-or», «-ol», «-án» e «-ín» acrescentam «-a»: «trabajador, trabajadora», «español, española». PASSO 3: o plural acrescenta «-s» depois de vogal e «-es» depois de consoante: «altos», «inteligentes», «jóvenes», «trabajadores». A palavra «joven» ganha til no plural para manter a força na mesma sílaba. Se termina em «z», troca por «c»: «feliz» → «felices». PASSO 4: o adjetivo normalmente vem depois do substantivo e depois de «ser»: «Ella es simpática.» PASSO 5: «muy» (muito) vem antes de adjetivo e nunca muda: «muy simpática», «muy jóvenes». PASSO 6: a negação é «no», sempre antes do verbo: «No soy alto.» O pronome fica antes do «no»: «Yo no soy médico.» Não existe «não» depois do verbo. PASSO 7: para responder a uma pergunta de sim ou não, usa-se «no» duas vezes: «¿Eres alta? — No, no soy alta.» O primeiro é a resposta; o segundo nega o verbo. PASSO 8: cuidado com dois falsos amigos: «largo» é comprido (largo é «ancho») e «exquisito» é delicioso, não «esquisito». A palavra para «esquisito» é «raro» ou «extraño».', {
        tag: 'Adjetivos',
        comparacao: 'a concordância é igual à do português («alto, alta, altos, altas»), e o «no» antes do verbo corresponde ao nosso «não». As diferenças são o «muy» fixo (em português dizemos «muito» para adjetivo e para verbo) e o plural de palavras terminadas em consoante («joven» → «jóvenes», com til, e não «jovens»).',
        tabela: [
          { tipo: '-o, -a', masc_sg: 'alto', fem_sg: 'alta', masc_pl: 'altos', fem_pl: 'altas' },
          { tipo: '-e', masc_sg: 'inteligente', fem_sg: 'inteligente', masc_pl: 'inteligentes', fem_pl: 'inteligentes' },
          { tipo: 'consoante, sem mudar de gênero', masc_sg: 'joven', fem_sg: 'joven', masc_pl: 'jóvenes', fem_pl: 'jóvenes' },
          { tipo: '-or, -ol (feminino em -a)', masc_sg: 'trabajador', fem_sg: 'trabajadora', masc_pl: 'trabajadores', fem_pl: 'trabajadoras' },
          { tipo: '-ista', masc_sg: 'optimista', fem_sg: 'optimista', masc_pl: 'optimistas', fem_pl: 'optimistas' },
        ],
        erros: [['Ella es alto.', 'Ella es alta.', 'O adjetivo concorda com o gênero do sujeito.'], ['Ellos son simpático.', 'Ellos son simpáticos.', 'O plural pede «-s».'], ['Soy no alto.', 'No soy alto.', 'O «no» vem antes do verbo.'], ['Ella es inteligenta.', 'Ella es inteligente.', 'Adjetivos em «-e» não mudam para «-a».']],
      }),
      producao(8, 'Descreva em voz alta três pessoas que você conhece, com «muy» e com «no»: «Pablo es muy simpático. No es alto. Ella es inteligente.» Use um adjetivo em «-o/-a», um em «-e» e um em «-or».'),
    ]),
    sessao('S3', 'Profissões e perguntas com ser', [
      revisao(4, 'Diga em voz alta: «Soy… No soy… Ella es… Ellos son muy…» com adjetivos da aula.'),
      palavras(5, [
        ['profesor, profesora', 'profesór, profesóra', 'professor, professora', ''], ['estudiante', 'estudiánte', 'estudante, aluno, aluna', ''], ['médico, médica', 'médiko, médika', 'médico, médica', ''], ['ingeniero, ingeniera', 'inheniéro, inheniéra', 'engenheiro, engenheira', ''], ['camarero, camarera', 'kamaréro, kamaréra', 'garçom, garçonete', ''],
      ]),
      gramatica(8, 'Dizer a profissão e fazer perguntas com ser', 'PASSO 1: a profissão vem depois de «ser», sem artigo: «Soy médica», «Es profesor». O artigo só aparece se houver um adjetivo ou um complemento: «Es un buen médico.» PASSO 2: muitas profissões mudam no feminino: «-o» vira «-a» («médico, médica»; «ingeniero, ingeniera»), «-or» vira «-ora» («profesor, profesora»). Palavras em «-e» e «-ista» não mudam: «estudiante», «periodista». PASSO 3: a pergunta de sim ou não tem a mesma ordem da frase afirmativa; muda a entonação, e a escrita ganha «¿ ?»: «¿Eres profesor?» A forma de «usted» é «¿Es usted médica?» PASSO 4: palavras interrogativas: «¿Quién es?» (quem), «¿Qué es?» (o que), «¿Cómo es?» (como). O verbo vem logo depois do interrogativo: «¿Quién eres tú?», «¿Cómo es Pablo?» PASSO 5: resposta curta: «Sí, soy profesora.» «No, no soy estudiante.» PASSO 6: «oficina» é falso amigo: significa escritório; oficina de conserto é «taller».', {
        tag: 'Perguntas',
        comparacao: 'em português também dizemos «sou médica» sem artigo, e a pergunta mantém a ordem da afirmação. Em espanhol, a diferença está no «¿» de abertura e no fato de o verbo ir logo depois do interrogativo, sem partículas como o nosso «é que».',
        tabelas: [
          { titulo: 'Profissões: masculino e feminino', linhas: [
            { terminacao: '-o → -a', masculino: 'médico', feminino: 'médica' },
            { terminacao: '-or → -ora', masculino: 'profesor', feminino: 'profesora' },
            { terminacao: '-ero → -era', masculino: 'camarero', feminino: 'camarera' },
            { terminacao: '-e (não muda)', masculino: 'estudiante', feminino: 'estudiante' },
            { terminacao: '-ista (não muda)', masculino: 'periodista', feminino: 'periodista' },
          ] },
          { titulo: 'Perguntas com ser', linhas: [
            { pergunta: '¿Quién eres?', significado: 'quem é você?', resposta: 'Soy Pablo.' },
            { pergunta: '¿Qué es?', significado: 'o que é?', resposta: 'Es un hotel.' },
            { pergunta: '¿Cómo es Ana?', significado: 'como é a Ana?', resposta: 'Es muy simpática.' },
            { pergunta: '¿Eres médico?', significado: 'você é médico?', resposta: 'Sí, soy médico.' },
          ] },
        ],
        erros: [['Ella es profesor.', 'Ella es profesora.', 'A profissão concorda com o gênero.'], ['Ella es estudianta.', 'Ella es estudiante.', 'Palavras em «-e» não mudam de gênero.'], ['Eres profesora?', '¿Eres profesora?', 'A pergunta abre com «¿».'], ['Ellos son camareras.', 'Ellos son camareros.', 'Um grupo de homens usa o masculino.']],
      }),
      dialogo(8, 'En la escuela / Na escola', 'Marta, a professora, conhece dois alunos novos, Pablo e Sofía.', [
        ['La profesora', 'Buenos días. Soy Marta y soy profesora. ¿Y tú?', 'Bom dia. Sou Marta e sou professora. E você?'], ['Pablo', 'Soy Pablo y soy estudiante. Ella es Sofía.', 'Sou Pablo e sou estudante. Ela é Sofía.'], ['Sofía', 'Hola. No soy estudiante, soy ingeniera.', 'Oi. Não sou estudante, sou engenheira.'],
        ['La profesora', '¿Eres ingeniera? ¡Qué bien!', 'Você é engenheira? Que bom!'], ['Pablo', 'Sofía es muy inteligente.', 'A Sofía é muito inteligente.'], ['Sofía', 'Gracias, Pablo. Tú eres muy simpático.', 'Obrigada, Pablo. Você é muito simpático.'],
      ]),
      producao(5, 'Pergunte a um colega imaginário: «¿Quién eres? ¿Eres estudiante? ¿Cómo es Pablo?» e responda com a sua profissão e uma descrição.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 2', [
      revisao(5, 'Diga três frases com «ser», uma com «no» e uma com «muy». Depois diga a sua profissão e a de um amigo.'),
      exercicios(20, [
        ouvir('Soy profesora', ['Soy profesora', 'Soy profesor', 'Eres profesora'], 'Soy profesora', 'Ouça o final «-a»: feminino.'), ouvir('Somos estudiantes', ['Somos estudiantes', 'Son estudiantes', 'Sois estudiantes'], 'Somos estudiantes', 'Ouça o «mos» de «somos».'), ouvir('No es alto', ['No es alto', 'No eres alto', 'No soy alto'], 'No es alto', 'Ouça a forma «es».'),
        ditado('Ella es ingeniera', 'Escreva: Ella es ingeniera.'), ditado('Nosotros somos amigos', 'Escreva: Nosotros somos amigos.'), ditado('¿Eres profesor?', 'Escreva: ¿Eres profesor?'),
        mc('Qual é a forma de «ser» para «usted»?', ['es', 'eres', 'sois'], 'es', '«Usted» usa a forma de «él» e «ella».'),
        mc('Qual forma de «ser» combina com «vosotros» (Espanha)?', ['sois', 'son', 'somos'], 'sois', '«Vosotros sois».'),
        mc('Qual frase está correta para uma mulher?', ['Soy alta.', 'Soy alto.', 'Soy altos.'], 'Soy alta.', 'O adjetivo concorda: feminino singular.'),
        mc('Como se diz «Eles não são médicos»?', ['Ellos no son médicos.', 'Ellos son no médicos.', 'Ellos no sois médicos.'], 'Ellos no son médicos.', 'O «no» vem antes do verbo; «ellos» usa «son».'),
        mc('Qual é o plural de «joven»?', ['jóvenes', 'jovenes', 'jóvens'], 'jóvenes', 'Consoante final pede «-es», e o til mantém a força na mesma sílaba.'),
        mc('Qual palavra significa «delicioso»?', ['exquisito', 'raro', 'largo'], 'exquisito', 'Falso amigo: «exquisito» é delicioso; «raro» é esquisito.'),
        lacuna('Yo ___ Ana. (sou)', ['soy', 'es', 'eres'], 'soy', 'Com «yo», o verbo é «soy».'), lacuna('Ellos ___ simpáticos.', ['son', 'somos', 'es'], 'son', '«Ellos son».'),
        lacuna('Ella es ___ . (inteligente)', ['inteligente', 'inteligenta', 'inteligentes'], 'inteligente', 'Adjetivo em «-e» no singular.'), lacuna('Nosotras somos ___ . (altas)', ['altas', 'altos', 'alta'], 'altas', 'Feminino plural.'),
        ordem('Ordene: «No soy profesor.»', ['No', 'soy', 'profesor.'], 'No soy profesor.', 'O «no» vem antes do verbo.'), ordem('Ordene: «¿Eres estudiante?»', ['¿Eres', 'estudiante?'], '¿Eres estudiante?', 'Pergunta de sim ou não.'),
        livre('Escreva em espanhol: Ela é médica e não é professora.', 'Ella es médica y no es profesora.'),
        lacuna('Tú ___ profesor. (és)', ['es', 'eres', 'soy'], 'eres', 'Com «tú», «ser» fica «eres».'),
        lacuna('Ustedes ___ estudiantes.', ['son', 'sois', 'somos'], 'son', '«Ustedes» usa a forma de «ellos»: «son».'),
        lacuna('Marta es ___ . (professora)', ['profesora', 'profesor', 'profesores'], 'profesora', 'Marta é mulher: «-or» vira «-ora».'),
        lacuna('Los niños son ___ . (simpáticos)', ['simpático', 'simpáticas', 'simpáticos'], 'simpáticos', 'Sujeito masculino plural pede adjetivo em «-os».'),
        mc('Como se diz «largo» (de largura) em espanhol?', ['largo', 'alto', 'ancho'], 'ancho', '«Largo» em espanhol é «comprido»; a largura é «ancho».'),
        mc('Qual é o feminino de «trabajador»?', ['trabajadra', 'trabajadora', 'trabajadore'], 'trabajadora', 'Adjetivos em «-or» acrescentam «-a».'),
        mc('Qual é o plural de «feliz»?', ['felizes', 'felizs', 'felices'], 'felices', 'Palavras em «z» trocam por «c» antes do «-es».'),
        ordem('Ordene: «Ellos no son altos.»', ['Ellos', 'no', 'son', 'altos.'], 'Ellos no son altos.', 'O «no» vem antes do verbo.'),
        ordem('Ordene: «¿Quién es ella?»', ['¿Quién', 'es', 'ella?'], '¿Quién es ella?', 'O verbo vem logo depois do interrogativo.'),
        livre('Escreva em espanhol: Nós somos estudantes e eles são engenheiros.', 'Somos estudiantes y ellos son ingenieros.'),
        livre('Escreva em espanhol: A senhora é engenheira? Não, sou médica.', '¿Es usted ingeniera? No, soy médica.'),
      ]),
      producao(5, 'Apresente em voz alta dois amigos imaginários: nome, profissão e duas qualidades, com «ser», «no» e «muy».'),
    ]),
  ],
});
