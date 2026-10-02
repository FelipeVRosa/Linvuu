import React from 'react';
import { motion } from 'motion/react';
import { Mascot } from './Mascot';

export const Hero = () => {
  return (
    <section className="max-w-[1080px] mx-auto px-7 py-[76px] pb-[30px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-10 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.12em] uppercase text-[#d64000] mb-5.5">
            <span className="w-6.5 h-px bg-[#d64000]"></span>
            Método Linvuu · sem esforço
          </div>

          <h1 className="font-black text-[clamp(34px,5.4vw,58px)] tracking-[-0.03em] leading-[1.07] text-[#00262b] mb-4.5">
            O idioma da sua<br />profissão, <em className="font-normal italic text-[#d64000]">em 30 dias.</em>
          </h1>

          <p className="font-serif italic text-lg text-[#6b7280] max-w-[480px] mb-7">
            Diálogos reais do seu trabalho. Complete as lacunas e avance um passo por dia.
          </p>

          <div className="flex gap-3 flex-wrap mb-8.5">
            <a
              href="#idiomas"
              className="inline-flex items-center gap-2 font-medium text-sm tracking-[0.06em] uppercase px-6 h-[46px] rounded-[94px] bg-[#d64000] text-white border border-[#d64000] shadow-[0_1px_3px_rgba(0,0,0,.08),0_1px_2px_rgba(0,0,0,.06)] hover:bg-[#b33600] transition-colors"
            >
              Escolher idioma
            </a>
            <a
              href="#praticar"
              className="inline-flex items-center gap-2 font-medium text-sm tracking-[0.06em] uppercase px-6 h-[46px] rounded-[94px] text-[#6b7280] border border-[#cccccc] bg-transparent hover:text-[#374151] hover:border-[#8f9d9a] transition-colors"
            >
              Experimentar
            </a>
          </div>

          <div className="flex gap-2 flex-wrap text-xs font-medium tracking-[0.1em] uppercase text-[#8f9d9a]">
            {['01 · Ouça e leia', '02 · Complete as lacunas', '03 · Revise sem esforço'].map((meta) => (
              <span
                key={meta}
                className="border border-[#e1ddd1] rounded-[94px] px-3.5 py-1.5 bg-white"
              >
                {meta}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative h-[230px] lg:h-[300px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="absolute left-[8%] top-[2%]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.4, repeat: Infinity }}
          >
            <Mascot type="nuvem" size={84} />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, delay: 0.9 }}
          >
            <Mascot type="tomate" size={160} />
          </motion.div>

          <motion.div
            className="absolute right-[6%] bottom-[8%]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, delay: 0.5 }}
          >
            <Mascot type="coracao" size={76} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
