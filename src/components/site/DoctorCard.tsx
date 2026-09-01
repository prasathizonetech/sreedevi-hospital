import type { Doctor } from "@/data/doctors";
import { CalendarClock, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";

interface DoctorCardProps {
  doctor: Doctor;
  layout?: boolean;
}

export function DoctorCard({ doctor, layout = true }: DoctorCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      layout={shouldReduceMotion ? false : layout}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 15 }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
              scale: 1.015,
              boxShadow: "0 25px 60px -12px rgba(255,135,179,0.45)",
            }
      }
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-[#FF87B3] shadow-[0_8px_30px_rgba(0,0,0,0.04)] cursor-default transition-colors duration-300"
    >
      {/* Soft gradient glow behind the card on hover */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-[#FF87B3]/0 via-[#FF87B3]/30 to-[#FF87B3]/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      <div>
        {/* Image area with gentle zoom */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#FFF5F8] to-slate-100">
          <motion.img
            src={doctor.image}
            alt={doctor.name}
            loading="lazy"
            width={800}
            height={1000}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
            className="h-full w-full object-cover object-top transform-gpu"
          />

          {/* Soft multi-layered gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* Experience badge - top right with subtle float effect */}
          <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl px-3 py-1.5 shadow-lg">
            <span className="text-white text-xs font-bold tracking-wide">
              {doctor.experienceYears}+ yrs exp
            </span>
          </div>

          {/* Name + speciality pinned at bottom */}
          <div className="absolute bottom-0 inset-x-0 p-5">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF87B3] mb-1 drop-shadow-xs">
              {doctor.speciality}
            </div>
            <h3 className="font-display text-[19px] font-extrabold text-white leading-tight drop-shadow-md group-hover:text-[#FF87B3] transition-colors">
              {doctor.name}
            </h3>
          </div>
        </div>

        {/* Info area */}
        <div className="p-5 space-y-3.5">
          <p className="text-[13px] font-bold text-[#14213D] leading-snug">{doctor.title}</p>

          {/* Qualifications */}
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center shrink-0 text-[#D94D78] shadow-2xs group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-colors duration-300">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <span className="text-[12px] text-slate-600 font-medium leading-relaxed">
              {doctor.qualifications}
            </span>
          </div>

          {/* Consultation */}
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center shrink-0 text-[#D94D78] shadow-2xs group-hover:bg-[#FF87B3] group-hover:text-[#14213D] transition-colors duration-300">
              <CalendarClock className="w-3.5 h-3.5" />
            </div>
            <span className="text-[12px] text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-700">{doctor.consultationDays}</span> ·{" "}
              {doctor.consultationTimes}
            </span>
          </div>
        </div>
      </div>

      {/* Book Appointment CTA button with smooth hover */}
      <div className="p-5 pt-0">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF87B3]/25 border border-[#FF87B3] hover:border-[#D94D78] hover:bg-[#FF87B3] py-2.5 px-4 text-xs font-extrabold text-[#14213D] shadow-2xs hover:shadow-md hover:shadow-pink-400/30 transition-all duration-300 group/btn"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Hover glow ring border */}
      <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-[#FF87B3]/80 transition-all duration-500 pointer-events-none" />
    </motion.article>
  );
}
