import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import { industriesFAQData } from "../../data/dataFAQ.js";
import { industryAccent } from "../../data/industryVisuals.js";

const IndustriesFAQ = ({ industry = null }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqKey = industry?.slug || "general";
  const faq = industriesFAQData[faqKey] || industriesFAQData.general;
  const accent = industry ? industryAccent[industry.accent] || "var(--color-accent)" : "var(--color-accent)";

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-24">
          <div className="lg:w-[34%] lg:shrink-0">
            <div className="flex items-center gap-3">
              <span className="h-[7px] w-[7px]" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">{faq.eyebrow}</span>
            </div>

            <h2 className="mt-6 max-w-[520px] text-[40px] font-semibold leading-[0.97] tracking-[-0.052em] text-text-primary sm:text-[48px] md:text-[54px]">
              {faq.title}
            </h2>

            <p className="mt-5 max-w-[440px] text-[15px] leading-7 text-text-subtle">
              {faq.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[3px] w-16" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                {String(faq.items.length).padStart(2, "0")} questions
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1 border-t border-border-strong">
            {faq.items.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={item.question} className="border-b border-border-strong">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="group flex w-full items-start justify-between gap-8 py-6 text-left md:py-7"
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-start gap-5 md:gap-7">
                      <span className="mt-[5px] hidden min-w-[24px] text-[10px] font-semibold tracking-[0.12em] text-text-muted sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={`max-w-[720px] text-[18px] font-semibold leading-[1.35] tracking-[-0.025em] transition-colors duration-150 md:text-[20px] ${isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"}`}>
                        {item.question}
                      </span>
                    </div>

                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center border transition-colors duration-150"
                      style={{
                        borderColor: isOpen ? accent : "var(--color-border-strong)",
                        backgroundColor: isOpen ? accent : "transparent",
                        color: isOpen ? "var(--color-text-inverse)" : "var(--color-text-primary)",
                      }}
                    >
                      {isOpen ? <FiMinus size={15} /> : <FiPlus size={15} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 sm:pl-[44px] md:pl-[52px]">
                          <div className="flex max-w-[760px] items-start gap-4">
                            <span className="mt-[10px] h-px w-8 shrink-0" style={{ backgroundColor: accent }} />

                            <p className="text-[15px] leading-7 text-text-subtle">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { IndustriesFAQ };