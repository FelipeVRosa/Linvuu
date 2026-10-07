import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 53, titulo: 'Cidadania, educação e instituições', nivel: 'b1',
  objetivo: 'Falar de educação, política e direitos com vocabulário básico de instituições francesas e comparar com o Brasil.',
  nota: 'Você entende como as instituições funcionam e consegue comparar sistemas. Próxima aula: pronomes, revisão completa.',
  sessoes: [
    sessao('S1', 'Educação', [
      revisao(5, 'Descreva em voz alta um problema social: problema, causa, efeito, solução.'),
      palavras(8, [
        ['une école', 'ün ekol', 'uma escola', ''], ['un collège', 'ẽ kolésj', 'ensino fundamental II', ''], ['un lycée', 'ẽ lisé', 'ensino médio', ''], ['une université', 'ün ünivérsité', 'uma universidade', ''], ['un diplôme', 'ẽ diplom', 'um diploma', ''], ['le bac', 'lö bak', 'o exame final do ensino médio', ''], ['un étudiant', 'ẽn etüdiã', 'um estudante', ''], ['gratuit', 'gratüi', 'gratuito', ''],
      ]),
      gramatica(12, 'Le système éducatif', 'PASSO 1: etapas na França: école maternelle (3–6 anos), école primaire (6–11), collège (11–15), lycée (15–18), puis université. PASSO 2: o «bac» (baccalauréat) é o exame que dá acesso à universidade. PASSO 3: expressar obrigação: «L\'école est obligatoire jusqu\'à 16 ans.» PASSO 4: comparar: «En France, l\'école publique est gratuite, comme au Brésil.» PASSO 5: «redoubler» (repetir de ano), «passer un examen», «réussir / échouer», «obtenir un diplôme». PASSO 6: passado: «J\'ai fait mes études à…», «J\'ai obtenu mon diplôme en 2020.» PASSO 7: «étudier» (estudar um assunto) × «faire des études» (cursar): «J\'étudie le français.» × «Je fais des études de droit.» PASSO 8: «un professeur» também designa o professor do ensino médio e da universidade; «un instituteur / une institutrice» (professor primário, hoje «professeur des écoles»).', {
        tag: 'Educação',
        comparacao: 'atenção a falsos amigos: «collège» NÃO é universidade (é ensino fundamental II), e «université» é universidade. «Lycée» é o ensino médio. «Réussir un examen» é passar; «passer un examen» é fazer a prova. Isso causa confusão em todo brasileiro.',
        tabela: [
          { expressao: 'école primaire', uso: '6 a 11 anos', exemplo: 'J\'ai fait l\'école primaire à Recife.' }, { expressao: 'collège', uso: '11 a 15 anos', exemplo: 'Au collège, on apprend l\'anglais.' }, { expressao: 'lycée', uso: '15 a 18 anos', exemplo: 'Au lycée, on prépare le bac.' }, { expressao: 'passer un examen', uso: 'fazer a prova', exemplo: 'Je passe l\'examen demain.' }, { expressao: 'réussir un examen', uso: 'passar na prova', exemplo: 'J\'ai réussi l\'examen.' }, { expressao: 'redoubler', uso: 'repetir o ano', exemplo: 'Il a redoublé sa première année.' },
        ],
        erros: [['J\'ai réussi l\'examen hier, mais je ne l\'ai pas passé.', 'J\'ai passé l\'examen hier et je l\'ai réussi.', 'Primeiro «passer» (fazer), depois «réussir» (passar).'], ['Il étudie à l\'université de droit.', 'Il fait des études de droit.', 'Cursar: «faire des études».'], ['Je suis au collège (universidade).', 'Je suis à l\'université.', '«Collège» não é universidade.'], ['Je passe l\'examen. J\'ai réussi demain.', 'Je passe l\'examen demain.', 'Passar = fazer a prova.']],
      }),
      producao(5, 'Descreva em voz alta o seu percurso escolar, do primário até hoje.'),
    ]),
    sessao('S2', 'Política e instituições', [
      revisao(4, 'Compare em voz alta a escola no Brasil e na França, em três frases.'),
      palavras(6, [
        ['le gouvernement', 'lö guvérnömã', 'o governo', ''], ['le président', 'lö prézidã', 'o presidente', ''], ['un député', 'ẽ depüté', 'um deputado', ''], ['une élection', 'ün elexiõ', 'uma eleição', ''], ['voter', 'votê', 'votar', ''], ['une loi', 'ün luá', 'uma lei', ''],
      ]),
      gramatica(12, 'Voter, élire, gouverner', 'PASSO 1: verbos: «voter» (votar), «élire» (eleger), «gouverner» (governar), «adopter une loi» (aprovar uma lei). PASSO 2: «élire» é irregular: «j\'élis, tu élis, il élit, nous élisons, ils élisent»; particípio «élu». PASSO 3: voz passiva: «Le président est élu pour cinq ans.» «La loi a été adoptée.» PASSO 4: instituições francesas: «l\'Assemblée nationale» (deputados), «le Sénat», «le Président», «le Premier ministre», «le Conseil constitutionnel». PASSO 5: eleições: «Le président est élu au suffrage universel direct.» PASSO 6: direitos: «le droit de vote», «la liberté d\'expression», «l\'égalité». PASSO 7: lema da França: «Liberté, Égalité, Fraternité». PASSO 8: cuidado ao falar de política: use «selon moi» e «je trouve que», sem insultar.', {
        tag: 'Política',
        comparacao: 'no Brasil, o voto é obrigatório; na França, não. Os franceses falam «le vote n\'est pas obligatoire». O presidente francês é eleito por 5 anos (quinquennat) e a França tem também um Primeiro-Ministro, que chefia o governo.',
        tabela: [
          { expressao: 'voter', uso: 'votar', exemplo: 'Je vote le dimanche.' }, { expressao: 'élire', uso: 'eleger', exemplo: 'Les Français élisent le président.' }, { expressao: 'adopter une loi', uso: 'aprovar', exemplo: 'L\'Assemblée adopte la loi.' }, { expressao: 'le droit de vote', uso: 'direito', exemplo: 'Le droit de vote est à 18 ans.' }, { expressao: 'obligatoire', uso: 'voto obrigatório', exemplo: 'Au Brésil, le vote est obligatoire.' }, { expressao: 'le quinquennat', uso: '5 anos', exemplo: 'Le quinquennat dure cinq ans.' },
        ],
        erros: [['Il a élit le président.', 'Il a élu le président.', 'Particípio: élu.'], ['Les Français élissent le président.', 'Les Français élisent le président.', 'Radical: élis-.'], ['Le président est élu par cinq ans.', 'Le président est élu pour cinq ans.', '«Pour».'], ['La loi a été adopté.', 'La loi a été adoptée.', 'Concordância.']],
      }),
      producao(8, 'Explique em voz alta como funciona uma eleição no Brasil, para um francês.'),
    ]),
    sessao('S3', 'Direitos e deveres', [
      revisao(4, 'Dê três verbos de política com um exemplo cada.'),
      palavras(5, [
        ['un droit', 'ẽ drua', 'um direito', ''], ['un devoir', 'ẽ dövuár', 'um dever', ''], ['la liberté', 'la liberté', 'a liberdade', ''], ['la justice', 'la jüstis', 'a justiça', ''], ['un citoyen', 'ẽ sitüaiẽ', 'um cidadão', ''],
      ]),
      gramatica(8, 'Droits et devoirs', 'PASSO 1: «avoir le droit de» + infinitivo: «Tout le monde a le droit de voter.» PASSO 2: «avoir le devoir de» ou «devoir»: «Chacun a le devoir de respecter la loi.» PASSO 3: interditos: «Il est interdit de fumer ici.» PASSO 4: obrigatórios: «Il est obligatoire de porter un casque.» PASSO 5: «être autorisé à» (ser autorizado a).', {
        tag: 'Cidadania',
        comparacao: 'o francês usa muito a impessoal «il est interdit de / il est obligatoire de / il est permis de» em avisos públicos. Reconhecer essas fórmulas ajuda a entender placas e regras.',
        tabela: [
          { expressao: 'avoir le droit de', uso: 'ter direito', exemplo: 'J\'ai le droit de voter.' }, { expressao: 'avoir le devoir de', uso: 'dever', exemplo: 'J\'ai le devoir de respecter la loi.' }, { expressao: 'il est interdit de', uso: 'proibido', exemplo: 'Il est interdit de fumer.' }, { expressao: 'il est obligatoire de', uso: 'obrigatório', exemplo: 'Il est obligatoire de s\'arrêter.' }, { expressao: 'il est permis de', uso: 'permitido', exemplo: 'Il est permis de photographier.' }, { expressao: 'être autorisé à', uso: 'ser autorizado', exemplo: 'Je suis autorisé à entrer.' },
        ],
        erros: [['J\'ai droit de voter.', 'J\'ai le droit de voter.', 'Artigo.'], ['Il est interdit à fumer.', 'Il est interdit de fumer.', '«De» + infinitivo.'], ['Il est obligatoire que fumer.', 'Il est obligatoire de ne pas fumer.', 'Estrutura.'], ['Je suis autorisé de entrer.', 'Je suis autorisé à entrer.', '«À».']],
      }),
      dialogo(8, 'Une discussion / Uma discussão', 'Louise e Sami falam de voto e direitos.', [
        ['Louise', 'Au Brésil, est-ce que le vote est obligatoire ?', 'No Brasil, o voto é obrigatório?'], ['Sami', 'Oui, entre 18 et 70 ans. Et en France ?', 'Sim, entre 18 e 70 anos. E na França?'], ['Louise', 'Non, il n\'est pas obligatoire, mais tout le monde a le droit de voter à 18 ans.', 'Não, não é obrigatório, mas todo mundo tem direito de votar aos 18 anos.'], ['Sami', 'Je trouve que le vote obligatoire est une bonne idée, car plus de gens participent.', 'Acho que o voto obrigatório é uma boa ideia, porque mais gente participa.'], ['Louise', 'C\'est vrai, mais je pense qu\'il vaut mieux voter par conviction.', 'É verdade, mas acho que é melhor votar por convicção.'], ['Sami', 'Tu as raison, c\'est un vrai débat !', 'Você tem razão, é um verdadeiro debate!'],
      ]),
      producao(5, 'Dê em voz alta sua opinião sobre voto obrigatório, com um argumento.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 53', [
      revisao(5, 'Explique em voz alta a diferença entre collège, lycée e université.'),
      exercicios(20, [
        ouvir('Il est interdit de fumer', ['Il est interdit de fumer', 'Il est obligatoire de fumer', 'Il est permis de fumer'], 'Il est interdit de fumer', 'Ouça «interdit».'), ouvir('Tout le monde a le droit de voter', ['Tout le monde a le droit de voter', 'Tout le monde a le devoir de voter', 'Personne n\'a le droit de voter'], 'Tout le monde a le droit de voter', 'Ouça «droit».'), ouvir('Le président est élu pour cinq ans', ['Le président est élu pour cinq ans', 'Le président est élu par cinq ans', 'Le président a élu cinq ans'], 'Le président est élu pour cinq ans', 'Ouça «pour».'),
        ditado('J\'ai réussi l\'examen', 'Escreva: J\'ai réussi l\'examen.'), ditado('La loi a été adoptée', 'Escreva: La loi a été adoptée.'), ditado('Chacun a le devoir de respecter la loi', 'Escreva: Chacun a le devoir de respecter la loi.'),
        mc('O «lycée» corresponde a:', ['ensino médio', 'universidade', 'ensino fundamental I'], 'ensino médio', '15 a 18 anos.'), mc('«Passer un examen» é:', ['fazer a prova', 'passar na prova', 'cancelar a prova'], 'fazer a prova', 'Passar = fazer.'), mc('Particípio de «élire»:', ['élu', 'élit', 'élisé'], 'élu', 'Irregular.'), mc('No Brasil, o voto é:', ['obligatoire', 'interdit', 'gratuit'], 'obligatoire', 'Obrigatório.'),
        lacuna('Il est ___ de fumer ici. (proibido)', ['interdit', 'permis', 'obligatoire'], 'interdit', 'Proibição.'), lacuna('J\'ai ___ de voter. (o direito)', ['le droit', 'droit', 'du droit'], 'le droit', 'Com artigo.'), lacuna('Le président est élu ___ cinq ans.', ['pour', 'par', 'à'], 'pour', 'Duração.'), lacuna('Il a ___ le président. (eleger)', ['élu', 'élit', 'élisé'], 'élu', 'Particípio.'),
        ordem('Ordene: «Tout le monde a le droit de voter.»', ['Tout', 'le', 'monde', 'a', 'le', 'droit', 'de', 'voter'], 'Tout le monde a le droit de voter.', 'Direito.'), ordem('Ordene: «Le vote est obligatoire au Brésil.»', ['Le', 'vote', 'est', 'obligatoire', 'au', 'Brésil'], 'Le vote est obligatoire au Brésil.', 'Voto.'),
        livre('Escreva em francês: Na França, o voto não é obrigatório, mas todo mundo tem o direito de votar. O presidente é eleito por cinco anos.', 'En France, le vote n\'est pas obligatoire, mais tout le monde a le droit de voter. Le président est élu pour cinq ans.'),
      ]),
      producao(5, 'Fale 1 minuto sobre um direito que você acha importante.'),
    ]),
  ],
});
