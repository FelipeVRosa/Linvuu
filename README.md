# Linvuu

Idiomas e STEM em trilhas de 100 dias. Site em Vite + React + TypeScript.

## Rodar
```
npm install
npm run dev        # desenvolvimento
npm run build      # valida o conteúdo e gera dist/
```

## Onde fica cada coisa
- `content/trilha-100-dias.json`: trilha-mestre (10 fases, 100 dias) válida para todo idioma.
- `content/cursos.json`: registro de cursos (idiomas e STEM) e seus status.
- `content/idiomas/<id>/dia-001.json … dia-100.json`: uma aula por arquivo. Edite o arquivo para escrever a aula e mude o `status` (`planejada`, `em-producao`, `publicada`).
- `content/indice.json`: gerado por `npm run content`. Não edite à mão.
- `content/legado/`: material anterior (alemão: 16 aulas escritas).
- `src/config/social.ts`: URLs das redes sociais. `src/config/equipe.ts`: professores e depoimentos. `src/config/mascotes.ts`: liga os mascotes.
- `docs/ROTEIRO.md`: plano das 30 rodadas.

`src/data/`, `src/types.ts` e `server.ts` são do sistema anterior (API de aulas, Stripe, IA) e ainda não estão ligados ao site novo.
