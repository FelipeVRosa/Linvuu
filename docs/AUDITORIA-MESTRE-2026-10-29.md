# Auditoria mestre da Linvuu, 29/10/2026 (noite)
Método: consulta direta ao GitHub, ao Render, ao site publicado (`https://linvuu.com.br`) e aos arquivos do repositório, **nesta sessão**. O que não foi medido está em "Não verificado". Cópia versionada: `docs/AUDITORIA-MESTRE-2026-10-29.md`.

## 1. Veredito
1. **O código e o deploy estão em ordem:** `main` = `2599d804` = deploy `live` no Render; CI e Segurança verdes; 89 URLs no sitemap; cabeçalhos de segurança presentes.
2. **O loop vem de documentos e pedaços de trabalho que se contradizem**, não de falha de código: 115 arquivos em `docs/`, vários desatualizados; dois `AGENTS.md` diferentes; 92 branches remotas; cinco pastas locais com alterações não commitadas; planos de idioma de 7 a 22 dias atrás ainda lidos como atuais.
3. **Só russo e alemão estão "disponíveis" em português** (`cursos.json`). Inglês, espanhol, francês e italiano estão `em-producao`, mas as páginas deles já estão no ar e indexáveis.
4. **A edição em inglês (`/en`) se contradiz** e tem 0 aulas traduzidas além do curso de português para falantes de inglês (`br`).
5. **Áudio:** só espanhol (906 MP3) e italiano (556) têm arquivos no repositório; russo, alemão, inglês, francês e português para estrangeiros têm 0 (1 alemão); não verifiquei de onde vem o áudio em produção.

## 2. O que está no ar (verificado hoje)
| Item | Resultado |
|---|---|
| Deploy Render (`linvuu`) | `dep-dbhu2bff3r2c73852j0g`, SHA `2599d804`, **live**, 30/10 00:15 UTC; igual à `main` |
| CI / Segurança / Monitoramento | `success` no SHA `2599d804` (gitleaks, auditoria de dependências, build) |
| Home e rotas | `/`, `/en`, `/es`, `/curso/<6 idiomas>`, `/livros/<idioma>`, `/gramatica/ru`, `/assinatura`: 200 |
| Sitemap | 89 URLs: 6 cursos × 9, 6 livros × 3, gramáticas, `/en`, `/es`, `/en/curso/br`, `/en/gramatica/br` |
| Cabeçalhos | CSP, HSTS (6 meses), nosniff, DENY, permissions-policy, referrer-policy; HTML `no-cache` |
| `robots.txt` | permite tudo, bloqueia `/api/` e `/admin/`, aponta o sitemap |
| `/.well-known/assetlinks.json` | **503** "Certificado Play App Signing não configurado" (esperado até haver SHA do Play) |
| `/healthz` | 200 |
| Dependabot (GitHub) | **21 alertas abertos: 6 altos, 9 médios, 6 baixos**; não analisados |

## 3. Conteúdo por idioma
| Idioma | Status no `cursos.json` | Sessões publicadas | Aulas | Níveis | MP3 no repositório | Clipes a gravar (csv) | Livro A1–A2 no site | Aulas traduzidas p/ inglês |
|---|---|---|---|---|---|---|---|---|
| Russo | **disponível** | 312 | 78 | zero, A1, A2, B1 | 0 | 1.886 | sim (3 URLs) | **0** |
| Alemão | **disponível** | 288 | 72 | zero–B1 e 16 de B2 | 1 | 2.303 | sim | **0** |
| Inglês | em produção | 248 | 62 | A1–B1 | 0 | 2.193 | sim | n/a (origem pt) |
| Espanhol | em produção | 248 | 62 | A1–B1 | 906 | 2.171 | sim | **0** |
| Francês | em produção | 248 | 62 | A1–B1 | 0 | 1.673 | sim | **0** |
| Italiano | em produção | 248 | 62 | A1–B1 | 556 | 1.814 | sim | **0** |
| **Português p/ estrangeiros (`br`)** | disponível | 248 | 62 | A1–B1 | 0 | 2.580 | **não** (PDF `br-en` existe fora do site) | origem em inglês: 62/62 |

Todas as sessões estão com `status: publicada`; o rótulo `em-producao` só vale para a vitrine.

