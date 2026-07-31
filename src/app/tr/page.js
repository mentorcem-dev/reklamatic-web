import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "Clipping Ajansı ve Aktif Clipper Ağı | Reklamatic" },
  description: "İçeriğinizi Reklamatic'in aktif clipper ağıyla farklı sosyal medya hesaplarında yayınlatın veya clipper olarak uygun doğrulanmış görüntülenmeden kazanın.",
  keywords: ["clipping ajansı", "clipping nedir", "clipper kimdir", "clipper ol", "izlenme başına para kazanma", "sosyal medya reklamı", "TikTok clipping", "Instagram Reels reklamı", "YouTube Shorts clipping"],
  alternates: {
    canonical: "https://reklamatic.ai/tr",
    languages: { "en": "https://reklamatic.ai/", "tr": "https://reklamatic.ai/tr", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — Clipping ajansı ve aktif clipper ağı.",
    description: "Hemen cliplenmeye başlayın: kısa video üretimi, clipper dağıtımı ve uygun görüntülenme raporu tek ajans operasyonunda.",
    url: "https://reklamatic.ai/tr",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Reklamatic.ai — markalar ve clipper'lar için kısa video kampanya ağı" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Ajansı", description: "Kısa video üretimi, aktif clipper ağıyla dağıtım ve uygun görüntülenme raporu.", images: ["/og.png"] },
};

export default function TurkishHome() {
  return <ClippingSite locale="tr" copy={content.tr} />;
}
