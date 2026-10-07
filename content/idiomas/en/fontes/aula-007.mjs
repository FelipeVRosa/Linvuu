import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 7, titulo: 'A família: posse, \'s e have/has', nivel: 'a1',
  objetivo: 'Falar da família, dizer de quem é cada coisa com my, your, his, her e \'s, e usar have/has (com do/does) para falar do que você tem.',
  nota: 'Você apresenta a sua família e fala do que cada pessoa tem. Próxima aula: comida e pedidos.',
  sessoes: [
    sessao('S1', 'Os membros da família e os possessivos', [
      revisao(5, 'Descreva a sua casa em voz alta com «there is», «there are» e duas preposições de lugar.'),
      palavras(8, [
        ['mother', 'mâder', 'mãe', ''], ['father', 'fáder', 'pai', ''], ['sister', 'síster', 'irmã', ''], ['brother', 'brâder', 'irmão', ''], ['son', 'sân', 'filho', ''], ['daughter', 'dóter', 'filha', ''], ['husband', 'hâzbend', 'marido', ''], ['wife', 'uáif', 'esposa', ''],
      ]),
      gramatica(12, 'Possessivos: my, your, his, her, our, their', 'PASSO 1: o possessivo concorda com o DONO, não com a coisa: «his mother» (a mãe DELE), «her mother» (a mãe DELA). PASSO 2: a lista: my (meu/minha), your (seu/sua, de você), his (dele), her (dela), our (nosso), their (deles/delas). PASSO 3: o possessivo vem ANTES do substantivo e nunca leva artigo: «my brother», não «the my brother». PASSO 4: ele não muda no plural: «my sisters», «our sons». PASSO 5: cuidado com «its» (de algo): «The cat likes its food.» PASSO 6: «Whose book is this?» = De quem é este livro? Resposta: «It\'s my book.»', {
        tag: 'Possessivos',
        comparacao: 'em português «seu/sua» é ambíguo (dele? dela? de você?) e concorda com a coisa («sua mãe»). O inglês escolhe pelo dono: «his mother» ou «her mother».',
        tabela: [
          { pessoa: 'I', possessivo: 'my', exemplo: 'my father' }, { pessoa: 'you', possessivo: 'your', exemplo: 'your sister' }, { pessoa: 'he', possessivo: 'his', exemplo: 'his wife' }, { pessoa: 'she', possessivo: 'her', exemplo: 'her husband' }, { pessoa: 'we', possessivo: 'our', exemplo: 'our son' }, { pessoa: 'they', possessivo: 'their', exemplo: 'their daughter' },
        ],
        erros: [['She is his mother. (a mãe é dela)', 'She is her mother.', 'O possessivo segue o dono.'], ['The my brother is tall.', 'My brother is tall.', 'Sem artigo antes do possessivo.'], ['I like mine sisters.', 'I like my sisters.', '«my» antes do substantivo.']],
      }),
      producao(5, 'Apresente 4 pessoas da sua família: «This is my mother. Her name is…»'),
    ]),
    sessao('S2', 'O \'s de posse', [
      revisao(4, 'Complete: «___ name is Ana (dela). ___ car is old (dele). ___ house is big (nossa).»'),
      palavras(6, [
        ['parents', 'pérents', 'pais (pai e mãe)', ''], ['children', 'tchíldren', 'filhos, crianças', ''], ['friend', 'frénd', 'amigo', ''], ['name', 'nêim', 'nome', ''], ['car', 'cár', 'carro', ''], ['dog', 'dóg', 'cachorro', ''],
      ]),
      gramatica(12, '\'s: o dono vem antes', 'PASSO 1: para dizer que algo é de uma pessoa, coloque o dono ANTES e junte «\'s»: «Ana\'s car» (o carro da Ana). PASSO 2: a ordem é o inverso do português: dono + coisa. «my brother\'s wife» (a esposa do meu irmão). PASSO 3: com plural terminado em -s, só o apóstrofo: «my parents\' house» (a casa dos meus pais). PASSO 4: plural irregular leva \'s: «the children\'s room». PASSO 5: não use «of» para pessoas: «the car of Ana» soa estranho. PASSO 6: cuidado: «\'s» também pode ser «is» (He\'s tall) ou posse (Tom\'s car). O sentido decide.', {
        tag: 'Posse',
        comparacao: 'em português dizemos «o carro DA Ana» (coisa + de + dono). O inglês faz o contrário: «Ana\'s car» (dono + \'s + coisa).',
        tabela: [
          { portugues: 'o carro da Ana', ingles: 'Ana\'s car', nota: 'dono primeiro' }, { portugues: 'a esposa do meu irmão', ingles: 'my brother\'s wife', nota: 'possessivo + nome + \'s' }, { portugues: 'a casa dos meus pais', ingles: 'my parents\' house', nota: 'plural em -s: só \'' }, { portugues: 'o quarto das crianças', ingles: 'the children\'s room', nota: 'plural irregular: \'s' },
        ],
        erros: [['the car of Ana', 'Ana\'s car', 'Com pessoas, use \'s.'], ['the house of my parents', 'my parents\' house', 'Dono antes.'], ['my parent\'s house (os dois pais)', 'my parents\' house', 'Plural em -s: apóstrofo depois do s.']],
      }),
      producao(8, 'Diga de quem são 5 coisas: «This is Ana\'s car. That is my brother\'s dog…»'),
    ]),
    sessao('S3', 'Have e has', [
      revisao(4, 'Diga em inglês: «a casa dos meus pais», «o cachorro da Ana», «a esposa dele».'),
      palavras(5, [
        ['have', 'hév', 'ter', ''], ['has', 'héz', 'tem (ele, ela)', ''], ['cousin', 'câzin', 'primo, prima', ''], ['uncle', 'ânkl', 'tio', ''], ['aunt', 'ént', 'tia', ''],
      ]),
      gramatica(8, 'Have e has: o que você tem', 'PASSO 1: «have» é TER. Com I, you, we, they: «I have two sisters.» PASSO 2: com he, she, it, use «has»: «She has a brother.» PASSO 3: negativa com «do/does + have» (o verbo volta a «have»): «I don\'t have a car.», «She doesn\'t have a dog.» PASSO 4: pergunta: «Do you have a brother?», «Does he have a car?» PASSO 5: resposta curta: «Yes, I do.», «No, she doesn\'t.» PASSO 6: não diga «She doesn\'t has». Depois de «does/doesn\'t» o verbo é sempre «have». PASSO 7: não confunda com existência: «There is a dog» (existe) x «I have a dog» (é meu).', {
        tag: 'Have',
        comparacao: 'em português «ter» serve para posse e para existência («tem um cachorro na sala»). O inglês separa: «have/has» é posse; «there is/are» é existência.',
        tabela: [
          { afirmativa: 'I have a brother.', negativa: 'I don\'t have a brother.', pergunta: 'Do you have a brother?' }, { afirmativa: 'She has two sons.', negativa: 'She doesn\'t have two sons.', pergunta: 'Does she have two sons?' }, { afirmativa: 'They have a dog.', negativa: 'They don\'t have a dog.', pergunta: 'Do they have a dog?' },
        ],
        erros: [['He have a sister.', 'He has a sister.', 'He/she/it pedem «has».'], ['She doesn\'t has a car.', 'She doesn\'t have a car.', 'Depois de «doesn\'t», «have».'], ['Do you has a brother?', 'Do you have a brother?', 'Depois de «do», «have».'], ['Has she a car?', 'Does she have a car?', 'Pergunta com «does + have».']],
      }),
      texto(8, 'My family / A minha família', 'My name is Lara. I have a small family. My father is a doctor and my mother is a teacher. I have one brother. His name is Tom. Tom has a dog. The dog\'s name is Max. My parents\' house is big, but my apartment is small. I don\'t have a car. My brother has a car. I like my family.',
        'Meu nome é Lara. Tenho uma família pequena. Meu pai é médico e minha mãe é professora. Tenho um irmão. O nome dele é Tom. Tom tem um cachorro. O nome do cachorro é Max. A casa dos meus pais é grande, mas meu apartamento é pequeno. Eu não tenho carro. Meu irmão tem carro. Eu gosto da minha família.',
        [['What does Lara\'s father do?', 'He is a doctor.'], ['Who is Tom?', 'Lara\'s brother.'], ['What is the dog\'s name?', 'Max.'], ['Does Lara have a car?', 'No, she doesn\'t.']]),
      producao(5, 'Escreva 5 frases sobre a sua família com «have/has», um possessivo e um \'s.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 7', [
      revisao(5, 'Fale 4 frases sobre o que as pessoas da sua família têm ou não têm.'),
      exercicios(20, [
        ouvir('She has a brother', ['She has a brother', 'She have a brother', 'He has a brother'], 'She has a brother', 'Ouça «she has».'), ouvir('This is my parents\' house', ['This is my parents\' house', 'This is my parent\'s house', 'This is my friend\'s house'], 'This is my parents\' house', 'Ouça «parents».'), ditado('Do you have a sister', 'Escreva: do you have a sister.'), ditado('Ana\'s car is new', 'Escreva: Ana\'s car is new.'),
        mc('Qual frase está correta?', ['He has a sister.', 'He have a sister.', 'He haves a sister.'], 'He has a sister.', 'He/she/it → has.'), mc('Como se diz «a mãe dela»?', ['her mother', 'his mother', 'the her mother'], 'her mother', 'O possessivo segue o dono: ela → her.'), mc('Como se diz «o carro da Ana»?', ['Ana\'s car', 'the car of Ana', 'Ana car\'s'], 'Ana\'s car', 'Dono + \'s + coisa.'), mc('Qual frase diz que ela NÃO tem carro?', ['She doesn\'t have a car.', 'She doesn\'t has a car.', 'She not have a car.'], 'She doesn\'t have a car.', 'doesn\'t + have.'),
        lacuna('___ you have a brother? (pergunta)', ['Do', 'Does', 'Are'], 'Do', 'Com «you», use «do».'), lacuna('She ___ two children. (tem)', ['has', 'have', 'does'], 'has', 'she → has.'), lacuna('This is ___ house. (a casa DELES)', ['their', 'there', 'they'], 'their', 'Possessivo: their.'), lacuna('My ___ house is big. (dos pais)', ['parents\'', 'parent\'s', 'parents'], 'parents\'', 'Plural em -s: só o apóstrofo.'),
        ordem('Ordene: «She has a big family.»', ['She', 'has', 'a', 'big', 'family'], 'She has a big family.', 'Sujeito + has + objeto.'), ordem('Ordene: «Does he have a car?»', ['Does', 'he', 'have', 'a', 'car'], 'Does he have a car?', 'Does + sujeito + have.'),
        livre('Escreva 4 frases sobre uma pessoa da sua família: nome, quem é, o que tem e uma coisa que é dela.', 'My sister is Ana. She has a dog. Her dog is big. Ana\'s house is small.'),
      ]),
      producao(5, 'Fale 1 minuto sobre a sua família: quem são, o que têm, de quem são as coisas.'),
    ]),
  ],
});
