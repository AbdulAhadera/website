import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const IndustriesHero = () => {
  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-12 md:px-7 md:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          {/* COPY */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-orange" />
                <span className="h-[7px] w-[7px] bg-green" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Industries
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-[850px] text-[48px] font-semibold leading-[0.93] tracking-[-0.06em] text-text-primary sm:text-[60px] md:text-[72px] xl:text-[82px]"
            >
              Different industries.
              <br />

              <span className="text-text-muted">
                Different problems.
              </span>
            </motion.h1>

            <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-text-secondary">
              We shape digital systems, growth and automation around how the
              business actually works.
            </p>

            <a
              href="#industry-directory"
              className="group mt-8 inline-flex items-center gap-3 text-[14px] font-semibold text-text-primary"
            >
              Explore industries

              <FiArrowDown className="transition-transform duration-150 group-hover:translate-y-[2px]" />
            </a>
          </div>

          {/* VISUAL */}
          <div className="relative h-[390px] overflow-hidden md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=88"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/75 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
                One digital partner
              </span>

              <p className="mt-3 max-w-[520px] text-[26px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[34px]">
                Understand the operation before choosing the solution.
              </p>
            </div>

            <span className="absolute left-0 top-0 h-[5px] w-[34%] bg-accent" />
            <span className="absolute right-0 top-0 h-[5px] w-[18%] bg-purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { IndustriesHero };