import lashes from "@/assets/svc-lashes.jpg";
import brows from "@/assets/svc-brows.jpg";
import skin from "@/assets/svc-skin.jpg";
import nails from "@/assets/svc-nails.jpg";
import wax from "@/assets/svc-wax.jpg";
import hair from "@/assets/svc-hair.jpg";
import about from "@/assets/about-image.jpg";

const tiles = [lashes, nails, hair, brows, skin, about, wax];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-luxe text-rose-gold mb-5">@ellanorabeauty</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Loved by our <em className="italic font-normal text-rose-gold">clients</em>.
            </h2>
          </div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/ellanorabeauty" target="_blank" rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-luxe border border-foreground/30 px-5 py-3 hover:bg-foreground hover:text-background transition">Instagram</a>
            <a href="https://www.tiktok.com/@ellanorabeautybar" target="_blank" rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-luxe border border-foreground/30 px-5 py-3 hover:bg-foreground hover:text-background transition">TikTok</a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {tiles.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/ellanorabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden ${i === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
            >
              <img
                src={src}
                alt="Ella Nora client work"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-background text-xs uppercase tracking-luxe transition">View</span>
              </div>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { q: "The most calming, professional studio I've been to. My lashes have never looked better.", n: "Nthabi M." },
            { q: "Maphuti is incredibly skilled and so warm. I leave glowing every single time.", n: "Lerato K." },
            { q: "Premium experience from start to finish. Hygiene, results and care — all immaculate.", n: "Zanele D." },
          ].map((t) => (
            <figure key={t.n} className="bg-nude/30 p-8 md:p-10 border border-border/60">
              <div className="text-rose-gold text-xl mb-4">★ ★ ★ ★ ★</div>
              <blockquote className="font-display text-xl md:text-2xl leading-snug text-foreground">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-6 text-[10px] uppercase tracking-luxe text-muted-foreground">— {t.n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
