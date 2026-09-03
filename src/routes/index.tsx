import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Stethoscope,
  Star,
  Quote,
  Heart,
  HeartHandshake,
  Award,
  ShieldCheck,
  UserCheck,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ivfLabImg from "@/assets/features/ivf_lab.jpg";
import welcomeCardBg from "@/assets/welcome-card-bg.jpg";
import welcomeCareCutout from "@/assets/welcome-family-care-cutout.png";
import obstetricsImg from "@/assets/departments/obstetrics.jpg";
import gynaecologyImg from "@/assets/features/expertise.jpg";
import infertilityImg from "@/assets/departments/infertility.jpg";
import generalMedicineImg from "@/assets/departments/general-medicine.jpg";
import generalSurgeryImg from "@/assets/departments/general-surgery.jpg";
import orthopaedicImg from "@/assets/departments/orthopaedic.jpg";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { testimonials } from "@/data/testimonials";
import { DoctorCard } from "@/components/site/DoctorCard";
import { CTASection } from "@/components/site/CTASection";
import { HomeHero } from "@/components/site/hero/HomeHero";
import { FertilityWhyChooseUs } from "@/components/site/FertilityWhyChooseUs";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, scaleIn, viewport } from "@/lib/animations";
import { useState, useRef, useEffect, useCallback } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SreeDevi Hospital & Fertility Centre — Srirangam" },
      {
        name: "description",
        content:
          "Trusted women's health, fertility & IVF, and family healthcare in Srirangam. Manyata-certified maternity care.",
      },
      { property: "og:title", content: "SreeDevi Hospital & Fertility Centre" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HomeHero />
      <FertilityWhyChooseUs />
      <Welcome />
      <SpecialitiesPreview />
      <FertilityHighlight />
      <DoctorsPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}

