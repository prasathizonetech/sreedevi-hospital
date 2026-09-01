import { Phone, MessageCircle } from "lucide-react";
import { hospital } from "@/data/hospital";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${hospital.whatsapp.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group inline-flex h-13 w-13 items-center justify-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-glow transition hover:scale-105"
        style={{ height: 52, width: 52 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${hospital.mobile}`}
        aria-label="Call the hospital"
        className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition hover:scale-105"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
