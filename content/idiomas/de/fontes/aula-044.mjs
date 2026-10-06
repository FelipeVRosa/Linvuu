import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 44, titulo: 'Trabalho, formulários e e-mails formais', nivel: 'a2',
  objetivo: 'Escrever e-mails formais e informais (saudação, assunto, pedido, desculpa, despedida), preencher formulários e entender anúncios de emprego e de cursos, no nível de escrita de A2.',
  nota: 'Você escreve e-mails e formulários com a forma certa. Próxima aula: moradia, cidade e orientação.',
  sessoes: [
    sessao('S1', 'E-mails formais e informais', [
      revisao(5, 'Escreva 8 frases sobre saúde e consulta: sintomas, instruções e pedidos.'),
      palavras(8, [
        ['Sehr geehrte Damen und Herren', 'zér guéérte dámen unt hérren', 'Prezados senhores', 'Dear Sir or Madam'], ['Mit freundlichen Grüßen', 'mit fróindliçen grüsen', 'Atenciosamente', 'Kind regards'], ['Liebe Grüße', 'líbe grüse', 'Um abraço (informal)', 'Love, best wishes'], ['der Betreff', 'der betréf', 'assunto (e-mail)', 'subject'],
        ['die Anfrage', 'di án-frague', 'consulta, solicitação', 'enquiry'], ['die Antwort', 'di ántvort', 'resposta', 'answer'], ['der Anhang', 'der án-hang', 'anexo', 'attachment'], ['bitte um', 'bíte um', 'peço (por)', 'I ask for'],
      ]),
      gramatica(14, 'Um e-mail, passo a passo', 'PASSO 1: um e-mail formal (a uma empresa, a um desconhecido) abre com «Sehr geehrte Damen und Herren,» (ou «Sehr geehrte Frau Müller,» / «Sehr geehrter Herr Müller,») e fecha com «Mit freundlichen Grüßen» e o nome. Use «Sie» e as formas de cortesia. PASSO 2: um e-mail informal (a um amigo) abre com «Liebe Anna,» ou «Lieber Paul,» e fecha com «Liebe Grüße» ou «Viele Grüße». Use «du». PASSO 3: o ASSUNTO (Betreff) é curto: «Anfrage zum Deutschkurs». PASSO 4: o corpo segue: apresentação, pedido, agradecimento: «Ich möchte mich für den Kurs anmelden. Könnten Sie mir bitte weitere Informationen schicken?» PASSO 5: a FÓRMULA de pedido educado: «Könnten Sie mir bitte …?», «Ich würde gern …», «Ich bitte um …». PASSO 6: a resposta: «Vielen Dank für Ihre Antwort.»', {
        tag: 'Frase',
        comparacao: 'o português escreve «Prezados senhores» e «Atenciosamente», muito parecido. O alemão tem saudações diferentes para formal («Sehr geehrte…») e informal («Liebe/Lieber…»), e usa Sie ou du conforme.',
        tabela: [
          { tipo: 'saudação formal', frase: 'Sehr geehrte Damen und Herren, / Sehr geehrte Frau Müller, / Sehr geehrter Herr Müller,' }, { tipo: 'despedida formal', frase: 'Mit freundlichen Grüßen, (nome)' }, { tipo: 'saudação informal', frase: 'Liebe Anna, / Lieber Paul,' }, { tipo: 'despedida informal', frase: 'Liebe Grüße, / Viele Grüße, / Bis bald,' },
          { tipo: 'pedido educado', frase: 'Könnten Sie mir bitte weitere Informationen schicken?' }, { tipo: 'agradecimento', frase: 'Vielen Dank für Ihre Antwort.' },
        ],
        erros: [['Hallo Herr Müller, …', 'Sehr geehrter Herr Müller, …', 'No e-mail formal, a saudação é «Sehr geehrter/geehrte».'], ['Mit freundliche Grüße', 'Mit freundlichen Grüßen', '«mit» + dativo plural: -en.'], ['Dear Frau Müller', 'Sehr geehrte Frau Müller', 'Em alemão, a saudação é alemã.']],
      }),
      producao(3, 'Escreva em voz alta a abertura e o fecho de um e-mail formal e de um informal.'),
    ]),
    sessao('S2', 'O pedido, a desculpa e o motivo', [
      revisao(5, 'Escreva uma saudação formal e uma informal, com a despedida de cada uma.'),
      palavras(8, [
        ['sich anmelden', 'zich án-mélden', 'inscrever-se', 'to register'], ['sich bewerben', 'zich bevérben', 'candidatar-se', 'to apply'], ['die Bewerbung', 'di bevérbung', 'candidatura', 'application'], ['der Lebenslauf', 'der lében-slauf', 'currículo', 'CV'],
        ['der Termin', 'der termín', 'compromisso, consulta', 'appointment'], ['absagen', 'áp-zaguen', 'cancelar, recusar', 'to cancel'], ['um Entschuldigung bitten', 'um entxúldigung bíten', 'pedir desculpas', 'to apologise'], ['leider', 'láider', 'infelizmente', 'unfortunately'],
      ]),
      gramatica(12, 'Pedir, pedir desculpas, recusar e agradecer por escrito', 'PASSO 1: para PEDIR: «Ich möchte mich für den Kurs anmelden.» «Könnten Sie mir bitte … schicken?» PASSO 2: para PEDIR DESCULPAS: «Es tut mir leid, dass ich nicht kommen kann.» (com «dass» e verbo no fim) ou «Ich bitte um Entschuldigung.» PASSO 3: para DAR O MOTIVO: «Ich kann leider nicht kommen, weil ich krank bin.» PASSO 4: para RECUSAR com educação: «Leider muss ich den Termin absagen.» PASSO 5: para AGRADECER: «Vielen Dank für Ihre Hilfe.» PASSO 6: para se candidatar: «Ich bewerbe mich um die Stelle als Verkäufer» (me candidato à vaga de vendedor): «sich bewerben um» + acusativo.', {
        tag: 'Frase',
        tabela: [
          { funcao: 'pedir inscrição', frase: 'Ich möchte mich für den Kurs anmelden.' }, { funcao: 'pedir desculpas', frase: 'Es tut mir leid, dass ich nicht kommen kann.' }, { funcao: 'dar o motivo', frase: 'Ich kann nicht kommen, weil ich krank bin.' }, { funcao: 'cancelar', frase: 'Leider muss ich den Termin absagen.' },
          { funcao: 'agradecer', frase: 'Vielen Dank für Ihre Hilfe.' }, { funcao: 'candidatar-se', frase: 'Ich bewerbe mich um die Stelle als Verkäufer.' },
        ],
        erros: [['Es tut mir leid, dass ich kann nicht kommen.', 'Es tut mir leid, dass ich nicht kommen kann.', 'Depois de «dass», o verbo vai para o fim.'], ['Ich bewerbe mich für die Stelle.', 'Ich bewerbe mich um die Stelle.', '«sich bewerben um».']],
      }),
      producao(5, 'Diga em voz alta como você pediria informações sobre um curso, pediria desculpas e cancelaria uma consulta.'),
    ]),
    sessao('S3', 'Formulários e anúncios', [
      revisao(5, 'Escreva um pequeno e-mail de 5 linhas pedindo informações sobre um curso.'),
      gramatica(10, 'Preencher formulários e ler anúncios', 'PASSO 1: os formulários pedem: Vorname (prenome), Nachname (sobrenome), Geburtsdatum (data de nascimento), Geburtsort (local de nascimento), Staatsangehörigkeit (nacionalidade), Adresse (endereço), Telefonnummer, E-Mail-Adresse, Beruf. PASSO 2: o endereço alemão: rua e número («Hauptstraße 12»), código postal e cidade («10115 Berlin»). PASSO 3: a data: dia.mês.ano («05.10.1990»). PASSO 4: nos anúncios de emprego, procure: «Wir suchen» (procuramos), «Sie haben» (você tem), «Wir bieten» (oferecemos), «Bewerbung an» (candidatura para). PASSO 5: nos anúncios de curso: «Kursbeginn» (início do curso), «Dauer» (duração), «Preis» (preço), «Anmeldung» (inscrição).', {
        tag: 'Frase',
        tabela: [
          { campo: 'Vorname / Nachname', pt: 'prenome / sobrenome' }, { campo: 'Geburtsdatum', pt: 'data de nascimento (05.10.1990)' }, { campo: 'Staatsangehörigkeit', pt: 'nacionalidade' }, { campo: 'Adresse', pt: 'endereço (Hauptstraße 12, 10115 Berlin)' },
          { campo: 'Wir suchen … / Wir bieten …', pt: 'procuramos … / oferecemos …' }, { campo: 'Kursbeginn / Dauer / Preis', pt: 'início / duração / preço' },
        ],
      }),
      dialogo(10, 'Eine Anmeldung / Uma inscrição', 'Um candidato se inscreve num curso por telefone.', [
        ['Sekretärin', 'Sprachschule Berlin, guten Tag!', 'Escola de idiomas Berlim, bom dia!'], ['Tom', 'Guten Tag! Ich möchte mich für den Deutschkurs anmelden.', 'Bom dia! Eu gostaria de me inscrever no curso de alemão.'], ['Sekretärin', 'Gern. Wie ist Ihr Name, bitte?', 'Com prazer. Qual é o seu nome, por favor?'],
        ['Tom', 'Tom Weber. Ich schreibe: W-E-B-E-R.', 'Tom Weber. Eu soletro: W-E-B-E-R.'], ['Sekretärin', 'Und Ihre Adresse?', 'E o seu endereço?'], ['Tom', 'Hauptstraße 12, 10115 Berlin.', 'Hauptstraße 12, 10115 Berlim.'],
        ['Sekretärin', 'Der Kurs beginnt am ersten Montag im Oktober. Die Dauer ist drei Monate.', 'O curso começa na primeira segunda-feira de outubro. A duração é de três meses.'], ['Tom', 'Was kostet der Kurs?', 'Quanto custa o curso?'], ['Sekretärin', 'Er kostet vierhundert Euro. Schicken Sie uns bitte die Anmeldung per E-Mail.', 'Custa quatrocentos euros. Envie-nos a inscrição por e-mail, por favor.'], ['Tom', 'Vielen Dank! Ich schicke sie heute noch.', 'Muito obrigado! Envio hoje mesmo.'],
      ]),
      producao(5, 'Preencha em voz alta um formulário com os seus dados, em alemão, e faça uma inscrição por telefone.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um e-mail formal de 50 palavras pedindo informações sobre um curso, com saudação, pedido, agradecimento e despedida.'),
      exercicios(20, [
        mc('A saudação de um e-mail formal a uma senhora é:', ['Sehr geehrte Frau Müller,', 'Hallo Frau Müller,', 'Liebe Frau Müller,'], 'Sehr geehrte Frau Müller,', 'Formal.'), mc('A despedida formal é:', ['Mit freundlichen Grüßen', 'Bis bald', 'Tschüs'], 'Mit freundlichen Grüßen', 'Formal.'), mc('A despedida informal é:', ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Hochachtungsvoll'], 'Liebe Grüße', 'Informal.'),
        lacuna('Könnten Sie mir bitte weitere Informationen ___? (schicken)', ['schicken', 'schicke', 'geschickt'], 'schicken', 'Modal + infinitivo no fim.'), lacuna('Ich möchte ___ für den Kurs anmelden.', ['mich', 'mir', 'sich'], 'mich', 'Reflexivo: «sich anmelden».'), lacuna('Es tut mir leid, ___ ich nicht kommen kann.', ['dass', 'weil', 'ob'], 'dass', 'Que: «dass».'),
        lacuna('Ich bewerbe mich ___ die Stelle.', ['um', 'für', 'auf'], 'um', '«sich bewerben um».'), lacuna('Ich kann nicht kommen, ___ ich krank bin.', ['weil', 'dass', 'ob'], 'weil', 'Motivo: «weil».'), mc('«Der Betreff» é:', ['o assunto do e-mail', 'o anexo', 'a resposta'], 'o assunto do e-mail', 'Linha do assunto.'),
        mc('«Wir suchen …» num anúncio de emprego significa:', ['procuramos …', 'oferecemos …', 'pedimos …'], 'procuramos …', 'A empresa procura alguém.'), ordem('Ordene: «Muito obrigado pela sua resposta.»', ['Vielen', 'Dank', 'für', 'Ihre', 'Antwort'], 'Vielen Dank für Ihre Antwort.', 'Agradecimento formal.'), ouvir('Ich möchte mich für den Deutschkurs anmelden', ['Ich möchte mich für den Deutschkurs anmelden', 'Ich habe mich für den Deutschkurs angemeldet', 'Ich melde mich ab'], 'Ich möchte mich für den Deutschkurs anmelden', 'sich anmelden.'),
        ditado('Sehr geehrte Damen und Herren', 'Saudação formal.'), livre('Escreva 5 frases de um e-mail formal: saudação, apresentação, pedido, agradecimento e despedida.', 'Sehr geehrte Damen und Herren, ich möchte mich für den Deutschkurs anmelden. Könnten Sie mir bitte weitere Informationen schicken? Vielen Dank für Ihre Antwort. Mit freundlichen Grüßen, Tom Weber'),
      ]),
      producao(5, 'Grave-se lendo o seu e-mail formal em voz alta, com pronúncia clara.'),
    ]),
  ],
});
