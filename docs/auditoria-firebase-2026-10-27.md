# Auditoria Firebase e IAM — 27/10/2026

## Escopo e origem

Rodada ChatGPT/Codex. Base de código: `118a3abe4c5ce88ac726c8f76042ea5d1a25a7be`.
Leitura do pacote `auditoria-linvuu.tar.gz` entregue pelo Felipe, com SHA-256 `9972b3d65bd37969905df38f913fc0812b7b6f1d92e96197b9f42060e458bd05`.
Consultas diretas ao Render e GitHub em 27/10/2026 aproximadamente 00:57–01:00 Brasília. O pacote não traz um timestamp de coleta; não inventar horário de obtenção dos dados Google.

## Achado principal: dois IDs distintos

| Evidência | Resultado | Limite |
| --- | --- | --- |
| `projeto.json` | `linvuu-995d0`, número `371272154247`, nome Linvuu, ACTIVE | Nome de exibição não identifica o projeto usado pelo site |
| `linvuu-995d0-bancos.json` | `{}`: listagem bem-sucedida sem bancos retornados | Não demonstra banco existente ou seguro |
| `linvuu-995d0-releases-1.json` | `{}`: nenhuma release retornada | Não há regras publicadas coletadas desse projeto |
| `release.json` | Arquivo vazio após consulta 404 | Não interpretar como ruleset permissivo nem como comparação concluída |
| `linvuu-bancos.json` | 403 PERMISSION_DENIED | Não distingue projeto inexistente de recurso sem acesso |
| `linvuu-releases-1.json` | 403 IAM_PERMISSION_DENIED, permissão `firebaserules.releases.list`, recurso `projects/linvuu` | Nenhum ruleset de `linvuu` foi coletado |
| Render, variável específica | `VITE_FIREBASE_PROJECT_ID=linvuu` | Valor configurado, não prova de login E2E |
| Render, variável específica | `VITE_FIREBASE_AUTH_DOMAIN=linvuu.firebaseapp.com` | Valor configurado |
| Render, variável específica | `VITE_FIREBASE_APP_ID=1:982052790317:web:debbcb93512ee1be8ed8a4` | Número difere de `linvuu-995d0` |
| Render, variável específica | `FIREBASE_PROJECT_ID` não encontrada (404) | Consulta de variável direta, não auditoria de grupos herdados |
| Render, variável específica | `GOOGLE_APPLICATION_CREDENTIALS=/etc/secrets/firebase-admin-key.json` | Não foi lido o arquivo secreto nem confirmada sua conta de serviço |

No código `server/firebase-admin.ts`, a seleção de projeto é `FIREBASE_PROJECT_ID || VITE_FIREBASE_PROJECT_ID`. Assim, a configuração direta consultada aponta frontend e fallback do backend para `linvuu`. Isso corrige a inferência baseada em e-mail de que `linvuu-995d0` seria necessariamente a produção.

**Decisão:** preservar a configuração atual enquanto se identifica a conta proprietária de `linvuu`. Não migrar para o projeto vazio, criar banco ou publicar regras em `linvuu-995d0` para contornar o 403.

## IAM realmente coletado: somente linvuu-995d0

- Um usuário humano com `roles/owner`.
- Agente gerenciado Firebase com `roles/firebase.managementServiceAgent`.
- Conta `firebase-adminsdk-fbsvc@linvuu-995d0.iam.gserviceaccount.com`, habilitada, com:
  - `roles/firebase.sdkAdminServiceAgent`
  - `roles/firebaseauth.admin`
  - `roles/iam.serviceAccountTokenCreator`
- Nenhum vínculo público `allUsers` ou `allAuthenticatedUsers` consta no dump de projeto.
- Não foram coletados vínculos de ancestral, políticas individuais de contas de serviço, políticas de recursos ou metadados de chaves. Ausência no dump de projeto não prova ausência de acesso efetivo.
- Não foi confirmado que esta conta de serviço é usada pelo Render. Não removê-la, nem retirar Token Creator ou papéis gerenciados sem inventário de dependências.
- O papel gerenciado do SDK não deve ser interpretado como ausência de acesso a dados apenas porque `roles/datastore.user` não aparece separadamente.

## GitHub, regras e deploy

- `main` e Render estavam em `118a3abe4c5ce88ac726c8f76042ea5d1a25a7be` antes deste PR documental.
- PRs #368/#369 mergeados; deploy `dep-dbg0hpvb9u1s73fopnc0` live.
- Checks consultados desse SHA: build, varredura gitleaks e auditoria completa de dependências: success.
- `751c3b8` é um ancestral, não um avanço posterior. Falhas antigas de Actions por e-mail não descrevem esses checks atuais.
- Regras atuais do GitHub restringem criação do próprio perfil, alteração apenas de nome e bloqueiam newsletter/outros documentos ao cliente. Isso é evidência de código, não de regras efetivamente publicadas.
- Nenhuma alteração em regras, IAM, dados, credenciais ou configuração do Render foi executada nesta rodada.
- `verifyIdToken(token, true)` está publicado; teste E2E com conta revogada/desativada ainda pendente.

## Próxima ação e aceite

1. Abrir https://console.cloud.google.com/iam-admin/iam?project=linvuu com a conta que administra o projeto em uso. Confirmar ID e número, não apenas o nome Linvuu.
2. Se houver acesso negado, identificar/trocar a conta Google; não criar outro projeto. Confirmar a identidade ativa do Cloud Shell com `gcloud auth list`.
3. Com a identidade autorizada no projeto correto, coletar IAM, bancos, releases e rulesets ativos de `linvuu`; verificar também metadados de chaves e a identidade realmente usada pelo Render, sem imprimir material secreto.
4. Comparar ruleset ativo com `firestore.rules`, executar testes e só publicar diferenças necessárias com reversão.
5. Revisar permissões efetivas do backend e testar fluxos de conta de teste válida, revogada e desativada.
6. Registrar resultados e atualizar este snapshot. Critério de conclusão: projeto/conta confirmados, regras publicadas comparadas, permissões revisadas e fluxos autenticados testados.

## Reversão e limitações

Este PR muda apenas documentação; reversão por revert do commit documental. Não há correção de produção a reverter nesta rodada. Não é auditoria integral aprovada nem prova de comprometimento. As conversas não sincronizam automaticamente; Claude e Gemini devem ler este documento antes de novas conclusões sobre Firebase.
