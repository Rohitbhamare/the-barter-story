import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  variant = 'mark',
  className,
}: {
  variant?: 'mark' | 'wordmark'
  className?: string
}) {
  return (
    <Link
      href="/"
      aria-label="The Barter Story — home"
      className={cn(
        'font-serif leading-none text-foreground transition-opacity hover:opacity-70',
        className,
      )}
    >
      {variant === 'mark' ? (
        <span className="text-3xl font-bold tracking-tight">B<span className="text-accent">.</span></span>
      ) : (
        <span className="text-2xl font-bold tracking-tight">
          TheBarterStory<span className="text-accent">.</span>
        </span>
      )}
    </Link>
  )
}
