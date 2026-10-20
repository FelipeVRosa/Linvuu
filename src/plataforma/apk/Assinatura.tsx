import { ExclusaoConta } from './ExclusaoConta';
import { PagamentosTeste } from './PagamentosTeste';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';
import { useAssinatura } from '../../lib/acesso';
import { useT } from '../../i18n';
import { IconeEstudo } from './Visuais';
import { experiencia } from './experiencia';
import { appTextos } from './textos';

export default function Assinatura() {
  const { usuario } = useAuth();
  const acesso = useAssinatura();
  const t = useT();
  const a = appTextos();
  const x = experiencia();
  return <div className="pagina app-conta-mobile">
<header className="app-conta-topo"><span className="app-conta-icone"><IconeEstudo tipo="livro" /></span><p className="app-kicker">Linvuu</p><h1 className="pagina-h1">{t.nav.assinatura}</h1><p>{x.rotina}</p></header>
    <section className="app-conta-status">
    {!usuario ? <Link className="btn btn-primary" to="/entrar?proximo=/assinatura">{t.nav.entrar}</Link>
      : <p role="status">{acesso.carregando ? t.geral.carregando : acesso.indisponivel ? t.assinatura.indisponivel : acesso.ativa ? t.assinatura.ativa : a.compras}</p>}
    {usuario && acesso.indisponivel && <button type="button" className="btn btn-primary" disabled={acesso.carregando} onClick={acesso.recarregar}>{a.tentarNovamente}</button>}
    <p className="nota">{a.teste}</p>
    </section>
    <Link className="btn btn-ghost" to="/cursos">{t.nav.cursos}</Link>
    {usuario&&<PagamentosTeste key={usuario.uid} uid={usuario.uid}/>}
    <ExclusaoConta key={usuario?.uid??'visitante'}/>
    <p className="app-conta-legal"><Link to="/privacidade">{t.rodape.privacidade}</Link> · <Link to="/termos">{t.assinatura.termos}</Link></p>
  </div>;
}

