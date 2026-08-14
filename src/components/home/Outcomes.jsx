import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

const outcomes = [
  {
    id: "leads",
    title: "Generate more leads",
    description:
      "Turn attention into a clearer path toward enquiries and conversations.",
    accent: "var(--color-accent)",
  },
  {
    id: "sales",
    title: "Increase online sales",
    description:
      "Make the digital buying experience easier, faster and more convincing.",
    accent: "var(--color-orange)",
  },
  {
    id: "brand",
    title: "Strengthen your brand",
    description:
      "Build a presence people can recognize, trust and remember.",
    accent: "var(--color-purple)",
  },
  {
    id: "operations",
    title: "Run operations better",
    description:
      "Replace scattered processes with software shaped around how your team works.",
    accent: "var(--color-cyan)",
  },
  {
    id: "automation",
    title: "Automate repetitive work",
    description:
      "Let AI and automation handle repetitive workflows that slow people down.",
    accent: "var(--color-green)",
  },
];

const Outcomes = () => {
  const [activeOutcomeId, setActiveOutcomeId] = useState(
    outcomes[0].id,
  );

  const activeOutcome =
    outcomes.find(
      (outcome) => outcome.id === activeOutcomeId,
    ) || outcomes[0];

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="pointer-events-none absolute -right-40 top-[10%] h-[360px] w-[360px] bg-green-soft/40 blur-[130px]" />

      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-green" />
                <span className="h-[7px] w-[7px] bg-purple" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                Start With The Outcome
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[60px] xl:text-[68px]">
              What do you want
              <br />

              <span className="text-text-muted">
                to change?
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
              You do not need to arrive with the right service name. Start
              with what needs to improve in the business.
            </p>
          </div>
        </div>

        {/* TYPOGRAPHIC OUTCOMES */}
        <div className="mt-14 border-y border-border-strong py-9 md:py-12">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-4">
            {outcomes.map((outcome, index) => {
              const active =
                activeOutcomeId === outcome.id;

              return (
                <div
                  key={outcome.id}
                  className="flex items-baseline gap-4 md:gap-6"
                >
                  <button
                    type="button"
                    onMouseEnter={() =>
                      setActiveOutcomeId(outcome.id)
                    }
                    onFocus={() =>
                      setActiveOutcomeId(outcome.id)
                    }
                    onClick={() =>
                      setActiveOutcomeId(outcome.id)
                    }
                    className="text-left"
                  >
                    <motion.span
                      animate={{
                        color: active
                          ? outcome.accent
                          : "var(--color-text-primary)",
                      }}
                      className="text-[31px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[38px] md:text-[46px] xl:text-[54px]"
                    >
                      {outcome.title}
                    </motion.span>
                  </button>

                  {index !== outcomes.length - 1 && (
                    <span className="text-[26px] font-light text-border-strong md:text-[36px]">
                      /
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* ACTIVE EXPLANATION */}
          <div className="mt-9 flex flex-col gap-6 border-t border-border-light pt-6 sm:flex-row sm:items-center sm:justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOutcome.id}
                initial={{
                  x: 8,
                }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: -5,
                }}
                transition={{
                  duration: 0.18,
                }}
                className="flex max-w-[720px] items-start gap-4"
              >
                <span
                  className="mt-[8px] h-[7px] w-[7px] shrink-0"
                  style={{
                    backgroundColor: activeOutcome.accent,
                  }}
                />

                <p className="text-[14px] leading-6 text-text-subtle md:text-[15px]">
                  {activeOutcome.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 text-[13px] font-semibold text-text-primary"
            >
              Tell us your goal

              <FiArrowUpRight
                className="text-[16px]"
                style={{
                  color: activeOutcome.accent,
                }}
              />
            </Link>
          </div>
        </div>

        {/* MAGIC MOMENT */}
        <div className="relative py-12 md:py-14">
          <motion.span
            animate={{
              x: [0, 12, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[20%] h-[7px] w-[7px] bg-purple"
          />

          <motion.span
            animate={{
              x: [0, -9, 0],
              y: [0, 7, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[18%] left-[20%] h-[7px] w-[7px] bg-green"
          />

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                From here
              </span>

              <h3 className="mt-4 text-[38px] font-semibold leading-[0.98] tracking-[-0.05em] text-text-primary sm:text-[48px] md:text-[58px]">
                You handle the business.
                <br />

                <span className="text-text-muted">
                  We&apos;ll handle the magic.
                </span>
              </h3>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[14px] font-semibold text-text-primary hover:text-accent"
            >
              Make it happen

              <FiArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Outcomes };