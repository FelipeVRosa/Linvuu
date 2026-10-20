# APK Linvuu — pesquisa e métricas

Base auditada: e053c66f1a0ece89a03bc7e0f79e193fc71b916f. Data de consolidação: 20/10/2026.

**200 consultas distintas executadas e 90 achados registrados.** As consultas anteriores recuperadas cobrem acessibilidade/concorrentes (80); as outras três frentes foram refeitas nesta retomada para garantir registros completos. Consultas são diferentes de páginas ou testes. Nenhum concorrente foi certificado como acessível por esta pesquisa.

## O melhor a adaptar

- Babbel/Mango: download seletivo com estado explícito e remoção; medir conclusão de unidade em modo avião.
- Busuu: planejamento de estudo; medir retomada da próxima sessão sem busca manual.
- Duolingo: retorno aos erros; medir revisão com explicação e resultado recuperável, sem copiar gamificação infantil.
- Anki/AnkiDroid: revisão espaçada e estatísticas reais; medir fila devida, intervalo e recuperação após interrupção.
- Readest/jidoujisho/Lute/LinguaCafe: leitura ajustável e consulta contextual. Alguns são desktop/web; adaptar o princípio, não presumir implementação Android ou licença compatível.
- Android/W3C: controle acessível, foco previsível, texto ampliável, contraste e alternativas ao áudio.

## Painel de aceitação Linvuu

| Critério | Meta | Situação nesta rodada |
|---|---|---|
| Consultas registradas | ≥200 distintas | 200 |
| Achados rastreáveis | benefício + fonte + métrica + limite | 90 |
| Ajustes de leitura | padrão/125%/150%, persistência | implementado e testado na prévia |
| Escala de texto | raiz 200%, 320/390px, sem overflow global | testado em PT/EN/ES; não comprova escala Android |
| Foco em ajustes | primeiro controle ao abrir; botão ao fechar | testado na prévia |
| Foco ao avançar etapa | título da etapa recebe foco | testado na prévia |
| Movimento reduzido | sem animação/transição no APK | CSS ampliado para todo APK |
| axe no recorte | zero violações graves/críticas | consultar design/apk/acessibilidade-resultados.json; verificações incompletas não equivalem a aprovação |
| Controles essenciais | ≥48×48dp no Android | parte já tem48 CSSpx; medir densidade/aparelho e revisar todos |
| Contraste | texto4,5:1; texto grande/controles3:1 | medição integral de todas telas pendente |
| TalkBack | concluir cadastro→aula→correção→retomada | aparelho pendente |
| Ícone reduzido | marca legível32/48px, máscaras adaptativas | proposta SVG com moldura2,8 em vez de1,4; launcher ainda original |
| Áudio | pausa, retomada, interrupção/fone, texto equivalente | implementação completa pendente |
| Offline | download íntegro, tamanho/progresso/remover, estudar semrede | pendente; não anunciar como pronto |
| Performance | medir início, interação, memória em aparelho intermediário | não medido nesta rodada |

## Rodadas de execução

1. **P0 acessibilidade:** leitura e foco desta rodada; depois semântica completa de exercícios, rótulos, contraste e scanner/TalkBack no Redmi.
2. **P0 áudio:** migrar gravações para Azure, validar controles/interrupções e manter falas visíveis. Não revelar resposta de ditado antecipadamente como solução de acessibilidade; oferecer atividade alternativa equivalente.
3. **P1 experiência nativa:** downloads seletivos, revisão de erros, rotina opcional e retomada confiável, sem inflar APK com o acervo.
4. **P1 identidade:** escolher moldura após comparação em quatro máscaras, verificar monocromático e atualizar recursos Android/loja em lote separado.
5. **P0 liberação:** build Android, aparelho, autenticação, políticas e cobrança real em testes antes de publicar.

## Resultado dos testes locais

- lint:apk e build:apk passaram.
- testar-acessibilidade-apk: seis recortes (PT/EN/ES ×320/390px), raiz200%, texto corrido34px; foco/preferência verificados; axe sem violações nesse recorte, uma verificação de contraste inconclusiva por recorte.
- revisar-experiencia-apk: seis cenários passaram, incluindo contraste da aba ativa no escuro e retomada.
- revisar-fluxos-apk: parou na expectativa de formulário de login habilitado. A prévia foi compilada sem configuração Firebase; login estava desativado. O login real e a conclusão integral dessa suíte não foram validados.
- Nenhuma compilação Gradle/instalação ou TalkBack em aparelho nesta rodada.

## Limites e preservação

Mudanças desta rodada restritas à experiência APK e ao comportamento condicional compacta de Sessao. Web não recebe o novo foco nem os novos estilos. Nenhum deploy ou compra foi feito. PR263 continua rascunho. PR308 não foi integrado aqui. Preferência de leitura é local ao dispositivo e não sincroniza com conta. O ícone proposto não substitui automaticamente os PNGs legados/launcher.

## Achados com fontes e métricas

### 1. Alvos de toque generosos

**Benefício:** Botões fáceis de tocar reduzem erros motores e ajudam uso com uma mão.
**Critério:** 100% dos controles essenciais com área acionável ≥48×48 dp; conferir no aparelho, não apenas o desenho do ícone.
**Evidência:** Android recomenda área de foco/toque de ao menos 48 dp por eixo.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/apps
**Limite:** 48dp é recomendação Android; não confundir com mínimo WCAG web de 24 CSS px e suas exceções. WebView exige medir densidade e zoom.
**Prioridade:** P0

### 2. Escala de texto real do Android

**Benefício:** Conteúdo permanece utilizável para baixa visão sem um modo separado.
**Critério:** Fluxos iniciar aula, responder, corrigir e continuar completos com fonte máxima 200% e tamanho de exibição ampliado, sem cortes.
**Evidência:** Android14 oferece escala de fonte não linear de até 200% e recomenda teste nessa configuração.
**Fonte:** https://developer.android.com/about/versions/14/features
**Limite:** Duplicar font-size via CSS não prova suporte à escala nativa no WebView.
**Prioridade:** P0

### 3. Rótulos curtos e sem duplicação

**Benefício:** TalkBack anuncia finalidade da ação, e não apenas aparência do ícone.
**Critério:** 100% dos botões sem texto têm nome acessível; ícones decorativos não produzem paradas extras.
**Evidência:** As etiquetas devem comunicar semântica e elementos decorativos devem ser excluídos.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/principles
**Limite:** Árvore acessível e áudio do TalkBack precisam ser inspecionados no APK.
**Prioridade:** P0

### 4. Ordem de leitura e foco