// ─── Welcome section ──────────────────────────────────────────────────────────
function Welcome() {
  const values = [
    {
      title: "Compassion",
      desc: "Care rooted in empathy and warmth for every patient and family.",
      icon: HeartHandshake,
    },
    {
      title: "Excellence",
      desc: "Clinical rigour, modern protocols and continuous improvement.",
      icon: Award,
    },
    {
      title: "Integrity",
      desc: "Honest counselling, transparent pricing and ethical practice.",
      icon: ShieldCheck,
    },
    {
      title: "Patient-Centered",
      desc: "Every treatment plan is built around the person in front of us.",
      icon: UserCheck,
    },
  ];

  return (
    <section className="relative pt-10 pb-12 lg:pt-14 lg:pb-14 bg-gradient-to-br from-[#FFF5F8] to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF87B3]/20 blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="container-page relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: Card with attached background image & cutout image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative flex items-center justify-center"
        >
          {/* Ambient background blur circles */}
          <div className="absolute -left-12 top-10 w-96 h-96 rounded-full bg-[#FF87B3]/35 blur-3xl pointer-events-none" />
          <div className="absolute -right-8 bottom-8 w-80 h-80 rounded-full bg-[#FFF5F8] blur-3xl pointer-events-none" />

          {/* Card Container */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative z-10 w-full max-w-[540px] rounded-[36px] overflow-hidden drop-shadow-[0_20px_40px_rgba(255,135,179,0.30)] border border-[#FF87B3] bg-white"
          >
            {/* Attached Background Card Image */}
            <img
              src={welcomeCardBg}
              alt="Hospital room background"
              className="w-full h-auto block"
            />
            {/* High-quality foreground cutout of doctor, mother and baby */}
            <img
              src={welcomeCareCutout}
              alt="Doctor caring for mother and newborn baby at SreeDevi Hospital"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#D94D78] uppercase mb-6"
          >
            Welcome
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#14213D] font-display tracking-tight mb-6"
          >
            Caring for families since 1998.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-600 leading-relaxed mb-10 font-medium"
          >
            SreeDevi Hospital &amp; Fertility Centre is a trusted healthcare institution in the
            heart of Srirangam, providing comprehensive medical services with special focus on
            women's healthcare, fertility treatments, general medicine and a wide range of
            specialist departments.
          </motion.p>

          <motion.div variants={staggerContainer(0.08)} className="grid gap-4 sm:grid-cols-2 mb-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(255,135,179,0.35)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-white rounded-2xl p-5 border border-[#FF87B3] shadow-[0_8px_30px_rgba(0,0,0,0.03)] cursor-default"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center shrink-0">
                    <v.icon className="w-6 h-6 text-[#D94D78]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#14213D] mb-1">{v.title}</h3>
                    <p className="text-sm text-slate-600 leading-snug">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF87B3] via-[#ff9ec2] to-[#D94D78] border border-[#e86595] px-8 py-4 text-sm font-extrabold text-[#14213D] shadow-lg shadow-pink-400/30 hover:shadow-pink-400/50 transition-all group cursor-pointer"
            >
              About the hospital
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3D-tilt department card ──────────────────────────────────────────────────
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * 8);
    ry.set(px * 8);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Specialities section ─────────────────────────────────────────────────────
function SpecialitiesPreview() {
  const deptImages: Record<string, string> = {
    obstetrics: obstetricsImg,
    gynaecology: gynaecologyImg,
    infertility: infertilityImg,
    "general-medicine": generalMedicineImg,
    "general-surgery": generalSurgeryImg,
    orthopaedic: orthopaedicImg,
  };

  return (
    <section className="container-page pt-8 pb-14 lg:pt-10 lg:pb-16 bg-white">
      {/* Header */}
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div className="max-w-2xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1.5 text-[11px] font-bold tracking-widest text-[#D94D78] uppercase mb-5"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#D94D78]" />
            Departments
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#14213D] font-display tracking-tight mb-4"
          >
            Specialised care,
            <br />
            delivered with warmth.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-slate-600 mb-8 font-medium">
            From fertility and maternity to everyday family medicine,
            <br className="hidden md:block" />
            our departments work together around you.
          </motion.p>
        </div>
        <motion.div variants={fadeUp}>
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF87B3] bg-white px-6 py-3 text-sm font-extrabold text-[#14213D] hover:bg-[#FFF5F8] transition-colors group cursor-pointer shadow-xs"
          >
            View all departments{" "}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Cards grid with stagger */}
      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {departments.slice(0, 6).map((d) => (
          <motion.div key={d.id} variants={scaleIn}>
            <TiltCard>
              <Link
                to={d.route}
                className="group relative overflow-hidden rounded-3xl border border-[#FF87B3] bg-white shadow-sm hover:shadow-xl transition-all flex h-60"
              >
                {/* Right side Image */}
                <div className="absolute top-0 right-0 w-1/2 h-full z-0 overflow-hidden">
                  <img
                    src={
                      deptImages[d.id] ||
                      "https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&q=80"
                    }
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col w-1/2 bg-white">
                  <div className="absolute inset-y-0 -right-12 w-12 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />
                  <div className="w-12 h-12 rounded-full bg-[#FF87B3] border border-[#f06a99] flex items-center justify-center text-[#14213D] mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-20">
                    <d.icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#14213D] mb-2">{d.name}</h3>
                  <p className="text-[13px] text-slate-500 font-medium mb-4 leading-relaxed line-clamp-2">
                    {d.short}
                  </p>
                  <div className="mt-auto flex items-center gap-1 text-sm font-bold text-[#D94D78]">
                    Learn more{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Fertility highlight ──────────────────────────────────────────────────────
function FertilityHighlight() {
  return (
    <section className="py-12 lg:py-16 bg-[#FFF5F8]">
      <div className="container-page max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(255,135,179,0.30)] overflow-hidden flex flex-col md:flex-row border border-[#FF87B3]">
          {/* Left: Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="w-full md:w-1/2 p-5 flex items-center justify-center bg-[#FFF5F8]/50 self-stretch overflow-hidden"
          >
            <motion.img
              src={ivfLabImg}
              alt="Fertility & IVF Centre"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180, damping: 25 }}
              className="w-full h-full object-cover object-center rounded-2xl"
              style={{ minHeight: "380px", maxHeight: "520px" }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUp}
              className="self-start inline-flex items-center rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1.5 text-[11px] font-bold tracking-widest text-[#D94D78] uppercase mb-6"
            >
              Fertility &amp; IVF Centre
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-extrabold text-[#14213D] font-display tracking-tight leading-tight mb-5"
            >
              Where the science of fertility meets a very human kind of hope.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 font-medium leading-relaxed mb-8">
              Our dedicated fertility unit combines internationally-trained expertise with the
              ethics, transparency and warmth families deserve on this journey.
            </motion.p>

            <motion.ul variants={staggerContainer(0.07)} className="space-y-4 mb-10">
              {[
                "Personalised fertility evaluation for both partners",
                "IUI, IVF and ICSI cycles with clear cost counselling",
                "Reproductive endocrinology & hormonal management",
                "Ongoing emotional support for every couple",
              ].map((text, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3.5">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#FF87B3] border border-[#f06a99] shrink-0 shadow-sm" />
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="self-start">
              <Link
                to="/fertility-centre"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF87B3] via-[#ff9ec2] to-[#D94D78] border border-[#e86595] px-8 py-4 text-sm font-extrabold text-[#14213D] shadow-lg shadow-pink-400/30 hover:shadow-pink-400/50 transition-all group cursor-pointer"
              >
                Explore Fertility Centre
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Doctors preview ──────────────────────────────────────────────────────────
function DoctorsPreview() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container-page">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF87B3]/25 border border-[#FF87B3] px-3.5 py-1.5 text-[11px] font-bold tracking-widest text-[#D94D78] uppercase mb-5"
            >
              <Stethoscope className="w-3.5 h-3.5 text-[#D94D78]" />
              Our Specialists
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#14213D] font-display tracking-tight mb-3"
            >
              Meet the doctors families
              <br className="hidden md:block" /> in Srirangam trust.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 text-base font-medium">
              A close-knit team of consultants across gynaecology, fertility,
              <br className="hidden md:block" /> general medicine, surgery and other specialities.
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              to="/doctors"
              className="self-start md:self-auto inline-flex items-center gap-2 rounded-full border-2 border-[#FF87B3] bg-white px-6 py-3 text-sm font-extrabold text-[#14213D] hover:bg-[#FFF5F8] transition-colors group cursor-pointer shadow-xs"
            >
              All doctors{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards with stagger */}
        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {doctors.map((d) => (
            <motion.div key={d.id} variants={scaleIn}>
              <DoctorCard doctor={d} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials carousel ────────────────────────────────────────────────────
function TestimonialsPreview() {
  const deptColors: Record<string, string> = {
    "Fertility Centre": "bg-[#FF87B3]/30 text-[#D94D78] border border-[#FF87B3]",
    Maternity: "bg-purple-100 text-purple-700",
    "Diabetes Care": "bg-blue-100 text-blue-700",
    Gynaecology: "bg-rose-100 text-rose-700",
    "Respiratory Care": "bg-teal-100 text-teal-700",
  };
  const avatarColors = [
    "from-[#FF87B3] to-[#f06a99] text-[#14213D]",
    "from-violet-400 to-purple-500 text-white",
    "from-blue-400 to-cyan-500 text-white",
    "from-emerald-400 to-teal-500 text-white",
    "from-amber-400 to-orange-500 text-white",
    "from-fuchsia-400 to-pink-500 text-white",
  ];

  const items = testimonials.slice(0, 6);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (idx: number) => {
      setDirection(idx > active ? 1 : -1);
      setActive(idx);
    },
    [active],
  );
  const next = useCallback(() => go((active + 1) % items.length), [active, go, items.length]);
  const prev = useCallback(
    () => go((active - 1 + items.length) % items.length),
    [active, go, items.length],
  );

  // Auto-advance every 5s
  useEffect(() => {
    timerRef.current = setTimeout(next, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, next]);

  const t = items[active];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 280, damping: 26 },
    },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.2 } }),
  };

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F8] via-[#fffcfd] to-[#f5f3ff]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF87B3]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />

      <div className="relative container-page max-w-4xl">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-[#FF87B3] px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#D94D78] uppercase mb-6 shadow-sm"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-[#D94D78]" />
            Family Stories
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#14213D] font-display tracking-tight mb-4"
          >
            Care that families take the
            <br className="hidden md:block" /> time to write about.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 font-medium max-w-xl mx-auto">
            A few notes from the mothers, fathers and patients we have had the privilege of caring
            for.
          </motion.p>

          {/* Rating badge */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-4 mt-8 bg-white border border-[#FF87B3] rounded-2xl px-6 py-4 shadow-[0_8px_30px_rgba(255,135,179,0.30)]"
          >
            <div className="text-left">
              <div className="text-3xl font-extrabold text-[#14213D]">4.6</div>
              <div className="text-xs text-slate-500 font-medium">out of 5</div>
            </div>
            <div className="w-px h-10 bg-pink-100" />
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s <= 4 ? "text-amber-400 fill-current" : "text-amber-300 fill-current"}`}
                  />
                ))}
              </div>
              <div className="text-xs text-slate-600 font-medium">Based on 92+ reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.figure
                key={t.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white border border-[#FF87B3] rounded-3xl p-8 md:p-10 flex flex-col shadow-lg shadow-pink-200/30"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF87B3] to-[#D94D78] flex items-center justify-center shadow-md text-white">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${deptColors[t.department] || "bg-slate-100 text-slate-600"}`}
                  >
                    {t.department}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-[15px] md:text-base leading-relaxed text-slate-600 flex-1 mb-8 italic">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-pink-100">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[active % avatarColors.length]} flex items-center justify-center text-sm font-bold shadow-md shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[#14213D]">{t.name}</div>
                    <div className="text-xs text-slate-500 font-medium">
                      {t.city} · {t.date}
                    </div>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s < t.rating ? "text-amber-400 fill-current" : "text-slate-200 fill-current"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white border border-[#FF87B3] shadow-md flex items-center justify-center text-slate-700 hover:text-[#14213D] hover:bg-[#FFF5F8] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white border border-[#FF87B3] shadow-md flex items-center justify-center text-slate-700 hover:text-[#14213D] hover:bg-[#FFF5F8] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === active
                  ? "w-6 h-2.5 bg-[#FF87B3] border border-[#f06a99]"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-[#FF87B3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
