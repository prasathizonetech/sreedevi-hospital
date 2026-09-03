import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, HeartPulse, Plus, Heart } from "lucide-react";
import type { ReactNode } from "react";

interface HeroBackgroundProps {
  children?: ReactNode;
  showIcons?: boolean;
}

export function HeroBackground({ children, showIcons = true }: HeroBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── Layered Animated Ambient Glow Orbs ── */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.15, 1],
                x: [0, 25, 0],
                y: [0, -20, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-white/70 via-[#FF87B3]/50 to-[#f06a99]/25 blur-3xl"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.2, 1],
                x: [0, -20, 0],
                y: [0, 25, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-28 -right-20 w-[540px] h-[540px] rounded-full bg-gradient-to-tr from-[#FFF5F8]/80 via-[#FF87B3]/40 to-[#f06a99]/30 blur-3xl"
      />

      {/* ── Elegant Organic Curve Waves ── */}
      <svg
        className="absolute w-full h-full text-[#FF87B3] opacity-35"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,140 C320,280 420,30 720,160 C1020,290 1140,70 1440,180 L1440,600 L0,600 Z"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <path
          d="M0,240 C280,120 480,320 800,200 C1120,80 1280,260 1440,220 L1440,600 L0,600 Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>

      {/* ── Subtle Floating Medical & Sparkle Accent Icons ── */}
      {showIcons && (
        <>
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-[10%] text-[#D94D78]/35 hidden md:block"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-16 left-[28%] text-[#D94D78]/30 hidden md:block"
          >
            <HeartPulse className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-16 right-[42%] text-[#D94D78]/25 hidden lg:block"
          >
            <Plus className="w-6 h-6" strokeWidth={2.5} />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-20 right-[15%] text-[#D94D78]/25 hidden lg:block"
          >
            <Heart className="w-5 h-5 fill-[#FF87B3]" />
          </motion.div>
        </>
      )}

      {children}
    </div>
  );
}
