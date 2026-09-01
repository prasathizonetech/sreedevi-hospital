import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  Maximize2,
  Play,
  Heart,
  Users,
  Shield,
  Star,
  Clock,
  Building,
  Bed,
  TestTube,
  Baby,
  Waves,
  HeartPulse,
  HeartHandshake,
  FlaskConical,
  ChevronRight,
} from "lucide-react";
import exterior from "@/assets/hospital-exterior.jpg";
import reception from "@/assets/reception.jpg";
import delivery from "@/assets/delivery-room.jpg";
import lab from "@/assets/lab.jpg";
import fertility from "@/assets/fertility-lab.jpg";
import family from "@/assets/family-care.jpg";
import hero from "@/assets/hero-maternity.jpg";
import ultrasound from "@/assets/hero-doctor-mother.jpg";
import general from "@/assets/departments/general-medicine.jpg";
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { GalleryLightbox, type LightboxImage } from "@/components/site/GalleryLightbox";
import { MagneticButton } from "@/components/site/MagneticButton";
import { HeroBackground } from "@/components/site/hero/HeroBackground";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SreeDevi Hospital" },
      {
        name: "description",
        content:
          "Photos and video tour of our hospital building, labour suites, fertility lab, ultrasound and patient rooms in Srirangam.",
      },
      { property: "og:title", content: "Gallery — SreeDevi Hospital" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

// ─── Animation Variants ─────────────────────────────────────────────────────
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 65, damping: 18 },
  },
};

