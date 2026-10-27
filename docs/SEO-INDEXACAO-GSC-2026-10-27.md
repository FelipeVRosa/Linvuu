# Diagnóstico Googlebot / Search Console — Linvuu (27/10/2026)

> Auditoria cruzada entre **Google Search Console (URL Inspection API)**, **GSC Wizard (on-page)**, Cloudflare (DNS, regras de cache, bot e redirects), GitHub, Render e orientação oficial Google. Documento de evidência; não equivale a indexação automática. A consulta pode mudar quando o Google atualizar seus índices.

## Resultado central (não alterar código por conjectura)

A URL canônica `https://linvuu.com.br/` foi **efetivamente rastreada pelo Googlebot MOBILE em 2026-10-27 07:10:35 UTC**, com:
- `verdict=PASS`, `coverageState=Submitted and indexed`
- `robotsTxtState=ALLOWED`
- `pageFetchState=SUCCESSFUL`
- `indexingState=INDEXING_ALLOWED`
- `googleCanonical=userCanonical=https://linvuu.com.br/`.

[Inspeção oficial da home](https://search.google.com/search-console/inspect?resource_id=sc-domain:linvuu.com.br&id=slvJs3kQAtNn8jNoX3jw2g).

**Portanto, o bloqueio generalizado atual da home por robots.txt NÃO se confirma.** Relatórios históricos podem conter bloqueios antigos ou URLs diferentes, inclusive HTTP/www. Não considerar "URL desconhecida" = "bloqueada por robôs": o Google nem chegou a registrar rastreamento.

## 5 páginas alvo para descoberta/indexação

Inspecionadas pela API em 27/10; nenhuma delas está comprovadamente indexada:

| URL | Estado GSC | Inspeção |
| --- | --- | --- |
| `/curso/de` | URL desconhecida pelo Google (última inspeção) | [abrir](https://search.google.com/search-console/inspect?resource_id=sc-domain:linvuu.com.br&id=mWwvQk9da4LSB4CgEKRkSw) |
| `/curso/ru` | URL desconhecida pelo Google | [abrir](https://search.google.com/search-console/inspect?resource_id=sc-domain:linvuu.com.br&id=acdr8RPVxGpyaSjDjBSHWA) |
| `/livros/de` | URL desconhecida pelo Google (última inspeção) | [abrir](https://search.google.com/search-console/inspect?resource_id=sc-domain:linvuu.com.br&id=bvI4T9zd-940ZnWTXRLzjA) |
| `/livros/es` | Descoberta, ainda não indexada | [abrir](https://search.google.com/search-console/inspect?resource_id=sc-domain:linvuu.com.br&id=byIU3vFbwcvkHyCZaBrywQ) |
| `/es` | Descoberta, ainda não indexada | [abrir](https://search.google.com/search-console/inspect?resource_id=sc-domain:linvuu.com.br&id=wHfLmn5FCbm1mNMHmhsG0A) |

As páginas acessadas pela auditoria externa retornam HTTP 200, são indexáveis e declararam canonical da própria URL. Isso não obriga Google a indexar. Outras URLs indexadas pela API: `/en`, `/assinatura`, `/cursos`, `/livros`, `/curso/en`, `/por-que-linvuu`, `/contato`, além da home. A cobertura muda com as reconsultas: contar como um conjunto de inspeções, não como relatório completo de 81 URLs.

## Robôs, rede e redirecionamentos

- Regras atuais do `public/robots.txt`: `User-agent: *`, `Allow: /`, `Disallow: /livro/` e `Disallow: /api/`; sitemap `https://linvuu.com.br/sitemap.xml`. O plural `/livros/` e `/curso/` **não** é bloqueado.
- Render entrega explicitamente `/robots.txt` como `text/plain` e `/sitemap.xml` como XML, com cache máximo de 1h no origin; o Cloudflare **não faz cache** desses caminhos por regra.
- Cloudflare zona ativa, Bot Fight Mode `false`, `is_robots_txt_managed=false`, DNS apex A proxied e www CNAME proxied; `Always Use HTTPS=on`, redirecionamento `www` para apex HTTPS via regra 301.
- O Google registrou para `http://linvuu.com.br/` um **Redirect error histórico** e `https://www.linvuu.com.br/` como **Page with redirect** apontando para a home HTTPS. A auditoria externa atual seguiu com sucesso HTTP, HTTPS, www e não-www até a home canônica, sem loop reproduzido. Não remover regra de redirecionamento válida apenas para limpar erro histórico.
- No Cloudflare não se encontrou mecanismo Bot Fight ativo nem regra personalizada de firewall na lista de rulesets; a presença de WAF gerenciado não prova que nenhuma requisição jamais seja bloqueada. Logs de requisições do Render não retornaram entradas nesse período, portanto não há contagem confiável por Googlebot.

## Registro e reenvio efetuados

- Sitemap `https://linvuu.com.br/sitemap.xml` contém **81 URLs**; validado como XML HTTP 200, sem erros/avisos no histórico de download em 22/10.
- **Reenviado e ACEITO** pelo Google Search Console em **2026-10-27 07:52:07 UTC**; `submitted=1`, `accepted=true`, `isPending=true`. O Google realizará nova leitura quando agendar. Reenviar não força a indexação individual.
- Anotação criada na propriedade GSC Wizard em 27/10: "Linvuu: correções técnicas publicadas e sitemap reenviado". É registro da ferramenta, não recado entregue ao ranking Google.
- Rastreador em 27/10, antes das inspeções complementares: 81 URLs; **7 indexadas, 17 não indexadas e 57 não inspecionadas**. Não é índice completo, pois pendentes não têm estado verificado.

## O que só pode ser concluído na interface Search Console

A **URL Inspection API não oferece `Test live URL` e `Request indexing` por API**. Para cada URL alvo acima, na propriedade de domínio, clicar **Inspecionar → Testar URL publicada → Solicitar indexação** se a URL for elegível. Fazer uma vez, não insistir repetidamente. Não usar a Google Indexing API para páginas de cursos/livros: a documentação oficial restringe o uso a `JobPosting` ou `BroadcastEvent` embutido em `VideoObject`.

Acompanhar também: **Indexação > Páginas** (amostras reais do motivo "Bloqueada pelo robots.txt" e datas), **Estatísticas de rastreamento**, **Ações manuais**, **Problemas de segurança**, **Remoções**. A API disponível não expõe esses relatórios com a mesma amplitude da UI; não marcar como verificado.

## Qualidade, descoberta e próximos passos

- Auditor on-page externo: home, /en, /es HTTP 200/indexáveis sem alertas; /livros tem um aviso **médio** por ter 92 palavras, outras landing pages têm alertas leves por textos curtos ou títulos, não condenações do Google.
- Código já rende HTML inicial com links HTML reais a cursos e livros; preservar. Não inserir texto "SEO" que não apareça ao usuário nem inventar material didático.
- Fazer revisão editorial de páginas de apresentação com textos específicos, publicados tanto para usuários quanto para Google; usar conteúdo próprio, objetivos de aprendizagem e amostras reais.
- Links confiáveis relevantes de canais institucionais podem acelerar descoberta; evitar compra de backlinks.
- Site novo pode levar dias/semanas; nenhum conector promete inclusão no índice no próximo rastreio.
- Search Analytics do período até 24/10 registrou **14 cliques/66 impressões**, entre eles home 11 cliques/56 impressões; os cliques podem ser do proprietário, mas as impressões são evidência de que a home já apareceu na pesquisa. Não confundir "aparece nas SERPs" com "gera tráfego qualificado".

## Nota interna (critérios qualitativos, não auditoria certificada)

- Infraestrutura/publicação 91/100: releases e saúde reais, sem monitoramento total de ponta a ponta.
- Segurança automatizada 80/100: CI, segredo e Firestore em emulador, falta autorização com contas reais.
- SEO técnico 84/100: crawl, canonical, robots, redirects e sitemap funcionais, alertas on-page remanescentes.
- **Indexação/alcance orgânico 35/100:** pouco volume, grande conjunto de URLs ainda não indexadas ou não inspecionadas.
- Vendas web 75/100: Stripe live, webhook e /readyz existentes; ausência de compra comprovada ponta a ponta.
- APK / Google Play 60/100: prévia/contraste automatizados, sem AAB homologado nem teste físico.
As notas não provam prontidão para vendas; o bloqueador comercial segue [#380](https://github.com/FelipeVRosa/Linvuu/issues/380).

**Fontes externas oficiais**:
- [Google: inspeção, teste ao vivo e solicitar indexação](https://support.google.com/webmasters/answer/9012289)
- [Google: pedir novo rastreamento](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Google: limitações da Indexing API](https://developers.google.com/search/apis/indexing-api/v3/using-api).
