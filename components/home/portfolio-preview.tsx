import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const previews = [
  { title: 'Siddesh & Ashwini', image: 'https://lh3.googleusercontent.com/d/1qToqzqpmZ_G6RltUy1cCks1cyRUB4DmH', span: 'md:col-span-3 md:mt-16' },
  { title: 'Shiv and Divya', image: 'https://lh3.googleusercontent.com/d/1lmC9gEeLDpho45ASX-OM6kAdHF6hAxBv' },
  { title: 'Neha and Bhavneet', image: '/images/keval-urvashi.png', span: 'md:col-span-3 md:mt-24' },
]

export function PortfolioPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
        {previews.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.08}
            className={`group ${item.span} ${i === 2 ? 'sm:col-span-2 md:col-span-3' : ''}`}
          >
            <Link href="/portfolio" className="block">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-script text-3xl text-foreground/90">{item.title}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-end" delay={0.1}>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-brand text-foreground/80 transition-colors hover:text-foreground"
        >
          See all stories
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  )
}
