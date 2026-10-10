# Cobrança no app: Google Play Billing (decisão de 10/10/2026)

## Decisão
A primeira versão do app vende assinatura **dentro do app**, pelo Google Play Billing, porque conteúdo digital vendido no app precisa usar a cobrança da loja. A assinatura pelo site (Stripe) continua existindo. O acesso vale pelas duas origens.

Racional registrado: conversão melhor e experiência nativa. Custo: trabalho de backend e atraso de algumas semanas. Ver `docs/LANCAMENTO.md`.

## Consequências que mudam o plano

### 1. A conta da loja precisa existir antes
Não é possível testar compras sem o app cadastrado no Play Console, com produtos de assinatura criados e testadores de licença configurados. Portanto a **conta de organização (CNPJ) precisa ser aberta no início do desenvolvimento**, não no lançamento. A verificação pode levar semanas; abra logo que os documentos estiverem prontos.

### 2. Dois sistemas de cobrança, um só acesso
- **Google Play:** a loja é a vendedora (merchant of record) e cuida de impostos da venda no app. Reembolso e cancelamento passam pela loja.
- **Stripe (site):** a organização é a vendedora. Impostos, nota fiscal e reembolso são responsabilidade dela.

O servidor precisa decidir o acesso considerando as duas fontes:
`acesso = assinatura Stripe ativa OU assinatura Play ativa (não expirada)`.

Quem é assinante no site deve continuar com acesso no app, e quem assina no app deve ter acesso no site. A identidade é o uid do Firebase.

### 3. Regra de direcionamento: verificar antes de publicar
A política da loja proíbe levar o usuário a pagamento externo para conteúdo digital dentro do app. Não está claro, pelas fontes que consultei, se o app pode **liberar acesso para quem comprou no site** ou se pode **mostrar o link ou o preço do site** dentro do app. Algumas categorias têm exceções (como leitores de conteúdo); não sabemos se educação se enquadra. **Confirme na política oficial e, se necessário, com orientação jurídica antes de programar essa parte.**

### 4. Impostos e contabilidade
Pergunte ao contador como a receita da loja (com a Google como vendedora) e a receita do Stripe (com a organização como vendedora) serão tratadas, inclusive a nota fiscal. A escolha muda o cadastro fiscal da organização.

## Arquitetura proposta

**App (Capacitor)**
- Plugin de compra do Google Play para Capacitor. Antes de adotar, confira se o plugin está mantido e a versão suporta o Capacitor atual.
- Alternativa gerenciada: RevenueCat, que cuida de recibos e de entitlements em várias fontes. Avalie a taxa e a dependência antes de escolher.
- Compra enviada com `obfuscatedAccountId` = uid do Firebase, para vincular a compra à conta.

**Servidor**
1. `POST /api/app/verificar-compra`: recebe `purchaseToken` e `productId` do app (com token do Firebase), consulta a Google Play Developer API e grava a assinatura em `assinaturas/{uid}` com origem `play` e data de expiração.
2. **Confirmação (acknowledge):** toda compra precisa ser confirmada dentro do prazo exigido pela loja. Sem confirmação, o Google reembolsa automaticamente. Confirme o prazo vigente na documentação oficial.
3. **Notificações em tempo real do Google (RTDN)** via Pub/Sub: renovação, cancelamento, expiração, reembolso e pausa. Validar a origem de cada mensagem.
4. `server/billing.ts`: `acesso()` passa a considerar a origem Play, além do Stripe.
5. Rota de restauração de compras para quem trocou de aparelho.

**Dados**
- `assinaturas/{uid}`: origem (`stripe` ou `play`), produto, estado, expiração, identificador da compra (`purchaseToken` guardado no servidor, nunca exposto ao navegador).
- Regras do Firestore: o cliente só lê o próprio documento. Escrita só pelo servidor (Admin SDK).

