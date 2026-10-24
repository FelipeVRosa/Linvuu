# Auditoria do motor de áudio por idioma (24/10/2026)

Legenda: **[observado]** contagem de arquivos `.mp3` no repositório em 24/10/2026; **[inferido]** conclusão a partir dos scripts e documentos.

## Como foi feito
- [observado] `scripts/gerar-audios.mjs` gera os MP3 da pasta antiga (`public/audio/<idioma>/` e `server/audio-privado/<idioma>/`) com o pacote `node-edge-tts` (endpoint de leitura em voz alta do Edge, não o serviço pago Azure AI Speech). Os áudios novos ficam em `public/audio/v2/` e `server/audio-privado-v2/` (ElevenLabs v4).
- [inferido] Tudo que só existe na pasta antiga foi gerado com Edge TTS. A licença de uso comercial desse caminho não foi confirmada; o documento `docs/PENDENTE-AUDIO.md` já pedia trocar o motor antes de gerar mais.

## Contagem de MP3
| idioma | gratuito antigo | gratuito v2 | pago antigo | pago v2 | pago ainda só no motor antigo (diferença) |
|---|---|---|---|---|---|
| br | 746 | 747 | 1806 | 1806 | 0 |
| de | 664 | 664 | 1871 | 1226 | 645 |
| en | 534 | 535 | 1873 | 1330 | 543 |
| es | 906 | 1 | 1429 | 0 | **gratuito 905 + pago 1429** |
| fr | 479 | 481 | 1304 | 997 | 307 |
| it | 556 | 1 | 1440 | 0 | **gratuito 555 + pago 1440** |
| pt | 962 | 962 | 0 | 0 | 0 |
| ru | 657 | 655 | 1342 | 1326 | 16 |

## O que isso significa para o APK v1
- [inferido] O áudio gratuito de **br, de, en, fr, pt e ru** já tem versão ElevenLabs equivalente. **Espanhol e italiano gratuitos estão quase todos só no motor antigo** (905 e 555 arquivos): é o que o APK serviria nesses idiomas.
- [inferido] A diferença do pago (de 645, en 543, fr 307, es 1429, it 1440) é maior que a contagem de frases pendentes em `docs/PENDENTE-AUDIO.md` porque as pastas antigas guardam arquivos que já não são referenciados; a lista exata vem do `content/audio/<idioma>-gravar.csv`.
- Decisão do dono antes de publicar: (a) regerar es/it na ElevenLabs, ou (b) não oferecer es/it no APK da v1.
