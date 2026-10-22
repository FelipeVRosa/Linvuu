# Login, perfis e Firebase: estado confirmado em 22/10/2026

Legenda: **[observado]** visto no console ou na produção em 22/10/2026; **[testado]** coberto por teste automático ou execução reproduzível; **[inferido]** conclusão não confirmada por teste direto.

## 1. Projetos
| Projeto | Papel | Evidência |
|---|---|---|
| `linvuu` (nº 982052790317, conta `hello.linvuu@gmail.com`) | **Produção.** Front-end, backend (Admin SDK), Auth e Firestore. | [observado] o bundle publicado usa `projectId=linvuu` e `authDomain=linvuu.firebaseapp.com`; a conta de serviço deste projeto e a chave `c54e8fb5…` (criada em 17/10) autenticaram e chamaram `firestore.googleapis.com` em 22/10; o documento de teste da newsletter foi gravado nele. |
| `linvuu-995d0` (nº 371272154247, conta `felipevaleevarosa@gmail.com`) | **Secundário, sem uso.** | [observado] sem apps registrados; sem buckets; a conta de serviço e a chave de 12/10 (`abb347f9…`) não têm chamadas nem autenticações nos últimos 30 dias; o bundle publicado não o cita. Não foi excluído. |

[inferido] O backend da Render usa a chave de `linvuu`, porque a de `linvuu-995d0` não mostra nenhum uso. O conteúdo da variável não foi lido; a identidade em execução foi deduzida das métricas de uso da conta de serviço.

## 2. Configuração web
- Front-end lê `VITE_FIREBASE_*` **na hora do build**: se mudar uma variável na Render, é preciso um novo deploy.
- Backend carrega a credencial por `FIREBASE_SERVICE_ACCOUNT_JSON` (variável) ou, se ela não existir, por `GOOGLE_APPLICATION_CREDENTIALS` (arquivo secreto). Código: `server/firebase-admin.ts`. Nunca imprimir nem versionar o JSON.
- `/readyz` obtém um token com essa credencial e lê os metadados do banco do projeto configurado; 200 comprova credencial e alcance. Não mostra a identidade.
- Authentication [observado]: Email/Senha e Google ativos; vinculação de contas com o mesmo e-mail; domínios autorizados: `localhost`, `linvuu.firebaseapp.com`, `linvuu.web.app`, `linvuu.com.br`, `www.linvuu.com.br`.
- Chave de API do navegador [observado]: restrita por referenciador a `https://linvuu.firebaseapp.com/*` e `linvuu.com.br`; permite 25 APIs. Nenhuma restrição foi alterada.
- Clientes OAuth de `linvuu` [observado]: "Web client (auto created by Google Service)" (origens `http://localhost`, `http://localhost:5000`, `https://linvuu.firebaseapp.com`; redirecionamento `https://linvuu.firebaseapp.com/__/auth/handler`); "Web client 1" (origens e redirecionamentos `https://linvuu.com.br` e `https://www.linvuu.com.br`; último uso 07/10).
- IAM de `linvuu` [observado]: dono `hello.linvuu@gmail.com` e a conta de serviço do Admin SDK. Sem buckets; faturamento não ativado.

## 3. Android (`com.linvuu.app`)
- [observado no repositório] O app é um Capacitor que carrega o site; usa a mesma configuração web. Não existe `google-services.json` e nenhum app Android está registrado no Firebase.
- O WebView envia a origem `https://localhost`. [inferido] Ela **não** está na lista de referenciadores da chave de API; o login no app pode ser recusado. Não foi testado em aparelho.
- Não publicar APK sem build e validação em aparelho.

## 4. O que o site faz
- **Criar conta** (`/cadastro`), **entrar** (`/entrar`), Google, "esqueci a senha" e **sair**. Sessão persiste ao recarregar [testado em emulador].
- Perfil: ao criar a conta grava `users/{uid}` com `nome`, `email`, `xp: 0`, `streak: 0`, `licoesCompletas: []`, `criadoEm`. XP, streak e lições são gravados só pelo servidor (Admin SDK).
- Newsletter: `POST /api/newsletter` (validação, aceite, versão do texto, limite de 5 por minuto por IP, campo-isca `ref_extra_nl`). O navegador não escreve no Firestore.
- Assinatura e cobrança vivem no Stripe, nunca no Firestore.

## 5. Regras do Firestore
- Arquivo: `firestore.rules`. Publicada em 22/10/2026, 11:35 (Brasília), no projeto `linvuu`. Cópia anterior (17/10) para reversão: `docs/firestore.rules.publicada-2026-10-17.txt`.
- **O arquivo não é publicado automaticamente.** Processo: rodar `npm run testar:regras`, publicar no Console (Firestore → Regras) ou com `firebase deploy --only firestore:rules --project linvuu`, e conferir em seguida com leituras anônimas (esperado: 403).
- `users/{uid}`: só o dono lê; criação com campos fixos e zerados; o dono só pode alterar `nome`; sem exclusão. Todo o resto (`usuarios`, `lessons`, `newsletter`, `eventos`) é negado ao navegador.

## 6. Testes automáticos (rodam no CI)
- `npm run testar:regras`: 68 verificações no emulador (duas contas fictícias e visitante).
- `npm run testar:newsletter` e `npm run testar:newsletter:rota`: validador e rota completa, incluindo limite por IP.
- Também no CI: segurança, prontidão, SEO e revisão pública.
- O fluxo de contas pelo site (cadastro, login por e-mail e Google, edição do nome, isolamento) foi executado em emulador com Playwright em 22/10; o roteiro **não está versionado** e **não substitui** a conferência em produção.

## 7. Política de senha [observado]
Modo "notificar", mínimo de 6 caracteres, sem exigência de maiúscula, número ou símbolo. O formulário usa `minLength={6}`. A mensagem `auth/password-does-not-meet-requirements` fala em maiúsculas, número e símbolo; se for exigido só o tamanho, o texto fica enganoso.

Para endurecer (ainda **não** aplicado): (1) alinhar `minLength` e as mensagens em `src/i18n/*`; (2) só então ativar "exigir" com mínimo de 8. Efeito: novos cadastros e trocas de senha com menos de 8 caracteres passam a falhar; quem já tem conta continua entrando; **não** ativar "forçar atualização no login" sem aviso, pois isso bloqueia quem tem senha antiga.

## 8. Pendências administrativas
- `VITE_FIREBASE_APP_ID` e `VITE_FIREBASE_MESSAGING_SENDER_ID` publicados trazem o número de projeto `982052799317`; o console mostra `982052790317`. [observado] Auth e Firestore usam chave e projectId e não dependem desses valores, mas App Check e mensagens dependem. Corrigir na Render e refazer o deploy.
- Origem `https://localhost` (Android) fora da chave de API [inferido].
- Chave de API com 25 APIs; reduzir só depois de listar o que web e Android usam.
- Chave de conta de serviço de `linvuu` sem expiração (criada em 17/10) e papéis amplos da conta de serviço do Admin SDK; revisar rotação.
- Excluir o projeto `linvuu-995d0` é decisão do dono, na conta Felipe.
- App Check: planejado, não ativado.
- Termos de uso e política de privacidade com link no cadastro; analytics só com aviso de cookies (LGPD).
