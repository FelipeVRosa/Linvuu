# Linvuu — 20 verificações independentes de prontidão (27/10/2026)

> Auditoria por evidência via GitHub, Render, Google Search Console, Stripe e PostHog. **São 20 frentes de verificação, não 20 instâncias autônomas de IA**. Cada resultado é limitado pelo que foi observado; não transformar check verde em comprovação de compra real ou Google Play.

## Infraestrutura e publicação

1. **GitHub main / histórico — VERIFICADO.** PRs #374 e #375 integrados; #377 protege preço. PRs #360 e #367 permanecem drafts. Fonte: [pull requests](https://github.com/FelipeVRosa/Linvuu/pulls).
2. **Render deploy — VERIFICADO POR SHA.** Commit `fdbd25a0b0fdaaf4695512560914d15d9ee3669d` (preço fail-closed) confirmado `live` em 27/10. As alterações posteriores só devem ser consideradas publicadas após nova conferência de SHA do deploy.
3. **Prontidão /readyz — PARCIAL.** O código consulta configuração, metadados Firestore e preço Stripe em modo GET, testado sem dependências reais pela CI. **Não foi verificada resposta HTTP 200 de produção nesta rodada**.
4. **Build website e TypeScript — VERIFICADO em checks de PR.** `build`, `web` e `visual` aprovados no PR #378; confirmar novamente na main após merge.

## Segurança e dados

5. **Gitleaks — VERIFICADO EM CI** nos PRs #375, #377 e #378. Não significa ausência absoluta de vulnerabilidades.
6. **Dependências — VERIFICADO EM CI.** Auditoria de dependências aprovada; novos CVEs podem surgir.
7. **API e controles de acesso — PARCIAL.** Testes locais de cabeçalhos, API fechada e rate limit existentes; não equivalem a pentest autenticado em produção.
8. **Regras Firestore — PARCIAL.** Arquivo versionado e imagem publicada de 22/10 coincidiram visualmente; emulador testa contas fictícias. Não há homologação end-to-end com duas contas reais.
9. **Google OIDC — VERIFICADO PARA IDENTIDADE.** [run 40460208259](https://github.com/FelipeVRosa/Linvuu-Auditoria-Firebase/actions/runs/40460208259) validou token temporário e número do projeto `linvuu`, sem chaves JSON. Não é auditoria administrativa completa.

## Googlebot e SEO

10. **Sitemap — VERIFICADO.** 81 URLs no `public/sitemap.xml`; Search Console reportou 0 erros e 0 avisos no último download de 22/10.
11. **Canonicals, robots, HTTP 404 — PARCIAL.** CI valida sitemap, robots, SSR por rota e links. Auditor on-page inspecionou 81 URLs indexáveis, sem erros críticos/altos. Google ainda pode escolher não indexar.
12. **Cobertura do índice — NÃO CONCLUÍDA.** Tracker GSC criado em 27/10; após 24 inspeções: 7 indexadas, 17 não indexadas, 57 pendentes. [Issue #381](https://github.com/FelipeVRosa/Linvuu/issues/381). Não afirmar que '81 estão indexadas'.
13. **Dados estruturados dos cursos — CORRIGIDO E PUBLICADO.** PR #375 incluiu logo verificável em `Course.provider Organization`, produção `56c2ec5` e versões posteriores; reavaliar no Google após nova coleta.
14. **Conteúdo/links internos — PARCIAL.** HTML inicial contém links `<a href>` da home para cursos, de livros a capítulos e dos cursos para amostras. Quantidade de palavras baixa em algumas páginas de apresentação exige revisão editorial específica, não geração de textos artificiais.

## Cobrança e conversão web

15. **Conta/preço Stripe — VERIFICADO.** Conta Linvuu `livemode=true`; 1 preço mensal ativo de R$139; preço de pacotes está definido no código. Não modificar valores sem validação comercial.
16. **Endpoint de webhook — PARCIAL.** 1 endpoint `/api/stripe/webhook` habilitado, eventos relevantes configurados. CI cobre HMAC, payload falso, duplicidade e falhas; entrega real de evento ainda não provada.
17. **Proteção de catálogo — VERIFICADO EM CI; DEPLOY LIVE.** PR #377 removeu criação automática de produto/preço real durante pedido. Só usa `STRIPE_PRICE_ID` previamente configurado; falta teste de compra com conta de teste.
18. **Compra + acesso + cancelamento — NÃO CONCLUÍDA.** 18 sessões de checkout live observadas: expiradas e sem pagamento. Sem evidência de venda aprovada, liberação de aula paga, refund ou portal. [Issue #380](https://github.com/FelipeVRosa/Linvuu/issues/380).
19. **Medição opt-in — VERIFICADA EM CI; DEPLOY DEPENDE DE SHA.** PostHog nativo tinha navegação/curso, não marcos de checkout. PR #378 adicionou `checkout_started` e `checkout_returned`, com consentimento e sem PII. Retorno **não** significa venda paga.

## Android / Google Play

20. **APK, acessibilidade e conformidade Play — PARCIAL.** Variante de build e prévia Chromium existem; RevenueCat Billing SDK não entra no Capacitor atual. Check axe de conclusão apontou contraste intermitente [#376](https://github.com/FelipeVRosa/Linvuu/issues/376); PR #379 trata a transição de cores. **Não houve validação de AAB assinado, Play Console, política de pagamentos nem aparelho físico.** Não declarar 8/10 para Google Play.

## Portas de lançamento e notas

- **Web para primeiras vendas:** até completar #380 não se deve classificar 8/10. Registro prudente: ~7/10, apesar das melhorias.
- **SEO técnico:** ~7,5/10, pois há grande diferença entre indexável e indexado.
- **Infra:** ~9/10, aguardando confirmação dos deploys após merges posteriores.
- **Segurança automatizada:** ~8/10 (cobertura boa; validação real pendente).
- **Android:** ~5/10 (ainda sem homologação Play).
- Não iniciar transação real, publicar Firestore, aumentar gastos ou apagar workflow vermelho para subir a nota.
- As notas são avaliações qualitativas, não medições oficiais.

## Entrega ao Claude e demais agentes
Ler **AGENTS.md**, **CLAUDE.md** e este relatório; conferir a `main`, SHA do Render, novos runs e GSC antes de afirmar estado corrente. Trabalhos em rascunho e preços atuais permanecem intocados.
