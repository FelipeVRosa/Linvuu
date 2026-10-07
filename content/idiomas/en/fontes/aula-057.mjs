import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 57, titulo: 'Trabalho e carreira: currículo e entrevista', nivel: 'b1',
  objetivo: 'Falar de experiência, habilidades e metas profissionais, e responder perguntas comuns de uma entrevista de emprego.',
  nota: 'Você se apresenta profissionalmente em inglês. Próxima aula: mídia e tecnologia.',
  sessoes: [
    sessao('S1', 'Vocabulário do trabalho', [
      revisao(5, 'Escreva e leia um e-mail formal pedindo informações.'),
      palavras(8, [
        ['job', 'djób', 'emprego', ''], ['career', 'caríir', 'carreira', ''], ['experience', 'ikspíriens', 'experiência', ''], ['skills', 'skílz', 'habilidades', ''], ['resume', 'rézumei', 'currículo (EUA)', ''], ['apply for', 'aplái fór', 'candidatar-se a', ''], ['interview', 'íntervru', 'entrevista', ''], ['salary', 'sáleri', 'salário', ''],
      ]),
      gramatica(12, 'Descrever sua experiência', 'PASSO 1: fale do trabalho atual com presente simples: «I work as a teacher.» PASSO 2: fale da duração com present perfect + for/since: «I have worked here for five years.» PASSO 3: fale de trabalhos passados com passado simples: «I worked at a bank in 2018.» PASSO 4: habilidades: «I am good at + -ing», «I can + verbo», «I am experienced in…»: «I am good at solving problems.» PASSO 5: responsabilidades: «I am responsible for + -ing»: «I am responsible for managing the team.» PASSO 6: metas: «I would like to…», «I am looking for…», «My goal is to…».', {
        tag: 'Experiência',
        comparacao: 'em português dizemos «trabalho há cinco anos aqui». Em inglês, «I have worked here for five years», com present perfect.',
        tabela: [
          { funcao: 'trabalho atual', frase: 'I work as a teacher.' }, { funcao: 'duração', frase: 'I have worked here for five years.' }, { funcao: 'passado', frase: 'I worked at a bank in 2018.' }, { funcao: 'habilidade', frase: 'I am good at solving problems.' }, { funcao: 'meta', frase: 'My goal is to become a manager.' },
        ],
        erros: [['I work here since 2019.', 'I have worked here since 2019.', 'since pede present perfect.'], ['I am good in solve problems.', 'I am good at solving problems.', 'good at + -ing.'], ['I am responsible to manage.', 'I am responsible for managing.', 'responsible for + -ing.'], ['I am looking a job.', 'I am looking for a job.', 'look for.']],
      }),
      producao(5, 'Apresente seu trabalho (ou o que você gostaria de fazer), duração e habilidades em 6 frases.'),
    ]),
    sessao('S2', 'Currículo (resume)', [
      revisao(4, 'Complete: «I ___ here for 5 years. I am good ___ solving problems.»'),
      palavras(6, [
        ['education', 'edjukêichn', 'formação', ''], ['degree', 'digrii', 'diploma', ''], ['achievement', 'atchívmnt', 'conquista', ''], ['responsibilities', 'rispónsibilitiz', 'responsabilidades', ''], ['reference', 'réfrns', 'referência', ''], ['bilingual', 'bailínguol', 'bilíngue', ''],
      ]),
      gramatica(12, 'Escrever o currículo', 'PASSO 1: use VERBOS DE AÇÃO no passado para conquistas: «managed», «created», «improved», «organized». PASSO 2: use frases curtas sem sujeito: «Managed a team of five.» (padrão em CV). PASSO 3: ordem: dados de contato, resumo, experiência, formação, habilidades, idiomas. PASSO 4: números dão força: «Increased sales by 20%.» PASSO 5: cargo atual no presente: «Manage a team…». PASSO 6: sem «I» e sem fotos pessoais (nos EUA). PASSO 7: idiomas: «Portuguese (native), English (intermediate)».', {
        tag: 'Currículo',
        comparacao: 'em português escrevemos «Gerenciei uma equipe» com sujeito oculto. Em inglês, o CV usa o verbo no passado sem «I»: «Managed a team».',
        tabela: [
          { verbo: 'managed', exemplo: 'Managed a team of five.' }, { verbo: 'created', exemplo: 'Created a new training program.' }, { verbo: 'improved', exemplo: 'Improved customer service.' }, { verbo: 'increased', exemplo: 'Increased sales by 20%.' },
        ],
        erros: [['I managed a team of five.', 'Managed a team of five.', 'No CV, sem «I».'], ['Responsible of the sales.', 'Responsible for the sales.', 'responsible for.'], ['Experience of 5 years.', '5 years of experience.', 'Ordem em inglês.']],
      }),
      producao(8, 'Escreva 6 linhas de currículo com verbos de ação e números.'),
    ]),
    sessao('S3', 'Entrevista', [
      revisao(4, 'Reescreva 3 frases do seu currículo com verbo de ação.'),
      palavras(5, [
        ['strength', 'strénkth', 'ponto forte', ''], ['weakness', 'uíknis', 'ponto fraco', ''], ['challenge', 'tchálindj', 'desafio', ''], ['teamwork', 'tiimuôrk', 'trabalho em equipe', ''], ['hire', 'rái-ar', 'contratar', ''],
      ]),
      gramatica(8, 'Responder perguntas de entrevista', 'PASSO 1: «Tell me about yourself.» → resuma em 3 frases: quem é, experiência, objetivo. PASSO 2: «What are your strengths?» → «I am organized and I work well in a team.» PASSO 3: «What is your weakness?» → seja honesto e mostre melhoria: «I used to be shy, but I am improving.» PASSO 4: «Why do you want this job?» → «I am interested in… because…» PASSO 5: «Where do you see yourself in five years?» → «I hope to be… ». PASSO 6: pergunte algo no fim: «What are the next steps?».', {
        tag: 'Entrevista',
        comparacao: 'em português respondemos com histórias longas. Em entrevistas em inglês, prefira respostas curtas e objetivas, com exemplos.',
        tabela: [
          { pergunta: 'Tell me about yourself.', resposta: 'I am a teacher with five years of experience.' }, { pergunta: 'What are your strengths?', resposta: 'I am organized and creative.' }, { pergunta: 'Why this job?', resposta: 'I am interested in working with people.' }, { pergunta: 'In five years?', resposta: 'I hope to be a manager.' },
        ],
        erros: [['I am agree with the position.', 'I am interested in the position.', 'Evite agree.'], ['I have 30 years.', 'I am 30 years old.', 'Idade com be.']],
      }),
      dialogo(8, 'Job interview / Entrevista de emprego', 'Ms. Green entrevista Ana.', [
        ['Ms. Green', 'Thank you for coming, Ana. Tell me about yourself.', 'Obrigada por vir, Ana. Fale sobre você.'], ['Ana', 'I am a teacher. I have worked at a language school for five years.', 'Sou professora. Trabalho em uma escola de idiomas há cinco anos.'], ['Ms. Green', 'What are your strengths?', 'Quais são seus pontos fortes?'], ['Ana', 'I am organized and I work well in a team.', 'Sou organizada e trabalho bem em equipe.'], ['Ms. Green', 'Why do you want this job?', 'Por que quer este emprego?'], ['Ana', 'I am interested in learning new things, and I would like to grow here.', 'Tenho interesse em aprender e gostaria de crescer aqui.'],
      ]),
      producao(5, 'Responda por escrito: «Tell me about yourself» em 5 frases.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 57', [
      revisao(5, 'Responda em voz alta: «Tell me about yourself» e «What are your strengths?»'),
      exercicios(20, [
        ouvir('I have worked here for five years', ['I have worked here for five years', 'I work here since five years', 'I worked here for five years'], 'I have worked here for five years', 'Ouça «have worked».'), ouvir('I am good at solving problems', ['I am good at solving problems', 'I am good in solve problems', 'I am good to solving problems'], 'I am good at solving problems', 'Ouça «good at».'), ditado('Managed a team of five', 'Escreva: managed a team of five.'), ditado('Tell me about yourself', 'Escreva: tell me about yourself.'),
        mc('Qual frase está correta?', ['I have worked here since 2019.', 'I work here since 2019.', 'I am working here since 2019.'], 'I have worked here since 2019.', 'since + present perfect.'), mc('Qual frase está correta?', ['I am responsible for managing the team.', 'I am responsible to manage the team.', 'I am responsible of managing.'], 'I am responsible for managing the team.', 'responsible for + -ing.'), mc('Como começar uma linha de CV?', ['Managed a team.', 'I managed a team.', 'I am managing a team.'], 'Managed a team.', 'Verbo de ação, sem «I».'), mc('Qual resposta é boa para «What are your strengths?»', ['I am organized.', 'I have 30 years.', 'I am agree.'], 'I am organized.', 'Ponto forte.'),
        lacuna('I am looking ___ a job. (por)', ['for', 'to', 'at'], 'for', 'look for.'), lacuna('I am good ___ solving problems.', ['at', 'in', 'of'], 'at', 'good at.'), lacuna('I ___ here for five years. (trabalho há)', ['have worked', 'work', 'worked'], 'have worked', 'present perfect.'), lacuna('My goal ___ to become a manager.', ['is', 'are', 'be'], 'is', 'My goal is.'),
        ordem('Ordene: «I am interested in this position.»', ['I', 'am', 'interested', 'in', 'this', 'position'], 'I am interested in this position.', 'interested in.'), ordem('Ordene: «I have worked here for five years.»', ['I', 'have', 'worked', 'here', 'for', 'five', 'years'], 'I have worked here for five years.', 'present perfect + for.'),
        livre('Escreva 4 frases de apresentação profissional: cargo, tempo, habilidade e meta.', 'I work as a teacher. I have worked here for five years. I am good at solving problems. My goal is to become a manager.'),
      ]),
      producao(5, 'Simule uma entrevista de 1 minuto, com 3 perguntas e respostas.'),
    ]),
  ],
});
