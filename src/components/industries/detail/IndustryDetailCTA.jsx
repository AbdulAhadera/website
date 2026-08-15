import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { Button } from "../../common/Button.jsx";
import { industryAccent, industryVisuals } from "../../../data/industryVisuals.js";

const IndustryDetailCTA = ({ industry }) => {
  const reduceMotion = useReducedMotion();

  const accent = industryAccent[industry.accent] || "var(--color-accent)";
  const image = industryVisuals[industry.slug];
  const outcome = industry.outcomes?.[0] || "Move the business forward.";

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="pointer-events-none absolute inset-0 grid-light opacity-20" />

      <div className="pointer-events-none absolute -left-[3vw] bottom-[-3vw] hidden select-none text-[13vw] font-extrabold leading-none tracking-[-0.08em] text-text-primary/[0.025] lg:block">
        NEXT
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 lg:py-24">
        <div className="flex items-center justify-between border-b border-border-strong pb-5">
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px]" style={{ backgroundColor: accent }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
              Next move
            </span>
          </div>

          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted md:block">
            {industry.navTitle}
          </span>
        </div>

        <div className="relative mt-12">
          {image && (
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto h-[320px] w-full overflow-hidden sm:h-[390px] lg:h-[520px] lg:w-[52%]"
            >
              <img src={image} alt="" className="h-full w-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/75 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 md:bottom-8 md:left-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">
                  Built around
                </span>

                <p className="mt-2 max-w-[360px] text-[25px] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[30px]">
                  {industry.navTitle}
                </p>
              </div>

              <span className="absolute left-0 top-0 h-[4px] w-[38%]" style={{ backgroundColor: accent }} />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 -mt-10 bg-bg-1 pb-2 pt-8 sm:-mt-16 lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:w-[62%] lg:-translate-y-1/2 lg:py-10 lg:pr-12"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
              Where it goes next
            </span>

            <h2 className="mt-5 max-w-[850px] text-[46px] font-semibold leading-[0.92] tracking-[-0.06em] text-text-primary sm:text-[58px] md:text-[68px] xl:text-[76px]">
              Turn friction into
              <br />
              <span className="text-text-muted">forward motion.</span>
            </h2>

            <div className="mt-7 h-[4px] w-24" style={{ backgroundColor: accent }} />

            <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-text-secondary md:text-[16px]">
              Tell us what is slowing the business down. We&apos;ll shape the right digital response around the operation, not around a fixed package.
            </p>

            <div className="mt-8 flex flex-col gap-6 border-t border-border-strong pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex max-w-[370px] items-start gap-3">
                <FiArrowUpRight className="mt-[4px] shrink-0 text-[17px]" style={{ color: accent }} />

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                    Direction
                  </span>

                  <p className="mt-1 text-[14px] font-semibold leading-6 text-text-primary">
                    {outcome}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <Button to="/contact">Start a Conversation</Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center gap-4 lg:mt-14">
          <span className="h-px flex-1 bg-border-strong" />
          <span className="h-[6px] w-[6px]" style={{ backgroundColor: accent }} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
            Zapmind
          </span>
        </div>
      </div>
    </section>
  );
};

export { IndustryDetailCTA };