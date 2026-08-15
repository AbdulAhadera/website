import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

const InsightsHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-12 md:px-7 md:pb-16 md:pt-16 lg:px-8 lg:pb-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] bg-accent" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-text-muted">Insights</span>
          </div>

          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted md:block">Zapmind thinking</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[1180px] text-[52px] font-semibold leading-[0.88] tracking-[-0.065em] text-text-primary sm:text-[66px] md:text-[82px] xl:text-[100px]"
        >
          Ideas for building
          <br />
          <span className="text-text-muted">better digital businesses.</span>
        </motion.h1>

        <div className="mt-9 flex flex-col gap-6 border-t border-border-strong pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[620px] text-[15px] leading-7 text-text-secondary md:text-[16px]">
            Practical thinking on websites, growth, software, AI and the systems behind modern businesses.
          </p>

          <a href="#latest-thinking" className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary">
            Explore latest thinking
            <FiArrowDownRight className="text-[17px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:translate-y-[2px]" />
          </a>
        </div>

        <div className="relative mt-10 h-[250px] overflow-hidden sm:h-[320px] md:h-[390px]">
          <motion.img
            initial={{ scale: reduceMotion ? 1 : 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/70 via-bg-dark/5 to-transparent" />

          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">No noise</span>
            <p className="mt-2 max-w-[500px] text-[23px] font-semibold leading-[1.1] tracking-[-0.035em] text-white md:text-[30px]">Useful ideas. Clearer decisions.</p>
          </div>

          <span className="absolute left-0 top-0 h-[5px] w-[28%] bg-accent" />
          <span className="absolute right-0 top-0 h-[5px] w-[12%] bg-purple" />
        </div>
      </div>
    </section>
  );
};

export { InsightsHero };