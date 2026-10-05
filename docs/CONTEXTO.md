# Contexto do projeto (leia primeiro)

Para retomar numa conversa nova com o Claude, diga: "Leia docs/CONTEXTO.md e docs/ANALISE-E-PLANO.md do repositório FelipeVRosa/Linvuu e continue da próxima rodada." O repositório é público: o Claude consegue clonar e ler sem token. O token só é preciso para enviar (push).

## O que é
Linvuu: idiomas e STEM em trilhas de 100 dias, para falantes de português. Dono: Felipe. Revisão de design e traduções: Luiza. E-mail oficial: hello.linvuu@gmail.com.

## Onde cada coisa fica
| O quê | Onde | Observação |
|---|---|---|
| Código do site e as aulas | GitHub `FelipeVRosa/Linvuu` | Fonte da verdade. Tudo que não estiver aqui pode se perder |
| Site no ar | Render, https://linvuu.com.br | Só publica o que está no GitHub; deploy a cada push na `main` |
| Contas, XP, streak | Firebase (Auth + Firestore, coleção `users`) | Fora do GitHub: precisa de backup próprio |
| Chaves e variáveis | Painel do Render e Console do Firebase | Guarde uma cópia num gerenciador de senhas, nunca no GitHub |
| Domínio | Registro.br | Ative verificação em duas etapas e anote a data de renovação |
| Áudio nativo (futuro) | Servidor/armazenamento a contratar | O site lê de `VITE_AUDIO_BASE_URL`; até lá usa a voz do navegador |

## Estrutura do repositório
- `content/trilha-100-dias.json`: trilha-mestre (10 fases, 100 dias).
- `content/cursos.json`: cursos e status.
- `content/idiomas/<id>/aulas/aula-NNN.json`: **aulas escritas** (4 sessões de ~30 min). É aqui que o conteúdo novo entra.
- `content/idiomas/<id>/dia-NNN.json`: um dia por sessão. **Gerado** por `npm run aulas`. Não edite à mão os dias 1 a 24 do russo.
- `content/audio/<id>-gravar.csv`: lista de áudios a gravar (arquivo = hash do texto + .mp3).
- `content/legado/`: material anterior (alemão: 16 aulas; russo antigo; site estático). Fonte de consulta.
- `src/`: site (React + Vite). `server.ts`: API (Gemini, Stripe) e serve o `dist/` no Render.
- `docs/`: este contexto, a análise e o plano, marketing, internacional, a revisão das aulas, publicar, autenticação, backup.
- `src/i18n/`: textos do site e idiomas da interface. `scripts/seo.mjs`: sitemap e robots (rodam no build).

## Comandos
- `npm run dev`: abre o site local (porta 3000).
- `npm run aulas`: transforma as aulas em dias e gera a lista de áudios.
- `npm run auditar`: gera `docs/REVISAO-RU-AULAS.md` (alfabeto, letras fora de ordem, duplicatas, minutos, promessas).
- `npm run build`: valida o conteúdo e gera o site.

## Como adicionar uma aula (sem gastar tokens)
Dois jeitos. O compacto gasta cerca de 40% menos texto:
- **Compacto (recomendado):** escreva `content/idiomas/ru/fontes/aula-011.mjs` (copie `aula-007.mjs`). Palavras, diálogos e exercícios são listas curtas; ids, áudio e minutos são automáticos. Formato em `scripts/dsl-aula.mjs`.
- **JSON:** salve em `content/idiomas/ru/aulas/aula-011.json` (formato das aulas 1 a 6).
1. Escreva a aula pelo VS Code (não cole no chat).
2. `npm run aulas && npm run auditar` (o primeiro compila as fontes compactas e gera os dias).
3. Leia o relatório, corrija o JSON, repita.
4. Commit, push em uma branch e abra o PR. O teste automático roda o build.

## Decisões tomadas
- Mascotes só depois de pintados (`src/config/mascotes.ts`). Visual sóbrio, botões em pílula.
- Honestidade: nada de nível ou fluência em número fixo de dias. Horas e tempos saem do conteúdo (calculados), não de texto digitado.
- Login por e-mail e senha ativo; Google escondido até ser ativado.
- GitHub Pages foi descartado; hospedagem é o Render.

## Estado (rodada 10)
- Russo: aulas 1 a 24 (dias 1 a 96, status "publicada", curso "Disponível"; as aulas 11 a 16 e 20 a 22 são de gramática) estão no site, com player de sessão (áudio pela voz do navegador, exercícios, progresso salvo no navegador). O alfabeto fecha (33 letras; У e Х entraram na aula 1).
- Aba Gramática em `/gramatica/ru`, gerada das aulas (`scripts/gramatica.mjs`); ordem do curso, qualidade e próximos passos em `docs/GRAMATICA-RU.md`. Blocos de gramática aceitam `comparacao`, `erros`, `tabelas` e `tag`.
- A página do curso lista por aula quando o curso tem aulas escritas; as fases genéricas só aparecem para o que ainda é planejado.
- Os áudios RED KALINKA enviados pelo Felipe não entram no site nem no repositório (decisão dele; ele é o autor do livro). Ver `docs/GRAMATICA-RU.md`, seção 6.
- Marketing reescrito (ver `docs/MARKETING.md`); textos em `src/i18n/pt-BR.ts`; preparação internacional em `docs/INTERNACIONAL.md`.
- Páginas de termos e privacidade (modelo inicial, precisa de revisão jurídica e dos dados da empresa).
- Pendente de revisão: ver `docs/REVISAO-RU-AULAS.md` (diálogo da aula 1 com russo pouco natural, negação na aula 7).
- Progresso por conta (Firestore), áudio nativo, pagamento, termos e privacidade: ainda não feitos.
