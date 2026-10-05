import { aula, sessao, intro, revisao, producao, palavras, dialogo, texto, gramatica, alfabeto, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'de', numero: 16, titulo: 'Profissões e local de trabalho', nivel: 'a1',
  objetivo: 'Dizer a sua profissão (sem artigo, com o feminino em -in), perguntar a dos outros, dizer onde e para quem trabalha e falar do horário de trabalho.',
  nota: 'Você fala do seu trabalho e do de outras pessoas. Próxima aula: a casa e a moradia.',
  sessoes: [
    sessao('S1', 'As profissões', [
      revisao(5, 'Escreva 5 frases com «kein» e «nicht» sobre o que você não tem e não faz.'),
      palavras(12, [
        ['der Beruf', 'der berúf', 'profissão', 'job'], ['der Arzt / die Ärztin', 'der artst / di értstin', 'médico / médica', 'doctor'], ['der Lehrer / die Lehrerin', 'der lérer / di lérerin', 'professor / professora', 'teacher'], ['der Student / die Studentin', 'der xtudént / di xtudéntin', 'estudante', 'student'],
        ['der Verkäufer / die Verkäuferin', 'der ferkóifer / di ferkóiferin', 'vendedor / vendedora', 'salesperson'], ['der Ingenieur / die Ingenieurin', 'der inzheniör / di inzheniörin', 'engenheiro / engenheira', 'engineer'], ['der Koch / die Köchin', 'der korr / di köçin', 'cozinheiro / cozinheira', 'cook'], ['der Kellner / die Kellnerin', 'der kélner / di kélnerin', 'garçom / garçonete', 'waiter'],
        ['der Polizist / die Polizistin', 'der politsíst / di politsístin', 'policial', 'police officer'], ['der Friseur / die Friseurin', 'der frizör / di frizörin', 'cabeleireiro / cabeleireira', 'hairdresser'], ['der Fahrer / die Fahrerin', 'der fárer / di fárerin', 'motorista', 'driver'], ['der Krankenpfleger / die Krankenschwester', 'der kránken-pflêguer / di kránken-xvéster', 'enfermeiro / enfermeira', 'nurse'],
      ]),
      gramatica(10, 'Dizer a profissão: sem artigo, e o feminino em -in', 'PASSO 1: com «sein» (e «werden»), a profissão vem SEM artigo: «Ich bin Lehrer», e não «Ich bin ein Lehrer». PASSO 2: a forma feminina costuma acrescentar -in ao masculino: Lehrer → Lehrerin, Student → Studentin, Kellner → Kellnerin. PASSO 3: algumas palavras ganham trema: Arzt → Ärztin, Koch → Köchin. PASSO 4: perguntas: «Was sind Sie von Beruf?» (formal), «Was bist du von Beruf?» (informal) ou «Was machst du beruflich?». PASSO 5: outra forma de dizer: «Ich arbeite als Verkäufer» (trabalho como vendedor), também sem artigo. Atenção: «Krankenschwester» (enfermeira) tem um masculino diferente: «Krankenpfleger».', {
        tag: 'Substantivos',
        comparacao: 'o português também diz «sou professor» sem artigo, mas o alemão é mais rígido: nunca «ein» antes da profissão, quando ela não vem com adjetivo. Só o feminino tem forma própria (-in).',
        tabela: [
          { masculino: 'der Lehrer', feminino: 'die Lehrerin', exemplo: 'Ich bin Lehrer. / Sie ist Lehrerin.' }, { masculino: 'der Student', feminino: 'die Studentin', exemplo: 'Er ist Student. / Sie ist Studentin.' }, { masculino: 'der Arzt', feminino: 'die Ärztin', exemplo: 'Mein Vater ist Arzt.' },
          { masculino: 'der Koch', feminino: 'die Köchin', exemplo: 'Sie arbeitet als Köchin.' }, { masculino: 'der Verkäufer', feminino: 'die Verkäuferin', exemplo: 'Ich bin Verkäuferin.' }, { masculino: 'der Krankenpfleger', feminino: 'die Krankenschwester', exemplo: 'Er ist Krankenpfleger.' },
        ],
        erros: [['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'A profissão não leva artigo depois de «sein».'], ['Sie ist Arzt.', 'Sie ist Ärztin.', 'Para uma mulher, a forma é «Ärztin».'], ['Ich bin Studente.', 'Ich bin Student.', 'O masculino é «Student», sem -e.']],
      }),
      producao(3, 'Diga a profissão de 5 pessoas que você conhece: «Mein Vater ist … Meine Freundin ist …»'),
    ]),
    sessao('S2', 'Onde e para quem eu trabalho', [
      revisao(5, 'Escreva o feminino de 6 profissões e uma frase com cada uma.'),
      palavras(8, [
        ['das Büro', 'das bürô', 'escritório', 'office'], ['die Firma', 'di fírma', 'empresa', 'company'], ['die Fabrik', 'di fabrík', 'fábrica', 'factory'], ['das Geschäft', 'das guexéft', 'loja', 'shop'],
        ['die Praxis', 'di prákss-is', 'consultório', 'practice'], ['der Kollege / die Kollegin', 'der kolége / di kolégin', 'colega de trabalho', 'colleague'], ['der Chef / die Chefin', 'der xéf / di xéfin', 'chefe', 'boss'], ['die Arbeitszeit', 'di árbaits-tsait', 'horário de trabalho', 'working hours'],
      ]),
      gramatica(12, 'Onde você trabalha, passo a passo', 'PASSO 1: pergunte «Wo arbeitest du?» ou «Wo arbeiten Sie?». PASSO 2: para dizer o LUGAR, use «in» e as formas que você já conhece da aula 9: palavras «der» e «das»: «im» (im Büro, im Krankenhaus, im Geschäft); palavras «die»: «in der» (in der Schule, in der Fabrik, in der Praxis). PASSO 3: para dizer PARA QUEM ou EM QUE EMPRESA, use «bei»: «Ich arbeite bei Siemens», «bei der Post», «bei der Bank». PASSO 4: o horário: «Ich arbeite von acht bis siebzehn Uhr.» PASSO 5: pergunte «Wie lange arbeitest du?» (quanto tempo por dia) e «Wann arbeitest du?» (a que horas). PASSO 6: duas situações comuns: «Ich bin arbeitslos» (estou desempregado) e «Ich habe frei / Urlaub» (estou de folga / de férias). Em A2 você vai ver por que «im» e «in der»; por enquanto, decore os pares.', {
        tag: 'Preposições',
        tabela: [
          { pergunta: 'Wo arbeitest du?', resposta: 'Ich arbeite im Büro. / in der Schule. / in der Fabrik.', pt: 'No escritório. / Na escola. / Na fábrica.' }, { pergunta: 'Bei wem arbeitest du?', resposta: 'Ich arbeite bei Siemens. / bei der Post.', pt: 'Na Siemens. / Nos Correios.' },
          { pergunta: 'Wann arbeitest du?', resposta: 'Von acht bis siebzehn Uhr.', pt: 'Das oito às dezessete.' }, { pergunta: 'Als was arbeitest du?', resposta: 'Ich arbeite als Verkäufer.', pt: 'Trabalho como vendedor.' }, { pergunta: 'Arbeitest du gern?', resposta: 'Ja, sehr gern. / Nein, nicht so gern.', pt: 'Sim, muito. / Não muito.' },
        ],
        erros: [['Ich arbeite in der Büro.', 'Ich arbeite im Büro.', '«Büro» é «das»: «im».'], ['Ich arbeite in Siemens.', 'Ich arbeite bei Siemens.', 'Empresa: «bei».']],
      }),
      producao(5, 'Diga onde e para quem 5 pessoas trabalham e em que horário você trabalha ou estuda.'),
    ]),
    sessao('S3', 'Diálogo e leitura', [
      revisao(5, 'Escreva um diálogo de 6 falas em que duas pessoas falam da profissão e do local de trabalho.'),
      dialogo(10, 'Was machst du beruflich? / O que você faz profissionalmente?', 'Dois participantes de um curso se conhecem.', [
        ['Lara', 'Hallo, ich bin Lara. Was machst du beruflich?', 'Oi, eu sou a Lara. O que você faz profissionalmente?'], ['Tom', 'Ich bin Ingenieur. Ich arbeite bei Siemens. Und du?', 'Sou engenheiro. Trabalho na Siemens. E você?'], ['Lara', 'Ich bin Ärztin. Ich arbeite im Krankenhaus.', 'Sou médica. Trabalho no hospital.'],
        ['Tom', 'Wie interessant! Wie lange arbeitest du jeden Tag?', 'Que interessante! Quanto tempo você trabalha por dia?'], ['Lara', 'Von sieben bis fünfzehn Uhr. Und du?', 'Das sete às quinze horas. E você?'], ['Tom', 'Ich arbeite von acht bis siebzehn Uhr. Ich habe zwei Kollegen und eine Chefin.', 'Trabalho das oito às dezessete. Tenho dois colegas e uma chefe.'],
        ['Lara', 'Arbeitest du gern?', 'Você gosta de trabalhar?'], ['Tom', 'Ja, sehr gern. Und du?', 'Sim, muito. E você?'], ['Lara', 'Ich auch. Aber am Wochenende habe ich frei.', 'Eu também. Mas no fim de semana estou de folga.'], ['Tom', 'Dann können wir zusammen Kaffee trinken!', 'Então podemos tomar um café juntos!'],
      ]),
      texto(10, 'Die Familie Weber / A família Weber', 'Das ist meine Familie. Mein Vater ist Ingenieur und arbeitet in der Fabrik. Meine Mutter ist Lehrerin und arbeitet in der Schule. Mein Bruder ist Student. Er studiert in Berlin. Meine Schwester ist Verkäuferin und arbeitet im Geschäft. Ich bin Köchin und arbeite im Restaurant. Am Wochenende haben wir alle frei.',
        'Esta é a minha família. Meu pai é engenheiro e trabalha na fábrica. Minha mãe é professora e trabalha na escola. Meu irmão é estudante. Ele estuda em Berlim. Minha irmã é vendedora e trabalha na loja. Eu sou cozinheira e trabalho no restaurante. No fim de semana todos nós estamos de folga.',
        [['Was ist der Vater von Beruf?', 'Ingenieur'], ['Wo arbeitet die Mutter?', 'In der Schule'], ['Was ist die Erzählerin von Beruf?', 'Köchin']]),
      producao(5, 'Apresente em voz alta a sua família e a profissão de cada pessoa.'),
    ]),
    sessao('S4', 'Prática', [
      revisao(5, 'Escreva 4 frases: a sua profissão, onde você trabalha, o seu horário e a profissão de um familiar.'),
      exercicios(20, [
        mc('Como se diz «Sou professor»?', ['Ich bin Lehrer.', 'Ich bin ein Lehrer.', 'Ich habe Lehrer.'], 'Ich bin Lehrer.', 'Sem artigo depois de «sein».'), mc('Feminino de «der Arzt»:', ['die Ärztin', 'die Arztin', 'die Arzte'], 'die Ärztin', 'Trema + -in.'), mc('Feminino de «der Koch»:', ['die Köchin', 'die Kochin', 'die Köche'], 'die Köchin', 'Trema + -in.'),
        lacuna('Ich arbeite ___ Büro. (no)', ['im', 'in der', 'bei'], 'im', '«Büro» é «das».'), lacuna('Meine Mutter arbeitet ___ Schule. (na)', ['in der', 'im', 'bei'], 'in der', '«Schule» é «die».'), lacuna('Er arbeitet ___ Siemens. (na)', ['bei', 'in', 'im'], 'bei', 'Empresa: «bei».'),
        lacuna('Ich arbeite ___ acht ___ siebzehn Uhr.', ['von … bis', 'um … bis', 'ab … zu'], 'von … bis', 'von … bis.'), lacuna('Was ___ Sie von Beruf?', ['sind', 'haben', 'machen'], 'sind', '«Was sind Sie von Beruf?»'), lacuna('Sie ist ___. (professora)', ['Lehrerin', 'Lehrer', 'eine Lehrer'], 'Lehrerin', 'Feminino, sem artigo.'),
        mc('«Ich bin arbeitslos» significa:', ['Estou desempregado', 'Estou de férias', 'Estou muito ocupado'], 'Estou desempregado', 'arbeitslos = sem trabalho.'), ordem('Ordene: «Eu trabalho como vendedor.»', ['Ich', 'arbeite', 'als', 'Verkäufer'], 'Ich arbeite als Verkäufer.', '«als» + profissão, sem artigo.'),
        ordem('Ordene: «Onde você trabalha?»', ['Wo', 'arbeitest', 'du'], 'Wo arbeitest du?', 'Palavra interrogativa + verbo + sujeito.'), ouvir('Was bist du von Beruf?', ['Was bist du von Beruf?', 'Wo arbeitest du?', 'Wie lange arbeitest du?'], 'Was bist du von Beruf?', 'Pergunta pela profissão.'),
        ditado('Ich arbeite bei der Post', '«bei der Post»: empresa.'), livre('Escreva 5 frases: a sua profissão, onde trabalha, o horário, a profissão de um familiar e se gosta de trabalhar.', 'Ich bin Lehrerin. Ich arbeite in der Schule. Ich arbeite von acht bis fünfzehn Uhr. Mein Vater ist Arzt. Ich arbeite gern.'),
      ]),
      producao(5, 'Grave-se: apresente-se profissionalmente (profissão, local, horário) e pergunte o mesmo a outra pessoa.'),
    ]),
  ],
});
