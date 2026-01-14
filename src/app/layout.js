import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://reklamatic.ai'),
  title: {
    default: 'Reklamatic.ai | AI Video Ads & Automation',
    template: '%s | Reklamatic.ai'
  },
  description: 'Scale your business with AI-driven video commercials and n8n automation systems. We turn chaos into consistent growth.',
  keywords: ['AI Video', 'n8n Automation', 'Video Production', 'Content Creation', 'Digital Marketing', 'Business Automation', 'Reklamatic'],
  authors: [{ name: 'Reklamatic Team' }],
  creator: 'Reklamatic.ai',
  publisher: 'Reklamatic.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Reklamatic.ai | AI Video Ads & Automation',
    description: 'Scale your business with AI-driven video commercials and n8n automation systems.',
    url: 'https://reklamatic.ai',
    siteName: 'Reklamatic.ai',
    images: [
      {
        url: '/images/og-image.jpg', // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: 'Reklamatic.ai Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reklamatic.ai',
    description: 'Scale your business with AI-driven video commercials and n8n automation systems.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://reklamatic.ai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
