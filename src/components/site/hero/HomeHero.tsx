import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowRight, Award, Users, Heart, Clock, Dna, Droplets } from "lucide-react";
import heroImage from "../../../assets/fertility-hero-image.png";

// Count-up component — animates a number from 0 to target when in view
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) raw.set(target);
  }, [isInView, target, raw]);

  useEffect(() => {
    return smooth.on("change", (v) => {
      setDisplay(Math.round(v).toLocaleString());
    });
  }, [smooth]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 15 } },
};

const floatingAnimation = (delay: number) => ({
  y: [0, -15, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: delay,
  },
});

// Helper component for letter-by-letter animation without sliding/blurring
const AnimatedLetters = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) => {
  return (
    <motion.span
      initial="hidden"
      animate="show"
      exit="exit"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: delay } },
        exit: { opacity: 0, transition: { staggerChildren: 0.02, staggerDirection: -1 } },
      }}
      className={`inline-block ${className}`}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
            exit: { opacity: 0 },
          }}
          className={char === " " ? "inline-block w-[0.25em]" : "inline-block"}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export function HomeHero() {
  const [isAlternate, setIsAlternate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAlternate((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax background effects
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#FF87B3] pt-10 pb-10 lg:pt-14 lg:pb-14 font-sans"
    >
      {/* Floating 3D Medical Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden lg:block">
        <motion.div
          animate={floatingAnimation(0)}
          className="absolute top-[25%] left-[5%] p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 text-[#14213D]"
        >
          <Dna size={28} className="opacity-80" />
        </motion.div>

        <motion.div
          animate={floatingAnimation(1.5)}
          className="absolute top-[15%] right-[45%] p-4 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-[#D94D78]"
        >
          <Heart size={32} className="opacity-90 fill-[#FF87B3]" />
        </motion.div>

        <motion.div
          animate={floatingAnimation(3)}
          className="absolute bottom-[30%] left-[45%] p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 text-[#14213D]"
        >
          <Droplets size={24} className="opacity-80" />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left Side: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-30"
        >
          {/* Eyebrow Badge */}
          <motion.div
            variants={fadeUpVariant}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white text-[#14213D] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#D94D78] animate-pulse" />
              <span className="font-extrabold text-[10px] sm:text-xs tracking-widest uppercase">
                Sreedevi Test Tube Baby Centre
              </span>
            </div>
          </motion.div>

          {/* Animated Main Headline with 5s Toggle */}
          <div className="mb-6 lg:h-[160px]">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] leading-[1.2] font-display"
              style={{ perspective: 1000 }}
            >
              {/* Line 1 */}
              <motion.span variants={fadeUpVariant} className="block pb-1 h-[1.2em]">
                <AnimatePresence mode="wait">
                  {isAlternate ? (
                    <AnimatedLetters
                      key="dream"
                      text="Your Dream of"
                      className="text-white"
                      delay={0}
                    />
                  ) : (
                    <AnimatedLetters
                      key="journey"
                      text="Your Journey to"
                      className="text-[#14213D]"
                      delay={0}
                    />
                  )}
                </AnimatePresence>
              </motion.span>

              {/* Line 2 */}
              <motion.span variants={fadeUpVariant} className="block pb-1 h-[1.2em]">
                <AnimatePresence mode="wait">
                  {isAlternate ? (
                    <AnimatedLetters
                      key="alt-parenthood"
                      text="Parenthood Starts"
                      className="text-[#14213D]"
                      delay={0.3}
                    />
                  ) : (
                    <AnimatedLetters
                      key="parenthood"
                      text="Parenthood Starts"
                      className="text-white"
                      delay={0.3}
                    />
                  )}
                </AnimatePresence>
              </motion.span>

              {/* Line 3 */}
              <motion.span variants={fadeUpVariant} className="block pb-1 h-[1.2em]">
                <AnimatePresence mode="wait">
                  {isAlternate ? (
                    <AnimatedLetters
                      key="alt-here"
                      text="Here"
                      className="text-white"
                      delay={0.6}
                    />
                  ) : (
                    <AnimatedLetters
                      key="here"
                      text="Here"
                      className="text-[#14213D]"
                      delay={0.6}
                    />
                  )}
                </AnimatePresence>
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUpVariant}
            className="text-[#14213D]/90 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-semibold"
          >
            Compassionate care. Advanced technology. Personalized fertility solutions tailored to
            your dreams of a happy family.
          </motion.p>

          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="/fertility-centre"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#14213D] hover:bg-[#1a2b49] text-white border border-[#14213D] px-8 py-4 text-base font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Explore Treatments
              <ArrowRight className="w-5 h-5 text-[#FF87B3]" />
            </motion.a>
          </motion.div>

          {/* Hero Stats Bar */}
          <motion.div
            variants={fadeUpVariant}
            className="mt-12 bg-white border border-white/80 rounded-2xl shadow-sm px-6 py-4 w-fit mx-auto lg:mx-0"
          >
            <div className="flex items-center divide-x divide-pink-100">
              {(
                [
                  { Icon: Award, numeric: 28, suffix: "+", label: "Years of Experience" },
                  { Icon: Users, numeric: 5000, suffix: "+", label: "Happy Families" },
                  { Icon: Heart, numeric: 95, suffix: "%", label: "Success Rate" },
                  { Icon: Clock, numeric: null, static: "24×7", label: "Emergency" },
                ] as const
              ).map(({ Icon, label, ...rest }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-3 px-5 first:pl-0 last:pr-0 group cursor-default"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center group-hover:bg-[#FF87B3] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#D94D78] group-hover:text-[#14213D] transition-colors duration-300" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#14213D] text-sm leading-tight whitespace-nowrap">
                      {"numeric" in rest && rest.numeric !== null ? (
                        <CountUp
                          target={rest.numeric}
                          suffix={"suffix" in rest ? rest.suffix : ""}
                        />
                      ) : "static" in rest ? (
                        rest.static
                      ) : null}
                    </div>
                    <div className="text-xs text-slate-500 whitespace-nowrap">{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Image on solid #FF87B3 background without shadow/light effects */}
        <div
          className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-end pointer-events-none lg:-mr-8 xl:-mr-24 z-10"
          style={{ perspective: 1000 }}
        >
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[1000px] flex items-center justify-end lg:scale-[1.05]"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              src={heroImage}
              alt="Happy family"
              className="w-full h-auto object-contain object-right pointer-events-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
