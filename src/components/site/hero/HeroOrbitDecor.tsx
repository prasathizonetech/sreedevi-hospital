import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Baby, HeartPulse, ShieldPlus, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Decorative "orbit" system for the home hero — recreated to match the
 * reference banner: a soft glowing ring looping around the doctor & patient
 * with three floating hex badges (mother & baby / heartbeat / protection),
 * a scatter of small neon "spotlight" points along the ring, plus a
 * full-width glowing wave at the base of the hero that streams from right
 * to left.
 *
 * Desktop-only decoration — rendered exclusively inside the full-bleed
 * photo wrapper in HomeHero (hidden on tablet/mobile, where the hero is a
 * simple text-only layout).
 */

const HEX_CLIP = "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)";

interface HexBadgeProps {
  icon: LucideIcon;
  size: number;
  top: string;
  left: string;
  delay?: number;
  floatDelay?: number;
}

function HexBadge({ icon: Icon, size, top, left, delay = 0, floatDelay = 0 }: HexBadgeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 + delay, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top, left, zIndex: 3 }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
        className="relative"
        style={{ width: size, height: size }}
      >
        {/* outer glow halo */}
        <div className="absolute -inset-[35%] rounded-full bg-primary/45 blur-2xl" aria-hidden />
        <div className="absolute -inset-[15%] rounded-full bg-white/40 blur-lg" aria-hidden />

        {/* hexagon body */}
        <div
          className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-primary via-secondary to-[#c9677c] ring-2 ring-white/80"
          style={{
            clipPath: HEX_CLIP,
            boxShadow: "0 0 28px 4px rgba(217,121,139,0.55), inset 0 0 12px rgba(255,255,255,0.35)",
          }}
        >
          <Icon className="h-[42%] w-[42%] text-white drop-shadow" strokeWidth={1.75} />
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Small glowing "neon spotlight" point — a tight bright core with a soft
 *  colored halo, gently pulsing at its own tempo. Sits directly on the
 *  orbit ring. */
function NeonSpot({
  top,
  left,
  size = 5,
  color = "#ffffff",
  delay = 0,
  duration = 2.6,
}: {
  top: string;
  left: string;
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.span
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top, left, zIndex: 2 }}
      animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.85, 1.25, 0.85] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      {/* soft neon halo */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"
        style={{
          width: size * 3.4,
          height: size * 3.4,
          backgroundColor: color,
          opacity: 0.55,
        }}
      />
      {/* bright core */}
      <span
        className="relative block rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: "#ffffff",
          boxShadow: `0 0 6px 1.5px ${color}, 0 0 14px 4px ${color}99`,
        }}
      />
    </motion.span>
  );
}

// Points sampled around the orbit circle (cx=48, cy=46, r=40 in a 0-100
// percentage space), spaced between the three hex badges so the small
// neon spotlights read as an even scatter along the ring.
const NEON_SPOTS: {
  top: string;
  left: string;
  size: number;
  color: string;
  delay: number;
  duration: number;
}[] = [
  { top: "6%", left: "48%", size: 5, color: "#ffffff", delay: 0.1, duration: 2.4 },
  { top: "11%", left: "68%", size: 4, color: "#F4D7DE", delay: 0.8, duration: 2.9 },
  { top: "26%", left: "82.5%", size: 5, color: "#ffffff", delay: 1.4, duration: 2.5 },
  { top: "46%", left: "88%", size: 4, color: "#d9798b", delay: 0.4, duration: 3.1 },
  { top: "66%", left: "82.5%", size: 5, color: "#ffffff", delay: 1.9, duration: 2.6 },
  { top: "86%", left: "48%", size: 4, color: "#F4D7DE", delay: 0.6, duration: 2.8 },
  { top: "66%", left: "13.5%", size: 5, color: "#ffffff", delay: 1.1, duration: 2.3 },
  { top: "26%", left: "13.5%", size: 4, color: "#d9798b", delay: 1.6, duration: 3.0 },
  { top: "36%", left: "6%", size: 4, color: "#ffffff", delay: 0.3, duration: 2.7 },
  { top: "36%", left: "90%", size: 4, color: "#ffffff", delay: 2.1, duration: 2.4 },
];

/**
 * The glowing orbit ring + three hex icons + neon spotlight scatter,
 * overlaid on top of the hero photograph. Meant to be placed inside a
 * `position: relative` (or absolute inset-0) wrapper that matches the
 * photo's box.
 */
export function HeroOrbitRing({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const gradId = `orbitRingGrad-${uid}`;
  const glowId = `orbitGlow-${uid}`;

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      {/* Glowing orbit path, centered on the doctor & patient */}
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ transformOrigin: "48% 46%" }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F4D7DE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>
          <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#FFE7EE"
          strokeWidth="0.28"
          opacity="0.9"
          filter={`url(#${glowId})`}
        />
      </motion.svg>

      {/* Small neon spotlights scattered evenly along the ring */}
      {NEON_SPOTS.map((s, i) => (
        <NeonSpot key={i} {...s} />
      ))}

      {/* Three orbit hex badges — mother & baby / heartbeat / protection */}
      <HexBadge icon={Baby} size={76} top="16%" left="65%" delay={0} floatDelay={0} />
      <HexBadge icon={HeartPulse} size={68} top="42%" left="44%" delay={0.15} floatDelay={0.8} />
      <HexBadge icon={ShieldPlus} size={72} top="65%" left="88%" delay={0.3} floatDelay={1.6} />
    </div>
  );
}

/**
 * Full-width glowing "orbit" wave anchored to the base of the hero section,
 * streaming light particles from right to left.
 */
export function HeroBottomFlow({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const fillId = `orbitFlowFill-${uid}`;
  const strokeId = `orbitFlowStroke-${uid}`;
  const glowId = `orbitFlowGlow-${uid}`;
  const lineId = `orbitFlowLine-${uid}`;
  const path =
    "M1600,70 C1420,10 1330,150 1140,95 C960,42 860,150 660,92 C470,36 360,140 170,80 C100,58 40,68 0,86";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[110px] overflow-hidden sm:h-[140px] lg:h-[170px]",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={fillId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4D7DE" stopOpacity="0" />
            <stop offset="100%" stopColor="#E7A8B7" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="15%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#F9E2E7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id={glowId} x="-20%" y="-200%" width="140%" height="500%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* soft filled wave crest, base of the hero */}
        <path d={`${path} L1600,200 L0,200 Z`} fill={`url(#${fillId})`} />

        {/* glowing line */}
        <path
          id={lineId}
          d={path}
          fill="none"
          stroke={`url(#${strokeId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          filter={`url(#${glowId})`}
        />

        {/* particles streaming right -> left along the wave */}
        {!reduceMotion &&
          [0, 1.6, 3.2, 4.8].map((beginDelay, i) => (
            <circle key={i} r={i % 2 === 0 ? 3.2 : 2.4} fill="#ffffff" filter={`url(#${glowId})`}>
              <animateMotion
                dur="6.4s"
                begin={`${beginDelay}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref={`#${lineId}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.12;0.85;1"
                dur="6.4s"
                begin={`${beginDelay}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
      </svg>
    </div>
  );
}
