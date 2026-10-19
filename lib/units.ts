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
      "/sampul/IMG_20261018_171557_847.jpg",
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
      "/unit-5/IMG_20261018_173622_567.jpg",
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
    ],
    description:
      "Unit dengan 1 kamar tidur, ideal untuk 1-2 orang. Compact, efisien, dan terjangkau.",
  },
];
