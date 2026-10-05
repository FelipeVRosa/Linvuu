import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 24, titulo: 'Präteritum: war, hatte e os modais', nivel: 'a2',
  objetivo: 'Usar o Präteritum de sein, haben e dos modais (konnte, musste, wollte, durfte, sollte), escolher entre Präteritum e Perfekt na conversa e reconhecer as formas mais comuns do Präteritum nos textos.',
  nota: 'Você conta o passado com war, hatte e os modais e reconhece o Präteritum dos textos. Próximas aulas: o dativo, em passos pequenos.',
  sessoes: [
    sessao('S1', 'War e hatte', [
      revisao(5, 'Escreva 6 frases no Perfekt, com «haben» e com «sein».'),
      palavras(8, [
        ['früher', 'frü-er', 'antigamente', 'formerly'], ['damals', 'dá-mals', 'naquela época', 'back then'], ['als Kind', 'als kint', 'quando criança', 'as a child'], ['krank', 'krank', 'doente', 'ill'],
        ['gesund', 'guezúnt', 'saudável', 'healthy'], ['müde', 'múde', 'cansado', 'tired'], ['das Fieber', 'das fíber', 'febre', 'fever'], ['der Urlaub', 'der úrlaup', 'férias', 'holiday'],
      ]),
      gramatica(12, 'Sein e haben no Präteritum, passo a passo', 'PASSO 1: «Präteritum» é outra forma do passado, mais usada na ESCRITA e em textos. PASSO 2: com «sein» e «haben», a CONVERSA também usa o Präteritum, em vez do Perfekt: dizemos «Ich war müde», não «Ich bin müde gewesen»; dizemos «Ich hatte Fieber», não «Ich habe Fieber gehabt». PASSO 3: as formas de «sein»: ich war, du warst, er war, wir waren, ihr wart, sie waren. PASSO 4: as formas de «haben»: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten. PASSO 5: note que «ich» e «er» são IGUAIS (war, hatte), como nos modais do presente.', {
        tag: 'Verbos',
        comparacao: 'o português tem o pretérito imperfeito: «eu estava cansado», «eu tinha febre». Em alemão, «war» e «hatte» fazem esse trabalho.',
        tabela: [
          { pronome: 'ich', sein: 'war', haben: 'hatte' }, { pronome: 'du', sein: 'warst', haben: 'hattest' }, { pronome: 'er / sie / es', sein: 'war', haben: 'hatte' }, { pronome: 'wir', sein: 'waren', haben: 'hatten' }, { pronome: 'ihr', sein: 'wart', haben: 'hattet' }, { pronome: 'sie / Sie', sein: 'waren', haben: 'hatten' },
        ],
        exemplos: [['Gestern war ich müde.', 'Ontem eu estava cansado.'], ['Ich hatte Fieber und war krank.', 'Eu tinha febre e estava doente.'], ['Wo warst du gestern Abend?', 'Onde você estava ontem à noite?'], ['Als Kind hatte ich einen Hund.', 'Quando criança eu tinha um cachorro.']],
        erros: [['Ich bin gestern müde gewesen.', 'Gestern war ich müde.', 'Na conversa, «sein» usa o Präteritum.'], ['Ich habe Fieber gehabt.', 'Ich hatte Fieber.', 'Na conversa, «haben» usa o Präteritum.'], ['Du warst krank? — Ich waren krank.', 'Ich war krank.', '«ich» pede «war», sem -en.']],
      }),
      producao(5, 'Diga 6 frases sobre ontem e sobre a sua infância com «war» e «hatte».'),
    ]),
    sessao('S2', 'Os modais no Präteritum', [
      revisao(5, 'Escreva as 6 formas de «war» e de «hatte» e uma frase com cada.'),
      palavras(8, [
        ['wollen', 'vólen', 'querer', 'to want'], ['müssen', 'müssen', 'ter que', 'must'], ['können', 'kö-nen', 'poder, saber', 'can'], ['dürfen', 'dürfen', 'ter permissão', 'may'],
        ['sollen', 'zólen', 'dever (ordem de outro)', 'should'], ['wenigstens', 'vê-nigs-tens', 'pelo menos', 'at least'], ['leider', 'láider', 'infelizmente', 'unfortunately'], ['trotzdem', 'trótsdem', 'mesmo assim', 'anyway'],
      ]),
      gramatica(12, 'Konnte, musste, wollte, durfte, sollte', 'PASSO 1: os modais também usam o Präteritum na conversa: «Ich konnte nicht kommen», «Ich musste arbeiten». PASSO 2: a forma é: raiz + «-te» + terminações, e o TREMA SOME: können → konnte; müssen → musste; dürfen → durfte; sollen → sollte; wollen → wollte. PASSO 3: as terminações: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten (ich e er são iguais). PASSO 4: o segundo verbo continua no INFINITIVO, no fim: «Ich wollte kommen, aber ich musste arbeiten.» PASSO 5: aprenda o contraste «muss nicht» × «darf nicht»: «Du musst nicht kommen» = você não precisa vir; «Du darfst nicht kommen» = você não pode vir (é proibido).', {
        tag: 'Verbos',
        tabela: [
          { modal: 'können', ich: 'konnte', du: 'konntest', wir: 'konnten' }, { modal: 'müssen', ich: 'musste', du: 'musstest', wir: 'mussten' }, { modal: 'wollen', ich: 'wollte', du: 'wolltest', wir: 'wollten' }, { modal: 'dürfen', ich: 'durfte', du: 'durftest', wir: 'durften' }, { modal: 'sollen', ich: 'sollte', du: 'solltest', wir: 'sollten' },
        ],
        exemplos: [['Ich wollte kommen, aber ich musste arbeiten.', 'Eu queria vir, mas precisei trabalhar.'], ['Konntest du schlafen?', 'Você conseguiu dormir?'], ['Als Kind durfte ich nicht lange fernsehen.', 'Quando criança eu não podia ver televisão por muito tempo.'], ['Du musst nicht kommen. / Du darfst nicht kommen.', 'Você não precisa vir. / Você não pode vir.']],
        erros: [['Ich könnte nicht kommen. (quero dizer: eu não consegui)', 'Ich konnte nicht kommen.', '«konnte» (Präteritum) × «könnte» (Konjunktiv): sem trema no passado.'], ['Ich musste gearbeitet.', 'Ich musste arbeiten.', 'O segundo verbo fica no infinitivo.']],
      }),
      producao(5, 'Conte 5 coisas que você queria fazer ontem mas não conseguiu, com «wollte … aber musste / konnte nicht».'),
    ]),
    sessao('S3', 'Präteritum ou Perfekt? E o Präteritum dos textos', [
      revisao(5, 'Escreva as formas de konnte, musste, wollte, durfte e sollte com «ich» e «du».'),
      gramatica(10, 'Como escolher, e as formas que você vai ler', 'PASSO 1: na CONVERSA, use o Perfekt para quase todos os verbos e o Präteritum para «sein», «haben» e os modais. PASSO 2: nos TEXTOS (notícias, histórias, livros), quase todos os verbos aparecem no Präteritum. No A2 você só precisa RECONHECER estas formas, não produzi-las. PASSO 3: as formas mais comuns são fortes e irregulares: gehen → ging; kommen → kam; sehen → sah; fahren → fuhr; essen → aß; trinken → trank; schreiben → schrieb; lesen → las; sprechen → sprach; nehmen → nahm; geben → gab; finden → fand. PASSO 4: os verbos regulares fazem raiz + «-te»: machen → machte; spielen → spielte; kaufen → kaufte.', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'gehen', preterito: 'ging', participio: 'gegangen' }, { infinitivo: 'kommen', preterito: 'kam', participio: 'gekommen' }, { infinitivo: 'sehen', preterito: 'sah', participio: 'gesehen' }, { infinitivo: 'fahren', preterito: 'fuhr', participio: 'gefahren' }, { infinitivo: 'essen', preterito: 'aß', participio: 'gegessen' }, { infinitivo: 'trinken', preterito: 'trank', participio: 'getrunken' },
          { infinitivo: 'schreiben', preterito: 'schrieb', participio: 'geschrieben' }, { infinitivo: 'lesen', preterito: 'las', participio: 'gelesen' }, { infinitivo: 'sprechen', preterito: 'sprach', participio: 'gesprochen' }, { infinitivo: 'nehmen', preterito: 'nahm', participio: 'genommen' }, { infinitivo: 'geben', preterito: 'gab', participio: 'gegeben' }, { infinitivo: 'finden', preterito: 'fand', participio: 'gefunden' },
        ],
      }),
      dialogo(10, 'Warum warst du nicht da? / Por que você não estava lá?', 'Dois amigos conversam sobre ontem à noite.', [
        ['Lea', 'Paul, wo warst du gestern Abend?', 'Paul, onde você estava ontem à noite?'], ['Paul', 'Ich war krank. Ich hatte Fieber und musste im Bett bleiben.', 'Eu estava doente. Tive febre e precisei ficar na cama.'], ['Lea', 'Oh, das tut mir leid! Konntest du wenigstens schlafen?', 'Ah, sinto muito! Pelo menos você conseguiu dormir?'],
        ['Paul', 'Nein, ich konnte nicht schlafen. Ich wollte aufstehen, aber ich durfte nicht.', 'Não, não consegui dormir. Eu queria me levantar, mas não podia.'], ['Lea', 'Wer hat dir geholfen?', 'Quem ajudou você?'], ['Paul', 'Meine Mutter. Sie war den ganzen Tag bei mir.', 'Minha mãe. Ela ficou comigo o dia todo.'],
        ['Lea', 'Wie geht es dir heute?', 'Como você está hoje?'], ['Paul', 'Besser, danke. Heute habe ich frei.', 'Melhor, obrigado. Hoje estou de folga.'], ['Lea', 'Gut! Dann ruhe dich aus.', 'Ótimo! Então descanse.'], ['Paul', 'Danke, das mache ich.', 'Obrigado, é o que vou fazer.'],
      ]),
      producao(5, 'Conte uma noite em que você não pôde sair, com «war», «hatte», «musste», «wollte» e «konnte nicht».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases sobre a sua infância e a sua semana passada, com war, hatte e os modais no Präteritum.'),
      exercicios(20, [
        lacuna('Gestern ___ ich müde. (sein)', ['war', 'bin', 'wurde'], 'war', 'Präteritum de «sein».'), lacuna('Du ___ krank. (sein)', ['warst', 'war', 'bist'], 'warst', 'du → warst.'), lacuna('Wir ___ Urlaub. (haben)', ['hatten', 'hatte', 'haben'], 'hatten', 'wir → hatten.'),
        lacuna('Ich ___ Fieber. (haben)', ['hatte', 'hattest', 'hatten'], 'hatte', 'ich → hatte.'), lacuna('Ich ___ nicht kommen. (können)', ['konnte', 'könnte', 'kann'], 'konnte', 'Sem trema.'), lacuna('Er ___ arbeiten. (müssen)', ['musste', 'müsste', 'muss'], 'musste', 'Sem trema.'),
        lacuna('Wir ___ nicht schlafen. (können)', ['konnten', 'konnte', 'könnten'], 'konnten', 'wir → -ten.'), lacuna('Als Kind ___ ich nicht fernsehen. (dürfen)', ['durfte', 'dürfte', 'darf'], 'durfte', 'Sem trema.'), mc('Na conversa, «ter estado cansado» se diz:', ['Ich war müde.', 'Ich bin müde gewesen.', 'Ich habe müde gewesen.'], 'Ich war müde.', '«sein» usa o Präteritum.'),
        mc('Präteritum de «gehen»:', ['ging', 'geht', 'gegangen'], 'ging', 'Forma forte.'), mc('Präteritum de «sehen»:', ['sah', 'sieht', 'gesehen'], 'sah', 'Forma forte.'), mc('Präteritum de «machen»:', ['machte', 'gemacht', 'macht'], 'machte', 'Regular: raiz + -te.'),
        ordem('Ordene: «Eu queria vir, mas precisei trabalhar.»', ['Ich', 'wollte', 'kommen', 'aber', 'ich', 'musste', 'arbeiten'], 'Ich wollte kommen, aber ich musste arbeiten.', 'Modal no Präteritum + infinitivo no fim.'), ouvir('Ich hatte Fieber und musste im Bett bleiben', ['Ich hatte Fieber und musste im Bett bleiben', 'Ich habe Fieber gehabt', 'Ich muss im Bett bleiben'], 'Ich hatte Fieber und musste im Bett bleiben', 'Präteritum.'),
        ditado('Wo warst du gestern Abend', 'war + gestern Abend.'), livre('Escreva 5 frases: duas com war, duas com hatte e uma com um modal no Präteritum.', 'Gestern war ich müde. Ich hatte Fieber. Wir waren im Urlaub. Wir hatten viel Zeit. Ich konnte nicht schlafen.'),
      ]),
      producao(5, 'Grave-se contando como foi a sua semana passada, com war, hatte e os modais no Präteritum.'),
    ]),
  ],
});
