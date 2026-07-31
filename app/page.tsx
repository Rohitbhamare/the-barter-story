import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InstagramStrip } from '@/components/instagram-strip'
import { Hero } from '@/components/home/hero'
import { Believe } from '@/components/home/believe'
import { PortfolioBand } from '@/components/home/portfolio-band'
import { PortfolioPreview } from '@/components/home/portfolio-preview'
import { Testimonials } from '@/components/home/testimonials'
import { Memorable } from '@/components/home/memorable'
import { FeaturedOn } from '@/components/home/featured-on'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Believe />
        <PortfolioBand />
        <PortfolioPreview />
        <Testimonials />
        <Memorable />
        <FeaturedOn />
        <InstagramStrip />
      </main>
      <Footer />
    </>
  )
}
