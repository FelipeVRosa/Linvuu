# Website

Escopo aprovado em 16/10/2026: somente idiomas, web e Android. Render gratuito hospeda o servidor e Cloudflare fica à frente. Nenhuma mudança de plano é autorizada por este documento.

`npm run build:website` gera `dist/`, servido pelo Express. `npm run build` continua usando website por padrão. A camada `src/plataforma/website/` seleciona Home, planos, paywall e navegação do website; checkout Stripe está em `checkout.ts`. A consulta de acesso, compartilhada com Android, fica em `src/lib/acesso.ts` e continua dependendo da decisão do servidor.

Não duplicar aulas, exercícios nem progresso. `@plataforma/*` é resolvido pelo Vite conforme `VITE_ALVO=website|apk`. Alvo desconhecido faz o build falhar. A seleção do alvo não é autorização de acesso: o servidor continua validando tokens e assinaturas.

Validar: tipos dos dois alvos, builds, `testar:plataformas`, segurança, medição, progresso e design. Os checks não substituem teste no navegador, conta real e cobrança de teste.
