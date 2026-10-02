import React, { useState, useEffect } from 'react';
import { Mascot } from './Mascot';
import { LANGS, FLAGS } from './LanguagePicker';

interface ExerciseLabProps {
  lang: string;
  prof: string;
}

const PROF_LABELS: Record<string, string> = {
  med: 'Medicina',
  tec: 'Tecnologia',
  eng: 'Engenharia',
  dir: 'Direito',
  neg: 'Negócios',
  hot: 'Hotelaria',
};

const LESSONS_DATA: Record<
  string,
  Record<
    string,
    {
      s: [string, string][];
      alt: [string, string];
    }
  >
> = {
  en: {
    med: { s: [['Doctor, the patient in room four ___ chest pain.', 'has'], ['Please ___ his temperature every hour.', 'take']], alt: ['makes', 'bring'] },
    tec: { s: [['The ___ crashed again last night.', 'server'], ['Try to ___ the bug before Friday.', 'fix']], alt: ['kitchen', 'cook'] },
    eng: { s: [['The ___ of the bridge took three years.', 'construction'], ['Check the ___ before the storm arrives.', 'cables']], alt: ['contract', 'defendant'] },
    dir: { s: [['The client signed the ___ yesterday.', 'contract'], ['The judge will ___ the case next week.', 'review']], alt: ['server', 'cables'] },
    neg: { s: [['Our ___ grew twenty percent this year.', 'revenue'], ['We need to ___ a new supplier.', 'find']], alt: ['temperature', 'fever'] },
    hot: { s: [['Your room is on the third ___ , sir.', 'floor'], ['Breakfast is ___ from six to ten.', 'served']], alt: ['contract', 'analyzed'] },
  },
  es: {
    med: { s: [['Doctor, el paciente de la habitación cuatro ___ dolor de pecho.', 'tiene'], ['Por favor, ___ su temperatura cada hora.', 'tome']], alt: ['hace', 'come'] },
    tec: { s: [['El ___ falló otra vez anoche.', 'servidor'], ['Intenta ___ el error antes del viernes.', 'arreglar']], alt: ['cocina', 'comer'] },
    eng: { s: [['La ___ del puente duró tres años.', 'construcción'], ['Revisa los ___ antes de la tormenta.', 'cables']], alt: ['contrato', 'juez'] },
    dir: { s: [['El cliente firmó el ___ ayer.', 'contrato'], ['El juez ___ el caso la próxima semana.', 'analizará']], alt: ['servidor', 'cables'] },
    neg: { s: [['Nuestros ___ crecieron veinte por ciento este año.', 'ingresos'], ['Necesitamos ___ un nuevo proveedor.', 'buscar']], alt: ['temperatura', 'fiebre'] },
    hot: { s: [['Su habitación está en el tercer ___ , señor.', 'piso'], ['El desayuno se ___ de seis a diez.', 'sirve']], alt: ['contrato', 'juzgado'] },
  },
  fr: {
    med: { s: [['Docteur, le patient de la chambre quatre ___ mal à la poitrine.', 'a'], ['Prenez sa ___ toutes les heures.', 'température']], alt: ['mange', 'serveur'] },
    tec: { s: [['Le ___ est tombé en panne cette nuit.', 'serveur'], ['Essaie de ___ le bug avant vendredi.', 'corriger']], alt: ['température', 'manger'] },
    eng: { s: [['La ___ du pont a duré trois ans.', 'construction'], ['Vérifie les ___ avant la tempête.', 'câbles']], alt: ['contrat', 'client'] },
    dir: { s: [['Le client a signé le ___ hier.', 'contrat'], ['Le juge ___ l\'affaire la prochaine.', 'examinera']], alt: ['serveur', 'câbles'] },
    neg: { s: [['Nos ___ ont augmenté de vingt pour cent.', 'ventes'], ['Nous devons ___ un nouveau fournisseur.', 'trouver']], alt: ['température', 'juge'] },
    hot: { s: [['Votre chambre est au ___ étage, monsieur.', 'troisième'], ['Le petit-déjeuner est ___ de six à dix heures.', 'servi']], alt: ['contrat', 'juge'] },
  },
  de: {
    med: { s: [['Herr Doktor, der Patient in Zimmer vier ___ Brustschmerzen.', 'hat'], ['Bitte ___ Sie seine Temperatur jede Stunde.', 'messen']], alt: ['isst', 'bringt'] },
    tec: { s: [['Der ___ ist letzte Nacht wieder abgestürzt.', 'Server'], ['Versuch, den Fehler bis Freitag zu ___ .', 'beheben']], alt: ['Küche', 'essen'] },
    eng: { s: [['Der ___ der Brücke dauerte drei Jahre.', 'Bau'], ['Prüfe die ___ vor dem Sturm.', 'Kabel']], alt: ['Vertrag', 'Richter'] },
    dir: { s: [['Der Kunde hat den ___ gestern unterschrieben.', 'Vertrag'], ['Der Richter wird den Fall nächste Woche ___ .', 'prüfen']], alt: ['Server', 'Kabel'] },
    neg: { s: [['Unser ___ ist dieses Jahr um zwanzig Prozent gestiegen.', 'Umsatz'], ['Wir müssen einen neuen Lieferanten ___ .', 'finden']], alt: ['Temperatur', 'Fieber'] },
    hot: { s: [['Ihr Zimmer ist im dritten ___ , mein Herr.', 'Stock'], ['Das Frühstück wird von sechs bis zehn Uhr ___ .', 'serviert']], alt: ['Vertrag', 'Richter'] },
  },
  it: {
    med: { s: [['Dottore, il paziente della camera quattro ___ dolori al petto.', 'ha'], ['Per favore, ___ la temperatura ogni ora.', 'misuri']], alt: ['mangia', 'porta'] },
    tec: { s: [['Il ___ è andato in crash stanotte.', 'server'], ['Prova a ___ il bug entro venerdì.', 'correggere']], alt: ['cucina', 'mangiare'] },
    eng: { s: [['La ___ del ponte è durata tre anni.', 'costruzione'], ['Controlla i ___ prima della tempesta.', 'cavi']], alt: ['contratto', 'giudice'] },
    dir: { s: [['Il cliente ha firmato il ___ ieri.', 'contratto'], ['Il giudice ___ il caso la prossima settimana.', 'esaminerà']], alt: ['server', 'cavi'] },
    neg: { s: [['Le nostre ___ sono cresciute del venti per cento.', 'vendite'], ['Dobbiamo ___ un nuovo fornitore.', 'trovare']], alt: ['temperatura', 'febbre'] },
    hot: { s: [['La sua camera è al ___ piano, signore.', 'terzo'], ['La colazione è ___ dalle sei alle dieci.', 'servita']], alt: ['contratto', 'giudice'] },
  },
  ru: {
    med: { s: [['Доктор, у пациента в четвёртой палате ___ боль в груди.', 'есть'], ['Пожалуйста, ___ его температуру каждый час.', 'измеряйте']], alt: ['ест', 'приносите'] },
    tec: { s: [['___ снова упал этой ночью.', 'Сервер'], ['Попробуй ___ ошибку до пятницы.', 'исправить']], alt: ['кухня', 'есть'] },
    eng: { s: [['___ моста длилась три года.', 'Строительство'], ['Проверь ___ перед бурей.', 'тросы']], alt: ['договор', 'судья'] },
    dir: { s: [['Клиент подписал ___ вчера.', 'договор'], ['Судья ___ дело на следующей неделе.', 'рассмотрит']], alt: ['сервер', 'тросы'] },
    neg: { s: [['Наши ___ выросли на двадцать процентов в этом году.', 'продажи'], ['Нам нужно ___ нового поставщика.', 'найти']], alt: ['температура', 'жар'] },
    hot: { s: [['Ваш номер на ___ этаже.', 'третьем'], ['Завтрак ___ с шести до десяти.', 'подают']], alt: ['договор', 'судья'] },
  },
};

