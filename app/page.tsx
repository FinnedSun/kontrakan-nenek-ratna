"use client";

import { useState } from "react";
import Image from "next/image";
import { unitGroups, type UnitGroup } from "@/lib/units";
import { Reveal } from "@/components/reveal";
import { Gallery, type GalleryState } from "@/components/gallery";
import {
  TrainIcon,
  CapIcon,
  HomeIcon,
  TagIcon,
  BedIcon,
  BathIcon,
  StoveIcon,
  ChatIcon,
  PinIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@/components/icons";

const WA_LINK =
  "https://wa.me/62895602588739?text=Halo%2C%20saya%20tertarik%20dengan%20Kontrakan%20Nenek%20Ratna";

const coverPhoto = "/sampul/IMG_20261018_171717_396.jpg";

const reasons = [
  {
    icon: TrainIcon,
    title: "Samping Stasiun Pauh Lima",
    desc: "Berjalan kaki ke peron. Cocok untuk komuter dan yang mengandalkan kereta.",
  },
  {
    icon: CapIcon,
    title: "Sejalur dengan Universitas Andalas",
    desc: "Kampus Unand Limau Manis hanya beberapa menit, hemat ongkos dan waktu.",
  },
  {
    icon: HomeIcon,
    title: "Lingkungan rumah yang tenang",
    desc: "Bukan kos-kosan padat. Tetangga tetap, gang tertutup, aman untuk tinggal lama.",
  },
  {
    icon: TagIcon,
    title: "Sewa tahunan yang masuk akal",
    desc: "Mulai Rp 11 juta per tahun untuk unit dua kamar, masih bisa dibicarakan.",
  },
];

function Eyebrow({ children, tone = "dark" }: { children: string; tone?: "dark" | "light" }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-clay" : "text-paper/70"
      }`}
    >
      <span className={`h-px w-8 ${tone === "dark" ? "bg-clay" : "bg-paper/50"}`} />
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section className="grid min-h-[92vh] grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div className="order-2 flex flex-col justify-center bg-ink px-6 py-16 md:px-12 lg:order-1 lg:py-24">
        <Reveal>
          <Eyebrow tone="light">Kontrakan · Pauh, Padang</Eyebrow>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-paper md:text-7xl">
            Kontrakan
            <br />
            Nenek Ratna
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-on-ink">
            Rumah sewa di samping Stasiun Pauh Lima, Limau Manis. Lima unit
            siap huni untuk mahasiswa dan keluarga kecil.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 border-l-2 border-clay pl-5">
            <p className="font-display text-3xl font-bold text-paper">
              Rp 11 juta<span className="text-lg font-normal text-muted-on-ink">/tahun</span>
            </p>
            <p className="mt-1 text-sm text-muted-on-ink">
              Unit 1–3 · minimal sewa 12 bulan · unit 4–5 harga nego
            </p>
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-4 font-semibold text-paper transition-colors hover:bg-clay-deep"
            >
              <ChatIcon className="h-5 w-5" /> Chat WhatsApp
            </a>
            <a
              href="#unit"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line-dark px-6 py-4 font-semibold text-paper transition-colors hover:bg-ink-2"
            >
              Lihat unit <ChevronDownIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="relative order-1 min-h-[46vh] lg:order-2 lg:min-h-0">
        <Image
          src={coverPhoto}
          alt="Deretan unit Kontrakan Nenek Ratna di samping Stasiun Pauh Lima"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="bg-paper px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <Reveal>
          <div className="lg:sticky lg:top-16">
            <Eyebrow>Kenapa di sini</Eyebrow>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Lokasi yang
              <br />
              bekerja untuk
              <br />
              harian Anda
            </h2>
          </div>
        </Reveal>
        <ol className="divide-y divide-line border-y border-line">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 90}>
              <div className="flex items-start gap-6 py-8">
                <span className="font-display text-sm font-bold tabular-nums text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <r.icon className="mt-1 h-6 w-6 shrink-0 text-pine" />
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function UnitBlock({
  group,
  flip,
  onOpen,
}: {
  group: UnitGroup;
  flip: boolean;
  onOpen: (photos: string[], index: number, label: string) => void;
}) {
  const lead = group.photos[0];
  const thumbs = group.photos.slice(1, 6);
  return (
    <article className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <figure>
          <button
            onClick={() => onOpen(group.photos, 0, group.name)}
            className="relative block aspect-[4/3] w-full overflow-hidden rounded-lg"
            aria-label={`Buka galeri ${group.name}`}
          >
            <Image
              src={lead}
              alt={`${group.name} — foto utama`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </button>
          <div className="mt-2 grid grid-cols-5 gap-2">
            {thumbs.map((photo, i) => (
              <button
                key={photo}
                onClick={() => onOpen(group.photos, i + 1, group.name)}
                className="relative aspect-square overflow-hidden rounded-md"
                aria-label={`Buka foto ${i + 2} ${group.name}`}
              >
                <Image
                  src={photo}
                  alt={`${group.name} foto ${i + 2}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="20vw"
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => onOpen(group.photos, 0, group.name)}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-clay hover:text-clay-deep"
          >
            Lihat semua {group.photos.length} foto <ArrowRightIcon className="h-4 w-4" />
          </button>
        </figure>
      </Reveal>
      <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
        <div>
          <Eyebrow>{group.units}</Eyebrow>
          <h3 className="font-display text-4xl font-black tracking-tight md:text-5xl">
            {group.name}
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-muted">{group.description}</p>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5">
            <div className="flex items-center gap-2">
              <BedIcon className="h-5 w-5 text-pine" />
              <dd className="text-sm font-medium">{group.bedrooms} kamar tidur</dd>
            </div>
            <div className="flex items-center gap-2">
              <BathIcon className="h-5 w-5 text-pine" />
              <dd className="text-sm font-medium">{group.bathrooms} kamar mandi</dd>
            </div>
            <div className="flex items-center gap-2">
              <StoveIcon className="h-5 w-5 text-pine" />
              <dd className="text-sm font-medium">{group.kitchens} dapur</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-3xl font-bold text-clay">{group.price}</p>
              <p className="mt-1 text-sm text-muted">{group.priceNote}</p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-ink-2"
            >
              Tanya {group.name} <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

