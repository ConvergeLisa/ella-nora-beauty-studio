const ADDRESS = "12 Edelvalk Cres, Birch Acres, Kempton Park";
const MAP = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const WHATSAPP = "https://wa.me/27648377293";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-luxe text-rose-gold mb-5">Visit the Studio</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Come <em className="italic font-normal text-rose-gold">experience</em> Ella Nora.
          </h2>
          <p className="mt-6 text-foreground/70 max-w-md leading-relaxed">
            Our studio is a peaceful escape — designed so every detail invites you to slow down,
            unwind and enjoy a moment that's entirely yours.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-[10px] uppercase tracking-luxe text-muted-foreground">Address</dt>
              <dd className="mt-1.5 font-display text-2xl text-foreground">12 Edelvalk Cres</dd>
              <dd className="text-foreground/70">Birch Acres, Kempton Park</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-luxe text-muted-foreground">Phone</dt>
              <dd className="mt-1.5">
                <a href="tel:+27648377293" className="font-display text-2xl text-foreground hover:text-rose-gold transition">
                  +27 64 837 7293
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-luxe text-muted-foreground">Email</dt>
              <dd className="mt-1.5">
                <a href="mailto:maphuti.summorepnp@gmail.com" className="text-foreground hover:text-rose-gold transition">
                  maphuti.summorepnp@gmail.com
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-[11px] uppercase tracking-luxe hover:bg-foreground/85 transition">
              WhatsApp Us
            </a>
            <a href="#book"
              className="inline-flex items-center gap-2 border border-foreground/30 px-7 py-3.5 text-[11px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition">
              Book Appointment
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] md:min-h-full">
          <div className="absolute -inset-3 bg-blush/40 -z-10" />
          <iframe
            src={MAP}
            title="Ella Nora location"
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
