import { useEffect, useState } from 'react';
import { LOCALE } from '../../i18n';
import { gratis } from '../../config/planos';
import { useAssinatura } from '../../lib/acesso';
import { errosParaRever, type ItemReforco } from './reforco';

const textos = {
  'pt-BR': { rotulo: 'Reforço', titulo: (n: number) => n === 1 ? '1 exercício para rever' : `${n} exercícios para rever`, texto: (s: number) => s === 1 ? 'Volte ao que errou antes de seguir. Lembrar com esforço é o que fixa.' : `Erros em ${s} blocos de prática. Comece pelo mais antigo: lembrar com esforço é o que fixa.`, acao: 'Rever erros agora' },
  en: { rotulo: 'Review', titulo: (n: number) => n === 1 ? '1 exercise to review' : `${n} exercises to review`, texto: (s: number) => s === 1 ? 'Go back to what you missed before moving on. Effortful recall is what makes it stick.' : `Mistakes in ${s} practice blocks. Start with the oldest: effortful recall is what makes it stick.`, acao: 'Review mistakes now' },
  es: { rotulo: 'Refuerzo', titulo: (n: number) => n === 1 ? '1 ejercicio para repasar' : `${n} ejercicios para repasar`, texto: (s: number) => s === 1 ? 'Vuelve a lo que fallaste antes de seguir. Recordar con esfuerzo es lo que fija.' : `Errores en ${s} bloques de práctica. Empieza por el más antiguo: recordar con esfuerzo es lo que fija.`, acao: 'Repasar errores ahora' },
};

/** Erros pendentes do curso, só em sessões que o aluno pode abrir. Atualiza quando a prática muda. */
export function useReforco(idioma: string | undefined) {
  const assinatura = useAssinatura();
  const ler = () => (idioma ? errosParaRever(idioma).filter((i) => gratis(i.dia) || assinatura.ativa) : []);
  const [itens, setItens] = useState<ItemReforco[]>(ler);
  useEffect(() => {
    const sync = () => setItens(ler());
    sync();
    for (const e of ['storage', 'linvuu:dias', 'linvuu:revisao-apk']) window.addEventListener(e, sync);
    return () => { for (const e of ['storage', 'linvuu:dias', 'linvuu:revisao-apk']) window.removeEventListener(e, sync); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idioma, assinatura.ativa]);
  return { itens, total: itens.reduce((n, i) => n + i.pendentes, 0), t: textos[LOCALE.codigo] };
}
