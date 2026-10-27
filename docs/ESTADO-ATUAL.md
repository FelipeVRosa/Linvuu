# Estado atual da Linvuu
Registro inicial: 26/10/2026 (Brasília). Atualizado em 27/10/2026 após leitura da coleta Cloud Shell e consultas diretas ao GitHub/Render. Este arquivo é um snapshot, não uma sincronização automática; verificar main e deploy em cada retomada.
## Baseline verificado
- Repositório: FelipeVRosa/Linvuu, PÚBLICO (visibilidade confirmada pela API em 27/10/2026; descrições anteriores como privado estavam incorretas). Main consultada antes desta proteção: `ce4dddd3bd860ec63fbf8c4edd6442fee33837ce` (#371, ponte de auditoria). O SHA `751c3b8` é anterior; e-mails de runs desse commit não identificam a main atual.
- Render: serviço linvuu (`srv-db03818u01pc738mirig`), deploy `dep-dbg0hpvb9u1s73fopnc0` live, SHA `118a3abe4c5ce88ac726c8f76042ea5d1a25a7be`; conclusão em 27/10/2026 02:15:58 UTC (26/10 23:15:58 Brasília). Reconsultado em 27/10. Trigger checksPass. Não confundir deploy live com saúde de todos os fluxos.
- Site: https://linvuu.com.br. React/Vite/TypeScript + Express; não é um backend PHP.
- Firebase configurado no Render: `VITE_FIREBASE_PROJECT_ID=linvuu`, `VITE_FIREBASE_AUTH_DOMAIN=linvuu.firebaseapp.com`, App ID com número `982052790317`. `FIREBASE_PROJECT_ID` não existe como variável direta do serviço; o backend usa a variável VITE como fallback. A identidade do Secret File e eventuais grupos herdados ainda precisam de conferência.
- Projeto distinto `linvuu-995d0` (número `371272154247`): coleta Cloud Shell autenticada retornou listas vazias de bancos e releases. Essa conta teve 403 em `linvuu`. NÃO migrar o Render nem publicar regras em `linvuu-995d0` como solução para o 403. Ver [auditoria Firebase](auditoria-firebase-2026-10-27.md).
- Regras versionadas em firestore.rules; igualdade com regras publicadas no projeto em uso AINDA NÃO verificada nesta rodada.
- Cloudflare: zona linvuu.com.br na conta Linvuu; leitura nativa e uma conexão Composio funcionam. A conexão Composio antiga padrão tem header de autenticação inválido.
- Google Search Console: propriedade sc-domain:linvuu.com.br com acesso de proprietário confirmado via API.
## Frentes independentes
| Frente | Situação / regra |
|---|---|
| Website e aulas atuais | Preservar conteúdo e oferta. Corrigir falhas comprovadas de infraestrutura, segurança, rotas e SEO. |
| Android/Google Play | Não declarar pronto por testes web. Conferir APK, build e aparelho separadamente. |
| Editorial B1–B2 e preparação C1–C2 | PR rascunho #360; não publicar no site/app nesta auditoria. A conclusão dos volumes exige auditoria de conteúdo. |
| Gamificação | PR rascunho #367; protótipo, não decisão de produção. |
| Dependências | PR #347 aberto; atualizações npm/Firebase/Vite, não PHP. Revisar checks antes de merge. |
| Vuu | Exploração autorizada de fantasma tipográfico. Figma criado; Blender/Rive/HeyGen/Canva ainda não concluídos. Sem integração no site/app. |
## SEO confirmado por API
- Home: PASS, “Enviada e indexada”, canonical declarado e Google iguais; último rastreamento 23/10/2026 09:23:44 UTC.
- /curso/de e /livros/de: “Detectada, mas não indexada”; nenhum lastCrawlTime retornado.
- Sitemap: 81 URLs enviadas; zero erros e avisos; última leitura 22/10/2026. O contador indexed=0 do sitemap NÃO substitui a inspeção de URL (a home está indexada).
- Capturas do Felipe: 1 erro de redirecionamento, 7 bloqueadas por robots, 72 detectadas não indexadas e 1 indexada mas bloqueada. Faltam as URLs específicas do erro e dos bloqueios para fechar a análise individual.
## Verificação HTTP inicial
200 e canonical próprio, sem noindex: /, /curso/de, /livros/de, /assinatura, /en e /es. HTML com no-cache e CF-Cache-Status DYNAMIC.
404 real com noindex: /index.php, /wp-login.php, /nao-existe-auditoria e /login. O endereço de login no código é /entrar; 404 em /login isoladamente não demonstra falha.
/readyz retornou 200, private/no-store. robots.txt retornou texto e liberou rotas públicas.
## Correções integradas — PR #368
- Política padrão private/no-store e X-Robots-Tag noindex em /api, /healthz e /readyz, incluindo falhas antes dos handlers.
- Áudio pago deixa de anunciar cache de 1 hora.
- Livro protegido resolve caminho com import.meta.dirname (ESM); antes referenciava __dirname não definido.
- Teste de middleware e HTTP real para 401/403/404; teste existente de IP passou. CI completa do PR #368 aprovada, incluindo builds website/APK e regras em emulador. Sem checkout real nem acesso pago em produção.
## Autenticação — PR #369
A exclusão desativa a conta e revoga sessões, mas usuario(req) usava verifyIdToken sem checkRevoked. O PR #369 foi mergeado e publicado em `118a3abe`; agora pede verificação de revogação e conta desativada (true), mantendo a recusa em caso de erro. Build, gitleaks e auditoria de dependências desse SHA: success, reconsultados em 27/10. Ainda falta teste real de tokens revogados/contas desativadas. Uma chamada adicional ao Auth pode aumentar latência; não neutralizar a revogação com cache.
## Pendências por prioridade
1. PRs #368 e #369 mergeados e deploy live confirmado. Verificação HTTP pós-deploy registrada no PR #369: APIs 401/404 com private/no-store e noindex; /healthz e /readyz 200 com os mesmos cabeçalhos; home e páginas públicas 200 com no-cache. Isso não substitui teste autenticado ou regras publicadas.
2. Obter as URLs individuais de redirecionamento/robots no Search Console e testar cadeias e política de indexação de cada uma.
3. Autenticação administrativa no projeto `linvuu`: a conta do Cloud Shell não conseguiu listar bancos/regras nele. Confirmar a conta proprietária e obter acesso ao projeto correto, consultar IAM e regras publicadas. O IAM coletado de `linvuu-995d0` não comprova o IAM de produção. Conector Composio é público de Auth; plugin Firebase instalado não expôs métodos remotos administrativos nesta sessão.
4. Concluir revisão de backend, conteúdo servido, idiomas, dependências e histórico de segredos. 164 arquivos de src foram recuperados; isso NÃO equivale a auditoria integral aprovada.
5. Identificar os supostos vazamentos PHP por URL/arquivo/evidência. Nenhum PHP encontrado no inventário de src e scripts consultado; duas sondagens públicas deram 404. Não concluir ausência em todo o histórico.
6. Checagem HTTP das 81 URLs concluída: todas 200, sem redirecionamentos, canonical próprio e sem noindex. Renderização completa de cada página ainda não validada.
7. Auditar sessões autenticadas, assinatura/revogação, respostas pagas, áudio, renderização e navegação de idioma com contas de teste.
## Documentação histórica
CONTEXTO.md e PARCERIA-IA.md registram rodadas antigas e contêm informações superadas (áudio, progresso, pendências, marca e ofertas). Consulte arquivos atuais e evidências antes de agir. Não propagar preços ou níveis antigos deste histórico.
## Vuu: referência de design
Figma: https://www.figma.com/design/GHaocmKtqRw2EQ1QqVx4YD
Matriz inicial com oito estados. Estudos gerados em 3D são imagens conceituais, não arquivos .blend nem animações finais.

## Conexão de auditoria Firebase pelo GitHub
Ponte manual com OIDC integrada no PR #371. O proprietário informou que `python3 configurar.py --apply` terminou com sucesso na conta hello.linvuu@gmail.com, sem criação de chaves. Isso ainda não confirma autenticação funcional.

A primeira execução [40451944964](https://github.com/FelipeVRosa/Linvuu/actions/runs/40451944964), no SHA ce4dddd3, terminou em startup_failure sem jobs, check runs ou artefatos. A política Actions consultada permite apenas actions do GitHub (github_owned_allowed=true, verified_allowed=false, patterns_allowed=[]); as duas actions oficiais google-github-actions estão excluídas. Ainda não liberar essas actions nem repetir a coleta detalhada antes de definir destino privado para os relatórios.

A API também confirmou que o repositório está público. A proteção desta mudança bloqueia o workflow antes da autenticação e o coletor antes de obter token quando o evento não confirmar repositório privado; upload de resultados também exige privacidade. Sete testes locais passaram. Não houve coleta Google nessa primeira tentativa; o estado das regras publicadas e IAM de produção continua não verificado. Não houve alteração de visibilidade ou permissões Actions nesta correção.

Ver [configuração e limites](conexao-firebase-github.md). O Felipe precisa escolher entre tornar este repositório privado ou manter o código público com auditoria em outro destino privado; a segunda opção exige adaptar a confiança OIDC e o workflow. A consulta pública de Auth confirmou chave web e App ID coerentes com linvuu / 982052790317. A concessão humana de Firebase Viewer + Security Reviewer à conta pessoal ainda precisa de verificação. Esta ponte concede leitura de configuração, não administração total.
