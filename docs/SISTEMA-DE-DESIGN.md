# Sistema de design: área do aluno

Este documento descreve os tokens, os temas, a acessibilidade e a validação da área do aluno. A fonte da verdade das cores de marca é `marca/MARCA.md`. Este arquivo explica como o código usa essas cores.

## Camadas de tokens

Os tokens ficam em três camadas, da mais estável à mais local. Componentes devem usar a camada mais alta que resolve o caso.

1. **Primitivos de marca** (`src/tokens.css`): as quatro cores aprovadas (`#1E3B2F`, `#F5F1E8`, `#1D1F1C`, `#B7791F`), tokens de tipo, raio e movimento.
2. **Intenção** (`--sem-*`, em `src/redesign.css`, dentro de `.area-aluno`): `--sem-bg`, `--sem-superficie`, `--sem-superficie-2`, `--sem-texto`, `--sem-texto-2`, `--sem-borda`, `--sem-acao`, `--sem-acao-texto`, `--sem-destaque`, `--sem-foco`, `--sem-foco-halo`.
3. **Componente** (`--cmp-*`): `--cmp-tema-indicador`, `--cmp-campo`, `--cmp-cartao`. Um componente novo ganha um `--cmp-*` que aponta para `--sem-*`.

Os nomes `--aa-*` são apelidos antigos apontando para as camadas acima. Não criar código novo com eles.

## Temas

- Tema claro: papel `#F5F1E8` sobre fundo `#EFEBE1`. Ação em verde-floresta.
- Tema escuro: `.area-aluno[data-tema="escuro"]`. Fundo com elevação por luminância (oklch), não por sombra. Ação em verde-sálvia `#9CCBB0`, destaque em ocre `#D9A441`.
- A escolha fica em `localStorage` (`linvuu:tema-aluno`). A troca anuncia o novo tema em `role="status"`.

### Escala de elevação (só escuro)

`--elev-0` a `--elev-4` = oklch com luminância 15%, 20%, 27%, 35% e 45%. Fundo é `--elev-0`, superfície `--elev-1`, campo `--elev-2`. Não usar sombra para separar planos no escuro.

## Movimento

- `--dur-1` 120 ms: resposta de toque e hover.
- `--dur-2` 200 ms: troca de tema, abertura de painel, entrada da aula.
- `--dur-traco` 1100 ms: traço da barra de progresso. Só aparece quando um dia é concluído.
- `--ease`, `--ease-caneta`, `--ease-mola` (toggle claro/escuro, overshoot leve).

Com `prefers-reduced-motion: reduce`, as durações vão para 0,01 ms. O traço aparece pronto, sem animação.

## Acessibilidade

- Contraste medido pelo validador. Texto: mínimo 4,5:1. Elementos não textuais (foco, progresso): mínimo 3:1.
- Foco: `:focus-visible` com contorno de 2 px em `--sem-foco` e halo `--sem-foco-halo`.
- `prefers-contrast: more`: bordas e texto reforçados.
- `forced-colors: active`: usa `CanvasText` e `Highlight` do sistema.
- `monochrome`: o progresso não depende só de cor, há também a contagem em texto.
- Ruído do fundo escuro (`::after`, opacidade 0,012) não recebe foco nem clique.

## Sons de reforço

- Desligados por padrão. Preferência em `localStorage` (`linvuu:sons`).
- Gerados com Web Audio, sem arquivos de áudio (`src/lib/sons.ts`).
  - Clique ao trocar tema: 40 ms, 800 Hz, -20 dB.
  - Dia concluído: arpejo Dó-Mi-Sol, 90 ms cada nota, -15 dB.
  - Resposta errada: 300 Hz descendo a 200 Hz, 150 ms, -18 dB.
- Áudio é reforço, nunca barreira. Quem não ouve perde só o reforço.

## Validação

```bash
npm run validar:design
```

O script `scripts/validar-design.mjs` lê os valores reais de `src/tokens.css` e `src/redesign.css`, resolve `var()` e calcula o contraste WCAG nos dois temas. Ele também:

- reprova hex direto em qualquer `*.module.css` dentro de `src/` (só `var()`);
- reprova CSS de produção acima de 50 kB gzip, quando `dist/` existe.

Roda no CI depois do `npm run build`.

## Desvios da proposta de design

Estes pontos da apresentação "Caminho 10/10" não foram aplicados como descritos. Cada um precisa de decisão de produto ou de marca.

- **Brilho no logo (P05)**: não aplicado. `MARCA.md` proíbe efeitos no logo.
- **Sombra e realce interno nos cartões (P02)**: não aplicados. A marca prevê cartões sem sombra. A separação usa borda e elevação por luminância.
- **Durações de movimento**: a proposta fala em 400 e 800 ms. `MARCA.md` fixa 120 a 250 ms para interface. A troca de tema e a entrada usam 200 ms. O traço usa 1100 ms porque é o elemento assinatura e já existia como token aprovado.
- **Re-especificação dos primitivos em oklch**: não feita. Os primitivos continuam em hex, como em `MARCA.md`. A escala de elevação do escuro usa oklch.
- **Contraste do tema claro acima de AAA**: o texto secundário no claro passa em AA (5,29:1 e 5,05:1), não em AAA. Para chegar a 7:1 seria preciso escurecer o texto secundário e perder hierarquia.
- **Correção de premissa**: a apresentação dizia que o texto mudo no escuro ficava em 3,5:1. Medido, ele está em 8,17:1 sobre `#18211C`, AAA. Nenhuma mudança foi feita com base nesse número.

## Não implementado

- Storybook.
- Teste visual de regressão (Playwright) no CI.
- Preto OLED verdadeiro.
- Sensor de luz ambiente.
- Adaptação a `Save-Data`. As fontes já vêm empacotadas, então não há download a economizar.
- Reverb no som de conclusão.
