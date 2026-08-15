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

const AboutCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-border-light bg-bg-1">
      {/* COLOR DEPTH */}
      <div className="pointer-events-none absolute -left-40 top-[-100px] h-[360px] w-[360px] bg-accent-soft/65 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-[5%] h-[380px] w-[380px] bg-purple-soft/55 blur-[145px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-[42%] h-[380px] w-[380px] bg-green-soft/45 blur-[150px]" />

      {/* BACKGROUND TYPE */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -16, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[3vw] top-[4%] hidden select-none whitespace-nowrap text-[12vw] font-bold leading-none tracking-[-0.09em] text-text-primary/[0.022] xl:block"
      >
        TOGETHER
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
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
              Work With Zapmind
            </span>
          </div>

          <span className="hidden text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted sm:block">
            Start with the problem
          </span>
        </div>

        {/* MAIN */}
        <div className="grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16 md:py-14">
          {/* LEFT */}
          <motion.div
            initial={{
              y: reduceMotion ? 0 : 20,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">
              Have something that needs fixing?
            </span>

            <h2 className="mt-5 max-w-[940px] text-[45px] font-semibold leading-[0.94] tracking-[-0.06em] text-text-primary sm:text-[56px] md:text-[66px] xl:text-[76px]">
              You don&apos;t need
              <br />

              <span className="text-text-muted">
                the solution yet.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              y: reduceMotion ? 0 : 16,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
          >
            <p className="max-w-[470px] text-[15px] leading-7 text-text-subtle">
              Bring us the challenge, the messy process, the growth problem or
              the idea you have not completely figured out yet.
            </p>

            <p className="mt-4 max-w-[470px] text-[15px] leading-7 text-text-subtle">
              We can work out what should happen next together.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button to="/contact">
                Start a Project
              </Button>

              <Link
                to="/work"
                className="group inline-flex h-[46px] items-center gap-3 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:text-accent"
              >
                Explore our work

                <FiArrowUpRight className="text-[16px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* MOVING LINE */}
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

        {/* FOOT */}
        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.6, 1],
                    }
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-[7px] w-[7px] bg-green"
            />

            <span className="text-[13px] leading-6 text-text-subtle">
              A clear conversation can be the first deliverable.
            </span>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:text-accent"
          >
            Tell us what&apos;s going on

            <FiArrowRight className="text-[15px] transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* FOOTER TRANSITION */}
      <div className="absolute bottom-0 left-0 flex h-[3px] w-full">
        <span className="flex-1 bg-accent" />
        <span className="flex-1 bg-purple" />
        <span className="flex-1 bg-green" />
        <span className="flex-1 bg-yellow" />
      </div>
    </section>
  );
};

export { AboutCTA };