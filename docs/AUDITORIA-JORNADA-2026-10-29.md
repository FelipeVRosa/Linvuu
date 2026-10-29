# Linvuu: jornada de descoberta e estudo

Registro de uma revisão inicial em 29/10/2026. Escopo: home publicada, primeira sessão pública de inglês, catálogo de livros e código correspondente; a primeira sessão de alemão foi exercitada na versão local. Não representa auditoria de todas as páginas, idiomas, tamanhos de tela ou usuários autenticados.

## O que já existe

- Seis idiomas na home, uma amostra de áudio e acesso às duas primeiras aulas gratuitamente. Cada aula contém quatro sessões.
- Uma trilha com sessões, blocos, exercícios, opção de marcar uma sessão e progresso; a própria interface informa que entrar na conta permite salvar o progresso em outros aparelhos.
- Catálogo de livros A1–A2 com capítulos 1 e 2 gratuitos; a home informa que os livros B1–B2 estão em produção.
- Uma identidade editorial com verde, papel, tipografia expressiva e Vuu. A proposta é fazer esses elementos servirem ao aprendizado e às escolhas reais do aluno.

## Problemas observados e primeira entrega

1. A ação mais destacada da home levava para planos, embora fosse possível experimentar antes. A chamada agora conduz à escolha de idioma e a amostra identifica a primeira sessão do idioma escolhido.
2. Na versão web, ao mudar de bloco da aula, o foco não acompanhava o novo título. A navegação agora posiciona o foco no título do bloco, como já acontecia na experiência compacta.
3. A trilha de uma primeira sessão exibe uma lista extensa de aulas. Isso pode dificultar o primeiro passo; é uma hipótese de experiência a validar com alunos e em telas pequenas antes de redesenhar a navegação.
4. A tela de livro carregava o sumário sem estado de erro explícito. Agora informa o carregamento e oferece nova tentativa caso o sumário falhe; os links de amostra continuam disponíveis.

## Próximas frentes, em ordem de aprendizado

1. **Primeira experiência:** testar com pessoas a escolha do idioma, a primeira sessão e a volta ao ponto anterior. Observar onde precisam de ajuda, inclusive em celular, teclado e leitor de tela.
2. **Aula e progresso:** distinguir sessão visitada, sessão marcada como concluída e evidência de domínio. Revisão espaçada e gamificação só devem mostrar progresso sustentado por dados reais, com opção de estudar sem pressão por sequência diária.
3. **Livros e trilha:** conectar assuntos equivalentes de aula, gramática e livro com referências verificadas por idioma. Validar o comportamento do sumário também com conexão instável.
4. **Conteúdo B1–B2:** inventariar materiais e bibliografia existentes; revisar licenças, referências, exemplos, correção linguística e progressão pedagógica antes de declarar qualquer livro pronto.
5. **Produto e confiança:** revisar condições da oferta e fazer testes completos de assinatura em ambiente de teste; conferir acessibilidade de erros, reembolso e estados de acesso antes de qualquer alteração de pagamento.
6. **Desempenho:** investigar os pacotes apontados pelo build acima de 500 kB, medir páginas representativas em dispositivos modestos e priorizar ganhos percebidos. Um aviso de tamanho não prova, por si só, lentidão para todos os usuários.
7. **Identidade e movimento:** definir um sistema para Vuu, ilustração e animações a partir de arte aprovada, com versões legíveis em tamanhos pequenos e respeito a movimento reduzido.
8. **Medição:** com consentimento, estabelecer métricas de escolha de idioma, início e conclusão da primeira sessão e retorno; distinguir conversão comercial de aprendizado real. Validar eventos antes de tirar conclusões.

## Verificações

`npm run lint`, `npm run build:website`, `npm run validar:design` e `npm run testar:progresso`. Na versão local, escolher alemão atualizou o link para `/curso/de/dia/1`; ao avançar, o foco passou para o título do segundo bloco. Isso não substitui testes em celulares reais e leitores de tela.
