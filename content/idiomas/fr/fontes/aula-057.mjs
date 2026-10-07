import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 57, titulo: 'Cultura e arte: falar de livros, filmes e música', nivel: 'b1',
  objetivo: 'Apresentar e criticar uma obra (livro, filme, exposição, música) e reconhecer o passé simple, o tempo da narrativa literária.',
  nota: 'Você consegue recomendar e criticar uma obra e reconhece o passé simple ao ler. Próxima aula: viagem avançada.',
  sessoes: [
    sessao('S1', 'Apresentar uma obra', [
      revisao(5, 'Dê sua opinião em voz alta sobre um filme usando «ce qui m\'a plu», «en revanche» e «bref».'),
      palavras(8, [
        ['un roman', 'ẽ romã', 'um romance', ''], ['un auteur', 'ẽ notör', 'um autor', ''], ['un réalisateur', 'ẽ réalizatör', 'um diretor (de cinema)', ''], ['une exposition', 'ün ékspozisió', 'uma exposição', ''], ['un tableau', 'ẽ tablô', 'um quadro', ''], ['une chanson', 'ün xãsõ', 'uma canção', ''], ['l\'intrigue', 'lẽtrig', 'o enredo', ''], ['un personnage', 'ẽ personaj', 'um personagem', ''],
      ]),
      gramatica(12, 'Dizer do que se trata', 'PASSO 1: título e autor: «C\'est un roman de Camus.» «C\'est un film de Truffaut.» PASSO 2: o assunto: «Il s\'agit de…» + substantivo: «Il s\'agit d\'un jeune homme qui cherche son père.» PASSO 3: «raconter» e «mettre en scène» descrevem o enredo: «Le film raconte l\'histoire d\'une famille.» «Le roman met en scène un détective.» PASSO 4: época e lugar: «L\'action se déroule à Paris en 1940.» PASSO 5: relativos ligam as informações: «C\'est un livre qui parle d\'amour.» «C\'est un film que j\'ai vu hier.» PASSO 6: «Il s\'agit de» é impessoal e fica sempre em «il»: «Dans ce livre, il s\'agit de la guerre.» (e não «ele se trata»)', {
        tag: 'Obras',
        comparacao: 'em português «trata-se de» e «o filme se passa em» têm correspondentes diretos: «il s\'agit de» e «l\'action se déroule». Cuidado: «il s\'agit de» nunca tem sujeito pessoa: não existe «Le livre s\'agit de…».',
        tabela: [
          { expressao: 'C\'est un roman de…', funcao: 'apresenta', exemplo: 'C\'est un roman de Camus.' }, { expressao: 'Il s\'agit de…', funcao: 'assunto', exemplo: 'Il s\'agit d\'un jeune homme.' }, { expressao: 'raconter', funcao: 'enredo', exemplo: 'Le film raconte l\'histoire d\'une famille.' }, { expressao: 'mettre en scène', funcao: 'personagens', exemplo: 'Le roman met en scène un détective.' }, { expressao: 'se dérouler', funcao: 'lugar e época', exemplo: 'L\'action se déroule à Paris.' }, { expressao: 'parler de', funcao: 'tema', exemplo: 'C\'est un livre qui parle d\'amour.' },
        ],
        erros: [['Le livre s\'agit de la guerre.', 'Dans ce livre, il s\'agit de la guerre.', '«Il s\'agit de» é impessoal.'], ['Le film raconte de l\'histoire.', 'Le film raconte l\'histoire d\'une famille.', '«Raconter» + objeto direto.'], ['L\'action déroule à Paris.', 'L\'action se déroule à Paris.', 'Verbo pronominal.'], ['C\'est un film qui j\'ai vu.', 'C\'est un film que j\'ai vu.', 'Objeto: «que».']],
      }),
      producao(5, 'Apresente em voz alta um livro ou filme que você conhece: título, assunto e onde se passa.'),
    ]),
    sessao('S2', 'O passé simple na leitura', [
      revisao(4, 'Diga três frases sobre uma obra com «il s\'agit de», «raconter» e «se dérouler».'),
      palavras(6, [
        ['il fut', 'il füt', 'ele foi', ''], ['il eut', 'il ü', 'ele teve', ''], ['il fit', 'il fi', 'ele fez', ''], ['il dit', 'il di', 'ele disse', ''], ['il vint', 'il vẽ', 'ele veio', ''], ['il naquit', 'il naki', 'ele nasceu', ''],
      ]),
      gramatica(12, 'Reconhecer, não falar', 'PASSO 1: o passé simple é um tempo de livros, jornais históricos e biografias. Na fala, usa-se o passé composé. Você só precisa reconhecê-lo. PASSO 2: verbos em -er: terminações -a (ele) e -èrent (eles): «il parla, ils parlèrent». PASSO 3: verbos em -ir e -re: -it e -irent: «il finit, ils finirent», «il répondit». PASSO 4: irregulares frequentes: «être → il fut», «avoir → il eut», «faire → il fit», «dire → il dit», «venir → il vint», «voir → il vit», «pouvoir → il put», «vouloir → il voulut», «naître → il naquit», «mourir → il mourut». PASSO 5: ele narra ações concluídas e em sequência: «Il ouvrit la porte, entra et s\'assit.» PASSO 6: para ler, troque mentalmente pelo passé composé: «il fit» = «il a fait».', {
        tag: 'Passé simple',
        comparacao: 'em português, «ele fez» (pretérito perfeito) serve para a fala e para a escrita. O francês divide: «il a fait» na conversa e «il fit» em livros e biografias. Por isso, ao ler um romance, «il fut» é só «ele foi».',
        tabela: [
          { verbo: 'parler', exemplo: 'il parla · ils parlèrent' }, { verbo: 'finir', exemplo: 'il finit · ils finirent' }, { verbo: 'être', exemplo: 'il fut · ils furent' }, { verbo: 'avoir', exemplo: 'il eut · ils eurent' }, { verbo: 'faire', exemplo: 'il fit · ils firent' }, { verbo: 'naître', exemplo: 'il naquit · ils naquirent' },
        ],
        erros: [['Hier, il fit un gâteau. (conversa)', 'Hier, il a fait un gâteau.', 'Na fala: passé composé.'], ['Il parlit.', 'Il parla.', '-er: terminação -a.'], ['Il finissa.', 'Il finit.', '-ir: terminação -it.'], ['Il naîtit en 1900.', 'Il naquit en 1900.', 'Irregular.']],
      }),
      producao(8, 'Leia em voz alta: «Il naquit à Lyon, fit des études de droit, puis vint à Paris.» Depois reescreva no passé composé e diga de novo.'),
    ]),
    sessao('S3', 'Criticar e recomendar', [
      revisao(4, 'Diga duas frases no passé composé equivalentes a «il fit» e «il vint».'),
      palavras(5, [
        ['émouvant', 'émuvã', 'comovente', ''], ['ennuyeux', 'ãnüiiö', 'entediante', ''], ['original', 'orijinal', 'original', ''], ['à voir', 'a vuar', 'vale a pena ver', ''], ['à lire', 'a lir', 'vale a pena ler', ''],
      ]),
      gramatica(8, 'Dar a sua opinião', 'PASSO 1: gosto: «J\'ai adoré», «Ça m\'a beaucoup plu», «Je n\'ai pas du tout aimé». PASSO 2: descrever o efeito: «Ça m\'a ému(e)», «Ça m\'a fait penser à…», «Ça m\'a ennuyé(e)». PASSO 3: recomendar: «C\'est à voir !», «C\'est à lire absolument.» PASSO 4: matizar: «C\'est original, mais un peu long.» PASSO 5: comparar: «C\'est moins bien que son premier film.»', {
        tag: 'Crítica',
        comparacao: 'em português «vale a pena ver» não tem tradução curta; o francês resolve com «c\'est à voir». Já «ça m\'a fait penser à» significa «me fez lembrar de».',
        tabela: [
          { expressao: 'J\'ai adoré.', funcao: 'gosto forte', exemplo: 'J\'ai adoré ce roman.' }, { expressao: 'Ça m\'a plu.', funcao: 'gosto', exemplo: 'Ça m\'a beaucoup plu.' }, { expressao: 'Ça m\'a ému.', funcao: 'efeito', exemplo: 'Ce film m\'a ému.' }, { expressao: 'Ça m\'a fait penser à…', funcao: 'associação', exemplo: 'Ça m\'a fait penser à mon enfance.' }, { expressao: 'C\'est à voir.', funcao: 'recomenda', exemplo: 'Cette expo est à voir !' }, { expressao: 'C\'est un peu long.', funcao: 'crítica suave', exemplo: 'C\'est original, mais un peu long.' },
        ],
        erros: [['Je suis adoré ce film.', 'J\'ai adoré ce film.', 'Auxiliar «avoir».'], ['Ça m\'a plu beaucoup.', 'Ça m\'a beaucoup plu.', '«Beaucoup» antes do particípio.'], ['C\'est à voir ça.', 'C\'est à voir !', 'Sem «ça».'], ['Ça m\'a fait penser de mon enfance.', 'Ça m\'a fait penser à mon enfance.', '«Penser à».']],
      }),
      texto(8, 'Une critique de film', 'Hier, j\'ai vu un film qui raconte l\'histoire d\'une jeune pianiste. L\'action se déroule à Lyon dans les années 1960. J\'ai adoré la musique, qui m\'a vraiment ému. En revanche, la fin est un peu longue. Bref, c\'est un film à voir, même s\'il n\'est pas parfait.', 'Ontem, vi um filme que conta a história de uma jovem pianista. A ação se passa em Lyon nos anos 1960. Adorei a música, que realmente me comoveu. Em compensação, o final é um pouco longo. Enfim, é um filme que vale a pena ver, mesmo que não seja perfeito.', [['De que trata o filme?', 'De uma jovem pianista.'], ['Onde e quando se passa?', 'Em Lyon, nos anos 1960.'], ['O que o autor critica?', 'O final, um pouco longo.']]),
      producao(5, 'Recomende em voz alta um livro, filme ou música, dizendo o que você gostou e o que não gostou.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 57', [
      revisao(5, 'Conte em voz alta a vida de uma pessoa famosa usando passé composé: nasceu, fez, morreu.'),
      exercicios(20, [
        ouvir('Il s\'agit d\'un jeune homme', ['Il s\'agit d\'un jeune homme', 'Il agit d\'un jeune homme', 'Il s\'agit un jeune homme'], 'Il s\'agit d\'un jeune homme', '«Il s\'agit de».'), ouvir('L\'action se déroule à Paris', ['L\'action se déroule à Paris', 'L\'action déroule à Paris', 'L\'action se déroule en Paris'], 'L\'action se déroule à Paris', 'Pronominal.'), ouvir('Il fit des études de droit', ['Il fit des études de droit', 'Il fut des études de droit', 'Il dit des études de droit'], 'Il fit des études de droit', 'Passé simple de «faire».'),
        ditado('Ce film est à voir', 'Escreva: Ce film est à voir.'), ditado('Ça m\'a fait penser à mon enfance', 'Escreva: Ça m\'a fait penser à mon enfance.'), ditado('Il naquit à Lyon', 'Escreva: Il naquit à Lyon.'),
        mc('«Il fut» é o passé simple de:', ['être', 'avoir', 'faire'], 'être', 'Ele foi.'), mc('«Il eut» significa:', ['ele teve', 'ele foi', 'ele fez'], 'ele teve', 'Avoir.'), mc('Na conversa se usa:', ['passé composé', 'passé simple', 'plus-que-parfait'], 'passé composé', 'Fala.'), mc('Qual frase está correta?', ['Dans ce livre, il s\'agit de la guerre.', 'Ce livre s\'agit de la guerre.', 'Ce livre il agit de la guerre.'], 'Dans ce livre, il s\'agit de la guerre.', 'Impessoal.'),
        lacuna('Le film ___ l\'histoire d\'une famille. (raconter)', ['raconte', 'raconter', 'racontent'], 'raconte', 'Presente.'), lacuna('Il ___ en 1900. (naître, passé simple)', ['naquit', 'naissait', 'naîtra'], 'naquit', 'Passé simple.'), lacuna('C\'est un livre ___ parle d\'amour.', ['qui', 'que', 'dont'], 'qui', 'Sujeito.'), lacuna('Cette expo est ___ voir !', ['à', 'de', 'pour'], 'à', '«À voir».'),
        ordem('Ordene: «Il ouvrit la porte et entra.»', ['Il', 'ouvrit', 'la', 'porte', 'et', 'entra'], 'Il ouvrit la porte et entra.', 'Passé simple.'), ordem('Ordene: «C\'est un film à voir.»', ['C\'est', 'un', 'film', 'à', 'voir'], 'C\'est un film à voir.', 'Recomendação.'),
        livre('Escreva em francês: Adorei esse romance. Trata-se de uma família em Paris. Vale a pena ler.', 'J\'ai adoré ce roman. Il s\'agit d\'une famille à Paris. C\'est à lire.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma obra que mudou a sua visão de algo.'),
    ]),
  ],
});
