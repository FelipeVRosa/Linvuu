# Linvuu — instruções para Gemini / Google Antigravity

**OBRIGATÓRIO:** antes de trabalhar, leia integralmente [docs/CONTINUIDADE-2026-10-27.md](docs/CONTINUIDADE-2026-10-27.md), depois AGENTS.md, CLAUDE.md apenas para cruzar estado, e docs/COORDENACAO-IA.md. Os mesmos fatos auditados servem para Claude, ChatGPT/Codex, Gemini/Antigravity e Cursor. Não supor que agentes compartilharem contas/memória; sincronização é por main, PRs, checks e relatório. Projeto Firebase em produção é `linvuu`; Cloud Shell de duas contas com Owner, OIDC leitura validado, mas Firestore regras não homologadas com usuários reais. Googlebot rastreou a home com robots ALLOWED e sitemap lido sem erros; não afirmar bloqueio total. Vuu é frente futura informada, sem asset/merge confirmado na main. A privacidade deve ser conferida pela API após conversão.

As regras de projeto são compartilhadas entre Claude, ChatGPT/Codex, Cursor e Antigravity.

Antes de qualquer edição, **leia integralmente**:
1. `AGENTS.md` — instruções comuns (fonte normativa).
2. `docs/ESTADO-ATUAL.md` — snapshot com data; reconfirme `main`, PRs e deploy.
3. `docs/COORDENACAO-IA.md` — procedimentos para evitar colisões de agentes.
4. As regras e documentos locais pertinentes ao arquivo modificado.

Use branch e PR; não escreva diretamente na `main`, não faça merge automático de protótipos/livros futuros e não contorne testes vermelhos. Uma falha sem etapas de execução exige diagnosticar infraestrutura, permissões e quota antes de atribuir erro ao código.

Não exponha credenciais, IAM, chaves, informações privadas nem conteúdo protegido de terceiros. Não altere site, APK, pagamentos ou conteúdo A1–A2 como efeito colateral de documentação. Diferencie teste de merge, deploy e verificação real. Registre o resultado no PR.

Este arquivo é a entrada específica do Antigravity, e não substitui `AGENTS.md`.

**Privacidade confirmada em 27/10/2026:** os três repositórios Linvuu, Linvuu-Livros-em-PDF e Linvuu-Auditoria-Firebase foram verificados como PRIVADOS via GitHub API. A URL do site continua pública; não tornar repositórios públicos para SEO. Confira a seção 10 de `docs/CONTINUIDADE-2026-10-27.md` e valide as permissões do conector se retornar 404. A CI de repositórios privados pode estar sujeita a cota. Confirme Render após a alteração de visibilidade.
