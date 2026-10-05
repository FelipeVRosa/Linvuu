# Revisão objetiva: aulas 1 a 6 (ru)

Gerado por `node scripts/auditar-aulas.mjs ru --md`. Números calculados direto nos arquivos de `content/idiomas/ru/aulas/`.

## Resumo por aula
| Aula | Título | Letras novas | Palavras únicas | Falas | Exercícios | Min declarados | Min somando blocos |
|---|---|---|---|---|---|---|---|
| 1 | Ouvir antes de falar | 10 | 17 | 6 | 12 | 120 | 116 |
| 2 | Olá, mundo! | 13 | 15 | 9 | 10 | 120 | 120 |
| 3 | Eu e você | 8 | 13 | 4 | 10 | 120 | 120 |
| 4 | Ler é fácil | 0 | 20 | 6 | 12 | 120 | 120 |
| 5 | Este é meu amigo | 0 | 20 | 6 | 12 | 120 | 120 |
| 6 | Minha família | 0 | 19 | 7 | 12 | 120 | 115 |
| **Total** | | 31 | 104 | 38 | 68 | 720 | 711 |

## 1. O alfabeto não fecha
O russo tem 33 letras. As aulas ensinam **31**. **Faltam: У, Х.**
A aula 3 promete "fechar o alfabeto cirílico", mas só fecha com У e Х.

## 2. Palavras usam letras que ainda não foram ensinadas
Para cada sessão: palavras (de palavras, diálogos, textos e exemplos de letras) com alguma letra que o aluno ainda não viu.
| Aula | Sessão | Palavras com letra não ensinada | Exemplos (letras que faltam) |
|---|---|---|---|
| 1 | S1 | 3 de 7 | он (Н), она (Н), это (Э) |
| 1 | S2 | 7 de 11 | за (З), что (Ч), спасибо (ПИБ), дела (ДЛ), хорошо (ХШ), нормально (ЛЬ) |
| 1 | S3 | 4 de 6 | это (Э), Спасибо (ПИБ), за (З), что (Ч) |
| 1 | S4 | 0 de 0 | — |
| 2 | S1 | 4 de 7 | жизнь (Ь), знать (Ь), имя (Я), чай (Ч) |
| 2 | S2 | 7 de 14 | Здравствуйте (У), утро (У), Добрый (Ы), день (Ь), свидания (Я), Пожалуйста (У) |
| 2 | S3 | 9 de 10 | Катя (Я), Хорошо (Х), ты (Ы), Здравствуйте (У), свидания (Я), Утром (У) |
| 2 | S4 | 0 de 0 | — |
| 3 | S1 | 0 de 14 | — |
| 3 | S2 | 1 de 5 | зовут (У) |
| 3 | S3 | 4 de 5 | зовут (У), входит (Х), Здравствуйте (У), Студентка (У) |
| 3 | S4 | 0 de 0 | — |
| 4 | S1 | 2 de 12 | стул (У), ручка (У) |
| 4 | S2 | 0 de 8 | — |
| 4 | S3 | 2 de 7 | ручка (У), стул (У) |
| 4 | S4 | 0 de 0 | — |
| 5 | S1 | 3 de 14 | друг (У), подруга (У), мужчина (У) |
| 5 | S2 | 2 de 6 | хороший (Х), хорошая (Х) |
| 5 | S3 | 5 de 7 | друг (У), зовут (У), хороший (Х), подруга (У), студентка (У) |
| 5 | S4 | 0 de 0 | — |
| 6 | S1 | 3 de 12 | муж (У), бабушка (У), дедушка (У) |
| 6 | S2 | 2 de 8 | друзья (У), мужья (У) |
| 6 | S3 | 9 de 8 | Хорошо (Х), у (У), зовут (У), маму (У), папу (У), бабушка (У) |
| 6 | S4 | 0 de 0 | — |

## 3. Números prometidos x reais
| Aula | Promessa no objetivo | Real |
|---|---|---|
| 1 | 12 sons/letras | 10 |
| 1 | 22 palavras | 17 |
| 2 | 13 sons/letras | 13 |
| 4 | 25 palavras | 20 |

## 4. Duplicatas
- Aula 1 S1: «мама» aparece 2×

## 5. Minutos
- Aula 1 S1: blocos somam 26 min, mas a sessão declara 30
- Aula 1: blocos somam 116 min, a aula declara 120
- Aula 6 S4: blocos somam 25 min, mas a sessão declara 30
- Aula 6: blocos somam 115 min, a aula declara 120

## 6. Horas reais do ciclo (calculadas)
- 6 aulas declaram 720 min = **12.0 h** (média de 120 min por aula).
- Um ciclo de 10 aulas nesse formato teria **20.0 h**, não 80 h.
- A 40 min por dia, 6 aulas levam 18 dias; 10 aulas levam 30 dias.
- Para o ciclo ter 80 h, cada aula teria de ter 8 h (16 sessões de 30 min), ou o ciclo teria de ter 40 aulas.

## 7. Achados de leitura (não automáticos)
- Aula 4 testa concordância de gênero (новый/новая/новое, старая nos exercícios e07, e09 e e11) e usa мой/моя/моё no texto, mas o gênero só é explicado na aula 5, sessão 1.
- Transliteração de «что» e «не за что» como "chto" e "nié za chto": em russo «что» soa "shto". A grafia engana o aluno.
- Aula 1, S3: o diálogo soa pouco natural em russo («Она мама» repete «Это мама»; «А, вот кто!» e «Нет, не за что» não são naturais). Vale revisão de um falante nativo.
- Aulas 1 e 4: «Nunca use есть» é forte demais. Em contexto formal e em definições «есть» aparece. Sugestão: "no dia a dia, não use".
- Aula 3, S3: o texto «На уроке» usa vocabulário não ensinado (преподаватель, входит, класс, студентка, говорит, отвечает). Com tradução funciona, mas pesa para a aula 3.
- Aula 5, S1: «мои друзья» mostra plural irregular (друг → друзья) sem aviso.
- Aula 5, S2 tem 6 palavras e 4 exercícios; as outras sessões têm de 10 a 20 itens. A carga fica desigual.
- Aula 1, S1: a introdução promete 8 palavras; a lista tem 7 diferentes (мама repetida).
- Aula 6: o bloco de palavras se chama "vocabulario" (nas aulas 1 a 5 é "palavras") e as tabelas de gramática usam colunas diferentes (pronome/forma, singular/plural). Falta um contrato único de esquema.
- Aula 6: «родители» está nas duas listas de palavras (S1 e S2).
- Aula 6, exercício e07: «ребята» é um distrator arriscado, porque no russo falado também significa "crianças/pessoal". Troque por uma forma que não exista.
- Aula 6, exercício e11 explica «в + preposicional», que não foi ensinado em nenhuma aula anterior.
- Aula 6: ensina «У меня есть» mas não «У меня нет» (não tenho). O aluno só consegue afirmar; a negação precisa vir logo depois.
- Aula 6: as formas «него, неё, них» ganham um «н-» depois de «у». A tabela mostra, mas não explica.
- Aula 6: «Não existe verbo ter» é uma simplificação: «иметь» existe, só é raro na fala.
