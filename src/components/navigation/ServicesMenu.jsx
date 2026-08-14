import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    id: "website-design-development",
    number: "01",
    title: "Website Design & Development",
    description:
      "Websites built to communicate clearly, feel premium, and convert attention into action.",
    href: "/services/website-design-development",
    accentClass: "bg-accent",
    textClass: "text-accent",
    softClass: "bg-accent-soft",
  },
  {
    id: "branding-creative-design",
    number: "02",
    title: "Branding & Creative Design",
    description:
      "Identity, visual systems, and creative direction that make your brand recognizable.",
    href: "/services/branding-creative-design",
    accentClass: "bg-purple",
    textClass: "text-purple",
    softClass: "bg-purple-soft",
  },
  {
    id: "digital-marketing-growth",
    number: "03",
    title: "Digital Marketing & Growth",
    description:
      "SEO, campaigns, content, and acquisition systems designed to generate demand.",
    href: "/services/digital-marketing-growth",
    accentClass: "bg-green",
    textClass: "text-green",
    softClass: "bg-green-soft",
  },
  {
    id: "social-media-management",
    number: "04",
    title: "Social Media Management",
    description:
      "Strategy and content that keep your brand visible, relevant, and worth following.",
    href: "/services/social-media-management",
    accentClass: "bg-pink",
    textClass: "text-pink",
    softClass: "bg-pink-soft",
  },
  {
    id: "ecommerce-solutions",
    number: "05",
    title: "E-Commerce Solutions",
    description:
      "Stores and digital buying experiences built around smoother conversion and growth.",
    href: "/services/ecommerce-solutions",
    accentClass: "bg-orange",
    textClass: "text-orange",
    softClass: "bg-orange-soft",
  },
  {
    id: "software-app-development",
    number: "06",
    title: "Software & App Development",
    description:
      "Custom apps, portals, dashboards, and platforms shaped around your workflows.",
    href: "/services/software-app-development",
    accentClass: "bg-cyan",
    textClass: "text-cyan",
    softClass: "bg-cyan-soft",
  },
];

