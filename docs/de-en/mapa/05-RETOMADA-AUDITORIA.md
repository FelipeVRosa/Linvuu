# Retomada editorial — alemão ensinado em inglês (31/10/2026)

**Estado:** revisão parcial verificada; PR #429 em rascunho. Não houve importação de terceiros, execução dos testes locais, merge ou publicação.

## Evidência direta na Linvuu

Inspecionado `content/idiomas/de/en/dia-001.json` na branch `de-en/entrega-rascunho`.
A tradução inglesa ainda contém resíduos portugueses em material mostrado ao aluno:

| Campo | Exemplo atual | Correção editorial necessária |
| --- | --- | --- |
| `grupos[0].nome` | `Grupo 1 — Vogais` | `Group 1 — Vowels` |
| `letras[].som` | `a de «casa»`, `i de «vida»` | Comparações fonéticas corretas para falantes de inglês, com IPA; não fazer substituição literal sem avaliação da pronúncia |
| `letras[].exemploPt` | `ilha`, `forno`, `queijo`, `banheiro` | `island`, `oven`, `cheese`, `bathroom` (preservar chave legada se requerida pelo renderizador) |

**Atenção:** o campo `status: "publicada"` no JSON da sessão não comprova que a tradução inglesa foi aprovada: o índice mantém `de.aulas` vazio. Não publicar por contagem de arquivos.

## Materiais externos — verificação adicional da fonte primária

| Fonte e endereço | Formato e licença | Uso proposto | Restrição / decisão |
| --- | --- | --- | --- |
| DeutschFokus — https://github.com/DeutschFokus/german-learning-toolkit | Documentos A1 em Markdown; vocabulário JSON/CSV; licença MIT do repositório | Comparar artigos, presente, ordem verbal, acusativo e dativo; cotejar termos e exercícios com as aulas Linvuu | Escopo atual verificado somente A1; inspecionar avisos de copyright/assets e registrar hash/commit antes de copiar |
| Deutsch im Blick (COERLL/UT Austin) — https://coerll.utexas.edu/dib/ ; https://www.coerll.utexas.edu/dib/pdfs/DeutschImBlick-textbook.pdf | Livro didático PDF CC BY 4.0 (edição 2017, página de créditos); conteúdos multimídia separados | Contrastar sequência didática, pronúncia, gramática e situações comunicativas | Não presumir que todo vídeo/foto/voz está liberado com a licença do livro; atribuir adequadamente qualquer adaptação |
| EverFlip — https://everflip.app/dataset | cards.csv, decks.csv, languages.csv, datapackage.json; dados de cartões CC BY 4.0 | Extrair subconjunto de cartões alemão–inglês, verificar níveis/tópicos e gerar comparação em JSON **depois de atribuição e QA** | Não copiar app, algoritmo, prosa editorial ou imagens; verificar qualidade e correspondências antes de importar |
| enz/german-wordlist — https://github.com/enz/german-wordlist | Lista UTF-8, licença CC0 1.0 | Validação auxiliar de formas vocabulares | Não é glossário bilíngue, nem prova de adequação CEFR; mantenedor admite erros |
| LibreLingo DE-from-EN — https://github.com/LibreLingoCommunity/LibreLingo-DE-from-EN | CC BY-NC-SA 4.0 (conforme catálogo do PR) | **Somente comparar abordagem sem reutilizar conteúdo** | Bloqueado para importação comercial |

## Ordem de execução (sem expor produção)

1. Auditar cada campo exibido ao aluno nos 288 JSON: `titulo`, `aula`, `sessao`, `som`, `exemploPt`, `pt`, enunciados, opções, dicas, respostas, feedback e gramática.
2. Classificar cada texto como inglês correto, alemão intencional, português residual ou caso ambíguo. Evitar substituições globais de falsos cognatos e exemplos fonéticos.
3. Conferir contra original português sem alterar strings alemãs, IDs, áudios e gabaritos válidos.
4. Fazer tabela por aula: tópico Linvuu ↔ referência CC0/CC BY/MIT ↔ lacuna ↔ decisão ↔ aprovação; fontes externas são apoio, não substitutas automáticas do método Linvuu.
5. Rodar `node scripts/pesquisar-mapa-de-en.mjs "Konjunktiv"`, `node scripts/testar-mapa-de-en.mjs`, `node scripts/auditar-de-en.mjs --limit=100`, `tsc` e testes SEO quando houver checkout adequado. **Ainda não executados nesta retomada.**
6. Manter `de.aulas` vazio até gate por aula e revisão linguística; não alterar sitemap, checkout ou branch main.

## Proveniência

- Linvuu: `content/idiomas/de/en/dia-001.json`, `docs/de-en/mapa/00-INICIO.md`, `docs/de-en/mapa/01-FONTES.md`, `docs/de-en/LEIA-ME-PARA-QUEM-CONTINUA.md` (branch acima).
- Fonte externa: páginas de README/licença e dataset indicadas nos links.
- Esta nota é diagnóstico documentado; não certifica importação, execução ou conclusão da revisão.
