import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 37, titulo: 'Verbos irregulares do A2 e concordância do particípio', nivel: 'a2',
  objetivo: 'Dominar «voir», «croire», «connaître», «mettre», «écrire», «lire» e «dire» no presente e no passé composé, e aplicar a concordância do particípio com o objeto direto.',
  nota: 'Você fecha o conteúdo novo do A2 com os verbos que mais aparecem. Próxima aula: revisão e simulado do A2.',
  sessoes: [
    sessao('S1', 'Voir, croire, connaître, mettre', [
      revisao(5, 'Apresente o seu país e uma diferença cultural com «on».'),
      palavras(8, [
        ['voir', 'vuár', 'ver', ''], ['croire', 'kruár', 'acreditar', ''], ['connaître', 'konétr', 'conhecer', ''], ['mettre', 'métr', 'pôr, colocar', ''], ['écrire', 'ekrir', 'escrever', ''], ['lire', 'lir', 'ler', ''], ['dire', 'dir', 'dizer', ''], ['savoir', 'savuár', 'saber', ''],
      ]),
      gramatica(12, 'Sete verbos que você precisa saber', 'PASSO 1: «voir»: je vois, tu vois, il voit, nous voyons, vous voyez, ils voient; particípio «vu». PASSO 2: «croire»: je crois, tu crois, il croit, nous croyons, vous croyez, ils croient; particípio «cru». PASSO 3: «connaître»: je connais, tu connais, il connaît, nous connaissons, vous connaissez, ils connaissent; particípio «connu». PASSO 4: «mettre»: je mets, tu mets, il met, nous mettons, vous mettez, ils mettent; particípio «mis». PASSO 5: «écrire»: j\'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent; particípio «écrit». PASSO 6: «lire»: je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent; particípio «lu». PASSO 7: «dire»: je dis, tu dis, il dit, nous disons, vous dites (atenção!), ils disent; particípio «dit». PASSO 8: «savoir» × «connaître»: «savoir» + fato ou habilidade («Je sais nager.»); «connaître» + pessoa ou lugar («Je connais Paul.»).', {
        tag: 'Verbos',
        comparacao: 'em português «saber» e «conhecer» são dois verbos, como em francês: «savoir» e «connaître». O erro dos brasileiros é dizer «je sais Paul» em vez de «je connais Paul». A regra: se for uma pessoa ou lugar, «connaître»; se for um fato ou uma habilidade, «savoir».',
        tabela: [
          { pessoa: 'je', voir: 'vois', croire: 'crois', connaitre: 'connais', mettre: 'mets' }, { pessoa: 'tu', voir: 'vois', croire: 'crois', connaitre: 'connais', mettre: 'mets' }, { pessoa: 'il / elle', voir: 'voit', croire: 'croit', connaitre: 'connaît', mettre: 'met' }, { pessoa: 'nous', voir: 'voyons', croire: 'croyons', connaitre: 'connaissons', mettre: 'mettons' }, { pessoa: 'vous', voir: 'voyez', croire: 'croyez', connaitre: 'connaissez', mettre: 'mettez' }, { pessoa: 'ils / elles', voir: 'voient', croire: 'croient', connaitre: 'connaissent', mettre: 'mettent' },
        ],
        erros: [['Je sais Paul.', 'Je connais Paul.', 'Pessoa: «connaître».'], ['Je connais nager.', 'Je sais nager.', 'Habilidade: «savoir».'], ['Vous disez.', 'Vous dites.', 'Forma irregular.'], ['Je croix.', 'Je crois.', 'Escrita: «crois».']],
      }),
      producao(5, 'Diga em voz alta cinco frases com «voir», «croire», «connaître», «mettre» e «écrire».'),
    ]),
    sessao('S2', 'Esses verbos no passé composé', [
      revisao(4, 'Conjugue em voz alta «voir, croire, connaître, mettre» com «nous» e «ils».'),
      palavras(6, [
        ['j\'ai vu', 'jé vü', 'eu vi', ''], ['j\'ai cru', 'jé krü', 'eu acreditei', ''], ['j\'ai connu', 'jé konü', 'eu conheci', ''], ['j\'ai mis', 'jé mi', 'eu pus', ''], ['j\'ai écrit', 'jé ekri', 'eu escrevi', ''], ['j\'ai lu', 'jé lü', 'eu li', ''],
      ]),
      gramatica(12, 'Particípios irregulares', 'PASSO 1: os particípios irregulares do A2: «voir → vu», «croire → cru», «connaître → connu», «mettre → mis», «écrire → écrit», «lire → lu», «dire → dit», «prendre → pris», «faire → fait», «avoir → eu», «être → été», «boire → bu», «pouvoir → pu», «vouloir → voulu». PASSO 2: o particípio com «avoir» não concorda com o sujeito: «Elle a vu un film.» PASSO 3: mas concorda com o objeto direto QUANDO ele vem ANTES do verbo: «La robe que j\'ai achetée.» «Les livres que j\'ai lus.» «Je l\'ai vue.» (a, feminino) «Je les ai vus.» PASSO 4: com «que» relativo, o objeto vem antes: «Les films que j\'ai vus étaient bons.» PASSO 5: com pronome «le, la, les»: «Je l\'ai vu» (o), «Je l\'ai vue» (a), «Je les ai vus» (os), «Je les ai vues» (as). PASSO 6: na fala, a concordância quase não se ouve, mas se escreve. PASSO 7: com «en», o particípio não concorda: «J\'en ai vu trois.» PASSO 8: com «être», o particípio concorda com o sujeito: «Elle est partie.» «Ils sont arrivés.»', {
        tag: 'Passado',
        comparacao: 'em português o particípio quase nunca concorda («tenho visto»). O francês concorda com o objeto direto que vem antes do verbo. É uma regra escrita, que quase não se ouve, mas que cai em provas e e-mails formais.',
        tabela: [
          { infinitivo: 'voir', participio: 'vu', exemplo: 'J\'ai vu un film.' }, { infinitivo: 'croire', participio: 'cru', exemplo: 'Il a cru cette histoire.' }, { infinitivo: 'connaître', participio: 'connu', exemplo: 'Nous avons connu Paul en 2010.' }, { infinitivo: 'mettre', participio: 'mis', exemplo: 'J\'ai mis mon manteau.' }, { infinitivo: 'écrire', participio: 'écrit', exemplo: 'Elle a écrit une lettre.' }, { infinitivo: 'lire', participio: 'lu', exemplo: 'J\'ai lu ce livre.' },
        ],
        erros: [['J\'ai voit un film.', 'J\'ai vu un film.', 'Particípio: «vu».'], ['La robe que j\'ai acheté.', 'La robe que j\'ai achetée.', 'Objeto antes: concorda.'], ['Je les ai vu.', 'Je les ai vus.', 'Plural: concorda.'], ['Elle a vue le film.', 'Elle a vu le film.', 'Objeto depois: não concorda.']],
      }),
      producao(8, 'Conte em voz alta o que você viu, leu e escreveu esta semana, com o passé composé.'),
    ]),
    sessao('S3', 'Notícias e relatos', [
      revisao(4, 'Complete: «J\'ai ___ (voir) un film. La lettre que j\'ai ___ (écrire).»'),
      palavras(5, [
        ['le journal', 'lö jurnal', 'o jornal', ''], ['la nouvelle', 'la nuvél', 'a notícia', ''], ['l\'article', 'lartikl', 'o artigo', ''], ['apprendre', 'aprãdr', 'saber, aprender', ''], ['raconter', 'rakõté', 'contar', ''],
      ]),
      gramatica(8, 'Contar e relatar', 'PASSO 1: para relatar uma notícia: «J\'ai lu dans le journal que…» «J\'ai appris que…» PASSO 2: para relatar o que alguém disse: «Il m\'a dit qu\'il viendrait.» (conditionnel para o futuro no passado: B1) Para o A2, use o discurso direto: «Il m\'a dit : « Je viens. »» PASSO 3: «apprendre» + que: «J\'ai appris que Marc est parti.» PASSO 4: «raconter» + objeto direto: «Il m\'a raconté une histoire.» PASSO 5: com pronomes: «Je la lui ai racontée.» (a história, a ele: concorda)', {
        tag: 'Passado',
        comparacao: 'em português dizemos «li no jornal que…». O francês usa a mesma estrutura: «j\'ai lu dans le journal que…». O verbo «apprendre» tem dois sentidos: aprender e ficar sabendo («j\'ai appris la nouvelle»).',
        tabela: [
          { funcao: 'notícia lida', frase: 'J\'ai lu dans le journal que…' }, { funcao: 'notícia sabida', frase: 'J\'ai appris que Marc est parti.' }, { funcao: 'história contada', frase: 'Il m\'a raconté une histoire.' }, { funcao: 'citação', frase: 'Il m\'a dit : « Je viens. »' },
        ],
        erros: [['J\'ai lu dans le journal de Marc est parti.', 'J\'ai lu dans le journal que Marc est parti.', '«Que» obrigatório.'], ['Je l\'ai raconté. (a história)', 'Je l\'ai racontée.', 'Concorda com o objeto que vem antes.'], ['J\'ai appris de Marc est parti.', 'J\'ai appris que Marc est parti.', '«Que» obrigatório.'], ['Il a me dit.', 'Il m\'a dit.', 'Pronome antes do auxiliar.']],
      }),
      dialogo(8, 'Les nouvelles / As notícias', 'Pierre e Claire conversam sobre uma notícia.', [
        ['Pierre', 'Tu as lu le journal ce matin ?', 'Você leu o jornal esta manhã?'], ['Claire', 'Oui, j\'ai lu un article très intéressant. J\'ai appris que le musée du Louvre ouvre le soir.', 'Sim, li um artigo muito interessante. Soube que o Louvre abre à noite.'], ['Pierre', 'Ah bon ? Je ne le savais pas. Tu veux y aller ?', 'Ah, é? Eu não sabia. Quer ir?'], ['Claire', 'Oui, avec plaisir. Je connais bien ce musée, je l\'ai déjà visité deux fois.', 'Sim, com prazer. Conheço bem esse museu, já o visitei duas vezes.'], ['Pierre', 'Moi, je ne l\'ai jamais vu. On y va samedi ?', 'Eu nunca o vi. Vamos sábado?'], ['Claire', 'D\'accord. Je t\'écris pour confirmer l\'heure.', 'Combinado. Escrevo para confirmar o horário.'],
      ]),
      producao(5, 'Conte em voz alta uma notícia que você leu ou soube esta semana.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 37', [
      revisao(5, 'Conte o que você viu, leu e escreveu ontem.'),
      exercicios(20, [
        ouvir('Je connais Paul', ['Je connais Paul', 'Je sais Paul', 'Je connaissais Paul'], 'Je connais Paul', 'Ouça «connais».'), ouvir('J\'ai lu un livre', ['J\'ai lu un livre', 'J\'ai vu un livre', 'J\'ai écrit un livre'], 'J\'ai lu un livre', 'Ouça «lu».'), ouvir('Je les ai vus', ['Je les ai vus', 'Je les ai vu', 'Je l\'ai vu'], 'Je les ai vus', 'Ouça «les ai».'),
        ditado('Elle a écrit une lettre', 'Escreva: Elle a écrit une lettre.'), ditado('Vous dites la vérité', 'Escreva: Vous dites la vérité.'), ditado('La robe que j\'ai achetée', 'Escreva: La robe que j\'ai achetée.'),
        mc('Pessoa ou lugar:', ['connaître', 'savoir', 'croire'], 'connaître', '«Connaître» + pessoa.'), mc('Habilidade:', ['savoir', 'connaître', 'voir'], 'savoir', '«Savoir nager».'), mc('Particípio de «mettre»:', ['mis', 'mettu', 'mit'], 'mis', 'Irregular.'), mc('Qual frase está correta?', ['La robe que j\'ai achetée.', 'La robe que j\'ai acheté.', 'La robe que j\'ai achetés.'], 'La robe que j\'ai achetée.', 'Concorda com o objeto antes.'),
        lacuna('Vous ___ la vérité. (dire)', ['dites', 'disez', 'disent'], 'dites', 'Forma irregular.'), lacuna('Ils ___ la télé. (voir)', ['voient', 'voyent', 'voit'], 'voient', 'Ils: «voient».'), lacuna('J\'ai ___ ce livre. (ler)', ['lu', 'lisé', 'lis'], 'lu', 'Irregular.'), lacuna('Je les ai ___ . (vus)', ['vus', 'vu', 'vue'], 'vus', 'Masculino plural.'),
        ordem('Ordene: «J\'ai écrit une lettre à Marie.»', ['J\'ai', 'écrit', 'une', 'lettre', 'à', 'Marie'], 'J\'ai écrit une lettre à Marie.', 'Passé composé.'), ordem('Ordene: «Je ne le savais pas.»', ['Je', 'ne', 'le', 'savais', 'pas'], 'Je ne le savais pas.', 'Imparfait de «savoir».'),
        livre('Escreva em francês: Eu conheço Paul. Eu sei nadar. Eu li um artigo e escrevi uma carta.', 'Je connais Paul. Je sais nager. J\'ai lu un article et j\'ai écrit une lettre.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você leu e escreveu esta semana.'),
    ]),
  ],
});
