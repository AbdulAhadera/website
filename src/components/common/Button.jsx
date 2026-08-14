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
      className={`group relative inline-flex h-[46px] min-w-[172px] items-center justify-between overflow-hidden border border-text-inverse/10 bg-surface-dark-2 px-5 text-text-inverse transition-colors duration-150 hover:bg-surface-dark-3 ${className}`}
    >
      {/* GRID */}
      <div className="grid-dark-small pointer-events-none absolute inset-0 opacity-70" />

      {/* SOFT GLOWS */}
      <div className="pointer-events-none absolute -left-5 -top-5 h-14 w-14 bg-accent/15 blur-2xl" />

      <div className="pointer-events-none absolute -right-5 -top-5 h-14 w-14 bg-purple/15 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-5 -right-5 h-14 w-14 bg-green/15 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-5 -left-5 h-14 w-14 bg-yellow/15 blur-2xl" />

      {/* TOP LEFT — BLUE */}
      <span className="absolute left-0 top-0 h-[18px] w-[2px] bg-accent" />

      <span className="absolute left-0 top-0 h-[2px] w-[22px] bg-accent" />

      {/* TOP RIGHT — PURPLE */}
      <span className="absolute right-0 top-0 h-[18px] w-[2px] bg-purple" />

      <span className="absolute right-0 top-0 h-[2px] w-[22px] bg-purple" />

      {/* BOTTOM RIGHT — GREEN */}
      <span className="absolute bottom-0 right-0 h-[18px] w-[2px] bg-green" />

      <span className="absolute bottom-0 right-0 h-[2px] w-[22px] bg-green" />

      {/* BOTTOM LEFT — YELLOW */}
      <span className="absolute bottom-0 left-0 h-[18px] w-[2px] bg-yellow" />

      <span className="absolute bottom-0 left-0 h-[2px] w-[22px] bg-yellow" />

      {/* CONTENT */}
      <span className="relative z-10 text-[13px] font-semibold tracking-[-0.01em]">
        {children}
      </span>

      <FiArrowUpRight className="relative z-10 ml-5 text-[15px] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </Link>
  );
};

export { Button };