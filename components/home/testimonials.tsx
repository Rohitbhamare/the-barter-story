import { testimonials } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Testimonials() {
  return (
    <section className="bg-sand/70">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-brand text-foreground/70">
            Trusted By
          </p>
          <h2 className="mt-2 flex flex-wrap items-baseline justify-center gap-x-3 text-foreground">
            <span className="text-sm font-medium uppercase tracking-brand text-foreground/70">
              Those Who Value
            </span>
            <span className="font-script text-5xl leading-none sm:text-6xl">Feeling</span>
            <span className="text-sm font-medium uppercase tracking-brand text-foreground/70">
              Over
            </span>
            <span className="font-script text-5xl leading-none sm:text-6xl">Filters</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.couple} delay={i * 0.1} as="div">
              <h3 className="mb-4 font-script text-3xl text-foreground">{t.couple}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">{t.quote}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex items-center justify-center gap-6" delay={0.1}>
          <span className="h-px w-16 bg-foreground/40" />
          <span className="font-serif text-2xl font-bold text-foreground">B.</span>
          <span className="h-px w-16 bg-foreground/40" />
        </Reveal>
      </div>
    </section>
  )
}
