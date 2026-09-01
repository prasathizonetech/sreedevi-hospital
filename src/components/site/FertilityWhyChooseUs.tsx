import { Award, TestTubes, UserPlus, Baby, HeartHandshake, ShieldCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Expertise",
    description: "Experienced fertility specialists and a dedicated healthcare team.",
    icon: Award,
  },
  {
    num: "02",
    title: "Technology",
    description: "Advanced IVF technology and modern laboratory facilities.",
    icon: TestTubes,
  },
  {
    num: "03",
    title: "Personalization",
    description: "Customized treatment plans for every fertility journey.",
    icon: UserPlus,
  },
  {
    num: "04",
    title: "Complete Care",
    description: "Fertility, IVF, gynecology, and maternity care under one roof.",
    icon: Baby,
  },
  {
    num: "05",
    title: "Compassion",
    description: "Caring, respectful, and supportive treatment throughout the journey.",
    icon: HeartHandshake,
  },
  {
    num: "06",
    title: "Trust",
    description:
      "Ethical practices, quality treatment, transparent communication, and patient-first care.",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 55, damping: 15 } },
};

export function FertilityWhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FFF5F8]/50 pt-10 pb-14 lg:pt-14 lg:pb-18">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#FF87B3]/20 blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-[#FFF5F8] blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#14213D] font-display tracking-tight mb-3"
          >
            Why Choose <span className="text-[#D94D78]">Us?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <Heart className="w-4 h-4 text-[#FF87B3] fill-[#FF87B3]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-slate-500 leading-relaxed font-medium"
          >
            Advanced science, personalized treatment, and compassionate care for
            <br className="hidden sm:block" /> your journey to parenthood.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar
                     md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6
                     md:overflow-visible md:pb-0 md:px-0 md:mx-0 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.num}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(255,135,179,0.40)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex-shrink-0 w-[220px] md:w-auto snap-center
                         bg-white border border-[#FF87B3] rounded-3xl
                         shadow-[0_4px_24px_rgba(255,135,179,0.15)] hover:border-[#D94D78]
                         flex flex-col items-center text-center p-6
                         cursor-default select-none transition-all duration-300"
            >
              {/* Icon badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#FFF5F8] border border-[#FF87B3] text-[#D94D78] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF87B3] group-hover:text-[#14213D]">
                <feature.icon className="w-7 h-7" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-[#14213D] mb-2 leading-tight group-hover:text-[#D94D78] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[12.5px] text-slate-500 leading-relaxed font-medium">
                {feature.description}
              </p>

              {/* Subtle number watermark bottom-right */}
              <span className="absolute bottom-3 right-4 text-[10px] font-extrabold text-[#FF87B3] select-none">
                {feature.num}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
