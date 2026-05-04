## Goal
Bring more gold into the brand to match the mirrored-gold "ELLA NORA" signage in the photo. Right now the accent is a soft rose-gold used sparingly — we'll shift to a warmer, more luminous champagne-gold and use it more confidently across the site.

## Changes

### 1. `src/styles.css` — richer gold tokens
- Retune `--rose-gold` toward a warmer luxe gold (deeper, more saturated champagne-gold like the signage), plus add:
  - `--gold` (primary luminous gold)
  - `--gold-deep` (antique gold for borders/dividers)
  - `--gradient-gold` (linear-gradient for shimmery text/borders)
- Add a `.text-gold-shine` utility (background-clip text gradient) for occasional headline accents matching the mirrored signage feel.
- Update `--ring` and selection color to gold.

### 2. `src/components/site/Nav.tsx`
- Logo wordmark "Ella Nora" rendered with the gold-shine gradient.
- Hairline gold underline on hover for nav links.
- "Book Now" button: black bg with thin gold border + gold text on hover (or invert: gold bg, black text) — a visible gold CTA accent.

### 3. `src/components/site/Hero.tsx`
- "redefined" italic word switches from rose-gold to gold-shine gradient.
- Top eyebrow ("Birch Acres · Kempton Park") gets a small gold dot/divider.
- Secondary "WhatsApp Us" button gets gold border instead of foreground/30.
- Optional thin gold frame line at the bottom of hero.

### 4. `src/components/site/About.tsx`
- Eyebrow text and "Personalised" italic in gold.
- Stat numbers (100% / 5★ / 1:1) in gold.
- Quote left-border becomes gold.
- Decorative offset block behind the image: swap blush for a soft gold tint.

### 5. `src/components/site/Services.tsx`
- Section eyebrow + "tailored to you" italic in gold.
- Card number badges (01, 02…) become black-on-gold (or gold text).
- "Book this service →" link in gold with gold underline.
- Card hover: thin gold border.

### 6. `src/components/site/Gallery.tsx`, `Booking.tsx`, `Contact.tsx`
- Replace remaining rose-gold eyebrow + accent text with the new gold tone.
- Booking section CTA: gold border accent around the iframe / button.
- Contact: phone, email and social icons in gold.

### 7. `src/components/site/Footer.tsx`
- "Ella Nora" wordmark in gold-shine gradient.
- Section labels ("Explore", "Connect") in muted gold.
- Top hairline border in gold.

### 8. `src/components/site/StickyCta.tsx`
- "Book" pill gets a gold accent (gold bg with black text, or black with gold border + gold text) so it reads as the premium primary action.

## Technical notes
- All color changes go through CSS tokens so the palette stays consistent.
- The gold-shine text gradient uses `background-clip: text; -webkit-text-fill-color: transparent;` and falls back to solid gold.
- No new dependencies, no new images, no layout/structure changes — purely a tonal shift toward gold.

## Out of scope
- Replacing photography or regenerating hero imagery.
- Restructuring sections or copy (your earlier message looked truncated — if you also wanted content/section changes, tell me and I'll fold them in).