const galleryItems = [
  {
    img: exterior,
    tag: "Hospital",
    title: "Hospital Building Exterior Dusk Facade",
    icon: Building,
  },
  {
    img: reception,
    tag: "Reception",
    title: "Comfortable OPD Reception & Patient Waiting Lounge",
    icon: Users,
  },
  {
    img: delivery,
    tag: "Maternity",
    title: "Safe & Modern Labour Suite for Childbirth",
    icon: Baby,
  },
  {
    img: lab,
    tag: "Diagnostics",
    title: "In-house Clinical Laboratory & Diagnostic Support",
    icon: FlaskConical,
  },
  {
    img: fertility,
    tag: "Fertility",
    title: "Advanced Assisted Reproductive IVF & Embryology Unit",
    icon: TestTube,
  },
  {
    img: ultrasound,
    tag: "Ultrasound",
    title: "High-Resolution 3D/4D Foetal Ultrasound Suite",
    icon: Waves,
  },
  {
    img: general,
    tag: "Consulting",
    title: "Spacious General Medicine Consultation Cabin",
    icon: HeartPulse,
  },
  {
    img: hero,
    tag: "Care",
    title: "Dedicated Maternity & Nursing Care Team",
    icon: HeartHandshake,
  },
  { img: family, tag: "Moments", title: "Moments of Joy & Healthy New Beginnings", icon: Heart },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GalleryLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* ── 1. Gallery Page Hero on Solid #FF87B3 ── */}
      <section className="relative bg-[#FF87B3] text-[#14213D] overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-4 md:pt-6 pb-2">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Title, Subtitle, Buttons */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#D94D78] uppercase mb-4 w-max shadow-sm cursor-default"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D94D78]" />
                Gallery
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-3 tracking-tight text-[#14213D]"
              >
                A quiet tour of{" "}
                <span className="text-[#D94D78] underline decoration-[#FF87B3] decoration-wavy decoration-1 underline-offset-8">
                  our hospital.
                </span>
              </motion.h1>

              <motion.div
                variants={fadeUpVariant}
                className="w-14 h-1.5 bg-gradient-to-r from-[#FF87B3] to-[#D94D78] rounded-full mb-4"
              />

              <motion.p
                variants={fadeUpVariant}
                className="text-slate-700 text-sm leading-relaxed mb-8 max-w-md font-medium"
              >
                Warm interiors, modern equipment and the everyday moments of care that make SreeDevi
                Hospital special. Click any image to view in full resolution.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <MagneticButton>
                  <button
                    onClick={() => scrollToSection("facility-moments")}
                    className="inline-flex items-center gap-3 bg-[#14213D] hover:bg-[#1a2b49] border border-[#14213D] text-white pl-6 pr-2 py-2.5 rounded-full font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Explore Gallery
                    <div className="w-7 h-7 rounded-full bg-white text-[#14213D] flex items-center justify-center shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <button
                    onClick={() => scrollToSection("video-tour")}
                    className="inline-flex items-center gap-2.5 text-[#14213D] font-bold text-sm hover:text-[#D94D78] transition-colors cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-full border border-[#FF87B3] bg-white/80 backdrop-blur-xs flex items-center justify-center shadow-xs text-[#D94D78]">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                    <span>Watch Video Tour</span>
                  </button>
                </MagneticButton>
              </motion.div>

              {/* Horizontal Stats/Trust card */}
              <motion.div
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -2, boxShadow: "0 10px 25px rgba(255,135,179,0.3)" }
                }
                className="bg-white/80 backdrop-blur-md border border-[#FF87B3] rounded-2xl p-4 grid grid-cols-4 gap-3 max-w-[480px] shadow-sm transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-4 h-4 text-[#D94D78] mb-1" />
                  <span className="text-[10px] font-extrabold text-[#14213D] leading-tight uppercase">
                    Trusted Care
                  </span>
                  <span className="text-[9px] text-slate-500 font-semibold mt-0.5">Since 1998</span>
                </div>
                <div className="flex flex-col items-center text-center border-l border-pink-200">
                  <Users className="w-4 h-4 text-[#D94D78] mb-1" />
                  <span className="text-[10px] font-extrabold text-[#14213D] leading-tight uppercase">
                    Expert
                  </span>
                  <span className="text-[9px] text-slate-500 font-semibold mt-0.5">
                    Specialists
                  </span>
                </div>
                <div className="flex flex-col items-center text-center border-l border-pink-200">
                  <Heart className="w-4 h-4 text-[#D94D78] mb-1" />
                  <span className="text-[10px] font-extrabold text-[#14213D] leading-tight uppercase">
                    Patient First
                  </span>
                  <span className="text-[9px] text-slate-500 font-semibold mt-0.5">Always</span>
                </div>
                <div className="flex flex-col items-center text-center border-l border-pink-200">
                  <Star className="w-4 h-4 text-[#D94D78] mb-1" />
                  <span className="text-[10px] font-extrabold text-[#14213D] leading-tight uppercase">
                    Modern Tech
                  </span>
                  <span className="text-[9px] text-slate-500 font-semibold mt-0.5">
                    Better Results
                  </span>
                </div>
              </motion.div>

              {/* Breadcrumbs */}
              <motion.nav
                variants={fadeUpVariant}
                className="flex items-center gap-2 text-xs text-slate-600 font-medium mt-6"
              >
                <Link to="/" className="hover:text-[#D94D78] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 text-slate-400" />
                <span className="font-bold text-[#D94D78] bg-white border border-[#FF87B3] px-2.5 py-0.5 rounded-md shadow-2xs">
                  Gallery
                </span>
              </motion.nav>
            </motion.div>

            {/* Right Column: Hospital Exterior in curved frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full h-[420px] max-w-[480px] overflow-visible hidden md:block mx-auto"
            >
              <div
                onClick={() =>
                  setSelectedImage({
                    src: exterior,
                    title: "SreeDevi Hospital Exterior Dusk Facade",
                    tag: "Hospital",
                  })
                }
                className="relative z-10 w-full h-[320px] overflow-hidden rounded-[200px_80px_200px_200px] border-8 border-white shadow-2xl group cursor-pointer"
              >
                <motion.img
                  src={exterior}
                  alt="SreeDevi Hospital Building facade"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover object-center transform-gpu"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-[#14213D] shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Overlay cards row */}
              <div className="grid grid-cols-3 gap-3 absolute bottom-2 left-[3%] right-[3%] z-20">
                <motion.div
                  onClick={() =>
                    setSelectedImage({
                      src: reception,
                      title: "Comfortable Waiting Lounge",
                      tag: "Reception",
                    })
                  }
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  className="bg-white border border-[#FF87B3] rounded-2xl p-2.5 shadow-lg flex flex-col transition-all cursor-pointer group"
                >
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 relative">
                    <img
                      src={reception}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform"
                      alt="Waiting lounge"
                    />
                  </div>
                  <div className="flex gap-1.5 items-start mt-2">
                    <div className="w-5 h-5 rounded-full bg-[#FFF5F8] flex items-center justify-center shrink-0 text-[#D94D78]">
                      <Users className="w-2.5 h-2.5" />
                    </div>
                    <div className="text-[8px] font-extrabold text-[#14213D] leading-tight">
                      Comfortable Waiting Lounge
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  onClick={() =>
                    setSelectedImage({ src: lab, title: "Advanced Laboratory", tag: "Diagnostics" })
                  }
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  className="bg-white border border-[#FF87B3] rounded-2xl p-2.5 shadow-lg flex flex-col transition-all cursor-pointer group"
                >
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 relative">
                    <img
                      src={lab}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform"
                      alt="Lab workspace"
                    />
                  </div>
                  <div className="flex gap-1.5 items-start mt-2">
                    <div className="w-5 h-5 rounded-full bg-[#FFF5F8] flex items-center justify-center shrink-0 text-[#D94D78]">
                      <FlaskConical className="w-2.5 h-2.5" />
                    </div>
                    <div className="text-[8px] font-extrabold text-[#14213D] leading-tight">
                      Advanced Laboratory
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  onClick={() =>
                    setSelectedImage({
                      src: family,
                      title: "Compassionate Care Moments",
                      tag: "Care",
                    })
                  }
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  className="bg-white border border-[#FF87B3] rounded-2xl p-2.5 shadow-lg flex flex-col transition-all cursor-pointer group"
                >
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 relative">
                    <img
                      src={family}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform"
                      alt="Compassionate Care"
                    />
                  </div>
                  <div className="flex gap-1.5 items-start mt-2">
                    <div className="w-5 h-5 rounded-full bg-[#FFF5F8] flex items-center justify-center shrink-0 text-[#D94D78]">
                      <Heart className="w-2.5 h-2.5" />
                    </div>
                    <div className="text-[8px] font-extrabold text-[#14213D] leading-tight">
                      Compassionate Care
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Facility & Moments Section ── */}
      <section
        id="facility-moments"
        className="bg-gradient-to-b from-white via-[#FFF5F8]/40 to-white py-16 md:py-24 border-b border-slate-100 relative overflow-hidden"
      >
        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 shadow-2xs">
              Facility &amp; Moments
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
              Inside SreeDevi Hospital.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              A closer look at the spaces, people and everyday moments behind our care. Click any
              photo for a full view.
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
            {galleryItems.map((c, idx) => (
              <motion.div
                key={idx}
                variants={scaleInVariant}
                onClick={() => setSelectedImage({ src: c.img, title: c.title, tag: c.tag })}
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
                className="group relative overflow-hidden rounded-3xl border border-[#FF87B3] bg-white aspect-[4/3] shadow-xs hover:border-[#D94D78] transition-all duration-300 cursor-pointer"
              >
                <motion.img
                  src={c.img}
                  alt={c.title}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="w-full h-full object-cover transform-gpu"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="p-3 rounded-full bg-white/90 text-[#14213D] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-[#FF87B3] px-4 py-2 rounded-full shadow-md z-10 flex items-center gap-2 group-hover:bg-white transition-colors">
                  <c.icon className="w-4 h-4 text-[#D94D78]" />
                  <span className="text-xs font-extrabold text-[#14213D] tracking-wide">
                    {c.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Video Tour Section ── */}
      <section
        id="video-tour"
        className="bg-gradient-to-tr from-[#FFF5F8] via-[#fffcfd] to-white py-16 md:py-24 border-t border-slate-100 overflow-hidden relative"
      >
        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-xs font-bold tracking-widest text-[#D94D78] uppercase mb-4 shadow-2xs">
              Video Tour
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-3">
              Take a look around.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              An inside look at our departments, facilities and care environment.
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
            className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2"
          >
            {[
              {
                title: "Fertility Centre walk-through",
                img: reception,
                time: "02:45",
              },
              {
                title: "Maternity ward tour",
                img: delivery,
                time: "03:20",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        scale: 1.02,
                        boxShadow: "0 25px 50px -10px rgba(255,135,179,0.40)",
                      }
                }
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group relative aspect-[1.58] overflow-hidden rounded-3xl border border-[#FF87B3] bg-white shadow-md transition-all duration-300 cursor-pointer"
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover transform-gpu"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-[#FF87B3]/30 group-hover:scale-130 group-hover:opacity-100 transition-all duration-500 opacity-0" />

                    <div className="w-16 h-16 rounded-full border-4 border-white/90 bg-white/95 flex items-center justify-center text-[#14213D] shadow-xl transition-all duration-400 group-hover:scale-115 group-hover:bg-[#FF87B3] group-hover:text-[#14213D]">
                      <Play className="w-5 h-5 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col items-start">
                  <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-md mb-2 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#FF87B3]" />
                    <span>{item.time}</span>
                  </div>
                  <h4 className="text-white font-display text-base md:text-[18px] font-extrabold leading-tight drop-shadow-md group-hover:text-[#FF87B3] transition-colors">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
