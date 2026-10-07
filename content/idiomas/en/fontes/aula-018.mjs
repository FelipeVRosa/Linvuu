import { aula, sessao, revisao, producao, palavras, dialogo, texto, gramatica, exercicios, mc, lacuna, ordem, ouvir, ditado, livre } from '../../../../scripts/dsl-aula.mjs';

export default aula({
  idioma: 'en', numero: 18, titulo: 'Revisão e simulado do A1', nivel: 'a1',
  objetivo: 'Rever todo o A1 em um mapa, treinar leitura, escuta, escrita e fala, corrigir os erros mais comuns e fazer um simulado original.',
  nota: 'Você fechou o A1 do inglês. Repita o simulado até acertar quase tudo. Para um certificado oficial, treine também com provas reais e, se possível, com um professor nativo.',
  sessoes: [
    sessao('S1', 'O mapa do A1', [
      revisao(5, 'Leia em voz alta 5 frases das aulas 1 a 17 que você acha difíceis.'),
      gramatica(15, 'O A1 inteiro em uma tabela', 'Esta tabela resume as aulas 1 a 17. Releia uma linha por vez e diga um exemplo seu em voz alta. Se algo parecer estranho, volte à aula indicada ou abra o tópico na aba Gramática.', {
        tag: 'Revisão',
        tabela: [
          { tema: 'Sons e alfabeto', regra: 'o inglês escreve de um jeito e fala de outro: ouça e repita; soletre nomes com o nome das letras.', aula: '1' },
          { tema: 'To be', regra: '«I am, you are, he/she/it is, we/you/they are»; negativa com «not»; pergunta invertida: «Are you from Brazil?»', aula: '2' },
          { tema: 'Apresentações, países e números', regra: '«I\'m from Brazil.», «I\'m 25.», números de 0 a 100.', aula: '3' },
          { tema: 'Presente simples', regra: 'he/she/it + -s; negativa com «don\'t/doesn\'t»; pergunta com «do/does»; advérbios de frequência.', aula: '4, 12' },
          { tema: 'Artigos, plural e this/that', regra: 'a/an/the; plural com -s/-es e irregulares (man → men); this/that/these/those.', aula: '5' },
          { tema: 'There is / there are e preposições de lugar', regra: '«There is a sofa.», «There are two beds.»; in/on/at/under/next to/between/behind.', aula: '6' },
          { tema: 'Posse e have/has', regra: 'my/your/his/her/our/their; «Ana\'s car»; «She has a dog.», «Does he have a car?»', aula: '7' },
          { tema: 'Comida, some/any e pedidos', regra: 'contáveis × incontáveis; some (afirmativa), any (negativa/pergunta); «I\'d like…»', aula: '8' },
          { tema: 'Can e can\'t', regra: '«I can swim.», «Can you help me?», sem -s e sem «to».', aula: '9' },
          { tema: 'Imperativo e direções', regra: '«Open the door.», «Don\'t run.», «Turn left.», «Let\'s go.»', aula: '10' },
          { tema: 'Horas, dias, meses e preposições de tempo', regra: '«It\'s quarter past three.»; at (hora), on (dia), in (mês, parte do dia).', aula: '11' },
          { tema: 'Gostos e pronomes de objeto', regra: 'like/love/hate + -ing; I → me, he → him, she → her, they → them.', aula: '13' },
          { tema: 'Aparência e personalidade', regra: '«She is tall.», «He has blue eyes.», «What does she look like?»', aula: '14' },
          { tema: 'Compras e números grandes', regra: '«a pair of pants», «How much are these shoes?», «too expensive».', aula: '15' },
          { tema: 'Presente contínuo e going to', regra: '«She is eating now.», «I am going to study tonight.», clima com «it».', aula: '16, 17' },
        ],
      }),
      producao(10, 'Fale 3 minutos em inglês: apresente-se, descreva a sua casa e a sua rotina, diga o que gosta e o que vai fazer no fim de semana.'),
    ]),
    sessao('S2', 'Leitura e escuta (formato A1, original)', [
      revisao(5, 'Releia o texto e o diálogo abaixo em voz alta antes de começar.'),
      texto(10, 'A new city / Uma cidade nova', 'My name is Carlos. I am 30 years old and I am from Brazil. I live in a small apartment in New York. There are two rooms and a kitchen. I work in a restaurant every day from nine to five. I usually have lunch at noon. At the weekend, I like walking in the park and cooking for my friends. Today it is sunny, so I am going to play football with them. I love my new city, but I miss my family.',
        'Meu nome é Carlos. Tenho 30 anos e sou do Brasil. Moro num apartamento pequeno em Nova York. Há dois cômodos e uma cozinha. Trabalho num restaurante todo dia, das nove às cinco. Geralmente almoço ao meio-dia. No fim de semana, gosto de caminhar no parque e cozinhar para os amigos. Hoje está ensolarado, então vou jogar futebol com eles. Adoro a minha cidade nova, mas sinto saudade da minha família.',
        [['Where is Carlos from?', 'From Brazil.'], ['Where does he work?', 'In a restaurant.'], ['What time does he usually have lunch?', 'At noon.'], ['What is he going to do today?', 'He is going to play football with his friends.']]),
      dialogo(8, 'Meeting a new neighbor / Conhecendo um vizinho', 'Carlos conversa com a vizinha, Julia.', [
        ['Carlos', 'Hello! I\'m Carlos. I live in the apartment next to yours.', 'Olá! Sou o Carlos. Moro no apartamento ao lado do seu.'], ['Julia', 'Nice to meet you, Carlos. I\'m Julia. Where are you from?', 'Prazer, Carlos. Sou a Julia. De onde você é?'], ['Carlos', 'I\'m from Brazil. And you?', 'Sou do Brasil. E você?'], ['Julia', 'I\'m from Chicago. Do you work near here?', 'Sou de Chicago. Você trabalha por aqui?'], ['Carlos', 'Yes, I work in a restaurant on Oak Street.', 'Sim, trabalho num restaurante na Rua Oak.'], ['Julia', 'Great! Can you cook Brazilian food?', 'Ótimo! Você sabe cozinhar comida brasileira?'], ['Carlos', 'Yes, I can. Are you free on Saturday? I\'m going to cook for my friends.', 'Sei. Você está livre no sábado? Vou cozinhar para os meus amigos.'],
      ]),
      producao(7, 'Responda em voz alta: quem é Carlos, o que ele faz e do que gosta. Depois diga o que você faria no lugar dele num fim de semana.'),
    ]),
    sessao('S3', 'Os erros mais comuns do A1 e a escrita', [
      revisao(5, 'Escreva 3 erros que você ainda comete no A1 e a forma certa.'),
      gramatica(15, 'Os 15 erros mais comuns do A1', 'Leia cada par em voz alta: primeiro o errado, depois o certo.', {
        tag: 'Revisão',
        erros: [
          ['I have 25 years.', 'I am 25.', 'Idade: to be.'], ['She have a dog.', 'She has a dog.', 'he/she/it → has.'], ['He don\'t like coffee.', 'He doesn\'t like coffee.', 'he/she/it → doesn\'t.'], ['Do you can swim?', 'Can you swim?', '«can» não usa «do».'],
          ['Has a sofa in the room.', 'There is a sofa in the room.', 'Existência: there is.'], ['I am in home.', 'I am at home.', 'at home é fixo.'], ['A water, please.', 'Some water, please.', 'water é incontável.'], ['I don\'t have some money.', 'I don\'t have any money.', 'Negativa: any.'],
          ['She eating now.', 'She is eating now.', 'Contínuo precisa de «to be».'], ['I like of music.', 'I like music.', 'Sem «of».'], ['I go to the bed at ten.', 'I go to bed at ten.', 'Sem artigo.'], ['Where stays the bank?', 'Where is the bank?', 'Use to be.'],
          ['See you in Monday.', 'See you on Monday.', 'Dia: on.'], ['It\'s expensive too much.', 'It\'s too expensive.', 'too antes.'], ['Is cold today.', 'It is cold today.', 'Clima: it.'],
        ],
      }),
      producao(10, 'Escreva um e-mail curto (cerca de 60 palavras) para um amigo estrangeiro: apresente-se, descreva a sua casa e a sua rotina, e convide-o para o fim de semana. Depois leia-o em voz alta.'),
    ]),
    sessao('S4', 'Simulado do A1', [
      revisao(5, 'Releia o mapa e escolha os 3 pontos em que você ainda erra.'),
      exercicios(20, [
        ouvir('She is not happy today', ['She is not happy today', 'She is happy today', 'He is not happy today'], 'She is not happy today', 'Escuta: negativa de to be.'), ouvir('I\'d like a coffee, please', ['I\'d like a coffee, please', 'I like coffee, please', 'I\'d like a tea, please'], 'I\'d like a coffee, please', 'Escuta: pedido educado.'), ditado('He doesn\'t work on Sundays', 'Escreva: he doesn\'t work on Sundays.'), ditado('There are two beds in the bedroom', 'Escreva: there are two beds in the bedroom.'),
        mc('Leia: «She has long dark hair and blue eyes.» O que a frase descreve?', ['a aparência', 'a rotina', 'o clima'], 'a aparência', 'Leitura: have para cabelo e olhos.'), mc('Qual frase está correta?', ['Does she have a car?', 'Has she a car?', 'Do she have a car?'], 'Does she have a car?', 'Does + sujeito + have.'), mc('Qual frase usa o presente contínuo?', ['They are watching TV.', 'They watch TV every day.', 'They watched TV.'], 'They are watching TV.', 'be + -ing.'), mc('Como se diz «em junho»?', ['in June', 'on June', 'at June'], 'in June', 'Mês: in.'),
        lacuna('How much ___ these shoes?', ['are', 'is', 'do'], 'are', 'Plural: are.'), lacuna('She ___ up at six every day.', ['gets', 'get', 'getting'], 'gets', 'she → -s.'), lacuna('I ___ any milk. (não tenho)', ['don\'t have', 'doesn\'t have', 'haven\'t'], 'don\'t have', 'Negativa com do.'), lacuna('The key is ___ the table.', ['on', 'in', 'at'], 'on', 'Superfície: on.'),
        ordem('Ordene: «Can you help me, please?»', ['Can', 'you', 'help', 'me', 'please'], 'Can you help me, please?', 'Can + sujeito + verbo.'), ordem('Ordene: «She is going to travel next week.»', ['She', 'is', 'going', 'to', 'travel', 'next', 'week'], 'She is going to travel next week.', 'be + going to + verbo.'),
        livre('Escreva 5 frases sobre você: nome e origem, rotina, o que gosta, a sua casa e um plano.', 'My name is Ana. I am from Brazil. I get up at six every day. I like cooking. I am going to travel next week.'),
      ]),
      producao(5, 'Conte em 1 minuto o que você já sabe dizer em inglês e o que ainda quer aprender.'),
    ]),
  ],
});
