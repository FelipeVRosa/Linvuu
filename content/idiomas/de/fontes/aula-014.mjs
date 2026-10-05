import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 14, titulo: 'Pronomes no acusativo e a negação (kein e nicht)', nivel: 'a1',
  objetivo: 'Trocar o objeto direto por pronomes (ihn, sie, es, mich, dich…), negar substantivos com «kein» e todo o resto com «nicht», e responder a perguntas negativas com «doch».',
  nota: 'Você troca objetos por pronomes e nega corretamente. Próxima aula: compras e roupas.',
  sessoes: [
    sessao('S1', 'Os pronomes no acusativo', [
      revisao(5, 'Escreva o acusativo de «der Mann», «die Frau», «das Kind» e «die Kinder», com artigo definido.'),
      palavras(8, [
        ['brauchen', 'bráurren', 'precisar de', 'to need'], ['suchen', 'zúrren', 'procurar', 'to look for'], ['finden', 'fínden', 'achar, encontrar', 'to find'], ['lieben', 'líben', 'amar', 'to love'],
        ['mögen', 'mö-guen', 'gostar de', 'to like'], ['abholen', 'áp-hôlen', 'buscar (alguém)', 'to pick up'], ['einladen', 'áin-ladem', 'convidar', 'to invite'], ['fragen', 'frágen', 'perguntar', 'to ask'],
      ]),
      gramatica(14, 'Os pronomes no acusativo, passo a passo', 'PASSO 1: o OBJETO DIRETO é o que sofre a ação: em «Ich sehe den Mann», quem eu vejo é «den Mann». PASSO 2: para não repetir a palavra, trocamos o objeto por um pronome: «Ich sehe den Mann» → «Ich sehe ihn.» PASSO 3: o pronome segue o GÊNERO da palavra trocada: «der Tisch» → «ihn»; «die Lampe» → «sie»; «das Buch» → «es»; «die Bücher» → «sie». PASSO 4: para pessoas, os pronomes de «eu» e «tu» mudam de forma: «ich» → «mich», «du» → «dich». PASSO 5: cuidado com «sie» (ela, eles) e «Sie» (o senhor, a senhora): o contexto e a maiúscula mostram qual é qual. Lembre-se de que só o masculino muda no artigo (den); nos pronomes, mudam todos: ich → mich, du → dich, er → ihn, wir → uns, ihr → euch.', {
        tag: 'Pronomes',
        comparacao: 'o português também troca o pronome («eu vejo ele», «eu vejo você»). Em alemão cada pronome tem uma forma própria no acusativo, e a escolha depende do gênero da palavra.',
        tabela: [
          { nominativo: 'ich', acusativo: 'mich', exemplo: 'Er sieht mich.' }, { nominativo: 'du', acusativo: 'dich', exemplo: 'Ich liebe dich.' }, { nominativo: 'er', acusativo: 'ihn', exemplo: 'Ich kenne ihn.' }, { nominativo: 'sie (ela)', acusativo: 'sie', exemplo: 'Ich suche sie.' }, { nominativo: 'es', acusativo: 'es', exemplo: 'Ich finde es gut.' },
          { nominativo: 'wir', acusativo: 'uns', exemplo: 'Sie ruft uns an.' }, { nominativo: 'ihr', acusativo: 'euch', exemplo: 'Ich lade euch ein.' }, { nominativo: 'sie (eles)', acusativo: 'sie', exemplo: 'Ich kenne sie.' }, { nominativo: 'Sie (formal)', acusativo: 'Sie', exemplo: 'Ich verstehe Sie.' },
        ],
        exemplos: [['Wo ist der Schlüssel? Ich suche ihn.', 'Onde está a chave? Eu estou procurando por ela.'], ['Wo ist die Tasche? Ich finde sie nicht.', 'Onde está a bolsa? Eu não a encontro.'], ['Das Buch ist gut. Ich lese es gern.', 'O livro é bom. Eu gosto de lê-lo.']],
        erros: [['Ich sehe er.', 'Ich sehe ihn.', 'O objeto direto pede o acusativo.'], ['Ich liebe du.', 'Ich liebe dich.', '«du» vira «dich» no acusativo.']],
      }),
      producao(3, 'Troque os objetos por pronomes em voz alta: «Ich sehe den Mann → Ich sehe ihn», com 5 frases suas.'),
    ]),
    sessao('S2', 'Kein, keine: negar um substantivo', [
      revisao(5, 'Escreva os pronomes no acusativo para as 9 pessoas.'),
      palavras(8, [
        ['der Hunger', 'der rúnguer', 'fome', 'hunger'], ['der Durst', 'der durst', 'sede', 'thirst'], ['die Zeit', 'di tsait', 'tempo', 'time'], ['das Geld', 'das guélt', 'dinheiro', 'money'],
        ['die Lust', 'di lust', 'vontade', 'desire'], ['das Problem', 'das problém', 'problema', 'problem'], ['die Ahnung', 'di ánung', 'noção, ideia', 'idea'], ['das Auto', 'das áuto', 'carro', 'car'],
      ]),
      gramatica(12, '«Kein» e «keine»: negar um substantivo, passo a passo', 'PASSO 1: «kein» nega SUBSTANTIVOS. Use-o no lugar de «ein» ou quando o substantivo não tem artigo: «Ich habe ein Auto» → «Ich habe kein Auto.»; «Ich habe Zeit» → «Ich habe keine Zeit.» PASSO 2: «kein» tem as terminações de «ein»: masculino: kein (nominativo) e keinen (acusativo); feminino: keine; neutro: kein; plural: keine. PASSO 3: expressões fixas com «haben»: «Ich habe keinen Hunger», «keinen Durst», «keine Zeit», «keine Lust», «keine Ahnung» (não faço ideia). PASSO 4: lembre que o objeto direto masculino ganha -en: «keinen Hunger», «keinen Kaffee».', {
        tag: 'Verbos',
        tabela: [
          { genero: 'masculino', nominativo: 'kein Hund', acusativo: 'keinen Hund', exemplo: 'Ich habe keinen Hund.' }, { genero: 'feminino', nominativo: 'keine Katze', acusativo: 'keine Katze', exemplo: 'Ich habe keine Katze.' }, { genero: 'neutro', nominativo: 'kein Auto', acusativo: 'kein Auto', exemplo: 'Ich habe kein Auto.' }, { genero: 'plural', nominativo: 'keine Kinder', acusativo: 'keine Kinder', exemplo: 'Ich habe keine Kinder.' },
        ],
        erros: [['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Com substantivo, use «kein/keine».'], ['Ich habe kein Hunger.', 'Ich habe keinen Hunger.', '«Hunger» é masculino: objeto direto → keinen.']],
      }),
      producao(5, 'Diga 6 coisas que você não tem: «Ich habe keinen / keine / kein …»'),
    ]),
    sessao('S3', 'Nicht e a resposta «doch»', [
      revisao(5, 'Escreva 5 frases com «kein», «keine» e «keinen».'),
      palavras(6, [
        ['gar nicht', 'gar niçt', 'de jeito nenhum', 'not at all'], ['nicht mehr', 'niçt mér', 'não mais', 'no longer'], ['nur', 'nur', 'só, apenas', 'only'], ['aber', 'áber', 'mas', 'but'], ['leider', 'láider', 'infelizmente', 'unfortunately'], ['doch', 'dorr', 'sim! (contra uma negação)', 'yes, I do'],
      ]),
      gramatica(10, '«Nicht»: onde colocar, e como responder com «doch»', 'PASSO 1: «kein» nega SUBSTANTIVOS; «nicht» nega TODO O RESTO: o verbo, a frase inteira, um adjetivo ou um advérbio. PASSO 2: se nega a frase inteira, «nicht» vai para o FIM: «Ich arbeite heute nicht.» PASSO 3: se nega um adjetivo ou advérbio, vai ANTES dele: «Das Buch ist nicht teuer.» PASSO 4: com verbo separável, «nicht» vem antes do prefixo: «Ich stehe nicht auf.» PASSO 5: com modais, vem antes do infinitivo: «Ich kann nicht kommen.» PASSO 6: se alguém pergunta de forma NEGATIVA («Hast du keine Zeit?»), a resposta é «DOCH» para dizer «sim, tenho» e «Nein» para dizer «não, não tenho». «Doch» é a palavra que contradiz uma negação.', {
        tag: 'Verbos',
        tabela: [
          { situacao: 'nega a frase toda', exemplo: 'Ich arbeite heute nicht.' }, { situacao: 'nega um adjetivo', exemplo: 'Das Buch ist nicht teuer.' }, { situacao: 'nega um advérbio ou lugar', exemplo: 'Ich komme nicht aus Spanien.' }, { situacao: 'verbo separável', exemplo: 'Ich stehe nicht auf.' },
          { situacao: 'verbo modal', exemplo: 'Ich kann nicht kommen.' }, { situacao: 'resposta «doch»', exemplo: 'Hast du keine Zeit? — Doch, ich habe Zeit!' }, { situacao: 'resposta «nein»', exemplo: 'Hast du keine Zeit? — Nein, ich habe keine Zeit.' },
        ],
        erros: [['Ich nicht arbeite heute.', 'Ich arbeite heute nicht.', '«nicht» vai para o fim.'], ['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Substantivo: «keine».'], ['Hast du keine Zeit? — Ja, ich habe Zeit.', 'Hast du keine Zeit? — Doch, ich habe Zeit.', 'Contra uma negação use «doch», não «ja».']],
      }),
      dialogo(7, 'Hast du Zeit? / Você tem tempo?', 'Dois amigos combinam um jantar.', [
        ['Lea', 'Hast du heute Abend Zeit?', 'Você tem tempo hoje à noite?'], ['Paul', 'Nein, leider nicht. Ich habe keine Zeit.', 'Não, infelizmente não. Não tenho tempo.'], ['Lea', 'Hast du keinen Hunger? Wir können zusammen essen.', 'Você não está com fome? Podemos comer juntos.'],
        ['Paul', 'Doch, ich habe Hunger! Aber ich muss noch arbeiten.', 'Estou, sim! Mas ainda preciso trabalhar.'], ['Lea', 'Arbeitest du nicht um sechs Uhr?', 'Você não trabalha às seis?'], ['Paul', 'Doch, aber heute arbeite ich bis acht.', 'Trabalho, sim, mas hoje trabalho até as oito.'], ['Lea', 'Dann essen wir um halb neun. Ich hole dich ab.', 'Então comemos às oito e meia. Eu busco você.'],
      ]),
      producao(2, 'Responda em voz alta com «doch» ou «nein»: «Hast du keine Zeit? Hast du keinen Hunger? Arbeitest du nicht?»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: um pronome no acusativo, um «kein», um «nicht» e uma resposta com «doch».'),
      exercicios(20, [
        lacuna('Wo ist der Schlüssel? Ich suche ___.', ['ihn', 'er', 'ihm'], 'ihn', '«der Schlüssel» é masculino: acusativo «ihn».'), lacuna('Wo ist die Tasche? Ich finde ___ nicht.', ['sie', 'es', 'ihn'], 'sie', '«die Tasche» é feminino: «sie».'), lacuna('Das Buch ist gut. Ich lese ___ gern.', ['es', 'sie', 'ihn'], 'es', '«das Buch» é neutro: «es».'),
        lacuna('Ich liebe ___. (você, informal)', ['dich', 'du', 'dir'], 'dich', 'Acusativo de «du».'), lacuna('Er sieht ___. (a mim)', ['mich', 'ich', 'mir'], 'mich', 'Acusativo de «ich».'), lacuna('Ich habe ___ Auto. (nenhum)', ['kein', 'keine', 'keinen'], 'kein', '«Auto» é neutro: kein.'),
        lacuna('Ich habe ___ Zeit. (nenhuma)', ['keine', 'kein', 'keinen'], 'keine', '«Zeit» é feminino: keine.'), lacuna('Ich habe ___ Hunger. (nenhuma)', ['keinen', 'kein', 'keine'], 'keinen', '«Hunger» é masculino, objeto direto: keinen.'), lacuna('Ich arbeite heute ___.', ['nicht', 'kein', 'keine'], 'nicht', 'Nega o verbo: «nicht» no fim.'),
        mc('Quando se usa «kein»?', ['para negar substantivos', 'para negar verbos', 'para negar adjetivos'], 'para negar substantivos', '«kein» nega substantivos.'), mc('Hast du keine Zeit? — ___, ich habe Zeit!', ['Doch', 'Ja', 'Nein'], 'Doch', 'Contradiz a negação.'),
        ordem('Ordene: «Eu não estou me levantando.»', ['Ich', 'stehe', 'nicht', 'auf'], 'Ich stehe nicht auf.', '«nicht» antes do prefixo.'), ordem('Ordene: «Eu não posso vir.»', ['Ich', 'kann', 'nicht', 'kommen'], 'Ich kann nicht kommen.', '«nicht» antes do infinitivo.'),
        ouvir('Ich hole dich ab', ['Ich hole dich ab', 'Ich hole es ab', 'Ich hole ihn ab'], 'Ich hole dich ab', '«dich» = acusativo de «du».'), livre('Escreva 5 frases: um pronome no acusativo, um «kein», um «nicht», um «nicht» com verbo separável e uma resposta com «doch».', 'Ich sehe ihn. Ich habe keine Zeit. Ich arbeite heute nicht. Ich stehe nicht auf. Hast du keinen Hunger? Doch!'),
      ]),
      producao(5, 'Grave-se: diga 4 coisas que você não tem, 3 que você não faz e responda a duas perguntas negativas com «doch».'),
    ]),
  ],
});
