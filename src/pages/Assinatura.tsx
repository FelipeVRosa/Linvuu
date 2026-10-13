import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import type { Plano } from '../lib/assinatura';
import { Navegacao } from '../components/Navegacao';
import { useAuth } from '../lib/AuthContext';
import { abrir, useAssinatura } from '../lib/assinatura';
import { AULAS_GRATIS, PRECO_ANUAL, PRECO_EX_ALUNO, PRECO_MENSAL, PRECO_TRIMESTRAL, PRECO_TRIMESTRAL_PIX } from '../config/planos';
import { EMAIL_OFICIAL } from '../config/site';
import { usePageTitle } from '../lib/usePageTitle';
import { data, useT } from '../i18n';

export default function Assinatura() {
  const t = useT();
  const s = t.assinatura;
  usePageTitle(s.titulo);
  const { usuario, carregando } = useAuth();
  const a = useAssinatura();
  const [params] = useSearchParams();
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState('');
  const ir = async (t: 'checkout' | 'portal', plano?: Plano) => {
    setOcupado(true); setErro('');
    try { await abrir(t, plano); } catch (e) { setErro((e as Error).message); setOcupado(false); }
  };
  return (
    <div className="pagina">
      <Navegacao pai="/" trilha={[{ rotulo: t.geral.inicio, para: '/' }, { rotulo: s.titulo }]} />
      <h1 className="pagina-h1">{s.titulo}</h1>
      {carregando || a.carregando ? <p className="resultado" role="status">{t.geral.carregando}</p> : !usuario ? (
        <p>{s.entreOu[0]} <Link to="/entrar?proximo=/assinatura">{s.entreOu[1]}</Link> {s.entreOu[2]} <Link to="/cadastro?proximo=/assinatura">{s.entreOu[3]}</Link>. {s.gratis(AULAS_GRATIS)}</p>
      ) : (
        <div className="texto-legal">
          {params.get('ok') && !a.ativa && <p className="nota">{s.recebido} <button type="button" className="link-btn" onClick={a.recarregar}>{s.atualize}</button>.</p>}
          {a.indisponivel && <p className="erro" role="alert">{s.indisponivel}</p>}
          {a.ativa ? (
            <>
              {a.via === 'trimestral' ? (
                <p><strong>{s.tresAtivo}</strong>{a.ate ? s.ate(data(a.ate)) : ''}. {s.semRenovacao}</p>
              ) : (
                <>
                  <p><strong>{s.ativa}</strong>{a.cancelaEm ? s.termina(data(a.cancelaEm)) : ''} {s.liberados}</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('portal')} disabled={ocupado}>{s.gerenciar}</button>
                </>
              )}
              <p>{s.reembolso} <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>.</p>
            </>
          ) : (
            <>
              <p>{s.intro(AULAS_GRATIS)}</p>
              <div className="lv-planos">
                <div className="lv-plano lv-plano-dest">
                  <h3>{s.mensal}</h3>
                  <p className="lv-plano-preco">{PRECO_MENSAL}<span>{s.porMes}</span></p>
                  <p>{s.mensalTxt}</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('checkout', 'mensal')} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.assinarBtn}</button>
                  <p className="nota">{s.exAluno(PRECO_EX_ALUNO)}</p>
                </div>
                <div className="lv-plano">
                  <h3>{s.tresMeses}</h3>
                  <p className="lv-plano-preco">{PRECO_TRIMESTRAL_PIX}<span>{s.noPix}</span></p>
                  <p>{s.pixTxt}</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('checkout', 'trimestral-pix')} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.pixBtn}</button>
                  <p className="lv-plano-preco">{PRECO_TRIMESTRAL}<span>{s.cartaoBoleto}</span></p>
                  <button type="button" className="btn btn-ghost" onClick={() => ir('checkout', 'trimestral')} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.tresBtn}</button>
                </div>
                <div className="lv-plano">
                  <h3>{s.dozeMeses}</h3>
                  <p className="lv-plano-preco">{PRECO_ANUAL}<span>{s.cartaoBoleto}</span></p>
                  <p>{s.anoTxt}</p>
                  <button type="button" className="btn btn-ghost" onClick={() => ir('checkout', 'anual')} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.anoBtn}</button>
                </div>
              </div>
            </>
          )}
          {erro && <p className="erro" role="alert">{erro}</p>}
          <p><Link to="/termos">{s.termos}</Link></p>
        </div>
      )}
    </div>
  );
}
