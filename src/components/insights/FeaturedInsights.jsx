import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import { insightVisuals } from "../../data/insightVisuals.js";

const FeaturedInsight = ({ insight }) => {
  const reduceMotion = useReducedMotion();

  if (!insight) return null;

  const image = insight.image || insightVisuals[insight.slug];

  return (
    <section className="relative overflow-hidden bg-bg-dark">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">Featured insight</span>
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30">{insight.category}</span>
        </div>

        <div className="relative mt-10">
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative ml-auto h-[420px] w-full overflow-hidden md:h-[520px] lg:w-[62%]"
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/75 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 -mt-20 bg-bg-dark pb-2 pt-8 sm:-mt-28 lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:w-[56%] lg:-translate-y-1/2 lg:py-10 lg:pr-12"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">{insight.category}</span>

            <h2 className="mt-5 max-w-[780px] text-[39px] font-semibold leading-[0.96] tracking-[-0.052em] text-white sm:text-[48px] md:text-[56px]">
              {insight.title}
            </h2>

            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-white/45">{insight.excerpt}</p>

            <Link to={insight.href} className="group mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-white">
              Read insight
              <FiArrowUpRight className="transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { FeaturedInsight };