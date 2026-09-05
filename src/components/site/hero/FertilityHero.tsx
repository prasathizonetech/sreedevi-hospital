import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Award,
  Users,
  Baby,
  Heart,
  ChevronRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import fertilityHeroFoetusOrb from "@/assets/fertility/fertility-hero-foetus-orb.webp";

const TRUST_METRICS = [
  { icon: <HeartHandshake className="w-4 h-4" />, label: "Advanced IVF" },
  { icon: <Users className="w-4 h-4" />, label: "Experienced Specialists" },
  { icon: <Award className="w-4 h-4" />, label: "Personalized Care" },
  { icon: <Heart className="w-4 h-4" />, label: "Compassionate Support" },
  { icon: <Baby className="w-4 h-4" />, label: "Complete Fertility Care" },
];

export function FertilityHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="region"
      aria-label="Fertility & IVF Centre Hero"
      className="outline-none"
    >
      {/* ── 1. Main Hero Container with Seamless Full-Bleed Pink Atmosphere ── */}
      <section className="relative bg-gradient-to-r from-[#F9E2EB] via-[#F6C2D4] to-[#E98CAE] text-[#14213D] overflow-hidden min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[600px] flex items-center border-b border-[#FF87B3]">
        
        {/* ── Seamless Full-Bleed Right-Side Artwork (Touches Top, Right Corner, Bottom, Zero Square Edges) ── */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[64%] xl:w-[68%] h-full pointer-events-none select-none z-10 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,0.85) 28%, black 45%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,0.85) 28%, black 45%, black 100%)",
          }}
        >
          {/* Animated 3D Floating Fetus in Womb Artwork */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -6, 2, -4, 0],
                    scale: [1, 1.015, 0.995, 1.01, 1],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full flex items-center justify-end"
          >
            <img
              src={fertilityHeroFoetusOrb}
              alt="Realistic developing fetus inside glowing transparent womb bubble with cellular blastocysts and flowing soft waves"
              className="w-full h-full object-cover object-right select-none transform-gpu mix-blend-multiply"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
        </div>

        {/* ── Ambient Floating Glows & Fluid Womb Pulse Overlays ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-15" aria-hidden="true">
          {/* Large Radiant Ambient Backlight on Right */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.55, 0.85, 0.55],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 right-[10%] lg:right-[15%] w-[420px] lg:w-[600px] h-[420px] lg:h-[600px] rounded-full bg-gradient-to-tr from-white/70 via-pink-200/40 to-transparent blur-3xl"
          />

          {/* Realistic Womb Heartbeat Pulse Rings */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [0.96, 1.06, 0.98, 1.04, 0.96],
                    opacity: [0.35, 0.8, 0.45, 0.75, 0.35],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[18%] sm:right-[22%] lg:right-[20%] top-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[380px] rounded-full bg-gradient-to-tr from-white/90 via-pink-100/50 to-[#FF87B3]/40 blur-2xl"
          />

          {/* Floating Cellular Blastocysts with Fluid Organic Float */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -12, 3, -8, 0],
                    x: [0, 4, -3, 2, 0],
                    scale: [1, 1.06, 0.98, 1.04, 1],
                    rotate: [0, 8, -5, 3, 0],
                  }
            }
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-6 sm:right-12 lg:right-16 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-white via-pink-100 to-[#FF87B3]/60 shadow-[0_6px_20px_rgba(255,135,179,0.5)] border-2 border-white backdrop-blur-xs"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 10, -4, 8, 0],
                    x: [0, -3, 3, -2, 0],
                    scale: [1, 0.94, 1.03, 0.97, 1],
                    rotate: [0, -7, 4, -3, 0],
                  }
            }
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-8 right-[32%] sm:right-[36%] lg:right-[38%] w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-white via-pink-100 to-[#FF87B3]/50 shadow-[0_6px_18px_rgba(255,135,179,0.45)] border-2 border-white backdrop-blur-xs"
          />
        </div>

        {/* ── Left Content: Typography, Actions & Breadcrumbs ── */}
        <div className="container-page relative z-20 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 xl:col-span-5 max-w-xl"
            >
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#FB5783] uppercase mb-4 shadow-sm cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-[#FB5783]" />
                <span>FERTILITY &amp; IVF CENTRE</span>
              </div>

              {/* Main Heading */}
              <h1
                className="font-display font-extrabold text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.12] tracking-tight text-[#14213D] mb-3"
              >
                Where hope <br />
                becomes{" "}
                <span className="text-[#FB5783] relative inline-block">
                  family.
                  {/* Pink Accent Line */}
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FB5783] rounded-full" />
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-4 mb-6 max-w-lg font-medium">
                A fertility unit combining international expertise with genuinely compassionate
                counselling. We walk with you at every step of your parenthood journey.
              </p>

              {/* Pink "Book Consultation" Button */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5C8A] via-[#FB5783] to-[#DE356A] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-pink-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>

              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Link to="/" className="hover:text-[#FB5783] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 text-slate-400" />
                <span className="font-bold text-[#FB5783] bg-white border border-[#FF87B3] px-2.5 py-0.5 rounded-md shadow-2xs">
                  Fertility Centre
                </span>
              </nav>
            </motion.div>

            {/* Clear spacer for right side on desktop */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none min-h-[360px]" />

          </div>
        </div>
      </section>

      {/* ── 2. Bottom Trust-Feature Metric Strip (Compact & Left-Aligned) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container-page relative z-25 -translate-y-6 sm:-translate-y-8 flex justify-start"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#FFCCD9] px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5 shadow-[0_8px_28px_rgba(255,135,179,0.20)] w-fit max-w-full">
          <div className="flex flex-wrap sm:flex-nowrap items-center sm:divide-x divide-pink-100/90 gap-2 sm:gap-0">
            {TRUST_METRICS.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 sm:gap-2.5 px-1.5 sm:px-2.5 md:px-3.5 group cursor-default ${
                  idx === 0 ? "sm:pl-0.5" : ""
                } ${idx === TRUST_METRICS.length - 1 ? "sm:pr-0.5" : ""}`}
              >
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#FFF0F5] border border-[#FFCCD9] flex items-center justify-center text-[#FB5783] shrink-0 group-hover:bg-[#FB5783] group-hover:text-white transition-colors duration-200 shadow-2xs"
                >
                  {item.icon}
                </motion.div>
                <div className="text-[11px] sm:text-xs md:text-[12.5px] font-extrabold text-[#14213D] leading-tight whitespace-nowrap group-hover:text-[#FB5783] transition-colors">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
