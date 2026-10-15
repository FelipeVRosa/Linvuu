import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 26, titulo: 'Comparativos e superlativos', nivel: 'a2',
  objetivo: 'Comparar pessoas e coisas com più, meno, tanto quanto e così come, escolher entre «di» e «che», formar o superlativo relativo e absoluto e usar migliore, peggiore, meglio e peggio.',
  nota: 'Você compara e destaca com precisão. Próxima aula: o futuro semplice.',
  sessoes: [
    sessao('S1', 'Più e meno: di ou che', [
      revisao(5, 'Descreva em voz alta duas pessoas da sua família com três adjetivos cada: «Mia sorella è alta, simpatica…»'),
      palavras(8, [
        ['più', 'piú', 'mais', ''], ['meno', 'méno', 'menos', ''], ['alto, basso', 'álto, básso', 'alto, baixo', ''], ['giovane, vecchio', 'djóvane, vékkio', 'jovem, velho', ''], ['veloce, lento', 'velótche, lénto', 'rápido, lento', ''], ['caro, economico', 'káro, ekonómiko', 'caro, barato', ''], ['pesante, leggero', 'pesánte, leddjéro', 'pesado, leve', ''], ['comodo, scomodo', 'kómodo, skómodo', 'cômodo, incômodo', ''],
      ]),
      gramatica(12, 'Comparativo de superioridade e inferioridade', 'PASSO 1: para dizer que algo tem mais ou menos de uma qualidade, use «più» ou «meno» antes do adjetivo: «Marco è più alto», «Giulia è meno stanca». PASSO 2: o segundo termo da comparação vem depois de «di» ou «che». PASSO 3: use «di» quando o segundo termo é um substantivo, um pronome ou um nome, sem outro verbo: «Marco è più alto di Luca», «Sei più veloce di me» (pronome tônico: me, te, lui, lei, noi, voi, loro). PASSO 4: use «che» quando você compara duas qualidades da mesma coisa, dois substantivos, dois infinitivos, dois advérbios ou duas expressões com preposição: «È più simpatico che bello», «Ho più libri che amici», «È più facile parlare che scrivere», «Lavoro più a casa che in ufficio». PASSO 5: quando depois da comparação vem uma frase inteira com verbo conjugado, usa-se «di quanto» ou «di quello che»; essa construção costuma pedir o congiuntivo e fica para o B1. PASSO 6: quantidades exatas pedem «di» e não «che»: «Ho più di venti libri», «Costa meno di dieci euro». PASSO 7: a diferença pode ser medida com «molto», «un po\'», «ancora»: «molto più caro», «un po\' meno stanco», «ancora più bello».', {
        tag: 'Comparação',
        comparacao: 'o português usa «do que» ou «que» para os dois casos («mais alto que o Luca», «mais simpático que bonito»). O italiano distingue: «di» com um nome ou pronome, «che» entre elementos do mesmo tipo. A regra é rígida e o brasileiro erra com frequência, dizendo «che» para tudo. Dica rápida: se os dois termos são da mesma classe (dois adjetivos, dois substantivos, dois infinitivos), use «che».',
        tabela: [
          { regra: 'di (nome ou pronome)', frase: 'Marco è più alto di Luca.', observacao: 'dois seres, mesma qualidade' }, { regra: 'di (pronome tônico)', frase: 'Sei più veloce di me.', observacao: 'me, te, lui, lei' }, { regra: 'che (dois adjetivos)', frase: 'È più simpatico che bello.', observacao: 'duas qualidades' }, { regra: 'che (dois substantivos)', frase: 'Ho più libri che amici.', observacao: 'duas coisas' }, { regra: 'che (dois infinitivos)', frase: 'È più facile parlare che scrivere.', observacao: 'dois verbos' }, { regra: 'di (número)', frase: 'Ho più di venti libri.', observacao: 'quantidade exata' },
        ],
        erros: [['Marco è più alto che Luca.', 'Marco è più alto di Luca.', 'Dois nomes: «di».'], ['È più bello di simpatico.', 'È più bello che simpatico.', 'Dois adjetivos: «che».'], ['Ho più che venti libri.', 'Ho più di venti libri.', 'Com número: «di».'], ['Sei più veloce che io.', 'Sei più veloce di me.', 'Pronome tônico depois de «di»: me.']],
      }),
      producao(5, 'Compare em voz alta quatro pares: duas pessoas, duas cidades, dois alimentos e dois dias da semana, com «più» ou «meno».'),
    ]),
    sessao('S2', 'Igualdade e superlativo', [
      revisao(4, 'Diga quando se usa «di» e quando se usa «che» em um comparativo, com um exemplo de cada.'),
      palavras(6, [
        ['tanto… quanto', 'tánto kuánto', 'tanto quanto', ''], ['così… come', 'kosí kóme', 'tão… quanto', ''], ['il più', 'il piú', 'o mais', ''], ['il meno', 'il méno', 'o menos', ''], ['bellissimo', 'bellíssimo', 'belíssimo', ''], ['molto bello', 'mólto béllo', 'muito belo', ''],
      ]),
      gramatica(12, 'Igualdade, superlativo relativo e absoluto', 'PASSO 1: igualdade: «così… come» ou «tanto… quanto» com adjetivo: «Luca è alto come Marco», «Giulia è tanto brava quanto Sofia». Na fala, só «come» ou «quanto» já basta: «alto come lui». PASSO 2: com substantivo, «tanto/a/i/e… quanto» concorda: «Ho tanti libri quanti amici.» PASSO 3: igualdade negativa: «Non è così alto come Marco» (menos alto). PASSO 4: o superlativo relativo é «il più» ou «il meno» + adjetivo, com o artigo concordando, e a comparação com «di» ou «tra»: «Marco è il più alto della classe», «Giulia è la più simpatica tra le amiche», «Sono i migliori del mondo». PASSO 5: com o substantivo expresso, o artigo fica antes dele e «più» vem depois: «la ragazza più alta», «il libro più interessante». PASSO 6: o superlativo absoluto diz «muitíssimo» e se forma de duas maneiras: «molto» + adjetivo («molto bello») ou o sufixo -issimo/a/i/e («bellissimo», «bellissima»). PASSO 7: os adjetivos em -co e -go ganham um «h» para manter o som duro: «ricco → ricchissimo», «stanco → stanchissimo», «lungo → lunghissimo» (mas «simpatico → simpaticissimo»). Os adjetivos em -io perdem o «i»: «vecchio → vecchissimo». PASSO 8: o advérbio também faz superlativo: «benissimo», «malissimo», «prestissimo», «tardissimo». PASSO 9: «il più possibile» e «il meno possibile»: «Dormo il più possibile».', {
        tag: 'Comparação',
        comparacao: 'em português o superlativo relativo é «o mais… de/da», e a comparação com «do» segue as mesmas ideias. O italiano é parecido: artigo + «più» + adjetivo + «di» ou «tra»: «la più alta della classe». O superlativo absoluto também lembra o português «-íssimo»: «belíssimo» é «bellissimo». Atenção à dupla consoante de «bellissimo» e ao «ch» de «ricchissimo».',
        tabela: [
          { tipo: 'igualdade', frase: 'Luca è alto come Marco.', traducao: 'Luca é tão alto quanto Marco.' }, { tipo: 'superlativo relativo', frase: 'Giulia è la più brava della classe.', traducao: 'Giulia é a melhor da turma.' }, { tipo: 'superlativo relativo', frase: 'È il libro più interessante che ho letto.', traducao: 'É o livro mais interessante que li.' }, { tipo: 'absoluto com molto', frase: 'Il film è molto bello.', traducao: 'O filme é muito bom.' }, { tipo: 'absoluto com -issimo', frase: 'Il film è bellissimo.', traducao: 'O filme é belíssimo.' }, { tipo: 'absoluto, advérbio', frase: 'Sto benissimo.', traducao: 'Estou muito bem.' },
        ],
        erros: [['Giulia è più brava della classe.', 'Giulia è la più brava della classe.', 'Superlativo relativo leva artigo antes de «più».'], ['È molto bellissimo.', 'È bellissimo.', '«Molto» e «-issimo» não se juntam.'], ['È il più libro interessante.', 'È il libro più interessante.', 'Com o substantivo expresso, «più» vem depois dele.'], ['Sono stancissima.', 'Sono stanchissima.', 'O som duro do «c» exige «ch» antes de «-issimo».']],
      }),
      producao(8, 'Fale em voz alta de três coisas ou pessoas superlativas: «Il più alto… La più simpatica… Il posto più bello…»'),
    ]),
    sessao('S3', 'Migliore, peggiore, meglio, peggio', [
      revisao(4, 'Diga quatro superlativos relativos e quatro absolutos em -issimo.'),
      palavras(5, [
        ['migliore', 'milhóre', 'melhor (adjetivo)', ''], ['peggiore', 'peddjóre', 'pior (adjetivo)', ''], ['meglio', 'mélho', 'melhor (advérbio)', ''], ['peggio', 'péddjo', 'pior (advérbio)', ''], ['maggiore, minore', 'maddjóre, minóre', 'maior, menor (idade, importância)', ''],
      ]),
      gramatica(8, 'As formas irregulares', 'PASSO 1: «buono» tem comparativo regular («più buono») e irregular («migliore»). Ambos são corretos; «migliore» é mais comum ao falar de qualidade geral: «Questo vino è migliore di quello». PASSO 2: «cattivo» → «peggiore». PASSO 3: «grande» → «maggiore» (mais velho, mais importante, em registro formal) e «piccolo» → «minore». Para tamanho físico, use «più grande» e «più piccolo». «Mio fratello maggiore» é o irmão mais velho. PASSO 4: os advérbios «bene» e «male» têm formas próprias: «meglio» (melhor) e «peggio» (pior): «Sto meglio oggi», «Parli meglio di me». PASSO 5: não confunda adjetivo e advérbio: «È migliore» (qualidade) e «Va meglio» (modo). PASSO 6: a escolha entre «migliore» e «meglio» ainda aparece em «è meglio» (é melhor): «È meglio partire presto». PASSO 7: as formas de superlativo: «ottimo» (ótimo), «pessimo» (péssimo), «massimo» (máximo), «minimo» (mínimo): «Il servizio era ottimo».', {
        tag: 'Comparação',
        comparacao: 'o português usa a mesma palavra, «melhor», para o adjetivo («este é o melhor») e para o advérbio («ele fala melhor»). O italiano separa: «migliore» e «meglio». Para o brasileiro, a regra prática é: se a palavra modifica um verbo («parla meglio»), use «meglio»; se modifica um substantivo («il vino migliore»), use «migliore».',
        tabela: [
          { positivo: 'buono', comparativo: 'migliore', exemplo: 'Questo caffè è migliore.' }, { positivo: 'cattivo', comparativo: 'peggiore', exemplo: 'Il tempo è peggiore di ieri.' }, { positivo: 'bene (advérbio)', comparativo: 'meglio', exemplo: 'Oggi sto meglio.' }, { positivo: 'male (advérbio)', comparativo: 'peggio', exemplo: 'Parla peggio di me.' }, { positivo: 'grande (idade)', comparativo: 'maggiore', exemplo: 'Mia sorella maggiore vive a Roma.' }, { positivo: 'piccolo (idade)', comparativo: 'minore', exemplo: 'Mio fratello minore studia.' },
        ],
        erros: [['Parla migliore di me.', 'Parla meglio di me.', 'Modifica um verbo: advérbio «meglio».'], ['Questo è il vino meglio.', 'Questo è il vino migliore.', 'Modifica um substantivo: adjetivo «migliore».'], ['Oggi sto più bene.', 'Oggi sto meglio.', 'Bene → meglio, sem «più».'], ['È peggiore partire tardi.', 'È peggio partire tardi.', '«È peggio» + infinitivo.']],
      }),
      dialogo(8, 'Quale scegliamo? / Qual escolhemos?', 'Chiara e Stefano comparam dois apartamentos.', [
        ['Chiara', 'Stefano, guarda: questo appartamento è più grande di quello vicino al parco.', 'Stefano, olha: este apartamento é maior que o perto do parque.'], ['Stefano', 'Sì, ma è anche più caro e più lontano dal centro.', 'Sim, mas também é mais caro e mais longe do centro.'], ['Chiara', 'Però la cucina è molto più luminosa, e il quartiere è bellissimo.', 'Mas a cozinha é muito mais iluminada, e o bairro é lindíssimo.'], ['Stefano', 'Hai ragione, ma per me il primo è il migliore: è comodo e costa meno di mille euro.', 'Você tem razão, mas para mim o primeiro é o melhor: é cômodo e custa menos de mil euros.'], ['Chiara', 'Allora è meglio visitare ancora il primo prima di decidere.', 'Então é melhor visitar o primeiro mais uma vez antes de decidir.'], ['Stefano', 'D\'accordo. Domani ci andiamo con calma.', 'Combinado. Amanhã vamos lá com calma.'],
      ]),
      producao(5, 'Compare em voz alta dois lugares onde você pode morar ou passear, com «più», «meno», «migliore» e «meglio».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 26', [
      revisao(5, 'Compare em voz alta duas cidades, duas pessoas e dois filmes, com di, che, migliore e meglio.'),
      exercicios(20, [
        ouvir('Marco è più alto di Luca', ['Marco è più alto di Luca', 'Marco è più alto che Luca', 'Marco è alto come Luca'], 'Marco è più alto di Luca', 'Dois nomes: di.'), ouvir('È il ragazzo più simpatico della classe', ['È il ragazzo più simpatico della classe', 'È il ragazzo meno simpatico della classe', 'È il ragazzo simpatico come la classe'], 'È il ragazzo più simpatico della classe', 'Superlativo relativo.'), ouvir('Sto molto meglio oggi', ['Sto molto meglio oggi', 'Sto molto migliore oggi', 'Sto molto peggio oggi'], 'Sto molto meglio oggi', 'Advérbio: meglio.'),
        ditado('Il film è bellissimo', 'Escreva: Il film è bellissimo.'), ditado('Ho più libri che amici', 'Escreva: Ho più libri che amici.'), ditado('Sei più veloce di me', 'Escreva: Sei più veloce di me.'),
        mc('Qual está correta?', ['È più simpatico che bello.', 'È più simpatico di bello.', 'È più simpatico del bello.'], 'È più simpatico che bello.', 'Dois adjetivos: che.'), mc('«O melhor do mundo» em italiano:', ['il migliore del mondo', 'il meglio del mondo', 'il più bene del mondo'], 'il migliore del mondo', 'Adjetivo: migliore.'), mc('Qual está correta?', ['Costa meno di dieci euro.', 'Costa meno che dieci euro.', 'Costa meno da dieci euro.'], 'Costa meno di dieci euro.', 'Com número: di.'), mc('«Parla melhor do que eu»:', ['Parla meglio di me.', 'Parla migliore di me.', 'Parla più bene di me.'], 'Parla meglio di me.', 'Advérbio + pronome tônico.'),
        lacuna('Giulia è la ___ brava della classe.', ['più', 'meglio', 'molto'], 'più', 'Superlativo relativo.'), lacuna('Luca è alto ___ Marco.', ['come', 'di', 'che'], 'come', 'Igualdade.'), lacuna('Ho più amici ___ soldi.', ['che', 'di', 'come'], 'che', 'Dois substantivos.'), lacuna('Questa pizza è ___ (muito boa, -issima).', ['buonissima', 'molto buonissima', 'più buona'], 'buonissima', 'Superlativo absoluto.'),
        ordem('Ordene: «Marco è più giovane di Luca.»', ['Marco', 'è', 'più', 'giovane', 'di', 'Luca.'], 'Marco è più giovane di Luca.', 'Comparativo com di.'), ordem('Ordene: «Questo è il libro più bello.»', ['Questo', 'è', 'il', 'libro', 'più', 'bello.'], 'Questo è il libro più bello.', 'Superlativo relativo.'),
        livre('Escreva em italiano: Minha irmã é mais alta que eu, mas meu irmão é o mais simpático da família.', 'Mia sorella è più alta di me, ma mio fratello è il più simpatico della famiglia.'),
        lacuna('Sei più giovane ___ me. (do que)', ['che', 'di', 'da'], 'di', 'Com pronome tônico (me, te, lui…) a comparação usa «di».'),
        lacuna('Giulia è ___ stanca di Marco. (menos)', ['più', 'meno', 'così'], 'meno', '«Meno… di» indica inferioridade.'),
        lacuna('Questa è la casa ___ cara della città. (mais)', ['molto', 'tanto', 'più'], 'più', 'Superlativo relativo: artigo + «più» + adjetivo.'),
        lacuna('Oggi sto ___ di ieri. (melhor)', ['meglio', 'migliore', 'più bene'], 'meglio', 'Com «stare» (advérbio), a forma é «meglio»; «bene» não aceita «più».'),
        lacuna('Sono ___. (cansadíssima)', ['stancissima', 'stanchissima', 'stancchissima'], 'stanchissima', 'Em «-ca» o som duro se mantém com «h»: «stanchissima».'),
        mc('Qual é o comparativo de «buono» para qualidade geral?', ['migliore', 'meglio', 'più bene'], 'migliore', '«Migliore» é adjetivo; «meglio» é advérbio.'),
        mc('Qual frase está correta?', ['Ho più che venti libri.', 'Ho più di venti libri.', 'Ho di più venti libri.'], 'Ho più di venti libri.', 'Diante de números usa-se «di».'),
        mc('Como se diz «tão alto quanto Marco»?', ['alto come Marco', 'alto che Marco', 'più alto Marco'], 'alto come Marco', 'Igualdade: «come» ou «quanto».'),
        mc('O que significa «il più alto della classe»?', ['mais alto do que a turma', 'o mais alto da turma', 'tão alto quanto a turma'], 'o mais alto da turma', 'Superlativo relativo: artigo + «più» + adjetivo + «di» ou «tra».'),
        ordem('Ordene: «Mia sorella è più alta di me.»', ['Mia', 'sorella', 'è', 'più', 'alta', 'di', 'me.'], 'Mia sorella è più alta di me.', 'Comparativo com pronome tônico: «di me».'),
        ordem('Ordene: «Questo è il caffè migliore della città.»', ['Questo', 'è', 'il', 'caffè', 'migliore', 'della', 'città.'], 'Questo è il caffè migliore della città.', '«Migliore» é o comparativo irregular de «buono».'),
        livre('Escreva em italiano: Hoje estou pior do que ontem. Este vinho é melhor.', 'Oggi sto peggio di ieri. Questo vino è migliore.'),
        livre('Escreva em italiano: Marco é mais velho que Luca, mas é menos alto.', 'Marco è più vecchio di Luca, ma è meno alto.'),
      ]),
      producao(5, 'Fale em um minuto sobre as pessoas da sua família, comparando altura, idade e caráter.'),
    ]),
  ],
});
