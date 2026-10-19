# Jornada web — 19/10/2026

## Problemas e comportamento corrigido

- Entrar/cadastrar a partir de curso, gramática ou livro mantém o caminho de retorno, incluindo parâmetros e âncora. Links entre login e cadastro preservam o destino interno.
- A área do aluno oferece um link de login com retorno à sessão atual.
- Alterações de conclusão de sessão ficam em fila local por UID, incluindo desmarcações. Falhas deixam uma indicação visível; é possível tentar novamente, e a reconexão tenta reenviar. A confirmação de uma gravação antiga não remove uma alteração posterior. As gravações da mesma conta são sequenciais.
- Na leitura da conta, uma desmarcação local pendente não é substituída pela cópia antiga do servidor. Respostas da conta anterior são descartadas depois da troca de usuário.
- Navegação entre sessões descarta carregamentos antigos. A verificação de assinatura tem estado de carregamento explícito.
- A recuperação de senha valida o campo de e-mail sem exigir a senha. A resposta para uma conta inexistente mantém a mensagem neutra.
- Cada sessão, inclusive uma que não carregou, permite preparar um relato por e-mail para o contato oficial. Inclui só a rota pública da sessão e a descrição digitada; não inclui token, usuário, query string ou resposta de exercício. A interface informa que o envio acontece no aplicativo de e-mail, com endereço alternativo visível. Não há confirmação falsa de ticket enviado.

## Validação local

Passaram: TypeScript, build web, isolamento do progresso entre contas, teste novo de sincronização com perda de rede/reenvio/desmarcação/concorrência/troca de conta, regressões do corretor com 38 ditados reais, medição, segurança do servidor e sistema de design.

O workflow de revisão pública exercita desktop, 390px e 320px. Foi ampliado para as seis primeiras sessões, posição de leitura após reload, conclusão persistida, retomada na próxima sessão, relato sem enviar e navegação login/cadastro preservando o destino. Não faz cadastro nem pagamento real. A aprovação desse workflow é requisito para merge.

## Produção observada antes da mudança

Home → aula gratuita de inglês abriu. Marcar sessão atualizou a trilha para 1/248; recarregar preservou a conclusão. A página do curso ofereceu continuar na sessão 2. Login exibiu e-mail/senha e Google; recuperação sem e-mail apresentou orientação. Esses testes foram de visitante.

## Limites que ainda exigem teste autenticado

Não houve criação de usuário real, login bem-sucedido, leitura de caixa de e-mail, alteração de senha, conta pagante ou teste entre dois aparelhos. Testes com transporte simulado comprovam o comportamento do cliente; não validam as credenciais e permissões do ambiente de produção.

A fila cobre alterações feitas neste navegador. O servidor ainda não oferece revisão/timestamp por sessão para resolver todos os conflitos entre dispositivos; uma desmarcação já sincronizada pode conflitar com cópia antiga de outro dispositivo. Não foi alterado o contrato do servidor nesta entrega. A posição dentro da sessão permanece local; os dias concluídos são sincronizados.

Visitante não é importado automaticamente para uma conta: preserva-se o isolamento entre pessoas. Áudios, pagamentos, planos comerciais, home e Android não foram alterados.
