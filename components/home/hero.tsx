import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative aspect-[16/7] min-h-[280px] w-full overflow-hidden bg-foreground">
      <Image
        src="https://lh3.googleusercontent.com/d/1jfdG7mNg1EPqUaAQOK6KQJo_k_WpjACL"
        alt="A couple holding hands walking along a rocky ocean shoreline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  )
}
