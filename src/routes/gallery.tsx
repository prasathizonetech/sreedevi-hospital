import { useState, useEffect, useCallback } from "react";
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
  ChevronLeft,
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
import heroCoupleDoctor from "@/assets/hero-couple-doctor.jpg";
import aboutHero1 from "@/assets/about/about-hero-1.jpg";
import fertilityLab from "@/assets/fertility-lab.jpg";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { GalleryLightbox, type LightboxImage } from "@/components/site/GalleryLightbox";
import { MagneticButton } from "@/components/site/MagneticButton";
import { HeroBackground } from "@/components/site/hero/HeroBackground";

interface CarouselCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  badge: string;
  badgeColor: string;
}

const HERO_CAROUSEL_ITEMS: CarouselCardItem[] = [
  {
    id: "consultation",
    title: "Expert Clinical Consultation",
    subtitle: "Unhurried, compassionate guidance by senior fertility specialists",
    image: heroCoupleDoctor,
    alt: "Doctor consulting warmly with couple at SreeDevi Fertility Centre",
    badge: "Specialist Care",
    badgeColor: "#FB5783",
  },
  {
    id: "maternity",
    title: "Cherished Family Moments",
    subtitle: "Walking with you until you hold your healthy newborn",
    image: aboutHero1,
    alt: "Happy Indian parents with newborn baby receiving expert maternity care",
    badge: "98% Positive Experience",
    badgeColor: "#E6396B",
  },
  {
    id: "lab",
    title: "Advanced IVF & Embryology Lab",
    subtitle: "Class 10,000 cleanroom with world-class micromanipulation systems",
    image: fertilityLab,
    alt: "Senior embryologist operating high-power microscope in IVF cleanroom",
    badge: "Advanced Tech",
    badgeColor: "#0284C7",
  },
];

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const total = HERO_CAROUSEL_ITEMS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay every 4.5 seconds when not paused and not reduced-motion
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Helper to determine relative position offset (-1, 0, 1)
  const getCardOffset = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 0; // Active (center)
    if (diff === 1) return 1; // Next (right)
    return -1; // Previous (left)
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GalleryLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* ── 1. Gallery Page Hero ── */}
      <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FF87B3] to-[#f06a99] text-[#14213D] overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
        {/* Shared Hero Background with animated glow orbs, organic curves & decor */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-4 md:pt-6 pb-2">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title, Subtitle, Buttons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:col-span-5 xl:col-span-5 max-w-xl"
            >
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

            {/* ── Right Column: 3D Layered Glass Carousel System (Transferred from Fertility Centre) ── */}
            <div
              className="lg:col-span-7 xl:col-span-7 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Cards Perspective Stage */}
              <div
                className="relative w-full max-w-[620px] h-[320px] sm:h-[370px] lg:h-[400px] flex items-center justify-center"
                style={{ perspective: "1200px" }}
              >
                {HERO_CAROUSEL_ITEMS.map((item, idx) => {
                  const offset = getCardOffset(idx);
                  const isActive = offset === 0;
                  const isRight = offset === 1;
                  const isLeft = offset === -1;

                  return (
                    <motion.div
                      key={item.id}
                      animate={
                        shouldReduceMotion
                          ? { opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }
                          : {
                              x: isActive ? "0%" : isRight ? "38%" : "-38%",
                              scale: isActive ? 1 : 0.84,
                              rotateY: isActive ? 0 : isRight ? 16 : -16,
                              rotateX: isActive ? 1 : 0,
                              opacity: isActive ? 1 : 0.65,
                              zIndex: isActive ? 30 : 10,
                            }
                      }
                      transition={{
                        duration: 0.75,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      onClick={() => {
                        if (!isActive) setActiveIndex(idx);
                      }}
                      className={`absolute top-0 w-[270px] sm:w-[330px] lg:w-[360px] h-[310px] sm:h-[360px] lg:h-[390px] rounded-[32px] sm:rounded-[36px] p-2.5 sm:p-3 transition-shadow duration-500 cursor-pointer ${
                        isActive
                          ? "border-2 border-white/95 bg-gradient-to-tr from-white/80 via-white/40 to-[#FF87B3]/30 backdrop-blur-md shadow-[0_25px_60px_rgba(251,87,131,0.30)] ring-1 ring-[#FB5783]/30"
                          : isRight
                          ? "border-2 border-white/80 bg-gradient-to-tr from-white/60 to-[#38BDF8]/20 backdrop-blur-md shadow-[0_15px_35px_rgba(56,189,248,0.2)] hover:opacity-90"
                          : "border-2 border-white/80 bg-gradient-to-tr from-white/60 to-[#FFAEC6]/20 backdrop-blur-md shadow-[0_15px_35px_rgba(255,135,179,0.2)] hover:opacity-90"
                      }`}
                    >
                      {/* Image Container with Inner Curved Mask */}
                      <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden group">
                        <motion.img
                          src={item.image}
                          alt={item.alt}
                          whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="w-full h-full object-cover select-none"
                        />

                        {/* Top Subtle Pill Badge on Active Card */}
                        {isActive && (
                          <div
                            className="absolute top-3 left-3 z-30 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white text-xs font-extrabold shadow-sm flex items-center gap-1.5"
                            style={{ color: item.badgeColor }}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{item.badge}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {/* ── Floating Heart Badge near Center Card ── */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -7, 0],
                          rotate: [0, 4, 0, -4, 0],
                        }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 right-[18%] sm:right-[22%] z-40 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border-2 border-white text-[#FB5783] shadow-lg shadow-pink-500/20 flex items-center justify-center pointer-events-none"
                >
                  <Heart className="w-5 h-5 text-[#FB5783] fill-[#FB5783]" />
                </motion.div>

                {/* ── Navigation Arrows (Left / Right) ── */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  aria-label="Previous slide"
                  className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#FF87B3] text-[#FB5783] shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#FB5783] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  aria-label="Next slide"
                  className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#FF87B3] text-[#FB5783] shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#FB5783] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* ── Carousel Progress Dots Below ── */}
              <div className="flex items-center gap-2 mt-4 z-30">
                {HERO_CAROUSEL_ITEMS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === i
                        ? "w-7 bg-[#FB5783] shadow-xs"
                        : "w-2.5 bg-slate-300 hover:bg-[#FF87B3]"
                    }`}
                  />
                ))}
              </div>
            </div>
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
