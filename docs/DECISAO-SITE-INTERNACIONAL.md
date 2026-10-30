# Decisão: a Linvuu é um site internacional (29/10/2026)

**Decisão do Felipe (fundador), 29/10/2026.** O site é internacional a partir de hoje. Isto vale para todos os agentes e para todo o código e documentação.

## O que isso significa
1. **Público.** Falantes de português, inglês e espanhol estudam qualquer idioma que não seja o seu. Um americano ou um indiano estuda russo ou alemão com explicações em inglês; um falante de espanhol, com explicações em espanhol.
2. **Uma só home, um só marketing.** A home e a comunicação são as mesmas para todas as línguas (modelo dos concorrentes, como o Babbel). Só o texto muda de língua. Não se cria home separada por público. A home em português (`src/pages/HomeBrasileiros.tsx`) é a base; `src/i18n/home.ts` traduz.
3. **O curso da própria língua do visitante nunca aparece** na vitrine (`cursoOculto` em `src/i18n/locales.ts`): em `/en` não há inglês, em `/es` não há espanhol, em `/` não há português para estrangeiros.
4. **Língua do site ≠ língua de explicação.** O endereço define a interface (`/`, `/en`, `/es`). A explicação das aulas e a gramática têm arquivos próprios por língua (ver `docs/ESTRUTURA-INTERNACIONAL.md`).
5. **Nada de "para brasileiros" no texto público.** "Brasileiros" só aparece no curso Português do Brasil.
6. **Não prometer o que não existe.** "Explicado em inglês/espanhol" só onde as aulas estão traduzidas (hoje: só o curso `br` em inglês). O estado real está em `docs/COBERTURA-IDIOMAS.md` (`node scripts/cobertura-idiomas.mjs`).

## Onde isso aparece (para não se perder)
| Assunto | Arquivo |
|---|---|
| Estrutura de arquivos por língua | `docs/ESTRUTURA-INTERNACIONAL.md` |
| Cobertura de tradução | `docs/COBERTURA-IDIOMAS.md` |
| Locales, vitrine, curso oculto | `src/i18n/locales.ts` |
| Home e traduções | `src/pages/HomeBrasileiros.tsx`, `src/i18n/home.ts` |
| Metas e prerender | `src/lib/metaRota.ts` |
| Teste de SEO | `scripts/testar-seo-publico.ts` |

## Documentos anteriores que esta decisão substitui
`docs/INTERNACIONAL.md` (13/10, "EN desligado") e qualquer texto que descreva a Linvuu como "para brasileiros" ou o inglês/espanhol como edição só de interface.

## Infraestrutura
- **Render:** o mesmo serviço `linvuu` serve `/`, `/en` e `/es`; não há serviço por língua.
- **Firebase:** um só projeto e um só Firestore; a língua é preferência do usuário, não projeto separado.
- **Preço e Stripe:** não mudam por esta decisão. Preço internacional exige autorização explícita do Felipe.
