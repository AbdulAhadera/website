import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    title: "Understand",
    text: "What needs to change?",
    accent: "var(--color-accent)",
  },
  {
    title: "Shape",
    text: "What should we make?",
    accent: "var(--color-purple)",
  },
  {
    title: "Build",
    text: "Turn it into reality.",
    accent: "var(--color-cyan)",
  },
  {
    title: "Improve",
    text: "Keep making it better.",
    accent: "var(--color-green)",
  },
];

const ServiceProcess = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-dark text-text-inverse">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-70" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-purple/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div className="flex items-start gap-3">
            <div className="flex gap-1">
              <span className="h-[7px] w-[7px] bg-accent" />
              <span className="h-[7px] w-[7px] bg-purple" />
              <span className="h-[7px] w-[7px] bg-green" />
            </div>

            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-inverse/55">
              How It Moves
            </span>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-[52px] md:text-[60px] xl:text-[68px]">
              You bring the problem.
              <br />

              <span className="text-text-inverse/35">
                We take it from there.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* DESKTOP ROUTE */}
        <div className="relative mt-16 hidden lg:block">
          {/* base line */}
          <div className="absolute left-0 right-0 top-[11px] h-px bg-text-inverse/15" />

          {/* animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-[11px] h-px origin-left"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--color-accent), var(--color-purple), var(--color-cyan), var(--color-green))",
            }}
          />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <span
                  className="relative z-10 block h-[22px] w-[22px] rounded-full border-[6px] border-bg-dark"
                  style={{
                    backgroundColor: step.accent,
                  }}
                />

                <h3 className="mt-7 text-[30px] font-semibold tracking-[-0.045em] text-text-inverse xl:text-[34px]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[14px] text-text-inverse/50">
                  {step.text}
                </p>

                {index !== steps.length - 1 && (
                  <FiArrowRight className="mt-6 text-[17px] text-text-inverse/25" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE ROUTE */}
        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-2 left-[10px] top-2 w-px bg-text-inverse/15" />

          <div className="space-y-9">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="relative flex gap-6"
              >
                <span
                  className="relative z-10 mt-1 h-[21px] w-[21px] shrink-0 rounded-full border-[6px] border-bg-dark"
                  style={{
                    backgroundColor: step.accent,
                  }}
                />

                <div>
                  <h3 className="text-[27px] font-semibold tracking-[-0.04em] text-text-inverse">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[14px] text-text-inverse/50">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* END */}
        <div className="mt-14 border-t border-text-inverse/10 pt-7">
          <p className="max-w-[760px] text-[25px] font-semibold leading-[1.16] tracking-[-0.035em] text-text-inverse sm:text-[30px] md:text-[34px]">
            Clear enough to move.
            <span className="text-text-inverse/35">
              {" "}
              Flexible enough to change.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export { ServiceProcess };