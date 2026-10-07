import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 45, titulo: 'O subjuntivo: formação e primeiros usos', nivel: 'b1',
  objetivo: 'Formar o subjonctif présent dos verbos regulares e dos principais irregulares e usá-lo depois de «il faut que», «vouloir que» e «pour que».',
  nota: 'Você abre a porta para o subjuntivo, que aparece em toda conversa séria. Próxima aula: subjuntivo para emoções, dúvidas e conectores.',
  sessoes: [
    sessao('S1', 'Formar o subjonctif présent', [
      revisao(5, 'Conte em voz alta um arrependimento com condicional passado.'),
      palavras(8, [
        ['il faut que', 'il fo kö', 'é preciso que', ''], ['vouloir que', 'vuluár kö', 'querer que', ''], ['pour que', 'pur kö', 'para que', ''], ['que je parle', 'kö jö parl', 'que eu fale', ''], ['que tu finisses', 'kö tü finis', 'que você termine', ''], ['qu\'il vienne', 'kil viẽn', 'que ele venha', ''], ['que nous soyons', 'kö nu suaiõ', 'que sejamos', ''], ['qu\'ils aient', 'kil é', 'que eles tenham', ''],
      ]),
      gramatica(12, 'Il faut que je parle', 'PASSO 1: o subjonctif présent usa-se depois de certas expressões e conjunções, sempre com «que». PASSO 2: para os verbos regulares, tome o «ils» do presente, tire o «-ent» e acrescente: «-e, -es, -e, -ions, -iez, -ent»: «ils parlent → parl-» → «que je parle, que tu parles, qu\'il parle, que nous parlions, que vous parliez, qu\'ils parlent». PASSO 3: «finir → finiss-»: «que je finisse». «prendre → prenn- / pren-»: «que je prenne, que nous prenions». PASSO 4: dois verbos têm formas especiais: «être»: «que je sois, que tu sois, qu\'il soit, que nous soyons, que vous soyez, qu\'ils soient». «avoir»: «que j\'aie, que tu aies, qu\'il ait, que nous ayons, que vous ayez, qu\'ils aient». PASSO 5: irregulares muito usados: «aller → que j\'aille / que nous allions», «faire → que je fasse», «pouvoir → que je puisse», «savoir → que je sache», «vouloir → que je veuille», «venir → que je vienne / que nous venions». PASSO 6: depois de «il faut que», use o subjuntivo: «Il faut que tu viennes.» PASSO 7: depois de «vouloir que»: «Je veux que tu viennes.» PASSO 8: depois de «pour que»: «Je parle lentement pour que tu comprennes.»', {
        tag: 'Subjuntivo',
        comparacao: 'em português o subjuntivo existe: «é preciso que você venha», «quero que ele fale». O francês também, e a lógica é parecida. A diferença é que o francês usa o subjuntivo depois de menos verbos e o seu presente soa igual ao indicativo em muitos casos («que je parle» = «je parle»).',
        tabela: [
          { pessoa: 'que je', parler: 'parle', finir: 'finisse', etre: 'sois', avoir: 'aie' }, { pessoa: 'que tu', parler: 'parles', finir: 'finisses', etre: 'sois', avoir: 'aies' }, { pessoa: 'qu\'il / qu\'elle', parler: 'parle', finir: 'finisse', etre: 'soit', avoir: 'ait' }, { pessoa: 'que nous', parler: 'parlions', finir: 'finissions', etre: 'soyons', avoir: 'ayons' }, { pessoa: 'que vous', parler: 'parliez', finir: 'finissiez', etre: 'soyez', avoir: 'ayez' }, { pessoa: 'qu\'ils / qu\'elles', parler: 'parlent', finir: 'finissent', etre: 'soient', avoir: 'aient' },
        ],
        erros: [['Il faut que tu viens.', 'Il faut que tu viennes.', 'Subjuntivo.'], ['Je veux que tu es heureux.', 'Je veux que tu sois heureux.', '«Être» → «sois».'], ['Il faut que j\'ai du temps.', 'Il faut que j\'aie du temps.', '«Avoir» → «aie».'], ['Il faut que nous partons.', 'Il faut que nous partions.', 'Nous: «-ions».']],
      }),
      producao(5, 'Diga em voz alta cinco coisas que é preciso que você faça esta semana: «Il faut que je… »'),
    ]),
    sessao('S2', 'Irregulares e usos básicos', [
      revisao(4, 'Conjugue em voz alta «aller, faire, pouvoir, savoir, venir» no subjonctif com «que je».'),
      palavras(6, [
        ['que j\'aille', 'kö jaii', 'que eu vá', ''], ['que je fasse', 'kö jö fas', 'que eu faça', ''], ['que je puisse', 'kö jö püis', 'que eu possa', ''], ['que je sache', 'kö jö sax', 'que eu saiba', ''], ['que je veuille', 'kö jö vöii', 'que eu queira', ''], ['que je vienne', 'kö jö viẽn', 'que eu venha', ''],
      ]),
      gramatica(12, 'Quando o subjuntivo é obrigatório', 'PASSO 1: obrigação ou necessidade: «Il faut que…» «Il est nécessaire que…» «Il vaut mieux que…»: «Il vaut mieux que tu partes.» PASSO 2: vontade e pedido: «vouloir que», «demander que», «souhaiter que», «préférer que»: «Je préfère que tu viennes.» PASSO 3: finalidade: «pour que», «afin que»: «Je répète pour que tu comprennes.» PASSO 4: sujeitos diferentes: o subjuntivo só aparece se o sujeito de «que» for diferente do sujeito principal. PASSO 5: sujeito igual → infinitivo: «Je veux partir.» (eu quero, eu parto) × «Je veux que tu partes.» (eu quero, você parte). PASSO 6: «il faut» + infinitivo = obrigação geral: «Il faut manger.» × «Il faut que tu manges.» PASSO 7: com «aller»: «que j\'aille, que tu ailles, qu\'il aille, que nous allions, que vous alliez, qu\'ils aillent». PASSO 8: com «faire»: «que je fasse, que tu fasses, qu\'il fasse, que nous fassions, que vous fassiez, qu\'ils fassent».', {
        tag: 'Subjuntivo',
        comparacao: 'em português dizemos «quero que você venha» (subjuntivo) e «quero vir» (infinitivo). O francês faz o mesmo: sujeitos diferentes → «que» + subjuntivo; mesmo sujeito → infinitivo. Isso evita o erro de «je veux que je parte».',
        tabela: [
          { situacao: 'obrigação', frase: 'Il faut que tu viennes.' }, { situacao: 'vontade (sujeitos diferentes)', frase: 'Je veux que tu viennes.' }, { situacao: 'vontade (mesmo sujeito)', frase: 'Je veux venir.' }, { situacao: 'finalidade', frase: 'Je parle lentement pour que tu comprennes.' }, { situacao: 'preferência', frase: 'Je préfère que tu partes.' },
        ],
        erros: [['Je veux que je parte.', 'Je veux partir.', 'Mesmo sujeito: infinitivo.'], ['Il faut que manger.', 'Il faut manger. / Il faut que tu manges.', 'Sem sujeito, infinitivo.'], ['Je veux que tu viennes pas.', 'Je veux que tu ne viennes pas.', 'Negação completa.'], ['Je parle pour que tu comprends.', 'Je parle pour que tu comprennes.', 'Subjuntivo.']],
      }),
      producao(8, 'Diga em voz alta oito frases: «Je veux que… Il faut que… Je préfère que… Pour que… »'),
    ]),
    sessao('S3', 'Conselhos e instruções com subjuntivo', [
      revisao(4, 'Complete: «Il faut que tu ___ (venir). Je veux que nous ___ (partir).»'),
      palavras(5, [
        ['il vaut mieux que', 'il vô miö kö', 'é melhor que', ''], ['il est important que', 'il é ẽportã kö', 'é importante que', ''], ['il est essentiel que', 'il é esãsiél kö', 'é essencial que', ''], ['il suffit que', 'il süfi kö', 'basta que', ''], ['à condition que', 'a kõdisiõ kö', 'com a condição de que', ''],
      ]),
      gramatica(8, 'Aconselhar com subjuntivo', 'PASSO 1: para um conselho firme: «Il faut que tu dormes plus.» PASSO 2: para um conselho suave: «Il vaut mieux que tu partes tôt.» PASSO 3: para dar importância: «Il est important que tu sois à l\'heure.» PASSO 4: condição: «à condition que» + subjuntivo: «Je viens à condition que tu viennes aussi.» PASSO 5: prazo e limite: «jusqu\'à ce que» + subjuntivo: «Je reste jusqu\'à ce que tu reviennes.»', {
        tag: 'Subjuntivo',
        comparacao: 'em português, «é importante que você chegue na hora» também pede subjuntivo. O francês é igual. Mas «il est probable que» pede indicativo, diferente do português («é provável que» + subjuntivo).',
        tabela: [
          { expressao: 'il faut que', exemplo: 'Il faut que tu dormes plus.' }, { expressao: 'il vaut mieux que', exemplo: 'Il vaut mieux que tu partes tôt.' }, { expressao: 'il est important que', exemplo: 'Il est important que tu sois à l\'heure.' }, { expressao: 'à condition que', exemplo: 'Je viens à condition que tu viennes aussi.' }, { expressao: 'jusqu\'à ce que', exemplo: 'Je reste jusqu\'à ce que tu reviennes.' },
        ],
        erros: [['Il faut que tu dors plus.', 'Il faut que tu dormes plus.', 'Subjuntivo de «dormir».'], ['Je reste jusqu\'à ce que tu reviens.', 'Je reste jusqu\'à ce que tu reviennes.', '«Jusqu\'à ce que» + subjuntivo.'], ['Il est important que tu es à l\'heure.', 'Il est important que tu sois à l\'heure.', '«Être» → «sois».'], ['Il vaut mieux que tu pars tôt.', 'Il vaut mieux que tu partes tôt.', 'Subjuntivo.']],
      }),
      texto(8, 'Des conseils pour réussir / Conselhos para ter sucesso', 'Pour réussir un examen, il faut que tu travailles régulièrement. Il vaut mieux que tu étudies un peu chaque jour plutôt que tout le même soir. Il est important que tu dormes bien et que tu manges sainement. Avant l\'examen, il faut que tu sois calme et que tu relises tes notes. Si tu as peur, je veux que tu me téléphones : je serai là jusqu\'à ce que tu aies fini.', 'Para passar num exame, é preciso que você estude regularmente. É melhor que você estude um pouco todo dia do que tudo na mesma noite. É importante que você durma bem e coma de forma saudável. Antes do exame, é preciso que você esteja calmo e releia suas anotações. Se tiver medo, quero que você me ligue: estarei lá até que você termine.', [['Qu\'est-ce qu\'il faut faire pour réussir ?', 'Travailler régulièrement.'], ['Qu\'est-ce qui vaut mieux ?', 'Étudier un peu chaque jour.'], ['Que faut-il faire avant l\'examen ?', 'Être calme et relire ses notes.'], ['Jusqu\'à quand la personne sera-t-elle là ?', 'Jusqu\'à ce que tu aies fini.']]),
      producao(5, 'Dê em voz alta conselhos a um amigo que vai fazer uma prova, com subjuntivo.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 45', [
      revisao(5, 'Dê conselhos com «il faut que» e «il vaut mieux que».'),
      exercicios(20, [
        ouvir('Il faut que tu viennes', ['Il faut que tu viennes', 'Il faut que tu viens', 'Il faut venir'], 'Il faut que tu viennes', 'Ouça «viennes».'), ouvir('Je veux que tu sois heureux', ['Je veux que tu sois heureux', 'Je veux que tu es heureux', 'Je veux être heureux'], 'Je veux que tu sois heureux', 'Ouça «sois».'), ouvir('Je parle lentement pour que tu comprennes', ['Je parle lentement pour que tu comprennes', 'Je parle lentement pour que tu comprends', 'Je parle lentement pour comprendre'], 'Je parle lentement pour que tu comprennes', 'Ouça «comprennes».'),
        ditado('Il faut que je parte', 'Escreva: Il faut que je parte.'), ditado('Il vaut mieux que tu dormes', 'Escreva: Il vaut mieux que tu dormes.'), ditado('Je préfère que tu viennes', 'Escreva: Je préfère que tu viennes.'),
        mc('Subjuntivo de «être» (que je):', ['sois', 'suis', 'soie'], 'sois', 'Irregular.'), mc('Subjuntivo de «avoir» (que j\'):', ['aie', 'ai', 'ait'], 'aie', 'Irregular.'), mc('Qual frase está correta?', ['Je veux partir.', 'Je veux que je parte.', 'Je veux de partir.'], 'Je veux partir.', 'Mesmo sujeito: infinitivo.'), mc('Qual frase está correta?', ['Il faut que tu dormes.', 'Il faut que tu dors.', 'Il faut que tu dormir.'], 'Il faut que tu dormes.', 'Subjuntivo.'),
        lacuna('Il faut que nous ___ . (partir)', ['partions', 'partons', 'partez'], 'partions', 'Nous: «-ions».'), lacuna('Je veux que tu ___ à l\'heure. (être)', ['sois', 'es', 'seras'], 'sois', 'Subjuntivo.'), lacuna('Pour que vous ___ , je répète. (comprendre)', ['compreniez', 'comprenez', 'comprendriez'], 'compreniez', 'Subjuntivo.'), lacuna('Il faut que j\'___ du temps. (avoir)', ['aie', 'ai', 'avais'], 'aie', '«Avoir» irregular.'),
        ordem('Ordene: «Il faut que tu viennes demain.»', ['Il', 'faut', 'que', 'tu', 'viennes', 'demain'], 'Il faut que tu viennes demain.', 'Il faut que + subjuntivo.'), ordem('Ordene: «Je préfère que tu partes.»', ['Je', 'préfère', 'que', 'tu', 'partes'], 'Je préfère que tu partes.', 'Preferência.'),
        livre('Escreva em francês: É preciso que você venha. Quero que ela seja feliz. É melhor que nós partamos agora.', 'Il faut que tu viennes. Je veux qu\'elle soit heureuse. Il vaut mieux que nous partions maintenant.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o que você espera dos seus amigos e da sua família, com subjuntivo.'),
    ]),
  ],
});
