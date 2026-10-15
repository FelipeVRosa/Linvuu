import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 23, titulo: 'Pronomes diretos', nivel: 'a2',
  objetivo: 'Usar mi, ti, lo, la, ci, vi, li, le no lugar do objeto direto, posicioná-los com verbos simples, modais e passato prossimo, e fazer a concordância do particípio.',
  nota: 'Você evita repetir o objeto com lo, la, li e le. Próxima aula: os pronomes indiretos (gli, le, loro).',
  sessoes: [
    sessao('S1', 'Lo, la, li, le', [
      revisao(5, 'Diga em voz alta cinco frases com objeto direto: «Compro il pane. Vedo Marta. Mangio le mele…»'),
      palavras(8, [
        ['lo', 'lo', 'o (masculino singular)', ''], ['la', 'la', 'a (feminino singular)', ''], ['li', 'li', 'os', ''], ['le', 'le', 'as', ''], ['mi, ti', 'mi, ti', 'me, te', ''], ['ci, vi', 'tchi, vi', 'nos, vos (vocês)', ''], ['conoscere', 'konóxere', 'conhecer', ''], ['aiutare', 'ayutáre', 'ajudar', ''],
      ]),
      gramatica(12, 'O pronome de objeto direto', 'PASSO 1: o objeto direto responde a «quem?» ou «o quê?», sem preposição: «Vedo Marco», «Compro il pane». PASSO 2: para não repetir, troque por um pronome, que vem ANTES do verbo conjugado: «Lo vedo», «Lo compro». PASSO 3: as formas são mi, ti, lo, la, ci, vi, li, le. Para a terceira pessoa: lo (masculino singular), la (feminino singular), li (masculino plural), le (feminino plural). PASSO 4: «lo» e «la» se elidem antes de vogal ou «h»: «L\'ho visto», «L\'ho chiamata», «L\'aiuto». «Li» e «le» não se elidem. PASSO 5: com «Lei» de cortesia, o pronome é «La» (maiúsculo na escrita formal): «La chiamo domani, signora.» PASSO 6: a negação vem antes do pronome: «Non lo conosco». PASSO 7: o pronome serve para pessoas e coisas: «Lo conosco» (conheço-o) e «Lo mangio» (como-o). PASSO 8: «lo» também retoma uma ideia inteira: «Lo so» (eu sei), «Non lo so» (não sei), «Lo penso anch\'io» (também penso assim).', {
        tag: 'Pronomes',
        comparacao: 'o português coloca o pronome de objeto direto depois do verbo na fala informal («eu vejo ele», «eu comprei ele») e antes na escrita formal («eu o vejo»). O italiano não usa o pronome tônico na frase neutra: dizer «vedo lui» enfatiza e muda o sentido. A frase neutra é «lo vedo», sempre com o pronome antes do verbo. Outro cuidado: «lo so» em italiano corresponde a «eu sei» (sem objeto expresso em português).',
        tabela: [
          { pessoa: 'eu', pronome: 'mi', exemplo: 'Mi chiami domani?' }, { pessoa: 'tu', pronome: 'ti', exemplo: 'Ti aspetto qui.' }, { pessoa: 'ele / Lei (cortesia)', pronome: 'lo / La', exemplo: 'Lo conosco. / La chiamo domani.' }, { pessoa: 'ela', pronome: 'la', exemplo: 'La vedo spesso.' },
          { pessoa: 'nós', pronome: 'ci', exemplo: 'Ci invitano a cena.' }, { pessoa: 'vocês', pronome: 'vi', exemplo: 'Vi ascolto.' }, { pessoa: 'eles', pronome: 'li', exemplo: 'Li conosco bene.' }, { pessoa: 'elas', pronome: 'le', exemplo: 'Le vedo ogni giorno.' },
        ],
        erros: [['Vedo lo ogni giorno.', 'Lo vedo ogni giorno.', 'O pronome vem antes do verbo conjugado.'], ['Conosco lei.', 'La conosco.', 'Frase neutra: pronome átono. «Conosco lei» enfatiza.'], ['Non conosco lo.', 'Non lo conosco.', 'Negação + pronome + verbo.'], ['Ho mele: lo mangio.', 'Ho mele: le mangio.', 'Para «as maçãs», o pronome é «le».']],
      }),
      producao(5, 'Troque o objeto pelo pronome, em voz alta: «Vedo Marco → Lo vedo. Compro la borsa → …» (faça seis).'),
    ]),
    sessao('S2', 'Pronomes e tempos compostos', [
      revisao(4, 'Diga os oito pronomes diretos: mi, ti, lo, la, ci, vi, li, le.'),
      palavras(6, [
        ['invitare', 'invitáre', 'convidar', ''], ['chiamare', 'kiamáre', 'chamar, ligar para', ''], ['cercare', 'tcherkáre', 'procurar', ''], ['incontrare', 'inkontráre', 'encontrar', ''], ['dimenticare', 'dimentikáre', 'esquecer', ''], ['ascoltare', 'askoltáre', 'escutar', ''],
      ]),
      gramatica(12, 'Posição e concordância', 'PASSO 1: no passato prossimo, o pronome vem antes do auxiliar: «Ho visto Marco» → «L\'ho visto». PASSO 2: com lo, la, li e le, o particípio concorda com o pronome: «L\'ho visto» (Marco), «L\'ho vista» (Giulia), «Li ho visti» (os rapazes), «Le ho viste» (as moças). PASSO 3: com mi, ti, ci e vi, a concordância é opcional, e é preferível não se preocupar: «Mi ha chiamato/chiamata». PASSO 4: com um verbo modal (potere, volere, dovere) mais infinitivo, há duas posições: o pronome antes do modal, ou preso ao infinitivo, que perde o «-e» final: «Lo voglio vedere» = «Voglio vederlo»; «Non posso chiamarla» = «Non la posso chiamare». PASSO 5: depois de um infinitivo simples, o pronome também gruda: «È bello vederlo», «Ho bisogno di aiutarti». PASSO 6: com «ecco», o pronome também gruda: «Eccolo!», «Eccomi!», «Eccoli!» PASSO 7: perguntas: «Hai visto Anna? Sì, l\'ho vista ieri.» PASSO 8: frase com número: «Quanti libri hai comprato? Li ho comprati tutti.»', {
        tag: 'Pronomes',
        comparacao: 'em português o particípio do pretérito composto não varia («eu o tenho visto»). Em italiano, o particípio concorda com «lo, la, li, le» quando eles vêm antes: «L\'ho vista». A concordância parece estranha ao brasileiro, mas é só um «-a», «-i» ou «-e» final.',
        tabela: [
          { frase: 'Ho visto Marco.', com_pronome: 'L\'ho visto.', observacao: 'masculino singular' }, { frase: 'Ho visto Giulia.', com_pronome: 'L\'ho vista.', observacao: 'feminino singular' }, { frase: 'Ho visto i ragazzi.', com_pronome: 'Li ho visti.', observacao: 'masculino plural' }, { frase: 'Ho visto le ragazze.', com_pronome: 'Le ho viste.', observacao: 'feminino plural' }, { frase: 'Voglio chiamare Luca.', com_pronome: 'Lo voglio chiamare. / Voglio chiamarlo.', observacao: 'modal + infinitivo' },
        ],
        erros: [['Ho vista Giulia ieri, l\'ho visto.', 'Ho visto Giulia ieri, l\'ho vista.', 'Com o pronome antes, o particípio concorda: Giulia, «vista».'], ['Li ho visto.', 'Li ho visti.', 'Plural masculino: «visti».'], ['Voglio vedere lo.', 'Voglio vederlo.', 'O pronome gruda ao infinitivo, sem espaço.'], ['Posso chiamarlo la?', 'Posso chiamarla?', 'Para feminino, «la».']],
      }),
      producao(8, 'Responda em voz alta com pronome: «Hai visto Marco? Hai comprato i biglietti? Hai chiamato Elena? Hai preso le chiavi?» Use «l\'ho», «li ho» e «le ho».'),
    ]),
    sessao('S3', 'Pronomes na conversa', [
      revisao(4, 'Diga três frases com pronome e passato prossimo, concordando o particípio.'),
      palavras(5, [
        ['conoscere', 'konóxere', 'conhecer', ''], ['portare', 'portáre', 'levar, trazer', ''], ['aspettare', 'aspettáre', 'esperar', ''], ['salutare', 'salutáre', 'cumprimentar', ''], ['prendere', 'préndere', 'pegar, tomar', ''],
      ]),
      gramatica(8, 'O pronome em perguntas e respostas', 'PASSO 1: nas respostas curtas, o pronome retoma o objeto da pergunta: «Conosci Paolo? Sì, lo conosco.» PASSO 2: com a pergunta de escolha, mantém-se: «Prendi il caffè o il tè? Lo prendo senza zucchero.» PASSO 3: com cortesia, «La» corresponde ao Lei, e «Mi» ao falante: «Mi può aiutare? Certo, La aiuto volentieri.» PASSO 4: quando o objeto é uma ideia e não uma coisa, usa-se «lo»: «Sai che Marco parte? Sì, lo so.» PASSO 5: «ti» e «mi» na vida cotidiana: «Ti chiamo stasera», «Mi senti?» (você me ouve?), «Mi vedi?». PASSO 6: «ci» como objeto de «nós»: «Ci hanno invitati.» Cuidado: este «ci» é pronome de objeto, diferente do «ci» de lugar (aula 25). PASSO 7: expressões úteis: «Ti ascolto», «Ti capisco», «Non ti sento», «Lo so», «Non lo so».', {
        tag: 'Pronomes',
        comparacao: 'em português a resposta curta costuma repetir só o verbo («Você conhece o Paulo? Conheço.»). Em italiano, a resposta natural leva o pronome: «Lo conosco». A frase «Conosco» sozinha soa incompleta. Isso vale também para «sim, eu sei»: «Sì, lo so», e não só «Sì, so».',
        tabela: [
          { pergunta: 'Conosci Paolo?', resposta: 'Sì, lo conosco.' }, { pergunta: 'Hai invitato Elena?', resposta: 'Sì, l\'ho invitata.' }, { pergunta: 'Prendi i biglietti?', resposta: 'Sì, li prendo io.' }, { pergunta: 'Mi senti?', resposta: 'Sì, ti sento bene.' }, { pergunta: 'Sa che Marco parte?', resposta: 'Sì, lo so.' },
        ],
        erros: [['Sì, conosco.', 'Sì, lo conosco.', 'A resposta natural leva o pronome.'], ['Sì, so.', 'Sì, lo so.', 'O «lo» retoma a ideia.'], ['Mi senti? Sì, sento ti.', 'Mi senti? Sì, ti sento.', 'O pronome vem antes do verbo conjugado.'], ['Ho invitato lei.', 'L\'ho invitata.', 'Pronome átono, com concordância.']],
      }),
      dialogo(8, 'Preparativi per la festa / Preparativos para a festa', 'Elena e Davide organizam uma festa de aniversário.', [
        ['Elena', 'Davide, hai invitato Paolo e Marta?', 'Davide, você convidou o Paolo e a Marta?'], ['Davide', 'Sì, li ho invitati ieri. Ho anche chiamato i tuoi cugini.', 'Sim, convidei-os ontem. Também liguei para os seus primos.'], ['Elena', 'Bene. E la torta? L\'hai ordinata?', 'Ótimo. E o bolo? Você o encomendou?'], ['Davide', 'Non ancora, ma posso ordinarla domani mattina.', 'Ainda não, mas posso encomendá-lo amanhã de manhã.'], ['Elena', 'Perfetto. E le bibite? Le compri tu?', 'Perfeito. E as bebidas? Você as compra?'], ['Davide', 'Sì, le compro sabato. Ti chiamo dal supermercato.', 'Sim, compro-as no sábado. Ligo para você do supermercado.'],
      ]),
      producao(5, 'Responda em voz alta usando pronomes: «Conosci un cantante italiano? Lo ascolti? Hai visto un film italiano?»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 23', [
      revisao(5, 'Diga em voz alta seis frases curtas com «lo», «la», «li» e «le» em respostas a perguntas.'),
      exercicios(20, [
        ouvir('Lo conosco bene', ['Lo conosco bene', 'Conosco lui bene', 'La conosco bene'], 'Lo conosco bene', 'Pronome antes do verbo.'), ouvir('L\'ho vista ieri', ['L\'ho vista ieri', 'L\'ho visto ieri', 'Li ho visti ieri'], 'L\'ho vista ieri', 'Particípio no feminino.'), ouvir('Voglio chiamarla stasera', ['Voglio chiamarla stasera', 'Voglio chiamarlo stasera', 'La voglio chiamarla'], 'Voglio chiamarla stasera', 'Pronome preso ao infinitivo.'),
        ditado('Non lo so', 'Escreva: Non lo so.'), ditado('Li ho comprati tutti', 'Escreva: Li ho comprati tutti.'), ditado('Eccolo', 'Escreva: Eccolo.'),
        mc('Qual pronome retoma «le chiavi»?', ['le', 'li', 'la'], 'le', 'Feminino plural: le.'), mc('Como dizer «eu a vi» (Giulia)?', ['L\'ho vista.', 'L\'ho visto.', 'La ho visto.'], 'L\'ho vista.', 'Elisão + concordância.'), mc('Qual frase está correta?', ['Lo voglio comprare.', 'Voglio comprare lo.', 'Voglio lo comprare.'], 'Lo voglio comprare.', 'Pronome antes do modal.'), mc('«Eu sei» (resposta a «Sai che parte?»):', ['Sì, lo so.', 'Sì, so.', 'Sì, so lo.'], 'Sì, lo so.', 'O «lo» retoma a ideia.'),
        lacuna('Hai visto Elena? Sì, ___ vista ieri.', ['l\'ho', 'la ho', 'lo ho'], 'l\'ho', 'Elisão antes de «ho» e particípio no feminino.'), lacuna('Quanti libri? ___ ho letti tutti.', ['Li', 'Le', 'Lo'], 'Li', 'Masculino plural.'), lacuna('Mi senti? Sì, ___ sento bene.', ['ti', 'mi', 'lo'], 'ti', 'Resposta ao «mi».'), lacuna('Posso aiutar___? (você, informal)', ['ti', 'lo', 'mi'], 'ti', 'Para «tu»: ti, preso ao infinitivo.'),
        ordem('Ordene: «Non lo conosco bene.»', ['Non', 'lo', 'conosco', 'bene.'], 'Non lo conosco bene.', 'Negação + pronome + verbo.'), ordem('Ordene: «Le ho invitate ieri.»', ['Le', 'ho', 'invitate', 'ieri.'], 'Le ho invitate ieri.', 'Pronome + auxiliar + particípio concordando.'),
        livre('Escreva em italiano: Você viu o Marco? Sim, eu o vi ontem e o convidei para a festa.', 'Hai visto Marco? Sì, l\'ho visto ieri e l\'ho invitato alla festa.'),
        lacuna('Compro le mele: ___ compro. (as)', ['Li', 'Lo', 'Le'], 'Le', '«Mele» é feminino plural: pronome «le».'),
        lacuna('Ho invitato i cugini: ___ ho invitati. (os)', ['Li', 'Le', 'Lo'], 'Li', 'Masculino plural: «li», e o particípio concorda.'),
        lacuna('Vi chiamo domani? — Sì, ___ chiami domani. (nos)', ['ti', 'ci', 'vi'], 'ci', 'Quem responde fala em «nós»; o pronome é «ci».'),
        lacuna('Voglio vedere Anna: voglio ___. (vê-la)', ['vederlo', 'vederla', 'vedere la'], 'vederla', 'Com infinitivo o pronome se une ao verbo; «Anna» é feminino: «-la».'),
        lacuna('Hai preso le chiavi? Sì, ___ ho prese. (as)', ['li', 'le', 'lo'], 'le', 'Feminino plural: «le», e o particípio concorda: «prese».'),
        mc('Qual pronome retoma «i biglietti»?', ['li', 'le', 'lo'], 'li', '«Biglietti» é masculino plural.'),
        mc('Qual frase está correta no passado?', ['Li ho visto.', 'Ho li visti.', 'Li ho visti.'], 'Li ho visti.', 'O pronome vem antes do auxiliar e o particípio concorda.'),
        mc('Como se diz «Quero ajudá-lo»?', ['Voglio aiutare lo.', 'Voglio aiutarlo.', 'Lo voglio aiutarlo.'], 'Voglio aiutarlo.', 'O pronome se une ao infinitivo.'),
        mc('Como se diz «Eu a espero aqui» (Giulia)?', ['Lo aspetto qui.', 'Aspetto la qui.', 'La aspetto qui.'], 'La aspetto qui.', 'O pronome vem antes do verbo conjugado, no feminino: «la».'),
        ordem('Ordene: «Li ho incontrati al bar ieri.»', ['Li', 'ho', 'incontrati', 'al', 'bar', 'ieri.'], 'Li ho incontrati al bar ieri.', '«Li» exige o particípio no plural: «incontrati».'),
        ordem('Ordene: «Ti chiamo domani mattina.»', ['Ti', 'chiamo', 'domani', 'mattina.'], 'Ti chiamo domani mattina.', 'O pronome átono vem antes do verbo.'),
        livre('Escreva em italiano: Você conhece a Anna? Sim, eu a conheço bem.', 'Conosci Anna? Sì, la conosco bene.'),
        livre('Escreva em italiano: Comprei as maçãs e as comi.', 'Ho comprato le mele e le ho mangiate.'),
      ]),
      producao(5, 'Faça seis perguntas em voz alta a um amigo e responda com pronomes: «Hai visto…? Sì, l\'ho…»'),
    ]),
  ],
});
