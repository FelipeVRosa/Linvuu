# PENDENTE: só falta o áudio (es, fr, it, de, ru)

**Lembrete para a próxima sessão.** Os diálogos e as leituras (com tradução e 3 perguntas) de espanhol, francês, italiano, alemão e russo já estão escritos, na mesma linha do inglês. Eles ficam em `content/idiomas/<idioma>/pendentes/` e **não estão no site** porque ainda não têm áudio (publicar assim deixaria botões de som sem som).

| Idioma | Aulas em `pendentes/` | MP3 novos a gerar (estimativa) |
|---|---|---|
| es | 52 | 205 |
| fr | 57 | 225 |
| it | 50 | 163 |
| de | 60 | 60 |
| ru | 52 | 87 |

## Quando a voz estiver definida (Felipe vê o Azure em 16/10/2026)
1. **Decidir a voz antes de gerar.** Se for Azure AI Speech (ou outro serviço licenciado), trocar o motor em `scripts/gerar-audios.mjs` ANTES de gerar estes áudios, para não gerar duas vezes. Vozes por personagem: `content/idiomas/<idioma>/vozes.json` (m/f). Os nomes novos já foram adicionados (es: Óscar, Sandra, Ortega…; fr: Paulo).
2. Para cada idioma:
   ```
   node scripts/ativar-pendentes.mjs <idioma>      # move pendentes/ para complementos/ (mantém o repita)
   node scripts/aplicar-complementos.mjs <idioma>  # insere diálogo, leitura e reforço nas aulas
   node scripts/aulas.mjs <idioma>                 # regenera índices e o CSV de áudio
   node scripts/conteudo.mjs --check
   ```
3. Gerar **só o que falta**: workflow `audio.yml` com `-f inputs[so_gratis]=true` ou um `limite` (o `existe` do gerador só olha `public/`, então `so_gratis=false` regenera tudo o que é privado: ~50 min e arquivos reescritos). Ou corrigir o `existe` para olhar também `server/audio-privado/`.
4. Antes de mesclar o branch de áudio, rodar `node scripts/proteger-audio.mjs <idioma>` e conferir que nenhum MP3 do CSV está faltando.
5. Depois de ativar, o reforço automático pode subir a média acima de 40 exercícios (ditado e ordenar com as falas novas). Alemão e russo ainda ficam abaixo em várias aulas.

## Revisão humana (Felipe e Luiza)
As traduções e os textos foram escritos pelo Claude. Antes do lançamento (05/11/2026), alguém que conheça cada idioma deve revisar, principalmente es, fr, it, de, ru nas aulas avançadas.
