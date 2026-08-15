import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    label: "Brand",
    accent: "var(--color-purple)",
  },
  {
    label: "Web",
    accent: "var(--color-accent)",
  },
  {
    label: "Growth",
    accent: "var(--color-green)",
  },
  {
    label: "Software",
    accent: "var(--color-cyan)",
  },
  {
    label: "AI",
    accent: "var(--color-orange)",
  },
];

const images = {
  main:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85",

  design:
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85",

  technology:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
};

const ServiceBlend = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-1">
      {/* subtle grid */}
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-7 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div className="flex items-start gap-3">
            <div className="flex gap-1">
              <span className="h-[7px] w-[7px] bg-accent" />
              <span className="h-[7px] w-[7px] bg-purple" />
              <span className="h-[7px] w-[7px] bg-green" />
            </div>

            <span
              className="text-[12px] font-bold uppercase tracking-[0.14em]"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Built Around You
            </span>
          </div>

          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-[52px] md:text-[60px] xl:text-[68px]"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Different problems need
            <br />

            <span
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              different combinations.
            </span>
          </motion.h2>
        </div>

        {/* IMAGE COMPOSITION */}
        <div className="relative mt-12 md:mt-16 lg:h-[620px]">
          {/* MAIN IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[420px] overflow-hidden md:h-[520px] lg:absolute lg:left-0 lg:top-0 lg:h-[560px] lg:w-[67%]"
          >
            <motion.img
              src={images.main}
              alt="Team working together"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.02, 1],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/75 via-bg-dark/10 to-transparent" />

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-inverse/75">
                Start here
              </span>

              <p className="mt-2 max-w-[500px] text-[26px] font-semibold leading-[1.08] tracking-[-0.04em] text-text-inverse md:text-[34px]">
                Start with what the business actually needs.
              </p>
            </div>
          </motion.div>

          {/* DESIGN IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: 0.06,
            }}
            className="relative mt-4 ml-auto h-[260px] w-[82%] overflow-hidden md:h-[320px] md:w-[60%] lg:absolute lg:right-0 lg:top-[70px] lg:mt-0 lg:h-[330px] lg:w-[38%]"
          >
            <img
              src={images.design}
              alt="Digital design process"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-bg-dark/15" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <span className="h-[7px] w-[7px] bg-purple" />

              <span className="text-[12px] font-bold uppercase tracking-[0.13em] text-text-inverse">
                Shape
              </span>
            </div>
          </motion.div>

          {/* TECHNOLOGY IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="relative -mt-8 h-[240px] w-[72%] overflow-hidden md:-mt-14 md:h-[280px] md:w-[48%] lg:absolute lg:bottom-0 lg:right-[7%] lg:mt-0 lg:h-[270px] lg:w-[32%]"
          >
            <img
              src={images.technology}
              alt="Software and technology development"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/65 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <span className="h-[7px] w-[7px] bg-cyan" />

              <span className="text-[12px] font-bold uppercase tracking-[0.13em] text-text-inverse">
                Build
              </span>
            </div>
          </motion.div>
        </div>

        {/* APPROACH */}
        <div className="mt-12 grid gap-6 border-t border-border-strong pt-9 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.14em]"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            The Approach
          </span>

          <p
            className="max-w-[900px] text-[28px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[34px] md:text-[40px]"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Use what helps.{" "}

            <span
              style={{
                color: "var(--color-red)",
              }}
            >
              Leave out what doesn&apos;t.
            </span>
          </p>
        </div>

        {/* CAPABILITY STRIP */}
        <div className="mt-9 border-y border-border-strong bg-bg-1">
          <div
            className="
              flex items-center gap-8 overflow-x-auto py-6
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              lg:justify-between
            "
          >
            {capabilities.map((item, index) => (
              <div
                key={item.label}
                className="flex shrink-0 items-center gap-8"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-[8px] w-[8px] shrink-0"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <span
                    className="whitespace-nowrap text-[15px] font-semibold"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.label}
                  </span>
                </div>

                {index !== capabilities.length - 1 && (
                  <span
                    className="text-[17px] font-medium"
                    style={{
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    +
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* END */}
        <div className="mt-6 flex items-center gap-3">
          <span className="h-[7px] w-[7px] bg-green" />

          <span
            className="text-[13px] font-medium"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            The mix changes. The goal stays clear.
          </span>
        </div>
      </div>
    </section>
  );
};

export { ServiceBlend };