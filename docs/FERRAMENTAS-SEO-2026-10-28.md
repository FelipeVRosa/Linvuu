# Auditorias de SEO: Lighthouse CI e robots do Google

Este registro serve também de continuidade para Claude e outros colaboradores. O site publicado continua em Render; a auditoria roda uma cópia local sem credenciais de produção. O objetivo é detectar regressões, não prometer indexação ou posição no Google.

## Lighthouse CI

O fluxo `.github/workflows/qualidade-seo.yml` audita a home, `/curso/de` e `/gramatica/ru`, três vezes cada, nas alterações relevantes e por execução manual. Ele usa o servidor real do projeto e mede SEO, acessibilidade, boas práticas e desempenho. SEO abaixo de 90, impedimento de rastreamento ou erro no robots falham a verificação; acessibilidade abaixo de 90 e desempenho abaixo de 65 são avisos. As notas são medições simuladas, sujeitas a variação, e não substituem dados de usuários reais.

Os relatórios ficam no artefato `lighthouse-seo` da execução do GitHub por sete dias e em `.lighthouseci/relatorios` localmente. Como o repositório está público, trate os artefatos como públicos. Não é usado armazenamento público temporário de terceiros. As dependências da ferramenta são isoladas em `scripts/seo-tools` e não entram no pacote do site.

Para executar localmente em um checkout limpo, com Node, npm e Chrome instalados:

```powershell
npm ci
npm ci --prefix scripts/seo-tools
npm run build:website
node scripts/seo-tools/node_modules/@lhci/cli/src/cli.js autorun --config=lighthouserc.cjs
```

Se necessário, defina `CHROME_PATH` para o executável do Chrome. A porta local 4398 deve estar livre. Preserve os relatórios anteriores se precisar mantê-los. O servidor de auditoria desativa os principais segredos de integração e usa um caminho de dotenv inexistente; execute a construção em checkout limpo sem arquivos `.env`, pois ferramentas de build podem lê-los separadamente.

## Interpretador oficial do Google

A outra etapa compila o código oficial de [google/robotstxt](https://github.com/google/robotstxt), fixado na revisão `22b355ff855419e6a3ff8ff09c0ad7fdb17116f9`, com Abseil fixado em `d9e4955c65cd4367dd6bf46f4ccb8cd3d100540b`. A dependência fica fora do código do produto. O fluxo regenera sitemap e robots e exige que os arquivos versionados estejam atualizados; depois verifica todas as URLs do sitemap e regras específicas, incluindo a rota antiga que precisa continuar rastreável para o Google ler seu `noindex`.

Para reproduzir o parser localmente, baixe essas revisões dos repositórios oficiais, instale CMake e um compilador C++17, configure `scripts/google-robots` com `GOOGLE_ROBOTS_DIR` e `ABSEIL_DIR`, compile o alvo `linvuu-google-robots` e informe o caminho do executável na variável `GOOGLE_ROBOTS_BIN` antes de executar `node scripts/testar-robots-google.mjs`. O GitHub Actions documenta os comandos completos para Linux.

Estar permitido no robots só significa que o rastreador pode acessar a URL: `noindex`, canônica, qualidade do conteúdo e decisão do Google continuam relevantes. Robots também não protege conteúdo privado. Consulte a [especificação do Google](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) e a [configuração oficial do Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md).
