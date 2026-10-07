import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 14, titulo: 'Rotina e verbos reflexivos', nivel: 'a1',
  objetivo: 'Falar da rotina diária com os verbos reflexivos (mi alzo, mi lavo, mi vesto), os advérbios de frequência e as palavras de sequência, e usar «ci vediamo» e outros verbos recíprocos.',
  nota: 'Você descreve o seu dia, do despertar ao deitar, com frequência e ordem. Próxima aula: compras, roupas, cores e «questo» e «quello».',
  sessoes: [
    sessao('S1', 'Verbos reflexivos', [
      revisao(5, 'Diga em voz alta o que você sabe e o que não sabe fazer: «So… Non so…». Depois diga a que horas você acorda (aula 9).'),
      palavras(8, [
        ['svegliarsi', 'zvelhársi', 'acordar', ''], ['alzarsi', 'altsársi', 'levantar-se', ''], ['lavarsi', 'lavársi', 'lavar-se', ''], ['vestirsi', 'vestírsi', 'vestir-se', ''], ['prepararsi', 'preparársi', 'preparar-se, arrumar-se', ''], ['farsi la doccia', 'fársi la dóttcha', 'tomar banho (de chuveiro)', ''], ['riposarsi', 'ripozársi', 'descansar', ''], ['addormentarsi', 'addormentársi', 'adormecer, pegar no sono', ''],
      ]),
      gramatica(12, 'Verbos reflexivos no presente', 'PASSO 1: um verbo reflexivo é aquele em que a ação volta para quem a faz: «Mi lavo» (eu me lavo). No dicionário, ele termina em «-si»: «alzarsi», «lavarsi», «vestirsi». PASSO 2: o italiano coloca um pronome antes do verbo conjugado: mi, ti, si, ci, vi, si. PASSO 3: tire o «-si», conjugue como um verbo normal e acrescente o pronome: «alzarsi» → «mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano». PASSO 4: a negação fica antes do pronome: «Non mi alzo presto.» PASSO 5: nas perguntas, o pronome continua antes do verbo: «A che ora ti alzi?» PASSO 6: com «volere», «potere», «dovere» e «sapere», o pronome pode ir antes do modal ou colado ao infinitivo: «Mi devo alzare presto» = «Devo alzarmi presto.» PASSO 7: para partes do corpo e roupas, o italiano usa o artigo e não o possessivo: «Mi lavo le mani» (lavo as mãos), «Mi metto la giacca» (visto o casaco). PASSO 8: alguns verbos são reflexivos em italiano, mas não em português: «svegliarsi» (acordar), «addormentarsi» (adormecer), «fermarsi» (parar), «sedersi» (sentar-se, que também é reflexivo em português).', {
        tag: 'Reflexivos',
        comparacao: 'em português, muita gente fala «lavo as mãos» sem pronome, e «acordo» e «levanto» também. Em italiano o pronome é obrigatório nesses casos: «mi sveglio», «mi alzo», «mi lavo». O possessivo desaparece: «mi lavo le mani», e nunca «mi lavo le mie mani».',
        tabelas: [
          { titulo: 'Pronomes reflexivos', linhas: [
            { pessoa: 'io', pronome: 'mi', exemplo: 'Mi sveglio alle sette.' }, { pessoa: 'tu', pronome: 'ti', exemplo: 'Ti alzi presto?' }, { pessoa: 'lui / lei / Lei', pronome: 'si', exemplo: 'Si lava le mani.' },
            { pessoa: 'noi', pronome: 'ci', exemplo: 'Ci prepariamo insieme.' }, { pessoa: 'voi', pronome: 'vi', exemplo: 'Vi riposate la domenica?' }, { pessoa: 'loro', pronome: 'si', exemplo: 'Si vestono in fretta.' },
          ] },
          { titulo: 'alzarsi (levantar-se)', linhas: [
            { pessoa: 'io', forma: 'mi alzo', exemplo: 'Mi alzo alle sei e mezza.' }, { pessoa: 'tu', forma: 'ti alzi', exemplo: 'A che ora ti alzi?' }, { pessoa: 'lui / lei / Lei', forma: 'si alza', exemplo: 'Marco si alza tardi.' },
            { pessoa: 'noi', forma: 'ci alziamo', exemplo: 'Ci alziamo presto.' }, { pessoa: 'voi', forma: 'vi alzate', exemplo: 'Vi alzate alle sette?' }, { pessoa: 'loro', forma: 'si alzano', exemplo: 'Si alzano dopo le otto.' },
          ] },
        ],
        erros: [['Io alzo alle sette.', 'Mi alzo alle sette.', 'Falta o pronome reflexivo.'], ['Mi lavo le mie mani.', 'Mi lavo le mani.', 'Partes do corpo levam artigo, não possessivo.'], ['Mi non alzo presto.', 'Non mi alzo presto.', 'O «non» vem antes do pronome.'], ['A che ora alzi?', 'A che ora ti alzi?', 'O pronome é obrigatório também na pergunta.']],
      }),
      producao(5, 'Conte em voz alta como você começa o dia: «Mi sveglio alle… Mi alzo… Mi lavo… Mi vesto… Faccio colazione…»'),
    ]),
    sessao('S2', 'A rotina do dia', [
      revisao(4, 'Conjugue «alzarsi» em voz alta e diga uma frase com cada pessoa.'),
      palavras(6, [
        ['la mattina', 'la mattína', 'a manhã', ''], ['il pomeriggio', 'il pomeríddjo', 'a tarde', ''], ['la sera', 'la sêra', 'a noite (início)', ''], ['la notte', 'la nótte', 'a noite (madrugada)', ''], ['prima, poi, dopo', 'príma, poi, dôpo', 'primeiro, depois, depois (de)', ''], ['andare a letto', 'andáre a létto', 'ir para a cama', ''],
      ]),
      gramatica(12, 'Frequência e sequência', 'PASSO 1: os advérbios de frequência são «sempre» (sempre), «spesso» (frequentemente), «di solito» (geralmente), «a volte» (às vezes), «raramente» (raramente) e «mai» (nunca). PASSO 2: eles vêm depois do verbo conjugado, ou no início da frase: «Mi alzo sempre alle sette.» «Di solito faccio colazione al bar.» PASSO 3: com «mai», a negação completa é «non… mai»: «Non faccio mai colazione.» PASSO 4: para dizer a frequência por período: «tutti i giorni», «ogni mattina», «due volte alla settimana». PASSO 5: para o período do dia, use «la mattina», «il pomeriggio», «la sera», «la notte»: «La mattina bevo un caffè.» Para um momento específico, prefira «di mattina», «di sera», «stamattina», «stasera». PASSO 6: para ordenar ações: «prima» (primeiro), «poi» (depois), «dopo» (depois, mais tarde), «infine» (por fim). «Prima mi lavo, poi mi vesto e dopo faccio colazione.» PASSO 7: para «antes de» + verbo, use «prima di» + infinitivo: «Prima di uscire mi lavo i denti» (antes de sair, escovo os dentes). O verbo «lavarsi i denti» é o italiano para escovar os dentes.', {
        tag: 'Rotina',
        comparacao: 'o português também diz «não vou nunca». Em italiano, com «mai» depois do verbo, o «non» é obrigatório: «non vado mai». E atenção: «sera» é a noite até mais ou menos meia-noite; «notte» é a madrugada e a hora de dormir.',
        tabela: [
          { italiano: 'sempre', pt: 'sempre', exemplo: 'Mi alzo sempre alle sette.' }, { italiano: 'spesso', pt: 'frequentemente', exemplo: 'Spesso faccio la spesa il sabato.' }, { italiano: 'di solito', pt: 'geralmente', exemplo: 'Di solito pranzo a casa.' },
          { italiano: 'a volte', pt: 'às vezes', exemplo: 'A volte vado in palestra.' }, { italiano: 'raramente', pt: 'raramente', exemplo: 'Raramente guardo la televisione.' }, { italiano: 'non… mai', pt: 'nunca', exemplo: 'Non bevo mai caffè la sera.' },
        ],
        erros: [['Mai mi alzo presto.', 'Non mi alzo mai presto.', 'Com «mai», o normal é «non… mai».'], ['Sempre mi alzo alle sette.', 'Mi alzo sempre alle sette.', 'O advérbio costuma ficar depois do verbo.'], ['Prima mi lavo, depois mi vesto.', 'Prima mi lavo, poi mi vesto.', '«Depois» não existe em italiano; use «poi» ou «dopo».'], ['La sera vado a letto a le dieci.', 'La sera vado a letto alle dieci.', '«A» + «le» vira «alle».']],
      }),
      producao(8, 'Descreva em voz alta a sua manhã inteira, com «prima, poi, dopo, infine» e pelo menos três advérbios de frequência.'),
    ]),
    sessao('S3', 'Verbos recíprocos e sentimentos', [
      revisao(4, 'Diga em voz alta cinco frases com advérbios de frequência sobre o seu dia a dia.'),
      palavras(5, [
        ['vedersi', 'vedêrsi', 'ver-se, encontrar-se', ''], ['sentirsi', 'sentírsi', 'sentir-se, falar-se', ''], ['incontrarsi', 'inkontrársi', 'encontrar-se', ''], ['arrabbiarsi', 'arrabbiársi', 'ficar com raiva', ''], ['annoiarsi', 'annoiársi', 'entediar-se', ''], ['divertirsi', 'divertírsi', 'divertir-se', ''],
      ]),
      gramatica(8, 'Reflexivos recíprocos e de estado', 'PASSO 1: no plural, o pronome pode indicar ação recíproca (um ao outro): «Ci vediamo domani» (nos vemos amanhã), «Si incontrano alla stazione» (eles se encontram na estação), «Ci sentiamo stasera» (nos falamos esta noite). PASSO 2: «ci vediamo» é a despedida mais comum entre amigos: «Ci vediamo!» PASSO 3: alguns verbos mostram estados: «divertirsi» (divertir-se), «annoiarsi» (entediar-se), «arrabbiarsi» (zangar-se), «sentirsi» (sentir-se): «Mi diverto molto.» «Non mi sento bene.» PASSO 4: use «sentirsi» + adjetivo para o humor: «Mi sento stanco.» PASSO 5: «chiamarsi» (chamar-se) também é reflexivo: «Mi chiamo Ana.» PASSO 6: a regra é a mesma do presente: pronome + verbo, com «non» antes: «Non ci vediamo da una settimana.»', {
        tag: 'Reflexivos',
        comparacao: 'o português diz «nos vemos» e «a gente se vê»; o italiano diz «ci vediamo» e também «ci sentiamo» (nos falamos por telefone). Com «divertirsi», «annoiarsi» e «arrabbiarsi», o pronome não pode faltar em italiano: «mi diverto», «mi annoio», «mi arrabbio».',
        tabela: [
          { italiano: 'Ci vediamo domani.', pt: 'Nos vemos amanhã.', uso: 'despedida' }, { italiano: 'Ci sentiamo stasera.', pt: 'Nos falamos esta noite.', uso: 'telefone' }, { italiano: 'Mi diverto molto.', pt: 'Eu me divirto muito.', uso: 'estado' }, { italiano: 'Non mi sento bene.', pt: 'Não me sinto bem.', uso: 'saúde' }, { italiano: 'Si incontrano alla stazione.', pt: 'Eles se encontram na estação.', uso: 'recíproco' },
        ],
        erros: [['Vediamo domani.', 'Ci vediamo domani.', 'Falta o «ci» recíproco.'], ['Io divertio molto.', 'Mi diverto molto.', 'Reflexivo: «mi» + «diverto».'], ['Ci vediamo stasera al telefono.', 'Ci sentiamo stasera.', 'Por telefone, «ci sentiamo»; «ci vediamo» é encontro pessoal.'], ['Non sento bene.', 'Non mi sento bene.', 'Estado de saúde pede o pronome.']],
      }),
      dialogo(8, 'La mia giornata / O meu dia', 'Martina e Davide conversam sobre a rotina de cada um.', [
        ['Martina', 'Davide, a che ora ti alzi di solito?', 'Davide, a que horas você costuma se levantar?'], ['Davide', 'Mi alzo alle sei e mezza. Mi lavo, mi vesto e faccio colazione al bar. E tu?', 'Levanto às seis e meia. Lavo-me, visto-me e tomo café no bar. E você?'], ['Martina', 'Io mi sveglio alle sette, ma mi alzo sempre tardi. Poi mi preparo in fretta e vado al lavoro.', 'Eu acordo às sete, mas me levanto sempre tarde. Depois me arrumo rápido e vou ao trabalho.'], ['Davide', 'E la sera? Ti riposi o esci con gli amici?', 'E à noite? Você descansa ou sai com os amigos?'], ['Martina', 'A volte mi riposo, a volte ci vediamo al bar. Stasera ci vediamo con Chiara. Vieni anche tu?', 'Às vezes descanso, às vezes nos encontramos no bar. Esta noite nos vemos com a Chiara. Vem também?'], ['Davide', 'Volentieri. Ci sentiamo dopo il lavoro.', 'Com prazer. Nos falamos depois do trabalho.'],
      ]),
      producao(5, 'Releia o diálogo em voz alta, os dois papéis. Depois responda por você: a que horas você se levanta e o que faz à noite?'),
    ]),
    sessao('S4', 'Revisão e prática da aula 14', [
      revisao(5, 'Conte em voz alta o seu dia de ontem em ordem, do despertar ao deitar, com «prima, poi, dopo, infine».'),
      exercicios(20, [
        ouvir('Mi alzo alle sette', ['Mi alzo alle sette', 'Ti alzi alle sette', 'Si alza alle sette'], 'Mi alzo alle sette', 'Ouça o pronome «mi».'), ouvir('Non mi sveglio mai presto', ['Non mi sveglio mai presto', 'Mi sveglio sempre presto', 'Non ti svegli mai presto'], 'Non mi sveglio mai presto', 'Ouça «non… mai».'), ouvir('Ci vediamo domani', ['Ci vediamo domani', 'Mi vedo domani', 'Ci sentiamo domani'], 'Ci vediamo domani', 'Ouça «ci vediamo».'),
        ditado('Mi lavo le mani', 'Escreva: Mi lavo le mani.'), ditado('Di solito faccio colazione al bar', 'Escreva: Di solito faccio colazione al bar.'), ditado('Si divertono molto', 'Escreva: Si divertono molto.'),
        mc('Qual é o pronome reflexivo de «noi»?', ['ci', 'mi', 'vi'], 'ci', '«Noi ci».'), mc('Qual frase está correta?', ['Mi lavo le mani.', 'Mi lavo le mie mani.', 'Lavo mi le mani.'], 'Mi lavo le mani.', 'Artigo no lugar do possessivo.'), mc('Como se diz «nunca bebo café»?', ['Non bevo mai caffè.', 'Mai non bevo caffè.', 'Non bevo sempre caffè.'], 'Non bevo mai caffè.', '«Non… mai».'), mc('O que quer dizer «ci sentiamo»?', ['nos falamos', 'nos sentamos', 'nos sentimos mal'], 'nos falamos', 'Despedida por telefone.'),
        lacuna('Tu ___ alle otto. (alzarsi)', ['ti alzi', 'mi alzo', 'si alza'], 'ti alzi', '«Tu ti alzi».'), lacuna('Loro ___ in fretta. (vestirsi)', ['si vestono', 'ci vestiamo', 'si veste'], 'si vestono', '«Loro si vestono».'), lacuna('___ alle sei e mezza. (io, svegliarsi)', ['Mi sveglio', 'Ti svegli', 'Si sveglia'], 'Mi sveglio', '«Io mi sveglio».'), lacuna('Prima mi lavo, ___ mi vesto.', ['poi', 'depois', 'sempre'], 'poi', '«Poi» significa depois.'),
        ordem('Ordene: «A che ora ti alzi?»', ['A', 'che', 'ora', 'ti', 'alzi'], 'A che ora ti alzi?', 'Pergunta com pronome.'), ordem('Ordene: «Mi alzo sempre alle sette.»', ['Mi', 'alzo', 'sempre', 'alle', 'sette'], 'Mi alzo sempre alle sette.', 'Advérbio depois do verbo.'),
        livre('Escreva em italiano: Eu me levanto às sete. Depois me lavo e tomo café.', 'Mi alzo alle sette. Poi mi lavo e faccio colazione.'),
      ]),
      producao(5, 'Conte em voz alta o seu dia de amanhã, do despertar ao deitar, em seis frases.'),
    ]),
  ],
});
