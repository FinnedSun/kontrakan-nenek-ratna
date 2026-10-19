# Kontrakan Nenek Ratna Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, SEO-friendly landing website advertising Kontrakan Nenek Ratna rental units near Pauh Lima train station, Padang.

**Architecture:** Next.js 16 App Router single page with sections (Hero, Features, Unit Showcase, Location, Pricing, Contact). Tailwind CSS 4 for styling. No external dependencies. Google Maps embed + WhatsApp deep link.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Google Fonts (Fraunces + DM Sans)

**Spec:** docs/superpowers/specs/2026-10-19-kontrakan-nenek-ratna-design.md

## Global Constraints

- Language: Indonesian (`lang="id"`)
- Single page, no routing
- No CMS/database/auth
- WhatsApp as primary contact: https://wa.me/62895602588739
- Phone: 0895602588739
- Unit 1-3: Rp 11.000.000/tahun, min. 12 bulan
- Unit 4-5: harga negotiable
- Mobile-first responsive
- SEO: meta tags, Open Graph, JSON-LD structured data

---

### Task 1: Update layout.tsx with metadata, fonts, and lang

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx content**

```tsx
import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kontrakan Nenek Ratna — Sewa Rumah dekat Stasiun Pauh Lima & Unand Padang",
  description:
    "Kontrakan rumah dekat Stasiun Pauh Lima, Padang. Unit 1-3 (2 kamar tidur) Rp 11 juta/tahun. Unit 4-5 (1 kamar tidur) harga negotiable. Cocok untuk mahasiswa Unand & pekerja. Hubungi via WhatsApp.",
  keywords: [
    "kontrakan padang",
    "kontrakan dekat stasiun pauh lima",
    "kontrakan mahasiswa unand",
    "sewa rumah padang",
    "kontrakan pauh",
    "kontrakan limau manis",
  ],
  openGraph: {
    title: "Kontrakan Nenek Ratna — Sewa Rumah dekat Stasiun Pauh Lima",
    description:
      "Kontrakan rumah strategis dekat Stasiun Pauh Lima & Universitas Andalas. Harga mulai Rp 11 juta/tahun.",
    type: "website",
    locale: "id_ID",
    siteName: "Kontrakan Nenek Ratna",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontrakan Nenek Ratna — Sewa Rumah dekat Stasiun Pauh Lima",
    description:
      "Kontrakan rumah strategis dekat Stasiun Pauh Lima & Universitas Andalas. Harga mulai Rp 11 juta/tahun.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update layout with SEO metadata and fonts"
```

---

### Task 2: Update globals.css with design tokens

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace globals.css content**

```css
@import "tailwindcss";

:root {
  --background: #faf7f2;
  --foreground: #2a2420;
  --accent: #c25a2b;
  --accent-hover: #a84a22;
  --accent-soft: #f3e4dc;
  --muted: #6b5f55;
  --border: #e8e0d6;
  --card: #ffffff;
  --hero-overlay: rgba(42, 36, 32, 0.55);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-accent-soft: var(--accent-soft);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-card: var(--card);
  --font-sans: var(--font-dm-sans);
  --font-display: var(--font-fraunces);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-dm-sans), system-ui, sans-serif;
}

.font-display {
  font-family: var(--font-fraunces), Georgia, serif;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: add design tokens and warm color palette"
```

---

### Task 3: Create unit data file

**Files:**
- Create: `lib/units.ts`

- [ ] **Step 1: Create lib/units.ts**

