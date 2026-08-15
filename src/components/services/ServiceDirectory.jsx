import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import Experience from "../../assets/Experience.webp";
import Growth from "../../assets/Growth.jpg";
import Pattern from "../../assets/Pattern.jpg";
import Idea from "../../assets/Idea.jpg";
import SmartProduct from "../../assets/SmartProduct.webp";
import DigitalTransformation from "../../assets/DigitalTransfomation.webp";
import Automation from "../../assets/Automation.webp";

const services = [
  {
    title: "Website Design & Development",
    label: "Web",
    description:
      "Web experiences that look sharp, feel clear and make the business easier to understand.",
    image: Experience,
    accent: "var(--color-accent)",
  },
  {
    title: "Digital Marketing & Growth",
    label: "Growth",
    description:
      "Campaigns and growth systems built to create attention and turn it into momentum.",
    image: Growth,
    accent: "var(--color-green)",
  },
  {
    title: "Social Media Management",
    label: "Social",
    description:
      "A consistent social presence without making your team live inside a content calendar.",
    image: Pattern,
    accent: "var(--color-pink)",
  },
  {
    title: "Branding & Creative Design",
    label: "Brand",
    description:
      "Identity and creative direction that makes the business feel recognisable.",
    image: Idea,
    accent: "var(--color-purple)",
  },
  {
    title: "E-Commerce Solutions",
    label: "Commerce",
    description:
      "Digital storefronts designed around a smoother path from discovery to purchase.",
    image: SmartProduct,
    accent: "var(--color-orange)",
  },
  {
    title: "Software & App Development",
    label: "Software",
    description:
      "Software shaped around how your business actually works instead of forcing another workaround.",
    image: DigitalTransformation,
    accent: "var(--color-cyan)",
  },
  {
    title: "AI & Automation Solutions",
    label: "AI",
    description:
      "Practical automation that removes repetitive work without adding unnecessary complexity.",
    image: Automation,
    accent: "var(--color-yellow)",
  },
];

const ServiceDirectory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = services[activeIndex];

  return (
    <section
      id="service-directory"
      className="relative overflow-hidden bg-bg-dark text-text-inverse"
    >
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-7 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div className="flex items-start gap-3">
            <div className="flex gap-1">
              <span className="h-[7px] w-[7px] bg-accent" />
              <span className="h-[7px] w-[7px] bg-purple" />
              <span className="h-[7px] w-[7px] bg-green" />
            </div>

            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-inverse/45">
              What We Do
            </span>
          </div>

          <div>
            <h2 className="max-w-[850px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Pick the part
              <br />
              <span className="text-text-inverse/35">
                you want to improve &nbsp; 
              </span>
              
              <p className="text-text-inverse">
                or Start.
              </p>
            </h2>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:mt-16">
          {/* IMAGE */}
          <div className="relative min-h-[350px] overflow-hidden md:min-h-[500px] lg:min-h-[580px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.title}
                src={active.image}
                alt=""
                initial={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 1.03,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 0.99,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/55 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-7 md:left-7 md:right-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${active.title}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.13em]"
                    style={{ color: active.accent }}
                  >
                    {active.label}
                  </span>

                  <p className="mt-2 max-w-[520px] text-[17px] font-medium leading-7 text-text-inverse md:text-[19px]">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* SERVICE LIST */}
          <div className="border-t border-text-inverse/15">
            {services.map((service, index) => {
              const selected = index === activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group relative flex w-full items-center gap-5 border-b border-text-inverse/15 py-5 text-left md:py-6"
                >
                  <span
                    className="h-[7px] w-[7px] shrink-0 transition-transform duration-150"
                    style={{
                      backgroundColor: service.accent,
                      transform: selected ? "scale(1.4)" : "scale(1)",
                    }}
                  />

                  <span
                    className={`flex-1 text-[19px] font-semibold tracking-[-0.025em] transition-colors duration-150 sm:text-[22px] ${
                      selected
                        ? "text-text-inverse"
                        : "text-text-inverse/45 group-hover:text-text-inverse"
                    }`}
                  >
                    {service.title}
                  </span>

                  <FiArrowUpRight
                    className={`text-[17px] transition-all duration-150 ${
                      selected
                        ? "translate-x-0 -translate-y-[2px] opacity-100"
                        : "-translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
                    style={{ color: service.accent }}
                  />

                  {selected && (
                    <motion.span
                      layoutId="service-active-line"
                      className="absolute bottom-[-1px] left-0 h-[2px] w-full"
                      style={{ backgroundColor: service.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ENDING */}
        <div className="mt-8 flex items-center gap-3 text-[13px] text-text-inverse/45">
          <span className="h-[6px] w-[6px] bg-green" />
          <span>
            Start with one capability. Add others only when they make sense.
          </span>
        </div>
      </div>
    </section>
  );
};

export { ServiceDirectory };