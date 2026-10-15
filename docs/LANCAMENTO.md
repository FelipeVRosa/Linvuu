# Plano de lançamento: app Linvuu (Android e iOS) e site

Versão 2, 10/10/2026. Substitui as recomendações anteriores de publicação. Dono: Linvuu (conta de organização, com CNPJ). Responsável técnico pelo repositório: Felipe.

## 1. Decisões já tomadas
- **Conta de organização** na Google Play (e na Apple Developer, depois) em nome da Linvuu, com CNPJ. Criada **no momento do lançamento**, não antes.
- **Compra no app: decidido (10/10/2026).** A primeira versão vende assinatura dentro do app pelo Google Play Billing, e o site continua vendendo pelo Stripe. O acesso vale pelas duas origens. Detalhes em `docs/COBRANCA-APP.md`.
- **Stripe** continua sendo o meio de pagamento do site. Chaves live só na data de lançamento.
- **Idiomas:** português primeiro; inglês e espanhol da interface depois (`docs/FUTURAS-MUDANCAS.md`).

## 2. Correções ao plano anterior (o que estava errado ou faltando)
| Item | Antes | Agora |
|---|---|---|
| Teste fechado de 12 testadores por 14 dias | Tratado como obrigação de qualquer conta | Aplica-se às contas **pessoais**. Com conta de organização, não é exigido. Confirme no Console. |
| Prazo para publicar | "Dias após a verificação" | **Sem prazo garantido.** A verificação de organização e a revisão da loja podem levar semanas. Planeje com folga. |
| Cobrança | Não aparecia no plano | **Pendência crítica.** Se o app vender conteúdo digital dentro dele, precisa da cobrança da loja. Sem isso, a versão vendida só pode ser grátis ou com compra fora do app, o que a loja pode recusar. Ver seção 4. |
| Teste em aparelho real | Mencionado | **Obrigatório** antes de qualquer envio. |
| Branch protection | Listada como feita | **Não disponível** no plano atual do GitHub para repositório privado. Exige GitHub Pro (ou repositório público). Sem isso, a regra "PR com CI verde" é de conduta, não técnica. |
| ESLint | Listado como pronto | **Não existe no projeto.** Precisa ser adicionado. |
| Ícone "a partir da marca" | Sugerido como geração | Use a marca já aprovada. Qualquer arte nova precisa da sua aprovação. |
| Feature graphic (1024×500) | "Sem alfa" | Sem transparência (24 bits). |
| Pacote do app | Não medido | Medir o AAB. Limite de 200 MB no módulo base; os áudios estão no pacote. |
| Target SDK | Citado | `targetSdkVersion 36` já configurado. O prazo para novos apps era 31/08/2026. |
| Requisito de "funcionalidade mínima" | Não citado | A loja recusa app que seja só um site dentro de um app. Planejar funções nativas (aulas baixadas, lembretes, modo offline) antes do envio. |
| Servidor | Render sem plano definido | Plano pago com health check `/healthz`, para o app não depender de serviço que hiberna. |
| Dados da organização | Não citado | CNPJ, contrato social, e-mail e site da empresa. Confirme os requisitos de verificação no Console. |
| Testadores | Não citado | Você precisará de **lista de testadores com contas Google** (Gmail ou Google Workspace). Ver seção 5. |

## 3. Fases
**Fase A: preparação técnica (agora, sem conta de loja)**
1. `CLAUDE.md` na raiz: stack, comandos, regras de marca, caminhos de documentação.
2. Workflow de AAB assinado, lendo os segredos do GitHub (`KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`). Sem as chaves reais, o workflow falha de forma clara. Validar o pipeline com uma keystore de teste, nunca com a de produção.
3. `versionCode` e `versionName` definidos e documentados em `docs/RELEASE.md`.
4. Medir o tamanho do AAB.
5. Lint e typecheck no CI (adicionar ESLint).
6. Ícone e gráfico de destaque a partir da marca aprovada, salvos em `assets/store/`.
7. `docs/STORE-LISTING.md` com título, descrição curta e completa, categoria e tags.
8. Revisão de `/privacidade` e `/termos` com o que o app coleta. Ver seção 6.
9. Firebase: `docs/FIREBASE-SETUP.md` com o que você faz no Console (domínios autorizados, regras, SHA-1 quando houver login nativo, registro do app Android com o package name definitivo).
10. Crashlytics preparado e **desligado** até o lançamento.

**Fase B: testes com testadores (antes da loja)**
1. **Faixa interna** no Console: testadores convidados por e-mail. Serve para validar o AAB com o Google Play, antes de qualquer público.
2. **Faixa fechada** com a lista grande de testadores. Validar com aparelhos diferentes (marcas, versões do Android, telas pequenas e grandes).
3. Coleta de feedback com formulário, separado por tema: login, áudio, pagamento, aulas, desempenho.
4. Critério de saída: nenhum erro bloqueante aberto, login e aulas grátis funcionando em todos os aparelhos testados.

