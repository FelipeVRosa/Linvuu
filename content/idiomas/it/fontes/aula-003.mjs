import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 3, titulo: 'Apresentações, países, números 0 a 20 e idade', nivel: 'a1',
  objetivo: 'Apresentar-se e apresentar alguém, dizer de onde você é e onde mora, usar «a» e «in» com cidades e países, e contar de 0 a 20, incluindo a idade com o verbo «avere».',
  nota: 'Você se apresenta, fala de onde é, onde mora e diz a sua idade. Próxima aula: o presente dos verbos em -are, a negação e as perguntas.',
  sessoes: [
    sessao('S1', 'Cumprimentos e apresentações', [
      revisao(5, 'Responda em voz alta: «Sei stanco? Sei italiano? Dov\'è Giulia?» Depois conjugue «essere» de memória.'),
      palavras(6, [
        ['Mi chiamo', 'mi kiámo', 'eu me chamo', ''], ['Come ti chiami?', 'kôme ti kiámi', 'como você se chama? (informal)', ''], ['Come si chiama?', 'kôme si kiáma', 'como o senhor, a senhora se chama? (formal)', ''], ['Piacere', 'piatchêre', 'prazer', ''], ['Questo è', 'kuêsto é', 'este é (ao apresentar um homem)', ''], ['Questa è', 'kuêsta é', 'esta é (ao apresentar uma mulher)', ''],
      ]),
      gramatica(10, 'Apresentar-se e apresentar alguém', 'PASSO 1: para dizer o seu nome, use «Mi chiamo Ana.» Literalmente, «eu me chamo». Também se pode dizer «Sono Ana.» PASSO 2: para perguntar o nome: informal, «Come ti chiami?»; formal, «Come si chiama?», com a forma de «lei». PASSO 3: «piacere» é a resposta usual quando se conhece alguém. É igual para homem e mulher, e se pode reforçar: «Molto piacere.» PASSO 4: para perguntar como a pessoa está: informal, «Come stai?»; formal, «Come sta?». PASSO 5: para apresentar outra pessoa: «Questo è Luca.» (homem) ou «Questa è Giulia.» (mulher). PASSO 6: com desconhecidos, usa-se «Lei» e se dá o tratamento «signora» ou «signor» com o sobrenome: «Buongiorno, signora Rossi.» PASSO 7: se a pessoa propuser, passa-se ao «tu». Quem costuma propor é a pessoa mais velha ou de posição mais alta.', {
        tag: 'Frases básicas',
        comparacao: 'em português «me chamo» também é pronominal, e o italiano faz o mesmo: «mi chiamo», «ti chiami», «si chiama». A diferença está em «piacere», que não muda com quem fala, e no tratamento: em vez de «o senhor / a senhora», o italiano usa «Lei» para os dois.',
        tabela: [
          { situacao: 'dizer o nome', informal: 'Mi chiamo Ana.', formal: 'Mi chiamo Ana Silva.' }, { situacao: 'perguntar o nome', informal: 'Come ti chiami?', formal: 'Come si chiama?' }, { situacao: 'perguntar como está', informal: 'Come stai?', formal: 'Come sta?' },
          { situacao: 'responder', informal: 'Sto bene, grazie. E tu?', formal: 'Sto bene, grazie. E Lei?' }, { situacao: 'apresentar', informal: 'Questo è Luca.', formal: 'Questa è la signora Rossi.' },
        ],
        erros: [['Io sono chiamo Ana.', 'Mi chiamo Ana.', 'É um verbo pronominal: «eu me chamo».'], ['Come chiami?', 'Come ti chiami?', 'Falta o pronome «ti» (te).'], ['Come ti chiami? (a uma senhora desconhecida)', 'Come si chiama?', 'Com desconhecidos, use a forma de «Lei».'], ['Questo è Giulia.', 'Questa è Giulia.', '«Questo» é masculino; para mulher, «questa».']],
      }),
      dialogo(5, 'Primo incontro / Primeiro encontro', 'A signora Rossi e Ana se apresentam num curso.', [
        ['Signora Rossi', 'Buongiorno, mi chiamo Elena Rossi. Come si chiama?', 'Bom dia, me chamo Elena Rossi. Como a senhora se chama?'], ['Ana', 'Buongiorno, signora. Mi chiamo Ana. Piacere.', 'Bom dia, senhora. Me chamo Ana. Prazer.'], ['Signora Rossi', 'Piacere, Ana. Come sta?', 'Prazer, Ana. Como vai?'], ['Ana', 'Sto bene, grazie. E Lei?', 'Vou bem, obrigada. E a senhora?'], ['Signora Rossi', 'Molto bene, grazie. Questo è Marco.', 'Muito bem, obrigada. Este é o Marco.'], ['Marco', 'Buongiorno, Ana. Piacere.', 'Bom dia, Ana. Prazer.'],
      ]),
      producao(4, 'Apresente-se em voz alta: «Buongiorno, mi chiamo… Piacere.» Depois apresente um amigo: «Questo è…»'),
    ]),
    sessao('S2', 'Países e nacionalidades', [
      revisao(4, 'Diga em voz alta: «Mi chiamo… Sono… Piacere. E Lei?» e responda como se fosse a outra pessoa.'),
      palavras(6, [
        ['il Brasile, brasiliano', 'il brazîle, brazilyáno', 'Brasil, brasileiro', ''], ['l\'Italia, italiano', 'litália, italyáno', 'Itália, italiano', ''], ['il Portogallo, portoghese', 'il portogállo, portoguêse', 'Portugal, português', ''], ['la Spagna, spagnolo', 'la spánha, spanhólo', 'Espanha, espanhol', ''], ['la Francia, francese', 'la frántcha, frantchêse', 'França, francês', ''],
        ['la Germania, tedesco', 'la djermánia, tedêsko', 'Alemanha, alemão', ''], ['gli Stati Uniti, americano', 'lhi státi uníti, amerikáno', 'Estados Unidos, americano', ''], ['l\'Inghilterra, inglese', 'linguiltérra, inglêse', 'Inglaterra, inglês', ''], ['l\'Argentina, argentino', 'lardjentína, ardjentíno', 'Argentina, argentino', ''], ['la Svizzera, svizzero', 'la zvíttsera, zvíttsero', 'Suíça, suíço', ''],
      ]),
      gramatica(12, 'Origem, nacionalidade e onde você mora', 'PASSO 1: para perguntar a origem: «Di dove sei?» (informal) ou «Di dov\'è?» (formal). Para responder, use «sono di» + cidade: «Sono di Roma.» PASSO 2: para a nacionalidade, use «essere» + adjetivo, que concorda com o gênero: «Sono brasiliano / brasiliana.» Adjetivos em «-e» não mudam de gênero: «portoghese», «francese», «inglese». Nacionalidades se escrevem com minúscula. PASSO 3: países levam artigo: «l\'Italia», «la Francia», «il Brasile», «il Portogallo», «gli Stati Uniti». O artigo se omite depois de «in»: «in Italia». PASSO 4: para dizer onde mora, use «abitare» com a preposição certa: «a» + cidade («Abito a Roma»); «in» + país («Abito in Italia», «in Brasile»); e «negli» + «Stati Uniti» («Abito negli Stati Uniti»). PASSO 5: «abito» é «eu moro» e «abita» é «ele ou ela mora»; a conjugação completa dos verbos em -are vem na aula 4. PASSO 6: para perguntar onde a pessoa mora: «Dove abiti?» (informal) ou «Dove abita?» (formal).', {
        tag: 'Preposições',
        comparacao: 'em português dizemos «moro em Roma», «na Itália», «no Brasil», «nos Estados Unidos», com artigo. O italiano usa «a» para cidades e «in» para países, sem artigo. A exceção é «negli Stati Uniti», no plural.',
        tabela: [
          { tipo: 'cidade', preposicao: 'a', exemplo: 'Abito a Roma.' }, { tipo: 'país (singular)', preposicao: 'in', exemplo: 'Abito in Italia.' }, { tipo: 'país (singular, masculino)', preposicao: 'in', exemplo: 'Abito in Brasile.' }, { tipo: 'país plural', preposicao: 'negli', exemplo: 'Abito negli Stati Uniti.' },
        ],
        erros: [['Abito in Roma.', 'Abito a Roma.', 'Cidade usa «a».'], ['Abito a Brasile.', 'Abito in Brasile.', 'País usa «in».'], ['Lei è italiano. (de uma mulher)', 'Lei è italiana.', 'O adjetivo concorda com o gênero.'], ['Sono Brasiliano.', 'Sono brasiliano.', 'Nacionalidade (adjetivo) em minúscula.']],
      }),
      producao(8, 'Diga: «Sono… (nacionalidade). Sono di… Abito a/in… Il mio amico è… Abita a/in…» Use três países diferentes. Depois pergunte, com «Lei»: «Di dov\'è? Dove abita?»'),
    ]),
    sessao('S3', 'Números de 0 a 20 e a idade', [
      revisao(4, 'Diga de memória o nome de seis países em italiano, com a preposição certa de «abitare».'),
      palavras(5, [
        ['zero', 'dzéro', 'zero', ''], ['uno', 'úno', 'um', ''], ['due', 'dúe', 'dois', ''], ['tre', 'trê', 'três', ''], ['quattro', 'kuáttro', 'quatro', ''], ['cinque', 'tchínkue', 'cinco', ''], ['sei', 'séi', 'seis', ''], ['sette', 'sétte', 'sete', ''], ['otto', 'ótto', 'oito', ''], ['nove', 'nóve', 'nove', ''], ['dieci', 'diétchi', 'dez', ''],
      ]),
      gramatica(8, 'Os números de 11 a 20 e a idade com avere', 'PASSO 1: 0 a 10: zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci. PASSO 2: 11 a 16 terminam em «-dici»: undici, dodici, tredici, quattordici, quindici, sedici. PASSO 3: 17 a 19 juntam «dici» ao número: diciassette, diciotto, diciannove. 20 é «venti». PASSO 4: para dizer a idade, o italiano usa «avere» (ter), como o português: «Ho venti anni.» PASSO 5: o presente de «avere» é irregular: «ho», «hai», «ha», «abbiamo», «avete», «hanno». O «h» nunca soa, mas distingue palavras: «ha» (tem) × «a» (a, em), «hanno» (têm) × «anno» (ano). PASSO 6: para perguntar a idade: «Quanti anni hai?» (informal) ou «Quanti anni ha?» (formal). PASSO 7: «anno» é um ano, «anni» são anos: «un anno», «due anni».', {
        tag: 'Números',
        comparacao: 'em português a idade também é «ter»: «tenho vinte anos». Mas o inglês e o alemão usam «ser». Você não vai errar se pensar «tenho», e o italiano escreve «ho».',
        tabelas: [
          { titulo: 'avere (ter)', linhas: [
            { pronome: 'io', forma: 'ho', exemplo: 'Ho venti anni.' }, { pronome: 'tu', forma: 'hai', exemplo: 'Hai quindici anni.' }, { pronome: 'lui / lei / Lei', forma: 'ha', exemplo: 'Lui ha diciotto anni.' },
            { pronome: 'noi', forma: 'abbiamo', exemplo: 'Abbiamo sedici anni.' }, { pronome: 'voi', forma: 'avete', exemplo: 'Avete dodici anni.' }, { pronome: 'loro', forma: 'hanno', exemplo: 'Loro hanno tredici anni.' },
          ] },
          { titulo: 'Os números de 11 a 20', linhas: [
            { numero: '11', forma: 'undici (úndi-tchi)', exemplo: 'Ho undici anni.' }, { numero: '12', forma: 'dodici (dódi-tchi)', exemplo: 'Ha dodici anni.' }, { numero: '13', forma: 'tredici (trédi-tchi)', exemplo: 'Ha tredici anni.' },
            { numero: '14', forma: 'quattordici (kuattórdi-tchi)', exemplo: 'Abbiamo quattordici anni.' }, { numero: '15', forma: 'quindici (kuíndi-tchi)', exemplo: 'Hai quindici anni.' }, { numero: '16', forma: 'sedici (sédi-tchi)', exemplo: 'Hanno sedici anni.' },
            { numero: '17', forma: 'diciassette (ditchassétte)', exemplo: 'Ho diciassette anni.' }, { numero: '18', forma: 'diciotto (ditchótto)', exemplo: 'Ha diciotto anni.' }, { numero: '19', forma: 'diciannove (ditchannóve)', exemplo: 'Ha diciannove anni.' }, { numero: '20', forma: 'venti (vénti)', exemplo: 'Ho venti anni.' },
          ] },
        ],
        erros: [['Sono venti anni.', 'Ho venti anni.', 'A idade usa «avere».'], ['Ho venti anno.', 'Ho venti anni.', 'Com número maior que um, o plural é «anni».'], ['Sei quanti anni?', 'Quanti anni hai?', 'A pergunta também usa «avere».'], ['Lui a diciotto anni.', 'Lui ha diciotto anni.', 'O verbo é «ha», com «h»; «a» sem «h» é preposição.']],
      }),
      dialogo(8, 'Quanti anni hai? / Quantos anos você tem?', 'Giulia e Marco conversam sobre a idade deles.', [
        ['Giulia', 'Marco, quanti anni hai?', 'Marco, quantos anos você tem?'], ['Marco', 'Ho venti anni. E tu?', 'Tenho vinte anos. E você?'], ['Giulia', 'Io ho diciannove anni. E Luca?', 'Eu tenho dezenove anos. E o Luca?'], ['Marco', 'Anche Luca ha diciannove anni.', 'O Luca também tem dezenove anos.'], ['Giulia', 'Allora noi siamo tutti giovani!', 'Então nós somos todos jovens!'], ['Marco', 'Sì, è vero!', 'Sim, é verdade!'],
      ]),
      producao(5, 'Conte de 0 a 20 em voz alta, devagar. Depois diga a sua idade e a de três pessoas: «Ho… anni. Lui / lei ha… anni.»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 3', [
      revisao(5, 'Apresente-se em italiano: nome, nacionalidade, cidade, país e idade, em seis frases.'),
      exercicios(20, [
        ouvir('Ho venti anni', ['Ho venti anni', 'Ho quindici anni', 'Ha venti anni'], 'Ho venti anni', 'Ouça «venti» e a diferença entre «ho» e «ha».'), ouvir('Abito in Italia', ['Abito in Italia', 'Abito a Roma', 'Abito negli Stati Uniti'], 'Abito in Italia', 'Ouça a preposição: «in» antes do país.'), ouvir('Come ti chiami', ['Come ti chiami', 'Come si chiama', 'Come stai'], 'Come ti chiami', 'Ouça o «ti chiami».'),
        ditado('Mi chiamo Ana', 'Escreva: Mi chiamo Ana.'), ditado('Abito a Roma', 'Escreva: Abito a Roma.'), ditado('Lui ha diciotto anni', 'Escreva: Lui ha diciotto anni.'),
        mc('Como dizer «tenho 20 anos»?', ['Ho venti anni.', 'Sono venti anni.', 'Ho venti anno.'], 'Ho venti anni.', 'Idade com «avere».'), mc('Qual preposição acompanha «Roma»?', ['a', 'in', 'di'], 'a', 'Cidade usa «a».'), mc('Qual preposição acompanha «Italia»?', ['in', 'a', 'al'], 'in', 'País usa «in».'), mc('Como se apresenta uma mulher chamada Giulia?', ['Questa è Giulia.', 'Questo è Giulia.', 'Quello è Giulia.'], 'Questa è Giulia.', '«Questa» é feminino.'),
        lacuna('Lei ___ tredici anni. (tem)', ['ha', 'è', 'hanno'], 'ha', '«lei ha».'), lacuna('Noi ___ sedici anni. (temos)', ['abbiamo', 'siamo', 'avete'], 'abbiamo', '«noi abbiamo».'), lacuna('Abito ___ Stati Uniti.', ['negli', 'in', 'a'], 'negli', 'País plural: «negli».'), lacuna('___ Ana. (me chamo)', ['Mi chiamo', 'Sono chiamo', 'Ho'], 'Mi chiamo', '«mi chiamo».'),
        ordem('Ordene: «Mi chiamo Ana e ho venti anni.»', ['Mi', 'chiamo', 'Ana', 'e', 'ho', 'venti', 'anni'], 'Mi chiamo Ana e ho venti anni.', 'Nome e idade.'), ordem('Ordene: «Lei è brasiliana.»', ['Lei', 'è', 'brasiliana'], 'Lei è brasiliana.', 'Nacionalidade concorda no feminino.'),
        livre('Escreva em italiano: Eu me chamo Carlos. Tenho vinte anos. Moro no Brasil.', 'Mi chiamo Carlos. Ho venti anni. Abito in Brasile.'),
        lacuna('Mi ___ Ana. (chamo)', ['chiami', 'chiamo', 'chiama'], 'chiamo', 'Com «mi» a forma é «chiamo» (io).'),
        lacuna('Quanti anni ___? (você tem)', ['hai', 'ho', 'ha'], 'hai', 'Para «tu», «avere» é «hai».'),
        lacuna('Abito ___ Napoli. (em)', ['in', 'negli', 'a'], 'a', 'Antes de cidade usa-se «a».'),
        lacuna('Loro ___ tredici anni. (têm)', ['abbiamo', 'hanno', 'ha'], 'hanno', '«Loro hanno»: terceira pessoa do plural de «avere».'),
        lacuna('Come ___ chiama? (o senhor)', ['ti', 'mi', 'si'], 'si', 'Na forma de respeito usa-se «si chiama».'),
        mc('Como se diz «16» em italiano?', ['quindici', 'sedici', 'diciassette'], 'sedici', 'De 11 a 16 as formas terminam em «-dici»: sedici é 16.'),
        mc('Como se diz «portuguesa» (mulher de Portugal)?', ['portoghese', 'portoghesa', 'portoghessa'], 'portoghese', 'Adjetivos em «-e» não mudam de gênero.'),
        mc('Como se diz «Moro nos Estados Unidos»?', ['Abito in Stati Uniti.', 'Abito negli Stati Uniti.', 'Abito a Stati Uniti.'], 'Abito negli Stati Uniti.', 'Países no plural pedem «negli».'),
        mc('Como perguntar o nome a uma senhora desconhecida?', ['Come ti chiami?', 'Come chiama?', 'Come si chiama?'], 'Come si chiama?', 'Com desconhecidos usa-se a forma de respeito, «si chiama».'),
        ordem('Ordene: «Quanti anni hai?»', ['Quanti', 'anni', 'hai?'], 'Quanti anni hai?', 'A idade se pergunta com «avere».'),
        ordem('Ordene: «Lui ha diciannove anni.»', ['Lui', 'ha', 'diciannove', 'anni.'], 'Lui ha diciannove anni.', 'A idade se diz com «avere», não com «essere».'),
        livre('Escreva em italiano: Prazer! Eu me chamo Paula e moro em Roma.', 'Piacere! Mi chiamo Paula e abito a Roma.'),
        livre('Escreva em italiano: Ele é francês e tem quinze anni.', 'Lui è francese e ha quindici anni.'),
      ]),
      producao(5, 'Apresente, em voz alta, um amigo imaginário de outro país: nome, idade, nacionalidade e onde mora.'),
    ]),
  ],
});
