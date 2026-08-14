import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

const workflow = [
  {
    label: "Lead arrives",
    detail: "Form, inbox or campaign",
    accent: "var(--color-accent)",
  },
  {
    label: "AI understands",
    detail: "Intent and context",
    accent: "var(--color-purple)",
  },
  {
    label: "System acts",
    detail: "Route, respond or update",
    accent: "var(--color-cyan)",
  },
  {
    label: "Team moves",
    detail: "Human attention where needed",
    accent: "var(--color-green)",
  },
];

const capabilities = [
  "AI Assistants",
  "Lead Qualification",
  "Customer Support",
  "Appointments",
  "Workflow Automation",
  "Internal Operations",
];

const AIShowcase = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-dark text-text-inverse">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-70" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[340px] w-[340px] bg-purple/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[340px] w-[340px] bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-14 md:px-7 md:py-16 lg:px-8 xl:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
          {/* COPY */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-inverse/50">
                AI & Automation
              </span>
            </div>

            <h2 className="mt-6 text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[52px] xl:text-[60px]">
              AI that does
              <br />

              <span className="text-text-inverse/35">
                real work.
              </span>
            </h2>

            <p className="mt-5 max-w-[530px] text-[15px] leading-7 text-text-inverse/55">
              Connect AI with the repetitive parts of the business so your
              people spend less time moving information and more time making
              decisions.
            </p>

            <Link
              to="/services/ai-automation-solutions"
              className="group mt-6 inline-flex items-center gap-3 text-[13px] font-semibold text-text-inverse"
            >
              Explore AI & Automation

              <FiArrowUpRight className="text-[16px] text-purple transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </div>

          {/* FLOW */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-text-inverse/40">
                Example workflow
              </span>

              <span className="text-[12px] font-medium text-green">
                Always moving
              </span>
            </div>

            <div className="relative mt-8">
              {/* DESKTOP */}
              <div className="relative hidden lg:block">
                <div className="absolute left-[3%] right-[3%] top-[14px] h-px bg-text-inverse/12" />

                {!reduceMotion && (
                  <motion.span
                    animate={{
                      left: ["3%", "96%"],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-[10px] z-20 h-[8px] w-[8px] bg-accent shadow-[0_0_20px_var(--color-accent)]"
                  />
                )}

                <div className="relative z-10 grid grid-cols-4 gap-5">
                  {workflow.map((item) => (
                    <div key={item.label}>
                      <span
                        className="block h-[9px] w-[9px]"
                        style={{
                          backgroundColor: item.accent,
                        }}
                      />

                      <h3 className="mt-8 text-[19px] font-semibold tracking-[-0.025em] text-text-inverse">
                        {item.label}
                      </h3>

                      <p className="mt-2 max-w-[160px] text-[13px] leading-5 text-text-inverse/40">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOBILE */}
              <div className="relative space-y-5 lg:hidden">
                <div className="absolute bottom-3 left-[4px] top-2 w-px bg-text-inverse/12" />

                {workflow.map((item) => (
                  <div
                    key={item.label}
                    className="relative pl-8"
                  >
                    <span
                      className="absolute left-0 top-[7px] h-[9px] w-[9px]"
                      style={{
                        backgroundColor: item.accent,
                      }}
                    />

                    <h3 className="text-[18px] font-semibold text-text-inverse">
                      {item.label}
                    </h3>

                    <p className="mt-1 text-[13px] leading-5 text-text-inverse/45">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 border-t border-text-inverse/10 pt-5 text-[13px] leading-6 text-text-inverse/45">
              The same flow can connect your CRM, calendar, inbox, support
              tools or internal software.
            </p>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-10 flex flex-col gap-5 border-t border-text-inverse/10 pt-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex items-center gap-2"
              >
                <span
                  className="h-[5px] w-[5px]"
                  style={{
                    backgroundColor:
                      workflow[index % workflow.length].accent,
                  }}
                />

                <span className="text-[12px] font-medium text-text-inverse/45">
                  {capability}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-3 text-[13px] font-semibold text-text-inverse"
          >
            Automate a workflow

            <FiArrowRight className="text-accent transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { AIShowcase };