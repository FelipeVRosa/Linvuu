# Segurança

- **Segredos nunca entram no repositório.** Chaves (Firebase, Gemini, Stripe, Azure) ficam nas variáveis do Render e nos *Secrets* do GitHub. O arquivo `.env*` está no `.gitignore`.
- **Não cole chaves nem tokens em chats.** Se uma chave vazar, revogue na hora e crie outra.
- **Tokens do GitHub:** use tokens *fine-grained*, só para este repositório, com validade curta (7 a 30 dias) e apenas as permissões necessárias (Contents e Pull requests).
- A `main` é protegida: toda mudança entra por pull request com o teste automático (CI) aprovado.
- Ative a verificação em duas etapas no GitHub, no Render, no Google (Firebase) e no Registro.br.
- Para reportar um problema de segurança: hello.linvuu@gmail.com.
