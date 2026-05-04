import lashes from "@/assets/svc-lashes.jpg";
import brows from "@/assets/svc-brows.jpg";
import skin from "@/assets/svc-skin.jpg";
import nails from "@/assets/svc-nails.jpg";
import wax from "@/assets/svc-wax.jpg";
import hair from "@/assets/svc-hair.jpg";

const services = [
  {
    img: lashes,
    name: "Lashes",
    desc: "Classic, hybrid and volume sets — lifted, weightless and impossibly elegant.",
  },
  {
    img: brows,
    name: "Brows",
    desc: "Tailored shaping, tinting and lamination for brows that frame you perfectly.",
  },
  {
    img: skin,
    name: "Skin & Aesthetics",
    desc: "Facials, glow treatments and slimming therapies for visibly luminous skin.",
  },
  {
    img: nails,
    name: "Nails",
    desc: "Refined manicures and pedicures, finished to a flawless, lasting polish.",
  },
  {
    img: wax,
    name: "Wax & Care",
    desc: "Gentle, precise waxing in a calm, hygienic and discreet environment.",
  },
  {
    img: hair,
    name: "Hair Installation",
    desc: "Sleek installs and styling, crafted with quality wefts and expert technique.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-nude/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="text-[10px] uppercase tracking-luxe text-gold-deep mb-5 rounded-full">The Treatments</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            A curated menu, <em className="italic font-normal text-gold-shine">tailored to you</em>.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Every treatment at Ella Nora is delivered with precision and care — using trusted
            products, refined technique and a calm, indulgent environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="group bg-background border border-border/60 overflow-hidden hover:border-gold hover:shadow-[var(--shadow-gold)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={s.img}
                  alt={s.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-luxe bg-foreground text-gold px-3 py-1.5 border border-gold/40 rounded-full">
                  0{i + 1}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl md:text-3xl text-foreground">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href="#book"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-gold-deep border-b border-gold/50 pb-1 hover:border-gold hover:text-gold transition rounded-full"
                >
                  Book this service →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
