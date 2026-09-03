import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Layers,
  ArrowRight,
  Check,
  Plus,
  HelpCircle,
  Stethoscope,
  Baby,
  Waves,
  FlaskConical,
  HeartPulse,
  HeartHandshake,
  Sparkles,
  ChevronRight,
  Users,
  ShieldCheck,
  Heart,
  Scissors,
  Bone,
  Wind,
} from "lucide-react";
import { HeroBackground } from "@/components/site/hero/HeroBackground";
import { departments } from "@/data/departments";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const DEPARTMENT_HEADLINES = [
  {
    id: "dept-head-1",
    content: (
      <>
        Comprehensive Care, <br />
        Quietly Organised <br />
        <span className="text-[#DE356A]">Around You.</span>
      </>
    ),
  },
  {
    id: "dept-head-2",
    content: (
      <>
        Better Healthcare, <br />
        Beautifully Organised <br />
        <span className="text-[#DE356A]">for You.</span>
      </>
    ),
  },
];

const serviceCategories = [
  {
    title: "Maternity Services",
    icon: Baby,
    items: [
      "Normal Delivery",
      "Caesarean Delivery",
      "Painless Delivery",
      "High Risk Pregnancy Care",
      "Foetal Medicine",
    ],
  },
  {
    title: "Gynaecology Services",
    icon: Stethoscope,
    items: [
      "Infertility / IVF / IUI",
      "Well Women Checkup",
      "Menopause Clinic",
      "Postmenopausal Clinic",
      "Preconception Counselling",
    ],
  },
  {
    title: "Gynaecology Procedures",
    icon: HeartPulse,
    items: [
      "Advanced Laparoscopic Procedure",
      "Hysteroscopy Procedure",
      "Cervical Cancer Screening",
      "Breast Examination",
    ],
  },
  {
    title: "Ultrasound / Sonography",
    icon: Waves,
    items: [
      "Abdomen and Pelvis",
      "Obstetrics Scan",
      "Follicular Study",
      "Breast Scan",
      "Thyroid Scan",
      "Small Parts",
      "Arterial Scan",
      "Vein Scan",
      "Echocardiogram",
      "Ultrasound Scan",
      "3D/4D & Colour Doppler",
    ],
  },
  {
    title: "Diagnostic Services",
    icon: FlaskConical,
    items: [
      "24 Hours Diagnostic Laboratory & Pharmacy",
      "24 Hours Ultrasound, Colour Doppler",
      "ECG",
      "Echo",
      "Audiometry",
      "Hearing Aid Fitting",
      "X-Ray",
      "Lab (24 Hrs)",
    ],
  },
  {
    title: "Other Services",
    icon: Plus,
    items: ["Obesity Management", "Pharmacy"],
  },
];

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments & Specialities — SreeDevi Hospital" },
      {
        name: "description",
        content:
          "Obstetrics, gynaecology, infertility, general medicine, surgery, orthopaedics, dermatology, pulmonology, physiotherapy and ENT under one roof in Srirangam.",
      },
      { property: "og:title", content: "Departments — SreeDevi Hospital" },
      { property: "og:url", content: "/departments" },
    ],
    links: [{ rel: "canonical", href: "/departments" }],
  }),
  component: DepartmentsPage,
});

// ─── Shared Animation Variants ──────────────────────────────────────────────
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
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

