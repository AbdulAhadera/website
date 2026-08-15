import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { industriesData } from "../../data/industriesData.js";
import {
  industryAccent,
  industryVisuals,
} from "../../data/industryVisuals.js";

const IndustriesDirectory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = industriesData[activeIndex];

  const accent =
    industryAccent[active.accent] ||
    "var(--color-accent)";

  return (
    <section
      id="industry-directory"
      className="relative overflow-hidden bg-bg-dark"
    >
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-65" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-6 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35">
            Where we work
          </span>

          <h2 className="max-w-[850px] text-[40px] font-semibold leading-[0.97] tracking-[-0.052em] text-white sm:text-[50px] md:text-[58px]">
            Find your industry.
            <br />

            <span className="text-white/30">
              Then find the friction.
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* VISUAL */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative h-[430px] overflow-hidden md:h-[560px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.slug}
                  src={industryVisuals[active.slug]}
                  alt=""
                  initial={{
                    opacity: 0,
                    scale: 1.02,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/10 to-transparent" />

              <span
                className="absolute left-0 top-0 h-[5px] w-[32%]"
                style={{
                  backgroundColor: accent,
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <span
                  className="text-[12px] font-semibold uppercase tracking-[0.13em]"
                  style={{
                    color: accent,
                  }}
                >
                  {active.navTitle}
                </span>

                <p className="mt-3 max-w-[560px] text-[25px] font-semibold leading-[1.12] tracking-[-0.035em] text-white md:text-[32px]">
                  {active.shortDescription}
                </p>

                <Link
                  to={`/industries/${active.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-white"
                >
                  Explore {active.navTitle}

                  <FiArrowUpRight className="transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </Link>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {active.outcomes
                .slice(0, 3)
                .map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-2.5"
                  >
                    <span
                      className="h-[6px] w-[6px]"
                      style={{
                        backgroundColor: accent,
                      }}
                    />

                    <span className="text-[13px] text-white/45">
                      {outcome}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* INDEX */}
          <div className="border-t border-white/10">
            {industriesData.map((industry, index) => {
              const selected =
                index === activeIndex;

              const itemAccent =
                industryAccent[industry.accent] ||
                "var(--color-accent)";

              return (
                <div
                  key={industry.slug}
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  onFocus={() =>
                    setActiveIndex(index)
                  }
                  className="relative border-b border-white/10"
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group flex min-h-[82px] items-center justify-between gap-6 py-5"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className="h-[7px] w-[7px] shrink-0"
                        style={{
                          backgroundColor:
                            selected
                              ? itemAccent
                              : "rgba(255,255,255,0.14)",
                        }}
                      />

                      <span
                        className={`
                          text-[19px] font-semibold
                          tracking-[-0.03em]
                          transition-colors duration-150
                          md:text-[23px]
                          ${
                            selected
                              ? "text-white"
                              : "text-white/38 group-hover:text-white"
                          }
                        `}
                      >
                        {industry.title}
                      </span>
                    </div>

                    <FiArrowUpRight
                      className={`
                        shrink-0 text-[18px]
                        transition-all duration-150
                        ${
                          selected
                            ? "text-white"
                            : "text-white/15 group-hover:text-white"
                        }
                      `}
                    />
                  </Link>

                  {selected && (
                    <motion.span
                      layoutId="industry-active-line"
                      className="absolute bottom-[-1px] left-0 h-[2px] w-full"
                      style={{
                        backgroundColor: itemAccent,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { IndustriesDirectory };