import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 64, titulo: 'Adjetivos substantivados', nivel: 'b1',
  objetivo: 'Transformar adjetivos e particípios em substantivos (das Neue, etwas Neues, der Deutsche, ein Bekannter, der Reisende), com maiúscula e a terminação do adjetivo.',
  nota: 'Você usa adjetivos como substantivos. Próxima aula: Futur II e as partículas modais.',
  sessoes: [
    sessao('S1', 'Das Gute, etwas Neues, alles Gute', [
      revisao(5, 'Escreva 6 frases com Partizip I e II como adjetivo.'),
      palavras(8, [
        ['das Gute', 'das gú-te', 'o bom, o bem', 'the good'], ['das Neue', 'das nói-e', 'o novo, a novidade', 'the new'], ['das Wichtige', 'das víç-ti-gue', 'o importante', 'the important'], ['das Schöne', 'das xö-ne', 'o belo', 'the beautiful'],
        ['etwas Neues', 'ét-vas nói-es', 'algo novo', 'something new'], ['nichts Gutes', 'niçts gú-tes', 'nada de bom', 'nothing good'], ['alles Gute', 'á-les gú-te', 'tudo de bom', 'all the best'], ['viel Interessantes', 'fil in-te-re-sán-tes', 'muita coisa interessante', 'a lot of interesting things'],
      ]),
      gramatica(14, 'O adjetivo que vira substantivo, passo a passo', 'PASSO 1: em alemão, qualquer adjetivo pode virar SUBSTANTIVO e leva INICIAL MAIÚSCULA: «gut» → «das Gute» (o bom). PASSO 2: depois de «DAS», o adjetivo leva «-e»: «das Gute», «das Neue», «das Wichtigste», «das Schöne». PASSO 3: depois de «ETWAS», «NICHTS», «VIEL», «WENIG», o adjetivo leva «-ES»: «etwas Neues» (algo novo), «nichts Gutes» (nada de bom), «viel Interessantes». PASSO 4: depois de «ALLES», leva «-E»: «alles Gute» (tudo de bom). PASSO 5: use para ideias abstratas: «das Wichtigste» (o mais importante), «das Beste» (o melhor). PASSO 6: perguntas e votos comuns: «Gibt es etwas Neues?», «Ich wünsche dir alles Gute.»', {
        tag: 'Substantivos',
        comparacao: 'o português usa o artigo + adjetivo («o novo», «o bom») sem mudar a grafia. O alemão escreve com maiúscula e escolhe a terminação conforme a palavra que vem antes.',
        tabela: [
          { construcao: 'das + adj. -e', exemplo: 'das Gute, das Neue, das Wichtigste, das Schöne' }, { construcao: 'etwas / nichts / viel + adj. -es', exemplo: 'etwas Neues, nichts Gutes, viel Interessantes' }, { construcao: 'alles + adj. -e', exemplo: 'alles Gute, alles Schöne' }, { construcao: 'votos', exemplo: 'Ich wünsche dir alles Gute.' }, { construcao: 'pergunta', exemplo: 'Gibt es etwas Neues?' },
        ],
        erros: [['etwas neues', 'etwas Neues', 'Substantivado: maiúscula.'], ['nichts Gute', 'nichts Gutes', 'Depois de «nichts»: «-es».'], ['alles Gutes', 'alles Gute', 'Depois de «alles»: «-e».']],
      }),
      producao(3, 'Diga 6 frases com adjetivos substantivados: «Gibt es etwas Neues? Ich wünsche dir alles Gute. Das Wichtigste ist …»'),
    ]),
    sessao('S2', 'Der Deutsche, ein Bekannter', [
      revisao(5, 'Escreva 6 frases com «etwas Neues», «nichts Gutes», «alles Gute» e «das Wichtigste».'),
      palavras(8, [
        ['der Deutsche', 'der dói-tche', 'o alemão', 'the German'], ['der Bekannte', 'der be-kán-te', 'o conhecido', 'the acquaintance'], ['der Kranke', 'der krán-ke', 'o doente', 'the sick person'], ['der Angestellte', 'der án-gue-xtél-te', 'o funcionário', 'the employee'],
        ['der Verwandte', 'der fer-ván-te', 'o parente', 'the relative'], ['der Arbeitslose', 'der ár-baits-lô-se', 'o desempregado', 'the unemployed'], ['der Erwachsene', 'der er-vák-se-ne', 'o adulto', 'the adult'], ['der Jugendliche', 'der iú-guent-li-çe', 'o jovem', 'the young person'],
      ]),
      gramatica(12, 'Pessoas: der Deutsche, ein Deutscher', 'PASSO 1: muitos adjetivos e particípios viram SUBSTANTIVOS DE PESSOAS: «deutsch» → «der Deutsche»; «bekannt» → «der Bekannte»; «krank» → «der Kranke»; «angestellt» → «der Angestellte»; «verwandt» → «der Verwandte»; «arbeitslos» → «der Arbeitslose». PASSO 2: eles se declinam como ADJETIVOS: depois de «der/die/das», «-e» (nominativo) e «-en» (os outros casos); depois de «ein», «-er» (masculino), «-e» (feminino): «der Deutsche / ein Deutscher», «die Deutsche / eine Deutsche», «die Deutschen / Deutsche». PASSO 3: acusativo masculino: «den Deutschen», «einen Deutschen». PASSO 4: dativo: «dem Deutschen», «einem Deutschen», «den Deutschen». PASSO 5: use-os para falar de grupos: «die Erwachsenen» (os adultos), «die Jugendlichen» (os jovens), «die Kranken» (os doentes).', {
        tag: 'Substantivos',
        tabela: [
          { caso: 'Nominativ', masculino: 'der Deutsche / ein Deutscher', feminino: 'die Deutsche / eine Deutsche', plural: 'die Deutschen / Deutsche' }, { caso: 'Akkusativ', masculino: 'den Deutschen / einen Deutschen', feminino: 'die Deutsche / eine Deutsche', plural: 'die Deutschen / Deutsche' }, { caso: 'Dativ', masculino: 'dem Deutschen / einem Deutschen', feminino: 'der Deutschen / einer Deutschen', plural: 'den Deutschen / Deutschen' },
        ],
        erros: [['ein Bekannte', 'ein Bekannter', 'Masculino com ein: «-er».'], ['Ich kenne den Deutsche.', 'Ich kenne den Deutschen.', 'Acusativo masculino: «-en».'], ['die deutsche (as alemãs, sem substantivo)', 'die Deutschen', 'Substantivado: maiúscula.']],
      }),
      producao(5, 'Fale de pessoas em voz alta: «Ich kenne einen Deutschen. Mein Bekannter arbeitet … Die Jugendlichen wollen …»'),
    ]),
    sessao('S3', 'O que há de novo?', [
      revisao(5, 'Escreva 6 frases com pessoas substantivadas, em casos diferentes.'),
      gramatica(10, 'Particípios substantivados e usos na conversa', 'PASSO 1: também os PARTICÍPIOS viram substantivos: «der Reisende» (o viajante, de «reisend»), «der Studierende» (o estudante), «der Angestellte» (o funcionário, de «angestellt»), «der Verletzte» (o ferido). PASSO 2: a declinação é a mesma dos adjetivos. PASSO 3: nas conversas, use as formas com neutros para falar de assuntos: «Was gibt es Neues?», «Nichts Besonderes.» PASSO 4: para generalizar, use o plural: «die Deutschen», «die Jugendlichen», «die Erwachsenen».', {
        tag: 'Substantivos',
        tabela: [
          { forma: 'Partizip I substantivado', exemplo: 'der Reisende, der Studierende' }, { forma: 'Partizip II substantivado', exemplo: 'der Angestellte, der Verletzte' }, { forma: 'pergunta comum', exemplo: 'Was gibt es Neues?' }, { forma: 'resposta comum', exemplo: 'Nichts Besonderes.' }, { forma: 'grupos', exemplo: 'die Deutschen, die Jugendlichen, die Erwachsenen' },
        ],
      }),
      dialogo(10, 'Was gibt es Neues? / O que há de novo?', 'Dois amigos trocam novidades.', [
        ['Mia', 'Was gibt es Neues?', 'O que há de novo?'], ['Jonas', 'Nichts Besonderes. Ich habe nur etwas Interessantes gelesen.', 'Nada de especial. Só li algo interessante.'], ['Mia', 'Was denn?', 'O quê?'],
        ['Jonas', 'Viele Deutsche arbeiten heute weniger als früher.', 'Muitos alemães trabalham hoje menos do que antigamente.'], ['Mia', 'Und die Jugendlichen? Was machen die?', 'E os jovens? O que fazem?'], ['Jonas', 'Die Jugendlichen wollen mehr Freizeit. Alles Gute braucht Zeit, sagen sie.', 'Os jovens querem mais tempo livre. Dizem que tudo de bom leva tempo.'],
        ['Mia', 'Da haben sie recht. Das Wichtigste ist die Gesundheit.', 'Têm razão. O mais importante é a saúde.'], ['Jonas', 'Ja, und für die Erwachsenen ist das Beste ein ruhiges Wochenende.', 'Sim, e para os adultos o melhor é um fim de semana tranquilo.'],
      ]),
      producao(5, 'Troque novidades em voz alta: «Was gibt es Neues? Nichts Besonderes. Ich habe etwas Interessantes gelesen …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases com adjetivos substantivados, incluindo pessoas.'),
      exercicios(20, [
        lacuna('Gibt es etwas ___? (novo)', ['Neues', 'Neue', 'neues'], 'Neues', 'Substantivado depois de etwas: -es e maiúscula.'), lacuna('Ich wünsche dir alles ___. (de bom)', ['Gute', 'Gutes', 'gute'], 'Gute', 'Depois de alles: -e.'), lacuna('Das ___ ist die Gesundheit. (mais importante)', ['Wichtigste', 'wichtigste', 'Wichtigsten'], 'Wichtigste', 'das + superlativo substantivado.'),
        lacuna('Ich kenne einen ___. (alemão)', ['Deutschen', 'Deutscher', 'Deutsche'], 'Deutschen', 'Acusativo masculino: -en.'), lacuna('Das ist ein ___ von mir. (conhecido, m.)', ['Bekannter', 'Bekannte', 'Bekanntes'], 'Bekannter', 'ein + masculino: -er.'), lacuna('Die ___ wollen mehr Freizeit. (jovens)', ['Jugendlichen', 'Jugendliche', 'jugendlichen'], 'Jugendlichen', 'die + plural: -en.'),
        mc('Um adjetivo substantivado se escreve:', ['com maiúscula', 'com minúscula', 'em itálico'], 'com maiúscula', 'Das Gute.'), mc('Depois de «nichts», o adjetivo substantivado leva:', ['-es', '-e', '-en'], '-es', 'nichts Gutes.'), mc('Depois de «alles», o adjetivo substantivado leva:', ['-e', '-es', '-en'], '-e', 'alles Gute.'),
        ordem('Ordene: «Há alguma novidade?»', ['Gibt', 'es', 'etwas', 'Neues'], 'Gibt es etwas Neues?', 'etwas + Neues.'), ouvir('Ich wünsche dir alles Gute', ['Ich wünsche dir alles Gute', 'Ich wünsche dir alles Gutes', 'Ich wünsche dir etwas Gute'], 'Ich wünsche dir alles Gute', 'alles + -e.'), ditado('Das Wichtigste ist die Gesundheit', 'das + superlativo substantivado.'),
        livre('Escreva 5 frases: etwas Neues, nichts Gutes, alles Gute, uma pessoa substantivada e um grupo.', 'Gibt es etwas Neues? Ich habe nichts Gutes gehört. Ich wünsche dir alles Gute. Ich kenne einen Deutschen. Die Jugendlichen wollen mehr Freizeit.'),
      ]),
      producao(5, 'Grave-se trocando novidades e falando de pessoas e grupos com adjetivos substantivados.'),
    ]),
  ],
});
