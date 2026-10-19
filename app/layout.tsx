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
