# Pixel TikTok — 30/10/2026

- Conta TikTok Ads `7702478594135719956`; pixel `DBIBAAJC77UF91063L30`, Linvuu — site.
- Código web é carregado somente com a nova autorização publicitária v2, que informa Meta e TikTok em PT, EN e ES. Escolhas antigas v1 eram específicas da Meta e não autorizam TikTok. Revogação impede novos eventos.
- `page()` mede visitas a rotas públicas permitidas; `InitiateCheckout` só ocorre após retorno da URL do checkout, não representa compra. Áreas de conta e parâmetros de URL inesperados são excluídos. Não há identificação avançada nem eventos de compra/CAPI.
- No painel de configuração: correspondência avançada automática e Enhanced Data Postback foram desativados; cookies primários permanecem habilitados sob consentimento.
- O teste oficial confirmou recebimento pelo navegador de `landing_page_view` e `engaged_session` em `/curso/de`. A plataforma gerou esses eventos adicionais de sessão; o texto de privacidade informa isso. Ao navegar para rota não permitida, o site chama a revogação de consentimento dos SDKs já carregados e só volta a habilitá-los quando retorna a uma rota pública elegível.
- Testes isolados cobrem recusa, autorização, mudança de rota, checkout e revogação. Teste em navegador nos três idiomas intercepta bibliotecas e não envia dados. Uma inspeção adicional carregou a biblioteca oficial em ambiente local, interceptou solicitações de eventos e não registrou exceções; ela não confirma recebimento no painel do TikTok. Confirmar em Test Events após o deploy.
- Sem campanha, cobrança ou orçamento criado. Cliente informou gasto atual zero; orçamento futuro depende de resultado.
