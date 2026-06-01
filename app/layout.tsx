import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Belinda Şampuan | At Kuyruğu & Black Pigment Bitkisel Saç Bakımı',
  description: 'Belinda At Kuyruğu Bitki Özlü Şampuan ve Black Pigment Şampuan ile saçlarınızı doğal yollarla güçlendirin. Sülfatsız, tuzsuz, aminoasit destekli premium saç bakımı. 1000 ml.',
  keywords: 'belinda şampuan, at kuyruğu şampuanı, black pigment şampuan, saç dökülmesi, saç bakımı, sülfatsız şampuan, tuzsuz şampuan, bitkisel şampuan, aminoasit şampuan, saç güçlendirici',
  authors: [{ name: 'Belinda' }],
  creator: 'Belinda',
  publisher: 'Belinda',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://belinda.com.tr',
    siteName: 'Belinda Şampuan',
    title: 'Belinda Şampuan | Doğal Saç Bakımının Gücü',
    description: 'At Kuyruğu ve Black Pigment formülleriyle saçlarınıza profesyonel bakım. Sülfatsız, tuzsuz, %100 bitkisel.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Belinda Şampuan - Doğal Saç Bakımı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belinda Şampuan | Doğal Saç Bakımının Gücü',
    description: 'At Kuyruğu ve Black Pigment formülleriyle saçlarınıza profesyonel bakım.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://belinda.com.tr',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Belinda",
              "url": "https://belinda.com.tr",
              "logo": "https://belinda.com.tr/logo.png",
              "description": "Premium bitkisel saç bakım ürünleri",
              "sameAs": [
                "https://instagram.com/belindahaircare",
                "https://facebook.com/belindahaircare"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Turkish"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Belinda At Kuyruğu Bitki Özlü Şampuan",
              "description": "Sülfatsız, tuzsuz, aminoasit destekli bitkisel formülle saçınıza profesyonel günlük bakım. 1000 ml.",
              "brand": {
                "@type": "Brand",
                "name": "Belinda"
              },
              "offers": {
                "@type": "Offer",
                "price": "899.00",
                "priceCurrency": "TRY",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "2847"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
