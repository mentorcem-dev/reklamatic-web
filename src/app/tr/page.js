import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "Clipping Ajansı | Kısa Video Dağıtımı | Reklamatic" },
  description: "Uzun içerikleri TikTok, Instagram Reels ve YouTube Shorts için kısa videolara dönüştüren, üretim, kontrol ve raporlamayı yöneten clipping ajansı.",
  keywords: ["clipping ajansı", "kısa video ajansı", "podcast klipleri", "içerik dönüştürme", "TikTok ajansı", "Instagram Reels ajansı", "YouTube Shorts ajansı"],
  alternates: {
    canonical: "https://reklamatic.ai/tr",
    languages: { "en": "https://reklamatic.ai/", "tr": "https://reklamatic.ai/tr", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — Tek kayıt. Bir klip ağı.",
    description: "Uzun fikirleri kısa video dağıtımına dönüştüren clipping partneri.",
    url: "https://reklamatic.ai/tr",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    images: [{ url: "/og-clipping-tr.png", width: 1200, height: 630, alt: "Reklamatic.ai Clipping Ajansı — bir video, sayısız dağıtım anı" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Ajansı", description: "Tek bir kaydı platforma doğal kısa videolardan oluşan bir dağıtım ağına dönüştürün.", images: ["/og-clipping-tr.png"] },
};

export default function TurkishHome() {
  return <ClippingSite locale="tr" copy={content.tr} />;
}
