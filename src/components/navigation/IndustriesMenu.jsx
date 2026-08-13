import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import healthcareImage from "../../assets/industries/healthcare.jfif";
import financeImage from "../../assets/industries/finance.jfif";
import logisticsImage from "../../assets/industries/logistics.png";
import professionalServicesImage from "../../assets/industries/professional-services.png";
import manufacturingImage from "../../assets/industries/manufacturing.png";
import realEstateImage from "../../assets/industries/real-estate.png";

const menuIndustries = [
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries/healthcare",
    image: healthcareImage,
  },
  {
    id: "fintech",
    title: "FinTech & Finance",
    href: "/industries/fintech-financial-services",
    image: financeImage,
  },
  {
    id: "logistics",
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
    id: "manufacturing",
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

const IndustriesMenu = ({
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
          : "invisible -translate-y-1 opacity-0"
      }`}
    >
      <div className="mx-auto w-[min(880px,calc(100vw-32px))] overflow-hidden border border-black/[0.07] bg-white shadow-[0_18px_45px_rgba(7,17,31,0.14)]">
        <div className="grid grid-cols-4 gap-[1px] bg-white/10">
          {menuIndustries.map((industry, index) => (
            <Link
              key={industry.id}
              to={industry.href}
              onClick={onNavigate}
              style={{
                transitionDelay: open
                  ? `${index * 12}ms`
                  : "0ms",
              }}
              className={`group relative aspect-square overflow-hidden bg-[#07111f] transition-all duration-150 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1 opacity-0"
              }`}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <h3 className="max-w-[145px] text-[17px] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
                  {industry.title}
                  <span className="ml-1 text-primary-blue">
                    _
                  </span>
                </h3>

                <FiArrowUpRight className="translate-y-1 text-[16px] text-white opacity-0 transition-all duration-100 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>

              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary-blue transition-transform duration-150 group-hover:scale-x-100" />
            </Link>
          ))}

          <Link
            to="/industries"
            onClick={onNavigate}
            className="group relative aspect-square bg-[#f3f3ee] p-4 transition-colors duration-150 hover:bg-primary-blue"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex gap-1">
                <span className="h-[5px] w-4 bg-[#0066FF]" />
                <span className="h-[5px] w-4 bg-[#7C3AED]" />
                <span className="h-[5px] w-4 bg-[#16A34A]" />
                <span className="h-[5px] w-4 bg-[#F97316]" />
              </div>

              <div className="flex items-end justify-between">
                <h3 className="text-[18px] font-semibold tracking-[-0.035em] text-text-primary transition-colors duration-150 group-hover:text-white">
                  All
                  <br />
                  Industries
                </h3>

                <FiArrowUpRight className="text-[16px] text-text-primary transition-colors duration-150 group-hover:text-white" />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex h-[38px] items-center justify-between px-4">
          <span className="text-[10px] text-text-muted">
            Solutions shaped around how your industry works.
          </span>

          <Link
            to="/industries"
            onClick={onNavigate}
            className="flex items-center gap-1.5 text-[10px] font-semibold text-text-primary hover:text-primary-blue"
          >
            All Industries
            <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { IndustriesMenu };