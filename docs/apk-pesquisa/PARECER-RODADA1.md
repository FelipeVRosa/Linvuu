# Parecer externo: triagem e primeira rodada

20/10/2026. Base: 484ba5a, PR263. Escopo: somente APK; sem merge, produção, cobrança ou alterações ao acervo.

## Avaliação

O parecer identifica falhas reais no rótulo dos áudios, superfícies claras herdadas no tema escuro, disponibilidade sem assinatura, foco e layout ampliado. A suíte anterior verificava tema escuro somente no início e overflow horizontal, sem limitar altura da navegação: essa cobertura era insuficiente.

As contagens de 3.618 exercícios e 240 sessões por curso são evidência do revisor; não foram todas recontadas nesta rodada. Tempos de CPU e metas de 300ms/1,5s são referências de produto, não exigências normativas nem medidas nativas. Não tratar todas as hipóteses como defeitos reproduzidos no Redmi.

## Rodada 1: implementado, sujeito a validação

- A01: áudio de exercício com nome acessível sem texto/gabarito.
- A02/A22: superfícies herdadas corrigidas no CSS exclusivo do APK; busca com linha forte. Verificar contrastes em todas as rotas, sem declarar certificação.
- A03: navegação inferior com altura limitada e rótulo ativo usando largura total; sem quebra de palavras. Ajuste da escala nativa e interação com escala do app continuam pendentes.
- A04: visitante vê sessões publicadas sem acesso como incluídas na assinatura, com compras desativadas; não são links. Assinante ativo mantém acesso. Autorização continua no servidor.
- A05/A06: foco no h1 de rota e no enunciado do próximo exercício.
- A07/A08: barra de blocos consistente com posição; retirada de duplicação do cabeçalho e do círculo percentual que arredondava progresso para zero.
- A09: sessão no início, unidades no mapa. Restante do vocabulário será consolidado na rodada2.
- A13/A14: campos associados ao enunciado, autocorreção desligada, região viva permanente no player APK.
- A23/A25/A27: nome acessível da marca inclui Linvuu, aba Estudar e h1 no bloqueio.

O player e a barra inferior agora possuem implementação APK própria. Essa cópia é intencional para preservar integralmente a web; futuras alterações em exercícios precisam considerar explicitamente os dois players. Não houve refatoração da web para obter esse isolamento.

## Rodadas seguintes

2. Áudio: índice com retry, interrupções, controles e teste de rede; escala nativa; separar sessão vista/praticada; revisar desempenho e armazenamento; consolidar CSS. Offline e repetição espaçada são projetos novos, não funcionalidades entregues.
3. Android: launcher/splash, barras de sistema e insets, manifesto/backup, privacidade, exclusão de conta e Billing em ambiente de teste. Exclusão de conta precisa desenho de retenção legal e implementação servidor/página pública; não apagar indiscriminadamente registros financeiros. Site preservado: dependências web serão propostas separadamente.

Roteiro TalkBack do parecer permanece obrigatório antes de liberar teste fechado como validado. Não houve Android físico, TalkBack, login real ou pagamento nesta rodada.

## Validação executada

Passaram lint, lint:apk, build Vite APK e testar:plataformas. Nova suíte: oito rotas em claro/escuro (16 cenários), axe AA em escala padrão, overflow e navegação inferior em 320×640 com raiz200%; rótulo do áudio em sessão4 sem gabarito; sessão9 sem link no percurso do visitante. Zero violações axe detectadas no recorte. Não equivale a auditoria integral de contraste nem certificação TalkBack. Componentes compartilhados Sessao e App preservados byte a byte em relação ao início desta rodada. O website em produção não foi alterado.
