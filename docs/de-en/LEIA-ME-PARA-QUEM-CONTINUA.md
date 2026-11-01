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

## Continuação ChatGPT no PR #429 (31/10/2026)

Foram acrescentados os seguintes trabalhos **somente na branch de rascunho**:

- `scripts/auditar-de-en.mjs`: auditoria de 288 sessões e gramática, com detecção de resíduos portugueses, preservação de IDs/áudio/texto alemão, gabaritos e metadados. Executar `node scripts/auditar-de-en.mjs --limit=100` (ou `--json`). **O retorno diferente de zero é esperado enquanto houver pendências; ele não certifica revisão linguística humana.**
- Correções de conteúdo nos `dia-003`, `dia-006`, `dia-010` e `dia-192`: glosas, tabelas, alternativas de múltipla escolha, gabaritos e justificativas em inglês. Não alterados os trechos de alemão, áudios nem IDs.
- `content/gramatica/de.en.json`: tradução dos títulos de aula usando os 72 nomes **já existentes** em `content/indice.en.json`, categorias pedagógicas, títulos ainda portugueses e glosas/tabelas identificadas. A gramática **ainda não está integralmente revista**.
- `docs/de-en/ferramentas/lib.cjs`: agora localiza a raiz do repositório em vez de usar o caminho privado de Windows. `apply.cjs` falha em modo seguro sem `--permitir-sobrescrita` e sem mapas presentes.

### Bloqueios para liberação

**Não marcar `de.aulas` como 72** apenas porque existem 288 arquivos. O `content/indice.en.json` tem 72 títulos de aulas em `de.g` e 288 títulos de sessões em `de.s`, mas `de.aulas` continua vazio deliberadamente: existem textos curtos, objetivos, glosas e fragmentos de exercício ainda em português. Um exemplo é `aula.titulo` e `aula.objetivo` em sessões traduzidas, mesmo que os blocos centrais estejam em inglês.

Próxima passagem editorial: harmonizar as três camadas de cada sessão (`titulo`, `aula.titulo`, `aula.objetivo`) com o índice EN; revisar todas as chaves `pt`/tabelas, `enunciado`, `opcoes`, `gabarito` e `explicacao` dos 288 arquivos; corrigir o que a auditoria reportar; validar o português intacto e os IDs/áudios; conferir gramática e comparação de erros específicos de falantes de inglês. Só depois executar o conjunto de testes e encaminhar para revisão de falante nativo.

**Não rodar `apply.cjs` sobre esta branch sem os dicionários originais completos**, porque os diretórios temporários `sh/` e `out/` não foram commitados: a reexecução pode sobrescrever as traduções. Não regenerar nem fazer merge/deploy até o gate editorial e a autorização do Felipe. O aviso visual “In production” da interface inglesa está em trabalho separado do Claude; não editar aqui.
