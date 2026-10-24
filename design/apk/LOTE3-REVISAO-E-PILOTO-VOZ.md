# Lote 3.1 — revisão dos erros

Somente APK. Website, conteúdos, preços e pagamentos preservados. PR #263 em rascunho, sem merge ou publicação em produção.

## Comportamento

Após terminar um bloco, o aluno pode praticar somente as questões erradas. Exercícios livres de produção/repetição ficam fora dessa correção. A revisão tem armazenamento próprio por usuário, bloco e versão do conteúdo; não modifica a primeira tentativa nem sua nota.

Cada rodada apresenta as questões pendentes uma vez. Após o resumo, a próxima rodada contém somente as que continuam erradas. As explicações acompanham a correção e podem ser consultadas novamente no resumo. O resultado original permanece acessível, com foco devolvido ao título ao sair da revisão.

Questão, escolha, ordem das palavras, rascunho, feedback e rodada são recuperados ao reabrir a revisão. Alterações nos exercícios ou na lista original de erros reiniciam apenas a revisão incompatível. Dados inválidos são rejeitados. Reabrir a tentativa inicial sem mudanças deixou de atualizar sua data/gravar um novo journal desnecessariamente.

A interface tem textos PT/EN/ES, navegação por setas/Home/End nas alternativas, indicadores textuais de acerto/erro e regiões vivas alternadas. A animação de feedback respeita movimento reduzido. Foram corrigidos contrastes no atalho de conteúdo e nos botões de etapas expandidos no tema escuro, somente no APK.

## Validação

- Tipos de website e APK; modelos de revisão/tentativa e recuperação com ponte simulada.
- Revisão em Chromium usando os 42 exercícios reais de inglês/dia 4: erro inicial, recuperação de rascunho e feedback, três tipos de questão, rodada só de erros restantes, conclusão, preservação byte a byte da tentativa original e foco de retorno.
- Axe e transbordamento em 320px com texto 200%, nos dois temas, incluindo etapas expandidas. Regressões existentes permanecem no CI.
- Dados de estudo continuam locais no aparelho. A revisão não passou a sincronizar entre aparelhos. O limite anterior do journal continua em vigor; teste de volume extenso e Android físico/TalkBack permanecem necessários.

## Piloto de locução — fora do APK

Texto: **The world has so much to say. Join the conversation. Linvuu.**

Um piloto MP3 foi gerado no Fish Audio conectado, com modelo gratuito `s2.1-pro-free` e voz oficial **Graham** (`d16c5ee7505e4403b1f56b3d4d6aadc3`), velocidade 0,94. Duração 4,78 s, 76.485 bytes. O MP3 foi entregue separadamente; não foi incluído no repositório, no app ou em publicidade.

A pesquisa encontrou Igor russo oficial; não localizou Melanie/alemão, Sara ou Jordan/inglês, Julien/francês ou Polina/russo no catálogo licenciado consultado. A Sara encontrada era persa e não foi usada como voz inglesa. Os nomes pedidos continuam pendentes de seleção/identificação exata.

Trata-se de identidade sonora/locução experimental, sem promessa de melhorar indexação. A pronúncia final de Linvuu, a direção sonora e a liberação comercial ainda precisam ser validadas. Não foram clonadas vozes nem incorporados sons de outras marcas.

Fontes oficiais: [API gratuita e limitações](https://fish.audio/blog/s2-1-pro-free-api/), [termos](https://fish.audio/terms/). O texto oficial distingue prototipagem gratuita e condições de produção comercial; catálogo licenciado e plano gratuito não são, por si, liberação irrestrita para anúncios.
