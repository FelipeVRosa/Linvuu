# Oferta para ex-alunos da Udemy (russo, falantes de português)

Decisão do Felipe (31/10/2026): trazer ex-alunos de russo da Udemy para o site, com desconto grande e o livro de russo completo, para dar tração e SEO. O valor é secundário.

## O que esta mudança entrega (código)
- Página pública `/ex-alunos-udemy` (só em português, indexável, no sitemap). Explica o que há na Linvuu, como pedir a condição especial e responde às dúvidas. **Não mostra o preço especial.**
- Botão de WhatsApp com mensagem pronta (`whatsappUrl(mensagem)`), número em `src/config/contato.ts`.
- Nada no servidor de cobrança, no Stripe ou nos preços foi alterado.

## Proposta de preço (decisão comercial, ainda não criada no Stripe)
Preços atuais no código: mensal R$ 139, trimestral R$ 417 (R$ 291,90 no Pix), anual R$ 999.
- **Ex-aluno Udemy: plano anual com 90% de desconto = R$ 99,90 por 12 meses**, pagamento único, sem renovação, mais o livro de russo A1–A2 completo.
- Alternativa mais conservadora: R$ 149 (85% de desconto).

## Como aplicar sem mexer no código de cobrança
O checkout já aceita código promocional (`allow_promotion_codes: true` em `server/billing.ts`). Criar no painel do Stripe (primeiro em modo de teste):
1. Cupom: 90% de desconto, uso único (`duration: once`).
2. Código promocional por aluno (ou um código com limite): `max_redemptions`, `expires_at` (sugestão: 14 dias), `first_time_transaction` ativado e **valor mínimo de R$ 900** (assim o código só vale no anual, que usa preço avulso e não tem produto fixo para restringir).
3. Testar no modo de teste: anual com código deve cobrar R$ 99,90; mensal (R$ 139) e trimestral (R$ 417) devem recusar o código.
4. Só então repetir no modo ao vivo.

## Entrega do livro e verificação
- Verificação manual: a pessoa manda um print do curso na Udemy pelo WhatsApp (sem dados de pagamento). O Felipe aprova e envia o código.
- Livro completo: hoje só os capítulos 1 e 2 estão no site (`content/livros/ru`). O livro inteiro está no Drive (`livro russo . A1 - A2 completo em doc Linvuu.docx`). Primeira entrega manual (PDF pelo WhatsApp); depois, download dentro da conta.

## Udemy
Não colocar WhatsApp, desconto nem convite para sair da plataforma no curso, na descrição ou em mensagens aos alunos: pelas regras de instrutor da Udemy isso pode custar o curso ou a conta (confirmar o texto atual da política). Usar só o link do site no perfil de instrutor, com `?utm_source=udemy&utm_medium=perfil`.

## Ainda não feito
Cupom no Stripe, eventos de medição por origem, envio do livro, link no perfil da Udemy, indexação da página no Search Console.
