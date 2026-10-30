# Pixel Meta — Linvuu (30/10/2026)

O conjunto `Linvuu — site` foi criado no portfólio da Linvuu, com ID público `28831394486482407`. O mesmo pixel atende Facebook e Instagram; isso não conecta automaticamente as contas de anúncios nem prova que dados foram recebidos.

Esta branch prepara o pixel na web com preferência de publicidade independente da análise PostHog, em português, inglês e espanhol. Sem aceite não carrega o SDK. Após aceite, envia `PageView` em páginas públicas permitidas e `InitiateCheckout` quando o servidor devolve uma URL de checkout. Não registra `Purchase`: uma compra só deve ser contada depois de confirmação confiável do Stripe. Em URLs com parâmetros inesperados, ou em rotas de conta/autenticação/aulas, esta implementação não chama o pixel. Revogação envia o comando de revogação ao SDK e bloqueia novos eventos pela aplicação. O SDK da Meta recebe dados de navegação, conforme a política indicada ao visitante.

Os cabeçalhos CSP autorizam somente os domínios Meta necessários ao SDK e seus pedidos; o site não usa script inline. As alterações não ativam o pixel no APK. A política e os controles não são uma auditoria completa de comportamento dos navegadores ou de terceiros.

Testes locais: tipos web e APK; teste isolado sem rede para aceitação, recusa, revogação, rotas, parâmetros e checkout; navegador simulado em PT/EN/ES com o SDK interceptado; build e testes de segurança. Após CI, revisão e deploy, validar um evento de teste no Gestor de Eventos com o visitante autorizando publicidade e verificar CSP real. Até isso, não declarar eventos recebidos ou vendas atribuídas.

TikTok, Pinterest, LinkedIn, Google Ads/YouTube e X possuem sistemas e identificadores próprios: perfil conectado não demonstra tag ativa nem acesso à conta de anúncios. Inventariar cada conta e o ID antes de integrá-las. Não criar contas duplicadas, gastar em campanhas ou inventar eventos de venda.
