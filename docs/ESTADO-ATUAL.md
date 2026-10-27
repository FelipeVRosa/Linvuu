# Estado atual da Linvuu
Registro inicial: 26/10/2026 (Brasília). Este arquivo é o ponto de entrada comum; atualizar a cada mudança material.
## Baseline verificado
- Repositório: FelipeVRosa/Linvuu, privado. Main consultada: `751c3b834a08afa913316839e14b32e3c33ad75e`.
- Render: serviço linvuu, deploy `dep-dbecv495efls73asv7ig` live, mesmo SHA; conclusão em 24/10/2026 15:34:29 UTC. Trigger checksPass. Não confundir deploy live com saúde de todos os fluxos.
- Site: https://linvuu.com.br. React/Vite/TypeScript + Express; não é um backend PHP.
- Auth e Firestore: projeto linvuu. Regras versionadas em firestore.rules; igualdade com regras publicadas AINDA NÃO verificada nesta rodada.
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
## Achados implementados nesta branch, ainda não publicados
- Política padrão private/no-store e X-Robots-Tag noindex em /api, /healthz e /readyz, incluindo falhas antes dos handlers.
- Áudio pago deixa de anunciar cache de 1 hora.
- Livro protegido resolve caminho com import.meta.dirname (ESM); antes referenciava __dirname não definido.
- Teste de middleware e HTTP real para 401/403/404; teste existente de IP passou. Sem checkout real nem acesso pago em produção.
## Pendências por prioridade
1. Esperar/verificar CI deste PR; merge autorizado pelo Felipe, condicionado aos checks. Depois confirmar novo SHA no Render e respostas HTTP.
2. Obter as URLs individuais de redirecionamento/robots no Search Console e testar cadeias e política de indexação de cada uma.
3. Autenticação administrativa Firebase/Google Cloud: conector Composio disponível é apenas público de Auth e retornou 403; plugin Firebase instalado, mas nenhum método remoto administrativo exposto nesta sessão. Comparar ruleset/release publicado, IAM e restrições de chave com credencial administrativa apropriada.
4. Concluir revisão de backend, conteúdo servido, idiomas, dependências e histórico de segredos. 164 arquivos de src foram recuperados; isso NÃO equivale a auditoria integral aprovada.
5. Identificar os supostos vazamentos PHP por URL/arquivo/evidência. Nenhum PHP encontrado no inventário de src e scripts consultado; duas sondagens públicas deram 404. Não concluir ausência em todo o histórico.
6. Checagem HTTP das 81 URLs concluída: todas 200, sem redirecionamentos, canonical próprio e sem noindex. Renderização completa de cada página ainda não validada.
7. Auditar sessões autenticadas, assinatura/revogação, respostas pagas, áudio, renderização e navegação de idioma com contas de teste.
## Documentação histórica
CONTEXTO.md e PARCERIA-IA.md registram rodadas antigas e contêm informações superadas (áudio, progresso, pendências, marca e ofertas). Consulte arquivos atuais e evidências antes de agir. Não propagar preços ou níveis antigos deste histórico.
## Vuu: referência de design
Figma: https://www.figma.com/design/GHaocmKtqRw2EQ1QqVx4YD
Matriz inicial com oito estados. Estudos gerados em 3D são imagens conceituais, não arquivos .blend nem animações finais.
