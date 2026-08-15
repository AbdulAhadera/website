import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import Icon from "../../assets/IconBlack.png";

const disciplines = [
  {
    label: "Strategy",
    position: "left-[4%] top-[22%]",
    accent: "var(--color-accent)",
  },
  {
    label: "Creative",
    position: "right-[2%] top-[27%]",
    accent: "var(--color-purple)",
  },
  {
    label: "Technology",
    position: "left-[5%] bottom-[22%]",
    accent: "var(--color-cyan)",
  },
  {
    label: "Growth",
    position: "right-[5%] bottom-[20%]",
    accent: "var(--color-green)",
  },
];

const AboutHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg-1">
      {/* BACKGROUND DEPTH */}
      <div className="pointer-events-none absolute -left-44 top-[5%] h-[420px] w-[420px] bg-accent-soft/45 blur-[150px]" />

      <div className="pointer-events-none absolute -right-44 bottom-[5%] h-[420px] w-[420px] bg-purple-soft/35 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-14 md:px-7 md:py-18 lg:px-8 lg:py-20 xl:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* =========================
              LEFT
          ========================= */}
          <div>
            <motion.div
              initial={{
                y: reduceMotion ? 0 : 10,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-purple" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                About Zapmind
              </span>
            </motion.div>

            <motion.h1
              initial={{
                y: reduceMotion ? 0 : 18,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-[820px] text-[49px] font-semibold leading-[0.94] tracking-[-0.06em] text-text-primary sm:text-[62px] md:text-[72px] xl:text-[84px]"
            >
              Digital should feel
              <br />

              {/* GRADIENT WORD */}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--color-accent) 0%, var(--color-purple) 52%, var(--color-pink) 100%)",
                }}
              >
                s
                {/* CUSTOM I */}
                <span className="relative inline-block">
                  i

                  {/* DIFFERENT COLORED DOT */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[12px] top-[0.09em]  z-10 h-[0.160em] w-[0.160em] -translate-x-1/2 rounded-full bg-amber-500"
                  />
                </span>
                mpler.
              </span>
            </motion.h1>

            <motion.div
              initial={{
                y: reduceMotion ? 0 : 12,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7"
            >
              <p className="max-w-[560px] text-[16px] leading-7 text-text-subtle md:text-[17px]">
                We bring strategy, creative, technology and growth together
                so businesses can move with less friction.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:text-accent"
              >
                Start a conversation

                <FiArrowUpRight className="text-[17px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
            </motion.div>
          </div>

          {/* =========================
              VISUAL
          ========================= */}
          <motion.div
            initial={{
              scale: reduceMotion ? 1 : 0.97,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto aspect-square w-full max-w-[570px]"
          >
            {/* OUTER ORBIT */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[7%] rounded-full border border-border-strong"
            >
              <span className="absolute left-1/2 top-[-5px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-accent" />

              <span className="absolute bottom-[18%] right-[3%] h-[7px] w-[7px] rounded-full bg-purple" />
            </motion.div>

            {/* MIDDLE ORBIT */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[20%] rounded-full border border-border-light"
            >
              <span className="absolute left-[3%] top-[28%] h-[7px] w-[7px] rounded-full bg-green" />

              <span className="absolute bottom-[7%] left-[62%] h-[6px] w-[6px] rounded-full bg-cyan" />
            </motion.div>

            {/* CROSS LINES */}
            <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-border-light" />

            <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-border-light" />

            {/* DIAGONAL LINES */}
            <div className="absolute left-1/2 top-1/2 h-px w-[72%] origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 bg-border-light" />

            <div className="absolute left-1/2 top-1/2 h-px w-[72%] origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-border-light" />

            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.035, 1],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-[125px] w-[125px] items-center justify-center rounded-full bg-bg-1 shadow-[0_0_0_1px_var(--color-border-strong),0_20px_60px_rgba(7,17,31,0.08)] md:h-[150px] md:w-[150px]"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={Icon}
                    alt=""
                    className="h-9 w-auto object-contain md:h-11"
                  />
                </div>

                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.25, 0.8, 0.25],
                        }
                  }
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-[4px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-accent"
                />
              </motion.div>
            </div>

            {/* DISCIPLINE LABELS */}
            {disciplines.map((item, index) => (
              <motion.div
                key={item.label}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 4 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className={`absolute z-20 ${item.position}`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-[7px] w-[7px] rounded-full"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-secondary sm:text-[13px]">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* MOVING SIGNAL */}
            {!reduceMotion && (
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[13%]"
              >
                <span className="absolute left-1/2 top-0 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-orange" />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-border-strong pt-6 md:mt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[13px] font-medium text-text-subtle">
              One team. One direction.
            </span>

            <span className="text-[13px] font-medium text-text-muted">
              Strategy · Creative · Technology · Growth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };