import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { HeroBackground } from "./hero/HeroBackground";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FF87B3] to-[#f06a99] text-[#14213D] pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-[#FF87B3]">
      <HeroBackground />
      <div className="container-page relative z-10">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center rounded-full bg-white/85 backdrop-blur-md border border-[#FF87B3] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#D94D78] shadow-sm">
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-[#14213D] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base font-medium text-slate-700 md:text-lg">
            {description}
          </p>
        )}
        {crumbs && (
          <nav className="mt-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-600">
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.to ? (
                  <Link to={c.to} className="hover:text-[#D94D78] transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-bold text-[#D94D78] bg-white border border-[#FF87B3] px-2.5 py-0.5 rounded-md shadow-2xs">
                    {c.label}
                  </span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 text-slate-400" />}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
