import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 49, titulo: 'Passiva', nivel: 'b1',
  objetivo: 'Formar a passiva com «essere», «venire» e «andare» + particípio, escolher o tempo certo, indicar o agente com «da» e reconhecer a passiva em notícias, avisos e instruções.',
  nota: 'A passiva é muito frequente em notícias, avisos e textos formais. Atenção ao auxiliar duplo («è stato costruito») e à concordância do particípio. Próxima aula: gerundio e participio.',
  sessoes: [
    sessao('S1', 'Essere + particípio', [
      revisao(5, 'Diga em voz alta três frases ativas no passato prossimo, por exemplo: «Il sindaco ha inaugurato il ponte».'),
      palavras(8, [
        ['inaugurare', 'inauguráre', 'inaugurar', ''], ['costruire', 'kostruíre', 'construir', ''], ['pubblicare', 'pubblikáre', 'publicar', ''], ['organizzare', 'organiddzáre', 'organizar', ''], ['il corriere', 'il korriére', 'o entregador, o mensageiro', ''], ['il sindaco', 'il síndako', 'o prefeito', ''], ['il ponte', 'il pônte', 'a ponte', ''], ['il pacco', 'il pákko', 'o pacote', ''],
      ]),
      gramatica(12, 'È stato costruito dall\'impresa', 'PASSO 1: na passiva o objeto da frase ativa vira sujeito: «Manzoni ha scritto il romanzo» → «Il romanzo è stato scritto da Manzoni». PASSO 2: forma-se com «essere» + particípio passado, e o particípio concorda com o sujeito: «la lettera è scritta», «i pacchi sono consegnati». PASSO 3: o agente (quem faz) aparece com «da»: «dal sindaco, dalla Regione, dagli studenti». PASSO 4: o tempo muda em «essere»: «è costruito» (presente), «è stato costruito» (passato prossimo), «era costruito» (imperfetto), «sarà costruito» (futuro), «sarebbe costruito» (condizionale). PASSO 5: nos tempos compostos aparecem dois particípios e os dois concordam: «La lettera è stata scritta» (stata + scritta), «I ponti sono stati costruiti». PASSO 6: só verbos transitivos (que têm objeto direto) têm passiva: «mangiare, scrivere, aprire». Verbos intransitivos como «andare» ou «dormire» não têm passiva. PASSO 7: o agente pode ser omitido quando é óbvio ou desconhecido: «Il ponte è stato inaugurato ieri». PASSO 8: pronomes: «Il pacco è stato consegnato da lui».', {
        tag: 'Passiva',
        comparacao: 'o português usa «ser» + particípio: «a ponte foi construída pela empresa». O italiano também: «è stato costruito dall\'impresa». Atenção: «foi construído» (ato concluído) corresponde a «è stato costruito», e «è costruito» seria «é construído» (descreve o estado ou a regra). Nas duas línguas a passiva é mais comum na escrita (notícias, avisos, regulamentos) do que na fala.',
        tabela: [
          { tempo: 'presente', attiva: 'L\'impresa costruisce il ponte.', passiva: 'Il ponte è costruito dall\'impresa.' }, { tempo: 'passato prossimo', attiva: 'L\'impresa ha costruito il ponte.', passiva: 'Il ponte è stato costruito dall\'impresa.' }, { tempo: 'imperfetto', attiva: 'L\'impresa costruiva il ponte.', passiva: 'Il ponte era costruito dall\'impresa.' }, { tempo: 'futuro', attiva: 'L\'impresa costruirà il ponte.', passiva: 'Il ponte sarà costruito dall\'impresa.' }, { tempo: 'condizionale', attiva: 'L\'impresa costruirebbe il ponte.', passiva: 'Il ponte sarebbe costruito dall\'impresa.' },
        ],
        erros: [['Il libro è scritto da Manzoni nel 1827 (foi escrito).', 'Il libro è stato scritto da Manzoni nel 1827.', 'Ato concluído no passado: «è stato scritto».'], ['La lettera è stato scritta.', 'La lettera è stata scritta.', '«Stato» também concorda com o sujeito.'], ['Il pacco è stato consegnato per il corriere.', 'Il pacco è stato consegnato dal corriere.', 'O agente usa «da».'], ['I ponti sono costruiti dall\'impresa nel 2020.', 'I ponti sono stati costruiti dall\'impresa nel 2020.', 'Data no passado: passato prossimo passivo.']],
      }),
      producao(5, 'Transforme em voz alta cinco frases ativas em passivas: «Il sindaco ha inaugurato il ponte» → «Il ponte è stato inaugurato dal sindaco».'),
    ]),
    sessao('S2', 'Venire e andare + particípio', [
      revisao(4, 'Passe para a passiva em voz alta: «Gli studenti scrivono la lettera», «Il corriere consegnerà il pacco», «Il comune ha chiuso la strada».'),
      palavras(6, [
        ['compilare', 'kompiláre', 'preencher', ''], ['il modulo', 'il módulo', 'o formulário', ''], ['consegnare', 'konsenháre', 'entregar', ''], ['rispettare', 'rispettáre', 'respeitar', ''], ['la regola', 'la régola', 'a regra', ''], ['firmare', 'firmáre', 'assinar', ''],
      ]),
      gramatica(12, 'Viene chiuso, va compilato', 'PASSO 1: nos tempos simples, «venire» pode substituir «essere» e dá um sentido de processo, de algo que está sendo feito: «Il ponte viene costruito» (está sendo construído), «Le lettere vengono consegnate ogni mattina». PASSO 2: «venire» NÃO se usa nos tempos compostos: «è stato consegnato», nunca «è venuto consegnato». PASSO 3: «andare» + particípio expressa obrigação, equivale a «dover essere + particípio»: «Il modulo va compilato» (deve ser preenchido), «Le regole vanno rispettate». PASSO 4: «andare» + particípio também pode indicar perda: «andare perso, andare distrutto»: «Molti documenti sono andati persi». PASSO 5: «essere da + infinito» expressa necessidade ou possibilidade: «Questo è da fare subito» (isto precisa ser feito); «Non è da dimenticare» (não é de esquecer). PASSO 6: os avisos públicos preferem a passiva impessoal: «È vietato fumare», «È consentito l\'ingresso ai maggiori di 18 anni». PASSO 7: o particípio concorda com o sujeito: «le regole vanno rispettate», «il documento va firmato». PASSO 8: o «si passivante» (aula 51) também faz passiva: «Qui si vendono libri».', {
        tag: 'Passiva',
        comparacao: 'o português não tem «va compilato». Dizemos «deve ser preenchido» ou «precisa ser preenchido». O italiano usa «va» + particípio em avisos, regulamentos e manuais; reconheça e aprenda a formar. Para «viene fatto», pense em «está sendo feito», não em «veio feito».',
        tabela: [
          { construcao: 'venire + particípio', sentido: 'processo (tempos simples)', exemplo: 'Il ponte viene chiuso alle otto.' }, { construcao: 'andare + particípio', sentido: 'obrigação', exemplo: 'Il modulo va compilato.' }, { construcao: 'andare + perso/distrutto', sentido: 'perda', exemplo: 'Molti documenti sono andati persi.' }, { construcao: 'essere da + infinito', sentido: 'necessidade', exemplo: 'Questo è da fare subito.' }, { construcao: 'è vietato / consentito', sentido: 'aviso', exemplo: 'È vietato fumare.' },
        ],
        erros: [['La porta viene stata chiusa.', 'La porta è stata chiusa.', '«Venire» só vale em tempos simples.'], ['Il modulo deve essere compilare.', 'Il modulo va compilato. / Il modulo deve essere compilato.', 'Particípio, não infinitivo.'], ['Le regole vanno rispettato.', 'Le regole vanno rispettate.', 'Concordância com «le regole».'], ['Il documento viene firmato ieri.', 'Il documento è stato firmato ieri.', 'Ato concluído: «è stato».']],
      }),
      producao(8, 'Escreva (ou diga) em voz alta oito avisos para um escritório ou condomínio, com «va», «vanno», «è vietato» e «è consentito».'),
    ]),
    sessao('S3', 'Ler uma notícia', [
      revisao(4, 'Diga em voz alta três manchetes de jornal na passiva: «Un ponte è stato inaugurato».'),
      palavras(5, [
        ['i lavori', 'i lavóri', 'as obras', ''], ['completare', 'kompletáre', 'concluir', ''], ['finanziare', 'finanziáre', 'financiar', ''], ['i cittadini', 'i tittadíni', 'os cidadãos', ''], ['la Regione', 'la Redjône', 'a Região (órgão administrativo)', ''],
      ]),
      gramatica(8, 'Quando usar a passiva', 'PASSO 1: use a passiva quando o agente é desconhecido, óbvio ou menos importante: «È stato arrestato un uomo». PASSO 2: use-a quando o objeto é o tema da frase: «Il ponte è stato inaugurato ieri». PASSO 3: nas notícias, a passiva aparece com «è stato, sono stati, sarà, saranno»: «Saranno chiuse le strade del centro». PASSO 4: em textos orais, prefira a ativa: «Hanno inaugurato il ponte ieri». PASSO 5: para o agente em jornais, escreva «da» + nome ou instituição: «dalla Regione, dai cittadini».', {
        tag: 'Passiva',
        comparacao: 'o português jornalístico também usa a passiva («foi inaugurada a ponte»), mas a fala prefere a forma ativa impessoal («inauguraram a ponte»). O italiano tem a mesma tendência: a notícia fala em passiva, a conversa em ativa.',
        tabela: [
          { registro: 'notícia escrita', exemplo: 'Il ponte è stato inaugurato dal sindaco.' }, { registro: 'conversa', exemplo: 'Hanno inaugurato il ponte ieri.' }, { registro: 'aviso', exemplo: 'È vietato l\'ingresso ai non addetti.' }, { registro: 'instrução', exemplo: 'Il modulo va consegnato in segreteria.' },
        ],
        erros: [['Il ponte è inaugurato ieri.', 'Il ponte è stato inaugurato ieri.', 'Ato concluído.'], ['I lavori sono stati completato.', 'I lavori sono stati completati.', 'Concordância do particípio.'], ['Il progetto è stato finanziato per la Regione.', 'Il progetto è stato finanziato dalla Regione.', 'Agente com «da».'], ['Un uomo è stata arrestato.', 'Un uomo è stato arrestato.', 'Concordância de «stato».']],
      }),
      texto(8, 'Inaugurato il nuovo ponte', 'Il nuovo ponte sul fiume è stato inaugurato ieri dal sindaco, davanti a centinaia di cittadini. I lavori, cominciati due anni fa, erano stati interrotti più volte per il maltempo, ma sono stati completati prima della data prevista. Il ponte sarà aperto al traffico domani mattina. Secondo il sindaco, le strade del centro verranno chiuse alle auto durante le feste, e un nuovo parcheggio sarà costruito entro l\'estate. Il progetto è stato finanziato dalla Regione e da alcuni privati.', 'A nova ponte sobre o rio foi inaugurada ontem pelo prefeito, diante de centenas de cidadãos. As obras, iniciadas há dois anos, tinham sido interrompidas várias vezes por causa do mau tempo, mas foram concluídas antes do prazo previsto. A ponte será aberta ao tráfego amanhã de manhã. Segundo o prefeito, as ruas do centro serão fechadas aos carros durante as festas, e um novo estacionamento será construído até o verão. O projeto foi financiado pela Região e por alguns particulares.', [['Chi ha inaugurato il ponte?', 'Il sindaco.'], ['Perché i lavori erano stati interrotti?', 'A causa del maltempo.'], ['Quando sarà aperto al traffico?', 'Domani mattina.'], ['Da chi è stato finanziato il progetto?', 'Dalla Regione e da alcuni privati.']]),
      producao(5, 'Escreva (ou diga) em voz alta uma notícia de três frases sobre um evento do seu bairro, com a passiva.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 49', [
      revisao(5, 'Transforme em voz alta cinco frases ativas do seu dia em passivas e depois volte para a ativa.'),
      exercicios(20, [
        ouvir('Il ponte è stato costruito dall\'impresa', ['Il ponte è stato costruito dall\'impresa', 'Il ponte è costruito dall\'impresa', 'Il ponte ha costruito l\'impresa'], 'Il ponte è stato costruito dall\'impresa', 'Ouça «è stato costruito».'),
        ouvir('Il modulo va compilato', ['Il modulo va compilato', 'Il modulo va compilare', 'Il modulo viene compilato ieri'], 'Il modulo va compilato', 'Ouça «va compilato».'),
        ouvir('La lettera è stata scritta da Marco', ['La lettera è stata scritta da Marco', 'La lettera è stato scritta da Marco', 'La lettera ha scritto Marco'], 'La lettera è stata scritta da Marco', 'Ouça «stata scritta».'),
        ditado('Il pacco è stato consegnato dal corriere', 'Escreva: Il pacco è stato consegnato dal corriere.'), ditado('Le regole vanno rispettate', 'Escreva: Le regole vanno rispettate.'), ditado('È vietato fumare', 'Escreva: È vietato fumare.'),
        mc('«O livro foi escrito por Manzoni» em italiano:', ['Il libro è stato scritto da Manzoni.', 'Il libro è scritto da Manzoni.', 'Il libro ha scritto Manzoni.'], 'Il libro è stato scritto da Manzoni.', 'Passado concluído.'),
        mc('Qual frase está correta?', ['La lettera è stata scritta.', 'La lettera è stato scritta.', 'La lettera è stata scritto.'], 'La lettera è stata scritta.', 'Concordância.'),
        mc('«O formulário deve ser preenchido» em italiano:', ['Il modulo va compilato.', 'Il modulo va compilare.', 'Il modulo viene compilato dovere.'], 'Il modulo va compilato.', '«Andare» + particípio.'),
        mc('Em qual tempo se pode usar «venire» como auxiliar da passiva?', ['nos tempos simples', 'nos tempos compostos', 'nunca'], 'nos tempos simples', '«Viene costruito», mas não «è venuto costruito».'),
        lacuna('Il ponte è stato inaugurato ___ sindaco.', ['dal', 'per il', 'di'], 'dal', 'Agente: da + il.'),
        lacuna('Le strade ___ chiuse domani. (futuro passivo)', ['saranno', 'sono state', 'erano'], 'saranno', 'Futuro passivo.'),
        lacuna('I pacchi sono stati ___ ieri. (consegnare)', ['consegnati', 'consegnato', 'consegnare'], 'consegnati', 'Particípio concorda.'),
        lacuna('Le regole ___ rispettate. (obrigação)', ['vanno', 'va', 'viene'], 'vanno', '«Andare» + particípio, plural.'),
        ordem('Ordene: «Il ponte è stato inaugurato ieri.»', ['Il', 'ponte', 'è', 'stato', 'inaugurato', 'ieri'], 'Il ponte è stato inaugurato ieri.', 'Passiva no passato.'),
        ordem('Ordene: «Il modulo va firmato.»', ['Il', 'modulo', 'va', 'firmato'], 'Il modulo va firmato.', '«Andare» + particípio.'),
        livre('Escreva em italiano: A ponte foi inaugurada ontem pelo prefeito. As ruas serão fechadas amanhã. O formulário deve ser assinado.', 'Il ponte è stato inaugurato ieri dal sindaco. Le strade saranno chiuse domani. Il modulo va firmato.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma obra ou regra do seu bairro, usando a passiva.'),
    ]),
  ],
});
