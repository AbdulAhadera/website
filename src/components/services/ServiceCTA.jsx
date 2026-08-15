import {Button }from "../../components/common/Button.jsx"
import { motion, useReducedMotion } from "framer-motion";

const ServiceCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="pointer-events-none absolute -left-40 top-[-120px] h-[360px] w-[360px] rounded-full bg-accent-soft/60 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[380px] w-[380px] rounded-full bg-purple-soft/50 blur-[150px]" />

      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        <div className="border-t border-border-strong pt-10 md:pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr] lg:gap-16">
            {/* LABEL */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="h-[7px] w-[7px] bg-accent" />
                  <span className="h-[7px] w-[7px] bg-purple" />
                  <span className="h-[7px] w-[7px] bg-green" />
                </div>

                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Your Move
                </span>
              </div>
            </div>

            {/* MAIN */}
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[980px] text-[43px] font-semibold leading-[0.95] tracking-[-0.055em] text-text-primary sm:text-[54px] md:text-[64px] xl:text-[74px]"
              >
                Bring us the problem.
                <br />

                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--color-accent), var(--color-purple), var(--color-pink))",
                  }}
                >
                  We&apos;ll find the way forward.
                </span>
              </motion.h2>

              <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <p className="max-w-[560px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
                  You don&apos;t need a brief, a roadmap, or the perfect answer.
                  Start with what&apos;s not working.
                </p>

                {/* VISIBLE CTA */}
               <Button />
              </div>
            </div>
          </div>
        </div>

        {/* COLOR LINE */}
        <div className="mt-12 overflow-hidden md:mt-14">
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[3px] origin-left"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--color-accent), var(--color-purple), var(--color-pink), var(--color-orange), var(--color-green))",
            }}
          />
        </div>

        {/* BOTTOM */}
        <div className="mt-5 flex flex-col gap-2 text-[12px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Web · Brand · Growth · Software · AI</span>

          <span>Start wherever makes sense.</span>
        </div>
      </div>
    </section>
  );
};

export { ServiceCTA };