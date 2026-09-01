import { ShieldCheck, Clock, Heart } from "lucide-react";

export function BottomFeatureBar() {
  const items = [
    { label: "Certified Care", icon: ShieldCheck },
    { label: "24×7 Emergency", icon: Clock },
    { label: "Compassionate Care", icon: Heart },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-t border-[#FF87B3] shadow-[0_-4px_20px_rgba(255,135,179,0.15)] h-16 md:h-18">
      {/* Mobile: Horizontally scrollable */}
      <div className="flex md:hidden items-center h-full overflow-x-auto px-4 snap-x snap-mandatory hide-scrollbar">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] flex items-center justify-center gap-3 snap-center"
          >
            <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center">
              <item.icon className="w-4 h-4 text-[#D94D78]" />
            </div>
            <span className="text-sm font-bold text-[#14213D]">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Desktop: 3 Equal columns */}
      <div className="hidden md:flex container-page h-full items-center justify-between">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex items-center justify-center gap-3 px-4 py-2 group cursor-default border-r border-[#FF87B3]/40 last:border-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#FFF5F8] border border-[#FF87B3] flex items-center justify-center transition-all group-hover:bg-[#FF87B3]">
              <item.icon className="w-5 h-5 text-[#D94D78] group-hover:text-[#14213D] transition-colors" />
            </div>
            <span className="text-[15px] font-bold text-[#14213D] group-hover:text-[#D94D78] transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
