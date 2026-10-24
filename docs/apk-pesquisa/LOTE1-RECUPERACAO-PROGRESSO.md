# Lote 1 — recuperação do progresso no Android

Base: 99d1dba. Escopo exclusivo do APK; website e API de produção preservados.

## Resultado

O APK usa um journal v2 com revisão por chave, intenção pendente e registro explícito de exclusão (tombstone). A gravação local do journal ocorre antes da atualização das chaves lidas pela interface. O espelho Android recebe o documento completo em uma operação SharedPreferences.commit(). Não é uma transação distribuída entre WebView e Android: as revisões e pendências permitem reconciliar interrupções.

- Chaves continuam separadas entre visitante e cada UID. Não há atribuição automática do histórico visitante à conta nem união indiscriminada.
- Uma cópia nativa confirmada mais recente substitui a cópia local antiga. Uma intenção local ainda não confirmada prevalece e recebe revisão posterior às cópias conhecidas.
- Exclusão e lista vazia não são tratadas como ausência; cópias antigas não reconstituem o dado.
- A cópia nativa legada é removida somente depois de confirmar o journal, mantendo compatibilidade de leitura durante a migração. Não há suporte a downgrade para APK antigo depois da migração.
- Valores locais inválidos sem journal válido são isolados em chaves locais `linvuu:recuperacao-invalida:v1:<chave>` antes da retirada da chave ativa. Não se promete reconstruir informação corrompida. A limpeza por conta também remove esses isolamentos. Eles não são enviados ao espelho nativo.
- Credenciais Firebase, tokens e áudios não entram no journal. Somente estudo e preferências da lista permitida.
- A leitura inicial espera até 1,5 segundo pela ponte. Depois o app abre com a cópia local; leitura é tentada novamente no evento online, no pause ou pelo botão Tentar novamente do aviso. Se a leitura falhar, não se sobrescreve uma cópia nativa ainda desconhecida.
- Uma gravação nativa sem resposta não bloqueia a primeira tela. A fila não inicia gravações concorrentes, para impedir confirmação fora de ordem. Se a ponte continuar travada, reabrir o app será necessário; a intenção local fica registrada.
- Aviso não declara sucesso sem confirmação. Tentativa de salvar, aviso de erro e recuperação da cópia nativa são conceitos diferentes da sincronização com o servidor.

## Critérios e validação

23 verificações de recuperação em Storage/ponte simulados: migração e resíduos legados após exclusão, UID, credenciais, limpeza legada, perda da cópia WebView, redefinição vazia, versões, pendência, exclusão após falha/reabertura, erro/retry, snapshot indisponível/atrasado/travado, ordem das gravações, corrupção, versão desconhecida, quota, validação, interrupção journal/valor e gravação travada. Teste separado cobre os hooks reais do módulo sobre Storage simulado, sessionStorage, limpeza de conta e clear com tombstones. A integração foi adicionada ao workflow Android.

Passaram TypeScript, testes existentes de isolamento e reenvio dos dias ao servidor, guardas de loja, build frontend APK, 18 cenários de interface, 42 exercícios e 15 verificações do áudio simulado. Checagens de interface não são teste do plugin Java. Resultados específicos em design/apk/recuperacao-lote1-testes.json.

## Limites e próximos passos

- Aparelho real: validar fechamento abrupto, reabertura, migração, logout/login, disco cheio e persistência do SharedPreferences. Compilação Gradle também precisa passar no commit deste lote.
- A API atual sincroniza dias concluídos, com fila e desmarcações. Bloco atual e resumos de prática continuam apenas no aparelho. Recuperação completa em outro celular exige um lote próprio de API/autorização/versões; não foi prometida aqui.
- Desinstalação apaga dados locais/nativos. Backup Android continua desativado. Não é solução de backup entre aparelhos.
- Dois armazenamentos corrompidos ou remoção de ambos não podem ser recuperados por este mecanismo.
- Limite preventivo do journal: 900.000 caracteres antes de gravar; excesso gera aviso e não descarta silenciosamente histórico. Falta medir o maior perfil real e planejar compactação de tombstones com segurança.
- Reset/exclusão por conta no servidor e exclusão operacional de conta são processos separados; este lote não os implementa nem simula sucesso.
- Lote 2 proposto: início com retomada clara, percurso/status e tela de resultado/revisão. Motion deve entrar depois como feedback discreto, respeitando movimento reduzido e sem atrapalhar foco/leitura.
