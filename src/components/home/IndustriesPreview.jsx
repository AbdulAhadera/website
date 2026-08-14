import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import healthcareImage from "../../assets/industries/healthcare.jfif";
import financeImage from "../../assets/industries/finance.jfif";
import logisticsImage from "../../assets/industries/logistics.png";
import professionalServicesImage from "../../assets/industries/professional-services.png";
import manufacturingImage from "../../assets/industries/manufacturing.png";
import realEstateImage from "../../assets/industries/real-estate.png";

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Patient experiences, internal workflows and automation designed around how healthcare teams actually operate.",
    oneLiner:
      "Better patient experiences. Smarter internal workflows.",
    image: healthcareImage,
    accent: "var(--color-green)",
  },
  {
    id: "fintech",
    title: "FinTech & Finance",
    slug: "fintech-financial-services",
    description:
      "Digital products and operational systems where clarity, usability and trust need to work together.",
    oneLiner:
      "Trust, clarity and technology working together.",
    image: financeImage,
    accent: "var(--color-accent)",
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    slug: "logistics-supply-chain",
    description:
      "Connected systems for coordination, visibility, fulfillment and operational movement.",
    oneLiner:
      "More visibility across every moving part.",
    image: logisticsImage,
    accent: "var(--color-cyan)",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    slug: "professional-services",
    description:
      "Digital experiences that turn expertise into stronger enquiries, client experiences and operations.",
    oneLiner:
      "Turn expertise into a stronger digital experience.",
    image: professionalServicesImage,
    accent: "var(--color-purple)",
  },
  {
    id: "manufacturing",
    title: "Construction & Manufacturing",
    slug: "construction-manufacturing",
    description:
      "Practical digital systems for projects, workflows and complex operational coordination.",
    oneLiner:
      "Make complex operations easier to manage.",
    image: manufacturingImage,
    accent: "var(--color-orange)",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Websites, CRM experiences and lead systems built around property discovery and follow-up.",
    oneLiner:
      "From first enquiry to closed deal, connected.",
    image: realEstateImage,
    accent: "var(--color-pink)",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    slug: "warehousing",
    description:
      "Operational tools for inventory, fulfillment and the day-to-day movement inside warehouse teams.",
    oneLiner:
      "Know what is moving, where it is, and what happens next.",
    image: logisticsImage,
    accent: "var(--color-yellow)",
  },
];

const IndustriesPreview = () => {
  const [activeIndustryId, setActiveIndustryId] = useState(
    industries[0].id,
  );

  const activeIndustry =
    industries.find(
      (industry) => industry.id === activeIndustryId,
    ) || industries[0];

  return (
    <section className="relative overflow-hidden bg-bg-2">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 md:px-7 md:py-20 lg:px-8 xl:py-24">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <div className="flex gap-[4px]">
                <span className="h-[7px] w-[7px] bg-green" />
                <span className="h-[7px] w-[7px] bg-accent" />
                <span className="h-[7px] w-[7px] bg-orange" />
              </div>

              <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                Industries
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-text-primary sm:text-[52px] md:text-[60px] xl:text-[68px]">
              Different industries.
              <br />

              <span className="text-text-muted">
                Different problems.
              </span>
            </h2>

            <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-text-subtle md:text-[16px]">
              We shape the technology and experience around the way each
              industry actually works.
            </p>
          </div>
        </div>

        {/* SELECTOR */}
        <div className="mt-12 overflow-x-auto border-y border-border-strong">
          <div className="flex min-w-max">
            {industries.map((industry) => {
              const active =
                activeIndustryId === industry.id;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onMouseEnter={() =>
                    setActiveIndustryId(industry.id)
                  }
                  onFocus={() =>
                    setActiveIndustryId(industry.id)
                  }
                  onClick={() =>
                    setActiveIndustryId(industry.id)
                  }
                  className="relative px-5 py-5 text-left first:pl-0 md:px-7"
                >
                  <span
                    className={`text-[14px] font-semibold transition-colors duration-150 ${
                      active
                        ? "text-text-primary"
                        : "text-text-muted"
                    }`}
                  >
                    {industry.title}
                  </span>

                  <motion.span
                    animate={{
                      scaleX: active ? 1 : 0,
                    }}
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] origin-left"
                    style={{
                      backgroundColor: industry.accent,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE INDUSTRY */}
        <div className="mt-8 grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch lg:gap-12">
          <div className="relative aspect-[1.55/1] overflow-hidden bg-bg-3 lg:aspect-auto lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{
                  scale: 1.015,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute inset-0"
              >
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-bg-dark/15" />

                <motion.span
                  initial={{
                    scaleX: 0.2,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  className="absolute bottom-0 left-0 h-[3px] w-[40%] origin-left"
                  style={{
                    backgroundColor: activeIndustry.accent,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${activeIndustry.id}`}
              initial={{
                x: 10,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -6,
              }}
              transition={{
                duration: 0.2,
              }}
              className="flex flex-col justify-center"
            >
              <span
                className="text-[12px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: activeIndustry.accent,
                }}
              >
                {activeIndustry.title}
              </span>

              <h3 className="mt-4 text-[31px] font-semibold leading-[1.02] tracking-[-0.045em] text-text-primary sm:text-[36px] xl:text-[42px]">
                Built around how
                <br />
                your industry works.
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-text-subtle">
                {activeIndustry.description}
              </p>

              <div className="mt-6 flex items-start gap-3">
                <span
                  className="mt-[8px] h-[6px] w-[6px] shrink-0"
                  style={{
                    backgroundColor: activeIndustry.accent,
                  }}
                />

                <p className="text-[14px] font-medium leading-6 text-text-secondary">
                  {activeIndustry.oneLiner}
                </p>
              </div>

              <Link
                to={`/industries/${activeIndustry.slug}`}
                className="group mt-7 inline-flex items-center gap-3 self-start text-[13px] font-semibold text-text-primary"
              >
                Explore {activeIndustry.title}

                <FiArrowUpRight
                  className="text-[16px]"
                  style={{
                    color: activeIndustry.accent,
                  }}
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border-strong pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-6 text-text-subtle">
            Don&apos;t see your industry? The same approach can adapt to your
            business.
          </p>

          <Link
            to="/industries"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-text-primary hover:text-accent"
          >
            Explore all industries

            <FiArrowRight className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { IndustriesPreview };