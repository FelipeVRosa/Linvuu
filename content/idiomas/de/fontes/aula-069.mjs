import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 69, titulo: 'Vida profissional: currículo, candidatura e entrevista', nivel: 'b1',
  objetivo: 'Descrever a sua formação e experiência, escrever uma candidatura e um currículo no padrão alemão e responder às perguntas mais comuns de uma entrevista de emprego.',
  nota: 'Você se candidata a um emprego e vai à entrevista. Próxima aula: mídia, sociedade e meio ambiente.',
  sessoes: [
    sessao('S1', 'Formação e experiência', [
      revisao(5, 'Escreva um texto de opinião de 6 frases com os conectores que você aprendeu.'),
      palavras(8, [
        ['der Lebenslauf', 'der lé-bens-lauf', 'currículo', 'CV'], ['die Ausbildung', 'di áus-bil-dung', 'formação profissional', 'training'], ['das Studium', 'das xtú-dium', 'estudos universitários', 'studies'], ['der Abschluss', 'der áp-xlus', 'diploma, conclusão', 'degree'],
        ['die Berufserfahrung', 'di be-rúfs-er-fá-rung', 'experiência profissional', 'work experience'], ['die Kenntnisse', 'di ként-ni-se', 'conhecimentos', 'skills'], ['das Praktikum', 'das prák-ti-kum', 'estágio', 'internship'], ['die Stärke', 'di xtér-ke', 'ponto forte', 'strength'],
      ]),
      gramatica(14, 'Falar da sua formação e experiência, passo a passo', 'PASSO 1: o LEBENSLAUF alemão é cronológico e objetivo: dados pessoais, formação, experiência, conhecimentos (línguas, informática), interesses. PASSO 2: use o PERFEKT na conversa e o PRÄTERITUM em textos: «Ich habe Betriebswirtschaft studiert», «Ich studierte Betriebswirtschaft.» PASSO 3: para períodos: «von 2015 bis 2019», «seit 2020» (+ presente): «Seit 2020 arbeite ich als Verkäufer.» PASSO 4: para quanto tempo: «ein Jahr lang», «zwei Jahre lang». PASSO 5: para o resultado: «Ich habe die Ausbildung mit gutem Erfolg abgeschlossen» (concluí a formação com bom resultado). PASSO 6: conhecimentos: «Ich spreche fließend Portugiesisch und gut Deutsch» (aula 63).', {
        tag: 'Frase',
        tabela: [
          { funcao: 'formação', frase: 'Ich habe von 2015 bis 2019 Betriebswirtschaft studiert.' }, { funcao: 'experiência', frase: 'Seit 2020 arbeite ich als Verkäufer bei einer Firma.' }, { funcao: 'estágio', frase: 'Ich habe ein Praktikum bei einer Bank gemacht.' }, { funcao: 'resultado', frase: 'Ich habe die Ausbildung mit gutem Erfolg abgeschlossen.' }, { funcao: 'línguas', frase: 'Ich spreche fließend Portugiesisch und gut Deutsch.' },
        ],
        erros: [['Ich arbeite seit 2020 als Verkäufer gewesen.', 'Seit 2020 arbeite ich als Verkäufer.', '«seit» + presente.'], ['Ich habe Betriebswirtschaft studieren.', 'Ich habe Betriebswirtschaft studiert.', 'Perfekt: Partizip II no fim.'], ['Ich bin Verkäufer arbeite.', 'Ich arbeite als Verkäufer.', '«arbeiten als» + profissão.']],
      }),
      producao(3, 'Descreva em voz alta a sua formação e experiência em 6 frases, com datas.'),
    ]),
    sessao('S2', 'Candidatura e carta', [
      revisao(5, 'Escreva 6 frases sobre a sua formação, com datas.'),
      palavras(8, [
        ['die Bewerbung', 'di be-vér-bung', 'candidatura', 'application'], ['die Stelle', 'di xté-le', 'vaga', 'job'], ['das Anschreiben', 'das án-xrái-ben', 'carta de apresentação', 'cover letter'], ['die Stellenanzeige', 'di xté-len-án-tsái-gue', 'anúncio de emprego', 'job ad'],
        ['die Voraussetzung', 'di fôr-áus-zé-tsung', 'requisito', 'requirement'], ['die Unterlagen', 'di ún-ter-lá-guen', 'documentos', 'documents'], ['der Termin', 'der ter-mín', 'compromisso, entrevista marcada', 'appointment'], ['die Zusage / die Absage', 'di tsú-zá-gue / di áp-zá-gue', 'resposta positiva / negativa', 'acceptance / rejection'],
      ]),
      gramatica(12, 'A carta de candidatura, passo a passo', 'PASSO 1: a carta (Anschreiben) segue um padrão formal: saudação («Sehr geehrte Damen und Herren,»), referência («Ich bewerbe mich auf Ihre Stellenanzeige als …»), apresentação, motivo, qualificações, disponibilidade, despedida («Mit freundlichen Grüßen»). PASSO 2: para se candidatar, diga: «Ich bewerbe mich um die Stelle als …» (sich bewerben um + Akk) ou «auf die Stelle» (também usado). PASSO 3: para o MOTIVO: «Ich interessiere mich für diese Stelle, weil …» PASSO 4: para as QUALIFICAÇÕES: «Ich bringe Erfahrung in … mit», «Ich verfüge über gute Kenntnisse in …» PASSO 5: para a DISPONIBILIDADE: «Ich stehe Ihnen ab dem 1. Mai zur Verfügung.» PASSO 6: para fechar: «Über eine Einladung zu einem Vorstellungsgespräch würde ich mich sehr freuen» (Konjunktiv II de cortesia).', {
        tag: 'Frase',
        tabela: [
          { parte: 'referência', frase: 'Ich bewerbe mich auf Ihre Stellenanzeige als Verkäufer.' }, { parte: 'motivo', frase: 'Ich interessiere mich für diese Stelle, weil ich gern mit Kunden arbeite.' }, { parte: 'qualificações', frase: 'Ich verfüge über zwei Jahre Berufserfahrung im Verkauf.' }, { parte: 'disponibilidade', frase: 'Ich stehe Ihnen ab dem 1. Mai zur Verfügung.' }, { parte: 'fecho', frase: 'Über eine Einladung zu einem Vorstellungsgespräch würde ich mich sehr freuen.' },
        ],
        erros: [['Ich bewerbe mich für die Stelle.', 'Ich bewerbe mich um die Stelle.', '«sich bewerben um».'], ['Ich würde mich freuen über eine Einladung.', 'Über eine Einladung würde ich mich sehr freuen.', 'Posição natural da preposição de ênfase.']],
      }),
      producao(5, 'Escreva em voz alta uma carta de candidatura curta (6 frases): referência, motivo, qualificações e fecho.'),
    ]),
    sessao('S3', 'A entrevista de emprego', [
      revisao(5, 'Escreva as 6 partes de uma carta de candidatura com uma frase cada.'),
      gramatica(10, 'Responder às perguntas da entrevista', 'PASSO 1: as perguntas mais comuns: «Erzählen Sie etwas über sich» (fale um pouco de você), «Warum möchten Sie bei uns arbeiten?», «Was sind Ihre Stärken und Schwächen?», «Wo sehen Sie sich in fünf Jahren?», «Haben Sie Fragen an uns?». PASSO 2: para falar de si: presente + Perfekt: «Ich bin 30 Jahre alt und habe Betriebswirtschaft studiert.» PASSO 3: para pontos fortes: «Ich bin zuverlässig, teamfähig und lerne schnell.» PASSO 4: para pontos fracos, de forma honesta: «Manchmal bin ich zu perfektionistisch.» PASSO 5: para o futuro: «In fünf Jahren möchte ich Verantwortung übernehmen.» PASSO 6: para fazer perguntas: «Wie sieht ein typischer Arbeitstag aus?», «Gibt es Weiterbildungsmöglichkeiten?»', {
        tag: 'Frase',
        tabela: [
          { pergunta: 'Erzählen Sie etwas über sich.', resposta: 'Ich bin 30 Jahre alt und habe Betriebswirtschaft studiert.' }, { pergunta: 'Warum möchten Sie bei uns arbeiten?', resposta: 'Weil ich Ihre Firma interessant finde und gern im Team arbeite.' }, { pergunta: 'Was sind Ihre Stärken?', resposta: 'Ich bin zuverlässig, teamfähig und lerne schnell.' }, { pergunta: 'Was sind Ihre Schwächen?', resposta: 'Manchmal bin ich zu perfektionistisch.' }, { pergunta: 'Wo sehen Sie sich in fünf Jahren?', resposta: 'Ich möchte Verantwortung übernehmen.' },
        ],
      }),
      dialogo(10, 'Das Vorstellungsgespräch / A entrevista', 'Uma candidata é entrevistada por uma chefe de recursos humanos.', [
        ['Chefin', 'Guten Tag, Frau Lopes. Erzählen Sie bitte etwas über sich.', 'Bom dia, senhora Lopes. Fale um pouco de si, por favor.'], ['Lea', 'Ich bin 30 Jahre alt, komme aus Brasilien und habe Betriebswirtschaft studiert.', 'Tenho 30 anos, venho do Brasil e estudei administração.'], ['Chefin', 'Warum möchten Sie bei uns arbeiten?', 'Por que a senhora quer trabalhar conosco?'],
        ['Lea', 'Weil ich Ihre Firma interessant finde und gern im Team arbeite.', 'Porque acho a sua empresa interessante e gosto de trabalhar em equipe.'], ['Chefin', 'Was sind Ihre Stärken?', 'Quais são os seus pontos fortes?'], ['Lea', 'Ich bin zuverlässig, teamfähig und lerne schnell.', 'Sou confiável, bom em equipe e aprendo rápido.'],
        ['Chefin', 'Und Ihre Schwächen?', 'E os seus pontos fracos?'], ['Lea', 'Manchmal bin ich zu perfektionistisch, aber ich arbeite daran.', 'Às vezes sou perfeccionista demais, mas estou trabalhando nisso.'], ['Chefin', 'Haben Sie noch Fragen an uns?', 'Tem mais alguma pergunta para nós?'], ['Lea', 'Ja, gibt es Weiterbildungsmöglichkeiten?', 'Sim, há possibilidades de formação continuada?'],
      ]),
      producao(5, 'Responda em voz alta às cinco perguntas mais comuns de uma entrevista, como se fosse você.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma resposta para cada pergunta de entrevista, de memória.'),
      exercicios(20, [
        lacuna('Seit 2020 ___ ich als Verkäufer. (arbeiten)', ['arbeite', 'arbeitete', 'habe gearbeitet'], 'arbeite', '«seit» + presente.'), lacuna('Ich habe von 2015 bis 2019 Betriebswirtschaft ___. (studieren)', ['studiert', 'gestudiert', 'studieren'], 'studiert', 'Perfekt: sem ge-.'), lacuna('Ich bewerbe mich ___ die Stelle.', ['um', 'für', 'an'], 'um', 'sich bewerben um.'),
        lacuna('Ich ___ über gute Kenntnisse in Englisch. (verfügen)', ['verfüge', 'verfügst', 'verfügt'], 'verfüge', 'verfügen über + Akk.'), lacuna('Ich interessiere mich für diese Stelle, ___ ich gern mit Kunden arbeite.', ['weil', 'ob', 'wenn'], 'weil', 'Motivo.'), lacuna('Über eine Einladung ___ ich mich freuen. (würde)', ['würde', 'werde', 'wurde'], 'würde', 'Cortesia: Konjunktiv II.'),
        mc('O Lebenslauf alemão é:', ['cronológico e objetivo', 'narrativo e longo', 'só de interesses'], 'cronológico e objetivo', 'Dados, formação, experiência.'), mc('«Das Anschreiben» é:', ['a carta de apresentação', 'o currículo', 'a entrevista'], 'a carta de apresentação', 'Carta da candidatura.'), mc('«Die Absage» é:', ['uma resposta negativa', 'uma resposta positiva', 'um anúncio'], 'uma resposta negativa', 'Absage × Zusage.'),
        ordem('Ordene: «Eu me candidato à vaga de vendedor.»', ['Ich', 'bewerbe', 'mich', 'um', 'die', 'Stelle', 'als', 'Verkäufer'], 'Ich bewerbe mich um die Stelle als Verkäufer.', 'sich bewerben um.'), ouvir('Manchmal bin ich zu perfektionistisch', ['Manchmal bin ich zu perfektionistisch', 'Immer bin ich perfekt', 'Manchmal arbeite ich nicht'], 'Manchmal bin ich zu perfektionistisch', 'Ponto fraco.'), ditado('Ich bin zuverlässig, teamfähig und lerne schnell', 'Pontos fortes.'),
        livre('Escreva 5 frases de uma candidatura: referência, formação, experiência, ponto forte e fecho.', 'Ich bewerbe mich um die Stelle als Verkäufer. Ich habe Betriebswirtschaft studiert. Seit 2020 arbeite ich im Verkauf. Ich bin zuverlässig und lerne schnell. Über eine Einladung würde ich mich sehr freuen.'),
      ]),
      producao(5, 'Grave-se fazendo uma entrevista de emprego completa em alemão.'),
    ]),
  ],
});