**Benefício:** O aluno percorre questão, opções, correção e próxima ação em sequência previsível.
**Critério:** Completar os 5 fluxos essenciais só com TalkBack e só com teclado, sem foco preso ou saltos ilógicos.
**Evidência:** Google orienta percorrer cada elemento e verificar se todos os fluxos e elementos são alcançáveis.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/testing
**Limite:** Teste automático não substitui exploração manual ou teste com usuários.
**Prioridade:** P0

### 5. Acesso por interruptor

**Benefício:** Oferece acesso a pessoas que não usam gestos precisos.
**Critério:** Cada ação por toque/gesto possui equivalente selecionável; cada controle aparece uma única vez na varredura.
**Evidência:** O roteiro de Switch Access verifica fluxos completos, duplicações e equivalência das ações gestuais.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/testing
**Limite:** Serviço deve estar ativo no aparelho para validar.
**Prioridade:** P1

### 6. Idioma de cada trecho

**Benefício:** Leitor de tela pode pronunciar o exemplo alemão e a explicação portuguesa de maneira adequada.
**Critério:** 100% dos trechos de idioma estudado e explicações com idioma programático correto; validar alternância de vozes em 7 cursos.
**Evidência:** WCAG3.1.2 exige identificar programaticamente o idioma das passagens, com exceções previstas.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts
**Limite:** O suporte de troca automática depende das vozes instaladas e do TalkBack; lang='br' é inadequado, usar pt-BR.
**Prioridade:** P0

### 7. Foco não encoberto pela barra inferior

**Benefício:** Controles fixos continuam úteis sem esconder respostas e botão de continuar.
**Critério:** Ao focar qualquer elemento, ele fica ao menos parcialmente visível; meta Linvuu: controle e indicador integralmente visíveis.
**Evidência:** WCAG2.4.11 AA não permite componente inteiramente oculto por conteúdo do autor.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum
**Limite:** Cobrir teclado aberto, landscape, fonte grande e safe areas.
**Prioridade:** P0

### 8. Contraste de texto

**Benefício:** Verde, papel e cores de marca podem coexistir com boa legibilidade.
**Critério:** Texto normal ≥4,5:1; texto grande ≥3:1 nos temas claro/escuro e estados relevantes.
**Evidência:** WCAG1.4.3 define os limiares de contraste para texto.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
**Limite:** Medir cor efetiva após transparências; logotipos e controles inativos têm exceções normativas.
**Prioridade:** P0

### 9. Não depender de vermelho/verde

**Benefício:** Acerto e erro são entendidos também por texto e símbolo.
**Critério:** 100% dos feedbacks possuem mensagem explícita e estado programático, além da cor.
**Evidência:** Android recomenda verificar contraste e considerar usuários para quem vermelho/verde não são distinguíveis.
**Fonte:** https://developer.android.com/design/ui/mobile/guides/styles/color
**Limite:** Simulação de daltonismo ajuda, mas não prova acessibilidade completa.
**Prioridade:** P0

### 10. Alternativa textual ao áudio

**Benefício:** Aluno surdo ou sem ambiente para ouvir consegue estudar o mesmo conteúdo.
**Critério:** Áudio de conteúdo com transcrição acessível; exercícios de escuta com alternativa pedagógica identificada e sem penalidade por acessibilidade.
**Evidência:** WAI descreve transcrições como alternativa para informações de áudio.
**Fonte:** https://www.w3.org/WAI/media/av/transcripts/
**Limite:** Ditados avaliativos têm propósito auditivo específico; desenhar alternativa com cuidado, não exibir gabarito e chamar de avaliação equivalente.
**Prioridade:** P1

### 11. Controle de áudio independente

**Benefício:** O estudante consegue parar a fala imediatamente e evitar sobreposição com TalkBack.
**Critério:** Sem reprodução automática ao abrir aula; parar/pausar alcançável com nome claro; somente uma fonte de fala ativa.
**Evidência:** WCAG1.4.2 exige mecanismo de pausa/parada ou volume separado para áudio automático com mais de3s.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/audio-control
**Limite:** A regra normativa é sobre autoplay; Linvuu pode adotar política mais forte de não autoplay.
**Prioridade:** P0

### 12. Progresso compreensível ao leitor de tela

**Benefício:** Barra informa o quanto já foi feito sem depender só da largura visual.
**Critério:** Progresso tem nome, valor atual, máximo e texto 'etapa x de y'; anúncios só em mudanças relevantes, sem repetir a cada render.
**Evidência:** A API expõe valor atual, intervalo e etapas para progresso acessível.
**Fonte:** https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/ProgressBarRangeInfo
**Limite:** No WebView usar progress/ARIA equivalente; a API Compose é referência semântica, não código aplicável diretamente.
**Prioridade:** P0

### 13. Reflow sem rolagem dupla

**Benefício:** A leitura continua vertical em telas pequenas e zoom.
**Critério:** Texto de aula legível na largura de320 CSS px sem rolagem horizontal; tabelas podem ter região rolável identificada.
**Evidência:** WCAG1.4.10 trata adaptação sem perda de informação ou funcionalidade.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/reflow
**Limite:** Tabelas e conteúdos que exigem duas dimensões possuem exceção; não encolher fonte para forçar cabimento.
**Prioridade:** P1

### 14. Espaçamento personalizável

**Benefício:** Ajuda leitura sem impor uma tipografia 'especial' a todos.
**Critério:** Não perder conteúdo com linha1,5×, parágrafo2×, letras0,12em e palavras0,16em aplicados simultaneamente.
**Evidência:** WCAG1.4.12 exige suportar esses ajustes sem perda; não exige que sejam o padrão.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/text-spacing
**Limite:** Verificar controles, chips, feedback e rodapé, não apenas parágrafos.
**Prioridade:** P1

### 15. Movimento sob controle

**Benefício:** A experiência pode ser dinâmica sem prejudicar foco ou sensibilidade visual.
**Critério:** Respeitar preferência de movimento reduzido; animação automática não essencial >5s permite pausar/parar/ocultar.
**Evidência:** WCAG2.2.2 cobre movimento automático prolongado em paralelo a outro conteúdo.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide
**Limite:** Preferência reduce-motion é medida complementar; não substitui os demais critérios.
**Prioridade:** P1

### 16. Alternativa ao arrastar palavras

**Benefício:** Exercício de ordenar frases pode ser resolvido com toques simples.
**Critério:** Toda ordenação por arraste oferece selecionar palavra e mover antes/depois ou tocar para montar; resultado equivalente.
**Evidência:** WCAG2.5.7 AA pede alternativa de ponteiro simples sem arraste, salvo essencialidade.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements
**Limite:** Teclado sozinho não satisfaz a alternativa de ponteiro simples.
**Prioridade:** P0

