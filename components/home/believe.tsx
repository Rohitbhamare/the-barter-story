import Image from 'next/image'
import { Reveal } from '@/components/reveal'

function Tagline({ pre, script }: { pre: string; script: string }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="text-sm font-medium uppercase tracking-brand text-foreground/70">
        {pre}
      </span>
      <span className="font-script text-4xl leading-none text-foreground sm:text-5xl">
        {script}
      </span>
    </p>
  )
}

export function Believe() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <Reveal className="mb-16 flex flex-col items-start">
        <span className="mb-1 pl-1 text-sm font-medium uppercase tracking-brand text-foreground/60">
          At
        </span>
        <span className="font-script text-6xl leading-[0.9] text-foreground sm:text-7xl">
          Moment of Love
        </span>
        <span className="mt-2 pl-1 text-sm font-medium uppercase tracking-brand text-foreground/70">
          We Believe In
        </span>
      </Reveal>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden" delay={0.05}>
            <Image
              src="https://lh3.googleusercontent.com/d/1pqOpbrahxK02mHNxfUKQdI3gXxyleB96"
              alt="Bride in an embroidered veil during a wedding ritual"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="flex items-center" delay={0.1}>
            <Tagline pre="No Props, No" script="Perfection" />
          </Reveal>
        </div>

        <div className="flex flex-col gap-16 md:pt-24">
          <Reveal className="relative aspect-[4/5] overflow-hidden" delay={0.1}>
            <Image
              src="https://lh3.googleusercontent.com/d/1rAD-cvFxsvkFDT35HEERM-tiEkeAMG87"
              alt="Elegant couple in an ornate palace interior"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Tagline pre="Capturing The" script="Unsaid" />
          </Reveal>
          <Reveal className="relative aspect-[4/5] overflow-hidden" delay={0.05}>
            <Image
              src="https://lh3.googleusercontent.com/d/1GcvjDbKLDWEXAKd3obU3SZSpEkw-5t_i"
              alt="A tender close-up of a bride and groom"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
           <Reveal className="relative aspect-[4/5] overflow-hidden" delay={0.05}>
            <Image
              src="https://lh3.googleusercontent.com/d/1bf4IaKsXWQJmoo2l8APBjAuAs2HzaZRZ"
              alt="A tender close-up of a bride and groom"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Tagline pre="Just Moments That" script="Breathe" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
