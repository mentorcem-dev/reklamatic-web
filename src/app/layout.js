import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://reklamatic.ai'),
  title: {
    default: 'Reklamatic.ai | Owned Media Sponsorships and Content Automation',
    template: '%s | Reklamatic.ai'
  },
  description: 'Sponsor product stories across our 26-channel media network or install the content automation system we use to operate it.',
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
    title: 'Reklamatic.ai | Owned Media Sponsorships and Content Automation',
    description: 'Sponsor product stories across our network or install the content operation we built for ourselves.',
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
            if (sessionStorage.getItem('reklamatic-clean-v2')) return;
            sessionStorage.setItem('reklamatic-clean-v2', '1');
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(async items => {
                await Promise.all(items.map(item => item.unregister()));
                await navigator.serviceWorker.register('/reklamatic-sw.js', {
                  scope: '/',
                  updateViaCache: 'none'
                });
              });
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
