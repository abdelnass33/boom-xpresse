import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BoomXpresse - Import Chine & Logistique Internationale | Devis Gratuit",
  description: "🚀 Importez facilement depuis la Chine avec BoomXpresse ! Sourcing, contrôle qualité, transport maritime et dédouanement. Service professionnel depuis 2020. Devis gratuit en 24h ⚡",
  authors: [{ name: "BoomXpresse" }],
  creator: "BoomXpresse",
  publisher: "BoomXpresse",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg'
  },
  manifest: '/manifest.json',
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
    type: 'website',
    locale: 'fr_FR',
    url: 'https://boomxpresse.com',
    siteName: 'BoomXpresse',
    title: 'BoomXpresse - Import Chine & Logistique Internationale',
    description: 'Votre partenaire de confiance pour l\'import depuis la Chine. Sourcing, qualité, transport et dédouanement. Devis gratuit en 24h !',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BoomXpresse - Import Chine et Logistique Internationale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoomXpresse - Import Chine & Logistique Internationale',
    description: 'Importez facilement depuis la Chine ! Sourcing, contrôle qualité, transport. Devis gratuit en 24h 🚀',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    languages: {
      'fr': '/fr',
      'en': '/en',
      'zh': '/zh',
    },
  },
  other: {
    'keywords': 'import chine, logistique internationale, sourcing produits chinois, transport maritime, dédouanement, BoomXpresse, livraison mondiale, fournisseurs chinois',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="BoomXpresse" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BoomXpresse" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#f97316" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Schema.org JSON-LD */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BoomXpresse",
              "description": "Service de logistique internationale et import depuis la Chine",
              "url": "https://boomxpresse.com",
              "logo": "https://boomxpresse.com/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-178-5890-9510",
                "contactType": "customer service",
                "email": "boomxpresse@yahoo.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressCountry": "FR"
              },
              "sameAs": [
                "https://www.facebook.com/boomxpresse",
                "https://www.linkedin.com/company/boomxpresse",
                "https://www.instagram.com/boomxpresse",
                "https://www.tiktok.com/@boomxpresse",
                "https://www.snapchat.com/add/boomxpresse"
              ]
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}