### 17. Autenticação sem teste de memória obrigatório

**Benefício:** Login funciona com gerenciadores de senha, colar e preenchimento assistido.
**Critério:** Colar senha permitido, autocomplete correto, gerenciador funciona e erro explica como corrigir sem apagar entrada.
**Evidência:** WCAG3.3.8 prevê alternativa ou mecanismo de ajuda para testes de função cognitiva na autenticação.
**Fonte:** https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
**Limite:** Revisar também reautenticação, recuperação e eventuais desafios antiautomação.
**Prioridade:** P0

### 18. Instruções curtas antes da ação

**Benefício:** Reduz carga de memória e ajuda quem está aprendendo outro idioma.
**Critério:** Cada novo tipo de exercício tem instrução concisa, próxima do controle, e exemplo opcional; ação primária única.
**Evidência:** COGA recomenda etapas claras, exemplos e instruções junto do campo/atividade.
**Fonte:** https://www.w3.org/WAI/WCAG2/supplemental/patterns/o4p07-step-instructions/
**Limite:** É orientação suplementar, não um critério WCAG de conformidade por si só.
**Prioridade:** P1

### 19. Ajuda consistente

**Benefício:** O aluno encontra apoio e reporte de problema no mesmo local.
**Critério:** Ajuda/reportar com posição relativa consistente nas telas equivalentes e rótulo constante.
**Evidência:** WCAG3.2.6 A trata consistência do mecanismo de ajuda repetido.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/consistent-help
**Limite:** Não significa que todo aplicativo deva adicionar todos os mecanismos de ajuda listados.
**Prioridade:** P1

### 20. Sem cronômetro obrigatório no modo estudo

**Benefício:** Usuários leem e respondem no próprio ritmo.
**Critério:** Modo estudo sem expiração de resposta; se houver simulado temporizado, oferecer ajuste/desativação quando não essencial.
**Evidência:** WCAG2.2.1 trata ajuste de limites de tempo com exceções especificadas.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable
**Limite:** Avaliações cuja temporização é essencial exigem análise específica.
**Prioridade:** P1

### 21. Downloads por unidade com estado claro

**Benefício:** Babbel documenta baixar unidades e trocar o ícone de download por confirmação; Mango permite baixar e apagar conteúdo.
**Critério:** Linvuu: em modo avião, iniciar e concluir 100% das atividades da unidade baixada; mostrar tamanho, progresso, estado completo e remover download.
**Evidência:** Ajuda oficial descreve aulas completas offline, revisão local e confirmação visual do download.
**Fonte:** https://support.babbel.com/hc/en-us/articles/19176178120722-Offline-mode
**Limite:** Documentação funcional; não é teste nosso do aplicativo. Meta proposta para Linvuu, não medição Babbel.
**Prioridade:** P1

### 22. Revisão agendada com base nas respostas

**Benefício:** Babbel e Anki descrevem revisão espaçada baseada no histórico, reduzindo a necessidade de escolher manualmente o que rever.
**Critério:** Linvuu: fila mostra itens vencidos e próxima revisão; cada resposta cria registro único; testes de relógio/fuso não duplicam revisões.
**Evidência:** Babbel explica que a frequência depende do desempenho e que frases aprendidas entram na revisão.
**Fonte:** https://support.babbel.com/hc/en-us/articles/205600228-Vocab-workout-Review
**Limite:** Não copiar intervalos de outro produto sem validação; eficácia da implementação Linvuu não foi medida.
**Prioridade:** P1

### 23. Aba própria para revisar erros

**Benefício:** Duolingo oferece prática direcionada, incluindo erros anteriores; isso separa aprender conteúdo novo de reparar dificuldades.
**Critério:** Linvuu: exercício errado oferece salvar/revisar; lista preserva enunciado, resposta, explicação e aula; voltar à revisão em no máximo dois comandos a partir do início.
**Evidência:** Artigo oficial mostra prática por habilidade e revisão de erros.
**Fonte:** https://blog.duolingo.com/guide-to-duolingo-practice-hub/
**Limite:** O limite de dois comandos é objetivo Linvuu proposto, não resultado medido no Duolingo.
**Prioridade:** P1

### 24. Próxima aula identificável

**Benefício:** Speak documenta uma indicação da próxima aula na home; Duolingo descreve revisão incorporada ao percurso.
**Critério:** Linvuu: uma ação principal 'Continuar'; rótulo anuncia nome da aula, estágio e situação; nenhuma informação depende exclusivamente de animação ou cor.
**Evidência:** Ajuda oficial explica como a home representa próximas lições e unidades.
**Fonte:** https://help.speak.com/en/articles/11430473-explore-your-new-home-screen
**Limite:** Não copiar bolhas pulsantes: manter identificação estática e suporte à redução de movimento.
**Prioridade:** P0

### 25. Modo para estudar sem falar

**Benefício:** Speak possui modo para quem não pode falar no momento e revisão por escuta.
**Critério:** Linvuu: negar microfone nunca impede concluir um caminho equivalente; alternativa por leitura/seleção acessível em um comando.
**Evidência:** Ajuda oficial descreve aprendizado quando não se pode falar e modo de escuta na revisão.
**Fonte:** https://help.speak.com/en/articles/7969186-what-are-hands-free-mode-and-i-can-t-speak-mode
**Limite:** Alternativa não substitui avaliação de pronúncia quando essa for o objetivo explícito; deve informar habilidade praticada.
**Prioridade:** P0

### 26. Vocabulário salvo pelo próprio aluno

**Benefício:** Speak permite salvar frases e palavras e acessar histórico; Babbel possui coleções de vocabulário.
**Critério:** Linvuu: salvar/desfazer pelo mesmo botão, estado anunciado ao leitor de tela, coleção por idioma estudado e origem da aula preservada.
**Evidência:** Ajuda oficial descreve salvamento durante lição e de frases corrigidas em conversação.
**Fonte:** https://help.speak.com/en/articles/7969167-how-can-i-save-lines-and-words
**Limite:** Não implica implementar geração de conversação IA agora.
**Prioridade:** P1

### 27. Reportar erro no contexto da aula

**Benefício:** Speak disponibiliza um comando de denúncia de problema diretamente na aula.
**Critério:** Linvuu: relatório em até dois comandos, aula/exercício e versão preenchidos automaticamente; aluno revisa texto antes do envio; não anexar tokens ou áudio pessoal por padrão.
**Evidência:** Ajuda oficial indica um ícone de bandeira na tela da lição.
**Fonte:** https://help.speak.com/en/articles/5358706-how-can-i-report-an-issue-in-the-app
**Limite:** Fluxo de contato requer finalidade e dados claros; não enviar feedback durante esta pesquisa.
**Prioridade:** P0

