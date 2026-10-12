import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import type { Plano } from '../lib/assinatura';
import { Navegacao } from '../components/Navegacao';
import { useAuth } from '../lib/AuthContext';
import { abrir, useAssinatura } from '../lib/assinatura';
import { AULAS_GRATIS, PRECO_ANUAL, PRECO_MENSAL, PRECO_TRIMESTRAL, PRECO_TRIMESTRAL_PIX } from '../config/planos';
import { EMAIL_OFICIAL } from '../config/site';
import { usePageTitle } from '../lib/usePageTitle';

export default function Assinatura() {
  usePageTitle('Assinatura');
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
      <Navegacao pai="/" trilha={[{ rotulo: 'Início', para: '/' }, { rotulo: 'Assinatura' }]} />
      <h1 className="pagina-h1">Assinatura</h1>
      {carregando || a.carregando ? <p className="resultado" role="status">Carregando…</p> : !usuario ? (
        <p>Para assinar, <Link to="/entrar?proximo=/assinatura">entre</Link> ou <Link to="/cadastro?proximo=/assinatura">crie sua conta</Link>. As {AULAS_GRATIS} primeiras aulas de cada curso são grátis.</p>
      ) : (
        <div className="texto-legal">
          {params.get('ok') && !a.ativa && <p className="nota">Pagamento recebido. Se a assinatura não aparecer em um minuto, <button type="button" className="link-btn" onClick={a.recarregar}>atualize</button>.</p>}
          {a.indisponivel && <p className="erro" role="alert">Não foi possível consultar sua assinatura agora. Tente de novo em instantes.</p>}
          {a.ativa ? (
            <>
              {a.via === 'trimestral' ? (
                <p><strong>Seu acesso de 3 meses está ativo</strong>{a.ate ? ` até ${new Date(a.ate * 1000).toLocaleDateString('pt-BR')}` : ''}. Não há renovação automática. Todos os cursos estão liberados.</p>
              ) : (
                <>
                  <p><strong>Sua assinatura está ativa.</strong>{a.cancelaEm ? ` Ela termina em ${new Date(a.cancelaEm * 1000).toLocaleDateString('pt-BR')}.` : ''} Todos os cursos estão liberados.</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('portal')} disabled={ocupado}>Gerenciar ou cancelar</button>
                </>
              )}
              <p>Reembolso de 7 dias: escreva para <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>.</p>
            </>
          ) : (
            <>
              <p>As {AULAS_GRATIS} primeiras aulas de cada curso continuam grátis. Todos os cursos, com reembolso integral em até 7 dias. Escolha como pagar:</p>
              <div className="lv-planos">
                <div className="lv-plano lv-plano-dest">
                  <h3>Mensal</h3>
                  <p className="lv-plano-preco">{PRECO_MENSAL}<span> por mês</span></p>
                  <p>Cartão, renovação automática. Cancele quando quiser.</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('checkout', 'mensal')} disabled={ocupado}>{ocupado ? 'Abrindo…' : 'Assinar'}</button>
                </div>
                <div className="lv-plano">
                  <h3>3 meses</h3>
                  <p className="lv-plano-preco">{PRECO_TRIMESTRAL_PIX}<span> no Pix, pagamento único</span></p>
                  <p>30% de desconto para quem paga por Pix. Sem renovação automática. O QR code aparece na tela seguinte.</p>
                  <button type="button" className="btn btn-primary" onClick={() => ir('checkout', 'trimestral-pix')} disabled={ocupado}>{ocupado ? 'Abrindo…' : 'Pagar 3 meses no Pix'}</button>
                  <p className="lv-plano-preco">{PRECO_TRIMESTRAL}<span> no cartão ou boleto, pagamento único</span></p>
                  <button type="button" className="btn btn-ghost" onClick={() => ir('checkout', 'trimestral')} disabled={ocupado}>{ocupado ? 'Abrindo…' : 'Pagar 3 meses no cartão ou boleto'}</button>
                </div>
                <div className="lv-plano">
                  <h3>12 meses</h3>
                  <p className="lv-plano-preco">{PRECO_ANUAL}<span> no cartão ou boleto, pagamento único</span></p>
                  <p>Um ano de acesso a todos os cursos. Sem renovação automática.</p>
                  <button type="button" className="btn btn-ghost" onClick={() => ir('checkout', 'anual')} disabled={ocupado}>{ocupado ? 'Abrindo…' : 'Pagar 12 meses'}</button>
                </div>
              </div>
            </>
          )}
          {erro && <p className="erro" role="alert">{erro}</p>}
          <p><Link to="/termos">Termos de uso e reembolso</Link></p>
        </div>
      )}
    </div>
  );
}
