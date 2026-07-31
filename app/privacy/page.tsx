import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Privacy Policy — The Barter Story',
  description:
    'How The Barter Story collects, uses, and protects the information you share with us.',
}

const sections = [
  {
    heading: 'The information we collect',
    body: 'When you reach out through our enquiry form, we collect the details you choose to share — your name, email, contact number, event dates, venue, guest count and any notes about your story. We only ask for what helps us understand and respond to your enquiry.',
  },
  {
    heading: 'How we use it',
    body: 'Your details are used solely to respond to your enquiry, prepare a quote and coordinate your booking. We do not sell, rent or trade your information with third parties for marketing purposes.',
  },
  {
    heading: 'Your images',
    body: 'We treat your photographs and films with care. We will always seek your consent before sharing selected images on our portfolio, social channels or in submissions to features. You may ask us to keep your gallery entirely private at any time.',
  },
  {
    heading: 'Data retention',
    body: 'Enquiry details are kept only as long as needed to serve you well. You can ask us to update or delete your information whenever you like by writing to us.',
  },
  {
    heading: 'Get in touch',
    body: 'For any question about your privacy or the details we hold, email us at hello@thebarterstory.com and we will respond personally.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:pt-44">
          <Reveal>
            <p className="tracking-brand text-xs uppercase text-muted-foreground">
              The Barter Story
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Your trust matters to us as much as your story does. Here is how we
              handle the details you share.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-10">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.05}>
                <article className="border-t border-border pt-8">
                  <h2 className="font-serif text-xl text-foreground md:text-2xl">
                    {section.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
