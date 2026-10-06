import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 50, titulo: 'O passivo 1: werden + Partizip II', nivel: 'b1',
  objetivo: 'Formar o passivo do presente (werden + Partizip II) com e sem agente (von + dativo), usar o passivo com modais e distinguir o passivo (processo) do estado (sein + Partizip II).',
  nota: 'Você usa o passivo no presente. Próxima aula: o passivo no passado.',
  sessoes: [
    sessao('S1', 'O passivo no presente', [
      revisao(5, 'Escreva 6 frases com relativas no dativo, com preposição e no genitivo.'),
      palavras(8, [
        ['reparieren', 'reparíren', 'consertar', 'to repair'], ['bauen', 'báuen', 'construir', 'to build'], ['herstellen', 'hér-xtelen', 'produzir, fabricar', 'to produce'], ['liefern', 'lífern', 'entregar', 'to deliver'],
        ['produzieren', 'produtsíren', 'produzir', 'to produce'], ['verkaufen', 'ferkáufen', 'vender', 'to sell'], ['erfinden', 'erfínden', 'inventar', 'to invent'], ['entdecken', 'entdéken', 'descobrir', 'to discover'],
      ]),
      gramatica(14, 'O passivo, passo a passo', 'PASSO 1: no ATIVO, o sujeito FAZ a ação: «Der Mechaniker repariert das Auto.» No PASSIVO, a ação é o foco e quem a faz importa menos: «Das Auto wird repariert» (o carro está sendo consertado). PASSO 2: forma do passivo do presente: «WERDEN» conjugado (2ª posição) + PARTIZIP II (no fim): «Das Auto wird repariert.» PASSO 3: conjugue «werden»: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden. PASSO 4: o objeto direto do ativo vira SUJEITO do passivo: «Der Mechaniker repariert DAS AUTO» → «DAS AUTO wird repariert.» PASSO 5: se quiser dizer QUEM faz, use «VON + dativo»: «Das Auto wird vom Mechaniker repariert.» PASSO 6: para coisa/meio, use «durch + acusativo»: «Das Haus wird durch den Sturm zerstört.»', {
        tag: 'Verbos',
        comparacao: 'o português tem o passivo com «ser + particípio» («o carro é consertado») e com «estar sendo». O alemão usa «werden + Partizip II», e o agente aparece com «von».',
        tabela: [
          { ativo: 'Der Mechaniker repariert das Auto.', passivo: 'Das Auto wird repariert.' }, { ativo: 'Man baut das Haus.', passivo: 'Das Haus wird gebaut.' }, { ativo: 'Die Firma liefert die Pakete.', passivo: 'Die Pakete werden geliefert.' }, { ativo: 'Der Koch kocht das Essen.', passivo: 'Das Essen wird vom Koch gekocht.' }, { ativo: 'Man verkauft Brot.', passivo: 'Brot wird verkauft.' },
        ],
        erros: [['Das Auto wird reparieren.', 'Das Auto wird repariert.', 'Passivo: Partizip II no fim, não infinitivo.'], ['Die Pakete wird geliefert.', 'Die Pakete werden geliefert.', 'Plural: «werden».'], ['Das Auto wird von der Mechaniker repariert.', 'Das Auto wird vom Mechaniker repariert.', '«von» + dativo: «vom».']],
      }),
      producao(3, 'Transforme 6 frases do ativo para o passivo em voz alta: «Man repariert das Auto → Das Auto wird repariert.»'),
    ]),
    sessao('S2', 'O passivo com modais e o estado', [
      revisao(5, 'Escreva 6 frases no passivo do presente, duas com «von».'),
      palavras(8, [
        ['müssen', 'müssen', 'ter que', 'must'], ['können', 'kö-nen', 'poder', 'can'], ['dürfen', 'dürfen', 'ter permissão', 'may'], ['sollen', 'zólen', 'dever', 'should'],
        ['geöffnet', 'gueöfnet', 'aberto', 'open'], ['geschlossen', 'guexlóssen', 'fechado', 'closed'], ['repariert', 'repariert', 'consertado', 'repaired'], ['erledigt', 'erlédigt', 'resolvido, feito', 'done'],
      ]),
      gramatica(12, 'Passivo com modais e Zustandspassiv', 'PASSO 1: o passivo com MODAL: modal conjugado (2ª posição) + Partizip II + «WERDEN» (infinitivo, no fim): «Das Auto muss repariert werden.» PASSO 2: perguntas: «Kann das Problem gelöst werden?» PASSO 3: o ZUSTANDSPASSIV (estado) usa «SEIN» + Partizip II: descreve o resultado, não o processo: «Das Geschäft ist geschlossen» (a loja está fechada) × «Das Geschäft wird geschlossen» (a loja está sendo fechada). PASSO 4: «Die Arbeit ist erledigt» (o trabalho está feito). PASSO 5: o passivo sem sujeito: «Hier wird getanzt» (aqui se dança); «Es wird viel gelacht.»', {
        tag: 'Verbos',
        tabela: [
          { tipo: 'modal + passivo', frase: 'Das Auto muss repariert werden.' }, { tipo: 'pergunta com modal', frase: 'Kann das Problem gelöst werden?' }, { tipo: 'processo (werden)', frase: 'Das Geschäft wird geschlossen.' }, { tipo: 'estado (sein)', frase: 'Das Geschäft ist geschlossen.' }, { tipo: 'sem sujeito', frase: 'Hier wird getanzt.' },
        ],
        erros: [['Das Auto muss werden repariert.', 'Das Auto muss repariert werden.', '«werden» vai por último.'], ['Das Geschäft wird geschlossen. (a loja já está fechada)', 'Das Geschäft ist geschlossen.', 'Estado: «sein».']],
      }),
      producao(5, 'Diga 6 frases no passivo com modais e no estado: «Das Auto muss repariert werden. Das Geschäft ist geschlossen.»'),
    ]),
    sessao('S3', 'O passivo no dia a dia', [
      revisao(5, 'Escreva 6 frases: processo, estado e passivo com modal.'),
      gramatica(10, 'Quando usar o passivo', 'PASSO 1: use o passivo quando o AGENTE é desconhecido, óbvio ou sem importância: «Das Paket wird morgen geliefert.» PASSO 2: em instruções e processos: «Zuerst werden die Zwiebeln geschnitten.» PASSO 3: em avisos: «Hier darf nicht geparkt werden.» PASSO 4: em notícias: «Das Gebäude wird renoviert.» PASSO 5: a alternativa ativa com «man»: «Man repariert das Auto» (a gente conserta o carro) tem o mesmo sentido, mas é mais informal.', {
        tag: 'Verbos',
        tabela: [
          { uso: 'agente desconhecido', frase: 'Das Paket wird morgen geliefert.' }, { uso: 'processo (receita)', frase: 'Zuerst werden die Zwiebeln geschnitten.' }, { uso: 'aviso', frase: 'Hier darf nicht geparkt werden.' }, { uso: 'notícia', frase: 'Das Gebäude wird renoviert.' }, { uso: 'ativo com man', frase: 'Man repariert das Auto.' },
        ],
      }),
      dialogo(10, 'In der Autowerkstatt / Na oficina', 'Um cliente pergunta pelo carro.', [
        ['Tom', 'Guten Tag! Mein Auto wird heute repariert, nicht wahr?', 'Bom dia! O meu carro está sendo consertado hoje, não é?'], ['Mechaniker', 'Ja, die Bremsen werden gerade gewechselt.', 'Sim, os freios estão sendo trocados agora.'], ['Tom', 'Muss auch das Öl gewechselt werden?', 'O óleo também precisa ser trocado?'],
        ['Mechaniker', 'Ja, das sollte gemacht werden. Es wird gleich nach den Bremsen erledigt.', 'Sim, isso deveria ser feito. Será resolvido logo depois dos freios.'], ['Tom', 'Wann ist das Auto fertig?', 'Quando o carro fica pronto?'], ['Mechaniker', 'Am Nachmittag. Dann ist alles erledigt.', 'À tarde. Então tudo está resolvido.'],
        ['Tom', 'Wird das Auto auch gewaschen?', 'O carro também será lavado?'], ['Mechaniker', 'Ja, das machen wir immer. Es wird innen und außen gewaschen.', 'Sim, sempre fazemos isso. É lavado por dentro e por fora.'],
      ]),
      producao(5, 'Descreva em voz alta o que se faz numa oficina ou numa empresa, usando o passivo: «Die Autos werden repariert. Die Pakete werden geliefert.»'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva um texto de 6 frases descrevendo um processo no passivo (por exemplo, uma receita).'),
      exercicios(20, [
        lacuna('Das Auto ___ repariert. (werden)', ['wird', 'werden', 'ist'], 'wird', 'Singular: wird.'), lacuna('Die Pakete ___ geliefert. (werden)', ['werden', 'wird', 'sind'], 'werden', 'Plural: werden.'), lacuna('Das Auto muss ___ werden. (reparieren)', ['repariert', 'reparieren', 'reparierte'], 'repariert', 'Partizip II.'),
        lacuna('Das Geschäft ___ geschlossen. (estado)', ['ist', 'wird', 'wurde'], 'ist', 'Estado: sein.'), lacuna('Das Essen wird ___ Koch gekocht. (pelo)', ['vom', 'durch', 'mit'], 'vom', '«von» + dativo.'), mc('O passivo do presente forma-se com:', ['werden + Partizip II', 'sein + infinitivo', 'haben + Partizip II'], 'werden + Partizip II', 'Processo.'),
        mc('«Das Geschäft ist geschlossen» expressa:', ['um estado (a loja está fechada)', 'um processo', 'um desejo'], 'um estado (a loja está fechada)', 'Zustandspassiv.'), mc('Com modal, «werden» vai:', ['no fim, no infinitivo', 'depois do modal', 'no começo'], 'no fim, no infinitivo', 'muss repariert werden.'), mc('O agente do passivo aparece com:', ['von + dativo', 'für + acusativo', 'mit + dativo'], 'von + dativo', 'vom Mechaniker.'),
        ordem('Ordene: «O carro está sendo consertado.»', ['Das', 'Auto', 'wird', 'repariert'], 'Das Auto wird repariert.', 'werden + Partizip II.'), ordem('Ordene: «O problema precisa ser resolvido.»', ['Das', 'Problem', 'muss', 'gelöst', 'werden'], 'Das Problem muss gelöst werden.', 'Modal + Partizip II + werden.'), ouvir('Hier darf nicht geparkt werden', ['Hier darf nicht geparkt werden', 'Hier wird nicht geparkt', 'Hier parkt man nicht'], 'Hier darf nicht geparkt werden', 'Aviso no passivo.'),
        ditado('Die Bremsen werden gerade gewechselt', 'Passivo no presente.'), livre('Escreva 5 frases: duas no passivo do presente, uma com «von», uma com modal e uma no estado.', 'Das Auto wird repariert. Die Pakete werden geliefert. Das Essen wird vom Koch gekocht. Das Problem muss gelöst werden. Das Geschäft ist geschlossen.'),
      ]),
      producao(5, 'Grave-se explicando um processo (uma receita ou o trabalho de uma empresa) com o passivo.'),
    ]),
  ],
});
