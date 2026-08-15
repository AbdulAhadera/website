import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import { getServiceAccent } from "../../../data/serviceDetailVisuals.js";

const ServiceCapabilities = ({ service, image }) => {
  const accent = getServiceAccent(service);

  const capabilities = service.subServices
    .filter((item) => item.featured)
    .slice(0, 5);

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-bg-1"
    >
      <div className="grid-light pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-7 lg:grid-cols-[0.38fr_1.62fr] lg:gap-16">
          <span
            className="text-[12px] font-semibold uppercase tracking-[0.13em]"
            style={{ color: accent }}
          >
            Capabilities
          </span>

          <div>
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[62px]">
              What the work
              <span className="text-text-muted">
                {" "}
                can actually include.
              </span>
            </h2>

            <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-text-subtle">
              Start with the capability that matters now. Expand only when the
              problem asks for more.
            </p>
          </div>
        </div>

        {/* VISUAL + CAPABILITIES */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* IMAGE */}
          <div className="relative h-[450px] overflow-hidden md:h-[560px]">
            <img
              src={image}
              alt={`${service.title} capability`}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/85 via-transparent to-transparent" />

            <div
              className="absolute left-0 top-0 h-[4px] w-[35%]"
              style={{
                backgroundColor: accent,
              }}
            />

            <div className="absolute bottom-7 left-7 right-7">
              <span
                className="text-[12px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: accent,
                }}
              >
                Start with what you need
              </span>

              <p className="mt-3 max-w-[500px] text-[29px] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[36px]">
                One capability.
                <br />

                <span className="text-white/50">
                  Or the right combination.
                </span>
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <div className="border-t border-border-strong">
              {capabilities.map((item) => (
                <Link
                  key={item.id}
                  to="/contact"
                  className="group flex min-h-[86px] items-center justify-between gap-6 border-b border-border-strong py-6"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="h-[7px] w-[7px] shrink-0 transition-transform duration-150 group-hover:scale-125"
                      style={{
                        backgroundColor: accent,
                      }}
                    />

                    <span className="text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-text-primary transition-transform duration-150 group-hover:translate-x-[3px] md:text-[24px]">
                      {item.title}
                    </span>
                  </div>

                  <FiArrowUpRight
                    className="shrink-0 text-[18px] text-text-muted transition-all duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-text-primary"
                  />
                </Link>
              ))}
            </div>

            {/* SUPPORTING */}
            {service.supportingCapabilities?.length > 0 && (
              <div className="pt-7">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                  Also available
                </span>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
                  {service.supportingCapabilities.map((item, index) => (
                    <Link
                      key={item}
                      to="/contact"
                      className="group inline-flex items-center gap-3 text-[14px] font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
                    >
                      {item}

                      <FiArrowUpRight className="text-[13px] opacity-0 transition-all duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:opacity-100" />

                      {index !==
                        service.supportingCapabilities.length - 1 && (
                        <span
                          className="ml-1 h-[4px] w-[4px]"
                          style={{
                            backgroundColor: accent,
                          }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* META */}
        <div className="mt-12 flex flex-col gap-4 border-y border-border-strong py-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[13px] text-text-subtle">
            {service.idealCustomers.slice(0, 4).join(" · ")}
          </p>

          <p className="text-[13px] font-semibold text-text-secondary">
            {service.tools.slice(0, 6).join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export { ServiceCapabilities };