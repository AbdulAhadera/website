import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

import { insightsData } from "../../data/insightsData.js";
import { insightVisuals } from "../../data/insightVisuals.js";
import { Button } from "../../components/common/Button.jsx";
import { IndustriesFAQ } from "../../components/industries/IndustriesFAQ.jsx";

const InsightDetailsPage = () => {
  const { insightSlug } = useParams();
  const reduceMotion = useReducedMotion();

  const insight = insightsData.find((item) => item.slug === insightSlug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [insightSlug]);

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const image = insight.image || insightVisuals[insight.slug];

  const relatedInsights = insightsData
    .filter(
      (item) =>
        item.slug !== insight.slug && item.category === insight.category,
    )
    .slice(0, 2);

  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-bg-1">
          <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

          <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-8 md:px-7 md:pb-16 lg:px-8">
            <div className="flex items-center justify-between border-b border-border-strong pb-5">
              <Link
                to="/insights"
                className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted transition-colors duration-150 hover:text-text-primary"
              >
                <FiArrowLeft className="transition-transform duration-150 group-hover:-translate-x-[2px]" />
                Insights
              </Link>

              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                {insight.category}
              </span>
            </div>

            <div className="mx-auto max-w-[1180px] pt-12 text-center md:pt-16">
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                  {insight.category}
                </span>

                {insight.readTime && (
                  <>
                    <span className="h-[3px] w-[3px] bg-text-muted" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                      {insight.readTime}
                    </span>
                  </>
                )}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-7 max-w-[1100px] text-[46px] font-semibold leading-[0.94] tracking-[-0.06em] text-text-primary sm:text-[58px] md:text-[70px] xl:text-[80px]"
              >
                {insight.title}
              </motion.h1>

              <p className="mx-auto mt-7 max-w-[760px] text-[16px] leading-7 text-text-secondary md:text-[18px] md:leading-8">
                {insight.excerpt}
              </p>

              {insight.tags?.length > 0 && (
                <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {image && (
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.1 }}
                className="relative mt-12 h-[300px] overflow-hidden sm:h-[400px] md:h-[520px] lg:h-[620px]"
              >
                <img
                  src={image}
                  alt={insight.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/50 via-transparent to-transparent" />
                <span className="absolute left-0 top-0 h-[5px] w-[26%] bg-accent" />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    Zapmind Insight
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ARTICLE */}
        <section className="relative overflow-hidden bg-bg-1">
          <div className="relative mx-auto max-w-[1500px] px-5 py-14 md:px-7 md:py-20 lg:px-8">
            <div className="mx-auto flex max-w-[1100px] flex-col gap-10 lg:flex-row lg:gap-20">
              {/* SIDE */}
              <aside className="lg:w-[220px] lg:shrink-0">
                <div className="lg:sticky lg:top-28">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    In this insight
                  </span>

                  <div className="mt-5 h-[3px] w-12 bg-accent" />

                  <div className="mt-6 space-y-3">
                    {insight.tags?.map((tag) => (
                      <p
                        key={tag}
                        className="text-[13px] font-medium text-text-subtle"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </aside>

              {/* BODY */}
              <article className="min-w-0 flex-1">
                <p className="text-[22px] font-medium leading-[1.55] tracking-[-0.025em] text-text-primary md:text-[26px]">
                  {insight.excerpt}
                </p>

                <div className="my-10 h-px w-full bg-border-strong" />

                {insight.sections?.length > 0 ? (
                  <div className="space-y-14">
                    {insight.sections.map((section, index) => (
                      <motion.section
                        key={`${section.heading}-${index}`}
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                      >
                        {section.eyebrow && (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                            {section.eyebrow}
                          </span>
                        )}

                        {section.heading && (
                          <h2 className="mt-3 text-[31px] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary md:text-[40px]">
                            {section.heading}
                          </h2>
                        )}

                        {section.content && (
                          <p className="mt-5 text-[16px] leading-8 text-text-secondary">
                            {section.content}
                          </p>
                        )}

                        {section.paragraphs?.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="mt-5 text-[16px] leading-8 text-text-secondary"
                          >
                            {paragraph}
                          </p>
                        ))}

                        {section.points?.length > 0 && (
                          <div className="mt-7 border-y border-border-strong">
                            {section.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-start gap-4 border-b border-border-light py-4 last:border-b-0"
                              >
                                <span className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-accent" />
                                <p className="text-[15px] font-medium leading-7 text-text-primary">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.section>
                    ))}
                  </div>
                ) : (
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                      Coming next
                    </span>

                    <h2 className="mt-3 text-[32px] font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary md:text-[40px]">
                      Full insight coming soon.
                    </h2>

                    <p className="mt-5 max-w-[690px] text-[16px] leading-8 text-text-secondary">
                      This article is currently being prepared. The published
                      version will go deeper into the problem, what causes it,
                      and the practical decisions businesses can make next.
                    </p>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>

        {/* RELATED */}
        {relatedInsights.length > 0 && (
          <section className="relative overflow-hidden bg-bg-2">
            <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

            <div className="relative mx-auto max-w-[1500px] px-5 py-14 md:px-7 md:py-16 lg:px-8">
              <div className="flex items-end justify-between border-b border-border-strong pb-5">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                    Keep reading
                  </span>

                  <h2 className="mt-3 text-[35px] font-semibold tracking-[-0.045em] text-text-primary md:text-[43px]">
                    Related thinking.
                  </h2>
                </div>
              </div>

              <div className="border-b border-border-strong">
                {relatedInsights.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.href}
                    className="group flex items-center justify-between gap-7 border-b border-border-strong py-6 last:border-b-0"
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                        {item.category}
                      </span>

                      <h3 className="mt-2 max-w-[850px] text-[20px] font-semibold leading-[1.25] tracking-[-0.03em] text-text-secondary transition-colors duration-150 group-hover:text-text-primary md:text-[25px]">
                        {item.title}
                      </h3>
                    </div>

                    <FiArrowUpRight className="shrink-0 text-[20px] text-text-muted transition-all duration-150 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <IndustriesFAQ />

        {/* CTA */}
        <section className="relative overflow-hidden bg-bg-1">
          <div className="relative mx-auto max-w-[1500px] px-5 py-14 md:px-7 md:py-16 lg:px-8">
            <div className="flex flex-col gap-8 border-y border-border-strong py-10 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                  From idea to execution
                </span>

                <h2 className="mt-3 max-w-[700px] text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-text-primary md:text-[48px]">
                  Have a problem worth
                  <span className="text-text-muted"> solving?</span>
                </h2>
              </div>

              <div className="shrink-0">
                <Button to="/contact">Start a Conversation</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { InsightDetailsPage };
