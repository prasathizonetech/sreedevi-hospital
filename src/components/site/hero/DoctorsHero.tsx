import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Stethoscope,
  ArrowRight,
  Users,
  ShieldCheck,
  Calendar,
  Heart,
  Plus,
} from "lucide-react";
import doctorsHeroTeam from "@/assets/doctors/doctors-hero-team.png";
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

export function DoctorsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FFEBF2] to-[#FF87B3] text-[#14213D] overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-0 flex flex-col justify-between">
      {/* ── Background Ambient Lights & Curves ── */}
      <HeroBackground />

      {/* Decorative Heart Outline Motif on the far right background */}
      <svg
        className="absolute top-10 right-6 sm:right-12 lg:right-20 w-32 sm:w-48 lg:w-56 h-32 sm:h-48 lg:h-56 text-white/35 pointer-events-none z-0 select-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>

      {/* ── 3D Sweeping Pink Ribbon & Bottom Wave Transition across Right Corner ── */}
      <div className="absolute -bottom-[2px] inset-x-0 w-full overflow-hidden pointer-events-none z-20 leading-none select-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "68px", minHeight: "48px", maxHeight: "95px" }}
        >
          <defs>
            {/* Top Light Ribbon Highlight Gradient */}
            <linearGradient id="docRibbonHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFA6C5" />
              <stop offset="25%" stopColor="#FF709E" />
              <stop offset="65%" stopColor="#FF4F86" />
              <stop offset="100%" stopColor="#FF2E6D" />
            </linearGradient>

            {/* Bottom Darker 3D Ribbon Shadow Gradient */}
            <linearGradient id="docRibbonShadow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E6396E" />
              <stop offset="40%" stopColor="#D42058" />
              <stop offset="75%" stopColor="#B81446" />
              <stop offset="100%" stopColor="#9E0C38" />
            </linearGradient>

            {/* Subtle Depth Shadow */}
            <filter id="docRibbonDropGlow" x="-5%" y="-40%" width="110%" height="180%">
              <feDropShadow dx="0" dy="-3" stdDeviation="4" floodColor="#990B35" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* 1. Deep 3D Shadow Ribbon Layer (Right Corner Flare) */}
          <path
            d="M0,85 C240,60 520,72 780,76 C1040,80 1260,60 1440,30 L1440,58 C1260,88 1040,96 780,86 C520,80 240,70 0,85 Z"
            fill="url(#docRibbonShadow)"
            opacity="0.95"
          />

          {/* 2. Top Vibrant 3D Ribbon Highlight Swoosh */}
          <path
            d="M0,85 C260,52 540,62 800,66 C1060,70 1280,45 1440,16 L1440,38 C1280,66 1060,84 800,76 C540,70 260,60 0,85 Z"
            fill="url(#docRibbonHighlight)"
            filter="url(#docRibbonDropGlow)"
          />

          {/* 3. Pure White Seamless Page Bottom Transition Wave */}
          <path
            d="M0,85 C250,64 540,76 800,80 C1060,84 1270,72 1440,48 L1440,130 L0,130 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* ── Main Content Grid ── */}
      <div className="container-page relative z-10 pt-1 md:pt-2 pb-0 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">

          {/* ── Left Column: Typography, Actions & 4 Feature Badges ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 xl:col-span-6 max-w-xl text-left z-10 flex flex-col justify-center pt-1 pb-12 sm:pb-16 lg:pb-20"
          >
            {/* Eyebrow Badge */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-[#FF87B3] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-3.5 w-max shadow-2xs cursor-default"
            >
              <Stethoscope className="w-3.5 h-3.5 text-[#D94D78]" />
              <span>MEET OUR DOCTORS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold leading-[1.12] mb-3.5 tracking-tight text-[#14213D]"
            >
              Compassionate Care, <br />
              <span className="text-[#D94D78]">Trusted Doctors for</span> <br />
              Every Family.
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              variants={fadeUpVariant}
              className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-lg font-medium"
            >
              Consultants who take the time to listen, explain, and reassure. Dedicated to
              delivering trusted, compassionate, and ethical healthcare for every family.
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-3.5 mb-7"
            >
              {/* Primary Consultation Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF87B3] via-[#f06a99] to-[#D94D78] text-white px-7 py-3.5 text-xs sm:text-sm font-extrabold hover:shadow-lg hover:shadow-pink-900/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              {/* Secondary View Specialists Button */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("specialists-section");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[#FF87B3] text-[#D94D78] px-6 py-3.5 text-xs sm:text-sm font-extrabold hover:bg-[#FFF5F8] hover:border-[#D94D78] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-2xs"
              >
                <Users className="w-4 h-4 text-[#D94D78]" />
                <span>View Specialists</span>
              </button>
            </motion.div>

            {/* ── 4 Feature Badges inside White Card Container ── */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white/95 backdrop-blur-md border border-[#FFCCD9] rounded-2xl sm:rounded-3xl shadow-[0_8px_28px_rgba(255,135,179,0.15)] p-3 sm:p-4 max-w-lg"
            >
              <div className="grid grid-cols-4 gap-1.5 sm:gap-3 items-center divide-x divide-pink-100">
                {[
                  { icon: ShieldCheck, label: "Experienced", sub: "Doctors" },
                  { icon: Heart, label: "Personalized", sub: "Care" },
                  { icon: Users, label: "Family", sub: "Focused" },
                  { icon: Plus, label: "Advanced", sub: "Facilities" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center group cursor-default ${
                      idx !== 0 ? "pl-1.5 sm:pl-3" : ""
                    }`}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF0F5] border border-[#FF87B3] flex items-center justify-center text-[#D94D78] shadow-2xs mb-1.5 group-hover:scale-110 group-hover:bg-[#FFE5EE] group-hover:border-[#D94D78] transition-all duration-200">
                      <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#D94D78]" strokeWidth={2.2} />
                    </div>
                    <div className="text-[10.5px] sm:text-xs font-extrabold text-[#14213D] leading-tight">
                      {item.label}
                    </div>
                    <div className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-500 leading-tight">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Doctors Trio Sitting Cleanly at the Bottom of Hero Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative flex items-end justify-center lg:justify-end self-end select-none mt-6 lg:mt-0 z-10 pb-0 mb-0 leading-none"
          >
            {/* Vibrant Pink Circular Disc Backdrop Centered Behind Doctors */}
            <div
              className="absolute top-1/2 -translate-y-[45%] right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 w-[340px] sm:w-[440px] md:w-[500px] lg:w-[540px] xl:w-[580px] h-[340px] sm:h-[440px] md:h-[500px] lg:h-[540px] xl:h-[580px] rounded-full bg-gradient-to-tr from-[#FA5F8B] via-[#FF7AA2] to-[#FF9EBC] shadow-[0_20px_50px_rgba(217,77,120,0.30)] border-4 sm:border-8 border-white/60 pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* ── Doctor Trio Image Cutout Sitting Directly on the Bottom Edge ── */}
            <div className="relative z-10 w-full max-w-[460px] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] flex items-end justify-center lg:justify-end">
              <img
                src={doctorsHeroTeam}
                alt="Expert medical consultants and specialist doctors at SreeDevi Hospital"
                className="w-full h-auto object-contain object-bottom align-bottom block drop-shadow-[0_18px_36px_rgba(130,20,55,0.25)] select-none -mb-1"
                loading="eager"
                fetchPriority="high"
                draggable={false}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
