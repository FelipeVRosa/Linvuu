# Guia de transição: áudios que faltam (para o ChatGPT gravar)

Gerado em 18/10/2026. Não é preciso gravar tudo de novo: **o site já tem a maior parte dos áudios** (públicos em `public/audio/`, pagos em `server/audio-privado/`). Faltam só os áudios do conteúdo novo (diálogos e leituras já escritos, que ainda não estão no ar).

| Idioma | Áudios a gravar | Lotes (≤100) | Locale | Voz masculina (padrão atual) | Voz feminina (padrão atual) |
|---|---|---|---|---|---|
| es | 261 | 3 | es-ES | Álvaro | Elvira |
| fr | 280 | 3 | fr-FR | Henri | Denise |
| it | 224 | 3 | it-IT | Diego | Elsa |
| de | 60 | 1 | de-DE | Conrad | Katja |
| ru | 88 | 1 | ru-RU | Dmitry | Svetlana |
| br | 2 | 1 | pt-BR | Antônio | Francisca |
| en | 0 | – | – | – | – |
| **Total** | **915** | 12 | | | |

Cada lote é um CSV neste diretório: `<idioma>-lote-NN.csv`.

## O que fazer (regras exatas)
1. **Um arquivo MP3 por linha** do CSV, com o nome **exatamente** igual à coluna `arquivo_final` (ex.: `882de0c8.mp3`). O nome é um hash do texto; se estiver diferente, o site não toca.
2. **Fale exatamente** o que está em `texto_falado`. Sem acrescentar, resumir, traduzir ou corrigir. Sem «Claro!», sem número da linha, sem silêncio longo no começo ou no fim (no máximo 0,3 s).
3. `voz` = `m` (voz masculina) ou `f` (voz feminina). **Use sempre a mesma voz masculina e a mesma feminina em todo o idioma**, para as falas de um diálogo não mudarem de timbre entre as aulas.
4. Ritmo de aula: natural e claro, um pouco mais lento que conversa (cerca de 90% da velocidade normal). Uma frase termina com entonação de frase; pergunta sobe.
5. Idioma/variante: es = Espanha; fr = França; it = Itália; de = Alemanha; ru = Rússia; br = português do Brasil.
6. `texto_com_acento` (russo) mostra o acento tônico quando existe; **o acento não é falado como sinal**, serve só para você pronunciar certo. Se o acento do texto parecer errado, não corrija: avise em `observacoes.txt` com o nome do arquivo.
7. Números, siglas e datas: leia como estão escritos por extenso na língua; não invente.
8. Formato: MP3, mono, 24 kHz, ~48 kbps (o mesmo dos áudios atuais; cada frase pesa de 10 a 40 KB).
9. Entrega: **um ZIP por lote** (`ru-lote-01.zip`) com os MP3 soltos (sem subpastas), mais, se precisar, `observacoes.txt`.

## Prompt pronto para colar no ChatGPT
> Vou te enviar um CSV com frases em [IDIOMA] (colunas: ordem, arquivo_final, voz, locale, texto_falado, texto_com_acento, onde_aparece). Gere um MP3 para cada linha, lendo SOMENTE a coluna texto_falado, com a mesma voz masculina quando voz=m e a mesma voz feminina quando voz=f, ritmo de aula (≈90% da velocidade), sem pausas longas. Salve cada MP3 com o nome exato da coluna arquivo_final. Entregue um ZIP com todos os MP3 soltos. Não pule linhas; ao final diga quantos arquivos gerou e liste qualquer linha que não conseguiu gerar.

(Se o ChatGPT não gera tantos arquivos de uma vez, mande o lote em partes de 25 linhas; o nome continua sendo `arquivo_final`.)

## Conferir e instalar (Claude ou o Felipe)
1. Descompacte o ZIP em uma pasta (ex.: `~/audios/ru-lote-01`).
2. Conferir: `node scripts/conferir-audios-chatgpt.mjs ru ~/audios/ru-lote-01` (diz o que falta, o que tem nome errado e arquivos suspeitos: vazios ou com texto extra).
3. Instalar: `node scripts/conferir-audios-chatgpt.mjs ru ~/audios/ru-lote-01 --instalar` e depois `node scripts/proteger-audio.mjs` (separa o que é público do que é privado).
4. **Ouvir uma amostra** (ao menos 10 por lote, incluindo `m` e `f`) antes de mesclar.
5. Só depois **ativar o conteúdo novo** (diálogos e leituras): `node scripts/ativar-pendentes.mjs <idioma> && node scripts/aplicar-complementos.mjs <idioma> && node scripts/aulas.mjs <idioma> && node scripts/conteudo.mjs --check`, e então PR e merge. Os áudios podem entrar antes do texto sem nenhum efeito no site.

## Cuidados
- Os áudios atuais foram feitos com vozes neurais do Edge. Misturar um timbre novo (ChatGPT) com o antigo no mesmo diálogo soa estranho. Para manter um timbre só, use as vozes da tabela, ou gere estes 915 pelo mesmo gerador do site (`docs/AUDIO.md`, workflow «Gerar áudios»).
- Se o Felipe trocar de motor (Azure) depois, os nomes dos arquivos não mudam: basta substituir o MP3 pelo mesmo nome.
- Direitos: confira os termos do serviço de voz usado antes de vender o curso.
