# Review Report — Kontrakan Nenek Ratna

Mode: review | Date: 2026-10-19 | Surface: rendered page + source

## Score: 22/50

| Lens | Score | Read |
|---|---|---|
| First impression | 4/10 | Authentic photos but centered hero + weak scrim; nothing memorable |
| Hierarchy | 5/10 | Monotone sections, everything centered, no editorial contrast |
| Color voice | 5/10 | Clay is pleasant but is the domain default; green badges unauthored |
| Type voice | 5/10 | Fraunces present but scale timid; no real editorial voice |
| Interaction feel | 3/10 | No motion, weak lightbox, states limited to hover |

## First impression

The photo is real and specific, which is the page's best asset. But it is buried under a centered stack and a translucent scrim that fights the bright yellow wall. The eye lands on a generic headline block, not on the property.

## Experience lens

Arrive -> promise (location + price) is present but visually quiet. Choose -> unit thumbnails are postage stamps; the strongest material is shrunk. Act -> WhatsApp CTA is clear. Recover -> lightbox traps the keyboard user and cannot be escaped.

## Top improvements (ordered by impact)

1. Rebuild hero as an asymmetric editorial composition with a solid ink panel and a large photo; kill the centered stack. -> relayout/redesign
2. Replace emoji feature tiles with an authored reasons list (numerals, rules, SVG markers). -> deslop
3. Give units a large lead image per group + real gallery with prev/next/Esc/focus trap. -> interaction + a11y
4. Author a two-hue palette (clay + deep teal-green) and remove default green badges. -> recolor
5. Add reduced-motion-aware scroll reveal with sharp decel + stagger. -> motion
6. Strengthen type scale to editorial contrast. -> typeset

## Considered but rejected

| Location | Candidate | Rejected because |
|---|---|---|
| app/page.tsx:208 | Replace Google Maps iframe with static map | Iframe is the user-supplied embed; keeping it honors the brief |
| globals.css | Switch to dark theme | Brand is a warm property listing; dark would fight the photos |

## Verification

- Screenshots at 1440/390 observed; build/lint/tsc pass
- Not verified: screen-reader walkthrough, color-blind simulation

## Verdict: Needs changes

Next modes: deslop (primary), a11y, motion, typeset.
