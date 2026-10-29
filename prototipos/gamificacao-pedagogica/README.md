# Linvuu — gamificação que encoraja, sem inflar o progresso

**Protótipo isolado, sem importação na aplicação e sem alteração de site/APK/main.**
Análise de 26/10/2026; o conteúdo e as métricas são de DEMONSTRAÇÃO, sem dados reais de alunos. A1–A2 existentes ficam intactos.

## Executar
```bash
cd prototipos/gamificacao-pedagogica
node teste-modelo.mjs
python3 -m http.server 8765
# Abra http://localhost:8765/preview.html
```
O preview importa `modelo.mjs`, demonstra diferentes estados e permite reiniciar; não envia informações nem utiliza serviços externos.

## Quatro evidências que não devem ser confundidas
1. **Percurso concluído**: sessões terminadas / disponíveis. Isso é atividade, não domínio.
2. **Prática independente**: itens distintos, novos, sem pistas e na primeira tentativa. Isso é desempenho imediato.
3. **Recuperação espaçada**: acertos em tarefas novas após intervalos 1, 7 e 30 dias. O sistema atual do APK já agenda 1/3/7 dias, mas **não verifica D30**.
4. **Transferência**: uso em contexto inédito, avaliado por rubrica independente. Necessário para “domínio demonstrado nesta competência”.

Limiares de demonstração do protótipo (cinco itens com pelo menos quatro corretos, revisões D1/D7/D30 e transferência aprovada) são **hipóteses não validadas**, não certificação CEFR, e precisam de calibração por idioma, tipo de competência e professores. Janelas devem ser verificadas pelo servidor. Sem content IDs versionados e itens inéditos controlados não é honesto medir domínio com os registros atuais.

## O que já existe no código da Linvuu
- `src/plataforma/apk/Home.tsx`: barra de percurso e mensagem de retomada;
- `src/plataforma/apk/ConclusaoSessao.tsx`: distinção leitura/prática, número de acertos, revisão e mensagem;
- `src/plataforma/apk/RevisaoErros.tsx`: revisão e barra de progresso;
- `src/plataforma/apk/espacadoModelo.ts`: agenda 1, 3, 7 dias;
- `src/components/Traco.tsx`: animação do traço de progresso com valor exato;
- `src/tokens.css`: paleta e motion tokens; não introduzir cores novas;
- `src/lib/analytics.ts` e `src/lib/medicao.ts`: eventos limitados, consentimento e registro agregado.

Não criar segunda barra de navegação genérica. Reutilizar componentes existentes quando uma implementação futura for autorizada.

## Linguagem da conquista
**Apenas leitura**: “Leitura concluída. Agora experimente aplicar a ideia.”
**Prática confirmada**: “Parabéns! Você acertou 4 de 5 questões sem pistas.”
**Retenção**: “Você recuperou esta estrutura após uma semana. Ótimo avanço!”
**Transferência revisada**: “Você aplicou esta estrutura numa situação nova, sem ajuda.”
**Nunca**: “Você já é B2” apenas por concluir atividades; perder estrelas/corações por faltar; simular estar mais perto de obter um passaporte legal. Metáfora possível: “Mais uma página no seu passaporte para conversar”, mas preferência editorial é “Mais perto da sua próxima conversa”.

## Psicologia e ética de produto
Aprender com Duolingo, Khan Academy e Brilliant: feedback imediato, pequenos objetivos, bom onboarding e visualização de habilidades. **Não** replicar apostas variáveis, XP farming, rankings obrigatórios, recordes punitivos, spam de notificações ou streak freeze paga. O progresso técnico é realizado, o progresso cognitivo é **demonstrado**, e a recompensa descreve somente o fato medido.
Vuu aparece em momentos-chave, não pisca sobre textos e tabelas. Motion `prefers-reduced-motion` respeitado.

## Métrica norteadora para testes futuros
Taxa de competências demonstradas em novas tarefas de transferência + desempenho de recuperação D7/D30 por coorte elegível. Guardrails: abandono, conforto, satisfação, acessibilidade, regressão no APK, coerência dos resultados e consentimento LGPD. DAU de aprendizagem é métrica distinta de DAU de visitas.

## Eventos propostos — NÃO implementados
`competencia_pratica_independente_verificada`, `recuperacao_verificada`, `transferencia_revisada`, `conquista_exibida`, `proxima_atividade_iniciada`. Backend autoritativo deve validar tentativas, relógio, rubrica, versão e unicidade. Nunca enviar respostas livres, nome, e-mail ou UID Firebase para analytics.

## Referências consultadas
- Duolingo, *Time Spent Learning Well* (e anti-XP grinding): https://blog.duolingo.com/time-spent-learning-well/
- Khan Academy Course Levels: https://support.khanacademy.org/hc/en-us/articles/28801454895373-How-do-Course-Levels-work
- Brilliant, active learning: https://brilliant.org/about/
- Li, Hew & Du (2024), motivação intrínseca/autonomia: https://link.springer.com/article/10.1007/s11423-023-10337-7
- Dunlosky et al. (2013), practice testing e distributed practice: https://doi.org/10.1177/1529100612453266
- Hanus & Fox (2015), efeitos adversos de recompensas: https://www.sciencedirect.com/science/article/pii/S0360131514002000

**Próximo gate**: aprovação do fundador + parecer de pedagogia + proteção de dados + esquema de eventos + revisão web/Android + experimento controlado. Nenhum deploy nem merge deste protótipo.
