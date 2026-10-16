# Padrão de qualidade por idioma

Meta de cada aula: **40 exercícios**, diálogo, leitura com perguntas e "Repita" (falar em voz alta).

## Como aplicar a um idioma
1. Conteúdo base em `content/idiomas/<idioma>/aulas/` (vindo dos livros ou escrito à mão).
2. `node scripts/gerar-repita.mjs <idioma>` cria os "Repita" a partir das falas e palavras da aula, com o áudio que já existe (não sobrescreve o que foi escrito à mão).
3. Opcional: `content/idiomas/<idioma>/complementos/aula-NNN.json` com `dialogo`, `texto`, `repita` e `meta` (exemplos em `en`).
4. `npm run complementos -- <idioma> && node scripts/aulas.mjs <idioma> && node scripts/conteudo.mjs --check`
   - Sem pasta de complementos, só o reforço automático roda (ordenar frase, ditado, vocabulário), sem áudio novo.
   - É idempotente: rode de novo depois de qualquer sincronização com os livros.
   - `br` fica de fora por enquanto (a língua de apoio das traduções é outra).
5. Áudio: novo texto precisa de MP3 (hash do texto). Use `so_gratis=true` ou `limite` no workflow `audio.yml` para gerar só o que falta.

## Situação (16/10/2026)
en 46 · es 40 · fr 40 · it 40 · de 41 · ru 38. Diálogo e leitura ainda faltam em parte de es, fr, it, de e ru: são os próximos complementos a escrever.

## Medição (só com consentimento)
Eventos anônimos de exercício e fim de sessão, `POST /api/evento`. Relatório: `GET /api/metricas?dias=30` com `Authorization: Bearer $METRICAS_TOKEN` (variável de ambiente com 24+ caracteres; sem ela a rota não existe).
