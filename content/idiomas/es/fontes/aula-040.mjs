import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 40, titulo: 'Futuro perfecto y probabilidad', nivel: 'b1',
  objetivo: 'Formar o futuro perfecto («habré terminado») para dizer o que já estará concluído num momento futuro e usá-lo, junto com o futuro simples, para fazer suposições sobre o presente e o passado recente («habrá llegado ya»).',
  nota: 'Você diz o que já terá acontecido até certo momento e faz suposições: «¿Dónde estará?», «Habrá perdido el autobús». Próxima aula: o condicional compuesto.',
  sessoes: [
    sessao('S1', 'Formar o futuro perfecto', [
      revisao(5, 'Diga em voz alta o futuro simples de hablar, comer e vivir na primeira pessoa e na terceira («hablaré, hablará…»). Depois diga cinco particípios, entre eles um irregular.'),
      palavras(8, [
        ['para el viernes', '', 'até sexta-feira', ''], ['para entonces', '', 'até lá, até então', ''], ['antes de las ocho', '', 'antes das oito', ''], ['dentro de una semana', '', 'dentro de uma semana', ''],
        ['a final de mes', '', 'no fim do mês', ''], ['para esa hora', '', 'até essa hora', ''], ['ya habré terminado', '', 'já terei terminado', ''], ['todavía no habré llegado', '', 'ainda não terei chegado', ''],
      ]),
      gramatica(12, 'Habré + particípio: o que já terá acontecido', 'PASSO 1: imagine uma data no futuro, por exemplo, sexta-feira. Em português dizemos «Até sexta, já terei terminado o relatório». Esse «terei terminado» é o futuro perfecto. PASSO 2: o espanhol o forma com o futuro simples de «haber» + particípio: «habré terminado». PASSO 3: o futuro de «haber» é: habré, habrás, habrá, habremos, habréis, habrán. Quatro delas levam acento (habré, habrás, habrá, habréis); «habremos» não leva. PASSO 4: o particípio é o mesmo de sempre (hablado, comido, vivido; hecho, dicho, visto, puesto, escrito, abierto, vuelto…) e NUNCA concorda com o sujeito. PASSO 5: use o futuro perfecto para dizer que uma ação estará concluída antes de um momento do futuro. Os marcadores típicos são «para + momento» («para el viernes», «para entonces») e «antes de + momento» («antes de las ocho»). PASSO 6: compare as ideias: «terminaré el informe» (vou terminá-lo, algum dia) e «habré terminado el informe para el viernes» (na sexta ele já estará pronto). PASSO 7: negação e pronomes ficam antes do auxiliar: «No habré terminado», «Lo habré terminado». PASSO 8: na conversa do dia a dia, para planos concretos, muita gente prefere o presente («para el viernes lo tengo listo»). O futuro perfecto de plano aparece mais em textos e situações formais; o uso mais frequente é a suposição, que você vê na sessão seguinte.', {
        tag: 'Tempos compostos',
        comparacao: 'o português também tem o futuro composto: «terei terminado», «terá chegado». A estrutura é a mesma, só muda o auxiliar: «ter» no português, «haber» no espanhol. «Terei feito» = «habré hecho». Em português falado, esse tempo é pouco usado e muitas vezes se diz «já vou ter feito»; em espanhol a forma «habré hecho» é a correta.',
        tabela: [
          { pessoa: 'yo', forma: 'habré terminado', exemplo: 'Para el viernes habré terminado.' },
          { pessoa: 'tú', forma: 'habrás llegado', exemplo: 'Para las ocho ya habrás llegado.' },
          { pessoa: 'él, ella, usted', forma: 'habrá salido', exemplo: 'Antes de las nueve habrá salido.' },
          { pessoa: 'nosotros, nosotras', forma: 'habremos hecho', exemplo: 'Para entonces lo habremos hecho.' },
          { pessoa: 'vosotros, vosotras', forma: 'habréis vuelto', exemplo: 'Para el lunes habréis vuelto.' },
          { pessoa: 'ellos, ellas, ustedes', forma: 'habrán escrito', exemplo: 'Para el martes habrán escrito.' },
        ],
        erros: [['Habre terminado para el viernes.', 'Habré terminado para el viernes.', 'O futuro de «haber» leva acento: habré, habrás, habrá, habréis.'], ['Para el viernes habré terminar el informe.', 'Para el viernes habré terminado el informe.', 'Depois de «haber» vem o particípio, não o infinitivo.'], ['Ellos habrán llegados.', 'Ellos habrán llegado.', 'O particípio com «haber» não concorda.'], ['Para el viernes terminado habré.', 'Para el viernes habré terminado.', 'Auxiliar e particípio ficam juntos e nessa ordem.']],
      }),
      producao(5, 'Diga cinco frases sobre o que você já terá feito até o fim da próxima semana: «Para el viernes habré terminado… Para el domingo habré leído…»'),
    ]),
    sessao('S2', 'Suposições: presente e passado recente', [
      revisao(4, 'Conjugue «habré salido» nas seis pessoas. Depois diga em voz alta duas frases que usem «para entonces» ou «antes de las ocho».'),
      palavras(6, [
        ['estar en camino', '', 'estar a caminho', ''], ['llegar tarde', '', 'chegar tarde', ''], ['el retraso', '', 'o atraso', ''], ['perder el autobús', '', 'perder o ônibus', ''], ['estropearse', '', 'estragar-se, quebrar', ''], ['sin batería', '', 'sem bateria', ''],
      ]),
      gramatica(12, 'Será que, deve ter: suposições com o futuro', 'PASSO 1: o futuro não serve só para falar do que vai acontecer. O espanhol também o usa para SUPOR algo sobre o agora: «Pablo estará en casa» (deve estar em casa). PASSO 2: o mesmo vale para perguntas: «¿Dónde estará Pablo?» quer dizer «Onde será que o Pablo está?». PASSO 3: para supor algo que já aconteceu há pouco, use o futuro perfecto: «Habrá llegado ya» (já deve ter chegado), «¿Habrá perdido el autobús?» (será que perdeu o ônibus?). PASSO 4: repare na diferença de certeza. «Ha llegado» afirma um fato. «Habrá llegado» é palpite. PASSO 5: o palpite pode ser negativo: «No habrá visto el mensaje» (deve não ter visto a mensagem). PASSO 6: uma alternativa é «deber de» + infinitivo: «Debe de estar en casa», «Debe de haber llegado». Na fala, muitas pessoas dizem apenas «debe estar» e «debe haber llegado» com o mesmo sentido; cuidado, porque «debes hacerlo» sem «de» é obrigação. PASSO 7: para um passado que já ficou longe, o espanhol usa o condicional na suposição: «Entonces tendría unos veinte años» (devia ter uns vinte anos). Você só precisa reconhecer. PASSO 8: palavras como «seguramente», «probablemente» e «supongo que» reforçam a suposição.', {
        tag: 'Tempos compostos',
        comparacao: 'o português costuma usar «deve» («deve estar em casa», «deve ter chegado») e «será que» («será que ele chegou?»). O espanhol também tem «deber de», mas o jeito mais natural é o futuro: «estará», «habrá llegado», e a pergunta «¿habrá llegado?». «Será que» não existe como estrutura em espanhol.',
        tabela: [
          { situacao: 'agora', certeza: 'Está en casa.', suposicao: 'Estará en casa.' },
          { situacao: 'pergunta sobre agora', certeza: '¿Dónde está?', suposicao: '¿Dónde estará?' },
          { situacao: 'passado recente', certeza: 'Ha llegado.', suposicao: 'Habrá llegado.' },
          { situacao: 'negação, passado recente', certeza: 'No ha visto el mensaje.', suposicao: 'No habrá visto el mensaje.' },
          { situacao: 'passado distante', certeza: 'Tenía veinte años.', suposicao: 'Tendría veinte años.' },
        ],
        erros: [['¿Será que ya ha llegado?', '¿Habrá llegado ya?', 'O «será que» do português não existe; o futuro perfecto faz esse papel.'], ['Ahora estaría en casa.', 'Ahora estará en casa.', 'Para supor algo sobre o agora, use o futuro. O condicional supõe sobre o passado.'], ['Debes de hacer los deberes.', 'Debes hacer los deberes.', 'Para obrigação, use «deber» sem «de»; «deber de» é suposição.'], ['Habrá llegar ya.', 'Habrá llegado ya.', 'Depois de «habrá» vem o particípio.']],
      }),
      producao(8, 'Imagine que um amigo não chegou ao encontro. Faça cinco suposições em voz alta: «Habrá perdido el autobús. Estará en camino. No habrá oído el despertador…»'),
    ]),
    sessao('S3', 'Esperando a Pablo', [
      revisao(4, 'Transforme em suposição: «Pablo está en casa», «Ha salido», «No ha visto el mensaje». Diga as três frases com o futuro.'),
      palavras(5, [
        ['seguramente', '', 'com certeza, provavelmente', ''], ['probablemente', '', 'provavelmente', ''], ['a lo mejor', '', 'talvez (coloquial)', ''], ['supongo que', '', 'suponho que', ''], ['seguro que', '', 'com certeza', ''],
      ]),
      gramatica(8, 'Palavras que acompanham a suposição', 'PASSO 1: a suposição pode ter ajuda de uma expressão: «seguramente, probablemente, supongo que, me imagino que, seguro que». PASSO 2: depois de «supongo que», «me imagino que» e «seguro que», use o indicativo, como você já faz: «Supongo que ha llegado», «Seguro que viene de camino». PASSO 3: «a lo mejor» é muito coloquial e quer dizer «talvez». Também pede o indicativo: «A lo mejor ha perdido el autobús». PASSO 4: «quizá» e «tal vez» são outras formas de dizer «talvez», mas elas pedem outra forma do verbo, que você aprende na aula 43. Por enquanto, use «a lo mejor». PASSO 5: quando você usa uma dessas expressões, o futuro fica opcional: «Seguramente habrá llegado» e «Seguro que ha llegado» são ambas naturais. PASSO 6: para ligar suposições, use «o», «y», «como»: «O no ha oído el despertador, o ha perdido el autobús».', {
        tag: 'Expressões',
        comparacao: 'em português, «talvez» e «provavelmente» passam sem problemas. «Provavelmente» e «seguramente» se comportam igual em espanhol. A novidade é que «a lo mejor» (talvez) pede o indicativo, e «quizá» e «tal vez» pedirão outra forma do verbo na aula 43.',
        exemplos: [['Seguramente habrá llegado ya.', 'Provavelmente já chegou.'], ['Supongo que ha perdido el autobús.', 'Suponho que perdeu o ônibus.'], ['A lo mejor tiene el móvil sin batería.', 'Talvez esteja com o celular sem bateria.'], ['Seguro que viene de camino.', 'Com certeza está vindo.'], ['Me imagino que no ha visto mi mensaje.', 'Imagino que não viu minha mensagem.']],
        erros: [['A lo mejor está sin batería, quizá.', 'A lo mejor está sin batería.', 'Basta uma só palavra de dúvida por frase.'], ['Supongo que habrá que llegado.', 'Supongo que ha llegado.', 'Depois de «supongo que», use o verbo normal, no indicativo.'], ['Seguro de que viene.', 'Seguro que viene.', 'Como expressão solta, «seguro que» não leva «de».']],
      }),
      dialogo(8, 'Esperando a Pablo / Esperando o Pablo', 'Carmen e Javier esperam Pablo na porta do cinema. Já passou do horário.', [
        ['Carmen', 'Son las nueve y media y Pablo todavía no ha llegado. ¿Dónde estará?', 'São nove e meia e o Pablo ainda não chegou. Onde será que está?'],
        ['Javier', 'Habrá perdido el autobús, como siempre.', 'Deve ter perdido o ônibus, como sempre.'],
        ['Carmen', 'O no habrá oído el despertador. Le he llamado dos veces y no contesta.', 'Ou não deve ter ouvido o despertador. Liguei duas vezes e ele não atende.'],
        ['Javier', 'A lo mejor tiene el móvil sin batería. Seguro que viene de camino.', 'Talvez esteja com o celular sem bateria. Com certeza está a caminho.'],
        ['Carmen', '¿Y si se ha confundido de cine? Hay dos cerca de aquí.', 'E se ele se enganou de cinema? Há dois perto daqui.'],
        ['Javier', 'Ya habrá visto mi mensaje. Le escribí hace diez minutos.', 'Já deve ter visto a minha mensagem. Escrevi para ele há dez minutos.'],
        ['Pablo', 'Perdonad el retraso. Se me ha estropeado la bici y he venido andando.', 'Desculpem o atraso. A minha bicicleta quebrou e eu vim a pé.'],
        ['Carmen', 'Pues habrás venido corriendo.', 'Então deve ter vindo correndo.'],
        ['Pablo', 'Casi. Necesito sentarme un momento.', 'Quase. Preciso me sentar um momento.'],
      ]),
      producao(5, 'Escreva quatro frases de suposição sobre alguém da sua família que ainda não respondeu uma mensagem. Use «habrá», «estará» e «a lo mejor».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 40', [
      revisao(5, 'Diga em voz alta três frases de plano com o futuro perfecto («para el viernes habré…») e três de suposição («habrá llegado…», «estará…»).'),
      exercicios(20, [
        ouvir('Habré terminado para el viernes', ['Habré terminado para el viernes', 'Habrá terminado para el viernes', 'Había terminado para el viernes'], 'Habré terminado para el viernes', 'Ouça a terminação: «habré» (eu) é diferente de «habrá» (ele) e de «había» (passado).'),
        ouvir('¿Habrá llegado ya?', ['¿Habrá llegado ya?', '¿Ha llegado ya?', '¿Habrán llegado ya?'], '¿Habrá llegado ya?', '«Habrá» (futuro) marca a suposição; «ha» afirma o fato.'),
        ouvir('Estará en casa', ['Estará en casa', 'Estaba en casa', 'Está en casa'], 'Estará en casa', 'O futuro «estará» também serve para supor algo sobre o presente.'),
        ditado('Habremos llegado antes de las ocho', 'Escreva: Habremos llegado antes de las ocho. «Habremos» não leva acento.'),
        ditado('Habrá perdido el autobús', 'Escreva: Habrá perdido el autobús. «Habrá» leva acento no final.'),
        mc('Como se diz «nós teremos terminado»?', ['habremos terminado', 'habíamos terminado', 'hemos terminado'], 'habremos terminado', 'Futuro de «haber» (habremos) + particípio.'),
        mc('«Habrá llegado ya» costuma significar…', ['Já deve ter chegado.', 'Já chegou, tenho certeza.', 'Já tinha chegado.'], 'Já deve ter chegado.', 'O futuro perfecto indica palpite sobre algo que já aconteceu.'),
        mc('Qual destas frases supõe algo sobre o AGORA?', ['Estará en casa.', 'Estaba en casa.', 'Ha estado en casa.'], 'Estará en casa.', 'O futuro simples faz suposição sobre o presente.'),
        mc('Qual frase expressa obrigação, e não suposição?', ['Debes hacer los deberes.', 'Debes de estar cansado.', 'Debe de haber llegado.'], 'Debes hacer los deberes.', '«Deber» sem «de» é obrigação; «deber de» é suposição.'),
        mc('Como se pergunta «Onde será que ele está?»', ['¿Dónde estará?', '¿Será que dónde está?', '¿Dónde está será?'], '¿Dónde estará?', 'Em espanhol, o futuro faz o papel de «será que».'),
        lacuna('Para el viernes ya ___ el informe. (terei terminado)', ['habré terminado', 'había terminado', 'he terminado'], 'habré terminado', 'Ação concluída antes de um momento futuro: futuro perfecto.'),
        lacuna('Ellos ___ llegado ya. (devem ter chegado)', ['habrán', 'habían', 'habréis'], 'habrán', 'Terceira pessoa do plural no futuro: «habrán».'),
        lacuna('Son las diez: Marta ___ en casa. (deve estar)', ['estará', 'estaba', 'habrá estado'], 'estará', 'Suposição sobre o presente: futuro simples.'),
        lacuna('Tú ya ___ visto el mensaje. (já deve ter visto)', ['habrás', 'habías', 'has'], 'habrás', 'Segunda pessoa do singular no futuro: «habrás».'),
        lacuna('A lo mejor Pablo ___ el autobús. (perdeu)', ['ha perdido', 'haber perdido', 'perdiendo'], 'ha perdido', '«A lo mejor» é seguido de verbo no indicativo.'),
        ordem('Ordene: «Para las ocho ya habré salido.»', ['Para', 'las', 'ocho', 'ya', 'habré', 'salido.'], 'Para las ocho ya habré salido.', '«Ya» fica antes do auxiliar.'),
        ordem('Ordene: «¿Dónde estará Pablo?»', ['¿Dónde', 'estará', 'Pablo?'], '¿Dónde estará Pablo?', 'Pergunta com futuro de suposição.'),
        ordem('Ordene: «Habrá perdido el autobús, como siempre.»', ['Habrá', 'perdido', 'el', 'autobús,', 'como', 'siempre.'], 'Habrá perdido el autobús, como siempre.', 'Auxiliar e particípio juntos.'),
        livre('Escreva em espanhol: Até as seis, já terei terminado.', 'Para las seis, ya habré terminado.'),
        livre('Escreva em espanhol: Será que ele já chegou?', '¿Habrá llegado ya?'),
      ]),
      producao(5, 'Conte em voz alta o que você terá feito até o fim do ano e faça duas suposições sobre o que seus amigos estarão fazendo agora.'),
    ]),
  ],
});
