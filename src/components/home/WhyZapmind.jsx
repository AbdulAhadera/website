import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import { motion } from "framer-motion";

const principles = [
  {
    title: "One team across the whole picture.",
    description:
      "Brand, website, growth, software and automation stay connected instead of becoming separate projects.",
    accent: "var(--color-accent)",
  },
  {
    title: "Business problem first.",
    description:
      "We decide what needs to improve before deciding which technology, channel or deliverable should be used.",
    accent: "var(--color-purple)",
  },
  {
    title: "Built to work together.",
    description:
      "Your digital presence and internal systems should reinforce each other instead of creating more complexity.",
    accent: "var(--color-green)",
  },
];

const WhyZapmind = () => {
  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[360px] bg-purple-soft/30 blur-[140px]" />

      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                Why Zapmind
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Less agency chaos.
              <br />

              <span className="text-text-muted">
                More connected thinking.
              </span>
            </h2>

            <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
              Good digital work should make the business easier to move, not
              give you more people and tools to coordinate.
            </p>
          </div>
        </div>

        {/* MANIFESTO */}
        <div className="mt-14 grid border-y border-border-strong lg:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.15,
              }}
              className={`py-8 lg:px-8 lg:py-10 ${
                index !== principles.length - 1
                  ? "border-b border-border-strong lg:border-b-0 lg:border-r"
                  : ""
              } ${index === 0 ? "lg:pl-0" : ""}`}
            >
              <span
                className="block h-[3px] w-10"
                style={{
                  backgroundColor: principle.accent,
                }}
              />

              <h3 className="mt-6 max-w-[390px] text-[27px] font-semibold leading-[1.07] tracking-[-0.04em] text-text-primary md:text-[31px]">
                {principle.title}
              </h3>

              <p className="mt-5 max-w-[410px] text-[14px] leading-7 text-text-subtle">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CLOSING */}
        <div className="mt-9 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[760px] text-[27px] font-semibold leading-[1.15] tracking-[-0.035em] text-text-primary sm:text-[32px] md:text-[36px]">
            Bring us the problem.
            <span className="text-text-muted">
              {" "}
              We&apos;ll connect the pieces.
            </span>
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary"
            >
              About Zapmind

              <FiArrowUpRight className="text-[16px] text-purple transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary hover:text-accent"
            >
              Start a conversation

              <FiArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhyZapmind };