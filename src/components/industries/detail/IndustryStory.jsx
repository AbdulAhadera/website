import { motion } from "framer-motion";

import { industryAccent } from "../../../data/industryVisuals.js";

const IndustryStory = ({ industry }) => {
  const accent =
    industryAccent[industry.accent] ||
    "var(--color-accent)";

  return (
    <section className="relative overflow-hidden bg-bg-2">
      {/* BACKGROUND */}
      <div className="grid-light pointer-events-none absolute inset-0 opacity-30" />

      <div
        className="pointer-events-none absolute -left-24 top-20 h-[360px] w-[360px] rounded-full blur-[140px]"
        style={{
          backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
        }}
      />

      <div className="pointer-events-none absolute -right-32 bottom-[-120px] h-[420px] w-[420px] rounded-full bg-purple/5 blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
          <div className="flex items-start gap-3">
            <span
              className="mt-[4px] h-[7px] w-[7px]"
              style={{
                backgroundColor: accent,
              }}
            />

            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-muted">
              The opportunity
            </span>
          </div>

          <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.97] tracking-[-0.052em] text-text-primary sm:text-[52px] md:text-[60px]">
            Less friction.
            <br />

            <span className="text-text-muted">
              Better operations.
            </span>
          </h2>
        </div>

        {/* STORY */}
        <div className="mt-14 grid border-y border-border-strong lg:grid-cols-2">
          {/* PROBLEMS */}
          <div className="py-8 lg:border-r lg:border-border-strong lg:pr-12">
            <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
              What gets in the way
            </span>

            <div className="mt-7 space-y-6">
              {industry.problems
                ?.slice(0, 4)
                .map((problem, index) => (
                  <motion.div
                    key={problem}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.035,
                    }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-[10px] h-[7px] w-[7px] shrink-0 bg-red" />

                    <span className="text-[21px] font-semibold leading-[1.3] tracking-[-0.03em] text-text-secondary md:text-[25px]">
                      {problem}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* OUTCOMES */}
          <div className="border-t border-border-strong py-8 lg:border-t-0 lg:pl-12">
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.13em]"
              style={{
                color: accent,
              }}
            >
              What should improve
            </span>

            <div className="mt-7 space-y-6">
              {industry.outcomes
                ?.slice(0, 4)
                .map((outcome, index) => (
                  <motion.div
                    key={outcome}
                    initial={{
                      opacity: 0,
                      x: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.035,
                    }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="mt-[10px] h-[7px] w-[7px] shrink-0"
                      style={{
                        backgroundColor: accent,
                      }}
                    />

                    <span className="text-[21px] font-semibold leading-[1.3] tracking-[-0.03em] text-text-primary md:text-[25px]">
                      {outcome}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IndustryStory };