### 28. Plano de estudo ajustável

**Benefício:** Busuu permite definir dias, horário, objetivo e lembretes opcionais.
**Critério:** Linvuu: configurar meta e dias sem exigir notificações; editar/desativar depois; horário respeita fuso local e permissão do Android.
**Evidência:** Centro de ajuda descreve programação escolhida, data estimada e edição do plano.
**Fonte:** https://help.busuu.com/hc/en-us/articles/16097312171153-What-s-a-Study-Plan-How-do-I-make-one
**Limite:** Não prometer fluência em data fixa; estimativas devem explicitar premissas.
**Prioridade:** P1

### 29. Revisão sem depender de uma única modalidade

**Benefício:** Babbel oferece revisão por cartões, escrita, fala e escuta; Busuu documenta cartões com áudio/texto e tradução oculta.
**Critério:** Linvuu: revisão pode ser feita por texto; áudio tem controle separado; não bloquear todo estudo por deficiência auditiva/fala ou ambiente silencioso.
**Evidência:** Ajuda oficial descreve opções e busca de palavras no aplicativo.
**Fonte:** https://help.busuu.com/hc/en-us/articles/16941990776593-How-can-I-review-my-vocabulary
**Limite:** Modalidades praticam habilidades diferentes; não tratar pontuações como diretamente equivalentes.
**Prioridade:** P0

### 30. Gramática explicada junto à prática

**Benefício:** LingoDeer destaca notas gramaticais e revisão de conceitos para explicar o raciocínio, além do acerto.
**Critério:** Linvuu: toda correção possui explicação útil; abrir detalhe sem perder resposta/progresso; referências por aula, não copiar conteúdo de concorrente.
**Evidência:** Página oficial explica objetivo das notas gramaticais, incluindo estruturas, alfabetos e conjugação.
**Fonte:** https://blog.lingodeer.com/about/
**Limite:** Descrição editorial, não prova de eficácia comparativa.
**Prioridade:** P0

### 31. Offline como capacidade específica do mobile

**Benefício:** LingoDeer distingue a experiência offline de seus aplicativos da versão web.
**Critério:** Linvuu: downloader e armazenamento local em módulo APK; web não assume arquivos locais nativos; estados de atualização, insuficiência de espaço e falha testados.
**Evidência:** Ajuda oficial afirma que offline é exclusivo dos aplicativos móveis e inclui componentes da revisão baixados.
**Fonte:** https://support.lingodeer.com/en/support/solutions/articles/61000282604-can-i-learn-offline-
**Limite:** Não copiar implementação ou inferir stack técnica de concorrente.
**Prioridade:** P1

### 32. Controle da carga de revisão

**Benefício:** Anki explicita a relação entre retenção desejada e carga de trabalho, evitando tratar quantidade de cartões como progresso suficiente.
**Critério:** Linvuu: mostrar quantidade prevista e permitir sessão curta; acompanhar taxa de recordação, minutos e abandono; não usar meta de retenção como garantia.
**Evidência:** Manual do Anki explica desejada retenção e simulação/carga de revisão.
**Fonte:** https://docs.ankiweb.net/deck-options.html
**Limite:** Não importar FSRS sem projeto de dados, licença e validação pedagógica.
**Prioridade:** P2

### 33. Estatísticas interpretáveis

**Benefício:** Anki separa revisões, aprendizagem e reaprendizagem e contextualiza acertos pelo volume.
**Critério:** Linvuu: progresso distingue concluído, revisado e acerto; denominador visível; períodos com poucos dados exibem 'dados insuficientes'.
**Evidência:** Manual oficial distingue tipos de cartões e sucesso por horário/quantidade de revisões.
**Fonte:** https://docs.ankiweb.net/stats.html
**Limite:** Não equivaler conclusão do curso a nível CEFR validado.
**Prioridade:** P1

### 34. TTS por língua do trecho

**Benefício:** AnkiDroid documenta escolha de língua em frente/verso e TTS de fragmentos.
**Critério:** Linvuu: áudio usa idioma estudado e narração usa idioma de explicação; testes PT/DE/RU não herdam idioma dos menus; falha de voz informa alternativa.
**Evidência:** Manual descreve idiomas do TTS por deck e sintaxe de trechos.
**Fonte:** https://docs.ankidroid.org/manual.html
**Limite:** Voz de sistema depende do aparelho; não é substituto silencioso para os MP3 Azure aprovados.
**Prioridade:** P0

### 35. Sessões de escuta ajustáveis

**Benefício:** Clozemaster documenta tamanho da rodada e intervalos de revisão configuráveis, com prática de compreensão auditiva.
**Critério:** Linvuu: escolher sessão curta, repetir frase e controlar pausa; estado da sessão persiste ao bloquear/desbloquear a tela.
**Evidência:** Página oficial lista controles de sessão, prática de escuta e coleções offline.
**Fonte:** https://www.clozemaster.com/pro
**Limite:** Persistência ao bloquear é objetivo Linvuu, não constatação de Clozemaster.
**Prioridade:** P1

### 36. Separar exclusão de downloads e progresso

**Benefício:** Mango documenta fluxo próprio para apagar conteúdo baixado.
**Critério:** Linvuu: remover arquivos informa MB liberados e não apaga histórico, favoritos ou conclusão; reset de progresso exige ação distinta e confirmação.
**Evidência:** Suporte oficial oferece instruções separadas para download e exclusão de aulas.
**Fonte:** https://support.mangolanguages.com/hc/en-us/articles/360001238693-Downloading-Lessons
**Limite:** A garantia de não apagar progresso precisa ser implementada/testada na Linvuu.
**Prioridade:** P1

### 37. Experiência de áudio simples

**Benefício:** Language Transfer torna cursos acessíveis por aplicativo e downloads, com proposta de ouvir, pausar, pensar e responder.
**Critério:** Linvuu: controles tocar/pausar/repetir claros; não exigir navegação por páginas longas para acessar a próxima faixa; download explícito por unidade.
**Evidência:** Página oficial explica consumo de cursos e disponibilidade dos arquivos de áudio.
**Fonte:** https://www.languagetransfer.org/courses
**Limite:** Seu método recomenda restrições a transcrições; Linvuu deve manter transcrições acessíveis conforme sua própria pedagogia.
**Prioridade:** P1

### 38. Conteúdo e modelo de voz com diversidade planejada

**Benefício:** Memrise usa vídeos de falantes reais para expor sotaques e ritmo natural.
**Critério:** Linvuu: registrar locale/sotaque de cada voz e revisão por idioma; se houver novos locutores, rotular variantes em vez de misturar aleatoriamente.
**Evidência:** Post oficial descreve vídeos com falantes nativos e vocabulário relacionado ao aprendido.
**Fonte:** https://www.memrise.com/pt-br/blog/changes-to-the-memrise-app
**Limite:** Não copiar vídeos; aquisição de mídia/direitos e produção própria em rodada posterior.
**Prioridade:** P2

### 39. Revisão editorial humana do currículo

**Benefício:** Speak descreve equipe de educadores, linguistas e tradutores e revisão das lições apesar do uso auxiliar de IA.
**Critério:** Linvuu: cada lote publicado registra responsável, revisão linguística, gabaritos e versão; dúvidas não viram conteúdo aprovado automaticamente.
**Evidência:** Ajuda oficial descreve redação e revisão de conteúdo.
**Fonte:** https://help.speak.com/en/articles/11396732-how-does-speak-curate-its-content-and-curriculum
**Limite:** Não é auditoria independente da qualidade do conteúdo Speak.
**Prioridade:** P0

### 40. Feedback de pronúncia específico, não uma nota solta

**Benefício:** ELSA apresenta retorno por dimensões como pronúncia, fluência e entonação.
**Critério:** Linvuu: se implementar avaliação de fala, oferecer trecho identificado e orientação acionável; mostrar incerteza e permitir repetir/ouvir o modelo; não penalizar sotaque apenas por diferir do locutor.
**Evidência:** Página oficial descreve feedback em dimensões distintas da fala.
**Fonte:** https://elsaspeak.com/en/speech-analyzer
**Limite:** Não validado independentemente; implementação envolve custo, privacidade e avaliação por língua. Não é requisito de lançamento.
**Prioridade:** P2

### 41. AnkiDroid: revisões planejadas

**Benefício:** Separar conteúdo novo de revisões vencidas.
**Critério:** Mostrar quantidade real de revisões devidas; preservar fila após reinício.
**Evidência:** O README descreve flashcards e repetição espaçada; documentação do Anki explica FSRS.
**Fonte:** https://github.com/ankidroid/Anki-Android
**Limite:** Não copiar código GPL/AGPL; não inferir eficácia individual a partir do algoritmo.
**Prioridade:** P1

### 42. AnkiDroid: acessibilidade exige regressão contínua

**Benefício:** Usar problemas reais como cenários de teste.
**Critério:** Todos os controles de gravar/reproduzir devem possuir nome acessível; testar com TalkBack.
**Evidência:** Issue oficial relata controles de pronúncia sem contentDescription.
**Fonte:** https://github.com/ankidroid/Anki-Android/issues/21443
**Limite:** Relato de bug, não certificação do estado atual nem prova de falha na Linvuu.
**Prioridade:** P0

### 43. AnkiDroid: botões com texto ampliado

**Benefício:** Evitar altura rígida nos botões de resposta.
**Critério:** A 200% de texto, nenhuma resposta cortada nem ação inacessível.
**Evidência:** Issue #17734 documenta regressão em botões com fontes grandes.
**Fonte:** https://github.com/ankidroid/Anki-Android/issues/17734
**Limite:** Cenário de teste derivado do relato; 200% é meta Linvuu, não medição do concorrente.
**Prioridade:** P0

### 44. Readest: leitura configurável

**Benefício:** Ajustes de fonte, layout e navegação assistiva.
**Critério:** Permitir tamanho de texto e espaçamento sem perda de conteúdo; validar navegação por teclado/TalkBack.
**Evidência:** README declara personalização de leitura e suporte a leitores de tela.
**Fonte:** https://github.com/readest/readest/blob/main/README.md
**Limite:** Declaração do projeto; não foi testado em aparelho nesta pesquisa.
**Prioridade:** P0

### 45. Readest: offline seletivo

**Benefício:** Baixar apenas o material escolhido.
**Critério:** Download deve informar bytes, estado, cancelamento e integridade antes de marcar disponível.
**Evidência:** Arquitetura descreve livros remotos que ficam locais ao abrir/baixar.
**Fonte:** https://github.com/readest/readest/blob/main/apps/readest-app/docs/architecture.md
**Limite:** Readest é leitor multiplataforma, não curso completo de idiomas; desenho apenas como referência.
**Prioridade:** P1

### 46. Readest: áreas seguras

**Benefício:** Evitar controles cobertos por navegação do sistema.
**Critério:** Com gestos e três botões Android, nenhum texto/controle essencial deve ficar sob barras.
**Evidência:** Issue oficial registra sobreposição da barra de navegação.
**Fonte:** https://github.com/readest/readest/issues/921
**Limite:** Relato histórico; não comprova defeito atual.
**Prioridade:** P0

### 47. LinguaCafe: dicionário em folha inferior

**Benefício:** Consulta contextual sem sair da leitura.
**Critério:** Abrir significado em até uma ação; fechar devolve foco à palavra e posição da leitura.
**Evidência:** Manual descreve bottom sheet em telas móveis.
**Fonte:** https://github.com/simjanos-dev/LinguaCafe/blob/main/manual/Usage%20and%20features.md
**Limite:** É software web/PWA auto-hospedado, não APK nativo; foco acessível é requisito proposto.
**Prioridade:** P1

### 48. LinguaCafe: objetivos reais

**Benefício:** Mostrar palavras lidas, destacadas e revisadas.
**Critério:** Todas as contagens derivadas de eventos persistidos, sem porcentagens simuladas.
**Evidência:** Manual descreve metas diárias e calendário de progresso.
**Fonte:** https://github.com/simjanos-dev/LinguaCafe/blob/main/manual/Usage%20and%20features.md
**Limite:** Não copiar gamificação ou alegar validação pedagógica do concorrente.
**Prioridade:** P1

### 49. LinguaCafe: revisão por contexto

**Benefício:** Revisar termos de livro/capítulo ou todos.
**Critério:** Filtrar revisão pela aula e permitir prática sem alterar agendamento.
**Evidência:** Manual distingue revisão SRS e prática sem alterar dados.
**Fonte:** https://github.com/simjanos-dev/LinguaCafe/blob/main/manual/Usage%20and%20features.md
**Limite:** Requer modelo de dados próprio; não é recurso atual da Linvuu.
**Prioridade:** P1

### 50. Jidoujisho: mídia e contexto

**Benefício:** Preservar frase e áudio ao guardar vocabulário.
**Critério:** Cada item salvo deve guardar curso, aula, texto e referência de áudio.
**Evidência:** README/wiki descrevem consultas e criação de cartões a partir de mídia.
**Fonte:** https://github.com/arianneorpilla/jidoujisho
**Limite:** GPL-3.0; não importar código ou conteúdos de terceiros sem análise específica.
**Prioridade:** P1

### 51. Jidoujisho: limite de políticas

**Benefício:** Escolher padrões úteis sem repetir scraping.
**Critério:** Conteúdo comercial distribuído deve ter origem/licença documentada; links externos não são licença.
**Evidência:** FAQ do próprio projeto relata limitações para lojas ligadas a serviços de terceiros.
**Fonte:** https://github.com/arianneorpilla/jidoujisho/wiki/1.-FAQ
**Limite:** É opinião do mantenedor sobre seu app, não decisão oficial da Google.
**Prioridade:** P0

### 52. Word Hunter Pocket: leitura confortável

**Benefício:** Tamanho e fonte de leitura configuráveis offline.
**Critério:** Oferecer fonte legível padrão, tamanho e espaçamento ajustáveis; conservar preferência.
**Evidência:** README informa fontes e tamanho ajustáveis; fontes incluídas funcionam offline.
**Fonte:** https://github.com/Ironship/WordHunter/blob/main/README.md
**Limite:** Não afirmar benefício clínico de fonte para dislexia; necessidade depende do usuário.
**Prioridade:** P1

### 53. Aquamarina: cache transparente

**Benefício:** Reaproveitar processamento e mostrar gestão do cache.
**Critério:** Exibir tamanho ocupado, limpar por grupo e permitir tentar novamente quando resultado estiver errado.
**Evidência:** README descreve cache de correções com indicação de uso e limpeza.
**Fonte:** https://github.com/RuizeSun/aquamarina
**Limite:** Projeto Flutter chinês; licença de cada componente/dicionário não auditada.
**Prioridade:** P1

### 54. Lukaisu: WebView com valor local

**Benefício:** Arquitetura Capacitor pode possuir função mobile própria.
**Critério:** Abrir aula previamente baixada sem rede, guardar resposta local e sincronizar sem duplicar eventos.
**Evidência:** README identifica Capacitor, dados locais e revisão FSRS; servidor opcional.
**Fonte:** https://github.com/lukaisu/lukaisu
**Limite:** Declaração do projeto, não teste de desempenho; não prova que qualquer wrapper terá boa UX.
**Prioridade:** P1

### 55. MuJing: treino em frases

**Benefício:** Relacionar vocabulário a trechos contextualizados.
**Critério:** Repetir a frase da aula e abrir explicação sem perder a tentativa.
**Evidência:** README descreve aprendizagem com filmes/documentos e transcrição de legendas.
**Fonte:** https://github.com/tangshimin/MuJing
**Limite:** Projeto de desktop; não tratar como referência de navegação Android nem reutilizar mídia protegida.
**Prioridade:** P1

### 56. VoBox: idiomas independentes

**Benefício:** Definir pares de idiomas por dicionário.
**Critério:** Idioma da interface não deve mudar o idioma estudado ou apagar histórico.
**Evidência:** README permite base language e learning language em dicionários próprios.
**Fonte:** https://github.com/CarstenKarbach/VoBox
**Limite:** Código GPL-2.0; referência conceitual, sem cópia.
**Prioridade:** P1

### 57. Rússia: jidoujisho-ru

**Benefício:** Localização pode preservar núcleo de aprendizagem.
**Critério:** Traduzir rótulos separadamente de texto estudado; testar cirílico, acentos e busca.
**Evidência:** Repositório identifica explicitamente fork em russo.
**Fonte:** https://github.com/NeonGooRoo/jidoujisho-ru
**Limite:** Fork não confirma manutenção, distribuição Play ou qualidade da tradução.
**Prioridade:** P1

### 58. China: MnemoWord

**Benefício:** Sessão local com estatísticas.
**Critério:** Abrir vocabulário local sem depender de uma chamada de IA; indicadores de importação claros.
**Evidência:** README descreve Android, base offline, revisão e estatísticas.
**Fonte:** https://github.com/uniaprone/MnemoWord
**Limite:** Licença e direitos do dicionário não auditados; não importar sua base.
**Prioridade:** P1

### 59. Lute: foco em leitura

**Benefício:** Ferramenta simples pode apoiar vocabulário.
**Critério:** Guardar palavra e contexto, com retorno imediato ao texto.
**Evidência:** README identifica Python/Flask e aprendizagem por leitura; licença MIT confirmada.
**Fonte:** https://github.com/LuteOrg/lute-v3
**Limite:** Não é aplicativo Android; inspiração funcional, não arquitetura pronta para Linvuu.
**Prioridade:** P1

### 60. FSRS TypeScript: separar revisão do player

**Benefício:** Agendamento próprio pode coexistir com aulas existentes.
**Critério:** Registrar resultado, instante e identificador por item; teste determinístico do próximo vencimento.
**Evidência:** Projeto oficial disponibiliza toolkit TypeScript de FSRS.
**Fonte:** https://github.com/open-spaced-repetition/ts-fsrs
**Limite:** Licença não confirmada nesta pesquisa; avaliar arquivo LICENSE/dependências antes de integração.
**Prioridade:** P1

### 61. Camadas adaptativas

**Benefício:** Um símbolo próprio permanece reconhecível sob máscaras diferentes do launcher.
**Critério:** Foreground e background 108×108 dp; elemento principal dentro da zona segura central de 66×66 dp. Testar círculo, squircle, quadrado arredondado e quadrado.
**Evidência:** Android recomenda duas camadas e descreve zona segura central. API menciona viewport72, mas adotar66 para logotipo evita usar limite geométrico como safezone universal.
**Fonte:** https://developer.android.com/develop/ui/compose/system/icon_design_adaptive
**Limite:** XML correto não prova aparência no launcher Redmi.
**Prioridade:** P0

### 62. Monocromático dedicado

**Benefício:** O usuário pode reconhecer o L também quando o launcher aplica a cor do tema.
**Critério:** Presença de monochrome em adaptive-icon; mesma silhueta principal e sem depender da cor dourada para reconhecimento.
**Evidência:** A documentação recomenda camada monochrome para ícones temáticos. O APK atual possui ic_linvuu_monochrome.xml e referência v33.
**Fonte:** https://developer.android.com/develop/ui/compose/system/icon_design_adaptive
**Limite:** Tema final varia por wallpaper, Android e launcher; não prometer suporte em todos.
**Prioridade:** P0

### 63. Arte da loja separada

**Benefício:** Apresentação consistente no Google Play sem dupla máscara ou sombra.
**Critério:** PNG sRGB 32-bit 512×512, até1024KB, quadrado completo sem arredondar margens nem acrescentar sombra externa.
**Evidência:** Especificações oficiais do GooglePlay; recurso da loja não é o mesmo pacote de camadas do launcher.
**Fonte:** https://developer.android.com/distribute/google-play/resources/icon-design-specifications
**Limite:** Não foi gerado novo PNG ou publicado na loja nesta pesquisa.
**Prioridade:** P0

