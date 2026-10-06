import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 57, titulo: 'Finalidade e contraste: um … zu, damit, ohne … zu, statt … zu', nivel: 'b1',
  objetivo: 'Expressar a finalidade com «um … zu» (mesmo sujeito) e «damit» (sujeitos diferentes), e usar «ohne … zu» e «(an)statt … zu» para dizer «sem fazer» e «em vez de fazer».',
  nota: 'Você explica para que algo é feito e o que se faz sem ou em vez de outra coisa. Próxima aula: conectores com obwohl, trotzdem, deshalb e outros.',
  sessoes: [
    sessao('S1', 'Um … zu: para', [
      revisao(5, 'Escreva 6 frases com infinitivo com zu.'),
      palavras(8, [
        ['das Ziel', 'das tsil', 'objetivo', 'goal'], ['der Zweck', 'der tsvek', 'finalidade', 'purpose'], ['verbessern', 'ferbésern', 'melhorar', 'to improve'], ['erreichen', 'errái-çen', 'alcançar', 'to reach'],
        ['sparen', 'xpáren', 'economizar', 'to save'], ['das Geld', 'das guélt', 'dinheiro', 'money'], ['die Prüfung', 'di prüfung', 'prova', 'exam'], ['bestehen', 'bexténen', 'passar (na prova)', 'to pass'],
      ]),
      gramatica(14, 'Um … zu: a finalidade, passo a passo', 'PASSO 1: para dizer PARA QUÊ se faz algo, use «UM … ZU» + infinitivo: «Ich lerne Deutsch, um in Berlin zu arbeiten» (eu estudo alemão para trabalhar em Berlim). PASSO 2: o «um» abre a oração; o «zu» fica ANTES do infinitivo, no fim; com verbo separável: «um aufzustehen». PASSO 3: REGRA: o SUJEITO é o MESMO na principal e no «um … zu» (aqui, «ich» faz as duas coisas). PASSO 4: vírgula antes de «um». PASSO 5: «um … zu» responde à pergunta «Wozu?» (para quê?) ou «Warum?». PASSO 6: não se usa «um … zu» quando o sujeito muda: nesse caso, use «damit» (próxima sessão).', {
        tag: 'Frase',
        comparacao: 'o português diz «para + infinitivo» («estudo para trabalhar»). O alemão faz «um … zu» + infinitivo, com o mesmo sujeito.',
        tabela: [
          { frase: 'Ich lerne Deutsch, um in Berlin zu arbeiten.', pt: 'Estudo alemão para trabalhar em Berlim.' }, { frase: 'Er spart Geld, um ein Auto zu kaufen.', pt: 'Ele economiza dinheiro para comprar um carro.' }, { frase: 'Ich stehe früh auf, um den Zug zu erreichen.', pt: 'Acordo cedo para pegar o trem.' }, { frase: 'Wir lernen viel, um die Prüfung zu bestehen.', pt: 'Estudamos muito para passar na prova.' },
        ],
        erros: [['Ich lerne Deutsch, um ich in Berlin zu arbeiten.', 'Ich lerne Deutsch, um in Berlin zu arbeiten.', 'No «um … zu», não se repete o sujeito.'], ['Ich stehe früh auf, um zu aufstehen.', 'Ich stehe früh auf, um den Zug zu erreichen.', 'Use um + objetivo + zu + verbo.'], ['Ich lerne Deutsch, zu in Berlin arbeiten.', 'Ich lerne Deutsch, um in Berlin zu arbeiten.', 'Falta o «um».']],
      }),
      producao(3, 'Diga 6 finalidades em voz alta: «Ich lerne Deutsch, um … zu … Ich spare Geld, um … zu …»'),
    ]),
    sessao('S2', 'Damit: para que', [
      revisao(5, 'Escreva 6 frases com «um … zu».'),
      palavras(8, [
        ['damit', 'dá-mit', 'para que', 'so that'], ['verstehen', 'fer-xtéen', 'entender', 'to understand'], ['erklären', 'erklérren', 'explicar', 'to explain'], ['helfen', 'hélfen', 'ajudar', 'to help'],
        ['vergessen', 'fergésen', 'esquecer', 'to forget'], ['sicher', 'zíçer', 'seguro', 'safe'], ['pünktlich', 'púnktliç', 'pontual', 'punctual'], ['die Zukunft', 'di tsúkunft', 'futuro', 'future'],
      ]),
      gramatica(12, 'Damit: a finalidade com sujeitos diferentes', 'PASSO 1: «DAMIT» (para que) abre uma subordinada de finalidade. O verbo conjugado vai para o FIM. PASSO 2: use-o quando o sujeito da principal e o da subordinada são DIFERENTES: «Ich erkläre es dir, damit du es verstehst» (eu explico para que você entenda). PASSO 3: também pode usá-lo com o MESMO sujeito, mas «um … zu» é mais comum e mais curto. PASSO 4: «damit» não se confunde com «mit» (com); é uma única palavra, conjunção. PASSO 5: a vírgula antes de «damit» é obrigatória. PASSO 6: pergunta «Wozu?» ou «Damit was?»; resposta com «um … zu» ou «damit».', {
        tag: 'Frase',
        tabela: [
          { sujeitos: 'diferentes', frase: 'Ich erkläre es dir, damit du es verstehst.' }, { sujeitos: 'diferentes', frase: 'Ich rufe dich an, damit du nicht vergisst.' }, { sujeitos: 'diferentes', frase: 'Wir schreiben es auf, damit niemand es vergisst.' }, { sujeitos: 'mesmo (prefira um … zu)', frase: 'Ich lerne, um die Prüfung zu bestehen.' },
        ],
        erros: [['Ich erkläre es dir, um du es verstehst.', 'Ich erkläre es dir, damit du es verstehst.', 'Sujeitos diferentes: «damit».'], ['Ich erkläre es dir, damit du verstehst es.', 'Ich erkläre es dir, damit du es verstehst.', 'Verbo no fim.'], ['Ich lerne, damit ich die Prüfung bestehe.', 'Ich lerne, um die Prüfung zu bestehen.', 'Mesmo sujeito: prefira «um … zu».']],
      }),
      producao(5, 'Diga 6 frases com «damit»: «Ich erkläre es dir, damit du es … Ich schreibe es auf, damit niemand …»'),
    ]),
    sessao('S3', 'Ohne … zu e statt … zu', [
      revisao(5, 'Escreva 6 frases de finalidade: 3 com «um … zu» e 3 com «damit».'),
      gramatica(10, 'Ohne … zu e (an)statt … zu', 'PASSO 1: «OHNE … ZU» + infinitivo significa «SEM + fazer»: «Er ging, ohne ein Wort zu sagen» (ele foi embora sem dizer uma palavra). PASSO 2: «(AN)STATT … ZU» + infinitivo significa «EM VEZ DE + fazer»: «Statt zu lernen, schaut er fern» (em vez de estudar, ele vê TV). PASSO 3: o sujeito costuma ser o mesmo. PASSO 4: com sujeitos diferentes: «ohne dass» e «anstatt dass» + verbo no fim: «Er ging, ohne dass jemand es merkte.» PASSO 5: com separável, o «zu» entra no meio: «statt fernzusehen», «ohne aufzustehen».', {
        tag: 'Frase',
        tabela: [
          { construcao: 'ohne … zu', frase: 'Er ging, ohne ein Wort zu sagen.' }, { construcao: '(an)statt … zu', frase: 'Statt zu lernen, schaut er fern.' }, { construcao: 'separável', frase: 'Statt fernzusehen, lese ich lieber ein Buch.' }, { construcao: 'ohne dass (outro sujeito)', frase: 'Er ging, ohne dass jemand es merkte.' },
        ],
      }),
      dialogo(10, 'Warum lernst du Deutsch? / Por que você estuda alemão?', 'Dois amigos falam de como aprendem alemão.', [
        ['Lea', 'Warum lernst du Deutsch?', 'Por que você estuda alemão?'], ['Paul', 'Ich lerne Deutsch, um in Berlin zu arbeiten.', 'Estudo alemão para trabalhar em Berlim.'], ['Lea', 'Und wie lernst du?', 'E como você estuda?'],
        ['Paul', 'Ich höre jeden Tag Podcasts, um mein Hörverstehen zu verbessern.', 'Ouço podcasts todos os dias para melhorar a minha compreensão auditiva.'], ['Lea', 'Ich schreibe die Wörter auf, damit ich sie nicht vergesse.', 'Eu anoto as palavras para não esquecê-las.'], ['Paul', 'Ich spreche mit Muttersprachlern, ohne Angst zu haben.', 'Eu converso com nativos sem ter medo.'],
        ['Lea', 'Statt jeden Tag fernzusehen, lese ich lieber Bücher.', 'Em vez de ver TV todo dia, prefiro ler livros.'], ['Paul', 'Gute Idee! Ich gehe auch öfter in die Bibliothek, um zu lernen.', 'Boa ideia! Eu também vou mais à biblioteca para estudar.'],
      ]),
      producao(5, 'Explique em voz alta como você aprende alemão, com «um … zu», «damit», «ohne … zu» e «statt … zu».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases sobre como você estuda, com as quatro construções.'),
      exercicios(20, [
        lacuna('Ich lerne Deutsch, ___ in Berlin zu arbeiten.', ['um', 'damit', 'für'], 'um', 'Mesmo sujeito: um … zu.'), lacuna('Ich erkläre es dir, ___ du es verstehst.', ['damit', 'um', 'weil'], 'damit', 'Sujeitos diferentes: damit.'), lacuna('Er ging, ___ ein Wort zu sagen.', ['ohne', 'statt', 'um'], 'ohne', 'sem fazer.'),
        lacuna('___ zu lernen, schaut er fern.', ['Statt', 'Ohne', 'Um'], 'Statt', 'em vez de fazer.'), lacuna('Ich stehe früh auf, um den Zug ___ erreichen.', ['zu', 'um', 'für'], 'zu', 'um … zu.'), lacuna('Ich rufe dich an, damit du nicht ___. (vergessen)', ['vergisst', 'vergessen', 'zu vergessen'], 'vergisst', 'Subordinada: verbo no fim.'),
        mc('«Um … zu» pede:', ['o mesmo sujeito', 'sujeitos diferentes', 'nenhum sujeito'], 'o mesmo sujeito', 'Ich lerne, um … zu.'), mc('«Damit» abre uma oração com o verbo:', ['no fim', 'na 2ª posição', 'no começo'], 'no fim', 'Subordinada.'), mc('«Ohne … zu» significa:', ['sem fazer', 'para fazer', 'em vez de fazer'], 'sem fazer', 'Ohne ein Wort zu sagen.'),
        ordem('Ordene: «Estudo alemão para trabalhar em Berlim.»', ['Ich', 'lerne', 'Deutsch', 'um', 'in', 'Berlin', 'zu', 'arbeiten'], 'Ich lerne Deutsch, um in Berlin zu arbeiten.', 'um … zu.'), ordem('Ordene: «Em vez de estudar, ele vê TV.»', ['Statt', 'zu', 'lernen', 'schaut', 'er', 'fern'], 'Statt zu lernen, schaut er fern.', 'statt … zu.'), ouvir('Ich schreibe die Wörter auf, damit ich sie nicht vergesse', ['Ich schreibe die Wörter auf, damit ich sie nicht vergesse', 'Ich schreibe die Wörter auf, um sie nicht zu vergessen', 'Ich vergesse die Wörter nicht'], 'Ich schreibe die Wörter auf, damit ich sie nicht vergesse', 'damit + verbo no fim.'),
        ditado('Er ging, ohne ein Wort zu sagen', 'ohne … zu.'), livre('Escreva 5 frases: uma com «um … zu», uma com «damit», uma com «ohne … zu», uma com «statt … zu» e uma com «ohne dass».', 'Ich lerne Deutsch, um in Berlin zu arbeiten. Ich erkläre es dir, damit du es verstehst. Er ging, ohne ein Wort zu sagen. Statt zu lernen, schaut er fern. Er ging, ohne dass jemand es merkte.'),
      ]),
      producao(5, 'Grave-se explicando os seus objetivos e como você os alcança, com as quatro construções.'),
    ]),
  ],
});