```ts
export type UnitGroup = {
  id: string;
  name: string;
  units: string;
  bedrooms: number;
  bathrooms: number;
  kitchens: number;
  price: string;
  priceNote: string;
  negotiable: boolean;
  photos: string[];
  description: string;
};

export const unitGroups: UnitGroup[] = [
  {
    id: "unit-1-3",
    name: "Unit 1 - 3",
    units: "3 unit tersedia",
    bedrooms: 2,
    bathrooms: 1,
    kitchens: 1,
    price: "Rp 11.000.000",
    priceNote: "per tahun (min. sewa 12 bulan)",
    negotiable: false,
    photos: [
      "/unit-1/IMG_20261018_171748_979.jpg",
      "/unit-1/IMG_20261018_171755_197.jpg",
      "/unit-1/IMG_20261018_171900_124.jpg",
      "/unit-1/IMG_20261018_171912_742.jpg",
      "/unit-1/IMG_20261018_171934_785.jpg",
      "/unit-1/IMG_20261018_171940_214.jpg",
      "/unit-1/IMG_20261018_171951_247.jpg",
      "/unit-1/IMG_20261018_171959_148.jpg",
      "/unit-1/IMG_20261018_172019_484.jpg",
      "/unit-1/IMG_20261018_172031_565.jpg",
      "/unit-1/IMG_20261018_172042_993.jpg",
      "/unit-1/IMG_20261018_172053_571.jpg",
      "/unit-1/IMG_20261018_172102_628.jpg",
      "/unit-1/IMG_20261018_172115_926.jpg",
      "/unit-2/IMG_20261018_172420_302.jpg",
      "/unit-2/IMG_20261018_172423_218.jpg",
      "/unit-2/IMG_20261018_172433_479.jpg",
      "/unit-2/IMG_20261018_172444_297.jpg",
      "/unit-2/IMG_20261018_172454_425.jpg",
      "/unit-2/IMG_20261018_172459_784.jpg",
      "/unit-2/IMG_20261018_172511_452.jpg",
      "/unit-3/IMG_20261018_172634_947.jpg",
      "/unit-3/IMG_20261018_172652_238.jpg",
      "/unit-3/IMG_20261018_172714_901.jpg",
      "/unit-3/IMG_20261018_172729_628.jpg",
      "/unit-3/IMG_20261018_172755_765.jpg",
      "/unit-3/IMG_20261018_172802_028.jpg",
    ],
    description:
      "Unit dengan 2 kamar tidur, cocok untuk keluarga kecil atau 2-3 orang. Ruang tamu, dapur, dan kamar mandi lengkap.",
  },
  {
    id: "unit-4-5",
    name: "Unit 4 - 5",
    units: "2 unit tersedia",
    bedrooms: 1,
    bathrooms: 1,
    kitchens: 1,
    price: "Harga Nego",
    priceNote: "hubungi kami untuk penawaran",
    negotiable: true,
    photos: [
      "/unit-4/IMG_20261018_173417_834.jpg",
      "/unit-4/IMG_20261018_173428_108.jpg",
      "/unit-4/IMG_20261018_173445_536.jpg",
      "/unit-4/IMG_20261018_173448_775.jpg",
      "/unit-4/IMG_20261018_173452_763.jpg",
      "/unit-4/IMG_20261018_173459_458.jpg",
      "/unit-4/IMG_20261018_173629_637.jpg",
      "/unit-5/IMG_20261018_173530_672.jpg",
      "/unit-5/IMG_20261018_173536_412.jpg",
      "/unit-5/IMG_20261018_173541_353.jpg",
      "/unit-5/IMG_20261018_173551_469.jpg",
      "/unit-5/IMG_20261018_173622_567.jpg",
    ],
    description:
      "Unit dengan 1 kamar tidur, ideal untuk 1-2 orang. Compact, efisien, dan terjangkau.",
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add lib/units.ts
git commit -m "feat: add unit data with photo paths"
```

---

### Task 4: Create the main page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace page.tsx with full landing page**

This is a large single file. I'll build all sections inline with a gallery lightbox using client-side state.

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { unitGroups, type UnitGroup } from "@/lib/units";

const WA_LINK = "https://wa.me/62895602588739?text=Halo%2C%20saya%20tertarik%20dengan%20Kontrakan%20Nenek%20Ratna";

const coverPhoto = "/sampul/IMG_20261018_171717_396.jpg";

