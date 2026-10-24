# Edge TTS × ElevenLabs: comparação e limpeza (24/10/2026)

Legenda: **[medido]** calculado por `scripts/comparar-audio-edge-eleven.mjs` neste repositório; **[inferido]** conclusão minha; **[não feito]** não verificado.

## O que foi feito
- [medido] Cada MP3 antigo (Edge, `public/audio/<idioma>/` e `server/audio-privado/<idioma>/`) foi comparado com o MP3 de mesmo nome na ElevenLabs (`.../v2/`). Mesmo nome = mesmo texto (hash do texto). Só se compara dentro do mesmo nível (público com público, privado com privado).
- [medido] 10.720 pares. A regra de aceite exige que o arquivo novo tenha pelo menos 0,5 s, tamanho igual ao do manifesto e duração entre 0,25x e 3x da antiga. 10.719 passaram e foram **apagados da pasta antiga** (186 MiB). 1 ficou: `de 810726a3`, o arquivo antigo tem só 0,36 s e o novo 1,6 s (razão fora do limite).
- [medido] A duração mediana do novo é 0,65x a do antigo. As razões baixas vêm de palavras e letras soltas, nas quais o Edge acrescenta cerca de 1,5 s de silêncio; nenhum MP3 novo tem menos de 0,6 s.
- Os `index.json` públicos antigos foram reescritos só com o que sobrou.
- O motor de áudio do **APK** só lia a pasta antiga (Edge), ao contrário do site e do servidor. Agora consulta o índice `v2` primeiro e cai no antigo só para o que não existe lá. Teste: `scripts/testar-audio-apk.mjs` (16 verificações).

## O que sobrou nas pastas antigas = o que ainda falta gerar na ElevenLabs
| idioma | gratuito | pago |
|---|---|---|
| br | 0 | 2 |
| de | 1 | 646 |
| en | 0 | 543 |
| es | 906 | 1429 |
| fr | 0 | 307 |
| it | 556 | 1440 |
| pt | 0 | 0 |
| ru | 4 | 16 |

Inclui 23 arquivos antigos privados cujo gêmeo novo é público (nível diferente); foram mantidos por prudência.

## Limites desta limpeza
- [não feito] **Não comparei a voz de ouvido.** A comparação é de existência, tamanho e duração. A qualidade da voz nova foi aprovada pelo dono no piloto.
- Os arquivos apagados continuam no **histórico do Git**: o tamanho do `.git` e do primeiro `git clone` não encolhe. Só o conteúdo de trabalho e o que o servidor empacota ficam menores. Reduzir o histórico exige reescrevê-lo e não foi feito.
- Não rodar `scripts/gerar-audios.mjs` (Edge): ele gera de novo o que falta na pasta antiga, ou seja, recriaria arquivos que agora vêm da ElevenLabs. Use `scripts/gerar-audios-eleven.mjs`.
- As branches `audio/*` seguem guardando MP3 do Edge antigos.
