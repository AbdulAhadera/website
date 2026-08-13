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

    accent: "#0066FF",
    soft: "#EEF5FF",
  },
  {
    id: "branding-creative-design",
    number: "02",
    title: "Branding & Creative Design",
    description:
      "Identity, visual systems, and creative direction that make your brand recognizable.",
    href: "/services/branding-creative-design",

    accent: "#7C3AED",
    soft: "#F5F0FF",
  },
  {
    id: "digital-marketing-growth",
    number: "03",
    title: "Digital Marketing & Growth",
    description:
      "SEO, campaigns, content, and acquisition systems designed to generate demand.",
    href: "/services/digital-marketing-growth",

    accent: "#16A34A",
    soft: "#EFFBF3",
  },
  {
    id: "social-media-management",
    number: "04",
    title: "Social Media Management",
    description:
      "Strategy and content that keep your brand visible, relevant, and worth following.",
    href: "/services/social-media-management",

    accent: "#EC4899",
    soft: "#FFF1F7",
  },
  {
    id: "ecommerce-solutions",
    number: "05",
    title: "E-Commerce Solutions",
    description:
      "Stores and digital buying experiences built around smoother conversion and growth.",
    href: "/services/ecommerce-solutions",

    accent: "#F97316",
    soft: "#FFF5EC",
  },
  {
    id: "software-app-development",
    number: "06",
    title: "Software & App Development",
    description:
      "Custom apps, portals, dashboards, and platforms shaped around your workflows.",
    href: "/services/software-app-development",

    accent: "#0891B2",
    soft: "#ECFBFF",
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
      className={`fixed inset-x-0 top-[72px] z-[80] px-4 pt-2 transition-all duration-100 ease-out ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-[4px] opacity-0"
      }`}
    >
      <div className="mx-auto w-[min(1000px,calc(100vw-32px))] overflow-hidden border border-black/[0.07] bg-white shadow-[0_18px_50px_rgba(7,17,31,0.14)]">
        {/* TOP */}
        <div className="flex h-[54px] items-center justify-between border-b border-black/[0.07] px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="h-[7px] w-[7px] bg-[#0066FF]" />
              <span className="h-[7px] w-[7px] bg-[#7C3AED]" />
              <span className="h-[7px] w-[7px] bg-[#16A34A]" />
              <span className="h-[7px] w-[7px] bg-[#F97316]" />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              What We Do
            </span>
          </div>

          <Link
            to="/services"
            onClick={onNavigate}
            className="group flex items-center gap-2 text-[12px] font-semibold text-text-primary transition-colors duration-100 hover:text-primary-blue"
          >
            Explore all services

            <FiArrowUpRight className="transition-transform duration-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </Link>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-[1fr_310px]">
          {/* SERVICE GRID */}
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

          {/* AI */}
          <Link
            to="/services/ai-automation-solutions"
            onClick={onNavigate}
            style={{
              transitionDelay: open ? "80ms" : "0ms",
            }}
            className={`group relative flex min-h-[342px] flex-col justify-between overflow-hidden border-l border-black/[0.07] bg-[#101828] p-7 transition-all duration-100 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-[3px] opacity-0"
            }`}
          >
            {/* MULTICOLOR BACKGROUND DETAILS */}
            <div className="absolute -right-12 -top-12 h-36 w-36 bg-[#7C3AED]/30 blur-[50px]" />

            <div className="absolute -bottom-10 left-4 h-32 w-32 bg-[#0066FF]/25 blur-[45px]" />

            <div className="absolute bottom-20 right-0 h-24 w-24 bg-[#06B6D4]/20 blur-[40px]" />

            <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:28px_28px]" />

            {/* TOP */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-[8px] w-[8px]">
                  <span className="absolute inset-0 animate-ping bg-[#A855F7]/40" />
                  <span className="relative h-[8px] w-[8px] bg-[#A855F7]" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Zapmind AI
                </span>
              </div>

              <span className="text-[10px] text-white/25">
                07
              </span>
            </div>

            {/* SMALL VISUAL */}
            <div className="relative my-5 h-[88px]">
              <div className="absolute left-0 top-[18px] h-[1px] w-[38%] bg-[#A855F7]/50" />

              <div className="absolute left-[38%] top-[18px] h-[35px] w-[1px] bg-white/15" />

              <div className="absolute left-[38%] top-[52px] h-[1px] w-[30%] bg-[#06B6D4]/50" />

              <div className="absolute left-[68%] top-[52px] h-[26px] w-[1px] bg-white/15" />

              <div className="absolute left-[68%] top-[77px] h-[1px] w-[22%] bg-[#22C55E]/60" />

              <span className="absolute left-0 top-[14px] h-[9px] w-[9px] bg-[#A855F7]" />

              <span className="absolute left-[36.5%] top-[48px] h-[9px] w-[9px] bg-[#06B6D4]" />

              <span className="absolute left-[66.5%] top-[73px] h-[9px] w-[9px] bg-[#22C55E]" />
            </div>

            {/* TEXT */}
            <div className="relative">
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#A855F7]">
                AI & Automation
              </span>

              <h3 className="mt-3 max-w-[240px] text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-white">
                AI that takes work off your team.
              </h3>

              <p className="mt-4 max-w-[250px] text-[12px] leading-[1.65] text-white/55">
                Assistants, receptionists, support, lead handling, and workflow automation.
              </p>

              <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-white">
                Explore AI

                <FiArrowUpRight className="transition-transform duration-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 flex h-[3px] w-full">
              <span className="h-full flex-1 bg-[#7C3AED]" />
              <span className="h-full flex-1 bg-[#0066FF]" />
              <span className="h-full flex-1 bg-[#06B6D4]" />
              <span className="h-full flex-1 bg-[#22C55E]" />
            </div>
          </Link>
        </div>

        {/* BOTTOM */}
        <div className="flex h-[48px] items-center justify-between border-t border-black/[0.07] px-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-text-muted">
              One team across
            </span>

            <div className="flex gap-1">
              <span className="h-[5px] w-5 bg-[#0066FF]" />
              <span className="h-[5px] w-5 bg-[#7C3AED]" />
              <span className="h-[5px] w-5 bg-[#16A34A]" />
              <span className="h-[5px] w-5 bg-[#EC4899]" />
              <span className="h-[5px] w-5 bg-[#F97316]" />
              <span className="h-[5px] w-5 bg-[#0891B2]" />
            </div>
          </div>

          <Link
            to="/contact"
            onClick={onNavigate}
            className="group flex items-center gap-2 text-[11px] font-semibold text-text-primary transition-colors duration-100 hover:text-primary-blue"
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
          ? `${index * 15}ms`
          : "0ms",
      }}
      className={`group relative min-h-[114px] overflow-hidden border-b border-r border-black/[0.07] transition-all duration-100 ease-out ${
        open
          ? "translate-y-0 opacity-100"
          : "translate-y-[3px] opacity-0"
      }`}
    >
      {/* HOVER BACKGROUND */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
        style={{
          backgroundColor: service.soft,
        }}
      />

      {/* LEFT BORDER (1px inside the card) */}
      <div
        className="absolute bottom-0 left-0 top-0 w-[1px] origin-bottom scale-y-0 transition-transform duration-150 ease-out group-hover:scale-y-100"
        style={{
          backgroundColor: service.accent,
        }}
      />

      <div className="relative flex h-full gap-4 px-5 py-5">
        {/* NUMBER */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="h-[7px] w-[7px]"
            style={{
              backgroundColor: service.accent,
            }}
          />

          <span className="text-[9px] font-semibold text-text-muted">
            {service.number}
          </span>
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <h3
            className="max-w-[230px] text-[16px] font-semibold leading-[1.15] tracking-[-0.025em] text-text-primary transition-colors duration-100"
            style={{
              "--service-accent": service.accent,
            }}
          >
            {service.title}
          </h3>

          <p className="mt-2 max-w-[250px] text-[11px] leading-[1.55] text-text-muted">
            {service.description}
          </p>
        </div>

        <FiArrowUpRight
          className="mt-[2px] -translate-x-[2px] translate-y-[2px] text-[16px] opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          style={{
            color: service.accent,
          }}
        />
      </div>

      {/* BOTTOM BORDER (1px inside the card) */}
      <div
        className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transition-transform duration-150 group-hover:scale-x-100"
        style={{
          backgroundColor: service.accent,
        }}
      />
    </Link>
  );
};

export { ServicesMenu };