import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Safenexo - AI-Powered Digital Studio | Web Development & Mobile Apps',
    template: '%s | Safenexo'
  },
  description: 'Safenexo is a next-generation digital studio specializing in AI-powered web development, mobile app experiences, chatbot automation, and organic growth SEO. We craft intelligent digital products that drive business growth.',
  keywords: [
    'AI web development',
    'mobile app development',
    'chatbot automation',
    'SEO services',
    'digital strategy',
    'artificial intelligence',
    'web design',
    'UX design',
    'digital transformation',
    'automation systems',
    'e-commerce development',
    'CRM systems',
    'data analytics',
    'cross-platform apps',
    'conversational AI'
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
    title: 'Safenexo - AI-Powered Digital Studio | Web Development & Mobile Apps',
    description: 'Safenexo is a next-generation digital studio specializing in AI-powered web development, mobile app experiences, chatbot automation, and organic growth SEO.',
    images: [
      {
        url: '/images/safenexo-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Safenexo - AI-Powered Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safenexo - AI-Powered Digital Studio | Web Development & Mobile Apps',
    description: 'Safenexo is a next-generation digital studio specializing in AI-powered web development, mobile app experiences, chatbot automation, and organic growth SEO.',
    images: ['/images/safenexo-twitter-image.jpg'],
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
