import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { LanguagePicker } from './LanguagePicker';
import { ProfessionPicker } from './ProfessionPicker';
import { ExerciseLab } from './ExerciseLab';
import { Family } from './Family';
import { Footer } from './Footer';

export default function Landing() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [selectedProf, setSelectedProf] = useState('tec');
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => new Set([...prev, entry.target.id]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f9f8f6] text-[#374151]">
      <Navigation />
      <Hero />

      {/* PASSO 01 */}
      <motion.section
        id="idiomas"
        data-reveal
        className="max-w-[1080px] mx-auto px-7 py-[72px]"
        initial={{ opacity: 0, y: 14 }}
        animate={revealed.has('idiomas') ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-[30px]">
          <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#d64000] block mb-2.5">
            Passo 01
          </span>
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em] text-[#00262b] mb-2">
            Escolha um <em className="font-normal italic text-[#d64000]">idioma</em>
          </h2>
          <p className="text-base text-[#6b7280] max-w-[560px]">
            Seis trilhas. Áudio nativo desde o primeiro dia.
          </p>
        </div>
        <LanguagePicker selected={selectedLang} onSelect={setSelectedLang} />
      </motion.section>

      {/* PASSO 02 */}
      <motion.section
        id="profissoes"
        data-reveal
        className="max-w-[1080px] mx-auto px-7 py-[72px]"
        initial={{ opacity: 0, y: 14 }}
        animate={revealed.has('profissoes') ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-[30px]">
          <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#d64000] block mb-2.5">
            Passo 02
          </span>
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em] text-[#00262b] mb-2">
            Escolha uma <em className="font-normal italic text-[#d64000]">profissão</em>
          </h2>
          <p className="text-base text-[#6b7280] max-w-[560px]">
            O vocabulário que você realmente usa no trabalho.
          </p>
        </div>
        <ProfessionPicker selected={selectedProf} onSelect={setSelectedProf} />
      </motion.section>

      {/* PASSO 03 */}
      <motion.section
        id="praticar"
        data-reveal
        className="max-w-[1080px] mx-auto px-7 py-[72px]"
        initial={{ opacity: 0, y: 14 }}
        animate={revealed.has('praticar') ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-[30px]">
          <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#d64000] block mb-2.5">
            Passo 03
          </span>
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em] text-[#00262b] mb-2">
            Complete as <em className="font-normal italic text-[#d64000]">lacunas</em>
          </h2>
          <p className="text-base text-[#6b7280] max-w-[560px]">
            Toque nas palavras do banco para preencher. A família Lin confere por você.
          </p>
        </div>
        <ExerciseLab lang={selectedLang} prof={selectedProf} />
      </motion.section>

      {/* FAMÍLIA */}
      <motion.section
        id="familia"
        data-reveal
        className="max-w-[1080px] mx-auto px-7 py-[72px]"
        initial={{ opacity: 0, y: 14 }}
        animate={revealed.has('familia') ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-[30px]">
          <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#d64000] block mb-2.5">
            Companhia
          </span>
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em] text-[#00262b] mb-2">
            A família <em className="font-normal italic text-[#d64000]">Lin</em>
          </h2>
          <p className="text-base text-[#6b7280] max-w-[560px]">
            Sete companheiros — um para cada etapa da trilha.
          </p>
        </div>
        <Family />
      </motion.section>

      <Footer />
    </div>
  );
}
