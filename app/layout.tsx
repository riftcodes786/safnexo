import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Safenexo - Building the Future with AI & Design | Intelligent Digital Products',
    template: '%s | Safenexo'
  },
  description: 'Safenexo is a next-gen studio crafting intelligent digital products with precision and creativity. We merge AI, automation, and human creativity to craft powerful digital systems that drive growth.',
  keywords: [
    'AI web development',
    'mobile app experiences',
    'chatbot automation systems',
    'organic growth SEO',
    'digital strategy consulting',
    'intelligent digital products',
    'AI-powered design',
    'automation systems',
    'conversational AI',
    'cross-platform apps',
    'digital transformation',
    'smart websites',
    'AI-driven UX',
    'customer interactions',
    'content strategies'
  ],
  authors: [{ name: 'Safenexo Team' }],
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
    type: 'website',
    locale: 'en_US',
    url: 'https://safenexo.com',
    siteName: 'Safenexo',
    title: 'Safenexo - Building the Future with AI & Design | Intelligent Digital Products',
    description: 'Safenexo is a next-gen studio crafting intelligent digital products with precision and creativity. We merge AI, automation, and human creativity to craft powerful digital systems.',
    images: [
      {
        url: '/favicon_safenexo.png',
        width: 512,
        height: 512,
        alt: 'Safenexo - AI-Powered Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safenexo - Building the Future with AI & Design | Intelligent Digital Products',
    description: 'Safenexo is a next-gen studio crafting intelligent digital products with precision and creativity. We merge AI, automation, and human creativity to craft powerful digital systems.',
    images: ['/favicon_safenexo.png'],
    creator: '@safenexo',
    site: '@safenexo',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Digital Studio',
  other: {
    'theme-color': '#0A0A0A',
    'color-scheme': 'dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Safenexo',
    'application-name': 'Safenexo',
    'msapplication-TileColor': '#0A0A0A',
    'msapplication-config': '/browserconfig.xml',
  },
  icons: {
    icon: '/favicon_safenexo.png',
    shortcut: '/favicon_safenexo.png',
    apple: '/favicon_safenexo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
