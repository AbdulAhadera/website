import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";

import { Button } from "../../common/Button.jsx";
import { industryAccent } from "../../../data/industryVisuals.js";

const IndustryDetailHero = ({ industry, image }) => {
  const accent =
    industryAccent[industry.accent] || "var(--color-accent)";

  const problem = industry.problems?.[0];
  const outcome = industry.outcomes?.[0];

  return (
    <section className="relative overflow-hidden bg-bg-dark lg:h-[calc(100svh-72px)]">
      {/* IMAGE */}
      <motion.img
        src={image}
        alt={industry.title}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-bg-dark/25" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.94)_0%,rgba(7,17,31,0.58)_40%,rgba(7,17,31,0.08)_75%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,17,31,0.88)_0%,transparent_58%)]" />

      {/* PAGE LAYOUT */}
      <div className="relative z-20 flex min-h-[calc(100svh-72px)] flex-col lg:h-full lg:min-h-0">
        {/* TOP */}
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 pt-6 md:px-7 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              to="/industries"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55 transition-colors duration-150 hover:text-white"
            >
              Industries
            </Link>

            <span className="h-[4px] w-[4px] bg-white/30" />

            <span
              className="text-[12px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: accent }}
            >
              {industry.navTitle}
            </span>
          </div>
        </div>

        {/* MAIN */}
        <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 items-end px-5 pb-8 md:px-7 lg:px-8 lg:pb-10">
          {/* VERTICAL DETAIL */}
          <div className="absolute right-[5%] top-[8%] hidden h-[58%] w-[11%] overflow-hidden border-x border-white/15 lg:block">
            <img
              src={image}
              alt=""
              className="h-full w-full scale-[1.8] object-cover"
            />

            <div
              className="absolute inset-x-0 bottom-0 h-[4px]"
              style={{ backgroundColor: accent }}
            />
          </div>

          {/* TITLE */}
          <div className="max-w-[1100px] pb-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.1,
              }}
              className="mb-4 flex items-center gap-3"
            >
              <span
                className="h-[8px] w-[8px]"
                style={{ backgroundColor: accent }}
              />

              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/55">
                Digital systems for
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[1050px]
                text-[clamp(3.6rem,8vw,8rem)]
                font-semibold
                leading-[0.8]
                tracking-[-0.07em]
                text-white
              "
            >
              {industry.title}
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-6 h-[4px]"
              style={{ backgroundColor: accent }}
            />
          </div>
        </div>

        {/* BOTTOM DOCK */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="shrink-0 bg-bg-1"
        >
          <div className="mx-auto grid max-w-[1500px] gap-5 px-5 py-5 md:px-7 lg:grid-cols-[1.15fr_1fr_auto] lg:items-center lg:gap-9 lg:px-8">
            {/* DESCRIPTION */}
            <p className="max-w-[520px] text-[14px] leading-6 text-text-secondary md:text-[15px]">
              {industry.shortDescription}
            </p>

            {/* PROBLEM → OUTCOME */}
            {problem && outcome && (
              <div className="flex min-w-0 items-center gap-4">
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                    From
                  </span>

                  <p className="mt-1 truncate text-[12px] font-semibold text-text-primary">
                    {problem}
                  </p>
                </div>

                <FiArrowDownRight
                  className="shrink-0 rotate-[-45deg] text-[17px]"
                  style={{ color: accent }}
                />

                <div className="min-w-0">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.13em]"
                    style={{ color: accent }}
                  >
                    To
                  </span>

                  <p className="mt-1 truncate text-[12px] font-semibold text-text-primary">
                    {outcome}
                  </p>
                </div>
              </div>
            )}

            <Button to="/contact">
              Start a Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { IndustryDetailHero };