### 64. Identidade sem mascote

**Benefício:** Manter o L existente oferece continuidade da marca e permite linguagem visual adulta.
**Critério:** Uma única marca principal; não inserir personagem, bandeira, texto promocional ou screenshot; comparar reconhecimento em32,48,64px.
**Evidência:** GuiaApple sugere simplicidade, evitar texto nãoessencial e traços extremamente finos; uso aqui é referência visual, não regra Android.
**Fonte:** https://developer.apple.com/design/human-interface-guidelines/app-icons
**Limite:** Preferência estética é hipótese; validar comparação com Felipe, sem nota objetiva de beleza.
**Prioridade:** P1

### 65. Traços finos atuais

**Benefício:** Reduzir elementos decorativos pode melhorar nitidez preservando o monograma.
**Critério:** Contorno atual1.4/108 equivale a0.62px a48px; sublinhado2.2/108 equivale a0.98px. Testar variante sem contorno e variante com traço mais robusto no tamanho final.
**Evidência:** Inspeção do SVG Linvuu e foregroundXML confirma stroke1.4 e2.2 em viewport108; guiaApple alerta sobre detalhes finos em ícones pequenos.
**Fonte:** https://developer.apple.com/design/human-interface-guidelines/app-icons
**Limite:** Projeção geométrica, não medição de rasterização ou teste perceptual.
**Prioridade:** P1

### 66. Contraste funcional sem confundir logo

**Benefício:** Ícones de ação identificáveis para baixa visão, com exceções de marca claramente separadas.
**Critério:** Ícones funcionais essenciais com contraste≥3:1; texto normal≥4.5:1. Logo pode ser exceção normativa, mas escolher voluntariamente variante visível.
**Evidência:** W3C diferencia contraste de controles e exceção essencial de logotipos; exceção não elimina foco visível no controle.
**Fonte:** https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
**Limite:** Não atribuir conformidadeWCAG global ao APK por medir só um ícone.
**Prioridade:** P0

### 67. Rótulo da ação

**Benefício:** TalkBack informa para onde o toque leva, sem repetir o nome de imagens decorativas.
**Critério:** 100% botões sócomícone com nome acessível localizado; imagens decorativas fora da árvore; logotipo clicável anuncia ação Página inicial.
**Evidência:** Android pede descrição semântica para ações e permite null em decoração. No WebView o equivalente deve usar aria-label/alt vazio.
**Fonte:** https://developer.android.com/develop/ui/compose/accessibility/api-defaults
**Limite:** ExemplosCompose são adaptados conceitualmente aHTML; validar no TalkBack real.
**Prioridade:** P0

### 68. Alvos distintos do desenho

**Benefício:** Botão confortável sem inflar todos os desenhos.
**Critério:** Alvo clicável48×48dp mesmo para símbolo24dp; não sobrepor área de toque de vizinhos.
**Evidência:** Android separa tamanho visual do ícone e alvo de interação.
**Fonte:** https://developer.android.com/develop/ui/compose/accessibility/api-defaults
**Limite:** CSSpx emWebView não são prova de dp físicos; conferir dispositivo.
**Prioridade:** P0

### 69. Material Symbols

**Benefício:** Ações secundárias coerentes sem substituir a identidade Linvuu por ícone genérico.
**Critério:** Ícones de navegação com família, peso e tamanho óptico consistentes; símbolosdecorativos aria-hidden.
**Evidência:** GoogleFonts oferece eixos ópticos, weight e grade no sistema de símbolos.
**Fonte:** https://developers.google.com/fonts/docs/material_symbols
**Limite:** Não baixar fonte inteira se poucosSVGs bastam; não copiar marca de concorrente.
**Prioridade:** P1

### 70. Máscaras e densidades

**Benefício:** Mesmo ícone legível em aparelhos e launchers diversos.
**Critério:** Gerar/prever máscaras circle,squircle,rounded square,square e recursos mdpi..xxxhdpi quando necessários; conferir referênciaAndroidManifest @mipmap.
**Evidência:** ImageAssetStudio disponibiliza previews adaptativos e recursos por densidade.
**Fonte:** https://developer.android.com/studio/write/create-app-icons
**Limite:** Prévia não substitui launcher instalado; os PNGlegados atuais não foram comparados nesta tarefa.
**Prioridade:** P1

### 71. Metadados honestos

**Benefício:** Marca reconhecível sem parecer notificação falsa ou promessa de oferta.
**Critério:** Zero badges simulados, ranking, preço, participaçãoGooglePlay ou botão instalação não relacionado no ícone.
**Evidência:** Política oficial veta elementos enganosos e promoções no ícone.
**Fonte:** https://support.google.com/googleplay/android-developer/answer/9898842
**Limite:** Não representa revisão integral das políticasPlay.
**Prioridade:** P0

### 72. Splash coerente

**Benefício:** Entrada limpa e consistente com o símbolo do launcher.
**Critério:** Usar a mesma silhueta no splash e no launcher; evitar texto minúsculo, duplicação de logotipo e postergação artificial do início.
**Evidência:** DocumentaçãoAndroid organiza splash com ícone e fundo próprios do sistema.
**Fonte:** https://developer.android.com/develop/ui/views/launch/splash-screen
**Limite:** Pesquisar recurso não confirma comportamento atual do app; medir início separadamente.
**Prioridade:** P1

### 73. Alvos de toque

**Benefício:** Controles maiores reduzem erros motores
**Critério:** 100% das ações críticas com alvo mínimo48×48dp, sem sobreposição
**Evidência:** Android recomenda área focável de pelo menos48dp por48dp.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/views/apps-views
**Limite:** CSS px e Android dp precisam de conferência no WebView real.
**Prioridade:** P0

### 74. Fluxo completo com TalkBack

**Benefício:** Semântica útil permite estudar sem visão
**Critério:** Concluir cadastro→curso→aula→resposta→progresso sem elemento inalcançável
**Evidência:** Google recomenda navegação linear e verificação dos fluxos principais.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/testing
**Limite:** Teste manual em aparelho; teste DOM não comprova TalkBack.
**Prioridade:** P0

### 75. Texto ampliado

**Benefício:** Escala maior atende baixa visão
**Critério:** Testar fonte Android200%,sem cortar texto ou impedir ação,320/390dp
**Evidência:** Android14 suporta escala não linear até200%.
**Fonte:** https://developer.android.com/about/versions/14/features
**Limite:** DobrarCSS não equivale à escala nativa.
**Prioridade:** P0

### 76. Foco e teclado

