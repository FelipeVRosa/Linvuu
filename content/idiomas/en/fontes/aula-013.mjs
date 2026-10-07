import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 13, titulo: 'Gostos: like, love, hate e os pronomes de objeto', nivel: 'a1',
  objetivo: 'Falar do que você gosta e não gosta, usar like/love/hate com substantivos e com verbo + -ing, e usar me, you, him, her, it, us, them.',
  nota: 'Você fala dos seus gostos e hobbies. Próxima aula: descrever pessoas.',
  sessoes: [
    sessao('S1', 'Like, love e hate', [
      revisao(5, 'Conte a sua rotina de um dia comum e diga uma coisa que você nunca faz.'),
      palavras(8, [
        ['like', 'láik', 'gostar', ''], ['love', 'lâv', 'amar, adorar', ''], ['hate', 'rêit', 'odiar, detestar', ''], ['enjoy', 'indjói', 'gostar de, curtir', ''], ['music', 'miúzic', 'música', ''], ['movie', 'múvi', 'filme', ''], ['sport', 'spórt', 'esporte', ''], ['football', 'fútból', 'futebol', ''],
      ]),
      gramatica(12, 'Dizer o que você gosta', 'PASSO 1: «like» (gostar), «love» (adorar), «hate» (detestar), «enjoy» (curtir). PASSO 2: com substantivo, sem preposição: «I like music.» (não «I like OF music»). PASSO 3: com he/she/it, acrescente -s: «She loves football.» PASSO 4: negativa com «don\'t/doesn\'t»: «I don\'t like horror movies.» PASSO 5: pergunta: «Do you like pizza?», «Does he like sports?» Resposta curta: «Yes, I do.» / «No, I don\'t.» PASSO 6: para generalizar, use o plural SEM artigo: «I like dogs.», «I love movies.»', {
        tag: 'Gostos',
        comparacao: 'em português «gostar» pede «de» («gosto DE música»). Em inglês, não existe preposição: «I like music». E para generalizar usamos o plural sem artigo, não «os cachorros».',
        tabela: [
          { afirmativa: 'I like pizza.', negativa: 'I don\'t like pizza.', pergunta: 'Do you like pizza?' }, { afirmativa: 'She loves dogs.', negativa: 'She doesn\'t love dogs.', pergunta: 'Does she love dogs?' }, { afirmativa: 'They hate rain.', negativa: 'They don\'t hate rain.', pergunta: 'Do they hate rain?' },
        ],
        erros: [['I like of music.', 'I like music.', 'Sem «of».'], ['She like dogs.', 'She likes dogs.', 'she → -s.'], ['I like the dogs. (em geral)', 'I like dogs.', 'Generalização: sem artigo.'], ['Do you likes pizza?', 'Do you like pizza?', 'Depois de «do», forma simples.']],
      }),
      producao(5, 'Diga 3 coisas que você ama, 2 que você detesta e 2 que não gosta.'),
    ]),
    sessao('S2', 'Gostar de fazer algo: verbo + -ing', [
      revisao(4, 'Faça uma pergunta com «Do you like…?» e responda com «Yes, I do.» ou «No, I don\'t.»'),
      palavras(6, [
        ['read', 'riid', 'ler', ''], ['watch', 'uótch', 'assistir', ''], ['listen', 'lísen', 'ouvir', ''], ['travel', 'trévl', 'viajar', ''], ['walk', 'uók', 'caminhar', ''], ['cook', 'cúk', 'cozinhar', ''],
      ]),
      gramatica(12, 'Like + verbo com -ing', 'PASSO 1: depois de like, love, hate e enjoy, o segundo verbo ganha -ing: «I like reading.», «She loves cooking.» PASSO 2: regras do -ing: verbo simples + ing (read → reading); verbo terminado em -e perde o -e (make → making); verbo curto terminado em consoante dobra a última (run → running, swim → swimming). PASSO 3: negativa: «I don\'t like running.» PASSO 4: pergunta: «Do you like traveling?» PASSO 5: «would like to + verbo» é outra coisa: «I\'d like to travel» (queria viajar, desejo). PASSO 6: não use «to» + verbo depois de like/love com sentido geral de gosto: «I like to read» também existe, mas «I like reading» é o mais natural para hobbies.', {
        tag: 'Gerúndio',
        comparacao: 'em português usamos o infinitivo: «gosto de ler». O inglês usa o -ing: «I like reading». Pense: gostar de uma ATIVIDADE = -ing.',
        tabela: [
          { regra: 'verbo simples + ing', verbo: 'read', resultado: 'reading' }, { regra: 'perde o -e + ing', verbo: 'make', resultado: 'making' }, { regra: 'dobra a consoante + ing', verbo: 'run', resultado: 'running' }, { regra: 'dobra a consoante + ing', verbo: 'swim', resultado: 'swimming' },
        ],
        erros: [['I like read.', 'I like reading.', 'Pede -ing.'], ['She likes to swiming.', 'She likes swimming.', 'Dobra o m e sem «to».'], ['I\'d like reading.', 'I\'d like to read.', '«I\'d like» pede «to + verbo».']],
      }),
      producao(8, 'Diga 6 coisas que você gosta de fazer, com verbo + -ing.'),
    ]),
    sessao('S3', 'Me, you, him, her, it, us, them', [
      revisao(4, 'Dê o -ing de: play, make, run, write, sit.'),
      palavras(5, [
        ['me', 'mi', 'me, mim', ''], ['him', 'rim', 'ele (objeto)', ''], ['her', 'rãr', 'ela (objeto)', ''], ['us', 'âs', 'nós (objeto)', ''], ['them', 'dém', 'eles (objeto)', ''],
      ]),
      gramatica(8, 'Pronomes de objeto', 'PASSO 1: depois do verbo, o pronome muda: I → me, you → you, he → him, she → her, it → it, we → us, they → them. PASSO 2: «She likes ME.» (nunca «She likes I»). PASSO 3: depois de preposição também: «with me», «for you», «to him», «about them». PASSO 4: o pronome de sujeito vem ANTES do verbo, o de objeto DEPOIS. PASSO 5: «Do you like him?» «Yes, I like him a lot.»', {
        tag: 'Pronomes de objeto',
        comparacao: 'em português «me», «te», «o/a», «nos», «os/as» vêm antes ou depois do verbo. O inglês usa sempre DEPOIS do verbo, e eles se parecem pouco com o sujeito (he → him).',
        tabela: [
          { sujeito: 'I', objeto: 'me', exemplo: 'Call me.' }, { sujeito: 'he', objeto: 'him', exemplo: 'I like him.' }, { sujeito: 'she', objeto: 'her', exemplo: 'We help her.' }, { sujeito: 'we', objeto: 'us', exemplo: 'Help us.' }, { sujeito: 'they', objeto: 'them', exemplo: 'I know them.' },
        ],
        erros: [['She likes I.', 'She likes me.', 'Objeto: me.'], ['I love she.', 'I love her.', 'Objeto: her.'], ['Talk to I.', 'Talk to me.', 'Depois de preposição: me.'], ['They help we.', 'They help us.', 'Objeto: us.']],
      }),
      dialogo(8, 'Hobbies / Passatempos', 'Mia e Chris falam do que gostam.', [
        ['Mia', 'Do you like sports, Chris?', 'Você gosta de esportes, Chris?'], ['Chris', 'Yes, I love playing football. And you?', 'Sim, adoro jogar futebol. E você?'], ['Mia', 'I don\'t like football, but I enjoy swimming.', 'Não gosto de futebol, mas curto nadar.'], ['Chris', 'Do you swim with your brother?', 'Você nada com o seu irmão?'], ['Mia', 'Yes, I swim with him every Saturday.', 'Sim, nado com ele todo sábado.'], ['Chris', 'Great! Can I swim with you and him?', 'Ótimo! Posso nadar com você e com ele?'],
      ]),
      producao(5, 'Responda em voz alta: «Who do you like? Who do you call every day?» Use «him, her, them».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 13', [
      revisao(5, 'Fale de 3 hobbies que você ama e 1 que odeia, com -ing.'),
      exercicios(20, [
        ouvir('She loves reading books', ['She loves reading books', 'She love reading books', 'She loves reading movies'], 'She loves reading books', 'Ouça «loves».'), ouvir('I like him a lot', ['I like him a lot', 'I like her a lot', 'I like them a lot'], 'I like him a lot', 'Ouça «him».'), ditado('Do you like swimming', 'Escreva: do you like swimming.'), ditado('I don\'t like horror movies', 'Escreva: I don\'t like horror movies.'),
        mc('Qual frase está correta?', ['I like music.', 'I like of music.', 'I likes music.'], 'I like music.', 'Sem preposição.'), mc('Qual é o -ing de «run»?', ['running', 'runing', 'runming'], 'running', 'Dobra o n.'), mc('Qual pronome completa: «I know ___.» (ela)', ['her', 'she', 'hers'], 'her', 'Objeto: her.'), mc('Qual frase está correta?', ['She likes reading.', 'She likes read.', 'She like reading.'], 'She likes reading.', 'likes + -ing.'),
        lacuna('He ___ football. (adora)', ['loves', 'love', 'loving'], 'loves', 'he → -s.'), lacuna('I like ___. (nadar)', ['swimming', 'swiming', 'swim'], 'swimming', 'Dobra o m.'), lacuna('Call ___. (a mim)', ['me', 'I', 'my'], 'me', 'Objeto: me.'), lacuna('Do you like ___? (eles)', ['them', 'they', 'their'], 'them', 'Objeto: them.'),
        ordem('Ordene: «I love cooking for them.»', ['I', 'love', 'cooking', 'for', 'them'], 'I love cooking for them.', 'Verbo + -ing + preposição + objeto.'), ordem('Ordene: «Does she like dogs?»', ['Does', 'she', 'like', 'dogs'], 'Does she like dogs?', 'Does + sujeito + like.'),
        livre('Escreva 4 frases sobre os seus gostos: um «love», um «hate», uma com -ing e uma com «him/her/them».', 'I love music. I hate cold weather. I enjoy cooking. I like her a lot.'),
      ]),
      producao(5, 'Fale 1 minuto sobre os seus hobbies e com quem você os faz.'),
    ]),
  ],
});
