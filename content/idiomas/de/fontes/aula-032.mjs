import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 32, titulo: 'Adjetivos 1: com artigo definido (der große Mann)', nivel: 'a2',
  objetivo: 'Dar terminação ao adjetivo que vem antes do substantivo, depois de der, die, das: as duas terminações -e e -en, nos quatro casos.',
  nota: 'Você declina o adjetivo depois de der, die, das. Próxima aula: o adjetivo depois de ein, mein, kein.',
  sessoes: [
    sessao('S1', 'Nominativo e acusativo', [
      revisao(5, 'Escreva o quadro dos artigos definidos nos quatro casos de memória.'),
      palavras(8, [
        ['modern', 'modérn', 'moderno', 'modern'], ['bequem', 'bekvém', 'confortável', 'comfortable'], ['hübsch', 'hüpx', 'bonito, gracioso', 'pretty'], ['freundlich', 'fróindliç', 'simpático, amável', 'friendly'],
        ['interessant', 'interesánt', 'interessante', 'interesting'], ['langweilig', 'láng-vailiç', 'chato, entediante', 'boring'], ['wichtig', 'víçtiç', 'importante', 'important'], ['lecker', 'léker', 'gostoso', 'tasty'],
      ]),
      gramatica(14, 'O adjetivo antes do substantivo, passo a passo', 'PASSO 1: depois de «sein», o adjetivo NÃO muda: «Der Mann ist groß». PASSO 2: ANTES do substantivo, ele recebe uma TERMINAÇÃO: «der große Mann». PASSO 3: depois do artigo definido (der, die, das), só existem duas terminações: «-e» e «-en». PASSO 4: no NOMINATIVO singular, é sempre «-e»: der große Mann, die kleine Frau, das neue Auto. No plural, «-en»: die großen Kinder. PASSO 5: no ACUSATIVO, só o MASCULINO muda: «den großen Mann» (-en); feminino e neutro continuam «-e»: «die kleine Frau», «das neue Auto»; o plural continua «-en». PASSO 6: a terminação mostra o caso que o artigo já mostrou: o adjetivo só «reforça» quando o artigo não bastar.', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'o português muda o adjetivo por gênero e número («o homem alto», «as mulheres altas»). O alemão muda também por CASO, mas depois de der/die/das as terminações são só duas: -e e -en.',
        tabela: [
          { genero: 'masculino', nominativo: 'der große Mann', acusativo: 'den großen Mann' }, { genero: 'feminino', nominativo: 'die kleine Frau', acusativo: 'die kleine Frau' }, { genero: 'neutro', nominativo: 'das neue Auto', acusativo: 'das neue Auto' }, { genero: 'plural', nominativo: 'die großen Kinder', acusativo: 'die großen Kinder' },
        ],
        exemplos: [['Der freundliche Mann hilft mir.', 'O homem simpático me ajuda.'], ['Ich kenne den freundlichen Mann.', 'Eu conheço o homem simpático.'], ['Das neue Auto ist schön.', 'O carro novo é bonito.'], ['Ich mag die interessanten Bücher.', 'Eu gosto dos livros interessantes.']],
        erros: [['Ich sehe der große Mann.', 'Ich sehe den großen Mann.', 'Acusativo masculino: «den» e «-en».'], ['Das neu Auto ist schön.', 'Das neue Auto ist schön.', 'Antes do substantivo, o adjetivo leva terminação.'], ['Die große Kinder spielen.', 'Die großen Kinder spielen.', 'Plural: «-en».']],
      }),
      producao(3, 'Descreva 6 pessoas ou coisas com artigo definido e adjetivo: «Der freundliche Mann … Das neue Auto … Die kleinen Kinder …»'),
    ]),
    sessao('S2', 'Dativo e genitivo', [
      revisao(5, 'Escreva o adjetivo declinado (nominativo e acusativo) com «der», «die», «das» e «die».'),
      palavras(8, [
        ['süß', 'züs', 'doce', 'sweet'], ['frisch', 'frix', 'fresco', 'fresh'], ['bitter', 'bíter', 'amargo', 'bitter'], ['scharf', 'xarf', 'picante', 'spicy'],
        ['leicht', 'laiçt', 'leve, fácil', 'light, easy'], ['schwer', 'xvér', 'pesado, difícil', 'heavy, hard'], ['sauber', 'záuber', 'limpo', 'clean'], ['schmutzig', 'xmútsiç', 'sujo', 'dirty'],
      ]),
      gramatica(12, 'Dativo e genitivo: tudo «-en»', 'PASSO 1: no DATIVO, depois de der, die, das, a terminação é «-en» em TODOS os gêneros e no plural: «dem großen Mann», «der kleinen Frau», «dem neuen Auto», «den großen Kindern». PASSO 2: no GENITIVO, a terminação também é «-en»: «des großen Mannes», «der kleinen Frau», «des neuen Autos», «der großen Kinder». PASSO 3: resuma assim: só há «-e» em quatro lugares (nominativo singular nos três gêneros e acusativo feminino e neutro); todo o resto é «-en». PASSO 4: use-os depois das preposições do dativo e das de duas vias: «mit dem neuen Auto», «in der kleinen Küche».', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { caso: 'Nominativ', masculino: 'der große Mann', feminino: 'die kleine Frau', neutro: 'das neue Auto', plural: 'die großen Kinder' }, { caso: 'Akkusativ', masculino: 'den großen Mann', feminino: 'die kleine Frau', neutro: 'das neue Auto', plural: 'die großen Kinder' },
          { caso: 'Dativ', masculino: 'dem großen Mann', feminino: 'der kleinen Frau', neutro: 'dem neuen Auto', plural: 'den großen Kindern' }, { caso: 'Genitiv', masculino: 'des großen Mannes', feminino: 'der kleinen Frau', neutro: 'des neuen Autos', plural: 'der großen Kinder' },
        ],
        erros: [['Ich fahre mit dem neue Auto.', 'Ich fahre mit dem neuen Auto.', 'Dativo: «-en» em todos.'], ['Ich wohne in der klein Wohnung.', 'Ich wohne in der kleinen Wohnung.', 'Dativo feminino: «-en».']],
      }),
      producao(5, 'Descreva 6 frases com preposições e adjetivos: «Ich fahre mit dem neuen Auto. Ich wohne in der kleinen Wohnung …»'),
    ]),
    sessao('S3', 'Na loja, com adjetivos', [
      revisao(5, 'Escreva o quadro completo do adjetivo depois de der/die/das, com as quatro colunas.'),
      gramatica(10, 'Os adjetivos nas frases do dia a dia', 'PASSO 1: use o adjetivo declinado para escolher e comparar coisas: «Möchten Sie den blauen Pullover oder die grüne Jacke?» PASSO 2: lembre das cores: antes do substantivo, também levam terminação: «die grüne Jacke», «den blauen Pullover». PASSO 3: com «welch-» (qual): «Welchen Pullover möchten Sie? — Den blauen.» PASSO 4: sem repetir o substantivo: «Ich nehme den blauen.» (a terminação continua).', {
        tag: 'Adjetivos e possessivos',
        tabela: [
          { frase: 'Ich nehme den blauen Pullover.', pt: 'Eu levo o suéter azul.' }, { frase: 'Die grüne Jacke gefällt mir.', pt: 'A jaqueta verde me agrada.' }, { frase: 'Welchen Pullover möchten Sie? — Den blauen.', pt: 'Qual suéter a senhora quer? — O azul.' }, { frase: 'Ich suche die passenden Schuhe.', pt: 'Procuro os sapatos que combinam.' },
        ],
      }),
      dialogo(10, 'Im Kleidungsgeschäft / Na loja de roupas', 'Uma cliente escolhe uma jaqueta.', [
        ['Verkäuferin', 'Guten Tag! Möchten Sie den blauen Pullover oder die grüne Jacke?', 'Bom dia! A senhora quer o suéter azul ou a jaqueta verde?'], ['Lea', 'Die grüne Jacke gefällt mir. Was kostet sie?', 'A jaqueta verde me agrada. Quanto custa?'], ['Verkäuferin', 'Die neue Jacke kostet neunzig Euro.', 'A jaqueta nova custa noventa euros.'],
        ['Lea', 'Das ist teuer. Haben Sie auch die alte Kollektion?', 'É caro. Vocês têm também a coleção antiga?'], ['Verkäuferin', 'Ja, dort sind die alten Jacken. Sie kosten nur fünfzig Euro.', 'Sim, ali estão as jaquetas antigas. Custam só cinquenta euros.'], ['Lea', 'Ich nehme die schwarze Jacke dort.', 'Levo a jaqueta preta ali.'],
        ['Verkäuferin', 'Möchten Sie auch die passenden Schuhe?', 'A senhora quer também os sapatos que combinam?'], ['Lea', 'Nein, danke. Ich habe schon die bequemen Schuhe.', 'Não, obrigada. Já tenho os sapatos confortáveis.'], ['Verkäuferin', 'Dann bezahlen Sie bitte an der Kasse.', 'Então pague no caixa, por favor.'], ['Lea', 'Danke schön. Auf Wiedersehen!', 'Muito obrigada. Até logo!'],
      ]),
      producao(5, 'Faça uma compra em voz alta, escolhendo entre dois itens com adjetivos: «Ich nehme den … / die … / das …»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 6 frases com artigo definido, adjetivo e substantivo em casos diferentes.'),
      exercicios(20, [
        lacuna('Der ___ Mann hilft mir. (simpático)', ['freundliche', 'freundlichen', 'freundlich'], 'freundliche', 'Nominativo masculino depois de «der»: -e.'), lacuna('Ich kenne den ___ Mann.', ['freundlichen', 'freundliche', 'freundlicher'], 'freundlichen', 'Acusativo masculino: -en.'), lacuna('Das ___ Auto ist schön. (novo)', ['neue', 'neuen', 'neu'], 'neue', 'Nominativo neutro: -e.'),
        lacuna('Ich sehe das ___ Auto.', ['neue', 'neuen', 'neues'], 'neue', 'Acusativo neutro: -e.'), lacuna('Die ___ Kinder spielen. (pequenas)', ['kleinen', 'kleine', 'kleiner'], 'kleinen', 'Plural: -en.'), lacuna('Ich fahre mit dem ___ Auto. (novo)', ['neuen', 'neue', 'neues'], 'neuen', 'Dativo: -en.'),
        lacuna('Ich wohne in der ___ Wohnung. (pequena)', ['kleinen', 'kleine', 'kleiner'], 'kleinen', 'Dativo feminino: -en.'), lacuna('Das ist das Auto des ___ Mannes. (grande)', ['großen', 'große', 'großer'], 'großen', 'Genitivo: -en.'), mc('Depois de «der, die, das», as terminações são:', ['-e e -en', '-er, -e, -es', '-em e -er'], '-e e -en', 'Só duas terminações.'),
        mc('No acusativo, só muda:', ['o masculino', 'o feminino', 'o plural'], 'o masculino', 'den + -en.'), mc('No dativo, depois de «dem», «der», «den», a terminação é:', ['-en', '-e', '-er'], '-en', 'Dativo: tudo -en.'), mc('«die grüne Jacke» está no:', ['nominativo ou acusativo', 'só no dativo', 'só no genitivo'], 'nominativo ou acusativo', 'Feminino: igual nos dois.'),
        ordem('Ordene: «Eu levo o suéter azul.»', ['Ich', 'nehme', 'den', 'blauen', 'Pullover'], 'Ich nehme den blauen Pullover.', 'Acusativo masculino: den + -en.'), ouvir('Ich suche die passenden Schuhe', ['Ich suche die passenden Schuhe', 'Ich suche den passenden Schuh', 'Ich suche das passende Paar'], 'Ich suche die passenden Schuhe', 'Plural: -en.'), ditado('Die grüne Jacke gefällt mir', 'Feminino nominativo: -e.'),
        livre('Escreva 5 frases com adjetivos declinados: nominativo, acusativo, dativo e plural.', 'Der freundliche Mann hilft mir. Ich kenne den freundlichen Mann. Ich fahre mit dem neuen Auto. Ich wohne in der kleinen Wohnung. Die großen Kinder spielen.'),
      ]),
      producao(5, 'Grave-se descrevendo a sua casa, os seus amigos e as suas roupas com artigo definido e adjetivos.'),
    ]),
  ],
});
