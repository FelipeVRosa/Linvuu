# Como ver o site e colocá-lo no ar

O site novo é estático (Vite + React). Ele não precisa do `server.ts` para funcionar.

## Ver no seu computador
```
npm install
npm run dev          # abre em http://localhost:3000
```
Se a porta 3000 estiver ocupada, o servidor usa a 3001 e avisa no terminal.

## Colocar no ar: GitHub Pages com www.linvuu.com.br
O repositório já publica sozinho: a cada push no `main`, o workflow `Publicar site (GitHub Pages)` roda `npm run build` e envia a pasta `dist`. O domínio está em `public/CNAME` e nas configurações de Pages.

Depois de comprar o domínio, no painel de DNS (no Registro.br: "Editar zona" / DNS):
1. Crie um registro **CNAME** com nome `www` apontando para `felipevrosa.github.io`.
2. Para `linvuu.com.br` (sem www) abrir o site, crie 4 registros **A** na raiz: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. O GitHub redireciona o endereço sem www para o www.
3. Espere a propagação (de minutos a algumas horas). Em Settings → Pages, marque **Enforce HTTPS** quando a opção liberar.

Enquanto o domínio não existir, o endereço `felipevrosa.github.io/Linvuu` redireciona para o domínio novo e não abre. Para ver o site antes, rode no computador (`npm run dev`).

Alternativas, se um dia quiser mudar: Vercel (`vercel.json`) ou Netlify (`netlify.toml`) já têm configuração pronta.

## Por que o preview não aparecia
O `index.html` da raiz do `main` era o de um site de HTML puro (sem `<div id="root">` e sem o `main.tsx`). Qualquer preview que rode o projeto como app Vite abria esse arquivo e o app React nunca carregava. O `main` agora tem o `index.html` do app; o HTML antigo está em `content/legado/site-estatico/`.

## Por que Pages só com domínio próprio
O site usa endereços absolutos (`/brand/...`) e rotas sem `#`. Isso funciona na raiz de um domínio, mas quebra em `felipevrosa.github.io/Linvuu/`.
