/** Ilustrações vetoriais leves, decorativas e próprias da interface mobile. */
export function OndaDeVoz() {
  return <svg viewBox="0 0 160 80" className="app-onda" aria-hidden="true" focusable="false"><path d="M0 40h160" opacity=".2"/><path d="M12 33v14m10-23v32m10-22v12m10-29v46m10-38v30m10-16v2m10-30v58m10-46v34m10-25v16m10-31v48m10-36v24m10-19v14m10-25v36m10-24v12"/></svg>;
}
export function IconeEstudo({tipo}: {tipo:'percurso'|'livro'|'ouvir'}) {
 return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{tipo==='percurso'?<><circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v3a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v1"/><path d="M14 4h6m-3-3v6"/></>:tipo==='livro'?<><path d="M12 5c-3-2-7-2-10-1v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1v15"/><path d="M5 8h3m-3 4h3m8-4h3m-3 4h3"/></>:<><path d="M4 14v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="12" width="4" height="8" rx="2"/><rect x="18" y="12" width="4" height="8" rx="2"/></>}</svg>;
}