**Fase C: lançamento**
1. Criar a conta de organização (CNPJ) e pagar a taxa de US$ 25.
2. Gerar a keystore de release e cadastrar os segredos no GitHub. Guardar uma cópia de backup da keystore em local seguro, fora do computador de trabalho. **Perder a chave de upload complica muito a publicação.**
3. Rodar o workflow de AAB, baixar o arquivo e enviar para a faixa de produção.
4. Capturas de tela em aparelho real (mínimo de 4, com o app em uso, 1080 px de largura).
5. Formulário de Segurança de Dados e política de privacidade publicada.
6. Envio para revisão.

**Fase D: iOS** (depois do Android estável): Mac ou workflow de macOS, conta Apple Developer da organização, regras de compra da App Store.

## 4. Cobrança dentro do app (decisão obrigatória)
- Conteúdo digital vendido **dentro** do app deve usar a cobrança da loja (Google Play Billing; compra no app na App Store). Não pode levar o usuário para o Stripe dentro do app.
- **Decidido:** integrar Google Play Billing na primeira versão (Opção B). Implica conta de organização aberta **no início do desenvolvimento**, porque sem o app cadastrado no Play Console não há como testar compras.
- Pendências de decisão e de verificação: regra de direcionamento para quem assina no site, plano trimestral no app, impostos das duas vendas. Ver `docs/COBRANCA-APP.md`.

## 5. Testadores (muitos, com a organização)
- A lista precisa de **contas Google** de cada testador. Peça o e-mail da conta Google, não o e-mail de contato.
- Termo de testador simples, com consentimento para uso de dados de teste, e canal de suporte (e-mail da organização).
- Use grupos de testadores no Console para separar faixa interna e fechada.
- Quem recebe o convite precisa aceitar pelo link da faixa. Acompanhe quantos aceitaram.
- Não prometa datas de lançamento aos testadores.

## 6. Privacidade e dados (LGPD)
- Identifique a organização como controladora dos dados, com CNPJ e um canal de contato do encarregado (DPO) ou responsável por privacidade.
- Mapeie os dados: conta (nome, e-mail), progresso de aulas, dados de pagamento (no Stripe, não no app), registros de acesso e falhas técnicas.
- Política de privacidade publicada, com o mesmo conteúdo do Formulário de Segurança de Dados.
- Exclusão de conta pelo próprio usuário, dentro do app e no site (exigência das lojas e da LGPD).
- Revisão jurídica antes do lançamento. Não tratar o texto gerado como definitivo.

## 7. Marca e material da loja
- Nome do app: "Linvuu". Descrição sem promessas de fluência ou prazo, sem "oficial", sem emoji, sem bandeiras.
- Desenvolvedor: Linvuu (conforme o CNPJ).
- Para cada item de marca: aprovação sua antes de publicar.

## 8. Riscos
| Risco | Efeito | Mitigação |
|---|---|---|
| Regra de direcionamento para pagamento externo | Rejeição ou acesso cortado | Verificar política e orientação jurídica antes de programar a regra de acesso |
| Conta da loja aberta tarde | Atrasa testes de compra | Abrir a conta de organização no início do desenvolvimento |
| Rejeição por "site empacotado" | Atraso ou recusa | Funções nativas e teste em aparelho |
| Perda da keystore | Impede atualizações | Backup fora do computador de trabalho |
| Verificação da organização demorar | Atraso | Abrir a conta com antecedência, junto com documentos do CNPJ |
| Login Google fora do app | Usuários com conta Google não entram | Plugin nativo ou login por e-mail como alternativa |
| Render hibernar | App lento ou fora | Plano pago e health check |
| Apenas faixa de teste validada em um aparelho | Bugs em outros aparelhos | Testadores com aparelhos variados |

## 9. Checklist de lançamento
Marque com a data e o responsável quando concluir.

- [ ] Fase A concluída (CLAUDE.md, AAB, versões, lint, ícone, ficha, privacidade, Firebase, Crashlytics desligado)
- [x] Decisão de cobrança no app: Google Play Billing (10/10/2026)
- [ ] Conta de organização aberta **no início do desenvolvimento** (não no lançamento)
- [ ] Compras testadas com testadores de licença em aparelho real
- [ ] Teste em aparelho real (Android) com login, aulas grátis, áudio e navegação
- [ ] Faixa interna com testadores convidados
- [ ] Faixa fechada com a lista de testadores, aparelhos variados e feedback coletado
- [ ] Nenhum erro bloqueante aberto
- [ ] Conta de organização criada e verificada
- [ ] Keystore de release gerada, cadastrada no GitHub e com backup fora do computador
- [ ] AAB de produção gerado e tamanho confirmado (abaixo de 200 MB no módulo base)
- [ ] Capturas de tela, ícone e gráfico de destaque aprovados
- [ ] Formulário de Segurança de Dados preenchido e política de privacidade publicada
- [ ] Revisão jurídica da privacidade e dos termos
- [ ] Render no plano pago, com health check
- [ ] Chaves Stripe live configuradas (só nesta data)
- [ ] Envio para revisão da loja

## 10. Fontes e verificação
As regras da Google Play citadas aqui vêm de páginas secundárias encontradas em pesquisa. Antes de decidir prazos e obrigações, confira na [documentação oficial do Google Play](https://support.google.com/googleplay/android-developer) e no próprio Console.
