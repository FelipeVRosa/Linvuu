# Itens 3 e 4 — conclusão visual e estados honestos

Escopo: APK, sem merge em main, sem publicação em produção e sem alterações no website, pagamentos ou áudios.

## Base medida pelo Composio

O conector GitHub retornou 6 check runs aprovados no commit `3579f9b`. O registro está em `lote32-baseline-composio.json`. São métricas técnicas de CI, não satisfação, retenção ou abandono de alunos. Google Analytics e Semrush não estavam conectados; não foram ativados nem foram inventadas métricas de uso.

Antes desta alteração, a confirmação era um parágrafo com link. A conclusão não tinha componente visual próprio, e o registro local não era conferido antes de atualizar a interface.

## Item 3 — visual e movimento

Cartão com confirmação vetorial original, ações visíveis e dados existentes da sessão. Dois efeitos curtos, de 400 e 500 ms, uma execução por confirmação nova. Movimento reduzido desativa ambos. A reabertura, a navegação entre blocos e um segundo clique não devem repetir a celebração. Sem confete, loop, nova dependência ou áudio adicionado.

O foco vai ao título da confirmação nova. Foram corrigidas cores herdadas da caixa de tarefa no tema escuro, exclusivamente no APK.

## Item 4 — estado e recuperação

- Leitura concluída: marcação do aluno, sem nota ou percentual de acertos fictício.
- Prática corrigida: resultado da tentativa registrada, separado da revisão posterior.
- Revisão finalizada: exige terminar a rodada e acertar os erros originais; a interface acompanha mudanças locais confirmadas.
- Histórico anterior: preservado quando falta resultado compatível com o conteúdo atual; não inventa nota.
- Falha de gravação: a conclusão não é confirmada nem celebrada se o registro local não puder ser lido de volta. Se o dia não for registrado no percurso, há aviso e repetição da tentativa de registro.

O texto confirma somente o registro local. Não promete sincronização na nuvem, domínio do idioma, recuperação após desinstalação ou durabilidade da ponte nativa além dos limites já informados pelo aplicativo.

## Verificações

`scripts/testar-conclusao-apk.mjs`: três idiomas de interface, dois temas, 320px/fonte 200%, movimento normal/reduzido, foco, limite das animações, ausência de replay, falha de armazenamento com retry, histórico, prática e revisão recuperadas. O JSON gerado registra medidas e limites.

Regressão da revisão anterior: 42 exercícios reais, 31 erros e quatro tipos corrigíveis. Builds separados, tipos e testes de armazenamento continuam no CI. TalkBack, Android físico, FPS em aparelho e comportamento real dos alunos permanecem sem certificação nesta rodada.
