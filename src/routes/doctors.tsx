import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { DoctorCard } from "@/components/site/DoctorCard";
import { HeroBackground } from "@/components/site/hero/HeroBackground";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";
import ourStoryDoctors from "@/assets/our-story-doctors.png";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  Stethoscope,
  Baby,
  HeartPulse,
  Wind,
  Sparkles,
  Plus,
  ChevronRight,
  Users,
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
      {/* ── 1. Doctors Page Hero on Solid #FF87B3 ── */}
      <section className="relative bg-[#FF87B3] text-[#14213D] overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-4 md:pt-6 pb-2">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* ── Left Column: Title, Subtitle & Breadcrumbs ── */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-6 shadow-sm cursor-default"
              >
                <Stethoscope className="w-3.5 h-3.5 text-[#D94D78]" />
                Our Doctors
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-4 tracking-tight text-[#14213D]"
              >
                A close-knit team, deeply trusted by{" "}
                <span className="text-[#D94D78] underline decoration-[#FF87B3] decoration-wavy decoration-1 underline-offset-8">
                  Srirangam.
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
                Consultants who take the time to listen, explain and reassure. Dedicated to
                compassionate and ethical care for every family.
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
                  Doctors
                </span>
              </motion.nav>
            </motion.div>

            {/* ── Right Column: Doctors Image with Curved Outline & Hover Zoom ── */}
            <div className="relative flex items-center justify-center lg:justify-end w-full max-w-[480px] h-[360px] mx-auto lg:mx-0">
              <div
                className="absolute inset-0 pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                <div className="absolute inset-x-2 inset-y-1 rounded-[200px_80px_200px_200px] border border-dashed border-[#f06a99]/60 scale-102" />
              </div>

              {/* Main Photo Card */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full h-[320px] overflow-hidden rounded-[200px_80px_200px_200px] border-8 border-white shadow-2xl shadow-pink-900/10 group"
              >
                <motion.img
                  src={ourStoryDoctors}
                  alt="SreeDevi Hospital Doctors Team"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover object-center transform-gpu"
                />
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-[50%] lg:left-[46%] -translate-x-1/2 w-6 h-6 rounded-full bg-[#FF87B3] z-20 border-4 border-white shadow-md"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Filter & Specialist Section ── */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-[#FFF5F8]/40 to-white overflow-hidden">
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
                      <Icon
                        className={`w-3.5 h-3.5 ${isSelected ? "text-[#D94D78]" : "text-slate-500"}`}
                      />
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
                    <Icon className="h-3.5 h-3.5 text-[#D94D78]" />
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
