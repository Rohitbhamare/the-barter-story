import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InstagramStrip } from '@/components/instagram-strip'
import { FilmsList } from '@/components/films-list'
import { filmItems } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Films',
  description:
    'Cinematic wedding films by Moment of Love — documentary storytelling that lets your moments breathe.',
}

export default function FilmsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
        <h1 className="sr-only">Films</h1>
        <FilmsList films={filmItems} />
      </main>
      <InstagramStrip />
      <Footer />
    </>
  )
}
