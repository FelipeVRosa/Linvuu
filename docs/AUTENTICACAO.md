# Login e perfis (Firebase)

Projeto Firebase: **linvuu**. O site usa Authentication (e-mail e senha) e Firestore. Login com Google existe no código, mas fica **escondido** até ser ativado.

## O que o site faz
- **Criar conta** (`/cadastro`): nome, e-mail e senha. Depois do cadastro o aluno já entra logado.
- **Entrar** (`/entrar`) e **Sair** (menu da conta, no canto do cabeçalho).
- **Sessão**: fica salva no navegador; recarregar a página não desloga.
- **Perfil no Firestore**: ao criar a conta, grava `users/{uid}` com `nome`, `email`, `xp: 0`, `streak: 0`, `licoesCompletas: []` e `criadoEm` (hora do servidor). Se o perfil não existir no login (por exemplo, falha de rede no cadastro), ele é criado no próximo acesso. **Nunca sobrescreve** um perfil existente.
- Sem as variáveis abaixo, o site continua funcionando e a tela de login mostra "O login ainda não foi ativado neste ambiente".

## Variáveis de ambiente (Render)
No Render: serviço do site → **Environment** → adicione as variáveis e depois faça **Manual Deploy → Deploy latest commit**. O Vite lê as variáveis na hora do build, então elas precisam existir antes dele.

| Variável | Valor |
|---|---|
| `VITE_FIREBASE_API_KEY` | `apiKey` do Firebase |
| `VITE_FIREBASE_AUTH_DOMAIN` | `linvuu.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `linvuu` |
| `VITE_FIREBASE_APP_ID` | `appId` do Firebase |
| `VITE_FIREBASE_STORAGE_BUCKET` | `linvuu.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` do Firebase |

Para rodar no seu computador, copie `.env.example` para `.env.local` e preencha os mesmos valores (`.env.local` não vai para o GitHub).

Essas chaves são públicas por desenho (qualquer site com Firebase as expõe no navegador). A proteção vem das **regras do Firestore** e de restringir a chave de API ao seu domínio: Google Cloud Console → APIs e serviços → Credenciais → a chave do navegador → Restrições de aplicativo: **Sites** → `https://linvuu.com.br/*` e `https://www.linvuu.com.br/*` (e `localhost` se quiser testar localmente).

## Regras do Firestore
O código grava na coleção **`users`** (a que já existe no seu Firestore). O arquivo `firestore.rules` traz uma regra de referência: cada pessoa lê e altera só o próprio documento, e a criação exige começar com XP e streak zerados. Compare com as regras publicadas. Se um dia mudar o nome da coleção, mude `COLECAO_USUARIOS` em `src/lib/perfil.ts`. Se as regras recusarem a gravação, o cadastro continua funcionando e o console do navegador mostra "permission-denied".

Com essas regras o próprio aluno consegue alterar o próprio XP pelo navegador. Para ranking ou prêmios, o progresso deve passar pelo servidor (`server.ts`); isso está previsto para a rodada de progresso.

## Para ativar o Google depois
1. Firebase Console → Authentication → Método de login → **Google** → ativar (e-mail de suporte: hello.linvuu@gmail.com).
2. Authentication → Configurações → **Domínios autorizados**: `linvuu.com.br` e `www.linvuu.com.br`.
3. No Render, crie `VITE_AUTH_GOOGLE=true` e refaça o deploy. O botão aparece na tela de login.

## Testes locais com emuladores
`VITE_AUTH_EMULATOR=127.0.0.1:9099` (e `VITE_FIRESTORE_EMULATOR=127.0.0.1:8080`) fazem o site conversar com os emuladores do Firebase, só em desenvolvimento. Nada disso vale em produção.

## Ainda não feito
- Termos de uso e política de privacidade, com link no cadastro (rodada 27).
- Google Analytics: o Firebase gerou um `measurementId`, mas o site não carrega analytics. Isso exige aviso de cookies (LGPD) e fica para a rodada 27.
- Guardar progresso real (concluir aula, XP e streak) e mostrar o perfil na tela (rodada 4).
