# Googlebot, rotas e seleção de páginas — 28/10/2026

## Evidência antes da correção

- Search Console, propriedade `sc-domain:linvuu.com.br`: sitemap de 89 URLs baixado em 28/10/2026 10:40 UTC, sem erros ou avisos. Isso não prova indexação. O tracker registrou 9 indexadas entre 81 URLs monitoradas na última checagem às 10:31 UTC; não representa a totalidade do domínio.
- Inspeção individual: `/` e `/livros` indexadas; `/curso/de`, `/curso/ru`, `/gramatica/ru` e `/es` descobertas mas ainda não indexadas, sem data de rastreamento. `/livros/de`, `/livros/es`, `/en/curso/br`, `/curso/en/dia/1` e a rota legada `/livro/gramatica-ru` retornaram desconhecidas ao Google. Esses dados são do índice e não equivalem ao teste em tempo real.
- Auditoria HTTP: `/gramatica/ru` tinha apenas 32 palavras no HTML recebido, enquanto o React carregava o material gratuito de `/api/gramatica/ru`, bloqueado pelo `Disallow: /api/`. A página recebia 200 e canonical correto, mas o bloqueio de recurso pode impedir o Google de ver o conteúdo renderizado. Não afirmar que esse é o único motivo da não indexação.
- As versões HTTP e `www` respondem com um único 301 para `https://linvuu.com.br/`. Inspeções de 28/10 mostram ambas como páginas com redirecionamento e Google selecionando a origem canônica; o erro de redirecionamento registrado em uma inspeção anterior não se repetiu no índice consultado.
- O sitemap tem 48 sessões gratuitas, 12 capítulos de amostra, sete páginas de curso, sete de gramática, seis livros e nove páginas gerais. Essas são sugestões ao Google, não uma restrição ao rastreio nem garantia de indexação. A qualidade editorial precisa ser avaliada página a página; números fixos de palavras não são critério do Google.

## Correção proposta

- Permitir apenas `/api/gramatica/` pelo robots para renderização, mantendo a regra geral que desaconselha rastreio de `/api/`. A resposta da API continua com `X-Robots-Tag: noindex`, `private, no-store` e a mesma autorização no servidor: anônimos recebem somente tópicos das primeiras oito sessões.
- Incluir no HTML inicial das gramáticas prioritárias títulos e explicações dos mesmos tópicos gratuitos mostrados a visitantes. Conteúdo pago continua fora do HTML público; não entregar versões diferentes para robôs.
- Remover o link da vitrine para `/livro/gramatica-ru`, rota antiga que não deve ser promovida. Mantê-la acessível com `noindex` nesta mudança para não quebrar leitores existentes. Não está no sitemap. Qualquer redirecionamento futuro requer confirmação de equivalência do conteúdo e avaliação do acesso de assinantes.
- Testar as sete gramáticas prioritárias, ausência de tópicos pagos no HTML, filtragem anônima da API, `noindex` da API e os canonicals e status de todas as 89 URLs. Isso testa comportamento local, não prova uma visita do Googlebot real.

## Fontes e ferramentas

- Google: [documentação sobre JavaScript e rastreamento](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) e [solicitação de novo rastreamento](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl). Uma solicitação ou um sitemap não garantem indexação.
- Repositórios públicos de referência, inspecionados em 28/10: [GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse), [GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) e [google/robotstxt](https://github.com/google/robotstxt). São ferramentas de diagnóstico, não aprovações do Google nem dependências instaladas automaticamente.

## Verificar depois do deploy

Confirmar o SHA no Render; checar `robots.txt`, conteúdo HTML, API sem credenciais, proteção de dados pagos, URL antiga e sitemap em produção. Depois, usar a inspeção em tempo real no Search Console para algumas páginas prioritárias e registrar os resultados. O serviço de inspeção de índice não aciona indexação; não reenviar o sitemap sem necessidade se suas URLs não mudaram.
