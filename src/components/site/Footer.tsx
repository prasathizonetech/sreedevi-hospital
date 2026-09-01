import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Globe, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoAsset from "@/assets/sd-hospital-logo.png";
import { hospital } from "@/data/hospital";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/doctors", label: "Our Doctors" },
    { to: "/departments", label: "Departments" },
    { to: "/fertility-centre", label: "Fertility Centre" },
    { to: "/facilities", label: "Facilities" },
    { to: "/gallery", label: "Gallery" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { Icon: Globe, href: "https://sreedevihospital.in", label: "Website" },
  ];

  return (
    <footer className="relative bg-[#102A54] text-white overflow-hidden border-t-4 border-[#ffc8d6]">
      {/* Main 5-Column Grid */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Column 1: Brand Info (Leftmost) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 pr-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md shrink-0 flex items-center justify-center border-2 border-[#ffc8d6]">
                <img
                  src={logoAsset}
                  alt="SreeDevi Hospital"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-[16px] text-white leading-tight">
                  SreeDevi Hospital
                </h3>
                <p className="text-[12px] text-[#ffc8d6] font-medium">&amp; Fertility Centre</p>
              </div>
            </div>

            <p className="text-[13px] text-slate-300 leading-relaxed mb-6 max-w-sm">
              Trusted Women&apos;s Health, Fertility &amp; Family Healthcare in Srirangam. Manyata
              certified maternity care in the heart of Srirangam.
            </p>

            {/* Circular Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 border border-[#ffc8d6]/30 flex items-center justify-center hover:bg-[#ffc8d6] hover:text-[#102A54] hover:-translate-y-0.5 transition-all duration-200 shadow-sm text-white"
                >
                  <Icon className="w-4 h-4 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#ffc8d6]/15 border border-[#ffc8d6]/40 text-[#ffc8d6] font-bold text-[11px] uppercase tracking-wider mb-4 shadow-sm">
              QUICK LINKS
            </div>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[13px] text-slate-300 hover:text-[#ffc8d6] hover:translate-x-1 inline-block transition-all duration-150 font-normal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div className="lg:col-span-2">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#ffc8d6]/15 border border-[#ffc8d6]/40 text-[#ffc8d6] font-bold text-[11px] uppercase tracking-wider mb-4 shadow-sm">
              DEPARTMENTS
            </div>
            <ul className="space-y-2">
              {departments.map((d) => (
                <li key={d.id}>
                  <Link
                    to={d.route}
                    className="text-[13px] text-slate-300 hover:text-[#ffc8d6] hover:translate-x-1 inline-block transition-all duration-150 font-normal"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Specialists */}
          <div className="lg:col-span-2">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#ffc8d6]/15 border border-[#ffc8d6]/40 text-[#ffc8d6] font-bold text-[11px] uppercase tracking-wider mb-4 shadow-sm">
              OUR SPECIALISTS
            </div>
            <ul className="space-y-2.5">
              {doctors.map((doc) => (
                <li key={doc.id}>
                  <Link
                    to="/doctors"
                    className="text-[13px] text-slate-300 hover:text-[#ffc8d6] hover:translate-x-1 inline-block transition-all duration-150 font-normal leading-snug"
                  >
                    {doc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="lg:col-span-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#ffc8d6]/15 border border-[#ffc8d6]/40 text-[#ffc8d6] font-bold text-[11px] uppercase tracking-wider mb-4 shadow-sm">
              CONTACT
            </div>
            <ul className="space-y-3.5">
              {/* Address */}
              <li className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full bg-[#ffc8d6]/20 border border-[#ffc8d6]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ffc8d6]" />
                </div>
                <span className="text-[13px] text-slate-300 leading-snug">
                  {hospital.address.line1}, {hospital.address.line2}, {hospital.address.city} –{" "}
                  {hospital.address.pin}
                </span>
              </li>

              {/* Phone Numbers */}
              <li className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full bg-[#ffc8d6]/20 border border-[#ffc8d6]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#ffc8d6]" />
                </div>
                <div className="text-[13px] text-slate-300 leading-relaxed">
                  {hospital.phones.map((phone) => (
                    <div key={phone}>
                      <a
                        href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                        className="hover:text-[#ffc8d6] hover:underline"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                  <div>
                    <a
                      href={`tel:${hospital.mobile.replace(/[^0-9]/g, "")}`}
                      className="hover:text-[#ffc8d6] hover:underline font-bold text-white"
                    >
                      {hospital.mobile}
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded-full bg-[#ffc8d6]/20 border border-[#ffc8d6]/40 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#ffc8d6]" />
                </div>
                <a
                  href={`mailto:${hospital.email}`}
                  className="text-[13px] text-slate-300 hover:text-[#ffc8d6] hover:underline break-all"
                >
                  {hospital.email}
                </a>
              </li>

              {/* Working Hours */}
              <li className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded-full bg-[#ffc8d6]/20 border border-[#ffc8d6]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#ffc8d6]" />
                </div>
                <span className="text-[13px] text-slate-300">{hospital.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-black/20 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-1 text-[13px] text-slate-400">
          <p>© {currentYear} SreeDevi Hospital &amp; Fertility Centre. All Rights Reserved.</p>
          <p className="font-normal text-slate-400">
            Designed &amp; Developed by{" "}
            <span className="text-[#ffc8d6] font-semibold hover:underline cursor-pointer">
              Izone Technologies
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
