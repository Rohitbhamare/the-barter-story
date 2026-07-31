import Link from 'next/link'
import Image from 'next/image'
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
      aria-label="Moment of Love — home"
      className={cn(
        'leading-none transition-opacity hover:opacity-70',
        className,
      )}
    >
      <Image
        src="/logo.png"
        alt="Moment of Love"
        width={variant === 'mark' ? 40 : 200}
        // width={40}
        height={40}
        priority
        className="h-auto w-auto"
      />
    </Link>
  )
}
