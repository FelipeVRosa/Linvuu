# Plano de aulas: Russo e Alemão

## 1. Onde ficam as aulas (decisão)
- **GitHub guarda as aulas.** Cada dia é um arquivo em `content/idiomas/<id>/dia-NNN.json`. Assim cada mudança passa por pull request, a Luiza revisa traduções e o histórico fica salvo.
- **Render publica sozinho.** Push na `main` → o Render roda `npm run build` → o site novo vai ao ar. Não precisa de backend novo para mostrar aulas: elas viram arquivos carregados sob demanda.
- **Firestore guarda o aluno**, não as aulas: `users/{uid}` com XP, streak e aulas concluídas.
- **`server.ts` (Render)** continua só para o que exige segredo: Gemini, Stripe e, mais tarde, validar XP no servidor.
- **Áudio e vídeo** não entram no repositório (peso). Quando houver gravações, vão para o Firebase Storage. Até lá, as aulas usam a voz do navegador (Web Speech API), que varia por aparelho.

## 2. Medidas reais das 10 aulas de russo
Tempo estimado com 20 s por palavra, 12 s por fala de diálogo, 90 s por ponto de gramática, 25 s por exercício, 5 min de leitura e 1 min por pergunta de "О себе". São estimativas, não cronometragem.

| Aula | Palavras | Falas | Gramática | Exercícios | Tempo |
|---|---|---|---|---|---|
| 1 Olá, estudante! | 28 | 46 | 4 | 12 | 33 min |
| 2 Este é meu amigo | 28 | 38 | 5 | 32 | 42 min |
| 3 Minha família | 24 | 23 | 4 | 25 | 41 min |
| 4 Profissão | 36 | 36 | 5 | 36 | 51 min |
| 5 Eu sou russo, e você? | 26 | 23 | 5 | 53 | 52 min |
| 6 Língua / Idioma | 22 | 21 | 6 | 39 | 46 min |
| 7 O que você faz? | 26 | 26 | 6 | 81 | 66 min |
| 8 Eu tenho tudo! | 26 | 23 | 5 | 55 | 53 min |
| 9 Comida e produtos | 26 | 22 | 5 | 40 | 46 min |
| 10 Roupa e calçado | 26 | 22 | 6 | 50 | 52 min |

Total ≈ 8 horas. Cada aula é de 33 a 66 minutos: não cabe em 1 dia de 15 minutos. Em 1 dia por aula seriam 10 dias de 33–66 min; em 2 dias por aula, 20 dias de cerca de 24 min.

## 3. Plano dos 20 primeiros dias de russo
Regra: a **aula 1 fica como está** (dia 1 inteiro, sem alterar o conteúdo; é a mais curta). As aulas 2 a 10 são divididas em **A** e **B**.
- **A**: primeira metade das palavras, dos diálogos, da gramática e dos exercícios (pela ordem em que já estão).
- **B**: segunda metade, mais a leitura e o "О себе".

| Dia | Conteúdo | Tempo |
|---|---|---|
| 1 | Aula 1 inteira | 33 min |
| 2–3 | Aula 2 (A e B) | 21 + 21 |
| 4–5 | Aula 3 | 21 + 21 |
| 6–7 | Aula 4 | 25 + 25 |
| 8–9 | Aula 5 | 26 + 26 |
| 10 | **Revisão da fase 1** (monta com palavras e exercícios das aulas 1–5, sem texto novo) | ~20 |
| 11–12 | Aula 6 | 23 + 23 |
| 13–14 | Aula 7 (exercícios extras marcados como opcionais) | 33 + 33 |
| 15–16 | Aula 8 | 26 + 26 |
| 17–18 | Aula 9 | 23 + 23 |
| 19–20 | Aula 10 + **prova final do A1 e certificado** | 26 + 26 |

Cada fase de 10 dias fecha com uma revisão, como a trilha já promete. As aulas 11 a 30 do roteiro de russo (A2 e B1) só têm título e tema; seguem o mesmo ritmo de 2 dias por aula depois dos dias 1–20.

## 4. Esquema de aula (v1)
- **Comece aqui**: palavras com acento, transliteração, tradução e áudio, uma a uma.
- **Imersão**: diálogo, "Repare na regra" (gramática com tabelas) e leitura com perguntas.
- **Prática**: preencher lacuna, múltipla escolha, transformar, ditado e "О себе".
- Cada dia guarda `minutosEstimados` (calculado), `nucleo` e `extra` (opcional) e a origem (`aula 7, parte B`). A página mostra o tempo real do dia em vez de uma promessa fixa.
- Os `category` do vocabulário russo misturam português e russo, então a divisão A/B é **pela ordem** e conferida à mão.

## 5. Alemão
As 16 aulas são mais densas (107 a 518 itens por aula, 32 a 85 KB) e o conteúdo está dentro de componentes React próprios (`Bloco1Grammar0N.tsx`), não em dados limpos. Antes de converter é preciso extrair o conteúdo e criar no player blocos de gramática alemã: tabelas de conjugação, esquema da frase em "pinça" e armadilhas de contraste com o português. Estimativa: 2 a 3 dias por aula, 32 a 48 dias no total.

## 6. Rodadas
**Russo (dias 1–20)**
- **R4**: esquema v1, conversor do legado, 20 arquivos de dia gerados e validados, relatório de tempo por dia.
- **R5**: player de "Comece aqui" e "Imersão" no visual do site. O dia 1 fica jogável nessas duas camadas.
- **R6**: player de "Prática", "О себе" e conclusão do dia. Dia 1 completo.
- **R7**: progresso real: XP, streak e aulas concluídas em `users/{uid}`, "continuar de onde parou", regras do Firestore.
- **R8**: revisão da fase 1, prova final do A1, certificado, teste em celular, publicação dos 20 dias. **Russo dias 1–20 no ar em 5 rodadas** (4 se R7 e R8 couberem juntas).

**Alemão**
- **R9**: blocos de gramática alemã no player e aulas 1–3.
- **R10**: aulas 4–7. **R11**: aulas 8–11. **R12**: aulas 12–16.
- **R13**: revisões, prova, ajuste de áudio e publicação. **Alemão em 5 rodadas.**

**Total para russo e alemão: 10 rodadas (R4 a R13).** Sobram 17 das 30 para inglês, espanhol, francês, português, STEM, pagamentos e lançamento.

## 7. O que depende de você
1. **Tempo por dia:** hoje o site promete "15 minutos". Os dias reais ficam em 20–33 min. Opções: mudar o texto para "de 15 a 30 minutos" ou mostrar o tempo estimado de cada dia.
2. **Áudio:** voz do navegador por enquanto (o texto "áudio nativo" do site passa a ser verdade só com gravações). Quem grava e quando?
3. **Revisão:** a Luiza revisa traduções de cada lote antes de marcar "publicada".
4. **Firestore (R7):** vou entregar as regras novas para você publicar.
5. **Fluxo:** uma branch e um PR por rodada, você mescla.
