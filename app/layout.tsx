import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat, Alex_Brush } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alex-brush',
  display: 'swap',
})

const SITE_URL = 'https://thebarterstory.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Barter Story — Timeless Wedding Photography & Films',
    template: '%s | The Barter Story',
  },
  description:
    'The Barter Story captures honest, intimate wedding stories across the world — minimalist in approach, rich in feeling. Photography and films that feel as meaningful as the moments themselves.',
  keywords: [
    'wedding photography',
    'wedding films',
    'documentary wedding',
    'India wedding photographer',
    'destination wedding',
    'The Barter Story',
  ],
  authors: [{ name: 'The Barter Story' }],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'The Barter Story',
    title: 'The Barter Story — Timeless Wedding Photography & Films',
    description:
      'Honest, intimate wedding stories — minimalist in approach, rich in feeling.',
    images: [{ url: '/images/hero-bw.png', width: 1200, height: 630, alt: 'The Barter Story' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Barter Story — Timeless Wedding Photography & Films',
    description:
      'Honest, intimate wedding stories — minimalist in approach, rich in feeling.',
    images: ['/images/hero-bw.png'],
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3eae0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${alexBrush.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
