import { Link } from "@tanstack/react-router";
import { Building2, ChevronRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import facilitiesHeroSuite from "@/assets/facilities/facilities-hero-suite-clean.webp";
import { HeroBackground } from "./HeroBackground";

// ─── Animation Variants ─────────────────────────────────────────────────────
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 65, damping: 18 },
  },
};

export function FacilitiesHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-gradient-to-r from-[#FFF5F8] via-[#FFEBF2] to-[#FFDDE8] text-[#14213D] overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 flex items-center justify-between">
      {/* ── Background Ambient Glows & Subtle Light Orbs ── */}
      <HeroBackground />

      {/* Decorative Subtle Plus (+) Accents matching reference layout */}
      <div
        className="absolute top-12 left-[44%] text-[#FF87B3]/40 text-xl font-light pointer-events-none select-none z-0 hidden lg:block"
        aria-hidden="true"
      >
        +
      </div>
      <div
        className="absolute top-28 left-[18%] text-[#FF87B3]/25 text-lg font-light pointer-events-none select-none z-0 hidden sm:block"
        aria-hidden="true"
      >
        +
      </div>

      {/* Floating Accent Sphere near curve */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -6, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[48%] xl:left-[47%] w-4 h-4 rounded-full bg-gradient-to-br from-[#FF6E9D] to-[#DE356A] shadow-[0_4px_12px_rgba(222,53,106,0.35)] hidden lg:block z-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Right Side: New State-of-the-Art Surgical Theater Suite Visual (Desktop Full-Bleed) ── */}
      <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[50%] xl:w-[52%] 2xl:w-[54%] select-none z-10 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full pointer-events-auto"
        >
          <img
            src={facilitiesHeroSuite}
            alt="SreeDevi Hospital advanced modern surgical theatre and procedure facilities"
            className="w-full h-full object-cover object-left select-none block transform-gpu"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      {/* ── Smooth, Balanced Wave Transition at the Bottom ── */}
      <div className="absolute -bottom-[2px] inset-x-0 w-full overflow-hidden pointer-events-none z-20 leading-none select-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "65px", minHeight: "45px", maxHeight: "95px" }}
        >
          {/* Secondary Ambient Crest Line */}
          <path
            d="M0,52 C280,18 560,78 840,42 C1120,8 1320,58 1440,38 L1440,125 L0,125 Z"
            fill="#FFFFFF"
            fillOpacity="0.3"
          />

          {/* Main Pure White Transition Wave */}
          <path
            d="M0,65 C260,28 540,88 820,50 C1100,16 1300,66 1440,48 L1440,125 L0,125 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* ── Main Left-Side Content Container ── */}
      <div className="container-page relative z-10 pt-2 md:pt-4 pb-4 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* ── Left Column: Unchanged Text Content (7 cols) ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 xl:col-span-7 max-w-2xl z-10 flex flex-col justify-center py-2 lg:py-4"
          >
            {/* Eyebrow Badge */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-[#FF87B3] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-4 w-max shadow-sm cursor-default"
            >
              <Building2 className="w-3.5 h-3.5 text-[#D94D78]" />
              Facilities
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-3 tracking-tight text-[#14213D]"
            >
              World-class facilities,{" "}
              <span className="text-[#DE356A]">
                better care.
              </span>
            </motion.h1>

            {/* Accent Divider */}
            <motion.div
              variants={fadeUpVariant}
              className="w-16 h-1.5 bg-gradient-to-r from-[#FF87B3] to-[#D94D78] rounded-full mb-4"
            />

            {/* Description */}
            <motion.p
              variants={fadeUpVariant}
              className="text-slate-800 text-sm md:text-base leading-relaxed mb-6 max-w-lg font-medium"
            >
              Our hospital is equipped with advanced technology and modern infrastructure to ensure
              the best care and comfort for every patient.
            </motion.p>

            {/* Breadcrumbs */}
            <motion.nav
              variants={fadeUpVariant}
              className="flex items-center gap-2 text-xs text-slate-700 font-semibold"
            >
              <Link to="/" className="hover:text-[#D94D78] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-60 text-slate-500" />
              <span className="font-bold text-[#D94D78] bg-white border border-[#FF87B3] px-3 py-1 rounded-md shadow-2xs">
                Facilities
              </span>
            </motion.nav>
          </motion.div>

          {/* ── Mobile/Tablet In-Flow Curved Visual ── */}
          <div className="lg:hidden w-full select-none mt-4 pb-2">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[-12px_0_35px_rgba(255,135,179,0.30)] bg-slate-900 border-2 border-[#FF87B3]">
              <img
                src={facilitiesHeroSuite}
                alt="SreeDevi Hospital advanced modern surgical theatre and procedure facilities"
                className="w-full h-full object-cover object-center select-none block"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
