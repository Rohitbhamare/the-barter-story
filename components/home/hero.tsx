import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative aspect-[16/7] min-h-[280px] w-full overflow-hidden bg-foreground">
      <Image
        src="/images/hero-bw.png"
        alt="A couple holding hands walking along a rocky ocean shoreline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  )
}
