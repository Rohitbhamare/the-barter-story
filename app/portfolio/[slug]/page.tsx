import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InstagramStrip } from '@/components/instagram-strip'
import { Reveal } from '@/components/reveal'
import { coupleGalleries } from '@/lib/data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const couple = coupleGalleries.find((c) => c.slug === slug)

  if (!couple) {
    return { title: 'Not Found' }
  }

  return {
    title: couple.title,
    description: `Wedding gallery of ${couple.title} in ${couple.location} by Moment of Love.`,
  }
}

export function generateStaticParams() {
  return coupleGalleries.map((couple) => ({
    slug: couple.slug,
  }))
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params
  const couple = coupleGalleries.find((c) => c.slug === slug)

  if (!couple) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-64 overflow-hidden md:h-96">
          <Image
            src={couple.coverImage || '/placeholder.svg'}
            alt={couple.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/50 to-transparent p-5 sm:p-8">
            <Reveal className="flex flex-col gap-2">
              <h1
                className="font-serif text-4xl font-bold uppercase tracking-wide sm:text-5xl"
                style={{ color: couple.tone }}
              >
                {couple.title}
              </h1>
              <p
                className="font-serif text-sm uppercase tracking-widest"
                style={{ color: couple.tone, opacity: 0.85 }}
              >
                {couple.location}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Gallery Grid */}
        <section aria-labelledby="gallery-heading" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <h2 id="gallery-heading" className="sr-only">
            {couple.title} Gallery
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {couple.galleryImages.map((image, i) => (
              <Reveal key={image} as="li" delay={i * 0.05}>
                <div className="group relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={`${couple.title} gallery image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Testimonial Section */}
        <section
          aria-labelledby="testimonial-heading"
          className="bg-cream py-16 md:py-24"
        >
          <div className="mx-auto max-w-2xl px-5 sm:px-8">
            <Reveal delay={0.1}>
              <h2 id="testimonial-heading" className="sr-only">
                Testimonial
              </h2>
              <div className="space-y-6 text-center">
                <p className="font-serif text-xl leading-relaxed text-foreground/80 md:text-2xl">
                  {couple.testimonial}
                </p>
                <div>
                  <p className="font-serif text-sm uppercase tracking-widest" style={{ color: couple.tone }}>
                    {couple.title}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-5 sm:px-8">
            <Reveal delay={0.1} className="space-y-6 text-center">
              <h2 className="font-serif text-3xl uppercase tracking-wide sm:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-foreground/70 md:text-base">
                <p>
                  We create wedding stories through an honest lens, blending documentary authenticity with editorial elegance. Every celebration we capture is treated as a love letter — intimate, timeless, and deeply personal.
                </p>
                <p>
                  Our philosophy centers on understanding the nuances of your day. We&apos;re present without being intrusive, capturing the quiet moments alongside the grand celebrations — the hand-holds, the shared glances, the unspoken promises.
                </p>
                <p>
                  At Moment of Love, we believe your wedding story deserves to be told beautifully. We&apos;re here to ensure every emotion, every detail, and every heartbeat is remembered exactly as it was.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
          <Reveal className="flex flex-col items-center gap-8 text-center">
            <div className="space-y-3">
              <h3 className="font-serif text-3xl uppercase tracking-wide sm:text-4xl">
                Begin Your Story
              </h3>
              <p className="text-sm text-foreground/60 md:text-base">
                Share your celebration details and let&apos;s create something timeless together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-foreground px-8 py-3 font-medium uppercase tracking-wider transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Request a Quote
            </Link>
          </Reveal>
        </section>
      </main>
      <InstagramStrip />
      <Footer />
    </>
  )
}
