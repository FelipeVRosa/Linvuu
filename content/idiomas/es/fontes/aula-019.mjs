import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 19, titulo: 'Pretérito indefinido regular', nivel: 'a2',
  objetivo: 'Contar o que aconteceu e já terminou («ayer», «anoche», «el año pasado») com as formas regulares de -ar, -er e -ir do pretérito indefinido, acertar os acentos («hablé», «habló»), as mudanças de grafia («busqué», «llegué», «empecé», «leyó») e diferenciar o indefinido do pretérito perfecto.',
  nota: 'Você conta, no passado, o que fez e o que outras pessoas fizeram em um tempo já terminado. Próxima aula: o pretérito indefinido dos verbos irregulares (fui, hice, dije, tuve, estuve…).',
  sessoes: [
    sessao('S1', 'O indefinido dos verbos em -ar', [
      intro(5, 'Você chega ao A2 já sabendo se apresentar, falar da família, pedir no café, dizer as horas, perguntar um caminho, contar a rotina, dizer do que gosta e dizer o que fez hoje com o pretérito perfecto. Neste nível você passa a contar histórias: o que aconteceu ontem, na semana passada, nas férias. O primeiro tempo que você precisa é o pretérito indefinido, o tempo dos fatos terminados. Para quem fala português ele parece familiar (falei, falou, falaram), e é justamente por isso que vale prestar atenção nos acentos e nas terminações.'),
      palavras(8, [
        ['ayer', 'aiér', 'ontem', ''], ['anoche', 'anótche', 'ontem à noite', ''], ['anteayer', 'anteaiér', 'anteontem', ''], ['la semana pasada', 'la semána pasáda', 'na semana passada', ''],
        ['el año pasado', 'el ánho pasádo', 'no ano passado', ''], ['hace dos días', 'áthe dos días', 'há dois dias', ''], ['el lunes pasado', 'el lúnes pasádo', 'na segunda-feira passada', ''], ['una vez', 'úna beth', 'uma vez', ''],
      ]),
      gramatica(12, 'Indefinido: os verbos em -ar', 'PASSO 1: use o pretérito indefinido para um fato que aconteceu e acabou em um momento que você consegue nomear: «ayer», «anoche», «el lunes», «en 2019», «hace dos días». PASSO 2: nos verbos em -ar, tire o «-ar» do infinitivo e ponha estas terminações: -é, -aste, -ó, -amos, -asteis, -aron. «Hablar» vira «hablé, hablaste, habló, hablamos, hablasteis, hablaron». PASSO 3: a primeira pessoa (yo) e a terceira (él, ella, usted) levam acento escrito: «hablé» e «habló». O acento marca a sílaba forte e também separa o passado do presente: «hablo» (eu falo) e «habló» (ele falou). PASSO 4: em «nosotros», o indefinido dos verbos em -ar é igual ao presente: «hablamos». O contexto resolve: «Ayer hablamos» é passado, «Hablamos cada día» é hábito. PASSO 5: «vosotros» (Espanha) termina em «-asteis»: «hablasteis». Na América Latina, «ustedes» usa «hablaron». PASSO 6: o pronome sujeito quase sempre fica de fora, porque a terminação já diz quem é: «Ayer cené en casa». PASSO 7: o indefinido não tem ligação com o presente: o fato está fechado no passado. Com «hoy», «esta semana» ou «este año», que ainda não acabaram, a Espanha prefere o pretérito perfecto da aula 17: «Hoy he trabajado mucho». Em boa parte da América Latina se diz «Hoy trabajé mucho», porque lá o indefinido substitui o perfecto com frequência.', {
        tag: 'Pretérito indefinido',
        comparacao: 'as terminações lembram o pretérito perfeito do português: «falei, falaste, falou, falamos, falastes, falaram» corresponde a «hablé, hablaste, habló, hablamos, hablasteis, hablaron». As armadilhas são o «-ó» no lugar de «-ou», o «-aron» no lugar de «-aram» e a forma «hablasteis» de «vosotros», que o português do Brasil quase não usa. O acento escrito não existe em «falei» e «falou», mas é obrigatório em «hablé» e «habló».',
        tabelas: [
          { titulo: 'hablar (falar), indefinido', linhas: [
            { pronome: 'yo', forma: 'hablé', exemplo: 'Ayer hablé con Ana.' },
            { pronome: 'tú', forma: 'hablaste', exemplo: '¿Hablaste con tu jefe?' },
            { pronome: 'él / ella / usted', forma: 'habló', exemplo: 'Usted habló muy claro.' },
            { pronome: 'nosotros, nosotras', forma: 'hablamos', exemplo: 'Anoche hablamos una hora.' },
            { pronome: 'vosotros, vosotras', forma: 'hablasteis', exemplo: '¿Hablasteis con el profesor?' },
            { pronome: 'ellos, ellas, ustedes', forma: 'hablaron', exemplo: 'Hablaron toda la tarde.' },
          ] },
          { titulo: 'Outros verbos regulares em -ar', linhas: [
            { infinitivo: 'trabajar', yo: 'trabajé', tú: 'trabajaste', él_ella_usted: 'trabajó', nosotros: 'trabajamos', vosotros: 'trabajasteis', ellos_ustedes: 'trabajaron' },
            { infinitivo: 'cenar', yo: 'cené', tú: 'cenaste', él_ella_usted: 'cenó', nosotros: 'cenamos', vosotros: 'cenasteis', ellos_ustedes: 'cenaron' },
            { infinitivo: 'comprar', yo: 'compré', tú: 'compraste', él_ella_usted: 'compró', nosotros: 'compramos', vosotros: 'comprasteis', ellos_ustedes: 'compraron' },
            { infinitivo: 'viajar', yo: 'viajé', tú: 'viajaste', él_ella_usted: 'viajó', nosotros: 'viajamos', vosotros: 'viajasteis', ellos_ustedes: 'viajaron' },
          ] },
        ],
        exemplos: [['El año pasado viajé a Valencia.', 'No ano passado viajei para Valência.'], ['Anoche cenamos en casa de Marta.', 'Ontem à noite jantamos na casa da Marta.'], ['Mi hermano trabajó el sábado.', 'Meu irmão trabalhou no sábado.']],
        erros: [['Ayer hablo con Ana.', 'Ayer hablé con Ana.', 'Com «ayer», o fato está terminado: use o indefinido, não o presente.'], ['Ella hablou con el jefe.', 'Ella habló con el jefe.', 'A terminação de «él, ella» é «-ó», não «-ou».'], ['Ellos hablaram mucho.', 'Ellos hablaron mucho.', 'A terminação de «ellos» é «-aron».'], ['Tú hablastes con Ana.', 'Tú hablaste con Ana.', 'Com «tú», a terminação é «-aste», sem «s» final.'], ['Hable con ella ayer.', 'Hablé con ella ayer.', 'Sem o acento, «hable» é outra forma verbal; o indefinido de «yo» leva «-é».']],
      }),
      producao(5, 'Diga em voz alta o que você fez ontem com cinco verbos em -ar: «Ayer trabajé… Ayer hablé… Ayer compré… Anoche cené… Ayer caminé…» Depois diga o que um amigo fez, com a forma de «él, ella».'),
    ]),
    sessao('S2', 'O indefinido em -er e -ir e as mudanças de grafia', [
      revisao(4, 'Conjugue «hablar» e «trabajar» no indefinido, de «yo» a «ellos». Diga uma frase com «ayer» e outra com «anoche».'),
      palavras(6, [
        ['comer', 'komér', 'comer', ''], ['beber', 'bebér', 'beber', ''], ['vivir', 'bibír', 'morar, viver', ''], ['escribir', 'eskribír', 'escrever', ''], ['salir', 'salír', 'sair', ''], ['recibir', 'rethibír', 'receber', ''],
      ]),
      gramatica(12, 'Indefinido: -er, -ir e mudanças de grafia', 'PASSO 1: os verbos em -er e em -ir usam as mesmas terminações no indefinido: -í, -iste, -ió, -imos, -isteis, -ieron. «Comer» vira «comí, comiste, comió, comimos, comisteis, comieron». «Vivir» vira «viví, viviste, vivió, vivimos, vivisteis, vivieron». PASSO 2: a primeira pessoa «-í» e a terceira «-ió» levam acento: «comí», «comió». PASSO 3: em «nosotros», os verbos em -ir são iguais ao presente («vivimos»), mas os verbos em -er mudam: presente «comemos», indefinido «comimos». PASSO 4: o português do Brasil diz «ele comeu, ele viveu»; em espanhol, nunca «-eu»: «comió», «vivió». E o plural é «comieron», não «comeron». PASSO 5: para manter o som, alguns verbos em -ar mudam a grafia só em «yo». Verbos em «-car» viram «-qué» («buscar → busqué»), em «-gar» viram «-gué» («llegar → llegué») e em «-zar» viram «-cé» («empezar → empecé»). O português faz o mesmo: «busquei, cheguei, comecei». PASSO 6: quando o radical termina em vogal, o «i» entre vogais vira «y» na terceira pessoa: «leer → leyó, leyeron». As outras formas levam acento no «í»: «leí, leíste, leímos, leísteis». Fazem o mesmo «creer» (creyó) e «oír» (oyó). PASSO 7: «salir» é irregular só no presente («salgo»); no indefinido é regular: «salí, saliste, salió». PASSO 8: alguns verbos muito comuns (ser, ir, hacer, tener, decir, ver) são irregulares no indefinido. Eles ficam para a aula 20.', {
        tag: 'Pretérito indefinido',
        comparacao: 'o português usa «-eu» na terceira pessoa («comeu», «viveu») e «-eram» ou «-iram» no plural; o espanhol usa «-ió» e «-ieron» para -er e -ir. A mudança de grafia é igual à nossa: «cheguei» corresponde a «llegué», «comecei» corresponde a «empecé» (o «ç» do português vira «c» antes de «e»).',
        tabelas: [
          { titulo: 'comer e vivir, indefinido', linhas: [
            { pronome: 'yo', comer: 'comí', vivir: 'viví' }, { pronome: 'tú', comer: 'comiste', vivir: 'viviste' }, { pronome: 'él / ella / usted', comer: 'comió', vivir: 'vivió' },
            { pronome: 'nosotros', comer: 'comimos', vivir: 'vivimos' }, { pronome: 'vosotros', comer: 'comisteis', vivir: 'vivisteis' }, { pronome: 'ellos / ustedes', comer: 'comieron', vivir: 'vivieron' },
          ] },
          { titulo: 'Mudanças de grafia na forma «yo»', linhas: [
            { infinitivo: 'buscar', yo: 'busqué', motivo: 'c + é soaria «th»; escreve-se «qu» para manter o «k»' },
            { infinitivo: 'tocar', yo: 'toqué', motivo: 'mesma regra de «-car»' },
            { infinitivo: 'llegar', yo: 'llegué', motivo: 'g + é soaria «h»; escreve-se «gu» para manter o «g»' },
            { infinitivo: 'pagar', yo: 'pagué', motivo: 'mesma regra de «-gar»' },
            { infinitivo: 'empezar', yo: 'empecé', motivo: 'z não se escreve antes de «e»; vira «c»' },
            { infinitivo: 'cruzar', yo: 'crucé', motivo: 'mesma regra de «-zar»' },
          ] },
          { titulo: 'leer, indefinido', linhas: [
            { pronome: 'yo', forma: 'leí' }, { pronome: 'tú', forma: 'leíste' }, { pronome: 'él / ella / usted', forma: 'leyó' }, { pronome: 'nosotros', forma: 'leímos' }, { pronome: 'vosotros', forma: 'leísteis' }, { pronome: 'ellos / ustedes', forma: 'leyeron' },
          ] },
        ],
        exemplos: [['Anoche escribí un correo largo.', 'Ontem à noite escrevi um e-mail comprido.'], ['Llegué a casa a las nueve.', 'Cheguei em casa às nove.'], ['Ellos vivieron un año en Lima.', 'Eles moraram um ano em Lima.']],
        erros: [['Él comeu en el bar.', 'Él comió en el bar.', 'Na terceira pessoa de -er e -ir, a terminação é «-ió».'], ['Ellos viveron en Sevilla.', 'Ellos vivieron en Sevilla.', 'O plural é «-ieron».'], ['Ayer llegé tarde.', 'Ayer llegué tarde.', 'Para manter o som de «g», escreve-se «gu» antes do «é».'], ['El año pasado empezé a estudiar.', 'El año pasado empecé a estudiar.', 'Antes de «e» não se escreve «z»; usa-se «c».'], ['Ella leió el libro.', 'Ella leyó el libro.', 'O «i» entre vogais vira «y»: «leyó».']],
      }),
      producao(8, 'Conte em voz alta, com pelo menos oito frases, como foi o seu domingo passado: o que comeu e bebeu, a quem escreveu, a que horas saiu e a que horas chegou. Use «el domingo pasado», «primero», «luego» e «después».'),
    ]),
    sessao('S3', 'Contar um dia e escolher o tempo certo', [
      revisao(4, 'Conjugue «comer» e «vivir» no indefinido. Depois escreva a forma de «yo» de buscar, llegar e empezar.'),
      palavras(5, [
        ['primero', 'priméro', 'primeiro, primeiramente', ''], ['luego', 'luégo', 'depois, em seguida', ''], ['después', 'despwés', 'depois', ''], ['más tarde', 'mas tárde', 'mais tarde', ''], ['por fin', 'por fin', 'por fim, finalmente', ''],
      ]),
      gramatica(8, 'Indefinido ou perfecto, e três falsos amigos', 'PASSO 1: pense no relógio. Se o período já acabou («ayer», «el lunes», «en 2019», «la semana pasada», «hace dos días»), use o indefinido: «Ayer compré pan». PASSO 2: se o período ainda não acabou («hoy», «esta mañana», «esta semana», «este año»), a Espanha usa o pretérito perfecto: «Esta semana he trabajado mucho». PASSO 3: na América Latina, o indefinido costuma substituir o perfecto: «Esta semana trabajé mucho». As duas versões são corretas, cada uma na sua região; escolha uma e seja coerente. PASSO 4: para dizer «há dois dias» em um fato passado, ponha «hace» antes do tempo e sem outra palavra: «Llegué hace dos días». Não se diz «hace dos días atrás». PASSO 5: três falsos amigos para o passado. «Cenar» e «cena» são «jantar» e «jantar» (a refeição): «Cené a las ocho». «Un rato» é «um momento», não o animal; o animal é «ratón» (e «rata» é a ratazana): «Esperé un rato». «Oficina» é «escritório»: «Trabajé en la oficina».', {
        tag: 'Pretérito indefinido',
        comparacao: 'o português do Brasil usa o mesmo pretérito perfeito para «ontem comi» e «hoje comi». O espanhol da Espanha separa os dois: «Ayer comí» (indefinido) e «Hoy he comido» (perfecto). Na América Latina a separação é menos rígida, e o indefinido aparece nos dois casos.',
        tabela: [
          { marcador: 'ayer, anoche, anteayer', tempo: 'terminado', exemplo: 'Anoche llegué tarde.' },
          { marcador: 'el lunes, el domingo pasado', tempo: 'terminado', exemplo: 'El lunes pasado compré un libro.' },
          { marcador: 'la semana pasada, el año pasado, en 2019', tempo: 'terminado', exemplo: 'En 2019 viajé a Perú.' },
          { marcador: 'hace + tempo', tempo: 'terminado', exemplo: 'Salí hace una hora.' },
          { marcador: 'hoy, esta semana, este año', tempo: 'não terminado (Espanha: perfecto)', exemplo: 'Hoy he comido temprano.' },
        ],
        erros: [['Ayer he llegado tarde.', 'Ayer llegué tarde.', '«Ayer» é um tempo terminado: use o indefinido.'], ['Llegué hace dos días atrás.', 'Llegué hace dos días.', '«Hace» já indica o passado; «atrás» é redundante.'], ['Hay un rato en la cocina.', 'Hay un ratón en la cocina.', '«Rato» é um momento; o animal é «ratón».'], ['Ayer trabajé en el escritorio de mi empresa.', 'Ayer trabajé en la oficina de mi empresa.', '«Escritorio» é a mesa de trabalho; o escritório como lugar é «oficina».']],
      }),
      texto(8, 'El sábado de Inés / O sábado da Inês', 'El sábado por la mañana desayuné con mi hermana. Después salimos de casa y caminamos hasta el mercado. Compré fruta y mi hermana compró pan. A las dos comimos en un bar pequeño y bebimos agua con gas. Por la tarde llamé a mi madre y escribí un mensaje a Carlos. Cené en casa y miré una película hasta las once.', 'No sábado de manhã tomei café da manhã com minha irmã. Depois saímos de casa e caminhamos até o mercado. Comprei fruta e minha irmã comprou pão. Às duas almoçamos em um bar pequeno e bebemos água com gás. À tarde liguei para minha mãe e escrevi uma mensagem para o Carlos. Jantei em casa e assisti a um filme até as onze.', [
        ['¿Con quién desayunó Inés?', 'Con su hermana.'], ['¿Adónde caminaron?', 'Al mercado.'], ['¿Quién compró pan?', 'La hermana de Inés.'], ['¿Qué bebieron en el bar?', 'Agua con gas.'], ['¿A quién llamó Inés por la tarde?', 'A su madre.'], ['¿Dónde cenó?', 'En casa.'],
      ]),
      producao(5, 'Escreva cinco frases sobre o seu último fim de semana com «el sábado», «el domingo», «primero», «luego» e «por fin». Depois leia em voz alta.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 19', [
      revisao(5, 'Diga o que você fez ontem, com seis verbos no indefinido (-ar, -er e -ir). Depois diga uma frase com «hace» e outra com «el año pasado».'),
      exercicios(20, [
        ouvir('Ayer comí paella', ['Ayer comí paella', 'Ayer comió paella', 'Ayer como paella'], 'Ayer comí paella', 'O «í» final e o acento marcam «yo»; «comió» seria «él, ella».'),
        ouvir('Hablaron toda la tarde', ['Hablaron toda la tarde', 'Habló toda la tarde', 'Hablamos toda la tarde'], 'Hablaron toda la tarde', 'A terminação «-aron» é de «ellos» ou «ustedes».'),
        ouvir('Llegué a las nueve', ['Llegué a las nueve', 'Llegó a las nueve', 'Llego a las nueve'], 'Llegué a las nueve', 'Ouça a sílaba forte no final: «lle-GUÉ».'),
        ditado('Anoche cené en casa', 'Escreva: Anoche cené en casa. O «é» final leva acento.'),
        ditado('Mi hermana vivió en Sevilla', 'Escreva: Mi hermana vivió en Sevilla. A terceira pessoa de -ir termina em «-ió».'),
        ditado('¿Qué compraste ayer?', 'Escreva: ¿Qué compraste ayer? A forma de «tú» termina em «-aste».'),
        mc('Qual é a forma de «yo» de «trabajar» no indefinido?', ['trabajé', 'trabajo', 'trabajó'], 'trabajé', 'Em «yo», o indefinido dos verbos em -ar termina em «-é».'),
        mc('Como se diz «Ela falou com o chefe»?', ['Habló con el jefe.', 'Hablo con el jefe.', 'Hablé con el jefe.'], 'Habló con el jefe.', '«Él, ella» termina em «-ó» com acento.'),
        mc('Qual é a forma de «ellos» de «comer» no indefinido?', ['comieron', 'comeron', 'comían'], 'comieron', 'Os verbos em -er e -ir usam «-ieron».'),
        mc('Qual é a forma de «yo» de «llegar» no indefinido?', ['llegué', 'llegé', 'llego'], 'llegué', 'Escreve-se «gu» antes do «é» para manter o som de «g».'),
        mc('Qual frase está correta?', ['Ayer compré pan.', 'Ayer compro pan.', 'Ayer comprá pan.'], 'Ayer compré pan.', 'Com «ayer», use o indefinido, e «yo» termina em «-é».'),
        mc('O que significa «un rato» em espanhol?', ['um momento', 'um animal roedor', 'uma ratoeira'], 'um momento', 'O animal é «ratón»; «rato» é um tempinho.'),
        mc('Qual é o verbo espanhol para «jantar»?', ['cenar', 'cenir', 'almorzar'], 'cenar', '«Cenar» é jantar; «almorzar» é almoçar.'),
        lacuna('Ayer yo ___ con Ana. (hablar)', ['hablé', 'hablo', 'habló'], 'hablé', 'Com «yo» no indefinido, a terminação é «-é».'),
        lacuna('Ellos ___ en un bar. (cenar)', ['cenaron', 'cenan', 'cenamos'], 'cenaron', 'Com «ellos», a terminação é «-aron».'),
        lacuna('Nosotros ___ el domingo. (salir)', ['salimos', 'salemos', 'salieron'], 'salimos', 'Os verbos em -ir usam «-imos» em «nosotros».'),
        lacuna('Tú ___ una carta. (escribir)', ['escribiste', 'escribistes', 'escribió'], 'escribiste', 'Com «tú», a terminação é «-iste», sem «s» extra.'),
        lacuna('Ella ___ un libro. (leer)', ['leyó', 'leió', 'leó'], 'leyó', 'O «i» entre vogais vira «y»: «leyó».'),
        ordem('Ordene: «Ayer compré pan.»', ['Ayer', 'compré', 'pan.'], 'Ayer compré pan.', 'O marcador de tempo abre a frase e o verbo vem em seguida.'),
        ordem('Ordene: «Anoche cenamos en casa.»', ['Anoche', 'cenamos', 'en', 'casa.'], 'Anoche cenamos en casa.', 'Marcador, verbo e lugar.'),
        livre('Escreva em espanhol: Ontem eu trabalhei e jantei em casa.', 'Ayer trabajé y cené en casa.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, o que você fez no último sábado, desde a manhã até a noite, e pergunte o que ele fez: «¿Y tú, qué tal tu sábado?»'),
    ]),
  ],
});
