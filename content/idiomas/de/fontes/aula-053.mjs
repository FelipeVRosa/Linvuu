import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 53, titulo: 'Conjunções de tempo: als, wenn, während, seitdem, bis, sobald', nivel: 'b1',
  objetivo: 'Escolher entre «als» (um fato único no passado) e «wenn» (repetição, presente e futuro), e usar während, seitdem, bis, sobald e solange, sempre com o verbo no fim.',
  nota: 'Você escolhe a conjunção de tempo certa. Próxima aula: o Konjunktiv II para situações irreais.',
  sessoes: [
    sessao('S1', 'Als: um fato no passado', [
      revisao(5, 'Escreva 6 frases com Plusquamperfekt, nachdem e bevor.'),
      palavras(8, [
        ['die Kindheit', 'di kínt-hait', 'infância', 'childhood'], ['die Jugend', 'di iúguent', 'juventude', 'youth'], ['damals', 'dá-mals', 'naquela época', 'back then'], ['früher', 'frü-er', 'antigamente', 'formerly'],
        ['das Dorf', 'das dorf', 'aldeia', 'village'], ['aufwachsen', 'áuf-vaksen', 'crescer, criar-se', 'to grow up'], ['umziehen', 'úm-tsíen', 'mudar-se', 'to move'], ['sich erinnern', 'zich erínern', 'lembrar-se', 'to remember'],
      ]),
      gramatica(14, 'Als: um fato no passado, passo a passo', 'PASSO 1: «ALS» (quando) liga a principal a um FATO ÚNICO no passado ou a um período fechado do passado: «Als ich ankam, regnete es», «Als ich Kind war, wohnte ich in einem Dorf.» PASSO 2: «als» abre uma SUBORDINADA: o verbo conjugado vai para o FIM, e a principal vem depois com o verbo na 2ª posição. PASSO 3: os tempos: Präteritum, Perfekt ou Plusquamperfekt: «Als ich angekommen war, hatte der Film begonnen.» PASSO 4: use «als» também para falar da idade e de épocas: «Als ich zehn war …», «Als ich in Berlin lebte …» PASSO 5: «als» NUNCA se usa para o presente nem para o futuro (ali é «wenn»).', {
        tag: 'Frase',
        comparacao: 'o português usa «quando» para tudo. O alemão separa: «als» para uma vez no passado, «wenn» para o resto.',
        tabela: [
          { uso: 'fato único', frase: 'Als ich ankam, regnete es.' }, { uso: 'período do passado', frase: 'Als ich Kind war, wohnte ich in einem Dorf.' }, { uso: 'idade', frase: 'Als ich zehn war, bin ich umgezogen.' }, { uso: 'com Plusquamperfekt', frase: 'Als ich ankam, hatte der Film schon begonnen.' },
        ],
        erros: [['Wenn ich Kind war, wohnte ich im Dorf.', 'Als ich Kind war, wohnte ich im Dorf.', 'Uma época do passado: «als».'], ['Als ich ankam, es regnete.', 'Als ich ankam, regnete es.', 'Depois da subordinada, o verbo na 2ª posição.'], ['Als ich Zeit habe, rufe ich an.', 'Wenn ich Zeit habe, rufe ich an.', 'Presente: «wenn», nunca «als».']],
      }),
      producao(3, 'Conte 6 lembranças da infância em voz alta com «als»: «Als ich Kind war, … Als ich zehn war, …»'),
    ]),
    sessao('S2', 'Wenn: repetição, presente e futuro', [
      revisao(5, 'Escreva 6 frases com «als» sobre o seu passado.'),
      palavras(8, [
        ['immer wenn', 'ímer ven', 'sempre que', 'whenever'], ['jedes Mal, wenn', 'iédes mal ven', 'toda vez que', 'every time'], ['manchmal', 'mánçmal', 'às vezes', 'sometimes'], ['oft', 'oft', 'frequentemente', 'often'],
        ['selten', 'zélten', 'raramente', 'rarely'], ['nie', 'ni', 'nunca', 'never'], ['jedes Wochenende', 'iédes vókhen-énde', 'todo fim de semana', 'every weekend'], ['jeden Tag', 'iéden tak', 'todo dia', 'every day'],
      ]),
      gramatica(12, 'Wenn: o que se repete, o presente e o futuro', 'PASSO 1: «WENN» (quando, se) liga a principal a fatos que se REPETEM, ao PRESENTE e ao FUTURO: «Wenn ich Zeit habe, rufe ich dich an.» PASSO 2: para uma repetição NO PASSADO, o alemão também usa «wenn», geralmente com «immer» ou «jedes Mal»: «Immer wenn ich Zeit hatte, bin ich zum See gegangen.» PASSO 3: a escolha: UMA vez no passado → «als»; vários momentos ou presente/futuro → «wenn». PASSO 4: a ordem é a mesma de todas as subordinadas: verbo no fim, principal com verbo na 2ª posição. PASSO 5: lembre também de «wenn» como «se» (condição): «Wenn es regnet, bleibe ich zu Hause.»', {
        tag: 'Frase',
        tabela: [
          { quando: 'presente', frase: 'Wenn ich Zeit habe, rufe ich dich an.' }, { quando: 'futuro', frase: 'Wenn du kommst, koche ich etwas.' }, { quando: 'repetição no passado', frase: 'Immer wenn ich Zeit hatte, bin ich zum See gegangen.' }, { quando: 'toda vez', frase: 'Jedes Mal, wenn es regnet, bleibe ich zu Hause.' }, { quando: 'um fato único (als)', frase: 'Als ich ankam, regnete es.' },
        ],
        erros: [['Als ich Zeit hatte, bin ich immer zum See gegangen.', 'Immer wenn ich Zeit hatte, bin ich zum See gegangen.', 'Repetição: «wenn».'], ['Wenn ich gestern ankam, regnete es.', 'Als ich gestern ankam, regnete es.', 'Fato único: «als».']],
      }),
      producao(5, 'Conte em voz alta o que você faz sempre que tem tempo e o que fará quando tiver férias, com «wenn».'),
    ]),
    sessao('S3', 'Während, seitdem, bis, sobald, solange', [
      revisao(5, 'Escreva 6 frases com «als» e «wenn».'),
      gramatica(10, 'Outras conjunções de tempo', 'PASSO 1: «WÄHREND» (enquanto, durante) liga dois fatos simultâneos: «Während ich arbeite, hört er Musik.» PASSO 2: «SEITDEM» (desde que): «Seitdem ich in Berlin wohne, spreche ich mehr Deutsch.» PASSO 3: «BIS» (até que): «Ich warte, bis du kommst.» PASSO 4: «SOBALD» (assim que): «Sobald ich Zeit habe, rufe ich an.» PASSO 5: «SOLANGE» (enquanto, pelo tempo em que): «Solange es regnet, bleiben wir hier.» PASSO 6: todas abrem subordinadas com o verbo no FIM; depois delas, a principal começa pelo verbo.', {
        tag: 'Frase',
        tabela: [
          { conjuncao: 'während', significado: 'enquanto', frase: 'Während ich arbeite, hört er Musik.' }, { conjuncao: 'seitdem', significado: 'desde que', frase: 'Seitdem ich in Berlin wohne, spreche ich mehr Deutsch.' }, { conjuncao: 'bis', significado: 'até que', frase: 'Ich warte, bis du kommst.' }, { conjuncao: 'sobald', significado: 'assim que', frase: 'Sobald ich Zeit habe, rufe ich an.' }, { conjuncao: 'solange', significado: 'enquanto (duração)', frase: 'Solange es regnet, bleiben wir hier.' },
        ],
      }),
      dialogo(10, 'Kindheitserinnerungen / Lembranças da infância', 'Dois amigos falam da infância.', [
        ['Mia', 'Wo hast du gewohnt, als du Kind warst?', 'Onde você morava quando era criança?'], ['Jonas', 'Als ich Kind war, habe ich in einem kleinen Dorf gewohnt.', 'Quando eu era criança, morava numa pequena aldeia.'], ['Mia', 'Und was hast du gemacht, wenn du Zeit hattest?', 'E o que você fazia quando tinha tempo?'],
        ['Jonas', 'Immer wenn ich Zeit hatte, bin ich zum See gegangen.', 'Sempre que eu tinha tempo, ia ao lago.'], ['Mia', 'Und wann bist du in die Stadt gezogen?', 'E quando você se mudou para a cidade?'], ['Jonas', 'Als ich achtzehn war. Seitdem ich in der Stadt wohne, vermisse ich das Dorf.', 'Quando eu tinha dezoito anos. Desde que moro na cidade, sinto falta da aldeia.'],
        ['Mia', 'Wirst du zurückgehen, sobald du Urlaub hast?', 'Você vai voltar assim que tiver férias?'], ['Jonas', 'Ja, und ich bleibe, solange das Wetter schön ist.', 'Sim, e fico enquanto o tempo estiver bonito.'],
      ]),
      producao(5, 'Conte em voz alta a sua história com «als», «wenn», «seitdem», «bis» e «sobald».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de 6 frases sobre a sua vida, com als, wenn, während e seitdem.'),
      exercicios(20, [
        lacuna('___ ich Kind war, wohnte ich im Dorf. (quando)', ['Als', 'Wenn', 'Ob'], 'Als', 'Época do passado: als.'), lacuna('___ ich Zeit habe, rufe ich an. (quando)', ['Wenn', 'Als', 'Weil'], 'Wenn', 'Presente: wenn.'), lacuna('Immer ___ ich Zeit hatte, bin ich gegangen.', ['wenn', 'als', 'dass'], 'wenn', 'Repetição: wenn.'),
        lacuna('___ ich arbeite, hört er Musik. (enquanto)', ['Während', 'Seitdem', 'Bis'], 'Während', 'Simultaneidade.'), lacuna('___ ich in Berlin wohne, spreche ich mehr Deutsch. (desde que)', ['Seitdem', 'Während', 'Sobald'], 'Seitdem', 'seitdem = desde que.'), lacuna('Ich warte, ___ du kommst. (até que)', ['bis', 'sobald', 'als'], 'bis', 'bis = até que.'),
        lacuna('___ ich Zeit habe, rufe ich an. (assim que)', ['Sobald', 'Solange', 'Bis'], 'Sobald', 'sobald = assim que.'), mc('Para um fato único no passado, use:', ['als', 'wenn', 'ob'], 'als', 'Uma vez.'), mc('Para repetição no passado, use:', ['immer wenn', 'als', 'ob'], 'immer wenn', 'Repetição.'), mc('Depois de todas essas conjunções, o verbo conjugado vai:', ['para o fim', 'para a 2ª posição', 'para o começo'], 'para o fim', 'Subordinada.'),
        ordem('Ordene: «Quando eu era criança, morava numa aldeia.»', ['Als', 'ich', 'Kind', 'war', 'wohnte', 'ich', 'in', 'einem', 'Dorf'], 'Als ich Kind war, wohnte ich in einem Dorf.', 'Subordinada primeiro; principal começa pelo verbo.'), ouvir('Immer wenn ich Zeit hatte, bin ich zum See gegangen', ['Immer wenn ich Zeit hatte, bin ich zum See gegangen', 'Als ich Zeit hatte, bin ich zum See gegangen', 'Wenn ich Zeit habe, gehe ich zum See'], 'Immer wenn ich Zeit hatte, bin ich zum See gegangen', 'Repetição no passado.'), ditado('Seitdem ich in der Stadt wohne, vermisse ich das Dorf', 'seitdem + subordinada.'),
        livre('Escreva 5 frases com als, wenn, während, seitdem e bis.', 'Als ich Kind war, wohnte ich im Dorf. Wenn ich Zeit habe, rufe ich an. Während ich arbeite, hört er Musik. Seitdem ich in Berlin wohne, spreche ich mehr Deutsch. Ich warte, bis du kommst.'),
      ]),
      producao(5, 'Grave-se contando a sua vida em ordem, com as conjunções de tempo.'),
    ]),
  ],
});
