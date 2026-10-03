# Login com Google e e-mail

O código já está pronto (páginas `/entrar` e `/cadastro`, botão "Cadastre-se grátis", menu da conta e "Sair"). Ele usa o Firebase Authentication e só falta criar o projeto e colar quatro valores. Enquanto não houver chaves, as páginas mostram "O login ainda não foi ativado" e os botões ficam desligados.

E-mail oficial da Linvuu: hello.linvuu@gmail.com (use-o como dono do projeto Firebase e como contato nos e-mails de recuperação de senha).

## Passo a passo (cerca de 10 minutos)
1. Entre em console.firebase.google.com com o e-mail hello.linvuu@gmail.com e crie o projeto "Linvuu".
2. Em **Build → Authentication → Get started → Sign-in method**, ative **Google** (escolha o e-mail de suporte hello.linvuu@gmail.com) e **E-mail/senha**.
3. Em **Authentication → Settings → Authorized domains**, adicione `www.linvuu.com.br` (e `linvuu.com.br`). `localhost` já vem liberado.
4. Em **Project settings → Your apps → Web (</>)**, registre um app web. O Firebase mostra um `firebaseConfig` com `apiKey`, `authDomain`, `projectId` e `appId`.
5. **No seu computador:** copie `.env.example` para `.env.local` e preencha `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_APP_ID`.
6. **No site publicado:** no GitHub, em Settings → Secrets and variables → Actions → aba **Variables**, crie as mesmas quatro variáveis. O workflow `Publicar site` as usa no build.

Essas quatro chaves do Firebase são públicas por desenho (ficam no navegador de qualquer site que use Firebase); a segurança vem dos domínios autorizados e das regras do projeto. Nunca coloque no repositório uma chave de servidor, de pagamento ou um token do GitHub.

## O que ainda falta (rodadas seguintes)
- Termos de uso e política de privacidade, com link no cadastro (rodada 27).
- Guardar o progresso do aluno por conta (rodada 4).
- Personalizar o e-mail de recuperação de senha no Firebase (Authentication → Templates).
