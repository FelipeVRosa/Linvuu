# Home em português, inglês e espanhol

Solicitação de 17/10/2026: replicar a home aprovada em português nas versões de interface `/en` e `/es`, com traduções. Não criar nem adaptar materiais didáticos nesta etapa.

- As três rotas usam `HomeBrasileiros`, a mesma estrutura e o mesmo CSS. Textos, rótulos acessíveis, estados do áudio, seleção de planos e perguntas frequentes são localizados por `src/i18n/home.ts`.
- O português mantém a apresentação e o conteúdo existentes. Inglês e espanhol informam que os materiais apresentados têm explicações em português e que a adaptação ainda não está disponível.
- As amostras de cursos nas homes traduzidas levam aos materiais existentes em português, identificados por `hrefLang`. Isso evita links para sessões não adaptadas ou para cursos ocultos na interface internacional.
- O menu de planos aponta para a comparação na home nos três idiomas. A oferta vigente continua acessível pelo link próprio, sem alterar checkout, preços ou permissões.
- Título e descrição da home no servidor foram alinhados à oferta realmente apresentada, sem prometer aulas explicadas em inglês ou espanhol.

Validação local: build, TypeScript, sistema de design e renderização dos três idiomas. Teste de renderização: `node scripts/testar-home-idiomas.mjs pt-BR` (repetir com `en` e `es`). Nenhum conteúdo em `content/` ou configuração administrativa foi alterado.

Verificação visual e de navegação em produção deve ser registrada após o deploy. Não considerar teste automatizado de HTML como revisão visual em celular.
