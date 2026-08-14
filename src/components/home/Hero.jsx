import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import heroOrbit from "../../assets/service-hero-orbit.png";

import { Button } from "../common/Button.jsx";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-bg-dark text-text-inverse xl:h-[calc(100svh-72px)]">
      {/* GLOBAL GRID */}
      <div className="grid-dark pointer-events-none absolute inset-0" />

      {/* BACKGROUND COLOR DEPTH */}
      <div className="pointer-events-none absolute -left-24 top-[14%] h-[360px] w-[360px] bg-accent/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[4%] top-[8%] h-[320px] w-[320px] bg-purple/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-140px] right-[28%] h-[300px] w-[300px] bg-green/[0.07] blur-[110px]" />

      {/* BACKGROUND WORDMARK */}
      <div className="pointer-events-none absolute bottom-[-3vw] left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[13vw] font-bold leading-none tracking-[-0.08em] text-text-inverse/[0.018] xl:block">
        ZAPMIND
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col px-5 md:px-7 lg:px-8 xl:h-full">
        {/* TOP META */}
        <div className="flex shrink-0 items-center justify-between border-x border-text-inverse/[0.07] px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex gap-[3px]">
              <span className="h-[6px] w-[6px] bg-accent" />
              <span className="h-[6px] w-[6px] bg-purple" />
              <span className="h-[6px] w-[6px] bg-green" />
              <span className="h-[6px] w-[6px] bg-yellow" />
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-[0.19em] text-text-inverse/40 sm:text-[10px]">
              Full-Service Digital Agency
            </span>
          </div>

          <div className="hidden items-center gap-2 text-[10px] text-text-inverse/35 md:flex">
            <span className="h-[5px] w-[5px] bg-green" />
            Websites to AI — one team
          </div>
        </div>

        {/* MAIN HERO */}
        <div className="grid flex-1 border-x border-t border-text-inverse/[0.07] xl:min-h-0 xl:grid-cols-[1.08fr_0.92fr]">
          {/* LEFT */}
          <div className="flex flex-col justify-center border-b border-text-inverse/[0.07] px-5 py-14 sm:py-16 md:px-8 xl:min-h-0 xl:border-b-0 xl:border-r xl:py-8 2xl:py-12">
            <div>
              {/* EYEBROW */}
              <div className="mb-7 flex items-center gap-3 xl:mb-6">
                <span className="h-px w-8 bg-accent" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-inverse/40">
                  Digital. Connected. Built to grow.
                </span>
              </div>

              {/* HEADING */}
              <h1 className="max-w-[820px] text-[50px] font-semibold leading-[0.92] tracking-[-0.06em] text-text-inverse sm:text-[64px] md:text-[76px] lg:text-[82px] xl:text-[72px] 2xl:text-[88px]">
                We build the
                <br />

                <span className="text-text-inverse/35">
                  digital side
                </span>

                <br />

                of your business.
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[600px] text-[15px] leading-7 text-text-inverse/50 sm:text-[16px] xl:mt-6 xl:max-w-[560px]">
                Websites, branding, marketing, e-commerce, software and AI
                solutions — designed as one connected system instead of
                disconnected services.
              </p>

              {/* ACTIONS */}
              <div className="mt-8 flex flex-wrap items-center gap-5 xl:mt-7">
                <Button to="/contact">
                  Start a Project
                </Button>

                <Link
                  to="/work"
                  className="group flex h-[46px] items-center gap-3 px-1 text-[13px] font-semibold text-text-inverse/65 transition-colors duration-150 hover:text-text-inverse"
                >
                  Explore our work

                  <FiArrowRight className="text-[15px] transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-5 py-12 sm:min-h-[600px] md:px-8 xl:min-h-0 xl:py-8">
            {/* LOCAL GRID */}
            <div className="grid-dark-small pointer-events-none absolute inset-0" />

            {/* ORBIT */}
            <img
              src={heroOrbit}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 w-[620px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40 sm:w-[720px] xl:w-[650px] 2xl:w-[760px]"
            />

            {/* VISUAL */}
            <div className="relative z-10 w-full max-w-[540px] xl:max-w-[500px] 2xl:max-w-[540px]">
              {/* MAIN PANEL */}
              <div className="relative border border-text-inverse/[0.12] bg-surface-dark/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                {/* TOP LEFT */}
                <span className="absolute left-0 top-0 h-[24px] w-[2px] bg-white/20" />
                <span className="absolute left-0 top-0 h-[2px] w-[24px] bg-white/20" />

                {/* TOP RIGHT */}
                <span className="absolute right-0 top-0 h-[24px] w-[2px] bg-white/20" />
                <span className="absolute right-0 top-0 h-[2px] w-[24px] bg-white/20" />

                {/* BOTTOM RIGHT */}
                <span className="absolute bottom-0 right-0 h-[24px] w-[2px] bg-white/20" />
                <span className="absolute bottom-0 right-0 h-[2px] w-[24px] bg-white/20" />

                {/* BOTTOM LEFT */}
                <span className="absolute bottom-0 left-0 h-[24px] w-[2px] bg-white/20" />
                <span className="absolute bottom-0 left-0 h-[2px] w-[24px] bg-white/20" />

                {/* PANEL HEADER */}
                <div className="flex items-center justify-between border-b border-text-inverse/[0.08] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-7 w-7 place-items-center border border-text-inverse/10 bg-text-inverse/[0.04]">
                      <span className="h-2 w-2 bg-accent" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-text-inverse/80">
                        Your digital business
                      </p>

                      <p className="mt-0.5 text-[8px] uppercase tracking-[0.13em] text-text-inverse/25">
                        Connected by Zapmind
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[9px] text-text-inverse/30">
                    <span className="h-[5px] w-[5px] bg-green" />
                    Active
                  </div>
                </div>

                {/* PANEL CONTENT */}
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    <SystemTile
                      number="01"
                      title="Website"
                      description="Built to convert"
                      accentClass="bg-accent"
                    />

                    <SystemTile
                      number="02"
                      title="Brand"
                      description="Built to stand out"
                      accentClass="bg-purple"
                    />

                    <SystemTile
                      number="03"
                      title="Growth"
                      description="Built to acquire"
                      accentClass="bg-green"
                    />

                    <SystemTile
                      number="04"
                      title="Commerce"
                      description="Built to sell"
                      accentClass="bg-orange"
                    />

                    <SystemTile
                      number="05"
                      title="Software"
                      description="Built to operate"
                      accentClass="bg-cyan"
                    />

                    <SystemTile
                      number="06"
                      title="AI"
                      description="Built to automate"
                      accentClass="bg-purple"
                    />
                  </div>

                  {/* CONNECTED FLOW */}
                  <div className="mt-3 border border-text-inverse/[0.08] bg-text-inverse/[0.025] p-4">
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-text-inverse/30">
                          Connected system
                        </p>

                        <p className="mt-1 text-[12px] font-medium text-text-inverse/75">
                          One team. One direction.
                        </p>
                      </div>

                      <div className="hidden items-center sm:flex">
                        <span className="h-[7px] w-[7px] bg-accent" />
                        <span className="h-px w-5 bg-text-inverse/15" />

                        <span className="h-[7px] w-[7px] bg-purple" />
                        <span className="h-px w-5 bg-text-inverse/15" />

                        <span className="h-[7px] w-[7px] bg-green" />
                        <span className="h-px w-5 bg-text-inverse/15" />

                        <span className="h-[7px] w-[7px] bg-yellow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING TOP */}
              <div className="absolute -right-2 -top-8 hidden w-[180px] border border-text-inverse/10 bg-surface-dark-2/95 p-3 shadow-2xl backdrop-blur-xl sm:block xl:-right-5 2xl:-right-10">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-text-inverse/30">
                    Strategy
                  </span>

                  <FiArrowUpRight className="text-[12px] text-purple" />
                </div>

                <p className="mt-2 text-[11px] font-medium leading-4 text-text-inverse/75">
                  Every channel working toward the same goal.
                </p>
              </div>

              {/* FLOATING BOTTOM */}
              <div className="absolute -bottom-8 -left-2 hidden w-[190px] border border-text-inverse/10 bg-surface-dark-2/95 p-3 shadow-2xl backdrop-blur-xl sm:block xl:-left-5 2xl:-left-10">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[6px] w-[6px] bg-green" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-text-inverse/30">
                    Built to scale
                  </span>
                </div>

                <p className="text-[11px] leading-4 text-text-inverse/65">
                  From first launch to smarter operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SystemTile = ({
  number,
  title,
  description,
  accentClass,
}) => {
  return (
    <div className="group relative min-h-[100px] overflow-hidden border border-text-inverse/[0.08] bg-text-inverse/[0.025] p-3 transition-colors duration-150 hover:bg-text-inverse/[0.045]">
      <span
        className={`absolute left-0 top-0 h-[2px] w-7 ${accentClass}`}
      />

      <div className="flex h-full flex-col justify-between">
        <span className="text-[8px] font-medium text-text-inverse/20">
          {number}
        </span>

        <div>
          <p className="text-[11px] font-semibold text-text-inverse/80">
            {title}
          </p>

          <p className="mt-1 text-[9px] leading-4 text-text-inverse/30">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Hero };