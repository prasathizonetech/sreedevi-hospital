import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Award,
  Users,
  Baby,
  Heart,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import heroCoupleDoctor from "@/assets/hero-couple-doctor.jpg";
import aboutHero1 from "@/assets/about/about-hero-1.jpg";
import fertilityLab from "@/assets/fertility-lab.jpg";

interface CarouselCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  badge: string;
  badgeColor: string;
}

const CAROUSEL_ITEMS: CarouselCardItem[] = [
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

const TRUST_METRICS = [
  { icon: <HeartHandshake className="w-5 h-5 text-[#FB5783]" />, label: "Advanced IVF" },
  { icon: <Users className="w-5 h-5 text-[#FB5783]" />, label: "Experienced Specialists" },
  { icon: <Award className="w-5 h-5 text-[#FB5783]" />, label: "Personalized Care" },
  { icon: <Heart className="w-5 h-5 text-[#FB5783]" />, label: "Compassionate Support" },
  { icon: <Baby className="w-5 h-5 text-[#FB5783]" />, label: "Complete Fertility Care" },
];

export function FertilityHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const total = CAROUSEL_ITEMS.length;

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

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  // Helper to determine relative position offset (-1, 0, 1)
  const getCardOffset = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 0; // Active (center)
    if (diff === 1) return 1; // Next (right)
    return -1; // Previous (left)
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Fertility & IVF Centre Hero Carousel"
      className="outline-none"
    >
      {/* ── 1. Main Hero Container with Soft Blush Background ── */}
      <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FFEBF2] to-[#FFF0F6] text-[#14213D] overflow-hidden pt-4 pb-14 sm:pt-6 sm:pb-16 lg:pt-6 lg:pb-18 border-b border-[#FF87B3]">
        {/* Decorative Background Curves and Glow */}
        <HeroBackground />

        <div className="container-page relative z-10 pt-1 md:pt-2 pb-2">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ── Left Column: Headline, Supporting Text, Action Button & Breadcrumb (5.5 cols) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 xl:col-span-5 max-w-xl"
            >
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-[#f06a99] px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#FB5783] uppercase mb-3.5 shadow-sm cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-[#FB5783]" />
                <span>FERTILITY &amp; IVF CENTRE</span>
              </div>

              {/* Main Heading */}
              <h1
                className="font-serif font-semibold text-[38px] sm:text-[46px] md:text-[52px] lg:text-[56px] leading-[1.12] tracking-tight text-[#14213D] mb-3"
                style={{ fontFamily: "'Playfair Display', 'Lora', Georgia, serif", fontWeight: 600 }}
              >
                Where hope <br />
                becomes{" "}
                <span className="text-[#FB5783] relative inline-block">
                  family.
                  {/* Pink Accent Line */}
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FB5783] rounded-full" />
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-4 mb-6 max-w-lg font-medium">
                A fertility unit combining international expertise with genuinely compassionate
                counselling. We walk with you at every step of your parenthood journey.
              </p>

              {/* Pink "Book Consultation" Button */}
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5C8A] via-[#FB5783] to-[#DE356A] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-pink-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>

              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Link to="/" className="hover:text-[#FB5783] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 text-slate-400" />
                <span className="font-bold text-[#FB5783] bg-white border border-[#FF87B3] px-2.5 py-0.5 rounded-md shadow-2xs">
                  Fertility Centre
                </span>
              </nav>
            </motion.div>

            {/* ── Right Column: 3D Layered Glass Carousel System (6.5 cols) ── */}
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
                {CAROUSEL_ITEMS.map((item, idx) => {
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
                        ease: [0.16, 1, 0.3, 1], // Smooth premium ease-out
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
                {CAROUSEL_ITEMS.map((_, i) => (
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

      {/* ── 2. Bottom Trust-Feature Metric Strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container-page max-w-5xl mx-auto -translate-y-8 relative z-25"
      >
        <div className="bg-white rounded-3xl border border-[#FF87B3] p-5 md:p-6 shadow-[0_12px_40px_rgba(255,135,179,0.30)] flex flex-wrap md:flex-nowrap justify-between gap-4 sm:gap-6 items-center">
          {TRUST_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 w-full md:w-auto group cursor-default"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-10 h-10 rounded-xl bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center text-[#FB5783] shrink-0 group-hover:bg-[#FB5783] group-hover:text-white transition-colors duration-300 shadow-2xs"
              >
                {item.icon}
              </motion.div>
              <div className="text-xs md:text-sm font-extrabold text-[#14213D] leading-tight group-hover:text-[#FB5783] transition-colors">
                {item.label}
              </div>
              {idx < TRUST_METRICS.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-pink-100 self-center ml-4" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
