# L01 — revisão de alemão ensinado em inglês: evidências de 31/10/2026

**Estado real:** quatro sessões corrigidas e auditoria estrutural remota aprovada; revisão editorial integral, testes de build/CI e prévia visual ainda não certificados. **Não marcar como aprovada.**

## Revisão e commits

| Sessão | Foco corrigido | Evidência |
|---|---|---|
| 001 | Introdução, analogias fonéticas inglês–alemão, vogais, glosas, T e -e final | `0b369e6`, `7cc19a9` |
| 002 | Contraste V (/f/ ou /v/) e W (/v/), tradução das glosas e distratores, s e g contextuais | `9f58dc4`, `417b8eb`, `e848afb` |
| 003 | Regra inadequadamente absoluta para duração vocálica, tabelas de combinações, explicação [ç]/[x], respostas MC e resíduo `suave` | `1802458`, `950cb1e` |
| 004 | Diálogo e tabela de saudações; alternativas e enunciados que permaneciam em português | `319007c` |

## Auditoria executada por leitura remota do GitHub

As sessões EN foram comparadas às sessões originais PT da **mesma branch**, com percurso recursivo dos campos.

| Critério | Sessões 001–004 |
|---|---|
| JSON analisável | 4/4 |
| Quantidades de IDs de exercícios | 9, 9, 11, 18 |
| IDs idênticos à origem | 4/4 |
| Sequência dos valores de áudio idêntica à origem | 4/4 |
| Sequência das frases `ru` idêntica à origem | 4/4 |
| Gabaritos de múltipla escolha e lacunas contidos nas opções | Aprovados nos 4 arquivos |
| Exercícios de ordenação | Precisam de validação semântica específica: o gabarito é frase completa, **não** uma das opções (comportamento esperado) |
| Triagem de termos portugueses | Um rótulo `ch (suave)` na sessão 003 foi corrigido no commit `950cb1e`; triagem não garante ausência completa de resíduos |

**Limites:** não houve execução do Node, `tsc`, testes SEO, testes de acessibilidade, CI ou renderização real em navegador; nenhuma conferência humana/nativa final. As regras de duração de vogal precisam de revisão especializada adicional, e o corpus de exercícios exige validação didática/semântica completa.

## Testes obrigatórios antes de sinalizar L01 como aprovada

- [ ] Executar `node scripts/testar-mapa-de-en.mjs` e `node scripts/auditar-de-en.mjs --json` num checkout do PR.
- [ ] Comparar todos os gabaritos e distratores com fonética, gramática e frase-alvo.
- [ ] Revisar cada analogia de pronúncia, incluindo dialetos e IPA.
- [ ] Testar os quatro JSON no renderizador EN com som, mobile/desktop e progresso.
- [ ] Confirmar que produção PT, IDs, áudio e índice não foram impactados.
- [ ] Revisar material editorialmente e obter aprovação linguística responsável.
- [ ] Somente após todos os gates atualizar o estado da L01, índice de cobertura e preparar merge.

[Mapa do curso](00-INICIO.md) · [Nota da Aula 1](aulas/L01.md) · [PR #429](https://github.com/FelipeVRosa/Linvuu/pull/429).
