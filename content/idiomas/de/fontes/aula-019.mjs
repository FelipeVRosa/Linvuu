import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 19, titulo: 'Viagens e transporte', nivel: 'a1',
  objetivo: 'Dizer como você se desloca, comprar um bilhete, entender horários de trem e reservar um quarto de hotel.',
  nota: 'Você viaja em alemão: transporte, bilhete, horário e hotel. Próxima aula: revisão e simulado do A1.',
  sessoes: [
    sessao('S1', 'Meios de transporte', [
      revisao(5, 'Escreva 5 frases sobre o seu tempo livre com «gern» e «lieber».'),
      palavras(10, [
        ['das Verkehrsmittel', 'das ferkérs-mítel', 'meio de transporte', 'means of transport'], ['der Zug', 'der tsuk', 'trem', 'train'], ['der Bus', 'der bus', 'ônibus', 'bus'], ['die U-Bahn', 'di ú-ban', 'metrô', 'underground'], ['die Straßenbahn', 'di xtrásen-ban', 'bonde, VLT', 'tram'],
        ['das Flugzeug', 'das flúk-tsoik', 'avião', 'plane'], ['das Schiff', 'das xif', 'navio', 'ship'], ['das Motorrad', 'das mótor-rat', 'moto', 'motorbike'], ['der Flughafen', 'der flúk-hafen', 'aeroporto', 'airport'], ['zu Fuß', 'tsu fus', 'a pé', 'on foot'],
      ]),
      gramatica(10, 'Como você vai: «mit» + meio de transporte', 'PASSO 1: para dizer o MEIO, use «mit» + artigo: «mit dem Zug», «mit dem Bus», «mit dem Auto», «mit dem Fahrrad», «mit dem Flugzeug», «mit dem Taxi». Para palavras «die»: «mit der U-Bahn», «mit der Straßenbahn». Aprenda como blocos prontos (o porquê do «dem» e do «der» vem no A2). PASSO 2: «a pé» é «zu Fuß», sem artigo. PASSO 3: pergunte «Wie kommst du zur Arbeit?» ou «Wie fährst du?» PASSO 4: «fahren» troca a por ä no «du» e no «er» (du fährst, er fährt); «fliegen» e «gehen» são regulares no presente. PASSO 5: o DESTINO: «nach» com cidades e países («nach Berlin», «nach Brasilien»); «zu» com lugares e pessoas («zum Bahnhof», «zur Schule»).', {
        tag: 'Preposições',
        tabela: [
          { meio: 'der Zug', frase: 'Ich fahre mit dem Zug.' }, { meio: 'der Bus', frase: 'Er fährt mit dem Bus zur Arbeit.' }, { meio: 'das Auto / das Fahrrad / das Taxi', frase: 'Wir fahren mit dem Auto.' }, { meio: 'das Flugzeug', frase: 'Sie fliegt mit dem Flugzeug nach Berlin.' },
          { meio: 'die U-Bahn / die Straßenbahn', frase: 'Ich fahre mit der U-Bahn.' }, { meio: 'a pé', frase: 'Ich gehe zu Fuß.' },
        ],
        erros: [['Ich fahre mit der Bus.', 'Ich fahre mit dem Bus.', '«Bus» é «der»: depois de «mit», «dem».'], ['Ich fahre mit Zug.', 'Ich fahre mit dem Zug.', 'Falta o artigo.'], ['Ich gehe mit Fuß.', 'Ich gehe zu Fuß.', '«zu Fuß» é uma expressão fixa.']],
      }),
      producao(5, 'Diga como você vai ao trabalho, à escola e a outra cidade: «Ich fahre mit … / Ich gehe zu Fuß.»'),
    ]),
    sessao('S2', 'Na estação: bilhete e horário', [
      revisao(5, 'Escreva 5 frases com «mit dem» ou «mit der» e um meio de transporte.'),
      palavras(8, [
        ['die Fahrkarte', 'di fár-karte', 'bilhete (de transporte)', 'ticket'], ['einfach', 'áinfarr', 'só ida', 'one way'], ['hin und zurück', 'hin unt tsurük', 'ida e volta', 'return'], ['der Fahrplan', 'der fár-plan', 'quadro de horários', 'timetable'],
        ['die Abfahrt', 'di áp-fart', 'partida', 'departure'], ['die Ankunft', 'di án-kunft', 'chegada', 'arrival'], ['das Gleis', 'das glais', 'plataforma', 'platform'], ['die Verspätung', 'di fer-xpétung', 'atraso', 'delay'],
      ]),
      gramatica(12, 'Comprar um bilhete e ler o horário, passo a passo', 'PASSO 1: peça com «bitte»: «Eine Fahrkarte nach München, bitte.» PASSO 2: o funcionário pergunta «Einfach oder hin und zurück?» (só ida ou ida e volta). PASSO 3: pergunte o horário: «Wann fährt der Zug nach München?» e responda com «abfahren» (separável): «Der Zug fährt um vierzehn Uhr fünfzehn ab.» Chegada: «Er kommt um sechzehn Uhr an.» PASSO 4: horários de transporte usam o relógio de 24 horas, como na aula 6. PASSO 5: «Von Gleis 5» (da plataforma 5). PASSO 6: duração: «Wie lange dauert die Fahrt?» — «Drei Stunden.» PASSO 7: baldeação: «Sie müssen in Frankfurt umsteigen.» (separável).', {
        tag: 'Tempo',
        tabela: [
          { situacao: 'pedir o bilhete', frase: 'Eine Fahrkarte nach München, bitte.' }, { situacao: 'ida ou ida e volta', frase: 'Einfach oder hin und zurück?' }, { situacao: 'perguntar o horário', frase: 'Wann fährt der Zug nach München?' }, { situacao: 'responder', frase: 'Der Zug fährt um 14.15 Uhr ab.' },
          { situacao: 'a plataforma', frase: 'Er fährt von Gleis 5.' }, { situacao: 'a duração', frase: 'Die Fahrt dauert drei Stunden.' }, { situacao: 'a baldeação', frase: 'Sie müssen in Frankfurt umsteigen.' },
        ],
        erros: [['Der Zug abfährt um acht Uhr.', 'Der Zug fährt um acht Uhr ab.', '«abfahren» é separável.'], ['Eine Fahrkarte für München, bitte.', 'Eine Fahrkarte nach München, bitte.', 'Cidade de destino: «nach».']],
      }),
      producao(5, 'Compre um bilhete em voz alta: peça, escolha ida ou ida e volta, pergunte o horário e a plataforma.'),
    ]),
    sessao('S3', 'No hotel', [
      revisao(5, 'Escreva um diálogo de 6 falas comprando um bilhete de trem.'),
      palavras(5, [['das Einzelzimmer', 'das áintsel-tsímer', 'quarto de solteiro', 'single room'], ['das Doppelzimmer', 'das dópel-tsímer', 'quarto duplo', 'double room'], ['das Frühstück', 'das frü-xtük', 'café da manhã', 'breakfast'], ['reservieren', 'rezervíren', 'reservar', 'to reserve'], ['der Koffer', 'der kófer', 'mala', 'suitcase']]),
      gramatica(10, 'Reservar um quarto, passo a passo', 'PASSO 1: pergunte se há vaga: «Haben Sie ein Einzelzimmer frei?» ou diga: «Ich möchte ein Zimmer reservieren.» PASSO 2: diga por quantas noites: «Für zwei Nächte» («Nacht» faz o plural «Nächte»). PASSO 3: pergunte o preço: «Was kostet das Zimmer pro Nacht?» PASSO 4: pergunte o café da manhã: «Ist das Frühstück dabei?» PASSO 5: o pagamento: «Kann ich mit Karte zahlen?» PASSO 6: no check-out: «Ich möchte bitte bezahlen.»', {
        tag: 'Frase',
        tabela: [
          { situacao: 'pedir', frase: 'Haben Sie ein Einzelzimmer frei?' }, { situacao: 'noites', frase: 'Für zwei Nächte, bitte.' }, { situacao: 'preço', frase: 'Was kostet das Zimmer pro Nacht?' }, { situacao: 'café da manhã', frase: 'Ist das Frühstück dabei?' }, { situacao: 'pagar', frase: 'Kann ich mit Karte zahlen?' },
        ],
      }),
      dialogo(10, 'Im Hotel / No hotel', 'Um hóspede chega a um hotel.', [
        ['Rezeptionistin', 'Guten Abend! Kann ich Ihnen helfen?', 'Boa noite! Posso ajudar?'], ['Tom', 'Guten Abend! Haben Sie ein Einzelzimmer frei?', 'Boa noite! A senhora tem um quarto de solteiro livre?'], ['Rezeptionistin', 'Ja. Für wie viele Nächte?', 'Sim. Para quantas noites?'],
        ['Tom', 'Für zwei Nächte, bitte.', 'Para duas noites, por favor.'], ['Rezeptionistin', 'Das Zimmer kostet achtzig Euro pro Nacht.', 'O quarto custa oitenta euros por noite.'], ['Tom', 'Ist das Frühstück dabei?', 'O café da manhã está incluído?'],
        ['Rezeptionistin', 'Ja, das Frühstück ist von sieben bis zehn Uhr.', 'Sim, o café da manhã é das sete às dez horas.'], ['Tom', 'Sehr gut. Kann ich mit Karte zahlen?', 'Ótimo. Posso pagar com cartão?'], ['Rezeptionistin', 'Natürlich. Hier ist Ihr Schlüssel. Das Zimmer ist im zweiten Stock.', 'Claro. Aqui está a sua chave. O quarto é no segundo andar.'], ['Tom', 'Danke schön. Gute Nacht!', 'Muito obrigado. Boa noite!'],
      ]),
    ]),
    sessao('S4', 'Leitura e prática', [
      revisao(5, 'Escreva um pequeno texto de 4 frases sobre uma viagem que você fez ou quer fazer.'),
      texto(5, 'Eine Reise nach Berlin / Uma viagem a Berlim', 'Ich fahre am Freitag mit dem Zug nach Berlin. Der Zug fährt um acht Uhr ab und kommt um zwölf Uhr an. Die Fahrt dauert vier Stunden. In Berlin schlafe ich im Hotel. Ein Einzelzimmer kostet achtzig Euro pro Nacht. Am Sonntag fliege ich zurück.',
        'Na sexta-feira vou de trem a Berlim. O trem parte às oito horas e chega às doze. A viagem dura quatro horas. Em Berlim durmo no hotel. Um quarto de solteiro custa oitenta euros por noite. No domingo volto de avião.',
        [['Wie fährt der Autor nach Berlin?', 'Mit dem Zug'], ['Wie lange dauert die Fahrt?', 'Vier Stunden'], ['Wie kommt er zurück?', 'Mit dem Flugzeug']]),
      exercicios(15, [
        lacuna('Ich fahre ___ Zug. (de)', ['mit dem', 'mit der', 'mit den'], 'mit dem', '«Zug» é «der»: mit dem.'), lacuna('Ich fahre ___ U-Bahn. (de)', ['mit der', 'mit dem', 'mit die'], 'mit der', '«U-Bahn» é «die»: mit der.'), lacuna('Ich gehe ___ Fuß. (a pé)', ['zu', 'mit', 'nach'], 'zu', '«zu Fuß».'),
        lacuna('Ich fahre ___ Berlin. (para)', ['nach', 'zu', 'in'], 'nach', 'Cidade: «nach».'), lacuna('Ich fahre ___ Bahnhof. (até a)', ['zum', 'nach', 'zur'], 'zum', '«Bahnhof» é «der»: zum.'), lacuna('Der Zug ___ um acht Uhr ___. (partir)', ['fährt … ab', 'abfährt … –', 'fahren … ab'], 'fährt … ab', 'Separável: o prefixo vai para o fim.'),
        mc('«Einfach oder hin und zurück?» pergunta:', ['só ida ou ida e volta', 'dia ou noite', 'caro ou barato'], 'só ida ou ida e volta', 'Tipo de bilhete.'), mc('«Das Gleis» é:', ['a plataforma', 'o bilhete', 'o atraso'], 'a plataforma', 'Gleis 5 = plataforma 5.'), mc('«Für zwei Nächte» significa:', ['por duas noites', 'duas vezes por noite', 'em duas noites diferentes'], 'por duas noites', 'Nacht → Nächte.'),
        ordem('Ordene: «Uma passagem para Munique, por favor.»', ['Eine', 'Fahrkarte', 'nach', 'München', 'bitte'], 'Eine Fahrkarte nach München, bitte.', 'Destino com «nach».'), ordem('Ordene: «O trem parte às oito.»', ['Der', 'Zug', 'fährt', 'um', 'acht', 'Uhr', 'ab'], 'Der Zug fährt um acht Uhr ab.', 'Separável: «ab» no fim.'),
        ouvir('Haben Sie ein Einzelzimmer frei?', ['Haben Sie ein Einzelzimmer frei?', 'Haben Sie ein Doppelzimmer frei?', 'Ich möchte ein Zimmer reservieren.'], 'Haben Sie ein Einzelzimmer frei?', 'Einzelzimmer = quarto de solteiro.'), ditado('Wann fährt der Zug nach München', 'Pergunta pelo horário.'),
        livre('Escreva 5 frases sobre uma viagem: como vai, para onde, o horário, o bilhete e o hotel.', 'Ich fahre mit dem Zug nach Berlin. Der Zug fährt um acht Uhr ab. Ich kaufe eine Fahrkarte. Das Zimmer kostet achtzig Euro. Ich bleibe zwei Nächte.'),
      ]),
      producao(5, 'Grave-se planejando uma viagem: transporte, bilhete, horário e hotel.'),
    ]),
  ],
});
