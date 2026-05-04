## Goal
The current bright/yellow gold reads cheap. Pull it back to a soft, refined champagne gold — light, warm, luxurious — closer to the muted mirrored finish of the salon signage rather than a saturated yellow.

## Change
Single edit in `src/styles.css` — retune three tokens and the gradient. Nothing else needs to change because every component already reads from these tokens.

```
--gold:      oklch(0.78 0.075 82)   /* refined champagne — desaturated, warm */
--gold-deep: oklch(0.62 0.07 72)    /* antique warm gold for borders/eyebrows */
--gold-soft: oklch(0.94 0.035 84)   /* barely-there gold tint for backgrounds */

--gradient-gold: linear-gradient(135deg,
  oklch(0.93 0.04 88) 0%,
  oklch(0.82 0.08 82) 40%,
  oklch(0.68 0.075 70) 70%,
  oklch(0.88 0.05 86) 100%);
```

Effect:
- Lower chroma (0.07–0.08 vs 0.17) removes the neon/yellow cheapness.
- Hue stays in the warm champagne range (70–88) — no rose, no lemon.
- Gradient shimmers between pale champagne and warm bronze for the wordmark/italic accents.
- Pale `--gold-soft` keeps the about/contact backplates as a whisper, not a wash.

## Out of scope
No layout, copy, or component changes — purely a tonal correction.