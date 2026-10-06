import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 56, titulo: 'O infinitivo com zu', nivel: 'b1',
  objetivo: 'Usar o infinitivo com «zu» depois de verbos, adjetivos e expressões, com a posição do «zu» nos verbos separáveis, e distinguir os verbos que não levam «zu».',
  nota: 'Você usa o infinitivo com zu. Próxima aula: um … zu, damit, ohne … zu, statt … zu.',
  sessoes: [
    sessao('S1', 'Zu + infinitivo', [
      revisao(5, 'Escreva 6 frases com Konjunktiv II no passado, incluindo duas com duplo infinitivo.'),
      palavras(8, [
        ['anfangen', 'án-fan-guen', 'começar', 'to start'], ['aufhören', 'áuf-hörren', 'parar, acabar', 'to stop'], ['versuchen', 'fer-zúrren', 'tentar', 'to try'], ['vergessen', 'fergésen', 'esquecer', 'to forget'],
        ['vorhaben', 'fôr-haben', 'pretender, planejar', 'to intend'], ['hoffen', 'hófen', 'esperar (ter esperança)', 'to hope'], ['planen', 'plánen', 'planejar', 'to plan'], ['vorschlagen', 'fôr-xláguen', 'propor, sugerir', 'to suggest'],
      ]),
      gramatica(14, 'O infinitivo com zu, passo a passo', 'PASSO 1: depois de MUITOS verbos, adjetivos e expressões, o segundo verbo vai no INFINITIVO com «ZU» antes dele: «Ich versuche, Deutsch zu lernen» (eu tento aprender alemão). PASSO 2: o «zu» fica ANTES do infinitivo, no fim da frase; com a vírgula, quando o infinitivo tem complementos: «Ich habe vergessen, dich anzurufen.» PASSO 3: com verbos SEPARÁVEIS, o «zu» entra ENTRE o prefixo e o verbo, tudo junto: anrufen → «anzurufen», mitbringen → «mitzubringen», aufstehen → «aufzustehen». PASSO 4: verbos que levam «zu»: anfangen, aufhören, beginnen, versuchen, vergessen, vorhaben, hoffen, planen, vorschlagen, empfehlen. PASSO 5: expressões com «zu»: «Ich habe Lust / Zeit / keine Lust, … zu …», «Es ist wichtig / schön / schwer, … zu …». PASSO 6: compare com os modais: «Ich kann schwimmen» (sem zu) × «Ich versuche zu schwimmen» (com zu).', {
        tag: 'Verbos',
        comparacao: 'o português usa «a/de/para» + infinitivo («comecei a estudar», «esqueci de ligar»). O alemão usa sempre «zu» + infinitivo, no fim da frase.',
        tabela: [
          { construcao: 'verbo + zu', frase: 'Ich versuche, Deutsch zu lernen.' }, { construcao: 'separável: zu no meio', frase: 'Ich habe vergessen, dich anzurufen.' }, { construcao: 'Lust / Zeit haben', frase: 'Ich habe keine Lust, heute zu arbeiten.' }, { construcao: 'es ist + adjetivo', frase: 'Es ist wichtig, pünktlich zu sein.' }, { construcao: 'anfangen / aufhören', frase: 'Er hat angefangen, Sport zu machen.' },
        ],
        erros: [['Ich habe vergessen, dich zu anrufen.', 'Ich habe vergessen, dich anzurufen.', 'Separável: «zu» entre o prefixo e o verbo.'], ['Ich versuche, Deutsch lernen.', 'Ich versuche, Deutsch zu lernen.', 'Falta o «zu».'], ['Ich kann zu schwimmen.', 'Ich kann schwimmen.', 'Modais não levam «zu».']],
      }),
      producao(3, 'Diga 6 frases com «zu»: «Ich versuche, … zu … Ich habe vergessen, … Ich habe keine Lust, …»'),
    ]),
    sessao('S2', 'Quando não se usa zu', [
      revisao(5, 'Escreva 6 frases com infinitivo com zu, duas com separáveis.'),
      palavras(8, [
        ['bleiben', 'bláiben', 'ficar', 'to stay'], ['gehen', 'géen', 'ir', 'to go'], ['lassen', 'lássen', 'deixar, mandar fazer', 'to let'], ['sehen', 'zéen', 'ver', 'to see'],
        ['hören', 'hörren', 'ouvir', 'to hear'], ['helfen', 'hélfen', 'ajudar', 'to help'], ['lernen', 'lérnen', 'aprender', 'to learn'], ['schwimmen', 'xvímen', 'nadar', 'to swim'],
      ]),
      gramatica(12, 'Infinitivo sem zu, passo a passo', 'PASSO 1: os MODAIS não levam «zu»: «Ich kann schwimmen», «Ich muss arbeiten». PASSO 2: «werden» (Futur I) também não: «Ich werde kommen.» PASSO 3: verbos de movimento e de permanência, sem «zu»: «Ich gehe schwimmen», «Ich bleibe sitzen», «Wir fahren einkaufen». PASSO 4: «lassen» (mandar fazer, deixar), «sehen» e «hören» (perceber uma ação): «Ich lasse das Auto reparieren», «Ich sehe ihn kommen», «Ich höre sie singen». PASSO 5: «helfen» e «lernen» costumam vir sem «zu» com um infinitivo curto: «Ich helfe dir kochen», «Ich lerne schwimmen». PASSO 6: se houver DÚVIDA, procure o verbo na lista: se for modal, werden, lassen, gehen, bleiben, sehen, hören → sem «zu»; se for anfangen, versuchen, vergessen, hoffen → com «zu».', {
        tag: 'Verbos',
        tabela: [
          { verbo: 'modais', frase: 'Ich kann schwimmen. Ich muss arbeiten.' }, { verbo: 'werden', frase: 'Ich werde kommen.' }, { verbo: 'gehen / bleiben / fahren', frase: 'Ich gehe schwimmen. Wir fahren einkaufen.' }, { verbo: 'lassen', frase: 'Ich lasse das Auto reparieren.' }, { verbo: 'sehen / hören', frase: 'Ich sehe ihn kommen. Ich höre sie singen.' },
        ],
        erros: [['Ich gehe zu schwimmen.', 'Ich gehe schwimmen.', '«gehen» + infinitivo, sem «zu».'], ['Ich lasse das Auto zu reparieren.', 'Ich lasse das Auto reparieren.', '«lassen» não leva «zu».']],
      }),
      producao(5, 'Diga 6 frases sem «zu»: «Ich gehe schwimmen. Ich lasse … Ich sehe … Ich höre …»'),
    ]),
    sessao('S3', 'Planos e hábitos', [
      revisao(5, 'Escreva 6 frases: três com «zu» e três sem.'),
      gramatica(10, 'Infinitivo com zu em conversas de planos e hábitos', 'PASSO 1: para planos: «Ich habe vor, im Sommer nach Berlin zu fahren.» PASSO 2: para propor: «Hast du Lust, am Wochenende wandern zu gehen?» PASSO 3: para hábitos novos: «Ich habe begonnen, jeden Morgen zu joggen.» PASSO 4: para lembrar e esquecer: «Vergiss nicht, deine Schuhe mitzubringen!» PASSO 5: para ser claro e conciso: use «zu + infinitivo» em vez de «dass»: «Ich hoffe, dich bald zu sehen» (em vez de «Ich hoffe, dass ich dich bald sehe») quando o sujeito é o mesmo.', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'plano', frase: 'Ich habe vor, im Sommer nach Berlin zu fahren.' }, { funcao: 'proposta', frase: 'Hast du Lust, am Wochenende wandern zu gehen?' }, { funcao: 'hábito novo', frase: 'Ich habe begonnen, jeden Morgen zu joggen.' }, { funcao: 'lembrete', frase: 'Vergiss nicht, deine Schuhe mitzubringen!' }, { funcao: 'mesmo sujeito', frase: 'Ich hoffe, dich bald zu sehen.' },
        ],
      }),
      dialogo(10, 'Pläne und Vorsätze / Planos e propósitos', 'Dois amigos falam de planos e de bons propósitos.', [
        ['Mia', 'Hast du Lust, am Wochenende wandern zu gehen?', 'Você tem vontade de fazer uma trilha no fim de semana?'], ['Jonas', 'Ich habe vor, am Samstag auszuschlafen.', 'Pretendo dormir até tarde no sábado.'], ['Mia', 'Es ist wichtig, auch mal Pause zu machen.', 'É importante também fazer uma pausa.'],
        ['Jonas', 'Stimmt. Ich habe versucht, weniger zu arbeiten, aber es ist schwer.', 'É verdade. Tentei trabalhar menos, mas é difícil.'], ['Mia', 'Hast du angefangen, Sport zu machen?', 'Você começou a fazer esporte?'], ['Jonas', 'Ja, ich habe begonnen, jeden Morgen zu joggen.', 'Sim, comecei a correr toda manhã.'],
        ['Mia', 'Dann vergiss nicht, deine Schuhe mitzubringen!', 'Então não se esqueça de trazer os seus tênis!'], ['Jonas', 'Keine Sorge, ich habe nicht vergessen, sie einzupacken.', 'Sem preocupação, não me esqueci de colocá-los na mala.'],
      ]),
      producao(5, 'Conte os seus planos e bons propósitos em voz alta, com «zu» + infinitivo.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases com infinitivos com zu sobre os seus planos.'),
      exercicios(20, [
        lacuna('Ich versuche, Deutsch ___ lernen.', ['zu', 'um', 'für'], 'zu', 'zu + infinitivo.'), lacuna('Ich habe vergessen, dich ___. (anrufen)', ['anzurufen', 'zu anrufen', 'anrufen zu'], 'anzurufen', 'Separável: zu no meio.'), lacuna('Ich habe keine Lust, heute ___ arbeiten.', ['zu', 'um', 'zum'], 'zu', 'Lust haben + zu.'),
        lacuna('Es ist wichtig, pünktlich ___ sein.', ['zu', 'um', 'von'], 'zu', 'es ist + adj. + zu.'), lacuna('Ich gehe ___. (schwimmen)', ['schwimmen', 'zu schwimmen', 'schwimmend'], 'schwimmen', '«gehen» sem zu.'), lacuna('Ich lasse das Auto ___. (reparieren)', ['reparieren', 'zu reparieren', 'repariert'], 'reparieren', '«lassen» sem zu.'),
        mc('Os modais levam «zu»?', ['não', 'sim', 'só no passado'], 'não', 'Ich kann schwimmen.'), mc('Com verbo separável, o «zu» vai:', ['entre o prefixo e o verbo', 'antes do prefixo', 'depois do verbo'], 'entre o prefixo e o verbo', 'anzurufen.'), mc('A vírgula antes do infinitivo com zu é:', ['comum quando há complementos', 'proibida', 'só em perguntas'], 'comum quando há complementos', 'Ich versuche, Deutsch zu lernen.'),
        ordem('Ordene: «Esqueci de ligar para você.»', ['Ich', 'habe', 'vergessen', 'dich', 'anzurufen'], 'Ich habe vergessen, dich anzurufen.', 'zu entre prefixo e verbo.'), ordem('Ordene: «É importante ser pontual.»', ['Es', 'ist', 'wichtig', 'pünktlich', 'zu', 'sein'], 'Es ist wichtig, pünktlich zu sein.', 'zu antes do infinitivo.'), ouvir('Hast du Lust, am Wochenende wandern zu gehen', ['Hast du Lust, am Wochenende wandern zu gehen', 'Du gehst am Wochenende wandern', 'Ich habe am Wochenende gewandert'], 'Hast du Lust, am Wochenende wandern zu gehen', 'Lust haben + zu.'),
        ditado('Vergiss nicht, deine Schuhe mitzubringen', 'Separável com zu.'), livre('Escreva 5 frases com infinitivo com zu: um plano, uma proposta, um hábito, um lembrete e uma com verbo separável.', 'Ich habe vor, nach Berlin zu fahren. Hast du Lust, wandern zu gehen? Ich habe begonnen, zu joggen. Vergiss nicht, anzurufen! Ich habe vergessen, dich abzuholen.'),
      ]),
      producao(5, 'Grave-se falando dos seus planos, propósitos e hábitos com «zu» + infinitivo.'),
    ]),
  ],
});
