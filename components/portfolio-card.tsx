import Image from 'next/image'
import type { PortfolioItem } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function PortfolioCard({ item, priority }: { item: PortfolioItem; priority?: boolean }) {
  const content = (
    <>
      <div className="relative aspect-[16/7] min-h-[220px] w-full overflow-hidden">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={`${item.title} — ${item.location}`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2
          className="font-serif text-3xl uppercase tracking-wide sm:text-4xl"
          style={{ color: item.tone }}
        >
          {item.title}
        </h2>
        <p
          className="font-serif text-sm uppercase tracking-widest sm:text-base"
          style={{ color: item.tone, opacity: 0.85 }}
        >
          {item.location}
        </p>
      </div>
    </>
  )

  if (item.link) {
    return (
      <Reveal as="li" className="group">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          {content}
        </a>
      </Reveal>
    )
  }

  return (
    <Reveal as="li" className="group">
      {content}
    </Reveal>
  )
}