function DepartmentsPage() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Rotate headline every 5 seconds with smooth left-to-right flow
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % DEPARTMENT_HEADLINES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── 1. Departments Page Hero ── */}
      <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FFEBF2] to-[#FFF0F6] text-[#14213D] overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-6 lg:pb-14 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated glow orbs, organic curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-1 md:pt-2 pb-2">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* ── Left Column: Title, Subtitle, CTA & Stats (7 cols) ── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 max-w-2xl"
            >
              {/* Eyebrow Tag */}
              <motion.div
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#DE356A] uppercase mb-3.5 shadow-sm cursor-default"
              >
                <Layers className="w-3.5 h-3.5 text-[#DE356A]" />
                <span>DEPARTMENTS &amp; SPECIALITIES</span>
              </motion.div>

              {/* ── Animated Headline in Title Case & Elegant Serif Style (No Glow/Shadow) ── */}
              <div className="relative min-h-[130px] sm:min-h-[145px] md:min-h-[165px] lg:min-h-[180px] xl:min-h-[195px] flex items-start mb-2">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={DEPARTMENT_HEADLINES[headlineIndex].id}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: -35 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : {
                            opacity: 1,
                            x: 0,
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
                            transition: {
                              duration: 0.6,
                              ease: [0.7, 0, 0.84, 0], // Smooth left-to-right flow slide-out
                            },
                          }
                    }
                    className="font-serif font-semibold text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px] leading-[1.14] tracking-tight text-[#14213D]"
                    style={{ fontFamily: "'Playfair Display', 'Lora', Georgia, serif", fontWeight: 600 }}
                  >
                    {DEPARTMENT_HEADLINES[headlineIndex].content}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Pink Accent Line */}
              <motion.div
                variants={fadeUpVariant}
                className="w-14 h-1.5 bg-[#DE356A] rounded-full mb-4"
              />

              {/* Description Paragraph */}
              <motion.p
                variants={fadeUpVariant}
                className="text-slate-700 text-sm md:text-base leading-relaxed mb-5 max-w-xl font-medium"
              >
                From fertility and maternity to everyday family medicine, our specialists and
                advanced facilities work together to support you at every stage of life.
              </motion.p>

              {/* Action Button */}
              <motion.div variants={fadeUpVariant} className="mb-6">
                <button
                  onClick={() => {
                    const el = document.getElementById("departments-list");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF5C8A] to-[#DE356A] text-white px-7 py-3.5 text-sm font-bold shadow-md shadow-pink-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Explore All Departments</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </motion.div>

              {/* ── 3 Stats Pill Row ── */}
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap items-center gap-6 sm:gap-10 pt-3 border-t border-pink-200/70"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#FF87B3] flex items-center justify-center text-[#DE356A] shadow-2xs">
                    <Users className="w-5 h-5 text-[#DE356A]" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#14213D] leading-tight">20+</div>
                    <div className="text-xs text-slate-600 font-semibold">Specialities</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#FF87B3] flex items-center justify-center text-[#DE356A] shadow-2xs">
                    <ShieldCheck className="w-5 h-5 text-[#DE356A]" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#14213D] leading-tight">50+</div>
                    <div className="text-xs text-slate-600 font-semibold">Expert Doctors</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#FF87B3] flex items-center justify-center text-[#DE356A] shadow-2xs">
                    <Heart className="w-5 h-5 text-[#DE356A]" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#14213D] leading-tight">1L+</div>
                    <div className="text-xs text-slate-600 font-semibold">Lives Touched</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Column: 3D Floating Diamond Department Cluster (Shifted slightly Left for perfect balance) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[510px] flex items-center justify-center lg:justify-start lg:-ml-6 xl:-ml-12 select-none py-4"
            >
              {/* Radial Container for Cluster */}
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] flex items-center justify-center">
                {/* ── Center Large Pink Diamond: Obstetrics & Gynecology ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -4, 0],
                        }
                  }
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 w-36 h-36 sm:w-44 sm:h-44 rounded-[32px] sm:rounded-[38px] bg-gradient-to-tr from-[#FF5C8A] via-[#FB5783] to-[#DE356A] shadow-[0_20px_50px_rgba(251,87,131,0.45)] border-3 sm:border-4 border-white rotate-45 flex items-center justify-center cursor-pointer group"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center text-white px-2">
                    <Baby className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1 drop-shadow-xs group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-extrabold text-xs sm:text-sm md:text-[15px] leading-tight drop-shadow-xs">
                      Obstetrics &amp; <br />Gynecology
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 1: Top (Pediatrics) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -6, 0],
                        }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute -top-1 sm:-top-3 left-1/2 -translate-x-1/2 z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <Users className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      Pediatrics
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 2: Top-Right (General Surgery) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, 4, 0],
                          y: [0, -3, 0],
                        }
                  }
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute top-[12%] right-[4%] sm:right-[6%] z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <Scissors className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      General<br />Surgery
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 3: Right (Infertility & IVF) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, 5, 0],
                        }
                  }
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <Sparkles className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      Infertility<br />&amp; IVF
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 4: Bottom-Right (Radiology / Scan) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, 4, 0],
                          y: [0, 4, 0],
                        }
                  }
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute bottom-[12%] right-[4%] sm:right-[6%] z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <Waves className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      Radiology &amp;<br />Scan
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 5: Bottom (Pathology & Lab) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, 6, 0],
                        }
                  }
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-1 sm:-bottom-3 left-1/2 -translate-x-1/2 z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <FlaskConical className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      Pathology &amp;<br />Lab
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 6: Bottom-Left (Orthopaedics) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, -4, 0],
                          y: [0, 4, 0],
                        }
                  }
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-[12%] left-[4%] sm:left-[6%] z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <Bone className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      Orthopaedic<br />Care
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 7: Left (Pulmonology & Chest) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, -5, 0],
                        }
                  }
                  transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -left-2 sm:-left-4 -translate-y-1/2 z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <Wind className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      Pulmonology<br />&amp; Chest
                    </span>
                  </div>
                </motion.div>

                {/* ── CARD 8: Top-Left (General Medicine) ── */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.08, zIndex: 35 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, -4, 0],
                          y: [0, -3, 0],
                        }
                  }
                  transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  className="absolute top-[12%] left-[4%] sm:left-[6%] z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-2xl sm:rounded-[22px] bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_12px_28px_rgba(251,87,131,0.20)] rotate-45 flex items-center justify-center cursor-pointer group hover:bg-[#FFF5F8] transition-colors"
                >
                  <div className="-rotate-45 flex flex-col items-center justify-center text-center px-1">
                    <HeartPulse className="w-5 h-5 text-[#FB5783] mb-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-[#14213D] leading-tight">
                      General<br />Medicine
                    </span>
                  </div>
                </motion.div>

                {/* ── Ambient Glossy Pink Spheres ── */}
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-2 sm:-top-6 sm:right-0 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#FF5C8A] via-[#FF87B3] to-white shadow-[0_8px_20px_rgba(251,87,131,0.35)] border border-white/80 pointer-events-none"
                />

                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, 8, 0], scale: [1, 1.06, 1] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:left-0 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#FF5C8A] via-[#FF87B3] to-white shadow-[0_8px_20px_rgba(251,87,131,0.35)] border border-white/80 pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Departments List Section ── */}
      <section id="departments-list" className="relative container-page py-16 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 shadow-2xs">
            Specialities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
            Clinical Excellence across every discipline.
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#FF87B3] rounded-full" />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {departments.map((d) => (
            <motion.article
              key={d.id}
              variants={fadeUpVariant}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 22px 50px -10px rgba(255,135,179,0.45)",
                    }
              }
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#FF87B3] bg-white p-7 shadow-sm hover:border-[#D94D78] transition-all duration-300 cursor-default"
            >
              <div className="relative z-10">
                {/* Department Icon */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#FF87B3] to-[#f06a99] border border-[#f06a99] text-[#14213D] shadow-md transition-all duration-300"
                >
                  <d.icon className="h-7 w-7" />
                </motion.div>

                <h3 className="mt-5 font-display text-xl font-bold text-[#14213D] group-hover:text-[#D94D78] transition-colors duration-200">
                  {d.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  {d.description}
                </p>

                {/* Key services checklist */}
                <ul className="mt-5 space-y-2 text-sm text-slate-700 font-medium">
                  {d.services.slice(0, 4).map((s) => (
                    <li key={s} className="flex items-start gap-2.5 leading-snug">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center shrink-0 text-[#D94D78]">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </div>
                      <span className="text-xs md:text-sm text-slate-600">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action link */}
              <div className="mt-7 pt-4 border-t border-pink-100 relative z-10">
                <Link
                  to={d.route}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D94D78] hover:text-[#14213D] transition-colors group/link"
                >
                  <span>Explore department details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── 3. Comprehensive Services Section ── */}
      <section className="bg-gradient-to-b from-white via-[#FFF5F8]/40 to-white py-16 md:py-24 border-t border-slate-100 relative overflow-hidden">
        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 shadow-2xs">
              Services
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
              Comprehensive services under one roof.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              From advanced technology to compassionate care, our services are designed to support
              every stage of your health journey.
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
            {serviceCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.015,
                        boxShadow: "0 20px 45px -10px rgba(255,135,179,0.35)",
                      }
                }
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="flex flex-col justify-between rounded-3xl border border-[#FF87B3] bg-white p-7 md:p-8 shadow-[0_8px_30px_rgba(255,135,179,0.12)] hover:border-[#D94D78] transition-all duration-300 cursor-default group"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-14 h-14 rounded-full border border-[#FF87B3] bg-[#FFF5F8] flex items-center justify-center text-[#D94D78] shrink-0 shadow-2xs group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-all duration-300"
                    >
                      <cat.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-[16px] md:text-lg font-extrabold text-[#14213D] leading-tight group-hover:text-[#D94D78] transition-colors">
                        {cat.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-[#FF87B3] mt-1.5 group-hover:w-12 transition-all duration-300" />
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 leading-snug font-medium"
                      >
                        <div className="w-4.5 h-4.5 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center shrink-0 mt-0.5 text-[#D94D78]">
                          <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Redesigned FAQ Section ── */}
      <section className="bg-gradient-to-tr from-[#FFF5F8] via-[#fffcfd] to-white py-16 md:py-24 border-t border-slate-100 overflow-hidden relative">
        <div className="container-page relative z-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] items-center">
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
              {/* FAQ Pill */}
              <motion.span
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF87B3] text-[#14213D] font-extrabold text-[11px] uppercase tracking-wider mb-6 w-max shadow-md cursor-default"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                FAQ
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display leading-tight mb-4">
                Common questions, honestly answered.
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-90 max-w-sm mb-6 font-medium">
                Some of the questions we hear most often at our reception desk. We are always here
                to help clarify any doubts.
              </p>

              <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
            </motion.div>

            {/* Right Column: Radix Accordion */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col justify-center"
            >
              <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    q: "Do I need an appointment for a consultation?",
                    a: "Walk-ins are welcome for general consultations based on availability, but we recommend booking an appointment to reduce your waiting time and ensure you get the care you need.",
                  },
                  {
                    q: "Are you a Manyata-certified maternity hospital?",
                    a: "Yes. The Manyata certification recognises our commitment to safe, respectful childbirth practices.",
                  },
                  {
                    q: "Do you offer emergency care?",
                    a: "Yes, our emergency line is answered 24×7 and our team responds around the clock.",
                  },
                  {
                    q: "Do you have in-house diagnostics?",
                    a: "Yes — we operate an in-house laboratory and diagnostic support for routine and specialist tests.",
                  },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeUpVariant}>
                    <AccordionPrimitive.Item
                      value={`item-${idx}`}
                      className="bg-white border border-[#FF87B3] rounded-2xl p-5 shadow-[0_2px_12px_rgba(255,135,179,0.15)] hover:shadow-md hover:border-[#D94D78] transition-all duration-300"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between text-left font-display text-[15px] md:text-base font-extrabold text-[#14213D] cursor-pointer hover:no-underline w-full py-0 hover:text-[#D94D78] transition-colors">
                          <span>{item.q}</span>
                          <div className="w-7 h-7 rounded-full bg-[#FFF5F8] border border-[#FF87B3] text-[#D94D78] group-hover:bg-[#FF87B3] group-hover:text-[#14213D] flex items-center justify-center font-bold text-xs shrink-0 ml-4 shadow-2xs transition-all duration-300 group-hover:scale-108">
                            <span className="group-data-[state=open]:hidden text-sm font-bold">
                              +
                            </span>
                            <span className="group-data-[state=closed]:hidden text-sm font-bold">
                              -
                            </span>
                          </div>
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionPrimitive.Content className="overflow-hidden text-sm text-slate-600 leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="pt-4 pb-1 text-[13px] md:text-[14px] text-slate-600 font-medium">
                          {item.a}
                        </div>
                      </AccordionPrimitive.Content>
                    </AccordionPrimitive.Item>
                  </motion.div>
                ))}
              </AccordionPrimitive.Root>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
