import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 14, titulo: 'Gramática: os verbos modais', nivel: 'a1',
  objetivo: 'Usar können, müssen, wollen, dürfen, sollen e möchten, com o segundo verbo no fim, e distinguir «nicht müssen» (não precisar) de «nicht dürfen» (ser proibido).',
  nota: 'Você usa os seis verbos modais. Próxima aula: o Perfekt, o passado do dia a dia.',
  sessoes: [
    sessao('S1', 'Os seis modais', [
      revisao(5, 'Escreva as 6 formas de «möchten» e 3 frases com a moldura da frase.'),
      palavras(6, [
        ['schwimmen', 'xvímen', 'nadar', 'to swim'], ['tanzen', 'tántsen', 'dançar', 'to dance'], ['singen', 'zíngen', 'cantar', 'to sing'], ['parken', 'párken', 'estacionar', 'to park'], ['bleiben', 'bláiben', 'ficar, permanecer', 'to stay'], ['warten', 'várten', 'esperar', 'to wait'],
      ]),
      gramatica(14, 'Verbos modais: forma e sentido', 'Os verbos modais mudam o sentido do verbo principal. O modal fica na 2ª posição, conjugado, e o verbo principal vai para o FIM, no infinitivo (a moldura da frase): «Ich kann gut schwimmen.» Atenção às formas: «ich» e «er / sie / es» são IGUAIS e sem -t (ich kann, er kann), e quase todos trocam a vogal no singular (können → kann, müssen → muss, dürfen → darf, wollen → will). Sentidos: können = poder, saber; müssen = ter que; wollen = querer; dürfen = ter permissão; sollen = dever (ordem de outra pessoa); möchten = gostaria.', {
        tag: 'Verbos',
        comparacao: 'em português «poder», «dever» e «querer» também vêm com outro verbo no infinitivo. A diferença é a posição: em alemão o infinitivo vai para o fim da frase.',
        tabela: [
          { pronome: 'ich', können: 'kann', müssen: 'muss', wollen: 'will', dürfen: 'darf', sollen: 'soll', möchten: 'möchte' }, { pronome: 'du', können: 'kannst', müssen: 'musst', wollen: 'willst', dürfen: 'darfst', sollen: 'sollst', möchten: 'möchtest' },
          { pronome: 'er / sie / es', können: 'kann', müssen: 'muss', wollen: 'will', dürfen: 'darf', sollen: 'soll', möchten: 'möchte' }, { pronome: 'wir', können: 'können', müssen: 'müssen', wollen: 'wollen', dürfen: 'dürfen', sollen: 'sollen', möchten: 'möchten' },
          { pronome: 'ihr', können: 'könnt', müssen: 'müsst', wollen: 'wollt', dürfen: 'dürft', sollen: 'sollt', möchten: 'möchtet' }, { pronome: 'sie / Sie', können: 'können', müssen: 'müssen', wollen: 'wollen', dürfen: 'dürfen', sollen: 'sollen', möchten: 'möchten' },
        ],
        erros: [['Er kannt schwimmen.', 'Er kann schwimmen.', 'No «er», o modal não tem -t.'], ['Ich kann schwimmen gut.', 'Ich kann gut schwimmen.', 'O verbo principal vai para o FIM.']],
      }),
      producao(5, 'Diga: «Ich kann schwimmen. Ich muss arbeiten. Ich will tanzen. Ich darf hier parken. Du sollst warten.»'),
    ]),
    sessao('S2', 'Sentidos e armadilhas', [
      revisao(5, 'Escreva as formas de «können», «müssen» e «dürfen» no «ich», «du» e «er».'),
      gramatica(14, 'Atenção: «nicht müssen» não é «nicht dürfen»', 'A negação muda o sentido dos modais de um jeito que confunde quem fala português. «Du musst nicht kommen» = você NÃO PRECISA vir (é opcional). «Du darfst nicht kommen» = você NÃO PODE vir (é proibido). «Können» pode ser capacidade («Ich kann schwimmen») ou possibilidade («Es kann regnen»). «Dürfen» pede permissão («Darf ich…?»); «können» também serve para pedir, de modo mais informal («Kannst du mir helfen?»). «Sollen» expressa o que outra pessoa quer de você («Der Arzt sagt, ich soll mehr schlafen»).', {
        tag: 'Verbos',
        comparacao: 'em português «não precisa» e «não pode» são bem diferentes. Em alemão o erro típico é usar «nicht müssen» querendo dizer «proibido».',
        tabela: [
          { modal: 'müssen', sentido: 'ter que', exemplo: 'Ich muss arbeiten.' }, { modal: 'nicht müssen', sentido: 'não precisar', exemplo: 'Du musst nicht kommen.' }, { modal: 'dürfen', sentido: 'ter permissão', exemplo: 'Darf ich hier sitzen?' }, { modal: 'nicht dürfen', sentido: 'ser proibido', exemplo: 'Hier darf man nicht parken.' },
          { modal: 'können', sentido: 'poder, saber', exemplo: 'Kannst du mir helfen?' }, { modal: 'wollen', sentido: 'querer (firme)', exemplo: 'Ich will heute schwimmen.' }, { modal: 'möchten', sentido: 'gostaria (educado)', exemplo: 'Ich möchte einen Kaffee.' }, { modal: 'sollen', sentido: 'dever (ordem de outro)', exemplo: 'Ich soll mehr schlafen.' },
        ],
        erros: [['Hier musst du nicht parken. (quero dizer: é proibido)', 'Hier darfst du nicht parken.', '«nicht müssen» é só «não precisa».']],
      }),
      producao(11, 'Diga 8 frases em voz alta, trocando os sentidos: «Du musst nicht kommen. Du darfst nicht kommen. Darf ich hier sitzen? Kannst du mir helfen? Ich soll mehr schlafen. Ich will Deutsch lernen.»'),
    ]),
    sessao('S3', 'Modais com separáveis e diálogo', [
      revisao(5, 'Escreva uma frase com cada um dos 6 modais.'),
      gramatica(10, 'Modais com verbo separável e perguntas', 'Com um modal, o verbo separável fica INTEIRO no fim: «Ich muss um sieben Uhr aufstehen», «Du kannst morgen mitkommen». A pergunta de sim ou não começa pelo modal: «Kannst du morgen kommen?». Com palavra interrogativa: «Wann musst du aufstehen?». Sem verbo principal: quando o sentido é claro, ele pode ficar de fora («Ich muss nach Hause», «Ich will ins Kino»), sobretudo com movimento.', {
        tag: 'Verbos',
        tabela: [
          { padrao: 'modal + separável inteiro no fim', exemplo: 'Ich muss um sieben Uhr aufstehen.' }, { padrao: 'pergunta de sim ou não', exemplo: 'Kannst du morgen mitkommen?' }, { padrao: 'palavra interrogativa', exemplo: 'Wann musst du aufstehen?' }, { padrao: 'verbo principal omitido', exemplo: 'Ich muss nach Hause.' },
        ],
      }),
      dialogo(10, 'Regeln / Regras', 'Dois amigos estão num estacionamento.', [
        ['Lea', 'Darf ich hier parken?', 'Posso estacionar aqui?'], ['Paul', 'Nein, hier darfst du nicht parken. Du musst dort parken.', 'Não, aqui você não pode estacionar. Tem que estacionar ali.'], ['Lea', 'Muss ich bezahlen?', 'Preciso pagar?'],
        ['Paul', 'Ja, du musst einen Euro pro Stunde bezahlen.', 'Sim, você precisa pagar um euro por hora.'], ['Lea', 'Kann ich mit Karte zahlen?', 'Posso pagar com cartão?'], ['Paul', 'Nein, du kannst nur bar zahlen.', 'Não, você só pode pagar em dinheiro.'],
        ['Lea', 'Ich will heute noch einkaufen. Ich möchte ins Kaufhaus gehen.', 'Eu quero fazer compras ainda hoje. Gostaria de ir à loja de departamentos.'], ['Paul', 'Das Kaufhaus schließt um achtzehn Uhr. Du kannst nicht lange warten.', 'A loja fecha às dezoito horas. Você não pode esperar muito.'], ['Lea', 'Danke! Ich kann um fünf Uhr dort sein.', 'Obrigada! Eu posso estar lá às cinco.'], ['Paul', 'Gut, dann musst du jetzt losfahren.', 'Ótimo, então você precisa partir agora.'],
      ]),
      producao(5, 'Diga 5 regras da sua vida usando «muss», «darf nicht», «kann», «will» e «soll».'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases com modais, uma delas com verbo separável.'),
      exercicios(20, [
        lacuna('Ich ___ gut schwimmen. (können)', ['kann', 'kannst', 'können'], 'kann', 'ich → kann.'), lacuna('Er ___ heute arbeiten. (müssen)', ['muss', 'musst', 'müssen'], 'muss', 'er → muss (sem -t).'), lacuna('Du ___ hier nicht parken. (dürfen)', ['darfst', 'darf', 'dürft'], 'darfst', 'du → darfst.'),
        lacuna('Wir ___ nach Hause fahren. (wollen)', ['wollen', 'will', 'wollt'], 'wollen', 'wir → wollen.'), lacuna('Ihr ___ pünktlich sein. (sollen)', ['sollt', 'sollen', 'soll'], 'sollt', 'ihr → sollt.'), lacuna('Ich ___ einen Kaffee trinken. (möchten)', ['möchte', 'möchtest', 'möchten'], 'möchte', 'ich → möchte.'),
        mc('«Du musst nicht kommen» significa:', ['Você não precisa vir', 'Você não pode vir', 'Você não quer vir'], 'Você não precisa vir', 'nicht müssen = não precisar.'), mc('«Hier darfst du nicht parken» significa:', ['Aqui é proibido estacionar', 'Aqui você não precisa estacionar', 'Aqui você não sabe estacionar'], 'Aqui é proibido estacionar', 'nicht dürfen = proibido.'),
        ordem('Ordene: «Eu preciso me levantar às sete horas.»', ['Ich', 'muss', 'um', 'sieben', 'Uhr', 'aufstehen'], 'Ich muss um sieben Uhr aufstehen.', 'O separável fica inteiro no fim.'), ordem('Ordene: «Você pode me ajudar?»', ['Kannst', 'du', 'mir', 'helfen'], 'Kannst du mir helfen?', 'Modal primeiro; verbo no fim.'),
        mc('Onde vai o verbo principal com um modal?', ['no fim da frase', 'logo depois do modal', 'no começo'], 'no fim da frase', 'Moldura da frase.'), mc('Qual modal pede permissão?', ['dürfen', 'müssen', 'wollen'], 'dürfen', 'Darf ich…?'),
        ouvir('Ich muss nach Hause', ['Ich muss nach Hause', 'Ich will nach Hause', 'Ich darf nach Hause'], 'Ich muss nach Hause', 'müssen = ter que.'), ditado('Kannst du mir helfen', 'können + verbo no fim.'), mc('«sollen» expressa:', ['o que outra pessoa quer de você', 'o que você quer', 'o que você sabe'], 'o que outra pessoa quer de você', 'Ordem ou conselho de outro.'),
        livre('Escreva 5 frases com modais: o que você precisa, pode, quer, não pode e deve fazer.', 'Ich muss arbeiten. Ich kann gut kochen. Ich will Deutsch lernen. Ich darf hier nicht parken. Ich soll mehr schlafen.'),
      ]),
      producao(5, 'Grave-se falando das suas obrigações e dos seus desejos com os modais.'),
    ]),
  ],
});
