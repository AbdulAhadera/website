import { Button } from "../../common/Button.jsx";
import { getServiceAccent } from "../../../data/serviceDetailVisuals.js";

const ServiceDetailCTA = ({ service }) => {
  const accent = getServiceAccent(service);

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_1.62fr] lg:gap-16">
          <div>
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.13em]"
              style={{ color: accent }}
            >
              Your move
            </span>
          </div>

          <div>
            <h2 className="max-w-[1050px] text-[44px] font-semibold leading-[0.94] tracking-[-0.058em] text-text-primary sm:text-[56px] md:text-[68px] lg:text-[76px]">
              Bring us the problem.
              <br />

              <span className="text-text-muted">
                We&apos;ll find the way forward.
              </span>
            </h2>

            <div className="mt-9 flex flex-col gap-7 border-t border-border-strong pt-7 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[560px] text-[15px] leading-7 text-text-subtle">
                No finished brief required. Tell us what&apos;s not working or
                what you want to improve.
              </p>

              <Button
                to="/contact"
                className="shrink-0"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex h-[4px] w-full">
          <span className="flex-1 bg-accent" />
          <span className="flex-1 bg-purple" />
          <span className="flex-1 bg-pink" />
          <span className="flex-1 bg-green" />
        </div>
      </div>
    </section>
  );
};

export { ServiceDetailCTA };