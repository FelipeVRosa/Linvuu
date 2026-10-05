# Gramática do russo: diagnóstico, lógica e próximos passos

## 1. O que as aulas 1 a 10 ensinavam (e o que faltava)
| Tópico | Antes da aula 11 | Agora |
|---|---|---|
| Sem artigos (o/a/um/uma) | não dito | aula 11 |
| Três gêneros e como identificar | só tocado nas aulas 4 e 5 | aula 11: terminação, exceções (-ь, papa, palavras estrangeiras) |
| Plural | só os irregulares (aula 6) | aula 11: regra regular e regra ортográfica (г, к, х, ж, ч, ш, щ + и) |
| Adjetivo concorda com o substantivo | exemplos soltos | aula 12: tabela com 5 adjetivos × 4 formas |
| Possessivos e «этот» | mой/моя/моё/мои | aula 12: tabela completa e possessivos invariáveis (его, её, их) |
| Advérbios (palavras que não mudam) | só «очень», «тоже» | aula 13: o que é, como nascem do adjetivo, frequência |
| Dupla negação | não dito | aula 13 («никогда не») |
| Perguntas | só «кто», «что», «где» | aula 13: sim/não pela entonação + 9 palavras interrogativas |
| Mapa dos casos | só nominativo, acusativo, genitivo e preposicional, sem nome | aula 14: os 6 casos, genitivo formado, dativo e instrumental (primeiro contato) |

Ainda falta (próximas aulas): passado (был/была), futuro, segunda conjugação completa, verbos de movimento, aspecto, genitivo plural e numerais, dativo e instrumental completos, comparativo, imperativo, dias da semana e horas.

## 2. A lógica: quem depende de quem
Uma regra de gramática só deve ser cobrada depois dos seus pré-requisitos. A ordem usada:
1. **Substantivo e gênero** → 2. **concordância** (adjetivo, possessivo, «этот», verbo no passado) → 3. **plural** →
4. **casos**, na ordem de necessidade: nominativo → acusativo (objeto) → preposicional (lugar) → genitivo (ausência, dono, origem) → dativo → instrumental →
5. **verbos**: 1ª conjugação → 2ª → passado → aspecto.
Os advérbios não dependem de nada (não mudam), então podem entrar cedo; a negação e as perguntas dependem só do verbo.
Hoje essa ordem é seguida à mão e conferida pelo relatório de auditoria. O passo seguinte é marcar cada bloco com `requer` (por exemplo, `requer: ['genero']`) e fazer o script avisar quando uma aula cobrar algo que ainda não foi ensinado.

## 3. Pedagogia aplicada em todo bloco de gramática
1. **Português primeiro.** A explicação começa pelo conceito em português ("advérbio é a palavra que nunca muda") e só depois usa o termo russo.
2. **Uma ideia por sessão**, no máximo duas tabelas.
3. **Compare com o português** (campo «Em português»): o aluno entende o que é igual e o que é diferente.
4. **Erros comuns** (✗ errado → ✓ certo + motivo): vêm dos erros típicos de falantes de português.
5. **Espiral:** contato (aulas 4 a 10) → sistematização (aulas 11 a 14) → consulta (aba Gramática) → prova no fim da aula.
6. **Tabela só quando há padrão.** Exceções vêm em linha própria.
7. **Nada de regra sem uso:** cada tópico tem exemplos, exercício e uma tarefa de fala.

## 4. A aba Gramática (primeira versão, já no ar)
- Endereço: `/gramatica/ru`. Link no cabeçalho e no rodapé.
- Gerada automaticamente dos blocos de gramática das aulas (`npm run aulas`): nada é escrito duas vezes.
- Hoje: 28 tópicos em 9 categorias (Frase básica, Substantivos, Adjetivos e possessivos, Pronomes, Verbos, Advérbios, Perguntas, Números, Casos). Cada tópico abre com tabela, comparação, exemplos e erros comuns, e leva à sessão em que é praticado.
- Para um tópico novo aparecer na aba: escreva `gramatica(min, titulo, explicacao, { tag: 'Casos', ... })` na aula.
- Falta: busca por palavra, índice por nível e a mesma aba para o alemão.

## 5. O que já foi feito das aulas sugeridas (aulas 15 a 19) e o que vem depois
Feito: 15 dias da semana e horas; 16 meu dia (verbos em -ся, идти/ехать, куда?); 17 passado; 18 comida e restaurante (мне нужно, можно, нельзя); 19 revisão e prova final do nível inicial.
Depois: futuro e aspecto do verbo; genitivo plural; dativo e instrumental completos; comparativo; imperativo; compras e roupas; viagem e transporte.

### Plano original (para referência)
- **15. Dias da semana e horas** (в + acusativo: «в понедельник»; horas inteiras).
- **16. Meu dia** (rotina, verbos com -ся, advérbios de tempo).
- **17 e 18. Passado** (был/была/было/были; verbos no passado; contar o que aconteceu).
- **19. Comida e restaurante** (acusativo, «мне нужно», pedidos).
- **20. Revisão e prova final do nível inicial.**
Com 20 aulas o curso soma 40 horas de conteúdo. Isso é uma base de iniciante, não um nível completo.

## 6. Áudios RED KALINKA
Os áudios «RED KALINKA» (A1, A2 e B1) que o Felipe enviou **não entram no site nem no repositório**, por decisão dele. O Felipe é o autor do livro e informou que não há risco de direitos autorais para o conteúdo; a decisão de não publicar os áudios vale como regra do projeto. O áudio do site será gravado à parte (lista em `content/audio/ru-gravar.csv`).
