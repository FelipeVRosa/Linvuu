import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { authConfigurado, carregarDb } from '../lib/firebase';
import { EMAIL_OFICIAL } from '../config/site';
import { useT } from '../i18n';

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Captura de e-mail. Grava em `newsletter` no Firestore (regras em firestore.rules). Sem Firebase, oferece o e-mail de contato. */
export function Newsletter({ origem }: { origem: string }) {
  const t = useT();
  const [email, setEmail] = useState('');
  const [aceite, setAceite] = useState(false);
  const [estado, setEstado] = useState<'livre' | 'enviando' | 'ok' | 'erro'>('livre');
  const [aviso, setAviso] = useState('');

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_OK.test(email.trim())) { setAviso(t.newsletter.invalido); return; }
    if (!aceite) { setAviso(t.newsletter.semAceite); return; }
    setAviso(''); setEstado('enviando');
    try {
      const { db, f } = await carregarDb();
      await f.addDoc(f.collection(db, 'newsletter'), { email: email.trim().toLowerCase(), origem, criadoEm: f.serverTimestamp() });
      setEstado('ok');
    } catch { setEstado('erro'); }
  };

  if (!authConfigurado) return <p className="news-nota"><a href={`mailto:${EMAIL_OFICIAL}?subject=Quero%20receber%20novidades`}>{EMAIL_OFICIAL}</a></p>;
  if (estado === 'ok') return <p className="news-ok" role="status">{t.newsletter.ok}</p>;
  return (
    <form className="news" onSubmit={enviar} noValidate>
      <div className="news-linha">
        <label htmlFor={`news-${origem}`} className="sr-only">{t.newsletter.email}</label>
        <input id={`news-${origem}`} type="email" autoComplete="email" placeholder={t.newsletter.email} value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="btn btn-primary" disabled={estado === 'enviando'}>{estado === 'enviando' ? t.newsletter.ocupado : t.newsletter.botao}</button>
      </div>
      <label className="check news-aceite"><input type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)} /> {t.newsletter.consentimento} <Link to="/privacidade">{t.rodape.privacidade}</Link></label>
      {aviso && <p className="conta-erro" role="alert">{aviso}</p>}
      {estado === 'erro' && <p className="conta-erro" role="alert">{t.newsletter.erro} <a href={`mailto:${EMAIL_OFICIAL}`}>{EMAIL_OFICIAL}</a>.</p>}
    </form>
  );
}
