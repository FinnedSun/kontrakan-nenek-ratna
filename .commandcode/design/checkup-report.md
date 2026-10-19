# Checkup Report — Kontrakan Nenek Ratna

Mode: checkup | Date: 2026-10-19 | Surface: rendered page (desktop 1440, mobile 390) + source

## Score: 25/60

| Vital | Status | Points | Key finding |
|---|---|---|---|
| Intentionality | Critical | 0 | Assembled from defaults: centered sections, emoji tiles, pill buttons |
| Readability | Watch | 5 | Hero sub-headline over bright photo is low contrast |
| Usability | Watch | 5 | WA contact works; lightbox lacks Esc / focus trap / prev-next |
| Responsiveness | Watch | 5 | Stacks acceptably; hero contrast worse on mobile; table has overflow-x |
| Speed | Healthy | 10 | Next Image lazy + priority hero; static prerender |
| Accessibility | Critical | 0 | Modal has no role=dialog/aria-modal, no Esc, no focus trap/restore |

## Prescriptions (critical first)

| # | Severity | Discipline | Location | Before | After | Why |
|---|---|---|---|---|---|---|
| 1 | HIGH | Accessibility | app/page.tsx:386-410 (GalleryModal) | overlay div onClick, ✕ button, no Esc/trap/role | role="dialog" aria-modal, Esc closes, focus trap + restore, prev/next buttons | Keyboard users cannot operate or escape the modal |
| 2 | HIGH | Color/Contrast | app/page.tsx:46,56 | rgba(42,36,32,0.55) overlay, white/90 body | Stronger scrim or solid ink panel behind hero text | Text on background fails comfortable contrast over bright wall |
| 3 | HIGH | Interaction | app/page.tsx:136-141 | "Lihat semua N foto" opens photo[6] only | Opens gallery at that index with full navigation | Control misrepresents its action |
| 4 | MEDIUM | Accessibility | app/page.tsx:120-132 | thumbnail buttons rely on default focus | Visible focus-visible ring token | Tab landing must be obvious |

## Verification

- Ran: `npm run build` (pass), `npm run lint` (pass), `npx tsc --noEmit` (pass)
- Observed: full-page screenshots at 1440 and 390 via agent-browser
- Not verified: 320px reflow, 200% zoom, screen-reader walkthrough, color-blind simulation

## Verdict: Block

Two HIGH accessibility findings stand. Fix before shipping.

Next modes: a11y + deslop.
