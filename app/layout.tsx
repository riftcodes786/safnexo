import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Safenexo - AI-Powered Digital Studio',
  description: 'Safenexo is a next-gen studio crafting intelligent digital products with precision and creativity. We merge AI, automation, and human creativity to craft powerful digital systems.',
  keywords: 'AI web development, mobile app development, chatbot automation, digital strategy, SEO, artificial intelligence, automation, digital transformation',
  authors: [{ name: 'Muhammad Abdullah' }],
  creator: 'Safenexo',
  publisher: 'Safenexo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://safenexo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Safenexo - AI-Powered Digital Studio',
    description: 'Building the future with AI & Design. Intelligent websites, mobile apps, chatbots, and digital strategies that adapt and evolve.',
    url: 'https://safenexo.com',
    siteName: 'Safenexo',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Safenexo - AI-Powered Digital Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safenexo - AI-Powered Digital Studio',
    description: 'Building the future with AI & Design. Intelligent websites, mobile apps, chatbots, and digital strategies that adapt and evolve.',
    images: ['/images/og-image.svg'],
    creator: '@safenexo',
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_safenexo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon_safenexo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="msapplication-TileColor" content="#0A0A0A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Safenexo",
              "url": "https://safenexo.com",
              "logo": "https://safenexo.com/favicon_safenexo.png",
              "description": "AI-Powered Digital Studio crafting intelligent digital products with precision and creativity",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Muhammad Abdullah",
                "jobTitle": "Founder & CEO"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://twitter.com/safenexo",
                "https://linkedin.com/company/safenexo"
              ],
              "serviceType": [
                "AI Web Development",
                "Mobile App Development", 
                "Chatbot & Automation",
                "Digital Strategy & Consulting",
                "Organic Growth SEO"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
