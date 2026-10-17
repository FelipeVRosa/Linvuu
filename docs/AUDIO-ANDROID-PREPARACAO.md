# Preparar o servidor para áudio remoto no Android

Mudança pequena extraída do PR #263: aplicar a política CORS existente também em /audio, para índices e MP3 gratuitos. Mantém a lista restrita de origens do Capacitor; não libera origens arbitrárias nem altera autenticação, áudio pago ou limites da API.

Sequência: publicar este PR; verificar cabeçalhos de /audio/en/index.json com Origin https://localhost e origem não autorizada; depois atualizar o PR #263 sobre a main e validar o APK em aparelho. O APK já compilou no workflow Android 38971505468, mas compilação não equivale a teste em aparelho.

Validação: teste HTTP inclui origem nativa permitida, origem externa sem permissão CORS e rotas pagas exigindo autenticação. Nenhuma compra Play habilitada. Não há cache offline nesta etapa.
