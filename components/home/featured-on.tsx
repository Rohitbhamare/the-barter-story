import { featuredOn } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function FeaturedOn() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-8">
        <Reveal className="flex flex-col items-center gap-8">
          <h2 className="flex items-baseline gap-3">
            <span className="text-sm font-medium uppercase tracking-brand text-foreground/70">
              We Are
            </span>
            <span className="font-script text-4xl leading-none text-foreground">Featured On</span>
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {featuredOn.map((brand) => (
              <li
                key={brand}
                className="font-serif text-lg font-semibold uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