export const ExerciseLab: React.FC<ExerciseLabProps> = ({ lang, prof }) => {
  const lesson = LESSONS_DATA[lang]?.[prof] || LESSONS_DATA.en.tec;

  const [placed, setPlaced] = useState<(string | null)[]>([null, null]);
  const [bank, setBank] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('Complete as lacunas com as palavras do banco.');
  const [mascotType, setMascotType] = useState<'tomate' | 'coracao' | 'fantasma'>('tomate');

  useEffect(() => {
    setPlaced([null, null]);
    setStatus('idle');
    setMsg('Complete as lacunas com as palavras do banco.');
    setMascotType('tomate');

    const words = [lesson.s[0][1], lesson.s[1][1], lesson.alt[0], lesson.alt[1]];
    // shuffle
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    setBank(words);
  }, [lang, prof, lesson]);

  const handleChipClick = (word: string) => {
    if (status === 'ok') return;
    const emptyIndex = placed.findIndex((p) => !p);
    if (emptyIndex === -1) return;

    const next = [...placed];
    next[emptyIndex] = word;
    setPlaced(next);
  };

  const handleGapClick = (index: number) => {
    if (status === 'ok') return;
    if (!placed[index]) return;

    const next = [...placed];
    next[index] = null;
    setPlaced(next);
    setStatus('idle');
  };

  const handleVerify = () => {
    if (placed.some((p) => !p)) {
      setMsg('Preencha as duas lacunas antes de verificar.');
      setMascotType('tomate');
      return;
    }

    const isFirstOk = placed[0] === lesson.s[0][1];
    const isSecondOk = placed[1] === lesson.s[1][1];

    if (isFirstOk && isSecondOk) {
      setStatus('ok');
      setMascotType('coracao');
      setMsg('Muito bem! Lição concluída sem esforço.');
    } else {
      setStatus('err');
      setMascotType('fantasma');
      setMsg('Quase! Toque nas lacunas vermelhas para trocar a palavra.');
    }
  };

  const handleReset = () => {
    setPlaced([null, null]);
    setStatus('idle');
    setMsg('Complete as lacunas com as palavras do banco.');
    setMascotType('tomate');
  };

  const renderFlag = FLAGS[LANGS[lang]?.flag || 'gb'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] bg-white border border-[#e1ddd1] rounded-md shadow-[0_1px_3px_rgba(0,0,0,.08),0_1px_2px_rgba(0,0,0,.06)] overflow-hidden">
      <aside className="bg-[#edebe3] md:border-r border-b md:border-b-0 border-[#e1ddd1] p-6 md:p-7 flex flex-row md:flex-col items-center gap-3.5 text-left md:text-center">
        <div className="shrink-0 transition-transform">
          <Mascot type={mascotType} size={110} />
        </div>
        <p className="font-serif italic text-sm text-[#6b7280] leading-relaxed">{msg}</p>
      </aside>

      <div className="p-7 md:p-8">
        <div className="flex items-center gap-3 flex-wrap pb-4 mb-4.5 border-b border-[#e1ddd1]">
          {renderFlag(30)}
          <b className="text-[15px] text-[#00262b]">
            {LANGS[lang]?.label || 'Inglês'} · {PROF_LABELS[prof] || 'Tecnologia'}
          </b>
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#d64000] border border-[#e1ddd1] rounded-[94px] px-3 py-1 ml-auto">
            Lição 01
          </span>
        </div>

        <div className="space-y-4">
          {lesson.s.map((pair, i) => {
            const parts = pair[0].split('___');
            const currentWord = placed[i];
            const isCorrect = currentWord === pair[1];

            return (
              <p key={i} className="text-lg leading-[2.1] text-[#00262b] font-normal">
                <span className="text-xs text-[#8f9d9a] mr-2.5 font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {parts[0]}
                <button
                  onClick={() => handleGapClick(i)}
                  className={`inline-block min-w-[110px] mx-1 px-3 py-0.5 rounded-md text-[17px] align-middle transition-colors cursor-pointer ${
                    currentWord
                      ? status === 'ok' || isCorrect
                        ? 'border-[1.5px] border-[#1a7f4e] bg-[#1a7f4e]/10 text-[#00262b]'
                        : status === 'err'
                        ? 'border-[1.5px] border-[#d64000] bg-[#d64000]/10 text-[#00262b]'
                        : 'border-[1.5px] border-[#374151] bg-[#edebe3] text-[#00262b]'
                      : 'border-[1.5px] border-dashed border-[#cccccc] bg-[#edebe3] text-transparent hover:border-[#8f9d9a]'
                  }`}
                  aria-label={`Lacuna ${i + 1}`}
                >
                  <span className="font-medium text-[#00262b]">
                    {currentWord || '____'}
                  </span>
                </button>
                {parts[1]}
              </p>
            );
          })}
        </div>

        {/* Banco de palavras */}
        <div className="flex gap-2.5 flex-wrap my-5.5 p-4 border border-[#e1ddd1] rounded-md bg-[#f9f8f6]">
          {bank.map((w, idx) => {
            const isUsed = placed.includes(w);
            return (
              <button
                key={idx}
                disabled={isUsed || status === 'ok'}
                onClick={() => handleChipClick(w)}
                className={`bg-white border border-[#cccccc] text-[#374151] text-[15px] font-medium px-4.5 py-2 rounded-[94px] transition-colors ${
                  isUsed || status === 'ok'
                    ? 'opacity-35 cursor-default'
                    : 'hover:border-[#d64000] hover:text-[#d64000] cursor-pointer'
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>

        {/* Ações */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleVerify}
            disabled={status === 'ok'}
            className="inline-flex items-center gap-2 font-medium text-sm tracking-[0.06em] uppercase px-6 h-[46px] rounded-[94px] bg-[#d64000] text-white border border-[#d64000] shadow-[0_1px_3px_rgba(0,0,0,.08),0_1px_2px_rgba(0,0,0,.06)] hover:bg-[#b33600] disabled:opacity-50 disabled:cursor-default transition-colors cursor-pointer"
          >
            {status === 'ok' ? 'Concluído ✓' : 'Verificar'}
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 font-medium text-sm tracking-[0.06em] uppercase px-6 h-[46px] rounded-[94px] text-[#6b7280] border border-[#cccccc] bg-transparent hover:text-[#374151] hover:border-[#8f9d9a] transition-colors cursor-pointer"
          >
            Recomeçar
          </button>
          {status === 'ok' && (
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-[#1a7f4e] bg-[#1a7f4e]/10 rounded-[94px] px-3.5 py-1.5 animate-bounce">
              +10 XP · sequência +1
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
