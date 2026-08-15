import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { insightsData, insightCategories } from "../../data/insightsData.js";
import { insightVisuals } from "../../data/insightVisuals.js";

const InsightsFeed = ({ excludeSlug = null }) => {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const articles = useMemo(() => {
    return insightsData.filter((insight) => {
      const categoryMatch = category === "All" || insight.category === category;
      const excluded = insight.slug === excludeSlug;
      return categoryMatch && !excluded;
    });
  }, [category, excludeSlug]);

  const active = articles[activeIndex] || articles[0];

  const handleCategory = (item) => {
    setCategory(item);
    setActiveIndex(0);
  };

  return (
    <section id="latest-thinking" className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-7 border-b border-border-strong pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[7px] w-[7px] bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">Latest thinking</span>
            </div>

            <h2 className="mt-5 text-[42px] font-semibold leading-[0.96] tracking-[-0.052em] text-text-primary sm:text-[50px] md:text-[58px]">
              Read what matters.
            </h2>
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">{String(articles.length).padStart(2, "0")} articles</span>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {insightCategories.map((item) => {
            const selected = category === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => handleCategory(item)}
                className={`shrink-0 border px-4 py-2 text-[12px] font-semibold transition-colors duration-150 ${selected ? "border-text-primary bg-text-primary text-white" : "border-border-strong bg-bg-1 text-text-subtle hover:border-text-primary hover:text-text-primary"}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {active ? (
          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-[42%] lg:shrink-0">
              <div className="relative h-[400px] overflow-hidden md:h-[520px] lg:sticky lg:top-28">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.slug}
                    src={active.image || insightVisuals[active.slug]}
                    alt=""
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/85 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 md:bottom-8 md:left-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">{active.category}</span>
                  <p className="mt-2 max-w-[470px] text-[24px] font-semibold leading-[1.1] tracking-[-0.035em] text-white md:text-[29px]">{active.title}</p>
                </div>
              </div>
            </div>

            <div className="min-w-0 flex-1 border-t border-border-strong">
              {articles.map((insight, index) => {
                const selected = active.slug === insight.slug;

                return (
                  <Link
                    key={insight.slug}
                    to={insight.href}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="group block border-b border-border-strong py-6 md:py-7"
                  >
                    <div className="flex items-start justify-between gap-7">
                      <div className="flex min-w-0 items-start gap-5 md:gap-7">
                        <span className="mt-[5px] hidden min-w-[25px] text-[10px] font-semibold tracking-[0.13em] text-text-muted sm:block">{String(index + 1).padStart(2, "0")}</span>

                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: selected ? "var(--color-accent)" : "var(--color-text-muted)" }}>
                            {insight.category}
                          </span>

                          <h3 className={`mt-2 max-w-[720px] text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] transition-colors duration-150 md:text-[24px] ${selected ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"}`}>
                            {insight.title}
                          </h3>

                          <p className="mt-3 max-w-[680px] text-[14px] leading-6 text-text-subtle">{insight.excerpt}</p>
                        </div>
                      </div>

                      <FiArrowUpRight className={`mt-2 shrink-0 text-[18px] transition-all duration-150 ${selected ? "text-text-primary" : "text-text-muted group-hover:text-text-primary"}`} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="mt-10 text-[15px] text-text-muted">No insights found in this category.</p>
        )}
      </div>
    </section>
  );
};

export { InsightsFeed };