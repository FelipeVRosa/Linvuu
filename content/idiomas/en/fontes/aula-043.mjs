import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 43, titulo: 'Voz passiva: presente, passado e futuro', nivel: 'b1',
  objetivo: 'Formar e usar a voz passiva («be + particípio») no presente, no passado e no futuro, saber quando usá-la e quando mencionar o agente com «by».',
  nota: 'Você descreve processos e fatos sem dizer quem os fez. Próxima aula: passiva com modais, perfect e «have something done».',
  sessoes: [
    sessao('S1', 'Be + particípio', [
      revisao(5, 'Conte uma oportunidade perdida com terceiro condicional e «should have».'),
      palavras(8, [
        ['is made', 'íz mêid', 'é feito', ''], ['was built', 'uóz bílt', 'foi construído', ''], ['will be done', 'uíl bi dân', 'será feito', ''], ['by', 'bái', 'por', ''], ['produce', 'prodiús', 'produzir', ''], ['invent', 'invént', 'inventar', ''], ['discover', 'discâver', 'descobrir', ''], ['sell', 'sél', 'vender', ''],
      ]),
      gramatica(12, 'A voz passiva', 'PASSO 1: na voz ATIVA o sujeito faz a ação: «Marie Curie discovered radium.» Na PASSIVA, o foco vai para o objeto: «Radium was discovered by Marie Curie.» PASSO 2: a estrutura é «be + particípio passado»: «is made», «was built», «will be done». PASSO 3: o «be» marca o tempo: presente (is/are + particípio), passado (was/were + particípio), futuro (will be + particípio). PASSO 4: use a passiva quando o agente é DESCONHECIDO, ÓBVIO ou NÃO IMPORTA: «My bike was stolen.» (não sei quem). PASSO 5: use «by + agente» só quando for informação nova ou importante: «The Mona Lisa was painted by Leonardo.» PASSO 6: nunca use «do/does» na passiva: «Coffee is grown in Brazil», não «Coffee does grown».', {
        tag: 'Voz passiva',
        comparacao: 'em português a passiva com «ser + particípio» («foi construído») existe, mas costumamos usar «se» («vende-se», «fala-se»). Em inglês, não existe o «se» apassivador: use «be + particípio».',
        tabela: [
          { tempo: 'presente', ativa: 'They make cars here.', passiva: 'Cars are made here.' }, { tempo: 'passado', ativa: 'Someone stole my bike.', passiva: 'My bike was stolen.' }, { tempo: 'futuro', ativa: 'They will finish it.', passiva: 'It will be finished.' },
        ],
        erros: [['English speaks here.', 'English is spoken here.', 'Passiva: be + particípio.'], ['The house built in 1990.', 'The house was built in 1990.', 'Faltou o be.'], ['It was stole.', 'It was stolen.', 'Particípio: stolen.'], ['Coffee grows in Brazil by farmers. (passiva)', 'Coffee is grown in Brazil.', 'Passiva, e sem by óbvio.']],
      }),
      producao(5, 'Transforme 5 frases ativas em passivas: «They sell cars here.», «Someone broke the window.»'),
    ]),
    sessao('S2', 'Perguntas e negativas na passiva', [
      revisao(4, 'Diga o particípio de: make, build, write, steal, speak, grow, sell, do.'),
      palavras(6, [
        ['grow', 'grôu', 'cultivar', ''], ['grown', 'grôun', 'cultivado', ''], ['clean', 'kliin', 'limpar', ''], ['deliver', 'delíver', 'entregar', ''], ['repair', 'ripér', 'consertar', ''], ['cancel', 'kénsel', 'cancelar', ''],
      ]),
      gramatica(12, 'Negativa e pergunta', 'PASSO 1: negativa: «be + not + particípio»: «The room isn\'t cleaned every day.», «The flight wasn\'t canceled.» PASSO 2: pergunta: inverta o «be»: «Is English spoken here?», «Was the package delivered?» PASSO 3: com palavra de pergunta: «When was the bridge built?», «Where is coffee grown?» PASSO 4: pergunta sobre o agente: «Who was this book written by?» (ou «Who wrote this book?»). PASSO 5: «get» também forma passiva informal: «My phone got stolen.» PASSO 6: respostas curtas: «Yes, it is.» / «No, it wasn\'t.»', {
        tag: 'Passiva: negativa e pergunta',
        comparacao: 'em português «não foi entregue» e «foi entregue?» mantêm o «ser». Em inglês, o auxiliar «be» faz a negativa e a pergunta: «wasn\'t delivered», «Was it delivered?».',
        tabela: [
          { afirmativa: 'The room is cleaned daily.', negativa: 'The room isn\'t cleaned daily.', pergunta: 'Is the room cleaned daily?' }, { afirmativa: 'The package was delivered.', negativa: 'The package wasn\'t delivered.', pergunta: 'Was the package delivered?' }, { afirmativa: 'The bridge was built in 1990.', negativa: '—', pergunta: 'When was the bridge built?' },
        ],
        erros: [['The package didn\'t delivered.', 'The package wasn\'t delivered.', 'Passiva: be + not.'], ['Did the package delivered?', 'Was the package delivered?', 'Pergunta com be.'], ['When did the bridge built?', 'When was the bridge built?', 'Passiva: was.']],
      }),
      producao(8, 'Faça 6 perguntas na passiva sobre produtos e lugares: «Where is coffee grown?», «When was the telephone invented?»'),
    ]),
    sessao('S3', 'Descrever um processo', [
      revisao(4, 'Transforme em passiva: «They build a bridge», «Someone cleaned the room».'),
      palavras(5, [
        ['first', 'fãrst', 'primeiro', ''], ['then', 'dén', 'depois', ''], ['finally', 'fáinali', 'finalmente', ''], ['wash', 'uóch', 'lavar', ''], ['pack', 'pék', 'embalar', ''],
      ]),
      gramatica(8, 'A passiva em processos', 'PASSO 1: a passiva é comum para explicar COMO algo é feito, quando importa o processo e não quem faz: «First, the beans are picked. Then they are washed and dried.» PASSO 2: use conectores de sequência: first, then, after that, finally. PASSO 3: passado em histórias de produtos: «The cheese was produced in 1950.» PASSO 4: evite misturar ativo e passivo sem necessidade.', {
        tag: 'Processos',
        comparacao: 'em português usamos o «se» («lavam-se os grãos»). Em inglês, o processo vem em «be + particípio»: «the beans are washed».',
        tabela: [
          { etapa: 'First', frase: 'the beans are picked.' }, { etapa: 'Then', frase: 'they are washed and dried.' }, { etapa: 'After that', frase: 'they are sent to factories.' }, { etapa: 'Finally', frase: 'the coffee is packed and sold.' },
        ],
        erros: [['First, they pick the beans, then are washed.', 'First, the beans are picked. Then they are washed.', 'Seja consistente na passiva.'], ['The beans washes.', 'The beans are washed.', 'Plural: are + particípio.']],
      }),
      texto(8, 'How coffee is made / Como o café é feito', 'Coffee is grown in many countries, and Brazil is the largest producer in the world. First, the coffee beans are picked by hand or by machine. Then they are washed and dried in the sun. After that, they are sent to factories, where they are roasted and packed. Finally, the coffee is sold in shops and supermarkets all over the world. In Brazil, coffee has been grown since the 18th century, and it will be produced for many more years.',
        'O café é cultivado em muitos países, e o Brasil é o maior produtor do mundo. Primeiro, os grãos são colhidos à mão ou por máquina. Depois são lavados e secos ao sol. Em seguida, são enviados às fábricas, onde são torrados e embalados. Por fim, o café é vendido em lojas e supermercados no mundo todo. No Brasil, o café é cultivado desde o século XVIII e continuará a ser produzido por muitos anos.',
        [['Where is coffee grown?', 'In many countries; Brazil is the largest producer.'], ['What happens after the beans are picked?', 'They are washed and dried.'], ['Where are the beans roasted and packed?', 'In factories.'], ['Since when has coffee been grown in Brazil?', 'Since the 18th century.']]),
      producao(5, 'Descreva em 6 frases na passiva como um produto que você conhece é feito.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 43', [
      revisao(5, 'Explique em voz alta como um produto é feito, usando a passiva e first, then, finally.'),
      exercicios(20, [
        ouvir('English is spoken here', ['English is spoken here', 'English speaks here', 'English is speaking here'], 'English is spoken here', 'Ouça «is spoken».'), ouvir('The bridge was built in 1990', ['The bridge was built in 1990', 'The bridge built in 1990', 'The bridge is built in 1990'], 'The bridge was built in 1990', 'Ouça «was built».'), ditado('My bike was stolen', 'Escreva: my bike was stolen.'), ditado('When was the telephone invented', 'Escreva: when was the telephone invented.'),
        mc('Qual frase está na voz passiva?', ['The cake was made by my mother.', 'My mother made the cake.', 'My mother is making the cake.'], 'The cake was made by my mother.', 'be + particípio.'), mc('Qual é a pergunta correta?', ['Was the package delivered?', 'Did the package delivered?', 'Was the package deliver?'], 'Was the package delivered?', 'Was + particípio.'), mc('Qual é o particípio de «steal»?', ['stolen', 'stole', 'stealed'], 'stolen', 'steal → stole → stolen.'), mc('Qual frase está correta?', ['Coffee is grown in Brazil.', 'Coffee grows in Brazil by people.', 'Coffee is grow in Brazil.'], 'Coffee is grown in Brazil.', 'is + particípio.'),
        lacuna('The room ___ cleaned every day. (é)', ['is', 'does', 'has'], 'is', 'is + particípio.'), lacuna('The house ___ built in 1990. (foi)', ['was', 'is', 'did'], 'was', 'passado.'), lacuna('It will be ___ tomorrow. (entregue)', ['delivered', 'deliver', 'delivering'], 'delivered', 'will be + particípio.'), lacuna('The package ___ delivered. (não foi)', ['wasn\'t', 'didn\'t', 'hasn\'t'], 'wasn\'t', 'wasn\'t.'),
        ordem('Ordene: «The beans are washed and dried.»', ['The', 'beans', 'are', 'washed', 'and', 'dried'], 'The beans are washed and dried.', 'are + particípio.'), ordem('Ordene: «Where is coffee grown?»', ['Where', 'is', 'coffee', 'grown'], 'Where is coffee grown?', 'Where + is + sujeito + particípio.'),
        livre('Escreva 4 frases na voz passiva: uma no presente, uma no passado, uma no futuro e uma pergunta.', 'Cars are made here. My bike was stolen. The work will be finished tomorrow. When was this house built?'),
      ]),
      producao(5, 'Fale 1 minuto sobre um produto ou uma tradição brasileira e como ela é feita.'),
    ]),
  ],
});
