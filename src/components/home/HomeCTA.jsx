import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Button } from "../common/Button.jsx";

const HomeCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-border-light bg-bg-1">
      <div className="pointer-events-none absolute -left-40 top-[-100px] h-[360px] w-[360px] bg-accent-soft/65 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[360px] w-[360px] bg-purple-soft/50 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-22">
        {/* META */}
        <div className="flex items-center justify-between border-b border-border-strong pb-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-[4px]">
              <span className="h-[7px] w-[7px] bg-accent" />
              <span className="h-[7px] w-[7px] bg-purple" />
              <span className="h-[7px] w-[7px] bg-green" />
              <span className="h-[7px] w-[7px] bg-yellow" />
            </div>

            <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
              Ready When You Are
            </span>
          </div>

          <span className="hidden text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted sm:block">
            Zapmind AI
          </span>
        </div>

        {/* MAIN */}
        <div className="grid gap-9 py-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16 md:py-12">
          <div>
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">
              Have a problem worth solving?
            </span>

            <h2 className="mt-5 max-w-[950px] text-[44px] font-semibold leading-[0.93] tracking-[-0.06em] text-text-primary sm:text-[56px] md:text-[66px] xl:text-[76px]">
              Bring the idea.
              <br />

              <span className="text-text-muted">
                We&apos;ll make it
              </span>

              <br />

              <span className="relative inline-block">
                happen.

                <motion.span
                  initial={{
                    scaleX: 0.2,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="absolute -bottom-2 left-1 right-0 h-[3px] origin-left bg-accent"
                />
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-[440px] text-[15px] leading-7 text-text-subtle">
              Website, growth, software, automation — or something that does
              not fit neatly into a category. Start with the problem.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button to="/contact">
                Start a Project
              </Button>

              <Link
                to="/work"
                className="group inline-flex h-[46px] items-center gap-3 text-[13px] font-semibold text-text-primary hover:text-accent"
              >
                Explore our work

                <FiArrowUpRight className="text-[16px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* MOVING RAIL */}
        <div className="relative h-[2px] overflow-hidden bg-border-light">
          {!reduceMotion && (
            <motion.div
              animate={{
                x: ["-100%", "500%"],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 left-0 flex w-[20%]"
            >
              <span className="h-full flex-1 bg-accent" />
              <span className="h-full flex-1 bg-purple" />
              <span className="h-full flex-1 bg-green" />
              <span className="h-full flex-1 bg-yellow" />
            </motion.div>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] bg-green" />

            <span className="text-[13px] leading-6 text-text-subtle">
              One conversation is enough to get things moving.
            </span>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary hover:text-accent"
          >
            Tell us what you&apos;re working on

            <FiArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex h-[3px] w-full">
        <span className="flex-1 bg-accent" />
        <span className="flex-1 bg-purple" />
        <span className="flex-1 bg-green" />
        <span className="flex-1 bg-yellow" />
      </div>
    </section>
  );
};

export { HomeCTA };