import { useT } from '../i18n';

export function Faq() {
  const t = useT();
  return (
    <div className="faq">
      {t.faqItens.map((i) => (
        <details key={i.p}>
          <summary>{i.p}</summary>
          <p>{i.r}</p>
        </details>
      ))}
    </div>
  );
}
