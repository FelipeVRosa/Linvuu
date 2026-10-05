# Linvuu internacional

A Linvuu começa no Brasil e foi preparada para crescer. Estado hoje e como abrir um novo idioma.

## O que já está pronto
- **Textos de marketing em um arquivo só** (`src/i18n/pt-BR.ts`), lidos por `useT()`.
- **Registro de idiomas do site** (`src/i18n/locales.ts`): PT ativo; EN, ES, DE e FR cadastrados, desligados.
- **Barra do topo** (`BarraTopo.tsx`) com espaço para o seletor de idioma no estilo do Assimil (PT, EN, ES, DE). O seletor **só aparece** quando 2 ou mais idiomas estiverem ativos, para não mostrar botão que não funciona.
- `lang`, `hreflang`, `og:locale` e `canonical` já saem preparados.

## Como abrir o inglês (exemplo)
1. Copie `src/i18n/pt-BR.ts` para `src/i18n/en.ts` e traduza os valores.
2. Em `src/i18n/index.ts`, registre `en` em `DICIONARIOS`.
3. Em `locales.ts`, troque `ativo` do EN para `true`. A barra mostra PT | EN.
4. Faltam, nesta primeira versão: o seletor guardar a escolha (localStorage) e `useT()` ler o idioma escolhido; as telas fora da Home, do rodapé e da FAQ (curso, aula, login) ainda têm texto fixo em português. Mover esses textos para o dicionário é uma rodada de trabalho.

## A parte difícil: os cursos
Um curso de russo **para falantes de português** não é o mesmo que **para falantes de inglês**: a explicação, as traduções e as "falsas amigas" mudam. Por isso:
- O conteúdo precisa ser organizado por **idioma-alvo + idioma-origem** (`content/idiomas/<alvo>/<origem>/...`). Hoje existe só `ru` para `pt`.
- Cada par de idiomas é um produto novo (explicações, tradução, revisão por nativo).
- Comece pelo par que o Felipe já domina e já tem alunos.

## Domínio e busca
- `linvuu.com.br` para o Brasil. Para outros mercados, decida entre `linvuu.com/en` (um domínio, vários caminhos) e domínios por país. O caminho por idioma (`/en`) é o mais simples de manter.
- Cada idioma de site precisa do seu `hreflang` e do seu sitemap.

## Moeda e pagamento
Pix só no Brasil. Fora, cartão. O provedor de pagamento deve ser escolhido já pensando nisso.

## Idiomas de explicação: português, inglês e espanhol (decisão do Felipe)
- O site terá **3 idiomas de explicação**: português (hoje), inglês e espanhol. Hindi e chinês ficaram de fora de propósito (já há sites assim).
- Uma barra (como a do Assimil) troca **só a explicação**. A **base** (o idioma estudado: sons, palavras, frases, diálogos, textos e o áudio) é a mesma para todos. Um estrangeiro que escolhe EN vê o russo ou o alemão com tudo explicado em inglês.
- **Já preparado:** o campo `en` das palavras existe nos dados, mas hoje fica escondido (`MOSTRAR_INGLES = false` em `Sessao.tsx`). A barra do topo e o registro de idiomas (`src/i18n/locales.ts`) já aceitam novos idiomas.
- **O que falta (depois do site completo em português):**
  1. Textos do site (`src/i18n/`): criar `en.ts` e `es.ts`.
  2. Conteúdo das aulas: traduções de tradução de palavras (`pt` → `en`, `es`), explicações de gramática, comparações, erros comuns, instruções dos exercícios, notas e objetivos. A fonte compacta vai aceitar `{ pt, en, es }`, com **português como reserva** quando uma tradução faltar.
  3. Frases-exemplo e diálogos: a coluna de tradução ao lado do alemão ou do russo também precisa dos 3 idiomas.
  4. Rotas e busca: `/en/…` e `/es/…`, `hreflang` e sitemap por idioma.
  5. Revisão por nativos de inglês e espanhol (tradução automática só como rascunho).
- **Áudio:** não muda, porque o áudio é só do idioma estudado.
