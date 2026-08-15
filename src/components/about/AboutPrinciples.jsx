import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

const principles = [
  {
    title: "Solve the business problem first.",
    description:
      "We do not begin with a deliverable. We begin with what needs to improve inside the business, then decide what should actually be built.",
    accent: "var(--color-accent)",
  },
  {
    title: "Keep the whole system connected.",
    description:
      "Brand, website, marketing, software and automation should support the same direction instead of creating more things to coordinate.",
    accent: "var(--color-purple)",
  },
  {
    title: "Make complexity feel simple.",
    description:
      "Good digital work should reduce friction for customers and teams. The technology can be sophisticated without the experience feeling complicated.",
    accent: "var(--color-green)",
  },
];

const AboutPrinciples = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-dark text-text-inverse">
      {/* GRID */}
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-75" />

      {/* SOFT DEPTH */}
      <div className="pointer-events-none absolute -left-40 top-[10%] h-[360px] w-[360px] bg-accent/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[5%] h-[380px] w-[380px] bg-purple/10 blur-[150px]" />

      {/* BACKGROUND WORD */}
      <div className="pointer-events-none absolute -right-[2vw] top-[8%] hidden select-none text-[12vw] font-bold leading-none tracking-[-0.08em] text-text-inverse/[0.018] xl:block">
        PRINCIPLES
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-inverse/55">
                What We Believe
              </span>
            </div>
          </div>

          <motion.div
            initial={{
              y: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-inverse sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Good work starts
              <br />

              <span className="text-text-inverse/35">
                with better thinking.
              </span>
            </h2>

            <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-text-inverse/55 md:text-[16px]">
              The tools change. The channels change. The principle stays the
              same: understand what matters, connect the right pieces, and
              make the result useful.
            </p>
          </motion.div>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-14 border-y border-text-inverse/10">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
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
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group grid gap-6 py-9 md:py-11 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 ${
                index !== principles.length - 1
                  ? "border-b border-text-inverse/10"
                  : ""
              }`}
            >
              {/* LEFT */}
              <div className="flex items-start gap-4">
                <span
                  className="mt-[8px] h-[8px] w-[8px] shrink-0"
                  style={{
                    backgroundColor: principle.accent,
                  }}
                />

                <span
                  className="text-[13px] font-semibold uppercase tracking-[0.12em]"
                  style={{
                    color: principle.accent,
                  }}
                >
                  Principle
                </span>
              </div>

              {/* RIGHT */}
              <div>
                <motion.h3
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 6,
                        }
                  }
                  transition={{
                    duration: 0.15,
                  }}
                  className="max-w-[760px] text-[31px] font-semibold leading-[1.03] tracking-[-0.045em] text-text-inverse sm:text-[36px] md:text-[40px] xl:text-[44px]"
                >
                  {principle.title}
                </motion.h3>

                <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-text-inverse/50">
                  {principle.description}
                </p>

                <motion.span
                  initial={{
                    scaleX: 0.25,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="mt-7 block h-px w-16 origin-left"
                  style={{
                    backgroundColor: principle.accent,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CLOSING */}
        <div className="mt-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-inverse/40">
              The result
            </span>

            <p className="mt-4 max-w-[760px] text-[27px] font-semibold leading-[1.16] tracking-[-0.04em] text-text-inverse sm:text-[32px] md:text-[36px]">
              Fewer disconnected decisions.
              <span className="text-text-inverse/35">
                {" "}
                More momentum in one direction.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-inverse"
            >
              See what we build

              <FiArrowUpRight className="text-[16px] text-purple transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-inverse/65 transition-colors duration-150 hover:text-text-inverse"
            >
              Start a conversation

              <FiArrowRight className="text-[15px] transition-transform duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENTS */}
      <div className="absolute bottom-0 left-0 flex h-[2px] w-full">
        <span className="flex-1 bg-accent" />
        <span className="flex-1 bg-purple" />
        <span className="flex-1 bg-green" />
      </div>
    </section>
  );
};

export { AboutPrinciples };