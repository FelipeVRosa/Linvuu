import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import type { Plano } from '../lib/assinatura';
import { Navegacao } from '../components/Navegacao';
import { useAuth } from '../lib/AuthContext';
import { abrir, useAssinatura } from '../lib/assinatura';
import { AULAS_GRATIS, PRECO_ANUAL, PRECO_EX_ALUNO, PRECO_MENSAL, PRECO_TRIMESTRAL, PRECO_TRIMESTRAL_PIX } from '../config/planos';
import { EMAIL_OFICIAL } from '../config/site';
import { usePageTitle } from '../lib/usePageTitle';
import { data, LOCALE, useT } from '../i18n';
import { PlanosPreview } from '../components/PlanosPreview';
import { analytics } from '../lib/analytics';
import '../site-publico.css';

export default function Assinatura() {
  const t = useT();
  const s = t.assinatura;
  usePageTitle(LOCALE.codigo === 'pt-BR' ? 'Planos e assinatura' : s.titulo, LOCALE.codigo === 'pt-BR' ? 'Conheça a assinatura atual da Linvuu, com acesso aos cursos de idiomas, e os novos planos em preparação. Consulte preços, formas de pagamento e condições.' : undefined, ['pt-BR'], LOCALE.codigo !== 'pt-BR');
  const { usuario, carregando } = useAuth();
  const a = useAssinatura();
  const [params] = useSearchParams();
  // Retorno do Stripe não é confirmação de pagamento (Pix e boleto são assíncronos).
  useEffect(() => { if (params.get('ok') === '1') void analytics.capture('checkout_returned', { page: 'plans' }); }, [params]);
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState('');
  const nav = useNavigate();
  const PLANOS: Plano[] = ['mensal', 'trimestral-pix', 'trimestral', 'anual'];
  const pedido = params.get('plano') as Plano | null;
  const escolhido = pedido && PLANOS.includes(pedido) ? pedido : null;
  const nomePlano: Record<Plano, string> = { mensal: s.mensal, 'trimestral-pix': s.pixBtn, trimestral: s.tresBtn, anual: s.anoBtn };
  const ir = async (t: 'checkout' | 'portal', plano?: Plano) => {
    // Visitante: vê os preços, mas o pagamento exige conta. O plano escolhido volta na URL e o checkout só abre com um novo clique.
    if (!usuario) { nav(`/cadastro?proximo=${encodeURIComponent(`/assinatura?plano=${plano ?? 'mensal'}`)}`); return; }
    setOcupado(true); setErro('');
    try { await abrir(t, plano); } catch (e) { setErro((e as Error).message); setOcupado(false); }
  };
  return (
    <div className={LOCALE.codigo === 'pt-BR' ? 'pagina site-publico site-assinatura' : 'pagina'}>
      <Navegacao pai="/" trilha={[{ rotulo: t.geral.inicio, para: '/' }, { rotulo: s.titulo }]} />
      <h1 className="pagina-h1">{LOCALE.codigo === 'pt-BR' ? 'Um plano para o seu próximo passo.' : s.titulo}</h1>
      {LOCALE.codigo === 'pt-BR' && !a.ativa && <><p className="site-lead">Conheça os novos planos em preparação. A oferta disponível para contratação hoje está identificada abaixo.</p><div className="br-home site-plans-preview"><PlanosPreview /></div></>}
      <div id="oferta-atual" />
      {LOCALE.codigo === 'pt-BR' && !a.ativa && <header className="site-offer-heading"><p className="site-eyebrow">DISPONÍVEL HOJE</p><h2>Assinatura atual</h2><p>Os valores abaixo pertencem à oferta vigente, com acesso a todos os cursos. Start, Basic, Intermediário e Premium ainda não estão à venda.</p></header>}
      {carregando || (usuario && a.carregando) ? <p className="resultado" role="status">{t.geral.carregando}</p> : (
        <div className="texto-legal lv-assinatura">
          {params.get('ok') && !a.ativa && <p className="nota">{s.recebido} <button type="button" className="link-btn" onClick={a.recarregar}>{s.atualize}</button>.</p>}
          {usuario && a.indisponivel && <p className="erro" role="alert">{s.indisponivel}</p>}
          {usuario && escolhido && !a.ativa && (
            <div className="nota lv-assinatura-escolhido" role="status">
              <span>{s.escolhido(nomePlano[escolhido])}</span>
              <button type="button" className="btn btn-primary" onClick={() => ir('checkout', escolhido)} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.continuarPagamento}</button>
            </div>
          )}
          {usuario && a.ativa ? (
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
              {LOCALE.codigo === 'pt-BR' && <p className="nota" role="note"><strong>Atualização dos áudios:</strong> estamos atualizando as narrações dos cursos. Alguns áudios podem estar temporariamente indisponíveis. Você pode experimentar as aulas gratuitas antes de contratar e falar com a Linvuu pelo <a href={`mailto:${EMAIL_OFICIAL}`}>e-mail de atendimento</a>.</p>}
              {!usuario && <p className="nota lv-assinatura-conta">{s.semConta} <Link to="/entrar?proximo=/assinatura">{s.jaTemConta}</Link></p>}
              <div className="lv-planos">
                <div className={`lv-plano lv-plano-dest ${escolhido === 'mensal' ? 'lv-plano-escolhido' : ''}`}>
                  <h3>{s.mensal}</h3>
                  <p className="lv-plano-preco">{PRECO_MENSAL}<span>{s.porMes}</span></p>
                  <p>{s.mensalTxt}</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('checkout', 'mensal')} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.assinarBtn}</button>
                  <p className="nota">{s.exAluno(PRECO_EX_ALUNO)}</p>
                </div>
                <div className={`lv-plano ${escolhido?.startsWith('trimestral') ? 'lv-plano-escolhido' : ''}`}>
                  <h3>{s.tresMeses}</h3>
                  <p className="lv-plano-preco">{PRECO_TRIMESTRAL_PIX}<span>{s.noPix}</span></p>
                  <p>{s.pixTxt}</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('checkout', 'trimestral-pix')} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.pixBtn}</button>
                  <p className="lv-plano-preco">{PRECO_TRIMESTRAL}<span>{s.cartaoBoleto}</span></p>
                  <button type="button" className="btn btn-ghost" onClick={() => ir('checkout', 'trimestral')} disabled={ocupado}>{ocupado ? t.geral.abrindo : s.tresBtn}</button>
                </div>
                <div className={`lv-plano ${escolhido === 'anual' ? 'lv-plano-escolhido' : ''}`}>
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

