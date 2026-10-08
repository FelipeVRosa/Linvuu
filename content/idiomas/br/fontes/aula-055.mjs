import { aula, sessao, revisao, producao, palavras, dialogo, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 55, titulo: 'Work and the job interview', nivel: 'b1',
  objetivo: 'Present your education and experience, answer common interview questions with examples, talk about contract benefits and ask good questions at the end of a job interview in Brazilian Portuguese.',
  nota: 'You can now describe your career, answer the main interview questions, understand a job ad and benefits, and write «há» and «desde» correctly. Next lesson: news and media (headlines and short news texts).',
  sessoes: [
    sessao('S1', 'Your background: job ads, CV and experience', [
      revisao(5, 'Say three sentences about your job or studies using the present, the preterite and «gostaria de» (lessons 19, 35 and 41). Then read aloud: «Trabalho como professora.»'),
      palavras(8, [
        ['a vaga', 'ah VAH-gah', 'job opening, vacancy', ''], ['o candidato, a candidata', 'oo kah~-djee-DAH-too, ah kah~-djee-DAH-tah', 'candidate, applicant', ''], ['o currículo', 'oo koo-HEE-koo-loo', 'CV, résumé', ''], ['a experiência', 'ah ehs-peh-ree-EH~-syah', 'experience', ''],
        ['a formação', 'ah for-mah-SOW~', 'education, training', ''], ['formado, formada em', 'for-MAH-doo, for-MAH-dah eh~', 'a graduate in (a subject)', ''], ['a empresa', 'ah eh~-PREH-zah', 'company', ''], ['o cargo', 'oo KAR-goo', 'position, post', ''],
        ['o emprego', 'oo eh~-PREH-goo', 'job, employment', ''], ['o estágio', 'oo ees-TAH-zhyoo', 'internship', ''], ['contratar', 'koh~-trah-TAR', 'to hire', ''], ['a faculdade', 'ah fah-koo-oo-DAH-djee', 'university, college', ''],
      ]),
      gramatica(12, 'Talking about your experience: «há», «desde», «formado em» and «tenho experiência em»', "STEP 1: for something you started in the past and still do, Portuguese uses the present tense + «há» + a period of time: «Trabalho nesta empresa há cinco anos.» («I have worked at this company for five years.») Do not use the compound past for this. «Tenho trabalhado» means «I have been working lately, repeatedly», not «for five years». STEP 2: «desde» + a starting point: «Moro em Recife desde 2019.» «Estudo português desde janeiro.» So: «há» = a length of time (há três anos), «desde» = the starting moment (desde 2021). STEP 3: for a finished period, use the preterite: «Trabalhei numa loja por dois anos.» «Fiz um estágio em 2022.» With «há» in the preterite sentence, «há» means «ago»: «Comecei há dois anos.» (I started two years ago.) STEP 4: education: «Sou formado em Engenharia» / «Sou formada em Direito» (the course, not the profession) or «Fiz faculdade de Letras». Careful: «colégio» is a school (before university), not «college»; the university is «faculdade» or «universidade». STEP 5: say what you can do: «Tenho experiência em atendimento ao cliente.» «Tenho facilidade para línguas.» «Já trabalhei com vendas.» «Estou procurando emprego na área de tecnologia.»", {
        tag: 'Work',
        comparacao: "English uses the present perfect («I have worked here for five years», «since 2019»). Brazilian Portuguese uses the plain present with «há» or «desde»: «trabalho aqui há cinco anos», «trabalho aqui desde 2019». Saying «tenho trabalhado aqui por cinco anos» is understandable but sounds unnatural.",
        tabela: [
          { structure: 'present + há + period', meaning: 'still happening, for how long', example: 'Trabalho aqui há três anos.' },
          { structure: 'present + desde + starting point', meaning: 'still happening, since when', example: 'Trabalho aqui desde 2023.' },
          { structure: 'preterite + por + period', meaning: 'finished period', example: 'Trabalhei lá por dois anos.' },
          { structure: 'preterite + há + period', meaning: 'ago', example: 'Saí da empresa há um ano.' },
          { structure: 'sou formado/formada em + course', meaning: 'I am a graduate in', example: 'Sou formada em Administração.' },
        ],
        erros: [['Eu tenho trabalhado aqui por cinco anos.', 'Trabalho aqui há cinco anos.', 'For a situation that continues up to now, use the present with «há».'], ['Trabalho como engenheiro há 2005.', 'Trabalho como engenheiro desde 2005.', '«Há» goes with a period of time; «desde» goes with a starting point.'], ['Sou formado em engenheiro.', 'Sou formado em Engenharia.', 'You graduate in a course (Engenharia), not in a profession.'], ['Fiz o colégio de Engenharia.', 'Fiz a faculdade de Engenharia.', '«Colégio» is a school before university. The university is «faculdade».']],
      }),
      producao(5, 'Introduce your career in four sentences: what you do (or study), for how long («há»), since when («desde»), and one earlier job or internship in the preterite.'),
    ]),
    sessao('S2', 'Interview questions and answers', [
      revisao(4, 'Say aloud: «Trabalho aqui há…», «Moro aqui desde…», «Sou formado/formada em…», «Tenho experiência em…».'),
      palavras(6, [
        ['a entrevista', 'ah eh~-treh-VEES-tah', 'interview', ''], ['o entrevistador', 'oo eh~-treh-vees-tah-DOR', 'interviewer', ''], ['o ponto forte', 'oo POH~-too FOR-tchee', 'strength', ''], ['o ponto fraco', 'oo POH~-too FRAH-koo', 'weakness', ''],
        ['a pretensão salarial', 'ah preh-teh~-SOW~ sah-lah-ree-OW', 'expected salary (not «pretension»)', ''], ['a equipe', 'ah eh-KEE-pee', 'team (feminine)', ''], ['o desafio', 'oo deh-zah-FEE-oo', 'challenge', ''], ['a facilidade para', 'ah fah-see-lee-DAH-djee PAH-rah', 'an ease with, a talent for', ''],
        ['daqui a', 'dah-KEE ah', 'in (from now): daqui a cinco anos', ''],
      ]),
      gramatica(12, 'Answering the usual questions with a claim, an example and polite verbs', "STEP 1: know the questions you will hear. «Fale um pouco sobre você.» «Por que você quer trabalhar aqui?» «Quais são os seus pontos fortes?» «Qual é o seu maior ponto fraco?» «Onde você se vê daqui a cinco anos?» «Qual é a sua pretensão salarial?» «Quando você poderia começar?» The interviewer often says «você» (or «o senhor/a senhora» in traditional companies). STEP 2: answer in two parts, a claim and an example. The claim is in the present («Sou organizada.»), the example in the preterite («No último emprego, organizei o estoque inteiro.»). Link it to the job: «Acho que isso pode ajudar a equipe.» STEP 3: show courtesy and modesty with the conditional: «Eu gostaria de aprender mais.» «Eu poderia contribuir com a área de vendas.» STEP 4: use «se» + imperfect subjunctive + conditional for what you would do, and «se» + future subjunctive for a real possibility: «Se eu fosse contratada, me dedicaria ao projeto.» «Se eu for contratada, posso começar em duas semanas.» STEP 5: at the end, ask your own questions: «Como é a rotina da equipe?» «Quais são os próximos passos do processo?» «Quando posso esperar um retorno?» Beware: «pretensão salarial» is the salary you expect, and «pretender» means «to intend», never «to pretend» (that is «fingir»).", {
        tag: 'Work',
        comparacao: "In English, «Tell me about yourself» invites a free story. In Brazil, interviewers also expect a short, modest answer about your training, experience and goals. «Pretender» looks like «pretend» but means «to intend»: «Pretendo crescer na empresa» = «I intend to grow with the company».",
        tabela: [
          { question: 'Fale um pouco sobre você.', model_answer: 'Sou formada em Design e trabalho com marketing há três anos.' },
          { question: 'Quais são os seus pontos fortes?', model_answer: 'Sou organizada e tenho facilidade para trabalhar em equipe.' },
          { question: 'Qual é o seu maior ponto fraco?', model_answer: 'Às vezes demoro para delegar tarefas, mas estou melhorando.' },
          { question: 'Onde você se vê daqui a cinco anos?', model_answer: 'Espero estar liderando projetos na área.' },
          { question: 'Qual é a sua pretensão salarial?', model_answer: 'Gostaria de conversar sobre a faixa salarial da vaga.' },
          { question: 'Quando você poderia começar?', model_answer: 'Posso começar em duas semanas.' },
        ],
        erros: [['Eu gosto do equipe.', 'Eu gosto da equipe.', '«Equipe» is feminine: «a equipe».'], ['Onde você se vê daqui cinco anos?', 'Onde você se vê daqui a cinco anos?', 'The expression is «daqui a» + time.'], ['Se eu serei contratada, começo logo.', 'Se eu for contratada, começo logo.', 'After «se» in a real future condition, use the future subjunctive («for»), not the future.']],
      }),
      producao(8, 'Role-play the interviewer and the candidate for a job you would like. Ask and answer at least five questions from the table. In every answer give a claim in the present and an example in the preterite.'),
    ]),
    sessao('S3', 'Benefits, offers and the interview dialogue', [
      revisao(4, 'Answer aloud: «Fale um pouco sobre você.» and «Quais são os seus pontos fortes?» in two sentences each.'),
      palavras(5, [
        ['o funcionário, a funcionária', 'oo foon~-syoh-NAH-ryoo, ah foon~-syoh-NAH-ryah', 'employee', ''], ['atual', 'ah-too-AW', 'current (not «actual»; «atualmente» = currently)', ''], ['o décimo terceiro', 'oo DEH-see-moo tehr-SAY-roo', 'thirteenth salary, paid at the end of the year to formally employed workers', ''], ['o vale-refeição', 'oo VAH-lee heh-fay-SOW~', 'meal voucher (a common benefit)', ''],
        ['o plano de saúde', 'oo PLAH~-noo djee sah-OO-djee', 'health insurance plan', ''], ['as férias', 'ahs FEH-ryahs', 'vacation (always plural)', ''], ['o horário flexível', 'oo oh-RAH-ryoo flek-SEE-vee-oo', 'flexible hours', ''], ['o trabalho remoto', 'oo trah-BAH-lyoo heh-MOH-too', 'remote work (also «home office», in English)', ''],
      ]),
      gramatica(8, 'Talking about contracts and benefits, and making promises with the future subjunctive', "STEP 1: in Brazil, a formal job is described as «com carteira assinada» (the employer registers the contract in your work record). Employees with this kind of contract have the right to paid vacation (a month a year) and to the «décimo terceiro salário», an extra payment at the end of the year. Many companies add benefits such as «vale-refeição» (or «vale-alimentação»), «plano de saúde» and «auxílio-transporte» (transport support). STEP 2: describe what the company offers with «oferecer» and «ter»: «Oferecemos plano de saúde e horário flexível.» Ask: «A vaga é presencial, remota ou híbrida?» «O contrato é com carteira assinada?» STEP 3: promises and conditions use «quando», «assim que» and «se» with the future subjunctive, and the present or the future in the main clause: «Assim que você for contratado, nós entraremos em contato.» «Quando o processo terminar, avisamos todos os candidatos.» STEP 4: for politeness, the company says «Entraremos em contato» (we will contact you) or «Retornaremos até sexta-feira». The candidate says «Fico no aguardo» (I will wait for your reply).", {
        tag: 'Work',
        comparacao: "In English you say «when he arrives, I will call» with the present. Portuguese uses a special form: «quando ele chegar, eu ligo». The future subjunctive (-r) is the key in all these promises: «quando eu terminar», «assim que você chegar», «se eu for contratada».",
        tabela: [
          { benefit: 'o décimo terceiro', meaning: 'an extra payment at year end', note: 'for formal contracts' },
          { benefit: 'o vale-refeição', meaning: 'card or voucher for meals', note: 'offered by many companies' },
          { benefit: 'o plano de saúde', meaning: 'private health insurance', note: 'in addition to the public system' },
          { benefit: 'as férias', meaning: 'paid vacation', note: 'always plural' },
          { benefit: 'o horário flexível', meaning: 'flexible schedule', note: 'often with remote work' },
        ],
        erros: [['Quando você chega, nós ligamos.', 'Quando você chegar, nós ligamos.', 'A future event after «quando» uses the future subjunctive.'], ['Assim que eu terminar, avisei você.', 'Assim que eu terminar, aviso você.', 'In a sentence about the future, the main verb is in the present or the future, never in the preterite.'], ['As férias é um mês.', 'As férias são de um mês.', '«Férias» is plural and takes a plural verb.']],
      }),
      dialogo(8, 'A job interview', 'Rafael applies for a sales job. The interviewer talks to him in a small company.', [
        ['The interviewer (f)', 'Boa tarde, Rafael. Obrigada por vir. Fale um pouco sobre você.', 'Good afternoon, Rafael. Thank you for coming. Tell me a little about yourself.'], ['Rafael', 'Boa tarde. Sou formado em Administração e trabalho com vendas há quatro anos.', 'Good afternoon. I am a graduate in Business Administration and I have worked in sales for four years.'],
        ['The interviewer (f)', 'Por que você quer trabalhar na nossa empresa?', 'Why do you want to work at our company?'], ['Rafael', 'Porque gosto de trabalhar em equipe e vi que a empresa investe na formação dos funcionários.', 'Because I like working in a team and I saw that the company invests in the training of its employees.'],
        ['The interviewer (f)', 'Qual é o seu maior ponto fraco?', 'What is your biggest weakness?'], ['Rafael', 'Às vezes tenho dificuldade de dizer não, mas estou aprendendo a organizar melhor as prioridades.', 'Sometimes I find it hard to say no, but I am learning to organize priorities better.'],
        ['The interviewer (f)', 'Quando você poderia começar, se fosse contratado?', 'When could you start, if you were hired?'], ['Rafael', 'Em duas semanas, assim que eu avisar a minha empresa atual.', 'In two weeks, as soon as I notify my current company.'],
        ['The interviewer (f)', 'Muito bem. Temos plano de saúde, vale-refeição e horário flexível. Alguma pergunta?', 'Very good. We offer a health plan, meal vouchers and flexible hours. Any questions?'], ['Rafael', 'Sim. Quais são os próximos passos do processo?', 'Yes. What are the next steps in the process?'],
        ['The interviewer (f)', 'Entraremos em contato até sexta-feira.', 'We will contact you by Friday.'], ['Rafael', 'Obrigado pela oportunidade. Até logo!', 'Thank you for the opportunity. See you soon!'],
      ]),
      producao(5, 'Describe your ideal job in four sentences: the position, the hours («horário flexível» or not), two benefits, and a promise: «Quando eu trabalhar nessa empresa, …».'),
    ]),
    sessao('S4', 'Review and practice of lesson 55', [
      revisao(5, 'Say aloud: how long you do your current activity («há»), since when («desde»), one strength with an example in the preterite, and one question for the interviewer.'),
      exercicios(20, [
        ouvir('Trabalho nesta empresa há cinco anos.', ['Trabalho nesta empresa há cinco anos.', 'Trabalhei nesta empresa há cinco anos.', 'Trabalho nesta empresa desde cinco anos.'], 'Trabalho nesta empresa há cinco anos.', 'Present + «há» for a situation that continues.'),
        ouvir('Sou formada em Engenharia.', ['Sou formada em Engenharia.', 'Sou formado em Engenharia.', 'Sou formada em engenheira.'], 'Sou formada em Engenharia.', 'A woman says «formada».'),
        ouvir('Qual é a sua pretensão salarial?', ['Qual é a sua pretensão salarial?', 'Qual é a sua profissão atual?', 'Qual é o seu ponto fraco?'], 'Qual é a sua pretensão salarial?', '«Pretensão salarial» is the salary you expect.'),
        ouvir('Onde você se vê daqui a cinco anos?', ['Onde você se vê daqui a cinco anos?', 'Onde você trabalhou há cinco anos?', 'Onde você mora há cinco anos?'], 'Onde você se vê daqui a cinco anos?', '«Daqui a» looks to the future.'),
        ouvir('A vaga é para o cargo de analista.', ['A vaga é para o cargo de analista.', 'A vaga é para o estágio de analista.', 'A vaga é para o cargo de gerente.'], 'A vaga é para o cargo de analista.', 'Listen for «cargo» and «analista».'),
        ditado('Fale um pouco sobre você.', 'Write: Fale um pouco sobre você. This is the usual opening question.'), ditado('Tenho experiência em vendas.', 'Write: Tenho experiência em vendas.'), ditado('Quando você poderia começar?', 'Write: Quando você poderia começar?'),
        mc('Which sentence means «I have worked here for five years» (and still do)?', ['Trabalho aqui há cinco anos.', 'Trabalhei aqui há cinco anos.', 'Trabalharei aqui há cinco anos.'], 'Trabalho aqui há cinco anos.', 'Present + «há».'),
        mc('Which is correct?', ['Sou formado em Engenharia.', 'Sou formado em engenheiro.', 'Sou formado engenharia.'], 'Sou formado em Engenharia.', 'Use «em» + the course.'),
        mc('What does «pretensão salarial» mean?', ['expected salary', 'a fake salary', 'salary raise'], 'expected salary', 'It is a false friend of English «pretension».'),
        mc('What does «colégio» mean?', ['a school before university', 'college or university', 'library'], 'a school before university', 'The university is «faculdade».'),
        mc('How do you say «in five years» (from now)?', ['daqui a cinco anos', 'há cinco anos', 'cinco anos atrás'], 'daqui a cinco anos', '«Daqui a» + time = from now.'),
        lacuna('Trabalho aqui ___ três anos.', ['há', 'desde', 'a'], 'há', '«Há» goes with a length of time.'), lacuna('Moro em São Paulo ___ 2019.', ['desde', 'há', 'por'], 'desde', '«Desde» goes with a starting point.'),
        lacuna('Eu gosto muito ___ equipe.', ['da', 'do', 'de'], 'da', '«Equipe» is feminine: «da equipe».'), lacuna('Se eu ___ contratado, começo em maio. (ser)', ['for', 'fosse', 'sou'], 'for', 'A real future condition: «se» + future subjunctive.'),
        ordem('Put in order: «Tenho experiência em vendas.»', ['Tenho', 'experiência', 'em', 'vendas.'], 'Tenho experiência em vendas.', 'Use «em» after «experiência».'),
        ordem('Put in order: «Trabalho nesta empresa há cinco anos.»', ['Trabalho', 'nesta', 'empresa', 'há', 'cinco', 'anos.'], 'Trabalho nesta empresa há cinco anos.', 'Present + «há» + period.'),
        ordem('Put in order: «Qual é a sua pretensão salarial?»', ['Qual', 'é', 'a', 'sua', 'pretensão', 'salarial?'], 'Qual é a sua pretensão salarial?', 'A typical interview question.'),
        livre('Write in Portuguese: I have worked as a teacher for three years.', 'Trabalho como professor há três anos.'),
        livre('Write in Portuguese: Could you start in two weeks?', 'Você poderia começar em duas semanas?'),
      ]),
      producao(5, 'Do a two-minute mock interview aloud: introduce yourself, give one strength with an example, say when you could start, and ask one question about the team.'),
    ]),
  ],
});
