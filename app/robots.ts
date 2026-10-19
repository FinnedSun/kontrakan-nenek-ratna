import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://kontrakan-nenek-ratna.vercel.app/sitemap.xml",
  };
}
