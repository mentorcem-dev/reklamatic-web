import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://reklamatic.ai'),
  title: {
    default: 'Reklamatic.ai | Product Videos Published Across 26 Social Channels',
    template: '%s | Reklamatic.ai'
  },
  description: 'We create short product videos and publish them across our own 26-channel Instagram, Facebook, TikTok and YouTube network.',
  keywords: ['AI Product Video', 'Social Media Distribution', 'Instagram Reels', 'TikTok Video', 'YouTube Shorts', 'Facebook Reels', 'Reklamatic'],
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
    title: 'Reklamatic.ai | Product Videos and 26-Channel Distribution',
    description: 'We create the videos, publish them through our own social media network and report the results.',
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
        <script dangerouslySetInnerHTML={{ __html: `
          (() => {
            if (sessionStorage.getItem('reklamatic-clean-v1')) return;
            sessionStorage.setItem('reklamatic-clean-v1', '1');
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(items => items.forEach(item => item.unregister()));
            }
            if ('caches' in window) {
              caches.keys().then(keys => keys.forEach(key => caches.delete(key)));
            }
          })();
        ` }} />
        {children}
      </body>
    </html>
  );
}
