# Lote 2 — tentativa de estudo e movimento no APK

Escopo: somente Android, na branch `gpt/website-apk` / PR #263 em rascunho. Website, materiais, preços, cobrança e vozes existentes preservados. TTS e pagamentos ficam para a etapa final de preparação comercial; não impedem desenvolver e testar a interface.

## Alterações

- Questão atual, opção, ordem das palavras, rascunho, feedback e resultados são recuperados ao remontar o bloco. A conta/visitante integra a chave de armazenamento.
- O conteúdo completo do exercício participa de uma assinatura determinística de versão. Mudanças em opções, gabarito, áudio, explicação ou enunciado invalidam a tentativa e o resumo correspondente. A assinatura não é um mecanismo de segurança nem prova de desempenho.
- Dados restaurados têm limites estruturais e verificações de coerência da sequência e do feedback atual. Resumos precisam corresponder à versão e ao total corrigível do bloco. Histórico de sessões já concluídas continua preservado.
- Texto livre de exercícios de produção não é gravado. As demais respostas são dados locais de estudo; não foram adicionadas transmissões ao servidor.
- Navegar por um bloco não o marca como prática concluída. Indicadores de alternativa certa/errada incluem texto, e o link da sessão seguinte aparece após concluir a atual.
- A Home distingue seleção de idioma, próximo passo e progresso; após as oito sessões gratuitas oferece revisão gratuita.
- Boas-vindas opcionais, com desenho orbital original e movimento breve acionado ao abrir. Não há voz automática, splash obrigatório, música, asset de filme nem dependência nova de animação. `prefers-reduced-motion` desativa o movimento.

## Verificação reproduzível

- `npm run lint` e `npm run lint:apk`.
- `scripts/testar-tentativas-apk.ts`: mudança de conteúdo, feedback coerente, limites, resumos e isolamento por usuário.
- `scripts/testar-armazenamento-apk.ts`: 25 verificações com ponte simulada, incluindo recuperação da tentativa após perda do armazenamento WebView e rejeição de esquemas inválidos.
- `scripts/testar-falha-inicial-armazenamento-apk.ts`: reenvio, exclusão por conta e hooks de armazenamento.
- `scripts/testar-retomada-tentativa-apk.mjs`: rascunho, feedback, questão seguinte e troca de bloco em Chromium.
- `scripts/testar-home-lote2-apk.mjs`: boas-vindas abertas em PT/EN/ES, 320px, fonte 200%, movimento reduzido, axe e revisão após oito gratuitas.
- Suítes existentes de leitura/prática, áudio, interface em cinco larguras/três idiomas e parecer nos dois temas continuam no CI. Arquivos JSON de resultado registram os limites da simulação.
- Builds separados e `npm run testar:plataformas` verificam que o pacote Android não incorpora o checkout web nem os MP3 do site.

## Referências e conectores

Composio confirmou GitHub e Figma ativos; a pesquisa GitHub foi executada. Não foi necessário instalar plugins ou importar bases de conteúdo. Não houve edição de arquivo Figma.

- [Echo-Loop](https://github.com/echo-loop/Echo-Loop), AGPL-3.0: retomada por etapa/frase e revisão de trechos difíceis. Referência conceitual; código e imagens não incorporados.
- [10000sentences](https://github.com/tkrajina/10000sentences), Apache-2.0 para código: estados de estudo distintos. Não foram importadas frases ou dados.
- [AnkiDroid](https://docs.ankidroid.org/): clareza entre estudo, revisão e recuperação.
- [W3C — Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) e [Google — Animation and motion](https://web.dev/learn/accessibility/motion): movimento não essencial deve ter controle e alternativa reduzida.

## Limites e pendências expressas

Chromium e uma ponte simulada não certificam Android físico, TalkBack, interrupção do processo pelo sistema, armazenamento real, login ou sincronização entre aparelhos. Tentativas parciais permanecem no aparelho; o servidor não passou a sincronizá-las. O journal mantém o limite existente de 900 mil caracteres e sinaliza falhas; histórico extenso ainda pede avaliação de volume/armazenamento antes de expansão.

A validação comercial de TTS, pronúncia, licenças, Google Play Billing e compras reais continua pendente. A voz de boas-vindas será produzida nessa etapa, com identidade original e controle de reprodução. Nenhuma nova geração de áudio foi executada neste lote.

Não houve merge em `main`, publicação na Play Store ou deploy em produção. O binário de teste é entregue pelo fluxo de assinatura estável e release em rascunho já existente; o resultado nativo deve ser conferido no workflow correspondente ao commit final.
