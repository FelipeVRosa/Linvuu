# Linvuu — instruções para Claude (estado comprovado)

**Fonte de regras:** leia `AGENTS.md` e `docs/COORDENACAO-IA.md`. Antes de qualquer edição, consulte a `main`, PRs abertos, checks e `docs/ESTADO-ATUAL.md`; esse último é um *snapshot* com data, não uma sincronização permanente.

## O que foi verificado em 27/10/2026
- Repositório de produto `FelipeVRosa/Linvuu` **público**; `main` no SHA `3431e4409065e0f1bfed71c3d704b4079d41ef39` ao consultar.
- CI e Segurança do SHA `3431e440`: **success**, [CI](https://github.com/FelipeVRosa/Linvuu/actions/runs/40453761867) e [Segurança](https://github.com/FelipeVRosa/Linvuu/actions/runs/40453762120).
- Render `linvuu`, deploy `dep-dbg34nrbc2fs739ptjk0`, SHA `3431e440`: **live**, confirmado por API. Não extrapolar a checkout, login de usuários, regras Firestore ou APK.
- Repositório de auditoria `FelipeVRosa/Linvuu-Auditoria-Firebase` **público**. [Run #40460208259](https://github.com/FelipeVRosa/Linvuu-Auditoria-Firebase/actions/runs/40460208259): testes offline e autenticação federada Google OIDC **success**, conferido `projectNumber=982052790317` do projeto `linvuu`. Isto comprova **identidade e leitura do identificador do projeto**, não leitura administrativa completa.
- Cloud Shell sob as duas contas proprietárias reportou `CONFIGURACAO_GCP_VERIFICADA` após `--apply` e `--verify`; não foi obtida nesta sessão uma coleta administrativa independente de IAM ou das regras publicadas.
- Workflow antigo de auditoria Firebase em `FelipeVRosa/Linvuu`: **aposentado**; o workflow válido é o do repositório separado e sua coleta detalhada **permanece bloqueada enquanto o repositório for público**.
- PRs #360 (editorial futuro) e #367 (gamificação) permanecem **draft**, não aprovados para publicação.

## Não afirmar que funciona sem comprovação
- Publicação e segurança efetiva das `firestore.rules` de produção, usuários e documentos.
- Login real, revogação testada com tokens reais, assinatura, Stripe/checkout/webhooks externos.
- APK compilado, assinado e testado em aparelho ou publicado na Google Play.
- Áudios gerados em workflow: execução verde não autoriza uso comercial da origem TTS.
- Todos os idiomas/números de aulas, experiência visual mobile ou SEO orgânico integralmente validado.

## Como trabalhar
1. Reproduzir o erro e distinguir **implementado → testes simulados → CI → merge → deploy → produção**.
2. Criar branch/PR, executar checks aplicáveis, registrar SHA, evidências, limites e reversão; não sobrescrever branches de outros agentes.
3. Não apagar histórico, conteúdo de livros, workflows ainda úteis ou PRs futuros só para esconder checks antigos em vermelho.
4. Não publicar credenciais, policies IAM, artefatos com dados administrativos, chaves, tokens ou dados de alunos em repositório público.
5. Não realizar deploy de `firestore.rules`, mudanças de cobrança, Render, credenciais ou APP/APK como efeito colateral de documentação.

**Leia** [estado verificado](docs/ESTADO-ATUAL.md) e [Firebase — situação e verificação](docs/conexao-firebase-github.md). `docs/CONTEXTO.md` e `docs/PARCERIA-IA.md` são registros históricos, não fontes de verdade do presente.

## Verificação de encerramento — 27/10/2026
- Render: commit `6bf7dd9` publicado `live`, build e deploy aprovados (dep-dbg4aeajnfac739kpjlg). O site atual não foi substituído por uma nova arquitetura.
- Google Search Console (propriedade `sc-domain:linvuu.com.br`): sitemap com 81 URLs e zero erros/avisos na última leitura do Google, em 22/10. As 81 URLs foram registradas no Indexing Tracker nesta auditoria. Inspeção por URL confirmou indexação de /, /assinatura, /cursos, /curso/en, /en, /sobre, /livros; não indexadas /curso/de, /livros/de e /es. Não afirmar indexação de todas as URLs nem confundir cliques de proprietário com visitantes.
- Auditoria SEO on-page de 10 páginas: 0 avisos críticos, 0 altos, 4 médios, 13 leves. Problema verificável: objeto Organization em JSON-LD de cursos sem logo; corrigido neste PR com teste. Textos curtos e metadados devem ser revisados editorialmente, sem geração de conteúdo artificial.
- Stripe conectado em `livemode=true`: 1 preço mensal ativo de R$ 139,00; webhook habilitado para `https://linvuu.com.br/api/stripe/webhook` com eventos de checkout, assinatura e faturas. Nenhum Payment Link encontrado (o site usa Checkout Sessions criadas pelo backend). O fato de existir webhook não comprova entrega bem-sucedida nem conceder acesso ao curso.
- Pagamentos web: **não verificado fluxo de compra real ponta a ponta**. Não executar compra real, não mudar preços, descontos, cupons ou eventos Stripe sem tarefa explícita; conferir com teste controlado antes de declarar 8/10 para vendas.
- APK: build web separado não é Android release/AAB certificada. Não declarar conformidade final com Google Play sem análise de artefato, política de pagamentos e teste em aparelho.
- Sem acesso conectado ao GA4 pelo GSC Wizard desta conta; não inventar métricas de eventos, conversão ou páginas de erro reais.

## Atualização de auditoria por 20 frentes (27/10/2026)
Leia [docs/AUDITORIA-20-FRENTES-2026-10-27.md](docs/AUDITORIA-20-FRENTES-2026-10-27.md) antes de prometer lançamento. O relatório distingue fatos de GitHub, Render, Search Console, Stripe e PostHog dos testes reais ainda pendentes. PR #375 corrige JSON-LD e está live; PR #377 impede preços automáticos e está live. PR #378 adiciona eventos opt-in e foi mergeado, mas confirmar SHA de deploy antes de dizer que está live. PR #379 corrigiu transições de cor dos botões do APK, passou na prévia e em rerun e foi mergeado; verificar SHA de produção e homologação física antes de declarar Google Play pronta. Issues #376, #380 e #381 registram blockers. **Não há 20 subagentes independentes nesta execução; são 20 verificações técnicas com fontes.**
