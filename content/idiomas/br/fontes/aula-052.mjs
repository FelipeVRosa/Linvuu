import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 52, titulo: 'Connectors', nivel: 'b1',
  objetivo: 'Link ideas with the right connector: contrast and concession («embora», «mesmo que», «no entanto»), cause, consequence and condition («já que», «portanto», «desde que», «senão»), and addition, sequence and conclusion («além disso», «por fim», «em resumo»).',
  nota: 'You can now organize a text or a conversation with connectors of the right register, write the four forms of «por que» correctly and recognize the connectors of formal writing. Next lesson: opinion and debate.',
  sessoes: [
    sessao('S1', 'Contrast and concession', [
      revisao(5, 'Say aloud three sentences with «mas»: «Eu queria ir, mas…», «O hotel é bom, mas…», «Eu estudo, mas…». Then say the present subjunctive of «chover» and «estar» for «ele»: chova, esteja.'),
      palavras(8, [
        ['porém', 'poh-REH~ee', 'however (written)', ''], ['no entanto', '', 'however, nevertheless', ''], ['embora', 'ehm-BOH-rah', 'although (needs the subjunctive)', ''], ['mesmo que', '', 'even if (needs the subjunctive)', ''],
        ['apesar de', 'ah-peh-ZAR djee', 'despite, in spite of', ''], ['mesmo assim', '', 'even so, still', ''], ['por outro lado', '', 'on the other hand', ''], ['só que', '', 'but, the thing is (spoken)', ''],
      ]),
      gramatica(12, 'Mas, no entanto, embora, mesmo que, apesar de', "STEP 1: «mas» is the everyday word for «but»: «Eu queria ir, mas não tinha dinheiro.» In writing, and in a more careful speech, you also find «porém», «contudo», «no entanto», «entretanto» and «todavia», all meaning «however». They can sit at the start, after a comma or after the first word: «O hotel é caro; no entanto, fica perto da praia.» STEP 2: in speech, «só que» is very frequent for «but the thing is»: «Eu queria ir, só que não deu.» STEP 3: «embora» means «although» and takes the subjunctive: present subjunctive for the present («Embora esteja cansado, ele vai trabalhar») and imperfect subjunctive for the past («Embora estivesse cansado, ele foi trabalhar»). STEP 4: «mesmo que» means «even if» and also takes the subjunctive: «Mesmo que chova, eu vou.» «Mesmo que» speaks of a possibility; with a known fact use «embora» or «apesar de». STEP 5: «apesar de» takes a noun or an infinitive (personal infinitive if the subject changes, lesson 50): «Apesar da chuva, fomos à praia.» «Apesar de estar cansado, ele foi.» «Apesar de eles terem estudado, não passaram.» Never use a conjugated verb after «apesar de». STEP 6: «mesmo assim» (even so) and «por outro lado» (on the other hand) connect two sentences: «Estava chovendo. Mesmo assim, a gente foi.» «A cidade é cara. Por outro lado, tem muitos empregos.» STEP 7: «enquanto» can also show contrast: «Eu gosto de praia, enquanto minha irmã prefere a serra.» STEP 8: speech note: «embora» sounds a little written; in conversation «mesmo que», «apesar de» and «mesmo assim» are more common.", {
        tag: 'Connectors',
        comparacao: "English «although» and «even if» take a normal verb: «although he is tired», «even if it rains». Portuguese needs the subjunctive after «embora» and «mesmo que», so you must choose the mood: «embora esteja», «mesmo que chova». English «despite» takes a noun or «-ing» (despite the rain, despite being tired), and Portuguese «apesar de» takes a noun or an infinitive. Also keep «mas» (but) apart from «mais» (more): the two words look alike but have different meanings.",
        tabela: [
          { connector: 'mas', meaning: 'but', register: 'everyday', example: 'Eu queria ir, mas não tinha tempo.' },
          { connector: 'só que', meaning: 'but, the thing is', register: 'spoken', example: 'Eu queria ir, só que não deu.' },
          { connector: 'porém, contudo, no entanto, todavia', meaning: 'however', register: 'written, formal', example: 'O hotel é caro; no entanto, fica perto da praia.' },
          { connector: 'embora + subjunctive', meaning: 'although', register: 'neutral, a little written', example: 'Embora estivesse cansado, ele foi trabalhar.' },
          { connector: 'mesmo que + subjunctive', meaning: 'even if', register: 'everyday', example: 'Mesmo que chova, eu vou.' },
          { connector: 'apesar de + noun / infinitive', meaning: 'despite', register: 'everyday', example: 'Apesar de estar cansado, ele foi.' },
        ],
        exemplos: [['O hotel é caro; no entanto, fica perto da praia.', 'The hotel is expensive; however, it is close to the beach.'], ['Embora estivesse cansado, ele foi trabalhar.', 'Although he was tired, he went to work.'], ['Mesmo que chova, a gente vai ao jogo.', 'Even if it rains, we are going to the match.'], ['Apesar de ter estudado, ele não passou.', 'Despite having studied, he did not pass.'], ['Eu queria ir, só que não deu.', 'I wanted to go, but it did not work out.']],
        erros: [['Embora está cansado, ele foi trabalhar.', 'Embora estivesse cansado, ele foi trabalhar.', '«Embora» takes the subjunctive; for the past use the imperfect subjunctive.'], ['Apesar de ele está cansado, foi trabalhar.', 'Apesar de ele estar cansado, foi trabalhar.', '«Apesar de» takes the infinitive, not a conjugated verb.'], ['Mesmo que chove, eu vou.', 'Mesmo que chova, eu vou.', '«Mesmo que» takes the subjunctive.'], ['Eu queria ir, mais não tinha tempo.', 'Eu queria ir, mas não tinha tempo.', '«Mas» means «but»; «mais» means «more».']],
      }),
      producao(5, 'Say aloud five sentences about a plan that had a problem: two with «mas / só que», one with «embora», one with «mesmo que» and one with «apesar de». Then say two formal sentences with «no entanto» and «por outro lado».'),
    ]),
    sessao('S2', 'Cause, consequence and condition', [
      revisao(4, 'Say aloud one sentence with «embora» and one with «mesmo que». Then answer aloud, in Portuguese: «Por que você estuda português?» and «Por quê?».'),
      palavras(6, [
        ['já que', '', 'since, given that', ''], ['por causa de', '', 'because of', ''], ['graças a', '', 'thanks to', ''], ['portanto', 'por-TAH~-too', 'therefore', ''], ['desde que', '', 'provided that (needs the subjunctive)', ''], ['contanto que', '', 'as long as (needs the subjunctive)', ''], ['senão', 'seh-NOW~', 'otherwise', ''],
      ]),
      gramatica(12, 'Cause, consequence, condition and the four «por quês»', "STEP 1: the question word is «por que» (two words) at the start of a question: «Por que você saiu?» The answer is «porque» (one word): «Porque estava cansado.» At the end of a sentence it is «por quê» (with an accent): «Você saiu? Por quê?» The noun «o porquê» means «the reason». In an indirect question use two words: «Não sei por que ele saiu.» STEP 2: other words for cause: «já que» (since, given that), «como» at the start of a sentence («Como choveu, ficamos em casa»), «pois» (formal), «por causa de» plus a noun (neutral or negative), «graças a» (positive), «devido a» (formal). STEP 3: consequence: «por isso» and «então» (everyday), «portanto» and «logo» (formal), «de modo que»: «Estava chovendo, por isso a gente ficou em casa.» «Estava tão cansado que dormiu no ônibus.» STEP 4: condition: «se» (lesson 47), «caso» (in case), «desde que» and «contanto que» (provided that) and «a menos que» or «a não ser que» (unless). The last four take the subjunctive: «Eu vou, desde que você vá também.» STEP 5: «senão» (one word) means «otherwise»: «Corra, senão você perde o ônibus.» «Se não» (two words) means «if not»: «Se não chover, a gente vai.» STEP 6: purpose: «para» plus infinitive («Estudo para passar»), «para que» plus subjunctive («Estudo para que meus pais fiquem orgulhosos»), and, in formal writing, «a fim de» plus infinitive. STEP 7: in speech, «aí», «então» and «por isso» do most of the work.", {
        tag: 'Connectors',
        comparacao: "English has a single «why / because» pair. Portuguese has four written forms of «por que», and learners mix them constantly. Quick rule: at the start of a question, two words (por que); in the answer, one word (porque); at the end of a sentence, two words with an accent (por quê); as a noun, one word with an accent (o porquê). English «unless» is «a menos que» or «a não ser que», and English «otherwise» is «senão».",
        tabela: [
          { form: 'por que', where: 'start of a question; indirect question', example: 'Por que você saiu? / Não sei por que ele saiu.' },
          { form: 'porque', where: 'answer, cause', example: 'Porque estava cansado.' },
          { form: 'por quê', where: 'end of a sentence or alone', example: 'Você saiu? Por quê?' },
          { form: 'o porquê', where: 'noun: the reason', example: 'Não entendi o porquê.' },
          { form: 'já que, como', where: 'cause, known fact', example: 'Já que está chovendo, vamos ficar.' },
          { form: 'desde que, contanto que', where: 'condition + subjunctive', example: 'Eu vou, desde que você vá também.' },
          { form: 'senão', where: 'otherwise', example: 'Corra, senão você perde o ônibus.' },
        ],
        exemplos: [['Por que você saiu? Porque estava cansado.', 'Why did you leave? Because I was tired.'], ['Já que está chovendo, vamos ficar em casa.', 'Since it is raining, let us stay at home.'], ['Estava tão cansado que dormiu no ônibus.', 'He was so tired that he fell asleep on the bus.'], ['Eu vou, desde que você vá também.', 'I will go, as long as you go too.'], ['Corra, senão você perde o ônibus.', 'Run, otherwise you will miss the bus.']],
        erros: [['Por que ele saiu? Por que estava cansado.', 'Por que ele saiu? Porque estava cansado.', 'The answer begins with «porque» in one word.'], ['Não sei porque ele saiu.', 'Não sei por que ele saiu.', 'In an indirect question use two words.'], ['Vou, desde que você vai também.', 'Vou, desde que você vá também.', '«Desde que» takes the subjunctive.'], ['Corra, se não você perde o ônibus.', 'Corra, senão você perde o ônibus.', '«Senão» (one word) means «otherwise»; «se não» means «if not».']],
      }),
      producao(8, 'Say aloud six sentences about a problem at work or at school: two with a cause («já que», «por causa de»), two with a consequence («por isso», «portanto»), one with «desde que» and one with «senão».'),
    ]),
    sessao('S3', 'Organizing a text: addition, sequence and conclusion', [
      revisao(4, 'Say aloud the four «por quês» in sentences: «Por que…?», «Porque…», «Não sei por que…», «…, por quê?». Then say one sentence with «senão».'),
      palavras(5, [
        ['além disso', '', 'besides, in addition', ''], ['aliás', 'ah-lee-AHS', 'by the way; in fact (adds or corrects)', ''], ['ou seja', '', 'that is, in other words', ''], ['por fim', '', 'finally', ''], ['em resumo', '', 'in short', ''], ['pois é', '', 'yes, indeed (agreeing, or sighing)', ''],
      ]),
      gramatica(8, 'Addition, sequence, explanation and conclusion', "STEP 1: addition: «e», «também», «além disso» (besides), «aliás» (by the way, or in fact), «inclusive» (even), «não só… mas também…» (not only… but also…). STEP 2: sequence: «primeiro» or «em primeiro lugar», «em seguida», «depois», «enquanto isso», «por fim» or «finalmente». STEP 3: explanation and examples: «por exemplo», «ou seja» (that is), «isto é», «quer dizer» (I mean, more informal). STEP 4: conclusion: «em resumo», «em conclusão», «portanto», «enfim» (at last, anyway) and «afinal de contas» (after all). STEP 5: spoken discourse markers organize talk: «então», «aí», «bom», «olha», «sabe», «pois é», «tipo» and «né» (short for «não é?», used to ask for agreement). Use them in conversation, but in writing and in a formal talk replace them with «portanto», «além disso», «por exemplo», and so on. STEP 6: Portuguese likes longer sentences linked by commas and connectors, while English often prefers shorter sentences. In an e-mail or an exam, one connector per idea is enough; do not stack three connectors in a row.", {
        tag: 'Connectors',
        comparacao: "English has similar tools: «besides», «by the way», «that is», «in short», «finally». The traps are small: «aliás» does not mean «however» (it is closer to «by the way» or «in fact»), and «pois é» is not a cause («because»): it is a way of agreeing or sighing. Also keep «afinal de contas» as a fixed phrase, and do not translate it word for word.",
        tabela: [
          { function: 'addition', connectors: 'além disso, também, aliás, inclusive', register: 'neutral' },
          { function: 'sequence', connectors: 'primeiro, em seguida, depois, por fim', register: 'neutral' },
          { function: 'explanation', connectors: 'por exemplo, ou seja, isto é', register: 'neutral' },
          { function: 'conclusion', connectors: 'em resumo, em conclusão, portanto, afinal de contas', register: 'written, formal' },
          { function: 'spoken markers', connectors: 'então, aí, bom, olha, sabe, né, tipo, pois é', register: 'spoken' },
        ],
        exemplos: [['Além disso, o hotel fica perto da praia.', 'Besides, the hotel is close to the beach.'], ['Primeiro, leia o texto. Depois, responda às perguntas. Por fim, confira as respostas.', 'First, read the text. Then answer the questions. Finally, check the answers.'], ['O curso é gratuito, ou seja, você não paga nada.', 'The course is free, in other words you pay nothing.'], ['Em resumo, o projeto foi um sucesso.', 'In short, the project was a success.'], ['Afinal de contas, ele tinha razão.', 'After all, he was right.']],
        erros: [['Além de disso, o hotel é bom.', 'Além disso, o hotel é bom.', 'It is a fixed phrase: «além disso», without «de».'], ['A gente foi à praia, aliás choveu o dia todo. (meaning «however»)', 'A gente foi à praia, mas choveu o dia todo.', '«Aliás» adds or corrects; it does not mean «however».'], ['Afinal das contas, ele tinha razão.', 'Afinal de contas, ele tinha razão.', 'The fixed phrase is «afinal de contas» (or «no final das contas»).']],
      }),
      dialogo(8, 'Where to spend the holidays', 'Camila and Lucas are deciding where to spend their holidays. In Brazil many people take a break in July, and the mountain region («a serra») is a popular choice.', [
        ['Camila', 'Então, onde a gente vai passar as férias? Primeiro, eu queria ir para o Nordeste.', 'So, where are we going to spend the holidays? First, I wanted to go to the Northeast.'],
        ['Lucas', 'Eu também gosto do Nordeste. Só que as passagens estão caras e, além disso, o hotel que eu vi não tem vaga.', 'I like the Northeast too. But the tickets are expensive and, besides, the hotel I saw has no vacancy.'],
        ['Camila', 'Mesmo assim, vale a pena ver. Por outro lado, a serra é mais barata.', 'Even so, it is worth checking. On the other hand, the mountains are cheaper.'],
        ['Lucas', 'Verdade. Como a serra é perto, a gente pode ir de carro, ou seja, não precisa gastar com avião.', 'True. Since the mountains are close, we can go by car, that is, we do not need to spend money on a plane.'],
        ['Camila', 'Pois é. E também faz menos calor, né?', 'Right. And it is also less hot, isn\'t it?'],
        ['Lucas', 'Isso. Então, em resumo: se der, a gente vai para a serra agora e deixa o Nordeste para o fim do ano.', 'Exactly. So, in short: if it works out, we go to the mountains now and leave the Northeast for the end of the year.'],
        ['Camila', 'Combinado. Desde que o preço do hotel seja razoável, eu fecho agora.', 'Agreed. As long as the hotel price is reasonable, I will book now.'],
        ['Lucas', 'Ótimo. Aí eu reservo hoje mesmo, senão acaba a vaga.', 'Great. Then I will book today, otherwise the room will be gone.'],
      ]),
      producao(5, 'Explain aloud, in about five sentences, how you would plan a weekend trip. Use «primeiro», «além disso», «por outro lado», «ou seja» and «em resumo».'),
    ]),
    sessao('S4', 'Review and practice of lesson 52', [
      revisao(5, 'Say aloud one sentence with each: «embora», «mesmo que», «já que», «desde que» and «senão».'),
      exercicios(20, [
        ouvir('Eu queria ir, só que não deu.', ['Eu queria ir, só que não deu.', 'Eu queria ir, por isso não deu.', 'Eu queria ir, além disso não deu.'], 'Eu queria ir, só que não deu.', '«Só que» = but, in speech.'),
        ouvir('Mesmo que chova, eu vou.', ['Mesmo que chova, eu vou.', 'Mesmo que chove, eu vou.', 'Mesmo que choveu, eu vou.'], 'Mesmo que chova, eu vou.', '«Mesmo que» + present subjunctive.'),
        ouvir('Corra, senão você perde o ônibus.', ['Corra, senão você perde o ônibus.', 'Corra, por isso você perde o ônibus.', 'Corra, embora você perca o ônibus.'], 'Corra, senão você perde o ônibus.', '«Senão» = otherwise.'),
        ouvir('Como choveu, ficamos em casa.', ['Como choveu, ficamos em casa.', 'Embora tenha chovido, ficamos em casa.', 'Apesar da chuva, ficamos em casa.'], 'Como choveu, ficamos em casa.', '«Como» at the start gives a cause.'),
        ditado('Embora estivesse cansado, ele foi trabalhar.', '«Embora» + imperfect subjunctive.'), ditado('Não sei por que ele saiu.', 'Indirect question: «por que» in two words.'), ditado('Em resumo, o projeto foi um sucesso.', '«Em resumo» introduces a conclusion.'),
        mc('Which connector expresses concession and takes the subjunctive?', ['embora', 'porque', 'portanto'], 'embora', '«Embora» = although + subjunctive.'),
        mc('Which sentence is correct?', ['Não sei por que ele saiu.', 'Não sei porque ele saiu.', 'Não sei porquê ele saiu.'], 'Não sei por que ele saiu.', 'Indirect question: two words, no accent.'),
        mc('What does «senão» mean?', ['otherwise', 'if not (two words)', 'however'], 'otherwise', '«Senão» = otherwise.'),
        mc('Which connector sounds most formal and written?', ['todavia', 'só que', 'aí'], 'todavia', '«Todavia» belongs to formal writing.'),
        mc('What is the function of «ou seja»?', ['it explains or restates ("that is")', 'it adds a new idea', 'it contrasts two ideas'], 'it explains or restates ("that is")', '«Ou seja» = that is, in other words.'),
        lacuna('Eu queria ir, ___ não tinha tempo.', ['mas', 'mais', 'portanto'], 'mas', '«Mas» = but.'), lacuna('___ estivesse cansado, ele foi trabalhar.', ['Embora', 'Porque', 'Portanto'], 'Embora', 'Concession + subjunctive.'),
        lacuna('Vou à festa, desde que você ___ também.', ['vá', 'vai', 'foi'], 'vá', '«Desde que» + subjunctive.'), lacuna('Estava tão cansado ___ dormiu no ônibus.', ['que', 'porque', 'quando'], 'que', '«Tão… que…» expresses consequence.'),
        lacuna('___ de ele ter razão, ninguém acreditou.', ['Apesar', 'Embora', 'Porque'], 'Apesar', '«Apesar de» + infinitive.'),
        ordem('Put in order: «Mesmo que chova, eu vou.»', ['Mesmo', 'que', 'chova,', 'eu', 'vou.'], 'Mesmo que chova, eu vou.', '«Mesmo que» + subjunctive.'), ordem('Put in order: «Primeiro, leia o texto. Depois, responda.»', ['Primeiro,', 'leia', 'o', 'texto.', 'Depois,', 'responda.'], 'Primeiro, leia o texto. Depois, responda.', 'Sequence connectors.'), ordem('Put in order: «Corra, senão você perde o ônibus.»', ['Corra,', 'senão', 'você', 'perde', 'o', 'ônibus.'], 'Corra, senão você perde o ônibus.', '«Senão» = otherwise.'),
        livre('Write in Portuguese: Although I was tired, I went to work.', 'Embora estivesse cansado, fui trabalhar.'), livre('Write in Portuguese: I wanted to go, but I had no time.', 'Eu queria ir, mas não tinha tempo.'),
      ]),
      producao(5, 'Tell aloud, in six sentences, what happened on a difficult day: use one contrast, one cause, one consequence, one condition and a conclusion.'),
    ]),
  ],
});