const ServicesMenu = ({
  open,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed left-1/2 top-[72px] z-[80] hidden w-[min(1000px,calc(100vw-32px))] -translate-x-1/2 pt-2 transition-[opacity,visibility] duration-100 ease-out xl:block ${
        open
          ? "visible pointer-events-auto opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`overflow-hidden border border-border-light bg-surface shadow-2xl transition-transform duration-100 ease-out ${
          open
            ? "translate-y-0"
            : "-translate-y-1"
        }`}
      >
        {/* HEADER */}
        <div className="flex h-[54px] items-center justify-between border-b border-border-light px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="h-[7px] w-[7px] bg-accent" />
              <span className="h-[7px] w-[7px] bg-purple" />
              <span className="h-[7px] w-[7px] bg-green" />
              <span className="h-[7px] w-[7px] bg-orange" />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              What We Do
            </span>
          </div>

          <Link
            to="/services"
            onClick={onNavigate}
            className="group flex items-center gap-2 text-[12px] font-semibold text-text-primary transition-colors duration-100 hover:text-accent"
          >
            Explore all services

            <FiArrowUpRight className="transition-transform duration-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </Link>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-[1fr_310px]">
          {/* SERVICES */}
          <div className="grid grid-cols-2">
            {services.map((service, index) => (
              <ServiceItem
                key={service.id}
                service={service}
                index={index}
                open={open}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          {/* AI FEATURE */}
          <Link
            to="/services/ai-automation-solutions"
            onClick={onNavigate}
            className={`group relative flex min-h-[342px] flex-col justify-between overflow-hidden border-l border-border-light bg-navy-light p-7 transition-[opacity,transform] duration-100 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-[3px] opacity-0"
            }`}
          >
            {/* GLOWS */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 bg-purple/30 blur-[50px]" />

            <div className="pointer-events-none absolute -bottom-10 left-4 h-32 w-32 bg-accent/25 blur-[45px]" />

            <div className="pointer-events-none absolute bottom-20 right-0 h-24 w-24 bg-cyan/20 blur-[40px]" />

            {/* GRID */}
            <div className="grid-dark-small pointer-events-none absolute inset-0 opacity-70" />

            {/* TOP */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-[8px] w-[8px]">
                  <span className="absolute inset-0 animate-ping bg-purple/40" />
                  <span className="relative h-[8px] w-[8px] bg-purple" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-inverse/55">
                  Zapmind AI
                </span>
              </div>

              <span className="text-[10px] text-text-inverse/25">
                07
              </span>
            </div>

            {/* AI FLOW VISUAL */}
            <div className="relative my-5 h-[88px]">
              <div className="absolute left-0 top-[18px] h-px w-[38%] bg-purple/50" />

              <div className="absolute left-[38%] top-[18px] h-[35px] w-px bg-text-inverse/15" />

              <div className="absolute left-[38%] top-[52px] h-px w-[30%] bg-cyan/50" />

              <div className="absolute left-[68%] top-[52px] h-[26px] w-px bg-text-inverse/15" />

              <div className="absolute left-[68%] top-[77px] h-px w-[22%] bg-green/60" />

              <span className="absolute left-0 top-[14px] h-[9px] w-[9px] bg-purple" />

              <span className="absolute left-[36.5%] top-[48px] h-[9px] w-[9px] bg-cyan" />

              <span className="absolute left-[66.5%] top-[73px] h-[9px] w-[9px] bg-green" />
            </div>

            {/* TEXT */}
            <div className="relative">
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-purple">
                AI & Automation
              </span>

              <h3 className="mt-3 max-w-[240px] text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-text-inverse">
                AI that takes work off your team.
              </h3>

              <p className="mt-4 max-w-[250px] text-[12px] leading-[1.65] text-text-inverse/55">
                Assistants, receptionists, support, lead handling, and workflow
                automation.
              </p>

              <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-text-inverse">
                Explore AI

                <FiArrowUpRight className="transition-transform duration-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </div>
            </div>
          </Link>
        </div>

        {/* FOOTER */}
        <div className="flex h-[48px] items-center justify-between border-t border-border-light px-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-text-muted">
              One team across
            </span>

            <div className="flex gap-1">
              <span className="h-[5px] w-5 bg-accent" />
              <span className="h-[5px] w-5 bg-purple" />
              <span className="h-[5px] w-5 bg-green" />
              <span className="h-[5px] w-5 bg-pink" />
              <span className="h-[5px] w-5 bg-orange" />
              <span className="h-[5px] w-5 bg-cyan" />
            </div>
          </div>

          <Link
            to="/contact"
            onClick={onNavigate}
            className="group flex items-center gap-2 text-[11px] font-semibold text-text-primary transition-colors duration-100 hover:text-accent"
          >
            Have something in mind?

            <FiArrowRight className="transition-transform duration-100 group-hover:translate-x-[3px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({
  service,
  index,
  open,
  onNavigate,
}) => {
  return (
    <Link
      to={service.href}
      onClick={onNavigate}
      style={{
        transitionDelay: open
          ? `${index * 12}ms`
          : "0ms",
      }}
      className={`group relative min-h-[114px] overflow-hidden border-b border-r border-border-light transition-[opacity,transform] duration-100 ease-out ${
        open
          ? "translate-y-0 opacity-100"
          : "translate-y-[3px] opacity-0"
      }`}
    >
      {/* HOVER BACKGROUND */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-100 group-hover:opacity-100 ${service.softClass}`}
      />

      {/* LEFT ACCENT */}
      <div
        className={`absolute bottom-0 left-0 top-0 w-px origin-bottom scale-y-0 transition-transform duration-150 group-hover:scale-y-100 ${service.accentClass}`}
      />

      <div className="relative flex h-full gap-4 px-5 py-5">
        {/* NUMBER */}
        <div className="flex flex-col items-center gap-2">
          <span
            className={`h-[7px] w-[7px] ${service.accentClass}`}
          />

          <span className="text-[9px] font-semibold text-text-muted">
            {service.number}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <h3 className="max-w-[230px] text-[16px] font-semibold leading-[1.15] tracking-[-0.025em] text-text-primary">
            {service.title}
          </h3>

          <p className="mt-2 max-w-[250px] text-[11px] leading-[1.55] text-text-muted">
            {service.description}
          </p>
        </div>

        <FiArrowUpRight
          className={`mt-[2px] -translate-x-[2px] translate-y-[2px] text-[16px] opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ${service.textClass}`}
        />
      </div>

      {/* BOTTOM ACCENT */}
      <div
        className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-150 group-hover:scale-x-100 ${service.accentClass}`}
      />
    </Link>
  );
};

export { ServicesMenu };