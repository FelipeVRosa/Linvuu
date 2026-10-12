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

const CAMADAS: { k: 'comeceAqui' | 'imersao' | 'pratica'; t: string; d: string }[] = [
  { k: 'comeceAqui', t: 'Comece aqui', d: 'Ouça cada palavra com áudio nativo e leia junto.' },
  { k: 'imersao', t: 'Imersão', d: 'Textos e diálogos curtos, com tradução sob demanda.' },
  { k: 'pratica', t: 'Prática', d: 'Exercícios com feedback imediato.' },
];

export default function Dia() {
  const { id, n } = useParams();
  const curso = getCurso(id);
  const T = textos(curso?.id);
  const dia = Number(n);
  const total = statusDoCurso(curso?.id ?? '')?.total ?? 120;
  const valido = !!curso && curso.area === 'idiomas' && Number.isInteger(dia) && dia >= 1 && dia <= total;
  const [aula, setAula] = useState<Aula | null>(null);
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

  usePageTitle(aula ? `Dia ${dia}: ${aula.titulo} · ${curso!.nome}` : undefined);
  if (!valido) return <NaoEncontrada />;

  const fase = aula && FASES.find((f) => f.id === aula.fase);

  return (
    <div className="pagina pagina-aluno">
    <AreaAluno idioma={curso!.id} nome={curso!.nome} dia={dia}>
    <div className="aa-leitura">
      <Navegacao pai={`/curso/${curso!.id}`} idioma={curso!.id} trilha={[{ rotulo: T.inicio, para: '/' }, { rotulo: T.cursos, para: curso!.id === 'br' ? '/portugues' : '/cursos' }, { rotulo: curso!.id === 'br' ? 'Brazilian Portuguese' : curso!.nome, para: `/curso/${curso!.id}` }, { rotulo: `${T.sessao} ${dia}` }]} />

      {bloqueado && !decidindo && <Paywall idioma={curso!.id} curso={curso!.id === 'br' ? 'Brazilian Portuguese' : curso!.nome} indisponivel={ass.indisponivel} />}
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
              {aula.aula ? T.kickerAula(aula.aula.numero, aula.sessao?.sessao.replace('S', '') ?? '', aula.aula.sessoes, aula.sessao?.duracaoMin ?? 30) : `Dia ${dia} de ${total} · ${fase?.titulo} · ${NIVEL_LABEL[aula.nivel]}`}
            </span>
            <h1 className="pagina-h1">{aula.titulo}</h1>
            <p className="lead">{aula.aula ? T.objetivoAula(aula.aula.objetivo) : `Ao final do dia: ${aula.objetivo.charAt(0).toLowerCase() + aula.objetivo.slice(1)}`}</p>
            <span className={`pill pill-aula-${aula.status}`}>{STATUS_AULA[aula.status]}</span>
          </header>

          {aula.status !== 'publicada' && curso!.id !== 'br' && (
            <p className="nota">
              {aula.sessao
                ? 'Aula em revisão: o conteúdo está escrito e já dá para estudar, mas ainda passa por revisão e a voz nativa está em gravação (por enquanto o áudio usa a voz do seu navegador).'
                : `Esta aula de ${curso!.nome} ainda não foi publicada. O objetivo do dia já está definido; o áudio, o texto e os exercícios estão em produção.`}
            </p>
          )}

          {aula.sessao ? (
            <Sessao key={dia} nomeIdioma={curso!.nome.toLowerCase()} sessao={aula.sessao} idioma={curso!.id} aula={aula.aula?.numero ?? dia} proximo={dia < total ? `/curso/${curso!.id}/dia/${dia + 1}` : undefined} />
          ) : (
            <div className="camadas">
              {CAMADAS.map((c, i) => (
                <section key={c.k} className="camada">
                  <span className="method-num">0{i + 1}</span>
                  <h2>{c.t}</h2>
                  <p>{c.d}</p>
                  <span className="camada-status">{aula[c.k]?.status === 'legado' ? 'Escrita, em migração' : 'Em breve'}</span>
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
