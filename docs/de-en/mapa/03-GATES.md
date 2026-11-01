# Portas editoriais para publicar o alemão explicado em inglês

[← Início](00-INICIO.md) · [Matriz](02-MATRIZ.md)

## G0 — Integridade e direitos

- [ ] Referências licenciadas por ativo/versão e atribuições em arquivo público quando conteúdo externo for efetivamente usado.
- [ ] Sem recursos NC nem materiais de terceiros indeterminados no produto comercial.
- [ ] Identidade Linvuu, níveis e escopo comercial permanecem como originalmente aprovados.

## G1 — Tradução integral (aula por aula)

- [ ] Quatro arquivos `dia-NNN.json` EN com `explicacao=en`, títulos e objetivos em inglês.
- [ ] Nenhuma glosa `pt`, instrução, opção, gabarito, feedback ou célula de tabela em português.
- [ ] Todos os exemplos alemães, IDs e campos `audio` coincidem com a fonte PT; nenhuma fala foi traduzida por engano.
- [ ] Comparações usam inglês, não português (V2, casos, sons, artigos, Perfekt, falsos amigos).

## G2 — Qualidade pedagógica

- [ ] A1→A2→B1/B2 em ordem, sem pré-requisito oculto nem falsa promessa de certificação.
- [ ] 4 sessões por aula; exercícios conferidos, gabarito válido, distratores e pronúncia natural, nível CEFR revisado.
- [ ] Gramática suficientemente clara, mas sem academicismo desnecessário; separar tabela de memorização, explicação de compreensão e exercício de prática.
- [ ] Revisão humana competente em inglês e alemão; registrar responsável, data, parecer e divergências.

## G3 — Testes e publicação

- [ ] `node scripts/auditar-de-en.mjs --limit=100` sem achados bloqueadores (auditor pode ter falsos positivos; revisão manual é obrigatória).
- [ ] `node scripts/conteudo.mjs --check` e testes de carregamento de idiomas.
- [ ] `tsc` e testes de SEO/sitemap em branch, com resultados documentados.
- [ ] Só acrescentar uma aula a `content/indice.en.json:de.aulas` depois de aprovação das quatro sessões.
- [ ] Verificar desktop/mobile e aviso `In production` (feito em PR separado do Claude).
- [ ] Merge/deploy somente após aceitação editorial e aprovação do titular.

## Comando de busca editorial

`node scripts/pesquisar-mapa-de-en.mjs --json Dativ` procura notas de curso e gramática; em Obsidian, abra `00-INICIO.md` e use **Graph view** / pesquisa global.
