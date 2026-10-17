# Padrão visual das camadas internas — 17/10/2026

Escopo: apresentação do website após a home aprovada. A home, os materiais didáticos, a ordem das aulas, exercícios, respostas, áudios, regras de progresso, acesso e pagamento permanecem preservados.

- `site-camadas` identifica o conteúdo do website; a classe não é aplicada ao aplicativo nativo.
- `camadas.css` usa os tokens existentes da marca para tipografia editorial, superfícies, contornos, campos e espaçamento. Na área de estudo, conserva os tokens semânticos dos temas claro/escuro.
- Cursos de inglês, espanhol, francês, italiano, alemão e russo usam uma composição compartilhada: apresentação e ação de estudo prioritárias; capa do livro como referência secundária. O livro A1–A2 não é apresentado como cobertura de todo o curso até B1.
- Catálogo: miniaturas das capas reais existentes, sem substituir a saudação, o nome ou a descrição dos cursos.
- Gramática, biblioteca, página de livro, capítulos, páginas institucionais, formulários e assinatura recebem o mesmo acabamento. A área de sessão muda somente moldura e hierarquia de leitura.
- No celular, a capa do curso fica pequena e acompanhada de legenda; a trilha continua acessível, com títulos que quebram linha e alvos de toque preservados.

Verificação prevista: build e TypeScript, sistema de design, screenshots e ausência de rolagem horizontal em 1440/390/320px, seis cursos, sessões representativas, gramática, biblioteca, institucional, conta e assinatura. Não realizar cadastro, envio de formulários ou cobrança real para validar estética. Registrar conclusão e deploy no PR.
