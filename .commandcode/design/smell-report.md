# Smell Report — Kontrakan Nenek Ratna

Mode: smell | Date: 2026-10-19 | Surface: app/page.tsx (single-page landing)

## Score: 3/10 — STRONG

5 of 10 tracked odors detected, plus a domain-default trap. The page is competent but reads as a median generated landing page.

## Heuristics

| # | Odor | Present? | Evidence |
|---|---|---|---|
| 1 | Tech gradient | absent | no blue-violet/indigo gradients |
| 2 | Generic tech hue | absent | clay accent, not blue-purple |
| 3 | Feature tile grid | DETECTED | `app/page.tsx:92-103` four equal emoji cards |
| 4 | Accent rail | absent | none |
| 5 | Unearned blur | DETECTED | `app/page.tsx:71` `backdrop-blur-sm` on hero secondary button |
| 6 | Stat monument | absent | none |
| 7 | Icon topper / emoji-as-icon | DETECTED | `app/page.tsx:14,19,24,29,98,158-160,232-235,244,67` emoji used as icons |
| 8 | Bounce everywhere | absent | no motion at all (opposite failure) |
| 9 | Default type | DETECTED | Fraunces present but timid scale, no editorial contrast; body generic |
| 10 | Center stack | DETECTED | every section `text-center` + `max-w-* mx-auto` (85,88,179,182,199,202) |

## Domain Default Trap

Warm cream + terracotta + serif is the predictable "homestay / rental" lane. The direction was guessable from the industry before opening the page. Needs at least one broken dimension.

## Additional systemic tells (not in the 10-row table)

- Rounded-full pill buttons on every CTA (`65,71,166`) — template reflex.
- Uniform card treatment `bg-card border rounded-2xl/3xl` repeated across sections.
- Default Tailwind green badges `bg-green-100 text-green-800` — unauthored palette.
- Copy with exclamation marks ("Tertarik? Hubungi Kami Sekarang!") — voice reflex.
- Zero motion: page is fully static, no reveal, no state character.

## Findings

| # | Severity | Discipline | Location | Before | After | Why |
|---|---|---|---|---|---|---|
| 1 | HIGH | Voice/Composition | app/page.tsx:92-103 | 4 equal emoji feature tiles | Asymmetric editorial list with numerals 01-04, rules, no emoji | Feature tile grid is the strongest tell; equal cards carry no priority |
| 2 | HIGH | Composition | app/page.tsx:85,179,199 (+subs) | every section centered | Left-aligned editorial headers with eyebrow + rule; vary alignment per section | Center stack as default = no composition decision |
| 3 | HIGH | Voice | app/page.tsx:14-31,98,158-160,232-235 | emoji as icons | Inline SVG line icons or typographic markers | Emoji-as-icon is an unchosen, generated reflex |
| 4 | MEDIUM | Color | app/page.tsx + globals.css | single terracotta on cream | Two-hue authored palette: clay + deep teal-green on paper; remove default green badges | Breaks domain default trap; palette gains a reason |
| 5 | MEDIUM | Type | globals.css / page.tsx | timid Fraunces scale | Editorial scale: oversized display, tight leading, strong weight contrast | Type must carry a voice, not just a family |
| 6 | MEDIUM | Interaction | app/page.tsx:71 | backdrop-blur-sm pill | Opaque solid secondary button, small radius | Unearned blur; commit to a depth system |
| 7 | MEDIUM | Motion | whole page | static | Scroll-reveal with sharp decel + stagger, reduced-motion aware | Page has no character in how it arrives |
| 8 | LOW | Copy | app/page.tsx CTA | exclamation marks | Sentence case, no exclamation | Copy voice rule |

## Verdict: Needs changes

Next modes: deslop (composition, color, type, depth, motion, decoration in that order).
