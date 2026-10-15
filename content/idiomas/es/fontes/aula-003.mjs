import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 3, titulo: 'Apresentações, países, números 0 a 20 e idade (tener)', nivel: 'a1',
  objetivo: 'Apresentar-se e apresentar alguém, dizer de onde você é e onde vive, usar as nacionalidades no masculino e no feminino, e contar de 0 a 20, incluindo a idade com o verbo «tener».',
  nota: 'Você se apresenta, fala de onde é, onde vive e diz a sua idade. Próxima aula: o presente dos verbos em -ar, a negação e as perguntas.',
  sessoes: [
    sessao('S1', 'Cumprimentos e apresentações', [
      revisao(5, 'Responda em voz alta: «¿Eres estudiante? ¿Es usted médica? ¿Cómo es Pablo?» Depois conjugue «ser» de memória.'),
      palavras(8, [
        ['Me llamo…', 'me lhámo', 'eu me chamo…', ''], ['¿Cómo te llamas?', 'cómo te lhámas', 'como você se chama? (tú)', ''], ['¿Cómo se llama usted?', 'cómo se lháma ustéd', 'como o senhor, a senhora se chama? (usted)', ''], ['Mucho gusto.', 'mútcho gústo', 'muito prazer', ''],
        ['Encantado, encantada.', 'enkantádo, enkantáda', 'encantado (homem), encantada (mulher)', ''], ['Igualmente.', 'igualménte', 'igualmente', ''], ['Este es…', 'éste es', 'este é… (apresentando um homem)', ''], ['Esta es…', 'ésta es', 'esta é… (apresentando uma mulher)', ''],
      ]),
      gramatica(12, 'Apresentar-se e apresentar alguém', 'PASSO 1: para dizer o seu nome, use «Me llamo Ana.» Literalmente, «eu me chamo». O verbo é «llamarse», com o pronome «me, te, se» antes do verbo: «me llamo», «te llamas», «se llama». Também se pode dizer «Soy Ana.» PASSO 2: para perguntar o nome: informal, «¿Cómo te llamas?»; formal, «¿Cómo se llama usted?». PASSO 3: ao conhecer alguém, diga «Mucho gusto» ou, mais curto, «Encantado» (homem) e «Encantada» (mulher). A resposta é «Igualmente» ou «Mucho gusto». PASSO 4: para apresentar outra pessoa: «Este es Luis.» (homem) ou «Esta es Marta.» (mulher). PASSO 5: «apellido» é sobrenome, e não «apelido» (que é «apodo»). Na Espanha e em boa parte da América Latina as pessoas têm dois: o do pai e o da mãe, como em «Ana García López». PASSO 6: com desconhecidos, use «señor» ou «señora» com o sobrenome: «Buenos días, señora García.» PASSO 7: para passar do «usted» ao «tú», a pessoa mais velha ou de posição mais alta costuma propor.', {
        tag: 'Frases básicas',
        comparacao: 'em português «me chamo» também é pronominal, e o espanhol faz o mesmo: «me llamo», «te llamas», «se llama». As diferenças: «encantado» e «encantada» concordam com quem fala, e «apellido» não é «apelido», e sim o sobrenome.',
        tabela: [
          { situacao: 'dizer o nome', informal: 'Me llamo Ana.', formal: 'Me llamo Ana García.' },
          { situacao: 'perguntar o nome', informal: '¿Cómo te llamas?', formal: '¿Cómo se llama usted?' },
          { situacao: 'perguntar como está', informal: '¿Cómo estás?', formal: '¿Cómo está usted?' },
          { situacao: 'responder', informal: 'Bien, gracias. ¿Y tú?', formal: 'Bien, gracias. ¿Y usted?' },
          { situacao: 'apresentar', informal: 'Este es Luis.', formal: 'Esta es la señora García.' },
        ],
        erros: [['Yo llamo Ana.', 'Me llamo Ana.', 'É um verbo pronominal: «me llamo», com «me».'], ['¿Cómo llamas?', '¿Cómo te llamas?', 'Falta o pronome «te».'], ['¿Cómo te llamas? (a uma senhora desconhecida)', '¿Cómo se llama usted?', 'Com desconhecidos, use a forma de «usted».'], ['Este es Ana.', 'Esta es Ana.', '«Este» é masculino; para mulher, «esta».']],
      }),
      producao(5, 'Apresente-se em voz alta: «Hola, me llamo… Mucho gusto.» Depois apresente um amigo e uma amiga: «Este es… Esta es…»'),
    ]),
    sessao('S2', 'Países e nacionalidades', [
      revisao(4, 'Diga em voz alta: «Me llamo… Soy… Mucho gusto. ¿Y usted?» e responda como se fosse a outra pessoa.'),
      palavras(6, [
        ['Brasil, brasileño', 'brasíl, brasilénho', 'Brasil, brasileiro', ''], ['España, español', 'espánha, espanhól', 'Espanha, espanhol', ''], ['Portugal, portugués', 'portugál, portugués', 'Portugal, português', ''], ['México, mexicano', 'méhiko, mehikáno', 'México, mexicano', ''], ['Argentina, argentino', 'arhentína, arhentíno', 'Argentina, argentino', ''], ['Estados Unidos, estadounidense', 'estádos unídos, estadounidénse', 'Estados Unidos, estadunidense', ''],
      ]),
      gramatica(12, 'Origem, nacionalidade e onde você vive', 'PASSO 1: para perguntar a origem: «¿De dónde eres?» (tú) ou «¿De dónde es usted?» (usted). Para responder, use «ser de» + cidade ou país: «Soy de Madrid», «Soy de Brasil». PASSO 2: a nacionalidade vem com «ser» e um adjetivo que concorda: «Soy brasileño / brasileña.» Adjetivos em «-o» mudam para «-a»; os terminados em consoante (español, francés, alemán, inglés) acrescentam «-a» e perdem o til quando a vogal deixa de ser a última: «francés → francesa», «alemán → alemana». Os terminados em «-e» e em «-ense» não mudam: «estadounidense». PASSO 3: nacionalidades e idiomas se escrevem com minúscula: «Soy brasileño», «hablo español». PASSO 4: a maior parte dos países se usa sem artigo: «España», «Brasil», «México», «Francia». Alguns têm artigo opcional («los Estados Unidos»). PASSO 5: para dizer onde vive, use o verbo «vivir» e a preposição «en», tanto para cidade quanto para país: «Vivo en Madrid», «Vivo en Brasil». O espanhol não tem «no, na, nos, nas» nesse uso. PASSO 6: «vivo» é «eu vivo» e «vive» é «ele, ela, usted vive»; a conjugação completa dos verbos em -ir vem na aula 6. PASSO 7: para perguntar onde a pessoa vive: «¿Dónde vives?» (tú) ou «¿Dónde vive usted?» (usted). PASSO 8: para contrastar, use «pero»: «Soy de São Paulo, pero vivo en Madrid.» PASSO 9: na América Latina também se ouve «brasilero»; ambas as formas aparecem, e «brasileño» é a da Espanha.', {
        tag: 'Preposições',
        comparacao: 'em português dizemos «moro em Madri», «no Brasil», «na Espanha», e a preposição se junta ao artigo. Em espanhol, a preposição é só «en», sem artigo, para cidades e países. A nacionalidade também não leva maiúscula, como em português. A novidade é o feminino de «español», «francés» e «alemán»: acrescenta-se «-a» e o til desaparece («francesa», «alemana»).',
        tabela: [
          { pais: 'España', masculino: 'español', feminino: 'española' },
          { pais: 'Brasil', masculino: 'brasileño', feminino: 'brasileña' },
          { pais: 'Portugal', masculino: 'portugués', feminino: 'portuguesa' },
          { pais: 'Francia', masculino: 'francés', feminino: 'francesa' },
          { pais: 'Alemania', masculino: 'alemán', feminino: 'alemana' },
          { pais: 'Italia', masculino: 'italiano', feminino: 'italiana' },
          { pais: 'México', masculino: 'mexicano', feminino: 'mexicana' },
          { pais: 'Estados Unidos', masculino: 'estadounidense', feminino: 'estadounidense' },
        ],
        erros: [['Vivo no Brasil.', 'Vivo en Brasil.', 'Em espanhol não há «no, na»; usa-se «en» sem artigo.'], ['Ella es español.', 'Ella es española.', 'A nacionalidade concorda com o gênero.'], ['Soy Brasileño.', 'Soy brasileño.', 'A nacionalidade se escreve com minúscula.'], ['Soy de Brasil y vivo de Madrid.', 'Soy de Brasil y vivo en Madrid.', '«De» indica origem; para o lugar onde se vive, use «en».']],
      }),
      producao(8, 'Diga: «Soy… (nacionalidade). Soy de… Vivo en… Ana es… Vive en…» com três países diferentes. Depois pergunte, com «usted»: «¿De dónde es? ¿Dónde vive?»'),
    ]),
    sessao('S3', 'Números de 0 a 20 e a idade', [
      revisao(4, 'Diga de memória o nome de seis países em espanhol e as nacionalidades correspondentes, no masculino e no feminino.'),
      palavras(5, [
        ['cero', 'théro', 'zero', ''], ['uno', 'úno', 'um', ''], ['dos', 'dos', 'dois', ''], ['tres', 'tres', 'três', ''], ['cuatro', 'kuátro', 'quatro', ''], ['cinco', 'thínko', 'cinco', ''], ['seis', 'séis', 'seis', ''], ['siete', 'siéte', 'sete', ''], ['ocho', 'ótcho', 'oito', ''], ['nueve', 'nuébe', 'nove', ''], ['diez', 'diéth', 'dez', ''],
      ]),
      gramatica(8, 'Os números de 11 a 20 e a idade com tener', 'PASSO 1: 0 a 10: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. PASSO 2: 11 a 15: once, doce, trece, catorce, quince. PASSO 3: 16 a 19 se escrevem numa só palavra: dieciséis, diecisiete, dieciocho, diecinueve. O 16 leva til (dieciséis). 20 é «veinte». PASSO 4: para dizer a idade, o espanhol usa «tener» (ter): «Tengo veinte años.» PASSO 5: o presente de «tener» é irregular: tengo, tienes, tiene, tenemos, tenéis, tienen. Na primeira pessoa aparece «-go» e, nas outras (menos «nosotros» e «vosotros»), o «e» do radical vira «ie». PASSO 6: para perguntar a idade: «¿Cuántos años tienes?» (tú) ou «¿Cuántos años tiene usted?» (usted). PASSO 7: «un año», «dos años»: o plural acrescenta «-s». O «ñ» é obrigatório: «año» é ano; «ano» é outra palavra, de outro assunto. PASSO 8: «uno» vira «un» antes de substantivo masculino: «un año».', {
        tag: 'Números',
        comparacao: 'em português a idade também é «ter»: «tenho vinte anos». Aqui a forma é «tengo», e não «tenho». O verbo irregular tem duas armadilhas: «tengo» (não «tiengo») e «tenemos, tenéis» (sem o «ie»).',
        tabelas: [
          { titulo: 'tener (ter)', linhas: [
            { pronome: 'yo', forma: 'tengo', exemplo: 'Tengo veinte años.' },
            { pronome: 'tú', forma: 'tienes', exemplo: 'Tienes quince años.' },
            { pronome: 'él / ella / usted', forma: 'tiene', exemplo: 'Él tiene dieciocho años.' },
            { pronome: 'nosotros, nosotras', forma: 'tenemos', exemplo: 'Tenemos dieciséis años.' },
            { pronome: 'vosotros, vosotras', forma: 'tenéis', exemplo: 'Tenéis doce años.' },
            { pronome: 'ellos, ellas, ustedes', forma: 'tienen', exemplo: 'Ellos tienen trece años.' },
          ] },
          { titulo: 'Os números de 11 a 20', linhas: [
            { numero: '11', forma: 'once (ónthe)', exemplo: 'Tengo once años.' }, { numero: '12', forma: 'doce (dóthe)', exemplo: 'Tiene doce años.' }, { numero: '13', forma: 'trece (tréthe)', exemplo: 'Tiene trece años.' },
            { numero: '14', forma: 'catorce (katórthe)', exemplo: 'Tenemos catorce años.' }, { numero: '15', forma: 'quince (kínthe)', exemplo: 'Tienes quince años.' }, { numero: '16', forma: 'dieciséis (diethiséis)', exemplo: 'Tienen dieciséis años.' },
            { numero: '17', forma: 'diecisiete (diethisiéte)', exemplo: 'Tengo diecisiete años.' }, { numero: '18', forma: 'dieciocho (diethiótcho)', exemplo: 'Tiene dieciocho años.' }, { numero: '19', forma: 'diecinueve (diethinuébe)', exemplo: 'Tiene diecinueve años.' }, { numero: '20', forma: 'veinte (béinte)', exemplo: 'Tengo veinte años.' },
          ] },
        ],
        erros: [['Tiengo veinte años.', 'Tengo veinte años.', 'A primeira pessoa é «tengo», sem «ie».'], ['Tengo veinte anos.', 'Tengo veinte años.', 'Sem o til de «ñ», a palavra muda de significado.'], ['¿Tienes cuántos años?', '¿Cuántos años tienes?', 'O interrogativo abre a pergunta.'], ['Tengo dieciseis años.', 'Tengo dieciséis años.', 'A força está na última sílaba, então leva til.']],
      }),
      dialogo(8, '¿Cuántos años tienes? / Quantos anos você tem?', 'Lucía e Diego conversam sobre a idade deles e a de um amigo.', [
        ['Lucía', 'Diego, ¿cuántos años tienes?', 'Diego, quantos anos você tem?'], ['Diego', 'Tengo veinte años. ¿Y tú?', 'Tenho vinte anos. E você?'], ['Lucía', 'Yo tengo diecinueve. ¿Y Carlos?', 'Eu tenho dezenove. E o Carlos?'],
        ['Diego', 'Carlos tiene diecinueve también.', 'O Carlos também tem dezenove.'], ['Lucía', 'Entonces somos todos jóvenes.', 'Então somos todos jovens.'], ['Diego', '¡Sí, es verdad!', 'Sim, é verdade!'],
      ]),
      producao(5, 'Conte de 0 a 20 em voz alta, devagar. Depois diga a sua idade e a de três pessoas: «Tengo… años. Él / ella tiene… años.»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 3', [
      revisao(5, 'Apresente-se em espanhol: nome, nacionalidade, cidade, país e idade, em seis frases.'),
      exercicios(20, [
        ouvir('Tengo veinte años', ['Tengo veinte años', 'Tengo quince años', 'Tiene veinte años'], 'Tengo veinte años', 'Ouça «veinte» e a diferença entre «tengo» e «tiene».'), ouvir('Vivo en Madrid', ['Vivo en Madrid', 'Vivo en Brasil', 'Vive en Madrid'], 'Vivo en Madrid', 'Ouça «Madrid» e o «vivo».'), ouvir('¿Cómo te llamas?', ['¿Cómo te llamas?', '¿Cómo se llama usted?', '¿Cómo estás?'], '¿Cómo te llamas?', 'Ouça o «te llamas».'),
        ditado('Me llamo Ana', 'Escreva: Me llamo Ana.'), ditado('Soy de Brasil', 'Escreva: Soy de Brasil.'), ditado('Tiene dieciocho años', 'Escreva: Tiene dieciocho años.'),
        mc('Como dizer «tenho 20 anos»?', ['Tengo veinte años.', 'Soy veinte años.', 'Tengo veinte anos.'], 'Tengo veinte años.', 'Idade com «tener», e «años» com «ñ».'),
        mc('Qual preposição se usa com «vivir» para cidade e para país?', ['en', 'a', 'de'], 'en', 'Vivo en Madrid, vivo en Brasil.'),
        mc('Como se apresenta uma mulher chamada Julia?', ['Esta es Julia.', 'Este es Julia.', 'Esto es Julia.'], 'Esta es Julia.', '«Esta» é feminino.'),
        mc('Qual é o feminino de «francés»?', ['francesa', 'francés', 'franceza'], 'francesa', 'Acrescenta-se «-a» e se perde o til.'),
        mc('Qual destas palavras é o número 16?', ['dieciséis', 'doce', 'diecisiete'], 'dieciséis', 'Dieciséis, com til.'),
        lacuna('Lucía ___ trece años. (tem)', ['tiene', 'tienes', 'tengo'], 'tiene', '«Ella tiene».'), lacuna('Nosotros ___ dieciséis años. (temos)', ['tenemos', 'tenéis', 'tienen'], 'tenemos', '«Nosotros tenemos».'),
        lacuna('Soy ___ Brasil. (de)', ['de', 'en', 'a'], 'de', 'Origem pede «de».'), lacuna('Ella es ___ . (portuguesa)', ['portuguesa', 'portugués', 'portugueza'], 'portuguesa', 'Feminino de «portugués».'), lacuna('___ Ana. (me chamo)', ['Me llamo', 'Soy llamo', 'Tengo'], 'Me llamo', 'Verbo pronominal «llamarse».'),
        ordem('Ordene: «Me llamo Ana y tengo veinte años.»', ['Me', 'llamo', 'Ana', 'y', 'tengo', 'veinte', 'años.'], 'Me llamo Ana y tengo veinte años.', 'Nome e idade.'), ordem('Ordene: «Ella es brasileña.»', ['Ella', 'es', 'brasileña.'], 'Ella es brasileña.', 'A nacionalidade concorda no feminino.'),
        livre('Escreva em espanhol: Eu me chamo Carlos. Tenho vinte anos. Vivo no Brasil.', 'Me llamo Carlos. Tengo veinte años. Vivo en Brasil.'),
        lacuna('¿___ años tienes? (quantos)', ['Cuánto', 'Cuántos', 'Cuántas'], 'Cuántos', '«Años» é masculino plural: «¿Cuántos años tienes?».'),
        lacuna('Tú ___ quince años. (tem)', ['tienes', 'tengo', 'tienen'], 'tienes', 'Com «tú», «tener» faz «tienes».'),
        lacuna('Ella es ___ . (alemã)', ['alemán', 'alemane', 'alemana'], 'alemana', 'Nacionalidade em consoante ganha «-a» no feminino e perde o til.'),
        lacuna('Siete y cuatro son ___ . (11)', ['doce', 'once', 'diez'], 'once', '7 + 4 = 11, «once».'),
        mc('O que significa «apellido»?', ['sobrenome', 'apelido', 'nome próprio'], 'sobrenome', 'Falso amigo: «apellido» é sobrenome; apelido é «apodo».'),
        mc('Como se escreve o número 18?', ['dieciséis', 'diecinueve', 'dieciocho'], 'dieciocho', '16 a 19 são uma só palavra: «dieciocho».'),
        mc('Como perguntar a origem a um senhor desconhecido?', ['¿De dónde es usted?', '¿De dónde eres usted?', '¿Dónde es usted?'], '¿De dónde es usted?', 'Com «usted», o verbo é «es»; a origem pergunta-se com «de dónde».'),
        ordem('Ordene: «¿Cómo se llama usted?»', ['¿Cómo', 'se', 'llama', 'usted?'], '¿Cómo se llama usted?', 'Forma formal: «se llama» com «usted».'),
        ordem('Ordene: «Ana tiene catorce años.»', ['Ana', 'tiene', 'catorce', 'años.'], 'Ana tiene catorce años.', 'A idade se diz com «tener», não com «ser».'),
        livre('Escreva em espanhol: Muito prazer. Eu sou de Portugal.', 'Mucho gusto. Soy de Portugal.'),
        livre('Escreva em espanhol: Ele tem dezessete anos e é mexicano.', 'Tiene diecisiete años y es mexicano.'),
      ]),
      producao(5, 'Apresente, em voz alta, um amigo imaginário de outro país: nome, idade, nacionalidade e onde vive.'),
    ]),
  ],
});
