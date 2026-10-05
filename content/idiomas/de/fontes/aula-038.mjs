import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 38, titulo: 'Verbos reflexivos', nivel: 'a2',
  objetivo: 'Usar os verbos reflexivos com os pronomes mich, dich, sich, uns, euch, sich, incluindo os separáveis e os com preposição (sich freuen auf), e o reflexivo no dativo (Ich wasche mir die Hände).',
  nota: 'Você usa os verbos reflexivos. Próxima aula: o Konjunktiv II básico (würde, hätte, wäre, könnte).',
  sessoes: [
    sessao('S1', 'O pronome reflexivo', [
      revisao(5, 'Escreva 8 frases com «weil», «dass», «wenn» e «ob».'),
      palavras(8, [
        ['sich waschen', 'zich váxen', 'lavar-se', 'to wash oneself'], ['sich anziehen', 'zich án-tsíen', 'vestir-se', 'to get dressed'], ['sich duschen', 'zich dúxen', 'tomar banho', 'to shower'], ['sich setzen', 'zich zétsen', 'sentar-se', 'to sit down'],
        ['sich treffen', 'zich tréfen', 'encontrar-se', 'to meet'], ['sich freuen', 'zich fróien', 'alegrar-se', 'to be glad'], ['sich beeilen', 'zich beáilen', 'apressar-se', 'to hurry'], ['sich ausruhen', 'zich áus-ruen', 'descansar', 'to rest'],
      ]),
      gramatica(14, 'O verbo reflexivo, passo a passo', 'PASSO 1: um verbo é REFLEXIVO quando a ação volta para quem a faz: «Ich wasche mich» (eu me lavo). PASSO 2: ele usa um PRONOME REFLEXIVO, que repete o sujeito: ich → mich, du → dich, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich. PASSO 3: na frase, o pronome vem logo depois do verbo conjugado: «Ich freue mich.» Se a frase abre com outro termo: «Heute freue ich mich.» PASSO 4: com separável, o prefixo vai para o fim: «Ich ziehe mich an.» PASSO 5: com modal, o reflexivo fica antes do infinitivo: «Ich muss mich beeilen.» PASSO 6: nem todo reflexivo alemão é reflexivo em português: «sich freuen» (alegrar-se), «sich treffen» (encontrar-se), «sich setzen» (sentar-se), «sich beeilen» (apressar-se). Aprenda cada verbo com o seu «sich».', {
        tag: 'Verbos',
        comparacao: 'o português usa «me, te, se, nos» («eu me lavo»). O alemão usa mich, dich, sich, uns, euch, sich, e a lista de verbos reflexivos é diferente em cada língua.',
        tabela: [
          { pronome: 'ich', reflexivo: 'mich', exemplo: 'Ich wasche mich.' }, { pronome: 'du', reflexivo: 'dich', exemplo: 'Du freust dich.' }, { pronome: 'er / sie / es', reflexivo: 'sich', exemplo: 'Er setzt sich.' }, { pronome: 'wir', reflexivo: 'uns', exemplo: 'Wir treffen uns.' },
          { pronome: 'ihr', reflexivo: 'euch', exemplo: 'Ihr beeilt euch.' }, { pronome: 'sie / Sie', reflexivo: 'sich', exemplo: 'Sie ruhen sich aus.' },
        ],
        erros: [['Ich wasche.', 'Ich wasche mich.', 'O verbo reflexivo precisa do pronome.'], ['Ich freue mir.', 'Ich freue mich.', 'No acusativo: «mich».'], ['Ich ziehe an mich.', 'Ich ziehe mich an.', 'O pronome vem depois do verbo; o prefixo vai para o fim.']],
      }),
      producao(3, 'Diga 6 frases com verbos reflexivos: «Ich wasche mich. Wir treffen uns. Ich freue mich …»'),
    ]),
    sessao('S2', 'Reflexivos com preposição e no dativo', [
      revisao(5, 'Escreva os 6 pronomes reflexivos e uma frase com cada um.'),
      palavras(8, [
        ['sich freuen auf', 'zich fróien auf', 'estar ansioso por', 'to look forward to'], ['sich freuen über', 'zich fróien über', 'alegrar-se com', 'to be glad about'], ['sich interessieren für', 'zich interesíren für', 'interessar-se por', 'to be interested in'], ['sich erinnern an', 'zich erínern an', 'lembrar-se de', 'to remember'],
        ['sich ärgern über', 'zich érguern über', 'irritar-se com', 'to be annoyed about'], ['sich entschuldigen', 'zich entxúldiguen', 'pedir desculpas', 'to apologise'], ['die Hände', 'di hénde', 'as mãos', 'hands'], ['die Zähne', 'di tsé-ne', 'os dentes', 'teeth'],
      ]),
      gramatica(12, 'Reflexivos com preposição e o reflexivo no dativo', 'PASSO 1: muitos reflexivos pedem uma PREPOSIÇÃO FIXA, que você aprende junto com o verbo: «sich freuen auf» (ficar ansioso pelo que vem) + acusativo: «Ich freue mich auf den Urlaub»; «sich freuen über» (alegrar-se com o que há) + acusativo: «Ich freue mich über das Geschenk»; «sich interessieren für» + acusativo; «sich erinnern an» + acusativo; «sich ärgern über» + acusativo. PASSO 2: «sich entschuldigen» leva «bei» + dativo para a pessoa e «für» + acusativo para o motivo. PASSO 3: o REFLEXIVO NO DATIVO: se a frase JÁ TEM um objeto direto (acusativo), o pronome reflexivo vai para o DATIVO: «Ich wasche mir die Hände» (eu lavo as minhas mãos), «Ich putze mir die Zähne.» PASSO 4: as formas do dativo reflexivo: mir, dir, sich, uns, euch, sich (só ich e du mudam).', {
        tag: 'Verbos',
        tabela: [
          { verbo: 'sich freuen auf (+ Akk)', frase: 'Ich freue mich auf den Urlaub.' }, { verbo: 'sich freuen über (+ Akk)', frase: 'Ich freue mich über das Geschenk.' }, { verbo: 'sich interessieren für (+ Akk)', frase: 'Ich interessiere mich für Musik.' }, { verbo: 'sich erinnern an (+ Akk)', frase: 'Ich erinnere mich an den Film.' },
          { verbo: 'sich ärgern über (+ Akk)', frase: 'Ich ärgere mich über den Lärm.' }, { verbo: 'sich entschuldigen', frase: 'Ich entschuldige mich bei dir.' }, { verbo: 'dativo: mir, dir', frase: 'Ich wasche mir die Hände. Du putzt dir die Zähne.' },
        ],
        erros: [['Ich freue mich über den Urlaub. (que vem)', 'Ich freue mich auf den Urlaub.', '«auf» = ansioso pelo futuro; «über» = alegre pelo presente.'], ['Ich wasche mich die Hände.', 'Ich wasche mir die Hände.', 'Com objeto direto, o reflexivo vai para o dativo.'], ['Ich interessiere mich in Musik.', 'Ich interessiere mich für Musik.', '«interessieren» pede «für».']],
      }),
      producao(5, 'Diga 6 frases: do que você gosta («Ich interessiere mich für …»), do que está ansioso («Ich freue mich auf …») e como se arruma («Ich putze mir die Zähne»).'),
    ]),
    sessao('S3', 'A manhã e os reflexivos', [
      revisao(5, 'Escreva uma lista de 8 verbos reflexivos com a preposição, quando houver.'),
      gramatica(10, 'Os reflexivos na rotina e na conversa', 'PASSO 1: na rotina, o alemão usa muitos reflexivos: sich waschen, sich duschen, sich anziehen, sich beeilen, sich ausruhen. PASSO 2: quando a ação é RECÍPROCA, os pronomes «uns», «euch» e «sich» (plural) significam «um ao outro»: «Wir treffen uns», «Sie sehen sich jeden Tag». PASSO 3: perguntas: «Freust du dich auf das Wochenende?», «Wann treffen wir uns?» PASSO 4: o pronome reflexivo tem lugar fixo: depois do verbo (ou do sujeito, se o sujeito vier depois): «Freut er sich?»', {
        tag: 'Verbos',
        tabela: [
          { funcao: 'rotina', frase: 'Ich dusche mich und ziehe mich an.' }, { funcao: 'recíproco', frase: 'Wir treffen uns am Samstag.' }, { funcao: 'pergunta', frase: 'Freust du dich auf das Wochenende?' }, { funcao: 'modal', frase: 'Ich muss mich beeilen.' },
        ],
      }),
      dialogo(10, 'Der Morgen / A manhã', 'Dois amigos falam da rotina matinal.', [
        ['Mia', 'Wie sieht dein Morgen aus, Tom?', 'Como é a sua manhã, Tom?'], ['Tom', 'Ich stehe um sechs Uhr auf und dusche mich.', 'Eu me levanto às seis e tomo banho.'], ['Mia', 'Putzt du dir auch die Zähne?', 'Você também escova os dentes?'],
        ['Tom', 'Natürlich! Dann ziehe ich mich an und frühstücke.', 'Claro! Depois eu me visto e tomo café da manhã.'], ['Mia', 'Und wenn du spät bist, musst du dich beeilen?', 'E quando você está atrasado, precisa se apressar?'], ['Tom', 'Ja, oft. Ich freue mich dann auf das Wochenende.', 'Sim, muitas vezes. Aí eu fico ansioso pelo fim de semana.'],
        ['Mia', 'Wir können uns am Samstag treffen.', 'Podemos nos encontrar no sábado.'], ['Tom', 'Gern! Ich freue mich schon.', 'Com prazer! Já estou animado.'],
      ]),
      producao(5, 'Descreva a sua manhã em 8 frases, com pelo menos 5 verbos reflexivos.'),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva o mesmo texto da sua manhã, agora no Perfekt (ontem de manhã).'),
      texto(5, 'Mein Morgen / A minha manhã', 'Ich stehe um sechs Uhr auf. Ich dusche mich, putze mir die Zähne und ziehe mich an. Dann frühstücke ich. Wenn ich spät bin, muss ich mich beeilen. Am Wochenende kann ich mich ausruhen. Ich freue mich immer auf den Samstag.',
        'Eu me levanto às seis. Tomo banho, escovo os dentes e me visto. Depois tomo café da manhã. Quando estou atrasado, preciso me apressar. No fim de semana posso descansar. Sempre fico ansioso pelo sábado.',
        [['Wann steht der Autor auf?', 'Um sechs Uhr'], ['Was muss er machen, wenn er spät ist?', 'Er muss sich beeilen'], ['Worauf freut er sich?', 'Auf den Samstag']]),
      exercicios(15, [
        lacuna('Ich wasche ___. (me)', ['mich', 'mir', 'sich'], 'mich', '«ich» → mich.'), lacuna('Du freust ___. (te)', ['dich', 'dir', 'sich'], 'dich', '«du» → dich.'), lacuna('Er setzt ___. (se)', ['sich', 'ihn', 'ihm'], 'sich', '«er» → sich.'),
        lacuna('Wir treffen ___. (nos)', ['uns', 'wir', 'sich'], 'uns', '«wir» → uns.'), lacuna('Ihr beeilt ___. (se)', ['euch', 'euer', 'sich'], 'euch', '«ihr» → euch.'), lacuna('Ich freue mich ___ den Urlaub. (que vem)', ['auf', 'über', 'für'], 'auf', 'Ansioso pelo futuro: «auf».'),
        lacuna('Ich interessiere mich ___ Musik.', ['für', 'auf', 'an'], 'für', '«interessieren für».'), lacuna('Ich wasche ___ die Hände. (as minhas)', ['mir', 'mich', 'sich'], 'mir', 'Objeto direto na frase: dativo.'), lacuna('Du putzt ___ die Zähne.', ['dir', 'dich', 'sich'], 'dir', 'Dativo reflexivo de «du».'),
        mc('Um verbo reflexivo é aquele em que:', ['a ação volta para quem a faz', 'o verbo é irregular', 'o verbo é separável'], 'a ação volta para quem a faz', 'Ich wasche mich.'), mc('«sich» é o pronome de:', ['er, sie, es, sie (plural), Sie', 'ich', 'wir'], 'er, sie, es, sie (plural), Sie', 'Terceira pessoa.'),
        ordem('Ordene: «Eu preciso me apressar.»', ['Ich', 'muss', 'mich', 'beeilen'], 'Ich muss mich beeilen.', 'Reflexivo antes do infinitivo.'), ouvir('Ich ziehe mich an', ['Ich ziehe mich an', 'Ich ziehe an mich', 'Ich ziehe mir an'], 'Ich ziehe mich an', 'Prefixo no fim.'), ditado('Ich putze mir die Zähne', 'Dativo reflexivo.'),
        livre('Escreva 5 frases: um reflexivo simples, um separável, um com preposição, um com dativo e um recíproco.', 'Ich wasche mich. Ich ziehe mich an. Ich freue mich auf den Urlaub. Ich putze mir die Zähne. Wir treffen uns am Samstag.'),
      ]),
      producao(5, 'Grave-se descrevendo a sua rotina e o que lhe interessa, com verbos reflexivos.'),
    ]),
  ],
});
