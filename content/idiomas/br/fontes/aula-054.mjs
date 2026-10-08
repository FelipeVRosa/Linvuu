import { aula, sessao, revisao, producao, palavras, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'br', numero: 54, titulo: 'Formal style and e-mail', nivel: 'b1',
  objetivo: 'Address people formally with «o senhor» and «a senhora», write a clear formal e-mail from greeting to closing, make polite requests and refuse or postpone with tact.',
  nota: 'You can now write and answer a formal e-mail («Prezado», «Segue em anexo», «Atenciosamente»), use «o senhor» and «a senhora» correctly and switch from spoken to written Portuguese. Next lesson: work and the job interview.',
  sessoes: [
    sessao('S1', 'Addressing people formally', [
      revisao(5, 'Say three polite requests with «queria», «gostaria de» and «poderia» (lesson 29 and lesson 41). Then ask a stranger the way to the station using «o senhor» or «a senhora».'),
      palavras(8, [
        ['prezado, prezada', 'preh-ZAH-doo, preh-ZAH-dah', 'dear (formal greeting in a letter or e-mail)', ''], ['o senhor, a senhora', 'oo seh-NYOR, ah seh-NYOH-rah', 'you (formal, respectful); Sir, Madam', ''], ['atenciosamente', 'ah-teh~-see-oh-zah-MEH~-tchee', 'sincerely, kind regards (closing)', ''], ['cordialmente', 'kor-djee-ah-oo-MEH~-tchee', 'cordially, kind regards (closing)', ''],
        ['o assunto', 'oo ah-SOO~-too', 'subject (of an e-mail), matter', ''], ['em anexo', 'eh~ ah-NEK-soo', 'attached, enclosed', ''], ['solicitar', 'soh-lee-see-TAR', 'to request (formal)', ''], ['informar', 'een~-for-MAR', 'to inform, to let someone know', ''],
        ['aguardar', 'ah-gwar-DAR', 'to wait for (formal)', ''], ['o retorno', 'oo heh-TOR-noo', 'reply, feedback, return', ''],
      ]),
      gramatica(12, 'Addressing someone formally: «o senhor», «a senhora» and titles', "STEP 1: «o senhor» (man) and «a senhora» (woman) mean «you» when you want to show respect: to an older person, a customer, a boss, a doctor or someone you have just met in a formal setting. They take the third person singular of the verb, exactly like «você»: «O senhor quer um café?» «A senhora já recebeu o documento?» STEP 2: do not mix levels. Once you say «o senhor», keep using it: not «o senhor, você pode…». To avoid confusion with «seu/sua» (which can mean his, her or your), use «o nome do senhor», «a opinião da senhora» or simply repeat «o senhor». STEP 3: object pronouns are «o/a» in formal speech and writing, attached to the verb with a hyphen: «Posso ajudá-lo?» (to a man), «Posso ajudá-la?» (to a woman). With infinitives in «-ar, -er, -ir» the final «r» disappears and «l» appears: ajudar + o = «ajudá-lo». «Te» belongs to the informal «você/tu» level. In speech you can also simply say «Posso ajudar o senhor?». STEP 4: titles. «Senhor/Senhora + surname» is formal: «Senhor Silva». «Seu José» and «dona Marta» (title + first name) show familiar respect for older people. «Doutor/Doutora» is used for doctors and also, as a courtesy, for lawyers and other professionals. «Professor/Professora» for teachers. STEP 5: in writing the abbreviations are «Sr.», «Sra.», «Dr.», «Dra.», «Prof.».", {
        tag: 'Formal register',
        comparacao: "English has just one «you», so formality comes from tone and words like «Sir». Portuguese changes the form of address itself: «você» (neutral), «o senhor/a senhora» (respectful). Using «você» with an older stranger is not rude in many settings, but «o senhor/a senhora» is always a safe and kind choice, especially in the South and in formal jobs.",
        tabela: [
          { level: 'neutral (você)', question: 'Você quer um café?', object: 'Posso te ajudar?' },
          { level: 'respectful, to a man', question: 'O senhor quer um café?', object: 'Posso ajudá-lo?' },
          { level: 'respectful, to a woman', question: 'A senhora quer um café?', object: 'Posso ajudá-la?' },
          { level: 'familiar respect', question: 'Seu José, quer um café?', object: 'Posso ajudar o senhor?' },
        ],
        erros: [['O senhor, você pode esperar?', 'O senhor pode esperar?', 'Do not mix «o senhor» and «você» in the same address.'], ['Dona Silva', 'Dona Marta / Senhora Silva', '«Dona» goes with a first name; with a surname use «Senhora».'], ['Posso te ajudar, senhora?', 'Posso ajudá-la, senhora?', 'In a formal register use «o/a» attached to the verb. «Te» is informal.'], ['O senhor traz o seu documento? (meaning the speaker\'s)', 'O senhor traz o documento do seu filho?', 'Add «do senhor» or the owner to avoid confusion when «seu» could refer to two people.']],
      }),
      producao(5, 'You work at a hotel reception. Welcome a guest (a man, then a woman) with «o senhor» and «a senhora». Ask what they need, offer to help with «ajudá-lo» or «ajudá-la» and say goodbye.'),
    ]),
    sessao('S2', 'Writing a formal e-mail', [
      revisao(4, 'Say the parts of a formal e-mail in order: assunto, saudação, pedido, agradecimento, despedida. Then say two closings.'),
      palavras(6, [
        ['remarcar', 'heh-mar-KAR', 'to reschedule', ''], ['a reunião', 'ah heh-oo-nee-OW~', 'meeting', ''], ['o prazo', 'oo PRAH-zoo', 'deadline, time limit', ''], ['o orçamento', 'oo or-sah-MEH~-too', 'quote, estimate; budget', ''],
        ['a dúvida', 'ah DOO-vee-dah', 'doubt, question', ''], ['desde já', 'DEZ-djee ZHAH', 'in advance (agradeço desde já = thanks in advance)', ''], ['à disposição', 'ah djees-poh-zee-SOW~', 'at your disposal', ''], ['caso', 'KAH-zoo', 'in case, if (followed by the subjunctive)', ''],
      ]),
      gramatica(12, 'The structure of a formal e-mail and the polite request', "STEP 1: a formal e-mail has six parts. (1) «Assunto»: a short, clear subject line, such as «Solicitação de orçamento». (2) Greeting: «Prezado Senhor Silva,» (man), «Prezada Senhora Costa,» (woman), «Prezados Senhores,» (group). With a colleague you know a little, «Bom dia, Sr. Silva,» or «Olá, Ana,» is enough. (3) Opening: say why you write: «Escrevo para solicitar…», «Gostaria de saber se…», «Venho por meio deste e-mail confirmar…». (4) Body: short paragraphs, one idea each. (5) Thanks and availability: «Agradeço desde já a atenção.», «Fico à disposição para qualquer dúvida.» (6) Closing: «Atenciosamente,» or «Cordialmente,» and your name and role. «Abraço» or «Um abraço» is only for people you know well. STEP 2: make requests with the conditional of courtesy, never with the bare present: «Gostaria de receber o orçamento.» «Poderia me enviar o contrato?» «Seria possível remarcar a reunião?» STEP 3: «caso» + present subjunctive means «in case» or «if»: «Caso o senhor tenha dúvidas, fico à disposição.» «Caso haja alguma alteração, avisaremos.» STEP 4: attach files with «Segue em anexo…» («Attached you will find…») or «Em anexo, envio…». STEP 5: reply to a message by starting with «Agradeço a mensagem» or «Recebi o seu e-mail».", {
        tag: 'Formal register',
        comparacao: "In English «I want the quote» can pass in a short e-mail, but in Portuguese «Quero o orçamento» sounds like an order. English uses «could you» and «would you mind» the same way Portuguese uses the conditional. Note that Brazilian e-mails are warmer than they look: «Prezado» is a standard formula, not a sign of coldness.",
        tabela: [
          { part: 'subject', formal: 'Solicitação de orçamento', less_formal: 'Orçamento' },
          { part: 'greeting', formal: 'Prezado Senhor Silva,', less_formal: 'Bom dia, Carlos,' },
          { part: 'request', formal: 'Gostaria de receber o orçamento.', less_formal: 'Pode me mandar o orçamento?' },
          { part: 'attachment', formal: 'Segue em anexo o documento.', less_formal: 'Mandei o documento em anexo.' },
          { part: 'thanks', formal: 'Agradeço desde já a atenção.', less_formal: 'Valeu pela ajuda!' },
          { part: 'closing', formal: 'Atenciosamente, / Cordialmente,', less_formal: 'Um abraço, / Abraços,' },
        ],
        erros: [['Querido Senhor Silva,', 'Prezado Senhor Silva,', '«Querido» is for friends and family. The formal greeting is «Prezado/Prezada».'], ['Quero o orçamento até sexta.', 'Gostaria de receber o orçamento até sexta.', 'Use the conditional of courtesy to make a request in a formal text.'], ['Caso o senhor tem dúvidas, fico à disposição.', 'Caso o senhor tenha dúvidas, fico à disposição.', '«Caso» is followed by the subjunctive.'], ['Atenciosamente, abraços, Rodrigo', 'Atenciosamente, Rodrigo', 'Choose one closing: formal or friendly, not both.']],
      }),
      producao(8, 'Write (or say aloud, line by line) a formal e-mail to a hotel: ask if they have a double room for the last weekend of the month, ask the price, thank them in advance and close properly. Use «Prezados Senhores,», «Gostaria de…», «Seria possível…», «Agradeço desde já» and «Atenciosamente,».'),
    ]),
    sessao('S3', 'Reading and answering an e-mail', [
      revisao(4, 'Say the greeting and closing of an e-mail to a woman named Almeida, then the same for a group of managers.'),
      palavras(5, [
        ['infelizmente', 'een~-feh-leez-MEH~-tchee', 'unfortunately', ''], ['lamentar', 'lah-meh~-TAR', 'to regret, to be sorry about', ''], ['adiar', 'ah-djee-AR', 'to postpone', ''], ['encaminhar', 'eh~-kah-mee-NYAR', 'to forward, to direct', ''],
        ['agendar', 'ah-zheh~-DAR', 'to schedule, to book', ''], ['em breve', 'eh~ BREH-vee', 'soon', ''],
      ]),
      gramatica(8, 'From spoken to written: refusing, postponing and avoiding casual forms', "STEP 1: written Portuguese drops the shortcuts of speech. «Pra» becomes «para», «tá» becomes «está», «tô» becomes «estou», «a gente» becomes «nós» (or the verb in the first person plural), «né» disappears or becomes «não é?», «cadê» becomes «onde está». Contractions such as «num» and «numa» are replaced by «em um» and «em uma». STEP 2: to give bad news, begin with a softener and then give the reason: «Infelizmente, não será possível…», «Lamento informar que…», «Sinto muito, mas…». Never say just «não». STEP 3: use the simple future for promises in writing: «Enviaremos a resposta em breve.» «O documento será encaminhado ao setor responsável.» (passive with «ser», lesson 49). STEP 4: offer an alternative: «Poderíamos agendar para segunda-feira?» «Caso prefira, podemos adiar a reunião.» STEP 5: end by thanking for the understanding: «Agradeço a compreensão.»", {
        tag: 'Formal register',
        comparacao: "In English the same word often works for chat and for a formal letter («I am» / «I am» in a formal e-mail), with contractions that are easy to drop. In Portuguese the gap between spoken and written style is larger: «a gente vai pra lá» in speech becomes «nós iremos para lá» or «iremos para lá» in a formal text.",
        tabela: [
          { spoken: 'pra', written: 'para', example: 'Estou ligando para confirmar.' },
          { spoken: 'tá / tô', written: 'está / estou', example: 'Está tudo certo. Estou à disposição.' },
          { spoken: 'a gente vai', written: 'nós iremos / iremos', example: 'Iremos enviar o material.' },
          { spoken: 'né?', written: 'não é? / (omitted)', example: 'Podemos combinar assim, não é?' },
          { spoken: 'mandar', written: 'enviar', example: 'Enviarei o documento hoje.' },
        ],
        erros: [['Infelizmente não dá pra ir.', 'Infelizmente não será possível comparecer.', 'In a formal e-mail avoid «dá pra» and «pra».'], ['Estou ligando pra confirmar a reunião.', 'Estou ligando para confirmar a reunião.', 'Write «para» in formal and written Portuguese.'], ['Eu lamento que a reunião foi adiada.', 'Lamento que a reunião tenha sido adiada.', '«Lamentar que» takes the subjunctive (here the compound form «tenha sido»).']],
      }),
      texto(8, 'A request to reschedule a meeting',
        "Assunto: Pedido de remarcação da reunião de quinta-feira\n\nPrezada Senhora Almeida,\n\nEscrevo para solicitar a remarcação da nossa reunião, marcada para quinta-feira, às 14h. Infelizmente, tenho uma viagem de trabalho e só volto na sexta-feira à noite.\n\nSeria possível agendar o encontro para a próxima segunda-feira, pela manhã? Caso a senhora prefira outro horário, fico à disposição para ajustar a minha agenda.\n\nSegue em anexo o orçamento revisado, conforme combinado. Agradeço desde já a compreensão e aguardo o seu retorno.\n\nAtenciosamente,\nRodrigo Menezes\nGerente de Compras",
        "Subject: Request to reschedule Thursday's meeting\n\nDear Ms. Almeida,\n\nI am writing to ask for our meeting, set for Thursday at 2 p.m., to be rescheduled. Unfortunately, I have a business trip and I only return on Friday evening.\n\nWould it be possible to schedule the meeting for next Monday morning? If you prefer another time, I am at your disposal to adjust my calendar.\n\nAttached you will find the revised quote, as agreed. Thank you in advance for your understanding, and I look forward to your reply.\n\nSincerely,\nRodrigo Menezes\nPurchasing Manager",
        [['Why does Rodrigo write?', 'To ask Ms. Almeida to reschedule Thursday\'s meeting.'], ['Why can he not come on Thursday?', 'He has a business trip and only returns on Friday evening.'], ['What new time does he suggest?', 'Next Monday morning.'], ['What is attached to the e-mail?', 'The revised quote («o orçamento revisado»).'], ['Find the formal greeting, the polite request and the closing.', '«Prezada Senhora Almeida»; «Seria possível agendar…?»; «Atenciosamente».']]),
      producao(5, 'Write a short reply as Ms. Almeida: thank Rodrigo for his message, confirm Monday at 9 a.m. («às nove horas»), and close formally. Use «Agradeço a mensagem» and «Confirmo a reunião para segunda-feira».'),
    ]),
    sessao('S4', 'Review and practice of lesson 54', [
      revisao(5, 'Say aloud: the formal greeting to a man and a woman, three polite requests with «gostaria», «poderia» and «seria possível», and two formal closings.'),
      exercicios(20, [
        ouvir('Prezada Senhora Costa,', ['Prezada Senhora Costa,', 'Prezado Senhor Costa,', 'Querida Dona Costa,'], 'Prezada Senhora Costa,', 'The greeting for a woman: «Prezada» (feminine).'),
        ouvir('O senhor aceita um café?', ['O senhor aceita um café?', 'Você aceita um café?', 'A senhora aceita um café?'], 'O senhor aceita um café?', 'Formal question to a man.'),
        ouvir('Segue em anexo o orçamento.', ['Segue em anexo o orçamento.', 'Segue em anexo o contrato.', 'Segue em anexo o prazo.'], 'Segue em anexo o orçamento.', 'Listen for «orçamento».'),
        ouvir('Fico à disposição para qualquer dúvida.', ['Fico à disposição para qualquer dúvida.', 'Fico em casa para qualquer dúvida.', 'Fico à disposição para qualquer reunião.'], 'Fico à disposição para qualquer dúvida.', 'A typical closing line.'),
        ouvir('Gostaria de remarcar a reunião.', ['Gostaria de remarcar a reunião.', 'Gostaria de marcar a reunião.', 'Gostaria de adiar a reunião.'], 'Gostaria de remarcar a reunião.', '«Remarcar» is to reschedule.'),
        ditado('Atenciosamente', 'Write: Atenciosamente. The most common formal closing.'), ditado('Agradeço desde já.', 'Write: Agradeço desde já.'), ditado('Em que posso ajudá-lo?', 'Write: Em que posso ajudá-lo? Attention to the hyphen and the accent.'),
        mc('Which closing is formal?', ['Atenciosamente,', 'Beijos,', 'Fui!'], 'Atenciosamente,', 'The other two are for friends.'),
        mc('How do you open an e-mail to a woman you do not know, Ms. Costa?', ['Prezada Senhora Costa,', 'Prezado Senhora Costa,', 'E aí, Costa,'], 'Prezada Senhora Costa,', 'The adjective agrees: «prezada» + «senhora».'),
        mc('Which word replaces «pra» in a formal e-mail?', ['para', 'por', 'pro'], 'para', '«Pra» is the spoken form of «para».'),
        mc('Which sentence is correct when you address a man formally?', ['O senhor pode esperar um momento?', 'O senhor, você pode esperar?', 'O senhor podes esperar?'], 'O senhor pode esperar um momento?', '«O senhor» takes the third person singular.'),
        mc('What does «Segue em anexo» mean?', ['Attached you will find…', 'Please follow me…', 'Sent from my phone'], 'Attached you will find…', 'Used to introduce an attached file.'),
        lacuna('Caso o senhor ___ dúvidas, fico à disposição. (ter)', ['tenha', 'tem', 'terá'], 'tenha', '«Caso» is followed by the subjunctive.'), lacuna('Prezada ___ Costa,', ['Senhora', 'Senhor', 'Dona'], 'Senhora', 'The formal greeting to a woman uses «Senhora» with the surname.'),
        lacuna('___ de saber se há vaga. (conditional of courtesy)', ['Gostaria', 'Gosto', 'Gostei'], 'Gostaria', 'The conditional of courtesy softens a request.'), lacuna('Segue ___ anexo o documento.', ['em', 'no', 'de'], 'em', 'The set phrase is «em anexo».'),
        ordem('Put in order: «Gostaria de remarcar a reunião.»', ['Gostaria', 'de', 'remarcar', 'a', 'reunião.'], 'Gostaria de remarcar a reunião.', 'A polite request with the conditional.'),
        ordem('Put in order: «Seria possível adiar o prazo?»', ['Seria', 'possível', 'adiar', 'o', 'prazo?'], 'Seria possível adiar o prazo?', 'A very polite way to ask.'),
        ordem('Put in order: «Agradeço desde já a atenção.»', ['Agradeço', 'desde', 'já', 'a', 'atenção.'], 'Agradeço desde já a atenção.', 'A standard sentence before the closing.'),
        livre('Write in Portuguese (formal): Could you send me the quote?', 'O senhor poderia me enviar o orçamento?'),
        livre('Write in Portuguese (formal): I would like to reschedule the meeting.', 'Gostaria de remarcar a reunião.'),
      ]),
      producao(5, 'Write a three-sentence formal e-mail to a company: ask for information about a course, thank them in advance, and close with «Atenciosamente». Check that you used «para», not «pra».'),
    ]),
  ],
});
