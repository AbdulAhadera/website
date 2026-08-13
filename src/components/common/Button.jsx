import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({
  children = "Start a Project",
  to = "/contact",
  className = "",
}) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex h-[46px] min-w-[172px] items-center justify-between overflow-hidden border border-white/10 bg-[#0b1d35] px-5 text-white transition-colors duration-150 hover:bg-[#102540] ${className}`}
    >
      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* SOFT COLOR DEPTH */}
      <div className="pointer-events-none absolute -left-5 bottom-[-22px] h-14 w-14 bg-[#0066FF]/20 blur-2xl" />
      <div className="pointer-events-none absolute -right-4 top-[-24px] h-14 w-14 bg-[#7C3AED]/15 blur-2xl" />

      {/* SMALL COLORED BORDER ACCENTS */}
      <span className="absolute left-0 top-0 h-[18px] w-[2px] bg-[#0066FF]" />

      <span className="absolute left-0 top-0 h-[2px] w-[22px] bg-[#0066FF]" />

      <span className="absolute right-0 top-0 h-[2px] w-[18px] bg-[#7C3AED]" />

      <span className="absolute right-0 top-0 h-[16px] w-[2px] bg-[#7C3AED]" />

      <span className="absolute bottom-0 right-0 h-[14px] w-[2px] bg-[#16A34A]" />

      <span className="absolute bottom-0 right-0 h-[2px] w-[20px] bg-[#16A34A]" />

      {/* CONTENT */}
      <span className="relative z-10 text-[13px] font-semibold tracking-[-0.01em]">
        {children}
      </span>

      <FiArrowUpRight className="relative z-10 ml-5 text-[15px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </Link>
  );
};

export { Button };