import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoAsset from "@/assets/sd-hospital-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"fade-in" | "loading" | "transition" | "done">("fade-in");
  const [targetRect, setTargetRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  }>({
    top: 12,
    left: 24,
    width: 56,
    height: 56,
  });

  const [centerSize, setCenterSize] = useState<number>(160);

  useEffect(() => {
    // 1. Lock scrolling on body while splash is running
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2. Measure navbar target logo and center dimensions
    const measure = () => {
      const isMobile = window.innerWidth < 1024;
      const size = isMobile ? 130 : 160;
      setCenterSize(size);

      const navEl = isMobile
        ? document.getElementById("nav-logo-mobile")
        : document.getElementById("nav-logo-desktop");

      if (navEl) {
        const rect = navEl.getBoundingClientRect();
        setTargetRect({
          top: rect.top,
          left: rect.left,
          width: rect.width || (isMobile ? 44 : 56),
          height: rect.height || (isMobile ? 44 : 56),
        });
      }
    };

    measure();

    // ── Timeline (Fast & Smooth 3.8s Total, Loading until 3s) ──────────────
    // 0s – 0.6s: White screen & logo fade in smoothly
    const tFadeIn = setTimeout(() => {
      setPhase("loading");
    }, 600);

    // 0.6s – 3.0s: Continuous smooth circular loading line animation
    // 3.0s: Start shrinking, morphing and flying logo to navbar + reveal website
    const tTransition = setTimeout(() => {
      measure();
      setPhase("transition");
    }, 3000);

    // 3.8s: Finish splash completely, hand off to navbar logo
    const tDone = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = originalOverflow;
      onComplete();
    }, 3800);

    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(tFadeIn);
      clearTimeout(tTransition);
      clearTimeout(tDone);
      window.removeEventListener("resize", measure);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  if (phase === "done") return null;

  // Geometry for Circular Outer Loading Progress Ring
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const ringRadius = isMobile ? 74 : 92;
  const strokeWidth = 3.5;
  const svgSize = (ringRadius + strokeWidth + 4) * 2;
  const circumference = 2 * Math.PI * ringRadius;

  // Calculate center coordinates
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  const startTop = windowHeight / 2 - centerSize / 2;
  const startLeft = windowWidth / 2 - centerSize / 2;

  const isTransitioning = phase === "transition";

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none">
      {/* ── White Screen Backdrop (Fades out 3s -> 3.8s) ── */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-white"
      />

      {/* ── Loading Ring Wrapper (Centered, fades out at 3s) ── */}
      <AnimatePresence>
        {phase !== "transition" && (
          <motion.div
            key="loading-ring-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: phase === "loading" ? 1 : 0.4,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              top: windowHeight / 2,
              left: windowWidth / 2,
              width: svgSize,
              height: svgSize,
            }}
          >
            {/* SVG Outer Loading Ring */}
            <svg
              className="w-full h-full transform-gpu -rotate-90"
              viewBox={`0 0 ${svgSize} ${svgSize}`}
            >
              <defs>
                <linearGradient id="splashLoadingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF87B3" />
                  <stop offset="50%" stopColor="#FB5783" />
                  <stop offset="100%" stopColor="#DE356A" />
                </linearGradient>
                <filter id="splashGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FF87B3" floodOpacity="0.6" />
                </filter>
              </defs>

              {/* Background Track Circle */}
              <circle
                cx={svgSize / 2}
                cy={svgSize / 2}
                r={ringRadius}
                stroke="#FFE5EE"
                strokeWidth={strokeWidth}
                fill="none"
              />

              {/* Smooth Animated Loading Progress Stroke (0.6s to 3.0s = 2.4s duration) */}
              <motion.circle
                cx={svgSize / 2}
                cy={svgSize / 2}
                r={ringRadius}
                stroke="url(#splashLoadingGrad)"
                strokeWidth={strokeWidth + 0.5}
                strokeLinecap="round"
                fill="none"
                filter="url(#splashGlow)"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={
                  phase === "loading"
                    ? {
                        strokeDashoffset: 0,
                      }
                    : {
                        strokeDashoffset: circumference,
                      }
                }
                transition={{
                  duration: 2.4,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Subtle Rotating Pulse Accents */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#FFCCD9]/50 pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Single Smooth Logo Entity (Transitions from Center -> Navbar at 3s) ── */}
      <motion.div
        initial={{
          top: startTop,
          left: startLeft,
          width: centerSize,
          height: centerSize,
          opacity: 0,
          scale: 0.92,
        }}
        animate={
          isTransitioning
            ? {
                top: targetRect.top,
                left: targetRect.left,
                width: targetRect.width,
                height: targetRect.height,
                opacity: 1,
                scale: 1,
              }
            : {
                top: startTop,
                left: startLeft,
                width: centerSize,
                height: centerSize,
                opacity: 1,
                scale: 1,
              }
        }
        transition={
          isTransitioning
            ? {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Smooth luxury ease-out
              }
            : {
                opacity: { duration: 0.5, ease: "easeOut" },
                scale: { duration: 0.5, ease: "easeOut" },
              }
        }
        className="fixed z-[100000] rounded-full overflow-hidden flex items-center justify-center pointer-events-none"
        style={{
          boxShadow: isTransitioning
            ? "0 4px 12px rgba(255,135,179,0.15)"
            : "0 14px 45px rgba(255,135,179,0.30)",
          backgroundColor: "#ffffff",
          border: isTransitioning ? "1px solid #FFCCD9" : "2px solid #FFCCD9",
        }}
      >
        <img
          src={logoAsset}
          alt="SreeDevi Hospital Logo"
          className="w-full h-full object-contain rounded-full transform-gpu"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
    </div>
  );
}
