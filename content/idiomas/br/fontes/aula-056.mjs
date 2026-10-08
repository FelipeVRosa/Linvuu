import { aula, sessao, revisao, producao, palavras, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 56, titulo: 'News and media', nivel: 'b1',
  objetivo: 'Read newspaper headlines and short news items, say where information comes from, report what the news says with the right verbs and understand social media posts and comments in Brazilian Portuguese.',
  nota: 'You can now read headlines, follow a short news text, cite your sources with «segundo» and «de acordo com», and recognize casual abbreviations in posts. Next lesson: culture, festivals and regions of Brazil.',
  sessoes: [
    sessao('S1', 'Headlines and the language of the news', [
      revisao(5, 'Say three sentences in the preterite about yesterday and one with the passive («foi feito», lesson 49). Then say what you do to follow the news.'),
      palavras(8, [
        ['a notícia', 'ah noh-TCHEE-syah', 'news item', ''], ['a manchete', 'ah mah~-SHEH-tchee', 'headline', ''], ['o jornal', 'oo zhor-NAW', 'newspaper', ''], ['a reportagem', 'ah heh-por-TAH-zhay~', 'news report, feature', ''],
        ['o repórter, a repórter', 'oo heh-POR-tehr', 'reporter (the article shows gender)', ''], ['a imprensa', 'ah eem~-PREH~-sah', 'the press, the media', ''], ['o telejornal', 'oo teh-leh-zhor-NAW', 'TV news programme', ''], ['a fonte', 'ah FOH~-tchee', 'source (of information); also fountain', ''],
        ['o leitor, a leitora', 'oo lay-TOR', 'reader', ''], ['ao vivo', 'ow VEE-voo', 'live', ''], ['inaugurar', 'ee-now-goo-RAR', 'to open (officially), to inaugurate', ''], ['aprovar', 'ah-proh-VAR', 'to approve, to pass', ''], ['atingir', 'ah-tchee~-ZHEER', 'to reach, to hit', ''],
      ]),
      gramatica(12, 'Reading headlines: the present for the past, the passive and the future', "STEP 1: Portuguese headlines are short. They drop articles, they use capital letters only for the first word and proper names, and they describe past events in the present tense: «Prefeitura inaugura biblioteca no centro» means «The city opened a library downtown.» When you read a headline, mentally put the verb in the preterite. STEP 2: the passive with «ser» is frequent, often without the helper in the past: «Museu é reaberto após dois anos de reforma» = «O museu foi reaberto…». The participle agrees with the subject: «reaberto», «reaberta», «reabertos», «reabertas». STEP 3: for the future, headlines use «deve» (is expected to), the present, or «vai»: «Chuva forte deve atingir o litoral no fim de semana.» «Feira de livros começa na sexta.» STEP 4: to attribute a statement, headlines use «diz», «afirma», «revela» and a colon or quote: «Diretora do museu diz que visitas dobraram.» STEP 5: in the article itself the verb returns to the preterite («inaugurou», «foi reaberto»). Adverbs of time like «ontem» and «na segunda-feira» go with the preterite.", {
        tag: 'News',
        comparacao: "English headlines also use the present for past events («City opens library»), so this will feel familiar. The difference: in a Portuguese article the full sentences keep the preterite and the imperfect, and the passive participle always agrees in gender and number («foram reabertas»).",
        tabela: [
          { headline: 'Prefeitura inaugura biblioteca no centro', full_sentence: 'A prefeitura inaugurou uma biblioteca no centro.', tense: 'present for the past' },
          { headline: 'Museu é reaberto após dois anos de reforma', full_sentence: 'O museu foi reaberto após dois anos de reforma.', tense: 'passive, present for the past' },
          { headline: 'Festival de cinema reúne 30 mil pessoas', full_sentence: 'O festival de cinema reuniu 30 mil pessoas.', tense: 'present for the past' },
          { headline: 'Chuva forte deve atingir o litoral', full_sentence: 'Espera-se que a chuva forte atinja o litoral.', tense: 'expectation (deve)' },
          { headline: 'Ônibus ganham faixa exclusiva na avenida principal', full_sentence: 'Os ônibus ganharam uma faixa exclusiva na avenida principal.', tense: 'present for the past' },
        ],
        erros: [['Prefeitura inaugura uma biblioteca ontem.', 'A prefeitura inaugurou uma biblioteca ontem.', 'In a full sentence with «ontem», use the preterite. The present is for headlines only.'], ['Atualmente, o jornal está errado. (meaning «actually»)', 'Na verdade, o jornal está errado.', '«Atualmente» means «currently». For «actually» say «na verdade».'], ['O repórter Ana Lima chegou. (Ana is a woman)', 'A repórter Ana Lima chegou.', '«Repórter» has one form for both genders; the article shows who it is.'], ['Li na jornal.', 'Li no jornal.', '«Jornal» is masculine: «no jornal».']],
      }),
      producao(5, 'Write three headlines in Portuguese about invented local news (a new bus line, a concert, a bad storm). Then say each one as a full sentence in the preterite.'),
    ]),
    sessao('S2', 'Sources, reported information and numbers', [
      revisao(4, 'Say aloud: three headlines you wrote, each as a full sentence in the preterite. Then name two sources of information you use.'),
      palavras(6, [
        ['segundo', 'seh-GOO~-doo', 'according to (as a preposition)', ''], ['de acordo com', 'djee ah-KOR-doo koh~', 'according to', ''], ['afirmar', 'ah-feer-MAR', 'to state, to claim', ''], ['divulgar', 'djee-voo-oo-GAR', 'to publish, to make public', ''],
        ['a pesquisa', 'ah pehs-KEE-zah', 'survey, research', ''], ['desmentir', 'dehz-meh~-TCHEER', 'to deny, to refute', ''], ['a notícia falsa', 'ah noh-TCHEE-syah FAW-sah', 'fake news (also «fake news» in English)', ''], ['cerca de', 'SEHR-kah djee', 'about, approximately', ''], ['a metade', 'ah meh-TAH-djee', 'half', ''],
      ]),
      gramatica(12, 'Reporting what the news says: sources, the conditional of doubt and statistics', "STEP 1: cite your source with «segundo» + noun (not followed by «que»): «Segundo o jornal, a loja abre às nove.» or «de acordo com» + noun: «De acordo com a pesquisa, 40% preferem café.» With a verb of saying, «que» is needed: «O jornal afirma que a loja abre às nove.» STEP 2: reporting verbs: «dizer, afirmar, informar, revelar, divulgar, anunciar, explicar, desmentir». Use the preterite for a finished report («O governo divulgou os dados.») and the present when the source is a text you are reading now («O artigo afirma que…»). STEP 3: when information is not confirmed, Brazilian news uses the conditional (futuro do pretérito, lesson 41): «O jogador teria dito que vai sair.» It means «reportedly»: the newspaper does not guarantee it. Compare: «O jogador disse» (he said, certain) and «O jogador teria dito» (he allegedly said). STEP 4: the passive for events: «Dois novos parques foram inaugurados.» «Os dados serão divulgados amanhã.» The participle agrees. STEP 5: statistics. Percentages: «quarenta por cento» (40%). Fractions: «metade», «um terço», «dois terços», «um quarto». Approximation: «cerca de», «aproximadamente», «quase», «mais de». After «mais da metade» you may use the singular or plural verb: «Mais da metade dos alunos respondeu / responderam.»", {
        tag: 'News',
        comparacao: "English marks unconfirmed information with «allegedly», «reportedly» or «is said to». Portuguese often uses the verb form itself: the conditional («teria dito»). That is a reading skill you will see all the time in Brazilian news, but use it carefully when you speak.",
        tabela: [
          { structure: 'segundo / de acordo com + noun', use: 'cite a source', example: 'Segundo a prefeitura, as obras terminam em maio.' },
          { structure: 'verb of saying + que', use: 'report a statement', example: 'A diretora afirmou que as visitas dobraram.' },
          { structure: 'conditional (teria + participle)', use: 'unconfirmed information', example: 'O cantor teria cancelado o show.' },
          { structure: 'ser + participle', use: 'passive', example: 'Os dados foram divulgados ontem.' },
          { structure: 'cerca de / quase / mais de', use: 'approximate numbers', example: 'Cerca de 300 pessoas visitaram o local.' },
        ],
        erros: [['O museu foi reaberta.', 'O museu foi reaberto.', 'In the passive the participle agrees with the subject («museu» is masculine).'], ['As casas foram construído em 1990.', 'As casas foram construídas em 1990.', 'The participle is feminine plural, like «casas».'], ['De acordo ao jornal, a loja abre às nove.', 'De acordo com o jornal, a loja abre às nove.', 'The expression is «de acordo com».'], ['Cerca de 40 por cento de os alunos votaram.', 'Cerca de 40% dos alunos votaram.', '«De» + «os» contract to «dos».']],
      }),
      producao(8, 'Invent a short survey result («uma pesquisa») about the habits of students in your city. Report it in four sentences using «segundo», «de acordo com», «cerca de», «mais da metade» and a passive sentence.'),
    ]),
    sessao('S3', 'Reading a short news text and social posts', [
      revisao(4, 'Say aloud: one sentence with «segundo», one with «de acordo com» and one with «cerca de». Then name two things you can find in the first paragraph of a news item.'),
      palavras(5, [
        ['após', 'ah-POYS', 'after (formal)', ''], ['a reforma', 'ah heh-FOR-mah', 'renovation, reform', ''], ['a procura', 'ah proh-KOO-rah', 'demand, search', ''], ['o comprovante de residência', 'oo koh~-proh-VAH~-tchee djee heh-zee-DEH~-syah', 'proof of address', ''],
        ['a rede social', 'ah HEH-djee soh-SYAW', 'social network', ''], ['o seguidor, a seguidora', 'oo seh-gee-DOR', 'follower', ''], ['a legenda', 'ah leh-ZHEH~-dah', 'caption', ''], ['o comentário', 'oo koh-meh~-TAH-ryoo', 'comment', ''], ['compartilhar', 'koh~-par-tchee-LYAR', 'to share', ''],
      ]),
      gramatica(8, 'How a news item is built, and the language of social posts', "STEP 1: the first paragraph of a news item (called «lide») answers six questions: «quem?» (who), «o quê?» (what), «quando?», «onde?», «como?» and «por quê?». Find them first, then read the details. STEP 2: tenses. The preterite tells the events («reabriu», «visitaram»), the imperfect describes the background («havia», «era»), the present tells facts that remain true («a biblioteca funciona de segunda a sábado») and the future announces what is next («será inaugurada»). STEP 3: quotes. The reporter writes «disse», «afirmou» or «explicou» after a quote, with the subject after the verb: «…», disse a bibliotecária. STEP 4: social posts and comments use shortcuts. They are very common but belong to informal contexts only: «vc» (você), «tb» (também), «pq» (porque or por que), «blz» (beleza, OK), «msg» (mensagem), «kkkk» or «rs» (laughter, written, like «haha»). In a news article, in a formal e-mail or on a form, write the whole word. STEP 5: in Brazil «compartilhar» and «curtir» (to like) are used on social media, and «seguir» means to follow.", {
        tag: 'News',
        comparacao: "English news also starts with the key facts («who, what, when, where»). The main difference is that in Portuguese the attribution often comes after the quote and with the verb first: «…», disse ela. In text messages, Brazilians write «kkkk» (the sound of laughing) where English speakers write «haha» or «lol».",
        tabela: [
          { shortcut: 'vc', full_form: 'você', meaning: 'you' },
          { shortcut: 'tb', full_form: 'também', meaning: 'also' },
          { shortcut: 'pq', full_form: 'porque / por que', meaning: 'because / why' },
          { shortcut: 'blz', full_form: 'beleza', meaning: 'OK, cool' },
          { shortcut: 'kkkk / rs', full_form: '(laughter)', meaning: 'haha' },
        ],
        erros: [['Pq o jornal não publicou? (in an article)', 'Por que o jornal não publicou?', 'Do not use text-message shortcuts in a formal or printed text.'], ['“Muitos vieram”, a bibliotecária disse.', '“Muitos vieram”, disse a bibliotecária.', 'After a quote, news writing normally puts the verb first and the subject after it.'], ['Eu assisti a notícia no jornal.', 'Li a notícia no jornal.', 'You read a news item («ler») in a newspaper and you watch a TV news programme («assistir ao telejornal»).']],
      }),
      texto(8, 'A news item: the library reopens',
        "Biblioteca do bairro reabre com mais de 10 mil livros\n\nOntem, a Biblioteca Comunitária do Jardim das Flores reabriu as portas depois de dois anos de reforma. Segundo a prefeitura, o espaço agora tem salas de estudo, acesso à internet e uma área infantil com contação de histórias aos sábados.\n\nA bibliotecária Helena Prado afirmou que a procura foi grande logo no primeiro dia: cerca de 300 pessoas visitaram o local. “Muitos estudantes vieram procurar um lugar tranquilo para estudar”, disse.\n\nA biblioteca funciona de segunda a sábado, das 9h às 18h. Para fazer o cartão, basta apresentar um documento com foto e um comprovante de residência.",
        "Neighborhood library reopens with more than 10,000 books\n\nYesterday, the Jardim das Flores Community Library reopened its doors after two years of renovation. According to the city administration, the space now has study rooms, internet access and a children's area with storytelling sessions on Saturdays.\n\nThe librarian Helena Prado said that demand was high on the very first day: about 300 people visited the place. “Many students came looking for a quiet place to study”, she said.\n\nThe library is open from Monday to Saturday, from 9 a.m. to 6 p.m. To get a card, you just need to show an ID with a photo and a proof of address.",
        [['When did the library reopen, and after how long?', 'Yesterday, after two years of renovation.'], ['What does the library offer now?', 'Study rooms, internet access and a children\'s area with storytelling on Saturdays.'], ['Who is the source of the information about the new space, and who gave the quote?', 'The city administration («a prefeitura») for the space; the librarian Helena Prado for the quote.'], ['How many people visited on the first day, and why did many students come?', 'About 300 people; students came looking for a quiet place to study.'], ['What do you need to get a library card?', 'A photo ID and a proof of address.']]),
      producao(5, 'Write a short social media post (two sentences and a caption) about an event in your city. Use at least one shortcut (such as «tb» or «kkkk»), then rewrite it in formal Portuguese without shortcuts.'),
    ]),
    sessao('S4', 'Review and practice of lesson 56', [
      revisao(5, 'Say aloud: two headlines with the verb in the present, the same two as full sentences in the preterite, and one sentence with «segundo» and one with «teria dito».'),
      exercicios(20, [
        ouvir('Prefeitura inaugura nova biblioteca.', ['Prefeitura inaugura nova biblioteca.', 'Prefeitura fecha nova biblioteca.', 'Prefeitura inaugura nova escola.'], 'Prefeitura inaugura nova biblioteca.', 'A headline: present tense, no article.'),
        ouvir('Segundo o jornal, a chuva chega no domingo.', ['Segundo o jornal, a chuva chega no domingo.', 'De acordo com o jornal, a chuva chegou no domingo.', 'Segundo o jornal, o sol chega no domingo.'], 'Segundo o jornal, a chuva chega no domingo.', 'Listen for «segundo», «chuva» and «domingo».'),
        ouvir('O museu foi reaberto ontem.', ['O museu foi reaberto ontem.', 'O museu foi reaberta ontem.', 'O museu será reaberto amanhã.'], 'O museu foi reaberto ontem.', 'Passive with «museu» (masculine): «reaberto».'),
        ouvir('Cerca de trinta mil pessoas visitaram o festival.', ['Cerca de trinta mil pessoas visitaram o festival.', 'Cerca de treze mil pessoas visitaram o festival.', 'Cerca de trinta pessoas visitaram o festival.'], 'Cerca de trinta mil pessoas visitaram o festival.', '«Trinta mil» = 30,000.'),
        ouvir('Mais da metade dos alunos respondeu à pesquisa.', ['Mais da metade dos alunos respondeu à pesquisa.', 'Menos da metade dos alunos respondeu à pesquisa.', 'Mais da metade dos professores respondeu à pesquisa.'], 'Mais da metade dos alunos respondeu à pesquisa.', '«Mais da metade» = more than half.'),
        ditado('Chuva forte atinge o litoral.', 'Write: Chuva forte atinge o litoral.'), ditado('De acordo com o jornal, o museu reabriu.', 'Write: De acordo com o jornal, o museu reabriu.'), ditado('Li a notícia no jornal.', 'Write: Li a notícia no jornal.'),
        mc('In a headline, «Festival reúne 30 mil pessoas» describes…', ['a past event told in the present', 'a habit', 'a future plan'], 'a past event told in the present', 'Headlines use the present for the past.'),
        mc('Which is correct?', ['O museu foi reaberto.', 'O museu foi reaberta.', 'O museu foi reabertos.'], 'O museu foi reaberto.', 'The participle agrees with «museu».'),
        mc('What does «atualmente» mean?', ['currently', 'actually', 'finally'], 'currently', '«Actually» is «na verdade».'),
        mc('Which phrase introduces a source?', ['segundo', 'embora', 'portanto'], 'segundo', '«Segundo» = according to.'),
        mc('What does «O ator teria dito que sim» suggest?', ['The report is not confirmed.', 'The actor will say yes.', 'The actor refused.'], 'The report is not confirmed.', 'The conditional signals unconfirmed information.'),
        lacuna('___ o jornal, a loja abre às nove.', ['Segundo', 'Embora', 'Porque'], 'Segundo', '«Segundo» + noun.'), lacuna('As casas foram ___ em 1990. (construir)', ['construídas', 'construído', 'construir'], 'construídas', 'The participle agrees with «casas».'),
        lacuna('De acordo ___ a pesquisa, 40% preferem café.', ['com', 'a', 'de'], 'com', 'The expression is «de acordo com».'), lacuna('Chuva forte ___ atingir o litoral. (is expected to)', ['deve', 'devia', 'devem'], 'deve', '«Deve» + infinitive expresses an expectation.'),
        ordem('Put in order: «Segundo o jornal, a biblioteca reabriu.»', ['Segundo', 'o', 'jornal,', 'a', 'biblioteca', 'reabriu.'], 'Segundo o jornal, a biblioteca reabriu.', 'Source first, then the fact.'),
        ordem('Put in order: «Li a notícia no jornal de hoje.»', ['Li', 'a', 'notícia', 'no', 'jornal', 'de', 'hoje.'], 'Li a notícia no jornal de hoje.', 'Use «ler» for reading.'),
        ordem('Put in order: «Cerca de trinta mil pessoas visitaram o festival.»', ['Cerca', 'de', 'trinta', 'mil', 'pessoas', 'visitaram', 'o', 'festival.'], 'Cerca de trinta mil pessoas visitaram o festival.', 'Approximate number with «cerca de».'),
        livre('Write in Portuguese: According to the newspaper, the museum reopened yesterday.', 'Segundo o jornal, o museu reabriu ontem.'),
        livre('Write in Portuguese: Actually, the news is false.', 'Na verdade, a notícia é falsa.'),
      ]),
      producao(5, 'Present a two-sentence news summary aloud about something from your week. Name the source with «segundo», give one number with «cerca de» and finish with your opinion.'),
    ]),
  ],
});
