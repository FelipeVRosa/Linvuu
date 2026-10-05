# Gramática do russo: qualidade, ordem do curso e próximos passos

## 1. Ponderação sobre a qualidade das aulas (24 aulas, 96 sessões, 48 h)

Números reais, calculados dos arquivos: 412 palavras únicas, 52 blocos de gramática, 22 diálogos, 19 textos com perguntas, 321 exercícios (121 de múltipla escolha, 100 de lacuna, 47 de áudio, 32 de ordenar frase, 21 de escrita livre) e 96 tarefas de fala ou escrita.

| Critério | Nota | Por quê |
|---|---|---|
| Estrutura da sessão | Boa | Revisão, conteúdo novo e produção, sempre em 30 min; minutos conferidos por script |
| Explicação em português | Boa | O conceito vem em português antes do termo russo; comparação com o português e erros comuns de falantes de português |
| Cobertura da gramática do A1 | Boa (agora) | Gênero, plural, adjetivos, conjugações, em/на, aspecto, futuro, passado, movimento, casos (mapa) |
| Ordem pedagógica | Boa | Cada regra vem depois dos seus pré-requisitos (seção 3) |
| Correção do russo | Média até haver revisão | Conferido por mim, sem revisão de falante nativo; é o item que mais pesa antes de divulgar |
| Acento tônico | Fraca | O cirílico das aulas **não traz o acento** (só a transliteração). Em russo o acento muda a vogal e o sentido; livros de A1 marcam o acento |
| Áudio | Provisória | Voz do navegador; a gravação nativa ainda não existe (693 frases na lista) |
| Exercícios | Média | Predomina o reconhecimento (escolha e lacuna); poucos exercícios de produção que o site corrige sozinho |
| Revisão espaçada | Fraca | Há «revisão» no início de cada sessão, mas o site não agenda o que revisar |
| Textos e diálogos | Média | Corretos e curtos, mas simples; falta leitura autêntica graduada |
| Cobertura do A2 | Parcial | Ainda faltam genitivo plural, dativo e instrumental completos, comparativo, imperativo |

## 2. A ordem do curso, com a gramática no lugar certo
| Aulas | Tema | Gramática que entra |
|---|---|---|
| 1 a 3 | Sons, alfabeto, cumprimentos | Sem «é» no presente, ты × вы, «зовут» |
| 4 a 6 | Objetos, amigos, família | Primeiro contato com gênero, possessivos, «У меня есть», plurais irregulares |
| 7 a 10 | Quem sou, onde moro, o que faço, café e mercado | «не», «нет» + genitivo, в/на (primeiro contato), presente, acusativo, números e preço |
| **11 a 14** | **Gramática: substantivo, adjetivo, advérbio, casos** | Gênero (3 tabelas: letra, -ь, sufixos), plural, adjetivos (4 tipos), possessivos, advérbios, perguntas, mapa dos 6 casos |
| **15** | **As duas conjugações** | 1ª e 2ª, como reconhecer, mudança da raiz em «я», irregulares (пить, есть, мочь, спать) |
| **16** | **в e на** | dentro × em cima × espaço aberto × evento, verbos de posição, parado × movimento, на + idiomas |
| 17 e 18 | Dias da semana e horas; meu dia | в + dia, horas, verbos em -ся, идти/ехать e куда? |
| 19 | O passado | был/была/было/были, -л/-ла/-ло/-ли |
| **20** | **Aspecto do verbo** | Imperfectivo × perfectivo (eu lia × eu li), palavras-pista, pares, prefixos |
| **21** | **O futuro** | буду + infinitivo; futuro perfectivo; como escolher |
| **22** | **Verbos de movimento** | идти/ходить, ехать/ездить, лететь, бежать, prefixos при-/у-/в-/вы-, пойти/поехать |
| 23 | Comida e restaurante | Acusativo ao pedir, мне нужно/нужен/нужна/нужны, можно, нельзя |
| 24 | Revisão e prova final | Mapa de 23 pontos, 10 erros comuns, prova de 19 exercícios |

Em negrito, o que esta rodada acrescentou ou reforçou. As aulas 15 e 16 foram inseridas **antes** do «meu dia» e do passado porque essas aulas já usam conjugação, «в» e «на». A aula 20 vem logo **depois** do passado, a 21 logo depois do aspecto, e a 22 depois do futuro, porque «пойти» e «поехать» são perfectivos.

## 3. A lógica: quem depende de quem
1. Substantivo e gênero → 2. concordância (adjetivo, possessivo, «этот», passado) → 3. plural → 4. casos na ordem de necessidade (nominativo, acusativo, preposicional, genitivo, dativo, instrumental) → 5. verbos: 1ª e 2ª conjugação → passado → aspecto → futuro → movimento.
Advérbios e perguntas não dependem de nada. «в» e «на» dependem de preposicional e acusativo. O futuro dos perfectivos depende da conjugação e do aspecto.
Passo seguinte: marcar cada bloco com `requer` e fazer o script avisar quando uma aula cobrar algo que ainda não foi ensinado.

## 4. Pedagogia aplicada em todo bloco de gramática
1. **Português primeiro** (conceito antes do termo russo).
2. **Uma ideia por sessão**, no máximo duas ou três tabelas.
3. **Compare com o português** (caixa «Em português»).
4. **Erros comuns** (✗ errado → ✓ certo + motivo), vindos dos tropeços de falantes de português.
5. **Espiral:** contato (aulas 4 a 10) → sistematização (11 a 22) → consulta (aba Gramática) → prova (aula 24).
6. **Tabela só onde há padrão**; exceção em linha própria.
7. **Nada de regra sem uso:** exemplos, exercícios e uma tarefa de fala em cada tópico.

## 5. A aba Gramática (no ar)
`/gramatica/ru`: 52 tópicos em 14 categorias, gerados dos blocos de gramática das aulas (nada é escrito duas vezes). Cada tópico abre com explicação, tabelas, comparação, exemplos e erros comuns, e leva à sessão em que é praticado. Para um tópico novo aparecer: `gramatica(min, titulo, explicacao, { tag: '…' })` na aula. Falta: busca por palavra e a mesma aba para o alemão.

## 6. Próximos passos, por prioridade
1. **Acento tônico** nas palavras do vocabulário e nos exemplos (ex.: мама́ → ма́ма). É a melhoria de qualidade com maior efeito.
2. **Revisão por falante nativo** das 24 aulas.
3. **Áudio gravado** (693 frases) e, só então, anúncios.
4. **Exercícios de produção corrigidos pelo site** (a correção com IA do `server.ts`).
5. **Revisão espaçada** automática (cartões que voltam).
6. **A2:** genitivo plural e numerais, dativo e instrumental completos, comparativo, imperativo, condicional, particípio.
7. Alemão: converter as 16 aulas para o formato compacto e criar a aba de gramática dele.

## 7. Áudios RED KALINKA
Os áudios «RED KALINKA» (A1, A2 e B1) enviados pelo Felipe **não entram no site nem no repositório**, por decisão dele. O livro de casos («Russian cases: tables and exercises, A1–A2») foi lido para alinhar as tabelas, que são as tabelas padrão dos casos; os textos e exemplos das aulas são escritos à parte.
