import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const processSteps = [
  {
    id: "understand",
    label: "Understand",
    title: "Find the real problem.",
    description:
      "We learn what the business is trying to improve, where the friction is and what a useful result should actually look like.",
    details: [
      "Business goals",
      "Audience",
      "Current friction",
      "Priorities",
    ],
    accent: "var(--color-accent)",
  },
  {
    id: "shape",
    label: "Shape",
    title: "Turn it into a clear direction.",
    description:
      "We decide how strategy, experience and technology should come together before adding unnecessary complexity.",
    details: [
      "Strategy",
      "User journey",
      "Creative direction",
      "System plan",
    ],
    accent: "var(--color-purple)",
  },
  {
    id: "build",
    label: "Build",
    title: "Make the idea real.",
    description:
      "Design, development and automation move together so the final experience feels connected from the beginning.",
    details: [
      "Design",
      "Development",
      "Integrations",
      "Automation",
    ],
    accent: "var(--color-cyan)",
  },
  {
    id: "launch",
    label: "Launch",
    title: "Put it into the real world.",
    description:
      "We test the experience, prepare the final details and make sure what goes live is ready to be used by real people.",
    details: [
      "Testing",
      "Deployment",
      "Handover",
      "Measurement",
    ],
    accent: "var(--color-orange)",
  },
  {
    id: "improve",
    label: "Improve",
    title: "Keep making it better.",
    description:
      "Launch creates new information. We use it to improve performance, automation and the next opportunity for growth.",
    details: [
      "Optimization",
      "Growth",
      "Automation",
      "Iteration",
    ],
    accent: "var(--color-green)",
  },
];

const Process = () => {
  const [activeStepId, setActiveStepId] = useState(
    processSteps[0].id,
  );

  const reduceMotion = useReducedMotion();

  const activeStep =
    processSteps.find(
      (step) => step.id === activeStepId,
    ) || processSteps[0];

  return (
    <section className="relative overflow-hidden bg-bg-dark text-text-inverse">
      {/* DARK GRID */}
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-80" />

      {/* BACKGROUND DEPTH */}
      <div className="pointer-events-none absolute -left-40 top-[10%] h-[360px] w-[360px] bg-accent/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[5%] h-[380px] w-[380px] bg-purple/10 blur-[150px]" />

      {/* LARGE BACKGROUND TEXT */}
      <div className="pointer-events-none absolute -right-[2vw] top-[8%] hidden select-none text-[12vw] font-bold leading-none tracking-[-0.08em] text-text-inverse/[0.018] xl:block">
        PROCESS
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* =========================
            HEADER
        ========================= */}
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          {/* LABEL */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-inverse/55">
                How We Work
              </span>
            </div>
          </div>

          {/* HEADING */}
          <motion.div
            initial={{
              y: reduceMotion ? 0 : 16,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-inverse sm:text-[52px] md:text-[60px] xl:text-[68px]">
              From messy idea
              <br />

              <span className="text-text-inverse/35">
                to something useful.
              </span>
            </h2>

            <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-text-inverse/55 md:text-[16px]">
              The process stays understandable. Every phase exists to move the
              idea closer to something the business can actually use.
            </p>
          </motion.div>
        </div>

        {/* =========================
            PHASE NAV
        ========================= */}
        <div className="mt-12 border-y border-text-inverse/10">
          <div
            className="
              overflow-x-auto
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div className="flex min-w-max">
              {processSteps.map((step) => {
                const active =
                  activeStepId === step.id;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onMouseEnter={() =>
                      setActiveStepId(step.id)
                    }
                    onFocus={() =>
                      setActiveStepId(step.id)
                    }
                    onClick={() =>
                      setActiveStepId(step.id)
                    }
                    className="relative px-5 py-5 text-left first:pl-0 md:px-8"
                  >
                    <motion.span
                      animate={{
                        color: active
                          ? step.accent
                          : "rgba(255,255,255,0.38)",
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="whitespace-nowrap text-[18px] font-semibold tracking-[-0.025em] md:text-[21px]"
                    >
                      {step.label}
                    </motion.span>

                    <motion.span
                      animate={{
                        scaleX: active ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.18,
                      }}
                      className="absolute bottom-[-1px] left-0 right-0 h-[2px] origin-left"
                      style={{
                        backgroundColor: step.accent,
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================
            ACTIVE PROCESS
        ========================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{
              x: reduceMotion ? 0 : 12,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: reduceMotion ? 0 : -8,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-9 py-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16"
          >
            {/* LEFT CONTENT */}
            <div>
              <span
                className="block h-[3px] w-12"
                style={{
                  backgroundColor: activeStep.accent,
                }}
              />

              <h3 className="mt-6 max-w-[700px] text-[35px] font-semibold leading-[1] tracking-[-0.045em] text-text-inverse sm:text-[42px] md:text-[48px]">
                {activeStep.title}
              </h3>

              <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-text-inverse/55">
                {activeStep.description}
              </p>
            </div>

            {/* RIGHT DETAILS */}
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-text-inverse/45">
                What we&apos;re thinking about
              </span>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
                {activeStep.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="h-[6px] w-[6px]"
                      style={{
                        backgroundColor: activeStep.accent,
                      }}
                    />

                    <span className="text-[14px] font-medium text-text-inverse/65">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-text-inverse"
              >
                Bring us your idea

                <FiArrowUpRight
                  className="text-[16px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  style={{
                    color: activeStep.accent,
                  }}
                />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* =========================
            BOTTOM MESSAGE
        ========================= */}
        <div className="flex flex-col gap-5 border-t border-text-inverse/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          {/* NOW CLEARLY VISIBLE */}
          <div className="flex items-start gap-3">
            <span className="mt-[8px] h-[6px] w-[6px] shrink-0 bg-green" />

            <p className="max-w-[700px] text-[14px] font-medium leading-6 text-text-inverse/70">
              You do not need everything figured out before the first
              conversation.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-3 text-[13px] font-semibold text-text-inverse transition-colors duration-150 hover:text-accent"
          >
            Start a project

            <FiArrowRight className="text-[15px] transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 flex h-[2px] w-full">
        <span className="flex-1 bg-accent" />
        <span className="flex-1 bg-purple" />
        <span className="flex-1 bg-cyan" />
        <span className="flex-1 bg-green" />
      </div>
    </section>
  );
};

export { Process };