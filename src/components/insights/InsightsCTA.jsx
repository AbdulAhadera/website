import { Button } from "../common/Button.jsx";

const InsightsCTA = () => {
  return (
    <section className="relative overflow-hidden bg-bg-2">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-14 md:px-7 md:py-16 lg:px-8">
        <div className="flex flex-col gap-8 border-y border-border-strong py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">From thinking to doing</span>

            <h2 className="mt-4 max-w-[760px] text-[38px] font-semibold leading-[0.97] tracking-[-0.05em] text-text-primary sm:text-[46px] md:text-[52px]">
              Have a problem worth
              <span className="text-text-muted"> solving?</span>
            </h2>
          </div>

          <div className="shrink-0">
            <Button to="/contact">Start a Conversation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { InsightsCTA }; 