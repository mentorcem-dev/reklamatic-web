export const sharedMetadata = {
  metadataBase: new URL("https://reklamatic.ai"),
  title: { default: "Reklamatic.ai | Clipping Agent", template: "%s · Reklamatic.ai" },
  description: "Platform-native clipping, short-form production and distribution support for creators, brands and media teams.",
  authors: [{ name: "Reklamatic" }],
  creator: "Reklamatic.ai",
  publisher: "Reklamatic.ai",
  applicationName: "Reklamatic.ai",
  category: "Marketing",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    siteName: "Reklamatic.ai",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Reklamatic.ai — one source, more than one path to discovery" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.ico" },
};
