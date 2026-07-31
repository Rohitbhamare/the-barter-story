'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { FilmItem } from '@/lib/data'

function FilmCard({ film, onPlay, priority }: { film: FilmItem; onPlay: () => void; priority?: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[3/4] w-full overflow-hidden sm:aspect-[16/10]"
    >
      <Image
        src={film.image || '/placeholder.svg'}
        alt={`${film.title} — ${film.subtitle}`}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 900px"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-foreground/20" />

      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play the film for ${film.title}`}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-background/70 bg-background/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-background/30">
          <Play className="ml-1 h-6 w-6 fill-background text-background" />
        </span>
      </button>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 sm:p-10">
        <h2 className="font-serif text-3xl uppercase tracking-wide text-background sm:text-5xl">
          {film.title}
        </h2>
        <p className="mt-1 text-xs uppercase tracking-brand text-background/85 sm:text-sm">
          {film.subtitle}
        </p>
      </div>
    </motion.li>
  )
}

export function FilmsList({ films }: { films: FilmItem[] }) {
  const [active, setActive] = useState<FilmItem | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <ul className="flex flex-col gap-6">
        {films.map((film, i) => (
          <FilmCard key={film.title} film={film} onPlay={() => setActive(film)} priority={i === 0} />
        ))}
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-5"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} film`}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-background/90 transition-colors hover:text-background"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={active.image || '/placeholder.svg'}
                  alt={active.title}
                  fill
                  sizes="100vw"
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <Play className="h-14 w-14 fill-background text-background" />
                  <p className="font-serif text-2xl uppercase tracking-wide text-background sm:text-3xl">
                    {active.title}
                  </p>
                  <p className="text-xs uppercase tracking-brand text-background/80">
                    {active.subtitle} — trailer coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
