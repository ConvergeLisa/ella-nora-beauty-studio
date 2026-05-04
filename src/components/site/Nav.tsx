import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl md:text-2xl tracking-wide text-gold-shine">
            Ella Nora
          </span>
          <span className="hidden md:inline text-[10px] tracking-luxe uppercase text-muted-foreground">
            Beauty &amp; Aesthetics
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs uppercase tracking-luxe text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="hidden md:inline-flex items-center justify-center bg-foreground text-gold border border-gold px-6 py-2.5 text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-foreground transition"
        >
          Book Now
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-6 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-background border-b border-border/60 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-luxe text-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-foreground text-background px-6 py-3 text-[11px] uppercase tracking-luxe"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
