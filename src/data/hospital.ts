export const hospital = {
  name: "SreeDevi Hospital & Fertility Centre",
  shortName: "SreeDevi Hospital",
  tagline: "Trusted Women's Health, Fertility & Family Healthcare in Srirangam",
  address: {
    line1: "No. 16/4, Gandhi Road",
    line2: "Srirangam",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    pin: "620006",
    country: "India",
  },
  phones: ["0431-4011631", "0431-2437071"],
  mobile: "+91 98434 99055",
  whatsapp: "+919843499055",
  email: "care@sreedevihospital.in",
  hours: "Open 24 × 7 for emergency care",
  mission:
    "To provide accessible, compassionate and quality healthcare services with a special focus on women's health and fertility care.",
  vision:
    "To become one of the most trusted healthcare destinations for families in and around Srirangam.",
  values: [
    {
      title: "Compassion",
      desc: "Care rooted in empathy and warmth for every patient and family.",
    },
    { title: "Excellence", desc: "Clinical rigour, modern protocols and continuous improvement." },
    { title: "Integrity", desc: "Honest counselling, transparent pricing and ethical practice." },
    {
      title: "Patient-Centered",
      desc: "Every treatment plan is built around the person in front of us.",
    },
    { title: "Innovation", desc: "Modern fertility science paired with time-tested medicine." },
    { title: "Trust", desc: "Long relationships with families across generations in Srirangam." },
  ],
  certifications: [
    {
      title: "Manyata Certified",
      desc: "Recognised maternity care facility for safe childbirth practices.",
    },
  ],
  milestones: [
    {
      year: "1998",
      title: "Foundation",
      desc: "SreeDevi Hospital opens its doors on Gandhi Road, Srirangam.",
    },
    {
      year: "2006",
      title: "Maternity Wing",
      desc: "Dedicated women's health and maternity wing launched.",
    },
    {
      year: "2014",
      title: "Fertility Centre",
      desc: "Fertility & IVF centre established.",
    },
    {
      year: "2019",
      title: "Manyata Certification",
      desc: "Recognised as a Manyata certified maternity facility.",
    },
    {
      year: "2024",
      title: "Digital Care",
      desc: "Introduced online consultations and appointment booking.",
    },
  ],
} as const;

export type Hospital = typeof hospital;
