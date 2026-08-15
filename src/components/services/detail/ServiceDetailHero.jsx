import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";

import { Button } from "../../common/Button.jsx";
import { getServiceAccent } from "../../../data/serviceDetailVisuals.js";

const ServiceDetailHero = ({ service, image }) => {
  const accent = getServiceAccent(service);

  return (
    <section className="relative overflow-hidden bg-bg-1">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-10 md:px-7 lg:px-8">
        <div className="grid gap-10 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
          {/* COPY */}
          <div className="relative z-10 py-5 lg:py-10">
            <div className="flex items-center gap-3">
              <Link
                to="/services"
                className="text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted"
              >
                Services
              </Link>

              <span
                className="h-[6px] w-[6px]"
                style={{ backgroundColor: accent }}
              />

              <span
                className="text-[12px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: accent }}
              >
                {service.navTitle}
              </span>
            </div>

            <h1 className="mt-7 max-w-[720px] text-[47px] font-semibold leading-[0.92] tracking-[-0.06em] text-text-primary sm:text-[60px] lg:text-[72px] xl:text-[80px]">
              {service.title}
            </h1>

            <p className="mt-6 max-w-[570px] text-[16px] leading-7 text-text-secondary">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button to="/contact">
                Start a Project
              </Button>

              <a
                href="#capabilities"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-text-primary"
              >
                Explore capabilities

                <FiArrowDown className="transition-transform duration-150 group-hover:translate-y-[3px]" />
              </a>
            </div>

            {/* OUTCOMES */}
            <div className="mt-10 flex max-w-[620px] flex-wrap gap-x-7 gap-y-3 border-t border-border-strong pt-5">
              {service.outcomes.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-[13px] font-medium text-text-subtle"
                >
                  <span
                    className="h-[5px] w-[5px]"
                    style={{ backgroundColor: accent }}
                  />

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative h-[480px] overflow-hidden md:h-[610px] lg:h-[calc(100svh-150px)] lg:max-h-[720px]">
            <img
              src={image}
              alt={`${service.title} visual`}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/55 via-transparent to-transparent" />

            <div
              className="absolute right-0 top-0 h-[35%] w-[4px]"
              style={{ backgroundColor: accent }}
            />

            <div className="absolute bottom-7 left-7 right-7">
              <p className="max-w-[500px] text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[34px]">
                Make the digital experience
                <span className="text-white/55"> work harder.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServiceDetailHero };