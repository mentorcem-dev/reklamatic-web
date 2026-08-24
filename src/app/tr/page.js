import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "Türkiye'nin İlk Clipping Ajansı | Reklamatic" },
  description: "Reklamatic, Türkiye'nin ilk clipping ajansı ve Whop resmi partneridir. İçeriğinizi aktif clipper ağıyla farklı hesaplarda yayınlatın veya clipper olarak uygun görüntülenmeden kazanın.",
  keywords: ["clipping ajansı", "türkiyenin ilk clipping ajansı", "clipping nedir", "clipper kimdir", "clipper ol", "whop partner", "izlenme başına para kazanma", "sosyal medya reklamı", "TikTok clipping", "Instagram Reels reklamı", "YouTube Shorts clipping"],
  alternates: {
    canonical: "https://reklamatic.ai/",
    languages: { tr: "https://reklamatic.ai/", en: "https://reklamatic.ai/en", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — Türkiye'nin ilk clipping ajansı.",
    description: "Hemen cliplenmeye başlayın: kısa video üretimi, clipper dağıtımı ve uygun görüntülenme raporu tek ajans operasyonunda.",
    url: "https://reklamatic.ai/",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Reklamatic.ai — markalar ve clipper'lar için kısa video kampanya ağı" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Ajansı", description: "Kısa video üretimi, aktif clipper ağıyla dağıtım ve uygun görüntülenme raporu.", images: ["/og.png"] },
};

export default function TurkishHome() {
  return <ClippingSite locale="tr" copy={content.tr} />;
}
