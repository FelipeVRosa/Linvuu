import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 19, titulo: 'Passato prossimo com essere', nivel: 'a2',
  objetivo: 'Escolher entre «essere» e «avere» no passato prossimo, concordar o particípio com o sujeito e contar deslocamentos, mudanças e a rotina do dia com verbos reflexivos.',
  nota: 'Você já conta o que fez usando «essere» e «avere». Próxima aula: particípios irregulares e o relato do fim de semana.',
  sessoes: [
    sessao('S1', 'Verbos de movimento com essere', [
      revisao(5, 'Diga em voz alta cinco frases no passato prossimo com «avere»: «Ho mangiato… Ho comprato… Ho lavorato…»'),
      palavras(8, [
        ['andare, andato', 'andáre, andáto', 'ir, ido', ''], ['partire, partito', 'partíre, partíto', 'partir, partido', ''], ['arrivare, arrivato', 'arriváre, arriváto', 'chegar, chegado', ''], ['uscire, uscito', 'uxíre, uxíto', 'sair, saído', ''], ['entrare, entrato', 'entráre, entráto', 'entrar, entrado', ''], ['tornare, tornato', 'tornáre, tornáto', 'voltar, voltado', ''], ['venire, venuto', 'veníre, venúto', 'vir, vindo', ''], ['essere, stato', 'éssere, státo', 'ser/estar, sido/estado', ''],
      ]),
      gramatica(12, 'Com que auxiliar? Essere nos verbos de movimento', 'PASSO 1: o passato prossimo tem duas peças: um auxiliar («essere» ou «avere») e o particípio passato. Na aula 17 você usou «avere». PASSO 2: a maioria dos verbos de movimento, de chegada e de partida pede «essere»: andare, venire, partire, arrivare, uscire, entrare, tornare, restare, salire, scendere. PASSO 3: com «essere», o particípio concorda em gênero e número com o SUJEITO, como um adjetivo: «Marco è arrivato», «Giulia è arrivata», «Marco e Luca sono arrivati», «Giulia e Sofia sono arrivate». PASSO 4: em grupo misto, vale o masculino plural: «Marco e Giulia sono andati a Roma.» PASSO 5: o particípio dos verbos regulares: -are vira -ato (parlato), -ere vira -uto (venduto), -ire vira -ito (partito). PASSO 6: «venire» tem o particípio «venuto» (veio) e «essere» tem «stato», o mesmo de «stare»: «Sono stato a Milano» (estive em Milão). PASSO 7: a negação envolve o auxiliar: «Non sono andato». PASSO 8: com «essere», o falante escreve a concordância: um homem diz «sono stanco» e «sono andato»; uma mulher, «sono stanca» e «sono andata».', {
        tag: 'Passato prossimo',
        comparacao: 'em português o pretérito perfeito composto quase não existe: dizemos «fui», «cheguei», «saí». O italiano usa o passato prossimo para isso, com auxiliar. E o português nunca concorda o particípio com o sujeito («ela tem saído» não muda por gênero), enquanto o italiano escreve «è uscita». Para a mulher, o «-a» final é obrigatório.',
        tabelas: [
          { titulo: 'andare no passato prossimo', linhas: [
            { pessoa: 'io', forma: 'sono andato / andata', exemplo: 'Ieri sono andato al cinema.' }, { pessoa: 'tu', forma: 'sei andato / andata', exemplo: 'Sei andata a Roma?' }, { pessoa: 'lui / lei / Lei', forma: 'è andato / andata', exemplo: 'Giulia è andata via.' },
            { pessoa: 'noi', forma: 'siamo andati / andate', exemplo: 'Siamo andati a piedi.' }, { pessoa: 'voi', forma: 'siete andati / andate', exemplo: 'Siete andati in treno?' }, { pessoa: 'loro', forma: 'sono andati / andate', exemplo: 'Sono andati a casa.' },
          ] },
          { titulo: 'Particípios dos verbos de movimento', linhas: [
            { infinito: 'arrivare', participio: 'arrivato', exemplo: 'Sono arrivato alle otto.' }, { infinito: 'partire', participio: 'partito', exemplo: 'Il treno è partito.' }, { infinito: 'uscire', participio: 'uscito', exemplo: 'Luca è uscito presto.' },
            { infinito: 'tornare', participio: 'tornato', exemplo: 'Siamo tornati tardi.' }, { infinito: 'venire', participio: 'venuto', exemplo: 'Anna è venuta con me.' }, { infinito: 'entrare', participio: 'entrato', exemplo: 'Sono entrata nel bar.' },
          ] },
        ],
        erros: [['Ho andato a Roma.', 'Sono andato a Roma.', 'Andare pede «essere», não «avere».'], ['Giulia è arrivato.', 'Giulia è arrivata.', 'O particípio concorda com o sujeito: feminino singular.'], ['Marco e Luca sono arrivato.', 'Marco e Luca sono arrivati.', 'Sujeito plural: particípio no plural.'], ['Io sono venuta ieri. (dito por um homem)', 'Io sono venuto ieri.', 'A concordância segue quem fala: homem, «-o».']],
      }),
      producao(5, 'Diga em voz alta o que você fez ontem com verbos de movimento: «Sono uscito… Sono andato… Sono tornato…» Use a forma de acordo com seu gênero.'),
    ]),
    sessao('S2', 'Mudanças, reflexivos e outros verbos com essere', [
      revisao(4, 'Conjugue em voz alta «sono andato» com os seis sujeitos e confira a concordância.'),
      palavras(6, [
        ['nascere, nato', 'náxere, náto', 'nascer, nascido', ''], ['rimanere, rimasto', 'rimanêre, rimásto', 'ficar, ficado', ''], ['diventare, diventato', 'diventáre, diventáto', 'tornar-se, tornado', ''], ['salire, salito', 'salíre, salíto', 'subir, subido', ''], ['scendere, sceso', 'xéndere, xêzo', 'descer, descido', ''], ['alzarsi, alzato', 'altsársi, altsáto', 'levantar-se', ''],
      ]),
      gramatica(12, 'Reflexivos e outros verbos com essere', 'PASSO 1: TODOS os verbos reflexivos usam «essere» no passato prossimo, mesmo os que em português parecem de ação: «mi sono alzato» (levantei-me), «ti sei lavata», «si è svegliato». PASSO 2: o particípio concorda com o sujeito: «Maria si è alzata», «Maria e Anna si sono alzate». PASSO 3: o pronome reflexivo vem antes do auxiliar: «mi sono», «ti sei», «si è», «ci siamo», «vi siete», «si sono». PASSO 4: mesmo com objeto, o reflexivo mantém «essere»: «Mi sono lavato le mani.» PASSO 5: verbos de mudança de estado também pedem «essere»: nascere (nato), morire (morto), diventare (diventato), crescere (cresciuto), cambiare quando intransitivo. PASSO 6: verbos de permanência: «essere» (stato), «stare» (stato), «restare» e «rimanere» (rimasto): «Sono rimasta a casa.» PASSO 7: «salire» e «scendere» com sentido de subir/descer sozinhos pedem «essere»: «Sono salito al terzo piano.» PASSO 8: dica prática para memorizar: pense em verbos em que o sujeito vai, vem, fica ou muda, sem agir sobre um objeto. Esses pedem «essere».', {
        tag: 'Passato prossimo',
        comparacao: 'em português «eu me levantei» usa o mesmo esquema do reflexivo, mas o auxiliar não muda. Em italiano o reflexivo sempre troca «avere» por «essere»: «mi sono alzato». Um erro comum é dizer «mi ho alzato», que não existe.',
        tabela: [
          { pessoa: 'io', alzarsi: 'mi sono alzato / alzata', divertirsi: 'mi sono divertito / divertita' }, { pessoa: 'tu', alzarsi: 'ti sei alzato / alzata', divertirsi: 'ti sei divertito / divertita' }, { pessoa: 'lui / lei', alzarsi: 'si è alzato / alzata', divertirsi: 'si è divertito / divertita' },
          { pessoa: 'noi', alzarsi: 'ci siamo alzati / alzate', divertirsi: 'ci siamo divertiti / divertite' }, { pessoa: 'voi', alzarsi: 'vi siete alzati / alzate', divertirsi: 'vi siete divertiti / divertite' }, { pessoa: 'loro', alzarsi: 'si sono alzati / alzate', divertirsi: 'si sono divertiti / divertite' },
        ],
        erros: [['Mi ho alzato presto.', 'Mi sono alzato presto.', 'Reflexivo: sempre «essere».'], ['Si è lavata le mani. (sujeito: Marco)', 'Si è lavato le mani.', 'O particípio concorda com o sujeito, aqui masculino.'], ['Siamo rimasto a casa.', 'Siamo rimasti a casa.', 'Sujeito «noi» (vários): particípio plural.'], ['Sono nasciuto a Napoli.', 'Sono nato a Napoli.', 'O particípio de nascere é irregular: nato.']],
      }),
      producao(8, 'Descreva em voz alta a sua manhã de hoje com seis reflexivos: «Mi sono svegliato/a… Mi sono alzato/a… Mi sono vestito/a…»'),
    ]),
    sessao('S3', 'Essere ou avere? Já, ainda não, nunca', [
      revisao(4, 'Diga se cada verbo pede «essere» ou «avere»: andare, mangiare, restare, dormire, uscire, comprare.'),
      palavras(5, [
        ['già', 'djá', 'já', ''], ['non… ancora', 'non ankôra', 'ainda não', ''], ['mai', 'mái', 'nunca, alguma vez', ''], ['appena', 'appêna', 'acabou de, mal', ''], ['sempre', 'sêmpre', 'sempre', ''],
      ]),
      gramatica(8, 'Verbos com avere e advérbios no passato prossimo', 'PASSO 1: verbos que não indicam deslocamento ou mudança usam «avere»: mangiare, lavorare, dormire, camminare, viaggiare, parlare, studiare. «Ho dormito bene.» PASSO 2: contraste: «Sono andato a Torino» (fui) × «Ho viaggiato molto» (viajei muito). PASSO 3: «già», «mai», «sempre» e «appena» ficam entre o auxiliar e o particípio: «Sono già arrivato», «Non sono mai stato a Roma», «Ho appena finito». PASSO 4: «ancora» na negação: «Non sono ancora partito» (ainda não parti). PASSO 5: pergunta de experiência: «Sei mai stato a Venezia?» (já esteve em Veneza?) com «mai» sem negação. PASSO 6: «essere stato» + a + cidade, ou in + país: «Sono stato a Firenze», «Siamo stati in Spagna». PASSO 7: resposta curta: «Sì, ci sono stato» (veremos o «ci» na aula 25) ou simplesmente «Sì, sono stato a Venezia».', {
        tag: 'Passato prossimo',
        comparacao: 'em português «já» vem antes ou depois do verbo («já cheguei», «cheguei já»). Em italiano, nos tempos compostos, «già» fica quase sempre entre o auxiliar e o particípio. Outra armadilha: «Você já esteve?» é «Sei mai stato?», com «mai», e a negação «Non… mai» já inclui o «nunca».',
        tabela: [
          { palavra: 'già', posicao: 'entre auxiliar e particípio', exemplo: 'Sono già uscita.' }, { palavra: 'non… ancora', posicao: 'não + auxiliar + ancora + particípio', exemplo: 'Non ho ancora mangiato.' }, { palavra: 'mai', posicao: 'entre auxiliar e particípio', exemplo: 'Sei mai stato a Napoli?' }, { palavra: 'non… mai', posicao: 'não + auxiliar + mai + particípio', exemplo: 'Non sono mai stato a Parigi.' }, { palavra: 'appena', posicao: 'entre auxiliar e particípio', exemplo: 'Sono appena arrivato.' },
        ],
        erros: [['Ho andato già a casa.', 'Sono già andato a casa.', 'Andare pede «essere», e «già» fica no meio.'], ['Non sono mai stato a Roma mai.', 'Non sono mai stato a Roma.', 'Um só «mai» basta.'], ['Sono viaggiato molto.', 'Ho viaggiato molto.', '«Viaggiare» é exceção entre os verbos de movimento: pede «avere».'], ['Non ancora sono arrivato.', 'Non sono ancora arrivato.', 'A negação vem antes do auxiliar.']],
      }),
      dialogo(8, 'Dopo il lavoro / Depois do trabalho', 'Giulia e Marco conversam ao telefone sobre o dia.', [
        ['Giulia', 'Ciao Marco, dove sei? Sei già tornato a casa?', 'Oi, Marco, onde você está? Já voltou para casa?'], ['Marco', 'Non ancora. Sono uscito dall\'ufficio alle sei, ma sono rimasto bloccato nel traffico.', 'Ainda não. Saí do escritório às seis, mas fiquei preso no trânsito.'], ['Giulia', 'Io invece sono arrivata un\'ora fa. Mi sono già fatta la doccia.', 'Eu, ao contrário, cheguei uma hora atrás. Já tomei banho.'], ['Marco', 'Beata te! Ti sei divertita oggi?', 'Que sorte a sua! Você se divertiu hoje?'], ['Giulia', 'Sì, sono andata a pranzo con Sofia e siamo rimaste in centro fino alle tre.', 'Sim, fui almoçar com a Sofia e ficamos no centro até as três.'], ['Marco', 'Perfetto. Arrivo tra venti minuti.', 'Ótimo. Chego em vinte minutos.'],
      ]),
      producao(5, 'Conte em voz alta o que você já fez hoje e o que ainda não fez: «Sono già… Non ho ancora…»'),
    ]),
    sessao('S4', 'Revisão e prática da aula 19', [
      revisao(5, 'Conte em voz alta, em seis frases, o seu dia de ontem alternando «essere» e «avere».'),
      exercicios(20, [
        ouvir('Sono andata al mercato', ['Sono andata al mercato', 'Sono andato al mercato', 'Ho andato al mercato'], 'Sono andata al mercato', 'Ouça o «-a» final: quem fala é mulher.'), ouvir('Ci siamo alzati presto', ['Ci siamo alzati presto', 'Ci siamo alzate presto', 'Mi sono alzato presto'], 'Ci siamo alzati presto', 'Ouça «siamo alzati».'), ouvir('Non sono mai stato a Roma', ['Non sono mai stato a Roma', 'Non sono ancora stato a Roma', 'Non ho mai visto Roma'], 'Non sono mai stato a Roma', 'Ouça «mai stato».'),
        ditado('Sono arrivato alle otto', 'Escreva: Sono arrivato alle otto.'), ditado('Maria si è svegliata tardi', 'Escreva: Maria si è svegliata tardi.'), ditado('Siamo già usciti', 'Escreva: Siamo già usciti.'),
        mc('Qual auxiliar pede «partire»?', ['essere', 'avere', 'os dois, sem diferença'], 'essere', 'Verbo de partida: «sono partito».'), mc('Como uma mulher diz «cheguei»?', ['Sono arrivata.', 'Sono arrivato.', 'Ho arrivata.'], 'Sono arrivata.', 'Concordância com quem fala.'), mc('Qual frase está correta?', ['Ho dormito otto ore.', 'Sono dormito otto ore.', 'Ho dormita otto ore.'], 'Ho dormito otto ore.', 'Dormire pede «avere».'), mc('«Eu me levantei às sete» (homem):', ['Mi sono alzato alle sette.', 'Mi ho alzato alle sette.', 'Sono alzato alle sette.'], 'Mi sono alzato alle sette.', 'Reflexivo: pronome + essere.'),
        lacuna('Luca e Marco ___ andati al mare.', ['sono', 'hanno', 'è'], 'sono', 'Sujeito plural + «essere».'), lacuna('Giulia è ___ a casa tardi. (tornare)', ['tornata', 'tornato', 'tornati'], 'tornata', 'Concorda com Giulia.'), lacuna('Non sono ___ stata a Venezia.', ['mai', 'ancora mai', 'già'], 'mai', '«Non… mai»: nunca.'), lacuna('Noi ___ divertiti molto. (reflexivo)', ['ci siamo', 'abbiamo', 'ci abbiamo'], 'ci siamo', 'Reflexivo: essere.'),
        ordem('Ordene: «Sono già arrivato a Milano.»', ['Sono', 'già', 'arrivato', 'a', 'Milano.'], 'Sono già arrivato a Milano.', '«Già» fica entre auxiliar e particípio.'), ordem('Ordene: «Anna non è ancora uscita.»', ['Anna', 'non', 'è', 'ancora', 'uscita.'], 'Anna non è ancora uscita.', 'Negação antes do auxiliar.'),
        livre('Escreva em italiano (você é uma mulher): Ontem fui ao mercado, depois voltei para casa e me deitei cedo.', 'Ieri sono andata al mercato, poi sono tornata a casa e sono andata a letto presto.'),
        lacuna('Noi ___ tornati a casa tardi. (voltamos)', ['abbiamo', 'siamo', 'sono'], 'siamo', '«Tornare» é verbo de movimento: usa «essere»; com «noi», «siamo».'),
        lacuna('Giulia è ___ presto. (saiu)', ['uscito', 'uscite', 'uscita'], 'uscita', 'Com «essere», o particípio concorda com o sujeito feminino singular.'),
        lacuna('Ieri ___ dormito otto ore. (eu)', ['ho', 'sono', 'ha'], 'ho', '«Dormire» não indica deslocamento: usa «avere».'),
        lacuna('Anna e Sofia si sono ___. (levantaram)', ['alzati', 'alzata', 'alzate'], 'alzate', 'Sujeito feminino plural: particípio em «-e».'),
        lacuna('Io (Marco) sono ___ ieri. (parti)', ['partiti', 'partito', 'partita'], 'partito', 'Sujeito masculino singular: «partito».'),
        mc('Qual auxiliar pede «tornare»?', ['avere', 'stare', 'essere'], 'essere', 'Verbos de movimento e de chegada pedem «essere».'),
        mc('Como um homem diz «voltei»?', ['Sono tornato.', 'Sono tornata.', 'Ho tornato.'], 'Sono tornato.', '«Essere» + particípio concordando com o sujeito masculino.'),
        mc('Qual é o particípio de «venire»?', ['venito', 'venuto', 'venato'], 'venuto', '«Venire» tem o particípio irregular «venuto».'),
        mc('Qual frase está correta (mulher)?', ['Mi ho lavata le mani.', 'Ho lavato mi le mani.', 'Mi sono lavata le mani.'], 'Mi sono lavata le mani.', 'Os verbos reflexivos usam sempre «essere».'),
        ordem('Ordene: «Siamo rimasti a casa tutto il giorno.»', ['Siamo', 'rimasti', 'a', 'casa', 'tutto', 'il', 'giorno.'], 'Siamo rimasti a casa tutto il giorno.', '«Rimanere» usa «essere»; o particípio concorda com «noi».'),
        ordem('Ordene: «Giulia si è divertita molto alla festa.»', ['Giulia', 'si', 'è', 'divertita', 'molto', 'alla', 'festa.'], 'Giulia si è divertita molto alla festa.', 'Reflexivo: «si è» + particípio feminino.'),
        livre('Escreva em italiano (você é homem): Ontem cheguei tarde e fui logo para a cama.', 'Ieri sono arrivato tardi e sono andato subito a letto.'),
        livre('Escreva em italiano: Maria e Anna ainda não saíram.', 'Maria e Anna non sono ancora uscite.'),
      ]),
      producao(5, 'Conte em um minuto uma viagem curta que você fez: para onde foi, como chegou, o que fez e quando voltou.'),
    ]),
  ],
});
