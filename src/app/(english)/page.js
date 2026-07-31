import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "Clipping Campaigns Across 60 Managed Accounts | Reklamatic" },
  description: "Launch Türkiye-focused clipping campaigns across 60 managed social accounts, or apply as a clipper and earn from eligible verified views.",
  keywords: ["clipping agent", "clipping agency", "clipping campaigns", "become a clipper", "pay per view campaign", "Türkiye short video distribution", "TikTok clipping", "Instagram Reels clipping", "YouTube Shorts clipping"],
  alternates: {
    canonical: "https://reklamatic.ai/",
    languages: { en: "https://reklamatic.ai/", tr: "https://reklamatic.ai/tr", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — 60-account managed clipping distribution.",
    description: "Advertise through Türkiye-focused managed social accounts or apply as a clipper and earn from eligible campaign views.",
    url: "https://reklamatic.ai/",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Reklamatic.ai — one source, more than one path to discovery" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Campaigns", description: "Türkiye-focused short-video production and distribution across 60 managed accounts.", images: ["/og.png"] },
};

export default function Home() {
  return <ClippingSite locale="en" copy={content.en} />;
}
