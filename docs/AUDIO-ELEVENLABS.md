# Troca de vozes: Edge TTS → ElevenLabs v4

Estado em 22/10/2026. Branch: `audio/elevenlabs-v4`. **Russo aprovado pelo dono (inteiro).**

## Decisões fixas
- Modelo `eleven_v4`, `language_code` explícito (`ru` / `pt`), configurações padrão da voz, MP3 44,1 kHz 64 kbps, `seed` derivada do hash.
- Custo real pela API: **~0,44 crédito por caractere** (cabeçalho `character-cost`), menos da metade do que o conector estima.
- Vozes: russo m `VwRq6NLQB8AqRusa9F9t` (Arcadees), russo f `xcVbjGhhLIoKi3va6mAe` (Viktoriya Voloshina); português m `uuRRBfx9C2chYfSRNn6t` (Vander Maria), português f `BQzELs93jJsUOf5rCb9p` (Vanessa).
- Caminho versionado, para o cache nunca servir voz antiga: públicos em `public/audio/v2/<idioma>/`, pagos em `server/audio-privado-v2/<idioma>/`. O áudio do Edge continua como reserva (o app e o servidor caem nele onde não houver v2).
- Nome do arquivo = hash do texto (igual a `src/lib/audio.ts`). `manifest.json` por pasta registra voz, caracteres, créditos e duração de cada arquivo.

## Como retomar / continuar
```
ELEVENLABS_API_KEY=... node scripts/gerar-audios-eleven.mjs --idioma=ru --simular
ELEVENLABS_API_KEY=... node scripts/gerar-audios-eleven.mjs --idioma=br --so=privado --ordem=uso --teto=26000
```
Nunca sobrescreve; retomável; para sozinho no teto de créditos, em custo anormal, em >15% de arquivos suspeitos ou em 8 falhas. A chave nunca vai para o código (segredo do GitHub / variável de ambiente). Revogar as chaves que foram coladas no chat.

## Feito
- ru: 1.980 arquivos (654 públicos, 1.326 pagos), ~18,2 mil créditos.
- pt (narração das explicações): 962 arquivos, ~15,9 mil créditos.
- br: público e pago por frequência de uso, em andamento (ver manifest para o que já existe).

## Pendente
- br restante; de/en/es/fr/it (escolher vozes; o resto vai para Azure).
- Ouvir de ouvido: sílaba tônica do russo, palavras soltas.
- Deploy: bloqueado até o GitHub Actions voltar (cobrança); nada disso está no ar.
