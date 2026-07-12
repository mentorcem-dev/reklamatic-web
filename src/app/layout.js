import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  metadataBase: new URL('https://reklamatic.ai'),
  title: {
    default: 'Reklamatic.ai | AI Video Ads & Automation',
    template: '%s | Reklamatic.ai'
  },
  description: 'AI product videos, sponsored distribution across a 26-channel owned media network, and practical content automation systems.',
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
    description: '152M+ verified views. AI product videos, sponsored distribution and content systems built by the team operating them.',
    url: 'https://reklamatic.ai',
    siteName: 'Reklamatic.ai',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'Reklamatic.ai — Create the content. Own the distribution.',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reklamatic.ai',
    description: '152M+ verified views. AI product videos, sponsored distribution and practical content automation.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: 'https://reklamatic.ai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
