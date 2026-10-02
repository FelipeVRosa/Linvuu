# Como ver o site e colocá-lo no ar

O site novo é estático (Vite + React). Ele não precisa do `server.ts` para funcionar.

## Ver no seu computador
```
npm install
npm run dev          # abre em http://localhost:3000
```
Se a porta 3000 estiver ocupada, o servidor usa a 3001 e avisa no terminal.

## Colocar no ar (grátis): Vercel
1. Entre em vercel.com com a conta do GitHub e clique em "Add New → Project".
2. Escolha o repositório `FelipeVRosa/Linvuu`. O `vercel.json` já traz as configurações (build `npm run build`, pasta `dist`, rotas do site).
3. Clique em "Deploy". Cada pull request ganha um endereço de prévia próprio.

Alternativa: Netlify. "Add new site → Import from Git"; o `netlify.toml` já está pronto.

## Por que o preview não aparecia
O `index.html` da raiz do `main` era o de um site de HTML puro (sem `<div id="root">` e sem o `main.tsx`). Qualquer preview que rode o projeto como app Vite abria esse arquivo e o app React nunca carregava. O `main` agora tem o `index.html` do app; o HTML antigo está em `content/legado/site-estatico/`.

## GitHub Pages
Não recomendado agora: o site usa endereços absolutos (`/brand/...`) e rotas sem `#`, o que exige domínio próprio para funcionar em Pages.