function Units({
  onOpen,
}: {
  onOpen: (photos: string[], index: number, label: string) => void;
}) {
  return (
    <section id="unit" className="bg-paper-2 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Pilihan unit</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Dua tipe denah, lima unit tersedia
          </h2>
        </Reveal>
        <div className="mt-16 space-y-24">
          {unitGroups.map((group, i) => (
            <UnitBlock key={group.id} group={group} flip={i % 2 === 1} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-paper px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Lokasi</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Samping Stasiun Pauh Lima, Limau Manis
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-line">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.330268859599!2d100.43437761373815!3d-0.9374413411545147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b901df87fc05%3A0xfd32e698dc252bea!2smie%20bagaluik%20mak%20ciwel!5e0!3m2!1sid!2sid!4v1792449668193!5m2!1sid!2sid" 
                width="100%" 
                height="420" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta lokasi Kontrakan Nenek Ratna"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-bold">
                  <PinIcon className="h-5 w-5 text-clay" /> Alamat
                </h3>
                <p className="leading-relaxed text-muted">
                  Samping Stasiun Pauh Lima, Simpangalai Limau Manis, Pauh, Kota
                  Padang, Sumatera Barat
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-display text-xl font-bold">Sekitar lokasi</h3>
                <ul className="divide-y divide-line border-y border-line text-sm">
                  <li className="flex items-center gap-3 py-3">
                    <TrainIcon className="h-5 w-5 text-pine" /> Stasiun Pauh Lima — jalan kaki
                  </li>
                  <li className="flex items-center gap-3 py-3">
                    <CapIcon className="h-5 w-5 text-pine" /> Universitas Andalas — menit berkendara
                  </li>
                  <li className="flex items-center gap-3 py-3">
                    <HomeIcon className="h-5 w-5 text-pine" /> Pasar &amp; warung — sekitar gang
                  </li>
                </ul>
              </div>
              <a
                href="https://maps.google.com/?q=-0.9383654224867071,100.43490387559486"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-clay hover:text-clay-deep"
              >
                Buka di Google Maps <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-paper-2 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Harga &amp; ketentuan</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Sewa tahunan, tanpa biaya tersembunyi
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-lg border border-line bg-card p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Unit 1 – 3
                </p>
                <p className="mt-4 font-display text-5xl font-black tracking-tight text-clay">
                  Rp 11 jt
                </p>
                <p className="mt-1 text-sm text-muted">per tahun · 2 kamar tidur</p>
              </div>
              <ul className="mt-8 space-y-2 border-t border-line pt-6 text-sm text-muted">
                <li>2 kamar tidur, 1 kamar mandi, 1 dapur</li>
                <li>Minimal sewa 12 bulan</li>
                <li>Listrik &amp; air terpisah</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-line bg-card p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Unit 4 – 5
                </p>
                <p className="mt-4 font-display text-5xl font-black tracking-tight text-pine">
                  Nego
                </p>
                <p className="mt-1 text-sm text-muted">per tahun · 1 kamar tidur</p>
              </div>
              <ul className="mt-8 space-y-2 border-t border-line pt-6 text-sm text-muted">
                <li>1 kamar tidur, 1 kamar mandi, 1 dapur</li>
                <li>Minimal sewa 12 bulan</li>
                <li>Harga dibicarakan langsung</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Pembayaran dapat dicicil sesuai kesepakatan. Semua unit sudah
            termasuk akses gang tertutup dan lingkungan yang dijaga warga.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-pine px-6 py-24 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <Eyebrow tone="light">Kontak</Eyebrow>
          <h2 className="max-w-xl font-display text-4xl font-black leading-tight tracking-tight text-paper md:text-5xl">
            Masih ragu? Tanya dulu, survei kemudian
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-paper/70">
            Kami balas cepat di WhatsApp. Sebutkan unit yang diminati dan
            kapan ingin survei.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-col items-start gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-paper px-8 py-5 text-lg font-bold text-pine transition-colors hover:bg-paper-2"
            >
              <ChatIcon className="h-6 w-6" /> Chat WhatsApp
            </a>
            <a href="tel:+62895602588739" className="text-sm text-paper/80 underline">
              atau telepon 0895-6025-88739
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg font-bold text-paper">Kontrakan Nenek Ratna</p>
        <p className="text-sm text-muted-on-ink">
          Samping Stasiun Pauh Lima, Simpangalai Limau Manis, Pauh, Padang
        </p>
        <p className="text-sm text-muted-on-ink">© 2026</p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [gallery, setGallery] = useState<GalleryState>(null);

  const openGallery = (photos: string[], index: number, label: string) =>
    setGallery({ photos, index, label });

  return (
    <>
      <Hero />
      <Reasons />
      <Units onOpen={openGallery} />
      <Location />
      <Pricing />
      <Contact />
      <Footer />
      <Gallery
        state={gallery}
        onClose={() => setGallery(null)}
        onNavigate={(index) =>
          setGallery((g) => (g ? { ...g, index } : g))
        }
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
              latitude: -0.9372679291558201,
              longitude: 100.43443139128169,
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
