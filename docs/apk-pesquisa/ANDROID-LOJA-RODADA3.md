# Android e preparação para loja — 20/10/2026

Base09582be, PR263 em rascunho. Sem publicação, cobrança, exclusão real de usuário ou alteração do website. Preparação não equivale a aprovação da Google Play.

## Entregue em código

| Camada | Implementação | Limite |
|---|---|---|
| Identidade | Frame reforçado no adaptativo/monocromático; PNGs legados, redondo e splash com Linvuu | Confirmar cortes do launcher e início em API24/30/36 |
| Splash | Tema SplashScreen com fundo, ícone e tema posterior explícitos | Não validado em aparelho |
| Barras | EdgeToEdge + SystemBars por tema; tratamento native dos insets | Confirmar Android/WebView antigos, gestos,3botões e teclado |
| Privacidade local | Backup e extração desativados, FileProvider não utilizado removido, cleartext bloqueado | Não é proteção contra dispositivo comprometido |
| Persistência | Plugin LinvuuStorage com SharedPreferences privado, migração/hidratação antes do React e espelho serializado de alterações | Apenas estudo/preferências permitidos; sem tokens Firebase/áudios. Limpar dados/desinstalar apaga. Falhas avisadas; último write pode não completar se processo for encerrado abruptamente |
| Exclusão | Conta e Ajustes: solicitação por e-mail, endereço alternativo e aviso de envio manual | Não apaga automaticamente. Atendimento/identidade/prazo, fornecedores e página pública seguem pendentes |
| Cobrança | Laboratório RevenueCat Test Store com chave pública test_, compra/restauração, preços vindos do catálogo | Desligado no build padrão. Não é Google Play sandbox; não concede acesso no servidor |

A dependência de compras já existia no projeto. A integração normal Stripe e a autorização do servidor não foram modificadas. Não há nova coleta de documento/senha no fluxo de exclusão.

## Políticas oficiais verificadas

1. **Conta e dados:** um app que cria contas precisa de caminho de solicitação no app e recurso externo acessível, registrado no Play Console. Email ou formulário podem iniciar o atendimento. A exclusão exige tratamento dos dados associados e dos fornecedores; retenção legítima deve ser explicada. Não declarar concluída a exclusão ao apenas abrir o e-mail.
   - https://support.google.com/googleplay/android-developer/answer/13327111
   - https://support.google.com/googleplay/android-developer/answer/10144311
2. **Cobrança:** assinatura digital exige desenho conforme a política aplicável ao país. Não adicionar Pix/Stripe externo ao APK como atalho. Faixa de testes pode cobrar dinheiro real quando a conta não é testadora de licença. Test Store testa o SDK, não comprova Google Play Billing.
   - https://support.google.com/googleplay/android-developer/answer/10281818
   - https://developer.android.com/google/play/billing/test
   - https://www.revenuecat.com/docs/test-and-launch/sandbox
3. **API:** submissões novas/atualizações exigem API36 desde31/08/2026; projeto já usa36. Conferir versão de Billing efetivamente resolvida, assinatura do AAB e requisitos de publicação no Console.
   - https://support.google.com/googleplay/android-developer/answer/11926878
   - https://developer.android.com/google/play/billing/deprecation-faq
4. **Verificação:** verificar identidade/desenvolvedor e registro do pacote com o nome jurídico correto. Há aplicação regional desde30/09/2026 em lojas participantes no Brasil; não presumir conta já verificada.
   - https://developer.android.com/developer-verification
5. **Dados e publicação:** preencher Data safety com os fluxos reais (Firebase, conta/email/progresso, medição consentida, compras quando ativadas); conferir política de privacidade, acesso dos revisores, classificação etária, público-alvo, conteúdo e direitos. Não afirmar que o app não coleta dados apenas porque não exige login para aulas grátis.
   - https://support.google.com/googleplay/android-developer/answer/10144311
6. **Compatibilidade:** avaliar páginas16KB se houver bibliotecas nativas. A página oficial atual detalha compatibilidade e prazos; conferir no AAB final e no Console, sem presumir conformidade apenas pelo target36.
   - https://developer.android.com/guide/practices/page-sizes

## Caminho para finalizar sem alterar o site atual

- Preparar uma página externa de exclusão e política de retenção em mudança separada. Ela precisa estar publicada e testada antes de declarar conformidade. O website atual não foi alterado nesta rodada.
- Formalizar atendimento dos pedidos: verificar titularidade sem pedir senha, identificar dados/fornecedores, cancelar ou orientar assinatura com consentimento, excluir/anonomizar o que for devido e confirmar ao solicitante. Não apagar registros fiscais indiscriminadamente. Definir prazo operacional e retenção com respaldo adequado; nenhum prazo inventado foi inserido no app.
- Criar/configurar projeto de Test Store, produtos e chave pública somente no ambiente de teste. O app não aceita chave Google/produção nesse modo. Variáveis: VITE_BILLING_MODE=revenuecat-test-store e VITE_REVENUECAT_TEST_KEY=test_… . Nunca armazenar chaves no Git.
- Depois: Google Play Console, app com package com.linvuu.app, testers de licença, produtos/baseplans/ofertas, RevenueCat vinculado e verificação de direitos no servidor. Testar sucesso/cancelamento/pendente/renovação/expiração/reembolso/restauração/troca de conta. Não ativar checkout real antes disso.
- Testar armazenamento após matar processo/limpar cache, leitura ampliada, barras/teclado, splash/launcher e TalkBack no Redmi. Clear data/desinstalação não preservam dados do visitante.

## Evidência

Teste de guardas/metadados em scripts/testar-loja-apk.ts e design/apk/loja-rodada3-testes.json. Build Vite/TypeScript não substituem compilação Gradle e dispositivo. Verificar estado atual do CI do commit antes de instalar.
