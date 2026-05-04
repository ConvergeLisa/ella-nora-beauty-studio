export function StickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border/70 px-3 py-3 grid grid-cols-2 gap-2 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.15)]">
      <a
        href="#book"
        className="inline-flex items-center justify-center gap-2 bg-foreground text-background py-3.5 text-[11px] uppercase tracking-luxe"
      >
        Book
      </a>
      <a
        href="https://wa.me/27648377293"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 border border-foreground/40 text-foreground py-3.5 text-[11px] uppercase tracking-luxe"
      >
        WhatsApp
      </a>
    </div>
  );
}
