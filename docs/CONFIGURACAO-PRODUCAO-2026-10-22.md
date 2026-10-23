# Configuracao de producao — 22/10/2026

## Publicacao

Dominio principal: https://linvuu.com.br. Cloudflare fornece DNS/proxy; o servidor Node/Express esta no Render (servico linvuu). APP_URL usa o dominio principal. O subdominio publico onrender.com foi desativado apos conferir webhook Stripe, dominios Auth e base padrao do build Android.

O Render usa `npm ci && npm run build`, Node 22 e `autoDeployTrigger: checksPass`. O blueprint acompanha esses parametros, mas nao e aplicado automaticamente ao servico existente. A instancia web ainda estava em Free na verificacao: contratar computacao sem hibernacao exige decisao de custo. O campo buildPlan nao e o plano da instancia web.

## TLS e cache

Cloudflare: Full (strict), minimo TLS 1.2 e Always Use HTTPS. O redirecionamento www preserva caminho e query.

APIs, /healthz, /readyz, robots e sitemap possuem bypass de cache compartilhado. A regra de estaticos se restringe a JS/CSS/fontes em /assets, imagens em /livros e /brand e MP3 publicos em /audio. Ela respeita os TTLs da origem; nao inclui HTML nem indices JSON de audio.

## Liveness e prontidao

- `/healthz`: processo atendendo. Continua sendo o healthcheck leve do Render, sem depender de terceiros.
- `/readyz`: HTTP 200 quando configuracao canonica, credencial/metadados Firestore e preco recorrente Stripe BRL live estao acessiveis; 503 quando alguma verificacao falha. Retorna somente `ok` e `checkedAt`, sem detalhes internos.
- Prazo total de 5 segundos, cache de 60 segundos e uma verificacao simultanea por processo. Um trabalho que ignore cancelamento nao se acumula em novas consultas.
- Stripe e Firebase sao consultados apenas por leitura. A resposta nao comprova entrega de webhook, regras de acesso de alunos, login em navegador ou sucesso de compra; esses exigem verificacao propria.
- Logs de falha identificam apenas a categoria (configuracao, firebase, stripe, timeout), sem erro bruto, token ou conteudo.

## Politica de indexacao

Apresentacoes publicas de cursos, catalogo /cursos, /assinatura e oito sessoes gratuitas por curso em portugues podem ser indexadas. Sessoes pagas sem amostra publica retornam noindex, mantendo o acesso normal pela aplicacao. Links estaticos anunciam somente amostras existentes no idioma. O sitemap nao limita a descoberta de URLs e nao garante indexacao; remover links nao substitui noindex ou autorizacao.

## Firebase: estado observado, sem publicacao de regras nesta mudanca

O console do projeto linvuu foi acessivel com a conta Linvuu. Os dominios autorizados incluem linvuu.com.br e www.linvuu.com.br. O conector Composio que retornou 403 nao deve ser confundido com a sessao administrativa do console nem com o login do aluno.

As regras publicadas em 17/10 diferem de firestore.rules: /users possui validacao de tipos, email do token, tamanho e timestamp mais estrita; ainda existem regras legadas para /usuarios (proprio usuario) e /lessons (leitura publica). A regra de newsletter presente na referencia do repositorio nao aparece na versao publicada. Nenhuma regra foi ampliada ou removida nesta mudanca. Antes de uma proxima publicacao, reconciliar os caminhos legados, testar isolamento e tratar a captura de newsletter, sem substituir a versao publicada pela referencia menos estrita.

## Reversao e validacao

Conferir checks do commit, deploy live e GETs em home, assinatura, robots, sitemap, aula gratuita, sessao paga sem login, /healthz e /readyz. Conferir que o hostname tecnico retorna 404. O teste de prontidao nao e o criterio de reinicio automatico, para evitar que falha temporaria de terceiro provoque reinicios em ciclo.

Reverter codigo por PR/revert e confirmar o commit do deploy. Configuracoes Cloudflare e Render sao externas ao commit: registrar antes/depois, e reverter somente o parametro responsavel se houver regressao. Nao resolver um erro de TLS desligando validacao de forma permanente. Nunca guardar chaves privadas no repositorio ou em relatorios.
