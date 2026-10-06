import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 60, titulo: 'Verbos com preposição 1', nivel: 'b1',
  objetivo: 'Aprender os verbos mais comuns que pedem uma preposição fixa (auf, an, für, über, um, von, mit, bei, zu) e o caso que ela rege, e usá-los em frases completas.',
  nota: 'Você usa os verbos com preposição mais comuns. Próxima aula: os advérbios pronominais (darauf, worauf…).',
  sessoes: [
    sessao('S1', 'Verbos com «auf»', [
      revisao(5, 'Escreva 6 frases com pares de conectores.'),
      palavras(8, [
        ['warten auf', 'vár-ten auf', 'esperar por', 'to wait for'], ['sich freuen auf', 'zich fróien auf', 'estar ansioso por', 'to look forward to'], ['hoffen auf', 'hó-fen auf', 'ter esperança em', 'to hope for'], ['sich vorbereiten auf', 'zich fôr-be-ráiten auf', 'preparar-se para', 'to prepare for'],
        ['achten auf', 'árrten auf', 'prestar atenção em', 'to pay attention to'], ['antworten auf', 'ánt-vor-ten auf', 'responder a', 'to answer'], ['reagieren auf', 'reaguíren auf', 'reagir a', 'to react to'], ['sich verlassen auf', 'zich fer-lássen auf', 'confiar em', 'to rely on'],
      ]),
      gramatica(14, 'Verbos com preposição, passo a passo', 'PASSO 1: muitos verbos alemães pedem uma PREPOSIÇÃO FIXA, que faz parte do verbo e não pode ser trocada: «warten AUF», «denken AN», «sich interessieren FÜR». PASSO 2: a preposição REGE UM CASO (acusativo ou dativo), e o substantivo depois dela leva esse caso: «Ich warte auf DEN Bus» (acusativo). PASSO 3: aprenda SEMPRE o verbo com a preposição e o caso: «warten auf + Akk». PASSO 4: muitas vezes a preposição alemã é diferente da portuguesa: «esperar POR» = «warten AUF»; «pensar EM» = «denken AN». PASSO 5: nesta sessão, os verbos com «AUF»: todos pedem ACUSATIVO nos casos mais comuns: «Ich freue mich auf den Urlaub», «Ich hoffe auf gutes Wetter.» PASSO 6: com uma pessoa, use o pronome ou o substantivo no acusativo: «Ich warte auf meinen Bruder» / «Ich warte auf ihn.»', {
        tag: 'Verbos',
        comparacao: 'em português a preposição muda por verbo («esperar por», «pensar em», «gostar de»). O alemão faz o mesmo, mas as preposições não coincidem com as portuguesas. Por isso aprenda o verbo e a preposição juntos.',
        tabela: [
          { verbo: 'warten auf + Akk', frase: 'Ich warte auf den Bus.' }, { verbo: 'sich freuen auf + Akk', frase: 'Ich freue mich auf den Urlaub.' }, { verbo: 'hoffen auf + Akk', frase: 'Ich hoffe auf gutes Wetter.' }, { verbo: 'sich vorbereiten auf + Akk', frase: 'Ich bereite mich auf die Prüfung vor.' },
          { verbo: 'achten auf + Akk', frase: 'Achte auf den Verkehr!' }, { verbo: 'antworten auf + Akk', frase: 'Er antwortet auf die E-Mail.' }, { verbo: 'sich verlassen auf + Akk', frase: 'Ich verlasse mich auf dich.' },
        ],
        erros: [['Ich warte für den Bus.', 'Ich warte auf den Bus.', 'Preposição fixa: «warten auf».'], ['Ich warte auf dem Bus.', 'Ich warte auf den Bus.', '«warten auf» pede acusativo.'], ['Ich freue mich über den Urlaub. (que vem)', 'Ich freue mich auf den Urlaub.', '«sich freuen auf» = ansioso pelo futuro.']],
      }),
      producao(3, 'Diga 6 frases com verbos de «auf»: «Ich warte auf … Ich freue mich auf … Ich hoffe auf …»'),
    ]),
    sessao('S2', 'Verbos com «an», «für» e «über»', [
      revisao(5, 'Escreva os 7 verbos de «auf» com o caso e uma frase com cada.'),
      palavras(8, [
        ['denken an', 'dén-ken an', 'pensar em', 'to think of'], ['glauben an', 'gláu-ben an', 'acreditar em', 'to believe in'], ['teilnehmen an', 'táil-né-men an', 'participar de', 'to take part in'], ['sich erinnern an', 'zich er-í-nern an', 'lembrar-se de', 'to remember'],
        ['sich interessieren für', 'zich in-te-re-síren für', 'interessar-se por', 'to be interested in'], ['sich entscheiden für', 'zich ent-xái-den für', 'decidir-se por', 'to decide on'], ['sprechen über', 'xpré-çen ü-ber', 'falar sobre', 'to talk about'], ['sich ärgern über', 'zich ér-guern ü-ber', 'irritar-se com', 'to be annoyed about'],
      ]),
      gramatica(12, 'Verbos com an, für e über', 'PASSO 1: com «AN»: «denken an + Akk» («Ich denke an dich»), «glauben an + Akk» («Ich glaube an dich»), «sich erinnern an + Akk», e «teilnehmen an + DATIVO» («Ich nehme an dem Kurs teil»: «am Kurs»). PASSO 2: com «FÜR»: sempre acusativo: «sich interessieren für + Akk» («Ich interessiere mich für Musik»), «sich entscheiden für + Akk», «sich bedanken für + Akk». PASSO 3: com «ÜBER»: acusativo: «sprechen über + Akk», «sich ärgern über + Akk», «sich freuen über + Akk» (alegrar-se com o que há), «diskutieren über + Akk». PASSO 4: lembre da diferença «freuen auf» (futuro) × «freuen über» (presente). PASSO 5: um truque: «über» = sobre o assunto, «für» = a favor/interesse, «an» = conexão mental.', {
        tag: 'Verbos',
        tabela: [
          { verbo: 'denken an + Akk', frase: 'Ich denke an dich.' }, { verbo: 'teilnehmen an + Dat', frase: 'Ich nehme am Kurs teil.' }, { verbo: 'sich interessieren für + Akk', frase: 'Ich interessiere mich für Musik.' }, { verbo: 'sich entscheiden für + Akk', frase: 'Ich habe mich für den Kurs entschieden.' },
          { verbo: 'sprechen über + Akk', frase: 'Wir sprechen über das Wetter.' }, { verbo: 'sich ärgern über + Akk', frase: 'Ich ärgere mich über den Lärm.' }, { verbo: 'sich freuen über + Akk', frase: 'Ich freue mich über das Geschenk.' },
        ],
        erros: [['Ich denke von dir.', 'Ich denke an dich.', 'Preposição fixa: «denken an».'], ['Ich interessiere mich in Musik.', 'Ich interessiere mich für Musik.', '«interessieren für».'], ['Wir sprechen von das Wetter.', 'Wir sprechen über das Wetter.', '«sprechen über + Akk».']],
      }),
      producao(5, 'Diga 6 frases com verbos de «an», «für» e «über»: «Ich denke an … Ich interessiere mich für … Wir sprechen über …»'),
    ]),
    sessao('S3', 'Verbos com «um», «von», «mit», «bei» e «zu»', [
      revisao(5, 'Escreva 8 verbos com preposição e o caso que cada um pede.'),
      gramatica(10, 'Mais verbos com preposição', 'PASSO 1: com «UM» + acusativo: «sich kümmern um» (cuidar de), «sich bewerben um» (candidatar-se a), «bitten um» (pedir), «es geht um» (trata-se de). PASSO 2: com «VON» + dativo: «träumen von», «erzählen von», «abhängen von» (depender de), «halten von» (achar de). PASSO 3: com «MIT» + dativo: «sich beschäftigen mit» (ocupar-se com), «anfangen mit», «aufhören mit», «rechnen mit» (contar com), «zufrieden sein mit». PASSO 4: com «BEI» + dativo: «sich bedanken bei» (agradecer a), «sich entschuldigen bei». PASSO 5: com «ZU» + dativo: «gehören zu» (fazer parte de), «einladen zu» (convidar para), «gratulieren zu» (parabenizar por).', {
        tag: 'Verbos',
        tabela: [
          { verbo: 'sich kümmern um + Akk', frase: 'Ich kümmere mich um die Kinder.' }, { verbo: 'bitten um + Akk', frase: 'Ich bitte um Hilfe.' }, { verbo: 'träumen von + Dat', frase: 'Ich träume von einem Haus am Meer.' }, { verbo: 'abhängen von + Dat', frase: 'Das hängt vom Wetter ab.' },
          { verbo: 'sich beschäftigen mit + Dat', frase: 'Ich beschäftige mich mit Musik.' }, { verbo: 'rechnen mit + Dat', frase: 'Ich rechne mit Regen.' }, { verbo: 'sich bedanken bei + Dat', frase: 'Ich bedanke mich bei dir.' }, { verbo: 'einladen zu + Dat', frase: 'Er lädt mich zum Essen ein.' },
        ],
      }),
      dialogo(10, 'Ein Gespräch über Pläne / Uma conversa sobre planos', 'Dois amigos falam de planos e preocupações.', [
        ['Mia', 'Worauf freust du dich am meisten?', 'Pelo que você está mais ansioso?'], ['Jonas', 'Ich freue mich auf den Urlaub. Ich träume von einem Haus am Meer.', 'Estou ansioso pelas férias. Sonho com uma casa na praia.'], ['Mia', 'Hast du dich schon für ein Hotel entschieden?', 'Você já decidiu por um hotel?'],
        ['Jonas', 'Das hängt vom Wetter ab. Ich rechne mit Regen.', 'Isso depende do tempo. Conto com chuva.'], ['Mia', 'Ich kümmere mich um die Tickets. Du kannst dich um das Hotel kümmern.', 'Eu cuido das passagens. Você pode cuidar do hotel.'], ['Jonas', 'Gern! Ich bedanke mich schon jetzt bei dir.', 'Com prazer! Já agradeço desde já.'],
        ['Mia', 'Ich denke oft an unsere letzte Reise.', 'Penso muitas vezes na nossa última viagem.'], ['Jonas', 'Ich erinnere mich gern daran. Wir haben viel gelacht.', 'Lembro-me com prazer. Rimos muito.'],
      ]),
      producao(5, 'Fale em voz alta dos seus planos e sonhos com verbos de preposição: «Ich träume von … Ich kümmere mich um … Ich rechne mit …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma lista de 16 verbos com preposição e o caso, de memória.'),
      exercicios(20, [
        lacuna('Ich warte ___ den Bus.', ['auf', 'für', 'an'], 'auf', 'warten auf + Akk.'), lacuna('Ich denke ___ dich.', ['an', 'auf', 'von'], 'an', 'denken an + Akk.'), lacuna('Ich interessiere mich ___ Musik.', ['für', 'an', 'auf'], 'für', 'sich interessieren für.'),
        lacuna('Wir sprechen ___ das Wetter.', ['über', 'von', 'für'], 'über', 'sprechen über + Akk.'), lacuna('Ich kümmere mich ___ die Kinder.', ['um', 'für', 'an'], 'um', 'sich kümmern um + Akk.'), lacuna('Ich träume ___ einem Haus am Meer.', ['von', 'auf', 'über'], 'von', 'träumen von + Dat.'),
        lacuna('Ich beschäftige mich ___ Musik.', ['mit', 'bei', 'für'], 'mit', 'sich beschäftigen mit + Dat.'), lacuna('Ich bedanke mich ___ dir.', ['bei', 'mit', 'an'], 'bei', 'sich bedanken bei + Dat.'), lacuna('Ich freue mich ___ den Urlaub. (que vem)', ['auf', 'über', 'für'], 'auf', 'freuen auf = futuro.'),
        mc('A preposição de um verbo com preposição:', ['é fixa e rege um caso', 'muda livremente', 'não existe'], 'é fixa e rege um caso', 'Aprenda junto.'), mc('«Sich freuen auf» e «sich freuen über» diferem em:', ['futuro × presente', 'formal × informal', 'dativo × genitivo'], 'futuro × presente', 'Pelo que vem × pelo que há.'), mc('«Teilnehmen an» pede:', ['dativo', 'acusativo', 'genitivo'], 'dativo', 'Ich nehme am Kurs teil.'),
        ordem('Ordene: «Eu espero pelo ônibus.»', ['Ich', 'warte', 'auf', 'den', 'Bus'], 'Ich warte auf den Bus.', 'warten auf + Akk.'), ouvir('Ich bedanke mich bei dir', ['Ich bedanke mich bei dir', 'Ich danke dich', 'Ich bedanke dir'], 'Ich bedanke mich bei dir', 'sich bedanken bei + Dat.'), ditado('Ich träume von einem Haus am Meer', 'träumen von + Dat.'),
        livre('Escreva 5 frases com verbos com preposição: auf, an, für, über, um ou von.', 'Ich warte auf den Bus. Ich denke an dich. Ich interessiere mich für Musik. Wir sprechen über das Wetter. Ich kümmere mich um die Kinder.'),
      ]),
      producao(5, 'Grave-se falando de coisas que você espera, em que pensa e pelas quais se interessa.'),
    ]),
  ],
});
