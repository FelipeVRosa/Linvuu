# Alemão em inglês (de/en): entrega para quem continua

Estado em 31/10/2026. Rascunho: **não fazer merge, não publicar, não mexer em preço/Stripe**.

## O que está nesta branch
- `content/idiomas/de/en/dia-001..288.json`: 288 sessões, explicação em inglês. As frases em alemão, `audio` e IDs são os da origem (`content/idiomas/de/dia-NNN.json`).
- `content/gramatica/de.en.json`: gramática (302 tópicos) em inglês.
- `docs/de-en/notas/nota01..07.md`: correções de fato no texto de origem e adaptações feitas (uma nota por lote). Devem ir para a descrição do PR final, e o Felipe precisa decidir quais correções aplicar também ao texto em português.
- `docs/de-en/ferramentas/`: scripts usados (`lib.cjs` detector de português, `build.cjs` gera os lotes, `check.cjs` confere, `apply.cjs` grava os arquivos). Têm caminhos absolutos da máquina do Felipe; ajustar `REPO` e `SP`.

## Como foi feito
Dicionário «frase em português → inglês» por agentes, junção por script, validação. Pronúncia em respelling inglês (tônica em MAIÚSCULAS; `ç` = som de "ich", `kh` = som de "ach"). Nenhum falante nativo revisou.

## O que falta (por que ainda não é publicável)
1. **Português que sobrou.** O detector perdeu textos curtos sem marcadores (glosas, descrições de som, respellings antigos): cerca de 2.800 strings. Revisar com varredura por vocabulário (ver como foi feito no francês: lista de palavras que só existem em português, comparada com a lista de palavras que aparecem nos campos `ru`/`audio`).
2. Rodar `tsc` e `scripts/testar-seo-publico.ts`.
3. Só então: `content/indice.en.json` (`de.aulas` e `de.g`), `docs/COBERTURA-IDIOMAS.md` e o sitemap (`scripts/seo.mjs` já lê `content/gramatica/de.en.json`; regenerar `public/sitemap.xml` muda o sitemap e entra no CI `robots-google`).
4. Sem isso o CI `robots-google` desta branch pode falhar de propósito: o sitemap versionado ainda não tem o alemão em inglês.

## Regras
- Não alterar conteúdo em português nem áudios.
- Cidades brasileiras nas frases alemãs ficaram (o alemão não muda).
- Merge só com OK do Felipe no chat.
