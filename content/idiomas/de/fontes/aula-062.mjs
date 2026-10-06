import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 62, titulo: 'Adjetivos e substantivos com preposição', nivel: 'b1',
  objetivo: 'Usar os adjetivos e os substantivos que pedem preposição fixa (stolz auf, zufrieden mit, Angst vor, Lust auf…), com o caso correto e o advérbio pronominal antecipando dass ou zu.',
  nota: 'Você usa adjetivos e substantivos com preposição. Próxima aula: o Partizip I e II como adjetivo.',
  sessoes: [
    sessao('S1', 'Adjetivos com preposição', [
      revisao(5, 'Escreva 6 frases com «darauf, dass», «darüber» e «daran».'),
      palavras(8, [
        ['stolz auf', 'xtolts auf', 'orgulhoso de', 'proud of'], ['zufrieden mit', 'tsu-fríden mit', 'satisfeito com', 'satisfied with'], ['interessiert an', 'in-te-re-síert an', 'interessado em', 'interested in'], ['abhängig von', 'áp-hén-giç fon', 'dependente de', 'dependent on'],
        ['verantwortlich für', 'fer-ánt-vort-liç für', 'responsável por', 'responsible for'], ['begeistert von', 'be-gái-s-tert fon', 'entusiasmado com', 'thrilled by'], ['nett zu', 'net tsu', 'gentil com', 'kind to'], ['froh über', 'frô ü-ber', 'contente com', 'glad about'],
      ]),
      gramatica(14, 'Adjetivos com preposição, passo a passo', 'PASSO 1: muitos adjetivos pedem uma PREPOSIÇÃO FIXA, como os verbos: «stolz AUF», «zufrieden MIT», «interessiert AN». PASSO 2: a preposição rege um CASO: aprenda o adjetivo, a preposição e o caso: «stolz auf + Akk», «zufrieden mit + Dat», «interessiert an + Dat», «abhängig von + Dat», «verantwortlich für + Akk», «begeistert von + Dat», «nett zu + Dat», «froh über + Akk». PASSO 3: use «sein» + adjetivo + preposição: «Ich bin stolz auf meine Tochter.» PASSO 4: com uma COISA já mencionada, use o advérbio pronominal: «Ich bin stolz darauf.» PASSO 5: para antecipar uma frase: «Ich bin stolz darauf, dass du es geschafft hast» / «Ich bin stolz darauf, es geschafft zu haben.»', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { adjetivo: 'stolz auf + Akk', frase: 'Ich bin stolz auf meine Tochter.' }, { adjetivo: 'zufrieden mit + Dat', frase: 'Ich bin zufrieden mit dem Ergebnis.' }, { adjetivo: 'interessiert an + Dat', frase: 'Er ist interessiert an Musik.' }, { adjetivo: 'abhängig von + Dat', frase: 'Das ist abhängig vom Wetter.' },
          { adjetivo: 'verantwortlich für + Akk', frase: 'Er ist verantwortlich für das Projekt.' }, { adjetivo: 'begeistert von + Dat', frase: 'Sie ist begeistert von der Stadt.' }, { adjetivo: 'nett zu + Dat', frase: 'Er ist nett zu mir.' }, { adjetivo: 'froh über + Akk', frase: 'Ich bin froh über deine Hilfe.' },
        ],
        erros: [['Ich bin stolz von meiner Tochter.', 'Ich bin stolz auf meine Tochter.', 'Preposição fixa: «stolz auf».'], ['Ich bin zufrieden mit das Ergebnis.', 'Ich bin zufrieden mit dem Ergebnis.', '«mit» pede dativo.'], ['Ich bin froh darüber die Hilfe.', 'Ich bin froh über die Hilfe. / Ich bin froh darüber.', 'Substantivo ou advérbio pronominal, não os dois.']],
      }),
      producao(3, 'Diga 6 frases com adjetivos com preposição: «Ich bin stolz auf … Ich bin zufrieden mit … Ich bin froh über …»'),
    ]),
    sessao('S2', 'Substantivos com preposição', [
      revisao(5, 'Escreva os 8 adjetivos com preposição e o caso que pedem.'),
      palavras(8, [
        ['die Angst vor', 'di angst fôr', 'medo de', 'fear of'], ['die Lust auf', 'di lust auf', 'vontade de', 'desire for'], ['das Interesse an', 'das in-te-ré-se an', 'interesse em', 'interest in'], ['die Hoffnung auf', 'di hóf-nung auf', 'esperança de', 'hope for'],
        ['der Wunsch nach', 'der vunx nárr', 'desejo de', 'wish for'], ['die Frage nach', 'di frá-gue nárr', 'pergunta sobre', 'question about'], ['die Antwort auf', 'di ánt-vort auf', 'resposta a', 'answer to'], ['das Problem mit', 'das pro-blém mit', 'problema com', 'problem with'],
      ]),
      gramatica(12, 'Substantivos com preposição', 'PASSO 1: também há SUBSTANTIVOS com preposição fixa, e o mecanismo é o mesmo: a preposição rege um caso. PASSO 2: com acusativo: «die Lust auf + Akk» («Ich habe Lust auf ein Eis»), «die Hoffnung auf + Akk», «die Antwort auf + Akk». PASSO 3: com dativo: «die Angst vor + Dat» («Ich habe Angst vor Spinnen»), «das Interesse an + Dat», «das Problem mit + Dat», «der Wunsch nach + Dat», «die Frage nach + Dat». PASSO 4: a preposição vem DEPOIS do substantivo: «Ich habe Angst vor dem Test.» PASSO 5: com «haben»: «Ich habe Angst, Lust, Interesse, Hoffnung, Probleme, einen Wunsch …» PASSO 6: com «dass» ou «zu»: «Ich habe Angst davor, allein zu sein» / «Ich habe die Hoffnung, dass es klappt.»', {
        tag: 'Substantivos',
        tabela: [
          { substantivo: 'Angst vor + Dat', frase: 'Ich habe Angst vor dem Test.' }, { substantivo: 'Lust auf + Akk', frase: 'Ich habe Lust auf ein Eis.' }, { substantivo: 'Interesse an + Dat', frase: 'Er hat Interesse an Musik.' }, { substantivo: 'Hoffnung auf + Akk', frase: 'Sie hat die Hoffnung auf eine Stelle.' },
          { substantivo: 'Wunsch nach + Dat', frase: 'Ich habe den Wunsch nach Ruhe.' }, { substantivo: 'Frage nach + Dat', frase: 'Ich habe eine Frage nach dem Weg.' }, { substantivo: 'Problem mit + Dat', frase: 'Ich habe ein Problem mit dem Computer.' },
        ],
        erros: [['Ich habe Angst von dem Test.', 'Ich habe Angst vor dem Test.', 'Preposição fixa: «Angst vor».'], ['Ich habe Lust zu ein Eis.', 'Ich habe Lust auf ein Eis.', '«Lust auf» + substantivo.'], ['Ich habe Angst davor allein sein.', 'Ich habe Angst davor, allein zu sein.', 'Antecipação com «zu» e vírgula.']],
      }),
      producao(5, 'Diga 6 frases com substantivos com preposição: «Ich habe Angst vor … Ich habe Lust auf … Ich habe Interesse an …»'),
    ]),
    sessao('S3', 'Opiniões e emoções', [
      revisao(5, 'Escreva 6 frases com substantivos com preposição.'),
      gramatica(10, 'Falar de sentimentos com preposição', 'PASSO 1: para sentimentos, combine adjetivos e substantivos com preposição: «Ich bin stolz auf meine Familie», «Ich habe Angst vor dem Flug». PASSO 2: para opinar: «Ich bin zufrieden mit der Arbeit», «Ich bin begeistert von der Stadt». PASSO 3: para explicar o motivo, junte uma oração: «Ich bin froh darüber, dass du gekommen bist.» PASSO 4: use o advérbio pronominal para retomar: «Das ist ein Problem. Ich habe viel Angst davor.» PASSO 5: perguntas: «Worauf bist du stolz?», «Wovor hast du Angst?», «Womit bist du zufrieden?»', {
        tag: 'Frase',
        tabela: [
          { funcao: 'orgulho', frase: 'Ich bin stolz auf meine Familie.' }, { funcao: 'medo', frase: 'Ich habe Angst vor dem Flug.' }, { funcao: 'satisfação', frase: 'Ich bin zufrieden mit der Arbeit.' }, { funcao: 'motivo', frase: 'Ich bin froh darüber, dass du gekommen bist.' }, { funcao: 'pergunta', frase: 'Worauf bist du stolz? Wovor hast du Angst?' },
        ],
      }),
      dialogo(10, 'Worauf bist du stolz? / Do que você tem orgulho?', 'Dois amigos falam de orgulho, medo e satisfação.', [
        ['Lea', 'Worauf bist du in deinem Leben besonders stolz?', 'Do que você tem mais orgulho na sua vida?'], ['Paul', 'Ich bin stolz darauf, dass ich Deutsch gelernt habe.', 'Tenho orgulho de ter aprendido alemão.'], ['Lea', 'Und wovor hast du Angst?', 'E do que você tem medo?'],
        ['Paul', 'Ich habe Angst vor dem Vorstellungsgespräch.', 'Tenho medo da entrevista de emprego.'], ['Lea', 'Bist du zufrieden mit deiner Arbeit?', 'Você está satisfeito com o seu trabalho?'], ['Paul', 'Ja, aber ich habe Lust auf eine neue Herausforderung.', 'Sim, mas tenho vontade de um novo desafio.'],
        ['Lea', 'Interessierst du dich für ein Projekt im Ausland?', 'Você se interessa por um projeto no exterior?'], ['Paul', 'Ja, ich habe großes Interesse daran, im Ausland zu arbeiten.', 'Sim, tenho grande interesse em trabalhar no exterior.'],
      ]),
      producao(5, 'Responda em voz alta: «Worauf bist du stolz? Wovor hast du Angst? Womit bist du zufrieden?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases sobre os seus sentimentos, com adjetivos e substantivos com preposição.'),
      exercicios(20, [
        lacuna('Ich bin stolz ___ meine Tochter.', ['auf', 'von', 'für'], 'auf', 'stolz auf + Akk.'), lacuna('Ich bin zufrieden ___ dem Ergebnis.', ['mit', 'von', 'an'], 'mit', 'zufrieden mit + Dat.'), lacuna('Er ist interessiert ___ Musik.', ['an', 'für', 'auf'], 'an', 'interessiert an + Dat.'),
        lacuna('Ich habe Angst ___ dem Test.', ['vor', 'von', 'an'], 'vor', 'Angst vor + Dat.'), lacuna('Ich habe Lust ___ ein Eis.', ['auf', 'zu', 'an'], 'auf', 'Lust auf + Akk.'), lacuna('Er ist nett ___ mir.', ['zu', 'mit', 'für'], 'zu', 'nett zu + Dat.'),
        lacuna('Ich bin froh ___ deine Hilfe.', ['über', 'von', 'auf'], 'über', 'froh über + Akk.'), lacuna('Ich bin stolz ___, dass du es geschafft hast.', ['darauf', 'darüber', 'davon'], 'darauf', 'stolz auf → darauf.'), mc('A preposição de um adjetivo com preposição:', ['é fixa e rege um caso', 'muda livremente', 'não existe'], 'é fixa e rege um caso', 'Aprenda junto.'),
        mc('«Worauf bist du stolz?» pergunta por:', ['uma coisa ou situação', 'uma pessoa', 'um lugar'], 'uma coisa ou situação', 'wo(r)-.'), mc('«Wovor hast du Angst?» vem de:', ['Angst vor', 'Angst von', 'Angst auf'], 'Angst vor', 'wo(r)- + vor.'), ordem('Ordene: «Tenho medo do teste.»', ['Ich', 'habe', 'Angst', 'vor', 'dem', 'Test'], 'Ich habe Angst vor dem Test.', 'Angst vor + Dat.'),
        ouvir('Ich bin stolz darauf, dass ich Deutsch gelernt habe', ['Ich bin stolz darauf, dass ich Deutsch gelernt habe', 'Ich bin stolz auf Deutsch gelernt', 'Ich habe Deutsch gelernt und bin stolz'], 'Ich bin stolz darauf, dass ich Deutsch gelernt habe', 'darauf + dass.'), ditado('Ich habe großes Interesse daran, im Ausland zu arbeiten', 'daran + zu.'), livre('Escreva 5 frases: dois adjetivos com preposição, dois substantivos com preposição e uma com «darauf, dass».', 'Ich bin stolz auf meine Familie. Ich bin zufrieden mit der Arbeit. Ich habe Angst vor dem Test. Ich habe Lust auf ein Eis. Ich bin froh darüber, dass du gekommen bist.'),
      ]),
      producao(5, 'Grave-se falando de orgulho, medo, satisfação e interesse com preposições.'),
    ]),
  ],
});
