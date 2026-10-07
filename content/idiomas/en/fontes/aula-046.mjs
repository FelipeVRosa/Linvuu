import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 46, titulo: 'Relativas explicativas e redução', nivel: 'b1',
  objetivo: 'Distinguir orações relativas que identificam das que apenas acrescentam informação (entre vírgulas), usar «which» para comentar a frase inteira, e reduzir relativas com -ing e particípio.',
  nota: 'Você acrescenta informação com elegância e reduz frases longas. Próxima aula: discurso indireto.',
  sessoes: [
    sessao('S1', 'Relativas explicativas (com vírgulas)', [
      revisao(5, 'Defina 4 palavras com orações relativas.'),
      palavras(8, [
        ['my sister, who lives in Rio', 'mái síster, ru lívz in rio', 'minha irmã, que mora no Rio', ''], ['Brazil, which is huge', 'brazíl, uích íz riudj', 'o Brasil, que é enorme', ''], ['my boss, whose name is Tom', 'mái bós, ruz nêim íz tóm', 'meu chefe, cujo nome é Tom', ''], ['comma', 'cóma', 'vírgula', ''], ['extra information', 'ékstra infomêichon', 'informação extra', ''], ['only one', 'ôunli uân', 'só um', ''], ['born', 'bórn', 'nascido', ''], ['capital', 'képital', 'capital', ''],
      ]),
      gramatica(12, 'Com vírgula ou sem vírgula?', 'PASSO 1: a relativa SEM vírgula é ESSENCIAL: identifica de qual pessoa ou coisa falamos. «My brother who lives in Rio is a doctor.» (tenho mais de um irmão; falo do que mora no Rio). PASSO 2: a relativa COM vírgulas é EXTRA: só acrescenta informação sobre algo já identificado. «My brother, who lives in Rio, is a doctor.» (tenho um só irmão; a informação do Rio é extra). PASSO 3: nas explicativas, NÃO use «that»: use «who» ou «which». PASSO 4: e NÃO omita o pronome: «Brazil, which is huge, has many cultures.» PASSO 5: nomes próprios quase sempre pedem vírgulas: «Rio, which is famous for its beaches, is warm.» PASSO 6: na fala, a pausa e a entonação marcam as vírgulas.', {
        tag: 'Relativas explicativas',
        comparacao: 'em português a vírgula também muda o sentido: «os alunos que estudam passam» (só os que estudam) × «os alunos, que estudam, passam» (todos estudam). O inglês trabalha do mesmo jeito.',
        tabela: [
          { tipo: 'essencial (sem vírgula)', frase: 'The students who study pass.', sentido: 'só os que estudam' }, { tipo: 'extra (com vírgulas)', frase: 'The students, who study, pass.', sentido: 'todos estudam' }, { tipo: 'nome próprio', frase: 'Rio, which is warm, is famous.', sentido: 'informação extra' },
        ],
        erros: [['My brother, that lives in Rio, is a doctor.', 'My brother, who lives in Rio, is a doctor.', 'Explicativa: sem that.'], ['Brazil, which is huge has many cultures.', 'Brazil, which is huge, has many cultures.', 'Duas vírgulas.'], ['The book, I read, was great. (essencial)', 'The book I read was great.', 'Sem vírgulas se identifica.'], ['Rio, I love, is warm.', 'Rio, which I love, is warm.', 'Faltou o relativo.']],
      }),
      producao(5, 'Escreva 4 frases sobre pessoas da sua família, com informação extra entre vírgulas.'),
    ]),
    sessao('S2', 'Which: comentar a frase inteira', [
      revisao(4, 'Complete: «My sister, ___ lives in Rio, is a nurse. Brazil, ___ is huge, has many cultures.»'),
      palavras(6, [
        ['which', 'uích', 'o que (comenta a frase)', ''], ['surprised', 'sarpráizd', 'surpreso', ''], ['annoying', 'anóin', 'irritante', ''], ['helpful', 'rélpfl', 'útil', ''], ['strange', 'strêindj', 'estranho', ''], ['luck', 'lâk', 'sorte', ''],
      ]),
      gramatica(12, 'Which para comentar uma ideia', 'PASSO 1: «which» pode comentar uma frase INTEIRA, não só uma palavra: «He passed the exam, which surprised everyone.» (o fato de ele passar surpreendeu). PASSO 2: sempre precedido de vírgula. PASSO 3: não use «that» nem «what» nesse caso: «He is always late, which is annoying.» PASSO 4: comentários típicos: which was great, which is strange, which is why…, which means that… PASSO 5: «which is why» = por isso: «It was raining, which is why we stayed home.» PASSO 6: «what» (sem vírgula) é «o que» como sujeito/objeto: «What I need is rest», mas não comenta a frase anterior.', {
        tag: 'Which comenta',
        comparacao: 'em português «o que» faz esse comentário («ele passou, o que surpreendeu todos»). Em inglês, use «which» depois de vírgula, nunca «what».',
        tabela: [
          { frase: 'He passed the exam, which surprised everyone.', funcao: 'comenta o fato' }, { frase: 'She is always late, which is annoying.', funcao: 'comenta o hábito' }, { frase: 'It rained, which is why we stayed home.', funcao: 'consequência' },
        ],
        erros: [['He passed, what surprised everyone.', 'He passed, which surprised everyone.', '«which», não «what».'], ['He passed, that surprised everyone.', 'He passed, which surprised everyone.', '«that» não comenta frase.'], ['She is late, which annoying.', 'She is late, which is annoying.', 'Faltou o verbo.']],
      }),
      producao(8, 'Faça 5 comentários com «, which…» sobre fatos do seu dia.'),
    ]),
    sessao('S3', 'Reduzir relativas', [
      revisao(4, 'Faça 3 comentários com «, which is…».'),
      palavras(5, [
        ['living', 'lívin', 'morando', ''], ['written', 'rítn', 'escrito', ''], ['sitting', 'sítin', 'sentado', ''], ['made', 'mêid', 'feito', ''], ['standing', 'sténdin', 'de pé', ''],
      ]),
      gramatica(8, 'Reduzir com -ing e particípio', 'PASSO 1: a relativa em voz ATIVA pode virar -ing: «The man who is standing there» → «The man standing there.» PASSO 2: a relativa em voz PASSIVA pode virar particípio: «The book that was written by her» → «The book written by her.» PASSO 3: só se pode reduzir se o relativo for SUJEITO. PASSO 4: ajuda a escrever e falar de forma mais enxuta: «People living in cities…» PASSO 5: não reduza quando o tempo ou a modalidade importam: «The man who will arrive» fica assim.', {
        tag: 'Redução',
        comparacao: 'em português também reduzimos: «o homem que está ali» → «o homem ali». Em inglês, o -ing e o particípio cumprem esse papel.',
        tabela: [
          { completa: 'The man who is standing there is my uncle.', reduzida: 'The man standing there is my uncle.' }, { completa: 'The book that was written by her is famous.', reduzida: 'The book written by her is famous.' }, { completa: 'People who live in cities use public transport.', reduzida: 'People living in cities use public transport.' },
        ],
        erros: [['The man stands there is my uncle.', 'The man standing there is my uncle.', '-ing, não verbo conjugado.'], ['The book writing by her.', 'The book written by her.', 'Passiva: particípio.']],
      }),
      texto(8, 'Two brothers / Dois irmãos', 'I have two brothers. My older brother, who lives in Rio, is a doctor. He works in a hospital that is near the beach, which is why he loves his job. My younger brother, whose name is Tom, is a student. The girl sitting next to him in class is his girlfriend. The book written by their teacher is very difficult, which worries them. I am proud of both brothers, who work hard every day.',
        'Tenho dois irmãos. Meu irmão mais velho, que mora no Rio, é médico. Ele trabalha num hospital que fica perto da praia, e é por isso que adora o trabalho. Meu irmão mais novo, cujo nome é Tom, é estudante. A garota sentada ao lado dele na aula é a namorada. O livro escrito pelo professor deles é muito difícil, o que os preocupa. Tenho orgulho dos dois irmãos, que se esforçam todos os dias.',
        [['Where does the older brother live?', 'In Rio.'], ['Why does he love his job?', 'The hospital is near the beach.'], ['Who is sitting next to Tom in class?', 'His girlfriend.'], ['What worries the brothers?', 'The difficult book written by their teacher.']]),
      producao(5, 'Escreva um texto de 6 frases sobre a sua família com relativas explicativas e reduzidas.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 46', [
      revisao(5, 'Descreva a sua família com informação extra entre vírgulas.'),
      exercicios(20, [
        ouvir('My brother, who lives in Rio, is a doctor', ['My brother, who lives in Rio, is a doctor', 'My brother that lives in Rio is a doctor', 'My brother who lives in Rio is a doctor'], 'My brother, who lives in Rio, is a doctor', 'Ouça as pausas.'), ouvir('He passed the exam, which surprised everyone', ['He passed the exam, which surprised everyone', 'He passed the exam, what surprised everyone', 'He passed the exam that surprised everyone'], 'He passed the exam, which surprised everyone', 'Ouça «which».'), ditado('The man standing there is my uncle', 'Escreva: the man standing there is my uncle.'), ditado('The book written by her is famous', 'Escreva: the book written by her is famous.'),
        mc('Qual frase tem informação EXTRA?', ['My sister, who lives in Rio, is a nurse.', 'My sister who lives in Rio is a nurse.', 'My sister that lives in Rio is a nurse.'], 'My sister, who lives in Rio, is a nurse.', 'Vírgulas = extra.'), mc('Qual palavra comenta a frase toda?', ['which', 'that', 'what'], 'which', 'which comenta.'), mc('Qual é a forma reduzida de «The man who is standing there»?', ['The man standing there', 'The man stand there', 'The man stands there'], 'The man standing there', '-ing.'), mc('Qual frase está correta?', ['Brazil, which is huge, has many cultures.', 'Brazil, that is huge, has many cultures.', 'Brazil which is huge has many cultures.'], 'Brazil, which is huge, has many cultures.', 'Explicativa: which.'),
        lacuna('My boss, ___ name is Tom, is kind.', ['whose', 'who', 'which'], 'whose', 'whose.'), lacuna('He is late, ___ is annoying.', ['which', 'what', 'that'], 'which', 'which.'), lacuna('The book ___ by her is famous. (escrito)', ['written', 'writing', 'wrote'], 'written', 'particípio.'), lacuna('People ___ in cities use buses. (que moram)', ['living', 'lived', 'live'], 'living', '-ing.'),
        ordem('Ordene: «My sister, who lives in Rio, is a nurse.»', ['My', 'sister,', 'who', 'lives', 'in', 'Rio,', 'is', 'a', 'nurse'], 'My sister, who lives in Rio, is a nurse.', 'nome, relativa, verbo.'), ordem('Ordene: «She is always late, which is annoying.»', ['She', 'is', 'always', 'late,', 'which', 'is', 'annoying'], 'She is always late, which is annoying.', 'comentário com which.'),
        livre('Escreva 4 frases: uma explicativa, uma com «, which», uma reduzida com -ing e uma reduzida com particípio.', 'My sister, who lives in Rio, is a nurse. He passed the exam, which surprised everyone. The man standing there is my uncle. The book written by her is famous.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o seu país, usando relativas explicativas e comentários com «which».'),
    ]),
  ],
});
