import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

import { Button } from "../components/common/Button.jsx";

const NotFoundPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-25" />

      <div className="pointer-events-none absolute -left-28 top-20 h-[320px] w-[320px] bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-[300px] w-[300px] bg-purple/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-4vw] right-[-2vw] hidden select-none text-[25vw] font-extrabold leading-[0.7] tracking-[-0.1em] text-text-primary/[0.025] lg:block">
        404
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-14 md:px-7 md:py-16 lg:px-8">
        <div className="flex items-center justify-between border-b border-border-strong pb-5">
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] bg-red" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">Error 404</span>
          </div>

          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted md:block">
            Wrong turn
          </span>
        </div>

        <div className="relative mt-12 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[920px]">
            <motion.span
              initial={{ opacity: 0, x: reduceMotion ? 0 : -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="block text-[clamp(6rem,15vw,13rem)] font-semibold leading-[0.7] tracking-[-0.09em] text-text-primary"
            >
              404
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08 }}
              className="mt-9 max-w-[850px] text-[43px] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary sm:text-[54px] md:text-[64px]"
            >
              You&apos;ve reached
              <br />
              <span className="text-text-muted">the wrong place.</span>
            </motion.h1>

            <div className="mt-7 h-[4px] w-24 bg-red" />

            <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-text-secondary md:text-[16px]">
              The page may have moved, the link may be outdated, or this route simply doesn&apos;t exist.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button to="/">Back Home</Button>

              <Link to="/services" className="group inline-flex items-center gap-2 border-b border-text-primary/20 pb-1 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:border-text-primary">
                Explore services
                <FiArrowUpRight className="transition-transform duration-150 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.12 }}
            className="w-full max-w-[390px]"
          >
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border-strong" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">Try these instead</span>
            </div>

            <div className="mt-5 border-t border-border-strong">
              {[
                { label: "Services", to: "/services" },
                { label: "Industries", to: "/industries" },
                { label: "Insights", to: "/insights" },
                { label: "About", to: "/about" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="group flex items-center justify-between border-b border-border-strong py-5">
                  <span className="text-[18px] font-semibold tracking-[-0.025em] text-text-secondary transition-colors duration-150 group-hover:text-text-primary">
                    {item.label}
                  </span>

                  <FiArrowUpRight className="text-[17px] text-text-muted transition-all duration-150 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-text-primary" />
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <FiArrowLeft className="text-[14px] text-text-muted" />
              <span className="text-[11px] text-text-muted">Back to something useful.</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[4px] w-[38%] bg-accent" />
      <div className="absolute bottom-0 left-[38%] h-[4px] w-[14%] bg-purple" />
      <div className="absolute bottom-0 left-[52%] h-[4px] w-[8%] bg-green" />
    </main>
  );
};

export { NotFoundPage };