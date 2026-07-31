import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InstagramStrip } from '@/components/instagram-strip'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { InstagramIcon, MailIcon } from '@/components/social-icons'
import { social } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Begin your story with The Barter Story. Share a few details about your celebration and we will be in touch.',
}

const intro = [
  "At The Barter Story, we're drawn to the quiet beauty found in emotion — fleeting glances, shared laughter, unspoken promises. Our philosophy centers on capturing these honest exchanges in a way that feels both intimate and timeless.",
  'With years of experience framing love across continents, our work blends natural storytelling with an editorial eye — minimalist in approach, yet rich in feeling. Each frame is composed with care, balancing luxury with warmth.',
  'Our team is small, thoughtful, and quietly passionate — creating space for your story to unfold, without ever overshadowing it.',
  "The truest moments aren't staged — they're felt, and deserve to be remembered just as they were.",
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <Reveal className="grid grid-cols-5 gap-4">
              <div className="relative col-span-2 mt-16 aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/uneza.png"
                  alt="Bride in a misty landscape"
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/arpita-jigar.png"
                  alt="A bride and groom in golden light"
                  fill
                  priority
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="pb-2">
              <p className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
                TheBarterStory<span className="text-accent">.</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-12 grid max-w-3xl gap-5">
            {intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-foreground/75">
                {p}
              </p>
            ))}
          </Reveal>
        </section>

        <section className="bg-card">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
            <Reveal className="mb-4">
              <span className="text-sm font-medium uppercase tracking-brand text-foreground/60">
                Begin Your
              </span>
              <h1 className="font-script text-6xl leading-[0.95] text-foreground sm:text-7xl">
                Story With Us
              </h1>
            </Reveal>
            <Reveal delay={0.05} className="mb-12 max-w-2xl">
              <p className="text-sm leading-relaxed text-foreground/70">
                From your first message to your final frame, we&apos;re here with care — gently
                guiding the process, listening closely, and crafting images that feel as meaningful
                as the moments themselves.
              </p>
            </Reveal>

            <ContactForm />

            <div className="mt-16">
              <h2 className="mb-5 font-serif text-2xl text-foreground">Connect with us</h2>
              <ul className="flex flex-col gap-3 text-sm text-foreground/80">
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 transition-colors hover:text-foreground"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {social.handle}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${social.email}`}
                    className="inline-flex items-center gap-3 transition-colors hover:text-foreground"
                  >
                    <MailIcon className="h-4 w-4" />
                    {social.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <InstagramStrip />
      </main>
      <Footer />
    </>
  )
}
