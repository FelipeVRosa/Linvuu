import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 29, titulo: 'O imperativo com pronomes e as instruções', nivel: 'a2',
  objetivo: 'Usar o imperativo afirmativo e negativo com pronomes («donne-le-moi», «ne le fais pas»), dar instruções, receitas e regras.',
  nota: 'Você dá instruções e ordens com clareza. Próxima aula: casa, aluguel e vida na cidade.',
  sessoes: [
    sessao('S1', 'Imperativo com um pronome', [
      revisao(5, 'Escreva, em voz alta, um e-mail curto de confirmação de reunião.'),
      palavras(8, [
        ['donne-moi', 'don-muá', 'dê-me', ''], ['dis-lui', 'di-lüi', 'diga-lhe', ''], ['regarde-le', 'regard-lö', 'olhe-o', ''], ['écoute-la', 'ekut-la', 'ouça-a', ''], ['attends-moi', 'atã-muá', 'espere-me', ''], ['vas-y', 'vaz-i', 'vá lá', ''], ['prends-en', 'prãz-ã', 'pegue (disso)', ''], ['ne le fais pas', 'nö lö fé pa', 'não o faça', ''],
      ]),
      gramatica(12, 'Donne-le-moi ! Ne le fais pas !', 'PASSO 1: no imperativo AFIRMATIVO, o pronome vem DEPOIS do verbo, ligado por hífen: «Regarde-le !» «Écoute-moi !» «Donne-lui le livre.» PASSO 2: «me» e «te» viram «moi» e «toi» no final: «Écoute-moi.» «Lève-toi.» PASSO 3: com dois pronomes, o direto vem primeiro: «Donne-le-moi.» «Dis-le-lui.» «Envoie-les-nous.» PASSO 4: no imperativo NEGATIVO, o pronome volta para ANTES do verbo, como no presente: «Ne le regarde pas !» «Ne me dis pas ça !» «Ne le lui donne pas !» PASSO 5: «y» e «en» também vão depois no afirmativo, e o verbo ganha «s» quando termina em «e»: «Vas-y !» «Prends-en !» «Manges-en !» PASSO 6: com verbos pronominais: «Lève-toi !» «Assieds-toi !» «Dépêchez-vous !» PASSO 7: negativo pronominal: «Ne te lève pas !» «Ne vous dépêchez pas !» PASSO 8: «tu», «nous» e «vous» formam o imperativo: «Mange !» «Mangeons !» «Mangez !» (o «s» do «tu» some nos verbos em «-er», exceto antes de «y» e «en»).', {
        tag: 'Imperativo',
        comparacao: 'em português dizemos «dê-me», «dê-lhe», «não me dê». O francês é parecido: afirmativo com o pronome depois («donne-moi») e negativo com o pronome antes («ne me donne pas»). Diferença: o hífen e a troca «me → moi».',
        tabela: [
          { tipo: 'afirmativo', exemplo: 'Regarde-le !', nota: 'pronome depois, com hífen' }, { tipo: 'afirmativo com «moi»', exemplo: 'Écoute-moi !', nota: '«me» vira «moi»' }, { tipo: 'dois pronomes', exemplo: 'Donne-le-moi !', nota: 'direto + indireto' }, { tipo: 'negativo', exemplo: 'Ne le regarde pas !', nota: 'pronome antes do verbo' }, { tipo: 'com y/en', exemplo: 'Vas-y ! Prends-en !', nota: 'o «s» volta' },
        ],
        erros: [['Le regarde !', 'Regarde-le !', 'No afirmativo, o pronome vem depois.'], ['Ne regarde-le pas !', 'Ne le regarde pas !', 'No negativo, antes.'], ['Écoute-me !', 'Écoute-moi !', '«Me» vira «moi».'], ['Va-y !', 'Vas-y !', 'O «s» volta antes de «y».']],
      }),
      producao(5, 'Dê dez ordens em voz alta: cinco afirmativas e cinco negativas, com pronomes.'),
    ]),
    sessao('S2', 'Instruções e receitas', [
      revisao(4, 'Transforme em ordem: «Tu donnes le livre à moi. Tu ne le regardes pas.»'),
      palavras(6, [
        ['couper', 'kupé', 'cortar', ''], ['mélanger', 'melãjé', 'misturar', ''], ['ajouter', 'ajuté', 'acrescentar', ''], ['faire cuire', 'fér küir', 'cozinhar', ''], ['laisser reposer', 'léssé repozé', 'deixar descansar', ''], ['servir', 'servir', 'servir', ''],
      ]),
      gramatica(12, 'Instruções, regras e receitas', 'PASSO 1: em receitas e instruções, use o imperativo (vous) ou o infinitivo: «Coupez les oignons.» «Mélanger les ingrédients.» PASSO 2: use os conectores: «d\'abord, ensuite, puis, enfin, après»: «D\'abord, coupez les légumes. Ensuite, ajoutez le sel.» PASSO 3: tempos de preparo: «faites cuire pendant vingt minutes», «laissez reposer une heure». PASSO 4: regras: «Il est interdit de fumer.» «Il ne faut pas parler fort.» «Défense de stationner.» PASSO 5: avisos: «Attention !», «Prudence !», «Ne touchez pas !» PASSO 6: «il faut» + infinitivo para obrigação: «Il faut mélanger pendant cinq minutes.» PASSO 7: na língua falada, use o imperativo «tu» com amigos: «Coupe les oignons, ajoute le sel, mélange bien.» PASSO 8: placas e avisos mais comuns: «Sortie», «Entrée libre», «Ne pas déranger».', {
        tag: 'Imperativo',
        comparacao: 'em receitas, o português usa o infinitivo («misturar», «cozinhar») ou o imperativo («misture»). O francês faz as duas coisas, mas o infinitivo é mais comum em livros e embalagens. Para amigos, use o imperativo «tu».',
        tabela: [
          { uso: 'receita (vous)', exemplo: 'Coupez les oignons, puis ajoutez le sel.' }, { uso: 'receita (infinitivo)', exemplo: 'Mélanger les ingrédients.' }, { uso: 'regra', exemplo: 'Il est interdit de fumer.' }, { uso: 'obrigação', exemplo: 'Il faut mélanger pendant cinq minutes.' }, { uso: 'aviso', exemplo: 'Ne touchez pas !' },
        ],
        erros: [['Il est interdit fumer.', 'Il est interdit de fumer.', '«Interdit de» + infinitivo.'], ['Il faut de mélanger.', 'Il faut mélanger.', 'Sem preposição.'], ['Coupez-les oignons.', 'Coupez les oignons.', 'Hífen só com pronome; aqui é artigo.'], ['Ne touchez-pas !', 'Ne touchez pas !', 'Sem hífen na negação.']],
      }),
      producao(8, 'Explique em voz alta uma receita simples (omelete, salada, café) em oito passos com imperativo.'),
    ]),
    sessao('S3', 'Regras e conselhos do dia a dia', [
      revisao(4, 'Dê três ordens afirmativas e três negativas em voz alta.'),
      palavras(5, [
        ['il est interdit', 'il é ẽterdi', 'é proibido', ''], ['défense de', 'defãs dö', 'proibido', ''], ['il est conseillé', 'il é kõseié', 'é aconselhável', ''], ['attention à', 'atãsiõ a', 'atenção a', ''], ['faites attention', 'fét atãsiõ', 'preste atenção', ''],
      ]),
      gramatica(8, 'Regras, avisos e conselhos', 'PASSO 1: para uma regra: «Il est interdit de fumer.» «Défense de stationner.» PASSO 2: para um conselho: «Il est conseillé de réserver.» «Il vaut mieux arriver tôt.» PASSO 3: para um aviso direto: «Attention à la marche !» «Faites attention au chien.» PASSO 4: para dar instrução polida: «Veuillez patienter.» «Veuillez ne pas fumer.» PASSO 5: para convidar com o imperativo: «Entrez !» «Asseyez-vous !» «Servez-vous !» «Faites comme chez vous !»', {
        tag: 'Imperativo',
        comparacao: 'em português escrevemos «é proibido fumar». O francês exige «de»: «il est interdit de fumer». E «veuillez» + infinitivo é uma forma educada de dar uma ordem em avisos e cartas.',
        tabela: [
          { tipo: 'proibição', frase: 'Il est interdit de fumer.' }, { tipo: 'conselho', frase: 'Il est conseillé de réserver.' }, { tipo: 'aviso', frase: 'Attention à la marche !' }, { tipo: 'convite', frase: 'Faites comme chez vous !' }, { tipo: 'pedido formal', frase: 'Veuillez patienter.' },
        ],
        erros: [['Il est interdit de fumez.', 'Il est interdit de fumer.', 'Infinitivo depois de «de».'], ['Attention de la marche !', 'Attention à la marche !', '«Attention à».'], ['Fait comme chez vous !', 'Faites comme chez vous !', 'Imperativo «vous».'], ['Veuillez de patienter.', 'Veuillez patienter.', 'Sem preposição.']],
      }),
      dialogo(8, 'Dans la cuisine / Na cozinha', 'Léa ensina Hugo a fazer uma omelete.', [
        ['Léa', 'D\'abord, casse quatre œufs dans un bol.', 'Primeiro, quebre quatro ovos em uma tigela.'], ['Hugo', 'Je les bats avec une fourchette ?', 'Bato-os com um garfo?'], ['Léa', 'Oui, bats-les bien. Ensuite, ajoute un peu de sel.', 'Sim, bata-os bem. Depois, acrescente um pouco de sal.'], ['Hugo', 'J\'en mets beaucoup ?', 'Ponho muito?'], ['Léa', 'Non, n\'en mets pas trop. Puis fais chauffer la poêle.', 'Não, não ponha demais. Depois aqueça a frigideira.'], ['Hugo', 'Et ensuite ?', 'E depois?'], ['Léa', 'Verse les œufs et laisse cuire trois minutes. C\'est prêt !', 'Despeje os ovos e deixe cozinhar três minutos. Está pronto!'],
      ]),
      producao(5, 'Explique a um amigo em voz alta como fazer uma receita que você conhece.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 29', [
      revisao(5, 'Dê instruções em voz alta: como preparar um café e como chegar a um lugar.'),
      exercicios(20, [
        ouvir('Donne-le-moi', ['Donne-le-moi', 'Me le donne', 'Donne-moi-le'], 'Donne-le-moi', 'Ouça a ordem.'), ouvir('Ne le regarde pas', ['Ne le regarde pas', 'Regarde-le', 'Ne regarde-le pas'], 'Ne le regarde pas', 'Ouça «ne le».'), ouvir('Il est interdit de fumer', ['Il est interdit de fumer', 'Il est conseillé de fumer', 'Il est interdit fumer'], 'Il est interdit de fumer', 'Ouça «interdit».'),
        ditado('Regarde-le', 'Escreva: Regarde-le.'), ditado('Ne me dis pas ça', 'Escreva: Ne me dis pas ça.'), ditado('Faites comme chez vous', 'Escreva: Faites comme chez vous.'),
        mc('Imperativo afirmativo com pronome:', ['Regarde-le !', 'Le regarde !', 'Regarde le !'], 'Regarde-le !', 'Pronome depois, hífen.'), mc('Imperativo negativo com pronome:', ['Ne le regarde pas !', 'Ne regarde-le pas !', 'Ne regarde pas le !'], 'Ne le regarde pas !', 'Pronome antes.'), mc('«Me» no imperativo afirmativo:', ['moi', 'me', 'je'], 'moi', '«Écoute-moi».'), mc('Qual frase está correta?', ['Vas-y !', 'Va-y !', 'Vas y !'], 'Vas-y !', 'O «s» volta.'),
        lacuna('Écoute-___ ! (me)', ['moi', 'me', 'je'], 'moi', '«Me» → «moi».'), lacuna('Il est interdit ___ fumer.', ['de', 'à', 'd\''], 'de', '«Interdit de».'), lacuna('Il est ___ de fumer. (proibido)', ['interdit', 'interdite', 'interdire'], 'interdit', 'Particípio masculino.'), lacuna('Ne ___ touchez pas ! (isso)', ['le', 'lui', 'moi'], 'le', 'Pronome antes do verbo.'),
        ordem('Ordene: «Dis-moi la vérité.»', ['Dis-moi', 'la', 'vérité'], 'Dis-moi la vérité.', 'Imperativo + pronome.'), ordem('Ordene: «Ne le fais pas !»', ['Ne', 'le', 'fais', 'pas'], 'Ne le fais pas !', 'Negativo.'),
        livre('Escreva em francês: Olhe-o! Não o olhe! Dê-o a mim!', 'Regarde-le ! Ne le regarde pas ! Donne-le-moi !'),
      ]),
      producao(5, 'Fale 1 minuto dando conselhos a um amigo, com imperativo e pronomes.'),
    ]),
  ],
});
