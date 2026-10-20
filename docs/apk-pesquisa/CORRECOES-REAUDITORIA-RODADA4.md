# APK — correções da reauditoria, rodada 4

Base: f5909d9. Somente APK; sem alteração da web, áudio pago, checkout ou publicação.

- N-01: números e conclusão preservados nas unidades/sessões até 400 px; seta secundária oculta.
- N-03/A-14: resposta correta incluída na região viva existente, com idioma do conteúdo.
- A-07/A-10: remove contador redundante do navegador de blocos; botão inferior nomeado Bloco anterior (PT/EN/ES).
- A-04: tela bloqueada oferece retorno ao percurso para estudo/revisão das oito sessões gratuitas. Não afirma conclusão, sincronização, acesso offline ou desbloqueio pelo login.
- N-04: localStorage existente prevalece sobre espelho nativo potencialmente atrasado, inclusive histórico vazio; chaves ausentes podem ser recuperadas. Não une contas nem modifica esquema.
- N-05 parcial: espelhamento e retry de escrita instalados mesmo se snapshot falhar. A leitura inicial continua limitada a cinco segundos; hidratação não bloqueante adiada.

## Limites explícitos

Não há solução completa para exclusão de chaves seguida de falha nativa, perda total do WebView, conflitos entre aparelhos ou reset sincronizado. Falta versionamento/tombstone durável. A preferência local evita a regressão observada, mas não garante recuperar sempre a cópia mais recente se somente a nativa tiver atualizações. Não foi introduzida migração especulativa do Gemini.

Não foi acrescentado glossário sem conteúdo compatível. Anúncios repetidos, TalkBack real, Voltar do Android, foco nativo de áudio, exclusão operacional e pagamentos continuam pendentes. Não confundir compilação do frontend APK com compilação Gradle/instalação.

## Validação desta rodada

TypeScript APK, build frontend APK, isolamento das plataformas e dez verificações de armazenamento simulado passaram. Build ainda avisa sobre chunk acima de 500 kB. Suíte visual ampliada com visibilidade de marcadores a 320/360/393/412 px e retorno do bloqueio ao percurso; execução em navegador será registrada separadamente. Não declarar teste físico ou resultado axe sem execução.

Execução final: 18 cenários claro/escuro passaram sem violações axe detectadas (há verificações inconclusivas); marcadores visíveis sem overflow em 320/360/393/412 px com texto 200%; bloqueio oferece revisão; região viva inclui resposta correta no exercício testado. Passaram 15 testes de áudio simulado, fluxo de 42 exercícios, dez cenários de armazenamento e teste separado de escrita após falha inicial. Captura escura inspecionada. Nada disso substitui Android/TalkBack/rede real.
