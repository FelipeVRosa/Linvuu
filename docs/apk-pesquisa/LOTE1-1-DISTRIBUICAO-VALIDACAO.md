# Lote 1.1 — APK identificável e distribuição de testes

Base: 5ed8d1c. Exclusivo do APK; sem merge, deploy do site ou publicação na Google Play.

## Layout ampliado

Reproduzido em Playwright 1.56.1/Chromium 141 (1194): percurso em espanhol, português como curso, tela 320 px, texto 200%, documento com 326 px. O excesso vinha dos títulos com quebra de palavras desativada. O fallback de quebra agora evita transbordamento sem ocultar conteúdo nem reduzir fonte. O cabeçalho do percurso também permite quebra de linha entre título e selo e limita espaçamentos para não estreitar excessivamente o título ampliado.

A suíte de redesign passa a cobrir PT/EN/ES, cinco larguras (320/360/390/393/412), seis telas com texto 200% e início escuro: 105 recortes. Espera fontes carregarem e confere marcadores visíveis no percurso. O teste físico de fonte do sistema + escala do app continua pendente.

## Identidade de testes

- Pacote de testes: `com.linvuu.app.teste`; rótulo `Linvuu Teste`. Pode coexistir com o APK antigo `com.linvuu.app`, evitando exigir sua remoção. Não migra dados entre pacotes automaticamente.
- Assinatura estável de testes em dois GitHub Actions Secrets, criptografados antes do envio. Nenhuma chave privada ou senha no repositório, em arquivos de entrega ou em logs. O material temporário de geração foi eliminado após a configuração.
- Certificado público fixado em `design/apk/teste-certificado-sha256.txt`. O CI compara esse SHA-256 com o certificado efetivo do APK usando apksigner.
- CI sem chave estável ou versão válida falha. Localmente, builds sem os segredos ainda usam a assinatura debug local do SDK; não devem ser distribuídos como substitutos desta identidade estável.
- VersionCode: 100000 + número da execução deste workflow. Não reiniciar esse contador nem alterar sua base sem preservar a monotonicidade. Rerun da mesma execução mantém versão; uma execução nova avança.
- Commit/versão aparecem nos Ajustes e no JSON embarcado. O CI verifica pacote, versão e commit dentro do APK antes de copiá-lo para entrega.
- Assinatura de produção/Play App Signing continua fora deste lote. Não foram criados produtos, ativadas compras nem gerados artefatos publicáveis de produção.

## Entrega e segurança

Não havia artifacts antigos disponíveis para apagar. O workflow tenta guardar o pacote por um dia em Actions e entrega também APK, metadados, checksum e instruções em um Release **draft**, nunca publicado. Esse rascunho requer acesso de mantenedor no GitHub. O fluxo não depende de um upload de artifact que possa falhar por cota.

Job com segredos restrito à branch própria `gpt/website-apk` e a execuções manuais nessa branch; não usa pull_request_target e não assina código de forks. A permissão contents:write limita-se ao job necessário para criar o rascunho. O token do GitHub só é fornecido ao comando de entrega; a chave temporária do runner é removida ao terminar, inclusive em falhas.

## Aceite

1. TypeScript/build frontend, guardas e recuperação devem passar.
2. Suíte ampliada de 105 recortes e regressões do parecer devem passar no GitHub.
3. Gradle assembleDebug/bundleDebug com Java 21 deve passar.
4. apksigner, manifesto e origem embarcada devem passar nos verificadores reais.
5. Rascunho deve conter APK baixável, build-info.json, SHA256SUMS e LEIA-ME.txt.
6. Aparelho: instalar ao lado do antigo, estudar, fechar/reabrir; depois instalar um build posterior do mesmo pacote sem desinstalar e conferir dados. Esse último item requer o Redmi; compilação e certificados não provam persistência física.

TalkBack real, login real, som/CORS em aparelho, interrupções/fones e retomada de tentativa parcial não são declarados validados por este lote. Retomada parcial e versão dos exercícios são o lote seguinte.

Validação local concluída: 105 recortes de redesign sem violações graves/críticas detectadas; 18 regressões do parecer, build frontend APK, TypeScript, 23 verificações de recuperação, integração Storage e guardas da loja/distribuição passaram. Compilação nativa e entrega são verificadas pelo workflow no commit correspondente; não são inferidas desses testes locais.
