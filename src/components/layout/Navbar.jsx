import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgChevronDown } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import Icon from "../../assets/IconBlack.png";

import { ServicesMenu } from "../navigation/ServicesMenu.jsx";
import { IndustriesMenu } from "../navigation/IndustriesMenu.jsx";
import { MobileMenu } from "../navigation/MobileMenu.jsx";
import { Button } from "../common/Button.jsx";

const Navbar = () => {
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeTimerRef = useRef(null);

  const handleOpenMenu = (menu) => {
    clearTimeout(closeTimerRef.current);

    setActiveMenu(menu);
  };

  const handleTriggerLeave = () => {
    clearTimeout(closeTimerRef.current);

    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 80);
  };

  const handleDropdownLeave = () => {
    clearTimeout(closeTimerRef.current);

    setActiveMenu(null);
  };

  const handleCloseAll = () => {
    clearTimeout(closeTimerRef.current);

    setActiveMenu(null);
    setMobileOpen(false);
  };

  const handleMobileToggle = () => {
    clearTimeout(closeTimerRef.current);

    setActiveMenu(null);

    setMobileOpen((current) => !current);
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-[100] border-b border-border-light bg-surface/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center px-5 md:px-7 lg:px-8">
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleCloseAll}
            className="flex shrink-0 items-center gap-1"
          >
            <img
              src={Icon}
              alt="Zapmind AI"
              className="h-[34px] w-auto object-contain"
            />

            <span className="text-[20px] font-bold tracking-[-0.045em] text-text-primary sm:text-[21px]">
              apmind
              <span className="ml-1 font-medium text-accent">
                AI
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="ml-auto hidden h-full items-center xl:flex">
            {/* SERVICES */}
            <div
              className="flex h-full items-center"
              onMouseEnter={() => handleOpenMenu("services")}
              onMouseLeave={handleTriggerLeave}
            >
              <button
                type="button"
                aria-expanded={activeMenu === "services"}
                className={`group relative flex h-full items-center gap-1.5 px-5 text-[14px] font-semibold transition-colors duration-100 ${
                  activeMenu === "services" || isActive("/services")
                    ? "text-accent"
                    : "text-text-primary hover:text-accent"
                }`}
              >
                Services

                <CgChevronDown
                  className={`text-[16px] transition-transform duration-100 ${
                    activeMenu === "services"
                      ? "rotate-180"
                      : ""
                  }`}
                />

                <span
                  className={`absolute bottom-0 left-5 right-5 h-[2px] origin-center bg-accent transition-transform duration-100 ${
                    activeMenu === "services"
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </button>
            </div>

            {/* INDUSTRIES */}
            <div
              className="flex h-full items-center"
              onMouseEnter={() => handleOpenMenu("industries")}
              onMouseLeave={handleTriggerLeave}
            >
              <button
                type="button"
                aria-expanded={activeMenu === "industries"}
                className={`group relative flex h-full items-center gap-1.5 px-5 text-[14px] font-semibold transition-colors duration-100 ${
                  activeMenu === "industries" || isActive("/industries")
                    ? "text-accent"
                    : "text-text-primary hover:text-accent"
                }`}
              >
                Industries

                <CgChevronDown
                  className={`text-[16px] transition-transform duration-100 ${
                    activeMenu === "industries"
                      ? "rotate-180"
                      : ""
                  }`}
                />

                <span
                  className={`absolute bottom-0 left-5 right-5 h-[2px] origin-center bg-accent transition-transform duration-100 ${
                    activeMenu === "industries"
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </button>
            </div>

         

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={handleCloseAll}
              className={`flex h-full items-center px-5 text-[14px] font-semibold transition-colors duration-100 ${
                isActive("/about")
                  ? "text-accent"
                  : "text-text-primary hover:text-accent"
              }`}
            >
              About
            </Link>

            {/* INSIGHTS */}
            <Link
              to="/insights"
              onClick={handleCloseAll}
              className={`flex h-full items-center px-5 text-[14px] font-semibold transition-colors duration-100 ${
                isActive("/insights")
                  ? "text-accent"
                  : "text-text-primary hover:text-accent"
              }`}
            >
              Insights
            </Link>
          </div>

          {/* DESKTOP CTA */}
          <div className="ml-auto hidden xl:block">
            <Button />
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={handleMobileToggle}
            className="ml-auto flex h-10 w-10 items-center justify-center text-[24px] text-text-primary xl:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
          >
            <span
              className={`transition-transform duration-150 ${
                mobileOpen
                  ? "rotate-90"
                  : "rotate-0"
              }`}
            >
              {mobileOpen ? (
                <RxCross2 />
              ) : (
                <HiOutlineMenuAlt3 />
              )}
            </span>
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`pointer-events-none fixed inset-0 top-[72px] z-[60] hidden bg-bg-dark/5 backdrop-blur-[1px] transition-opacity duration-100 xl:block ${
          activeMenu
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      {/* SERVICES MENU */}
      <ServicesMenu
        open={activeMenu === "services"}
        onMouseEnter={() => handleOpenMenu("services")}
        onMouseLeave={handleDropdownLeave}
        onNavigate={handleCloseAll}
      />

      {/* INDUSTRIES MENU */}
      <IndustriesMenu
        open={activeMenu === "industries"}
        onMouseEnter={() => handleOpenMenu("industries")}
        onMouseLeave={handleDropdownLeave}
        onNavigate={handleCloseAll}
      />

      {/* MOBILE */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};

export { Navbar };