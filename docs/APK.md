# Android

Documento atual de arquitetura (16/10/2026). APP.md, COBRANCA-APP.md e AUDITORIA-APP.md mantêm contexto histórico; não significam que compras estejam prontas. iOS e STEM estão fora do escopo atual.

`npm run build:apk` gera `dist-apk/`. `npm run app:android` gera esse alvo e sincroniza com Capacitor, cujo webDir é `dist-apk`. O website permanece em `dist/`. São compartilhados cursos, exercícios, progresso, conta e consulta de acesso; as telas iniciais, planos e paywall são selecionados em `src/plataforma/apk/`.

Compras continuam desligadas: não há checkout Stripe ou preço do website no pacote verificado. A tela informa que a versão está em testes e consulta o acesso já reconhecido pelo servidor. O backend Google Play ainda não existe. Não publicar este estado como app comercial pronto.

Áudios gratuitos passam a ser carregados de `https://linvuu.com.br/audio`, e os pagos continuam passando pela API autenticada. Imagens permanecem locais. Não há download offline nesta etapa; a mudança exige conexão para ouvir MP3. O servidor deve receber este PR antes de testar a nova distribuição, pois inclui CORS das origens do Capacitor em `/audio`. O elemento de áudio usa CORS anônimo. `VITE_AUDIO_BASE_URL` alternativo exige CORS compatível no servidor escolhido.

Medição local: assets web do APK em torno de 5,4 MiB, contra 85,4 MiB do build original. Isto não é o tamanho do APK/AAB nativo nem comprova desempenho em aparelho.

Validação executada: tipos, builds e inspeção automatizada do bundle; sync Capacitor. Pendentes: navegação visual (Chromium indisponível no ambiente), Android real, latência/memória/áudio, credenciais Firebase no workflow Android e compras de teste. Não foram alterados preços, dados do Firestore, chaves, assinatura release ou produção.

Próximos passos: configurar Firebase do build Android sem expor credenciais; testar em aparelhos; revisar textos legais específicos da plataforma; escolher compras gerenciadas ou integração direta; implementar validação/renovação/restauração no servidor; criar AAB assinado. Felipe decidiu aguardar atualização dos dados empresariais antes do cadastro da Play.

## Validação atualizada em 16/10

assembleDebug compilou no GitHub Actions (execução 38971505468). CI e segurança passaram. A branch foi atualizada com a main para preservar a home brasileira e as fotos. O preparo de CORS do servidor foi separado no PR #268; publicar e verificar antes de validar áudio em aparelho. Sem teste físico ou compra Play.
