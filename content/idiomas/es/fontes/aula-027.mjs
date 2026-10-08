import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 27, titulo: 'Futuro simples', nivel: 'a2',
  objetivo: 'Formar o futuro simples dos verbos regulares (infinitivo + terminações) e dos dez irregulares mais comuns (tendré, haré, diré, podré, pondré, saldré, vendré, sabré, querré, habré), usá-lo para planos, previsões e promessas, e reconhecer os marcadores de tempo.',
  nota: 'Você agora fala do que vai acontecer: planos, previsões e promessas. Próxima aula: o imperativo, para dar instruções e pedir coisas.',
  sessoes: [
    sessao('S1', 'O futuro regular', [
      revisao(5, 'Diga, em voz alta, o que você faz todos os dias com o presente. Depois diga duas coisas que você fez ontem com o pretérito indefinido.'),
      palavras(8, [
        ['mañana', 'manhána', 'amanhã', ''], ['pasado mañana', 'pasádo manhána', 'depois de amanhã', ''], ['la semana que viene', 'la semána ke biéne', 'a semana que vem', ''], ['el año que viene', 'el ánho ke biéne', 'o ano que vem', ''],
        ['dentro de dos días', 'déntro de dos días', 'daqui a dois dias', ''], ['en el futuro', 'en el futúro', 'no futuro', ''], ['algún día', 'algún día', 'algum dia', ''], ['pronto', 'prónto', 'em breve, logo', ''],
      ]),
      gramatica(12, 'O futuro simples regular', 'PASSO 1: o futuro simples se forma com o infinitivo inteiro, sem tirar nada. Isso vale para os três grupos (-ar, -er, -ir): «hablar», «comer», «vivir». PASSO 2: acrescente ao infinitivo as terminações: -é, -ás, -á, -emos, -éis, -án. São as mesmas para os três grupos. «Hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán.» PASSO 3: todas as formas levam acento, menos «nosotros»: «hablaré», «hablarás», «hablará», «hablaremos», «hablaréis», «hablarán». PASSO 4: o pronome «yo» e os outros normalmente se omitem; a terminação já diz quem faz. PASSO 5: para o plano mais próximo, a língua do dia a dia prefere o presente ou «ir a + infinitivo» (aula 30): «Mañana trabajo», «Mañana voy a trabajar». O futuro simples soa mais firme ou mais formal e é muito usado em previsões, promessas e textos escritos. PASSO 6: usos do futuro: planos («El año que viene estudiaré en Granada»), previsões («Mañana lloverá»), promessas («Te llamaré esta noche») e probabilidade no presente («Serán las cinco», que significa «devem ser cinco horas»). PASSO 7: o futuro com «si» e o presente: «Si estudias, aprobarás», com presente depois de «si». O futuro não aparece depois de «si»: não se diz «si estudiarás». PASSO 8: não esqueça o acento: sem ele, «hablara» seria outra forma verbal, e não o futuro.', {
        tag: 'Futuro',
        comparacao: 'em português, o futuro do presente («falarei, falarás, falará») também se forma com o infinitivo + terminação, mas a língua falada prefere «vou falar». Em espanhol acontece o mesmo: o futuro simples existe e é correto, mas no dia a dia ouve-se mais o presente e o «ir a + infinitivo». Atenção: o infinitivo fica inteiro, e o acento é obrigatório.',
        tabelas: [
          { titulo: 'Futuro regular', linhas: [
            { pronome: 'yo', hablar: 'hablaré', comer: 'comeré', vivir: 'viviré' },
            { pronome: 'tú', hablar: 'hablarás', comer: 'comerás', vivir: 'vivirás' },
            { pronome: 'él / ella / usted', hablar: 'hablará', comer: 'comerá', vivir: 'vivirá' },
            { pronome: 'nosotros, nosotras', hablar: 'hablaremos', comer: 'comeremos', vivir: 'viviremos' },
            { pronome: 'vosotros, vosotras', hablar: 'hablaréis', comer: 'comeréis', vivir: 'viviréis' },
            { pronome: 'ellos, ellas, ustedes', hablar: 'hablarán', comer: 'comerán', vivir: 'vivirán' },
          ] },
        ],
        exemplos: [['El año que viene viviré en Valencia.', 'No ano que vem vou morar em Valência.'], ['Mañana te llamaré por la noche.', 'Amanhã eu ligo para você à noite.'], ['La semana que viene comeremos con mis padres.', 'Na semana que vem vamos almoçar com meus pais.'], ['¿Dónde estarán mis llaves?', 'Onde estarão minhas chaves? (eu me pergunto)']],
        erros: [['Hablerás español.', 'Hablarás español.', 'O futuro mantém o infinitivo inteiro: hablar + ás.'], ['Si mañana lloverá, no saldré.', 'Si mañana llueve, no saldré.', 'Depois de «si», usa-se o presente, não o futuro.'], ['Yo hablaré, tú hablarás, él hablara.', 'Yo hablaré, tú hablarás, él hablará.', 'A forma de «él» leva acento: «hablará».'], ['Nosotros hablaramos.', 'Nosotros hablaremos.', 'A terminação de «nosotros» é «-emos», para os três grupos.']],
      }),
      producao(5, 'Diga três planos para a semana que vem, com o futuro regular: «Mañana trabajaré… La semana que viene estudiaré… El sábado comeré…»'),
    ]),
    sessao('S2', 'Os futuros irregulares', [
      revisao(4, 'Conjugue «hablar» e «vivir» no futuro, de «yo» a «ellos». Diga uma frase com cada um.'),
      palavras(6, [
        ['tendré', 'tendré', 'terei', ''], ['haré', 'aré', 'farei', ''], ['diré', 'diré', 'direi', ''], ['podré', 'podré', 'poderei', ''], ['saldré', 'saldré', 'sairei', ''], ['vendré', 'bendré', 'virei', ''],
      ]),
      gramatica(12, 'Dez verbos que mudam o radical no futuro', 'PASSO 1: alguns verbos comuns não usam o infinitivo inteiro. Mas as terminações são as mesmas de sempre: -é, -ás, -á, -emos, -éis, -án. PASSO 2: o primeiro grupo perde a vogal do infinitivo: «poder → podré», «saber → sabré», «querer → querré», «haber → habré». PASSO 3: o segundo grupo troca a vogal por um «d»: «tener → tendré», «venir → vendré», «poner → pondré», «salir → saldré». PASSO 4: o terceiro grupo é o mais irregular, pois perde letras: «decir → diré», «hacer → haré». PASSO 5: os derivados seguem o verbo base: «contener → contendré», «mantener → mantendré», «deshacer → desharé». PASSO 6: «haber» no futuro aparece quase só como «habrá» (haverá), forma impessoal e sempre no singular: «Mañana habrá una fiesta», «Habrá muchas personas». PASSO 7: o futuro é muito usado com «querer» e «poder» na linguagem cuidada: «¿Podrás venir?», «No querrá hablar». PASSO 8: os demais verbos são regulares no futuro, inclusive os que são irregulares no presente: «ir → iré», «ser → seré», «estar → estaré», «dar → daré», «ver → veré». Memorize os dez: tendré, haré, diré, podré, pondré, saldré, vendré, sabré, querré, habré.', {
        tag: 'Futuro',
        comparacao: 'em português também há verbos que mudam no futuro: «fazer → farei», «dizer → direi», «trazer → trarei». Em espanhol são mais: «tener → tendré» e «salir → saldré» parecem estranhos para quem fala português, porque nós dizemos «terei» e «sairei». O que ajuda é lembrar que os verbos mudam sempre do mesmo jeito: o radical muda, as terminações não.',
        tabelas: [
          { titulo: 'Dez irregulares do futuro', linhas: [
            { infinitivo: 'tener', radical: 'tendr-', yo: 'tendré', exemplo: 'Mañana tendré tiempo.' },
            { infinitivo: 'hacer', radical: 'har-', yo: 'haré', exemplo: 'Haré la cena.' },
            { infinitivo: 'decir', radical: 'dir-', yo: 'diré', exemplo: 'Te lo diré mañana.' },
            { infinitivo: 'poder', radical: 'podr-', yo: 'podré', exemplo: 'No podré venir.' },
            { infinitivo: 'poner', radical: 'pondr-', yo: 'pondré', exemplo: 'Pondré la mesa.' },
            { infinitivo: 'salir', radical: 'saldr-', yo: 'saldré', exemplo: 'Saldré a las ocho.' },
            { infinitivo: 'venir', radical: 'vendr-', yo: 'vendré', exemplo: 'Vendré con mi hermana.' },
            { infinitivo: 'saber', radical: 'sabr-', yo: 'sabré', exemplo: 'Lo sabré mañana.' },
            { infinitivo: 'querer', radical: 'querr-', yo: 'querré', exemplo: 'Querrá un café.' },
            { infinitivo: 'haber', radical: 'habr-', yo: 'habré', exemplo: 'Habrá más gente.' },
          ] },
        ],
        exemplos: [['Mañana tendré una reunión importante.', 'Amanhã terei uma reunião importante.'], ['El sábado saldremos con unos amigos.', 'No sábado sairemos com uns amigos.'], ['Te diré la verdad cuando vengas.', 'Direi a verdade para você quando vier.'], ['El viernes habrá una fiesta en el barrio.', 'Na sexta haverá uma festa no bairro.']],
        erros: [['Mañana tenerá tiempo.', 'Mañana tendrá tiempo.', 'O radical de «tener» no futuro é «tendr-».'], ['Haceré la cena.', 'Haré la cena.', '«Hacer» perde o «ce»: haré, harás…'], ['Yo podré vendré mañana.', 'Yo vendré mañana.', 'Use um verbo só; «venir» no futuro é «vendr-».'], ['Saliré a las ocho.', 'Saldré a las ocho.', 'O futuro de «salir» é «saldr-».']],
      }),
      producao(8, 'Diga o que você fará e o que não fará nas próximas férias, usando pelo menos seis dos dez irregulares: «Tendré… Saldré… Podré… No haré… Vendré… Diré…»'),
    ]),
    sessao('S3', 'Previsões, promessas e probabilidade', [
      revisao(4, 'Diga de memória os dez futuros irregulares na forma de «yo». Faça uma frase com cada um dos quatro primeiros.'),
      palavras(5, [
        ['el tiempo', 'el tiémpo', 'o tempo (clima, também tempo)', ''], ['llover', 'lhobér', 'chover', ''], ['hacer sol', 'athér sol', 'fazer sol', ''], ['nublado', 'nubládo', 'nublado', ''], ['la temperatura', 'la temperatúra', 'a temperatura', ''], ['el viento', 'el biénto', 'o vento', ''],
      ]),
      gramatica(8, 'Para que serve o futuro: previsões, promessas e dúvidas', 'PASSO 1: previsão: o futuro descreve o que se espera que aconteça. «Mañana lloverá en el norte», «La semana que viene hará más frío». PASSO 2: promessa e decisão firme: «Te lo prometo: estudiaré todos los días», «Mañana te llamaré». PASSO 3: ordem suave, com tom de autoridade: «Mañana vendrás a las nueve», que não é pergunta, mas um aviso que quase não aceita recusa. Use com cuidado. PASSO 4: dúvida ou suposição sobre o presente: «¿Dónde estará Ana?» (Onde estará a Ana? Eu me pergunto) e «Estará en casa» (Deve estar em casa). Isso funciona só no futuro simples. PASSO 5: use marcadores de tempo para localizar a ação: «mañana», «el año que viene», «dentro de una semana». «Dentro de» é «daqui a»: «Llegaré dentro de una hora» é «chegarei daqui a uma hora». PASSO 6: «en una hora» também pode significar «daqui a uma hora», mas «dentro de» é a forma mais clara. PASSO 7: com «cuando» e o futuro, o espanhol usa o presente (subjuntivo) na oração com «cuando»: «Cuando llegues, te llamaré», que aparecerá mais tarde; por ora basta guardar a frase pronta. PASSO 8: o tempo meteorológico: «llover» (llueve, lloverá), «hacer sol / calor / frío / viento», «estar nublado».', {
        tag: 'Futuro',
        comparacao: 'em português, as previsões usam «vai chover» ou «choverá», e a suposição usa o futuro: «Ele deve estar em casa» ou «Estará em casa». Em espanhol o futuro serve igualmente para a suposição («Estará en casa»). A diferença está em «dentro de»: o português diz «daqui a uma hora», o espanhol «dentro de una hora».',
        tabela: [
          { uso: 'previsão', exemplo: 'Mañana lloverá en Galicia.', traducao: 'Amanhã choverá na Galícia.' },
          { uso: 'promessa', exemplo: 'Te llamaré esta noche.', traducao: 'Ligo para você esta noite.' },
          { uso: 'plano firme', exemplo: 'El año que viene estudiaré inglés.', traducao: 'No ano que vem vou estudar inglês.' },
          { uso: 'suposição', exemplo: 'Serán las cinco.', traducao: 'Devem ser cinco horas.' },
          { uso: 'tempo', exemplo: 'Llegaré dentro de una hora.', traducao: 'Chego daqui a uma hora.' },
        ],
        erros: [['Llegaré dentro una hora.', 'Llegaré dentro de una hora.', 'A expressão completa é «dentro de».'], ['Si lloverá, no saldré.', 'Si llueve, no saldré.', 'Depois de «si», usa-se o presente.'], ['Mañana habrán muchas personas.', 'Mañana habrá muchas personas.', '«Haber» impessoal fica no singular, mesmo com plural.'], ['Estará muy cansado. (querendo dizer «está cansado, tenho certeza»)', 'Está muy cansado.', 'O futuro de suposição indica dúvida; para fato, use o presente.']],
      }),
      texto(8, 'El tiempo de la semana / O tempo da semana', 'La semana que viene habrá mucho cambio. El lunes hará sol y la temperatura subirá hasta veinte grados. El martes se nublará por la tarde y el miércoles lloverá en el norte. El jueves hará mucho viento, pero el viernes saldrá el sol otra vez. Marta tiene planes para el fin de semana: si hace buen tiempo, saldrá a pasear con su hermano y comerán en el campo. Si llueve, se quedarán en casa y verán una película.', 'Na semana que vem haverá muita mudança. Na segunda fará sol e a temperatura subirá até vinte graus. Na terça ficará nublado à tarde e na quarta choverá no norte. Na quinta fará muito vento, mas na sexta o sol sairá de novo. Marta tem planos para o fim de semana: se fizer bom tempo, sairá para passear com o irmão e almoçarão no campo. Se chover, ficarão em casa e verão um filme.', [
        ['¿Qué tiempo hará el lunes?', 'Hará sol.'], ['¿Cuándo lloverá en el norte?', 'El miércoles.'], ['¿Qué hará el jueves?', 'Hará mucho viento.'], ['¿Qué hará Marta si hace buen tiempo?', 'Saldrá a pasear con su hermano.'], ['¿Qué harán si llueve?', 'Se quedarán en casa y verán una película.'],
      ]),
      producao(5, 'Faça a previsão do tempo da sua cidade para os próximos três dias, em voz alta, com o futuro. Depois diga o que você fará se chover.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 27', [
      revisao(5, 'Diga cinco planos para o ano que vem e três promessas, todos com o futuro simples.'),
      exercicios(20, [
        ouvir('Mañana tendré tiempo', ['Mañana tendré tiempo', 'Mañana tenía tiempo', 'Mañana tengo tiempo'], 'Mañana tendré tiempo', 'Ouça «tendré»: o radical é «tendr-» e o acento está no «é».'),
        ouvir('Saldremos a las ocho', ['Saldremos a las ocho', 'Salimos a las ocho', 'Saldrán a las ocho'], 'Saldremos a las ocho', 'Ouça a terminação «-emos» de «saldremos».'),
        ouvir('El viernes habrá una fiesta', ['El viernes habrá una fiesta', 'El viernes había una fiesta', 'El viernes hubo una fiesta'], 'El viernes habrá una fiesta', 'Ouça «habrá», futuro de «haber».'),
        ditado('Te llamaré esta noche', 'Escreva: Te llamaré esta noche. Não esqueça o acento em «llamaré».'),
        ditado('Mañana lloverá en el norte', 'Escreva: Mañana lloverá en el norte.'),
        ditado('Dentro de una hora llegaré', 'Escreva: Dentro de una hora llegaré. O acento está em «llegaré».'),
        mc('Qual é o futuro de «yo» de «hacer»?', ['haré', 'haceré', 'hará'], 'haré', 'O radical é «har-».'),
        mc('Qual é o futuro de «él» de «poder»?', ['podrá', 'poderá', 'podrán'], 'podrá', 'O radical é «podr-» e o acento fica no «á».'),
        mc('Como se diz «Chego daqui a uma hora»?', ['Llegaré dentro de una hora.', 'Llegaré en una hora.', 'Llegué dentro de una hora.'], 'Llegaré dentro de una hora.', '«Dentro de» é a forma clara para «daqui a».'),
        mc('Qual frase está correta?', ['Si llueve, no saldré.', 'Si lloverá, no saldré.', 'Si llovería, no saldré.'], 'Si llueve, no saldré.', 'Depois de «si», usa-se o presente.'),
        mc('Qual é a melhor tradução de «Estará en casa»?', ['Deve estar em casa.', 'Estava em casa.', 'Esteve em casa.'], 'Deve estar em casa.', 'O futuro pode indicar suposição sobre o presente.'),
        mc('Qual é o futuro de «venir» na forma de «nosotros»?', ['vendremos', 'venimos', 'veniremos'], 'vendremos', 'O radical é «vendr-».'),
        lacuna('Mañana ___ una reunión importante. (yo, tener)', ['tendré', 'tendría', 'tenderé'], 'tendré', 'Futuro irregular: tendr- + é.'),
        lacuna('El sábado ___ con mis amigos. (nosotros, salir)', ['saldremos', 'saliremos', 'salimos'], 'saldremos', 'O radical é «saldr-».'),
        lacuna('Te ___ la verdad. (yo, decir)', ['diré', 'deciré', 'digo'], 'diré', 'Futuro irregular: dir- + é.'),
        lacuna('El año que viene ___ en Granada. (ellos, vivir)', ['vivirán', 'viviran', 'vivirá'], 'vivirán', 'Futuro regular de «ellos»: «-án», com acento.'),
        ordem('Ordene: «Mañana lloverá en el norte.»', ['Mañana', 'lloverá', 'en', 'el', 'norte.'], 'Mañana lloverá en el norte.', 'O marcador de tempo abre a frase.'),
        ordem('Ordene: «Si llueve, nos quedaremos en casa.»', ['Si', 'llueve,', 'nos', 'quedaremos', 'en', 'casa.'], 'Si llueve, nos quedaremos en casa.', 'Depois de «si», o presente; na outra oração, o futuro.'),
        livre('Escreva em espanhol: Amanhã vou ter tempo e sairei com meus amigos.', 'Mañana tendré tiempo y saldré con mis amigos.'),
      ]),
      producao(5, 'Diga, em voz alta, o seu plano ideal para o próximo fim de semana, com seis frases no futuro, usando pelo menos três irregulares.'),
    ]),
  ],
});
