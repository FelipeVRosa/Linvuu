import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 56, titulo: 'Escrita: e-mails formais e informais', nivel: 'b1',
  objetivo: 'Escrever e-mails claros, escolhendo o registro (formal ou informal), a saudação, o pedido educado e a despedida certos.',
  nota: 'Você escreve e-mails que funcionam no trabalho e entre amigos. Próxima aula: trabalho e carreira.',
  sessoes: [
    sessao('S1', 'Informal ou formal', [
      revisao(5, 'Defenda uma opinião por 1 minuto, com razão, exemplo e contraponto.'),
      palavras(8, [
        ['Dear', 'dir', 'Prezado(a)', ''], ['Hi', 'rái', 'Oi', ''], ['Best regards', 'best rigárdz', 'Atenciosamente', ''], ['Yours sincerely', 'iorz sinsírli', 'Atenciosamente (nome conhecido)', ''], ['Yours faithfully', 'iorz féithfuli', 'Atenciosamente (nome desconhecido)', ''], ['Cheers', 'tchirz', 'Abraços', ''], ['I am writing to', 'ái ém ráitin tu', 'escrevo para', ''], ['Looking forward to', 'lúkin fóruârd tu', 'aguardo com expectativa', ''],
      ]),
      gramatica(12, 'Registro e estrutura do e-mail', 'PASSO 1: e-mail informal (amigo): «Hi Sarah,» … «Cheers,» ou «See you soon,». Use contrações (I\'m, can\'t) e frases curtas. PASSO 2: e-mail formal (empresa, escola): «Dear Mr. Brown,» … «Best regards,». Evite contrações e gírias. PASSO 3: se você NÃO sabe o nome: «Dear Sir or Madam,» e termine com «Yours faithfully,». PASSO 4: se sabe o nome: «Dear Ms. Green,» e «Yours sincerely,». PASSO 5: estrutura: saudação, motivo («I am writing to…»), detalhes, pedido ou ação, despedida. PASSO 6: assunto (subject) curto e claro: «Meeting on Monday». PASSO 7: em e-mails americanos, «Best regards» e «Sincerely» são as despedidas mais comuns.', {
        tag: 'Registro',
        comparacao: 'em português usamos «Prezado» e «Atenciosamente» no formal, e «Oi» e «Abraços» no informal. Em inglês a divisão é igual: Dear/Best regards × Hi/Cheers.',
        tabela: [
          { parte: 'saudação', informal: 'Hi Sarah,', formal: 'Dear Ms. Green,' }, { parte: 'motivo', informal: 'I wanted to ask you…', formal: 'I am writing to ask…' }, { parte: 'despedida', informal: 'Cheers, / See you soon,', formal: 'Best regards, / Sincerely,' }, { parte: 'contrações', informal: 'I\'m, can\'t', formal: 'I am, cannot' },
        ],
        erros: [['Dear Sarah, what\'s up?', 'Hi Sarah, what\'s up?', 'Dear é mais formal.'], ['Hi Mr. Brown, I\'m gonna ask…', 'Dear Mr. Brown, I am writing to ask…', 'Evite gírias no formal.'], ['Dear Sir or Madam, … Yours sincerely,', 'Dear Sir or Madam, … Yours faithfully,', 'Nome desconhecido: faithfully.']],
      }),
      producao(5, 'Escreva a saudação e a despedida para 4 pessoas: amigo, professor, cliente, empresa desconhecida.'),
    ]),
    sessao('S2', 'Pedidos e respostas educadas', [
      revisao(4, 'Corrija: «Dear Sarah, what\'s up?» e «Hi Mr. Brown, I\'m gonna ask…»'),
      palavras(6, [
        ['could you', 'cúd iu', 'você poderia', ''], ['would you mind', 'uúd iu máind', 'você se importaria', ''], ['attach', 'atétch', 'anexar', ''], ['attachment', 'atétchmnt', 'anexo', ''], ['reply', 'riplái', 'responder', ''], ['as soon as possible', 'éz sun éz pósibl', 'o mais rápido possível', ''],
      ]),
      gramatica(12, 'Pedir, oferecer e agradecer', 'PASSO 1: peça com «Could you…?» ou «Would you mind + -ing?»: «Could you send me the file?» «Would you mind sending it today?» PASSO 2: «please» no meio ou no fim. PASSO 3: ofereça: «I can send you…», «Let me know if you need anything else.» PASSO 4: agradeça: «Thank you for your help.» «Thanks for your quick reply.» PASSO 5: anexo: «Please find the report attached.» PASSO 6: peça resposta: «I look forward to hearing from you.» PASSO 7: resposta curta ao pedido: «Sure, no problem.» (informal) ou «Certainly. I will send it today.» (formal).', {
        tag: 'Pedidos',
        comparacao: 'em português dizemos «você poderia enviar…?» e «obrigado pela ajuda». Em inglês: «Could you send…?» e «Thank you for your help.»',
        tabela: [
          { funcao: 'pedir', frase: 'Could you send me the file?' }, { funcao: 'pedir (muito educado)', frase: 'Would you mind sending it today?' }, { funcao: 'anexar', frase: 'Please find the report attached.' }, { funcao: 'agradecer', frase: 'Thank you for your help.' }, { funcao: 'encerrar', frase: 'I look forward to hearing from you.' },
        ],
        erros: [['Would you mind to send it?', 'Would you mind sending it?', 'mind + -ing.'], ['Thanks for help me.', 'Thanks for helping me. / Thank you for your help.', 'for + -ing.'], ['I look forward to hear from you.', 'I look forward to hearing from you.', 'to + -ing.'], ['Send me the file.', 'Could you send me the file?', 'Pedido educado.']],
      }),
      producao(8, 'Escreva 6 pedidos educados: documentos, mudar de data, tirar uma dúvida, agradecer.'),
    ]),
    sessao('S3', 'Escrever um e-mail completo', [
      revisao(4, 'Reescreva de forma educada: «Send me the file.» «Reply today.»'),
      palavras(5, [
        ['meeting', 'miitin', 'reunião', ''], ['reschedule', 'riskédjul', 'remarcar', ''], ['apologize', 'apólodjáiz', 'pedir desculpas', ''], ['inconvenience', 'inconviinions', 'inconveniente', ''], ['confirm', 'conférm', 'confirmar', ''],
      ]),
      gramatica(8, 'Desculpas e mudanças de plano', 'PASSO 1: peça desculpas: «I apologize for the inconvenience.» (formal), «Sorry about that.» (informal). PASSO 2: explique o motivo curto: «Unfortunately, I have a conflict on Monday.» PASSO 3: proponha uma alternativa: «Would Tuesday at 10 a.m. work for you?» PASSO 4: peça confirmação: «Could you please confirm?» PASSO 5: feche com agradecimento.', {
        tag: 'Remarcar',
        comparacao: 'em português dizemos «lamento o transtorno» e «seria possível terça?». Em inglês: «I apologize for the inconvenience» e «Would Tuesday work for you?»',
        tabela: [
          { funcao: 'desculpa', frase: 'I apologize for the inconvenience.' }, { funcao: 'motivo', frase: 'Unfortunately, I have a conflict.' }, { funcao: 'alternativa', frase: 'Would Tuesday work for you?' }, { funcao: 'confirmação', frase: 'Could you please confirm?' },
        ],
        erros: [['I apologize about the delay.', 'I apologize for the delay.', 'apologize for.'], ['Would Tuesday works for you?', 'Would Tuesday work for you?', 'Após would: verbo base.']],
      }),
      texto(8, 'A formal email / Um e-mail formal', 'Dear Ms. Green, I am writing to reschedule our meeting on Monday. Unfortunately, I have a conflict that day, and I apologize for the inconvenience. Would Tuesday at 10 a.m. work for you? Please find the agenda attached. Could you please confirm by Friday? Thank you for your understanding. I look forward to hearing from you. Best regards, Ben Carter.',
        'Prezada Sra. Green, escrevo para remarcar nossa reunião de segunda. Infelizmente, tenho um conflito nesse dia e peço desculpas pelo inconveniente. Terça às 10h seria bom para a senhora? Segue a pauta anexa. A senhora poderia confirmar até sexta? Obrigado pela compreensão. Aguardo seu retorno. Atenciosamente, Ben Carter.',
        [['Why is Ben writing?', 'To reschedule the meeting.'], ['What time does he suggest?', 'Tuesday at 10 a.m.'], ['What is attached?', 'The agenda.'], ['When should she confirm?', 'By Friday.']]),
      producao(5, 'Escreva um e-mail de 6 frases para remarcar um compromisso com seu professor.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 56', [
      revisao(5, 'Leia seu e-mail em voz alta e troque 3 expressões por mais formais.'),
      exercicios(20, [
        ouvir('Could you send me the file', ['Could you send me the file', 'Send me the file', 'Could you sending me the file'], 'Could you send me the file', 'Ouça o pedido educado.'), ouvir('I look forward to hearing from you', ['I look forward to hearing from you', 'I look forward to hear from you', 'I look forward hearing you'], 'I look forward to hearing from you', 'Ouça «hearing».'), ditado('Please find the report attached', 'Escreva: please find the report attached.'), ditado('I apologize for the inconvenience', 'Escreva: I apologize for the inconvenience.'),
        mc('Qual saudação é formal?', ['Dear Mr. Brown,', 'Hi Mr. Brown,', 'Hey Mr. Brown,'], 'Dear Mr. Brown,', 'Dear = formal.'), mc('Se você não sabe o nome, termine com…', ['Yours faithfully,', 'Yours sincerely,', 'Cheers,'], 'Yours faithfully,', 'Dear Sir or Madam.'), mc('Qual frase está correta?', ['Would you mind sending it?', 'Would you mind to send it?', 'Would you mind send it?'], 'Would you mind sending it?', 'mind + -ing.'), mc('Qual frase está correta?', ['I look forward to hearing from you.', 'I look forward to hear from you.', 'I look forward hearing.'], 'I look forward to hearing from you.', 'to + -ing.'),
        lacuna('I am ___ to reschedule the meeting. (escrevendo)', ['writing', 'write', 'wrote'], 'writing', 'I am writing to.'), lacuna('I apologize ___ the delay.', ['for', 'about', 'with'], 'for', 'apologize for.'), lacuna('Would Tuesday ___ for you? (funcionar)', ['work', 'works', 'working'], 'work', 'would + verbo base.'), lacuna('Thank you ___ your help.', ['for', 'to', 'of'], 'for', 'thank you for.'),
        ordem('Ordene: «Could you please confirm by Friday?»', ['Could', 'you', 'please', 'confirm', 'by', 'Friday'], 'Could you please confirm by Friday?', 'Pedido educado.'), ordem('Ordene: «I am writing to ask about the course.»', ['I', 'am', 'writing', 'to', 'ask', 'about', 'the', 'course'], 'I am writing to ask about the course.', 'I am writing to.'),
        livre('Escreva um e-mail formal de 4 linhas pedindo informações sobre um curso.', 'Dear Sir or Madam, I am writing to ask about your English course. Could you send me the schedule? Thank you for your help. Yours faithfully, Ana'),
      ]),
      producao(5, 'Escreva um e-mail informal de 4 linhas convidando um amigo para jantar.'),
    ]),
  ],
});
