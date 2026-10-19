# Camadas públicas — 16/10/2026

## Entrega

Felipe aprovou a direção da home e pediu continuidade nas outras camadas antes de alterar aulas. Preservadas as fotos acrescentadas pelo PR #266.

- Home: tons centralizados em tokens.css; composição preservada; ocre de texto levemente escurecido para passar 4,5:1. Validador passa a cobrir pares de contraste e rejeitar cores fixas nas duas folhas públicas.
- Catálogo e página do curso: cabeçalho, cartões, navegação por níveis e retomada seguem a mesma direção. Nenhum conteúdo de aula foi alterado.
- Assinatura: comparação reutilizada da home, oferta vigente identificada separadamente. Código de checkout, preços e direitos de acesso não foram alterados.
- Menu em português direciona Planos para /#planos. Âncoras aguardam a montagem de rotas lazy.
- Carregamento de identidade tem marca e status, evitando tela vazia.
- SEO: o bloco sem JavaScript é gerado no servidor por src/lib/metaRota.ts. Texto da home, título e descrição usam a mesma configuração da interface. Explicita que os novos planos estão em preparação. Versões inglês/espanhol preservadas.

## Validação

Tipos, build, regressão do HTML de SEO e contraste executados localmente no checkout sem a separação APK. Workflow adicional verifica home, catálogo, página do curso e assinatura em 1440, 390 e 320 px; salva capturas e testa seleção por quantidade, ausência de erro JavaScript e âncora da assinatura. O resultado desse workflow deve ser conferido antes de publicação.

A home publicada foi inspecionada em desktop; seleção Start limita a um idioma e permite desmarcar. Sem teste em aparelho físico, login real ou cobrança. Esses limites não são substituídos por screenshots de CI.

## Bloqueios reais

Novos planos precisam de preços e regras definidos por Felipe, produtos em ambiente de teste e autorização por idioma no servidor antes de vender. Nenhuma escolha da prévia concede acesso. A troca de idiomas proposta uma vez por ciclo continua pendente de confirmação comercial e implementação.

Android: o PR #263 compilou assembleDebug no GitHub Actions (execução 38971505468, sucesso), com CI e segurança verdes. A afirmação anterior de ausência de compilação está desatualizada. Separar e publicar o CORS de /audio antes de validar o APK evita depender de uma publicação conjunta. Permanecem testes em aparelho, compras Google Play, offline e release.

Robots: relatório recebido menciona somente www com rastreamento 11/10. Home e robots com www foram verificados redirecionando 301 à versão canônica. Não liberar /api/ nem material protegido por causa desse aviso. Uma inspeção atual por URL no Search Console ainda é necessária; não há garantia de indexação.

Inspeção por API do Search Console em 16/10: home sem www e /curso/en constam como enviadas e indexadas, robots permitido; www conserva estado antigo de bloqueio (último rastreamento 14/10). Isso não mede posição ou garante aparecer numa busca específica. O usuário não precisa alterar robots para liberar toda a aplicação.

Revisão responsiva encontrou 6px de excesso em 320px na home; tipografia e dimensões mínimas da demonstração foram ajustadas. Cota de artifacts do GitHub está cheia; screenshots compactas também são emitidas nos logs de teste, sem apagar arquivos existentes.
