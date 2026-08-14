import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronDown,
} from "react-icons/fi";

import { servicesData } from "../../data/servicesData.js";

import healthcareImage from "../../assets/industries/healthcare.jfif";
import financeImage from "../../assets/industries/finance.jfif";
import logisticsImage from "../../assets/industries/logistics.png";
import professionalServicesImage from "../../assets/industries/professional-services.png";
import manufacturingImage from "../../assets/industries/manufacturing.png";
import realEstateImage from "../../assets/industries/real-estate.png";

import { Button } from "../common/Button.jsx";

const serviceStyles = {
  "website-design-development": {
    accentClass: "bg-accent",
    textClass: "text-accent",
    softClass: "bg-accent-soft",
  },

  "branding-creative-design": {
    accentClass: "bg-purple",
    textClass: "text-purple",
    softClass: "bg-purple-soft",
  },

  "digital-marketing-growth": {
    accentClass: "bg-green",
    textClass: "text-green",
    softClass: "bg-green-soft",
  },

  "social-media-management": {
    accentClass: "bg-pink",
    textClass: "text-pink",
    softClass: "bg-pink-soft",
  },

  "ecommerce-solutions": {
    accentClass: "bg-orange",
    textClass: "text-orange",
    softClass: "bg-orange-soft",
  },

  "software-app-development": {
    accentClass: "bg-cyan",
    textClass: "text-cyan",
    softClass: "bg-cyan-soft",
  },

  "ai-automation-solutions": {
    accentClass: "bg-purple",
    textClass: "text-purple",
    softClass: "bg-purple-soft",
  },
};

const mobileIndustries = [
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries/healthcare",
    image: healthcareImage,
  },
  {
    id: "fintech-financial-services",
    title: "FinTech & Finance",
    href: "/industries/fintech-financial-services",
    image: financeImage,
  },
  {
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    href: "/industries/logistics-supply-chain",
    image: logisticsImage,
  },
  {
    id: "professional-services",
    title: "Professional Services",
    href: "/industries/professional-services",
    image: professionalServicesImage,
  },
  {
    id: "construction-manufacturing",
    title: "Construction & Manufacturing",
    href: "/industries/construction-manufacturing",
    image: manufacturingImage,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    href: "/industries/real-estate",
    image: realEstateImage,
  },
  {
    id: "warehousing",
    title: "Warehousing",
    href: "/industries/warehousing",
    image: logisticsImage,
  },
];

