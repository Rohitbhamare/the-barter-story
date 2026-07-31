import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      <Image
        // src="https://lh3.googleusercontent.com/d/1jfdG7mNg1EPqUaAQOK6KQJo_k_WpjACL"
          src="https://lh3.googleusercontent.com/d/1-qsDEndMtsOkSJYLjymtKoyjz2SYkqPG"
        alt="A couple holding hands walking along a rocky ocean shoreline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  )
}
