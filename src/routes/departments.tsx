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
} from "lucide-react";
import { HeroBackground } from "@/components/site/hero/HeroBackground";
import { RadialDepartmentCards } from "@/components/site/hero/RadialDepartmentCards";
import { FAQSection } from "@/components/site/FAQSection";
import { departments } from "@/data/departments";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

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
      "Normal & Painless Delivery",
      "Caesarean Delivery Care",
      "High-Risk Pregnancy Support",
      "Foetal Medicine & Monitoring",
      "Postnatal Recovery & Classes",
    ],
  },
  {
    title: "Gynaecology Services",
    icon: Stethoscope,
    items: [
      "Infertility / IVF / IUI Support",
      "Well-Women Health Checkups",
      "Menopause & Postmenopause Care",
      "Preconception Counseling",
      "PCOS & Hormonal Care",
    ],
  },
  {
    title: "Gynaecology Procedures",
    icon: HeartPulse,
    items: [
      "Advanced Laparoscopic Procedures",
      "Diagnostic Hysteroscopy",
      "Cervical Cancer Screening (Pap)",
      "Clinical Breast Examination",
      "Minimally Invasive Surgeries",
    ],
  },
  {
    title: "Ultrasound / Sonography",
    icon: Waves,
    items: [
      "Abdomen & Pelvic Scans",
      "Obstetrics & Follicular Study",
      "3D / 4D Colour Doppler Scans",
      "Echocardiogram & Cardiac Echo",
      "Thyroid, Breast & Small Parts",
    ],
  },
  {
    title: "Diagnostic & Lab Services",
    icon: FlaskConical,
    items: [
      "24/7 Fully Automated Lab",
      "Digital X-Ray & Imaging",
      "12-Lead ECG & Echo Tests",
      "Audiometry & Hearing Aids",
      "Routine & Emergency Diagnostics",
    ],
  },
  {
    title: "Supportive Care & Pharmacy",
    icon: Plus,
    items: [
      "24/7 In-House Pharmacy",
      "Diet & Nutrition Counseling",
      "Obesity & Weight Management",
      "Vaccination & Immunization",
      "Physiotherapy & Rehab Support",
    ],
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
      <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FFEBF2] to-[#FFF0F6] text-[#14213D] overflow-hidden pt-6 pb-8 lg:pt-8 lg:pb-10 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated glow orbs, organic curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-1 md:pt-2 pb-2">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
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
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#DE356A] uppercase mb-5 shadow-sm cursor-default"
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
                    className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[54px] leading-[1.14] tracking-tight text-[#14213D]"
                  >
                    {DEPARTMENT_HEADLINES[headlineIndex].content}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Pink Accent Line */}
              <motion.div
                variants={fadeUpVariant}
                className="w-14 h-1.5 bg-[#DE356A] rounded-full mb-6"
              />

              {/* Description Paragraph */}
              <motion.p
                variants={fadeUpVariant}
                className="text-slate-700 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium"
              >
                From fertility and maternity to everyday family medicine, our specialists and
                advanced facilities work together to support you at every stage of life.
              </motion.p>

              {/* Action Button */}
              <motion.div variants={fadeUpVariant} className="mb-8">
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

              {/* ── 3 Stats White Card Container ── */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white/95 backdrop-blur-md border border-[#FFCCD9] rounded-2xl sm:rounded-full shadow-[0_8px_28px_rgba(255,135,179,0.15)] px-3.5 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 w-fit max-w-full"
              >
                <div className="flex flex-wrap sm:flex-nowrap items-center sm:divide-x divide-pink-100 gap-3 sm:gap-0">
                  <div className="flex items-center gap-2.5 sm:gap-3 px-1 sm:px-4 sm:pl-1">
                    <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF0F5] border border-[#FF87B3] flex items-center justify-center text-[#DE356A] shadow-2xs">
                      <Users className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#DE356A]" />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="text-base sm:text-lg font-extrabold text-[#14213D] leading-tight">20+</div>
                      <div className="text-[11px] sm:text-xs text-slate-500 font-semibold whitespace-nowrap">Specialities</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 px-1 sm:px-4">
                    <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF0F5] border border-[#FF87B3] flex items-center justify-center text-[#DE356A] shadow-2xs">
                      <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#DE356A]" />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="text-base sm:text-lg font-extrabold text-[#14213D] leading-tight">50+</div>
                      <div className="text-[11px] sm:text-xs text-slate-500 font-semibold whitespace-nowrap">Expert Doctors</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 px-1 sm:px-4 sm:pr-1">
                    <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF0F5] border border-[#FF87B3] flex items-center justify-center text-[#DE356A] shadow-2xs">
                      <Heart className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#DE356A]" />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="text-base sm:text-lg font-extrabold text-[#14213D] leading-tight">1L+</div>
                      <div className="text-[11px] sm:text-xs text-slate-500 font-semibold whitespace-nowrap">Lives Touched</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Column: Radial Medical Department Card Layout ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-start lg:-ml-4 xl:-ml-6 select-none"
            >
              <RadialDepartmentCards />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Departments List Section ── */}
      <section id="departments-list" className="relative container-page pt-6 pb-12 md:pt-8 md:pb-16 overflow-hidden">
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
          className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {departments.map((d) => (
            <motion.article
              key={d.id}
              variants={fadeUpVariant}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -5,
                      scale: 1.015,
                      boxShadow: "0 18px 36px -10px rgba(255,135,179,0.35)",
                    }
              }
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-[#FF87B3] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(255,135,179,0.08)] hover:border-[#D94D78] transition-all duration-300 cursor-default"
            >
              <div className="relative z-10">
                {/* Department Icon */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.12, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-[#FFF5F8] border border-[#FF87B3] text-[#D94D78] group-hover:bg-[#FF87B3] group-hover:text-[#14213D] shadow-2xs transition-all duration-300"
                >
                  <d.icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                </motion.div>

                <h3 className="mt-3.5 font-display text-[15px] sm:text-[17px] font-extrabold text-[#14213D] group-hover:text-[#D94D78] transition-colors duration-200 leading-tight">
                  {d.name}
                </h3>
                <div className="w-7 h-0.5 bg-[#FF87B3] mt-1 group-hover:w-11 transition-all duration-300" />

                <p className="mt-2 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {d.description}
                </p>

                {/* Key services checklist */}
                <ul className="mt-3.5 space-y-2 text-slate-700 font-medium">
                  {d.services.slice(0, 4).map((s) => (
                    <li key={s} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-slate-600 leading-snug font-medium">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center shrink-0 mt-0.5 text-[#D94D78]">
                        <Check className="h-2 w-2" strokeWidth={3.5} />
                      </div>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action link */}
              <div className="mt-4 pt-3 border-t border-pink-100 relative z-10">
                <Link
                  to={d.route}
                  className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold text-[#D94D78] hover:text-[#14213D] transition-colors group/link"
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
      <section className="bg-gradient-to-b from-white via-[#FFF5F8]/40 to-white pt-6 pb-8 md:pt-8 md:pb-12 border-t border-slate-100 relative overflow-hidden">
        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 md:mb-8"
          >
            <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-3 shadow-2xs">
              Services
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-2">
              Comprehensive services under one roof.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              From advanced technology to compassionate care, our services are designed to support
              every stage of your health journey.
            </p>
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
            className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {serviceCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.015,
                        boxShadow: "0 18px 36px -10px rgba(255,135,179,0.35)",
                      }
                }
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#FF87B3] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(255,135,179,0.08)] hover:border-[#D94D78] transition-all duration-300 cursor-default group"
              >
                <div>
                  <div className="flex items-center gap-3.5">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.12, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-[#FF87B3] bg-[#FFF5F8] flex items-center justify-center text-[#D94D78] shrink-0 shadow-2xs group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-all duration-300"
                    >
                      <cat.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-[15px] sm:text-[17px] font-extrabold text-[#14213D] leading-tight group-hover:text-[#D94D78] transition-colors">
                        {cat.title}
                      </h3>
                      <div className="w-7 h-0.5 bg-[#FF87B3] mt-1 group-hover:w-11 transition-all duration-300" />
                    </div>
                  </div>

                  <ul className="mt-3.5 space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[12px] sm:text-[13px] text-slate-600 leading-snug font-medium"
                      >
                        <div className="w-3.5 h-3.5 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center shrink-0 mt-0.5 text-[#D94D78]">
                          <Check className="w-2 h-2" strokeWidth={3.5} />
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

      {/* ── 4. Premium Interactive FAQ Section ── */}
      <FAQSection />
    </>
  );
}
