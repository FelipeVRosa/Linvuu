import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 9, titulo: 'Horas, dias e meses', nivel: 'a1',
  objetivo: 'Perguntar e dizer as horas (inclusive «e un quarto», «e mezza» e «meno»), marcar encontros com «a che ora», usar os dias da semana e os meses, e dizer a data e o aniversário.',
  nota: 'Você diz que horas são, marca um horário, diz o dia e a data. Próxima aula: as preposições simples e articuladas (di, a, da, in, con, su, per, tra).',
  sessoes: [
    sessao('S1', 'Que horas são?', [
      revisao(5, 'Retome a aula 8: peça em voz alta dois itens no bar com «vorrei» e diga três preços, como «un euro e venti» e «ventotto euro».'),
      palavras(8, [
        ['Che ora è?', 'kê ôra é', 'que horas são?', ''], ['È l\'una', 'é lúna', 'é uma hora', ''], ['Sono le tre', 'sôno le trê', 'são três horas', ''], ['mezzogiorno', 'meddzodjôrno', 'meio-dia', ''], ['mezzanotte', 'meddzanótte', 'meia-noite', ''], ['e un quarto', 'e um kuárto', 'e quinze (um quarto)', ''], ['e mezza', 'e méddza', 'e meia', ''], ['meno un quarto', 'mêno um kuárto', 'quinze para (falta um quarto)', ''],
      ]),
      gramatica(12, 'Dizer as horas', 'PASSO 1: para perguntar a hora, use «Che ora è?» ou «Che ore sono?» (as duas formas existem). PASSO 2: para a uma hora, o verbo é singular: «È l\'una.» Para as outras, plural com o artigo «le»: «Sono le due», «Sono le tre». Também é singular «È mezzogiorno» e «È mezzanotte». Diferente do português, o italiano não diz «horas»: «sono le tre» e não «sono le tre ore». PASSO 3: até a meia hora, soma-se com «e»: «Sono le tre e dieci», «Sono le tre e venti». PASSO 4: «un quarto» é quinze minutos, e «mezza» (ou «mezzo») é trinta: «Sono le tre e un quarto» (3h15), «Sono le tre e mezza» (3h30). PASSO 5: depois da meia hora, o italiano subtrai com «meno» da hora seguinte: «Sono le quattro meno venti» (3h40), «Sono le quattro meno un quarto» (3h45), «Sono le quattro meno cinque» (3h55). PASSO 6: para perguntar a que horas acontece algo: «A che ora?» A resposta usa «a» + «le» (que se fundem em «alle»): «Alle otto», «Alle otto e mezza». Para a uma hora: «All\'una». Para meio-dia e meia-noite: «A mezzogiorno», «A mezzanotte». PASSO 7: nos horários de trem, de programas e de cinema, usam-se as 24 horas: «Sono le quattordici e trenta». Na conversa, usa-se as 12 horas com «di mattina», «del pomeriggio», «di sera», «di notte»: «Sono le otto di sera».', {
        tag: 'Horas',
        comparacao: 'o português também diz «é uma hora» e «são três horas», mas inclui a palavra «horas». O italiano usa só o artigo: «sono le tre». E o português diz «três e quinze», enquanto o italiano usa «un quarto» e «mezza»; depois da meia hora, o português diz «faltam vinte para as quatro», e o italiano diz «le quattro meno venti».',
        tabela: [
          { hora: '1:00', italiano: 'È l\'una.' }, { hora: '2:00', italiano: 'Sono le due.' }, { hora: '3:15', italiano: 'Sono le tre e un quarto.' }, { hora: '4:30', italiano: 'Sono le quattro e mezza.' }, { hora: '5:45', italiano: 'Sono le sei meno un quarto.' },
          { hora: '7:10', italiano: 'Sono le sette e dieci.' }, { hora: '8:50', italiano: 'Sono le nove meno dieci.' }, { hora: '12:00', italiano: 'È mezzogiorno.' }, { hora: '0:00', italiano: 'È mezzanotte.' }, { hora: '15:30', italiano: 'Sono le quindici e trenta.' },
        ],
        erros: [['Sono l\'una.', 'È l\'una.', 'Uma hora é singular: «è l\'una».'], ['È le tre.', 'Sono le tre.', 'Mais de uma hora é plural: «sono le».'], ['Sono le tre ore.', 'Sono le tre.', 'O italiano não diz «ore» ao informar a hora.'], ['Alle l\'una.', 'All\'una.', 'Para a uma hora, «a» + «l\'» vira «all\'».']],
      }),
      producao(5, 'Diga em voz alta a hora em seis momentos: 1:00, 4:15, 6:30, 8:45, 12:00 e 22:10. Depois pergunte: «Che ora è?» e responda.'),
    ]),
    sessao('S2', 'Os dias da semana', [
      revisao(4, 'Diga a hora de cabeça em cinco momentos do dia. Como se diz 7:45 com «meno»?'),
      palavras(6, [
        ['lunedì', 'lunedí', 'segunda-feira', ''], ['martedì', 'martedí', 'terça-feira', ''], ['mercoledì', 'merkoledí', 'quarta-feira', ''], ['giovedì', 'djovedí', 'quinta-feira', ''], ['venerdì', 'venerdí', 'sexta-feira', ''], ['sabato', 'sábato', 'sábado', ''], ['domenica', 'domênika', 'domingo', ''],
      ]),
      gramatica(12, 'Dias da semana e expressões de tempo', 'PASSO 1: os dias se escrevem com minúscula: «lunedì», «martedì». De segunda a sexta têm acento grave no final, que marca a sílaba forte. «Sabato» e «domenica» não têm acento escrito. PASSO 2: a semana começa na segunda-feira. «Domenica» é feminino; os outros dias são masculinos. PASSO 3: sem artigo, o dia é um dia específico (o próximo ou este): «Lunedì lavoro» (na segunda que vem, ou nesta). Com artigo, é hábito, toda segunda: «Il lunedì lavoro» (às segundas trabalho). Também se diz «ogni lunedì». PASSO 4: para o domingo, o artigo é feminino: «la domenica». PASSO 5: para perguntar o dia: «Che giorno è oggi?» A resposta: «Oggi è lunedì.» PASSO 6: expressões úteis: «oggi» (hoje), «domani» (amanhã), «ieri» (ontem), «adesso» ou «ora» (agora), «stamattina» (esta manhã), «stasera» (hoje à noite), «stanotte» (esta noite), «il fine settimana» (o fim de semana). PASSO 7: partes do dia: «la mattina», «il pomeriggio», «la sera», «la notte». Para o hábito, «la sera studio»; para hoje, «stasera studio». PASSO 8: no fim da mensagem, «A lunedì!» (até segunda!), «A domani!» (até amanhã!).', {
        tag: 'Tempo',
        comparacao: 'o português escreve «segunda-feira» com hífen e termina em «feira», e o italiano usa o nome do dia com o final em «-dì» (do latim «dies»). Em português escrevemos «às segundas» ou «toda segunda»; em italiano, «il lunedì» ou «ogni lunedì».',
        tabela: [
          { expressao: 'lunedì', significado: 'neste ou no próximo lunedì', exemplo: 'Lunedì lavoro.' }, { expressao: 'il lunedì', significado: 'toda segunda (hábito)', exemplo: 'Il lunedì lavoro.' }, { expressao: 'ogni lunedì', significado: 'toda segunda', exemplo: 'Ogni lunedì studio.' }, { expressao: 'la domenica', significado: 'aos domingos', exemplo: 'La domenica dormo.' },
          { expressao: 'oggi', significado: 'hoje', exemplo: 'Oggi è giovedì.' }, { expressao: 'domani', significado: 'amanhã', exemplo: 'Domani lavoro.' }, { expressao: 'stasera', significado: 'esta noite', exemplo: 'Stasera studio.' }, { expressao: 'il fine settimana', significado: 'o fim de semana', exemplo: 'Il fine settimana dormo.' },
        ],
        erros: [['lunedi (sem acento)', 'lunedì', 'O acento grave marca a sílaba forte final.'], ['Lunedì, Martedì (com maiúscula)', 'lunedì, martedì', 'Em italiano, os dias se escrevem com minúscula.'], ['Oggi è il lunedì.', 'Oggi è lunedì.', 'Dia específico não leva artigo.'], ['Studio lunedì ogni settimana.', 'Studio il lunedì.', 'Para hábito, use artigo («il lunedì») ou «ogni lunedì».']],
      }),
      dialogo(8, 'Quando studiamo? / Quando estudamos?', 'Marco e Giulia combinam um horário.', [
        ['Marco', 'Giulia, quando studiamo italiano insieme?', 'Giulia, quando estudamos italiano juntos?'], ['Giulia', 'Il lunedì lavoro, e il martedì ho lezione.', 'Às segundas trabalho, e às terças tenho aula.'], ['Marco', 'E giovedì?', 'E quinta?'], ['Giulia', 'Giovedì va bene. A che ora?', 'Quinta está bem. A que horas?'], ['Marco', 'Alle sei e mezza di sera, al bar?', 'Às seis e meia da tarde, no bar?'], ['Giulia', 'Perfetto! A giovedì!', 'Perfeito! Até quinta!'],
      ]),
    ]),
    sessao('S3', 'Os meses e a data', [
      revisao(4, 'Diga os sete dias da semana em ordem, de memória. Quais são os seus dias de trabalho ou de estudo?'),
      palavras(5, [
        ['gennaio', 'djennáio', 'janeiro', ''], ['febbraio', 'febbráio', 'fevereiro', ''], ['marzo', 'mártso', 'março', ''], ['aprile', 'apríle', 'abril', ''], ['maggio', 'máddjo', 'maio', ''], ['giugno', 'djúnho', 'junho', ''], ['luglio', 'lúlho', 'julho', ''], ['agosto', 'agôsto', 'agosto', ''], ['settembre', 'settêmbre', 'setembro', ''], ['ottobre', 'ottôbre', 'outubro', ''], ['novembre', 'novêmbre', 'novembro', ''], ['dicembre', 'ditchêmbre', 'dezembro', ''],
      ]),
      gramatica(8, 'Meses, data, aniversário e estações', 'PASSO 1: os meses se escrevem com minúscula e são masculinos: «gennaio», «febbraio». PASSO 2: para dizer «em março», use «a marzo» ou «in marzo» (as duas formas são usadas): «A marzo studio a Roma», «In luglio fa caldo». PASSO 3: para perguntar o dia: «Che giorno è oggi?» A resposta tem artigo e número: «Oggi è il 7 ottobre.» Com dia da semana: «Oggi è lunedì 7 ottobre.» PASSO 4: o dia 1 usa o ordinal: «il primo maggio». Do dia 2 em diante, o número: «il due maggio», «il quindici maggio». PASSO 5: o aniversário é «il compleanno»: «Quando è il tuo compleanno? — Il 15 maggio.» PASSO 6: as estações são «la primavera», «l\'estate», «l\'autunno» e «l\'inverno». Para «no verão», diz-se «in estate»; para «no inverno», «in inverno». PASSO 7: o hemisfério muda as estações: lembre-se de que em julho é inverno no Brasil e verão na Itália.', {
        tag: 'Data',
        comparacao: 'em português a data é «7 de outubro», e o italiano diz «il 7 ottobre», sem «de». O artigo antes do número é obrigatório. Os nomes dos meses são parecidos com os nossos e também se escrevem com minúscula.',
        tabela: [
          { pergunta: 'Che giorno è oggi?', resposta: 'Oggi è il 7 ottobre.' }, { pergunta: 'Quando è il tuo compleanno?', resposta: 'È il 15 maggio.' }, { pergunta: 'In che mese siamo?', resposta: 'Siamo a ottobre.' }, { pergunta: 'Che giorno è domani?', resposta: 'Domani è martedì.' },
        ],
        erros: [['Oggi è 7 ottobre.', 'Oggi è il 7 ottobre.', 'A data pede artigo antes do número.'], ['il uno maggio', 'il primo maggio', 'O primeiro dia do mês usa o ordinal.'], ['Ottobre, Marzo (com maiúscula)', 'ottobre, marzo', 'Os meses se escrevem com minúscula.'], ['Il mio compleanno è in 15 maggio.', 'Il mio compleanno è il 15 maggio.', 'Para a data, artigo e sem «in».']],
      }),
      texto(8, 'Il compleanno di Marco', 'Il compleanno di Marco è il 15 maggio. Il 15 maggio è un giovedì. Marco ha ventuno anni. La festa è alle otto di sera, a casa sua. Ci sono venti amici e tutti mangiano la torta.', 'O aniversário de Marco é no dia 15 de maio. O dia 15 de maio é uma quinta-feira. Marco faz vinte e um anos. A festa é às oito da noite, na casa dele. Há vinte amigos e todos comem bolo.', [['Quando è il compleanno di Marco?', 'È il 15 maggio.'], ['Quanti anni ha Marco?', 'Ha ventuno anni.'], ['A che ora è la festa?', 'Alle otto di sera.'], ['Quanti amici ci sono?', 'Ci sono venti amici.']]),
      producao(5, 'Diga em voz alta a data de hoje, o dia da semana e o seu aniversário. Depois diga em que meses você trabalha ou estuda.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 9', [
      revisao(5, 'Diga em voz alta a sua semana: três dias de trabalho com horários, e o seu aniversário.'),
      exercicios(20, [
        ouvir('Sono le quattro e mezza', ['Sono le quattro e mezza', 'Sono le quattro e un quarto', 'Sono le cinque meno un quarto'], 'Sono le quattro e mezza', 'Ouça «e mezza».'), ouvir('È l\'una', ['È l\'una', 'Sono le due', 'È mezzogiorno'], 'È l\'una', 'Ouça o singular «è».'), ouvir('Il compleanno è il 15 maggio', ['Il compleanno è il 15 maggio', 'Il compleanno è il 5 maggio', 'Il compleanno è il 15 marzo'], 'Il compleanno è il 15 maggio', 'Ouça «quindici» e «maggio».'),
        ditado('Che ora è', 'Escreva: Che ora è.'), ditado('Alle otto di sera', 'Escreva: Alle otto di sera.'), ditado('Oggi è lunedì', 'Escreva: Oggi è lunedì.'),
        mc('Como se diz 7:45?', ['Sono le otto meno un quarto.', 'Sono le sette e un quarto.', 'Sono le otto e un quarto.'], 'Sono le otto meno un quarto.', 'Depois da meia hora, subtrai-se da hora seguinte.'), mc('Qual forma está certa para uma hora?', ['È l\'una.', 'Sono l\'una.', 'È le una.'], 'È l\'una.', 'Uma hora é singular.'), mc('Como se diz «às segundas trabalho»?', ['Il lunedì lavoro.', 'Lunedì lavoro.', 'Nel lunedì lavoro.'], 'Il lunedì lavoro.', 'Hábito: artigo.'), mc('Como se diz «7 de outubro»?', ['il 7 ottobre', '7 di ottobre', 'il sette di ottobre'], 'il 7 ottobre', 'Artigo + número + mês.'),
        lacuna('___ le tre. (são)', ['Sono', 'È', 'Siamo'], 'Sono', 'Mais de uma hora: «sono».'), lacuna('A che ___ ? (hora)', ['ora', 'ore', 'orario'], 'ora', '«A che ora?»'), lacuna('Oggi ___ venerdì. (é)', ['è', 'sono', 'ha'], 'è', 'Dia da semana com «è».'), lacuna('Alle sei e ___ . (meia)', ['mezza', 'mezzo giorno', 'quarto'], 'mezza', '«E mezza».'),
        ordem('Ordene: «Alle otto di sera.»', ['Alle', 'otto', 'di', 'sera'], 'Alle otto di sera.', 'Hora com parte do dia.'), ordem('Ordene: «Oggi è il 7 ottobre.»', ['Oggi', 'è', 'il', '7', 'ottobre'], 'Oggi è il 7 ottobre.', 'Data com artigo.'),
        livre('Escreva em italiano: Que horas são? São duas e quinze. Hoje é quinta-feira, 12 de março.', 'Che ora è? Sono le due e un quarto. Oggi è giovedì 12 marzo.'),
        lacuna('È ___. (meio-dia)', ['mezzanotte', 'mezzogiorno', 'mezza'], 'mezzogiorno', '«Mezzogiorno» é meio-dia; «mezzanotte» é meia-noite.'),
        lacuna('Sono le sette e un ___. (quinze minutos)', ['quarto', 'quarta', 'quattro'], 'quarto', 'Quinze minutos se diz «un quarto».'),
        lacuna('Il ___ maggio è festa. (primeiro)', ['uno', 'primo', 'prima'], 'primo', 'O dia 1 usa o ordinal: «il primo maggio».'),
        lacuna('___ domenica dormo molto. (aos domingos)', ['La', 'Il', 'Un'], 'La', '«Domenica» é feminino; o artigo indica hábito.'),
        lacuna('Alle sei ___ sera. (da)', ['a', 'di', 'in'], 'di', 'Diz-se «di sera» para indicar o período do dia.'),
        mc('Como se diz 1h30?', ['Sono l\'una e mezza.', 'È l\'una e mezza.', 'Sono le una e mezza.'], 'È l\'una e mezza.', 'A uma hora usa o verbo no singular: «è l\'una».'),
        mc('Qual dia vem depois de «martedì»?', ['giovedì', 'lunedì', 'mercoledì'], 'mercoledì', 'Terça (martedì), quarta (mercoledì).'),
        mc('Como se diz «em março»?', ['in marzo', 'da marzo', 'su marzo'], 'in marzo', 'Para meses usa-se «a» ou «in»; aqui só «in» está entre as opções.'),
        mc('Como se escreve «segunda-feira» no meio da frase?', ['lunedì', 'Lunedì', 'lunedi'], 'lunedì', 'Dias da semana vão em minúscula e levam acento grave.'),
        ordem('Ordene: «Sono le sei meno un quarto.»', ['Sono', 'le', 'sei', 'meno', 'un', 'quarto.'], 'Sono le sei meno un quarto.', 'Para 5h45 diz-se «sei meno un quarto».'),
        ordem('Ordene: «Il compleanno di Marco è il primo maggio.»', ['Il', 'compleanno', 'di', 'Marco', 'è', 'il', 'primo', 'maggio.'], 'Il compleanno di Marco è il primo maggio.', 'Datas levam «il» e o dia 1 usa «primo».'),
        livre('Escreva em italiano: Às segundas trabalho; aos domingos durmo.', 'Il lunedì lavoro; la domenica dormo.'),
        livre('Escreva em italiano: Meu aniversário é em 3 de abril.', 'Il mio compleanno è il 3 aprile.'),
      ]),
      producao(5, 'Marque em voz alta um encontro com um amigo: dia, hora e lugar. Depois confirme: «Allora, giovedì alle sei e mezza al bar. A giovedì!»'),
    ]),
  ],
});
