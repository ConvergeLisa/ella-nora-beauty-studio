import aboutImg from "@/assets/about-image.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 md:-inset-6 bg-gold-soft -z-10" />
          <img
            src={aboutImg}
            alt="Curated luxury skincare ritual at Ella Nora"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-[480px] md:h-[640px] object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-[10px] uppercase tracking-luxe text-gold-deep mb-5">The House of Ella Nora</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
            Expert care.<br />
            <em className="italic font-normal text-gold-shine">Personalised</em> results.
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed">
            <p>
              Ella Nora Beauty &amp; Aesthetics is a professional beauty studio dedicated to
              enhancing your natural beauty through bespoke treatments and considered care.
            </p>
            <p>
              Every service is delivered with skill, immaculate hygiene and the highest standards
              in mind — ensuring results that are as effective as they are long-lasting. From a
              quiet refresh to a complete glow-up, your comfort is at the heart of every visit.
            </p>
            <p className="text-foreground italic font-display text-xl md:text-2xl pt-4 border-l-2 border-gold pl-5">
              "Beauty is more than a service — it is a commitment to helping you look, feel, and
              love your best self."
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { k: "100%", v: "Trusted Products" },
              { k: "5★", v: "Client Care" },
              { k: "1:1", v: "Personalised" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl md:text-4xl text-gold-shine">{s.k}</div>
                <div className="text-[10px] uppercase tracking-luxe text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
