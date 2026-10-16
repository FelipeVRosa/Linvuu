# Validação técnica - 16/10/2026

Escopo atual confirmado por Felipe: somente idiomas, website e Android. Hospedagem no Render gratuito, com Cloudflare na frente. Cadastro da Google Play aguarda atualização dos dados empresariais.

A CI passa a executar a checagem de tipos e os testes de medição, além de build, design e segurança. Os testes TypeScript usam `node --import tsx`, evitando a criação de um servidor IPC pelo CLI do tsx.

Base 28a712f: build, tipos, design, segurança HTTP, IPs de proxy, medição e `npm audit --audit-level=moderate` passaram localmente (Node 24). CI usa Node 22 e precisa confirmar o resultado. Não foram usados segredos, usuários ou cobranças reais. Firebase publicado, pagamentos, aparelho Android e auditoria visual continuam pendentes.
