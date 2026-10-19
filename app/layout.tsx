import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const SITE_URL = "https://kontrakan-nenek-ratna.vercel.app";

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
  metadataBase: new URL(SITE_URL),
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kontrakan Nenek Ratna — Sewa Rumah dekat Stasiun Pauh Lima",
    description:
      "Kontrakan rumah strategis dekat Stasiun Pauh Lima & Universitas Andalas. Harga mulai Rp 11 juta/tahun.",
    type: "website",
    locale: "id_ID",
    siteName: "Kontrakan Nenek Ratna",
    url: "/",
    images: [
      {
        url: "/sampul/IMG_20261018_171717_396.jpg",
        width: 1200,
        height: 630,
        alt: "Kontrakan Nenek Ratna — tampilan depan rumah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontrakan Nenek Ratna — Sewa Rumah dekat Stasiun Pauh Lima",
    description:
      "Kontrakan rumah strategis dekat Stasiun Pauh Lima & Universitas Andalas. Harga mulai Rp 11 juta/tahun.",
    images: ["/sampul/IMG_20261018_171717_396.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
