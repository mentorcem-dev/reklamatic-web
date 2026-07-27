import ClippingSite from "@/components/clipping/ClippingSite";
import { content } from "@/lib/clippingContent";

export const metadata = {
  title: { absolute: "Clipping Agency for Short-Form Distribution | Reklamatic" },
  description: "Reklamatic turns approved long-form content into short-form clips for TikTok, Instagram Reels and YouTube Shorts, with review and campaign reporting.",
  keywords: ["clipping agency", "short form video agency", "podcast clips", "content repurposing", "TikTok clipping", "Instagram Reels agency", "YouTube Shorts agency"],
  alternates: {
    canonical: "https://reklamatic.ai/",
    languages: { en: "https://reklamatic.ai/", tr: "https://reklamatic.ai/tr", "x-default": "https://reklamatic.ai/" },
  },
  openGraph: {
    title: "Reklamatic.ai — One recording. A network of clips.",
    description: "A clipping partner for turning long-form ideas into short-form distribution.",
    url: "https://reklamatic.ai/",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    images: [{ url: "/og-clipping.png", width: 1200, height: 630, alt: "Reklamatic.ai Clipping Agent — one video, many distribution moments" }],
  },
  twitter: { card: "summary_large_image", title: "Reklamatic.ai Clipping Agent", description: "Turn one recording into a network of platform-native short-form clips.", images: ["/og-clipping.png"] },
};

export default function Home() {
  return <ClippingSite locale="en" copy={content.en} />;
}
