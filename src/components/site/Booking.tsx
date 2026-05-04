import { useState } from "react";

const SETMORE = "https://ellanorabeauty.setmore.com/";
const WHATSAPP = "https://wa.me/27648377293";

export function Booking() {
  const [open, setOpen] = useState(false);

  return (
    <section id="book" className="relative py-24 md:py-36 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_30%_20%,_oklch(0.9_0.04_25),transparent_50%),radial-gradient(circle_at_70%_80%,_oklch(0.9_0.04_25),transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-10 text-center">
        <p className="text-[10px] uppercase tracking-luxe text-gold mb-6 rounded-full">Reserve Your Moment</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
          Book your<br />
          <em className="italic font-normal text-gold-shine">Ella Nora</em> experience.
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-background/70 leading-relaxed">
          Choose a time that suits you through our private booking concierge.
          Secure, instant and confirmed in seconds.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 bg-gold text-foreground px-9 py-4 text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition shadow-[var(--shadow-gold)] rounded-full"
          >
            Open Booking
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <a
            href={SETMORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold/50 px-9 py-4 text-[11px] uppercase tracking-luxe text-gold hover:bg-gold/10 transition rounded-full"
          >
            Book in New Tab
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 text-[11px] uppercase tracking-luxe text-background/70 hover:text-background transition rounded-full"
          >
            Or WhatsApp Us
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto text-background/80">
          {[
            { k: "Instant", v: "Confirmation" },
            { k: "Private", v: "Studio Setting" },
            { k: "Easy", v: "Reschedule" },
          ].map((x) => (
            <div key={x.v} className="border-t border-gold/30 pt-5">
              <div className="font-display text-2xl md:text-3xl text-gold-shine">{x.k}</div>
              <div className="text-[10px] uppercase tracking-luxe text-background/60 mt-1 rounded-full">{x.v}</div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-8 animate-in fade-in duration-300"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-background overflow-hidden shadow-[var(--shadow-elegant)] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
              <div>
                <div className="text-[10px] uppercase tracking-luxe text-gold-deep rounded-full">Ella Nora · Booking</div>
                <div className="font-display text-lg text-foreground">Choose your treatment</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-foreground/70 hover:text-foreground text-2xl leading-none"
                aria-label="Close booking"
              >
                ×
              </button>
            </div>
            <iframe
              src={SETMORE}
              title="Ella Nora Booking"
              className="w-full h-[calc(90vh-65px)] border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
