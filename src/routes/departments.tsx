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
} from "lucide-react";
import { HeroBackground } from "@/components/site/hero/HeroBackground";
import { departments } from "@/data/departments";
import fertilityImg from "@/assets/fertility-lab.jpg";
import familyImg from "@/assets/family-care.jpg";
import reception from "@/assets/reception.jpg";
import heroMaternity from "@/assets/hero-maternity.jpg";
import lab from "@/assets/lab.jpg";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ── 1. Departments Page Hero on Solid #FF87B3 ── */}
      <section className="relative bg-[#FF87B3] text-[#14213D] overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-4 md:pt-6 pb-2">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* ── Left Column: Title & Subtitle ── */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-6 shadow-sm cursor-default"
              >
                <Layers className="w-3.5 h-3.5 text-[#D94D78]" />
                Departments &amp; Specialities
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-4 tracking-tight text-[#14213D]"
              >
                Comprehensive care, quietly organised{" "}
                <span className="text-[#D94D78] underline decoration-[#FF87B3] decoration-wavy decoration-1 underline-offset-8">
                  around you.
                </span>
              </motion.h1>

              <motion.div
                variants={fadeUpVariant}
                className="w-14 h-1.5 bg-gradient-to-r from-[#FF87B3] to-[#D94D78] rounded-full mb-6"
              />

              <motion.p
                variants={fadeUpVariant}
                className="text-slate-700 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium"
              >
                From fertility and maternity to everyday family medicine, all our specialities work
                together as one united team to support you at every stage of life.
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
                  Departments
                </span>
              </motion.nav>
            </motion.div>

            {/* ── Right Column: Custom Curved Mosaic Collage ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full h-[400px] max-w-[480px] overflow-visible hidden md:block mx-auto"
            >
              {/* Tile 1 (top center): Maternity / family care */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-[5%] left-[8%] w-[42%] h-[38%] rounded-[60px_20px_60px_60px] border-4 border-white overflow-hidden shadow-lg z-10 transform rotate-[-1deg] group"
              >
                <img
                  src={familyImg}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  alt="Family care"
                />
              </motion.div>

              {/* Tile 2 (top right): Fertility petri dish */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 right-[5%] w-[38%] h-[34%] rounded-[20px_60px_60px_60px] border-4 border-white overflow-hidden shadow-lg z-10 transform rotate-[2deg] group"
              >
                <img
                  src={fertilityImg}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  alt="Fertility lab"
                />
              </motion.div>

              {/* Tile 3 (center diamond logo badge) */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 45 }}
                className="absolute top-[38%] left-[43%] w-14 h-14 bg-white rounded-2xl border-4 border-[#FF87B3] flex items-center justify-center text-[#D94D78] shadow-xl z-25 transform rotate-[45deg] cursor-default"
              >
                <HeartHandshake className="w-6 h-6 transform -rotate-[45deg]" />
              </motion.div>

              {/* Tile 4 (middle left): Welcoming Reception */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-[5%] left-0 w-[42%] h-[40%] rounded-[60px_60px_20px_60px] border-4 border-white overflow-hidden shadow-lg z-15 transform rotate-[1.5deg] group"
              >
                <img
                  src={reception}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  alt="Hospital reception"
                />
              </motion.div>

              {/* Tile 5 (middle right): Pregnant Mother */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-[10%] right-0 w-[42%] h-[42%] rounded-[60px_60px_60px_20px] border-4 border-white overflow-hidden shadow-lg z-15 transform rotate-[-2deg] group"
              >
                <img
                  src={heroMaternity}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  alt="Pregnant mother care"
                />
              </motion.div>

              {/* Tile 6 (bottom center): Diagnostic Lab */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-[35%] w-[30%] h-[30%] rounded-[30px_10px_30px_30px] border-4 border-white overflow-hidden shadow-md z-10 transform rotate-[-1deg] group"
              >
                <img
                  src={lab}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  alt="Diagnostic laboratory"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Departments List Section ── */}
      <section className="relative container-page py-16 md:py-24 overflow-hidden">
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
