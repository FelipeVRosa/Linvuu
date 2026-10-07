import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 7, titulo: 'Família e possessivos', nivel: 'a1',
  objetivo: 'Nomear os membros da família, distinguir «parenti» (parentes) de «genitori» (pais), usar os possessivos com o artigo certo (e sem artigo com a família no singular) e falar da própria família.',
  nota: 'Você apresenta a sua família, diz de quem é cada coisa e pergunta sobre a família dos outros. Próxima aula: bar e comida, «vorrei», o partitivo e os números até 100.',
  sessoes: [
    sessao('S1', 'Os membros da família', [
      revisao(5, 'Retome a aula 6: conjugue em voz alta um verbo em -ere, um em -ire e um em -isc-. Diga duas frases com «avere» (fome, sede, sono, frio ou calor).'),
      palavras(8, [
        ['la famiglia', 'la famílha', 'a família', ''], ['i genitori', 'i djenitôri', 'os pais (pai e mãe)', ''], ['la mamma', 'la mámma', 'a mamãe, a mãe', ''], ['il papà', 'il papá', 'o papai, o pai', ''], ['il fratello', 'il fratéllo', 'o irmão', ''], ['la sorella', 'la sorélla', 'a irmã', ''], ['il nonno', 'il nónno', 'o avô', ''], ['la nonna', 'la nónna', 'a avó', ''],
      ]),
      gramatica(12, 'A família: gênero, plural e falsos amigos', 'PASSO 1: a maioria dos nomes de família tem um masculino em «-o» e um feminino em «-a»: «il nonno / la nonna», «il figlio / la figlia», «il cugino / la cugina», «lo zio / la zia». Os plurais seguem a regra da aula 5: «i nonni», «le nonne», «le figlie». PASSO 2: o plural masculino serve para um grupo misto: «i nonni» (avô e avó, ou avós), «i fratelli» (irmãos, ou irmãos e irmãs), «i figli» (filhos, ou filhos e filhas), «gli zii» (tio e tia). PASSO 3: cuidado com «parenti»: significa «parentes» (todos os familiares, como tios e primos), como em português, e não «pais», como o inglês «parents» e o francês «parents» podem sugerir. Os pais são «i genitori». PASSO 4: «nipote» serve para neto, neta, sobrinho e sobrinha; o artigo mostra o gênero: «il nipote», «la nipote». O contexto resolve. PASSO 5: «mamma» e «papà» são os nomes usados em família; «madre» e «padre» soam mais formais ou escritos. PASSO 6: para dizer quantos irmãos você tem, use «avere»: «Ho due fratelli e una sorella.» Para dizer que não tem, «Non ho fratelli». PASSO 7: quem não tem irmãos é «figlio unico» (homem) ou «figlia unica» (mulher). PASSO 8: «sposato» e «sposata» (casado, casada) concordam: «Mio zio è sposato».', {
        tag: 'Família',
        comparacao: '«parenti» corresponde ao português «parentes», e não a «pais» (quem estuda inglês ou francês pode confundir com «parents»). Como em português, o plural masculino cobre um grupo misto («irmãos» = «fratelli»). Cuidado com a consoante dobrada: «nonno» é avô, mas «nono» é o ordinal «nono».',
        tabela: [
          { masculino: 'il nonno', feminino: 'la nonna', plural: 'i nonni (avôs, ou avô e avó)' }, { masculino: 'il fratello', feminino: 'la sorella', plural: 'i fratelli / le sorelle' }, { masculino: 'il figlio', feminino: 'la figlia', plural: 'i figli / le figlie' },
          { masculino: 'lo zio', feminino: 'la zia', plural: 'gli zii / le zie' }, { masculino: 'il cugino', feminino: 'la cugina', plural: 'i cugini / le cugine' }, { masculino: 'il papà', feminino: 'la mamma', plural: 'i genitori (pai e mãe)' },
        ],
        erros: [['I miei parenti sono mamma e papà.', 'I miei genitori sono mamma e papà.', '«Parenti» são todos os familiares; os pais são «genitori».'], ['Ho due fratello.', 'Ho due fratelli.', 'Plural de «-o» é «-i».'], ['Ho una fratella.', 'Ho una sorella.', 'O feminino de «fratello» é «sorella».'], ['Ho due sorelli.', 'Ho due sorelle.', 'Plural de «-a» é «-e».']],
      }),
      producao(5, 'Diga em voz alta quantos irmãos, tios e primos você tem, e quantos anos têm os seus avós ou os seus pais: «Ho… Mia nonna ha… anni.»'),
    ]),
    sessao('S2', 'Os possessivos', [
      revisao(4, 'Diga o masculino, o feminino e o plural de «cugino», «zio» e «nonno». Qual é a diferença entre «parenti» e «genitori»?'),
      palavras(6, [
        ['il mio libro', 'il mío líbro', 'o meu livro', ''], ['la mia casa', 'la mía káza', 'a minha casa', ''], ['i miei amici', 'i miéi amítchi', 'os meus amigos', ''], ['le mie amiche', 'le míe amíke', 'as minhas amigas', ''], ['di chi è?', 'di ki é', 'de quem é?', ''], ['è mio', 'é mío', 'é meu', ''],
      ]),
      gramatica(12, 'Possessivos: mio, tuo, suo, nostro, vostro, loro', 'PASSO 1: o possessivo italiano concorda com o objeto possuído, e não com o dono: «il mio libro» (livro é masculino), «la mia casa» (casa é feminina), «i miei libri», «le mie case». Quem fala é homem ou mulher, tanto faz. PASSO 2: as formas são: «mio, mia, miei, mie», «tuo, tua, tuoi, tue», «suo, sua, suoi, sue», «nostro, nostra, nostri, nostre», «vostro, vostra, vostri, vostre» e «loro» (nunca muda). PASSO 3: o possessivo normalmente leva artigo definido: «il mio libro», «la tua casa», «i suoi amici», «le nostre amiche». PASSO 4: exceção importante: com parentes no singular o artigo se omite: «mio fratello», «tua sorella», «sua madre», «nostro zio». Com parentes no plural, o artigo volta: «i miei fratelli», «le tue sorelle». PASSO 5: «loro» sempre leva artigo, mesmo com a família no singular: «il loro fratello», «la loro madre». Também fica o artigo se há adjetivo ou diminutivo: «la mia cara sorella», «la mia sorellina». PASSO 6: com «mamma» e «papà», o artigo costuma ficar: «la mia mamma», «il mio papà». Com «nonno» e «nonna», as duas formas existem: «mia nonna» e «la mia nonna». PASSO 7: «suo» pode ser «dele», «dela» e «do senhor / da senhora»; o contexto decide. Para evitar dúvida, diga «il libro di Marco». PASSO 8: sem substantivo, o possessivo funciona como pronome: «È mio», «È tua?», «Sono nostri». E para perguntar a quem pertence: «Di chi è?» (singular), «Di chi sono?» (plural).', {
        tag: 'Possessivos',
        comparacao: 'em português o artigo é opcional («meu livro» ou «o meu livro»). O italiano exige o artigo («il mio libro»), mas o dispensa com família no singular («mio fratello»). Por outro lado, o português tem «seu» ambíguo (você, ele, ela), e o italiano também: «suo» pode ser dele, dela ou do senhor.',
        tabela: [
          { pessoa: 'io', masculino: 'mio', feminino: 'mia', masculino_plural: 'miei', feminino_plural: 'mie' }, { pessoa: 'tu', masculino: 'tuo', feminino: 'tua', masculino_plural: 'tuoi', feminino_plural: 'tue' }, { pessoa: 'lui / lei / Lei', masculino: 'suo', feminino: 'sua', masculino_plural: 'suoi', feminino_plural: 'sue' },
          { pessoa: 'noi', masculino: 'nostro', feminino: 'nostra', masculino_plural: 'nostri', feminino_plural: 'nostre' }, { pessoa: 'voi', masculino: 'vostro', feminino: 'vostra', masculino_plural: 'vostri', feminino_plural: 'vostre' }, { pessoa: 'loro', masculino: 'loro', feminino: 'loro', masculino_plural: 'loro', feminino_plural: 'loro' },
        ],
        erros: [['Mio libro è qui.', 'Il mio libro è qui.', 'Com coisas, o possessivo leva artigo.'], ['La mio casa è grande.', 'La mia casa è grande.', 'O possessivo concorda com «casa», feminina.'], ['Il mio fratello è alto.', 'Mio fratello è alto.', 'Com um parente no singular, o artigo se omite.'], ['I suo amici sono simpatici.', 'I suoi amici sono simpatici.', 'Plural masculino: «suoi».']],
      }),
      dialogo(8, 'Una foto di famiglia / Uma foto de família', 'Giulia mostra uma foto a Marco.', [
        ['Giulia', 'Guarda, questa è la mia famiglia.', 'Olhe, esta é a minha família.'], ['Marco', 'Chi è lui?', 'Quem é ele?'], ['Giulia', 'È mio padre. Si chiama Paolo. E lei è mia madre, Anna.', 'É meu pai. Ele se chama Paolo. E ela é minha mãe, Anna.'], ['Marco', 'E questi chi sono?', 'E esses, quem são?'], ['Giulia', 'Sono i miei fratelli, Luca e Sara.', 'São os meus irmãos, Luca e Sara.'], ['Marco', 'La tua famiglia è grande!', 'A sua família é grande!'],
      ]),
    ]),
    sessao('S3', 'Falar da família', [
      revisao(4, 'Diga em voz alta cinco frases com possessivos: duas com família no singular (sem artigo) e três com outras palavras (com artigo).'),
      palavras(5, [
        ['lo zio', 'lo tsío', 'o tio', ''], ['la zia', 'la tsía', 'a tia', ''], ['il cugino', 'il kudjíno', 'o primo', ''], ['i parenti', 'i parénti', 'os parentes', ''], ['figlio unico', 'fílho úniko', 'filho único', ''],
      ]),
      gramatica(8, 'Perguntar e responder sobre a família', 'PASSO 1: para perguntar sobre irmãos: «Hai fratelli o sorelle?» (informal), «Ha fratelli o sorelle?» (formal). Resposta: «Ho un fratello e una sorella» ou «Sono figlio unico». PASSO 2: para perguntar o nome: «Come si chiama tuo fratello?» (singular) e «Come si chiamano i tuoi genitori?» (plural). A resposta usa a mesma forma do verbo: «Si chiama Luca», «Si chiamano Paolo e Anna». PASSO 3: para perguntar a idade: «Quanti anni ha tua sorella?» — «Ha quindici anni». PASSO 4: para perguntar a profissão: «Che lavoro fa tuo padre?» — «Fa il medico» ou «È medico». Veja o verbo «fare» na aula 12. PASSO 5: profissões úteis: «medico», «insegnante», «infermiere», «avvocato», «ingegnere», «studente». «Insegnante» serve para homem e mulher (o artigo mostra o gênero: «l\'insegnante»); «studente» faz o feminino «studentessa»; «medico» também é usado para mulheres, e existe «dottoressa». PASSO 6: para descrever onde moram: «I miei nonni abitano a Napoli». Para dizer com quem você mora: «Abito con i miei genitori».', {
        tag: 'Família',
        comparacao: 'em português perguntamos «como se chama seu irmão?» e «como se chamam seus pais?». Em italiano, o verbo «chiamarsi» também concorda: «si chiama» (um) e «si chiamano» (vários).',
        tabela: [
          { pergunta: 'Hai fratelli o sorelle?', resposta: 'Ho un fratello e una sorella.' }, { pergunta: 'Come si chiama tua sorella?', resposta: 'Si chiama Sara.' }, { pergunta: 'Come si chiamano i tuoi genitori?', resposta: 'Si chiamano Paolo e Anna.' },
          { pergunta: 'Quanti anni ha tuo fratello?', resposta: 'Ha venti anni.' }, { pergunta: 'Che lavoro fa tuo padre?', resposta: 'È medico.' }, { pergunta: 'Dove abitano i tuoi nonni?', resposta: 'Abitano a Napoli.' },
        ],
        erros: [['Come si chiama i tuoi genitori?', 'Come si chiamano i tuoi genitori?', 'Sujeito plural, verbo plural.'], ['Hai fratello o sorella?', 'Hai fratelli o sorelle?', 'Pergunte no plural.'], ['Mio padre è un medico.', 'Mio padre è medico.', 'Sem adjetivo, a profissão depois de «essere» vai sem artigo.'], ['Mia sorella ha quindici anno.', 'Mia sorella ha quindici anni.', 'Mais de um: «anni».']],
      }),
      texto(8, 'La famiglia di Marco', 'Marco ha una famiglia grande. I suoi genitori si chiamano Paolo e Anna. Suo padre è medico e sua madre è insegnante. Marco ha una sorella, Sara, e un fratello, Luca. Sara ha quindici anni e Luca ha venti anni. I nonni abitano a Napoli. Gli zii e i cugini abitano a Milano. Domenica la famiglia è insieme.', 'Marco tem uma família grande. Os pais dele se chamam Paolo e Anna. O pai dele é médico e a mãe dele é professora. Marco tem uma irmã, Sara, e um irmão, Luca. Sara tem quinze anos e Luca tem vinte. Os avós moram em Nápoles. Os tios e os primos moram em Milão. No domingo a família está reunida.', [['Come si chiamano i genitori di Marco?', 'Si chiamano Paolo e Anna.'], ['Che lavoro fa suo padre?', 'È medico.'], ['Quanti anni ha Sara?', 'Ha quindici anni.'], ['Dove abitano i nonni?', 'Abitano a Napoli.']]),
      producao(5, 'Descreva em voz alta a sua família ou uma família imaginária: nomes, idades, profissões e onde moram.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 7', [
      revisao(5, 'Apresente a família de um amigo imaginário, com pelo menos quatro parentes, usando possessivos.'),
      exercicios(20, [
        ouvir('i miei genitori', ['i miei genitori', 'i miei parenti', 'i miei fratelli'], 'i miei genitori', 'Ouça «genitori», os pais.'), ouvir('la mia sorella', ['la mia sorella', 'mia sorella', 'la tua sorella'], 'la mia sorella', 'Ouça o artigo antes do possessivo.'), ouvir('Come si chiamano', ['Come si chiamano', 'Come si chiama', 'Come ti chiami'], 'Come si chiamano', 'Ouça o «-no» final.'),
        ditado('Mio padre è medico', 'Escreva: Mio padre è medico.'), ditado('Le mie sorelle sono simpatiche', 'Escreva: Le mie sorelle sono simpatiche.'), ditado('Di chi è', 'Escreva: Di chi è.'),
        mc('Qual é o plural de «la zia»?', ['le zie', 'le zii', 'i zii'], 'le zie', 'Feminino em «-a» faz plural em «-e».'), mc('O que significa «i parenti»?', ['os parentes', 'os pais', 'os primos'], 'os parentes', 'Pais é «genitori»; «parenti» são todos os familiares.'), mc('Qual forma está certa?', ['Mio fratello', 'Il mio fratello', 'La mio fratello'], 'Mio fratello', 'Parente no singular não leva artigo.'), mc('Qual forma está certa?', ['Il loro fratello', 'Loro fratello', 'Suo fratello loro'], 'Il loro fratello', '«Loro» sempre leva artigo.'),
        lacuna('___ madre è insegnante. (a minha)', ['Mia', 'La mia', 'Il mio'], 'Mia', 'Parente no singular: sem artigo.'), lacuna('___ amici sono simpatici. (os meus)', ['I miei', 'Il mio', 'Le mie'], 'I miei', 'Masculino plural: «i miei».'), lacuna('___ casa è grande. (a nossa)', ['La nostra', 'Il nostro', 'La nostri'], 'La nostra', 'Concorda com «casa», feminina.'), lacuna('Come ___ i tuoi genitori?', ['si chiamano', 'si chiama', 'ti chiami'], 'si chiamano', 'Sujeito plural.'),
        ordem('Ordene: «Mio padre e mia madre abitano a Roma.»', ['Mio', 'padre', 'e', 'mia', 'madre', 'abitano', 'a', 'Roma'], 'Mio padre e mia madre abitano a Roma.', 'Sujeito composto, verbo no plural.'), ordem('Ordene: «Di chi è questo libro?»', ['Di', 'chi', 'è', 'questo', 'libro'], 'Di chi è questo libro?', 'Pergunta sobre posse.'),
        livre('Escreva em italiano: Os meus avós moram em Napoli. Meu pai é médico.', 'I miei nonni abitano a Napoli. Mio padre è medico.'),
      ]),
      producao(5, 'Fale em voz alta de dois objetos seus e de dois de um amigo: «Questo è il mio… Questa è la sua…»'),
    ]),
  ],
});
