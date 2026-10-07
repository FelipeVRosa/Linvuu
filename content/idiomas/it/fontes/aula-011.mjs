import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'it', numero: 11, titulo: 'Cidade, lugares e direções', nivel: 'a1',
  objetivo: 'Nomear lugares da cidade, dizer onde as coisas estão com «vicino a», «davanti a» e semelhantes, pedir e entender direções, e escolher o meio de transporte.',
  nota: 'Você pergunta onde fica um lugar, entende «vada dritto» e «giri a sinistra» e diz como chega lá. Próxima aula: os verbos irregulares essenciais (andare, venire, fare, stare…).',
  sessoes: [
    sessao('S1', 'Lugares da cidade e onde ficam', [
      revisao(5, "Responda em voz alta: «Che ore sono? Che giorno è oggi? Com'è la tua giornata?» Depois diga uma frase com «nella», «al» ou «dal» (preposições articuladas da aula 10)."),
      palavras(8, [
        ['la stazione', 'la statsiône', 'a estação', ''], ['la farmacia', 'la farmatchía', 'a farmácia', ''], ['la banca', 'la bánka', 'o banco', ''], ['la posta', 'la pôsta', 'o correio', ''], ['il supermercato', 'il supermerkáto', 'o supermercado', ''],
        ['la piazza', 'la piátsa', 'a praça', ''], ['la chiesa', 'la kiéza', 'a igreja', ''], ['l\'ospedale', 'lospedále', 'o hospital', ''], ['il museo', 'il muzéo', 'o museu', ''], ['il centro', 'il tchéntro', 'o centro', ''],
      ]),
      gramatica(12, 'Onde fica? Dov\'è e as palavras de lugar', 'PASSO 1: para perguntar onde está uma coisa no singular, use «Dov\'è…?» (dove + è): «Dov\'è la stazione?». No plural, «Dove sono…?»: «Dove sono i bagni?». PASSO 2: para responder, use «essere» ou «trovarsi»: «La stazione è in centro.» «Il museo si trova in via Roma.» PASSO 3: as palavras de lugar vêm quase sempre com uma preposição curta depois: «vicino a» (perto de), «lontano da» (longe de), «davanti a» (na frente de), «dietro a» (atrás de), «accanto a» (ao lado de), «di fronte a» (em frente a), «in fondo a» (no fim de). PASSO 4: se depois vem um substantivo com artigo, a preposição se junta ao artigo (aula 10): «vicino alla posta», «davanti al museo», «lontano dalla stazione». PASSO 5: «tra» e «fra» (entre) significam o mesmo: «La banca è tra la posta e la farmacia.» PASSO 6: «in» fica sem artigo com muitas palavras fixas: «in centro», «in piazza», «in via Verdi». Com «via» e «piazza» de nome próprio, use «in via…» e «in piazza…».', {
        tag: 'Lugar',
        comparacao: 'em português dizemos «perto da posta» e «longe do hospital» com «de». O italiano usa «a» depois de «vicino», «davanti», «dietro» e «accanto», e «da» só depois de «lontano». Atenção ao falso parecido «davanti» (na frente de) e «avanti» (adiante, em frente).',
        tabela: [
          { italiano: 'vicino a', pt: 'perto de', exemplo: 'La farmacia è vicino alla stazione.' }, { italiano: 'lontano da', pt: 'longe de', exemplo: 'L\'ospedale è lontano dal centro.' }, { italiano: 'davanti a', pt: 'na frente de', exemplo: 'Il bar è davanti al museo.' },
          { italiano: 'dietro a', pt: 'atrás de', exemplo: 'Il parcheggio è dietro alla chiesa.' }, { italiano: 'accanto a', pt: 'ao lado de', exemplo: 'La posta è accanto alla banca.' }, { italiano: 'di fronte a', pt: 'em frente a', exemplo: 'Il supermercato è di fronte alla piazza.' }, { italiano: 'tra / fra', pt: 'entre', exemplo: 'La banca è tra la posta e il bar.' },
        ],
        erros: [['Dove è la stazione?', 'Dov\'è la stazione?', 'Na fala e na escrita corrente, «dove è» vira «dov\'è».'], ['La banca è vicino la posta.', 'La banca è vicino alla posta.', 'Depois de «vicino» entra «a», que se junta ao artigo.'], ['Dov\'è i bagni?', 'Dove sono i bagni?', 'Plural pede «dove sono».'], ['Il museo è lontano a casa.', 'Il museo è lontano da casa.', '«Lontano» usa «da», não «a».']],
      }),
      producao(5, 'Descreva em voz alta a sua rua ou o seu bairro: «Vicino a casa mia c\'è… Davanti a… c\'è… Dietro… Lontano da casa mia c\'è…»'),
    ]),
    sessao('S2', 'Pedir e dar direções', [
      revisao(4, 'Diga em voz alta seis lugares da cidade com o artigo e uma frase com «vicino a» ou «accanto a».'),
      palavras(6, [
        ['a destra', 'a déstra', 'à direita', ''], ['a sinistra', 'a sinístra', 'à esquerda', ''], ['dritto, diritto', 'drítto', 'em frente, reto', ''], ['l\'incrocio', 'linkrótcho', 'o cruzamento', ''], ['il semaforo', 'il semáforo', 'o semáforo', ''], ['la strada', 'la stráda', 'a rua, a estrada', ''],
      ]),
      gramatica(12, 'Direções: «Scusi, dov\'è…?» e as respostas', 'PASSO 1: para chamar a atenção de um desconhecido, use «Scusi» (cortesia, «Lei») ou «Scusa» (informal, «tu»). PASSO 2: a pergunta mais útil é «Scusi, dov\'è la stazione?» ou «Scusi, per andare alla stazione?». PASSO 3: a resposta de cortesia usa o verbo na forma de «Lei». Nesta fase, aprenda estas frases como blocos prontos: «Vada dritto.» (siga em frente), «Giri a destra.» (vire à direita), «Giri a sinistra.» (vire à esquerda), «Attraversi la piazza.» (atravesse a praça), «Prenda la prima a destra.» (pegue a primeira à direita). PASSO 4: entre amigos, a forma é a do «tu»: «Vai dritto.», «Gira a destra.», «Attraversa la strada.», «Prendi la seconda a sinistra.» PASSO 5: para dizer onde parar: «È in fondo alla strada.», «È all\'angolo.», «È dopo il semaforo.», «È prima dell\'incrocio.» PASSO 6: para confirmar a distância: «È lontano?» «No, è a cinque minuti a piedi.»', {
        tag: 'Direções',
        comparacao: 'em português a cortesia usa «o senhor, a senhora» com o verbo na terceira pessoa. O italiano faz algo parecido: com «Lei», as ordens têm a forma da terceira pessoa («Vada», «Giri», «Prenda»). Com amigos, usa-se o «tu» («Vai», «Gira», «Prendi»).',
        tabela: [
          { situacao: 'seguir em frente', lei: 'Vada dritto.', tu: 'Vai dritto.' }, { situacao: 'virar à direita', lei: 'Giri a destra.', tu: 'Gira a destra.' }, { situacao: 'virar à esquerda', lei: 'Giri a sinistra.', tu: 'Gira a sinistra.' },
          { situacao: 'atravessar', lei: 'Attraversi la piazza.', tu: 'Attraversa la piazza.' }, { situacao: 'pegar uma rua', lei: 'Prenda la prima a destra.', tu: 'Prendi la prima a destra.' },
        ],
        erros: [['Gira a destra, signora.', 'Giri a destra, signora.', 'Com «Lei» a forma é «giri», não «gira».'], ['Scusa, signore, dov\'è la posta?', 'Scusi, signore, dov\'è la posta?', 'Com desconhecido, «scusi».'], ['Vada diritto a la piazza.', 'Vada dritto fino alla piazza.', '«A + la» vira «alla»; «fino a» marca o ponto final.'], ['È in fondo di la strada.', 'È in fondo alla strada.', '«In fondo a» + artigo contraído.']],
      }),
      producao(8, 'Faça uma pequena cena em voz alta: você é um turista que pergunta o caminho para a farmácia; depois responda como se fosse o passante, com três instruções («Vada dritto…», «Giri a…», «È dopo…»).'),
    ]),
    sessao('S3', 'Transportes e distâncias', [
      revisao(4, 'Dê uma direção em voz alta, com «Lei», para chegar da sua casa a um supermercado.'),
      palavras(5, [
        ['l\'autobus', 'láutobus', 'o ônibus', ''], ['la metropolitana, la metro', 'la metropolitána', 'o metrô', ''], ['il treno', 'il tréno', 'o trem', ''], ['il biglietto', 'il bilhêtto', 'o bilhete', ''], ['la fermata', 'la fermáta', 'o ponto, a parada', ''], ['a piedi', 'a piédi', 'a pé', ''],
      ]),
      gramatica(8, 'Meios de transporte e «ci vuole»', 'PASSO 1: com meios de transporte, o italiano usa «in» sem artigo: «in autobus», «in treno», «in metro», «in macchina», «in bici». PASSO 2: a exceção é «a piedi» (a pé). PASSO 3: para dizer «de ônibus» como instrumento, também vale «con l\'autobus» e «con il treno». PASSO 4: para dizer quanto tempo leva, use «ci vuole» (singular) e «ci vogliono» (plural): «Ci vuole un\'ora.» «Ci vogliono dieci minuti.» Por ora, decore os dois blocos. PASSO 5: para perguntar, «Quanto tempo ci vuole?». PASSO 6: «Dove scendo?» (onde desço?) e «Dove prendo l\'autobus?» são úteis; «scendere» é descer e «salire» é subir.', {
        tag: 'Transporte',
        comparacao: 'o português diz «de ônibus», «de trem», «de carro», sempre com «de». O italiano diz «in autobus», «in treno», «in macchina» e só «a piedi» muda. Cuidado com «salire», que é subir (e não «sair»).',
        tabela: [
          { italiano: 'in autobus', pt: 'de ônibus', exemplo: 'Vado al lavoro in autobus.' }, { italiano: 'in treno', pt: 'de trem', exemplo: 'Viaggio in treno.' }, { italiano: 'in macchina', pt: 'de carro', exemplo: 'Vengo in macchina.' }, { italiano: 'a piedi', pt: 'a pé', exemplo: 'Vado a scuola a piedi.' }, { italiano: 'ci vuole / ci vogliono', pt: 'leva (tempo)', exemplo: 'Ci vogliono dieci minuti a piedi.' },
        ],
        erros: [['Vado in la metro.', 'Vado in metro.', 'Sem artigo depois de «in» com transporte.'], ['Vado a pié.', 'Vado a piedi.', 'Escreve-se «piedi», com «ie».'], ['Ci vuole dieci minuti.', 'Ci vogliono dieci minuti.', 'Plural pede «ci vogliono».'], ['Salgo dall\'autobus.', 'Scendo dall\'autobus.', '«Salire» é subir; para sair do ônibus, «scendere».']],
      }),
      dialogo(8, 'Per andare in centro / Para ir ao centro', 'Um turista pergunta o caminho a uma passante perto da estação.', [
        ['Marco', 'Scusi, signora, per andare in centro?', 'Com licença, senhora, para ir ao centro?'], ['La passante', 'Vada dritto fino al semaforo, poi giri a sinistra.', 'Siga reto até o semáforo e depois vire à esquerda.'], ['Marco', 'È lontano? Ci vuole molto a piedi?', 'É longe? Demora muito a pé?'], ['La passante', 'No, ci vogliono dieci minuti. La piazza è in fondo alla strada.', 'Não, leva dez minutos. A praça fica no fim da rua.'], ['Marco', 'E c\'è una farmacia vicino?', 'E tem uma farmácia por perto?'], ['La passante', 'Sì, è accanto alla chiesa, di fronte al museo.', 'Sim, fica ao lado da igreja, em frente ao museu.'],
      ]),
      producao(5, 'Releia o diálogo em voz alta, os dois papéis. Depois troque «centro» e «farmacia» por outros lugares e mude a direção.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 11', [
      revisao(5, 'Diga em voz alta como ir da sua casa a um lugar da cidade, com três instruções e o meio de transporte.'),
      exercicios(20, [
        ouvir('Dov\'è la stazione', ['Dov\'è la stazione', 'Dove sono le stazioni', 'Dov\'è la fermata'], 'Dov\'è la stazione', 'Ouça «dov\'è» e «stazione».'), ouvir('Giri a destra', ['Giri a destra', 'Gira a destra', 'Giri a sinistra'], 'Giri a destra', 'Com «Lei», «giri».'), ouvir('Ci vogliono dieci minuti', ['Ci vogliono dieci minuti', 'Ci vuole un minuto', 'Ci vuole dieci minuti'], 'Ci vogliono dieci minuti', 'Plural: «ci vogliono».'),
        ditado('La banca è vicino alla posta', 'Escreva: La banca è vicino alla posta.'), ditado('Vada dritto fino al semaforo', 'Escreva: Vada dritto fino al semaforo.'), ditado('Vado al lavoro in autobus', 'Escreva: Vado al lavoro in autobus.'),
        mc('Como se pergunta onde fica a estação?', ['Dov\'è la stazione?', 'Dove sono la stazione?', 'Dov\'è le stazione?'], 'Dov\'è la stazione?', '«Dov\'è» no singular.'), mc('Qual é o sentido de «davanti a»?', ['na frente de', 'atrás de', 'ao lado de'], 'na frente de', '«Davanti» é na frente.'), mc('Qual frase usa o transporte corretamente?', ['Vado in treno.', 'Vado a treno.', 'Vado in il treno.'], 'Vado in treno.', '«In» sem artigo.'), mc('Como um turista chama a atenção de uma senhora?', ['Scusi, signora.', 'Scusa, signora.', 'Scusate, signora.'], 'Scusi, signora.', 'Cortesia: «scusi».'),
        lacuna('La farmacia è ___ alla chiesa. (ao lado)', ['accanto', 'dietro', 'lontano'], 'accanto', '«Accanto a» é ao lado de.'), lacuna('Il museo è ___ dal centro. (longe)', ['lontano', 'vicino', 'davanti'], 'lontano', '«Lontano da».'), lacuna('___ a sinistra al semaforo. (Lei)', ['Giri', 'Gira', 'Girare'], 'Giri', 'Imperativo de cortesia.'), lacuna('Ci ___ un\'ora in treno.', ['vuole', 'vogliono', 'vuoi'], 'vuole', 'Singular: «un\'ora».'),
        ordem('Ordene: «Il bar è davanti al museo.»', ['Il', 'bar', 'è', 'davanti', 'al', 'museo'], 'Il bar è davanti al museo.', 'Sujeito, verbo e lugar.'), ordem('Ordene: «Scusi, dov\'è la posta?»', ['Scusi,', 'dov\'è', 'la', 'posta'], 'Scusi, dov\'è la posta?', 'Pergunta educada.'),
        livre('Escreva em italiano: A farmácia fica em frente ao museu. Siga reto e vire à esquerda.', 'La farmacia è di fronte al museo. Vada dritto e giri a sinistra.'),
      ]),
      producao(5, 'Escolha um lugar da sua cidade e explique em voz alta, com «Lei», como chegar lá a partir de uma estação.'),
    ]),
  ],
});
