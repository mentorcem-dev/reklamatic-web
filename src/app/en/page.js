import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "Türkiye's First Clipping Agency | Reklamatic" },
  description: "Distribute your content through Reklamatic's active clipper network, or become a clipper and earn from eligible verified campaign views.",
  keywords: ["clipping agent", "clipping agency", "clipping campaigns", "become a clipper", "pay per view campaign", "Türkiye short video distribution", "TikTok clipping", "Instagram Reels clipping", "YouTube Shorts clipping"],
  alternates: {
    canonical: "https://reklamatic.ai/en",
    languages: { tr: "https://reklamatic.ai/", en: "https://reklamatic.ai/en", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — Clipping agency and active clipper network.",
    description: "Start getting clipped: short-video production, clipper distribution and eligible-view reporting in one agency operation.",
    url: "https://reklamatic.ai/en",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Reklamatic.ai — one source, more than one path to discovery" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Agency", description: "Short-video production, active clipper distribution and eligible-view reporting.", images: ["/og.png"] },
};

export default function EnglishHome() {
  return <ClippingSite locale="en" copy={content.en} />;
}
