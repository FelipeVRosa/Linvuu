# Marketing: decisões e como medir

Decidido na rodada 6, com autonomia dada pelo Felipe. Tudo aqui é para ser testado com dados reais; nada é dogma.

## Posicionamento
**"Idiomas ensinados como um professor ensina."**
- Contra o Duolingo: ele ensina por tentativa e erro e é gratuito e enorme. A Linvuu explica o porquê, em português.
- Contra o Babbel: ele vende "feito por especialistas". A Linvuu é feita por um professor com anos de aula ao vivo, e diz isso com o nome dele quando o Felipe autorizar.
- Contra "fluente em 30 dias": a Linvuu diz o tempo real e não promete nível.
O Babbel abre a página com credibilidade (especialistas) e números (lições, idiomas). A Linvuu usa o mesmo padrão com fatos verdadeiros e verificáveis: "sessões de 30 minutos", "áudio em cada palavra", "aula 1 grátis".

## O que mudou no site
- **Título:** de "100 dias rumo à proficiência" para "Aprenda idiomas como um professor ensina." Motivo: "proficiência" é o nível mais alto da escala europeia (C2) e a trilha não chega lá; o título antigo prometia mais do que a Linvuu entrega. "120 dias" é o formato do curso (30 aulas de 4 sessões), não uma promessa.
- **Chamada principal:** "Começar grátis", com nota honesta: hoje só o russo tem aulas completas.
- **Faixa de provas** logo abaixo do topo: explicação em português, sessões de 30 minutos, áudio em cada palavra, aula 1 grátis.
- **Cartão da aula 1** no topo: o visitante vê o que vai estudar nos primeiros 30 minutos (é a sessão real, lida do arquivo da aula).
- **FAQ de objeções** (8 perguntas): quem nunca estudou, preço, tempo, fluência, quem está por trás, o que é "em produção", idioma do site. Também alimenta o Google (FAQPage).
- **Newsletter** no rodapé de todas as páginas, com consentimento e link para a política de privacidade.
- **Barra fina do topo** (novidades, dúvidas, contato), no estilo dos sites europeus de idiomas.
- **Termos de uso e política de privacidade** (modelo inicial: peça revisão a um advogado e preencha razão social e CNPJ quando houver).
- **SEO:** título e descrição por página, dados estruturados (Organization, WebSite, FAQPage, Course), sitemap e robots gerados no build, imagem de compartilhamento (`public/brand/avatar-1080.png`, símbolo atual).
- **Textos antigos e falsos removidos** do `index.html` (que as redes sociais leem sem JavaScript): "100 dias para um mundo novo", "vídeo-aula", "quinze minutos".

## O que NÃO foi feito de propósito
- Nenhum número de vaidade ("milhares de alunos", "nota 4,9"): a Linvuu ainda não tem. Quando houver depoimentos reais, entram em `src/config/equipe.ts`.
- Nenhum preço nem "devolvemos 100%": decisão do Felipe, depois de medir.
- Nenhum nome de concorrente no site: comparação direta é risco jurídico e de credibilidade.
- Nada de contagem regressiva, "últimas vagas" ou escassez falsa.

## Funil para anúncios (quando chegar a hora)
1. Anúncio → página de destino do idioma (`/curso/ru`) ou direto na aula 1 (`/curso/ru/dia/1`).
2. Aula 1 inteira sem cadastro (30 minutos de valor antes de pedir qualquer coisa).
3. Ao concluir a sessão: convite para criar conta ("salvar progresso") e para a newsletter.
4. Livros e aulas ao vivo entram como próximo passo da escada.
Pré-requisitos antes de gastar em anúncio: aulas 1 a 6 revisadas por nativo, áudio melhor que a voz do navegador, pagamento com Pix, 5 a 10 depoimentos reais com autorização, análise de visitas com aviso de cookies.

## O que medir (quando houver análise de visitas)
- Visitante → começou a aula 1.
- Começou a aula 1 → terminou a sessão 1.
- Terminou a sessão 1 → criou conta → voltou no dia seguinte.
- Inscritos na newsletter por origem.
Teste um título por vez (por exemplo "como um professor ensina" contra "explicação em português, do zero") por pelo menos 200 visitantes antes de concluir.

## Onde mudar os textos
Todo o texto de marketing está em `src/i18n/pt-BR.ts`. Mudar o título, as provas, a FAQ ou o chamado final é editar esse arquivo.

## Atualização da marca (16/10/2026)
A peça antiga de fundo preto foi removida a pedido de Felipe. O HTML aponta para o avatar atual, sem criar marca nova. Após o deploy, conferir a prévia publicada e solicitar novo rastreamento da página inicial no Search Console. O Google escolhe suas miniaturas e pode manter uma imagem antiga até novo processamento; esta alteração não garante indexação nem prazo de atualização.
