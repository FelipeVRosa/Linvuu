import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 26, titulo: 'Corpo, saúde e farmácia', nivel: 'a2',
  objetivo: 'Nomear partes do corpo, dizer onde dói, descrever sintomas, falar com o médico e na farmácia, e usar «avoir mal à» e «il faut».',
  nota: 'Você explica o que sente e entende o que o médico diz. Próxima aula: viagens, hotel e aeroporto.',
  sessoes: [
    sessao('S1', 'O corpo e as dores', [
      revisao(5, 'Descreva em voz alta um lugar e uma pessoa com «qui», «que» e «où».'),
      palavras(8, [
        ['la tête', 'la tét', 'a cabeça', ''], ['le ventre', 'lö vãtr', 'a barriga', ''], ['le dos', 'lö dô', 'as costas', ''], ['la gorge', 'la gorj', 'a garganta', ''], ['la main', 'la mẽ', 'a mão', ''], ['le pied', 'lö piê', 'o pé', ''], ['la jambe', 'la jãb', 'a perna', ''], ['le bras', 'lö bra', 'o braço', ''],
      ]),
      gramatica(12, 'J\'ai mal à la tête', 'PASSO 1: para dizer onde dói, use «avoir mal à» + parte do corpo: «J\'ai mal à la tête.» «Il a mal au dos.» «Elle a mal aux pieds.» PASSO 2: «à + le = au», «à + les = aux», «à la» e «à l\'» continuam: «mal au ventre», «mal aux mains», «mal à la gorge», «mal à l\'estomac». PASSO 3: «avoir mal» sem lugar: «J\'ai mal.» (dói) PASSO 4: para «dói aqui»: «Ça fait mal ici.» PASSO 5: outras formas: «avoir de la fièvre» (ter febre), «avoir de la toux» ou «tousser» (tossir), «être enrhumé» (estar resfriado), «être fatigué», «avoir froid», «avoir chaud». PASSO 6: pergunta: «Où avez-vous mal ?» «Qu\'est-ce qui ne va pas ?» PASSO 7: no passado: «J\'avais mal à la tête.» «J\'ai eu mal au ventre toute la nuit.» PASSO 8: partes do corpo em francês usam artigo definido, não possessivo: «Je me lave les mains.» «Il a levé la main.» (não «ses mains»).', {
        tag: 'Saúde',
        comparacao: 'em português dizemos «minha cabeça dói» ou «estou com dor de cabeça». O francês usa «avoir mal à» + parte do corpo, com o verbo «avoir», nunca «ser» ou «estar»: «j\'ai mal à la tête». O português usa o possessivo («minha mão»), o francês usa o artigo («la main»).',
        tabela: [
          { expressao: 'J\'ai mal à la tête.', parte: 'a cabeça' }, { expressao: 'J\'ai mal au dos.', parte: 'as costas (à + le = au)' }, { expressao: 'J\'ai mal aux pieds.', parte: 'os pés (à + les = aux)' }, { expressao: 'J\'ai mal à la gorge.', parte: 'a garganta' }, { expressao: 'J\'ai mal à l\'estomac.', parte: 'o estômago (vogal)' }, { expressao: 'J\'ai de la fièvre.', parte: 'febre' },
        ],
        erros: [['Je suis mal à la tête.', 'J\'ai mal à la tête.', '«Avoir mal à».'], ['J\'ai mal à le dos.', 'J\'ai mal au dos.', 'à + le = au.'], ['J\'ai mal ma tête.', 'J\'ai mal à la tête.', 'Falta o «à» e o artigo, não o possessivo.'], ['Je lave mes mains.', 'Je me lave les mains.', 'Partes do corpo: artigo.']],
      }),
      producao(5, 'Diga em voz alta onde você tem dor ou tem sentido cansaço, e como se sente hoje.'),
    ]),
    sessao('S2', 'Sintomas e consulta', [
      revisao(4, 'Diga três dores diferentes com «avoir mal à».'),
      palavras(6, [
        ['malade', 'malad', 'doente', ''], ['la fièvre', 'la fiévr', 'a febre', ''], ['la toux', 'la tu', 'a tosse', ''], ['le rhume', 'lö rüm', 'o resfriado', ''], ['guérir', 'gerir', 'curar', ''], ['rendez-vous', 'rãdê-vu', 'consulta marcada', ''],
      ]),
      gramatica(12, 'Descrever sintomas e responder ao médico', 'PASSO 1: para descrever há quanto tempo: «J\'ai mal à la tête depuis hier.» (depuis + presente) PASSO 2: para descrever o início: «Ça a commencé il y a trois jours.» (il y a + passé composé) PASSO 3: frases úteis do paciente: «Je me sens mal.» «J\'ai de la fièvre.» «Je tousse beaucoup.» «Je suis allergique à la pénicilline.» PASSO 4: frases úteis do médico: «Où avez-vous mal ?» «Depuis quand ?» «Respirez profondément.» «Ouvrez la bouche.» «Je vais vous donner une ordonnance.» PASSO 5: conselhos do médico (imperativo e «il faut»): «Reposez-vous.» «Il faut boire beaucoup d\'eau.» «Prenez ce médicament deux fois par jour.» PASSO 6: frequência: «une fois par jour, deux fois par jour, trois fois par jour, le matin, le soir, avant le repas, après le repas». PASSO 7: pergunta ao médico: «Est-ce que c\'est grave ?» «Je dois rester au lit ?» «Quand est-ce que je pourrai travailler ?» PASSO 8: pronome «me» com verbos pronominais: «Je me sens mal.» «Il se sent mieux.»', {
        tag: 'Saúde',
        comparacao: 'em português dizemos «estou com febre», «estou gripado». O francês usa «avoir» (j\'ai de la fièvre) e «être» para o estado (je suis enrhumé). «Je me sens» é «eu me sinto».',
        tabela: [
          { quem: 'paciente', frase: 'J\'ai mal à la gorge depuis hier.' }, { quem: 'paciente', frase: 'Je me sens très fatigué.' }, { quem: 'médico', frase: 'Où avez-vous mal ?' }, { quem: 'médico', frase: 'Reposez-vous et buvez beaucoup d\'eau.' }, { quem: 'médico', frase: 'Prenez ce médicament deux fois par jour.' },
        ],
        erros: [['J\'ai mal à la tête il y a hier.', 'J\'ai mal à la tête depuis hier.', 'Continua: «depuis».'], ['Je suis de la fièvre.', 'J\'ai de la fièvre.', '«Avoir de la fièvre».'], ['Je sens mal.', 'Je me sens mal.', 'Verbo pronominal.'], ['Il faut que boire de l\'eau.', 'Il faut boire de l\'eau.', 'Sem «que» com infinitivo.']],
      }),
      producao(8, 'Faça uma consulta em voz alta: o paciente diz os sintomas, o médico pergunta e aconselha.'),
    ]),
    sessao('S3', 'Na farmácia', [
      revisao(4, 'Diga ao médico três sintomas e há quanto tempo.'),
      palavras(5, [
        ['la pharmacie', 'la farmasi', 'a farmácia', ''], ['le médicament', 'lö medikamã', 'o remédio', ''], ['l\'ordonnance', 'lordonãs', 'a receita médica', ''], ['le comprimé', 'lö kõprimé', 'o comprimido', ''], ['le sirop', 'lö siro', 'o xarope', ''],
      ]),
      gramatica(8, 'Pedir um remédio', 'PASSO 1: pedido educado: «Je voudrais quelque chose contre le mal de tête, s\'il vous plaît.» PASSO 2: frase do farmacêutico: «Vous avez une ordonnance ?» «Prenez un comprimé trois fois par jour.» PASSO 3: «contre» + problema: «un médicament contre la toux», «un sirop contre le rhume». PASSO 4: «sans ordonnance» (sem receita): «Ce médicament est disponible sans ordonnance.» PASSO 5: pergunta de preço: «Ça coûte combien ?» «C\'est remboursé ?» PASSO 6: despedida: «Merci, bonne journée.» «Bon rétablissement !» (melhoras)', {
        tag: 'Saúde',
        comparacao: 'em português dizemos «um remédio para tosse». O francês usa «contre»: «un médicament contre la toux». E «melhoras» vira «bon rétablissement».',
        tabela: [
          { pedido: 'um remédio para a tosse', frase: 'un médicament contre la toux' }, { pedido: 'um xarope para o resfriado', frase: 'un sirop contre le rhume' }, { pedido: 'sem receita', frase: 'sans ordonnance' }, { pedido: 'com receita', frase: 'avec une ordonnance' }, { pedido: 'melhoras', frase: 'Bon rétablissement !' },
        ],
        erros: [['Un médicament pour la toux.', 'Un médicament contre la toux.', 'Remédio para tratar: «contre».'], ['Je veux un médicament.', 'Je voudrais un médicament.', 'Pedido educado.'], ['Sans de ordonnance.', 'Sans ordonnance.', 'Sem artigo.'], ['Prenez trois fois par jour de comprimés.', 'Prenez des comprimés trois fois par jour.', 'Ordem da frase.']],
      }),
      dialogo(8, 'À la pharmacie / Na farmácia', 'Marie conversa com o farmacêutico sobre uma tosse.', [
        ['Marie', 'Bonjour. Je voudrais quelque chose contre la toux, s\'il vous plaît.', 'Bom dia. Gostaria de algo para a tosse, por favor.'], ['Le pharmacien', 'Depuis quand toussez-vous ?', 'Há quanto tempo a senhora tosse?'], ['Marie', 'Depuis trois jours. J\'ai aussi mal à la gorge.', 'Há três dias. Também estou com dor de garganta.'], ['Le pharmacien', 'Vous avez de la fièvre ?', 'A senhora tem febre?'], ['Marie', 'Non, je n\'ai pas de fièvre, mais je suis très fatiguée.', 'Não, não tenho febre, mas estou muito cansada.'], ['Le pharmacien', 'Prenez ce sirop trois fois par jour et reposez-vous. Si ça ne va pas mieux dans quatre jours, consultez un médecin.', 'Tome este xarope três vezes por dia e descanse. Se não melhorar em quatro dias, consulte um médico.'],
      ]),
      producao(5, 'Peça um remédio em voz alta para dor de cabeça, tosse e febre.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 26', [
      revisao(5, 'Faça uma consulta curta: diga a dor, o tempo e peça conselho.'),
      exercicios(20, [
        ouvir('J\'ai mal à la tête', ['J\'ai mal à la tête', 'J\'ai mal au ventre', 'J\'ai mal au dos'], 'J\'ai mal à la tête', 'Ouça «la tête».'), ouvir('Prenez ce médicament deux fois par jour', ['Prenez ce médicament deux fois par jour', 'Prenez ce médicament trois fois par jour', 'Prenez ce médicament une fois par jour'], 'Prenez ce médicament deux fois par jour', 'Ouça «deux».'), ouvir('Où avez-vous mal ?', ['Où avez-vous mal ?', 'Où êtes-vous mal ?', 'Où allez-vous ?'], 'Où avez-vous mal ?', 'Ouça «avez-vous».'),
        ditado('J\'ai mal au dos depuis hier', 'Escreva: J\'ai mal au dos depuis hier.'), ditado('Je me sens très fatigué', 'Escreva: Je me sens très fatigué.'), ditado('Il faut boire beaucoup d\'eau', 'Escreva: Il faut boire beaucoup d\'eau.'),
        mc('Qual frase está correta?', ['J\'ai mal au dos.', 'J\'ai mal à le dos.', 'Je suis mal au dos.'], 'J\'ai mal au dos.', 'à + le = au.'), mc('Qual frase está correta?', ['J\'ai mal aux pieds.', 'J\'ai mal à les pieds.', 'J\'ai mal au pieds.'], 'J\'ai mal aux pieds.', 'à + les = aux.'), mc('Remédio para tosse:', ['un médicament contre la toux', 'un médicament pour la toux', 'un médicament de la toux'], 'un médicament contre la toux', '«Contre» + problema.'), mc('Qual frase está correta?', ['J\'ai mal depuis hier.', 'J\'ai mal il y a hier.', 'J\'ai mal dans hier.'], 'J\'ai mal depuis hier.', 'Continua: «depuis».'),
        lacuna('Il a mal ___ ventre.', ['au', 'à la', 'aux'], 'au', 'Ventre é masculino.'), lacuna('Elle a mal ___ gorge.', ['à la', 'au', 'aux'], 'à la', 'Gorge é feminino.'), lacuna('J\'ai de la ___ . (febre)', ['fièvre', 'toux', 'mal'], 'fièvre', 'Vocabulário.'), lacuna('Reposez-___ et buvez de l\'eau.', ['vous', 'te', 'se'], 'vous', 'Imperativo pronominal.'),
        ordem('Ordene: «J\'ai mal à la gorge depuis hier.»', ['J\'ai', 'mal', 'à', 'la', 'gorge', 'depuis', 'hier'], 'J\'ai mal à la gorge depuis hier.', 'avoir mal à.'), ordem('Ordene: «Prenez ce sirop trois fois par jour.»', ['Prenez', 'ce', 'sirop', 'trois', 'fois', 'par', 'jour'], 'Prenez ce sirop trois fois par jour.', 'Imperativo.'),
        livre('Escreva em francês: Dói minha cabeça desde ontem. Eu me sinto cansado. Gostaria de um remédio para a tosse.', 'J\'ai mal à la tête depuis hier. Je me sens fatigué. Je voudrais un médicament contre la toux.'),
        lacuna('Elle a mal ___ mains. (às)', ['au', 'à la', 'aux'], 'aux', 'Plural: «à + les» vira «aux».'),
        lacuna('Il a mal ___ estomac. (ao)', ['à l\'', 'au', 'à la'], 'à l\'', 'Diante de vogal, usa-se «à l\'».'),
        lacuna('Je me ___ mal depuis ce matin. (sinto)', ['sent', 'sens', 'sentons'], 'sens', 'Com «je», «se sentir» faz «je me sens».'),
        lacuna('Ça a commencé ___ trois jours. (há)', ['depuis', 'dans', 'il y a'], 'il y a', '«Il y a» + passé composé: o início, há tempo.'),
        lacuna('Il faut ___ beaucoup d\'eau. (beber)', ['boire', 'bu', 'bois'], 'boire', 'Depois de «il faut», usa-se o infinitivo.'),
        mc('Qual frase está correta?', ['Je lave mes mains.', 'Je me lave les mains.', 'Je me lave mes mains.'], 'Je me lave les mains.', 'Partes do corpo usam o artigo definido: «les mains».'),
        mc('Como dizer «Estou resfriado»?', ['J\'ai enrhumé.', 'Je suis un rhume.', 'Je suis enrhumé.'], 'Je suis enrhumé.', '«Être enrhumé» = estar resfriado.'),
        mc('Como o médico pergunta onde dói?', ['Où avez-vous mal ?', 'Qui avez-vous mal ?', 'Où êtes-vous mal ?'], 'Où avez-vous mal ?', '«Où» pergunta o lugar; a dor usa «avoir mal».'),
        mc('O que significa «sans ordonnance»?', ['com receita', 'sem receita', 'sem dor'], 'sem receita', '«Ordonnance» é a receita médica.'),
        ordem('Ordene: «Ele está com dor de barriga desde esta manhã.»', ['Il', 'a', 'mal', 'au', 'ventre', 'depuis', 'ce', 'matin'], 'Il a mal au ventre depuis ce matin.', '«Avoir mal à» + «depuis».'),
        ordem('Ordene: «Eu gostaria de um xarope contra o resfriado.»', ['Je', 'voudrais', 'un', 'sirop', 'contre', 'le', 'rhume'], 'Je voudrais un sirop contre le rhume.', '«Contre» + problema.'),
        livre('Escreva em francês: Eu tenho dor nas pernas. Ela tem febre desde ontem.', 'J\'ai mal aux jambes. Elle a de la fièvre depuis hier.'),
        livre('Escreva em francês: É preciso beber água. Tomem (vous) um comprimido duas vezes por dia.', 'Il faut boire de l\'eau. Prenez un comprimé deux fois par jour.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma doença ou dor que você já teve e como cuidou dela.'),
    ]),
  ],
});
