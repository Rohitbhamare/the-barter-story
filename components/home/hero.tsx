import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://lh3.googleusercontent.com/d/1jfdG7mNg1EPqUaAQOK6KQJo_k_WpjACL"
        alt="Hero Image"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  )
}