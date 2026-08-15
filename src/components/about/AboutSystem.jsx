import { FiArrowRight } from "react-icons/fi";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

const disciplines = [
  {
    title: "Brand",
    accent: "var(--color-purple)",
  },
  {
    title: "Growth",
    accent: "var(--color-green)",
  },
  {
    title: "Technology",
    accent: "var(--color-accent)",
  },
  {
    title: "Automation",
    accent: "var(--color-orange)",
  },
];

const AboutSystem = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-1">
      {/* subtle background depth */}
      <div className="pointer-events-none absolute -left-40 top-[20%] h-[360px] w-[360px] bg-accent-soft/40 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[10%] h-[360px] w-[360px] bg-purple-soft/30 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* ===============================
            INTRO
        =============================== */}
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                How It Comes Together
              </span>
            </div>
          </div>

          <motion.div
            initial={{
              y: reduceMotion ? 0 : 16,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.97] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Different parts.
              <br />

              <span className="text-text-muted">
                Same direction.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
              Your brand, technology and growth should not feel like separate
              businesses. We help them work together.
            </p>
          </motion.div>
        </div>

        {/* ===============================
            MAIN VISUAL
        =============================== */}
        <div className="mt-14 md:mt-16 lg:mt-20">
          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-12">
              {/* LEFT SIDE */}
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                  Moving parts
                </span>

                <div className="mt-7 space-y-3">
                  {disciplines.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{
                        x: reduceMotion ? 0 : -14,
                      }}
                      whileInView={{
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                      }}
                      className="group flex items-center gap-4"
                    >
                      <span
                        className="h-[8px] w-[8px] shrink-0"
                        style={{
                          backgroundColor: item.accent,
                        }}
                      />

                      <span className="text-[36px] font-semibold leading-none tracking-[-0.045em] text-text-primary xl:text-[42px]">
                        {item.title}
                      </span>

                      <motion.span
                        initial={{
                          scaleX: 0.2,
                        }}
                        whileInView={{
                          scaleX: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1 + index * 0.06,
                        }}
                        className="h-px max-w-[170px] flex-1 origin-left"
                        style={{
                          backgroundColor: item.accent,
                          opacity: 0.35,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ARROW */}
              <div className="flex items-center gap-4">
                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scaleX: [0.7, 1, 0.7],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-px w-14 origin-left bg-border-strong"
                />

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          x: [0, 5, 0],
                        }
                  }
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiArrowRight className="text-[25px] text-accent" />
                </motion.div>
              </div>

              {/* RIGHT SIDE */}
              <motion.div
                initial={{
                  x: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-accent">
                  Zapmind
                </span>

                <h3 className="mt-5 max-w-[560px] text-[52px] font-semibold leading-[0.95] tracking-[-0.06em] text-text-primary xl:text-[64px]">
                  One connected
                  <br />

                  <span className="text-text-muted">
                    direction.
                  </span>
                </h3>

                <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-text-subtle">
                  One team seeing the bigger picture instead of each piece
                  being handled in isolation.
                </p>

                {/* simple accent */}
                <div className="mt-8 flex h-[3px] w-[150px]">
                  <span className="flex-1 bg-accent" />
                  <span className="flex-1 bg-purple" />
                  <span className="flex-1 bg-green" />
                  <span className="flex-1 bg-orange" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===============================
              MOBILE / TABLET
          =============================== */}
          <div className="lg:hidden">
            <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
              Moving parts
            </span>

            <div className="mt-7 space-y-4">
              {disciplines.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    x: reduceMotion ? 0 : -10,
                  }}
                  whileInView={{
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-4"
                >
                  <span
                    className="h-[7px] w-[7px]"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <span className="text-[28px] font-semibold tracking-[-0.04em] text-text-primary sm:text-[34px]">
                    {item.title}
                  </span>

                  <span
                    className="h-px flex-1"
                    style={{
                      backgroundColor: item.accent,
                      opacity: 0.25,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* downward transition */}
            <div className="my-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-border-strong" />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 4, 0],
                      }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rotate-90"
              >
                <FiArrowRight className="text-[20px] text-accent" />
              </motion.div>

              <span className="h-px flex-1 bg-border-strong" />
            </div>

            <motion.div
              initial={{
                y: reduceMotion ? 0 : 12,
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-accent">
                Zapmind
              </span>

              <h3 className="mt-4 text-[40px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[48px]">
                One connected
                <br />

                <span className="text-text-muted">
                  direction.
                </span>
              </h3>

              <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-text-subtle">
                One team seeing the bigger picture instead of each piece being
                handled in isolation.
              </p>

              <div className="mt-7 flex h-[3px] w-[130px]">
                <span className="flex-1 bg-accent" />
                <span className="flex-1 bg-purple" />
                <span className="flex-1 bg-green" />
                <span className="flex-1 bg-orange" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===============================
            SIMPLE CLOSING
        =============================== */}
        <div className="mt-16 border-t border-border-strong pt-8 md:mt-20">
          <div className="grid gap-5 md:grid-cols-[0.55fr_1.45fr] md:gap-12">
            <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
              Simply put
            </span>

            <p className="max-w-[800px] text-[25px] font-semibold leading-[1.16] tracking-[-0.035em] text-text-primary sm:text-[29px] md:text-[34px]">
              Less coordination between disconnected teams.
              <span className="text-text-muted">
                {" "}
                More focus on moving the business forward.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSystem };