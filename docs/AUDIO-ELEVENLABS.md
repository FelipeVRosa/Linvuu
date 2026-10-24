# Troca de vozes: Edge TTS → ElevenLabs v4

Estado em 23/10/2026. Tudo abaixo está na main e no ar (deploy de 23/10). **Russo aprovado pelo dono (inteiro).**

## Decisões fixas
- Modelo `eleven_v4`, `language_code` explícito, configurações padrão da voz, MP3 44,1 kHz 64 kbps, `seed` derivada do hash.
- Custo real pela API: **~0,44 crédito por caractere** (cabeçalho `character-cost`), menos da metade do que o conector estima.
- Vozes (m / f):
  - russo: `VwRq6NLQB8AqRusa9F9t` Arcadees / `xcVbjGhhLIoKi3va6mAe` Viktoriya Voloshina
  - português (pt e br): `uuRRBfx9C2chYfSRNn6t` Vander Maria / `BQzELs93jJsUOf5rCb9p` Vanessa
  - inglês: `Gfpl8Yo74Is0W6cPUWWT` Max / `hpp4J3VqNfWAUOO0d1Us` Bella
  - alemão: `r8MyP4qUsq5WFFSkPdfV` Johannes / `rKiu7lQ4c5P3az3745s3` Carla Blum
  - francês: `AfbuxQ9DVtS4azaxN1W7` Léo / `6vTyAgAT8PncODBcLjRf` Claire Estelle
- Caminho versionado, para o cache nunca servir voz antiga: públicos em `public/audio/v2/<idioma>/`, pagos em `server/audio-privado-v2/<idioma>/`. O áudio do Edge continua como reserva (o app e o servidor caem nele onde não houver v2).
- Nome do arquivo = hash do texto (igual a `src/lib/audio.ts`). `manifest.json` por pasta registra voz, caracteres, créditos e duração de cada arquivo.

## Como retomar / continuar
```
ELEVENLABS_API_KEY=... node scripts/gerar-audios-eleven.mjs --idioma=de --simular
ELEVENLABS_API_KEY=... node scripts/gerar-audios-eleven.mjs --idioma=de --so=privado --ordem=aula --teto=4000
```
Nunca sobrescreve; retomável; para sozinho no teto de créditos, em custo anormal, em >15% de arquivos suspeitos ou em 8 falhas. A chave nunca vai para o código (segredo do GitHub / variável de ambiente). Revogar as chaves que foram coladas no chat.

## Feito (23/10/2026)
| Idioma | Frases | Em ElevenLabs | Falta |
|---|---:|---:|---:|
| ru | 1.980 | 1.980 | 0 |
| pt (narração) | 962 | 962 | 0 |
| br | 2.552 | 2.552 | 0 |
| en | 2.370 | 1.864 | 506 (pagas depois da aula 46) |
| de | 2.471 | 1.889 | 582 (pagas depois da aula 46) |
| fr | 1.831 | 1.477 | 354 (pagas depois da aula 46) |

Gasto total ~126,4 mil créditos. Reserva estimada ~4,5 mil (a chave não lê o saldo; conferir no painel).
Promo: `marketing/promo/linvuu-promo-{pt,en,es}.mp3` (slogan, 68 créditos).

## Plano para o que falta (decidido com o dono em 23/10)
- **Alemão:** os créditos restantes do ElevenLabs vão para cá, em ordem de aula (`--ordem=aula`). Kokoro é ruim em alemão.
- **Alternativa Kokoro (offline, sem custo):** bom em inglês, francês, espanhol e italiano; **ruim em russo, português e alemão** (avaliação do dono). Usar para completar en e fr depois da aula 46 e, se aprovado, trocar a voz Azure/Edge de es e it. Plano e lotes do Kokoro: PR #307 (`docs/` do Android internacional).
- Atenção ao misturar: en e fr teriam ElevenLabs até a aula 46 e Kokoro depois. Decidir antes de gerar.
- es e it continuam em Azure/Edge até lá.

## Pendente
- Ouvir de ouvido: sílaba tônica do russo, palavras soltas; vozes en/de/fr foram escolhidas só pelo catálogo.
- Revogar as duas chaves expostas no chat e guardar a nova como segredo do GitHub.
