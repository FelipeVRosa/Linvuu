# Linvuu — instruções comuns para agentes

**PRIMEIRO LEIA:** [`docs/CONTINUIDADE-2026-10-27.md`](docs/CONTINUIDADE-2026-10-27.md). Esse é o relato comum e datado de PRs, Render, Firebase/IAM/OIDC, Firestore, Search Console, Stripe, Android, Vuu e conversão de repositórios privados. Para estados atuais, confirme GitHub, Render e GSC antes de decidir. A privacidade dos três repositórios deve ser verificada pela API, não presumida.
Antes de alterar este repositório, leia `docs/ESTADO-ATUAL.md`, `docs/COORDENACAO-IA.md` e as instruções locais aplicáveis. Estas instruções valem para Claude, ChatGPT/Codex, Cursor e Google Antigravity.
- Entradas específicas: `CLAUDE.md` (Claude), `.cursor/rules/linvuu.mdc` (Cursor) e `GEMINI.md` (Antigravity). O `AGENTS.md` é a fonte comum; evite duplicar normas contraditórias.
- Consulte a main atual e os PRs abertos; não trate lembranças da conversa como estado de produção.
- Use branch e PR. Não sobrescreva trabalho do outro agente. Registre a tarefa e os arquivos no corpo do PR antes das mudanças seguintes.
- Cada correção deve atualizar o registro do assunto com evidência e limitações.
- Distingua: proposto, implementado, testado, mergeado, deploy ativo, verificado em produção.
- Não publique segredos ou material comercial de terceiros.
- Não altere cobrança, planos de infraestrutura ou permissões para contornar um teste falho.
- Autorização atual do Felipe: auditar e corrigir segurança, cache, rotas, idiomas e SEO, inclusive fazer merges verificados. Não é autorização para exclusão indiscriminada de dados.
- Livros B1–C2, protótipos e Vuu são frentes futuras; não entram no site/app como efeito colateral desta auditoria.
- Testes da mudança e checks aplicáveis precisam passar antes do merge. Uma limitação externa deve ser registrada, não escondida.

**Privacidade confirmada em 27/10/2026:** os três repositórios Linvuu, Linvuu-Livros-em-PDF e Linvuu-Auditoria-Firebase foram verificados como PRIVADOS via GitHub API. A URL do site continua pública; não tornar repositórios públicos para SEO. Confira a seção 10 de `docs/CONTINUIDADE-2026-10-27.md` e valide as permissões do conector se retornar 404. A CI de repositórios privados pode estar sujeita a cota. Confirme Render após a alteração de visibilidade.
