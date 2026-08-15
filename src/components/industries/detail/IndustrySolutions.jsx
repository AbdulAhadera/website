import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import { industryAccent } from "../../../data/industryVisuals.js";

const IndustrySolutions = ({
  industry,
  serviceMap,
}) => {
  const accent =
    industryAccent[industry.accent] ||
    "var(--color-accent)";

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
          <div className="flex items-start gap-3">
            <span
              className="mt-[4px] h-[7px] w-[7px]"
              style={{
                backgroundColor: accent,
              }}
            />

            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-muted">
              What we can solve
            </span>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.97] tracking-[-0.052em] text-text-primary sm:text-[52px] md:text-[60px]">
              Digital systems
              <br />

              <span className="text-text-muted">
                built around the industry.
              </span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-text-subtle">
              Not a generic package. The mix changes depending on the
              operational problem.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border-strong lg:ml-[28%]">
          {industry.solutions.map(
            (solution) => (
              <div
                key={solution.id}
                className="grid gap-5 border-b border-border-strong py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"
              >
                <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-text-primary md:text-[23px]">
                  {solution.title}
                </h3>

                <div>
                  <p className="max-w-[620px] text-[14px] leading-6 text-text-subtle md:text-[15px]">
                    {solution.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {solution.serviceIds.map(
                      (serviceId) => {
                        const service =
                          serviceMap[
                            serviceId
                          ];

                        if (!service) {
                          return null;
                        }

                        return (
                          <Link
                            key={
                              serviceId
                            }
                            to={`/services/${service.slug}`}
                            className="group inline-flex items-center gap-2 text-[12px] font-semibold"
                            style={{
                              color:
                                accent,
                            }}
                          >
                            {
                              service.navTitle
                            }

                            <FiArrowUpRight className="transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                          </Link>
                        );
                      },
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-9 grid gap-5 border-y border-border-strong py-6 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
          <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
            Ideal for
          </span>

          <p className="text-[18px] font-semibold leading-7 tracking-[-0.025em] text-text-primary md:text-[21px]">
            {industry.idealFor.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export { IndustrySolutions };