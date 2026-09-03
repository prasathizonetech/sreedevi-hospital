import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Phone,
  ArrowRight,
  Sparkles,
  HeartPulse,
  ChevronRight,
  Bed,
  Ambulance,
  FlaskConical,
  Accessibility,
  Car,
  Users,
  Baby,
} from "lucide-react";
import { HeroBackground } from "@/components/site/hero/HeroBackground";
import reception from "@/assets/reception.jpg";
import delivery from "@/assets/delivery-room.jpg";
import lab from "@/assets/lab.jpg";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — SreeDevi Hospital" },
      {
        name: "description",
        content:
          "Labour suites, operation theatres, maternity wards, 24/7 lab, ultrasound, pharmacy and emergency services in Srirangam.",
      },
      { property: "og:title", content: "Facilities — SreeDevi Hospital" },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

// ─── Animation Variants ─────────────────────────────────────────────────────
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 18 },
  },
};

function FacilitiesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ── 1. Facilities Page Hero ── */}
      <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FF87B3] to-[#f06a99] text-[#14213D] overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated glow orbs, organic curves & decor */}
        <HeroBackground />

        <div className="container-page flex flex-col md:flex-row w-full items-center md:items-stretch gap-8 md:gap-0 relative z-10">
          {/* Left Column: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex-1 py-10 md:py-16 pr-0 md:pr-10 z-10 flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUpVariant}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-6 w-max shadow-sm cursor-default"
            >
              <Building2 className="w-3.5 h-3.5 text-[#D94D78]" />
              Facilities
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-4 tracking-tight text-[#14213D]"
            >
              World-class facilities,{" "}
              <span className="text-[#D94D78] underline decoration-[#FF87B3] decoration-wavy decoration-1 underline-offset-8">
                better care.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUpVariant}
              className="w-14 h-1.5 bg-gradient-to-r from-[#FF87B3] to-[#D94D78] rounded-full mb-6"
            />

            <motion.p
              variants={fadeUpVariant}
              className="text-slate-700 text-sm md:text-base leading-relaxed mb-8 max-w-md font-medium"
            >
              Our hospital is equipped with advanced technology and modern infrastructure to ensure
              the best care and comfort for every patient.
            </motion.p>

            {/* Breadcrumbs */}
            <motion.nav
              variants={fadeUpVariant}
              className="flex items-center gap-2 text-xs text-slate-600 font-medium"
            >
              <Link to="/" className="hover:text-[#D94D78] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-60 text-slate-400" />
              <span className="font-bold text-[#D94D78] bg-white border border-[#FF87B3] px-2.5 py-0.5 rounded-md shadow-2xs">
                Facilities
              </span>
            </motion.nav>
          </motion.div>

          {/* Right Column: Reception lobby image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative w-full md:w-[45%] lg:w-[50%] min-h-[300px] md:min-h-auto self-stretch overflow-hidden md:rounded-l-[200px] rounded-3xl shadow-2xl shadow-pink-900/10 border-4 border-white group"
          >
            <motion.img
              src={reception}
              alt="SreeDevi Hospital modern reception lobby"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full object-cover object-center transform-gpu"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. Overview Section with Facility Cards ── */}
      <section className="bg-gradient-to-b from-white via-[#FFF5F8]/40 to-white py-16 md:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 shadow-2xs">
              Our Facilities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
              Thoughtful spaces for every stage of care.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Designed to provide comfort, convenience and compassionate care for you and your loved
              ones.
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#FF87B3] rounded-full" />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Bed,
                t: "Maternity Wards",
                d: "Comfortable, private and well-equipped wards for a safe and joyful motherhood experience.",
              },
              {
                icon: Building2,
                t: "OPD & Consulting",
                d: "Spacious consultation rooms with minimal wait times and personalised care.",
              },
              {
                icon: Ambulance,
                t: "24×7 Emergency",
                d: "Round-the-clock emergency care with rapid response and advanced life support.",
              },
              {
                icon: FlaskConical,
                t: "In-house Diagnostics",
                d: "Advanced laboratory and imaging services for accurate, timely and reliable results.",
              },
              {
                icon: Accessibility,
                t: "Accessibility",
                d: "Barrier-free infrastructure with elevators, ramps and special assistance.",
              },
              {
                icon: Car,
                t: "Parking & Transit",
                d: "Ample parking space and easy access to public transport for your convenience.",
              },
            ].map((f) => (
              <motion.div
                key={f.t}
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.015,
                        boxShadow: "0 20px 45px -10px rgba(255,135,179,0.40)",
                      }
                }
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="flex flex-col justify-between rounded-3xl border border-[#FF87B3] bg-white p-7 md:p-8 shadow-xs hover:border-[#D94D78] transition-all duration-300 min-h-[220px] group cursor-default"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-12 h-12 rounded-full border border-[#FF87B3] bg-[#FFF5F8] flex items-center justify-center text-[#D94D78] shrink-0 group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-colors duration-300 shadow-2xs"
                    >
                      <f.icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="font-display text-base md:text-lg font-extrabold text-[#14213D] leading-tight group-hover:text-[#D94D78] transition-colors">
                      {f.t}
                    </h3>
                  </div>
                  <p className="mt-4 text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                    {f.d}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  <Link
                    to="/contact"
                    className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[#D94D78] hover:bg-[#FF87B3] hover:text-[#14213D] transition-colors shadow-2xs group-hover:scale-108 cursor-pointer"
                    aria-label={`Enquire about ${f.t}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Inside SreeDevi Section ── */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 shadow-2xs">
              Inside SreeDevi
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
              See the spaces behind the care.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Modern facilities, designed for comfort, safety, and compassion — so you feel
              supported at every step.
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#FF87B3] rounded-full" />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-7 md:grid-cols-3"
          >
            {[
              {
                img: reception,
                category: "Outpatient Care",
                title: "Welcoming OPD & Reception",
                desc: "A calm start to every visit.",
                icon: Users,
              },
              {
                img: delivery,
                category: "Maternity Care",
                title: "Labour & Delivery Suite",
                desc: "Safe, private, and designed for new beginnings.",
                icon: Baby,
              },
              {
                img: lab,
                category: "Diagnostics",
                title: "In-house Diagnostic Lab",
                desc: "Accurate results, faster decisions.",
                icon: FlaskConical,
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        scale: 1.015,
                        boxShadow: "0 22px 45px -10px rgba(255,135,179,0.40)",
                      }
                }
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="overflow-hidden rounded-3xl border border-[#FF87B3] bg-white shadow-xs hover:border-[#D94D78] transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <motion.img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="w-full h-full object-cover transform-gpu"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[#D94D78] shrink-0 group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-colors duration-300 shadow-2xs">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[#D94D78] text-[10px] font-extrabold tracking-widest uppercase block mb-1">
                        {c.category}
                      </span>
                      <h3 className="font-display text-[16px] font-extrabold text-[#14213D] leading-snug group-hover:text-[#D94D78] transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-medium">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF87B3] bg-white px-7 py-3 text-xs md:text-sm font-extrabold text-[#14213D] hover:bg-[#FFF5F8] transition-all shadow-xs cursor-pointer"
              >
                View full gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Emergency Section ── */}
      <section className="bg-gradient-to-tr from-[#FFF5F8] via-[#fffcfd] to-white py-16 md:py-24 border-t border-b border-slate-100 overflow-hidden relative">
        <div className="container-page relative z-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] items-center">
            {/* Left Card: Large Navy Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -4, boxShadow: "0 25px 60px -15px rgba(16,42,84,0.35)" }
              }
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#102A54] to-[#0A1D3D] p-8 md:p-12 text-white flex flex-col justify-center min-h-[380px] shadow-xl transition-all duration-300"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dc2626] text-white font-extrabold text-[11px] uppercase tracking-wider mb-6 w-max shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Emergency
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display leading-tight mb-4">
                24×7 emergency response.
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-90 max-w-sm mb-6 font-medium">
                Our emergency line is answered around the clock. In case of a maternity or medical
                emergency, call for the fastest response.
              </p>

              <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
            </motion.div>

            {/* Right Card: Emergency phone line box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-[480px] bg-white rounded-3xl border border-[#FF87B3] p-8 md:p-10 shadow-[0_8px_30px_rgba(255,135,179,0.15)] flex flex-col items-center justify-center text-center">
                <motion.div
                  animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full border-2 border-[#FF87B3] bg-[#FFF5F8] flex items-center justify-center text-[#D94D78] mb-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full border border-[#FF87B3] bg-white flex items-center justify-center text-[#D94D78]">
                    <Phone className="w-5 h-5" />
                  </div>
                </motion.div>

                <span className="text-[#dc2626] text-xs font-extrabold tracking-widest uppercase block mb-3">
                  Emergency Line
                </span>

                <a
                  href="tel:+919843499055"
                  className="text-2xl md:text-3xl font-extrabold text-[#14213D] font-display hover:text-[#D94D78] transition-colors mb-4 block"
                >
                  +91 98434 99055
                </a>

                <div className="text-xs md:text-sm text-slate-500 font-extrabold mb-8 flex justify-center gap-3">
                  <span>0431-4011631</span>
                  <span className="text-pink-300">•</span>
                  <span>0431-2437071</span>
                </div>

                <motion.a
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+919843499055"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white px-8 py-4 font-bold text-base shadow-lg shadow-red-500/25 w-full transition-all cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  Call now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
