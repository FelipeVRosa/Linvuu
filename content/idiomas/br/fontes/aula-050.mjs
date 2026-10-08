import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 50, titulo: 'Personal infinitive, gerund and participle', nivel: 'b1',
  objetivo: 'Form and use the personal infinitive («para nós fazermos», «sem eles saberem»), know when spoken Portuguese avoids it, and use the gerund and the participle correctly («aprendi vendo filmes», «terminada a aula, saímos»).',
  nota: 'You can recognize and produce the personal infinitive, use the gerund for manner and simultaneous action, and read the absolute participle of formal texts. Next lesson: relatives (2), with «cujo», «o qual», «quanto» and «onde».',
  sessoes: [
    sessao('S1', 'The personal infinitive', [
      revisao(5, 'Say the infinitive of «falar», «comer», «sair», «fazer», «ser» and «ter». Then say what you remember about the subjunctive of purpose: «para que eu fale», «antes que eles cheguem» (lesson 44).'),
      palavras(8, [
        ['é importante', '', 'it is important', ''], ['é preciso', '', 'it is necessary', ''], ['é melhor', '', 'it is better', ''], ['é possível', '', 'it is possible', ''],
        ['antes de', '', 'before', ''], ['depois de', '', 'after', ''], ['sem', '', 'without', ''], ['apesar de', 'ah-peh-ZAR djee', 'despite, although', ''],
      ]),
      gramatica(12, 'Para nós fazermos, sem eles saberem', "STEP 1: Portuguese has an infinitive that can take person endings: the personal infinitive. For «eu», «você», «ele» and «ela» it is identical to the plain infinitive. The other forms add endings to the infinitive: «tu» -es, «nós» -mos, «vós» -des (almost never used), «eles / elas / vocês» -em. For example, «falar, falares, falar, falarmos, falardes, falarem». STEP 2: use it when the infinitive has its own subject, different from the subject of the main verb: «É melhor nós sairmos agora.» «Pedi para eles esperarem.» «Eles saíram sem nós vermos.» STEP 3: typical frames are an impersonal expression («é importante, é preciso, é melhor, é possível») or a preposition («para, sem, antes de, depois de, por, até, apesar de, em vez de») followed by the subject and the personal infinitive: «Antes de eles chegarem, a gente arrumou a sala.» STEP 4: do not use the personal infinitive when both verbs have the same subject: «Nós queremos sair», never «queremos sairmos». STEP 5: irregular verbs have no irregular personal infinitive; always start from the infinitive: «fazer, fazermos, fazerem»; «ser, sermos, serem»; «ter, termos, terem»; «ir, irmos, irem»; «dizer, dizermos, dizerem». STEP 6: be honest about speech. In spoken Brazilian Portuguese the personal infinitive is often avoided or left unmarked: «para a gente fazer», «sem eles saber», «antes deles chegar» are heard everywhere. Careful writing, exams and formal speeches keep the endings («para nós fazermos», «sem eles saberem», «antes de eles chegarem»). You should recognize the endings -mos and -em on an infinitive and be able to produce them when the situation is formal. STEP 7: in writing, «de eles» is not contracted before the subject of an infinitive («antes de eles chegarem»); in speech «antes deles chegarem» is common.", {
        tag: 'Personal infinitive',
        comparacao: "English has no personal infinitive. It says «for us to do», «without them knowing», «before they arrive», with the subject as an object pronoun, a possessive or a normal verb. In Portuguese the infinitive itself carries the person: «para nós fazermos», «sem eles saberem». You can often translate the same idea with the subjunctive you know: «antes de eles chegarem» = «antes que eles cheguem», and «para nós fazermos» = «para que a gente faça». The personal infinitive is shorter and sounds more written; the subjunctive is more usual in speech.",
        tabelas: [
          { titulo: 'Personal infinitive (regular and irregular verbs: always infinitive + endings)', linhas: [
            { person: 'eu, você, ele, ela, a gente', falar: 'falar', comer: 'comer', fazer: 'fazer', ser: 'ser' },
            { person: 'tu', falar: 'falares', comer: 'comeres', fazer: 'fazeres', ser: 'seres' },
            { person: 'nós', falar: 'falarmos', comer: 'comermos', fazer: 'fazermos', ser: 'sermos' },
            { person: 'eles, elas, vocês', falar: 'falarem', comer: 'comerem', fazer: 'fazerem', ser: 'serem' },
          ] },
        ],
        exemplos: [['É importante nós estudarmos todos os dias.', 'It is important for us to study every day.'], ['Pedi para eles esperarem na recepção.', 'I asked them to wait at the reception.'], ['Eles saíram sem nós vermos.', 'They left without us seeing.'], ['Para nós fazermos o jantar, precisamos de tempo.', 'For us to make dinner, we need time.'], ['Antes de eles chegarem, a gente arrumou a sala.', 'Before they arrived, we tidied the room.']],
        erros: [['É importante eles estudar.', 'É importante eles estudarem.', 'In standard Portuguese the plural subject «eles» takes the ending -em (spoken Portuguese often omits it).'], ['Nós queremos sairmos agora.', 'Nós queremos sair agora.', 'When both verbs have the same subject, use the plain infinitive.'], ['Ele pediu para mim esperar.', 'Ele pediu para eu esperar.', '«Eu» is the subject of «esperar»; «para mim esperar» is heard often but is considered incorrect.'], ['Eles saíram sem nós ver.', 'Eles saíram sem nós vermos.', 'With the subject «nós», standard Portuguese uses -mos.']],
      }),
      producao(5, 'Say aloud four sentences with a different subject for the infinitive: «É importante nós…», «Pedi para eles…», «Antes de eles…», «Sem você…». Then say the same ideas as you would to a friend, with «a gente».'),
    ]),
    sessao('S2', 'The gerund and the participle', [
      revisao(4, 'Say aloud the personal infinitive of «falar», «fazer», «ser» and «ter» for «nós» and «eles»: falarmos, falarem; fazermos, fazerem; sermos, serem; termos, terem.'),
      palavras(6, [
        ['ao mesmo tempo', '', 'at the same time', ''], ['aos poucos', '', 'little by little', ''], ['cada vez mais', '', 'more and more', ''], ['dito isso', '', 'that said (having said that)', ''], ['feito isso', '', 'once that is done', ''], ['indo', '', 'getting by (an answer to «tudo bem?»)', ''],
      ]),
      gramatica(12, 'Aprendi vendo filmes; terminada a aula, saímos', "STEP 1: the gerund ends in -ando (-ar verbs), -endo (-er verbs) and -indo (-ir verbs): «falando, comendo, partindo». Irregular ones: «pôr → pondo», «ter → tendo», «vir → vindo», «ser → sendo». You already use it in «estar + gerund» (lesson 17). STEP 2: the gerund also tells how or while: «Ele saiu chorando» (crying), «Aprendi português vendo filmes» (by watching films), «Tendo pouco tempo, ela chegou de táxi» (since she had little time). It can also show a slow change: «A situação vai melhorando» (is gradually getting better), «O preço vem subindo» (has been rising). STEP 3: never use the gerund after a preposition or as a noun. Use the infinitive: «Antes de sair, liguei» (not «antes saindo»), «Nadar é bom para a saúde» (not «nadando é bom»). STEP 4: the participle (-ado / -ido) appears in the compound tenses («tinha feito»), in the passive («foi feito»), as an adjective («a porta fechada, um aluno cansado») and, in formal writing, as the absolute participle: «Terminada a reunião, todos saíram» (once the meeting was over), «Feito o pedido, aguarde» (once the order is placed, wait). «Dito isso» (that said) is the most common fixed phrase. STEP 5: short and irregular participles to know: «aberto, coberto, dito, escrito, feito, posto, visto, aceito, entregue, pago, ganho, gasto, preso, eleito». STEP 6: honest note on style. In Brazilian speech the gerund is very frequent, but there is a widely criticized habit called «gerundismo», in which the future is built as «vou estar enviando» or «vou estar verificando». It is common in call centers and e-mails, but it is better to say «vou enviar» or «vou verificar».", {
        tag: 'Gerund and participle',
        comparacao: "English uses «-ing» for many things: «I learned by watching films» (gerund), «Swimming is good» (noun), «before leaving» (after a preposition). Portuguese separates them: the gerund (-ndo) is used for how or while, and the infinitive is used for the noun role and after prepositions. The English participle phrase «that done» corresponds to the Portuguese absolute participle «feito isso». In Portugal people say «estou a fazer» instead of «estou fazendo»; in Brazil the gerund is the normal form.",
        tabelas: [
          { titulo: 'Gerund formation and main uses', linhas: [
            { infinitive: 'falar', gerund: 'falando', use: 'manner: Aprendi falando com amigos.' },
            { infinitive: 'comer', gerund: 'comendo', use: 'simultaneous action: Ele leu comendo.' },
            { infinitive: 'partir', gerund: 'partindo', use: 'progress: A situação vai melhorando.' },
            { infinitive: 'pôr / ter / vir', gerund: 'pondo / tendo / vindo', use: 'irregular forms' },
          ] },
          { titulo: 'Participle uses', linhas: [
            { use: 'compound tenses', example: 'Eu tinha feito o jantar.' }, { use: 'passive', example: 'O jantar foi feito por ele.' },
            { use: 'adjective', example: 'A porta está fechada.' }, { use: 'absolute participle (formal)', example: 'Terminada a aula, saímos.' },
          ] },
        ],
        exemplos: [['Aprendi português vendo filmes e séries.', 'I learned Portuguese watching films and series.'], ['Ela saiu da sala chorando.', 'She left the room crying.'], ['Terminada a aula, os alunos saíram.', 'Once the class was over, the students left.'], ['Dito isso, vamos começar.', 'That said, let us begin.'], ['Tudo bem? Indo.', 'How are you? Getting by.']],
        erros: [['Antes saindo de casa, eu liguei.', 'Antes de sair de casa, eu liguei.', 'After a preposition use the infinitive, never the gerund.'], ['Nadando é bom para a saúde.', 'Nadar é bom para a saúde.', 'A verb used as a noun is the infinitive.'], ['Ele tinha fazido o trabalho.', 'Ele tinha feito o trabalho.', '«Fazer» has an irregular participle: «feito».'], ['Vou estar enviando o e-mail amanhã.', 'Vou enviar o e-mail amanhã.', '«Vou estar + gerund» for a simple future is the criticized «gerundismo»; use the simple form.']],
      }),
      producao(8, 'Say aloud four sentences: two with the gerund of manner («Aprendi… vendo…», «Ele saiu… cantando») and two with the participle («Terminado o trabalho, eu…», «Dito isso, …»). Then answer «Tudo bem?» with «Indo» and a short reason.'),
    ]),
    sessao('S3', 'Combining the three: ao, ter + participle, sem and por', [
      revisao(4, 'Say aloud: «Antes de eles chegarem, eu…», «Depois de nós comermos, a gente…», «Terminada a aula, eu…», «Aprendi vendo…».'),
      palavras(5, [
        ['ao chegar', '', 'when arriving, upon arrival', ''], ['por ter chegado', '', 'because (I, he, she) arrived', ''], ['sem terem avisado', '', 'without having told anyone (plural)', ''], ['o recado', 'oh heh-KAH-doo', 'the message (left by someone)', ''], ['o barulho', 'oh bah-HOO-lyoo', 'the noise', ''],
      ]),
      gramatica(8, 'Ao chegar, depois de ter feito, sem terem avisado', "STEP 1: «ao» plus infinitive means «when» or «upon», and it refers to something happening at the same moment: «Ao chegar ao hotel, pedi o café da manhã.» If the subject changes or is plural, use the personal infinitive: «Ao chegarmos ao hotel, o recepcionista nos deu as chaves.» STEP 2: the compound infinitive is «ter» plus the participle (or the personal form of «ter»): «depois de ter lido», «por ter chegado tarde», «sem terem avisado», «apesar de termos estudado». It shows an action that was already finished before the main verb. STEP 3: when the order of events is already clear, the simple infinitive is enough: «Depois de comer, saí» sounds more natural than «depois de ter comido». Use the compound form for emphasis or in formal writing. STEP 4: «por» plus infinitive gives a reason: «Por ter chegado tarde, perdi o início do filme.» «Por não termos avisado, ele ficou preocupado.» STEP 5: the gerund and «ao» plus infinitive can be close in meaning: «Saindo de casa, vi o vizinho» and «Ao sair de casa, vi o vizinho» are both fine; the second is more common in speech. STEP 6: the subject of an infinitive clause is the subject of the infinitive, so it can be a noun too: «Antes de os convidados chegarem» (the contraction «de + os» is required with the article). In speech people say «antes de eles chegarem» or, more casually, «antes de chegarem».", {
        tag: 'Personal infinitive',
        comparacao: "English uses «upon arriving», «after having read», «without them telling us», «because of arriving late». Portuguese uses one structure for all: preposition + infinitive. The compound infinitive «ter + participle» is the equivalent of «having done». The personal endings (-mos, -em) show the subject without a pronoun: «ao chegarmos» (when we arrived), «sem terem avisado» (without having told us).",
        tabela: [
          { structure: 'ao + infinitive', meaning: 'when, upon', example: 'Ao chegar, ligue para mim.' },
          { structure: 'depois de + infinitive / ter + participle', meaning: 'after', example: 'Depois de ter lido o contrato, ela assinou.' },
          { structure: 'sem + (personal) infinitive', meaning: 'without', example: 'Eles saíram sem nós vermos.' },
          { structure: 'por + (ter +) infinitive', meaning: 'because', example: 'Por termos chegado tarde, perdemos o início.' },
          { structure: 'apesar de + infinitive', meaning: 'although, despite', example: 'Apesar de eles terem estudado, não passaram.' },
        ],
        exemplos: [['Ao chegar ao hotel, pedi o café da manhã.', 'Upon arriving at the hotel, I asked for breakfast.'], ['Depois de ter lido o contrato, ela assinou.', 'After having read the contract, she signed.'], ['Por termos chegado tarde, perdemos o início do filme.', 'Because we arrived late, we missed the start of the film.'], ['Eles saíram sem terem avisado ninguém.', 'They left without having told anyone.']],
        erros: [['Ao chegamos ao hotel, pedimos o café.', 'Ao chegarmos ao hotel, pedimos o café.', 'After «ao» use the infinitive; for «nós» the personal infinitive is «chegarmos».'], ['Por tendo chegado tarde, perdi o filme.', 'Por ter chegado tarde, perdi o filme.', 'After a preposition use the infinitive («ter»), not the gerund («tendo»).'], ['Depois de nós ter comido, saímos.', 'Depois de nós termos comido, saímos.', 'With the subject «nós», the auxiliary takes the ending: «termos».']],
      }),
      dialogo(8, 'Before the guests arrive', 'Beatriz and Thiago are getting ready for a party at home. The guests will come at eight.', [
        ['Thiago', 'Beatriz, é melhor nós sairmos já. Os convidados chegam às oito.', 'Beatriz, we had better leave now. The guests arrive at eight.'],
        ['Beatriz', 'Calma, ainda é cedo. Antes de eles chegarem, a gente tem uma hora para arrumar tudo.', 'Take it easy, it is still early. Before they arrive, we have an hour to tidy everything.'],
        ['Thiago', 'Mas o Marcos ainda não trouxe o bolo. É importante nós termos o bolo antes das oito.', 'But Marcos has not brought the cake yet. It is important for us to have the cake before eight.'],
        ['Beatriz', 'Já liguei. Ao ouvir meu recado, ele respondeu que estava chegando.', 'I already called. When he heard my message, he answered that he was on his way.'],
        ['Thiago', 'Ótimo. E os vizinhos? Ontem eles vieram pedir para a gente fazer menos barulho.', 'Great. And the neighbors? Yesterday they came to ask us to make less noise.'],
        ['Beatriz', 'Então vamos avisar os vizinhos antes de eles reclamarem de novo.', 'Then let us tell the neighbors before they complain again.'],
        ['Thiago', 'Boa ideia. Depois de arrumarmos a sala, a gente passa lá.', 'Good idea. After we tidy the living room, we will stop by.'],
        ['Beatriz', 'Combinado. E fique com as chaves, para eu não esquecer.', 'Agreed. And keep the keys, so that I do not forget.'],
        ['Thiago', 'Tá bom. Vou guardando tudo enquanto você arruma as flores.', 'All right. I will keep putting everything away while you arrange the flowers.'],
      ]),
      producao(5, 'Say aloud three sentences about the last time you prepared something with other people: one with «antes de eles / nós…», one with «ao + infinitive» and one with «por ter / termos…».'),
    ]),
    sessao('S4', 'Review and practice of lesson 50', [
      revisao(5, 'Say aloud the personal infinitive forms of «chegar» for «nós» and «eles» (chegarmos, chegarem). Then say one sentence with «sem eles…», one with «para nós…» and one with a gerund.'),
      exercicios(20, [
        ouvir('É melhor nós sairmos agora.', ['É melhor nós sairmos agora.', 'É melhor nós sair agora.', 'É melhor nós saímos agora.'], 'É melhor nós sairmos agora.', 'Personal infinitive for «nós»: «sairmos».'),
        ouvir('Antes de eles chegarem, a gente arrumou a sala.', ['Antes de eles chegarem, a gente arrumou a sala.', 'Antes de eles chegar, a gente arrumou a sala.', 'Antes deles chegaram, a gente arrumou a sala.'], 'Antes de eles chegarem, a gente arrumou a sala.', 'Standard form: «de eles chegarem».'),
        ouvir('Aprendi português vendo filmes.', ['Aprendi português vendo filmes.', 'Aprendi português viu filmes.', 'Aprendi português ver filmes.'], 'Aprendi português vendo filmes.', 'Gerund of manner: «vendo».'),
        ouvir('Terminada a aula, saímos.', ['Terminada a aula, saímos.', 'Terminando a aula, saímos.', 'Terminar a aula, saímos.'], 'Terminada a aula, saímos.', 'Absolute participle.'),
        ditado('Eles saíram sem nós vermos.', 'Personal infinitive with «nós»: «vermos».'), ditado('Para nós fazermos o jantar, precisamos de tempo.', 'Personal infinitive «fazermos».'), ditado('Dito isso, vamos começar.', 'Participle in a fixed phrase.'),
        mc('When do you use the personal infinitive?', ['when the infinitive has its own subject, different from the main verb', 'when both verbs have the same subject', 'after the verb «querer» always'], 'when the infinitive has its own subject, different from the main verb', 'It marks the subject of the infinitive.'),
        mc('Which sentence is correct?', ['Nós queremos sair agora.', 'Nós queremos sairmos agora.', 'Nós queremos saírem agora.'], 'Nós queremos sair agora.', 'Same subject: plain infinitive.'),
        mc('Which construction is correct?', ['Antes de sair, liguei.', 'Antes saindo, liguei.', 'Antes de saindo, liguei.'], 'Antes de sair, liguei.', 'After a preposition use the infinitive.'),
        mc('What does «dito isso» mean?', ['that said', 'they said so', 'it was told to me'], 'that said', 'Fixed phrase with the participle «dito».'),
        mc('In everyday speech, what often replaces «para nós fazermos»?', ['para a gente fazer', 'para fazendo', 'para nós faremos'], 'para a gente fazer', '«A gente» takes the unmarked infinitive.'),
        lacuna('É importante eles ___ cedo.', ['chegarem', 'chegar', 'chegarmos'], 'chegarem', 'Plural subject «eles»: -em.'), lacuna('Depois de nós ___ o jantar, saímos.', ['comermos', 'comer', 'comerem'], 'comermos', 'Subject «nós»: -mos.'),
        lacuna('Ela saiu sem eu ___.', ['ver', 'vermos', 'verem'], 'ver', 'Subject «eu»: plain infinitive.'), lacuna('Ele aprendeu inglês ___ séries.', ['vendo', 'visto', 'ver'], 'vendo', 'Gerund of manner.'),
        lacuna('___ a prova, os alunos saíram.', ['Feita', 'Fazendo', 'Fazer'], 'Feita', 'Absolute participle, agreeing with «a prova».'),
        ordem('Put in order: «É melhor nós sairmos agora.»', ['É', 'melhor', 'nós', 'sairmos', 'agora.'], 'É melhor nós sairmos agora.', 'Expression + subject + personal infinitive.'), ordem('Put in order: «Antes de eles chegarem, arrumamos a sala.»', ['Antes', 'de', 'eles', 'chegarem,', 'arrumamos', 'a', 'sala.'], 'Antes de eles chegarem, arrumamos a sala.', 'Preposition + subject + personal infinitive.'), ordem('Put in order: «Ela saiu sem eu ver.»', ['Ela', 'saiu', 'sem', 'eu', 'ver.'], 'Ela saiu sem eu ver.', '«Sem» + subject + infinitive.'),
        livre('Write in Portuguese: It is important that we study. (use «nós» and the personal infinitive)', 'É importante nós estudarmos.'), livre('Write in Portuguese: I learned Portuguese by watching films.', 'Aprendi português vendo filmes.'),
      ]),
      producao(5, 'Explain aloud, in three sentences, what you do before, while and after you study Portuguese. Use «antes de», a gerund and «depois de ter + participle».'),
    ]),
  ],
});
