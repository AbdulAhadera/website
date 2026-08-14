import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { servicesData } from "../../data/servicesData.js";

const serviceStyles = {
  "website-design-development": {
    accent: "var(--color-accent)",
  },
  "digital-marketing-growth": {
    accent: "var(--color-green)",
  },
  "social-media-management": {
    accent: "var(--color-pink)",
  },
  "branding-creative-design": {
    accent: "var(--color-purple)",
  },
  "ecommerce-solutions": {
    accent: "var(--color-orange)",
  },
  "software-app-development": {
    accent: "var(--color-cyan)",
  },
  "ai-automation-solutions": {
    accent: "var(--color-yellow)",
  },
};

const ServicesShowcase = () => {
  const [activeServiceId, setActiveServiceId] = useState(
    servicesData[0]?.id || "",
  );

  const activeService =
    servicesData.find(
      (service) => service.id === activeServiceId,
    ) || servicesData[0];

  const activeStyle =
    serviceStyles[activeService?.id] ||
    serviceStyles["website-design-development"];

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="pointer-events-none absolute -right-40 top-0 h-[360px] w-[360px] bg-accent-soft/50 blur-[130px]" />

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
                What We Do
              </span>
            </div>
          </div>

          <motion.div
            initial={{
              y: 18,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Seven capabilities.
              <br />

              <span className="text-text-muted">
                One connected team.
              </span>
            </h2>

            <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
              Strategy, creative, growth, software and automation work better
              when they are moving toward the same business goal.
            </p>
          </motion.div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16 xl:mt-16">
          {/* ACTIVE STORY */}
          <div className="hidden lg:block">
            <div className="sticky top-[110px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{
                    y: 10,
                  }}
                  animate={{
                    y: 0,
                  }}
                  exit={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <span
                    className="block h-[3px] w-12"
                    style={{
                      backgroundColor: activeStyle.accent,
                    }}
                  />

                  <h3 className="mt-7 max-w-[430px] text-[34px] font-semibold leading-[1.03] tracking-[-0.045em] text-text-primary xl:text-[40px]">
                    {activeService.title}
                  </h3>

                  <p className="mt-5 max-w-[420px] text-[15px] leading-7 text-text-subtle">
                    {activeService.shortDescription}
                  </p>

                  <Link
                    to={`/services/${activeService.slug}`}
                    className="group mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary"
                  >
                    Explore this service

                    <FiArrowUpRight
                      className="text-[16px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      style={{
                        color: activeStyle.accent,
                      }}
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* SERVICE DIRECTORY */}
          <div className="border-t border-border-strong">
            {servicesData.map((service) => {
              const style =
                serviceStyles[service.id] ||
                serviceStyles["website-design-development"];

              const active =
                service.id === activeServiceId;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() =>
                    setActiveServiceId(service.id)
                  }
                  className="group relative border-b border-border-strong"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    onFocus={() =>
                      setActiveServiceId(service.id)
                    }
                    className="relative grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 md:py-6"
                  >
                    <motion.span
                      animate={{
                        scaleY: active ? 1 : 0,
                      }}
                      className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom"
                      style={{
                        backgroundColor: style.accent,
                      }}
                    />

                    <motion.div
                      animate={{
                        x: active ? 7 : 0,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="pl-4"
                    >
                      <h3 className="text-[23px] font-semibold leading-[1.05] tracking-[-0.035em] text-text-primary sm:text-[27px] md:text-[30px]">
                        {service.navTitle || service.title}
                      </h3>

                      <p className="mt-2 max-w-[650px] text-[13px] leading-6 text-text-subtle lg:hidden">
                        {service.shortDescription}
                      </p>
                    </motion.div>

                    <FiArrowUpRight
                      className="hidden text-[18px] sm:block"
                      style={{
                        color: active
                          ? style.accent
                          : "var(--color-text-muted)",
                      }}
                    />

                    <motion.span
                      animate={{
                        scaleX: active ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left"
                      style={{
                        backgroundColor: style.accent,
                      }}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOT */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border-light pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-6 text-text-subtle">
            Not sure what service you need? Start with the business problem.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary hover:text-accent"
          >
            Tell us what needs fixing

            <FiArrowRight className="text-[15px] transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ServicesShowcase };