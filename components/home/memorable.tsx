import { SiteButtonLink } from '@/components/site-button'
import { Reveal } from '@/components/reveal'

export function Memorable() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 md:py-32">
        <Reveal>
          <h2 className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 text-foreground">
            <span className="text-sm font-medium uppercase tracking-brand text-foreground/70">
              Make Your
            </span>
            <span className="font-script text-5xl leading-none sm:text-6xl">Wedding</span>
            <span className="text-sm font-medium uppercase tracking-brand text-foreground/70">
              Day
            </span>
          </h2>
          <p className="mt-2 font-script text-5xl leading-none text-foreground sm:text-6xl">
            Memorable
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <SiteButtonLink href="/contact">Request A Quote</SiteButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
