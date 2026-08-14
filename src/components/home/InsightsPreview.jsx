import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import { motion } from "framer-motion";

const featuredInsight = {
  category: "AI & Automation",
  title: "Where AI actually saves a business time.",
  description:
    "A practical look at the repetitive workflows worth automating — and the ones that probably should stay human.",
  href: "/insights/where-ai-actually-saves-time",
  accent: "var(--color-purple)",
};

const secondaryInsights = [
  {
    category: "Digital Growth",
    title: "Your website is not a brochure anymore.",
    description:
      "Modern websites need to generate demand, support sales and connect with what happens behind the business.",
    href: "/insights/website-is-not-a-brochure",
    accent: "var(--color-accent)",
  },
  {
    category: "Business Systems",
    title: "The hidden cost of running everything manually.",
    description:
      "Spreadsheets and inboxes can work for a while. Eventually the operational drag starts costing more than the software.",
    href: "/insights/hidden-cost-of-manual-work",
    accent: "var(--color-green)",
  },
];

const InsightsPreview = () => {
  return (
    <section className="relative overflow-hidden bg-bg-1">
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
                Ideas & Insights
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Thinking beyond
              <br />

              <span className="text-text-muted">
                the deliverable.
              </span>
            </h2>

            <p className="mt-6 max-w-[690px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
              Practical thinking about growth, software and AI without hiding
              everything behind jargon.
            </p>
          </div>
        </div>

        {/* EDITORIAL LAYOUT */}
        <div className="mt-12 grid border-y border-border-strong lg:grid-cols-[1.15fr_0.85fr]">
          {/* FEATURED */}
          <motion.article
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.15,
            }}
            className="border-b border-border-strong py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12"
          >
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.12em]"
              style={{
                color: featuredInsight.accent,
              }}
            >
              {featuredInsight.category}
            </span>

            <Link to={featuredInsight.href}>
              <h3 className="mt-5 max-w-[720px] text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] text-text-primary sm:text-[40px] md:text-[46px]">
                {featuredInsight.title}
              </h3>
            </Link>

            <p className="mt-5 max-w-[630px] text-[15px] leading-7 text-text-subtle">
              {featuredInsight.description}
            </p>

            <Link
              to={featuredInsight.href}
              className="group mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary"
            >
              Read insight

              <FiArrowUpRight
                className="text-[16px]"
                style={{
                  color: featuredInsight.accent,
                }}
              />
            </Link>
          </motion.article>

          {/* SECONDARY */}
          <div className="lg:pl-12">
            {secondaryInsights.map((article, index) => (
              <motion.article
                key={article.title}
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.15,
                }}
                className={`py-8 lg:py-10 ${
                  index !== secondaryInsights.length - 1
                    ? "border-b border-border-strong"
                    : ""
                }`}
              >
                <span
                  className="text-[12px] font-semibold uppercase tracking-[0.12em]"
                  style={{
                    color: article.accent,
                  }}
                >
                  {article.category}
                </span>

                <Link to={article.href}>
                  <h3 className="mt-4 max-w-[520px] text-[27px] font-semibold leading-[1.06] tracking-[-0.04em] text-text-primary md:text-[31px]">
                    {article.title}
                  </h3>
                </Link>

                <p className="mt-4 max-w-[500px] text-[14px] leading-6 text-text-subtle">
                  {article.description}
                </p>

                <Link
                  to={article.href}
                  className="group mt-5 inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary"
                >
                  Read more

                  <FiArrowUpRight
                    className="text-[15px]"
                    style={{
                      color: article.accent,
                    }}
                  />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-6 text-text-subtle">
            Strategy, technology and growth without the buzzwords.
          </p>

          <Link
            to="/insights"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary hover:text-accent"
          >
            Explore all insights

            <FiArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { InsightsPreview };