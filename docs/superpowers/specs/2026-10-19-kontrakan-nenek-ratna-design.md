# Kontrakan Nenek Ratna — Design Spec

Date: 2026-10-19

## Overview

A single-page, SEO-friendly landing website advertising "Kontrakan Nenek Ratna" — rental units near Pauh Lima train station, Padang, West Sumatra. Target audience: university students (Unand) and locals seeking affordable rentals.

## Requirements

- **Unit 1-3**: 2 bedrooms, 1 bathroom, 1 kitchen — Rp 11 juta/tahun (min. 12 bulan)
- **Unit 4-5**: 1 bedroom, 1 bathroom, 1 kitchen — harga negotiable
- **Location**: Samping Stasiun Pauh Lima, Simpangalai Limau Manis, Pauh, Kota Padang, Sumatera Barat
- **Contact**: WhatsApp 0895602588739
- **Photos**: public/sampul (cover), public/unit-1..5 (gallery)
- **SEO**: targeting "kontrakan dekat stasiun pauh lima", "kontrakan mahasiswa unand", "kontrakan padang"

## Architecture

Single-page Next.js 16 App Router site with sections:

1. **Hero** — full-bleed cover photo, headline, location + price hook, WhatsApp CTA
2. **Keunggulan** — 4 highlights (dekat stasiun, dekat Unand, aman & nyaman, harga terjangkau)
3. **Unit Showcase** — 2 grouped cards (Unit 1-3 and Unit 4-5) with photo gallery, specs, price
4. **Lokasi** — Google Maps embed + address + nearby landmarks
5. **Harga & Ketentuan** — pricing table + rental terms
6. **Kontak/CTA** — large WhatsApp button, phone number, footer

## Design Direction

- Warm, homey Indonesian aesthetic
- Earthy terracotta/amber accent on warm off-white surface
- Serif display headings (Fraunces) + clean sans body (DM Sans or Geist)
- Mobile-first, responsive
- Indonesian language (lang="id")

## SEO Strategy

- `lang="id"`, semantic HTML
- Meta title: "Kontrakan Nenek Ratna — Sewa Rumah dekat Stasiun Pauh Lima & Unand Padang"
- Meta description with keywords
- Open Graph + Twitter Card
- Structured data: LocalBusiness + Offer (JSON-LD)
- Next.js Image optimization, lazy loading
- Fast LCP via priority on hero image

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- No external dependencies (use native Next.js features)
- Google Maps embed (iframe)
- WhatsApp deep link (wa.me)

## Files to Create/Modify

- `app/layout.tsx` — metadata, fonts, lang="id"
- `app/page.tsx` — main landing page (all sections)
- `app/globals.css` — design tokens, custom styles
- `components/` — Hero, UnitCard, Gallery, etc. (optional, can inline)
- `lib/seo.ts` — structured data helpers (optional)

## Non-Goals

- No multi-page routing
- No CMS or database
- No authentication
- No contact form (WhatsApp only)
