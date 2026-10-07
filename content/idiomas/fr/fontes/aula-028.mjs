import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'fr', numero: 28, titulo: 'Trabalho, telefone e e-mail', nivel: 'a2',
  objetivo: 'Falar do trabalho e da rotina profissional, atender e fazer chamadas, marcar reuniões e escrever e-mails curtos em francês.',
  nota: 'Você se comunica no trabalho em francês. Próxima aula: o imperativo com pronomes e ordens.',
  sessoes: [
    sessao('S1', 'O mundo do trabalho', [
      revisao(5, 'Faça o check-in de um hotel em voz alta e peça um serviço.'),
      palavras(8, [
        ['le travail', 'lö travaiï', 'o trabalho', ''], ['le bureau', 'lö bürô', 'o escritório', ''], ['le collègue', 'lö koleg', 'o colega', ''], ['le patron', 'lö patrõ', 'o chefe, patrão', ''], ['la réunion', 'la reünió̃', 'a reunião', ''], ['le salaire', 'lö salér', 'o salário', ''], ['l\'entreprise', 'lãtröpriz', 'a empresa', ''], ['le contrat', 'lö kõtra', 'o contrato', ''],
      ]),
      gramatica(12, 'Parler de son travail', 'PASSO 1: perguntar a profissão: «Que faites-vous dans la vie ?» «Quel est votre métier ?» «Vous travaillez dans quoi ?» PASSO 2: responder: «Je suis ingénieur.» «Je travaille dans une banque.» «Je travaille pour une grande entreprise.» PASSO 3: horários: «Je travaille de neuf heures à dix-sept heures.» «Je commence à neuf heures.» «Je finis à cinq heures.» PASSO 4: tarefas: «Je dois envoyer des e-mails.» «Je participe à des réunions.» «Je réponds aux clients.» PASSO 5: «travailler» + «pour» (empresa) ou «dans» (setor): «Je travaille pour Renault.» «Je travaille dans l\'informatique.» PASSO 6: «depuis» para tempo de emprego: «Je travaille ici depuis trois ans.» PASSO 7: contratos: «un CDI» (contrato sem prazo), «un CDD» (contrato com prazo), «un stage» (estágio). PASSO 8: pedir folga ou falar de rotina: «Je prends des congés en août.» «Je suis en vacances.»', {
        tag: 'Trabalho',
        comparacao: 'em português dizemos «trabalho em um banco» e «trabalho numa empresa». O francês diz «dans une banque» (lugar) e «pour une entreprise» (empregador). «Le patron» é o chefe, e «le collègue» é o colega: cuidado, «collègue» não é «colega de escola» (que é «camarade»).',
        tabela: [
          { pergunta: 'Que faites-vous dans la vie ?', resposta: 'Je suis ingénieur.' }, { pergunta: 'Où travaillez-vous ?', resposta: 'Je travaille dans une banque.' }, { pergunta: 'Pour qui travaillez-vous ?', resposta: 'Je travaille pour une grande entreprise.' }, { pergunta: 'Depuis quand travaillez-vous ici ?', resposta: 'Depuis trois ans.' }, { pergunta: 'Vous travaillez à quelle heure ?', resposta: 'De neuf heures à dix-sept heures.' },
        ],
        erros: [['Je travaille em un banco.', 'Je travaille dans une banque.', 'Vocabulário e preposição.'], ['Je suis un ingénieur.', 'Je suis ingénieur.', 'Profissão sem artigo.'], ['Je travaille ici il y a trois ans.', 'Je travaille ici depuis trois ans.', 'Continua: «depuis».'], ['Je travaille de neuf heures jusqu\'à cinq.', 'Je travaille de neuf heures à dix-sept heures.', 'De… à… com horas.']],
      }),
      producao(5, 'Apresente em voz alta o seu trabalho: profissão, empresa, horário e tarefas.'),
    ]),
    sessao('S2', 'Ao telefone', [
      revisao(4, 'Diga em voz alta o seu horário de trabalho e duas tarefas diárias.'),
      palavras(6, [
        ['décrocher', 'dekroxé', 'atender (telefone)', ''], ['raccrocher', 'rakroxé', 'desligar', ''], ['le numéro', 'lö nümerô', 'o número', ''], ['le message', 'lö mesaj', 'o recado', ''], ['rappeler', 'rapölé', 'ligar de novo', ''], ['occupé', 'ocüpê', 'ocupado', ''],
      ]),
      gramatica(12, 'Ao telefone: frases fixas', 'PASSO 1: atender: «Allô ? Entreprise Dupont, bonjour.» «Bonjour, ici Marie.» PASSO 2: pedir alguém: «Je voudrais parler à Monsieur Martin, s\'il vous plaît.» «Pourrais-je parler à…» PASSO 3: perguntar quem fala: «Qui est à l\'appareil ?» «C\'est de la part de qui ?» PASSO 4: pedir para esperar: «Ne quittez pas.» «Un instant, s\'il vous plaît.» PASSO 5: a pessoa não está: «Il n\'est pas là.» «Il est en réunion.» «La ligne est occupée.» PASSO 6: deixar recado: «Pouvez-vous lui dire de me rappeler ?» «Je voudrais laisser un message.» PASSO 7: dar contato: «Mon numéro est le 06 12 34 56 78.» (números de telefone franceses dizem-se de dois em dois) PASSO 8: encerrar: «Merci, bonne journée.» «À bientôt.»', {
        tag: 'Trabalho',
        comparacao: 'em português dizemos «alô, quem fala?». O francês usa «allô» apenas em chamadas informais; no trabalho, a empresa se identifica. Os números de telefone são ditos em pares de dígitos: «zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit».',
        tabela: [
          { situacao: 'atender', frase: 'Entreprise Dupont, bonjour.' }, { situacao: 'pedir alguém', frase: 'Je voudrais parler à Monsieur Martin.' }, { situacao: 'quem fala', frase: 'C\'est de la part de qui ?' }, { situacao: 'esperar', frase: 'Ne quittez pas.' }, { situacao: 'recado', frase: 'Pouvez-vous lui dire de me rappeler ?' },
        ],
        erros: [['Qui es-tu ?', 'C\'est de la part de qui ?', 'Ao telefone, pergunte com educação.'], ['Je voudrais parler com Monsieur Martin.', 'Je voudrais parler à Monsieur Martin.', 'Parler à.'], ['Il est pas là.', 'Il n\'est pas là.', 'Negação completa por escrito.'], ['Pouvez-vous lui dire me rappeler ?', 'Pouvez-vous lui dire de me rappeler ?', '«Dire de» + infinitivo.']],
      }),
      producao(8, 'Faça em voz alta três chamadas curtas: pedir alguém, deixar recado e marcar um horário.'),
    ]),
    sessao('S3', 'E-mail e reuniões', [
      revisao(4, 'Atenda uma chamada e deixe um recado em voz alta.'),
      palavras(5, [
        ['l\'objet', 'lobjé', 'o assunto', ''], ['ci-joint', 'si-juẽ', 'em anexo', ''], ['cordialement', 'kordialmã', 'cordialmente', ''], ['joindre', 'juẽdr', 'anexar', ''], ['confirmer', 'kõfirmé', 'confirmar', ''],
      ]),
      gramatica(8, 'Escrever um e-mail profissional', 'PASSO 1: saudação: «Bonjour Madame,» «Bonjour Monsieur Dupont,» (com vírgula; «Cher» é mais formal). PASSO 2: abertura: «Je vous écris pour confirmer notre rendez-vous.» «Suite à notre conversation,…» PASSO 3: pedido: «Pourriez-vous m\'envoyer le contrat ?» «Je vous serais reconnaissant de…» PASSO 4: anexo: «Vous trouverez ci-joint le document.» PASSO 5: encerramento: «Cordialement,» «Bien cordialement,» «Dans l\'attente de votre réponse,» PASSO 6: reunião: «La réunion aura lieu lundi à dix heures.» «Pouvez-vous confirmer votre présence ?»', {
        tag: 'Trabalho',
        comparacao: 'em português encerramos com «atenciosamente» ou «cordialmente». O francês usa «cordialement» (neutro) ou «bien cordialement» (mais caloroso). Evite fórmulas longas como «Veuillez agréer…», que ficam para o B1.',
        tabela: [
          { parte: 'saudação', frase: 'Bonjour Madame,' }, { parte: 'abertura', frase: 'Je vous écris pour confirmer notre rendez-vous.' }, { parte: 'pedido', frase: 'Pourriez-vous m\'envoyer le contrat ?' }, { parte: 'anexo', frase: 'Vous trouverez ci-joint le document.' }, { parte: 'fecho', frase: 'Cordialement,' },
        ],
        erros: [['Salut Madame,', 'Bonjour Madame,', '«Salut» é informal demais.'], ['Je vous écris pour confirmer le rendez-vous demain.', 'Je vous écris pour confirmer notre rendez-vous demain.', 'Use «notre».'], ['Veuillez vous envoyer le contrat.', 'Pourriez-vous m\'envoyer le contrat ?', 'Pedido educado.'], ['Cordialement, Cordialement.', 'Cordialement,', 'Uma vez só.']],
      }),
      texto(8, 'Un e-mail professionnel / Um e-mail profissional', 'Objet : Confirmation de notre rendez-vous\n\nBonjour Madame Lefèvre,\n\nJe vous écris pour confirmer notre rendez-vous de lundi 14 octobre, à dix heures, dans vos bureaux. Vous trouverez ci-joint le contrat que nous avons préparé. Pourriez-vous le lire avant la réunion et me dire si tout vous convient ? Je reste à votre disposition pour toute question.\n\nDans l\'attente de votre réponse,\nCordialement,\nCarlos Silva', 'Assunto: Confirmação do nosso encontro\n\nBom dia, Sra. Lefèvre,\n\nEscrevo para confirmar o nosso encontro de segunda-feira, 14 de outubro, às dez horas, nos seus escritórios. Segue em anexo o contrato que preparamos. A senhora poderia lê-lo antes da reunião e me dizer se tudo lhe convém? Fico à disposição para qualquer dúvida.\n\nNa expectativa de sua resposta,\nCordialmente,\nCarlos Silva', [['Pour quelle date le rendez-vous est-il confirmé ?', 'Lundi 14 octobre, à dix heures.'], ['Qu\'est-ce qui est ci-joint ?', 'Le contrat.'], ['Que demande Carlos à Madame Lefèvre ?', 'De lire le contrat avant la réunion et de dire si tout lui convient.'], ['Comment Carlos termine-t-il l\'e-mail ?', 'Par « Dans l\'attente de votre réponse, Cordialement ».']]),
      producao(5, 'Escreva em voz alta um e-mail curto: confirmar uma reunião e pedir um documento.'),
    ]),
    sessao('S4', 'Revisão e prática da aula 28', [
      revisao(5, 'Apresente o seu trabalho e atenda uma chamada telefônica.'),
      exercicios(20, [
        ouvir('Je voudrais parler à Monsieur Martin', ['Je voudrais parler à Monsieur Martin', 'Je voudrais parler de Monsieur Martin', 'Je voudrais parler avec Monsieur Martin'], 'Je voudrais parler à Monsieur Martin', 'Ouça «à».'), ouvir('Ne quittez pas', ['Ne quittez pas', 'Ne partez pas', 'Ne parlez pas'], 'Ne quittez pas', 'Ouça «quittez».'), ouvir('Je travaille dans une banque depuis trois ans', ['Je travaille dans une banque depuis trois ans', 'J\'ai travaillé dans une banque il y a trois ans', 'Je travaillerai dans une banque dans trois ans'], 'Je travaille dans une banque depuis trois ans', 'Ouça «depuis».'),
        ditado('Je suis ingénieur', 'Escreva: Je suis ingénieur.'), ditado('Pourriez-vous m\'envoyer le contrat', 'Escreva: Pourriez-vous m\'envoyer le contrat.'), ditado('Cordialement', 'Escreva: Cordialement.'),
        mc('Profissão: qual está correto?', ['Je suis ingénieur.', 'Je suis un ingénieur.', 'Je suis ingénieur un.'], 'Je suis ingénieur.', 'Sem artigo.'), mc('«Em anexo» em francês:', ['ci-joint', 'en annexe', 'dans-joint'], 'ci-joint', 'Expressão de e-mail.'), mc('Fecho de e-mail neutro:', ['Cordialement,', 'Bisous,', 'Salut,'], 'Cordialement,', 'Registro formal neutro.'), mc('Pedir alguém ao telefone:', ['Je voudrais parler à Monsieur Martin.', 'Je veux Monsieur Martin.', 'Où est Monsieur Martin ?'], 'Je voudrais parler à Monsieur Martin.', 'Pedido educado.'),
        lacuna('Je travaille ___ une banque. (em)', ['dans', 'pour', 'en'], 'dans', 'Lugar de trabalho.'), lacuna('Je travaille ___ une grande entreprise. (para)', ['pour', 'dans', 'à'], 'pour', 'Empregador.'), lacuna('Il est ___ réunion. (em)', ['en', 'dans', 'à'], 'en', '«Être en réunion».'), lacuna('Je vous écris ___ confirmer le rendez-vous.', ['pour', 'à', 'de'], 'pour', 'Finalidade.'),
        ordem('Ordene: «Je voudrais laisser un message.»', ['Je', 'voudrais', 'laisser', 'un', 'message'], 'Je voudrais laisser un message.', 'Pedido educado.'), ordem('Ordene: «Il n\'est pas là.»', ['Il', 'n\'est', 'pas', 'là'], 'Il n\'est pas là.', 'Negação.'),
        livre('Escreva em francês: Trabalho num banco há três anos. Queria falar com o senhor Martin. Vou lhe enviar o contrato.', 'Je travaille dans une banque depuis trois ans. Je voudrais parler à Monsieur Martin. Je vais lui envoyer le contrat.'),
      ]),
      producao(5, 'Fale 1 minuto sobre o seu trabalho ideal, com horário, local e tarefas.'),
    ]),
  ],
});
