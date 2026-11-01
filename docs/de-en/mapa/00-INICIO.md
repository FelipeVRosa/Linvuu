---
projeto: Linvuu
curso: de
explicacao: en
formato: Obsidian-compatible Markdown
status: editorial-map-draft
---
# Linvuu · Mapa pesquisável do alemão explicado em inglês

> Este diretório é um **mapa editorial**, não conteúdo publicado. Fonte do trabalho: [PR #429](https://github.com/FelipeVRosa/Linvuu/pull/429), em rascunho. Sem merge nem deploy.

Abra a pasta raiz do repositório como cofre (vault) no Obsidian e visite esta nota. Os links Markdown funcionam também no GitHub. Busque por `de-en`, palavra, nível, licença ou número da aula no Obsidian. Para procurar no terminal sem Obsidian: `node scripts/pesquisar-mapa-de-en.mjs Perfekt`.

## Navegação

- [72 aulas, zero–B2 → 02-MATRIZ](02-MATRIZ.md)
- [Fontes públicas, licenças e exclusões → 01-FONTES](01-FONTES.md)
- [Portas de qualidade e segurança editorial → 03-GATES](03-GATES.md)
- [Registro de correções e decisões → 04-REGISTRO](04-REGISTRO.md)
- [Arquitetura internacional existente](../../ESTRUTURA-INTERNACIONAL.md)
- [Instruções do Claude / PR #429](../LEIA-ME-PARA-QUEM-CONTINUA.md)

## Estado da produção

- 72 aulas / 288 sessões em português como fonte, com versões EN **geradas mas não revisadas** neste PR.
- 302 tópicos de gramática EN em rascunho.
- `content/indice.en.json`: 72 títulos de aula, 288 títulos de sessão, **0 aulas aprovadas** em `de.aulas`.
- Material de terceiros **não importado**. O catálogo é um mapa de pesquisa, não licença automática de qualquer dado.
- Correções já feitas: sessões 003, 006, 010 e 192, gramática EN e scripts; revisões globais ainda abertas.

## Como pesquisar

Exemplos: `node scripts/pesquisar-mapa-de-en.mjs dativo`, `... Konjunktiv`, `... CC0`, `... "word order"` ou `... --json "sentence"`. O script procura notas, títulos e IDs da gramática e índices, com normalização de acentos. É leitura apenas; não copia os grandes datasets para o site.

## Decisões estáveis

1. O curso português permanece disponível; versão inglesa fica em produção até verificação por aula. O selo visual é tratado em **outro PR**.
2. Identidade e método Linvuu: entender → escutar → praticar; glosas e contraste de erros **adaptados ao inglês**; áudio, textos alemães e IDs mantidos.
3. Materiais CC BY-SA/GPL exigem cuidados de copyleft ou conteúdo derivado. Preferir referência independente ou obras CC0/CC BY/MIT quando adequado e comprovado.
4. Não copiar indiscriminadamente materiais de terceiros e não modificar checkout, preços, login, indexação ou versão de produção nesta branch.
