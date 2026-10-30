# Estrutura internacional (inglês e espanhol)

O site é internacional. Duas coisas são separadas: a **língua do site** (interface, vem do endereço: `/`, `/en`, `/es`) e a **língua de explicação** do curso (quem fala inglês estudando russo lê as explicações em inglês). O curso é sempre o mesmo; muda só a explicação.

## Onde cada coisa fica
| O quê | Língua de origem | Tradução para `en` / `es` |
|---|---|---|
| Sessões | `content/idiomas/<curso>/dia-NNN.json` | `content/idiomas/<curso>/<l>/dia-NNN.json` (arquivo completo, com `"explicacao": "<l>"`) |
| Gramática | `content/gramatica/<curso>.json` | `content/gramatica/<curso>.<l>.json` |
| Títulos das aulas | `content/indice.json` | `content/indice.<l>.json` (`aulas` só lista a aula com as 4 sessões traduzidas) |
| Interface | `src/i18n/pt-BR.ts` | `src/i18n/en.ts`, `src/i18n/es.ts` |

Origem: todos os cursos nasceram em português, exceto `br` (Português para estrangeiros), que nasceu em inglês.

## Regras de tradução
1. Não é tradução palavra por palavra. O que no português compara sons com o português («como o "a" de "casa"») é reescrito com referências do inglês («as in "father"»), e o mesmo vale para o espanhol.
2. O idioma estudado (russo, alemão…) não muda: palavras, frases, acentos, áudio e `id` dos exercícios ficam iguais.
3. Uma aula só entra em `indice.<l>.json` quando as 4 sessões estão traduzidas e revisadas.
4. Nada de traduzir pago sem revisão de falante nativo antes de divulgar; o rótulo fica "em produção" até lá.

## Estado
`node scripts/cobertura-idiomas.mjs --escrever` regrava `docs/COBERTURA-IDIOMAS.md`.

## Ordem de trabalho
1. Russo para inglês: sessões 1–8 (as grátis), gramática, depois as demais aulas.
2. Alemão para inglês.
3. Os mesmos para espanhol.
