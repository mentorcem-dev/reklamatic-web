import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "60 Hesaplık Clipping Reklam Ağı | Reklamatic" },
  description: "Türkiye odaklı clipping kampanyanızı 60 yönetilen sosyal medya hesabında dağıtın veya clipper olarak uygun doğrulanmış görüntülenmeden kazanın.",
  keywords: ["clipping ajansı", "clipping nedir", "clipper kimdir", "clipper ol", "izlenme başına para kazanma", "sosyal medya reklamı", "TikTok clipping", "Instagram Reels reklamı", "YouTube Shorts clipping"],
  alternates: {
    canonical: "https://reklamatic.ai/tr",
    languages: { "en": "https://reklamatic.ai/", "tr": "https://reklamatic.ai/tr", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — 60 yönetilen hesapta clipping dağıtımı.",
    description: "Markanız için Türkiye odaklı reklam verin veya clipper olarak uygun kampanya görüntülenmesinden kazanın.",
    url: "https://reklamatic.ai/tr",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Reklamatic.ai — markalar ve clipper'lar için kısa video kampanya ağı" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Kampanyaları", description: "Türkiye odaklı kısa video üretimi ve 60 yönetilen hesapta dağıtım.", images: ["/og.png"] },
};

export default function TurkishHome() {
  return <ClippingSite locale="tr" copy={content.tr} />;
}
