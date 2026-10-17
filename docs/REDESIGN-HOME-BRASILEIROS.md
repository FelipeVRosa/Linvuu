# Home para brasileiros — 16/10/2026

Pedido de Felipe: tornar o website mais fluido e visual, fortalecer marketing para brasileiros e preservar a identidade. Esta entrega muda a home em português; as páginas internacionais continuam com o componente anterior. Texto da nova composição fica no componente exclusivamente brasileiro nesta etapa.

- Verde floresta, papel e ocre, cartões com cantos suaves, demonstração interativa com áudio existente e formas em CSS (sem imagens externas nem bibliotecas novas).
- Uma chamada principal para comparar os planos. Demonstração gratuita continua acessível.
- Start: 1 idioma; Basic: 2; Intermediário: 3; Premium: todos. Comparação explicitamente em preparação, sem valores inventados, com seleção de interesse local e acesso às amostras grátis. A escolha não altera permissões nem gera cobrança.
- Premium: professor para dúvidas específicas no WhatsApp Business. Sem promessa de encontros ao vivo, prazo de resposta ou tutoria ilimitada. Mesma qualidade de conteúdo e suporte técnico em todos.
- Oferta vigente continua acessível por link explícito; checkout e autorização não são alterados.
- Retomada do estudo preservada. Navegação por teclado, mensagens de erro no áudio, seleção com aria-pressed, layouts responsivos e respeito a movimento reduzido.

Validação: TypeScript, build website e validação existente do sistema de design passaram. O validador de contraste existente cobre os tokens da área do aluno, não todos os pares de cores da nova home. Inspeção visual da versão nova em navegador e testes de interação em celular ainda pendentes; não publicar como versão validada.

Pendências: revisar visual desktop/mobile; integrar navegação global aos novos planos; definir preços e condições; implementar direitos por idioma no servidor; atualizar a versão HTML de SEO para refletir a nova oferta; consolidar textos de marketing antigos em outras páginas. Este PR não resolve indexação no Google.
