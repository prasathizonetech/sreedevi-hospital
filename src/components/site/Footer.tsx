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
    <footer className="relative w-full overflow-hidden bg-transparent">
      {/* ── 1. Top Organic Transition Wave (Matching Reference Screenshot 2) ── */}
      <div className="w-full overflow-hidden leading-none bg-transparent -mb-[1px]">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-18 md:h-22 lg:h-26 block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footer-wave-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E25680" />
              <stop offset="100%" stopColor="#DE4876" />
            </linearGradient>
          </defs>

          {/* Pastel pink ribbon accent layer */}
          <path
            d="M0,48 C200,30 340,30 520,44 C640,54 720,60 820,60 C940,60 1040,44 1180,33 C1300,24 1380,36 1440,46"
            stroke="#FBAFC9"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Crisp white highlight contour line */}
          <path
            d="M0,44 C200,26 340,26 520,40 C640,50 720,56 820,56 C940,56 1040,40 1180,29 C1300,20 1380,32 1440,42"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Main rose pink wave body fill */}
          <path
            d="M0,48 C200,30 340,30 520,44 C640,54 720,60 820,60 C940,60 1040,44 1180,33 C1300,24 1380,36 1440,46 L1440,90 L0,90 Z"
            fill="url(#footer-wave-body-grad)"
          />
        </svg>
      </div>

      {/* ── 2. Footer Body Background ── */}
      <div className="relative bg-gradient-to-b from-[#DE4876] to-[#D63A6A] text-white">
        {/* ── Main 5-Column Grid ── */}
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* ── Column 1: Brand Info & Socials ── */}
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 pr-2">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-14 h-14 rounded-full bg-white p-2 shadow-md shrink-0 flex items-center justify-center">
                  <img
                    src={logoAsset}
                    alt="SreeDevi Hospital Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-[18px] sm:text-[20px] text-white tracking-tight leading-tight">
                    SreeDevi Hospital
                  </h3>
                  <p className="text-[13px] text-white/90 font-medium">&amp; Fertility Centre</p>
                </div>
              </div>

            <p className="text-[13.5px] text-white/90 leading-relaxed mb-6 max-w-sm font-normal">
              Trusted Women&apos;s Health, Fertility &amp; Family Healthcare in Srirangam. Manyata
              certified maternity care in the heart of Srirangam.
            </p>

            {/* Circular Social Outline Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#DE4876] hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="lg:col-span-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#DE4876] font-bold text-[11px] uppercase tracking-wider mb-5 shadow-xs">
              QUICK LINKS
            </div>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[13.5px] text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-medium py-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Departments ── */}
          <div className="lg:col-span-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#DE4876] font-bold text-[11px] uppercase tracking-wider mb-5 shadow-xs">
              DEPARTMENTS
            </div>
            <ul className="space-y-2">
              {departments.map((d) => (
                <li key={d.id}>
                  <Link
                    to={d.route}
                    className="text-[13.5px] text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-medium py-0.5"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Our Specialists ── */}
          <div className="lg:col-span-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#DE4876] font-bold text-[11px] uppercase tracking-wider mb-5 shadow-xs">
              OUR SPECIALISTS
            </div>
            <ul className="space-y-2.5">
              {doctors.map((doc) => (
                <li key={doc.id}>
                  <Link
                    to="/doctors"
                    className="text-[13.5px] text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-medium leading-snug py-0.5"
                  >
                    {doc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 5: Contact ── */}
          <div className="lg:col-span-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#DE4876] font-bold text-[11px] uppercase tracking-wider mb-5 shadow-xs">
              CONTACT
            </div>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-white text-[#DE4876] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13.5px] text-white/95 leading-snug font-normal">
                  {hospital.address.line1}, {hospital.address.line2}, {hospital.address.city} –{" "}
                  {hospital.address.pin}
                </span>
              </li>

              {/* Phone Numbers */}
              <li className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-white text-[#DE4876] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-[13.5px] text-white/95 leading-relaxed font-normal">
                  {hospital.phones.map((phone) => (
                    <div key={phone}>
                      <a
                        href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                        className="hover:text-white hover:underline"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                  <div>
                    <a
                      href={`tel:${hospital.mobile.replace(/[^0-9]/g, "")}`}
                      className="hover:text-white hover:underline font-bold text-white"
                    >
                      {hospital.mobile}
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-white text-[#DE4876] flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`mailto:${hospital.email}`}
                  className="text-[13.5px] text-white/95 hover:text-white hover:underline break-all font-normal"
                >
                  {hospital.email}
                </a>
              </li>

              {/* Working Hours */}
              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-white text-[#DE4876] flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13.5px] text-white/95 font-normal">{hospital.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 3. Footer Bottom Bar ── */}
      <div className="border-t border-white/20 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-1.5 text-[13px] text-white/90">
          <p>© {currentYear} SreeDevi Hospital &amp; Fertility Centre. All Rights Reserved.</p>
          <p className="font-normal text-white/90">
            Designed &amp; Developed by{" "}
            <span className="font-bold text-white hover:underline cursor-pointer">
              Izone Technologies
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
}
