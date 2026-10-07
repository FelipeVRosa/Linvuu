import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 8, titulo: 'A cidade: il y a, lugares e demonstrativos', nivel: 'a1',
  objetivo: 'Dizer o que existe na cidade com «il y a», situar lugares com preposições e usar os demonstrativos «ce», «cet», «cette» e «ces».',
  nota: 'Você descreve a cidade, pergunta onde fica algo e aponta objetos. Próxima aula: comida, partitivos e restaurante.',
  sessoes: [
    sessao('S1', 'Lugares da cidade e il y a', [
      revisao(5, 'Diga a data de hoje e a hora, em voz alta, e o que você faz toda segunda.'),
      palavras(8, [
        ['la banque', 'la bãk', 'o banco', ''], ['la poste', 'la post', 'o correio', ''], ['la gare', 'la gar', 'a estação', ''], ['la pharmacie', 'la farmasi', 'a farmácia', ''], ['le supermarché', 'lê süpermarxé', 'o supermercado', ''], ['la boulangerie', 'la bulãjri', 'a padaria', ''], ['l\'hôpital', 'lopital', 'o hospital', ''], ['l\'école', 'lékol', 'a escola', ''],
      ]),
      gramatica(12, 'Il y a: existir e haver', 'PASSO 1: «il y a» significa «há» ou «tem» e serve para dizer que algo existe: «Il y a une banque ici.» PASSO 2: o verbo não muda com o número: «Il y a une banque», «Il y a deux banques.» Sempre «il y a». PASSO 3: pergunte com «Est-ce qu\'il y a… ?» ou subindo a voz: «Il y a une pharmacie près d\'ici ?» PASSO 4: na negação, «il n\'y a pas de»: «Il n\'y a pas de pharmacie.» O artigo vira «de». PASSO 5: use o artigo indefinido depois de «il y a»: «Il y a un café», «Il y a des magasins.» PASSO 6: não confunda «il y a» (existe) com «c\'est» (identifica): «Il y a un homme.» «C\'est Paul.» PASSO 7: para apontar, «voici» (aqui está) e «voilà» (ali está): «Voilà la gare !» PASSO 8: «il y a» também fala de tempo passado («há dois anos»), mas isso fica para mais adiante.', {
        tag: 'Il y a',
        comparacao: 'em português «há» e «tem» fazem o mesmo trabalho («há uma banca aqui»), mas o francês só tem «il y a», uma expressão fixa que nunca varia com o número.',
        tabela: [
          { funcao: 'existência', frase: 'Il y a une banque ici.' }, { funcao: 'plural', frase: 'Il y a deux banques.' }, { funcao: 'pergunta', frase: 'Est-ce qu\'il y a une pharmacie ?' }, { funcao: 'negação', frase: 'Il n\'y a pas de pharmacie.' }, { funcao: 'apontar', frase: 'Voilà la gare !' },
        ],
        erros: [['Il y a des banque.', 'Il y a des banques.', 'Plural com «des» e «-s».'], ['Il n\'y a pas une pharmacie.', 'Il n\'y a pas de pharmacie.', 'Depois da negação, «de».'], ['Ils y ont deux banques.', 'Il y a deux banques.', '«Il y a» não varia.'], ['C\'est un café ici. (existência)', 'Il y a un café ici.', 'Existir = «il y a»; identificar = «c\'est».']],
      }),
      producao(5, 'Diga cinco coisas que há na sua rua e duas que não há, com «il y a» e «il n\'y a pas de».'),
    ]),
    sessao('S2', 'Preposições de lugar', [
      revisao(4, 'Responda: «Qu\'est-ce qu\'il y a dans votre ville ? Il y a… Il n\'y a pas de…»'),
      palavras(6, [
        ['devant', 'devã', 'na frente de', ''], ['derrière', 'deryér', 'atrás de', ''], ['à côté de', 'a kôté de', 'ao lado de', ''], ['en face de', 'ã fas de', 'em frente a', ''], ['entre', 'ãtr', 'entre', ''], ['près de', 'pré de', 'perto de', ''],
      ]),
      gramatica(12, 'Onde fica? Preposições de lugar', 'PASSO 1: as preposições com «de» se contraem com o artigo: «à côté du café» (de + le), «en face de la gare», «près de l\'hôpital», «loin des magasins» (de + les). PASSO 2: as preposições sem «de» são seguidas direto do substantivo: «devant la banque», «derrière l\'école», «entre la banque et la poste», «dans la rue», «sur la table», «sous la table». PASSO 3: para perguntar onde fica: «Où est la gare ?» ou «Où se trouve la gare ?». PASSO 4: responder: «La gare est près de la poste.» PASSO 5: direções simples: «à gauche», «à droite», «tout droit». «Tournez à gauche» (vire à esquerda). PASSO 6: «ici» (aqui), «là» (lá), «là-bas» (lá longe). PASSO 7: «dans» é «dentro de»; «en» não substitui «dans» com lugares fechados: «dans la maison», «en France».', {
        tag: 'Preposições',
        comparacao: 'em português «ao lado do», «em frente à», «perto do» também se contraem com o artigo. A mesma lógica vale para o francês: «à côté du», «en face de la», «près de l\'».',
        tabela: [
          { preposicao: 'devant', exemplo: 'devant la banque', sentido: 'na frente de' }, { preposicao: 'derrière', exemplo: 'derrière l\'école', sentido: 'atrás de' }, { preposicao: 'à côté de', exemplo: 'à côté du café', sentido: 'ao lado de' }, { preposicao: 'en face de', exemplo: 'en face de la gare', sentido: 'em frente a' }, { preposicao: 'près de / loin de', exemplo: 'près de la poste', sentido: 'perto / longe' },
        ],
        erros: [['à côté le café', 'à côté du café', 'À côté de + le = du.'], ['en face la gare', 'en face de la gare', 'Falta «de».'], ['près la poste', 'près de la poste', 'Falta «de».'], ['Je tourne à la gauche.', 'Je tourne à gauche.', '«À gauche» sem artigo.']],
      }),
      producao(8, 'Descreva em voz alta oito lugares do seu bairro e onde ficam: «La banque est à côté de… La gare est en face de…»'),
    ]),
    sessao('S3', 'Demonstrativos e pedir informações', [
      revisao(4, 'Complete: «La poste est ___ la banque. Il y a une pharmacie ___ la gare.»'),
      palavras(5, [
        ['ce', 'se', 'este, esse (masculino)', ''], ['cet', 'set', 'este, esse (masculino + vogal)', ''], ['cette', 'set', 'esta, essa', ''], ['ces', 'sê', 'estes, esses, estas, essas', ''], ['Excusez-moi', 'ékskuzê-muá', 'com licença', ''],
      ]),
      gramatica(8, 'Ce, cet, cette, ces', 'PASSO 1: os demonstrativos concordam com o substantivo: «ce livre» (masculino), «cette table» (feminino), «ces livres / ces tables» (plural). PASSO 2: diante de vogal ou «h» mudo, o masculino é «cet»: «cet hôtel», «cet ami». «Cet» e «cette» soam igual. PASSO 3: para distinguir perto e longe, junte «-ci» (aqui) ou «-là» (lá): «ce livre-ci», «cette maison-là». PASSO 4: o demonstrativo substitui o artigo: «ce café», nunca «le ce café». PASSO 5: para pedir informação com educação: «Excusez-moi, où est la gare ?» / «Pardon, il y a une pharmacie près d\'ici ?» PASSO 6: para agradecer e fechar: «Merci beaucoup, madame.»', {
        tag: 'Demonstrativos',
        comparacao: 'o português tem «este / esse / aquele»; o francês tem uma só série, «ce / cet / cette / ces», e usa «-ci» e «-là» quando precisa distinguir. Sem sufixo, o contexto diz qual é.',
        tabela: [
          { genero: 'masculino', singular: 'ce café', plural: 'ces cafés' }, { genero: 'masculino + vogal', singular: 'cet hôtel', plural: 'ces hôtels' }, { genero: 'feminino', singular: 'cette gare', plural: 'ces gares' }, { genero: 'perto / longe', singular: 'ce livre-ci / ce livre-là', plural: 'ces livres-ci / ces livres-là' },
        ],
        erros: [['ce hôtel', 'cet hôtel', 'Masculino diante de vogal ou «h» mudo: «cet».'], ['cette livre', 'ce livre', '«Livre» é masculino.'], ['le ce café', 'ce café', 'O demonstrativo substitui o artigo.'], ['ces cafe', 'ces cafés', 'Plural leva «-s».']],
      }),
      dialogo(8, 'Dans la rue / Na rua', 'Paul pergunta o caminho a Claire.', [
        ['Paul', 'Excusez-moi, madame. Il y a une pharmacie près d\'ici ?', 'Com licença, senhora. Tem uma farmácia perto daqui?'], ['Claire', 'Oui. Vous voyez cette rue, à droite ?', 'Tem sim. O senhor vê aquela rua, à direita?'], ['Paul', 'Oui, je vois.', 'Sim, vejo.'], ['Claire', 'La pharmacie est dans cette rue, en face de la boulangerie.', 'A farmácia fica nessa rua, em frente à padaria.'], ['Paul', 'Merci beaucoup, madame. C\'est loin ?', 'Muito obrigado, senhora. É longe?'], ['Claire', 'Non, c\'est tout près. Bonne journée !', 'Não, é bem perto. Bom dia!'],
      ]),
      producao(5, 'Pergunte a um colega imaginário onde fica um lugar e dê as direções, usando «ce», «cette», «à droite», «à gauche», «tout droit».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 8', [
      revisao(5, 'Descreva em voz alta a rua da sua casa: o que há, o que não há e onde fica cada coisa.'),
      exercicios(20, [
        ouvir('Il y a une pharmacie ici', ['Il y a une pharmacie ici', 'Il n\'y a pas de pharmacie ici', 'C\'est une pharmacie'], 'Il y a une pharmacie ici', 'Ouça «il y a».'), ouvir('La banque est à côté du café', ['La banque est à côté du café', 'La banque est devant le café', 'La banque est derrière le café'], 'La banque est à côté du café', 'Ouça «à côté du».'), ouvir('Cet hôtel est grand', ['Cet hôtel est grand', 'Cette gare est grande', 'Ces hôtels sont grands'], 'Cet hôtel est grand', 'Ouça «cet».'),
        ditado('Il n\'y a pas de banque', 'Escreva: Il n\'y a pas de banque.'), ditado('La gare est en face de la poste', 'Escreva: La gare est en face de la poste.'), ditado('Excusez-moi, où est la gare', 'Escreva: Excusez-moi, où est la gare.'),
        mc('Qual frase está correta?', ['Il y a deux banques.', 'Ils y ont deux banques.', 'Il y a deux banque.'], 'Il y a deux banques.', '«Il y a» é invariável.'), mc('Como se diz «ao lado do café»?', ['à côté du café', 'à côté le café', 'à côté de le café'], 'à côté du café', 'de + le = du.'), mc('Qual demonstrativo acompanha «hôtel»?', ['cet', 'ce', 'cette'], 'cet', 'Masculino + vogal ou «h» mudo.'), mc('Qual frase está correta na negação?', ['Il n\'y a pas de pharmacie.', 'Il n\'y a pas une pharmacie.', 'Il y a pas pharmacie.'], 'Il n\'y a pas de pharmacie.', 'Depois da negação, «de».'),
        lacuna('La gare est ___ de la poste. (perto)', ['près', 'devant', 'entre'], 'près', '«Près de».'), lacuna('Il y a un café ___ la banque et la poste. (entre)', ['entre', 'derrière', 'devant'], 'entre', '«Entre… et…».'), lacuna('___ maison est grande. (esta)', ['Cette', 'Ce', 'Cet'], 'Cette', 'Maison é feminino.'), lacuna('Tournez à ___ . (esquerda)', ['gauche', 'droite', 'droit'], 'gauche', '«À gauche».'),
        ordem('Ordene: «La pharmacie est en face de la boulangerie.»', ['La', 'pharmacie', 'est', 'en', 'face', 'de', 'la', 'boulangerie'], 'La pharmacie est en face de la boulangerie.', 'En face de + artigo.'), ordem('Ordene: «Il y a un café près d\'ici.»', ['Il', 'y', 'a', 'un', 'café', 'près', 'd\'ici'], 'Il y a un café près d\'ici.', 'Il y a + indefinido.'),
        livre('Escreva em francês: Tem uma farmácia perto daqui? A farmácia fica em frente ao banco.', 'Il y a une pharmacie près d\'ici ? La pharmacie est en face de la banque.'),
      ]),
      producao(5, 'Dê, em voz alta, o caminho da sua casa até uma farmácia, usando preposições de lugar e direções.'),
    ]),
  ],
});
