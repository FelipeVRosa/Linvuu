import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'es', numero: 6, titulo: 'Presente em -er e -ir', nivel: 'a1',
  objetivo: 'Conjugar os verbos regulares em -er e em -ir no presente, comparar os três grupos (-ar, -er, -ir), usar «y» e «o» com as variantes «e» e «u», e evitar o falso amigo «asistir».',
  nota: 'Você fala do que come, bebe, lê, escreve, aprende e vive, com os dois grupos de verbos que faltavam. Próxima aula: família e possessivos.',
  sessoes: [
    sessao('S1', 'Os verbos regulares em -er', [
      revisao(5, 'Conjugue «hablar» e «trabajar» de memória. Diga três frases com «hay» e dois substantivos no plural, cada um com o artigo.'),
      palavras(8, [
        ['comer', 'komér', 'comer', ''], ['beber', 'bebér', 'beber', ''], ['leer', 'leér', 'ler', ''], ['aprender', 'aprendér', 'aprender', ''],
        ['correr', 'korrér', 'correr', ''], ['vender', 'bendér', 'vender', ''], ['responder', 'respondér', 'responder', ''], ['comprender', 'komprendér', 'entender, compreender', ''],
      ]),
      gramatica(12, 'O presente dos verbos em -er', 'PASSO 1: os verbos deste grupo terminam em «-er» no infinitivo: «comer», «beber», «aprender». Tire o «-er» e fica o radical: «com-», «beb-», «aprend-». PASSO 2: acrescente ao radical as terminações do presente: -o, -es, -e, -emos, -éis, -en. «Como, comes, come, comemos, coméis, comen.» PASSO 3: compare com os verbos em -ar da aula 4: as vogais trocam («habl-a» vira «com-e»), mas a lógica é a mesma. PASSO 4: a sílaba forte está no radical (CÓmo, CÓmes, CÓme, CÓmen), menos em «nosotros» e «vosotros», onde cai na terminação: «coMEmos», «coMÉis». PASSO 5: «usted» usa a forma de «él» («Usted bebe»), e «ustedes», a de «ellos» («Ustedes comen»). Já «vosotros» (Espanha) tem til: «coméis». PASSO 6: «leer» tem duas vogais seguidas, e nisso é regular: «leo, lees, lee, leemos, leéis, leen». Pronuncie cada «e» do «lees» e do «leemos». PASSO 7: na Espanha, «comer» pode significar almoçar, e «la comida» é também o almoço; «cenar» é jantar. PASSO 8: «aprender a» + infinitivo é «aprender a fazer algo»: «Aprendo a cocinar.» PASSO 9: «comprender» é entender; não confunda com «comprar» (comprar).', {
        tag: 'Verbos',
        comparacao: 'a conjugação de «comer» é quase igual à do português: «como, comes, come, comemos, coméis, comen» corresponde a «como, comes, come, comemos, comeis, comem». A diferença é a terminação «-en», sem nasal, e a forma «coméis», que o português já não usa no dia a dia. Pronuncie o «e» final sempre aberto e inteiro: «come», e não «comi».',
        tabelas: [
          { titulo: 'comer (comer)', linhas: [
            { pronome: 'yo', forma: 'como', exemplo: 'Como fruta.' },
            { pronome: 'tú', forma: 'comes', exemplo: '¿Comes carne?' },
            { pronome: 'él / ella / usted', forma: 'come', exemplo: 'Ella come en casa.' },
            { pronome: 'nosotros, nosotras', forma: 'comemos', exemplo: 'Comemos tarde.' },
            { pronome: 'vosotros, vosotras', forma: 'coméis', exemplo: '¿Coméis juntos?' },
            { pronome: 'ellos, ellas, ustedes', forma: 'comen', exemplo: 'Ellos comen poco.' },
          ] },
          { titulo: 'Outros verbos regulares em -er', linhas: [
            { infinitivo: 'beber', yo: 'bebo', tu: 'bebes', el_ella_usted: 'bebe', nosotros: 'bebemos', vosotros: 'bebéis', ellos_ustedes: 'beben' },
            { infinitivo: 'leer', yo: 'leo', tu: 'lees', el_ella_usted: 'lee', nosotros: 'leemos', vosotros: 'leéis', ellos_ustedes: 'leen' },
            { infinitivo: 'aprender', yo: 'aprendo', tu: 'aprendes', el_ella_usted: 'aprende', nosotros: 'aprendemos', vosotros: 'aprendéis', ellos_ustedes: 'aprenden' },
            { infinitivo: 'vender', yo: 'vendo', tu: 'vendes', el_ella_usted: 'vende', nosotros: 'vendemos', vosotros: 'vendéis', ellos_ustedes: 'venden' },
          ] },
        ],
        exemplos: [['Bebo agua con el almuerzo.', 'Bebo água no almoço.'], ['Marta lee un libro.', 'Marta lê um livro.'], ['Aprendemos español.', 'Aprendemos espanhol.'], ['Ellos venden fruta.', 'Eles vendem fruta.']],
        erros: [['Tú come mucho.', 'Tú comes mucho.', 'Com «tú», a terminação é «-es».'], ['Nosotros comís.', 'Nosotros comemos.', 'Em -er, «nosotros» termina em «-emos»; «-ís» é terminação de -ir, e só de «vosotros».'], ['Ellos bebe agua.', 'Ellos beben agua.', 'Com «ellos», a terminação é «-en».'], ['Yo leo un libro y tú lés otro.', 'Yo leo un libro y tú lees otro.', 'O «lees» tem dois «e», e nunca leva til.'], ['Vosotros comeis.', 'Vosotros coméis.', 'A forma de «vosotros» leva til.']],
      }),
      producao(5, 'Diga seis frases sobre o que você come, bebe, lê e aprende: «Como… Bebo… Leo… Aprendo…» Depois diga o que um amigo faz, com a forma de «él, ella».'),
    ]),
    sessao('S2', 'Os verbos regulares em -ir', [
      revisao(4, 'Conjugue «comer» e «beber» de memória, de «yo» a «ellos». Diga uma frase com cada forma.'),
      palavras(6, [
        ['vivir', 'bibír', 'morar, viver', ''], ['escribir', 'eskribír', 'escrever', ''], ['abrir', 'abrír', 'abrir', ''], ['recibir', 'rethibír', 'receber', ''], ['decidir', 'dethidír', 'decidir', ''], ['subir', 'subír', 'subir', ''],
      ]),
      gramatica(12, 'O presente dos verbos em -ir', 'PASSO 1: os verbos deste grupo terminam em «-ir»: «vivir», «escribir», «abrir». O radical é o que resta sem o «-ir»: «viv-», «escrib-», «abr-». PASSO 2: as terminações do presente são: -o, -es, -e, -imos, -ís, -en. «Vivo, vives, vive, vivimos, vivís, viven.» PASSO 3: perceba que são as mesmas do grupo -er, menos duas: em «nosotros» é «-imos» (e não «-emos») e em «vosotros» é «-ís» (e não «-éis»). Nas outras quatro, as terminações são idênticas. PASSO 4: o til de «vivís», «escribís» e «abrís» marca a sílaba forte: viVÍS. Não se escreve «vivís» com dois «i». PASSO 5: como os verbos em -er e -ir quase se confundem, decore os três grupos juntos: em «yo», a terminação é «-o» nos três; em «tú», «-as» ou «-es»; em «él», «-a» ou «-e». PASSO 6: «vivir» também significa morar: «Vivo en Madrid» é «moro em Madri». PASSO 7: falso amigo importante: «asistir» não é assistir (ver): significa comparecer, estar presente. «Asisto a clase» é «vou às aulas». Para ver um filme, diz-se «ver una película». PASSO 8: «recibir» é receber; para dizer que alguém recebe visitas em casa, use «recibir a» com o «a» pessoal: «Recibo a mis amigos». PASSO 9: «abrir» e «subir» são regulares no presente; os particípios irregulares («abierto», «escrito») ficam para a aula 17.', {
        tag: 'Verbos',
        comparacao: 'em português, a conjugação de «viver» e «escrever» é praticamente a mesma do espanhol: «vivo, vives, vive, vivimos, vivís, viven» corresponde a «vivo, vives, vive, vivemos, viveis, vivem». O ponto novo é que os verbos em -er e -ir quase não se distinguem, e a única diferença está em «nosotros» (-imos) e «vosotros» (-ís). E o falso amigo: o verbo «asistir» não é «assistir», e sim «comparecer».',
        tabelas: [
          { titulo: 'vivir (morar, viver)', linhas: [
            { pronome: 'yo', forma: 'vivo', exemplo: 'Vivo en Valencia.' },
            { pronome: 'tú', forma: 'vives', exemplo: '¿Vives con un amigo?' },
            { pronome: 'él / ella / usted', forma: 'vive', exemplo: 'Usted vive cerca.' },
            { pronome: 'nosotros, nosotras', forma: 'vivimos', exemplo: 'Vivimos en una ciudad grande.' },
            { pronome: 'vosotros, vosotras', forma: 'vivís', exemplo: '¿Dónde vivís?' },
            { pronome: 'ellos, ellas, ustedes', forma: 'viven', exemplo: 'Ellos viven en Sevilla.' },
          ] },
          { titulo: 'Outros verbos regulares em -ir', linhas: [
            { infinitivo: 'escribir', yo: 'escribo', tu: 'escribes', el_ella_usted: 'escribe', nosotros: 'escribimos', vosotros: 'escribís', ellos_ustedes: 'escriben' },
            { infinitivo: 'abrir', yo: 'abro', tu: 'abres', el_ella_usted: 'abre', nosotros: 'abrimos', vosotros: 'abrís', ellos_ustedes: 'abren' },
            { infinitivo: 'recibir', yo: 'recibo', tu: 'recibes', el_ella_usted: 'recibe', nosotros: 'recibimos', vosotros: 'recibís', ellos_ustedes: 'reciben' },
            { infinitivo: 'decidir', yo: 'decido', tu: 'decides', el_ella_usted: 'decide', nosotros: 'decidimos', vosotros: 'decidís', ellos_ustedes: 'deciden' },
          ] },
          { titulo: 'Os três grupos lado a lado', linhas: [
            { pronome: 'yo', ar: 'hablo', er: 'como', ir: 'vivo' },
            { pronome: 'tú', ar: 'hablas', er: 'comes', ir: 'vives' },
            { pronome: 'él, ella, usted', ar: 'habla', er: 'come', ir: 'vive' },
            { pronome: 'nosotros', ar: 'hablamos', er: 'comemos', ir: 'vivimos' },
            { pronome: 'vosotros', ar: 'habláis', er: 'coméis', ir: 'vivís' },
            { pronome: 'ellos, ustedes', ar: 'hablan', er: 'comen', ir: 'viven' },
          ] },
        ],
        exemplos: [['Escribo una carta.', 'Escrevo uma carta.'], ['Abrimos la tienda.', 'Abrimos a loja.'], ['Recibo a mis amigos.', 'Recebo meus amigos.'], ['Asistimos a clase.', 'Vamos à aula (comparecemos).'], ['Vosotros vivís cerca.', 'Vocês (na Espanha) moram perto.']],
        erros: [['Vosotros vivéis.', 'Vosotros vivís.', 'Em -ir, «vosotros» termina em «-ís», e não em «-éis».'], ['Nosotros vivemos.', 'Nosotros vivimos.', 'Em -ir, «nosotros» termina em «-imos».'], ['Asisto una película.', 'Veo una película.', '«Asistir» é comparecer, e não ver; e pede «a» quando há complemento: «asisto a clase».'], ['Ellas escribe.', 'Ellas escriben.', 'Com «ellas», a terminação é «-en».'], ['Yo vivo no Madrid.', 'Yo vivo en Madrid.', 'Em espanhol não existe «no» como preposição: para o lugar onde se vive, use «en».']],
      }),
      producao(8, 'Responda em voz alta: «¿Dónde vives? ¿Con quién vives? ¿Qué escribes? ¿Qué abres por la mañana? ¿A qué clase asistes?» Depois faça as mesmas perguntas a um desconhecido, com «usted».'),
    ]),
    sessao('S3', 'Os três grupos em contexto', [
      revisao(4, 'Complete de memória a tabela dos três grupos: para cada pessoa, diga a forma de «hablar», «comer» e «vivir».'),
      palavras(5, [
        ['asistir a', 'asistír a', 'comparecer, frequentar (aula, reunião)', ''], ['aprender a', 'aprendér a', 'aprender a (fazer algo)', ''], ['creer que', 'kreér ké', 'achar que, crer que', ''], ['el periódico', 'el periódiko', 'o jornal', ''], ['la carta', 'la kárta', 'a carta', ''],
      ]),
      gramatica(8, 'Y/e, o/u e verbos com preposição', 'PASSO 1: «y» (e) vira «e» antes de uma palavra que começa com o som «i»: «Ana e Inés», «padres e hijos», «Lee e investiga». Só vale para o som «i»; antes de «hie-», fica «y»: «agua y hielo». PASSO 2: «o» (ou) vira «u» antes de uma palavra que começa com o som «o»: «siete u ocho», «mujer u hombre», «uno u otro». Isso só muda o som, para não ter dois «o» seguidos. PASSO 3: com «aprender», «a» + infinitivo: «Aprendo a leer en español.» PASSO 4: «asistir a» pede «a» antes do lugar ou do evento: «Asisto a clase», «Asistimos a una reunión». PASSO 5: «creer que» + frase: «Creo que vive en Valencia.» Para dizer «acho que sim», use «Creo que sí»; «Creo que no» para o contrário. PASSO 6: lembre do «a pessoal» também com verbos de -er e -ir: «Recibo a Ana», «Escucho a Pablo». PASSO 7: o verbo concorda com o sujeito mesmo quando há dois: «Ana y Pablo viven aquí» (vivir, ellos).', {
        tag: 'Conjunções',
        comparacao: 'em português também trocamos sons, mas por outros motivos: «e» e «ou» não mudam. Em espanhol, «y» e «o» se transformam em «e» e «u» para evitar dois sons iguais. O fenômeno é curto, mas aparece o tempo todo, e se você o ignora, o espanhol soa menos fluido.',
        tabela: [
          { regra: 'y vira e antes de i-, hi- (menos hie-)', exemplo: 'Ana e Inés viven aquí.', traducao: 'Ana e Inés moram aqui.' },
          { regra: 'o vira u antes de o-, ho-', exemplo: 'Tengo siete u ocho libros.', traducao: 'Tenho sete ou oito livros.' },
          { regra: 'aprender a + infinitivo', exemplo: 'Aprendo a cocinar.', traducao: 'Aprendo a cozinhar.' },
          { regra: 'asistir a + lugar, evento', exemplo: 'Asisto a una clase.', traducao: 'Vou a uma aula.' },
          { regra: 'creer que + frase', exemplo: 'Creo que sí.', traducao: 'Acho que sim.' },
        ],
        erros: [['Padres y hijos viven aquí.', 'Padres e hijos viven aquí.', '«Y» vira «e» antes do som «i».'], ['Siete o ocho libros', 'Siete u ocho libros', '«O» vira «u» antes de palavra que começa com «o».'], ['Aprendo cocinar.', 'Aprendo a cocinar.', 'Depois de «aprender», o infinitivo pede «a».'], ['Asisto la clase.', 'Asisto a clase.', '«Asistir» pede «a».'], ['Creo de que sí.', 'Creo que sí.', 'Não há «de» depois de «creer».']],
      }),
      texto(8, 'Un día tranquilo / Um dia tranquilo', 'Hoy es un día tranquilo. Vivo en Valencia con un amigo, Hugo. Hugo lee el periódico y bebe café. Yo aprendo palabras nuevas y escribo una carta. Después comemos juntos: Hugo cocina arroz y yo corto pan. Recibimos a una amiga, Clara, y abrimos la ventana. Clara no come carne, pero come mucha fruta.', 'Hoje é um dia tranquilo. Moro em Valência com um amigo, Hugo. Hugo lê o jornal e toma café. Eu aprendo palavras novas e escrevo uma carta. Depois comemos juntos: Hugo cozinha arroz e eu corto pão. Recebemos uma amiga, Clara, e abrimos a janela. Clara não come carne, mas come muita fruta.', [
        ['¿Dónde vive el narrador?', 'En Valencia, con un amigo.'], ['¿Qué lee Hugo?', 'El periódico.'], ['¿Qué escribe el narrador?', 'Una carta.'], ['¿A quién reciben?', 'A Clara, una amiga.'], ['¿Qué no come Clara?', 'Carne.'],
      ]),
      producao(5, 'Escreva e diga cinco frases sobre o seu dia com verbos de cada grupo (-ar, -er, -ir) e uma frase com «y» ou «o».'),
    ]),
    sessao('S4', 'Revisão e prática da aula 6', [
      revisao(5, 'Diga a forma de «yo» e de «nosotros» de seis verbos: beber, leer, vender, escribir, abrir, recibir.'),
      exercicios(20, [
        ouvir('Vivimos en Valencia', ['Vivimos en Valencia', 'Vivís en Valencia', 'Viven en Valencia'], 'Vivimos en Valencia', 'Ouça o «-imos» de «vivimos».'),
        ouvir('Ellos beben agua', ['Ellos beben agua', 'Ellos beben leche', 'Él bebe agua'], 'Ellos beben agua', 'Ouça o «-en» e a palavra «agua».'),
        ouvir('¿Qué lees?', ['¿Qué lees?', '¿Qué lee?', '¿Qué leéis?'], '¿Qué lees?', 'Ouça o «lees» com as duas vogais.'),
        ditado('Como fruta', 'Escreva: Como fruta.'), ditado('Escribimos una carta', 'Escreva: Escribimos una carta.'), ditado('Vosotros coméis juntos', 'Escreva: Vosotros coméis juntos.'),
        mc('Qual é a forma de «tú» de «aprender»?', ['aprendes', 'aprende', 'aprendéis'], 'aprendes', 'Em -er, «tú» termina em «-es».'),
        mc('Qual é a forma de «vosotros» de «vivir»?', ['vivís', 'vivéis', 'viven'], 'vivís', 'Em -ir, «vosotros» termina em «-ís».'),
        mc('Qual é a forma de «nosotros» de «escribir»?', ['escribimos', 'escribemos', 'escribís'], 'escribimos', 'Em -ir, «nosotros» termina em «-imos».'),
        mc('Como se diz «Vou às aulas» (frequento as aulas)?', ['Asisto a clase.', 'Asisto una clase.', 'Veo clase.'], 'Asisto a clase.', '«Asistir a» significa comparecer.'),
        mc('Qual frase usa corretamente «y/e»?', ['Ana e Inés viven aquí.', 'Ana y Inés viven aquí.', 'Ana e Pablo viven aquí.'], 'Ana e Inés viven aquí.', '«Y» vira «e» diante do som «i» de «Inés»; diante de «Pablo» continua «y».'),
        mc('Qual verbo quer dizer «entender, compreender»?', ['comprender', 'comprar', 'comer'], 'comprender', '«Comprar» é comprar.'),
        lacuna('Yo ___ un libro. (leer)', ['leo', 'lees', 'lee'], 'leo', 'Com «yo», a terminação é «-o».'), lacuna('Ellos ___ en Sevilla. (vivir)', ['viven', 'vive', 'vivimos'], 'viven', 'Com «ellos», a terminação é «-en».'),
        lacuna('Aprendo ___ cocinar. (a)', ['a', 'de', 'en'], 'a', '«Aprender a» + infinitivo.'), lacuna('Tengo siete ___ ocho libros. (ou)', ['u', 'o', 'y'], 'u', '«O» vira «u» antes de «ocho».'), lacuna('Nosotros ___ café. (beber)', ['bebemos', 'bebimos', 'bebéis'], 'bebemos', 'Em -er, «nosotros» termina em «-emos».'),
        ordem('Ordene: «Vivo en Valencia con un amigo.»', ['Vivo', 'en', 'Valencia', 'con', 'un', 'amigo.'], 'Vivo en Valencia con un amigo.', 'Verbo, lugar e companhia.'), ordem('Ordene: «Hugo lee el periódico.»', ['Hugo', 'lee', 'el', 'periódico.'], 'Hugo lee el periódico.', 'Sujeito, verbo e complemento.'),
        livre('Escreva em espanhol: Eu leio o jornal e escrevo uma carta.', 'Leo el periódico y escribo una carta.'),
        lacuna('Tú ___ en Valencia. (vivir)', ['vives', 'vive', 'vivo'], 'vives', 'Com «tú», os verbos em -ir terminam em «-es».'),
        lacuna('Ella ___ una carta. (recibir)', ['recibes', 'recibe', 'recibo'], 'recibe', 'Com «ella», a terminação é «-e».'),
        lacuna('Nosotros ___ la puerta. (abrir)', ['abrís', 'abrimos', 'abremos'], 'abrimos', 'Verbos em -ir fazem «nosotros» em «-imos».'),
        lacuna('Ellos ___ muy rápido. (correr)', ['corre', 'corren', 'corres'], 'corren', 'Com «ellos», o presente termina em «-en».'),
        mc('Qual é a forma de «yo» de «vender»?', ['vendo', 'vendes', 'vende'], 'vendo', 'Em «yo», os três grupos terminam em «-o».'),
        mc('Qual frase está correta?', ['Creo de que sí.', 'Creo que sí.', 'Creo a que sí.'], 'Creo que sí.', '«Creer» leva «que» direto, sem preposição.'),
        mc('Qual é a forma de «ustedes» de «responder»?', ['respondéis', 'responde', 'responden'], 'responden', '«Ustedes» usa a forma de «ellos».'),
        ordem('Ordene: «Nosotros aprendemos a cocinar.»', ['Nosotros', 'aprendemos', 'a', 'cocinar.'], 'Nosotros aprendemos a cocinar.', '«Aprender a» + infinitivo.'),
        livre('Escreva em espanhol: Acho que sim.', 'Creo que sí.'),
        livre('Escreva em espanhol: Eles abrem a porta e recebem uma carta.', 'Abren la puerta y reciben una carta.'),
      ]),
      producao(5, 'Conte a um amigo, em voz alta, o que você come, bebe, lê e escreve durante o dia. Faça-lhe duas perguntas com «tú».'),
    ]),
  ],
});
