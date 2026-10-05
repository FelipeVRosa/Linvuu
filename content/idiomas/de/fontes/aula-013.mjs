import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 13, titulo: 'Imperativo: pedir, mandar e instruir', nivel: 'a1',
  objetivo: 'Formar o imperativo com «Sie», «wir», «du» e «ihr», incluir verbos separáveis e irregulares e entender as instruções de aulas, livros e provas.',
  nota: 'Você pede, dá instruções e entende os comandos de qualquer prova de alemão. Próxima aula: os pronomes no acusativo e a negação.',
  sessoes: [
    sessao('S1', 'O imperativo formal: Sie', [
      revisao(5, 'Escreva as formas de «müssen», «wollen» e «dürfen» no «ich» e no «du».'),
      palavras(8, [
        ['Platz nehmen', 'plats némen', 'sentar-se', 'to take a seat'], ['öffnen', 'öfnen', 'abrir', 'to open'], ['schließen', 'xlísen', 'fechar', 'to close'], ['zuhören', 'tsú-hörren', 'escutar', 'to listen'],
        ['lesen', 'lézen', 'ler', 'to read'], ['schreiben', 'xráiben', 'escrever', 'to write'], ['die Seite', 'di záite', 'página', 'page'], ['bitte schön', 'bíte xön', 'por favor / aqui está', 'here you are'],
      ]),
      gramatica(14, 'Imperativo com «Sie» e com «wir», passo a passo', 'O imperativo serve para pedir, dar instruções, convidar e mandar. Começamos pela forma de CORTESIA, que você ouve em lojas, escolas e provas. PASSO 1: tome o infinitivo («öffnen») e coloque «Sie» depois: «Öffnen Sie das Buch.» Ou seja, o verbo vem em PRIMEIRO lugar e «Sie» logo atrás. PASSO 2: verbos separáveis: o prefixo vai para o FIM: «Hören Sie zu.», «Stehen Sie auf.» PASSO 3: «bitte» deixa o pedido educado e pode ir em vários lugares: «Öffnen Sie bitte das Buch.» PASSO 4: a forma «wir» convida a fazer algo juntos (vamos): «Gehen wir!», «Fangen wir an!» PASSO 5: para negar, use «nicht» no fim: «Rauchen Sie nicht!»', {
        tag: 'Verbos',
        comparacao: 'o português muda o final do verbo («abra», «escute»). Em alemão o imperativo formal é igual ao infinitivo; o que o diferencia é a ORDEM: verbo primeiro, «Sie» depois.',
        tabela: [
          { infinitivo: 'öffnen', imperativo: 'Öffnen Sie das Buch.', pt: 'Abra o livro.' }, { infinitivo: 'lesen', imperativo: 'Lesen Sie den Text.', pt: 'Leia o texto.' }, { infinitivo: 'zuhören (separável)', imperativo: 'Hören Sie bitte zu.', pt: 'Escute, por favor.' },
          { infinitivo: 'aufstehen (separável)', imperativo: 'Stehen Sie auf.', pt: 'Levante-se.' }, { infinitivo: 'Platz nehmen', imperativo: 'Nehmen Sie bitte Platz.', pt: 'Sente-se, por favor.' }, { infinitivo: 'gehen (wir)', imperativo: 'Gehen wir!', pt: 'Vamos!' }, { infinitivo: 'rauchen (negativo)', imperativo: 'Rauchen Sie nicht!', pt: 'Não fume!' },
        ],
        erros: [['Sie öffnen das Buch!', 'Öffnen Sie das Buch!', 'No imperativo o verbo vem ANTES de «Sie».'], ['Aufstehen Sie.', 'Stehen Sie auf.', 'O prefixo separável vai para o fim.']],
      }),
      producao(3, 'Dê 5 instruções em voz alta como se fosse um professor: «Öffnen Sie …, Lesen Sie …, Schreiben Sie …»'),
    ]),
    sessao('S2', 'O imperativo informal: du e ihr', [
      revisao(5, 'Escreva 5 imperativos com «Sie», dois deles com verbo separável.'),
      palavras(8, [
        ['ruhig', 'rúiç', 'calmo, quieto', 'calm'], ['leise', 'láize', 'baixinho, em silêncio', 'quiet'], ['schnell', 'xnel', 'rápido', 'quick'], ['vorsichtig', 'fôrziçtiç', 'cuidadoso', 'careful'],
        ['die Geduld', 'di guedúlt', 'paciência', 'patience'], ['die Angst', 'di angst', 'medo', 'fear'], ['mal', 'mal', '(suaviza o pedido) só, um instante', 'just'], ['sofort', 'zofórt', 'imediatamente', 'at once'],
      ]),
      gramatica(12, 'Imperativo com «du» e «ihr», passo a passo', 'Com amigos, família e crianças você usa «du» (um) ou «ihr» (vários). PASSO 1, «du»: pegue o «du» do presente, tire o «du» e o «-st»: «du kommst» → «Komm!» PASSO 2: se o verbo troca e por i ou ie no presente, o imperativo MANTÉM a troca: «du nimmst» → «Nimm!», «du sprichst» → «Sprich!», «du liest» → «Lies!», «du gibst» → «Gib!», «du hilfst» → «Hilf!» PASSO 3: se o verbo tem trema (a → ä), o imperativo NÃO tem trema: «du fährst» → «Fahr!» PASSO 4: raiz em -t ou -d ganha -e: «Warte!» PASSO 5, «ihr»: é igual ao presente sem o «ihr»: «Kommt!», «Wartet!» PASSO 6: «sein» é irregular: «Sei ruhig!» (du), «Seid ruhig!» (ihr), «Seien Sie ruhig!» (Sie). Separáveis: «Steh auf!», «Steht auf!»', {
        tag: 'Verbos',
        tabela: [
          { infinitivo: 'kommen', du: 'Komm!', ihr: 'Kommt!', Sie: 'Kommen Sie!' }, { infinitivo: 'warten', du: 'Warte!', ihr: 'Wartet!', Sie: 'Warten Sie!' }, { infinitivo: 'nehmen', du: 'Nimm!', ihr: 'Nehmt!', Sie: 'Nehmen Sie!' },
          { infinitivo: 'sprechen', du: 'Sprich!', ihr: 'Sprecht!', Sie: 'Sprechen Sie!' }, { infinitivo: 'lesen', du: 'Lies!', ihr: 'Lest!', Sie: 'Lesen Sie!' }, { infinitivo: 'geben', du: 'Gib!', ihr: 'Gebt!', Sie: 'Geben Sie!' },
          { infinitivo: 'helfen', du: 'Hilf!', ihr: 'Helft!', Sie: 'Helfen Sie!' }, { infinitivo: 'fahren', du: 'Fahr!', ihr: 'Fahrt!', Sie: 'Fahren Sie!' }, { infinitivo: 'aufstehen', du: 'Steh auf!', ihr: 'Steht auf!', Sie: 'Stehen Sie auf!' }, { infinitivo: 'sein', du: 'Sei ruhig!', ihr: 'Seid ruhig!', Sie: 'Seien Sie ruhig!' },
        ],
        erros: [['Du komm!', 'Komm!', 'No imperativo informal não se usa «du».'], ['Fähr langsam!', 'Fahr langsam!', 'O imperativo não tem trema (a → ä só no presente).'], ['Nehm das Buch!', 'Nimm das Buch!', '«nehmen» mantém a troca e → i.']],
      }),
      producao(5, 'Dê 6 ordens a um amigo e 3 a um grupo: «Komm …! Warte …! Nimm …! Seid …!»'),
    ]),
    sessao('S3', 'As instruções do dia a dia e das provas', [
      revisao(5, 'Escreva o imperativo de «lesen», «nehmen» e «sprechen» em «du», «ihr» e «Sie».'),
      palavras(8, [
        ['ankreuzen', 'án-kroitsen', 'marcar com X', 'to tick'], ['ergänzen', 'ergéntsen', 'completar', 'to complete'], ['markieren', 'markíren', 'marcar, sublinhar', 'to mark'], ['ordnen', 'órdnen', 'ordenar', 'to put in order'],
        ['beantworten', 'beántvorten', 'responder às perguntas', 'to answer'], ['das Beispiel', 'das báispil', 'exemplo', 'example'], ['richtig', 'ríçtiç', 'certo', 'right'], ['falsch', 'falx', 'errado', 'wrong'],
      ]),
      gramatica(8, 'As frases das provas e dos livros', 'Os livros e as provas de alemão, do A1 ao B1, dão as instruções no imperativo formal. Aprender estas frases agora evita que você erre uma questão só por não entender o que pedem. Todas seguem o que você viu: verbo primeiro, «Sie» depois, prefixo separável no fim.', {
        tag: 'Verbos',
        tabela: [
          { frase: 'Lesen Sie den Text.', pt: 'Leia o texto.' }, { frase: 'Hören Sie das Gespräch.', pt: 'Ouça a conversa.' }, { frase: 'Kreuzen Sie an: richtig oder falsch.', pt: 'Marque com X: certo ou errado.' }, { frase: 'Ergänzen Sie die Sätze.', pt: 'Complete as frases.' },
          { frase: 'Beantworten Sie die Fragen.', pt: 'Responda às perguntas.' }, { frase: 'Schreiben Sie eine E-Mail.', pt: 'Escreva um e-mail.' }, { frase: 'Ordnen Sie die Wörter.', pt: 'Ordene as palavras.' }, { frase: 'Markieren Sie das Beispiel.', pt: 'Marque o exemplo.' },
        ],
      }),
      dialogo(7, 'Im Unterricht / Na aula', 'A professora dá instruções à turma.', [
        ['Lehrerin', 'Guten Morgen! Nehmen Sie bitte Platz.', 'Bom dia! Sentem-se, por favor.'], ['Lehrerin', 'Öffnen Sie das Buch auf Seite zehn.', 'Abram o livro na página dez.'], ['Tom', 'Wie bitte? Können Sie das wiederholen?', 'Como? A senhora pode repetir?'],
        ['Lehrerin', 'Natürlich. Öffnen Sie das Buch auf Seite zehn und lesen Sie den Text.', 'Claro. Abram o livro na página dez e leiam o texto.'], ['Anna', 'Müssen wir auch die Fragen beantworten?', 'Também precisamos responder às perguntas?'],
        ['Lehrerin', 'Ja, beantworten Sie bitte alle Fragen. Seien Sie bitte leise!', 'Sim, respondam todas as perguntas, por favor. Fiquem em silêncio, por favor!'], ['Tom', 'Okay. Wir fangen an.', 'Certo. Vamos começar.'],
      ]),
      producao(2, 'Leia em voz alta 5 instruções da tabela e faça o que elas pedem.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva uma instrução para cada pessoa: «du», «ihr» e «Sie».'),
      exercicios(20, [
        mc('Imperativo formal de «öffnen»:', ['Öffnen Sie!', 'Sie öffnen!', 'Öffne Sie!'], 'Öffnen Sie!', 'Verbo primeiro, «Sie» depois.'), mc('Imperativo de «aufstehen» (Sie):', ['Stehen Sie auf!', 'Aufstehen Sie!', 'Sie stehen auf!'], 'Stehen Sie auf!', 'Prefixo separável no fim.'), mc('Imperativo de «kommen» (du):', ['Komm!', 'Kommst!', 'Komme du!'], 'Komm!', 'Sem «du» e sem «-st».'),
        mc('Imperativo de «nehmen» (du):', ['Nimm!', 'Nehm!', 'Nehme!'], 'Nimm!', 'Mantém a troca e → i.'), mc('Imperativo de «lesen» (du):', ['Lies!', 'Les!', 'Lese!'], 'Lies!', 'Mantém a troca e → ie.'), mc('Imperativo de «fahren» (du):', ['Fahr!', 'Fähr!', 'Fahre!'], 'Fahr!', 'Sem trema no imperativo.'),
        lacuna('___ langsam! (warten, du)', ['Warte', 'Wart', 'Wartest'], 'Warte', 'Raiz em -t ganha -e.'), lacuna('___ ruhig! (sein, du)', ['Sei', 'Bist', 'Sein'], 'Sei', 'Imperativo irregular.'), lacuna('___ leise! (sein, ihr)', ['Seid', 'Sei', 'Seien'], 'Seid', '«ihr» → seid.'),
        lacuna('___ Sie bitte Platz! (nehmen)', ['Nehmen', 'Nimm', 'Nehmt'], 'Nehmen', 'Forma de cortesia.'), ordem('Ordene: «Escute, por favor.»', ['Hören', 'Sie', 'bitte', 'zu'], 'Hören Sie bitte zu.', 'Separável: «zu» vai para o fim.'), ordem('Ordene: «Vamos começar!»', ['Fangen', 'wir', 'an'], 'Fangen wir an!', 'wir-imperativo: verbo primeiro.'),
        mc('«Kreuzen Sie an: richtig oder falsch» pede que você:', ['marque com X', 'escreva uma carta', 'ouça um áudio'], 'marque com X', 'ankreuzen = marcar com X.'), ouvir('Öffnen Sie das Buch auf Seite zehn', ['Öffnen Sie das Buch auf Seite zehn', 'Schließen Sie das Buch', 'Lesen Sie den Text'], 'Öffnen Sie das Buch auf Seite zehn', 'öffnen = abrir.'),
        ditado('Beantworten Sie bitte alle Fragen', 'beantworten = responder.'), livre('Escreva 5 instruções: duas com «Sie», duas com «du» e uma com «ihr».', 'Öffnen Sie das Buch. Lesen Sie den Text. Komm bitte! Nimm das Buch! Seid bitte leise!'),
      ]),
      producao(5, 'Grave-se dando instruções passo a passo (por exemplo, como fazer um café) com «du» ou «Sie».'),
    ]),
  ],
});