**Testes**
- Testadores de licença configurados no Play Console (não cobram de verdade).
- Cenários: compra, renovação, cancelamento, expiração, reembolso, troca de aparelho, assinante do site entrando no app, assinante do app entrando no site.
- Teste em aparelho real antes de qualquer envio.

## Produtos
- Mensal: R$ 139 (mesmo preço do site).
- Trimestral: R$ 417 (no site, pagamento único). **No app, o plano trimestral não é assinatura recorrente na loja.** Decidir: oferecer só mensal no app, ou criar um produto de compra única de 3 meses (produto de compra única, não assinatura). Confirme o preço em reais na loja.
- Preços e descrições de produto precisam bater com o site.

## Promessas que não podemos fazer agora
A conversa mencionou que o Linvuu será "melhor em todos os aspectos" do que concorrentes, com "áudios profissionais" e "livros gratuitos de gramática", e que a conversão do app será melhor. Por enquanto:
- **Áudios:** são sintéticos (Edge TTS). "Áudio profissional" e "voz nativa" só podem entrar na ficha e no site depois da troca de provedor ou gravação, e com revisão.
- **Comparações com concorrentes:** não publicar em ficha de loja nem no site sem prova. Comparação pública sem base pode gerar problema legal (propaganda comparativa) e rejeição na loja.
- **Conversão melhor:** é hipótese de mercado, não resultado. Medir depois do lançamento.
- **Livros gratuitos:** só publicar conteúdo original ou de domínio público, com revisão jurídica. Não usar textos dos livros de referência.
- **Pontos e gamificação:** o XP atual é lido do servidor; não prometer recompensas que dependam de regras ainda não implementadas.

As regras de marca do projeto valem para tudo isso: sem promessa de fluência, prazo ou "oficial".

## Ordem de execução
1. Abrir a conta de organização (CNPJ) e criar o app no Play Console (pode ser em faixa interna, sem publicar).
2. Definir produtos e preços.
3. Escolher o plugin ou o RevenueCat.
4. Implementar verificação de compra, RTDN e a regra `acesso` com as duas origens.
5. Testar com testadores de licença, em aparelho real.
6. Revisão jurídica da política de direcionamento e da parte fiscal.
7. Faixa fechada com os testadores.
8. Lançamento.

## Pendências suas
- Abrir a conta de organização agora (documentos do CNPJ, contrato social, e-mail e site da empresa).
- Escolher entre plugin próprio e RevenueCat.
- Decidir a oferta do plano trimestral no app.
- Falar com contador sobre impostos das duas vendas.
- Falar com advogado sobre a regra de direcionamento e o texto dos termos.

## Estado da integração do SDK (branch feat/revenuecat-sdk)
- Pacote: `@revenuecat/purchases-capacitor` 13.7.3 (peer: `@capacitor/core` >= 8, compatível com o projeto).
- Código: `src/lib/compras.ts`. Desligado por padrão.
- Ligar no build: `VITE_COMPRAS_ATIVAS=true` e `VITE_REVENUECAT_ANDROID_KEY=<chave pública do SDK Android>`.
- Chave com prefixo `test_` = Test Store do RevenueCat (sem cobrança real). Para a Play, usar a chave Android de produção (prefixo `goog_`).
- Ainda não ligado a tela de assinatura nem a `getOfferings`/`purchasePackage`. Isso entra depois da conta da Play e dos produtos existirem.

### Configuração no RevenueCat (Test Store, 10/10/2026)
- Entitlement: identificador `Premium` (nome de exibição `com_linvuu_app_pro`). É esse identificador que o app deve checar.
- Produto: `Premium`, assinatura mensal, na Test Store (preço de teste USD 30, sem valor real). Não é o preço final.
- Pendente: associar o produto `Premium` ao entitlement `Premium` (Attach).
- Yearly, Lifetime e produto duplicado foram removidos da configuração de teste.
- Os produtos reais (mensal R$ 139, trimestral) só serão criados na Play, quando a conta estiver aprovada.
