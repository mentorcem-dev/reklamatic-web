import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "Clipping Reklam Ajansı ve Clipper Ağı | Reklamatic" },
  description: "Markalar için kısa video üretimi ve clipper hesaplarında sosyal medya dağıtımı; içerik üreticileri için marka kampanyaları ve kazanç fırsatları.",
  keywords: ["clipping ajansı", "clipper ol", "sosyal medya reklamı", "içerik üreticisi reklamı", "TikTok reklam ajansı", "Instagram Reels reklamı", "YouTube Shorts reklamı"],
  alternates: {
    canonical: "https://reklamatic.ai/tr",
    languages: { "en": "https://reklamatic.ai/", "tr": "https://reklamatic.ai/tr", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — Reklam ver veya clipper olarak kazan.",
    description: "Markaları kısa video üreten ve kendi hesaplarında paylaşan clipper'larla buluşturan kampanya ağı.",
    url: "https://reklamatic.ai/tr",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Reklamatic.ai — markalar ve clipper'lar için kısa video kampanya ağı" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Ağı", description: "Marka kampanyaları uygun clipper hesaplarında kısa videolarla yayımlanır.", images: ["/og.png"] },
};

export default function TurkishHome() {
  return <ClippingSite locale="tr" copy={content.tr} />;
}
