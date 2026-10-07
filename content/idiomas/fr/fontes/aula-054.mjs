import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 54, titulo: 'Pronomes: ordem completa e revisão', nivel: 'b1',
  objetivo: 'Dominar a ordem dos pronomes (me, te, le, lui, y, en), usá-los no imperativo e no passé composé, e evitar os erros mais comuns.',
  nota: 'Você controla o sistema de pronomes do francês. Próxima aula: destaque e articuladores do discurso.',
  sessoes: [
    sessao('S1', 'Ordem dos pronomes', [
      revisao(5, 'Responda em voz alta: «Le vote est-il obligatoire ? Tout le monde a-t-il le droit de voter ?»'),
      palavras(8, [
        ['me', 'mö', 'me', ''], ['te', 'tö', 'te', ''], ['le / la / les', 'lö / la / lé', 'o / a / os', ''], ['lui / leur', 'lüi / lör', 'a ele / a eles', ''], ['y', 'i', 'lá / a isso', ''], ['en', 'ã', 'dele / de lá / disso', ''], ['moi / toi', 'muá / tuá', 'eu / você (tônico)', ''], ['ne… pas', 'nö… pa', 'não', ''],
      ]),
      gramatica(12, 'Je le lui donne', 'PASSO 1: ordem completa antes do verbo: me/te/se/nous/vous → le/la/les → lui/leur → y → en. PASSO 2: dois pronomes: «Je te le donne.» «Il me les envoie.» «Je le lui donne.» PASSO 3: «y» e «en» ficam por último: «Il y en a trois.» PASSO 4: negação circunda o bloco: «Je ne te le donne pas.» PASSO 5: passé composé: o bloco vem antes do auxiliar: «Je le lui ai donné.» PASSO 6: com infinitivo, o bloco vai antes do infinitivo: «Je vais te le dire.» PASSO 7: imperativo afirmativo: verbo + le/la/les + moi/toi/lui/nous/vous/leur + y + en: «Donne-le-moi !» «Donnez-les-leur !» «Vas-y !» «Donne-m\'en !» PASSO 8: imperativo negativo volta à ordem normal: «Ne me le donne pas !»', {
        tag: 'Pronomes',
        comparacao: 'em português, os pronomes ficam livres na frase. Em francês, é uma «fila de ônibus» fixa: me/te → le/la/les → lui/leur → y → en. Pratique em voz alta até virar automático; é a parte da gramática que mais soa como francês.',
        tabela: [
          { posicao: '1º', pronome: 'me, te, se, nous, vous', exemplo: 'Il me le donne.' }, { posicao: '2º', pronome: 'le, la, les', exemplo: 'Je le lui donne.' }, { posicao: '3º', pronome: 'lui, leur', exemplo: 'Je le lui ai donné.' }, { posicao: '4º', pronome: 'y', exemplo: 'Il y en a trois.' }, { posicao: '5º', pronome: 'en', exemplo: 'Il y en a trois.' }, { posicao: 'imperativo', pronome: 'Donne-le-moi', exemplo: 'Donnez-les-leur !' },
        ],
        erros: [['Je lui le donne.', 'Je le lui donne.', 'Ordem: le antes de lui.'], ['Il m\'a en donné deux.', 'Il m\'en a donné deux.', 'Pronomes antes do auxiliar.'], ['Donne-moi-le !', 'Donne-le-moi !', 'Imperativo: le antes de moi.'], ['Ne le me donne pas !', 'Ne me le donne pas !', 'Negativo: ordem normal.']],
      }),
      producao(5, 'Responda em voz alta: «Tu me prêtes ton livre ?» com dois pronomes, três vezes diferentes.'),
    ]),
    sessao('S2', 'Y, en e pronomes tônicos', [
      revisao(4, 'Substitua por pronomes: «Je donne le livre à Paul.»'),
      palavras(6, [
        ['moi', 'muá', 'eu (tônico)', ''], ['toi', 'tuá', 'você (tônico)', ''], ['lui', 'lüi', 'ele (tônico)', ''], ['elle', 'él', 'ela (tônico)', ''], ['nous', 'nu', 'nós', ''], ['eux', 'ö', 'eles (tônico)', ''],
      ]),
      gramatica(12, 'Quando usar cada pronome', 'PASSO 1: «y» substitui «à + coisa» ou lugar: «Je pense à mon projet → J\'y pense.» «Je vais à Paris → J\'y vais.» PASSO 2: «en» substitui «de + coisa», quantidade ou partitivo: «Je parle de mon voyage → J\'en parle.» «Je veux du café → J\'en veux.» PASSO 3: pessoa com «à» → lui/leur: «Je parle à Paul → Je lui parle.» PASSO 4: pessoa com «de» → pronome tônico: «Je parle de Paul → Je parle de lui.» PASSO 5: «penser à» + pessoa → «penser à lui»: «Je pense à toi.» PASSO 6: verbos como «s\'intéresser à», «faire attention à», «se souvenir de»: «Je m\'y intéresse.» «Je m\'en souviens.» PASSO 7: pronome tônico depois de preposição: «avec moi», «chez eux», «pour elle». PASSO 8: ênfase: «Moi, je pense que…», «Toi, tu veux quoi ?»', {
        tag: 'Pronomes',
        comparacao: 'em português «eu penso nisso» = «j\'y pense». Mas «eu penso nele» = «je pense à lui» (nunca «j\'y pense» para pessoas). Esta é a diferença mais cobrada em provas: pessoa → tônico; coisa → y/en.',
        tabela: [
          { pronome: 'y', funcao: 'à + coisa / lugar', exemplo: 'J\'y pense. J\'y vais.' }, { pronome: 'en', funcao: 'de + coisa / quantidade', exemplo: 'J\'en parle. J\'en veux deux.' }, { pronome: 'lui / leur', funcao: 'à + pessoa', exemplo: 'Je lui parle.' }, { pronome: 'moi, toi, lui…', funcao: 'de + pessoa / preposição', exemplo: 'Je parle de lui.' }, { pronome: 'moi, toi, lui…', funcao: 'ênfase', exemplo: 'Moi, je pense que…' }, { pronome: 'se souvenir de', funcao: 'en (coisa)', exemplo: 'Je m\'en souviens.' },
        ],
        erros: [['Je pense à Paul → J\'y pense.', 'Je pense à Paul → Je pense à lui.', 'Pessoa: tônico.'], ['Je parle de mon voyage → J\'y parle.', 'Je parle de mon voyage → J\'en parle.', '«De» + coisa: en.'], ['Je lui parle de il.', 'Je parle de lui.', 'Tônico depois de «de».'], ['Je vais à Paris → Je vais y.', 'Je vais à Paris → J\'y vais.', '«Y» antes do verbo.']],
      }),
      producao(8, 'Responda em voz alta a oito perguntas, substituindo as palavras por pronomes.'),
    ]),
    sessao('S3', 'Pronomes na prática', [
      revisao(4, 'Faça duas frases com «y» e duas com «en».'),
      palavras(5, [
        ['prêter', 'prétê', 'emprestar', ''], ['rendre', 'rãdr', 'devolver', ''], ['offrir', 'ofrir', 'oferecer', ''], ['envoyer', 'ãvuaiê', 'enviar', ''], ['montrer', 'mõtrê', 'mostrar', ''],
      ]),
      gramatica(8, 'Verbos de doação', 'PASSO 1: «donner, prêter, rendre, offrir, envoyer, montrer, dire» pedem «à + pessoa» (lui/leur): «Je lui prête mon livre.» PASSO 2: com dois pronomes: «Je le lui prête.» PASSO 3: no passé composé: «Je le lui ai prêté.» PASSO 4: na negação: «Je ne le lui ai pas prêté.» PASSO 5: no imperativo: «Prête-le-lui !»', {
        tag: 'Pronomes',
        comparacao: 'em português, «eu lho empresto» é raro e formal. Em francês, «je le lui prête» é totalmente comum no dia a dia. Treine até soar natural.',
        tabela: [
          { verbo: 'donner', exemplo: 'Je le lui donne.' }, { verbo: 'prêter', exemplo: 'Je le lui prête.' }, { verbo: 'rendre', exemplo: 'Je le lui rends.' }, { verbo: 'offrir', exemplo: 'Je le lui offre.' }, { verbo: 'envoyer', exemplo: 'Je le lui envoie.' }, { verbo: 'montrer', exemplo: 'Je le lui montre.' },
        ],
        erros: [['Je lui l\'ai prêté.', 'Je le lui ai prêté.', 'Ordem.'], ['Je ne l\'ai lui pas prêté.', 'Je ne le lui ai pas prêté.', 'Bloco antes do auxiliar.'], ['Prête-lui-le !', 'Prête-le-lui !', 'Imperativo.'], ['Je vais lui le prêter.', 'Je vais le lui prêter.', 'Bloco antes do infinitivo.']],
      }),
      dialogo(8, 'Au bureau / No escritório', 'Léa e Marc trocam documentos.', [
        ['Léa', 'Marc, tu as envoyé le dossier à la directrice ?', 'Marc, você enviou o dossiê à diretora?'], ['Marc', 'Oui, je le lui ai envoyé hier soir.', 'Sim, eu o enviei a ela ontem à noite.'], ['Léa', 'Et les photos ? Tu les as montrées au client ?', 'E as fotos? Você as mostrou ao cliente?'], ['Marc', 'Pas encore. Je vais les lui montrer demain.', 'Ainda não. Vou mostrá-las a ele amanhã.'], ['Léa', 'D\'accord. Et du café, tu en veux ?', 'Certo. E café, você quer?'], ['Marc', 'Oui, apporte-m\'en un, s\'il te plaît !', 'Sim, traga-me um, por favor!'],
      ]),
      producao(5, 'Responda em voz alta: «Tu as donné le cadeau à ta mère ?» de quatro formas, com pronomes.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 54', [
      revisao(5, 'Substitua por pronomes: «J\'ai prêté le livre à Marc.»'),
      exercicios(20, [
        ouvir('Je le lui ai donné', ['Je le lui ai donné', 'Je lui le ai donné', 'Je lui ai donné le'], 'Je le lui ai donné', 'Ouça «le lui».'), ouvir('Donne-le-moi', ['Donne-le-moi', 'Donne-moi-le', 'Donne-me-le'], 'Donne-le-moi', 'Imperativo.'), ouvir('Il y en a trois', ['Il y en a trois', 'Il en y a trois', 'Il y a trois'], 'Il y en a trois', 'Ouça «y en».'),
        ditado('Je ne te le donne pas', 'Escreva: Je ne te le donne pas.'), ditado('Je vais te le dire', 'Escreva: Je vais te le dire.'), ditado('Je pense à lui', 'Escreva: Je pense à lui.'),
        mc('Para substituir «à Paul»:', ['lui', 'y', 'en'], 'lui', 'Pessoa com à.'), mc('Para substituir «de mon voyage»:', ['en', 'y', 'lui'], 'en', 'De + coisa.'), mc('Qual frase está correta?', ['Je le lui donne.', 'Je lui le donne.', 'Je le donne lui.'], 'Je le lui donne.', 'Ordem.'), mc('Imperativo negativo correto:', ['Ne me le donne pas !', 'Ne le me donne pas !', 'Ne donne-me-le pas !'], 'Ne me le donne pas !', 'Ordem normal.'),
        lacuna('Je pense à Paul → Je pense à ___ .', ['lui', 'y', 'en'], 'lui', 'Pessoa.'), lacuna('Je vais à Paris → J\' ___ vais.', ['y', 'en', 'lui'], 'y', 'Lugar.'), lacuna('Du café ? J\' ___ veux.', ['en', 'y', 'le'], 'en', 'Partitivo.'), lacuna('Je ___ ai prêté mon livre. (a ele)', ['lui', 'leur', 'y'], 'lui', 'Singular.'),
        ordem('Ordene: «Je le lui ai donné.»', ['Je', 'le', 'lui', 'ai', 'donné'], 'Je le lui ai donné.', 'Bloco de pronomes.'), ordem('Ordene: «Il y en a trois.»', ['Il', 'y', 'en', 'a', 'trois'], 'Il y en a trois.', 'Y antes de en.'),
        livre('Escreva em francês: Eu o enviei a ela ontem. Traga-me um, por favor. Penso nele.', 'Je le lui ai envoyé hier. Apporte-m\'en un, s\'il te plaît. Je pense à lui.'),
      ]),
      producao(5, 'Fale 1 minuto sobre um objeto, usando pelo menos seis pronomes.'),
    ]),
  ],
});
