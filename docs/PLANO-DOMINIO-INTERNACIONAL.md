# Plano: domínio e lançamento internacional (proposta, 30/10/2026)

**Estado:** proposta aceita pelo Felipe em conversa; **nada foi executado**. Este documento não altera domínio, DNS, Render, Stripe, Firebase nem o APK. Cada etapa abaixo precisa de tarefa explícita, teste antes e plano de volta.

## Fatos verificados em 30/10/2026 (somente leitura)
- `linvuu.com`: sem DNS e sem registro (RDAP Verisign 404). `www.linvuu.com`: sem DNS. Variações (.app, .co) **não** foram consultadas.
- `linvuu.com.br`: responde 200 pela Cloudflare; `www` faz 301 para o domínio sem `www`.
- `robots.txt` aponta para `https://linvuu.com.br/sitemap.xml` (89 URLs na leitura).
- O domínio `linvuu.com.br` aparece em 22 pontos do código (`src/config/site.ts`, `src/lib/api.ts`, `src/lib/audio.ts`, `src/lib/metaRota.ts`, `server/prontidao.ts`, scripts de teste de SEO, entre outros).
- O APK (`com.linvuu.app`, `capacitor.config.ts`) empacota o site e chama a API do domínio de produção; apps instalados continuam apontando para o domínio antigo.
- `docs/INTERNACIONAL.md` já recomenda um domínio com idioma em caminho (`/en`) e `hreflang` por idioma.

## Etapas (ordem sugerida)
| # | Etapa | Quem | Pronto quando |
|---|---|---|---|
| 1 | Marca: consultar "Linvuu" no INPI e nos mercados-alvo (EUA, UE, Reino Unido) | Felipe + advogado/despachante | resultado por escrito |
| 2 | Titularidade: domínios, conta de pagamento e conta de desenvolvedor em nome da empresa (CNPJ) | Felipe | contas no nome da empresa |
| 3 | Registrar `linvuu.com` (+ opcionais `.app`, `.co`) e manter `linvuu.com.br` | Felipe | domínios no painel do registrador, renovação automática |
| 4 | Site no `.com` com `/pt-br`, `/en`, `/es`; `hreflang`; sitemap por idioma; propriedade de domínio no Search Console | sessão principal | CI verde, URLs respondendo 200 em staging |
| 5 | `linvuu.com.br` passa a redirecionar 301 para `/pt-br` no `.com` (página a página) | sessão principal + Felipe (DNS/Cloudflare/Render) | amostra de URLs antigas redireciona, Search Console com mudança de endereço |
| 6 | Firebase Auth: acrescentar o novo domínio aos domínios autorizados; revisar CORS do backend e regras que citem o domínio | sessão principal | login testado em ambos os domínios |
| 7 | E-mail do domínio novo (SPF, DKIM, DMARC) | Felipe | testes de entrega |
| 8 | Nova versão do APK apontando para o domínio novo; domínio antigo continua respondendo | sessão principal + Felipe (Play Console) | teste em aparelho; ficha da loja por país |
| 9 | Pagamentos internacionais: moeda, preço por país, imposto (VAT / sales tax) | Felipe (decisão) | tarefa própria; não tocar em Stripe/preço antes |

## Riscos
- Indexação no Google ainda incompleta; troca mal feita pode piorar. Fazer redirecionamentos 1 a 1, nunca para a home.
- O webhook do Stripe hoje usa `linvuu.com.br`; só trocar com teste controlado e manter o endereço antigo ativo.
- Google Business Profile normalmente exige endereço físico ou área de atendimento; um curso 100% online pode não se qualificar (checar as regras do Google).
- Nada aqui é aconselhamento jurídico ou tributário.

## Reversão
Cada etapa mantém o domínio anterior funcionando; reverter é voltar o DNS/redirecionamento e a versão anterior do deploy.
