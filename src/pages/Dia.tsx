import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Aula, FASES, NIVEL_LABEL, STATUS_AULA, carregarAula, getCurso, statusDoCurso } from '../lib/content';
import { Navegacao } from '../components/Navegacao';
import { Sessao } from '../components/Sessao';
import { AreaAluno, MarcarDia } from '../components/AreaAluno';
import { usePageTitle } from '../lib/usePageTitle';
import { Paywall } from '../components/Paywall';
import { useAssinatura } from '../lib/assinatura';
import { textos } from '../lib/textos';
import { gratis } from '../config/planos';
import NaoEncontrada from './NaoEncontrada';
import { OutroIdioma } from '../components/OutroIdioma';
import { LOCALE, useT } from '../i18n';

const CAMADAS = ['comeceAqui', 'imersao', 'pratica'] as const;

export default function Dia() {
  const { id, n } = useParams();
  const curso = getCurso(id);
  const T = textos(curso?.id);
  const t = useT();
  const dia = Number(n);
  const total = statusDoCurso(curso?.id ?? '')?.total ?? 120;
  const valido = !!curso && curso.area === 'idiomas' && Number.isInteger(dia) && dia >= 1 && dia <= total;
  const [aula, setAula] = useState<(Aula & { semTraducao?: string }) | null>(null);
  const [erro, setErro] = useState(false);
  const ass = useAssinatura();
  const bloqueado = !gratis(dia) && !ass.ativa && !import.meta.env.DEV;
  const decidindo = !gratis(dia) && ass.carregando && !import.meta.env.DEV;

  useEffect(() => {
    if (!valido || bloqueado || decidindo) { setAula(null); return; }
    setAula(null); setErro(false);
    carregarAula(curso!.id, dia).then((a) => { try { sessionStorage.removeItem('linvuu:recarregou-aula'); } catch { /* ok */ } setAula(a); }).catch((e: unknown) => {
      console.error('Falha ao carregar a aula', curso!.id, dia, e);
      // Arquivo de aula que não existe mais depois de uma publicação nova: uma recarga resolve. Só uma vez, para não entrar em laço.
      const msg = String((e as Error)?.message ?? e);
      const recarregou = (() => { try { return sessionStorage.getItem('linvuu:recarregou-aula'); } catch { return '1'; } })();
      if (/Failed to fetch dynamically imported module|Loading chunk|Importing a module script failed/i.test(msg) && !recarregou) {
        try { sessionStorage.setItem('linvuu:recarregou-aula', '1'); } catch { /* sem armazenamento: recarrega mesmo assim */ }
        window.location.reload();
        return;
      }
      setErro(true);
    });
  }, [valido, curso, dia, bloqueado, decidindo]);

  usePageTitle(aula ? `${T.rotuloDia(dia)}: ${aula.titulo} · ${curso!.nome}` : undefined, undefined, []);
  if (!valido) return <NaoEncontrada />;
  if (curso!.id === 'br' && LOCALE.codigo === 'pt-BR') return <OutroIdioma para="en" />;

  const fase = aula && FASES.find((f) => f.id === aula.fase);

  return (
    <div className="pagina pagina-aluno">
    <AreaAluno idioma={curso!.id} nome={curso!.nome} dia={dia}>
    <div className="aa-leitura">
      <Navegacao pai={`/curso/${curso!.id}`} idioma={curso!.id} trilha={[{ rotulo: t.geral.inicio, para: '/' }, { rotulo: t.geral.cursos, para: curso!.id === 'br' ? '/portugues' : '/cursos' }, { rotulo: curso!.nome, para: `/curso/${curso!.id}` }, { rotulo: T.rotuloDia(dia) }]} />

      {bloqueado && !decidindo && <Paywall idioma={curso!.id} curso={curso!.nome} indisponivel={ass.indisponivel} />}
      {erro && (
        <div className="vazio">
          <p>{T.semAula}</p>
          <button type="button" className="btn btn-ghost" onClick={() => window.location.reload()}>{T.tentarDeNovo}</button>
        </div>
      )}
      {!aula && !erro && !bloqueado && <p className="resultado" role="status">{T.carregando}</p>}

      {aula && (
        <>
          <header>
            <span className="kicker-pagina">
              {aula.aula ? T.kickerAula(aula.aula.numero, aula.sessao?.sessao.replace('S', '') ?? '', aula.aula.sessoes, aula.sessao?.duracaoMin ?? 30) : T.kickerDia(dia, total, fase?.titulo ?? '', NIVEL_LABEL[aula.nivel])}
            </span>
            <h1 className="pagina-h1">{aula.titulo}</h1>
            <p className="lead">{aula.aula ? T.objetivoAula(aula.aula.objetivo) : T.objetivoDia(aula.objetivo)}</p>
            <span className={`pill pill-aula-${aula.status}`}>{STATUS_AULA[aula.status]}</span>
          </header>

          {aula.semTraducao && <p className="nota nota-traducao" role="note">{T.semTraducao(t.linguas[aula.semTraducao])}</p>}
          {aula.status !== 'publicada' && (
            <p className="nota">{aula.sessao ? T.emRevisao : T.naoPublicada(curso!.nome)}</p>
          )}

          {aula.sessao ? (
            <Sessao key={dia} nomeIdioma={LOCALE.codigo === 'en' ? curso!.nome : curso!.nome.toLowerCase()} explicacao={aula.semTraducao ?? LOCALE.explicacao} sessao={aula.sessao} idioma={curso!.id} aula={aula.aula?.numero ?? dia} proximo={dia < total ? `/curso/${curso!.id}/dia/${dia + 1}` : undefined} />
          ) : (
            <div className="camadas">
              {CAMADAS.map((k, i) => (
                <section key={k} className="camada">
                  <span className="method-num">0{i + 1}</span>
                  <h2>{T.camadas[i].t}</h2>
                  <p>{T.camadas[i].d}</p>
                  <span className="camada-status">{aula[k]?.status === 'legado' ? T.emMigracao : T.emBreve}</span>
                </section>
              ))}
            </div>
          )}

          <nav className="dia-nav aa-nav" aria-label={T.navDias}>
            {dia > 1 ? <Link to={`/curso/${curso!.id}/dia/${dia - 1}`}>{T.anterior(dia - 1)}</Link> : <span />}
            <MarcarDia idioma={curso!.id} dia={dia} />
            {dia < total ? <Link to={`/curso/${curso!.id}/dia/${dia + 1}`}>{T.seguinte(dia + 1)}</Link> : <span />}
          </nav>
        </>
      )}
    </div>
    </AreaAluno>
    </div>
  );
}
