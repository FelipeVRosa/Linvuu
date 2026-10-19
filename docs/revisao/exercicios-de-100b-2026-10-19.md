# Segundo lote de 100 exercícios ativos — 19/10/2026

Base: 81a8eebc08f00191b5d7dc7051e1acc018a54c78.

## Resultado

100 exercícios revisados: nove da aula de-021, 20 da 024, 19 da 026, 26 da 029, dez da 032, dez da 035 e seis da 036. O CSV identifica cada ID e a resposta preservada. Organização: quatro blocos internos sequenciais de 25, um PR/publicação.

100 explicações-placeholder substituídas; 36 enunciados esclarecidos. Não houve mudança de IDs, alternativas, gabaritos ou respostas. Os 100 IDs foram sincronizados nos sete dias correspondentes, com exatamente uma cópia derivada por ID nesse conjunto.

Correções principais: tempo verbal explícito no Präteritum/Perfekt; destino diferenciado de movimento dentro de um lugar; contrações não descritas como universalmente obrigatórias; artigo definido pedido expressamente; instruções de flexão de adjetivos ajustadas ao caso; ob delimitado como pergunta indireta. A explicação de dass não chama crença de fato comprovado, e as preposições não são ensinadas como movimento=acusativo/parado=dativo.

## Validação e limites

Comparação profunda permitiu somente mudanças de enunciado/explicação. Estrutura, metadados, ordem, opções e respostas preservados. Todos os gabaritos de múltipla escolha do lote pertencem às opções. Isso complementa a conferência linguística, não a substitui. Não houve segunda revisão independente nem teste visual dos exercícios pagos em sessão autenticada. Não representa aprovação global das sete aulas.

Não houve mudança de áudio/hashes, ativação de pendentes, design, preços, pagamentos ou APK. Nenhuma geração TTS paga. As 48 entradas de áudio antes identificadas para reconciliação permanecem como estavam.

## Acumulado

Explicações-placeholder: 1.182 → 1.082 (inglês 921; alemão 161). Primeira leitura dos pendentes continua em 271/271, indicador separado. Próximo lote: continuar pelos placeholders restantes da 036 e seguintes, sem repetir os IDs do CSV.

## Para que servem os livros

O código já contém aulas marcadas geradaDoLivro. scripts/compilar-aulas.mjs preserva essas aulas e informa que passam a ser editadas diretamente no JSON. scripts/livros/ inclui extração de DOCX/PDF, geração de aulas, publicação de capítulos e sincronização. O sumário de alemão organiza temas e níveis. Isso confirma uma função real de base editorial e organização; não prova que cada página de cada livro foi corretamente adaptada.

Os livros podem oferecer leitura contínua, teoria, tabelas e consulta aprofundada; o aplicativo oferece exercícios, feedback, áudio e progresso. A explicação imediata do exercício deve ser autossuficiente. Retirar apenas o aviso Veja a chave comentada no livro não elimina o livro: resolve uma dependência inadequada no momento de corrigir uma resposta.

A leitura no navegador em src/lib/livrosCliente.ts inclui capítulos 01 e 02 como amostras. Na pasta de alemão consultada existem esses dois capítulos e o sumário; isso não demonstra que o livro completo esteja disponível na interface. Ainda falta o mapa capítulo → aula e a conferência integral de cobertura/nível. As correções precisam ser reconciliadas entre as versões editoriais, evitando reimportar conteúdo antigo sobre as aulas revisadas. Nenhuma reimportação foi executada neste lote.

Evidências: scripts/compilar-aulas.mjs; scripts/livros/sincronizar_aulas.py; src/lib/livrosCliente.ts; content/livros/de/sumario.json.

## Fontes de conferência

IDS Grammis: https://grammis.ids-mannheim.de/progr%40mm/6858 ; https://grammis.ids-mannheim.de/progr%40mm/6752 .

Duden: https://www.duden.de/sprachwissen/fuer-lernende/wortarten-adjektive ; https://www.duden.de/sprachwissen/sprachratgeber/steigerung-komparation-deutsche-adjektive .
