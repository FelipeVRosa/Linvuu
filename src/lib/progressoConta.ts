// Dias concluídos: fila por conta, com reenvio de alterações locais quando a rede voltar.
import { carregarAuth } from './firebase';
import { api } from './api';
import { confirmarPendenciaDia, diasConcluidos, marcarDia, pendenciasDias, registrarPendenciaDia, usuarioDoProgresso } from './progresso';

export const EVENTO_SINCRONIZACAO = 'linvuu:sincronizacao';
export type EstadoSincronizacao = 'local' | 'salvando' | 'salvo' | 'pendente';
interface Acesso { uid: string; token: string }
async function tokenAtual(): Promise<Acesso | null> {
  try {
    const { auth } = await carregarAuth();
    const u = auth.currentUser;
    if (!u) return null;
    const token = await u.getIdToken();
    return auth.currentUser?.uid === u.uid ? { token, uid: u.uid } : null;
  } catch { return null; }
}

/** Dependências injetáveis para testar falhas de rede e troca de conta sem credenciais reais. */
export function criarSincronizadorProgresso(acesso: () => Promise<Acesso | null> = tokenAtual, pedir: typeof fetch = fetch) {
  const filas = new Map<string, Promise<boolean>>();
  const estados = new Map<string, EstadoSincronizacao>();
  const estado = (): EstadoSincronizacao => {
    const uid = usuarioDoProgresso();
    return uid ? estados.get(uid) ?? (Object.keys(pendenciasDias()).length ? 'pendente' : 'local') : 'local';
  };
  const avisar = (uid: string, valor: EstadoSincronizacao) => {
    if (uid !== usuarioDoProgresso()) return;
    estados.set(uid, valor);
    window.dispatchEvent(new Event(EVENTO_SINCRONIZACAO));
  };
  const requisicao = (url: string, init: RequestInit) => pedir(api(url), { ...init, signal: AbortSignal.timeout(12000) });
  const executar = (idioma: string, lerRemoto: boolean): Promise<boolean> => {
    const uid = usuarioDoProgresso();
    if (!uid) return Promise.resolve(false);
    avisar(uid, 'salvando');
    const anterior = filas.get(uid) ?? Promise.resolve(true);
    const atual = anterior.catch(() => false).then(async () => {
      if (uid !== usuarioDoProgresso()) return false;
      try {
        const t = await acesso();
        if (!t || t.uid !== uid || uid !== usuarioDoProgresso()) throw new Error('Sessão indisponível');
        const headers = { Authorization: `Bearer ${t.token}` };
        if (lerRemoto) {
          const r = await requisicao('/api/progresso', { headers });
          if (!r.ok) throw new Error('Progresso indisponível');
          const j = await r.json() as { licoes?: unknown };
          if (!Array.isArray(j.licoes)) throw new Error('Resposta inválida');
          if (uid !== usuarioDoProgresso()) return false;
          const remotos = new Set(j.licoes.filter((k): k is string => typeof k === 'string' && k.startsWith(`${idioma}:`) && /^[1-9]\d*$/.test(k.slice(idioma.length + 1))));
          const locais = diasConcluidos(idioma);
          const pendentes = pendenciasDias();
          for (const k of remotos) {
            // Desmarcar offline tem prioridade sobre uma cópia antiga da conta.
            if (!pendentes[k] && !locais.includes(Number(k.split(':')[1]))) marcarDia(idioma, Number(k.split(':')[1]), true, false);
          }
          for (const dia of locais) {
            const k = `${idioma}:${dia}`;
            if (!remotos.has(k) && !pendentes[k]) registrarPendenciaDia(idioma, dia, true);
          }
        }
        // Envia as pendências de todos os idiomas, inclusive desmarcações feitas sem rede.
        for (const [chave, p] of Object.entries(pendenciasDias())) {
          if (uid !== usuarioDoProgresso()) return false;
          const [lingua, n] = chave.split(':');
          const r = await requisicao('/api/progresso', { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json' }, body: JSON.stringify({ idioma: lingua, dia: Number(n), feito: p.feito }) });
          if (!r.ok) throw new Error('Não foi possível salvar');
          if (uid !== usuarioDoProgresso()) return false;
          confirmarPendenciaDia(chave, p.versao);
        }
        const completo = Object.keys(pendenciasDias()).length === 0;
        avisar(uid, completo ? 'salvo' : 'pendente');
        return completo;
      } catch { avisar(uid, 'pendente'); return false; }
    });
    filas.set(uid, atual);
    void atual.finally(() => { if (filas.get(uid) === atual) filas.delete(uid); });
    return atual;
  };
  return { estado, sincronizar: (idioma: string) => executar(idioma, true), salvar: (idioma: string, dia: number, feito: boolean) => {
    const pendente = pendenciasDias()[`${idioma}:${dia}`];
    if (pendente?.feito !== feito) registrarPendenciaDia(idioma, dia, feito);
    return executar(idioma, false);
  } };
}
const sincronizador = criarSincronizadorProgresso();
export const estadoProgressoConta = sincronizador.estado;
export const sincronizarConta = sincronizador.sincronizar;
export const salvarDiaConta = sincronizador.salvar;
