import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InstagramStrip } from '@/components/instagram-strip'
import { PortfolioCard } from '@/components/portfolio-card'
import { portfolioItems } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'A collection of wedding stories photographed by Moment of Love across India, Thailand and beyond — honest, intimate and timeless.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
        <h1 className="sr-only">Portfolio</h1>
        <ul className="flex flex-col gap-16 md:gap-24">
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={item.title} item={item} priority={i === 0} />
          ))}
        </ul>
      </main>
      <InstagramStrip />
      <Footer />
    </>
  )
}
