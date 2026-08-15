import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import IconWhite from "../../assets/IconWhite.png";

const SOCIALS = [
  {
    icon: FiFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592348205283",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/zapmindai.official",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zapmind-ai",
  },
];

const serviceLinks = [
  {
    label: "Websites",
    href: "/services/website-design-development",
    accentClass: "bg-accent",
  },
  {
    label: "Branding",
    href: "/services/branding-creative-design",
    accentClass: "bg-purple",
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing-growth",
    accentClass: "bg-green",
  },
  {
    label: "Social Media",
    href: "/services/social-media-management",
    accentClass: "bg-pink",
  },
  {
    label: "E-Commerce",
    href: "/services/ecommerce-solutions",
    accentClass: "bg-orange",
  },
  {
    label: "Software & Apps",
    href: "/services/software-app-development",
    accentClass: "bg-cyan",
  },
  {
    label: "AI & Automation",
    href: "/services/ai-automation-solutions",
    accentClass: "bg-purple",
  },
];

const industryLinks = [
  {
    label: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    label: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    label: "E-Commerce & Retail",
    href: "/industries/ecommerce-retail",
  },
  {
    label: "SaaS & Startups",
    href: "/industries/saas-startups",
  },
  {
    label: "Logistics",
    href: "/industries/logistics-supply-chain",
  },
  {
    label: "Warehousing",
    href: "/industries/warehousing",
  },
];

const companyLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-bg-dark text-text-inverse">
      {/* GRID */}
      <div className="grid-dark pointer-events-none absolute inset-0" />

      {/* COLOR DEPTH */}
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 bg-accent/10 blur-[90px]" />

      <div className="pointer-events-none absolute right-[8%] top-[4%] h-52 w-52 bg-purple/10 blur-[90px]" />

      <div className="pointer-events-none absolute bottom-0 left-[42%] h-48 w-48 bg-green/[0.07] blur-[85px]" />

      <div className="pointer-events-none absolute bottom-10 right-[15%] h-40 w-40 bg-yellow/[0.05] blur-[80px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-7 lg:px-8">
        {/* CTA */}
        <div className="grid border-x border-text-inverse/[0.08] lg:grid-cols-[1fr_auto]">
          <div className="border-b border-text-inverse/[0.08] px-5 py-12 md:px-8 md:py-16 lg:border-b-0 lg:border-r lg:py-20">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex gap-[3px]">
                <span className="h-[6px] w-[6px] bg-accent" />
                <span className="h-[6px] w-[6px] bg-purple" />
                <span className="h-[6px] w-[6px] bg-green" />
                <span className="h-[6px] w-[6px] bg-yellow" />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-inverse/40">
                Have something in mind?
              </span>
            </div>

            <h2 className="max-w-[800px] text-[38px] font-semibold leading-[0.98] tracking-[-0.05em] text-text-inverse sm:text-[46px] md:text-[56px] lg:text-[64px]">
              Let's build what your
              <br className="hidden sm:block" /> business actually needs.
            </h2>
          </div>

          <div className="flex items-center px-5 py-8 md:px-8 lg:px-12">
            
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid border-x border-t border-text-inverse/[0.08] lg:grid-cols-[1.05fr_2fr]">
          {/* BRAND */}
          <div className="flex flex-col justify-between border-b border-text-inverse/[0.08] px-5 py-8 md:px-8 md:py-10 lg:min-h-[390px] lg:border-b-0 lg:border-r">
            <div>
              <Link to="/" className="inline-flex items-center">
                <img
                  src={IconWhite}
                  alt="Zapmind"
                  className="h-[38px] w-auto object-contain"
                />
                apmind AI
              </Link>

              <p className="mt-6 max-w-[340px] text-[13px] leading-6 text-text-inverse/50">
                Websites, branding, marketing, software, e-commerce and AI —
                built together by one connected digital team.
              </p>
            </div>

            {/* SOCIALS */}
            <div className="mt-10">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-text-inverse/30">
                Follow Zapmind
              </p>

              <div className="flex gap-2">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="group flex h-10 w-10 items-center justify-center border border-text-inverse/10 text-text-inverse/55 transition-all duration-150 hover:-translate-y-[1px] hover:border-text-inverse/25 hover:bg-text-inverse/[0.05] hover:text-text-inverse"
                    >
                      <Icon className="text-[16px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {/* SERVICES */}
            <div className="border-b border-text-inverse/[0.08] px-5 py-8 md:px-7 lg:border-b-0 lg:border-r">
              <FooterTitle number="01">Services</FooterTitle>

              <div className="mt-6 space-y-3.5">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex items-center gap-3 text-[12px] text-text-inverse/50 transition-colors duration-150 hover:text-text-inverse"
                  >
                    <span
                      className={`h-[5px] w-[5px] shrink-0 transition-transform duration-150 group-hover:scale-150 ${link.accentClass}`}
                    />

                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* INDUSTRIES */}
            <div className="border-b border-text-inverse/[0.08] px-5 py-8 md:px-7 sm:border-l sm:border-text-inverse/[0.08] lg:border-b-0 lg:border-l-0 lg:border-r">
              <FooterTitle number="02">Industries</FooterTitle>

              <div className="mt-6 space-y-3.5">
                {industryLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}

                <Link
                  to="/industries"
                  className="group mt-5 flex items-center gap-2 text-[11px] font-semibold text-text-inverse"
                >
                  All Industries
                  <FiArrowUpRight className="text-[13px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </Link>
              </div>
            </div>

            {/* COMPANY */}
            <div className="px-5 py-8 md:px-7 sm:col-span-2 lg:col-span-1">
              <FooterTitle number="03">Company</FooterTitle>

              <div className="mt-6 space-y-3.5">
                {companyLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </div>

              <div className="mt-9 border-t border-text-inverse/[0.08] pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-text-inverse/30">
                  New Business
                </p>

                <Link
                  to="/contact"
                  className="group mt-3 flex items-center justify-between gap-4 text-[12px] font-semibold text-text-inverse"
                >
                  Start a conversation
                  <FiArrowUpRight className="transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 border-x border-t border-text-inverse/[0.08] px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-text-inverse/30">
            <span>© {currentYear} Zapmind.ai</span>

            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="transition-colors duration-150 hover:text-text-inverse"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] text-text-inverse/30">
              Digital, connected.
            </span>

            <div className="flex gap-[3px]">
              <span className="h-[4px] w-[14px] bg-accent" />
              <span className="h-[4px] w-[14px] bg-purple" />
              <span className="h-[4px] w-[14px] bg-green" />
              <span className="h-[4px] w-[14px] bg-yellow" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterTitle = ({ number, children }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[9px] font-semibold text-text-inverse/25">
        {number}
      </span>

      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-inverse/70">
        {children}
      </h3>
    </div>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <Link
      to={href}
      className="group flex items-center justify-between gap-3 text-[12px] text-text-inverse/50 transition-colors duration-150 hover:text-text-inverse"
    >
      <span>{children}</span>

      <FiArrowUpRight className="translate-y-[2px] text-[12px] opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100" />
    </Link>
  );
};

export { Footer };
