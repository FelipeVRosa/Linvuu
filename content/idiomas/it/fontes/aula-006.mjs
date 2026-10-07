import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 6, titulo: 'Avere e verbos em -ere e -ire', nivel: 'a1',
  objetivo: 'Conjugar os verbos regulares em -ere e em -ire no presente (com e sem -isc-), perceber a mudança de som em «leggo / leggi» e «finisco / finisci», e usar «avere» para fome, sede, sono, frio e calor.',
  nota: 'Você fala do que lê, escreve, entende, termina e sente, e já conhece os três grupos de verbos regulares. Próxima aula: família e possessivos.',
  sessoes: [
    sessao('S1', 'O presente dos verbos em -ere', [
      revisao(5, 'Retome a aula 5: diga em voz alta o artigo definido e o plural de cinco palavras, e uma frase com «c\'è» e outra com «ci sono».'),
      palavras(8, [
        ['leggere', 'lédjere', 'ler', ''], ['scrivere', 'skrívere', 'escrever', ''], ['prendere', 'préndere', 'pegar, tomar', ''], ['vivere', 'vívere', 'viver', ''], ['vendere', 'véndere', 'vender', ''], ['chiedere', 'kiédere', 'pedir, perguntar', ''], ['rispondere', 'rispôndere', 'responder', ''], ['vedere', 'vedêre', 'ver', ''],
      ]),
      gramatica(12, 'Verbos em -ere: as terminações do presente', 'PASSO 1: o infinitivo em «-ere» perde essa terminação e recebe as do presente: «-o», «-i», «-e», «-iamo», «-ete», «-ono». PASSO 2: compare com os verbos em «-are» da aula 4: em «io», «tu» e «noi» a terminação é parecida («-o», «-i», «-iamo»). Mudam «lui / lei» (de «-a» para «-e») e «voi» (de «-ate» para «-ete»). PASSO 3: a terminação de «loro» é «-ono» (em «-are» era «-ano»), com o acento tônico no radical: «léggono», «scrívono». PASSO 4: a grafia «gg» se mantém, mas o som muda: em «leggo» o «gg» é duro (léggo); em «leggi» e «legge», o «gg» soa «dj» (lédji, lédje). Veja a aula 1: «g» + «e / i» é mole. PASSO 5: «prendere» serve para «pegar» e também para «tomar» uma bebida ou comer algo no bar: «Prendo un caffè» (tomo um café), «Prendo il treno» (pego o trem). PASSO 6: «chiedere» é «pedir» ou «perguntar»: «Chiedo un caffè» (peço um café), «Chiedo il nome» (pergunto o nome). PASSO 7: a negação e as perguntas são as mesmas: «Non leggo il giornale», «Che cosa scrivi?»', {
        tag: 'Presente -ere',
        comparacao: 'o português também tem três grupos de verbos regulares («-ar», «-er», «-ir»), e os de «-er» têm as terminações «-o, -es, -e, -emos, -eis, -em». Em italiano, cada pessoa também tem sua terminação; a de «lui / lei» é «-e» (como em «vende») e a de «noi» é «-iamo» nos três grupos.',
        tabela: [
          { pronome: 'io', forma: 'leggo', exemplo: 'Leggo un libro.' }, { pronome: 'tu', forma: 'leggi', exemplo: 'Leggi il giornale?' }, { pronome: 'lui / lei / Lei', forma: 'legge', exemplo: 'Giulia legge molto.' },
          { pronome: 'noi', forma: 'leggiamo', exemplo: 'Leggiamo insieme.' }, { pronome: 'voi', forma: 'leggete', exemplo: 'Leggete il menu?' }, { pronome: 'loro', forma: 'leggono', exemplo: 'Loro leggono un libro.' },
        ],
        erros: [['Voi leggate il menu.', 'Voi leggete il menu.', 'Em «-ere», a terminação de «voi» é «-ete», não «-ate».'], ['Lui scrivo un messaggio.', 'Lui scrive un messaggio.', 'Com «lui», a terminação é «-e».'], ['Tu prende un caffè.', 'Tu prendi un caffè.', 'Com «tu», a terminação é «-i».'], ['dizer «ledjo» para leggo', 'léggo (g duro)', 'Antes de «o», o «gg» é duro; antes de «i» e «e», soa «dj» (lédji).']],
      }),
      producao(5, 'Diga em voz alta seis frases com verbos em -ere: «Leggo… Scrivo… Prendo… Vivo… Rispondo… Vedo…»'),
    ]),
    sessao('S2', 'Os verbos em -ire e o grupo -isc-', [
      revisao(4, 'Conjugue «leggere» e «prendere» em voz alta, de «io» a «loro». Qual é a diferença entre «-are» e «-ere» em «voi»?'),
      palavras(6, [
        ['dormire', 'dormíre', 'dormir', ''], ['partire', 'partíre', 'partir, sair de viagem', ''], ['aprire', 'apríre', 'abrir', ''], ['sentire', 'sentíre', 'ouvir, sentir', ''], ['capire', 'kapíre', 'entender', ''], ['finire', 'finíre', 'terminar', ''], ['preferire', 'preferíre', 'preferir', ''],
      ]),
      gramatica(12, 'Verbos em -ire: dois grupos', 'PASSO 1: os verbos em «-ire» têm as terminações «-o», «-i», «-e», «-iamo», «-ite», «-ono». Só «voi» muda em relação a «-ere» («-ite» em vez de «-ete»). PASSO 2: porém, existem dois grupos. No primeiro, o radical não muda: «dormire» vira «dormo, dormi, dorme, dormiamo, dormite, dormono». Também são deste grupo «partire», «aprire», «sentire» e «servire». PASSO 3: no segundo, os verbos acrescentam «-isc-» entre o radical e a terminação em «io», «tu», «lui / lei» e «loro»: «finire» vira «finisco, finisci, finisce, finiamo, finite, finiscono». Também são deste grupo «capire» (capisco), «preferire» (preferisco) e «pulire» (pulisco). Não há regra para saber qual verbo está em cada grupo: aprenda junto com o verbo. PASSO 4: o som segue as regras da aula 1: «finisco» soa «finísko» («sc» + «o» é «sk»), e «finisci» e «finisce» soam «finíxi» e «finíxe» («sc» + «i / e» é «x»). PASSO 5: acento tônico: «finísco» e «capísco» têm a força na sílaba «-is-»; «finíscono» também. PASSO 6: frases úteis para sobreviver: «Non capisco» (não entendo), «Capisce?» (o senhor entende?) e «Più piano, per favore» (mais devagar, por favor). PASSO 7: «partire» é sair de viagem ou ir embora: «Parto domani» (parto amanhã); «sentire» é ouvir ou sentir, conforme o contexto: «Sento la musica».', {
        tag: 'Presente -ire',
        comparacao: 'o português não tem esse acréscimo «-isc-», e por isso ele soa estranho no começo. Pense assim: o italiano tem dois tipos de verbo em «-ire», e muitos verbos comuns pertencem ao segundo, com «-isc-». O «sc» de «capisco» soa «sk».',
        tabela: [
          { pronome: 'io', dormire: 'dormo', finire: 'finisco' }, { pronome: 'tu', dormire: 'dormi', finire: 'finisci' }, { pronome: 'lui / lei / Lei', dormire: 'dorme', finire: 'finisce' },
          { pronome: 'noi', dormire: 'dormiamo', finire: 'finiamo' }, { pronome: 'voi', dormire: 'dormite', finire: 'finite' }, { pronome: 'loro', dormire: 'dormono', finire: 'finiscono' },
        ],
        erros: [['Io finio il libro.', 'Io finisco il libro.', 'Verbos como «finire» levam «-isc-» em «io».'], ['Noi finiscamo la lezione.', 'Noi finiamo la lezione.', 'Com «noi» e «voi», «-isc-» não aparece.'], ['Io capo l\'italiano.', 'Io capisco l\'italiano.', 'O verbo é «capire», com «-isc-».'], ['Voi dormete molto.', 'Voi dormite molto.', 'Em «-ire», a terminação de «voi» é «-ite».']],
      }),
      dialogo(8, 'Leggere e capire / Ler e entender', 'Giulia e Marco falam do hábito de ler.', [
        ['Giulia', 'Marco, leggi il giornale ogni giorno?', 'Marco, você lê o jornal todo dia?'], ['Marco', 'No, non leggo il giornale. Leggo un libro la sera, ma dormo presto.', 'Não, não leio o jornal. Leio um livro à noite, mas durmo cedo.'], ['Giulia', 'Io preferisco leggere la mattina. Capisci tutto?', 'Eu prefiro ler de manhã. Você entende tudo?'], ['Marco', 'Non capisco tutto, ma finisco una pagina ogni giorno.', 'Não entendo tudo, mas termino uma página por dia.'], ['Giulia', 'Bravo! Io finisco un libro ogni mese.', 'Muito bem! Eu termino um livro por mês.'], ['Marco', 'Allora tu sei molto brava!', 'Então você é muito boa nisso!'],
      ]),
    ]),
    sessao('S3', 'Avere: fome, sede, sono, frio e calor', [
      revisao(4, 'Conjugue «dormire» e «finire» em voz alta. Qual é a diferença entre «finisco» e «finiamo»?'),
      palavras(5, [
        ['ho fame', 'o fáme', 'tenho fome', ''], ['ho sete', 'o sête', 'tenho sede', ''], ['ho sonno', 'o sônno', 'tenho sono', ''], ['ho freddo', 'o frêddo', 'tenho frio', ''], ['ho caldo', 'o káldo', 'tenho calor (não é caldo)', ''],
      ]),
      gramatica(8, 'Avere para sensações', 'PASSO 1: para falar de sensações físicas, o italiano usa «avere» + substantivo: «ho fame» (tenho fome), «ho sete» (tenho sede), «ho sonno» (tenho sono), «ho freddo» (tenho frio), «ho caldo» (tenho calor). O português diz «estou com fome», mas «tenho fome» também funciona. PASSO 2: nunca use «essere» para essas sensações: «sono caldo» não expressa sensação de calor e soa estranho. PASSO 3: para intensificar, o italiano usa «molto» ou «molta», que concorda com o substantivo: «ho molta fame» (fame é feminino), «ho molta sete», «ho molto sonno», «ho molto freddo», «ho molto caldo». Isso é diferente de «molto» com adjetivo, que não muda (aula 2). PASSO 4: «caldo» é um falso amigo. Em italiano é «quente» ou «calor»; o «caldo» de sopa se diz «brodo». PASSO 5: «avere» serve também para ter posses, família e idade: «Ho un fratello», «Ho una casa a Roma», «Ho venti anni». PASSO 6: com «avere bisogno di» expressa-se necessidade: «Ho bisogno di un caffè» (preciso de um café). PASSO 7: a negação e a pergunta seguem a regra geral: «Non ho fame», «Hai sete?».', {
        tag: 'Avere',
        comparacao: 'em português dizemos «estou com fome» ou «tenho fome». O italiano só aceita «avere». E atenção: «caldo» em italiano é «quente», e o «caldo» da cozinha brasileira se diz «brodo».',
        tabela: [
          { expressao: 'avere fame', significado: 'ter fome', exemplo: 'Ho molta fame.' }, { expressao: 'avere sete', significado: 'ter sede', exemplo: 'Hai sete?' }, { expressao: 'avere sonno', significado: 'ter sono', exemplo: 'Ha molto sonno.' },
          { expressao: 'avere freddo', significado: 'ter frio', exemplo: 'Abbiamo freddo.' }, { expressao: 'avere caldo', significado: 'ter calor', exemplo: 'Hanno molto caldo.' }, { expressao: 'avere bisogno di', significado: 'precisar de', exemplo: 'Ho bisogno di un caffè.' },
        ],
        erros: [['Sono caldo.', 'Ho caldo.', 'Para sensações, o italiano usa «avere».'], ['Ho molto fame.', 'Ho molta fame.', '«Fame» é feminino; «molta» concorda.'], ['Sono fame.', 'Ho fame.', '«Fame» pede «avere».'], ['Prendo un caldo di pollo.', 'Prendo un brodo di pollo.', 'O caldo da sopa é «brodo»; «caldo» é «quente».']],
      }),
      texto(8, 'Un caffè e un panino', 'Oggi ho molto caldo e ho molta sete. Giulia ha fame. Noi prendiamo un\'acqua fresca e un panino. Marco legge il giornale e scrive un messaggio. Poi partiamo: abbiamo fretta!', 'Hoje estou com muito calor e muita sede. A Giulia está com fome. Nós pegamos uma água gelada e um sanduíche. O Marco lê o jornal e escreve uma mensagem. Depois saímos: estamos com pressa!', [['Chi ha fame?', 'Giulia ha fame.'], ['Che cosa prendono?', 'Prendono un\'acqua fresca e un panino.'], ['Che cosa fa Marco?', 'Legge il giornale e scrive un messaggio.'], ['Perché partono?', 'Perché hanno fretta.']]),
      producao(5, 'Diga em voz alta o que você sente agora, e o que sente um amigo imaginário: «Ho… Lui / lei ha…» Use «molto» ou «molta».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 6', [
      revisao(5, 'Conjugue em voz alta um verbo de cada grupo (leggere, dormire, finire) e use cada um numa frase negativa.'),
      exercicios(20, [
        ouvir('Leggo un libro', ['Leggo un libro', 'Leggi un libro', 'Legge un libro'], 'Leggo un libro', 'Ouça o «g» duro de «leggo».'), ouvir('Finisco la lezione', ['Finisco la lezione', 'Finiamo la lezione', 'Finiscono la lezione'], 'Finisco la lezione', 'Ouça o «sk» de «finisco».'), ouvir('Ho molta sete', ['Ho molta sete', 'Ho molto sonno', 'Ho molta fame'], 'Ho molta sete', 'Ouça «sete» e «molta».'),
        ditado('Non capisco', 'Escreva: Non capisco.'), ditado('Voi dormite molto', 'Escreva: Voi dormite molto.'), ditado('Ho freddo', 'Escreva: Ho freddo.'),
        mc('Qual é a forma de «voi» de «scrivere»?', ['scrivete', 'scrivite', 'scrivate'], 'scrivete', '«-ere» pede «-ete».'), mc('Qual é a forma de «io» de «capire»?', ['capisco', 'capo', 'capio'], 'capisco', 'Verbo do grupo «-isc-».'), mc('Como soa «leggi»?', ['lédji', 'léggi', 'légui'], 'lédji', '«gg» antes de «i» soa «dj».'), mc('Como se diz «tenho calor»?', ['Ho caldo.', 'Sono caldo.', 'Ho brodo.'], 'Ho caldo.', 'Sensações usam «avere».'),
        lacuna('Noi ___ il giornale. (lemos)', ['leggiamo', 'leggete', 'leggono'], 'leggiamo', '«noi leggiamo».'), lacuna('Lei ___ la lezione. (termina)', ['finisce', 'finisci', 'finiamo'], 'finisce', 'Grupo «-isc-»: «lei finisce».'), lacuna('Ho molta ___ . (sede)', ['sete', 'sonno', 'caldo'], 'sete', '«Sete» é feminino: «molta».'), lacuna('Loro ___ molto. (dormem)', ['dormono', 'dormiamo', 'dormite'], 'dormono', '«loro dormono».'),
        ordem('Ordene: «Non capisco tutto, ma leggo ogni giorno.»', ['Non', 'capisco', 'tutto,', 'ma', 'leggo', 'ogni', 'giorno'], 'Non capisco tutto, ma leggo ogni giorno.', 'Duas frases ligadas por «ma».'), ordem('Ordene: «Giulia ha molta fame.»', ['Giulia', 'ha', 'molta', 'fame'], 'Giulia ha molta fame.', 'Sensação com «avere».'),
        livre('Escreva em italiano: Eu leio o jornal, escrevo mensagens e tenho sede.', 'Leggo il giornale, scrivo messaggi e ho sete.'),
      ]),
      producao(5, 'Conte em voz alta como é o seu domingo: o que você lê, escreve, prefere, o que termina e como se sente (fome, sono, calor).'),
    ]),
  ],
});
