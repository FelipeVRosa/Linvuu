import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { abrir } from '../lib/assinatura';
import { textos } from '../lib/textos';
import { AULAS_GRATIS, PRECO_MENSAL, PRECO_TRIMESTRAL } from '../config/planos';

export function Paywall({ curso, indisponivel, idioma }: { curso: string; indisponivel?: boolean; idioma?: string }) {
  const T = textos(idioma);
  const { usuario } = useAuth();
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState('');
  const assinar = async (plano: 'mensal' | 'trimestral') => {
    setOcupado(true); setErro('');
    try { await abrir('checkout', plano); } catch (e) { setErro((e as Error).message); setOcupado(false); }
  };
  return (
    <section className="paywall" aria-labelledby="pw-t">
      <h2 id="pw-t">{T.paywallT(AULAS_GRATIS, curso)}</h2>
      <p>{T.paywallP(PRECO_MENSAL)}</p>
      {indisponivel && <p className="erro" role="alert">{T.paywallErro}</p>}
      {usuario ? (
        <div className="lv-hero-botoes">
          <button type="button" className="btn btn-primary" onClick={() => assinar('mensal')} disabled={ocupado}>{ocupado ? T.abrindo : T.assinar(PRECO_MENSAL)}</button>
          <button type="button" className="btn btn-ghost" onClick={() => assinar('trimestral')} disabled={ocupado}>{T.tres(PRECO_TRIMESTRAL)}</button>
        </div>
      ) : (
        <div className="lv-hero-botoes">
          <Link to={`/cadastro?proximo=${encodeURIComponent(location.pathname)}`} className="btn btn-primary">{T.criar}</Link>
          <Link to={`/entrar?proximo=${encodeURIComponent(location.pathname)}`} className="btn btn-ghost">{T.jaTenho}</Link>
        </div>
      )}
      {erro && <p className="erro" role="alert">{erro}</p>}
      <p className="nota"><Link to="/termos">{T.termos}</Link></p>
    </section>
  );
}
