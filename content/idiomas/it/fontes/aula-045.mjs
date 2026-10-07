import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 45, titulo: 'Congiuntivo passato', nivel: 'b1',
  objetivo: 'Formar o congiuntivo passato e usá-lo para opinar, duvidar e reagir a fatos já ocorridos, inclusive depois de superlativos como «il più bello che io abbia mai visto».',
  nota: 'O congiuntivo passato é a forma composta que você usa quando o fato aconteceu antes do momento em que você opina. Próxima aula: congiuntivo imperfetto e trapassato.',
  sessoes: [
    sessao('S1', 'Abbia mangiato, sia partito', [
      revisao(5, 'Diga em voz alta o congiuntivo presente de «essere, avere, fare, andare» com «che io» e «che loro».'),
      palavras(8, [
        ['sembra che', 'sêmbra ke', 'parece que', ''], ['pare che', 'pare ke', 'dizem que, parece que', ''], ['mi dispiace che', 'mi dispiátche ke', 'sinto que', ''], ['è un peccato che', 'è un pekkáto ke', 'é uma pena que', ''], ['è possibile che', 'è possíbile ke', 'é possível que', ''], ['ho paura che', 'ô páura ke', 'tenho medo que', ''], ['già', 'djá', 'já', ''], ['ormai', 'ormái', 'a essa altura', ''],
      ]),
      gramatica(12, 'Che io abbia mangiato', 'PASSO 1: o congiuntivo passato forma-se com o CONGIUNTIVO PRESENTE de «avere» ou «essere» + particípio passado: «che io abbia mangiato, che tu abbia finito, che lui abbia detto, che noi abbiamo visto, che voi abbiate letto, che loro abbiano capito»; «che io sia partito/a, che tu sia arrivato/a, che lui sia uscito, che noi siamo andati/e, che voi siate tornati/e, che loro siano stati/e». PASSO 2: o auxiliar e a concordância seguem as regras do passato prossimo. PASSO 3: ele é o tempo da ANTERIORIDADE: o fato aconteceu antes do momento em que se fala. PASSO 4: compare: «Penso che Luca parta» (agora ou no futuro) e «Penso che Luca sia partito» (já partiu). PASSO 5: gatilhos são os mesmos do presente: «penso che, credo che, dubito che, spero che, mi dispiace che, è possibile che, sembra che, pare che». PASSO 6: reação a um fato passado: «Mi dispiace che tu non sia venuto.» «Sono contento che abbiano vinto.» PASSO 7: pergunta e negação: «Pensi che abbia capito?» «Non credo che sia arrivato.» PASSO 8: pronomes vão antes do auxiliar: «Non credo che l\'abbia visto», «Dubito che le abbia detto la verità».', {
        tag: 'Congiuntivo',
        comparacao: 'o português tem o pretérito perfeito composto do subjuntivo: «espero que você tenha dormido bem». O italiano usa a forma equivalente: «spero che tu abbia dormito bene». Erro frequente: em português diz-se «acho que ele saiu» (indicativo), e o aluno traduz «penso che è uscito». Em italiano a forma esperada é «penso che sia uscito».',
        tabela: [
          { pessoa: 'che io', avere: 'abbia mangiato', essere: 'sia partito / partita' }, { pessoa: 'che tu', avere: 'abbia mangiato', essere: 'sia partito / partita' }, { pessoa: 'che lui / lei', avere: 'abbia mangiato', essere: 'sia partito / partita' }, { pessoa: 'che noi', avere: 'abbiamo mangiato', essere: 'siamo partiti / partite' }, { pessoa: 'che voi', avere: 'abbiate mangiato', essere: 'siate partiti / partite' }, { pessoa: 'che loro', avere: 'abbiano mangiato', essere: 'siano partiti / partite' },
        ],
        erros: [['Penso che è già partito.', 'Penso che sia già partito.', 'Opinião sobre fato passado: congiuntivo passato.'], ['Credo che abbia andato via.', 'Credo che sia andato via.', '«Andare» usa «essere».'], ['Penso che Marta sia arrivato.', 'Penso che Marta sia arrivata.', 'O particípio concorda com o sujeito.'], ['Spero che hai dormito bene.', 'Spero che tu abbia dormito bene.', 'Depois de «spero che» use o congiuntivo, e diga o sujeito.']],
      }),
      producao(5, 'Diga em voz alta cinco opiniões sobre fatos que já aconteceram: «Penso che Marco sia già arrivato.»'),
    ]),
    sessao('S2', 'Reagir ao que já aconteceu', [
      revisao(4, 'Conjugue em voz alta «dire, venire, finire, capire» no congiuntivo passato com «che lui».'),
      palavras(6, [
        ['il più bello che', 'il piú bêllo ke', 'o mais bonito que', ''], ['mai', 'mái', 'jamais, alguma vez', ''], ['l\'unico che', 'lúniko ke', 'o único que', ''], ['il primo che', 'il prímo ke', 'o primeiro que', ''], ['nonostante', 'nonostánte', 'apesar de', ''], ['sebbene', 'sebbêne', 'embora', ''],
      ]),
      gramatica(12, 'Il più bello che io abbia mai visto', 'PASSO 1: depois de um superlativo relativo, o italiano usa o congiuntivo na oração com «che»: «È il film più bello che io abbia mai visto.» PASSO 2: o mesmo acontece depois de «l\'unico, il primo, l\'ultimo, il solo»: «È l\'unico che abbia capito.» «Sei la prima persona che mi abbia chiesto scusa.» PASSO 3: dúvida sobre o passado: «Dubito che abbia detto la verità.» PASSO 4: sentimentos sobre o passado: «Mi dispiace che tu sia stato male.» «Sono felice che siate venuti.» PASSO 5: conjunções concessivas aceitam o congiuntivo passato quando o fato é anterior: «Benché abbia studiato molto, non ha passato l\'esame.» «Nonostante sia arrivato tardi, l\'hanno accolto bene.» PASSO 6: «sembra che» e «pare che» + congiuntivo passato dão informação incerta: «Sembra che abbiano chiuso la strada.» PASSO 7: negação de certeza: «Non è certo che siano partiti.» PASSO 8: se o sujeito é o mesmo, use o infinitivo passado: «Penso di aver sbagliato», não «penso che io abbia sbagliato».', {
        tag: 'Congiuntivo',
        comparacao: 'em português: «o filme mais bonito que eu já vi» usa o indicativo («vi»). O italiano usa o congiuntivo: «che io abbia mai visto». É uma armadilha clássica. Na fala cotidiana o indicativo («il più bello che ho mai visto») também é muito comum; o congiuntivo é a forma recomendada na escrita e nas provas, então diga «il più… che io abbia mai…».',
        tabela: [
          { contexto: 'superlativo', exemplo: 'È il libro più bello che io abbia mai letto.' }, { contexto: 'o único / o primeiro', exemplo: 'Sei l\'unico che abbia capito.' }, { contexto: 'sentimento', exemplo: 'Mi dispiace che tu sia stato male.' }, { contexto: 'dúvida', exemplo: 'Dubito che abbia detto la verità.' }, { contexto: 'concessão', exemplo: 'Benché abbia studiato, non ha passato.' }, { contexto: 'mesmo sujeito', exemplo: 'Penso di aver sbagliato.' },
        ],
        erros: [['È il film più bello che ho mai visto.', 'È il film più bello che io abbia mai visto.', 'Na escrita e nas provas, depois de superlativo usa-se o congiuntivo (na fala o indicativo é comum).'], ['Sei l\'unico che ha capito.', 'Sei l\'unico che abbia capito.', 'Na escrita, «l\'unico che» pede congiuntivo (na fala o indicativo é comum).'], ['Penso che io abbia sbagliato.', 'Penso di aver sbagliato.', 'Mesmo sujeito: infinitivo passado.'], ['Mi dispiace che tu non venisti.', 'Mi dispiace che tu non sia venuto.', 'Congiuntivo passato, não passato remoto.']],
      }),
      producao(8, 'Diga em voz alta oito superlativos pessoais: o melhor filme, a melhor comida, a viagem mais longa que você já fez.'),
    ]),
    sessao('S3', 'Um concerto a Verona', [
      revisao(4, 'Diga em voz alta três frases com «È il più… che io abbia mai…».'),
      palavras(5, [
        ['il concerto', 'il kontchêrto', 'o show, o concerto', ''], ['il pubblico', 'il púbbliko', 'o público', ''], ['la piazza', 'la piátsa', 'a praça', ''], ['il biglietto', 'il bilhétto', 'o ingresso, a passagem', ''], ['dimenticare', 'dimentikáre', 'esquecer', ''],
      ]),
      gramatica(8, 'Presente ou passato?', 'PASSO 1: escolha o tempo pelo momento do fato em relação ao momento em que você fala. PASSO 2: se o fato é simultâneo ou futuro, use o congiuntivo presente: «Penso che stia dormendo / che arrivi domani.» PASSO 3: se o fato já aconteceu, use o congiuntivo passato: «Penso che sia arrivato ieri.» PASSO 4: perceba a palavra de tempo: «ieri, già, ormai, ieri sera» pedem o passado. PASSO 5: para experiências de vida (com «mai»), o congiuntivo passato também é o tempo certo: «Non credo che sia mai stato in Italia.»', {
        tag: 'Congiuntivo',
        comparacao: 'o português usa o mesmo par (presente e pretérito perfeito do subjuntivo), embora a fala cotidiana prefira o indicativo. Em italiano o par é a forma esperada em textos escritos e em registros mais formais.',
        tabela: [
          { momento: 'agora', exemplo: 'Penso che stia dormendo.' }, { momento: 'futuro', exemplo: 'Penso che arrivi domani.' }, { momento: 'passado', exemplo: 'Penso che sia arrivato ieri.' }, { momento: 'nunca', exemplo: 'Non credo che sia mai stato qui.' },
        ],
        erros: [['Penso che arrivi ieri.', 'Penso che sia arrivato ieri.', 'Passado: congiuntivo passato.'], ['Penso che sia arrivando domani.', 'Penso che arrivi domani.', 'Futuro: congiuntivo presente.'], ['Non credo che è mai stato qui.', 'Non credo che sia mai stato qui.', 'Opinião negada: congiuntivo.'], ['Penso che ha dormito.', 'Penso che abbia dormito.', 'Congiuntivo passato.']],
      }),
      texto(8, 'Il concerto a Verona', 'Ieri sera sono andata al concerto di una cantante famosa a Verona. Credo che sia stato il concerto più bello che io abbia mai visto. Mi dispiace che mio fratello non sia potuto venire: pare che abbia avuto un problema al lavoro. Sembra che abbiano venduto tutti i biglietti, perché la piazza era piena. Benché sia finito molto tardi, nessuno se n\'è andato prima della fine. Non credo che qualcuno dimentichi quella serata.', 'Ontem à noite fui ao show de uma cantora famosa em Verona. Acho que foi o show mais bonito que já vi. Lamento que meu irmão não tenha podido ir: parece que teve um problema no trabalho. Parece que venderam todos os ingressos, porque a praça estava cheia. Embora tenha terminado muito tarde, ninguém foi embora antes do fim. Não creio que alguém vá esquecer aquela noite.', [['Dove è andata l\'autrice?', 'A un concerto a Verona.'], ['Che cosa pensa del concerto?', 'Che sia stato il più bello che abbia mai visto.'], ['Perché suo fratello non è venuto?', 'Pare che abbia avuto un problema al lavoro.'], ['Com\'era la piazza?', 'Era piena.']]),
      producao(5, 'Conte em voz alta um evento que você viu ou de que ouviu falar, com três frases no congiuntivo passato.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 45', [
      revisao(5, 'Dê em voz alta uma opinião sobre o que um amigo fez no fim de semana, com «penso che…».'),
      exercicios(20, [
        ouvir('Penso che sia già partito', ['Penso che sia già partito', 'Penso che è già partito', 'Penso che parta già'], 'Penso che sia già partito', 'Ouça «sia già partito».'),
        ouvir('Mi dispiace che tu non sia venuto', ['Mi dispiace che tu non sia venuto', 'Mi dispiace che tu non vieni', 'Mi dispiace che tu non venissi'], 'Mi dispiace che tu non sia venuto', 'Ouça «sia venuto».'),
        ouvir('È il film più bello che io abbia mai visto', ['È il film più bello che io abbia mai visto', 'È il film più bello che ho mai visto', 'È il film più bello che io avessi mai visto'], 'È il film più bello che io abbia mai visto', 'Ouça «abbia mai visto».'),
        ditado('Dubito che abbia detto la verità', 'Escreva: Dubito che abbia detto la verità.'), ditado('Spero che tu abbia dormito bene', 'Escreva: Spero che tu abbia dormito bene.'), ditado('Non credo che siano arrivati', 'Escreva: Non credo che siano arrivati.'),
        mc('«Acho que ele já saiu» em italiano:', ['Penso che sia già uscito.', 'Penso che è già uscito.', 'Penso che esca già.'], 'Penso che sia già uscito.', 'Congiuntivo passato.'),
        mc('Qual frase está correta?', ['Credo che Marta sia arrivata.', 'Credo che Marta sia arrivato.', 'Credo che Marta abbia arrivata.'], 'Credo che Marta sia arrivata.', 'Concordância.'),
        mc('Depois de um superlativo, usa-se:', ['o congiuntivo', 'o futuro', 'o passato remoto'], 'o congiuntivo', 'Il più… che io abbia mai…'),
        mc('Mesmo sujeito: «Acho que errei».', ['Penso di aver sbagliato.', 'Penso che io abbia sbagliato.', 'Penso di sbagliare.'], 'Penso di aver sbagliato.', 'Infinitivo passado.'),
        lacuna('Penso che lui ___ già mangiato.', ['abbia', 'ha', 'sia'], 'abbia', 'Congiuntivo passato com «avere».'),
        lacuna('Credo che loro ___ arrivati.', ['siano', 'hanno', 'abbiano'], 'siano', 'Congiuntivo com «essere».'),
        lacuna('Sei l\'unico che ___ capito.', ['abbia', 'ha', 'sia'], 'abbia', 'Depois de «l\'unico che».'),
        lacuna('Mi dispiace che tu non ___ venuto.', ['sia', 'sei', 'fossi'], 'sia', 'Reação ao passado.'),
        ordem('Ordene: «Penso che Luca sia già partito.»', ['Penso', 'che', 'Luca', 'sia', 'già', 'partito'], 'Penso che Luca sia già partito.', 'Anterioridade.'),
        ordem('Ordene: «È il libro più bello che io abbia mai letto.»', ['È', 'il', 'libro', 'più', 'bello', 'che', 'io', 'abbia', 'mai', 'letto'], 'È il libro più bello che io abbia mai letto.', 'Superlativo + congiuntivo.'),
        livre('Escreva em italiano: Acho que ele já chegou. Lamento que você não tenha vindo. É o filme mais bonito que já vi.', 'Penso che sia già arrivato. Mi dispiace che tu non sia venuto. È il film più bello che io abbia mai visto.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o melhor e o pior que você já viveu, com superlativos e congiuntivo passato.'),
    ]),
  ],
});
