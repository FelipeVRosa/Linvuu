import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 50, titulo: 'Emprego, currículo e entrevista', nivel: 'b1',
  objetivo: 'Falar de formação e experiência, entender uma vaga, escrever uma carta de motivação e responder perguntas de uma entrevista de emprego.',
  nota: 'Você está pronto para se candidatar a uma vaga em francês. Próxima aula: mídia, notícias e publicidade.',
  sessoes: [
    sessao('S1', 'O currículo', [
      revisao(5, 'Escreva em voz alta uma abertura e um fechamento de e-mail formal.'),
      palavras(8, [
        ['un CV', 'ẽ sevê', 'um currículo', ''], ['une offre d\'emploi', 'ün ofr dãplua', 'uma vaga', ''], ['un diplôme', 'ẽ diplom', 'um diploma', ''], ['l\'expérience', 'lekspérihãs', 'a experiência', ''], ['les compétences', 'lé kõpetãs', 'as competências', ''], ['un stage', 'ẽ staj', 'um estágio', ''], ['un poste', 'ẽ post', 'um cargo', ''], ['postuler', 'postülê', 'candidatar-se', ''],
      ]),
      gramatica(12, 'J\'ai travaillé, je suis diplômé', 'PASSO 1: formação: «J\'ai un diplôme en gestion.», «Je suis diplômé de l\'université de São Paulo.», «J\'ai fait des études de droit.» PASSO 2: experiência passada: passé composé + durée: «J\'ai travaillé trois ans chez X.» PASSO 3: experiência atual: presente + «depuis»: «Je travaille chez Y depuis 2022.» PASSO 4: competências: «Je sais utiliser Excel.», «Je suis capable de…», «Je maîtrise…» PASSO 5: idiomas: «Je parle couramment le portugais et l\'anglais, et j\'ai un niveau intermédiaire en français.» PASSO 6: qualidades: «sérieux», «motivé», «autonome», «organisé». PASSO 7: «responsable de» e «chargé de»: «J\'étais chargé de la comptabilité.» PASSO 8: no CV francês, os títulos são curtos: «Expérience», «Formation», «Compétences», «Langues».', {
        tag: 'Emprego',
        comparacao: 'em português, «formado em» é igual ao «diplômé de». Atenção: «un stage» é estágio, mas «une formation» é um curso de capacitação, não necessariamente a graduação. «Expérience» sozinho é singular em francês quando é profissional: «J\'ai de l\'expérience.»',
        tabela: [
          { secao: 'Formation', exemplo: 'Licence en gestion, USP, 2020' }, { secao: 'Expérience', exemplo: 'Assistant administratif, 2021–2024' }, { secao: 'Compétences', exemplo: 'Excel, comptabilité, gestion de projet' }, { secao: 'Langues', exemplo: 'Portugais : langue maternelle ; Français : B1' }, { secao: 'Centres d\'intérêt', exemplo: 'Lecture, football, voyages' }, { secao: 'Contact', exemplo: 'prenom.nom@email.com' },
        ],
        erros: [['J\'ai travaillé chez X depuis trois ans (e ainda trabalho).', 'Je travaille chez X depuis trois ans.', 'Continua: presente + depuis.'], ['J\'ai travaillé chez X depuis 2022.', 'Je travaille chez X depuis 2022.', 'Continua: presente.'], ['Je suis formé en gestion.', 'Je suis diplômé en gestion.', '«Diplômé».'], ['J\'ai des expériences.', 'J\'ai de l\'expérience.', 'Singular.']],
      }),
      producao(5, 'Apresente em voz alta a sua formação e sua experiência, em quatro frases.'),
    ]),
    sessao('S2', 'A carta de motivação', [
      revisao(4, 'Diga três frases do seu CV: formação, experiência e competências.'),
      palavras(6, [
        ['une lettre de motivation', 'ün létr dö motivasiõ', 'uma carta de motivação', ''], ['une candidature', 'ün kãdidatür', 'uma candidatura', ''], ['un entretien', 'ẽn ãtrötiẽ', 'uma entrevista', ''], ['un salaire', 'ẽ salér', 'um salário', ''], ['un recruteur', 'ẽ rökrütör', 'um recrutador', ''], ['motivé', 'motivê', 'motivado', ''],
      ]),
      gramatica(12, 'Je suis intéressé par votre offre', 'PASSO 1: abertura: «Je me permets de poser ma candidature au poste de…», «Votre annonce a retenu toute mon attention.» PASSO 2: motivação: «Je suis très motivé par ce poste car…», «Ce poste correspond à mon projet professionnel.» PASSO 3: argumentos: «Mon expérience de trois ans… m\'a permis de…» PASSO 4: o que você traz: «Je pourrais apporter à votre équipe…» PASSO 5: pedir entrevista: «Je serais heureux de vous rencontrer lors d\'un entretien.» PASSO 6: fechamento: «Dans l\'attente de votre réponse, je vous prie d\'agréer…» PASSO 7: use o condicional para soar educado: «Je souhaiterais», «je serais». PASSO 8: máximo uma página, 3–4 parágrafos.', {
        tag: 'Emprego',
        comparacao: 'a carta de motivação francesa é curta e direta: por que esta vaga, por que eu, quando posso falar. Evite frases vagas. Em português, é comum começar contando a vida; em francês, comece pela vaga.',
        tabela: [
          { etapa: 'abertura', exemplo: 'Je me permets de poser ma candidature au poste de…' }, { etapa: 'motivação', exemplo: 'Ce poste correspond à mon projet professionnel.' }, { etapa: 'experiência', exemplo: 'Mon expérience m\'a permis de…' }, { etapa: 'contribuição', exemplo: 'Je pourrais apporter à votre équipe…' }, { etapa: 'entrevista', exemplo: 'Je serais heureux de vous rencontrer.' }, { etapa: 'fechamento', exemplo: 'Je vous prie d\'agréer…' },
        ],
        erros: [['Je suis très intéressé de ce poste.', 'Je suis très intéressé par ce poste.', '«Intéressé par».'], ['Je veux le travail.', 'Je souhaiterais obtenir ce poste.', 'Formal e condicional.'], ['Mon expérience m\'a permis à apprendre.', 'Mon expérience m\'a permis d\'apprendre.', '«Permettre de».'], ['Je serai heureux de vous rencontrer.', 'Je serais heureux de vous rencontrer.', 'Condicional.']],
      }),
      producao(8, 'Escreva em voz alta uma carta de motivação curta para uma vaga, em quatro frases.'),
    ]),
    sessao('S3', 'A entrevista', [
      revisao(4, 'Diga por que você é a pessoa certa para uma vaga, em três frases.'),
      palavras(5, [
        ['une qualité', 'ün kalité', 'uma qualidade', ''], ['un défaut', 'ẽ defô', 'um defeito', ''], ['un objectif', 'ẽn objektif', 'um objetivo', ''], ['une équipe', 'ün ekip', 'uma equipe', ''], ['disponible', 'disponibl', 'disponível', ''],
      ]),
      gramatica(8, 'As perguntas clássicas', 'PASSO 1: «Parlez-moi de vous.» → «Je m\'appelle…, j\'ai… ans, je suis diplômé de…» PASSO 2: «Pourquoi ce poste ?» → «Parce que… correspond à…» PASSO 3: «Quelles sont vos qualités ?» → «Je suis organisé, sérieux, autonome.» PASSO 4: «Quel est votre principal défaut ?» → «Je suis parfois trop perfectionniste.» PASSO 5: «Où vous voyez-vous dans cinq ans ?» → «Je me vois…» PASSO 6: «Quand pouvez-vous commencer ?» → «Je suis disponible dès…»', {
        tag: 'Emprego',
        comparacao: 'em francês, o entrevistador usa «vous». Responda em frases completas, sem gírias, e evite respostas de uma palavra. Quando não souber a palavra, diga «Comment dit-on… ?».',
        tabela: [
          { pergunta: 'Parlez-moi de vous.', resposta: 'Je suis diplômé de…, j\'ai deux ans d\'expérience.' }, { pergunta: 'Pourquoi ce poste ?', resposta: 'Il correspond à mon projet professionnel.' }, { pergunta: 'Vos qualités ?', resposta: 'Je suis organisé et autonome.' }, { pergunta: 'Votre défaut ?', resposta: 'Je suis parfois trop perfectionniste.' }, { pergunta: 'Dans cinq ans ?', resposta: 'Je me vois responsable d\'équipe.' }, { pergunta: 'Disponibilité ?', resposta: 'Je suis disponible dès le mois prochain.' },
        ],
        erros: [['Je suis intéressé de ce poste.', 'Je suis intéressé par ce poste.', '«Par».'], ['Je me vois dans cinq ans responsable.', 'Dans cinq ans, je me vois responsable d\'équipe.', 'Ordem.'], ['Je suis disponible à partir de mois prochain.', 'Je suis disponible dès le mois prochain.', '«Dès».'], ['Je sais pas.', 'Je ne sais pas, mais je peux apprendre.', 'Formal e positivo.']],
      }),
      dialogo(8, 'Un entretien / Uma entrevista', 'Mme Roux entrevista Lucas para uma vaga.', [
        ['Mme Roux', 'Bonjour, Lucas. Parlez-moi de vous, s\'il vous plaît.', 'Bom dia, Lucas. Fale-me de você, por favor.'], ['Lucas', 'Bonjour, Madame. Je suis diplômé en gestion et j\'ai travaillé trois ans dans une entreprise de logistique.', 'Bom dia, senhora. Sou formado em gestão e trabalhei três anos em uma empresa de logística.'], ['Mme Roux', 'Pourquoi ce poste vous intéresse-t-il ?', 'Por que esta vaga lhe interessa?'], ['Lucas', 'Il correspond à mon projet professionnel et j\'aimerais travailler dans un contexte international.', 'Ela corresponde ao meu projeto profissional e eu gostaria de trabalhar em um contexto internacional.'], ['Mme Roux', 'Quelles sont vos principales qualités ?', 'Quais são as suas principais qualidades?'], ['Lucas', 'Je suis organisé, autonome et j\'aime travailler en équipe.', 'Sou organizado, autônomo e gosto de trabalhar em equipe.'],
      ]),
      producao(5, 'Responda em voz alta às três perguntas mais comuns de uma entrevista.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 50', [
      revisao(5, 'Simule em voz alta uma entrevista de dois minutos.'),
      exercicios(20, [
        ouvir('Je suis diplômé en gestion', ['Je suis diplômé en gestion', 'Je suis diplômée en gestion', 'Je suis formé en gestion'], 'Je suis diplômé en gestion', 'Ouça «diplômé».'), ouvir('Je travaille ici depuis 2022', ['Je travaille ici depuis 2022', 'J\'ai travaillé ici depuis 2022', 'Je travaillais ici depuis 2022'], 'Je travaille ici depuis 2022', 'Presente.'), ouvir('Je me permets de poser ma candidature', ['Je me permets de poser ma candidature', 'Je me permets de poser ma question', 'Je me permets de poser ma lettre'], 'Je me permets de poser ma candidature', 'Ouça «candidature».'),
        ditado('Parlez-moi de vous', 'Escreva: Parlez-moi de vous.'), ditado('Je suis disponible dès le mois prochain', 'Escreva: Je suis disponible dès le mois prochain.'), ditado('Ce poste correspond à mon projet professionnel', 'Escreva: Ce poste correspond à mon projet professionnel.'),
        mc('«Une offre d\'emploi» é:', ['uma vaga', 'uma oferta de comida', 'um salário'], 'uma vaga', 'Vaga.'), mc('Para dizer que continua trabalhando lá:', ['Je travaille là-bas depuis 2022.', 'J\'ai travaillé là-bas depuis 2022.', 'Je travaillais là-bas depuis 2022.'], 'Je travaille là-bas depuis 2022.', 'Presente + depuis.'), mc('Qual frase está correta?', ['Je suis intéressé par ce poste.', 'Je suis intéressé de ce poste.', 'Je suis intéressé à ce poste.'], 'Je suis intéressé par ce poste.', '«Par».'), mc('Pronome usado numa entrevista:', ['vous', 'tu', 'on'], 'vous', 'Formal.'),
        lacuna('Je suis ___ de l\'université de São Paulo. (formado)', ['diplômé', 'diplômer', 'diplôme'], 'diplômé', 'Formação.'), lacuna('J\'ai de l\'___ en gestion. (experiência)', ['expérience', 'expériences', 'expériment'], 'expérience', 'Singular.'), lacuna('Mon expérience m\'a permis ___ apprendre.', ['d\'', 'à', 'de'], 'd\'', '«Permis d\'apprendre».'), lacuna('Je ___ heureux de vous rencontrer. (seria)', ['serais', 'serai', 'suis'], 'serais', 'Condicional.'),
        ordem('Ordene: «Je suis diplômé en gestion.»', ['Je', 'suis', 'diplômé', 'en', 'gestion'], 'Je suis diplômé en gestion.', 'Formação.'), ordem('Ordene: «Parlez-moi de vous.»', ['Parlez-moi', 'de', 'vous'], 'Parlez-moi de vous.', 'Entrevista.'),
        livre('Escreva em francês: Sou formado em gestão e trabalho há três anos em uma empresa. Estou interessado nesta vaga.', 'Je suis diplômé en gestion et je travaille depuis trois ans dans une entreprise. Je suis intéressé par ce poste.'),
        lacuna('J\'étais ___ de la comptabilité. (encarregado)', ['chargée', 'chargés', 'chargé'], 'chargé', '«Être chargé de» + substantivo.'),
        lacuna('Je parle ___ le portugais et l\'anglais. (fluentemente)', ['couramment', 'bientôt', 'souvent'], 'couramment', '«Couramment» = fluentemente.'),
        lacuna('Ce poste correspond ___ mon projet professionnel. (a)', ['de', 'à', 'pour'], 'à', '«Correspondre à».'),
        lacuna('J\'ai travaillé trois ans ___ cette entreprise. (na)', ['en', 'à', 'dans'], 'dans', 'A empresa como lugar de trabalho: «dans».'),
        lacuna('Je souhaiterais ___ ce poste. (obter)', ['obtenir', 'obtenu', 'obtient'], 'obtenir', 'Depois de «souhaiter», usa-se o infinitivo.'),
        mc('O que é «un stage»?', ['um salário', 'um estágio', 'um currículo'], 'um estágio', '«Stage» = estágio.'),
        mc('Qual resposta é adequada para «Où vous voyez-vous dans cinq ans ?»', ['Je vois moi responsable.', 'Je suis vu responsable.', 'Je me vois responsable d\'équipe.'], 'Je me vois responsable d\'équipe.', 'Verbo pronominal «se voir».'),
        mc('Como dizer «Sou formado em direito»?', ['Je suis diplômé en droit.', 'Je suis formé en droit.', 'J\'ai diplômé en droit.'], 'Je suis diplômé en droit.', '«Être diplômé en».'),
        mc('Qual frase é correta para algo que já terminou?', ['Je travaille trois ans chez X.', 'J\'ai travaillé trois ans chez X.', 'Je travaille depuis trois ans chez X.'], 'J\'ai travaillé trois ans chez X.', 'Fato terminado: passé composé.'),
        ordem('Ordene: «Sou organizado, sério e autônomo.»', ['Je', 'suis', 'organisé,', 'sérieux', 'et', 'autonome'], 'Je suis organisé, sérieux et autonome.', 'Qualidades com «être».'),
        ordem('Ordene: «Seu anúncio chamou minha atenção.»', ['Votre', 'annonce', 'a', 'retenu', 'mon', 'attention'], 'Votre annonce a retenu mon attention.', 'Expressão fixa da carta de motivação.'),
        livre('Escreva em francês: Trabalhei dois anos numa empresa. Sou autônomo e motivado.', 'J\'ai travaillé deux ans dans une entreprise. Je suis autonome et motivé.'),
        livre('Escreva em francês: Falo português e inglês fluentemente. Sei usar Excel.', 'Je parle couramment le portugais et l\'anglais. Je sais utiliser Excel.'),
      ]),
      producao(5, 'Apresente-se em voz alta em 1 minuto, como numa entrevista de emprego.'),
    ]),
  ],
});
