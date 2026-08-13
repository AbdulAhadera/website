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

const serviceColors = {
  "website-design-development": {
    accent: "#0066FF",
    soft: "#EEF5FF",
  },
  "branding-creative-design": {
    accent: "#7C3AED",
    soft: "#F5F0FF",
  },
  "digital-marketing-growth": {
    accent: "#16A34A",
    soft: "#EFFBF3",
  },
  "social-media-management": {
    accent: "#EC4899",
    soft: "#FFF1F7",
  },
  "ecommerce-solutions": {
    accent: "#F97316",
    soft: "#FFF5EC",
  },
  "software-app-development": {
    accent: "#0891B2",
    soft: "#ECFBFF",
  },
  "ai-automation-solutions": {
    accent: "#A855F7",
    soft: "#F7F0FF",
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

const MobileMenu = ({ open, onClose }) => {
  const location = useLocation();

  const [activeAccordion, setActiveAccordion] = useState(null);

  const servicesOpen = activeAccordion === "services";
  const industriesOpen = activeAccordion === "industries";

  const handleAccordion = (name) => {
    setActiveAccordion((current) =>
      current === name ? null : name,
    );
  };

  const handleNavigate = () => {
    setActiveAccordion(null);

    if (onClose) {
      onClose();
    }
  };

  const handleTransitionEnd = () => {
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
      className={`fixed inset-x-0 bottom-0 top-[72px] z-[90] bg-white transition-[opacity,transform,visibility] duration-150 ease-out xl:hidden ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-[4px] opacity-0"
      }`}
    >
      <div className="h-full overflow-y-auto overscroll-contain">
        <div className="px-4 pb-7 pt-2 sm:px-5">
          {/* SERVICES */}
          <div className="border-t border-black/[0.08]">
            <button
              type="button"
              onClick={() => handleAccordion("services")}
              className="flex w-full items-center justify-between py-3.5"
            >
              <span
                className={`text-[17px] font-semibold tracking-[-0.03em] transition-colors duration-150 ${
                  servicesOpen
                    ? "text-primary-blue"
                    : "text-text-primary"
                }`}
              >
                Services
              </span>

              <FiChevronDown
                className={`text-[16px] transition-all duration-150 ${
                  servicesOpen
                    ? "rotate-180 text-primary-blue"
                    : "text-text-muted"
                }`}
              />
            </button>

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
                    const colors =
                      serviceColors[service.id] ||
                      serviceColors["website-design-development"];

                    return (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={handleNavigate}
                        style={{
                          backgroundColor: colors.soft,
                          transitionDelay: servicesOpen
                            ? `${index * 10}ms`
                            : "0ms",
                        }}
                        className={`group relative flex min-h-[62px] flex-col justify-between overflow-hidden p-3 transition-[opacity,transform] duration-150 ease-out ${
                          servicesOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-[3px] opacity-0"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="h-[5px] w-5"
                            style={{
                              backgroundColor: colors.accent,
                            }}
                          />

                          <span className="text-[8px] font-semibold text-text-muted">
                            {String(index + 1).padStart(
                              2,
                              "0",
                            )}
                          </span>
                        </div>

                        <div className="mt-3 flex items-end justify-between gap-2">
                          <h3 className="max-w-[120px] text-[11px] font-semibold leading-[1.15] tracking-[-0.015em] text-text-primary sm:text-[12px]">
                            {service.navTitle || service.title}
                          </h3>

                          <FiArrowUpRight
                            className="shrink-0 text-[13px]"
                            style={{
                              color: colors.accent,
                            }}
                          />
                        </div>

                        <span
                          className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-150 group-active:scale-x-100"
                          style={{
                            backgroundColor: colors.accent,
                          }}
                        />
                      </Link>
                    );
                  })}
                </div>

                <Link
                  to="/services"
                  onClick={handleNavigate}
                  className="mb-3 flex h-[42px] items-center justify-between border border-black/[0.08] px-3"
                >
                  <span className="text-[11px] font-semibold text-text-primary">
                    All Services
                  </span>

                  <FiArrowRight className="text-[14px] text-primary-blue" />
                </Link>
              </div>
            </div>
          </div>

          {/* INDUSTRIES */}
          <div className="border-t border-black/[0.08]">
            <button
              type="button"
              onClick={() => handleAccordion("industries")}
              className="flex w-full items-center justify-between py-3.5"
            >
              <span
                className={`text-[17px] font-semibold tracking-[-0.03em] transition-colors duration-150 ${
                  industriesOpen
                    ? "text-primary-blue"
                    : "text-text-primary"
                }`}
              >
                Industries
              </span>

              <FiChevronDown
                className={`text-[16px] transition-all duration-150 ${
                  industriesOpen
                    ? "rotate-180 text-primary-blue"
                    : "text-text-muted"
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-150 ease-out ${
                industriesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-2 gap-1 pb-3">
                  {mobileIndustries.map(
                    (industry, index) => (
                      <IndustryItem
                        key={industry.id}
                        industry={industry}
                        index={index}
                        open={industriesOpen}
                        onNavigate={handleNavigate}
                      />
                    ),
                  )}

                  {/* ALL INDUSTRIES */}
                  <Link
                    to="/industries"
                    onClick={handleNavigate}
                    className={`relative flex h-[76px] flex-col justify-between overflow-hidden bg-[#f2f3f5] p-3 transition-[opacity,transform] duration-150 ${
                      industriesOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[3px] opacity-0"
                    }`}
                  >
                    <div className="flex gap-[2px]">
                      <span className="h-[4px] w-3 bg-[#0066FF]" />
                      <span className="h-[4px] w-3 bg-[#7C3AED]" />
                      <span className="h-[4px] w-3 bg-[#16A34A]" />
                      <span className="h-[4px] w-3 bg-[#F97316]" />
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
          <div className="border-t border-black/[0.08]">
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
          <Link
            to="/contact"
            onClick={handleNavigate}
            className="relative mt-4 flex h-[52px] items-center justify-between overflow-hidden bg-[#07111f] px-4"
          >
            <div className="absolute -bottom-10 -left-5 h-20 w-20 bg-[#0066FF]/25 blur-[30px]" />

            <div className="absolute -right-5 -top-9 h-20 w-20 bg-[#7C3AED]/20 blur-[30px]" />

            <div className="relative">
              <span className="block text-[8px] font-medium uppercase tracking-[0.15em] text-white/40">
                Have a project?
              </span>

              <span className="mt-[2px] block text-[14px] font-semibold text-white">
                Start a Project
              </span>
            </div>

            <div className="relative flex h-8 w-8 items-center justify-center bg-white">
              <FiArrowUpRight className="text-[14px] text-text-primary" />
            </div>

            <div className="absolute bottom-0 left-0 flex h-[2px] w-full">
              <span className="flex-1 bg-[#0066FF]" />
              <span className="flex-1 bg-[#7C3AED]" />
              <span className="flex-1 bg-[#16A34A]" />
              <span className="flex-1 bg-[#EC4899]" />
              <span className="flex-1 bg-[#F97316]" />
              <span className="flex-1 bg-[#0891B2]" />
            </div>
          </Link>
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
      className={`group relative h-[76px] overflow-hidden bg-[#07111f] transition-[opacity,transform] duration-150 ease-out ${
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
        <h3 className="max-w-[118px] text-[11px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[12px]">
          {industry.title}
          <span className="ml-1 text-primary-blue">
            _
          </span>
        </h3>

        <FiArrowUpRight className="shrink-0 text-[13px] text-white" />
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
      className="flex h-[48px] items-center justify-between border-b border-black/[0.08]"
    >
      <span
        className={`text-[17px] font-semibold tracking-[-0.03em] transition-colors duration-150 ${
          active
            ? "text-primary-blue"
            : "text-text-primary"
        }`}
      >
        {label}
      </span>

      <FiArrowUpRight
        className={`text-[15px] ${
          active
            ? "text-primary-blue"
            : "text-text-muted"
        }`}
      />
    </Link>
  );
};

export { MobileMenu };