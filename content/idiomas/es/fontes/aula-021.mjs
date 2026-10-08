import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 21, titulo: 'Pretérito imperfecto', nivel: 'a2',
  objetivo: 'Formar o pretérito imperfecto dos verbos em -ar, -er e -ir e dos três irregulares (ser, ir, ver), e usá-lo para hábitos do passado, descrições, idade, hora e tempo, além de evitar três falsos amigos: «exquisito», «embarazada» e «raro».',
  nota: 'Você descreve como eram as coisas e o que costumava fazer. Próxima aula: indefinido × imperfecto, para contar uma história completa.',
  sessoes: [
    sessao('S1', 'Formar o imperfecto', [
      revisao(5, 'Diga cinco frases no indefinido sobre o último fim de semana, com pelo menos dois verbos irregulares (fui, vi, hice, tuve, dije…).'),
      palavras(8, [
        ['de niño, de niña', 'de nínho, de nínha', 'quando criança', ''], ['de pequeño, de pequeña', 'de pekénho', 'quando pequeno', ''], ['antes', 'ántes', 'antes, antigamente', ''], ['todos los veranos', 'tódos los berános', 'todos os verões', ''],
        ['a menudo', 'a menúdo', 'com frequência', ''], ['normalmente', 'normalménte', 'normalmente', ''], ['cada día', 'káda día', 'cada dia', ''], ['entonces', 'entónthes', 'naquela época, então', ''],
      ]),
      gramatica(12, 'Imperfecto: -ar, -er e -ir', 'PASSO 1: o pretérito imperfecto descreve o passado sem dizer quando começou nem quando terminou. Ele serve para o que era costume, para descrições e para o cenário de uma cena. «De niño vivía en Sevilla» (eu morava lá, não sei até quando). PASSO 2: nos verbos em -ar, tire o «-ar» e ponha: -aba, -abas, -aba, -ábamos, -abais, -aban. «Hablar» vira «hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban». PASSO 3: nos verbos em -er e em -ir, tire o final e ponha: -ía, -ías, -ía, -íamos, -íais, -ían. «Comer» vira «comía, comías, comía, comíamos, comíais, comían». «Vivir» vira «vivía, vivías, vivía, vivíamos, vivíais, vivían». PASSO 4: «yo» e «él, ella, usted» têm a mesma forma: «hablaba», «comía». Quando houver dúvida, use o pronome: «Yo vivía en Lima y ella vivía en Cusco». PASSO 5: o acento escrito é obrigatório em «-ía» (sempre) e em «-ábamos» (nosotros, -ar). Sem ele, a pronúncia muda: «comia» não existe em espanhol. PASSO 6: escreve-se «-aba» com «b», diferente do português «-ava» com «v». Em espanhol, «b» e «v» soam igual, mas a escrita é «hablaba». PASSO 7: este tempo é regular até para os verbos que mudam o radical no presente: «dormir» vira «dormía» (e não «durmía»), «tener» vira «tenía», «hacer» vira «hacía». PASSO 8: os marcadores típicos são «de niño», «antes», «siempre», «cada día», «todos los veranos», «a menudo», «normalmente», «entonces» e «mientras».', {
        tag: 'Pretérito imperfecto',
        comparacao: 'o português tem o mesmo tempo, o pretérito imperfeito, e quase a mesma ideia: «eu falava, eu comia, eu morava» corresponde a «yo hablaba, yo comía, yo vivía». As diferenças são de escrita: «-ava» do português é «-aba» no espanhol; o «-ia» do português é «-ía» com acento; e «falávamos» é «hablábamos». Em português do Brasil, a segunda pessoa do plural quase não se usa; em espanhol da Espanha, «hablabais» e «comíais» são normais com «vosotros».',
        tabelas: [
          { titulo: 'hablar (-ar), imperfecto', linhas: [
            { pronome: 'yo', forma: 'hablaba', exemplo: 'De niño hablaba poco.' }, { pronome: 'tú', forma: 'hablabas', exemplo: 'Hablabas mucho con tu abuela.' }, { pronome: 'él / ella / usted', forma: 'hablaba', exemplo: 'Ella hablaba con todos.' },
            { pronome: 'nosotros', forma: 'hablábamos', exemplo: 'Hablábamos por teléfono cada día.' }, { pronome: 'vosotros', forma: 'hablabais', exemplo: '¿Hablabais en el patio?' }, { pronome: 'ellos / ustedes', forma: 'hablaban', exemplo: 'Hablaban en voz baja.' },
          ] },
          { titulo: 'comer e vivir (-er, -ir), imperfecto', linhas: [
            { pronome: 'yo', comer: 'comía', vivir: 'vivía' }, { pronome: 'tú', comer: 'comías', vivir: 'vivías' }, { pronome: 'él / ella / usted', comer: 'comía', vivir: 'vivía' },
            { pronome: 'nosotros', comer: 'comíamos', vivir: 'vivíamos' }, { pronome: 'vosotros', comer: 'comíais', vivir: 'vivíais' }, { pronome: 'ellos / ustedes', comer: 'comían', vivir: 'vivían' },
          ] },
        ],
        exemplos: [['Antes trabajaba en un banco.', 'Antes eu trabalhava em um banco.'], ['De pequeña vivíamos cerca del mar.', 'Quando pequena, morávamos perto do mar.'], ['Mis abuelos tenían un huerto.', 'Meus avós tinham uma horta.']],
        erros: [['Yo hablava mucho.', 'Yo hablaba mucho.', 'A terminação de -ar é «-aba», com «b».'], ['Yo comia pan.', 'Yo comía pan.', 'O acento escrito em «-ía» é obrigatório.'], ['Nosotros hablabamos.', 'Nosotros hablábamos.', 'A forma de «nosotros» leva acento em «-ábamos».'], ['Él duermía mucho.', 'Él dormía mucho.', 'No imperfecto, os verbos que mudam a vogal no presente não a mudam.'], ['Ellos viviam en Madrid.', 'Ellos vivían en Madrid.', 'O plural de -er e -ir é «-ían», com acento.']],
      }),
      producao(5, 'Diga cinco frases sobre como era a sua vida quando você era criança: onde morava, onde estudava, o que comia, com quem brincava. Use «De niño…» ou «De niña…».'),
    ]),
    sessao('S2', 'Ser, ir, ver e os usos do imperfecto', [
      revisao(4, 'Conjugue «hablar» e «vivir» no imperfecto. Diga uma frase com «antes» e outra com «de pequeño».'),
      palavras(6, [
        ['el pueblo', 'el puéblo', 'a cidadezinha, a vila', ''], ['el colegio', 'el koléhio', 'a escola', ''], ['los abuelos', 'los abuélos', 'os avós', ''], ['el verano', 'el beráno', 'o verão', ''], ['jugar', 'hugár', 'brincar, jogar', ''], ['pasear', 'paseár', 'passear', ''],
      ]),
      gramatica(12, 'Ser, ir, ver e quando usar o imperfecto', 'PASSO 1: só três verbos são irregulares no imperfecto: «ser», «ir» e «ver». PASSO 2: «ser» vira era, eras, era, éramos, erais, eran. «Ir» vira iba, ibas, iba, íbamos, ibais, iban. «Ver» vira veía, veías, veía, veíamos, veíais, veían. PASSO 3: o acento aparece em «éramos» e «íbamos»; em «veía» o acento marca que o «i» é forte. PASSO 4: o primeiro uso é o hábito do passado: «Todos los veranos íbamos al pueblo». Frases desse tipo falam do que se repetia. PASSO 5: o segundo uso é a descrição de pessoas e coisas no passado: «Mi abuela era alta y llevaba gafas». PASSO 6: o terceiro uso é idade, hora e tempo: «Tenía diez años», «Eran las ocho», «Hacía frío», «Llovía». PASSO 7: o quarto uso é o cenário e o estado: «La casa estaba en una colina», «Mi tío estaba cansado». PASSO 8: em todos esses casos o fato não tem começo nem fim. Para um fato único e fechado (ayer, el lunes), volte ao indefinido. A aula 22 trata dessa escolha. PASSO 9: na América Latina, «de chico, de chica» é comum no lugar de «de niño, de niña», e «de grande» no lugar de «de mayor».', {
        tag: 'Pretérito imperfecto',
        comparacao: 'em português: «eu era, eu ia, eu via» corresponde a «yo era, yo iba, yo veía». A coincidência é grande. O que muda: o «b» de «iba» (em português, «ia» sem consoante), os acentos de «éramos, íbamos, veíamos» e o fato de «tener» e «hacer» virarem «tenía» e «hacía», com o «h» mudo e o acento obrigatório.',
        tabela: [
          { pronome: 'yo', ser: 'era', ir: 'iba', ver: 'veía' }, { pronome: 'tú', ser: 'eras', ir: 'ibas', ver: 'veías' }, { pronome: 'él / ella / usted', ser: 'era', ir: 'iba', ver: 'veía' },
          { pronome: 'nosotros', ser: 'éramos', ir: 'íbamos', ver: 'veíamos' }, { pronome: 'vosotros', ser: 'erais', ir: 'ibais', ver: 'veíais' }, { pronome: 'ellos / ustedes', ser: 'eran', ir: 'iban', ver: 'veían' },
        ],
        exemplos: [['Todos los veranos íbamos al pueblo de mi madre.', 'Todos os verões íamos à cidadezinha da minha mãe.'], ['Mi abuelo era alto y siempre llevaba sombrero.', 'Meu avô era alto e sempre usava chapéu.'], ['Eran las nueve y hacía mucho calor.', 'Eram nove horas e fazia muito calor.'], ['Yo tenía siete años y veía la tele con mi hermano.', 'Eu tinha sete anos e via televisão com meu irmão.']],
        erros: [['Yo ia al colegio.', 'Yo iba al colegio.', 'O imperfecto de «ir» tem «b»: «iba».'], ['Nosotros eramos amigos.', 'Nosotros éramos amigos.', '«Éramos» leva acento escrito.'], ['Yo veia la tele.', 'Yo veía la tele.', 'O acento marca o «í» forte.'], ['En 2010 yo tuve siete años.', 'En 2010 yo tenía siete años.', 'A idade em um momento do passado é descrição: use o imperfecto «tenía».'], ['Eran las nueve y hizo calor.', 'Eran las nueve y hacía calor.', 'O tempo como cenário de uma cena vai para o imperfecto: «hacía».']],
      }),
      producao(8, 'Descreva em voz alta, com pelo menos oito frases, o lugar onde você passava as férias ou a casa de um parente quando era criança: como era, quem estava lá, o que você fazia. Use «era», «tenía», «hacía», «íbamos» e «veía».'),
    ]),
    sessao('S3', 'Descrições, simultaneidade e falsos amigos', [
      revisao(4, 'Conjugue «ser», «ir» e «ver» no imperfecto. Diga uma frase com «tenía… años» e outra com «eran las…».'),
      palavras(5, [
        ['mientras', 'miéntras', 'enquanto', ''], ['exquisito', 'ekskisíto', 'delicioso, refinado', ''], ['raro', 'ráro', 'esquisito, estranho', ''], ['embarazada', 'embarathada', 'grávida', ''], ['antiguo', 'antíguo', 'antigo', ''],
      ]),
      gramatica(8, 'Mientras e três falsos amigos', 'PASSO 1: «mientras» liga duas ações que aconteciam ao mesmo tempo; o verbo vai para o imperfecto nas duas partes: «Mientras yo cocinaba, mi padre leía». PASSO 2: «exquisito» não é «esquisito»: significa delicioso, muito bom, refinado. «La comida era exquisita». Para dizer «esquisito» no sentido de estranho, use «raro» ou «extraño»: «Es un hombre muy raro». PASSO 3: «embarazada» não é «embaraçada»: significa grávida. «Mi hermana estaba embarazada». Para dizer «sem graça, constrangido», use «avergonzado» ou «cortado»: «Estaba muy avergonzada». PASSO 4: «antiguo» é antigo, de muito tempo; «viejo» é velho. «Una casa antigua» não é necessariamente velha e estragada. PASSO 5: o imperfecto também aparece com a hora e a idade, como na parte anterior: «Eran las cinco y ya era de noche».', {
        tag: 'Pretérito imperfecto',
        comparacao: 'três pares enganam o brasileiro: «exquisito» (delicioso) parece «esquisito», «embarazada» (grávida) parece «embaraçada» e «raro» (estranho) parece «raro» do português, que é pouco frequente. Em espanhol, «raro» é usado sobretudo no sentido de estranho; para pouco frequente, diz-se também «poco frecuente».',
        tabela: [
          { palavra: 'exquisito', significado: 'delicioso, refinado', exemplo: 'La tarta era exquisita.' },
          { palavra: 'raro, extraño', significado: 'esquisito, estranho', exemplo: 'Era un ruido muy raro.' },
          { palavra: 'embarazada', significado: 'grávida', exemplo: 'Mi prima estaba embarazada.' },
          { palavra: 'avergonzado, cortado', significado: 'constrangido', exemplo: 'Estaba avergonzado.' },
          { palavra: 'antiguo / viejo', significado: 'antigo / velho', exemplo: 'Era una casa antigua.' },
        ],
        erros: [['La sopa era esquisita. (querendo dizer deliciosa)', 'La sopa era exquisita.', '«Exquisito» é delicioso; «esquisito» não existe em espanhol.'], ['Mi amiga estaba embarazada de vergüenza.', 'Mi amiga estaba avergonzada.', '«Embarazada» é grávida; «embaraçada» é «avergonzada» ou «cortada».'], ['Era un ruido exquisito.', 'Era un ruido raro.', 'Para algo estranho, use «raro» ou «extraño».']],
      }),
      texto(8, 'Los veranos en el pueblo / Os verões na cidadezinha', 'Cuando yo era niña, pasaba todos los veranos en el pueblo de mis abuelos. La casa era antigua y tenía un patio con una higuera. Por las mañanas mi abuela cocinaba y mi abuelo leía el periódico. Mis primos y yo jugábamos en la calle hasta la hora de comer. La comida de mi abuela era exquisita. Por la noche hacía fresco y nos sentábamos en el patio mientras mi abuelo contaba historias.', 'Quando eu era criança, passava todos os verões na cidadezinha dos meus avós. A casa era antiga e tinha um pátio com uma figueira. De manhã minha avó cozinhava e meu avô lia o jornal. Meus primos e eu brincávamos na rua até a hora de comer. A comida da minha avó era deliciosa. À noite fazia fresco e nos sentávamos no pátio enquanto meu avô contava histórias.', [
        ['¿Dónde pasaba los veranos la narradora?', 'En el pueblo de sus abuelos.'], ['¿Cómo era la casa?', 'Antigua, con un patio con una higuera.'], ['¿Qué hacía el abuelo por las mañanas?', 'Leía el periódico.'], ['¿Dónde jugaban los primos?', 'En la calle.'], ['¿Cómo era la comida de la abuela?', 'Exquisita.'],
      ]),
      producao(5, 'Escreva cinco frases sobre um lugar da sua infância, com «era», «tenía», «estaba», «mientras» e uma comparação com o lugar de hoje.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 21', [
      revisao(5, 'Descreva em voz alta uma pessoa da sua infância (um avô, um professor, um vizinho) com cinco frases no imperfecto.'),
      exercicios(20, [
        ouvir('Yo vivía en Sevilla', ['Yo vivía en Sevilla', 'Yo viví en Sevilla', 'Yo vivo en Sevilla'], 'Yo vivía en Sevilla', 'O «-ía» marca o imperfecto; «viví» seria o indefinido.'),
        ouvir('Íbamos al pueblo cada verano', ['Íbamos al pueblo cada verano', 'Fuimos al pueblo cada verano', 'Vamos al pueblo cada verano'], 'Íbamos al pueblo cada verano', '«Íbamos» é o imperfecto de «ir» e indica hábito.'),
        ouvir('Era una casa antigua', ['Era una casa antigua', 'Fue una casa antigua', 'Es una casa antigua'], 'Era una casa antigua', '«Era» descreve a casa no passado.'),
        ditado('Mi abuela cocinaba muy bien', 'Escreva: Mi abuela cocinaba muy bien. Atenção ao «b» de «-aba».'),
        ditado('Hacía mucho frío', 'Escreva: Hacía mucho frío. O «h» é mudo e «-ía» leva acento.'),
        ditado('Éramos cinco hermanos', 'Escreva: Éramos cinco hermanos. «Éramos» leva acento.'),
        mc('Qual é a forma de «yo» de «hablar» no imperfecto?', ['hablaba', 'hablava', 'hablé'], 'hablaba', 'O imperfecto de -ar termina em «-aba», com «b».'),
        mc('Qual é a forma de «nosotros» de «ir» no imperfecto?', ['íbamos', 'fuimos', 'vamos'], 'íbamos', '«Íbamos» é o imperfecto; «fuimos» é o indefinido.'),
        mc('Qual é a forma de «ellos» de «ver» no imperfecto?', ['veían', 'vían', 'vieron'], 'veían', 'O imperfecto de «ver» é «veía, veías, veía, veíamos, veíais, veían».'),
        mc('Qual frase indica um hábito do passado?', ['De niño jugaba en la calle.', 'Ayer jugué en la calle.', 'Hoy juego en la calle.'], 'De niño jugaba en la calle.', 'O imperfecto com «de niño» indica o que se repetia.'),
        mc('Como se diz «Eu tinha dez anos»?', ['Tenía diez años.', 'Tuve diez años.', 'Tengo diez años.'], 'Tenía diez años.', 'A idade no passado usa o imperfecto.'),
        mc('O que significa «exquisito» em espanhol?', ['delicioso', 'esquisito', 'caro'], 'delicioso', '«Exquisito» é delicioso; o estranho é «raro» ou «extraño».'),
        mc('O que significa «embarazada» em espanhol?', ['grávida', 'constrangida', 'ocupada'], 'grávida', 'Constrangida é «avergonzada».'),
        lacuna('Mi abuelo ___ el periódico cada mañana. (leer)', ['leía', 'leyó', 'lee'], 'leía', 'Hábito do passado: imperfecto.'),
        lacuna('De niños, nosotros ___ en el patio. (jugar)', ['jugábamos', 'jugabamos', 'jugamos'], 'jugábamos', 'O imperfecto de «nosotros» leva acento: «-ábamos».'),
        lacuna('Eran las nueve y ___ calor. (hacer)', ['hacía', 'hizo', 'hace'], 'hacía', 'O tempo atmosférico no cenário vai para o imperfecto.'),
        lacuna('Antes ___ en un banco. (yo, trabajar)', ['trabajaba', 'trabajé', 'trabajo'], 'trabajaba', '«Antes» indica situação habitual do passado.'),
        lacuna('Mientras yo cocinaba, mi padre ___. (leer)', ['leía', 'leyó', 'leo'], 'leía', 'As duas ações simultâneas vão para o imperfecto.'),
        ordem('Ordene: «Mi abuela era muy alta.»', ['Mi', 'abuela', 'era', 'muy', 'alta.'], 'Mi abuela era muy alta.', 'Sujeito, verbo ser e adjetivo.'),
        ordem('Ordene: «De niño vivía en Madrid.»', ['De', 'niño', 'vivía', 'en', 'Madrid.'], 'De niño vivía en Madrid.', 'Marcador de tempo e verbo no imperfecto.'),
        livre('Escreva em espanhol: Quando eu era criança, morávamos perto do mar.', 'De niño vivíamos cerca del mar.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, como era um dia comum nas suas férias de criança, com pelo menos seis frases no imperfecto.'),
    ]),
  ],
});
