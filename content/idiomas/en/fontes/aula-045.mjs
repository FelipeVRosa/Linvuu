import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 45, titulo: 'Orações relativas: who, which, that, where e whose', nivel: 'b1',
  objetivo: 'Definir pessoas, coisas, lugares e posse com orações relativas («the man who…», «the book that…», «the city where…», «the woman whose…»), omitindo o pronome quando possível.',
  nota: 'Você descreve e especifica com orações relativas. Próxima aula: relativas explicativas e redução.',
  sessoes: [
    sessao('S1', 'Who, which e that', [
      revisao(5, 'Reclame de um serviço com passiva e peça uma solução.'),
      palavras(8, [
        ['who', 'ru', 'que, quem (pessoas)', ''], ['which', 'uích', 'que, o qual (coisas)', ''], ['that', 'dét', 'que (pessoas e coisas)', ''], ['where', 'uér', 'onde', ''], ['whose', 'ruz', 'cujo', ''], ['neighbor', 'nêibor', 'vizinho', ''], ['designer', 'dizáiner', 'designer', ''], ['invented', 'invéntid', 'inventou', ''],
      ]),
      gramatica(12, 'Orações relativas que identificam', 'PASSO 1: a oração relativa diz QUAL pessoa ou coisa você quer dizer: «The man who lives next door is a doctor.» PASSO 2: «who» é para PESSOAS: «the woman who called me». PASSO 3: «which» é para COISAS: «the book which I read». PASSO 4: «that» serve para pessoas e coisas, e é muito comum em inglês falado: «the book that I read», «the man that lives next door». PASSO 5: «where» = lugar: «the city where I was born». PASSO 6: «whose» = de quem, cujo: «the girl whose bag was stolen». PASSO 7: o pronome relativo NÃO se repete com o pronome pessoal: «The man who he lives…» está errado.', {
        tag: 'Relativas',
        comparacao: 'em português usamos «que», «quem», «onde» e «cujo». Em inglês, escolhemos pela função: who (pessoa), which (coisa), that (os dois), where (lugar), whose (posse). Nunca repita o pronome pessoal depois do relativo.',
        tabela: [
          { pronome: 'who', usa_com: 'pessoas', exemplo: 'The man who lives next door is a doctor.' }, { pronome: 'which', usa_com: 'coisas', exemplo: 'The book which I read was great.' }, { pronome: 'that', usa_com: 'pessoas e coisas', exemplo: 'The book that I read was great.' }, { pronome: 'where', usa_com: 'lugares', exemplo: 'This is the city where I was born.' }, { pronome: 'whose', usa_com: 'posse', exemplo: 'The girl whose bag was stolen is crying.' },
        ],
        erros: [['The man who he lives next door is a doctor.', 'The man who lives next door is a doctor.', 'Sem pronome repetido.'], ['The book who I read was great.', 'The book that I read was great.', 'Coisa: which/that.'], ['The city where I was born there is big.', 'The city where I was born is big.', 'Sem «there».'], ['The girl which bag was stolen.', 'The girl whose bag was stolen.', 'Posse: whose.']],
      }),
      producao(5, 'Descreva 5 pessoas ou coisas com orações relativas: «A teacher is a person who…»'),
    ]),
    sessao('S2', 'Quando omitir o pronome', [
      revisao(4, 'Complete: «The woman ___ called me. The book ___ I read. The city ___ I live.»'),
      palavras(6, [
        ['object', 'óbdjékt', 'objeto', ''], ['subject', 'sâbdjékt', 'sujeito', ''], ['omit', 'ômít', 'omitir', ''], ['restaurant', 'réstorent', 'restaurante', ''], ['recommend', 'rékoménd', 'recomendar', ''], ['borrow', 'bórou', 'pegar emprestado', ''],
      ]),
      gramatica(12, 'Sujeito ou objeto?', 'PASSO 1: o pronome relativo pode ser SUJEITO ou OBJETO da oração relativa. PASSO 2: se for SUJEITO (vem logo antes do verbo), NÃO pode ser omitido: «The man who called me» (who = sujeito de called). PASSO 3: se for OBJETO (depois dele vem outro sujeito), pode ser omitido: «The book (that) I read» (I = sujeito, that = objeto). PASSO 4: o truque: se depois do pronome aparece um sujeito (I, she, they, Maria), pode omitir. Se aparece o verbo direto, mantenha. PASSO 5: com preposição, a preposição fica no fim: «the man (who) I talked to», «the chair (that) I sat on». PASSO 6: «whose» e «where» não se omitem.', {
        tag: 'Omissão do relativo',
        comparacao: 'em português o «que» nunca some: «o livro que eu li». Em inglês, quando o relativo é objeto, ele pode desaparecer: «the book I read».',
        tabela: [
          { frase: 'The man who called me is my boss.', omite: 'não (who é sujeito)' }, { frase: 'The book (that) I read was great.', omite: 'sim (that é objeto)' }, { frase: 'The man (who) I talked to is a doctor.', omite: 'sim (who é objeto)' }, { frase: 'The girl whose bag was stolen is here.', omite: 'não (whose)' },
        ],
        erros: [['The man called me is my boss.', 'The man who called me is my boss.', 'Sujeito: não omita.'], ['The book that I read it was great.', 'The book that I read was great.', 'Sem «it» repetido.'], ['The man who I talked to him is a doctor.', 'The man who I talked to is a doctor.', 'Sem «him».']],
      }),
      producao(8, 'Escreva 6 frases com relativas: 3 com o pronome omitido e 3 em que ele não pode ser omitido.'),
    ]),
    sessao('S3', 'Descrever com precisão', [
      revisao(4, 'Defina em inglês: «um garçom», «um restaurante», «um colega».'),
      palavras(5, [
        ['waiter', 'uêiter', 'garçom', ''], ['colleague', 'cólig', 'colega', ''], ['dictionary', 'díksoneri', 'dicionário', ''], ['stranger', 'strêindjer', 'desconhecido', ''], ['tool', 'tul', 'ferramenta', ''],
      ]),
      gramatica(8, 'Definir palavras', 'PASSO 1: para definir uma palavra, use: «A waiter is a person who serves food.» PASSO 2: coisas: «A dictionary is a book that explains words.» PASSO 3: lugares: «A restaurant is a place where you eat.» PASSO 4: use isso para explicar palavras que você não sabe: «It\'s a thing that you use to…» PASSO 5: útil em provas e conversas: se esquecer a palavra, descreva-a.', {
        tag: 'Definições',
        comparacao: 'em português «é uma pessoa que serve comida» tem a mesma lógica. A vantagem do inglês é usar a definição para contornar uma palavra esquecida.',
        tabela: [
          { palavra: 'waiter', definicao: 'a person who serves food' }, { palavra: 'dictionary', definicao: 'a book that explains words' }, { palavra: 'restaurant', definicao: 'a place where you eat' }, { palavra: 'orphan', definicao: 'a child whose parents have died' },
        ],
        erros: [['A waiter is a person who he serves food.', 'A waiter is a person who serves food.', 'Sem pronome repetido.'], ['A restaurant is a place which you eat.', 'A restaurant is a place where you eat.', 'Lugar: where.']],
      }),
      dialogo(8, 'I forgot the word / Esqueci a palavra', 'Lara tenta explicar uma palavra a Tom.', [
        ['Lara', 'I can\'t remember the word. It\'s a thing that you use to open a bottle.', 'Não lembro a palavra. É uma coisa que se usa para abrir garrafa.'], ['Tom', 'An opener?', 'Um abridor?'], ['Lara', 'Yes! And what\'s the word for a person who fixes cars?', 'Isso! E qual é a palavra para uma pessoa que conserta carros?'], ['Tom', 'A mechanic. And a place where you buy medicine is a pharmacy.', 'Um mecânico. E um lugar onde se compra remédio é uma farmácia.'], ['Lara', 'Great! My English is better when I use words that describe things.', 'Ótimo! O meu inglês melhora quando eu uso palavras que descrevem as coisas.'], ['Tom', 'Exactly. That\'s a strategy that many learners use.', 'Exato. É uma estratégia que muitos alunos usam.'],
      ]),
      producao(5, 'Defina em voz alta 8 palavras sem dizê-las: «It\'s a person who… It\'s a place where…»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 45', [
      revisao(5, 'Defina 5 objetos da sua casa sem dizer o nome.'),
      exercicios(20, [
        ouvir('The man who lives next door is a doctor', ['The man who lives next door is a doctor', 'The man which lives next door is a doctor', 'The man lives next door is a doctor'], 'The man who lives next door is a doctor', 'Ouça «who lives».'), ouvir('This is the city where I was born', ['This is the city where I was born', 'This is the city which I was born', 'This is the city where I born'], 'This is the city where I was born', 'Ouça «where».'), ditado('The book that I read was great', 'Escreva: the book that I read was great.'), ditado('The girl whose bag was stolen is crying', 'Escreva: the girl whose bag was stolen is crying.'),
        mc('Qual pronome é para pessoas?', ['who', 'which', 'where'], 'who', 'who = pessoas.'), mc('Qual pronome é para lugar?', ['where', 'who', 'whose'], 'where', 'where = lugar.'), mc('Qual frase pode omitir o pronome?', ['The book (that) I read was great.', 'The man (who) called me is my boss.', 'The girl (whose) bag was stolen is here.'], 'The book (that) I read was great.', 'Objeto: pode omitir.'), mc('Qual frase está correta?', ['The man who lives next door is a doctor.', 'The man who he lives next door is a doctor.', 'The man whose lives next door is a doctor.'], 'The man who lives next door is a doctor.', 'Sem pronome repetido.'),
        lacuna('The woman ___ called me is my boss.', ['who', 'which', 'where'], 'who', 'who = pessoa.'), lacuna('This is the book ___ I read.', ['that', 'who', 'where'], 'that', 'that = coisa.'), lacuna('The girl ___ bag was stolen is crying.', ['whose', 'who', 'which'], 'whose', 'whose = posse.'), lacuna('A restaurant is a place ___ you eat.', ['where', 'who', 'whose'], 'where', 'where.'),
        ordem('Ordene: «The book that I read was great.»', ['The', 'book', 'that', 'I', 'read', 'was', 'great'], 'The book that I read was great.', 'nome + that + sujeito + verbo.'), ordem('Ordene: «The man who called me is my boss.»', ['The', 'man', 'who', 'called', 'me', 'is', 'my', 'boss'], 'The man who called me is my boss.', 'nome + who + verbo.'),
        livre('Defina 4 palavras com relativas: uma pessoa, uma coisa, um lugar e uma com whose.', 'A waiter is a person who serves food. A dictionary is a book that explains words. A restaurant is a place where you eat. An orphan is a child whose parents have died.'),
      ]),
      producao(5, 'Descreva em 1 minuto a sua casa, o seu bairro e as pessoas que moram lá, com orações relativas.'),
    ]),
  ],
});
