import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Users,
  Award,
  Heart,
  Clock,
  ChevronRight,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import doctorsTeamArch from "@/assets/doctors-team-arch.png";

// Image imports for hero rotating carousel
import heroImg1 from "@/assets/about/about-hero-1.jpg";
import heroImg2 from "@/assets/about/about-hero-2.jpg";
import heroImg3 from "@/assets/about/about-hero-3.jpg";
import heroImg4 from "@/assets/about/about-hero-4.png";

const HERO_IMAGES = [
  {
    src: heroImg1,
    alt: "Caring doctor and smiling mother with newborn baby at SreeDevi Hospital",
    caption: "Maternity & Newborn Care",
  },
  {
    src: heroImg2,
    alt: "Happy parents holding newborn baby with doctor in hospital suite",
    caption: "Compassionate Family Care",
  },
  {
    src: heroImg3,
    alt: "Expert medical team of doctors at SreeDevi Hospital & Fertility Centre",
    caption: "Experienced Clinical Specialists",
  },
  {
    src: heroImg4,
    alt: "Dedicated doctors and nursing staff at SreeDevi Hospital corridor",
    caption: "24/7 Patient-Centric Support",
  },
];

const HEADLINES = [
  {
    id: "headline-1",
    content: (
      <>
        Compassionate Care <br />
        for Every Stage of <br />
        <span className="text-[#DE356A] inline-block">Family Life.</span>
      </>
    ),
  },
  {
    id: "headline-2",
    content: (
      <>
        Caring for Your Journey, <br />
        <span className="text-[#DE356A] inline-block">Every Step of the Way.</span>
      </>
    ),
  },
];

const STATS = [
  {
    icon: Award,
    value: "28+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Happy Families",
  },
  {
    icon: Heart,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: Clock,
    value: "24×7",
    label: "Emergency Care",
  },
] as const;

