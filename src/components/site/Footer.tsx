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
          <ul className="space-y-2.5 text-sm">
            <li><a href="https://www.instagram.com/ellanorabeauty" target="_blank" rel="noopener noreferrer" className="hover:text-background">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@ellanorabeautybar" target="_blank" rel="noopener noreferrer" className="hover:text-background">TikTok</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100090546100622" target="_blank" rel="noopener noreferrer" className="hover:text-background">Facebook</a></li>
            <li><a href="https://wa.me/27648377293" target="_blank" rel="noopener noreferrer" className="hover:text-background">WhatsApp</a></li>
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
