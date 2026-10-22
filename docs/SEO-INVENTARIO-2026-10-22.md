# Inventário de rotas e política pública de indexação — 22/10/2026

## Problema e comportamento corrigido

A vitrine React anunciava todos os endereços de sessões para visitantes: inglês, por exemplo, 248 links, dos quais 240 pagos. O HTML inicial e o sitemap enxutos não impediam essa descoberta após JavaScript. Agora as amostras mantêm seu endereço; sessões pagas na vitrine e na trilha de visitantes levam à assinatura. Contas autenticadas e o app conservam os destinos de sessões. Isso é navegação; a autorização continua sendo do servidor.

O noindex e o canonical agora acompanham a navegação da SPA. Login, conteúdo pago, páginas inexistentes e versões sem tradução não podem contaminar uma página pública com metadados residuais. Capítulos públicos não recebem noindex temporário enquanto carregam. Títulos de sessão são distintos. Páginas noindex não anunciam hreflang. Falha dos metadados retorna 503/noindex em vez de uma página genérica 200. A página privada de gramática tem HTML reconhecido como 200/noindex, preservando a proteção do conteúdo.

## Cobertura e evidências

- 1.840 números de sessão nos sete índices atuais, combinados com os três idiomas do site: 5.520 rotas.
- Teste de todas as combinações: status, canonical, noindex, títulos distintos, ausência de pré-render pago e destinos de navegação para visitante, conta e app.
- 5.673 páginas consultadas por HTTP no servidor local e três aliases: 5.676 requisições; 251 redirecionamentos esperados.
- Renderização de 18 páginas React reais: seis vitrines e trilhas das sessões 1 e 9; nenhum href pago para visitante. A trilha lateral recolhe os grupos não abertos, portanto não se exige que mostre um link de assinatura quando só a aula gratuita está expandida.
- Teste de transição de robots: login → home → sessão paga → outra sessão paga → amostra. Sem acumulação ou herança de noindex.
- 81 URLs canônicas e indexáveis no sitemap. Robots, lista do sitemap e autorização do backend foram preservados.
- TypeScript, build, SEO público, segurança HTTP/CORS/limites, design e progresso foram verificados localmente.

Esses testes usam código e servidor local sem credenciais reais. Não significam publicação concluída nem indexação garantida pelo Google.

## Limite das 1.849 URLs do Search Console

A exportação oficial forneceu mil exemplos, limite do Google. Classificados: 839 sessões pagas atuais, 133 sessões antigas de português, uma página antiga de português, 21 amostras atuais, cinco apresentações de cursos e uma página de gramática. Nenhum desses exemplos excede os limites de sessão conhecidos do projeto.

849 URLs históricas não foram expostas individualmente pelo Google. A revisão exaustiva das rotas atuais cobre o que a aplicação gera, mas não substitui a identificação dessas 849 linhas históricas. Não afirmar que toda URL histórica foi individualmente consultada.

A lista do relatório registra descoberta, não exibição na pesquisa. Noindex e redirecionamentos podem permanecer como exclusões legítimas depois do próximo rastreamento. Não há meta de zerar esse contador nem uso de remoção em massa.

## Publicação

O PR precisa dos workflows aprovados antes do merge/deploy. Em 22/10, os checks do PR #315 não iniciavam por pagamento recusado ou limite de gastos do GitHub Actions. A Render está configurada para checksPass. Não desativar o gate nem alterar cobrança nesta correção.

Depois do deploy: conferir o SHA ativo, oito links gratuitos e zero hrefs pagos nas vitrines anônimas, noindex em sessão paga e ausência dele nas amostras, canonical após navegação, 301 dos aliases, 404 de URL inexistente, robots/sitemap válidos e /healthz e /readyz. Só depois solicitar nova leitura ao Google se necessário; não repetir pedidos de indexação em laço.
