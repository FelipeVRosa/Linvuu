# Preparação do lançamento web em português

A versão web já opera em produção. Esta mudança não inclui o APK nem altera preços.

## Cobrança

- Conta Stripe real com cobranças e repasses habilitados; cartão, Pix e boleto ativos, sem requisitos pendentes na consulta de 21/10/2026.
- Oferta atual preservada: mensal R$139; trimestral Pix R$291,90 ou cartão/boleto R$417; anual R$999.
- Os quatro planos futuros continuam como prévia; não são vendidos nem têm novos preços definidos.
- Notificações Stripe verificam assinatura e invalidam cache apenas do cliente afetado. A autorização continua consultando o Stripe, inclusive após reiniciar o servidor. Corpo original e segredo só no ambiente do Render.
- Portal de assinatura configurado para histórico, atualização do pagamento e cancelamento ao fim do período contratado.
- Aviso sobre atualização dos áudios antes da contratação, também no HTML pré-renderizado. Produção final de áudio fica para Azure.

## Verificação e limites

- Antes do deploy, produção respondeu 200 em /healthz, /robots.txt, /sitemap.xml e /assinatura. Assinatura sem noindex. API de assinatura sem token respondeu 401.
- Testes locais do webhook: assinaturas válidas/inválidas/expiradas, adulteração, eventos, duplicatas, isolamento entre clientes, disputas, repetição após erro, tipo/tamanho e configuração ausente. Nenhuma cobrança.
- A configuração real do webhook e o deploy devem ser confirmados depois do merge. Não considerar compra, login Google, entrega de e-mail, sincronização entre dispositivos ou indexação aprovados por estes testes.
- Um webhook assinado de verificação sem mudança financeira não substitui uma compra concluída.
