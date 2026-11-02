import { useT } from '../i18n';
import './carregando.css';

// Esqueleto de carregamento com o Vuu — substitui a palavra "Carregando…" crua nos
// dois fallbacks globais: o ecrã de arranque (main.tsx, enquanto a sessão resolve) e
// o fallback do Suspense (App.tsx, em cada navegação para uma rota lazy).
// A arte chega por prop: hoje é o Vuu 2D aprovado (PR #395), estático; a variante
// "sonolento" da folha de expressões entra por aqui quando a triagem do fundador for
// aprovada, sem tocar nos dois pontos de uso. Esqueleto em CSS puro, sem bibliotecas;
// a animação é uma respiração subtil, desligada com prefers-reduced-motion.
// `marca`: só no arranque, onde o wordmark é hoje a presença da marca na primeira tela.
const ARTE_PADRAO = '/assets/vuu/vuu-feliz-2d.svg';

export default function Carregando({ arte = ARTE_PADRAO, marca = false }: { arte?: string; marca?: boolean }) {
  const t = useT();
  return (
    <div className="carga-vuu" role="status">
      {marca && <img className="carga-vuu-marca" src="/brand/linvuu-wordmark-verde.svg" alt="Linvuu" width="156" height="50" />}
      <div className="carga-vuu-esqueleto" aria-hidden="true">
        <span className="carga-vuu-bloco carga-vuu-titulo" />
        <span className="carga-vuu-bloco carga-vuu-linha" />
        <span className="carga-vuu-bloco carga-vuu-linha carga-vuu-linha-curta" />
        <div className="carga-vuu-cartoes">
          <span className="carga-vuu-bloco carga-vuu-cartao" />
          <span className="carga-vuu-bloco carga-vuu-cartao" />
          <span className="carga-vuu-bloco carga-vuu-cartao" />
        </div>
      </div>
      <div className="carga-vuu-rodape">
        <img className="carga-vuu-mascote" src={arte} alt="" width="88" height="100" />
        <p className="carga-vuu-texto">{t.geral.carregando}</p>
      </div>
    </div>
  );
}