**Benefício:** Navegação previsível atende teclados e tecnologias assistivas
**Critério:** 100%das ações principais alcançáveis;sem foco perdido após modal ou mudança de etapa
**Evidência:** Princípios oficiais exigem conteúdo e ações compreensíveis.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/principles
**Limite:** Ordem deve ser medida no aparelho.
**Prioridade:** P0

### 77. Áudio sem dependência exclusiva

**Benefício:** Texto e controle complementam aprendizagem auditiva
**Critério:** Toda fala instrucional com texto equivalente;pausa/repetição claramente rotuladas
**Evidência:** Conteúdo de mídia deve atender necessidades visuais/auditivas distintas.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/principles
**Limite:** Ditado pode exigir revelação após resposta para preservar objetivo didático.
**Prioridade:** P0

### 78. Perda de foco de áudio

**Benefício:** Interrupção respeitosa evita sobreposição
**Critério:** Ao receber chamada/outroplayer:pausar/atenuar conforme foco;sem retomada inesperada
**Evidência:** Android documenta requisição/perda de audiofocus e diferenças de versão.
**Fonte:** https://developer.android.com/media/optimize/audio-focus
**Limite:** HTMLAudio noWebView exige validar ponte nativa ou suporte efetivo.
**Prioridade:** P0

### 79. Fone desconectado

**Benefício:** Evita áudio privado saindo de repente pelo alto-falante
**Critério:** Desconectar fone durante fala deve pausar antes de reprodução pública indesejada
**Evidência:** Android disponibiliza ACTION_AUDIO_BECOMING_NOISY.
**Fonte:** https://developer.android.com/media/platform/output
**Limite:** Precisa teste Bluetooth e cabo em aparelho.
**Prioridade:** P1

### 80. Ciclo de vida

**Benefício:** Pausa e retomada consistentes preservam contexto
**Critério:** 10ciclos fundo/frente sem duplicar áudio,listener ou perder etapa
**Evidência:** PluginApp expõe appStateChange,pause,resume ebackButton.
**Fonte:** https://capacitorjs.com/docs/apis/app
**Limite:** Restaurar após processo morto também deve ser testado.
**Prioridade:** P0

### 81. Voltar nativo

**Benefício:** Retorno consistente reduz desorientação
**Critério:** Botão/gesto fecha painel antes de sair;volta à rota correta;raiz não fecha à força
**Evidência:** AppAPI permite tratamento debackButton e minimizeApp.
**Fonte:** https://capacitorjs.com/docs/apis/app
**Limite:** Interceptação manual não comprova predictiveback.
**Prioridade:** P1

### 82. Gestos e insets

**Benefício:** Controles livres das barras do sistema
**Critério:** 0ações essenciais sob notch,barragestos ou teclado
**Evidência:** Android15target35 impõe edge-to-edge;app trata sobreposições.
**Fonte:** https://developer.android.com/develop/ui/views/layout/edge-to-edge
**Limite:** CSSsafearea e insets nativos precisam evitar paddingduplicado.
**Prioridade:** P0

### 83. Downloads com progresso

**Benefício:** Lotes retomáveis tornam offline compreensível
**Critério:** Exibir tamanho/progresso/falha;cancelar/refazer;limitar espaço e rede
**Evidência:** FileTransfer expõe download e eventos de progresso.
**Fonte:** https://capacitorjs.com/docs/apis/file-transfer
**Limite:** Plugin não entrega sozinho política de cache/assinatura.
**Prioridade:** P1

### 84. Offline real

**Benefício:** Fonte local permite continuar com conexão instável
**Critério:** Abrir aula baixada em modoavião e sincronizar progresso após reconectar
**Evidência:** Arquitetura offlinefirst usa fontes local e rede e fila de escrita.
**Fonte:** https://developer.android.com/topic/architecture/data-layer/offline-first
**Limite:** Definir expiração/entitlements do conteúdo pago separadamente.
**Prioridade:** P1

### 85. WebView confiável

**Benefício:** Escopo de conteúdo reduz superfície de ataque
**Critério:** Somente conteúdo próprio/confiável na ponte;HTTPS;links externos fora daWebView privilegiada
**Evidência:** Android descreve risco de pontes JavaScript e conteúdo não confiável.
**Fonte:** https://developer.android.com/privacy-and-security/risks/insecure-webview-native-bridges
**Limite:** Não foi feita auditoria de segurança do APK nesta pesquisa.
**Prioridade:** P0

### 86. Memória estável

**Benefício:** Sem vazamento após sessões repetidas
**Critério:** Medir heap/RSS após20rotas;investigar crescimento de instâncias que não retorna ao baseline
**Evidência:** Google orienta separar heapJava/memóriaChromium e observar instâncias deWebView/Activity.
**Fonte:** https://developer.android.com/develop/ui/views/layout/webapps/manage-webview-memory
**Limite:** Meta deMB depende do aparelho;nenhum valor atual medido.
**Prioridade:** P1

### 87. Partida mensurável

**Benefício:** Carregar útil cedo melhora percepção
**Critério:** Registrar mediana e p95 de10partidasfrias noRedmi;meta interna antes deexpandir
**Evidência:** Android distingue cold,warm,hotstartup e tempo deexibição.
**Fonte:** https://developer.android.com/topic/performance/vitals/launch-time
**Limite:** Não atribuir desempenho nativo pela prévia web.
**Prioridade:** P1

### 88. Scanner e testes automatizados

**Benefício:** Auditoria repetível encontra regressões
**Critério:** Zero achado crítico não triado noScanner/prelaunch;manter regressões automatizadas
**Evidência:** Scanner eprelaunch identificam rótulos,contraste econtroles.
**Fonte:** https://developer.android.com/guide/topics/ui/accessibility/testing
**Limite:** Automação não substituiTalkBack nemteste comusuários.
**Prioridade:** P0

### 89. Anúncios sem interrupção

**Benefício:** Feedback de progresso deve informar sem disputar áudio
**Critério:** Uma mensagem curta porcorreção/mudança;sem anúncio contínuo porsegundo
**Evidência:** Android distingue live regions semanúncio,polite eassertive.
**Fonte:** https://developer.android.com/reference/android/view/View
**Limite:** Validar ARIA mapping naWebView comTalkBack.
**Prioridade:** P1

### 90. Idioma da interface

**Benefício:** Preferências independentes respeitam público internacional
**Critério:** Mudar idioma dosmenus não muda curso/progresso/voz estudada
**Evidência:** Android possui suporte a preferências porapp.
**Fonte:** https://developer.android.com/guide/topics/resources/app-languages
**Limite:** Idioma pedagógico é decisão do produto além dalocalizaçãoAndroid.
**Prioridade:** P1
