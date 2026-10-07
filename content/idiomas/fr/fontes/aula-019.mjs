import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 19, titulo: 'O imparfait: como era antes', nivel: 'a2',
  objetivo: 'Formar o imparfait e usá-lo para hábitos do passado, descrições e cenários («quand j\'étais petit, j\'habitais à la campagne»).',
  nota: 'Você já descreve o passado que durava ou se repetia. Próxima aula: passé composé × imparfait.',
  sessoes: [
    sessao('S1', 'Formar o imparfait', [
      revisao(5, 'Conte em voz alta o que você fez ontem com o passé composé.'),
      palavras(8, [
        ['autrefois', 'ôtrefuá', 'antigamente', ''], ['avant', 'avã', 'antes', ''], ['quand j\'étais petit', 'kã jetê pöti', 'quando eu era pequeno', ''], ['d\'habitude', 'dabitüd', 'geralmente', ''], ['tous les jours', 'tu lê jur', 'todos os dias', ''], ['souvent', 'suvã', 'frequentemente', ''], ['la campagne', 'la kãpañ', 'o campo', ''], ['l\'enfance', 'lãfãs', 'a infância', ''],
      ]),
      gramatica(12, 'Je parlais, nous mangions: a formação', 'PASSO 1: o imparfait descreve o passado que durava, se repetia ou formava o cenário. PASSO 2: para formar, pegue o «nous» do presente e tire o «-ons»: «nous parlons → parl-», «nous finissons → finiss-», «nous prenons → pren-». PASSO 3: acrescente as terminações: «-ais, -ais, -ait, -ions, -iez, -aient». Assim: «je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient». PASSO 4: o único verbo irregular é «être»: radical «ét-»: «j\'étais, tu étais, il était, nous étions, vous étiez, ils étaient». PASSO 5: verbos com «-ger» e «-cer» mantêm o som: «je mangeais, nous mangions» e «je commençais, nous commencions». PASSO 6: «faire» → «je faisais» (de «nous faisons»); «avoir» → «j\'avais»; «aller» → «j\'allais». PASSO 7: as terminações «-ais, -ait, -aient» soam todas igual: [é]. A diferença é só na escrita. PASSO 8: pergunta e negação são iguais ao presente: «Tu habitais où ?» «Je ne mangeais pas de viande.»', {
        tag: 'Imparfait',
        comparacao: 'em português o pretérito imperfeito é «eu falava», «nós comíamos». O francês é muito parecido em uso («je parlais», «nous mangions»), e a forma sai do «nous» do presente, sem exceção, salvo «être».',
        tabela: [
          { pessoa: 'je', parler: 'parlais', finir: 'finissais', etre: 'étais' }, { pessoa: 'tu', parler: 'parlais', finir: 'finissais', etre: 'étais' }, { pessoa: 'il / elle', parler: 'parlait', finir: 'finissait', etre: 'était' }, { pessoa: 'nous', parler: 'parlions', finir: 'finissions', etre: 'étions' }, { pessoa: 'vous', parler: 'parliez', finir: 'finissiez', etre: 'étiez' }, { pessoa: 'ils / elles', parler: 'parlaient', finir: 'finissaient', etre: 'étaient' },
        ],
        erros: [['Je parlé quand j\'étais petit.', 'Je parlais quand j\'étais petit.', 'Hábito antigo: imparfait.'], ['Nous mangons.', 'Nous mangions.', 'Radical do «nous» + «-ions».'], ['J\'étaisais petit.', 'J\'étais petit.', '«Être» não leva «-ais» extra.'], ['Nous mangeions.', 'Nous mangions.', 'Com «nous», o «e» some: «mangions».']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que você fazia quando era criança, com «je» e «nous».'),
    ]),
    sessao('S2', 'Hábitos e descrições do passado', [
      revisao(4, 'Conjugue em voz alta: «parler, finir, prendre, faire, être» no imparfait com «je».'),
      palavras(6, [
        ['grandir', 'grãdir', 'crescer', ''], ['jouer', 'juê', 'brincar, jogar', ''], ['rêver', 'rêvé', 'sonhar', ''], ['la plage', 'la plaj', 'a praia', ''], ['les grands-parents', 'lê grã-parã', 'os avós', ''], ['le jardin', 'lö jardẽ', 'o jardim', ''],
      ]),
      gramatica(12, 'Quando usar o imparfait', 'PASSO 1: hábitos repetidos no passado: «Quand j\'étais petit, je jouais dans le jardin tous les jours.» PASSO 2: descrições do passado: «Ma grand-mère avait les cheveux blancs.» «La maison était grande.» PASSO 3: o estado de espírito e o cenário: «Il pleuvait, j\'étais fatigué, je voulais rentrer.» PASSO 4: a idade e a hora no passado: «J\'avais dix ans.» «Il était huit heures.» PASSO 5: palavras que combinam: «autrefois, avant, souvent, toujours, tous les jours, d\'habitude, chaque été». PASSO 6: «être en train de» no passado é o imparfait: «J\'étais en train de manger.» PASSO 7: com «si» para sugestão: «Si on allait au cinéma ?» (e se a gente fosse ao cinema?). PASSO 8: para saudade ou comparação entre antes e agora: «Avant, il y avait moins de voitures.» «Maintenant, il y en a beaucoup.»', {
        tag: 'Imparfait',
        comparacao: 'em português o imperfeito também descreve e repete («eu brincava», «a casa era grande»). Em francês o uso é muito próximo; o cuidado é não trocar por «passé composé» quando a ação é um hábito ou um cenário.',
        tabela: [
          { uso: 'hábito', exemplo: 'Je jouais dehors tous les jours.' }, { uso: 'descrição', exemplo: 'La maison était grande.' }, { uso: 'idade', exemplo: 'J\'avais dix ans.' }, { uso: 'hora', exemplo: 'Il était huit heures.' }, { uso: 'ação em curso', exemplo: 'Je mangeais quand tu as appelé.' }, { uso: 'sugestão', exemplo: 'Si on allait au cinéma ?' },
        ],
        erros: [['Quand j\'ai été petit.', 'Quand j\'étais petit.', 'Fase longa: imparfait.'], ['J\'ai eu dix ans.', 'J\'avais dix ans.', 'Idade no cenário: imparfait.'], ['Il a été huit heures.', 'Il était huit heures.', 'Hora no passado.'], ['Avant, il y a moins de voitures.', 'Avant, il y avait moins de voitures.', 'Antes: imparfait.']],
      }),
      producao(8, 'Descreva em voz alta a casa, a escola e os hábitos da sua infância em oito frases no imparfait.'),
    ]),
    sessao('S3', 'Uma infância em um texto', [
      revisao(4, 'Complete: «Avant, je ___ (habiter) à la campagne. Nous ___ (jouer) dehors.»'),
      palavras(5, [
        ['le village', 'lö vilaj', 'a vila', ''], ['la ferme', 'la férm', 'a fazenda', ''], ['les vacances', 'lê vakãs', 'as férias', ''], ['le marché', 'lö marxé', 'o mercado', ''], ['se baigner', 'sö bêñé', 'tomar banho (mar, rio)', ''],
      ]),
      gramatica(8, 'Comparar antes e agora', 'PASSO 1: use o imparfait para o antes e o presente para o agora: «Avant, j\'habitais à la campagne. Maintenant, j\'habite en ville.» PASSO 2: conectores: «avant… maintenant», «autrefois… aujourd\'hui», «à l\'époque… maintenant». PASSO 3: «ne… plus» marca o que acabou: «Je ne joue plus au football.» «Il n\'y a plus de ferme ici.» PASSO 4: «toujours» ou «encore» marca o que continua: «J\'habite toujours ici.» PASSO 5: «avant» sozinho abre a frase sobre o passado: «Avant, je prenais le bus.»', {
        tag: 'Imparfait',
        comparacao: 'em português dizemos «antes eu morava aqui, agora moro lá». O francês faz o mesmo: «avant» + imparfait, «maintenant» + présent. O novo ingrediente é «ne… plus» («não… mais»).',
        tabela: [
          { passado: 'Avant, j\'habitais à la campagne.', presente: 'Maintenant, j\'habite en ville.' }, { passado: 'Je jouais au football.', presente: 'Je ne joue plus au football.' }, { passado: 'Il y avait une ferme.', presente: 'Il n\'y a plus de ferme.' }, { passado: 'Nous allions à la plage.', presente: 'Nous allons à la montagne.' },
        ],
        erros: [['Je ne joue pas plus au football.', 'Je ne joue plus au football.', '«Ne… plus» é a negação de «mais».'], ['Avant, j\'habite à la campagne.', 'Avant, j\'habitais à la campagne.', 'Antes: imparfait.'], ['Il n\'y a plus des fermes.', 'Il n\'y a plus de fermes.', 'Negação: «de».'], ['Maintenant, j\'habitais en ville.', 'Maintenant, j\'habite en ville.', 'Agora: présent.']],
      }),
      texto(8, 'Mon enfance à la campagne / Minha infância no campo', 'Quand j\'étais petit, j\'habitais dans un petit village avec mes grands-parents. Nous avions une grande maison avec un jardin. Tous les matins, je me levais à sept heures et je donnais à manger aux poules. L\'après-midi, je jouais avec mes amis près de la rivière. En été, nous nous baignions presque tous les jours. Maintenant, j\'habite en ville et je ne vois plus mes amis du village, mais je pense souvent à cette époque.', 'Quando eu era pequeno, eu morava numa pequena vila com meus avós. Tínhamos uma casa grande com um jardim. Toda manhã, eu me levantava às sete horas e dava comida às galinhas. À tarde, eu brincava com meus amigos perto do rio. No verão, nos banhávamos quase todos os dias. Agora, moro na cidade e não vejo mais meus amigos da vila, mas penso frequentemente nessa época.', [['Avec qui l\'auteur habitait-il ?', 'Avec ses grands-parents.'], ['À quelle heure se levait-il ?', 'À sept heures.'], ['Que faisait-il l\'après-midi ?', 'Il jouait avec ses amis près de la rivière.'], ['Où habite-t-il maintenant ?', 'En ville.']]),
      producao(5, 'Conte em voz alta como era a sua vida cinco anos atrás e como é agora.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 19', [
      revisao(5, 'Descreva a sua infância em cinco frases com imparfait.'),
      exercicios(20, [
        ouvir('Quand j\'étais petit, j\'habitais à la campagne', ['Quand j\'étais petit, j\'habitais à la campagne', 'Quand j\'étais petit, j\'habite à la campagne', 'Quand je suis petit, j\'habitais à la campagne'], 'Quand j\'étais petit, j\'habitais à la campagne', 'Ouça «étais» e «habitais».'), ouvir('Nous mangions à midi', ['Nous mangions à midi', 'Nous mangeons à midi', 'Nous avons mangé à midi'], 'Nous mangions à midi', 'Ouça «mangions».'), ouvir('Il y avait un jardin', ['Il y avait un jardin', 'Il y a un jardin', 'Il y aura un jardin'], 'Il y avait un jardin', 'Ouça «avait».'),
        ditado('Avant, je jouais dehors', 'Escreva: Avant, je jouais dehors.'), ditado('Je ne joue plus au football', 'Escreva: Je ne joue plus au football.'), ditado('Il était huit heures', 'Escreva: Il était huit heures.'),
        mc('Imparfait de «nous parlons»:', ['nous parlions', 'nous parlons', 'nous parlerons'], 'nous parlions', 'Radical + -ions.'), mc('Qual frase está correta?', ['J\'avais dix ans.', 'J\'ai eu dix ans.', 'J\'avoir dix ans.'], 'J\'avais dix ans.', 'Idade no cenário.'), mc('Qual frase está correta?', ['Quand j\'étais petit, je jouais.', 'Quand j\'ai été petit, je jouais.', 'Quand je suis petit, je jouais.'], 'Quand j\'étais petit, je jouais.', '«Être» no imparfait.'), mc('Qual frase está correta?', ['Je ne joue plus.', 'Je ne joue pas plus.', 'Je joue ne plus.'], 'Je ne joue plus.', '«Ne… plus» = não… mais.'),
        lacuna('Avant, nous ___ à la plage. (aller)', ['allions', 'allons', 'irions'], 'allions', 'Nous: -ions.'), lacuna('Elle ___ les cheveux blancs. (avoir)', ['avait', 'avais', 'avoir'], 'avait', 'Elle: -ait.'), lacuna('Ils ___ petits. (être)', ['étaient', 'étions', 'étaît'], 'étaient', 'Ils: -aient.'), lacuna('Il ___ beaucoup de neige. (haver)', ['y avait', 'a', 'y a'], 'y avait', '«Il y avait».'),
        ordem('Ordene: «Quand j\'étais petit, je jouais dehors.»', ['Quand', 'j\'étais', 'petit,', 'je', 'jouais', 'dehors'], 'Quand j\'étais petit, je jouais dehors.', 'Cenário + hábito.'), ordem('Ordene: «Nous habitions dans un village.»', ['Nous', 'habitions', 'dans', 'un', 'village'], 'Nous habitions dans un village.', 'Imparfait com «nous».'),
        livre('Escreva em francês: Quando eu era criança, eu morava no campo. Eu brincava todos os dias. Hoje eu moro na cidade.', 'Quand j\'étais enfant, j\'habitais à la campagne. Je jouais tous les jours. Aujourd\'hui, j\'habite en ville.'),
      ]),
      producao(5, 'Fale 1 minuto sobre como era a sua rotina quando você era criança.'),
    ]),
  ],
});
