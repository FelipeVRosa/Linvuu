import { aula, sessao, revisao, producao, palavras, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 9, titulo: 'Time, days, months and dates', nivel: 'a1',
  objetivo: 'Ask and tell the time, name the days of the week and the months, say today\'s date and arrange when something happens.',
  nota: 'You can ask «que horas são?», say at what time something happens, name days and months and give a date. Next lesson: the verb «estar», where things are, and the contractions «no» and «na».',
  sessoes: [
    sessao('S1', 'Telling the time', [
      revisao(5, 'Order a coffee and ask the price with «queria» and «quanto custa?». Then count aloud by tens from 10 to 100 and say three prices in reais.'),
      palavras(8, [
        ['que horas são?', 'kee OH-rahz SOW~', 'what time is it?', ''], ['meio-dia', 'MAY-oo DJEE-ah', 'noon, midday', ''], ['meia-noite', 'MAY-ah NOY-tchee', 'midnight', ''], ['e meia', 'ee MAY-ah', 'and a half (half past)', ''],
        ['da manhã, da tarde, da noite', 'dah mah-NYAH~, dah TAR-djee, dah NOY-tchee', 'in the morning, in the afternoon, in the evening or at night (after a time)', ''],
      ]),
      gramatica(12, 'Asking and telling the time', "STEP 1: ask «Que horas são?» (literally «what hours are they?»). For one o'clock the answer uses the singular «é»: «É uma hora.» For every other hour it uses the plural «são»: «São duas horas», «São três horas». Noon and midnight are singular too: «É meio-dia», «É meia-noite». STEP 2: add the minutes with «e» (and): «São três e vinte» (3:20), «São sete e dez» (7:10). For 15 minutes you can say «e quinze» or «e um quarto»; for 30 minutes say «e meia»: «São oito e meia». «Meia» is feminine because it agrees with «hora». STEP 3: for the minutes before the next hour, Brazilians say «para as» (to): «São dez para as cinco» (4:50), and in speech «pra» and «pras» are normal: «São quinze pras três» (2:45), «São cinco pra uma» (12:55, with «pra uma» for one o'clock). STEP 4: to say it is on the dot, add «em ponto»: «São nove em ponto.» STEP 5: after the hour, say which part of the day it is: «São oito da manhã», «São três da tarde», «São nove da noite». The small hours are «da madrugada»: «São três da madrugada». STEP 6: to ask when something happens, say «A que horas…?» and answer with «às» + the hour: «A que horas é a aula? — É às oito.» For one o'clock it is «à uma», for noon «ao meio-dia» and for midnight «à meia-noite». Learn them as ready-made forms (the reason is a contraction of «a» + «as», explained in a later lesson). STEP 7: schedules for trains, flights and television often use the 24-hour clock: «A reunião é às quatorze e trinta» (2:30 p.m.), «O voo é às dezoito horas» (6 p.m.).", {
        tag: 'Time',
        comparacao: "In English you say «It's two o'clock» with «it», and «it's one o'clock» with the same verb. In Portuguese the verb changes: «É uma hora» (singular), «São duas horas» (plural). English says «quarter to three» or «ten to five»; Portuguese says «quinze para as três», «dez para as cinco». And the little «h» in «horas» is silent.",
        tabela: [
          { time: '1:00', you_say: 'É uma hora.', note: 'singular «é»' },
          { time: '2:00', you_say: 'São duas horas.', note: 'plural «são»; «duas» is feminine' },
          { time: '3:15', you_say: 'São três e quinze. / São três e um quarto.', note: 'e + minutes' },
          { time: '4:30', you_say: 'São quatro e meia.', note: '«meia» is feminine' },
          { time: '4:50', you_say: 'São dez para as cinco. / São dez pras cinco.', note: 'minutes before the hour' },
          { time: '8:00 a.m.', you_say: 'São oito da manhã.', note: 'part of the day after the hour' },
          { time: '12:00', you_say: 'É meio-dia.', note: 'singular' },
          { time: 'at 7:00', you_say: 'às sete', note: 'A que horas? — Às sete.' },
        ],
        erros: [['São uma hora.', 'É uma hora.', 'One o\'clock is singular: «é uma hora». From two o\'clock on it is «são».'], ['São quatro e meio.', 'São quatro e meia.', '«Meia» agrees with the feminine «hora».'], ['A aula é às uma hora.', 'A aula é à uma hora.', 'For one o\'clock the form is «à uma», singular.'], ['saying «HOH-rahs» with an English «h»', 'OH-rahz', 'The «h» is always silent in Portuguese.']],
      }),
      producao(5, 'Say these times out loud: 1:00, 2:15, 3:30, 4:50, 6:05, 8:45, 12:00. Then say «São… da manhã», «São… da tarde» and «São… da noite» with a different hour each time.'),
    ]),
    sessao('S2', 'Days of the week and months', [
      revisao(4, 'Say the time right now, then ask «Que horas são?». Say at what time you would like to have lunch: «O almoço é às…»'),
      palavras(6, [
        ['segunda-feira', 'seh-GOO~-dah FAY-rah', 'Monday', ''], ['terça-feira', 'TEHR-sah FAY-rah', 'Tuesday', ''], ['quarta-feira', 'KWAR-tah FAY-rah', 'Wednesday', ''], ['quinta-feira', 'KEE~-tah FAY-rah', 'Thursday', ''], ['sexta-feira', 'SAYS-tah FAY-rah', 'Friday', ''], ['sábado', 'SAH-bah-doo', 'Saturday', ''], ['domingo', 'doh-MEE~-goo', 'Sunday', ''],
        ['janeiro', 'zhah-NAY-roo', 'January', ''], ['fevereiro', 'feh-veh-RAY-roo', 'February', ''], ['março', 'MAR-soo', 'March', ''], ['abril', 'ah-BREE-oo', 'April', ''], ['maio', 'MY-oo', 'May', ''], ['junho', 'ZHOO-nyoo', 'June', ''],
        ['julho', 'ZHOO-lyoo', 'July', ''], ['agosto', 'ah-GOHS-too', 'August', ''], ['setembro', 'seh-TEH~-broo', 'September', ''], ['outubro', 'oh-TOO-broo', 'October', ''], ['novembro', 'noh-VEH~-broo', 'November', ''], ['dezembro', 'deh-ZEH~-broo', 'December', ''],
      ]),
      gramatica(12, 'The days of the week and the months', "STEP 1: the days are: segunda-feira (Monday), terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado (Saturday) and domingo (Sunday). From Monday to Friday the name ends in «-feira», a word that means a weekday; Saturday and Sunday do not have it. The numbers explain the names: «segunda» is «second», «terça» is «third», and so on, with Sunday as the first day of the week in Brazilian calendars. STEP 2: in everyday speech people usually drop «-feira»: «segunda», «terça», «quarta», «quinta», «sexta». In writing you may use the full form with a hyphen, or the short form. STEP 3: days and months are written with a small letter: «segunda-feira», «janeiro», not «Segunda-feira» or «Janeiro». STEP 4: to ask the day say «Que dia é hoje?» and answer «Hoje é quinta.» Note that there is no article after «é»: not «Hoje é a quinta». For the day after, use «amanhã», for the day before «ontem»; with a future event: «Amanhã é sexta.» STEP 5: for something that happens on a day, Brazilians often say the day alone: «A aula é terça.», «A reunião é quinta, às dez.» (The forms «na terça» and «no sábado» also exist; the contraction is explained in the next lesson.) STEP 6: with an article, each day keeps its gender: «a segunda», «a terça» (feminine, because of «feira») and «o sábado», «o domingo» (masculine). STEP 7: the months are used without an article and are said with the day: «dia dez de março». STEP 8: seasons exist in Brazil, but the calendar is upside down compared with the northern hemisphere: Christmas and New Year are in summer (verão), and the coldest months in most of the country are June, July and August (inverno). The other two seasons are outono and primavera.", {
        tag: 'Calendar',
        comparacao: "In English the names of days and months have capital letters (Monday, March). In Portuguese they are in lower case. English says «It's Tuesday» without «the»; Portuguese does the same: «Hoje é terça». English uses «on Monday»; in speech Portuguese often says only «segunda».",
        tabela: [
          { day: 'segunda-feira / segunda', meaning: 'Monday', example: 'Hoje é segunda.' },
          { day: 'terça-feira / terça', meaning: 'Tuesday', example: 'A aula é terça.' },
          { day: 'quarta-feira / quarta', meaning: 'Wednesday', example: 'Amanhã é quarta.' },
          { day: 'quinta-feira / quinta', meaning: 'Thursday', example: 'A reunião é quinta.' },
          { day: 'sexta-feira / sexta', meaning: 'Friday', example: 'Hoje é sexta!' },
          { day: 'sábado', meaning: 'Saturday', example: 'Sábado eu estudo português.' },
          { day: 'domingo', meaning: 'Sunday', example: 'Domingo eu não trabalho.' },
        ],
        erros: [['Segunda-feira, Janeiro', 'segunda-feira, janeiro', 'Days and months are written in lower case in Portuguese.'], ['Hoje é a sexta.', 'Hoje é sexta.', 'There is no article after «é» when you say the day.'], ['sabado', 'sábado', 'The accent marks the stress on the first syllable: SÁ-ba-do.'], ['Hoje é domingo-feira.', 'Hoje é domingo.', 'Only Monday to Friday take «-feira»; Saturday and Sunday do not.']],
      }),
      producao(8, 'Say the days of the week in order, starting on Monday, and then the twelve months. Answer out loud: «Que dia é hoje?» and «Que dia é amanhã?». Then say three days of the week when you work or study, for example «segunda, quarta, sexta», and the date of two holidays you know.'),
    ]),
    sessao('S3', 'Dates and a week in the life of Marina', [
      revisao(4, 'Say the days of the week aloud from Monday to Sunday, then the months from January to June. Tell the time: 3:15, 6:30, 9:50.'),
      palavras(5, [
        ['hoje', 'OH-zhee', 'today', ''], ['amanhã', 'ah-mah-NYAH~', 'tomorrow', ''], ['ontem', 'OH~-teh~ee', 'yesterday', ''], ['o aniversário', 'oo ah-nee-vehr-SAH-ree-oo', 'birthday', ''], ['começa', 'koh-MEH-sah', 'starts, begins', ''], ['termina', 'tehr-MEE-nah', 'ends, finishes', ''],
      ]),
      gramatica(8, 'Saying the date', "STEP 1: to ask the date say «Que dia é hoje?» or «Qual é a data de hoje?». The answer is «Hoje é dia oito de outubro.» or just «Hoje é oito de outubro.» The pattern is dia + number + de + month. STEP 2: use the normal numbers for every day (dois, três, quatro…), except the first, which takes the ordinal: «dia primeiro de maio» (May 1st). STEP 3: write the date with the day first, then the month, then the year: 08/10/2026 is 8 October, not August 10th. In writing you can use numbers («08/10/2026») or words («8 de outubro de 2026»). STEP 4: years are said in full: «dois mil e vinte e seis» (2026). For 2000 say «dois mil». You will not need more than that today. STEP 5: ask about someone's birthday like this: «Quando é seu aniversário?» and answer «Meu aniversário é dia catorze de novembro.» STEP 6: culture note: public holidays are called «feriados». Some are on the same date every year: 1 January (Ano-Novo), 21 April (Tiradentes), 1 May (Dia do Trabalhador), 7 September (Independência do Brasil), 12 October (Nossa Senhora Aparecida), 2 November (Finados), 15 November (Proclamação da República) and 25 December (Natal). Carnival moves each year.", {
        tag: 'Calendar',
        comparacao: "Americans write month first (10/08/2026 is August 10th). In Brazil the order is day, month, year, as in most of the world: 10/08/2026 is 10 August. In English you say «October the eighth» or «October 8»; in Portuguese you always say «dia oito de outubro» with «de» before the month.",
        tabela: [
          { written: '08/10/2026', you_say: 'dia oito de outubro de dois mil e vinte e seis', note: 'day / month / year' },
          { written: '01/05', you_say: 'dia primeiro de maio', note: 'the first uses «primeiro»' },
          { written: '07/09', you_say: 'dia sete de setembro', note: 'Independence Day' },
          { written: '25/12', you_say: 'dia vinte e cinco de dezembro', note: 'Christmas Day' },
          { written: '14/11', you_say: 'dia catorze de novembro', note: 'catorze or quatorze' },
        ],
        erros: [['dia um de maio', 'dia primeiro de maio', 'The first day of the month takes the ordinal «primeiro».'], ['10/08 = October 8th', '10/08 = 10 August', 'Brazilian dates go day / month / year.'], ['dia 8 Outubro', 'dia 8 de outubro', 'You need «de» before the month, and the month is in lower case.'], ['Hoje é em 8 de outubro.', 'Hoje é dia 8 de outubro.', 'After «é» use «dia», without «em».']],
      }),
      texto(8, 'The week of Marina', 'Marina trabalha de segunda a sexta. O trabalho começa às oito da manhã e termina às cinco da tarde. O almoço é meio-dia e meia. A aula de português é terça e quinta, às sete da noite. Sábado e domingo, ela não trabalha. O aniversário do amigo Pedro é dia catorze de novembro.', 'Marina works from Monday to Friday. Work starts at eight in the morning and ends at five in the afternoon. Lunch is at half past twelve. The Portuguese class is on Tuesday and Thursday, at seven in the evening. On Saturday and Sunday she does not work. Her friend Pedro\'s birthday is on 14 November.', [
        ['What time does Marina\'s work start?', 'às oito da manhã'], ['On which days is her Portuguese class?', 'terça e quinta'], ['What time is lunch?', 'meio-dia e meia'], ['Does Marina work on Saturday?', 'Não.'], ['When is Pedro\'s birthday?', 'dia catorze de novembro'],
      ]),
      producao(5, 'Write or say five sentences about your own week with the words you know: when you work or study, what time it starts and ends, and the date of your birthday.'),
    ]),
    sessao('S4', 'Review and practice of lesson 9', [
      revisao(5, 'Tell the time on the hour, half hour and quarter hours. Say the days of the week and the months. Say today\'s date: «Hoje é dia… de…».'),
      exercicios(20, [
        ouvir('São três e meia.', ['São três e meia.', 'São três e quinze.', 'São quatro e meia.'], 'São três e meia.', '«E meia» is half past.'),
        ouvir('É uma hora.', ['É uma hora.', 'São duas horas.', 'É meio-dia.'], 'É uma hora.', 'One o\'clock takes the singular «é».'),
        ouvir('A aula é às oito.', ['A aula é às oito.', 'A aula é às nove.', 'A aula é à uma.'], 'A aula é às oito.', 'Listen for «oito».'),
        ouvir('quinta-feira', ['quinta-feira', 'quarta-feira', 'sexta-feira'], 'quinta-feira', 'Quinta is Thursday: the nasal «in» is in the first syllable.'),
        ouvir('setembro', ['setembro', 'novembro', 'dezembro'], 'setembro', 'The three months have the same ending; check the first syllable.'),
        ouvir('Hoje é dia primeiro de maio.', ['Hoje é dia primeiro de maio.', 'Hoje é dia onze de maio.', 'Hoje é dia primeiro de março.'], 'Hoje é dia primeiro de maio.', 'The first day takes «primeiro».'),
        ditado('Que horas são?', 'Write: Que horas são?'), ditado('Hoje é sexta.', 'Write: Hoje é sexta.'), ditado('São dez para as cinco.', 'Write: São dez para as cinco.'), ditado('Meu aniversário é dia catorze de novembro.', 'Write: Meu aniversário é dia catorze de novembro.'),
        mc('How do you say 4:30?', ['São quatro e meia.', 'São quatro e meio.', 'É quatro e meia.'], 'São quatro e meia.', '«Meia» is feminine to agree with «hora».'),
        mc('How do you say 1:00?', ['É uma hora.', 'São uma hora.', 'São um hora.'], 'É uma hora.', 'One o\'clock is singular.'),
        mc('Which spelling is right?', ['segunda-feira', 'Segunda-Feira', 'segunda-feira-feira'], 'segunda-feira', 'Days are written in lower case.'),
        mc('What does the date 05/03 mean in Brazil?', ['5 March', '3 May', '5 May'], '5 March', 'Brazilian dates go day / month.'),
        mc('How do you say May 1st?', ['dia primeiro de maio', 'dia um de maio', 'dia primeira de maio'], 'dia primeiro de maio', 'The first uses the ordinal «primeiro».'),
        lacuna('Hoje ___ quarta.', ['é', 'são', 'tem'], 'é', 'The singular verb «ser» goes with the day.'),
        lacuna('São duas ___ da tarde.', ['horas', 'hora', 'hores'], 'horas', 'Two or more hours take «horas».'),
        lacuna('A aula é ___ oito da manhã.', ['às', 'à', 'ao'], 'às', 'Before a plural hour use «às».'),
        lacuna('dia vinte ___ março', ['de', 'em', 'a'], 'de', 'The pattern is dia + number + de + month.'),
        ordem('Put in order: «Hoje é dia oito de outubro.»', ['Hoje', 'é', 'dia', 'oito', 'de', 'outubro.'], 'Hoje é dia oito de outubro.', 'dia + number + de + month.'),
        ordem('Put in order: «A que horas é a aula?»', ['A', 'que', 'horas', 'é', 'a', 'aula?'], 'A que horas é a aula?', 'A que horas + é + the thing.'),
        livre('Write in Portuguese: Today is Monday. The class is at 7:30 in the evening.', 'Hoje é segunda. A aula é às sete e meia da noite.'),
        livre('Write in Portuguese: What time is it? It is 3:15 in the afternoon.', 'Que horas são? São três e quinze da tarde.'),
      ]),
      producao(5, 'Give a short summary: what day it is today, what time it is now, when your birthday is and at what time you would like to have breakfast.'),
    ]),
  ],
});
