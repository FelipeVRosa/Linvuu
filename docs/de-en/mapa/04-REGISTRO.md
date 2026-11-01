# Registro de decisões e trabalho do alemão (de → en)

[← Início](00-INICIO.md) · [72 aulas](02-MATRIZ.md) · [PR #429](https://github.com/FelipeVRosa/Linvuu/pull/429)

## Entrega do Claude — 31/10/2026

- 288 sessões inglesas e 302 tópicos de gramática ingleses em PR #429 rascunho, com 72 títulos de aula já indexados mas `de.aulas` vazio.
- Resíduos portugueses e falhas em tabelas/exercícios impedem publicação. Nenhum falante nativo revisou o conjunto.

## Primeira passagem ChatGPT — 31/10/2026

- Corrigidas sessões `003`, `006`, `010`, `192` (glosas, opções, gabaritos, tabelas) e metadados de gramática com base no índice EN.
- Auditoria `scripts/auditar-de-en.mjs` e travas de regeneração para proteger versões do Claude.
- Comparação amostral mostrou preservação de campos `ru`, `audio` e `id` nos dias 003 e 192 e na gramática, mas não é validação integral.

## Pesquisa de direitos e mapa editorial — 31/10/2026

- Fontes primárias catalogadas com licença e alertas; LibreLingo-DE-from-EN excluído pelo NC; material terceiro não importado.
- Geradas 72 notas de aula e busca local/Obsidian, com links para arquivos de conteúdo e notas de fonte.
- Conteúdo público e dados comerciais da Linvuu não alterados. O mapa **não libera aulas** automaticamente.

## Lista de progresso real por aula

As 72 notas estão em `aulas/L01.md` … `aulas/L72.md`. Todas com `aprovada: false`; ao revisar, registrar parecer na nota e só depois alterar índice de cobertura. Próxima prioridade editorial: primeiras **duas aulas gratuitas** e contraste de pronúncia para anglófonos.

## Continuação de conteúdo — primeiras sessões gratuitas

- `content/idiomas/de/en/dia-001..004.json`: `titulo` e `aula.titulo` corrigidos para os nomes ingleses **já aprovados como títulos de interface** no `indice.en.json`. `aula.objetivo` já estava em inglês e foi preservado.
- Sem alteração de textos alemães, IDs, links de áudio, preço ou acessos.
- `scripts/testar-mapa-de-en.mjs` adicionado para verificar 72 notas, 288 arquivos, 302 tópicos, 15 fichas de fonte e coerência entre o índice de aulas anunciadas e as notas aprovadas. **Ainda precisa executar em checkout da branch; não é revisão linguística.**
- **A primeira aula não foi marcada aprovada**: faltam auditoria detalhada dos exercícios e revisão independente de inglês e alemão.