const features = [
  {
    icon: "🚆",
    title: "Dekat Stasiun Pauh Lima",
    desc: "Hanya beberapa langkah dari stasiun. Cocok untuk yang sering naik kereta atau transportasi umum.",
  },
  {
    icon: "🎓",
    title: "Dekat Universitas Andalas",
    desc: "Lokasi strategis untuk mahasiswa Unand. Hemat waktu dan biaya transportasi.",
  },
  {
    icon: "🏠",
    title: "Rumah Nyaman & Aman",
    desc: "Lingkungan tenang, aman, dan nyaman untuk tinggal jangka panjang.",
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    desc: "Sewa tahunan mulai Rp 11 juta. Harga bisa dinegosiasikan untuk unit tertentu.",
  },
];

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src={coverPhoto}
        alt="Kontrakan Nenek Ratna - tampilan depan rumah"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-accent-soft text-sm md:text-base font-medium tracking-widest uppercase mb-4">
          Kontrakan · Pauh, Padang
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Kontrakan
          <br />
          Nenek Ratna
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Rumah sewa strategis dekat Stasiun Pauh Lima &amp; Universitas Andalas.
          Mulai Rp 11 juta/tahun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
          >
            <span>💬</span> Hubungi via WhatsApp
          </a>
          <a
            href="#unit"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/30 transition-colors text-lg backdrop-blur-sm"
          >
            Lihat Unit ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Kenapa Pilih Kontrakan Nenek Ratna?
        </h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          Lokasi strategis, harga terjangkau, dan lingkungan nyaman untuk
          mahasiswa maupun pekerja.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UnitCard({
  group,
  onPhotoClick,
}: {
  group: UnitGroup;
  onPhotoClick: (src: string) => void;
}) {
  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-1">
        {group.photos.slice(0, 6).map((photo, i) => (
          <button
            key={photo}
            onClick={() => onPhotoClick(photo)}
            className="relative aspect-square overflow-hidden rounded-xl group"
          >
            <Image
              src={photo}
              alt={`${group.name} foto ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>
      {group.photos.length > 6 && (
        <button
          onClick={() => onPhotoClick(group.photos[6])}
          className="w-full text-center text-accent font-medium py-3 hover:bg-accent-soft transition-colors"
        >
          Lihat semua {group.photos.length} foto →
        </button>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-2xl font-bold">{group.name}</h3>
            <p className="text-muted text-sm">{group.units}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-xl font-bold text-accent">
              {group.price}
            </p>
            <p className="text-muted text-xs">{group.priceNote}</p>
          </div>
        </div>
        <p className="text-foreground/80 text-sm mb-4">{group.description}</p>
        <div className="flex gap-4 text-sm text-muted border-t border-border pt-4">
          <span>🛏️ {group.bedrooms} Kamar Tidur</span>
          <span>🚿 {group.bathrooms} Kamar Mandi</span>
          <span>🍳 {group.kitchens} Dapur</span>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full text-center bg-accent hover:bg-accent-hover text-white font-semibold py-3 rounded-full transition-colors"
        >
          Tanya Unit Ini
        </a>
      </div>
    </div>
  );
}

function UnitShowcase({ onPhotoClick }: { onPhotoClick: (src: string) => void }) {
  return (
    <section id="unit" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Pilihan Unit
        </h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          Dua tipe unit tersedia, disesuaikan dengan kebutuhan Anda.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {unitGroups.map((group) => (
            <UnitCard key={group.id} group={group} onPhotoClick={onPhotoClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Lokasi Strategis
        </h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          Samping Stasiun Pauh Lima, Simpangalai Limau Manis, Pauh, Kota Padang,
          Sumatera Barat.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1244.9860306406183!2d100.43490387559486!3d-0.9383654224867071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b901df87fc05%3A0xfd32e698dc252bea!2smie%20bagaluik%20mak%20ciwel!5e0!3m2!1sid!2sid!4v1792446745741!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Lokasi Kontrakan Nenek Ratna"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold mb-2">Alamat</h3>
              <p className="text-foreground/80">
                Samping Stasiun Pauh Lima, Simpangalai Limau Manis, Pauh, Kota
                Padang, Sumatera Barat
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-2">
                Tempat Terdekat
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>🚆 Stasiun Pauh Lima — 1 menit jalan kaki</li>
                <li>🎓 Universitas Andalas — ~10 menit berkendara</li>
                <li>🛒 Pasar &amp; warung makan — sekitar lokasi</li>
                <li>🕌 Masjid — dekat lokasi</li>
              </ul>
            </div>
            <a
              href="https://maps.google.com/?q=-0.9383654224867071,100.43490387559486"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              📍 Buka di Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Harga &amp; Ketentuan
        </h2>
        <p className="text-muted text-center mb-12">
          Sewa minimal 12 bulan (1 tahun). Harga transparan, bisa dinegosiasikan.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-display font-bold">
                  Tipe Unit
                </th>
                <th className="text-left py-4 px-4 font-display font-bold">
                  Layout
                </th>
                <th className="text-left py-4 px-4 font-display font-bold">
                  Harga/Tahun
                </th>
                <th className="text-left py-4 px-4 font-display font-bold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-4 px-4 font-medium">Unit 1 - 3</td>
                <td className="py-4 px-4 text-muted">
                  2 KT, 1 KM, 1 Dapur
                </td>
                <td className="py-4 px-4 font-bold text-accent">
                  Rp 11.000.000
                </td>
                <td className="py-4 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    Tersedia
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 px-4 font-medium">Unit 4 - 5</td>
                <td className="py-4 px-4 text-muted">
                  1 KT, 1 KM, 1 Dapur
                </td>
                <td className="py-4 px-4 font-bold text-accent">Nego</td>
                <td className="py-4 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    Tersedia
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 bg-accent-soft rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold mb-3">
            Ketentuan Sewa
          </h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>✅ Minimal sewa 12 bulan (1 tahun)</li>
            <li>✅ Pembayaran bisa dicicil (nego)</li>
            <li>✅ Harga Unit 4-5 dapat dinegosiasikan</li>
            <li>✅ Fasilitas lengkap: listrik, air, kamar mandi</li>
            <li>✅ Lingkungan aman dan nyaman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-20 px-6 bg-accent text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Tertarik? Hubungi Kami Sekarang!
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Jangan ragu untuk bertanya. Kami siap membantu Anda menemukan unit
          yang tepat.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white text-accent font-bold px-10 py-5 rounded-full text-xl hover:bg-accent-soft transition-colors shadow-lg"
        >
          <span className="text-2xl">💬</span> Chat WhatsApp
        </a>
        <p className="mt-6 text-white/80">
          atau telepon:{" "}
          <a href="tel:+62895602588739" className="underline font-medium">
            0895-6025-88739
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 bg-foreground text-white/70 text-center text-sm">
      <p className="font-display text-lg text-white mb-2">Kontrakan Nenek Ratna</p>
      <p>Samping Stasiun Pauh Lima, Simpangalai Limau Manis, Pauh, Padang</p>
      <p className="mt-4 text-white/40">
        © {new Date().getFullYear()} Kontrakan Nenek Ratna. All rights reserved.
      </p>
    </footer>
  );
}

function GalleryModal({
  photo,
  onClose,
}: {
  photo: string | null;
  onClose: () => void;
}) {
  if (!photo) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl hover:text-accent-soft"
        onClick={onClose}
        aria-label="Tutup"
      >
        ✕
      </button>
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
        <Image
          src={photo}
          alt="Foto unit"
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <Hero />
      <Features />
      <UnitShowcase onPhotoClick={setSelectedPhoto} />
      <Location />
      <Pricing />
      <Contact />
      <Footer />
      <GalleryModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Kontrakan Nenek Ratna",
            description:
              "Kontrakan rumah dekat Stasiun Pauh Lima, Padang. Cocok untuk mahasiswa Unand.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Samping Stasiun Pauh Lima, Simpangalai Limau Manis",
              addressLocality: "Pauh",
              addressRegion: "Sumatera Barat",
              addressCountry: "ID",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -0.9383654224867071,
              longitude: 100.43490387559486,
            },
            telephone: "+62895602588739",
            priceRange: "Rp 11.000.000 - Nego",
            url: "https://kontrakan-nenek-ratna.vercel.app",
          }),
        }}
      />
    </>
  );
}
```

- [ ] **Step 2: Run typecheck**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Run build**

Run: `npm run build`
Expected: build succeeds

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: build full landing page with all sections"
```

---

### Task 5: Add a sitemap and robots.txt

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 1: Create sitemap.ts**

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kontrakan-nenek-ratna.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
```

- [ ] **Step 2: Create robots.ts**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://kontrakan-nenek-ratna.vercel.app/sitemap.xml",
  };
}
```

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat: add sitemap and robots.txt for SEO"
```
