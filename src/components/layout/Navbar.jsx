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

  const handleCloseMenu = () => {
    clearTimeout(closeTimerRef.current);

    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
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

  /*
   * This effect is valid because it synchronizes React state
   * with an external browser API (document.body).
   */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /*
   * Only cleanup.
   * No setState inside the effect.
   */
  useEffect(() => {
    return () => {
      clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-black/[0.06] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center px-5 md:px-7 lg:px-8">
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleCloseAll}
            className="flex shrink-0 items-center"
          >
            <img
              src={Icon}
              alt="Zapmind"
              className="h-[34px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="ml-auto hidden h-full items-center xl:flex">
            {/* SERVICES */}
            <div
              className="flex h-full items-center"
              onMouseEnter={() => handleOpenMenu("services")}
              onMouseLeave={handleCloseMenu}
            >
              <button
                type="button"
                className={`group relative flex h-full items-center gap-1.5 px-5 text-[14px] font-semibold transition-colors duration-100 ${
                  activeMenu === "services" || isActive("/services")
                    ? "text-primary-blue"
                    : "text-text-primary hover:text-primary-blue"
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
                  className={`absolute bottom-0 left-5 right-5 h-[2px] origin-center bg-primary-blue transition-transform duration-100 ${
                    activeMenu === "services"
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </button>

              <ServicesMenu
                open={activeMenu === "services"}
                onMouseEnter={() => handleOpenMenu("services")}
                onMouseLeave={handleCloseMenu}
                onNavigate={handleCloseAll}
              />
            </div>

            {/* INDUSTRIES */}
            <div
              className="flex h-full items-center"
              onMouseEnter={() => handleOpenMenu("industries")}
              onMouseLeave={handleCloseMenu}
            >
              <button
                type="button"
                className={`group relative flex h-full items-center gap-1.5 px-5 text-[14px] font-semibold transition-colors duration-100 ${
                  activeMenu === "industries" || isActive("/industries")
                    ? "text-primary-blue"
                    : "text-text-primary hover:text-primary-blue"
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
                  className={`absolute bottom-0 left-5 right-5 h-[2px] origin-center bg-primary-blue transition-transform duration-100 ${
                    activeMenu === "industries"
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </button>

              <IndustriesMenu
                open={activeMenu === "industries"}
                onMouseEnter={() => handleOpenMenu("industries")}
                onMouseLeave={handleCloseMenu}
                onNavigate={handleCloseAll}
              />
            </div>

            {/* WORK */}
            <Link
              to="/work"
              onClick={handleCloseAll}
              className={`relative flex h-full items-center px-5 text-[14px] font-semibold transition-colors duration-100 ${
                isActive("/work")
                  ? "text-primary-blue"
                  : "text-text-primary hover:text-primary-blue"
              }`}
            >
              Work
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={handleCloseAll}
              className={`relative flex h-full items-center px-5 text-[14px] font-semibold transition-colors duration-100 ${
                isActive("/about")
                  ? "text-primary-blue"
                  : "text-text-primary hover:text-primary-blue"
              }`}
            >
              About
            </Link>

            {/* INSIGHTS */}
            <Link
              to="/insights"
              onClick={handleCloseAll}
              className={`relative flex h-full items-center px-5 text-[14px] font-semibold transition-colors duration-100 ${
                isActive("/insights")
                  ? "text-primary-blue"
                  : "text-text-primary hover:text-primary-blue"
              }`}
            >
              Insights
            </Link>
          </div>

          {/* DESKTOP CTA */}
          <div className="ml-auto hidden xl:block">
           <Button />
          </div>

          {/* MOBILE TOGGLE */}
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
                mobileOpen ? "rotate-90" : "rotate-0"
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

      {/* DESKTOP BACKDROP */}
      <div
        className={`pointer-events-none fixed inset-0 top-[72px] z-[60] hidden bg-[#07111f]/5 backdrop-blur-[1px] transition-opacity duration-100 xl:block ${
          activeMenu
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      {/* MOBILE MENU */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};

export { Navbar };