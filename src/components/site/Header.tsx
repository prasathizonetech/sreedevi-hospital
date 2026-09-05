import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import logoAsset from "@/assets/sd-hospital-logo.png";
import { hospital } from "@/data/hospital";

const NAV_PINK = "#FF87B3";

interface NavItem {
  to: string;
  label: string;
  exact?: boolean;
}

const navItems: readonly NavItem[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About Us" },
  { to: "/doctors", label: "Doctors" },
  { to: "/departments", label: "Departments" },
  { to: "/fertility-centre", label: "Fertility Centre" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,135,179,0.30)] border-b border-pink-200/80"
          : "bg-white/90 backdrop-blur-md border-b border-pink-100/60"
      }`}
    >
      {/* ── Desktop navbar ─── */}
      <div className="hidden lg:flex items-stretch w-full">
        {/* LEFT: White brand panel */}
        <Link
          to="/"
          preload="intent"
          className="flex items-center gap-2 xl:gap-3 bg-white pl-3 pr-2 xl:pl-6 xl:pr-5 py-2 xl:py-2.5 shrink-0 group cursor-pointer select-none"
        >
          <motion.div
            id="nav-logo-desktop"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="relative shrink-0 pointer-events-none rounded-full overflow-hidden"
          >
            <img
              src={logoAsset}
              alt="SreeDevi Hospital logo"
              className="h-11 w-11 xl:h-15 xl:w-15 object-contain rounded-full"
            />
          </motion.div>
          <div className="leading-tight pointer-events-none">
            <div className="font-display text-[13.5px] xl:text-[16.5px] font-bold text-[#14213D] tracking-tight transition-colors group-hover:text-[#D94D78]">
              SreeDevi Hospital
            </div>
            <div className="text-[10px] xl:text-[11.5px] font-medium text-slate-500 mt-0.5">
              &amp; <span className="font-bold text-[#D94D78]">Fertility Centre</span> · Srirangam
            </div>
          </div>
        </Link>

        {/* CURVE: sigmoid S-curve per graph */}
        <div
          className="relative shrink-0 self-stretch pointer-events-none w-8 xl:w-16"
          style={{ backgroundColor: NAV_PINK }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full pointer-events-none"
          >
            <path d="M 0 100 C 15 100 22 90 32 65 C 46 30 64 5 100 0 L 0 0 Z" fill="white" />
          </svg>
        </div>

        {/* RIGHT: Pink nav panel with #FF87B3 */}
        <nav
          className="flex flex-1 items-center justify-end xl:justify-start pl-1 xl:pl-2 pr-2 xl:pr-6 overflow-visible"
          style={{ backgroundColor: NAV_PINK }}
        >
          <div className="flex items-center gap-0.5 xl:gap-1 flex-nowrap">
            {navItems.map((item) => {
              const isActive =
                item.to === "/"
                  ? currentPath === "/"
                  : currentPath === item.to || currentPath.startsWith(`${item.to}/`);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  preload="intent"
                  className="relative px-2 xl:px-3 py-1.5 rounded-full text-[11.5px] xl:text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 group/nav shrink-0 cursor-pointer select-none"
                >
                  {/* Smooth active background pill with layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveBackground"
                      className="absolute inset-0 bg-white rounded-full shadow-md shadow-pink-950/15 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}

                  {/* Animated active underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveUnderline"
                      className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full bg-[#D94D78] shadow-xs pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}

                  {/* Hover glow background for inactive items */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/0 group-hover/nav:bg-white/35 transition-all duration-200 pointer-events-none" />
                  )}

                  <span
                    className={`relative z-10 transition-all duration-200 pointer-events-none ${
                      isActive
                        ? "text-[#D94D78] font-bold"
                        : "text-[#14213D] font-semibold group-hover/nav:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* ── Mobile navbar ─── */}
      <div className="lg:hidden w-full">
        <div className="flex items-center justify-between w-full overflow-hidden px-4 py-2.5">
          <Link to="/" preload="intent" className="flex items-center gap-2.5 bg-white shrink-0 cursor-pointer">
            <div id="nav-logo-mobile" className="h-11 w-11 shrink-0 rounded-full overflow-hidden">
              <img
                src={logoAsset}
                alt="SreeDevi Hospital logo"
                className="h-11 w-11 object-contain rounded-full"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-[14px] font-bold text-[#14213D]">
                SreeDevi Hospital
              </div>
              <div className="text-[10px] text-slate-500">
                &amp; <span className="font-bold text-[#D94D78]">Fertility Centre</span>
              </div>
            </div>
          </Link>

          <motion.button
            whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center justify-center h-10 w-10 rounded-full text-[#14213D] shadow-sm cursor-pointer border border-[#f06a99]"
            style={{ backgroundColor: NAV_PINK }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* ── Mobile Drawer ─── */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white shadow-2xl border-t border-slate-100 origin-top max-h-[80vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isActive =
                item.to === "/"
                  ? currentPath === "/"
                  : currentPath === item.to || currentPath.startsWith(`${item.to}/`);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  preload="intent"
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[14px] font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FF87B3]/30 text-[#D94D78] shadow-xs border border-[#FF87B3]"
                      : "text-[#14213D] hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 rounded-2xl bg-[#FFF5F8] border border-[#FF87B3] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF87B3] flex items-center justify-center text-[#14213D] shadow-2xs">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                    24/7 Helpline
                  </div>
                  <div className="text-sm font-bold text-[#14213D]">{hospital.mobile}</div>
                </div>
              </div>
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${hospital.mobile}`}
                className="px-4 py-2 rounded-xl text-[#14213D] text-xs font-extrabold shadow-xs hover:shadow-md transition-shadow border border-[#f06a99] cursor-pointer"
                style={{ backgroundColor: NAV_PINK }}
              >
                Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
