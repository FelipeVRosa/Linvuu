# Próximo passo: progresso que ajuda o aluno a continuar

## Objetivo

Depois do Vuu 2D publicado e da descoberta dos livros, melhorar a primeira sessão e a retomada com sinais de progresso verdadeiros e mensagens acolhedoras. O aluno deve entender onde está, o que já marcou e qual é o próximo passo; estudar não deve depender de manter uma sequência de dias.

## Base já existente

- `src/lib/progresso.ts` armazena posição de bloco e sessões marcadas, separa visitante e conta e registra pendências de sincronização. Uma sessão pode ser marcada manualmente, portanto sua conclusão não prova domínio.
- `src/lib/retomar.ts` encontra a primeira sessão não marcada de um curso e já expõe quantidade e ponto de retomada.
- `src/components/Sessao.tsx` apresenta blocos e feedback de exercícios. O resultado exibido numa atividade não deve ser tratado como evidência longitudinal sem verificar persistência e modelo de dados.
- [PR #367](https://github.com/FelipeVRosa/Linvuu/pull/367) contém um protótipo separado de percurso, prática, revisão e transferência. Continua em rascunho; aproveitar suas ideias depois de revisão pedagógica e técnica, sem mesclá-lo automaticamente.

## Primeira entrega implementável

1. Reproduzir em desktop e celular as jornadas de visitante novo, aluno retornando e aluno autenticado; documentar o que já aparece e o que é salvo.
2. Desenhar um resumo de retomada para o idioma ativo, com nome da próxima sessão e contagem real de sessões marcadas; destacar um único botão para continuar. Incluir estado inicial sem progresso e respeitar contas distintas.
3. Acrescentar mensagens do Vuu que apoiem a tentativa e o retorno sem inventar acertos, domínio, níveis concluídos ou dias de sequência. Usar o SVG aprovado e não depender apenas de cor ou movimento.
4. Ligar a um livro ou capítulo somente após verificar correspondência entre o tema da aula e o conteúdo real. Na ausência desse vínculo, oferecer o livro do idioma de maneira geral, sem sugerir equivalência pedagógica específica.
5. Testar isolamento de progresso, retomada após recarregar, login/logout, teclado, leitor de tela quando possível, telas pequenas e movimento reduzido. Usar dados de teste; verificar se eventos existentes mantêm o consentimento e não enviam respostas.

## Critério de aceitação

Uma pessoa sem histórico consegue começar; uma pessoa com histórico encontra o próximo passo verdadeiro; sessão marcada e domínio permanecem claramente distintos; nenhuma nova métrica de retenção é afirmada sem medição. Documentar o que foi observado, checks, limites e deploy.

## Frentes seguintes

Revisão espaçada e evidências de aprendizagem exigem desenho de armazenamento, critérios pedagógicos e revisão de privacidade; bibliografia B1–B2 e testes completos de pagamento seguem em frentes próprias. Não prometer resultados de aprendizagem ou SEO com base apenas na interface.