export function AboutHero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Text transition timer: changes headline every 5 seconds with left-to-right flow
  useEffect(() => {
    const textTimer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 5000);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#FFF5F8] via-[#FFF9FB] to-white overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#FFCCD9]/60">
      {/* ── Background Glows & Ambient Lights ── */}
      <div
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#FF87B3]/35 via-[#f06a99]/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FFF5F8] via-[#FF87B3]/20 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Perspective Floor Grid Mesh (Right Side depth) ── */}
      <div
        className="absolute -bottom-10 right-0 w-[55%] h-[60%] pointer-events-none opacity-45 hidden lg:block overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse at 70% 60%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 60%, black 20%, transparent 80%)",
        }}
        aria-hidden="true"
      >
        <div
          className="w-full h-full hero-mesh-floor"
          style={{
            transform: "perspective(600px) rotateX(60deg) scale(1.4)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Main Grid: Left Content & Right 3D Glass Stack */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* ── LEFT COLUMN: Text, Badge, CTA & Breadcrumbs (6 cols) ──────── */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FFEBF2] border border-[#FF87B3] px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-[#D94D78] uppercase mb-4 w-fit shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D94D78]" />
              <span>ABOUT SREEDEVI HOSPITAL</span>
            </motion.div>

            {/* ── Animated Headline in Title Case & Geometric Bold Style ── */}
            {/* Layout-locked height container ensures zero layout jumps when changing text */}
            <div className="relative min-h-[140px] sm:min-h-[155px] md:min-h-[185px] lg:min-h-[205px] xl:min-h-[225px] flex items-start mb-3">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={HEADLINES[headlineIndex].id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: -35, filter: "blur(4px)" }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          x: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.85,
                            ease: [0.16, 1, 0.3, 1], // Smooth luxury ease-out
                          },
                        }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: 35,
                          filter: "blur(4px)",
                          transition: {
                            duration: 0.6,
                            ease: [0.7, 0, 0.84, 0], // Smooth left-to-right flow slide-out
                          },
                        }
                  }
                  className="font-display font-bold xl:font-extrabold text-[36px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[56px] leading-[45px] sm:leading-[50px] md:leading-[58px] lg:leading-[64px] xl:leading-[70px] tracking-tight text-[#14213D]"
                  style={{ fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
                >
                  {HEADLINES[headlineIndex].content}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Pink Accent Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="w-14 h-1 bg-[#DE356A] rounded-full mb-6 origin-left"
            />

            {/* Paragraph Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-normal"
            >
              At SreeDevi Hospital &amp; Fertility Centre, Srirangam, we are dedicated to delivering
              trusted, personalized healthcare for women and families. From fertility care to
              maternity and beyond, we are here to support you at every step of your journey.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3.5 mb-6"
            >
              {/* Primary Contact Us Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E94E77] via-[#DE356A] to-[#D92F60] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary Our Services Button */}
              <Link
                to="/departments"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[#FFCCD9] text-[#14213D] px-6 py-3.5 text-sm font-bold shadow-xs hover:bg-[#FFF5F8] hover:border-[#FF87B3] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <Users className="w-4.5 h-4.5 text-[#DE356A]" />
                <span>Our Services</span>
              </Link>
            </motion.div>

            {/* Breadcrumbs */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-slate-400 font-medium"
            >
              <Link to="/" className="hover:text-[#DE356A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className="font-semibold text-[#DE356A]">About Us</span>
            </motion.nav>
          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* ── RIGHT COLUMN: Organic Arch Doctor Team & Floating Medical Elements (6 cols) ─ */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end py-4 lg:py-2 select-none">
            <div className="relative w-full max-w-[560px] xl:max-w-[600px] flex items-center justify-center">
              {/* ── Background Soft Pink Decorative Wave Curves ── */}
              <div className="absolute -inset-4 sm:-inset-6 pointer-events-none z-0">
                <svg
                  viewBox="0 0 600 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-65 filter drop-shadow-[0_10px_20px_rgba(255,135,179,0.25)]"
                >
                  {/* Outer sweeping soft pink wave */}
                  <path
                    d="M120,40 C280,-20 460,30 560,160 C640,270 540,430 380,470 C220,510 60,420 40,280 C20,150 50,60 120,40 Z"
                    fill="url(#waveBgGrad1)"
                    fillOpacity="0.45"
                  />
                  {/* Inner accent wave line */}
                  <path
                    d="M160,80 C300,30 460,70 520,190 C580,300 480,410 350,440 C220,470 90,380 80,260 C70,150 90,100 160,80 Z"
                    stroke="#FF87B3"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    strokeOpacity="0.6"
                  />
                  <defs>
                    <linearGradient id="waveBgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF0F5" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#FFE4ED" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FFD1E0" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* ── Main Organic Arch Image Frame ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full aspect-[4/3] sm:aspect-[16/11] max-h-[460px] overflow-hidden rounded-[160px_40px_140px_140px] p-2 bg-gradient-to-br from-white/95 via-white/50 to-[#FFEBF2]/80 backdrop-blur-xl border-4 border-white shadow-[0_20px_50px_rgba(251,87,131,0.22)] ring-2 ring-[#FF87B3]/50 group"
              >
                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-[148px_32px_128px_128px] overflow-hidden bg-[#FFF5F8]">
                  <img
                    src={doctorsTeamArch}
                    alt="SreeDevi Hospital Expert Medical Specialists Team"
                    className="w-full h-full object-cover object-center transform-gpu group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Soft pink bottom gradient highlight for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* ── 1. Floating ECG Heart Icon (Top-Right) ── */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 right-3 sm:-top-5 sm:right-6 z-20 pointer-events-none"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-[#FF87B3] text-[#FB5783] shadow-lg shadow-pink-500/20 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7 text-[#FB5783]" />
                </div>
              </motion.div>

              {/* ── 2. Floating Stethoscope Icon (Left-Center) ── */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 8, 0], x: [0, -3, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-1/2 -left-3 sm:-left-6 -translate-y-1/2 z-20 pointer-events-none"
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-[#FF87B3]/80 text-[#FB5783] shadow-md shadow-pink-500/15 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#FB5783]" />
                </div>
              </motion.div>

              {/* ── 3. Floating 3D Medical Plus Icon (Bottom-Right) ── */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }
                }
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-6 z-20 pointer-events-none"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/80 backdrop-blur-md border-2 border-white shadow-xl shadow-pink-500/25 flex items-center justify-center">
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    <div className="absolute w-2.5 h-6 sm:h-7 bg-gradient-to-b from-[#FF6B97] to-[#DE356A] rounded-full shadow-xs border border-white/60" />
                    <div className="absolute h-2.5 w-6 sm:w-7 bg-gradient-to-r from-[#FF6B97] to-[#DE356A] rounded-full shadow-xs border border-white/60" />
                  </div>
                </div>
              </motion.div>

              {/* ── 4. Floating Small Heart Decoration (Bottom-Left) ── */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: [0, -6, 0], scale: [1, 1.05, 1] }
                }
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-3 left-6 sm:-bottom-4 sm:left-10 z-20 pointer-events-none"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#E93B6C] to-[#FF87B3] border border-white text-white shadow-md shadow-pink-500/30 flex items-center justify-center">
                  <Heart className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white fill-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* ── BOTTOM STATS BAR: 4 Metrics Pill Card ────────────────────── */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-10 sm:mt-12 bg-white/95 backdrop-blur-md border border-[#FFCCD9] rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_rgba(255,135,179,0.18)] px-5 py-4 sm:px-8 sm:py-5 w-fit max-w-full"
        >
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap md:flex-nowrap items-center divide-y sm:divide-y-0 sm:divide-x divide-pink-100 gap-y-4 sm:gap-y-0">
            {STATS.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex items-center gap-3.5 px-3 sm:px-5 md:px-6 ${
                  index === 0 ? "sm:pl-0" : ""
                } ${index === STATS.length - 1 ? "sm:pr-0" : ""}`}
              >
                {/* Soft Pink Icon Circle Badge */}
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFF0F5] border border-[#FFCCD9] flex items-center justify-center text-[#DE356A] shadow-xs">
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                {/* Value and Label */}
                <div className="text-left">
                  <div className="font-extrabold text-[#14213D] text-lg sm:text-xl leading-tight whitespace-nowrap">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium whitespace-nowrap">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default AboutHero;
