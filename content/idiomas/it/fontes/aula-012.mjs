import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 12, titulo: 'Irregulares essenciais', nivel: 'a1',
  objetivo: 'Conjugar no presente os verbos irregulares mais usados (andare, venire, fare, stare, dare, dire, uscire, bere) e usá-los em frases do dia a dia.',
  nota: 'Você conjuga os oito irregulares mais frequentes do italiano e escolhe entre «a», «in» e «da» com «andare». Próxima aula: volere, potere, dovere e sapere.',
  sessoes: [
    sessao('S1', 'Andare e venire', [
      revisao(5, 'Diga em voz alta como ir da sua casa a três lugares, com «Lei» (aula 11), e o meio de transporte de cada um.'),
      palavras(8, [
        ['andare', 'andáre', 'ir', ''], ['venire', 'veníre', 'vir', ''], ['tornare', 'tornáre', 'voltar', ''], ['partire', 'partíre', 'partir', ''], ['arrivare', 'arriváre', 'chegar', ''], ['la scuola', 'la skuóla', 'a escola', ''], ['l\'ufficio', 'luffítcho', 'o escritório', ''], ['il cinema', 'il tchínema', 'o cinema', ''],
      ]),
      gramatica(12, 'Andare e venire no presente', 'PASSO 1: «andare» (ir) e «venire» (vir) são irregulares: a raiz muda. PASSO 2: decore as formas de «andare»: vado, vai, va, andiamo, andate, vanno. PASSO 3: decore as de «venire»: vengo, vieni, viene, veniamo, venite, vengono. PASSO 4: escolha a preposição pelo destino. «a» com cidade e com muitos lugares fixos: «vado a Roma», «vado a casa», «vado a scuola». «in» com países, ruas e lugares gerais: «vado in Italia», «vado in banca», «vado in ufficio», «vado in centro». «da» com pessoa ou profissão (casa ou consultório de alguém): «vado dal dottore», «vado da Marco». PASSO 5: com artigo definido, a preposição se junta: «vado al cinema», «vado alla stazione», «vado dal medico». PASSO 6: «andare a + infinitivo» indica propósito: «vado a mangiare», «vado a fare la spesa». PASSO 7: «venire» costuma ser traduzido por «ir» quando o falante vai ao lugar de quem pergunta: «Vieni alla festa?» (você vai à festa?). A resposta é «Sì, vengo.» (sim, eu vou).', {
        tag: 'Verbos irregulares',
        comparacao: 'o português diz «vou à festa», e o italiano às vezes diz «vengo alla festa», quando o ponto de vista é o de quem convida. Isso é natural no italiano: pergunte «Vieni?» e responda «Vengo». Outra diferença: «vado da Marco» é «vou à casa do Marco»; o português não tem essa preposição para pessoas.',
        tabelas: [
          { titulo: 'andare (ir)', linhas: [
            { pronome: 'io', forma: 'vado', exemplo: 'Vado a scuola.' }, { pronome: 'tu', forma: 'vai', exemplo: 'Vai al cinema?' }, { pronome: 'lui / lei / Lei', forma: 'va', exemplo: 'Va in banca.' },
            { pronome: 'noi', forma: 'andiamo', exemplo: 'Andiamo a casa.' }, { pronome: 'voi', forma: 'andate', exemplo: 'Andate in centro?' }, { pronome: 'loro', forma: 'vanno', exemplo: 'Vanno in Italia.' },
          ] },
          { titulo: 'venire (vir)', linhas: [
            { pronome: 'io', forma: 'vengo', exemplo: 'Vengo da Roma.' }, { pronome: 'tu', forma: 'vieni', exemplo: 'Vieni alla festa?' }, { pronome: 'lui / lei / Lei', forma: 'viene', exemplo: 'Viene con noi.' },
            { pronome: 'noi', forma: 'veniamo', exemplo: 'Veniamo in treno.' }, { pronome: 'voi', forma: 'venite', exemplo: 'Venite da Marco?' }, { pronome: 'loro', forma: 'vengono', exemplo: 'Vengono dal Brasile.' },
          ] },
        ],
        erros: [['Vado a Italia.', 'Vado in Italia.', 'País pede «in».'], ['Vado al dottore.', 'Vado dal dottore.', 'Ir à pessoa: «da».'], ['Io ando a scuola.', 'Io vado a scuola.', '«Andare» é irregular: «vado».'], ['Veniamo di Roma.', 'Veniamo da Roma.', 'Origem: «da».']],
      }),
      producao(5, 'Diga em voz alta seis frases: três com «vado a/in/da…» e três com «vengo da…» sobre você e seus amigos.'),
    ]),
    sessao('S2', 'Fare e stare', [
      revisao(4, 'Conjugue «andare» e «venire» em voz alta e diga uma frase com cada pessoa.'),
      palavras(6, [
        ['fare colazione', 'fáre kolatsiône', 'tomar café da manhã', ''], ['fare la spesa', 'fáre la spêza', 'fazer compras (de mercado)', ''], ['fare una passeggiata', 'fáre úna passeddjáta', 'dar um passeio', ''], ['fare sport', 'fáre sport', 'praticar esporte', ''], ['fare i compiti', 'fáre i kómpiti', 'fazer o dever de casa', ''], ['stare bene', 'stáre bêne', 'estar bem', ''],
      ]),
      gramatica(12, 'Fare e stare', 'PASSO 1: «fare» (fazer) é um dos verbos mais usados. Formas: faccio, fai, fa, facciamo, fate, fanno. PASSO 2: «fare» entra em muitas expressões: «fare colazione», «fare la spesa», «fare una passeggiata», «fare sport», «fare un viaggio», «fare una foto». PASSO 3: no clima, «fa caldo» e «fa freddo» (faz calor, faz frio). PASSO 4: «stare» (estar, ficar) tem formas irregulares: sto, stai, sta, stiamo, state, stanno. PASSO 5: «stare» serve para o estado de saúde e de ânimo: «Come stai?» «Sto bene.» «Come sta Lei?» «Sto così così.» PASSO 6: «stare» aparece também em «stare attento» (prestar atenção) e «stare zitto» (ficar calado). PASSO 7: não use «stare» no lugar de «essere» para identidade ou origem: «Sono Marco» (e nunca «sto Marco»). PASSO 8: «stare per» + infinitivo quer dizer «estar prestes a»: «Sto per uscire.»', {
        tag: 'Verbos irregulares',
        comparacao: 'em português «estar» e «ser» também se dividem, mas de forma diferente: o italiano usa «stare» sobretudo para saúde e ânimo («Come stai?»), e «essere» para o resto, inclusive o lugar onde algo está («Il libro è sul tavolo»). Cuidado com «fare»: em português dizemos «tomar café» e «dar um passeio»; o italiano diz «fare colazione» e «fare una passeggiata».',
        tabelas: [
          { titulo: 'fare (fazer)', linhas: [
            { pronome: 'io', forma: 'faccio', exemplo: 'Faccio colazione alle sette.' }, { pronome: 'tu', forma: 'fai', exemplo: 'Cosa fai oggi?' }, { pronome: 'lui / lei / Lei', forma: 'fa', exemplo: 'Oggi fa freddo.' },
            { pronome: 'noi', forma: 'facciamo', exemplo: 'Facciamo la spesa insieme.' }, { pronome: 'voi', forma: 'fate', exemplo: 'Fate sport?' }, { pronome: 'loro', forma: 'fanno', exemplo: 'Fanno una passeggiata.' },
          ] },
          { titulo: 'stare (estar, ficar)', linhas: [
            { pronome: 'io', forma: 'sto', exemplo: 'Sto bene, grazie.' }, { pronome: 'tu', forma: 'stai', exemplo: 'Come stai?' }, { pronome: 'lui / lei / Lei', forma: 'sta', exemplo: 'Come sta, signora?' },
            { pronome: 'noi', forma: 'stiamo', exemplo: 'Stiamo bene insieme.' }, { pronome: 'voi', forma: 'state', exemplo: 'Come state?' }, { pronome: 'loro', forma: 'stanno', exemplo: 'Stanno bene.' },
          ] },
        ],
        erros: [['Facio la spesa.', 'Faccio la spesa.', '«Faccio» tem dois «c»; o som é «tch».'], ['Come sei?', 'Come stai?', 'Para saber como alguém está, «stare».'], ['Tu fa sport?', 'Tu fai sport?', 'Com «tu», a forma é «fai».'], ['Fa calore.', 'Fa caldo.', 'No clima, «fa caldo»; «calore» não se usa assim.']],
      }),
      producao(8, 'Diga o que você faz de manhã, de tarde e à noite, usando «fare» pelo menos cinco vezes. Depois pergunte a um amigo imaginário «Come stai?» e responda.'),
    ]),
    sessao('S3', 'Dare, dire, uscire e bere', [
      revisao(4, 'Conjugue «fare» e «stare» em voz alta e diga uma frase com cada pessoa.'),
      palavras(5, [
        ['dare una mano', 'dáre úna máno', 'dar uma mão, ajudar', ''], ['dire', 'díre', 'dizer', ''], ['uscire', 'uxíre', 'sair', ''], ['bere', 'bêre', 'beber', ''], ['il bicchiere', 'il bikkiére', 'o copo', ''], ['la serata', 'la seráta', 'a noitada, a noite', ''],
      ]),
      gramatica(8, 'Quatro irregulares úteis', 'PASSO 1: «dare» (dar): do, dai, dà, diamo, date, danno. A terceira pessoa leva acento: «dà». PASSO 2: «dire» (dizer): dico, dici, dice, diciamo, dite, dicono. PASSO 3: «uscire» (sair): esco, esci, esce, usciamo, uscite, escono. PASSO 4: «bere» (beber): bevo, bevi, beve, beviamo, bevete, bevono. PASSO 5: «uscire» pede «di casa» ou «con»: «Esco di casa alle otto», «Esco con gli amici». PASSO 6: «dire» é a base de «Come si dice…?» (como se diz…?): «Come si dice «obrigado» in italiano?». PASSO 7: o acento de «dà» (dá) diferencia de «da» (preposição): «Marco dà un libro a Luca» × «Vengo da Roma».', {
        tag: 'Verbos irregulares',
        comparacao: 'em português dizemos «sair de casa», e o italiano pede «uscire di casa» (e «da» na saída de um edifício: «esco dal bar»). Também não esqueça que «dire» é «dizer» e que o italiano diz «Dimmi!» como convite a falar: «fala!». Para ajudar, o português usa «dar uma mão», e o italiano diz o mesmo: «dare una mano».',
        tabelas: [
          { titulo: 'dare (dar)', linhas: [{ pronome: 'io', forma: 'do', exemplo: 'Do un libro a Luca.' }, { pronome: 'tu', forma: 'dai', exemplo: 'Mi dai una mano?' }, { pronome: 'lui / lei / Lei', forma: 'dà', exemplo: 'Dà un regalo.' }, { pronome: 'noi', forma: 'diamo', exemplo: 'Diamo una mano.' }, { pronome: 'voi', forma: 'date', exemplo: 'Date un consiglio?' }, { pronome: 'loro', forma: 'danno', exemplo: 'Danno una festa.' }] },
          { titulo: 'dire (dizer)', linhas: [{ pronome: 'io', forma: 'dico', exemplo: 'Dico di sì.' }, { pronome: 'tu', forma: 'dici', exemplo: 'Cosa dici?' }, { pronome: 'lui / lei / Lei', forma: 'dice', exemplo: 'Dice la verità.' }, { pronome: 'noi', forma: 'diciamo', exemplo: 'Diciamo di no.' }, { pronome: 'voi', forma: 'dite', exemplo: 'Che cosa dite?' }, { pronome: 'loro', forma: 'dicono', exemplo: 'Dicono che piove.' }] },
          { titulo: 'uscire (sair)', linhas: [{ pronome: 'io', forma: 'esco', exemplo: 'Esco alle otto.' }, { pronome: 'tu', forma: 'esci', exemplo: 'Esci stasera?' }, { pronome: 'lui / lei / Lei', forma: 'esce', exemplo: 'Esce con gli amici.' }, { pronome: 'noi', forma: 'usciamo', exemplo: 'Usciamo insieme.' }, { pronome: 'voi', forma: 'uscite', exemplo: 'Uscite sabato?' }, { pronome: 'loro', forma: 'escono', exemplo: 'Escono di casa.' }] },
          { titulo: 'bere (beber)', linhas: [{ pronome: 'io', forma: 'bevo', exemplo: 'Bevo un caffè.' }, { pronome: 'tu', forma: 'bevi', exemplo: 'Bevi acqua?' }, { pronome: 'lui / lei / Lei', forma: 'beve', exemplo: 'Beve il tè.' }, { pronome: 'noi', forma: 'beviamo', exemplo: 'Beviamo qualcosa.' }, { pronome: 'voi', forma: 'bevete', exemplo: 'Bevete vino?' }, { pronome: 'loro', forma: 'bevono', exemplo: 'Bevono acqua.' }] },
        ],
        erros: [['Dico a Luca sì.', 'Dico di sì a Luca.', 'Em «dire di sì», a preposição «di» entra antes do «sì».'], ['Lei da un libro.', 'Lei dà un libro.', 'Terceira pessoa de «dare» leva acento.'], ['Io usco.', 'Io esco.', '«Uscire» muda a raiz em «esco, esci, esce, escono».'], ['Bevi un caffè? (a um desconhecido)', 'Beve un caffè, signora?', 'Com «Lei», a terceira pessoa.']],
      }),
      dialogo(8, 'Cosa fai stasera? / O que você faz hoje à noite?', 'Giulia e Luca combinam uma saída.', [
        ['Giulia', 'Ciao, Luca! Come stai?', 'Oi, Luca! Como vai?'], ['Luca', 'Sto bene, grazie. E tu? Cosa fai stasera?', 'Vou bem, obrigado. E você? O que faz hoje à noite?'], ['Giulia', 'Esco con Chiara. Andiamo al cinema. Vieni con noi?', 'Saio com a Chiara. Vamos ao cinema. Você vem com a gente?'], ['Luca', 'Sì, vengo volentieri. A che ora?', 'Sim, vou com prazer. A que horas?'], ['Giulia', 'Alle otto. Dopo il film beviamo qualcosa.', 'Às oito. Depois do filme tomamos alguma coisa.'], ['Luca', 'Perfetto! Mi dai una mano a scegliere il film?', 'Perfeito! Você me ajuda a escolher o filme?'],
      ]),
      producao(5, 'Releia o diálogo em voz alta, os dois papéis. Depois troque «cinema» por «ristorante» e «film» por «cena» e diga de novo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 12', [
      revisao(5, 'Diga em voz alta uma frase com cada um dos oito verbos: andare, venire, fare, stare, dare, dire, uscire, bere.'),
      exercicios(20, [
        ouvir('Vado a scuola in autobus', ['Vado a scuola in autobus', 'Vado a casa in autobus', 'Vado a scuola in treno'], 'Vado a scuola in autobus', 'Ouça «vado».'), ouvir('Come stai', ['Come stai', 'Come sei', 'Come stanno'], 'Come stai', 'Ouça o «st».'), ouvir('Escono con gli amici', ['Escono con gli amici', 'Esce con gli amici', 'Usciamo con gli amici'], 'Escono con gli amici', 'Ouça a terminação «-ono».'),
        ditado('Faccio colazione alle sette', 'Escreva: Faccio colazione alle sette.'), ditado('Vengo da Roma', 'Escreva: Vengo da Roma.'), ditado('Bevo un caffè', 'Escreva: Bevo un caffè.'),
        mc('Qual é a forma de «tu» do verbo «andare»?', ['vai', 'vado', 'va'], 'vai', '«Tu vai».'), mc('Qual frase está correta?', ['Vado dal dottore.', 'Vado al dottore.', 'Vado in dottore.'], 'Vado dal dottore.', 'Ir a uma pessoa: «da».'), mc('Qual frase está correta?', ['Oggi fa freddo.', 'Oggi è freddo.', 'Oggi sta freddo.'], 'Oggi fa freddo.', 'Clima: «fare».'), mc('Qual frase está correta?', ['Esco con gli amici.', 'Usco con gli amici.', 'Uscio con gli amici.'], 'Esco con gli amici.', '«Esco» é irregular.'),
        lacuna('Noi ___ a Roma. (andare)', ['andiamo', 'andate', 'vanno'], 'andiamo', '«Noi andiamo».'), lacuna('Loro ___ dal Brasile. (venire)', ['vengono', 'viene', 'veniamo'], 'vengono', '«Loro vengono».'), lacuna('Luca ___ un libro a Giulia. (dare)', ['dà', 'da', 'dai'], 'dà', 'Terceira pessoa com acento.'), lacuna('Io ___ un bicchiere d\'acqua. (bere)', ['bevo', 'bevi', 'beve'], 'bevo', '«Io bevo».'),
        ordem('Ordene: «Cosa fai stasera?»', ['Cosa', 'fai', 'stasera'], 'Cosa fai stasera?', 'Pergunta com «fare».'), ordem('Ordene: «Vengo con voi al cinema.»', ['Vengo', 'con', 'voi', 'al', 'cinema'], 'Vengo con voi al cinema.', 'Verbo, companhia, lugar.'),
        livre('Escreva em italiano: Eu saio com os amigos. Vamos ao cinema e bebemos um café.', 'Esco con gli amici. Andiamo al cinema e beviamo un caffè.'),
        lacuna('Voi ___ in centro? (vão)', ['andate', 'andiamo', 'vanno'], 'andate', 'Com «voi», «andare» é «andate».'),
        lacuna('Marco ___ la spesa. (faz)', ['fai', 'fa', 'fanno'], 'fa', 'Com «lui», «fare» é «fa».'),
        lacuna('Voi ___ a casa mia? (vêm)', ['veniamo', 'vengono', 'venite'], 'venite', 'Com «voi», «venire» é «venite».'),
        lacuna('Stasera io ___ con Chiara. (saio)', ['uscio', 'esco', 'esce'], 'esco', '«Uscire» é irregular: «esco».'),
        lacuna('Loro ___ molta acqua. (bebem)', ['beve', 'bevono', 'bevete'], 'bevono', 'Com «loro», «bere» é «bevono».'),
        mc('Qual é a forma de «tu» de «uscire»?', ['esci', 'usci', 'esce'], 'esci', 'A raiz muda: esco, esci, esce.'),
        mc('Como se diz «Faz calor»?', ['Ha caldo.', 'Fa caldo.', 'Fa calore.'], 'Fa caldo.', 'O clima usa «fare»: «fa caldo», «fa freddo».'),
        mc('Como se pergunta «Como se diz «obrigado»?»', ['Come si dice «obrigado»?', 'Come dice «obrigado»?', 'Come si fa «obrigado»?'], 'Come si dice «obrigado»?', 'A pergunta usa «dire» com «si».'),
        mc('Qual preposição acompanha «vado» + Marco (a casa dele)?', ['a', 'da', 'in'], 'da', 'Com pessoa usa-se «da»: «vado da Marco».'),
        ordem('Ordene: «Noi facciamo una passeggiata insieme.»', ['Noi', 'facciamo', 'una', 'passeggiata', 'insieme.'], 'Noi facciamo una passeggiata insieme.', 'Com «noi», «fare» é «facciamo».'),
        ordem('Ordene: «Luca esce di casa alle otto.»', ['Luca', 'esce', 'di', 'casa', 'alle', 'otto.'], 'Luca esce di casa alle otto.', '«Uscire» pede «di casa».'),
        livre('Escreva em italiano: Faço compras e depois volto para casa.', 'Faccio la spesa e dopo torno a casa.'),
        livre('Escreva em italiano: Hoje faz frio. Como você está? Estou bem.', 'Oggi fa freddo. Come stai? Sto bene.'),
      ]),
      producao(5, 'Conte em voz alta o seu fim de semana ideal, com pelo menos quatro verbos irregulares desta aula.'),
    ]),
  ],
});
