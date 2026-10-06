import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 58, titulo: 'Conectores em pares: entweder … oder, weder … noch, einerseits … andererseits, je … desto', nivel: 'b1',
  objetivo: 'Usar os conectores em pares (entweder … oder, weder … noch, sowohl … als auch, nicht nur … sondern auch, einerseits … andererseits, zwar … aber, je … desto) para listar, contrastar e argumentar.',
  nota: 'Você liga ideias com pares de conectores. Próxima aula: os verbos com preposição.',
  sessoes: [
    sessao('S1', 'Entweder … oder, weder … noch, sowohl … als auch', [
      revisao(5, 'Escreva 6 frases com obwohl, trotzdem, deshalb, außerdem e sonst.'),
      palavras(8, [
        ['entweder … oder', 'ént-vé-der … ó-der', 'ou … ou', 'either … or'], ['weder … noch', 'vé-der … norr', 'nem … nem', 'neither … nor'], ['sowohl … als auch', 'zo-vôl … als áurr', 'tanto … quanto', 'both … and'], ['nicht nur … sondern auch', 'niçt nur … zón-dern áurr', 'não só … mas também', 'not only … but also'],
        ['der Vorteil', 'der fôr-tail', 'vantagem', 'advantage'], ['der Nachteil', 'der nárr-tail', 'desvantagem', 'disadvantage'], ['die Möglichkeit', 'di mö-gliç-kait', 'possibilidade', 'possibility'], ['die Alternative', 'di alternatíve', 'alternativa', 'alternative'],
      ]),
      gramatica(14, 'Os pares de conectores, passo a passo', 'PASSO 1: um par de conectores liga DUAS partes iguais da frase. «ENTWEDER … ODER» (ou … ou) apresenta uma ESCOLHA: «Ich trinke entweder Tee oder Kaffee.» PASSO 2: «WEDER … NOCH» (nem … nem) nega as duas partes; o verbo não leva «nicht»: «Er kann weder lesen noch schreiben.» PASSO 3: «SOWOHL … ALS AUCH» (tanto … quanto) soma as duas: «Sie spricht sowohl Deutsch als auch Englisch.» PASSO 4: «NICHT NUR … SONDERN AUCH» (não só … mas também): «Ich spreche nicht nur Deutsch, sondern auch Spanisch.» PASSO 5: as duas partes devem ser do mesmo tipo (dois substantivos, dois verbos, dois adjetivos); o verbo conjugado concorda com o sujeito: com «sowohl … als auch», o plural. PASSO 6: «entweder … oder» pode abrir a frase e inverter o verbo: «Entweder du kommst, oder du bleibst zu Hause.»', {
        tag: 'Frase',
        comparacao: 'o português tem «ou … ou», «nem … nem», «tanto … quanto», «não só … mas também». O alemão tem os mesmos pares; só precisa cuidar da posição do verbo.',
        tabela: [
          { par: 'entweder … oder', frase: 'Ich trinke entweder Tee oder Kaffee.' }, { par: 'weder … noch', frase: 'Er kann weder lesen noch schreiben.' }, { par: 'sowohl … als auch', frase: 'Sie spricht sowohl Deutsch als auch Englisch.' }, { par: 'nicht nur … sondern auch', frase: 'Ich spreche nicht nur Deutsch, sondern auch Spanisch.' },
        ],
        erros: [['Er kann weder nicht lesen noch schreiben.', 'Er kann weder lesen noch schreiben.', '«weder … noch» já é negação.'], ['Ich trinke entweder Tee, oder Kaffee ich.', 'Ich trinke entweder Tee oder Kaffee.', 'Duas partes do mesmo tipo.'], ['Sie spricht sowohl Deutsch und Englisch.', 'Sie spricht sowohl Deutsch als auch Englisch.', 'O par é «sowohl … als auch».']],
      }),
      producao(3, 'Diga 6 frases com os pares: «Ich trinke entweder … oder … Er kann weder … noch … Sie spricht sowohl … als auch …»'),
    ]),
    sessao('S2', 'Einerseits … andererseits, zwar … aber, je … desto', [
      revisao(5, 'Escreva 6 frases com entweder … oder, weder … noch e sowohl … als auch.'),
      palavras(8, [
        ['einerseits … andererseits', 'áiner-zaits … án-de-rer-zaits', 'por um lado … por outro', 'on the one hand … on the other'], ['zwar … aber', 'tsvar … áber', 'é verdade que … mas', 'true … but'], ['je … desto', 'ié … dés-to', 'quanto … mais', 'the more … the more'], ['je mehr … desto besser', 'ié mér … dés-to bés-ser', 'quanto mais … melhor', 'the more … the better'],
        ['das Leben', 'das lé-ben', 'vida', 'life'], ['die Natur', 'di natúr', 'natureza', 'nature'], ['die Ruhe', 'di rú-e', 'tranquilidade', 'quiet'], ['das Angebot', 'das án-gue-bôt', 'oferta', 'offer'],
      ]),
      gramatica(12, 'Argumentar com pares de conectores', 'PASSO 1: «EINERSEITS … ANDERERSEITS» (por um lado … por outro) mostra dois lados de uma questão: «Einerseits ist das Leben in der Stadt spannend, andererseits ist es laut und teuer.» Os dois conectores ficam na posição 1 ou no meio da frase; o verbo vem em seguida. PASSO 2: «ZWAR … ABER» (é verdade que … mas) concede e contrapõe: «Das Hotel ist zwar teuer, aber es liegt zentral.» PASSO 3: «JE … DESTO» (quanto mais … mais) usa o COMPARATIVO nas duas partes: a parte com «je» é SUBORDINADA (verbo no fim); a parte com «desto» é PRINCIPAL (verbo na 2ª posição): «Je mehr ich lerne, desto besser verstehe ich.» PASSO 4: «je … umso» é equivalente a «je … desto». PASSO 5: use-os em textos de opinião, na escrita e na fala formal.', {
        tag: 'Frase',
        tabela: [
          { par: 'einerseits … andererseits', frase: 'Einerseits ist das Leben in der Stadt spannend, andererseits ist es laut und teuer.' }, { par: 'zwar … aber', frase: 'Das Hotel ist zwar teuer, aber es liegt zentral.' }, { par: 'je … desto', frase: 'Je mehr ich lerne, desto besser verstehe ich.' }, { par: 'je … umso', frase: 'Je länger ich warte, umso nervöser werde ich.' },
        ],
        erros: [['Je mehr ich lerne, desto ich verstehe besser.', 'Je mehr ich lerne, desto besser verstehe ich.', 'desto + comparativo + verbo na 2ª posição.'], ['Je mehr ich lerne ich verstehe besser.', 'Je mehr ich lerne, desto besser verstehe ich.', 'Falta o «desto».'], ['Je mehr ich lerne, desto besser ich verstehe.', 'Je mehr ich lerne, desto besser verstehe ich.', 'A principal tem verbo na 2ª posição.']],
      }),
      producao(5, 'Dê 6 argumentos em voz alta: «Einerseits … andererseits … Das ist zwar … aber … Je mehr …, desto …»'),
    ]),
    sessao('S3', 'Cidade ou campo? Um debate', [
      revisao(5, 'Escreva 6 frases com einerseits … andererseits, zwar … aber e je … desto.'),
      gramatica(10, 'Estruturar uma opinião', 'PASSO 1: uma opinião bem estruturada tem uma INTRODUÇÃO («Ich möchte über … sprechen»), os ARGUMENTOS («Einerseits … andererseits …»), um EXEMPLO e uma CONCLUSÃO («Alles in allem …», «Zusammenfassend …»). PASSO 2: use os conectores em pares para mostrar os dois lados e as nuances: «Das Leben auf dem Land hat sowohl Vorteile als auch Nachteile.» PASSO 3: para uma lista com ênfase: «nicht nur … sondern auch». PASSO 4: para concluir: «Je mehr ich darüber nachdenke, desto klarer wird es mir.» PASSO 5: lembre da diferença entre «aber» (coordenativa, sem mudar a ordem) e «sondern» (depois de negação): «Ich bin nicht müde, sondern hungrig.»', {
        tag: 'Frase',
        tabela: [
          { parte: 'introdução', frase: 'Ich möchte über das Leben in der Stadt und auf dem Land sprechen.' }, { parte: 'argumento', frase: 'Einerseits gibt es viele Möglichkeiten, andererseits ist alles teuer.' }, { parte: 'ênfase', frase: 'Dort gibt es nicht nur Ruhe, sondern auch weniger Arbeit.' }, { parte: 'conclusão', frase: 'Alles in allem hat beides Vor- und Nachteile.' }, { parte: 'sondern (após negação)', frase: 'Ich bin nicht müde, sondern hungrig.' },
        ],
      }),
      dialogo(10, 'Stadt oder Land? / Cidade ou campo?', 'Dois colegas debatem onde morar.', [
        ['Mia', 'Wo möchtest du später wohnen, in der Stadt oder auf dem Land?', 'Onde você quer morar mais tarde, na cidade ou no campo?'], ['Jonas', 'Einerseits ist das Leben in der Stadt spannend, andererseits ist es laut und teuer.', 'Por um lado, a vida na cidade é emocionante; por outro, é barulhenta e cara.'], ['Mia', 'Auf dem Land ist es weder laut noch teuer.', 'No campo não é nem barulhento nem caro.'],
        ['Jonas', 'Aber dort gibt es nicht nur Ruhe, sondern auch weniger Arbeit.', 'Mas lá há não só tranquilidade, mas também menos trabalho.'], ['Mia', 'Je länger ich in der Stadt wohne, desto mehr vermisse ich die Natur.', 'Quanto mais tempo moro na cidade, mais sinto falta da natureza.'], ['Jonas', 'Ich könnte entweder aufs Land ziehen oder eine Wohnung mit Garten suchen.', 'Eu poderia ou me mudar para o campo ou procurar um apartamento com jardim.'],
        ['Mia', 'Sowohl die Stadt als auch das Land haben Vorteile.', 'Tanto a cidade quanto o campo têm vantagens.'], ['Jonas', 'Stimmt. Wir müssen uns nicht sofort entscheiden.', 'É verdade. Não precisamos decidir já.'],
      ]),
      producao(5, 'Debata em voz alta um tema à sua escolha (cidade ou campo, trabalho ou estudo), com pelo menos 4 pares de conectores.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um pequeno texto de opinião de 8 frases com pares de conectores.'),
      exercicios(20, [
        lacuna('Ich trinke entweder Tee ___ Kaffee.', ['oder', 'und', 'aber'], 'oder', 'entweder … oder.'), lacuna('Er kann ___ lesen noch schreiben.', ['weder', 'nicht', 'kein'], 'weder', 'weder … noch.'), lacuna('Sie spricht sowohl Deutsch ___ auch Englisch.', ['als', 'wie', 'und'], 'als', 'sowohl … als auch.'),
        lacuna('Ich spreche nicht nur Deutsch, ___ auch Spanisch.', ['sondern', 'aber', 'und'], 'sondern', 'nicht nur … sondern auch.'), lacuna('Einerseits ist es spannend, ___ ist es teuer.', ['andererseits', 'zwar', 'dagegen'], 'andererseits', 'einerseits … andererseits.'), lacuna('Das Hotel ist ___ teuer, aber zentral.', ['zwar', 'nur', 'weder'], 'zwar', 'zwar … aber.'),
        lacuna('Je mehr ich lerne, ___ besser verstehe ich.', ['desto', 'je', 'dann'], 'desto', 'je … desto.'), mc('«Weder … noch» exige a palavra:', ['nenhuma outra negação', '«nicht»', '«kein»'], 'nenhuma outra negação', 'Já é negação.'), mc('Em «je … desto», as duas partes usam:', ['o comparativo', 'o superlativo', 'o infinitivo'], 'o comparativo', 'je mehr, desto besser.'),
        mc('Na parte «je», o verbo vai:', ['para o fim', 'para a 2ª posição', 'para o começo'], 'para o fim', 'Subordinada.'), ordem('Ordene: «Quanto mais estudo, melhor entendo.»', ['Je', 'mehr', 'ich', 'lerne', 'desto', 'besser', 'verstehe', 'ich'], 'Je mehr ich lerne, desto besser verstehe ich.', 'je + verbo no fim; desto + comparativo + verbo.'), ouvir('Sowohl die Stadt als auch das Land haben Vorteile', ['Sowohl die Stadt als auch das Land haben Vorteile', 'Weder die Stadt noch das Land hat Vorteile', 'Entweder die Stadt oder das Land'], 'Sowohl die Stadt als auch das Land haben Vorteile', 'sowohl … als auch.'),
        ditado('Auf dem Land ist es weder laut noch teuer', 'weder … noch.'), livre('Escreva 5 frases: uma com entweder … oder, uma com weder … noch, uma com sowohl … als auch, uma com einerseits … andererseits e uma com je … desto.', 'Ich trinke entweder Tee oder Kaffee. Er kann weder lesen noch schreiben. Sie spricht sowohl Deutsch als auch Englisch. Einerseits ist es spannend, andererseits ist es teuer. Je mehr ich lerne, desto besser verstehe ich.'),
      ]),
      producao(5, 'Grave-se defendendo uma opinião com pares de conectores.'),
    ]),
  ],
});