## 4. Conflitos e inconsistências (com evidência)
| # | Conflito | Evidência | Ação proposta |
|---|---|---|---|
| C1 | **Home `/en` diz o contrário de `/en/cursos`** | `/en`: "cursos para **brasileiros**, explicações em português"; `/en/cursos`: cursos "**explicados em inglês**, erros de falantes de inglês" | Definir um só público para `/en` (ver §6) e reescrever as duas páginas |
| C2 | **Páginas `/en/curso/es,fr,it` prometem "explained in English"** mas a aula vem em português | `indice.en.json`: `aulas: []` para es, ru, de, fr, it; `GET /api/aula/ru/1?l=en` devolve texto em português | Tirar a promessa até haver tradução; ou traduzir |
| C3 | `/en/livros` e `/en/gramatica` com **título e descrição em português** | meta description de `/en/livros` e `/en/gramatica` em português | Traduzir as páginas públicas da edição |
| C4 | `br` (inglês) **no sitemap só como curso e gramática**; as 8 sessões gratuitas e o livro `br-en` não aparecem | `/en/livros/br` → 404; sitemap sem `/en/curso/br/dia/*` | Incluir sessões gratuitas e publicar o livro |
| C5 | **Status × realidade:** 4 cursos `em-producao` estão indexáveis no sitemap com título "do zero ao B1" | sitemap: 9 URLs por idioma; `cursos.json` | Decidir: manter público como "em produção" (rotulado) ou tirar do sitemap |
| C6 | **Áudio sem contagem única** | `PENDENTE-AUDIO.md` (18/10): "só 915 clipes"; `content/audio/*-gravar.csv`: 1,7 a 2,6 mil linhas por idioma; 0 MP3 em 5 idiomas | Conferir de onde vem o áudio em produção e reconciliar |
| C7 | **Documentos desatualizados lidos como atuais** | `ESTADO-ATUAL.md` (27/10): SHA `3431e440`, PR #347 aberto (mesclado em 28/10); `INTERNACIONAL.md` (13/10): "EN desligado"; `PLANO-FINALIZACAO.md` (18/10): lançamento 5/11; `PLANO-INGLES.md` (7/10), `PLANO-RUSSO.md` | Um único `ESTADO-ATUAL.md` vivo; os demais marcados como histórico |
| C8 | **Dois `AGENTS.md`** | `C:\site\AGENTS.md` (fora do Git; "metas 100/100", branch `eat/full-stack-100`) × `AGENTS.md` do repositório | Manter só o do repositório; o outro vira nota no cofre |
| C9 | **Branches e worktrees** | 92 branches remotas; ao menos 20 "à frente" da `main` (a maioria squash-mesclada, não apagada); 5 pastas locais com alterações não commitadas: `Linvuu` (em `backup/local-2026-10-28`, com **versão local divergente** de `App.tsx` e `HomeBrasileiros.tsx`), `Linvuu-integracao-site` (`.audit-local/`, `revisao-publica/`), e 3 worktrees só com `robots.txt` e `sitemap.xml` regenerados | Limpeza com a sua confirmação (§6) |
| C10 | **Trabalho do ChatGPT no repositório** | branches `codex/*` (5 de exercícios de inglês, 19/10; 3 de SEO/CI, 28/10), `docs/audio-chatgpt/` (lotes de áudio), `docs/redes/` | Congelar `codex/*`; ChatGPT só em `docs/redes/` e redes sociais |
| C11 | **Revisões duplicadas de exercícios de inglês** | `rev/exercicios-en-150` (Claude) × `codex/exercicios-en-150*` | Conferir se a `main` já tem as correções; fechar o resto |
| C12 | **PRs rascunho antigos** | #360 (editorial B1–C2), #367 (gamificação) | Decidir: integrar por partes ou arquivar |

## 5. Quem faz o quê (regra para acabar com os conflitos)
- **ChatGPT:** somente configuração e conteúdo de **redes sociais** (`docs/redes/`, Metricool, perfis). Não abre PR de código, aula, livro ou documentação do produto.
- **Claude:** todo o produto (código, aulas, livros, SEO, deploy, documentos de estado).
- **Regra única de estado:** `docs/ESTADO-ATUAL.md` é a fonte; qualquer mudança atualiza esse arquivo no mesmo PR.

## 6. Plano de fechamento (em ordem)
**Definição do "site em inglês".** `/en` serve a falantes de inglês: **Português do Brasil** (`br`, o único curso que **está** em inglês) é a porta de entrada; os outros seis cursos **só aparecem em inglês quando traduzidos** (hoje, nenhum).
1. **Congelar o escopo do ChatGPT** (§5) e arquivar `codex/*` e os 20 branches já mesclados (com a sua confirmação).
2. **Consertar a edição `/en` (copy):** home, `/en/cursos`, `/en/livros`, `/en/gramatica`; remover "explained in English" dos cursos não traduzidos; manter `br` em destaque.
3. **Fechar o `br`:** áudio (2.580 clipes; decisão de voz), sessões gratuitas no sitemap, livro `br-en` no site, revisão por falante nativo de inglês.
4. **Reconciliar o áudio** (C6) e decidir a voz.
5. **Atualizar `ESTADO-ATUAL.md`** e marcar os planos antigos como histórico.
6. **Dependabot:** analisar os 6 altos.
7. **Livros B1–B2 do russo:** rascunhos prontos; revisão sua; B2 não iniciado.

## 7. Não verificado nesta auditoria
Login e checkout reais; regras Firestore publicadas; origem do áudio em produção; teste em aparelho Android; indexação no Google (Search Console); renderização completa das 89 páginas; conteúdo servido pelo `/api/aula` para contas pagas; histórico completo de segredos.

## 8. Decisões que preciso de você
1. **Público de `/en`:** falantes de inglês aprendendo português (recomendado) ou brasileiros lendo o site em inglês (hoje, a home)?
2. **Cursos `em-producao` (en, es, fr, it):** ficam públicos como "em produção" ou saem do sitemap até o áudio?
3. **Voz do áudio** (Edge, ElevenLabs, Azure ou a sua): desbloqueia 2.580 clipes do `br` e as listas dos outros.
4. **Limpeza de branches/worktrees:** posso apagar os branches mesclados e os worktrees limpos?
5. **PRs #360 e #367:** integrar por partes ou arquivar?
