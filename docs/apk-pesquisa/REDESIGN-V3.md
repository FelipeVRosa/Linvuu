# Redesign Android v3 — 20/10/2026

## Mudança de produto

A experiência de estudo foi redesenhada nas camadas exclusivas do APK: início com foco em uma sessão, biblioteca visual de idiomas, percurso por unidades e player de aula. A conta/acesso e os ajustes acompanham a mesma identidade. O L, o verde e o papel permanecem; a moldura mais legível aparece no emblema do cabeçalho. Os recursos do launcher Android não foram substituídos nesta rodada.

## Decisões ligadas à pesquisa

- Uma ação principal de estudo no início, acompanhada de uma próxima sessão real. Nada de sequências de dias, medalhas ou estatísticas inventadas.
- Idioma de estudo explícito; saudação e desenho vetorial de voz dão identidade ao curso sem mascotes.
- Progresso calculado das sessões concluídas, com número e barra; o círculo é redundante, não a única forma de comunicar avanço.
- Biblioteca pesquisável e cobertura sem avisos contraditórios quando todas as aulas estão adaptadas.
- Unidade atual aberta e expansão incremental de outras unidades. A aula segue em uma rota própria com navegação da sessão recolhível.
- Texto e botões reorganizados para tela pequena. O leitor controla tamanho do texto/tema e o sistema respeita movimento reduzido.
- Foco continua indo ao novo título da etapa e voltando ao botão dos ajustes. O usuário pode expandir a lista completa de etapas.
- A web não importa estes estilos; o componente Sessao mantém a navegação anterior quando compacta=false.

## Validação desta rodada

- npm run lint e npm run lint:apk: passaram.
- npm run build:website e npm run build:apk: passaram, com aviso de chunks grandes já existente.
- npm run validar:design: passou para os pares de tokens conferidos; não equivale a medir todos os pixels/telas.
- npm run testar:plataformas: passou.
- revisar-experiencia-apk: seis cenários passaram, incluindo retomada e tema.
- revisar-redesign-apk: 42 recortes (seis telas × três idiomas × duas larguras, mais início escuro nos seis contextos). Sem overflow global nos recortes de raiz200%, sem exceções JS e sem violações axe detectadas. Há verificações inconclusivas em todos os recortes; ver v3-testes.json. Isso não certifica TalkBack nem escala nativa Android.
- Prévia visual revisada em início, biblioteca, percurso, aula e tema escuro. O painel v3-visao-geral.png mostra telas reais da prévia, não mockups gerados.

## Limites

Não houve teste com TalkBack no Redmi, login real, cobrança, conteúdo pago autenticado ou compilação Gradle local nesta rodada. O pacote de APK entregue anteriormente não contém este redesign. PR263 continua rascunho e nada foi publicado em produção. PR308 (separação de idiomas) permanece separado. Offline e revisão espaçada não são anunciados como recursos prontos. Os materiais e gabaritos não foram alterados.

## Como reproduzir

Instalar as dependências do projeto e, só no ambiente de teste, Playwright e @axe-core/playwright. Compilar com npm run build:apk; executar node scripts/revisar-redesign-apk.mjs. A suíte usa um servidor local e contas vazias, sem chaves de produção. O workflow de prévia APK também executa essa suíte. O script gerar-previa-redesign.mjs gera o painel visual a partir das capturas.
