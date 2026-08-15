import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

const services = [
  "Web Design & Development",
  "Digital Marketing",
  "Social Media",
  "Branding",
  "E-Commerce",
  "Software & Apps",
  "AI & Automation",
];

const visualWords = [
  {
    word: "DESIGN",
    label: "Shape",
    accent: "var(--color-purple)",
    align: "justify-start",
    offset: "lg:-translate-x-3",
  },
  {
    word: "BUILD",
    label: "Create",
    accent: "var(--color-accent)",
    align: "justify-end",
    offset: "lg:translate-x-3",
  },
  {
    word: "GROW",
    label: "Move",
    accent: "var(--color-green)",
    align: "justify-start",
    offset: "lg:translate-x-10",
  },
];

const ServiceHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-1 lg:h-[calc(100svh-72px)] lg:min-h-[640px]">
      {/* Background */}
      <div className="grid-light pointer-events-none absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-accent-soft/45 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-soft/35 blur-[150px]" />

      <div className="relative mx-auto flex h-full w-full max-w-[1500px] flex-col px-5 py-10 md:px-7 lg:px-8 lg:py-7">
        {/* MAIN */}
        <div className="grid min-h-0 flex-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="flex items-center gap-3"
            >
              <div className="flex gap-1">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Service
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-[790px] text-[50px] font-semibold leading-[0.92] tracking-[-0.06em] text-text-primary sm:text-[62px] md:text-[72px] xl:text-[84px]"
            >
              Digital work
              <br />
              that moves
              <span
                className="ml-[0.18em] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--color-accent), var(--color-purple), var(--color-pink))",
                }}
              >
                forward.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.1,
              }}
              className="mt-7 max-w-[480px] text-[16px] leading-7 text-text-subtle"
            >
              Design it. Build it. Grow it.
            </motion.p>

            <a
              href="#service-directory"
              className="group mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:text-accent"
            >
              Explore services

              <FiArrowDown className="transition-transform duration-150 group-hover:translate-y-1" />
            </a>
          </div>

          {/* RIGHT — TYPOGRAPHIC VISUAL */}
          <div className="relative mx-auto flex h-[400px] w-full max-w-[680px] flex-col justify-center md:h-[480px] lg:h-[500px]">
            {/* HUGE BACKGROUND TEXT */}
            <span className="pointer-events-none absolute right-0 top-[4%] select-none text-[90px] font-bold leading-none tracking-[-0.08em] text-text-primary/[0.025] md:text-[125px] xl:text-[150px]">
              DIGITAL
            </span>

            {/* vertical line */}
            <div className="pointer-events-none absolute bottom-[10%] left-1/2 top-[10%] w-px bg-border-light" />

            {/* horizontal line */}
            <div className="pointer-events-none absolute left-[5%] right-[5%] top-1/2 h-px bg-border-light" />

            <div className="relative z-10 flex flex-col gap-1">
              {visualWords.map((item, index) => (
                <motion.div
                  key={item.word}
                  initial={{
                    opacity: 0,
                    x: reduceMotion
                      ? 0
                      : index % 2 === 0
                        ? -28
                        : 28,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex ${item.align} ${item.offset}`}
                >
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x:
                              index === 0
                                ? [0, 6, 0]
                                : index === 1
                                  ? [0, -6, 0]
                                  : [0, 5, 0],
                          }
                    }
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="group relative"
                  >
                    {/* small label */}
                    <div
                      className={`absolute ${
                        index === 1
                          ? "-left-16 top-1/2 -translate-y-1/2"
                          : "-right-14 top-1/2 -translate-y-1/2"
                      } hidden items-center gap-2 md:flex`}
                    >
                      <span
                        className="h-[6px] w-[6px] rounded-full"
                        style={{
                          backgroundColor: item.accent,
                        }}
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                        {item.label}
                      </span>
                    </div>

                    {/* word */}
                    <span
                      className="block text-[64px] font-semibold leading-[0.88] tracking-[-0.075em] sm:text-[82px] md:text-[100px] lg:text-[92px] xl:text-[108px]"
                      style={{
                        color:
                          index === 1
                            ? item.accent
                            : "var(--color-text-primary)",
                      }}
                    >
                      {item.word}
                    </span>

                    {/* accent line */}
                    <motion.span
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.08,
                      }}
                      className="mt-2 block h-[3px] origin-left"
                      style={{
                        width:
                          index === 0
                            ? "52%"
                            : index === 1
                              ? "70%"
                              : "45%",
                        backgroundColor: item.accent,
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* small ending detail */}
            <div className="absolute bottom-[5%] right-[2%] flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-[6px] w-[6px] bg-purple" />
                <span className="h-[6px] w-[6px] bg-accent" />
                <span className="h-[6px] w-[6px] bg-green" />
              </div>

              <span className="text-[11px] font-medium text-text-muted">
                One connected digital partner
              </span>
            </div>
          </div>
        </div>

        {/* SERVICES — SINGLE LINE */}
        <div
          id="service-directory"
          className="border-y border-border-strong"
        >
          <div
            className="
              flex items-center gap-7 overflow-x-auto py-5
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              lg:justify-between
            "
          >
            {services.map((service, index) => (
              <div
                key={service}
                className="flex shrink-0 items-center gap-7"
              >
                <a
                  href={`#service-${index}`}
                  className="group flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-text-secondary transition-colors duration-150 hover:text-accent"
                >
                  {service}

                  <FiArrowUpRight className="text-[12px] opacity-0 transition-all duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100" />
                </a>

                {index !== services.length - 1 && (
                  <span className="h-[5px] w-[5px] rounded-full bg-border-strong" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between pt-4 text-[12px] text-text-muted">
          <span>Everything you need to move digitally.</span>

          <span className="hidden sm:block">
            Continue ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export { ServiceHero };