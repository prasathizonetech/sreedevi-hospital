import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { DoctorCard } from "@/components/site/DoctorCard";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";
import doctorsTeamArch from "@/assets/doctors-team-arch.png";
import { HeroBackground } from "@/components/site/hero/HeroBackground";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  Stethoscope,
  Baby,
  HeartPulse,
  Wind,
  Users,
  Heart,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Filter,
} from "lucide-react";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — SreeDevi Hospital & Fertility Centre" },
      {
        name: "description",
        content:
          "Meet our consultants across gynaecology, fertility, general medicine, diabetes and respiratory care in Srirangam.",
      },
      { property: "og:title", content: "Our Doctors — SreeDevi Hospital" },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
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
    transition: { type: "spring", stiffness: 65, damping: 18 },
  },
};

const filterTabs = [
  { id: "all", label: "All Specialists", icon: Users },
  { id: "fertility", label: "Gynaecology & Fertility", icon: Baby },
  { id: "diabetes", label: "Diabetes & Metabolic", icon: HeartPulse },
  { id: "general-medicine", label: "General Medicine", icon: Stethoscope },
  { id: "respiratory", label: "Pulmonology & Chest", icon: Wind },
] as const;

function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  // Filter doctors based on active department filter
  const filteredDoctors = doctors.filter((doctor) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fertility") {
      return ["fertility", "obstetrics", "gynaecology", "infertility"].includes(
        doctor.departmentId,
      );
    }
    if (activeFilter === "respiratory") {
      return ["respiratory", "pulmonology"].includes(doctor.departmentId);
    }
    return doctor.departmentId === activeFilter;
  });

  return (
    <>
      {/* ── 1. Doctors Page Hero: Organic Arch Image + Soft Pink Medical Elements ── */}
      <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FFEBF2] to-[#FFF0F6] text-[#14213D] overflow-hidden pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-18 border-b border-[#FF87B3]">
        {/* Soft Background Curves and Glow Orbs */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-2 pb-2">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* ── Left Column: Clean Title, Description, Button, Badge & Bottom Feature Strip (6 cols) ── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:col-span-6 max-w-xl"
            >
              {/* Eyebrow Tag with Pink Underline */}
              <motion.div variants={fadeUpVariant} className="flex flex-col items-start mb-4">
                <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#FB5783] uppercase">
                  OUR DOCTORS
                </span>
                <div className="w-9 h-1 bg-[#FB5783] rounded-full mt-1.5" />
              </motion.div>

              {/* ── Clear, Simple English Heading ── */}
              <motion.h1
                variants={fadeUpVariant}
                className="font-serif font-bold text-[38px] sm:text-[46px] md:text-[52px] lg:text-[56px] leading-[1.12] tracking-tight text-[#14213D] mb-4"
                style={{ fontFamily: "'Playfair Display', 'Lora', Georgia, serif", fontWeight: 700 }}
              >
                Expert Doctors. <br />
                Exceptional <span className="text-[#FB5783]">Care.</span>
              </motion.h1>

              {/* ── Simple, Clear English Description ── */}
              <motion.p
                variants={fadeUpVariant}
                className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-lg font-medium"
              >
                Our team of highly qualified and experienced doctors is committed to your health and
                well-being.
              </motion.p>

              {/* Action Button & Floating Stethoscope Badge */}
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-4 mb-8"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById("specialists-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5C8A] via-[#FB5783] to-[#DE356A] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-pink-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Meet Our Doctors</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                {/* Floating Soft Pink Stethoscope Badge */}
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#FF87B3]/70 text-[#FB5783] shadow-md flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                >
                  <Stethoscope className="w-5 h-5 text-[#FB5783]" />
                </motion.div>
              </motion.div>

              {/* ── Bottom Left Trust Feature Strip ── */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#FF87B3]/50 p-4 sm:p-5 shadow-[0_10px_30px_rgba(255,135,179,0.20)] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4 max-w-lg"
              >
                <div className="flex flex-col items-center text-center gap-1.5 flex-1 min-w-[70px]">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[#FB5783]">
                    <Users className="w-4 h-4 text-[#FB5783]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#14213D] leading-tight">
                    Experienced <br className="hidden sm:inline" />Professionals
                  </span>
                </div>

                <div className="hidden sm:block w-px h-8 bg-pink-100" />

                <div className="flex flex-col items-center text-center gap-1.5 flex-1 min-w-[70px]">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[#FB5783]">
                    <Heart className="w-4 h-4 text-[#FB5783]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#14213D] leading-tight">
                    Personalized <br className="hidden sm:inline" />Care
                  </span>
                </div>

                <div className="hidden sm:block w-px h-8 bg-pink-100" />

                <div className="flex flex-col items-center text-center gap-1.5 flex-1 min-w-[70px]">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[#FB5783]">
                    <FlaskConical className="w-4 h-4 text-[#FB5783]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#14213D] leading-tight">
                    Latest <br className="hidden sm:inline" />Technology
                  </span>
                </div>

                <div className="hidden sm:block w-px h-8 bg-pink-100" />

                <div className="flex flex-col items-center text-center gap-1.5 flex-1 min-w-[70px]">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[#FB5783]">
                    <ShieldCheck className="w-4 h-4 text-[#FB5783]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#14213D] leading-tight">
                    Patient First <br className="hidden sm:inline" />Approach
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Column: Organic Arch Image & Floating Pink Medical Elements (6 cols) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex items-center justify-center select-none py-2"
            >
              {/* Organic Arch Container Framing the 4 Doctors */}
              <div className="relative w-full max-w-[560px] h-[360px] sm:h-[430px] lg:h-[470px] overflow-hidden rounded-[180px_40px_160px_160px] border-4 border-white shadow-[0_20px_50px_rgba(251,87,131,0.25)] ring-2 ring-[#FF87B3]/40 group">
                <img
                  src={doctorsTeamArch}
                  alt="SreeDevi Hospital Expert Medical Doctors Team"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />

                {/* Soft pink gradient highlight along arch bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Heartbeat ECG Badge (Top-Right) */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#FF87B3] text-[#FB5783] shadow-md flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <HeartPulse className="w-6 h-6 text-[#FB5783]" />
              </motion.div>

              {/* Floating 3D Pink Plus Symbol (Bottom-Right) */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [1, 1.08, 1], rotate: [0, 4, 0, -4, 0] }
                }
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 right-2 sm:right-6 z-20 pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center shadow-lg shadow-pink-500/20">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-2 h-6 bg-gradient-to-b from-[#FF6B97] to-[#DE356A] rounded-full shadow-xs border border-white/50" />
                    <div className="absolute h-2 w-6 bg-gradient-to-r from-[#FF6B97] to-[#DE356A] rounded-full shadow-xs border border-white/50" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Filter & Specialist Section ── */}
      <section id="specialists-section" className="relative py-14 md:py-20 bg-gradient-to-b from-white via-[#FFF5F8]/40 to-white overflow-hidden">
        <div className="container-page relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 shadow-2xs">
              <Filter className="w-3 h-3 text-[#D94D78]" />
              By Department
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
              Specialists across every department.
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-5 font-medium">
              Select a specialty below to view our experienced consultants, their consultation
              timings, and qualifications.
            </p>

            <div className="flex items-center justify-center gap-1.5 mb-8">
              <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#FF87B3] rounded-full" />
            </div>

            {/* ── Animated Department Filter Pills ── */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 p-1.5 bg-[#FFF5F8] backdrop-blur-md rounded-2xl border border-[#FF87B3] max-w-fit mx-auto shadow-inner">
              {filterTabs.map((tab) => {
                const isSelected = activeFilter === tab.id;
                const Icon = tab.icon;

                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-[13px] font-bold transition-colors duration-200 select-none cursor-pointer ${
                      isSelected ? "text-[#14213D]" : "text-[#14213D]/70 hover:text-[#D94D78]"
                    }`}
                  >
                    {/* Active Background Pill */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeDoctorFilterPill"
                        className="absolute inset-0 bg-white rounded-xl shadow-sm border border-[#FF87B3]"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}

                    {/* Animated Pink Underline for Active Filter */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeDoctorFilterUnderline"
                        className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#D94D78] rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      {Icon && (
                        <Icon
                          className={`w-3.5 h-3.5 ${isSelected ? "text-[#D94D78]" : "text-slate-500"}`}
                        />
                      )}
                      <span>{tab.label}</span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* ── 3. Doctor Cards Grid ── */}
          <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 relative">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((d) => (
                <DoctorCard key={d.id} doctor={d} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* If no doctors match filter */}
          {filteredDoctors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-500 text-sm">No doctors found for this category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-3 text-xs font-bold text-[#D94D78] hover:underline cursor-pointer"
              >
                View all doctors
              </button>
            </motion.div>
          )}

          {/* ── All Departments Badges List ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 pt-10 border-t border-pink-100"
          >
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D94D78]">
                All Hospital Departments &amp; Specialities
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
              {departments.map((d) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.id}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -3,
                            scale: 1.04,
                            boxShadow: "0 10px 20px -5px rgba(255,135,179,0.40)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#FF87B3] bg-white px-3.5 py-2 text-xs font-semibold text-[#14213D] shadow-2xs hover:border-[#f06a99] hover:bg-[#FFF5F8] hover:text-[#14213D] transition-colors cursor-default"
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 text-[#D94D78]" />}
                    <span>{d.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
