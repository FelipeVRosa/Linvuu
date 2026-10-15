# Alinhamento entre os livros e as aulas (começando pelo inglês)

Versão 1, 15/10/2026. Autoria dos textos: Felipe Nascimento Rosa e Luiza Nascimento Rosa.

## 1. Diagnóstico do inglês

| | Aulas do site | Livro |
|---|---|---|
| Estrutura | 62 aulas × 4 sessões = 248 sessões de 30 min (A1 18, A2 20, B1 24 aulas) | 28 capítulos (A1 a início de B1), 15 a 30 páginas cada |
| Palavras | cerca de 450 por sessão (112 mil no total) | cerca de 2.400 por capítulo (cerca de 70 mil no total) |
| Diálogo | 37 diálogos em 248 sessões | 1 cena em **cada** capítulo |
| Exercícios | 1 bloco por aula (62 no total) | treino em quatro degraus + chave comentada em **cada** capítulo |
| Produção e revisão | 1 linha de 5 min por sessão (ex.: «Soletre o seu nome em inglês») | Retorno, Resumo e «já consigo» |
| Pontos fortes | vocabulário com áudio, pares errado/certo com motivo, ordem de estudo em passos curtos | armadilha do português, «Descubra você mesmo», frases de ouro, erro típico |

Conclusão: as aulas explicam bem a regra, mas treinam pouco e quase não têm situação real. O livro treina e contextualiza, mas não tem sons, saúde, trabalho, escrita nem mídia. Os dois se completam, e hoje não se conversam.

## 2. Mapa aula → capítulo

O mapa completo, com os dois sentidos, está em `content/livros-privado/en/alinhamento.json`.

- **Aulas que cobrem um capítulo do livro:** 51 de 62.
- **Aulas que só existem no site (11):** 1 (sons e alfabeto), 18 e 38 e 62 (revisões e simulados), 37 (saúde), 55 (opinião), 56 (e-mails), 57 (trabalho), 58 (mídia), 59 (meio ambiente), 61 (estratégias).
- **Capítulo do livro sem aula no site (1):** 26 (onde cada palavra fica: dois objetos, lugar, tempo, advérbios).
- **Capítulo com cobertura parcial (1):** 20 (perguntas naturais: perguntas indiretas, question tags, «eu também»). Só a preposição no fim aparece na aula 50.
- **Capítulo que alimenta várias aulas:** 9 (can, must, should, imperativo) alimenta 9, 10, 28 e 29; 16 (passado contínuo, past perfect, used to) alimenta 22, 23, 24 e 40.

## 3. Regra de quem manda em cada conteúdo

1. **Situação e treino vêm do livro:** cena, frases de ouro, treino em quatro degraus, erro típico, retorno e glossário.
2. **Explicação passo a passo, vocabulário com áudio e pares errado/certo vêm do site:** são o que as aulas fazem melhor.
3. **O que só existe de um lado vira conteúdo nos dois:**
   - Os sons, a saúde, o trabalho, a escrita e a mídia (aulas 1, 37, 55 a 59 e 61) ganham capítulo no livro.
   - O capítulo 26 e as perguntas naturais do 20 ganham aulas no site.
4. Nada do que sai das aulas é apagado sem passar por revisão dos autores.

## 4. Arquitetura da aula nova

A aula continua com 4 sessões de 30 min. O capítulo é dividido nelas, usando os tipos de bloco que o site já tem, sem mudar a interface:

| Sessão | Conteúdo | Bloco no site |
|---|---|---|
| 1 | Cena, armadilha do português, «Descubra você mesmo» | `dialogo` + `texto` |
| 2 | «Em 30 segundos» e «Por dentro» (a regra completa) | `gramatica` (já existe) |
| 3 | Frases de ouro e degraus 1 e 2 | `palavras` + `exercicios` |
| 4 | Degraus 3 e 4, erro típico, retorno, resumo e «já consigo» | `exercicios` + `producao` + `revisao` |

Quando um capítulo alimenta várias aulas, cada aula recebe só as seções do seu tema e as demais ficam no livro.

## 5. O que já está feito (inglês)

- Os 28 capítulos extraídos do PDF, conferidos contra o texto original (cerca de 1% de diferença, só em palavras de título).
- Capítulos 1 e 2 abertos ao público; capítulos 3 a 28 em `content/livros-privado/en/` (JSON e Markdown), **fora do bundle público**.
- Lista de áudio dos capítulos 3 a 28: `content/audio/en-livro-privado-gravar.csv` (884 frases, cerca de 40 mil caracteres).
- Mapa aula → capítulo.

## 6. Piloto proposto: aula 2 («to be»)

Aula 2 (sessões 5 a 8) com o capítulo 1 do livro, para os autores aprovarem o padrão antes de refazer as 62:

- Sessão 1: cena do coworking em Toronto e a armadilha do português.
- Sessão 2: a regra do «to be» no formato atual, com os erros típicos do livro.
- Sessão 3: frases de ouro com áudio e degraus 1 e 2.
- Sessão 4: degraus 3 e 4, retorno e «já consigo».

## 7. O que falta construir

1. **Entrega privada dos capítulos 3 a 28:** uma rota da API só para assinantes, como já existe para aulas, e a leitura no site e no app.
2. **Áudio privado dos capítulos:** os MP3 ficam em `server/audio-privado`, nunca em `public/audio`.
3. **Marca d'água e limite por conta** nessa rota, para desencorajar cópia.
4. **Aprovação do piloto**, depois as 62 aulas em lotes por nível: A1, A2 e B1.
5. **Repetir para os outros idiomas**, na ordem de maturidade dos livros: espanhol, alemão, francês, italiano. O russo e o português para estrangeiros dependem dos livros.

## 8. Plano de execução em lotes (v2, 15/10/2026)

Os 28 capítulos em inglês têm a mesma estrutura de 10 seções (cena, armadilha, descubra, em 30 segundos, por dentro, frases de ouro, treino em quatro degraus, erro típico, retorno, resumo). Por isso um gerador único (`scripts/livros/gerar_aulas.py`) monta as sessões a partir do capítulo, e o trabalho humano fica só na revisão.

**Regra de dono.** Cada capítulo alimenta várias aulas (ex.: o 9 alimenta 4). A primeira aula da lista em `alinhamento.json` é a **dona** e recebe as quatro sessões completas, como no piloto. As demais são **reforço**: recebem só retorno, degraus 3 e 4 e erro típico do capítulo, como revisão espaçada, sem repetir a cena nem a regra.

**Lotes, um PR por lote.**
1. A1, aulas 3 a 17.
2. A2, aulas 19 a 36.
3. B1, aulas 39 a 60.
4. Aulas novas: capítulo 26 e perguntas naturais do 20.
5. Capítulos novos no livro: sons, saúde, trabalho, escrita, mídia.

**Verificação automática em cada lote:** `content:check`, build, renderização no celular de todas as sessões do lote e um relatório de exercícios que não puderam ser corrigidos automaticamente (esses viram escrita livre com resposta-modelo).

**Revisão dos autores:** o PR de cada lote lista as aulas alteradas. Nada é apagado, pois as sessões antigas continuam no histórico do Git.

**Depois do inglês:** o mesmo gerador, com um arquivo de mapa por idioma, para espanhol, alemão, francês e italiano.
