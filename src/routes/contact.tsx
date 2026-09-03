import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Sparkles,
  Check,
  User,
  Building2,
  Quote,
  ChevronRight,
} from "lucide-react";
import { hospital } from "@/data/hospital";
import { departments } from "@/data/departments";
import hospitalExterior from "@/assets/hospital-exterior.jpg";
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HeroBackground } from "@/components/site/hero/HeroBackground";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SreeDevi Hospital & Fertility Centre" },
      {
        name: "description",
        content:
          "Visit us at No. 5 Gandhi Road, Srirangam, Trichy. Call +91 98434 99055 or send an enquiry for appointments and fertility consultations.",
      },
      { property: "og:title", content: "Contact Us — SreeDevi Hospital" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
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

function Contact() {
  const [sent, setSent] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ── 1. Contact Hero Section ── */}
      <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FF87B3] to-[#f06a99] text-[#14213D] overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated glow orbs, organic curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-4 md:pt-6 pb-2">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Title & Subtitle */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-4 w-max shadow-sm cursor-default"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D94D78]" />
                Contact Us
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-3 tracking-tight text-[#14213D]"
              >
                We are always{" "}
                <span className="text-[#D94D78] underline decoration-[#FF87B3] decoration-wavy decoration-1 underline-offset-8">
                  a phone call
                </span>{" "}
                away.
              </motion.h1>

              <motion.div
                variants={fadeUpVariant}
                className="w-14 h-1.5 bg-gradient-to-r from-[#FF87B3] to-[#D94D78] rounded-full mb-4"
              />

              <motion.p
                variants={fadeUpVariant}
                className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 max-w-md font-medium"
              >
                On Gandhi Road, in the heart of Srirangam. We are here to assist with appointments,
                emergency care, and all your health inquiries.
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
                  Contact
                </span>
              </motion.nav>
            </motion.div>

            {/* Right Column: Hospital Exterior in curved frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              {/* Floating Circle 1: Phone */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                className="absolute top-[12%] -left-3 w-11 h-11 rounded-full border-2 border-white bg-white text-[#D94D78] flex items-center justify-center shadow-lg shadow-pink-900/10 z-20 transition-transform hidden md:flex cursor-default"
              >
                <Phone className="w-4.5 h-4.5" />
              </motion.div>

              {/* Floating Circle 2: Mail */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                className="absolute top-[48%] -left-7 w-11 h-11 rounded-full border-2 border-white bg-white text-[#D94D78] flex items-center justify-center shadow-lg shadow-pink-900/10 z-20 transition-transform hidden md:flex cursor-default"
              >
                <Mail className="w-4.5 h-4.5" />
              </motion.div>

              {/* Floating Circle 3: MapPin */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                className="absolute bottom-[12%] -left-3 w-11 h-11 rounded-full border-2 border-white bg-white text-[#D94D78] flex items-center justify-center shadow-lg shadow-pink-900/10 z-20 transition-transform hidden md:flex cursor-default"
              >
                <MapPin className="w-4.5 h-4.5" />
              </motion.div>

              <div className="relative z-10 w-full max-w-[420px] h-[260px] md:h-[300px] overflow-hidden rounded-[180px_60px_180px_180px] border-8 border-white shadow-2xl shadow-pink-900/10 group">
                <motion.img
                  src={hospitalExterior}
                  alt="SreeDevi Hospital exterior dusk facade"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover object-center transform-gpu"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Content Section ── */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Left Column: Details Cards & Map */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            <motion.div variants={fadeUpVariant} className="mb-6">
              <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 w-max shadow-2xs">
                Contact Details
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
                We’re here to help
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md font-medium">
                Have a question or need assistance? Our team is ready to assist you with the best
                care and support.
              </p>
            </motion.div>

            {[
              {
                icon: MapPin,
                t: "Address",
                d: `No. 5, Gandhi Road, Srirangam, Trichy - 620 006.`,
              },
              {
                icon: Phone,
                t: "Phone",
                d: `${hospital.phones.join("  ·  ")}  ·  ${hospital.mobile}`,
              },
              { icon: Mail, t: "Email", d: hospital.email },
              { icon: Clock, t: "Hours", d: hospital.hours },
            ].map((c) => (
              <motion.div
                key={c.t}
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        scale: 1.01,
                        boxShadow: "0 15px 35px -8px rgba(255,135,179,0.40)",
                      }
                }
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="flex items-center justify-between rounded-3xl border border-[#FF87B3] bg-white p-5 shadow-xs hover:border-[#D94D78] transition-all duration-300 cursor-default group"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-11 h-11 rounded-full border border-[#FF87B3] bg-[#FFF5F8] flex items-center justify-center text-[#D94D78] shrink-0 group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-colors duration-300 shadow-2xs">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-extrabold text-[#14213D] text-[15px] md:text-base leading-snug group-hover:text-[#D94D78] transition-colors">
                      {c.t}
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-slate-600 break-words leading-relaxed font-medium">
                      {c.d}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D94D78] shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            ))}

            {/* Embedded Google Map */}
            <motion.div
              variants={fadeUpVariant}
              className="overflow-hidden rounded-3xl border border-[#FF87B3] shadow-md mt-6"
            >
              <iframe
                title="Map to SreeDevi Hospital"
                src="https://www.google.com/maps?q=Gandhi+Road+Srirangam+Tiruchirappalli&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[550px] bg-white border border-[#FF87B3] rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden">
              <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 w-max shadow-2xs">
                Enquiry
              </span>

              <h2 className="text-2xl md:text-3xl font-extrabold text-[#14213D] font-display leading-tight mb-2">
                Send us a message
              </h2>

              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                Fill in the form below and our team will get back to you shortly.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-[#FFF5F8] border border-[#FF87B3] p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 15 }}
                    className="w-14 h-14 rounded-full bg-white border border-[#FF87B3] flex items-center justify-center text-[#D94D78] mx-auto mb-4 shadow-sm"
                  >
                    <Check className="h-7 w-7 text-[#D94D78]" strokeWidth={2.5} />
                  </motion.div>
                  <div className="font-display text-xl font-extrabold text-[#14213D] mb-2">
                    Thank you — we will call you back.
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium mb-6">
                    For urgent matters please call{" "}
                    <a
                      href={`tel:${hospital.mobile}`}
                      className="font-bold text-[#D94D78] underline"
                    >
                      {hospital.mobile}
                    </a>
                    .
                  </div>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-bold text-[#D94D78] hover:underline cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  className="space-y-4 relative z-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  {/* Field 1: Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                      Full name <span className="text-[#D94D78]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D94D78]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-white border border-[#FF87B3]/30 rounded-xl py-3 pl-11 pr-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 font-medium"
                      />
                    </div>
                  </div>

                  {/* Field 2: Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                      Phone <span className="text-[#D94D78]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D94D78]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="w-full bg-white border border-[#FF87B3]/30 rounded-xl py-3 pl-11 pr-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 font-medium"
                      />
                    </div>
                  </div>

                  {/* Field 3: Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                      Email <span className="text-[#D94D78]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D94D78]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full bg-white border border-[#FF87B3]/30 rounded-xl py-3 pl-11 pr-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 font-medium"
                      />
                    </div>
                  </div>

                  {/* Field 4: Department */}
                  <div className="space-y-1.5">
                    <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                      Department <span className="text-[#D94D78]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D94D78]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <select
                        required
                        className="w-full bg-white border border-[#FF87B3]/30 rounded-xl py-3 pl-11 pr-10 text-xs md:text-sm text-slate-600 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 appearance-none font-medium cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select department
                        </option>
                        {departments.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 5: Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs md:text-sm font-extrabold text-[#14213D] block">
                      Message <span className="text-[#D94D78]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-4 pointer-events-none text-[#D94D78]">
                        <Quote className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        placeholder="How can we help you?"
                        rows={4}
                        className="w-full bg-white border border-[#FF87B3]/30 rounded-xl pt-3 pb-8 pl-11 pr-4 text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#D94D78] focus:ring-2 focus:ring-[#FF87B3]/50 transition-all duration-200 resize-none font-medium leading-relaxed"
                      />
                      <div className="absolute bottom-2.5 right-4 text-[10px] text-slate-400 font-semibold">
                        0 / 1000
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF87B3] via-[#f06a99] to-[#D94D78] border border-[#FF87B3] text-[#14213D] hover:text-white px-8 py-3.5 font-extrabold text-base shadow-md hover:shadow-lg w-full transition-all mt-4 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send enquiry
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