const MobileMenu = ({
  open,
  onClose,
}) => {
  const location = useLocation();

  const [activeAccordion, setActiveAccordion] = useState(null);

  const servicesOpen = activeAccordion === "services";
  const industriesOpen = activeAccordion === "industries";

  const handleAccordion = (name) => {
    setActiveAccordion((current) =>
      current === name
        ? null
        : name,
    );
  };

  const handleNavigate = () => {
    setActiveAccordion(null);

    if (onClose) {
      onClose();
    }
  };

  /*
   * Reset accordion after the actual mobile menu
   * finishes closing.
   *
   * target/currentTarget check prevents child transitions
   * from triggering this.
   */
  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (!open && activeAccordion !== null) {
      setActiveAccordion(null);
    }
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`fixed inset-x-0 bottom-0 top-[72px] z-[90] bg-surface transition-[opacity,transform,visibility] duration-150 ease-out xl:hidden ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-[4px] opacity-0"
      }`}
    >
      <div className="h-full overflow-y-auto overscroll-contain">
        <div className="px-4 pb-7 pt-2 sm:px-5">
          {/* SERVICES */}
          <div className="border-t border-border-light">
            <button
              type="button"
              onClick={() => handleAccordion("services")}
              className="flex w-full items-center justify-between py-3.5"
              aria-expanded={servicesOpen}
            >
              <span
                className={`text-[17px] font-semibold tracking-[-0.03em] transition-colors duration-150 ${
                  servicesOpen
                    ? "text-accent"
                    : "text-text-primary"
                }`}
              >
                Services
              </span>

              <FiChevronDown
                className={`text-[16px] transition-all duration-150 ${
                  servicesOpen
                    ? "rotate-180 text-accent"
                    : "text-text-muted"
                }`}
              />
            </button>

            {/* SERVICES ACCORDION */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-150 ease-out ${
                servicesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-2 gap-1 pb-3">
                  {servicesData.map((service, index) => {
                    const styles =
                      serviceStyles[service.id] ||
                      serviceStyles["website-design-development"];

                    return (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={handleNavigate}
                        style={{
                          transitionDelay: servicesOpen
                            ? `${index * 10}ms`
                            : "0ms",
                        }}
                        className={`group relative flex min-h-[62px] flex-col justify-between overflow-hidden p-3 transition-[opacity,transform] duration-150 ease-out ${styles.softClass} ${
                          servicesOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-[3px] opacity-0"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`h-[5px] w-5 ${styles.accentClass}`}
                          />

                          <span className="text-[8px] font-semibold text-text-muted">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="mt-3 flex items-end justify-between gap-2">
                          <h3 className="max-w-[120px] text-[11px] font-semibold leading-[1.15] tracking-[-0.015em] text-text-primary sm:text-[12px]">
                            {service.navTitle || service.title}
                          </h3>

                          <FiArrowUpRight
                            className={`shrink-0 text-[13px] ${styles.textClass}`}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  to="/services"
                  onClick={handleNavigate}
                  className="mb-3 flex h-[42px] items-center justify-between border border-border-light px-3 transition-colors duration-150 hover:bg-bg-2"
                >
                  <span className="text-[11px] font-semibold text-text-primary">
                    All Services
                  </span>

                  <FiArrowRight className="text-[14px] text-accent" />
                </Link>
              </div>
            </div>
          </div>

          {/* INDUSTRIES */}
          <div className="border-t border-border-light">
            <button
              type="button"
              onClick={() => handleAccordion("industries")}
              className="flex w-full items-center justify-between py-3.5"
              aria-expanded={industriesOpen}
            >
              <span
                className={`text-[17px] font-semibold tracking-[-0.03em] transition-colors duration-150 ${
                  industriesOpen
                    ? "text-accent"
                    : "text-text-primary"
                }`}
              >
                Industries
              </span>

              <FiChevronDown
                className={`text-[16px] transition-all duration-150 ${
                  industriesOpen
                    ? "rotate-180 text-accent"
                    : "text-text-muted"
                }`}
              />
            </button>

            {/* INDUSTRIES ACCORDION */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-150 ease-out ${
                industriesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-2 gap-1 pb-3">
                  {mobileIndustries.map((industry, index) => (
                    <IndustryItem
                      key={industry.id}
                      industry={industry}
                      index={index}
                      open={industriesOpen}
                      onNavigate={handleNavigate}
                    />
                  ))}

                  {/* ALL INDUSTRIES */}
                  <Link
                    to="/industries"
                    onClick={handleNavigate}
                    className={`relative flex h-[76px] flex-col justify-between overflow-hidden bg-bg-3 p-3 transition-[opacity,transform,background-color] duration-150 ${
                      industriesOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[3px] opacity-0"
                    }`}
                  >
                    <div className="flex gap-[2px]">
                      <span className="h-[4px] w-3 bg-accent" />
                      <span className="h-[4px] w-3 bg-purple" />
                      <span className="h-[4px] w-3 bg-green" />
                      <span className="h-[4px] w-3 bg-orange" />
                    </div>

                    <div className="flex items-end justify-between gap-2">
                      <span className="text-[12px] font-semibold tracking-[-0.02em] text-text-primary">
                        All Industries
                      </span>

                      <FiArrowUpRight className="text-[14px] text-text-primary" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN LINKS */}
          <div className="border-t border-border-light">
            <MobileLink
              label="Work"
              href="/work"
              active={isActive("/work")}
              onClick={handleNavigate}
            />

            <MobileLink
              label="About"
              href="/about"
              active={isActive("/about")}
              onClick={handleNavigate}
            />

            <MobileLink
              label="Insights"
              href="/insights"
              active={isActive("/insights")}
              onClick={handleNavigate}
            />
          </div>

          {/* CTA */}
          <div
            onClick={handleNavigate}
            className="mt-4"
          >
            <Button
              to="/contact"
              className="w-full"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const IndustryItem = ({
  industry,
  index,
  open,
  onNavigate,
}) => {
  return (
    <Link
      to={industry.href}
      onClick={onNavigate}
      style={{
        transitionDelay: open
          ? `${index * 10}ms`
          : "0ms",
      }}
      className={`group relative h-[76px] overflow-hidden bg-bg-dark transition-[opacity,transform] duration-150 ease-out ${
        open
          ? "translate-y-0 opacity-100"
          : "translate-y-[3px] opacity-0"
      }`}
    >
      <img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-150 group-active:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-2.5">
        <h3 className="max-w-[118px] text-[11px] font-semibold leading-[1.05] tracking-[-0.02em] text-text-inverse sm:text-[12px]">
          {industry.title}

          <span className="ml-1 text-accent">
            _
          </span>
        </h3>

        <FiArrowUpRight className="shrink-0 text-[13px] text-text-inverse" />
      </div>
    </Link>
  );
};

const MobileLink = ({
  label,
  href,
  active,
  onClick,
}) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="flex h-[48px] items-center justify-between border-b border-border-light"
    >
      <span
        className={`text-[17px] font-semibold tracking-[-0.03em] transition-colors duration-150 ${
          active
            ? "text-accent"
            : "text-text-primary"
        }`}
      >
        {label}
      </span>

      <FiArrowUpRight
        className={`text-[15px] ${
          active
            ? "text-accent"
            : "text-text-muted"
        }`}
      />
    </Link>
  );
};

export { MobileMenu };