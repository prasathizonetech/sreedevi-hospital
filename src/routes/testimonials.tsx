import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Quote,
  Star,
  Check,
  User,
  Mail,
  Building2,
  Send,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import welcomeFamilyCare from "@/assets/family-care.jpg";
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HeroBackground } from "@/components/site/hero/HeroBackground";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — SreeDevi Hospital" },
      {
        name: "description",
        content:
          "Read patient stories and reviews from families who received maternity, fertility, diabetes and general healthcare at SreeDevi Hospital in Srirangam.",
      },
      { property: "og:title", content: "Patient Stories — SreeDevi Hospital" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
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

function Testimonials() {
  const [formSent, setFormSent] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ── 1. Custom Hero Section on Solid #FF87B3 ── */}
      <section className="relative bg-[#FF87B3] text-[#14213D] overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-4 md:pt-6 pb-2">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text & Navigation */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="z-10 flex flex-col justify-center"
            >
              <motion.div
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-6 w-max shadow-sm cursor-default"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D94D78]" />
                Family Stories
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-4 tracking-tight text-[#14213D]"
              >
                Care our patients take the time{" "}
                <span className="text-[#D94D78] underline decoration-[#FF87B3] decoration-wavy decoration-1 underline-offset-8">
                  to write about.
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
                A few of the many heartfelt stories and kind words shared with us by the families we
                care for every day.
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
                  Testimonials
                </span>
              </motion.nav>
            </motion.div>

            {/* Right Column: Family drawing & story bubbles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full h-[420px] max-w-[480px] overflow-visible hidden md:block mx-auto"
            >
              <div
                className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/20 pointer-events-none z-0"
                aria-hidden="true"
              />

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 group"
              >
                <img
                  src={welcomeFamilyCare}
                  alt="Family care illustrations"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
              </motion.div>

              {/* Bubble 1 */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -4 }}
                className="absolute top-[6%] left-[0%] bg-white rounded-2xl border border-[#FF87B3] p-4 shadow-xl text-[#14213D] max-w-[250px] z-20 transition-all cursor-default"
              >
                <div className="flex gap-2.5 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[10px] font-extrabold text-[#D94D78] shadow-2xs">
                    RS
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-[#14213D]">
                      Rohit &amp; Sneha
                    </div>
                    <div className="text-[8px] text-slate-500 font-semibold">IVF Parents</div>
                  </div>
                  <div className="ml-auto flex text-amber-400 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-slate-600 leading-relaxed italic font-medium">
                  "Our journey to parenthood was made possible by the expertise and compassion of
                  the team."
                </p>
              </motion.div>

              {/* Bubble 2 */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: 4 }}
                className="absolute top-[44%] -left-[10%] bg-white rounded-2xl border border-[#FF87B3] p-4 shadow-xl text-[#14213D] max-w-[240px] z-20 transition-all cursor-default"
              >
                <div className="flex gap-2.5 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[10px] font-extrabold text-[#D94D78] shadow-2xs">
                    AP
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-[#14213D]">Arun Prakash</div>
                    <div className="text-[8px] text-slate-500 font-semibold">Patient</div>
                  </div>
                  <div className="ml-auto flex text-amber-400 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-slate-600 leading-relaxed italic font-medium">
                  "From the moment we walked in, we felt at ease. The care and support were
                  exceptional."
                </p>
              </motion.div>

              {/* Bubble 3 */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -4 }}
                className="absolute bottom-[4%] right-[0%] bg-white rounded-2xl border border-[#FF87B3] p-4 shadow-xl text-[#14213D] max-w-[255px] z-20 transition-all cursor-default"
              >
                <div className="flex gap-2.5 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[10px] font-extrabold text-[#D94D78] shadow-2xs">
                    MK
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-[#14213D]">Meena Krishnan</div>
                    <div className="text-[8px] text-slate-500 font-semibold">Patient</div>
                  </div>
                  <div className="ml-auto flex text-amber-400 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-slate-600 leading-relaxed italic font-medium">
                  "The doctors and staff are incredible. They go above and beyond for their
                  patients."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Ratings & Reviews Section ── */}
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
              Patient Reviews
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
              Trust, shared one story at a time.
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#FF87B3] rounded-full" />
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-[1fr_2.5fr] items-start">
            {/* Left Column: Rating breakdown card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              className="flex flex-col gap-4"
            >
              <div className="rounded-[32px] bg-[#FF87B3] border border-[#FF87B3] p-7 md:p-8 text-[#14213D] shadow-sm flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="font-display text-6xl font-extrabold tracking-tight mb-2 text-[#14213D]">
                    4.6
                  </div>
                  <div className="flex gap-1 text-amber-500 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star className="h-5 w-5 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-xs text-[#14213D] font-bold">
                    Average rating from 92+ families
                  </div>
                </div>

                <div className="mt-8 space-y-3.5">
                  {[
                    { stars: 5, pct: 68 },
                    { stars: 4, pct: 22 },
                    { stars: 3, pct: 6 },
                    { stars: 2, pct: 2 },
                    { stars: 1, pct: 2 },
                  ].map((b, idx) => (
                    <div
                      key={b.stars}
                      className="flex items-center gap-3 text-xs font-bold text-[#14213D]"
                    >
                      <span className="w-6 flex items-center gap-0.5">
                        {b.stars} <Star className="w-3 h-3 fill-current text-amber-500" />
                      </span>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/40">
                        <motion.div
                          className="h-full bg-[#14213D] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${b.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                        />
                      </div>
                      <span className="w-8 text-right font-extrabold">{b.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shared with permission badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#FFF5F8] border border-[#FF87B3] px-4 py-2 rounded-full text-xs font-bold text-[#D94D78] w-max shadow-2xs">
                <Check className="w-3.5 h-3.5 text-[#D94D78]" strokeWidth={3.5} />
                Shared with permission
              </div>
            </motion.div>

            {/* Right Column: 3 Testimonial Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {[
                {
                  quote:
                    "Our IVF journey felt overwhelming at first, but the doctors and embryology team guided us with such care and clarity. Today, we're blessed with our little miracle.",
                  initials: "A & R",
                  name: "Fertility Care",
                  city: "Hyderabad",
                  rating: 5,
                },
                {
                  quote:
                    "From the moment we walked in, we felt safe and supported. The doctors explained everything patiently, and the birthing experience was smooth and beautiful.",
                  initials: "S K",
                  name: "Maternity Care",
                  city: "Secunderabad",
                  rating: 5,
                },
                {
                  quote:
                    "My father has been under the diabetes care program for over a year now. His sugar levels are stable, and he feels healthier than ever. Truly grateful for the consistent support.",
                  initials: "M P",
                  name: "Diabetes Care",
                  city: "Hyderabad",
                  rating: 5,
                },
              ].map((t, idx) => (
                <motion.div
                  key={idx}
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
                  className="rounded-3xl border border-[#FF87B3] bg-white p-7 hover:border-[#D94D78] shadow-xs transition-all duration-300 flex flex-col justify-between min-h-[340px] cursor-default group"
                >
                  <div>
                    <Quote className="h-6 w-6 text-[#FF87B3] mb-4 group-hover:scale-110 transition-transform" />
                    <blockquote className="text-xs md:text-sm leading-relaxed text-slate-650 italic font-medium">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-6 border-t border-pink-100 pt-4 flex flex-col items-center">
                    <div className="flex items-center gap-3 w-full">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#FFF5F8] border border-[#FF87B3] text-xs font-extrabold text-[#D94D78] shadow-2xs group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-colors duration-300">
                        {t.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-display text-[13px] font-extrabold text-[#14213D] leading-tight group-hover:text-[#D94D78] transition-colors">
                          {t.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                          {t.city}
                        </div>
                      </div>
                    </div>
                    {/* Stars at bottom */}
                    <div className="mt-4 flex text-amber-400 gap-0.5 self-start">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Share Your Story Section ── */}
      <section className="bg-gradient-to-tr from-[#FFF5F8] via-[#fffcfd] to-white py-16 md:py-24 border-t border-slate-100 overflow-hidden relative">
        <div className="container-page relative z-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              className="flex flex-col justify-center"
            >
              <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 w-max shadow-2xs">
                Share Your Story
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-4">
                Have a story to share?
              </h2>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-sm font-medium">
                If SreeDevi Hospital has been part of your family's journey, we would love to hear
                from you. Your story inspires hope in others.
              </p>

              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8 max-w-sm">
                We review every story and only share it with your explicit consent and privacy
                preferences.
              </p>

              <div className="w-12 h-1 bg-[#FF87B3] rounded-full" />
            </motion.div>

            {/* Right Column: High-Fidelity Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              className="flex justify-center md:justify-end"
            >
              <div className="w-full max-w-[520px] bg-white border border-[#FF87B3] rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden">
                {formSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-[#FFF5F8] border border-[#FF87B3] text-[#D94D78] flex items-center justify-center mx-auto mb-5 shadow-sm"
                    >
                      <Check className="w-8 h-8 text-[#D94D78]" strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="font-display text-2xl font-extrabold text-[#14213D] mb-2">
                      Thank you for sharing!
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto mb-6 font-medium">
                      We have received your story. Our team will review it and get in touch with
                      you.
                    </p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="text-xs font-bold text-[#D94D78] hover:underline cursor-pointer"
                    >
                      Submit another story
                    </button>
                  </motion.div>
                ) : (
                  <form
                    className="space-y-4 relative z-10"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSent(true);
                    }}
                  >
                    {/* Field 1: Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                        Your name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D94D78]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="w-full bg-white border border-[#FF87B3]/30 rounded-xl py-3.5 pl-11 pr-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 font-medium"
                        />
                      </div>
                    </div>

                    {/* Field 2: Email or Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                        Email or phone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D94D78]">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Enter your email or phone number"
                          className="w-full bg-white border border-[#FF87B3]/30 rounded-xl py-3.5 pl-11 pr-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 font-medium"
                        />
                      </div>
                    </div>

                    {/* Field 3: Department */}
                    <div className="space-y-1.5">
                      <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                        Department
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D94D78]">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <select
                          required
                          className="w-full bg-white border border-[#FF87B3]/30 rounded-xl py-3.5 pl-11 pr-10 text-xs md:text-sm text-slate-600 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 appearance-none font-medium cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select department
                          </option>
                          <option value="fertility">Fertility Care</option>
                          <option value="maternity">Maternity Care</option>
                          <option value="diagnostics">Diagnostics</option>
                          <option value="general">General Medicine</option>
                        </select>
                      </div>
                    </div>

                    {/* Field 4: Story Textarea */}
                    <div className="space-y-1.5">
                      <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                        Tell us your story
                      </label>
                      <div className="relative">
                        <div className="absolute top-3.5 left-4 pointer-events-none text-[#D94D78]">
                          <Quote className="w-4 h-4" />
                        </div>
                        <textarea
                          required
                          placeholder="Share your experience with us..."
                          rows={4}
                          className="w-full bg-white border border-[#FF87B3]/30 rounded-xl pt-3.5 pb-8 pl-11 pr-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 resize-none font-medium leading-relaxed"
                        />
                        <div className="absolute bottom-2.5 right-4 text-[10px] text-slate-400 font-semibold">
                          0 / 1000
                        </div>
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="w-4.5 h-4.5 border-slate-300 rounded-sm text-[#D94D78] focus:ring-[#FF87B3] mt-1 shrink-0 cursor-pointer"
                      />
                      <label
                        htmlFor="consent"
                        className="text-[11px] md:text-xs text-slate-500 font-medium leading-snug cursor-pointer select-none"
                      >
                        <strong className="text-[#14213D] font-extrabold block">
                          I'm happy for SreeDevi Hospital to contact me
                        </strong>
                        We will only use your details to follow up about your story.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF87B3] via-[#f06a99] to-[#D94D78] border border-[#FF87B3] text-[#14213D] hover:text-white px-8 py-3.5 font-extrabold text-base shadow-md hover:shadow-lg w-full transition-all mt-4 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit story
                    </motion.button>
                  </form>
                )}

                {/* Bottom Verification Note */}
                <div className="flex items-center justify-center gap-2 mt-6 border-t border-pink-100 pt-5 text-[10px] md:text-[11px] text-slate-400 font-medium leading-none select-none">
                  <ShieldCheck className="w-4 h-4 text-[#D94D78]" />
                  <span>Stories are reviewed before publishing and shared with permission.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
