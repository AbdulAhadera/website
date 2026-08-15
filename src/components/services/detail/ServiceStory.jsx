import { FiArrowRight } from "react-icons/fi";

import { getServiceAccent } from "../../../data/serviceDetailVisuals.js";

const ServiceStory = ({ service }) => {
  const accent = getServiceAccent(service);

  const problems = service.problems.slice(0, 3);
  const outcomes = service.outcomes.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-bg-dark">
      <div className="grid-dark pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
        {/* INTRO */}
        <div className="grid gap-7 lg:grid-cols-[0.38fr_1.62fr] lg:gap-16">
          <span
            className="text-[12px] font-semibold uppercase tracking-[0.13em]"
            style={{ color: accent }}
          >
            Why it matters
          </span>

          <h2 className="max-w-[950px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-[52px] md:text-[62px]">
            Less friction.
            <br />

            <span className="text-white/30">
              More forward movement.
            </span>
          </h2>
        </div>

        {/* TRANSFORMATION */}
        <div className="mt-14 lg:ml-[24%]">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
            >
              <p className="text-[20px] font-semibold tracking-[-0.03em] text-white/42 md:text-[25px]">
                {problem}
              </p>

              <FiArrowRight
                className="hidden text-[20px] md:block"
                style={{ color: accent }}
              />

              <p className="text-[20px] font-semibold tracking-[-0.03em] text-white md:text-[25px]">
                {outcomes[index]}
              </p>
            </div>
          ))}

          <div className="border-t border-white/10 pt-6">
            <p className="max-w-[660px] text-[14px] leading-6 text-white/42">
              Start with the problem. Build only what creates a meaningful
              improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServiceStory };