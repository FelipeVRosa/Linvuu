import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 5, titulo: 'As coisas ao redor: artigos, plural e this/that', nivel: 'a1',
  objetivo: 'Usar a, an e the, formar o plural (regular e irregular) e apontar coisas com this, that, these e those.',
  nota: 'Você nomeia e aponta as coisas ao redor. Próxima aula: a casa e o «there is / there are».',
  sessoes: [
    sessao('S1', 'A, an e the', [
      revisao(5, 'Diga 5 frases com o presente simples sobre a sua rotina, usando «always», «usually» ou «never».'),
      palavras(8, [
        ['book', 'búk', 'livro', ''], ['pen', 'pén', 'caneta', ''], ['phone', 'fôun', 'celular, telefone', ''], ['bag', 'bég', 'bolsa, mochila', ''], ['key', 'kii', 'chave', ''], ['chair', 'tchér', 'cadeira', ''], ['table', 'têibl', 'mesa', ''], ['apple', 'épl', 'maçã', ''], ['umbrella', 'ambréla', 'guarda-chuva', ''],
      ]),
      gramatica(12, 'Os artigos: a, an e the', 'PASSO 1: «a» e «an» significam «um» e «uma». Só se usam com coisas contáveis no SINGULAR: «a book», «an apple». PASSO 2: a escolha entre «a» e «an» depende do SOM, não da letra. Som de consoante pede «a» (a book, a university, porque «university» começa com som de «iú»); som de vogal pede «an» (an apple, an umbrella, an hour, porque o «h» de «hour» não soa). PASSO 3: «the» significa «o, a, os, as» e vale para singular e plural. Use quando quem fala e quem ouve já sabem de qual coisa se trata: «I have a dog. The dog is big.» PASSO 4: no plural não existe «a»: «I have books» (alguns livros) ou «I have the books» (aqueles livros). PASSO 5: para falar de algo em geral, use o plural ou o incontável SEM artigo: «I like music», «Dogs are friendly». PASSO 6: profissões e identidades no singular pedem «a/an»: «She is a teacher».', {
        tag: 'Substantivos',
        comparacao: 'o português costuma usar artigo para generalizar («as pessoas gostam DA música»). O inglês não usa: «People like music.» Já a profissão, que em português dispensa artigo («ela é professora»), em inglês leva «a/an»: «She is a teacher».',
        tabela: [
          { artigo: 'a', quando: 'um/uma, som de consoante', exemplo: 'a book, a pen, a university' }, { artigo: 'an', quando: 'um/uma, som de vogal', exemplo: 'an apple, an umbrella, an hour' }, { artigo: 'the', quando: 'o, a, os, as: já sabemos qual', exemplo: 'the key, the books' }, { artigo: '(nenhum)', quando: 'plural ou incontável em geral', exemplo: 'I like music. Dogs are friendly.' },
        ],
        erros: [['I have a umbrella.', 'I have an umbrella.', '«umbrella» começa com som de vogal.'], ['She is teacher.', 'She is a teacher.', 'Profissão no singular leva «a/an».'], ['I like the music.', 'I like music.', 'Para falar em geral, sem artigo.'], ['I have a books.', 'I have a book. / I have books.', '«a» nunca vai com plural.']],
      }),
      producao(5, 'Diga 6 frases sobre objetos que você tem agora, com a/an e the: «I have a phone. I have an umbrella. The phone is new.»'),
    ]),
    sessao('S2', 'O plural', [
      revisao(5, 'Escreva «a» ou «an» antes de cada palavra: ___ apple, ___ book, ___ umbrella, ___ hour, ___ university, ___ pen.'),
      palavras(5, [
        ['man', 'mén', 'homem', ''], ['woman', 'uúman', 'mulher', ''], ['child', 'tcháild', 'criança', ''], ['people', 'píipl', 'pessoas, gente', ''], ['city', 'síti', 'cidade', ''],
      ]),
      gramatica(15, 'Como formar o plural', 'PASSO 1: a regra geral é acrescentar -s: book → books, pen → pens. PASSO 2: depois de s, ss, sh, ch, x e z, acrescente -es: bus → buses, class → classes, watch → watches, box → boxes. Ouve-se uma sílaba extra (/ɪz/). PASSO 3: consoante + y vira -ies: city → cities, baby → babies. Vogal + y só ganha -s: day → days, key → keys. PASSO 4: muitas palavras em -f ou -fe viram -ves: knife → knives, leaf → leaves. PASSO 5: alguns plurais são irregulares e precisam ser decorados: man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth. Alguns não mudam: fish, sheep. PASSO 6: «people» já é plural («people ARE», nunca «peoples» para pessoas). PASSO 7: o -s do plural soa /s/ depois de som sem voz (books), /z/ depois de som com voz (pens, keys) e /ɪz/ depois de s, sh, ch, x, z (boxes).', {
        tag: 'Substantivos',
        comparacao: 'em português o plural também é -s (e -es), mas o artigo, o adjetivo e o verbo concordam. Em inglês, o adjetivo não muda: «two big books».',
        tabela: [
          { singular: 'book', plural: 'books', regra: '+ s' }, { singular: 'box', plural: 'boxes', regra: '+ es (x)' }, { singular: 'watch', plural: 'watches', regra: '+ es (ch)' }, { singular: 'city', plural: 'cities', regra: 'y → ies' }, { singular: 'day', plural: 'days', regra: 'vogal + y: + s' },
          { singular: 'knife', plural: 'knives', regra: 'fe → ves' }, { singular: 'man', plural: 'men', regra: 'irregular' }, { singular: 'woman', plural: 'women', regra: 'irregular' }, { singular: 'child', plural: 'children', regra: 'irregular' }, { singular: 'person', plural: 'people', regra: 'irregular' }, { singular: 'fish', plural: 'fish', regra: 'não muda' },
        ],
        erros: [['two book', 'two books', 'Depois de um número maior que 1, o substantivo vai ao plural.'], ['two childs', 'two children', 'Plural irregular.'], ['two womans', 'two women', 'Plural irregular.'], ['two citys', 'two cities', 'Consoante + y vira -ies.'], ['The peoples are here.', 'The people are here.', '«people» já é plural.']],
      }),
      producao(5, 'Diga o plural de: box, city, man, child, day, knife, person. Depois faça 3 frases com os plurais: «I have two boxes. I have three children. I like big cities.»'),
    ]),
    sessao('S3', 'This, that, these e those', [
      revisao(4, 'Diga o plural de: watch, baby, woman, key, bus.'),
      gramatica(12, 'Apontar: this, that, these e those', 'PASSO 1: «this» (singular) e «these» (plural) apontam o que está PERTO de quem fala: «This is my phone.», «These are my keys.» PASSO 2: «that» (singular) e «those» (plural) apontam o que está LONGE: «That is your bag.», «Those are my books.» PASSO 3: o verbo concorda: «this/that + is», «these/those + are». PASSO 4: a pronúncia faz diferença: «this» /ðɪs/ (i curto) e «these» /ðiːz/ (i longo). PASSO 5: perguntas: «What\'s this?», «What are those?», «Is this your bag?», «Are these your keys?». PASSO 6: «that is» pode virar «that\'s»; «this is» não costuma contrair.', {
        tag: 'Pronomes',
        comparacao: 'o português tem TRÊS graus («este», «esse», «aquele»). O inglês tem DOIS: «this» (perto) e «that» (não perto). Tanto «esse» quanto «aquele» viram «that».',
        tabela: [
          { distancia: 'perto', singular: 'this', plural: 'these', exemplo: 'This is a pen. These are pens.' }, { distancia: 'longe', singular: 'that', plural: 'those', exemplo: 'That is a bag. Those are bags.' },
        ],
        erros: [['This are my books.', 'These are my books.', 'Plural pede «these».'], ['Those is my phone.', 'That is my phone.', 'Singular pede «that».'], ['What is these?', 'What are these?', 'O verbo concorda com «these».']],
      }),
      dialogo(8, 'Is this your phone? / Este celular é seu?', 'Ana encontra objetos esquecidos e fala com Chris.', [
        ['Ana', 'Excuse me, is this your phone?', 'Com licença, este celular é seu?'], ['Chris', 'No, it isn\'t. My phone is over there.', 'Não, não é. O meu celular está ali.'], ['Ana', 'Oh, I see. Are these your keys?', 'Ah, entendi. Estas chaves são suas?'],
        ['Chris', 'Yes, they are. Thank you!', 'Sim, são. Obrigado!'], ['Ana', 'You\'re welcome. What\'s that?', 'De nada. O que é aquilo?'], ['Chris', 'That\'s an umbrella. It isn\'t mine.', 'É um guarda-chuva. Não é meu.'],
      ]),
      producao(6, 'Aponte para 4 objetos perto de você e 4 longe e diga: «This is…», «These are…», «That is…», «Those are…».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 5', [
      revisao(5, 'Escreva o plural de: book, box, city, man, child, person, day.'),
      exercicios(20, [
        ouvir('These are my keys', ['These are my keys', 'This is my key', 'Those are my keys'], 'These are my keys', 'Ouça «these» (plural, perto).'), ouvir('That is an umbrella', ['That is an umbrella', 'This is an umbrella', 'That is a umbrella'], 'That is an umbrella', 'Ouça «that» e «an».'), ditado('I have a book', 'Escreva: I have a book.'), ditado('Those are my children', 'Escreva: those are my children.'),
        mc('Qual artigo vai antes de «umbrella»?', ['an', 'a', 'the'], 'an', '«umbrella» começa com som de vogal.'), mc('Qual é o plural de «city»?', ['cities', 'citys', 'cityes'], 'cities', 'Consoante + y vira -ies.'), mc('Qual é o plural de «child»?', ['children', 'childs', 'childes'], 'children', 'Plural irregular.'), mc('Qual frase está correta?', ['These are my keys.', 'This are my keys.', 'These is my keys.'], 'These are my keys.', '«these» + «are».'), mc('Qual frase fala de uma coisa longe de você?', ['That is my bag.', 'This is my bag.', 'These are my bags.'], 'That is my bag.', '«that» aponta algo longe.'),
        lacuna('She is ___ teacher. (uma)', ['a', 'an', 'the'], 'a', '«teacher» começa com som de consoante.'), lacuna('I have two ___. (caixas)', ['boxes', 'boxs', 'box'], 'boxes', 'Depois de x, -es.'), lacuna('___ are my friends. (aqueles ali)', ['Those', 'That', 'This'], 'Those', 'Plural e longe: «those».'), lacuna('I like ___. (música, em geral)', ['music', 'the music', 'a music'], 'music', 'Em geral, sem artigo.'),
        ordem('Ordene: «These are my keys.»', ['These', 'are', 'my', 'keys'], 'These are my keys.', 'Plural e perto.'), ordem('Ordene: «What is that?»', ['What', 'is', 'that'], 'What is that?', 'Pergunta sobre algo longe.'),
        livre('Escreva 4 frases: uma com «a», uma com «an», uma com «these» e uma com «those».', 'I have a pen. I have an apple. These are my keys. Those are my books.'),
      ]),
      producao(5, 'Fale por 1 minuto sobre os objetos da sua mesa: o que são, quantos há, quais estão perto e quais estão longe.'),
    ]),
  ],
});
