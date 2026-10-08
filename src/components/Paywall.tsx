import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { abrir } from '../lib/assinatura';
import { AULAS_GRATIS, PRECO_MENSAL, PRECO_TRIMESTRAL } from '../config/planos';

export function Paywall({ curso, indisponivel }: { curso: string; indisponivel?: boolean }) {
  const { usuario } = useAuth();
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState('');
  const assinar = async (plano: 'mensal' | 'trimestral') => {
    setOcupado(true); setErro('');
    try { await abrir('checkout', plano); } catch (e) { setErro((e as Error).message); setOcupado(false); }
  };
  return (
    <section className="paywall" aria-labelledby="pw-t">
      <h2 id="pw-t">Você terminou as {AULAS_GRATIS} aulas grátis de {curso}.</h2>
      <p>Para continuar, assine a Linvuu: {PRECO_MENSAL} por mês, todos os cursos, cancele quando quiser. Se não gostar, devolvemos o valor em até 7 dias.</p>
      {indisponivel && <p className="erro" role="alert">Não conseguimos confirmar sua assinatura agora. Recarregue a página em instantes.</p>}
      {usuario ? (
        <div className="lv-hero-botoes">
          <button type="button" className="btn btn-primary" onClick={() => assinar('mensal')} disabled={ocupado}>{ocupado ? 'Abrindo…' : `Assinar por ${PRECO_MENSAL}/mês`}</button>
          <button type="button" className="btn btn-ghost" onClick={() => assinar('trimestral')} disabled={ocupado}>3 meses por {PRECO_TRIMESTRAL} (Pix, boleto ou cartão)</button>
        </div>
      ) : (
        <div className="lv-hero-botoes">
          <Link to={`/cadastro?proximo=${encodeURIComponent(location.pathname)}`} className="btn btn-primary">Criar conta para assinar</Link>
          <Link to={`/entrar?proximo=${encodeURIComponent(location.pathname)}`} className="btn btn-ghost">Já tenho conta</Link>
        </div>
      )}
      {erro && <p className="erro" role="alert">{erro}</p>}
      <p className="nota"><Link to="/termos">Termos e reembolso</Link></p>
    </section>
  );
}
