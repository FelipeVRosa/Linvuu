# Revisão geral da Linvuu (outubro de 2026)

Revisão do site inteiro: conteúdo, design, acessibilidade, rotas, login (Firebase), segurança, cobrança (Stripe), hospedagem (Render), SEO e marketing. Cada item diz o que foi feito (PR #220) ou o que falta e de quem depende.

## 1. Três idiomas: português, inglês e espanhol
**Feito**
- Seletor «Português · English · Español» no topo, também no celular. O endereço diz o idioma (`/`, `/en`, `/es`) e a escolha fica guardada.
- Todo o texto do site em `src/i18n/pt-BR.ts`, `en.ts` e `es.ts`: páginas, player, área do aluno, assinatura, login, erros, termos e privacidade (EN e ES como tradução de cortesia).
- Vitrine por público: em inglês some o curso de inglês e o português do Brasil vem primeiro; em espanhol, o mesmo com o espanhol.
- Explicação das aulas traduzível sem tocar no idioma estudado nem no áudio (`scripts/i18n-aulas.mjs`, mapas em `content/idiomas/<id>/i18n/<en|es>/`). Títulos de todas as aulas e sessões já traduzidos.
- Português para hispanofalantes: aulas 1 e 2 adaptadas (pronúncia figurada para quem fala espanhol, erros típicos de hispanofalantes).
- Cada curso mostra quantas aulas já estão no idioma do aluno; sessão sem tradução avisa antes de começar e não entra no Google.

**Falta**
- Traduzir as explicações das demais aulas. Volume: cerca de 3 milhões de caracteres. Prioridade: aulas 1 e 2 de todos os cursos (as grátis) → A1 do alemão e do russo (cursos no ar) → resto.
- Revisão das traduções por falante nativo de inglês e de espanhol antes de anunciar fora do Brasil.

## 2. Conteúdo
**Feito**
- Português (curso `br`), aulas 1 e 2: 11 correções (nomes das letras, regra do acento com «-em», pares mínimos reais, «ele é novo» = jovem, «a gente é amigo», exercício que marcava «sou não» como erro).

**Encontrado e ainda não corrigido**
- **Validação automática:** as ordenações com palavra repetida (inglês 24, 26, 38, 41; alemão 48, 52 a 54; russo 24; francês 53) funcionam no player, que usa a posição de cada peça, mas o validador acusa. As «ordem difere» do russo 6 e do francês 24 a 34 também são falsos alarmes do validador, que não lida com peças de várias palavras nem com «?» separado. Vale ajustar o `scripts/validar-aulas.mjs`.
- **Russo:** as aulas 11 a 24 são «Gramática: …» depois da prova do primeiro ciclo. Para o aluno, a trilha parece voltar atrás. Sugestão: renomear o bloco para «Gramática do A1 (revisão)».
- **Gramática do português para estrangeiros:** tem 74 categorias, porque cada aula criou etiquetas próprias. Agrupar em 12 a 15 (Pronúncia, Verbos, Pronomes…) deixa a aba útil.
- **Status dos cursos:** inglês, espanhol, francês e italiano aparecem como «em produção» em `cursos.json`, mas têm 62 aulas publicadas. Decida se já estão «disponíveis».
- **Áudio:** as frases novas ou corrigidas (aulas 1 e 2 do português) precisam do workflow «Gerar áudios (Edge TTS)» com idioma `br`.

## 3. Design, interface e acessibilidade
**Feito**
- Auditoria automática (axe-core, WCAG 2.1 AA) em 10 páginas, no computador e no celular. As 3 falhas encontradas foram corrigidas (lista de livros, região sem marco, ordem dos títulos), e não houve falha de contraste. `npm run validar:design` continua verde.
- Corrigida a rolagem horizontal da página inteira, que já existia antes. No celular, a página tinha 1844 px de largura por causa das capas de livro.

**Recomendações**
- **Carta do professor (`src/config/carta.ts`):** está vazia, então a seção «Quem faz a Linvuu» não aparece. Para quem compra um curso, saber que há um professor real por trás é o argumento mais forte. Escreva 3 parágrafos e assine.
- **Depoimentos (`src/config/equipe.ts`):** peça a ex-alunos, com autorização por escrito.

## 4. Rotas, login e Firebase
**Feito**
- Redirecionamento aberto fechado: `?proximo=//site-falso.com` levava o aluno para fora depois do login.
- Depois do login, o aluno volta para a página certa também em `/en` e `/es`.
- E-mails do Firebase (nova senha) no idioma do aluno, com link de volta para «Entrar».

**Falta (no Console do Firebase, por você)**
- **App Check** (reCAPTCHA Enterprise na web) para o Firestore e o Auth. Sem ele, qualquer robô pode encher a coleção `newsletter`.
- **Domínios autorizados:** conferir `linvuu.com.br` e `localhost` (app Android).
- **Regras:** publicar `firestore.rules`. O perfil ainda cria `xp` e `streak` com zero, por compatibilidade; quando quiser, remova os dois campos das regras e do `src/lib/perfil.ts` juntos.

## 5. Segurança e Stripe
**Feito**
- **Acesso:** a consulta de assinatura ativa fica guardada 60 s por aluno. Antes, cada arquivo de áudio pago fazia 3 chamadas ao Stripe (dezenas por sessão), o que estourava o limite da API e deixava o site lento.
- **Cliente:** o cliente do Stripe fica guardado por aluno e é criado com chave de idempotência. Antes, dois cliques em «Assinar» podiam criar dois clientes, porque a busca do Stripe demora a enxergar um cliente novo.
- **Idioma:** o checkout e o portal do Stripe abrem no idioma do site e voltam para `/en/assinatura` ou `/es/assinatura`.
- **Livro de gramática:** a rota do livro não trava mais quando o Stripe falha.
- **Mensagens:** as mensagens de erro de pagamento aparecem no idioma do aluno.
- **Compressão:** o servidor agora comprime as respostas (`compression` 1.8.2, sem vulnerabilidade conhecida). `npm audit --omit=dev` está limpo e `npm run testar:seguranca` continua passando.

**Recomendações**
- **Webhook do Stripe (`checkout.session.completed`, `customer.subscription.*`):** gravar o status no Firestore deixa o acesso instantâneo e independente da busca do Stripe. Hoje o Stripe é consultado ao vivo, com a memória curta.
- **Chaves live:** só no dia do lançamento, e com o portal do cliente publicado no Stripe.

## 6. Render
**Feito**
- `render.yaml` descreve o serviço (build, start, `/healthz`, variáveis sem valores) e `.node-version` fixa o Node 22.

**Falta**
- Plano sem hibernação: no gratuito, a primeira visita espera cerca de 50 s, o que é inaceitável num site pago.
- No painel do Render, configurar o Health Check Path `/healthz`.

## 7. SEO e marketing
**Feito**
- **Metatags no servidor:** cada página sai com título, descrição, `lang`, `og:locale` e hreflang. As versões listadas são só as que existem de verdade: o curso de inglês não aparece em `/en`, e uma sessão não traduzida fica com `noindex`.
- **Sitemap:** 1.899 endereços nos três idiomas, com as versões alternativas de cada página.
- **Dados estruturados:** os cursos incluem idioma, nível, preço da assinatura e modalidade online (dados de curso do Google).
- **Redirecionamentos 301:** `/brazilian-portuguese` vai para `/en/portugues`; `/curso/br` sem idioma vai para `/en/curso/br`.
- **Bug corrigido:** a página inicial saía sem metatags, porque o arquivo estático passava na frente.
- **Desempenho:** rotas carregadas sob demanda e títulos traduzidos num arquivo por idioma. O pacote principal caiu de 782 kB para 567 kB, e o servidor agora comprime as respostas.

**Recomendações**
- **Google Search Console:** cadastrar o domínio, enviar o `sitemap.xml` e acompanhar a cobertura em `/en` e `/es`.
- **Páginas de entrada:** uma página por busca importante, como «curso de alemão online», «aprender russo do zero», «Brazilian Portuguese course for English speakers» e «curso de portugués para hispanohablantes». Hoje a página do curso faz esse papel; um texto de 300 a 500 palavras acima da lista de aulas ajuda.
- **Imagem de compartilhamento:** `og.png` por idioma, com o texto em inglês e em espanhol.
- **Lançamento fora do Brasil:** o preço em reais assusta. Avalie mostrar o valor aproximado em dólar e euro ao lado.
