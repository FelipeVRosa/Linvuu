# Roteiro: Linvuu em 30 rodadas

Cada rodada é uma conversa de trabalho com entrega verificável. Meta: um site rodando, com cursos reais publicados, em 30 rodadas.

## Direção visual (decidida na rodada 1)
- Plataforma entre Coursera, edX e Duolingo: branco, tipografia grande, botões arredondados, uma única cor de destaque.
- Sem mascote ao lado de idioma. Os mascotes (`public/mascots/`) só voltam depois de pintados, e só em momentos de feedback (acerto, sequência, conclusão). A chave é `src/config/mascotes.ts`.
- Logo oficial em `public/brand/`.
- Honestidade de status: nada aparece como "no ar" se não estiver publicado. Cada aula mostra seu próprio status.

## Fase A · Fundação (1–5)
1. **Feita.** Limpeza, estrutura de 100 dias, home, catálogo, página de curso e de aula, redes sociais, rodapé grande.
2. Revisão no navegador (desktop e celular), acessibilidade (contraste, teclado, leitor de tela), imagem de compartilhamento, 404. Colocar o site no ar (Vercel, Netlify ou GitHub Pages) com domínio.
3. Sistema de design: tokens, botões, campos, cartões, estados vazios e de erro, modo escuro opcional.
4. Contas e progresso: login por e-mail/Google, salvar dia concluído e sequência. Decidir backend (Supabase ou o `server.ts`).
5. Esquema definitivo de aula (v1) e validador em `npm run content:check`. Reordenar o alemão (as 16 aulas já escritas) dentro da trilha.

## Fase B · Player de aula (6–10)
6. Player da camada Imersão: texto, áudio, tradução sob demanda, vocabulário clicável.
7. Player da camada Prática: múltipla escolha, lacunas, ordenação, tradução reversa (já existem no material de alemão).
8. Vídeo-aula: incorporação, capítulos, legendas e transcrição.
9. Revisão espaçada do que o aluno errou (o algoritmo SM-2 já existe no `server.ts`).
10. Migrar as 16 aulas de alemão (Semana 1 e 2) para o player novo, trocando Tailwind e lucide pelo CSS do site.

## Fase C · Conteúdo (11–19)
11–16. Fase 1 (dias 1–10) de cada idioma, uma rodada por idioma: russo, inglês, espanhol, francês, português, alemão (ajuste). Roteiro, texto, áudio nativo, exercícios.
17. Trilha de Matemática: definição dos 100 dias e primeira fase.
18. Trilha de Física: definição dos 100 dias e primeira fase.
19. Fase 2 (dias 11–20) dos dois idiomas prioritários.

## Fase D · Produto (20–26)
20. Páginas de professores e depoimentos reais (fotos, bios, autorização), vídeo de apresentação.
21. Busca e catálogo: filtros por nível e área, SEO por curso, sitemap.
22. Preços e pagamento (Stripe já está no `server.ts`): dias gratuitos, página de preços clara, sem surpresa no checkout.
23. Painel do aluno: progresso, sequência, certificado de conclusão por fase.
24. Assistente de dúvidas sobre a frase (o analisador do `server.ts`), com limite de uso e aviso de que é IA.
25. E-mail: boas-vindas, lembrete de estudo, newsletter.
26. PWA: instalar no celular, ler aula offline.

## Fase E · Lançamento (27–30)
27. Desempenho e acessibilidade finais (Lighthouse acima de 90, WCAG AA), analytics respeitando privacidade, termos e política de privacidade.
28. Beta fechado com 20 a 50 pessoas reais; coletar e corrigir.
29. Lançamento: página final, kit de imprensa, redes preenchidas.
30. Retrospectiva e plano dos próximos 100 dias de conteúdo.

## O que é possível fazer em UI
- **Já feito:** busca no topo, menu "Explorar cursos", chips de filtro, cartões de curso, trilha em sanfona por fase, migalhas, pular para o conteúdo, rodapé com colunas e redes.
- **Próximo nível:** mapa visual do caminho dos 100 dias (estilo Duolingo, mas sóbrio), barra de progresso por fase, "continuar de onde parou", modo foco na aula, atalhos de teclado.
- **Confiança (edX e Coursera):** professores e depoimentos reais, o que você consegue fazer ao fim de cada fase, prévia gratuita das aulas.
- **Evitar (falhas comuns de sites grandes):** carrossel automático, banner que cobre a tela, links mortos, filtros que não filtram, promessa de fluência em prazo irreal, texto cinza claro sobre branco, menu que só abre com mouse.
