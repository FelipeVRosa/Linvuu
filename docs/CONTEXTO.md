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
- `docs/`: este contexto, a análise e o plano, a revisão das aulas, publicar, autenticação.

## Comandos
- `npm run dev`: abre o site local (porta 3000).
- `npm run aulas`: transforma as aulas em dias e gera a lista de áudios.
- `npm run auditar`: gera `docs/REVISAO-RU-AULAS.md` (alfabeto, letras fora de ordem, duplicatas, minutos, promessas).
- `npm run build`: valida o conteúdo e gera o site.

## Como adicionar uma aula (sem gastar tokens)
1. Salve o JSON em `content/idiomas/ru/aulas/aula-007.json` pelo VS Code (não cole no chat).
2. `npm run aulas && npm run auditar`.
3. Leia o relatório, corrija o JSON, repita.
4. Commit, push em uma branch e abra o PR. O teste automático roda o build.

## Decisões tomadas
- Mascotes só depois de pintados (`src/config/mascotes.ts`). Visual sóbrio, botões em pílula.
- Honestidade: nada de nível ou fluência em número fixo de dias. Horas e tempos saem do conteúdo (calculados), não de texto digitado.
- Login por e-mail e senha ativo; Google escondido até ser ativado.
- GitHub Pages foi descartado; hospedagem é o Render.

## Estado (rodada 5)
- Russo: aulas 1 a 6 (dias 1 a 24) estão no site, com player de sessão (áudio pela voz do navegador, exercícios, progresso salvo no navegador).
- Pendente de revisão: ver `docs/REVISAO-RU-AULAS.md`.
- Progresso por conta (Firestore), áudio nativo, pagamento, termos e privacidade: ainda não feitos.
