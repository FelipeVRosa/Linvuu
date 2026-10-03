import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { mensagemDeErro } from '../lib/firebase';
import { EMAIL_OFICIAL } from '../config/site';
import { usePageTitle } from '../lib/usePageTitle';

const GoogleG = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.2 5.5-4.7 7.2l7.5 5.8c4.4-4.1 7-10.1 7-17.5z" />
    <path fill="#FBBC05" d="M10.5 28.7a14.5 14.5 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
  </svg>
);

export default function Conta({ modo }: { modo: 'entrar' | 'cadastro' }) {
  const cadastro = modo === 'cadastro';
  usePageTitle(cadastro ? 'Cadastre-se' : 'Entrar');
  const { usuario, configurado, entrarComGoogle, entrarComEmail, criarConta, recuperarSenha } = useAuth();
  const nav = useNavigate();
  const [params] = useSearchParams();
  const destino = params.get('proximo')?.startsWith('/') ? params.get('proximo')! : '/';
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [aviso, setAviso] = useState('');
  const [ocupado, setOcupado] = useState(false);

  useEffect(() => { if (usuario) nav(destino, { replace: true }); }, [usuario, destino, nav]);

  const executar = async (fn: () => Promise<void>) => {
    setErro(''); setAviso(''); setOcupado(true);
    try { await fn(); } catch (e) { setErro(mensagemDeErro(e)); } finally { setOcupado(false); }
  };
  const enviar = (e: FormEvent) => {
    e.preventDefault();
    executar(() => (cadastro ? criarConta(nome, email, senha) : entrarComEmail(email, senha)));
  };
  const esqueci = () => {
    if (!email.trim()) { setErro('Digite seu e-mail acima para receber o link de nova senha.'); return; }
    executar(async () => { await recuperarSenha(email); setAviso('Se existir uma conta com esse e-mail, enviamos o link para criar uma nova senha.'); });
  };
  const outra = cadastro ? '/entrar' : '/cadastro';

  return (
    <div className="conta">
      <div className="conta-card">
        <h1>{cadastro ? 'Crie sua conta grátis' : 'Entre na sua conta'}</h1>
        <p className="conta-sub">{cadastro ? 'Salve seu progresso e continue de onde parou.' : 'Bom te ver de novo.'}</p>

        {!configurado && (
          <p className="conta-aviso" role="status">O login ainda não foi ativado neste ambiente. Assim que a Linvuu o ativar, os botões abaixo passam a funcionar.</p>
        )}

        <button type="button" className="btn btn-google" disabled={!configurado || ocupado} onClick={() => executar(entrarComGoogle)}>
          <GoogleG /> Continuar com Google
        </button>
        <div className="conta-ou"><span>ou com e-mail</span></div>

        <form onSubmit={enviar} noValidate={false}>
          {cadastro && (
            <div className="search-field">
              <label htmlFor="c-nome">Nome</label>
              <input id="c-nome" autoComplete="name" value={nome} onChange={(e) => setNome(e.target.value)} required disabled={!configurado} />
            </div>
          )}
          <div className="search-field">
            <label htmlFor="c-email">E-mail</label>
            <input id="c-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={!configurado} />
          </div>
          <div className="search-field">
            <label htmlFor="c-senha">Senha</label>
            <input id="c-senha" type="password" autoComplete={cadastro ? 'new-password' : 'current-password'} minLength={6} value={senha} onChange={(e) => setSenha(e.target.value)} required disabled={!configurado} />
            {cadastro && <small>Mínimo de 6 caracteres.</small>}
          </div>
          {erro && <p className="conta-erro" role="alert">{erro}</p>}
          {aviso && <p className="conta-ok" role="status">{aviso}</p>}
          <button type="submit" className="btn btn-primary btn-cheio" disabled={!configurado || ocupado}>{ocupado ? 'Aguarde…' : cadastro ? 'Criar conta' : 'Entrar'}</button>
          {!cadastro && <button type="button" className="link conta-esqueci" onClick={esqueci} disabled={!configurado || ocupado}>Esqueci minha senha</button>}
        </form>

        <p className="conta-troca">{cadastro ? 'Já tem conta?' : 'Ainda não tem conta?'} <Link to={`${outra}${destino !== '/' ? `?proximo=${encodeURIComponent(destino)}` : ''}`}>{cadastro ? 'Entrar' : 'Cadastre-se grátis'}</Link></p>
        <p className="conta-ajuda">Precisa de ajuda? <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a></p>
      </div>
    </div>
  );
}
