import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.65a8.16 8.16 0 0 0 4.77 1.52V6.72a4.85 4.85 0 0 1-1.84-.03Z" />
  </svg>
);

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.04 2.5C6.78 2.5 2.5 6.78 2.5 12.04c0 1.69.45 3.34 1.3 4.79L2.4 21.5l4.79-1.4a9.5 9.5 0 0 0 4.85 1.32h.01c5.26 0 9.54-4.28 9.54-9.54a9.49 9.49 0 0 0-2.79-6.75 9.49 9.49 0 0 0-6.76-2.63Zm0 17.46h-.01a7.92 7.92 0 0 1-4.04-1.11l-.29-.17-2.85.83.85-2.78-.19-.3a7.93 7.93 0 0 1-1.21-4.21c0-4.39 3.57-7.96 7.96-7.96a7.93 7.93 0 0 1 5.63 2.34 7.93 7.93 0 0 1 2.33 5.62c0 4.39-3.57 7.96-7.96 7.96Z" />
  </svg>
);

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/ellanorabeauty", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@ellanorabeautybar", Icon: TikTokIcon },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100090546100622", Icon: Facebook },
  { label: "WhatsApp", href: "https://wa.me/27648377293", Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-20 pb-28 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl text-gold-shine">Ella Nora</div>
          <div className="text-[10px] uppercase tracking-luxe text-gold/70 mt-1">Beauty &amp; Aesthetics</div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/65">
            A premium beauty studio in Birch Acres, Kempton Park — committed to quality,
            comfort and beautifully personal results.
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-luxe text-gold/80 mb-4">Explore</div>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#about" className="hover:text-background">About</a></li>
            <li><a href="#services" className="hover:text-background">Services</a></li>
            <li><a href="#gallery" className="hover:text-background">Gallery</a></li>
            <li><a href="#book" className="hover:text-background">Book</a></li>
            <li><a href="#contact" className="hover:text-background">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-luxe text-gold/80 mb-4">Connect</div>
          <ul className="space-y-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex items-center gap-3 text-sm text-background/80 hover:text-gold transition-colors"
                >
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gold/25 bg-background/5 text-gold transition group-hover:border-gold group-hover:bg-gold/10 group-hover:scale-105">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10 mt-14 pt-8 border-t border-gold/20 text-[10px] uppercase tracking-luxe text-background/50 flex flex-col md:flex-row justify-between gap-3">
        <span>© {new Date().getFullYear()} Ella Nora Beauty &amp; Aesthetics</span>
        <span>Crafted with care · Kempton Park, ZA</span>
      </div>
    </footer>
  );
}
