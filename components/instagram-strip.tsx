import Image from 'next/image'
import { instagramFeed, social } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function InstagramStrip() {
  return (
    <section aria-labelledby="instagram-heading" className="bg-cream pt-16">
      <Reveal className="mx-auto mb-8 flex max-w-6xl items-center justify-center gap-3 px-5">
        <h2
          id="instagram-heading"
          className="text-sm font-medium uppercase tracking-brand text-foreground/80"
        >
          Follow Us On
        </h2>
        <span className="font-script text-4xl leading-none text-foreground">Instagram</span>
      </Reveal>

      <div className="mx-auto mb-10 h-px max-w-6xl bg-border" />

      <ul className="grid grid-cols-3 md:grid-cols-6">
        {instagramFeed.map((item, i) => (
          <li key={item.src} className="group relative aspect-square overflow-hidden">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram: ${item.alt}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={i < 3}
              />
              <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/15" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
