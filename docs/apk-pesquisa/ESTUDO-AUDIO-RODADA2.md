# Rodada 2: estudo e áudio

20/10/2026. Apenas APK, base83292e3. Sem merge, deploy, produção de TTS ou alteração de livros/exercícios/gabaritos.

## Áudio

Motor separado em plataforma/apk/audio.ts, selecionado no build para todos os consumidores do APK, inclusive limpeza após mudança de conta e sons de feedback. O website continua usando lib/audio.ts. O build APK rejeita a inclusão acidental do motor antigo.

- Índice deduplicado durante a requisição, com validade5min; falhas descartadas, espera crescente1–30s e nova tentativa após online ou botão explícito. Não inicia downloads automáticos ao reconectar.
- Falha do índice não dispara rota privada indevidamente. Respostas401/403, gravação ausente e rede possuem mensagens distintas.
- Download de índice/arquivo privado com prazo10s, incluindo o corpo; início/travamento de reprodução com prazo15s. Cancelar encerra a Promise e interrompe a fila anterior.
- Pausar/retomar, velocidade0,75×/1×/1,25×, repetir trecho atual e parar. O trecho exibido é um número, nunca o texto/gabarito.
- Pausa ao ocultar a página ou receber o evento pause do Capacitor; não retoma automaticamente ao voltar. Interromper uma requisição em preparação cancela sua reprodução futura.
- Cache privado apenas em memória, até16blobs; limpeza e revogação na mudança de conta. Não é download offline, licença duradoura ou substituição da autorização do servidor.
- Sem substituição automática por síntese do navegador: gravação indisponível produz erro visível, preservando o idioma e a pronúncia esperados. Não gera Azure nem substitui arquivos existentes.

## Estudo

Sessões de leitura/escuta informam que não têm teste corrigido. Nas sessões com exercícios corrigíveis, concluir exige finalizar todos os blocos de prática corrigida; errar não impede terminar. O resultado é acertos/total, sem prometer fluência ou domínio. Resumos locais separados por conta e bloco; persistem ao reabrir. Sessões anteriormente concluídas não perdem o progresso histórico.

A conta no componente é chaveada por uid para não reutilizar estado de outro usuário. Resumo de prática não tem nova sincronização de servidor, SRS ou fila de revisão de erros. O aviso do visitante explica a perda possível ao limpar dados.

## Validação

- TypeScript e builds APK/website, isolamento das plataformas.
- Motor:15 verificações com fetch/HTMLAudioElement simulados em Chromium, incluindo recuperação, backoff, pausa/retomada, velocidade, cancelamento, sequência, repetição,403/retry, cache, limpeza e isolamento da prática entre contas.
- Estudo: sessão de leitura, bloqueio de conclusão quando se pula prática,42exercícios respondidos por automação, resumo e persistência ao reabrir. Respostas automáticas são de teste; não revisam o gabarito linguístico.
- Regressão:16cenários claro/escuro, oito rotas, teste de layout200%. Zero violações axe detectadas; há verificações inconclusivas.

Resultados em design/apk/audio-rodada2-testes.json, estudo-rodada2-testes.json e parecer-rodada1-testes.json. Testes adicionados ao workflow da prévia APK.

## Próxima validação e escopo pendente

Não houve áudio real, microfone, Bluetooth, chamada telefônica, CORS real, login de produção, compra, TalkBack ou instalação deste commit em Android. O evento pause não substitui implementação nativa de foco de áudio/AudioManager: chamadas, desconexão de fone e conflito com TalkBack precisam teste e eventual plugin. Controles de tela bloqueada e áudio de fundo não estão entregues.

Também pendentes: offline com direitos/revalidação, armazenamento nativo durável, revisão espaçada/erros, índice de conteúdo por curso e medição de partida no Redmi. Não fazer publicidade dessas capacidades como disponíveis. A duplicação da escala do sistema com a escala do app permanece para validação nativa.

## Referências consultadas

- https://capacitorjs.com/docs/apis/app — evento pause na Activity Android, inscrição/remoção do listener.
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate — controle da velocidade da gravação.
