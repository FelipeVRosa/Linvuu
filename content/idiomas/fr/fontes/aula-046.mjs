import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 46, titulo: 'Subjuntivo: emoções, dúvidas e conjunções', nivel: 'b1',
  objetivo: 'Usar o subjonctif depois de verbos de emoção, dúvida e opinião negativa, e depois de conjunções como «bien que», «avant que», «à moins que» e «sans que»; distinguir subjuntivo e indicativo.',
  nota: 'Você usa o subjuntivo com segurança nos casos mais comuns. Próxima aula: conectores lógicos e argumentação.',
  sessoes: [
    sessao('S1', 'Emoção, dúvida e opinião', [
      revisao(5, 'Dê conselhos com «il faut que», «il vaut mieux que» e «je veux que».'),
      palavras(8, [
        ['être content que', 'étr kõtã kö', 'estar contente que', ''], ['être triste que', 'étr trist kö', 'estar triste que', ''], ['avoir peur que', 'avuár pör kö', 'ter medo que', ''], ['regretter que', 'regretê kö', 'lamentar que', ''], ['douter que', 'dutê kö', 'duvidar que', ''], ['il est possible que', 'il é posibl kö', 'é possível que', ''], ['je ne pense pas que', 'jö nö põs pa kö', 'não acho que', ''], ['il est dommage que', 'il é domaj kö', 'é uma pena que', ''],
      ]),
      gramatica(12, 'Je suis content que tu viennes', 'PASSO 1: emoções («être content / heureux / triste / surpris / étonné / fier que», «avoir peur que», «regretter que», «aimer que», «détester que») pedem subjuntivo: «Je suis content que tu viennes.» PASSO 2: dúvida e possibilidade: «douter que», «il est possible que», «il se peut que», «il n\'est pas certain que»: «Il est possible qu\'il pleuve.» PASSO 3: opinião negativa: «je ne pense pas que», «je ne crois pas que», «je ne trouve pas que» pedem subjuntivo: «Je ne pense pas qu\'il soit malade.» PASSO 4: opinião positiva (certeza) pede indicativo: «Je pense qu\'il est malade.» «Je suis sûr qu\'il viendra.» PASSO 5: «il est probable que» pede indicativo: «Il est probable qu\'il viendra.» PASSO 6: perguntas com «penser que» e «croire que» admitem os dois: «Penses-tu qu\'il vienne ?» (subj.) «Tu penses qu\'il viendra ?» (ind.) PASSO 7: sujeitos iguais, infinitivo: «Je suis content de venir.» × «Je suis content que tu viennes.» PASSO 8: «espérer que» + indicativo: «J\'espère que tu viendras.» (e não subjuntivo)', {
        tag: 'Subjuntivo',
        comparacao: 'em português, «espero que você venha» usa o subjuntivo. Em francês, «espérer que» pede INDICATIVO: «j\'espère que tu viendras». É um dos erros mais comuns de brasileiros. Outro: «je pense que» pede indicativo, mas «je ne pense pas que» pede subjuntivo.',
        tabela: [
          { regra: 'emoção', exemplo: 'Je suis content que tu viennes.', modo: 'subjuntivo' }, { regra: 'dúvida', exemplo: 'Je doute qu\'il vienne.', modo: 'subjuntivo' }, { regra: 'je ne pense pas que', exemplo: 'Je ne pense pas qu\'il soit malade.', modo: 'subjuntivo' }, { regra: 'je pense que', exemplo: 'Je pense qu\'il est malade.', modo: 'indicativo' }, { regra: 'espérer que', exemplo: 'J\'espère qu\'il viendra.', modo: 'indicativo' }, { regra: 'il est probable que', exemplo: 'Il est probable qu\'il viendra.', modo: 'indicativo' },
        ],
        erros: [['J\'espère que tu viennes.', 'J\'espère que tu viendras.', '«Espérer que» + indicativo.'], ['Je pense qu\'il soit malade.', 'Je pense qu\'il est malade.', 'Certeza: indicativo.'], ['Je ne pense pas qu\'il est malade.', 'Je ne pense pas qu\'il soit malade.', 'Negação: subjuntivo.'], ['Je suis content que je viens.', 'Je suis content de venir.', 'Mesmo sujeito.']],
      }),
      producao(5, 'Diga em voz alta cinco emoções suas com «je suis content / triste / surpris que… »'),
    ]),
    sessao('S2', 'Conjunções com subjuntivo', [
      revisao(4, 'Diga três opiniões com «je pense que» e três com «je ne pense pas que».'),
      palavras(6, [
        ['bien que', 'biẽ kö', 'embora', ''], ['avant que', 'avã kö', 'antes que', ''], ['à moins que', 'a muẽ kö', 'a menos que', ''], ['sans que', 'sã kö', 'sem que', ''], ['pourvu que', 'purvü kö', 'contanto que', ''], ['jusqu\'à ce que', 'jüska sö kö', 'até que', ''],
      ]),
      gramatica(12, 'Bien que, avant que, sans que', 'PASSO 1: algumas conjunções SEMPRE pedem subjuntivo: «bien que» (embora), «quoique» (embora), «avant que» (antes que), «jusqu\'à ce que» (até que), «pour que / afin que» (para que), «sans que» (sem que), «à moins que» (a menos que), «à condition que» (com a condição de que), «pourvu que» (contanto que), «de peur que» (por medo de que). PASSO 2: «Bien qu\'il pleuve, je sors.» «Avant qu\'il parte, je lui parle.» «Je reste jusqu\'à ce que tu viennes.» PASSO 3: «sans que» exige sujeitos diferentes; com o mesmo sujeito, use «sans» + infinitivo: «Il part sans dire au revoir.» × «Il part sans que je le sache.» PASSO 4: «avant que» com o mesmo sujeito: «avant de» + infinitivo: «Avant de partir, je ferme.» × «Avant qu\'il parte, je ferme.» PASSO 5: a conjunção «après que» pede INDICATIVO: «Après qu\'il est parti, je suis sorti.» PASSO 6: «parce que», «puisque», «alors que» pedem indicativo. PASSO 7: o «ne» expletivo (formal) pode aparecer depois de «avant que», «à moins que» e «de peur que»: «Avant qu\'il ne parte.» PASSO 8: exemplo de nuance: «Bien qu\'il soit riche, il est malheureux.»', {
        tag: 'Subjuntivo',
        comparacao: 'em português «embora» e «antes que» também pedem subjuntivo: «embora chova», «antes que ele chegue». O francês acompanha. A armadilha é «après que», que no português pede indicativo («depois que ele chegou») e também em francês, mas muitos nativos erram e usam subjuntivo.',
        tabela: [
          { conjuncao: 'bien que / quoique', sentido: 'embora', exemplo: 'Bien qu\'il pleuve, je sors.' }, { conjuncao: 'avant que', sentido: 'antes que', exemplo: 'Avant qu\'il parte, je lui parle.' }, { conjuncao: 'jusqu\'à ce que', sentido: 'até que', exemplo: 'Je reste jusqu\'à ce que tu viennes.' }, { conjuncao: 'sans que', sentido: 'sem que', exemplo: 'Il part sans que je le sache.' }, { conjuncao: 'à moins que', sentido: 'a menos que', exemplo: 'Je viens, à moins qu\'il pleuve.' }, { conjuncao: 'après que', sentido: 'depois que (indicativo)', exemplo: 'Après qu\'il est parti, je suis sorti.' },
        ],
        erros: [['Bien qu\'il pleut, je sors.', 'Bien qu\'il pleuve, je sors.', '«Bien que» + subjuntivo.'], ['Avant qu\'il part, je lui parle.', 'Avant qu\'il parte, je lui parle.', '«Avant que» + subjuntivo.'], ['Il part sans que dire au revoir.', 'Il part sans dire au revoir.', 'Mesmo sujeito: infinitivo.'], ['Après qu\'il soit parti, je suis sorti.', 'Après qu\'il est parti, je suis sorti.', '«Après que» + indicativo.']],
      }),
      producao(8, 'Diga em voz alta oito frases: «Bien que… Avant que… Jusqu\'à ce que… À moins que… Sans que… »'),
    ]),
    sessao('S3', 'Subjuntivo ou indicativo?', [
      revisao(4, 'Escolha: «J\'espère que tu ___ (venir). Je doute qu\'il ___ (venir).»'),
      palavras(5, [
        ['certain', 'sértẽ', 'certo', ''], ['sûr', 'sür', 'seguro', ''], ['probable', 'probabl', 'provável', ''], ['évident', 'evidã', 'evidente', ''], ['douteux', 'dutö', 'duvidoso', ''],
      ]),
      gramatica(8, 'A regra prática de escolha', 'PASSO 1: certeza e fato → indicativo: «Je suis sûr que», «Il est évident que», «Il est certain que», «Je sais que», «Il est probable que», «J\'espère que». PASSO 2: dúvida, desejo, emoção, obrigação, possibilidade → subjuntivo: «Je doute que», «Je veux que», «Je suis content que», «Il faut que», «Il est possible que». PASSO 3: a negação de certeza vira dúvida: «Je suis sûr qu\'il vient» (ind.) × «Je ne suis pas sûr qu\'il vienne» (subj.). PASSO 4: teste: se você afirma como fato, indicativo; se você duvida, deseja ou sente, subjuntivo. PASSO 5: dica prática: aprenda por blocos: «il faut que, vouloir que, pour que, bien que, avant que, jusqu\'à ce que, je doute que» → subjuntivo.', {
        tag: 'Subjuntivo',
        comparacao: 'em português «é provável que» pede subjuntivo, mas em francês «il est probable que» pede indicativo. O contrário vale para «il est possible que»: subjuntivo nos dois idiomas. Aprenda estes dois blocos de cor.',
        tabela: [
          { gatilho: 'je suis sûr que', modo: 'indicativo', exemplo: 'Je suis sûr qu\'il viendra.' }, { gatilho: 'je ne suis pas sûr que', modo: 'subjuntivo', exemplo: 'Je ne suis pas sûr qu\'il vienne.' }, { gatilho: 'il est probable que', modo: 'indicativo', exemplo: 'Il est probable qu\'il viendra.' }, { gatilho: 'il est possible que', modo: 'subjuntivo', exemplo: 'Il est possible qu\'il vienne.' }, { gatilho: 'j\'espère que', modo: 'indicativo', exemplo: 'J\'espère qu\'il viendra.' }, { gatilho: 'je souhaite que', modo: 'subjuntivo', exemplo: 'Je souhaite qu\'il vienne.' },
        ],
        erros: [['Il est probable qu\'il vienne.', 'Il est probable qu\'il viendra.', 'Probabilidade: indicativo.'], ['Je ne suis pas sûr qu\'il viendra.', 'Je ne suis pas sûr qu\'il vienne.', 'Dúvida: subjuntivo.'], ['J\'espère qu\'il vienne.', 'J\'espère qu\'il viendra.', '«Espérer que» + indicativo.'], ['Je souhaite qu\'il viendra.', 'Je souhaite qu\'il vienne.', 'Desejo: subjuntivo.']],
      }),
      dialogo(8, 'Un projet de voyage / Um projeto de viagem', 'Manon e Antoine falam de uma viagem.', [
        ['Manon', 'Je suis ravie que tu puisses venir avec nous en Espagne !', 'Estou encantada de que você possa vir conosco à Espanha!'], ['Antoine', 'Moi aussi, bien que je doive finir mon travail avant de partir.', 'Eu também, embora eu deva terminar o meu trabalho antes de partir.'], ['Manon', 'J\'espère que tu auras fini avant la fin du mois.', 'Espero que você tenha terminado antes do fim do mês.'], ['Antoine', 'Je pense que oui, à moins qu\'il y ait un problème imprévu.', 'Acho que sim, a menos que haja um imprevisto.'], ['Manon', 'Il est possible qu\'on parte une semaine plus tôt, si les billets sont moins chers.', 'É possível que partamos uma semana antes, se as passagens estiverem mais baratas.'], ['Antoine', 'Parfait ! Je ne pense pas que ce soit un problème pour moi.', 'Perfeito! Não acho que seja um problema para mim.'],
      ]),
      producao(5, 'Planeje em voz alta uma viagem com um amigo, usando o subjuntivo e o indicativo corretamente.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 46', [
      revisao(5, 'Fale de planos e dúvidas com subjuntivo e indicativo.'),
      exercicios(20, [
        ouvir('Je suis content que tu viennes', ['Je suis content que tu viennes', 'Je suis content que tu viens', 'Je suis content de venir'], 'Je suis content que tu viennes', 'Ouça «viennes».'), ouvir('J\'espère qu\'il viendra', ['J\'espère qu\'il viendra', 'J\'espère qu\'il vienne', 'Je souhaite qu\'il vienne'], 'J\'espère qu\'il viendra', 'Ouça «viendra».'), ouvir('Bien qu\'il pleuve, je sors', ['Bien qu\'il pleuve, je sors', 'Bien qu\'il pleut, je sors', 'Parce qu\'il pleut, je sors'], 'Bien qu\'il pleuve, je sors', 'Ouça «pleuve».'),
        ditado('Je ne pense pas qu\'il soit malade', 'Escreva: Je ne pense pas qu\'il soit malade.'), ditado('Avant qu\'il parte, je lui parle', 'Escreva: Avant qu\'il parte, je lui parle.'), ditado('Je reste jusqu\'à ce que tu viennes', 'Escreva: Je reste jusqu\'à ce que tu viennes.'),
        mc('«Espérer que» pede:', ['indicativo', 'subjuntivo', 'infinitivo'], 'indicativo', 'J\'espère qu\'il viendra.'), mc('«Bien que» pede:', ['subjuntivo', 'indicativo', 'condicional'], 'subjuntivo', 'Concessão.'), mc('Qual frase está correta?', ['Je ne pense pas qu\'il soit malade.', 'Je ne pense pas qu\'il est malade.', 'Je ne pense pas qu\'il sera malade.'], 'Je ne pense pas qu\'il soit malade.', 'Negação: subjuntivo.'), mc('Qual frase está correta?', ['Après qu\'il est parti, je suis sorti.', 'Après qu\'il soit parti, je suis sorti.', 'Après qu\'il sera parti, je suis sorti.'], 'Après qu\'il est parti, je suis sorti.', '«Après que» + indicativo.'),
        lacuna('Il est possible qu\'il ___ . (pleuvoir)', ['pleuve', 'pleut', 'pleuvra'], 'pleuve', 'Possibilidade.'), lacuna('Je suis sûr qu\'il ___ . (venir)', ['viendra', 'vienne', 'viennent'], 'viendra', 'Certeza.'), lacuna('Il part ___ dire au revoir. (sem)', ['sans', 'sans que', 'avant'], 'sans', 'Mesmo sujeito.'), lacuna('Je viens, à moins qu\'il ___ un problème.', ['y ait', 'y a', 'y aura'], 'y ait', '«À moins que» + subjuntivo.'),
        ordem('Ordene: «Je suis content que tu viennes.»', ['Je', 'suis', 'content', 'que', 'tu', 'viennes'], 'Je suis content que tu viennes.', 'Emoção + subjuntivo.'), ordem('Ordene: «Bien qu\'il pleuve, je sors.»', ['Bien', 'qu\'il', 'pleuve,', 'je', 'sors'], 'Bien qu\'il pleuve, je sors.', 'Concessão.'),
        livre('Escreva em francês: Espero que você venha. Não acho que ele esteja doente. Embora chova, eu saio.', 'J\'espère que tu viendras. Je ne pense pas qu\'il soit malade. Bien qu\'il pleuve, je sors.'),
        lacuna('Je suis triste que tu ___ . (partir)', ['pars', 'partes', 'partiras'], 'partes', 'Emoção pede subjuntivo: «que tu partes».'),
        lacuna('Je doute qu\'il ___ la vérité. (savoir)', ['sait', 'saura', 'sache'], 'sache', '«Douter que» + subjuntivo; «savoir» → «sache».'),
        lacuna('J\'espère que tu ___ bientôt. (venir)', ['viendras', 'viennes', 'viens'], 'viendras', '«Espérer que» pede indicativo.'),
        lacuna('Avant qu\'elle ___ , je lui parle. (partir)', ['part', 'parte', 'partira'], 'parte', '«Avant que» pede subjuntivo.'),
        lacuna('Après qu\'il ___ arrivé, nous avons mangé. (être)', ['soit', 'sera', 'est'], 'est', '«Après que» pede indicativo.'),
        mc('Qual frase está correta?', ['Je suis sûr qu\'il viendra.', 'Je suis sûr qu\'il vienne.', 'Je suis sûr qu\'il viendrait.'], 'Je suis sûr qu\'il viendra.', 'Certeza pede indicativo.'),
        mc('Qual frase está correta?', ['Je ne suis pas sûr qu\'il vient.', 'Je ne suis pas sûr qu\'il vienne.', 'Je ne suis pas sûr qu\'il venait.'], 'Je ne suis pas sûr qu\'il vienne.', 'Certeza negada vira dúvida: subjuntivo.'),
        mc('Com o mesmo sujeito, qual frase está correta?', ['Je suis content que je viens.', 'Je suis content que je vienne.', 'Je suis content de venir.'], 'Je suis content de venir.', 'Sujeito igual pede infinitivo.'),
        mc('Qual conjunção pede indicativo?', ['après que', 'avant que', 'bien que'], 'après que', '«Après que» pede indicativo; as outras, subjuntivo.'),
        ordem('Ordene: «Lamento que ele parta.»', ['Je', 'regrette', 'qu\'il', 'parte'], 'Je regrette qu\'il parte.', '«Regretter que» + subjuntivo.'),
        ordem('Ordene: «Eu saio, a menos que chova.»', ['Je', 'sors', 'à', 'moins', 'qu\'il', 'pleuve'], 'Je sors à moins qu\'il pleuve.', '«À moins que» + subjuntivo.'),
        livre('Escreva em francês: Estou contente que você venha. Duvido que ele saiba.', 'Je suis content que tu viennes. Je doute qu\'il sache.'),
        livre('Escreva em francês: Eu espero que ele venha. Embora eu esteja cansado, eu fico.', 'J\'espère qu\'il viendra. Bien que je sois fatigué, je reste.'),
      ]),
      producao(5, 'Fale 1 minuto sobre uma dúvida ou um desejo seu, usando subjuntivo.'),
    ]),
  ],
});
