import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP = "https://wa.me/27648377293";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroBg}
        alt="Ella Nora luxury beauty studio interior"
        width={1080}
        height={1920}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-5 md:px-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          <p className="text-[10px] md:text-xs uppercase tracking-luxe text-foreground/70 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
            Birch Acres · Kempton Park
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground animate-in fade-in slide-in-from-bottom-3 duration-1000">
            Beauty,
            <br />
            <em className="not-italic font-normal italic text-rose-gold">redefined</em>
            <br />
            for you.
          </h1>
          <p className="mt-6 md:mt-8 max-w-md text-base md:text-lg text-foreground/75 leading-relaxed animate-in fade-in duration-1000 delay-200">
            A premium beauty &amp; aesthetics studio crafted around your confidence.
            Personalised treatments, immaculate care, results that linger.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 animate-in fade-in duration-1000 delay-300">
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-luxe hover:bg-foreground/85 transition"
            >
              Book Appointment
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground/30 bg-background/40 backdrop-blur px-8 py-4 text-[11px] uppercase tracking-luxe text-foreground hover:bg-background/70 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/60">
        <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
        <span className="h-10 w-px bg-foreground/40 animate-pulse" />
      </div>
    </section>
  );
}
