# Passagem de contexto: site e SEO — 27/10/2026

Este registro é compartilhado com Claude e outros colaboradores. Confirme sempre a situação atual no GitHub, no site e nos serviços: um teste local, um PR e um deploy são evidências distintas.

## Direção do proprietário

- Prioridade: melhorar o site da Linvuu, sua identidade com o Vuu e a descoberta no Google. Livros B1–B2 estão em produção e ainda não estão disponíveis; não apresentá-los como prontos.
- O proprietário autorizou integrar e publicar as correções do site após validação. Os três repositórios estavam públicos na verificação desta integração por solicitação dele; ele decidirá quando voltá-los a privados. Não publicar credenciais, dados de alunos ou dados administrativos.
- Há arquivos de áudio acessíveis em repositório público; visibilidade pública não significa que conteúdo pago esteja protegido. A separação segura desse conteúdo ainda exige trabalho.
- O Android segue em teste; publicação e assinatura oficial dependem de validações e do processo de identidade empresarial. Não confundir a construção web do APK com lançamento.

## Integração do site

- Base inicial: `513549bf3aa1b5a148952d625e4bef02609a1a0c`. A integração foi preparada separadamente da árvore local com alterações de pagamento e Android que ainda precisam de testes próprios.
- Sitemap passa de 81 para 89 URLs: `/en/curso/br`, `/en/gramatica/br`, e `/gramatica/de`, `/gramatica/en`, `/gramatica/es`, `/gramatica/fr`, `/gramatica/it`, `/gramatica/ru`. Não houve remoções. Somente capítulos gratuitos 1 e 2 entram no sitemap. Não se fabrica `lastmod` para todas as páginas.
- O robots permite acesso à rota legada `/livro/gramatica-ru`, cujo HTML sinaliza `noindex`. Assets sem fingerprint revalidam; somente assets com fingerprint recebem cache imutável. Verificar cabeçalhos da origem e Cloudflare após deploy.
- Página inicial apresenta Vuu, oferta existente e mensagem de B1–B2; descrições de cursos e livros foram ampliadas, inclusive russo. Alterações de interface não comprovam compra real, preços Stripe nem entrega de acesso.
- Em testes locais passaram compilação do site, tipos, contraste, 89 URLs do sitemap por HTTP, inventário de 5.520 sessões, 5.673 respostas de rotas, regras de navegação e links públicos. Indexação depende do Google e não é garantida por sitemap.
- Após publicar: confirmar o commit do deploy, HTTP/canonical/cache de rotas, robots e sitemap, `noindex` da rota legada, e reenviar o sitemap no Search Console. Registrar resultados reais sem atribuir certeza a reindexação futura.

## Trabalho anterior e pendências

- PR #347 atualiza dependências e deve ser integrado somente após checagens compatíveis com a `main` atual.
- PRs #360 e #367 são rascunhos de pesquisa editorial e protótipo de gamificação, respectivamente; tarefas e validações estão incompletas. Preservar sem fingir conclusão nem lançar o protótipo como pronto.
- PR #385 descreve privacidade como estado atual, embora os repositórios tenham sido reabertos pelo proprietário. Revisar esse conflito antes de incorporar instruções; execuções antigas em vermelho podem não ter logs de etapa. Não apagar histórico para ocultar falhas.
- Verificação do checkout, de pagamentos reais e da assinatura oficial Android continua pendente. O Search Console reportava 9 das 81 URLs acompanhadas como indexadas na consulta anterior; isso não representa todas as URLs do domínio.
- A pasta local `C:\site\Linvuu` contém trabalho não publicado que deve ser preservado. Não sobrescrever, limpar nem integrar alterações paralelas sem examiná-las.

Mais detalhes de SEO: [SEO-ROTAS-2026-10-27.md](SEO-ROTAS-2026-10-27.md). As demais páginas de continuidade são snapshots históricos e podem estar desatualizadas.
