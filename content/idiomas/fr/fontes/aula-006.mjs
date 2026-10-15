import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 6, titulo: 'Família, avoir e possessivos', nivel: 'a1',
  objetivo: 'Falar da família, usar «avoir» para posse e sensações («avoir faim», «avoir froid»), indicar posse com «de» e usar os adjetivos possessivos.',
  nota: 'Você fala da sua família, do que tem e do que sente. Próxima aula: números até 100, horas, dias e meses.',
  sessoes: [
    sessao('S1', 'A família e as sensações com avoir', [
      revisao(5, 'Apresente em voz alta quatro pessoas e a profissão de cada uma, com «il est» e «c\'est».'),
      palavras(10, [
        ['la famille', 'la famiy', 'a família', ''], ['le père', 'lê pér', 'o pai', ''], ['la mère', 'la mér', 'a mãe', ''], ['le frère', 'lê frér', 'o irmão', ''], ['la sœur', 'la sör', 'a irmã', ''], ['le fils', 'lê fis', 'o filho', ''], ['la fille', 'la fiy', 'a filha', ''], ['les parents', 'lê parã', 'os pais', ''], ['le mari', 'lê mari', 'o marido', ''], ['la femme', 'la fam', 'a esposa, a mulher', ''],
      ]),
      gramatica(10, 'Avoir: família e sensações', 'PASSO 1: «avoir» (ter) é o outro verbo essencial: «j\'ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont». PASSO 2: para a família: «J\'ai un frère et deux sœurs.» Na negação, «un/une/des» viram «de»: «Je n\'ai pas de frère.» PASSO 3: «avoir» também expressa o que sentimos, onde o português usa «estar» ou «ter»: «avoir faim» (ter fome), «avoir soif» (sede), «avoir chaud» (calor), «avoir froid» (frio), «avoir sommeil» (sono), «avoir peur» (medo), «avoir raison» (ter razão). PASSO 4: nunca use «être» nessas expressões: «Je suis faim» está errado. PASSO 5: para intensificar, use «très» ou «beaucoup»: «J\'ai très faim.» PASSO 6: «avoir besoin de» (precisar de) e «avoir envie de» (ter vontade de) pedem «de» + substantivo ou verbo: «J\'ai besoin d\'un café.» «J\'ai envie de dormir.»', {
        tag: 'Avoir',
        comparacao: 'o português usa «ter» nessas expressões, e o francês também: «ter fome», «ter frio», «ter razão». A armadilha é traduzir «estou com frio» para «je suis froid». Pense sempre em «tenho».',
        tabelas: [
          { titulo: 'avoir', linhas: [
            { pronome: 'j\'', forma: 'ai', exemplo: 'J\'ai un frère.' }, { pronome: 'tu', forma: 'as', exemplo: 'Tu as une sœur.' }, { pronome: 'il / elle / on', forma: 'a', exemplo: 'Elle a deux enfants.' },
            { pronome: 'nous', forma: 'avons', exemplo: 'Nous avons un chien.' }, { pronome: 'vous', forma: 'avez', exemplo: 'Vous avez des frères ?' }, { pronome: 'ils / elles', forma: 'ont', exemplo: 'Ils ont une maison.' },
          ] },
          { titulo: 'Sensações com avoir', linhas: [
            { expressao: 'avoir faim', significado: 'ter fome', exemplo: 'J\'ai faim.' }, { expressao: 'avoir soif', significado: 'ter sede', exemplo: 'Tu as soif ?' }, { expressao: 'avoir chaud', significado: 'estar com calor', exemplo: 'Nous avons chaud.' }, { expressao: 'avoir froid', significado: 'estar com frio', exemplo: 'Il a froid.' },
            { expressao: 'avoir sommeil', significado: 'estar com sono', exemplo: 'J\'ai sommeil.' }, { expressao: 'avoir peur', significado: 'ter medo', exemplo: 'Elle a peur.' }, { expressao: 'avoir raison', significado: 'ter razão', exemplo: 'Vous avez raison.' },
          ] },
        ],
        erros: [['Je suis faim.', 'J\'ai faim.', 'Sensação: «avoir», não «être».'], ['Je n\'ai pas un frère.', 'Je n\'ai pas de frère.', 'Depois da negação, «de».'], ['Il est froid.', 'Il a froid.', 'Para uma pessoa, «avoir froid».'], ['J\'ai besoin un café.', 'J\'ai besoin d\'un café.', '«Avoir besoin de».']],
      }),
      producao(5, 'Diga em voz alta: quantos irmãos você tem, se tem fome, sede, frio ou sono agora, e de que você precisa.'),
    ]),
    sessao('S2', 'Os possessivos', [
      revisao(4, 'Conjugue «avoir» de memória e diga as seis expressões com «avoir».'),
      palavras(6, [
        ['mon, ma, mes', 'mõ, ma, mê', 'meu, minha, meus, minhas', ''], ['ton, ta, tes', 'tõ, ta, tê', 'teu, tua (seu, sua)', ''], ['son, sa, ses', 'sõ, sa, sê', 'dele, dela, seu, sua', ''], ['notre, nos', 'notr, nô', 'nosso, nossa, nossos, nossas', ''], ['votre, vos', 'votr, vô', 'seu, sua (formal); de vocês', ''], ['leur, leurs', 'lör, lör', 'deles, delas', ''],
      ]),
      gramatica(12, 'Os adjetivos possessivos', 'PASSO 1: o possessivo concorda com a COISA possuída (gênero e número), não com o dono. Por isso «son père» pode ser «o pai dele» ou «o pai dela»: o contexto decide. PASSO 2: para um possuidor, use «mon/ma/mes», «ton/ta/tes», «son/sa/ses». PASSO 3: diante de substantivo feminino que começa por vogal ou «h» mudo, use a forma masculina: «mon amie», «ton école», «son histoire». PASSO 4: para vários possuidores, use «notre/nos», «votre/vos», «leur/leurs». Não há distinção de gênero: «notre père, notre mère». PASSO 5: o possessivo substitui o artigo: «mon livre», nunca «le mon livre». PASSO 6: para dizer «de quem é», use «de» + nome: «le frère de Paul», «la mère de Marie». O francês não usa «\'s» como o inglês. PASSO 7: para «é meu», use «à moi» ou «c\'est mon…»: «C\'est mon livre.»', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'em português, «seu» e «dele» também se confundem, mas o francês só tem «son/sa/ses» para dele e dela. A concordância é com o objeto: «sa mère» pode ser «a mãe dele», mas «sa» vem de «mère» (feminino).',
        tabela: [
          { possuidor: 'eu', masculino: 'mon père', feminino: 'ma mère', plural: 'mes parents' }, { possuidor: 'tu', masculino: 'ton père', feminino: 'ta mère', plural: 'tes parents' }, { possuidor: 'ele / ela', masculino: 'son père', feminino: 'sa mère', plural: 'ses parents' },
          { possuidor: 'nós', masculino: 'notre père', feminino: 'notre mère', plural: 'nos parents' }, { possuidor: 'vous', masculino: 'votre père', feminino: 'votre mère', plural: 'vos parents' }, { possuidor: 'eles / elas', masculino: 'leur père', feminino: 'leur mère', plural: 'leurs parents' },
        ],
        erros: [['Il aime sa père.', 'Il aime son père.', 'O possessivo concorda com «père» (masculino), não com o dono.'], ['ma amie', 'mon amie', 'Diante de vogal, use «mon/ton/son».'], ['le mon livre', 'mon livre', 'O possessivo substitui o artigo.'], ['le frère à Paul', 'le frère de Paul', 'Posse: «de» + nome.']],
      }),
      producao(8, 'Descreva a sua família com possessivos: «Mon père s\'appelle… Ma mère… Mes frères… Notre maison…» Use ao menos oito frases.'),
    ]),
    sessao('S3', 'Falar da família', [
      revisao(4, 'Complete em voz alta: «___ frère, ___ sœur, ___ parents, ___ amie.» (mon, ma, mes)'),
      palavras(5, [
        ['le grand-père', 'lê grã-pér', 'o avô', ''], ['la grand-mère', 'la grã-mér', 'a avó', ''], ['l\'oncle', 'lõkl', 'o tio', ''], ['la tante', 'la tãt', 'a tia', ''], ['l\'enfant', 'lãfã', 'a criança, o filho', ''],
      ]),
      gramatica(8, 'Descrever uma pessoa da família', 'PASSO 1: nome e idade: «Il s\'appelle Pedro et il a vingt ans.» PASSO 2: «s\'appeler» muda na terceira pessoa: «il s\'appelle», «ils s\'appellent» (duas vezes «l»). PASSO 3: profissão e lugar: «Il est ingénieur. Il habite à Lyon.» PASSO 4: dono + coisa: «La maison de mes grands-parents est grande.» PASSO 5: use «mon, ma, mes» antes do substantivo, e «de» para dar o nome do possuidor.', {
        tag: 'Adjetivos e possessivos',
        comparacao: 'em português dizemos «ele se chama Pedro». O francês usa o mesmo molde: «il s\'appelle». Mas, para a terceira pessoa do plural, «ils s\'appellent» dobra o «l».',
        tabela: [
          { funcao: 'nome', frase: 'Mon frère s\'appelle Pedro.' }, { funcao: 'idade', frase: 'Il a vingt ans.' }, { funcao: 'profissão', frase: 'Il est ingénieur.' }, { funcao: 'lugar', frase: 'Il habite à Lyon.' }, { funcao: 'posse', frase: 'C\'est la maison de mes grands-parents.' },
        ],
        erros: [['Il appelle Pedro.', 'Il s\'appelle Pedro.', 'Verbo pronominal.'], ['Ils s\'appelent Pedro et Julia.', 'Ils s\'appellent Pedro et Julia.', 'Dois «l» na grafia.']],
      }),
      texto(8, 'Ma famille / Minha família', 'Je m\'appelle Ana. J\'ai une grande famille. Mon père s\'appelle Paulo et ma mère s\'appelle Rita. J\'ai un frère, Pedro, et une sœur, Julia. Mon frère a vingt ans et ma sœur a quinze ans. Mes grands-parents habitent au Brésil, mais mon oncle habite en France. Sa femme est française. Ils ont deux enfants. Nous aimons beaucoup notre famille.',
        'Me chamo Ana. Tenho uma família grande. Meu pai se chama Paulo e minha mãe se chama Rita. Tenho um irmão, Pedro, e uma irmã, Julia. Meu irmão tem vinte anos e minha irmã tem quinze. Meus avós moram no Brasil, mas meu tio mora na França. A esposa dele é francesa. Eles têm dois filhos. Gostamos muito da nossa família.',
        [['Comment s\'appelle le père d\'Ana ?', 'Il s\'appelle Paulo.'], ['Quel âge a le frère d\'Ana ?', 'Il a vingt ans.'], ['Où habite l\'oncle d\'Ana ?', 'Il habite en France.'], ['Est-ce que la femme de l\'oncle est brésilienne ?', 'Non, elle est française.']]),
      producao(5, 'Escreva e leia em voz alta seis frases sobre a sua família, usando possessivos e «avoir».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 6', [
      revisao(5, 'Descreva a família de um amigo imaginário em cinco frases.'),
      exercicios(20, [
        ouvir('J\'ai faim', ['J\'ai faim', 'J\'ai froid', 'J\'ai soif'], 'J\'ai faim', 'Ouça «faim», com a nasal.'), ouvir('Mon frère s\'appelle Pedro', ['Mon frère s\'appelle Pedro', 'Ma sœur s\'appelle Julia', 'Son frère s\'appelle Pedro'], 'Mon frère s\'appelle Pedro', 'Ouça «mon».'), ouvir('Nous avons un chien', ['Nous avons un chien', 'Vous avez un chien', 'Ils ont un chien'], 'Nous avons un chien', 'Ouça «avons».'),
        ditado('J\'ai besoin d\'un café', 'Escreva: J\'ai besoin d\'un café.'), ditado('Ma mère s\'appelle Rita', 'Escreva: Ma mère s\'appelle Rita.'), ditado('Ils ont deux enfants', 'Escreva: Ils ont deux enfants.'),
        mc('Como dizer «estou com frio»?', ['J\'ai froid.', 'Je suis froid.', 'Je fais froid.'], 'J\'ai froid.', 'Sensação: «avoir».'), mc('Qual é o possessivo correto para «a minha amiga» (amie)?', ['mon amie', 'ma amie', 'mes amie'], 'mon amie', 'Diante de vogal, «mon».'), mc('«Son père» pode significar…', ['o pai dele ou o pai dela', 'só o pai dele', 'só o pai dela'], 'o pai dele ou o pai dela', 'Concorda com o possuído.'), mc('Como dizer «o irmão de Paul»?', ['le frère de Paul', 'le frère à Paul', 'le frère Paul\'s'], 'le frère de Paul', 'Posse com «de».'),
        lacuna('Nous ___ une grande famille. (temos)', ['avons', 'sommes', 'avez'], 'avons', '«nous avons».'), lacuna('___ sœur s\'appelle Julia. (minha)', ['Ma', 'Mon', 'Mes'], 'Ma', 'Sœur é feminino.'), lacuna('Elle ___ soif. (tem)', ['a', 'est', 'as'], 'a', '«elle a soif».'), lacuna('Ils ___ deux enfants. (têm)', ['ont', 'sont', 'a'], 'ont', '«ils ont».'),
        ordem('Ordene: «Mes parents habitent au Brésil.»', ['Mes', 'parents', 'habitent', 'au', 'Brésil'], 'Mes parents habitent au Brésil.', 'Possessivo plural.'), ordem('Ordene: «Je n\'ai pas de frère.»', ['Je', 'n\'ai', 'pas', 'de', 'frère'], 'Je n\'ai pas de frère.', 'Negação com «de».'),
        livre('Escreva em francês: Tenho um irmão. Minha mãe se chama Rita. Estou com fome.', 'J\'ai un frère. Ma mère s\'appelle Rita. J\'ai faim.'),
        lacuna('Tu ___ une sœur. (tens)', ['as', 'a', 'ai'], 'as', 'Com «tu», «avoir» faz «as».'),
        lacuna('___ parents habitent à Lyon. (meus)', ['Mon', 'Mes', 'Ma'], 'Mes', '«Parents» é plural: «mes».'),
        lacuna('Il a ___ . (sono)', ['soif', 'peur', 'sommeil'], 'sommeil', '«Avoir sommeil» = ter sono.'),
        lacuna('Le frère ___ Paul s\'appelle Luc. (de)', ['de', 'du', 'à'], 'de', 'O dono se indica com «de», sem «\'s» nem «à».'),
        lacuna('Nous aimons ___ famille. (nossa)', ['nos', 'notre', 'leur'], 'notre', 'Possuidor «nous», uma coisa no singular: «notre».'),
        mc('Qual é o possessivo correto para «a minha escola» (école)?', ['ma école', 'mes école', 'mon école'], 'mon école', 'Feminino que começa por vogal usa a forma masculina: «mon école».'),
        mc('Como dizer «Eu estou com sede»?', ['J\'ai soif.', 'Je suis soif.', 'Il a soif.'], 'J\'ai soif.', 'A sensação usa «avoir», nunca «être».'),
        mc('Como dizer «a casa deles»?', ['leurs maison', 'leur maison', 'sa maison'], 'leur maison', 'Vários possuidores, uma só coisa: «leur».'),
        mc('Como se diz «a tia»?', ['l\'oncle', 'la sœur', 'la tante'], 'la tante', '«Tante» é a tia.'),
        ordem('Ordene: «Meu tio mora na França.»', ['Mon', 'oncle', 'habite', 'en', 'France'], 'Mon oncle habite en France.', 'Possessivo antes do substantivo.'),
        ordem('Ordene: «Minha avó se chama Rita.»', ['Ma', 'grand-mère', 's\'appelle', 'Rita'], 'Ma grand-mère s\'appelle Rita.', '«S\'appeler» tem dois «l» na terceira pessoa.'),
        livre('Escreva em francês: Meu pai tem sede. Nós temos duas irmãs.', 'Mon père a soif. Nous avons deux sœurs.'),
        livre('Escreva em francês: Eu preciso de um café. A casa dos meus avós é grande.', 'J\'ai besoin d\'un café. La maison de mes grands-parents est grande.'),
      ]),
      producao(5, 'Conte em voz alta, em cinco frases, quem são as pessoas da sua família e quantos anos elas têm.'),
    ]),
  ],
});
